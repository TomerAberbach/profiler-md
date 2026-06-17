# Sampling profile

Collected 1,677 samples.

| Category |      % | Samples |
| -------- | -----: | ------: |
| ours     | 100.0% |   1,677 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                                                      | Location                                                 |
| ----: | ------: | ------------------------------------------------------------- | -------------------------------------------------------- |
| 44.3% |     743 | `accumulate(Double[], double[])`                              | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| 22.8% |     383 | `distance(Double[], Double[])`                                | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| 12.6% |     211 | `findNearestCentroid()`                                       | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  6.4% |     107 | `collectClusters(int[])`                                      | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  3.9% |      66 | `computeIfAbsent(Object, Function)`                           | java.util.HashMap                                        |
|  3.1% |      52 | `vectorSum()`                                                 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  2.0% |      33 | `copyOf(Object[], int)`                                       | java.util.Arrays                                         |
|  1.0% |      16 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`     | java.util.concurrent.ForkJoinPool                        |
|  0.9% |      15 | `merge(Object, Object, BiFunction)`                           | java.util.HashMap                                        |
|  0.7% |      11 | `computeDirectly()`                                           | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  0.4% |       6 | `grow(int)`                                                   | java.util.ArrayList                                      |
|  0.2% |       3 | `resize()`                                                    | java.util.HashMap                                        |
|  0.1% |       2 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | java.util.zip.Inflater                                   |
|  0.1% |       2 | `wrapSink(Sink)`                                              | java.util.stream.AbstractPipeline                        |
|  0.1% |       2 | `exec()`                                                      | java.util.concurrent.RecursiveTask                       |
|  0.1% |       2 | `doExec()`                                                    | java.util.concurrent.ForkJoinTask                        |
|  0.1% |       2 | `tryRemoveAndExec(ForkJoinTask, boolean)`                     | java.util.concurrent.ForkJoinPool$WorkQueue              |
|  0.1% |       2 | `awaitDone(int, long)`                                        | java.util.concurrent.ForkJoinTask                        |
|  0.1% |       2 | `lambda$merge$7(Map, Object, List)`                           | org.renaissance.jdk.concurrent.JavaKMeans                |
|  0.1% |       2 | `unpark(Object)`                                              | jdk.internal.misc.Unsafe                                 |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Location                                                    |
| -----: | ------: | ----------------------------------------------------------- |
| 100.0% |     743 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:411 |

##### `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Location                                                     |
| -----: | ------: | ------------------------------------------------------------ |
| 100.0% |     383 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:248 |

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|     % | Samples | Location                                                     |
| ----: | ------: | ------------------------------------------------------------ |
| 87.7% |     185 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:229 |
|  8.5% |      18 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:225 |
|  3.8% |       8 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:230 |

##### `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|     % | Samples | Location                                                     |
| ----: | ------: | ------------------------------------------------------------ |
| 60.7% |      65 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215 |
| 38.3% |      41 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:211 |
|  0.9% |       1 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:209 |

##### `computeIfAbsent(Object, Function)` (java.util.HashMap)

|     % | Samples | Location               |
| ----: | ------: | ---------------------- |
| 97.0% |      64 | java.util.HashMap:1219 |
|  3.0% |       2 | java.util.HashMap:1206 |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|     % | Samples | Location                                                    |
| ----: | ------: | ----------------------------------------------------------- |
| 75.0% |      39 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400 |
| 21.2% |      11 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:403 |
|  3.8% |       2 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:402 |

##### `copyOf(Object[], int)` (java.util.Arrays)

|      % | Samples | Location              |
| -----: | ------: | --------------------- |
| 100.0% |      33 | java.util.Arrays:3482 |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (java.util.concurrent.ForkJoinPool)

|     % | Samples | Location                               |
| ----: | ------: | -------------------------------------- |
| 43.8% |       7 | java.util.concurrent.ForkJoinPool:2053 |
| 37.5% |       6 | java.util.concurrent.ForkJoinPool:2058 |
| 18.8% |       3 | java.util.concurrent.ForkJoinPool:2039 |

##### `merge(Object, Object, BiFunction)` (java.util.HashMap)

|     % | Samples | Location               |
| ----: | ------: | ---------------------- |
| 73.3% |      11 | java.util.HashMap:1384 |
| 26.7% |       4 | java.util.HashMap:1371 |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Location                                                     |
| -----: | ------: | ------------------------------------------------------------ |
| 100.0% |      11 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:204 |

##### `grow(int)` (java.util.ArrayList)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       6 | java.util.ArrayList:239 |

##### `resize()` (java.util.HashMap)

|      % | Samples | Location              |
| -----: | ------: | --------------------- |
| 100.0% |       3 | java.util.HashMap:741 |

##### `wrapSink(Sink)` (java.util.stream.AbstractPipeline)

|      % | Samples | Location                              |
| -----: | ------: | ------------------------------------- |
| 100.0% |       2 | java.util.stream.AbstractPipeline:546 |

##### `exec()` (java.util.concurrent.RecursiveTask)

|      % | Samples | Location                               |
| -----: | ------: | -------------------------------------- |
| 100.0% |       2 | java.util.concurrent.RecursiveTask:110 |

##### `doExec()` (java.util.concurrent.ForkJoinTask)

|      % | Samples | Location                              |
| -----: | ------: | ------------------------------------- |
| 100.0% |       2 | java.util.concurrent.ForkJoinTask:387 |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue)

|     % | Samples | Location                                         |
| ----: | ------: | ------------------------------------------------ |
| 50.0% |       1 | java.util.concurrent.ForkJoinPool$WorkQueue:1332 |
| 50.0% |       1 | java.util.concurrent.ForkJoinPool$WorkQueue:1347 |

##### `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask)

|      % | Samples | Location                              |
| -----: | ------: | ------------------------------------- |
| 100.0% |       2 | java.util.concurrent.ForkJoinTask:437 |

##### `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % | Samples | Location                                      |
| -----: | ------: | --------------------------------------------- |
| 100.0% |       2 | org.renaissance.jdk.concurrent.JavaKMeans:112 |

#### Callers

Callers ranked by contribution to each function's self samples. Caller attribution may be imprecise due to inlining.

##### `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Caller        | Location                                                |
| -----: | ------: | ------------- | ------------------------------------------------------- |
| 100.0% |     743 | `vectorSum()` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Caller                  | Location                                                 |
| -----: | ------: | ----------------------- | -------------------------------------------------------- |
| 100.0% |     383 | `findNearestCentroid()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Caller              | Location                                                 |
| -----: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% |     211 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Caller              | Location                                                 |
| -----: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% |     107 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `computeIfAbsent(Object, Function)` (java.util.HashMap)

|     % | Samples | Caller                   | Location                                                 |
| ----: | ------: | ------------------------ | -------------------------------------------------------- |
| 95.5% |      63 | `collectClusters(int[])` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  3.0% |       2 | `doExec()`               | java.util.concurrent.ForkJoinTask                        |
|  1.5% |       1 | `copyOf(Object[], int)`  | java.util.Arrays                                         |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Caller              | Location                                                |
| -----: | ------: | ------------------- | ------------------------------------------------------- |
| 100.0% |      52 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `copyOf(Object[], int)` (java.util.Arrays)

|      % | Samples | Caller      | Location            |
| -----: | ------: | ----------- | ------------------- |
| 100.0% |      33 | `grow(int)` | java.util.ArrayList |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (java.util.concurrent.ForkJoinPool)

|      % | Samples | Caller                 | Location                          |
| -----: | ------: | ---------------------- | --------------------------------- |
| 100.0% |      16 | `awaitDone(int, long)` | java.util.concurrent.ForkJoinTask |

##### `merge(Object, Object, BiFunction)` (java.util.HashMap)

|      % | Samples | Caller                              | Location                                  |
| -----: | ------: | ----------------------------------- | ----------------------------------------- |
| 100.0% |      15 | `lambda$merge$7(Map, Object, List)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Caller              | Location                                                 |
| -----: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% |      11 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `grow(int)` (java.util.ArrayList)

|      % | Samples | Caller   | Location            |
| -----: | ------: | -------- | ------------------- |
| 100.0% |       6 | `grow()` | java.util.ArrayList |

##### `resize()` (java.util.HashMap)

|     % | Samples | Caller                                          | Location          |
| ----: | ------: | ----------------------------------------------- | ----------------- |
| 66.7% |       2 | `computeIfAbsent(Object, Function)`             | java.util.HashMap |
| 33.3% |       1 | `putVal(int, Object, Object, boolean, boolean)` | java.util.HashMap |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (java.util.zip.Inflater)

|      % | Samples | Caller                      | Location               |
| -----: | ------: | --------------------------- | ---------------------- |
| 100.0% |       2 | `inflate(byte[], int, int)` | java.util.zip.Inflater |

##### `wrapSink(Sink)` (java.util.stream.AbstractPipeline)

|      % | Samples | Caller                               | Location                          |
| -----: | ------: | ------------------------------------ | --------------------------------- |
| 100.0% |       2 | `wrapAndCopyInto(Sink, Spliterator)` | java.util.stream.AbstractPipeline |

##### `exec()` (java.util.concurrent.RecursiveTask)

|      % | Samples | Caller     | Location                          |
| -----: | ------: | ---------- | --------------------------------- |
| 100.0% |       2 | `doExec()` | java.util.concurrent.ForkJoinTask |

##### `doExec()` (java.util.concurrent.ForkJoinTask)

|      % | Samples | Caller                                    | Location                                    |
| -----: | ------: | ----------------------------------------- | ------------------------------------------- |
| 100.0% |       2 | `tryRemoveAndExec(ForkJoinTask, boolean)` | java.util.concurrent.ForkJoinPool$WorkQueue |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue)

|      % | Samples | Caller                 | Location                          |
| -----: | ------: | ---------------------- | --------------------------------- |
| 100.0% |       2 | `awaitDone(int, long)` | java.util.concurrent.ForkJoinTask |

##### `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask)

|      % | Samples | Caller   | Location                          |
| -----: | ------: | -------- | --------------------------------- |
| 100.0% |       2 | `join()` | java.util.concurrent.ForkJoinTask |

##### `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % | Samples | Caller                   | Location                                                             |
| -----: | ------: | ------------------------ | -------------------------------------------------------------------- |
| 100.0% |       2 | `accept(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007801204d88 |

##### `unpark(Object)` (jdk.internal.misc.Unsafe)

|      % | Samples | Caller           | Location                               |
| -----: | ------: | ---------------- | -------------------------------------- |
| 100.0% |       2 | `unpark(Thread)` | java.util.concurrent.locks.LockSupport |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                                  | Location                                                 |
| ----: | ------: | --------------------------------------------------------- | -------------------------------------------------------- |
| 99.5% |   1,669 | `doExec()`                                                | java.util.concurrent.ForkJoinTask                        |
| 99.4% |   1,667 | `compute()`                                               | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask     |
| 99.4% |   1,667 | `exec()`                                                  | java.util.concurrent.RecursiveTask                       |
| 98.1% |   1,645 | `awaitDone(int, long)`                                    | java.util.concurrent.ForkJoinTask                        |
| 98.1% |   1,645 | `join()`                                                  | java.util.concurrent.ForkJoinTask                        |
| 96.9% |   1,625 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | java.util.concurrent.ForkJoinPool$WorkQueue              |
| 86.2% |   1,446 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | java.util.concurrent.ForkJoinPool$WorkQueue              |
| 83.4% |   1,398 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | java.util.concurrent.ForkJoinPool                        |
| 83.2% |   1,396 | `runWorker(ForkJoinPool$WorkQueue)`                       | java.util.concurrent.ForkJoinPool                        |
| 80.7% |   1,354 | `run()`                                                   | java.util.concurrent.ForkJoinWorkerThread                |
| 48.8% |     818 | `computeDirectly()`                                       | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| 48.8% |     818 | `computeDirectly()`                                       | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| 47.4% |     795 | `vectorSum()`                                             | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| 47.4% |     795 | `computeDirectly()`                                       | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| 47.4% |     795 | `computeDirectly()`                                       | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| 44.3% |     743 | `accumulate(Double[], double[])`                          | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| 35.4% |     594 | `findNearestCentroid()`                                   | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| 24.0% |     402 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | java.util.concurrent.ForkJoinPool                        |
| 22.8% |     383 | `distance(Double[], Double[])`                            | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| 17.1% |     286 | `invoke()`                                                | java.util.concurrent.ForkJoinTask                        |

#### Callees

Callees ranked by contribution to each function's total samples. Callee attribution may be imprecise due to inlining.

##### `doExec()` (java.util.concurrent.ForkJoinTask)

|     % | Samples | Callee                              | Location                                          |
| ----: | ------: | ----------------------------------- | ------------------------------------------------- |
| 99.9% |   1,667 | `exec()`                            | java.util.concurrent.RecursiveTask                |
|  0.6% |      10 | `exec()`                            | java.util.concurrent.ForkJoinTask$AdaptedCallable |
|  0.1% |       2 | `computeIfAbsent(Object, Function)` | java.util.HashMap                                 |
|  0.1% |       1 | `setDone()`                         | java.util.concurrent.ForkJoinTask                 |

##### `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)

|     % | Samples | Callee                           | Location                                                 |
| ----: | ------: | -------------------------------- | -------------------------------------------------------- |
| 98.7% |   1,645 | `join()`                         | java.util.concurrent.ForkJoinTask                        |
| 49.1% |     818 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| 47.7% |     795 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| 16.3% |     272 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
|  1.4% |      23 | `combineResults(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `exec()` (java.util.concurrent.RecursiveTask)

|      % | Samples | Callee      | Location                                             |
| -----: | ------: | ----------- | ---------------------------------------------------- |
| 100.0% |   1,667 | `compute()` | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |

##### `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask)

|     % | Samples | Callee                                                    | Location                                    |
| ----: | ------: | --------------------------------------------------------- | ------------------------------------------- |
| 98.8% |   1,625 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | java.util.concurrent.ForkJoinPool$WorkQueue |
| 24.3% |     400 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | java.util.concurrent.ForkJoinPool           |
|  0.1% |       1 | `park()`                                                  | java.util.concurrent.locks.LockSupport      |

##### `join()` (java.util.concurrent.ForkJoinTask)

|      % | Samples | Callee                 | Location                          |
| -----: | ------: | ---------------------- | --------------------------------- |
| 100.0% |   1,645 | `awaitDone(int, long)` | java.util.concurrent.ForkJoinTask |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue)

|      % | Samples | Callee     | Location                          |
| -----: | ------: | ---------- | --------------------------------- |
| 100.0% |   1,625 | `doExec()` | java.util.concurrent.ForkJoinTask |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue)

|      % | Samples | Callee     | Location                          |
| -----: | ------: | ---------- | --------------------------------- |
| 100.0% |   1,446 | `doExec()` | java.util.concurrent.ForkJoinTask |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool)

|      % | Samples | Callee                                               | Location                                    |
| -----: | ------: | ---------------------------------------------------- | ------------------------------------------- |
| 100.0% |   1,398 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool$WorkQueue |

##### `runWorker(ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool)

|     % | Samples | Callee                                   | Location                          |
| ----: | ------: | ---------------------------------------- | --------------------------------- |
| 99.9% |   1,395 | `scan(ForkJoinPool$WorkQueue, int, int)` | java.util.concurrent.ForkJoinPool |
|  0.1% |       1 | `awaitWork(ForkJoinPool$WorkQueue)`      | java.util.concurrent.ForkJoinPool |

##### `run()` (java.util.concurrent.ForkJoinWorkerThread)

|      % | Samples | Callee                              | Location                          |
| -----: | ------: | ----------------------------------- | --------------------------------- |
| 100.0% |   1,354 | `runWorker(ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|     % | Samples | Callee                   | Location                                                 |
| ----: | ------: | ------------------------ | -------------------------------------------------------- |
| 72.6% |     594 | `findNearestCentroid()`  | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| 26.0% |     213 | `collectClusters(int[])` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Callee              | Location                                                 |
| -----: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% |     818 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|     % | Samples | Callee                           | Location                                                |
| ----: | ------: | -------------------------------- | ------------------------------------------------------- |
| 93.5% |     743 | `accumulate(Double[], double[])` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Callee        | Location                                                |
| -----: | ------: | ------------- | ------------------------------------------------------- |
| 100.0% |     795 | `vectorSum()` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Callee              | Location                                                |
| -----: | ------: | ------------------- | ------------------------------------------------------- |
| 100.0% |     795 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|     % | Samples | Callee                         | Location                                                 |
| ----: | ------: | ------------------------------ | -------------------------------------------------------- |
| 64.5% |     383 | `distance(Double[], Double[])` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (java.util.concurrent.ForkJoinPool)

|     % | Samples | Callee     | Location                          |
| ----: | ------: | ---------- | --------------------------------- |
| 97.3% |     391 | `doExec()` | java.util.concurrent.ForkJoinTask |

##### `invoke()` (java.util.concurrent.ForkJoinTask)

|      % | Samples | Callee     | Location                          |
| -----: | ------: | ---------- | --------------------------------- |
| 100.0% |     286 | `doExec()` | java.util.concurrent.ForkJoinTask |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 6.0% |     101 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 5.1% |      85 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 4.1% |      69 | `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 3.5% |      59 | `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                                                                                   |
| 3.0% |      50 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 2.9% |      49 | `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 2.9% |      49 | `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 2.3% |      39 | `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 2.1% |      36 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 2.0% |      33 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 2.0% |      33 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1.7% |      28 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                                                                                               |
| 1.7% |      28 | `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()`                                                         |
| 1.6% |      27 | `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.6% |      26 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue)                                                                                                                                             |
| 1.5% |      25 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.4% |      24 | `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` |
| 1.4% |      23 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue)                                                                                                                                             |
| 1.3% |      21 | `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                                                                                                                   |
| 1.3% |      21 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                                                                                               |


# Allocated heap profile

Allocated 40.3 GB over 1,984 samples (20.3 MB per sample).

| Category |      % |    Size | Samples |
| -------- | -----: | ------: | ------: |
| ours     | 100.0% | 40.3 GB |   1,982 |
| stdlib   |   0.0% |  2.3 kB |       2 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |    Size | Samples | Function                                     | Location                                                 |
| ----: | ------: | ------: | -------------------------------------------- | -------------------------------------------------------- |
| 93.5% | 37.7 GB |   1,708 | `copyOf(Object[], int)`                      | java.util.Arrays                                         |
|  2.7% | 1.07 GB |      65 | `findNearestCentroid()`                      | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  1.0% |  409 MB |       8 | `collectClusters(int[])`                     | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  0.7% |  274 MB |       8 | `createSubtask(int, int)`                    | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  0.4% |  179 MB |      21 | `copyOf(byte[], int)`                        | java.util.Arrays                                         |
|  0.3% |  103 MB |       2 | `vectorSum()`                                | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  0.2% | 91.5 MB |       8 | `newNode(int, Object, Object, HashMap$Node)` | java.util.HashMap                                        |
|  0.2% | 90.3 MB |       5 | `add(double[], double[])`                    | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  0.2% | 89.2 MB |       4 | `lambda$merge$6(List, List)`                 | org.renaissance.jdk.concurrent.JavaKMeans                |
|  0.2% | 67.1 MB |       5 | `lambda$collectClusters$0(Double[])`         | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  0.2% | 62.3 MB |       4 | `createSubtask(int, int)`                    | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  0.1% | 41.7 MB |      10 | `grow(int)`                                  | java.util.ArrayList                                      |
|  0.1% | 33.7 MB |       4 | `resize()`                                   | java.util.HashMap                                        |
|  0.1% | 24.4 MB |       6 | `merge(Map, Map)`                            | org.renaissance.jdk.concurrent.JavaKMeans                |
|  0.1% | 21.8 MB |       1 | `initTable()`                                | java.util.concurrent.ConcurrentHashMap                   |
|  0.0% | 15.9 MB |      22 | `copyOf(Object[], int, Class)`               | java.util.Arrays                                         |
|  0.0% | 10.1 MB |      26 | `valueOf(double)`                            | java.lang.Double                                         |
|  0.0% | 5.73 MB |      14 | `mapToObj(IntFunction, int)`                 | java.util.stream.IntPipeline                             |
|  0.0% | 4.58 MB |      12 | `intStream(Spliterator$OfInt, boolean)`      | java.util.stream.StreamSupport                           |
|  0.0% | 4.47 MB |      10 | `<init>(InputStream, Inflater, int)`         | java.util.zip.InflaterInputStream                        |

#### Lines

Lines ranked by contribution to each function's self size.

##### `copyOf(Object[], int)` (java.util.Arrays)

|      % |    Size | Samples | Location              |
| -----: | ------: | ------: | --------------------- |
| 100.0% | 37.7 GB |   1,708 | java.util.Arrays:3482 |

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Location                                                     |
| -----: | ------: | ------: | ------------------------------------------------------------ |
| 100.0% | 1.07 GB |      65 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:223 |

##### `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |   Size | Samples | Location                                                     |
| -----: | -----: | ------: | ------------------------------------------------------------ |
| 100.0% | 409 MB |       8 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:209 |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |   Size | Samples | Location                                                    |
| -----: | -----: | ------: | ----------------------------------------------------------- |
| 100.0% | 274 MB |       8 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419 |

##### `copyOf(byte[], int)` (java.util.Arrays)

|      % |   Size | Samples | Location              |
| -----: | -----: | ------: | --------------------- |
| 100.0% | 179 MB |      21 | java.util.Arrays:3541 |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |   Size | Samples | Location                                                    |
| -----: | -----: | ------: | ----------------------------------------------------------- |
| 100.0% | 103 MB |       2 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400 |

##### `newNode(int, Object, Object, HashMap$Node)` (java.util.HashMap)

|      % |    Size | Samples | Location               |
| -----: | ------: | ------: | ---------------------- |
| 100.0% | 91.5 MB |       8 | java.util.HashMap:1909 |

##### `add(double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |    Size | Samples | Location                                                    |
| -----: | ------: | ------: | ----------------------------------------------------------- |
| 100.0% | 90.3 MB |       5 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:430 |

##### `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Location                                      |
| -----: | ------: | ------: | --------------------------------------------- |
| 100.0% | 89.2 MB |       4 | org.renaissance.jdk.concurrent.JavaKMeans:114 |

##### `lambda$collectClusters$0(Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Location                                                     |
| -----: | ------: | ------: | ------------------------------------------------------------ |
| 100.0% | 67.1 MB |       5 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215 |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Location                                                     |
| -----: | ------: | ------: | ------------------------------------------------------------ |
| 100.0% | 62.3 MB |       4 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261 |

##### `grow(int)` (java.util.ArrayList)

|      % |    Size | Samples | Location                |
| -----: | ------: | ------: | ----------------------- |
| 100.0% | 41.7 MB |      10 | java.util.ArrayList:239 |

##### `resize()` (java.util.HashMap)

|      % |    Size | Samples | Location              |
| -----: | ------: | ------: | --------------------- |
| 100.0% | 33.7 MB |       4 | java.util.HashMap:710 |

##### `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Location                                      |
| -----: | ------: | ------: | --------------------------------------------- |
| 100.0% | 24.4 MB |       6 | org.renaissance.jdk.concurrent.JavaKMeans:110 |

##### `initTable()` (java.util.concurrent.ConcurrentHashMap)

|      % |    Size | Samples | Location                                    |
| -----: | ------: | ------: | ------------------------------------------- |
| 100.0% | 21.8 MB |       1 | java.util.concurrent.ConcurrentHashMap:2301 |

##### `copyOf(Object[], int, Class)` (java.util.Arrays)

|      % |    Size | Samples | Location              |
| -----: | ------: | ------: | --------------------- |
| 100.0% | 15.9 MB |      22 | java.util.Arrays:3513 |

##### `valueOf(double)` (java.lang.Double)

|      % |    Size | Samples | Location             |
| -----: | ------: | ------: | -------------------- |
| 100.0% | 10.1 MB |      26 | java.lang.Double:773 |

##### `mapToObj(IntFunction, int)` (java.util.stream.IntPipeline)

|      % |    Size | Samples | Location                         |
| -----: | ------: | ------: | -------------------------------- |
| 100.0% | 5.73 MB |      14 | java.util.stream.IntPipeline:174 |

##### `intStream(Spliterator$OfInt, boolean)` (java.util.stream.StreamSupport)

|      % |    Size | Samples | Location                           |
| -----: | ------: | ------: | ---------------------------------- |
| 100.0% | 4.58 MB |      12 | java.util.stream.StreamSupport:138 |

##### `<init>(InputStream, Inflater, int)` (java.util.zip.InflaterInputStream)

|      % |    Size | Samples | Location                             |
| -----: | ------: | ------: | ------------------------------------ |
| 100.0% | 4.47 MB |      10 | java.util.zip.InflaterInputStream:89 |

#### Callers

Callers ranked by contribution to each function's self size. Caller attribution may be imprecise due to inlining.

##### `copyOf(Object[], int)` (java.util.Arrays)

|     % |    Size | Samples | Caller      | Location            |
| ----: | ------: | ------: | ----------- | ------------------- |
| 52.4% | 19.8 GB |     835 | `toArray()` | java.util.ArrayList |
| 47.6% |   18 GB |     873 | `grow(int)` | java.util.ArrayList |

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Caller              | Location                                                 |
| -----: | ------: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% | 1.07 GB |      65 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |   Size | Samples | Caller              | Location                                                 |
| -----: | -----: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% | 409 MB |       8 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |   Size | Samples | Caller      | Location                                             |
| -----: | -----: | ------: | ----------- | ---------------------------------------------------- |
| 100.0% | 274 MB |       8 | `compute()` | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |

##### `copyOf(byte[], int)` (java.util.Arrays)

|     % |   Size | Samples | Caller                        | Location                        |
| ----: | -----: | ------: | ----------------------------- | ------------------------------- |
| 99.8% | 179 MB |      20 | `getBytes()`                  | jdk.internal.loader.Resource    |
|  0.2% | 405 kB |       1 | `ensureCapacityInternal(int)` | java.lang.AbstractStringBuilder |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |   Size | Samples | Caller              | Location                                                |
| -----: | -----: | ------: | ------------------- | ------------------------------------------------------- |
| 100.0% | 103 MB |       2 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `newNode(int, Object, Object, HashMap$Node)` (java.util.HashMap)

|     % |    Size | Samples | Caller                                          | Location          |
| ----: | ------: | ------: | ----------------------------------------------- | ----------------- |
| 67.7% |   62 MB |       3 | `computeIfAbsent(Object, Function)`             | java.util.HashMap |
| 32.3% | 29.5 MB |       5 | `putVal(int, Object, Object, boolean, boolean)` | java.util.HashMap |

##### `add(double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |    Size | Samples | Caller                               | Location                                                |
| -----: | ------: | ------: | ------------------------------------ | ------------------------------------------------------- |
| 100.0% | 90.3 MB |       5 | `combineResults(double[], double[])` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Caller                  | Location                                                             |
| -----: | ------: | ------: | ----------------------- | -------------------------------------------------------------------- |
| 100.0% | 89.2 MB |       4 | `apply(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007801204fd0 |

##### `lambda$collectClusters$0(Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Caller          | Location                                                                            |
| -----: | ------: | ------: | --------------- | ----------------------------------------------------------------------------------- |
| 100.0% | 67.1 MB |       5 | `apply(Object)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007801204b38 |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Caller      | Location                                             |
| -----: | ------: | ------: | ----------- | ---------------------------------------------------- |
| 100.0% | 62.3 MB |       4 | `compute()` | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |

##### `grow(int)` (java.util.ArrayList)

|      % |    Size | Samples | Caller   | Location            |
| -----: | ------: | ------: | -------- | ------------------- |
| 100.0% | 41.7 MB |      10 | `grow()` | java.util.ArrayList |

##### `resize()` (java.util.HashMap)

|     % |   Size | Samples | Caller                                          | Location          |
| ----: | -----: | ------: | ----------------------------------------------- | ----------------- |
| 98.0% |  33 MB |       3 | `putVal(int, Object, Object, boolean, boolean)` | java.util.HashMap |
|  2.0% | 666 kB |       1 | `computeIfAbsent(Object, Function)`             | java.util.HashMap |

##### `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Caller                     | Location                                                 |
| -----: | ------: | ------: | -------------------------- | -------------------------------------------------------- |
| 100.0% | 24.4 MB |       6 | `combineResults(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `initTable()` (java.util.concurrent.ConcurrentHashMap)

|      % |    Size | Samples | Caller                            | Location                               |
| -----: | ------: | ------: | --------------------------------- | -------------------------------------- |
| 100.0% | 21.8 MB |       1 | `putVal(Object, Object, boolean)` | java.util.concurrent.ConcurrentHashMap |

##### `copyOf(Object[], int, Class)` (java.util.Arrays)

|      % |    Size | Samples | Caller                  | Location         |
| -----: | ------: | ------: | ----------------------- | ---------------- |
| 100.0% | 15.9 MB |      22 | `copyOf(Object[], int)` | java.util.Arrays |

##### `valueOf(double)` (java.lang.Double)

|      % |    Size | Samples | Caller                                           | Location                                  |
| -----: | ------: | ------: | ------------------------------------------------ | ----------------------------------------- |
| 100.0% | 10.1 MB |      26 | `lambda$generateData$3(int, int, Random[], int)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `mapToObj(IntFunction, int)` (java.util.stream.IntPipeline)

|      % |    Size | Samples | Caller                  | Location                     |
| -----: | ------: | ------: | ----------------------- | ---------------------------- |
| 100.0% | 5.73 MB |      14 | `mapToObj(IntFunction)` | java.util.stream.IntPipeline |

##### `intStream(Spliterator$OfInt, boolean)` (java.util.stream.StreamSupport)

|      % |    Size | Samples | Caller            | Location                   |
| -----: | ------: | ------: | ----------------- | -------------------------- |
| 100.0% | 4.58 MB |      12 | `range(int, int)` | java.util.stream.IntStream |

##### `<init>(InputStream, Inflater, int)` (java.util.zip.InflaterInputStream)

|      % |    Size | Samples | Caller                                                                                  | Location                                         |
| -----: | ------: | ------: | --------------------------------------------------------------------------------------- | ------------------------------------------------ |
| 100.0% | 4.47 MB |      10 | `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, Inflater, int)` | java.util.zip.ZipFile$ZipFileInflaterInputStream |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |    Size | Samples | Function                                             | Location                                                             |
| ----: | ------: | ------: | ---------------------------------------------------- | -------------------------------------------------------------------- |
| 99.4% | 40.1 GB |   1,859 | `compute()`                                          | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask                 |
| 99.4% | 40.1 GB |   1,859 | `exec()`                                             | java.util.concurrent.RecursiveTask                                   |
| 99.4% | 40.1 GB |   1,859 | `doExec()`                                           | java.util.concurrent.ForkJoinTask                                    |
| 94.2% |   38 GB |   1,760 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool$WorkQueue                          |
| 93.6% | 37.7 GB |   1,745 | `scan(ForkJoinPool$WorkQueue, int, int)`             | java.util.concurrent.ForkJoinPool                                    |
| 93.6% | 37.7 GB |   1,730 | `copyOf(Object[], int)`                              | java.util.Arrays                                                     |
| 93.0% | 37.5 GB |   1,740 | `runWorker(ForkJoinPool$WorkQueue)`                  | java.util.concurrent.ForkJoinPool                                    |
| 93.0% | 37.5 GB |   1,740 | `run()`                                              | java.util.concurrent.ForkJoinWorkerThread                            |
| 82.3% | 33.2 GB |   1,532 | `merge(Map, Map)`                                    | org.renaissance.jdk.concurrent.JavaKMeans                            |
| 82.3% | 33.2 GB |   1,532 | `combineResults(Map, Map)`                           | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
| 82.3% | 33.2 GB |   1,532 | `combineResults(Object, Object)`                     | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
| 82.1% | 33.1 GB |   1,518 | `lambda$merge$6(List, List)`                         | org.renaissance.jdk.concurrent.JavaKMeans                            |
| 82.1% | 33.1 GB |   1,518 | `apply(Object, Object)`                              | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007801204fd0 |
| 82.1% | 33.1 GB |   1,518 | `merge(Object, Object, BiFunction)`                  | java.util.HashMap                                                    |
| 82.1% | 33.1 GB |   1,518 | `lambda$merge$7(Map, Object, List)`                  | org.renaissance.jdk.concurrent.JavaKMeans                            |
| 82.1% | 33.1 GB |   1,518 | `accept(Object, Object)`                             | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007801204d88 |
| 82.1% | 33.1 GB |   1,518 | `forEach(BiConsumer)`                                | java.util.HashMap                                                    |
| 66.1% | 26.7 GB |   1,259 | `awaitDone(int, long)`                               | java.util.concurrent.ForkJoinTask                                    |
| 66.1% | 26.7 GB |   1,259 | `join()`                                             | java.util.concurrent.ForkJoinTask                                    |
| 65.4% | 26.4 GB |   1,244 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | java.util.concurrent.ForkJoinPool$WorkQueue                          |

#### Callees

Callees ranked by contribution to each function's total size. Callee attribution may be imprecise due to inlining.

##### `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)

|     % |    Size | Samples | Callee                           | Location                                                 |
| ----: | ------: | ------: | -------------------------------- | -------------------------------------------------------- |
| 82.8% | 33.2 GB |   1,532 | `combineResults(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| 66.5% | 26.7 GB |   1,259 | `join()`                         | java.util.concurrent.ForkJoinTask                        |
| 15.9% | 6.37 GB |     308 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  0.7% |  274 MB |       8 | `createSubtask(int, int)`        | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  0.3% |  137 MB |       9 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |

##### `exec()` (java.util.concurrent.RecursiveTask)

|      % |    Size | Samples | Callee      | Location                                             |
| -----: | ------: | ------: | ----------- | ---------------------------------------------------- |
| 100.0% | 40.1 GB |   1,859 | `compute()` | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |

##### `doExec()` (java.util.concurrent.ForkJoinTask)

|      % |    Size | Samples | Callee   | Location                                          |
| -----: | ------: | ------: | -------- | ------------------------------------------------- |
| 100.0% | 40.1 GB |   1,859 | `exec()` | java.util.concurrent.RecursiveTask                |
|  20.5% | 8.23 GB |     195 | `exec()` | java.util.concurrent.ForkJoinTask$AdaptedCallable |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue)

|      % |  Size | Samples | Callee     | Location                          |
| -----: | ----: | ------: | ---------- | --------------------------------- |
| 100.0% | 38 GB |   1,760 | `doExec()` | java.util.concurrent.ForkJoinTask |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool)

|      % |    Size | Samples | Callee                                               | Location                                    |
| -----: | ------: | ------: | ---------------------------------------------------- | ------------------------------------------- |
| 100.0% | 37.7 GB |   1,745 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool$WorkQueue |

##### `copyOf(Object[], int)` (java.util.Arrays)

|    % |    Size | Samples | Callee                         | Location         |
| ---: | ------: | ------: | ------------------------------ | ---------------- |
| 0.0% | 15.9 MB |      22 | `copyOf(Object[], int, Class)` | java.util.Arrays |

##### `runWorker(ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool)

|      % |    Size | Samples | Callee                                   | Location                          |
| -----: | ------: | ------: | ---------------------------------------- | --------------------------------- |
| 100.0% | 37.5 GB |   1,740 | `scan(ForkJoinPool$WorkQueue, int, int)` | java.util.concurrent.ForkJoinPool |

##### `run()` (java.util.concurrent.ForkJoinWorkerThread)

|      % |    Size | Samples | Callee                              | Location                          |
| -----: | ------: | ------: | ----------------------------------- | --------------------------------- |
| 100.0% | 37.5 GB |   1,740 | `runWorker(ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool |

##### `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans)

|     % |    Size | Samples | Callee                | Location          |
| ----: | ------: | ------: | --------------------- | ----------------- |
| 99.7% | 33.1 GB |   1,518 | `forEach(BiConsumer)` | java.util.HashMap |
|  0.2% | 62.6 MB |       8 | `<init>(Map)`         | java.util.HashMap |

##### `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Callee            | Location                                  |
| -----: | ------: | ------: | ----------------- | ----------------------------------------- |
| 100.0% | 33.2 GB |   1,532 | `merge(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `combineResults(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Callee                     | Location                                                 |
| -----: | ------: | ------: | -------------------------- | -------------------------------------------------------- |
| 100.0% | 33.2 GB |   1,532 | `combineResults(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|     % |    Size | Samples | Callee               | Location            |
| ----: | ------: | ------: | -------------------- | ------------------- |
| 73.0% | 24.2 GB |   1,129 | `addAll(Collection)` | java.util.ArrayList |
| 26.7% | 8.83 GB |     385 | `<init>(Collection)` | java.util.ArrayList |

##### `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007801204fd0)

|      % |    Size | Samples | Callee                       | Location                                  |
| -----: | ------: | ------: | ---------------------------- | ----------------------------------------- |
| 100.0% | 33.1 GB |   1,518 | `lambda$merge$6(List, List)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `merge(Object, Object, BiFunction)` (java.util.HashMap)

|      % |    Size | Samples | Callee                  | Location                                                             |
| -----: | ------: | ------: | ----------------------- | -------------------------------------------------------------------- |
| 100.0% | 33.1 GB |   1,518 | `apply(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007801204fd0 |

##### `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Callee                              | Location          |
| -----: | ------: | ------: | ----------------------------------- | ----------------- |
| 100.0% | 33.1 GB |   1,518 | `merge(Object, Object, BiFunction)` | java.util.HashMap |

##### `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007801204d88)

|      % |    Size | Samples | Callee                              | Location                                  |
| -----: | ------: | ------: | ----------------------------------- | ----------------------------------------- |
| 100.0% | 33.1 GB |   1,518 | `lambda$merge$7(Map, Object, List)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `forEach(BiConsumer)` (java.util.HashMap)

|      % |    Size | Samples | Callee                   | Location                                                             |
| -----: | ------: | ------: | ------------------------ | -------------------------------------------------------------------- |
| 100.0% | 33.1 GB |   1,518 | `accept(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007801204d88 |

##### `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask)

|     % |    Size | Samples | Callee                                                    | Location                                    |
| ----: | ------: | ------: | --------------------------------------------------------- | ------------------------------------------- |
| 98.9% | 26.4 GB |   1,244 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | java.util.concurrent.ForkJoinPool$WorkQueue |
| 14.5% | 3.87 GB |     216 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | java.util.concurrent.ForkJoinPool           |

##### `join()` (java.util.concurrent.ForkJoinTask)

|      % |    Size | Samples | Callee                 | Location                          |
| -----: | ------: | ------: | ---------------------- | --------------------------------- |
| 100.0% | 26.7 GB |   1,259 | `awaitDone(int, long)` | java.util.concurrent.ForkJoinTask |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue)

|      % |    Size | Samples | Callee     | Location                          |
| -----: | ------: | ------: | ---------- | --------------------------------- |
| 100.0% | 26.4 GB |   1,244 | `doExec()` | java.util.concurrent.ForkJoinTask |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

Common call stack: `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)

|    % |    Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8.3% | 3.34 GB |     190 | `copyOf(Object[], int)` (java.util.Arrays) ← `grow(int)` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007801204fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007801204d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 7.5% | 3.03 GB |     165 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007801204fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007801204d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 6.7% | 2.69 GB |     134 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007801204fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007801204d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 5.1% | 2.04 GB |     121 | `copyOf(Object[], int)` (java.util.Arrays) ← `grow(int)` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007801204fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007801204d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 4.6% | 1.87 GB |      17 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007801204fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007801204d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011ffbc0) ← `exec()` (java.util.concurrent.ForkJoinTask$AdaptedCallable)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 4.4% | 1.77 GB |      33 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007801204fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007801204d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011ffbc0) ← `exec()` (java.util.concurrent.ForkJoinTask$AdaptedCallable)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 3.7% |  1.5 GB |      63 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007801204fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007801204d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 3.1% | 1.26 GB |      58 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007801204fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007801204d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2.9% | 1.15 GB |      59 | `copyOf(Object[], int)` (java.util.Arrays) ← `grow(int)` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007801204fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007801204d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 2.8% | 1.15 GB |      31 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007801204fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007801204d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011ffbc0) ← `exec()` (java.util.concurrent.ForkJoinTask$AdaptedCallable)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 2.8% | 1.12 GB |      31 | `copyOf(Object[], int)` (java.util.Arrays) ← `grow(int)` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007801204fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007801204d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011ffbc0) ← `exec()` (java.util.concurrent.ForkJoinTask$AdaptedCallable)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 2.4% |  967 MB |      48 | `copyOf(Object[], int)` (java.util.Arrays) ← `grow(int)` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007801204fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007801204d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2.3% |  936 MB |      35 | `copyOf(Object[], int)` (java.util.Arrays) ← `grow(int)` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007801204fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007801204d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2.2% |  868 MB |      37 | `copyOf(Object[], int)` (java.util.Arrays) ← `grow(int)` (java.util.ArrayList) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) |
| 2.0% |  812 MB |      36 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007801204fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007801204d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 2.0% |  803 MB |      26 | `copyOf(Object[], int)` (java.util.Arrays) ← `grow(int)` (java.util.ArrayList) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.8% |  744 MB |      18 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007801204fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007801204d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011ffbc0) ← `exec()` (java.util.concurrent.ForkJoinTask$AdaptedCallable)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.6% |  657 MB |      37 | `copyOf(Object[], int)` (java.util.Arrays) ← `grow(int)` (java.util.ArrayList) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                         |
| 1.5% |  613 MB |      23 | `copyOf(Object[], int)` (java.util.Arrays) ← `grow(int)` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007801204fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007801204d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                     |
| 1.4% |  557 MB |      24 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007801204fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007801204d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |


# Lock contention profile

Blocked 7.15s over 59 samples (121.3ms per sample).

| Category |      % |  Time | Samples |
| -------- | -----: | ----: | ------: |
| ours     | 100.0% | 7.15s |      59 |

## Hottest functions

### Self time

Functions ranked by time blocked directly in the function body, excluding callees.

|      % |  Time | Samples | Function              | Location                 |
| -----: | ----: | ------: | --------------------- | ------------------------ |
| 100.0% | 7.15s |      59 | `park(boolean, long)` | jdk.internal.misc.Unsafe |

#### Callers

Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.

##### `park(boolean, long)` (jdk.internal.misc.Unsafe)

|     % |    Time | Samples | Caller            | Location                               |
| ----: | ------: | ------: | ----------------- | -------------------------------------- |
| 95.7% |   6.84s |      45 | `park()`          | java.util.concurrent.locks.LockSupport |
|  4.3% | 309.7ms |      14 | `parkUntil(long)` | java.util.concurrent.locks.LockSupport |

### Total time

Functions ranked by total time blocked in the function and all its callees.

|      % |  Time | Samples | Function                                                                                                               | Location                                                             |
| -----: | ----: | ------: | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 100.0% | 7.15s |      59 | `park(boolean, long)`                                                                                                  | jdk.internal.misc.Unsafe                                             |
|  95.7% | 6.84s |      45 | `park()`                                                                                                               | java.util.concurrent.locks.LockSupport                               |
|  86.1% | 6.16s |      16 | `awaitDone(int, long)`                                                                                                 | java.util.concurrent.ForkJoinTask                                    |
|  86.1% | 6.16s |      16 | `get()`                                                                                                                | java.util.concurrent.ForkJoinTask                                    |
|  86.1% | 6.16s |      16 | `run(int, List, int)`                                                                                                  | org.renaissance.jdk.concurrent.JavaKMeans                            |
|  86.1% | 6.16s |      16 | `$anonfun$1(int)`                                                                                                      | org.renaissance.jdk.concurrent.FjKmeans                              |
|  86.1% | 6.16s |      16 | `$anonfun$adapted$1(Object)`                                                                                           | org.renaissance.jdk.concurrent.FjKmeans                              |
|  86.1% | 6.16s |      16 | `apply(Object)`                                                                                                        | org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000078011f6c70   |
|  86.1% | 6.16s |      16 | `map(Function1)`                                                                                                       | scala.collection.immutable.Range                                     |
|  86.1% | 6.16s |      16 | `run(BenchmarkContext)`                                                                                                | org.renaissance.jdk.concurrent.FjKmeans                              |
|  86.1% | 6.16s |      16 | `executeOperation(int)`                                                                                                | org.renaissance.harness.ExecutionDriver                              |
|  86.1% | 6.16s |      16 | `executeBenchmark()`                                                                                                   | org.renaissance.harness.ExecutionDriver                              |
|  86.1% | 6.16s |      16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | org.renaissance.harness.RenaissanceSuite$                            |
|  86.1% | 6.16s |      16 | `applyVoid(Object)`                                                                                                    | org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007801198798 |
|  86.1% | 6.16s |      16 | `apply(Object)`                                                                                                        | scala.runtime.function.JProcedure1                                   |
|  86.1% | 6.16s |      16 | `apply(Object)`                                                                                                        | scala.runtime.function.JProcedure1                                   |
|  86.1% | 6.16s |      16 | `foreach(Function1)`                                                                                                   | scala.collection.immutable.List                                      |
|  86.1% | 6.16s |      16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | org.renaissance.harness.RenaissanceSuite$                            |
|  86.1% | 6.16s |      16 | `main(String[])`                                                                                                       | org.renaissance.harness.RenaissanceSuite$                            |
|  86.1% | 6.16s |      16 | `main(String[])`                                                                                                       | org.renaissance.harness.RenaissanceSuite                             |

#### Callees

Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

##### `park()` (java.util.concurrent.locks.LockSupport)

|      % |  Time | Samples | Callee                | Location                 |
| -----: | ----: | ------: | --------------------- | ------------------------ |
| 100.0% | 6.84s |      45 | `park(boolean, long)` | jdk.internal.misc.Unsafe |

##### `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask)

|      % |  Time | Samples | Callee   | Location                               |
| -----: | ----: | ------: | -------- | -------------------------------------- |
| 100.0% | 6.16s |      16 | `park()` | java.util.concurrent.locks.LockSupport |

##### `get()` (java.util.concurrent.ForkJoinTask)

|      % |  Time | Samples | Callee                 | Location                          |
| -----: | ----: | ------: | ---------------------- | --------------------------------- |
| 100.0% | 6.16s |      16 | `awaitDone(int, long)` | java.util.concurrent.ForkJoinTask |

##### `run(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |  Time | Samples | Callee  | Location                          |
| -----: | ----: | ------: | ------- | --------------------------------- |
| 100.0% | 6.16s |      16 | `get()` | java.util.concurrent.ForkJoinTask |

##### `$anonfun$1(int)` (org.renaissance.jdk.concurrent.FjKmeans)

|      % |  Time | Samples | Callee                | Location                                  |
| -----: | ----: | ------: | --------------------- | ----------------------------------------- |
| 100.0% | 6.16s |      16 | `run(int, List, int)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `$anonfun$adapted$1(Object)` (org.renaissance.jdk.concurrent.FjKmeans)

|      % |  Time | Samples | Callee            | Location                                |
| -----: | ----: | ------: | ----------------- | --------------------------------------- |
| 100.0% | 6.16s |      16 | `$anonfun$1(int)` | org.renaissance.jdk.concurrent.FjKmeans |

##### `apply(Object)` (org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000078011f6c70)

|      % |  Time | Samples | Callee                       | Location                                |
| -----: | ----: | ------: | ---------------------------- | --------------------------------------- |
| 100.0% | 6.16s |      16 | `$anonfun$adapted$1(Object)` | org.renaissance.jdk.concurrent.FjKmeans |

##### `map(Function1)` (scala.collection.immutable.Range)

|      % |  Time | Samples | Callee          | Location                                                           |
| -----: | ----: | ------: | --------------- | ------------------------------------------------------------------ |
| 100.0% | 6.16s |      16 | `apply(Object)` | org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000078011f6c70 |

##### `run(BenchmarkContext)` (org.renaissance.jdk.concurrent.FjKmeans)

|      % |  Time | Samples | Callee           | Location                         |
| -----: | ----: | ------: | ---------------- | -------------------------------- |
| 100.0% | 6.16s |      16 | `map(Function1)` | scala.collection.immutable.Range |

##### `executeOperation(int)` (org.renaissance.harness.ExecutionDriver)

|      % |  Time | Samples | Callee                  | Location                                |
| -----: | ----: | ------: | ----------------------- | --------------------------------------- |
| 100.0% | 6.16s |      16 | `run(BenchmarkContext)` | org.renaissance.jdk.concurrent.FjKmeans |

##### `executeBenchmark()` (org.renaissance.harness.ExecutionDriver)

|      % |  Time | Samples | Callee                  | Location                                |
| -----: | ----: | ------: | ----------------------- | --------------------------------------- |
| 100.0% | 6.16s |      16 | `executeOperation(int)` | org.renaissance.harness.ExecutionDriver |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (org.renaissance.harness.RenaissanceSuite$)

|      % |  Time | Samples | Callee               | Location                                |
| -----: | ----: | ------: | -------------------- | --------------------------------------- |
| 100.0% | 6.16s |      16 | `executeBenchmark()` | org.renaissance.harness.ExecutionDriver |

##### `applyVoid(Object)` (org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007801198798)

|      % |  Time | Samples | Callee                                                                                                                 | Location                                  |
| -----: | ----: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| 100.0% | 6.16s |      16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | org.renaissance.harness.RenaissanceSuite$ |

##### `apply(Object)` (scala.runtime.function.JProcedure1)

|      % |  Time | Samples | Callee              | Location                                                             |
| -----: | ----: | ------: | ------------------- | -------------------------------------------------------------------- |
| 100.0% | 6.16s |      16 | `applyVoid(Object)` | org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007801198798 |

##### `apply(Object)` (scala.runtime.function.JProcedure1)

|      % |  Time | Samples | Callee          | Location                           |
| -----: | ----: | ------: | --------------- | ---------------------------------- |
| 100.0% | 6.16s |      16 | `apply(Object)` | scala.runtime.function.JProcedure1 |

##### `foreach(Function1)` (scala.collection.immutable.List)

|      % |  Time | Samples | Callee          | Location                           |
| -----: | ----: | ------: | --------------- | ---------------------------------- |
| 100.0% | 6.16s |      16 | `apply(Object)` | scala.runtime.function.JProcedure1 |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (org.renaissance.harness.RenaissanceSuite$)

|      % |  Time | Samples | Callee               | Location                        |
| -----: | ----: | ------: | -------------------- | ------------------------------- |
| 100.0% | 6.16s |      16 | `foreach(Function1)` | scala.collection.immutable.List |

##### `main(String[])` (org.renaissance.harness.RenaissanceSuite$)

|      % |  Time | Samples | Callee                                                                        | Location                                  |
| -----: | ----: | ------: | ----------------------------------------------------------------------------- | ----------------------------------------- |
| 100.0% | 6.16s |      16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | org.renaissance.harness.RenaissanceSuite$ |

##### `main(String[])` (org.renaissance.harness.RenaissanceSuite)

|      % |  Time | Samples | Callee           | Location                                  |
| -----: | ----: | ------: | ---------------- | ----------------------------------------- |
| 100.0% | 6.16s |      16 | `main(String[])` | org.renaissance.harness.RenaissanceSuite$ |

## Hottest call stacks

Call stacks ranked by time blocked in their leaf frame.

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 86.1% |   6.16s |      16 | `park(boolean, long)` (jdk.internal.misc.Unsafe) ← `park()` (java.util.concurrent.locks.LockSupport) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `get()` ← `run(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `$anonfun$1(int)` (org.renaissance.jdk.concurrent.FjKmeans) ← `$anonfun$adapted$1(Object)` ← `apply(Object)` (org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000078011f6c70) ← `map(Function1)` (scala.collection.immutable.Range) ← `run(BenchmarkContext)` (org.renaissance.jdk.concurrent.FjKmeans) ← `executeOperation(int)` (org.renaissance.harness.ExecutionDriver) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (org.renaissance.harness.RenaissanceSuite$) ← `applyVoid(Object)` (org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007801198798) ← `apply(Object)` (scala.runtime.function.JProcedure1) ← `apply(Object)` ← `foreach(Function1)` (scala.collection.immutable.List) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (org.renaissance.harness.RenaissanceSuite$) ← `main(String[])` ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invokeStatic(Object, Object)` (java.lang.invoke.LambdaForm$DMH.0x0000007801001c00) ← `invoke(Object, Object, Object)` (java.lang.invoke.LambdaForm$MH.0x0000007801082400) ← `invokeExact_MT(Object, Object, Object, Object)` (java.lang.invoke.Invokers$Holder) ← `invokeImpl(Object, Object[])` (jdk.internal.reflect.DirectMethodHandleAccessor) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (java.lang.reflect.Method) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (org.renaissance.core.Launcher) ← `launchHarnessClass(String, String[])` ← `main(String[])` |
|  9.6% | 685.3ms |      29 | `park(boolean, long)` (jdk.internal.misc.Unsafe) ← `park()` (java.util.concurrent.locks.LockSupport) ← `awaitWork(ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  4.3% | 309.7ms |      14 | `park(boolean, long)` (jdk.internal.misc.Unsafe) ← `parkUntil(long)` (java.util.concurrent.locks.LockSupport) ← `awaitWork(ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

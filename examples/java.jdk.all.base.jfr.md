# Sampling profile

Collected 1,637 samples.

| Category |      % | Samples |
| -------- | -----: | ------: |
| ours     | 100.0% |   1,637 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                                                            | Location                                                 |
| ----: | ------: | ------------------------------------------------------------------- | -------------------------------------------------------- |
| 43.6% |     714 | `accumulate(Double[], double[])`                                    | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| 23.3% |     381 | `distance(Double[], Double[])`                                      | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| 11.5% |     188 | `findNearestCentroid()`                                             | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  5.7% |      93 | `collectClusters(int[])`                                            | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  4.8% |      78 | `vectorSum()`                                                       | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  3.8% |      63 | `computeIfAbsent(Object, Function)`                                 | java.util.HashMap                                        |
|  2.9% |      48 | `copyOf(Object[], int)`                                             | java.util.Arrays                                         |
|  1.3% |      21 | `computeDirectly()`                                                 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  1.0% |      16 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`           | java.util.concurrent.ForkJoinPool                        |
|  0.2% |       4 | `lambda$merge$7(Map, Object, List)`                                 | org.renaissance.jdk.concurrent.JavaKMeans                |
|  0.2% |       3 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`       | java.util.zip.Inflater                                   |
|  0.2% |       3 | `accept(Object)`                                                    | java.util.stream.ReduceOps$3ReducingSink                 |
|  0.2% |       3 | `tryRemoveAndExec(ForkJoinTask, boolean)`                           | java.util.concurrent.ForkJoinPool$WorkQueue              |
|  0.1% |       2 | `compute()`                                                         | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask     |
|  0.1% |       2 | `park(boolean, long)`                                               | jdk.internal.misc.Unsafe                                 |
|  0.1% |       2 | `unpark(Object)`                                                    | jdk.internal.misc.Unsafe                                 |
|  0.1% |       2 | `push(ForkJoinTask, ForkJoinPool, boolean)`                         | java.util.concurrent.ForkJoinPool$WorkQueue              |
|  0.1% |       2 | `nextNode()`                                                        | java.util.HashMap$HashIterator                           |
|  0.1% |       1 | `load(NativeLibraries$NativeLibraryImpl, String, boolean, boolean)` | jdk.internal.loader.NativeLibraries                      |
|  0.1% |       1 | `wrapSink(Sink)`                                                    | java.util.stream.AbstractPipeline                        |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|     % | Samples | Location                                                    |
| ----: | ------: | ----------------------------------------------------------- |
| 99.9% |     713 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:411 |
|  0.1% |       1 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:412 |

##### `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Location                                                     |
| -----: | ------: | ------------------------------------------------------------ |
| 100.0% |     381 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:248 |

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|     % | Samples | Location                                                     |
| ----: | ------: | ------------------------------------------------------------ |
| 92.0% |     173 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:229 |
|  7.4% |      14 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:225 |
|  0.5% |       1 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:230 |

##### `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|     % | Samples | Location                                                     |
| ----: | ------: | ------------------------------------------------------------ |
| 66.7% |      62 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215 |
| 32.3% |      30 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:211 |
|  1.1% |       1 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:214 |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|     % | Samples | Location                                                    |
| ----: | ------: | ----------------------------------------------------------- |
| 59.0% |      46 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400 |
| 38.5% |      30 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:402 |
|  2.6% |       2 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:403 |

##### `computeIfAbsent(Object, Function)` (java.util.HashMap)

|     % | Samples | Location               |
| ----: | ------: | ---------------------- |
| 95.2% |      60 | java.util.HashMap:1219 |
|  4.8% |       3 | java.util.HashMap:1206 |

##### `copyOf(Object[], int)` (java.util.Arrays)

|      % | Samples | Location              |
| -----: | ------: | --------------------- |
| 100.0% |      48 | java.util.Arrays:3482 |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Location                                                     |
| -----: | ------: | ------------------------------------------------------------ |
| 100.0% |      21 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:204 |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (java.util.concurrent.ForkJoinPool)

|     % | Samples | Location                               |
| ----: | ------: | -------------------------------------- |
| 37.5% |       6 | java.util.concurrent.ForkJoinPool:2058 |
| 37.5% |       6 | java.util.concurrent.ForkJoinPool:2053 |
| 18.8% |       3 | java.util.concurrent.ForkJoinPool:2039 |
|  6.3% |       1 | java.util.concurrent.ForkJoinPool:2073 |

##### `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % | Samples | Location                                      |
| -----: | ------: | --------------------------------------------- |
| 100.0% |       4 | org.renaissance.jdk.concurrent.JavaKMeans:112 |

##### `accept(Object)` (java.util.stream.ReduceOps$3ReducingSink)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       3 | java.util.stream.ReduceOps$3ReducingSink:169 |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue)

|     % | Samples | Location                                         |
| ----: | ------: | ------------------------------------------------ |
| 66.7% |       2 | java.util.concurrent.ForkJoinPool$WorkQueue:1332 |
| 33.3% |       1 | java.util.concurrent.ForkJoinPool$WorkQueue:1347 |

##### `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)

|     % | Samples | Location                                                 |
| ----: | ------: | -------------------------------------------------------- |
| 50.0% |       1 | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask:151 |
| 50.0% |       1 | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask:150 |

##### `push(ForkJoinTask, ForkJoinPool, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue)

|      % | Samples | Location                                         |
| -----: | ------: | ------------------------------------------------ |
| 100.0% |       2 | java.util.concurrent.ForkJoinPool$WorkQueue:1156 |

##### `nextNode()` (java.util.HashMap$HashIterator)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |       2 | java.util.HashMap$HashIterator:1609 |

##### `wrapSink(Sink)` (java.util.stream.AbstractPipeline)

|      % | Samples | Location                              |
| -----: | ------: | ------------------------------------- |
| 100.0% |       1 | java.util.stream.AbstractPipeline:546 |

#### Callers

Callers ranked by contribution to each function's self samples. Caller attribution may be imprecise due to inlining.

##### `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Caller        | Location                                                |
| -----: | ------: | ------------- | ------------------------------------------------------- |
| 100.0% |     714 | `vectorSum()` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Caller                  | Location                                                 |
| -----: | ------: | ----------------------- | -------------------------------------------------------- |
| 100.0% |     381 | `findNearestCentroid()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Caller              | Location                                                 |
| -----: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% |     188 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Caller              | Location                                                 |
| -----: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% |      93 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Caller              | Location                                                |
| -----: | ------: | ------------------- | ------------------------------------------------------- |
| 100.0% |      78 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `computeIfAbsent(Object, Function)` (java.util.HashMap)

|      % | Samples | Caller                   | Location                                                 |
| -----: | ------: | ------------------------ | -------------------------------------------------------- |
| 100.0% |      63 | `collectClusters(int[])` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `copyOf(Object[], int)` (java.util.Arrays)

|     % | Samples | Caller      | Location            |
| ----: | ------: | ----------- | ------------------- |
| 87.5% |      42 | `grow(int)` | java.util.ArrayList |
| 12.5% |       6 | `toArray()` | java.util.ArrayList |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Caller              | Location                                                 |
| -----: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% |      21 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (java.util.concurrent.ForkJoinPool)

|      % | Samples | Caller                 | Location                          |
| -----: | ------: | ---------------------- | --------------------------------- |
| 100.0% |      16 | `awaitDone(int, long)` | java.util.concurrent.ForkJoinTask |

##### `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % | Samples | Caller                   | Location                                                             |
| -----: | ------: | ------------------------ | -------------------------------------------------------------------- |
| 100.0% |       4 | `accept(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011dee50 |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (java.util.zip.Inflater)

|      % | Samples | Caller                      | Location               |
| -----: | ------: | --------------------------- | ---------------------- |
| 100.0% |       3 | `inflate(byte[], int, int)` | java.util.zip.Inflater |

##### `accept(Object)` (java.util.stream.ReduceOps$3ReducingSink)

|      % | Samples | Caller        | Location                         |
| -----: | ------: | ------------- | -------------------------------- |
| 100.0% |       3 | `accept(int)` | java.util.stream.IntPipeline$1$1 |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue)

|      % | Samples | Caller                 | Location                          |
| -----: | ------: | ---------------------- | --------------------------------- |
| 100.0% |       3 | `awaitDone(int, long)` | java.util.concurrent.ForkJoinTask |

##### `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)

|      % | Samples | Caller   | Location                           |
| -----: | ------: | -------- | ---------------------------------- |
| 100.0% |       2 | `exec()` | java.util.concurrent.RecursiveTask |

##### `park(boolean, long)` (jdk.internal.misc.Unsafe)

|      % | Samples | Caller   | Location                               |
| -----: | ------: | -------- | -------------------------------------- |
| 100.0% |       2 | `park()` | java.util.concurrent.locks.LockSupport |

##### `unpark(Object)` (jdk.internal.misc.Unsafe)

|      % | Samples | Caller           | Location                               |
| -----: | ------: | ---------------- | -------------------------------------- |
| 100.0% |       2 | `unpark(Thread)` | java.util.concurrent.locks.LockSupport |

##### `push(ForkJoinTask, ForkJoinPool, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue)

|      % | Samples | Caller   | Location                          |
| -----: | ------: | -------- | --------------------------------- |
| 100.0% |       2 | `fork()` | java.util.concurrent.ForkJoinTask |

##### `nextNode()` (java.util.HashMap$HashIterator)

|      % | Samples | Caller   | Location                        |
| -----: | ------: | -------- | ------------------------------- |
| 100.0% |       2 | `next()` | java.util.HashMap$EntryIterator |

##### `load(NativeLibraries$NativeLibraryImpl, String, boolean, boolean)` (jdk.internal.loader.NativeLibraries)

|      % | Samples | Caller   | Location                                              |
| -----: | ------: | -------- | ----------------------------------------------------- |
| 100.0% |       1 | `open()` | jdk.internal.loader.NativeLibraries$NativeLibraryImpl |

##### `wrapSink(Sink)` (java.util.stream.AbstractPipeline)

|      % | Samples | Caller                               | Location                          |
| -----: | ------: | ------------------------------------ | --------------------------------- |
| 100.0% |       1 | `wrapAndCopyInto(Sink, Spliterator)` | java.util.stream.AbstractPipeline |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                                  | Location                                                 |
| ----: | ------: | --------------------------------------------------------- | -------------------------------------------------------- |
| 99.3% |   1,625 | `doExec()`                                                | java.util.concurrent.ForkJoinTask                        |
| 99.1% |   1,623 | `compute()`                                               | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask     |
| 99.1% |   1,623 | `exec()`                                                  | java.util.concurrent.RecursiveTask                       |
| 97.3% |   1,592 | `awaitDone(int, long)`                                    | java.util.concurrent.ForkJoinTask                        |
| 97.3% |   1,592 | `join()`                                                  | java.util.concurrent.ForkJoinTask                        |
| 96.6% |   1,581 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | java.util.concurrent.ForkJoinPool$WorkQueue              |
| 79.6% |   1,303 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | java.util.concurrent.ForkJoinPool$WorkQueue              |
| 75.9% |   1,242 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | java.util.concurrent.ForkJoinPool                        |
| 75.6% |   1,237 | `runWorker(ForkJoinPool$WorkQueue)`                       | java.util.concurrent.ForkJoinPool                        |
| 73.7% |   1,206 | `run()`                                                   | java.util.concurrent.ForkJoinWorkerThread                |
| 48.4% |     793 | `vectorSum()`                                             | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| 48.4% |     793 | `computeDirectly()`                                       | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| 48.4% |     793 | `computeDirectly()`                                       | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| 48.2% |     789 | `computeDirectly()`                                       | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| 48.2% |     789 | `computeDirectly()`                                       | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| 43.6% |     714 | `accumulate(Double[], double[])`                          | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| 34.8% |     569 | `findNearestCentroid()`                                   | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| 24.6% |     402 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | java.util.concurrent.ForkJoinPool                        |
| 23.3% |     381 | `distance(Double[], Double[])`                            | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| 20.6% |     337 | `invoke()`                                                | java.util.concurrent.ForkJoinTask                        |

#### Callees

Callees ranked by contribution to each function's total samples. Callee attribution may be imprecise due to inlining.

##### `doExec()` (java.util.concurrent.ForkJoinTask)

|     % | Samples | Callee      | Location                                          |
| ----: | ------: | ----------- | ------------------------------------------------- |
| 99.9% |   1,623 | `exec()`    | java.util.concurrent.RecursiveTask                |
|  0.8% |      13 | `exec()`    | java.util.concurrent.ForkJoinTask$AdaptedCallable |
|  0.1% |       2 | `setDone()` | java.util.concurrent.ForkJoinTask                 |

##### `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)

|     % | Samples | Callee                           | Location                                                 |
| ----: | ------: | -------------------------------- | -------------------------------------------------------- |
| 98.1% |   1,592 | `join()`                         | java.util.concurrent.ForkJoinTask                        |
| 48.9% |     793 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| 48.6% |     789 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| 18.9% |     306 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
|  0.9% |      14 | `combineResults(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `exec()` (java.util.concurrent.RecursiveTask)

|      % | Samples | Callee      | Location                                             |
| -----: | ------: | ----------- | ---------------------------------------------------- |
| 100.0% |   1,623 | `compute()` | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |

##### `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask)

|     % | Samples | Callee                                                    | Location                                    |
| ----: | ------: | --------------------------------------------------------- | ------------------------------------------- |
| 99.3% |   1,581 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | java.util.concurrent.ForkJoinPool$WorkQueue |
| 24.9% |     397 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | java.util.concurrent.ForkJoinPool           |
|  0.1% |       2 | `park()`                                                  | java.util.concurrent.locks.LockSupport      |

##### `join()` (java.util.concurrent.ForkJoinTask)

|      % | Samples | Callee                 | Location                          |
| -----: | ------: | ---------------------- | --------------------------------- |
| 100.0% |   1,592 | `awaitDone(int, long)` | java.util.concurrent.ForkJoinTask |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue)

|      % | Samples | Callee     | Location                          |
| -----: | ------: | ---------- | --------------------------------- |
| 100.0% |   1,581 | `doExec()` | java.util.concurrent.ForkJoinTask |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue)

|      % | Samples | Callee     | Location                          |
| -----: | ------: | ---------- | --------------------------------- |
| 100.0% |   1,303 | `doExec()` | java.util.concurrent.ForkJoinTask |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool)

|     % | Samples | Callee                                               | Location                                    |
| ----: | ------: | ---------------------------------------------------- | ------------------------------------------- |
| 99.9% |   1,241 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool$WorkQueue |
|  0.1% |       1 | `signalWork()`                                       | java.util.concurrent.ForkJoinPool           |

##### `runWorker(ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool)

|     % | Samples | Callee                                   | Location                          |
| ----: | ------: | ---------------------------------------- | --------------------------------- |
| 99.8% |   1,235 | `scan(ForkJoinPool$WorkQueue, int, int)` | java.util.concurrent.ForkJoinPool |
|  0.1% |       1 | `awaitWork(ForkJoinPool$WorkQueue)`      | java.util.concurrent.ForkJoinPool |

##### `run()` (java.util.concurrent.ForkJoinWorkerThread)

|      % | Samples | Callee                              | Location                          |
| -----: | ------: | ----------------------------------- | --------------------------------- |
| 100.0% |   1,206 | `runWorker(ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|     % | Samples | Callee                           | Location                                                |
| ----: | ------: | -------------------------------- | ------------------------------------------------------- |
| 90.0% |     714 | `accumulate(Double[], double[])` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |
|  0.1% |       1 | `get(int)`                       | java.util.ArrayList                                     |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Callee        | Location                                                |
| -----: | ------: | ------------- | ------------------------------------------------------- |
| 100.0% |     793 | `vectorSum()` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Callee              | Location                                                |
| -----: | ------: | ------------------- | ------------------------------------------------------- |
| 100.0% |     793 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|     % | Samples | Callee                   | Location                                                 |
| ----: | ------: | ------------------------ | -------------------------------------------------------- |
| 72.1% |     569 | `findNearestCentroid()`  | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| 25.2% |     199 | `collectClusters(int[])` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Callee              | Location                                                 |
| -----: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% |     789 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|     % | Samples | Callee                         | Location                                                 |
| ----: | ------: | ------------------------------ | -------------------------------------------------------- |
| 67.0% |     381 | `distance(Double[], Double[])` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (java.util.concurrent.ForkJoinPool)

|     % | Samples | Callee     | Location                          |
| ----: | ------: | ---------- | --------------------------------- |
| 98.3% |     395 | `doExec()` | java.util.concurrent.ForkJoinTask |

##### `invoke()` (java.util.concurrent.ForkJoinTask)

|      % | Samples | Callee     | Location                          |
| -----: | ------: | ---------- | --------------------------------- |
| 100.0% |     337 | `doExec()` | java.util.concurrent.ForkJoinTask |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5.8% |      95 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 4.6% |      75 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 3.7% |      60 | `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 2.9% |      48 | `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` |
| 2.5% |      41 | `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                           |
| 2.3% |      38 | `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 2.3% |      37 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 2.2% |      36 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 2.2% |      36 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue)                                                                                     |
| 2.2% |      36 | `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 2.1% |      34 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 2.0% |      33 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue)                                                                                     |
| 2.0% |      32 | `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.7% |      28 | `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1.7% |      28 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue)                                                                          |
| 1.6% |      27 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()`                                                                                                                                                                  |
| 1.5% |      25 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.4% |      23 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                                       |
| 1.3% |      21 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                                       |
| 1.2% |      19 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |


# Allocated heap profile

Allocated 40 GB over 1,980 samples (20.2 MB per sample).

| Category |      % |    Size | Samples |
| -------- | -----: | ------: | ------: |
| ours     | 100.0% |   40 GB |   1,978 |
| stdlib   |   0.0% | 1.78 kB |       2 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |    Size | Samples | Function                                     | Location                                                 |
| ----: | ------: | ------: | -------------------------------------------- | -------------------------------------------------------- |
| 92.5% |   37 GB |   1,718 | `copyOf(Object[], int)`                      | java.util.Arrays                                         |
|  3.8% |  1.5 GB |      61 | `findNearestCentroid()`                      | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  0.8% |  329 MB |       9 | `createSubtask(int, int)`                    | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  0.8% |  321 MB |      11 | `createSubtask(int, int)`                    | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  0.4% |  176 MB |       3 | `lambda$collectClusters$0(Double[])`         | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  0.4% |  169 MB |      12 | `<init>(InputStream, Inflater, int)`         | java.util.zip.InflaterInputStream                        |
|  0.4% |  142 MB |       9 | `grow(int)`                                  | java.util.ArrayList                                      |
|  0.3% |  102 MB |       5 | `lambda$merge$6(List, List)`                 | org.renaissance.jdk.concurrent.JavaKMeans                |
|  0.2% | 95.3 MB |      10 | `newNode(int, Object, Object, HashMap$Node)` | java.util.HashMap                                        |
|  0.2% |   60 MB |       2 | `computeClusterAverages()`                   | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
|  0.1% | 21.5 MB |       1 | `<init>(int)`                                | jdk.internal.org.objectweb.asm.ByteVector                |
|  0.1% | 20.1 MB |       5 | `resize()`                                   | java.util.HashMap                                        |
|  0.0% | 14.3 MB |      11 | `collectClusters(int[])`                     | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  0.0% | 11.1 MB |      22 | `valueOf(double)`                            | java.lang.Double                                         |
|  0.0% | 11.1 MB |      23 | `copyOf(byte[], int)`                        | java.util.Arrays                                         |
|  0.0% | 10.8 MB |       9 | `copyOf(Object[], int, Class)`               | java.util.Arrays                                         |
|  0.0% | 4.71 MB |      12 | `mapToObj(IntFunction, int)`                 | java.util.stream.IntPipeline                             |
|  0.0% | 4.16 MB |       8 | `lambda$generateData$4(int)`                 | org.renaissance.jdk.concurrent.JavaKMeans                |
|  0.0% | 3.91 MB |       8 | `intStream(Spliterator$OfInt, boolean)`      | java.util.stream.StreamSupport                           |
|  0.0% |  2.2 MB |       6 | `range(int, int)`                            | java.util.stream.IntStream                               |

#### Lines

Lines ranked by contribution to each function's self size.

##### `copyOf(Object[], int)` (java.util.Arrays)

|      % |  Size | Samples | Location              |
| -----: | ----: | ------: | --------------------- |
| 100.0% | 37 GB |   1,718 | java.util.Arrays:3482 |

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |   Size | Samples | Location                                                     |
| -----: | -----: | ------: | ------------------------------------------------------------ |
| 100.0% | 1.5 GB |      61 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:223 |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |   Size | Samples | Location                                                     |
| -----: | -----: | ------: | ------------------------------------------------------------ |
| 100.0% | 329 MB |       9 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261 |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |   Size | Samples | Location                                                    |
| -----: | -----: | ------: | ----------------------------------------------------------- |
| 100.0% | 321 MB |      11 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419 |

##### `lambda$collectClusters$0(Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |   Size | Samples | Location                                                     |
| -----: | -----: | ------: | ------------------------------------------------------------ |
| 100.0% | 176 MB |       3 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215 |

##### `<init>(InputStream, Inflater, int)` (java.util.zip.InflaterInputStream)

|      % |   Size | Samples | Location                             |
| -----: | -----: | ------: | ------------------------------------ |
| 100.0% | 169 MB |      12 | java.util.zip.InflaterInputStream:89 |

##### `grow(int)` (java.util.ArrayList)

|      % |   Size | Samples | Location                |
| -----: | -----: | ------: | ----------------------- |
| 100.0% | 142 MB |       9 | java.util.ArrayList:239 |

##### `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |   Size | Samples | Location                                      |
| -----: | -----: | ------: | --------------------------------------------- |
| 100.0% | 102 MB |       5 | org.renaissance.jdk.concurrent.JavaKMeans:114 |

##### `newNode(int, Object, Object, HashMap$Node)` (java.util.HashMap)

|      % |    Size | Samples | Location               |
| -----: | ------: | ------: | ---------------------- |
| 100.0% | 95.3 MB |      10 | java.util.HashMap:1909 |

##### `computeClusterAverages()` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % |  Size | Samples | Location                                                 |
| -----: | ----: | ------: | -------------------------------------------------------- |
| 100.0% | 60 MB |       2 | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:314 |

##### `<init>(int)` (jdk.internal.org.objectweb.asm.ByteVector)

|      % |    Size | Samples | Location                                     |
| -----: | ------: | ------: | -------------------------------------------- |
| 100.0% | 21.5 MB |       1 | jdk.internal.org.objectweb.asm.ByteVector:87 |

##### `resize()` (java.util.HashMap)

|      % |    Size | Samples | Location              |
| -----: | ------: | ------: | --------------------- |
| 100.0% | 20.1 MB |       5 | java.util.HashMap:710 |

##### `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Location                                                     |
| -----: | ------: | ------: | ------------------------------------------------------------ |
| 100.0% | 14.3 MB |      11 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:209 |

##### `valueOf(double)` (java.lang.Double)

|      % |    Size | Samples | Location             |
| -----: | ------: | ------: | -------------------- |
| 100.0% | 11.1 MB |      22 | java.lang.Double:773 |

##### `copyOf(byte[], int)` (java.util.Arrays)

|      % |    Size | Samples | Location              |
| -----: | ------: | ------: | --------------------- |
| 100.0% | 11.1 MB |      23 | java.util.Arrays:3541 |

##### `copyOf(Object[], int, Class)` (java.util.Arrays)

|      % |    Size | Samples | Location              |
| -----: | ------: | ------: | --------------------- |
| 100.0% | 10.8 MB |       9 | java.util.Arrays:3513 |

##### `mapToObj(IntFunction, int)` (java.util.stream.IntPipeline)

|      % |    Size | Samples | Location                         |
| -----: | ------: | ------: | -------------------------------- |
| 100.0% | 4.71 MB |      12 | java.util.stream.IntPipeline:174 |

##### `lambda$generateData$4(int)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Location                                     |
| -----: | ------: | ------: | -------------------------------------------- |
| 100.0% | 4.16 MB |       8 | org.renaissance.jdk.concurrent.JavaKMeans:87 |

##### `intStream(Spliterator$OfInt, boolean)` (java.util.stream.StreamSupport)

|      % |    Size | Samples | Location                           |
| -----: | ------: | ------: | ---------------------------------- |
| 100.0% | 3.91 MB |       8 | java.util.stream.StreamSupport:138 |

##### `range(int, int)` (java.util.stream.IntStream)

|      % |   Size | Samples | Location                        |
| -----: | -----: | ------: | ------------------------------- |
| 100.0% | 2.2 MB |       6 | java.util.stream.IntStream:1083 |

#### Callers

Callers ranked by contribution to each function's self size. Caller attribution may be imprecise due to inlining.

##### `copyOf(Object[], int)` (java.util.Arrays)

|     % |    Size | Samples | Caller      | Location            |
| ----: | ------: | ------: | ----------- | ------------------- |
| 51.1% | 18.9 GB |     880 | `toArray()` | java.util.ArrayList |
| 48.9% | 18.1 GB |     838 | `grow(int)` | java.util.ArrayList |

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |   Size | Samples | Caller              | Location                                                 |
| -----: | -----: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% | 1.5 GB |      61 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |   Size | Samples | Caller      | Location                                             |
| -----: | -----: | ------: | ----------- | ---------------------------------------------------- |
| 100.0% | 329 MB |       9 | `compute()` | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |   Size | Samples | Caller      | Location                                             |
| -----: | -----: | ------: | ----------- | ---------------------------------------------------- |
| 100.0% | 321 MB |      11 | `compute()` | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |

##### `lambda$collectClusters$0(Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |   Size | Samples | Caller          | Location                                                                            |
| -----: | -----: | ------: | --------------- | ----------------------------------------------------------------------------------- |
| 100.0% | 176 MB |       3 | `apply(Object)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000c0011dec00 |

##### `<init>(InputStream, Inflater, int)` (java.util.zip.InflaterInputStream)

|      % |   Size | Samples | Caller                                                                                  | Location                                         |
| -----: | -----: | ------: | --------------------------------------------------------------------------------------- | ------------------------------------------------ |
| 100.0% | 169 MB |      12 | `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, Inflater, int)` | java.util.zip.ZipFile$ZipFileInflaterInputStream |

##### `grow(int)` (java.util.ArrayList)

|      % |   Size | Samples | Caller   | Location            |
| -----: | -----: | ------: | -------- | ------------------- |
| 100.0% | 142 MB |       9 | `grow()` | java.util.ArrayList |

##### `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |   Size | Samples | Caller                  | Location                                                             |
| -----: | -----: | ------: | ----------------------- | -------------------------------------------------------------------- |
| 100.0% | 102 MB |       5 | `apply(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011df098 |

##### `newNode(int, Object, Object, HashMap$Node)` (java.util.HashMap)

|     % |    Size | Samples | Caller                                          | Location          |
| ----: | ------: | ------: | ----------------------------------------------- | ----------------- |
| 97.3% | 92.8 MB |       5 | `computeIfAbsent(Object, Function)`             | java.util.HashMap |
|  2.7% | 2.53 MB |       5 | `putVal(int, Object, Object, boolean, boolean)` | java.util.HashMap |

##### `computeClusterAverages()` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % |  Size | Samples | Caller              | Location                                             |
| -----: | ----: | ------: | ------------------- | ---------------------------------------------------- |
| 100.0% | 60 MB |       2 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |

##### `<init>(int)` (jdk.internal.org.objectweb.asm.ByteVector)

|      % |    Size | Samples | Caller          | Location                                   |
| -----: | ------: | ------: | --------------- | ------------------------------------------ |
| 100.0% | 21.5 MB |       1 | `toByteArray()` | jdk.internal.org.objectweb.asm.ClassWriter |

##### `resize()` (java.util.HashMap)

|     % |    Size | Samples | Caller                                          | Location          |
| ----: | ------: | ------: | ----------------------------------------------- | ----------------- |
| 91.7% | 18.5 MB |       4 | `computeIfAbsent(Object, Function)`             | java.util.HashMap |
|  8.3% | 1.68 MB |       1 | `putVal(int, Object, Object, boolean, boolean)` | java.util.HashMap |

##### `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Caller              | Location                                                 |
| -----: | ------: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% | 14.3 MB |      11 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `valueOf(double)` (java.lang.Double)

|      % |    Size | Samples | Caller                                           | Location                                  |
| -----: | ------: | ------: | ------------------------------------------------ | ----------------------------------------- |
| 100.0% | 11.1 MB |      22 | `lambda$generateData$3(int, int, Random[], int)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `copyOf(byte[], int)` (java.util.Arrays)

|     % |   Size | Samples | Caller                        | Location                        |
| ----: | -----: | ------: | ----------------------------- | ------------------------------- |
| 88.3% | 9.8 MB |      20 | `getBytes()`                  | jdk.internal.loader.Resource    |
| 11.7% | 1.3 MB |       3 | `ensureCapacityInternal(int)` | java.lang.AbstractStringBuilder |

##### `copyOf(Object[], int, Class)` (java.util.Arrays)

|      % |    Size | Samples | Caller                  | Location         |
| -----: | ------: | ------: | ----------------------- | ---------------- |
| 100.0% | 10.8 MB |       9 | `copyOf(Object[], int)` | java.util.Arrays |

##### `mapToObj(IntFunction, int)` (java.util.stream.IntPipeline)

|      % |    Size | Samples | Caller                  | Location                     |
| -----: | ------: | ------: | ----------------------- | ---------------------------- |
| 100.0% | 4.71 MB |      12 | `mapToObj(IntFunction)` | java.util.stream.IntPipeline |

##### `lambda$generateData$4(int)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Caller       | Location                                                             |
| -----: | ------: | ------: | ------------ | -------------------------------------------------------------------- |
| 100.0% | 4.16 MB |       8 | `apply(int)` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c001179d48 |

##### `intStream(Spliterator$OfInt, boolean)` (java.util.stream.StreamSupport)

|      % |    Size | Samples | Caller            | Location                   |
| -----: | ------: | ------: | ----------------- | -------------------------- |
| 100.0% | 3.91 MB |       8 | `range(int, int)` | java.util.stream.IntStream |

##### `range(int, int)` (java.util.stream.IntStream)

|      % |   Size | Samples | Caller                                           | Location                                  |
| -----: | -----: | ------: | ------------------------------------------------ | ----------------------------------------- |
| 100.0% | 2.2 MB |       6 | `lambda$generateData$5(int, int, Random[], int)` | org.renaissance.jdk.concurrent.JavaKMeans |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |    Size | Samples | Function                                             | Location                                                             |
| ----: | ------: | ------: | ---------------------------------------------------- | -------------------------------------------------------------------- |
| 99.4% | 39.8 GB |   1,853 | `compute()`                                          | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask                 |
| 99.4% | 39.8 GB |   1,853 | `exec()`                                             | java.util.concurrent.RecursiveTask                                   |
| 99.4% | 39.8 GB |   1,853 | `doExec()`                                           | java.util.concurrent.ForkJoinTask                                    |
| 93.6% | 37.4 GB |   1,754 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool$WorkQueue                          |
| 92.9% | 37.2 GB |   1,738 | `scan(ForkJoinPool$WorkQueue, int, int)`             | java.util.concurrent.ForkJoinPool                                    |
| 92.8% | 37.1 GB |   1,732 | `runWorker(ForkJoinPool$WorkQueue)`                  | java.util.concurrent.ForkJoinPool                                    |
| 92.8% | 37.1 GB |   1,732 | `run()`                                              | java.util.concurrent.ForkJoinWorkerThread                            |
| 92.5% |   37 GB |   1,727 | `copyOf(Object[], int)`                              | java.util.Arrays                                                     |
| 84.6% | 33.8 GB |   1,544 | `merge(Map, Map)`                                    | org.renaissance.jdk.concurrent.JavaKMeans                            |
| 84.6% | 33.8 GB |   1,544 | `combineResults(Map, Map)`                           | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
| 84.6% | 33.8 GB |   1,544 | `combineResults(Object, Object)`                     | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
| 84.5% | 33.8 GB |   1,538 | `lambda$merge$6(List, List)`                         | org.renaissance.jdk.concurrent.JavaKMeans                            |
| 84.5% | 33.8 GB |   1,538 | `apply(Object, Object)`                              | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011df098 |
| 84.5% | 33.8 GB |   1,538 | `merge(Object, Object, BiFunction)`                  | java.util.HashMap                                                    |
| 84.5% | 33.8 GB |   1,538 | `lambda$merge$7(Map, Object, List)`                  | org.renaissance.jdk.concurrent.JavaKMeans                            |
| 84.5% | 33.8 GB |   1,538 | `accept(Object, Object)`                             | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011dee50 |
| 84.5% | 33.8 GB |   1,538 | `forEach(BiConsumer)`                                | java.util.HashMap                                                    |
| 64.6% | 25.8 GB |   1,140 | `addAll(Collection)`                                 | java.util.ArrayList                                                  |
| 63.2% | 25.3 GB |   1,216 | `awaitDone(int, long)`                               | java.util.concurrent.ForkJoinTask                                    |
| 63.2% | 25.3 GB |   1,216 | `join()`                                             | java.util.concurrent.ForkJoinTask                                    |

#### Callees

Callees ranked by contribution to each function's total size. Callee attribution may be imprecise due to inlining.

##### `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)

|     % |    Size | Samples | Callee                           | Location                                                 |
| ----: | ------: | ------: | -------------------------------- | -------------------------------------------------------- |
| 85.1% | 33.8 GB |   1,544 | `combineResults(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| 63.5% | 25.3 GB |   1,216 | `join()`                         | java.util.concurrent.ForkJoinTask                        |
| 13.1% | 5.22 GB |     286 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  0.8% |  329 MB |       9 | `createSubtask(int, int)`        | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  0.8% |  321 MB |      11 | `createSubtask(int, int)`        | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |

##### `exec()` (java.util.concurrent.RecursiveTask)

|      % |    Size | Samples | Callee      | Location                                             |
| -----: | ------: | ------: | ----------- | ---------------------------------------------------- |
| 100.0% | 39.8 GB |   1,853 | `compute()` | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |

##### `doExec()` (java.util.concurrent.ForkJoinTask)

|      % |    Size | Samples | Callee   | Location                                          |
| -----: | ------: | ------: | -------- | ------------------------------------------------- |
| 100.0% | 39.8 GB |   1,853 | `exec()` | java.util.concurrent.RecursiveTask                |
|  19.1% | 7.58 GB |     209 | `exec()` | java.util.concurrent.ForkJoinTask$AdaptedCallable |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue)

|      % |    Size | Samples | Callee     | Location                          |
| -----: | ------: | ------: | ---------- | --------------------------------- |
| 100.0% | 37.4 GB |   1,754 | `doExec()` | java.util.concurrent.ForkJoinTask |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool)

|      % |    Size | Samples | Callee                                               | Location                                    |
| -----: | ------: | ------: | ---------------------------------------------------- | ------------------------------------------- |
| 100.0% | 37.2 GB |   1,738 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool$WorkQueue |

##### `runWorker(ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool)

|      % |    Size | Samples | Callee                                   | Location                          |
| -----: | ------: | ------: | ---------------------------------------- | --------------------------------- |
| 100.0% | 37.1 GB |   1,732 | `scan(ForkJoinPool$WorkQueue, int, int)` | java.util.concurrent.ForkJoinPool |

##### `run()` (java.util.concurrent.ForkJoinWorkerThread)

|      % |    Size | Samples | Callee                              | Location                          |
| -----: | ------: | ------: | ----------------------------------- | --------------------------------- |
| 100.0% | 37.1 GB |   1,732 | `runWorker(ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool |

##### `copyOf(Object[], int)` (java.util.Arrays)

|    % |    Size | Samples | Callee                         | Location         |
| ---: | ------: | ------: | ------------------------------ | ---------------- |
| 0.0% | 10.8 MB |       9 | `copyOf(Object[], int, Class)` | java.util.Arrays |

##### `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Callee                | Location          |
| -----: | ------: | ------: | --------------------- | ----------------- |
| 100.0% | 33.8 GB |   1,538 | `forEach(BiConsumer)` | java.util.HashMap |
|   0.0% | 3.81 MB |       5 | `<init>(Map)`         | java.util.HashMap |

##### `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Callee            | Location                                  |
| -----: | ------: | ------: | ----------------- | ----------------------------------------- |
| 100.0% | 33.8 GB |   1,544 | `merge(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `combineResults(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Callee                     | Location                                                 |
| -----: | ------: | ------: | -------------------------- | -------------------------------------------------------- |
| 100.0% | 33.8 GB |   1,544 | `combineResults(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|     % |    Size | Samples | Callee               | Location            |
| ----: | ------: | ------: | -------------------- | ------------------- |
| 76.4% | 25.8 GB |   1,140 | `addAll(Collection)` | java.util.ArrayList |
| 23.3% |  7.9 GB |     393 | `<init>(Collection)` | java.util.ArrayList |

##### `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011df098)

|      % |    Size | Samples | Callee                       | Location                                  |
| -----: | ------: | ------: | ---------------------------- | ----------------------------------------- |
| 100.0% | 33.8 GB |   1,538 | `lambda$merge$6(List, List)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `merge(Object, Object, BiFunction)` (java.util.HashMap)

|      % |    Size | Samples | Callee                  | Location                                                             |
| -----: | ------: | ------: | ----------------------- | -------------------------------------------------------------------- |
| 100.0% | 33.8 GB |   1,538 | `apply(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011df098 |

##### `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Callee                              | Location          |
| -----: | ------: | ------: | ----------------------------------- | ----------------- |
| 100.0% | 33.8 GB |   1,538 | `merge(Object, Object, BiFunction)` | java.util.HashMap |

##### `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011dee50)

|      % |    Size | Samples | Callee                              | Location                                  |
| -----: | ------: | ------: | ----------------------------------- | ----------------------------------------- |
| 100.0% | 33.8 GB |   1,538 | `lambda$merge$7(Map, Object, List)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `forEach(BiConsumer)` (java.util.HashMap)

|      % |    Size | Samples | Callee                   | Location                                                             |
| -----: | ------: | ------: | ------------------------ | -------------------------------------------------------------------- |
| 100.0% | 33.8 GB |   1,538 | `accept(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011dee50 |

##### `addAll(Collection)` (java.util.ArrayList)

|     % |    Size | Samples | Callee      | Location            |
| ----: | ------: | ------: | ----------- | ------------------- |
| 57.3% | 14.8 GB |     652 | `grow(int)` | java.util.ArrayList |
| 42.7% |   11 GB |     488 | `toArray()` | java.util.ArrayList |

##### `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask)

|     % |    Size | Samples | Callee                                                    | Location                                    |
| ----: | ------: | ------: | --------------------------------------------------------- | ------------------------------------------- |
| 98.0% | 24.8 GB |   1,197 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | java.util.concurrent.ForkJoinPool$WorkQueue |
| 17.6% | 4.45 GB |     198 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | java.util.concurrent.ForkJoinPool           |

##### `join()` (java.util.concurrent.ForkJoinTask)

|      % |    Size | Samples | Callee                 | Location                          |
| -----: | ------: | ------: | ---------------------- | --------------------------------- |
| 100.0% | 25.3 GB |   1,216 | `awaitDone(int, long)` | java.util.concurrent.ForkJoinTask |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

Common call stack: `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)

|     % |    Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 10.3% | 4.11 GB |     207 | `copyOf(Object[], int)` (java.util.Arrays) ← `grow(int)` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011df098) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011dee50) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 10.1% | 4.06 GB |     185 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011df098) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011dee50) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  5.5% | 2.21 GB |     119 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011df098) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011dee50) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  4.8% |  1.9 GB |      46 | `copyOf(Object[], int)` (java.util.Arrays) ← `grow(int)` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011df098) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011dee50) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011d79d8) ← `exec()` (java.util.concurrent.ForkJoinTask$AdaptedCallable)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  4.5% |  1.8 GB |     100 | `copyOf(Object[], int)` (java.util.Arrays) ← `grow(int)` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011df098) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011dee50) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  3.6% | 1.42 GB |      82 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011df098) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011dee50) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  2.8% | 1.12 GB |      53 | `copyOf(Object[], int)` (java.util.Arrays) ← `grow(int)` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011df098) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011dee50) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  2.4% |  954 MB |      16 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011df098) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011dee50) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011d79d8) ← `exec()` (java.util.concurrent.ForkJoinTask$AdaptedCallable)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  2.3% |  905 MB |      36 | `copyOf(Object[], int)` (java.util.Arrays) ← `grow(int)` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011df098) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011dee50) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  2.2% |  893 MB |      24 | `copyOf(Object[], int)` (java.util.Arrays) ← `grow(int)` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011df098) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011dee50) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011d79d8) ← `exec()` (java.util.concurrent.ForkJoinTask$AdaptedCallable)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  2.2% |  869 MB |      34 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011df098) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011dee50) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  2.0% |  819 MB |      31 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011df098) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011dee50) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011d79d8) ← `exec()` (java.util.concurrent.ForkJoinTask$AdaptedCallable)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  2.0% |  816 MB |      19 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011df098) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011dee50) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011d79d8) ← `exec()` (java.util.concurrent.ForkJoinTask$AdaptedCallable)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  2.0% |  809 MB |      58 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011df098) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011dee50) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  2.0% |  806 MB |      32 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011df098) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011dee50) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011d79d8) ← `exec()` (java.util.concurrent.ForkJoinTask$AdaptedCallable)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.7% |  676 MB |      38 | `copyOf(Object[], int)` (java.util.Arrays) ← `grow(int)` (java.util.ArrayList) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                         |
|  1.5% |  618 MB |      19 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011df098) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011dee50) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.5% |  616 MB |      24 | `copyOf(Object[], int)` (java.util.Arrays) ← `grow(int)` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011df098) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011dee50) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.5% |  588 MB |      29 | `copyOf(Object[], int)` (java.util.Arrays) ← `grow(int)` (java.util.ArrayList) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.4% |  555 MB |      31 | `copyOf(Object[], int)` (java.util.Arrays) ← `grow(int)` (java.util.ArrayList) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) |


# Lock contention profile

Blocked 6.95s over 56 samples (124.2ms per sample).

| Category |      % |  Time | Samples |
| -------- | -----: | ----: | ------: |
| ours     | 100.0% | 6.95s |      56 |

## Hottest functions

### Self time

Functions ranked by time blocked directly in the function body, excluding callees.

|      % |  Time | Samples | Function              | Location                 |
| -----: | ----: | ------: | --------------------- | ------------------------ |
| 100.0% | 6.95s |      56 | `park(boolean, long)` | jdk.internal.misc.Unsafe |

#### Callers

Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.

##### `park(boolean, long)` (jdk.internal.misc.Unsafe)

|     % |    Time | Samples | Caller            | Location                               |
| ----: | ------: | ------: | ----------------- | -------------------------------------- |
| 95.4% |   6.63s |      42 | `park()`          | java.util.concurrent.locks.LockSupport |
|  4.6% | 317.1ms |      14 | `parkUntil(long)` | java.util.concurrent.locks.LockSupport |

### Total time

Functions ranked by total time blocked in the function and all its callees.

|      % |  Time | Samples | Function                                                                                                               | Location                                                             |
| -----: | ----: | ------: | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 100.0% | 6.95s |      56 | `park(boolean, long)`                                                                                                  | jdk.internal.misc.Unsafe                                             |
|  95.4% | 6.63s |      42 | `park()`                                                                                                               | java.util.concurrent.locks.LockSupport                               |
|  87.2% | 6.06s |      16 | `awaitDone(int, long)`                                                                                                 | java.util.concurrent.ForkJoinTask                                    |
|  87.2% | 6.06s |      16 | `get()`                                                                                                                | java.util.concurrent.ForkJoinTask                                    |
|  87.2% | 6.06s |      16 | `run(int, List, int)`                                                                                                  | org.renaissance.jdk.concurrent.JavaKMeans                            |
|  87.2% | 6.06s |      16 | `$anonfun$1(int)`                                                                                                      | org.renaissance.jdk.concurrent.FjKmeans                              |
|  87.2% | 6.06s |      16 | `$anonfun$adapted$1(Object)`                                                                                           | org.renaissance.jdk.concurrent.FjKmeans                              |
|  87.2% | 6.06s |      16 | `apply(Object)`                                                                                                        | org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000c0011d4e58   |
|  87.2% | 6.06s |      16 | `map(Function1)`                                                                                                       | scala.collection.immutable.Range                                     |
|  87.2% | 6.06s |      16 | `run(BenchmarkContext)`                                                                                                | org.renaissance.jdk.concurrent.FjKmeans                              |
|  87.2% | 6.06s |      16 | `executeOperation(int)`                                                                                                | org.renaissance.harness.ExecutionDriver                              |
|  87.2% | 6.06s |      16 | `executeBenchmark()`                                                                                                   | org.renaissance.harness.ExecutionDriver                              |
|  87.2% | 6.06s |      16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | org.renaissance.harness.RenaissanceSuite$                            |
|  87.2% | 6.06s |      16 | `applyVoid(Object)`                                                                                                    | org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000c0011715d8 |
|  87.2% | 6.06s |      16 | `apply(Object)`                                                                                                        | scala.runtime.function.JProcedure1                                   |
|  87.2% | 6.06s |      16 | `apply(Object)`                                                                                                        | scala.runtime.function.JProcedure1                                   |
|  87.2% | 6.06s |      16 | `foreach(Function1)`                                                                                                   | scala.collection.immutable.List                                      |
|  87.2% | 6.06s |      16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | org.renaissance.harness.RenaissanceSuite$                            |
|  87.2% | 6.06s |      16 | `main(String[])`                                                                                                       | org.renaissance.harness.RenaissanceSuite$                            |
|  87.2% | 6.06s |      16 | `main(String[])`                                                                                                       | org.renaissance.harness.RenaissanceSuite                             |

#### Callees

Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

##### `park()` (java.util.concurrent.locks.LockSupport)

|      % |  Time | Samples | Callee                | Location                 |
| -----: | ----: | ------: | --------------------- | ------------------------ |
| 100.0% | 6.63s |      42 | `park(boolean, long)` | jdk.internal.misc.Unsafe |

##### `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask)

|      % |  Time | Samples | Callee   | Location                               |
| -----: | ----: | ------: | -------- | -------------------------------------- |
| 100.0% | 6.06s |      16 | `park()` | java.util.concurrent.locks.LockSupport |

##### `get()` (java.util.concurrent.ForkJoinTask)

|      % |  Time | Samples | Callee                 | Location                          |
| -----: | ----: | ------: | ---------------------- | --------------------------------- |
| 100.0% | 6.06s |      16 | `awaitDone(int, long)` | java.util.concurrent.ForkJoinTask |

##### `run(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |  Time | Samples | Callee  | Location                          |
| -----: | ----: | ------: | ------- | --------------------------------- |
| 100.0% | 6.06s |      16 | `get()` | java.util.concurrent.ForkJoinTask |

##### `$anonfun$1(int)` (org.renaissance.jdk.concurrent.FjKmeans)

|      % |  Time | Samples | Callee                | Location                                  |
| -----: | ----: | ------: | --------------------- | ----------------------------------------- |
| 100.0% | 6.06s |      16 | `run(int, List, int)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `$anonfun$adapted$1(Object)` (org.renaissance.jdk.concurrent.FjKmeans)

|      % |  Time | Samples | Callee            | Location                                |
| -----: | ----: | ------: | ----------------- | --------------------------------------- |
| 100.0% | 6.06s |      16 | `$anonfun$1(int)` | org.renaissance.jdk.concurrent.FjKmeans |

##### `apply(Object)` (org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000c0011d4e58)

|      % |  Time | Samples | Callee                       | Location                                |
| -----: | ----: | ------: | ---------------------------- | --------------------------------------- |
| 100.0% | 6.06s |      16 | `$anonfun$adapted$1(Object)` | org.renaissance.jdk.concurrent.FjKmeans |

##### `map(Function1)` (scala.collection.immutable.Range)

|      % |  Time | Samples | Callee          | Location                                                           |
| -----: | ----: | ------: | --------------- | ------------------------------------------------------------------ |
| 100.0% | 6.06s |      16 | `apply(Object)` | org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000c0011d4e58 |

##### `run(BenchmarkContext)` (org.renaissance.jdk.concurrent.FjKmeans)

|      % |  Time | Samples | Callee           | Location                         |
| -----: | ----: | ------: | ---------------- | -------------------------------- |
| 100.0% | 6.06s |      16 | `map(Function1)` | scala.collection.immutable.Range |

##### `executeOperation(int)` (org.renaissance.harness.ExecutionDriver)

|      % |  Time | Samples | Callee                  | Location                                |
| -----: | ----: | ------: | ----------------------- | --------------------------------------- |
| 100.0% | 6.06s |      16 | `run(BenchmarkContext)` | org.renaissance.jdk.concurrent.FjKmeans |

##### `executeBenchmark()` (org.renaissance.harness.ExecutionDriver)

|      % |  Time | Samples | Callee                  | Location                                |
| -----: | ----: | ------: | ----------------------- | --------------------------------------- |
| 100.0% | 6.06s |      16 | `executeOperation(int)` | org.renaissance.harness.ExecutionDriver |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (org.renaissance.harness.RenaissanceSuite$)

|      % |  Time | Samples | Callee               | Location                                |
| -----: | ----: | ------: | -------------------- | --------------------------------------- |
| 100.0% | 6.06s |      16 | `executeBenchmark()` | org.renaissance.harness.ExecutionDriver |

##### `applyVoid(Object)` (org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000c0011715d8)

|      % |  Time | Samples | Callee                                                                                                                 | Location                                  |
| -----: | ----: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| 100.0% | 6.06s |      16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | org.renaissance.harness.RenaissanceSuite$ |

##### `apply(Object)` (scala.runtime.function.JProcedure1)

|      % |  Time | Samples | Callee              | Location                                                             |
| -----: | ----: | ------: | ------------------- | -------------------------------------------------------------------- |
| 100.0% | 6.06s |      16 | `applyVoid(Object)` | org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000c0011715d8 |

##### `apply(Object)` (scala.runtime.function.JProcedure1)

|      % |  Time | Samples | Callee          | Location                           |
| -----: | ----: | ------: | --------------- | ---------------------------------- |
| 100.0% | 6.06s |      16 | `apply(Object)` | scala.runtime.function.JProcedure1 |

##### `foreach(Function1)` (scala.collection.immutable.List)

|      % |  Time | Samples | Callee          | Location                           |
| -----: | ----: | ------: | --------------- | ---------------------------------- |
| 100.0% | 6.06s |      16 | `apply(Object)` | scala.runtime.function.JProcedure1 |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (org.renaissance.harness.RenaissanceSuite$)

|      % |  Time | Samples | Callee               | Location                        |
| -----: | ----: | ------: | -------------------- | ------------------------------- |
| 100.0% | 6.06s |      16 | `foreach(Function1)` | scala.collection.immutable.List |

##### `main(String[])` (org.renaissance.harness.RenaissanceSuite$)

|      % |  Time | Samples | Callee                                                                        | Location                                  |
| -----: | ----: | ------: | ----------------------------------------------------------------------------- | ----------------------------------------- |
| 100.0% | 6.06s |      16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | org.renaissance.harness.RenaissanceSuite$ |

##### `main(String[])` (org.renaissance.harness.RenaissanceSuite)

|      % |  Time | Samples | Callee           | Location                                  |
| -----: | ----: | ------: | ---------------- | ----------------------------------------- |
| 100.0% | 6.06s |      16 | `main(String[])` | org.renaissance.harness.RenaissanceSuite$ |

## Hottest call stacks

Call stacks ranked by time blocked in their leaf frame.

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 87.2% |   6.06s |      16 | `park(boolean, long)` (jdk.internal.misc.Unsafe) ← `park()` (java.util.concurrent.locks.LockSupport) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `get()` ← `run(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `$anonfun$1(int)` (org.renaissance.jdk.concurrent.FjKmeans) ← `$anonfun$adapted$1(Object)` ← `apply(Object)` (org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000c0011d4e58) ← `map(Function1)` (scala.collection.immutable.Range) ← `run(BenchmarkContext)` (org.renaissance.jdk.concurrent.FjKmeans) ← `executeOperation(int)` (org.renaissance.harness.ExecutionDriver) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (org.renaissance.harness.RenaissanceSuite$) ← `applyVoid(Object)` (org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000c0011715d8) ← `apply(Object)` (scala.runtime.function.JProcedure1) ← `apply(Object)` ← `foreach(Function1)` (scala.collection.immutable.List) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (org.renaissance.harness.RenaissanceSuite$) ← `main(String[])` ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invokeStatic(Object, Object)` (java.lang.invoke.LambdaForm$DMH.0x000000c001001400) ← `invoke(Object, Object, Object)` (java.lang.invoke.LambdaForm$MH.0x000000c001080800) ← `invokeExact_MT(Object, Object, Object, Object)` (java.lang.invoke.Invokers$Holder) ← `invokeImpl(Object, Object[])` (jdk.internal.reflect.DirectMethodHandleAccessor) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (java.lang.reflect.Method) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (org.renaissance.core.Launcher) ← `launchHarnessClass(String, String[])` ← `main(String[])` |
|  8.2% | 572.1ms |      26 | `park(boolean, long)` (jdk.internal.misc.Unsafe) ← `park()` (java.util.concurrent.locks.LockSupport) ← `awaitWork(ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  4.6% | 317.1ms |      14 | `park(boolean, long)` (jdk.internal.misc.Unsafe) ← `parkUntil(long)` (java.util.concurrent.locks.LockSupport) ← `awaitWork(ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

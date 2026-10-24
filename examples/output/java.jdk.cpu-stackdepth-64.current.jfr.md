# Sampling profile

Collected 1,324 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Ours             | 89.8% |   1,189 |
| Standard library | 10.2% |     135 |

Call stacks missing their outermost callers account for 29.2% of the samples collected.

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

|     % | Samples | Function                                                      | Location                                                                              |
| ----: | ------: | ------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| 35.0% |     464 | `accumulate(Double[], double[])`                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| 28.4% |     376 | `distance(Double[], Double[])`                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| 14.0% |     186 | `findNearestCentroid()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  7.4% |      98 | `collectClusters(int[])`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  3.8% |      50 | `computeIfAbsent(Object, Function)`                           | `java.util.HashMap`                                                                   |
|  2.2% |      29 | `computeDirectly()`                                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  2.0% |      26 | `copyOf(Object[], int)`                                       | `java.util.Arrays`                                                                    |
|  1.4% |      19 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`     | `java.util.concurrent.ForkJoinPool`                                                   |
|  1.3% |      17 | `vectorSum()`                                                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  0.8% |      11 | `apply(Object)`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000700121ece0` |
|  0.5% |       7 | `grow(int)`                                                   | `java.util.ArrayList`                                                                 |
|  0.5% |       6 | `merge(Object, Object, BiFunction)`                           | `java.util.HashMap`                                                                   |
|  0.4% |       5 | `signalWork()`                                                | `java.util.concurrent.ForkJoinPool`                                                   |
|  0.3% |       4 | `tryRemoveAndExec(ForkJoinTask, boolean)`                     | `java.util.concurrent.ForkJoinPool$WorkQueue`                                         |
|  0.2% |       3 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater`                                                              |
|  0.2% |       3 | `lambda$merge$7(Map, Object, List)`                           | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  0.2% |       3 | `add(double[], double[])`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  0.2% |       2 | `wrapSink(Sink)`                                              | `java.util.stream.AbstractPipeline`                                                   |
|  0.1% |       1 | `computeMethodInfoSize()`                                     | `jdk.internal.org.objectweb.asm.MethodWriter`                                         |
|  0.1% |       1 | `close0()`                                                    | `java.io.FileDescriptor`                                                              |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Ours

|     % | Samples | Function                             | Location                                                                              |
| ----: | ------: | ------------------------------------ | ------------------------------------------------------------------------------------- |
| 35.0% |     464 | `accumulate(Double[], double[])`     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| 28.4% |     376 | `distance(Double[], Double[])`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| 14.0% |     186 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  7.4% |      98 | `collectClusters(int[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  2.2% |      29 | `computeDirectly()`                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  1.3% |      17 | `vectorSum()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  0.8% |      11 | `apply(Object)`                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000700121ece0` |
|  0.2% |       3 | `lambda$merge$7(Map, Object, List)`  | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  0.2% |       3 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  0.1% |       1 | `compute()`                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
|  0.1% |       1 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |

##### Standard library

|    % | Samples | Function                                                      | Location                                      |
| ---: | ------: | ------------------------------------------------------------- | --------------------------------------------- |
| 3.8% |      50 | `computeIfAbsent(Object, Function)`                           | `java.util.HashMap`                           |
| 2.0% |      26 | `copyOf(Object[], int)`                                       | `java.util.Arrays`                            |
| 1.4% |      19 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`     | `java.util.concurrent.ForkJoinPool`           |
| 0.5% |       7 | `grow(int)`                                                   | `java.util.ArrayList`                         |
| 0.5% |       6 | `merge(Object, Object, BiFunction)`                           | `java.util.HashMap`                           |
| 0.4% |       5 | `signalWork()`                                                | `java.util.concurrent.ForkJoinPool`           |
| 0.3% |       4 | `tryRemoveAndExec(ForkJoinTask, boolean)`                     | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 0.2% |       3 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater`                      |
| 0.2% |       2 | `wrapSink(Sink)`                                              | `java.util.stream.AbstractPipeline`           |
| 0.1% |       1 | `computeMethodInfoSize()`                                     | `jdk.internal.org.objectweb.asm.MethodWriter` |
| 0.1% |       1 | `close0()`                                                    | `java.io.FileDescriptor`                      |
| 0.1% |       1 | `allocateInstance(Class)`                                     | `jdk.internal.misc.Unsafe`                    |
| 0.1% |       1 | `accept(Object)`                                              | `java.util.stream.ReduceOps$3ReducingSink`    |
| 0.1% |       1 | `checkIndex(int, int)`                                        | `java.util.Objects`                           |
| 0.1% |       1 | `periodicTask()`                                              | `jdk.jfr.internal.PlatformRecorder`           |
| 0.1% |       1 | `unpark(Thread)`                                              | `java.util.concurrent.locks.LockSupport`      |
| 0.1% |       1 | `spliterator(double[], int, int)`                             | `java.util.Arrays`                            |
| 0.1% |       1 | `nextNode()`                                                  | `java.util.HashMap$HashIterator`              |
| 0.1% |       1 | `<init>(AbstractPipeline, int)`                               | `java.util.stream.AbstractPipeline`           |
| 0.1% |       1 | `afterNodeInsertion(boolean)`                                 | `java.util.LinkedHashMap`                     |

#### Lines

Lines with the largest contribution to each function's self samples.

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Location                                                      |
| -----: | ------: | ------------------------------------------------------------- |
| 100.0% |     464 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:411` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |     376 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:248` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Location                                                       |
| ----: | ------: | -------------------------------------------------------------- |
| 91.9% |     171 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:229` |
|  5.4% |      10 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:225` |
|  2.7% |       5 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:230` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Location                                                       |
| ----: | ------: | -------------------------------------------------------------- |
| 71.4% |      70 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |
| 26.5% |      26 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:211` |
|  1.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:214` |
|  1.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:213` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 94.0% |      47 | `java.util.HashMap:1219` |
|  6.0% |       3 | `java.util.HashMap:1206` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |      29 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:204` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |      26 | `java.util.Arrays:3482` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Location                                 |
| ----: | ------: | ---------------------------------------- |
| 36.8% |       7 | `java.util.concurrent.ForkJoinPool:2039` |
| 31.6% |       6 | `java.util.concurrent.ForkJoinPool:2053` |
| 26.3% |       5 | `java.util.concurrent.ForkJoinPool:2058` |
|  5.3% |       1 | `java.util.concurrent.ForkJoinPool:2047` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Location                                                      |
| ----: | ------: | ------------------------------------------------------------- |
| 76.5% |      13 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:402` |
| 17.6% |       3 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:403` |
|  5.9% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400` |

##### `grow(int)` (`java.util.ArrayList`)

|      % | Samples | Location                  |
| -----: | ------: | ------------------------- |
| 100.0% |       7 | `java.util.ArrayList:239` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|      % | Samples | Location                 |
| -----: | ------: | ------------------------ |
| 100.0% |       6 | `java.util.HashMap:1384` |

##### `signalWork()` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Location                                 |
| -----: | ------: | ---------------------------------------- |
| 100.0% |       5 | `java.util.concurrent.ForkJoinPool:1704` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|     % | Samples | Location                                           |
| ----: | ------: | -------------------------------------------------- |
| 75.0% |       3 | `java.util.concurrent.ForkJoinPool$WorkQueue:1347` |
| 25.0% |       1 | `java.util.concurrent.ForkJoinPool$WorkQueue:1332` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Location                                        |
| -----: | ------: | ----------------------------------------------- |
| 100.0% |       3 | `org.renaissance.jdk.concurrent.JavaKMeans:112` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Location                                                      |
| ----: | ------: | ------------------------------------------------------------- |
| 66.7% |       2 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:432` |
| 33.3% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:430` |

##### `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`)

|      % | Samples | Location                                |
| -----: | ------: | --------------------------------------- |
| 100.0% |       2 | `java.util.stream.AbstractPipeline:546` |

##### `computeMethodInfoSize()` (`jdk.internal.org.objectweb.asm.MethodWriter`)

|      % | Samples | Location                                           |
| -----: | ------: | -------------------------------------------------- |
| 100.0% |       1 | `jdk.internal.org.objectweb.asm.MethodWriter:2202` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % | Samples | Location                                                   |
| -----: | ------: | ---------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask:151` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |

##### `accept(Object)` (`java.util.stream.ReduceOps$3ReducingSink`)

|      % | Samples | Location                                       |
| -----: | ------: | ---------------------------------------------- |
| 100.0% |       1 | `java.util.stream.ReduceOps$3ReducingSink:169` |

##### `checkIndex(int, int)` (`java.util.Objects`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.util.Objects:385` |

##### `periodicTask()` (`jdk.jfr.internal.PlatformRecorder`)

|      % | Samples | Location                                |
| -----: | ------: | --------------------------------------- |
| 100.0% |       1 | `jdk.jfr.internal.PlatformRecorder:539` |

##### `unpark(Thread)` (`java.util.concurrent.locks.LockSupport`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `java.util.concurrent.locks.LockSupport:181` |

##### `spliterator(double[], int, int)` (`java.util.Arrays`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.util.Arrays:5514` |

##### `nextNode()` (`java.util.HashMap$HashIterator`)

|      % | Samples | Location                              |
| -----: | ------: | ------------------------------------- |
| 100.0% |       1 | `java.util.HashMap$HashIterator:1609` |

##### `<init>(AbstractPipeline, int)` (`java.util.stream.AbstractPipeline`)

|      % | Samples | Location                                |
| -----: | ------: | --------------------------------------- |
| 100.0% |       1 | `java.util.stream.AbstractPipeline:211` |

##### `afterNodeInsertion(boolean)` (`java.util.LinkedHashMap`)

|      % | Samples | Location                      |
| -----: | ------: | ----------------------------- |
| 100.0% |       1 | `java.util.LinkedHashMap:324` |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller        | Location                                                  |
| -----: | ------: | ------------- | --------------------------------------------------------- |
| 100.0% |     464 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                  | Location                                                   |
| -----: | ------: | ----------------------- | ---------------------------------------------------------- |
| 100.0% |     376 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |     186 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |      98 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|      % | Samples | Caller                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |      50 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |      29 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|      % | Samples | Caller      | Location              |
| -----: | ------: | ----------- | --------------------- |
| 100.0% |      26 | `grow(int)` | `java.util.ArrayList` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |      19 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |      17 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000700121ece0`)

|      % | Samples | Caller                              | Location            |
| -----: | ------: | ----------------------------------- | ------------------- |
| 100.0% |      11 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |

##### `grow(int)` (`java.util.ArrayList`)

|      % | Samples | Caller   | Location              |
| -----: | ------: | -------- | --------------------- |
| 100.0% |       7 | `grow()` | `java.util.ArrayList` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|      % | Samples | Caller                              | Location                                    |
| -----: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% |       6 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `signalWork()` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Caller                                      | Location                                      |
| ----: | ------: | ------------------------------------------- | --------------------------------------------- |
| 80.0% |       4 | `scan(ForkJoinPool$WorkQueue, int, int)`    | `java.util.concurrent.ForkJoinPool`           |
| 20.0% |       1 | `push(ForkJoinTask, ForkJoinPool, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Caller                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |       4 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Caller                      | Location                 |
| -----: | ------: | --------------------------- | ------------------------ |
| 100.0% |       3 | `inflate(byte[], int, int)` | `java.util.zip.Inflater` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller                   | Location                                                               |
| -----: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| 100.0% |       3 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller                               | Location                                                  |
| -----: | ------: | ------------------------------------ | --------------------------------------------------------- |
| 100.0% |       3 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`)

|      % | Samples | Caller                               | Location                            |
| -----: | ------: | ------------------------------------ | ----------------------------------- |
| 100.0% |       2 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `computeMethodInfoSize()` (`jdk.internal.org.objectweb.asm.MethodWriter`)

|      % | Samples | Caller          | Location                                     |
| -----: | ------: | --------------- | -------------------------------------------- |
| 100.0% |       1 | `toByteArray()` | `jdk.internal.org.objectweb.asm.ClassWriter` |

##### `close0()` (`java.io.FileDescriptor`)

|      % | Samples | Caller    | Location                 |
| -----: | ------: | --------- | ------------------------ |
| 100.0% |       1 | `close()` | `java.io.FileDescriptor` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % | Samples | Caller   | Location                             |
| -----: | ------: | -------- | ------------------------------------ |
| 100.0% |       1 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller          | Location                                                                              |
| -----: | ------: | --------------- | ------------------------------------------------------------------------------------- |
| 100.0% |       1 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000700121ece0` |

##### `allocateInstance(Class)` (`jdk.internal.misc.Unsafe`)

|      % | Samples | Caller                     | Location                              |
| -----: | ------: | -------------------------- | ------------------------------------- |
| 100.0% |       1 | `allocateInstance(Object)` | `java.lang.invoke.DirectMethodHandle` |

##### `accept(Object)` (`java.util.stream.ReduceOps$3ReducingSink`)

|      % | Samples | Caller        | Location                           |
| -----: | ------: | ------------- | ---------------------------------- |
| 100.0% |       1 | `accept(int)` | `java.util.stream.IntPipeline$1$1` |

##### `checkIndex(int, int)` (`java.util.Objects`)

|      % | Samples | Caller     | Location              |
| -----: | ------: | ---------- | --------------------- |
| 100.0% |       1 | `get(int)` | `java.util.ArrayList` |

##### `periodicTask()` (`jdk.jfr.internal.PlatformRecorder`)

|      % | Samples | Caller                        | Location                            |
| -----: | ------: | ----------------------------- | ----------------------------------- |
| 100.0% |       1 | `lambda$startDiskMonitor$1()` | `jdk.jfr.internal.PlatformRecorder` |

##### `unpark(Thread)` (`java.util.concurrent.locks.LockSupport`)

|      % | Samples | Caller         | Location                            |
| -----: | ------: | -------------- | ----------------------------------- |
| 100.0% |       1 | `signalWork()` | `java.util.concurrent.ForkJoinPool` |

##### `spliterator(double[], int, int)` (`java.util.Arrays`)

|      % | Samples | Caller                       | Location           |
| -----: | ------: | ---------------------------- | ------------------ |
| 100.0% |       1 | `stream(double[], int, int)` | `java.util.Arrays` |

##### `nextNode()` (`java.util.HashMap$HashIterator`)

|      % | Samples | Caller   | Location                          |
| -----: | ------: | -------- | --------------------------------- |
| 100.0% |       1 | `next()` | `java.util.HashMap$EntryIterator` |

##### `<init>(AbstractPipeline, int)` (`java.util.stream.AbstractPipeline`)

|      % | Samples | Caller                          | Location                             |
| -----: | ------: | ------------------------------- | ------------------------------------ |
| 100.0% |       1 | `<init>(AbstractPipeline, int)` | `java.util.stream.ReferencePipeline` |

##### `afterNodeInsertion(boolean)` (`java.util.LinkedHashMap`)

|      % | Samples | Caller                                          | Location            |
| -----: | ------: | ----------------------------------------------- | ------------------- |
| 100.0% |       1 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

### Total samples

Functions with the most samples collected within the function and its callees.

|     % | Samples | Function                                                  | Location                                                   |
| ----: | ------: | --------------------------------------------------------- | ---------------------------------------------------------- |
| 98.9% |   1,310 | `compute()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
| 98.9% |   1,310 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                       |
| 98.9% |   1,310 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                        |
| 97.1% |   1,286 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                        |
| 97.1% |   1,286 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                        |
| 96.0% |   1,271 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| 75.5% |     999 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| 73.6% |     974 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                        |
| 73.3% |     970 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                        |
| 70.1% |     928 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`                |
| 59.2% |     784 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 42.4% |     562 | `findNearestCentroid()`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 36.4% |     482 | `vectorSum()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 36.4% |     482 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 35.0% |     464 | `accumulate(Double[], double[])`                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 29.4% |     389 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                        |
| 28.4% |     376 | `distance(Double[], Double[])`                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 17.2% |     228 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                        |
| 15.6% |     206 | `computeClusterAverages()`                                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| 15.4% |     204 | `average(List)`                                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Ours

|     % | Samples | Function                            | Location                                                                              |
| ----: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------- |
| 98.9% |   1,310 | `compute()`                         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
| 59.2% |     784 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| 42.4% |     562 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| 36.4% |     482 | `vectorSum()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| 36.4% |     482 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| 35.0% |     464 | `accumulate(Double[], double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| 28.4% |     376 | `distance(Double[], Double[])`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| 15.6% |     206 | `computeClusterAverages()`          | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
| 15.4% |     204 | `average(List)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
| 15.0% |     199 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
| 14.6% |     193 | `collectClusters(int[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  2.4% |      32 | `lambda$run$0(int, List, int)`      | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  2.3% |      30 | `call()`                            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70`                |
|  1.0% |      13 | `merge(Map, Map)`                   | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  1.0% |      13 | `combineResults(Map, Map)`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  1.0% |      13 | `combineResults(Object, Object)`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  0.9% |      12 | `apply(Object)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000700121ece0` |
|  0.8% |      10 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  0.8% |      10 | `accept(Object, Object)`            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`                |
|  0.7% |       9 | `main(String[])`                    | `org.renaissance.harness.RenaissanceSuite$`                                           |

##### Standard library

|     % | Samples | Function                                                  | Location                                             |
| ----: | ------: | --------------------------------------------------------- | ---------------------------------------------------- |
| 98.9% |   1,310 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                 |
| 98.9% |   1,310 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                  |
| 97.1% |   1,286 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                  |
| 97.1% |   1,286 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                  |
| 96.0% |   1,271 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
| 75.5% |     999 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
| 73.6% |     974 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                  |
| 73.3% |     970 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                  |
| 70.1% |     928 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`          |
| 29.4% |     389 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                  |
| 17.2% |     228 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                  |
|  4.8% |      63 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                                  |
|  2.5% |      33 | `grow(int)`                                               | `java.util.ArrayList`                                |
|  2.4% |      32 | `grow()`                                                  | `java.util.ArrayList`                                |
|  2.4% |      32 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                                |
|  2.4% |      32 | `add(Object)`                                             | `java.util.ArrayList`                                |
|  2.0% |      26 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                                   |
|  1.7% |      22 | `exec()`                                                  | `java.util.concurrent.ForkJoinTask$AdaptedCallable`  |
|  0.8% |      10 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                                  |
|  0.7% |       9 | `invokeStatic(Object, Object)`                            | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00` |

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % | Samples | Caller   | Location                             |
| -----: | ------: | -------- | ------------------------------------ |
| 100.0% |   1,310 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % | Samples | Caller     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |   1,310 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Caller                                                    | Location                                      |
| ----: | ------: | --------------------------------------------------------- | --------------------------------------------- |
| 97.0% |   1,271 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 76.3% |     999 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 28.8% |     377 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
| 17.4% |     228 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |   1,286 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |   1,286 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Caller                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |   1,271 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|     % | Samples | Caller                                   | Location                            |
| ----: | ------: | ---------------------------------------- | ----------------------------------- |
| 97.1% |     970 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Caller                              | Location                            |
| ----: | ------: | ----------------------------------- | ----------------------------------- |
| 99.6% |     970 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Caller  | Location                                    |
| ----: | ------: | ------- | ------------------------------------------- |
| 95.7% |     928 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |     784 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 100.0% |     784 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |     562 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |     482 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |     482 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| 100.0% |     482 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`    |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller        | Location                                                  |
| -----: | ------: | ------------- | --------------------------------------------------------- |
| 100.0% |     464 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Caller                 | Location                            |
| ----: | ------: | ---------------------- | ----------------------------------- |
| 99.7% |     388 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                  | Location                                                   |
| -----: | ------: | ----------------------- | ---------------------------------------------------------- |
| 100.0% |     376 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Caller                         | Location                                               |
| ----: | ------: | ------------------------------ | ------------------------------------------------------ |
| 89.5% |     204 | `average(List)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 14.0% |      32 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`            |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % | Samples | Caller              | Location                                               |
| ----: | ------: | ------------------- | ------------------------------------------------------ |
| 96.6% |     199 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller                     | Location                                               |
| -----: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% |     204 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller              | Location                                               |
| -----: | ------: | ------------------- | ------------------------------------------------------ |
| 100.0% |     199 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% |     199 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |     193 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|      % | Samples | Caller                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |      63 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `grow(int)` (`java.util.ArrayList`)

|     % | Samples | Caller               | Location              |
| ----: | ------: | -------------------- | --------------------- |
| 97.0% |      32 | `grow()`             | `java.util.ArrayList` |
|  3.0% |       1 | `addAll(Collection)` | `java.util.ArrayList` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Caller   | Location                                                               |
| ----: | ------: | -------- | ---------------------------------------------------------------------- |
| 93.8% |      30 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70` |

##### `grow()` (`java.util.ArrayList`)

|      % | Samples | Caller                       | Location              |
| -----: | ------: | ---------------------------- | --------------------- |
| 100.0% |      32 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|      % | Samples | Caller        | Location              |
| -----: | ------: | ------------- | --------------------- |
| 100.0% |      32 | `add(Object)` | `java.util.ArrayList` |

##### `add(Object)` (`java.util.ArrayList`)

|      % | Samples | Caller                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |      32 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70`)

|     % | Samples | Caller   | Location                                            |
| ----: | ------: | -------- | --------------------------------------------------- |
| 73.3% |      22 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|      % | Samples | Caller      | Location              |
| -----: | ------: | ----------- | --------------------- |
| 100.0% |      26 | `grow(int)` | `java.util.ArrayList` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|     % | Samples | Caller     | Location                            |
| ----: | ------: | ---------- | ----------------------------------- |
| 77.3% |      17 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller                     | Location                                                   |
| -----: | ------: | -------------------------- | ---------------------------------------------------------- |
| 100.0% |      13 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                           | Location                                                   |
| -----: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 100.0% |      13 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |      13 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000700121ece0`)

|      % | Samples | Caller                              | Location            |
| -----: | ------: | ----------------------------------- | ------------------- |
| 100.0% |      12 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller                   | Location                                                               |
| -----: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| 100.0% |      10 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`)

|      % | Samples | Caller                | Location            |
| -----: | ------: | --------------------- | ------------------- |
| 100.0% |      10 | `forEach(BiConsumer)` | `java.util.HashMap` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|      % | Samples | Caller            | Location                                    |
| -----: | ------: | ----------------- | ------------------------------------------- |
| 100.0% |      10 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|      % | Samples | Caller           | Location                                   |
| -----: | ------: | ---------------- | ------------------------------------------ |
| 100.0% |       9 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`)

|      % | Samples | Caller                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |       9 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001082400` |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % | Samples | Callee                           | Location                                                   |
| ----: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 98.2% |   1,286 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
| 59.8% |     784 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 36.8% |     482 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 15.2% |     199 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  1.0% |      13 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % | Samples | Callee      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |   1,310 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Callee         | Location                                            |
| -----: | ------: | -------------- | --------------------------------------------------- |
| 100.0% |   1,310 | `exec()`       | `java.util.concurrent.RecursiveTask`                |
|   1.3% |      17 | `exec()`       | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|   0.1% |       1 | `signalWork()` | `java.util.concurrent.ForkJoinPool`                 |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee                                                    | Location                                      |
| ----: | ------: | --------------------------------------------------------- | --------------------------------------------- |
| 98.8% |   1,271 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 30.2% |     388 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Callee                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |   1,286 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |   1,271 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |     999 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee                                               | Location                                      |
| ----: | ------: | ---------------------------------------------------- | --------------------------------------------- |
| 99.6% |     970 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  0.4% |       4 | `signalWork()`                                       | `java.util.concurrent.ForkJoinPool`           |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Callee                                   | Location                            |
| -----: | ------: | ---------------------------------------- | ----------------------------------- |
| 100.0% |     970 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % | Samples | Callee                              | Location                            |
| -----: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% |     928 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |     784 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  71.7% |     562 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  24.6% |     193 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                         | Location                                                   |
| ----: | ------: | ------------------------------ | ---------------------------------------------------------- |
| 66.9% |     376 | `distance(Double[], Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Callee                           | Location                                                  |
| ----: | ------: | -------------------------------- | --------------------------------------------------------- |
| 96.3% |     464 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  0.2% |       1 | `get(int)`                       | `java.util.ArrayList`                                     |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Callee              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |     482 | `vectorSum()`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| 100.0% |     482 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee     | Location                            |
| ----: | ------: | ---------- | ----------------------------------- |
| 96.9% |     377 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |     228 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % | Samples | Callee            | Location                                               |
| ----: | ------: | ----------------- | ------------------------------------------------------ |
| 99.0% |     204 | `average(List)`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  1.0% |       2 | `boxed(double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |     204 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee                     | Location                                               |
| -----: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% |     199 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% |     199 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                              | Location              |
| ----: | ------: | ----------------------------------- | --------------------- |
| 32.6% |      63 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`   |
| 16.6% |      32 | `add(Object)`                       | `java.util.ArrayList` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|     % | Samples | Callee          | Location                                                                              |
| ----: | ------: | --------------- | ------------------------------------------------------------------------------------- |
| 19.0% |      12 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000700121ece0` |
|  1.6% |       1 | `hash(Object)`  | `java.util.HashMap`                                                                   |

##### `grow(int)` (`java.util.ArrayList`)

|     % | Samples | Callee                  | Location           |
| ----: | ------: | ----------------------- | ------------------ |
| 78.8% |      26 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |      32 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `grow()` (`java.util.ArrayList`)

|      % | Samples | Callee      | Location              |
| -----: | ------: | ----------- | --------------------- |
| 100.0% |      32 | `grow(int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|      % | Samples | Callee   | Location              |
| -----: | ------: | -------- | --------------------- |
| 100.0% |      32 | `grow()` | `java.util.ArrayList` |

##### `add(Object)` (`java.util.ArrayList`)

|      % | Samples | Callee                       | Location              |
| -----: | ------: | ---------------------------- | --------------------- |
| 100.0% |      32 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70`)

|      % | Samples | Callee                         | Location                                    |
| -----: | ------: | ------------------------------ | ------------------------------------------- |
| 100.0% |      30 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|      % | Samples | Callee   | Location                                                               |
| -----: | ------: | -------- | ---------------------------------------------------------------------- |
| 100.0% |      22 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee                | Location            |
| ----: | ------: | --------------------- | ------------------- |
| 76.9% |      10 | `forEach(BiConsumer)` | `java.util.HashMap` |
| 23.1% |       3 | `<init>(Map)`         | `java.util.HashMap` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee            | Location                                    |
| -----: | ------: | ----------------- | ------------------------------------------- |
| 100.0% |      13 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee                     | Location                                                   |
| -----: | ------: | -------------------------- | ---------------------------------------------------------- |
| 100.0% |      13 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000700121ece0`)

|    % | Samples | Callee                               | Location                                                   |
| ---: | ------: | ------------------------------------ | ---------------------------------------------------------- |
| 8.3% |       1 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee                              | Location            |
| ----: | ------: | ----------------------------------- | ------------------- |
| 70.0% |       7 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`)

|      % | Samples | Callee                              | Location                                    |
| -----: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% |      10 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|      % | Samples | Callee                   | Location                                                               |
| -----: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| 100.0% |      10 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|     % | Samples | Callee                                                                        | Location                                    |
| ----: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| 77.8% |       7 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |
| 11.1% |       1 | `loadClass(String)`                                                           | `java.lang.ClassLoader`                     |
| 11.1% |       1 | `<clinit>()`                                                                  | `scala.Predef$`                             |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`)

|      % | Samples | Callee           | Location                                   |
| -----: | ------: | ---------------- | ------------------------------------------ |
| 100.0% |       9 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame. `truncated` stands for missing outermost callers.

Common call stack: `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4.5% |      60 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← truncated                                                         |
| 3.6% |      48 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 3.4% |      45 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 3.2% |      43 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 2.2% |      29 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 2.2% |      29 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 2.0% |      27 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← truncated                                                                                                                                                 |
| 1.9% |      25 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← truncated                   |
| 1.9% |      25 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← truncated |
| 1.9% |      25 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.8% |      24 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.8% |      24 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1.7% |      23 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.7% |      22 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1.7% |      22 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.6% |      21 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← truncated                                                                                                                                                 |
| 1.5% |      20 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 1.5% |      20 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.4% |      18 | `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.2% |      16 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

# Allocated heap profile

Allocated 37.2 GiB over 1,930 samples (19.7 MiB per sample).

| Category         |     % |     Size | Samples |
| ---------------- | ----: | -------: | ------: |
| Standard library | 94.2% |   35 GiB |   1,806 |
| Ours             |  5.8% | 2.14 GiB |     123 |
| Unknown          | <0.1% | 2.02 KiB |       1 |

Call stacks missing their outermost callers account for 5.7% of the bytes allocated.

## Hottest functions

### Self size

Functions with the most bytes allocated within the function body, excluding callees.

|     % |     Size | Samples | Function                                     | Location                                                   |
| ----: | -------: | ------: | -------------------------------------------- | ---------------------------------------------------------- |
| 92.8% | 34.5 GiB |   1,614 | `copyOf(Object[], int)`                      | `java.util.Arrays`                                         |
|  3.6% | 1.32 GiB |      70 | `findNearestCentroid()`                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.5% |  196 MiB |      12 | `lambda$merge$6(List, List)`                 | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  0.5% |  179 MiB |       9 | `createSubtask(int, int)`                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.3% |  127 MiB |       6 | `resize()`                                   | `java.util.HashMap`                                        |
|  0.3% |  120 MiB |       3 | `lambda$collectClusters$0(Double[])`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.3% |  108 MiB |       5 | `builder(long, IntFunction)`                 | `java.util.stream.Nodes`                                   |
|  0.3% |  105 MiB |       3 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                                        |
|  0.3% | 96.2 MiB |       2 | `add(double[], double[])`                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.3% | 95.6 MiB |       1 | `createSubtask(int, int)`                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  0.2% | 77.7 MiB |       9 | `grow(int)`                                  | `java.util.ArrayList`                                      |
|  0.2% | 77.6 MiB |       9 | `collectClusters(int[])`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.2% | 58.9 MiB |       6 | `createSubtask(int, int)`                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.1% | 21.7 MiB |      32 | `valueOf(double)`                            | `java.lang.Double`                                         |
|  0.1% | 21.3 MiB |       1 | `initTable()`                                | `java.util.concurrent.ConcurrentHashMap`                   |
| <0.1% | 13.5 MiB |      15 | `opWrapSink(int, Sink)`                      | `java.util.stream.IntPipeline$1`                           |
| <0.1% | 13.1 MiB |      33 | `copyOf(byte[], int)`                        | `java.util.Arrays`                                         |
| <0.1% | 10.4 MiB |      15 | `intStream(Spliterator$OfInt, boolean)`      | `java.util.stream.StreamSupport`                           |
| <0.1% | 10.3 MiB |      11 | `mapToObj(IntFunction, int)`                 | `java.util.stream.IntPipeline`                             |
| <0.1% | 7.85 MiB |       9 | `range(int, int)`                            | `java.util.stream.IntStream`                               |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Standard library

|     % |     Size | Samples | Function                                             | Location                                     |
| ----: | -------: | ------: | ---------------------------------------------------- | -------------------------------------------- |
| 92.8% | 34.5 GiB |   1,614 | `copyOf(Object[], int)`                              | `java.util.Arrays`                           |
|  0.3% |  127 MiB |       6 | `resize()`                                           | `java.util.HashMap`                          |
|  0.3% |  108 MiB |       5 | `builder(long, IntFunction)`                         | `java.util.stream.Nodes`                     |
|  0.3% |  105 MiB |       3 | `newNode(int, Object, Object, HashMap$Node)`         | `java.util.HashMap`                          |
|  0.2% | 77.7 MiB |       9 | `grow(int)`                                          | `java.util.ArrayList`                        |
|  0.1% | 21.7 MiB |      32 | `valueOf(double)`                                    | `java.lang.Double`                           |
|  0.1% | 21.3 MiB |       1 | `initTable()`                                        | `java.util.concurrent.ConcurrentHashMap`     |
| <0.1% | 13.5 MiB |      15 | `opWrapSink(int, Sink)`                              | `java.util.stream.IntPipeline$1`             |
| <0.1% | 13.1 MiB |      33 | `copyOf(byte[], int)`                                | `java.util.Arrays`                           |
| <0.1% | 10.4 MiB |      15 | `intStream(Spliterator$OfInt, boolean)`              | `java.util.stream.StreamSupport`             |
| <0.1% | 10.3 MiB |      11 | `mapToObj(IntFunction, int)`                         | `java.util.stream.IntPipeline`               |
| <0.1% | 7.85 MiB |       9 | `range(int, int)`                                    | `java.util.stream.IntStream`                 |
| <0.1% | 6.86 MiB |      18 | `<init>(InputStream, Inflater, int)`                 | `java.util.zip.InflaterInputStream`          |
| <0.1% | 4.06 MiB |       4 | `allocateInstance(Object)`                           | `java.lang.invoke.DirectMethodHandle`        |
| <0.1% | 2.58 MiB |       1 | `result()`                                           | `scala.collection.immutable.VectorBuilder`   |
| <0.1% | 1.81 MiB |       5 | `allocateInstance(Class)`                            | `jdk.internal.misc.Unsafe`                   |
| <0.1% | 1.07 MiB |       2 | `readNBytes(int)`                                    | `java.io.InputStream`                        |
| <0.1% |  823 KiB |       2 | `visitMethod(int, String, String, String, String[])` | `jdk.internal.org.objectweb.asm.ClassWriter` |
| <0.1% |  807 KiB |       2 | `newString(byte[], int, int)`                        | `java.lang.StringLatin1`                     |
| <0.1% |  468 KiB |       1 | `initCEN(int, ZipCoder)`                             | `java.util.zip.ZipFile$Source`               |

##### Ours

|     % |     Size | Samples | Function                             | Location                                                   |
| ----: | -------: | ------: | ------------------------------------ | ---------------------------------------------------------- |
|  3.6% | 1.32 GiB |      70 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.5% |  196 MiB |      12 | `lambda$merge$6(List, List)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  0.5% |  179 MiB |       9 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.3% |  120 MiB |       3 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.3% | 96.2 MiB |       2 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.3% | 95.6 MiB |       1 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  0.2% | 77.6 MiB |       9 | `collectClusters(int[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.2% | 58.9 MiB |       6 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| <0.1% |    6 MiB |       4 | `vectorSum()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| <0.1% | 5.57 MiB |       3 | `merge(Map, Map)`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| <0.1% | 1.49 MiB |       4 | `lambda$generateData$4(int)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |

#### Lines

Lines with the largest contribution to each function's self size.

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|      % |     Size | Samples | Location                |
| -----: | -------: | ------: | ----------------------- |
| 100.0% | 34.5 GiB |   1,614 | `java.util.Arrays:3482` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Location                                                       |
| -----: | -------: | ------: | -------------------------------------------------------------- |
| 100.0% | 1.32 GiB |      70 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:223` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |    Size | Samples | Location                                        |
| -----: | ------: | ------: | ----------------------------------------------- |
| 100.0% | 196 MiB |      12 | `org.renaissance.jdk.concurrent.JavaKMeans:114` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Location                                                       |
| -----: | ------: | ------: | -------------------------------------------------------------- |
| 100.0% | 179 MiB |       9 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261` |

##### `resize()` (`java.util.HashMap`)

|      % |    Size | Samples | Location                |
| -----: | ------: | ------: | ----------------------- |
| 100.0% | 127 MiB |       6 | `java.util.HashMap:710` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Location                                                       |
| -----: | ------: | ------: | -------------------------------------------------------------- |
| 100.0% | 120 MiB |       3 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

|      % |    Size | Samples | Location                     |
| -----: | ------: | ------: | ---------------------------- |
| 100.0% | 108 MiB |       5 | `java.util.stream.Nodes:168` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

|      % |    Size | Samples | Location                 |
| -----: | ------: | ------: | ------------------------ |
| 100.0% | 105 MiB |       3 | `java.util.HashMap:1909` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |     Size | Samples | Location                                                      |
| -----: | -------: | ------: | ------------------------------------------------------------- |
| 100.0% | 96.2 MiB |       2 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:430` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |     Size | Samples | Location                                                   |
| -----: | -------: | ------: | ---------------------------------------------------------- |
| 100.0% | 95.6 MiB |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:352` |

##### `grow(int)` (`java.util.ArrayList`)

|      % |     Size | Samples | Location                  |
| -----: | -------: | ------: | ------------------------- |
| 100.0% | 77.7 MiB |       9 | `java.util.ArrayList:239` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Location                                                       |
| -----: | -------: | ------: | -------------------------------------------------------------- |
| 100.0% | 77.6 MiB |       9 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:209` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |     Size | Samples | Location                                                      |
| -----: | -------: | ------: | ------------------------------------------------------------- |
| 100.0% | 58.9 MiB |       6 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419` |

##### `valueOf(double)` (`java.lang.Double`)

|      % |     Size | Samples | Location               |
| -----: | -------: | ------: | ---------------------- |
| 100.0% | 21.7 MiB |      32 | `java.lang.Double:773` |

##### `initTable()` (`java.util.concurrent.ConcurrentHashMap`)

|      % |     Size | Samples | Location                                      |
| -----: | -------: | ------: | --------------------------------------------- |
| 100.0% | 21.3 MiB |       1 | `java.util.concurrent.ConcurrentHashMap:2301` |

##### `opWrapSink(int, Sink)` (`java.util.stream.IntPipeline$1`)

|      % |     Size | Samples | Location                             |
| -----: | -------: | ------: | ------------------------------------ |
| 100.0% | 13.5 MiB |      15 | `java.util.stream.IntPipeline$1:177` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|      % |     Size | Samples | Location                |
| -----: | -------: | ------: | ----------------------- |
| 100.0% | 13.1 MiB |      33 | `java.util.Arrays:3541` |

##### `intStream(Spliterator$OfInt, boolean)` (`java.util.stream.StreamSupport`)

|      % |     Size | Samples | Location                             |
| -----: | -------: | ------: | ------------------------------------ |
| 100.0% | 10.4 MiB |      15 | `java.util.stream.StreamSupport:138` |

##### `mapToObj(IntFunction, int)` (`java.util.stream.IntPipeline`)

|      % |     Size | Samples | Location                           |
| -----: | -------: | ------: | ---------------------------------- |
| 100.0% | 10.3 MiB |      11 | `java.util.stream.IntPipeline:174` |

##### `range(int, int)` (`java.util.stream.IntStream`)

|      % |     Size | Samples | Location                          |
| -----: | -------: | ------: | --------------------------------- |
| 100.0% | 7.85 MiB |       9 | `java.util.stream.IntStream:1083` |

##### `<init>(InputStream, Inflater, int)` (`java.util.zip.InflaterInputStream`)

|      % |     Size | Samples | Location                               |
| -----: | -------: | ------: | -------------------------------------- |
| 100.0% | 6.86 MiB |      18 | `java.util.zip.InflaterInputStream:89` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |  Size | Samples | Location                                                      |
| -----: | ----: | ------: | ------------------------------------------------------------- |
| 100.0% | 6 MiB |       4 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Location                                        |
| -----: | -------: | ------: | ----------------------------------------------- |
| 100.0% | 5.57 MiB |       3 | `org.renaissance.jdk.concurrent.JavaKMeans:110` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

|      % |     Size | Samples | Location                                  |
| -----: | -------: | ------: | ----------------------------------------- |
| 100.0% | 4.06 MiB |       4 | `java.lang.invoke.DirectMethodHandle:501` |

##### `result()` (`scala.collection.immutable.VectorBuilder`)

|      % |     Size | Samples | Location                                        |
| -----: | -------: | ------: | ----------------------------------------------- |
| 100.0% | 2.58 MiB |       1 | `scala.collection.immutable.VectorBuilder:1898` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Location                                       |
| -----: | -------: | ------: | ---------------------------------------------- |
| 100.0% | 1.49 MiB |       4 | `org.renaissance.jdk.concurrent.JavaKMeans:87` |

##### `readNBytes(int)` (`java.io.InputStream`)

|      % |     Size | Samples | Location                  |
| -----: | -------: | ------: | ------------------------- |
| 100.0% | 1.07 MiB |       2 | `java.io.InputStream:408` |

##### `visitMethod(int, String, String, String, String[])` (`jdk.internal.org.objectweb.asm.ClassWriter`)

|      % |    Size | Samples | Location                                         |
| -----: | ------: | ------: | ------------------------------------------------ |
| 100.0% | 823 KiB |       2 | `jdk.internal.org.objectweb.asm.ClassWriter:500` |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

|      % |    Size | Samples | Location                     |
| -----: | ------: | ------: | ---------------------------- |
| 100.0% | 807 KiB |       2 | `java.lang.StringLatin1:750` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|      % |    Size | Samples | Location                            |
| -----: | ------: | ------: | ----------------------------------- |
| 100.0% | 468 KiB |       1 | `java.util.zip.ZipFile$Source:1733` |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|     % |     Size | Samples | Caller      | Location              |
| ----: | -------: | ------: | ----------- | --------------------- |
| 54.8% | 18.9 GiB |     830 | `toArray()` | `java.util.ArrayList` |
| 45.2% | 15.6 GiB |     784 | `grow(int)` | `java.util.ArrayList` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Caller              | Location                                                   |
| -----: | -------: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% | 1.32 GiB |      70 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |    Size | Samples | Caller                  | Location                                                               |
| -----: | ------: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| 100.0% | 196 MiB |      12 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Caller      | Location                                               |
| -----: | ------: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% | 179 MiB |       9 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `resize()` (`java.util.HashMap`)

|     % |     Size | Samples | Caller                                          | Location            |
| ----: | -------: | ------: | ----------------------------------------------- | ------------------- |
| 96.7% |  123 MiB |       4 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |
|  3.3% | 4.17 MiB |       2 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Caller          | Location                                                                              |
| -----: | ------: | ------: | --------------- | ------------------------------------------------------------------------------------- |
| 100.0% | 120 MiB |       3 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000700121ece0` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

|      % |    Size | Samples | Caller                               | Location                             |
| -----: | ------: | ------: | ------------------------------------ | ------------------------------------ |
| 100.0% | 108 MiB |       5 | `makeNodeBuilder(long, IntFunction)` | `java.util.stream.ReferencePipeline` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

|     % |     Size | Samples | Caller                                          | Location            |
| ----: | -------: | ------: | ----------------------------------------------- | ------------------- |
| 90.7% | 94.9 MiB |       2 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |
|  9.3% | 9.78 MiB |       1 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |     Size | Samples | Caller                               | Location                                                  |
| -----: | -------: | ------: | ------------------------------------ | --------------------------------------------------------- |
| 100.0% | 96.2 MiB |       2 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |     Size | Samples | Caller      | Location                                               |
| -----: | -------: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% | 95.6 MiB |       1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `grow(int)` (`java.util.ArrayList`)

|      % |     Size | Samples | Caller   | Location              |
| -----: | -------: | ------: | -------- | --------------------- |
| 100.0% | 77.7 MiB |       9 | `grow()` | `java.util.ArrayList` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Caller              | Location                                                   |
| -----: | -------: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% | 77.6 MiB |       9 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |     Size | Samples | Caller      | Location                                               |
| -----: | -------: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% | 58.9 MiB |       6 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `valueOf(double)` (`java.lang.Double`)

|      % |     Size | Samples | Caller                                           | Location                                    |
| -----: | -------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| 100.0% | 21.7 MiB |      32 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `initTable()` (`java.util.concurrent.ConcurrentHashMap`)

|      % |     Size | Samples | Caller                            | Location                                 |
| -----: | -------: | ------: | --------------------------------- | ---------------------------------------- |
| 100.0% | 21.3 MiB |       1 | `putVal(Object, Object, boolean)` | `java.util.concurrent.ConcurrentHashMap` |

##### `opWrapSink(int, Sink)` (`java.util.stream.IntPipeline$1`)

|      % |     Size | Samples | Caller           | Location                            |
| -----: | -------: | ------: | ---------------- | ----------------------------------- |
| 100.0% | 13.5 MiB |      15 | `wrapSink(Sink)` | `java.util.stream.AbstractPipeline` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|     % |     Size | Samples | Caller                        | Location                          |
| ----: | -------: | ------: | ----------------------------- | --------------------------------- |
| 85.0% | 11.1 MiB |      28 | `getBytes()`                  | `jdk.internal.loader.Resource`    |
| 15.0% | 1.97 MiB |       5 | `ensureCapacityInternal(int)` | `java.lang.AbstractStringBuilder` |

##### `intStream(Spliterator$OfInt, boolean)` (`java.util.stream.StreamSupport`)

|      % |     Size | Samples | Caller            | Location                     |
| -----: | -------: | ------: | ----------------- | ---------------------------- |
| 100.0% | 10.4 MiB |      15 | `range(int, int)` | `java.util.stream.IntStream` |

##### `mapToObj(IntFunction, int)` (`java.util.stream.IntPipeline`)

|      % |     Size | Samples | Caller                  | Location                       |
| -----: | -------: | ------: | ----------------------- | ------------------------------ |
| 100.0% | 10.3 MiB |      11 | `mapToObj(IntFunction)` | `java.util.stream.IntPipeline` |

##### `range(int, int)` (`java.util.stream.IntStream`)

|      % |     Size | Samples | Caller                                           | Location                                    |
| -----: | -------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| 100.0% | 7.85 MiB |       9 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `<init>(InputStream, Inflater, int)` (`java.util.zip.InflaterInputStream`)

|      % |     Size | Samples | Caller                                                                                  | Location                                           |
| -----: | -------: | ------: | --------------------------------------------------------------------------------------- | -------------------------------------------------- |
| 100.0% | 6.86 MiB |      18 | `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, Inflater, int)` | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |  Size | Samples | Caller              | Location                                                  |
| -----: | ----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% | 6 MiB |       4 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Caller                     | Location                                                   |
| -----: | -------: | ------: | -------------------------- | ---------------------------------------------------------- |
| 100.0% | 5.57 MiB |       3 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

|      % |     Size | Samples | Caller                                       | Location                                             |
| -----: | -------: | ------: | -------------------------------------------- | ---------------------------------------------------- |
| 100.0% | 4.06 MiB |       4 | `newInvokeSpecial(Object, int, int, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001220000` |

##### `result()` (`scala.collection.immutable.VectorBuilder`)

|      % |     Size | Samples | Caller     | Location                                   |
| -----: | -------: | ------: | ---------- | ------------------------------------------ |
| 100.0% | 2.58 MiB |       1 | `result()` | `scala.collection.immutable.VectorBuilder` |

##### `allocateInstance(Class)` (`jdk.internal.misc.Unsafe`)

|      % |     Size | Samples | Caller                     | Location                              |
| -----: | -------: | ------: | -------------------------- | ------------------------------------- |
| 100.0% | 1.81 MiB |       5 | `allocateInstance(Object)` | `java.lang.invoke.DirectMethodHandle` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Caller       | Location                                                               |
| -----: | -------: | ------: | ------------ | ---------------------------------------------------------------------- |
| 100.0% | 1.49 MiB |       4 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121d960` |

##### `readNBytes(int)` (`java.io.InputStream`)

|      % |     Size | Samples | Caller           | Location              |
| -----: | -------: | ------: | ---------------- | --------------------- |
| 100.0% | 1.07 MiB |       2 | `readAllBytes()` | `java.io.InputStream` |

##### `visitMethod(int, String, String, String, String[])` (`jdk.internal.org.objectweb.asm.ClassWriter`)

|     % |    Size | Samples | Caller                  | Location                                       |
| ----: | ------: | ------: | ----------------------- | ---------------------------------------------- |
| 52.0% | 428 KiB |       1 | `generateConstructor()` | `java.lang.invoke.InnerClassLambdaMetafactory` |
| 48.0% | 395 KiB |       1 | `generateInnerClass()`  | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

|      % |    Size | Samples | Caller                | Location           |
| -----: | ------: | ------: | --------------------- | ------------------ |
| 100.0% | 807 KiB |       2 | `substring(int, int)` | `java.lang.String` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|      % |    Size | Samples | Caller                                          | Location                       |
| -----: | ------: | ------: | ----------------------------------------------- | ------------------------------ |
| 100.0% | 468 KiB |       1 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

### Total size

Functions with the most bytes allocated within the function and its callees.

|     % |     Size | Samples | Function                                             | Location                                                               |
| ----: | -------: | ------: | ---------------------------------------------------- | ---------------------------------------------------------------------- |
| 99.4% | 36.9 GiB |   1,749 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 99.4% | 36.9 GiB |   1,749 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                                   |
| 99.4% | 36.9 GiB |   1,749 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                                    |
| 94.3% |   35 GiB |   1,673 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
| 93.9% | 34.9 GiB |   1,659 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                                    |
| 93.7% | 34.8 GiB |   1,656 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                                    |
| 93.7% | 34.8 GiB |   1,656 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                            |
| 92.8% | 34.5 GiB |   1,614 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                                     |
| 83.5% |   31 GiB |   1,445 | `merge(Map, Map)`                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 83.5% |   31 GiB |   1,445 | `combineResults(Map, Map)`                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 83.5% |   31 GiB |   1,445 | `combineResults(Object, Object)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 83.2% | 30.9 GiB |   1,438 | `lambda$merge$6(List, List)`                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 83.2% | 30.9 GiB |   1,438 | `apply(Object, Object)`                              | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0` |
| 83.2% | 30.9 GiB |   1,438 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                                                    |
| 83.2% | 30.9 GiB |   1,438 | `lambda$merge$7(Map, Object, List)`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 83.2% | 30.9 GiB |   1,438 | `accept(Object, Object)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30` |
| 83.2% | 30.9 GiB |   1,438 | `forEach(BiConsumer)`                                | `java.util.HashMap`                                                    |
| 63.4% | 23.6 GiB |   1,142 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                                    |
| 63.4% | 23.6 GiB |   1,142 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                                    |
| 62.9% | 23.4 GiB |   1,130 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Standard library

|     % |     Size | Samples | Function                                                  | Location                                            |
| ----: | -------: | ------: | --------------------------------------------------------- | --------------------------------------------------- |
| 99.4% | 36.9 GiB |   1,749 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                |
| 99.4% | 36.9 GiB |   1,749 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                 |
| 94.3% |   35 GiB |   1,673 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 93.9% | 34.9 GiB |   1,659 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                 |
| 93.7% | 34.8 GiB |   1,656 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                 |
| 93.7% | 34.8 GiB |   1,656 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`         |
| 92.8% | 34.5 GiB |   1,614 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                                  |
| 83.2% | 30.9 GiB |   1,438 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                                 |
| 83.2% | 30.9 GiB |   1,438 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                                 |
| 63.4% | 23.6 GiB |   1,142 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                 |
| 63.4% | 23.6 GiB |   1,142 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                 |
| 62.9% | 23.4 GiB |   1,130 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 60.4% | 22.4 GiB |   1,076 | `addAll(Collection)`                                      | `java.util.ArrayList`                               |
| 50.9% | 18.9 GiB |     830 | `toArray()`                                               | `java.util.ArrayList`                               |
| 42.1% | 15.7 GiB |     793 | `grow(int)`                                               | `java.util.ArrayList`                               |
| 22.2% | 8.26 GiB |     350 | `<init>(Collection)`                                      | `java.util.ArrayList`                               |
| 18.2% | 6.76 GiB |     188 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                 |
| 18.2% | 6.74 GiB |     179 | `exec()`                                                  | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
| 11.5% | 4.27 GiB |     181 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                 |
| 10.4% | 3.85 GiB |     197 | `grow()`                                                  | `java.util.ArrayList`                               |

##### Ours

|     % |     Size | Samples | Function                                                                                                               | Location                                                               |
| ----: | -------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 99.4% | 36.9 GiB |   1,749 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 83.5% |   31 GiB |   1,445 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 83.5% |   31 GiB |   1,445 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 83.5% |   31 GiB |   1,445 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 83.2% | 30.9 GiB |   1,438 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 83.2% | 30.9 GiB |   1,438 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0` |
| 83.2% | 30.9 GiB |   1,438 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 83.2% | 30.9 GiB |   1,438 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30` |
| 18.2% | 6.74 GiB |     179 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 18.2% | 6.74 GiB |     179 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70` |
| 14.7% | 5.46 GiB |     282 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 11.1% | 4.14 GiB |     212 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  3.6% | 1.32 GiB |      70 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  0.6% |  212 MiB |     174 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
|  0.6% |  211 MiB |     173 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
|  0.6% |  211 MiB |     173 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|  0.6% |  211 MiB |     172 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
|  0.5% |  208 MiB |     165 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|  0.5% |  194 MiB |     130 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
|  0.5% |  194 MiB |     129 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % |     Size | Samples | Caller   | Location                             |
| -----: | -------: | ------: | -------- | ------------------------------------ |
| 100.0% | 36.9 GiB |   1,749 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % |     Size | Samples | Caller     | Location                            |
| -----: | -------: | ------: | ---------- | ----------------------------------- |
| 100.0% | 36.9 GiB |   1,749 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|     % |     Size | Samples | Caller                                                    | Location                                      |
| ----: | -------: | ------: | --------------------------------------------------------- | --------------------------------------------- |
| 94.9% |   35 GiB |   1,673 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 63.3% | 23.4 GiB |   1,130 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 18.3% | 6.76 GiB |     188 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |
| 11.6% | 4.27 GiB |     181 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|     % |     Size | Samples | Caller                                   | Location                            |
| ----: | -------: | ------: | ---------------------------------------- | ----------------------------------- |
| 99.6% | 34.9 GiB |   1,659 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|     % |     Size | Samples | Caller                              | Location                            |
| ----: | -------: | ------: | ----------------------------------- | ----------------------------------- |
| 99.7% | 34.8 GiB |   1,656 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % |     Size | Samples | Caller  | Location                                    |
| -----: | -------: | ------: | ------- | ------------------------------------------- |
| 100.0% | 34.8 GiB |   1,656 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|     % |     Size | Samples | Caller      | Location              |
| ----: | -------: | ------: | ----------- | --------------------- |
| 54.8% | 18.9 GiB |     830 | `toArray()` | `java.util.ArrayList` |
| 45.2% | 15.6 GiB |     784 | `grow(int)` | `java.util.ArrayList` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |   Size | Samples | Caller                     | Location                                                   |
| -----: | -----: | ------: | -------------------------- | ---------------------------------------------------------- |
| 100.0% | 31 GiB |   1,445 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |   Size | Samples | Caller                           | Location                                                   |
| -----: | -----: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 100.0% | 31 GiB |   1,445 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |   Size | Samples | Caller      | Location                                               |
| -----: | -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% | 31 GiB |   1,445 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Caller                  | Location                                                               |
| -----: | -------: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| 100.0% | 30.9 GiB |   1,438 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0`)

|      % |     Size | Samples | Caller                              | Location            |
| -----: | -------: | ------: | ----------------------------------- | ------------------- |
| 100.0% | 30.9 GiB |   1,438 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|      % |     Size | Samples | Caller                              | Location                                    |
| -----: | -------: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% | 30.9 GiB |   1,438 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Caller                   | Location                                                               |
| -----: | -------: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| 100.0% | 30.9 GiB |   1,438 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`)

|      % |     Size | Samples | Caller                | Location            |
| -----: | -------: | ------: | --------------------- | ------------------- |
| 100.0% | 30.9 GiB |   1,438 | `forEach(BiConsumer)` | `java.util.HashMap` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|      % |     Size | Samples | Caller            | Location                                    |
| -----: | -------: | ------: | ----------------- | ------------------------------------------- |
| 100.0% | 30.9 GiB |   1,438 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|      % |     Size | Samples | Caller   | Location                            |
| -----: | -------: | ------: | -------- | ----------------------------------- |
| 100.0% | 23.6 GiB |   1,142 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % |     Size | Samples | Caller      | Location                                               |
| -----: | -------: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% | 23.6 GiB |   1,142 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |     Size | Samples | Caller                 | Location                            |
| -----: | -------: | ------: | ---------------------- | ----------------------------------- |
| 100.0% | 23.4 GiB |   1,130 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `addAll(Collection)` (`java.util.ArrayList`)

|      % |     Size | Samples | Caller                       | Location                                    |
| -----: | -------: | ------: | ---------------------------- | ------------------------------------------- |
| 100.0% | 22.4 GiB |   1,076 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `toArray()` (`java.util.ArrayList`)

|     % |     Size | Samples | Caller               | Location              |
| ----: | -------: | ------: | -------------------- | --------------------- |
| 56.3% | 10.7 GiB |     480 | `addAll(Collection)` | `java.util.ArrayList` |
| 43.7% | 8.26 GiB |     350 | `<init>(Collection)` | `java.util.ArrayList` |

##### `grow(int)` (`java.util.ArrayList`)

|     % |     Size | Samples | Caller               | Location              |
| ----: | -------: | ------: | -------------------- | --------------------- |
| 75.4% | 11.8 GiB |     596 | `addAll(Collection)` | `java.util.ArrayList` |
| 24.6% | 3.85 GiB |     197 | `grow()`             | `java.util.ArrayList` |

##### `<init>(Collection)` (`java.util.ArrayList`)

|      % |     Size | Samples | Caller                       | Location                                    |
| -----: | -------: | ------: | ---------------------------- | ------------------------------------------- |
| 100.0% | 8.26 GiB |     350 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|     % |     Size | Samples | Caller                         | Location                                               |
| ----: | -------: | ------: | ------------------------------ | ------------------------------------------------------ |
| 99.8% | 6.74 GiB |     179 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`            |
|  0.1% | 3.72 MiB |       5 | `average(List)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|      % |     Size | Samples | Caller     | Location                            |
| -----: | -------: | ------: | ---------- | ----------------------------------- |
| 100.0% | 6.74 GiB |     179 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Caller   | Location                                                               |
| -----: | -------: | ------: | -------- | ---------------------------------------------------------------------- |
| 100.0% | 6.74 GiB |     179 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70`)

|      % |     Size | Samples | Caller   | Location                                            |
| -----: | -------: | ------: | -------- | --------------------------------------------------- |
| 100.0% | 6.74 GiB |     179 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Caller              | Location                                                   |
| -----: | -------: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% | 5.46 GiB |     282 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 100.0% | 5.46 GiB |     282 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|      % |     Size | Samples | Caller                 | Location                            |
| -----: | -------: | ------: | ---------------------- | ----------------------------------- |
| 100.0% | 4.27 GiB |     181 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Caller              | Location                                                   |
| -----: | -------: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% | 4.14 GiB |     212 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `grow()` (`java.util.ArrayList`)

|      % |     Size | Samples | Caller                       | Location              |
| -----: | -------: | ------: | ---------------------------- | --------------------- |
| 100.0% | 3.85 GiB |     197 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Caller              | Location                                                   |
| -----: | -------: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% | 1.32 GiB |      70 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|     % |    Size | Samples | Caller           | Location                        |
| ----: | ------: | ------: | ---------------- | ------------------------------- |
| 99.6% | 211 MiB |     172 | `main(String[])` | `org.renaissance.core.Launcher` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|     % |    Size | Samples | Caller                                 | Location                        |
| ----: | ------: | ------: | -------------------------------------- | ------------------------------- |
| 99.8% | 211 MiB |     172 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|      % |    Size | Samples | Caller                         | Location                                             |
| -----: | ------: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% | 211 MiB |     173 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |    Size | Samples | Caller           | Location                                   |
| -----: | ------: | ------: | ---------------- | ------------------------------------------ |
| 100.0% | 208 MiB |     165 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |    Size | Samples | Caller           | Location                                    |
| -----: | ------: | ------: | ---------------- | ------------------------------------------- |
| 100.0% | 194 MiB |     130 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |    Size | Samples | Caller              | Location                                                               |
| -----: | ------: | ------: | ------------------- | ---------------------------------------------------------------------- |
| 100.0% | 194 MiB |     129 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8` |

#### Callees

Callees with the largest contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % |     Size | Samples | Callee                           | Location                                                   |
| ----: | -------: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 84.1% |   31 GiB |   1,445 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 63.8% | 23.6 GiB |   1,142 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
| 14.8% | 5.46 GiB |     282 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.5% |  179 MiB |       9 | `createSubtask(int, int)`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.3% | 96.2 MiB |       2 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % |     Size | Samples | Callee      | Location                                               |
| -----: | -------: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% | 36.9 GiB |   1,749 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % |     Size | Samples | Callee   | Location                                            |
| -----: | -------: | ------: | -------- | --------------------------------------------------- |
| 100.0% | 36.9 GiB |   1,749 | `exec()` | `java.util.concurrent.RecursiveTask`                |
|  18.3% | 6.74 GiB |     179 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |   Size | Samples | Callee     | Location                            |
| -----: | -----: | ------: | ---------- | ----------------------------------- |
| 100.0% | 35 GiB |   1,673 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % |     Size | Samples | Callee                                               | Location                                      |
| -----: | -------: | ------: | ---------------------------------------------------- | --------------------------------------------- |
| 100.0% | 34.9 GiB |   1,659 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % |     Size | Samples | Callee                                   | Location                            |
| -----: | -------: | ------: | ---------------------------------------- | ----------------------------------- |
| 100.0% | 34.8 GiB |   1,656 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % |     Size | Samples | Callee                              | Location                            |
| -----: | -------: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% | 34.8 GiB |   1,656 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % |     Size | Samples | Callee                               | Location                           |
| ----: | -------: | ------: | ------------------------------------ | ---------------------------------- |
| 99.6% | 30.9 GiB |   1,438 | `forEach(BiConsumer)`                | `java.util.HashMap`                |
|  0.4% |  132 MiB |       3 | `<init>(Map)`                        | `java.util.HashMap`                |
| <0.1% |  429 KiB |       1 | `linkToTargetMethod(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |   Size | Samples | Callee            | Location                                    |
| -----: | -----: | ------: | ----------------- | ------------------------------------------- |
| 100.0% | 31 GiB |   1,445 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |   Size | Samples | Callee                     | Location                                                   |
| -----: | -----: | ------: | -------------------------- | ---------------------------------------------------------- |
| 100.0% | 31 GiB |   1,445 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % |     Size | Samples | Callee               | Location              |
| ----: | -------: | ------: | -------------------- | --------------------- |
| 72.7% | 22.4 GiB |   1,076 | `addAll(Collection)` | `java.util.ArrayList` |
| 26.7% | 8.26 GiB |     350 | `<init>(Collection)` | `java.util.ArrayList` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0`)

|      % |     Size | Samples | Callee                       | Location                                    |
| -----: | -------: | ------: | ---------------------------- | ------------------------------------------- |
| 100.0% | 30.9 GiB |   1,438 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|      % |     Size | Samples | Callee                  | Location                                                               |
| -----: | -------: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| 100.0% | 30.9 GiB |   1,438 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Callee                              | Location            |
| -----: | -------: | ------: | ----------------------------------- | ------------------- |
| 100.0% | 30.9 GiB |   1,438 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`)

|      % |     Size | Samples | Callee                              | Location                                    |
| -----: | -------: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% | 30.9 GiB |   1,438 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|      % |     Size | Samples | Callee                   | Location                                                               |
| -----: | -------: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| 100.0% | 30.9 GiB |   1,438 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|     % |     Size | Samples | Callee                                                    | Location                                      |
| ----: | -------: | ------: | --------------------------------------------------------- | --------------------------------------------- |
| 99.2% | 23.4 GiB |   1,130 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 18.1% | 4.27 GiB |     181 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % |     Size | Samples | Callee                 | Location                            |
| -----: | -------: | ------: | ---------------------- | ----------------------------------- |
| 100.0% | 23.6 GiB |   1,142 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |     Size | Samples | Callee     | Location                            |
| -----: | -------: | ------: | ---------- | ----------------------------------- |
| 100.0% | 23.4 GiB |   1,130 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `addAll(Collection)` (`java.util.ArrayList`)

|     % |     Size | Samples | Callee      | Location              |
| ----: | -------: | ------: | ----------- | --------------------- |
| 52.6% | 11.8 GiB |     596 | `grow(int)` | `java.util.ArrayList` |
| 47.4% | 10.7 GiB |     480 | `toArray()` | `java.util.ArrayList` |

##### `toArray()` (`java.util.ArrayList`)

|      % |     Size | Samples | Callee                  | Location           |
| -----: | -------: | ------: | ----------------------- | ------------------ |
| 100.0% | 18.9 GiB |     830 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `grow(int)` (`java.util.ArrayList`)

|     % |     Size | Samples | Callee                  | Location           |
| ----: | -------: | ------: | ----------------------- | ------------------ |
| 99.5% | 15.6 GiB |     784 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `<init>(Collection)` (`java.util.ArrayList`)

|      % |     Size | Samples | Callee      | Location              |
| -----: | -------: | ------: | ----------- | --------------------- |
| 100.0% | 8.26 GiB |     350 | `toArray()` | `java.util.ArrayList` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|      % |     Size | Samples | Callee     | Location                            |
| -----: | -------: | ------: | ---------- | ----------------------------------- |
| 100.0% | 6.76 GiB |     188 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|      % |     Size | Samples | Callee   | Location                                                               |
| -----: | -------: | ------: | -------- | ---------------------------------------------------------------------- |
| 100.0% | 6.74 GiB |     179 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Callee     | Location                            |
| -----: | -------: | ------: | ---------- | ----------------------------------- |
| 100.0% | 6.74 GiB |     179 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70`)

|      % |     Size | Samples | Callee                         | Location                                    |
| -----: | -------: | ------: | ------------------------------ | ------------------------------------------- |
| 100.0% | 6.74 GiB |     179 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Callee                   | Location                                                   |
| -----: | -------: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% | 5.46 GiB |     282 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  75.8% | 4.14 GiB |     212 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  24.2% | 1.32 GiB |      70 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|      % |     Size | Samples | Callee     | Location                            |
| -----: | -------: | ------: | ---------- | ----------------------------------- |
| 100.0% | 4.27 GiB |     181 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % |     Size | Samples | Callee                              | Location              |
| ----: | -------: | ------: | ----------------------------------- | --------------------- |
| 93.0% | 3.85 GiB |     196 | `add(Object)`                       | `java.util.ArrayList` |
|  5.2% |  219 MiB |       7 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`   |

##### `grow()` (`java.util.ArrayList`)

|      % |     Size | Samples | Callee      | Location              |
| -----: | -------: | ------: | ----------- | --------------------- |
| 100.0% | 3.85 GiB |     197 | `grow(int)` | `java.util.ArrayList` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|     % |    Size | Samples | Callee                                                      | Location                            |
| ----: | ------: | ------: | ----------------------------------------------------------- | ----------------------------------- |
| 99.7% | 211 MiB |     172 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`     |
|  0.2% | 380 KiB |       1 | `createScratchRoot(Path, boolean)`                          | `org.renaissance.core.Launcher`     |
|  0.2% | 377 KiB |       1 | `create(Path, URI)`                                         | `org.renaissance.core.ModuleLoader` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|     % |    Size | Samples | Callee                               | Location                            |
| ----: | ------: | ------: | ------------------------------------ | ----------------------------------- |
| 99.8% | 211 MiB |     172 | `invoke(Object, Object[])`           | `java.lang.reflect.Method`          |
|  0.2% | 388 KiB |       1 | `createClassLoaderForModule(String)` | `org.renaissance.core.ModuleLoader` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|     % |     Size | Samples | Callee              | Location                                    |
| ----: | -------: | ------: | ------------------- | ------------------------------------------- |
| 98.5% |  208 MiB |     165 | `main(String[])`    | `org.renaissance.harness.RenaissanceSuite$` |
|  1.5% | 3.09 MiB |       8 | `loadClass(String)` | `java.lang.ClassLoader`                     |

##### `main(String[])` (`org.renaissance.core.Launcher`)

|      % |    Size | Samples | Callee                                 | Location                        |
| -----: | ------: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 211 MiB |     172 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|     % |     Size | Samples | Callee                                                                        | Location                                    |
| ----: | -------: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| 93.4% |  194 MiB |     130 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |
|  1.8% |  3.7 MiB |      10 | `<clinit>()`                                                                  | `scala.Predef$`                             |
|  1.1% | 2.35 MiB |       6 | `parse(String[])`                                                             | `org.renaissance.harness.ConfigParser`      |
|  1.1% | 2.33 MiB |       6 | `<init>(Map)`                                                                 | `org.renaissance.harness.ConfigParser`      |
|  0.8% | 1.75 MiB |       5 | `apply(Seq)`                                                                  | `scala.collection.immutable.Map$`           |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

|     % |    Size | Samples | Callee                                                           | Location                               |
| ----: | ------: | ------: | ---------------------------------------------------------------- | -------------------------------------- |
| 99.8% | 194 MiB |     129 | `foreach(Function1)`                                             | `scala.collection.immutable.List`      |
|  0.2% | 381 KiB |       1 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|     % |     Size | Samples | Callee                                                                                       | Location                                  |
| ----: | -------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
| 99.0% |  192 MiB |     124 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
|  1.0% | 1.95 MiB |       5 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

## Hottest call stacks

Call stacks with the most bytes allocated in their leaf frame.

Common call stack: `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|     % |      Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----: | --------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 10.2% |   3.8 GiB |     197 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  9.0% |  3.34 GiB |     177 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  5.5% |  2.03 GiB |     118 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  4.2% |  1.56 GiB |      36 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  4.1% |  1.53 GiB |      92 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  4.1% |  1.53 GiB |      39 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  3.0% |  1.12 GiB |      86 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  3.0% |  1.11 GiB |      53 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  2.6% | 1,000 MiB |      32 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  2.6% |   974 MiB |      43 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  2.5% |   958 MiB |      52 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  2.1% |   790 MiB |       7 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  1.9% |   717 MiB |      27 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  1.8% |   704 MiB |      19 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.8% |   670 MiB |      33 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                   |
|  1.6% |   620 MiB |      41 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.4% |   544 MiB |      13 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                 |
|  1.4% |   539 MiB |      26 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.4% |   521 MiB |      25 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.3% |   496 MiB |      30 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) |

# Retained heap profile

Retained 2.62 MiB over 9 objects (298 KiB per object).

| Category         |      % |     Size | Objects |
| ---------------- | -----: | -------: | ------: |
| Standard library | 100.0% | 2.62 MiB |       8 |
| Ours             |  <0.1% |     40 B |       1 |

## Hottest functions

### Self size

Functions with the most bytes retained within the function body, excluding callees.

|     % |     Size | Objects | Function                            | Location                                    |
| ----: | -------: | ------: | ----------------------------------- | ------------------------------------------- |
| 78.7% | 2.06 MiB |       1 | `copyOf(Object[], int)`             | `java.util.Arrays`                          |
| 11.7% |  314 KiB |       2 | `initCEN(int, ZipCoder)`            | `java.util.zip.ZipFile$Source`              |
|  9.6% |  256 KiB |       1 | `initTable()`                       | `java.util.concurrent.ConcurrentHashMap`    |
| <0.1% |    128 B |       1 | `copyOfRangeByte(byte[], int, int)` | `java.util.Arrays`                          |
| <0.1% |     48 B |       2 | `valueOf(double)`                   | `java.lang.Double`                          |
| <0.1% |     40 B |       1 | `lambda$generateData$4(int)`        | `org.renaissance.jdk.concurrent.JavaKMeans` |
| <0.1% |     24 B |       1 | `toString()`                        | `java.lang.StringBuilder`                   |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Standard library

|     % |     Size | Objects | Function                            | Location                                 |
| ----: | -------: | ------: | ----------------------------------- | ---------------------------------------- |
| 78.7% | 2.06 MiB |       1 | `copyOf(Object[], int)`             | `java.util.Arrays`                       |
| 11.7% |  314 KiB |       2 | `initCEN(int, ZipCoder)`            | `java.util.zip.ZipFile$Source`           |
|  9.6% |  256 KiB |       1 | `initTable()`                       | `java.util.concurrent.ConcurrentHashMap` |
| <0.1% |    128 B |       1 | `copyOfRangeByte(byte[], int, int)` | `java.util.Arrays`                       |
| <0.1% |     48 B |       2 | `valueOf(double)`                   | `java.lang.Double`                       |
| <0.1% |     24 B |       1 | `toString()`                        | `java.lang.StringBuilder`                |

#### Lines

Lines with the largest contribution to each function's self size.

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|      % |     Size | Objects | Location                |
| -----: | -------: | ------: | ----------------------- |
| 100.0% | 2.06 MiB |       1 | `java.util.Arrays:3482` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|      % |    Size | Objects | Location                            |
| -----: | ------: | ------: | ----------------------------------- |
| 100.0% | 314 KiB |       2 | `java.util.zip.ZipFile$Source:1733` |

##### `initTable()` (`java.util.concurrent.ConcurrentHashMap`)

|      % |    Size | Objects | Location                                      |
| -----: | ------: | ------: | --------------------------------------------- |
| 100.0% | 256 KiB |       1 | `java.util.concurrent.ConcurrentHashMap:2301` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

|      % |  Size | Objects | Location                |
| -----: | ----: | ------: | ----------------------- |
| 100.0% | 128 B |       1 | `java.util.Arrays:3863` |

##### `valueOf(double)` (`java.lang.Double`)

|      % | Size | Objects | Location               |
| -----: | ---: | ------: | ---------------------- |
| 100.0% | 48 B |       2 | `java.lang.Double:773` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Size | Objects | Location                                       |
| -----: | ---: | ------: | ---------------------------------------------- |
| 100.0% | 40 B |       1 | `org.renaissance.jdk.concurrent.JavaKMeans:87` |

##### `toString()` (`java.lang.StringBuilder`)

|      % | Size | Objects | Location                      |
| -----: | ---: | ------: | ----------------------------- |
| 100.0% | 24 B |       1 | `java.lang.StringBuilder:475` |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|      % |     Size | Objects | Caller      | Location              |
| -----: | -------: | ------: | ----------- | --------------------- |
| 100.0% | 2.06 MiB |       1 | `grow(int)` | `java.util.ArrayList` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|      % |    Size | Objects | Caller                                          | Location                       |
| -----: | ------: | ------: | ----------------------------------------------- | ------------------------------ |
| 100.0% | 314 KiB |       2 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `initTable()` (`java.util.concurrent.ConcurrentHashMap`)

|      % |    Size | Objects | Caller                            | Location                                 |
| -----: | ------: | ------: | --------------------------------- | ---------------------------------------- |
| 100.0% | 256 KiB |       1 | `putVal(Object, Object, boolean)` | `java.util.concurrent.ConcurrentHashMap` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

|      % |  Size | Objects | Caller                          | Location           |
| -----: | ----: | ------: | ------------------------------- | ------------------ |
| 100.0% | 128 B |       1 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `valueOf(double)` (`java.lang.Double`)

|      % | Size | Objects | Caller                                           | Location                                    |
| -----: | ---: | ------: | ------------------------------------------------ | ------------------------------------------- |
| 100.0% | 48 B |       2 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Size | Objects | Caller       | Location                                                               |
| -----: | ---: | ------: | ------------ | ---------------------------------------------------------------------- |
| 100.0% | 40 B |       1 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121d960` |

##### `toString()` (`java.lang.StringBuilder`)

|      % | Size | Objects | Caller                                       | Location                                    |
| -----: | ---: | ------: | -------------------------------------------- | ------------------------------------------- |
| 100.0% | 24 B |       1 | `lookupPregenerated(LambdaForm, MethodType)` | `java.lang.invoke.InvokerBytecodeGenerator` |

### Total size

Functions with the most bytes retained within the function and its callees.

|     % |     Size | Objects | Function                                                                                                               | Location                                                               |
| ----: | -------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 90.4% | 2.37 MiB |       8 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
| 90.4% | 2.37 MiB |       8 | `invokeStatic(Object, Object)`                                                                                         | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`                   |
| 90.4% | 2.37 MiB |       8 | `invoke(Object, Object, Object)`                                                                                       | `java.lang.invoke.LambdaForm$MH.0x0000007001082400`                    |
| 90.4% | 2.37 MiB |       8 | `invokeExact_MT(Object, Object, Object, Object)`                                                                       | `java.lang.invoke.Invokers$Holder`                                     |
| 90.4% | 2.37 MiB |       8 | `invokeImpl(Object, Object[])`                                                                                         | `jdk.internal.reflect.DirectMethodHandleAccessor`                      |
| 90.4% | 2.37 MiB |       8 | `invoke(Object, Object[])`                                                                                             | `jdk.internal.reflect.DirectMethodHandleAccessor`                      |
| 90.4% | 2.37 MiB |       8 | `invoke(Object, Object[])`                                                                                             | `java.lang.reflect.Method`                                             |
| 90.4% | 2.37 MiB |       8 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
| 90.4% | 2.37 MiB |       8 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
| 90.4% | 2.37 MiB |       8 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
| 88.3% | 2.31 MiB |       7 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
| 88.3% | 2.31 MiB |       7 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
| 88.2% | 2.31 MiB |       6 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
| 88.2% | 2.31 MiB |       6 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8` |
| 88.2% | 2.31 MiB |       6 | `apply(Object)`                                                                                                        | `scala.runtime.function.JProcedure1`                                   |
| 88.2% | 2.31 MiB |       6 | `foreach(Function1)`                                                                                                   | `scala.collection.immutable.List`                                      |
| 78.7% | 2.06 MiB |       5 | `copyInto(Sink, Spliterator)`                                                                                          | `java.util.stream.AbstractPipeline`                                    |
| 78.7% | 2.06 MiB |       5 | `wrapAndCopyInto(Sink, Spliterator)`                                                                                   | `java.util.stream.AbstractPipeline`                                    |
| 78.7% | 2.06 MiB |       5 | `evaluateSequential(PipelineHelper, Spliterator)`                                                                      | `java.util.stream.ReduceOps$ReduceOp`                                  |
| 78.7% | 2.06 MiB |       5 | `evaluate(TerminalOp)`                                                                                                 | `java.util.stream.AbstractPipeline`                                    |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Standard library

|     % |     Size | Objects | Function                                          | Location                                             |
| ----: | -------: | ------: | ------------------------------------------------- | ---------------------------------------------------- |
| 90.4% | 2.37 MiB |       8 | `invokeStatic(Object, Object)`                    | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00` |
| 90.4% | 2.37 MiB |       8 | `invoke(Object, Object, Object)`                  | `java.lang.invoke.LambdaForm$MH.0x0000007001082400`  |
| 90.4% | 2.37 MiB |       8 | `invokeExact_MT(Object, Object, Object, Object)`  | `java.lang.invoke.Invokers$Holder`                   |
| 90.4% | 2.37 MiB |       8 | `invokeImpl(Object, Object[])`                    | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
| 90.4% | 2.37 MiB |       8 | `invoke(Object, Object[])`                        | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
| 90.4% | 2.37 MiB |       8 | `invoke(Object, Object[])`                        | `java.lang.reflect.Method`                           |
| 88.2% | 2.31 MiB |       6 | `apply(Object)`                                   | `scala.runtime.function.JProcedure1`                 |
| 88.2% | 2.31 MiB |       6 | `foreach(Function1)`                              | `scala.collection.immutable.List`                    |
| 78.7% | 2.06 MiB |       5 | `copyInto(Sink, Spliterator)`                     | `java.util.stream.AbstractPipeline`                  |
| 78.7% | 2.06 MiB |       5 | `wrapAndCopyInto(Sink, Spliterator)`              | `java.util.stream.AbstractPipeline`                  |
| 78.7% | 2.06 MiB |       5 | `evaluateSequential(PipelineHelper, Spliterator)` | `java.util.stream.ReduceOps$ReduceOp`                |
| 78.7% | 2.06 MiB |       5 | `evaluate(TerminalOp)`                            | `java.util.stream.AbstractPipeline`                  |
| 78.7% | 2.06 MiB |       5 | `collect(Collector)`                              | `java.util.stream.ReferencePipeline`                 |
| 78.7% | 2.06 MiB |       4 | `accept(int)`                                     | `java.util.stream.IntPipeline$1$1`                   |
| 78.7% | 2.06 MiB |       4 | `forEachRemaining(IntConsumer)`                   | `java.util.stream.Streams$RangeIntSpliterator`       |
| 78.7% | 2.06 MiB |       4 | `forEachRemaining(Consumer)`                      | `java.util.Spliterator$OfInt`                        |
| 78.7% | 2.06 MiB |       1 | `copyOf(Object[], int)`                           | `java.util.Arrays`                                   |
| 78.7% | 2.06 MiB |       1 | `grow(int)`                                       | `java.util.ArrayList`                                |
| 78.7% | 2.06 MiB |       1 | `grow()`                                          | `java.util.ArrayList`                                |
| 78.7% | 2.06 MiB |       1 | `add(Object, Object[], int)`                      | `java.util.ArrayList`                                |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|      % |     Size | Objects | Caller                         | Location                                             |
| -----: | -------: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% | 2.37 MiB |       8 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`)

|      % |     Size | Objects | Caller                           | Location                                            |
| -----: | -------: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% | 2.37 MiB |       8 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001082400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001082400`)

|      % |     Size | Objects | Caller                                           | Location                           |
| -----: | -------: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% | 2.37 MiB |       8 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % |     Size | Objects | Caller                         | Location                                          |
| -----: | -------: | ------: | ------------------------------ | ------------------------------------------------- |
| 100.0% | 2.37 MiB |       8 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |     Size | Objects | Caller                     | Location                                          |
| -----: | -------: | ------: | -------------------------- | ------------------------------------------------- |
| 100.0% | 2.37 MiB |       8 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |     Size | Objects | Caller                     | Location                   |
| -----: | -------: | ------: | -------------------------- | -------------------------- |
| 100.0% | 2.37 MiB |       8 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % |     Size | Objects | Caller                                                      | Location                        |
| -----: | -------: | ------: | ----------------------------------------------------------- | ------------------------------- |
| 100.0% | 2.37 MiB |       8 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|      % |     Size | Objects | Caller                                 | Location                        |
| -----: | -------: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 2.37 MiB |       8 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|      % |     Size | Objects | Caller           | Location                        |
| -----: | -------: | ------: | ---------------- | ------------------------------- |
| 100.0% | 2.37 MiB |       8 | `main(String[])` | `org.renaissance.core.Launcher` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |     Size | Objects | Caller           | Location                                    |
| -----: | -------: | ------: | ---------------- | ------------------------------------------- |
| 100.0% | 2.31 MiB |       7 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |     Size | Objects | Caller           | Location                                   |
| -----: | -------: | ------: | ---------------- | ------------------------------------------ |
| 100.0% | 2.31 MiB |       7 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |     Size | Objects | Caller              | Location                                                               |
| -----: | -------: | ------: | ------------------- | ---------------------------------------------------------------------- |
| 100.0% | 2.31 MiB |       6 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8`)

|      % |     Size | Objects | Caller          | Location                             |
| -----: | -------: | ------: | --------------- | ------------------------------------ |
| 100.0% | 2.31 MiB |       6 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

|      % |     Size | Objects | Caller               | Location                             |
| -----: | -------: | ------: | -------------------- | ------------------------------------ |
| 100.0% | 2.31 MiB |       6 | `apply(Object)`      | `scala.runtime.function.JProcedure1` |
| 100.0% | 2.31 MiB |       6 | `foreach(Function1)` | `scala.collection.immutable.List`    |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

|      % |     Size | Objects | Caller                                                                        | Location                                    |
| -----: | -------: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 2.31 MiB |       6 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

|      % |     Size | Objects | Caller                               | Location                            |
| -----: | -------: | ------: | ------------------------------------ | ----------------------------------- |
| 100.0% | 2.06 MiB |       5 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `wrapAndCopyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

|      % |     Size | Objects | Caller                                            | Location                              |
| -----: | -------: | ------: | ------------------------------------------------- | ------------------------------------- |
| 100.0% | 2.06 MiB |       5 | `evaluateSequential(PipelineHelper, Spliterator)` | `java.util.stream.ReduceOps$ReduceOp` |
|  <0.1% |     48 B |       2 | `evaluate(Spliterator, boolean, IntFunction)`     | `java.util.stream.AbstractPipeline`   |

##### `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`)

|      % |     Size | Objects | Caller                 | Location                            |
| -----: | -------: | ------: | ---------------------- | ----------------------------------- |
| 100.0% | 2.06 MiB |       5 | `evaluate(TerminalOp)` | `java.util.stream.AbstractPipeline` |

##### `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`)

|      % |     Size | Objects | Caller               | Location                             |
| -----: | -------: | ------: | -------------------- | ------------------------------------ |
| 100.0% | 2.06 MiB |       5 | `collect(Collector)` | `java.util.stream.ReferencePipeline` |

##### `collect(Collector)` (`java.util.stream.ReferencePipeline`)

|      % |     Size | Objects | Caller                        | Location                                                           |
| -----: | -------: | ------: | ----------------------------- | ------------------------------------------------------------------ |
| 100.0% | 2.06 MiB |       4 | `generateData(int, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                        |
|  <0.1% |     24 B |       1 | `toCsvRows(Function)`         | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |

##### `accept(int)` (`java.util.stream.IntPipeline$1$1`)

|      % |     Size | Objects | Caller                          | Location                                       |
| -----: | -------: | ------: | ------------------------------- | ---------------------------------------------- |
| 100.0% | 2.06 MiB |       4 | `forEachRemaining(IntConsumer)` | `java.util.stream.Streams$RangeIntSpliterator` |

##### `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`)

|      % |     Size | Objects | Caller                       | Location                      |
| -----: | -------: | ------: | ---------------------------- | ----------------------------- |
| 100.0% | 2.06 MiB |       4 | `forEachRemaining(Consumer)` | `java.util.Spliterator$OfInt` |

##### `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`)

|      % |     Size | Objects | Caller                        | Location                            |
| -----: | -------: | ------: | ----------------------------- | ----------------------------------- |
| 100.0% | 2.06 MiB |       4 | `copyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|      % |     Size | Objects | Caller      | Location              |
| -----: | -------: | ------: | ----------- | --------------------- |
| 100.0% | 2.06 MiB |       1 | `grow(int)` | `java.util.ArrayList` |

##### `grow(int)` (`java.util.ArrayList`)

|      % |     Size | Objects | Caller   | Location              |
| -----: | -------: | ------: | -------- | --------------------- |
| 100.0% | 2.06 MiB |       1 | `grow()` | `java.util.ArrayList` |

##### `grow()` (`java.util.ArrayList`)

|      % |     Size | Objects | Caller                       | Location              |
| -----: | -------: | ------: | ---------------------------- | --------------------- |
| 100.0% | 2.06 MiB |       1 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|      % |     Size | Objects | Caller        | Location              |
| -----: | -------: | ------: | ------------- | --------------------- |
| 100.0% | 2.06 MiB |       1 | `add(Object)` | `java.util.ArrayList` |

#### Callees

Callees with the largest contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|     % |     Size | Objects | Callee              | Location                                    |
| ----: | -------: | ------: | ------------------- | ------------------------------------------- |
| 97.6% | 2.31 MiB |       7 | `main(String[])`    | `org.renaissance.harness.RenaissanceSuite$` |
|  2.4% | 58.8 KiB |       1 | `loadClass(String)` | `java.lang.ClassLoader`                     |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`)

|      % |     Size | Objects | Callee           | Location                                   |
| -----: | -------: | ------: | ---------------- | ------------------------------------------ |
| 100.0% | 2.37 MiB |       8 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001082400`)

|      % |     Size | Objects | Callee                         | Location                                             |
| -----: | -------: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% | 2.37 MiB |       8 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % |     Size | Objects | Callee                           | Location                                            |
| -----: | -------: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% | 2.37 MiB |       8 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001082400` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |     Size | Objects | Callee                                           | Location                           |
| -----: | -------: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% | 2.37 MiB |       8 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |     Size | Objects | Callee                         | Location                                          |
| -----: | -------: | ------: | ------------------------------ | ------------------------------------------------- |
| 100.0% | 2.37 MiB |       8 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % |     Size | Objects | Callee                     | Location                                          |
| -----: | -------: | ------: | -------------------------- | ------------------------------------------------- |
| 100.0% | 2.37 MiB |       8 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|      % |     Size | Objects | Callee                     | Location                   |
| -----: | -------: | ------: | -------------------------- | -------------------------- |
| 100.0% | 2.37 MiB |       8 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|      % |     Size | Objects | Callee                                                      | Location                        |
| -----: | -------: | ------: | ----------------------------------------------------------- | ------------------------------- |
| 100.0% | 2.37 MiB |       8 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.core.Launcher`)

|      % |     Size | Objects | Callee                                 | Location                        |
| -----: | -------: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 2.37 MiB |       8 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |     Size | Objects | Callee                                                           | Location                               |
| -----: | -------: | ------: | ---------------------------------------------------------------- | -------------------------------------- |
| 100.0% | 2.31 MiB |       6 | `foreach(Function1)`                                             | `scala.collection.immutable.List`      |
|  <0.1% |    128 B |       1 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |     Size | Objects | Callee                                                                        | Location                                    |
| -----: | -------: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 2.31 MiB |       7 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|     % |     Size | Objects | Callee                                                                                       | Location                                  |
| ----: | -------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
| 89.2% | 2.06 MiB |       5 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
| 10.8% |  255 KiB |       1 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8`)

|      % |     Size | Objects | Callee                                                                                                                 | Location                                    |
| -----: | -------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 2.31 MiB |       6 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

|      % |     Size | Objects | Callee              | Location                                                               |
| -----: | -------: | ------: | ------------------- | ---------------------------------------------------------------------- |
| 100.0% | 2.31 MiB |       6 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8` |
| 100.0% | 2.31 MiB |       6 | `apply(Object)`     | `scala.runtime.function.JProcedure1`                                   |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

|      % |     Size | Objects | Callee          | Location                             |
| -----: | -------: | ------: | --------------- | ------------------------------------ |
| 100.0% | 2.31 MiB |       6 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

|      % |     Size | Objects | Callee                       | Location                                  |
| -----: | -------: | ------: | ---------------------------- | ----------------------------------------- |
| 100.0% | 2.06 MiB |       4 | `forEachRemaining(Consumer)` | `java.util.Spliterator$OfInt`             |
|  <0.1% |     24 B |       1 | `forEachRemaining(Consumer)` | `java.util.Spliterators$ArraySpliterator` |

##### `wrapAndCopyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

|      % |     Size | Objects | Callee                        | Location                            |
| -----: | -------: | ------: | ----------------------------- | ----------------------------------- |
| 100.0% | 2.06 MiB |       5 | `copyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`)

|      % |     Size | Objects | Callee                               | Location                            |
| -----: | -------: | ------: | ------------------------------------ | ----------------------------------- |
| 100.0% | 2.06 MiB |       5 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`)

|      % |     Size | Objects | Callee                                            | Location                              |
| -----: | -------: | ------: | ------------------------------------------------- | ------------------------------------- |
| 100.0% | 2.06 MiB |       5 | `evaluateSequential(PipelineHelper, Spliterator)` | `java.util.stream.ReduceOps$ReduceOp` |

##### `collect(Collector)` (`java.util.stream.ReferencePipeline`)

|      % |     Size | Objects | Callee                 | Location                            |
| -----: | -------: | ------: | ---------------------- | ----------------------------------- |
| 100.0% | 2.06 MiB |       5 | `evaluate(TerminalOp)` | `java.util.stream.AbstractPipeline` |

##### `accept(int)` (`java.util.stream.IntPipeline$1$1`)

|      % |     Size | Objects | Callee           | Location                                                               |
| -----: | -------: | ------: | ---------------- | ---------------------------------------------------------------------- |
| 100.0% | 2.06 MiB |       1 | `accept(Object)` | `java.util.stream.ReduceOps$3ReducingSink`                             |
|  <0.1% |     88 B |       3 | `apply(int)`     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121d4f0` |
|  <0.1% |     48 B |       2 | `apply(int)`     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121d728` |

##### `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`)

|      % |     Size | Objects | Callee        | Location                           |
| -----: | -------: | ------: | ------------- | ---------------------------------- |
| 100.0% | 2.06 MiB |       4 | `accept(int)` | `java.util.stream.IntPipeline$1$1` |

##### `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`)

|      % |     Size | Objects | Callee                          | Location                                       |
| -----: | -------: | ------: | ------------------------------- | ---------------------------------------------- |
| 100.0% | 2.06 MiB |       4 | `forEachRemaining(IntConsumer)` | `java.util.stream.Streams$RangeIntSpliterator` |

##### `grow(int)` (`java.util.ArrayList`)

|      % |     Size | Objects | Callee                  | Location           |
| -----: | -------: | ------: | ----------------------- | ------------------ |
| 100.0% | 2.06 MiB |       1 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `grow()` (`java.util.ArrayList`)

|      % |     Size | Objects | Callee      | Location              |
| -----: | -------: | ------: | ----------- | --------------------- |
| 100.0% | 2.06 MiB |       1 | `grow(int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|      % |     Size | Objects | Callee   | Location              |
| -----: | -------: | ------: | -------- | --------------------- |
| 100.0% | 2.06 MiB |       1 | `grow()` | `java.util.ArrayList` |

## Hottest call stacks

Call stacks with the most bytes retained in their leaf frame.

|     % |     Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 78.7% | 2.06 MiB |       1 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `accept(Object, Object)` (`java.util.stream.Collectors$$Lambda.0x00000070010c4338`) ← `accept(Object)` (`java.util.stream.ReduceOps$3ReducingSink`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  9.6% |  256 KiB |       1 | `initTable()` (`java.util.concurrent.ConcurrentHashMap`) ← `putVal(Object, Object, boolean)` ← `put(Object, Object)` ← `storeString(String)` (`jdk.jfr.internal.StringPool`) ← `addString(String)` ← `putString(String)` (`jdk.jfr.internal.event.EventWriter`) ← `commit(long, long, long, String, String, boolean, long, long, long, long, long)` (`jdk.jfr.events.ActiveRecordingEvent`) ← `writeMetaEvents()` (`jdk.jfr.internal.PlatformRecorder`) ← `start(PlatformRecording)` ← `start()` (`jdk.jfr.internal.PlatformRecording`) ← `start()` (`jdk.jfr.Recording`) ← `execute(ArgumentParser)` (`jdk.jfr.internal.dcmd.DCmdStart`) ← `execute(String, String, char)` (`jdk.jfr.internal.dcmd.AbstractDCmd`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  9.5% |  255 KiB |       1 | `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`) ← `<init>(ZipFile$Source$Key, boolean, ZipCoder)` ← `get(File, boolean, ZipCoder)` ← `<init>(ZipFile, ZipCoder, File, int)` (`java.util.zip.ZipFile$CleanableResource`) ← `<init>(File, int, Charset)` (`java.util.zip.ZipFile`) ← `<init>(File, int)` ← `<init>(File, boolean, int, Runtime$Version)` (`java.util.jar.JarFile`) ← `getJarFile(URL)` (`jdk.internal.loader.URLClassPath$JarLoader`) ← `run()` (`jdk.internal.loader.URLClassPath$JarLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `ensureOpen()` (`jdk.internal.loader.URLClassPath$JarLoader`) ← `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)` ← `run()` (`jdk.internal.loader.URLClassPath$3`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `getLoader(URL)` (`jdk.internal.loader.URLClassPath`) ← `getLoader(int)` ← `getResource(String, boolean)` ← `run()` (`java.net.URLClassLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `findClass(String)` (`java.net.URLClassLoader`) ← `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `getDeclaredConstructors0(boolean)` (`java.lang.Class`) ← `privateGetDeclaredConstructors(boolean)` ← `getConstructor0(Class[], int)` ← `getDeclaredConstructor(Class[])` ← `createBenchmark(BenchmarkDescriptor)` (`org.renaissance.core.BenchmarkSuite`) ← `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  2.2% | 58.8 KiB |       1 | `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`) ← `<init>(ZipFile$Source$Key, boolean, ZipCoder)` ← `get(File, boolean, ZipCoder)` ← `<init>(ZipFile, ZipCoder, File, int)` (`java.util.zip.ZipFile$CleanableResource`) ← `<init>(File, int, Charset)` (`java.util.zip.ZipFile`) ← `<init>(File, int)` ← `<init>(File, boolean, int, Runtime$Version)` (`java.util.jar.JarFile`) ← `getJarFile(URL)` (`jdk.internal.loader.URLClassPath$JarLoader`) ← `run()` (`jdk.internal.loader.URLClassPath$JarLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `ensureOpen()` (`jdk.internal.loader.URLClassPath$JarLoader`) ← `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)` ← `run()` (`jdk.internal.loader.URLClassPath$3`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `getLoader(URL)` (`jdk.internal.loader.URLClassPath`) ← `getLoader(int)` ← `getResource(String, boolean)` ← `run()` (`java.net.URLClassLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `findClass(String)` (`java.net.URLClassLoader`) ← `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| <0.1% |    128 B |       1 | `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`) ← `copyOfRange(byte[], int, int)` ← `<init>(AbstractStringBuilder, Void)` (`java.lang.String`) ← `<init>(StringBuilder)` ← `toString()` (`java.lang.StringBuilder`) ← `unparseMethod(Class, Class[])` (`sun.invoke.util.BytecodeDescriptor`) ← `toMethodDescriptorString()` (`java.lang.invoke.MethodType`) ← `methodPrologue()` (`java.lang.invoke.InvokerBytecodeGenerator`) ← `addMethod()` ← `generateCustomizedCodeBytes()` ← `generateCustomizedCode(LambdaForm, MethodType)` ← `compileToBytecode()` (`java.lang.invoke.LambdaForm`) ← `callSiteForm(MethodType, boolean)` (`java.lang.invoke.Invokers`) ← `linkToTargetMethod(MethodType)` ← `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`) ← `linkCallSite(Object, Object, Object, Object, Object, Object[])` ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| <0.1% |     48 B |       2 | `valueOf(double)` (`java.lang.Double`) ← `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121d728`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluate(Spliterator, boolean, IntFunction)` ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121d4f0`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| <0.1% |     40 B |       1 | `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121d960`) ← `<init>(long, IntFunction)` (`java.util.stream.Nodes$ArrayNode`) ← `<init>(long, IntFunction)` (`java.util.stream.Nodes$FixedNodeBuilder`) ← `builder(long, IntFunction)` (`java.util.stream.Nodes`) ← `makeNodeBuilder(long, IntFunction)` (`java.util.stream.ReferencePipeline`) ← `evaluate(Spliterator, boolean, IntFunction)` (`java.util.stream.AbstractPipeline`) ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121d4f0`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| <0.1% |     24 B |       1 | `toString()` (`java.lang.StringBuilder`) ← `lookupPregenerated(LambdaForm, MethodType)` (`java.lang.invoke.InvokerBytecodeGenerator`) ← `generateCustomizedCode(LambdaForm, MethodType)` ← `compileToBytecode()` (`java.lang.invoke.LambdaForm`) ← `prepare()` ← `<init>(MethodType, LambdaForm)` (`java.lang.invoke.MethodHandle`) ← `<init>(MethodType, LambdaForm)` (`java.lang.invoke.BoundMethodHandle`) ← `<init>(MethodType, LambdaForm, Object)` (`java.lang.invoke.BoundMethodHandle$Species_L`) ← `make(MethodType, LambdaForm, Object)` ← `makeReinvoker(MethodHandle)` (`java.lang.invoke.BoundMethodHandle`) ← `rebind()` (`java.lang.invoke.DirectMethodHandle`) ← `prepender(Class)` (`java.lang.invoke.StringConcatFactory`) ← `prepender(String, Class)` ← `prepender(int, String[], Class[], int)` ← `filterInPrependers(MethodHandle, String[], Class[])` ← `generateMHInlineCopy(MethodType, String[])` ← `makeConcatWithConstants(MethodHandles$Lookup, String, MethodType, String, Object[])` ← `invokeStatic(Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`) ← `delegate(Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.DelegatingMethodHandle$Holder`) ← `invokeExact_MT(Object, Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invoke(Class, MethodHandle, String, Object, Object, Class)` (`java.lang.invoke.BootstrapMethodInvoker`) ← `makeSite(MethodHandle, String, MethodType, Object, Class)` (`java.lang.invoke.CallSite`) ← `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`) ← `linkCallSite(Object, Object, Object, Object, Object, Object[])` ← `rowToArray$1$$anonfun$1(Map, int)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `apply$mcDI$sp(int)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011f6680`) ← `apply(Object)` (`scala.runtime.java8.JFunction1$mcDI$sp`) ← `map(Function1)` (`scala.collection.immutable.Range`) ← `rowToArray$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `setUpBeforeAll$$anonfun$1(Map)` ← `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011a2908`) ← `lambda$toCsvRows$2(String[], Function, String)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`) ← `apply(Object)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x000000700119b5c8`) ← `accept(Object)` (`java.util.stream.ReferencePipeline$3$1`) ← `forEachRemaining(Consumer)` (`java.util.Spliterators$ArraySpliterator`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `toCsvRows(Function)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])` |

# Lock contention profile

Blocked 7.64s over 80 contentions (95.6ms per contention).

| Category         |      % |  Time | Contentions |
| ---------------- | -----: | ----: | ----------: |
| Standard library | 100.0% | 7.64s |          80 |

## Hottest functions

### Self time

Functions with the most time blocked within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|      % |  Time | Contentions | Function              | Location                   |
| -----: | ----: | ----------: | --------------------- | -------------------------- |
| 100.0% | 7.64s |          80 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|     % |    Time | Contentions | Caller            | Location                                 |
| ----: | ------: | ----------: | ----------------- | ---------------------------------------- |
| 95.5% |   7.30s |          69 | `park()`          | `java.util.concurrent.locks.LockSupport` |
|  4.5% | 342.7ms |          11 | `parkUntil(long)` | `java.util.concurrent.locks.LockSupport` |

### Total time

Functions with the most time blocked within the function and its callees.

|      % |  Time | Contentions | Function                                                                                                               | Location                                                               |
| -----: | ----: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 100.0% | 7.64s |          80 | `park(boolean, long)`                                                                                                  | `jdk.internal.misc.Unsafe`                                             |
|  95.5% | 7.30s |          69 | `park()`                                                                                                               | `java.util.concurrent.locks.LockSupport`                               |
|  77.6% | 5.93s |          17 | `awaitDone(int, long)`                                                                                                 | `java.util.concurrent.ForkJoinTask`                                    |
|  77.4% | 5.92s |          16 | `get()`                                                                                                                | `java.util.concurrent.ForkJoinTask`                                    |
|  77.4% | 5.92s |          16 | `run(int, List, int)`                                                                                                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  77.4% | 5.92s |          16 | `$anonfun$2(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  77.4% | 5.92s |          16 | `$anonfun$adapted$1(Object)`                                                                                           | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  77.4% | 5.92s |          16 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000700121db90`   |
|  77.4% | 5.92s |          16 | `map(Function1)`                                                                                                       | `scala.collection.immutable.Range`                                     |
|  77.4% | 5.92s |          16 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  77.4% | 5.92s |          16 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |
|  77.4% | 5.92s |          16 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|  77.4% | 5.92s |          16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  77.4% | 5.92s |          16 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8` |
|  77.4% | 5.92s |          16 | `apply(Object)`                                                                                                        | `scala.runtime.function.JProcedure1`                                   |
|  77.4% | 5.92s |          16 | `foreach(Function1)`                                                                                                   | `scala.collection.immutable.List`                                      |
|  77.4% | 5.92s |          16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
|  77.4% | 5.92s |          16 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|  77.4% | 5.92s |          16 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|  77.4% | 5.92s |          16 | `invokeStatic(Object, Object)`                                                                                         | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`                   |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|      % |    Time | Contentions | Function                                         | Location                                             |
| -----: | ------: | ----------: | ------------------------------------------------ | ---------------------------------------------------- |
| 100.0% |   7.64s |          80 | `park(boolean, long)`                            | `jdk.internal.misc.Unsafe`                           |
|  95.5% |   7.30s |          69 | `park()`                                         | `java.util.concurrent.locks.LockSupport`             |
|  77.6% |   5.93s |          17 | `awaitDone(int, long)`                           | `java.util.concurrent.ForkJoinTask`                  |
|  77.4% |   5.92s |          16 | `get()`                                          | `java.util.concurrent.ForkJoinTask`                  |
|  77.4% |   5.92s |          16 | `map(Function1)`                                 | `scala.collection.immutable.Range`                   |
|  77.4% |   5.92s |          16 | `apply(Object)`                                  | `scala.runtime.function.JProcedure1`                 |
|  77.4% |   5.92s |          16 | `foreach(Function1)`                             | `scala.collection.immutable.List`                    |
|  77.4% |   5.92s |          16 | `invokeStatic(Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00` |
|  77.4% |   5.92s |          16 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001082400`  |
|  77.4% |   5.92s |          16 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                   |
|  77.4% |   5.92s |          16 | `invokeImpl(Object, Object[])`                   | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  77.4% |   5.92s |          16 | `invoke(Object, Object[])`                       | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  77.4% |   5.92s |          16 | `invoke(Object, Object[])`                       | `java.lang.reflect.Method`                           |
|  22.6% |   1.72s |          64 | `runWorker(ForkJoinPool$WorkQueue)`              | `java.util.concurrent.ForkJoinPool`                  |
|  22.6% |   1.72s |          64 | `run()`                                          | `java.util.concurrent.ForkJoinWorkerThread`          |
|  22.4% |   1.70s |          63 | `awaitWork(ForkJoinPool$WorkQueue)`              | `java.util.concurrent.ForkJoinPool`                  |
|   4.5% | 342.7ms |          11 | `parkUntil(long)`                                | `java.util.concurrent.locks.LockSupport`             |
|   0.2% |  15.3ms |           1 | `join()`                                         | `java.util.concurrent.ForkJoinTask`                  |
|   0.2% |  15.3ms |           1 | `exec()`                                         | `java.util.concurrent.RecursiveTask`                 |
|   0.2% |  15.3ms |           1 | `doExec()`                                       | `java.util.concurrent.ForkJoinTask`                  |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|     % |    Time | Contentions | Caller            | Location                                 |
| ----: | ------: | ----------: | ----------------- | ---------------------------------------- |
| 95.5% |   7.30s |          69 | `park()`          | `java.util.concurrent.locks.LockSupport` |
|  4.5% | 342.7ms |          11 | `parkUntil(long)` | `java.util.concurrent.locks.LockSupport` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

|     % |  Time | Contentions | Caller                              | Location                            |
| ----: | ----: | ----------: | ----------------------------------- | ----------------------------------- |
| 81.3% | 5.93s |          17 | `awaitDone(int, long)`              | `java.util.concurrent.ForkJoinTask` |
| 18.7% | 1.36s |          52 | `awaitWork(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|     % |   Time | Contentions | Caller   | Location                            |
| ----: | -----: | ----------: | -------- | ----------------------------------- |
| 99.7% |  5.92s |          16 | `get()`  | `java.util.concurrent.ForkJoinTask` |
|  0.3% | 15.3ms |           1 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `get()` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Caller                | Location                                    |
| -----: | ----: | ----------: | --------------------- | ------------------------------------------- |
| 100.0% | 5.92s |          16 | `run(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |  Time | Contentions | Caller            | Location                                  |
| -----: | ----: | ----------: | ----------------- | ----------------------------------------- |
| 100.0% | 5.92s |          16 | `$anonfun$2(int)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `$anonfun$2(int)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|      % |  Time | Contentions | Caller                       | Location                                  |
| -----: | ----: | ----------: | ---------------------------- | ----------------------------------------- |
| 100.0% | 5.92s |          16 | `$anonfun$adapted$1(Object)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `$anonfun$adapted$1(Object)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|      % |  Time | Contentions | Caller          | Location                                                             |
| -----: | ----: | ----------: | --------------- | -------------------------------------------------------------------- |
| 100.0% | 5.92s |          16 | `apply(Object)` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000700121db90` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000700121db90`)

|      % |  Time | Contentions | Caller           | Location                           |
| -----: | ----: | ----------: | ---------------- | ---------------------------------- |
| 100.0% | 5.92s |          16 | `map(Function1)` | `scala.collection.immutable.Range` |

##### `map(Function1)` (`scala.collection.immutable.Range`)

|      % |  Time | Contentions | Caller                  | Location                                  |
| -----: | ----: | ----------: | ----------------------- | ----------------------------------------- |
| 100.0% | 5.92s |          16 | `run(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|      % |  Time | Contentions | Caller                  | Location                                  |
| -----: | ----: | ----------: | ----------------------- | ----------------------------------------- |
| 100.0% | 5.92s |          16 | `executeOperation(int)` | `org.renaissance.harness.ExecutionDriver` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

|      % |  Time | Contentions | Caller               | Location                                  |
| -----: | ----: | ----------: | -------------------- | ----------------------------------------- |
| 100.0% | 5.92s |          16 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

|      % |  Time | Contentions | Caller                                                                                                                 | Location                                    |
| -----: | ----: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 5.92s |          16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |  Time | Contentions | Caller              | Location                                                               |
| -----: | ----: | ----------: | ------------------- | ---------------------------------------------------------------------- |
| 100.0% | 5.92s |          16 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8`)

|      % |  Time | Contentions | Caller          | Location                             |
| -----: | ----: | ----------: | --------------- | ------------------------------------ |
| 100.0% | 5.92s |          16 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

|      % |  Time | Contentions | Caller               | Location                             |
| -----: | ----: | ----------: | -------------------- | ------------------------------------ |
| 100.0% | 5.92s |          16 | `apply(Object)`      | `scala.runtime.function.JProcedure1` |
| 100.0% | 5.92s |          16 | `foreach(Function1)` | `scala.collection.immutable.List`    |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

|      % |  Time | Contentions | Caller                                                                        | Location                                    |
| -----: | ----: | ----------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 5.92s |          16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |  Time | Contentions | Caller           | Location                                    |
| -----: | ----: | ----------: | ---------------- | ------------------------------------------- |
| 100.0% | 5.92s |          16 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |  Time | Contentions | Caller           | Location                                   |
| -----: | ----: | ----------: | ---------------- | ------------------------------------------ |
| 100.0% | 5.92s |          16 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|      % |  Time | Contentions | Caller                         | Location                                             |
| -----: | ----: | ----------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% | 5.92s |          16 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`)

|      % |  Time | Contentions | Caller                           | Location                                            |
| -----: | ----: | ----------: | -------------------------------- | --------------------------------------------------- |
| 100.0% | 5.92s |          16 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001082400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001082400`)

|      % |  Time | Contentions | Caller                                           | Location                           |
| -----: | ----: | ----------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% | 5.92s |          16 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % |  Time | Contentions | Caller                         | Location                                          |
| -----: | ----: | ----------: | ------------------------------ | ------------------------------------------------- |
| 100.0% | 5.92s |          16 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |  Time | Contentions | Caller                     | Location                                          |
| -----: | ----: | ----------: | -------------------------- | ------------------------------------------------- |
| 100.0% | 5.92s |          16 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |  Time | Contentions | Caller                     | Location                   |
| -----: | ----: | ----------: | -------------------------- | -------------------------- |
| 100.0% | 5.92s |          16 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % |  Time | Contentions | Caller                                                      | Location                        |
| -----: | ----: | ----------: | ----------------------------------------------------------- | ------------------------------- |
| 100.0% | 5.92s |          16 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % |  Time | Contentions | Caller  | Location                                    |
| -----: | ----: | ----------: | ------- | ------------------------------------------- |
| 100.0% | 1.72s |          64 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % |  Time | Contentions | Caller                              | Location                            |
| -----: | ----: | ----------: | ----------------------------------- | ----------------------------------- |
| 100.0% | 1.70s |          63 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `parkUntil(long)` (`java.util.concurrent.locks.LockSupport`)

|      % |    Time | Contentions | Caller                              | Location                            |
| -----: | ------: | ----------: | ----------------------------------- | ----------------------------------- |
| 100.0% | 342.7ms |          11 | `awaitWork(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % |   Time | Contentions | Caller      | Location                                               |
| -----: | -----: | ----------: | ----------- | ------------------------------------------------------ |
| 100.0% | 15.3ms |           1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % |   Time | Contentions | Caller     | Location                            |
| -----: | -----: | ----------: | ---------- | ----------------------------------- |
| 100.0% | 15.3ms |           1 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % |   Time | Contentions | Caller                                               | Location                                      |
| -----: | -----: | ----------: | ---------------------------------------------------- | --------------------------------------------- |
| 100.0% | 15.3ms |           1 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`           |
| 100.0% | 15.3ms |           1 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 100.0% | 15.3ms |           1 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `park()` (`java.util.concurrent.locks.LockSupport`)

|      % |  Time | Contentions | Callee                | Location                   |
| -----: | ----: | ----------: | --------------------- | -------------------------- |
| 100.0% | 7.30s |          69 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|      % |   Time | Contentions | Callee                                    | Location                                      |
| -----: | -----: | ----------: | ----------------------------------------- | --------------------------------------------- |
| 100.0% |  5.93s |          17 | `park()`                                  | `java.util.concurrent.locks.LockSupport`      |
|   0.3% | 15.3ms |           1 | `tryRemoveAndExec(ForkJoinTask, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `get()` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Callee                 | Location                            |
| -----: | ----: | ----------: | ---------------------- | ----------------------------------- |
| 100.0% | 5.92s |          16 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |  Time | Contentions | Callee  | Location                            |
| -----: | ----: | ----------: | ------- | ----------------------------------- |
| 100.0% | 5.92s |          16 | `get()` | `java.util.concurrent.ForkJoinTask` |

##### `$anonfun$2(int)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|      % |  Time | Contentions | Callee                | Location                                    |
| -----: | ----: | ----------: | --------------------- | ------------------------------------------- |
| 100.0% | 5.92s |          16 | `run(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `$anonfun$adapted$1(Object)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|      % |  Time | Contentions | Callee            | Location                                  |
| -----: | ----: | ----------: | ----------------- | ----------------------------------------- |
| 100.0% | 5.92s |          16 | `$anonfun$2(int)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000700121db90`)

|      % |  Time | Contentions | Callee                       | Location                                  |
| -----: | ----: | ----------: | ---------------------------- | ----------------------------------------- |
| 100.0% | 5.92s |          16 | `$anonfun$adapted$1(Object)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `map(Function1)` (`scala.collection.immutable.Range`)

|      % |  Time | Contentions | Callee          | Location                                                             |
| -----: | ----: | ----------: | --------------- | -------------------------------------------------------------------- |
| 100.0% | 5.92s |          16 | `apply(Object)` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000700121db90` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|      % |  Time | Contentions | Callee           | Location                           |
| -----: | ----: | ----------: | ---------------- | ---------------------------------- |
| 100.0% | 5.92s |          16 | `map(Function1)` | `scala.collection.immutable.Range` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

|      % |  Time | Contentions | Callee                  | Location                                  |
| -----: | ----: | ----------: | ----------------------- | ----------------------------------------- |
| 100.0% | 5.92s |          16 | `run(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

|      % |  Time | Contentions | Callee                  | Location                                  |
| -----: | ----: | ----------: | ----------------------- | ----------------------------------------- |
| 100.0% | 5.92s |          16 | `executeOperation(int)` | `org.renaissance.harness.ExecutionDriver` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |  Time | Contentions | Callee               | Location                                  |
| -----: | ----: | ----------: | -------------------- | ----------------------------------------- |
| 100.0% | 5.92s |          16 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8`)

|      % |  Time | Contentions | Callee                                                                                                                 | Location                                    |
| -----: | ----: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 5.92s |          16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

|      % |  Time | Contentions | Callee              | Location                                                               |
| -----: | ----: | ----------: | ------------------- | ---------------------------------------------------------------------- |
| 100.0% | 5.92s |          16 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8` |
| 100.0% | 5.92s |          16 | `apply(Object)`     | `scala.runtime.function.JProcedure1`                                   |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

|      % |  Time | Contentions | Callee          | Location                             |
| -----: | ----: | ----------: | --------------- | ------------------------------------ |
| 100.0% | 5.92s |          16 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |  Time | Contentions | Callee               | Location                          |
| -----: | ----: | ----------: | -------------------- | --------------------------------- |
| 100.0% | 5.92s |          16 | `foreach(Function1)` | `scala.collection.immutable.List` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |  Time | Contentions | Callee                                                                        | Location                                    |
| -----: | ----: | ----------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 5.92s |          16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|      % |  Time | Contentions | Callee           | Location                                    |
| -----: | ----: | ----------: | ---------------- | ------------------------------------------- |
| 100.0% | 5.92s |          16 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`)

|      % |  Time | Contentions | Callee           | Location                                   |
| -----: | ----: | ----------: | ---------------- | ------------------------------------------ |
| 100.0% | 5.92s |          16 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001082400`)

|      % |  Time | Contentions | Callee                         | Location                                             |
| -----: | ----: | ----------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% | 5.92s |          16 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % |  Time | Contentions | Callee                           | Location                                            |
| -----: | ----: | ----------: | -------------------------------- | --------------------------------------------------- |
| 100.0% | 5.92s |          16 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001082400` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |  Time | Contentions | Callee                                           | Location                           |
| -----: | ----: | ----------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% | 5.92s |          16 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |  Time | Contentions | Callee                         | Location                                          |
| -----: | ----: | ----------: | ------------------------------ | ------------------------------------------------- |
| 100.0% | 5.92s |          16 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % |  Time | Contentions | Callee                     | Location                                          |
| -----: | ----: | ----------: | -------------------------- | ------------------------------------------------- |
| 100.0% | 5.92s |          16 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|     % |   Time | Contentions | Callee                                   | Location                            |
| ----: | -----: | ----------: | ---------------------------------------- | ----------------------------------- |
| 99.1% |  1.70s |          63 | `awaitWork(ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool` |
|  0.9% | 15.3ms |           1 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % |  Time | Contentions | Callee                              | Location                            |
| -----: | ----: | ----------: | ----------------------------------- | ----------------------------------- |
| 100.0% | 1.72s |          64 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|     % |    Time | Contentions | Callee            | Location                                 |
| ----: | ------: | ----------: | ----------------- | ---------------------------------------- |
| 80.0% |   1.36s |          52 | `park()`          | `java.util.concurrent.locks.LockSupport` |
| 20.0% | 342.7ms |          11 | `parkUntil(long)` | `java.util.concurrent.locks.LockSupport` |

##### `parkUntil(long)` (`java.util.concurrent.locks.LockSupport`)

|      % |    Time | Contentions | Callee                | Location                   |
| -----: | ------: | ----------: | --------------------- | -------------------------- |
| 100.0% | 342.7ms |          11 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % |   Time | Contentions | Callee                 | Location                            |
| -----: | -----: | ----------: | ---------------------- | ----------------------------------- |
| 100.0% | 15.3ms |           1 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % |   Time | Contentions | Callee      | Location                                               |
| -----: | -----: | ----------: | ----------- | ------------------------------------------------------ |
| 100.0% | 15.3ms |           1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % |   Time | Contentions | Callee   | Location                             |
| -----: | -----: | ----------: | -------- | ------------------------------------ |
| 100.0% | 15.3ms |           1 | `exec()` | `java.util.concurrent.RecursiveTask` |

## Hottest call stacks

Call stacks with the most time blocked in their leaf frame.

|     % |    Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----: | ------: | ----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 77.4% |   5.92s |          16 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `get()` ← `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `$anonfun$2(int)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `$anonfun$adapted$1(Object)` ← `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000700121db90`) ← `map(Function1)` (`scala.collection.immutable.Range`) ← `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])` |
| 17.9% |   1.36s |          52 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  4.5% | 342.7ms |          11 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkUntil(long)` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.2% |  15.3ms |           1 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

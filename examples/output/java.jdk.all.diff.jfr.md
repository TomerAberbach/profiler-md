# Sampling profile diff

Collected 1,432 samples → 1,474 samples (+42 samples, +2.9%).

| Category         | Change | Delta |             % |       Samples |
| ---------------- | -----: | ----: | ------------: | ------------: |
| Ours             |  +4.0% |   +52 | 90.2% → 91.1% | 1,291 → 1,343 |
| Standard library |  -7.1% |   -10 |   9.8% → 8.9% |     141 → 131 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |   Samples | Function                                                      | Location                                                                              |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|  +22.4% |   +43 | 13.4% → 15.9% | 192 → 235 | `findNearestCentroid()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +27.1% |   +26 |   6.7% → 8.3% |  96 → 122 | `collectClusters(int[])`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| +228.6% |   +16 |   0.5% → 1.6% |    7 → 23 | `apply(Object)`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000088011fece0` |
|   +1.4% |    +5 | 24.4% → 24.1% | 350 → 355 | `distance(Double[], Double[])`                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| +400.0% |    +4 |   0.1% → 0.3% |     1 → 5 | `accept(Object)`                                              | `java.util.stream.ReduceOps$3ReducingSink`                                            |
|     new |    +4 |   0.0% → 0.3% |     0 → 4 | `unpark(Object)`                                              | `jdk.internal.misc.Unsafe`                                                            |
|  +13.0% |    +3 |   1.6% → 1.8% |   23 → 26 | `computeDirectly()`                                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| +300.0% |    +3 |   0.1% → 0.3% |     1 → 4 | `awaitDone(int, long)`                                        | `java.util.concurrent.ForkJoinTask`                                                   |
|     new |    +3 |   0.0% → 0.2% |     0 → 3 | `unpark(Thread)`                                              | `java.util.concurrent.locks.LockSupport`                                              |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `join()`                                                      | `java.util.concurrent.ForkJoinTask`                                                   |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `park(boolean, long)`                                         | `jdk.internal.misc.Unsafe`                                                            |
|  +33.3% |    +1 |   0.2% → 0.3% |     3 → 4 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater`                                                              |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `copyInto(Sink, Spliterator)`                                 | `java.util.stream.AbstractPipeline`                                                   |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `compute()`                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`          | `java.util.concurrent.ForkJoinPool$WorkQueue`                                         |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `computeClusterAverages()`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
| +100.0% |    +1 |          0.1% |     1 → 2 | `merge(Object, Object, BiFunction)`                           | `java.util.HashMap`                                                                   |
| +100.0% |    +1 |          0.1% |     1 → 2 | `lambda$merge$7(Map, Object, List)`                           | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `grow(int)`                                                   | `java.util.ArrayList`                                                                 |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `session()`                                                   | `java.nio.Buffer`                                                                     |

##### Ours

|  Change | Delta |             % |   Samples | Function                            | Location                                                                              |
| ------: | ----: | ------------: | --------: | ----------------------------------- | ------------------------------------------------------------------------------------- |
|  +22.4% |   +43 | 13.4% → 15.9% | 192 → 235 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +27.1% |   +26 |   6.7% → 8.3% |  96 → 122 | `collectClusters(int[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| +228.6% |   +16 |   0.5% → 1.6% |    7 → 23 | `apply(Object)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000088011fece0` |
|   +1.4% |    +5 | 24.4% → 24.1% | 350 → 355 | `distance(Double[], Double[])`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +13.0% |    +3 |   1.6% → 1.8% |   23 → 26 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `compute()`                         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `computeClusterAverages()`          | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
| +100.0% |    +1 |          0.1% |     1 → 2 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `createSubtask(int, int)`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                      | Location                                       |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------- | ---------------------------------------------- |
| +400.0% |    +4 | 0.1% → 0.3% |   1 → 5 | `accept(Object)`                                              | `java.util.stream.ReduceOps$3ReducingSink`     |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `unpark(Object)`                                              | `jdk.internal.misc.Unsafe`                     |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `awaitDone(int, long)`                                        | `java.util.concurrent.ForkJoinTask`            |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `unpark(Thread)`                                              | `java.util.concurrent.locks.LockSupport`       |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `join()`                                                      | `java.util.concurrent.ForkJoinTask`            |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `park(boolean, long)`                                         | `jdk.internal.misc.Unsafe`                     |
|  +33.3% |    +1 | 0.2% → 0.3% |   3 → 4 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater`                       |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `copyInto(Sink, Spliterator)`                                 | `java.util.stream.AbstractPipeline`            |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`          | `java.util.concurrent.ForkJoinPool$WorkQueue`  |
| +100.0% |    +1 |        0.1% |   1 → 2 | `merge(Object, Object, BiFunction)`                           | `java.util.HashMap`                            |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `grow(int)`                                                   | `java.util.ArrayList`                          |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `session()`                                                   | `java.nio.Buffer`                              |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `<init>(String)`                                              | `java.util.jar.JarEntry`                       |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `generateSerializationFriendlyMethods()`                      | `java.lang.invoke.InnerClassLambdaMetafactory` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `write0(FileDescriptor, long, int)`                           | `sun.nio.ch.UnixFileDispatcherImpl`            |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `hashCode()`                                                  | `java.lang.Object`                             |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `uncompensate()`                                              | `java.util.concurrent.ForkJoinPool`            |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `putVal(int, Object, Object, boolean, boolean)`               | `java.util.HashMap`                            |

#### Improvements

Functions with the largest decrease in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |   Samples | Function                                                  | Location                                                   |
| ------: | ----: | ------------: | --------: | --------------------------------------------------------- | ---------------------------------------------------------- |
|   -4.1% |   -22 | 37.6% → 35.0% | 538 → 516 | `accumulate(Double[], double[])`                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -21.8% |   -17 |   5.4% → 4.1% |   78 → 61 | `vectorSum()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -22.4% |   -13 |   4.1% → 3.1% |   58 → 45 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                                        |
|  -50.0% |    -5 |   0.7% → 0.3% |    10 → 5 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                        |
|   -9.5% |    -4 |   2.9% → 2.6% |   42 → 38 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                                         |
| removed |    -3 |   0.2% → 0.0% |     3 → 0 | `wrapSink(Sink)`                                          | `java.util.stream.AbstractPipeline`                        |
| removed |    -3 |   0.2% → 0.0% |     3 → 0 | `nextNode()`                                              | `java.util.HashMap$HashIterator`                           |
|  -66.7% |    -2 |   0.2% → 0.1% |     3 → 1 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `lambda$collectClusters$0(Double[])`                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `add(double[], double[])`                                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `match(byte[], byte[], byte[], byte[])`                   | `java.util.jar.JarFile`                                    |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `lastIndexOf(int, int)`                                   | `java.lang.String`                                         |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `open0(long, int, int)`                                   | `sun.nio.fs.UnixNativeDispatcher`                          |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                        |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `merge(Map, Map)`                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -50.0% |    -1 |          0.1% |     2 → 1 | `awaitWork(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                        |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `createSubtask(int, int)`                                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `<init>(Map)`                                             | `java.util.HashMap`                                        |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `push(ForkJoinTask, ForkJoinPool, boolean)`               | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `accept(double)`                                          | `java.util.stream.DoublePipeline$1$1`                      |

##### Ours

|  Change | Delta |             % |   Samples | Function                             | Location                                                   |
| ------: | ----: | ------------: | --------: | ------------------------------------ | ---------------------------------------------------------- |
|   -4.1% |   -22 | 37.6% → 35.0% | 538 → 516 | `accumulate(Double[], double[])`     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -21.8% |   -17 |   5.4% → 4.1% |   78 → 61 | `vectorSum()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `merge(Map, Map)`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                  | Location                                      |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------- | --------------------------------------------- |
|  -22.4% |   -13 | 4.1% → 3.1% | 58 → 45 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                           |
|  -50.0% |    -5 | 0.7% → 0.3% |  10 → 5 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|   -9.5% |    -4 | 2.9% → 2.6% | 42 → 38 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                            |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `wrapSink(Sink)`                                          | `java.util.stream.AbstractPipeline`           |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `nextNode()`                                              | `java.util.HashMap$HashIterator`              |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `match(byte[], byte[], byte[], byte[])`                   | `java.util.jar.JarFile`                       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `lastIndexOf(int, int)`                                   | `java.lang.String`                            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `open0(long, int, int)`                                   | `sun.nio.fs.UnixNativeDispatcher`             |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`           |
|  -50.0% |    -1 |        0.1% |   2 → 1 | `awaitWork(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>(Map)`                                             | `java.util.HashMap`                           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `push(ForkJoinTask, ForkJoinPool, boolean)`               | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `accept(double)`                                          | `java.util.stream.DoublePipeline$1$1`         |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `tryCompensate(long, boolean)`                            | `java.util.concurrent.ForkJoinPool`           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `signalWaiters()`                                         | `java.util.concurrent.ForkJoinTask`           |

#### Lines

Lines with the largest change in contribution to each function's self samples.

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % |   Samples | Location                                                       |
| ------: | ----: | ------------: | --------: | -------------------------------------------------------------- |
|  +26.4% |   +46 | 90.6% → 93.6% | 174 → 220 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:229` |
|  -47.1% |    -8 |   8.9% → 3.8% |    17 → 9 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:225` |
| +500.0% |    +5 |   0.5% → 2.6% |     1 → 6 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:230` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % | Samples | Location                                                       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------- |
| +108.3% |   +26 | 25.0% → 41.0% | 24 → 50 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:211` |
|   +2.9% |    +2 | 71.9% → 58.2% | 69 → 71 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |
| removed |    -1 |   1.0% → 0.0% |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:213` |
|  -50.0% |    -1 |   2.1% → 0.8% |   2 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:214` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Location                                                       |
| -----: | ----: | -----: | --------: | -------------------------------------------------------------- |
|  +1.4% |    +5 | 100.0% | 350 → 355 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:248` |

##### `accept(Object)` (`java.util.stream.ReduceOps$3ReducingSink`)

|  Change | Delta |      % | Samples | Location                                       |
| ------: | ----: | -----: | ------: | ---------------------------------------------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `java.util.stream.ReduceOps$3ReducingSink:169` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % | Samples | Location                                                       |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------- |
| +13.0% |    +3 | 100.0% | 23 → 26 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:204` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |            % | Samples | Location                                |
| -----: | ----: | -----------: | ------: | --------------------------------------- |
|    new |    +3 | 0.0% → 75.0% |   0 → 3 | `java.util.concurrent.ForkJoinTask:437` |

##### `unpark(Thread)` (`java.util.concurrent.locks.LockSupport`)

| Change | Delta |             % | Samples | Location                                     |
| -----: | ----: | ------------: | ------: | -------------------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `java.util.concurrent.locks.LockSupport:181` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |            % | Samples | Location                                |
| -----: | ----: | -----------: | ------: | --------------------------------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `java.util.concurrent.ForkJoinTask:654` |

##### `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

| Change | Delta |             % | Samples | Location                                |
| -----: | ----: | ------------: | ------: | --------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.stream.AbstractPipeline:508` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |             % | Samples | Location                                                   |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask:151` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |             % | Samples | Location                                           |
| -----: | ----: | ------------: | ------: | -------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.concurrent.ForkJoinPool$WorkQueue:1314` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |             % | Samples | Location                                                   |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:319` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Location                 |
| ------: | ----: | ------------: | ------: | ------------------------ |
|     new |    +2 | 0.0% → 100.0% |   0 → 2 | `java.util.HashMap:1384` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.HashMap:1374` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |      % | Samples | Location                                        |
| ------: | ----: | -----: | ------: | ----------------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `org.renaissance.jdk.concurrent.JavaKMeans:112` |

##### `grow(int)` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Location                  |
| -----: | ----: | ------------: | ------: | ------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.ArrayList:239` |

##### `session()` (`java.nio.Buffer`)

| Change | Delta |             % | Samples | Location              |
| -----: | ----: | ------------: | ------: | --------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.nio.Buffer:793` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % | Samples | Location                                                      |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419` |

##### `<init>(String)` (`java.util.jar.JarEntry`)

| Change | Delta |             % | Samples | Location                    |
| -----: | ----: | ------------: | ------: | --------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.jar.JarEntry:53` |

##### `generateSerializationFriendlyMethods()` (`java.lang.invoke.InnerClassLambdaMetafactory`)

| Change | Delta |             % | Samples | Location                                           |
| -----: | ----: | ------------: | ------: | -------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.lang.invoke.InnerClassLambdaMetafactory:437` |

##### `uncompensate()` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % | Samples | Location                                 |
| -----: | ----: | ------------: | ------: | ---------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.concurrent.ForkJoinPool:2008` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Location                |
| -----: | ----: | ------------: | ------: | ----------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.HashMap:646` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Location                                                      |
| -----: | ----: | -----: | --------: | ------------------------------------------------------------- |
|  -4.1% |   -22 | 100.0% | 538 → 516 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:411` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % | Samples | Location                                                      |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------- |
| -36.0% |    -9 | 32.1% → 26.2% | 25 → 16 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:402` |
| -13.0% |    -6 | 59.0% → 65.6% | 46 → 40 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400` |
| -28.6% |    -2 |   9.0% → 8.2% |   7 → 5 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:403` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Location                 |
| ------: | ----: | ------------: | ------: | ------------------------ |
|  -24.6% |   -14 | 98.3% → 95.6% | 57 → 43 | `java.util.HashMap:1219` |
| +100.0% |    +1 |   1.7% → 4.4% |   1 → 2 | `java.util.HashMap:1206` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |            % | Samples | Location                                 |
| ------: | ----: | -----------: | ------: | ---------------------------------------- |
| removed |    -6 | 60.0% → 0.0% |   6 → 0 | `java.util.concurrent.ForkJoinPool:2058` |
|     new |    +1 | 0.0% → 20.0% |   0 → 1 | `java.util.concurrent.ForkJoinPool:2047` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change | Delta |      % | Samples | Location                |
| -----: | ----: | -----: | ------: | ----------------------- |
|  -9.5% |    -4 | 100.0% | 42 → 38 | `java.util.Arrays:3482` |

##### `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`)

|  Change | Delta |             % | Samples | Location                                |
| ------: | ----: | ------------: | ------: | --------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `java.util.stream.AbstractPipeline:546` |

##### `nextNode()` (`java.util.HashMap$HashIterator`)

|  Change | Delta |             % | Samples | Location                              |
| ------: | ----: | ------------: | ------: | ------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `java.util.HashMap$HashIterator:1609` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % | Samples | Location                                           |
| -----: | ----: | -----: | ------: | -------------------------------------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `java.util.concurrent.ForkJoinPool$WorkQueue:1347` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % | Samples | Location                                                       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |             % | Samples | Location                                                      |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:432` |

##### `match(byte[], byte[], byte[], byte[])` (`java.util.jar.JarFile`)

|  Change | Delta |             % | Samples | Location                     |
| ------: | ----: | ------------: | ------: | ---------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.jar.JarFile:1000` |

##### `lastIndexOf(int, int)` (`java.lang.String`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.lang.String:2562` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % | Samples | Location                                |
| ------: | ----: | ------------: | ------: | --------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinTask:387` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % | Samples | Location                                        |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans:110` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |            % | Samples | Location                                 |
| ------: | ----: | -----------: | ------: | ---------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinPool:1859` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % | Samples | Location                                                       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261` |

##### `<init>(Map)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.HashMap:492` |

##### `push(ForkJoinTask, ForkJoinPool, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |             % | Samples | Location                                           |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinPool$WorkQueue:1156` |

##### `accept(double)` (`java.util.stream.DoublePipeline$1$1`)

|  Change | Delta |             % | Samples | Location                                  |
| ------: | ----: | ------------: | ------: | ----------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.stream.DoublePipeline$1$1:176` |

##### `tryCompensate(long, boolean)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinPool:1978` |

##### `signalWaiters()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % | Samples | Location                                |
| ------: | ----: | ------------: | ------: | --------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinTask:302` |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | --------: | ------------------- | ---------------------------------------------------------- |
| +22.4% |   +43 | 100.0% | 192 → 235 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |  Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | -------: | ------------------- | ---------------------------------------------------------- |
| +27.1% |   +26 | 100.0% | 96 → 122 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000088011fece0`)

|  Change | Delta |      % | Samples | Caller                              | Location            |
| ------: | ----: | -----: | ------: | ----------------------------------- | ------------------- |
| +228.6% |   +16 | 100.0% |  7 → 23 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller                  | Location                                                   |
| -----: | ----: | -----: | --------: | ----------------------- | ---------------------------------------------------------- |
|  +1.4% |    +5 | 100.0% | 350 → 355 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `accept(Object)` (`java.util.stream.ReduceOps$3ReducingSink`)

|  Change | Delta |      % | Samples | Caller        | Location                           |
| ------: | ----: | -----: | ------: | ------------- | ---------------------------------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `accept(int)` | `java.util.stream.IntPipeline$1$1` |

##### `unpark(Object)` (`jdk.internal.misc.Unsafe`)

| Change | Delta |             % | Samples | Caller           | Location                                 |
| -----: | ----: | ------------: | ------: | ---------------- | ---------------------------------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `unpark(Thread)` | `java.util.concurrent.locks.LockSupport` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % | Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | ------: | ------------------- | ---------------------------------------------------------- |
| +13.0% |    +3 | 100.0% | 23 → 26 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |      % | Samples | Caller   | Location                            |
| ------: | ----: | -----: | ------: | -------- | ----------------------------------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `unpark(Thread)` (`java.util.concurrent.locks.LockSupport`)

| Change | Delta |            % | Samples | Caller                         | Location                            |
| -----: | ----: | -----------: | ------: | ------------------------------ | ----------------------------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `signalWaiters()`              | `java.util.concurrent.ForkJoinTask` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `tryCompensate(long, boolean)` | `java.util.concurrent.ForkJoinPool` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |      % | Samples | Caller      | Location                                               |
| ------: | ----: | -----: | ------: | ----------- | ------------------------------------------------------ |
| +200.0% |    +2 | 100.0% |   1 → 3 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|  Change | Delta |      % | Samples | Caller   | Location                                 |
| ------: | ----: | -----: | ------: | -------- | ---------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `park()` | `java.util.concurrent.locks.LockSupport` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

| Change | Delta |      % | Samples | Caller                      | Location                 |
| -----: | ----: | -----: | ------: | --------------------------- | ------------------------ |
| +33.3% |    +1 | 100.0% |   3 → 4 | `inflate(byte[], int, int)` | `java.util.zip.Inflater` |

##### `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

| Change | Delta |             % | Samples | Caller                               | Location                            |
| -----: | ----: | ------------: | ------: | ------------------------------------ | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |             % | Samples | Caller   | Location                             |
| -----: | ----: | ------------: | ------: | -------- | ------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |             % | Samples | Caller                                   | Location                            |
| -----: | ----: | ------------: | ------: | ---------------------------------------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |             % | Samples | Caller              | Location                                               |
| -----: | ----: | ------------: | ------: | ------------------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|  Change | Delta |      % | Samples | Caller                              | Location                                    |
| ------: | ----: | -----: | ------: | ----------------------------------- | ------------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |      % | Samples | Caller                   | Location                                                               |
| ------: | ----: | -----: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000088011fef30` |

##### `grow(int)` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Caller   | Location              |
| -----: | ----: | ------------: | ------: | -------- | --------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `grow()` | `java.util.ArrayList` |

##### `session()` (`java.nio.Buffer`)

| Change | Delta |             % | Samples | Caller     | Location                    |
| -----: | ----: | ------------: | ------: | ---------- | --------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `get(int)` | `java.nio.DirectByteBuffer` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % | Samples | Caller      | Location                                               |
| -----: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `<init>(String)` (`java.util.jar.JarEntry`)

| Change | Delta |             % | Samples | Caller                    | Location                             |
| -----: | ----: | ------------: | ------: | ------------------------- | ------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>(JarFile, String)` | `java.util.jar.JarFile$JarFileEntry` |

##### `generateSerializationFriendlyMethods()` (`java.lang.invoke.InnerClassLambdaMetafactory`)

| Change | Delta |             % | Samples | Caller                 | Location                                       |
| -----: | ----: | ------------: | ------: | ---------------------- | ---------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `generateInnerClass()` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `write0(FileDescriptor, long, int)` (`sun.nio.ch.UnixFileDispatcherImpl`)

| Change | Delta |             % | Samples | Caller                             | Location                            |
| -----: | ----: | ------------: | ------: | ---------------------------------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `write(FileDescriptor, long, int)` | `sun.nio.ch.UnixFileDispatcherImpl` |

##### `hashCode()` (`java.lang.Object`)

| Change | Delta |             % | Samples | Caller         | Location            |
| -----: | ----: | ------------: | ------: | -------------- | ------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `hash(Object)` | `java.util.HashMap` |

##### `uncompensate()` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % | Samples | Caller                 | Location                            |
| -----: | ----: | ------------: | ------: | ---------------------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Caller                        | Location            |
| -----: | ----: | ------------: | ------: | ----------------------------- | ------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Caller        | Location                                                  |
| -----: | ----: | -----: | --------: | ------------- | --------------------------------------------------------- |
|  -4.1% |   -22 | 100.0% | 538 → 516 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % | Samples | Caller              | Location                                                  |
| -----: | ----: | -----: | ------: | ------------------- | --------------------------------------------------------- |
| -21.8% |   -17 | 100.0% | 78 → 61 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|  Change | Delta |              % | Samples | Caller                   | Location                                                   |
| ------: | ----: | -------------: | ------: | ------------------------ | ---------------------------------------------------------- |
|  -21.1% |   -12 | 98.3% → 100.0% | 57 → 45 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |    -1 |    1.7% → 0.0% |   1 → 0 | `park(boolean, long)`    | `jdk.internal.misc.Unsafe`                                 |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % | Samples | Caller                 | Location                            |
| -----: | ----: | -----: | ------: | ---------------------- | ----------------------------------- |
| -50.0% |    -5 | 100.0% |  10 → 5 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change | Delta |             % | Samples | Caller      | Location              |
| -----: | ----: | ------------: | ------: | ----------- | --------------------- |
| -14.3% |    -5 | 83.3% → 78.9% | 35 → 30 | `grow(int)` | `java.util.ArrayList` |
| +14.3% |    +1 | 16.7% → 21.1% |   7 → 8 | `toArray()` | `java.util.ArrayList` |

##### `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`)

|  Change | Delta |             % | Samples | Caller                               | Location                            |
| ------: | ----: | ------------: | ------: | ------------------------------------ | ----------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `nextNode()` (`java.util.HashMap$HashIterator`)

|  Change | Delta |             % | Samples | Caller   | Location                          |
| ------: | ----: | ------------: | ------: | -------- | --------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `next()` | `java.util.HashMap$EntryIterator` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % | Samples | Caller                 | Location                            |
| -----: | ----: | -----: | ------: | ---------------------- | ----------------------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % | Samples | Caller          | Location                                                                              |
| ------: | ----: | ------------: | ------: | --------------- | ------------------------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000003011e4b38` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |             % | Samples | Caller                               | Location                                                  |
| ------: | ----: | ------------: | ------: | ------------------------------------ | --------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `match(byte[], byte[], byte[], byte[])` (`java.util.jar.JarFile`)

|  Change | Delta |             % | Samples | Caller                        | Location                |
| ------: | ----: | ------------: | ------: | ----------------------------- | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `checkForSpecialAttributes()` | `java.util.jar.JarFile` |

##### `lastIndexOf(int, int)` (`java.lang.String`)

|  Change | Delta |             % | Samples | Caller                     | Location                           |
| ------: | ----: | ------------: | ------: | -------------------------- | ---------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `indexOfBangSlash(String)` | `sun.net.www.protocol.jar.Handler` |

##### `open0(long, int, int)` (`sun.nio.fs.UnixNativeDispatcher`)

|  Change | Delta |             % | Samples | Caller                     | Location                          |
| ------: | ----: | ------------: | ------: | -------------------------- | --------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `open(UnixPath, int, int)` | `sun.nio.fs.UnixNativeDispatcher` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % | Samples | Caller                                               | Location                                      |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------- | --------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % | Samples | Caller                     | Location                                                   |
| ------: | ----: | ------------: | ------: | -------------------------- | ---------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % | Samples | Caller                              | Location                            |
| -----: | ----: | -----: | ------: | ----------------------------------- | ----------------------------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % | Samples | Caller      | Location                                               |
| ------: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `<init>(Map)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Caller            | Location                                    |
| ------: | ----: | ------------: | ------: | ----------------- | ------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `push(ForkJoinTask, ForkJoinPool, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |             % | Samples | Caller   | Location                            |
| ------: | ----: | ------------: | ------: | -------- | ----------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `fork()` | `java.util.concurrent.ForkJoinTask` |

##### `accept(double)` (`java.util.stream.DoublePipeline$1$1`)

|  Change | Delta |             % | Samples | Caller                             | Location                                        |
| ------: | ----: | ------------: | ------: | ---------------------------------- | ----------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `forEachRemaining(DoubleConsumer)` | `java.util.Spliterators$DoubleArraySpliterator` |

##### `tryCompensate(long, boolean)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Caller                                                    | Location                            |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------- | ----------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool` |

##### `signalWaiters()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % | Samples | Caller      | Location                            |
| ------: | ----: | ------------: | ------: | ----------- | ----------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `setDone()` | `java.util.concurrent.ForkJoinTask` |

### Total samples

#### Regressions

Functions with the largest increase in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |       Samples | Function                                                                                                               | Location                                                                              |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|   +9.7% |   +74 | 53.2% → 56.7% |     762 → 836 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   +5.2% |   +54 | 73.2% → 74.8% | 1,048 → 1,102 | `run()`                                                                                                                | `java.util.concurrent.ForkJoinWorkerThread`                                           |
|   +4.8% |   +52 | 75.1% → 76.5% | 1,076 → 1,128 | `runWorker(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`                                                   |
|   +4.4% |   +49 | 78.3% → 79.4% | 1,121 → 1,170 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`                                                                   | `java.util.concurrent.ForkJoinPool$WorkQueue`                                         |
|   +8.9% |   +48 | 37.8% → 40.0% |     542 → 590 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   +4.4% |   +48 | 75.7% → 76.8% | 1,084 → 1,132 | `scan(ForkJoinPool$WorkQueue, int, int)`                                                                               | `java.util.concurrent.ForkJoinPool`                                                   |
|   +3.2% |   +44 | 96.9% → 97.2% | 1,388 → 1,432 | `awaitDone(int, long)`                                                                                                 | `java.util.concurrent.ForkJoinTask`                                                   |
|   +3.2% |   +44 | 96.9% → 97.2% | 1,388 → 1,432 | `join()`                                                                                                               | `java.util.concurrent.ForkJoinTask`                                                   |
|   +2.9% |   +41 |         98.7% | 1,414 → 1,455 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
|   +2.9% |   +41 |         98.7% | 1,414 → 1,455 | `exec()`                                                                                                               | `java.util.concurrent.RecursiveTask`                                                  |
|   +2.8% |   +40 | 98.9% → 98.8% | 1,416 → 1,456 | `doExec()`                                                                                                             | `java.util.concurrent.ForkJoinTask`                                                   |
|   +2.7% |   +37 | 96.4% → 96.2% | 1,381 → 1,418 | `tryRemoveAndExec(ForkJoinTask, boolean)`                                                                              | `java.util.concurrent.ForkJoinPool$WorkQueue`                                         |
|   +8.3% |   +33 | 27.9% → 29.3% |     399 → 432 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`                                                              | `java.util.concurrent.ForkJoinPool`                                                   |
|  +11.7% |   +23 | 13.8% → 14.9% |     197 → 220 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| +155.6% |   +14 |   0.6% → 1.6% |        9 → 23 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000088011fece0` |
|     new |    +9 |   0.0% → 0.6% |         0 → 9 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                           |
|     new |    +7 |   0.0% → 0.5% |         0 → 7 | `unpark(Thread)`                                                                                                       | `java.util.concurrent.locks.LockSupport`                                              |
|  +55.6% |    +5 |   0.6% → 0.9% |        9 → 14 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                                       |
|  +55.6% |    +5 |   0.6% → 0.9% |        9 → 14 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                                       |
|  +55.6% |    +5 |   0.6% → 0.9% |        9 → 14 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                                       |

##### Ours

|  Change | Delta |             % |       Samples | Function                                                                                                               | Location                                                                              |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|   +9.7% |   +74 | 53.2% → 56.7% |     762 → 836 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   +8.9% |   +48 | 37.8% → 40.0% |     542 → 590 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   +2.9% |   +41 |         98.7% | 1,414 → 1,455 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
|  +11.7% |   +23 | 13.8% → 14.9% |     197 → 220 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| +155.6% |   +14 |   0.6% → 1.6% |        9 → 23 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000088011fece0` |
|     new |    +9 |   0.0% → 0.6% |         0 → 9 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                           |
|  +55.6% |    +5 |   0.6% → 0.9% |        9 → 14 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                                       |
|  +55.6% |    +5 |   0.6% → 0.9% |        9 → 14 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                                       |
|  +55.6% |    +5 |   0.6% → 0.9% |        9 → 14 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                                       |
|   +1.4% |    +5 | 24.4% → 24.1% |     350 → 355 | `distance(Double[], Double[])`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +57.1% |    +4 |   0.5% → 0.7% |        7 → 11 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                                           |
|  +37.5% |    +3 |   0.6% → 0.7% |        8 → 11 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                                            |
|  +50.0% |    +3 |   0.4% → 0.6% |         6 → 9 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000880117c3b8`                |
|  +50.0% |    +3 |   0.4% → 0.6% |         6 → 9 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                                           |
|  +75.0% |    +3 |   0.3% → 0.5% |         4 → 7 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | `org.renaissance.jdk.concurrent.FjKmeans`                                             |
|  +75.0% |    +3 |   0.3% → 0.5% |         4 → 7 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                                             |
|  +33.3% |    +3 |   0.6% → 0.8% |        9 → 12 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  +33.3% |    +3 |   0.6% → 0.8% |        9 → 12 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000088011fef30`                |
|  +66.7% |    +2 |   0.2% → 0.3% |         3 → 5 | `extractResource(String, Path)`                                                                                        | `org.renaissance.core.ResourceUtils`                                                  |
|  +66.7% |    +2 |   0.2% → 0.3% |         3 → 5 | `extractResources(Iterable, Path)`                                                                                     | `org.renaissance.core.ResourceUtils`                                                  |

##### Standard library

|  Change | Delta |             % |       Samples | Function                                                  | Location                                             |
| ------: | ----: | ------------: | ------------: | --------------------------------------------------------- | ---------------------------------------------------- |
|   +5.2% |   +54 | 73.2% → 74.8% | 1,048 → 1,102 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`          |
|   +4.8% |   +52 | 75.1% → 76.5% | 1,076 → 1,128 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                  |
|   +4.4% |   +49 | 78.3% → 79.4% | 1,121 → 1,170 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|   +4.4% |   +48 | 75.7% → 76.8% | 1,084 → 1,132 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                  |
|   +3.2% |   +44 | 96.9% → 97.2% | 1,388 → 1,432 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                  |
|   +3.2% |   +44 | 96.9% → 97.2% | 1,388 → 1,432 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                  |
|   +2.9% |   +41 |         98.7% | 1,414 → 1,455 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                 |
|   +2.8% |   +40 | 98.9% → 98.8% | 1,416 → 1,456 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                  |
|   +2.7% |   +37 | 96.4% → 96.2% | 1,381 → 1,418 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|   +8.3% |   +33 | 27.9% → 29.3% |     399 → 432 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                  |
|     new |    +7 |   0.0% → 0.5% |         0 → 7 | `unpark(Thread)`                                          | `java.util.concurrent.locks.LockSupport`             |
| +500.0% |    +5 |   0.1% → 0.4% |         1 → 6 | `accept(Object)`                                          | `java.util.stream.ReduceOps$3ReducingSink`           |
| +400.0% |    +4 |   0.1% → 0.3% |         1 → 5 | `signalWaiters()`                                         | `java.util.concurrent.ForkJoinTask`                  |
| +400.0% |    +4 |   0.1% → 0.3% |         1 → 5 | `setDone()`                                               | `java.util.concurrent.ForkJoinTask`                  |
|     new |    +4 |   0.0% → 0.3% |         0 → 4 | `unpark(Object)`                                          | `jdk.internal.misc.Unsafe`                           |
|  +37.5% |    +3 |   0.6% → 0.7% |        8 → 11 | `invokeStatic(Object, Object)`                            | `java.lang.invoke.LambdaForm$DMH.0x0000008801001c00` |
|  +37.5% |    +3 |   0.6% → 0.7% |        8 → 11 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000008801082400`  |
|  +37.5% |    +3 |   0.6% → 0.7% |        8 → 11 | `invokeExact_MT(Object, Object, Object, Object)`          | `java.lang.invoke.Invokers$Holder`                   |
|  +37.5% |    +3 |   0.6% → 0.7% |        8 → 11 | `invokeImpl(Object, Object[])`                            | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +37.5% |    +3 |   0.6% → 0.7% |        8 → 11 | `invoke(Object, Object[])`                                | `jdk.internal.reflect.DirectMethodHandleAccessor`    |

#### Improvements

Functions with the largest decrease in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |   Samples | Function                                                                                                               | Location                                                               |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|   -6.3% |   -39 | 43.0% → 39.1% | 616 → 577 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   -6.3% |   -39 | 43.0% → 39.1% | 616 → 577 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -10.8% |   -26 | 16.8% → 14.6% | 241 → 215 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   -9.7% |   -25 | 17.9% → 15.7% | 257 → 232 | `invoke()`                                                                                                             | `java.util.concurrent.ForkJoinTask`                                    |
|  -10.3% |   -25 | 16.9% → 14.7% | 242 → 217 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   -9.4% |   -22 | 16.3% → 14.3% | 233 → 211 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   -4.1% |   -22 | 37.6% → 35.0% | 538 → 516 | `accumulate(Double[], double[])`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -23.3% |    -7 |   2.1% → 1.6% |   30 → 23 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed |    -6 |   0.4% → 0.0% |     6 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -26.1% |    -6 |   1.6% → 1.2% |   23 → 17 | `exec()`                                                                                                               | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                    |
|  -19.2% |    -5 |   1.8% → 1.4% |   26 → 21 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000088011fdf70` |
|   -9.5% |    -4 |   2.9% → 2.6% |   42 → 38 | `copyOf(Object[], int)`                                                                                                | `java.util.Arrays`                                                     |
|  -11.4% |    -4 |   2.4% → 2.1% |   35 → 31 | `grow(int)`                                                                                                            | `java.util.ArrayList`                                                  |
|  -11.4% |    -4 |   2.4% → 2.1% |   35 → 31 | `grow()`                                                                                                               | `java.util.ArrayList`                                                  |
|  -11.4% |    -4 |   2.4% → 2.1% |   35 → 31 | `add(Object, Object[], int)`                                                                                           | `java.util.ArrayList`                                                  |
|  -11.4% |    -4 |   2.4% → 2.1% |   35 → 31 | `add(Object)`                                                                                                          | `java.util.ArrayList`                                                  |
| removed |    -3 |   0.2% → 0.0% |     3 → 0 | `wrapSink(Sink)`                                                                                                       | `java.util.stream.AbstractPipeline`                                    |
|  -75.0% |    -3 |   0.3% → 0.1% |     4 → 1 | `evaluate(Spliterator, boolean, IntFunction)`                                                                          | `java.util.stream.AbstractPipeline`                                    |
|  -75.0% |    -3 |   0.3% → 0.1% |     4 → 1 | `evaluateToArrayNode(IntFunction)`                                                                                     | `java.util.stream.AbstractPipeline`                                    |
|  -75.0% |    -3 |   0.3% → 0.1% |     4 → 1 | `toArray(IntFunction)`                                                                                                 | `java.util.stream.ReferencePipeline`                                   |

##### Ours

|  Change | Delta |             % |   Samples | Function                                                                                                               | Location                                                               |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|   -6.3% |   -39 | 43.0% → 39.1% | 616 → 577 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   -6.3% |   -39 | 43.0% → 39.1% | 616 → 577 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -10.8% |   -26 | 16.8% → 14.6% | 241 → 215 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -10.3% |   -25 | 16.9% → 14.7% | 242 → 217 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   -9.4% |   -22 | 16.3% → 14.3% | 233 → 211 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   -4.1% |   -22 | 37.6% → 35.0% | 538 → 516 | `accumulate(Double[], double[])`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -23.3% |    -7 |   2.1% → 1.6% |   30 → 23 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed |    -6 |   0.4% → 0.0% |     6 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -19.2% |    -5 |   1.8% → 1.4% |   26 → 21 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000088011fdf70` |
| removed |    -3 |   0.2% → 0.0% |     3 → 0 | `lambda$generateData$5(int, int, Random[], int)`                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed |    -3 |   0.2% → 0.0% |     3 → 0 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000003011818d8` |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `lambda$collectClusters$0(Double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `add(double[], double[])`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `combineResults(double[], double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |

##### Standard library

|  Change | Delta |             % |   Samples | Function                                      | Location                                            |
| ------: | ----: | ------------: | --------: | --------------------------------------------- | --------------------------------------------------- |
|   -9.7% |   -25 | 17.9% → 15.7% | 257 → 232 | `invoke()`                                    | `java.util.concurrent.ForkJoinTask`                 |
|  -26.1% |    -6 |   1.6% → 1.2% |   23 → 17 | `exec()`                                      | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|   -9.5% |    -4 |   2.9% → 2.6% |   42 → 38 | `copyOf(Object[], int)`                       | `java.util.Arrays`                                  |
|  -11.4% |    -4 |   2.4% → 2.1% |   35 → 31 | `grow(int)`                                   | `java.util.ArrayList`                               |
|  -11.4% |    -4 |   2.4% → 2.1% |   35 → 31 | `grow()`                                      | `java.util.ArrayList`                               |
|  -11.4% |    -4 |   2.4% → 2.1% |   35 → 31 | `add(Object, Object[], int)`                  | `java.util.ArrayList`                               |
|  -11.4% |    -4 |   2.4% → 2.1% |   35 → 31 | `add(Object)`                                 | `java.util.ArrayList`                               |
| removed |    -3 |   0.2% → 0.0% |     3 → 0 | `wrapSink(Sink)`                              | `java.util.stream.AbstractPipeline`                 |
|  -75.0% |    -3 |   0.3% → 0.1% |     4 → 1 | `evaluate(Spliterator, boolean, IntFunction)` | `java.util.stream.AbstractPipeline`                 |
|  -75.0% |    -3 |   0.3% → 0.1% |     4 → 1 | `evaluateToArrayNode(IntFunction)`            | `java.util.stream.AbstractPipeline`                 |
|  -75.0% |    -3 |   0.3% → 0.1% |     4 → 1 | `toArray(IntFunction)`                        | `java.util.stream.ReferencePipeline`                |
| removed |    -3 |   0.2% → 0.0% |     3 → 0 | `nextNode()`                                  | `java.util.HashMap$HashIterator`                    |
| removed |    -3 |   0.2% → 0.0% |     3 → 0 | `next()`                                      | `java.util.HashMap$EntryIterator`                   |
|  -66.7% |    -2 |   0.2% → 0.1% |     3 → 1 | `awaitWork(ForkJoinPool$WorkQueue)`           | `java.util.concurrent.ForkJoinPool`                 |
|  -40.0% |    -2 |   0.3% → 0.2% |     5 → 3 | `<init>(Map)`                                 | `java.util.HashMap`                                 |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `match(byte[], byte[], byte[], byte[])`       | `java.util.jar.JarFile`                             |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `checkForSpecialAttributes()`                 | `java.util.jar.JarFile`                             |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `hasClassPathAttribute()`                     | `java.util.jar.JarFile`                             |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `jarFileHasClassPathAttribute(JarFile)`       | `java.util.jar.JavaUtilJarAccessImpl`               |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `getClassPath()`                              | `jdk.internal.loader.URLClassPath$JarLoader`        |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % |   Samples | Callee                   | Location                                                   |
| -----: | ----: | ------------: | --------: | ------------------------ | ---------------------------------------------------------- |
|  +9.7% |   +74 |        100.0% | 762 → 836 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +8.9% |   +48 | 71.1% → 70.6% | 542 → 590 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +11.7% |   +23 | 25.9% → 26.3% | 197 → 220 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

| Change | Delta |      % |       Samples | Callee                              | Location                            |
| -----: | ----: | -----: | ------------: | ----------------------------------- | ----------------------------------- |
|  +5.2% |   +54 | 100.0% | 1,048 → 1,102 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % |       Samples | Callee                                   | Location                            |
| -----: | ----: | ------------: | ------------: | ---------------------------------------- | ----------------------------------- |
|  +5.0% |   +54 | 99.5% → 99.7% | 1,071 → 1,125 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |
| -66.7% |    -2 |   0.3% → 0.1% |         3 → 1 | `awaitWork(ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |              % |       Samples | Callee     | Location                            |
| -----: | ----: | -------------: | ------------: | ---------- | ----------------------------------- |
|  +4.3% |   +48 | 100.0% → 99.9% | 1,121 → 1,169 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % |   Samples | Callee                         | Location                                                   |
| -----: | ----: | ------------: | --------: | ------------------------------ | ---------------------------------------------------------- |
|  +1.4% |    +5 | 64.6% → 60.2% | 350 → 355 | `distance(Double[], Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % |       Samples | Callee                                               | Location                                      |
| -----: | ----: | -----: | ------------: | ---------------------------------------------------- | --------------------------------------------- |
|  +4.4% |   +48 | 100.0% | 1,084 → 1,132 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % |       Samples | Callee                                                    | Location                                      |
| -----: | ----: | ------------: | ------------: | --------------------------------------------------------- | --------------------------------------------- |
|  +2.7% |   +37 | 99.5% → 99.0% | 1,381 → 1,418 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  +8.8% |   +35 | 28.5% → 30.1% |     396 → 431 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|    new |    +3 |   0.0% → 0.2% |         0 → 3 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`      |
|    new |    +1 |   0.0% → 0.1% |         0 → 1 | `uncompensate()`                                          | `java.util.concurrent.ForkJoinPool`           |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % |       Samples | Callee                 | Location                            |
| -----: | ----: | -----: | ------------: | ---------------------- | ----------------------------------- |
|  +3.2% |   +44 | 100.0% | 1,388 → 1,432 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|  Change | Delta |             % |       Samples | Callee                           | Location                                                   |
| ------: | ----: | ------------: | ------------: | -------------------------------- | ---------------------------------------------------------- |
|   +9.7% |   +74 | 53.9% → 57.5% |     762 → 836 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +3.2% |   +44 | 98.2% → 98.4% | 1,388 → 1,432 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
|   -6.3% |   -39 | 43.6% → 39.7% |     616 → 577 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -9.5% |   -22 | 16.3% → 14.4% |     231 → 209 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change | Delta |      % |       Samples | Callee      | Location                                               |
| -----: | ----: | -----: | ------------: | ----------- | ------------------------------------------------------ |
|  +2.9% |   +41 | 100.0% | 1,414 → 1,455 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |           % |       Samples | Callee      | Location                                            |
| ------: | ----: | ----------: | ------------: | ----------- | --------------------------------------------------- |
|   +2.9% |   +41 |       99.9% | 1,414 → 1,455 | `exec()`    | `java.util.concurrent.RecursiveTask`                |
|  -20.0% |    -4 | 1.4% → 1.1% |       20 → 16 | `exec()`    | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
| +400.0% |    +4 | 0.1% → 0.3% |         1 → 5 | `setDone()` | `java.util.concurrent.ForkJoinTask`                 |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |              % |       Samples | Callee     | Location                            |
| -----: | ----: | -------------: | ------------: | ---------- | ----------------------------------- |
|  +2.8% |   +38 | 99.9% → 100.0% | 1,380 → 1,418 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % |   Samples | Callee                         | Location                            |
| ------: | ----: | ------------: | --------: | ------------------------------ | ----------------------------------- |
|   +8.9% |   +35 | 98.5% → 99.1% | 393 → 428 | `doExec()`                     | `java.util.concurrent.ForkJoinTask` |
| +100.0% |    +1 |   0.3% → 0.5% |     1 → 2 | `tryCompensate(long, boolean)` | `java.util.concurrent.ForkJoinPool` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % | Samples | Callee                              | Location              |
| -----: | ----: | ------------: | ------: | ----------------------------------- | --------------------- |
| -14.3% |    -5 | 17.8% → 13.6% | 35 → 30 | `add(Object)`                       | `java.util.ArrayList` |
|  +3.0% |    +2 | 33.5% → 30.9% | 66 → 68 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`   |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000088011fece0`)

|  Change | Delta |            % | Samples | Callee                               | Location                                                   |
| ------: | ----: | -----------: | ------: | ------------------------------------ | ---------------------------------------------------------- |
| removed |    -2 | 22.2% → 0.0% |   2 → 0 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |            % | Samples | Callee                                                                                       | Location                                  |
| -----: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
|    new |    +7 | 0.0% → 77.8% |   0 → 7 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
|    new |    +2 | 0.0% → 22.2% |   0 → 2 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `unpark(Thread)` (`java.util.concurrent.locks.LockSupport`)

| Change | Delta |            % | Samples | Callee           | Location                   |
| -----: | ----: | -----------: | ------: | ---------------- | -------------------------- |
|    new |    +4 | 0.0% → 57.1% |   0 → 4 | `unpark(Object)` | `jdk.internal.misc.Unsafe` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|  Change | Delta |             % | Samples | Callee                               | Location                            |
| ------: | ----: | ------------: | ------: | ------------------------------------ | ----------------------------------- |
|  +37.5% |    +3 | 88.9% → 78.6% |  8 → 11 | `invoke(Object, Object[])`           | `java.lang.reflect.Method`          |
| +200.0% |    +2 | 11.1% → 21.4% |   1 → 3 | `createClassLoaderForModule(String)` | `org.renaissance.core.ModuleLoader` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

| Change | Delta |      % | Samples | Callee                                                      | Location                        |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------- | ------------------------------- |
| +55.6% |    +5 | 100.0% |  9 → 14 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.core.Launcher`)

| Change | Delta |      % | Samples | Callee                                 | Location                        |
| -----: | ----: | -----: | ------: | -------------------------------------- | ------------------------------- |
| +55.6% |    +5 | 100.0% |  9 → 14 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |             % | Samples | Callee                                                                        | Location                                    |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| +50.0% |    +3 | 85.7% → 81.8% |   6 → 9 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |
|    new |    +1 |   0.0% → 9.1% |   0 → 1 | `<init>(Map)`                                                                 | `org.renaissance.harness.ConfigParser`      |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|  Change | Delta |              % | Samples | Callee              | Location                                    |
| ------: | ----: | -------------: | ------: | ------------------- | ------------------------------------------- |
|  +57.1% |    +4 | 87.5% → 100.0% |  7 → 11 | `main(String[])`    | `org.renaissance.harness.RenaissanceSuite$` |
| removed |    -1 |   12.5% → 0.0% |   1 → 0 | `loadClass(String)` | `java.lang.ClassLoader`                     |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000880117c3b8`)

|  Change | Delta |             % | Samples | Callee                                                                                                                 | Location                                    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
|     new |    +9 | 0.0% → 100.0% |   0 → 9 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
| removed |    -6 | 100.0% → 0.0% |   6 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |      % | Samples | Callee               | Location                          |
| -----: | ----: | -----: | ------: | -------------------- | --------------------------------- |
| +50.0% |    +3 | 100.0% |   6 → 9 | `foreach(Function1)` | `scala.collection.immutable.List` |

##### `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |              % | Samples | Callee                        | Location                                                           |
| -----: | ----: | -------------: | ------: | ----------------------------- | ------------------------------------------------------------------ |
| +50.0% |    +2 | 100.0% → 85.7% |   4 → 6 | `generateData(int, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                        |
|    new |    +1 |   0.0% → 14.3% |   0 → 1 | `toCsvRows(Function)`         | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

| Change | Delta |      % | Samples | Callee                             | Location                                  |
| -----: | ----: | -----: | ------: | ---------------------------------- | ----------------------------------------- |
| +75.0% |    +3 | 100.0% |   4 → 7 | `setUpBeforeAll(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |             % | Samples | Callee                              | Location            |
| -----: | ----: | ------------: | ------: | ----------------------------------- | ------------------- |
| +25.0% |    +2 | 88.9% → 83.3% |  8 → 10 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000088011fef30`)

| Change | Delta |      % | Samples | Callee                              | Location                                    |
| -----: | ----: | -----: | ------: | ----------------------------------- | ------------------------------------------- |
| +33.3% |    +3 | 100.0% |  9 → 12 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `extractResource(String, Path)` (`org.renaissance.core.ResourceUtils`)

| Change | Delta |              % | Samples | Callee                                  | Location              |
| -----: | ----: | -------------: | ------: | --------------------------------------- | --------------------- |
| +33.3% |    +1 | 100.0% → 80.0% |   3 → 4 | `copy(InputStream, Path, CopyOption[])` | `java.nio.file.Files` |
|    new |    +1 |   0.0% → 20.0% |   0 → 1 | `getResourceAsStream(String)`           | `java.lang.Class`     |

##### `extractResources(Iterable, Path)` (`org.renaissance.core.ResourceUtils`)

| Change | Delta |      % | Samples | Callee                          | Location                             |
| -----: | ----: | -----: | ------: | ------------------------------- | ------------------------------------ |
| +66.7% |    +2 | 100.0% |   3 → 5 | `extractResource(String, Path)` | `org.renaissance.core.ResourceUtils` |

##### `accept(Object)` (`java.util.stream.ReduceOps$3ReducingSink`)

| Change | Delta |            % | Samples | Callee                   | Location                                                 |
| -----: | ----: | -----------: | ------: | ------------------------ | -------------------------------------------------------- |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `accept(Object, Object)` | `java.util.stream.Collectors$$Lambda.0x00000088010e3e58` |

##### `signalWaiters()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % | Samples | Callee           | Location                                 |
| -----: | ----: | ------------: | ------: | ---------------- | ---------------------------------------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `unpark(Thread)` | `java.util.concurrent.locks.LockSupport` |

##### `setDone()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |      % | Samples | Callee            | Location                            |
| ------: | ----: | -----: | ------: | ----------------- | ----------------------------------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `signalWaiters()` | `java.util.concurrent.ForkJoinTask` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000008801001c00`)

| Change | Delta |      % | Samples | Callee           | Location                                   |
| -----: | ----: | -----: | ------: | ---------------- | ------------------------------------------ |
| +37.5% |    +3 | 100.0% |  8 → 11 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000008801082400`)

| Change | Delta |      % | Samples | Callee                         | Location                                             |
| -----: | ----: | -----: | ------: | ------------------------------ | ---------------------------------------------------- |
| +37.5% |    +3 | 100.0% |  8 → 11 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000008801001c00` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change | Delta |      % | Samples | Callee                           | Location                                            |
| -----: | ----: | -----: | ------: | -------------------------------- | --------------------------------------------------- |
| +37.5% |    +3 | 100.0% |  8 → 11 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000008801082400` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % | Samples | Callee                                           | Location                           |
| -----: | ----: | -----: | ------: | ------------------------------------------------ | ---------------------------------- |
| +37.5% |    +3 | 100.0% |  8 → 11 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % | Samples | Callee                         | Location                                          |
| -----: | ----: | -----: | ------: | ------------------------------ | ------------------------------------------------- |
| +37.5% |    +3 | 100.0% |  8 → 11 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % |   Samples | Callee                           | Location                                                  |
| -----: | ----: | ------------: | --------: | -------------------------------- | --------------------------------------------------------- |
|  -4.1% |   -22 | 87.3% → 89.4% | 538 → 516 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Callee              | Location                                                  |
| -----: | ----: | -----: | --------: | ------------------- | --------------------------------------------------------- |
|  -6.3% |   -39 | 100.0% | 616 → 577 | `vectorSum()`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  -6.3% |   -39 | 100.0% | 616 → 577 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Callee     | Location                            |
| -----: | ----: | -----: | --------: | ---------- | ----------------------------------- |
| -10.8% |   -26 | 100.0% | 241 → 215 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % |   Samples | Callee     | Location                            |
| -----: | ----: | -----: | --------: | ---------- | ----------------------------------- |
|  -9.7% |   -25 | 100.0% | 257 → 232 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |             % |   Samples | Callee          | Location                                               |
| -----: | ----: | ------------: | --------: | --------------- | ------------------------------------------------------ |
| -10.8% |   -26 | 99.6% → 99.1% | 241 → 215 | `average(List)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Callee                     | Location                                               |
| -----: | ----: | -----: | --------: | -------------------------- | ------------------------------------------------------ |
|  -9.4% |   -22 | 100.0% | 233 → 211 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  -9.5% |   -22 |  99.1% | 231 → 209 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % | Samples | Callee     | Location                            |
| -----: | ----: | -----: | ------: | ---------- | ----------------------------------- |
| -23.3% |    -7 | 100.0% | 30 → 23 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |            % | Samples | Callee                                                                                       | Location                                  |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
| removed |    -4 | 66.7% → 0.0% |   4 → 0 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
| removed |    -2 | 33.3% → 0.0% |   2 → 0 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

| Change | Delta |      % | Samples | Callee   | Location                                                               |
| -----: | ----: | -----: | ------: | -------- | ---------------------------------------------------------------------- |
| -26.1% |    -6 | 100.0% | 23 → 17 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000088011fdf70` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000088011fdf70`)

| Change | Delta |      % | Samples | Callee                         | Location                                    |
| -----: | ----: | -----: | ------: | ------------------------------ | ------------------------------------------- |
| -19.2% |    -5 | 100.0% | 26 → 21 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `grow(int)` (`java.util.ArrayList`)

| Change | Delta |              % | Samples | Callee                  | Location           |
| -----: | ----: | -------------: | ------: | ----------------------- | ------------------ |
| -14.3% |    -5 | 100.0% → 96.8% | 35 → 30 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `grow()` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Callee      | Location              |
| -----: | ----: | -----: | ------: | ----------- | --------------------- |
| -11.4% |    -4 | 100.0% | 35 → 31 | `grow(int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Callee   | Location              |
| -----: | ----: | -----: | ------: | -------- | --------------------- |
| -11.4% |    -4 | 100.0% | 35 → 31 | `grow()` | `java.util.ArrayList` |

##### `add(Object)` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Callee                       | Location              |
| -----: | ----: | -----: | ------: | ---------------------------- | --------------------- |
| -11.4% |    -4 | 100.0% | 35 → 31 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `evaluate(Spliterator, boolean, IntFunction)` (`java.util.stream.AbstractPipeline`)

| Change | Delta |      % | Samples | Callee                               | Location                            |
| -----: | ----: | -----: | ------: | ------------------------------------ | ----------------------------------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `evaluateToArrayNode(IntFunction)` (`java.util.stream.AbstractPipeline`)

| Change | Delta |      % | Samples | Callee                                        | Location                            |
| -----: | ----: | -----: | ------: | --------------------------------------------- | ----------------------------------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `evaluate(Spliterator, boolean, IntFunction)` | `java.util.stream.AbstractPipeline` |

##### `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`)

| Change | Delta |      % | Samples | Callee                             | Location                            |
| -----: | ----: | -----: | ------: | ---------------------------------- | ----------------------------------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `evaluateToArrayNode(IntFunction)` | `java.util.stream.AbstractPipeline` |

##### `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % | Samples | Callee                 | Location                             |
| ------: | ----: | ------------: | ------: | ---------------------- | ------------------------------------ |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `toArray(IntFunction)` | `java.util.stream.ReferencePipeline` |

##### `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000003011818d8`)

|  Change | Delta |             % | Samples | Callee                                           | Location                                    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |             % | Samples | Callee                    | Location                                                  |
| ------: | ----: | ------------: | ------: | ------------------------- | --------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `add(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |             % | Samples | Callee                               | Location                                                  |
| ------: | ----: | ------------: | ------: | ------------------------------------ | --------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change | Delta |             % | Samples | Callee            | Location                                    |
| ------: | ----: | ------------: | ------: | ----------------- | ------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change | Delta |             % | Samples | Callee                     | Location                                               |
| ------: | ----: | ------------: | ------: | -------------------------- | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `next()` (`java.util.HashMap$EntryIterator`)

|  Change | Delta |             % | Samples | Callee       | Location                          |
| ------: | ----: | ------------: | ------: | ------------ | --------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `nextNode()` | `java.util.HashMap$HashIterator`  |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `next()`     | `java.util.HashMap$EntryIterator` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |            % | Samples | Callee   | Location                                 |
| ------: | ----: | -----------: | ------: | -------- | ---------------------------------------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `park()` | `java.util.concurrent.locks.LockSupport` |

##### `<init>(Map)` (`java.util.HashMap`)

| Change | Delta |              % | Samples | Callee                        | Location            |
| -----: | ----: | -------------: | ------: | ----------------------------- | ------------------- |
| -25.0% |    -1 | 80.0% → 100.0% |   4 → 3 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `checkForSpecialAttributes()` (`java.util.jar.JarFile`)

|  Change | Delta |             % | Samples | Callee                                  | Location                |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `match(byte[], byte[], byte[], byte[])` | `java.util.jar.JarFile` |

##### `hasClassPathAttribute()` (`java.util.jar.JarFile`)

|  Change | Delta |             % | Samples | Callee                        | Location                |
| ------: | ----: | ------------: | ------: | ----------------------------- | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `checkForSpecialAttributes()` | `java.util.jar.JarFile` |

##### `jarFileHasClassPathAttribute(JarFile)` (`java.util.jar.JavaUtilJarAccessImpl`)

|  Change | Delta |             % | Samples | Callee                    | Location                |
| ------: | ----: | ------------: | ------: | ------------------------- | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `hasClassPathAttribute()` | `java.util.jar.JarFile` |

##### `getClassPath()` (`jdk.internal.loader.URLClassPath$JarLoader`)

|  Change | Delta |             % | Samples | Callee                                  | Location                              |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `jarFileHasClassPathAttribute(JarFile)` | `java.util.jar.JavaUtilJarAccessImpl` |

# Allocated heap profile diff

Allocated 37.8 GiB → 37.4 GiB (-479.392 MiB, -1.2%) over 1,911 samples → 2,100 samples (20.3 MiB → 18.2 MiB per sample).

| Category         | Change |        Delta |             % |                Size |       Samples |
| ---------------- | -----: | -----------: | ------------: | ------------------: | ------------: |
| Standard library |  -2.0% | -726.601 MiB | 95.3% → 94.6% | 36.1 GiB → 35.3 GiB | 1,808 → 1,968 |
| Ours             | +13.5% | +247.209 MiB |   4.7% → 5.4% | 1.79 GiB → 2.03 GiB |     101 → 131 |
| Unknown          | -15.9% |       -360 B |         <0.1% | 2.21 KiB → 1.86 KiB |         2 → 1 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|   Change |        Delta |            % |                Size | Samples | Function                                     | Location                                                   |
| -------: | -----------: | -----------: | ------------------: | ------: | -------------------------------------------- | ---------------------------------------------------------- |
| +5832.7% | +131.328 MiB | <0.1% → 0.3% |  2.25 MiB → 134 MiB |   1 → 6 | `merge(Map, Map)`                            | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|   +13.6% | +130.447 MiB |  2.5% → 2.8% |  957 MiB → 1.06 GiB | 60 → 77 | `findNearestCentroid()`                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +1037.4% | +115.424 MiB | <0.1% → 0.3% |  11.1 MiB → 127 MiB |   3 → 5 | `vectorSum()`                                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|      new |  +94.208 MiB |  0.0% → 0.2% |      0 B → 94.2 MiB |   0 → 1 | `collectGarbage(String)`                     | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`   |
|   +15.4% |  +32.716 MiB |  0.5% → 0.6% |   213 MiB → 246 MiB | 13 → 15 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                                        |
| +1244.7% |  +28.275 MiB | <0.1% → 0.1% | 2.27 MiB → 30.5 MiB |  6 → 10 | `lambda$generateData$4(int)`                 | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  +163.8% |  +14.849 MiB | <0.1% → 0.1% | 9.07 MiB → 23.9 MiB | 25 → 36 | `valueOf(double)`                            | `java.lang.Double`                                         |
|    +7.6% |   +9.072 MiB |         0.3% |   120 MiB → 129 MiB |   2 → 6 | `lambda$collectClusters$0(Double[])`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +253.2% |   +7.726 MiB |        <0.1% | 3.05 MiB → 10.8 MiB |  9 → 16 | `mapToObj(IntFunction, int)`                 | `java.util.stream.IntPipeline`                             |
|  +209.7% |   +6.776 MiB |        <0.1% |   3.23 MiB → 10 MiB |  9 → 15 | `intStream(Spliterator$OfInt, boolean)`      | `java.util.stream.StreamSupport`                           |
|  +469.0% |   +2.728 MiB |        <0.1% |  596 KiB → 3.31 MiB |   2 → 5 | `opWrapSink(int, Sink)`                      | `java.util.stream.IntPipeline$1`                           |
|      new |   +2.456 MiB | 0.0% → <0.1% |      0 B → 2.46 MiB |   0 → 4 | `allocateInstance(Object)`                   | `java.lang.invoke.DirectMethodHandle`                      |
|   +17.1% |   +2.286 MiB |        <0.1% | 13.4 MiB → 15.7 MiB | 27 → 39 | `copyOf(byte[], int)`                        | `java.util.Arrays`                                         |
|  +134.4% |   +2.058 MiB |        <0.1% | 1.53 MiB → 3.59 MiB |   4 → 9 | `<init>(InputStream, Inflater, int)`         | `java.util.zip.InflaterInputStream`                        |
|    +2.1% |   +1.337 MiB |         0.2% | 64.7 MiB → 66.1 MiB |   8 → 5 | `grow(int)`                                  | `java.util.ArrayList`                                      |
|      new |   +1.153 MiB | 0.0% → <0.1% |      0 B → 1.15 MiB |   0 → 3 | `addConstantUtf8(String)`                    | `jdk.internal.org.objectweb.asm.SymbolTable`               |
|      new | +926.281 KiB | 0.0% → <0.1% |       0 B → 926 KiB |   0 → 2 | `readNBytes(int)`                            | `java.io.InputStream`                                      |
|      new | +681.976 KiB | 0.0% → <0.1% |       0 B → 682 KiB |   0 → 1 | `findClass(String)`                          | `java.net.URLClassLoader`                                  |
|      new | +537.406 KiB | 0.0% → <0.1% |       0 B → 537 KiB |   0 → 1 | `<init>(int)`                                | `jdk.internal.org.objectweb.asm.ByteVector`                |
|      new | +410.695 KiB | 0.0% → <0.1% |       0 B → 411 KiB |   0 → 1 | `toString()`                                 | `java.lang.StringBuilder`                                  |

##### Standard library

|  Change |        Delta |            % |                Size | Samples | Function                                                                        | Location                                     |
| ------: | -----------: | -----------: | ------------------: | ------: | ------------------------------------------------------------------------------- | -------------------------------------------- |
|  +15.4% |  +32.716 MiB |  0.5% → 0.6% |   213 MiB → 246 MiB | 13 → 15 | `newNode(int, Object, Object, HashMap$Node)`                                    | `java.util.HashMap`                          |
| +163.8% |  +14.849 MiB | <0.1% → 0.1% | 9.07 MiB → 23.9 MiB | 25 → 36 | `valueOf(double)`                                                               | `java.lang.Double`                           |
| +253.2% |   +7.726 MiB |        <0.1% | 3.05 MiB → 10.8 MiB |  9 → 16 | `mapToObj(IntFunction, int)`                                                    | `java.util.stream.IntPipeline`               |
| +209.7% |   +6.776 MiB |        <0.1% |   3.23 MiB → 10 MiB |  9 → 15 | `intStream(Spliterator$OfInt, boolean)`                                         | `java.util.stream.StreamSupport`             |
| +469.0% |   +2.728 MiB |        <0.1% |  596 KiB → 3.31 MiB |   2 → 5 | `opWrapSink(int, Sink)`                                                         | `java.util.stream.IntPipeline$1`             |
|     new |   +2.456 MiB | 0.0% → <0.1% |      0 B → 2.46 MiB |   0 → 4 | `allocateInstance(Object)`                                                      | `java.lang.invoke.DirectMethodHandle`        |
|  +17.1% |   +2.286 MiB |        <0.1% | 13.4 MiB → 15.7 MiB | 27 → 39 | `copyOf(byte[], int)`                                                           | `java.util.Arrays`                           |
| +134.4% |   +2.058 MiB |        <0.1% | 1.53 MiB → 3.59 MiB |   4 → 9 | `<init>(InputStream, Inflater, int)`                                            | `java.util.zip.InflaterInputStream`          |
|   +2.1% |   +1.337 MiB |         0.2% | 64.7 MiB → 66.1 MiB |   8 → 5 | `grow(int)`                                                                     | `java.util.ArrayList`                        |
|     new |   +1.153 MiB | 0.0% → <0.1% |      0 B → 1.15 MiB |   0 → 3 | `addConstantUtf8(String)`                                                       | `jdk.internal.org.objectweb.asm.SymbolTable` |
|     new | +926.281 KiB | 0.0% → <0.1% |       0 B → 926 KiB |   0 → 2 | `readNBytes(int)`                                                               | `java.io.InputStream`                        |
|     new | +681.976 KiB | 0.0% → <0.1% |       0 B → 682 KiB |   0 → 1 | `findClass(String)`                                                             | `java.net.URLClassLoader`                    |
|     new | +537.406 KiB | 0.0% → <0.1% |       0 B → 537 KiB |   0 → 1 | `<init>(int)`                                                                   | `jdk.internal.org.objectweb.asm.ByteVector`  |
|     new | +410.695 KiB | 0.0% → <0.1% |       0 B → 411 KiB |   0 → 1 | `toString()`                                                                    | `java.lang.StringBuilder`                    |
|     new | +387.656 KiB | 0.0% → <0.1% |       0 B → 388 KiB |   0 → 1 | `compile()`                                                                     | `java.util.regex.Pattern`                    |
|     new |  +387.64 KiB | 0.0% → <0.1% |       0 B → 388 KiB |   0 → 1 | `visitMethod(int, String, String, String, String[])`                            | `jdk.internal.org.objectweb.asm.ClassWriter` |
|     new | +387.093 KiB | 0.0% → <0.1% |       0 B → 387 KiB |   0 → 1 | `<init>(ClassWriter)`                                                           | `jdk.internal.org.objectweb.asm.SymbolTable` |
| +971.2% | +368.734 KiB |        <0.1% |    38 KiB → 407 KiB |       1 | `initClassName()`                                                               | `java.lang.Class`                            |
|   +3.7% |  +85.406 KiB |        <0.1% | 2.27 MiB → 2.36 MiB |   6 → 5 | `range(int, int)`                                                               | `java.util.stream.IntStream`                 |
|  +20.1% |  +72.492 KiB |        <0.1% |   361 KiB → 434 KiB |       1 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                      |

##### Ours

|   Change |        Delta |            % |                Size | Samples | Function                             | Location                                                   |
| -------: | -----------: | -----------: | ------------------: | ------: | ------------------------------------ | ---------------------------------------------------------- |
| +5832.7% | +131.328 MiB | <0.1% → 0.3% |  2.25 MiB → 134 MiB |   1 → 6 | `merge(Map, Map)`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|   +13.6% | +130.447 MiB |  2.5% → 2.8% |  957 MiB → 1.06 GiB | 60 → 77 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +1037.4% | +115.424 MiB | <0.1% → 0.3% |  11.1 MiB → 127 MiB |   3 → 5 | `vectorSum()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|      new |  +94.208 MiB |  0.0% → 0.2% |      0 B → 94.2 MiB |   0 → 1 | `collectGarbage(String)`             | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`   |
| +1244.7% |  +28.275 MiB | <0.1% → 0.1% | 2.27 MiB → 30.5 MiB |  6 → 10 | `lambda$generateData$4(int)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|    +7.6% |   +9.072 MiB |         0.3% |   120 MiB → 129 MiB |   2 → 6 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    +2.0% | +355.445 KiB |        <0.1% | 17.8 MiB → 18.1 MiB |   4 → 3 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|    +5.0% | +264.343 KiB |        <0.1% | 5.13 MiB → 5.38 MiB |   1 → 3 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

#### Improvements

Functions with the largest decrease in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |        Delta |             % |                Size |       Samples | Function                       | Location                                                   |
| ------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------ | ---------------------------------------------------------- |
|   -0.9% | -328.313 MiB | 92.7% → 93.0% | 35.1 GiB → 34.8 GiB | 1,645 → 1,781 | `copyOf(Object[], int)`        | `java.util.Arrays`                                         |
|  -65.6% | -195.522 MiB |   0.8% → 0.3% |   298 MiB → 103 MiB |         7 → 9 | `collectClusters(int[])`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -50.4% | -191.906 MiB |   1.0% → 0.5% |   381 MiB → 189 MiB |         5 → 4 | `resize()`                     | `java.util.HashMap`                                        |
| removed | -159.013 MiB |   0.4% → 0.0% |       159 MiB → 0 B |         1 → 0 | `read(InputStream, String)`    | `java.util.jar.Manifest`                                   |
| removed |  -85.427 MiB |   0.2% → 0.0% |      85.4 MiB → 0 B |         1 → 0 | `entrySet()`                   | `java.util.HashMap`                                        |
|  -23.1% |  -34.107 MiB |   0.4% → 0.3% |   148 MiB → 114 MiB |         8 → 5 | `lambda$merge$6(List, List)`   | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -11.8% |  -31.884 MiB |   0.7% → 0.6% |   269 MiB → 237 MiB |         7 → 6 | `createSubtask(int, int)`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -94.6% |  -21.479 MiB |  0.1% → <0.1% | 22.7 MiB → 1.23 MiB |             1 | `iterator()`                   | `java.util.HashMap$EntrySet`                               |
| removed |  -10.462 MiB |  <0.1% → 0.0% |      10.5 MiB → 0 B |        16 → 0 | `copyOf(Object[], int, Class)` | `java.util.Arrays`                                         |
| removed | -835.593 KiB |  <0.1% → 0.0% |       836 KiB → 0 B |         1 → 0 | `result()`                     | `scala.collection.immutable.VectorBuilder`                 |
|  -32.6% | -751.046 KiB |         <0.1% | 2.25 MiB → 1.52 MiB |         5 → 4 | `allocateInstance(Class)`      | `jdk.internal.misc.Unsafe`                                 |
|  -65.2% | -516.492 KiB |         <0.1% |   792 KiB → 276 KiB |         2 → 1 | `newString(byte[], int, int)`  | `java.lang.StringLatin1`                                   |
| removed | -414.875 KiB |  <0.1% → 0.0% |       415 KiB → 0 B |         1 → 0 | `getInputStream(ZipEntry)`     | `java.util.zip.ZipFile`                                    |
|  -44.5% | -411.109 KiB |         <0.1% |   923 KiB → 512 KiB |         2 → 1 | `clone()`                      | `java.lang.Object`                                         |
| removed | -407.671 KiB |  <0.1% → 0.0% |       408 KiB → 0 B |         1 → 0 | `transferTo(OutputStream)`     | `java.io.InputStream`                                      |
| removed | -398.773 KiB |  <0.1% → 0.0% |       399 KiB → 0 B |         1 → 0 | `register(Object, Runnable)`   | `java.lang.ref.Cleaner`                                    |
| removed | -395.265 KiB |  <0.1% → 0.0% |       395 KiB → 0 B |         1 → 0 | `enlarge(int)`                 | `jdk.internal.org.objectweb.asm.ByteVector`                |
| removed |  -395.14 KiB |  <0.1% → 0.0% |       395 KiB → 0 B |         1 → 0 | `toArray()`                    | `java.util.stream.IntPipeline`                             |
| removed | -391.671 KiB |  <0.1% → 0.0% |       392 KiB → 0 B |         1 → 0 | `parseName(byte[], int)`       | `java.util.jar.Manifest`                                   |
| removed | -391.664 KiB |  <0.1% → 0.0% |       392 KiB → 0 B |         1 → 0 | `<init>(int)`                  | `java.lang.AbstractStringBuilder`                          |

##### Standard library

|  Change |        Delta |             % |                 Size |       Samples | Function                                   | Location                                     |
| ------: | -----------: | ------------: | -------------------: | ------------: | ------------------------------------------ | -------------------------------------------- |
|   -0.9% | -328.313 MiB | 92.7% → 93.0% |  35.1 GiB → 34.8 GiB | 1,645 → 1,781 | `copyOf(Object[], int)`                    | `java.util.Arrays`                           |
|  -50.4% | -191.906 MiB |   1.0% → 0.5% |    381 MiB → 189 MiB |         5 → 4 | `resize()`                                 | `java.util.HashMap`                          |
| removed | -159.013 MiB |   0.4% → 0.0% |        159 MiB → 0 B |         1 → 0 | `read(InputStream, String)`                | `java.util.jar.Manifest`                     |
| removed |  -85.427 MiB |   0.2% → 0.0% |       85.4 MiB → 0 B |         1 → 0 | `entrySet()`                               | `java.util.HashMap`                          |
|  -94.6% |  -21.479 MiB |  0.1% → <0.1% |  22.7 MiB → 1.23 MiB |             1 | `iterator()`                               | `java.util.HashMap$EntrySet`                 |
| removed |  -10.462 MiB |  <0.1% → 0.0% |       10.5 MiB → 0 B |        16 → 0 | `copyOf(Object[], int, Class)`             | `java.util.Arrays`                           |
| removed | -835.593 KiB |  <0.1% → 0.0% |        836 KiB → 0 B |         1 → 0 | `result()`                                 | `scala.collection.immutable.VectorBuilder`   |
|  -32.6% | -751.046 KiB |         <0.1% |  2.25 MiB → 1.52 MiB |         5 → 4 | `allocateInstance(Class)`                  | `jdk.internal.misc.Unsafe`                   |
|  -65.2% | -516.492 KiB |         <0.1% |    792 KiB → 276 KiB |         2 → 1 | `newString(byte[], int, int)`              | `java.lang.StringLatin1`                     |
| removed | -414.875 KiB |  <0.1% → 0.0% |        415 KiB → 0 B |         1 → 0 | `getInputStream(ZipEntry)`                 | `java.util.zip.ZipFile`                      |
|  -44.5% | -411.109 KiB |         <0.1% |    923 KiB → 512 KiB |         2 → 1 | `clone()`                                  | `java.lang.Object`                           |
| removed | -407.671 KiB |  <0.1% → 0.0% |        408 KiB → 0 B |         1 → 0 | `transferTo(OutputStream)`                 | `java.io.InputStream`                        |
| removed | -398.773 KiB |  <0.1% → 0.0% |        399 KiB → 0 B |         1 → 0 | `register(Object, Runnable)`               | `java.lang.ref.Cleaner`                      |
| removed | -395.265 KiB |  <0.1% → 0.0% |        395 KiB → 0 B |         1 → 0 | `enlarge(int)`                             | `jdk.internal.org.objectweb.asm.ByteVector`  |
| removed |  -395.14 KiB |  <0.1% → 0.0% |        395 KiB → 0 B |         1 → 0 | `toArray()`                                | `java.util.stream.IntPipeline`               |
| removed | -391.671 KiB |  <0.1% → 0.0% |        392 KiB → 0 B |         1 → 0 | `parseName(byte[], int)`                   | `java.util.jar.Manifest`                     |
| removed | -391.664 KiB |  <0.1% → 0.0% |        392 KiB → 0 B |         1 → 0 | `<init>(int)`                              | `java.lang.AbstractStringBuilder`            |
| removed | -390.679 KiB |  <0.1% → 0.0% |        391 KiB → 0 B |         1 → 0 | `checkResource(String, boolean, JarEntry)` | `jdk.internal.loader.URLClassPath$JarLoader` |
|  -28.0% | -389.125 KiB |         <0.1% | 1.36 MiB → 1,000 KiB |         1 → 3 | `fillInStackTrace(int)`                    | `java.lang.Throwable`                        |
| removed | -387.796 KiB |  <0.1% → 0.0% |        388 KiB → 0 B |         1 → 0 | `compress(char[], int, int)`               | `java.lang.StringUTF16`                      |

##### Ours

|  Change |        Delta |            % |              Size | Samples | Function                             | Location                                                   |
| ------: | -----------: | -----------: | ----------------: | ------: | ------------------------------------ | ---------------------------------------------------------- |
|  -65.6% | -195.522 MiB |  0.8% → 0.3% | 298 MiB → 103 MiB |   7 → 9 | `collectClusters(int[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -23.1% |  -34.107 MiB |  0.4% → 0.3% | 148 MiB → 114 MiB |   8 → 5 | `lambda$merge$6(List, List)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -11.8% |  -31.884 MiB |  0.7% → 0.6% | 269 MiB → 237 MiB |   7 → 6 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed | -387.679 KiB | <0.1% → 0.0% |     388 KiB → 0 B |   1 → 0 | `longOptTokens(String)`              | `scopt.OptionDef`                                          |
| removed | -265.679 KiB | <0.1% → 0.0% |     266 KiB → 0 B |   1 → 0 | `withBenchmarkSpecification(String)` | `org.renaissance.harness.Config`                           |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|   Change |        Delta |      % |               Size | Samples | Location                                        |
| -------: | -----------: | -----: | -----------------: | ------: | ----------------------------------------------- |
| +5832.7% | +131.328 MiB | 100.0% | 2.25 MiB → 134 MiB |   1 → 6 | `org.renaissance.jdk.concurrent.JavaKMeans:110` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |               Size | Samples | Location                                                       |
| -----: | -----------: | -----: | -----------------: | ------: | -------------------------------------------------------------- |
| +13.6% | +130.447 MiB | 100.0% | 957 MiB → 1.06 GiB | 60 → 77 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:223` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|   Change |        Delta |      % |               Size | Samples | Location                                                      |
| -------: | -----------: | -----: | -----------------: | ------: | ------------------------------------------------------------- |
| +1037.4% | +115.424 MiB | 100.0% | 11.1 MiB → 127 MiB |   3 → 5 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400` |

##### `collectGarbage(String)` (`org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`)

| Change |       Delta |             % |           Size | Samples | Location                                                    |
| -----: | ----------: | ------------: | -------------: | ------: | ----------------------------------------------------------- |
|    new | +94.208 MiB | 0.0% → 100.0% | 0 B → 94.2 MiB |   0 → 1 | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin:26` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

| Change |       Delta |      % |              Size | Samples | Location                 |
| -----: | ----------: | -----: | ----------------: | ------: | ------------------------ |
| +15.4% | +32.716 MiB | 100.0% | 213 MiB → 246 MiB | 13 → 15 | `java.util.HashMap:1909` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|   Change |       Delta |      % |                Size | Samples | Location                                       |
| -------: | ----------: | -----: | ------------------: | ------: | ---------------------------------------------- |
| +1244.7% | +28.275 MiB | 100.0% | 2.27 MiB → 30.5 MiB |  6 → 10 | `org.renaissance.jdk.concurrent.JavaKMeans:87` |

##### `valueOf(double)` (`java.lang.Double`)

|  Change |       Delta |      % |                Size | Samples | Location               |
| ------: | ----------: | -----: | ------------------: | ------: | ---------------------- |
| +163.8% | +14.849 MiB | 100.0% | 9.07 MiB → 23.9 MiB | 25 → 36 | `java.lang.Double:773` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |      Delta |      % |              Size | Samples | Location                                                       |
| -----: | ---------: | -----: | ----------------: | ------: | -------------------------------------------------------------- |
|  +7.6% | +9.072 MiB | 100.0% | 120 MiB → 129 MiB |   2 → 6 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |

##### `mapToObj(IntFunction, int)` (`java.util.stream.IntPipeline`)

|  Change |      Delta |      % |                Size | Samples | Location                           |
| ------: | ---------: | -----: | ------------------: | ------: | ---------------------------------- |
| +253.2% | +7.726 MiB | 100.0% | 3.05 MiB → 10.8 MiB |  9 → 16 | `java.util.stream.IntPipeline:174` |

##### `intStream(Spliterator$OfInt, boolean)` (`java.util.stream.StreamSupport`)

|  Change |      Delta |      % |              Size | Samples | Location                             |
| ------: | ---------: | -----: | ----------------: | ------: | ------------------------------------ |
| +209.7% | +6.776 MiB | 100.0% | 3.23 MiB → 10 MiB |  9 → 15 | `java.util.stream.StreamSupport:138` |

##### `opWrapSink(int, Sink)` (`java.util.stream.IntPipeline$1`)

|  Change |      Delta |      % |               Size | Samples | Location                             |
| ------: | ---------: | -----: | -----------------: | ------: | ------------------------------------ |
| +469.0% | +2.728 MiB | 100.0% | 596 KiB → 3.31 MiB |   2 → 5 | `java.util.stream.IntPipeline$1:177` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

| Change |      Delta |             % |           Size | Samples | Location                                  |
| -----: | ---------: | ------------: | -------------: | ------: | ----------------------------------------- |
|    new | +2.456 MiB | 0.0% → 100.0% | 0 B → 2.46 MiB |   0 → 4 | `java.lang.invoke.DirectMethodHandle:501` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

| Change |      Delta |      % |                Size | Samples | Location                |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------- |
| +17.1% | +2.286 MiB | 100.0% | 13.4 MiB → 15.7 MiB | 27 → 39 | `java.util.Arrays:3541` |

##### `<init>(InputStream, Inflater, int)` (`java.util.zip.InflaterInputStream`)

|  Change |      Delta |      % |                Size | Samples | Location                               |
| ------: | ---------: | -----: | ------------------: | ------: | -------------------------------------- |
| +134.4% | +2.058 MiB | 100.0% | 1.53 MiB → 3.59 MiB |   4 → 9 | `java.util.zip.InflaterInputStream:89` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |      Delta |      % |                Size | Samples | Location                  |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------- |
|  +2.1% | +1.337 MiB | 100.0% | 64.7 MiB → 66.1 MiB |   8 → 5 | `java.util.ArrayList:239` |

##### `addConstantUtf8(String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change |      Delta |             % |           Size | Samples | Location                                         |
| -----: | ---------: | ------------: | -------------: | ------: | ------------------------------------------------ |
|    new | +1.153 MiB | 0.0% → 100.0% | 0 B → 1.15 MiB |   0 → 3 | `jdk.internal.org.objectweb.asm.SymbolTable:807` |

##### `readNBytes(int)` (`java.io.InputStream`)

| Change |        Delta |             % |          Size | Samples | Location                  |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------- |
|    new | +926.281 KiB | 0.0% → 100.0% | 0 B → 926 KiB |   0 → 2 | `java.io.InputStream:448` |

##### `findClass(String)` (`java.net.URLClassLoader`)

| Change |        Delta |             % |          Size | Samples | Location                      |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------------- |
|    new | +681.976 KiB | 0.0% → 100.0% | 0 B → 682 KiB |   0 → 1 | `java.net.URLClassLoader:420` |

##### `<init>(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

| Change |        Delta |             % |          Size | Samples | Location                                       |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------------------------------- |
|    new | +537.406 KiB | 0.0% → 100.0% | 0 B → 537 KiB |   0 → 1 | `jdk.internal.org.objectweb.asm.ByteVector:87` |

##### `toString()` (`java.lang.StringBuilder`)

| Change |        Delta |             % |          Size | Samples | Location                      |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------------- |
|    new | +410.695 KiB | 0.0% → 100.0% | 0 B → 411 KiB |   0 → 1 | `java.lang.StringBuilder:475` |

##### `compile()` (`java.util.regex.Pattern`)

| Change |        Delta |             % |          Size | Samples | Location                       |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------ |
|    new | +387.656 KiB | 0.0% → 100.0% | 0 B → 388 KiB |   0 → 1 | `java.util.regex.Pattern:1915` |

##### `visitMethod(int, String, String, String, String[])` (`jdk.internal.org.objectweb.asm.ClassWriter`)

| Change |       Delta |             % |          Size | Samples | Location                                         |
| -----: | ----------: | ------------: | ------------: | ------: | ------------------------------------------------ |
|    new | +387.64 KiB | 0.0% → 100.0% | 0 B → 388 KiB |   0 → 1 | `jdk.internal.org.objectweb.asm.ClassWriter:500` |

##### `<init>(ClassWriter)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change |        Delta |             % |          Size | Samples | Location                                         |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------ |
|    new | +387.093 KiB | 0.0% → 100.0% | 0 B → 387 KiB |   0 → 1 | `jdk.internal.org.objectweb.asm.SymbolTable:156` |

##### `range(int, int)` (`java.util.stream.IntStream`)

| Change |       Delta |      % |                Size | Samples | Location                          |
| -----: | ----------: | -----: | ------------------: | ------: | --------------------------------- |
|  +3.7% | +85.406 KiB | 100.0% | 2.27 MiB → 2.36 MiB |   6 → 5 | `java.util.stream.IntStream:1083` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |        Delta |      % |                Size | Samples | Location                                                      |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------------------------------------- |
|  +2.0% | +355.445 KiB | 100.0% | 17.8 MiB → 18.1 MiB |   4 → 3 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |        Delta |      % |                Size | Samples | Location                                                      |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------------------------------------- |
|  +5.0% | +264.343 KiB | 100.0% | 5.13 MiB → 5.38 MiB |   1 → 3 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:430` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |        Delta |      % |                Size |       Samples | Location                |
| -----: | -----------: | -----: | ------------------: | ------------: | ----------------------- |
|  -0.9% | -328.313 MiB | 100.0% | 35.1 GiB → 34.8 GiB | 1,645 → 1,781 | `java.util.Arrays:3482` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |              Size | Samples | Location                                                       |
| -----: | -----------: | -----: | ----------------: | ------: | -------------------------------------------------------------- |
| -65.6% | -195.522 MiB | 100.0% | 298 MiB → 103 MiB |   7 → 9 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:209` |

##### `resize()` (`java.util.HashMap`)

| Change |        Delta |      % |              Size | Samples | Location                |
| -----: | -----------: | -----: | ----------------: | ------: | ----------------------- |
| -50.4% | -191.906 MiB | 100.0% | 381 MiB → 189 MiB |   5 → 4 | `java.util.HashMap:710` |

##### `read(InputStream, String)` (`java.util.jar.Manifest`)

|  Change |        Delta |             % |          Size | Samples | Location                     |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------- |
| removed | -159.013 MiB | 100.0% → 0.0% | 159 MiB → 0 B |   1 → 0 | `java.util.jar.Manifest:332` |

##### `entrySet()` (`java.util.HashMap`)

|  Change |       Delta |             % |           Size | Samples | Location                 |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------------ |
| removed | -85.427 MiB | 100.0% → 0.0% | 85.4 MiB → 0 B |   1 → 0 | `java.util.HashMap:1099` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |       Delta |      % |              Size | Samples | Location                                        |
| -----: | ----------: | -----: | ----------------: | ------: | ----------------------------------------------- |
| -23.1% | -34.107 MiB | 100.0% | 148 MiB → 114 MiB |   8 → 5 | `org.renaissance.jdk.concurrent.JavaKMeans:114` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |              Size | Samples | Location                                                       |
| -----: | ----------: | -----: | ----------------: | ------: | -------------------------------------------------------------- |
| -11.8% | -31.884 MiB | 100.0% | 269 MiB → 237 MiB |   7 → 6 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261` |

##### `iterator()` (`java.util.HashMap$EntrySet`)

| Change |       Delta |      % |                Size | Samples | Location                          |
| -----: | ----------: | -----: | ------------------: | ------: | --------------------------------- |
| -94.6% | -21.479 MiB | 100.0% | 22.7 MiB → 1.23 MiB |       1 | `java.util.HashMap$EntrySet:1106` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

|  Change |       Delta |             % |           Size | Samples | Location                |
| ------: | ----------: | ------------: | -------------: | ------: | ----------------------- |
| removed | -10.462 MiB | 100.0% → 0.0% | 10.5 MiB → 0 B |  16 → 0 | `java.util.Arrays:3513` |

##### `result()` (`scala.collection.immutable.VectorBuilder`)

|  Change |        Delta |             % |          Size | Samples | Location                                        |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------------------------------- |
| removed | -835.593 KiB | 100.0% → 0.0% | 836 KiB → 0 B |   1 → 0 | `scala.collection.immutable.VectorBuilder:1897` |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

| Change |        Delta |      % |              Size | Samples | Location                     |
| -----: | -----------: | -----: | ----------------: | ------: | ---------------------------- |
| -65.2% | -516.492 KiB | 100.0% | 792 KiB → 276 KiB |   2 → 1 | `java.lang.StringLatin1:750` |

##### `getInputStream(ZipEntry)` (`java.util.zip.ZipFile`)

|  Change |        Delta |             % |          Size | Samples | Location                    |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------- |
| removed | -414.875 KiB | 100.0% → 0.0% | 415 KiB → 0 B |   1 → 0 | `java.util.zip.ZipFile:390` |

##### `transferTo(OutputStream)` (`java.io.InputStream`)

|  Change |        Delta |             % |          Size | Samples | Location                  |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------- |
| removed | -407.671 KiB | 100.0% → 0.0% | 408 KiB → 0 B |   1 → 0 | `java.io.InputStream:794` |

##### `register(Object, Runnable)` (`java.lang.ref.Cleaner`)

|  Change |        Delta |             % |          Size | Samples | Location                    |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------- |
| removed | -398.773 KiB | 100.0% → 0.0% | 399 KiB → 0 B |   1 → 0 | `java.lang.ref.Cleaner:224` |

##### `enlarge(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

|  Change |        Delta |             % |          Size | Samples | Location                                        |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------------------------------- |
| removed | -395.265 KiB | 100.0% → 0.0% | 395 KiB → 0 B |   1 → 0 | `jdk.internal.org.objectweb.asm.ByteVector:401` |

##### `toArray()` (`java.util.stream.IntPipeline`)

|  Change |       Delta |             % |          Size | Samples | Location                           |
| ------: | ----------: | ------------: | ------------: | ------: | ---------------------------------- |
| removed | -395.14 KiB | 100.0% → 0.0% | 395 KiB → 0 B |   1 → 0 | `java.util.stream.IntPipeline:562` |

##### `parseName(byte[], int)` (`java.util.jar.Manifest`)

|  Change |        Delta |             % |          Size | Samples | Location                     |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------- |
| removed | -391.671 KiB | 100.0% → 0.0% | 392 KiB → 0 B |   1 → 0 | `java.util.jar.Manifest:365` |

##### `<init>(int)` (`java.lang.AbstractStringBuilder`)

|  Change |        Delta |             % |          Size | Samples | Location                              |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------- |
| removed | -391.664 KiB | 100.0% → 0.0% | 392 KiB → 0 B |   1 → 0 | `java.lang.AbstractStringBuilder:101` |

##### `checkResource(String, boolean, JarEntry)` (`jdk.internal.loader.URLClassPath$JarLoader`)

|  Change |        Delta |             % |          Size | Samples | Location                                         |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------ |
| removed | -390.679 KiB | 100.0% → 0.0% | 391 KiB → 0 B |   1 → 0 | `jdk.internal.loader.URLClassPath$JarLoader:849` |

##### `compress(char[], int, int)` (`java.lang.StringUTF16`)

|  Change |        Delta |             % |          Size | Samples | Location                    |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------- |
| removed | -387.796 KiB | 100.0% → 0.0% | 388 KiB → 0 B |   1 → 0 | `java.lang.StringUTF16:211` |

##### `longOptTokens(String)` (`scopt.OptionDef`)

|  Change |        Delta |             % |          Size | Samples | Location              |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------- |
| removed | -387.679 KiB | 100.0% → 0.0% | 388 KiB → 0 B |   1 → 0 | `scopt.OptionDef:245` |

##### `withBenchmarkSpecification(String)` (`org.renaissance.harness.Config`)

|  Change |        Delta |             % |          Size | Samples | Location                            |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------------------- |
| removed | -265.679 KiB | 100.0% → 0.0% | 266 KiB → 0 B |   1 → 0 | `org.renaissance.harness.Config:19` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|   Change |        Delta |      % |               Size | Samples | Caller                     | Location                                                   |
| -------: | -----------: | -----: | -----------------: | ------: | -------------------------- | ---------------------------------------------------------- |
| +5832.7% | +131.328 MiB | 100.0% | 2.25 MiB → 134 MiB |   1 → 6 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |               Size | Samples | Caller              | Location                                                   |
| -----: | -----------: | -----: | -----------------: | ------: | ------------------- | ---------------------------------------------------------- |
| +13.6% | +130.447 MiB | 100.0% | 957 MiB → 1.06 GiB | 60 → 77 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|   Change |        Delta |      % |               Size | Samples | Caller              | Location                                                  |
| -------: | -----------: | -----: | -----------------: | ------: | ------------------- | --------------------------------------------------------- |
| +1037.4% | +115.424 MiB | 100.0% | 11.1 MiB → 127 MiB |   3 → 5 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `collectGarbage(String)` (`org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`)

| Change |       Delta |             % |           Size | Samples | Caller                                      | Location                                                 |
| -----: | ----------: | ------------: | -------------: | ------: | ------------------------------------------- | -------------------------------------------------------- |
|    new | +94.208 MiB | 0.0% → 100.0% | 0 B → 94.2 MiB |   0 → 1 | `afterOperationSetUp(String, int, boolean)` | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

|   Change |        Delta |             % |               Size | Samples | Caller                                          | Location            |
| -------: | -----------: | ------------: | -----------------: | ------: | ----------------------------------------------- | ------------------- |
| +1434.2% | +121.223 MiB |  4.0% → 52.8% | 8.45 MiB → 130 MiB |  4 → 10 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |
|   -43.3% |  -88.506 MiB | 96.0% → 47.2% |  205 MiB → 116 MiB |   9 → 5 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |       Delta |             % |           Size | Samples | Caller       | Location                                                               |
| ------: | ----------: | ------------: | -------------: | ------: | ------------ | ---------------------------------------------------------------------- |
|     new | +30.546 MiB | 0.0% → 100.0% | 0 B → 30.5 MiB |  0 → 10 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000088011fd960` |
| removed |  -2.271 MiB | 100.0% → 0.0% | 2.27 MiB → 0 B |   6 → 0 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000301181d48` |

##### `valueOf(double)` (`java.lang.Double`)

|  Change |       Delta |      % |                Size | Samples | Caller                                           | Location                                    |
| ------: | ----------: | -----: | ------------------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| +163.8% | +14.849 MiB | 100.0% | 9.07 MiB → 23.9 MiB | 25 → 36 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |      Delta |      % |              Size | Samples | Caller          | Location                                                                              |
| -----: | ---------: | -----: | ----------------: | ------: | --------------- | ------------------------------------------------------------------------------------- |
|  +7.6% | +9.072 MiB | 100.0% | 120 MiB → 129 MiB |   2 → 6 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000088011fece0` |

##### `mapToObj(IntFunction, int)` (`java.util.stream.IntPipeline`)

|  Change |      Delta |      % |                Size | Samples | Caller                  | Location                       |
| ------: | ---------: | -----: | ------------------: | ------: | ----------------------- | ------------------------------ |
| +253.2% | +7.726 MiB | 100.0% | 3.05 MiB → 10.8 MiB |  9 → 16 | `mapToObj(IntFunction)` | `java.util.stream.IntPipeline` |

##### `intStream(Spliterator$OfInt, boolean)` (`java.util.stream.StreamSupport`)

|  Change |      Delta |      % |              Size | Samples | Caller            | Location                     |
| ------: | ---------: | -----: | ----------------: | ------: | ----------------- | ---------------------------- |
| +209.7% | +6.776 MiB | 100.0% | 3.23 MiB → 10 MiB |  9 → 15 | `range(int, int)` | `java.util.stream.IntStream` |

##### `opWrapSink(int, Sink)` (`java.util.stream.IntPipeline$1`)

|  Change |      Delta |      % |               Size | Samples | Caller           | Location                            |
| ------: | ---------: | -----: | -----------------: | ------: | ---------------- | ----------------------------------- |
| +469.0% | +2.728 MiB | 100.0% | 596 KiB → 3.31 MiB |   2 → 5 | `wrapSink(Sink)` | `java.util.stream.AbstractPipeline` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

| Change |      Delta |             % |           Size | Samples | Caller                                       | Location                                             |
| -----: | ---------: | ------------: | -------------: | ------: | -------------------------------------------- | ---------------------------------------------------- |
|    new | +2.456 MiB | 0.0% → 100.0% | 0 B → 2.46 MiB |   0 → 4 | `newInvokeSpecial(Object, int, int, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000008801200000` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|  Change |        Delta |              % |                Size | Samples | Caller                        | Location                          |
| ------: | -----------: | -------------: | ------------------: | ------: | ----------------------------- | --------------------------------- |
|  +27.1% |    +3.34 MiB | 92.1% → 100.0% | 12.3 MiB → 15.7 MiB | 25 → 39 | `getBytes()`                  | `jdk.internal.loader.Resource`    |
| removed | -692.195 KiB |    5.1% → 0.0% |       692 KiB → 0 B |   1 → 0 | `ensureCapacity(int)`         | `java.io.ByteArrayOutputStream`   |
| removed | -387.585 KiB |    2.8% → 0.0% |       388 KiB → 0 B |   1 → 0 | `ensureCapacityInternal(int)` | `java.lang.AbstractStringBuilder` |

##### `<init>(InputStream, Inflater, int)` (`java.util.zip.InflaterInputStream`)

|  Change |      Delta |      % |                Size | Samples | Caller                                                                                  | Location                                           |
| ------: | ---------: | -----: | ------------------: | ------: | --------------------------------------------------------------------------------------- | -------------------------------------------------- |
| +134.4% | +2.058 MiB | 100.0% | 1.53 MiB → 3.59 MiB |   4 → 9 | `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, Inflater, int)` | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |      Delta |      % |                Size | Samples | Caller   | Location              |
| -----: | ---------: | -----: | ------------------: | ------: | -------- | --------------------- |
|  +2.1% | +1.337 MiB | 100.0% | 64.7 MiB → 66.1 MiB |   8 → 5 | `grow()` | `java.util.ArrayList` |

##### `addConstantUtf8(String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change |        Delta |            % |          Size | Samples | Caller                                                            | Location                                      |
| -----: | -----------: | -----------: | ------------: | ------: | ----------------------------------------------------------------- | --------------------------------------------- |
|    new | +790.382 KiB | 0.0% → 66.9% | 0 B → 790 KiB |   0 → 2 | `addConstantNameAndType(String, String)`                          | `jdk.internal.org.objectweb.asm.SymbolTable`  |
|    new | +390.695 KiB | 0.0% → 33.1% | 0 B → 391 KiB |   0 → 1 | `<init>(SymbolTable, int, String, String, String, String[], int)` | `jdk.internal.org.objectweb.asm.MethodWriter` |

##### `readNBytes(int)` (`java.io.InputStream`)

| Change |        Delta |             % |          Size | Samples | Caller           | Location              |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------- | --------------------- |
|    new | +926.281 KiB | 0.0% → 100.0% | 0 B → 926 KiB |   0 → 2 | `readAllBytes()` | `java.io.InputStream` |

##### `findClass(String)` (`java.net.URLClassLoader`)

| Change |        Delta |             % |          Size | Samples | Caller                       | Location                |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------------- | ----------------------- |
|    new | +681.976 KiB | 0.0% → 100.0% | 0 B → 682 KiB |   0 → 1 | `loadClass(String, boolean)` | `java.lang.ClassLoader` |

##### `<init>(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

| Change |        Delta |             % |          Size | Samples | Caller          | Location                                     |
| -----: | -----------: | ------------: | ------------: | ------: | --------------- | -------------------------------------------- |
|    new | +537.406 KiB | 0.0% → 100.0% | 0 B → 537 KiB |   0 → 1 | `toByteArray()` | `jdk.internal.org.objectweb.asm.ClassWriter` |

##### `toString()` (`java.lang.StringBuilder`)

| Change |        Delta |             % |          Size | Samples | Caller               | Location          |
| -----: | -----------: | ------------: | ------------: | ------: | -------------------- | ----------------- |
|    new | +410.695 KiB | 0.0% → 100.0% | 0 B → 411 KiB |   0 → 1 | `descriptorString()` | `java.lang.Class` |

##### `compile()` (`java.util.regex.Pattern`)

| Change |        Delta |             % |          Size | Samples | Caller                | Location                  |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------- | ------------------------- |
|    new | +387.656 KiB | 0.0% → 100.0% | 0 B → 388 KiB |   0 → 1 | `<init>(String, int)` | `java.util.regex.Pattern` |

##### `visitMethod(int, String, String, String, String[])` (`jdk.internal.org.objectweb.asm.ClassWriter`)

| Change |       Delta |             % |          Size | Samples | Caller                 | Location                                       |
| -----: | ----------: | ------------: | ------------: | ------: | ---------------------- | ---------------------------------------------- |
|    new | +387.64 KiB | 0.0% → 100.0% | 0 B → 388 KiB |   0 → 1 | `generateInnerClass()` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `<init>(ClassWriter)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change |        Delta |             % |          Size | Samples | Caller                     | Location                                     |
| -----: | -----------: | ------------: | ------------: | ------: | -------------------------- | -------------------------------------------- |
|    new | +387.093 KiB | 0.0% → 100.0% | 0 B → 387 KiB |   0 → 1 | `<init>(ClassReader, int)` | `jdk.internal.org.objectweb.asm.ClassWriter` |

##### `initClassName()` (`java.lang.Class`)

|  Change |        Delta |      % |             Size | Samples | Caller      | Location          |
| ------: | -----------: | -----: | ---------------: | ------: | ----------- | ----------------- |
| +971.2% | +368.734 KiB | 100.0% | 38 KiB → 407 KiB |       1 | `getName()` | `java.lang.Class` |

##### `range(int, int)` (`java.util.stream.IntStream`)

| Change |       Delta |      % |                Size | Samples | Caller                                           | Location                                    |
| -----: | ----------: | -----: | ------------------: | ------: | ------------------------------------------------ | ------------------------------------------- |
|  +3.7% | +85.406 KiB | 100.0% | 2.27 MiB → 2.36 MiB |   6 → 5 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

| Change |       Delta |      % |              Size | Samples | Caller                                                    | Location                |
| -----: | ----------: | -----: | ----------------: | ------: | --------------------------------------------------------- | ----------------------- |
| +20.1% | +72.492 KiB | 100.0% | 361 KiB → 434 KiB |       1 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |        Delta |      % |                Size | Samples | Caller      | Location                                               |
| -----: | -----------: | -----: | ------------------: | ------: | ----------- | ------------------------------------------------------ |
|  +2.0% | +355.445 KiB | 100.0% | 17.8 MiB → 18.1 MiB |   4 → 3 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |        Delta |      % |                Size | Samples | Caller                               | Location                                                  |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------------ | --------------------------------------------------------- |
|  +5.0% | +264.343 KiB | 100.0% | 5.13 MiB → 5.38 MiB |   1 → 3 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |       Delta |             % |              Size |   Samples | Caller      | Location              |
| -----: | ----------: | ------------: | ----------------: | --------: | ----------- | --------------------- |
|  -2.0% | -380.91 MiB | 52.5% → 51.9% | 18.4 GiB → 18 GiB | 817 → 867 | `toArray()` | `java.util.ArrayList` |
|  +0.3% | +52.596 MiB | 47.5% → 48.1% |          16.7 GiB | 828 → 914 | `grow(int)` | `java.util.ArrayList` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |              Size | Samples | Caller              | Location                                                   |
| -----: | -----------: | -----: | ----------------: | ------: | ------------------- | ---------------------------------------------------------- |
| -65.6% | -195.522 MiB | 100.0% | 298 MiB → 103 MiB |   7 → 9 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `resize()` (`java.util.HashMap`)

| Change |        Delta |             % |                Size | Samples | Caller                                          | Location            |
| -----: | -----------: | ------------: | ------------------: | ------: | ----------------------------------------------- | ------------------- |
| -71.3% | -230.201 MiB | 84.7% → 48.9% |  323 MiB → 92.6 MiB |   1 → 2 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |
| +65.6% |  +38.295 MiB | 15.3% → 51.1% | 58.3 MiB → 96.6 MiB |   4 → 2 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |

##### `read(InputStream, String)` (`java.util.jar.Manifest`)

|  Change |        Delta |             % |          Size | Samples | Caller                                     | Location                 |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------------ | ------------------------ |
| removed | -159.013 MiB | 100.0% → 0.0% | 159 MiB → 0 B |   1 → 0 | `<init>(JarVerifier, InputStream, String)` | `java.util.jar.Manifest` |

##### `entrySet()` (`java.util.HashMap`)

|  Change |       Delta |             % |           Size | Samples | Caller                        | Location            |
| ------: | ----------: | ------------: | -------------: | ------: | ----------------------------- | ------------------- |
| removed | -85.427 MiB | 100.0% → 0.0% | 85.4 MiB → 0 B |   1 → 0 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |       Delta |      % |              Size | Samples | Caller                  | Location                                                               |
| -----: | ----------: | -----: | ----------------: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| -23.1% | -34.107 MiB | 100.0% | 148 MiB → 114 MiB |   8 → 5 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000088011ff178` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |              Size | Samples | Caller      | Location                                               |
| -----: | ----------: | -----: | ----------------: | ------: | ----------- | ------------------------------------------------------ |
| -11.8% | -31.884 MiB | 100.0% | 269 MiB → 237 MiB |   7 → 6 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `iterator()` (`java.util.HashMap$EntrySet`)

| Change |       Delta |      % |                Size | Samples | Caller                        | Location            |
| -----: | ----------: | -----: | ------------------: | ------: | ----------------------------- | ------------------- |
| -94.6% | -21.479 MiB | 100.0% | 22.7 MiB → 1.23 MiB |       1 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

|  Change |       Delta |             % |           Size | Samples | Caller                  | Location           |
| ------: | ----------: | ------------: | -------------: | ------: | ----------------------- | ------------------ |
| removed | -10.462 MiB | 100.0% → 0.0% | 10.5 MiB → 0 B |  16 → 0 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `result()` (`scala.collection.immutable.VectorBuilder`)

|  Change |        Delta |             % |          Size | Samples | Caller     | Location                                   |
| ------: | -----------: | ------------: | ------------: | ------: | ---------- | ------------------------------------------ |
| removed | -835.593 KiB | 100.0% → 0.0% | 836 KiB → 0 B |   1 → 0 | `result()` | `scala.collection.immutable.VectorBuilder` |

##### `allocateInstance(Class)` (`jdk.internal.misc.Unsafe`)

| Change |        Delta |      % |                Size | Samples | Caller                     | Location                              |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------- | ------------------------------------- |
| -32.6% | -751.046 KiB | 100.0% | 2.25 MiB → 1.52 MiB |   5 → 4 | `allocateInstance(Object)` | `java.lang.invoke.DirectMethodHandle` |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

| Change |        Delta |      % |              Size | Samples | Caller                | Location           |
| -----: | -----------: | -----: | ----------------: | ------: | --------------------- | ------------------ |
| -65.2% | -516.492 KiB | 100.0% | 792 KiB → 276 KiB |   2 → 1 | `substring(int, int)` | `java.lang.String` |

##### `getInputStream(ZipEntry)` (`java.util.zip.ZipFile`)

|  Change |        Delta |             % |          Size | Samples | Caller                     | Location                |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------------- | ----------------------- |
| removed | -414.875 KiB | 100.0% → 0.0% | 415 KiB → 0 B |   1 → 0 | `getInputStream(ZipEntry)` | `java.util.jar.JarFile` |

##### `clone()` (`java.lang.Object`)

|  Change |        Delta |              % |              Size | Samples | Caller                          | Location                      |
| ------: | -----------: | -------------: | ----------------: | ------: | ------------------------------- | ----------------------------- |
| removed | -535.382 KiB |   58.0% → 0.0% |     535 KiB → 0 B |   1 → 0 | `clone()`                       | `java.lang.invoke.MemberName` |
|  +32.1% | +124.273 KiB | 42.0% → 100.0% | 388 KiB → 512 KiB |       1 | `copyOfRange(byte[], int, int)` | `java.util.Arrays`            |

##### `transferTo(OutputStream)` (`java.io.InputStream`)

|  Change |        Delta |             % |          Size | Samples | Caller                                  | Location              |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------------------- | --------------------- |
| removed | -407.671 KiB | 100.0% → 0.0% | 408 KiB → 0 B |   1 → 0 | `copy(InputStream, Path, CopyOption[])` | `java.nio.file.Files` |

##### `register(Object, Runnable)` (`java.lang.ref.Cleaner`)

|  Change |        Delta |             % |          Size | Samples | Caller                                                                                  | Location                                           |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------------------------------------------------------------------- | -------------------------------------------------- |
| removed | -398.773 KiB | 100.0% → 0.0% | 399 KiB → 0 B |   1 → 0 | `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, Inflater, int)` | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |

##### `enlarge(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

|  Change |        Delta |             % |          Size | Samples | Caller            | Location                                    |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------- | ------------------------------------------- |
| removed | -395.265 KiB | 100.0% → 0.0% | 395 KiB → 0 B |   1 → 0 | `putUTF8(String)` | `jdk.internal.org.objectweb.asm.ByteVector` |

##### `toArray()` (`java.util.stream.IntPipeline`)

|  Change |       Delta |             % |          Size | Samples | Caller          | Location                       |
| ------: | ----------: | ------------: | ------------: | ------: | --------------- | ------------------------------ |
| removed | -395.14 KiB | 100.0% → 0.0% | 395 KiB → 0 B |   1 → 0 | `parse(String)` | `org.renaissance.core.Version` |

##### `parseName(byte[], int)` (`java.util.jar.Manifest`)

|  Change |        Delta |             % |          Size | Samples | Caller                      | Location                 |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------- | ------------------------ |
| removed | -391.671 KiB | 100.0% → 0.0% | 392 KiB → 0 B |   1 → 0 | `read(InputStream, String)` | `java.util.jar.Manifest` |

##### `<init>(int)` (`java.lang.AbstractStringBuilder`)

|  Change |        Delta |             % |          Size | Samples | Caller     | Location                  |
| ------: | -----------: | ------------: | ------------: | ------: | ---------- | ------------------------- |
| removed | -391.664 KiB | 100.0% → 0.0% | 392 KiB → 0 B |   1 → 0 | `<init>()` | `java.lang.StringBuilder` |

##### `checkResource(String, boolean, JarEntry)` (`jdk.internal.loader.URLClassPath$JarLoader`)

|  Change |        Delta |             % |          Size | Samples | Caller                         | Location                                     |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------ | -------------------------------------------- |
| removed | -390.679 KiB | 100.0% → 0.0% | 391 KiB → 0 B |   1 → 0 | `getResource(String, boolean)` | `jdk.internal.loader.URLClassPath$JarLoader` |

##### `fillInStackTrace(int)` (`java.lang.Throwable`)

| Change |        Delta |      % |                 Size | Samples | Caller               | Location              |
| -----: | -----------: | -----: | -------------------: | ------: | -------------------- | --------------------- |
| -28.0% | -389.125 KiB | 100.0% | 1.36 MiB → 1,000 KiB |   1 → 3 | `fillInStackTrace()` | `java.lang.Throwable` |

##### `compress(char[], int, int)` (`java.lang.StringUTF16`)

|  Change |        Delta |             % |          Size | Samples | Caller                           | Location           |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------------------- | ------------------ |
| removed | -387.796 KiB | 100.0% → 0.0% | 388 KiB → 0 B |   1 → 0 | `<init>(char[], int, int, Void)` | `java.lang.String` |

##### `longOptTokens(String)` (`scopt.OptionDef`)

|  Change |        Delta |             % |          Size | Samples | Caller                   | Location          |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------ | ----------------- |
| removed | -387.679 KiB | 100.0% → 0.0% | 388 KiB → 0 B |   1 → 0 | `tokensToRead(int, Seq)` | `scopt.OptionDef` |

##### `withBenchmarkSpecification(String)` (`org.renaissance.harness.Config`)

|  Change |        Delta |             % |          Size | Samples | Caller                                                                                          | Location                               |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------------------------------------------------------------------------------- | -------------------------------------- |
| removed | -265.679 KiB | 100.0% → 0.0% | 266 KiB → 0 B |   1 → 0 | `org$renaissance$harness$ConfigParser$$anon$1$$_$$lessinit$greater$$anonfun$25(String, Config)` | `org.renaissance.harness.ConfigParser` |

### Total size

#### Regressions

Functions with the largest increase in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|   Change |        Delta |             % |                Size |       Samples | Function                                                                                                               | Location                                                   |
| -------: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|   +16.8% |   +1.274 GiB | 20.0% → 23.7% | 7.57 GiB → 8.84 GiB |     363 → 394 | `<init>(Collection)`                                                                                                   | `java.util.ArrayList`                                      |
|   +12.6% | +418.745 MiB |   8.6% → 9.8% | 3.25 GiB → 3.66 GiB |     194 → 249 | `grow()`                                                                                                               | `java.util.ArrayList`                                      |
|   +12.6% | +418.745 MiB |   8.6% → 9.8% | 3.25 GiB → 3.66 GiB |     194 → 249 | `add(Object, Object[], int)`                                                                                           | `java.util.ArrayList`                                      |
|   +12.6% | +418.745 MiB |   8.6% → 9.8% | 3.25 GiB → 3.66 GiB |     194 → 249 | `add(Object)`                                                                                                          | `java.util.ArrayList`                                      |
|    +6.2% | +310.241 MiB | 12.8% → 13.8% | 4.85 GiB → 5.15 GiB |     276 → 346 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|      new | +193.781 MiB |   0.0% → 0.5% |       0 B → 194 MiB |       0 → 130 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                |
|    +4.5% | +179.793 MiB | 10.3% → 10.9% | 3.92 GiB → 4.09 GiB |     216 → 269 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +13.6% | +130.447 MiB |   2.5% → 2.8% |  957 MiB → 1.06 GiB |       60 → 77 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    +0.5% | +121.889 MiB | 66.1% → 67.2% |   25 GiB → 25.1 GiB | 1,168 → 1,317 | `tryRemoveAndExec(ForkJoinTask, boolean)`                                                                              | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| +1037.4% | +115.424 MiB |  <0.1% → 0.3% |  11.1 MiB → 127 MiB |         3 → 5 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +1037.4% | +115.424 MiB |  <0.1% → 0.3% |  11.1 MiB → 127 MiB |         3 → 5 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|      new |  +94.208 MiB |   0.0% → 0.2% |      0 B → 94.2 MiB |         0 → 1 | `collectGarbage(String)`                                                                                               | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`   |
|      new |  +94.208 MiB |   0.0% → 0.2% |      0 B → 94.2 MiB |         0 → 1 | `afterOperationSetUp(String, int, boolean)`                                                                            | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`   |
|      new |  +94.208 MiB |   0.0% → 0.2% |      0 B → 94.2 MiB |         0 → 1 | `notifyAfterOperationSetUp(String, int, boolean)`                                                                      | `org.renaissance.harness.EventDispatcher`                  |
|    +0.2% |  +88.815 MiB | 93.3% → 94.7% | 35.3 GiB → 35.4 GiB | 1,675 → 1,793 | `scan(ForkJoinPool$WorkQueue, int, int)`                                                                               | `java.util.concurrent.ForkJoinPool`                        |
|  +691.6% |  +80.874 MiB |  <0.1% → 0.2% | 11.7 MiB → 92.6 MiB |         3 → 4 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  +691.6% |  +80.874 MiB |  <0.1% → 0.2% | 11.7 MiB → 92.6 MiB |         3 → 4 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  +691.6% |  +80.874 MiB |  <0.1% → 0.2% | 11.7 MiB → 92.6 MiB |         3 → 4 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  +303.4% |  +73.616 MiB |   0.1% → 0.3% | 24.3 MiB → 97.9 MiB |      67 → 124 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | `org.renaissance.jdk.concurrent.FjKmeans`                  |
|  +303.3% |  +73.583 MiB |   0.1% → 0.3% | 24.3 MiB → 97.8 MiB |      67 → 124 | `copyInto(Sink, Spliterator)`                                                                                          | `java.util.stream.AbstractPipeline`                        |

##### Standard library

|   Change |        Delta |             % |                Size |       Samples | Function                                          | Location                                       |
| -------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------- | ---------------------------------------------- |
|   +16.8% |   +1.274 GiB | 20.0% → 23.7% | 7.57 GiB → 8.84 GiB |     363 → 394 | `<init>(Collection)`                              | `java.util.ArrayList`                          |
|   +12.6% | +418.745 MiB |   8.6% → 9.8% | 3.25 GiB → 3.66 GiB |     194 → 249 | `grow()`                                          | `java.util.ArrayList`                          |
|   +12.6% | +418.745 MiB |   8.6% → 9.8% | 3.25 GiB → 3.66 GiB |     194 → 249 | `add(Object, Object[], int)`                      | `java.util.ArrayList`                          |
|   +12.6% | +418.745 MiB |   8.6% → 9.8% | 3.25 GiB → 3.66 GiB |     194 → 249 | `add(Object)`                                     | `java.util.ArrayList`                          |
|    +0.5% | +121.889 MiB | 66.1% → 67.2% |   25 GiB → 25.1 GiB | 1,168 → 1,317 | `tryRemoveAndExec(ForkJoinTask, boolean)`         | `java.util.concurrent.ForkJoinPool$WorkQueue`  |
|    +0.2% |  +88.815 MiB | 93.3% → 94.7% | 35.3 GiB → 35.4 GiB | 1,675 → 1,793 | `scan(ForkJoinPool$WorkQueue, int, int)`          | `java.util.concurrent.ForkJoinPool`            |
|  +303.3% |  +73.583 MiB |   0.1% → 0.3% | 24.3 MiB → 97.8 MiB |      67 → 124 | `copyInto(Sink, Spliterator)`                     | `java.util.stream.AbstractPipeline`            |
|  +303.3% |  +73.583 MiB |   0.1% → 0.3% | 24.3 MiB → 97.8 MiB |      67 → 124 | `wrapAndCopyInto(Sink, Spliterator)`              | `java.util.stream.AbstractPipeline`            |
|  +303.3% |  +73.583 MiB |   0.1% → 0.3% | 24.3 MiB → 97.8 MiB |      67 → 124 | `evaluateSequential(PipelineHelper, Spliterator)` | `java.util.stream.ReduceOps$ReduceOp`          |
|  +303.3% |  +73.583 MiB |   0.1% → 0.3% | 24.3 MiB → 97.8 MiB |      67 → 124 | `evaluate(TerminalOp)`                            | `java.util.stream.AbstractPipeline`            |
|  +303.3% |  +73.583 MiB |   0.1% → 0.3% | 24.3 MiB → 97.8 MiB |      67 → 124 | `collect(Collector)`                              | `java.util.stream.ReferencePipeline`           |
|  +268.6% |  +65.175 MiB |   0.1% → 0.2% | 24.3 MiB → 89.4 MiB |      67 → 102 | `accept(int)`                                     | `java.util.stream.IntPipeline$1$1`             |
|  +268.6% |  +65.175 MiB |   0.1% → 0.2% | 24.3 MiB → 89.4 MiB |      67 → 102 | `forEachRemaining(IntConsumer)`                   | `java.util.stream.Streams$RangeIntSpliterator` |
|  +268.6% |  +65.175 MiB |   0.1% → 0.2% | 24.3 MiB → 89.4 MiB |      67 → 102 | `forEachRemaining(Consumer)`                      | `java.util.Spliterator$OfInt`                  |
|    +0.3% |   +47.78 MiB | 44.2% → 44.9% | 16.7 GiB → 16.8 GiB |     846 → 919 | `grow(int)`                                       | `java.util.ArrayList`                          |
|  +323.0% |  +45.836 MiB |  <0.1% → 0.2% |   14.2 MiB → 60 MiB |       39 → 56 | `evaluate(Spliterator, boolean, IntFunction)`     | `java.util.stream.AbstractPipeline`            |
|  +323.0% |  +45.836 MiB |  <0.1% → 0.2% |   14.2 MiB → 60 MiB |       39 → 56 | `evaluateToArrayNode(IntFunction)`                | `java.util.stream.AbstractPipeline`            |
|  +323.0% |  +45.836 MiB |  <0.1% → 0.2% |   14.2 MiB → 60 MiB |       39 → 56 | `toArray(IntFunction)`                            | `java.util.stream.ReferencePipeline`           |
|   +15.4% |  +32.716 MiB |   0.5% → 0.6% |   213 MiB → 246 MiB |       13 → 15 | `newNode(int, Object, Object, HashMap$Node)`      | `java.util.HashMap`                            |
| +1244.7% |  +28.275 MiB |  <0.1% → 0.1% | 2.27 MiB → 30.5 MiB |        6 → 10 | `<init>(long, IntFunction)`                       | `java.util.stream.Nodes$ArrayNode`             |

##### Ours

|   Change |        Delta |             % |                Size |   Samples | Function                                                                                                               | Location                                                               |
| -------: | -----------: | ------------: | ------------------: | --------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|    +6.2% | +310.241 MiB | 12.8% → 13.8% | 4.85 GiB → 5.15 GiB | 276 → 346 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|      new | +193.781 MiB |   0.0% → 0.5% |       0 B → 194 MiB |   0 → 130 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|    +4.5% | +179.793 MiB | 10.3% → 10.9% | 3.92 GiB → 4.09 GiB | 216 → 269 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   +13.6% | +130.447 MiB |   2.5% → 2.8% |  957 MiB → 1.06 GiB |   60 → 77 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| +1037.4% | +115.424 MiB |  <0.1% → 0.3% |  11.1 MiB → 127 MiB |     3 → 5 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| +1037.4% | +115.424 MiB |  <0.1% → 0.3% |  11.1 MiB → 127 MiB |     3 → 5 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|      new |  +94.208 MiB |   0.0% → 0.2% |      0 B → 94.2 MiB |     0 → 1 | `collectGarbage(String)`                                                                                               | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`               |
|      new |  +94.208 MiB |   0.0% → 0.2% |      0 B → 94.2 MiB |     0 → 1 | `afterOperationSetUp(String, int, boolean)`                                                                            | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`               |
|      new |  +94.208 MiB |   0.0% → 0.2% |      0 B → 94.2 MiB |     0 → 1 | `notifyAfterOperationSetUp(String, int, boolean)`                                                                      | `org.renaissance.harness.EventDispatcher`                              |
|  +691.6% |  +80.874 MiB |  <0.1% → 0.2% | 11.7 MiB → 92.6 MiB |     3 → 4 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  +691.6% |  +80.874 MiB |  <0.1% → 0.2% | 11.7 MiB → 92.6 MiB |     3 → 4 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  +691.6% |  +80.874 MiB |  <0.1% → 0.2% | 11.7 MiB → 92.6 MiB |     3 → 4 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  +303.4% |  +73.616 MiB |   0.1% → 0.3% | 24.3 MiB → 97.9 MiB |  67 → 124 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  +268.6% |  +65.175 MiB |   0.1% → 0.2% | 24.3 MiB → 89.4 MiB |  67 → 102 | `generateData(int, int, int)`                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +259.2% |  +62.885 MiB |   0.1% → 0.2% | 24.3 MiB → 87.1 MiB |  67 → 100 | `lambda$generateData$5(int, int, Random[], int)`                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +259.2% |  +62.885 MiB |   0.1% → 0.2% | 24.3 MiB → 87.1 MiB |  67 → 100 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000088011fd4f0` |
| +1244.7% |  +28.275 MiB |  <0.1% → 0.1% | 2.27 MiB → 30.5 MiB |    6 → 10 | `lambda$generateData$4(int)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +952.9% |  +21.644 MiB |  <0.1% → 0.1% | 2.27 MiB → 23.9 MiB |    6 → 36 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000088011fd728` |
|  +236.9% |  +21.479 MiB |  <0.1% → 0.1% | 9.07 MiB → 30.5 MiB |   25 → 10 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000088011fd960` |
|  +163.8% |  +14.849 MiB |  <0.1% → 0.1% | 9.07 MiB → 23.9 MiB |   25 → 36 | `lambda$generateData$3(int, int, Random[], int)`                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |

#### Improvements

Functions with the largest decrease in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

| Change |        Delta |             % |                Size |       Samples | Function                                                  | Location                                                               |
| -----: | -----------: | ------------: | ------------------: | ------------: | --------------------------------------------------------- | ---------------------------------------------------------------------- |
|  -8.3% |   -2.012 GiB | 64.3% → 59.7% | 24.3 GiB → 22.3 GiB | 1,112 → 1,143 | `addAll(Collection)`                                      | `java.util.ArrayList`                                                  |
| -21.5% | -915.566 MiB |  11.0% → 8.7% | 4.15 GiB → 3.26 GiB |     224 → 209 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                                    |
|  -2.6% |  -877.45 MiB | 85.8% → 84.6% | 32.5 GiB → 31.6 GiB | 1,492 → 1,556 | `merge(Map, Map)`                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -2.6% |  -877.45 MiB | 85.8% → 84.6% | 32.5 GiB → 31.6 GiB | 1,492 → 1,556 | `combineResults(Map, Map)`                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -2.6% |  -877.45 MiB | 85.8% → 84.6% | 32.5 GiB → 31.6 GiB | 1,492 → 1,556 | `combineResults(Object, Object)`                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -2.4% | -790.292 MiB | 84.7% → 83.7% |   32 GiB → 31.3 GiB | 1,483 → 1,542 | `lambda$merge$6(List, List)`                              | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -2.4% | -790.292 MiB | 84.7% → 83.7% |   32 GiB → 31.3 GiB | 1,483 → 1,542 | `apply(Object, Object)`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000088011ff178` |
|  -2.4% | -790.292 MiB | 84.7% → 83.7% |   32 GiB → 31.3 GiB | 1,483 → 1,542 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                                                    |
|  -2.4% | -790.292 MiB | 84.7% → 83.7% |   32 GiB → 31.3 GiB | 1,483 → 1,542 | `lambda$merge$7(Map, Object, List)`                       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -2.4% | -790.292 MiB | 84.7% → 83.7% |   32 GiB → 31.3 GiB | 1,483 → 1,542 | `accept(Object, Object)`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000088011fef30` |
|  -2.4% | -790.292 MiB | 84.7% → 83.7% |   32 GiB → 31.3 GiB | 1,483 → 1,542 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                                                    |
|  -1.4% | -523.815 MiB | 95.3% → 95.1% | 36.1 GiB → 35.5 GiB | 1,698 → 1,810 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|  -1.3% | -483.063 MiB |         99.4% | 37.6 GiB → 37.1 GiB | 1,783 → 1,919 | `compute()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  -1.3% | -483.063 MiB |         99.4% | 37.6 GiB → 37.1 GiB | 1,783 → 1,919 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                                   |
|  -1.3% | -483.063 MiB |         99.4% | 37.6 GiB → 37.1 GiB | 1,783 → 1,919 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                                    |
|  -2.0% |  -385.22 MiB | 48.7% → 48.3% |   18.4 GiB → 18 GiB |     823 → 867 | `toArray()`                                               | `java.util.ArrayList`                                                  |
|  -0.9% | -338.776 MiB | 92.7% → 93.0% | 35.1 GiB → 34.8 GiB | 1,661 → 1,781 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                                                     |
|  -1.0% | -251.993 MiB | 67.2% → 67.3% | 25.4 GiB → 25.2 GiB | 1,190 → 1,331 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                                    |
|  -1.0% | -251.993 MiB | 67.2% → 67.3% | 25.4 GiB → 25.2 GiB | 1,190 → 1,331 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                                    |
| -49.6% | -217.746 MiB |   1.1% → 0.6% |   439 MiB → 222 MiB |         7 → 8 | `putMapEntries(Map, boolean)`                             | `java.util.HashMap`                                                    |

##### Standard library

| Change |        Delta |             % |                Size |       Samples | Function                                                  | Location                                       |
| -----: | -----------: | ------------: | ------------------: | ------------: | --------------------------------------------------------- | ---------------------------------------------- |
|  -8.3% |   -2.012 GiB | 64.3% → 59.7% | 24.3 GiB → 22.3 GiB | 1,112 → 1,143 | `addAll(Collection)`                                      | `java.util.ArrayList`                          |
| -21.5% | -915.566 MiB |  11.0% → 8.7% | 4.15 GiB → 3.26 GiB |     224 → 209 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`            |
|  -2.4% | -790.292 MiB | 84.7% → 83.7% |   32 GiB → 31.3 GiB | 1,483 → 1,542 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                            |
|  -2.4% | -790.292 MiB | 84.7% → 83.7% |   32 GiB → 31.3 GiB | 1,483 → 1,542 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                            |
|  -1.4% | -523.815 MiB | 95.3% → 95.1% | 36.1 GiB → 35.5 GiB | 1,698 → 1,810 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`  |
|  -1.3% | -483.063 MiB |         99.4% | 37.6 GiB → 37.1 GiB | 1,783 → 1,919 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`           |
|  -1.3% | -483.063 MiB |         99.4% | 37.6 GiB → 37.1 GiB | 1,783 → 1,919 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`            |
|  -2.0% |  -385.22 MiB | 48.7% → 48.3% |   18.4 GiB → 18 GiB |     823 → 867 | `toArray()`                                               | `java.util.ArrayList`                          |
|  -0.9% | -338.776 MiB | 92.7% → 93.0% | 35.1 GiB → 34.8 GiB | 1,661 → 1,781 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                             |
|  -1.0% | -251.993 MiB | 67.2% → 67.3% | 25.4 GiB → 25.2 GiB | 1,190 → 1,331 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`            |
|  -1.0% | -251.993 MiB | 67.2% → 67.3% | 25.4 GiB → 25.2 GiB | 1,190 → 1,331 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`            |
| -49.6% | -217.746 MiB |   1.1% → 0.6% |   439 MiB → 222 MiB |         7 → 8 | `putMapEntries(Map, boolean)`                             | `java.util.HashMap`                            |
| -49.6% | -217.746 MiB |   1.1% → 0.6% |   439 MiB → 222 MiB |         7 → 8 | `<init>(Map)`                                             | `java.util.HashMap`                            |
| -50.4% | -191.906 MiB |   1.0% → 0.5% |   381 MiB → 189 MiB |         5 → 4 | `resize()`                                                | `java.util.HashMap`                            |
| -99.1% | -159.017 MiB |  0.4% → <0.1% |  160 MiB → 1.43 MiB |             4 | `read(InputStream, String)`                               | `java.util.jar.Manifest`                       |
| -99.1% | -159.017 MiB |  0.4% → <0.1% |  160 MiB → 1.43 MiB |             4 | `<init>(JarVerifier, InputStream, String)`                | `java.util.jar.Manifest`                       |
| -99.1% | -159.017 MiB |  0.4% → <0.1% |  160 MiB → 1.43 MiB |             4 | `<init>(InputStream, String)`                             | `java.util.jar.Manifest`                       |
| -98.9% | -158.643 MiB |  0.4% → <0.1% |  160 MiB → 1.81 MiB |         4 → 5 | `getManifestFromReference()`                              | `java.util.jar.JarFile`                        |
| -98.9% | -158.643 MiB |  0.4% → <0.1% |  160 MiB → 1.81 MiB |         4 → 5 | `getManifest()`                                           | `java.util.jar.JarFile`                        |
| -98.9% | -158.643 MiB |  0.4% → <0.1% |  160 MiB → 1.81 MiB |         4 → 5 | `getManifest()`                                           | `jdk.internal.loader.URLClassPath$JarLoader$2` |

##### Ours

|  Change |        Delta |             % |                Size |       Samples | Function                                                                                                               | Location                                                               |
| ------: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|   -2.6% |  -877.45 MiB | 85.8% → 84.6% | 32.5 GiB → 31.6 GiB | 1,492 → 1,556 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -2.6% |  -877.45 MiB | 85.8% → 84.6% | 32.5 GiB → 31.6 GiB | 1,492 → 1,556 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -2.6% |  -877.45 MiB | 85.8% → 84.6% | 32.5 GiB → 31.6 GiB | 1,492 → 1,556 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -2.4% | -790.292 MiB | 84.7% → 83.7% |   32 GiB → 31.3 GiB | 1,483 → 1,542 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -2.4% | -790.292 MiB | 84.7% → 83.7% |   32 GiB → 31.3 GiB | 1,483 → 1,542 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000088011ff178` |
|   -2.4% | -790.292 MiB | 84.7% → 83.7% |   32 GiB → 31.3 GiB | 1,483 → 1,542 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -2.4% | -790.292 MiB | 84.7% → 83.7% |   32 GiB → 31.3 GiB | 1,483 → 1,542 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000088011fef30` |
|   -1.3% | -483.063 MiB |         99.4% | 37.6 GiB → 37.1 GiB | 1,783 → 1,919 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| removed |  -190.69 MiB |   0.5% → 0.0% |       191 MiB → 0 B |        75 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
| removed |  -166.03 MiB |   0.4% → 0.0% |       166 MiB → 0 B |         7 → 0 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  -43.3% |  -71.821 MiB |   0.4% → 0.2% |  166 MiB → 94.2 MiB |         7 → 1 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |
|   -0.5% |   -40.91 MiB | 19.7% → 19.9% | 7.47 GiB → 7.43 GiB |     228 → 202 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000088011fdf70` |
|   -0.5% |  -37.602 MiB | 19.7% → 19.9% | 7.47 GiB → 7.43 GiB |     228 → 203 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -11.8% |  -31.884 MiB |   0.7% → 0.6% |   269 MiB → 237 MiB |         7 → 6 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed | -775.382 KiB |  <0.1% → 0.0% |       775 KiB → 0 B |         2 → 0 | `$anonfun$1(Config, Path)`                                                                                             | `org.renaissance.harness.RenaissanceSuite$`                            |
| removed | -408.312 KiB |  <0.1% → 0.0% |       408 KiB → 0 B |         1 → 0 | `createEventDispatcher(Iterable, Seq)`                                                                                 | `org.renaissance.harness.RenaissanceSuite$`                            |
| removed | -407.671 KiB |  <0.1% → 0.0% |       408 KiB → 0 B |         1 → 0 | `getBenchmarkClassLoader(BenchmarkDescriptor)`                                                                         | `org.renaissance.core.BenchmarkSuite`                                  |
|  -50.7% | -396.617 KiB |         <0.1% |   782 KiB → 385 KiB |         2 → 1 | `selectBenchmarks(BenchmarkSuite, Seq)`                                                                                | `org.renaissance.harness.RenaissanceSuite$`                            |
| removed |  -395.14 KiB |  <0.1% → 0.0% |       395 KiB → 0 B |         1 → 0 | `parse(String)`                                                                                                        | `org.renaissance.core.Version`                                         |
| removed |  -395.14 KiB |  <0.1% → 0.0% |       395 KiB → 0 B |         1 → 0 | `jvmSpecVersion()`                                                                                                     | `org.renaissance.core.BenchmarkSuite`                                  |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `<init>(Collection)` (`java.util.ArrayList`)

| Change |      Delta |      % |                Size |   Samples | Callee      | Location              |
| -----: | ---------: | -----: | ------------------: | --------: | ----------- | --------------------- |
| +16.8% | +1.274 GiB | 100.0% | 7.57 GiB → 8.84 GiB | 363 → 394 | `toArray()` | `java.util.ArrayList` |

##### `grow()` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |   Samples | Callee      | Location              |
| -----: | -----------: | -----: | ------------------: | --------: | ----------- | --------------------- |
| +12.6% | +418.745 MiB | 100.0% | 3.25 GiB → 3.66 GiB | 194 → 249 | `grow(int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |   Samples | Callee   | Location              |
| -----: | -----------: | -----: | ------------------: | --------: | -------- | --------------------- |
| +12.6% | +418.745 MiB | 100.0% | 3.25 GiB → 3.66 GiB | 194 → 249 | `grow()` | `java.util.ArrayList` |

##### `add(Object)` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |   Samples | Callee                       | Location              |
| -----: | -----------: | -----: | ------------------: | --------: | ---------------------------- | --------------------- |
| +12.6% | +418.745 MiB | 100.0% | 3.25 GiB → 3.66 GiB | 194 → 249 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |             % |                Size |   Samples | Callee                   | Location                                                   |
| -----: | -----------: | ------------: | ------------------: | --------: | ------------------------ | ---------------------------------------------------------- |
|  +6.2% | +310.241 MiB |        100.0% | 4.85 GiB → 5.15 GiB | 276 → 346 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +4.5% | +179.793 MiB | 80.7% → 79.4% | 3.92 GiB → 4.09 GiB | 216 → 269 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +13.6% | +130.447 MiB | 19.3% → 20.6% |  957 MiB → 1.06 GiB |   60 → 77 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |       Delta |            % |           Size | Samples | Callee                                                                                       | Location                                  |
| -----: | ----------: | -----------: | -------------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
|    new | +191.71 MiB | 0.0% → 98.9% |  0 B → 192 MiB | 0 → 124 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
|    new |   +2.07 MiB |  0.0% → 1.1% | 0 B → 2.07 MiB |   0 → 6 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |             % |                Size |   Samples | Callee                              | Location              |
| -----: | -----------: | ------------: | ------------------: | --------: | ----------------------------------- | --------------------- |
| +12.5% | +416.455 MiB | 83.0% → 89.4% | 3.25 GiB → 3.66 GiB | 194 → 247 | `add(Object)`                       | `java.util.ArrayList` |
| -10.7% |  -41.139 MiB |   9.5% → 8.2% |   383 MiB → 342 MiB |   15 → 13 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`   |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |        Delta |      % |              Size |       Samples | Callee     | Location                            |
| -----: | -----------: | -----: | ----------------: | ------------: | ---------- | ----------------------------------- |
|  +0.5% | +121.889 MiB | 100.0% | 25 GiB → 25.1 GiB | 1,168 → 1,317 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|   Change |        Delta |      % |               Size | Samples | Callee              | Location                                                  |
| -------: | -----------: | -----: | -----------------: | ------: | ------------------- | --------------------------------------------------------- |
| +1037.4% | +115.424 MiB | 100.0% | 11.1 MiB → 127 MiB |   3 → 5 | `vectorSum()`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| +1037.4% | +115.424 MiB | 100.0% | 11.1 MiB → 127 MiB |   3 → 5 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `afterOperationSetUp(String, int, boolean)` (`org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`)

| Change |       Delta |             % |           Size | Samples | Callee                   | Location                                                 |
| -----: | ----------: | ------------: | -------------: | ------: | ------------------------ | -------------------------------------------------------- |
|    new | +94.208 MiB | 0.0% → 100.0% | 0 B → 94.2 MiB |   0 → 1 | `collectGarbage(String)` | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin` |

##### `notifyAfterOperationSetUp(String, int, boolean)` (`org.renaissance.harness.EventDispatcher`)

| Change |       Delta |             % |           Size | Samples | Callee                                      | Location                                                 |
| -----: | ----------: | ------------: | -------------: | ------: | ------------------------------------------- | -------------------------------------------------------- |
|    new | +94.208 MiB | 0.0% → 100.0% | 0 B → 94.2 MiB |   0 → 1 | `afterOperationSetUp(String, int, boolean)` | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change |       Delta |      % |                Size |       Samples | Callee                                               | Location                                      |
| -----: | ----------: | -----: | ------------------: | ------------: | ---------------------------------------------------- | --------------------------------------------- |
|  +0.2% | +88.815 MiB | 100.0% | 35.3 GiB → 35.4 GiB | 1,675 → 1,793 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |       Delta |      % |                Size | Samples | Callee     | Location                            |
| ------: | ----------: | -----: | ------------------: | ------: | ---------- | ----------------------------------- |
| +691.6% | +80.874 MiB | 100.0% | 11.7 MiB → 92.6 MiB |   3 → 4 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |       Delta |      % |                Size | Samples | Callee          | Location                                               |
| ------: | ----------: | -----: | ------------------: | ------: | --------------- | ------------------------------------------------------ |
| +691.6% | +80.874 MiB | 100.0% | 11.7 MiB → 92.6 MiB |   3 → 4 | `average(List)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |       Delta |      % |                Size | Samples | Callee                     | Location                                               |
| ------: | ----------: | -----: | ------------------: | ------: | -------------------------- | ------------------------------------------------------ |
| +691.6% | +80.874 MiB | 100.0% | 11.7 MiB → 92.6 MiB |   3 → 4 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| +691.6% | +80.874 MiB | 100.0% | 11.7 MiB → 92.6 MiB |   3 → 4 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change |        Delta |              % |                Size |  Samples | Callee                        | Location                                                           |
| ------: | -----------: | -------------: | ------------------: | -------: | ----------------------------- | ------------------------------------------------------------------ |
| +268.6% |  +65.175 MiB | 100.0% → 91.4% | 24.3 MiB → 89.4 MiB | 67 → 102 | `generateData(int, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                        |
|     new |   +7.647 MiB |    0.0% → 7.8% |      0 B → 7.65 MiB |   0 → 20 | `toCsvRows(Function)`         | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |
|     new | +424.937 KiB |    0.0% → 0.4% |       0 B → 425 KiB |    0 → 1 | `asScala()`                   | `scala.collection.convert.AsScalaExtensions$ListHasAsScala`        |
|     new |  +387.64 KiB |    0.0% → 0.4% |       0 B → 388 KiB |    0 → 1 | `toInteger()`                 | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |

##### `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

|  Change |        Delta |              % |                Size |  Samples | Callee                       | Location                                  |
| ------: | -----------: | -------------: | ------------------: | -------: | ---------------------------- | ----------------------------------------- |
| +268.6% |  +65.175 MiB | 100.0% → 91.4% | 24.3 MiB → 89.4 MiB | 67 → 102 | `forEachRemaining(Consumer)` | `java.util.Spliterator$OfInt`             |
|     new |   +7.647 MiB |    0.0% → 7.8% |      0 B → 7.65 MiB |   0 → 20 | `forEachRemaining(Consumer)` | `java.util.Spliterators$ArraySpliterator` |
|     new | +390.695 KiB |    0.0% → 0.4% |       0 B → 391 KiB |    0 → 1 | `forEachRemaining(Consumer)` | `java.util.HashMap$KeySpliterator`        |
|     new |  +387.71 KiB |    0.0% → 0.4% |       0 B → 388 KiB |    0 → 1 | `forEachRemaining(Consumer)` | `java.util.HashMap$ValueSpliterator`      |

##### `wrapAndCopyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

|  Change |       Delta |           % |                Size |  Samples | Callee                        | Location                            |
| ------: | ----------: | ----------: | ------------------: | -------: | ----------------------------- | ----------------------------------- |
| +303.3% | +73.583 MiB |      100.0% | 24.3 MiB → 97.8 MiB | 67 → 124 | `copyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |
| +469.0% |  +2.728 MiB | 2.4% → 3.4% |  596 KiB → 3.31 MiB |    2 → 5 | `wrapSink(Sink)`              | `java.util.stream.AbstractPipeline` |

##### `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`)

|  Change |       Delta |      % |                Size |  Samples | Callee                               | Location                            |
| ------: | ----------: | -----: | ------------------: | -------: | ------------------------------------ | ----------------------------------- |
| +303.3% | +73.583 MiB | 100.0% | 24.3 MiB → 97.8 MiB | 67 → 124 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`)

|  Change |       Delta |      % |                Size |  Samples | Callee                                            | Location                              |
| ------: | ----------: | -----: | ------------------: | -------: | ------------------------------------------------- | ------------------------------------- |
| +303.3% | +73.583 MiB | 100.0% | 24.3 MiB → 97.8 MiB | 67 → 124 | `evaluateSequential(PipelineHelper, Spliterator)` | `java.util.stream.ReduceOps$ReduceOp` |

##### `collect(Collector)` (`java.util.stream.ReferencePipeline`)

|  Change |       Delta |      % |                Size |  Samples | Callee                 | Location                            |
| ------: | ----------: | -----: | ------------------: | -------: | ---------------------- | ----------------------------------- |
| +303.3% | +73.583 MiB | 100.0% | 24.3 MiB → 97.8 MiB | 67 → 124 | `evaluate(TerminalOp)` | `java.util.stream.AbstractPipeline` |

##### `accept(int)` (`java.util.stream.IntPipeline$1$1`)

|  Change |       Delta |              % |                Size |  Samples | Callee           | Location                                                               |
| ------: | ----------: | -------------: | ------------------: | -------: | ---------------- | ---------------------------------------------------------------------- |
| +259.2% | +62.885 MiB | 100.0% → 97.4% | 24.3 MiB → 87.1 MiB | 67 → 100 | `apply(int)`     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000088011fd4f0` |
|     new | +23.916 MiB |   0.0% → 26.7% |      0 B → 23.9 MiB |   0 → 36 | `apply(int)`     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000088011fd728` |
| removed |  -9.067 MiB |   37.4% → 0.0% |      9.07 MiB → 0 B |   25 → 0 | `apply(int)`     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000301181b10` |
|     new |  +2.289 MiB |    0.0% → 2.6% |      0 B → 2.29 MiB |    0 → 2 | `accept(Object)` | `java.util.stream.ReduceOps$3ReducingSink`                             |

##### `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`)

|  Change |       Delta |      % |                Size |  Samples | Callee        | Location                           |
| ------: | ----------: | -----: | ------------------: | -------: | ------------- | ---------------------------------- |
| +268.6% | +65.175 MiB | 100.0% | 24.3 MiB → 89.4 MiB | 67 → 102 | `accept(int)` | `java.util.stream.IntPipeline$1$1` |

##### `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`)

|  Change |       Delta |      % |                Size |  Samples | Callee                          | Location                                       |
| ------: | ----------: | -----: | ------------------: | -------: | ------------------------------- | ---------------------------------------------- |
| +268.6% | +65.175 MiB | 100.0% | 24.3 MiB → 89.4 MiB | 67 → 102 | `forEachRemaining(IntConsumer)` | `java.util.stream.Streams$RangeIntSpliterator` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |       Delta |     % |     Size |   Samples | Callee                  | Location           |
| -----: | ----------: | ----: | -------: | --------: | ----------------------- | ------------------ |
|  +0.3% | +46.443 MiB | 99.6% | 16.7 GiB | 838 → 914 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `evaluate(Spliterator, boolean, IntFunction)` (`java.util.stream.AbstractPipeline`)

|  Change |       Delta |             % |                Size | Samples | Callee                               | Location                             |
| ------: | ----------: | ------------: | ------------------: | ------: | ------------------------------------ | ------------------------------------ |
| +622.0% | +28.259 MiB | 32.0% → 54.6% | 4.54 MiB → 32.8 MiB | 12 → 15 | `makeNodeBuilder(long, IntFunction)` | `java.util.stream.ReferencePipeline` |
| +182.2% | +17.577 MiB | 68.0% → 45.4% | 9.65 MiB → 27.2 MiB | 27 → 41 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline`  |

##### `evaluateToArrayNode(IntFunction)` (`java.util.stream.AbstractPipeline`)

|  Change |       Delta |      % |              Size | Samples | Callee                                        | Location                            |
| ------: | ----------: | -----: | ----------------: | ------: | --------------------------------------------- | ----------------------------------- |
| +323.0% | +45.836 MiB | 100.0% | 14.2 MiB → 60 MiB | 39 → 56 | `evaluate(Spliterator, boolean, IntFunction)` | `java.util.stream.AbstractPipeline` |

##### `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`)

|  Change |       Delta |      % |              Size | Samples | Callee                             | Location                            |
| ------: | ----------: | -----: | ----------------: | ------: | ---------------------------------- | ----------------------------------- |
| +323.0% | +45.836 MiB | 100.0% | 14.2 MiB → 60 MiB | 39 → 56 | `evaluateToArrayNode(IntFunction)` | `java.util.stream.AbstractPipeline` |

##### `<init>(long, IntFunction)` (`java.util.stream.Nodes$ArrayNode`)

|  Change |       Delta |             % |           Size | Samples | Callee       | Location                                                               |
| ------: | ----------: | ------------: | -------------: | ------: | ------------ | ---------------------------------------------------------------------- |
|     new | +30.546 MiB | 0.0% → 100.0% | 0 B → 30.5 MiB |  0 → 10 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000088011fd960` |
| removed |  -2.271 MiB | 100.0% → 0.0% | 2.27 MiB → 0 B |   6 → 0 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000301181d48` |

##### `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |       Delta |      % |                Size |  Samples | Callee               | Location                             |
| ------: | ----------: | -----: | ------------------: | -------: | -------------------- | ------------------------------------ |
| +268.6% | +65.175 MiB | 100.0% | 24.3 MiB → 89.4 MiB | 67 → 102 | `collect(Collector)` | `java.util.stream.ReferencePipeline` |

##### `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |       Delta |             % |                Size | Samples | Callee                                         | Location                                            |
| ------: | ----------: | ------------: | ------------------: | ------: | ---------------------------------------------- | --------------------------------------------------- |
| +323.0% | +45.836 MiB | 58.5% → 68.9% |   14.2 MiB → 60 MiB | 39 → 56 | `toArray(IntFunction)`                         | `java.util.stream.ReferencePipeline`                |
| +253.2% |  +7.726 MiB | 12.6% → 12.4% | 3.05 MiB → 10.8 MiB |  9 → 16 | `mapToObj(IntFunction)`                        | `java.util.stream.IntPipeline`                      |
| +124.7% |   +6.86 MiB | 22.7% → 14.2% |  5.5 MiB → 12.4 MiB | 15 → 20 | `range(int, int)`                              | `java.util.stream.IntStream`                        |
| +162.6% |  +2.461 MiB |   6.2% → 4.6% | 1.51 MiB → 3.98 MiB |   4 → 8 | `linkToTargetMethod(int, int, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000008801200800` |

##### `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000088011fd4f0`)

|  Change |       Delta |      % |                Size |  Samples | Callee                                           | Location                                    |
| ------: | ----------: | -----: | ------------------: | -------: | ------------------------------------------------ | ------------------------------------------- |
| +259.2% | +62.885 MiB | 100.0% | 24.3 MiB → 87.1 MiB | 67 → 100 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000088011fd728`)

|  Change |       Delta |             % |           Size | Samples | Callee                                           | Location                                    |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------------------------------------ | ------------------------------------------- |
|     new | +23.916 MiB | 0.0% → 100.0% | 0 B → 23.9 MiB |  0 → 36 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |
| removed |  -2.271 MiB | 100.0% → 0.0% | 2.27 MiB → 0 B |   6 → 0 | `lambda$generateData$4(int)`                     | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000088011fd960`)

|  Change |       Delta |             % |           Size | Samples | Callee                                           | Location                                    |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------------------------------------ | ------------------------------------------- |
|     new | +30.546 MiB | 0.0% → 100.0% | 0 B → 30.5 MiB |  0 → 10 | `lambda$generateData$4(int)`                     | `org.renaissance.jdk.concurrent.JavaKMeans` |
| removed |  -9.067 MiB | 100.0% → 0.0% | 9.07 MiB → 0 B |  25 → 0 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |       Delta |      % |                Size | Samples | Callee            | Location           |
| ------: | ----------: | -----: | ------------------: | ------: | ----------------- | ------------------ |
| +163.8% | +14.849 MiB | 100.0% | 9.07 MiB → 23.9 MiB | 25 → 36 | `valueOf(double)` | `java.lang.Double` |

##### `addAll(Collection)` (`java.util.ArrayList`)

| Change |        Delta |             % |                Size |   Samples | Callee      | Location              |
| -----: | -----------: | ------------: | ------------------: | --------: | ----------- | --------------------- |
| -15.2% |    -1.65 GiB | 44.6% → 41.3% | 10.9 GiB → 9.21 GiB | 460 → 473 | `toArray()` | `java.util.ArrayList` |
|  -2.7% | -370.964 MiB | 55.4% → 58.7% | 13.5 GiB → 13.1 GiB | 652 → 670 | `grow(int)` | `java.util.ArrayList` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change |        Delta |      % |                Size |   Samples | Callee     | Location                            |
| -----: | -----------: | -----: | ------------------: | --------: | ---------- | ----------------------------------- |
| -21.5% | -915.566 MiB | 100.0% | 4.15 GiB → 3.26 GiB | 224 → 209 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |        Delta |             % |              Size |       Samples | Callee                               | Location                           |
| ------: | -----------: | ------------: | ----------------: | ------------: | ------------------------------------ | ---------------------------------- |
|   -2.4% | -790.292 MiB | 98.7% → 98.9% | 32 GiB → 31.3 GiB | 1,483 → 1,542 | `forEach(BiConsumer)`                | `java.util.HashMap`                |
|  -49.6% | -217.746 MiB |   1.3% → 0.7% | 439 MiB → 222 MiB |         7 → 8 | `<init>(Map)`                        | `java.util.HashMap`                |
| removed | -756.507 KiB |  <0.1% → 0.0% |     757 KiB → 0 B |         1 → 0 | `linkToTargetMethod(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |                Size |       Samples | Callee            | Location                                    |
| -----: | ----------: | -----: | ------------------: | ------------: | ----------------- | ------------------------------------------- |
|  -2.6% | -877.45 MiB | 100.0% | 32.5 GiB → 31.6 GiB | 1,492 → 1,556 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |                Size |       Samples | Callee                     | Location                                                   |
| -----: | ----------: | -----: | ------------------: | ------------: | -------------------------- | ---------------------------------------------------------- |
|  -2.6% | -877.45 MiB | 100.0% | 32.5 GiB → 31.6 GiB | 1,492 → 1,556 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |      Delta |             % |                Size |       Samples | Callee               | Location              |
| -----: | ---------: | ------------: | ------------------: | ------------: | -------------------- | --------------------- |
|  -8.3% | -2.012 GiB | 75.9% → 71.4% | 24.3 GiB → 22.3 GiB | 1,112 → 1,143 | `addAll(Collection)` | `java.util.ArrayList` |
| +16.8% | +1.274 GiB | 23.6% → 28.3% | 7.57 GiB → 8.84 GiB |     363 → 394 | `<init>(Collection)` | `java.util.ArrayList` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000088011ff178`)

| Change |        Delta |      % |              Size |       Samples | Callee                       | Location                                    |
| -----: | -----------: | -----: | ----------------: | ------------: | ---------------------------- | ------------------------------------------- |
|  -2.4% | -790.292 MiB | 100.0% | 32 GiB → 31.3 GiB | 1,483 → 1,542 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

| Change |        Delta |      % |              Size |       Samples | Callee                  | Location                                                               |
| -----: | -----------: | -----: | ----------------: | ------------: | ----------------------- | ---------------------------------------------------------------------- |
|  -2.4% | -790.292 MiB | 100.0% | 32 GiB → 31.3 GiB | 1,483 → 1,542 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000088011ff178` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |      % |              Size |       Samples | Callee                              | Location            |
| -----: | -----------: | -----: | ----------------: | ------------: | ----------------------------------- | ------------------- |
|  -2.4% | -790.292 MiB | 100.0% | 32 GiB → 31.3 GiB | 1,483 → 1,542 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000088011fef30`)

| Change |        Delta |      % |              Size |       Samples | Callee                              | Location                                    |
| -----: | -----------: | -----: | ----------------: | ------------: | ----------------------------------- | ------------------------------------------- |
|  -2.4% | -790.292 MiB | 100.0% | 32 GiB → 31.3 GiB | 1,483 → 1,542 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

| Change |        Delta |      % |              Size |       Samples | Callee                   | Location                                                               |
| -----: | -----------: | -----: | ----------------: | ------------: | ------------------------ | ---------------------------------------------------------------------- |
|  -2.4% | -790.292 MiB | 100.0% | 32 GiB → 31.3 GiB | 1,483 → 1,542 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000088011fef30` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |        Delta |      % |                Size |       Samples | Callee     | Location                            |
| -----: | -----------: | -----: | ------------------: | ------------: | ---------- | ----------------------------------- |
|  -1.4% | -523.815 MiB | 100.0% | 36.1 GiB → 35.5 GiB | 1,698 → 1,810 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|   Change |        Delta |             % |                Size |       Samples | Callee                           | Location                                                   |
| -------: | -----------: | ------------: | ------------------: | ------------: | -------------------------------- | ---------------------------------------------------------- |
|    -2.6% |  -877.45 MiB | 86.3% → 85.1% | 32.5 GiB → 31.6 GiB | 1,492 → 1,556 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    +6.2% | +310.241 MiB | 12.9% → 13.9% | 4.85 GiB → 5.15 GiB |     276 → 346 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    -1.0% | -251.993 MiB | 67.6% → 67.8% | 25.4 GiB → 25.2 GiB | 1,190 → 1,331 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
| +1037.4% | +115.424 MiB |  <0.1% → 0.3% |  11.1 MiB → 127 MiB |         3 → 5 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +691.6% |  +80.874 MiB |  <0.1% → 0.2% | 11.7 MiB → 92.6 MiB |         3 → 4 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change |        Delta |      % |                Size |       Samples | Callee      | Location                                               |
| -----: | -----------: | -----: | ------------------: | ------------: | ----------- | ------------------------------------------------------ |
|  -1.3% | -483.063 MiB | 100.0% | 37.6 GiB → 37.1 GiB | 1,783 → 1,919 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |             % |                Size |       Samples | Callee   | Location                                            |
| -----: | -----------: | ------------: | ------------------: | ------------: | -------- | --------------------------------------------------- |
|  -1.3% | -483.063 MiB |        100.0% | 37.6 GiB → 37.1 GiB | 1,783 → 1,919 | `exec()` | `java.util.concurrent.RecursiveTask`                |
|  -0.5% |   -40.91 MiB | 19.8% → 20.0% | 7.47 GiB → 7.43 GiB |     228 → 202 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `toArray()` (`java.util.ArrayList`)

| Change |       Delta |      % |              Size |   Samples | Callee                  | Location           |
| -----: | ----------: | -----: | ----------------: | --------: | ----------------------- | ------------------ |
|  -2.0% | -385.22 MiB | 100.0% | 18.4 GiB → 18 GiB | 823 → 867 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|  Change |       Delta |            % |           Size | Samples | Callee                         | Location           |
| ------: | ----------: | -----------: | -------------: | ------: | ------------------------------ | ------------------ |
| removed | -10.462 MiB | <0.1% → 0.0% | 10.5 MiB → 0 B |  16 → 0 | `copyOf(Object[], int, Class)` | `java.util.Arrays` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |             % |                Size |       Samples | Callee                                                    | Location                                      |
| -----: | -----------: | ------------: | ------------------: | ------------: | --------------------------------------------------------- | --------------------------------------------- |
| -21.5% | -915.566 MiB | 16.3% → 12.9% | 4.15 GiB → 3.26 GiB |     224 → 209 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  +0.5% | +121.889 MiB | 98.4% → 99.8% |   25 GiB → 25.1 GiB | 1,168 → 1,317 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |      % |                Size |       Samples | Callee                 | Location                            |
| -----: | -----------: | -----: | ------------------: | ------------: | ---------------------- | ----------------------------------- |
|  -1.0% | -251.993 MiB | 100.0% | 25.4 GiB → 25.2 GiB | 1,190 → 1,331 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `putMapEntries(Map, boolean)` (`java.util.HashMap`)

|  Change |       Delta |             % |                Size | Samples | Callee                                          | Location                     |
| ------: | ----------: | ------------: | ------------------: | ------: | ----------------------------------------------- | ---------------------------- |
|  -33.5% | -110.84 MiB | 75.4% → 99.4% |   331 MiB → 220 MiB |   5 → 7 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap`          |
| removed | -85.427 MiB |  19.4% → 0.0% |      85.4 MiB → 0 B |   1 → 0 | `entrySet()`                                    | `java.util.HashMap`          |
|  -94.6% | -21.479 MiB |   5.2% → 0.6% | 22.7 MiB → 1.23 MiB |       1 | `iterator()`                                    | `java.util.HashMap$EntrySet` |

##### `<init>(Map)` (`java.util.HashMap`)

| Change |        Delta |      % |              Size | Samples | Callee                        | Location            |
| -----: | -----------: | -----: | ----------------: | ------: | ----------------------------- | ------------------- |
| -49.6% | -217.746 MiB | 100.0% | 439 MiB → 222 MiB |   7 → 8 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `read(InputStream, String)` (`java.util.jar.Manifest`)

|  Change |        Delta |            % |              Size | Samples | Callee                                                | Location                   |
| ------: | -----------: | -----------: | ----------------: | ------: | ----------------------------------------------------- | -------------------------- |
|     new |   +1.289 MiB | 0.0% → 90.0% |    0 B → 1.29 MiB |   0 → 3 | `put(Object, Object)`                                 | `java.util.HashMap`        |
| removed |   -1.054 MiB |  0.7% → 0.0% |    1.05 MiB → 0 B |   2 → 0 | `read(Manifest$FastInputStream, byte[], String, int)` | `java.util.jar.Attributes` |
|  -62.6% | -245.218 KiB | 0.2% → 10.0% | 392 KiB → 146 KiB |       1 | `parseName(byte[], int)`                              | `java.util.jar.Manifest`   |

##### `<init>(JarVerifier, InputStream, String)` (`java.util.jar.Manifest`)

| Change |        Delta |      % |               Size | Samples | Callee                      | Location                 |
| -----: | -----------: | -----: | -----------------: | ------: | --------------------------- | ------------------------ |
| -99.1% | -159.017 MiB | 100.0% | 160 MiB → 1.43 MiB |       4 | `read(InputStream, String)` | `java.util.jar.Manifest` |

##### `<init>(InputStream, String)` (`java.util.jar.Manifest`)

| Change |        Delta |      % |               Size | Samples | Callee                                     | Location                 |
| -----: | -----------: | -----: | -----------------: | ------: | ------------------------------------------ | ------------------------ |
| -99.1% | -159.017 MiB | 100.0% | 160 MiB → 1.43 MiB |       4 | `<init>(JarVerifier, InputStream, String)` | `java.util.jar.Manifest` |

##### `getManifestFromReference()` (`java.util.jar.JarFile`)

| Change |        Delta |              % |               Size | Samples | Callee                        | Location                 |
| -----: | -----------: | -------------: | -----------------: | ------: | ----------------------------- | ------------------------ |
| -99.1% | -159.017 MiB | 100.0% → 79.3% | 160 MiB → 1.43 MiB |       4 | `<init>(InputStream, String)` | `java.util.jar.Manifest` |
|    new | +383.296 KiB |   0.0% → 20.7% |      0 B → 383 KiB |   0 → 1 | `getInputStream(ZipEntry)`    | `java.util.zip.ZipFile`  |

##### `getManifest()` (`java.util.jar.JarFile`)

| Change |        Delta |      % |               Size | Samples | Callee                       | Location                |
| -----: | -----------: | -----: | -----------------: | ------: | ---------------------------- | ----------------------- |
| -98.9% | -158.643 MiB | 100.0% | 160 MiB → 1.81 MiB |   4 → 5 | `getManifestFromReference()` | `java.util.jar.JarFile` |

##### `getManifest()` (`jdk.internal.loader.URLClassPath$JarLoader$2`)

| Change |        Delta |      % |               Size | Samples | Callee          | Location                |
| -----: | -----------: | -----: | -----------------: | ------: | --------------- | ----------------------- |
| -98.9% | -158.643 MiB | 100.0% | 160 MiB → 1.81 MiB |   4 → 5 | `getManifest()` | `java.util.jar.JarFile` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |        Delta |            % |          Size | Samples | Callee                                                                                       | Location                                  |
| ------: | -----------: | -----------: | ------------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
| removed | -190.292 MiB | 99.8% → 0.0% | 190 MiB → 0 B |  74 → 0 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
| removed | -407.671 KiB |  0.2% → 0.0% | 408 KiB → 0 B |   1 → 0 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change |        Delta |            % |           Size | Samples | Callee              | Location                           |
| ------: | -----------: | -----------: | -------------: | ------: | ------------------- | ---------------------------------- |
| removed | -160.356 MiB | 96.6% → 0.0% |  160 MiB → 0 B |   2 → 0 | `loadClass(String)` | `java.lang.ClassLoader`            |
| removed |   -4.857 MiB |  2.9% → 0.0% | 4.86 MiB → 0 B |   4 → 0 | `<clinit>()`        | `scala.Predef$`                    |
| removed | -835.593 KiB |  0.5% → 0.0% |  836 KiB → 0 B |   1 → 0 | `map(Function1)`    | `scala.collection.immutable.Range` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

|  Change |       Delta |             % |           Size | Samples | Callee                                            | Location                                  |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------------------------------------- | ----------------------------------------- |
| removed | -166.03 MiB | 100.0% → 0.0% |  166 MiB → 0 B |   7 → 0 | `run(BenchmarkContext)`                           | `org.renaissance.jdk.concurrent.FjKmeans` |
|     new | +94.208 MiB | 0.0% → 100.0% | 0 B → 94.2 MiB |   0 → 1 | `notifyAfterOperationSetUp(String, int, boolean)` | `org.renaissance.harness.EventDispatcher` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000088011fdf70`)

| Change |      Delta |      % |                Size |   Samples | Callee                         | Location                                    |
| -----: | ---------: | -----: | ------------------: | --------: | ------------------------------ | ------------------------------------------- |
|  -0.5% | -40.91 MiB | 100.0% | 7.47 GiB → 7.43 GiB | 228 → 202 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |       Delta |      % |                Size |   Samples | Callee     | Location                            |
| -----: | ----------: | -----: | ------------------: | --------: | ---------- | ----------------------------------- |
|  -0.5% | -37.602 MiB | 100.0% | 7.47 GiB → 7.43 GiB | 228 → 203 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `$anonfun$1(Config, Path)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |        Delta |            % |          Size | Samples | Callee                                         | Location                              |
| ------: | -----------: | -----------: | ------------: | ------: | ---------------------------------------------- | ------------------------------------- |
| removed | -387.796 KiB | 50.0% → 0.0% | 388 KiB → 0 B |   1 → 0 | `create(Path, String, Optional, Map, boolean)` | `org.renaissance.core.BenchmarkSuite` |
| removed | -387.585 KiB | 50.0% → 0.0% | 388 KiB → 0 B |   1 → 0 | `MutableMapHasAsJava(Map)`                     | `scala.jdk.CollectionConverters$`     |

##### `createEventDispatcher(Iterable, Seq)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |        Delta |             % |          Size | Samples | Callee              | Location                |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------- | ----------------------- |
| removed | -408.312 KiB | 100.0% → 0.0% | 408 KiB → 0 B |   1 → 0 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `getBenchmarkClassLoader(BenchmarkDescriptor)` (`org.renaissance.core.BenchmarkSuite`)

|  Change |        Delta |             % |          Size | Samples | Callee                               | Location                            |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------ | ----------------------------------- |
| removed | -407.671 KiB | 100.0% → 0.0% | 408 KiB → 0 B |   1 → 0 | `createClassLoaderForModule(String)` | `org.renaissance.core.ModuleLoader` |

##### `selectBenchmarks(BenchmarkSuite, Seq)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |        Delta |             % |          Size | Samples | Callee               | Location                                 |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------- | ---------------------------------------- |
| removed | -397.226 KiB |  50.8% → 0.0% | 397 KiB → 0 B |   1 → 0 | `loadClass(String)`  | `java.lang.ClassLoader`                  |
|     new | +385.218 KiB | 0.0% → 100.0% | 0 B → 385 KiB |   0 → 1 | `foreach(Function1)` | `scala.collection.AbstractIterable`      |
| removed | -384.609 KiB |  49.2% → 0.0% | 385 KiB → 0 B |   1 → 0 | `<init>()`           | `scala.collection.mutable.LinkedHashSet` |

##### `parse(String)` (`org.renaissance.core.Version`)

|  Change |       Delta |             % |          Size | Samples | Callee      | Location                       |
| ------: | ----------: | ------------: | ------------: | ------: | ----------- | ------------------------------ |
| removed | -395.14 KiB | 100.0% → 0.0% | 395 KiB → 0 B |   1 → 0 | `toArray()` | `java.util.stream.IntPipeline` |

##### `jvmSpecVersion()` (`org.renaissance.core.BenchmarkSuite`)

|  Change |       Delta |             % |          Size | Samples | Callee          | Location                       |
| ------: | ----------: | ------------: | ------------: | ------: | --------------- | ------------------------------ |
| removed | -395.14 KiB | 100.0% → 0.0% | 395 KiB → 0 B |   1 → 0 | `parse(String)` | `org.renaissance.core.Version` |

# Retained heap profile diff

Retained 2.6 MiB → 2.56 MiB (-37.5 KiB, -1.4%) over 9 objects → 13 objects (295 KiB → 202 KiB per object).

| Category         |  Change |       Delta |      % |               Size | Objects |
| ---------------- | ------: | ----------: | -----: | -----------------: | ------: |
| Standard library |   -1.4% | -37.617 KiB | 100.0% | 2.6 MiB → 2.56 MiB |   8 → 9 |
| Ours             | +300.0% |      +120 B |  <0.1% |       40 B → 160 B |   1 → 4 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |        Delta |            % |          Size | Objects | Function                                     | Location                                    |
| ------: | -----------: | -----------: | ------------: | ------: | -------------------------------------------- | ------------------------------------------- |
|     new | +255.085 KiB |  0.0% → 9.7% | 0 B → 255 KiB |   0 → 1 | `initCEN(int, ZipCoder)`                     | `java.util.zip.ZipFile$Source`              |
| +300.0% |       +120 B |        <0.1% |  40 B → 160 B |   1 → 4 | `lambda$generateData$4(int)`                 | `org.renaissance.jdk.concurrent.JavaKMeans` |
|     new |        +64 B | 0.0% → <0.1% |    0 B → 64 B |   0 → 2 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                         |
|  +50.0% |        +24 B |        <0.1% |   48 B → 72 B |   2 → 3 | `valueOf(double)`                            | `java.lang.Double`                          |
|     new |        +24 B | 0.0% → <0.1% |    0 B → 24 B |   0 → 1 | `initClassName()`                            | `java.lang.Class`                           |

##### Standard library

| Change |        Delta |            % |          Size | Objects | Function                                     | Location                       |
| -----: | -----------: | -----------: | ------------: | ------: | -------------------------------------------- | ------------------------------ |
|    new | +255.085 KiB |  0.0% → 9.7% | 0 B → 255 KiB |   0 → 1 | `initCEN(int, ZipCoder)`                     | `java.util.zip.ZipFile$Source` |
|    new |        +64 B | 0.0% → <0.1% |    0 B → 64 B |   0 → 2 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`            |
| +50.0% |        +24 B |        <0.1% |   48 B → 72 B |   2 → 3 | `valueOf(double)`                            | `java.lang.Double`             |
|    new |        +24 B | 0.0% → <0.1% |    0 B → 24 B |   0 → 1 | `initClassName()`                            | `java.lang.Class`              |

#### Improvements

Functions with the largest decrease in bytes retained within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Standard library

|  Change |        Delta |             % |                Size | Objects | Function                      | Location                 |
| ------: | -----------: | ------------: | ------------------: | ------: | ----------------------------- | ------------------------ |
|  -12.2% | -292.773 KiB | 90.4% → 80.5% | 2.35 MiB → 2.06 MiB |   3 → 1 | `copyOf(Object[], int)`       | `java.util.Arrays`       |
| removed |        -24 B |  <0.1% → 0.0% |          24 B → 0 B |   1 → 0 | `parseName(byte[], int)`      | `java.util.jar.Manifest` |
| removed |        -16 B |  <0.1% → 0.0% |          16 B → 0 B |   1 → 0 | `getClassLoadingLock(String)` | `java.lang.ClassLoader`  |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |        Delta |             % |          Size | Objects | Location                            |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------------------- |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `java.util.zip.ZipFile$Source:1733` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |  Delta |      % |         Size | Objects | Location                                       |
| ------: | -----: | -----: | -----------: | ------: | ---------------------------------------------- |
| +300.0% | +120 B | 100.0% | 40 B → 160 B |   1 → 4 | `org.renaissance.jdk.concurrent.JavaKMeans:87` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

| Change | Delta |             % |       Size | Objects | Location                 |
| -----: | ----: | ------------: | ---------: | ------: | ------------------------ |
|    new | +64 B | 0.0% → 100.0% | 0 B → 64 B |   0 → 2 | `java.util.HashMap:1909` |

##### `valueOf(double)` (`java.lang.Double`)

| Change | Delta |      % |        Size | Objects | Location               |
| -----: | ----: | -----: | ----------: | ------: | ---------------------- |
| +50.0% | +24 B | 100.0% | 48 B → 72 B |   2 → 3 | `java.lang.Double:773` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |        Delta |      % |                Size | Objects | Location                |
| -----: | -----------: | -----: | ------------------: | ------: | ----------------------- |
| -12.2% | -292.773 KiB | 100.0% | 2.35 MiB → 2.06 MiB |   3 → 1 | `java.util.Arrays:3482` |

##### `parseName(byte[], int)` (`java.util.jar.Manifest`)

|  Change | Delta |             % |       Size | Objects | Location                     |
| ------: | ----: | ------------: | ---------: | ------: | ---------------------------- |
| removed | -24 B | 100.0% → 0.0% | 24 B → 0 B |   1 → 0 | `java.util.jar.Manifest:365` |

##### `getClassLoadingLock(String)` (`java.lang.ClassLoader`)

|  Change | Delta |             % |       Size | Objects | Location                    |
| ------: | ----: | ------------: | ---------: | ------: | --------------------------- |
| removed | -16 B | 100.0% → 0.0% | 16 B → 0 B |   1 → 0 | `java.lang.ClassLoader:680` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |        Delta |             % |          Size | Objects | Caller                                          | Location                       |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------------------------------- | ------------------------------ |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |  Delta |             % |        Size | Objects | Caller       | Location                                                               |
| ------: | -----: | ------------: | ----------: | ------: | ------------ | ---------------------------------------------------------------------- |
|     new | +160 B | 0.0% → 100.0% | 0 B → 160 B |   0 → 4 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000088011fd960` |
| removed |  -40 B | 100.0% → 0.0% |  40 B → 0 B |   1 → 0 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000301181d48` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

| Change | Delta |             % |       Size | Objects | Caller                                          | Location            |
| -----: | ----: | ------------: | ---------: | ------: | ----------------------------------------------- | ------------------- |
|    new | +64 B | 0.0% → 100.0% | 0 B → 64 B |   0 → 2 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `valueOf(double)` (`java.lang.Double`)

| Change | Delta |      % |        Size | Objects | Caller                                           | Location                                    |
| -----: | ----: | -----: | ----------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| +50.0% | +24 B | 100.0% | 48 B → 72 B |   2 → 3 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `initClassName()` (`java.lang.Class`)

| Change | Delta |             % |       Size | Objects | Caller      | Location          |
| -----: | ----: | ------------: | ---------: | ------: | ----------- | ----------------- |
|    new | +24 B | 0.0% → 100.0% | 0 B → 24 B |   0 → 1 | `getName()` | `java.lang.Class` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |        Delta |      % |                Size | Objects | Caller      | Location              |
| -----: | -----------: | -----: | ------------------: | ------: | ----------- | --------------------- |
| -12.2% | -292.773 KiB | 100.0% | 2.35 MiB → 2.06 MiB |   3 → 1 | `grow(int)` | `java.util.ArrayList` |

##### `parseName(byte[], int)` (`java.util.jar.Manifest`)

|  Change | Delta |             % |       Size | Objects | Caller                      | Location                 |
| ------: | ----: | ------------: | ---------: | ------: | --------------------------- | ------------------------ |
| removed | -24 B | 100.0% → 0.0% | 24 B → 0 B |   1 → 0 | `read(InputStream, String)` | `java.util.jar.Manifest` |

##### `getClassLoadingLock(String)` (`java.lang.ClassLoader`)

|  Change | Delta |             % |       Size | Objects | Caller                             | Location                                 |
| ------: | ----: | ------------: | ---------: | ------: | ---------------------------------- | ---------------------------------------- |
| removed | -16 B | 100.0% → 0.0% | 16 B → 0 B |   1 → 0 | `loadClassOrNull(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

### Total size

#### Regressions

Functions with the largest increase in bytes retained within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|      Change |        Delta |             % |                Size | Objects | Function                                                                                                               | Location                                                               |
| ----------: | -----------: | ------------: | ------------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|         new |    +2.31 MiB |  0.0% → 90.2% |      0 B → 2.31 MiB |   0 → 9 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|         new |    +2.06 MiB |  0.0% → 80.5% |      0 B → 2.06 MiB |   0 → 1 | `accept(Object, Object)`                                                                                               | `java.util.stream.Collectors$$Lambda.0x00000088010e3e58`               |
|      +12.1% | +255.273 KiB | 79.4% → 90.2% | 2.06 MiB → 2.31 MiB |  6 → 12 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|      +12.1% | +255.273 KiB | 79.4% → 90.2% | 2.06 MiB → 2.31 MiB |  6 → 12 | `invokeStatic(Object, Object)`                                                                                         | `java.lang.invoke.LambdaForm$DMH.0x0000008801001c00`                   |
|      +12.1% | +255.273 KiB | 79.4% → 90.2% | 2.06 MiB → 2.31 MiB |  6 → 12 | `invoke(Object, Object, Object)`                                                                                       | `java.lang.invoke.LambdaForm$MH.0x0000008801082400`                    |
|      +12.1% | +255.273 KiB | 79.4% → 90.2% | 2.06 MiB → 2.31 MiB |  6 → 12 | `invokeExact_MT(Object, Object, Object, Object)`                                                                       | `java.lang.invoke.Invokers$Holder`                                     |
|      +12.1% | +255.273 KiB | 79.4% → 90.2% | 2.06 MiB → 2.31 MiB |  6 → 12 | `invokeImpl(Object, Object[])`                                                                                         | `jdk.internal.reflect.DirectMethodHandleAccessor`                      |
|      +12.1% | +255.273 KiB | 79.4% → 90.2% | 2.06 MiB → 2.31 MiB |  6 → 12 | `invoke(Object, Object[])`                                                                                             | `jdk.internal.reflect.DirectMethodHandleAccessor`                      |
|      +12.1% | +255.273 KiB | 79.4% → 90.2% | 2.06 MiB → 2.31 MiB |  6 → 12 | `invoke(Object, Object[])`                                                                                             | `java.lang.reflect.Method`                                             |
|      +12.1% | +255.273 KiB | 79.4% → 90.2% | 2.06 MiB → 2.31 MiB |  6 → 12 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
|      +12.1% | +255.273 KiB | 79.4% → 90.2% | 2.06 MiB → 2.31 MiB |  6 → 12 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
|      +12.1% | +255.273 KiB | 79.4% → 90.2% | 2.06 MiB → 2.31 MiB |  6 → 12 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
|      +12.1% | +255.265 KiB | 79.4% → 90.2% | 2.06 MiB → 2.31 MiB |  5 → 11 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|      +12.1% | +255.226 KiB | 79.4% → 90.2% | 2.06 MiB → 2.31 MiB |   4 → 9 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000880117c3b8` |
|      +12.1% | +255.226 KiB | 79.4% → 90.2% | 2.06 MiB → 2.31 MiB |   4 → 9 | `apply(Object)`                                                                                                        | `scala.runtime.function.JProcedure1`                                   |
|      +12.1% | +255.226 KiB | 79.4% → 90.2% | 2.06 MiB → 2.31 MiB |   4 → 9 | `foreach(Function1)`                                                                                                   | `scala.collection.immutable.List`                                      |
|      +12.1% | +255.226 KiB | 79.4% → 90.2% | 2.06 MiB → 2.31 MiB |   4 → 9 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
| +1088500.0% | +255.117 KiB |  <0.1% → 9.7% |      24 B → 255 KiB |   1 → 3 | `run()`                                                                                                                | `java.net.URLClassLoader$1`                                            |
| +1088500.0% | +255.117 KiB |  <0.1% → 9.7% |      24 B → 255 KiB |   1 → 3 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)`                                            | `java.security.AccessController`                                       |
| +1088500.0% | +255.117 KiB |  <0.1% → 9.7% |      24 B → 255 KiB |   1 → 3 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)`                                                        | `java.security.AccessController`                                       |

##### Standard library

|      Change |        Delta |             % |                Size | Objects | Function                                                                    | Location                                                 |
| ----------: | -----------: | ------------: | ------------------: | ------: | --------------------------------------------------------------------------- | -------------------------------------------------------- |
|         new |    +2.06 MiB |  0.0% → 80.5% |      0 B → 2.06 MiB |   0 → 1 | `accept(Object, Object)`                                                    | `java.util.stream.Collectors$$Lambda.0x00000088010e3e58` |
|      +12.1% | +255.273 KiB | 79.4% → 90.2% | 2.06 MiB → 2.31 MiB |  6 → 12 | `invokeStatic(Object, Object)`                                              | `java.lang.invoke.LambdaForm$DMH.0x0000008801001c00`     |
|      +12.1% | +255.273 KiB | 79.4% → 90.2% | 2.06 MiB → 2.31 MiB |  6 → 12 | `invoke(Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x0000008801082400`      |
|      +12.1% | +255.273 KiB | 79.4% → 90.2% | 2.06 MiB → 2.31 MiB |  6 → 12 | `invokeExact_MT(Object, Object, Object, Object)`                            | `java.lang.invoke.Invokers$Holder`                       |
|      +12.1% | +255.273 KiB | 79.4% → 90.2% | 2.06 MiB → 2.31 MiB |  6 → 12 | `invokeImpl(Object, Object[])`                                              | `jdk.internal.reflect.DirectMethodHandleAccessor`        |
|      +12.1% | +255.273 KiB | 79.4% → 90.2% | 2.06 MiB → 2.31 MiB |  6 → 12 | `invoke(Object, Object[])`                                                  | `jdk.internal.reflect.DirectMethodHandleAccessor`        |
|      +12.1% | +255.273 KiB | 79.4% → 90.2% | 2.06 MiB → 2.31 MiB |  6 → 12 | `invoke(Object, Object[])`                                                  | `java.lang.reflect.Method`                               |
|      +12.1% | +255.226 KiB | 79.4% → 90.2% | 2.06 MiB → 2.31 MiB |   4 → 9 | `apply(Object)`                                                             | `scala.runtime.function.JProcedure1`                     |
|      +12.1% | +255.226 KiB | 79.4% → 90.2% | 2.06 MiB → 2.31 MiB |   4 → 9 | `foreach(Function1)`                                                        | `scala.collection.immutable.List`                        |
| +1088500.0% | +255.117 KiB |  <0.1% → 9.7% |      24 B → 255 KiB |   1 → 3 | `run()`                                                                     | `java.net.URLClassLoader$1`                              |
| +1088500.0% | +255.117 KiB |  <0.1% → 9.7% |      24 B → 255 KiB |   1 → 3 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` | `java.security.AccessController`                         |
| +1088500.0% | +255.117 KiB |  <0.1% → 9.7% |      24 B → 255 KiB |   1 → 3 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)`             | `java.security.AccessController`                         |
| +1088500.0% | +255.117 KiB |  <0.1% → 9.7% |      24 B → 255 KiB |   1 → 3 | `findClass(String)`                                                         | `java.net.URLClassLoader`                                |
|  +653060.0% | +255.101 KiB |  <0.1% → 9.7% |      40 B → 255 KiB |   2 → 3 | `loadClass(String, boolean)`                                                | `java.lang.ClassLoader`                                  |
|  +653060.0% | +255.101 KiB |  <0.1% → 9.7% |      40 B → 255 KiB |   2 → 3 | `loadClass(String)`                                                         | `java.lang.ClassLoader`                                  |
|         new | +255.085 KiB |   0.0% → 9.7% |       0 B → 255 KiB |   0 → 1 | `initCEN(int, ZipCoder)`                                                    | `java.util.zip.ZipFile$Source`                           |
|         new | +255.085 KiB |   0.0% → 9.7% |       0 B → 255 KiB |   0 → 1 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)`                             | `java.util.zip.ZipFile$Source`                           |
|         new | +255.085 KiB |   0.0% → 9.7% |       0 B → 255 KiB |   0 → 1 | `get(File, boolean, ZipCoder)`                                              | `java.util.zip.ZipFile$Source`                           |
|         new | +255.085 KiB |   0.0% → 9.7% |       0 B → 255 KiB |   0 → 1 | `<init>(ZipFile, ZipCoder, File, int)`                                      | `java.util.zip.ZipFile$CleanableResource`                |
|         new | +255.085 KiB |   0.0% → 9.7% |       0 B → 255 KiB |   0 → 1 | `<init>(File, int, Charset)`                                                | `java.util.zip.ZipFile`                                  |

#### Improvements

Functions with the largest decrease in bytes retained within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |        Delta |             % |                Size | Objects | Function                                                                                                               | Location                                                               |
| ------: | -----------: | ------------: | ------------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| removed |    -2.06 MiB |  79.4% → 0.0% |      2.06 MiB → 0 B |   4 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
| -100.0% |    -2.06 MiB | 79.4% → <0.1% |     2.06 MiB → 32 B |       1 | `accept(Object, Object)`                                                                                               | `java.util.stream.Collectors$$Lambda.0x000000880100c000`               |
|  -12.2% | -292.773 KiB | 90.4% → 80.5% | 2.35 MiB → 2.06 MiB |   3 → 1 | `copyOf(Object[], int)`                                                                                                | `java.util.Arrays`                                                     |
|  -12.2% | -292.773 KiB | 90.4% → 80.5% | 2.35 MiB → 2.06 MiB |   3 → 1 | `grow(int)`                                                                                                            | `java.util.ArrayList`                                                  |
| removed | -292.773 KiB |  11.0% → 0.0% |       293 KiB → 0 B |   2 → 0 | `addAll(Collection)`                                                                                                   | `java.util.ArrayList`                                                  |
| removed | -292.773 KiB |  11.0% → 0.0% |       293 KiB → 0 B |   2 → 0 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed | -292.773 KiB |  11.0% → 0.0% |       293 KiB → 0 B |   2 → 0 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000003011e4fd0` |
| removed | -292.773 KiB |  11.0% → 0.0% |       293 KiB → 0 B |   2 → 0 | `merge(Object, Object, BiFunction)`                                                                                    | `java.util.HashMap`                                                    |
| removed | -292.773 KiB |  11.0% → 0.0% |       293 KiB → 0 B |   2 → 0 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed | -292.773 KiB |  11.0% → 0.0% |       293 KiB → 0 B |   2 → 0 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000003011e4d88` |
| removed | -292.773 KiB |  11.0% → 0.0% |       293 KiB → 0 B |   2 → 0 | `forEach(BiConsumer)`                                                                                                  | `java.util.HashMap`                                                    |
| removed | -292.773 KiB |  11.0% → 0.0% |       293 KiB → 0 B |   2 → 0 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed | -292.773 KiB |  11.0% → 0.0% |       293 KiB → 0 B |   2 → 0 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed | -292.773 KiB |  11.0% → 0.0% |       293 KiB → 0 B |   2 → 0 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed | -292.773 KiB |  11.0% → 0.0% |       293 KiB → 0 B |   2 → 0 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| removed | -292.773 KiB |  11.0% → 0.0% |       293 KiB → 0 B |   2 → 0 | `exec()`                                                                                                               | `java.util.concurrent.RecursiveTask`                                   |
| removed | -292.773 KiB |  11.0% → 0.0% |       293 KiB → 0 B |   2 → 0 | `doExec()`                                                                                                             | `java.util.concurrent.ForkJoinTask`                                    |
| removed | -292.773 KiB |  11.0% → 0.0% |       293 KiB → 0 B |   2 → 0 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`                                                                   | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
| removed | -292.773 KiB |  11.0% → 0.0% |       293 KiB → 0 B |   2 → 0 | `scan(ForkJoinPool$WorkQueue, int, int)`                                                                               | `java.util.concurrent.ForkJoinPool`                                    |
| removed | -292.773 KiB |  11.0% → 0.0% |       293 KiB → 0 B |   2 → 0 | `runWorker(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`                                    |

##### Standard library

|  Change |        Delta |             % |                Size | Objects | Function                                             | Location                                                 |
| ------: | -----------: | ------------: | ------------------: | ------: | ---------------------------------------------------- | -------------------------------------------------------- |
| -100.0% |    -2.06 MiB | 79.4% → <0.1% |     2.06 MiB → 32 B |       1 | `accept(Object, Object)`                             | `java.util.stream.Collectors$$Lambda.0x000000880100c000` |
|  -12.2% | -292.773 KiB | 90.4% → 80.5% | 2.35 MiB → 2.06 MiB |   3 → 1 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                       |
|  -12.2% | -292.773 KiB | 90.4% → 80.5% | 2.35 MiB → 2.06 MiB |   3 → 1 | `grow(int)`                                          | `java.util.ArrayList`                                    |
| removed | -292.773 KiB |  11.0% → 0.0% |       293 KiB → 0 B |   2 → 0 | `addAll(Collection)`                                 | `java.util.ArrayList`                                    |
| removed | -292.773 KiB |  11.0% → 0.0% |       293 KiB → 0 B |   2 → 0 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                                      |
| removed | -292.773 KiB |  11.0% → 0.0% |       293 KiB → 0 B |   2 → 0 | `forEach(BiConsumer)`                                | `java.util.HashMap`                                      |
| removed | -292.773 KiB |  11.0% → 0.0% |       293 KiB → 0 B |   2 → 0 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                     |
| removed | -292.773 KiB |  11.0% → 0.0% |       293 KiB → 0 B |   2 → 0 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                      |
| removed | -292.773 KiB |  11.0% → 0.0% |       293 KiB → 0 B |   2 → 0 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`            |
| removed | -292.773 KiB |  11.0% → 0.0% |       293 KiB → 0 B |   2 → 0 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                      |
| removed | -292.773 KiB |  11.0% → 0.0% |       293 KiB → 0 B |   2 → 0 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                      |
| removed | -292.773 KiB |  11.0% → 0.0% |       293 KiB → 0 B |   2 → 0 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`              |
| removed |        -24 B |  <0.1% → 0.0% |          24 B → 0 B |   1 → 0 | `parseName(byte[], int)`                             | `java.util.jar.Manifest`                                 |
| removed |        -16 B |  <0.1% → 0.0% |          16 B → 0 B |   1 → 0 | `getClassLoadingLock(String)`                        | `java.lang.ClassLoader`                                  |
| removed |        -16 B |  <0.1% → 0.0% |          16 B → 0 B |   1 → 0 | `loadClassOrNull(String, boolean)`                   | `jdk.internal.loader.BuiltinClassLoader`                 |
| removed |        -16 B |  <0.1% → 0.0% |          16 B → 0 B |   1 → 0 | `loadClass(String, boolean)`                         | `jdk.internal.loader.BuiltinClassLoader`                 |
| removed |        -16 B |  <0.1% → 0.0% |          16 B → 0 B |   1 → 0 | `loadClass(String, boolean)`                         | `jdk.internal.loader.ClassLoaders$AppClassLoader`        |
| removed |        -16 B |  <0.1% → 0.0% |          16 B → 0 B |   1 → 0 | `from(IterableOnce)`                                 | `scala.collection.immutable.ListMap$`                    |
| removed |        -16 B |  <0.1% → 0.0% |          16 B → 0 B |   1 → 0 | `apply(Seq)`                                         | `scala.collection.MapFactory`                            |
| removed |        -16 B |  <0.1% → 0.0% |          16 B → 0 B |   1 → 0 | `apply$(MapFactory, Seq)`                            | `scala.collection.MapFactory`                            |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |        Delta |            % |           Size | Objects | Callee                                                                                       | Location                                  |
| -----: | -----------: | -----------: | -------------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
|    new |   +2.061 MiB | 0.0% → 89.2% | 0 B → 2.06 MiB |   0 → 8 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
|    new | +255.085 KiB | 0.0% → 10.8% |  0 B → 255 KiB |   0 → 1 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `accept(Object, Object)` (`java.util.stream.Collectors$$Lambda.0x00000088010e3e58`)

| Change |     Delta |             % |           Size | Objects | Callee        | Location              |
| -----: | --------: | ------------: | -------------: | ------: | ------------- | --------------------- |
|    new | +2.06 MiB | 0.0% → 100.0% | 0 B → 2.06 MiB |   0 → 1 | `add(Object)` | `java.util.ArrayList` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

| Change |        Delta |      % |                Size | Objects | Callee              | Location                                    |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------- | ------------------------------------------- |
| +12.1% | +255.265 KiB | 100.0% | 2.06 MiB → 2.31 MiB |  5 → 11 | `main(String[])`    | `org.renaissance.harness.RenaissanceSuite$` |
| +33.3% |         +8 B |  <0.1% |         24 B → 32 B |       1 | `loadClass(String)` | `java.lang.ClassLoader`                     |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000008801001c00`)

| Change |        Delta |      % |                Size | Objects | Callee           | Location                                   |
| -----: | -----------: | -----: | ------------------: | ------: | ---------------- | ------------------------------------------ |
| +12.1% | +255.273 KiB | 100.0% | 2.06 MiB → 2.31 MiB |  6 → 12 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000008801082400`)

| Change |        Delta |      % |                Size | Objects | Callee                         | Location                                             |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------ | ---------------------------------------------------- |
| +12.1% | +255.273 KiB | 100.0% | 2.06 MiB → 2.31 MiB |  6 → 12 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000008801001c00` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change |        Delta |      % |                Size | Objects | Callee                           | Location                                            |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------------- | --------------------------------------------------- |
| +12.1% | +255.273 KiB | 100.0% | 2.06 MiB → 2.31 MiB |  6 → 12 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000008801082400` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |        Delta |      % |                Size | Objects | Callee                                           | Location                           |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------------------------ | ---------------------------------- |
| +12.1% | +255.273 KiB | 100.0% | 2.06 MiB → 2.31 MiB |  6 → 12 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |        Delta |      % |                Size | Objects | Callee                         | Location                                          |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------ | ------------------------------------------------- |
| +12.1% | +255.273 KiB | 100.0% | 2.06 MiB → 2.31 MiB |  6 → 12 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

| Change |        Delta |      % |                Size | Objects | Callee                     | Location                                          |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------- | ------------------------------------------------- |
| +12.1% | +255.273 KiB | 100.0% | 2.06 MiB → 2.31 MiB |  6 → 12 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

| Change |        Delta |      % |                Size | Objects | Callee                     | Location                   |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------- | -------------------------- |
| +12.1% | +255.273 KiB | 100.0% | 2.06 MiB → 2.31 MiB |  6 → 12 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

| Change |        Delta |      % |                Size | Objects | Callee                                                      | Location                        |
| -----: | -----------: | -----: | ------------------: | ------: | ----------------------------------------------------------- | ------------------------------- |
| +12.1% | +255.273 KiB | 100.0% | 2.06 MiB → 2.31 MiB |  6 → 12 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.core.Launcher`)

| Change |        Delta |      % |                Size | Objects | Callee                                 | Location                        |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------------------- | ------------------------------- |
| +12.1% | +255.273 KiB | 100.0% | 2.06 MiB → 2.31 MiB |  6 → 12 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |        Delta |            % |                Size | Objects | Callee                                                                        | Location                                    |
| ------: | -----------: | -----------: | ------------------: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
|  +12.1% | +255.226 KiB |       100.0% | 2.06 MiB → 2.31 MiB |   4 → 9 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |
|     new |        +32 B | 0.0% → <0.1% |          0 B → 32 B |   0 → 1 | `apply(Function0)`                                                            | `scala.util.Try$`                           |
|     new |        +24 B | 0.0% → <0.1% |          0 B → 24 B |   0 → 1 | `loadClass(String)`                                                           | `java.lang.ClassLoader`                     |
| removed |        -16 B | <0.1% → 0.0% |          16 B → 0 B |   1 → 0 | `parse(String[])`                                                             | `org.renaissance.harness.ConfigParser`      |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000880117c3b8`)

|  Change |     Delta |             % |           Size | Objects | Callee                                                                                                                 | Location                                    |
| ------: | --------: | ------------: | -------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
|     new | +2.31 MiB | 0.0% → 100.0% | 0 B → 2.31 MiB |   0 → 9 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
| removed | -2.06 MiB | 100.0% → 0.0% | 2.06 MiB → 0 B |   4 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

| Change |        Delta |      % |                Size | Objects | Callee              | Location                                                               |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
| +12.1% | +255.226 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   4 → 9 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000880117c3b8` |
| +12.1% | +255.226 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   4 → 9 | `apply(Object)`     | `scala.runtime.function.JProcedure1`                                   |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

| Change |        Delta |      % |                Size | Objects | Callee          | Location                             |
| -----: | -----------: | -----: | ------------------: | ------: | --------------- | ------------------------------------ |
| +12.1% | +255.226 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   4 → 9 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |        Delta |      % |                Size | Objects | Callee               | Location                          |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------- | --------------------------------- |
| +12.1% | +255.226 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   4 → 9 | `foreach(Function1)` | `scala.collection.immutable.List` |

##### `run()` (`java.net.URLClassLoader$1`)

|      Change |        Delta |              % |           Size | Objects | Callee                          | Location                           |
| ----------: | -----------: | -------------: | -------------: | ------: | ------------------------------- | ---------------------------------- |
| +1088500.0% | +255.117 KiB |         100.0% | 24 B → 255 KiB |   1 → 3 | `run()`                         | `java.net.URLClassLoader$1`        |
|         new | +255.085 KiB |  0.0% → 100.0% |  0 B → 255 KiB |   0 → 1 | `getResource(String, boolean)`  | `jdk.internal.loader.URLClassPath` |
|     +133.3% |        +32 B | 100.0% → <0.1% |    24 B → 56 B |   1 → 2 | `defineClass(String, Resource)` | `java.net.URLClassLoader`          |

##### `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`)

|      Change |        Delta |             % |           Size | Objects | Callee  | Location                                       |
| ----------: | -----------: | ------------: | -------------: | ------: | ------- | ---------------------------------------------- |
| +1088500.0% | +255.117 KiB |        100.0% | 24 B → 255 KiB |   1 → 3 | `run()` | `java.net.URLClassLoader$1`                    |
|         new | +255.085 KiB | 0.0% → 100.0% |  0 B → 255 KiB |   0 → 1 | `run()` | `jdk.internal.loader.URLClassPath$JarLoader$1` |
|         new | +255.085 KiB | 0.0% → 100.0% |  0 B → 255 KiB |   0 → 1 | `run()` | `jdk.internal.loader.URLClassPath$3`           |

##### `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` (`java.security.AccessController`)

|      Change |        Delta |      % |           Size | Objects | Callee                                                                      | Location                         |
| ----------: | -----------: | -----: | -------------: | ------: | --------------------------------------------------------------------------- | -------------------------------- |
| +1088500.0% | +255.117 KiB | 100.0% | 24 B → 255 KiB |   1 → 3 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` | `java.security.AccessController` |

##### `findClass(String)` (`java.net.URLClassLoader`)

|      Change |        Delta |      % |           Size | Objects | Callee                                                          | Location                         |
| ----------: | -----------: | -----: | -------------: | ------: | --------------------------------------------------------------- | -------------------------------- |
| +1088500.0% | +255.117 KiB | 100.0% | 24 B → 255 KiB |   1 → 3 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` | `java.security.AccessController` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|      Change |        Delta |              % |           Size | Objects | Callee                       | Location                                          |
| ----------: | -----------: | -------------: | -------------: | ------: | ---------------------------- | ------------------------------------------------- |
| +1088500.0% | +255.117 KiB | 60.0% → 100.0% | 24 B → 255 KiB |   1 → 3 | `findClass(String)`          | `java.net.URLClassLoader`                         |
|     removed |        -16 B |   40.0% → 0.0% |     16 B → 0 B |   1 → 0 | `loadClass(String, boolean)` | `jdk.internal.loader.ClassLoaders$AppClassLoader` |

##### `loadClass(String)` (`java.lang.ClassLoader`)

|     Change |        Delta |      % |           Size | Objects | Callee                       | Location                |
| ---------: | -----------: | -----: | -------------: | ------: | ---------------------------- | ----------------------- |
| +653060.0% | +255.101 KiB | 100.0% | 40 B → 255 KiB |   2 → 3 | `loadClass(String, boolean)` | `java.lang.ClassLoader` |

##### `<init>(ZipFile$Source$Key, boolean, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |        Delta |             % |          Size | Objects | Callee                   | Location                       |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------ | ------------------------------ |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `initCEN(int, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `get(File, boolean, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |        Delta |             % |          Size | Objects | Callee                                          | Location                       |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------------------------------- | ------------------------------ |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `<init>(ZipFile, ZipCoder, File, int)` (`java.util.zip.ZipFile$CleanableResource`)

| Change |        Delta |             % |          Size | Objects | Callee                         | Location                       |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------ | ------------------------------ |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `get(File, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `<init>(File, int, Charset)` (`java.util.zip.ZipFile`)

| Change |        Delta |             % |          Size | Objects | Callee                                 | Location                                  |
| -----: | -----------: | ------------: | ------------: | ------: | -------------------------------------- | ----------------------------------------- |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `<init>(ZipFile, ZipCoder, File, int)` | `java.util.zip.ZipFile$CleanableResource` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |     Delta |             % |           Size | Objects | Callee               | Location                                  |
| ------: | --------: | ------------: | -------------: | ------: | -------------------- | ----------------------------------------- |
| removed | -2.06 MiB | 100.0% → 0.0% | 2.06 MiB → 0 B |   4 → 0 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `accept(Object, Object)` (`java.util.stream.Collectors$$Lambda.0x000000880100c000`)

|  Change |     Delta |             % |           Size | Objects | Callee                                                             | Location                      |
| ------: | --------: | ------------: | -------------: | ------: | ------------------------------------------------------------------ | ----------------------------- |
| removed | -2.06 MiB | 100.0% → 0.0% | 2.06 MiB → 0 B |   1 → 0 | `add(Object)`                                                      | `java.util.ArrayList`         |
|     new |     +32 B | 0.0% → 100.0% |     0 B → 32 B |   0 → 1 | `lambda$uniqKeysMapAccumulator$1(Function, Function, Map, Object)` | `java.util.stream.Collectors` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size | Objects | Callee                  | Location           |
| -----: | -----------: | -----: | ------------------: | ------: | ----------------------- | ------------------ |
| -12.2% | -292.773 KiB | 100.0% | 2.35 MiB → 2.06 MiB |   3 → 1 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `addAll(Collection)` (`java.util.ArrayList`)

|  Change |        Delta |             % |          Size | Objects | Callee      | Location              |
| ------: | -----------: | ------------: | ------------: | ------: | ----------- | --------------------- |
| removed | -292.773 KiB | 100.0% → 0.0% | 293 KiB → 0 B |   2 → 0 | `grow(int)` | `java.util.ArrayList` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |        Delta |             % |          Size | Objects | Callee               | Location              |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------- | --------------------- |
| removed | -292.773 KiB | 100.0% → 0.0% | 293 KiB → 0 B |   2 → 0 | `addAll(Collection)` | `java.util.ArrayList` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000003011e4fd0`)

|  Change |        Delta |             % |          Size | Objects | Callee                       | Location                                    |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------- | ------------------------------------------- |
| removed | -292.773 KiB | 100.0% → 0.0% | 293 KiB → 0 B |   2 → 0 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|  Change |        Delta |             % |          Size | Objects | Callee                  | Location                                                               |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| removed | -292.773 KiB | 100.0% → 0.0% | 293 KiB → 0 B |   2 → 0 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000003011e4fd0` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |        Delta |             % |          Size | Objects | Callee                              | Location            |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------------------- | ------------------- |
| removed | -292.773 KiB | 100.0% → 0.0% | 293 KiB → 0 B |   2 → 0 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000003011e4d88`)

|  Change |        Delta |             % |          Size | Objects | Callee                              | Location                                    |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------------------- | ------------------------------------------- |
| removed | -292.773 KiB | 100.0% → 0.0% | 293 KiB → 0 B |   2 → 0 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|  Change |        Delta |             % |          Size | Objects | Callee                   | Location                                                               |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| removed | -292.773 KiB | 100.0% → 0.0% | 293 KiB → 0 B |   2 → 0 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000003011e4d88` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |        Delta |             % |          Size | Objects | Callee                | Location            |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------- | ------------------- |
| removed | -292.773 KiB | 100.0% → 0.0% | 293 KiB → 0 B |   2 → 0 | `forEach(BiConsumer)` | `java.util.HashMap` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change |        Delta |             % |          Size | Objects | Callee            | Location                                    |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------- | ------------------------------------------- |
| removed | -292.773 KiB | 100.0% → 0.0% | 293 KiB → 0 B |   2 → 0 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change |        Delta |             % |          Size | Objects | Callee                     | Location                                                   |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------------- | ---------------------------------------------------------- |
| removed | -292.773 KiB | 100.0% → 0.0% | 293 KiB → 0 B |   2 → 0 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|  Change |        Delta |             % |          Size | Objects | Callee                           | Location                                                   |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------------------- | ---------------------------------------------------------- |
| removed | -292.773 KiB | 100.0% → 0.0% | 293 KiB → 0 B |   2 → 0 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|  Change |        Delta |             % |          Size | Objects | Callee      | Location                                               |
| ------: | -----------: | ------------: | ------------: | ------: | ----------- | ------------------------------------------------------ |
| removed | -292.773 KiB | 100.0% → 0.0% | 293 KiB → 0 B |   2 → 0 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|  Change |        Delta |             % |          Size | Objects | Callee   | Location                             |
| ------: | -----------: | ------------: | ------------: | ------: | -------- | ------------------------------------ |
| removed | -292.773 KiB | 100.0% → 0.0% | 293 KiB → 0 B |   2 → 0 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change |        Delta |             % |          Size | Objects | Callee     | Location                            |
| ------: | -----------: | ------------: | ------------: | ------: | ---------- | ----------------------------------- |
| removed | -292.773 KiB | 100.0% → 0.0% | 293 KiB → 0 B |   2 → 0 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|  Change |        Delta |             % |          Size | Objects | Callee                                               | Location                                      |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------------------------------- | --------------------------------------------- |
| removed | -292.773 KiB | 100.0% → 0.0% | 293 KiB → 0 B |   2 → 0 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|  Change |        Delta |             % |          Size | Objects | Callee                                   | Location                            |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------------------- | ----------------------------------- |
| removed | -292.773 KiB | 100.0% → 0.0% | 293 KiB → 0 B |   2 → 0 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|  Change |        Delta |             % |          Size | Objects | Callee                              | Location                            |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------------------- | ----------------------------------- |
| removed | -292.773 KiB | 100.0% → 0.0% | 293 KiB → 0 B |   2 → 0 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

|  Change | Delta |             % |       Size | Objects | Callee                        | Location                |
| ------: | ----: | ------------: | ---------: | ------: | ----------------------------- | ----------------------- |
| removed | -16 B | 100.0% → 0.0% | 16 B → 0 B |   1 → 0 | `getClassLoadingLock(String)` | `java.lang.ClassLoader` |

##### `loadClass(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

|  Change | Delta |             % |       Size | Objects | Callee                             | Location                                 |
| ------: | ----: | ------------: | ---------: | ------: | ---------------------------------- | ---------------------------------------- |
| removed | -16 B | 100.0% → 0.0% | 16 B → 0 B |   1 → 0 | `loadClassOrNull(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `loadClass(String, boolean)` (`jdk.internal.loader.ClassLoaders$AppClassLoader`)

|  Change | Delta |             % |       Size | Objects | Callee                       | Location                                 |
| ------: | ----: | ------------: | ---------: | ------: | ---------------------------- | ---------------------------------------- |
| removed | -16 B | 100.0% → 0.0% | 16 B → 0 B |   1 → 0 | `loadClass(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `from(IterableOnce)` (`scala.collection.immutable.ListMap$`)

|  Change | Delta |             % |       Size | Objects | Callee               | Location                              |
| ------: | ----: | ------------: | ---------: | ------: | -------------------- | ------------------------------------- |
| removed | -16 B | 100.0% → 0.0% | 16 B → 0 B |   1 → 0 | `loadClass(String)`  | `java.lang.ClassLoader`               |
| removed | -16 B | 100.0% → 0.0% | 16 B → 0 B |   1 → 0 | `from(IterableOnce)` | `scala.collection.immutable.ListMap$` |

##### `apply(Seq)` (`scala.collection.MapFactory`)

|  Change | Delta |             % |       Size | Objects | Callee               | Location                              |
| ------: | ----: | ------------: | ---------: | ------: | -------------------- | ------------------------------------- |
| removed | -16 B | 100.0% → 0.0% | 16 B → 0 B |   1 → 0 | `from(IterableOnce)` | `scala.collection.immutable.ListMap$` |

##### `apply$(MapFactory, Seq)` (`scala.collection.MapFactory`)

|  Change | Delta |             % |       Size | Objects | Callee       | Location                      |
| ------: | ----: | ------------: | ---------: | ------: | ------------ | ----------------------------- |
| removed | -16 B | 100.0% → 0.0% | 16 B → 0 B |   1 → 0 | `apply(Seq)` | `scala.collection.MapFactory` |

# Lock contention profile diff

Blocked 7.50s → 7.77s (+265.53ms, +3.5%) over 75 contentions → 62 contentions (100.1ms → 125.4ms per contention).

| Category         | Change |     Delta |      % |          Time | Contentions |
| ---------------- | -----: | --------: | -----: | ------------: | ----------: |
| Standard library |  +3.5% | +265.53ms | 100.0% | 7.50s → 7.77s |     75 → 62 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time blocked within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Standard library

| Change |     Delta |      % |          Time | Contentions | Function              | Location                   |
| -----: | --------: | -----: | ------------: | ----------: | --------------------- | -------------------------- |
|  +3.5% | +265.53ms | 100.0% | 7.50s → 7.77s |     75 → 62 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

| Change |     Delta |             % |              Time | Contentions | Caller            | Location                                 |
| -----: | --------: | ------------: | ----------------: | ----------: | ----------------- | ---------------------------------------- |
|  +3.3% | +237.24ms | 96.8% → 96.5% |     7.26s → 7.50s |     67 → 52 | `park()`          | `java.util.concurrent.locks.LockSupport` |
| +11.6% |  +28.29ms |   3.2% → 3.5% | 244.0ms → 272.3ms |      8 → 10 | `parkUntil(long)` | `java.util.concurrent.locks.LockSupport` |

### Total time

#### Regressions

Functions with the largest increase in time blocked within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

| Change |     Delta |             % |          Time | Contentions | Function                                                                                                               | Location                                                               |
| -----: | --------: | ------------: | ------------: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|    new |   +6.386s |  0.0% → 82.1% |   0ms → 6.38s |      0 → 16 | `$anonfun$2(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|    new |   +6.386s |  0.0% → 82.1% |   0ms → 6.38s |      0 → 16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +7.9% | +466.04ms | 78.8% → 82.1% | 5.92s → 6.38s |          16 | `get()`                                                                                                                | `java.util.concurrent.ForkJoinTask`                                    |
|  +7.9% | +466.04ms | 78.8% → 82.1% | 5.92s → 6.38s |          16 | `run(int, List, int)`                                                                                                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +7.9% | +466.04ms | 78.8% → 82.1% | 5.92s → 6.38s |          16 | `$anonfun$adapted$1(Object)`                                                                                           | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  +7.9% | +466.04ms | 78.8% → 82.1% | 5.92s → 6.38s |          16 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000088011fdb90`   |
|  +7.9% | +466.04ms | 78.8% → 82.1% | 5.92s → 6.38s |          16 | `map(Function1)`                                                                                                       | `scala.collection.immutable.Range`                                     |
|  +7.9% | +466.04ms | 78.8% → 82.1% | 5.92s → 6.38s |          16 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  +7.9% | +466.04ms | 78.8% → 82.1% | 5.92s → 6.38s |          16 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |
|  +7.9% | +466.04ms | 78.8% → 82.1% | 5.92s → 6.38s |          16 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|  +7.9% | +466.04ms | 78.8% → 82.1% | 5.92s → 6.38s |          16 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000880117c3b8` |
|  +7.9% | +466.04ms | 78.8% → 82.1% | 5.92s → 6.38s |          16 | `apply(Object)`                                                                                                        | `scala.runtime.function.JProcedure1`                                   |
|  +7.9% | +466.04ms | 78.8% → 82.1% | 5.92s → 6.38s |          16 | `foreach(Function1)`                                                                                                   | `scala.collection.immutable.List`                                      |
|  +7.9% | +466.04ms | 78.8% → 82.1% | 5.92s → 6.38s |          16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +7.9% | +466.04ms | 78.8% → 82.1% | 5.92s → 6.38s |          16 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +7.9% | +466.04ms | 78.8% → 82.1% | 5.92s → 6.38s |          16 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|  +7.9% | +466.04ms | 78.8% → 82.1% | 5.92s → 6.38s |          16 | `invokeStatic(Object, Object)`                                                                                         | `java.lang.invoke.LambdaForm$DMH.0x0000008801001c00`                   |
|  +7.9% | +466.04ms | 78.8% → 82.1% | 5.92s → 6.38s |          16 | `invoke(Object, Object, Object)`                                                                                       | `java.lang.invoke.LambdaForm$MH.0x0000008801082400`                    |
|  +7.9% | +466.04ms | 78.8% → 82.1% | 5.92s → 6.38s |          16 | `invokeExact_MT(Object, Object, Object, Object)`                                                                       | `java.lang.invoke.Invokers$Holder`                                     |
|  +7.9% | +466.04ms | 78.8% → 82.1% | 5.92s → 6.38s |          16 | `invokeImpl(Object, Object[])`                                                                                         | `jdk.internal.reflect.DirectMethodHandleAccessor`                      |

##### Standard library

| Change |     Delta |             % |              Time | Contentions | Function                                         | Location                                             |
| -----: | --------: | ------------: | ----------------: | ----------: | ------------------------------------------------ | ---------------------------------------------------- |
|  +7.9% | +466.04ms | 78.8% → 82.1% |     5.92s → 6.38s |          16 | `get()`                                          | `java.util.concurrent.ForkJoinTask`                  |
|  +7.9% | +466.04ms | 78.8% → 82.1% |     5.92s → 6.38s |          16 | `map(Function1)`                                 | `scala.collection.immutable.Range`                   |
|  +7.9% | +466.04ms | 78.8% → 82.1% |     5.92s → 6.38s |          16 | `apply(Object)`                                  | `scala.runtime.function.JProcedure1`                 |
|  +7.9% | +466.04ms | 78.8% → 82.1% |     5.92s → 6.38s |          16 | `foreach(Function1)`                             | `scala.collection.immutable.List`                    |
|  +7.9% | +466.04ms | 78.8% → 82.1% |     5.92s → 6.38s |          16 | `invokeStatic(Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x0000008801001c00` |
|  +7.9% | +466.04ms | 78.8% → 82.1% |     5.92s → 6.38s |          16 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000008801082400`  |
|  +7.9% | +466.04ms | 78.8% → 82.1% |     5.92s → 6.38s |          16 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                   |
|  +7.9% | +466.04ms | 78.8% → 82.1% |     5.92s → 6.38s |          16 | `invokeImpl(Object, Object[])`                   | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +7.9% | +466.04ms | 78.8% → 82.1% |     5.92s → 6.38s |          16 | `invoke(Object, Object[])`                       | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +7.9% | +466.04ms | 78.8% → 82.1% |     5.92s → 6.38s |          16 | `invoke(Object, Object[])`                       | `java.lang.reflect.Method`                           |
|  +7.7% | +463.27ms | 79.6% → 82.9% |     5.97s → 6.44s |     19 → 20 | `awaitDone(int, long)`                           | `java.util.concurrent.ForkJoinTask`                  |
|  +3.5% | +265.53ms |        100.0% |     7.50s → 7.77s |     75 → 62 | `park(boolean, long)`                            | `jdk.internal.misc.Unsafe`                           |
|  +3.3% | +237.24ms | 96.8% → 96.5% |     7.26s → 7.50s |     67 → 52 | `park()`                                         | `java.util.concurrent.locks.LockSupport`             |
| +11.6% |  +28.29ms |   3.2% → 3.5% | 244.0ms → 272.3ms |      8 → 10 | `parkUntil(long)`                                | `java.util.concurrent.locks.LockSupport`             |
| +41.7% |   +8.61ms |   0.3% → 0.4% |   20.6ms → 29.3ms |       1 → 2 | `tryRemoveAndExec(ForkJoinTask, boolean)`        | `java.util.concurrent.ForkJoinPool$WorkQueue`        |

#### Improvements

Functions with the largest decrease in time blocked within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |     Delta |             % |            Time | Contentions | Function                                                                                                               | Location                                                               |
| ------: | --------: | ------------: | --------------: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| removed |   -5.920s |  78.8% → 0.0% |     5.92s → 0ms |      16 → 0 | `$anonfun$1(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`                              |
| removed |   -5.920s |  78.8% → 0.0% |     5.92s → 0ms |      16 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -12.6% | -200.51ms | 21.2% → 17.9% |   1.58s → 1.38s |     59 → 46 | `runWorker(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`                                    |
|  -12.6% | -200.51ms | 21.2% → 17.9% |   1.58s → 1.38s |     59 → 46 | `run()`                                                                                                                | `java.util.concurrent.ForkJoinWorkerThread`                            |
|  -12.9% | -197.74ms | 20.4% → 17.1% |   1.52s → 1.33s |     56 → 42 | `awaitWork(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`                                    |
| removed |  -19.22ms |   0.3% → 0.0% |    19.2ms → 0ms |       1 → 0 | `invoke()`                                                                                                             | `java.util.concurrent.ForkJoinTask`                                    |
| removed |  -19.22ms |   0.3% → 0.0% |    19.2ms → 0ms |       1 → 0 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed |  -19.22ms |   0.3% → 0.0% |    19.2ms → 0ms |       1 → 0 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000003011dfbc0` |
| removed |  -19.22ms |   0.3% → 0.0% |    19.2ms → 0ms |       1 → 0 | `exec()`                                                                                                               | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                    |
|   -4.7% |   -2.77ms |   0.8% → 0.7% | 59.2ms → 56.4ms |       3 → 4 | `join()`                                                                                                               | `java.util.concurrent.ForkJoinTask`                                    |
|   -4.7% |   -2.77ms |   0.8% → 0.7% | 59.2ms → 56.4ms |       3 → 4 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|   -4.7% |   -2.77ms |   0.8% → 0.7% | 59.2ms → 56.4ms |       3 → 4 | `exec()`                                                                                                               | `java.util.concurrent.RecursiveTask`                                   |
|   -4.7% |   -2.77ms |   0.8% → 0.7% | 59.2ms → 56.4ms |       3 → 4 | `doExec()`                                                                                                             | `java.util.concurrent.ForkJoinTask`                                    |
|   -4.7% |   -2.77ms |   0.8% → 0.7% | 59.2ms → 56.4ms |       3 → 4 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`                                                                   | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|   -4.7% |   -2.77ms |   0.8% → 0.7% | 59.2ms → 56.4ms |       3 → 4 | `scan(ForkJoinPool$WorkQueue, int, int)`                                                                               | `java.util.concurrent.ForkJoinPool`                                    |

##### Standard library

|  Change |     Delta |             % |            Time | Contentions | Function                                             | Location                                            |
| ------: | --------: | ------------: | --------------: | ----------: | ---------------------------------------------------- | --------------------------------------------------- |
|  -12.6% | -200.51ms | 21.2% → 17.9% |   1.58s → 1.38s |     59 → 46 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                 |
|  -12.6% | -200.51ms | 21.2% → 17.9% |   1.58s → 1.38s |     59 → 46 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`         |
|  -12.9% | -197.74ms | 20.4% → 17.1% |   1.52s → 1.33s |     56 → 42 | `awaitWork(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                 |
| removed |  -19.22ms |   0.3% → 0.0% |    19.2ms → 0ms |       1 → 0 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                 |
| removed |  -19.22ms |   0.3% → 0.0% |    19.2ms → 0ms |       1 → 0 | `exec()`                                             | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|   -4.7% |   -2.77ms |   0.8% → 0.7% | 59.2ms → 56.4ms |       3 → 4 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                 |
|   -4.7% |   -2.77ms |   0.8% → 0.7% | 59.2ms → 56.4ms |       3 → 4 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                |
|   -4.7% |   -2.77ms |   0.8% → 0.7% | 59.2ms → 56.4ms |       3 → 4 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                 |
|   -4.7% |   -2.77ms |   0.8% → 0.7% | 59.2ms → 56.4ms |       3 → 4 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
|   -4.7% |   -2.77ms |   0.8% → 0.7% | 59.2ms → 56.4ms |       3 → 4 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                 |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `$anonfun$2(int)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |   Delta |             % |        Time | Contentions | Callee                | Location                                    |
| -----: | ------: | ------------: | ----------: | ----------: | --------------------- | ------------------------------------------- |
|    new | +6.386s | 0.0% → 100.0% | 0ms → 6.38s |      0 → 16 | `run(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |   Delta |             % |        Time | Contentions | Callee               | Location                                  |
| -----: | ------: | ------------: | ----------: | ----------: | -------------------- | ----------------------------------------- |
|    new | +6.386s | 0.0% → 100.0% | 0ms → 6.38s |      0 → 16 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `get()` (`java.util.concurrent.ForkJoinTask`)

| Change |     Delta |      % |          Time | Contentions | Callee                 | Location                            |
| -----: | --------: | -----: | ------------: | ----------: | ---------------------- | ----------------------------------- |
|  +7.9% | +466.04ms | 100.0% | 5.92s → 6.38s |          16 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |     Delta |      % |          Time | Contentions | Callee  | Location                            |
| -----: | --------: | -----: | ------------: | ----------: | ------- | ----------------------------------- |
|  +7.9% | +466.04ms | 100.0% | 5.92s → 6.38s |          16 | `get()` | `java.util.concurrent.ForkJoinTask` |

##### `$anonfun$adapted$1(Object)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change |   Delta |             % |        Time | Contentions | Callee            | Location                                  |
| ------: | ------: | ------------: | ----------: | ----------: | ----------------- | ----------------------------------------- |
|     new | +6.386s | 0.0% → 100.0% | 0ms → 6.38s |      0 → 16 | `$anonfun$2(int)` | `org.renaissance.jdk.concurrent.FjKmeans` |
| removed | -5.920s | 100.0% → 0.0% | 5.92s → 0ms |      16 → 0 | `$anonfun$1(int)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000088011fdb90`)

| Change |     Delta |      % |          Time | Contentions | Callee                       | Location                                  |
| -----: | --------: | -----: | ------------: | ----------: | ---------------------------- | ----------------------------------------- |
|  +7.9% | +466.04ms | 100.0% | 5.92s → 6.38s |          16 | `$anonfun$adapted$1(Object)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `map(Function1)` (`scala.collection.immutable.Range`)

| Change |     Delta |      % |          Time | Contentions | Callee          | Location                                                             |
| -----: | --------: | -----: | ------------: | ----------: | --------------- | -------------------------------------------------------------------- |
|  +7.9% | +466.04ms | 100.0% | 5.92s → 6.38s |          16 | `apply(Object)` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000088011fdb90` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |     Delta |      % |          Time | Contentions | Callee           | Location                           |
| -----: | --------: | -----: | ------------: | ----------: | ---------------- | ---------------------------------- |
|  +7.9% | +466.04ms | 100.0% | 5.92s → 6.38s |          16 | `map(Function1)` | `scala.collection.immutable.Range` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

| Change |     Delta |      % |          Time | Contentions | Callee                  | Location                                  |
| -----: | --------: | -----: | ------------: | ----------: | ----------------------- | ----------------------------------------- |
|  +7.9% | +466.04ms | 100.0% | 5.92s → 6.38s |          16 | `run(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

| Change |     Delta |      % |          Time | Contentions | Callee                  | Location                                  |
| -----: | --------: | -----: | ------------: | ----------: | ----------------------- | ----------------------------------------- |
|  +7.9% | +466.04ms | 100.0% | 5.92s → 6.38s |          16 | `executeOperation(int)` | `org.renaissance.harness.ExecutionDriver` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000880117c3b8`)

|  Change |   Delta |             % |        Time | Contentions | Callee                                                                                                                 | Location                                    |
| ------: | ------: | ------------: | ----------: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
|     new | +6.386s | 0.0% → 100.0% | 0ms → 6.38s |      0 → 16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
| removed | -5.920s | 100.0% → 0.0% | 5.92s → 0ms |      16 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

| Change |     Delta |      % |          Time | Contentions | Callee              | Location                                                               |
| -----: | --------: | -----: | ------------: | ----------: | ------------------- | ---------------------------------------------------------------------- |
|  +7.9% | +466.04ms | 100.0% | 5.92s → 6.38s |          16 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000880117c3b8` |
|  +7.9% | +466.04ms | 100.0% | 5.92s → 6.38s |          16 | `apply(Object)`     | `scala.runtime.function.JProcedure1`                                   |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

| Change |     Delta |      % |          Time | Contentions | Callee          | Location                             |
| -----: | --------: | -----: | ------------: | ----------: | --------------- | ------------------------------------ |
|  +7.9% | +466.04ms | 100.0% | 5.92s → 6.38s |          16 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |     Delta |      % |          Time | Contentions | Callee               | Location                          |
| -----: | --------: | -----: | ------------: | ----------: | -------------------- | --------------------------------- |
|  +7.9% | +466.04ms | 100.0% | 5.92s → 6.38s |          16 | `foreach(Function1)` | `scala.collection.immutable.List` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |     Delta |      % |          Time | Contentions | Callee                                                                        | Location                                    |
| -----: | --------: | -----: | ------------: | ----------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
|  +7.9% | +466.04ms | 100.0% | 5.92s → 6.38s |          16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

| Change |     Delta |      % |          Time | Contentions | Callee           | Location                                    |
| -----: | --------: | -----: | ------------: | ----------: | ---------------- | ------------------------------------------- |
|  +7.9% | +466.04ms | 100.0% | 5.92s → 6.38s |          16 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000008801001c00`)

| Change |     Delta |      % |          Time | Contentions | Callee           | Location                                   |
| -----: | --------: | -----: | ------------: | ----------: | ---------------- | ------------------------------------------ |
|  +7.9% | +466.04ms | 100.0% | 5.92s → 6.38s |          16 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000008801082400`)

| Change |     Delta |      % |          Time | Contentions | Callee                         | Location                                             |
| -----: | --------: | -----: | ------------: | ----------: | ------------------------------ | ---------------------------------------------------- |
|  +7.9% | +466.04ms | 100.0% | 5.92s → 6.38s |          16 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000008801001c00` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change |     Delta |      % |          Time | Contentions | Callee                           | Location                                            |
| -----: | --------: | -----: | ------------: | ----------: | -------------------------------- | --------------------------------------------------- |
|  +7.9% | +466.04ms | 100.0% | 5.92s → 6.38s |          16 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000008801082400` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |     Delta |      % |          Time | Contentions | Callee                                           | Location                           |
| -----: | --------: | -----: | ------------: | ----------: | ------------------------------------------------ | ---------------------------------- |
|  +7.9% | +466.04ms | 100.0% | 5.92s → 6.38s |          16 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |     Delta |      % |          Time | Contentions | Callee                         | Location                                          |
| -----: | --------: | -----: | ------------: | ----------: | ------------------------------ | ------------------------------------------------- |
|  +7.9% | +466.04ms | 100.0% | 5.92s → 6.38s |          16 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

| Change |     Delta |      % |          Time | Contentions | Callee                     | Location                                          |
| -----: | --------: | -----: | ------------: | ----------: | -------------------------- | ------------------------------------------------- |
|  +7.9% | +466.04ms | 100.0% | 5.92s → 6.38s |          16 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change |     Delta |           % |            Time | Contentions | Callee                                    | Location                                      |
| -----: | --------: | ----------: | --------------: | ----------: | ----------------------------------------- | --------------------------------------------- |
|  +7.7% | +463.27ms |      100.0% |   5.97s → 6.44s |     19 → 20 | `park()`                                  | `java.util.concurrent.locks.LockSupport`      |
| +41.7% |   +8.61ms | 0.3% → 0.5% | 20.6ms → 29.3ms |       1 → 2 | `tryRemoveAndExec(ForkJoinTask, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

| Change |     Delta |      % |          Time | Contentions | Callee                | Location                   |
| -----: | --------: | -----: | ------------: | ----------: | --------------------- | -------------------------- |
|  +3.3% | +237.24ms | 100.0% | 7.26s → 7.50s |     67 → 52 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `parkUntil(long)` (`java.util.concurrent.locks.LockSupport`)

| Change |    Delta |      % |              Time | Contentions | Callee                | Location                   |
| -----: | -------: | -----: | ----------------: | ----------: | --------------------- | -------------------------- |
| +11.6% | +28.29ms | 100.0% | 244.0ms → 272.3ms |      8 → 10 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |   Delta |      % |            Time | Contentions | Callee     | Location                            |
| -----: | ------: | -----: | --------------: | ----------: | ---------- | ----------------------------------- |
| +41.7% | +8.61ms | 100.0% | 20.6ms → 29.3ms |       1 → 2 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `$anonfun$1(int)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change |   Delta |             % |        Time | Contentions | Callee                | Location                                    |
| ------: | ------: | ------------: | ----------: | ----------: | --------------------- | ------------------------------------------- |
| removed | -5.920s | 100.0% → 0.0% | 5.92s → 0ms |      16 → 0 | `run(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |   Delta |             % |        Time | Contentions | Callee               | Location                                  |
| ------: | ------: | ------------: | ----------: | ----------: | -------------------- | ----------------------------------------- |
| removed | -5.920s | 100.0% → 0.0% | 5.92s → 0ms |      16 → 0 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |     Delta |             % |            Time | Contentions | Callee                                   | Location                            |
| -----: | --------: | ------------: | --------------: | ----------: | ---------------------------------------- | ----------------------------------- |
| -12.9% | -197.74ms | 96.3% → 95.9% |   1.52s → 1.33s |     56 → 42 | `awaitWork(ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool` |
|  -4.7% |   -2.77ms |   3.7% → 4.1% | 59.2ms → 56.4ms |       3 → 4 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

| Change |     Delta |      % |          Time | Contentions | Callee                              | Location                            |
| -----: | --------: | -----: | ------------: | ----------: | ----------------------------------- | ----------------------------------- |
| -12.6% | -200.51ms | 100.0% | 1.58s → 1.38s |     59 → 46 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |     Delta |             % |              Time | Contentions | Callee            | Location                                 |
| -----: | --------: | ------------: | ----------------: | ----------: | ----------------- | ---------------------------------------- |
| -17.6% | -226.03ms | 84.0% → 79.6% |     1.28s → 1.05s |     48 → 32 | `park()`          | `java.util.concurrent.locks.LockSupport` |
| +11.6% |  +28.29ms | 16.0% → 20.4% | 244.0ms → 272.3ms |      8 → 10 | `parkUntil(long)` | `java.util.concurrent.locks.LockSupport` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|  Change |    Delta |             % |         Time | Contentions | Callee     | Location                            |
| ------: | -------: | ------------: | -----------: | ----------: | ---------- | ----------------------------------- |
| removed | -19.22ms | 100.0% → 0.0% | 19.2ms → 0ms |       1 → 0 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |    Delta |             % |         Time | Contentions | Callee     | Location                            |
| ------: | -------: | ------------: | -----------: | ----------: | ---------- | ----------------------------------- |
| removed | -19.22ms | 100.0% → 0.0% | 19.2ms → 0ms |       1 → 0 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000003011dfbc0`)

|  Change |    Delta |             % |         Time | Contentions | Callee                         | Location                                    |
| ------: | -------: | ------------: | -----------: | ----------: | ------------------------------ | ------------------------------------------- |
| removed | -19.22ms | 100.0% → 0.0% | 19.2ms → 0ms |       1 → 0 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|  Change |    Delta |             % |         Time | Contentions | Callee   | Location                                                               |
| ------: | -------: | ------------: | -----------: | ----------: | -------- | ---------------------------------------------------------------------- |
| removed | -19.22ms | 100.0% → 0.0% | 19.2ms → 0ms |       1 → 0 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000003011dfbc0` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change |   Delta |      % |            Time | Contentions | Callee                 | Location                            |
| -----: | ------: | -----: | --------------: | ----------: | ---------------------- | ----------------------------------- |
|  -4.7% | -2.77ms | 100.0% | 59.2ms → 56.4ms |       3 → 4 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change |   Delta |      % |            Time | Contentions | Callee   | Location                            |
| -----: | ------: | -----: | --------------: | ----------: | -------- | ----------------------------------- |
|  -4.7% | -2.77ms | 100.0% | 59.2ms → 56.4ms |       3 → 4 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change |   Delta |      % |            Time | Contentions | Callee      | Location                                               |
| -----: | ------: | -----: | --------------: | ----------: | ----------- | ------------------------------------------------------ |
|  -4.7% | -2.77ms | 100.0% | 59.2ms → 56.4ms |       3 → 4 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|  Change |    Delta |            % |            Time | Contentions | Callee   | Location                                            |
| ------: | -------: | -----------: | --------------: | ----------: | -------- | --------------------------------------------------- |
| removed | -19.22ms | 32.5% → 0.0% |    19.2ms → 0ms |       1 → 0 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|   -4.7% |  -2.77ms |       100.0% | 59.2ms → 56.4ms |       3 → 4 | `exec()` | `java.util.concurrent.RecursiveTask`                |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |   Delta |      % |            Time | Contentions | Callee     | Location                            |
| -----: | ------: | -----: | --------------: | ----------: | ---------- | ----------------------------------- |
|  -4.7% | -2.77ms | 100.0% | 59.2ms → 56.4ms |       3 → 4 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change |   Delta |      % |            Time | Contentions | Callee                                               | Location                                      |
| -----: | ------: | -----: | --------------: | ----------: | ---------------------------------------------------- | --------------------------------------------- |
|  -4.7% | -2.77ms | 100.0% | 59.2ms → 56.4ms |       3 → 4 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

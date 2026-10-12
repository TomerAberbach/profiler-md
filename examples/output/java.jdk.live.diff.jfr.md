# Sampling profile diff

Collected 1,593 samples → 1,202 samples (-391 samples, -24.5%).

| Category         | Change | Delta |             % |       Samples |
| ---------------- | -----: | ----: | ------------: | ------------: |
| Ours             | -25.6% |  -369 | 90.6% → 89.4% | 1,444 → 1,075 |
| Standard library | -14.8% |   -22 |  9.4% → 10.6% |     149 → 127 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                                  | Location                                                                              |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|     new |    +9 | 0.0% → 0.7% |   0 → 9 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                                                                   |
|   +6.5% |    +6 | 5.8% → 8.2% | 92 → 98 | `collectClusters(int[])`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +41.7% |    +5 | 0.8% → 1.4% | 12 → 17 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                                                   |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                                                   |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `unpark(Object)`                                          | `jdk.internal.misc.Unsafe`                                                            |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `<init>(HashMap)`                                         | `java.util.HashMap$HashIterator`                                                      |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `apply(Object)`                                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011fece0` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `forEachRemaining(Consumer)`                              | `java.util.Spliterator$OfDouble`                                                      |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `write0(FileDescriptor, long, int)`                       | `sun.nio.ch.UnixFileDispatcherImpl`                                                   |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `load0(Properties$LineReader)`                            | `java.util.Properties`                                                                |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `nanoTime()`                                              | `java.lang.System`                                                                    |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `forkThreshold()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `apply(int)`                                              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask$$Lambda.0x00000070011ffd70`     |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `accept(Object)`                                          | `java.util.stream.Nodes$FixedNodeBuilder`                                             |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `currentTimeMillis()`                                     | `java.lang.System`                                                                    |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `invokeStatic(Object, Object, Object)`                    | `java.lang.invoke.DirectMethodHandle$Holder`                                          |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `createSubtask(int, int)`                                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `resize()`                                                | `java.util.HashMap`                                                                   |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `uncompensate()`                                          | `java.util.concurrent.ForkJoinPool`                                                   |

##### Ours

|  Change | Delta |           % | Samples | Function                  | Location                                                                              |
| ------: | ----: | ----------: | ------: | ------------------------- | ------------------------------------------------------------------------------------- |
|   +6.5% |    +6 | 5.8% → 8.2% | 92 → 98 | `collectClusters(int[])`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `apply(Object)`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011fece0` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `forkThreshold()`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `apply(int)`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask$$Lambda.0x00000070011ffd70`     |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `createSubtask(int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                  | Location                                     |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------- | -------------------------------------------- |
|     new |    +9 | 0.0% → 0.7% |   0 → 9 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                          |
|  +41.7% |    +5 | 0.8% → 1.4% | 12 → 17 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`          |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`          |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `unpark(Object)`                                          | `jdk.internal.misc.Unsafe`                   |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `<init>(HashMap)`                                         | `java.util.HashMap$HashIterator`             |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `forEachRemaining(Consumer)`                              | `java.util.Spliterator$OfDouble`             |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `write0(FileDescriptor, long, int)`                       | `sun.nio.ch.UnixFileDispatcherImpl`          |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `load0(Properties$LineReader)`                            | `java.util.Properties`                       |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `nanoTime()`                                              | `java.lang.System`                           |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `accept(Object)`                                          | `java.util.stream.Nodes$FixedNodeBuilder`    |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `currentTimeMillis()`                                     | `java.lang.System`                           |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `invokeStatic(Object, Object, Object)`                    | `java.lang.invoke.DirectMethodHandle$Holder` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `resize()`                                                | `java.util.HashMap`                          |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `uncompensate()`                                          | `java.util.concurrent.ForkJoinPool`          |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                                    | Location                                                   |
| ------: | ----: | ------------: | --------: | ------------------------------------------- | ---------------------------------------------------------- |
|  -35.3% |  -224 | 39.9% → 34.2% | 635 → 411 | `accumulate(Double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -13.4% |   -53 | 24.8% → 28.5% | 395 → 342 | `distance(Double[], Double[])`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -19.5% |   -43 | 13.8% → 14.7% | 220 → 177 | `findNearestCentroid()`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -52.9% |   -27 |   3.2% → 2.0% |   51 → 24 | `vectorSum()`                               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -61.0% |   -25 |   2.6% → 1.3% |   41 → 16 | `computeDirectly()`                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -36.4% |   -12 |   2.1% → 1.7% |   33 → 21 | `copyOf(Object[], int)`                     | `java.util.Arrays`                                         |
|  -14.0% |    -8 |   3.6% → 4.1% |   57 → 49 | `computeIfAbsent(Object, Function)`         | `java.util.HashMap`                                        |
|  -66.7% |    -6 |   0.6% → 0.2% |     9 → 3 | `grow(int)`                                 | `java.util.ArrayList`                                      |
| removed |    -3 |   0.2% → 0.0% |     3 → 0 | `merge(Map, Map)`                           | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `doExec()`                                  | `java.util.concurrent.ForkJoinTask`                        |
|  -66.7% |    -2 |   0.2% → 0.1% |     3 → 1 | `tryRemoveAndExec(ForkJoinTask, boolean)`   | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `join()`                                    | `java.util.concurrent.ForkJoinTask`                        |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `checkIndex(int, int)`                      | `java.util.Objects`                                        |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `tryCompensate(long, boolean)`              | `java.util.concurrent.ForkJoinPool`                        |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `afterNodeInsertion(boolean)`               | `java.util.LinkedHashMap`                                  |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `push(ForkJoinTask, ForkJoinPool, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `nextNode()`                                | `java.util.HashMap$HashIterator`                           |
|  -66.7% |    -2 |   0.2% → 0.1% |     3 → 1 | `lambda$merge$7(Map, Object, List)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `maybeInstantiateVerifier()`                | `java.util.jar.JarFile`                                    |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `hashCode()`                                | `java.lang.Object`                                         |

##### Ours

|  Change | Delta |             % |   Samples | Function                            | Location                                                   |
| ------: | ----: | ------------: | --------: | ----------------------------------- | ---------------------------------------------------------- |
|  -35.3% |  -224 | 39.9% → 34.2% | 635 → 411 | `accumulate(Double[], double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -13.4% |   -53 | 24.8% → 28.5% | 395 → 342 | `distance(Double[], Double[])`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -19.5% |   -43 | 13.8% → 14.7% | 220 → 177 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -52.9% |   -27 |   3.2% → 2.0% |   51 → 24 | `vectorSum()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -61.0% |   -25 |   2.6% → 1.3% |   41 → 16 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |    -3 |   0.2% → 0.0% |     3 → 0 | `merge(Map, Map)`                   | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -66.7% |    -2 |   0.2% → 0.1% |     3 → 1 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `lambda$merge$6(List, List)`        | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `createSubtask(int, int)`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### Standard library

|  Change | Delta |           % | Samples | Function                                    | Location                                        |
| ------: | ----: | ----------: | ------: | ------------------------------------------- | ----------------------------------------------- |
|  -36.4% |   -12 | 2.1% → 1.7% | 33 → 21 | `copyOf(Object[], int)`                     | `java.util.Arrays`                              |
|  -14.0% |    -8 | 3.6% → 4.1% | 57 → 49 | `computeIfAbsent(Object, Function)`         | `java.util.HashMap`                             |
|  -66.7% |    -6 | 0.6% → 0.2% |   9 → 3 | `grow(int)`                                 | `java.util.ArrayList`                           |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `doExec()`                                  | `java.util.concurrent.ForkJoinTask`             |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `tryRemoveAndExec(ForkJoinTask, boolean)`   | `java.util.concurrent.ForkJoinPool$WorkQueue`   |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `join()`                                    | `java.util.concurrent.ForkJoinTask`             |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `checkIndex(int, int)`                      | `java.util.Objects`                             |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `tryCompensate(long, boolean)`              | `java.util.concurrent.ForkJoinPool`             |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `afterNodeInsertion(boolean)`               | `java.util.LinkedHashMap`                       |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `push(ForkJoinTask, ForkJoinPool, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue`   |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `nextNode()`                                | `java.util.HashMap$HashIterator`                |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `maybeInstantiateVerifier()`                | `java.util.jar.JarFile`                         |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `hashCode()`                                | `java.lang.Object`                              |
|  -33.3% |    -1 |        0.2% |   3 → 2 | `accept(Object)`                            | `java.util.stream.ReduceOps$3ReducingSink`      |
|  -50.0% |    -1 |        0.1% |   2 → 1 | `wrapSink(Sink)`                            | `java.util.stream.AbstractPipeline`             |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `runWorker(ForkJoinPool$WorkQueue)`         | `java.util.concurrent.ForkJoinPool`             |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `awaitWork(ForkJoinPool$WorkQueue)`         | `java.util.concurrent.ForkJoinPool`             |
|  -33.3% |    -1 |        0.2% |   3 → 2 | `park(boolean, long)`                       | `jdk.internal.misc.Unsafe`                      |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `contains(Object)`                          | `java.util.Collections$UnmodifiableCollection`  |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `forEachRemaining(DoubleConsumer)`          | `java.util.Spliterators$DoubleArraySpliterator` |

#### Lines

Lines with the largest change in contribution to each function's self samples.

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

| Change | Delta |            % | Samples | Location                 |
| -----: | ----: | -----------: | ------: | ------------------------ |
|    new |    +5 | 0.0% → 55.6% |   0 → 5 | `java.util.HashMap:1384` |
|    new |    +4 | 0.0% → 44.4% |   0 → 4 | `java.util.HashMap:1409` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % | Samples | Location                                                       |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------- |
|  +9.2% |    +6 | 70.7% → 72.4% | 65 → 71 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |
|  -3.7% |    -1 | 29.3% → 26.5% | 27 → 26 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:211` |
|    new |    +1 |   0.0% → 1.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:214` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------------------------------- |
| +100.0% |    +2 | 16.7% → 23.5% |   2 → 4 | `java.util.concurrent.ForkJoinPool:2039` |
|  +25.0% |    +1 | 33.3% → 29.4% |   4 → 5 | `java.util.concurrent.ForkJoinPool:2053` |
|  +16.7% |    +1 | 50.0% → 41.2% |   6 → 7 | `java.util.concurrent.ForkJoinPool:2058` |
|     new |    +1 |   0.0% → 5.9% |   0 → 1 | `java.util.concurrent.ForkJoinPool:2047` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % | Samples | Location                                |
| -----: | ----: | ------------: | ------: | --------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `java.util.concurrent.ForkJoinTask:423` |

##### `<init>(HashMap)` (`java.util.HashMap$HashIterator`)

| Change | Delta |             % | Samples | Location                              |
| -----: | ----: | ------------: | ------: | ------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `java.util.HashMap$HashIterator:1593` |

##### `forEachRemaining(Consumer)` (`java.util.Spliterator$OfDouble`)

| Change | Delta |             % | Samples | Location                             |
| -----: | ----: | ------------: | ------: | ------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.Spliterator$OfDouble:843` |

##### `load0(Properties$LineReader)` (`java.util.Properties`)

| Change | Delta |             % | Samples | Location                   |
| -----: | ----: | ------------: | ------: | -------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.Properties:420` |

##### `forkThreshold()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % | Samples | Location                                                       |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:198` |

##### `accept(Object)` (`java.util.stream.Nodes$FixedNodeBuilder`)

| Change | Delta |             % | Samples | Location                                       |
| -----: | ----: | ------------: | ------: | ---------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.stream.Nodes$FixedNodeBuilder:1231` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % | Samples | Location                                                      |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419` |

##### `resize()` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Location                |
| -----: | ----: | ------------: | ------: | ----------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.HashMap:741` |

##### `uncompensate()` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % | Samples | Location                                 |
| -----: | ----: | ------------: | ------: | ---------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.concurrent.ForkJoinPool:2008` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Location                                                      |
| -----: | ----: | -----: | --------: | ------------------------------------------------------------- |
| -35.3% |  -224 | 100.0% | 635 → 411 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:411` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Location                                                       |
| -----: | ----: | -----: | --------: | -------------------------------------------------------------- |
| -13.4% |   -53 | 100.0% | 395 → 342 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:248` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % |   Samples | Location                                                       |
| -----: | ----: | ------------: | --------: | -------------------------------------------------------------- |
| -14.5% |   -28 | 87.7% → 93.2% | 193 → 165 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:229` |
| -60.9% |   -14 |  10.5% → 5.1% |    23 → 9 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:225` |
| -25.0% |    -1 |   1.8% → 1.7% |     4 → 3 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:230` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |             % | Samples | Location                                                      |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------- |
| removed |   -40 |  78.4% → 0.0% |  40 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400` |
|     new |   +21 |  0.0% → 87.5% |  0 → 21 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:402` |
|  -72.7% |    -8 | 21.6% → 12.5% |  11 → 3 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:403` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |              % | Samples | Location                                                       |
| ------: | ----: | -------------: | ------: | -------------------------------------------------------------- |
|  -60.0% |   -24 | 97.6% → 100.0% | 40 → 16 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:204` |
| removed |    -1 |    2.4% → 0.0% |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:171` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change | Delta |      % | Samples | Location                |
| -----: | ----: | -----: | ------: | ----------------------- |
| -36.4% |   -12 | 100.0% | 33 → 21 | `java.util.Arrays:3482` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Location                 |
| -----: | ----: | ------------: | ------: | ------------------------ |
|  -9.4% |    -5 | 93.0% → 98.0% | 53 → 48 | `java.util.HashMap:1219` |
| -75.0% |    -3 |   7.0% → 2.0% |   4 → 1 | `java.util.HashMap:1206` |

##### `grow(int)` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Location                  |
| -----: | ----: | -----: | ------: | ------------------------- |
| -66.7% |    -6 | 100.0% |   9 → 3 | `java.util.ArrayList:239` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % | Samples | Location                                        |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans:110` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % | Samples | Location                                |
| ------: | ----: | ------------: | ------: | --------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `java.util.concurrent.ForkJoinTask:387` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |            % | Samples | Location                                           |
| ------: | ----: | -----------: | ------: | -------------------------------------------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `java.util.concurrent.ForkJoinPool$WorkQueue:1347` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % | Samples | Location                                |
| ------: | ----: | ------------: | ------: | --------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `java.util.concurrent.ForkJoinTask:651` |

##### `checkIndex(int, int)` (`java.util.Objects`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `java.util.Objects:385` |

##### `tryCompensate(long, boolean)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |            % | Samples | Location                                 |
| ------: | ----: | -----------: | ------: | ---------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinPool:1966` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinPool:1978` |

##### `afterNodeInsertion(boolean)` (`java.util.LinkedHashMap`)

|  Change | Delta |             % | Samples | Location                      |
| ------: | ----: | ------------: | ------: | ----------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `java.util.LinkedHashMap:324` |

##### `push(ForkJoinTask, ForkJoinPool, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |             % | Samples | Location                                           |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `java.util.concurrent.ForkJoinPool$WorkQueue:1156` |

##### `nextNode()` (`java.util.HashMap$HashIterator`)

|  Change | Delta |             % | Samples | Location                              |
| ------: | ----: | ------------: | ------: | ------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `java.util.HashMap$HashIterator:1609` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % | Samples | Location                                        |
| -----: | ----: | -----: | ------: | ----------------------------------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans:112` |

##### `maybeInstantiateVerifier()` (`java.util.jar.JarFile`)

|  Change | Delta |             % | Samples | Location                    |
| ------: | ----: | ------------: | ------: | --------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.jar.JarFile:713` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % | Samples | Location                                        |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans:114` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % | Samples | Location                                                       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261` |

##### `accept(Object)` (`java.util.stream.ReduceOps$3ReducingSink`)

| Change | Delta |      % | Samples | Location                                       |
| -----: | ----: | -----: | ------: | ---------------------------------------------- |
| -33.3% |    -1 | 100.0% |   3 → 2 | `java.util.stream.ReduceOps$3ReducingSink:169` |

##### `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`)

| Change | Delta |      % | Samples | Location                                |
| -----: | ----: | -----: | ------: | --------------------------------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `java.util.stream.AbstractPipeline:546` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinPool:1808` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinPool:1881` |

##### `contains(Object)` (`java.util.Collections$UnmodifiableCollection`)

|  Change | Delta |             % | Samples | Location                                            |
| ------: | ----: | ------------: | ------: | --------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.Collections$UnmodifiableCollection:1068` |

##### `forEachRemaining(DoubleConsumer)` (`java.util.Spliterators$DoubleArraySpliterator`)

|  Change | Delta |             % | Samples | Location                                             |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.Spliterators$DoubleArraySpliterator:1322` |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Caller                              | Location                                    |
| -----: | ----: | ------------: | ------: | ----------------------------------- | ------------------------------------------- |
|    new |    +9 | 0.0% → 100.0% |   0 → 9 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % | Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | ------: | ------------------- | ---------------------------------------------------------- |
|  +6.5% |    +6 | 100.0% | 92 → 98 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % | Samples | Caller                 | Location                            |
| -----: | ----: | -----: | ------: | ---------------------- | ----------------------------------- |
| +41.7% |    +5 | 100.0% | 12 → 17 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % | Samples | Caller   | Location                            |
| -----: | ----: | ------------: | ------: | -------- | ----------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `unpark(Object)` (`jdk.internal.misc.Unsafe`)

|  Change | Delta |      % | Samples | Caller           | Location                                 |
| ------: | ----: | -----: | ------: | ---------------- | ---------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `unpark(Thread)` | `java.util.concurrent.locks.LockSupport` |

##### `<init>(HashMap)` (`java.util.HashMap$HashIterator`)

| Change | Delta |             % | Samples | Caller            | Location                          |
| -----: | ----: | ------------: | ------: | ----------------- | --------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `<init>(HashMap)` | `java.util.HashMap$EntryIterator` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011fece0`)

|  Change | Delta |      % | Samples | Caller                              | Location            |
| ------: | ----: | -----: | ------: | ----------------------------------- | ------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |

##### `forEachRemaining(Consumer)` (`java.util.Spliterator$OfDouble`)

| Change | Delta |             % | Samples | Caller                        | Location                            |
| -----: | ----: | ------------: | ------: | ----------------------------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `copyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `write0(FileDescriptor, long, int)` (`sun.nio.ch.UnixFileDispatcherImpl`)

| Change | Delta |             % | Samples | Caller                             | Location                            |
| -----: | ----: | ------------: | ------: | ---------------------------------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `write(FileDescriptor, long, int)` | `sun.nio.ch.UnixFileDispatcherImpl` |

##### `load0(Properties$LineReader)` (`java.util.Properties`)

| Change | Delta |             % | Samples | Caller              | Location               |
| -----: | ----: | ------------: | ------: | ------------------- | ---------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `load(InputStream)` | `java.util.Properties` |

##### `nanoTime()` (`java.lang.System`)

| Change | Delta |             % | Samples | Caller              | Location                                    |
| -----: | ----: | ------------: | ------: | ------------------- | ------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `getVmStartNanos()` | `org.renaissance.harness.RenaissanceSuite$` |

##### `forkThreshold()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % | Samples | Caller      | Location                                               |
| -----: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask$$Lambda.0x00000070011ffd70`)

| Change | Delta |             % | Samples | Caller                      | Location                           |
| -----: | ----: | ------------: | ------: | --------------------------- | ---------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>(long, IntFunction)` | `java.util.stream.Nodes$ArrayNode` |

##### `accept(Object)` (`java.util.stream.Nodes$FixedNodeBuilder`)

| Change | Delta |             % | Samples | Caller           | Location                              |
| -----: | ----: | ------------: | ------: | ---------------- | ------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `accept(double)` | `java.util.stream.DoublePipeline$1$1` |

##### `currentTimeMillis()` (`java.lang.System`)

| Change | Delta |             % | Samples | Caller         | Location                                   |
| -----: | ----: | ------------: | ------: | -------------- | ------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `doPeriodic()` | `jdk.jfr.internal.periodic.PeriodicEvents` |

##### `invokeStatic(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

| Change | Delta |             % | Samples | Caller                   | Location                                            |
| -----: | ----: | ------------: | ------: | ------------------------ | --------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001009000` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % | Samples | Caller      | Location                                               |
| -----: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `resize()` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Caller                                          | Location            |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- | ------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `uncompensate()` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % | Samples | Caller                 | Location                            |
| -----: | ----: | ------------: | ------: | ---------------------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Caller        | Location                                                  |
| -----: | ----: | -----: | --------: | ------------- | --------------------------------------------------------- |
| -35.3% |  -224 | 100.0% | 635 → 411 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller                  | Location                                                   |
| -----: | ----: | -----: | --------: | ----------------------- | ---------------------------------------------------------- |
| -13.4% |   -53 | 100.0% | 395 → 342 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | --------: | ------------------- | ---------------------------------------------------------- |
| -19.5% |   -43 | 100.0% | 220 → 177 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % | Samples | Caller              | Location                                                  |
| -----: | ----: | -----: | ------: | ------------------- | --------------------------------------------------------- |
| -52.9% |   -27 | 100.0% | 51 → 24 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |              % | Samples | Caller              | Location                                                   |
| ------: | ----: | -------------: | ------: | ------------------- | ---------------------------------------------------------- |
|  -60.0% |   -24 | 97.6% → 100.0% | 40 → 16 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |    -1 |    2.4% → 0.0% |   1 → 0 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change | Delta |      % | Samples | Caller      | Location              |
| -----: | ----: | -----: | ------: | ----------- | --------------------- |
| -36.4% |   -12 | 100.0% | 33 → 21 | `grow(int)` | `java.util.ArrayList` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller                   | Location                                                   |
| -----: | ----: | -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| -14.0% |    -8 | 100.0% | 57 → 49 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `grow(int)` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Caller   | Location              |
| -----: | ----: | -----: | ------: | -------- | --------------------- |
| -66.7% |    -6 | 100.0% |   9 → 3 | `grow()` | `java.util.ArrayList` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % | Samples | Caller                     | Location                                                   |
| ------: | ----: | ------------: | ------: | -------------------------- | ---------------------------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |            % | Samples | Caller                                               | Location                                      |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------- | --------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % | Samples | Caller                 | Location                            |
| -----: | ----: | -----: | ------: | ---------------------- | ----------------------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % | Samples | Caller      | Location                                               |
| ------: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `checkIndex(int, int)` (`java.util.Objects`)

|  Change | Delta |             % | Samples | Caller     | Location              |
| ------: | ----: | ------------: | ------: | ---------- | --------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `get(int)` | `java.util.ArrayList` |

##### `tryCompensate(long, boolean)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Caller                                                    | Location                            |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------- | ----------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool` |

##### `afterNodeInsertion(boolean)` (`java.util.LinkedHashMap`)

|  Change | Delta |             % | Samples | Caller                                          | Location            |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | ------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `push(ForkJoinTask, ForkJoinPool, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |             % | Samples | Caller   | Location                            |
| ------: | ----: | ------------: | ------: | -------- | ----------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `fork()` | `java.util.concurrent.ForkJoinTask` |

##### `nextNode()` (`java.util.HashMap$HashIterator`)

|  Change | Delta |             % | Samples | Caller   | Location                          |
| ------: | ----: | ------------: | ------: | -------- | --------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `next()` | `java.util.HashMap$EntryIterator` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % | Samples | Caller                   | Location                                                               |
| -----: | ----: | -----: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ff178` |

##### `maybeInstantiateVerifier()` (`java.util.jar.JarFile`)

|  Change | Delta |             % | Samples | Caller             | Location                             |
| ------: | ----: | ------------: | ------: | ------------------ | ------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getCodeSigners()` | `java.util.jar.JarFile$JarFileEntry` |

##### `hashCode()` (`java.lang.Object`)

|  Change | Delta |             % | Samples | Caller       | Location                      |
| ------: | ----: | ------------: | ------: | ------------ | ----------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `hashCode()` | `java.lang.invoke.MethodType` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % | Samples | Caller                  | Location                                                               |
| ------: | ----: | ------------: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % | Samples | Caller      | Location                                               |
| ------: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `accept(Object)` (`java.util.stream.ReduceOps$3ReducingSink`)

| Change | Delta |      % | Samples | Caller        | Location                           |
| -----: | ----: | -----: | ------: | ------------- | ---------------------------------- |
| -33.3% |    -1 | 100.0% |   3 → 2 | `accept(int)` | `java.util.stream.IntPipeline$1$1` |

##### `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`)

| Change | Delta |      % | Samples | Caller                               | Location                            |
| -----: | ----: | -----: | ------: | ------------------------------------ | ----------------------------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Caller  | Location                                    |
| ------: | ----: | ------------: | ------: | ------- | ------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Caller                              | Location                            |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ----------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

| Change | Delta |      % | Samples | Caller   | Location                                 |
| -----: | ----: | -----: | ------: | -------- | ---------------------------------------- |
| -33.3% |    -1 | 100.0% |   3 → 2 | `park()` | `java.util.concurrent.locks.LockSupport` |

##### `contains(Object)` (`java.util.Collections$UnmodifiableCollection`)

|  Change | Delta |             % | Samples | Caller         | Location                       |
| ------: | ----: | ------------: | ------: | -------------- | ------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getOpFlags()` | `java.util.stream.ReduceOps$3` |

##### `forEachRemaining(DoubleConsumer)` (`java.util.Spliterators$DoubleArraySpliterator`)

|  Change | Delta |             % | Samples | Caller                       | Location                         |
| ------: | ----: | ------------: | ------: | ---------------------------- | -------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `forEachRemaining(Consumer)` | `java.util.Spliterator$OfDouble` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |           % | Samples | Function                                                                                                               | Location                                                               |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|  +50.0% |   +11 | 1.4% → 2.7% | 22 → 33 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fdf70` |
|  +50.0% |    +9 | 1.1% → 2.2% | 18 → 27 | `exec()`                                                                                                               | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                    |
|  +26.9% |    +7 | 1.6% → 2.7% | 26 → 33 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| +200.0% |    +6 | 0.2% → 0.7% |   3 → 9 | `merge(Object, Object, BiFunction)`                                                                                    | `java.util.HashMap`                                                    |
|     new |    +6 | 0.0% → 0.5% |   0 → 6 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +66.7% |    +4 | 0.4% → 0.8% |  6 → 10 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +66.7% |    +4 | 0.4% → 0.8% |  6 → 10 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ff178` |
|  +66.7% |    +4 | 0.4% → 0.8% |  6 → 10 | `forEach(BiConsumer)`                                                                                                  | `java.util.HashMap`                                                    |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `unpark(Object)`                                                                                                       | `jdk.internal.misc.Unsafe`                                             |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `unpark(Thread)`                                                                                                       | `java.util.concurrent.locks.LockSupport`                               |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `boxed(double[])`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `<init>(HashMap)`                                                                                                      | `java.util.HashMap$HashIterator`                                       |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `<init>(HashMap)`                                                                                                      | `java.util.HashMap$EntryIterator`                                      |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `iterator()`                                                                                                           | `java.util.HashMap$EntrySet`                                           |
|  +33.3% |    +1 | 0.2% → 0.3% |   3 → 4 | `transferTo(OutputStream)`                                                                                             | `java.io.InputStream`                                                  |
|  +33.3% |    +1 | 0.2% → 0.3% |   3 → 4 | `copy(InputStream, Path, CopyOption[])`                                                                                | `java.nio.file.Files`                                                  |
|  +33.3% |    +1 | 0.2% → 0.3% |   3 → 4 | `extractResource(String, Path)`                                                                                        | `org.renaissance.core.ResourceUtils`                                   |
|  +33.3% |    +1 | 0.2% → 0.3% |   3 → 4 | `extractResources(Iterable, Path)`                                                                                     | `org.renaissance.core.ResourceUtils`                                   |
|  +33.3% |    +1 | 0.2% → 0.3% |   3 → 4 | `createClassLoaderForModule(String)`                                                                                   | `org.renaissance.core.ModuleLoader`                                    |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `getBenchmarkClassLoader(BenchmarkDescriptor)`                                                                         | `org.renaissance.core.BenchmarkSuite`                                  |

##### Ours

|  Change | Delta |           % | Samples | Function                                                                                                               | Location                                                                              |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|  +50.0% |   +11 | 1.4% → 2.7% | 22 → 33 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fdf70`                |
|  +26.9% |    +7 | 1.6% → 2.7% | 26 → 33 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|     new |    +6 | 0.0% → 0.5% |   0 → 6 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                           |
|  +66.7% |    +4 | 0.4% → 0.8% |  6 → 10 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  +66.7% |    +4 | 0.4% → 0.8% |  6 → 10 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ff178`                |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `boxed(double[])`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|  +33.3% |    +1 | 0.2% → 0.3% |   3 → 4 | `extractResource(String, Path)`                                                                                        | `org.renaissance.core.ResourceUtils`                                                  |
|  +33.3% |    +1 | 0.2% → 0.3% |   3 → 4 | `extractResources(Iterable, Path)`                                                                                     | `org.renaissance.core.ResourceUtils`                                                  |
|  +33.3% |    +1 | 0.2% → 0.3% |   3 → 4 | `createClassLoaderForModule(String)`                                                                                   | `org.renaissance.core.ModuleLoader`                                                   |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `getBenchmarkClassLoader(BenchmarkDescriptor)`                                                                         | `org.renaissance.core.BenchmarkSuite`                                                 |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `createBenchmark(BenchmarkDescriptor)`                                                                                 | `org.renaissance.core.BenchmarkSuite`                                                 |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)`                           | `org.renaissance.harness.ExecutionDriver`                                             |
|  +16.7% |    +1 | 0.4% → 0.6% |   6 → 7 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                                           |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011fece0` |
|   +7.1% |    +1 | 0.9% → 1.2% | 14 → 15 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   +7.1% |    +1 | 0.9% → 1.2% | 14 → 15 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `loadProperties(URL)`                                                                                                  | `org.renaissance.core.ResourceUtils`                                                  |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `loadPropertiesAsMap(URL)`                                                                                             | `org.renaissance.core.ResourceUtils`                                                  |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `create(Path, String, Optional, Map, boolean)`                                                                         | `org.renaissance.core.BenchmarkSuite`                                                 |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `$anonfun$1(Path, Config)`                                                                                             | `org.renaissance.harness.RenaissanceSuite$`                                           |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                                                           | Location                                            |
| ------: | ----: | ----------: | ------: | -------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
|  +50.0% |    +9 | 1.1% → 2.2% | 18 → 27 | `exec()`                                                                                           | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
| +200.0% |    +6 | 0.2% → 0.7% |   3 → 9 | `merge(Object, Object, BiFunction)`                                                                | `java.util.HashMap`                                 |
|  +66.7% |    +4 | 0.4% → 0.8% |  6 → 10 | `forEach(BiConsumer)`                                                                              | `java.util.HashMap`                                 |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `unpark(Object)`                                                                                   | `jdk.internal.misc.Unsafe`                          |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `unpark(Thread)`                                                                                   | `java.util.concurrent.locks.LockSupport`            |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `<init>(HashMap)`                                                                                  | `java.util.HashMap$HashIterator`                    |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `<init>(HashMap)`                                                                                  | `java.util.HashMap$EntryIterator`                   |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `iterator()`                                                                                       | `java.util.HashMap$EntrySet`                        |
|  +33.3% |    +1 | 0.2% → 0.3% |   3 → 4 | `transferTo(OutputStream)`                                                                         | `java.io.InputStream`                               |
|  +33.3% |    +1 | 0.2% → 0.3% |   3 → 4 | `copy(InputStream, Path, CopyOption[])`                                                            | `java.nio.file.Files`                               |
|  +33.3% |    +1 | 0.2% → 0.3% |   3 → 4 | `evaluate(Spliterator, boolean, IntFunction)`                                                      | `java.util.stream.AbstractPipeline`                 |
|  +33.3% |    +1 | 0.2% → 0.3% |   3 → 4 | `evaluateToArrayNode(IntFunction)`                                                                 | `java.util.stream.AbstractPipeline`                 |
|  +33.3% |    +1 | 0.2% → 0.3% |   3 → 4 | `toArray(IntFunction)`                                                                             | `java.util.stream.ReferencePipeline`                |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `signalWaiters()`                                                                                  | `java.util.concurrent.ForkJoinTask`                 |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `setDone()`                                                                                        | `java.util.concurrent.ForkJoinTask`                 |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `forEachRemaining(Consumer)`                                                                       | `java.util.Spliterator$OfDouble`                    |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `write0(FileDescriptor, long, int)`                                                                | `sun.nio.ch.UnixFileDispatcherImpl`                 |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `write(FileDescriptor, long, int)`                                                                 | `sun.nio.ch.UnixFileDispatcherImpl`                 |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `writeFromNativeBuffer(FileDescriptor, ByteBuffer, long, boolean, boolean, int, NativeDispatcher)` | `sun.nio.ch.IOUtil`                                 |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `write(FileDescriptor, ByteBuffer, long, boolean, boolean, int, NativeDispatcher)`                 | `sun.nio.ch.IOUtil`                                 |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |             % |       Samples | Function                                                  | Location                                                   |
| -----: | ----: | ------------: | ------------: | --------------------------------------------------------- | ---------------------------------------------------------- |
| -25.9% |  -400 | 97.0% → 95.3% | 1,545 → 1,145 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                        |
| -25.8% |  -399 | 96.9% → 95.3% | 1,544 → 1,145 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                        |
| -25.8% |  -394 | 96.0% → 94.5% | 1,530 → 1,136 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| -24.7% |  -390 | 99.1% → 98.9% | 1,579 → 1,189 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                        |
| -24.7% |  -389 | 98.9% → 98.8% | 1,576 → 1,187 | `compute()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
| -24.7% |  -389 | 98.9% → 98.8% | 1,576 → 1,187 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                       |
| -31.0% |  -386 | 78.2% → 71.5% |   1,245 → 859 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| -30.7% |  -372 | 76.0% → 69.7% |   1,210 → 838 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                        |
| -31.2% |  -367 | 73.8% → 67.2% |   1,175 → 808 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`                |
| -30.2% |  -365 | 75.9% → 70.2% |   1,209 → 844 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                        |
| -36.7% |  -252 | 43.1% → 36.2% |     687 → 435 | `vectorSum()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| -36.7% |  -252 | 43.1% → 36.2% |     687 → 435 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| -35.3% |  -224 | 39.9% → 34.2% |     635 → 411 | `accumulate(Double[], double[])`                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| -16.4% |  -139 | 53.2% → 58.9% |     847 → 708 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -23.2% |   -98 | 26.6% → 27.0% |     423 → 325 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                        |
| -15.7% |   -97 | 38.7% → 43.2% |     616 → 519 | `findNearestCentroid()`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -30.0% |   -77 | 16.1% → 15.0% |     257 → 180 | `average(List)`                                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| -28.8% |   -74 | 16.1% → 15.2% |     257 → 183 | `computeClusterAverages()`                                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| -25.5% |   -70 | 17.2% → 17.0% |     274 → 204 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                        |
| -28.0% |   -69 | 15.4% → 14.7% |     246 → 177 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

##### Ours

|  Change | Delta |             % |       Samples | Function                                                                                                               | Location                                                               |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|  -24.7% |  -389 | 98.9% → 98.8% | 1,576 → 1,187 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  -36.7% |  -252 | 43.1% → 36.2% |     687 → 435 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -36.7% |  -252 | 43.1% → 36.2% |     687 → 435 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -35.3% |  -224 | 39.9% → 34.2% |     635 → 411 | `accumulate(Double[], double[])`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -16.4% |  -139 | 53.2% → 58.9% |     847 → 708 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -15.7% |   -97 | 38.7% → 43.2% |     616 → 519 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -30.0% |   -77 | 16.1% → 15.0% |     257 → 180 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -28.8% |   -74 | 16.1% → 15.2% |     257 → 183 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -28.0% |   -69 | 15.4% → 14.7% |     246 → 177 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -13.4% |   -53 | 24.8% → 28.5% |     395 → 342 | `distance(Double[], Double[])`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -8.9% |   -17 | 11.9% → 14.4% |     190 → 173 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed |    -6 |   0.4% → 0.0% |         6 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
| removed |    -3 |   0.2% → 0.0% |         3 → 0 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed |    -3 |   0.2% → 0.0% |         3 → 0 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0` |
|  -40.0% |    -2 |   0.3% → 0.2% |         5 → 3 | `generateData(int, int, int)`                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -40.0% |    -2 |   0.3% → 0.2% |         5 → 3 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | `org.renaissance.jdk.concurrent.FjKmeans`                              |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `apply(int, Seq)`                                                                                                      | `scopt.OptionDef`                                                      |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `runParser(Seq, Object, List, OParserSetup)`                                                                           | `scopt.ORunner$`                                                       |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `parse(Seq, Object)`                                                                                                   | `scopt.OptionParser`                                                   |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `parse(String[])`                                                                                                      | `org.renaissance.harness.ConfigParser`                                 |

##### Standard library

| Change | Delta |             % |       Samples | Function                                                  | Location                                      |
| -----: | ----: | ------------: | ------------: | --------------------------------------------------------- | --------------------------------------------- |
| -25.9% |  -400 | 97.0% → 95.3% | 1,545 → 1,145 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`           |
| -25.8% |  -399 | 96.9% → 95.3% | 1,544 → 1,145 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`           |
| -25.8% |  -394 | 96.0% → 94.5% | 1,530 → 1,136 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| -24.7% |  -390 | 99.1% → 98.9% | 1,579 → 1,189 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`           |
| -24.7% |  -389 | 98.9% → 98.8% | 1,576 → 1,187 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`          |
| -31.0% |  -386 | 78.2% → 71.5% |   1,245 → 859 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| -30.7% |  -372 | 76.0% → 69.7% |   1,210 → 838 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`           |
| -31.2% |  -367 | 73.8% → 67.2% |   1,175 → 808 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`   |
| -30.2% |  -365 | 75.9% → 70.2% |   1,209 → 844 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`           |
| -23.2% |   -98 | 26.6% → 27.0% |     423 → 325 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
| -25.5% |   -70 | 17.2% → 17.0% |     274 → 204 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |
| -42.9% |   -18 |   2.6% → 2.0% |       42 → 24 | `grow(int)`                                               | `java.util.ArrayList`                         |
| -40.0% |   -16 |   2.5% → 2.0% |       40 → 24 | `grow()`                                                  | `java.util.ArrayList`                         |
| -40.0% |   -16 |   2.5% → 2.0% |       40 → 24 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                         |
| -40.0% |   -16 |   2.5% → 2.0% |       40 → 24 | `add(Object)`                                             | `java.util.ArrayList`                         |
| -36.4% |   -12 |   2.1% → 1.7% |       33 → 21 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                            |
| -12.1% |    -7 |   3.6% → 4.2% |       58 → 51 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                           |
| -50.0% |    -3 |   0.4% → 0.2% |         6 → 3 | `evaluate(TerminalOp)`                                    | `java.util.stream.AbstractPipeline`           |
| -50.0% |    -3 |   0.4% → 0.2% |         6 → 3 | `collect(Collector)`                                      | `java.util.stream.ReferencePipeline`          |
| -40.0% |    -2 |   0.3% → 0.2% |         5 → 3 | `accept(int)`                                             | `java.util.stream.IntPipeline$1$1`            |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fdf70`)

| Change | Delta |      % | Samples | Callee                         | Location                                    |
| -----: | ----: | -----: | ------: | ------------------------------ | ------------------------------------------- |
| +50.0% |   +11 | 100.0% | 22 → 33 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

| Change | Delta |      % | Samples | Callee   | Location                                                               |
| -----: | ----: | -----: | ------: | -------- | ---------------------------------------------------------------------- |
| +50.0% |    +9 | 100.0% | 18 → 27 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fdf70` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |              % | Samples | Callee                            | Location                                    |
| ------: | ----: | -------------: | ------: | --------------------------------- | ------------------------------------------- |
|  +32.0% |    +8 | 96.2% → 100.0% | 25 → 33 | `invoke()`                        | `java.util.concurrent.ForkJoinTask`         |
| removed |    -1 |    3.8% → 0.0% |   1 → 0 | `randomSample(int, List, Random)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Callee                  | Location                                                               |
| ------: | ----: | ------------: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |            % | Samples | Callee                                                                                       | Location                                  |
| -----: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
|    new |    +4 | 0.0% → 66.7% |   0 → 4 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
|    new |    +2 | 0.0% → 33.3% |   0 → 2 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % | Samples | Callee                              | Location            |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ------------------- |
| +200.0% |    +6 | 50.0% → 90.0% |   3 → 9 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ff178`)

| Change | Delta |      % | Samples | Callee                              | Location                                    |
| -----: | ----: | -----: | ------: | ----------------------------------- | ------------------------------------------- |
| +66.7% |    +4 | 100.0% |  6 → 10 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Callee                   | Location                                                               |
| -----: | ----: | -----: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| +66.7% |    +4 | 100.0% |  6 → 10 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ff178` |

##### `unpark(Thread)` (`java.util.concurrent.locks.LockSupport`)

|  Change | Delta |      % | Samples | Callee           | Location                   |
| ------: | ----: | -----: | ------: | ---------------- | -------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `unpark(Object)` | `jdk.internal.misc.Unsafe` |

##### `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change | Delta |      % | Samples | Callee                 | Location                             |
| ------: | ----: | -----: | ------: | ---------------------- | ------------------------------------ |
| +200.0% |    +2 | 100.0% |   1 → 3 | `toArray(IntFunction)` | `java.util.stream.ReferencePipeline` |

##### `<init>(HashMap)` (`java.util.HashMap$EntryIterator`)

| Change | Delta |             % | Samples | Callee            | Location                         |
| -----: | ----: | ------------: | ------: | ----------------- | -------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `<init>(HashMap)` | `java.util.HashMap$HashIterator` |

##### `iterator()` (`java.util.HashMap$EntrySet`)

| Change | Delta |             % | Samples | Callee            | Location                          |
| -----: | ----: | ------------: | ------: | ----------------- | --------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `<init>(HashMap)` | `java.util.HashMap$EntryIterator` |

##### `transferTo(OutputStream)` (`java.io.InputStream`)

| Change | Delta |            % | Samples | Callee                    | Location                         |
| -----: | ----: | -----------: | ------: | ------------------------- | -------------------------------- |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `write(byte[], int, int)` | `sun.nio.ch.ChannelOutputStream` |

##### `copy(InputStream, Path, CopyOption[])` (`java.nio.file.Files`)

| Change | Delta |      % | Samples | Callee                     | Location              |
| -----: | ----: | -----: | ------: | -------------------------- | --------------------- |
| +33.3% |    +1 | 100.0% |   3 → 4 | `transferTo(OutputStream)` | `java.io.InputStream` |

##### `extractResource(String, Path)` (`org.renaissance.core.ResourceUtils`)

| Change | Delta |      % | Samples | Callee                                  | Location              |
| -----: | ----: | -----: | ------: | --------------------------------------- | --------------------- |
| +33.3% |    +1 | 100.0% |   3 → 4 | `copy(InputStream, Path, CopyOption[])` | `java.nio.file.Files` |

##### `extractResources(Iterable, Path)` (`org.renaissance.core.ResourceUtils`)

| Change | Delta |      % | Samples | Callee                          | Location                             |
| -----: | ----: | -----: | ------: | ------------------------------- | ------------------------------------ |
| +33.3% |    +1 | 100.0% |   3 → 4 | `extractResource(String, Path)` | `org.renaissance.core.ResourceUtils` |

##### `createClassLoaderForModule(String)` (`org.renaissance.core.ModuleLoader`)

| Change | Delta |      % | Samples | Callee                             | Location                             |
| -----: | ----: | -----: | ------: | ---------------------------------- | ------------------------------------ |
| +33.3% |    +1 | 100.0% |   3 → 4 | `extractResources(Iterable, Path)` | `org.renaissance.core.ResourceUtils` |

##### `getBenchmarkClassLoader(BenchmarkDescriptor)` (`org.renaissance.core.BenchmarkSuite`)

|  Change | Delta |      % | Samples | Callee                               | Location                            |
| ------: | ----: | -----: | ------: | ------------------------------------ | ----------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `createClassLoaderForModule(String)` | `org.renaissance.core.ModuleLoader` |

##### `createBenchmark(BenchmarkDescriptor)` (`org.renaissance.core.BenchmarkSuite`)

|  Change | Delta |      % | Samples | Callee                                         | Location                              |
| ------: | ----: | -----: | ------: | ---------------------------------------------- | ------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `getBenchmarkClassLoader(BenchmarkDescriptor)` | `org.renaissance.core.BenchmarkSuite` |

##### `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` (`org.renaissance.harness.ExecutionDriver`)

|  Change | Delta |      % | Samples | Callee                                 | Location                              |
| ------: | ----: | -----: | ------: | -------------------------------------- | ------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `createBenchmark(BenchmarkDescriptor)` | `org.renaissance.core.BenchmarkSuite` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |            % | Samples | Callee              | Location                                    |
| -----: | ----: | -----------: | ------: | ------------------- | ------------------------------------------- |
|    new |    +1 | 0.0% → 14.3% |   0 → 1 | `getVmStartNanos()` | `org.renaissance.harness.RenaissanceSuite$` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % | Samples | Callee            | Location                                    |
| -----: | ----: | -----: | ------: | ----------------- | ------------------------------------------- |
|  +7.1% |    +1 | 100.0% | 14 → 15 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % | Samples | Callee                     | Location                                                   |
| -----: | ----: | -----: | ------: | -------------------------- | ---------------------------------------------------------- |
|  +7.1% |    +1 | 100.0% | 14 → 15 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `loadProperties(URL)` (`org.renaissance.core.ResourceUtils`)

| Change | Delta |             % | Samples | Callee              | Location               |
| -----: | ----: | ------------: | ------: | ------------------- | ---------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `load(InputStream)` | `java.util.Properties` |

##### `loadPropertiesAsMap(URL)` (`org.renaissance.core.ResourceUtils`)

| Change | Delta |             % | Samples | Callee                | Location                             |
| -----: | ----: | ------------: | ------: | --------------------- | ------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `loadProperties(URL)` | `org.renaissance.core.ResourceUtils` |

##### `create(Path, String, Optional, Map, boolean)` (`org.renaissance.core.BenchmarkSuite`)

| Change | Delta |             % | Samples | Callee                     | Location                             |
| -----: | ----: | ------------: | ------: | -------------------------- | ------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `loadPropertiesAsMap(URL)` | `org.renaissance.core.ResourceUtils` |

##### `$anonfun$1(Path, Config)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |             % | Samples | Callee                                         | Location                              |
| -----: | ----: | ------------: | ------: | ---------------------------------------------- | ------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `create(Path, String, Optional, Map, boolean)` | `org.renaissance.core.BenchmarkSuite` |

##### `evaluate(Spliterator, boolean, IntFunction)` (`java.util.stream.AbstractPipeline`)

| Change | Delta |            % | Samples | Callee                               | Location                             |
| -----: | ----: | -----------: | ------: | ------------------------------------ | ------------------------------------ |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `makeNodeBuilder(long, IntFunction)` | `java.util.stream.ReferencePipeline` |

##### `evaluateToArrayNode(IntFunction)` (`java.util.stream.AbstractPipeline`)

| Change | Delta |      % | Samples | Callee                                        | Location                            |
| -----: | ----: | -----: | ------: | --------------------------------------------- | ----------------------------------- |
| +33.3% |    +1 | 100.0% |   3 → 4 | `evaluate(Spliterator, boolean, IntFunction)` | `java.util.stream.AbstractPipeline` |

##### `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`)

| Change | Delta |      % | Samples | Callee                             | Location                            |
| -----: | ----: | -----: | ------: | ---------------------------------- | ----------------------------------- |
| +33.3% |    +1 | 100.0% |   3 → 4 | `evaluateToArrayNode(IntFunction)` | `java.util.stream.AbstractPipeline` |

##### `signalWaiters()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |      % | Samples | Callee           | Location                                 |
| ------: | ----: | -----: | ------: | ---------------- | ---------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `unpark(Thread)` | `java.util.concurrent.locks.LockSupport` |

##### `setDone()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |      % | Samples | Callee            | Location                            |
| ------: | ----: | -----: | ------: | ----------------- | ----------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `signalWaiters()` | `java.util.concurrent.ForkJoinTask` |

##### `write(FileDescriptor, long, int)` (`sun.nio.ch.UnixFileDispatcherImpl`)

| Change | Delta |             % | Samples | Callee                              | Location                            |
| -----: | ----: | ------------: | ------: | ----------------------------------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `write0(FileDescriptor, long, int)` | `sun.nio.ch.UnixFileDispatcherImpl` |

##### `writeFromNativeBuffer(FileDescriptor, ByteBuffer, long, boolean, boolean, int, NativeDispatcher)` (`sun.nio.ch.IOUtil`)

| Change | Delta |             % | Samples | Callee                             | Location                            |
| -----: | ----: | ------------: | ------: | ---------------------------------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `write(FileDescriptor, long, int)` | `sun.nio.ch.UnixFileDispatcherImpl` |

##### `write(FileDescriptor, ByteBuffer, long, boolean, boolean, int, NativeDispatcher)` (`sun.nio.ch.IOUtil`)

| Change | Delta |             % | Samples | Callee                                                                                             | Location            |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------- | ------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `writeFromNativeBuffer(FileDescriptor, ByteBuffer, long, boolean, boolean, int, NativeDispatcher)` | `sun.nio.ch.IOUtil` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |              % |       Samples | Callee                 | Location                            |
| -----: | ----: | -------------: | ------------: | ---------------------- | ----------------------------------- |
| -25.8% |  -399 | 99.9% → 100.0% | 1,544 → 1,145 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % |       Samples | Callee                                                    | Location                                      |
| -----: | ----: | ------------: | ------------: | --------------------------------------------------------- | --------------------------------------------- |
| -25.8% |  -394 | 99.1% → 99.2% | 1,530 → 1,136 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| -22.6% |   -94 | 26.9% → 28.1% |     416 → 322 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
| -50.0% |    -1 |          0.1% |         2 → 1 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`      |
|    new |    +1 |   0.0% → 0.1% |         0 → 1 | `uncompensate()`                                          | `java.util.concurrent.ForkJoinPool`           |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % |       Samples | Callee     | Location                            |
| -----: | ----: | -----: | ------------: | ---------- | ----------------------------------- |
| -25.8% |  -394 | 100.0% | 1,530 → 1,136 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |           % |       Samples | Callee      | Location                                            |
| ------: | ----: | ----------: | ------------: | ----------- | --------------------------------------------------- |
|  -24.7% |  -389 |       99.8% | 1,576 → 1,187 | `exec()`    | `java.util.concurrent.RecursiveTask`                |
|  +62.5% |   +10 | 1.0% → 2.2% |       16 → 26 | `exec()`    | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
| +100.0% |    +1 | 0.1% → 0.2% |         1 → 2 | `setDone()` | `java.util.concurrent.ForkJoinTask`                 |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|  Change | Delta |             % |       Samples | Callee              | Location                                                   |
| ------: | ----: | ------------: | ------------: | ------------------- | ---------------------------------------------------------- |
|  -25.9% |  -400 | 98.0% → 96.5% | 1,545 → 1,145 | `join()`            | `java.util.concurrent.ForkJoinTask`                        |
|  -36.7% |  -252 | 43.6% → 36.6% |     687 → 435 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -16.4% |  -139 | 53.7% → 59.6% |     847 → 708 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -28.0% |   -69 | 15.6% → 14.9% |     246 → 177 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `fork()`            | `java.util.concurrent.ForkJoinTask`                        |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change | Delta |      % |       Samples | Callee      | Location                                               |
| -----: | ----: | -----: | ------------: | ----------- | ------------------------------------------------------ |
| -24.7% |  -389 | 100.0% | 1,576 → 1,187 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |     % |     Samples | Callee     | Location                            |
| -----: | ----: | ----: | ----------: | ---------- | ----------------------------------- |
| -31.0% |  -386 | 99.9% | 1,244 → 858 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % |     Samples | Callee                                   | Location                            |
| -----: | ----: | ------------: | ----------: | ---------------------------------------- | ----------------------------------- |
| -30.7% |  -370 | 99.8% → 99.9% | 1,207 → 837 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |
| -50.0% |    -1 |   0.2% → 0.1% |       2 → 1 | `awaitWork(ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

| Change | Delta |      % |     Samples | Callee                              | Location                            |
| -----: | ----: | -----: | ----------: | ----------------------------------- | ----------------------------------- |
| -31.2% |  -367 | 100.0% | 1,175 → 808 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % |     Samples | Callee                                               | Location                                      |
| -----: | ----: | -----: | ----------: | ---------------------------------------------------- | --------------------------------------------- |
| -30.2% |  -365 | 100.0% | 1,209 → 844 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |             % |   Samples | Callee                           | Location                                                  |
| ------: | ----: | ------------: | --------: | -------------------------------- | --------------------------------------------------------- |
|  -35.3% |  -224 | 92.4% → 94.5% | 635 → 411 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `get(int)`                       | `java.util.ArrayList`                                     |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Callee              | Location                                                  |
| -----: | ----: | -----: | --------: | ------------------- | --------------------------------------------------------- |
| -36.7% |  -252 | 100.0% | 687 → 435 | `vectorSum()`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| -36.7% |  -252 | 100.0% | 687 → 435 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |              % |   Samples | Callee                   | Location                                                   |
| -----: | ----: | -------------: | --------: | ------------------------ | ---------------------------------------------------------- |
| -16.3% |  -138 | 99.9% → 100.0% | 846 → 708 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -15.7% |   -97 |  72.7% → 73.3% | 616 → 519 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -8.9% |   -17 |  22.4% → 24.4% | 190 → 173 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % |   Samples | Callee                         | Location                            |
| -----: | ----: | ------------: | --------: | ------------------------------ | ----------------------------------- |
| -24.0% |   -99 | 97.6% → 96.6% | 413 → 314 | `doExec()`                     | `java.util.concurrent.ForkJoinTask` |
| -50.0% |    -1 |   0.5% → 0.3% |     2 → 1 | `tryCompensate(long, boolean)` | `java.util.concurrent.ForkJoinPool` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % |   Samples | Callee                         | Location                                                   |
| ------: | ----: | ------------: | --------: | ------------------------------ | ---------------------------------------------------------- |
|  -13.4% |   -53 | 64.1% → 65.9% | 395 → 342 | `distance(Double[], Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |    -1 |   0.2% → 0.0% |     1 → 0 | `get(int)`                     | `java.util.ArrayList`                                      |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Callee     | Location                            |
| -----: | ----: | -----: | --------: | ---------- | ----------------------------------- |
| -30.0% |   -77 | 100.0% | 257 → 180 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change | Delta |              % |   Samples | Callee            | Location                                               |
| ------: | ----: | -------------: | --------: | ----------------- | ------------------------------------------------------ |
|  -30.0% |   -77 | 100.0% → 98.4% | 257 → 180 | `average(List)`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| +200.0% |    +2 |    0.4% → 1.6% |     1 → 3 | `boxed(double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % |   Samples | Callee     | Location                            |
| -----: | ----: | -----: | --------: | ---------- | ----------------------------------- |
| -25.5% |   -70 | 100.0% | 274 → 204 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Callee                     | Location                                               |
| -----: | ----: | -----: | --------: | -------------------------- | ------------------------------------------------------ |
| -28.0% |   -69 | 100.0% | 246 → 177 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| -28.0% |   -69 | 100.0% | 246 → 177 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % | Samples | Callee                              | Location              |
| -----: | ----: | ------------: | ------: | ----------------------------------- | --------------------- |
| -40.0% |   -16 | 21.1% → 13.9% | 40 → 24 | `add(Object)`                       | `java.util.ArrayList` |
| -12.1% |    -7 | 30.5% → 29.5% | 58 → 51 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`   |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |            % | Samples | Callee                                                                                       | Location                                  |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
| removed |    -5 | 83.3% → 0.0% |   5 → 0 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |            % | Samples | Callee               | Location              |
| ------: | ----: | -----------: | ------: | -------------------- | --------------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `addAll(Collection)` | `java.util.ArrayList` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0`)

|  Change | Delta |             % | Samples | Callee                       | Location                                    |
| ------: | ----: | ------------: | ------: | ---------------------------- | ------------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % | Samples | Callee               | Location                             |
| -----: | ----: | -----: | ------: | -------------------- | ------------------------------------ |
| -40.0% |    -2 | 100.0% |   5 → 3 | `collect(Collector)` | `java.util.stream.ReferencePipeline` |

##### `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |      % | Samples | Callee                        | Location                                    |
| -----: | ----: | -----: | ------: | ----------------------------- | ------------------------------------------- |
| -40.0% |    -2 | 100.0% |   5 → 3 | `generateData(int, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `apply(int, Seq)` (`scopt.OptionDef`)

|  Change | Delta |             % | Samples | Callee                                 | Location                               |
| ------: | ----: | ------------: | ------: | -------------------------------------- | -------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `findMethodHandleType(Class, Class[])` | `java.lang.invoke.MethodHandleNatives` |

##### `runParser(Seq, Object, List, OParserSetup)` (`scopt.ORunner$`)

|  Change | Delta |             % | Samples | Callee            | Location          |
| ------: | ----: | ------------: | ------: | ----------------- | ----------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `apply(int, Seq)` | `scopt.OptionDef` |

##### `parse(Seq, Object)` (`scopt.OptionParser`)

|  Change | Delta |             % | Samples | Callee                                       | Location         |
| ------: | ----: | ------------: | ------: | -------------------------------------------- | ---------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `runParser(Seq, Object, List, OParserSetup)` | `scopt.ORunner$` |

##### `parse(String[])` (`org.renaissance.harness.ConfigParser`)

|  Change | Delta |             % | Samples | Callee               | Location             |
| ------: | ----: | ------------: | ------: | -------------------- | -------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `parse(Seq, Object)` | `scopt.OptionParser` |

##### `grow(int)` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Callee                  | Location           |
| -----: | ----: | ------------: | ------: | ----------------------- | ------------------ |
| -36.4% |   -12 | 78.6% → 87.5% | 33 → 21 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `grow()` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Callee      | Location              |
| -----: | ----: | -----: | ------: | ----------- | --------------------- |
| -40.0% |   -16 | 100.0% | 40 → 24 | `grow(int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Callee   | Location              |
| -----: | ----: | -----: | ------: | -------- | --------------------- |
| -40.0% |   -16 | 100.0% | 40 → 24 | `grow()` | `java.util.ArrayList` |

##### `add(Object)` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Callee                       | Location              |
| -----: | ----: | -----: | ------: | ---------------------------- | --------------------- |
| -40.0% |   -16 | 100.0% | 40 → 24 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|  Change | Delta |           % | Samples | Callee          | Location                                                                              |
| ------: | ----: | ----------: | ------: | --------------- | ------------------------------------------------------------------------------------- |
| +100.0% |    +1 | 1.7% → 3.9% |   1 → 2 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011fece0` |

##### `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`)

|  Change | Delta |              % | Samples | Callee                                            | Location                              |
| ------: | ----: | -------------: | ------: | ------------------------------------------------- | ------------------------------------- |
|  -40.0% |    -2 | 83.3% → 100.0% |   5 → 3 | `evaluateSequential(PipelineHelper, Spliterator)` | `java.util.stream.ReduceOps$ReduceOp` |
| removed |    -1 |   16.7% → 0.0% |   1 → 0 | `getOpFlags()`                                    | `java.util.stream.ReduceOps$3`        |

##### `collect(Collector)` (`java.util.stream.ReferencePipeline`)

| Change | Delta |      % | Samples | Callee                 | Location                            |
| -----: | ----: | -----: | ------: | ---------------------- | ----------------------------------- |
| -50.0% |    -3 | 100.0% |   6 → 3 | `evaluate(TerminalOp)` | `java.util.stream.AbstractPipeline` |

##### `accept(int)` (`java.util.stream.IntPipeline$1$1`)

| Change | Delta |             % | Samples | Callee           | Location                                                               |
| -----: | ----: | ------------: | ------: | ---------------- | ---------------------------------------------------------------------- |
| -33.3% |    -1 | 60.0% → 66.7% |   3 → 2 | `accept(Object)` | `java.util.stream.ReduceOps$3ReducingSink`                             |
| -50.0% |    -1 | 40.0% → 33.3% |   2 → 1 | `apply(int)`     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fd4f0` |

# Allocated heap profile diff

Allocated 37.6 GiB → 37.7 GiB (+75.514 MiB, +0.2%) over 1,946 samples → 2,262 samples (19.8 MiB → 17.1 MiB per sample).

| Category         | Change |        Delta |             % |                Size |       Samples |
| ---------------- | -----: | -----------: | ------------: | ------------------: | ------------: |
| Standard library |  -1.0% | -353.767 MiB | 94.3% → 93.2% | 35.5 GiB → 35.1 GiB | 1,844 → 2,098 |
| Ours             | +19.7% | +429.281 MiB |   5.7% → 6.8% | 2.13 GiB → 2.55 GiB |     100 → 163 |
| Unknown          | -20.3% |       -496 B |         <0.1% |  2.38 KiB → 1.9 KiB |         2 → 1 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|   Change |        Delta |            % |                Size |       Samples | Function                                | Location                                                   |
| -------: | -----------: | -----------: | ------------------: | ------------: | --------------------------------------- | ---------------------------------------------------------- |
|      new | +233.126 MiB |  0.0% → 0.6% |       0 B → 233 MiB |        0 → 11 | `createSubtask(int, int)`               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +1563.6% |  +114.88 MiB | <0.1% → 0.3% |  7.35 MiB → 122 MiB |         2 → 8 | `add(double[], double[])`               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|    +8.9% | +112.029 MiB |  3.3% → 3.5% | 1.23 GiB → 1.34 GiB |       67 → 74 | `findNearestCentroid()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|      new |  +93.104 MiB |  0.0% → 0.2% |      0 B → 93.1 MiB |         0 → 1 | `<init>(JavaKMeans, Map)`               | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|   +48.5% |  +80.023 MiB |  0.4% → 0.6% |   165 MiB → 245 MiB |        5 → 11 | `createSubtask(int, int)`               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|    +0.2% |  +76.631 MiB |        92.3% | 34.7 GiB → 34.8 GiB | 1,688 → 1,909 | `copyOf(Object[], int)`                 | `java.util.Arrays`                                         |
|  +853.4% |  +67.523 MiB | <0.1% → 0.2% | 7.91 MiB → 75.4 MiB |         3 → 7 | `lambda$collectClusters$0(Double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|      new |  +41.812 MiB |  0.0% → 0.1% |      0 B → 41.8 MiB |         0 → 3 | `entrySet()`                            | `java.util.HashMap`                                        |
|      new |  +39.165 MiB |  0.0% → 0.1% |      0 B → 39.2 MiB |         0 → 2 | `computeClusterAverages()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|      new |  +23.279 MiB |  0.0% → 0.1% |      0 B → 23.3 MiB |         0 → 1 | `createSubtask(int, int)`               | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  +183.8% |  +18.772 MiB | <0.1% → 0.1% |   10.2 MiB → 29 MiB |       28 → 20 | `intStream(Spliterator$OfInt, boolean)` | `java.util.stream.StreamSupport`                           |
|      new |  +15.111 MiB | 0.0% → <0.1% |      0 B → 15.1 MiB |         0 → 5 | `vectorSum()`                           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +1512.6% |   +9.889 MiB |        <0.1% |  670 KiB → 10.5 MiB |        2 → 13 | `lambda$generateData$4(int)`            | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|   +97.0% |   +6.548 MiB |        <0.1% | 6.75 MiB → 13.3 MiB |       18 → 21 | `mapToObj(IntFunction, int)`            | `java.util.stream.IntPipeline`                             |
|  +305.5% |   +2.264 MiB |        <0.1% |  759 KiB → 3.01 MiB |         2 → 7 | `opWrapSink(int, Sink)`                 | `java.util.stream.IntPipeline$1`                           |
|   +12.9% |   +1.676 MiB |        <0.1% |   13 MiB → 14.7 MiB |       24 → 37 | `copyOf(byte[], int)`                   | `java.util.Arrays`                                         |
|      new |    +1.01 MiB | 0.0% → <0.1% |      0 B → 1.01 MiB |         0 → 2 | `allocateInstance(Object)`              | `java.lang.invoke.DirectMethodHandle`                      |
|      new | +932.859 KiB | 0.0% → <0.1% |       0 B → 933 KiB |         0 → 2 | `newLinkedHashMap(int)`                 | `java.util.LinkedHashMap`                                  |
|      new | +925.296 KiB | 0.0% → <0.1% |       0 B → 925 KiB |         0 → 2 | `addConstantUtf8(String)`               | `jdk.internal.org.objectweb.asm.SymbolTable`               |
|   +17.2% | +674.226 KiB |        <0.1% | 3.82 MiB → 4.48 MiB |            11 | `<init>(InputStream, Inflater, int)`    | `java.util.zip.InflaterInputStream`                        |

##### Standard library

|  Change |        Delta |            % |                Size |       Samples | Function                                                                        | Location                                     |
| ------: | -----------: | -----------: | ------------------: | ------------: | ------------------------------------------------------------------------------- | -------------------------------------------- |
|   +0.2% |  +76.631 MiB |        92.3% | 34.7 GiB → 34.8 GiB | 1,688 → 1,909 | `copyOf(Object[], int)`                                                         | `java.util.Arrays`                           |
|     new |  +41.812 MiB |  0.0% → 0.1% |      0 B → 41.8 MiB |         0 → 3 | `entrySet()`                                                                    | `java.util.HashMap`                          |
| +183.8% |  +18.772 MiB | <0.1% → 0.1% |   10.2 MiB → 29 MiB |       28 → 20 | `intStream(Spliterator$OfInt, boolean)`                                         | `java.util.stream.StreamSupport`             |
|  +97.0% |   +6.548 MiB |        <0.1% | 6.75 MiB → 13.3 MiB |       18 → 21 | `mapToObj(IntFunction, int)`                                                    | `java.util.stream.IntPipeline`               |
| +305.5% |   +2.264 MiB |        <0.1% |  759 KiB → 3.01 MiB |         2 → 7 | `opWrapSink(int, Sink)`                                                         | `java.util.stream.IntPipeline$1`             |
|  +12.9% |   +1.676 MiB |        <0.1% |   13 MiB → 14.7 MiB |       24 → 37 | `copyOf(byte[], int)`                                                           | `java.util.Arrays`                           |
|     new |    +1.01 MiB | 0.0% → <0.1% |      0 B → 1.01 MiB |         0 → 2 | `allocateInstance(Object)`                                                      | `java.lang.invoke.DirectMethodHandle`        |
|     new | +932.859 KiB | 0.0% → <0.1% |       0 B → 933 KiB |         0 → 2 | `newLinkedHashMap(int)`                                                         | `java.util.LinkedHashMap`                    |
|     new | +925.296 KiB | 0.0% → <0.1% |       0 B → 925 KiB |         0 → 2 | `addConstantUtf8(String)`                                                       | `jdk.internal.org.objectweb.asm.SymbolTable` |
|  +17.2% | +674.226 KiB |        <0.1% | 3.82 MiB → 4.48 MiB |            11 | `<init>(InputStream, Inflater, int)`                                            | `java.util.zip.InflaterInputStream`          |
|     new | +600.468 KiB | 0.0% → <0.1% |       0 B → 600 KiB |         0 → 2 | `<init>(InputStream, int)`                                                      | `java.util.jar.Manifest$FastInputStream`     |
| +141.8% | +543.046 KiB |        <0.1% |   383 KiB → 926 KiB |         1 → 2 | `readNBytes(int)`                                                               | `java.io.InputStream`                        |
|     new | +511.921 KiB | 0.0% → <0.1% |       0 B → 512 KiB |         0 → 1 | `run()`                                                                         | `jdk.internal.loader.URLClassPath$3`         |
|     new | +466.937 KiB | 0.0% → <0.1% |       0 B → 467 KiB |         0 → 1 | `awaitDone(int, long)`                                                          | `java.util.concurrent.ForkJoinTask`          |
|     new | +442.242 KiB | 0.0% → <0.1% |       0 B → 442 KiB |         0 → 1 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                      |
|     new | +410.679 KiB | 0.0% → <0.1% |       0 B → 411 KiB |         0 → 1 | `toString()`                                                                    | `java.lang.StringBuilder`                    |
|     new | +402.648 KiB | 0.0% → <0.1% |       0 B → 403 KiB |         0 → 1 | `releaseFence()`                                                                | `scala.runtime.Statics`                      |
|     new | +390.664 KiB | 0.0% → <0.1% |       0 B → 391 KiB |         0 → 1 | `newString(byte[], long)`                                                       | `java.lang.StringConcatHelper`               |
|     new | +390.648 KiB | 0.0% → <0.1% |       0 B → 391 KiB |         0 → 1 | `addConstantMemberReference(int, String, String, String)`                       | `jdk.internal.org.objectweb.asm.SymbolTable` |
|     new | +387.945 KiB | 0.0% → <0.1% |       0 B → 388 KiB |         0 → 1 | `replace(byte[], char, char)`                                                   | `java.lang.StringLatin1`                     |

##### Ours

|   Change |        Delta |            % |                Size | Samples | Function                             | Location                                                   |
| -------: | -----------: | -----------: | ------------------: | ------: | ------------------------------------ | ---------------------------------------------------------- |
|      new | +233.126 MiB |  0.0% → 0.6% |       0 B → 233 MiB |  0 → 11 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +1563.6% |  +114.88 MiB | <0.1% → 0.3% |  7.35 MiB → 122 MiB |   2 → 8 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|    +8.9% | +112.029 MiB |  3.3% → 3.5% | 1.23 GiB → 1.34 GiB | 67 → 74 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|      new |  +93.104 MiB |  0.0% → 0.2% |      0 B → 93.1 MiB |   0 → 1 | `<init>(JavaKMeans, Map)`            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|   +48.5% |  +80.023 MiB |  0.4% → 0.6% |   165 MiB → 245 MiB |  5 → 11 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +853.4% |  +67.523 MiB | <0.1% → 0.2% | 7.91 MiB → 75.4 MiB |   3 → 7 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|      new |  +39.165 MiB |  0.0% → 0.1% |      0 B → 39.2 MiB |   0 → 2 | `computeClusterAverages()`           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|      new |  +23.279 MiB |  0.0% → 0.1% |      0 B → 23.3 MiB |   0 → 1 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|      new |  +15.111 MiB | 0.0% → <0.1% |      0 B → 15.1 MiB |   0 → 5 | `vectorSum()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +1512.6% |   +9.889 MiB |        <0.1% |  670 KiB → 10.5 MiB |  2 → 13 | `lambda$generateData$4(int)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|      new | +388.648 KiB | 0.0% → <0.1% |       0 B → 389 KiB |   0 → 1 | `main(String[])`                     | `org.renaissance.harness.RenaissanceSuite$`                |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |        Delta |            % |                Size | Samples | Function                                                                                                                 | Location                                                   |
| ------: | -----------: | -----------: | ------------------: | ------: | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------- |
|  -70.7% | -213.921 MiB |  0.8% → 0.2% |  303 MiB → 88.6 MiB |  10 → 6 | `lambda$merge$6(List, List)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed | -160.198 MiB |  0.4% → 0.0% |       160 MiB → 0 B |   2 → 0 | `read(InputStream, String)`                                                                                              | `java.util.jar.Manifest`                                   |
|  -96.3% | -131.912 MiB | 0.4% → <0.1% |  137 MiB → 5.11 MiB |       2 | `resize()`                                                                                                               | `java.util.HashMap`                                        |
|  -45.0% | -122.434 MiB |  0.7% → 0.4% |   272 MiB → 150 MiB |  7 → 11 | `collectClusters(int[])`                                                                                                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -44.8% | -121.967 MiB |  0.7% → 0.4% |   272 MiB → 150 MiB |  13 → 7 | `grow(int)`                                                                                                              | `java.util.ArrayList`                                      |
|  -65.5% |   -44.14 MiB |  0.2% → 0.1% | 67.4 MiB → 23.2 MiB | 11 → 33 | `valueOf(double)`                                                                                                        | `java.lang.Double`                                         |
|  -48.0% |  -43.352 MiB |  0.2% → 0.1% |   90.4 MiB → 47 MiB | 10 → 12 | `newNode(int, Object, Object, HashMap$Node)`                                                                             | `java.util.HashMap`                                        |
|  -13.5% |  -22.878 MiB |         0.4% |   170 MiB → 147 MiB |  4 → 12 | `merge(Map, Map)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |   -2.654 MiB | <0.1% → 0.0% |      2.65 MiB → 0 B |   5 → 0 | `copyOf(Object[], int, Class)`                                                                                           | `java.util.Arrays`                                         |
|  -31.4% |  -777.14 KiB |        <0.1% | 2.42 MiB → 1.66 MiB |   2 → 1 | `iterator()`                                                                                                             | `java.util.HashMap$EntrySet`                               |
| removed | -764.164 KiB | <0.1% → 0.0% |       764 KiB → 0 B |   1 → 0 | `compress(char[], int, int)`                                                                                             | `java.lang.StringUTF16`                                    |
|   -2.0% | -428.445 KiB |         0.1% | 21.3 MiB → 20.8 MiB |       1 | `initTable()`                                                                                                            | `java.util.concurrent.ConcurrentHashMap`                   |
| removed | -388.984 KiB | <0.1% → 0.0% |       389 KiB → 0 B |   1 → 0 | `addConstantUtf8Reference(int, String)`                                                                                  | `jdk.internal.org.objectweb.asm.SymbolTable`               |
| removed | -387.585 KiB | <0.1% → 0.0% |       388 KiB → 0 B |   1 → 0 | `allocateUninitializedArray(Class, int)`                                                                                 | `jdk.internal.misc.Unsafe`                                 |
| removed | -385.921 KiB | <0.1% → 0.0% |       386 KiB → 0 B |   1 → 0 | `allocateUninitializedArray0(Class, int)`                                                                                | `jdk.internal.misc.Unsafe`                                 |
| removed | -384.328 KiB | <0.1% → 0.0% |       384 KiB → 0 B |   1 → 0 | `initCEN(int, ZipCoder)`                                                                                                 | `java.util.zip.ZipFile$Source`                             |
| removed | -382.382 KiB | <0.1% → 0.0% |       382 KiB → 0 B |   1 → 0 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)`                     | `java.lang.ClassLoader`                                    |
| removed | -379.609 KiB | <0.1% → 0.0% |       380 KiB → 0 B |   1 → 0 | `<init>(ClassReader, int)`                                                                                               | `jdk.internal.org.objectweb.asm.ClassWriter`               |
| removed | -379.453 KiB | <0.1% → 0.0% |       379 KiB → 0 B |   1 → 0 | `<clinit>()`                                                                                                             | `sun.security.util.KnownOIDs`                              |
| removed | -379.414 KiB | <0.1% → 0.0% |       379 KiB → 0 B |   1 → 0 | `<init>(MethodHandles$Lookup, MethodType, String, MethodType, MethodHandle, MethodType, boolean, Class[], MethodType[])` | `java.lang.invoke.InnerClassLambdaMetafactory`             |

##### Standard library

|  Change |        Delta |            % |                Size | Samples | Function                                                                                                                 | Location                                       |
| ------: | -----------: | -----------: | ------------------: | ------: | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- |
| removed | -160.198 MiB |  0.4% → 0.0% |       160 MiB → 0 B |   2 → 0 | `read(InputStream, String)`                                                                                              | `java.util.jar.Manifest`                       |
|  -96.3% | -131.912 MiB | 0.4% → <0.1% |  137 MiB → 5.11 MiB |       2 | `resize()`                                                                                                               | `java.util.HashMap`                            |
|  -44.8% | -121.967 MiB |  0.7% → 0.4% |   272 MiB → 150 MiB |  13 → 7 | `grow(int)`                                                                                                              | `java.util.ArrayList`                          |
|  -65.5% |   -44.14 MiB |  0.2% → 0.1% | 67.4 MiB → 23.2 MiB | 11 → 33 | `valueOf(double)`                                                                                                        | `java.lang.Double`                             |
|  -48.0% |  -43.352 MiB |  0.2% → 0.1% |   90.4 MiB → 47 MiB | 10 → 12 | `newNode(int, Object, Object, HashMap$Node)`                                                                             | `java.util.HashMap`                            |
| removed |   -2.654 MiB | <0.1% → 0.0% |      2.65 MiB → 0 B |   5 → 0 | `copyOf(Object[], int, Class)`                                                                                           | `java.util.Arrays`                             |
|  -31.4% |  -777.14 KiB |        <0.1% | 2.42 MiB → 1.66 MiB |   2 → 1 | `iterator()`                                                                                                             | `java.util.HashMap$EntrySet`                   |
| removed | -764.164 KiB | <0.1% → 0.0% |       764 KiB → 0 B |   1 → 0 | `compress(char[], int, int)`                                                                                             | `java.lang.StringUTF16`                        |
|   -2.0% | -428.445 KiB |         0.1% | 21.3 MiB → 20.8 MiB |       1 | `initTable()`                                                                                                            | `java.util.concurrent.ConcurrentHashMap`       |
| removed | -388.984 KiB | <0.1% → 0.0% |       389 KiB → 0 B |   1 → 0 | `addConstantUtf8Reference(int, String)`                                                                                  | `jdk.internal.org.objectweb.asm.SymbolTable`   |
| removed | -387.585 KiB | <0.1% → 0.0% |       388 KiB → 0 B |   1 → 0 | `allocateUninitializedArray(Class, int)`                                                                                 | `jdk.internal.misc.Unsafe`                     |
| removed | -385.921 KiB | <0.1% → 0.0% |       386 KiB → 0 B |   1 → 0 | `allocateUninitializedArray0(Class, int)`                                                                                | `jdk.internal.misc.Unsafe`                     |
| removed | -384.328 KiB | <0.1% → 0.0% |       384 KiB → 0 B |   1 → 0 | `initCEN(int, ZipCoder)`                                                                                                 | `java.util.zip.ZipFile$Source`                 |
| removed | -382.382 KiB | <0.1% → 0.0% |       382 KiB → 0 B |   1 → 0 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)`                     | `java.lang.ClassLoader`                        |
| removed | -379.609 KiB | <0.1% → 0.0% |       380 KiB → 0 B |   1 → 0 | `<init>(ClassReader, int)`                                                                                               | `jdk.internal.org.objectweb.asm.ClassWriter`   |
| removed | -379.453 KiB | <0.1% → 0.0% |       379 KiB → 0 B |   1 → 0 | `<clinit>()`                                                                                                             | `sun.security.util.KnownOIDs`                  |
| removed | -379.414 KiB | <0.1% → 0.0% |       379 KiB → 0 B |   1 → 0 | `<init>(MethodHandles$Lookup, MethodType, String, MethodType, MethodHandle, MethodType, boolean, Class[], MethodType[])` | `java.lang.invoke.InnerClassLambdaMetafactory` |
| removed | -377.648 KiB | <0.1% → 0.0% |       378 KiB → 0 B |   1 → 0 | `readLine()`                                                                                                             | `java.util.Properties$LineReader`              |
|  -40.6% | -264.679 KiB |        <0.1% |   652 KiB → 388 KiB |       1 | `fillInStackTrace(int)`                                                                                                  | `java.lang.Throwable`                          |
|  -20.5% | -226.195 KiB |        <0.1% |  1.08 MiB → 876 KiB |       3 | `copyOfRangeByte(byte[], int, int)`                                                                                      | `java.util.Arrays`                             |

##### Ours

| Change |        Delta |           % |               Size | Samples | Function                     | Location                                                   |
| -----: | -----------: | ----------: | -----------------: | ------: | ---------------------------- | ---------------------------------------------------------- |
| -70.7% | -213.921 MiB | 0.8% → 0.2% | 303 MiB → 88.6 MiB |  10 → 6 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| -45.0% | -122.434 MiB | 0.7% → 0.4% |  272 MiB → 150 MiB |  7 → 11 | `collectClusters(int[])`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -13.5% |  -22.878 MiB |        0.4% |  170 MiB → 147 MiB |  4 → 12 | `merge(Map, Map)`            | `org.renaissance.jdk.concurrent.JavaKMeans`                |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |             % |          Size | Samples | Location                                                       |
| -----: | -----------: | ------------: | ------------: | ------: | -------------------------------------------------------------- |
|    new | +233.126 MiB | 0.0% → 100.0% | 0 B → 233 MiB |  0 → 11 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|   Change |       Delta |      % |               Size | Samples | Location                                                      |
| -------: | ----------: | -----: | -----------------: | ------: | ------------------------------------------------------------- |
| +1563.6% | +114.88 MiB | 100.0% | 7.35 MiB → 122 MiB |   2 → 8 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:430` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |                Size | Samples | Location                                                       |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------------------------------------------- |
|  +8.9% | +112.029 MiB | 100.0% | 1.23 GiB → 1.34 GiB | 67 → 74 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:223` |

##### `<init>(JavaKMeans, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |       Delta |             % |           Size | Samples | Location                                                   |
| -----: | ----------: | ------------: | -------------: | ------: | ---------------------------------------------------------- |
|    new | +93.104 MiB | 0.0% → 100.0% | 0 B → 93.1 MiB |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:282` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |              Size | Samples | Location                                                      |
| -----: | ----------: | -----: | ----------------: | ------: | ------------------------------------------------------------- |
| +48.5% | +80.023 MiB | 100.0% | 165 MiB → 245 MiB |  5 → 11 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |       Delta |      % |                Size |       Samples | Location                |
| -----: | ----------: | -----: | ------------------: | ------------: | ----------------------- |
|  +0.2% | +76.631 MiB | 100.0% | 34.7 GiB → 34.8 GiB | 1,688 → 1,909 | `java.util.Arrays:3482` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change |       Delta |      % |                Size | Samples | Location                                                       |
| ------: | ----------: | -----: | ------------------: | ------: | -------------------------------------------------------------- |
| +853.4% | +67.523 MiB | 100.0% | 7.91 MiB → 75.4 MiB |   3 → 7 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |

##### `entrySet()` (`java.util.HashMap`)

| Change |       Delta |             % |           Size | Samples | Location                 |
| -----: | ----------: | ------------: | -------------: | ------: | ------------------------ |
|    new | +41.812 MiB | 0.0% → 100.0% | 0 B → 41.8 MiB |   0 → 3 | `java.util.HashMap:1099` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |       Delta |             % |           Size | Samples | Location                                                   |
| -----: | ----------: | ------------: | -------------: | ------: | ---------------------------------------------------------- |
|    new | +39.165 MiB | 0.0% → 100.0% | 0 B → 39.2 MiB |   0 → 2 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:314` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |       Delta |             % |           Size | Samples | Location                                                   |
| -----: | ----------: | ------------: | -------------: | ------: | ---------------------------------------------------------- |
|    new | +23.279 MiB | 0.0% → 100.0% | 0 B → 23.3 MiB |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:352` |

##### `intStream(Spliterator$OfInt, boolean)` (`java.util.stream.StreamSupport`)

|  Change |       Delta |      % |              Size | Samples | Location                             |
| ------: | ----------: | -----: | ----------------: | ------: | ------------------------------------ |
| +183.8% | +18.772 MiB | 100.0% | 10.2 MiB → 29 MiB | 28 → 20 | `java.util.stream.StreamSupport:138` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |             % |           Size | Samples | Location                                                      |
| -----: | ----------: | ------------: | -------------: | ------: | ------------------------------------------------------------- |
|    new | +15.111 MiB | 0.0% → 100.0% | 0 B → 15.1 MiB |   0 → 5 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|   Change |      Delta |      % |               Size | Samples | Location                                       |
| -------: | ---------: | -----: | -----------------: | ------: | ---------------------------------------------- |
| +1512.6% | +9.889 MiB | 100.0% | 670 KiB → 10.5 MiB |  2 → 13 | `org.renaissance.jdk.concurrent.JavaKMeans:87` |

##### `mapToObj(IntFunction, int)` (`java.util.stream.IntPipeline`)

| Change |      Delta |      % |                Size | Samples | Location                           |
| -----: | ---------: | -----: | ------------------: | ------: | ---------------------------------- |
| +97.0% | +6.548 MiB | 100.0% | 6.75 MiB → 13.3 MiB | 18 → 21 | `java.util.stream.IntPipeline:174` |

##### `opWrapSink(int, Sink)` (`java.util.stream.IntPipeline$1`)

|  Change |      Delta |      % |               Size | Samples | Location                             |
| ------: | ---------: | -----: | -----------------: | ------: | ------------------------------------ |
| +305.5% | +2.264 MiB | 100.0% | 759 KiB → 3.01 MiB |   2 → 7 | `java.util.stream.IntPipeline$1:177` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

| Change |      Delta |      % |              Size | Samples | Location                |
| -----: | ---------: | -----: | ----------------: | ------: | ----------------------- |
| +12.9% | +1.676 MiB | 100.0% | 13 MiB → 14.7 MiB | 24 → 37 | `java.util.Arrays:3541` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

| Change |     Delta |             % |           Size | Samples | Location                                  |
| -----: | --------: | ------------: | -------------: | ------: | ----------------------------------------- |
|    new | +1.01 MiB | 0.0% → 100.0% | 0 B → 1.01 MiB |   0 → 2 | `java.lang.invoke.DirectMethodHandle:501` |

##### `newLinkedHashMap(int)` (`java.util.LinkedHashMap`)

| Change |        Delta |             % |          Size | Samples | Location                       |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------ |
|    new | +932.859 KiB | 0.0% → 100.0% | 0 B → 933 KiB |   0 → 2 | `java.util.LinkedHashMap:1078` |

##### `addConstantUtf8(String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change |        Delta |             % |          Size | Samples | Location                                         |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------ |
|    new | +925.296 KiB | 0.0% → 100.0% | 0 B → 925 KiB |   0 → 2 | `jdk.internal.org.objectweb.asm.SymbolTable:807` |

##### `<init>(InputStream, Inflater, int)` (`java.util.zip.InflaterInputStream`)

| Change |        Delta |      % |                Size | Samples | Location                               |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------------------- |
| +17.2% | +674.226 KiB | 100.0% | 3.82 MiB → 4.48 MiB |      11 | `java.util.zip.InflaterInputStream:89` |

##### `<init>(InputStream, int)` (`java.util.jar.Manifest$FastInputStream`)

| Change |        Delta |             % |          Size | Samples | Location                                     |
| -----: | -----------: | ------------: | ------------: | ------: | -------------------------------------------- |
|    new | +600.468 KiB | 0.0% → 100.0% | 0 B → 600 KiB |   0 → 2 | `java.util.jar.Manifest$FastInputStream:421` |

##### `readNBytes(int)` (`java.io.InputStream`)

|  Change |        Delta |             % |          Size | Samples | Location                  |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------- |
|     new | +926.054 KiB | 0.0% → 100.0% | 0 B → 926 KiB |   0 → 2 | `java.io.InputStream:448` |
| removed | -383.007 KiB | 100.0% → 0.0% | 383 KiB → 0 B |   1 → 0 | `java.io.InputStream:408` |

##### `run()` (`jdk.internal.loader.URLClassPath$3`)

| Change |        Delta |             % |          Size | Samples | Location                                 |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------------------------- |
|    new | +511.921 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `jdk.internal.loader.URLClassPath$3:500` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |             % |          Size | Samples | Location                                |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------------- |
|    new | +466.937 KiB | 0.0% → 100.0% | 0 B → 467 KiB |   0 → 1 | `java.util.concurrent.ForkJoinTask:437` |

##### `toString()` (`java.lang.StringBuilder`)

| Change |        Delta |             % |          Size | Samples | Location                      |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------------- |
|    new | +410.679 KiB | 0.0% → 100.0% | 0 B → 411 KiB |   0 → 1 | `java.lang.StringBuilder:475` |

##### `releaseFence()` (`scala.runtime.Statics`)

| Change |        Delta |             % |          Size | Samples | Location                    |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------- |
|    new | +402.648 KiB | 0.0% → 100.0% | 0 B → 403 KiB |   0 → 1 | `scala.runtime.Statics:148` |

##### `newString(byte[], long)` (`java.lang.StringConcatHelper`)

| Change |        Delta |             % |          Size | Samples | Location                           |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------------------- |
|    new | +390.664 KiB | 0.0% → 100.0% | 0 B → 391 KiB |   0 → 1 | `java.lang.StringConcatHelper:400` |

##### `addConstantMemberReference(int, String, String, String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change |        Delta |             % |          Size | Samples | Location                                         |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------ |
|    new | +390.648 KiB | 0.0% → 100.0% | 0 B → 391 KiB |   0 → 1 | `jdk.internal.org.objectweb.asm.SymbolTable:605` |

##### `replace(byte[], char, char)` (`java.lang.StringLatin1`)

| Change |        Delta |             % |          Size | Samples | Location                     |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------------- |
|    new | +387.945 KiB | 0.0% → 100.0% | 0 B → 388 KiB |   0 → 1 | `java.lang.StringLatin1:317` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |        Delta |             % |          Size | Samples | Location                                       |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------------------------------- |
|    new | +388.648 KiB | 0.0% → 100.0% | 0 B → 389 KiB |   0 → 1 | `org.renaissance.harness.RenaissanceSuite$:37` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |      % |               Size | Samples | Location                                        |
| -----: | -----------: | -----: | -----------------: | ------: | ----------------------------------------------- |
| -70.7% | -213.921 MiB | 100.0% | 303 MiB → 88.6 MiB |  10 → 6 | `org.renaissance.jdk.concurrent.JavaKMeans:114` |

##### `read(InputStream, String)` (`java.util.jar.Manifest`)

|  Change |        Delta |             % |          Size | Samples | Location                     |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------- |
| removed | -160.198 MiB | 100.0% → 0.0% | 160 MiB → 0 B |   2 → 0 | `java.util.jar.Manifest:345` |

##### `resize()` (`java.util.HashMap`)

| Change |        Delta |      % |               Size | Samples | Location                |
| -----: | -----------: | -----: | -----------------: | ------: | ----------------------- |
| -96.3% | -131.912 MiB | 100.0% | 137 MiB → 5.11 MiB |       2 | `java.util.HashMap:710` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |              Size | Samples | Location                                                       |
| -----: | -----------: | -----: | ----------------: | ------: | -------------------------------------------------------------- |
| -45.0% | -122.434 MiB | 100.0% | 272 MiB → 150 MiB |  7 → 11 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:209` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |        Delta |      % |              Size | Samples | Location                  |
| -----: | -----------: | -----: | ----------------: | ------: | ------------------------- |
| -44.8% | -121.967 MiB | 100.0% | 272 MiB → 150 MiB |  13 → 7 | `java.util.ArrayList:239` |

##### `valueOf(double)` (`java.lang.Double`)

| Change |      Delta |      % |                Size | Samples | Location               |
| -----: | ---------: | -----: | ------------------: | ------: | ---------------------- |
| -65.5% | -44.14 MiB | 100.0% | 67.4 MiB → 23.2 MiB | 11 → 33 | `java.lang.Double:773` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

| Change |       Delta |      % |              Size | Samples | Location                 |
| -----: | ----------: | -----: | ----------------: | ------: | ------------------------ |
| -48.0% | -43.352 MiB | 100.0% | 90.4 MiB → 47 MiB | 10 → 12 | `java.util.HashMap:1909` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |       Delta |      % |              Size | Samples | Location                                        |
| -----: | ----------: | -----: | ----------------: | ------: | ----------------------------------------------- |
| -13.5% | -22.878 MiB | 100.0% | 170 MiB → 147 MiB |  4 → 12 | `org.renaissance.jdk.concurrent.JavaKMeans:110` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

|  Change |      Delta |             % |           Size | Samples | Location                |
| ------: | ---------: | ------------: | -------------: | ------: | ----------------------- |
| removed | -2.654 MiB | 100.0% → 0.0% | 2.65 MiB → 0 B |   5 → 0 | `java.util.Arrays:3513` |

##### `iterator()` (`java.util.HashMap$EntrySet`)

| Change |       Delta |      % |                Size | Samples | Location                          |
| -----: | ----------: | -----: | ------------------: | ------: | --------------------------------- |
| -31.4% | -777.14 KiB | 100.0% | 2.42 MiB → 1.66 MiB |   2 → 1 | `java.util.HashMap$EntrySet:1106` |

##### `compress(char[], int, int)` (`java.lang.StringUTF16`)

|  Change |        Delta |             % |          Size | Samples | Location                    |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------- |
| removed | -764.164 KiB | 100.0% → 0.0% | 764 KiB → 0 B |   1 → 0 | `java.lang.StringUTF16:211` |

##### `initTable()` (`java.util.concurrent.ConcurrentHashMap`)

| Change |        Delta |      % |                Size | Samples | Location                                      |
| -----: | -----------: | -----: | ------------------: | ------: | --------------------------------------------- |
|  -2.0% | -428.445 KiB | 100.0% | 21.3 MiB → 20.8 MiB |       1 | `java.util.concurrent.ConcurrentHashMap:2301` |

##### `addConstantUtf8Reference(int, String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|  Change |        Delta |             % |          Size | Samples | Location                                          |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------- |
| removed | -388.984 KiB | 100.0% → 0.0% | 389 KiB → 0 B |   1 → 0 | `jdk.internal.org.objectweb.asm.SymbolTable:1040` |

##### `allocateUninitializedArray(Class, int)` (`jdk.internal.misc.Unsafe`)

|  Change |        Delta |             % |          Size | Samples | Location                        |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------- |
| removed | -387.585 KiB | 100.0% → 0.0% | 388 KiB → 0 B |   1 → 0 | `jdk.internal.misc.Unsafe:1380` |

##### `allocateUninitializedArray0(Class, int)` (`jdk.internal.misc.Unsafe`)

|  Change |        Delta |             % |          Size | Samples | Location                        |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------- |
| removed | -385.921 KiB | 100.0% → 0.0% | 386 KiB → 0 B |   1 → 0 | `jdk.internal.misc.Unsafe:1387` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|  Change |        Delta |             % |          Size | Samples | Location                            |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------------------- |
| removed | -384.328 KiB | 100.0% → 0.0% | 384 KiB → 0 B |   1 → 0 | `java.util.zip.ZipFile$Source:1744` |

##### `<init>(ClassReader, int)` (`jdk.internal.org.objectweb.asm.ClassWriter`)

|  Change |        Delta |             % |          Size | Samples | Location                                         |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------ |
| removed | -379.609 KiB | 100.0% → 0.0% | 380 KiB → 0 B |   1 → 0 | `jdk.internal.org.objectweb.asm.ClassWriter:297` |

##### `<clinit>()` (`sun.security.util.KnownOIDs`)

|  Change |        Delta |             % |          Size | Samples | Location                          |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------------- |
| removed | -379.453 KiB | 100.0% → 0.0% | 379 KiB → 0 B |   1 → 0 | `sun.security.util.KnownOIDs:137` |

##### `<init>(MethodHandles$Lookup, MethodType, String, MethodType, MethodHandle, MethodType, boolean, Class[], MethodType[])` (`java.lang.invoke.InnerClassLambdaMetafactory`)

|  Change |        Delta |             % |          Size | Samples | Location                                           |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------------------------------------- |
| removed | -379.414 KiB | 100.0% → 0.0% | 379 KiB → 0 B |   1 → 0 | `java.lang.invoke.InnerClassLambdaMetafactory:185` |

##### `readLine()` (`java.util.Properties$LineReader`)

|  Change |        Delta |             % |          Size | Samples | Location                              |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------- |
| removed | -377.648 KiB | 100.0% → 0.0% | 378 KiB → 0 B |   1 → 0 | `java.util.Properties$LineReader:574` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

| Change |        Delta |      % |               Size | Samples | Location                |
| -----: | -----------: | -----: | -----------------: | ------: | ----------------------- |
| -20.5% | -226.195 KiB | 100.0% | 1.08 MiB → 876 KiB |       3 | `java.util.Arrays:3863` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |             % |          Size | Samples | Caller      | Location                                               |
| -----: | -----------: | ------------: | ------------: | ------: | ----------- | ------------------------------------------------------ |
|    new | +233.126 MiB | 0.0% → 100.0% | 0 B → 233 MiB |  0 → 11 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|   Change |       Delta |      % |               Size | Samples | Caller                               | Location                                                  |
| -------: | ----------: | -----: | -----------------: | ------: | ------------------------------------ | --------------------------------------------------------- |
| +1563.6% | +114.88 MiB | 100.0% | 7.35 MiB → 122 MiB |   2 → 8 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |                Size | Samples | Caller              | Location                                                   |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------- | ---------------------------------------------------------- |
|  +8.9% | +112.029 MiB | 100.0% | 1.23 GiB → 1.34 GiB | 67 → 74 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `<init>(JavaKMeans, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |       Delta |             % |           Size | Samples | Caller                         | Location                                    |
| -----: | ----------: | ------------: | -------------: | ------: | ------------------------------ | ------------------------------------------- |
|    new | +93.104 MiB | 0.0% → 100.0% | 0 B → 93.1 MiB |   0 → 1 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |              Size | Samples | Caller      | Location                                               |
| -----: | ----------: | -----: | ----------------: | ------: | ----------- | ------------------------------------------------------ |
| +48.5% | +80.023 MiB | 100.0% | 165 MiB → 245 MiB |  5 → 11 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |        Delta |             % |                Size |   Samples | Caller      | Location              |
| -----: | -----------: | ------------: | ------------------: | --------: | ----------- | --------------------- |
|  +2.0% | +349.751 MiB | 49.5% → 50.4% | 17.2 GiB → 17.5 GiB | 837 → 932 | `toArray()` | `java.util.ArrayList` |
|  -1.5% |  -273.12 MiB | 50.5% → 49.6% | 17.5 GiB → 17.3 GiB | 851 → 977 | `grow(int)` | `java.util.ArrayList` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change |       Delta |      % |                Size | Samples | Caller          | Location                                                                              |
| ------: | ----------: | -----: | ------------------: | ------: | --------------- | ------------------------------------------------------------------------------------- |
| +853.4% | +67.523 MiB | 100.0% | 7.91 MiB → 75.4 MiB |   3 → 7 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011fece0` |

##### `entrySet()` (`java.util.HashMap`)

| Change |       Delta |             % |           Size | Samples | Caller                        | Location            |
| -----: | ----------: | ------------: | -------------: | ------: | ----------------------------- | ------------------- |
|    new | +41.812 MiB | 0.0% → 100.0% | 0 B → 41.8 MiB |   0 → 3 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |       Delta |             % |           Size | Samples | Caller              | Location                                               |
| -----: | ----------: | ------------: | -------------: | ------: | ------------------- | ------------------------------------------------------ |
|    new | +39.165 MiB | 0.0% → 100.0% | 0 B → 39.2 MiB |   0 → 2 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |       Delta |             % |           Size | Samples | Caller      | Location                                               |
| -----: | ----------: | ------------: | -------------: | ------: | ----------- | ------------------------------------------------------ |
|    new | +23.279 MiB | 0.0% → 100.0% | 0 B → 23.3 MiB |   0 → 1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `intStream(Spliterator$OfInt, boolean)` (`java.util.stream.StreamSupport`)

|  Change |       Delta |      % |              Size | Samples | Caller            | Location                     |
| ------: | ----------: | -----: | ----------------: | ------: | ----------------- | ---------------------------- |
| +183.8% | +18.772 MiB | 100.0% | 10.2 MiB → 29 MiB | 28 → 20 | `range(int, int)` | `java.util.stream.IntStream` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |             % |           Size | Samples | Caller              | Location                                                  |
| -----: | ----------: | ------------: | -------------: | ------: | ------------------- | --------------------------------------------------------- |
|    new | +15.111 MiB | 0.0% → 100.0% | 0 B → 15.1 MiB |   0 → 5 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|   Change |      Delta |      % |               Size | Samples | Caller       | Location                                                               |
| -------: | ---------: | -----: | -----------------: | ------: | ------------ | ---------------------------------------------------------------------- |
| +1512.6% | +9.889 MiB | 100.0% | 670 KiB → 10.5 MiB |  2 → 13 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fd960` |

##### `mapToObj(IntFunction, int)` (`java.util.stream.IntPipeline`)

| Change |      Delta |      % |                Size | Samples | Caller                  | Location                       |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------- | ------------------------------ |
| +97.0% | +6.548 MiB | 100.0% | 6.75 MiB → 13.3 MiB | 18 → 21 | `mapToObj(IntFunction)` | `java.util.stream.IntPipeline` |

##### `opWrapSink(int, Sink)` (`java.util.stream.IntPipeline$1`)

|  Change |      Delta |      % |               Size | Samples | Caller           | Location                            |
| ------: | ---------: | -----: | -----------------: | ------: | ---------------- | ----------------------------------- |
| +305.5% | +2.264 MiB | 100.0% | 759 KiB → 3.01 MiB |   2 → 7 | `wrapSink(Sink)` | `java.util.stream.AbstractPipeline` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

| Change |       Delta |             % |                Size | Samples | Caller                        | Location                          |
| -----: | ----------: | ------------: | ------------------: | ------: | ----------------------------- | --------------------------------- |
| +13.0% |  +1.636 MiB | 96.8% → 96.9% | 12.6 MiB → 14.2 MiB | 23 → 35 | `getBytes()`                  | `jdk.internal.loader.Resource`    |
|  +9.5% | +40.828 KiB |   3.2% → 3.1% |   430 KiB → 471 KiB |   1 → 2 | `ensureCapacityInternal(int)` | `java.lang.AbstractStringBuilder` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

| Change |     Delta |             % |           Size | Samples | Caller                                       | Location                                             |
| -----: | --------: | ------------: | -------------: | ------: | -------------------------------------------- | ---------------------------------------------------- |
|    new | +1.01 MiB | 0.0% → 100.0% | 0 B → 1.01 MiB |   0 → 2 | `newInvokeSpecial(Object, int, int, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001200000` |

##### `newLinkedHashMap(int)` (`java.util.LinkedHashMap`)

| Change |        Delta |             % |          Size | Samples | Caller        | Location                   |
| -----: | -----------: | ------------: | ------------: | ------: | ------------- | -------------------------- |
|    new | +932.859 KiB | 0.0% → 100.0% | 0 B → 933 KiB |   0 → 2 | `<init>(int)` | `java.util.jar.Attributes` |

##### `addConstantUtf8(String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change |        Delta |            % |          Size | Samples | Caller                                                            | Location                                      |
| -----: | -----------: | -----------: | ------------: | ------: | ----------------------------------------------------------------- | --------------------------------------------- |
|    new | +537.648 KiB | 0.0% → 58.1% | 0 B → 538 KiB |   0 → 1 | `<init>(SymbolTable, int, String, String, String, String[], int)` | `jdk.internal.org.objectweb.asm.MethodWriter` |
|    new | +387.648 KiB | 0.0% → 41.9% | 0 B → 388 KiB |   0 → 1 | `addConstantNameAndType(String, String)`                          | `jdk.internal.org.objectweb.asm.SymbolTable`  |

##### `<init>(InputStream, Inflater, int)` (`java.util.zip.InflaterInputStream`)

| Change |        Delta |      % |                Size | Samples | Caller                                                                                  | Location                                           |
| -----: | -----------: | -----: | ------------------: | ------: | --------------------------------------------------------------------------------------- | -------------------------------------------------- |
| +17.2% | +674.226 KiB | 100.0% | 3.82 MiB → 4.48 MiB |      11 | `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, Inflater, int)` | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |

##### `<init>(InputStream, int)` (`java.util.jar.Manifest$FastInputStream`)

| Change |        Delta |             % |          Size | Samples | Caller                | Location                                 |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------- | ---------------------------------------- |
|    new | +600.468 KiB | 0.0% → 100.0% | 0 B → 600 KiB |   0 → 2 | `<init>(InputStream)` | `java.util.jar.Manifest$FastInputStream` |

##### `readNBytes(int)` (`java.io.InputStream`)

|  Change |        Delta |      % |              Size | Samples | Caller           | Location              |
| ------: | -----------: | -----: | ----------------: | ------: | ---------------- | --------------------- |
| +141.8% | +543.046 KiB | 100.0% | 383 KiB → 926 KiB |   1 → 2 | `readAllBytes()` | `java.io.InputStream` |

##### `run()` (`jdk.internal.loader.URLClassPath$3`)

| Change |        Delta |             % |          Size | Samples | Caller  | Location                             |
| -----: | -----------: | ------------: | ------------: | ------: | ------- | ------------------------------------ |
|    new | +511.921 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `run()` | `jdk.internal.loader.URLClassPath$3` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |             % |          Size | Samples | Caller   | Location                            |
| -----: | -----------: | ------------: | ------------: | ------: | -------- | ----------------------------------- |
|    new | +466.937 KiB | 0.0% → 100.0% | 0 B → 467 KiB |   0 → 1 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

| Change |        Delta |             % |          Size | Samples | Caller                                                    | Location                |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------------------------------- | ----------------------- |
|    new | +442.242 KiB | 0.0% → 100.0% | 0 B → 442 KiB |   0 → 1 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `toString()` (`java.lang.StringBuilder`)

| Change |        Delta |             % |          Size | Samples | Caller               | Location          |
| -----: | -----------: | ------------: | ------------: | ------: | -------------------- | ----------------- |
|    new | +410.679 KiB | 0.0% → 100.0% | 0 B → 411 KiB |   0 → 1 | `descriptorString()` | `java.lang.Class` |

##### `releaseFence()` (`scala.runtime.Statics`)

| Change |        Delta |             % |          Size | Samples | Caller           | Location                                  |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------- | ----------------------------------------- |
|    new | +402.648 KiB | 0.0% → 100.0% | 0 B → 403 KiB |   0 → 1 | `<init>(Object)` | `scala.collection.ArrayOps$ArrayIterator` |

##### `newString(byte[], long)` (`java.lang.StringConcatHelper`)

| Change |        Delta |             % |          Size | Samples | Caller                         | Location                       |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------ | ------------------------------ |
|    new | +390.664 KiB | 0.0% → 100.0% | 0 B → 391 KiB |   0 → 1 | `simpleConcat(Object, Object)` | `java.lang.StringConcatHelper` |

##### `addConstantMemberReference(int, String, String, String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change |        Delta |             % |          Size | Samples | Caller                                                  | Location                                     |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------------- | -------------------------------------------- |
|    new | +390.648 KiB | 0.0% → 100.0% | 0 B → 391 KiB |   0 → 1 | `addConstantMethodref(String, String, String, boolean)` | `jdk.internal.org.objectweb.asm.SymbolTable` |

##### `replace(byte[], char, char)` (`java.lang.StringLatin1`)

| Change |        Delta |             % |          Size | Samples | Caller                | Location           |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------- | ------------------ |
|    new | +387.945 KiB | 0.0% → 100.0% | 0 B → 388 KiB |   0 → 1 | `replace(char, char)` | `java.lang.String` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |        Delta |             % |          Size | Samples | Caller           | Location                                   |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------- | ------------------------------------------ |
|    new | +388.648 KiB | 0.0% → 100.0% | 0 B → 389 KiB |   0 → 1 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |      % |               Size | Samples | Caller                  | Location                                                               |
| -----: | -----------: | -----: | -----------------: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| -70.7% | -213.921 MiB | 100.0% | 303 MiB → 88.6 MiB |  10 → 6 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ff3c0` |

##### `read(InputStream, String)` (`java.util.jar.Manifest`)

|  Change |        Delta |             % |          Size | Samples | Caller                                     | Location                 |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------------ | ------------------------ |
| removed | -160.198 MiB | 100.0% → 0.0% | 160 MiB → 0 B |   2 → 0 | `<init>(JarVerifier, InputStream, String)` | `java.util.jar.Manifest` |

##### `resize()` (`java.util.HashMap`)

|  Change |        Delta |             % |           Size | Samples | Caller                                          | Location            |
| ------: | -----------: | ------------: | -------------: | ------: | ----------------------------------------------- | ------------------- |
| removed | -137.027 MiB | 100.0% → 0.0% |  137 MiB → 0 B |   2 → 0 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |
|     new |   +5.114 MiB | 0.0% → 100.0% | 0 B → 5.11 MiB |   0 → 2 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |              Size | Samples | Caller              | Location                                                   |
| -----: | -----------: | -----: | ----------------: | ------: | ------------------- | ---------------------------------------------------------- |
| -45.0% | -122.434 MiB | 100.0% | 272 MiB → 150 MiB |  7 → 11 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |        Delta |      % |              Size | Samples | Caller   | Location              |
| -----: | -----------: | -----: | ----------------: | ------: | -------- | --------------------- |
| -44.8% | -121.967 MiB | 100.0% | 272 MiB → 150 MiB |  13 → 7 | `grow()` | `java.util.ArrayList` |

##### `valueOf(double)` (`java.lang.Double`)

|  Change |       Delta |             % |                Size | Samples | Caller                                           | Location                                                     |
| ------: | ----------: | ------------: | ------------------: | ------: | ------------------------------------------------ | ------------------------------------------------------------ |
| removed | -63.801 MiB |  94.7% → 0.0% |      63.8 MiB → 0 B |   1 → 0 | `apply(double)`                                  | `java.util.stream.DoublePipeline$$Lambda.0x00000070010d47b0` |
| +550.9% |  +19.66 MiB | 5.3% → 100.0% | 3.57 MiB → 23.2 MiB | 10 → 33 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                  |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

|  Change |       Delta |             % |                Size | Samples | Caller                                          | Location            |
| ------: | ----------: | ------------: | ------------------: | ------: | ----------------------------------------------- | ------------------- |
|  -77.8% | -66.354 MiB | 94.4% → 40.3% | 85.3 MiB → 18.9 MiB |   7 → 8 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |
| +455.2% | +23.001 MiB |  5.6% → 59.7% | 5.05 MiB → 28.1 MiB |   3 → 4 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |       Delta |      % |              Size | Samples | Caller                     | Location                                                   |
| -----: | ----------: | -----: | ----------------: | ------: | -------------------------- | ---------------------------------------------------------- |
| -13.5% | -22.878 MiB | 100.0% | 170 MiB → 147 MiB |  4 → 12 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

|  Change |      Delta |             % |           Size | Samples | Caller                  | Location           |
| ------: | ---------: | ------------: | -------------: | ------: | ----------------------- | ------------------ |
| removed | -2.654 MiB | 100.0% → 0.0% | 2.65 MiB → 0 B |   5 → 0 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `iterator()` (`java.util.HashMap$EntrySet`)

| Change |       Delta |      % |                Size | Samples | Caller                        | Location            |
| -----: | ----------: | -----: | ------------------: | ------: | ----------------------------- | ------------------- |
| -31.4% | -777.14 KiB | 100.0% | 2.42 MiB → 1.66 MiB |   2 → 1 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `compress(char[], int, int)` (`java.lang.StringUTF16`)

|  Change |        Delta |             % |          Size | Samples | Caller                           | Location           |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------------------- | ------------------ |
| removed | -764.164 KiB | 100.0% → 0.0% | 764 KiB → 0 B |   1 → 0 | `<init>(char[], int, int, Void)` | `java.lang.String` |

##### `initTable()` (`java.util.concurrent.ConcurrentHashMap`)

| Change |        Delta |      % |                Size | Samples | Caller                            | Location                                 |
| -----: | -----------: | -----: | ------------------: | ------: | --------------------------------- | ---------------------------------------- |
|  -2.0% | -428.445 KiB | 100.0% | 21.3 MiB → 20.8 MiB |       1 | `putVal(Object, Object, boolean)` | `java.util.concurrent.ConcurrentHashMap` |

##### `addConstantUtf8Reference(int, String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|  Change |        Delta |             % |          Size | Samples | Caller                     | Location                                     |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------------- | -------------------------------------------- |
| removed | -388.984 KiB | 100.0% → 0.0% | 389 KiB → 0 B |   1 → 0 | `addConstantClass(String)` | `jdk.internal.org.objectweb.asm.SymbolTable` |

##### `allocateUninitializedArray(Class, int)` (`jdk.internal.misc.Unsafe`)

|  Change |        Delta |             % |          Size | Samples | Caller           | Location                       |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------- | ------------------------------ |
| removed | -387.585 KiB | 100.0% → 0.0% | 388 KiB → 0 B |   1 → 0 | `newArray(long)` | `java.lang.StringConcatHelper` |

##### `allocateUninitializedArray0(Class, int)` (`jdk.internal.misc.Unsafe`)

|  Change |        Delta |             % |          Size | Samples | Caller                                   | Location                   |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------------------- | -------------------------- |
| removed | -385.921 KiB | 100.0% → 0.0% | 386 KiB → 0 B |   1 → 0 | `allocateUninitializedArray(Class, int)` | `jdk.internal.misc.Unsafe` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|  Change |        Delta |             % |          Size | Samples | Caller                                          | Location                       |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------------------------------- | ------------------------------ |
| removed | -384.328 KiB | 100.0% → 0.0% | 384 KiB → 0 B |   1 → 0 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` (`java.lang.ClassLoader`)

|  Change |        Delta |             % |          Size | Samples | Caller                                                                                    | Location             |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------------------------------------------------------------------------- | -------------------- |
| removed | -382.382 KiB | 100.0% → 0.0% | 382 KiB → 0 B |   1 → 0 | `defineClass(ClassLoader, Class, String, byte[], ProtectionDomain, boolean, int, Object)` | `java.lang.System$2` |

##### `<init>(ClassReader, int)` (`jdk.internal.org.objectweb.asm.ClassWriter`)

|  Change |        Delta |             % |          Size | Samples | Caller        | Location                                     |
| ------: | -----------: | ------------: | ------------: | ------: | ------------- | -------------------------------------------- |
| removed | -379.609 KiB | 100.0% → 0.0% | 380 KiB → 0 B |   1 → 0 | `<init>(int)` | `jdk.internal.org.objectweb.asm.ClassWriter` |

##### `<clinit>()` (`sun.security.util.KnownOIDs`)

|  Change |        Delta |             % |          Size | Samples | Caller       | Location                                      |
| ------: | -----------: | ------------: | ------------: | ------: | ------------ | --------------------------------------------- |
| removed | -379.453 KiB | 100.0% → 0.0% | 379 KiB → 0 B |   1 → 0 | `<clinit>()` | `sun.security.util.SecurityProviderConstants` |

##### `<init>(MethodHandles$Lookup, MethodType, String, MethodType, MethodHandle, MethodType, boolean, Class[], MethodType[])` (`java.lang.invoke.InnerClassLambdaMetafactory`)

|  Change |        Delta |             % |          Size | Samples | Caller                                                               | Location                             |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------------------------------------------------------- | ------------------------------------ |
| removed | -379.414 KiB | 100.0% → 0.0% | 379 KiB → 0 B |   1 → 0 | `altMetafactory(MethodHandles$Lookup, String, MethodType, Object[])` | `java.lang.invoke.LambdaMetafactory` |

##### `readLine()` (`java.util.Properties$LineReader`)

|  Change |        Delta |             % |          Size | Samples | Caller                         | Location               |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------ | ---------------------- |
| removed | -377.648 KiB | 100.0% → 0.0% | 378 KiB → 0 B |   1 → 0 | `load0(Properties$LineReader)` | `java.util.Properties` |

##### `fillInStackTrace(int)` (`java.lang.Throwable`)

| Change |        Delta |      % |              Size | Samples | Caller               | Location              |
| -----: | -----------: | -----: | ----------------: | ------: | -------------------- | --------------------- |
| -40.6% | -264.679 KiB | 100.0% | 652 KiB → 388 KiB |       1 | `fillInStackTrace()` | `java.lang.Throwable` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

| Change |        Delta |      % |               Size | Samples | Caller                          | Location           |
| -----: | -----------: | -----: | -----------------: | ------: | ------------------------------- | ------------------ |
| -20.5% | -226.195 KiB | 100.0% | 1.08 MiB → 876 KiB |       3 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|   Change |        Delta |             % |                Size |       Samples | Function                                                                                                               | Location                                                   |
| -------: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|    +4.2% |   +1.029 GiB | 64.8% → 67.4% | 24.4 GiB → 25.4 GiB | 1,206 → 1,428 | `awaitDone(int, long)`                                                                                                 | `java.util.concurrent.ForkJoinTask`                        |
|    +4.2% |   +1.029 GiB | 64.8% → 67.4% | 24.4 GiB → 25.4 GiB | 1,206 → 1,428 | `join()`                                                                                                               | `java.util.concurrent.ForkJoinTask`                        |
|    +3.8% | +932.948 MiB | 63.8% → 66.1% |   24 GiB → 24.9 GiB | 1,188 → 1,408 | `tryRemoveAndExec(ForkJoinTask, boolean)`                                                                              | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|    +7.9% | +435.315 MiB | 14.3% → 15.4% | 5.38 GiB → 5.81 GiB |     285 → 347 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    +8.8% | +350.995 MiB | 10.3% → 11.2% | 3.88 GiB → 4.22 GiB |     205 → 250 | `grow()`                                                                                                               | `java.util.ArrayList`                                      |
|    +8.8% | +350.995 MiB | 10.3% → 11.2% | 3.88 GiB → 4.22 GiB |     205 → 250 | `add(Object, Object[], int)`                                                                                           | `java.util.ArrayList`                                      |
|    +8.8% | +350.995 MiB | 10.3% → 11.2% | 3.88 GiB → 4.22 GiB |     205 → 250 | `add(Object)`                                                                                                          | `java.util.ArrayList`                                      |
|    +2.0% | +347.293 MiB | 45.7% → 46.5% | 17.2 GiB → 17.5 GiB |     841 → 932 | `toArray()`                                                                                                            | `java.util.ArrayList`                                      |
|    +7.6% | +323.285 MiB | 11.0% → 11.9% | 4.16 GiB → 4.47 GiB |     218 → 273 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    +3.3% | +272.201 MiB | 21.4% → 22.1% | 8.05 GiB → 8.32 GiB |     372 → 446 | `<init>(Collection)`                                                                                                   | `java.util.ArrayList`                                      |
|      new | +233.126 MiB |   0.0% → 0.6% |       0 B → 233 MiB |        0 → 11 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    +0.4% | +172.167 MiB | 99.4% → 99.7% | 37.4 GiB → 37.6 GiB | 1,819 → 2,082 | `doExec()`                                                                                                             | `java.util.concurrent.ForkJoinTask`                        |
| +1563.6% |  +114.88 MiB |  <0.1% → 0.3% |  7.35 MiB → 122 MiB |         2 → 8 | `add(double[], double[])`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +1563.6% |  +114.88 MiB |  <0.1% → 0.3% |  7.35 MiB → 122 MiB |         2 → 8 | `combineResults(double[], double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +1563.6% |  +114.88 MiB |  <0.1% → 0.3% |  7.35 MiB → 122 MiB |         2 → 8 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|    +8.9% | +112.029 MiB |   3.3% → 3.5% | 1.23 GiB → 1.34 GiB |       67 → 74 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +737.7% |   +95.64 MiB |  <0.1% → 0.3% |    13 MiB → 109 MiB |        6 → 13 | `computeIfAbsent(Object, Function)`                                                                                    | `java.util.HashMap`                                        |
|      new |  +93.104 MiB |   0.0% → 0.2% |      0 B → 93.1 MiB |         0 → 1 | `<init>(JavaKMeans, Map)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|      new |  +92.658 MiB |   0.0% → 0.2% |      0 B → 92.7 MiB |       0 → 128 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                |
|   +48.5% |  +80.023 MiB |   0.4% → 0.6% |   165 MiB → 245 MiB |        5 → 11 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### Standard library

|  Change |        Delta |             % |                Size |       Samples | Function                                          | Location                                       |
| ------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------- | ---------------------------------------------- |
|   +4.2% |   +1.029 GiB | 64.8% → 67.4% | 24.4 GiB → 25.4 GiB | 1,206 → 1,428 | `awaitDone(int, long)`                            | `java.util.concurrent.ForkJoinTask`            |
|   +4.2% |   +1.029 GiB | 64.8% → 67.4% | 24.4 GiB → 25.4 GiB | 1,206 → 1,428 | `join()`                                          | `java.util.concurrent.ForkJoinTask`            |
|   +3.8% | +932.948 MiB | 63.8% → 66.1% |   24 GiB → 24.9 GiB | 1,188 → 1,408 | `tryRemoveAndExec(ForkJoinTask, boolean)`         | `java.util.concurrent.ForkJoinPool$WorkQueue`  |
|   +8.8% | +350.995 MiB | 10.3% → 11.2% | 3.88 GiB → 4.22 GiB |     205 → 250 | `grow()`                                          | `java.util.ArrayList`                          |
|   +8.8% | +350.995 MiB | 10.3% → 11.2% | 3.88 GiB → 4.22 GiB |     205 → 250 | `add(Object, Object[], int)`                      | `java.util.ArrayList`                          |
|   +8.8% | +350.995 MiB | 10.3% → 11.2% | 3.88 GiB → 4.22 GiB |     205 → 250 | `add(Object)`                                     | `java.util.ArrayList`                          |
|   +2.0% | +347.293 MiB | 45.7% → 46.5% | 17.2 GiB → 17.5 GiB |     841 → 932 | `toArray()`                                       | `java.util.ArrayList`                          |
|   +3.3% | +272.201 MiB | 21.4% → 22.1% | 8.05 GiB → 8.32 GiB |     372 → 446 | `<init>(Collection)`                              | `java.util.ArrayList`                          |
|   +0.4% | +172.167 MiB | 99.4% → 99.7% | 37.4 GiB → 37.6 GiB | 1,819 → 2,082 | `doExec()`                                        | `java.util.concurrent.ForkJoinTask`            |
| +737.7% |   +95.64 MiB |  <0.1% → 0.3% |    13 MiB → 109 MiB |        6 → 13 | `computeIfAbsent(Object, Function)`               | `java.util.HashMap`                            |
|   +0.2% |  +79.062 MiB |         99.4% | 37.4 GiB → 37.5 GiB | 1,819 → 2,081 | `exec()`                                          | `java.util.concurrent.RecursiveTask`           |
|   +0.2% |  +73.976 MiB |         92.3% | 34.7 GiB → 34.8 GiB | 1,693 → 1,909 | `copyOf(Object[], int)`                           | `java.util.Arrays`                             |
| +280.7% |  +67.052 MiB |   0.1% → 0.2% | 23.9 MiB → 90.9 MiB |      66 → 124 | `evaluateSequential(PipelineHelper, Spliterator)` | `java.util.stream.ReduceOps$ReduceOp`          |
| +280.7% |  +67.052 MiB |   0.1% → 0.2% | 23.9 MiB → 90.9 MiB |      66 → 124 | `evaluate(TerminalOp)`                            | `java.util.stream.AbstractPipeline`            |
| +280.7% |  +67.052 MiB |   0.1% → 0.2% | 23.9 MiB → 90.9 MiB |      66 → 124 | `collect(Collector)`                              | `java.util.stream.ReferencePipeline`           |
| +251.0% |  +59.018 MiB |   0.1% → 0.2% | 23.5 MiB → 82.5 MiB |      65 → 102 | `accept(int)`                                     | `java.util.stream.IntPipeline$1$1`             |
| +251.0% |  +59.018 MiB |   0.1% → 0.2% | 23.5 MiB → 82.5 MiB |      65 → 102 | `forEachRemaining(IntConsumer)`                   | `java.util.stream.Streams$RangeIntSpliterator` |
| +251.0% |  +59.018 MiB |   0.1% → 0.2% | 23.5 MiB → 82.5 MiB |      65 → 102 | `forEachRemaining(Consumer)`                      | `java.util.Spliterator$OfInt`                  |
|     new |  +41.812 MiB |   0.0% → 0.1% |      0 B → 41.8 MiB |         0 → 3 | `entrySet()`                                      | `java.util.HashMap`                            |
| +173.3% |   +18.99 MiB |  <0.1% → 0.1% |   11 MiB → 29.9 MiB |       30 → 23 | `range(int, int)`                                 | `java.util.stream.IntStream`                   |

##### Ours

|   Change |        Delta |             % |                Size |       Samples | Function                                                                                                               | Location                                                                              |
| -------: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|    +7.9% | +435.315 MiB | 14.3% → 15.4% | 5.38 GiB → 5.81 GiB |     285 → 347 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|    +7.6% | +323.285 MiB | 11.0% → 11.9% | 4.16 GiB → 4.47 GiB |     218 → 273 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|      new | +233.126 MiB |   0.0% → 0.6% |       0 B → 233 MiB |        0 → 11 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| +1563.6% |  +114.88 MiB |  <0.1% → 0.3% |  7.35 MiB → 122 MiB |         2 → 8 | `add(double[], double[])`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| +1563.6% |  +114.88 MiB |  <0.1% → 0.3% |  7.35 MiB → 122 MiB |         2 → 8 | `combineResults(double[], double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| +1563.6% |  +114.88 MiB |  <0.1% → 0.3% |  7.35 MiB → 122 MiB |         2 → 8 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|    +8.9% | +112.029 MiB |   3.3% → 3.5% | 1.23 GiB → 1.34 GiB |       67 → 74 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|      new |  +93.104 MiB |   0.0% → 0.2% |      0 B → 93.1 MiB |         0 → 1 | `<init>(JavaKMeans, Map)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|      new |  +92.658 MiB |   0.0% → 0.2% |      0 B → 92.7 MiB |       0 → 128 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                           |
|   +48.5% |  +80.023 MiB |   0.4% → 0.6% |   165 MiB → 245 MiB |        5 → 11 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|    +0.2% |  +79.062 MiB |         99.4% | 37.4 GiB → 37.5 GiB | 1,819 → 2,081 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
|  +287.4% |  +67.577 MiB |   0.1% → 0.2% | 23.5 MiB → 91.1 MiB |      65 → 124 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | `org.renaissance.jdk.concurrent.FjKmeans`                                             |
|  +853.4% |  +67.523 MiB |  <0.1% → 0.2% | 7.91 MiB → 75.4 MiB |         3 → 7 | `lambda$collectClusters$0(Double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +853.4% |  +67.523 MiB |  <0.1% → 0.2% | 7.91 MiB → 75.4 MiB |         3 → 7 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011fece0` |
|  +251.0% |  +59.018 MiB |   0.1% → 0.2% | 23.5 MiB → 82.5 MiB |      65 → 102 | `generateData(int, int, int)`                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  +247.1% |  +58.103 MiB |   0.1% → 0.2% | 23.5 MiB → 81.6 MiB |      65 → 101 | `lambda$generateData$5(int, int, Random[], int)`                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  +247.1% |  +58.103 MiB |   0.1% → 0.2% | 23.5 MiB → 81.6 MiB |      65 → 101 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fd4f0`                |
|      new |  +23.279 MiB |   0.0% → 0.1% |      0 B → 23.3 MiB |         0 → 1 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|  +550.9% |   +19.66 MiB |  <0.1% → 0.1% | 3.57 MiB → 23.2 MiB |       10 → 33 | `lambda$generateData$3(int, int, Random[], int)`                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  +550.9% |   +19.66 MiB |  <0.1% → 0.1% | 3.57 MiB → 23.2 MiB |       10 → 33 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fd728`                |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

| Change |        Delta |             % |                Size |       Samples | Function                                                  | Location                                                               |
| -----: | -----------: | ------------: | ------------------: | ------------: | --------------------------------------------------------- | ---------------------------------------------------------------------- |
| -12.9% | -995.579 MiB | 20.0% → 17.4% | 7.53 GiB → 6.56 GiB |     217 → 218 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                                    |
|  -2.5% | -798.494 MiB | 84.5% → 82.2% |   31.8 GiB → 31 GiB | 1,526 → 1,695 | `merge(Map, Map)`                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -2.5% | -798.494 MiB | 84.5% → 82.2% |   31.8 GiB → 31 GiB | 1,526 → 1,695 | `combineResults(Map, Map)`                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -2.5% | -798.494 MiB | 84.5% → 82.2% |   31.8 GiB → 31 GiB | 1,526 → 1,695 | `combineResults(Object, Object)`                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -2.8% | -671.187 MiB | 61.3% → 59.4% | 23.1 GiB → 22.4 GiB | 1,129 → 1,220 | `addAll(Collection)`                                      | `java.util.ArrayList`                                                  |
|  -1.8% |  -662.06 MiB | 93.2% → 91.3% | 35.1 GiB → 34.4 GiB | 1,723 → 1,950 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                                    |
|  -1.8% |  -662.06 MiB | 93.2% → 91.3% | 35.1 GiB → 34.4 GiB | 1,723 → 1,950 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`                            |
|  -1.9% | -612.907 MiB | 83.5% → 81.7% | 31.4 GiB → 30.8 GiB | 1,511 → 1,672 | `lambda$merge$6(List, List)`                              | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -1.9% | -612.907 MiB | 83.5% → 81.7% | 31.4 GiB → 30.8 GiB | 1,511 → 1,672 | `apply(Object, Object)`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ff3c0` |
|  -1.9% | -612.907 MiB | 83.5% → 81.7% | 31.4 GiB → 30.8 GiB | 1,511 → 1,672 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                                                    |
|  -1.9% | -612.907 MiB | 83.5% → 81.7% | 31.4 GiB → 30.8 GiB | 1,511 → 1,672 | `lambda$merge$7(Map, Object, List)`                       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -1.9% | -612.907 MiB | 83.5% → 81.7% | 31.4 GiB → 30.8 GiB | 1,511 → 1,672 | `accept(Object, Object)`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ff178` |
|  -1.9% | -612.907 MiB | 83.5% → 81.7% | 31.4 GiB → 30.8 GiB | 1,511 → 1,672 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                                                    |
|  -6.2% | -444.166 MiB | 18.7% → 17.5% | 7.04 GiB → 6.61 GiB |     204 → 209 | `lambda$run$0(int, List, int)`                            | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -6.2% | -444.166 MiB | 18.7% → 17.5% | 7.04 GiB → 6.61 GiB |     204 → 209 | `call()`                                                  | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fdf70` |
|  -6.2% | -444.166 MiB | 18.7% → 17.5% | 7.04 GiB → 6.61 GiB |     204 → 209 | `exec()`                                                  | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                    |
|  -1.2% | -443.639 MiB | 93.8% → 92.4% | 35.3 GiB → 34.8 GiB | 1,726 → 1,956 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                                    |
|  -2.2% | -395.284 MiB | 47.3% → 46.2% | 17.8 GiB → 17.4 GiB |     865 → 984 | `grow(int)`                                               | `java.util.ArrayList`                                                  |
|  -5.4% | -246.434 MiB | 11.9% → 11.2% | 4.46 GiB → 4.22 GiB |     216 → 252 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                                    |
| -91.5% | -203.381 MiB |  0.6% → <0.1% |  222 MiB → 18.9 MiB |         9 → 8 | `putVal(int, Object, Object, boolean, boolean)`           | `java.util.HashMap`                                                    |

##### Standard library

| Change |        Delta |             % |                Size |       Samples | Function                                                  | Location                                            |
| -----: | -----------: | ------------: | ------------------: | ------------: | --------------------------------------------------------- | --------------------------------------------------- |
| -12.9% | -995.579 MiB | 20.0% → 17.4% | 7.53 GiB → 6.56 GiB |     217 → 218 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                 |
|  -2.8% | -671.187 MiB | 61.3% → 59.4% | 23.1 GiB → 22.4 GiB | 1,129 → 1,220 | `addAll(Collection)`                                      | `java.util.ArrayList`                               |
|  -1.8% |  -662.06 MiB | 93.2% → 91.3% | 35.1 GiB → 34.4 GiB | 1,723 → 1,950 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                 |
|  -1.8% |  -662.06 MiB | 93.2% → 91.3% | 35.1 GiB → 34.4 GiB | 1,723 → 1,950 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`         |
|  -1.9% | -612.907 MiB | 83.5% → 81.7% | 31.4 GiB → 30.8 GiB | 1,511 → 1,672 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                                 |
|  -1.9% | -612.907 MiB | 83.5% → 81.7% | 31.4 GiB → 30.8 GiB | 1,511 → 1,672 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                                 |
|  -6.2% | -444.166 MiB | 18.7% → 17.5% | 7.04 GiB → 6.61 GiB |     204 → 209 | `exec()`                                                  | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  -1.2% | -443.639 MiB | 93.8% → 92.4% | 35.3 GiB → 34.8 GiB | 1,726 → 1,956 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                 |
|  -2.2% | -395.284 MiB | 47.3% → 46.2% | 17.8 GiB → 17.4 GiB |     865 → 984 | `grow(int)`                                               | `java.util.ArrayList`                               |
|  -5.4% | -246.434 MiB | 11.9% → 11.2% | 4.46 GiB → 4.22 GiB |     216 → 252 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                 |
| -91.5% | -203.381 MiB |  0.6% → <0.1% |  222 MiB → 18.9 MiB |         9 → 8 | `putVal(int, Object, Object, boolean, boolean)`           | `java.util.HashMap`                                 |
|  -0.5% | -196.227 MiB | 93.9% → 93.2% | 35.3 GiB → 35.1 GiB | 1,741 → 1,976 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| -72.4% | -162.709 MiB |   0.6% → 0.2% |    225 MiB → 62 MiB |            11 | `putMapEntries(Map, boolean)`                             | `java.util.HashMap`                                 |
| -72.4% | -162.709 MiB |   0.6% → 0.2% |    225 MiB → 62 MiB |            11 | `<init>(Map)`                                             | `java.util.HashMap`                                 |
| -98.6% | -158.636 MiB |  0.4% → <0.1% |  161 MiB → 2.26 MiB |         4 → 6 | `read(InputStream, String)`                               | `java.util.jar.Manifest`                            |
| -98.6% | -158.636 MiB |  0.4% → <0.1% |  161 MiB → 2.26 MiB |         4 → 6 | `<init>(JarVerifier, InputStream, String)`                | `java.util.jar.Manifest`                            |
| -98.6% | -158.636 MiB |  0.4% → <0.1% |  161 MiB → 2.26 MiB |         4 → 6 | `<init>(InputStream, String)`                             | `java.util.jar.Manifest`                            |
| -98.6% | -158.636 MiB |  0.4% → <0.1% |  161 MiB → 2.26 MiB |         4 → 6 | `getManifestFromReference()`                              | `java.util.jar.JarFile`                             |
| -98.6% | -158.636 MiB |  0.4% → <0.1% |  161 MiB → 2.26 MiB |         4 → 6 | `getManifest()`                                           | `java.util.jar.JarFile`                             |
| -98.6% | -158.636 MiB |  0.4% → <0.1% |  161 MiB → 2.26 MiB |         4 → 6 | `getManifest()`                                           | `jdk.internal.loader.URLClassPath$JarLoader$2`      |

##### Ours

|  Change |        Delta |             % |                Size |       Samples | Function                                                                                                               | Location                                                               |
| ------: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|   -2.5% | -798.494 MiB | 84.5% → 82.2% |   31.8 GiB → 31 GiB | 1,526 → 1,695 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -2.5% | -798.494 MiB | 84.5% → 82.2% |   31.8 GiB → 31 GiB | 1,526 → 1,695 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -2.5% | -798.494 MiB | 84.5% → 82.2% |   31.8 GiB → 31 GiB | 1,526 → 1,695 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -1.9% | -612.907 MiB | 83.5% → 81.7% | 31.4 GiB → 30.8 GiB | 1,511 → 1,672 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -1.9% | -612.907 MiB | 83.5% → 81.7% | 31.4 GiB → 30.8 GiB | 1,511 → 1,672 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ff3c0` |
|   -1.9% | -612.907 MiB | 83.5% → 81.7% | 31.4 GiB → 30.8 GiB | 1,511 → 1,672 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -1.9% | -612.907 MiB | 83.5% → 81.7% | 31.4 GiB → 30.8 GiB | 1,511 → 1,672 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ff178` |
|   -6.2% | -444.166 MiB | 18.7% → 17.5% | 7.04 GiB → 6.61 GiB |     204 → 209 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -6.2% | -444.166 MiB | 18.7% → 17.5% | 7.04 GiB → 6.61 GiB |     204 → 209 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fdf70` |
| removed |  -189.85 MiB |   0.5% → 0.0% |       190 MiB → 0 B |        73 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
| removed | -165.942 MiB |   0.4% → 0.0% |       166 MiB → 0 B |         6 → 0 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                              |
| removed | -165.942 MiB |   0.4% → 0.0% |       166 MiB → 0 B |         6 → 0 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |
|  -52.1% |  -98.741 MiB |   0.5% → 0.2% |  189 MiB → 90.7 MiB |      71 → 123 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|  -47.4% |  -98.461 MiB |   0.5% → 0.3% |   208 MiB → 109 MiB |     121 → 170 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
|  -47.4% |  -98.461 MiB |   0.5% → 0.3% |   208 MiB → 109 MiB |     121 → 170 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
|  -47.2% |  -97.715 MiB |   0.5% → 0.3% |   207 MiB → 109 MiB |     119 → 170 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
|  -47.7% |  -97.378 MiB |   0.5% → 0.3% |   204 MiB → 107 MiB |     111 → 164 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -51.2% |  -97.191 MiB |   0.5% → 0.2% |  190 MiB → 92.7 MiB |      73 → 128 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700117c3b8` |
|  -46.9% |  -96.898 MiB |   0.5% → 0.3% |   207 MiB → 110 MiB |     118 → 171 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|  -51.0% |  -96.813 MiB |   0.5% → 0.2% |    190 MiB → 93 MiB |      73 → 129 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |             % |                Size |       Samples | Callee                                                    | Location                                      |
| -----: | -----------: | ------------: | ------------------: | ------------: | --------------------------------------------------------- | --------------------------------------------- |
|  +3.8% | +932.948 MiB | 98.4% → 98.0% |   24 GiB → 24.9 GiB | 1,188 → 1,408 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -5.4% | -246.434 MiB | 18.3% → 16.6% | 4.46 GiB → 4.22 GiB |     216 → 252 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change |      Delta |      % |                Size |       Samples | Callee                 | Location                            |
| -----: | ---------: | -----: | ------------------: | ------------: | ---------------------- | ----------------------------------- |
|  +4.2% | +1.029 GiB | 100.0% | 24.4 GiB → 25.4 GiB | 1,206 → 1,428 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |        Delta |      % |              Size |       Samples | Callee     | Location                            |
| -----: | -----------: | -----: | ----------------: | ------------: | ---------- | ----------------------------------- |
|  +3.8% | +932.948 MiB | 100.0% | 24 GiB → 24.9 GiB | 1,188 → 1,408 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |             % |                Size |   Samples | Callee                   | Location                                                   |
| -----: | -----------: | ------------: | ------------------: | --------: | ------------------------ | ---------------------------------------------------------- |
|  +7.9% | +435.315 MiB |        100.0% | 5.38 GiB → 5.81 GiB | 285 → 347 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +7.6% | +323.285 MiB | 77.2% → 77.0% | 4.16 GiB → 4.47 GiB | 218 → 273 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +8.9% | +112.029 MiB | 22.8% → 23.0% | 1.23 GiB → 1.34 GiB |   67 → 74 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `grow()` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |   Samples | Callee      | Location              |
| -----: | -----------: | -----: | ------------------: | --------: | ----------- | --------------------- |
|  +8.8% | +350.995 MiB | 100.0% | 3.88 GiB → 4.22 GiB | 205 → 250 | `grow(int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |   Samples | Callee   | Location              |
| -----: | -----------: | -----: | ------------------: | --------: | -------- | --------------------- |
|  +8.8% | +350.995 MiB | 100.0% | 3.88 GiB → 4.22 GiB | 205 → 250 | `grow()` | `java.util.ArrayList` |

##### `add(Object)` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |   Samples | Callee                       | Location              |
| -----: | -----------: | -----: | ------------------: | --------: | ---------------------------- | --------------------- |
|  +8.8% | +350.995 MiB | 100.0% | 3.88 GiB → 4.22 GiB | 205 → 250 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `toArray()` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |   Samples | Callee                  | Location           |
| -----: | -----------: | -----: | ------------------: | --------: | ----------------------- | ------------------ |
|  +2.0% | +347.293 MiB | 100.0% | 17.2 GiB → 17.5 GiB | 841 → 932 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change |        Delta |             % |                Size |   Samples | Callee                              | Location              |
| ------: | -----------: | ------------: | ------------------: | --------: | ----------------------------------- | --------------------- |
|   +8.8% | +350.079 MiB | 93.3% → 94.4% | 3.88 GiB → 4.22 GiB | 205 → 249 | `add(Object)`                       | `java.util.ArrayList` |
| +737.7% |   +95.64 MiB |   0.3% → 2.4% |    13 MiB → 109 MiB |    6 → 13 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`   |

##### `<init>(Collection)` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |   Samples | Callee      | Location              |
| -----: | -----------: | -----: | ------------------: | --------: | ----------- | --------------------- |
|  +3.3% | +272.201 MiB | 100.0% | 8.05 GiB → 8.32 GiB | 372 → 446 | `toArray()` | `java.util.ArrayList` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |              % |                Size |       Samples | Callee   | Location                                            |
| -----: | -----------: | -------------: | ------------------: | ------------: | -------- | --------------------------------------------------- |
|  -6.1% | -442.459 MiB |  18.8% → 17.6% |  7.04 GiB → 6.6 GiB |     203 → 208 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  +0.2% |  +79.062 MiB | 100.0% → 99.8% | 37.4 GiB → 37.5 GiB | 1,819 → 2,081 | `exec()` | `java.util.concurrent.RecursiveTask`                |

##### `combineResults(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|   Change |       Delta |      % |               Size | Samples | Callee                    | Location                                                  |
| -------: | ----------: | -----: | -----------------: | ------: | ------------------------- | --------------------------------------------------------- |
| +1563.6% | +114.88 MiB | 100.0% | 7.35 MiB → 122 MiB |   2 → 8 | `add(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|   Change |       Delta |      % |               Size | Samples | Callee                               | Location                                                  |
| -------: | ----------: | -----: | -----------------: | ------: | ------------------------------------ | --------------------------------------------------------- |
| +1563.6% | +114.88 MiB | 100.0% | 7.35 MiB → 122 MiB |   2 → 8 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|  Change |       Delta |             % |                Size | Samples | Callee                                       | Location                                                                              |
| ------: | ----------: | ------------: | ------------------: | ------: | -------------------------------------------- | ------------------------------------------------------------------------------------- |
| +853.4% | +67.523 MiB | 61.0% → 69.5% | 7.91 MiB → 75.4 MiB |   3 → 7 | `apply(Object)`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011fece0` |
| +455.2% | +23.001 MiB | 39.0% → 25.8% | 5.05 MiB → 28.1 MiB |   3 → 4 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                                                                   |
|     new |  +5.114 MiB |   0.0% → 4.7% |      0 B → 5.11 MiB |   0 → 2 | `resize()`                                   | `java.util.HashMap`                                                                   |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |       Delta |            % |           Size | Samples | Callee                                                                                       | Location                                  |
| -----: | ----------: | -----------: | -------------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
|    new | +90.715 MiB | 0.0% → 97.9% | 0 B → 90.7 MiB | 0 → 123 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
|    new |  +1.942 MiB |  0.0% → 2.1% | 0 B → 1.94 MiB |   0 → 5 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change |       Delta |      % |                Size |       Samples | Callee      | Location                                               |
| -----: | ----------: | -----: | ------------------: | ------------: | ----------- | ------------------------------------------------------ |
|  +0.2% | +79.062 MiB | 100.0% | 37.4 GiB → 37.5 GiB | 1,819 → 2,081 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|  Change |      Delta |            % |           Size | Samples | Callee                         | Location           |
| ------: | ---------: | -----------: | -------------: | ------: | ------------------------------ | ------------------ |
| removed | -2.654 MiB | <0.1% → 0.0% | 2.65 MiB → 0 B |   5 → 0 | `copyOf(Object[], int, Class)` | `java.util.Arrays` |

##### `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`)

|  Change |       Delta |      % |                Size |  Samples | Callee                               | Location                            |
| ------: | ----------: | -----: | ------------------: | -------: | ------------------------------------ | ----------------------------------- |
| +280.7% | +67.052 MiB | 100.0% | 23.9 MiB → 90.9 MiB | 66 → 124 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`)

|  Change |       Delta |      % |                Size |  Samples | Callee                                            | Location                              |
| ------: | ----------: | -----: | ------------------: | -------: | ------------------------------------------------- | ------------------------------------- |
| +280.7% | +67.052 MiB | 100.0% | 23.9 MiB → 90.9 MiB | 66 → 124 | `evaluateSequential(PipelineHelper, Spliterator)` | `java.util.stream.ReduceOps$ReduceOp` |

##### `collect(Collector)` (`java.util.stream.ReferencePipeline`)

|  Change |       Delta |      % |                Size |  Samples | Callee                 | Location                            |
| ------: | ----------: | -----: | ------------------: | -------: | ---------------------- | ----------------------------------- |
| +280.7% | +67.052 MiB | 100.0% | 23.9 MiB → 90.9 MiB | 66 → 124 | `evaluate(TerminalOp)` | `java.util.stream.AbstractPipeline` |

##### `accept(int)` (`java.util.stream.IntPipeline$1$1`)

|  Change |        Delta |              % |                Size |  Samples | Callee           | Location                                                               |
| ------: | -----------: | -------------: | ------------------: | -------: | ---------------- | ---------------------------------------------------------------------- |
| +247.1% |  +58.103 MiB | 100.0% → 98.9% | 23.5 MiB → 81.6 MiB | 65 → 101 | `apply(int)`     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fd4f0` |
| +550.9% |   +19.66 MiB |  15.2% → 28.1% | 3.57 MiB → 23.2 MiB |  10 → 33 | `apply(int)`     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fd728` |
|     new | +937.898 KiB |    0.0% → 1.1% |       0 B → 938 KiB |    0 → 1 | `accept(Object)` | `java.util.stream.ReduceOps$3ReducingSink`                             |

##### `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`)

|  Change |       Delta |      % |                Size |  Samples | Callee        | Location                           |
| ------: | ----------: | -----: | ------------------: | -------: | ------------- | ---------------------------------- |
| +251.0% | +59.018 MiB | 100.0% | 23.5 MiB → 82.5 MiB | 65 → 102 | `accept(int)` | `java.util.stream.IntPipeline$1$1` |

##### `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`)

|  Change |       Delta |      % |                Size |  Samples | Callee                          | Location                                       |
| ------: | ----------: | -----: | ------------------: | -------: | ------------------------------- | ---------------------------------------------- |
| +251.0% | +59.018 MiB | 100.0% | 23.5 MiB → 82.5 MiB | 65 → 102 | `forEachRemaining(IntConsumer)` | `java.util.stream.Streams$RangeIntSpliterator` |

##### `range(int, int)` (`java.util.stream.IntStream`)

|  Change |       Delta |             % |              Size | Samples | Callee                                  | Location                         |
| ------: | ----------: | ------------: | ----------------: | ------: | --------------------------------------- | -------------------------------- |
| +183.8% | +18.772 MiB | 93.2% → 96.8% | 10.2 MiB → 29 MiB | 28 → 20 | `intStream(Spliterator$OfInt, boolean)` | `java.util.stream.StreamSupport` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|   Change |        Delta |             % |                Size |       Samples | Callee                           | Location                                                   |
| -------: | -----------: | ------------: | ------------------: | ------------: | -------------------------------- | ---------------------------------------------------------- |
|    +4.2% |   +1.029 GiB | 65.2% → 67.8% | 24.4 GiB → 25.4 GiB | 1,206 → 1,428 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
|    -2.5% | -798.494 MiB | 85.0% → 82.7% |   31.8 GiB → 31 GiB | 1,526 → 1,695 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    +7.9% | +435.315 MiB | 14.4% → 15.5% | 5.38 GiB → 5.81 GiB |     285 → 347 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|      new | +233.126 MiB |   0.0% → 0.6% |       0 B → 233 MiB |        0 → 11 | `createSubtask(int, int)`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +1563.6% |  +114.88 MiB |  <0.1% → 0.3% |  7.35 MiB → 122 MiB |         2 → 8 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change |        Delta |              % |                Size |  Samples | Callee                        | Location                                                           |
| ------: | -----------: | -------------: | ------------------: | -------: | ----------------------------- | ------------------------------------------------------------------ |
| +251.0% |  +59.018 MiB | 100.0% → 90.6% | 23.5 MiB → 82.5 MiB | 65 → 102 | `generateData(int, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                        |
|     new |   +7.644 MiB |    0.0% → 8.4% |      0 B → 7.64 MiB |   0 → 20 | `toCsvRows(Function)`         | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |
|     new |  +515.25 KiB |    0.0% → 0.6% |       0 B → 515 KiB |    0 → 1 | `toInteger()`                 | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |
|     new | +420.523 KiB |    0.0% → 0.5% |       0 B → 421 KiB |    0 → 1 | `asScala()`                   | `scala.collection.convert.AsScalaExtensions$ListHasAsScala`        |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011fece0`)

|  Change |       Delta |      % |                Size | Samples | Callee                               | Location                                                   |
| ------: | ----------: | -----: | ------------------: | ------: | ------------------------------------ | ---------------------------------------------------------- |
| +853.4% | +67.523 MiB | 100.0% | 7.91 MiB → 75.4 MiB |   3 → 7 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |       Delta |      % |                Size |  Samples | Callee               | Location                             |
| ------: | ----------: | -----: | ------------------: | -------: | -------------------- | ------------------------------------ |
| +251.0% | +59.018 MiB | 100.0% | 23.5 MiB → 82.5 MiB | 65 → 102 | `collect(Collector)` | `java.util.stream.ReferencePipeline` |

##### `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |        Delta |             % |                Size | Samples | Callee                                         | Location                                            |
| ------: | -----------: | ------------: | ------------------: | ------: | ---------------------------------------------- | --------------------------------------------------- |
| +554.9% |  +31.655 MiB | 24.3% → 45.8% | 5.71 MiB → 37.4 MiB | 16 → 55 | `toArray(IntFunction)`                         | `java.util.stream.ReferencePipeline`                |
| +173.3% |   +18.99 MiB | 46.6% → 36.7% |   11 MiB → 29.9 MiB | 30 → 23 | `range(int, int)`                              | `java.util.stream.IntStream`                        |
|  +97.0% |   +6.548 MiB | 28.7% → 16.3% | 6.75 MiB → 13.3 MiB | 18 → 21 | `mapToObj(IntFunction)`                        | `java.util.stream.IntPipeline`                      |
| +889.4% | +930.609 KiB |   0.4% → 1.2% |  105 KiB → 1.01 MiB |   1 → 2 | `linkToTargetMethod(int, int, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001200800` |

##### `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fd4f0`)

|  Change |       Delta |      % |                Size |  Samples | Callee                                           | Location                                    |
| ------: | ----------: | -----: | ------------------: | -------: | ------------------------------------------------ | ------------------------------------------- |
| +247.1% | +58.103 MiB | 100.0% | 23.5 MiB → 81.6 MiB | 65 → 101 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |      Delta |      % |                Size | Samples | Callee            | Location           |
| ------: | ---------: | -----: | ------------------: | ------: | ----------------- | ------------------ |
| +550.9% | +19.66 MiB | 100.0% | 3.57 MiB → 23.2 MiB | 10 → 33 | `valueOf(double)` | `java.lang.Double` |

##### `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fd728`)

|  Change |      Delta |      % |                Size | Samples | Callee                                           | Location                                    |
| ------: | ---------: | -----: | ------------------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| +550.9% | +19.66 MiB | 100.0% | 3.57 MiB → 23.2 MiB | 10 → 33 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |      % |                Size |   Samples | Callee     | Location                            |
| -----: | -----------: | -----: | ------------------: | --------: | ---------- | ----------------------------------- |
| -12.9% | -995.579 MiB | 100.0% | 7.53 GiB → 6.56 GiB | 217 → 218 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |             % |                Size |       Samples | Callee                | Location            |
| -----: | -----------: | ------------: | ------------------: | ------------: | --------------------- | ------------------- |
|  -1.9% | -612.907 MiB | 98.8% → 99.3% | 31.4 GiB → 30.8 GiB | 1,511 → 1,672 | `forEach(BiConsumer)` | `java.util.HashMap` |
| -72.4% | -162.709 MiB |   0.7% → 0.2% |    225 MiB → 62 MiB |            11 | `<init>(Map)`         | `java.util.HashMap` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |              Size |       Samples | Callee            | Location                                    |
| -----: | -----------: | -----: | ----------------: | ------------: | ----------------- | ------------------------------------------- |
|  -2.5% | -798.494 MiB | 100.0% | 31.8 GiB → 31 GiB | 1,526 → 1,695 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |              Size |       Samples | Callee                     | Location                                                   |
| -----: | -----------: | -----: | ----------------: | ------------: | -------------------------- | ---------------------------------------------------------- |
|  -2.5% | -798.494 MiB | 100.0% | 31.8 GiB → 31 GiB | 1,526 → 1,695 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `addAll(Collection)` (`java.util.ArrayList`)

| Change |       Delta |             % |                Size |   Samples | Callee      | Location              |
| -----: | ----------: | ------------: | ------------------: | --------: | ----------- | --------------------- |
|  -5.2% | -746.28 MiB | 60.4% → 58.9% | 13.9 GiB → 13.2 GiB | 660 → 734 | `grow(int)` | `java.util.ArrayList` |
|  +0.8% | +75.092 MiB | 39.6% → 41.1% |  9.13 GiB → 9.2 GiB | 469 → 486 | `toArray()` | `java.util.ArrayList` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |       Delta |      % |                Size |       Samples | Callee                                   | Location                            |
| -----: | ----------: | -----: | ------------------: | ------------: | ---------------------------------------- | ----------------------------------- |
|  -1.8% | -662.06 MiB | 100.0% | 35.1 GiB → 34.4 GiB | 1,723 → 1,950 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

| Change |       Delta |      % |                Size |       Samples | Callee                              | Location                            |
| -----: | ----------: | -----: | ------------------: | ------------: | ----------------------------------- | ----------------------------------- |
|  -1.8% | -662.06 MiB | 100.0% | 35.1 GiB → 34.4 GiB | 1,723 → 1,950 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |             % |                Size |       Samples | Callee               | Location              |
| -----: | -----------: | ------------: | ------------------: | ------------: | -------------------- | --------------------- |
|  -2.8% | -671.187 MiB | 73.4% → 72.7% | 23.1 GiB → 22.4 GiB | 1,129 → 1,220 | `addAll(Collection)` | `java.util.ArrayList` |
|  +3.3% | +272.201 MiB | 25.6% → 27.0% | 8.05 GiB → 8.32 GiB |     372 → 446 | `<init>(Collection)` | `java.util.ArrayList` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ff3c0`)

| Change |        Delta |      % |                Size |       Samples | Callee                       | Location                                    |
| -----: | -----------: | -----: | ------------------: | ------------: | ---------------------------- | ------------------------------------------- |
|  -1.9% | -612.907 MiB | 100.0% | 31.4 GiB → 30.8 GiB | 1,511 → 1,672 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

| Change |        Delta |      % |                Size |       Samples | Callee                  | Location                                                               |
| -----: | -----------: | -----: | ------------------: | ------------: | ----------------------- | ---------------------------------------------------------------------- |
|  -1.9% | -612.907 MiB | 100.0% | 31.4 GiB → 30.8 GiB | 1,511 → 1,672 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ff3c0` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |      % |                Size |       Samples | Callee                              | Location            |
| -----: | -----------: | -----: | ------------------: | ------------: | ----------------------------------- | ------------------- |
|  -1.9% | -612.907 MiB | 100.0% | 31.4 GiB → 30.8 GiB | 1,511 → 1,672 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ff178`)

| Change |        Delta |      % |                Size |       Samples | Callee                              | Location                                    |
| -----: | -----------: | -----: | ------------------: | ------------: | ----------------------------------- | ------------------------------------------- |
|  -1.9% | -612.907 MiB | 100.0% | 31.4 GiB → 30.8 GiB | 1,511 → 1,672 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

| Change |        Delta |      % |                Size |       Samples | Callee                   | Location                                                               |
| -----: | -----------: | -----: | ------------------: | ------------: | ------------------------ | ---------------------------------------------------------------------- |
|  -1.9% | -612.907 MiB | 100.0% | 31.4 GiB → 30.8 GiB | 1,511 → 1,672 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ff178` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |              % |                Size |   Samples | Callee                    | Location                                               |
| -----: | -----------: | -------------: | ------------------: | --------: | ------------------------- | ------------------------------------------------------ |
|  -7.5% | -537.271 MiB | 100.0% → 98.6% | 7.04 GiB → 6.51 GiB | 204 → 208 | `invoke()`                | `java.util.concurrent.ForkJoinTask`                    |
|    new |  +93.104 MiB |    0.0% → 1.4% |      0 B → 93.1 MiB |     0 → 1 | `<init>(JavaKMeans, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fdf70`)

| Change |        Delta |      % |                Size |   Samples | Callee                         | Location                                    |
| -----: | -----------: | -----: | ------------------: | --------: | ------------------------------ | ------------------------------------------- |
|  -6.2% | -444.166 MiB | 100.0% | 7.04 GiB → 6.61 GiB | 204 → 209 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

| Change |        Delta |      % |                Size |   Samples | Callee   | Location                                                               |
| -----: | -----------: | -----: | ------------------: | --------: | -------- | ---------------------------------------------------------------------- |
|  -6.2% | -444.166 MiB | 100.0% | 7.04 GiB → 6.61 GiB | 204 → 209 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fdf70` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change |        Delta |      % |                Size |       Samples | Callee                                               | Location                                      |
| -----: | -----------: | -----: | ------------------: | ------------: | ---------------------------------------------------- | --------------------------------------------- |
|  -1.2% | -443.639 MiB | 100.0% | 35.3 GiB → 34.8 GiB | 1,726 → 1,956 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |        Delta |             % |                Size |   Samples | Callee                  | Location           |
| -----: | -----------: | ------------: | ------------------: | --------: | ----------------------- | ------------------ |
|  -1.5% | -273.317 MiB | 98.5% → 99.2% | 17.5 GiB → 17.3 GiB | 852 → 977 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change |        Delta |      % |                Size |   Samples | Callee     | Location                            |
| -----: | -----------: | -----: | ------------------: | --------: | ---------- | ----------------------------------- |
|  -5.4% | -246.434 MiB | 100.0% | 4.46 GiB → 4.22 GiB | 216 → 252 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|  Change |        Delta |              % |                Size | Samples | Callee                                       | Location            |
| ------: | -----------: | -------------: | ------------------: | ------: | -------------------------------------------- | ------------------- |
| removed | -137.027 MiB |   61.6% → 0.0% |       137 MiB → 0 B |   2 → 0 | `resize()`                                   | `java.util.HashMap` |
|  -77.8% |  -66.354 MiB | 38.4% → 100.0% | 85.3 MiB → 18.9 MiB |   7 → 8 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |        Delta |      % |                Size |       Samples | Callee     | Location                            |
| -----: | -----------: | -----: | ------------------: | ------------: | ---------- | ----------------------------------- |
|  -0.5% | -196.227 MiB | 100.0% | 35.3 GiB → 35.1 GiB | 1,741 → 1,976 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `putMapEntries(Map, boolean)` (`java.util.HashMap`)

| Change |        Delta |             % |                Size | Samples | Callee                                          | Location                     |
| -----: | -----------: | ------------: | ------------------: | ------: | ----------------------------------------------- | ---------------------------- |
| -91.6% | -203.762 MiB | 98.9% → 29.9% |  222 MiB → 18.6 MiB |   9 → 7 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap`          |
|    new |  +41.812 MiB |  0.0% → 67.4% |      0 B → 41.8 MiB |   0 → 3 | `entrySet()`                                    | `java.util.HashMap`          |
| -31.4% |  -777.14 KiB |   1.1% → 2.7% | 2.42 MiB → 1.66 MiB |   2 → 1 | `iterator()`                                    | `java.util.HashMap$EntrySet` |

##### `<init>(Map)` (`java.util.HashMap`)

| Change |        Delta |      % |             Size | Samples | Callee                        | Location            |
| -----: | -----------: | -----: | ---------------: | ------: | ----------------------------- | ------------------- |
| -72.4% | -162.709 MiB | 100.0% | 225 MiB → 62 MiB |      11 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `read(InputStream, String)` (`java.util.jar.Manifest`)

| Change |        Delta |            % |              Size | Samples | Callee                   | Location                                 |
| -----: | -----------: | -----------: | ----------------: | ------: | ------------------------ | ---------------------------------------- |
|    new | +932.859 KiB | 0.0% → 40.3% |     0 B → 933 KiB |   0 → 2 | `<init>(int)`            | `java.util.jar.Attributes`               |
|    new | +600.468 KiB | 0.0% → 25.9% |     0 B → 600 KiB |   0 → 2 | `<init>(InputStream)`    | `java.util.jar.Manifest$FastInputStream` |
|  +9.2% |  +66.289 KiB | 0.4% → 33.8% | 717 KiB → 783 KiB |       2 | `parseName(byte[], int)` | `java.util.jar.Manifest`                 |

##### `<init>(JarVerifier, InputStream, String)` (`java.util.jar.Manifest`)

| Change |        Delta |      % |               Size | Samples | Callee                      | Location                 |
| -----: | -----------: | -----: | -----------------: | ------: | --------------------------- | ------------------------ |
| -98.6% | -158.636 MiB | 100.0% | 161 MiB → 2.26 MiB |   4 → 6 | `read(InputStream, String)` | `java.util.jar.Manifest` |

##### `<init>(InputStream, String)` (`java.util.jar.Manifest`)

| Change |        Delta |      % |               Size | Samples | Callee                                     | Location                 |
| -----: | -----------: | -----: | -----------------: | ------: | ------------------------------------------ | ------------------------ |
| -98.6% | -158.636 MiB | 100.0% | 161 MiB → 2.26 MiB |   4 → 6 | `<init>(JarVerifier, InputStream, String)` | `java.util.jar.Manifest` |

##### `getManifestFromReference()` (`java.util.jar.JarFile`)

| Change |        Delta |      % |               Size | Samples | Callee                        | Location                 |
| -----: | -----------: | -----: | -----------------: | ------: | ----------------------------- | ------------------------ |
| -98.6% | -158.636 MiB | 100.0% | 161 MiB → 2.26 MiB |   4 → 6 | `<init>(InputStream, String)` | `java.util.jar.Manifest` |

##### `getManifest()` (`java.util.jar.JarFile`)

| Change |        Delta |      % |               Size | Samples | Callee                       | Location                |
| -----: | -----------: | -----: | -----------------: | ------: | ---------------------------- | ----------------------- |
| -98.6% | -158.636 MiB | 100.0% | 161 MiB → 2.26 MiB |   4 → 6 | `getManifestFromReference()` | `java.util.jar.JarFile` |

##### `getManifest()` (`jdk.internal.loader.URLClassPath$JarLoader$2`)

| Change |        Delta |      % |               Size | Samples | Callee          | Location                |
| -----: | -----------: | -----: | -----------------: | ------: | --------------- | ----------------------- |
| -98.6% | -158.636 MiB | 100.0% | 161 MiB → 2.26 MiB |   4 → 6 | `getManifest()` | `java.util.jar.JarFile` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |        Delta |            % |          Size | Samples | Callee                                                                                       | Location                                  |
| ------: | -----------: | -----------: | ------------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
| removed | -189.457 MiB | 99.8% → 0.0% | 189 MiB → 0 B |  71 → 0 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
| removed | -402.484 KiB |  0.2% → 0.0% | 402 KiB → 0 B |   2 → 0 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change |        Delta |            % |           Size | Samples | Callee              | Location                |
| ------: | -----------: | -----------: | -------------: | ------: | ------------------- | ----------------------- |
| removed | -161.227 MiB | 97.2% → 0.0% |  161 MiB → 0 B |   2 → 0 | `loadClass(String)` | `java.lang.ClassLoader` |
| removed |   -4.715 MiB |  2.8% → 0.0% | 4.72 MiB → 0 B |   4 → 0 | `<clinit>()`        | `scala.Predef$`         |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

|  Change |        Delta |             % |          Size | Samples | Callee                  | Location                                  |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------- | ----------------------------------------- |
| removed | -165.942 MiB | 100.0% → 0.0% | 166 MiB → 0 B |   6 → 0 | `run(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

|  Change |        Delta |              % |                Size |  Samples | Callee                             | Location                                  |
| ------: | -----------: | -------------: | ------------------: | -------: | ---------------------------------- | ----------------------------------------- |
| removed | -165.942 MiB |   87.6% → 0.0% |       166 MiB → 0 B |    6 → 0 | `executeOperation(int)`            | `org.renaissance.harness.ExecutionDriver` |
| +285.8% |  +67.201 MiB | 12.4% → 100.0% | 23.5 MiB → 90.7 MiB | 65 → 123 | `setUpBeforeAll(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

| Change |       Delta |             % |              Size |   Samples | Callee                                                      | Location                            |
| -----: | ----------: | ------------: | ----------------: | --------: | ----------------------------------------------------------- | ----------------------------------- |
| -47.5% | -98.485 MiB | 99.6% → 99.3% | 207 MiB → 109 MiB | 119 → 168 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`     |
|  +4.2% | +15.828 KiB |   0.2% → 0.4% | 378 KiB → 393 KiB |         1 | `create(Path, URI)`                                         | `org.renaissance.core.ModuleLoader` |
|  +2.2% |  +8.203 KiB |   0.2% → 0.3% | 379 KiB → 388 KiB |         1 | `createScratchRoot(Path, boolean)`                          | `org.renaissance.core.Launcher`     |

##### `main(String[])` (`org.renaissance.core.Launcher`)

| Change |       Delta |      % |              Size |   Samples | Callee                                 | Location                        |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------------------------- | ------------------------------- |
| -47.4% | -98.461 MiB | 100.0% | 208 MiB → 109 MiB | 121 → 170 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

| Change |       Delta |             % |              Size |   Samples | Callee                               | Location                            |
| -----: | ----------: | ------------: | ----------------: | --------: | ------------------------------------ | ----------------------------------- |
| -47.3% | -97.718 MiB | 99.8% → 99.6% | 207 MiB → 109 MiB | 118 → 169 | `invoke(Object, Object[])`           | `java.lang.reflect.Method`          |
|  +0.9% |  +3.507 KiB |   0.2% → 0.4% | 407 KiB → 411 KiB |         1 | `createClassLoaderForModule(String)` | `org.renaissance.core.ModuleLoader` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |        Delta |             % |             Size |  Samples | Callee                                                                        | Location                                    |
| ------: | -----------: | ------------: | ---------------: | -------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
|  -51.0% |  -96.813 MiB | 93.0% → 87.1% | 190 MiB → 93 MiB | 73 → 129 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |
| removed | -444.835 KiB |   0.2% → 0.0% |    445 KiB → 0 B |    1 → 0 | `linkCallSite(Object, Object, Object, Object, Object, Object[])`              | `java.lang.invoke.MethodHandleNatives`      |
|     new | +390.648 KiB |   0.0% → 0.4% |    0 B → 391 KiB |    0 → 1 | `loadExternalPlugins(BenchmarkSuite, Seq)`                                    | `org.renaissance.harness.RenaissanceSuite$` |
| removed | -388.984 KiB |   0.2% → 0.0% |    389 KiB → 0 B |    1 → 0 | `excludeIncompatible(BenchmarkSuite, Seq)`                                    | `org.renaissance.harness.RenaissanceSuite$` |
|     new | +387.648 KiB |   0.0% → 0.4% |    0 B → 388 KiB |    0 → 1 | `getMatchingBenchmarks(Predicate)`                                            | `org.renaissance.core.BenchmarkSuite`       |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700117c3b8`)

|  Change |       Delta |             % |           Size | Samples | Callee                                                                                                                 | Location                                    |
| ------: | ----------: | ------------: | -------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| removed | -189.85 MiB | 100.0% → 0.0% |  190 MiB → 0 B |  73 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
|     new | +92.658 MiB | 0.0% → 100.0% | 0 B → 92.7 MiB | 0 → 128 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

| Change |       Delta |             % |                Size |   Samples | Callee              | Location                                    |
| -----: | ----------: | ------------: | ------------------: | --------: | ------------------- | ------------------------------------------- |
| -47.7% | -97.378 MiB | 98.8% → 97.2% |   204 MiB → 107 MiB | 111 → 164 | `main(String[])`    | `org.renaissance.harness.RenaissanceSuite$` |
| +18.6% | +491.39 KiB |   1.2% → 2.8% | 2.58 MiB → 3.06 MiB |         7 | `loadClass(String)` | `java.lang.ClassLoader`                     |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |        Delta |              % |               Size |  Samples | Callee               | Location                          |
| -----: | -----------: | -------------: | -----------------: | -------: | -------------------- | --------------------------------- |
| -51.2% |  -97.191 MiB | 100.0% → 99.6% | 190 MiB → 92.7 MiB | 73 → 128 | `foreach(Function1)` | `scala.collection.immutable.List` |
|    new | +387.609 KiB |    0.0% → 0.4% |      0 B → 388 KiB |    0 → 1 | `loadClass(String)`  | `java.lang.ClassLoader`           |

# Retained heap profile diff

Retained 2.32 MiB → 2.62 MiB (+307.906 KiB, +13.0%) over 10 objects → 16 objects (237 KiB → 168 KiB per object).

| Category         | Change |       Delta |            % |                Size | Objects |
| ---------------- | -----: | ----------: | -----------: | ------------------: | ------: |
| Standard library | +13.0% | +307.82 KiB |       100.0% | 2.32 MiB → 2.62 MiB | 10 → 14 |
| Ours             |    new |       +88 B | 0.0% → <0.1% |          0 B → 88 B |   0 → 2 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

| Change |        Delta |            % |          Size | Objects | Function                                     | Location                                    |
| -----: | -----------: | -----------: | ------------: | ------: | -------------------------------------------- | ------------------------------------------- |
|    new | +313.921 KiB | 0.0% → 11.7% | 0 B → 314 KiB |   0 → 2 | `initCEN(int, ZipCoder)`                     | `java.util.zip.ZipFile$Source`              |
|    new |        +64 B | 0.0% → <0.1% |    0 B → 64 B |   0 → 1 | `newLinkedHashMap(int)`                      | `java.util.LinkedHashMap`                   |
|    new |        +48 B | 0.0% → <0.1% |    0 B → 48 B |   0 → 1 | `main(String[])`                             | `org.renaissance.harness.RenaissanceSuite$` |
|    new |        +40 B | 0.0% → <0.1% |    0 B → 40 B |   0 → 1 | `releaseFence()`                             | `scala.runtime.Statics`                     |
|    new |        +40 B | 0.0% → <0.1% |    0 B → 40 B |   0 → 1 | `lambda$generateData$4(int)`                 | `org.renaissance.jdk.concurrent.JavaKMeans` |
|    new |        +32 B | 0.0% → <0.1% |    0 B → 32 B |   0 → 1 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                         |
| +20.0% |        +24 B |        <0.1% | 120 B → 144 B |   5 → 6 | `valueOf(double)`                            | `java.lang.Double`                          |
|    new |        +24 B | 0.0% → <0.1% |    0 B → 24 B |   0 → 1 | `parseName(byte[], int)`                     | `java.util.jar.Manifest`                    |

##### Standard library

| Change |        Delta |            % |          Size | Objects | Function                                     | Location                       |
| -----: | -----------: | -----------: | ------------: | ------: | -------------------------------------------- | ------------------------------ |
|    new | +313.921 KiB | 0.0% → 11.7% | 0 B → 314 KiB |   0 → 2 | `initCEN(int, ZipCoder)`                     | `java.util.zip.ZipFile$Source` |
|    new |        +64 B | 0.0% → <0.1% |    0 B → 64 B |   0 → 1 | `newLinkedHashMap(int)`                      | `java.util.LinkedHashMap`      |
|    new |        +40 B | 0.0% → <0.1% |    0 B → 40 B |   0 → 1 | `releaseFence()`                             | `scala.runtime.Statics`        |
|    new |        +32 B | 0.0% → <0.1% |    0 B → 32 B |   0 → 1 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`            |
| +20.0% |        +24 B |        <0.1% | 120 B → 144 B |   5 → 6 | `valueOf(double)`                            | `java.lang.Double`             |
|    new |        +24 B | 0.0% → <0.1% |    0 B → 24 B |   0 → 1 | `parseName(byte[], int)`                     | `java.util.jar.Manifest`       |

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

##### Standard library

|  Change |      Delta |             % |                Size | Objects | Function                                                                                             | Location                                 |
| ------: | ---------: | ------------: | ------------------: | ------: | ---------------------------------------------------------------------------------------------------- | ---------------------------------------- |
|   -0.3% | -6.132 KiB | 89.2% → 78.7% | 2.07 MiB → 2.06 MiB |   2 → 1 | `copyOf(Object[], int)`                                                                              | `java.util.Arrays`                       |
| removed |     -120 B |  <0.1% → 0.0% |         120 B → 0 B |   1 → 0 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` | `java.lang.ClassLoader`                  |
| removed |      -32 B |  <0.1% → 0.0% |          32 B → 0 B |   1 → 0 | `putVal(Object, Object, boolean)`                                                                    | `java.util.concurrent.ConcurrentHashMap` |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |        Delta |             % |          Size | Objects | Location                            |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------------------- |
|    new | +313.921 KiB | 0.0% → 100.0% | 0 B → 314 KiB |   0 → 2 | `java.util.zip.ZipFile$Source:1733` |

##### `newLinkedHashMap(int)` (`java.util.LinkedHashMap`)

| Change | Delta |             % |       Size | Objects | Location                       |
| -----: | ----: | ------------: | ---------: | ------: | ------------------------------ |
|    new | +64 B | 0.0% → 100.0% | 0 B → 64 B |   0 → 1 | `java.util.LinkedHashMap:1078` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |             % |       Size | Objects | Location                                       |
| -----: | ----: | ------------: | ---------: | ------: | ---------------------------------------------- |
|    new | +48 B | 0.0% → 100.0% | 0 B → 48 B |   0 → 1 | `org.renaissance.harness.RenaissanceSuite$:37` |

##### `releaseFence()` (`scala.runtime.Statics`)

| Change | Delta |             % |       Size | Objects | Location                    |
| -----: | ----: | ------------: | ---------: | ------: | --------------------------- |
|    new | +40 B | 0.0% → 100.0% | 0 B → 40 B |   0 → 1 | `scala.runtime.Statics:148` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |             % |       Size | Objects | Location                                       |
| -----: | ----: | ------------: | ---------: | ------: | ---------------------------------------------- |
|    new | +40 B | 0.0% → 100.0% | 0 B → 40 B |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans:87` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

| Change | Delta |             % |       Size | Objects | Location                 |
| -----: | ----: | ------------: | ---------: | ------: | ------------------------ |
|    new | +32 B | 0.0% → 100.0% | 0 B → 32 B |   0 → 1 | `java.util.HashMap:1909` |

##### `valueOf(double)` (`java.lang.Double`)

| Change | Delta |      % |          Size | Objects | Location               |
| -----: | ----: | -----: | ------------: | ------: | ---------------------- |
| +20.0% | +24 B | 100.0% | 120 B → 144 B |   5 → 6 | `java.lang.Double:773` |

##### `parseName(byte[], int)` (`java.util.jar.Manifest`)

| Change | Delta |             % |       Size | Objects | Location                     |
| -----: | ----: | ------------: | ---------: | ------: | ---------------------------- |
|    new | +24 B | 0.0% → 100.0% | 0 B → 24 B |   0 → 1 | `java.util.jar.Manifest:365` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |      Delta |      % |                Size | Objects | Location                |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------- |
|  -0.3% | -6.132 KiB | 100.0% | 2.07 MiB → 2.06 MiB |   2 → 1 | `java.util.Arrays:3482` |

##### `putVal(Object, Object, boolean)` (`java.util.concurrent.ConcurrentHashMap`)

|  Change | Delta |             % |       Size | Objects | Location                                      |
| ------: | ----: | ------------: | ---------: | ------: | --------------------------------------------- |
| removed | -32 B | 100.0% → 0.0% | 32 B → 0 B |   1 → 0 | `java.util.concurrent.ConcurrentHashMap:1047` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |        Delta |             % |          Size | Objects | Caller                                          | Location                       |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------------------------------- | ------------------------------ |
|    new | +313.921 KiB | 0.0% → 100.0% | 0 B → 314 KiB |   0 → 2 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `newLinkedHashMap(int)` (`java.util.LinkedHashMap`)

| Change | Delta |             % |       Size | Objects | Caller        | Location                   |
| -----: | ----: | ------------: | ---------: | ------: | ------------- | -------------------------- |
|    new | +64 B | 0.0% → 100.0% | 0 B → 64 B |   0 → 1 | `<init>(int)` | `java.util.jar.Attributes` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |             % |       Size | Objects | Caller           | Location                                   |
| -----: | ----: | ------------: | ---------: | ------: | ---------------- | ------------------------------------------ |
|    new | +48 B | 0.0% → 100.0% | 0 B → 48 B |   0 → 1 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `releaseFence()` (`scala.runtime.Statics`)

| Change | Delta |             % |       Size | Objects | Caller           | Location                                  |
| -----: | ----: | ------------: | ---------: | ------: | ---------------- | ----------------------------------------- |
|    new | +40 B | 0.0% → 100.0% | 0 B → 40 B |   0 → 1 | `<init>(Object)` | `scala.collection.ArrayOps$ArrayIterator` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |             % |       Size | Objects | Caller       | Location                                                               |
| -----: | ----: | ------------: | ---------: | ------: | ------------ | ---------------------------------------------------------------------- |
|    new | +40 B | 0.0% → 100.0% | 0 B → 40 B |   0 → 1 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fd960` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

| Change | Delta |             % |       Size | Objects | Caller                                          | Location            |
| -----: | ----: | ------------: | ---------: | ------: | ----------------------------------------------- | ------------------- |
|    new | +32 B | 0.0% → 100.0% | 0 B → 32 B |   0 → 1 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `valueOf(double)` (`java.lang.Double`)

| Change | Delta |      % |          Size | Objects | Caller                                           | Location                                    |
| -----: | ----: | -----: | ------------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| +20.0% | +24 B | 100.0% | 120 B → 144 B |   5 → 6 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `parseName(byte[], int)` (`java.util.jar.Manifest`)

| Change | Delta |             % |       Size | Objects | Caller                      | Location                 |
| -----: | ----: | ------------: | ---------: | ------: | --------------------------- | ------------------------ |
|    new | +24 B | 0.0% → 100.0% | 0 B → 24 B |   0 → 1 | `read(InputStream, String)` | `java.util.jar.Manifest` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|  Change |      Delta |           % |           Size | Objects | Caller      | Location              |
| ------: | ---------: | ----------: | -------------: | ------: | ----------- | --------------------- |
| removed | -6.132 KiB | 0.3% → 0.0% | 6.13 KiB → 0 B |   1 → 0 | `toArray()` | `java.util.ArrayList` |

##### `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` (`java.lang.ClassLoader`)

|  Change |  Delta |             % |        Size | Objects | Caller                                                                                    | Location             |
| ------: | -----: | ------------: | ----------: | ------: | ----------------------------------------------------------------------------------------- | -------------------- |
| removed | -120 B | 100.0% → 0.0% | 120 B → 0 B |   1 → 0 | `defineClass(ClassLoader, Class, String, byte[], ProtectionDomain, boolean, int, Object)` | `java.lang.System$2` |

##### `putVal(Object, Object, boolean)` (`java.util.concurrent.ConcurrentHashMap`)

|  Change | Delta |             % |       Size | Objects | Caller                        | Location                                 |
| ------: | ----: | ------------: | ---------: | ------: | ----------------------------- | ---------------------------------------- |
| removed | -32 B | 100.0% → 0.0% | 32 B → 0 B |   1 → 0 | `putIfAbsent(Object, Object)` | `java.util.concurrent.ConcurrentHashMap` |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

|      Change |        Delta |             % |                Size | Objects | Function                                                                                                               | Location                                                 |
| ----------: | -----------: | ------------: | ------------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
|         new |    +2.31 MiB |  0.0% → 88.2% |      0 B → 2.31 MiB |  0 → 10 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`              |
|         new |    +2.06 MiB |  0.0% → 78.7% |      0 B → 2.06 MiB |   0 → 1 | `accept(Object, Object)`                                                                                               | `java.util.stream.Collectors$$Lambda.0x00000070010e3e58` |
|      +14.9% | +314.039 KiB | 89.0% → 90.4% | 2.06 MiB → 2.37 MiB |  8 → 15 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`               |
|      +14.9% | +314.039 KiB | 89.0% → 90.4% | 2.06 MiB → 2.37 MiB |  8 → 15 | `invokeStatic(Object, Object)`                                                                                         | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`     |
|      +14.9% | +314.039 KiB | 89.0% → 90.4% | 2.06 MiB → 2.37 MiB |  8 → 15 | `invoke(Object, Object, Object)`                                                                                       | `java.lang.invoke.LambdaForm$MH.0x0000007001082400`      |
|      +14.9% | +314.039 KiB | 89.0% → 90.4% | 2.06 MiB → 2.37 MiB |  8 → 15 | `invokeExact_MT(Object, Object, Object, Object)`                                                                       | `java.lang.invoke.Invokers$Holder`                       |
|      +14.9% | +314.039 KiB | 89.0% → 90.4% | 2.06 MiB → 2.37 MiB |  8 → 15 | `invokeImpl(Object, Object[])`                                                                                         | `jdk.internal.reflect.DirectMethodHandleAccessor`        |
|      +14.9% | +314.039 KiB | 89.0% → 90.4% | 2.06 MiB → 2.37 MiB |  8 → 15 | `invoke(Object, Object[])`                                                                                             | `jdk.internal.reflect.DirectMethodHandleAccessor`        |
|      +14.9% | +314.039 KiB | 89.0% → 90.4% | 2.06 MiB → 2.37 MiB |  8 → 15 | `invoke(Object, Object[])`                                                                                             | `java.lang.reflect.Method`                               |
|      +14.9% | +314.039 KiB | 89.0% → 90.4% | 2.06 MiB → 2.37 MiB |  8 → 15 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                          |
|      +14.9% | +314.039 KiB | 89.0% → 90.4% | 2.06 MiB → 2.37 MiB |  8 → 15 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                          |
|      +14.9% | +314.039 KiB | 89.0% → 90.4% | 2.06 MiB → 2.37 MiB |  8 → 15 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                          |
|         new | +314.007 KiB |  0.0% → 11.7% |       0 B → 314 KiB |   0 → 4 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)`                                            | `java.security.AccessController`                         |
|         new | +314.007 KiB |  0.0% → 11.7% |       0 B → 314 KiB |   0 → 4 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)`                                                        | `java.security.AccessController`                         |
|         new | +314.007 KiB |  0.0% → 11.7% |       0 B → 314 KiB |   0 → 4 | `run()`                                                                                                                | `java.net.URLClassLoader$1`                              |
|         new | +314.007 KiB |  0.0% → 11.7% |       0 B → 314 KiB |   0 → 4 | `findClass(String)`                                                                                                    | `java.net.URLClassLoader`                                |
|         new | +314.007 KiB |  0.0% → 11.7% |       0 B → 314 KiB |   0 → 4 | `loadClass(String, boolean)`                                                                                           | `java.lang.ClassLoader`                                  |
| +1004725.0% | +313.976 KiB | <0.1% → 11.7% |      32 B → 314 KiB |   1 → 4 | `loadClass(String)`                                                                                                    | `java.lang.ClassLoader`                                  |
|         new | +313.921 KiB |  0.0% → 11.7% |       0 B → 314 KiB |   0 → 2 | `initCEN(int, ZipCoder)`                                                                                               | `java.util.zip.ZipFile$Source`                           |
|         new | +313.921 KiB |  0.0% → 11.7% |       0 B → 314 KiB |   0 → 2 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)`                                                                        | `java.util.zip.ZipFile$Source`                           |

##### Standard library

|      Change |        Delta |             % |                Size | Objects | Function                                                                    | Location                                                 |
| ----------: | -----------: | ------------: | ------------------: | ------: | --------------------------------------------------------------------------- | -------------------------------------------------------- |
|         new |    +2.06 MiB |  0.0% → 78.7% |      0 B → 2.06 MiB |   0 → 1 | `accept(Object, Object)`                                                    | `java.util.stream.Collectors$$Lambda.0x00000070010e3e58` |
|      +14.9% | +314.039 KiB | 89.0% → 90.4% | 2.06 MiB → 2.37 MiB |  8 → 15 | `invokeStatic(Object, Object)`                                              | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`     |
|      +14.9% | +314.039 KiB | 89.0% → 90.4% | 2.06 MiB → 2.37 MiB |  8 → 15 | `invoke(Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x0000007001082400`      |
|      +14.9% | +314.039 KiB | 89.0% → 90.4% | 2.06 MiB → 2.37 MiB |  8 → 15 | `invokeExact_MT(Object, Object, Object, Object)`                            | `java.lang.invoke.Invokers$Holder`                       |
|      +14.9% | +314.039 KiB | 89.0% → 90.4% | 2.06 MiB → 2.37 MiB |  8 → 15 | `invokeImpl(Object, Object[])`                                              | `jdk.internal.reflect.DirectMethodHandleAccessor`        |
|      +14.9% | +314.039 KiB | 89.0% → 90.4% | 2.06 MiB → 2.37 MiB |  8 → 15 | `invoke(Object, Object[])`                                                  | `jdk.internal.reflect.DirectMethodHandleAccessor`        |
|      +14.9% | +314.039 KiB | 89.0% → 90.4% | 2.06 MiB → 2.37 MiB |  8 → 15 | `invoke(Object, Object[])`                                                  | `java.lang.reflect.Method`                               |
|         new | +314.007 KiB |  0.0% → 11.7% |       0 B → 314 KiB |   0 → 4 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` | `java.security.AccessController`                         |
|         new | +314.007 KiB |  0.0% → 11.7% |       0 B → 314 KiB |   0 → 4 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)`             | `java.security.AccessController`                         |
|         new | +314.007 KiB |  0.0% → 11.7% |       0 B → 314 KiB |   0 → 4 | `run()`                                                                     | `java.net.URLClassLoader$1`                              |
|         new | +314.007 KiB |  0.0% → 11.7% |       0 B → 314 KiB |   0 → 4 | `findClass(String)`                                                         | `java.net.URLClassLoader`                                |
|         new | +314.007 KiB |  0.0% → 11.7% |       0 B → 314 KiB |   0 → 4 | `loadClass(String, boolean)`                                                | `java.lang.ClassLoader`                                  |
| +1004725.0% | +313.976 KiB | <0.1% → 11.7% |      32 B → 314 KiB |   1 → 4 | `loadClass(String)`                                                         | `java.lang.ClassLoader`                                  |
|         new | +313.921 KiB |  0.0% → 11.7% |       0 B → 314 KiB |   0 → 2 | `initCEN(int, ZipCoder)`                                                    | `java.util.zip.ZipFile$Source`                           |
|         new | +313.921 KiB |  0.0% → 11.7% |       0 B → 314 KiB |   0 → 2 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)`                             | `java.util.zip.ZipFile$Source`                           |
|         new | +313.921 KiB |  0.0% → 11.7% |       0 B → 314 KiB |   0 → 2 | `get(File, boolean, ZipCoder)`                                              | `java.util.zip.ZipFile$Source`                           |
|         new | +313.921 KiB |  0.0% → 11.7% |       0 B → 314 KiB |   0 → 2 | `<init>(ZipFile, ZipCoder, File, int)`                                      | `java.util.zip.ZipFile$CleanableResource`                |
|         new | +313.921 KiB |  0.0% → 11.7% |       0 B → 314 KiB |   0 → 2 | `<init>(File, int, Charset)`                                                | `java.util.zip.ZipFile`                                  |
|         new | +313.921 KiB |  0.0% → 11.7% |       0 B → 314 KiB |   0 → 2 | `<init>(File, int)`                                                         | `java.util.zip.ZipFile`                                  |
|         new | +313.921 KiB |  0.0% → 11.7% |       0 B → 314 KiB |   0 → 2 | `<init>(File, boolean, int, Runtime$Version)`                               | `java.util.jar.JarFile`                                  |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

|  Change |      Delta |             % |                Size | Objects | Function                                                                                                               | Location                                                               |
| ------: | ---------: | ------------: | ------------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| removed |  -2.06 MiB |  88.9% → 0.0% |      2.06 MiB → 0 B |   7 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
| -100.0% |  -2.06 MiB | 88.9% → <0.1% |     2.06 MiB → 32 B |       1 | `accept(Object, Object)`                                                                                               | `java.util.stream.Collectors$$Lambda.0x000000700100c000`               |
|   -0.3% | -6.132 KiB | 89.2% → 78.7% | 2.07 MiB → 2.06 MiB |   2 → 1 | `copyOf(Object[], int)`                                                                                                | `java.util.Arrays`                                                     |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `toArray()`                                                                                                            | `java.util.ArrayList`                                                  |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `<init>(Collection)`                                                                                                   | `java.util.ArrayList`                                                  |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0` |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `merge(Object, Object, BiFunction)`                                                                                    | `java.util.HashMap`                                                    |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88` |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `forEach(BiConsumer)`                                                                                                  | `java.util.HashMap`                                                    |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `exec()`                                                                                                               | `java.util.concurrent.RecursiveTask`                                   |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `doExec()`                                                                                                             | `java.util.concurrent.ForkJoinTask`                                    |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `tryRemoveAndExec(ForkJoinTask, boolean)`                                                                              | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `awaitDone(int, long)`                                                                                                 | `java.util.concurrent.ForkJoinTask`                                    |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `join()`                                                                                                               | `java.util.concurrent.ForkJoinTask`                                    |

##### Standard library

|  Change |      Delta |             % |                Size | Objects | Function                                                                                             | Location                                                 |
| ------: | ---------: | ------------: | ------------------: | ------: | ---------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| -100.0% |  -2.06 MiB | 88.9% → <0.1% |     2.06 MiB → 32 B |       1 | `accept(Object, Object)`                                                                             | `java.util.stream.Collectors$$Lambda.0x000000700100c000` |
|   -0.3% | -6.132 KiB | 89.2% → 78.7% | 2.07 MiB → 2.06 MiB |   2 → 1 | `copyOf(Object[], int)`                                                                              | `java.util.Arrays`                                       |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `toArray()`                                                                                          | `java.util.ArrayList`                                    |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `<init>(Collection)`                                                                                 | `java.util.ArrayList`                                    |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `merge(Object, Object, BiFunction)`                                                                  | `java.util.HashMap`                                      |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `forEach(BiConsumer)`                                                                                | `java.util.HashMap`                                      |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `exec()`                                                                                             | `java.util.concurrent.RecursiveTask`                     |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `doExec()`                                                                                           | `java.util.concurrent.ForkJoinTask`                      |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `tryRemoveAndExec(ForkJoinTask, boolean)`                                                            | `java.util.concurrent.ForkJoinPool$WorkQueue`            |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `awaitDone(int, long)`                                                                               | `java.util.concurrent.ForkJoinTask`                      |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `join()`                                                                                             | `java.util.concurrent.ForkJoinTask`                      |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`                                                 | `java.util.concurrent.ForkJoinPool$WorkQueue`            |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `scan(ForkJoinPool$WorkQueue, int, int)`                                                             | `java.util.concurrent.ForkJoinPool`                      |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `runWorker(ForkJoinPool$WorkQueue)`                                                                  | `java.util.concurrent.ForkJoinPool`                      |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `run()`                                                                                              | `java.util.concurrent.ForkJoinWorkerThread`              |
| removed |     -120 B |  <0.1% → 0.0% |         120 B → 0 B |   1 → 0 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` | `java.lang.ClassLoader`                                  |
| removed |     -120 B |  <0.1% → 0.0% |         120 B → 0 B |   1 → 0 | `defineClass(ClassLoader, Class, String, byte[], ProtectionDomain, boolean, int, Object)`            | `java.lang.System$2`                                     |
| removed |     -120 B |  <0.1% → 0.0% |         120 B → 0 B |   1 → 0 | `defineClass(boolean, Object)`                                                                       | `java.lang.invoke.MethodHandles$Lookup$ClassDefiner`     |
| removed |     -120 B |  <0.1% → 0.0% |         120 B → 0 B |   1 → 0 | `loadMethod(byte[])`                                                                                 | `java.lang.invoke.InvokerBytecodeGenerator`              |
| removed |     -120 B |  <0.1% → 0.0% |         120 B → 0 B |   1 → 0 | `generateCustomizedCode(LambdaForm, MethodType)`                                                     | `java.lang.invoke.InvokerBytecodeGenerator`              |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |        Delta |            % |           Size | Objects | Callee                                                                                       | Location                                  |
| -----: | -----------: | -----------: | -------------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
|    new |    +2.06 MiB | 0.0% → 89.2% | 0 B → 2.06 MiB |   0 → 8 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
|    new | +255.109 KiB | 0.0% → 10.8% |  0 B → 255 KiB |   0 → 2 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `accept(Object, Object)` (`java.util.stream.Collectors$$Lambda.0x00000070010e3e58`)

| Change |     Delta |             % |           Size | Objects | Callee        | Location              |
| -----: | --------: | ------------: | -------------: | ------: | ------------- | --------------------- |
|    new | +2.06 MiB | 0.0% → 100.0% | 0 B → 2.06 MiB |   0 → 1 | `add(Object)` | `java.util.ArrayList` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

| Change |       Delta |              % |                Size | Objects | Callee              | Location                                    |
| -----: | ----------: | -------------: | ------------------: | ------: | ------------------- | ------------------------------------------- |
| +12.1% | +255.14 KiB | 100.0% → 97.6% | 2.06 MiB → 2.31 MiB |  8 → 13 | `main(String[])`    | `org.renaissance.harness.RenaissanceSuite$` |
|    new | +58.898 KiB |    0.0% → 2.4% |      0 B → 58.9 KiB |   0 → 2 | `loadClass(String)` | `java.lang.ClassLoader`                     |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`)

| Change |        Delta |      % |                Size | Objects | Callee           | Location                                   |
| -----: | -----------: | -----: | ------------------: | ------: | ---------------- | ------------------------------------------ |
| +14.9% | +314.039 KiB | 100.0% | 2.06 MiB → 2.37 MiB |  8 → 15 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001082400`)

| Change |        Delta |      % |                Size | Objects | Callee                         | Location                                             |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------ | ---------------------------------------------------- |
| +14.9% | +314.039 KiB | 100.0% | 2.06 MiB → 2.37 MiB |  8 → 15 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change |        Delta |      % |                Size | Objects | Callee                           | Location                                            |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------------- | --------------------------------------------------- |
| +14.9% | +314.039 KiB | 100.0% | 2.06 MiB → 2.37 MiB |  8 → 15 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001082400` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |        Delta |      % |                Size | Objects | Callee                                           | Location                           |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------------------------ | ---------------------------------- |
| +14.9% | +314.039 KiB | 100.0% | 2.06 MiB → 2.37 MiB |  8 → 15 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |        Delta |      % |                Size | Objects | Callee                         | Location                                          |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------ | ------------------------------------------------- |
| +14.9% | +314.039 KiB | 100.0% | 2.06 MiB → 2.37 MiB |  8 → 15 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

| Change |        Delta |      % |                Size | Objects | Callee                     | Location                                          |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------- | ------------------------------------------------- |
| +14.9% | +314.039 KiB | 100.0% | 2.06 MiB → 2.37 MiB |  8 → 15 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

| Change |        Delta |      % |                Size | Objects | Callee                     | Location                   |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------- | -------------------------- |
| +14.9% | +314.039 KiB | 100.0% | 2.06 MiB → 2.37 MiB |  8 → 15 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

| Change |        Delta |      % |                Size | Objects | Callee                                                      | Location                        |
| -----: | -----------: | -----: | ------------------: | ------: | ----------------------------------------------------------- | ------------------------------- |
| +14.9% | +314.039 KiB | 100.0% | 2.06 MiB → 2.37 MiB |  8 → 15 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.core.Launcher`)

| Change |        Delta |      % |                Size | Objects | Callee                                 | Location                        |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------------------- | ------------------------------- |
| +14.9% | +314.039 KiB | 100.0% | 2.06 MiB → 2.37 MiB |  8 → 15 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`)

| Change |        Delta |             % |          Size | Objects | Callee  | Location                                       |
| -----: | -----------: | ------------: | ------------: | ------: | ------- | ---------------------------------------------- |
|    new | +314.007 KiB | 0.0% → 100.0% | 0 B → 314 KiB |   0 → 4 | `run()` | `java.net.URLClassLoader$1`                    |
|    new | +313.921 KiB | 0.0% → 100.0% | 0 B → 314 KiB |   0 → 2 | `run()` | `jdk.internal.loader.URLClassPath$JarLoader$1` |
|    new | +313.921 KiB | 0.0% → 100.0% | 0 B → 314 KiB |   0 → 2 | `run()` | `jdk.internal.loader.URLClassPath$3`           |

##### `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` (`java.security.AccessController`)

| Change |        Delta |             % |          Size | Objects | Callee                                                                      | Location                         |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------------------------------------------------- | -------------------------------- |
|    new | +314.007 KiB | 0.0% → 100.0% | 0 B → 314 KiB |   0 → 4 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` | `java.security.AccessController` |

##### `run()` (`java.net.URLClassLoader$1`)

| Change |        Delta |             % |          Size | Objects | Callee                          | Location                           |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------- | ---------------------------------- |
|    new | +314.007 KiB | 0.0% → 100.0% | 0 B → 314 KiB |   0 → 4 | `run()`                         | `java.net.URLClassLoader$1`        |
|    new | +313.921 KiB | 0.0% → 100.0% | 0 B → 314 KiB |   0 → 2 | `getResource(String, boolean)`  | `jdk.internal.loader.URLClassPath` |
|    new |        +88 B |  0.0% → <0.1% |    0 B → 88 B |   0 → 2 | `defineClass(String, Resource)` | `java.net.URLClassLoader`          |

##### `findClass(String)` (`java.net.URLClassLoader`)

| Change |        Delta |             % |          Size | Objects | Callee                                                          | Location                         |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------------------------------------- | -------------------------------- |
|    new | +314.007 KiB | 0.0% → 100.0% | 0 B → 314 KiB |   0 → 4 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` | `java.security.AccessController` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

| Change |        Delta |             % |          Size | Objects | Callee              | Location                  |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------- | ------------------------- |
|    new | +314.007 KiB | 0.0% → 100.0% | 0 B → 314 KiB |   0 → 4 | `findClass(String)` | `java.net.URLClassLoader` |

##### `loadClass(String)` (`java.lang.ClassLoader`)

|  Change |        Delta |             % |          Size | Objects | Callee                       | Location                                          |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------- | ------------------------------------------------- |
|     new | +314.007 KiB | 0.0% → 100.0% | 0 B → 314 KiB |   0 → 4 | `loadClass(String, boolean)` | `java.lang.ClassLoader`                           |
| removed |        -32 B | 100.0% → 0.0% |    32 B → 0 B |   1 → 0 | `loadClass(String, boolean)` | `jdk.internal.loader.ClassLoaders$AppClassLoader` |

##### `<init>(ZipFile$Source$Key, boolean, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |        Delta |             % |          Size | Objects | Callee                   | Location                       |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------ | ------------------------------ |
|    new | +313.921 KiB | 0.0% → 100.0% | 0 B → 314 KiB |   0 → 2 | `initCEN(int, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `get(File, boolean, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |        Delta |             % |          Size | Objects | Callee                                          | Location                       |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------------------------------- | ------------------------------ |
|    new | +313.921 KiB | 0.0% → 100.0% | 0 B → 314 KiB |   0 → 2 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `<init>(ZipFile, ZipCoder, File, int)` (`java.util.zip.ZipFile$CleanableResource`)

| Change |        Delta |             % |          Size | Objects | Callee                         | Location                       |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------ | ------------------------------ |
|    new | +313.921 KiB | 0.0% → 100.0% | 0 B → 314 KiB |   0 → 2 | `get(File, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `<init>(File, int, Charset)` (`java.util.zip.ZipFile`)

| Change |        Delta |             % |          Size | Objects | Callee                                 | Location                                  |
| -----: | -----------: | ------------: | ------------: | ------: | -------------------------------------- | ----------------------------------------- |
|    new | +313.921 KiB | 0.0% → 100.0% | 0 B → 314 KiB |   0 → 2 | `<init>(ZipFile, ZipCoder, File, int)` | `java.util.zip.ZipFile$CleanableResource` |

##### `<init>(File, int)` (`java.util.zip.ZipFile`)

| Change |        Delta |             % |          Size | Objects | Callee                       | Location                |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------------- | ----------------------- |
|    new | +313.921 KiB | 0.0% → 100.0% | 0 B → 314 KiB |   0 → 2 | `<init>(File, int, Charset)` | `java.util.zip.ZipFile` |

##### `<init>(File, boolean, int, Runtime$Version)` (`java.util.jar.JarFile`)

| Change |        Delta |             % |          Size | Objects | Callee              | Location                |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------- | ----------------------- |
|    new | +313.921 KiB | 0.0% → 100.0% | 0 B → 314 KiB |   0 → 2 | `<init>(File, int)` | `java.util.zip.ZipFile` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |     Delta |             % |           Size | Objects | Callee               | Location                                  |
| ------: | --------: | ------------: | -------------: | ------: | -------------------- | ----------------------------------------- |
| removed | -2.06 MiB | 100.0% → 0.0% | 2.06 MiB → 0 B |   7 → 0 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `accept(Object, Object)` (`java.util.stream.Collectors$$Lambda.0x000000700100c000`)

|  Change |     Delta |             % |           Size | Objects | Callee                                                             | Location                      |
| ------: | --------: | ------------: | -------------: | ------: | ------------------------------------------------------------------ | ----------------------------- |
| removed | -2.06 MiB | 100.0% → 0.0% | 2.06 MiB → 0 B |   1 → 0 | `add(Object)`                                                      | `java.util.ArrayList`         |
|     new |     +32 B | 0.0% → 100.0% |     0 B → 32 B |   0 → 1 | `lambda$uniqKeysMapAccumulator$1(Function, Function, Map, Object)` | `java.util.stream.Collectors` |

##### `toArray()` (`java.util.ArrayList`)

|  Change |      Delta |             % |           Size | Objects | Callee                  | Location           |
| ------: | ---------: | ------------: | -------------: | ------: | ----------------------- | ------------------ |
| removed | -6.132 KiB | 100.0% → 0.0% | 6.13 KiB → 0 B |   1 → 0 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `<init>(Collection)` (`java.util.ArrayList`)

|  Change |      Delta |             % |           Size | Objects | Callee      | Location              |
| ------: | ---------: | ------------: | -------------: | ------: | ----------- | --------------------- |
| removed | -6.132 KiB | 100.0% → 0.0% | 6.13 KiB → 0 B |   1 → 0 | `toArray()` | `java.util.ArrayList` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |      Delta |             % |           Size | Objects | Callee               | Location              |
| ------: | ---------: | ------------: | -------------: | ------: | -------------------- | --------------------- |
| removed | -6.132 KiB | 100.0% → 0.0% | 6.13 KiB → 0 B |   1 → 0 | `<init>(Collection)` | `java.util.ArrayList` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0`)

|  Change |      Delta |             % |           Size | Objects | Callee                       | Location                                    |
| ------: | ---------: | ------------: | -------------: | ------: | ---------------------------- | ------------------------------------------- |
| removed | -6.132 KiB | 100.0% → 0.0% | 6.13 KiB → 0 B |   1 → 0 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|  Change |      Delta |             % |           Size | Objects | Callee                  | Location                                                               |
| ------: | ---------: | ------------: | -------------: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| removed | -6.132 KiB | 100.0% → 0.0% | 6.13 KiB → 0 B |   1 → 0 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |      Delta |             % |           Size | Objects | Callee                              | Location            |
| ------: | ---------: | ------------: | -------------: | ------: | ----------------------------------- | ------------------- |
| removed | -6.132 KiB | 100.0% → 0.0% | 6.13 KiB → 0 B |   1 → 0 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88`)

|  Change |      Delta |             % |           Size | Objects | Callee                              | Location                                    |
| ------: | ---------: | ------------: | -------------: | ------: | ----------------------------------- | ------------------------------------------- |
| removed | -6.132 KiB | 100.0% → 0.0% | 6.13 KiB → 0 B |   1 → 0 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|  Change |      Delta |             % |           Size | Objects | Callee                   | Location                                                               |
| ------: | ---------: | ------------: | -------------: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| removed | -6.132 KiB | 100.0% → 0.0% | 6.13 KiB → 0 B |   1 → 0 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |      Delta |             % |           Size | Objects | Callee                | Location            |
| ------: | ---------: | ------------: | -------------: | ------: | --------------------- | ------------------- |
| removed | -6.132 KiB | 100.0% → 0.0% | 6.13 KiB → 0 B |   1 → 0 | `forEach(BiConsumer)` | `java.util.HashMap` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change |      Delta |             % |           Size | Objects | Callee            | Location                                    |
| ------: | ---------: | ------------: | -------------: | ------: | ----------------- | ------------------------------------------- |
| removed | -6.132 KiB | 100.0% → 0.0% | 6.13 KiB → 0 B |   1 → 0 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change |      Delta |             % |           Size | Objects | Callee                     | Location                                                   |
| ------: | ---------: | ------------: | -------------: | ------: | -------------------------- | ---------------------------------------------------------- |
| removed | -6.132 KiB | 100.0% → 0.0% | 6.13 KiB → 0 B |   1 → 0 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|  Change |      Delta |             % |           Size | Objects | Callee                           | Location                                                   |
| ------: | ---------: | ------------: | -------------: | ------: | -------------------------------- | ---------------------------------------------------------- |
| removed | -6.132 KiB | 100.0% → 0.0% | 6.13 KiB → 0 B |   1 → 0 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed | -6.132 KiB | 100.0% → 0.0% | 6.13 KiB → 0 B |   1 → 0 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|  Change |      Delta |             % |           Size | Objects | Callee      | Location                                               |
| ------: | ---------: | ------------: | -------------: | ------: | ----------- | ------------------------------------------------------ |
| removed | -6.132 KiB | 100.0% → 0.0% | 6.13 KiB → 0 B |   1 → 0 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|  Change |      Delta |             % |           Size | Objects | Callee   | Location                             |
| ------: | ---------: | ------------: | -------------: | ------: | -------- | ------------------------------------ |
| removed | -6.132 KiB | 100.0% → 0.0% | 6.13 KiB → 0 B |   1 → 0 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change |      Delta |             % |           Size | Objects | Callee     | Location                            |
| ------: | ---------: | ------------: | -------------: | ------: | ---------- | ----------------------------------- |
| removed | -6.132 KiB | 100.0% → 0.0% | 6.13 KiB → 0 B |   1 → 0 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|  Change |      Delta |             % |           Size | Objects | Callee                                    | Location                                      |
| ------: | ---------: | ------------: | -------------: | ------: | ----------------------------------------- | --------------------------------------------- |
| removed | -6.132 KiB | 100.0% → 0.0% | 6.13 KiB → 0 B |   1 → 0 | `tryRemoveAndExec(ForkJoinTask, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|  Change |      Delta |             % |           Size | Objects | Callee                 | Location                            |
| ------: | ---------: | ------------: | -------------: | ------: | ---------------------- | ----------------------------------- |
| removed | -6.132 KiB | 100.0% → 0.0% | 6.13 KiB → 0 B |   1 → 0 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change |      Delta |             % |           Size | Objects | Callee     | Location                            |
| ------: | ---------: | ------------: | -------------: | ------: | ---------- | ----------------------------------- |
| removed | -6.132 KiB | 100.0% → 0.0% | 6.13 KiB → 0 B |   1 → 0 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|  Change |      Delta |             % |           Size | Objects | Callee                                               | Location                                      |
| ------: | ---------: | ------------: | -------------: | ------: | ---------------------------------------------------- | --------------------------------------------- |
| removed | -6.132 KiB | 100.0% → 0.0% | 6.13 KiB → 0 B |   1 → 0 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|  Change |      Delta |             % |           Size | Objects | Callee                                   | Location                            |
| ------: | ---------: | ------------: | -------------: | ------: | ---------------------------------------- | ----------------------------------- |
| removed | -6.132 KiB | 100.0% → 0.0% | 6.13 KiB → 0 B |   1 → 0 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|  Change |      Delta |             % |           Size | Objects | Callee                              | Location                            |
| ------: | ---------: | ------------: | -------------: | ------: | ----------------------------------- | ----------------------------------- |
| removed | -6.132 KiB | 100.0% → 0.0% | 6.13 KiB → 0 B |   1 → 0 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `defineClass(ClassLoader, Class, String, byte[], ProtectionDomain, boolean, int, Object)` (`java.lang.System$2`)

|  Change |  Delta |             % |        Size | Objects | Callee                                                                                               | Location                |
| ------: | -----: | ------------: | ----------: | ------: | ---------------------------------------------------------------------------------------------------- | ----------------------- |
| removed | -120 B | 100.0% → 0.0% | 120 B → 0 B |   1 → 0 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` | `java.lang.ClassLoader` |

##### `defineClass(boolean, Object)` (`java.lang.invoke.MethodHandles$Lookup$ClassDefiner`)

|  Change |  Delta |             % |        Size | Objects | Callee                                                                                    | Location             |
| ------: | -----: | ------------: | ----------: | ------: | ----------------------------------------------------------------------------------------- | -------------------- |
| removed | -120 B | 100.0% → 0.0% | 120 B → 0 B |   1 → 0 | `defineClass(ClassLoader, Class, String, byte[], ProtectionDomain, boolean, int, Object)` | `java.lang.System$2` |

##### `loadMethod(byte[])` (`java.lang.invoke.InvokerBytecodeGenerator`)

|  Change |  Delta |             % |        Size | Objects | Callee                         | Location                                             |
| ------: | -----: | ------------: | ----------: | ------: | ------------------------------ | ---------------------------------------------------- |
| removed | -120 B | 100.0% → 0.0% | 120 B → 0 B |   1 → 0 | `defineClass(boolean, Object)` | `java.lang.invoke.MethodHandles$Lookup$ClassDefiner` |

##### `generateCustomizedCode(LambdaForm, MethodType)` (`java.lang.invoke.InvokerBytecodeGenerator`)

|  Change |  Delta |             % |        Size | Objects | Callee               | Location                                    |
| ------: | -----: | ------------: | ----------: | ------: | -------------------- | ------------------------------------------- |
| removed | -120 B | 100.0% → 0.0% | 120 B → 0 B |   1 → 0 | `loadMethod(byte[])` | `java.lang.invoke.InvokerBytecodeGenerator` |

# Lock contention profile diff

Blocked 7.47s → 9.66s (+2.188s, +29.3%) over 72 contentions → 131 contentions (103.9ms → 73.8ms per contention).

| Category         | Change |   Delta |      % |          Time | Contentions |
| ---------------- | -----: | ------: | -----: | ------------: | ----------: |
| Standard library | +29.3% | +2.188s | 100.0% | 7.47s → 9.66s |    72 → 131 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time blocked directly in the function body, excluding callees.

##### Standard library

| Change |   Delta |      % |          Time | Contentions | Function              | Location                   |
| -----: | ------: | -----: | ------------: | ----------: | --------------------- | -------------------------- |
| +29.3% | +2.188s | 100.0% | 7.47s → 9.66s |    72 → 131 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

| Change |     Delta |             % |              Time | Contentions | Caller            | Location                                 |
| -----: | --------: | ------------: | ----------------: | ----------: | ----------------- | ---------------------------------------- |
| +27.4% |   +1.980s | 96.8% → 95.4% |     7.23s → 9.22s |    62 → 117 | `park()`          | `java.util.concurrent.locks.LockSupport` |
| +86.7% | +207.53ms |   3.2% → 4.6% | 239.4ms → 446.9ms |     10 → 14 | `parkUntil(long)` | `java.util.concurrent.locks.LockSupport` |

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

| Change |     Delta |             % |          Time | Contentions | Function                                                                                                               | Location                                                               |
| -----: | --------: | ------------: | ------------: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|    new |   +6.901s |  0.0% → 71.4% |   0ms → 6.90s |      0 → 16 | `$anonfun$2(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|    new |   +6.901s |  0.0% → 71.4% |   0ms → 6.90s |      0 → 16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
| +29.3% |   +2.188s |        100.0% | 7.47s → 9.66s |    72 → 131 | `park(boolean, long)`                                                                                                  | `jdk.internal.misc.Unsafe`                                             |
| +27.4% |   +1.980s | 96.8% → 95.4% | 7.23s → 9.22s |    62 → 117 | `park()`                                                                                                               | `java.util.concurrent.locks.LockSupport`                               |
| +96.6% |   +1.359s | 18.8% → 28.6% | 1.40s → 2.76s |    56 → 115 | `runWorker(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`                                    |
| +96.6% |   +1.359s | 18.8% → 28.6% | 1.40s → 2.76s |    56 → 115 | `run()`                                                                                                                | `java.util.concurrent.ForkJoinWorkerThread`                            |
| +92.5% |   +1.291s | 18.7% → 27.8% | 1.39s → 2.68s |    55 → 111 | `awaitWork(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`                                    |
| +14.7% | +896.54ms | 81.3% → 72.2% | 6.08s → 6.97s |     17 → 20 | `awaitDone(int, long)`                                                                                                 | `java.util.concurrent.ForkJoinTask`                                    |
| +13.7% | +828.99ms | 81.2% → 71.4% | 6.07s → 6.90s |          16 | `get()`                                                                                                                | `java.util.concurrent.ForkJoinTask`                                    |
| +13.7% | +828.99ms | 81.2% → 71.4% | 6.07s → 6.90s |          16 | `run(int, List, int)`                                                                                                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| +13.7% | +828.99ms | 81.2% → 71.4% | 6.07s → 6.90s |          16 | `$anonfun$adapted$1(Object)`                                                                                           | `org.renaissance.jdk.concurrent.FjKmeans`                              |
| +13.7% | +828.99ms | 81.2% → 71.4% | 6.07s → 6.90s |          16 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011fdb90`   |
| +13.7% | +828.99ms | 81.2% → 71.4% | 6.07s → 6.90s |          16 | `map(Function1)`                                                                                                       | `scala.collection.immutable.Range`                                     |
| +13.7% | +828.99ms | 81.2% → 71.4% | 6.07s → 6.90s |          16 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                              |
| +13.7% | +828.99ms | 81.2% → 71.4% | 6.07s → 6.90s |          16 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |
| +13.7% | +828.99ms | 81.2% → 71.4% | 6.07s → 6.90s |          16 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
| +13.7% | +828.99ms | 81.2% → 71.4% | 6.07s → 6.90s |          16 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700117c3b8` |
| +13.7% | +828.99ms | 81.2% → 71.4% | 6.07s → 6.90s |          16 | `apply(Object)`                                                                                                        | `scala.runtime.function.JProcedure1`                                   |
| +13.7% | +828.99ms | 81.2% → 71.4% | 6.07s → 6.90s |          16 | `foreach(Function1)`                                                                                                   | `scala.collection.immutable.List`                                      |
| +13.7% | +828.99ms | 81.2% → 71.4% | 6.07s → 6.90s |          16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |

##### Standard library

|  Change |     Delta |             % |              Time | Contentions | Function                                         | Location                                             |
| ------: | --------: | ------------: | ----------------: | ----------: | ------------------------------------------------ | ---------------------------------------------------- |
|  +29.3% |   +2.188s |        100.0% |     7.47s → 9.66s |    72 → 131 | `park(boolean, long)`                            | `jdk.internal.misc.Unsafe`                           |
|  +27.4% |   +1.980s | 96.8% → 95.4% |     7.23s → 9.22s |    62 → 117 | `park()`                                         | `java.util.concurrent.locks.LockSupport`             |
|  +96.6% |   +1.359s | 18.8% → 28.6% |     1.40s → 2.76s |    56 → 115 | `runWorker(ForkJoinPool$WorkQueue)`              | `java.util.concurrent.ForkJoinPool`                  |
|  +96.6% |   +1.359s | 18.8% → 28.6% |     1.40s → 2.76s |    56 → 115 | `run()`                                          | `java.util.concurrent.ForkJoinWorkerThread`          |
|  +92.5% |   +1.291s | 18.7% → 27.8% |     1.39s → 2.68s |    55 → 111 | `awaitWork(ForkJoinPool$WorkQueue)`              | `java.util.concurrent.ForkJoinPool`                  |
|  +14.7% | +896.54ms | 81.3% → 72.2% |     6.08s → 6.97s |     17 → 20 | `awaitDone(int, long)`                           | `java.util.concurrent.ForkJoinTask`                  |
|  +13.7% | +828.99ms | 81.2% → 71.4% |     6.07s → 6.90s |          16 | `get()`                                          | `java.util.concurrent.ForkJoinTask`                  |
|  +13.7% | +828.99ms | 81.2% → 71.4% |     6.07s → 6.90s |          16 | `map(Function1)`                                 | `scala.collection.immutable.Range`                   |
|  +13.7% | +828.99ms | 81.2% → 71.4% |     6.07s → 6.90s |          16 | `apply(Object)`                                  | `scala.runtime.function.JProcedure1`                 |
|  +13.7% | +828.99ms | 81.2% → 71.4% |     6.07s → 6.90s |          16 | `foreach(Function1)`                             | `scala.collection.immutable.List`                    |
|  +13.7% | +828.99ms | 81.2% → 71.4% |     6.07s → 6.90s |          16 | `invokeStatic(Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00` |
|  +13.7% | +828.99ms | 81.2% → 71.4% |     6.07s → 6.90s |          16 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001082400`  |
|  +13.7% | +828.99ms | 81.2% → 71.4% |     6.07s → 6.90s |          16 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                   |
|  +13.7% | +828.99ms | 81.2% → 71.4% |     6.07s → 6.90s |          16 | `invokeImpl(Object, Object[])`                   | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +13.7% | +828.99ms | 81.2% → 71.4% |     6.07s → 6.90s |          16 | `invoke(Object, Object[])`                       | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +13.7% | +828.99ms | 81.2% → 71.4% |     6.07s → 6.90s |          16 | `invoke(Object, Object[])`                       | `java.lang.reflect.Method`                           |
|  +86.7% | +207.53ms |   3.2% → 4.6% | 239.4ms → 446.9ms |     10 → 14 | `parkUntil(long)`                                | `java.util.concurrent.locks.LockSupport`             |
| +667.1% |  +67.56ms |   0.1% → 0.8% |   10.1ms → 77.7ms |       1 → 4 | `join()`                                         | `java.util.concurrent.ForkJoinTask`                  |
| +667.1% |  +67.56ms |   0.1% → 0.8% |   10.1ms → 77.7ms |       1 → 4 | `exec()`                                         | `java.util.concurrent.RecursiveTask`                 |
| +667.1% |  +67.56ms |   0.1% → 0.8% |   10.1ms → 77.7ms |       1 → 4 | `doExec()`                                       | `java.util.concurrent.ForkJoinTask`                  |

#### Improvements

Functions with the largest decrease in total time blocked in the function and all its callees.

|  Change |   Delta |            % |        Time | Contentions | Function                                                                                                               | Location                                    |
| ------: | ------: | -----------: | ----------: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| removed | -6.072s | 81.2% → 0.0% | 6.07s → 0ms |      16 → 0 | `$anonfun$1(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`   |
| removed | -6.072s | 81.2% → 0.0% | 6.07s → 0ms |      16 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `$anonfun$2(int)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |   Delta |             % |        Time | Contentions | Callee                | Location                                    |
| -----: | ------: | ------------: | ----------: | ----------: | --------------------- | ------------------------------------------- |
|    new | +6.901s | 0.0% → 100.0% | 0ms → 6.90s |      0 → 16 | `run(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |   Delta |             % |        Time | Contentions | Callee               | Location                                  |
| -----: | ------: | ------------: | ----------: | ----------: | -------------------- | ----------------------------------------- |
|    new | +6.901s | 0.0% → 100.0% | 0ms → 6.90s |      0 → 16 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

| Change |   Delta |      % |          Time | Contentions | Callee                | Location                   |
| -----: | ------: | -----: | ------------: | ----------: | --------------------- | -------------------------- |
| +27.4% | +1.980s | 100.0% | 7.23s → 9.22s |    62 → 117 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|  Change |    Delta |             % |            Time | Contentions | Callee                                   | Location                            |
| ------: | -------: | ------------: | --------------: | ----------: | ---------------------------------------- | ----------------------------------- |
|  +92.5% |  +1.291s | 99.3% → 97.2% |   1.39s → 2.68s |    55 → 111 | `awaitWork(ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool` |
| +667.1% | +67.56ms |   0.7% → 2.8% | 10.1ms → 77.7ms |       1 → 4 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

| Change |   Delta |      % |          Time | Contentions | Callee                              | Location                            |
| -----: | ------: | -----: | ------------: | ----------: | ----------------------------------- | ----------------------------------- |
| +96.6% | +1.359s | 100.0% | 1.40s → 2.76s |    56 → 115 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |     Delta |             % |              Time | Contentions | Callee            | Location                                 |
| -----: | --------: | ------------: | ----------------: | ----------: | ----------------- | ---------------------------------------- |
| +93.7% |   +1.084s | 82.9% → 83.4% |     1.15s → 2.24s |     45 → 97 | `park()`          | `java.util.concurrent.locks.LockSupport` |
| +86.7% | +207.53ms | 17.1% → 16.6% | 239.4ms → 446.9ms |     10 → 14 | `parkUntil(long)` | `java.util.concurrent.locks.LockSupport` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change |     Delta |      % |            Time | Contentions | Callee                                    | Location                                      |
| -----: | --------: | -----: | --------------: | ----------: | ----------------------------------------- | --------------------------------------------- |
| +14.7% | +896.54ms | 100.0% |   6.08s → 6.97s |     17 → 20 | `park()`                                  | `java.util.concurrent.locks.LockSupport`      |
| +53.1% |   +5.38ms |   0.2% | 10.1ms → 15.5ms |           1 | `tryRemoveAndExec(ForkJoinTask, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `get()` (`java.util.concurrent.ForkJoinTask`)

| Change |     Delta |      % |          Time | Contentions | Callee                 | Location                            |
| -----: | --------: | -----: | ------------: | ----------: | ---------------------- | ----------------------------------- |
| +13.7% | +828.99ms | 100.0% | 6.07s → 6.90s |          16 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |     Delta |      % |          Time | Contentions | Callee  | Location                            |
| -----: | --------: | -----: | ------------: | ----------: | ------- | ----------------------------------- |
| +13.7% | +828.99ms | 100.0% | 6.07s → 6.90s |          16 | `get()` | `java.util.concurrent.ForkJoinTask` |

##### `$anonfun$adapted$1(Object)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change |   Delta |             % |        Time | Contentions | Callee            | Location                                  |
| ------: | ------: | ------------: | ----------: | ----------: | ----------------- | ----------------------------------------- |
|     new | +6.901s | 0.0% → 100.0% | 0ms → 6.90s |      0 → 16 | `$anonfun$2(int)` | `org.renaissance.jdk.concurrent.FjKmeans` |
| removed | -6.072s | 100.0% → 0.0% | 6.07s → 0ms |      16 → 0 | `$anonfun$1(int)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011fdb90`)

| Change |     Delta |      % |          Time | Contentions | Callee                       | Location                                  |
| -----: | --------: | -----: | ------------: | ----------: | ---------------------------- | ----------------------------------------- |
| +13.7% | +828.99ms | 100.0% | 6.07s → 6.90s |          16 | `$anonfun$adapted$1(Object)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `map(Function1)` (`scala.collection.immutable.Range`)

| Change |     Delta |      % |          Time | Contentions | Callee          | Location                                                             |
| -----: | --------: | -----: | ------------: | ----------: | --------------- | -------------------------------------------------------------------- |
| +13.7% | +828.99ms | 100.0% | 6.07s → 6.90s |          16 | `apply(Object)` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011fdb90` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |     Delta |      % |          Time | Contentions | Callee           | Location                           |
| -----: | --------: | -----: | ------------: | ----------: | ---------------- | ---------------------------------- |
| +13.7% | +828.99ms | 100.0% | 6.07s → 6.90s |          16 | `map(Function1)` | `scala.collection.immutable.Range` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

| Change |     Delta |      % |          Time | Contentions | Callee                  | Location                                  |
| -----: | --------: | -----: | ------------: | ----------: | ----------------------- | ----------------------------------------- |
| +13.7% | +828.99ms | 100.0% | 6.07s → 6.90s |          16 | `run(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

| Change |     Delta |      % |          Time | Contentions | Callee                  | Location                                  |
| -----: | --------: | -----: | ------------: | ----------: | ----------------------- | ----------------------------------------- |
| +13.7% | +828.99ms | 100.0% | 6.07s → 6.90s |          16 | `executeOperation(int)` | `org.renaissance.harness.ExecutionDriver` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700117c3b8`)

|  Change |   Delta |             % |        Time | Contentions | Callee                                                                                                                 | Location                                    |
| ------: | ------: | ------------: | ----------: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
|     new | +6.901s | 0.0% → 100.0% | 0ms → 6.90s |      0 → 16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
| removed | -6.072s | 100.0% → 0.0% | 6.07s → 0ms |      16 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

| Change |     Delta |      % |          Time | Contentions | Callee              | Location                                                               |
| -----: | --------: | -----: | ------------: | ----------: | ------------------- | ---------------------------------------------------------------------- |
| +13.7% | +828.99ms | 100.0% | 6.07s → 6.90s |          16 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700117c3b8` |
| +13.7% | +828.99ms | 100.0% | 6.07s → 6.90s |          16 | `apply(Object)`     | `scala.runtime.function.JProcedure1`                                   |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

| Change |     Delta |      % |          Time | Contentions | Callee          | Location                             |
| -----: | --------: | -----: | ------------: | ----------: | --------------- | ------------------------------------ |
| +13.7% | +828.99ms | 100.0% | 6.07s → 6.90s |          16 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |     Delta |      % |          Time | Contentions | Callee               | Location                          |
| -----: | --------: | -----: | ------------: | ----------: | -------------------- | --------------------------------- |
| +13.7% | +828.99ms | 100.0% | 6.07s → 6.90s |          16 | `foreach(Function1)` | `scala.collection.immutable.List` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`)

| Change |     Delta |      % |          Time | Contentions | Callee           | Location                                   |
| -----: | --------: | -----: | ------------: | ----------: | ---------------- | ------------------------------------------ |
| +13.7% | +828.99ms | 100.0% | 6.07s → 6.90s |          16 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001082400`)

| Change |     Delta |      % |          Time | Contentions | Callee                         | Location                                             |
| -----: | --------: | -----: | ------------: | ----------: | ------------------------------ | ---------------------------------------------------- |
| +13.7% | +828.99ms | 100.0% | 6.07s → 6.90s |          16 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change |     Delta |      % |          Time | Contentions | Callee                           | Location                                            |
| -----: | --------: | -----: | ------------: | ----------: | -------------------------------- | --------------------------------------------------- |
| +13.7% | +828.99ms | 100.0% | 6.07s → 6.90s |          16 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001082400` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |     Delta |      % |          Time | Contentions | Callee                                           | Location                           |
| -----: | --------: | -----: | ------------: | ----------: | ------------------------------------------------ | ---------------------------------- |
| +13.7% | +828.99ms | 100.0% | 6.07s → 6.90s |          16 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |     Delta |      % |          Time | Contentions | Callee                         | Location                                          |
| -----: | --------: | -----: | ------------: | ----------: | ------------------------------ | ------------------------------------------------- |
| +13.7% | +828.99ms | 100.0% | 6.07s → 6.90s |          16 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

| Change |     Delta |      % |          Time | Contentions | Callee                     | Location                                          |
| -----: | --------: | -----: | ------------: | ----------: | -------------------------- | ------------------------------------------------- |
| +13.7% | +828.99ms | 100.0% | 6.07s → 6.90s |          16 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `parkUntil(long)` (`java.util.concurrent.locks.LockSupport`)

| Change |     Delta |      % |              Time | Contentions | Callee                | Location                   |
| -----: | --------: | -----: | ----------------: | ----------: | --------------------- | -------------------------- |
| +86.7% | +207.53ms | 100.0% | 239.4ms → 446.9ms |     10 → 14 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|  Change |    Delta |      % |            Time | Contentions | Callee                 | Location                            |
| ------: | -------: | -----: | --------------: | ----------: | ---------------------- | ----------------------------------- |
| +667.1% | +67.56ms | 100.0% | 10.1ms → 77.7ms |       1 → 4 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|  Change |    Delta |      % |            Time | Contentions | Callee      | Location                                               |
| ------: | -------: | -----: | --------------: | ----------: | ----------- | ------------------------------------------------------ |
| +667.1% | +67.56ms | 100.0% | 10.1ms → 77.7ms |       1 → 4 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|  Change |    Delta |            % |            Time | Contentions | Callee   | Location                                            |
| ------: | -------: | -----------: | --------------: | ----------: | -------- | --------------------------------------------------- |
| +667.1% | +67.56ms |       100.0% | 10.1ms → 77.7ms |       1 → 4 | `exec()` | `java.util.concurrent.RecursiveTask`                |
|     new | +17.09ms | 0.0% → 22.0% |    0ms → 17.1ms |       0 → 1 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `$anonfun$1(int)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change |   Delta |             % |        Time | Contentions | Callee                | Location                                    |
| ------: | ------: | ------------: | ----------: | ----------: | --------------------- | ------------------------------------------- |
| removed | -6.072s | 100.0% → 0.0% | 6.07s → 0ms |      16 → 0 | `run(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |   Delta |             % |        Time | Contentions | Callee               | Location                                  |
| ------: | ------: | ------------: | ----------: | ----------: | -------------------- | ----------------------------------------- |
| removed | -6.072s | 100.0% → 0.0% | 6.07s → 0ms |      16 → 0 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

# Sampling profile diff

Collected 1,473 samples → 1,360 samples (-113 samples, -7.7%).

| Category         | Change | Delta |             % |       Samples |
| ---------------- | -----: | ----: | ------------: | ------------: |
| Ours             |  -7.5% |   -98 | 89.1% → 89.3% | 1,313 → 1,215 |
| Standard library |  -9.4% |   -15 | 10.9% → 10.7% |     160 → 145 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |   Samples | Function                                             | Location                                                   |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------- | ---------------------------------------------------------- |
|  +10.9% |   +39 | 24.4% → 29.3% | 359 → 398 | `distance(Double[], Double[])`                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +12.0% |   +12 |   6.8% → 8.2% | 100 → 112 | `collectClusters(int[])`                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +19.4% |    +6 |   2.1% → 2.7% |   31 → 37 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                         |
|  +20.8% |    +5 |   1.6% → 2.1% |   24 → 29 | `computeDirectly()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     new |    +4 |   0.0% → 0.3% |     0 → 4 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                        |
| +300.0% |    +3 |   0.1% → 0.3% |     1 → 4 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `wrapSink(Sink)`                                     | `java.util.stream.AbstractPipeline`                        |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                        |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                                        |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `push(ForkJoinTask, ForkJoinPool, boolean)`          | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `write0(FileDescriptor, long, int)`                  | `sun.nio.ch.UnixFileDispatcherImpl`                        |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `park(boolean, long)`                                | `jdk.internal.misc.Unsafe`                                 |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `average(List)`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `signalWaiters()`                                    | `java.util.concurrent.ForkJoinTask`                        |
| +100.0% |    +1 |          0.1% |     1 → 2 | `awaitWork(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                        |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `generateInnerClass()`                               | `java.lang.invoke.InnerClassLambdaMetafactory`             |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `hasTasks(boolean)`                                  | `java.util.concurrent.ForkJoinPool`                        |

##### Ours

| Change | Delta |             % |   Samples | Function                       | Location                                                   |
| -----: | ----: | ------------: | --------: | ------------------------------ | ---------------------------------------------------------- |
| +10.9% |   +39 | 24.4% → 29.3% | 359 → 398 | `distance(Double[], Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +12.0% |   +12 |   6.8% → 8.2% | 100 → 112 | `collectClusters(int[])`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +20.8% |    +5 |   1.6% → 2.1% |   24 → 29 | `computeDirectly()`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    new |    +1 |   0.0% → 0.1% |     0 → 1 | `compute()`                    | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|    new |    +1 |   0.0% → 0.1% |     0 → 1 | `average(List)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

##### Standard library

|  Change | Delta |           % | Samples | Function                                             | Location                                       |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------- | ---------------------------------------------- |
|  +19.4% |    +6 | 2.1% → 2.7% | 31 → 37 | `copyOf(Object[], int)`                              | `java.util.Arrays`                             |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`            |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`  |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `wrapSink(Sink)`                                     | `java.util.stream.AbstractPipeline`            |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `join()`                                             | `java.util.concurrent.ForkJoinTask`            |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`  |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                            |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `push(ForkJoinTask, ForkJoinPool, boolean)`          | `java.util.concurrent.ForkJoinPool$WorkQueue`  |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `write0(FileDescriptor, long, int)`                  | `sun.nio.ch.UnixFileDispatcherImpl`            |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `park(boolean, long)`                                | `jdk.internal.misc.Unsafe`                     |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `signalWaiters()`                                    | `java.util.concurrent.ForkJoinTask`            |
| +100.0% |    +1 |        0.1% |   1 → 2 | `awaitWork(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`            |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `generateInnerClass()`                               | `java.lang.invoke.InnerClassLambdaMetafactory` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `hasTasks(boolean)`                                  | `java.util.concurrent.ForkJoinPool`            |

#### Improvements

Functions with the largest decrease in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |   Samples | Function                                                  | Location                                                   |
| ------: | ----: | ------------: | --------: | --------------------------------------------------------- | ---------------------------------------------------------- |
|  -93.7% |   -74 |   5.4% → 0.4% |    79 → 5 | `vectorSum()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -11.8% |   -66 | 37.8% → 36.1% | 557 → 491 | `accumulate(Double[], double[])`                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -5.3% |   -10 | 12.7% → 13.0% | 187 → 177 | `findNearestCentroid()`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -69.2% |    -9 |   0.9% → 0.3% |    13 → 4 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                        |
|  -13.2% |    -9 |   4.6% → 4.3% |   68 → 59 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                                        |
|  -44.4% |    -4 |   0.6% → 0.4% |     9 → 5 | `grow(int)`                                               | `java.util.ArrayList`                                      |
| removed |    -3 |   0.2% → 0.0% |     3 → 0 | `accept(Object)`                                          | `java.util.stream.ReduceOps$3ReducingSink`                 |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `<init>(Map)`                                             | `java.util.HashMap`                                        |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `merge(Map, Map)`                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -66.7% |    -2 |   0.2% → 0.1% |     3 → 1 | `lambda$merge$7(Map, Object, List)`                       | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `<init>(HashMap)`                                         | `java.util.HashMap$HashIterator`                           |
|  -66.7% |    -2 |   0.2% → 0.1% |     3 → 1 | `nextNode()`                                              | `java.util.HashMap$HashIterator`                           |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `readBytes0(byte[], int, int)`                            | `java.io.RandomAccessFile`                                 |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `findEntry0(long, String)`                                | `jdk.internal.loader.NativeLibrary`                        |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `toList()`                                                | `java.util.stream.Collectors`                              |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `allocateInstance(Class)`                                 | `jdk.internal.misc.Unsafe`                                 |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                        |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                        |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `hashCode()`                                              | `java.lang.Object`                                         |
|  -50.0% |    -1 |          0.1% |     2 → 1 | `hash(Object)`                                            | `java.util.HashMap`                                        |

##### Ours

|  Change | Delta |             % |   Samples | Function                            | Location                                                                              |
| ------: | ----: | ------------: | --------: | ----------------------------------- | ------------------------------------------------------------------------------------- |
|  -93.7% |   -74 |   5.4% → 0.4% |    79 → 5 | `vectorSum()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  -11.8% |   -66 | 37.8% → 36.1% | 557 → 491 | `accumulate(Double[], double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   -5.3% |   -10 | 12.7% → 13.0% | 187 → 177 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `merge(Map, Map)`                   | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  -66.7% |    -2 |   0.2% → 0.1% |     3 → 1 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `lambda$run$0(int, List, int)`      | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `apply(Object)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000009001204b38` |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                  | Location                                   |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------- | ------------------------------------------ |
|  -69.2% |    -9 | 0.9% → 0.3% |  13 → 4 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`        |
|  -13.2% |    -9 | 4.6% → 4.3% | 68 → 59 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                        |
|  -44.4% |    -4 | 0.6% → 0.4% |   9 → 5 | `grow(int)`                                               | `java.util.ArrayList`                      |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `accept(Object)`                                          | `java.util.stream.ReduceOps$3ReducingSink` |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `<init>(Map)`                                             | `java.util.HashMap`                        |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `<init>(HashMap)`                                         | `java.util.HashMap$HashIterator`           |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `nextNode()`                                              | `java.util.HashMap$HashIterator`           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `readBytes0(byte[], int, int)`                            | `java.io.RandomAccessFile`                 |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `findEntry0(long, String)`                                | `jdk.internal.loader.NativeLibrary`        |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `toList()`                                                | `java.util.stream.Collectors`              |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `allocateInstance(Class)`                                 | `jdk.internal.misc.Unsafe`                 |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`        |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`        |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `hashCode()`                                              | `java.lang.Object`                         |
|  -50.0% |    -1 |        0.1% |   2 → 1 | `hash(Object)`                                            | `java.util.HashMap`                        |
|  -33.3% |    -1 | 0.2% → 0.1% |   3 → 2 | `unpark(Object)`                                          | `jdk.internal.misc.Unsafe`                 |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `resize()`                                                | `java.util.HashMap`                        |
|  -50.0% |    -1 |        0.1% |   2 → 1 | `putVal(int, Object, Object, boolean, boolean)`           | `java.util.HashMap`                        |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `boxed()`                                                 | `java.util.stream.DoublePipeline`          |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `accept(double)`                                          | `java.util.stream.DoublePipeline$1$1`      |

#### Lines

Lines with the largest change in contribution to each function's self samples.

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Location                                                       |
| -----: | ----: | -----: | --------: | -------------------------------------------------------------- |
| +10.9% |   +39 | 100.0% | 359 → 398 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:248` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % | Samples | Location                                                       |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------- |
| +13.1% |    +8 | 61.0% → 61.6% | 61 → 69 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |
| +10.3% |    +4 | 39.0% → 38.4% | 39 → 43 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:211` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change | Delta |      % | Samples | Location                |
| -----: | ----: | -----: | ------: | ----------------------- |
| +19.4% |    +6 | 100.0% | 31 → 37 | `java.util.Arrays:3482` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % | Samples | Location                                                       |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------- |
| +20.8% |    +5 | 100.0% | 24 → 29 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:204` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |            % | Samples | Location                                 |
| -----: | ----: | -----------: | ------: | ---------------------------------------- |
|    new |    +3 | 0.0% → 75.0% |   0 → 3 | `java.util.concurrent.ForkJoinPool:1834` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `java.util.concurrent.ForkJoinPool:1837` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |              % | Samples | Location                                           |
| ------: | ----: | -------------: | ------: | -------------------------------------------------- |
| +200.0% |    +2 | 100.0% → 75.0% |   1 → 3 | `java.util.concurrent.ForkJoinPool$WorkQueue:1347` |
|     new |    +1 |   0.0% → 25.0% |   0 → 1 | `java.util.concurrent.ForkJoinPool$WorkQueue:1332` |

##### `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`)

|  Change | Delta |      % | Samples | Location                                |
| ------: | ----: | -----: | ------: | --------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `java.util.stream.AbstractPipeline:546` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % | Samples | Location                                |
| -----: | ----: | ------------: | ------: | --------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `java.util.concurrent.ForkJoinTask:651` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |             % | Samples | Location                                           |
| -----: | ----: | ------------: | ------: | -------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `java.util.concurrent.ForkJoinPool$WorkQueue:1312` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|  Change | Delta |      % | Samples | Location                 |
| ------: | ----: | -----: | ------: | ------------------------ |
| +200.0% |    +2 | 100.0% |   1 → 3 | `java.util.HashMap:1384` |

##### `push(ForkJoinTask, ForkJoinPool, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |      % | Samples | Location                                           |
| ------: | ----: | -----: | ------: | -------------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `java.util.concurrent.ForkJoinPool$WorkQueue:1156` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |             % | Samples | Location                                                   |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask:146` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |             % | Samples | Location                                                   |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:334` |

##### `signalWaiters()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % | Samples | Location                                |
| -----: | ----: | ------------: | ------: | --------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.concurrent.ForkJoinTask:302` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |      % | Samples | Location                                 |
| ------: | ----: | -----: | ------: | ---------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `java.util.concurrent.ForkJoinPool:1881` |

##### `generateInnerClass()` (`java.lang.invoke.InnerClassLambdaMetafactory`)

| Change | Delta |             % | Samples | Location                                           |
| -----: | ----: | ------------: | ------: | -------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.lang.invoke.InnerClassLambdaMetafactory:334` |

##### `hasTasks(boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % | Samples | Location                                 |
| -----: | ----: | ------------: | ------: | ---------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.concurrent.ForkJoinPool:1784` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |              % | Samples | Location                                                      |
| ------: | ----: | -------------: | ------: | ------------------------------------------------------------- |
| removed |   -52 |   65.8% → 0.0% |  52 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400` |
| removed |   -15 |   19.0% → 0.0% |  15 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:402` |
|  -58.3% |    -7 | 15.2% → 100.0% |  12 → 5 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:403` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Location                                                      |
| -----: | ----: | -----: | --------: | ------------------------------------------------------------- |
| -11.8% |   -66 | 100.0% | 557 → 491 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:411` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % |   Samples | Location                                                       |
| ------: | ----: | ------------: | --------: | -------------------------------------------------------------- |
|  -38.1% |    -8 |  11.2% → 7.3% |   21 → 13 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:225` |
|  -75.0% |    -6 |   4.3% → 1.1% |     8 → 2 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:230` |
|   +3.2% |    +5 | 84.0% → 91.5% | 157 → 162 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:229` |
| removed |    -1 |   0.5% → 0.0% |     1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:226` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------------------------------- |
|  -62.5% |    -5 | 61.5% → 75.0% |   8 → 3 | `java.util.concurrent.ForkJoinPool:2053` |
| removed |    -4 |  30.8% → 0.0% |   4 → 0 | `java.util.concurrent.ForkJoinPool:2058` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Location                 |
| -----: | ----: | ------------: | ------: | ------------------------ |
| -13.6% |    -9 | 97.1% → 96.6% | 66 → 57 | `java.util.HashMap:1219` |

##### `grow(int)` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Location                  |
| -----: | ----: | -----: | ------: | ------------------------- |
| -44.4% |    -4 | 100.0% |   9 → 5 | `java.util.ArrayList:239` |

##### `accept(Object)` (`java.util.stream.ReduceOps$3ReducingSink`)

|  Change | Delta |             % | Samples | Location                                       |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `java.util.stream.ReduceOps$3ReducingSink:169` |

##### `<init>(Map)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `java.util.HashMap:492` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % | Samples | Location                                        |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans:110` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % | Samples | Location                                        |
| -----: | ----: | -----: | ------: | ----------------------------------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans:112` |

##### `<init>(HashMap)` (`java.util.HashMap$HashIterator`)

|  Change | Delta |             % | Samples | Location                              |
| ------: | ----: | ------------: | ------: | ------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `java.util.HashMap$HashIterator:1593` |

##### `nextNode()` (`java.util.HashMap$HashIterator`)

| Change | Delta |      % | Samples | Location                              |
| -----: | ----: | -----: | ------: | ------------------------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `java.util.HashMap$HashIterator:1609` |

##### `toList()` (`java.util.stream.Collectors`)

|  Change | Delta |             % | Samples | Location                          |
| ------: | ----: | ------------: | ------: | --------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.stream.Collectors:243` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % | Samples | Location                                |
| ------: | ----: | ------------: | ------: | --------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinTask:437` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinPool:1808` |

##### `hash(Object)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Location                |
| -----: | ----: | -----: | ------: | ----------------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `java.util.HashMap:338` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % | Samples | Location                                       |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans:59` |

##### `resize()` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.HashMap:741` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Location                |
| -----: | ----: | -----: | ------: | ----------------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `java.util.HashMap:635` |

##### `boxed()` (`java.util.stream.DoublePipeline`)

|  Change | Delta |             % | Samples | Location                              |
| ------: | ----: | ------------: | ------: | ------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.stream.DoublePipeline:199` |

##### `accept(double)` (`java.util.stream.DoublePipeline$1$1`)

|  Change | Delta |             % | Samples | Location                                  |
| ------: | ----: | ------------: | ------: | ----------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.stream.DoublePipeline$1$1:176` |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller                  | Location                                                   |
| -----: | ----: | -----: | --------: | ----------------------- | ---------------------------------------------------------- |
| +10.9% |   +39 | 100.0% | 359 → 398 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | --------: | ------------------- | ---------------------------------------------------------- |
| +12.0% |   +12 | 100.0% | 100 → 112 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change | Delta |             % | Samples | Caller      | Location              |
| -----: | ----: | ------------: | ------: | ----------- | --------------------- |
| +28.0% |    +7 | 80.6% → 86.5% | 25 → 32 | `grow(int)` | `java.util.ArrayList` |
| -16.7% |    -1 | 19.4% → 13.5% |   6 → 5 | `toArray()` | `java.util.ArrayList` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % | Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | ------: | ------------------- | ---------------------------------------------------------- |
| +20.8% |    +5 | 100.0% | 24 → 29 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % | Samples | Caller                              | Location                            |
| -----: | ----: | ------------: | ------: | ----------------------------------- | ----------------------------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |      % | Samples | Caller                 | Location                            |
| ------: | ----: | -----: | ------: | ---------------------- | ----------------------------------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`)

|  Change | Delta |      % | Samples | Caller                               | Location                            |
| ------: | ----: | -----: | ------: | ------------------------------------ | ----------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % | Samples | Caller      | Location                                               |
| -----: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |             % | Samples | Caller                                   | Location                            |
| -----: | ----: | ------------: | ------: | ---------------------------------------- | ----------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|  Change | Delta |      % | Samples | Caller                              | Location                                    |
| ------: | ----: | -----: | ------: | ----------------------------------- | ------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `push(ForkJoinTask, ForkJoinPool, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |      % | Samples | Caller   | Location                            |
| ------: | ----: | -----: | ------: | -------- | ----------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `fork()` | `java.util.concurrent.ForkJoinTask` |

##### `write0(FileDescriptor, long, int)` (`sun.nio.ch.UnixFileDispatcherImpl`)

| Change | Delta |             % | Samples | Caller                             | Location                            |
| -----: | ----: | ------------: | ------: | ---------------------------------- | ----------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `write(FileDescriptor, long, int)` | `sun.nio.ch.UnixFileDispatcherImpl` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

| Change | Delta |             % | Samples | Caller   | Location                                 |
| -----: | ----: | ------------: | ------: | -------- | ---------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `park()` | `java.util.concurrent.locks.LockSupport` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |             % | Samples | Caller   | Location                             |
| -----: | ----: | ------------: | ------: | -------- | ------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |             % | Samples | Caller                     | Location                                               |
| -----: | ----: | ------------: | ------: | -------------------------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `signalWaiters()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % | Samples | Caller      | Location                            |
| -----: | ----: | ------------: | ------: | ----------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `setDone()` | `java.util.concurrent.ForkJoinTask` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |      % | Samples | Caller                              | Location                            |
| ------: | ----: | -----: | ------: | ----------------------------------- | ----------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `generateInnerClass()` (`java.lang.invoke.InnerClassLambdaMetafactory`)

| Change | Delta |             % | Samples | Caller             | Location                                       |
| -----: | ----: | ------------: | ------: | ------------------ | ---------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `spinInnerClass()` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `hasTasks(boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % | Samples | Caller                              | Location                            |
| -----: | ----: | ------------: | ------: | ----------------------------------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `awaitWork(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % | Samples | Caller              | Location                                                  |
| -----: | ----: | -----: | ------: | ------------------- | --------------------------------------------------------- |
| -93.7% |   -74 | 100.0% |  79 → 5 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Caller        | Location                                                  |
| -----: | ----: | -----: | --------: | ------------- | --------------------------------------------------------- |
| -11.8% |   -66 | 100.0% | 557 → 491 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | --------: | ------------------- | ---------------------------------------------------------- |
|  -5.3% |   -10 | 100.0% | 187 → 177 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % | Samples | Caller                 | Location                            |
| -----: | ----: | -----: | ------: | ---------------------- | ----------------------------------- |
| -69.2% |    -9 | 100.0% |  13 → 4 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|  Change | Delta |              % | Samples | Caller                   | Location                                                               |
| ------: | ----: | -------------: | ------: | ------------------------ | ---------------------------------------------------------------------- |
|  -11.9% |    -8 | 98.5% → 100.0% | 67 → 59 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed |    -1 |    1.5% → 0.0% |   1 → 0 | `apply(Object, Object)`  | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000009001205220` |

##### `grow(int)` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Caller   | Location              |
| -----: | ----: | -----: | ------: | -------- | --------------------- |
| -44.4% |    -4 | 100.0% |   9 → 5 | `grow()` | `java.util.ArrayList` |

##### `accept(Object)` (`java.util.stream.ReduceOps$3ReducingSink`)

|  Change | Delta |             % | Samples | Caller        | Location                           |
| ------: | ----: | ------------: | ------: | ------------- | ---------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `accept(int)` | `java.util.stream.IntPipeline$1$1` |

##### `<init>(Map)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Caller            | Location                                    |
| ------: | ----: | ------------: | ------: | ----------------- | ------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % | Samples | Caller                     | Location                                                   |
| ------: | ----: | ------------: | ------: | -------------------------- | ---------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % | Samples | Caller                   | Location                                                               |
| -----: | ----: | -----: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121ef30` |

##### `<init>(HashMap)` (`java.util.HashMap$HashIterator`)

|  Change | Delta |             % | Samples | Caller            | Location                          |
| ------: | ----: | ------------: | ------: | ----------------- | --------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `<init>(HashMap)` | `java.util.HashMap$EntryIterator` |

##### `nextNode()` (`java.util.HashMap$HashIterator`)

| Change | Delta |      % | Samples | Caller   | Location                          |
| -----: | ----: | -----: | ------: | -------- | --------------------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `next()` | `java.util.HashMap$EntryIterator` |

##### `readBytes0(byte[], int, int)` (`java.io.RandomAccessFile`)

|  Change | Delta |             % | Samples | Caller                        | Location                   |
| ------: | ----: | ------------: | ------: | ----------------------------- | -------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `readBytes(byte[], int, int)` | `java.io.RandomAccessFile` |

##### `findEntry0(long, String)` (`jdk.internal.loader.NativeLibrary`)

|  Change | Delta |             % | Samples | Caller         | Location                                                |
| ------: | ----: | ------------: | ------: | -------------- | ------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `find(String)` | `jdk.internal.loader.NativeLibraries$NativeLibraryImpl` |

##### `toList()` (`java.util.stream.Collectors`)

|  Change | Delta |             % | Samples | Caller             | Location                                                     |
| ------: | ----: | ------------: | ------: | ------------------ | ------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getMBeans(Class)` | `sun.management.spi.PlatformMBeanProvider$PlatformComponent` |

##### `allocateInstance(Class)` (`jdk.internal.misc.Unsafe`)

|  Change | Delta |             % | Samples | Caller                     | Location                              |
| ------: | ----: | ------------: | ------: | -------------------------- | ------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `allocateInstance(Object)` | `java.lang.invoke.DirectMethodHandle` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % | Samples | Caller   | Location                            |
| ------: | ----: | ------------: | ------: | -------- | ----------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Caller  | Location                                    |
| ------: | ----: | ------------: | ------: | ------- | ------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `hashCode()` (`java.lang.Object`)

|  Change | Delta |             % | Samples | Caller         | Location            |
| ------: | ----: | ------------: | ------: | -------------- | ------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `hash(Object)` | `java.util.HashMap` |

##### `hash(Object)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Caller                              | Location            |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ------------------- |
| removed |    -1 |  50.0% → 0.0% |   1 → 0 | `putMapEntries(Map, boolean)`       | `java.util.HashMap` |
| removed |    -1 |  50.0% → 0.0% |   1 → 0 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % | Samples | Caller   | Location                                                               |
| ------: | ----: | ------------: | ------: | -------- | ---------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121df70` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000009001204b38`)

|  Change | Delta |             % | Samples | Caller                              | Location            |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |

##### `unpark(Object)` (`jdk.internal.misc.Unsafe`)

| Change | Delta |      % | Samples | Caller           | Location                                 |
| -----: | ----: | -----: | ------: | ---------------- | ---------------------------------------- |
| -33.3% |    -1 | 100.0% |   3 → 2 | `unpark(Thread)` | `java.util.concurrent.locks.LockSupport` |

##### `resize()` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Caller                                          | Location            |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | ------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller                        | Location            |
| -----: | ----: | -----: | ------: | ----------------------------- | ------------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `boxed()` (`java.util.stream.DoublePipeline`)

|  Change | Delta |             % | Samples | Caller            | Location                                               |
| ------: | ----: | ------------: | ------: | ----------------- | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `boxed(double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `accept(double)` (`java.util.stream.DoublePipeline$1$1`)

|  Change | Delta |             % | Samples | Caller                             | Location                                        |
| ------: | ----: | ------------: | ------: | ---------------------------------- | ----------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `forEachRemaining(DoubleConsumer)` | `java.util.Spliterators$DoubleArraySpliterator` |

### Total samples

#### Regressions

Functions with the largest increase in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |   Samples | Function                                                                                                               | Location                                                               |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|   +5.3% |   +41 | 52.4% → 59.8% | 772 → 813 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  +10.9% |   +39 | 24.4% → 29.3% | 359 → 398 | `distance(Double[], Double[])`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   +5.3% |   +29 | 37.1% → 42.3% | 546 → 575 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   +3.5% |   +14 | 26.9% → 30.1% | 396 → 410 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`                                                              | `java.util.concurrent.ForkJoinPool`                                    |
|  +34.8% |    +8 |   1.6% → 2.3% |   23 → 31 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121df70` |
|  +42.1% |    +8 |   1.3% → 2.0% |   19 → 27 | `exec()`                                                                                                               | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                    |
|   +3.5% |    +7 | 13.7% → 15.4% | 202 → 209 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  +19.4% |    +6 |   2.1% → 2.7% |   31 → 37 | `copyOf(Object[], int)`                                                                                                | `java.util.Arrays`                                                     |
|     new |    +6 |   0.0% → 0.4% |     0 → 6 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +19.2% |    +5 |   1.8% → 2.3% |   26 → 31 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   +8.8% |    +3 |   2.3% → 2.7% |   34 → 37 | `grow(int)`                                                                                                            | `java.util.ArrayList`                                                  |
|   +8.8% |    +3 |   2.3% → 2.7% |   34 → 37 | `grow()`                                                                                                               | `java.util.ArrayList`                                                  |
|   +8.8% |    +3 |   2.3% → 2.7% |   34 → 37 | `add(Object, Object[], int)`                                                                                           | `java.util.ArrayList`                                                  |
|   +8.8% |    +3 |   2.3% → 2.7% |   34 → 37 | `add(Object)`                                                                                                          | `java.util.ArrayList`                                                  |
| +150.0% |    +3 |   0.1% → 0.4% |     2 → 5 | `awaitWork(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`                                    |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `wrapSink(Sink)`                                                                                                       | `java.util.stream.AbstractPipeline`                                    |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `push(ForkJoinTask, ForkJoinPool, boolean)`                                                                            | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `fork()`                                                                                                               | `java.util.concurrent.ForkJoinTask`                                    |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `write0(FileDescriptor, long, int)`                                                                                    | `sun.nio.ch.UnixFileDispatcherImpl`                                    |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `write(FileDescriptor, long, int)`                                                                                     | `sun.nio.ch.UnixFileDispatcherImpl`                                    |

##### Ours

| Change | Delta |             % |   Samples | Function                                                                                                               | Location                                                               |
| -----: | ----: | ------------: | --------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|  +5.3% |   +41 | 52.4% → 59.8% | 772 → 813 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| +10.9% |   +39 | 24.4% → 29.3% | 359 → 398 | `distance(Double[], Double[])`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  +5.3% |   +29 | 37.1% → 42.3% | 546 → 575 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| +34.8% |    +8 |   1.6% → 2.3% |   23 → 31 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121df70` |
|  +3.5% |    +7 | 13.7% → 15.4% | 202 → 209 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|    new |    +6 |   0.0% → 0.4% |     0 → 6 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
| +19.2% |    +5 |   1.8% → 2.3% |   26 → 31 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| +33.3% |    +1 |   0.2% → 0.3% |     3 → 4 | `extractResource(String, Path)`                                                                                        | `org.renaissance.core.ResourceUtils`                                   |
| +33.3% |    +1 |   0.2% → 0.3% |     3 → 4 | `extractResources(Iterable, Path)`                                                                                     | `org.renaissance.core.ResourceUtils`                                   |
| +25.0% |    +1 |   0.3% → 0.4% |     4 → 5 | `createClassLoaderForModule(String)`                                                                                   | `org.renaissance.core.ModuleLoader`                                    |
| +50.0% |    +1 |   0.1% → 0.2% |     2 → 3 | `lambda$generateData$5(int, int, Random[], int)`                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| +50.0% |    +1 |   0.1% → 0.2% |     2 → 3 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121d4f0` |
|    new |    +1 |   0.0% → 0.1% |     0 → 1 | `getLogLevel()`                                                                                                        | `org.renaissance.core.Logging`                                         |
|    new |    +1 |   0.0% → 0.1% |     0 → 1 | `createRootLogger()`                                                                                                   | `org.renaissance.core.Logging`                                         |
|    new |    +1 |   0.0% → 0.1% |     0 → 1 | `<clinit>()`                                                                                                           | `org.renaissance.core.Logging`                                         |
|    new |    +1 |   0.0% → 0.1% |     0 → 1 | `<clinit>()`                                                                                                           | `org.renaissance.core.Launcher`                                        |
|    new |    +1 |   0.0% → 0.1% |     0 → 1 | `rowToArray$1(Map)`                                                                                                    | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|    new |    +1 |   0.0% → 0.1% |     0 → 1 | `setUpBeforeAll$$anonfun$1(Map)`                                                                                       | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|    new |    +1 |   0.0% → 0.1% |     0 → 1 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000003011a2908`   |
|    new |    +1 |   0.0% → 0.1% |     0 → 1 | `lambda$toCsvRows$2(String[], Function, String)`                                                                       | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`     |

##### Standard library

|  Change | Delta |             % |   Samples | Function                                                                                           | Location                                            |
| ------: | ----: | ------------: | --------: | -------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
|   +3.5% |   +14 | 26.9% → 30.1% | 396 → 410 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`                                          | `java.util.concurrent.ForkJoinPool`                 |
|  +42.1% |    +8 |   1.3% → 2.0% |   19 → 27 | `exec()`                                                                                           | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  +19.4% |    +6 |   2.1% → 2.7% |   31 → 37 | `copyOf(Object[], int)`                                                                            | `java.util.Arrays`                                  |
|   +8.8% |    +3 |   2.3% → 2.7% |   34 → 37 | `grow(int)`                                                                                        | `java.util.ArrayList`                               |
|   +8.8% |    +3 |   2.3% → 2.7% |   34 → 37 | `grow()`                                                                                           | `java.util.ArrayList`                               |
|   +8.8% |    +3 |   2.3% → 2.7% |   34 → 37 | `add(Object, Object[], int)`                                                                       | `java.util.ArrayList`                               |
|   +8.8% |    +3 |   2.3% → 2.7% |   34 → 37 | `add(Object)`                                                                                      | `java.util.ArrayList`                               |
| +150.0% |    +3 |   0.1% → 0.4% |     2 → 5 | `awaitWork(ForkJoinPool$WorkQueue)`                                                                | `java.util.concurrent.ForkJoinPool`                 |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `wrapSink(Sink)`                                                                                   | `java.util.stream.AbstractPipeline`                 |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `push(ForkJoinTask, ForkJoinPool, boolean)`                                                        | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `fork()`                                                                                           | `java.util.concurrent.ForkJoinTask`                 |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `write0(FileDescriptor, long, int)`                                                                | `sun.nio.ch.UnixFileDispatcherImpl`                 |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `write(FileDescriptor, long, int)`                                                                 | `sun.nio.ch.UnixFileDispatcherImpl`                 |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `writeFromNativeBuffer(FileDescriptor, ByteBuffer, long, boolean, boolean, int, NativeDispatcher)` | `sun.nio.ch.IOUtil`                                 |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `write(FileDescriptor, ByteBuffer, long, boolean, boolean, int, NativeDispatcher)`                 | `sun.nio.ch.IOUtil`                                 |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `write(FileDescriptor, ByteBuffer, long, boolean, int, NativeDispatcher)`                          | `sun.nio.ch.IOUtil`                                 |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `write(ByteBuffer)`                                                                                | `sun.nio.ch.FileChannelImpl`                        |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `writeFully(ByteBuffer)`                                                                           | `sun.nio.ch.ChannelOutputStream`                    |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `write(byte[], int, int)`                                                                          | `sun.nio.ch.ChannelOutputStream`                    |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `park(boolean, long)`                                                                              | `jdk.internal.misc.Unsafe`                          |

#### Improvements

Functions with the largest decrease in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

| Change | Delta |             % |       Samples | Function                                             | Location                                                   |
| -----: | ----: | ------------: | ------------: | ---------------------------------------------------- | ---------------------------------------------------------- |
| -15.6% |  -186 | 81.1% → 74.1% | 1,194 → 1,008 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| -14.3% |  -165 | 78.5% → 72.9% |   1,156 → 991 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                        |
| -13.7% |  -158 | 78.1% → 72.9% |   1,150 → 992 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                        |
| -12.8% |  -142 | 75.5% → 71.3% |   1,112 → 970 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                |
| -22.0% |  -140 | 43.2% → 36.5% |     636 → 496 | `vectorSum()`                                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| -22.0% |  -140 | 43.2% → 36.5% |     636 → 496 | `computeDirectly()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -8.1% |  -118 | 98.9% → 98.5% | 1,457 → 1,339 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                        |
|  -8.3% |  -118 | 96.4% → 95.7% | 1,420 → 1,302 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                        |
|  -8.3% |  -118 | 96.4% → 95.7% | 1,420 → 1,302 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                        |
|  -8.3% |  -117 | 95.7% → 95.0% | 1,409 → 1,292 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|  -7.9% |  -115 | 98.6% → 98.3% | 1,452 → 1,337 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|  -7.9% |  -115 | 98.6% → 98.3% | 1,452 → 1,337 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                       |
| -11.8% |   -66 | 37.8% → 36.1% |     557 → 491 | `accumulate(Double[], double[])`                     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| -26.9% |   -64 | 16.2% → 12.8% |     238 → 174 | `computeDirectly()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| -22.4% |   -55 | 16.6% → 14.0% |     245 → 190 | `computeClusterAverages()`                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| -21.8% |   -53 | 16.5% → 14.0% |     243 → 190 | `average(List)`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| -18.4% |   -48 | 17.7% → 15.7% |     261 → 213 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                        |
| -56.0% |   -14 |   1.7% → 0.8% |       25 → 11 | `merge(Map, Map)`                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| -56.0% |   -14 |   1.7% → 0.8% |       25 → 11 | `combineResults(Map, Map)`                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -56.0% |   -14 |   1.7% → 0.8% |       25 → 11 | `combineResults(Object, Object)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### Ours

|  Change | Delta |             % |       Samples | Function                                                                                                               | Location                                                               |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|  -22.0% |  -140 | 43.2% → 36.5% |     636 → 496 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -22.0% |  -140 | 43.2% → 36.5% |     636 → 496 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   -7.9% |  -115 | 98.6% → 98.3% | 1,452 → 1,337 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  -11.8% |   -66 | 37.8% → 36.1% |     557 → 491 | `accumulate(Double[], double[])`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -26.9% |   -64 | 16.2% → 12.8% |     238 → 174 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -22.4% |   -55 | 16.6% → 14.0% |     245 → 190 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -21.8% |   -53 | 16.5% → 14.0% |     243 → 190 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -56.0% |   -14 |   1.7% → 0.8% |       25 → 11 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -56.0% |   -14 |   1.7% → 0.8% |       25 → 11 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -56.0% |   -14 |   1.7% → 0.8% |       25 → 11 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed |    -7 |   0.5% → 0.0% |         7 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -40.0% |    -4 |   0.7% → 0.4% |        10 → 6 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -40.0% |    -4 |   0.7% → 0.4% |        10 → 6 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|  -25.0% |    -3 |   0.8% → 0.7% |        12 → 9 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
|  -25.0% |    -3 |   0.8% → 0.7% |        12 → 9 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
|  -25.0% |    -3 |   0.8% → 0.7% |        12 → 9 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
|  -25.0% |    -2 |   0.5% → 0.4% |         8 → 6 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -40.0% |    -2 |   0.3% → 0.2% |         5 → 3 | `generateData(int, int, int)`                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -18.2% |    -2 |          0.7% |        11 → 9 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -18.2% |    -2 |          0.7% |        11 → 9 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121ef30` |

##### Standard library

|  Change | Delta |             % |       Samples | Function                                             | Location                                             |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------- | ---------------------------------------------------- |
|  -15.6% |  -186 | 81.1% → 74.1% | 1,194 → 1,008 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|  -14.3% |  -165 | 78.5% → 72.9% |   1,156 → 991 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                  |
|  -13.7% |  -158 | 78.1% → 72.9% |   1,150 → 992 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                  |
|  -12.8% |  -142 | 75.5% → 71.3% |   1,112 → 970 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`          |
|   -8.1% |  -118 | 98.9% → 98.5% | 1,457 → 1,339 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                  |
|   -8.3% |  -118 | 96.4% → 95.7% | 1,420 → 1,302 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                  |
|   -8.3% |  -118 | 96.4% → 95.7% | 1,420 → 1,302 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                  |
|   -8.3% |  -117 | 95.7% → 95.0% | 1,409 → 1,292 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|   -7.9% |  -115 | 98.6% → 98.3% | 1,452 → 1,337 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                 |
|  -18.4% |   -48 | 17.7% → 15.7% |     261 → 213 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                  |
|  -83.3% |   -10 |   0.8% → 0.1% |        12 → 2 | `<init>(Map)`                                        | `java.util.HashMap`                                  |
|  -81.8% |    -9 |   0.7% → 0.1% |        11 → 2 | `putMapEntries(Map, boolean)`                        | `java.util.HashMap`                                  |
|  -13.0% |    -9 |   4.7% → 4.4% |       69 → 60 | `computeIfAbsent(Object, Function)`                  | `java.util.HashMap`                                  |
|  -40.0% |    -4 |   0.7% → 0.4% |        10 → 6 | `invokeStatic(Object, Object)`                       | `java.lang.invoke.LambdaForm$DMH.0x0000000301001c00` |
|  -40.0% |    -4 |   0.7% → 0.4% |        10 → 6 | `invoke(Object, Object, Object)`                     | `java.lang.invoke.LambdaForm$MH.0x0000000301082400`  |
|  -40.0% |    -4 |   0.7% → 0.4% |        10 → 6 | `invokeExact_MT(Object, Object, Object, Object)`     | `java.lang.invoke.Invokers$Holder`                   |
|  -40.0% |    -4 |   0.7% → 0.4% |        10 → 6 | `invokeImpl(Object, Object[])`                       | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  -40.0% |    -4 |   0.7% → 0.4% |        10 → 6 | `invoke(Object, Object[])`                           | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  -40.0% |    -4 |   0.7% → 0.4% |        10 → 6 | `invoke(Object, Object[])`                           | `java.lang.reflect.Method`                           |
| removed |    -3 |   0.2% → 0.0% |         3 → 0 | `accept(Object)`                                     | `java.util.stream.ReduceOps$3ReducingSink`           |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % |   Samples | Callee                   | Location                                                   |
| -----: | ----: | ------------: | --------: | ------------------------ | ---------------------------------------------------------- |
|  +5.3% |   +41 |        100.0% | 772 → 813 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +5.3% |   +29 |         70.7% | 546 → 575 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +3.5% |    +7 | 26.2% → 25.7% | 202 → 209 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % |   Samples | Callee                         | Location                                                   |
| -----: | ----: | ------------: | --------: | ------------------------------ | ---------------------------------------------------------- |
| +10.9% |   +39 | 65.8% → 69.2% | 359 → 398 | `distance(Double[], Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % |   Samples | Callee                         | Location                            |
| -----: | ----: | ------------: | --------: | ------------------------------ | ----------------------------------- |
|  +4.9% |   +19 | 97.7% → 99.0% | 387 → 406 | `doExec()`                     | `java.util.concurrent.ForkJoinTask` |
|    new |    +1 |   0.0% → 0.2% |     0 → 1 | `tryCompensate(long, boolean)` | `java.util.concurrent.ForkJoinPool` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121df70`)

| Change | Delta |      % | Samples | Callee                         | Location                                    |
| -----: | ----: | -----: | ------: | ------------------------------ | ------------------------------------------- |
| +34.8% |    +8 | 100.0% | 23 → 31 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

| Change | Delta |      % | Samples | Callee   | Location                                                               |
| -----: | ----: | -----: | ------: | -------- | ---------------------------------------------------------------------- |
| +42.1% |    +8 | 100.0% | 19 → 27 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121df70` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % | Samples | Callee                              | Location              |
| -----: | ----: | ------------: | ------: | ----------------------------------- | --------------------- |
| -11.8% |    -8 | 33.7% → 28.7% | 68 → 60 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`   |
|  +8.8% |    +3 | 16.8% → 17.7% | 34 → 37 | `add(Object)`                       | `java.util.ArrayList` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |            % | Samples | Callee                                                                                       | Location                                  |
| -----: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
|    new |    +4 | 0.0% → 66.7% |   0 → 4 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
|    new |    +2 | 0.0% → 33.3% |   0 → 2 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |              % | Samples | Callee     | Location                            |
| -----: | ----: | -------------: | ------: | ---------- | ----------------------------------- |
| +24.0% |    +6 | 96.2% → 100.0% | 25 → 31 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `grow(int)` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Callee                  | Location           |
| -----: | ----: | ------------: | ------: | ----------------------- | ------------------ |
| +28.0% |    +7 | 73.5% → 86.5% | 25 → 32 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `grow()` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Callee      | Location              |
| -----: | ----: | -----: | ------: | ----------- | --------------------- |
|  +8.8% |    +3 | 100.0% | 34 → 37 | `grow(int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Callee   | Location              |
| -----: | ----: | -----: | ------: | -------- | --------------------- |
|  +8.8% |    +3 | 100.0% | 34 → 37 | `grow()` | `java.util.ArrayList` |

##### `add(Object)` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Callee                       | Location              |
| -----: | ----: | -----: | ------: | ---------------------------- | --------------------- |
|  +8.8% |    +3 | 100.0% | 34 → 37 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Callee              | Location                                 |
| ------: | ----: | ------------: | ------: | ------------------- | ---------------------------------------- |
| +100.0% |    +1 | 50.0% → 40.0% |   1 → 2 | `park()`            | `java.util.concurrent.locks.LockSupport` |
|     new |    +1 |  0.0% → 20.0% |   0 → 1 | `hasTasks(boolean)` | `java.util.concurrent.ForkJoinPool`      |

##### `fork()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |      % | Samples | Callee                                      | Location                                      |
| ------: | ----: | -----: | ------: | ------------------------------------------- | --------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `push(ForkJoinTask, ForkJoinPool, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `write(FileDescriptor, long, int)` (`sun.nio.ch.UnixFileDispatcherImpl`)

| Change | Delta |             % | Samples | Callee                              | Location                            |
| -----: | ----: | ------------: | ------: | ----------------------------------- | ----------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `write0(FileDescriptor, long, int)` | `sun.nio.ch.UnixFileDispatcherImpl` |

##### `extractResource(String, Path)` (`org.renaissance.core.ResourceUtils`)

| Change | Delta |      % | Samples | Callee                                  | Location              |
| -----: | ----: | -----: | ------: | --------------------------------------- | --------------------- |
| +33.3% |    +1 | 100.0% |   3 → 4 | `copy(InputStream, Path, CopyOption[])` | `java.nio.file.Files` |

##### `extractResources(Iterable, Path)` (`org.renaissance.core.ResourceUtils`)

| Change | Delta |      % | Samples | Callee                          | Location                             |
| -----: | ----: | -----: | ------: | ------------------------------- | ------------------------------------ |
| +33.3% |    +1 | 100.0% |   3 → 4 | `extractResource(String, Path)` | `org.renaissance.core.ResourceUtils` |

##### `createClassLoaderForModule(String)` (`org.renaissance.core.ModuleLoader`)

| Change | Delta |             % | Samples | Callee                             | Location                             |
| -----: | ----: | ------------: | ------: | ---------------------------------- | ------------------------------------ |
| +33.3% |    +1 | 75.0% → 80.0% |   3 → 4 | `extractResources(Iterable, Path)` | `org.renaissance.core.ResourceUtils` |

##### `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |              % | Samples | Callee                                         | Location                                            |
| ------: | ----: | -------------: | ------: | ---------------------------------------------- | --------------------------------------------------- |
| +200.0% |    +2 | 50.0% → 100.0% |   1 → 3 | `toArray(IntFunction)`                         | `java.util.stream.ReferencePipeline`                |
| removed |    -1 |   50.0% → 0.0% |   1 → 0 | `linkToTargetMethod(int, int, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000090011a2c00` |

##### `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121d4f0`)

| Change | Delta |      % | Samples | Callee                                           | Location                                    |
| -----: | ----: | -----: | ------: | ------------------------------------------------ | ------------------------------------------- |
| +50.0% |    +1 | 100.0% |   2 → 3 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `getLogLevel()` (`org.renaissance.core.Logging`)

| Change | Delta |             % | Samples | Callee          | Location                  |
| -----: | ----: | ------------: | ------: | --------------- | ------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `parse(String)` | `java.util.logging.Level` |

##### `createRootLogger()` (`org.renaissance.core.Logging`)

| Change | Delta |             % | Samples | Callee          | Location                       |
| -----: | ----: | ------------: | ------: | --------------- | ------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `getLogLevel()` | `org.renaissance.core.Logging` |

##### `<clinit>()` (`org.renaissance.core.Logging`)

| Change | Delta |             % | Samples | Callee               | Location                       |
| -----: | ----: | ------------: | ------: | -------------------- | ------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `createRootLogger()` | `org.renaissance.core.Logging` |

##### `<clinit>()` (`org.renaissance.core.Launcher`)

| Change | Delta |             % | Samples | Callee       | Location                       |
| -----: | ----: | ------------: | ------: | ------------ | ------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<clinit>()` | `org.renaissance.core.Logging` |

##### `rowToArray$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |             % | Samples | Callee       | Location        |
| -----: | ----: | ------------: | ------: | ------------ | --------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<clinit>()` | `scala.Predef$` |

##### `setUpBeforeAll$$anonfun$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |             % | Samples | Callee              | Location                                  |
| -----: | ----: | ------------: | ------: | ------------------- | ----------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `rowToArray$1(Map)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000003011a2908`)

| Change | Delta |             % | Samples | Callee                           | Location                                  |
| -----: | ----: | ------------: | ------: | -------------------------------- | ----------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `setUpBeforeAll$$anonfun$1(Map)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `lambda$toCsvRows$2(String[], Function, String)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`)

| Change | Delta |             % | Samples | Callee          | Location                                                             |
| -----: | ----: | ------------: | ------: | --------------- | -------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `apply(Object)` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000003011a2908` |

##### `writeFromNativeBuffer(FileDescriptor, ByteBuffer, long, boolean, boolean, int, NativeDispatcher)` (`sun.nio.ch.IOUtil`)

| Change | Delta |             % | Samples | Callee                             | Location                            |
| -----: | ----: | ------------: | ------: | ---------------------------------- | ----------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `write(FileDescriptor, long, int)` | `sun.nio.ch.UnixFileDispatcherImpl` |

##### `write(FileDescriptor, ByteBuffer, long, boolean, boolean, int, NativeDispatcher)` (`sun.nio.ch.IOUtil`)

| Change | Delta |             % | Samples | Callee                                                                                             | Location            |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------- | ------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `writeFromNativeBuffer(FileDescriptor, ByteBuffer, long, boolean, boolean, int, NativeDispatcher)` | `sun.nio.ch.IOUtil` |

##### `write(FileDescriptor, ByteBuffer, long, boolean, int, NativeDispatcher)` (`sun.nio.ch.IOUtil`)

| Change | Delta |             % | Samples | Callee                                                                             | Location            |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------- | ------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `write(FileDescriptor, ByteBuffer, long, boolean, boolean, int, NativeDispatcher)` | `sun.nio.ch.IOUtil` |

##### `write(ByteBuffer)` (`sun.nio.ch.FileChannelImpl`)

| Change | Delta |             % | Samples | Callee                                                                    | Location            |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------- | ------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `write(FileDescriptor, ByteBuffer, long, boolean, int, NativeDispatcher)` | `sun.nio.ch.IOUtil` |

##### `writeFully(ByteBuffer)` (`sun.nio.ch.ChannelOutputStream`)

| Change | Delta |             % | Samples | Callee              | Location                     |
| -----: | ----: | ------------: | ------: | ------------------- | ---------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `write(ByteBuffer)` | `sun.nio.ch.FileChannelImpl` |

##### `write(byte[], int, int)` (`sun.nio.ch.ChannelOutputStream`)

| Change | Delta |             % | Samples | Callee                   | Location                         |
| -----: | ----: | ------------: | ------: | ------------------------ | -------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `writeFully(ByteBuffer)` | `sun.nio.ch.ChannelOutputStream` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |              % |       Samples | Callee     | Location                            |
| -----: | ----: | -------------: | ------------: | ---------- | ----------------------------------- |
| -15.7% |  -188 | 100.0% → 99.8% | 1,194 → 1,006 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |              % |     Samples | Callee                                               | Location                                      |
| -----: | ----: | -------------: | ----------: | ---------------------------------------------------- | --------------------------------------------- |
| -14.6% |  -169 | 100.0% → 99.6% | 1,156 → 987 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % |     Samples | Callee                                   | Location                            |
| ------: | ----: | ------------: | ----------: | ---------------------------------------- | ----------------------------------- |
|  -13.9% |  -160 | 99.7% → 99.5% | 1,147 → 987 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |
| +150.0% |    +3 |   0.2% → 0.5% |       2 → 5 | `awaitWork(ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

| Change | Delta |      % |     Samples | Callee                              | Location                            |
| -----: | ----: | -----: | ----------: | ----------------------------------- | ----------------------------------- |
| -12.8% |  -142 | 100.0% | 1,112 → 970 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % |   Samples | Callee                           | Location                                                  |
| -----: | ----: | ------------: | --------: | -------------------------------- | --------------------------------------------------------- |
| -11.8% |   -66 | 87.6% → 99.0% | 557 → 491 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Callee              | Location                                                  |
| -----: | ----: | -----: | --------: | ------------------- | --------------------------------------------------------- |
| -22.0% |  -140 | 100.0% | 636 → 496 | `vectorSum()`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| -22.0% |  -140 | 100.0% | 636 → 496 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % |       Samples | Callee      | Location                                            |
| -----: | ----: | ------------: | ------------: | ----------- | --------------------------------------------------- |
|  -7.9% |  -115 | 99.7% → 99.9% | 1,452 → 1,337 | `exec()`    | `java.util.concurrent.RecursiveTask`                |
| +43.8% |    +7 |   1.1% → 1.7% |       16 → 23 | `exec()`    | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
| -33.3% |    -1 |   0.2% → 0.1% |         3 → 2 | `setDone()` | `java.util.concurrent.ForkJoinTask`                 |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % |       Samples | Callee                                                    | Location                                      |
| -----: | ----: | ------------: | ------------: | --------------------------------------------------------- | --------------------------------------------- |
|  -8.3% |  -117 |         99.2% | 1,409 → 1,292 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  +4.3% |   +17 | 27.6% → 31.4% |     392 → 409 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % |       Samples | Callee                 | Location                            |
| -----: | ----: | -----: | ------------: | ---------------------- | ----------------------------------- |
|  -8.3% |  -118 | 100.0% | 1,420 → 1,302 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % |       Samples | Callee     | Location                            |
| -----: | ----: | -----: | ------------: | ---------- | ----------------------------------- |
|  -8.3% |  -117 | 100.0% | 1,409 → 1,292 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |             % |       Samples | Callee                           | Location                                                   |
| -----: | ----: | ------------: | ------------: | -------------------------------- | ---------------------------------------------------------- |
| -22.0% |  -140 | 43.8% → 37.1% |     636 → 496 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -8.3% |  -118 | 97.8% → 97.4% | 1,420 → 1,302 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
| -27.0% |   -64 | 16.3% → 12.9% |     237 → 173 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  +5.3% |   +41 | 53.2% → 60.8% |     772 → 813 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -56.0% |   -14 |   1.7% → 0.8% |       25 → 11 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change | Delta |      % |       Samples | Callee      | Location                                               |
| -----: | ----: | -----: | ------------: | ----------- | ------------------------------------------------------ |
|  -7.9% |  -115 | 100.0% | 1,452 → 1,337 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |             % |   Samples | Callee                     | Location                                               |
| -----: | ----: | ------------: | --------: | -------------------------- | ------------------------------------------------------ |
| -26.9% |   -64 |        100.0% | 238 → 174 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| -27.0% |   -64 | 99.6% → 99.4% | 237 → 173 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change | Delta |              % |   Samples | Callee            | Location                                               |
| ------: | ----: | -------------: | --------: | ----------------- | ------------------------------------------------------ |
|  -21.8% |   -53 | 99.2% → 100.0% | 243 → 190 | `average(List)`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| removed |    -2 |    0.8% → 0.0% |     2 → 0 | `boxed(double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |              % |   Samples | Callee     | Location                            |
| -----: | ----: | -------------: | --------: | ---------- | ----------------------------------- |
| -22.2% |   -54 | 100.0% → 99.5% | 243 → 189 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % |   Samples | Callee     | Location                            |
| -----: | ----: | -----: | --------: | ---------- | ----------------------------------- |
| -18.4% |   -48 | 100.0% | 261 → 213 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |             % | Samples | Callee                | Location            |
| -----: | ----: | ------------: | ------: | --------------------- | ------------------- |
| -83.3% |   -10 | 48.0% → 18.2% |  12 → 2 | `<init>(Map)`         | `java.util.HashMap` |
| -18.2% |    -2 | 44.0% → 81.8% |  11 → 9 | `forEach(BiConsumer)` | `java.util.HashMap` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % | Samples | Callee            | Location                                    |
| -----: | ----: | -----: | ------: | ----------------- | ------------------------------------------- |
| -56.0% |   -14 | 100.0% | 25 → 11 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % | Samples | Callee                     | Location                                                   |
| -----: | ----: | -----: | ------: | -------------------------- | ---------------------------------------------------------- |
| -56.0% |   -14 | 100.0% | 25 → 11 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |            % | Samples | Callee                                                                                       | Location                                  |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
| removed |    -5 | 71.4% → 0.0% |   5 → 0 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
| removed |    -2 | 28.6% → 0.0% |   2 → 0 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |              % | Samples | Callee                                                                        | Location                                    |
| ------: | ----: | -------------: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
|  -25.0% |    -2 | 80.0% → 100.0% |   8 → 6 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |
| removed |    -1 |   10.0% → 0.0% |   1 → 0 | `parse(String[])`                                                             | `org.renaissance.harness.ConfigParser`      |
| removed |    -1 |   10.0% → 0.0% |   1 → 0 | `excludeIncompatible(BenchmarkSuite, Seq)`                                    | `org.renaissance.harness.RenaissanceSuite$` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

| Change | Delta |      % | Samples | Callee           | Location                                    |
| -----: | ----: | -----: | ------: | ---------------- | ------------------------------------------- |
| -40.0% |    -4 | 100.0% |  10 → 6 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

| Change | Delta |             % | Samples | Callee                               | Location                            |
| -----: | ----: | ------------: | ------: | ------------------------------------ | ----------------------------------- |
| -40.0% |    -4 | 83.3% → 66.7% |  10 → 6 | `invoke(Object, Object[])`           | `java.lang.reflect.Method`          |
| +50.0% |    +1 | 16.7% → 33.3% |   2 → 3 | `createClassLoaderForModule(String)` | `org.renaissance.core.ModuleLoader` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

| Change | Delta |      % | Samples | Callee                                                      | Location                        |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------- | ------------------------------- |
| -25.0% |    -3 | 100.0% |  12 → 9 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.core.Launcher`)

| Change | Delta |      % | Samples | Callee                                 | Location                        |
| -----: | ----: | -----: | ------: | -------------------------------------- | ------------------------------- |
| -25.0% |    -3 | 100.0% |  12 → 9 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |              % | Samples | Callee               | Location                                    |
| ------: | ----: | -------------: | ------: | -------------------- | ------------------------------------------- |
| removed |    -1 |   12.5% → 0.0% |   1 → 0 | `getVmStartNanos()`  | `org.renaissance.harness.RenaissanceSuite$` |
|  -14.3% |    -1 | 87.5% → 100.0% |   7 → 6 | `foreach(Function1)` | `scala.collection.immutable.List`           |

##### `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % | Samples | Callee               | Location                             |
| -----: | ----: | -----: | ------: | -------------------- | ------------------------------------ |
| -40.0% |    -2 | 100.0% |   5 → 3 | `collect(Collector)` | `java.util.stream.ReferencePipeline` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121ef30`)

| Change | Delta |      % | Samples | Callee                              | Location                                    |
| -----: | ----: | -----: | ------: | ----------------------------------- | ------------------------------------------- |
| -18.2% |    -2 | 100.0% |  11 → 9 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `<init>(Map)` (`java.util.HashMap`)

| Change | Delta |              % | Samples | Callee                        | Location            |
| -----: | ----: | -------------: | ------: | ----------------------------- | ------------------- |
| -80.0% |    -8 | 83.3% → 100.0% |  10 → 2 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `putMapEntries(Map, boolean)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Callee                                          | Location                          |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | --------------------------------- |
|  -75.0% |    -3 | 36.4% → 50.0% |   4 → 1 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap`               |
| removed |    -2 |  18.2% → 0.0% |   2 → 0 | `hash(Object)`                                  | `java.util.HashMap`               |
| removed |    -2 |  18.2% → 0.0% |   2 → 0 | `iterator()`                                    | `java.util.HashMap$EntrySet`      |
|  -66.7% |    -2 | 27.3% → 50.0% |   3 → 1 | `next()`                                        | `java.util.HashMap$EntryIterator` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|  Change | Delta |           % | Samples | Callee          | Location                                                                              |
| ------: | ----: | ----------: | ------: | --------------- | ------------------------------------------------------------------------------------- |
| removed |    -1 | 1.4% → 0.0% |   1 → 0 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000009001204b38` |
|     new |    +1 | 0.0% → 1.7% |   0 → 1 | `hash(Object)`  | `java.util.HashMap`                                                                   |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000301001c00`)

| Change | Delta |      % | Samples | Callee           | Location                                   |
| -----: | ----: | -----: | ------: | ---------------- | ------------------------------------------ |
| -40.0% |    -4 | 100.0% |  10 → 6 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301082400`)

| Change | Delta |      % | Samples | Callee                         | Location                                             |
| -----: | ----: | -----: | ------: | ------------------------------ | ---------------------------------------------------- |
| -40.0% |    -4 | 100.0% |  10 → 6 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000301001c00` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change | Delta |      % | Samples | Callee                           | Location                                            |
| -----: | ----: | -----: | ------: | -------------------------------- | --------------------------------------------------- |
| -40.0% |    -4 | 100.0% |  10 → 6 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000301082400` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % | Samples | Callee                                           | Location                           |
| -----: | ----: | -----: | ------: | ------------------------------------------------ | ---------------------------------- |
| -40.0% |    -4 | 100.0% |  10 → 6 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % | Samples | Callee                         | Location                                          |
| -----: | ----: | -----: | ------: | ------------------------------ | ------------------------------------------------- |
| -40.0% |    -4 | 100.0% |  10 → 6 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

| Change | Delta |      % | Samples | Callee                     | Location                                          |
| -----: | ----: | -----: | ------: | -------------------------- | ------------------------------------------------- |
| -40.0% |    -4 | 100.0% |  10 → 6 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in samples collected in their leaf frame.

|  Change | Delta |           % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +83.8% |   +31 | 2.5% → 5.0% | 37 → 68 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()`                                       |
|  +72.7% |    +8 | 0.7% → 1.4% | 11 → 19 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()`                                                                                                                                                                                                              |
| +266.7% |    +8 | 0.2% → 0.8% |  3 → 11 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()`                                 |
|  +46.7% |    +7 | 1.0% → 1.6% | 15 → 22 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) |
| +300.0% |    +6 | 0.1% → 0.6% |   2 → 8 | `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| +500.0% |    +5 | 0.1% → 0.4% |   1 → 6 | `computeIfAbsent(Object, Function)` (`java.util.HashMap`) ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| +166.7% |    +5 | 0.2% → 0.6% |   3 → 8 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| +166.7% |    +5 | 0.2% → 0.6% |   3 → 8 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| +166.7% |    +5 | 0.2% → 0.6% |   3 → 8 | `computeIfAbsent(Object, Function)` (`java.util.HashMap`) ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                             |
|  +12.9% |    +4 | 2.1% → 2.6% | 31 → 35 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  +80.0% |    +4 | 0.3% → 0.7% |   5 → 9 | `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  +20.0% |    +4 | 1.4% → 1.8% | 20 → 24 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)                                                                                                                               |
|  +28.6% |    +4 | 1.0% → 1.3% | 14 → 18 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| +200.0% |    +4 | 0.1% → 0.4% |   2 → 6 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()`                                 |
| +200.0% |    +4 | 0.1% → 0.4% |   2 → 6 | `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                    |
| +400.0% |    +4 | 0.1% → 0.4% |   1 → 5 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()`                           |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()`                                          |

### Improvements

Call stacks with the largest decrease in samples collected in their leaf frame.

|  Change | Delta |           % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -46.9% |   -30 | 4.3% → 2.5% | 64 → 34 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  -79.2% |   -19 | 1.6% → 0.4% |  24 → 5 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -73.7% |   -14 | 1.3% → 0.4% |  19 → 5 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)                                                                                                                                      |
|  -28.3% |   -13 | 3.1% → 2.4% | 46 → 33 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  -19.4% |   -12 | 4.2% → 3.7% | 62 → 50 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  -52.4% |   -11 | 1.4% → 0.7% | 21 → 10 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                         |
|  -27.8% |   -10 | 2.4% → 1.9% | 36 → 26 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  -41.7% |   -10 | 1.6% → 1.0% | 24 → 14 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` |
|  -31.8% |    -7 | 1.5% → 1.1% | 22 → 15 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  -77.8% |    -7 | 0.6% → 0.1% |   9 → 2 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| removed |    -7 | 0.5% → 0.0% |   7 → 0 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -75.0% |    -6 | 0.5% → 0.1% |   8 → 2 | `computeIfAbsent(Object, Function)` (`java.util.HashMap`) ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  -54.5% |    -6 | 0.7% → 0.4% |  11 → 5 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| removed |    -6 | 0.4% → 0.0% |   6 → 0 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| removed |    -5 | 0.3% → 0.0% |   5 → 0 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  -83.3% |    -5 | 0.4% → 0.1% |   6 → 1 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  -71.4% |    -5 | 0.5% → 0.1% |   7 → 2 | `computeIfAbsent(Object, Function)` (`java.util.HashMap`) ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()`                             |
|  -83.3% |    -5 | 0.4% → 0.1% |   6 → 1 | `computeIfAbsent(Object, Function)` (`java.util.HashMap`) ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  -22.2% |    -4 | 1.2% → 1.0% | 18 → 14 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                            |
|  -11.8% |    -4 | 2.3% → 2.2% | 34 → 30 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

# Allocated heap profile diff

Allocated 37.4 GiB → 37.3 GiB (-123.297 MiB, -0.3%) over 1,953 samples → 2,100 samples (19.6 MiB → 18.2 MiB per sample).

| Category         | Change |        Delta |             % |                Size |       Samples |
| ---------------- | -----: | -----------: | ------------: | ------------------: | ------------: |
| Standard library |  -1.5% |  -547.17 MiB | 94.1% → 92.9% | 35.2 GiB → 34.6 GiB | 1,833 → 1,972 |
| Ours             | +18.7% | +423.874 MiB |   5.9% → 7.1% | 2.21 GiB → 2.63 GiB |     117 → 127 |
| Unknown          | -22.7% |       -496 B |         <0.1% | 2.13 KiB → 1.65 KiB |         3 → 1 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|   Change |        Delta |            % |                Size | Samples | Function                                             | Location                                                   |
| -------: | -----------: | -----------: | ------------------: | ------: | ---------------------------------------------------- | ---------------------------------------------------------- |
|   +62.2% | +661.874 MiB |  2.8% → 4.5% | 1.04 GiB → 1.69 GiB | 64 → 68 | `findNearestCentroid()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +82.2% | +200.148 MiB |  0.6% → 1.2% |   244 MiB → 444 MiB | 11 → 15 | `createSubtask(int, int)`                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +90.6% | +157.504 MiB |  0.5% → 0.9% |   174 MiB → 331 MiB | 13 → 11 | `newNode(int, Object, Object, HashMap$Node)`         | `java.util.HashMap`                                        |
| +3910.6% | +105.542 MiB | <0.1% → 0.3% |   2.7 MiB → 108 MiB |   2 → 7 | `lambda$merge$6(List, List)`                         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|      new |  +76.003 MiB |  0.0% → 0.2% |        0 B → 76 MiB |   0 → 2 | `vectorSum()`                                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +924.6% |  +40.295 MiB | <0.1% → 0.1% | 4.36 MiB → 44.7 MiB |   1 → 2 | `iterator()`                                         | `java.util.HashMap$EntrySet`                               |
| +4706.5% |  +39.693 MiB | <0.1% → 0.1% |  864 KiB → 40.5 MiB |   1 → 5 | `add(double[], double[])`                            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +1159.2% |  +21.485 MiB | <0.1% → 0.1% | 1.85 MiB → 23.3 MiB |  5 → 15 | `mapToObj(IntFunction, int)`                         | `java.util.stream.IntPipeline`                             |
|      new |  +18.492 MiB | 0.0% → <0.1% |      0 B → 18.5 MiB |   0 → 1 | `createSubtask(int, int)`                            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  +130.6% |  +13.233 MiB | <0.1% → 0.1% | 10.1 MiB → 23.4 MiB | 28 → 36 | `valueOf(double)`                                    | `java.lang.Double`                                         |
|  +202.7% |  +12.456 MiB |        <0.1% | 6.15 MiB → 18.6 MiB |   6 → 7 | `resize()`                                           | `java.util.HashMap`                                        |
|  +237.7% |   +5.285 MiB |        <0.1% | 2.22 MiB → 7.51 MiB |  6 → 12 | `intStream(Spliterator$OfInt, boolean)`              | `java.util.stream.StreamSupport`                           |
|  +195.7% |   +5.168 MiB |        <0.1% | 2.64 MiB → 7.81 MiB |  8 → 11 | `lambda$generateData$4(int)`                         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  +412.8% |    +3.06 MiB |        <0.1% |   759 KiB → 3.8 MiB |   2 → 7 | `opWrapSink(int, Sink)`                              | `java.util.stream.IntPipeline$1`                           |
|      new |   +2.903 MiB | 0.0% → <0.1% |       0 B → 2.9 MiB |   0 → 4 | `allocateInstance(Object)`                           | `java.lang.invoke.DirectMethodHandle`                      |
|      new |   +2.022 MiB | 0.0% → <0.1% |      0 B → 2.02 MiB |   0 → 5 | `range(int, int)`                                    | `java.util.stream.IntStream`                               |
|   +36.1% |   +1.797 MiB |        <0.1% | 4.98 MiB → 6.78 MiB | 11 → 17 | `<init>(InputStream, Inflater, int)`                 | `java.util.zip.InflaterInputStream`                        |
|      new | +782.015 KiB | 0.0% → <0.1% |       0 B → 782 KiB |   0 → 2 | `visitMethod(int, String, String, String, String[])` | `jdk.internal.org.objectweb.asm.ClassWriter`               |
|      new | +641.398 KiB | 0.0% → <0.1% |       0 B → 641 KiB |   0 → 2 | `read(InputStream, String)`                          | `java.util.jar.Manifest`                                   |
|      new | +507.726 KiB | 0.0% → <0.1% |       0 B → 508 KiB |   0 → 1 | `makeAllocator(MemberName)`                          | `java.lang.invoke.DirectMethodHandle`                      |

##### Standard library

|   Change |        Delta |            % |                Size | Samples | Function                                             | Location                                     |
| -------: | -----------: | -----------: | ------------------: | ------: | ---------------------------------------------------- | -------------------------------------------- |
|   +90.6% | +157.504 MiB |  0.5% → 0.9% |   174 MiB → 331 MiB | 13 → 11 | `newNode(int, Object, Object, HashMap$Node)`         | `java.util.HashMap`                          |
|  +924.6% |  +40.295 MiB | <0.1% → 0.1% | 4.36 MiB → 44.7 MiB |   1 → 2 | `iterator()`                                         | `java.util.HashMap$EntrySet`                 |
| +1159.2% |  +21.485 MiB | <0.1% → 0.1% | 1.85 MiB → 23.3 MiB |  5 → 15 | `mapToObj(IntFunction, int)`                         | `java.util.stream.IntPipeline`               |
|  +130.6% |  +13.233 MiB | <0.1% → 0.1% | 10.1 MiB → 23.4 MiB | 28 → 36 | `valueOf(double)`                                    | `java.lang.Double`                           |
|  +202.7% |  +12.456 MiB |        <0.1% | 6.15 MiB → 18.6 MiB |   6 → 7 | `resize()`                                           | `java.util.HashMap`                          |
|  +237.7% |   +5.285 MiB |        <0.1% | 2.22 MiB → 7.51 MiB |  6 → 12 | `intStream(Spliterator$OfInt, boolean)`              | `java.util.stream.StreamSupport`             |
|  +412.8% |    +3.06 MiB |        <0.1% |   759 KiB → 3.8 MiB |   2 → 7 | `opWrapSink(int, Sink)`                              | `java.util.stream.IntPipeline$1`             |
|      new |   +2.903 MiB | 0.0% → <0.1% |       0 B → 2.9 MiB |   0 → 4 | `allocateInstance(Object)`                           | `java.lang.invoke.DirectMethodHandle`        |
|      new |   +2.022 MiB | 0.0% → <0.1% |      0 B → 2.02 MiB |   0 → 5 | `range(int, int)`                                    | `java.util.stream.IntStream`                 |
|   +36.1% |   +1.797 MiB |        <0.1% | 4.98 MiB → 6.78 MiB | 11 → 17 | `<init>(InputStream, Inflater, int)`                 | `java.util.zip.InflaterInputStream`          |
|      new | +782.015 KiB | 0.0% → <0.1% |       0 B → 782 KiB |   0 → 2 | `visitMethod(int, String, String, String, String[])` | `jdk.internal.org.objectweb.asm.ClassWriter` |
|      new | +641.398 KiB | 0.0% → <0.1% |       0 B → 641 KiB |   0 → 2 | `read(InputStream, String)`                          | `java.util.jar.Manifest`                     |
|      new | +507.726 KiB | 0.0% → <0.1% |       0 B → 508 KiB |   0 → 1 | `makeAllocator(MemberName)`                          | `java.lang.invoke.DirectMethodHandle`        |
|  +103.3% | +399.453 KiB |        <0.1% |   387 KiB → 786 KiB |   1 → 2 | `<init>(int)`                                        | `java.lang.AbstractStringBuilder`            |
|      new | +394.859 KiB | 0.0% → <0.1% |       0 B → 395 KiB |   0 → 1 | `toString()`                                         | `java.lang.StringBuilder`                    |
|      new | +391.835 KiB | 0.0% → <0.1% |       0 B → 392 KiB |   0 → 1 | `allocateUninitializedArray(Class, int)`             | `jdk.internal.misc.Unsafe`                   |
|      new | +389.843 KiB | 0.0% → <0.1% |       0 B → 390 KiB |   0 → 1 | `<init>(InputStream, int)`                           | `java.util.jar.Manifest$FastInputStream`     |
|      new |  +382.57 KiB | 0.0% → <0.1% |       0 B → 383 KiB |   0 → 1 | `allocateUninitializedArray0(Class, int)`            | `jdk.internal.misc.Unsafe`                   |
|      new | +381.867 KiB | 0.0% → <0.1% |       0 B → 382 KiB |   0 → 1 | `clone()`                                            | `java.lang.Object`                           |
|      new |  +381.39 KiB | 0.0% → <0.1% |       0 B → 381 KiB |   0 → 1 | `<init>(int)`                                        | `jdk.internal.org.objectweb.asm.ByteVector`  |

##### Ours

|   Change |        Delta |            % |                Size | Samples | Function                     | Location                                                   |
| -------: | -----------: | -----------: | ------------------: | ------: | ---------------------------- | ---------------------------------------------------------- |
|   +62.2% | +661.874 MiB |  2.8% → 4.5% | 1.04 GiB → 1.69 GiB | 64 → 68 | `findNearestCentroid()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +82.2% | +200.148 MiB |  0.6% → 1.2% |   244 MiB → 444 MiB | 11 → 15 | `createSubtask(int, int)`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +3910.6% | +105.542 MiB | <0.1% → 0.3% |   2.7 MiB → 108 MiB |   2 → 7 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|      new |  +76.003 MiB |  0.0% → 0.2% |        0 B → 76 MiB |   0 → 2 | `vectorSum()`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +4706.5% |  +39.693 MiB | <0.1% → 0.1% |  864 KiB → 40.5 MiB |   1 → 5 | `add(double[], double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|      new |  +18.492 MiB | 0.0% → <0.1% |      0 B → 18.5 MiB |   0 → 1 | `createSubtask(int, int)`    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  +195.7% |   +5.168 MiB |        <0.1% | 2.64 MiB → 7.81 MiB |  8 → 11 | `lambda$generateData$4(int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                |

#### Improvements

Functions with the largest decrease in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |        Delta |             % |                Size |       Samples | Function                                              | Location                                                   |
| ------: | -----------: | ------------: | ------------------: | ------------: | ----------------------------------------------------- | ---------------------------------------------------------- |
|   -1.4% | -482.363 MiB | 92.3% → 91.3% |   34.5 GiB → 34 GiB | 1,664 → 1,783 | `copyOf(Object[], int)`                               | `java.util.Arrays`                                         |
|  -84.8% | -295.831 MiB |   0.9% → 0.1% |  349 MiB → 53.2 MiB |        12 → 5 | `createSubtask(int, int)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -49.4% | -180.873 MiB |   1.0% → 0.5% |   366 MiB → 185 MiB |         9 → 8 | `collectClusters(int[])`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed | -160.192 MiB |   0.4% → 0.0% |       160 MiB → 0 B |         1 → 0 | `read(Manifest$FastInputStream, byte[], String, int)` | `java.util.jar.Attributes`                                 |
|  -79.1% | -119.923 MiB |   0.4% → 0.1% |  152 MiB → 31.8 MiB |         5 → 3 | `merge(Map, Map)`                                     | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |  -93.806 MiB |   0.2% → 0.0% |      93.8 MiB → 0 B |         2 → 0 | `awaitDone(int, long)`                                | `java.util.concurrent.ForkJoinTask`                        |
|  -99.0% |  -84.174 MiB |  0.2% → <0.1% |    85 MiB → 857 KiB |         4 → 2 | `lambda$collectClusters$0(Double[])`                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -32.5% |  -51.683 MiB |   0.4% → 0.3% |   159 MiB → 107 MiB |        10 → 5 | `grow(int)`                                           | `java.util.ArrayList`                                      |
| removed |  -14.899 MiB |  <0.1% → 0.0% |      14.9 MiB → 0 B |        21 → 0 | `copyOf(Object[], int, Class)`                        | `java.util.Arrays`                                         |
| removed |   -3.376 MiB |  <0.1% → 0.0% |      3.38 MiB → 0 B |         1 → 0 | `entrySet()`                                          | `java.util.HashMap`                                        |
| removed |   -2.245 MiB |  <0.1% → 0.0% |      2.25 MiB → 0 B |         1 → 0 | `computeClusterAverages()`                            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -40.1% |   -1.301 MiB |         <0.1% | 3.25 MiB → 1.95 MiB |         9 → 4 | `builder(long, IntFunction)`                          | `java.util.stream.Nodes`                                   |
| removed |   -1.136 MiB |  <0.1% → 0.0% |      1.14 MiB → 0 B |         3 → 0 | `enlarge(int)`                                        | `jdk.internal.org.objectweb.asm.ByteVector`                |
|  -53.1% | -861.695 KiB |         <0.1% |  1.58 MiB → 760 KiB |         5 → 2 | `copyOfRangeByte(byte[], int, int)`                   | `java.util.Arrays`                                         |
| removed | -764.992 KiB |  <0.1% → 0.0% |       765 KiB → 0 B |         1 → 0 | `compress(char[], int, int)`                          | `java.lang.StringUTF16`                                    |
|  -33.3% | -759.296 KiB |         <0.1% | 2.22 MiB → 1.48 MiB |         6 → 4 | `allocateInstance(Class)`                             | `jdk.internal.misc.Unsafe`                                 |
| removed | -459.476 KiB |  <0.1% → 0.0% |       459 KiB → 0 B |         1 → 0 | `iterator()`                                          | `java.util.ImmutableCollections$Set12`                     |
| removed | -417.679 KiB |  <0.1% → 0.0% |       418 KiB → 0 B |         1 → 0 | `register(Object, Runnable)`                          | `java.lang.ref.Cleaner`                                    |
| removed | -386.804 KiB |  <0.1% → 0.0% |       387 KiB → 0 B |         1 → 0 | `<init>(ClassWriter)`                                 | `jdk.internal.org.objectweb.asm.SymbolTable`               |
| removed | -380.546 KiB |  <0.1% → 0.0% |       381 KiB → 0 B |         1 → 0 | `visitField(int, String, String, String, Object)`     | `jdk.internal.org.objectweb.asm.ClassWriter`               |

##### Standard library

|  Change |        Delta |             % |                Size |       Samples | Function                                              | Location                                     |
| ------: | -----------: | ------------: | ------------------: | ------------: | ----------------------------------------------------- | -------------------------------------------- |
|   -1.4% | -482.363 MiB | 92.3% → 91.3% |   34.5 GiB → 34 GiB | 1,664 → 1,783 | `copyOf(Object[], int)`                               | `java.util.Arrays`                           |
| removed | -160.192 MiB |   0.4% → 0.0% |       160 MiB → 0 B |         1 → 0 | `read(Manifest$FastInputStream, byte[], String, int)` | `java.util.jar.Attributes`                   |
| removed |  -93.806 MiB |   0.2% → 0.0% |      93.8 MiB → 0 B |         2 → 0 | `awaitDone(int, long)`                                | `java.util.concurrent.ForkJoinTask`          |
|  -32.5% |  -51.683 MiB |   0.4% → 0.3% |   159 MiB → 107 MiB |        10 → 5 | `grow(int)`                                           | `java.util.ArrayList`                        |
| removed |  -14.899 MiB |  <0.1% → 0.0% |      14.9 MiB → 0 B |        21 → 0 | `copyOf(Object[], int, Class)`                        | `java.util.Arrays`                           |
| removed |   -3.376 MiB |  <0.1% → 0.0% |      3.38 MiB → 0 B |         1 → 0 | `entrySet()`                                          | `java.util.HashMap`                          |
|  -40.1% |   -1.301 MiB |         <0.1% | 3.25 MiB → 1.95 MiB |         9 → 4 | `builder(long, IntFunction)`                          | `java.util.stream.Nodes`                     |
| removed |   -1.136 MiB |  <0.1% → 0.0% |      1.14 MiB → 0 B |         3 → 0 | `enlarge(int)`                                        | `jdk.internal.org.objectweb.asm.ByteVector`  |
|  -53.1% | -861.695 KiB |         <0.1% |  1.58 MiB → 760 KiB |         5 → 2 | `copyOfRangeByte(byte[], int, int)`                   | `java.util.Arrays`                           |
| removed | -764.992 KiB |  <0.1% → 0.0% |       765 KiB → 0 B |         1 → 0 | `compress(char[], int, int)`                          | `java.lang.StringUTF16`                      |
|  -33.3% | -759.296 KiB |         <0.1% | 2.22 MiB → 1.48 MiB |         6 → 4 | `allocateInstance(Class)`                             | `jdk.internal.misc.Unsafe`                   |
| removed | -459.476 KiB |  <0.1% → 0.0% |       459 KiB → 0 B |         1 → 0 | `iterator()`                                          | `java.util.ImmutableCollections$Set12`       |
| removed | -417.679 KiB |  <0.1% → 0.0% |       418 KiB → 0 B |         1 → 0 | `register(Object, Runnable)`                          | `java.lang.ref.Cleaner`                      |
| removed | -386.804 KiB |  <0.1% → 0.0% |       387 KiB → 0 B |         1 → 0 | `<init>(ClassWriter)`                                 | `jdk.internal.org.objectweb.asm.SymbolTable` |
| removed | -380.546 KiB |  <0.1% → 0.0% |       381 KiB → 0 B |         1 → 0 | `visitField(int, String, String, String, Object)`     | `jdk.internal.org.objectweb.asm.ClassWriter` |
| removed | -379.609 KiB |  <0.1% → 0.0% |       380 KiB → 0 B |         1 → 0 | `newString(byte[], int, int)`                         | `java.lang.StringLatin1`                     |
|   -0.5% |   -63.32 KiB |         <0.1% |            12.4 MiB |       23 → 33 | `copyOf(byte[], int)`                                 | `java.util.Arrays`                           |
| removed |       -896 B |  <0.1% → 0.0% |         896 B → 0 B |         1 → 0 | `transferTo(OutputStream)`                            | `java.io.InputStream`                        |
|     ~0% |       -120 B |         <0.1% |             377 KiB |             1 | `readLine()`                                          | `java.util.Properties$LineReader`            |
|     ~0% |        -40 B |         <0.1% |             386 KiB |             1 | `getInputStream(ZipEntry)`                            | `java.util.zip.ZipFile`                      |

##### Ours

|  Change |        Delta |            % |               Size | Samples | Function                             | Location                                                   |
| ------: | -----------: | -----------: | -----------------: | ------: | ------------------------------------ | ---------------------------------------------------------- |
|  -84.8% | -295.831 MiB |  0.9% → 0.1% | 349 MiB → 53.2 MiB |  12 → 5 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -49.4% | -180.873 MiB |  1.0% → 0.5% |  366 MiB → 185 MiB |   9 → 8 | `collectClusters(int[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -79.1% | -119.923 MiB |  0.4% → 0.1% | 152 MiB → 31.8 MiB |   5 → 3 | `merge(Map, Map)`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -99.0% |  -84.174 MiB | 0.2% → <0.1% |   85 MiB → 857 KiB |   4 → 2 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |   -2.245 MiB | <0.1% → 0.0% |     2.25 MiB → 0 B |   1 → 0 | `computeClusterAverages()`           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |                Size | Samples | Location                                                       |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------------------------------------------- |
| +62.2% | +661.874 MiB | 100.0% | 1.04 GiB → 1.69 GiB | 64 → 68 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:223` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |              Size | Samples | Location                                                       |
| -----: | -----------: | -----: | ----------------: | ------: | -------------------------------------------------------------- |
| +82.2% | +200.148 MiB | 100.0% | 244 MiB → 444 MiB | 11 → 15 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

| Change |        Delta |      % |              Size | Samples | Location                 |
| -----: | -----------: | -----: | ----------------: | ------: | ------------------------ |
| +90.6% | +157.504 MiB | 100.0% | 174 MiB → 331 MiB | 13 → 11 | `java.util.HashMap:1909` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|   Change |        Delta |      % |              Size | Samples | Location                                        |
| -------: | -----------: | -----: | ----------------: | ------: | ----------------------------------------------- |
| +3910.6% | +105.542 MiB | 100.0% | 2.7 MiB → 108 MiB |   2 → 7 | `org.renaissance.jdk.concurrent.JavaKMeans:114` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |             % |         Size | Samples | Location                                                      |
| -----: | ----------: | ------------: | -----------: | ------: | ------------------------------------------------------------- |
|    new | +76.003 MiB | 0.0% → 100.0% | 0 B → 76 MiB |   0 → 2 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400` |

##### `iterator()` (`java.util.HashMap$EntrySet`)

|  Change |       Delta |      % |                Size | Samples | Location                          |
| ------: | ----------: | -----: | ------------------: | ------: | --------------------------------- |
| +924.6% | +40.295 MiB | 100.0% | 4.36 MiB → 44.7 MiB |   1 → 2 | `java.util.HashMap$EntrySet:1106` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|   Change |       Delta |      % |               Size | Samples | Location                                                      |
| -------: | ----------: | -----: | -----------------: | ------: | ------------------------------------------------------------- |
| +4706.5% | +39.693 MiB | 100.0% | 864 KiB → 40.5 MiB |   1 → 5 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:430` |

##### `mapToObj(IntFunction, int)` (`java.util.stream.IntPipeline`)

|   Change |       Delta |      % |                Size | Samples | Location                           |
| -------: | ----------: | -----: | ------------------: | ------: | ---------------------------------- |
| +1159.2% | +21.485 MiB | 100.0% | 1.85 MiB → 23.3 MiB |  5 → 15 | `java.util.stream.IntPipeline:174` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |       Delta |             % |           Size | Samples | Location                                                   |
| -----: | ----------: | ------------: | -------------: | ------: | ---------------------------------------------------------- |
|    new | +18.492 MiB | 0.0% → 100.0% | 0 B → 18.5 MiB |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:352` |

##### `valueOf(double)` (`java.lang.Double`)

|  Change |       Delta |      % |                Size | Samples | Location               |
| ------: | ----------: | -----: | ------------------: | ------: | ---------------------- |
| +130.6% | +13.233 MiB | 100.0% | 10.1 MiB → 23.4 MiB | 28 → 36 | `java.lang.Double:773` |

##### `resize()` (`java.util.HashMap`)

|  Change |       Delta |      % |                Size | Samples | Location                |
| ------: | ----------: | -----: | ------------------: | ------: | ----------------------- |
| +202.7% | +12.456 MiB | 100.0% | 6.15 MiB → 18.6 MiB |   6 → 7 | `java.util.HashMap:710` |

##### `intStream(Spliterator$OfInt, boolean)` (`java.util.stream.StreamSupport`)

|  Change |      Delta |      % |                Size | Samples | Location                             |
| ------: | ---------: | -----: | ------------------: | ------: | ------------------------------------ |
| +237.7% | +5.285 MiB | 100.0% | 2.22 MiB → 7.51 MiB |  6 → 12 | `java.util.stream.StreamSupport:138` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |      Delta |      % |                Size | Samples | Location                                       |
| ------: | ---------: | -----: | ------------------: | ------: | ---------------------------------------------- |
| +195.7% | +5.168 MiB | 100.0% | 2.64 MiB → 7.81 MiB |  8 → 11 | `org.renaissance.jdk.concurrent.JavaKMeans:87` |

##### `opWrapSink(int, Sink)` (`java.util.stream.IntPipeline$1`)

|  Change |     Delta |      % |              Size | Samples | Location                             |
| ------: | --------: | -----: | ----------------: | ------: | ------------------------------------ |
| +412.8% | +3.06 MiB | 100.0% | 759 KiB → 3.8 MiB |   2 → 7 | `java.util.stream.IntPipeline$1:177` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

| Change |      Delta |             % |          Size | Samples | Location                                  |
| -----: | ---------: | ------------: | ------------: | ------: | ----------------------------------------- |
|    new | +2.903 MiB | 0.0% → 100.0% | 0 B → 2.9 MiB |   0 → 4 | `java.lang.invoke.DirectMethodHandle:501` |

##### `range(int, int)` (`java.util.stream.IntStream`)

| Change |      Delta |             % |           Size | Samples | Location                          |
| -----: | ---------: | ------------: | -------------: | ------: | --------------------------------- |
|    new | +2.022 MiB | 0.0% → 100.0% | 0 B → 2.02 MiB |   0 → 5 | `java.util.stream.IntStream:1083` |

##### `<init>(InputStream, Inflater, int)` (`java.util.zip.InflaterInputStream`)

| Change |      Delta |      % |                Size | Samples | Location                               |
| -----: | ---------: | -----: | ------------------: | ------: | -------------------------------------- |
| +36.1% | +1.797 MiB | 100.0% | 4.98 MiB → 6.78 MiB | 11 → 17 | `java.util.zip.InflaterInputStream:89` |

##### `visitMethod(int, String, String, String, String[])` (`jdk.internal.org.objectweb.asm.ClassWriter`)

| Change |        Delta |             % |          Size | Samples | Location                                         |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------ |
|    new | +782.015 KiB | 0.0% → 100.0% | 0 B → 782 KiB |   0 → 2 | `jdk.internal.org.objectweb.asm.ClassWriter:500` |

##### `read(InputStream, String)` (`java.util.jar.Manifest`)

| Change |        Delta |             % |          Size | Samples | Location                     |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------------- |
|    new | +641.398 KiB | 0.0% → 100.0% | 0 B → 641 KiB |   0 → 2 | `java.util.jar.Manifest:345` |

##### `makeAllocator(MemberName)` (`java.lang.invoke.DirectMethodHandle`)

| Change |        Delta |             % |          Size | Samples | Location                                  |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------------------------- |
|    new | +507.726 KiB | 0.0% → 100.0% | 0 B → 508 KiB |   0 → 1 | `java.lang.invoke.DirectMethodHandle:143` |

##### `<init>(int)` (`java.lang.AbstractStringBuilder`)

|  Change |        Delta |      % |              Size | Samples | Location                              |
| ------: | -----------: | -----: | ----------------: | ------: | ------------------------------------- |
| +103.3% | +399.453 KiB | 100.0% | 387 KiB → 786 KiB |   1 → 2 | `java.lang.AbstractStringBuilder:101` |

##### `toString()` (`java.lang.StringBuilder`)

| Change |        Delta |             % |          Size | Samples | Location                      |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------------- |
|    new | +394.859 KiB | 0.0% → 100.0% | 0 B → 395 KiB |   0 → 1 | `java.lang.StringBuilder:475` |

##### `allocateUninitializedArray(Class, int)` (`jdk.internal.misc.Unsafe`)

| Change |        Delta |             % |          Size | Samples | Location                        |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------- |
|    new | +391.835 KiB | 0.0% → 100.0% | 0 B → 392 KiB |   0 → 1 | `jdk.internal.misc.Unsafe:1380` |

##### `<init>(InputStream, int)` (`java.util.jar.Manifest$FastInputStream`)

| Change |        Delta |             % |          Size | Samples | Location                                     |
| -----: | -----------: | ------------: | ------------: | ------: | -------------------------------------------- |
|    new | +389.843 KiB | 0.0% → 100.0% | 0 B → 390 KiB |   0 → 1 | `java.util.jar.Manifest$FastInputStream:421` |

##### `allocateUninitializedArray0(Class, int)` (`jdk.internal.misc.Unsafe`)

| Change |       Delta |             % |          Size | Samples | Location                        |
| -----: | ----------: | ------------: | ------------: | ------: | ------------------------------- |
|    new | +382.57 KiB | 0.0% → 100.0% | 0 B → 383 KiB |   0 → 1 | `jdk.internal.misc.Unsafe:1387` |

##### `<init>(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

| Change |       Delta |             % |          Size | Samples | Location                                       |
| -----: | ----------: | ------------: | ------------: | ------: | ---------------------------------------------- |
|    new | +381.39 KiB | 0.0% → 100.0% | 0 B → 381 KiB |   0 → 1 | `jdk.internal.org.objectweb.asm.ByteVector:87` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |        Delta |      % |              Size |       Samples | Location                |
| -----: | -----------: | -----: | ----------------: | ------------: | ----------------------- |
|  -1.4% | -482.363 MiB | 100.0% | 34.5 GiB → 34 GiB | 1,664 → 1,783 | `java.util.Arrays:3482` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |        Delta |      % |               Size | Samples | Location                                                      |
| -----: | -----------: | -----: | -----------------: | ------: | ------------------------------------------------------------- |
| -84.8% | -295.831 MiB | 100.0% | 349 MiB → 53.2 MiB |  12 → 5 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |              Size | Samples | Location                                                       |
| -----: | -----------: | -----: | ----------------: | ------: | -------------------------------------------------------------- |
| -49.4% | -180.873 MiB | 100.0% | 366 MiB → 185 MiB |   9 → 8 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:209` |

##### `read(Manifest$FastInputStream, byte[], String, int)` (`java.util.jar.Attributes`)

|  Change |        Delta |             % |          Size | Samples | Location                       |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------ |
| removed | -160.192 MiB | 100.0% → 0.0% | 160 MiB → 0 B |   1 → 0 | `java.util.jar.Attributes:371` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |      % |               Size | Samples | Location                                        |
| -----: | -----------: | -----: | -----------------: | ------: | ----------------------------------------------- |
| -79.1% | -119.923 MiB | 100.0% | 152 MiB → 31.8 MiB |   5 → 3 | `org.renaissance.jdk.concurrent.JavaKMeans:110` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|  Change |       Delta |             % |           Size | Samples | Location                                |
| ------: | ----------: | ------------: | -------------: | ------: | --------------------------------------- |
| removed | -93.806 MiB | 100.0% → 0.0% | 93.8 MiB → 0 B |   2 → 0 | `java.util.concurrent.ForkJoinTask:437` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |             Size | Samples | Location                                                       |
| -----: | ----------: | -----: | ---------------: | ------: | -------------------------------------------------------------- |
| -99.0% | -84.174 MiB | 100.0% | 85 MiB → 857 KiB |   4 → 2 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |       Delta |      % |              Size | Samples | Location                  |
| -----: | ----------: | -----: | ----------------: | ------: | ------------------------- |
| -32.5% | -51.683 MiB | 100.0% | 159 MiB → 107 MiB |  10 → 5 | `java.util.ArrayList:239` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

|  Change |       Delta |             % |           Size | Samples | Location                |
| ------: | ----------: | ------------: | -------------: | ------: | ----------------------- |
| removed | -14.899 MiB | 100.0% → 0.0% | 14.9 MiB → 0 B |  21 → 0 | `java.util.Arrays:3513` |

##### `entrySet()` (`java.util.HashMap`)

|  Change |      Delta |             % |           Size | Samples | Location                 |
| ------: | ---------: | ------------: | -------------: | ------: | ------------------------ |
| removed | -3.376 MiB | 100.0% → 0.0% | 3.38 MiB → 0 B |   1 → 0 | `java.util.HashMap:1099` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |      Delta |             % |           Size | Samples | Location                                                   |
| ------: | ---------: | ------------: | -------------: | ------: | ---------------------------------------------------------- |
| removed | -2.245 MiB | 100.0% → 0.0% | 2.25 MiB → 0 B |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:314` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

| Change |      Delta |      % |                Size | Samples | Location                     |
| -----: | ---------: | -----: | ------------------: | ------: | ---------------------------- |
| -40.1% | -1.301 MiB | 100.0% | 3.25 MiB → 1.95 MiB |   9 → 4 | `java.util.stream.Nodes:168` |

##### `enlarge(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

|  Change |      Delta |             % |           Size | Samples | Location                                        |
| ------: | ---------: | ------------: | -------------: | ------: | ----------------------------------------------- |
| removed | -1.136 MiB | 100.0% → 0.0% | 1.14 MiB → 0 B |   3 → 0 | `jdk.internal.org.objectweb.asm.ByteVector:401` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

| Change |        Delta |      % |               Size | Samples | Location                |
| -----: | -----------: | -----: | -----------------: | ------: | ----------------------- |
| -53.1% | -861.695 KiB | 100.0% | 1.58 MiB → 760 KiB |   5 → 2 | `java.util.Arrays:3863` |

##### `compress(char[], int, int)` (`java.lang.StringUTF16`)

|  Change |        Delta |             % |          Size | Samples | Location                    |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------- |
| removed | -764.992 KiB | 100.0% → 0.0% | 765 KiB → 0 B |   1 → 0 | `java.lang.StringUTF16:211` |

##### `iterator()` (`java.util.ImmutableCollections$Set12`)

|  Change |        Delta |             % |          Size | Samples | Location                                   |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------------ |
| removed | -459.476 KiB | 100.0% → 0.0% | 459 KiB → 0 B |   1 → 0 | `java.util.ImmutableCollections$Set12:827` |

##### `register(Object, Runnable)` (`java.lang.ref.Cleaner`)

|  Change |        Delta |             % |          Size | Samples | Location                    |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------- |
| removed | -417.679 KiB | 100.0% → 0.0% | 418 KiB → 0 B |   1 → 0 | `java.lang.ref.Cleaner:224` |

##### `<init>(ClassWriter)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|  Change |        Delta |             % |          Size | Samples | Location                                         |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------ |
| removed | -386.804 KiB | 100.0% → 0.0% | 387 KiB → 0 B |   1 → 0 | `jdk.internal.org.objectweb.asm.SymbolTable:156` |

##### `visitField(int, String, String, String, Object)` (`jdk.internal.org.objectweb.asm.ClassWriter`)

|  Change |        Delta |             % |          Size | Samples | Location                                         |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------ |
| removed | -380.546 KiB | 100.0% → 0.0% | 381 KiB → 0 B |   1 → 0 | `jdk.internal.org.objectweb.asm.ClassWriter:483` |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

|  Change |        Delta |             % |          Size | Samples | Location                     |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------- |
| removed | -379.609 KiB | 100.0% → 0.0% | 380 KiB → 0 B |   1 → 0 | `java.lang.StringLatin1:750` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

| Change |      Delta |      % |     Size | Samples | Location                |
| -----: | ---------: | -----: | -------: | ------: | ----------------------- |
|  -0.5% | -63.32 KiB | 100.0% | 12.4 MiB | 23 → 33 | `java.util.Arrays:3541` |

##### `transferTo(OutputStream)` (`java.io.InputStream`)

|  Change |  Delta |             % |        Size | Samples | Location                  |
| ------: | -----: | ------------: | ----------: | ------: | ------------------------- |
| removed | -896 B | 100.0% → 0.0% | 896 B → 0 B |   1 → 0 | `java.io.InputStream:794` |

##### `readLine()` (`java.util.Properties$LineReader`)

| Change |  Delta |      % |    Size | Samples | Location                              |
| -----: | -----: | -----: | ------: | ------: | ------------------------------------- |
|    ~0% | -120 B | 100.0% | 377 KiB |       1 | `java.util.Properties$LineReader:574` |

##### `getInputStream(ZipEntry)` (`java.util.zip.ZipFile`)

| Change | Delta |      % |    Size | Samples | Location                    |
| -----: | ----: | -----: | ------: | ------: | --------------------------- |
|    ~0% | -40 B | 100.0% | 386 KiB |       1 | `java.util.zip.ZipFile:407` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |                Size | Samples | Caller              | Location                                                   |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------- | ---------------------------------------------------------- |
| +62.2% | +661.874 MiB | 100.0% | 1.04 GiB → 1.69 GiB | 64 → 68 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |              Size | Samples | Caller      | Location                                               |
| -----: | -----------: | -----: | ----------------: | ------: | ----------- | ------------------------------------------------------ |
| +82.2% | +200.148 MiB | 100.0% | 244 MiB → 444 MiB | 11 → 15 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

|  Change |       Delta |             % |                Size | Samples | Caller                                          | Location            |
| ------: | ----------: | ------------: | ------------------: | ------: | ----------------------------------------------- | ------------------- |
|  +55.8% | +92.185 MiB | 95.1% → 77.7% |   165 MiB → 258 MiB |   7 → 6 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |
| +760.4% | +65.319 MiB |  4.9% → 22.3% | 8.59 MiB → 73.9 MiB |   6 → 5 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|   Change |        Delta |      % |              Size | Samples | Caller                  | Location                                                               |
| -------: | -----------: | -----: | ----------------: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| +3910.6% | +105.542 MiB | 100.0% | 2.7 MiB → 108 MiB |   2 → 7 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121f178` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |             % |         Size | Samples | Caller              | Location                                                  |
| -----: | ----------: | ------------: | -----------: | ------: | ------------------- | --------------------------------------------------------- |
|    new | +76.003 MiB | 0.0% → 100.0% | 0 B → 76 MiB |   0 → 2 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `iterator()` (`java.util.HashMap$EntrySet`)

|  Change |       Delta |      % |                Size | Samples | Caller                        | Location            |
| ------: | ----------: | -----: | ------------------: | ------: | ----------------------------- | ------------------- |
| +924.6% | +40.295 MiB | 100.0% | 4.36 MiB → 44.7 MiB |   1 → 2 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|   Change |       Delta |      % |               Size | Samples | Caller                               | Location                                                  |
| -------: | ----------: | -----: | -----------------: | ------: | ------------------------------------ | --------------------------------------------------------- |
| +4706.5% | +39.693 MiB | 100.0% | 864 KiB → 40.5 MiB |   1 → 5 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `mapToObj(IntFunction, int)` (`java.util.stream.IntPipeline`)

|   Change |       Delta |      % |                Size | Samples | Caller                  | Location                       |
| -------: | ----------: | -----: | ------------------: | ------: | ----------------------- | ------------------------------ |
| +1159.2% | +21.485 MiB | 100.0% | 1.85 MiB → 23.3 MiB |  5 → 15 | `mapToObj(IntFunction)` | `java.util.stream.IntPipeline` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |       Delta |             % |           Size | Samples | Caller      | Location                                               |
| -----: | ----------: | ------------: | -------------: | ------: | ----------- | ------------------------------------------------------ |
|    new | +18.492 MiB | 0.0% → 100.0% | 0 B → 18.5 MiB |   0 → 1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `valueOf(double)` (`java.lang.Double`)

|  Change |       Delta |      % |                Size | Samples | Caller                                           | Location                                    |
| ------: | ----------: | -----: | ------------------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| +130.6% | +13.233 MiB | 100.0% | 10.1 MiB → 23.4 MiB | 28 → 36 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `resize()` (`java.util.HashMap`)

|  Change |       Delta |             % |                Size | Samples | Caller                                          | Location            |
| ------: | ----------: | ------------: | ------------------: | ------: | ----------------------------------------------- | ------------------- |
| +867.6% | +14.419 MiB | 27.0% → 86.5% | 1.66 MiB → 16.1 MiB |   2 → 4 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |
|  -43.8% |  -1.963 MiB | 73.0% → 13.5% | 4.48 MiB → 2.52 MiB |   4 → 3 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |

##### `intStream(Spliterator$OfInt, boolean)` (`java.util.stream.StreamSupport`)

|  Change |      Delta |      % |                Size | Samples | Caller            | Location                     |
| ------: | ---------: | -----: | ------------------: | ------: | ----------------- | ---------------------------- |
| +237.7% | +5.285 MiB | 100.0% | 2.22 MiB → 7.51 MiB |  6 → 12 | `range(int, int)` | `java.util.stream.IntStream` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |      Delta |      % |                Size | Samples | Caller       | Location                                                               |
| ------: | ---------: | -----: | ------------------: | ------: | ------------ | ---------------------------------------------------------------------- |
| +195.7% | +5.168 MiB | 100.0% | 2.64 MiB → 7.81 MiB |  8 → 11 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121d960` |

##### `opWrapSink(int, Sink)` (`java.util.stream.IntPipeline$1`)

|  Change |     Delta |      % |              Size | Samples | Caller           | Location                            |
| ------: | --------: | -----: | ----------------: | ------: | ---------------- | ----------------------------------- |
| +412.8% | +3.06 MiB | 100.0% | 759 KiB → 3.8 MiB |   2 → 7 | `wrapSink(Sink)` | `java.util.stream.AbstractPipeline` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

| Change |      Delta |             % |          Size | Samples | Caller                                       | Location                                             |
| -----: | ---------: | ------------: | ------------: | ------: | -------------------------------------------- | ---------------------------------------------------- |
|    new | +2.903 MiB | 0.0% → 100.0% | 0 B → 2.9 MiB |   0 → 4 | `newInvokeSpecial(Object, int, int, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000301220000` |

##### `range(int, int)` (`java.util.stream.IntStream`)

| Change |      Delta |             % |           Size | Samples | Caller                                           | Location                                    |
| -----: | ---------: | ------------: | -------------: | ------: | ------------------------------------------------ | ------------------------------------------- |
|    new | +2.022 MiB | 0.0% → 100.0% | 0 B → 2.02 MiB |   0 → 5 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `<init>(InputStream, Inflater, int)` (`java.util.zip.InflaterInputStream`)

| Change |      Delta |      % |                Size | Samples | Caller                                                                                  | Location                                           |
| -----: | ---------: | -----: | ------------------: | ------: | --------------------------------------------------------------------------------------- | -------------------------------------------------- |
| +36.1% | +1.797 MiB | 100.0% | 4.98 MiB → 6.78 MiB | 11 → 17 | `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, Inflater, int)` | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |

##### `visitMethod(int, String, String, String, String[])` (`jdk.internal.org.objectweb.asm.ClassWriter`)

| Change |        Delta |            % |          Size | Samples | Caller                 | Location                                       |
| -----: | -----------: | -----------: | ------------: | ------: | ---------------------- | ---------------------------------------------- |
|    new | +394.531 KiB | 0.0% → 50.5% | 0 B → 395 KiB |   0 → 1 | `generateInnerClass()` | `java.lang.invoke.InnerClassLambdaMetafactory` |
|    new | +387.484 KiB | 0.0% → 49.5% | 0 B → 387 KiB |   0 → 1 | `methodPrologue()`     | `java.lang.invoke.InvokerBytecodeGenerator`    |

##### `read(InputStream, String)` (`java.util.jar.Manifest`)

| Change |        Delta |             % |          Size | Samples | Caller                                     | Location                 |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------------------ | ------------------------ |
|    new | +641.398 KiB | 0.0% → 100.0% | 0 B → 641 KiB |   0 → 2 | `<init>(JarVerifier, InputStream, String)` | `java.util.jar.Manifest` |

##### `makeAllocator(MemberName)` (`java.lang.invoke.DirectMethodHandle`)

| Change |        Delta |             % |          Size | Samples | Caller             | Location                              |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------ | ------------------------------------- |
|    new | +507.726 KiB | 0.0% → 100.0% | 0 B → 508 KiB |   0 → 1 | `make(MemberName)` | `java.lang.invoke.DirectMethodHandle` |

##### `<init>(int)` (`java.lang.AbstractStringBuilder`)

|  Change |        Delta |             % |          Size | Samples | Caller        | Location                  |
| ------: | -----------: | ------------: | ------------: | ------: | ------------- | ------------------------- |
|     new | +786.046 KiB | 0.0% → 100.0% | 0 B → 786 KiB |   0 → 2 | `<init>()`    | `java.lang.StringBuilder` |
| removed | -386.593 KiB | 100.0% → 0.0% | 387 KiB → 0 B |   1 → 0 | `<init>(int)` | `java.lang.StringBuilder` |

##### `toString()` (`java.lang.StringBuilder`)

| Change |        Delta |             % |          Size | Samples | Caller               | Location          |
| -----: | -----------: | ------------: | ------------: | ------: | -------------------- | ----------------- |
|    new | +394.859 KiB | 0.0% → 100.0% | 0 B → 395 KiB |   0 → 1 | `descriptorString()` | `java.lang.Class` |

##### `allocateUninitializedArray(Class, int)` (`jdk.internal.misc.Unsafe`)

| Change |        Delta |             % |          Size | Samples | Caller           | Location                       |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------- | ------------------------------ |
|    new | +391.835 KiB | 0.0% → 100.0% | 0 B → 392 KiB |   0 → 1 | `newArray(long)` | `java.lang.StringConcatHelper` |

##### `<init>(InputStream, int)` (`java.util.jar.Manifest$FastInputStream`)

| Change |        Delta |             % |          Size | Samples | Caller                | Location                                 |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------- | ---------------------------------------- |
|    new | +389.843 KiB | 0.0% → 100.0% | 0 B → 390 KiB |   0 → 1 | `<init>(InputStream)` | `java.util.jar.Manifest$FastInputStream` |

##### `allocateUninitializedArray0(Class, int)` (`jdk.internal.misc.Unsafe`)

| Change |       Delta |             % |          Size | Samples | Caller                                   | Location                   |
| -----: | ----------: | ------------: | ------------: | ------: | ---------------------------------------- | -------------------------- |
|    new | +382.57 KiB | 0.0% → 100.0% | 0 B → 383 KiB |   0 → 1 | `allocateUninitializedArray(Class, int)` | `jdk.internal.misc.Unsafe` |

##### `clone()` (`java.lang.Object`)

| Change |        Delta |             % |          Size | Samples | Caller                          | Location           |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------- | ------------------ |
|    new | +381.867 KiB | 0.0% → 100.0% | 0 B → 382 KiB |   0 → 1 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `<init>(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

| Change |       Delta |             % |          Size | Samples | Caller          | Location                                     |
| -----: | ----------: | ------------: | ------------: | ------: | --------------- | -------------------------------------------- |
|    new | +381.39 KiB | 0.0% → 100.0% | 0 B → 381 KiB |   0 → 1 | `toByteArray()` | `jdk.internal.org.objectweb.asm.ClassWriter` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |        Delta |             % |                Size |   Samples | Caller      | Location              |
| -----: | -----------: | ------------: | ------------------: | --------: | ----------- | --------------------- |
|  -2.5% | -440.791 MiB | 50.2% → 49.7% | 17.3 GiB → 16.9 GiB | 805 → 880 | `toArray()` | `java.util.ArrayList` |
|  -0.2% |  -41.571 MiB | 49.8% → 50.3% | 17.2 GiB → 17.1 GiB | 859 → 903 | `grow(int)` | `java.util.ArrayList` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |        Delta |      % |               Size | Samples | Caller      | Location                                               |
| -----: | -----------: | -----: | -----------------: | ------: | ----------- | ------------------------------------------------------ |
| -84.8% | -295.831 MiB | 100.0% | 349 MiB → 53.2 MiB |  12 → 5 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |              Size | Samples | Caller              | Location                                                   |
| -----: | -----------: | -----: | ----------------: | ------: | ------------------- | ---------------------------------------------------------- |
| -49.4% | -180.873 MiB | 100.0% | 366 MiB → 185 MiB |   9 → 8 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `read(Manifest$FastInputStream, byte[], String, int)` (`java.util.jar.Attributes`)

|  Change |        Delta |             % |          Size | Samples | Caller                      | Location                 |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------- | ------------------------ |
| removed | -160.192 MiB | 100.0% → 0.0% | 160 MiB → 0 B |   1 → 0 | `read(InputStream, String)` | `java.util.jar.Manifest` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |      % |               Size | Samples | Caller                     | Location                                                   |
| -----: | -----------: | -----: | -----------------: | ------: | -------------------------- | ---------------------------------------------------------- |
| -79.1% | -119.923 MiB | 100.0% | 152 MiB → 31.8 MiB |   5 → 3 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|  Change |       Delta |             % |           Size | Samples | Caller   | Location                            |
| ------: | ----------: | ------------: | -------------: | ------: | -------- | ----------------------------------- |
| removed | -93.806 MiB | 100.0% → 0.0% | 93.8 MiB → 0 B |   2 → 0 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |             Size | Samples | Caller          | Location                                                                              |
| -----: | ----------: | -----: | ---------------: | ------: | --------------- | ------------------------------------------------------------------------------------- |
| -99.0% | -84.174 MiB | 100.0% | 85 MiB → 857 KiB |   4 → 2 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000030121ece0` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |       Delta |      % |              Size | Samples | Caller   | Location              |
| -----: | ----------: | -----: | ----------------: | ------: | -------- | --------------------- |
| -32.5% | -51.683 MiB | 100.0% | 159 MiB → 107 MiB |  10 → 5 | `grow()` | `java.util.ArrayList` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

|  Change |       Delta |             % |           Size | Samples | Caller                  | Location           |
| ------: | ----------: | ------------: | -------------: | ------: | ----------------------- | ------------------ |
| removed | -14.899 MiB | 100.0% → 0.0% | 14.9 MiB → 0 B |  21 → 0 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `entrySet()` (`java.util.HashMap`)

|  Change |      Delta |             % |           Size | Samples | Caller                        | Location            |
| ------: | ---------: | ------------: | -------------: | ------: | ----------------------------- | ------------------- |
| removed | -3.376 MiB | 100.0% → 0.0% | 3.38 MiB → 0 B |   1 → 0 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |      Delta |             % |           Size | Samples | Caller              | Location                                               |
| ------: | ---------: | ------------: | -------------: | ------: | ------------------- | ------------------------------------------------------ |
| removed | -2.245 MiB | 100.0% → 0.0% | 2.25 MiB → 0 B |   1 → 0 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

| Change |      Delta |      % |                Size | Samples | Caller                               | Location                             |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------------------ | ------------------------------------ |
| -40.1% | -1.301 MiB | 100.0% | 3.25 MiB → 1.95 MiB |   9 → 4 | `makeNodeBuilder(long, IntFunction)` | `java.util.stream.ReferencePipeline` |

##### `enlarge(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

|  Change |        Delta |            % |          Size | Samples | Caller                  | Location                                    |
| ------: | -----------: | -----------: | ------------: | ------: | ----------------------- | ------------------------------------------- |
| removed | -757.796 KiB | 65.1% → 0.0% | 758 KiB → 0 B |   2 → 0 | `putUTF8(String)`       | `jdk.internal.org.objectweb.asm.ByteVector` |
| removed | -405.765 KiB | 34.9% → 0.0% | 406 KiB → 0 B |   1 → 0 | `put122(int, int, int)` | `jdk.internal.org.objectweb.asm.ByteVector` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

| Change |        Delta |      % |               Size | Samples | Caller                          | Location           |
| -----: | -----------: | -----: | -----------------: | ------: | ------------------------------- | ------------------ |
| -53.1% | -861.695 KiB | 100.0% | 1.58 MiB → 760 KiB |   5 → 2 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `compress(char[], int, int)` (`java.lang.StringUTF16`)

|  Change |        Delta |             % |          Size | Samples | Caller                           | Location           |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------------------- | ------------------ |
| removed | -764.992 KiB | 100.0% → 0.0% | 765 KiB → 0 B |   1 → 0 | `<init>(char[], int, int, Void)` | `java.lang.String` |

##### `allocateInstance(Class)` (`jdk.internal.misc.Unsafe`)

| Change |        Delta |      % |                Size | Samples | Caller                     | Location                              |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------- | ------------------------------------- |
| -33.3% | -759.296 KiB | 100.0% | 2.22 MiB → 1.48 MiB |   6 → 4 | `allocateInstance(Object)` | `java.lang.invoke.DirectMethodHandle` |

##### `iterator()` (`java.util.ImmutableCollections$Set12`)

|  Change |        Delta |             % |          Size | Samples | Caller               | Location                                            |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------- | --------------------------------------------------- |
| removed | -459.476 KiB | 100.0% → 0.0% | 459 KiB → 0 B |   1 → 0 | `optionsToFlag(Set)` | `java.lang.invoke.MethodHandles$Lookup$ClassOption` |

##### `register(Object, Runnable)` (`java.lang.ref.Cleaner`)

|  Change |        Delta |             % |          Size | Samples | Caller                                                                                  | Location                                           |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------------------------------------------------------------------- | -------------------------------------------------- |
| removed | -417.679 KiB | 100.0% → 0.0% | 418 KiB → 0 B |   1 → 0 | `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, Inflater, int)` | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |

##### `<init>(ClassWriter)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|  Change |        Delta |             % |          Size | Samples | Caller                     | Location                                     |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------------- | -------------------------------------------- |
| removed | -386.804 KiB | 100.0% → 0.0% | 387 KiB → 0 B |   1 → 0 | `<init>(ClassReader, int)` | `jdk.internal.org.objectweb.asm.ClassWriter` |

##### `visitField(int, String, String, String, Object)` (`jdk.internal.org.objectweb.asm.ClassWriter`)

|  Change |        Delta |             % |          Size | Samples | Caller                 | Location                                       |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------- | ---------------------------------------------- |
| removed | -380.546 KiB | 100.0% → 0.0% | 381 KiB → 0 B |   1 → 0 | `generateInnerClass()` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

|  Change |        Delta |             % |          Size | Samples | Caller                | Location           |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------- | ------------------ |
| removed | -379.609 KiB | 100.0% → 0.0% | 380 KiB → 0 B |   1 → 0 | `substring(int, int)` | `java.lang.String` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

| Change |      Delta |             % |              Size | Samples | Caller                        | Location                          |
| -----: | ---------: | ------------: | ----------------: | ------: | ----------------------------- | --------------------------------- |
| -81.9% | -1.718 MiB |  16.9% → 3.1% | 2.1 MiB → 388 KiB |   3 → 1 | `ensureCapacityInternal(int)` | `java.lang.AbstractStringBuilder` |
| +16.0% | +1.656 MiB | 83.1% → 96.9% | 10.3 MiB → 12 MiB | 20 → 32 | `getBytes()`                  | `jdk.internal.loader.Resource`    |

##### `transferTo(OutputStream)` (`java.io.InputStream`)

|  Change |  Delta |             % |        Size | Samples | Caller                                  | Location              |
| ------: | -----: | ------------: | ----------: | ------: | --------------------------------------- | --------------------- |
| removed | -896 B | 100.0% → 0.0% | 896 B → 0 B |   1 → 0 | `copy(InputStream, Path, CopyOption[])` | `java.nio.file.Files` |

##### `readLine()` (`java.util.Properties$LineReader`)

| Change |  Delta |      % |    Size | Samples | Caller                         | Location               |
| -----: | -----: | -----: | ------: | ------: | ------------------------------ | ---------------------- |
|    ~0% | -120 B | 100.0% | 377 KiB |       1 | `load0(Properties$LineReader)` | `java.util.Properties` |

##### `getInputStream(ZipEntry)` (`java.util.zip.ZipFile`)

| Change | Delta |      % |    Size | Samples | Caller                     | Location                |
| -----: | ----: | -----: | ------: | ------: | -------------------------- | ----------------------- |
|    ~0% | -40 B | 100.0% | 386 KiB |       1 | `getInputStream(ZipEntry)` | `java.util.jar.JarFile` |

### Total size

#### Regressions

Functions with the largest increase in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |        Delta |             % |                Size |       Samples | Function                                                                                                               | Location                                                   |
| ------: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|  +10.7% |    +2.66 GiB | 66.4% → 73.8% | 24.8 GiB → 27.5 GiB | 1,262 → 1,353 | `awaitDone(int, long)`                                                                                                 | `java.util.concurrent.ForkJoinTask`                        |
|  +10.7% |    +2.66 GiB | 66.4% → 73.8% | 24.8 GiB → 27.5 GiB | 1,262 → 1,353 | `join()`                                                                                                               | `java.util.concurrent.ForkJoinTask`                        |
|  +10.1% |   +2.501 GiB | 66.2% → 73.1% | 24.7 GiB → 27.2 GiB | 1,249 → 1,337 | `tryRemoveAndExec(ForkJoinTask, boolean)`                                                                              | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|  +18.3% |   +1.114 GiB | 16.3% → 19.3% |  6.08 GiB → 7.2 GiB |     332 → 345 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +22.8% | +870.684 MiB | 10.0% → 12.3% | 3.73 GiB → 4.58 GiB |     199 → 248 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`                                                              | `java.util.concurrent.ForkJoinPool`                        |
|  +62.2% | +661.874 MiB |   2.8% → 4.5% | 1.04 GiB → 1.69 GiB |       64 → 68 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +14.4% | +654.869 MiB | 11.9% → 13.6% | 4.44 GiB → 5.08 GiB |     244 → 259 | `grow()`                                                                                                               | `java.util.ArrayList`                                      |
|  +14.4% | +654.869 MiB | 11.9% → 13.6% | 4.44 GiB → 5.08 GiB |     244 → 259 | `add(Object, Object[], int)`                                                                                           | `java.util.ArrayList`                                      |
|  +14.4% | +654.869 MiB | 11.9% → 13.6% | 4.44 GiB → 5.08 GiB |     244 → 259 | `add(Object)`                                                                                                          | `java.util.ArrayList`                                      |
|   +9.3% | +479.126 MiB | 13.5% → 14.8% | 5.05 GiB → 5.51 GiB |     268 → 277 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +82.2% | +200.148 MiB |   0.6% → 1.2% |   244 MiB → 444 MiB |       11 → 15 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +90.6% | +157.504 MiB |   0.5% → 0.9% |   174 MiB → 331 MiB |       13 → 11 | `newNode(int, Object, Object, HashMap$Node)`                                                                           | `java.util.HashMap`                                        |
| +658.6% | +115.913 MiB |  <0.1% → 0.3% |  17.6 MiB → 134 MiB |         9 → 8 | `putMapEntries(Map, boolean)`                                                                                          | `java.util.HashMap`                                        |
| +658.6% | +115.913 MiB |  <0.1% → 0.3% |  17.6 MiB → 134 MiB |         9 → 8 | `<init>(Map)`                                                                                                          | `java.util.HashMap`                                        |
|     new |  +85.522 MiB |   0.0% → 0.2% |      0 B → 85.5 MiB |       0 → 127 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                |
| +777.8% |  +79.738 MiB |  <0.1% → 0.2% |   10.3 MiB → 90 MiB |         8 → 9 | `putVal(int, Object, Object, boolean, boolean)`                                                                        | `java.util.HashMap`                                        |
|     new |  +76.003 MiB |   0.0% → 0.2% |        0 B → 76 MiB |         0 → 2 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|     new |  +76.003 MiB |   0.0% → 0.2% |        0 B → 76 MiB |         0 → 2 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +121.6% |  +61.873 MiB |   0.1% → 0.3% |  50.9 MiB → 113 MiB |         3 → 7 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| +262.7% |  +60.585 MiB |   0.1% → 0.2% | 23.1 MiB → 83.6 MiB |      64 → 122 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | `org.renaissance.jdk.concurrent.FjKmeans`                  |

##### Standard library

|  Change |        Delta |             % |                Size |       Samples | Function                                                  | Location                                       |
| ------: | -----------: | ------------: | ------------------: | ------------: | --------------------------------------------------------- | ---------------------------------------------- |
|  +10.7% |    +2.66 GiB | 66.4% → 73.8% | 24.8 GiB → 27.5 GiB | 1,262 → 1,353 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`            |
|  +10.7% |    +2.66 GiB | 66.4% → 73.8% | 24.8 GiB → 27.5 GiB | 1,262 → 1,353 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`            |
|  +10.1% |   +2.501 GiB | 66.2% → 73.1% | 24.7 GiB → 27.2 GiB | 1,249 → 1,337 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`  |
|  +22.8% | +870.684 MiB | 10.0% → 12.3% | 3.73 GiB → 4.58 GiB |     199 → 248 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`            |
|  +14.4% | +654.869 MiB | 11.9% → 13.6% | 4.44 GiB → 5.08 GiB |     244 → 259 | `grow()`                                                  | `java.util.ArrayList`                          |
|  +14.4% | +654.869 MiB | 11.9% → 13.6% | 4.44 GiB → 5.08 GiB |     244 → 259 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                          |
|  +14.4% | +654.869 MiB | 11.9% → 13.6% | 4.44 GiB → 5.08 GiB |     244 → 259 | `add(Object)`                                             | `java.util.ArrayList`                          |
|  +90.6% | +157.504 MiB |   0.5% → 0.9% |   174 MiB → 331 MiB |       13 → 11 | `newNode(int, Object, Object, HashMap$Node)`              | `java.util.HashMap`                            |
| +658.6% | +115.913 MiB |  <0.1% → 0.3% |  17.6 MiB → 134 MiB |         9 → 8 | `putMapEntries(Map, boolean)`                             | `java.util.HashMap`                            |
| +658.6% | +115.913 MiB |  <0.1% → 0.3% |  17.6 MiB → 134 MiB |         9 → 8 | `<init>(Map)`                                             | `java.util.HashMap`                            |
| +777.8% |  +79.738 MiB |  <0.1% → 0.2% |   10.3 MiB → 90 MiB |         8 → 9 | `putVal(int, Object, Object, boolean, boolean)`           | `java.util.HashMap`                            |
| +253.1% |  +59.307 MiB |   0.1% → 0.2% | 23.4 MiB → 82.7 MiB |      65 → 120 | `copyInto(Sink, Spliterator)`                             | `java.util.stream.AbstractPipeline`            |
| +253.1% |  +59.307 MiB |   0.1% → 0.2% | 23.4 MiB → 82.7 MiB |      65 → 120 | `wrapAndCopyInto(Sink, Spliterator)`                      | `java.util.stream.AbstractPipeline`            |
| +253.1% |  +59.307 MiB |   0.1% → 0.2% | 23.4 MiB → 82.7 MiB |      65 → 120 | `evaluateSequential(PipelineHelper, Spliterator)`         | `java.util.stream.ReduceOps$ReduceOp`          |
| +253.1% |  +59.307 MiB |   0.1% → 0.2% | 23.4 MiB → 82.7 MiB |      65 → 120 | `evaluate(TerminalOp)`                                    | `java.util.stream.AbstractPipeline`            |
| +253.1% |  +59.307 MiB |   0.1% → 0.2% | 23.4 MiB → 82.7 MiB |      65 → 120 | `collect(Collector)`                                      | `java.util.stream.ReferencePipeline`           |
| +225.6% |  +52.031 MiB |   0.1% → 0.2% | 23.1 MiB → 75.1 MiB |       64 → 99 | `accept(int)`                                             | `java.util.stream.IntPipeline$1$1`             |
| +225.6% |  +52.031 MiB |   0.1% → 0.2% | 23.1 MiB → 75.1 MiB |       64 → 99 | `forEachRemaining(IntConsumer)`                           | `java.util.stream.Streams$RangeIntSpliterator` |
| +225.6% |  +52.031 MiB |   0.1% → 0.2% | 23.1 MiB → 75.1 MiB |       64 → 99 | `forEachRemaining(Consumer)`                              | `java.util.Spliterator$OfInt`                  |
| +924.6% |  +40.295 MiB |  <0.1% → 0.1% | 4.36 MiB → 44.7 MiB |         1 → 2 | `iterator()`                                              | `java.util.HashMap$EntrySet`                   |

##### Ours

|   Change |        Delta |             % |                Size |   Samples | Function                                                                                                               | Location                                                               |
| -------: | -----------: | ------------: | ------------------: | --------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|   +18.3% |   +1.114 GiB | 16.3% → 19.3% |  6.08 GiB → 7.2 GiB | 332 → 345 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   +62.2% | +661.874 MiB |   2.8% → 4.5% | 1.04 GiB → 1.69 GiB |   64 → 68 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|    +9.3% | +479.126 MiB | 13.5% → 14.8% | 5.05 GiB → 5.51 GiB | 268 → 277 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   +82.2% | +200.148 MiB |   0.6% → 1.2% |   244 MiB → 444 MiB |   11 → 15 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|      new |  +85.522 MiB |   0.0% → 0.2% |      0 B → 85.5 MiB |   0 → 127 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|      new |  +76.003 MiB |   0.0% → 0.2% |        0 B → 76 MiB |     0 → 2 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|      new |  +76.003 MiB |   0.0% → 0.2% |        0 B → 76 MiB |     0 → 2 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  +121.6% |  +61.873 MiB |   0.1% → 0.3% |  50.9 MiB → 113 MiB |     3 → 7 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  +262.7% |  +60.585 MiB |   0.1% → 0.2% | 23.1 MiB → 83.6 MiB |  64 → 122 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  +112.2% |  +59.627 MiB |   0.1% → 0.3% |  53.1 MiB → 113 MiB |     4 → 7 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  +112.2% |  +59.627 MiB |   0.1% → 0.3% |  53.1 MiB → 113 MiB |     4 → 7 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  +225.6% |  +52.031 MiB |   0.1% → 0.2% | 23.1 MiB → 75.1 MiB |   64 → 99 | `generateData(int, int, int)`                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +221.7% |  +51.115 MiB |   0.1% → 0.2% | 23.1 MiB → 74.2 MiB |   64 → 98 | `lambda$generateData$5(int, int, Random[], int)`                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +221.7% |  +51.115 MiB |   0.1% → 0.2% | 23.1 MiB → 74.2 MiB |   64 → 98 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121d4f0` |
| +4706.5% |  +39.693 MiB |  <0.1% → 0.1% |  864 KiB → 40.5 MiB |     1 → 5 | `add(double[], double[])`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| +4706.5% |  +39.693 MiB |  <0.1% → 0.1% |  864 KiB → 40.5 MiB |     1 → 5 | `combineResults(double[], double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| +4706.5% |  +39.693 MiB |  <0.1% → 0.1% |  864 KiB → 40.5 MiB |     1 → 5 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|      new |  +18.492 MiB |  0.0% → <0.1% |      0 B → 18.5 MiB |     0 → 1 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  +130.6% |  +13.233 MiB |  <0.1% → 0.1% | 10.1 MiB → 23.4 MiB |   28 → 36 | `lambda$generateData$3(int, int, Random[], int)`                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +130.6% |  +13.233 MiB |  <0.1% → 0.1% | 10.1 MiB → 23.4 MiB |   28 → 36 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121d728` |

#### Improvements

Functions with the largest decrease in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |        Delta |             % |                Size |       Samples | Function                                                                                                               | Location                                                               |
| ------: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|   -3.5% |   -1.076 GiB | 81.3% → 78.7% | 30.4 GiB → 29.3 GiB | 1,467 → 1,547 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -3.5% |   -1.076 GiB | 81.3% → 78.7% | 30.4 GiB → 29.3 GiB | 1,467 → 1,547 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -3.5% |   -1.076 GiB | 81.3% → 78.7% | 30.4 GiB → 29.3 GiB | 1,467 → 1,547 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -3.5% |   -1.072 GiB | 80.9% → 78.3% | 30.2 GiB → 29.2 GiB | 1,453 → 1,536 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -3.5% |   -1.072 GiB | 80.9% → 78.3% | 30.2 GiB → 29.2 GiB | 1,453 → 1,536 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121f178` |
|   -3.5% |   -1.072 GiB | 80.9% → 78.3% | 30.2 GiB → 29.2 GiB | 1,453 → 1,536 | `merge(Object, Object, BiFunction)`                                                                                    | `java.util.HashMap`                                                    |
|   -3.5% |   -1.072 GiB | 80.9% → 78.3% | 30.2 GiB → 29.2 GiB | 1,453 → 1,536 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -3.5% |   -1.072 GiB | 80.9% → 78.3% | 30.2 GiB → 29.2 GiB | 1,453 → 1,536 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121ef30` |
|   -3.5% |   -1.072 GiB | 80.9% → 78.3% | 30.2 GiB → 29.2 GiB | 1,453 → 1,536 | `forEach(BiConsumer)`                                                                                                  | `java.util.HashMap`                                                    |
|   -2.1% | -756.905 MiB | 94.3% → 92.6% | 35.2 GiB → 34.5 GiB | 1,726 → 1,801 | `run()`                                                                                                                | `java.util.concurrent.ForkJoinWorkerThread`                            |
|   -9.0% | -743.782 MiB | 21.5% → 19.6% | 8.05 GiB → 7.32 GiB |     359 → 363 | `<init>(Collection)`                                                                                                   | `java.util.ArrayList`                                                  |
|   -2.0% | -734.201 MiB | 94.3% → 92.6% | 35.2 GiB → 34.5 GiB | 1,726 → 1,802 | `runWorker(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`                                    |
|   -2.0% | -729.855 MiB | 94.4% → 92.8% | 35.3 GiB → 34.6 GiB | 1,732 → 1,811 | `scan(ForkJoinPool$WorkQueue, int, int)`                                                                               | `java.util.concurrent.ForkJoinPool`                                    |
|   -1.4% | -497.263 MiB | 92.3% → 91.3% |   34.5 GiB → 34 GiB | 1,685 → 1,783 | `copyOf(Object[], int)`                                                                                                | `java.util.Arrays`                                                     |
|   -2.0% | -460.033 MiB | 59.3% → 58.3% | 22.2 GiB → 21.7 GiB | 1,092 → 1,166 | `addAll(Collection)`                                                                                                   | `java.util.ArrayList`                                                  |
|   -2.5% | -443.419 MiB | 46.4% → 45.4% | 17.3 GiB → 16.9 GiB |     809 → 880 | `toArray()`                                                                                                            | `java.util.ArrayList`                                                  |
|   -1.0% |  -372.99 MiB | 94.7% → 94.0% |   35.4 GiB → 35 GiB | 1,744 → 1,829 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`                                                                   | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|  -84.8% | -295.831 MiB |   0.9% → 0.1% |  349 MiB → 53.2 MiB |        12 → 5 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   -2.6% | -194.969 MiB | 19.6% → 19.2% | 7.33 GiB → 7.14 GiB |     215 → 223 | `invoke()`                                                                                                             | `java.util.concurrent.ForkJoinTask`                                    |
| removed | -190.287 MiB |   0.5% → 0.0% |       190 MiB → 0 B |        72 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |

##### Standard library

|  Change |        Delta |             % |                Size |       Samples | Function                                              | Location                                            |
| ------: | -----------: | ------------: | ------------------: | ------------: | ----------------------------------------------------- | --------------------------------------------------- |
|   -3.5% |   -1.072 GiB | 80.9% → 78.3% | 30.2 GiB → 29.2 GiB | 1,453 → 1,536 | `merge(Object, Object, BiFunction)`                   | `java.util.HashMap`                                 |
|   -3.5% |   -1.072 GiB | 80.9% → 78.3% | 30.2 GiB → 29.2 GiB | 1,453 → 1,536 | `forEach(BiConsumer)`                                 | `java.util.HashMap`                                 |
|   -2.1% | -756.905 MiB | 94.3% → 92.6% | 35.2 GiB → 34.5 GiB | 1,726 → 1,801 | `run()`                                               | `java.util.concurrent.ForkJoinWorkerThread`         |
|   -9.0% | -743.782 MiB | 21.5% → 19.6% | 8.05 GiB → 7.32 GiB |     359 → 363 | `<init>(Collection)`                                  | `java.util.ArrayList`                               |
|   -2.0% | -734.201 MiB | 94.3% → 92.6% | 35.2 GiB → 34.5 GiB | 1,726 → 1,802 | `runWorker(ForkJoinPool$WorkQueue)`                   | `java.util.concurrent.ForkJoinPool`                 |
|   -2.0% | -729.855 MiB | 94.4% → 92.8% | 35.3 GiB → 34.6 GiB | 1,732 → 1,811 | `scan(ForkJoinPool$WorkQueue, int, int)`              | `java.util.concurrent.ForkJoinPool`                 |
|   -1.4% | -497.263 MiB | 92.3% → 91.3% |   34.5 GiB → 34 GiB | 1,685 → 1,783 | `copyOf(Object[], int)`                               | `java.util.Arrays`                                  |
|   -2.0% | -460.033 MiB | 59.3% → 58.3% | 22.2 GiB → 21.7 GiB | 1,092 → 1,166 | `addAll(Collection)`                                  | `java.util.ArrayList`                               |
|   -2.5% | -443.419 MiB | 46.4% → 45.4% | 17.3 GiB → 16.9 GiB |     809 → 880 | `toArray()`                                           | `java.util.ArrayList`                               |
|   -1.0% |  -372.99 MiB | 94.7% → 94.0% |   35.4 GiB → 35 GiB | 1,744 → 1,829 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`  | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
|   -2.6% | -194.969 MiB | 19.6% → 19.2% | 7.33 GiB → 7.14 GiB |     215 → 223 | `invoke()`                                            | `java.util.concurrent.ForkJoinTask`                 |
|   -2.4% | -174.482 MiB | 19.3% → 18.9% | 7.21 GiB → 7.04 GiB |     205 → 214 | `exec()`                                              | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
| removed | -160.192 MiB |   0.4% → 0.0% |       160 MiB → 0 B |         1 → 0 | `read(Manifest$FastInputStream, byte[], String, int)` | `java.util.jar.Attributes`                          |
|  -98.4% | -158.754 MiB |  0.4% → <0.1% |  161 MiB → 2.51 MiB |         4 → 7 | `read(InputStream, String)`                           | `java.util.jar.Manifest`                            |
|  -98.4% | -158.754 MiB |  0.4% → <0.1% |  161 MiB → 2.51 MiB |         4 → 7 | `<init>(JarVerifier, InputStream, String)`            | `java.util.jar.Manifest`                            |
|  -98.4% | -158.754 MiB |  0.4% → <0.1% |  161 MiB → 2.51 MiB |         4 → 7 | `<init>(InputStream, String)`                         | `java.util.jar.Manifest`                            |
|  -98.4% | -158.754 MiB |  0.4% → <0.1% |  161 MiB → 2.51 MiB |         4 → 7 | `getManifestFromReference()`                          | `java.util.jar.JarFile`                             |
|  -98.4% | -158.754 MiB |  0.4% → <0.1% |  161 MiB → 2.51 MiB |         4 → 7 | `getManifest()`                                       | `java.util.jar.JarFile`                             |
|  -98.4% | -158.754 MiB |  0.4% → <0.1% |  161 MiB → 2.51 MiB |         4 → 7 | `getManifest()`                                       | `jdk.internal.loader.URLClassPath$JarLoader$2`      |
|  -86.4% | -155.545 MiB |   0.5% → 0.1% |  180 MiB → 24.4 MiB |       42 → 64 | `loadClass(String, boolean)`                          | `java.lang.ClassLoader`                             |

##### Ours

|  Change |        Delta |             % |                Size |       Samples | Function                                                                                                               | Location                                                               |
| ------: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|   -3.5% |   -1.076 GiB | 81.3% → 78.7% | 30.4 GiB → 29.3 GiB | 1,467 → 1,547 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -3.5% |   -1.076 GiB | 81.3% → 78.7% | 30.4 GiB → 29.3 GiB | 1,467 → 1,547 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -3.5% |   -1.076 GiB | 81.3% → 78.7% | 30.4 GiB → 29.3 GiB | 1,467 → 1,547 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -3.5% |   -1.072 GiB | 80.9% → 78.3% | 30.2 GiB → 29.2 GiB | 1,453 → 1,536 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -3.5% |   -1.072 GiB | 80.9% → 78.3% | 30.2 GiB → 29.2 GiB | 1,453 → 1,536 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121f178` |
|   -3.5% |   -1.072 GiB | 80.9% → 78.3% | 30.2 GiB → 29.2 GiB | 1,453 → 1,536 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -3.5% |   -1.072 GiB | 80.9% → 78.3% | 30.2 GiB → 29.2 GiB | 1,453 → 1,536 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121ef30` |
|  -84.8% | -295.831 MiB |   0.9% → 0.1% |  349 MiB → 53.2 MiB |        12 → 5 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| removed | -190.287 MiB |   0.5% → 0.0% |       190 MiB → 0 B |        72 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|   -2.4% | -174.482 MiB | 19.3% → 18.9% | 7.21 GiB → 7.04 GiB |     205 → 214 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -2.4% | -174.482 MiB | 19.3% → 18.9% | 7.21 GiB → 7.04 GiB |     205 → 214 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121df70` |
| removed | -166.818 MiB |   0.4% → 0.0% |       167 MiB → 0 B |         6 → 0 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                              |
| removed | -166.818 MiB |   0.4% → 0.0% |       167 MiB → 0 B |         6 → 0 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |
|  -55.9% | -106.232 MiB |   0.5% → 0.2% |  190 MiB → 83.6 MiB |      70 → 122 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|  -50.7% | -105.663 MiB |   0.5% → 0.3% |   208 MiB → 103 MiB |     120 → 172 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
|  -50.5% |  -105.28 MiB |   0.5% → 0.3% |   208 MiB → 103 MiB |     120 → 173 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
|  -50.5% | -104.883 MiB |   0.5% → 0.3% |   208 MiB → 103 MiB |     118 → 172 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
|  -51.3% | -104.881 MiB |   0.5% → 0.3% |  205 MiB → 99.7 MiB |     110 → 164 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -55.1% | -104.765 MiB |   0.5% → 0.2% |  190 MiB → 85.5 MiB |      72 → 127 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000030119c3b8` |
|  -50.4% | -104.492 MiB |   0.5% → 0.3% |   207 MiB → 103 MiB |     117 → 172 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |             % |                Size |       Samples | Callee                                                    | Location                                      |
| -----: | -----------: | ------------: | ------------------: | ------------: | --------------------------------------------------------- | --------------------------------------------- |
| +10.1% |   +2.501 GiB | 99.6% → 99.1% | 24.7 GiB → 27.2 GiB | 1,249 → 1,337 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| +22.8% | +870.684 MiB | 15.0% → 16.6% | 3.73 GiB → 4.58 GiB |     199 → 248 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change |     Delta |      % |                Size |       Samples | Callee                 | Location                            |
| -----: | --------: | -----: | ------------------: | ------------: | ---------------------- | ----------------------------------- |
| +10.7% | +2.66 GiB | 100.0% | 24.8 GiB → 27.5 GiB | 1,262 → 1,353 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |      Delta |      % |                Size |       Samples | Callee     | Location                            |
| -----: | ---------: | -----: | ------------------: | ------------: | ---------- | ----------------------------------- |
| +10.1% | +2.501 GiB | 100.0% | 24.7 GiB → 27.2 GiB | 1,249 → 1,337 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |             % |                Size |   Samples | Callee                   | Location                                                   |
| -----: | -----------: | ------------: | ------------------: | --------: | ------------------------ | ---------------------------------------------------------- |
| +18.3% |   +1.114 GiB |        100.0% |  6.08 GiB → 7.2 GiB | 332 → 345 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +62.2% | +661.874 MiB | 17.1% → 23.4% | 1.04 GiB → 1.69 GiB |   64 → 68 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +9.3% | +479.126 MiB | 82.9% → 76.6% | 5.05 GiB → 5.51 GiB | 268 → 277 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change |        Delta |      % |                Size |   Samples | Callee     | Location                            |
| -----: | -----------: | -----: | ------------------: | --------: | ---------- | ----------------------------------- |
| +22.8% | +870.684 MiB | 100.0% | 3.73 GiB → 4.58 GiB | 199 → 248 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `grow()` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |   Samples | Callee      | Location              |
| -----: | -----------: | -----: | ------------------: | --------: | ----------- | --------------------- |
| +14.4% | +654.869 MiB | 100.0% | 4.44 GiB → 5.08 GiB | 244 → 259 | `grow(int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |   Samples | Callee   | Location              |
| -----: | -----------: | -----: | ------------------: | --------: | -------- | --------------------- |
| +14.4% | +654.869 MiB | 100.0% | 4.44 GiB → 5.08 GiB | 244 → 259 | `grow()` | `java.util.ArrayList` |

##### `add(Object)` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |   Samples | Callee                       | Location              |
| -----: | -----------: | -----: | ------------------: | --------: | ---------------------------- | --------------------- |
| +14.4% | +654.869 MiB | 100.0% | 4.44 GiB → 5.08 GiB | 244 → 259 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |             % |                Size |   Samples | Callee                              | Location              |
| -----: | -----------: | ------------: | ------------------: | --------: | ----------------------------------- | --------------------- |
| +14.4% | +653.953 MiB | 88.0% → 92.1% | 4.44 GiB → 5.08 GiB | 244 → 258 | `add(Object)`                       | `java.util.ArrayList` |
|  +2.4% |   +6.047 MiB |   4.9% → 4.6% |   255 MiB → 261 MiB |   15 → 11 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`   |

##### `putMapEntries(Map, boolean)` (`java.util.HashMap`)

|  Change |       Delta |             % |                Size | Samples | Callee                                          | Location                     |
| ------: | ----------: | ------------: | ------------------: | ------: | ----------------------------------------------- | ---------------------------- |
| +800.7% | +78.994 MiB | 56.1% → 66.6% | 9.87 MiB → 88.9 MiB |   7 → 6 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap`          |
| +924.6% | +40.295 MiB | 24.8% → 33.4% | 4.36 MiB → 44.7 MiB |   1 → 2 | `iterator()`                                    | `java.util.HashMap$EntrySet` |
| removed |  -3.376 MiB |  19.2% → 0.0% |      3.38 MiB → 0 B |   1 → 0 | `entrySet()`                                    | `java.util.HashMap`          |

##### `<init>(Map)` (`java.util.HashMap`)

|  Change |        Delta |      % |               Size | Samples | Callee                        | Location            |
| ------: | -----------: | -----: | -----------------: | ------: | ----------------------------- | ------------------- |
| +658.6% | +115.913 MiB | 100.0% | 17.6 MiB → 134 MiB |   9 → 8 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |       Delta |            % |           Size | Samples | Callee                                                                                       | Location                                  |
| -----: | ----------: | -----------: | -------------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
|    new | +83.646 MiB | 0.0% → 97.8% | 0 B → 83.6 MiB | 0 → 122 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
|    new |  +1.876 MiB |  0.0% → 2.2% | 0 B → 1.88 MiB |   0 → 5 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|  Change |       Delta |             % |                Size | Samples | Callee                                       | Location            |
| ------: | ----------: | ------------: | ------------------: | ------: | -------------------------------------------- | ------------------- |
| +760.4% | +65.319 MiB | 83.8% → 82.1% | 8.59 MiB → 73.9 MiB |   6 → 5 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap` |
| +867.6% | +14.419 MiB | 16.2% → 17.9% | 1.66 MiB → 16.1 MiB |   2 → 4 | `resize()`                                   | `java.util.HashMap` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |             % |         Size | Samples | Callee              | Location                                                  |
| -----: | ----------: | ------------: | -----------: | ------: | ------------------- | --------------------------------------------------------- |
|    new | +76.003 MiB | 0.0% → 100.0% | 0 B → 76 MiB |   0 → 2 | `vectorSum()`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|    new | +76.003 MiB | 0.0% → 100.0% | 0 B → 76 MiB |   0 → 2 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |       Delta |      % |               Size | Samples | Callee     | Location                            |
| ------: | ----------: | -----: | -----------------: | ------: | ---------- | ----------------------------------- |
| +121.6% | +61.873 MiB | 100.0% | 50.9 MiB → 113 MiB |   3 → 7 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change |        Delta |              % |                Size | Samples | Callee                        | Location                                                           |
| ------: | -----------: | -------------: | ------------------: | ------: | ----------------------------- | ------------------------------------------------------------------ |
| +225.6% |  +52.031 MiB | 100.0% → 89.8% | 23.1 MiB → 75.1 MiB | 64 → 99 | `generateData(int, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                        |
|     new |   +7.647 MiB |    0.0% → 9.1% |      0 B → 7.65 MiB |  0 → 21 | `toCsvRows(Function)`         | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |
|     new | +507.726 KiB |    0.0% → 0.6% |       0 B → 508 KiB |   0 → 1 | `toInteger()`                 | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |
|     new | +420.859 KiB |    0.0% → 0.5% |       0 B → 421 KiB |   0 → 1 | `asScala()`                   | `scala.collection.convert.AsScalaExtensions$ListHasAsScala`        |

##### `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

|  Change |        Delta |             % |                Size | Samples | Callee                       | Location                                  |
| ------: | -----------: | ------------: | ------------------: | ------: | ---------------------------- | ----------------------------------------- |
| +225.6% |  +52.031 MiB | 98.4% → 90.8% | 23.1 MiB → 75.1 MiB | 64 → 99 | `forEachRemaining(Consumer)` | `java.util.Spliterator$OfInt`             |
|     new |   +7.647 MiB |   0.0% → 9.2% |      0 B → 7.65 MiB |  0 → 21 | `forEachRemaining(Consumer)` | `java.util.Spliterators$ArraySpliterator` |
| removed | -379.593 KiB |   1.6% → 0.0% |       380 KiB → 0 B |   1 → 0 | `forEachRemaining(Consumer)` | `java.util.HashMap$EntrySpliterator`      |

##### `wrapAndCopyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

|  Change |       Delta |           % |                Size |  Samples | Callee                        | Location                            |
| ------: | ----------: | ----------: | ------------------: | -------: | ----------------------------- | ----------------------------------- |
| +253.1% | +59.307 MiB |      100.0% | 23.4 MiB → 82.7 MiB | 65 → 120 | `copyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |
| +412.8% |   +3.06 MiB | 3.2% → 4.6% |   759 KiB → 3.8 MiB |    2 → 7 | `wrapSink(Sink)`              | `java.util.stream.AbstractPipeline` |

##### `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`)

|  Change |       Delta |      % |                Size |  Samples | Callee                               | Location                            |
| ------: | ----------: | -----: | ------------------: | -------: | ------------------------------------ | ----------------------------------- |
| +253.1% | +59.307 MiB | 100.0% | 23.4 MiB → 82.7 MiB | 65 → 120 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`)

|  Change |       Delta |      % |                Size |  Samples | Callee                                            | Location                              |
| ------: | ----------: | -----: | ------------------: | -------: | ------------------------------------------------- | ------------------------------------- |
| +253.1% | +59.307 MiB | 100.0% | 23.4 MiB → 82.7 MiB | 65 → 120 | `evaluateSequential(PipelineHelper, Spliterator)` | `java.util.stream.ReduceOps$ReduceOp` |

##### `collect(Collector)` (`java.util.stream.ReferencePipeline`)

|  Change |       Delta |      % |                Size |  Samples | Callee                 | Location                            |
| ------: | ----------: | -----: | ------------------: | -------: | ---------------------- | ----------------------------------- |
| +253.1% | +59.307 MiB | 100.0% | 23.4 MiB → 82.7 MiB | 65 → 120 | `evaluate(TerminalOp)` | `java.util.stream.AbstractPipeline` |

##### `accept(int)` (`java.util.stream.IntPipeline$1$1`)

|  Change |        Delta |              % |                Size | Samples | Callee           | Location                                                               |
| ------: | -----------: | -------------: | ------------------: | ------: | ---------------- | ---------------------------------------------------------------------- |
| +221.7% |  +51.115 MiB | 100.0% → 98.8% | 23.1 MiB → 74.2 MiB | 64 → 98 | `apply(int)`     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121d4f0` |
| +130.6% |  +13.233 MiB |  43.9% → 31.1% | 10.1 MiB → 23.4 MiB | 28 → 36 | `apply(int)`     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121d728` |
|     new | +937.898 KiB |    0.0% → 1.2% |       0 B → 938 KiB |   0 → 1 | `accept(Object)` | `java.util.stream.ReduceOps$3ReducingSink`                             |

##### `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`)

|  Change |       Delta |      % |                Size | Samples | Callee        | Location                           |
| ------: | ----------: | -----: | ------------------: | ------: | ------------- | ---------------------------------- |
| +225.6% | +52.031 MiB | 100.0% | 23.1 MiB → 75.1 MiB | 64 → 99 | `accept(int)` | `java.util.stream.IntPipeline$1$1` |

##### `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`)

|  Change |       Delta |      % |                Size | Samples | Callee                          | Location                                       |
| ------: | ----------: | -----: | ------------------: | ------: | ------------------------------- | ---------------------------------------------- |
| +225.6% | +52.031 MiB | 100.0% | 23.1 MiB → 75.1 MiB | 64 → 99 | `forEachRemaining(IntConsumer)` | `java.util.stream.Streams$RangeIntSpliterator` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |       Delta |              % |               Size | Samples | Callee          | Location                                               |
| ------: | ----------: | -------------: | -----------------: | ------: | --------------- | ------------------------------------------------------ |
| +121.6% | +61.873 MiB | 95.8% → 100.0% | 50.9 MiB → 113 MiB |   3 → 7 | `average(List)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |       Delta |      % |               Size | Samples | Callee                     | Location                                               |
| ------: | ----------: | -----: | -----------------: | ------: | -------------------------- | ------------------------------------------------------ |
| +112.2% | +59.627 MiB | 100.0% | 53.1 MiB → 113 MiB |   4 → 7 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| +112.2% | +59.627 MiB | 100.0% | 53.1 MiB → 113 MiB |   4 → 7 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |       Delta |      % |                Size | Samples | Callee               | Location                             |
| ------: | ----------: | -----: | ------------------: | ------: | -------------------- | ------------------------------------ |
| +225.6% | +52.031 MiB | 100.0% | 23.1 MiB → 75.1 MiB | 64 → 99 | `collect(Collector)` | `java.util.stream.ReferencePipeline` |

##### `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|   Change |       Delta |             % |                Size | Samples | Callee                                         | Location                                            |
| -------: | ----------: | ------------: | ------------------: | ------: | ---------------------------------------------- | --------------------------------------------------- |
| +1159.2% | +21.485 MiB |  8.0% → 31.5% | 1.85 MiB → 23.3 MiB |  5 → 15 | `mapToObj(IntFunction)`                        | `java.util.stream.IntPipeline`                      |
|  +120.3% |  +20.16 MiB | 72.7% → 49.8% | 16.8 MiB → 36.9 MiB | 47 → 58 | `toArray(IntFunction)`                         | `java.util.stream.ReferencePipeline`                |
|  +328.6% |  +7.307 MiB |  9.6% → 12.9% | 2.22 MiB → 9.53 MiB |  6 → 17 | `range(int, int)`                              | `java.util.stream.IntStream`                        |
|   +97.2% |  +2.161 MiB |   9.6% → 5.9% | 2.22 MiB → 4.39 MiB |   6 → 8 | `linkToTargetMethod(int, int, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000301220800` |

##### `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121d4f0`)

|  Change |       Delta |      % |                Size | Samples | Callee                                           | Location                                    |
| ------: | ----------: | -----: | ------------------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| +221.7% | +51.115 MiB | 100.0% | 23.1 MiB → 74.2 MiB | 64 → 98 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|   Change |       Delta |      % |               Size | Samples | Callee                    | Location                                                  |
| -------: | ----------: | -----: | -----------------: | ------: | ------------------------- | --------------------------------------------------------- |
| +4706.5% | +39.693 MiB | 100.0% | 864 KiB → 40.5 MiB |   1 → 5 | `add(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|   Change |       Delta |      % |               Size | Samples | Callee                               | Location                                                  |
| -------: | ----------: | -----: | -----------------: | ------: | ------------------------------------ | --------------------------------------------------------- |
| +4706.5% | +39.693 MiB | 100.0% | 864 KiB → 40.5 MiB |   1 → 5 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |       Delta |      % |                Size | Samples | Callee            | Location           |
| ------: | ----------: | -----: | ------------------: | ------: | ----------------- | ------------------ |
| +130.6% | +13.233 MiB | 100.0% | 10.1 MiB → 23.4 MiB | 28 → 36 | `valueOf(double)` | `java.lang.Double` |

##### `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121d728`)

|  Change |       Delta |      % |                Size | Samples | Callee                                           | Location                                    |
| ------: | ----------: | -----: | ------------------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| +130.6% | +13.233 MiB | 100.0% | 10.1 MiB → 23.4 MiB | 28 → 36 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |        Delta |             % |                Size |       Samples | Callee                | Location            |
| ------: | -----------: | ------------: | ------------------: | ------------: | --------------------- | ------------------- |
|   -3.5% |   -1.072 GiB | 99.5% → 99.4% | 30.2 GiB → 29.2 GiB | 1,453 → 1,536 | `forEach(BiConsumer)` | `java.util.HashMap` |
| +658.6% | +115.913 MiB |   0.1% → 0.4% |  17.6 MiB → 134 MiB |         9 → 8 | `<init>(Map)`         | `java.util.HashMap` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |      Delta |      % |                Size |       Samples | Callee            | Location                                    |
| -----: | ---------: | -----: | ------------------: | ------------: | ----------------- | ------------------------------------------- |
|  -3.5% | -1.076 GiB | 100.0% | 30.4 GiB → 29.3 GiB | 1,467 → 1,547 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |      Delta |      % |                Size |       Samples | Callee                     | Location                                                   |
| -----: | ---------: | -----: | ------------------: | ------------: | -------------------------- | ---------------------------------------------------------- |
|  -3.5% | -1.076 GiB | 100.0% | 30.4 GiB → 29.3 GiB | 1,467 → 1,547 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |             % |                Size |       Samples | Callee               | Location              |
| -----: | -----------: | ------------: | ------------------: | ------------: | -------------------- | --------------------- |
|  -9.0% | -743.782 MiB | 26.6% → 25.1% | 8.05 GiB → 7.32 GiB |     359 → 363 | `<init>(Collection)` | `java.util.ArrayList` |
|  -2.0% | -460.033 MiB | 73.4% → 74.5% | 22.2 GiB → 21.7 GiB | 1,092 → 1,166 | `addAll(Collection)` | `java.util.ArrayList` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121f178`)

| Change |      Delta |      % |                Size |       Samples | Callee                       | Location                                    |
| -----: | ---------: | -----: | ------------------: | ------------: | ---------------------------- | ------------------------------------------- |
|  -3.5% | -1.072 GiB | 100.0% | 30.2 GiB → 29.2 GiB | 1,453 → 1,536 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

| Change |      Delta |      % |                Size |       Samples | Callee                  | Location                                                               |
| -----: | ---------: | -----: | ------------------: | ------------: | ----------------------- | ---------------------------------------------------------------------- |
|  -3.5% | -1.072 GiB | 100.0% | 30.2 GiB → 29.2 GiB | 1,453 → 1,536 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121f178` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |      Delta |      % |                Size |       Samples | Callee                              | Location            |
| -----: | ---------: | -----: | ------------------: | ------------: | ----------------------------------- | ------------------- |
|  -3.5% | -1.072 GiB | 100.0% | 30.2 GiB → 29.2 GiB | 1,453 → 1,536 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121ef30`)

| Change |      Delta |      % |                Size |       Samples | Callee                              | Location                                    |
| -----: | ---------: | -----: | ------------------: | ------------: | ----------------------------------- | ------------------------------------------- |
|  -3.5% | -1.072 GiB | 100.0% | 30.2 GiB → 29.2 GiB | 1,453 → 1,536 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

| Change |      Delta |      % |                Size |       Samples | Callee                   | Location                                                               |
| -----: | ---------: | -----: | ------------------: | ------------: | ------------------------ | ---------------------------------------------------------------------- |
|  -3.5% | -1.072 GiB | 100.0% | 30.2 GiB → 29.2 GiB | 1,453 → 1,536 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121ef30` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

| Change |        Delta |      % |                Size |       Samples | Callee                              | Location                            |
| -----: | -----------: | -----: | ------------------: | ------------: | ----------------------------------- | ----------------------------------- |
|  -2.1% | -756.905 MiB | 100.0% | 35.2 GiB → 34.5 GiB | 1,726 → 1,801 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `<init>(Collection)` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |   Samples | Callee      | Location              |
| -----: | -----------: | -----: | ------------------: | --------: | ----------- | --------------------- |
|  -9.0% | -743.782 MiB | 100.0% | 8.05 GiB → 7.32 GiB | 359 → 363 | `toArray()` | `java.util.ArrayList` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |        Delta |      % |                Size |       Samples | Callee                                   | Location                            |
| -----: | -----------: | -----: | ------------------: | ------------: | ---------------------------------------- | ----------------------------------- |
|  -2.0% | -734.201 MiB | 100.0% | 35.2 GiB → 34.5 GiB | 1,726 → 1,802 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change |        Delta |      % |                Size |       Samples | Callee                                               | Location                                      |
| -----: | -----------: | -----: | ------------------: | ------------: | ---------------------------------------------------- | --------------------------------------------- |
|  -2.0% | -729.855 MiB | 100.0% | 35.3 GiB → 34.6 GiB | 1,732 → 1,811 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|  Change |       Delta |            % |           Size | Samples | Callee                         | Location           |
| ------: | ----------: | -----------: | -------------: | ------: | ------------------------------ | ------------------ |
| removed | -14.899 MiB | <0.1% → 0.0% | 14.9 MiB → 0 B |  21 → 0 | `copyOf(Object[], int, Class)` | `java.util.Arrays` |

##### `addAll(Collection)` (`java.util.ArrayList`)

| Change |        Delta |             % |                Size |   Samples | Callee      | Location              |
| -----: | -----------: | ------------: | ------------------: | --------: | ----------- | --------------------- |
|  -5.8% | -760.396 MiB | 58.1% → 55.9% | 12.9 GiB → 12.2 GiB | 642 → 649 | `grow(int)` | `java.util.ArrayList` |
|  +3.2% | +300.362 MiB | 41.9% → 44.1% | 9.29 GiB → 9.58 GiB | 450 → 517 | `toArray()` | `java.util.ArrayList` |

##### `toArray()` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |   Samples | Callee                  | Location           |
| -----: | -----------: | -----: | ------------------: | --------: | ----------------------- | ------------------ |
|  -2.5% | -443.419 MiB | 100.0% | 17.3 GiB → 16.9 GiB | 809 → 880 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |       Delta |      % |              Size |       Samples | Callee     | Location                            |
| -----: | ----------: | -----: | ----------------: | ------------: | ---------- | ----------------------------------- |
|  -1.0% | -372.99 MiB | 100.0% | 35.4 GiB → 35 GiB | 1,744 → 1,829 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |      % |                Size |   Samples | Callee     | Location                            |
| -----: | -----------: | -----: | ------------------: | --------: | ---------- | ----------------------------------- |
|  -2.6% | -194.969 MiB | 100.0% | 7.33 GiB → 7.14 GiB | 215 → 223 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |        Delta |            % |          Size | Samples | Callee                                                                                       | Location                                  |
| ------: | -----------: | -----------: | ------------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
| removed | -189.879 MiB | 99.8% → 0.0% | 190 MiB → 0 B |  70 → 0 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
| removed | -418.554 KiB |  0.2% → 0.0% | 419 KiB → 0 B |   2 → 0 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

| Change |        Delta |      % |                Size |   Samples | Callee   | Location                                                               |
| -----: | -----------: | -----: | ------------------: | --------: | -------- | ---------------------------------------------------------------------- |
|  -2.4% | -174.482 MiB | 100.0% | 7.21 GiB → 7.04 GiB | 205 → 214 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121df70` |

##### `read(InputStream, String)` (`java.util.jar.Manifest`)

|  Change |        Delta |            % |               Size | Samples | Callee                                                | Location                                 |
| ------: | -----------: | -----------: | -----------------: | ------: | ----------------------------------------------------- | ---------------------------------------- |
| removed | -160.192 MiB | 99.3% → 0.0% |      160 MiB → 0 B |   1 → 0 | `read(Manifest$FastInputStream, byte[], String, int)` | `java.util.jar.Attributes`               |
| +192.6% | +761.867 KiB | 0.2% → 45.1% | 396 KiB → 1.13 MiB |   1 → 3 | `put(Object, Object)`                                 | `java.util.HashMap`                      |
|     new | +389.843 KiB | 0.0% → 15.2% |      0 B → 390 KiB |   0 → 1 | `<init>(InputStream)`                                 | `java.util.jar.Manifest$FastInputStream` |
|  -45.8% | -320.523 KiB | 0.4% → 14.8% |  700 KiB → 380 KiB |   2 → 1 | `parseName(byte[], int)`                              | `java.util.jar.Manifest`                 |

##### `<init>(JarVerifier, InputStream, String)` (`java.util.jar.Manifest`)

| Change |        Delta |      % |               Size | Samples | Callee                      | Location                 |
| -----: | -----------: | -----: | -----------------: | ------: | --------------------------- | ------------------------ |
| -98.4% | -158.754 MiB | 100.0% | 161 MiB → 2.51 MiB |   4 → 7 | `read(InputStream, String)` | `java.util.jar.Manifest` |

##### `<init>(InputStream, String)` (`java.util.jar.Manifest`)

| Change |        Delta |      % |               Size | Samples | Callee                                     | Location                 |
| -----: | -----------: | -----: | -----------------: | ------: | ------------------------------------------ | ------------------------ |
| -98.4% | -158.754 MiB | 100.0% | 161 MiB → 2.51 MiB |   4 → 7 | `<init>(JarVerifier, InputStream, String)` | `java.util.jar.Manifest` |

##### `getManifestFromReference()` (`java.util.jar.JarFile`)

| Change |        Delta |      % |               Size | Samples | Callee                        | Location                 |
| -----: | -----------: | -----: | -----------------: | ------: | ----------------------------- | ------------------------ |
| -98.4% | -158.754 MiB | 100.0% | 161 MiB → 2.51 MiB |   4 → 7 | `<init>(InputStream, String)` | `java.util.jar.Manifest` |

##### `getManifest()` (`java.util.jar.JarFile`)

| Change |        Delta |      % |               Size | Samples | Callee                       | Location                |
| -----: | -----------: | -----: | -----------------: | ------: | ---------------------------- | ----------------------- |
| -98.4% | -158.754 MiB | 100.0% | 161 MiB → 2.51 MiB |   4 → 7 | `getManifestFromReference()` | `java.util.jar.JarFile` |

##### `getManifest()` (`jdk.internal.loader.URLClassPath$JarLoader$2`)

| Change |        Delta |      % |               Size | Samples | Callee          | Location                |
| -----: | -----------: | -----: | -----------------: | ------: | --------------- | ----------------------- |
| -98.4% | -158.754 MiB | 100.0% | 161 MiB → 2.51 MiB |   4 → 7 | `getManifest()` | `java.util.jar.JarFile` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

| Change |        Delta |             % |               Size | Samples | Callee                       | Location                                          |
| -----: | -----------: | ------------: | -----------------: | ------: | ---------------------------- | ------------------------------------------------- |
| -86.7% | -155.228 MiB | 99.6% → 98.0% | 179 MiB → 23.9 MiB | 40 → 62 | `findClass(String)`          | `java.net.URLClassLoader`                         |
| -39.4% | -324.257 KiB |   0.4% → 2.0% |  823 KiB → 498 KiB |       2 | `loadClass(String, boolean)` | `jdk.internal.loader.ClassLoaders$AppClassLoader` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |      % |                Size |   Samples | Callee     | Location                            |
| -----: | -----------: | -----: | ------------------: | --------: | ---------- | ----------------------------------- |
|  -2.4% | -174.482 MiB | 100.0% | 7.21 GiB → 7.04 GiB | 205 → 214 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121df70`)

| Change |        Delta |      % |                Size |   Samples | Callee                         | Location                                    |
| -----: | -----------: | -----: | ------------------: | --------: | ------------------------------ | ------------------------------------------- |
|  -2.4% | -174.482 MiB | 100.0% | 7.21 GiB → 7.04 GiB | 205 → 214 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change |        Delta |            % |          Size | Samples | Callee              | Location                           |
| ------: | -----------: | -----------: | ------------: | ------: | ------------------- | ---------------------------------- |
| removed | -161.514 MiB | 96.8% → 0.0% | 162 MiB → 0 B |   2 → 0 | `loadClass(String)` | `java.lang.ClassLoader`            |
| removed |   -4.001 MiB |  2.4% → 0.0% |   4 MiB → 0 B |   3 → 0 | `<clinit>()`        | `scala.Predef$`                    |
| removed |   -1.302 MiB |  0.8% → 0.0% | 1.3 MiB → 0 B |   1 → 0 | `map(Function1)`    | `scala.collection.immutable.Range` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

|  Change |        Delta |             % |          Size | Samples | Callee                  | Location                                  |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------- | ----------------------------------------- |
| removed | -166.818 MiB | 100.0% → 0.0% | 167 MiB → 0 B |   6 → 0 | `run(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

|  Change |        Delta |              % |                Size |  Samples | Callee                             | Location                                  |
| ------: | -----------: | -------------: | ------------------: | -------: | ---------------------------------- | ----------------------------------------- |
| removed | -166.818 MiB |   87.9% → 0.0% |       167 MiB → 0 B |    6 → 0 | `executeOperation(int)`            | `org.renaissance.harness.ExecutionDriver` |
| +262.7% |  +60.585 MiB | 12.1% → 100.0% | 23.1 MiB → 83.6 MiB | 64 → 122 | `setUpBeforeAll(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `main(String[])` (`org.renaissance.core.Launcher`)

| Change |        Delta |      % |              Size |   Samples | Callee                                 | Location                        |
| -----: | -----------: | -----: | ----------------: | --------: | -------------------------------------- | ------------------------------- |
| -50.7% | -105.663 MiB | 100.0% | 208 MiB → 103 MiB | 120 → 172 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

| Change |       Delta |             % |              Size |   Samples | Callee                                                      | Location                            |
| -----: | ----------: | ------------: | ----------------: | --------: | ----------------------------------------------------------- | ----------------------------------- |
| -50.7% | -105.28 MiB | 99.6% → 99.3% | 208 MiB → 102 MiB | 118 → 171 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`     |
|    ~0% |      -120 B |   0.2% → 0.4% |           377 KiB |         1 | `create(Path, URI)`                                         | `org.renaissance.core.ModuleLoader` |
|    ~0% |        -8 B |   0.2% → 0.4% |           380 KiB |         1 | `createScratchRoot(Path, boolean)`                          | `org.renaissance.core.Launcher`     |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

| Change |        Delta |             % |              Size |   Samples | Callee                               | Location                            |
| -----: | -----------: | ------------: | ----------------: | --------: | ------------------------------------ | ----------------------------------- |
| -50.6% | -104.864 MiB | 99.8% → 99.6% | 207 MiB → 102 MiB | 117 → 171 | `invoke(Object, Object[])`           | `java.lang.reflect.Method`          |
|  -4.9% |  -19.968 KiB |   0.2% → 0.4% | 407 KiB → 387 KiB |         1 | `createClassLoaderForModule(String)` | `org.renaissance.core.ModuleLoader` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |        Delta |             % |                Size |  Samples | Callee                                                                        | Location                                    |
| ------: | -----------: | ------------: | ------------------: | -------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
|  -54.9% | -104.393 MiB | 93.0% → 86.1% |  190 MiB → 85.9 MiB | 72 → 128 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |
|  -10.4% | -419.031 KiB |   1.9% → 3.5% | 3.92 MiB → 3.51 MiB |   11 → 9 | `<clinit>()`                                                                  | `scala.Predef$`                             |
| removed | -405.765 KiB |   0.2% → 0.0% |       406 KiB → 0 B |    1 → 0 | `linkCallSite(Object, Object, Object, Object, Object, Object[])`              | `java.lang.invoke.MethodHandleNatives`      |
| removed | -386.804 KiB |   0.2% → 0.0% |       387 KiB → 0 B |    1 → 0 | `excludeIncompatible(BenchmarkSuite, Seq)`                                    | `org.renaissance.harness.RenaissanceSuite$` |
|     new | +379.312 KiB |   0.0% → 0.4% |       0 B → 379 KiB |    0 → 1 | `getExecutionPolicy(Config, Seq, Map)`                                        | `org.renaissance.harness.RenaissanceSuite$` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000030119c3b8`)

|  Change |        Delta |             % |           Size | Samples | Callee                                                                                                                 | Location                                    |
| ------: | -----------: | ------------: | -------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| removed | -190.287 MiB | 100.0% → 0.0% |  190 MiB → 0 B |  72 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
|     new |  +85.522 MiB | 0.0% → 100.0% | 0 B → 85.5 MiB | 0 → 127 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

| Change |        Delta |             % |                Size |   Samples | Callee              | Location                                    |
| -----: | -----------: | ------------: | ------------------: | --------: | ------------------- | ------------------------------------------- |
| -51.3% | -104.881 MiB | 98.8% → 97.1% |  205 MiB → 99.7 MiB | 110 → 164 | `main(String[])`    | `org.renaissance.harness.RenaissanceSuite$` |
| +15.1% | +397.453 KiB |   1.2% → 2.9% | 2.58 MiB → 2.96 MiB |     7 → 8 | `loadClass(String)` | `java.lang.ClassLoader`                     |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in bytes allocated in their leaf frame.

|   Change |        Delta |            % |                Size |  Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -------: | -----------: | -----------: | ------------------: | -------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +136.4% | +415.352 MiB |  0.8% → 1.9% |   304 MiB → 720 MiB |  30 → 41 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                         |
|   +72.1% | +359.921 MiB |  1.3% → 2.3% |   499 MiB → 859 MiB |  29 → 39 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                |
|   +26.6% | +358.294 MiB |  3.5% → 4.5% | 1.32 GiB → 1.67 GiB | 82 → 104 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  +302.3% | +336.632 MiB |  0.3% → 1.2% |   111 MiB → 448 MiB |  12 → 14 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  +195.3% | +326.037 MiB |  0.4% → 1.3% |   167 MiB → 493 MiB |  12 → 13 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|   +62.1% | +313.651 MiB |  1.3% → 2.1% |   505 MiB → 819 MiB |  33 → 36 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|      new | +299.946 MiB |  0.0% → 0.8% |       0 B → 300 MiB |    0 → 3 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  +165.6% | +284.269 MiB |  0.4% → 1.2% |   172 MiB → 456 MiB |    2 → 5 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                |
| +6607.6% | +279.186 MiB | <0.1% → 0.7% |  4.23 MiB → 283 MiB |        4 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|      new | +274.507 MiB |  0.0% → 0.7% |       0 B → 275 MiB |    0 → 1 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                              |
|   +72.5% | +270.244 MiB |  1.0% → 1.7% |   373 MiB → 643 MiB |  15 → 21 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| +1122.5% | +244.973 MiB |  0.1% → 0.7% |  21.8 MiB → 267 MiB |    1 → 4 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|      new | +239.661 MiB |  0.0% → 0.6% |       0 B → 240 MiB |    0 → 4 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|   +42.5% | +230.534 MiB |  1.4% → 2.0% |   543 MiB → 773 MiB |  23 → 31 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  +537.1% | +226.512 MiB |  0.1% → 0.7% |  42.2 MiB → 269 MiB |        6 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)              |
| +2121.2% | +225.207 MiB | <0.1% → 0.6% |  10.6 MiB → 236 MiB |    2 → 3 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| +2319.6% | +223.476 MiB | <0.1% → 0.6% |  9.63 MiB → 233 MiB |    5 → 8 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|   +52.1% | +218.637 MiB |  1.1% → 1.7% |   420 MiB → 638 MiB |  24 → 22 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|      new | +204.299 MiB |  0.0% → 0.5% |       0 B → 204 MiB |    0 → 1 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) |
|      new | +179.536 MiB |  0.0% → 0.5% |       0 B → 180 MiB |    0 → 1 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

### Improvements

Call stacks with the largest decrease in bytes allocated in their leaf frame.

|  Change |        Delta |            % |                Size |   Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------: | -----------: | -----------: | ------------------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -52.4% |   -1.329 GiB |  6.8% → 3.2% | 2.54 GiB → 1.21 GiB | 117 → 102 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  -99.1% | -846.465 MiB | 2.2% → <0.1% |  854 MiB → 7.37 MiB |     6 → 2 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  -44.1% | -563.162 MiB |  3.3% → 1.9% |  1.25 GiB → 714 MiB |   51 → 52 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  -15.3% | -560.334 MiB |  9.6% → 8.1% | 3.58 GiB → 3.03 GiB | 178 → 188 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  -64.7% | -535.535 MiB |  2.2% → 0.8% |   827 MiB → 292 MiB |   21 → 27 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  -39.9% | -403.015 MiB |  2.6% → 1.6% | 1,010 MiB → 607 MiB |   52 → 37 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  -40.5% | -371.152 MiB |  2.4% → 1.4% |   916 MiB → 545 MiB |   37 → 31 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -33.3% | -353.211 MiB |  2.8% → 1.9% |  1.03 GiB → 706 MiB |   27 → 32 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| removed |   -300.3 MiB |  0.8% → 0.0% |       300 MiB → 0 B |     1 → 0 | `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                     |
|  -42.6% | -254.759 MiB |  1.6% → 0.9% |   598 MiB → 343 MiB |    16 → 6 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  -22.8% | -236.745 MiB |  2.7% → 2.1% |  1.01 GiB → 799 MiB |   48 → 46 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  -70.9% | -202.801 MiB |  0.7% → 0.2% |  286 MiB → 83.3 MiB |     7 → 8 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                     |
|   -7.5% | -195.551 MiB |  6.8% → 6.3% | 2.53 GiB → 2.34 GiB | 156 → 159 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  -99.0% | -193.161 MiB | 0.5% → <0.1% |  195 MiB → 1.99 MiB |     2 → 1 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) |
| removed | -179.084 MiB |  0.5% → 0.0% |       179 MiB → 0 B |     1 → 0 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                 |
| removed | -160.192 MiB |  0.4% → 0.0% |       160 MiB → 0 B |     1 → 0 | `read(Manifest$FastInputStream, byte[], String, int)` (`java.util.jar.Attributes`) ← `read(InputStream, String)` (`java.util.jar.Manifest`) ← `<init>(JarVerifier, InputStream, String)` ← `<init>(InputStream, String)` ← `getManifestFromReference()` (`java.util.jar.JarFile`) ← `getManifest()` ← `getManifest()` (`jdk.internal.loader.URLClassPath$JarLoader$2`) ← `defineClass(String, Resource)` (`java.net.URLClassLoader`) ← `run()` (`java.net.URLClassLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `findClass(String)` (`java.net.URLClassLoader`) ← `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000009001198798`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000009001001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000009001082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  -35.3% | -159.743 MiB |  1.2% → 0.8% |   453 MiB → 293 MiB |   17 → 19 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  -88.7% | -151.897 MiB |  0.4% → 0.1% |  171 MiB → 19.4 MiB |         4 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  -15.6% | -148.186 MiB |  2.5% → 2.1% |   949 MiB → 801 MiB |   38 → 39 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  -12.0% | -144.345 MiB |  3.1% → 2.8% | 1.17 GiB → 1.03 GiB |   40 → 37 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

# Retained heap profile diff

Retained 4.13 MiB → 2.56 MiB (-1.566 MiB, -38.0%) over 17 objects → 7 objects (249 KiB → 375 KiB per object).

| Category         | Change |      Delta |      % |                Size | Objects |
| ---------------- | -----: | ---------: | -----: | ------------------: | ------: |
| Standard library | -38.0% | -1.566 MiB | 100.0% | 4.13 MiB → 2.56 MiB |  15 → 6 |
| Ours             | -50.0% |      -40 B |  <0.1% |         80 B → 40 B |   2 → 1 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Standard library

| Change |        Delta |            % |          Size | Objects | Function                            | Location                       |
| -----: | -----------: | -----------: | ------------: | ------: | ----------------------------------- | ------------------------------ |
|    new | +255.085 KiB |  0.0% → 9.7% | 0 B → 255 KiB |   0 → 1 | `initCEN(int, ZipCoder)`            | `java.util.zip.ZipFile$Source` |
|    new |       +128 B | 0.0% → <0.1% |   0 B → 128 B |   0 → 1 | `copyOfRangeByte(byte[], int, int)` | `java.util.Arrays`             |

#### Improvements

Functions with the largest decrease in bytes retained within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |      Delta |             % |                Size | Objects | Function                     | Location                                    |
| ------: | ---------: | ------------: | ------------------: | ------: | ---------------------------- | ------------------------------------------- |
|  -46.8% | -1.815 MiB | 93.9% → 80.5% | 3.88 MiB → 2.06 MiB |   9 → 1 | `copyOf(Object[], int)`      | `java.util.Arrays`                          |
| removed |      -48 B |  <0.1% → 0.0% |          48 B → 0 B |   1 → 0 | `compress(char[], int, int)` | `java.lang.StringUTF16`                     |
|  -50.0% |      -48 B |         <0.1% |         96 B → 48 B |   4 → 2 | `valueOf(double)`            | `java.lang.Double`                          |
|  -50.0% |      -40 B |         <0.1% |         80 B → 40 B |   2 → 1 | `lambda$generateData$4(int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### Standard library

|  Change |      Delta |             % |                Size | Objects | Function                     | Location                |
| ------: | ---------: | ------------: | ------------------: | ------: | ---------------------------- | ----------------------- |
|  -46.8% | -1.815 MiB | 93.9% → 80.5% | 3.88 MiB → 2.06 MiB |   9 → 1 | `copyOf(Object[], int)`      | `java.util.Arrays`      |
| removed |      -48 B |  <0.1% → 0.0% |          48 B → 0 B |   1 → 0 | `compress(char[], int, int)` | `java.lang.StringUTF16` |
|  -50.0% |      -48 B |         <0.1% |         96 B → 48 B |   4 → 2 | `valueOf(double)`            | `java.lang.Double`      |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |        Delta |             % |          Size | Objects | Location                            |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------------------- |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `java.util.zip.ZipFile$Source:1733` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

| Change |  Delta |             % |        Size | Objects | Location                |
| -----: | -----: | ------------: | ----------: | ------: | ----------------------- |
|    new | +128 B | 0.0% → 100.0% | 0 B → 128 B |   0 → 1 | `java.util.Arrays:3863` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |      Delta |      % |                Size | Objects | Location                |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------- |
| -46.8% | -1.815 MiB | 100.0% | 3.88 MiB → 2.06 MiB |   9 → 1 | `java.util.Arrays:3482` |

##### `compress(char[], int, int)` (`java.lang.StringUTF16`)

|  Change | Delta |             % |       Size | Objects | Location                    |
| ------: | ----: | ------------: | ---------: | ------: | --------------------------- |
| removed | -48 B | 100.0% → 0.0% | 48 B → 0 B |   1 → 0 | `java.lang.StringUTF16:211` |

##### `valueOf(double)` (`java.lang.Double`)

| Change | Delta |      % |        Size | Objects | Location               |
| -----: | ----: | -----: | ----------: | ------: | ---------------------- |
| -50.0% | -48 B | 100.0% | 96 B → 48 B |   4 → 2 | `java.lang.Double:773` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % |        Size | Objects | Location                                       |
| -----: | ----: | -----: | ----------: | ------: | ---------------------------------------------- |
| -50.0% | -40 B | 100.0% | 80 B → 40 B |   2 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans:87` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |        Delta |             % |          Size | Objects | Caller                                          | Location                       |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------------------------------- | ------------------------------ |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

| Change |  Delta |             % |        Size | Objects | Caller                          | Location           |
| -----: | -----: | ------------: | ----------: | ------: | ------------------------------- | ------------------ |
|    new | +128 B | 0.0% → 100.0% | 0 B → 128 B |   0 → 1 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|  Change |        Delta |              % |                Size | Objects | Caller      | Location              |
| ------: | -----------: | -------------: | ------------------: | ------: | ----------- | --------------------- |
|  -41.0% |   -1.433 MiB | 90.1% → 100.0% | 3.49 MiB → 2.06 MiB |   7 → 1 | `grow(int)` | `java.util.ArrayList` |
| removed | -391.554 KiB |    9.9% → 0.0% |       392 KiB → 0 B |   2 → 0 | `toArray()` | `java.util.ArrayList` |

##### `compress(char[], int, int)` (`java.lang.StringUTF16`)

|  Change | Delta |             % |       Size | Objects | Caller                           | Location           |
| ------: | ----: | ------------: | ---------: | ------: | -------------------------------- | ------------------ |
| removed | -48 B | 100.0% → 0.0% | 48 B → 0 B |   1 → 0 | `<init>(char[], int, int, Void)` | `java.lang.String` |

##### `valueOf(double)` (`java.lang.Double`)

| Change | Delta |      % |        Size | Objects | Caller                                           | Location                                    |
| -----: | ----: | -----: | ----------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| -50.0% | -48 B | 100.0% | 96 B → 48 B |   4 → 2 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % |        Size | Objects | Caller       | Location                                                               |
| -----: | ----: | -----: | ----------: | ------: | ------------ | ---------------------------------------------------------------------- |
| -50.0% | -40 B | 100.0% | 80 B → 40 B |   2 → 1 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121d960` |

### Total size

#### Regressions

Functions with the largest increase in bytes retained within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

| Change |        Delta |             % |                Size | Objects | Function                                                                                                               | Location                                       |
| -----: | -----------: | ------------: | ------------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
|    new |   +2.309 MiB |  0.0% → 90.2% |      0 B → 2.31 MiB |   0 → 5 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`    |
| +12.1% | +255.125 KiB | 49.9% → 90.2% | 2.06 MiB → 2.31 MiB |   7 → 6 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`    |
|    new | +255.085 KiB |   0.0% → 9.7% |       0 B → 255 KiB |   0 → 1 | `initCEN(int, ZipCoder)`                                                                                               | `java.util.zip.ZipFile$Source`                 |
|    new | +255.085 KiB |   0.0% → 9.7% |       0 B → 255 KiB |   0 → 1 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)`                                                                        | `java.util.zip.ZipFile$Source`                 |
|    new | +255.085 KiB |   0.0% → 9.7% |       0 B → 255 KiB |   0 → 1 | `get(File, boolean, ZipCoder)`                                                                                         | `java.util.zip.ZipFile$Source`                 |
|    new | +255.085 KiB |   0.0% → 9.7% |       0 B → 255 KiB |   0 → 1 | `<init>(ZipFile, ZipCoder, File, int)`                                                                                 | `java.util.zip.ZipFile$CleanableResource`      |
|    new | +255.085 KiB |   0.0% → 9.7% |       0 B → 255 KiB |   0 → 1 | `<init>(File, int, Charset)`                                                                                           | `java.util.zip.ZipFile`                        |
|    new | +255.085 KiB |   0.0% → 9.7% |       0 B → 255 KiB |   0 → 1 | `<init>(File, int)`                                                                                                    | `java.util.zip.ZipFile`                        |
|    new | +255.085 KiB |   0.0% → 9.7% |       0 B → 255 KiB |   0 → 1 | `<init>(File, boolean, int, Runtime$Version)`                                                                          | `java.util.jar.JarFile`                        |
|    new | +255.085 KiB |   0.0% → 9.7% |       0 B → 255 KiB |   0 → 1 | `getJarFile(URL)`                                                                                                      | `jdk.internal.loader.URLClassPath$JarLoader`   |
|    new | +255.085 KiB |   0.0% → 9.7% |       0 B → 255 KiB |   0 → 1 | `run()`                                                                                                                | `jdk.internal.loader.URLClassPath$JarLoader$1` |
|    new | +255.085 KiB |   0.0% → 9.7% |       0 B → 255 KiB |   0 → 1 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)`                                            | `java.security.AccessController`               |
|    new | +255.085 KiB |   0.0% → 9.7% |       0 B → 255 KiB |   0 → 1 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)`                                                        | `java.security.AccessController`               |
|    new | +255.085 KiB |   0.0% → 9.7% |       0 B → 255 KiB |   0 → 1 | `ensureOpen()`                                                                                                         | `jdk.internal.loader.URLClassPath$JarLoader`   |
|    new | +255.085 KiB |   0.0% → 9.7% |       0 B → 255 KiB |   0 → 1 | `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)`                                                         | `jdk.internal.loader.URLClassPath$JarLoader`   |
|    new | +255.085 KiB |   0.0% → 9.7% |       0 B → 255 KiB |   0 → 1 | `run()`                                                                                                                | `jdk.internal.loader.URLClassPath$3`           |
|    new | +255.085 KiB |   0.0% → 9.7% |       0 B → 255 KiB |   0 → 1 | `getLoader(URL)`                                                                                                       | `jdk.internal.loader.URLClassPath`             |
|    new | +255.085 KiB |   0.0% → 9.7% |       0 B → 255 KiB |   0 → 1 | `getLoader(int)`                                                                                                       | `jdk.internal.loader.URLClassPath`             |
|    new | +255.085 KiB |   0.0% → 9.7% |       0 B → 255 KiB |   0 → 1 | `getResource(String, boolean)`                                                                                         | `jdk.internal.loader.URLClassPath`             |
|    new | +255.085 KiB |   0.0% → 9.7% |       0 B → 255 KiB |   0 → 1 | `run()`                                                                                                                | `java.net.URLClassLoader$1`                    |

##### Standard library

| Change |        Delta |           % |          Size | Objects | Function                                                                    | Location                                       |
| -----: | -----------: | ----------: | ------------: | ------: | --------------------------------------------------------------------------- | ---------------------------------------------- |
|    new | +255.085 KiB | 0.0% → 9.7% | 0 B → 255 KiB |   0 → 1 | `initCEN(int, ZipCoder)`                                                    | `java.util.zip.ZipFile$Source`                 |
|    new | +255.085 KiB | 0.0% → 9.7% | 0 B → 255 KiB |   0 → 1 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)`                             | `java.util.zip.ZipFile$Source`                 |
|    new | +255.085 KiB | 0.0% → 9.7% | 0 B → 255 KiB |   0 → 1 | `get(File, boolean, ZipCoder)`                                              | `java.util.zip.ZipFile$Source`                 |
|    new | +255.085 KiB | 0.0% → 9.7% | 0 B → 255 KiB |   0 → 1 | `<init>(ZipFile, ZipCoder, File, int)`                                      | `java.util.zip.ZipFile$CleanableResource`      |
|    new | +255.085 KiB | 0.0% → 9.7% | 0 B → 255 KiB |   0 → 1 | `<init>(File, int, Charset)`                                                | `java.util.zip.ZipFile`                        |
|    new | +255.085 KiB | 0.0% → 9.7% | 0 B → 255 KiB |   0 → 1 | `<init>(File, int)`                                                         | `java.util.zip.ZipFile`                        |
|    new | +255.085 KiB | 0.0% → 9.7% | 0 B → 255 KiB |   0 → 1 | `<init>(File, boolean, int, Runtime$Version)`                               | `java.util.jar.JarFile`                        |
|    new | +255.085 KiB | 0.0% → 9.7% | 0 B → 255 KiB |   0 → 1 | `getJarFile(URL)`                                                           | `jdk.internal.loader.URLClassPath$JarLoader`   |
|    new | +255.085 KiB | 0.0% → 9.7% | 0 B → 255 KiB |   0 → 1 | `run()`                                                                     | `jdk.internal.loader.URLClassPath$JarLoader$1` |
|    new | +255.085 KiB | 0.0% → 9.7% | 0 B → 255 KiB |   0 → 1 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` | `java.security.AccessController`               |
|    new | +255.085 KiB | 0.0% → 9.7% | 0 B → 255 KiB |   0 → 1 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)`             | `java.security.AccessController`               |
|    new | +255.085 KiB | 0.0% → 9.7% | 0 B → 255 KiB |   0 → 1 | `ensureOpen()`                                                              | `jdk.internal.loader.URLClassPath$JarLoader`   |
|    new | +255.085 KiB | 0.0% → 9.7% | 0 B → 255 KiB |   0 → 1 | `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)`              | `jdk.internal.loader.URLClassPath$JarLoader`   |
|    new | +255.085 KiB | 0.0% → 9.7% | 0 B → 255 KiB |   0 → 1 | `run()`                                                                     | `jdk.internal.loader.URLClassPath$3`           |
|    new | +255.085 KiB | 0.0% → 9.7% | 0 B → 255 KiB |   0 → 1 | `getLoader(URL)`                                                            | `jdk.internal.loader.URLClassPath`             |
|    new | +255.085 KiB | 0.0% → 9.7% | 0 B → 255 KiB |   0 → 1 | `getLoader(int)`                                                            | `jdk.internal.loader.URLClassPath`             |
|    new | +255.085 KiB | 0.0% → 9.7% | 0 B → 255 KiB |   0 → 1 | `getResource(String, boolean)`                                              | `jdk.internal.loader.URLClassPath`             |
|    new | +255.085 KiB | 0.0% → 9.7% | 0 B → 255 KiB |   0 → 1 | `run()`                                                                     | `java.net.URLClassLoader$1`                    |
|    new | +255.085 KiB | 0.0% → 9.7% | 0 B → 255 KiB |   0 → 1 | `findClass(String)`                                                         | `java.net.URLClassLoader`                      |
|    new | +255.085 KiB | 0.0% → 9.7% | 0 B → 255 KiB |   0 → 1 | `loadClass(String, boolean)`                                                | `java.lang.ClassLoader`                        |

#### Improvements

Functions with the largest decrease in bytes retained within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |      Delta |             % |                Size | Objects | Function                                                                                                               | Location                                                               |
| ------: | ---------: | ------------: | ------------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| removed |  -2.06 MiB |  49.9% → 0.0% |      2.06 MiB → 0 B |   7 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -46.8% | -1.815 MiB | 93.9% → 80.5% | 3.88 MiB → 2.06 MiB |   9 → 1 | `copyOf(Object[], int)`                                                                                                | `java.util.Arrays`                                                     |
| removed | -1.815 MiB |  44.0% → 0.0% |      1.82 MiB → 0 B |   8 → 0 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed | -1.815 MiB |  44.0% → 0.0% |      1.82 MiB → 0 B |   8 → 0 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000009001205220` |
| removed | -1.815 MiB |  44.0% → 0.0% |      1.82 MiB → 0 B |   8 → 0 | `merge(Object, Object, BiFunction)`                                                                                    | `java.util.HashMap`                                                    |
| removed | -1.815 MiB |  44.0% → 0.0% |      1.82 MiB → 0 B |   8 → 0 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed | -1.815 MiB |  44.0% → 0.0% |      1.82 MiB → 0 B |   8 → 0 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000009001204fd8` |
| removed | -1.815 MiB |  44.0% → 0.0% |      1.82 MiB → 0 B |   8 → 0 | `forEach(BiConsumer)`                                                                                                  | `java.util.HashMap`                                                    |
| removed | -1.815 MiB |  44.0% → 0.0% |      1.82 MiB → 0 B |   8 → 0 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed | -1.815 MiB |  44.0% → 0.0% |      1.82 MiB → 0 B |   8 → 0 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed | -1.815 MiB |  44.0% → 0.0% |      1.82 MiB → 0 B |   8 → 0 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed | -1.815 MiB |  44.0% → 0.0% |      1.82 MiB → 0 B |   8 → 0 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| removed | -1.815 MiB |  44.0% → 0.0% |      1.82 MiB → 0 B |   8 → 0 | `exec()`                                                                                                               | `java.util.concurrent.RecursiveTask`                                   |
| removed | -1.815 MiB |  44.0% → 0.0% |      1.82 MiB → 0 B |   8 → 0 | `doExec()`                                                                                                             | `java.util.concurrent.ForkJoinTask`                                    |
| removed | -1.815 MiB |  44.0% → 0.0% |      1.82 MiB → 0 B |   8 → 0 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`                                                                   | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
| removed | -1.815 MiB |  44.0% → 0.0% |      1.82 MiB → 0 B |   8 → 0 | `scan(ForkJoinPool$WorkQueue, int, int)`                                                                               | `java.util.concurrent.ForkJoinPool`                                    |
| removed | -1.815 MiB |  44.0% → 0.0% |      1.82 MiB → 0 B |   8 → 0 | `runWorker(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`                                    |
| removed | -1.815 MiB |  44.0% → 0.0% |      1.82 MiB → 0 B |   8 → 0 | `run()`                                                                                                                | `java.util.concurrent.ForkJoinWorkerThread`                            |
| removed | -1.624 MiB |  39.4% → 0.0% |      1.62 MiB → 0 B |   7 → 0 | `addAll(Collection)`                                                                                                   | `java.util.ArrayList`                                                  |
|  -41.0% | -1.433 MiB | 84.7% → 80.5% | 3.49 MiB → 2.06 MiB |   7 → 1 | `grow(int)`                                                                                                            | `java.util.ArrayList`                                                  |

##### Standard library

|  Change |        Delta |             % |                Size | Objects | Function                                             | Location                                            |
| ------: | -----------: | ------------: | ------------------: | ------: | ---------------------------------------------------- | --------------------------------------------------- |
|  -46.8% |   -1.815 MiB | 93.9% → 80.5% | 3.88 MiB → 2.06 MiB |   9 → 1 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                  |
| removed |   -1.815 MiB |  44.0% → 0.0% |      1.82 MiB → 0 B |   8 → 0 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                                 |
| removed |   -1.815 MiB |  44.0% → 0.0% |      1.82 MiB → 0 B |   8 → 0 | `forEach(BiConsumer)`                                | `java.util.HashMap`                                 |
| removed |   -1.815 MiB |  44.0% → 0.0% |      1.82 MiB → 0 B |   8 → 0 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                |
| removed |   -1.815 MiB |  44.0% → 0.0% |      1.82 MiB → 0 B |   8 → 0 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                 |
| removed |   -1.815 MiB |  44.0% → 0.0% |      1.82 MiB → 0 B |   8 → 0 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| removed |   -1.815 MiB |  44.0% → 0.0% |      1.82 MiB → 0 B |   8 → 0 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                 |
| removed |   -1.815 MiB |  44.0% → 0.0% |      1.82 MiB → 0 B |   8 → 0 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                 |
| removed |   -1.815 MiB |  44.0% → 0.0% |      1.82 MiB → 0 B |   8 → 0 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`         |
| removed |   -1.624 MiB |  39.4% → 0.0% |      1.62 MiB → 0 B |   7 → 0 | `addAll(Collection)`                                 | `java.util.ArrayList`                               |
|  -41.0% |   -1.433 MiB | 84.7% → 80.5% | 3.49 MiB → 2.06 MiB |   7 → 1 | `grow(int)`                                          | `java.util.ArrayList`                               |
| removed |  -979.32 KiB |  23.2% → 0.0% |       979 KiB → 0 B |   4 → 0 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                 |
| removed |  -979.32 KiB |  23.2% → 0.0% |       979 KiB → 0 B |   4 → 0 | `exec()`                                             | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
| removed | -391.554 KiB |   9.3% → 0.0% |       392 KiB → 0 B |   2 → 0 | `toArray()`                                          | `java.util.ArrayList`                               |
| removed | -195.757 KiB |   4.6% → 0.0% |       196 KiB → 0 B |   1 → 0 | `<init>(Collection)`                                 | `java.util.ArrayList`                               |
|     ~0% |        -88 B | 49.9% → 80.5% |            2.06 MiB |   7 → 4 | `accept(int)`                                        | `java.util.stream.IntPipeline$1$1`                  |
|     ~0% |        -88 B | 49.9% → 80.5% |            2.06 MiB |   7 → 4 | `forEachRemaining(IntConsumer)`                      | `java.util.stream.Streams$RangeIntSpliterator`      |
|     ~0% |        -88 B | 49.9% → 80.5% |            2.06 MiB |   7 → 4 | `forEachRemaining(Consumer)`                         | `java.util.Spliterator$OfInt`                       |
|     ~0% |        -88 B | 49.9% → 80.5% |            2.06 MiB |   7 → 4 | `copyInto(Sink, Spliterator)`                        | `java.util.stream.AbstractPipeline`                 |
|     ~0% |        -88 B | 49.9% → 80.5% |            2.06 MiB |   7 → 4 | `wrapAndCopyInto(Sink, Spliterator)`                 | `java.util.stream.AbstractPipeline`                 |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |        Delta |            % |           Size | Objects | Callee                                                                                       | Location                                  |
| -----: | -----------: | -----------: | -------------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
|    new |    +2.06 MiB | 0.0% → 89.2% | 0 B → 2.06 MiB |   0 → 4 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
|    new | +255.085 KiB | 0.0% → 10.8% |  0 B → 255 KiB |   0 → 1 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |    Delta |            % |                Size | Objects | Callee                                                           | Location                               |
| -----: | -------: | -----------: | ------------------: | ------: | ---------------------------------------------------------------- | -------------------------------------- |
| +12.1% | +255 KiB |       100.0% | 2.06 MiB → 2.31 MiB |   7 → 5 | `foreach(Function1)`                                             | `scala.collection.immutable.List`      |
|    new |   +128 B | 0.0% → <0.1% |         0 B → 128 B |   0 → 1 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

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

##### `<init>(File, int)` (`java.util.zip.ZipFile`)

| Change |        Delta |             % |          Size | Objects | Callee                       | Location                |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------------- | ----------------------- |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `<init>(File, int, Charset)` | `java.util.zip.ZipFile` |

##### `<init>(File, boolean, int, Runtime$Version)` (`java.util.jar.JarFile`)

| Change |        Delta |             % |          Size | Objects | Callee              | Location                |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------- | ----------------------- |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `<init>(File, int)` | `java.util.zip.ZipFile` |

##### `getJarFile(URL)` (`jdk.internal.loader.URLClassPath$JarLoader`)

| Change |        Delta |             % |          Size | Objects | Callee                                        | Location                |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------------------- | ----------------------- |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `<init>(File, boolean, int, Runtime$Version)` | `java.util.jar.JarFile` |

##### `run()` (`jdk.internal.loader.URLClassPath$JarLoader$1`)

| Change |        Delta |             % |          Size | Objects | Callee            | Location                                       |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------- | ---------------------------------------------- |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `getJarFile(URL)` | `jdk.internal.loader.URLClassPath$JarLoader`   |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `run()`           | `jdk.internal.loader.URLClassPath$JarLoader$1` |

##### `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`)

| Change |        Delta |             % |          Size | Objects | Callee  | Location                                       |
| -----: | -----------: | ------------: | ------------: | ------: | ------- | ---------------------------------------------- |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `run()` | `jdk.internal.loader.URLClassPath$JarLoader$1` |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `run()` | `jdk.internal.loader.URLClassPath$3`           |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `run()` | `java.net.URLClassLoader$1`                    |

##### `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` (`java.security.AccessController`)

| Change |        Delta |             % |          Size | Objects | Callee                                                                      | Location                         |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------------------------------------------------- | -------------------------------- |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` | `java.security.AccessController` |

##### `ensureOpen()` (`jdk.internal.loader.URLClassPath$JarLoader`)

| Change |        Delta |             % |          Size | Objects | Callee                                                          | Location                         |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------------------------------------- | -------------------------------- |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` | `java.security.AccessController` |

##### `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)` (`jdk.internal.loader.URLClassPath$JarLoader`)

| Change |        Delta |             % |          Size | Objects | Callee         | Location                                     |
| -----: | -----------: | ------------: | ------------: | ------: | -------------- | -------------------------------------------- |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `ensureOpen()` | `jdk.internal.loader.URLClassPath$JarLoader` |

##### `run()` (`jdk.internal.loader.URLClassPath$3`)

| Change |        Delta |             % |          Size | Objects | Callee                                                         | Location                                     |
| -----: | -----------: | ------------: | ------------: | ------: | -------------------------------------------------------------- | -------------------------------------------- |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)` | `jdk.internal.loader.URLClassPath$JarLoader` |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `run()`                                                        | `jdk.internal.loader.URLClassPath$3`         |

##### `getLoader(URL)` (`jdk.internal.loader.URLClassPath`)

| Change |        Delta |             % |          Size | Objects | Callee                                                          | Location                         |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------------------------------------- | -------------------------------- |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` | `java.security.AccessController` |

##### `getLoader(int)` (`jdk.internal.loader.URLClassPath`)

| Change |        Delta |             % |          Size | Objects | Callee           | Location                           |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------- | ---------------------------------- |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `getLoader(URL)` | `jdk.internal.loader.URLClassPath` |

##### `getResource(String, boolean)` (`jdk.internal.loader.URLClassPath`)

| Change |        Delta |             % |          Size | Objects | Callee           | Location                           |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------- | ---------------------------------- |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `getLoader(int)` | `jdk.internal.loader.URLClassPath` |

##### `run()` (`java.net.URLClassLoader$1`)

| Change |        Delta |             % |          Size | Objects | Callee                         | Location                           |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------ | ---------------------------------- |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `getResource(String, boolean)` | `jdk.internal.loader.URLClassPath` |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `run()`                        | `java.net.URLClassLoader$1`        |

##### `findClass(String)` (`java.net.URLClassLoader`)

| Change |        Delta |             % |          Size | Objects | Callee                                                          | Location                         |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------------------------------------- | -------------------------------- |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` | `java.security.AccessController` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

| Change |        Delta |             % |          Size | Objects | Callee              | Location                  |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------- | ------------------------- |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `findClass(String)` | `java.net.URLClassLoader` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |     Delta |             % |           Size | Objects | Callee               | Location                                  |
| ------: | --------: | ------------: | -------------: | ------: | -------------------- | ----------------------------------------- |
| removed | -2.06 MiB | 100.0% → 0.0% | 2.06 MiB → 0 B |   7 → 0 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |        Delta |            % |           Size | Objects | Callee               | Location              |
| ------: | -----------: | -----------: | -------------: | ------: | -------------------- | --------------------- |
| removed |   -1.624 MiB | 89.5% → 0.0% | 1.62 MiB → 0 B |   7 → 0 | `addAll(Collection)` | `java.util.ArrayList` |
| removed | -195.757 KiB | 10.5% → 0.0% |  196 KiB → 0 B |   1 → 0 | `<init>(Collection)` | `java.util.ArrayList` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000009001205220`)

|  Change |      Delta |             % |           Size | Objects | Callee                       | Location                                    |
| ------: | ---------: | ------------: | -------------: | ------: | ---------------------------- | ------------------------------------------- |
| removed | -1.815 MiB | 100.0% → 0.0% | 1.82 MiB → 0 B |   8 → 0 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|  Change |      Delta |             % |           Size | Objects | Callee                  | Location                                                               |
| ------: | ---------: | ------------: | -------------: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| removed | -1.815 MiB | 100.0% → 0.0% | 1.82 MiB → 0 B |   8 → 0 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000009001205220` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |      Delta |             % |           Size | Objects | Callee                              | Location            |
| ------: | ---------: | ------------: | -------------: | ------: | ----------------------------------- | ------------------- |
| removed | -1.815 MiB | 100.0% → 0.0% | 1.82 MiB → 0 B |   8 → 0 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000009001204fd8`)

|  Change |      Delta |             % |           Size | Objects | Callee                              | Location                                    |
| ------: | ---------: | ------------: | -------------: | ------: | ----------------------------------- | ------------------------------------------- |
| removed | -1.815 MiB | 100.0% → 0.0% | 1.82 MiB → 0 B |   8 → 0 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|  Change |      Delta |             % |           Size | Objects | Callee                   | Location                                                               |
| ------: | ---------: | ------------: | -------------: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| removed | -1.815 MiB | 100.0% → 0.0% | 1.82 MiB → 0 B |   8 → 0 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000009001204fd8` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |      Delta |             % |           Size | Objects | Callee                | Location            |
| ------: | ---------: | ------------: | -------------: | ------: | --------------------- | ------------------- |
| removed | -1.815 MiB | 100.0% → 0.0% | 1.82 MiB → 0 B |   8 → 0 | `forEach(BiConsumer)` | `java.util.HashMap` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change |      Delta |             % |           Size | Objects | Callee            | Location                                    |
| ------: | ---------: | ------------: | -------------: | ------: | ----------------- | ------------------------------------------- |
| removed | -1.815 MiB | 100.0% → 0.0% | 1.82 MiB → 0 B |   8 → 0 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change |      Delta |             % |           Size | Objects | Callee                     | Location                                                   |
| ------: | ---------: | ------------: | -------------: | ------: | -------------------------- | ---------------------------------------------------------- |
| removed | -1.815 MiB | 100.0% → 0.0% | 1.82 MiB → 0 B |   8 → 0 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|  Change |      Delta |             % |           Size | Objects | Callee                           | Location                                                   |
| ------: | ---------: | ------------: | -------------: | ------: | -------------------------------- | ---------------------------------------------------------- |
| removed | -1.815 MiB | 100.0% → 0.0% | 1.82 MiB → 0 B |   8 → 0 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|  Change |      Delta |             % |           Size | Objects | Callee      | Location                                               |
| ------: | ---------: | ------------: | -------------: | ------: | ----------- | ------------------------------------------------------ |
| removed | -1.815 MiB | 100.0% → 0.0% | 1.82 MiB → 0 B |   8 → 0 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|  Change |       Delta |             % |           Size | Objects | Callee   | Location                                            |
| ------: | ----------: | ------------: | -------------: | ------: | -------- | --------------------------------------------------- |
| removed |  -1.815 MiB | 100.0% → 0.0% | 1.82 MiB → 0 B |   8 → 0 | `exec()` | `java.util.concurrent.RecursiveTask`                |
| removed | -979.32 KiB |  52.7% → 0.0% |  979 KiB → 0 B |   4 → 0 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change |      Delta |             % |           Size | Objects | Callee     | Location                            |
| ------: | ---------: | ------------: | -------------: | ------: | ---------- | ----------------------------------- |
| removed | -1.815 MiB | 100.0% → 0.0% | 1.82 MiB → 0 B |   8 → 0 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|  Change |      Delta |             % |           Size | Objects | Callee                                               | Location                                      |
| ------: | ---------: | ------------: | -------------: | ------: | ---------------------------------------------------- | --------------------------------------------- |
| removed | -1.815 MiB | 100.0% → 0.0% | 1.82 MiB → 0 B |   8 → 0 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|  Change |      Delta |             % |           Size | Objects | Callee                                   | Location                            |
| ------: | ---------: | ------------: | -------------: | ------: | ---------------------------------------- | ----------------------------------- |
| removed | -1.815 MiB | 100.0% → 0.0% | 1.82 MiB → 0 B |   8 → 0 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|  Change |      Delta |             % |           Size | Objects | Callee                              | Location                            |
| ------: | ---------: | ------------: | -------------: | ------: | ----------------------------------- | ----------------------------------- |
| removed | -1.815 MiB | 100.0% → 0.0% | 1.82 MiB → 0 B |   8 → 0 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `addAll(Collection)` (`java.util.ArrayList`)

|  Change |        Delta |            % |           Size | Objects | Callee      | Location              |
| ------: | -----------: | -----------: | -------------: | ------: | ----------- | --------------------- |
| removed |   -1.433 MiB | 88.2% → 0.0% | 1.43 MiB → 0 B |   6 → 0 | `grow(int)` | `java.util.ArrayList` |
| removed | -195.796 KiB | 11.8% → 0.0% |  196 KiB → 0 B |   1 → 0 | `toArray()` | `java.util.ArrayList` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |      Delta |      % |                Size | Objects | Callee                  | Location           |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------- | ------------------ |
| -41.0% | -1.433 MiB | 100.0% | 3.49 MiB → 2.06 MiB |   7 → 1 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|  Change |       Delta |             % |          Size | Objects | Callee     | Location                            |
| ------: | ----------: | ------------: | ------------: | ------: | ---------- | ----------------------------------- |
| removed | -979.32 KiB | 100.0% → 0.0% | 979 KiB → 0 B |   4 → 0 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|  Change |       Delta |             % |          Size | Objects | Callee   | Location                                                               |
| ------: | ----------: | ------------: | ------------: | ------: | -------- | ---------------------------------------------------------------------- |
| removed | -979.32 KiB | 100.0% → 0.0% | 979 KiB → 0 B |   4 → 0 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000090011ffbc0` |

##### `toArray()` (`java.util.ArrayList`)

|  Change |        Delta |             % |          Size | Objects | Callee                  | Location           |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------- | ------------------ |
| removed | -391.554 KiB | 100.0% → 0.0% | 392 KiB → 0 B |   2 → 0 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `<init>(Collection)` (`java.util.ArrayList`)

|  Change |        Delta |             % |          Size | Objects | Callee      | Location              |
| ------: | -----------: | ------------: | ------------: | ------: | ----------- | --------------------- |
| removed | -195.757 KiB | 100.0% → 0.0% | 196 KiB → 0 B |   1 → 0 | `toArray()` | `java.util.ArrayList` |

##### `accept(int)` (`java.util.stream.IntPipeline$1$1`)

| Change | Delta |     % |         Size | Objects | Callee       | Location                                                               |
| -----: | ----: | ----: | -----------: | ------: | ------------ | ---------------------------------------------------------------------- |
| -50.0% | -88 B | <0.1% | 176 B → 88 B |   6 → 3 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121d4f0` |
| -50.0% | -48 B | <0.1% |  96 B → 48 B |   4 → 2 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121d728` |

##### `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`)

| Change | Delta |      % |     Size | Objects | Callee        | Location                           |
| -----: | ----: | -----: | -------: | ------: | ------------- | ---------------------------------- |
|    ~0% | -88 B | 100.0% | 2.06 MiB |   7 → 4 | `accept(int)` | `java.util.stream.IntPipeline$1$1` |

##### `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`)

| Change | Delta |      % |     Size | Objects | Callee                          | Location                                       |
| -----: | ----: | -----: | -------: | ------: | ------------------------------- | ---------------------------------------------- |
|    ~0% | -88 B | 100.0% | 2.06 MiB |   7 → 4 | `forEachRemaining(IntConsumer)` | `java.util.stream.Streams$RangeIntSpliterator` |

##### `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

| Change | Delta |      % |     Size | Objects | Callee                       | Location                      |
| -----: | ----: | -----: | -------: | ------: | ---------------------------- | ----------------------------- |
|    ~0% | -88 B | 100.0% | 2.06 MiB |   7 → 4 | `forEachRemaining(Consumer)` | `java.util.Spliterator$OfInt` |

##### `wrapAndCopyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

| Change | Delta |      % |     Size | Objects | Callee                        | Location                            |
| -----: | ----: | -----: | -------: | ------: | ----------------------------- | ----------------------------------- |
|    ~0% | -88 B | 100.0% | 2.06 MiB |   7 → 4 | `copyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in bytes retained in their leaf frame.

Common call stack: `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000301001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`

| Change |        Delta |            % |           Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -----: | -----------: | -----------: | -------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    new |    +2.06 MiB | 0.0% → 80.5% | 0 B → 2.06 MiB |   0 → 1 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `accept(Object, Object)` (`java.util.stream.Collectors$$Lambda.0x00000003010c40c8`) ← `accept(Object)` (`java.util.stream.ReduceOps$3ReducingSink`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000030119c3b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|    new | +255.085 KiB |  0.0% → 9.7% |  0 B → 255 KiB |   0 → 1 | `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`) ← `<init>(ZipFile$Source$Key, boolean, ZipCoder)` ← `get(File, boolean, ZipCoder)` ← `<init>(ZipFile, ZipCoder, File, int)` (`java.util.zip.ZipFile$CleanableResource`) ← `<init>(File, int, Charset)` (`java.util.zip.ZipFile`) ← `<init>(File, int)` ← `<init>(File, boolean, int, Runtime$Version)` (`java.util.jar.JarFile`) ← `getJarFile(URL)` (`jdk.internal.loader.URLClassPath$JarLoader`) ← `run()` (`jdk.internal.loader.URLClassPath$JarLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `ensureOpen()` (`jdk.internal.loader.URLClassPath$JarLoader`) ← `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)` ← `run()` (`jdk.internal.loader.URLClassPath$3`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `getLoader(URL)` (`jdk.internal.loader.URLClassPath`) ← `getLoader(int)` ← `getResource(String, boolean)` ← `run()` (`java.net.URLClassLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `findClass(String)` (`java.net.URLClassLoader`) ← `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `getDeclaredConstructors0(boolean)` (`java.lang.Class`) ← `privateGetDeclaredConstructors(boolean)` ← `getConstructor0(Class[], int)` ← `getDeclaredConstructor(Class[])` ← `createBenchmark(BenchmarkDescriptor)` (`org.renaissance.core.BenchmarkSuite`) ← `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000030119c3b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) |
|    new |       +128 B | 0.0% → <0.1% |    0 B → 128 B |   0 → 1 | `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`) ← `copyOfRange(byte[], int, int)` ← `<init>(AbstractStringBuilder, Void)` (`java.lang.String`) ← `<init>(StringBuilder)` ← `toString()` (`java.lang.StringBuilder`) ← `unparseMethod(Class, Class[])` (`sun.invoke.util.BytecodeDescriptor`) ← `toMethodDescriptorString()` (`java.lang.invoke.MethodType`) ← `methodPrologue()` (`java.lang.invoke.InvokerBytecodeGenerator`) ← `addMethod()` ← `generateCustomizedCodeBytes()` ← `generateCustomizedCode(LambdaForm, MethodType)` ← `compileToBytecode()` (`java.lang.invoke.LambdaForm`) ← `callSiteForm(MethodType, boolean)` (`java.lang.invoke.Invokers`) ← `linkToTargetMethod(MethodType)` ← `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`) ← `linkCallSite(Object, Object, Object, Object, Object, Object[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|    new |        +48 B | 0.0% → <0.1% |     0 B → 48 B |   0 → 2 | `valueOf(double)` (`java.lang.Double`) ← `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121d728`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluate(Spliterator, boolean, IntFunction)` ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121d4f0`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000030119c3b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`)                                                                                                                                                                                                                                                                                                               |
|    new |        +40 B | 0.0% → <0.1% |     0 B → 40 B |   0 → 1 | `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121d960`) ← `<init>(long, IntFunction)` (`java.util.stream.Nodes$ArrayNode`) ← `<init>(long, IntFunction)` (`java.util.stream.Nodes$FixedNodeBuilder`) ← `builder(long, IntFunction)` (`java.util.stream.Nodes`) ← `makeNodeBuilder(long, IntFunction)` (`java.util.stream.ReferencePipeline`) ← `evaluate(Spliterator, boolean, IntFunction)` (`java.util.stream.AbstractPipeline`) ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000030121d4f0`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000030119c3b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`)                                                                                                                                                                                                                                                                                                                                                                     |

### Improvements

Call stacks with the largest decrease in bytes retained in their leaf frame.

|  Change |        Delta |            % |           Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------: | -----------: | -----------: | -------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| removed |    -2.06 MiB | 49.9% → 0.0% | 2.06 MiB → 0 B |   1 → 0 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `accept(Object, Object)` (`java.util.stream.Collectors$$Lambda.0x00000090010c40c8`) ← `accept(Object)` (`java.util.stream.ReduceOps$3ReducingSink`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000009001198798`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000009001001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000009001082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| removed | -879.632 KiB | 20.8% → 0.0% |  880 KiB → 0 B |   4 → 0 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000009001205220`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000009001204fd8`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| removed | -587.765 KiB | 13.9% → 0.0% |  588 KiB → 0 B |   2 → 0 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000009001205220`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000009001204fd8`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000090011ffbc0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| removed | -195.796 KiB |  4.6% → 0.0% |  196 KiB → 0 B |   1 → 0 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000009001205220`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000009001204fd8`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000090011ffbc0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| removed | -195.757 KiB |  4.6% → 0.0% |  196 KiB → 0 B |   1 → 0 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000009001205220`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000009001204fd8`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000090011ffbc0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| removed |        -96 B | <0.1% → 0.0% |     96 B → 0 B |   4 → 0 | `valueOf(double)` (`java.lang.Double`) ← `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000090011a1b10`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluate(Spliterator, boolean, IntFunction)` ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000090011a18d8`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000009001198798`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000009001001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000009001082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])` |
| removed |        -80 B | <0.1% → 0.0% |     80 B → 0 B |   2 → 0 | `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000090011a1d48`) ← `<init>(long, IntFunction)` (`java.util.stream.Nodes$ArrayNode`) ← `<init>(long, IntFunction)` (`java.util.stream.Nodes$FixedNodeBuilder`) ← `builder(long, IntFunction)` (`java.util.stream.Nodes`) ← `makeNodeBuilder(long, IntFunction)` (`java.util.stream.ReferencePipeline`) ← `evaluate(Spliterator, boolean, IntFunction)` (`java.util.stream.AbstractPipeline`) ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000090011a18d8`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000009001198798`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000009001001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000009001082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                       |
| removed |        -48 B | <0.1% → 0.0% |     48 B → 0 B |   1 → 0 | `compress(char[], int, int)` (`java.lang.StringUTF16`) ← `<init>(char[], int, int, Void)` (`java.lang.String`) ← `<init>(char[], int, int)` ← `loadConvert(char[], int, int, StringBuilder)` (`java.util.Properties`) ← `load0(Properties$LineReader)` ← `load(InputStream)` ← `loadProperties(URL)` (`org.renaissance.core.ResourceUtils`) ← `loadPropertiesAsMap(URL)` ← `create(Path, String, Optional, Map, boolean)` (`org.renaissance.core.BenchmarkSuite`) ← `$anonfun$1(Config, Path)` (`org.renaissance.harness.RenaissanceSuite$`) ← `apply()` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000900117e000`) ← `apply(Function0)` (`scala.util.Try$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000009001001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000009001082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

# Lock contention profile diff

Blocked 7.59s → 8.04s (+448.03ms, +5.9%) over 78 contentions → 71 contentions (97.4ms → 113.3ms per contention).

| Category         | Change |     Delta |      % |          Time | Contentions |
| ---------------- | -----: | --------: | -----: | ------------: | ----------: |
| Standard library |  +5.9% | +448.03ms | 100.0% | 7.59s → 8.04s |     78 → 71 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time blocked within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Standard library

| Change |     Delta |      % |          Time | Contentions | Function              | Location                   |
| -----: | --------: | -----: | ------------: | ----------: | --------------------- | -------------------------- |
|  +5.9% | +448.03ms | 100.0% | 7.59s → 8.04s |     78 → 71 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

| Change |     Delta |             % |              Time | Contentions | Caller            | Location                                 |
| -----: | --------: | ------------: | ----------------: | ----------: | ----------------- | ---------------------------------------- |
|  +5.0% | +366.29ms | 96.4% → 95.6% |     7.32s → 7.68s |     68 → 61 | `park()`          | `java.util.concurrent.locks.LockSupport` |
| +29.6% |  +81.74ms |   3.6% → 4.4% | 276.1ms → 357.8ms |          10 | `parkUntil(long)` | `java.util.concurrent.locks.LockSupport` |

### Total time

#### Regressions

Functions with the largest increase in time blocked within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

| Change |     Delta |             % |          Time | Contentions | Function                                                                                                               | Location                                                               |
| -----: | --------: | ------------: | ------------: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|    new |   +6.381s |  0.0% → 79.3% |   0ms → 6.38s |      0 → 16 | `$anonfun$2(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|    new |   +6.381s |  0.0% → 79.3% |   0ms → 6.38s |      0 → 16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +5.9% | +448.03ms |        100.0% | 7.59s → 8.04s |     78 → 71 | `park(boolean, long)`                                                                                                  | `jdk.internal.misc.Unsafe`                                             |
|  +5.0% | +366.29ms | 96.4% → 95.6% | 7.32s → 7.68s |     68 → 61 | `park()`                                                                                                               | `java.util.concurrent.locks.LockSupport`                               |
|  +4.4% | +270.77ms | 80.4% → 79.3% | 6.11s → 6.38s |          16 | `get()`                                                                                                                | `java.util.concurrent.ForkJoinTask`                                    |
|  +4.4% | +270.77ms | 80.4% → 79.3% | 6.11s → 6.38s |          16 | `run(int, List, int)`                                                                                                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +4.4% | +270.77ms | 80.4% → 79.3% | 6.11s → 6.38s |          16 | `$anonfun$adapted$1(Object)`                                                                                           | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  +4.4% | +270.77ms | 80.4% → 79.3% | 6.11s → 6.38s |          16 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000030121db90`   |
|  +4.4% | +270.77ms | 80.4% → 79.3% | 6.11s → 6.38s |          16 | `map(Function1)`                                                                                                       | `scala.collection.immutable.Range`                                     |
|  +4.4% | +270.77ms | 80.4% → 79.3% | 6.11s → 6.38s |          16 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  +4.4% | +270.77ms | 80.4% → 79.3% | 6.11s → 6.38s |          16 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |
|  +4.4% | +270.77ms | 80.4% → 79.3% | 6.11s → 6.38s |          16 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|  +4.4% | +270.77ms | 80.4% → 79.3% | 6.11s → 6.38s |          16 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000030119c3b8` |
|  +4.4% | +270.77ms | 80.4% → 79.3% | 6.11s → 6.38s |          16 | `apply(Object)`                                                                                                        | `scala.runtime.function.JProcedure1`                                   |
|  +4.4% | +270.77ms | 80.4% → 79.3% | 6.11s → 6.38s |          16 | `foreach(Function1)`                                                                                                   | `scala.collection.immutable.List`                                      |
|  +4.4% | +270.77ms | 80.4% → 79.3% | 6.11s → 6.38s |          16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +4.4% | +270.77ms | 80.4% → 79.3% | 6.11s → 6.38s |          16 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +4.4% | +270.77ms | 80.4% → 79.3% | 6.11s → 6.38s |          16 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|  +4.4% | +270.77ms | 80.4% → 79.3% | 6.11s → 6.38s |          16 | `invokeStatic(Object, Object)`                                                                                         | `java.lang.invoke.LambdaForm$DMH.0x0000000301001c00`                   |
|  +4.4% | +270.77ms | 80.4% → 79.3% | 6.11s → 6.38s |          16 | `invoke(Object, Object, Object)`                                                                                       | `java.lang.invoke.LambdaForm$MH.0x0000000301082400`                    |

##### Standard library

| Change |     Delta |             % |              Time | Contentions | Function                                         | Location                                             |
| -----: | --------: | ------------: | ----------------: | ----------: | ------------------------------------------------ | ---------------------------------------------------- |
|  +5.9% | +448.03ms |        100.0% |     7.59s → 8.04s |     78 → 71 | `park(boolean, long)`                            | `jdk.internal.misc.Unsafe`                           |
|  +5.0% | +366.29ms | 96.4% → 95.6% |     7.32s → 7.68s |     68 → 61 | `park()`                                         | `java.util.concurrent.locks.LockSupport`             |
|  +4.4% | +270.77ms | 80.4% → 79.3% |     6.11s → 6.38s |          16 | `get()`                                          | `java.util.concurrent.ForkJoinTask`                  |
|  +4.4% | +270.77ms | 80.4% → 79.3% |     6.11s → 6.38s |          16 | `map(Function1)`                                 | `scala.collection.immutable.Range`                   |
|  +4.4% | +270.77ms | 80.4% → 79.3% |     6.11s → 6.38s |          16 | `apply(Object)`                                  | `scala.runtime.function.JProcedure1`                 |
|  +4.4% | +270.77ms | 80.4% → 79.3% |     6.11s → 6.38s |          16 | `foreach(Function1)`                             | `scala.collection.immutable.List`                    |
|  +4.4% | +270.77ms | 80.4% → 79.3% |     6.11s → 6.38s |          16 | `invokeStatic(Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x0000000301001c00` |
|  +4.4% | +270.77ms | 80.4% → 79.3% |     6.11s → 6.38s |          16 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000301082400`  |
|  +4.4% | +270.77ms | 80.4% → 79.3% |     6.11s → 6.38s |          16 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                   |
|  +4.4% | +270.77ms | 80.4% → 79.3% |     6.11s → 6.38s |          16 | `invokeImpl(Object, Object[])`                   | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +4.4% | +270.77ms | 80.4% → 79.3% |     6.11s → 6.38s |          16 | `invoke(Object, Object[])`                       | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +4.4% | +270.77ms | 80.4% → 79.3% |     6.11s → 6.38s |          16 | `invoke(Object, Object[])`                       | `java.lang.reflect.Method`                           |
|  +4.1% | +250.67ms | 81.0% → 79.6% |     6.15s → 6.40s |     18 → 17 | `awaitDone(int, long)`                           | `java.util.concurrent.ForkJoinTask`                  |
| +13.7% | +197.36ms | 19.0% → 20.4% |     1.44s → 1.64s |     60 → 54 | `awaitWork(ForkJoinPool$WorkQueue)`              | `java.util.concurrent.ForkJoinPool`                  |
| +11.9% | +177.26ms | 19.6% → 20.7% |     1.48s → 1.66s |     62 → 55 | `runWorker(ForkJoinPool$WorkQueue)`              | `java.util.concurrent.ForkJoinPool`                  |
| +11.9% | +177.26ms | 19.6% → 20.7% |     1.48s → 1.66s |     62 → 55 | `run()`                                          | `java.util.concurrent.ForkJoinWorkerThread`          |
| +29.6% |  +81.74ms |   3.6% → 4.4% | 276.1ms → 357.8ms |          10 | `parkUntil(long)`                                | `java.util.concurrent.locks.LockSupport`             |

#### Improvements

Functions with the largest decrease in time blocked within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |    Delta |            % |            Time | Contentions | Function                                                                                                               | Location                                               |
| ------: | -------: | -----------: | --------------: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| removed |  -6.110s | 80.4% → 0.0% |     6.11s → 0ms |      16 → 0 | `$anonfun$1(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`              |
| removed |  -6.110s | 80.4% → 0.0% |     6.11s → 0ms |      16 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`            |
|  -45.8% | -20.10ms |  0.6% → 0.3% | 43.9ms → 23.8ms |       2 → 1 | `join()`                                                                                                               | `java.util.concurrent.ForkJoinTask`                    |
|  -45.8% | -20.10ms |  0.6% → 0.3% | 43.9ms → 23.8ms |       2 → 1 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |
|  -45.8% | -20.10ms |  0.6% → 0.3% | 43.9ms → 23.8ms |       2 → 1 | `exec()`                                                                                                               | `java.util.concurrent.RecursiveTask`                   |
|  -45.8% | -20.10ms |  0.6% → 0.3% | 43.9ms → 23.8ms |       2 → 1 | `doExec()`                                                                                                             | `java.util.concurrent.ForkJoinTask`                    |
|  -45.8% | -20.10ms |  0.6% → 0.3% | 43.9ms → 23.8ms |       2 → 1 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`                                                                   | `java.util.concurrent.ForkJoinPool$WorkQueue`          |
|  -45.8% | -20.10ms |  0.6% → 0.3% | 43.9ms → 23.8ms |       2 → 1 | `scan(ForkJoinPool$WorkQueue, int, int)`                                                                               | `java.util.concurrent.ForkJoinPool`                    |

##### Standard library

| Change |    Delta |           % |            Time | Contentions | Function                                             | Location                                      |
| -----: | -------: | ----------: | --------------: | ----------: | ---------------------------------------------------- | --------------------------------------------- |
| -45.8% | -20.10ms | 0.6% → 0.3% | 43.9ms → 23.8ms |       2 → 1 | `join()`                                             | `java.util.concurrent.ForkJoinTask`           |
| -45.8% | -20.10ms | 0.6% → 0.3% | 43.9ms → 23.8ms |       2 → 1 | `exec()`                                             | `java.util.concurrent.RecursiveTask`          |
| -45.8% | -20.10ms | 0.6% → 0.3% | 43.9ms → 23.8ms |       2 → 1 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`           |
| -45.8% | -20.10ms | 0.6% → 0.3% | 43.9ms → 23.8ms |       2 → 1 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| -45.8% | -20.10ms | 0.6% → 0.3% | 43.9ms → 23.8ms |       2 → 1 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`           |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `$anonfun$2(int)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |   Delta |             % |        Time | Contentions | Callee                | Location                                    |
| -----: | ------: | ------------: | ----------: | ----------: | --------------------- | ------------------------------------------- |
|    new | +6.381s | 0.0% → 100.0% | 0ms → 6.38s |      0 → 16 | `run(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |   Delta |             % |        Time | Contentions | Callee               | Location                                  |
| -----: | ------: | ------------: | ----------: | ----------: | -------------------- | ----------------------------------------- |
|    new | +6.381s | 0.0% → 100.0% | 0ms → 6.38s |      0 → 16 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

| Change |     Delta |      % |          Time | Contentions | Callee                | Location                   |
| -----: | --------: | -----: | ------------: | ----------: | --------------------- | -------------------------- |
|  +5.0% | +366.29ms | 100.0% | 7.32s → 7.68s |     68 → 61 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `get()` (`java.util.concurrent.ForkJoinTask`)

| Change |     Delta |      % |          Time | Contentions | Callee                 | Location                            |
| -----: | --------: | -----: | ------------: | ----------: | ---------------------- | ----------------------------------- |
|  +4.4% | +270.77ms | 100.0% | 6.11s → 6.38s |          16 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |     Delta |      % |          Time | Contentions | Callee  | Location                            |
| -----: | --------: | -----: | ------------: | ----------: | ------- | ----------------------------------- |
|  +4.4% | +270.77ms | 100.0% | 6.11s → 6.38s |          16 | `get()` | `java.util.concurrent.ForkJoinTask` |

##### `$anonfun$adapted$1(Object)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change |   Delta |             % |        Time | Contentions | Callee            | Location                                  |
| ------: | ------: | ------------: | ----------: | ----------: | ----------------- | ----------------------------------------- |
|     new | +6.381s | 0.0% → 100.0% | 0ms → 6.38s |      0 → 16 | `$anonfun$2(int)` | `org.renaissance.jdk.concurrent.FjKmeans` |
| removed | -6.110s | 100.0% → 0.0% | 6.11s → 0ms |      16 → 0 | `$anonfun$1(int)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000030121db90`)

| Change |     Delta |      % |          Time | Contentions | Callee                       | Location                                  |
| -----: | --------: | -----: | ------------: | ----------: | ---------------------------- | ----------------------------------------- |
|  +4.4% | +270.77ms | 100.0% | 6.11s → 6.38s |          16 | `$anonfun$adapted$1(Object)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `map(Function1)` (`scala.collection.immutable.Range`)

| Change |     Delta |      % |          Time | Contentions | Callee          | Location                                                             |
| -----: | --------: | -----: | ------------: | ----------: | --------------- | -------------------------------------------------------------------- |
|  +4.4% | +270.77ms | 100.0% | 6.11s → 6.38s |          16 | `apply(Object)` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000030121db90` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |     Delta |      % |          Time | Contentions | Callee           | Location                           |
| -----: | --------: | -----: | ------------: | ----------: | ---------------- | ---------------------------------- |
|  +4.4% | +270.77ms | 100.0% | 6.11s → 6.38s |          16 | `map(Function1)` | `scala.collection.immutable.Range` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

| Change |     Delta |      % |          Time | Contentions | Callee                  | Location                                  |
| -----: | --------: | -----: | ------------: | ----------: | ----------------------- | ----------------------------------------- |
|  +4.4% | +270.77ms | 100.0% | 6.11s → 6.38s |          16 | `run(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

| Change |     Delta |      % |          Time | Contentions | Callee                  | Location                                  |
| -----: | --------: | -----: | ------------: | ----------: | ----------------------- | ----------------------------------------- |
|  +4.4% | +270.77ms | 100.0% | 6.11s → 6.38s |          16 | `executeOperation(int)` | `org.renaissance.harness.ExecutionDriver` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000030119c3b8`)

|  Change |   Delta |             % |        Time | Contentions | Callee                                                                                                                 | Location                                    |
| ------: | ------: | ------------: | ----------: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
|     new | +6.381s | 0.0% → 100.0% | 0ms → 6.38s |      0 → 16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
| removed | -6.110s | 100.0% → 0.0% | 6.11s → 0ms |      16 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

| Change |     Delta |      % |          Time | Contentions | Callee              | Location                                                               |
| -----: | --------: | -----: | ------------: | ----------: | ------------------- | ---------------------------------------------------------------------- |
|  +4.4% | +270.77ms | 100.0% | 6.11s → 6.38s |          16 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000030119c3b8` |
|  +4.4% | +270.77ms | 100.0% | 6.11s → 6.38s |          16 | `apply(Object)`     | `scala.runtime.function.JProcedure1`                                   |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

| Change |     Delta |      % |          Time | Contentions | Callee          | Location                             |
| -----: | --------: | -----: | ------------: | ----------: | --------------- | ------------------------------------ |
|  +4.4% | +270.77ms | 100.0% | 6.11s → 6.38s |          16 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |     Delta |      % |          Time | Contentions | Callee               | Location                          |
| -----: | --------: | -----: | ------------: | ----------: | -------------------- | --------------------------------- |
|  +4.4% | +270.77ms | 100.0% | 6.11s → 6.38s |          16 | `foreach(Function1)` | `scala.collection.immutable.List` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |     Delta |      % |          Time | Contentions | Callee                                                                        | Location                                    |
| -----: | --------: | -----: | ------------: | ----------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
|  +4.4% | +270.77ms | 100.0% | 6.11s → 6.38s |          16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

| Change |     Delta |      % |          Time | Contentions | Callee           | Location                                    |
| -----: | --------: | -----: | ------------: | ----------: | ---------------- | ------------------------------------------- |
|  +4.4% | +270.77ms | 100.0% | 6.11s → 6.38s |          16 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000301001c00`)

| Change |     Delta |      % |          Time | Contentions | Callee           | Location                                   |
| -----: | --------: | -----: | ------------: | ----------: | ---------------- | ------------------------------------------ |
|  +4.4% | +270.77ms | 100.0% | 6.11s → 6.38s |          16 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301082400`)

| Change |     Delta |      % |          Time | Contentions | Callee                         | Location                                             |
| -----: | --------: | -----: | ------------: | ----------: | ------------------------------ | ---------------------------------------------------- |
|  +4.4% | +270.77ms | 100.0% | 6.11s → 6.38s |          16 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000301001c00` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change |     Delta |      % |          Time | Contentions | Callee                           | Location                                            |
| -----: | --------: | -----: | ------------: | ----------: | -------------------------------- | --------------------------------------------------- |
|  +4.4% | +270.77ms | 100.0% | 6.11s → 6.38s |          16 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000301082400` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |     Delta |      % |          Time | Contentions | Callee                                           | Location                           |
| -----: | --------: | -----: | ------------: | ----------: | ------------------------------------------------ | ---------------------------------- |
|  +4.4% | +270.77ms | 100.0% | 6.11s → 6.38s |          16 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |     Delta |      % |          Time | Contentions | Callee                         | Location                                          |
| -----: | --------: | -----: | ------------: | ----------: | ------------------------------ | ------------------------------------------------- |
|  +4.4% | +270.77ms | 100.0% | 6.11s → 6.38s |          16 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

| Change |     Delta |      % |          Time | Contentions | Callee                     | Location                                          |
| -----: | --------: | -----: | ------------: | ----------: | -------------------------- | ------------------------------------------------- |
|  +4.4% | +270.77ms | 100.0% | 6.11s → 6.38s |          16 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change |     Delta |      % |          Time | Contentions | Callee   | Location                                 |
| -----: | --------: | -----: | ------------: | ----------: | -------- | ---------------------------------------- |
|  +4.1% | +250.67ms | 100.0% | 6.15s → 6.40s |     18 → 17 | `park()` | `java.util.concurrent.locks.LockSupport` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |     Delta |             % |              Time | Contentions | Callee            | Location                                 |
| -----: | --------: | ------------: | ----------------: | ----------: | ----------------- | ---------------------------------------- |
|  +9.9% | +115.62ms | 80.9% → 78.2% |     1.16s → 1.28s |     50 → 44 | `park()`          | `java.util.concurrent.locks.LockSupport` |
| +29.6% |  +81.74ms | 19.1% → 21.8% | 276.1ms → 357.8ms |          10 | `parkUntil(long)` | `java.util.concurrent.locks.LockSupport` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |     Delta |             % |            Time | Contentions | Callee                                   | Location                            |
| -----: | --------: | ------------: | --------------: | ----------: | ---------------------------------------- | ----------------------------------- |
| +13.7% | +197.36ms | 97.0% → 98.6% |   1.44s → 1.64s |     60 → 54 | `awaitWork(ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool` |
| -45.8% |  -20.10ms |   3.0% → 1.4% | 43.9ms → 23.8ms |       2 → 1 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

| Change |     Delta |      % |          Time | Contentions | Callee                              | Location                            |
| -----: | --------: | -----: | ------------: | ----------: | ----------------------------------- | ----------------------------------- |
| +11.9% | +177.26ms | 100.0% | 1.48s → 1.66s |     62 → 55 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `parkUntil(long)` (`java.util.concurrent.locks.LockSupport`)

| Change |    Delta |      % |              Time | Contentions | Callee                | Location                   |
| -----: | -------: | -----: | ----------------: | ----------: | --------------------- | -------------------------- |
| +29.6% | +81.74ms | 100.0% | 276.1ms → 357.8ms |          10 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `$anonfun$1(int)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change |   Delta |             % |        Time | Contentions | Callee                | Location                                    |
| ------: | ------: | ------------: | ----------: | ----------: | --------------------- | ------------------------------------------- |
| removed | -6.110s | 100.0% → 0.0% | 6.11s → 0ms |      16 → 0 | `run(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |   Delta |             % |        Time | Contentions | Callee               | Location                                  |
| ------: | ------: | ------------: | ----------: | ----------: | -------------------- | ----------------------------------------- |
| removed | -6.110s | 100.0% → 0.0% | 6.11s → 0ms |      16 → 0 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change |    Delta |      % |            Time | Contentions | Callee                 | Location                            |
| -----: | -------: | -----: | --------------: | ----------: | ---------------------- | ----------------------------------- |
| -45.8% | -20.10ms | 100.0% | 43.9ms → 23.8ms |       2 → 1 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change |    Delta |      % |            Time | Contentions | Callee   | Location                            |
| -----: | -------: | -----: | --------------: | ----------: | -------- | ----------------------------------- |
| -45.8% | -20.10ms | 100.0% | 43.9ms → 23.8ms |       2 → 1 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change |    Delta |      % |            Time | Contentions | Callee      | Location                                               |
| -----: | -------: | -----: | --------------: | ----------: | ----------- | ------------------------------------------------------ |
| -45.8% | -20.10ms | 100.0% | 43.9ms → 23.8ms |       2 → 1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change |    Delta |      % |            Time | Contentions | Callee   | Location                             |
| -----: | -------: | -----: | --------------: | ----------: | -------- | ------------------------------------ |
| -45.8% | -20.10ms | 100.0% | 43.9ms → 23.8ms |       2 → 1 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |    Delta |      % |            Time | Contentions | Callee     | Location                            |
| -----: | -------: | -----: | --------------: | ----------: | ---------- | ----------------------------------- |
| -45.8% | -20.10ms | 100.0% | 43.9ms → 23.8ms |       2 → 1 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change |    Delta |      % |            Time | Contentions | Callee                                               | Location                                      |
| -----: | -------: | -----: | --------------: | ----------: | ---------------------------------------------------- | --------------------------------------------- |
| -45.8% | -20.10ms | 100.0% | 43.9ms → 23.8ms |       2 → 1 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in time blocked in their leaf frame.

| Change |     Delta |             % |              Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| -----: | --------: | ------------: | ----------------: | ----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|    new |   +6.381s |  0.0% → 79.3% |       0ms → 6.38s |      0 → 16 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `get()` ← `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `$anonfun$2(int)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `$anonfun$adapted$1(Object)` ← `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000030121db90`) ← `map(Function1)` (`scala.collection.immutable.Range`) ← `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000030119c3b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000301001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])` |
|  +9.9% | +115.62ms | 15.4% → 15.9% |     1.16s → 1.28s |     50 → 44 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| +29.6% |  +81.74ms |   3.6% → 4.4% | 276.1ms → 357.8ms |          10 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkUntil(long)` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

### Improvements

Call stacks with the largest decrease in time blocked in their leaf frame.

|  Change |    Delta |            % |            Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------: | -------: | -----------: | --------------: | ----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| removed |  -6.110s | 80.4% → 0.0% |     6.11s → 0ms |      16 → 0 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `get()` ← `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `$anonfun$1(int)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `$anonfun$adapted$1(Object)` ← `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000090011f6c70`) ← `map(Function1)` (`scala.collection.immutable.Range`) ← `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000009001198798`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000009001001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000009001082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])` |
|  -45.8% | -20.10ms |  0.6% → 0.3% | 43.9ms → 23.8ms |       2 → 1 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

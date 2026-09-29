# Sampling profile diff

Collected 1,432 samples → 1,474 samples (+42 samples, +2.9%).

| Category         | Change | Delta |             % |       Samples |
| ---------------- | -----: | ----: | ------------: | ------------: |
| Ours             |  +4.0% |   +52 | 90.2% → 91.1% | 1,291 → 1,343 |
| Standard library |  -7.1% |   -10 |   9.8% → 8.9% |     141 → 131 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

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

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

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

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

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

Functions with the largest decrease in total samples taken in the function and all its callees.

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

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

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

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

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

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

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

Functions with the largest decrease in total bytes allocated in the function and all its callees.

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

# Retained heap profile diff

Retained 2.6 MiB → 2.56 MiB (-37.5 KiB, -1.4%) over 9 objects → 13 objects (295 KiB → 202 KiB per object).

| Category         |  Change |       Delta |      % |               Size | Objects |
| ---------------- | ------: | ----------: | -----: | -----------------: | ------: |
| Standard library |   -1.4% | -37.617 KiB | 100.0% | 2.6 MiB → 2.56 MiB |   8 → 9 |
| Ours             | +300.0% |      +120 B |  <0.1% |       40 B → 160 B |   1 → 4 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

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

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

##### Standard library

|  Change |        Delta |             % |                Size | Objects | Function                      | Location                 |
| ------: | -----------: | ------------: | ------------------: | ------: | ----------------------------- | ------------------------ |
|  -12.2% | -292.773 KiB | 90.4% → 80.5% | 2.35 MiB → 2.06 MiB |   3 → 1 | `copyOf(Object[], int)`       | `java.util.Arrays`       |
| removed |        -24 B |  <0.1% → 0.0% |          24 B → 0 B |   1 → 0 | `parseName(byte[], int)`      | `java.util.jar.Manifest` |
| removed |        -16 B |  <0.1% → 0.0% |          16 B → 0 B |   1 → 0 | `getClassLoadingLock(String)` | `java.lang.ClassLoader`  |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

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

Functions with the largest decrease in total bytes retained in the function and all its callees.

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

# Lock contention profile diff

Blocked 7.50s → 7.77s (+265.53ms, +3.5%) over 75 contentions → 62 contentions (100.1ms → 125.4ms per contention).

| Category         | Change |     Delta |      % |          Time | Contentions |
| ---------------- | -----: | --------: | -----: | ------------: | ----------: |
| Standard library |  +3.5% | +265.53ms | 100.0% | 7.50s → 7.77s |     75 → 62 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time blocked directly in the function body, excluding callees.

##### Standard library

| Change |     Delta |      % |          Time | Contentions | Function              | Location                   |
| -----: | --------: | -----: | ------------: | ----------: | --------------------- | -------------------------- |
|  +3.5% | +265.53ms | 100.0% | 7.50s → 7.77s |     75 → 62 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

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

Functions with the largest decrease in total time blocked in the function and all its callees.

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

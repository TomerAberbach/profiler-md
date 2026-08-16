# Sampling profile diff

Collected 1,682 samples → 1,629 samples (-53 samples, -3.2%).

| Category         | Change | Delta |             % |       Samples |
| ---------------- | -----: | ----: | ------------: | ------------: |
| Ours             |  -2.3% |   -35 | 90.7% → 91.5% | 1,526 → 1,491 |
| Standard library | -11.5% |   -18 |   9.3% → 8.5% |     156 → 138 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                                                                                                                 | Location                                                  |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------- |
|   +5.4% |   +38 | 41.6% → 45.3% | 700 → 738 | `accumulate(Double[], double[])`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| +133.3% |    +4 |   0.2% → 0.4% |     3 → 7 | `merge(Object, Object, BiFunction)`                                                                                      | `java.util.HashMap`                                       |
| +150.0% |    +3 |   0.1% → 0.3% |     2 → 5 | `tryRemoveAndExec(ForkJoinTask, boolean)`                                                                                | `java.util.concurrent.ForkJoinPool$WorkQueue`             |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `nextNode()`                                                                                                             | `java.util.HashMap$HashIterator`                          |
| +100.0% |    +1 |          0.1% |     1 → 2 | `write0(FileDescriptor, long, int)`                                                                                      | `sun.nio.ch.UnixFileDispatcherImpl`                       |
| +100.0% |    +1 |          0.1% |     1 → 2 | `wrapSink(Sink)`                                                                                                         | `java.util.stream.AbstractPipeline`                       |
| +100.0% |    +1 |          0.1% |     1 → 2 | `compute()`                                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`    |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `join()`                                                                                                                 | `java.util.concurrent.ForkJoinTask`                       |
|   +9.1% |    +1 |          0.7% |   11 → 12 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`                                                                | `java.util.concurrent.ForkJoinPool`                       |
|  +16.7% |    +1 |          0.4% |     6 → 7 | `grow(int)`                                                                                                              | `java.util.ArrayList`                                     |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `<init>(MethodHandles$Lookup, MethodType, String, MethodType, MethodHandle, MethodType, boolean, Class[], MethodType[])` | `java.lang.invoke.AbstractValidatingLambdaMetafactory`    |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `putVal(int, Object, Object, boolean, boolean)`                                                                          | `java.util.HashMap`                                       |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `park(boolean, long)`                                                                                                    | `jdk.internal.misc.Unsafe`                                |

##### Ours

|  Change | Delta |             % |   Samples | Function                         | Location                                                  |
| ------: | ----: | ------------: | --------: | -------------------------------- | --------------------------------------------------------- |
|   +5.4% |   +38 | 41.6% → 45.3% | 700 → 738 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| +100.0% |    +1 |          0.1% |     1 → 2 | `compute()`                      | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`    |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                                                                                 | Location                                               |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------ |
| +133.3% |    +4 | 0.2% → 0.4% |   3 → 7 | `merge(Object, Object, BiFunction)`                                                                                      | `java.util.HashMap`                                    |
| +150.0% |    +3 | 0.1% → 0.3% |   2 → 5 | `tryRemoveAndExec(ForkJoinTask, boolean)`                                                                                | `java.util.concurrent.ForkJoinPool$WorkQueue`          |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `nextNode()`                                                                                                             | `java.util.HashMap$HashIterator`                       |
| +100.0% |    +1 |        0.1% |   1 → 2 | `write0(FileDescriptor, long, int)`                                                                                      | `sun.nio.ch.UnixFileDispatcherImpl`                    |
| +100.0% |    +1 |        0.1% |   1 → 2 | `wrapSink(Sink)`                                                                                                         | `java.util.stream.AbstractPipeline`                    |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `join()`                                                                                                                 | `java.util.concurrent.ForkJoinTask`                    |
|   +9.1% |    +1 |        0.7% | 11 → 12 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`                                                                | `java.util.concurrent.ForkJoinPool`                    |
|  +16.7% |    +1 |        0.4% |   6 → 7 | `grow(int)`                                                                                                              | `java.util.ArrayList`                                  |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `<init>(MethodHandles$Lookup, MethodType, String, MethodType, MethodHandle, MethodType, boolean, Class[], MethodType[])` | `java.lang.invoke.AbstractValidatingLambdaMetafactory` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `putVal(int, Object, Object, boolean, boolean)`                                                                          | `java.util.HashMap`                                    |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `park(boolean, long)`                                                                                                    | `jdk.internal.misc.Unsafe`                             |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                                | Location                                                                              |
| ------: | ----: | ------------: | --------: | --------------------------------------- | ------------------------------------------------------------------------------------- |
|   -7.9% |   -32 | 24.2% → 23.0% | 407 → 375 | `distance(Double[], Double[])`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -34.8% |   -24 |   4.1% → 2.8% |   69 → 45 | `vectorSum()`                           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  -29.5% |   -13 |   2.6% → 1.9% |   44 → 31 | `copyOf(Object[], int)`                 | `java.util.Arrays`                                                                    |
|  -13.6% |    -9 |   3.9% → 3.5% |   66 → 57 | `computeIfAbsent(Object, Function)`     | `java.util.HashMap`                                                                   |
|  -34.6% |    -9 |   1.5% → 1.0% |   26 → 17 | `computeDirectly()`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -80.0% |    -4 |   0.3% → 0.1% |     5 → 1 | `awaitDone(int, long)`                  | `java.util.concurrent.ForkJoinTask`                                                   |
|  -75.0% |    -3 |   0.2% → 0.1% |     4 → 1 | `add(double[], double[])`               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   -2.0% |    -2 |          6.1% | 102 → 100 | `collectClusters(int[])`                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `unboxToInt(Object)`                    | `scala.runtime.BoxesRunTime`                                                          |
|  -25.0% |    -1 |          0.2% |     4 → 3 | `accept(Object)`                        | `java.util.stream.ReduceOps$3ReducingSink`                                            |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `doExec()`                              | `java.util.concurrent.ForkJoinTask`                                                   |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `runWorker(ForkJoinPool$WorkQueue)`     | `java.util.concurrent.ForkJoinPool`                                                   |
|   -0.5% |    -1 | 12.6% → 13.0% | 212 → 211 | `findNearestCentroid()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `checkIndex(int, int)`                  | `java.util.Objects`                                                                   |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `equals(LambdaFormEditor$TransformKey)` | `java.lang.invoke.LambdaFormEditor$Transform`                                         |
|  -50.0% |    -1 |          0.1% |     2 → 1 | `awaitWork(ForkJoinPool$WorkQueue)`     | `java.util.concurrent.ForkJoinPool`                                                   |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `createSubtask(int, int)`               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `merge(Map, Map)`                       | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `signalWaiters()`                       | `java.util.concurrent.ForkJoinTask`                                                   |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `apply(Object)`                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000c001204b38` |

##### Ours

|  Change | Delta |             % |   Samples | Function                       | Location                                                                              |
| ------: | ----: | ------------: | --------: | ------------------------------ | ------------------------------------------------------------------------------------- |
|   -7.9% |   -32 | 24.2% → 23.0% | 407 → 375 | `distance(Double[], Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -34.8% |   -24 |   4.1% → 2.8% |   69 → 45 | `vectorSum()`                  | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  -34.6% |    -9 |   1.5% → 1.0% |   26 → 17 | `computeDirectly()`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -75.0% |    -3 |   0.2% → 0.1% |     4 → 1 | `add(double[], double[])`      | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   -2.0% |    -2 |          6.1% | 102 → 100 | `collectClusters(int[])`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   -0.5% |    -1 | 12.6% → 13.0% | 212 → 211 | `findNearestCentroid()`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `createSubtask(int, int)`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `merge(Map, Map)`              | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `apply(Object)`                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000c001204b38` |

##### Standard library

|  Change | Delta |           % | Samples | Function                                | Location                                      |
| ------: | ----: | ----------: | ------: | --------------------------------------- | --------------------------------------------- |
|  -29.5% |   -13 | 2.6% → 1.9% | 44 → 31 | `copyOf(Object[], int)`                 | `java.util.Arrays`                            |
|  -13.6% |    -9 | 3.9% → 3.5% | 66 → 57 | `computeIfAbsent(Object, Function)`     | `java.util.HashMap`                           |
|  -80.0% |    -4 | 0.3% → 0.1% |   5 → 1 | `awaitDone(int, long)`                  | `java.util.concurrent.ForkJoinTask`           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `unboxToInt(Object)`                    | `scala.runtime.BoxesRunTime`                  |
|  -25.0% |    -1 |        0.2% |   4 → 3 | `accept(Object)`                        | `java.util.stream.ReduceOps$3ReducingSink`    |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `doExec()`                              | `java.util.concurrent.ForkJoinTask`           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `runWorker(ForkJoinPool$WorkQueue)`     | `java.util.concurrent.ForkJoinPool`           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `checkIndex(int, int)`                  | `java.util.Objects`                           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `equals(LambdaFormEditor$TransformKey)` | `java.lang.invoke.LambdaFormEditor$Transform` |
|  -50.0% |    -1 |        0.1% |   2 → 1 | `awaitWork(ForkJoinPool$WorkQueue)`     | `java.util.concurrent.ForkJoinPool`           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `signalWaiters()`                       | `java.util.concurrent.ForkJoinTask`           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `unpark(Object)`                        | `jdk.internal.misc.Unsafe`                    |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % |   Samples | Function                                                                                           | Location                                                               |
| ------: | ----: | ------------: | --------: | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|   +5.4% |   +38 | 41.6% → 45.3% | 700 → 738 | `accumulate(Double[], double[])`                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   +6.8% |   +21 | 18.4% → 20.3% | 309 → 330 | `invoke()`                                                                                         | `java.util.concurrent.ForkJoinTask`                                    |
| +166.7% |   +15 |   0.5% → 1.5% |    9 → 24 | `exec()`                                                                                           | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                    |
|   +1.8% |   +14 | 45.7% → 48.1% | 769 → 783 | `vectorSum()`                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   +1.8% |   +14 | 45.7% → 48.1% | 769 → 783 | `computeDirectly()`                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  +70.6% |   +12 |   1.0% → 1.8% |   17 → 29 | `lambda$run$0(int, List, int)`                                                                     | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +68.8% |   +11 |   1.0% → 1.7% |   16 → 27 | `call()`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b8011ffbc0` |
|   +3.4% |   +10 | 17.7% → 18.9% | 298 → 308 | `average(List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   +3.0% |    +9 | 17.8% → 18.9% | 299 → 308 | `computeClusterAverages()`                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|     new |    +9 |   0.0% → 0.6% |     0 → 9 | `invokeStatic(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$DMH.0x000000b801001c00`                   |
|     new |    +9 |   0.0% → 0.6% |     0 → 9 | `invoke(Object, Object, Object)`                                                                   | `java.lang.invoke.LambdaForm$MH.0x000000b801082400`                    |
| +300.0% |    +3 |   0.1% → 0.2% |     1 → 4 | `putMapEntries(Map, boolean)`                                                                      | `java.util.HashMap`                                                    |
| +300.0% |    +3 |   0.1% → 0.2% |     1 → 4 | `<init>(Map)`                                                                                      | `java.util.HashMap`                                                    |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `nextNode()`                                                                                       | `java.util.HashMap$HashIterator`                                       |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `next()`                                                                                           | `java.util.HashMap$EntryIterator`                                      |
| +100.0% |    +1 |          0.1% |     1 → 2 | `write0(FileDescriptor, long, int)`                                                                | `sun.nio.ch.UnixFileDispatcherImpl`                                    |
| +100.0% |    +1 |          0.1% |     1 → 2 | `write(FileDescriptor, long, int)`                                                                 | `sun.nio.ch.UnixFileDispatcherImpl`                                    |
| +100.0% |    +1 |          0.1% |     1 → 2 | `writeFromNativeBuffer(FileDescriptor, ByteBuffer, long, boolean, boolean, int, NativeDispatcher)` | `sun.nio.ch.IOUtil`                                                    |
| +100.0% |    +1 |          0.1% |     1 → 2 | `write(FileDescriptor, ByteBuffer, long, boolean, boolean, int, NativeDispatcher)`                 | `sun.nio.ch.IOUtil`                                                    |
| +100.0% |    +1 |          0.1% |     1 → 2 | `write(FileDescriptor, ByteBuffer, long, boolean, int, NativeDispatcher)`                          | `sun.nio.ch.IOUtil`                                                    |

##### Ours

|  Change | Delta |             % |   Samples | Function                                                    | Location                                                               |
| ------: | ----: | ------------: | --------: | ----------------------------------------------------------- | ---------------------------------------------------------------------- |
|   +5.4% |   +38 | 41.6% → 45.3% | 700 → 738 | `accumulate(Double[], double[])`                            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   +1.8% |   +14 | 45.7% → 48.1% | 769 → 783 | `vectorSum()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   +1.8% |   +14 | 45.7% → 48.1% | 769 → 783 | `computeDirectly()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  +70.6% |   +12 |   1.0% → 1.8% |   17 → 29 | `lambda$run$0(int, List, int)`                              | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +68.8% |   +11 |   1.0% → 1.7% |   16 → 27 | `call()`                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b8011ffbc0` |
|   +3.4% |   +10 | 17.7% → 18.9% | 298 → 308 | `average(List)`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   +3.0% |    +9 | 17.8% → 18.9% | 299 → 308 | `computeClusterAverages()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  +10.0% |    +1 |   0.6% → 0.7% |   10 → 11 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`                                        |
|  +10.0% |    +1 |   0.6% → 0.7% |   10 → 11 | `launchHarnessClass(String, String[])`                      | `org.renaissance.core.Launcher`                                        |
|  +10.0% |    +1 |   0.6% → 0.7% |   10 → 11 | `main(String[])`                                            | `org.renaissance.core.Launcher`                                        |
| +100.0% |    +1 |          0.1% |     1 → 2 | `lambda$generateData$5(int, int, Random[], int)`            | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| +100.0% |    +1 |          0.1% |     1 → 2 | `apply(int)`                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b8011a18d8` |
|   +0.3% |    +1 | 17.4% → 18.0% | 292 → 293 | `computeDirectly()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |

##### Standard library

|  Change | Delta |             % |   Samples | Function                                                                                           | Location                                             |
| ------: | ----: | ------------: | --------: | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|   +6.8% |   +21 | 18.4% → 20.3% | 309 → 330 | `invoke()`                                                                                         | `java.util.concurrent.ForkJoinTask`                  |
| +166.7% |   +15 |   0.5% → 1.5% |    9 → 24 | `exec()`                                                                                           | `java.util.concurrent.ForkJoinTask$AdaptedCallable`  |
|     new |    +9 |   0.0% → 0.6% |     0 → 9 | `invokeStatic(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$DMH.0x000000b801001c00` |
|     new |    +9 |   0.0% → 0.6% |     0 → 9 | `invoke(Object, Object, Object)`                                                                   | `java.lang.invoke.LambdaForm$MH.0x000000b801082400`  |
| +300.0% |    +3 |   0.1% → 0.2% |     1 → 4 | `putMapEntries(Map, boolean)`                                                                      | `java.util.HashMap`                                  |
| +300.0% |    +3 |   0.1% → 0.2% |     1 → 4 | `<init>(Map)`                                                                                      | `java.util.HashMap`                                  |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `nextNode()`                                                                                       | `java.util.HashMap$HashIterator`                     |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `next()`                                                                                           | `java.util.HashMap$EntryIterator`                    |
| +100.0% |    +1 |          0.1% |     1 → 2 | `write0(FileDescriptor, long, int)`                                                                | `sun.nio.ch.UnixFileDispatcherImpl`                  |
| +100.0% |    +1 |          0.1% |     1 → 2 | `write(FileDescriptor, long, int)`                                                                 | `sun.nio.ch.UnixFileDispatcherImpl`                  |
| +100.0% |    +1 |          0.1% |     1 → 2 | `writeFromNativeBuffer(FileDescriptor, ByteBuffer, long, boolean, boolean, int, NativeDispatcher)` | `sun.nio.ch.IOUtil`                                  |
| +100.0% |    +1 |          0.1% |     1 → 2 | `write(FileDescriptor, ByteBuffer, long, boolean, boolean, int, NativeDispatcher)`                 | `sun.nio.ch.IOUtil`                                  |
| +100.0% |    +1 |          0.1% |     1 → 2 | `write(FileDescriptor, ByteBuffer, long, boolean, int, NativeDispatcher)`                          | `sun.nio.ch.IOUtil`                                  |
| +100.0% |    +1 |          0.1% |     1 → 2 | `write(ByteBuffer)`                                                                                | `sun.nio.ch.FileChannelImpl`                         |
| +100.0% |    +1 |          0.1% |     1 → 2 | `writeFully(ByteBuffer)`                                                                           | `sun.nio.ch.ChannelOutputStream`                     |
| +100.0% |    +1 |          0.1% |     1 → 2 | `write(byte[], int, int)`                                                                          | `sun.nio.ch.ChannelOutputStream`                     |
| +100.0% |    +1 |          0.1% |     1 → 2 | `wrapSink(Sink)`                                                                                   | `java.util.stream.AbstractPipeline`                  |
| +100.0% |    +1 |          0.1% |     1 → 2 | `evaluate(Spliterator, boolean, IntFunction)`                                                      | `java.util.stream.AbstractPipeline`                  |
| +100.0% |    +1 |          0.1% |     1 → 2 | `evaluateToArrayNode(IntFunction)`                                                                 | `java.util.stream.AbstractPipeline`                  |
| +100.0% |    +1 |          0.1% |     1 → 2 | `toArray(IntFunction)`                                                                             | `java.util.stream.ReferencePipeline`                 |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % |       Samples | Function                                                  | Location                                                   |
| ------: | ----: | ------------: | ------------: | --------------------------------------------------------- | ---------------------------------------------------------- |
|   -6.9% |   -59 | 50.9% → 48.9% |     856 → 797 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -3.0% |   -50 | 99.1% → 99.3% | 1,667 → 1,617 | `compute()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|   -3.0% |   -50 | 99.1% → 99.3% | 1,667 → 1,617 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                       |
|   -3.0% |   -50 | 99.1% → 99.3% | 1,667 → 1,617 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                        |
|   -3.0% |   -49 | 97.1% → 97.2% | 1,633 → 1,584 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                        |
|   -3.0% |   -49 | 97.1% → 97.2% | 1,633 → 1,584 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                        |
|   -2.9% |   -47 | 96.1% → 96.4% | 1,617 → 1,570 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|   -8.7% |   -39 | 26.6% → 25.1% |     448 → 409 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                        |
|   -5.3% |   -33 | 36.8% → 36.0% |     619 → 586 | `findNearestCentroid()`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -2.5% |   -32 | 76.8% → 77.3% | 1,292 → 1,260 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                        |
|   -2.5% |   -32 | 76.5% → 77.0% | 1,286 → 1,254 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                        |
|   -7.9% |   -32 | 24.2% → 23.0% |     407 → 375 | `distance(Double[], Double[])`                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -2.5% |   -31 | 73.7% → 74.2% | 1,240 → 1,209 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`                |
|   -1.9% |   -26 | 79.4% → 80.4% | 1,335 → 1,309 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|   -8.1% |   -17 | 12.5% → 11.9% |     211 → 194 | `collectClusters(int[])`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -29.5% |   -13 |   2.6% → 1.9% |       44 → 31 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                                         |
|  -14.9% |   -10 |   4.0% → 3.5% |       67 → 57 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                                        |
| removed |    -9 |   0.5% → 0.0% |         9 → 0 | `invokeStatic(Object, Object)`                            | `java.lang.invoke.LambdaForm$DMH.0x000000c001001c00`       |
| removed |    -9 |   0.5% → 0.0% |         9 → 0 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x000000c001082400`        |
| removed |    -7 |   0.4% → 0.0% |         7 → 0 | `toArray()`                                               | `java.util.ArrayList`                                      |

##### Ours

|  Change | Delta |             % |       Samples | Function                                                                                                               | Location                                                               |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|   -6.9% |   -59 | 50.9% → 48.9% |     856 → 797 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -3.0% |   -50 | 99.1% → 99.3% | 1,667 → 1,617 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|   -5.3% |   -33 | 36.8% → 36.0% |     619 → 586 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -7.9% |   -32 | 24.2% → 23.0% |     407 → 375 | `distance(Double[], Double[])`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -8.1% |   -17 | 12.5% → 11.9% |     211 → 194 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -85.7% |    -6 |   0.4% → 0.1% |         7 → 1 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -85.7% |    -6 |   0.4% → 0.1% |         7 → 1 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801205218` |
|  -75.0% |    -3 |   0.2% → 0.1% |         4 → 1 | `add(double[], double[])`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -75.0% |    -3 |   0.2% → 0.1% |         4 → 1 | `combineResults(double[], double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -75.0% |    -3 |   0.2% → 0.1% |         4 → 1 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -16.7% |    -2 |   0.7% → 0.6% |       12 → 10 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -16.7% |    -2 |   0.7% → 0.6% |       12 → 10 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801204d88` |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `<clinit>()`                                                                                                           | `scopt.OptionParser`                                                   |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `createParser(Map)`                                                                                                    | `org.renaissance.harness.ConfigParser`                                 |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `<init>(Map)`                                                                                                          | `org.renaissance.harness.ConfigParser`                                 |
|  -50.0% |    -1 |          0.1% |         2 → 1 | `getBenchmarkClassLoader(BenchmarkDescriptor)`                                                                         | `org.renaissance.core.BenchmarkSuite`                                  |
|  -50.0% |    -1 |          0.1% |         2 → 1 | `createBenchmark(BenchmarkDescriptor)`                                                                                 | `org.renaissance.core.BenchmarkSuite`                                  |
|  -50.0% |    -1 |          0.1% |         2 → 1 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)`                           | `org.renaissance.harness.ExecutionDriver`                              |
|  -12.5% |    -1 |   0.5% → 0.4% |         8 → 7 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -12.5% |    -1 |   0.5% → 0.4% |         8 → 7 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000b801198798` |

##### Standard library

|  Change | Delta |             % |       Samples | Function                                                  | Location                                             |
| ------: | ----: | ------------: | ------------: | --------------------------------------------------------- | ---------------------------------------------------- |
|   -3.0% |   -50 | 99.1% → 99.3% | 1,667 → 1,617 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                 |
|   -3.0% |   -50 | 99.1% → 99.3% | 1,667 → 1,617 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                  |
|   -3.0% |   -49 | 97.1% → 97.2% | 1,633 → 1,584 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                  |
|   -3.0% |   -49 | 97.1% → 97.2% | 1,633 → 1,584 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                  |
|   -2.9% |   -47 | 96.1% → 96.4% | 1,617 → 1,570 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|   -8.7% |   -39 | 26.6% → 25.1% |     448 → 409 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                  |
|   -2.5% |   -32 | 76.8% → 77.3% | 1,292 → 1,260 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                  |
|   -2.5% |   -32 | 76.5% → 77.0% | 1,286 → 1,254 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                  |
|   -2.5% |   -31 | 73.7% → 74.2% | 1,240 → 1,209 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`          |
|   -1.9% |   -26 | 79.4% → 80.4% | 1,335 → 1,309 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|  -29.5% |   -13 |   2.6% → 1.9% |       44 → 31 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                                   |
|  -14.9% |   -10 |   4.0% → 3.5% |       67 → 57 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                                  |
| removed |    -9 |   0.5% → 0.0% |         9 → 0 | `invokeStatic(Object, Object)`                            | `java.lang.invoke.LambdaForm$DMH.0x000000c001001c00` |
| removed |    -9 |   0.5% → 0.0% |         9 → 0 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x000000c001082400`  |
| removed |    -7 |   0.4% → 0.0% |         7 → 0 | `toArray()`                                               | `java.util.ArrayList`                                |
| removed |    -7 |   0.4% → 0.0% |         7 → 0 | `<init>(Collection)`                                      | `java.util.ArrayList`                                |
|  -14.0% |    -6 |   2.6% → 2.3% |       43 → 37 | `grow()`                                                  | `java.util.ArrayList`                                |
|  -14.0% |    -6 |   2.6% → 2.3% |       43 → 37 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                                |
|  -14.0% |    -6 |   2.6% → 2.3% |       43 → 37 | `add(Object)`                                             | `java.util.ArrayList`                                |
|  -11.6% |    -5 |   2.6% → 2.3% |       43 → 38 | `grow(int)`                                               | `java.util.ArrayList`                                |

# Allocated heap profile diff

Allocated 37.2 GiB → 37.3 GiB (+115.335 MiB, +0.3%) over 1,980 samples → 1,998 samples (19.2 MiB → 19.1 MiB per sample).

| Category         | Change |        Delta |             % |                Size |       Samples |
| ---------------- | -----: | -----------: | ------------: | ------------------: | ------------: |
| Standard library |  +1.6% | +559.442 MiB | 94.6% → 95.8% | 35.2 GiB → 35.7 GiB | 1,868 → 1,887 |
| Ours             | -21.5% | -444.107 MiB |   5.4% → 4.2% | 2.01 GiB → 1.58 GiB |     111 → 109 |
| Unknown          | +20.9% |       +432 B |         <0.1% | 2.02 KiB → 2.44 KiB |         1 → 2 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|    Change |        Delta |             % |                Size |       Samples | Function                                                                                             | Location                                                  |
| --------: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
|     +2.3% | +800.605 MiB | 92.6% → 94.4% | 34.4 GiB → 35.2 GiB | 1,706 → 1,730 | `copyOf(Object[], int)`                                                                              | `java.util.Arrays`                                        |
| +20193.0% | +158.712 MiB |  <0.1% → 0.4% |   805 KiB → 159 MiB |         2 → 1 | `newString(byte[], long)`                                                                            | `java.lang.StringConcatHelper`                            |
|       new |  +68.804 MiB |   0.0% → 0.2% |      0 B → 68.8 MiB |         0 → 2 | `computeClusterAverages()`                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`    |
|   +244.6% |  +60.501 MiB |   0.1% → 0.2% | 24.7 MiB → 85.2 MiB |         5 → 4 | `resize()`                                                                                           | `java.util.HashMap`                                       |
|    +63.9% |  +43.864 MiB |   0.2% → 0.3% |  68.6 MiB → 112 MiB |         3 → 9 | `createSubtask(int, int)`                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  +1120.0% |  +28.611 MiB |  <0.1% → 0.1% | 2.55 MiB → 31.2 MiB |         3 → 5 | `vectorSum()`                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|    +35.6% |   +4.359 MiB |         <0.1% | 12.3 MiB → 16.6 MiB |       18 → 25 | `copyOf(Object[], int, Class)`                                                                       | `java.util.Arrays`                                        |
|     +2.9% |   +2.619 MiB |          0.2% |   89.4 MiB → 92 MiB |         5 → 6 | `merge(Map, Map)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`               |
|    +33.4% |   +1.344 MiB |         <0.1% | 4.03 MiB → 5.37 MiB |        9 → 13 | `<init>(InputStream, Inflater, int)`                                                                 | `java.util.zip.InflaterInputStream`                       |
|    +11.9% |   +1.107 MiB |         <0.1% | 9.33 MiB → 10.4 MiB |       26 → 29 | `valueOf(double)`                                                                                    | `java.lang.Double`                                        |
|    +27.3% |   +974.5 KiB |         <0.1% | 3.49 MiB → 4.44 MiB |       10 → 13 | `mapToObj(IntFunction, int)`                                                                         | `java.util.stream.IntPipeline`                            |
|       new |  +784.32 KiB |  0.0% → <0.1% |       0 B → 784 KiB |         0 → 2 | `compress(char[], int, int)`                                                                         | `java.lang.StringUTF16`                                   |
|       new | +782.796 KiB |  0.0% → <0.1% |       0 B → 783 KiB |         0 → 1 | `createSubtask(int, int)`                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`    |
|       new | +642.343 KiB |  0.0% → <0.1% |       0 B → 642 KiB |         0 → 2 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` | `java.lang.ClassLoader`                                   |
|    +12.0% |     +590 KiB |         <0.1% |  4.82 MiB → 5.4 MiB |       12 → 14 | `intStream(Spliterator$OfInt, boolean)`                                                              | `java.util.stream.StreamSupport`                          |
|       new |   +490.5 KiB |  0.0% → <0.1% |       0 B → 491 KiB |         0 → 1 | `push(int)`                                                                                          | `jdk.internal.org.objectweb.asm.Frame`                    |
|       new | +466.773 KiB |  0.0% → <0.1% |       0 B → 467 KiB |         0 → 1 | `allocateUninitializedArray(Class, int)`                                                             | `jdk.internal.misc.Unsafe`                                |
|   +105.7% | +412.906 KiB |         <0.1% |   391 KiB → 804 KiB |         1 → 2 | `<init>(ClassWriter)`                                                                                | `jdk.internal.org.objectweb.asm.SymbolTable`              |
|       new |  +394.57 KiB |  0.0% → <0.1% |       0 B → 395 KiB |         0 → 1 | `<init>(SymbolTable, int, String, String, String, String[], int)`                                    | `jdk.internal.org.objectweb.asm.MethodWriter`             |
|   +162.5% | +393.234 KiB |         <0.1% |   242 KiB → 635 KiB |         1 → 2 | `newString(byte[], int, int)`                                                                        | `java.lang.StringLatin1`                                  |

##### Standard library

|    Change |        Delta |             % |                Size |       Samples | Function                                                                                             | Location                                      |
| --------: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------------------------------------------------------------------- | --------------------------------------------- |
|     +2.3% | +800.605 MiB | 92.6% → 94.4% | 34.4 GiB → 35.2 GiB | 1,706 → 1,730 | `copyOf(Object[], int)`                                                                              | `java.util.Arrays`                            |
| +20193.0% | +158.712 MiB |  <0.1% → 0.4% |   805 KiB → 159 MiB |         2 → 1 | `newString(byte[], long)`                                                                            | `java.lang.StringConcatHelper`                |
|   +244.6% |  +60.501 MiB |   0.1% → 0.2% | 24.7 MiB → 85.2 MiB |         5 → 4 | `resize()`                                                                                           | `java.util.HashMap`                           |
|    +35.6% |   +4.359 MiB |         <0.1% | 12.3 MiB → 16.6 MiB |       18 → 25 | `copyOf(Object[], int, Class)`                                                                       | `java.util.Arrays`                            |
|    +33.4% |   +1.344 MiB |         <0.1% | 4.03 MiB → 5.37 MiB |        9 → 13 | `<init>(InputStream, Inflater, int)`                                                                 | `java.util.zip.InflaterInputStream`           |
|    +11.9% |   +1.107 MiB |         <0.1% | 9.33 MiB → 10.4 MiB |       26 → 29 | `valueOf(double)`                                                                                    | `java.lang.Double`                            |
|    +27.3% |   +974.5 KiB |         <0.1% | 3.49 MiB → 4.44 MiB |       10 → 13 | `mapToObj(IntFunction, int)`                                                                         | `java.util.stream.IntPipeline`                |
|       new |  +784.32 KiB |  0.0% → <0.1% |       0 B → 784 KiB |         0 → 2 | `compress(char[], int, int)`                                                                         | `java.lang.StringUTF16`                       |
|       new | +642.343 KiB |  0.0% → <0.1% |       0 B → 642 KiB |         0 → 2 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` | `java.lang.ClassLoader`                       |
|    +12.0% |     +590 KiB |         <0.1% |  4.82 MiB → 5.4 MiB |       12 → 14 | `intStream(Spliterator$OfInt, boolean)`                                                              | `java.util.stream.StreamSupport`              |
|       new |   +490.5 KiB |  0.0% → <0.1% |       0 B → 491 KiB |         0 → 1 | `push(int)`                                                                                          | `jdk.internal.org.objectweb.asm.Frame`        |
|       new | +466.773 KiB |  0.0% → <0.1% |       0 B → 467 KiB |         0 → 1 | `allocateUninitializedArray(Class, int)`                                                             | `jdk.internal.misc.Unsafe`                    |
|   +105.7% | +412.906 KiB |         <0.1% |   391 KiB → 804 KiB |         1 → 2 | `<init>(ClassWriter)`                                                                                | `jdk.internal.org.objectweb.asm.SymbolTable`  |
|       new |  +394.57 KiB |  0.0% → <0.1% |       0 B → 395 KiB |         0 → 1 | `<init>(SymbolTable, int, String, String, String, String[], int)`                                    | `jdk.internal.org.objectweb.asm.MethodWriter` |
|   +162.5% | +393.234 KiB |         <0.1% |   242 KiB → 635 KiB |         1 → 2 | `newString(byte[], int, int)`                                                                        | `java.lang.StringLatin1`                      |
|       new | +387.687 KiB |  0.0% → <0.1% |       0 B → 388 KiB |         0 → 1 | `parseName(byte[], int)`                                                                             | `java.util.jar.Manifest`                      |
|       new | +387.632 KiB |  0.0% → <0.1% |       0 B → 388 KiB |         0 → 1 | `addConstantNameAndType(String, String)`                                                             | `jdk.internal.org.objectweb.asm.SymbolTable`  |
|       new | +387.609 KiB |  0.0% → <0.1% |       0 B → 388 KiB |         0 → 1 | `copyOfRange(byte[], int, int)`                                                                      | `java.util.Arrays`                            |
|    +11.6% |  +89.828 KiB |         <0.1% |   775 KiB → 865 KiB |             2 | `allocateInstance(Class)`                                                                            | `jdk.internal.misc.Unsafe`                    |
|       ~0% |        +16 B |         <0.1% |             388 KiB |             1 | `opWrapSink(int, Sink)`                                                                              | `java.util.stream.IntPipeline$1`              |

##### Ours

|   Change |        Delta |            % |                Size | Samples | Function                   | Location                                                  |
| -------: | -----------: | -----------: | ------------------: | ------: | -------------------------- | --------------------------------------------------------- |
|      new |  +68.804 MiB |  0.0% → 0.2% |      0 B → 68.8 MiB |   0 → 2 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`    |
|   +63.9% |  +43.864 MiB |  0.2% → 0.3% |  68.6 MiB → 112 MiB |   3 → 9 | `createSubtask(int, int)`  | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| +1120.0% |  +28.611 MiB | <0.1% → 0.1% | 2.55 MiB → 31.2 MiB |   3 → 5 | `vectorSum()`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|    +2.9% |   +2.619 MiB |         0.2% |   89.4 MiB → 92 MiB |   5 → 6 | `merge(Map, Map)`          | `org.renaissance.jdk.concurrent.JavaKMeans`               |
|      new | +782.796 KiB | 0.0% → <0.1% |       0 B → 783 KiB |   0 → 1 | `createSubtask(int, int)`  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`    |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |        Delta |            % |                Size | Samples | Function                                                                        | Location                                                   |
| ------: | -----------: | -----------: | ------------------: | ------: | ------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|  -95.0% |  -158.32 MiB | 0.4% → <0.1% |  167 MiB → 8.35 MiB |   9 → 4 | `lambda$merge$6(List, List)`                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -93.0% | -157.505 MiB | 0.4% → <0.1% |  169 MiB → 11.9 MiB | 17 → 21 | `copyOf(byte[], int)`                                                           | `java.util.Arrays`                                         |
|  -70.4% |  -150.34 MiB |  0.6% → 0.2% |  213 MiB → 63.1 MiB |  13 → 6 | `grow(int)`                                                                     | `java.util.ArrayList`                                      |
|  -48.0% | -120.527 MiB |  0.7% → 0.3% |   251 MiB → 130 MiB |  10 → 7 | `newNode(int, Object, Object, HashMap$Node)`                                    | `java.util.HashMap`                                        |
|  -91.0% | -110.496 MiB | 0.3% → <0.1% |  121 MiB → 10.9 MiB |   6 → 3 | `collectClusters(int[])`                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -32.0% | -104.777 MiB |  0.9% → 0.6% |   327 MiB → 223 MiB |   7 → 8 | `createSubtask(int, int)`                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -8.9% |  -99.569 MiB |  2.9% → 2.7% | 1.09 GiB → 1016 MiB | 56 → 58 | `findNearestCentroid()`                                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -93.0% |  -87.894 MiB | 0.2% → <0.1% | 94.5 MiB → 6.57 MiB |   4 → 1 | `add(double[], double[])`                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -38.3% |  -27.603 MiB |  0.2% → 0.1% | 72.1 MiB → 44.5 MiB |   7 → 2 | `lambda$collectClusters$0(Double[])`                                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |  -18.062 MiB | <0.1% → 0.0% |      18.1 MiB → 0 B |   3 → 0 | `iterator()`                                                                    | `java.util.HashMap$EntrySet`                               |
| removed |   -17.72 MiB | <0.1% → 0.0% |      17.7 MiB → 0 B |   1 → 0 | `entrySet()`                                                                    | `java.util.HashMap`                                        |
| removed |   -1.339 MiB | <0.1% → 0.0% |      1.34 MiB → 0 B |   4 → 0 | `builder(long, IntFunction)`                                                    | `java.util.stream.Nodes`                                   |
|  -75.0% |   -1.135 MiB |        <0.1% |  1.51 MiB → 388 KiB |   4 → 1 | `range(int, int)`                                                               | `java.util.stream.IntStream`                               |
| removed | -777.203 KiB | <0.1% → 0.0% |       777 KiB → 0 B |   1 → 0 | `copyOfRangeByte(byte[], int, int)`                                             | `java.util.Arrays`                                         |
| removed | -765.742 KiB | <0.1% → 0.0% |       766 KiB → 0 B |   2 → 0 | `fillInStackTrace(int)`                                                         | `java.lang.Throwable`                                      |
| removed | -636.921 KiB | <0.1% → 0.0% |       637 KiB → 0 B |   2 → 0 | `enlarge(int)`                                                                  | `jdk.internal.org.objectweb.asm.ByteVector`                |
| removed | -394.601 KiB | <0.1% → 0.0% |       395 KiB → 0 B |   1 → 0 | `initClassName()`                                                               | `java.lang.Class`                                          |
| removed | -393.234 KiB | <0.1% → 0.0% |       393 KiB → 0 B |   1 → 0 | `newNode(int, Object, Object, HashMap$Node)`                                    | `java.util.LinkedHashMap`                                  |
| removed | -393.117 KiB | <0.1% → 0.0% |       393 KiB → 0 B |   1 → 0 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                                    |
| removed | -389.421 KiB | <0.1% → 0.0% |       389 KiB → 0 B |   1 → 0 | `<clinit>()`                                                                    | `scala.collection.immutable.List$`                         |

##### Standard library

|  Change |        Delta |            % |               Size | Samples | Function                                                                        | Location                                      |
| ------: | -----------: | -----------: | -----------------: | ------: | ------------------------------------------------------------------------------- | --------------------------------------------- |
|  -93.0% | -157.505 MiB | 0.4% → <0.1% | 169 MiB → 11.9 MiB | 17 → 21 | `copyOf(byte[], int)`                                                           | `java.util.Arrays`                            |
|  -70.4% |  -150.34 MiB |  0.6% → 0.2% | 213 MiB → 63.1 MiB |  13 → 6 | `grow(int)`                                                                     | `java.util.ArrayList`                         |
|  -48.0% | -120.527 MiB |  0.7% → 0.3% |  251 MiB → 130 MiB |  10 → 7 | `newNode(int, Object, Object, HashMap$Node)`                                    | `java.util.HashMap`                           |
| removed |  -18.062 MiB | <0.1% → 0.0% |     18.1 MiB → 0 B |   3 → 0 | `iterator()`                                                                    | `java.util.HashMap$EntrySet`                  |
| removed |   -17.72 MiB | <0.1% → 0.0% |     17.7 MiB → 0 B |   1 → 0 | `entrySet()`                                                                    | `java.util.HashMap`                           |
| removed |   -1.339 MiB | <0.1% → 0.0% |     1.34 MiB → 0 B |   4 → 0 | `builder(long, IntFunction)`                                                    | `java.util.stream.Nodes`                      |
|  -75.0% |   -1.135 MiB |        <0.1% | 1.51 MiB → 388 KiB |   4 → 1 | `range(int, int)`                                                               | `java.util.stream.IntStream`                  |
| removed | -777.203 KiB | <0.1% → 0.0% |      777 KiB → 0 B |   1 → 0 | `copyOfRangeByte(byte[], int, int)`                                             | `java.util.Arrays`                            |
| removed | -765.742 KiB | <0.1% → 0.0% |      766 KiB → 0 B |   2 → 0 | `fillInStackTrace(int)`                                                         | `java.lang.Throwable`                         |
| removed | -636.921 KiB | <0.1% → 0.0% |      637 KiB → 0 B |   2 → 0 | `enlarge(int)`                                                                  | `jdk.internal.org.objectweb.asm.ByteVector`   |
| removed | -394.601 KiB | <0.1% → 0.0% |      395 KiB → 0 B |   1 → 0 | `initClassName()`                                                               | `java.lang.Class`                             |
| removed | -393.234 KiB | <0.1% → 0.0% |      393 KiB → 0 B |   1 → 0 | `newNode(int, Object, Object, HashMap$Node)`                                    | `java.util.LinkedHashMap`                     |
| removed | -393.117 KiB | <0.1% → 0.0% |      393 KiB → 0 B |   1 → 0 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                       |
| removed | -389.421 KiB | <0.1% → 0.0% |      389 KiB → 0 B |   1 → 0 | `<clinit>()`                                                                    | `scala.collection.immutable.List$`            |
| removed | -387.828 KiB | <0.1% → 0.0% |      388 KiB → 0 B |   1 → 0 | `endCurrentBasicBlockWithNoSuccessor()`                                         | `jdk.internal.org.objectweb.asm.MethodWriter` |
| removed | -387.695 KiB | <0.1% → 0.0% |      388 KiB → 0 B |   1 → 0 | `loadConvert(char[], int, int, StringBuilder)`                                  | `java.util.Properties`                        |
|  -49.5% | -387.648 KiB |        <0.1% |  783 KiB → 396 KiB |   2 → 1 | `<init>(int)`                                                                   | `java.io.ByteArrayOutputStream`               |
| removed | -387.648 KiB | <0.1% → 0.0% |      388 KiB → 0 B |   1 → 0 | `addConstantUtf8Reference(int, String)`                                         | `jdk.internal.org.objectweb.asm.SymbolTable`  |
| removed | -387.609 KiB | <0.1% → 0.0% |      388 KiB → 0 B |   1 → 0 | `clone()`                                                                       | `java.lang.Object`                            |
| removed | -387.601 KiB | <0.1% → 0.0% |      388 KiB → 0 B |   1 → 0 | `linkMethodHandleConstant(byte, Class, String, Object)`                         | `java.lang.invoke.MethodHandles$Lookup`       |

##### Ours

| Change |        Delta |            % |                Size | Samples | Function                             | Location                                                   |
| -----: | -----------: | -----------: | ------------------: | ------: | ------------------------------------ | ---------------------------------------------------------- |
| -95.0% |  -158.32 MiB | 0.4% → <0.1% |  167 MiB → 8.35 MiB |   9 → 4 | `lambda$merge$6(List, List)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| -91.0% | -110.496 MiB | 0.3% → <0.1% |  121 MiB → 10.9 MiB |   6 → 3 | `collectClusters(int[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -32.0% | -104.777 MiB |  0.9% → 0.6% |   327 MiB → 223 MiB |   7 → 8 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -8.9% |  -99.569 MiB |  2.9% → 2.7% | 1.09 GiB → 1016 MiB | 56 → 58 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -93.0% |  -87.894 MiB | 0.2% → <0.1% | 94.5 MiB → 6.57 MiB |   4 → 1 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| -38.3% |  -27.603 MiB |  0.2% → 0.1% | 72.1 MiB → 44.5 MiB |   7 → 2 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -2.8% | -113.148 KiB |        <0.1% |  3.9 MiB → 3.79 MiB | 11 → 10 | `lambda$generateData$4(int)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|    Change |        Delta |             % |                Size |       Samples | Function                            | Location                                                               |
| --------: | -----------: | ------------: | ------------------: | ------------: | ----------------------------------- | ---------------------------------------------------------------------- |
|     +4.2% |  +984.99 MiB | 62.3% → 64.7% | 23.2 GiB → 24.1 GiB | 1,101 → 1,137 | `addAll(Collection)`                | `java.util.ArrayList`                                                  |
|     +2.3% | +804.965 MiB | 92.6% → 94.4% | 34.4 GiB → 35.2 GiB | 1,724 → 1,755 | `copyOf(Object[], int)`             | `java.util.Arrays`                                                     |
|     +3.7% | +653.865 MiB | 46.1% → 47.7% | 17.2 GiB → 17.8 GiB |     867 → 866 | `grow(int)`                         | `java.util.ArrayList`                                                  |
|     +7.0% | +253.916 MiB |  9.6% → 10.2% |  3.55 GiB → 3.8 GiB |     220 → 208 | `grow()`                            | `java.util.ArrayList`                                                  |
|     +7.0% | +253.916 MiB |  9.6% → 10.2% |  3.55 GiB → 3.8 GiB |     220 → 208 | `add(Object, Object[], int)`        | `java.util.ArrayList`                                                  |
|     +7.0% | +253.916 MiB |  9.6% → 10.2% |  3.55 GiB → 3.8 GiB |     220 → 208 | `add(Object)`                       | `java.util.ArrayList`                                                  |
|     +0.8% | +242.387 MiB | 84.1% → 84.4% | 31.3 GiB → 31.5 GiB | 1,526 → 1,557 | `lambda$merge$6(List, List)`        | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|     +0.8% | +242.387 MiB | 84.1% → 84.4% | 31.3 GiB → 31.5 GiB | 1,526 → 1,557 | `apply(Object, Object)`             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801205218` |
|     +0.8% | +242.387 MiB | 84.1% → 84.4% | 31.3 GiB → 31.5 GiB | 1,526 → 1,557 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`                                                    |
|     +0.8% | +242.387 MiB | 84.1% → 84.4% | 31.3 GiB → 31.5 GiB | 1,526 → 1,557 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|     +0.8% | +242.387 MiB | 84.1% → 84.4% | 31.3 GiB → 31.5 GiB | 1,526 → 1,557 | `accept(Object, Object)`            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801204d88` |
|     +0.8% | +242.387 MiB | 84.1% → 84.4% | 31.3 GiB → 31.5 GiB | 1,526 → 1,557 | `forEach(BiConsumer)`               | `java.util.HashMap`                                                    |
|       new | +207.169 MiB |   0.0% → 0.5% |       0 B → 207 MiB |       0 → 118 | `invokeStatic(Object, Object)`      | `java.lang.invoke.LambdaForm$DMH.0x000000b801001c00`                   |
|       new | +207.169 MiB |   0.0% → 0.5% |       0 B → 207 MiB |       0 → 118 | `invoke(Object, Object, Object)`    | `java.lang.invoke.LambdaForm$MH.0x000000b801082400`                    |
|     +0.6% | +201.943 MiB | 84.6% → 84.9% | 31.5 GiB → 31.7 GiB | 1,541 → 1,570 | `merge(Map, Map)`                   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|     +0.6% | +201.943 MiB | 84.6% → 84.9% | 31.5 GiB → 31.7 GiB | 1,541 → 1,570 | `combineResults(Map, Map)`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|     +0.6% | +201.943 MiB | 84.6% → 84.9% | 31.5 GiB → 31.7 GiB | 1,541 → 1,570 | `combineResults(Object, Object)`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| +20193.0% | +158.712 MiB |  <0.1% → 0.4% |   805 KiB → 159 MiB |         2 → 1 | `newString(byte[], long)`           | `java.lang.StringConcatHelper`                                         |
| +20193.0% | +158.712 MiB |  <0.1% → 0.4% |   805 KiB → 159 MiB |         2 → 1 | `simpleConcat(Object, Object)`      | `java.lang.StringConcatHelper`                                         |
| +20193.0% | +158.712 MiB |  <0.1% → 0.4% |   805 KiB → 159 MiB |         2 → 1 | `concat(String)`                    | `java.lang.String`                                                     |

##### Standard library

|    Change |        Delta |             % |                Size |       Samples | Function                                                                        | Location                                             |
| --------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     +4.2% |  +984.99 MiB | 62.3% → 64.7% | 23.2 GiB → 24.1 GiB | 1,101 → 1,137 | `addAll(Collection)`                                                            | `java.util.ArrayList`                                |
|     +2.3% | +804.965 MiB | 92.6% → 94.4% | 34.4 GiB → 35.2 GiB | 1,724 → 1,755 | `copyOf(Object[], int)`                                                         | `java.util.Arrays`                                   |
|     +3.7% | +653.865 MiB | 46.1% → 47.7% | 17.2 GiB → 17.8 GiB |     867 → 866 | `grow(int)`                                                                     | `java.util.ArrayList`                                |
|     +7.0% | +253.916 MiB |  9.6% → 10.2% |  3.55 GiB → 3.8 GiB |     220 → 208 | `grow()`                                                                        | `java.util.ArrayList`                                |
|     +7.0% | +253.916 MiB |  9.6% → 10.2% |  3.55 GiB → 3.8 GiB |     220 → 208 | `add(Object, Object[], int)`                                                    | `java.util.ArrayList`                                |
|     +7.0% | +253.916 MiB |  9.6% → 10.2% |  3.55 GiB → 3.8 GiB |     220 → 208 | `add(Object)`                                                                   | `java.util.ArrayList`                                |
|     +0.8% | +242.387 MiB | 84.1% → 84.4% | 31.3 GiB → 31.5 GiB | 1,526 → 1,557 | `merge(Object, Object, BiFunction)`                                             | `java.util.HashMap`                                  |
|     +0.8% | +242.387 MiB | 84.1% → 84.4% | 31.3 GiB → 31.5 GiB | 1,526 → 1,557 | `forEach(BiConsumer)`                                                           | `java.util.HashMap`                                  |
|       new | +207.169 MiB |   0.0% → 0.5% |       0 B → 207 MiB |       0 → 118 | `invokeStatic(Object, Object)`                                                  | `java.lang.invoke.LambdaForm$DMH.0x000000b801001c00` |
|       new | +207.169 MiB |   0.0% → 0.5% |       0 B → 207 MiB |       0 → 118 | `invoke(Object, Object, Object)`                                                | `java.lang.invoke.LambdaForm$MH.0x000000b801082400`  |
| +20193.0% | +158.712 MiB |  <0.1% → 0.4% |   805 KiB → 159 MiB |         2 → 1 | `newString(byte[], long)`                                                       | `java.lang.StringConcatHelper`                       |
| +20193.0% | +158.712 MiB |  <0.1% → 0.4% |   805 KiB → 159 MiB |         2 → 1 | `simpleConcat(Object, Object)`                                                  | `java.lang.StringConcatHelper`                       |
| +20193.0% | +158.712 MiB |  <0.1% → 0.4% |   805 KiB → 159 MiB |         2 → 1 | `concat(String)`                                                                | `java.lang.String`                                   |
|  +4880.4% | +158.693 MiB |  <0.1% → 0.4% |  3.25 MiB → 162 MiB |         8 → 7 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                              |
|  +3592.8% | +157.937 MiB |  <0.1% → 0.4% |   4.4 MiB → 162 MiB |        10 → 8 | `defineClass(String, byte[], int, int, ProtectionDomain)`                       | `java.lang.ClassLoader`                              |
|  +3592.8% | +157.937 MiB |  <0.1% → 0.4% |   4.4 MiB → 162 MiB |        10 → 8 | `defineClass(String, byte[], int, int, CodeSource)`                             | `java.security.SecureClassLoader`                    |
|     +0.3% | +115.351 MiB |         99.4% |   37 GiB → 37.1 GiB | 1,856 → 1,872 | `exec()`                                                                        | `java.util.concurrent.RecursiveTask`                 |
|     +0.3% | +115.351 MiB |         99.4% |   37 GiB → 37.1 GiB | 1,856 → 1,872 | `doExec()`                                                                      | `java.util.concurrent.ForkJoinTask`                  |
|     +0.2% |  +61.833 MiB | 95.0% → 94.9% | 35.3 GiB → 35.4 GiB | 1,762 → 1,790 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`                            | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|   +244.6% |  +60.501 MiB |   0.1% → 0.2% | 24.7 MiB → 85.2 MiB |         5 → 4 | `resize()`                                                                      | `java.util.HashMap`                                  |

##### Ours

|   Change |        Delta |             % |                Size |       Samples | Function                                         | Location                                                               |
| -------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------ | ---------------------------------------------------------------------- |
|    +0.8% | +242.387 MiB | 84.1% → 84.4% | 31.3 GiB → 31.5 GiB | 1,526 → 1,557 | `lambda$merge$6(List, List)`                     | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|    +0.8% | +242.387 MiB | 84.1% → 84.4% | 31.3 GiB → 31.5 GiB | 1,526 → 1,557 | `apply(Object, Object)`                          | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801205218` |
|    +0.8% | +242.387 MiB | 84.1% → 84.4% | 31.3 GiB → 31.5 GiB | 1,526 → 1,557 | `lambda$merge$7(Map, Object, List)`              | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|    +0.8% | +242.387 MiB | 84.1% → 84.4% | 31.3 GiB → 31.5 GiB | 1,526 → 1,557 | `accept(Object, Object)`                         | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801204d88` |
|    +0.6% | +201.943 MiB | 84.6% → 84.9% | 31.5 GiB → 31.7 GiB | 1,541 → 1,570 | `merge(Map, Map)`                                | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|    +0.6% | +201.943 MiB | 84.6% → 84.9% | 31.5 GiB → 31.7 GiB | 1,541 → 1,570 | `combineResults(Map, Map)`                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|    +0.6% | +201.943 MiB | 84.6% → 84.9% | 31.5 GiB → 31.7 GiB | 1,541 → 1,570 | `combineResults(Object, Object)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|    +0.3% | +115.351 MiB |         99.4% |   37 GiB → 37.1 GiB | 1,856 → 1,872 | `compute()`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|    +1.6% |  +63.604 MiB | 10.5% → 10.7% | 3.92 GiB → 3.98 GiB |     242 → 218 | `collectClusters(int[])`                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   +63.9% |  +43.864 MiB |   0.2% → 0.3% |  68.6 MiB → 112 MiB |         3 → 9 | `createSubtask(int, int)`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   +46.6% |  +29.257 MiB |          0.2% |   62.7 MiB → 92 MiB |         4 → 9 | `computeClusterAverages()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   +46.6% |  +29.257 MiB |          0.2% |   62.7 MiB → 92 MiB |         4 → 9 | `computeDirectly()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| +1120.0% |  +28.611 MiB |  <0.1% → 0.1% | 2.55 MiB → 31.2 MiB |         3 → 5 | `vectorSum()`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| +1120.0% |  +28.611 MiB |  <0.1% → 0.1% | 2.55 MiB → 31.2 MiB |         3 → 5 | `computeDirectly()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   +11.9% |   +1.107 MiB |         <0.1% | 9.33 MiB → 10.4 MiB |       26 → 29 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   +11.9% |   +1.107 MiB |         <0.1% | 9.33 MiB → 10.4 MiB |       26 → 29 | `apply(int)`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b8011a1b10` |
|      new | +782.796 KiB |  0.0% → <0.1% |       0 B → 783 KiB |         0 → 1 | `createSubtask(int, int)`                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|      new | +402.093 KiB |  0.0% → <0.1% |       0 B → 402 KiB |         0 → 1 | `nonArgs$1(List)`                                | `scopt.ORunner$`                                                       |
|      new | +384.054 KiB |  0.0% → <0.1% |       0 B → 384 KiB |         0 → 1 | `apply$$anonfun$1(String)`                       | `scopt.OptionDef`                                                      |
|      new | +384.054 KiB |  0.0% → <0.1% |       0 B → 384 KiB |         0 → 1 | `apply(Object)`                                  | `scopt.OptionDef$$Lambda.0x000000b801172e38`                           |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                Size |       Samples | Function                                                  | Location                                                               |
| ------: | -----------: | ------------: | ------------------: | ------------: | --------------------------------------------------------- | ---------------------------------------------------------------------- |
|   -4.4% |   -1.072 GiB | 65.4% → 62.3% | 24.3 GiB → 23.2 GiB | 1,260 → 1,239 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                                    |
|   -4.4% |   -1.072 GiB | 65.4% → 62.3% | 24.3 GiB → 23.2 GiB | 1,260 → 1,239 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                                    |
|   -3.6% | -868.896 MiB | 64.0% → 61.5% | 23.8 GiB → 22.9 GiB | 1,242 → 1,222 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|   -7.2% | -584.282 MiB | 21.3% → 19.7% | 7.93 GiB → 7.36 GiB |           416 | `<init>(Collection)`                                      | `java.util.ArrayList`                                                  |
|  -13.8% | -502.045 MiB |   9.5% → 8.2% | 3.55 GiB → 3.06 GiB |     214 → 198 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                                    |
|   -5.7% | -469.296 MiB | 21.6% → 20.3% | 8.02 GiB → 7.57 GiB |     195 → 231 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                                    |
| removed | -207.185 MiB |   0.5% → 0.0% |       207 MiB → 0 B |       117 → 0 | `invokeStatic(Object, Object)`                            | `java.lang.invoke.LambdaForm$DMH.0x000000c001001c00`                   |
| removed | -207.185 MiB |   0.5% → 0.0% |       207 MiB → 0 B |       117 → 0 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x000000c001082400`                    |
|  -94.8% | -159.131 MiB |  0.4% → <0.1% |  168 MiB → 8.71 MiB |            14 | `<clinit>()`                                              | `scala.Predef$`                                                        |
|  -96.7% | -159.128 MiB |  0.4% → <0.1% |  165 MiB → 5.41 MiB |             9 | `<clinit>()`                                              | `scala.package$`                                                       |
|  -98.4% | -159.125 MiB |  0.4% → <0.1% |  162 MiB → 2.51 MiB |             4 | `<init>()`                                                | `scala.collection.immutable.Iterable$`                                 |
|  -98.4% | -159.125 MiB |  0.4% → <0.1% |  162 MiB → 2.51 MiB |             4 | `<clinit>()`                                              | `scala.collection.immutable.Iterable$`                                 |
|  -98.4% | -159.125 MiB |  0.4% → <0.1% |  162 MiB → 2.51 MiB |             4 | `<init>()`                                                | `scala.collection.Iterable$`                                           |
|  -98.4% | -159.125 MiB |  0.4% → <0.1% |  162 MiB → 2.51 MiB |             4 | `<clinit>()`                                              | `scala.collection.Iterable$`                                           |
|  -98.7% | -159.124 MiB |  0.4% → <0.1% |  161 MiB → 2.07 MiB |             3 | `<clinit>()`                                              | `scala.collection.immutable.List$`                                     |
|  -93.5% |  -158.28 MiB |  0.4% → <0.1% |  169 MiB → 11.1 MiB |       17 → 19 | `getBytes()`                                              | `jdk.internal.loader.Resource`                                         |
|  -93.5% |  -158.28 MiB |  0.4% → <0.1% |  169 MiB → 11.1 MiB |       17 → 19 | `getBytes()`                                              | `jdk.internal.loader.URLClassPath$JarLoader$2`                         |
|  -93.0% | -157.505 MiB |  0.4% → <0.1% |  169 MiB → 11.9 MiB |       17 → 21 | `copyOf(byte[], int)`                                     | `java.util.Arrays`                                                     |
|   -1.8% | -143.271 MiB | 20.6% → 20.2% | 7.66 GiB → 7.52 GiB |     186 → 222 | `lambda$run$0(int, List, int)`                            | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -1.8% | -143.271 MiB | 20.6% → 20.2% | 7.66 GiB → 7.52 GiB |     186 → 222 | `call()`                                                  | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b8011ffbc0` |

##### Standard library

|  Change |        Delta |             % |                Size |       Samples | Function                                                  | Location                                             |
| ------: | -----------: | ------------: | ------------------: | ------------: | --------------------------------------------------------- | ---------------------------------------------------- |
|   -4.4% |   -1.072 GiB | 65.4% → 62.3% | 24.3 GiB → 23.2 GiB | 1,260 → 1,239 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                  |
|   -4.4% |   -1.072 GiB | 65.4% → 62.3% | 24.3 GiB → 23.2 GiB | 1,260 → 1,239 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                  |
|   -3.6% | -868.896 MiB | 64.0% → 61.5% | 23.8 GiB → 22.9 GiB | 1,242 → 1,222 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|   -7.2% | -584.282 MiB | 21.3% → 19.7% | 7.93 GiB → 7.36 GiB |           416 | `<init>(Collection)`                                      | `java.util.ArrayList`                                |
|  -13.8% | -502.045 MiB |   9.5% → 8.2% | 3.55 GiB → 3.06 GiB |     214 → 198 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                  |
|   -5.7% | -469.296 MiB | 21.6% → 20.3% | 8.02 GiB → 7.57 GiB |     195 → 231 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                  |
| removed | -207.185 MiB |   0.5% → 0.0% |       207 MiB → 0 B |       117 → 0 | `invokeStatic(Object, Object)`                            | `java.lang.invoke.LambdaForm$DMH.0x000000c001001c00` |
| removed | -207.185 MiB |   0.5% → 0.0% |       207 MiB → 0 B |       117 → 0 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x000000c001082400`  |
|  -94.8% | -159.131 MiB |  0.4% → <0.1% |  168 MiB → 8.71 MiB |            14 | `<clinit>()`                                              | `scala.Predef$`                                      |
|  -96.7% | -159.128 MiB |  0.4% → <0.1% |  165 MiB → 5.41 MiB |             9 | `<clinit>()`                                              | `scala.package$`                                     |
|  -98.4% | -159.125 MiB |  0.4% → <0.1% |  162 MiB → 2.51 MiB |             4 | `<init>()`                                                | `scala.collection.immutable.Iterable$`               |
|  -98.4% | -159.125 MiB |  0.4% → <0.1% |  162 MiB → 2.51 MiB |             4 | `<clinit>()`                                              | `scala.collection.immutable.Iterable$`               |
|  -98.4% | -159.125 MiB |  0.4% → <0.1% |  162 MiB → 2.51 MiB |             4 | `<init>()`                                                | `scala.collection.Iterable$`                         |
|  -98.4% | -159.125 MiB |  0.4% → <0.1% |  162 MiB → 2.51 MiB |             4 | `<clinit>()`                                              | `scala.collection.Iterable$`                         |
|  -98.7% | -159.124 MiB |  0.4% → <0.1% |  161 MiB → 2.07 MiB |             3 | `<clinit>()`                                              | `scala.collection.immutable.List$`                   |
|  -93.5% |  -158.28 MiB |  0.4% → <0.1% |  169 MiB → 11.1 MiB |       17 → 19 | `getBytes()`                                              | `jdk.internal.loader.Resource`                       |
|  -93.5% |  -158.28 MiB |  0.4% → <0.1% |  169 MiB → 11.1 MiB |       17 → 19 | `getBytes()`                                              | `jdk.internal.loader.URLClassPath$JarLoader$2`       |
|  -93.0% | -157.505 MiB |  0.4% → <0.1% |  169 MiB → 11.9 MiB |       17 → 21 | `copyOf(byte[], int)`                                     | `java.util.Arrays`                                   |
|   -1.8% | -143.271 MiB | 20.6% → 20.2% | 7.66 GiB → 7.52 GiB |     186 → 222 | `exec()`                                                  | `java.util.concurrent.ForkJoinTask$AdaptedCallable`  |
|  -48.0% | -120.527 MiB |   0.7% → 0.3% |   251 MiB → 130 MiB |        10 → 7 | `newNode(int, Object, Object, HashMap$Node)`              | `java.util.HashMap`                                  |

##### Ours

|  Change |        Delta |             % |                Size |   Samples | Function                                                                                                                                                    | Location                                                                              |
| ------: | -----------: | ------------: | ------------------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|   -1.8% | -143.271 MiB | 20.6% → 20.2% | 7.66 GiB → 7.52 GiB | 186 → 222 | `lambda$run$0(int, List, int)`                                                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|   -1.8% | -143.271 MiB | 20.6% → 20.2% | 7.66 GiB → 7.52 GiB | 186 → 222 | `call()`                                                                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b8011ffbc0`                |
|  -32.0% | -104.777 MiB |   0.9% → 0.6% |   327 MiB → 223 MiB |     7 → 8 | `createSubtask(int, int)`                                                                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   -8.9% |  -99.569 MiB |   2.9% → 2.7% | 1.09 GiB → 1016 MiB |   56 → 58 | `findNearestCentroid()`                                                                                                                                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -93.0% |  -87.894 MiB |  0.2% → <0.1% | 94.5 MiB → 6.57 MiB |     4 → 1 | `add(double[], double[])`                                                                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  -93.0% |  -87.894 MiB |  0.2% → <0.1% | 94.5 MiB → 6.57 MiB |     4 → 1 | `combineResults(double[], double[])`                                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  -93.0% |  -87.894 MiB |  0.2% → <0.1% | 94.5 MiB → 6.57 MiB |     4 → 1 | `combineResults(Object, Object)`                                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  -63.0% |  -39.547 MiB |   0.2% → 0.1% | 62.7 MiB → 23.2 MiB |     4 → 7 | `average(List)`                                                                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|   -0.7% |  -35.965 MiB | 13.5% → 13.3% | 5.01 GiB → 4.97 GiB | 298 → 276 | `computeDirectly()`                                                                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -38.3% |  -27.603 MiB |   0.2% → 0.1% | 72.1 MiB → 44.5 MiB |     7 → 2 | `lambda$collectClusters$0(Double[])`                                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -38.3% |  -27.603 MiB |   0.2% → 0.1% | 72.1 MiB → 44.5 MiB |     7 → 2 | `apply(Object)`                                                                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000b801204b38` |
|   -1.6% | -405.148 KiB |          0.1% | 25.5 MiB → 25.1 MiB |   70 → 69 | `apply(int)`                                                                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b8011a18d8`                |
|   -1.6% | -405.148 KiB |          0.1% | 25.5 MiB → 25.1 MiB |   70 → 69 | `lambda$generateData$5(int, int, Random[], int)`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|   -1.6% | -405.148 KiB |          0.1% | 25.5 MiB → 25.1 MiB |   70 → 69 | `generateData(int, int, int)`                                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|   -1.6% | -405.148 KiB |          0.1% | 25.5 MiB → 25.1 MiB |   70 → 69 | `setUpBeforeAll(BenchmarkContext)`                                                                                                                          | `org.renaissance.jdk.concurrent.FjKmeans`                                             |
| removed |  -388.21 KiB |  <0.1% → 0.0% |       388 KiB → 0 B |     1 → 0 | `validateValue(Seq, Object)`                                                                                                                                | `scopt.Validation$`                                                                   |
|  -38.4% | -291.132 KiB |         <0.1% |   758 KiB → 467 KiB |     2 → 1 | `applyArgument(String, Object, Option)`                                                                                                                     | `scopt.OptionDef`                                                                     |
|  -38.4% | -291.132 KiB |         <0.1% |   758 KiB → 467 KiB |     2 → 1 | `handleArgument$1(List, OParserSetup, ListBuffer, ListBuffer, ListBuffer, ObjectRef, BooleanRef, ListBuffer, LazyRef, LazyRef, LazyRef, OptionDef, String)` | `scopt.ORunner$`                                                                      |
|   -2.8% | -113.148 KiB |         <0.1% |  3.9 MiB → 3.79 MiB |   11 → 10 | `apply(int)`                                                                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b8011a1d48`                |
|   -2.8% | -113.148 KiB |         <0.1% |  3.9 MiB → 3.79 MiB |   11 → 10 | `lambda$generateData$4(int)`                                                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |

# Retained heap profile diff

Retained 2.56 MiB → 3.99 MiB (+1.431 MiB, +55.9%) over 10 objects → 17 objects (262 KiB → 240 KiB per object).

| Category         |  Change |      Delta |      % |                Size | Objects |
| ---------------- | ------: | ---------: | -----: | ------------------: | ------: |
| Standard library |  +55.9% | +1.431 MiB | 100.0% | 2.56 MiB → 3.99 MiB |  9 → 14 |
| Ours             | +200.0% |      +80 B |  <0.1% |        40 B → 120 B |   1 → 3 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

|  Change |      Delta |             % |                Size | Objects | Function                                                                                             | Location                                    |
| ------: | ---------: | ------------: | ------------------: | ------: | ---------------------------------------------------------------------------------------------------- | ------------------------------------------- |
|  +69.5% | +1.431 MiB | 80.5% → 87.5% | 2.06 MiB → 3.49 MiB |   1 → 9 | `copyOf(Object[], int)`                                                                              | `java.util.Arrays`                          |
|     new |     +112 B |  0.0% → <0.1% |         0 B → 112 B |   0 → 1 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` | `java.lang.ClassLoader`                     |
| +200.0% |      +80 B |         <0.1% |        40 B → 120 B |   1 → 3 | `lambda$generateData$4(int)`                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans` |
|     new |      +48 B |  0.0% → <0.1% |          0 B → 48 B |   0 → 1 | `compress(char[], int, int)`                                                                         | `java.lang.StringUTF16`                     |

##### Standard library

| Change |      Delta |             % |                Size | Objects | Function                                                                                             | Location                |
| -----: | ---------: | ------------: | ------------------: | ------: | ---------------------------------------------------------------------------------------------------- | ----------------------- |
| +69.5% | +1.431 MiB | 80.5% → 87.5% | 2.06 MiB → 3.49 MiB |   1 → 9 | `copyOf(Object[], int)`                                                                              | `java.util.Arrays`      |
|    new |     +112 B |  0.0% → <0.1% |         0 B → 112 B |   0 → 1 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` | `java.lang.ClassLoader` |
|    new |      +48 B |  0.0% → <0.1% |          0 B → 48 B |   0 → 1 | `compress(char[], int, int)`                                                                         | `java.lang.StringUTF16` |

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

##### Standard library

|  Change |  Delta |            % |        Size | Objects | Function          | Location                           |
| ------: | -----: | -----------: | ----------: | ------: | ----------------- | ---------------------------------- |
| removed | -296 B | <0.1% → 0.0% | 296 B → 0 B |   1 → 0 | `<clinit>()`      | `scala.collection.immutable.List$` |
|  -75.0% |  -72 B |        <0.1% | 96 B → 24 B |   4 → 1 | `valueOf(double)` | `java.lang.Double`                 |
| removed |  -64 B | <0.1% → 0.0% |  64 B → 0 B |   1 → 0 | `initClassName()` | `java.lang.Class`                  |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

| Change |      Delta |             % |                Size | Objects | Function                                             | Location                                                               |
| -----: | ---------: | ------------: | ------------------: | ------: | ---------------------------------------------------- | ---------------------------------------------------------------------- |
|    new |  +2.31 MiB |  0.0% → 57.9% |      0 B → 2.31 MiB |   0 → 8 | `invokeStatic(Object, Object)`                       | `java.lang.invoke.LambdaForm$DMH.0x000000b801001c00`                   |
|    new |  +2.31 MiB |  0.0% → 57.9% |      0 B → 2.31 MiB |   0 → 8 | `invoke(Object, Object, Object)`                     | `java.lang.invoke.LambdaForm$MH.0x000000b801082400`                    |
| +69.5% | +1.431 MiB | 80.5% → 87.5% | 2.06 MiB → 3.49 MiB |   1 → 9 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                                     |
|    new | +1.431 MiB |  0.0% → 35.9% |      0 B → 1.43 MiB |   0 → 8 | `lambda$merge$6(List, List)`                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|    new | +1.431 MiB |  0.0% → 35.9% |      0 B → 1.43 MiB |   0 → 8 | `apply(Object, Object)`                              | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801205218` |
|    new | +1.431 MiB |  0.0% → 35.9% |      0 B → 1.43 MiB |   0 → 8 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                                                    |
|    new | +1.431 MiB |  0.0% → 35.9% |      0 B → 1.43 MiB |   0 → 8 | `lambda$merge$7(Map, Object, List)`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|    new | +1.431 MiB |  0.0% → 35.9% |      0 B → 1.43 MiB |   0 → 8 | `accept(Object, Object)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801204d88` |
|    new | +1.431 MiB |  0.0% → 35.9% |      0 B → 1.43 MiB |   0 → 8 | `forEach(BiConsumer)`                                | `java.util.HashMap`                                                    |
|    new | +1.431 MiB |  0.0% → 35.9% |      0 B → 1.43 MiB |   0 → 8 | `merge(Map, Map)`                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|    new | +1.431 MiB |  0.0% → 35.9% |      0 B → 1.43 MiB |   0 → 8 | `combineResults(Map, Map)`                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|    new | +1.431 MiB |  0.0% → 35.9% |      0 B → 1.43 MiB |   0 → 8 | `combineResults(Object, Object)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|    new | +1.431 MiB |  0.0% → 35.9% |      0 B → 1.43 MiB |   0 → 8 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|    new | +1.431 MiB |  0.0% → 35.9% |      0 B → 1.43 MiB |   0 → 8 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                                   |
|    new | +1.431 MiB |  0.0% → 35.9% |      0 B → 1.43 MiB |   0 → 8 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                                    |
|    new | +1.431 MiB |  0.0% → 35.9% |      0 B → 1.43 MiB |   0 → 8 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|    new | +1.431 MiB |  0.0% → 35.9% |      0 B → 1.43 MiB |   0 → 8 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                                    |
|    new | +1.431 MiB |  0.0% → 35.9% |      0 B → 1.43 MiB |   0 → 8 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                                    |
|    new | +1.431 MiB |  0.0% → 35.9% |      0 B → 1.43 MiB |   0 → 8 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                            |
| +64.8% | +1.336 MiB | 80.5% → 85.1% |  2.06 MiB → 3.4 MiB |   1 → 8 | `grow(int)`                                          | `java.util.ArrayList`                                                  |

##### Standard library

| Change |        Delta |             % |                Size | Objects | Function                                                                          | Location                                             |
| -----: | -----------: | ------------: | ------------------: | ------: | --------------------------------------------------------------------------------- | ---------------------------------------------------- |
|    new |    +2.31 MiB |  0.0% → 57.9% |      0 B → 2.31 MiB |   0 → 8 | `invokeStatic(Object, Object)`                                                    | `java.lang.invoke.LambdaForm$DMH.0x000000b801001c00` |
|    new |    +2.31 MiB |  0.0% → 57.9% |      0 B → 2.31 MiB |   0 → 8 | `invoke(Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000b801082400`  |
| +69.5% |   +1.431 MiB | 80.5% → 87.5% | 2.06 MiB → 3.49 MiB |   1 → 9 | `copyOf(Object[], int)`                                                           | `java.util.Arrays`                                   |
|    new |   +1.431 MiB |  0.0% → 35.9% |      0 B → 1.43 MiB |   0 → 8 | `merge(Object, Object, BiFunction)`                                               | `java.util.HashMap`                                  |
|    new |   +1.431 MiB |  0.0% → 35.9% |      0 B → 1.43 MiB |   0 → 8 | `forEach(BiConsumer)`                                                             | `java.util.HashMap`                                  |
|    new |   +1.431 MiB |  0.0% → 35.9% |      0 B → 1.43 MiB |   0 → 8 | `exec()`                                                                          | `java.util.concurrent.RecursiveTask`                 |
|    new |   +1.431 MiB |  0.0% → 35.9% |      0 B → 1.43 MiB |   0 → 8 | `doExec()`                                                                        | `java.util.concurrent.ForkJoinTask`                  |
|    new |   +1.431 MiB |  0.0% → 35.9% |      0 B → 1.43 MiB |   0 → 8 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`                              | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|    new |   +1.431 MiB |  0.0% → 35.9% |      0 B → 1.43 MiB |   0 → 8 | `scan(ForkJoinPool$WorkQueue, int, int)`                                          | `java.util.concurrent.ForkJoinPool`                  |
|    new |   +1.431 MiB |  0.0% → 35.9% |      0 B → 1.43 MiB |   0 → 8 | `runWorker(ForkJoinPool$WorkQueue)`                                               | `java.util.concurrent.ForkJoinPool`                  |
|    new |   +1.431 MiB |  0.0% → 35.9% |      0 B → 1.43 MiB |   0 → 8 | `run()`                                                                           | `java.util.concurrent.ForkJoinWorkerThread`          |
| +64.8% |   +1.336 MiB | 80.5% → 85.1% |  2.06 MiB → 3.4 MiB |   1 → 8 | `grow(int)`                                                                       | `java.util.ArrayList`                                |
|    new |   +1.336 MiB |  0.0% → 33.5% |      0 B → 1.34 MiB |   0 → 7 | `addAll(Collection)`                                                              | `java.util.ArrayList`                                |
|    new |  +293.82 KiB |   0.0% → 7.2% |       0 B → 294 KiB |   0 → 2 | `tryRemoveAndExec(ForkJoinTask, boolean)`                                         | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|    new |  +293.82 KiB |   0.0% → 7.2% |       0 B → 294 KiB |   0 → 2 | `awaitDone(int, long)`                                                            | `java.util.concurrent.ForkJoinTask`                  |
|    new |  +293.82 KiB |   0.0% → 7.2% |       0 B → 294 KiB |   0 → 2 | `join()`                                                                          | `java.util.concurrent.ForkJoinTask`                  |
|    new |  +293.82 KiB |   0.0% → 7.2% |       0 B → 294 KiB |   0 → 2 | `invoke()`                                                                        | `java.util.concurrent.ForkJoinTask`                  |
|    new |  +293.82 KiB |   0.0% → 7.2% |       0 B → 294 KiB |   0 → 2 | `exec()`                                                                          | `java.util.concurrent.ForkJoinTask$AdaptedCallable`  |
|    new | +256.015 KiB |   0.0% → 6.3% |       0 B → 256 KiB |   0 → 1 | `commit(long, long, long, String, String, boolean, long, long, long, long, long)` | `jdk.jfr.events.ActiveRecordingEvent`                |
|    new | +256.015 KiB |   0.0% → 6.3% |       0 B → 256 KiB |   0 → 1 | `writeMetaEvents()`                                                               | `jdk.jfr.internal.PlatformRecorder`                  |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

|  Change |        Delta |             % |           Size | Objects | Function                                         | Location                                                           |
| ------: | -----------: | ------------: | -------------: | ------: | ------------------------------------------------ | ------------------------------------------------------------------ |
| removed |    -2.31 MiB |  90.2% → 0.0% | 2.31 MiB → 0 B |   9 → 0 | `invokeStatic(Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x000000c001001c00`               |
| removed |    -2.31 MiB |  90.2% → 0.0% | 2.31 MiB → 0 B |   9 → 0 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000c001082400`                |
| removed | -256.015 KiB |   9.8% → 0.0% |  256 KiB → 0 B |   1 → 0 | `commit()`                                       | `jdk.jfr.events.InitialSecurityPropertyEvent`                      |
| removed | -256.015 KiB |   9.8% → 0.0% |  256 KiB → 0 B |   1 → 0 | `emitInitialSecurityProperties()`                | `jdk.jfr.internal.instrument.JDKEvents`                            |
| removed | -256.015 KiB |   9.8% → 0.0% |  256 KiB → 0 B |   1 → 0 | `run()`                                          | `jdk.jfr.internal.instrument.JDKEvents$$Lambda.0x000000c001075930` |
| removed | -256.015 KiB |   9.8% → 0.0% |  256 KiB → 0 B |   1 → 0 | `execute(long, PeriodicType)`                    | `jdk.jfr.internal.periodic.JDKEventTask`                           |
| removed | -256.015 KiB |   9.8% → 0.0% |  256 KiB → 0 B |   1 → 0 | `run(long, PeriodicType)`                        | `jdk.jfr.internal.periodic.PeriodicTask`                           |
| removed | -256.015 KiB |   9.8% → 0.0% |  256 KiB → 0 B |   1 → 0 | `doChunkBegin(boolean)`                          | `jdk.jfr.internal.periodic.PeriodicEvents`                         |
| removed |       -296 B |  <0.1% → 0.0% |    296 B → 0 B |   1 → 0 | `<clinit>()`                                     | `scala.collection.immutable.List$`                                 |
| removed |       -296 B |  <0.1% → 0.0% |    296 B → 0 B |   1 → 0 | `<init>()`                                       | `scala.collection.immutable.Iterable$`                             |
| removed |       -296 B |  <0.1% → 0.0% |    296 B → 0 B |   1 → 0 | `<clinit>()`                                     | `scala.collection.immutable.Iterable$`                             |
| removed |       -296 B |  <0.1% → 0.0% |    296 B → 0 B |   1 → 0 | `<init>()`                                       | `scala.collection.Iterable$`                                       |
| removed |       -296 B |  <0.1% → 0.0% |    296 B → 0 B |   1 → 0 | `<clinit>()`                                     | `scala.collection.Iterable$`                                       |
| removed |       -296 B |  <0.1% → 0.0% |    296 B → 0 B |   1 → 0 | `<clinit>()`                                     | `scala.package$`                                                   |
| removed |       -296 B |  <0.1% → 0.0% |    296 B → 0 B |   1 → 0 | `<clinit>()`                                     | `scala.Predef$`                                                    |
|     ~0% |       -192 B | 90.2% → 57.9% |       2.31 MiB |   9 → 8 | `main(String[])`                                 | `org.renaissance.harness.RenaissanceSuite`                         |
|     ~0% |       -192 B | 90.2% → 57.9% |       2.31 MiB |   9 → 8 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                 |
|     ~0% |       -192 B | 90.2% → 57.9% |       2.31 MiB |   9 → 8 | `invokeImpl(Object, Object[])`                   | `jdk.internal.reflect.DirectMethodHandleAccessor`                  |
|     ~0% |       -192 B | 90.2% → 57.9% |       2.31 MiB |   9 → 8 | `invoke(Object, Object[])`                       | `jdk.internal.reflect.DirectMethodHandleAccessor`                  |
|     ~0% |       -192 B | 90.2% → 57.9% |       2.31 MiB |   9 → 8 | `invoke(Object, Object[])`                       | `java.lang.reflect.Method`                                         |

##### Standard library

|  Change |        Delta |             % |           Size | Objects | Function                                         | Location                                                           |
| ------: | -----------: | ------------: | -------------: | ------: | ------------------------------------------------ | ------------------------------------------------------------------ |
| removed |    -2.31 MiB |  90.2% → 0.0% | 2.31 MiB → 0 B |   9 → 0 | `invokeStatic(Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x000000c001001c00`               |
| removed |    -2.31 MiB |  90.2% → 0.0% | 2.31 MiB → 0 B |   9 → 0 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000c001082400`                |
| removed | -256.015 KiB |   9.8% → 0.0% |  256 KiB → 0 B |   1 → 0 | `commit()`                                       | `jdk.jfr.events.InitialSecurityPropertyEvent`                      |
| removed | -256.015 KiB |   9.8% → 0.0% |  256 KiB → 0 B |   1 → 0 | `emitInitialSecurityProperties()`                | `jdk.jfr.internal.instrument.JDKEvents`                            |
| removed | -256.015 KiB |   9.8% → 0.0% |  256 KiB → 0 B |   1 → 0 | `run()`                                          | `jdk.jfr.internal.instrument.JDKEvents$$Lambda.0x000000c001075930` |
| removed | -256.015 KiB |   9.8% → 0.0% |  256 KiB → 0 B |   1 → 0 | `execute(long, PeriodicType)`                    | `jdk.jfr.internal.periodic.JDKEventTask`                           |
| removed | -256.015 KiB |   9.8% → 0.0% |  256 KiB → 0 B |   1 → 0 | `run(long, PeriodicType)`                        | `jdk.jfr.internal.periodic.PeriodicTask`                           |
| removed | -256.015 KiB |   9.8% → 0.0% |  256 KiB → 0 B |   1 → 0 | `doChunkBegin(boolean)`                          | `jdk.jfr.internal.periodic.PeriodicEvents`                         |
| removed |       -296 B |  <0.1% → 0.0% |    296 B → 0 B |   1 → 0 | `<clinit>()`                                     | `scala.collection.immutable.List$`                                 |
| removed |       -296 B |  <0.1% → 0.0% |    296 B → 0 B |   1 → 0 | `<init>()`                                       | `scala.collection.immutable.Iterable$`                             |
| removed |       -296 B |  <0.1% → 0.0% |    296 B → 0 B |   1 → 0 | `<clinit>()`                                     | `scala.collection.immutable.Iterable$`                             |
| removed |       -296 B |  <0.1% → 0.0% |    296 B → 0 B |   1 → 0 | `<init>()`                                       | `scala.collection.Iterable$`                                       |
| removed |       -296 B |  <0.1% → 0.0% |    296 B → 0 B |   1 → 0 | `<clinit>()`                                     | `scala.collection.Iterable$`                                       |
| removed |       -296 B |  <0.1% → 0.0% |    296 B → 0 B |   1 → 0 | `<clinit>()`                                     | `scala.package$`                                                   |
| removed |       -296 B |  <0.1% → 0.0% |    296 B → 0 B |   1 → 0 | `<clinit>()`                                     | `scala.Predef$`                                                    |
|     ~0% |       -192 B | 90.2% → 57.9% |       2.31 MiB |   9 → 8 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                 |
|     ~0% |       -192 B | 90.2% → 57.9% |       2.31 MiB |   9 → 8 | `invokeImpl(Object, Object[])`                   | `jdk.internal.reflect.DirectMethodHandleAccessor`                  |
|     ~0% |       -192 B | 90.2% → 57.9% |       2.31 MiB |   9 → 8 | `invoke(Object, Object[])`                       | `jdk.internal.reflect.DirectMethodHandleAccessor`                  |
|     ~0% |       -192 B | 90.2% → 57.9% |       2.31 MiB |   9 → 8 | `invoke(Object, Object[])`                       | `java.lang.reflect.Method`                                         |
|  -75.0% |        -72 B |         <0.1% |    96 B → 24 B |   4 → 1 | `valueOf(double)`                                | `java.lang.Double`                                                 |

# Lock contention profile diff

Blocked 7.01s → 7.40s (+395.97ms, +5.6%) over 54 contentions → 58 contentions (129.8ms → 127.7ms per contention).

| Category         | Change |     Delta |      % |          Time | Contentions |
| ---------------- | -----: | --------: | -----: | ------------: | ----------: |
| Standard library |  +5.6% | +395.97ms | 100.0% | 7.01s → 7.40s |     54 → 58 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time blocked directly in the function body, excluding callees.

##### Standard library

| Change |     Delta |      % |          Time | Contentions | Function              | Location                   |
| -----: | --------: | -----: | ------------: | ----------: | --------------------- | -------------------------- |
|  +5.6% | +395.97ms | 100.0% | 7.01s → 7.40s |     54 → 58 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

| Change |     Delta |             % |          Time | Contentions | Function                                                                                                               | Location                                                               |
| -----: | --------: | ------------: | ------------: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|    new |   +6.261s |  0.0% → 84.5% |   0ms → 6.26s |      0 → 16 | `invokeStatic(Object, Object)`                                                                                         | `java.lang.invoke.LambdaForm$DMH.0x000000b801001c00`                   |
|    new |   +6.261s |  0.0% → 84.5% |   0ms → 6.26s |      0 → 16 | `invoke(Object, Object, Object)`                                                                                       | `java.lang.invoke.LambdaForm$MH.0x000000b801082400`                    |
|  +5.6% | +395.97ms |        100.0% | 7.01s → 7.40s |     54 → 58 | `park(boolean, long)`                                                                                                  | `jdk.internal.misc.Unsafe`                                             |
|  +3.8% | +259.19ms | 97.2% → 95.5% | 6.81s → 7.07s |          46 | `park()`                                                                                                               | `java.util.concurrent.locks.LockSupport`                               |
|  +3.4% | +205.33ms | 86.4% → 84.5% | 6.05s → 6.26s |          16 | `awaitDone(int, long)`                                                                                                 | `java.util.concurrent.ForkJoinTask`                                    |
|  +3.4% | +205.33ms | 86.4% → 84.5% | 6.05s → 6.26s |          16 | `get()`                                                                                                                | `java.util.concurrent.ForkJoinTask`                                    |
|  +3.4% | +205.33ms | 86.4% → 84.5% | 6.05s → 6.26s |          16 | `run(int, List, int)`                                                                                                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +3.4% | +205.33ms | 86.4% → 84.5% | 6.05s → 6.26s |          16 | `$anonfun$1(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  +3.4% | +205.33ms | 86.4% → 84.5% | 6.05s → 6.26s |          16 | `$anonfun$adapted$1(Object)`                                                                                           | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  +3.4% | +205.33ms | 86.4% → 84.5% | 6.05s → 6.26s |          16 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000b8011f6c70`   |
|  +3.4% | +205.33ms | 86.4% → 84.5% | 6.05s → 6.26s |          16 | `map(Function1)`                                                                                                       | `scala.collection.immutable.Range`                                     |
|  +3.4% | +205.33ms | 86.4% → 84.5% | 6.05s → 6.26s |          16 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  +3.4% | +205.33ms | 86.4% → 84.5% | 6.05s → 6.26s |          16 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |
|  +3.4% | +205.33ms | 86.4% → 84.5% | 6.05s → 6.26s |          16 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|  +3.4% | +205.33ms | 86.4% → 84.5% | 6.05s → 6.26s |          16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +3.4% | +205.33ms | 86.4% → 84.5% | 6.05s → 6.26s |          16 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000b801198798` |
|  +3.4% | +205.33ms | 86.4% → 84.5% | 6.05s → 6.26s |          16 | `apply(Object)`                                                                                                        | `scala.runtime.function.JProcedure1`                                   |
|  +3.4% | +205.33ms | 86.4% → 84.5% | 6.05s → 6.26s |          16 | `foreach(Function1)`                                                                                                   | `scala.collection.immutable.List`                                      |
|  +3.4% | +205.33ms | 86.4% → 84.5% | 6.05s → 6.26s |          16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +3.4% | +205.33ms | 86.4% → 84.5% | 6.05s → 6.26s |          16 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |

##### Standard library

| Change |     Delta |             % |              Time | Contentions | Function                                         | Location                                             |
| -----: | --------: | ------------: | ----------------: | ----------: | ------------------------------------------------ | ---------------------------------------------------- |
|    new |   +6.261s |  0.0% → 84.5% |       0ms → 6.26s |      0 → 16 | `invokeStatic(Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x000000b801001c00` |
|    new |   +6.261s |  0.0% → 84.5% |       0ms → 6.26s |      0 → 16 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000b801082400`  |
|  +5.6% | +395.97ms |        100.0% |     7.01s → 7.40s |     54 → 58 | `park(boolean, long)`                            | `jdk.internal.misc.Unsafe`                           |
|  +3.8% | +259.19ms | 97.2% → 95.5% |     6.81s → 7.07s |          46 | `park()`                                         | `java.util.concurrent.locks.LockSupport`             |
|  +3.4% | +205.33ms | 86.4% → 84.5% |     6.05s → 6.26s |          16 | `awaitDone(int, long)`                           | `java.util.concurrent.ForkJoinTask`                  |
|  +3.4% | +205.33ms | 86.4% → 84.5% |     6.05s → 6.26s |          16 | `get()`                                          | `java.util.concurrent.ForkJoinTask`                  |
|  +3.4% | +205.33ms | 86.4% → 84.5% |     6.05s → 6.26s |          16 | `map(Function1)`                                 | `scala.collection.immutable.Range`                   |
|  +3.4% | +205.33ms | 86.4% → 84.5% |     6.05s → 6.26s |          16 | `apply(Object)`                                  | `scala.runtime.function.JProcedure1`                 |
|  +3.4% | +205.33ms | 86.4% → 84.5% |     6.05s → 6.26s |          16 | `foreach(Function1)`                             | `scala.collection.immutable.List`                    |
|  +3.4% | +205.33ms | 86.4% → 84.5% |     6.05s → 6.26s |          16 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                   |
|  +3.4% | +205.33ms | 86.4% → 84.5% |     6.05s → 6.26s |          16 | `invokeImpl(Object, Object[])`                   | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +3.4% | +205.33ms | 86.4% → 84.5% |     6.05s → 6.26s |          16 | `invoke(Object, Object[])`                       | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +3.4% | +205.33ms | 86.4% → 84.5% |     6.05s → 6.26s |          16 | `invoke(Object, Object[])`                       | `java.lang.reflect.Method`                           |
| +20.0% | +190.64ms | 13.6% → 15.5% |   954.1ms → 1.14s |     38 → 42 | `awaitWork(ForkJoinPool$WorkQueue)`              | `java.util.concurrent.ForkJoinPool`                  |
| +20.0% | +190.64ms | 13.6% → 15.5% |   954.1ms → 1.14s |     38 → 42 | `runWorker(ForkJoinPool$WorkQueue)`              | `java.util.concurrent.ForkJoinPool`                  |
| +20.0% | +190.64ms | 13.6% → 15.5% |   954.1ms → 1.14s |     38 → 42 | `run()`                                          | `java.util.concurrent.ForkJoinWorkerThread`          |
| +69.6% | +136.78ms |   2.8% → 4.5% | 196.5ms → 333.3ms |      8 → 12 | `parkUntil(long)`                                | `java.util.concurrent.locks.LockSupport`             |

#### Improvements

Functions with the largest decrease in total time blocked in the function and all its callees.

##### Standard library

|  Change |   Delta |            % |        Time | Contentions | Function                         | Location                                             |
| ------: | ------: | -----------: | ----------: | ----------: | -------------------------------- | ---------------------------------------------------- |
| removed | -6.056s | 86.4% → 0.0% | 6.05s → 0ms |      16 → 0 | `invokeStatic(Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x000000c001001c00` |
| removed | -6.056s | 86.4% → 0.0% | 6.05s → 0ms |      16 → 0 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000c001082400`  |

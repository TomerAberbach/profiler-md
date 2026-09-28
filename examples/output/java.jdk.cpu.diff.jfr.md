# Sampling profile diff

Collected 1,473 samples → 1,360 samples (-113 samples, -7.7%).

| Category         | Change | Delta |             % |       Samples |
| ---------------- | -----: | ----: | ------------: | ------------: |
| Ours             |  -7.5% |   -98 | 89.1% → 89.3% | 1,313 → 1,215 |
| Standard library |  -9.4% |   -15 | 10.9% → 10.7% |     160 → 145 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

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

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

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

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

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

Functions with the largest decrease in total samples taken in the function and all its callees.

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

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

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

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

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

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

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

Functions with the largest decrease in total bytes allocated in the function and all its callees.

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

# Retained heap profile diff

Retained 4.13 MiB → 2.56 MiB (-1.566 MiB, -38.0%) over 17 objects → 7 objects (249 KiB → 375 KiB per object).

| Category         | Change |      Delta |      % |                Size | Objects |
| ---------------- | -----: | ---------: | -----: | ------------------: | ------: |
| Standard library | -38.0% | -1.566 MiB | 100.0% | 4.13 MiB → 2.56 MiB |  15 → 6 |
| Ours             | -50.0% |      -40 B |  <0.1% |         80 B → 40 B |   2 → 1 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

##### Standard library

| Change |        Delta |            % |          Size | Objects | Function                            | Location                       |
| -----: | -----------: | -----------: | ------------: | ------: | ----------------------------------- | ------------------------------ |
|    new | +255.085 KiB |  0.0% → 9.7% | 0 B → 255 KiB |   0 → 1 | `initCEN(int, ZipCoder)`            | `java.util.zip.ZipFile$Source` |
|    new |       +128 B | 0.0% → <0.1% |   0 B → 128 B |   0 → 1 | `copyOfRangeByte(byte[], int, int)` | `java.util.Arrays`             |

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

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

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

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

Functions with the largest decrease in total bytes retained in the function and all its callees.

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

# Lock contention profile diff

Blocked 7.59s → 8.04s (+448.03ms, +5.9%) over 78 contentions → 71 contentions (97.4ms → 113.3ms per contention).

| Category         | Change |     Delta |      % |          Time | Contentions |
| ---------------- | -----: | --------: | -----: | ------------: | ----------: |
| Standard library |  +5.9% | +448.03ms | 100.0% | 7.59s → 8.04s |     78 → 71 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time blocked directly in the function body, excluding callees.

##### Standard library

| Change |     Delta |      % |          Time | Contentions | Function              | Location                   |
| -----: | --------: | -----: | ------------: | ----------: | --------------------- | -------------------------- |
|  +5.9% | +448.03ms | 100.0% | 7.59s → 8.04s |     78 → 71 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

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

Functions with the largest decrease in total time blocked in the function and all its callees.

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

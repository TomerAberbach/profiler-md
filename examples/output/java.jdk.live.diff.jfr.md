# Sampling profile diff

Collected 1,677 samples → 1,725 samples (+48 samples, +2.9%).

| Category         | Change | Delta |             % |       Samples |
| ---------------- | -----: | ----: | ------------: | ------------: |
| Ours             |  +4.2% |   +64 | 90.2% → 91.4% | 1,512 → 1,576 |
| Standard library |  -9.7% |   -16 |   9.8% → 8.6% |     165 → 149 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|   Change | Delta |             % |   Samples | Function                                        | Location                                                                              |
| -------: | ----: | ------------: | --------: | ----------------------------------------------- | ------------------------------------------------------------------------------------- |
|   +17.8% |   +68 | 22.8% → 26.1% | 383 → 451 | `distance(Double[], Double[])`                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   +51.9% |   +27 |   3.1% → 4.6% |   52 → 79 | `vectorSum()`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  +209.1% |   +23 |   0.7% → 2.0% |   11 → 34 | `computeDirectly()`                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| +2300.0% |   +23 |   0.1% → 1.4% |    1 → 24 | `apply(Object)`                                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001204b38` |
|   +19.6% |   +21 |   6.4% → 7.4% | 107 → 128 | `collectClusters(int[])`                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +300.0% |    +6 |   0.1% → 0.5% |     2 → 8 | `tryRemoveAndExec(ForkJoinTask, boolean)`       | `java.util.concurrent.ForkJoinPool$WorkQueue`                                         |
|   +66.7% |    +4 |   0.4% → 0.6% |    6 → 10 | `grow(int)`                                     | `java.util.ArrayList`                                                                 |
|  +300.0% |    +3 |   0.1% → 0.2% |     1 → 4 | `accept(Object)`                                | `java.util.stream.ReduceOps$3ReducingSink`                                            |
|      new |    +3 |   0.0% → 0.2% |     0 → 3 | `checkIndex(int, int)`                          | `java.util.Objects`                                                                   |
|  +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap`                                                                   |
|    +0.5% |    +1 | 12.6% → 12.3% | 211 → 212 | `findNearestCentroid()`                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|      new |    +1 |   0.0% → 0.1% |     0 → 1 | `compute()`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
|  +100.0% |    +1 |          0.1% |     1 → 2 | `join()`                                        | `java.util.concurrent.ForkJoinTask`                                                   |
|      new |    +1 |   0.0% → 0.1% |     0 → 1 | `runWorker(ForkJoinPool$WorkQueue)`             | `java.util.concurrent.ForkJoinPool`                                                   |
|    +3.0% |    +1 |          2.0% |   33 → 34 | `copyOf(Object[], int)`                         | `java.util.Arrays`                                                                    |
|      new |    +1 |   0.0% → 0.1% |     0 → 1 | `signalWaiters()`                               | `java.util.concurrent.ForkJoinTask`                                                   |
|      new |    +1 |   0.0% → 0.1% |     0 → 1 | `signalWork()`                                  | `java.util.concurrent.ForkJoinPool`                                                   |
|      new |    +1 |   0.0% → 0.1% |     0 → 1 | `seek0(long)`                                   | `java.io.RandomAccessFile`                                                            |
|      new |    +1 |   0.0% → 0.1% |     0 → 1 | `<init>()`                                      | `scala.collection.immutable.List`                                                     |
|      new |    +1 |   0.0% → 0.1% |     0 → 1 | `add(double[], double[])`                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |

##### Ours

|   Change | Delta |             % |   Samples | Function                             | Location                                                                              |
| -------: | ----: | ------------: | --------: | ------------------------------------ | ------------------------------------------------------------------------------------- |
|   +17.8% |   +68 | 22.8% → 26.1% | 383 → 451 | `distance(Double[], Double[])`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   +51.9% |   +27 |   3.1% → 4.6% |   52 → 79 | `vectorSum()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  +209.1% |   +23 |   0.7% → 2.0% |   11 → 34 | `computeDirectly()`                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| +2300.0% |   +23 |   0.1% → 1.4% |    1 → 24 | `apply(Object)`                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001204b38` |
|   +19.6% |   +21 |   6.4% → 7.4% | 107 → 128 | `collectClusters(int[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|    +0.5% |    +1 | 12.6% → 12.3% | 211 → 212 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|      new |    +1 |   0.0% → 0.1% |     0 → 1 | `compute()`                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
|      new |    +1 |   0.0% → 0.1% |     0 → 1 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|      new |    +1 |   0.0% → 0.1% |     0 → 1 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|      new |    +1 |   0.0% → 0.1% |     0 → 1 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|      new |    +1 |   0.0% → 0.1% |     0 → 1 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |

##### Standard library

|  Change | Delta |           % | Samples | Function                                        | Location                                      |
| ------: | ----: | ----------: | ------: | ----------------------------------------------- | --------------------------------------------- |
| +300.0% |    +6 | 0.1% → 0.5% |   2 → 8 | `tryRemoveAndExec(ForkJoinTask, boolean)`       | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  +66.7% |    +4 | 0.4% → 0.6% |  6 → 10 | `grow(int)`                                     | `java.util.ArrayList`                         |
| +300.0% |    +3 | 0.1% → 0.2% |   1 → 4 | `accept(Object)`                                | `java.util.stream.ReduceOps$3ReducingSink`    |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `checkIndex(int, int)`                          | `java.util.Objects`                           |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap`                           |
| +100.0% |    +1 |        0.1% |   1 → 2 | `join()`                                        | `java.util.concurrent.ForkJoinTask`           |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `runWorker(ForkJoinPool$WorkQueue)`             | `java.util.concurrent.ForkJoinPool`           |
|   +3.0% |    +1 |        2.0% | 33 → 34 | `copyOf(Object[], int)`                         | `java.util.Arrays`                            |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `signalWaiters()`                               | `java.util.concurrent.ForkJoinTask`           |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `signalWork()`                                  | `java.util.concurrent.ForkJoinPool`           |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `seek0(long)`                                   | `java.io.RandomAccessFile`                    |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `<init>()`                                      | `scala.collection.immutable.List`             |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `end()`                                         | `java.util.stream.Sink$ChainedDouble`         |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                                                  | Location                                                  |
| ------: | ----: | ------------: | --------: | --------------------------------------------------------- | --------------------------------------------------------- |
|  -13.6% |  -101 | 44.3% → 37.2% | 743 → 642 | `accumulate(Double[], double[])`                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  -80.0% |   -12 |   0.9% → 0.2% |    15 → 3 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                                       |
|  -62.5% |   -10 |   1.0% → 0.3% |    16 → 6 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                       |
|   -6.1% |    -4 |   3.9% → 3.6% |   66 → 62 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                                       |
| removed |    -3 |   0.2% → 0.0% |     3 → 0 | `resize()`                                                | `java.util.HashMap`                                       |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                      |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                       |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                       |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `valueOf(double)`                                         | `java.lang.Double`                                        |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `hashCode()`                                              | `java.lang.Object`                                        |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `<init>(HashMap)`                                         | `java.util.HashMap$HashIterator`                          |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `putMapEntries(Map, boolean)`                             | `java.util.HashMap`                                       |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `merge(Map, Map)`                                         | `org.renaissance.jdk.concurrent.JavaKMeans`               |
|  -50.0% |    -1 |          0.1% |     2 → 1 | `lambda$merge$7(Map, Object, List)`                       | `org.renaissance.jdk.concurrent.JavaKMeans`               |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `lambda$run$0(int, List, int)`                            | `org.renaissance.jdk.concurrent.JavaKMeans`               |
|  -50.0% |    -1 |          0.1% |     2 → 1 | `unpark(Object)`                                          | `jdk.internal.misc.Unsafe`                                |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `awaitWork(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                       |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `nextNode()`                                              | `java.util.HashMap$HashIterator`                          |

##### Ours

|  Change | Delta |             % |   Samples | Function                            | Location                                                  |
| ------: | ----: | ------------: | --------: | ----------------------------------- | --------------------------------------------------------- |
|  -13.6% |  -101 | 44.3% → 37.2% | 743 → 642 | `accumulate(Double[], double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `merge(Map, Map)`                   | `org.renaissance.jdk.concurrent.JavaKMeans`               |
|  -50.0% |    -1 |          0.1% |     2 → 1 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`               |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `lambda$run$0(int, List, int)`      | `org.renaissance.jdk.concurrent.JavaKMeans`               |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                  | Location                             |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------- | ------------------------------------ |
|  -80.0% |   -12 | 0.9% → 0.2% |  15 → 3 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                  |
|  -62.5% |   -10 | 1.0% → 0.3% |  16 → 6 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`  |
|   -6.1% |    -4 | 3.9% → 3.6% | 66 → 62 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                  |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `resize()`                                                | `java.util.HashMap`                  |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `exec()`                                                  | `java.util.concurrent.RecursiveTask` |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`  |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`  |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `valueOf(double)`                                         | `java.lang.Double`                   |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `hashCode()`                                              | `java.lang.Object`                   |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>(HashMap)`                                         | `java.util.HashMap$HashIterator`     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `putMapEntries(Map, boolean)`                             | `java.util.HashMap`                  |
|  -50.0% |    -1 |        0.1% |   2 → 1 | `unpark(Object)`                                          | `jdk.internal.misc.Unsafe`           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `awaitWork(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`  |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `nextNode()`                                              | `java.util.HashMap$HashIterator`     |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|   Change | Delta |             % |       Samples | Function                                                    | Location                                                                              |
| -------: | ----: | ------------: | ------------: | ----------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|   +15.9% |  +130 | 48.8% → 55.0% |     818 → 948 | `computeDirectly()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   +11.8% |   +70 | 35.4% → 38.5% |     594 → 664 | `findNearestCentroid()`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   +17.8% |   +68 | 22.8% → 26.1% |     383 → 451 | `distance(Double[], Double[])`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|    +3.3% |   +53 | 96.9% → 97.3% | 1,625 → 1,678 | `tryRemoveAndExec(ForkJoinTask, boolean)`                   | `java.util.concurrent.ForkJoinPool$WorkQueue`                                         |
|    +2.6% |   +44 | 99.4% → 99.2% | 1,667 → 1,711 | `compute()`                                                 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
|    +2.6% |   +44 | 99.4% → 99.2% | 1,667 → 1,711 | `exec()`                                                    | `java.util.concurrent.RecursiveTask`                                                  |
|    +2.6% |   +43 | 99.5% → 99.2% | 1,669 → 1,712 | `doExec()`                                                  | `java.util.concurrent.ForkJoinTask`                                                   |
|    +2.6% |   +43 | 98.1% → 97.9% | 1,645 → 1,688 | `awaitDone(int, long)`                                      | `java.util.concurrent.ForkJoinTask`                                                   |
|    +2.6% |   +43 | 98.1% → 97.9% | 1,645 → 1,688 | `join()`                                                    | `java.util.concurrent.ForkJoinTask`                                                   |
|   +10.2% |   +41 | 24.0% → 25.7% |     402 → 443 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`   | `java.util.concurrent.ForkJoinPool`                                                   |
|   +17.4% |   +37 | 12.7% → 14.5% |     213 → 250 | `collectClusters(int[])`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| +2400.0% |   +24 |   0.1% → 1.4% |        1 → 25 | `apply(Object)`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001204b38` |
|   +24.3% |   +17 |   4.2% → 5.0% |       70 → 87 | `computeIfAbsent(Object, Function)`                         | `java.util.HashMap`                                                                   |
|      new |    +9 |   0.0% → 0.5% |         0 → 9 | `invokeStatic(Object, Object)`                              | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`                                  |
|      new |    +9 |   0.0% → 0.5% |         0 → 9 | `invoke(Object, Object, Object)`                            | `java.lang.invoke.LambdaForm$MH.0x0000007001082400`                                   |
|  +800.0% |    +8 |   0.1% → 0.5% |         1 → 9 | `lambda$merge$6(List, List)`                                | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  +800.0% |    +8 |   0.1% → 0.5% |         1 → 9 | `apply(Object, Object)`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0`                |
|      new |    +8 |   0.0% → 0.5% |         0 → 8 | `toArray()`                                                 | `java.util.ArrayList`                                                                 |
|      new |    +8 |   0.0% → 0.5% |         0 → 8 | `<init>(Collection)`                                        | `java.util.ArrayList`                                                                 |
|   +83.3% |    +5 |   0.4% → 0.6% |        6 → 11 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`                                                       |

##### Ours

|   Change | Delta |             % |       Samples | Function                                                                                                               | Location                                                                              |
| -------: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|   +15.9% |  +130 | 48.8% → 55.0% |     818 → 948 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   +11.8% |   +70 | 35.4% → 38.5% |     594 → 664 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   +17.8% |   +68 | 22.8% → 26.1% |     383 → 451 | `distance(Double[], Double[])`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|    +2.6% |   +44 | 99.4% → 99.2% | 1,667 → 1,711 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
|   +17.4% |   +37 | 12.7% → 14.5% |     213 → 250 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| +2400.0% |   +24 |   0.1% → 1.4% |        1 → 25 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001204b38` |
|  +800.0% |    +8 |   0.1% → 0.5% |         1 → 9 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  +800.0% |    +8 |   0.1% → 0.5% |         1 → 9 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0`                |
|   +83.3% |    +5 |   0.4% → 0.6% |        6 → 11 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                                       |
|   +83.3% |    +5 |   0.4% → 0.6% |        6 → 11 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                                       |
|   +83.3% |    +5 |   0.4% → 0.6% |        6 → 11 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                                       |
|   +80.0% |    +4 |   0.3% → 0.5% |         5 → 9 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                                           |
|   +80.0% |    +4 |   0.3% → 0.5% |         5 → 9 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                                            |
|  +100.0% |    +3 |   0.2% → 0.3% |         3 → 6 | `generateData(int, int, int)`                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  +100.0% |    +3 |   0.2% → 0.3% |         3 → 6 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | `org.renaissance.jdk.concurrent.FjKmeans`                                             |
|  +100.0% |    +3 |   0.2% → 0.3% |         3 → 6 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                                             |
|   +23.1% |    +3 |   0.8% → 0.9% |       13 → 16 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|   +23.1% |    +3 |   0.8% → 0.9% |       13 → 16 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0`                |
|   +40.0% |    +2 |   0.3% → 0.4% |         5 → 7 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                           |
|   +40.0% |    +2 |   0.3% → 0.4% |         5 → 7 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001198798`                |

##### Standard library

|  Change | Delta |             % |       Samples | Function                                                  | Location                                             |
| ------: | ----: | ------------: | ------------: | --------------------------------------------------------- | ---------------------------------------------------- |
|   +3.3% |   +53 | 96.9% → 97.3% | 1,625 → 1,678 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|   +2.6% |   +44 | 99.4% → 99.2% | 1,667 → 1,711 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                 |
|   +2.6% |   +43 | 99.5% → 99.2% | 1,669 → 1,712 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                  |
|   +2.6% |   +43 | 98.1% → 97.9% | 1,645 → 1,688 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                  |
|   +2.6% |   +43 | 98.1% → 97.9% | 1,645 → 1,688 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                  |
|  +10.2% |   +41 | 24.0% → 25.7% |     402 → 443 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                  |
|  +24.3% |   +17 |   4.2% → 5.0% |       70 → 87 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                                  |
|     new |    +9 |   0.0% → 0.5% |         0 → 9 | `invokeStatic(Object, Object)`                            | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00` |
|     new |    +9 |   0.0% → 0.5% |         0 → 9 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000007001082400`  |
|     new |    +8 |   0.0% → 0.5% |         0 → 8 | `toArray()`                                               | `java.util.ArrayList`                                |
|     new |    +8 |   0.0% → 0.5% |         0 → 8 | `<init>(Collection)`                                      | `java.util.ArrayList`                                |
|  +80.0% |    +4 |   0.3% → 0.5% |         5 → 9 | `invokeExact_MT(Object, Object, Object, Object)`          | `java.lang.invoke.Invokers$Holder`                   |
|  +80.0% |    +4 |   0.3% → 0.5% |         5 → 9 | `invokeImpl(Object, Object[])`                            | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +80.0% |    +4 |   0.3% → 0.5% |         5 → 9 | `invoke(Object, Object[])`                                | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +80.0% |    +4 |   0.3% → 0.5% |         5 → 9 | `invoke(Object, Object[])`                                | `java.lang.reflect.Method`                           |
| +133.3% |    +4 |   0.2% → 0.4% |         3 → 7 | `copyInto(Sink, Spliterator)`                             | `java.util.stream.AbstractPipeline`                  |
| +300.0% |    +3 |   0.1% → 0.2% |         1 → 4 | `accept(Object)`                                          | `java.util.stream.ReduceOps$3ReducingSink`           |
| +100.0% |    +3 |   0.2% → 0.3% |         3 → 6 | `accept(int)`                                             | `java.util.stream.IntPipeline$1$1`                   |
| +100.0% |    +3 |   0.2% → 0.3% |         3 → 6 | `forEachRemaining(IntConsumer)`                           | `java.util.stream.Streams$RangeIntSpliterator`       |
| +100.0% |    +3 |   0.2% → 0.3% |         3 → 6 | `forEachRemaining(Consumer)`                              | `java.util.Spliterator$OfInt`                        |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % |       Samples | Function                                 | Location                                                   |
| ------: | ----: | ------------: | ------------: | ---------------------------------------- | ---------------------------------------------------------- |
|  -13.6% |  -101 | 44.3% → 37.2% |     743 → 642 | `accumulate(Double[], double[])`         | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -9.1% |   -72 | 47.4% → 41.9% |     795 → 723 | `vectorSum()`                            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -9.1% |   -72 | 47.4% → 41.9% |     795 → 723 | `computeDirectly()`                      | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -14.3% |   -39 | 16.2% → 13.5% |     272 → 233 | `computeDirectly()`                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -13.0% |   -36 | 16.5% → 13.9% |     276 → 240 | `average(List)`                          | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -13.0% |   -36 | 16.5% → 14.0% |     277 → 241 | `computeClusterAverages()`               | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -11.5% |   -33 | 17.1% → 14.7% |     286 → 253 | `invoke()`                               | `java.util.concurrent.ForkJoinTask`                        |
|   -1.3% |   -18 | 80.7% → 77.4% | 1,354 → 1,336 | `run()`                                  | `java.util.concurrent.ForkJoinWorkerThread`                |
|   -1.1% |   -15 | 83.2% → 80.1% | 1,396 → 1,381 | `runWorker(ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool`                        |
|   -0.6% |    -9 | 83.4% → 80.5% | 1,398 → 1,389 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool`                        |
|  -30.4% |    -7 |   1.4% → 0.9% |       23 → 16 | `merge(Map, Map)`                        | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -30.4% |    -7 |   1.4% → 0.9% |       23 → 16 | `combineResults(Map, Map)`               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -30.4% |    -7 |   1.4% → 0.9% |       23 → 16 | `combineResults(Object, Object)`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |    -5 |   0.3% → 0.0% |         5 → 0 | `invokeStatic(Object, Object)`           | `java.lang.invoke.LambdaForm$DMH.0x0000007801001c00`       |
| removed |    -5 |   0.3% → 0.0% |         5 → 0 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007801082400`        |
|  -10.0% |    -4 |   2.4% → 2.1% |       40 → 36 | `grow(int)`                              | `java.util.ArrayList`                                      |
|  -10.3% |    -4 |   2.3% → 2.0% |       39 → 35 | `grow()`                                 | `java.util.ArrayList`                                      |
|  -10.3% |    -4 |   2.3% → 2.0% |       39 → 35 | `add(Object, Object[], int)`             | `java.util.ArrayList`                                      |
|  -10.3% |    -4 |   2.3% → 2.0% |       39 → 35 | `add(Object)`                            | `java.util.ArrayList`                                      |
|  -25.0% |    -4 |   1.0% → 0.7% |       16 → 12 | `merge(Object, Object, BiFunction)`      | `java.util.HashMap`                                        |

##### Ours

|  Change | Delta |             % |   Samples | Function                                                                                     | Location                                                               |
| ------: | ----: | ------------: | --------: | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|  -13.6% |  -101 | 44.3% → 37.2% | 743 → 642 | `accumulate(Double[], double[])`                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   -9.1% |   -72 | 47.4% → 41.9% | 795 → 723 | `vectorSum()`                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   -9.1% |   -72 | 47.4% → 41.9% | 795 → 723 | `computeDirectly()`                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -14.3% |   -39 | 16.2% → 13.5% | 272 → 233 | `computeDirectly()`                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -13.0% |   -36 | 16.5% → 13.9% | 276 → 240 | `average(List)`                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -13.0% |   -36 | 16.5% → 14.0% | 277 → 241 | `computeClusterAverages()`                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -30.4% |    -7 |   1.4% → 0.9% |   23 → 16 | `merge(Map, Map)`                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -30.4% |    -7 |   1.4% → 0.9% |   23 → 16 | `combineResults(Map, Map)`                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -30.4% |    -7 |   1.4% → 0.9% |   23 → 16 | `combineResults(Object, Object)`                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -23.5% |    -4 |   1.0% → 0.8% |   17 → 13 | `lambda$merge$7(Map, Object, List)`                                                          | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -23.5% |    -4 |   1.0% → 0.8% |   17 → 13 | `accept(Object, Object)`                                                                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88` |
|  -50.0% |    -1 |          0.1% |     2 → 1 | `getBenchmarkClassLoader(BenchmarkDescriptor)`                                               | `org.renaissance.core.BenchmarkSuite`                                  |
|  -50.0% |    -1 |          0.1% |     2 → 1 | `createBenchmark(BenchmarkDescriptor)`                                                       | `org.renaissance.core.BenchmarkSuite`                                  |
|  -50.0% |    -1 |          0.1% |     2 → 1 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver`                              |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `apply(int)`                                                                                 | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a1b10` |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `lambda$generateData$3(int, int, Random[], int)`                                             | `org.renaissance.jdk.concurrent.JavaKMeans`                            |

##### Standard library

|  Change | Delta |             % |       Samples | Function                                             | Location                                             |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------- | ---------------------------------------------------- |
|  -11.5% |   -33 | 17.1% → 14.7% |     286 → 253 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                  |
|   -1.3% |   -18 | 80.7% → 77.4% | 1,354 → 1,336 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`          |
|   -1.1% |   -15 | 83.2% → 80.1% | 1,396 → 1,381 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                  |
|   -0.6% |    -9 | 83.4% → 80.5% | 1,398 → 1,389 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                  |
| removed |    -5 |   0.3% → 0.0% |         5 → 0 | `invokeStatic(Object, Object)`                       | `java.lang.invoke.LambdaForm$DMH.0x0000007801001c00` |
| removed |    -5 |   0.3% → 0.0% |         5 → 0 | `invoke(Object, Object, Object)`                     | `java.lang.invoke.LambdaForm$MH.0x0000007801082400`  |
|  -10.0% |    -4 |   2.4% → 2.1% |       40 → 36 | `grow(int)`                                          | `java.util.ArrayList`                                |
|  -10.3% |    -4 |   2.3% → 2.0% |       39 → 35 | `grow()`                                             | `java.util.ArrayList`                                |
|  -10.3% |    -4 |   2.3% → 2.0% |       39 → 35 | `add(Object, Object[], int)`                         | `java.util.ArrayList`                                |
|  -10.3% |    -4 |   2.3% → 2.0% |       39 → 35 | `add(Object)`                                        | `java.util.ArrayList`                                |
|  -25.0% |    -4 |   1.0% → 0.7% |       16 → 12 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                                  |
|  -23.5% |    -4 |   1.0% → 0.8% |       17 → 13 | `forEach(BiConsumer)`                                | `java.util.HashMap`                                  |
|   -0.2% |    -3 | 86.2% → 83.7% | 1,446 → 1,443 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
| removed |    -3 |   0.2% → 0.0% |         3 → 0 | `resize()`                                           | `java.util.HashMap`                                  |
|  -40.0% |    -2 |   0.3% → 0.2% |         5 → 3 | `putMapEntries(Map, boolean)`                        | `java.util.HashMap`                                  |
|  -40.0% |    -2 |   0.3% → 0.2% |         5 → 3 | `<init>(Map)`                                        | `java.util.HashMap`                                  |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `valueOf(double)`                                    | `java.lang.Double`                                   |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `hashCode()`                                         | `java.lang.Object`                                   |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `hash(Object)`                                       | `java.util.HashMap`                                  |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `<init>(HashMap)`                                    | `java.util.HashMap$HashIterator`                     |

# Allocated heap profile diff

Allocated 37.6 GiB → 37.5 GiB (-52.124 MiB, -0.1%) over 1,984 samples → 2,040 samples (19.4 MiB → 18.8 MiB per sample).

| Category         | Change |        Delta |             % |                Size |       Samples |
| ---------------- | -----: | -----------: | ------------: | ------------------: | ------------: |
| Standard library |  +0.4% | +163.204 MiB | 94.6% → 95.1% | 35.5 GiB → 35.7 GiB | 1,865 → 1,922 |
| Ours             | -10.3% | -215.329 MiB |   5.4% → 4.9% | 2.04 GiB → 1.83 GiB |           117 |
| Unknown          | -12.2% |       -280 B |         <0.1% | 2.24 KiB → 1.97 KiB |         2 → 1 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|  Change |        Delta |            % |                Size | Samples | Function                                                          | Location                                                   |
| ------: | -----------: | -----------: | ------------------: | ------: | ----------------------------------------------------------------- | ---------------------------------------------------------- |
| +415.4% | +362.475 MiB |  0.2% → 1.2% |  87.3 MiB → 450 MiB |  8 → 14 | `newNode(int, Object, Object, HashMap$Node)`                      | `java.util.HashMap`                                        |
| +332.3% | +132.267 MiB |  0.1% → 0.4% |  39.8 MiB → 172 MiB | 10 → 11 | `grow(int)`                                                       | `java.util.ArrayList`                                      |
|  +11.3% | +115.621 MiB |  2.7% → 3.0% | 1023 MiB → 1.11 GiB | 65 → 62 | `findNearestCentroid()`                                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +184.9% | +109.884 MiB |  0.2% → 0.4% |  59.4 MiB → 169 MiB |  4 → 10 | `createSubtask(int, int)`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     new | +101.295 MiB |  0.0% → 0.3% |       0 B → 101 MiB |   0 → 1 | `computeClusterAverages()`                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| +198.5% |  +46.155 MiB |  0.1% → 0.2% | 23.3 MiB → 69.4 MiB |   6 → 4 | `merge(Map, Map)`                                                 | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  +15.8% |  +10.093 MiB |         0.2% |   64 MiB → 74.1 MiB |   5 → 2 | `lambda$collectClusters$0(Double[])`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +11.7% |    +9.98 MiB |         0.2% | 85.1 MiB → 95.1 MiB |   4 → 7 | `lambda$merge$6(List, List)`                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  +55.6% |   +2.367 MiB |        <0.1% | 4.26 MiB → 6.63 MiB | 10 → 14 | `<init>(InputStream, Inflater, int)`                              | `java.util.zip.InflaterInputStream`                        |
|  +11.7% |   +1.782 MiB |        <0.1% |   15.2 MiB → 17 MiB | 22 → 26 | `copyOf(Object[], int, Class)`                                    | `java.util.Arrays`                                         |
|  +14.5% |     +1.4 MiB |        <0.1% | 9.67 MiB → 11.1 MiB | 26 → 29 | `valueOf(double)`                                                 | `java.lang.Double`                                         |
|     new | +751.843 KiB | 0.0% → <0.1% |       0 B → 752 KiB |   0 → 1 | `lambda$boxed$0(int)`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| +124.1% | +487.851 KiB |        <0.1% |   393 KiB → 881 KiB |   1 → 2 | `addConstantUtf8(String)`                                         | `jdk.internal.org.objectweb.asm.SymbolTable`               |
|     new | +466.914 KiB | 0.0% → <0.1% |       0 B → 467 KiB |   0 → 1 | `getInputStream(ZipEntry)`                                        | `java.util.zip.ZipFile`                                    |
| +102.4% | +396.773 KiB |        <0.1% |   388 KiB → 784 KiB |   1 → 2 | `compress(char[], int, int)`                                      | `java.lang.StringUTF16`                                    |
| +102.0% | +395.578 KiB |        <0.1% |   388 KiB → 783 KiB |   1 → 2 | `<init>(int)`                                                     | `java.io.ByteArrayOutputStream`                            |
|     new |  +394.57 KiB | 0.0% → <0.1% |       0 B → 395 KiB |   0 → 1 | `<init>(SymbolTable, int, String, String, String, String[], int)` | `jdk.internal.org.objectweb.asm.MethodWriter`              |
|     new | +389.687 KiB | 0.0% → <0.1% |       0 B → 390 KiB |   0 → 1 | `replace(byte[], char, char)`                                     | `java.lang.StringLatin1`                                   |
|   +8.7% | +387.718 KiB |        <0.1% | 4.37 MiB → 4.75 MiB | 12 → 13 | `intStream(Spliterator$OfInt, boolean)`                           | `java.util.stream.StreamSupport`                           |
|     new | +387.632 KiB | 0.0% → <0.1% |       0 B → 388 KiB |   0 → 1 | `addConstantNameAndType(String, String)`                          | `jdk.internal.org.objectweb.asm.SymbolTable`               |

##### Standard library

|  Change |        Delta |            % |                Size | Samples | Function                                                                                             | Location                                      |
| ------: | -----------: | -----------: | ------------------: | ------: | ---------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| +415.4% | +362.475 MiB |  0.2% → 1.2% |  87.3 MiB → 450 MiB |  8 → 14 | `newNode(int, Object, Object, HashMap$Node)`                                                         | `java.util.HashMap`                           |
| +332.3% | +132.267 MiB |  0.1% → 0.4% |  39.8 MiB → 172 MiB | 10 → 11 | `grow(int)`                                                                                          | `java.util.ArrayList`                         |
|  +55.6% |   +2.367 MiB |        <0.1% | 4.26 MiB → 6.63 MiB | 10 → 14 | `<init>(InputStream, Inflater, int)`                                                                 | `java.util.zip.InflaterInputStream`           |
|  +11.7% |   +1.782 MiB |        <0.1% |   15.2 MiB → 17 MiB | 22 → 26 | `copyOf(Object[], int, Class)`                                                                       | `java.util.Arrays`                            |
|  +14.5% |     +1.4 MiB |        <0.1% | 9.67 MiB → 11.1 MiB | 26 → 29 | `valueOf(double)`                                                                                    | `java.lang.Double`                            |
| +124.1% | +487.851 KiB |        <0.1% |   393 KiB → 881 KiB |   1 → 2 | `addConstantUtf8(String)`                                                                            | `jdk.internal.org.objectweb.asm.SymbolTable`  |
|     new | +466.914 KiB | 0.0% → <0.1% |       0 B → 467 KiB |   0 → 1 | `getInputStream(ZipEntry)`                                                                           | `java.util.zip.ZipFile`                       |
| +102.4% | +396.773 KiB |        <0.1% |   388 KiB → 784 KiB |   1 → 2 | `compress(char[], int, int)`                                                                         | `java.lang.StringUTF16`                       |
| +102.0% | +395.578 KiB |        <0.1% |   388 KiB → 783 KiB |   1 → 2 | `<init>(int)`                                                                                        | `java.io.ByteArrayOutputStream`               |
|     new |  +394.57 KiB | 0.0% → <0.1% |       0 B → 395 KiB |   0 → 1 | `<init>(SymbolTable, int, String, String, String, String[], int)`                                    | `jdk.internal.org.objectweb.asm.MethodWriter` |
|     new | +389.687 KiB | 0.0% → <0.1% |       0 B → 390 KiB |   0 → 1 | `replace(byte[], char, char)`                                                                        | `java.lang.StringLatin1`                      |
|   +8.7% | +387.718 KiB |        <0.1% | 4.37 MiB → 4.75 MiB | 12 → 13 | `intStream(Spliterator$OfInt, boolean)`                                                              | `java.util.stream.StreamSupport`              |
|     new | +387.632 KiB | 0.0% → <0.1% |       0 B → 388 KiB |   0 → 1 | `addConstantNameAndType(String, String)`                                                             | `jdk.internal.org.objectweb.asm.SymbolTable`  |
|     new | +387.632 KiB | 0.0% → <0.1% |       0 B → 388 KiB |   0 → 1 | `resolve(MemberName, Class, int, boolean)`                                                           | `java.lang.invoke.MethodHandleNatives`        |
|     new | +282.179 KiB | 0.0% → <0.1% |       0 B → 282 KiB |   0 → 1 | `entrySet()`                                                                                         | `java.util.HashMap`                           |
|   +3.2% |  +25.265 KiB |        <0.1% |   778 KiB → 804 KiB |       2 | `<init>(ClassWriter)`                                                                                | `jdk.internal.org.objectweb.asm.SymbolTable`  |
|   +0.1% |       +216 B |        <0.1% |             255 KiB |       1 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` | `java.lang.ClassLoader`                       |
|     ~0% |        +48 B |        <0.1% |             388 KiB |       1 | `copyOfRange(byte[], int, int)`                                                                      | `java.util.Arrays`                            |
|     ~0% |        +16 B |        <0.1% |             403 KiB |       1 | `transferTo(OutputStream)`                                                                           | `java.io.InputStream`                         |

##### Ours

|  Change |        Delta |            % |                Size | Samples | Function                             | Location                                                   |
| ------: | -----------: | -----------: | ------------------: | ------: | ------------------------------------ | ---------------------------------------------------------- |
|  +11.3% | +115.621 MiB |  2.7% → 3.0% | 1023 MiB → 1.11 GiB | 65 → 62 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +184.9% | +109.884 MiB |  0.2% → 0.4% |  59.4 MiB → 169 MiB |  4 → 10 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     new | +101.295 MiB |  0.0% → 0.3% |       0 B → 101 MiB |   0 → 1 | `computeClusterAverages()`           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| +198.5% |  +46.155 MiB |  0.1% → 0.2% | 23.3 MiB → 69.4 MiB |   6 → 4 | `merge(Map, Map)`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  +15.8% |  +10.093 MiB |         0.2% |   64 MiB → 74.1 MiB |   5 → 2 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +11.7% |    +9.98 MiB |         0.2% | 85.1 MiB → 95.1 MiB |   4 → 7 | `lambda$merge$6(List, List)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|     new | +751.843 KiB | 0.0% → <0.1% |       0 B → 752 KiB |   0 → 1 | `lambda$boxed$0(int)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|   +8.4% | +295.179 KiB |        <0.1% |  3.42 MiB → 3.7 MiB | 10 → 12 | `lambda$generateData$4(int)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |        Delta |             % |                Size |       Samples | Function                                                  | Location                                                   |
| ------: | -----------: | ------------: | ------------------: | ------------: | --------------------------------------------------------- | ---------------------------------------------------------- |
|  -85.7% | -334.309 MiB |   1.0% → 0.1% |  390 MiB → 55.7 MiB |         8 → 4 | `collectClusters(int[])`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -0.8% | -305.154 MiB | 93.5% → 92.8% | 35.1 GiB → 34.8 GiB | 1,708 → 1,756 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                                         |
|  -99.0% |  -97.071 MiB |  0.3% → <0.1% | 98.1 MiB → 1.02 MiB |             2 | `vectorSum()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -35.2% |   -91.91 MiB |   0.7% → 0.4% |   261 MiB → 169 MiB |        8 → 12 | `createSubtask(int, int)`                                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| removed |  -86.092 MiB |   0.2% → 0.0% |      86.1 MiB → 0 B |         5 → 0 | `add(double[], double[])`                                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -88.9% |  -28.584 MiB |  0.1% → <0.1% | 32.1 MiB → 3.56 MiB |         4 → 3 | `resize()`                                                | `java.util.HashMap`                                        |
| removed | -798.601 KiB |  <0.1% → 0.0% |       799 KiB → 0 B |         3 → 0 | `range(int, int)`                                         | `java.util.stream.IntStream`                               |
| removed | -776.203 KiB |  <0.1% → 0.0% |       776 KiB → 0 B |         1 → 0 | `newNode(int, Object, Object, HashMap$Node)`              | `java.util.LinkedHashMap`                                  |
| removed | -706.968 KiB |  <0.1% → 0.0% |       707 KiB → 0 B |         2 → 0 | `opWrapSink(int, Sink)`                                   | `java.util.stream.IntPipeline$1`                           |
|   -9.9% | -554.125 KiB |         <0.1% | 5.46 MiB → 4.92 MiB |       14 → 13 | `mapToObj(IntFunction, int)`                              | `java.util.stream.IntPipeline`                             |
|   -0.3% | -515.664 KiB |          0.4% |             171 MiB |       21 → 20 | `copyOf(byte[], int)`                                     | `java.util.Arrays`                                         |
| removed | -490.546 KiB |  <0.1% → 0.0% |       491 KiB → 0 B |         1 → 0 | `addConstantMemberReference(int, String, String, String)` | `jdk.internal.org.objectweb.asm.SymbolTable`               |
|  -58.8% | -455.859 KiB |         <0.1% |   775 KiB → 319 KiB |         2 → 1 | `allocateInstance(Class)`                                 | `jdk.internal.misc.Unsafe`                                 |
| removed |  -397.46 KiB |  <0.1% → 0.0% |       397 KiB → 0 B |         1 → 0 | `clone()`                                                 | `java.lang.Object`                                         |
| removed | -395.609 KiB |  <0.1% → 0.0% |       396 KiB → 0 B |         1 → 0 | `parseName(byte[], int)`                                  | `java.util.jar.Manifest`                                   |
| removed | -394.601 KiB |  <0.1% → 0.0% |       395 KiB → 0 B |         1 → 0 | `<clinit>()`                                              | `scala.collection.mutable.MutationTracker$`                |
| removed | -393.148 KiB |  <0.1% → 0.0% |       393 KiB → 0 B |         1 → 0 | `loadClass(String, boolean)`                              | `jdk.internal.loader.BuiltinClassLoader`                   |
| removed | -390.601 KiB |  <0.1% → 0.0% |       391 KiB → 0 B |         1 → 0 | `descriptorString()`                                      | `java.lang.Class`                                          |
| removed | -389.687 KiB |  <0.1% → 0.0% |       390 KiB → 0 B |         1 → 0 | `fillInStackTrace(int)`                                   | `java.lang.Throwable`                                      |
| removed | -387.414 KiB |  <0.1% → 0.0% |       387 KiB → 0 B |         1 → 0 | `enlarge(int)`                                            | `jdk.internal.org.objectweb.asm.ByteVector`                |

##### Standard library

|  Change |        Delta |             % |                Size |       Samples | Function                                                  | Location                                     |
| ------: | -----------: | ------------: | ------------------: | ------------: | --------------------------------------------------------- | -------------------------------------------- |
|   -0.8% | -305.154 MiB | 93.5% → 92.8% | 35.1 GiB → 34.8 GiB | 1,708 → 1,756 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                           |
|  -88.9% |  -28.584 MiB |  0.1% → <0.1% | 32.1 MiB → 3.56 MiB |         4 → 3 | `resize()`                                                | `java.util.HashMap`                          |
| removed | -798.601 KiB |  <0.1% → 0.0% |       799 KiB → 0 B |         3 → 0 | `range(int, int)`                                         | `java.util.stream.IntStream`                 |
| removed | -776.203 KiB |  <0.1% → 0.0% |       776 KiB → 0 B |         1 → 0 | `newNode(int, Object, Object, HashMap$Node)`              | `java.util.LinkedHashMap`                    |
| removed | -706.968 KiB |  <0.1% → 0.0% |       707 KiB → 0 B |         2 → 0 | `opWrapSink(int, Sink)`                                   | `java.util.stream.IntPipeline$1`             |
|   -9.9% | -554.125 KiB |         <0.1% | 5.46 MiB → 4.92 MiB |       14 → 13 | `mapToObj(IntFunction, int)`                              | `java.util.stream.IntPipeline`               |
|   -0.3% | -515.664 KiB |          0.4% |             171 MiB |       21 → 20 | `copyOf(byte[], int)`                                     | `java.util.Arrays`                           |
| removed | -490.546 KiB |  <0.1% → 0.0% |       491 KiB → 0 B |         1 → 0 | `addConstantMemberReference(int, String, String, String)` | `jdk.internal.org.objectweb.asm.SymbolTable` |
|  -58.8% | -455.859 KiB |         <0.1% |   775 KiB → 319 KiB |         2 → 1 | `allocateInstance(Class)`                                 | `jdk.internal.misc.Unsafe`                   |
| removed |  -397.46 KiB |  <0.1% → 0.0% |       397 KiB → 0 B |         1 → 0 | `clone()`                                                 | `java.lang.Object`                           |
| removed | -395.609 KiB |  <0.1% → 0.0% |       396 KiB → 0 B |         1 → 0 | `parseName(byte[], int)`                                  | `java.util.jar.Manifest`                     |
| removed | -394.601 KiB |  <0.1% → 0.0% |       395 KiB → 0 B |         1 → 0 | `<clinit>()`                                              | `scala.collection.mutable.MutationTracker$`  |
| removed | -393.148 KiB |  <0.1% → 0.0% |       393 KiB → 0 B |         1 → 0 | `loadClass(String, boolean)`                              | `jdk.internal.loader.BuiltinClassLoader`     |
| removed | -390.601 KiB |  <0.1% → 0.0% |       391 KiB → 0 B |         1 → 0 | `descriptorString()`                                      | `java.lang.Class`                            |
| removed | -389.687 KiB |  <0.1% → 0.0% |       390 KiB → 0 B |         1 → 0 | `fillInStackTrace(int)`                                   | `java.lang.Throwable`                        |
| removed | -387.414 KiB |  <0.1% → 0.0% |       387 KiB → 0 B |         1 → 0 | `enlarge(int)`                                            | `jdk.internal.org.objectweb.asm.ByteVector`  |
|  -37.8% | -385.953 KiB |         <0.1% |  1021 KiB → 635 KiB |         3 → 2 | `newString(byte[], int, int)`                             | `java.lang.StringLatin1`                     |
|     ~0% |         -8 B |          0.1% |            20.8 MiB |             1 | `initTable()`                                             | `java.util.concurrent.ConcurrentHashMap`     |

##### Ours

|  Change |        Delta |            % |                Size | Samples | Function                  | Location                                                   |
| ------: | -----------: | -----------: | ------------------: | ------: | ------------------------- | ---------------------------------------------------------- |
|  -85.7% | -334.309 MiB |  1.0% → 0.1% |  390 MiB → 55.7 MiB |   8 → 4 | `collectClusters(int[])`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -99.0% |  -97.071 MiB | 0.3% → <0.1% | 98.1 MiB → 1.02 MiB |       2 | `vectorSum()`             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -35.2% |   -91.91 MiB |  0.7% → 0.4% |   261 MiB → 169 MiB |  8 → 12 | `createSubtask(int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| removed |  -86.092 MiB |  0.2% → 0.0% |      86.1 MiB → 0 B |   5 → 0 | `add(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                Size |       Samples | Function                                                  | Location                                                   |
| ------: | -----------: | ------------: | ------------------: | ------------: | --------------------------------------------------------- | ---------------------------------------------------------- |
|   +6.5% |   +1.093 GiB | 44.7% → 47.7% | 16.8 GiB → 17.9 GiB |     904 → 944 | `grow(int)`                                               | `java.util.ArrayList`                                      |
|   +3.3% | +847.482 MiB | 66.1% → 68.4% | 24.8 GiB → 25.7 GiB | 1,259 → 1,309 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                        |
|   +3.3% | +847.482 MiB | 66.1% → 68.4% | 24.8 GiB → 25.7 GiB | 1,259 → 1,309 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                        |
|  +22.2% | +817.558 MiB |  9.6% → 11.7% |   3.6 GiB → 4.4 GiB |     216 → 225 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                        |
|   +2.2% | +565.764 MiB | 65.4% → 67.0% | 24.6 GiB → 25.1 GiB | 1,244 → 1,292 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|   +7.5% |  +453.19 MiB | 15.8% → 17.0% | 5.93 GiB → 6.37 GiB |     308 → 337 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +415.4% | +362.475 MiB |   0.2% → 1.2% |  87.3 MiB → 450 MiB |        8 → 14 | `newNode(int, Object, Object, HashMap$Node)`              | `java.util.HashMap`                                        |
|   +7.9% |  +358.52 MiB | 11.8% → 12.7% | 4.43 GiB → 4.78 GiB |     226 → 258 | `grow()`                                                  | `java.util.ArrayList`                                      |
|   +7.9% |  +358.52 MiB | 11.8% → 12.7% | 4.43 GiB → 4.78 GiB |     226 → 258 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                                      |
|   +7.9% |  +358.52 MiB | 11.8% → 12.7% | 4.43 GiB → 4.78 GiB |     226 → 258 | `add(Object)`                                             | `java.util.ArrayList`                                      |
|   +6.7% | +337.568 MiB | 13.1% → 14.0% | 4.93 GiB → 5.26 GiB |     243 → 275 | `collectClusters(int[])`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +253.2% | +313.357 MiB |   0.3% → 1.1% |   124 MiB → 437 MiB |        9 → 13 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                                        |
|   +1.1% | +264.326 MiB | 60.0% → 60.7% | 22.5 GiB → 22.8 GiB | 1,129 → 1,156 | `addAll(Collection)`                                      | `java.util.ArrayList`                                      |
|     new | +207.601 MiB |   0.0% → 0.5% |       0 B → 208 MiB |       0 → 117 | `invokeStatic(Object, Object)`                            | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`       |
|     new | +207.601 MiB |   0.0% → 0.5% |       0 B → 208 MiB |       0 → 117 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000007001082400`        |
|  +11.3% | +115.621 MiB |   2.7% → 3.0% | 1023 MiB → 1.11 GiB |       65 → 62 | `findNearestCentroid()`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +184.9% | +109.884 MiB |   0.2% → 0.4% |  59.4 MiB → 169 MiB |        4 → 10 | `createSubtask(int, int)`                                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +50.5% |  +30.143 MiB |          0.2% | 59.7 MiB → 89.8 MiB |         8 → 6 | `putMapEntries(Map, boolean)`                             | `java.util.HashMap`                                        |
|  +50.5% |  +30.143 MiB |          0.2% | 59.7 MiB → 89.8 MiB |         8 → 6 | `<init>(Map)`                                             | `java.util.HashMap`                                        |
|  +49.4% |  +29.868 MiB |          0.2% | 60.4 MiB → 90.3 MiB |         9 → 6 | `putVal(int, Object, Object, boolean, boolean)`           | `java.util.HashMap`                                        |

##### Standard library

|  Change |        Delta |             % |                Size |       Samples | Function                                                  | Location                                             |
| ------: | -----------: | ------------: | ------------------: | ------------: | --------------------------------------------------------- | ---------------------------------------------------- |
|   +6.5% |   +1.093 GiB | 44.7% → 47.7% | 16.8 GiB → 17.9 GiB |     904 → 944 | `grow(int)`                                               | `java.util.ArrayList`                                |
|   +3.3% | +847.482 MiB | 66.1% → 68.4% | 24.8 GiB → 25.7 GiB | 1,259 → 1,309 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                  |
|   +3.3% | +847.482 MiB | 66.1% → 68.4% | 24.8 GiB → 25.7 GiB | 1,259 → 1,309 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                  |
|  +22.2% | +817.558 MiB |  9.6% → 11.7% |   3.6 GiB → 4.4 GiB |     216 → 225 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                  |
|   +2.2% | +565.764 MiB | 65.4% → 67.0% | 24.6 GiB → 25.1 GiB | 1,244 → 1,292 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
| +415.4% | +362.475 MiB |   0.2% → 1.2% |  87.3 MiB → 450 MiB |        8 → 14 | `newNode(int, Object, Object, HashMap$Node)`              | `java.util.HashMap`                                  |
|   +7.9% |  +358.52 MiB | 11.8% → 12.7% | 4.43 GiB → 4.78 GiB |     226 → 258 | `grow()`                                                  | `java.util.ArrayList`                                |
|   +7.9% |  +358.52 MiB | 11.8% → 12.7% | 4.43 GiB → 4.78 GiB |     226 → 258 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                                |
|   +7.9% |  +358.52 MiB | 11.8% → 12.7% | 4.43 GiB → 4.78 GiB |     226 → 258 | `add(Object)`                                             | `java.util.ArrayList`                                |
| +253.2% | +313.357 MiB |   0.3% → 1.1% |   124 MiB → 437 MiB |        9 → 13 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                                  |
|   +1.1% | +264.326 MiB | 60.0% → 60.7% | 22.5 GiB → 22.8 GiB | 1,129 → 1,156 | `addAll(Collection)`                                      | `java.util.ArrayList`                                |
|     new | +207.601 MiB |   0.0% → 0.5% |       0 B → 208 MiB |       0 → 117 | `invokeStatic(Object, Object)`                            | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00` |
|     new | +207.601 MiB |   0.0% → 0.5% |       0 B → 208 MiB |       0 → 117 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000007001082400`  |
|  +50.5% |  +30.143 MiB |          0.2% | 59.7 MiB → 89.8 MiB |         8 → 6 | `putMapEntries(Map, boolean)`                             | `java.util.HashMap`                                  |
|  +50.5% |  +30.143 MiB |          0.2% | 59.7 MiB → 89.8 MiB |         8 → 6 | `<init>(Map)`                                             | `java.util.HashMap`                                  |
|  +49.4% |  +29.868 MiB |          0.2% | 60.4 MiB → 90.3 MiB |         9 → 6 | `putVal(int, Object, Object, boolean, boolean)`           | `java.util.HashMap`                                  |
|  +66.3% |   +2.823 MiB |         <0.1% | 4.26 MiB → 7.08 MiB |       10 → 15 | `getInputStream(ZipEntry)`                                | `java.util.zip.ZipFile`                              |
|  +80.0% |   +2.823 MiB |         <0.1% | 3.53 MiB → 6.35 MiB |        9 → 14 | `getInputStream(ZipEntry)`                                | `java.util.jar.JarFile`                              |
|  +68.7% |   +2.423 MiB |         <0.1% | 3.53 MiB → 5.95 MiB |        9 → 13 | `getInputStream()`                                        | `jdk.internal.loader.URLClassPath$JarLoader$2`       |
|  +68.7% |   +2.423 MiB |         <0.1% | 3.53 MiB → 5.95 MiB |        9 → 13 | `cachedInputStream()`                                     | `jdk.internal.loader.Resource`                       |

##### Ours

|  Change |        Delta |             % |                Size |   Samples | Function                                                                                                               | Location                                                                              |
| ------: | -----------: | ------------: | ------------------: | --------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|   +7.5% |  +453.19 MiB | 15.8% → 17.0% | 5.93 GiB → 6.37 GiB | 308 → 337 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   +6.7% | +337.568 MiB | 13.1% → 14.0% | 4.93 GiB → 5.26 GiB | 243 → 275 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +11.3% | +115.621 MiB |   2.7% → 3.0% | 1023 MiB → 1.11 GiB |   65 → 62 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| +184.9% | +109.884 MiB |   0.2% → 0.4% |  59.4 MiB → 169 MiB |    4 → 10 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +21.8% |  +28.452 MiB |   0.3% → 0.4% |   130 MiB → 159 MiB |     9 → 8 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|  +21.8% |  +28.452 MiB |   0.3% → 0.4% |   130 MiB → 159 MiB |     9 → 8 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
| +159.9% |  +15.461 MiB |  <0.1% → 0.1% | 9.67 MiB → 25.1 MiB |   26 → 69 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a18d8`                |
|  +15.8% |  +10.093 MiB |          0.2% |   64 MiB → 74.1 MiB |     5 → 2 | `lambda$collectClusters$0(Double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +15.8% |  +10.093 MiB |          0.2% |   64 MiB → 74.1 MiB |     5 → 2 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001204b38` |
|  +14.5% |     +1.4 MiB |         <0.1% | 9.67 MiB → 11.1 MiB |   26 → 29 | `lambda$generateData$3(int, int, Random[], int)`                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|   +0.5% |  +832.07 KiB |          0.4% |   164 MiB → 165 MiB |         4 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                                             |
|   +0.5% |  +832.07 KiB |          0.4% |   164 MiB → 165 MiB |         4 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                                             |
|     new | +751.843 KiB |  0.0% → <0.1% |       0 B → 752 KiB |     0 → 1 | `lambda$boxed$0(int)`                                                                                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|     new | +751.843 KiB |  0.0% → <0.1% |       0 B → 752 KiB |     0 → 1 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask$$Lambda.0x0000007001205750`     |
|     new | +751.843 KiB |  0.0% → <0.1% |       0 B → 752 KiB |     0 → 1 | `boxed(double[])`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|   +0.2% | +452.031 KiB |          0.5% |             190 MiB |   75 → 74 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                           |
|   +0.2% | +452.031 KiB |          0.5% |             190 MiB |   75 → 74 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001198798`                |
|   +0.2% | +452.031 KiB |          0.5% |             190 MiB |   75 → 74 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                                           |
|   +0.2% | +440.945 KiB |          0.5% |   208 MiB → 209 MiB |       120 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                                       |
|   +0.2% | +440.945 KiB |          0.5% |   208 MiB → 209 MiB |       120 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                                       |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

| Change |        Delta |             % |                Size |       Samples | Function                                             | Location                                                               |
| -----: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------------------- | ---------------------------------------------------------------------- |
|  -6.9% |   -1.261 GiB | 49.0% → 45.7% | 18.4 GiB → 17.1 GiB |     836 → 849 | `toArray()`                                          | `java.util.ArrayList`                                                  |
| -13.1% |    -1.07 GiB | 21.8% → 19.0% | 8.19 GiB → 7.12 GiB |     215 → 230 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                                    |
| -10.4% | -815.779 MiB | 20.4% → 18.3% | 7.66 GiB → 6.87 GiB |     195 → 222 | `lambda$run$0(int, List, int)`                       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| -10.4% | -815.779 MiB | 20.4% → 18.3% | 7.66 GiB → 6.87 GiB |     195 → 222 | `call()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0` |
| -10.4% | -815.779 MiB | 20.4% → 18.3% | 7.66 GiB → 6.87 GiB |     195 → 222 | `exec()`                                             | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                    |
|  -9.4% | -793.951 MiB | 21.9% → 19.9% | 8.23 GiB → 7.45 GiB |     385 → 379 | `<init>(Collection)`                                 | `java.util.ArrayList`                                                  |
|  -1.6% | -519.644 MiB | 82.1% → 80.9% | 30.8 GiB → 30.3 GiB | 1,518 → 1,542 | `lambda$merge$6(List, List)`                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -1.6% | -519.644 MiB | 82.1% → 80.9% | 30.8 GiB → 30.3 GiB | 1,518 → 1,542 | `apply(Object, Object)`                              | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0` |
|  -1.6% | -519.644 MiB | 82.1% → 80.9% | 30.8 GiB → 30.3 GiB | 1,518 → 1,542 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                                                    |
|  -1.6% | -519.644 MiB | 82.1% → 80.9% | 30.8 GiB → 30.3 GiB | 1,518 → 1,542 | `lambda$merge$7(Map, Object, List)`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -1.6% | -519.644 MiB | 82.1% → 80.9% | 30.8 GiB → 30.3 GiB | 1,518 → 1,542 | `accept(Object, Object)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88` |
|  -1.6% | -519.644 MiB | 82.1% → 80.9% | 30.8 GiB → 30.3 GiB | 1,518 → 1,542 | `forEach(BiConsumer)`                                | `java.util.HashMap`                                                    |
|  -1.3% | -472.911 MiB | 93.6% → 92.5% | 35.2 GiB → 34.7 GiB | 1,745 → 1,804 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                                    |
|  -1.3% |  -459.23 MiB | 94.2% → 93.1% | 35.4 GiB → 34.9 GiB | 1,760 → 1,819 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|  -1.4% | -443.346 MiB | 82.3% → 81.3% | 30.9 GiB → 30.5 GiB | 1,532 → 1,552 | `merge(Map, Map)`                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -1.4% | -443.346 MiB | 82.3% → 81.3% | 30.9 GiB → 30.5 GiB | 1,532 → 1,552 | `combineResults(Map, Map)`                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -1.4% | -443.346 MiB | 82.3% → 81.3% | 30.9 GiB → 30.5 GiB | 1,532 → 1,552 | `combineResults(Object, Object)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -0.8% | -303.372 MiB | 93.6% → 92.9% | 35.1 GiB → 34.8 GiB | 1,730 → 1,782 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                                     |
|  -0.8% | -281.197 MiB | 93.0% → 92.4% | 34.9 GiB → 34.7 GiB | 1,740 → 1,801 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                                    |
|  -0.8% | -281.197 MiB | 93.0% → 92.4% | 34.9 GiB → 34.7 GiB | 1,740 → 1,801 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                            |

##### Standard library

|  Change |        Delta |             % |                Size |       Samples | Function                                                         | Location                                             |
| ------: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------------------------------- | ---------------------------------------------------- |
|   -6.9% |   -1.261 GiB | 49.0% → 45.7% | 18.4 GiB → 17.1 GiB |     836 → 849 | `toArray()`                                                      | `java.util.ArrayList`                                |
|  -13.1% |    -1.07 GiB | 21.8% → 19.0% | 8.19 GiB → 7.12 GiB |     215 → 230 | `invoke()`                                                       | `java.util.concurrent.ForkJoinTask`                  |
|  -10.4% | -815.779 MiB | 20.4% → 18.3% | 7.66 GiB → 6.87 GiB |     195 → 222 | `exec()`                                                         | `java.util.concurrent.ForkJoinTask$AdaptedCallable`  |
|   -9.4% | -793.951 MiB | 21.9% → 19.9% | 8.23 GiB → 7.45 GiB |     385 → 379 | `<init>(Collection)`                                             | `java.util.ArrayList`                                |
|   -1.6% | -519.644 MiB | 82.1% → 80.9% | 30.8 GiB → 30.3 GiB | 1,518 → 1,542 | `merge(Object, Object, BiFunction)`                              | `java.util.HashMap`                                  |
|   -1.6% | -519.644 MiB | 82.1% → 80.9% | 30.8 GiB → 30.3 GiB | 1,518 → 1,542 | `forEach(BiConsumer)`                                            | `java.util.HashMap`                                  |
|   -1.3% | -472.911 MiB | 93.6% → 92.5% | 35.2 GiB → 34.7 GiB | 1,745 → 1,804 | `scan(ForkJoinPool$WorkQueue, int, int)`                         | `java.util.concurrent.ForkJoinPool`                  |
|   -1.3% |  -459.23 MiB | 94.2% → 93.1% | 35.4 GiB → 34.9 GiB | 1,760 → 1,819 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`             | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|   -0.8% | -303.372 MiB | 93.6% → 92.9% | 35.1 GiB → 34.8 GiB | 1,730 → 1,782 | `copyOf(Object[], int)`                                          | `java.util.Arrays`                                   |
|   -0.8% | -281.197 MiB | 93.0% → 92.4% | 34.9 GiB → 34.7 GiB | 1,740 → 1,801 | `runWorker(ForkJoinPool$WorkQueue)`                              | `java.util.concurrent.ForkJoinPool`                  |
|   -0.8% | -281.197 MiB | 93.0% → 92.4% | 34.9 GiB → 34.7 GiB | 1,740 → 1,801 | `run()`                                                          | `java.util.concurrent.ForkJoinWorkerThread`          |
| removed | -207.171 MiB |   0.5% → 0.0% |       207 MiB → 0 B |       117 → 0 | `invokeStatic(Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x0000007801001c00` |
| removed | -207.171 MiB |   0.5% → 0.0% |       207 MiB → 0 B |       117 → 0 | `invoke(Object, Object, Object)`                                 | `java.lang.invoke.LambdaForm$MH.0x0000007801082400`  |
|   -0.1% |  -52.555 MiB |         99.4% |            37.3 GiB | 1,859 → 1,916 | `exec()`                                                         | `java.util.concurrent.RecursiveTask`                 |
|   -0.1% |  -52.555 MiB |         99.4% |            37.3 GiB | 1,859 → 1,916 | `doExec()`                                                       | `java.util.concurrent.ForkJoinTask`                  |
|  -88.9% |  -28.584 MiB |  0.1% → <0.1% | 32.1 MiB → 3.56 MiB |         4 → 3 | `resize()`                                                       | `java.util.HashMap`                                  |
| removed |   -2.153 MiB |  <0.1% → 0.0% |      2.15 MiB → 0 B |         6 → 0 | `invokeExact_MT(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007801004000`  |
|   -4.4% |   -1.147 MiB |          0.1% | 26.3 MiB → 25.1 MiB |       71 → 69 | `copyInto(Sink, Spliterator)`                                    | `java.util.stream.AbstractPipeline`                  |
|   -4.4% |   -1.147 MiB |          0.1% | 26.3 MiB → 25.1 MiB |       71 → 69 | `wrapAndCopyInto(Sink, Spliterator)`                             | `java.util.stream.AbstractPipeline`                  |
|   -4.4% |   -1.147 MiB |          0.1% | 26.3 MiB → 25.1 MiB |       71 → 69 | `evaluateSequential(PipelineHelper, Spliterator)`                | `java.util.stream.ReduceOps$ReduceOp`                |

##### Ours

|  Change |        Delta |             % |                Size |       Samples | Function                             | Location                                                               |
| ------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------ | ---------------------------------------------------------------------- |
|  -10.4% | -815.779 MiB | 20.4% → 18.3% | 7.66 GiB → 6.87 GiB |     195 → 222 | `lambda$run$0(int, List, int)`       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -10.4% | -815.779 MiB | 20.4% → 18.3% | 7.66 GiB → 6.87 GiB |     195 → 222 | `call()`                             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0` |
|   -1.6% | -519.644 MiB | 82.1% → 80.9% | 30.8 GiB → 30.3 GiB | 1,518 → 1,542 | `lambda$merge$6(List, List)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -1.6% | -519.644 MiB | 82.1% → 80.9% | 30.8 GiB → 30.3 GiB | 1,518 → 1,542 | `apply(Object, Object)`              | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0` |
|   -1.6% | -519.644 MiB | 82.1% → 80.9% | 30.8 GiB → 30.3 GiB | 1,518 → 1,542 | `lambda$merge$7(Map, Object, List)`  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -1.6% | -519.644 MiB | 82.1% → 80.9% | 30.8 GiB → 30.3 GiB | 1,518 → 1,542 | `accept(Object, Object)`             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88` |
|   -1.4% | -443.346 MiB | 82.3% → 81.3% | 30.9 GiB → 30.5 GiB | 1,532 → 1,552 | `merge(Map, Map)`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -1.4% | -443.346 MiB | 82.3% → 81.3% | 30.9 GiB → 30.5 GiB | 1,532 → 1,552 | `combineResults(Map, Map)`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -1.4% | -443.346 MiB | 82.3% → 81.3% | 30.9 GiB → 30.5 GiB | 1,532 → 1,552 | `combineResults(Object, Object)`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -99.0% |  -97.071 MiB |  0.3% → <0.1% | 98.1 MiB → 1.02 MiB |             2 | `vectorSum()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -99.0% |  -97.071 MiB |  0.3% → <0.1% | 98.1 MiB → 1.02 MiB |             2 | `computeDirectly()`                  | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -35.2% |   -91.91 MiB |   0.7% → 0.4% |   261 MiB → 169 MiB |        8 → 12 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| removed |  -86.092 MiB |   0.2% → 0.0% |      86.1 MiB → 0 B |         5 → 0 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| removed |  -86.092 MiB |   0.2% → 0.0% |      86.1 MiB → 0 B |         5 → 0 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| removed |  -86.092 MiB |   0.2% → 0.0% |      86.1 MiB → 0 B |         5 → 0 | `combineResults(Object, Object)`     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -57.0% |  -74.336 MiB |   0.3% → 0.1% |    130 MiB → 56 MiB |         9 → 5 | `average(List)`                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   -0.1% |  -52.555 MiB |         99.4% |            37.3 GiB | 1,859 → 1,916 | `compute()`                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  -56.6% |  -14.449 MiB |  0.1% → <0.1% | 25.5 MiB → 11.1 MiB |       70 → 29 | `apply(int)`                         | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a1b10` |
|  -66.7% | -776.203 KiB |         <0.1% |  1.14 MiB → 388 KiB |         2 → 1 | `create(Path, URI)`                  | `org.renaissance.core.ModuleLoader`                                    |
| removed | -776.203 KiB |  <0.1% → 0.0% |       776 KiB → 0 B |         1 → 0 | `pathsToSet(String)`                 | `org.renaissance.core.ModuleLoader`                                    |

# Retained heap profile diff

Retained 2.56 MiB (-160 B, ~0%) over 9 objects → 8 objects (291 KiB → 328 KiB per object).

| Category         | Change |  Delta |      % |     Size | Objects |
| ---------------- | -----: | -----: | -----: | -------: | ------: |
| Standard library |    ~0% | -160 B | 100.0% | 2.56 MiB |   9 → 8 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

##### Standard library

| Change | Delta |            % |       Size | Objects | Function                                   | Location                               |
| -----: | ----: | -----------: | ---------: | ------: | ------------------------------------------ | -------------------------------------- |
|    new | +24 B | 0.0% → <0.1% | 0 B → 24 B |   0 → 1 | `resolve(MemberName, Class, int, boolean)` | `java.lang.invoke.MethodHandleNatives` |

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

##### Standard library

|  Change |  Delta |            % |        Size | Objects | Function                                                                                             | Location                |
| ------: | -----: | -----------: | ----------: | ------: | ---------------------------------------------------------------------------------------------------- | ----------------------- |
| removed | -112 B | <0.1% → 0.0% | 112 B → 0 B |   1 → 0 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` | `java.lang.ClassLoader` |
| removed |  -72 B | <0.1% → 0.0% |  72 B → 0 B |   1 → 0 | `compress(char[], int, int)`                                                                         | `java.lang.StringUTF16` |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

| Change |     Delta |            % |           Size | Objects | Function                                             | Location                                             |
| -----: | --------: | -----------: | -------------: | ------: | ---------------------------------------------------- | ---------------------------------------------------- |
|    new | +2.31 MiB | 0.0% → 90.2% | 0 B → 2.31 MiB |   0 → 7 | `invokeStatic(Object, Object)`                       | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00` |
|    new | +2.31 MiB | 0.0% → 90.2% | 0 B → 2.31 MiB |   0 → 7 | `invoke(Object, Object, Object)`                     | `java.lang.invoke.LambdaForm$MH.0x0000007001082400`  |
|    new |     +24 B | 0.0% → <0.1% |     0 B → 24 B |   0 → 1 | `resolve(MemberName, Class, int, boolean)`           | `java.lang.invoke.MethodHandleNatives`               |
|    new |     +24 B | 0.0% → <0.1% |     0 B → 24 B |   0 → 1 | `resolve(byte, MemberName, Class, int, boolean)`     | `java.lang.invoke.MemberName$Factory`                |
|    new |     +24 B | 0.0% → <0.1% |     0 B → 24 B |   0 → 1 | `resolveOrFail(byte, MemberName, Class, int, Class)` | `java.lang.invoke.MemberName$Factory`                |
|    new |     +24 B | 0.0% → <0.1% |     0 B → 24 B |   0 → 1 | `resolveInvokerMember(Class, String, MethodType)`    | `java.lang.invoke.InvokerBytecodeGenerator`          |
|    new |     +24 B | 0.0% → <0.1% |     0 B → 24 B |   0 → 1 | `loadMethod(byte[])`                                 | `java.lang.invoke.InvokerBytecodeGenerator`          |
|    new |     +24 B | 0.0% → <0.1% |     0 B → 24 B |   0 → 1 | `generateCustomizedCode(LambdaForm, MethodType)`     | `java.lang.invoke.InvokerBytecodeGenerator`          |
|    new |     +24 B | 0.0% → <0.1% |     0 B → 24 B |   0 → 1 | `compileToBytecode()`                                | `java.lang.invoke.LambdaForm`                        |
|    new |     +24 B | 0.0% → <0.1% |     0 B → 24 B |   0 → 1 | `callSiteForm(MethodType, boolean)`                  | `java.lang.invoke.Invokers`                          |
|    new |     +24 B | 0.0% → <0.1% |     0 B → 24 B |   0 → 1 | `linkToTargetMethod(MethodType)`                     | `java.lang.invoke.Invokers`                          |
|    new |     +24 B | 0.0% → <0.1% |     0 B → 24 B |   0 → 1 | `runParser(Seq, Object, List, OParserSetup)`         | `scopt.ORunner$`                                     |
|    new |     +24 B | 0.0% → <0.1% |     0 B → 24 B |   0 → 1 | `parse(Seq, Object)`                                 | `scopt.OptionParser`                                 |
|    new |     +24 B | 0.0% → <0.1% |     0 B → 24 B |   0 → 1 | `parse(String[])`                                    | `org.renaissance.harness.ConfigParser`               |

##### Standard library

| Change |     Delta |            % |           Size | Objects | Function                                             | Location                                             |
| -----: | --------: | -----------: | -------------: | ------: | ---------------------------------------------------- | ---------------------------------------------------- |
|    new | +2.31 MiB | 0.0% → 90.2% | 0 B → 2.31 MiB |   0 → 7 | `invokeStatic(Object, Object)`                       | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00` |
|    new | +2.31 MiB | 0.0% → 90.2% | 0 B → 2.31 MiB |   0 → 7 | `invoke(Object, Object, Object)`                     | `java.lang.invoke.LambdaForm$MH.0x0000007001082400`  |
|    new |     +24 B | 0.0% → <0.1% |     0 B → 24 B |   0 → 1 | `resolve(MemberName, Class, int, boolean)`           | `java.lang.invoke.MethodHandleNatives`               |
|    new |     +24 B | 0.0% → <0.1% |     0 B → 24 B |   0 → 1 | `resolve(byte, MemberName, Class, int, boolean)`     | `java.lang.invoke.MemberName$Factory`                |
|    new |     +24 B | 0.0% → <0.1% |     0 B → 24 B |   0 → 1 | `resolveOrFail(byte, MemberName, Class, int, Class)` | `java.lang.invoke.MemberName$Factory`                |
|    new |     +24 B | 0.0% → <0.1% |     0 B → 24 B |   0 → 1 | `resolveInvokerMember(Class, String, MethodType)`    | `java.lang.invoke.InvokerBytecodeGenerator`          |
|    new |     +24 B | 0.0% → <0.1% |     0 B → 24 B |   0 → 1 | `loadMethod(byte[])`                                 | `java.lang.invoke.InvokerBytecodeGenerator`          |
|    new |     +24 B | 0.0% → <0.1% |     0 B → 24 B |   0 → 1 | `generateCustomizedCode(LambdaForm, MethodType)`     | `java.lang.invoke.InvokerBytecodeGenerator`          |
|    new |     +24 B | 0.0% → <0.1% |     0 B → 24 B |   0 → 1 | `compileToBytecode()`                                | `java.lang.invoke.LambdaForm`                        |
|    new |     +24 B | 0.0% → <0.1% |     0 B → 24 B |   0 → 1 | `callSiteForm(MethodType, boolean)`                  | `java.lang.invoke.Invokers`                          |
|    new |     +24 B | 0.0% → <0.1% |     0 B → 24 B |   0 → 1 | `linkToTargetMethod(MethodType)`                     | `java.lang.invoke.Invokers`                          |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

|  Change |     Delta |            % |           Size | Objects | Function                                                                                             | Location                                             |
| ------: | --------: | -----------: | -------------: | ------: | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -2.31 MiB | 90.2% → 0.0% | 2.31 MiB → 0 B |   8 → 0 | `invokeStatic(Object, Object)`                                                                       | `java.lang.invoke.LambdaForm$DMH.0x0000007801001c00` |
| removed | -2.31 MiB | 90.2% → 0.0% | 2.31 MiB → 0 B |   8 → 0 | `invoke(Object, Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x0000007801082400`  |
|     ~0% |    -160 B |        90.2% |       2.31 MiB |   8 → 7 | `main(String[])`                                                                                     | `org.renaissance.harness.RenaissanceSuite`           |
|     ~0% |    -160 B |        90.2% |       2.31 MiB |   8 → 7 | `invokeExact_MT(Object, Object, Object, Object)`                                                     | `java.lang.invoke.Invokers$Holder`                   |
|     ~0% |    -160 B |        90.2% |       2.31 MiB |   8 → 7 | `invokeImpl(Object, Object[])`                                                                       | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|     ~0% |    -160 B |        90.2% |       2.31 MiB |   8 → 7 | `invoke(Object, Object[])`                                                                           | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|     ~0% |    -160 B |        90.2% |       2.31 MiB |   8 → 7 | `invoke(Object, Object[])`                                                                           | `java.lang.reflect.Method`                           |
|     ~0% |    -160 B |        90.2% |       2.31 MiB |   8 → 7 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                          | `org.renaissance.core.Launcher`                      |
|     ~0% |    -160 B |        90.2% |       2.31 MiB |   8 → 7 | `launchHarnessClass(String, String[])`                                                               | `org.renaissance.core.Launcher`                      |
|     ~0% |    -160 B |        90.2% |       2.31 MiB |   8 → 7 | `main(String[])`                                                                                     | `org.renaissance.core.Launcher`                      |
|     ~0% |    -160 B |        80.5% |       2.06 MiB |   7 → 6 | `main(String[])`                                                                                     | `org.renaissance.harness.RenaissanceSuite$`          |
| removed |    -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` | `java.lang.ClassLoader`                              |
| removed |    -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `defineClass(ClassLoader, Class, String, byte[], ProtectionDomain, boolean, int, Object)`            | `java.lang.System$2`                                 |
| removed |    -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `defineClass(boolean, Object)`                                                                       | `java.lang.invoke.MethodHandles$Lookup$ClassDefiner` |
| removed |    -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `generateInnerClass()`                                                                               | `java.lang.invoke.InnerClassLambdaMetafactory`       |
| removed |    -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `spinInnerClass()`                                                                                   | `java.lang.invoke.InnerClassLambdaMetafactory`       |
| removed |    -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `buildCallSite()`                                                                                    | `java.lang.invoke.InnerClassLambdaMetafactory`       |
| removed |    -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `altMetafactory(MethodHandles$Lookup, String, MethodType, Object[])`                                 | `java.lang.invoke.LambdaMetafactory`                 |
| removed |    -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `invokeStatic(Object, Object, Object, Object, Object)`                                               | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |    -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `delegate(Object, Object, Object, Object, Object)`                                                   | `java.lang.invoke.DelegatingMethodHandle$Holder`     |

##### Standard library

|  Change |     Delta |            % |           Size | Objects | Function                                                                                             | Location                                             |
| ------: | --------: | -----------: | -------------: | ------: | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -2.31 MiB | 90.2% → 0.0% | 2.31 MiB → 0 B |   8 → 0 | `invokeStatic(Object, Object)`                                                                       | `java.lang.invoke.LambdaForm$DMH.0x0000007801001c00` |
| removed | -2.31 MiB | 90.2% → 0.0% | 2.31 MiB → 0 B |   8 → 0 | `invoke(Object, Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x0000007801082400`  |
|     ~0% |    -160 B |        90.2% |       2.31 MiB |   8 → 7 | `invokeExact_MT(Object, Object, Object, Object)`                                                     | `java.lang.invoke.Invokers$Holder`                   |
|     ~0% |    -160 B |        90.2% |       2.31 MiB |   8 → 7 | `invokeImpl(Object, Object[])`                                                                       | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|     ~0% |    -160 B |        90.2% |       2.31 MiB |   8 → 7 | `invoke(Object, Object[])`                                                                           | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|     ~0% |    -160 B |        90.2% |       2.31 MiB |   8 → 7 | `invoke(Object, Object[])`                                                                           | `java.lang.reflect.Method`                           |
| removed |    -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` | `java.lang.ClassLoader`                              |
| removed |    -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `defineClass(ClassLoader, Class, String, byte[], ProtectionDomain, boolean, int, Object)`            | `java.lang.System$2`                                 |
| removed |    -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `defineClass(boolean, Object)`                                                                       | `java.lang.invoke.MethodHandles$Lookup$ClassDefiner` |
| removed |    -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `generateInnerClass()`                                                                               | `java.lang.invoke.InnerClassLambdaMetafactory`       |
| removed |    -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `spinInnerClass()`                                                                                   | `java.lang.invoke.InnerClassLambdaMetafactory`       |
| removed |    -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `buildCallSite()`                                                                                    | `java.lang.invoke.InnerClassLambdaMetafactory`       |
| removed |    -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `altMetafactory(MethodHandles$Lookup, String, MethodType, Object[])`                                 | `java.lang.invoke.LambdaMetafactory`                 |
| removed |    -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `invokeStatic(Object, Object, Object, Object, Object)`                                               | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |    -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `delegate(Object, Object, Object, Object, Object)`                                                   | `java.lang.invoke.DelegatingMethodHandle$Holder`     |
| removed |    -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `invokeExact_MT(Object, Object, Object, Object, Object, Object)`                                     | `java.lang.invoke.LambdaForm$MH.0x0000007801004000`  |
| removed |    -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `invoke(Class, MethodHandle, String, Object, Object, Class)`                                         | `java.lang.invoke.BootstrapMethodInvoker`            |
| removed |    -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `makeSite(MethodHandle, String, MethodType, Object, Class)`                                          | `java.lang.invoke.CallSite`                          |
| removed |    -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `<clinit>()`                                                                                         | `scala.runtime.LazyVals$`                            |
|  -78.6% |     -88 B |        <0.1% |   112 B → 24 B |       1 | `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])`                        | `java.lang.invoke.MethodHandleNatives`               |

# Lock contention profile diff

Blocked 7.15s → 7.14s (-8.45ms, -0.1%) over 59 contentions → 54 contentions (121.3ms → 132.4ms per contention).

| Category         | Change |   Delta |      % |          Time | Contentions |
| ---------------- | -----: | ------: | -----: | ------------: | ----------: |
| Standard library |  -0.1% | -8.45ms | 100.0% | 7.15s → 7.14s |     59 → 54 |

## Hottest functions

### Self time

#### Improvements

Functions with the largest decrease in time blocked directly in the function body, excluding callees.

##### Standard library

| Change |   Delta |      % |          Time | Contentions | Function              | Location                   |
| -----: | ------: | -----: | ------------: | ----------: | --------------------- | -------------------------- |
|  -0.1% | -8.45ms | 100.0% | 7.15s → 7.14s |     59 → 54 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

| Change |    Delta |             % |          Time | Contentions | Function                                                                                                               | Location                                                               |
| -----: | -------: | ------------: | ------------: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|    new |  +6.211s |  0.0% → 86.9% |   0ms → 6.21s |      0 → 16 | `invokeStatic(Object, Object)`                                                                                         | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`                   |
|    new |  +6.211s |  0.0% → 86.9% |   0ms → 6.21s |      0 → 16 | `invoke(Object, Object, Object)`                                                                                       | `java.lang.invoke.LambdaForm$MH.0x0000007001082400`                    |
|  +0.8% | +49.23ms | 86.1% → 86.9% | 6.16s → 6.21s |          16 | `awaitDone(int, long)`                                                                                                 | `java.util.concurrent.ForkJoinTask`                                    |
|  +0.8% | +49.23ms | 86.1% → 86.9% | 6.16s → 6.21s |          16 | `get()`                                                                                                                | `java.util.concurrent.ForkJoinTask`                                    |
|  +0.8% | +49.23ms | 86.1% → 86.9% | 6.16s → 6.21s |          16 | `run(int, List, int)`                                                                                                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +0.8% | +49.23ms | 86.1% → 86.9% | 6.16s → 6.21s |          16 | `$anonfun$1(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  +0.8% | +49.23ms | 86.1% → 86.9% | 6.16s → 6.21s |          16 | `$anonfun$adapted$1(Object)`                                                                                           | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  +0.8% | +49.23ms | 86.1% → 86.9% | 6.16s → 6.21s |          16 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011f6c70`   |
|  +0.8% | +49.23ms | 86.1% → 86.9% | 6.16s → 6.21s |          16 | `map(Function1)`                                                                                                       | `scala.collection.immutable.Range`                                     |
|  +0.8% | +49.23ms | 86.1% → 86.9% | 6.16s → 6.21s |          16 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  +0.8% | +49.23ms | 86.1% → 86.9% | 6.16s → 6.21s |          16 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |
|  +0.8% | +49.23ms | 86.1% → 86.9% | 6.16s → 6.21s |          16 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|  +0.8% | +49.23ms | 86.1% → 86.9% | 6.16s → 6.21s |          16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +0.8% | +49.23ms | 86.1% → 86.9% | 6.16s → 6.21s |          16 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001198798` |
|  +0.8% | +49.23ms | 86.1% → 86.9% | 6.16s → 6.21s |          16 | `apply(Object)`                                                                                                        | `scala.runtime.function.JProcedure1`                                   |
|  +0.8% | +49.23ms | 86.1% → 86.9% | 6.16s → 6.21s |          16 | `foreach(Function1)`                                                                                                   | `scala.collection.immutable.List`                                      |
|  +0.8% | +49.23ms | 86.1% → 86.9% | 6.16s → 6.21s |          16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +0.8% | +49.23ms | 86.1% → 86.9% | 6.16s → 6.21s |          16 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +0.8% | +49.23ms | 86.1% → 86.9% | 6.16s → 6.21s |          16 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|  +0.8% | +49.23ms | 86.1% → 86.9% | 6.16s → 6.21s |          16 | `invokeExact_MT(Object, Object, Object, Object)`                                                                       | `java.lang.invoke.Invokers$Holder`                                     |

##### Standard library

| Change |    Delta |             % |          Time | Contentions | Function                                         | Location                                             |
| -----: | -------: | ------------: | ------------: | ----------: | ------------------------------------------------ | ---------------------------------------------------- |
|    new |  +6.211s |  0.0% → 86.9% |   0ms → 6.21s |      0 → 16 | `invokeStatic(Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00` |
|    new |  +6.211s |  0.0% → 86.9% |   0ms → 6.21s |      0 → 16 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001082400`  |
|  +0.8% | +49.23ms | 86.1% → 86.9% | 6.16s → 6.21s |          16 | `awaitDone(int, long)`                           | `java.util.concurrent.ForkJoinTask`                  |
|  +0.8% | +49.23ms | 86.1% → 86.9% | 6.16s → 6.21s |          16 | `get()`                                          | `java.util.concurrent.ForkJoinTask`                  |
|  +0.8% | +49.23ms | 86.1% → 86.9% | 6.16s → 6.21s |          16 | `map(Function1)`                                 | `scala.collection.immutable.Range`                   |
|  +0.8% | +49.23ms | 86.1% → 86.9% | 6.16s → 6.21s |          16 | `apply(Object)`                                  | `scala.runtime.function.JProcedure1`                 |
|  +0.8% | +49.23ms | 86.1% → 86.9% | 6.16s → 6.21s |          16 | `foreach(Function1)`                             | `scala.collection.immutable.List`                    |
|  +0.8% | +49.23ms | 86.1% → 86.9% | 6.16s → 6.21s |          16 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                   |
|  +0.8% | +49.23ms | 86.1% → 86.9% | 6.16s → 6.21s |          16 | `invokeImpl(Object, Object[])`                   | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +0.8% | +49.23ms | 86.1% → 86.9% | 6.16s → 6.21s |          16 | `invoke(Object, Object[])`                       | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +0.8% | +49.23ms | 86.1% → 86.9% | 6.16s → 6.21s |          16 | `invoke(Object, Object[])`                       | `java.lang.reflect.Method`                           |
|  +0.3% | +20.99ms | 95.7% → 96.1% | 6.84s → 6.86s |     45 → 42 | `park()`                                         | `java.util.concurrent.locks.LockSupport`             |

#### Improvements

Functions with the largest decrease in total time blocked in the function and all its callees.

##### Standard library

|  Change |    Delta |             % |              Time | Contentions | Function                            | Location                                             |
| ------: | -------: | ------------: | ----------------: | ----------: | ----------------------------------- | ---------------------------------------------------- |
| removed |  -6.162s |  86.1% → 0.0% |       6.16s → 0ms |      16 → 0 | `invokeStatic(Object, Object)`      | `java.lang.invoke.LambdaForm$DMH.0x0000007801001c00` |
| removed |  -6.162s |  86.1% → 0.0% |       6.16s → 0ms |      16 → 0 | `invoke(Object, Object, Object)`    | `java.lang.invoke.LambdaForm$MH.0x0000007801082400`  |
|   -5.8% | -57.68ms | 13.9% → 13.1% | 995.0ms → 937.3ms |     43 → 38 | `awaitWork(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool`                  |
|   -5.8% | -57.68ms | 13.9% → 13.1% | 995.0ms → 937.3ms |     43 → 38 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool`                  |
|   -5.8% | -57.68ms | 13.9% → 13.1% | 995.0ms → 937.3ms |     43 → 38 | `run()`                             | `java.util.concurrent.ForkJoinWorkerThread`          |
|   -9.5% | -29.44ms |   4.3% → 3.9% | 309.7ms → 280.3ms |     14 → 12 | `parkUntil(long)`                   | `java.util.concurrent.locks.LockSupport`             |
|   -0.1% |  -8.45ms |        100.0% |     7.15s → 7.14s |     59 → 54 | `park(boolean, long)`               | `jdk.internal.misc.Unsafe`                           |

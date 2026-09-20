# Sampling profile diff

Collected 1,203 samples → 1,356 samples (+153 samples, +12.7%).

| Category         | Change | Delta |             % |       Samples |
| ---------------- | -----: | ----: | ------------: | ------------: |
| Ours             | +15.0% |  +161 | 89.0% → 90.9% | 1,071 → 1,232 |
| Standard library |  -6.1% |    -8 |  11.0% → 9.1% |     132 → 124 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                                  | Location                                                                              |
| ------: | ----: | ------------: | --------: | ----------------------------------------- | ------------------------------------------------------------------------------------- |
|  +41.1% |  +116 | 23.4% → 29.4% | 282 → 398 | `distance(Double[], Double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +35.9% |   +56 | 13.0% → 15.6% | 156 → 212 | `findNearestCentroid()`                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +45.2% |   +14 |   2.6% → 3.3% |   31 → 45 | `copyOf(Object[], int)`                   | `java.util.Arrays`                                                                    |
|   +2.4% |   +11 | 37.4% → 34.0% | 450 → 461 | `accumulate(Double[], double[])`          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| +600.0% |    +6 |   0.1% → 0.5% |     1 → 7 | `apply(Object)`                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011e4b38` |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `tryRemoveAndExec(ForkJoinTask, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue`                                         |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `unpark(Object)`                          | `jdk.internal.misc.Unsafe`                                                            |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `checkIndex(int, int)`                    | `java.util.Objects`                                                                   |
|  +50.0% |    +1 |          0.2% |     2 → 3 | `accept(Object)`                          | `java.util.stream.ReduceOps$3ReducingSink`                                            |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `exec()`                                  | `java.util.concurrent.RecursiveTask`                                                  |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `<init>(Map)`                             | `java.util.HashMap`                                                                   |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `canonicalize0(String)`                   | `java.io.UnixFileSystem`                                                              |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `put11(int, int)`                         | `jdk.internal.org.objectweb.asm.ByteVector`                                           |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `nanoTime()`                              | `java.lang.System`                                                                    |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `seek0(long)`                             | `java.io.RandomAccessFile`                                                            |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `hash(Object)`                            | `java.util.HashMap`                                                                   |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `<init>(AbstractPipeline, int)`           | `java.util.stream.AbstractPipeline`                                                   |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `nextNode()`                              | `java.util.HashMap$HashIterator`                                                      |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `park(boolean, long)`                     | `jdk.internal.misc.Unsafe`                                                            |

##### Ours

|  Change | Delta |             % |   Samples | Function                         | Location                                                                              |
| ------: | ----: | ------------: | --------: | -------------------------------- | ------------------------------------------------------------------------------------- |
|  +41.1% |  +116 | 23.4% → 29.4% | 282 → 398 | `distance(Double[], Double[])`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +35.9% |   +56 | 13.0% → 15.6% | 156 → 212 | `findNearestCentroid()`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   +2.4% |   +11 | 37.4% → 34.0% | 450 → 461 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| +600.0% |    +6 |   0.1% → 0.5% |     1 → 7 | `apply(Object)`                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011e4b38` |

##### Standard library

|  Change | Delta |           % | Samples | Function                                  | Location                                      |
| ------: | ----: | ----------: | ------: | ----------------------------------------- | --------------------------------------------- |
|  +45.2% |   +14 | 2.6% → 3.3% | 31 → 45 | `copyOf(Object[], int)`                   | `java.util.Arrays`                            |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `tryRemoveAndExec(ForkJoinTask, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `unpark(Object)`                          | `jdk.internal.misc.Unsafe`                    |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `checkIndex(int, int)`                    | `java.util.Objects`                           |
|  +50.0% |    +1 |        0.2% |   2 → 3 | `accept(Object)`                          | `java.util.stream.ReduceOps$3ReducingSink`    |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `exec()`                                  | `java.util.concurrent.RecursiveTask`          |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `<init>(Map)`                             | `java.util.HashMap`                           |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `canonicalize0(String)`                   | `java.io.UnixFileSystem`                      |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `put11(int, int)`                         | `jdk.internal.org.objectweb.asm.ByteVector`   |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `nanoTime()`                              | `java.lang.System`                            |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `seek0(long)`                             | `java.io.RandomAccessFile`                    |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `hash(Object)`                            | `java.util.HashMap`                           |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `<init>(AbstractPipeline, int)`           | `java.util.stream.AbstractPipeline`           |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `nextNode()`                              | `java.util.HashMap$HashIterator`              |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `park(boolean, long)`                     | `jdk.internal.misc.Unsafe`                    |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                                  | Location                                                   |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------- | ---------------------------------------------------------- |
|  -23.8% |   -15 | 5.2% → 3.5% | 63 → 48 | `vectorSum()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| removed |    -8 | 0.7% → 0.0% |   8 → 0 | `grow(int)`                                               | `java.util.ArrayList`                                      |
|  -14.6% |    -6 | 3.4% → 2.6% | 41 → 35 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                                        |
|  -83.3% |    -5 | 0.5% → 0.1% |   6 → 1 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                                        |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                        |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `lambda$merge$7(Map, Object, List)`                       | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `unpark(Thread)`                                          | `java.util.concurrent.locks.LockSupport`                   |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `wrapSink(Sink)`                                          | `java.util.stream.AbstractPipeline`                        |
|   -8.7% |    -2 | 1.9% → 1.5% | 23 → 21 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                        |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                        |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `merge(Map, Map)`                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `<init>(HashMap)`                                         | `java.util.HashMap$HashIterator`                           |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `createSubtask(int, int)`                                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `readBytes0(byte[], int, int)`                            | `java.io.RandomAccessFile`                                 |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `readLine()`                                              | `java.util.Properties$LineReader`                          |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `compute()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                        |
|   -7.7% |    -1 | 1.1% → 0.9% | 13 → 12 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                        |
|   -1.2% |    -1 | 7.1% → 6.2% | 85 → 84 | `collectClusters(int[])`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### Ours

|  Change | Delta |           % | Samples | Function                             | Location                                                   |
| ------: | ----: | ----------: | ------: | ------------------------------------ | ---------------------------------------------------------- |
|  -23.8% |   -15 | 5.2% → 3.5% | 63 → 48 | `vectorSum()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `lambda$merge$7(Map, Object, List)`  | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|   -8.7% |    -2 | 1.9% → 1.5% | 23 → 21 | `computeDirectly()`                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `merge(Map, Map)`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `compute()`                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|   -1.2% |    -1 | 7.1% → 6.2% | 85 → 84 | `collectClusters(int[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                  | Location                                        |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------- | ----------------------------------------------- |
| removed |    -8 | 0.7% → 0.0% |   8 → 0 | `grow(int)`                                               | `java.util.ArrayList`                           |
|  -14.6% |    -6 | 3.4% → 2.6% | 41 → 35 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                             |
|  -83.3% |    -5 | 0.5% → 0.1% |   6 → 1 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                             |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`             |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `unpark(Thread)`                                          | `java.util.concurrent.locks.LockSupport`        |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `wrapSink(Sink)`                                          | `java.util.stream.AbstractPipeline`             |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`             |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`             |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `<init>(HashMap)`                                         | `java.util.HashMap$HashIterator`                |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `readBytes0(byte[], int, int)`                            | `java.io.RandomAccessFile`                      |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `readLine()`                                              | `java.util.Properties$LineReader`               |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`             |
|   -7.7% |    -1 | 1.1% → 0.9% | 13 → 12 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`             |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `waitForReferencePendingList()`                           | `java.lang.ref.Reference`                       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `estimateSize()`                                          | `java.util.Spliterators$DoubleArraySpliterator` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % |       Samples | Function                                             | Location                                                   |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------- | ---------------------------------------------------------- |
|  +24.3% |  +197 | 67.4% → 74.3% |   811 → 1,008 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                        |
|  +24.0% |  +194 | 67.3% → 74.0% |   810 → 1,004 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                        |
|  +22.9% |  +193 | 70.1% → 76.4% |   843 → 1,036 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|  +22.1% |  +176 | 66.1% → 71.6% |     795 → 971 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                |
|  +39.3% |  +172 | 36.4% → 45.0% |     438 → 610 | `findNearestCentroid()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +26.7% |  +167 | 52.0% → 58.4% |     625 → 792 | `computeDirectly()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +14.0% |  +162 | 96.2% → 97.3% | 1,157 → 1,319 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                        |
|  +13.8% |  +160 | 96.3% → 97.3% | 1,159 → 1,319 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                        |
|  +13.3% |  +157 | 98.3% → 98.8% | 1,183 → 1,340 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|  +13.3% |  +157 | 98.3% → 98.8% | 1,183 → 1,340 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                       |
|  +13.5% |  +155 | 95.5% → 96.2% | 1,149 → 1,304 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|  +13.0% |  +154 | 98.8% → 99.0% | 1,189 → 1,343 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                        |
|  +41.1% |  +116 | 23.4% → 29.4% |     282 → 398 | `distance(Double[], Double[])`                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +45.2% |   +14 |   2.6% → 3.3% |       31 → 45 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                         |
|   +2.4% |   +11 | 37.4% → 34.0% |     450 → 461 | `accumulate(Double[], double[])`                     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +900.0% |    +9 |   0.1% → 0.7% |        1 → 10 | `toArray()`                                          | `java.util.ArrayList`                                      |
| +900.0% |    +9 |   0.1% → 0.7% |        1 → 10 | `<init>(Collection)`                                 | `java.util.ArrayList`                                      |
|     new |    +8 |   0.0% → 0.6% |         0 → 8 | `invokeStatic(Object, Object)`                       | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`       |
|     new |    +8 |   0.0% → 0.6% |         0 → 8 | `invoke(Object, Object, Object)`                     | `java.lang.invoke.LambdaForm$MH.0x0000007001082400`        |
| +233.3% |    +7 |   0.2% → 0.7% |        3 → 10 | `lambda$merge$6(List, List)`                         | `org.renaissance.jdk.concurrent.JavaKMeans`                |

##### Ours

|  Change | Delta |             % |       Samples | Function                                                                                     | Location                                                                              |
| ------: | ----: | ------------: | ------------: | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|  +39.3% |  +172 | 36.4% → 45.0% |     438 → 610 | `findNearestCentroid()`                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +26.7% |  +167 | 52.0% → 58.4% |     625 → 792 | `computeDirectly()`                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +13.3% |  +157 | 98.3% → 98.8% | 1,183 → 1,340 | `compute()`                                                                                  | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
|  +41.1% |  +116 | 23.4% → 29.4% |     282 → 398 | `distance(Double[], Double[])`                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   +2.4% |   +11 | 37.4% → 34.0% |     450 → 461 | `accumulate(Double[], double[])`                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| +233.3% |    +7 |   0.2% → 0.7% |        3 → 10 | `lambda$merge$6(List, List)`                                                                 | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
| +233.3% |    +7 |   0.2% → 0.7% |        3 → 10 | `apply(Object, Object)`                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e5210`                |
| +250.0% |    +5 |   0.2% → 0.5% |         2 → 7 | `apply(Object)`                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011e4b38` |
|  +66.7% |    +2 |   0.2% → 0.4% |         3 → 5 | `extractResource(String, Path)`                                                              | `org.renaissance.core.ResourceUtils`                                                  |
|  +66.7% |    +2 |   0.2% → 0.4% |         3 → 5 | `extractResources(Iterable, Path)`                                                           | `org.renaissance.core.ResourceUtils`                                                  |
|  +66.7% |    +2 |   0.2% → 0.4% |         3 → 5 | `createClassLoaderForModule(String)`                                                         | `org.renaissance.core.ModuleLoader`                                                   |
|   +9.1% |    +1 |          0.9% |       11 → 12 | `launchHarnessClass(String, String[])`                                                       | `org.renaissance.core.Launcher`                                                       |
|   +9.1% |    +1 |          0.9% |       11 → 12 | `main(String[])`                                                                             | `org.renaissance.core.Launcher`                                                       |
| +100.0% |    +1 |          0.1% |         1 → 2 | `getBenchmarkClassLoader(BenchmarkDescriptor)`                                               | `org.renaissance.core.BenchmarkSuite`                                                 |
| +100.0% |    +1 |          0.1% |         1 → 2 | `createBenchmark(BenchmarkDescriptor)`                                                       | `org.renaissance.core.BenchmarkSuite`                                                 |
| +100.0% |    +1 |          0.1% |         1 → 2 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver`                                             |
|     new |    +1 |   0.0% → 0.1% |         0 → 1 | `createScratchDirectory(Path, String, boolean)`                                              | `org.renaissance.core.DirUtils`                                                       |
|     new |    +1 |   0.0% → 0.1% |         0 → 1 | `createScratchRoot(Path, boolean)`                                                           | `org.renaissance.core.Launcher`                                                       |
|     new |    +1 |   0.0% → 0.1% |         0 → 1 | `<init>()`                                                                                   | `org.renaissance.harness.Config`                                                      |
|     new |    +1 |   0.0% → 0.1% |         0 → 1 | `parse(String[])`                                                                            | `org.renaissance.harness.ConfigParser`                                                |

##### Standard library

|  Change | Delta |             % |       Samples | Function                                             | Location                                             |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------- | ---------------------------------------------------- |
|  +24.3% |  +197 | 67.4% → 74.3% |   811 → 1,008 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                  |
|  +24.0% |  +194 | 67.3% → 74.0% |   810 → 1,004 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                  |
|  +22.9% |  +193 | 70.1% → 76.4% |   843 → 1,036 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|  +22.1% |  +176 | 66.1% → 71.6% |     795 → 971 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`          |
|  +14.0% |  +162 | 96.2% → 97.3% | 1,157 → 1,319 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                  |
|  +13.8% |  +160 | 96.3% → 97.3% | 1,159 → 1,319 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                  |
|  +13.3% |  +157 | 98.3% → 98.8% | 1,183 → 1,340 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                 |
|  +13.5% |  +155 | 95.5% → 96.2% | 1,149 → 1,304 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|  +13.0% |  +154 | 98.8% → 99.0% | 1,189 → 1,343 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                  |
|  +45.2% |   +14 |   2.6% → 3.3% |       31 → 45 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                   |
| +900.0% |    +9 |   0.1% → 0.7% |        1 → 10 | `toArray()`                                          | `java.util.ArrayList`                                |
| +900.0% |    +9 |   0.1% → 0.7% |        1 → 10 | `<init>(Collection)`                                 | `java.util.ArrayList`                                |
|     new |    +8 |   0.0% → 0.6% |         0 → 8 | `invokeStatic(Object, Object)`                       | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00` |
|     new |    +8 |   0.0% → 0.6% |         0 → 8 | `invoke(Object, Object, Object)`                     | `java.lang.invoke.LambdaForm$MH.0x0000007001082400`  |
|  +22.2% |    +2 |   0.7% → 0.8% |        9 → 11 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                                  |
| +200.0% |    +2 |   0.1% → 0.2% |         1 → 3 | `unpark(Object)`                                     | `jdk.internal.misc.Unsafe`                           |
|     new |    +2 |   0.0% → 0.1% |         0 → 2 | `checkIndex(int, int)`                               | `java.util.Objects`                                  |
|     new |    +2 |   0.0% → 0.1% |         0 → 2 | `get(int)`                                           | `java.util.ArrayList`                                |
|  +33.3% |    +1 |   0.2% → 0.3% |         3 → 4 | `read(byte[], int, int)`                             | `java.io.FilterInputStream`                          |
|  +33.3% |    +1 |   0.2% → 0.3% |         3 → 4 | `transferTo(OutputStream)`                           | `java.io.InputStream`                                |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % |   Samples | Function                                                  | Location                                                               |
| ------: | ----: | ------------: | --------: | --------------------------------------------------------- | ---------------------------------------------------------------------- |
|  -17.7% |   -44 | 20.6% → 15.0% | 248 → 204 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                                    |
|  -10.2% |   -39 | 31.8% → 25.3% | 382 → 343 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                                    |
|  -16.4% |   -36 | 18.2% → 13.5% | 219 → 183 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -15.2% |   -34 | 18.5% → 13.9% | 223 → 189 | `average(List)`                                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -15.2% |   -34 | 18.6% → 14.0% | 224 → 190 | `computeClusterAverages()`                                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -36.8% |   -14 |   3.2% → 1.8% |   38 → 24 | `lambda$run$0(int, List, int)`                            | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -51.9% |   -14 |   2.2% → 1.0% |   27 → 13 | `exec()`                                                  | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                    |
|  -39.4% |   -13 |   2.7% → 1.5% |   33 → 20 | `call()`                                                  | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dfbc0` |
| removed |    -9 |   0.7% → 0.0% |     9 → 0 | `invokeStatic(Object, Object)`                            | `java.lang.invoke.LambdaForm$DMH.0x0000009001001c00`                   |
| removed |    -9 |   0.7% → 0.0% |     9 → 0 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000009001082400`                    |
|  -75.0% |    -3 |   0.3% → 0.1% |     4 → 1 | `evaluate(Spliterator, boolean, IntFunction)`             | `java.util.stream.AbstractPipeline`                                    |
|  -75.0% |    -3 |   0.3% → 0.1% |     4 → 1 | `evaluateToArrayNode(IntFunction)`                        | `java.util.stream.AbstractPipeline`                                    |
|  -75.0% |    -3 |   0.3% → 0.1% |     4 → 1 | `toArray(IntFunction)`                                    | `java.util.stream.ReferencePipeline`                                   |
|   -1.8% |    -3 | 13.6% → 11.9% | 164 → 161 | `collectClusters(int[])`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -7.9% |    -3 |   3.2% → 2.6% |   38 → 35 | `grow(int)`                                               | `java.util.ArrayList`                                                  |
|  -33.3% |    -2 |   0.5% → 0.3% |     6 → 4 | `setUpBeforeAll(BenchmarkContext)`                        | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  -33.3% |    -2 |   0.5% → 0.3% |     6 → 4 | `executeBenchmark()`                                      | `org.renaissance.harness.ExecutionDriver`                              |
|  -33.3% |    -2 |   0.5% → 0.3% |     6 → 4 | `copyInto(Sink, Spliterator)`                             | `java.util.stream.AbstractPipeline`                                    |
|  -33.3% |    -2 |   0.5% → 0.3% |     6 → 4 | `wrapAndCopyInto(Sink, Spliterator)`                      | `java.util.stream.AbstractPipeline`                                    |
|  -66.7% |    -2 |   0.2% → 0.1% |     3 → 1 | `wrapSink(Sink)`                                          | `java.util.stream.AbstractPipeline`                                    |

##### Ours

|  Change | Delta |             % |   Samples | Function                                         | Location                                                               |
| ------: | ----: | ------------: | --------: | ------------------------------------------------ | ---------------------------------------------------------------------- |
|  -16.4% |   -36 | 18.2% → 13.5% | 219 → 183 | `computeDirectly()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -15.2% |   -34 | 18.5% → 13.9% | 223 → 189 | `average(List)`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -15.2% |   -34 | 18.6% → 14.0% | 224 → 190 | `computeClusterAverages()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -36.8% |   -14 |   3.2% → 1.8% |   38 → 24 | `lambda$run$0(int, List, int)`                   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -39.4% |   -13 |   2.7% → 1.5% |   33 → 20 | `call()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dfbc0` |
|   -1.8% |    -3 | 13.6% → 11.9% | 164 → 161 | `collectClusters(int[])`                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -33.3% |    -2 |   0.5% → 0.3% |     6 → 4 | `setUpBeforeAll(BenchmarkContext)`               | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  -33.3% |    -2 |   0.5% → 0.3% |     6 → 4 | `executeBenchmark()`                             | `org.renaissance.harness.ExecutionDriver`                              |
|  -66.7% |    -2 |   0.2% → 0.1% |     3 → 1 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -66.7% |    -2 |   0.2% → 0.1% |     3 → 1 | `apply(int)`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011818d8` |
|   -0.4% |    -2 | 42.6% → 37.7% | 513 → 511 | `vectorSum()`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   -0.4% |    -2 | 42.6% → 37.7% | 513 → 511 | `computeDirectly()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -10.5% |    -2 |   1.6% → 1.3% |   19 → 17 | `merge(Map, Map)`                                | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -10.5% |    -2 |   1.6% → 1.3% |   19 → 17 | `combineResults(Map, Map)`                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -10.5% |    -2 |   1.6% → 1.3% |   19 → 17 | `combineResults(Object, Object)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `createSubtask(int, int)`                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -11.1% |    -1 |   0.7% → 0.6% |     9 → 8 | `main(String[])`                                 | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -11.1% |    -1 |   0.7% → 0.6% |     9 → 8 | `main(String[])`                                 | `org.renaissance.harness.RenaissanceSuite`                             |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `loadProperties(URL)`                            | `org.renaissance.core.ResourceUtils`                                   |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `loadPropertiesAsMap(URL)`                       | `org.renaissance.core.ResourceUtils`                                   |

##### Standard library

|  Change | Delta |             % |   Samples | Function                                                  | Location                                             |
| ------: | ----: | ------------: | --------: | --------------------------------------------------------- | ---------------------------------------------------- |
|  -17.7% |   -44 | 20.6% → 15.0% | 248 → 204 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                  |
|  -10.2% |   -39 | 31.8% → 25.3% | 382 → 343 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                  |
|  -51.9% |   -14 |   2.2% → 1.0% |   27 → 13 | `exec()`                                                  | `java.util.concurrent.ForkJoinTask$AdaptedCallable`  |
| removed |    -9 |   0.7% → 0.0% |     9 → 0 | `invokeStatic(Object, Object)`                            | `java.lang.invoke.LambdaForm$DMH.0x0000009001001c00` |
| removed |    -9 |   0.7% → 0.0% |     9 → 0 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000009001082400`  |
|  -75.0% |    -3 |   0.3% → 0.1% |     4 → 1 | `evaluate(Spliterator, boolean, IntFunction)`             | `java.util.stream.AbstractPipeline`                  |
|  -75.0% |    -3 |   0.3% → 0.1% |     4 → 1 | `evaluateToArrayNode(IntFunction)`                        | `java.util.stream.AbstractPipeline`                  |
|  -75.0% |    -3 |   0.3% → 0.1% |     4 → 1 | `toArray(IntFunction)`                                    | `java.util.stream.ReferencePipeline`                 |
|   -7.9% |    -3 |   3.2% → 2.6% |   38 → 35 | `grow(int)`                                               | `java.util.ArrayList`                                |
|  -33.3% |    -2 |   0.5% → 0.3% |     6 → 4 | `copyInto(Sink, Spliterator)`                             | `java.util.stream.AbstractPipeline`                  |
|  -33.3% |    -2 |   0.5% → 0.3% |     6 → 4 | `wrapAndCopyInto(Sink, Spliterator)`                      | `java.util.stream.AbstractPipeline`                  |
|  -66.7% |    -2 |   0.2% → 0.1% |     3 → 1 | `wrapSink(Sink)`                                          | `java.util.stream.AbstractPipeline`                  |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `addAll(Collection)`                                      | `java.util.ArrayList`                                |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `<init>(HashMap)`                                         | `java.util.HashMap$HashIterator`                     |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `<init>(HashMap)`                                         | `java.util.HashMap$EntryIterator`                    |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `iterator()`                                              | `java.util.HashMap$EntrySet`                         |
|  -50.0% |    -2 |   0.3% → 0.1% |     4 → 2 | `signalWaiters()`                                         | `java.util.concurrent.ForkJoinTask`                  |
|  -50.0% |    -2 |   0.3% → 0.1% |     4 → 2 | `setDone()`                                               | `java.util.concurrent.ForkJoinTask`                  |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `readBytes0(byte[], int, int)`                            | `java.io.RandomAccessFile`                           |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `readBytes(byte[], int, int)`                             | `java.io.RandomAccessFile`                           |

# Allocated heap profile diff

Allocated 37.2 GiB → 37.7 GiB (+444.567 MiB, +1.2%) over 2,460 samples → 1,980 samples (15.5 MiB → 19.5 MiB per sample).

| Category         | Change |        Delta |             % |                Size |       Samples |
| ---------------- | -----: | -----------: | ------------: | ------------------: | ------------: |
| Standard library |    ~0% |  -10.918 MiB | 93.2% → 92.1% |            34.7 GiB | 2,317 → 1,865 |
| Ours             | +17.5% | +455.485 MiB |   6.8% → 7.9% | 2.54 GiB → 2.98 GiB |     141 → 113 |
| Unknown          | +24.3% |       +520 B |         <0.1% |  2.09 KiB → 2.6 KiB |             2 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|  Change |        Delta |             % |                Size |       Samples | Function                                                                        | Location                                                   |
| ------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| +157.3% | +278.692 MiB |   0.5% → 1.2% |   177 MiB → 456 MiB |        9 → 12 | `createSubtask(int, int)`                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +21.9% | +264.743 MiB |   3.2% → 3.8% | 1.18 GiB → 1.44 GiB |       72 → 62 | `findNearestCentroid()`                                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +347.9% | +177.894 MiB |   0.1% → 0.6% |  51.1 MiB → 229 MiB |         3 → 7 | `vectorSum()`                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|     new | +159.922 MiB |   0.0% → 0.4% |       0 B → 160 MiB |         0 → 1 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                                    |
| +101.3% | +138.157 MiB |   0.4% → 0.7% |   136 MiB → 275 MiB |        11 → 3 | `resize()`                                                                      | `java.util.HashMap`                                        |
|  +88.9% |  +70.572 MiB |   0.2% → 0.4% |  79.4 MiB → 150 MiB |         1 → 2 | `computeClusterAverages()`                                                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|     new |  +67.586 MiB |   0.0% → 0.2% |      0 B → 67.6 MiB |         0 → 2 | `createSubtask(int, int)`                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| +204.5% |  +53.613 MiB |   0.1% → 0.2% | 26.2 MiB → 79.8 MiB |         4 → 3 | `lambda$collectClusters$0(Double[])`                                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +10.6% |  +36.647 MiB |   0.9% → 1.0% |   344 MiB → 381 MiB |        9 → 13 | `grow(int)`                                                                     | `java.util.ArrayList`                                      |
| +113.4% |   +8.229 MiB |         <0.1% | 7.26 MiB → 15.5 MiB |       11 → 23 | `copyOf(Object[], int, Class)`                                                  | `java.util.Arrays`                                         |
|     ~0% |   +5.944 MiB | 90.8% → 89.7% |            33.8 GiB | 2,149 → 1,699 | `copyOf(Object[], int)`                                                         | `java.util.Arrays`                                         |
| +500.1% |   +1.893 MiB |         <0.1% |  388 KiB → 2.27 MiB |         1 → 6 | `opWrapSink(int, Sink)`                                                         | `java.util.stream.IntPipeline$1`                           |
|     new |   +1.582 MiB |  0.0% → <0.1% |      0 B → 1.58 MiB |         0 → 1 | `entrySet()`                                                                    | `java.util.HashMap`                                        |
|  +52.5% |   +1.157 MiB |         <0.1% |  2.2 MiB → 3.36 MiB |        6 → 10 | `intStream(Spliterator$OfInt, boolean)`                                         | `java.util.stream.StreamSupport`                           |
|     new |   +1.002 MiB |  0.0% → <0.1% |         0 B → 1 MiB |         0 → 1 | `awaitDone(int, long)`                                                          | `java.util.concurrent.ForkJoinTask`                        |
|     new | +878.265 KiB |  0.0% → <0.1% |       0 B → 878 KiB |         0 → 2 | `addConstantUtf8(String)`                                                       | `jdk.internal.org.objectweb.asm.SymbolTable`               |
|  +29.4% | +872.328 KiB |         <0.1% | 2.89 MiB → 3.74 MiB |         8 → 9 | `<init>(InputStream, Inflater, int)`                                            | `java.util.zip.InflaterInputStream`                        |
| +203.3% |  +788.75 KiB |         <0.1% |  388 KiB → 1.15 MiB |         1 → 2 | `<init>(ClassWriter)`                                                           | `jdk.internal.org.objectweb.asm.SymbolTable`               |
|     new | +513.453 KiB |  0.0% → <0.1% |       0 B → 513 KiB |         0 → 1 | `readNBytes(int)`                                                               | `java.io.InputStream`                                      |
|     new |     +482 KiB |  0.0% → <0.1% |       0 B → 482 KiB |         0 → 1 | `getTypeInternal(String, int, int)`                                             | `jdk.internal.org.objectweb.asm.Type`                      |

##### Standard library

|  Change |        Delta |             % |                Size |       Samples | Function                                                                        | Location                                     |
| ------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------------------------------------- | -------------------------------------------- |
|     new | +159.922 MiB |   0.0% → 0.4% |       0 B → 160 MiB |         0 → 1 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                      |
| +101.3% | +138.157 MiB |   0.4% → 0.7% |   136 MiB → 275 MiB |        11 → 3 | `resize()`                                                                      | `java.util.HashMap`                          |
|  +10.6% |  +36.647 MiB |   0.9% → 1.0% |   344 MiB → 381 MiB |        9 → 13 | `grow(int)`                                                                     | `java.util.ArrayList`                        |
| +113.4% |   +8.229 MiB |         <0.1% | 7.26 MiB → 15.5 MiB |       11 → 23 | `copyOf(Object[], int, Class)`                                                  | `java.util.Arrays`                           |
|     ~0% |   +5.944 MiB | 90.8% → 89.7% |            33.8 GiB | 2,149 → 1,699 | `copyOf(Object[], int)`                                                         | `java.util.Arrays`                           |
| +500.1% |   +1.893 MiB |         <0.1% |  388 KiB → 2.27 MiB |         1 → 6 | `opWrapSink(int, Sink)`                                                         | `java.util.stream.IntPipeline$1`             |
|     new |   +1.582 MiB |  0.0% → <0.1% |      0 B → 1.58 MiB |         0 → 1 | `entrySet()`                                                                    | `java.util.HashMap`                          |
|  +52.5% |   +1.157 MiB |         <0.1% |  2.2 MiB → 3.36 MiB |        6 → 10 | `intStream(Spliterator$OfInt, boolean)`                                         | `java.util.stream.StreamSupport`             |
|     new |   +1.002 MiB |  0.0% → <0.1% |         0 B → 1 MiB |         0 → 1 | `awaitDone(int, long)`                                                          | `java.util.concurrent.ForkJoinTask`          |
|     new | +878.265 KiB |  0.0% → <0.1% |       0 B → 878 KiB |         0 → 2 | `addConstantUtf8(String)`                                                       | `jdk.internal.org.objectweb.asm.SymbolTable` |
|  +29.4% | +872.328 KiB |         <0.1% | 2.89 MiB → 3.74 MiB |         8 → 9 | `<init>(InputStream, Inflater, int)`                                            | `java.util.zip.InflaterInputStream`          |
| +203.3% |  +788.75 KiB |         <0.1% |  388 KiB → 1.15 MiB |         1 → 2 | `<init>(ClassWriter)`                                                           | `jdk.internal.org.objectweb.asm.SymbolTable` |
|     new | +513.453 KiB |  0.0% → <0.1% |       0 B → 513 KiB |         0 → 1 | `readNBytes(int)`                                                               | `java.io.InputStream`                        |
|     new |     +482 KiB |  0.0% → <0.1% |       0 B → 482 KiB |         0 → 1 | `getTypeInternal(String, int, int)`                                             | `jdk.internal.org.objectweb.asm.Type`        |
|     new | +395.695 KiB |  0.0% → <0.1% |       0 B → 396 KiB |         0 → 1 | `getLoader(URL)`                                                                | `jdk.internal.loader.URLClassPath`           |
|     new | +392.007 KiB |  0.0% → <0.1% |       0 B → 392 KiB |         0 → 1 | `<init>(int)`                                                                   | `jdk.internal.org.objectweb.asm.ByteVector`  |
|     new |  +391.14 KiB |  0.0% → <0.1% |       0 B → 391 KiB |         0 → 1 | `altMetafactory(MethodHandles$Lookup, String, MethodType, Object[])`            | `java.lang.invoke.LambdaMetafactory`         |
|     new | +388.671 KiB |  0.0% → <0.1% |       0 B → 389 KiB |         0 → 1 | `allocateUninitializedArray(Class, int)`                                        | `jdk.internal.misc.Unsafe`                   |
|     new | +387.929 KiB |  0.0% → <0.1% |       0 B → 388 KiB |         0 → 1 | `compress(char[], int, int)`                                                    | `java.lang.StringUTF16`                      |
|     new | +387.867 KiB |  0.0% → <0.1% |       0 B → 388 KiB |         0 → 1 | `urlNoFragString(URL)`                                                          | `sun.net.util.URLUtil`                       |

##### Ours

|  Change |        Delta |           % |                Size | Samples | Function                             | Location                                                   |
| ------: | -----------: | ----------: | ------------------: | ------: | ------------------------------------ | ---------------------------------------------------------- |
| +157.3% | +278.692 MiB | 0.5% → 1.2% |   177 MiB → 456 MiB |  9 → 12 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +21.9% | +264.743 MiB | 3.2% → 3.8% | 1.18 GiB → 1.44 GiB | 72 → 62 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +347.9% | +177.894 MiB | 0.1% → 0.6% |  51.1 MiB → 229 MiB |   3 → 7 | `vectorSum()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +88.9% |  +70.572 MiB | 0.2% → 0.4% |  79.4 MiB → 150 MiB |   1 → 2 | `computeClusterAverages()`           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|     new |  +67.586 MiB | 0.0% → 0.2% |      0 B → 67.6 MiB |   0 → 2 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| +204.5% |  +53.613 MiB | 0.1% → 0.2% | 26.2 MiB → 79.8 MiB |   4 → 3 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |        Delta |            % |                Size | Samples | Function                                     | Location                                                   |
| ------: | -----------: | -----------: | ------------------: | ------: | -------------------------------------------- | ---------------------------------------------------------- |
|  -98.7% | -152.319 MiB | 0.4% → <0.1% |  154 MiB → 1.97 MiB |   6 → 5 | `builder(long, IntFunction)`                 | `java.util.stream.Nodes`                                   |
|  -60.5% | -148.237 MiB |  0.6% → 0.3% |  245 MiB → 96.6 MiB |  11 → 7 | `createSubtask(int, int)`                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -55.4% | -135.937 MiB |  0.6% → 0.3% |   245 MiB → 109 MiB |   7 → 3 | `merge(Map, Map)`                            | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -30.2% | -120.093 MiB |  1.0% → 0.7% |   398 MiB → 278 MiB |   7 → 3 | `lambda$merge$6(List, List)`                 | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -97.2% |  -88.095 MiB | 0.2% → <0.1% | 90.7 MiB → 2.56 MiB |  10 → 3 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                                        |
|  -88.5% |  -67.801 MiB | 0.2% → <0.1% | 76.6 MiB → 8.79 MiB | 26 → 25 | `valueOf(double)`                            | `java.lang.Double`                                         |
|  -99.0% |  -49.811 MiB | 0.1% → <0.1% |  50.3 MiB → 538 KiB |   2 → 1 | `iterator()`                                 | `java.util.HashMap$EntrySet`                               |
|  -97.1% |   -42.21 MiB | 0.1% → <0.1% | 43.5 MiB → 1.24 MiB |   4 → 3 | `add(double[], double[])`                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -5.1% |   -6.049 MiB |         0.3% |   119 MiB → 113 MiB |  11 → 7 | `collectClusters(int[])`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -83.4% |   -3.806 MiB |        <0.1% |  4.56 MiB → 775 KiB |  10 → 2 | `lambda$generateData$4(int)`                 | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -70.9% |   -1.494 MiB |        <0.1% |  2.11 MiB → 630 KiB |   3 → 2 | `copyOfRangeByte(byte[], int, int)`          | `java.util.Arrays`                                         |
| removed |   -1.343 MiB | <0.1% → 0.0% |      1.34 MiB → 0 B |   1 → 0 | `read(InputStream, String)`                  | `java.util.jar.Manifest`                                   |
|  -33.6% |   -1.343 MiB |        <0.1% | 3.99 MiB → 2.65 MiB |  10 → 7 | `mapToObj(IntFunction, int)`                 | `java.util.stream.IntPipeline`                             |
|  -27.8% |   -1.166 MiB |        <0.1% |  4.2 MiB → 3.03 MiB |  10 → 8 | `range(int, int)`                            | `java.util.stream.IntStream`                               |
| removed |   -1.142 MiB | <0.1% → 0.0% |      1.14 MiB → 0 B |   3 → 0 | `enlarge(int)`                               | `jdk.internal.org.objectweb.asm.ByteVector`                |
|  -37.6% |   -1.141 MiB |        <0.1% | 3.03 MiB → 1.89 MiB |   8 → 5 | `allocateInstance(Class)`                    | `jdk.internal.misc.Unsafe`                                 |
| removed | -965.203 KiB | <0.1% → 0.0% |       965 KiB → 0 B |   1 → 0 | `allocateInstance(Object)`                   | `java.lang.invoke.DirectMethodHandle`                      |
| removed |  -922.71 KiB | <0.1% → 0.0% |       923 KiB → 0 B |   1 → 0 | `collectGarbage(String)`                     | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`   |
|  -37.9% | -711.765 KiB |        <0.1% | 1.84 MiB → 1.14 MiB |   2 → 3 | `fillInStackTrace(int)`                      | `java.lang.Throwable`                                      |
| removed | -666.656 KiB | <0.1% → 0.0% |       667 KiB → 0 B |   1 → 0 | `<init>(InputStream, int)`                   | `java.util.jar.Manifest$FastInputStream`                   |

##### Standard library

|  Change |        Delta |            % |                Size | Samples | Function                                     | Location                                     |
| ------: | -----------: | -----------: | ------------------: | ------: | -------------------------------------------- | -------------------------------------------- |
|  -98.7% | -152.319 MiB | 0.4% → <0.1% |  154 MiB → 1.97 MiB |   6 → 5 | `builder(long, IntFunction)`                 | `java.util.stream.Nodes`                     |
|  -97.2% |  -88.095 MiB | 0.2% → <0.1% | 90.7 MiB → 2.56 MiB |  10 → 3 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                          |
|  -88.5% |  -67.801 MiB | 0.2% → <0.1% | 76.6 MiB → 8.79 MiB | 26 → 25 | `valueOf(double)`                            | `java.lang.Double`                           |
|  -99.0% |  -49.811 MiB | 0.1% → <0.1% |  50.3 MiB → 538 KiB |   2 → 1 | `iterator()`                                 | `java.util.HashMap$EntrySet`                 |
|  -70.9% |   -1.494 MiB |        <0.1% |  2.11 MiB → 630 KiB |   3 → 2 | `copyOfRangeByte(byte[], int, int)`          | `java.util.Arrays`                           |
| removed |   -1.343 MiB | <0.1% → 0.0% |      1.34 MiB → 0 B |   1 → 0 | `read(InputStream, String)`                  | `java.util.jar.Manifest`                     |
|  -33.6% |   -1.343 MiB |        <0.1% | 3.99 MiB → 2.65 MiB |  10 → 7 | `mapToObj(IntFunction, int)`                 | `java.util.stream.IntPipeline`               |
|  -27.8% |   -1.166 MiB |        <0.1% |  4.2 MiB → 3.03 MiB |  10 → 8 | `range(int, int)`                            | `java.util.stream.IntStream`                 |
| removed |   -1.142 MiB | <0.1% → 0.0% |      1.14 MiB → 0 B |   3 → 0 | `enlarge(int)`                               | `jdk.internal.org.objectweb.asm.ByteVector`  |
|  -37.6% |   -1.141 MiB |        <0.1% | 3.03 MiB → 1.89 MiB |   8 → 5 | `allocateInstance(Class)`                    | `jdk.internal.misc.Unsafe`                   |
| removed | -965.203 KiB | <0.1% → 0.0% |       965 KiB → 0 B |   1 → 0 | `allocateInstance(Object)`                   | `java.lang.invoke.DirectMethodHandle`        |
|  -37.9% | -711.765 KiB |        <0.1% | 1.84 MiB → 1.14 MiB |   2 → 3 | `fillInStackTrace(int)`                      | `java.lang.Throwable`                        |
| removed | -666.656 KiB | <0.1% → 0.0% |       667 KiB → 0 B |   1 → 0 | `<init>(InputStream, int)`                   | `java.util.jar.Manifest$FastInputStream`     |
|  -62.2% | -653.171 KiB |        <0.1% |  1.02 MiB → 396 KiB |   3 → 1 | `newString(byte[], int, int)`                | `java.lang.StringLatin1`                     |
| removed |  -402.64 KiB | <0.1% → 0.0% |       403 KiB → 0 B |   1 → 0 | `getClassLoadingLock(String)`                | `java.lang.ClassLoader`                      |
| removed |  -401.46 KiB | <0.1% → 0.0% |       401 KiB → 0 B |   1 → 0 | `addConstantNameAndType(String, String)`     | `jdk.internal.org.objectweb.asm.SymbolTable` |
| removed | -400.695 KiB | <0.1% → 0.0% |       401 KiB → 0 B |   1 → 0 | `initCEN(int, ZipCoder)`                     | `java.util.zip.ZipFile$Source`               |
|   -3.5% | -396.593 KiB |        <0.1% | 11.2 MiB → 10.8 MiB | 23 → 21 | `copyOf(byte[], int)`                        | `java.util.Arrays`                           |
| removed | -395.601 KiB | <0.1% → 0.0% |       396 KiB → 0 B |   1 → 0 | `<init>(int)`                                | `java.io.ByteArrayOutputStream`              |
| removed | -391.578 KiB | <0.1% → 0.0% |       392 KiB → 0 B |   1 → 0 | `checkResource(String, boolean, JarEntry)`   | `jdk.internal.loader.URLClassPath$JarLoader` |

##### Ours

|  Change |        Delta |            % |                Size | Samples | Function                                     | Location                                                   |
| ------: | -----------: | -----------: | ------------------: | ------: | -------------------------------------------- | ---------------------------------------------------------- |
|  -60.5% | -148.237 MiB |  0.6% → 0.3% |  245 MiB → 96.6 MiB |  11 → 7 | `createSubtask(int, int)`                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -55.4% | -135.937 MiB |  0.6% → 0.3% |   245 MiB → 109 MiB |   7 → 3 | `merge(Map, Map)`                            | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -30.2% | -120.093 MiB |  1.0% → 0.7% |   398 MiB → 278 MiB |   7 → 3 | `lambda$merge$6(List, List)`                 | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -97.1% |   -42.21 MiB | 0.1% → <0.1% | 43.5 MiB → 1.24 MiB |   4 → 3 | `add(double[], double[])`                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -5.1% |   -6.049 MiB |         0.3% |   119 MiB → 113 MiB |  11 → 7 | `collectClusters(int[])`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -83.4% |   -3.806 MiB |        <0.1% |  4.56 MiB → 775 KiB |  10 → 2 | `lambda$generateData$4(int)`                 | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |  -922.71 KiB | <0.1% → 0.0% |       923 KiB → 0 B |   1 → 0 | `collectGarbage(String)`                     | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`   |
| removed |  -390.64 KiB | <0.1% → 0.0% |       391 KiB → 0 B |   1 → 0 | `runParser(Seq, Object, List, OParserSetup)` | `scopt.ORunner$`                                           |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

| Change |        Delta |             % |                Size |       Samples | Function                                             | Location                                                               |
| -----: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------------------- | ---------------------------------------------------------------------- |
|  +7.9% |    +1.68 GiB | 57.4% → 61.2% | 21.4 GiB → 23.1 GiB | 1,442 → 1,150 | `addAll(Collection)`                                 | `java.util.ArrayList`                                                  |
|  +3.4% |       +1 GiB | 77.9% → 79.7% |     29 GiB → 30 GiB | 1,904 → 1,500 | `lambda$merge$6(List, List)`                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +3.4% |       +1 GiB | 77.9% → 79.7% |     29 GiB → 30 GiB | 1,904 → 1,500 | `apply(Object, Object)`                              | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e5210` |
|  +3.4% |       +1 GiB | 77.9% → 79.7% |     29 GiB → 30 GiB | 1,904 → 1,500 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                                                    |
|  +3.4% |       +1 GiB | 77.9% → 79.7% |     29 GiB → 30 GiB | 1,904 → 1,500 | `lambda$merge$7(Map, Object, List)`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +3.4% |       +1 GiB | 77.9% → 79.7% |     29 GiB → 30 GiB | 1,904 → 1,500 | `accept(Object, Object)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4d88` |
|  +3.4% |       +1 GiB | 77.9% → 79.7% |     29 GiB → 30 GiB | 1,904 → 1,500 | `forEach(BiConsumer)`                                | `java.util.HashMap`                                                    |
|  +2.5% | +879.765 MiB | 92.7% → 93.9% | 34.5 GiB → 35.4 GiB | 2,207 → 1,764 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|  +2.4% | +845.899 MiB | 91.6% → 92.7% | 34.1 GiB → 34.9 GiB | 2,174 → 1,741 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                                    |
|  +2.4% | +845.899 MiB | 91.6% → 92.7% | 34.1 GiB → 34.9 GiB | 2,174 → 1,741 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                            |
|  +2.4% |  +844.94 MiB | 91.7% → 92.9% |   34.2 GiB → 35 GiB | 2,180 → 1,743 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                                    |
|  +3.9% | +648.629 MiB | 43.8% → 45.0% | 16.3 GiB → 16.9 GiB |   1,078 → 820 | `toArray()`                                          | `java.util.ArrayList`                                                  |
|  +2.1% |  +628.79 MiB | 79.2% → 79.9% | 29.5 GiB → 30.1 GiB | 1,925 → 1,507 | `merge(Map, Map)`                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +2.1% |  +628.79 MiB | 79.2% → 79.9% | 29.5 GiB → 30.1 GiB | 1,925 → 1,507 | `combineResults(Map, Map)`                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  +2.1% |  +628.79 MiB | 79.2% → 79.9% | 29.5 GiB → 30.1 GiB | 1,925 → 1,507 | `combineResults(Object, Object)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  +1.2% |  +444.54 MiB |         99.4% |   37 GiB → 37.5 GiB | 2,323 → 1,854 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  +1.2% |  +444.54 MiB |         99.4% |   37 GiB → 37.5 GiB | 2,323 → 1,854 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                                   |
|  +1.2% |  +444.54 MiB |         99.4% |   37 GiB → 37.5 GiB | 2,323 → 1,854 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                                    |
|  +5.9% |  +419.24 MiB | 18.6% → 19.5% | 6.93 GiB → 7.34 GiB |     276 → 202 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                                    |
|  +5.8% | +393.753 MiB | 17.9% → 18.7% | 6.66 GiB → 7.05 GiB |     253 → 193 | `lambda$run$0(int, List, int)`                       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |

##### Standard library

|   Change |        Delta |             % |                Size |       Samples | Function                                                                        | Location                                             |
| -------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------------------------------------- | ---------------------------------------------------- |
|    +7.9% |    +1.68 GiB | 57.4% → 61.2% | 21.4 GiB → 23.1 GiB | 1,442 → 1,150 | `addAll(Collection)`                                                            | `java.util.ArrayList`                                |
|    +3.4% |       +1 GiB | 77.9% → 79.7% |     29 GiB → 30 GiB | 1,904 → 1,500 | `merge(Object, Object, BiFunction)`                                             | `java.util.HashMap`                                  |
|    +3.4% |       +1 GiB | 77.9% → 79.7% |     29 GiB → 30 GiB | 1,904 → 1,500 | `forEach(BiConsumer)`                                                           | `java.util.HashMap`                                  |
|    +2.5% | +879.765 MiB | 92.7% → 93.9% | 34.5 GiB → 35.4 GiB | 2,207 → 1,764 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`                            | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|    +2.4% | +845.899 MiB | 91.6% → 92.7% | 34.1 GiB → 34.9 GiB | 2,174 → 1,741 | `runWorker(ForkJoinPool$WorkQueue)`                                             | `java.util.concurrent.ForkJoinPool`                  |
|    +2.4% | +845.899 MiB | 91.6% → 92.7% | 34.1 GiB → 34.9 GiB | 2,174 → 1,741 | `run()`                                                                         | `java.util.concurrent.ForkJoinWorkerThread`          |
|    +2.4% |  +844.94 MiB | 91.7% → 92.9% |   34.2 GiB → 35 GiB | 2,180 → 1,743 | `scan(ForkJoinPool$WorkQueue, int, int)`                                        | `java.util.concurrent.ForkJoinPool`                  |
|    +3.9% | +648.629 MiB | 43.8% → 45.0% | 16.3 GiB → 16.9 GiB |   1,078 → 820 | `toArray()`                                                                     | `java.util.ArrayList`                                |
|    +1.2% |  +444.54 MiB |         99.4% |   37 GiB → 37.5 GiB | 2,323 → 1,854 | `exec()`                                                                        | `java.util.concurrent.RecursiveTask`                 |
|    +1.2% |  +444.54 MiB |         99.4% |   37 GiB → 37.5 GiB | 2,323 → 1,854 | `doExec()`                                                                      | `java.util.concurrent.ForkJoinTask`                  |
|    +5.9% |  +419.24 MiB | 18.6% → 19.5% | 6.93 GiB → 7.34 GiB |     276 → 202 | `invoke()`                                                                      | `java.util.concurrent.ForkJoinTask`                  |
|    +5.8% | +393.753 MiB | 17.9% → 18.7% | 6.66 GiB → 7.05 GiB |     253 → 193 | `exec()`                                                                        | `java.util.concurrent.ForkJoinTask$AdaptedCallable`  |
|  +786.4% |  +314.38 MiB |   0.1% → 0.9% |    40 MiB → 354 MiB |        13 → 6 | `computeIfAbsent(Object, Function)`                                             | `java.util.HashMap`                                  |
|      new | +206.832 MiB |   0.0% → 0.5% |       0 B → 207 MiB |       0 → 117 | `invokeStatic(Object, Object)`                                                  | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00` |
|      new | +206.832 MiB |   0.0% → 0.5% |       0 B → 207 MiB |       0 → 117 | `invoke(Object, Object, Object)`                                                | `java.lang.invoke.LambdaForm$MH.0x0000007001082400`  |
|    +0.7% | +187.836 MiB | 67.7% → 67.4% | 25.2 GiB → 25.4 GiB | 1,607 → 1,258 | `tryRemoveAndExec(ForkJoinTask, boolean)`                                       | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|  +731.1% | +156.762 MiB |   0.1% → 0.5% |  21.4 MiB → 178 MiB |       42 → 40 | `loadClass(String, boolean)`                                                    | `java.lang.ClassLoader`                              |
|  +731.1% | +156.762 MiB |   0.1% → 0.5% |  21.4 MiB → 178 MiB |       42 → 40 | `loadClass(String)`                                                             | `java.lang.ClassLoader`                              |
| +1936.4% | +156.376 MiB |  <0.1% → 0.4% |  8.08 MiB → 164 MiB |       13 → 10 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                              |
| +1843.3% | +155.989 MiB |  <0.1% → 0.4% |  8.46 MiB → 164 MiB |       14 → 10 | `defineClass(String, byte[], int, int, ProtectionDomain)`                       | `java.lang.ClassLoader`                              |

##### Ours

|   Change |        Delta |             % |                Size |       Samples | Function                             | Location                                                                              |
| -------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------ | ------------------------------------------------------------------------------------- |
|    +3.4% |       +1 GiB | 77.9% → 79.7% |     29 GiB → 30 GiB | 1,904 → 1,500 | `lambda$merge$6(List, List)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|    +3.4% |       +1 GiB | 77.9% → 79.7% |     29 GiB → 30 GiB | 1,904 → 1,500 | `apply(Object, Object)`              | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e5210`                |
|    +3.4% |       +1 GiB | 77.9% → 79.7% |     29 GiB → 30 GiB | 1,904 → 1,500 | `lambda$merge$7(Map, Object, List)`  | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|    +3.4% |       +1 GiB | 77.9% → 79.7% |     29 GiB → 30 GiB | 1,904 → 1,500 | `accept(Object, Object)`             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4d88`                |
|    +2.1% |  +628.79 MiB | 79.2% → 79.9% | 29.5 GiB → 30.1 GiB | 1,925 → 1,507 | `merge(Map, Map)`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|    +2.1% |  +628.79 MiB | 79.2% → 79.9% | 29.5 GiB → 30.1 GiB | 1,925 → 1,507 | `combineResults(Map, Map)`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|    +2.1% |  +628.79 MiB | 79.2% → 79.9% | 29.5 GiB → 30.1 GiB | 1,925 → 1,507 | `combineResults(Object, Object)`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|    +1.2% |  +444.54 MiB |         99.4% |   37 GiB → 37.5 GiB | 2,323 → 1,854 | `compute()`                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
|    +5.8% | +393.753 MiB | 17.9% → 18.7% | 6.66 GiB → 7.05 GiB |     253 → 193 | `lambda$run$0(int, List, int)`       | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|    +5.8% | +393.753 MiB | 17.9% → 18.7% | 6.66 GiB → 7.05 GiB |     253 → 193 | `call()`                             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dfbc0`                |
|  +157.3% | +278.692 MiB |   0.5% → 1.2% |   177 MiB → 456 MiB |        9 → 12 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   +21.9% | +264.743 MiB |   3.2% → 3.8% | 1.18 GiB → 1.44 GiB |       72 → 62 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +347.9% | +177.894 MiB |   0.1% → 0.6% |  51.1 MiB → 229 MiB |         3 → 7 | `vectorSum()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  +347.9% | +177.894 MiB |   0.1% → 0.6% |  51.1 MiB → 229 MiB |         3 → 7 | `computeDirectly()`                  | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| +2083.8% | +157.232 MiB |  <0.1% → 0.4% |  7.55 MiB → 165 MiB |         6 → 5 | `run(BenchmarkContext)`              | `org.renaissance.jdk.concurrent.FjKmeans`                                             |
| +1850.8% | +156.331 MiB |  <0.1% → 0.4% |  8.45 MiB → 165 MiB |         7 → 5 | `executeOperation(int)`              | `org.renaissance.harness.ExecutionDriver`                                             |
|      new |  +67.586 MiB |   0.0% → 0.2% |      0 B → 67.6 MiB |         0 → 2 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|  +204.5% |  +53.613 MiB |   0.1% → 0.2% | 26.2 MiB → 79.8 MiB |         4 → 3 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +204.5% |  +53.613 MiB |   0.1% → 0.2% | 26.2 MiB → 79.8 MiB |         4 → 3 | `apply(Object)`                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011e4b38` |
|  +138.5% | +536.687 KiB |         <0.1% |   388 KiB → 924 KiB |         1 → 2 | `<init>()`                           | `org.renaissance.harness.Config`                                                      |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                Size |     Samples | Function                                        | Location                                                               |
| ------: | -----------: | ------------: | ------------------: | ----------: | ----------------------------------------------- | ---------------------------------------------------------------------- |
|  -19.3% |   -1.067 GiB | 14.8% → 11.8% | 5.52 GiB → 4.46 GiB |   272 → 238 | `grow()`                                        | `java.util.ArrayList`                                                  |
|  -19.3% |   -1.067 GiB | 14.8% → 11.8% | 5.52 GiB → 4.46 GiB |   272 → 238 | `add(Object, Object[], int)`                    | `java.util.ArrayList`                                                  |
|  -19.3% |   -1.067 GiB | 14.8% → 11.8% | 5.52 GiB → 4.46 GiB |   272 → 238 | `add(Object)`                                   | `java.util.ArrayList`                                                  |
|  -13.5% | -785.135 MiB | 15.3% → 13.0% | 5.68 GiB → 4.91 GiB |   296 → 251 | `collectClusters(int[])`                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -3.3% | -597.807 MiB | 47.9% → 45.8% | 17.8 GiB → 17.3 GiB | 1,091 → 915 | `grow(int)`                                     | `java.util.ArrayList`                                                  |
|   -7.8% | -577.009 MiB | 19.4% → 17.7% | 7.23 GiB → 6.66 GiB |   455 → 347 | `<init>(Collection)`                            | `java.util.ArrayList`                                                  |
|   -7.4% | -520.392 MiB | 18.4% → 16.9% | 6.86 GiB → 6.35 GiB |   368 → 313 | `computeDirectly()`                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -98.4% | -259.467 MiB |  0.7% → <0.1% |  264 MiB → 4.14 MiB |      14 → 4 | `putMapEntries(Map, boolean)`                   | `java.util.HashMap`                                                    |
|  -98.4% | -259.467 MiB |  0.7% → <0.1% |  264 MiB → 4.14 MiB |      14 → 4 | `<init>(Map)`                                   | `java.util.HashMap`                                                    |
|  -89.9% | -222.582 MiB |   0.6% → 0.1% |  248 MiB → 25.1 MiB |     78 → 69 | `copyInto(Sink, Spliterator)`                   | `java.util.stream.AbstractPipeline`                                    |
|  -89.9% | -222.582 MiB |   0.6% → 0.1% |  248 MiB → 25.1 MiB |     78 → 69 | `wrapAndCopyInto(Sink, Spliterator)`            | `java.util.stream.AbstractPipeline`                                    |
|  -94.2% | -222.034 MiB |  0.6% → <0.1% |  236 MiB → 13.8 MiB |     43 → 38 | `evaluate(Spliterator, boolean, IntFunction)`   | `java.util.stream.AbstractPipeline`                                    |
|  -94.2% | -222.034 MiB |  0.6% → <0.1% |  236 MiB → 13.8 MiB |     43 → 38 | `evaluateToArrayNode(IntFunction)`              | `java.util.stream.AbstractPipeline`                                    |
|  -94.2% | -222.034 MiB |  0.6% → <0.1% |  236 MiB → 13.8 MiB |     43 → 38 | `toArray(IntFunction)`                          | `java.util.stream.ReferencePipeline`                                   |
|  -98.8% | -210.705 MiB |  0.6% → <0.1% |  213 MiB → 2.56 MiB |      12 → 3 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap`                                                    |
| removed |   -207.2 MiB |   0.5% → 0.0% |       207 MiB → 0 B |     129 → 0 | `invokeStatic(Object, Object)`                  | `java.lang.invoke.LambdaForm$DMH.0x0000009001001c00`                   |
| removed |   -207.2 MiB |   0.5% → 0.0% |       207 MiB → 0 B |     129 → 0 | `invoke(Object, Object, Object)`                | `java.lang.invoke.LambdaForm$MH.0x0000009001082400`                    |
|  -86.3% | -156.313 MiB |   0.5% → 0.1% |  181 MiB → 24.7 MiB |     76 → 68 | `apply(int)`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011818d8` |
|  -86.3% | -156.313 MiB |   0.5% → 0.1% |  181 MiB → 24.7 MiB |     76 → 68 | `accept(int)`                                   | `java.util.stream.IntPipeline$1$1`                                     |
|  -86.3% | -156.313 MiB |   0.5% → 0.1% |  181 MiB → 24.7 MiB |     76 → 68 | `forEachRemaining(IntConsumer)`                 | `java.util.stream.Streams$RangeIntSpliterator`                         |

##### Standard library

|  Change |        Delta |             % |                Size |     Samples | Function                                          | Location                                             |
| ------: | -----------: | ------------: | ------------------: | ----------: | ------------------------------------------------- | ---------------------------------------------------- |
|  -19.3% |   -1.067 GiB | 14.8% → 11.8% | 5.52 GiB → 4.46 GiB |   272 → 238 | `grow()`                                          | `java.util.ArrayList`                                |
|  -19.3% |   -1.067 GiB | 14.8% → 11.8% | 5.52 GiB → 4.46 GiB |   272 → 238 | `add(Object, Object[], int)`                      | `java.util.ArrayList`                                |
|  -19.3% |   -1.067 GiB | 14.8% → 11.8% | 5.52 GiB → 4.46 GiB |   272 → 238 | `add(Object)`                                     | `java.util.ArrayList`                                |
|   -3.3% | -597.807 MiB | 47.9% → 45.8% | 17.8 GiB → 17.3 GiB | 1,091 → 915 | `grow(int)`                                       | `java.util.ArrayList`                                |
|   -7.8% | -577.009 MiB | 19.4% → 17.7% | 7.23 GiB → 6.66 GiB |   455 → 347 | `<init>(Collection)`                              | `java.util.ArrayList`                                |
|  -98.4% | -259.467 MiB |  0.7% → <0.1% |  264 MiB → 4.14 MiB |      14 → 4 | `putMapEntries(Map, boolean)`                     | `java.util.HashMap`                                  |
|  -98.4% | -259.467 MiB |  0.7% → <0.1% |  264 MiB → 4.14 MiB |      14 → 4 | `<init>(Map)`                                     | `java.util.HashMap`                                  |
|  -89.9% | -222.582 MiB |   0.6% → 0.1% |  248 MiB → 25.1 MiB |     78 → 69 | `copyInto(Sink, Spliterator)`                     | `java.util.stream.AbstractPipeline`                  |
|  -89.9% | -222.582 MiB |   0.6% → 0.1% |  248 MiB → 25.1 MiB |     78 → 69 | `wrapAndCopyInto(Sink, Spliterator)`              | `java.util.stream.AbstractPipeline`                  |
|  -94.2% | -222.034 MiB |  0.6% → <0.1% |  236 MiB → 13.8 MiB |     43 → 38 | `evaluate(Spliterator, boolean, IntFunction)`     | `java.util.stream.AbstractPipeline`                  |
|  -94.2% | -222.034 MiB |  0.6% → <0.1% |  236 MiB → 13.8 MiB |     43 → 38 | `evaluateToArrayNode(IntFunction)`                | `java.util.stream.AbstractPipeline`                  |
|  -94.2% | -222.034 MiB |  0.6% → <0.1% |  236 MiB → 13.8 MiB |     43 → 38 | `toArray(IntFunction)`                            | `java.util.stream.ReferencePipeline`                 |
|  -98.8% | -210.705 MiB |  0.6% → <0.1% |  213 MiB → 2.56 MiB |      12 → 3 | `putVal(int, Object, Object, boolean, boolean)`   | `java.util.HashMap`                                  |
| removed |   -207.2 MiB |   0.5% → 0.0% |       207 MiB → 0 B |     129 → 0 | `invokeStatic(Object, Object)`                    | `java.lang.invoke.LambdaForm$DMH.0x0000009001001c00` |
| removed |   -207.2 MiB |   0.5% → 0.0% |       207 MiB → 0 B |     129 → 0 | `invoke(Object, Object, Object)`                  | `java.lang.invoke.LambdaForm$MH.0x0000009001082400`  |
|  -86.3% | -156.313 MiB |   0.5% → 0.1% |  181 MiB → 24.7 MiB |     76 → 68 | `accept(int)`                                     | `java.util.stream.IntPipeline$1$1`                   |
|  -86.3% | -156.313 MiB |   0.5% → 0.1% |  181 MiB → 24.7 MiB |     76 → 68 | `forEachRemaining(IntConsumer)`                   | `java.util.stream.Streams$RangeIntSpliterator`       |
|  -86.3% | -156.313 MiB |   0.5% → 0.1% |  181 MiB → 24.7 MiB |     76 → 68 | `forEachRemaining(Consumer)`                      | `java.util.Spliterator$OfInt`                        |
|  -86.2% | -156.313 MiB |   0.5% → 0.1% |  181 MiB → 25.1 MiB |     77 → 69 | `evaluateSequential(PipelineHelper, Spliterator)` | `java.util.stream.ReduceOps$ReduceOp`                |
|  -86.2% | -156.313 MiB |   0.5% → 0.1% |  181 MiB → 25.1 MiB |     77 → 69 | `evaluate(TerminalOp)`                            | `java.util.stream.AbstractPipeline`                  |

##### Ours

|  Change |        Delta |             % |                Size |   Samples | Function                                         | Location                                                               |
| ------: | -----------: | ------------: | ------------------: | --------: | ------------------------------------------------ | ---------------------------------------------------------------------- |
|  -13.5% | -785.135 MiB | 15.3% → 13.0% | 5.68 GiB → 4.91 GiB | 296 → 251 | `collectClusters(int[])`                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -7.4% | -520.392 MiB | 18.4% → 16.9% | 6.86 GiB → 6.35 GiB | 368 → 313 | `computeDirectly()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -86.3% | -156.313 MiB |   0.5% → 0.1% |  181 MiB → 24.7 MiB |   76 → 68 | `apply(int)`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011818d8` |
|  -86.3% | -156.313 MiB |   0.5% → 0.1% |  181 MiB → 24.7 MiB |   76 → 68 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -86.3% | -156.313 MiB |   0.5% → 0.1% |  181 MiB → 24.7 MiB |   76 → 68 | `generateData(int, int, int)`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -86.3% | -156.313 MiB |   0.5% → 0.1% |  181 MiB → 24.7 MiB |   76 → 68 | `setUpBeforeAll(BenchmarkContext)`               | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  -60.5% | -148.237 MiB |   0.6% → 0.3% |  245 MiB → 96.6 MiB |    11 → 7 | `createSubtask(int, int)`                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed |  -69.156 MiB |   0.2% → 0.0% |      69.2 MiB → 0 B |     2 → 0 | `boxed(double[])`                                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -97.1% |   -42.21 MiB |  0.1% → <0.1% | 43.5 MiB → 1.24 MiB |     4 → 3 | `add(double[], double[])`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -97.1% |   -42.21 MiB |  0.1% → <0.1% | 43.5 MiB → 1.24 MiB |     4 → 3 | `combineResults(double[], double[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -97.1% |   -42.21 MiB |  0.1% → <0.1% | 43.5 MiB → 1.24 MiB |     4 → 3 | `combineResults(Object, Object)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   -4.1% |   -4.351 MiB |          0.3% |   107 MiB → 102 MiB |     9 → 5 | `average(List)`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -83.4% |   -3.806 MiB |         <0.1% |  4.56 MiB → 775 KiB |    10 → 2 | `apply(int)`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001181d48` |
|  -83.4% |   -3.806 MiB |         <0.1% |  4.56 MiB → 775 KiB |    10 → 2 | `lambda$generateData$4(int)`                     | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -1.2% |   -2.935 MiB |          0.7% |   255 MiB → 252 MiB |    12 → 7 | `computeClusterAverages()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   -1.2% |   -2.935 MiB |          0.7% |   255 MiB → 252 MiB |    12 → 7 | `computeDirectly()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -14.8% |   -1.532 MiB |         <0.1% | 10.3 MiB → 8.79 MiB |        25 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -14.8% |   -1.532 MiB |         <0.1% | 10.3 MiB → 8.79 MiB |        25 | `apply(int)`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001181b10` |
| removed |  -922.71 KiB |  <0.1% → 0.0% |       923 KiB → 0 B |     1 → 0 | `collectGarbage(String)`                         | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`               |
| removed |  -922.71 KiB |  <0.1% → 0.0% |       923 KiB → 0 B |     1 → 0 | `afterOperationSetUp(String, int, boolean)`      | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`               |

# Retained heap profile diff

Retained 2.31 MiB (+40 B, ~0%) over 9 objects → 8 objects (263 KiB → 296 KiB per object).

| Category         |  Change | Delta |            % |       Size | Objects |
| ---------------- | ------: | ----: | -----------: | ---------: | ------: |
| Standard library |     ~0% | +72 B |       100.0% |   2.31 MiB |       8 |
| Ours             | removed | -32 B | <0.1% → 0.0% | 32 B → 0 B |   1 → 0 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

##### Standard library

| Change | Delta |            % |       Size | Objects | Function                                     | Location                |
| -----: | ----: | -----------: | ---------: | ------: | -------------------------------------------- | ----------------------- |
|    new | +80 B | 0.0% → <0.1% | 0 B → 80 B |   0 → 1 | `compress(char[], int, int)`                 | `java.lang.StringUTF16` |
|    new | +32 B | 0.0% → <0.1% | 0 B → 32 B |   0 → 1 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`     |

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

|  Change | Delta |            % |       Size | Objects | Function                                     | Location                 |
| ------: | ----: | -----------: | ---------: | ------: | -------------------------------------------- | ------------------------ |
| removed | -32 B | <0.1% → 0.0% | 32 B → 0 B |   1 → 0 | `runParser(Seq, Object, List, OParserSetup)` | `scopt.ORunner$`         |
| removed | -24 B | <0.1% → 0.0% | 24 B → 0 B |   1 → 0 | `parseName(byte[], int)`                     | `java.util.jar.Manifest` |
| removed | -16 B | <0.1% → 0.0% | 16 B → 0 B |   1 → 0 | `getClassLoadingLock(String)`                | `java.lang.ClassLoader`  |

##### Standard library

|  Change | Delta |            % |       Size | Objects | Function                      | Location                 |
| ------: | ----: | -----------: | ---------: | ------: | ----------------------------- | ------------------------ |
| removed | -24 B | <0.1% → 0.0% | 24 B → 0 B |   1 → 0 | `parseName(byte[], int)`      | `java.util.jar.Manifest` |
| removed | -16 B | <0.1% → 0.0% | 16 B → 0 B |   1 → 0 | `getClassLoadingLock(String)` | `java.lang.ClassLoader`  |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

| Change |     Delta |            % |           Size | Objects | Function                                                    | Location                                                               |
| -----: | --------: | -----------: | -------------: | ------: | ----------------------------------------------------------- | ---------------------------------------------------------------------- |
|    new | +2.06 MiB | 0.0% → 89.2% | 0 B → 2.06 MiB |   0 → 7 | `invokeStatic(Object, Object)`                              | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`                   |
|    new | +2.06 MiB | 0.0% → 89.2% | 0 B → 2.06 MiB |   0 → 7 | `invoke(Object, Object, Object)`                            | `java.lang.invoke.LambdaForm$MH.0x0000007001082400`                    |
|    new |     +80 B | 0.0% → <0.1% |     0 B → 80 B |   0 → 1 | `compress(char[], int, int)`                                | `java.lang.StringUTF16`                                                |
|    new |     +80 B | 0.0% → <0.1% |     0 B → 80 B |   0 → 1 | `<init>(char[], int, int, Void)`                            | `java.lang.String`                                                     |
|    new |     +80 B | 0.0% → <0.1% |     0 B → 80 B |   0 → 1 | `<init>(char[], int, int)`                                  | `java.lang.String`                                                     |
|    new |     +80 B | 0.0% → <0.1% |     0 B → 80 B |   0 → 1 | `loadConvert(char[], int, int, StringBuilder)`              | `java.util.Properties`                                                 |
|    new |     +80 B | 0.0% → <0.1% |     0 B → 80 B |   0 → 1 | `load0(Properties$LineReader)`                              | `java.util.Properties`                                                 |
|    new |     +80 B | 0.0% → <0.1% |     0 B → 80 B |   0 → 1 | `load(InputStream)`                                         | `java.util.Properties`                                                 |
|    new |     +80 B | 0.0% → <0.1% |     0 B → 80 B |   0 → 1 | `loadProperties(URL)`                                       | `org.renaissance.core.ResourceUtils`                                   |
|    new |     +80 B | 0.0% → <0.1% |     0 B → 80 B |   0 → 1 | `loadPropertiesAsMap(URL)`                                  | `org.renaissance.core.ResourceUtils`                                   |
|    new |     +80 B | 0.0% → <0.1% |     0 B → 80 B |   0 → 1 | `create(Path, String, Optional, Map, boolean)`              | `org.renaissance.core.BenchmarkSuite`                                  |
|    new |     +80 B | 0.0% → <0.1% |     0 B → 80 B |   0 → 1 | `$anonfun$1(Config, Path)`                                  | `org.renaissance.harness.RenaissanceSuite$`                            |
|    new |     +80 B | 0.0% → <0.1% |     0 B → 80 B |   0 → 1 | `apply()`                                                   | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700115e000` |
|    new |     +80 B | 0.0% → <0.1% |     0 B → 80 B |   0 → 1 | `apply(Function0)`                                          | `scala.util.Try$`                                                      |
|    ~0% |     +40 B |        89.2% |       2.06 MiB |   8 → 7 | `main(String[])`                                            | `org.renaissance.harness.RenaissanceSuite`                             |
|    ~0% |     +40 B |        89.2% |       2.06 MiB |   8 → 7 | `invokeExact_MT(Object, Object, Object, Object)`            | `java.lang.invoke.Invokers$Holder`                                     |
|    ~0% |     +40 B |        89.2% |       2.06 MiB |   8 → 7 | `invokeImpl(Object, Object[])`                              | `jdk.internal.reflect.DirectMethodHandleAccessor`                      |
|    ~0% |     +40 B |        89.2% |       2.06 MiB |   8 → 7 | `invoke(Object, Object[])`                                  | `jdk.internal.reflect.DirectMethodHandleAccessor`                      |
|    ~0% |     +40 B |        89.2% |       2.06 MiB |   8 → 7 | `invoke(Object, Object[])`                                  | `java.lang.reflect.Method`                                             |
|    ~0% |     +40 B |        89.2% |       2.06 MiB |   8 → 7 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`                                        |

##### Standard library

| Change |     Delta |            % |           Size | Objects | Function                                         | Location                                             |
| -----: | --------: | -----------: | -------------: | ------: | ------------------------------------------------ | ---------------------------------------------------- |
|    new | +2.06 MiB | 0.0% → 89.2% | 0 B → 2.06 MiB |   0 → 7 | `invokeStatic(Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00` |
|    new | +2.06 MiB | 0.0% → 89.2% | 0 B → 2.06 MiB |   0 → 7 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001082400`  |
|    new |     +80 B | 0.0% → <0.1% |     0 B → 80 B |   0 → 1 | `compress(char[], int, int)`                     | `java.lang.StringUTF16`                              |
|    new |     +80 B | 0.0% → <0.1% |     0 B → 80 B |   0 → 1 | `<init>(char[], int, int, Void)`                 | `java.lang.String`                                   |
|    new |     +80 B | 0.0% → <0.1% |     0 B → 80 B |   0 → 1 | `<init>(char[], int, int)`                       | `java.lang.String`                                   |
|    new |     +80 B | 0.0% → <0.1% |     0 B → 80 B |   0 → 1 | `loadConvert(char[], int, int, StringBuilder)`   | `java.util.Properties`                               |
|    new |     +80 B | 0.0% → <0.1% |     0 B → 80 B |   0 → 1 | `load0(Properties$LineReader)`                   | `java.util.Properties`                               |
|    new |     +80 B | 0.0% → <0.1% |     0 B → 80 B |   0 → 1 | `load(InputStream)`                              | `java.util.Properties`                               |
|    new |     +80 B | 0.0% → <0.1% |     0 B → 80 B |   0 → 1 | `apply(Function0)`                               | `scala.util.Try$`                                    |
|    ~0% |     +40 B |        89.2% |       2.06 MiB |   8 → 7 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                   |
|    ~0% |     +40 B |        89.2% |       2.06 MiB |   8 → 7 | `invokeImpl(Object, Object[])`                   | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|    ~0% |     +40 B |        89.2% |       2.06 MiB |   8 → 7 | `invoke(Object, Object[])`                       | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|    ~0% |     +40 B |        89.2% |       2.06 MiB |   8 → 7 | `invoke(Object, Object[])`                       | `java.lang.reflect.Method`                           |
|    new |     +32 B | 0.0% → <0.1% |     0 B → 32 B |   0 → 1 | `newNode(int, Object, Object, HashMap$Node)`     | `java.util.HashMap`                                  |
|    new |     +32 B | 0.0% → <0.1% |     0 B → 32 B |   0 → 1 | `putVal(int, Object, Object, boolean, boolean)`  | `java.util.HashMap`                                  |
|    new |     +32 B | 0.0% → <0.1% |     0 B → 32 B |   0 → 1 | `put(Object, Object)`                            | `java.util.HashMap`                                  |
| +33.3% |      +8 B |        <0.1% |    24 B → 32 B |       1 | `read(InputStream, String)`                      | `java.util.jar.Manifest`                             |
| +33.3% |      +8 B |        <0.1% |    24 B → 32 B |       1 | `<init>(JarVerifier, InputStream, String)`       | `java.util.jar.Manifest`                             |
| +33.3% |      +8 B |        <0.1% |    24 B → 32 B |       1 | `<init>(InputStream, String)`                    | `java.util.jar.Manifest`                             |
| +33.3% |      +8 B |        <0.1% |    24 B → 32 B |       1 | `getManifestFromReference()`                     | `java.util.jar.JarFile`                              |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

|  Change |     Delta |            % |           Size | Objects | Function                                     | Location                                             |
| ------: | --------: | -----------: | -------------: | ------: | -------------------------------------------- | ---------------------------------------------------- |
| removed | -2.06 MiB | 89.2% → 0.0% | 2.06 MiB → 0 B |   8 → 0 | `invokeStatic(Object, Object)`               | `java.lang.invoke.LambdaForm$DMH.0x0000009001001c00` |
| removed | -2.06 MiB | 89.2% → 0.0% | 2.06 MiB → 0 B |   8 → 0 | `invoke(Object, Object, Object)`             | `java.lang.invoke.LambdaForm$MH.0x0000009001082400`  |
| removed |     -32 B | <0.1% → 0.0% |     32 B → 0 B |   1 → 0 | `runParser(Seq, Object, List, OParserSetup)` | `scopt.ORunner$`                                     |
| removed |     -32 B | <0.1% → 0.0% |     32 B → 0 B |   1 → 0 | `parse(Seq, Object)`                         | `scopt.OptionParser`                                 |
| removed |     -32 B | <0.1% → 0.0% |     32 B → 0 B |   1 → 0 | `parse(String[])`                            | `org.renaissance.harness.ConfigParser`               |
| removed |     -24 B | <0.1% → 0.0% |     24 B → 0 B |   1 → 0 | `parseName(byte[], int)`                     | `java.util.jar.Manifest`                             |
| removed |     -16 B | <0.1% → 0.0% |     16 B → 0 B |   1 → 0 | `getClassLoadingLock(String)`                | `java.lang.ClassLoader`                              |
| removed |     -16 B | <0.1% → 0.0% |     16 B → 0 B |   1 → 0 | `releaseFence()`                             | `scala.runtime.Statics`                              |
| removed |     -16 B | <0.1% → 0.0% |     16 B → 0 B |   1 → 0 | `<init>(Object)`                             | `scala.collection.ArrayOps$ArrayIterator`            |
| removed |     -16 B | <0.1% → 0.0% |     16 B → 0 B |   1 → 0 | `iterator()`                                 | `scala.collection.immutable.ArraySeq$ofRef`          |
| removed |     -16 B | <0.1% → 0.0% |     16 B → 0 B |   1 → 0 | `addAll(IterableOnce)`                       | `scala.collection.mutable.Growable`                  |
| removed |     -16 B | <0.1% → 0.0% |     16 B → 0 B |   1 → 0 | `addAll$(Growable, IterableOnce)`            | `scala.collection.mutable.Growable`                  |
| removed |     -16 B | <0.1% → 0.0% |     16 B → 0 B |   1 → 0 | `addAll(IterableOnce)`                       | `scala.collection.immutable.MapBuilderImpl`          |
| removed |     -16 B | <0.1% → 0.0% |     16 B → 0 B |   1 → 0 | `from(IterableOnce)`                         | `scala.collection.immutable.Map$`                    |
| removed |     -16 B | <0.1% → 0.0% |     16 B → 0 B |   1 → 0 | `apply(Seq)`                                 | `scala.collection.MapFactory`                        |
| removed |     -16 B | <0.1% → 0.0% |     16 B → 0 B |   1 → 0 | `apply$(MapFactory, Seq)`                    | `scala.collection.MapFactory`                        |
| removed |     -16 B | <0.1% → 0.0% |     16 B → 0 B |   1 → 0 | `apply(Seq)`                                 | `scala.collection.immutable.Map$`                    |
|  -20.0% |      -8 B |        <0.1% |    40 B → 32 B |   2 → 1 | `loadClass(String, boolean)`                 | `java.lang.ClassLoader`                              |
|  -20.0% |      -8 B |        <0.1% |    40 B → 32 B |   2 → 1 | `loadClass(String)`                          | `java.lang.ClassLoader`                              |

##### Standard library

|  Change |     Delta |            % |           Size | Objects | Function                          | Location                                             |
| ------: | --------: | -----------: | -------------: | ------: | --------------------------------- | ---------------------------------------------------- |
| removed | -2.06 MiB | 89.2% → 0.0% | 2.06 MiB → 0 B |   8 → 0 | `invokeStatic(Object, Object)`    | `java.lang.invoke.LambdaForm$DMH.0x0000009001001c00` |
| removed | -2.06 MiB | 89.2% → 0.0% | 2.06 MiB → 0 B |   8 → 0 | `invoke(Object, Object, Object)`  | `java.lang.invoke.LambdaForm$MH.0x0000009001082400`  |
| removed |     -24 B | <0.1% → 0.0% |     24 B → 0 B |   1 → 0 | `parseName(byte[], int)`          | `java.util.jar.Manifest`                             |
| removed |     -16 B | <0.1% → 0.0% |     16 B → 0 B |   1 → 0 | `getClassLoadingLock(String)`     | `java.lang.ClassLoader`                              |
| removed |     -16 B | <0.1% → 0.0% |     16 B → 0 B |   1 → 0 | `releaseFence()`                  | `scala.runtime.Statics`                              |
| removed |     -16 B | <0.1% → 0.0% |     16 B → 0 B |   1 → 0 | `<init>(Object)`                  | `scala.collection.ArrayOps$ArrayIterator`            |
| removed |     -16 B | <0.1% → 0.0% |     16 B → 0 B |   1 → 0 | `iterator()`                      | `scala.collection.immutable.ArraySeq$ofRef`          |
| removed |     -16 B | <0.1% → 0.0% |     16 B → 0 B |   1 → 0 | `addAll(IterableOnce)`            | `scala.collection.mutable.Growable`                  |
| removed |     -16 B | <0.1% → 0.0% |     16 B → 0 B |   1 → 0 | `addAll$(Growable, IterableOnce)` | `scala.collection.mutable.Growable`                  |
| removed |     -16 B | <0.1% → 0.0% |     16 B → 0 B |   1 → 0 | `addAll(IterableOnce)`            | `scala.collection.immutable.MapBuilderImpl`          |
| removed |     -16 B | <0.1% → 0.0% |     16 B → 0 B |   1 → 0 | `from(IterableOnce)`              | `scala.collection.immutable.Map$`                    |
| removed |     -16 B | <0.1% → 0.0% |     16 B → 0 B |   1 → 0 | `apply(Seq)`                      | `scala.collection.MapFactory`                        |
| removed |     -16 B | <0.1% → 0.0% |     16 B → 0 B |   1 → 0 | `apply$(MapFactory, Seq)`         | `scala.collection.MapFactory`                        |
| removed |     -16 B | <0.1% → 0.0% |     16 B → 0 B |   1 → 0 | `apply(Seq)`                      | `scala.collection.immutable.Map$`                    |
|  -20.0% |      -8 B |        <0.1% |    40 B → 32 B |   2 → 1 | `loadClass(String, boolean)`      | `java.lang.ClassLoader`                              |
|  -20.0% |      -8 B |        <0.1% |    40 B → 32 B |   2 → 1 | `loadClass(String)`               | `java.lang.ClassLoader`                              |

# Lock contention profile diff

Blocked 10.50s → 7.19s (-3.312s, -31.5%) over 143 contentions → 61 contentions (73.5ms → 117.9ms per contention).

| Category         | Change |   Delta |      % |           Time | Contentions |
| ---------------- | -----: | ------: | -----: | -------------: | ----------: |
| Standard library | -31.5% | -3.312s | 100.0% | 10.50s → 7.19s |    143 → 61 |

## Hottest functions

### Self time

#### Improvements

Functions with the largest decrease in time blocked directly in the function body, excluding callees.

##### Standard library

| Change |   Delta |      % |           Time | Contentions | Function              | Location                   |
| -----: | ------: | -----: | -------------: | ----------: | --------------------- | -------------------------- |
| -31.5% | -3.312s | 100.0% | 10.50s → 7.19s |    143 → 61 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

##### Standard library

| Change |   Delta |            % |        Time | Contentions | Function                         | Location                                             |
| -----: | ------: | -----------: | ----------: | ----------: | -------------------------------- | ---------------------------------------------------- |
|    new | +5.978s | 0.0% → 83.1% | 0ms → 5.97s |      0 → 16 | `invokeStatic(Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00` |
|    new | +5.978s | 0.0% → 83.1% | 0ms → 5.97s |      0 → 16 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001082400`  |

#### Improvements

Functions with the largest decrease in total time blocked in the function and all its callees.

|  Change |   Delta |             % |           Time | Contentions | Function                                                                                                               | Location                                                               |
| ------: | ------: | ------------: | -------------: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| removed | -7.631s |  72.7% → 0.0% |    7.63s → 0ms |      16 → 0 | `invokeStatic(Object, Object)`                                                                                         | `java.lang.invoke.LambdaForm$DMH.0x0000009001001c00`                   |
| removed | -7.631s |  72.7% → 0.0% |    7.63s → 0ms |      16 → 0 | `invoke(Object, Object, Object)`                                                                                       | `java.lang.invoke.LambdaForm$MH.0x0000009001082400`                    |
|  -31.5% | -3.312s |        100.0% | 10.50s → 7.19s |    143 → 61 | `park(boolean, long)`                                                                                                  | `jdk.internal.misc.Unsafe`                                             |
|  -31.5% | -3.191s | 96.6% → 96.8% | 10.14s → 6.95s |    131 → 51 | `park()`                                                                                                               | `java.util.concurrent.locks.LockSupport`                               |
|  -22.7% | -1.753s | 73.6% → 83.1% |  7.73s → 5.97s |     22 → 16 | `awaitDone(int, long)`                                                                                                 | `java.util.concurrent.ForkJoinTask`                                    |
|  -57.8% | -1.660s | 27.3% → 16.9% |  2.87s → 1.21s |    127 → 45 | `runWorker(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`                                    |
|  -57.8% | -1.660s | 27.3% → 16.9% |  2.87s → 1.21s |    127 → 45 | `run()`                                                                                                                | `java.util.concurrent.ForkJoinWorkerThread`                            |
|  -21.7% | -1.652s | 72.7% → 83.1% |  7.63s → 5.97s |          16 | `get()`                                                                                                                | `java.util.concurrent.ForkJoinTask`                                    |
|  -21.7% | -1.652s | 72.7% → 83.1% |  7.63s → 5.97s |          16 | `run(int, List, int)`                                                                                                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -21.7% | -1.652s | 72.7% → 83.1% |  7.63s → 5.97s |          16 | `$anonfun$1(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  -21.7% | -1.652s | 72.7% → 83.1% |  7.63s → 5.97s |          16 | `$anonfun$adapted$1(Object)`                                                                                           | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  -21.7% | -1.652s | 72.7% → 83.1% |  7.63s → 5.97s |          16 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011d6c70`   |
|  -21.7% | -1.652s | 72.7% → 83.1% |  7.63s → 5.97s |          16 | `map(Function1)`                                                                                                       | `scala.collection.immutable.Range`                                     |
|  -21.7% | -1.652s | 72.7% → 83.1% |  7.63s → 5.97s |          16 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  -21.7% | -1.652s | 72.7% → 83.1% |  7.63s → 5.97s |          16 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |
|  -21.7% | -1.652s | 72.7% → 83.1% |  7.63s → 5.97s |          16 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|  -21.7% | -1.652s | 72.7% → 83.1% |  7.63s → 5.97s |          16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -21.7% | -1.652s | 72.7% → 83.1% |  7.63s → 5.97s |          16 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001178798` |
|  -21.7% | -1.652s | 72.7% → 83.1% |  7.63s → 5.97s |          16 | `apply(Object)`                                                                                                        | `scala.runtime.function.JProcedure1`                                   |
|  -21.7% | -1.652s | 72.7% → 83.1% |  7.63s → 5.97s |          16 | `foreach(Function1)`                                                                                                   | `scala.collection.immutable.List`                                      |

##### Standard library

|  Change |     Delta |             % |              Time | Contentions | Function                                         | Location                                             |
| ------: | --------: | ------------: | ----------------: | ----------: | ------------------------------------------------ | ---------------------------------------------------- |
| removed |   -7.631s |  72.7% → 0.0% |       7.63s → 0ms |      16 → 0 | `invokeStatic(Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x0000009001001c00` |
| removed |   -7.631s |  72.7% → 0.0% |       7.63s → 0ms |      16 → 0 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000009001082400`  |
|  -31.5% |   -3.312s |        100.0% |    10.50s → 7.19s |    143 → 61 | `park(boolean, long)`                            | `jdk.internal.misc.Unsafe`                           |
|  -31.5% |   -3.191s | 96.6% → 96.8% |    10.14s → 6.95s |    131 → 51 | `park()`                                         | `java.util.concurrent.locks.LockSupport`             |
|  -22.7% |   -1.753s | 73.6% → 83.1% |     7.73s → 5.97s |     22 → 16 | `awaitDone(int, long)`                           | `java.util.concurrent.ForkJoinTask`                  |
|  -57.8% |   -1.660s | 27.3% → 16.9% |     2.87s → 1.21s |    127 → 45 | `runWorker(ForkJoinPool$WorkQueue)`              | `java.util.concurrent.ForkJoinPool`                  |
|  -57.8% |   -1.660s | 27.3% → 16.9% |     2.87s → 1.21s |    127 → 45 | `run()`                                          | `java.util.concurrent.ForkJoinWorkerThread`          |
|  -21.7% |   -1.652s | 72.7% → 83.1% |     7.63s → 5.97s |          16 | `get()`                                          | `java.util.concurrent.ForkJoinTask`                  |
|  -21.7% |   -1.652s | 72.7% → 83.1% |     7.63s → 5.97s |          16 | `map(Function1)`                                 | `scala.collection.immutable.Range`                   |
|  -21.7% |   -1.652s | 72.7% → 83.1% |     7.63s → 5.97s |          16 | `apply(Object)`                                  | `scala.runtime.function.JProcedure1`                 |
|  -21.7% |   -1.652s | 72.7% → 83.1% |     7.63s → 5.97s |          16 | `foreach(Function1)`                             | `scala.collection.immutable.List`                    |
|  -21.7% |   -1.652s | 72.7% → 83.1% |     7.63s → 5.97s |          16 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                   |
|  -21.7% |   -1.652s | 72.7% → 83.1% |     7.63s → 5.97s |          16 | `invokeImpl(Object, Object[])`                   | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  -21.7% |   -1.652s | 72.7% → 83.1% |     7.63s → 5.97s |          16 | `invoke(Object, Object[])`                       | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  -21.7% |   -1.652s | 72.7% → 83.1% |     7.63s → 5.97s |          16 | `invoke(Object, Object[])`                       | `java.lang.reflect.Method`                           |
|  -56.3% |   -1.558s | 26.4% → 16.9% |     2.77s → 1.21s |    121 → 45 | `awaitWork(ForkJoinPool$WorkQueue)`              | `java.util.concurrent.ForkJoinPool`                  |
|  -34.2% | -121.06ms |   3.4% → 3.2% | 354.3ms → 233.3ms |     12 → 10 | `parkUntil(long)`                                | `java.util.concurrent.locks.LockSupport`             |
| removed | -101.76ms |   1.0% → 0.0% |     101.8ms → 0ms |       6 → 0 | `join()`                                         | `java.util.concurrent.ForkJoinTask`                  |
| removed | -101.76ms |   1.0% → 0.0% |     101.8ms → 0ms |       6 → 0 | `exec()`                                         | `java.util.concurrent.RecursiveTask`                 |
| removed | -101.76ms |   1.0% → 0.0% |     101.8ms → 0ms |       6 → 0 | `doExec()`                                       | `java.util.concurrent.ForkJoinTask`                  |

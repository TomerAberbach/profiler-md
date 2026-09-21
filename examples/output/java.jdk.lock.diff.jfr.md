# Sampling profile diff

Collected 1,485 samples → 1,410 samples (-75 samples, -5.1%).

| Category         | Change | Delta |             % |       Samples |
| ---------------- | -----: | ----: | ------------: | ------------: |
| Ours             |  -6.2% |   -84 | 91.6% → 90.6% | 1,361 → 1,277 |
| Standard library |  +7.3% |    +9 |   8.4% → 9.4% |     124 → 133 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                                                      | Location                                                                              |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|  +17.6% |   +15 |   5.7% → 7.1% |  85 → 100 | `collectClusters(int[])`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +44.8% |   +13 |   2.0% → 3.0% |   29 → 42 | `copyOf(Object[], int)`                                       | `java.util.Arrays`                                                                    |
|  +50.0% |    +6 |   0.8% → 1.3% |   12 → 18 | `apply(Object)`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000e001204b38` |
|   +2.2% |    +4 | 12.2% → 13.1% | 181 → 185 | `findNearestCentroid()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +23.1% |    +3 |   0.9% → 1.1% |   13 → 16 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`     | `java.util.concurrent.ForkJoinPool`                                                   |
|  +42.9% |    +3 |   0.5% → 0.7% |    7 → 10 | `grow(int)`                                                   | `java.util.ArrayList`                                                                 |
| +300.0% |    +3 |   0.1% → 0.3% |     1 → 4 | `nextNode()`                                                  | `java.util.HashMap$HashIterator`                                                      |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `compute()`                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
|   +5.3% |    +2 |   2.6% → 2.8% |   38 → 40 | `computeIfAbsent(Object, Function)`                           | `java.util.HashMap`                                                                   |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `lambda$collectClusters$0(Double[])`                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `add(double[], double[])`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  +50.0% |    +1 |   0.1% → 0.2% |     2 → 3 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater`                                                              |
|   +3.6% |    +1 |   1.9% → 2.1% |   28 → 29 | `computeDirectly()`                                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `tryRemoveAndExec(ForkJoinTask, boolean)`                     | `java.util.concurrent.ForkJoinPool$WorkQueue`                                         |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `putVal(Object, Object, boolean)`                             | `java.util.concurrent.ConcurrentHashMap`                                              |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `currentTimeMillis()`                                         | `java.lang.System`                                                                    |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `write0(FileDescriptor, long, int)`                           | `sun.nio.ch.UnixFileDispatcherImpl`                                                   |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `storeStoreFence()`                                           | `jdk.internal.misc.Unsafe`                                                            |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `push(ForkJoinTask, ForkJoinPool, boolean)`                   | `java.util.concurrent.ForkJoinPool$WorkQueue`                                         |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `signalWork()`                                                | `java.util.concurrent.ForkJoinPool`                                                   |

##### Ours

|  Change | Delta |             % |   Samples | Function                             | Location                                                                              |
| ------: | ----: | ------------: | --------: | ------------------------------------ | ------------------------------------------------------------------------------------- |
|  +17.6% |   +15 |   5.7% → 7.1% |  85 → 100 | `collectClusters(int[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +50.0% |    +6 |   0.8% → 1.3% |   12 → 18 | `apply(Object)`                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000e001204b38` |
|   +2.2% |    +4 | 12.2% → 13.1% | 181 → 185 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `compute()`                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   +3.6% |    +1 |   1.9% → 2.1% |   28 → 29 | `computeDirectly()`                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `<init>(JavaKMeans, List, List)`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                      | Location                                      |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------- | --------------------------------------------- |
|  +44.8% |   +13 | 2.0% → 3.0% | 29 → 42 | `copyOf(Object[], int)`                                       | `java.util.Arrays`                            |
|  +23.1% |    +3 | 0.9% → 1.1% | 13 → 16 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`     | `java.util.concurrent.ForkJoinPool`           |
|  +42.9% |    +3 | 0.5% → 0.7% |  7 → 10 | `grow(int)`                                                   | `java.util.ArrayList`                         |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `nextNode()`                                                  | `java.util.HashMap$HashIterator`              |
|   +5.3% |    +2 | 2.6% → 2.8% | 38 → 40 | `computeIfAbsent(Object, Function)`                           | `java.util.HashMap`                           |
|  +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater`                      |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `tryRemoveAndExec(ForkJoinTask, boolean)`                     | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `putVal(Object, Object, boolean)`                             | `java.util.concurrent.ConcurrentHashMap`      |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `currentTimeMillis()`                                         | `java.lang.System`                            |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `write0(FileDescriptor, long, int)`                           | `sun.nio.ch.UnixFileDispatcherImpl`           |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `storeStoreFence()`                                           | `jdk.internal.misc.Unsafe`                    |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `push(ForkJoinTask, ForkJoinPool, boolean)`                   | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `signalWork()`                                                | `java.util.concurrent.ForkJoinPool`           |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                                        | Location                                                   |
| ------: | ----: | ------------: | --------: | ----------------------------------------------- | ---------------------------------------------------------- |
|  -14.2% |   -87 | 41.1% → 37.2% | 611 → 524 | `accumulate(Double[], double[])`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -21.0% |   -17 |   5.5% → 4.5% |   81 → 64 | `vectorSum()`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -3.1% |   -11 | 24.1% → 24.6% | 358 → 347 | `distance(Double[], Double[])`                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |    -3 |   0.2% → 0.0% |     3 → 0 | `doExec()`                                      | `java.util.concurrent.ForkJoinTask`                        |
|  -75.0% |    -3 |   0.3% → 0.1% |     4 → 1 | `awaitDone(int, long)`                          | `java.util.concurrent.ForkJoinTask`                        |
|  -66.7% |    -2 |   0.2% → 0.1% |     3 → 1 | `join()`                                        | `java.util.concurrent.ForkJoinTask`                        |
|  -66.7% |    -2 |   0.2% → 0.1% |     3 → 1 | `checkIndex(int, int)`                          | `java.util.Objects`                                        |
|  -66.7% |    -2 |   0.2% → 0.1% |     3 → 1 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap`                                        |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `merge(Map, Map)`                               | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `merge(Object, Object, BiFunction)`             | `java.util.HashMap`                                        |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `<init>(HashMap)`                               | `java.util.HashMap$HashIterator`                           |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `toArray(IntFunction)`                          | `java.util.stream.ReferencePipeline`                       |
|  -50.0% |    -1 |          0.1% |     2 → 1 | `runWorker(ForkJoinPool$WorkQueue)`             | `java.util.concurrent.ForkJoinPool`                        |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `tryPoll()`                                     | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `externalQueue()`                               | `java.util.concurrent.ForkJoinPool`                        |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `putMapEntries(Map, boolean)`                   | `java.util.HashMap`                                        |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `awaitWork(ForkJoinPool$WorkQueue)`             | `java.util.concurrent.ForkJoinPool`                        |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `signalWaiters()`                               | `java.util.concurrent.ForkJoinTask`                        |

##### Ours

|  Change | Delta |             % |   Samples | Function                         | Location                                                   |
| ------: | ----: | ------------: | --------: | -------------------------------- | ---------------------------------------------------------- |
|  -14.2% |   -87 | 41.1% → 37.2% | 611 → 524 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -21.0% |   -17 |   5.5% → 4.5% |   81 → 64 | `vectorSum()`                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -3.1% |   -11 | 24.1% → 24.6% | 358 → 347 | `distance(Double[], Double[])`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `merge(Map, Map)`                | `org.renaissance.jdk.concurrent.JavaKMeans`                |

##### Standard library

|  Change | Delta |           % | Samples | Function                                        | Location                                      |
| ------: | ----: | ----------: | ------: | ----------------------------------------------- | --------------------------------------------- |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `doExec()`                                      | `java.util.concurrent.ForkJoinTask`           |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `awaitDone(int, long)`                          | `java.util.concurrent.ForkJoinTask`           |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `join()`                                        | `java.util.concurrent.ForkJoinTask`           |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `checkIndex(int, int)`                          | `java.util.Objects`                           |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap`                           |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `merge(Object, Object, BiFunction)`             | `java.util.HashMap`                           |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `<init>(HashMap)`                               | `java.util.HashMap$HashIterator`              |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `toArray(IntFunction)`                          | `java.util.stream.ReferencePipeline`          |
|  -50.0% |    -1 |        0.1% |   2 → 1 | `runWorker(ForkJoinPool$WorkQueue)`             | `java.util.concurrent.ForkJoinPool`           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `tryPoll()`                                     | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `externalQueue()`                               | `java.util.concurrent.ForkJoinPool`           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `putMapEntries(Map, boolean)`                   | `java.util.HashMap`                           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `awaitWork(ForkJoinPool$WorkQueue)`             | `java.util.concurrent.ForkJoinPool`           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `signalWaiters()`                               | `java.util.concurrent.ForkJoinTask`           |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % |   Samples | Function                                                    | Location                                                                              |
| ------: | ----: | ------------: | --------: | ----------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|  +20.2% |   +34 | 11.3% → 14.3% | 168 → 202 | `collectClusters(int[])`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   +3.8% |   +28 | 49.5% → 54.1% | 735 → 763 | `computeDirectly()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +44.8% |   +13 |   2.0% → 3.0% |   29 → 42 | `copyOf(Object[], int)`                                     | `java.util.Arrays`                                                                    |
|  +19.6% |   +10 |   3.4% → 4.3% |   51 → 61 | `computeIfAbsent(Object, Function)`                         | `java.util.HashMap`                                                                   |
|  +28.1% |    +9 |   2.2% → 2.9% |   32 → 41 | `grow()`                                                    | `java.util.ArrayList`                                                                 |
|  +28.1% |    +9 |   2.2% → 2.9% |   32 → 41 | `add(Object, Object[], int)`                                | `java.util.ArrayList`                                                                 |
|  +28.1% |    +9 |   2.2% → 2.9% |   32 → 41 | `add(Object)`                                               | `java.util.ArrayList`                                                                 |
|  +24.2% |    +8 |   2.2% → 2.9% |   33 → 41 | `grow(int)`                                                 | `java.util.ArrayList`                                                                 |
|  +61.5% |    +8 |   0.9% → 1.5% |   13 → 21 | `apply(Object)`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000e001204b38` |
| +266.7% |    +8 |   0.2% → 0.8% |    3 → 11 | `toArray()`                                                 | `java.util.ArrayList`                                                                 |
| +266.7% |    +8 |   0.2% → 0.8% |    3 → 11 | `<init>(Collection)`                                        | `java.util.ArrayList`                                                                 |
| +175.0% |    +7 |   0.3% → 0.8% |    4 → 11 | `lambda$merge$6(List, List)`                                | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
| +175.0% |    +7 |   0.3% → 0.8% |    4 → 11 | `apply(Object, Object)`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000e001205218`                |
|     new |    +7 |   0.0% → 0.5% |     0 → 7 | `invokeStatic(Object, Object)`                              | `java.lang.invoke.LambdaForm$DMH.0x000000e001001c00`                                  |
|     new |    +7 |   0.0% → 0.5% |     0 → 7 | `invoke(Object, Object, Object)`                            | `java.lang.invoke.LambdaForm$MH.0x000000e001082400`                                   |
|  +83.3% |    +5 |   0.4% → 0.8% |    6 → 11 | `merge(Object, Object, BiFunction)`                         | `java.util.HashMap`                                                                   |
|  +71.4% |    +5 |   0.5% → 0.9% |    7 → 12 | `lambda$merge$7(Map, Object, List)`                         | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  +71.4% |    +5 |   0.5% → 0.9% |    7 → 12 | `accept(Object, Object)`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000e001204d88`                |
|  +71.4% |    +5 |   0.5% → 0.9% |    7 → 12 | `forEach(BiConsumer)`                                       | `java.util.HashMap`                                                                   |
|  +80.0% |    +4 |   0.3% → 0.6% |     5 → 9 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`                                                       |

##### Ours

|  Change | Delta |             % |   Samples | Function                                                                      | Location                                                                              |
| ------: | ----: | ------------: | --------: | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|  +20.2% |   +34 | 11.3% → 14.3% | 168 → 202 | `collectClusters(int[])`                                                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   +3.8% |   +28 | 49.5% → 54.1% | 735 → 763 | `computeDirectly()`                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +61.5% |    +8 |   0.9% → 1.5% |   13 → 21 | `apply(Object)`                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000e001204b38` |
| +175.0% |    +7 |   0.3% → 0.8% |    4 → 11 | `lambda$merge$6(List, List)`                                                  | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
| +175.0% |    +7 |   0.3% → 0.8% |    4 → 11 | `apply(Object, Object)`                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000e001205218`                |
|  +71.4% |    +5 |   0.5% → 0.9% |    7 → 12 | `lambda$merge$7(Map, Object, List)`                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  +71.4% |    +5 |   0.5% → 0.9% |    7 → 12 | `accept(Object, Object)`                                                      | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000e001204d88`                |
|  +80.0% |    +4 |   0.3% → 0.6% |     5 → 9 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                   | `org.renaissance.core.Launcher`                                                       |
|  +80.0% |    +4 |   0.3% → 0.6% |     5 → 9 | `launchHarnessClass(String, String[])`                                        | `org.renaissance.core.Launcher`                                                       |
|  +80.0% |    +4 |   0.3% → 0.6% |     5 → 9 | `main(String[])`                                                              | `org.renaissance.core.Launcher`                                                       |
|  +75.0% |    +3 |   0.3% → 0.5% |     4 → 7 | `main(String[])`                                                              | `org.renaissance.harness.RenaissanceSuite$`                                           |
|  +75.0% |    +3 |   0.3% → 0.5% |     4 → 7 | `main(String[])`                                                              | `org.renaissance.harness.RenaissanceSuite`                                            |
| +100.0% |    +2 |   0.1% → 0.3% |     2 → 4 | `extractResource(String, Path)`                                               | `org.renaissance.core.ResourceUtils`                                                  |
| +100.0% |    +2 |   0.1% → 0.3% |     2 → 4 | `extractResources(Iterable, Path)`                                            | `org.renaissance.core.ResourceUtils`                                                  |
| +100.0% |    +2 |   0.1% → 0.3% |     2 → 4 | `createClassLoaderForModule(String)`                                          | `org.renaissance.core.ModuleLoader`                                                   |
|  +50.0% |    +2 |   0.3% → 0.4% |     4 → 6 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$`                                           |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `lambda$collectClusters$0(Double[])`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `add(double[], double[])`                                                     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `combineResults(double[], double[])`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `combineResults(Object, Object)`                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |

##### Standard library

|  Change | Delta |           % | Samples | Function                                         | Location                                             |
| ------: | ----: | ----------: | ------: | ------------------------------------------------ | ---------------------------------------------------- |
|  +44.8% |   +13 | 2.0% → 3.0% | 29 → 42 | `copyOf(Object[], int)`                          | `java.util.Arrays`                                   |
|  +19.6% |   +10 | 3.4% → 4.3% | 51 → 61 | `computeIfAbsent(Object, Function)`              | `java.util.HashMap`                                  |
|  +28.1% |    +9 | 2.2% → 2.9% | 32 → 41 | `grow()`                                         | `java.util.ArrayList`                                |
|  +28.1% |    +9 | 2.2% → 2.9% | 32 → 41 | `add(Object, Object[], int)`                     | `java.util.ArrayList`                                |
|  +28.1% |    +9 | 2.2% → 2.9% | 32 → 41 | `add(Object)`                                    | `java.util.ArrayList`                                |
|  +24.2% |    +8 | 2.2% → 2.9% | 33 → 41 | `grow(int)`                                      | `java.util.ArrayList`                                |
| +266.7% |    +8 | 0.2% → 0.8% |  3 → 11 | `toArray()`                                      | `java.util.ArrayList`                                |
| +266.7% |    +8 | 0.2% → 0.8% |  3 → 11 | `<init>(Collection)`                             | `java.util.ArrayList`                                |
|     new |    +7 | 0.0% → 0.5% |   0 → 7 | `invokeStatic(Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x000000e001001c00` |
|     new |    +7 | 0.0% → 0.5% |   0 → 7 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000e001082400`  |
|  +83.3% |    +5 | 0.4% → 0.8% |  6 → 11 | `merge(Object, Object, BiFunction)`              | `java.util.HashMap`                                  |
|  +71.4% |    +5 | 0.5% → 0.9% |  7 → 12 | `forEach(BiConsumer)`                            | `java.util.HashMap`                                  |
|  +75.0% |    +3 | 0.3% → 0.5% |   4 → 7 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                   |
|  +75.0% |    +3 | 0.3% → 0.5% |   4 → 7 | `invokeImpl(Object, Object[])`                   | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +75.0% |    +3 | 0.3% → 0.5% |   4 → 7 | `invoke(Object, Object[])`                       | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +75.0% |    +3 | 0.3% → 0.5% |   4 → 7 | `invoke(Object, Object[])`                       | `java.lang.reflect.Method`                           |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `nextNode()`                                     | `java.util.HashMap$HashIterator`                     |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `next()`                                         | `java.util.HashMap$EntryIterator`                    |
| +100.0% |    +2 | 0.1% → 0.3% |   2 → 4 | `transferTo(OutputStream)`                       | `java.io.InputStream`                                |
| +100.0% |    +2 | 0.1% → 0.3% |   2 → 4 | `copy(InputStream, Path, CopyOption[])`          | `java.nio.file.Files`                                |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |             % |       Samples | Function                                                  | Location                                                   |
| -----: | ----: | ------------: | ------------: | --------------------------------------------------------- | ---------------------------------------------------------- |
| -15.3% |  -106 | 46.8% → 41.8% |     695 → 589 | `vectorSum()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| -15.3% |  -106 | 46.8% → 41.8% |     695 → 589 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -6.2% |   -89 | 96.1% → 94.9% | 1,427 → 1,338 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| -14.2% |   -87 | 41.1% → 37.2% |     611 → 524 | `accumulate(Double[], double[])`                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -5.8% |   -83 | 97.0% → 96.2% | 1,440 → 1,357 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                        |
|  -5.8% |   -83 | 97.0% → 96.2% | 1,440 → 1,357 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                        |
|  -5.3% |   -78 | 99.3% → 99.0% | 1,474 → 1,396 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                        |
|  -5.2% |   -77 | 99.1% → 98.9% | 1,472 → 1,395 | `compute()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|  -5.2% |   -77 | 99.1% → 98.9% | 1,472 → 1,395 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                       |
|  -6.3% |   -73 | 78.3% → 77.3% | 1,163 → 1,090 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| -23.0% |   -71 | 20.8% → 16.9% |     309 → 238 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                        |
| -24.6% |   -69 | 18.9% → 15.0% |     281 → 212 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| -23.0% |   -66 | 19.3% → 15.7% |     287 → 221 | `computeClusterAverages()`                                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| -22.7% |   -65 | 19.3% → 15.7% |     286 → 221 | `average(List)`                                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -5.3% |   -59 | 74.9% → 74.8% | 1,113 → 1,054 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                        |
|  -5.2% |   -58 | 75.3% → 75.2% | 1,118 → 1,060 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                        |
|  -5.1% |   -55 |         72.7% | 1,080 → 1,025 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`                |
|  -3.1% |   -11 | 24.1% → 24.6% |     358 → 347 | `distance(Double[], Double[])`                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -2.5% |   -10 | 26.7% → 27.4% |     397 → 387 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                        |
| -34.6% |    -9 |   1.8% → 1.2% |       26 → 17 | `exec()`                                                  | `java.util.concurrent.ForkJoinTask$AdaptedCallable`        |

##### Ours

|  Change | Delta |             % |       Samples | Function                         | Location                                                               |
| ------: | ----: | ------------: | ------------: | -------------------------------- | ---------------------------------------------------------------------- |
|  -15.3% |  -106 | 46.8% → 41.8% |     695 → 589 | `vectorSum()`                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -15.3% |  -106 | 46.8% → 41.8% |     695 → 589 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -14.2% |   -87 | 41.1% → 37.2% |     611 → 524 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   -5.2% |   -77 | 99.1% → 98.9% | 1,472 → 1,395 | `compute()`                      | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  -24.6% |   -69 | 18.9% → 15.0% |     281 → 212 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -23.0% |   -66 | 19.3% → 15.7% |     287 → 221 | `computeClusterAverages()`       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -22.7% |   -65 | 19.3% → 15.7% |     286 → 221 | `average(List)`                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   -3.1% |   -11 | 24.1% → 24.6% |     358 → 347 | `distance(Double[], Double[])`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -24.2% |    -8 |   2.2% → 1.8% |       33 → 25 | `lambda$run$0(int, List, int)`   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -1.3% |    -7 | 36.3% → 37.7% |     539 → 532 | `findNearestCentroid()`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -22.6% |    -7 |   2.1% → 1.7% |       31 → 24 | `call()`                         | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000e0011ffbc0` |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `boxed(double[])`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |

##### Standard library

|  Change | Delta |             % |       Samples | Function                                                  | Location                                             |
| ------: | ----: | ------------: | ------------: | --------------------------------------------------------- | ---------------------------------------------------- |
|   -6.2% |   -89 | 96.1% → 94.9% | 1,427 → 1,338 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|   -5.8% |   -83 | 97.0% → 96.2% | 1,440 → 1,357 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                  |
|   -5.8% |   -83 | 97.0% → 96.2% | 1,440 → 1,357 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                  |
|   -5.3% |   -78 | 99.3% → 99.0% | 1,474 → 1,396 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                  |
|   -5.2% |   -77 | 99.1% → 98.9% | 1,472 → 1,395 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                 |
|   -6.3% |   -73 | 78.3% → 77.3% | 1,163 → 1,090 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|  -23.0% |   -71 | 20.8% → 16.9% |     309 → 238 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                  |
|   -5.3% |   -59 | 74.9% → 74.8% | 1,113 → 1,054 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                  |
|   -5.2% |   -58 | 75.3% → 75.2% | 1,118 → 1,060 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                  |
|   -5.1% |   -55 |         72.7% | 1,080 → 1,025 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`          |
|   -2.5% |   -10 | 26.7% → 27.4% |     397 → 387 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                  |
|  -34.6% |    -9 |   1.8% → 1.2% |       26 → 17 | `exec()`                                                  | `java.util.concurrent.ForkJoinTask$AdaptedCallable`  |
| removed |    -4 |   0.3% → 0.0% |         4 → 0 | `invokeStatic(Object, Object)`                            | `java.lang.invoke.LambdaForm$DMH.0x0000000501001c00` |
| removed |    -4 |   0.3% → 0.0% |         4 → 0 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000000501082400`  |
|  -66.7% |    -2 |   0.2% → 0.1% |         3 → 1 | `checkIndex(int, int)`                                    | `java.util.Objects`                                  |
|  -66.7% |    -2 |   0.2% → 0.1% |         3 → 1 | `get(int)`                                                | `java.util.ArrayList`                                |
|  -50.0% |    -2 |   0.3% → 0.1% |         4 → 2 | `putVal(int, Object, Object, boolean, boolean)`           | `java.util.HashMap`                                  |
|  -25.0% |    -2 |   0.5% → 0.4% |         8 → 6 | `putMapEntries(Map, boolean)`                             | `java.util.HashMap`                                  |
|  -25.0% |    -2 |   0.5% → 0.4% |         8 → 6 | `<init>(Map)`                                             | `java.util.HashMap`                                  |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `<init>(HashMap)`                                         | `java.util.HashMap$HashIterator`                     |

# Allocated heap profile diff

Allocated 37 GiB → 37.6 GiB (+558.565 MiB, +1.5%) over 1,980 samples → 1,897 samples (19.2 MiB → 20.3 MiB per sample).

| Category         | Change |        Delta |             % |                Size |       Samples |
| ---------------- | -----: | -----------: | ------------: | ------------------: | ------------: |
| Standard library |  +2.5% | +880.707 MiB | 94.2% → 95.1% | 34.9 GiB → 35.8 GiB | 1,853 → 1,792 |
| Ours             | -14.6% | -322.142 MiB |   5.8% → 4.9% | 2.15 GiB → 1.84 GiB |     125 → 103 |
| Unknown          |  -2.9% |        -64 B |         <0.1% |  2.16 KiB → 2.1 KiB |             2 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|    Change |        Delta |             % |                Size |       Samples | Function                                     | Location                                                   |
| --------: | -----------: | ------------: | ------------------: | ------------: | -------------------------------------------- | ---------------------------------------------------------- |
|     +1.4% | +485.496 MiB | 92.9% → 92.8% | 34.4 GiB → 34.9 GiB | 1,732 → 1,624 | `copyOf(Object[], int)`                      | `java.util.Arrays`                                         |
|   +439.7% | +373.968 MiB |   0.2% → 1.2% |  85.1 MiB → 459 MiB |        5 → 10 | `createSubtask(int, int)`                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +20983.1% | +158.931 MiB |  <0.1% → 0.4% |   776 KiB → 160 MiB |         2 → 4 | `copyOfRangeByte(byte[], int, int)`          | `java.util.Arrays`                                         |
|       new | +131.206 MiB |   0.0% → 0.3% |       0 B → 131 MiB |         0 → 2 | `entrySet()`                                 | `java.util.HashMap`                                        |
|    +67.3% | +114.514 MiB |   0.4% → 0.7% |   170 MiB → 285 MiB |        5 → 10 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                                        |
|       new |  +104.22 MiB |   0.0% → 0.3% |       0 B → 104 MiB |         0 → 1 | `computeClusterAverages()`                   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|   +269.2% |  +70.693 MiB |   0.1% → 0.3% |   26.3 MiB → 97 MiB |             6 | `grow(int)`                                  | `java.util.ArrayList`                                      |
|    +77.5% |   +60.53 MiB |   0.2% → 0.4% |  78.1 MiB → 139 MiB |         4 → 7 | `resize()`                                   | `java.util.HashMap`                                        |
|       new |  +20.831 MiB |   0.0% → 0.1% |      0 B → 20.8 MiB |         0 → 1 | `initTable()`                                | `java.util.concurrent.ConcurrentHashMap`                   |
|       new |  +15.397 MiB |  0.0% → <0.1% |      0 B → 15.4 MiB |         0 → 1 | `lambda$run$0(int, List, int)`               | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|   +639.4% |  +11.719 MiB |         <0.1% | 1.83 MiB → 13.6 MiB |        3 → 21 | `copyOf(Object[], int, Class)`               | `java.util.Arrays`                                         |
|   +679.5% |   +5.127 MiB |         <0.1% |  773 KiB → 5.88 MiB |        2 → 16 | `mapToObj(IntFunction, int)`                 | `java.util.stream.IntPipeline`                             |
|   +143.2% |   +4.091 MiB |         <0.1% | 2.86 MiB → 6.95 MiB |        8 → 19 | `valueOf(double)`                            | `java.lang.Double`                                         |
|    +24.8% |   +1.054 MiB |         <0.1% |  4.25 MiB → 5.3 MiB |       12 → 14 | `opWrapSink(int, Sink)`                      | `java.util.stream.IntPipeline$1`                           |
|   +249.6% | +983.406 KiB |         <0.1% |  394 KiB → 1.35 MiB |         1 → 2 | `<init>(int)`                                | `jdk.internal.org.objectweb.asm.ByteVector`                |
|       new | +932.875 KiB |  0.0% → <0.1% |       0 B → 933 KiB |         0 → 2 | `newLinkedHashMap(int)`                      | `java.util.LinkedHashMap`                                  |
|       new | +793.398 KiB |  0.0% → <0.1% |       0 B → 793 KiB |         0 → 2 | `compress(char[], int, int)`                 | `java.lang.StringUTF16`                                    |
|       new | +790.343 KiB |  0.0% → <0.1% |       0 B → 790 KiB |         0 → 2 | `lookupKey(Object)`                          | `jdk.internal.util.ReferencedKeyMap`                       |
|       new | +790.203 KiB |  0.0% → <0.1% |       0 B → 790 KiB |         0 → 2 | `clone()`                                    | `java.lang.Object`                                         |
|       new | +781.031 KiB |  0.0% → <0.1% |       0 B → 781 KiB |         0 → 2 | `<init>(ClassWriter)`                        | `jdk.internal.org.objectweb.asm.SymbolTable`               |

##### Standard library

|    Change |        Delta |             % |                Size |       Samples | Function                                     | Location                                     |
| --------: | -----------: | ------------: | ------------------: | ------------: | -------------------------------------------- | -------------------------------------------- |
|     +1.4% | +485.496 MiB | 92.9% → 92.8% | 34.4 GiB → 34.9 GiB | 1,732 → 1,624 | `copyOf(Object[], int)`                      | `java.util.Arrays`                           |
| +20983.1% | +158.931 MiB |  <0.1% → 0.4% |   776 KiB → 160 MiB |         2 → 4 | `copyOfRangeByte(byte[], int, int)`          | `java.util.Arrays`                           |
|       new | +131.206 MiB |   0.0% → 0.3% |       0 B → 131 MiB |         0 → 2 | `entrySet()`                                 | `java.util.HashMap`                          |
|    +67.3% | +114.514 MiB |   0.4% → 0.7% |   170 MiB → 285 MiB |        5 → 10 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                          |
|   +269.2% |  +70.693 MiB |   0.1% → 0.3% |   26.3 MiB → 97 MiB |             6 | `grow(int)`                                  | `java.util.ArrayList`                        |
|    +77.5% |   +60.53 MiB |   0.2% → 0.4% |  78.1 MiB → 139 MiB |         4 → 7 | `resize()`                                   | `java.util.HashMap`                          |
|       new |  +20.831 MiB |   0.0% → 0.1% |      0 B → 20.8 MiB |         0 → 1 | `initTable()`                                | `java.util.concurrent.ConcurrentHashMap`     |
|   +639.4% |  +11.719 MiB |         <0.1% | 1.83 MiB → 13.6 MiB |        3 → 21 | `copyOf(Object[], int, Class)`               | `java.util.Arrays`                           |
|   +679.5% |   +5.127 MiB |         <0.1% |  773 KiB → 5.88 MiB |        2 → 16 | `mapToObj(IntFunction, int)`                 | `java.util.stream.IntPipeline`               |
|   +143.2% |   +4.091 MiB |         <0.1% | 2.86 MiB → 6.95 MiB |        8 → 19 | `valueOf(double)`                            | `java.lang.Double`                           |
|    +24.8% |   +1.054 MiB |         <0.1% |  4.25 MiB → 5.3 MiB |       12 → 14 | `opWrapSink(int, Sink)`                      | `java.util.stream.IntPipeline$1`             |
|   +249.6% | +983.406 KiB |         <0.1% |  394 KiB → 1.35 MiB |         1 → 2 | `<init>(int)`                                | `jdk.internal.org.objectweb.asm.ByteVector`  |
|       new | +932.875 KiB |  0.0% → <0.1% |       0 B → 933 KiB |         0 → 2 | `newLinkedHashMap(int)`                      | `java.util.LinkedHashMap`                    |
|       new | +793.398 KiB |  0.0% → <0.1% |       0 B → 793 KiB |         0 → 2 | `compress(char[], int, int)`                 | `java.lang.StringUTF16`                      |
|       new | +790.343 KiB |  0.0% → <0.1% |       0 B → 790 KiB |         0 → 2 | `lookupKey(Object)`                          | `jdk.internal.util.ReferencedKeyMap`         |
|       new | +790.203 KiB |  0.0% → <0.1% |       0 B → 790 KiB |         0 → 2 | `clone()`                                    | `java.lang.Object`                           |
|       new | +781.031 KiB |  0.0% → <0.1% |       0 B → 781 KiB |         0 → 2 | `<init>(ClassWriter)`                        | `jdk.internal.org.objectweb.asm.SymbolTable` |
|       new | +777.218 KiB |  0.0% → <0.1% |       0 B → 777 KiB |         0 → 2 | `fillInStackTrace(int)`                      | `java.lang.Throwable`                        |
|       new |   +706.5 KiB |  0.0% → <0.1% |       0 B → 707 KiB |         0 → 2 | `builder(long, IntFunction)`                 | `java.util.stream.Nodes`                     |
|       new |  +421.89 KiB |  0.0% → <0.1% |       0 B → 422 KiB |         0 → 1 | `putVal(Object, Object, boolean)`            | `java.util.concurrent.ConcurrentHashMap`     |

##### Ours

|  Change |        Delta |            % |               Size | Samples | Function                       | Location                                                   |
| ------: | -----------: | -----------: | -----------------: | ------: | ------------------------------ | ---------------------------------------------------------- |
| +439.7% | +373.968 MiB |  0.2% → 1.2% | 85.1 MiB → 459 MiB |  5 → 10 | `createSubtask(int, int)`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     new |  +104.22 MiB |  0.0% → 0.3% |      0 B → 104 MiB |   0 → 1 | `computeClusterAverages()`     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|     new |  +15.397 MiB | 0.0% → <0.1% |     0 B → 15.4 MiB |   0 → 1 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |        Delta |            % |                 Size | Samples | Function                                | Location                                                   |
| ------: | -----------: | -----------: | -------------------: | ------: | --------------------------------------- | ---------------------------------------------------------- |
|  -35.9% | -566.418 MiB |  4.2% → 2.6% | 1.54 GiB → 1,009 MiB | 69 → 71 | `findNearestCentroid()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed | -158.452 MiB |  0.4% → 0.0% |        158 MiB → 0 B |   1 → 0 | `<init>(int)`                           | `java.io.ByteArrayOutputStream`                            |
|  -86.6% |   -74.99 MiB | 0.2% → <0.1% |  86.6 MiB → 11.6 MiB |   6 → 2 | `lambda$collectClusters$0(Double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -81.9% |  -45.091 MiB | 0.1% → <0.1% |    55.1 MiB → 10 MiB |   3 → 2 | `vectorSum()`                           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -45.5% |  -39.785 MiB |  0.2% → 0.1% |  87.4 MiB → 47.6 MiB |   5 → 4 | `createSubtask(int, int)`               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -23.2% |  -33.615 MiB |  0.4% → 0.3% |    145 MiB → 111 MiB |   3 → 4 | `collectClusters(int[])`                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -24.8% |  -27.466 MiB |  0.3% → 0.2% |   111 MiB → 83.2 MiB |   4 → 3 | `lambda$merge$6(List, List)`            | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |  -21.333 MiB |  0.1% → 0.0% |       21.3 MiB → 0 B |   1 → 0 | `replace(byte[], char, char)`           | `java.lang.StringLatin1`                                   |
|  -30.3% |  -12.725 MiB |         0.1% |  42.1 MiB → 29.3 MiB |   3 → 2 | `add(double[], double[])`               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -88.7% |    -7.65 MiB |        <0.1% |   8.63 MiB → 999 KiB |  23 → 3 | `lambda$generateData$4(int)`            | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |   -7.028 MiB | <0.1% → 0.0% |       7.03 MiB → 0 B |   3 → 0 | `merge(Map, Map)`                       | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |   -2.761 MiB | <0.1% → 0.0% |       2.76 MiB → 0 B |   7 → 0 | `range(int, int)`                       | `java.util.stream.IntStream`                               |
|  -44.7% |   -2.578 MiB |        <0.1% |  5.77 MiB → 3.19 MiB |  12 → 8 | `<init>(InputStream, Inflater, int)`    | `java.util.zip.InflaterInputStream`                        |
| removed |   -1.098 MiB | <0.1% → 0.0% |        1.1 MiB → 0 B |   1 → 0 | `opWrapSink(int, Sink)`                 | `java.util.stream.DoublePipeline$1`                        |
|   -8.0% |   -1.083 MiB |        <0.1% |  13.6 MiB → 12.5 MiB | 27 → 23 | `copyOf(byte[], int)`                   | `java.util.Arrays`                                         |
| removed |  -977.96 KiB | <0.1% → 0.0% |        978 KiB → 0 B |   1 → 0 | `collectGarbage(String)`                | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`   |
| removed | -772.648 KiB | <0.1% → 0.0% |        773 KiB → 0 B |   2 → 0 | `addConstantUtf8(String)`               | `jdk.internal.org.objectweb.asm.SymbolTable`               |
|  -10.0% | -516.085 KiB |        <0.1% |  5.05 MiB → 4.55 MiB | 14 → 13 | `intStream(Spliterator$OfInt, boolean)` | `java.util.stream.StreamSupport`                           |
| removed | -399.929 KiB | <0.1% → 0.0% |        400 KiB → 0 B |   1 → 0 | `newArray(Class, int)`                  | `java.lang.reflect.Array`                                  |
| removed | -394.335 KiB | <0.1% → 0.0% |        394 KiB → 0 B |   1 → 0 | `parseName(byte[], int)`                | `java.util.jar.Manifest`                                   |

##### Standard library

|  Change |        Delta |            % |                Size | Samples | Function                                                                        | Location                                       |
| ------: | -----------: | -----------: | ------------------: | ------: | ------------------------------------------------------------------------------- | ---------------------------------------------- |
| removed | -158.452 MiB |  0.4% → 0.0% |       158 MiB → 0 B |   1 → 0 | `<init>(int)`                                                                   | `java.io.ByteArrayOutputStream`                |
| removed |  -21.333 MiB |  0.1% → 0.0% |      21.3 MiB → 0 B |   1 → 0 | `replace(byte[], char, char)`                                                   | `java.lang.StringLatin1`                       |
| removed |   -2.761 MiB | <0.1% → 0.0% |      2.76 MiB → 0 B |   7 → 0 | `range(int, int)`                                                               | `java.util.stream.IntStream`                   |
|  -44.7% |   -2.578 MiB |        <0.1% | 5.77 MiB → 3.19 MiB |  12 → 8 | `<init>(InputStream, Inflater, int)`                                            | `java.util.zip.InflaterInputStream`            |
| removed |   -1.098 MiB | <0.1% → 0.0% |       1.1 MiB → 0 B |   1 → 0 | `opWrapSink(int, Sink)`                                                         | `java.util.stream.DoublePipeline$1`            |
|   -8.0% |   -1.083 MiB |        <0.1% | 13.6 MiB → 12.5 MiB | 27 → 23 | `copyOf(byte[], int)`                                                           | `java.util.Arrays`                             |
| removed | -772.648 KiB | <0.1% → 0.0% |       773 KiB → 0 B |   2 → 0 | `addConstantUtf8(String)`                                                       | `jdk.internal.org.objectweb.asm.SymbolTable`   |
|  -10.0% | -516.085 KiB |        <0.1% | 5.05 MiB → 4.55 MiB | 14 → 13 | `intStream(Spliterator$OfInt, boolean)`                                         | `java.util.stream.StreamSupport`               |
| removed | -399.929 KiB | <0.1% → 0.0% |       400 KiB → 0 B |   1 → 0 | `newArray(Class, int)`                                                          | `java.lang.reflect.Array`                      |
| removed | -394.335 KiB | <0.1% → 0.0% |       394 KiB → 0 B |   1 → 0 | `parseName(byte[], int)`                                                        | `java.util.jar.Manifest`                       |
| removed | -389.968 KiB | <0.1% → 0.0% |       390 KiB → 0 B |   1 → 0 | `loadConvert(char[], int, int, StringBuilder)`                                  | `java.util.Properties`                         |
| removed | -386.578 KiB | <0.1% → 0.0% |       387 KiB → 0 B |   1 → 0 | `newString(byte[], int, int)`                                                   | `java.lang.StringLatin1`                       |
| removed | -386.382 KiB | <0.1% → 0.0% |       386 KiB → 0 B |   1 → 0 | `newNode(int, Object, Object, HashMap$Node)`                                    | `java.util.LinkedHashMap`                      |
| removed | -386.242 KiB | <0.1% → 0.0% |       386 KiB → 0 B |   1 → 0 | `enlarge(int)`                                                                  | `jdk.internal.org.objectweb.asm.ByteVector`    |
| removed | -336.507 KiB | <0.1% → 0.0% |       337 KiB → 0 B |   1 → 0 | `visitMethod(int, String, String, String, String[])`                            | `jdk.internal.org.objectweb.asm.ClassWriter`   |
|  -33.8% |  -197.82 KiB |        <0.1% |   586 KiB → 388 KiB |   2 → 1 | `allocateInstance(Class)`                                                       | `jdk.internal.misc.Unsafe`                     |
| removed |  -64.671 KiB | <0.1% → 0.0% |      64.7 KiB → 0 B |   1 → 0 | `getBytes()`                                                                    | `jdk.internal.loader.URLClassPath$JarLoader$2` |
|   -1.8% |   -7.265 KiB |        <0.1% |   395 KiB → 388 KiB |       1 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                        |

##### Ours

|  Change |        Delta |            % |                 Size | Samples | Function                             | Location                                                   |
| ------: | -----------: | -----------: | -------------------: | ------: | ------------------------------------ | ---------------------------------------------------------- |
|  -35.9% | -566.418 MiB |  4.2% → 2.6% | 1.54 GiB → 1,009 MiB | 69 → 71 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -86.6% |   -74.99 MiB | 0.2% → <0.1% |  86.6 MiB → 11.6 MiB |   6 → 2 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -81.9% |  -45.091 MiB | 0.1% → <0.1% |    55.1 MiB → 10 MiB |   3 → 2 | `vectorSum()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -45.5% |  -39.785 MiB |  0.2% → 0.1% |  87.4 MiB → 47.6 MiB |   5 → 4 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -23.2% |  -33.615 MiB |  0.4% → 0.3% |    145 MiB → 111 MiB |   3 → 4 | `collectClusters(int[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -24.8% |  -27.466 MiB |  0.3% → 0.2% |   111 MiB → 83.2 MiB |   4 → 3 | `lambda$merge$6(List, List)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -30.3% |  -12.725 MiB |         0.1% |  42.1 MiB → 29.3 MiB |   3 → 2 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -88.7% |    -7.65 MiB |        <0.1% |   8.63 MiB → 999 KiB |  23 → 3 | `lambda$generateData$4(int)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |   -7.028 MiB | <0.1% → 0.0% |       7.03 MiB → 0 B |   3 → 0 | `merge(Map, Map)`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |  -977.96 KiB | <0.1% → 0.0% |        978 KiB → 0 B |   1 → 0 | `collectGarbage(String)`             | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`   |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|    Change |        Delta |             % |                Size |       Samples | Function                                        | Location                                                   |
| --------: | -----------: | ------------: | ------------------: | ------------: | ----------------------------------------------- | ---------------------------------------------------------- |
|    +14.5% |   +2.356 GiB | 43.9% → 49.5% | 16.2 GiB → 18.6 GiB |     896 → 841 | `grow(int)`                                     | `java.util.ArrayList`                                      |
|    +32.4% |   +1.095 GiB |  9.1% → 11.9% | 3.39 GiB → 4.48 GiB |     226 → 223 | `grow()`                                        | `java.util.ArrayList`                                      |
|    +32.4% |   +1.095 GiB |  9.1% → 11.9% | 3.39 GiB → 4.48 GiB |     226 → 223 | `add(Object, Object[], int)`                    | `java.util.ArrayList`                                      |
|    +32.4% |   +1.095 GiB |  9.1% → 11.9% | 3.39 GiB → 4.48 GiB |     226 → 223 | `add(Object)`                                   | `java.util.ArrayList`                                      |
|    +24.7% | +969.488 MiB | 10.4% → 12.7% | 3.84 GiB → 4.78 GiB |     242 → 237 | `collectClusters(int[])`                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     +1.5% | +559.526 MiB |         99.4% | 36.8 GiB → 37.4 GiB | 1,852 → 1,770 | `doExec()`                                      | `java.util.concurrent.ForkJoinTask`                        |
|     +1.4% | +544.128 MiB |         99.4% | 36.8 GiB → 37.3 GiB | 1,852 → 1,769 | `compute()`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|     +1.4% | +544.128 MiB |         99.4% | 36.8 GiB → 37.3 GiB | 1,852 → 1,769 | `exec()`                                        | `java.util.concurrent.RecursiveTask`                       |
|     +1.4% | +497.216 MiB | 92.9% → 92.8% | 34.4 GiB → 34.9 GiB | 1,735 → 1,645 | `copyOf(Object[], int)`                         | `java.util.Arrays`                                         |
|     +7.3% |  +403.07 MiB | 14.5% → 15.4% | 5.38 GiB → 5.77 GiB |     311 → 308 | `computeDirectly()`                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +439.7% | +373.968 MiB |   0.2% → 1.2% |  85.1 MiB → 459 MiB |        5 → 10 | `createSubtask(int, int)`                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +1944.2% | +350.136 MiB |  <0.1% → 1.0% |    18 MiB → 368 MiB |        2 → 11 | `putMapEntries(Map, boolean)`                   | `java.util.HashMap`                                        |
|  +1944.2% | +350.136 MiB |  <0.1% → 1.0% |    18 MiB → 368 MiB |        2 → 11 | `<init>(Map)`                                   | `java.util.HashMap`                                        |
|  +1188.6% | +218.552 MiB |  <0.1% → 0.6% |  18.4 MiB → 237 MiB |         3 → 9 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap`                                        |
|       new |  +206.79 MiB |   0.0% → 0.5% |       0 B → 207 MiB |       0 → 118 | `invokeStatic(Object, Object)`                  | `java.lang.invoke.LambdaForm$DMH.0x000000e001001c00`       |
|       new |  +206.79 MiB |   0.0% → 0.5% |       0 B → 207 MiB |       0 → 118 | `invoke(Object, Object, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000e001082400`        |
| +21034.1% | +159.317 MiB |  <0.1% → 0.4% |   776 KiB → 160 MiB |         2 → 5 | `copyOfRange(byte[], int, int)`                 | `java.util.Arrays`                                         |
| +20983.1% | +158.931 MiB |  <0.1% → 0.4% |   776 KiB → 160 MiB |         2 → 4 | `copyOfRangeByte(byte[], int, int)`             | `java.util.Arrays`                                         |
| +41953.7% |  +158.27 MiB |  <0.1% → 0.4% |   386 KiB → 159 MiB |             1 | `<init>(Charset, byte[], int, int)`             | `java.lang.String`                                         |
| +41953.7% |  +158.27 MiB |  <0.1% → 0.4% |   386 KiB → 159 MiB |             1 | `<init>(byte[], int, int, Charset)`             | `java.lang.String`                                         |

##### Standard library

|    Change |        Delta |             % |                Size |       Samples | Function                                                  | Location                                             |
| --------: | -----------: | ------------: | ------------------: | ------------: | --------------------------------------------------------- | ---------------------------------------------------- |
|    +14.5% |   +2.356 GiB | 43.9% → 49.5% | 16.2 GiB → 18.6 GiB |     896 → 841 | `grow(int)`                                               | `java.util.ArrayList`                                |
|    +32.4% |   +1.095 GiB |  9.1% → 11.9% | 3.39 GiB → 4.48 GiB |     226 → 223 | `grow()`                                                  | `java.util.ArrayList`                                |
|    +32.4% |   +1.095 GiB |  9.1% → 11.9% | 3.39 GiB → 4.48 GiB |     226 → 223 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                                |
|    +32.4% |   +1.095 GiB |  9.1% → 11.9% | 3.39 GiB → 4.48 GiB |     226 → 223 | `add(Object)`                                             | `java.util.ArrayList`                                |
|     +1.5% | +559.526 MiB |         99.4% | 36.8 GiB → 37.4 GiB | 1,852 → 1,770 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                  |
|     +1.4% | +544.128 MiB |         99.4% | 36.8 GiB → 37.3 GiB | 1,852 → 1,769 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                 |
|     +1.4% | +497.216 MiB | 92.9% → 92.8% | 34.4 GiB → 34.9 GiB | 1,735 → 1,645 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                                   |
|  +1944.2% | +350.136 MiB |  <0.1% → 1.0% |    18 MiB → 368 MiB |        2 → 11 | `putMapEntries(Map, boolean)`                             | `java.util.HashMap`                                  |
|  +1944.2% | +350.136 MiB |  <0.1% → 1.0% |    18 MiB → 368 MiB |        2 → 11 | `<init>(Map)`                                             | `java.util.HashMap`                                  |
|  +1188.6% | +218.552 MiB |  <0.1% → 0.6% |  18.4 MiB → 237 MiB |         3 → 9 | `putVal(int, Object, Object, boolean, boolean)`           | `java.util.HashMap`                                  |
|       new |  +206.79 MiB |   0.0% → 0.5% |       0 B → 207 MiB |       0 → 118 | `invokeStatic(Object, Object)`                            | `java.lang.invoke.LambdaForm$DMH.0x000000e001001c00` |
|       new |  +206.79 MiB |   0.0% → 0.5% |       0 B → 207 MiB |       0 → 118 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x000000e001082400`  |
| +21034.1% | +159.317 MiB |  <0.1% → 0.4% |   776 KiB → 160 MiB |         2 → 5 | `copyOfRange(byte[], int, int)`                           | `java.util.Arrays`                                   |
| +20983.1% | +158.931 MiB |  <0.1% → 0.4% |   776 KiB → 160 MiB |         2 → 4 | `copyOfRangeByte(byte[], int, int)`                       | `java.util.Arrays`                                   |
| +41953.7% |  +158.27 MiB |  <0.1% → 0.4% |   386 KiB → 159 MiB |             1 | `<init>(Charset, byte[], int, int)`                       | `java.lang.String`                                   |
| +41953.7% |  +158.27 MiB |  <0.1% → 0.4% |   386 KiB → 159 MiB |             1 | `<init>(byte[], int, int, Charset)`                       | `java.lang.String`                                   |
| +20710.5% | +157.885 MiB |  <0.1% → 0.4% |   781 KiB → 159 MiB |         2 → 1 | `parseName(byte[], int)`                                  | `java.util.jar.Manifest`                             |
|     +3.3% | +139.247 MiB | 11.1% → 11.3% | 4.09 GiB → 4.23 GiB |     198 → 218 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                  |
|       new | +131.206 MiB |   0.0% → 0.3% |       0 B → 131 MiB |         0 → 2 | `entrySet()`                                              | `java.util.HashMap`                                  |
|    +67.3% | +114.514 MiB |   0.4% → 0.7% |   170 MiB → 285 MiB |        5 → 10 | `newNode(int, Object, Object, HashMap$Node)`              | `java.util.HashMap`                                  |

##### Ours

|  Change |        Delta |             % |                Size |       Samples | Function                                         | Location                                                               |
| ------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------ | ---------------------------------------------------------------------- |
|  +24.7% | +969.488 MiB | 10.4% → 12.7% | 3.84 GiB → 4.78 GiB |     242 → 237 | `collectClusters(int[])`                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   +1.4% | +544.128 MiB |         99.4% | 36.8 GiB → 37.3 GiB | 1,852 → 1,769 | `compute()`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|   +7.3% |  +403.07 MiB | 14.5% → 15.4% | 5.38 GiB → 5.77 GiB |     311 → 308 | `computeDirectly()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| +439.7% | +373.968 MiB |   0.2% → 1.2% |  85.1 MiB → 459 MiB |        5 → 10 | `createSubtask(int, int)`                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| +206.0% |  +94.073 MiB |   0.1% → 0.4% |  45.7 MiB → 140 MiB |         5 → 4 | `computeClusterAverages()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| +206.0% |  +94.073 MiB |   0.1% → 0.4% |  45.7 MiB → 140 MiB |         5 → 4 | `computeDirectly()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| +765.4% |  +21.867 MiB |  <0.1% → 0.1% | 2.86 MiB → 24.7 MiB |        8 → 68 | `apply(int)`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000e0011a18d8` |
| +143.2% |   +4.091 MiB |         <0.1% | 2.86 MiB → 6.95 MiB |        8 → 19 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +30.1% | +586.265 KiB |         <0.1% |  1.9 MiB → 2.47 MiB |             5 | `parse(String[])`                                | `org.renaissance.harness.ConfigParser`                                 |
|  +49.5% | +554.914 KiB |         <0.1% | 1.09 MiB → 1.64 MiB |             3 | `runParser(Seq, Object, List, OParserSetup)`     | `scopt.ORunner$`                                                       |
| +121.5% | +469.265 KiB |         <0.1% |   386 KiB → 856 KiB |         1 → 2 | `<init>()`                                       | `org.renaissance.harness.Config`                                       |
| +105.3% | +406.984 KiB |         <0.1% |   386 KiB → 793 KiB |         1 → 2 | `create(Path, URI)`                              | `org.renaissance.core.ModuleLoader`                                    |
| +103.5% | +403.429 KiB |         <0.1% |   390 KiB → 793 KiB |         1 → 2 | `loadProperties(URL)`                            | `org.renaissance.core.ResourceUtils`                                   |
| +103.5% | +403.429 KiB |         <0.1% |   390 KiB → 793 KiB |         1 → 2 | `loadPropertiesAsMap(URL)`                       | `org.renaissance.core.ResourceUtils`                                   |
|     new | +402.671 KiB |  0.0% → <0.1% |       0 B → 403 KiB |         0 → 1 | `nonArgs$1(List)`                                | `scopt.ORunner$`                                                       |
|     new |  +398.57 KiB |  0.0% → <0.1% |       0 B → 399 KiB |         0 → 1 | `<init>()`                                       | `org.renaissance.harness.PolicyType$`                                  |
|     new |  +398.57 KiB |  0.0% → <0.1% |       0 B → 399 KiB |         0 → 1 | `<clinit>()`                                     | `org.renaissance.harness.PolicyType$`                                  |
| +101.3% | +391.531 KiB |         <0.1% |   387 KiB → 778 KiB |         1 → 2 | `extractResource(String, Path)`                  | `org.renaissance.core.ResourceUtils`                                   |
| +101.3% | +391.531 KiB |         <0.1% |   387 KiB → 778 KiB |         1 → 2 | `extractResources(Iterable, Path)`               | `org.renaissance.core.ResourceUtils`                                   |
| +101.3% | +391.531 KiB |         <0.1% |   387 KiB → 778 KiB |         1 → 2 | `createClassLoaderForModule(String)`             | `org.renaissance.core.ModuleLoader`                                    |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                 Size |       Samples | Function                            | Location                                                               |
| ------: | -----------: | ------------: | -------------------: | ------------: | ----------------------------------- | ---------------------------------------------------------------------- |
|   -9.9% |   -1.801 GiB | 49.1% → 43.6% |  18.2 GiB → 16.4 GiB |     845 → 810 | `toArray()`                         | `java.util.ArrayList`                                                  |
|   -1.8% | -581.536 MiB | 84.1% → 81.4% |  31.2 GiB → 30.6 GiB | 1,519 → 1,431 | `lambda$merge$6(List, List)`        | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -1.8% | -581.536 MiB | 84.1% → 81.4% |  31.2 GiB → 30.6 GiB | 1,519 → 1,431 | `apply(Object, Object)`             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000e001205218` |
|   -1.8% | -581.536 MiB | 84.1% → 81.4% |  31.2 GiB → 30.6 GiB | 1,519 → 1,431 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`                                                    |
|   -1.8% | -581.536 MiB | 84.1% → 81.4% |  31.2 GiB → 30.6 GiB | 1,519 → 1,431 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -1.8% | -581.536 MiB | 84.1% → 81.4% |  31.2 GiB → 30.6 GiB | 1,519 → 1,431 | `accept(Object, Object)`            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000e001204d88` |
|   -1.8% | -581.536 MiB | 84.1% → 81.4% |  31.2 GiB → 30.6 GiB | 1,519 → 1,431 | `forEach(BiConsumer)`               | `java.util.HashMap`                                                    |
|  -35.9% | -566.418 MiB |   4.2% → 2.6% | 1.54 GiB → 1,009 MiB |       69 → 71 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -4.6% | -364.905 MiB | 20.9% → 19.6% |  7.72 GiB → 7.37 GiB |     203 → 215 | `invoke()`                          | `java.util.concurrent.ForkJoinTask`                                    |
|   -4.0% | -312.821 MiB | 20.6% → 19.5% |  7.62 GiB → 7.32 GiB |     197 → 210 | `lambda$run$0(int, List, int)`      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -4.0% | -312.821 MiB | 20.6% → 19.5% |  7.62 GiB → 7.32 GiB |     197 → 210 | `call()`                            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000e0011ffbc0` |
|   -4.0% | -312.821 MiB | 20.6% → 19.5% |  7.62 GiB → 7.32 GiB |     197 → 210 | `exec()`                            | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                    |
|   -3.5% | -306.445 MiB | 23.1% → 22.0% |  8.56 GiB → 8.27 GiB |     350 → 381 | `<init>(Collection)`                | `java.util.ArrayList`                                                  |
|   -1.1% | -247.624 MiB | 60.7% → 59.2% |  22.5 GiB → 22.2 GiB | 1,165 → 1,047 | `addAll(Collection)`                | `java.util.ArrayList`                                                  |
|   -0.7% | -238.428 MiB | 84.2% → 82.3% |  31.2 GiB → 30.9 GiB | 1,524 → 1,442 | `merge(Map, Map)`                   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -0.7% | -238.428 MiB | 84.2% → 82.3% |  31.2 GiB → 30.9 GiB | 1,524 → 1,442 | `combineResults(Map, Map)`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -0.7% | -238.428 MiB | 84.2% → 82.3% |  31.2 GiB → 30.9 GiB | 1,524 → 1,442 | `combineResults(Object, Object)`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed | -207.504 MiB |   0.5% → 0.0% |        208 MiB → 0 B |       119 → 0 | `invokeStatic(Object, Object)`      | `java.lang.invoke.LambdaForm$DMH.0x0000000501001c00`                   |
| removed | -207.504 MiB |   0.5% → 0.0% |        208 MiB → 0 B |       119 → 0 | `invoke(Object, Object, Object)`    | `java.lang.invoke.LambdaForm$MH.0x0000000501082400`                    |
| removed | -158.452 MiB |   0.4% → 0.0% |        158 MiB → 0 B |         1 → 0 | `<init>(int)`                       | `java.io.ByteArrayOutputStream`                                        |

##### Standard library

|  Change |        Delta |             % |                Size |       Samples | Function                                              | Location                                                                 |
| ------: | -----------: | ------------: | ------------------: | ------------: | ----------------------------------------------------- | ------------------------------------------------------------------------ |
|   -9.9% |   -1.801 GiB | 49.1% → 43.6% | 18.2 GiB → 16.4 GiB |     845 → 810 | `toArray()`                                           | `java.util.ArrayList`                                                    |
|   -1.8% | -581.536 MiB | 84.1% → 81.4% | 31.2 GiB → 30.6 GiB | 1,519 → 1,431 | `merge(Object, Object, BiFunction)`                   | `java.util.HashMap`                                                      |
|   -1.8% | -581.536 MiB | 84.1% → 81.4% | 31.2 GiB → 30.6 GiB | 1,519 → 1,431 | `forEach(BiConsumer)`                                 | `java.util.HashMap`                                                      |
|   -4.6% | -364.905 MiB | 20.9% → 19.6% | 7.72 GiB → 7.37 GiB |     203 → 215 | `invoke()`                                            | `java.util.concurrent.ForkJoinTask`                                      |
|   -4.0% | -312.821 MiB | 20.6% → 19.5% | 7.62 GiB → 7.32 GiB |     197 → 210 | `exec()`                                              | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                      |
|   -3.5% | -306.445 MiB | 23.1% → 22.0% | 8.56 GiB → 8.27 GiB |     350 → 381 | `<init>(Collection)`                                  | `java.util.ArrayList`                                                    |
|   -1.1% | -247.624 MiB | 60.7% → 59.2% | 22.5 GiB → 22.2 GiB | 1,165 → 1,047 | `addAll(Collection)`                                  | `java.util.ArrayList`                                                    |
| removed | -207.504 MiB |   0.5% → 0.0% |       208 MiB → 0 B |       119 → 0 | `invokeStatic(Object, Object)`                        | `java.lang.invoke.LambdaForm$DMH.0x0000000501001c00`                     |
| removed | -207.504 MiB |   0.5% → 0.0% |       208 MiB → 0 B |       119 → 0 | `invoke(Object, Object, Object)`                      | `java.lang.invoke.LambdaForm$MH.0x0000000501082400`                      |
| removed | -158.452 MiB |   0.4% → 0.0% |       158 MiB → 0 B |         1 → 0 | `<init>(int)`                                         | `java.io.ByteArrayOutputStream`                                          |
| removed | -158.452 MiB |   0.4% → 0.0% |       158 MiB → 0 B |         1 → 0 | `<init>()`                                            | `java.io.ByteArrayOutputStream`                                          |
| removed | -158.452 MiB |   0.4% → 0.0% |       158 MiB → 0 B |         1 → 0 | `read(Manifest$FastInputStream, byte[], String, int)` | `java.util.jar.Attributes`                                               |
|   -0.6% | -150.907 MiB | 64.5% → 63.2% | 23.9 GiB → 23.7 GiB | 1,198 → 1,175 | `tryRemoveAndExec(ForkJoinTask, boolean)`             | `java.util.concurrent.ForkJoinPool$WorkQueue`                            |
|  -37.5% | -118.875 MiB |   0.8% → 0.5% |   317 MiB → 198 MiB |       13 → 10 | `computeIfAbsent(Object, Function)`                   | `java.util.HashMap`                                                      |
|   -0.1% |  -46.917 MiB | 96.4% → 94.9% |            35.7 GiB | 1,771 → 1,701 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`  | `java.util.concurrent.ForkJoinPool$WorkQueue`                            |
|  -97.9% |  -22.325 MiB |  0.1% → <0.1% |  22.8 MiB → 490 KiB |         5 → 1 | `generateInnerClass()`                                | `java.lang.invoke.InnerClassLambdaMetafactory`                           |
|  -97.9% |  -22.325 MiB |  0.1% → <0.1% |  22.8 MiB → 490 KiB |         5 → 1 | `spinInnerClass()`                                    | `java.lang.invoke.InnerClassLambdaMetafactory`                           |
|  -97.9% |  -22.325 MiB |  0.1% → <0.1% |  22.8 MiB → 490 KiB |         5 → 1 | `buildCallSite()`                                     | `java.lang.invoke.InnerClassLambdaMetafactory`                           |
| removed |  -21.713 MiB |   0.1% → 0.0% |      21.7 MiB → 0 B |         2 → 0 | `convertType(Class, Class, Class)`                    | `java.lang.invoke.TypeConvertingMethodAdapter`                           |
| removed |  -21.713 MiB |   0.1% → 0.0% |      21.7 MiB → 0 B |         2 → 0 | `convertArgumentTypes(MethodType)`                    | `java.lang.invoke.InnerClassLambdaMetafactory$ForwardingMethodGenerator` |

##### Ours

| Change |        Delta |             % |                 Size |       Samples | Function                             | Location                                                                              |
| -----: | -----------: | ------------: | -------------------: | ------------: | ------------------------------------ | ------------------------------------------------------------------------------------- |
|  -1.8% | -581.536 MiB | 84.1% → 81.4% |  31.2 GiB → 30.6 GiB | 1,519 → 1,431 | `lambda$merge$6(List, List)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  -1.8% | -581.536 MiB | 84.1% → 81.4% |  31.2 GiB → 30.6 GiB | 1,519 → 1,431 | `apply(Object, Object)`              | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000e001205218`                |
|  -1.8% | -581.536 MiB | 84.1% → 81.4% |  31.2 GiB → 30.6 GiB | 1,519 → 1,431 | `lambda$merge$7(Map, Object, List)`  | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  -1.8% | -581.536 MiB | 84.1% → 81.4% |  31.2 GiB → 30.6 GiB | 1,519 → 1,431 | `accept(Object, Object)`             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000e001204d88`                |
| -35.9% | -566.418 MiB |   4.2% → 2.6% | 1.54 GiB → 1,009 MiB |       69 → 71 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -4.0% | -312.821 MiB | 20.6% → 19.5% |  7.62 GiB → 7.32 GiB |     197 → 210 | `lambda$run$0(int, List, int)`       | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  -4.0% | -312.821 MiB | 20.6% → 19.5% |  7.62 GiB → 7.32 GiB |     197 → 210 | `call()`                             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000e0011ffbc0`                |
|  -0.7% | -238.428 MiB | 84.2% → 82.3% |  31.2 GiB → 30.9 GiB | 1,524 → 1,442 | `merge(Map, Map)`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  -0.7% | -238.428 MiB | 84.2% → 82.3% |  31.2 GiB → 30.9 GiB | 1,524 → 1,442 | `combineResults(Map, Map)`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -0.7% | -238.428 MiB | 84.2% → 82.3% |  31.2 GiB → 30.9 GiB | 1,524 → 1,442 | `combineResults(Object, Object)`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| -86.6% |   -74.99 MiB |  0.2% → <0.1% |  86.6 MiB → 11.6 MiB |         6 → 2 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| -86.6% |   -74.99 MiB |  0.2% → <0.1% |  86.6 MiB → 11.6 MiB |         6 → 2 | `apply(Object)`                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000e001204b38` |
| -81.9% |  -45.091 MiB |  0.1% → <0.1% |    55.1 MiB → 10 MiB |         3 → 2 | `vectorSum()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| -81.9% |  -45.091 MiB |  0.1% → <0.1% |    55.1 MiB → 10 MiB |         3 → 2 | `computeDirectly()`                  | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| -45.5% |  -39.785 MiB |   0.2% → 0.1% |  87.4 MiB → 47.6 MiB |         5 → 4 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| -96.1% |  -23.895 MiB |  0.1% → <0.1% |   24.9 MiB → 999 KiB |        68 → 3 | `apply(int)`                         | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000e0011a1d48`                |
| -30.3% |  -12.725 MiB |          0.1% |  42.1 MiB → 29.3 MiB |         3 → 2 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| -30.3% |  -12.725 MiB |          0.1% |  42.1 MiB → 29.3 MiB |         3 → 2 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| -30.3% |  -12.725 MiB |          0.1% |  42.1 MiB → 29.3 MiB |         3 → 2 | `combineResults(Object, Object)`     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| -20.3% |   -9.048 MiB |          0.1% |  44.6 MiB → 35.5 MiB |         4 → 3 | `average(List)`                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |

# Retained heap profile diff

Retained 2.31 MiB → 2.88 MiB (+586.156 KiB, +24.8%) over 9 objects → 11 objects (263 KiB → 268 KiB per object).

| Category         | Change |        Delta |      % |                Size | Objects |
| ---------------- | -----: | -----------: | -----: | ------------------: | ------: |
| Standard library | +24.8% | +586.156 KiB | 100.0% | 2.31 MiB → 2.88 MiB |  8 → 10 |
| Ours             |   0.0% |          0 B |  <0.1% |                40 B |       1 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

##### Standard library

| Change |        Delta |             % |                Size | Objects | Function                          | Location                                 |
| -----: | -----------: | ------------: | ------------------: | ------: | --------------------------------- | ---------------------------------------- |
| +27.7% | +585.132 KiB | 89.2% → 91.3% | 2.06 MiB → 2.63 MiB |   1 → 3 | `copyOf(Object[], int)`           | `java.util.Arrays`                       |
|    new | +256.015 KiB |   0.0% → 8.7% |       0 B → 256 KiB |   0 → 1 | `initTable()`                     | `java.util.concurrent.ConcurrentHashMap` |
|    new |        +72 B |  0.0% → <0.1% |          0 B → 72 B |   0 → 1 | `compress(char[], int, int)`      | `java.lang.StringUTF16`                  |
|    new |        +64 B |  0.0% → <0.1% |          0 B → 64 B |   0 → 1 | `newLinkedHashMap(int)`           | `java.util.LinkedHashMap`                |
|    new |        +32 B |  0.0% → <0.1% |          0 B → 32 B |   0 → 1 | `putVal(Object, Object, boolean)` | `java.util.concurrent.ConcurrentHashMap` |

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

##### Standard library

|  Change |        Delta |            % |          Size | Objects | Function                                       | Location                       |
| ------: | -----------: | -----------: | ------------: | ------: | ---------------------------------------------- | ------------------------------ |
| removed | -255.085 KiB | 10.8% → 0.0% | 255 KiB → 0 B |   1 → 0 | `initCEN(int, ZipCoder)`                       | `java.util.zip.ZipFile$Source` |
| removed |        -24 B | <0.1% → 0.0% |    24 B → 0 B |   1 → 0 | `parseName(byte[], int)`                       | `java.util.jar.Manifest`       |
| removed |        -24 B | <0.1% → 0.0% |    24 B → 0 B |   1 → 0 | `loadConvert(char[], int, int, StringBuilder)` | `java.util.Properties`         |
|  -25.0% |        -24 B |        <0.1% |   96 B → 72 B |   4 → 3 | `valueOf(double)`                              | `java.lang.Double`             |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

| Change |        Delta |             % |                Size | Objects | Function                                             | Location                                                               |
| -----: | -----------: | ------------: | ------------------: | ------: | ---------------------------------------------------- | ---------------------------------------------------------------------- |
|    new |   +2.061 MiB |  0.0% → 71.5% |      0 B → 2.06 MiB |   0 → 8 | `invokeStatic(Object, Object)`                       | `java.lang.invoke.LambdaForm$DMH.0x000000e001001c00`                   |
|    new |   +2.061 MiB |  0.0% → 71.5% |      0 B → 2.06 MiB |   0 → 8 | `invoke(Object, Object, Object)`                     | `java.lang.invoke.LambdaForm$MH.0x000000e001082400`                    |
| +27.7% | +585.132 KiB | 89.2% → 91.3% | 2.06 MiB → 2.63 MiB |   1 → 3 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                                     |
| +27.7% | +585.132 KiB | 89.2% → 91.3% | 2.06 MiB → 2.63 MiB |   1 → 3 | `grow(int)`                                          | `java.util.ArrayList`                                                  |
|    new | +585.132 KiB |  0.0% → 19.8% |       0 B → 585 KiB |   0 → 2 | `addAll(Collection)`                                 | `java.util.ArrayList`                                                  |
|    new | +585.132 KiB |  0.0% → 19.8% |       0 B → 585 KiB |   0 → 2 | `lambda$merge$6(List, List)`                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|    new | +585.132 KiB |  0.0% → 19.8% |       0 B → 585 KiB |   0 → 2 | `apply(Object, Object)`                              | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000e001205218` |
|    new | +585.132 KiB |  0.0% → 19.8% |       0 B → 585 KiB |   0 → 2 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                                                    |
|    new | +585.132 KiB |  0.0% → 19.8% |       0 B → 585 KiB |   0 → 2 | `lambda$merge$7(Map, Object, List)`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|    new | +585.132 KiB |  0.0% → 19.8% |       0 B → 585 KiB |   0 → 2 | `accept(Object, Object)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000e001204d88` |
|    new | +585.132 KiB |  0.0% → 19.8% |       0 B → 585 KiB |   0 → 2 | `forEach(BiConsumer)`                                | `java.util.HashMap`                                                    |
|    new | +585.132 KiB |  0.0% → 19.8% |       0 B → 585 KiB |   0 → 2 | `merge(Map, Map)`                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|    new | +585.132 KiB |  0.0% → 19.8% |       0 B → 585 KiB |   0 → 2 | `combineResults(Map, Map)`                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|    new | +585.132 KiB |  0.0% → 19.8% |       0 B → 585 KiB |   0 → 2 | `combineResults(Object, Object)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|    new | +585.132 KiB |  0.0% → 19.8% |       0 B → 585 KiB |   0 → 2 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|    new | +585.132 KiB |  0.0% → 19.8% |       0 B → 585 KiB |   0 → 2 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                                   |
|    new | +585.132 KiB |  0.0% → 19.8% |       0 B → 585 KiB |   0 → 2 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                                    |
|    new | +585.132 KiB |  0.0% → 19.8% |       0 B → 585 KiB |   0 → 2 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|    new | +585.132 KiB |  0.0% → 19.8% |       0 B → 585 KiB |   0 → 2 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                                    |
|    new | +585.132 KiB |  0.0% → 19.8% |       0 B → 585 KiB |   0 → 2 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                                    |

##### Standard library

| Change |        Delta |             % |                Size | Objects | Function                                                                          | Location                                             |
| -----: | -----------: | ------------: | ------------------: | ------: | --------------------------------------------------------------------------------- | ---------------------------------------------------- |
|    new |   +2.061 MiB |  0.0% → 71.5% |      0 B → 2.06 MiB |   0 → 8 | `invokeStatic(Object, Object)`                                                    | `java.lang.invoke.LambdaForm$DMH.0x000000e001001c00` |
|    new |   +2.061 MiB |  0.0% → 71.5% |      0 B → 2.06 MiB |   0 → 8 | `invoke(Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000e001082400`  |
| +27.7% | +585.132 KiB | 89.2% → 91.3% | 2.06 MiB → 2.63 MiB |   1 → 3 | `copyOf(Object[], int)`                                                           | `java.util.Arrays`                                   |
| +27.7% | +585.132 KiB | 89.2% → 91.3% | 2.06 MiB → 2.63 MiB |   1 → 3 | `grow(int)`                                                                       | `java.util.ArrayList`                                |
|    new | +585.132 KiB |  0.0% → 19.8% |       0 B → 585 KiB |   0 → 2 | `addAll(Collection)`                                                              | `java.util.ArrayList`                                |
|    new | +585.132 KiB |  0.0% → 19.8% |       0 B → 585 KiB |   0 → 2 | `merge(Object, Object, BiFunction)`                                               | `java.util.HashMap`                                  |
|    new | +585.132 KiB |  0.0% → 19.8% |       0 B → 585 KiB |   0 → 2 | `forEach(BiConsumer)`                                                             | `java.util.HashMap`                                  |
|    new | +585.132 KiB |  0.0% → 19.8% |       0 B → 585 KiB |   0 → 2 | `exec()`                                                                          | `java.util.concurrent.RecursiveTask`                 |
|    new | +585.132 KiB |  0.0% → 19.8% |       0 B → 585 KiB |   0 → 2 | `doExec()`                                                                        | `java.util.concurrent.ForkJoinTask`                  |
|    new | +585.132 KiB |  0.0% → 19.8% |       0 B → 585 KiB |   0 → 2 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`                              | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|    new | +585.132 KiB |  0.0% → 19.8% |       0 B → 585 KiB |   0 → 2 | `scan(ForkJoinPool$WorkQueue, int, int)`                                          | `java.util.concurrent.ForkJoinPool`                  |
|    new | +585.132 KiB |  0.0% → 19.8% |       0 B → 585 KiB |   0 → 2 | `runWorker(ForkJoinPool$WorkQueue)`                                               | `java.util.concurrent.ForkJoinPool`                  |
|    new | +585.132 KiB |  0.0% → 19.8% |       0 B → 585 KiB |   0 → 2 | `run()`                                                                           | `java.util.concurrent.ForkJoinWorkerThread`          |
|    new | +256.046 KiB |   0.0% → 8.7% |       0 B → 256 KiB |   0 → 2 | `putVal(Object, Object, boolean)`                                                 | `java.util.concurrent.ConcurrentHashMap`             |
|    new | +256.015 KiB |   0.0% → 8.7% |       0 B → 256 KiB |   0 → 1 | `initTable()`                                                                     | `java.util.concurrent.ConcurrentHashMap`             |
|    new | +256.015 KiB |   0.0% → 8.7% |       0 B → 256 KiB |   0 → 1 | `put(Object, Object)`                                                             | `java.util.concurrent.ConcurrentHashMap`             |
|    new | +256.015 KiB |   0.0% → 8.7% |       0 B → 256 KiB |   0 → 1 | `storeString(String)`                                                             | `jdk.jfr.internal.StringPool`                        |
|    new | +256.015 KiB |   0.0% → 8.7% |       0 B → 256 KiB |   0 → 1 | `addString(String)`                                                               | `jdk.jfr.internal.StringPool`                        |
|    new | +256.015 KiB |   0.0% → 8.7% |       0 B → 256 KiB |   0 → 1 | `putString(String)`                                                               | `jdk.jfr.internal.event.EventWriter`                 |
|    new | +256.015 KiB |   0.0% → 8.7% |       0 B → 256 KiB |   0 → 1 | `commit(long, long, long, String, String, boolean, long, long, long, long, long)` | `jdk.jfr.events.ActiveRecordingEvent`                |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

##### Standard library

|  Change |        Delta |             % |           Size | Objects | Function                                                                    | Location                                             |
| ------: | -----------: | ------------: | -------------: | ------: | --------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |    -2.31 MiB | 100.0% → 0.0% | 2.31 MiB → 0 B |   9 → 0 | `invokeStatic(Object, Object)`                                              | `java.lang.invoke.LambdaForm$DMH.0x0000000501001c00` |
| removed |    -2.31 MiB | 100.0% → 0.0% | 2.31 MiB → 0 B |   9 → 0 | `invoke(Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x0000000501082400`  |
| removed | -255.085 KiB |  10.8% → 0.0% |  255 KiB → 0 B |   1 → 0 | `initCEN(int, ZipCoder)`                                                    | `java.util.zip.ZipFile$Source`                       |
| removed | -255.085 KiB |  10.8% → 0.0% |  255 KiB → 0 B |   1 → 0 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)`                             | `java.util.zip.ZipFile$Source`                       |
| removed | -255.085 KiB |  10.8% → 0.0% |  255 KiB → 0 B |   1 → 0 | `get(File, boolean, ZipCoder)`                                              | `java.util.zip.ZipFile$Source`                       |
| removed | -255.085 KiB |  10.8% → 0.0% |  255 KiB → 0 B |   1 → 0 | `<init>(ZipFile, ZipCoder, File, int)`                                      | `java.util.zip.ZipFile$CleanableResource`            |
| removed | -255.085 KiB |  10.8% → 0.0% |  255 KiB → 0 B |   1 → 0 | `<init>(File, int, Charset)`                                                | `java.util.zip.ZipFile`                              |
| removed | -255.085 KiB |  10.8% → 0.0% |  255 KiB → 0 B |   1 → 0 | `<init>(File, int)`                                                         | `java.util.zip.ZipFile`                              |
| removed | -255.085 KiB |  10.8% → 0.0% |  255 KiB → 0 B |   1 → 0 | `<init>(File, boolean, int, Runtime$Version)`                               | `java.util.jar.JarFile`                              |
| removed | -255.085 KiB |  10.8% → 0.0% |  255 KiB → 0 B |   1 → 0 | `getJarFile(URL)`                                                           | `jdk.internal.loader.URLClassPath$JarLoader`         |
| removed | -255.085 KiB |  10.8% → 0.0% |  255 KiB → 0 B |   1 → 0 | `run()`                                                                     | `jdk.internal.loader.URLClassPath$JarLoader$1`       |
| removed | -255.085 KiB |  10.8% → 0.0% |  255 KiB → 0 B |   1 → 0 | `ensureOpen()`                                                              | `jdk.internal.loader.URLClassPath$JarLoader`         |
| removed | -255.085 KiB |  10.8% → 0.0% |  255 KiB → 0 B |   1 → 0 | `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)`              | `jdk.internal.loader.URLClassPath$JarLoader`         |
| removed | -255.085 KiB |  10.8% → 0.0% |  255 KiB → 0 B |   1 → 0 | `run()`                                                                     | `jdk.internal.loader.URLClassPath$3`                 |
| removed | -255.085 KiB |  10.8% → 0.0% |  255 KiB → 0 B |   1 → 0 | `getLoader(URL)`                                                            | `jdk.internal.loader.URLClassPath`                   |
| removed | -255.085 KiB |  10.8% → 0.0% |  255 KiB → 0 B |   1 → 0 | `getLoader(int)`                                                            | `jdk.internal.loader.URLClassPath`                   |
| removed | -255.085 KiB |  10.8% → 0.0% |  255 KiB → 0 B |   1 → 0 | `getResource(String, boolean)`                                              | `jdk.internal.loader.URLClassPath`                   |
| -100.0% | -255.046 KiB | 10.8% → <0.1% | 255 KiB → 64 B |   2 → 1 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` | `java.security.AccessController`                     |
| -100.0% | -255.046 KiB | 10.8% → <0.1% | 255 KiB → 64 B |   2 → 1 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)`             | `java.security.AccessController`                     |
| -100.0% | -255.046 KiB | 10.8% → <0.1% | 255 KiB → 64 B |   2 → 1 | `run()`                                                                     | `java.net.URLClassLoader$1`                          |

# Lock contention profile diff

Blocked 7.68s → 7.09s (-588.98ms, -7.7%) over 80 contentions → 55 contentions (96.1ms → 129.1ms per contention).

| Category         | Change |     Delta |      % |          Time | Contentions |
| ---------------- | -----: | --------: | -----: | ------------: | ----------: |
| Standard library |  -7.7% | -588.98ms | 100.0% | 7.68s → 7.09s |     80 → 55 |

## Hottest functions

### Self time

#### Improvements

Functions with the largest decrease in time blocked directly in the function body, excluding callees.

##### Standard library

| Change |     Delta |      % |          Time | Contentions | Function              | Location                   |
| -----: | --------: | -----: | ------------: | ----------: | --------------------- | -------------------------- |
|  -7.7% | -588.98ms | 100.0% | 7.68s → 7.09s |     80 → 55 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

##### Standard library

| Change |     Delta |            % |              Time | Contentions | Function                         | Location                                             |
| -----: | --------: | -----------: | ----------------: | ----------: | -------------------------------- | ---------------------------------------------------- |
|    new |   +5.894s | 0.0% → 83.0% |       0ms → 5.89s |      0 → 16 | `invokeStatic(Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x000000e001001c00` |
|    new |   +5.894s | 0.0% → 83.0% |       0ms → 5.89s |      0 → 16 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000e001082400`  |
| +34.7% | +115.78ms |  4.3% → 6.3% | 333.9ms → 449.7ms |     11 → 15 | `parkUntil(long)`                | `java.util.concurrent.locks.LockSupport`             |

#### Improvements

Functions with the largest decrease in total time blocked in the function and all its callees.

|  Change |     Delta |             % |          Time | Contentions | Function                                                                                                               | Location                                                               |
| ------: | --------: | ------------: | ------------: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| removed |   -6.072s |  79.0% → 0.0% |   6.07s → 0ms |      16 → 0 | `invokeStatic(Object, Object)`                                                                                         | `java.lang.invoke.LambdaForm$DMH.0x0000000501001c00`                   |
| removed |   -6.072s |  79.0% → 0.0% |   6.07s → 0ms |      16 → 0 | `invoke(Object, Object, Object)`                                                                                       | `java.lang.invoke.LambdaForm$MH.0x0000000501082400`                    |
|   -9.6% | -704.77ms | 95.7% → 93.7% | 7.35s → 6.64s |     69 → 40 | `park()`                                                                                                               | `java.util.concurrent.locks.LockSupport`                               |
|   -7.7% | -588.98ms |        100.0% | 7.68s → 7.09s |     80 → 55 | `park(boolean, long)`                                                                                                  | `jdk.internal.misc.Unsafe`                                             |
|  -25.4% | -410.82ms | 21.0% → 17.0% | 1.61s → 1.20s |     64 → 39 | `awaitWork(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`                                    |
|  -25.4% | -410.82ms | 21.0% → 17.0% | 1.61s → 1.20s |     64 → 39 | `runWorker(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`                                    |
|  -25.4% | -410.82ms | 21.0% → 17.0% | 1.61s → 1.20s |     64 → 39 | `run()`                                                                                                                | `java.util.concurrent.ForkJoinWorkerThread`                            |
|   -2.9% | -178.16ms | 79.0% → 83.0% | 6.07s → 5.89s |          16 | `awaitDone(int, long)`                                                                                                 | `java.util.concurrent.ForkJoinTask`                                    |
|   -2.9% | -178.16ms | 79.0% → 83.0% | 6.07s → 5.89s |          16 | `get()`                                                                                                                | `java.util.concurrent.ForkJoinTask`                                    |
|   -2.9% | -178.16ms | 79.0% → 83.0% | 6.07s → 5.89s |          16 | `run(int, List, int)`                                                                                                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -2.9% | -178.16ms | 79.0% → 83.0% | 6.07s → 5.89s |          16 | `$anonfun$1(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|   -2.9% | -178.16ms | 79.0% → 83.0% | 6.07s → 5.89s |          16 | `$anonfun$adapted$1(Object)`                                                                                           | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|   -2.9% | -178.16ms | 79.0% → 83.0% | 6.07s → 5.89s |          16 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000e0011f6c70`   |
|   -2.9% | -178.16ms | 79.0% → 83.0% | 6.07s → 5.89s |          16 | `map(Function1)`                                                                                                       | `scala.collection.immutable.Range`                                     |
|   -2.9% | -178.16ms | 79.0% → 83.0% | 6.07s → 5.89s |          16 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|   -2.9% | -178.16ms | 79.0% → 83.0% | 6.07s → 5.89s |          16 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |
|   -2.9% | -178.16ms | 79.0% → 83.0% | 6.07s → 5.89s |          16 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|   -2.9% | -178.16ms | 79.0% → 83.0% | 6.07s → 5.89s |          16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|   -2.9% | -178.16ms | 79.0% → 83.0% | 6.07s → 5.89s |          16 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000e001198798` |
|   -2.9% | -178.16ms | 79.0% → 83.0% | 6.07s → 5.89s |          16 | `apply(Object)`                                                                                                        | `scala.runtime.function.JProcedure1`                                   |

##### Standard library

|  Change |     Delta |             % |          Time | Contentions | Function                                         | Location                                             |
| ------: | --------: | ------------: | ------------: | ----------: | ------------------------------------------------ | ---------------------------------------------------- |
| removed |   -6.072s |  79.0% → 0.0% |   6.07s → 0ms |      16 → 0 | `invokeStatic(Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x0000000501001c00` |
| removed |   -6.072s |  79.0% → 0.0% |   6.07s → 0ms |      16 → 0 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000501082400`  |
|   -9.6% | -704.77ms | 95.7% → 93.7% | 7.35s → 6.64s |     69 → 40 | `park()`                                         | `java.util.concurrent.locks.LockSupport`             |
|   -7.7% | -588.98ms |        100.0% | 7.68s → 7.09s |     80 → 55 | `park(boolean, long)`                            | `jdk.internal.misc.Unsafe`                           |
|  -25.4% | -410.82ms | 21.0% → 17.0% | 1.61s → 1.20s |     64 → 39 | `awaitWork(ForkJoinPool$WorkQueue)`              | `java.util.concurrent.ForkJoinPool`                  |
|  -25.4% | -410.82ms | 21.0% → 17.0% | 1.61s → 1.20s |     64 → 39 | `runWorker(ForkJoinPool$WorkQueue)`              | `java.util.concurrent.ForkJoinPool`                  |
|  -25.4% | -410.82ms | 21.0% → 17.0% | 1.61s → 1.20s |     64 → 39 | `run()`                                          | `java.util.concurrent.ForkJoinWorkerThread`          |
|   -2.9% | -178.16ms | 79.0% → 83.0% | 6.07s → 5.89s |          16 | `awaitDone(int, long)`                           | `java.util.concurrent.ForkJoinTask`                  |
|   -2.9% | -178.16ms | 79.0% → 83.0% | 6.07s → 5.89s |          16 | `get()`                                          | `java.util.concurrent.ForkJoinTask`                  |
|   -2.9% | -178.16ms | 79.0% → 83.0% | 6.07s → 5.89s |          16 | `map(Function1)`                                 | `scala.collection.immutable.Range`                   |
|   -2.9% | -178.16ms | 79.0% → 83.0% | 6.07s → 5.89s |          16 | `apply(Object)`                                  | `scala.runtime.function.JProcedure1`                 |
|   -2.9% | -178.16ms | 79.0% → 83.0% | 6.07s → 5.89s |          16 | `foreach(Function1)`                             | `scala.collection.immutable.List`                    |
|   -2.9% | -178.16ms | 79.0% → 83.0% | 6.07s → 5.89s |          16 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                   |
|   -2.9% | -178.16ms | 79.0% → 83.0% | 6.07s → 5.89s |          16 | `invokeImpl(Object, Object[])`                   | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|   -2.9% | -178.16ms | 79.0% → 83.0% | 6.07s → 5.89s |          16 | `invoke(Object, Object[])`                       | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|   -2.9% | -178.16ms | 79.0% → 83.0% | 6.07s → 5.89s |          16 | `invoke(Object, Object[])`                       | `java.lang.reflect.Method`                           |

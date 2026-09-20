# Sampling profile diff

Collected 1,563 samples.

| Category         | Change | Delta |             % |       Samples |
| ---------------- | -----: | ----: | ------------: | ------------: |
| Ours             |  +1.7% |   +24 | 90.0% → 91.6% | 1,407 → 1,431 |
| Standard library | -15.4% |   -24 |  10.0% → 8.4% |     156 → 132 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                                                      | Location                                                                              |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|   +3.1% |   +19 | 38.8% → 40.1% | 607 → 626 | `accumulate(Double[], double[])`                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   +4.3% |   +17 | 25.1% → 26.2% | 392 → 409 | `distance(Double[], Double[])`                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| +200.0% |   +12 |   0.4% → 1.2% |    6 → 18 | `grow(int)`                                                   | `java.util.ArrayList`                                                                 |
|  +45.8% |   +11 |   1.5% → 2.2% |   24 → 35 | `computeDirectly()`                                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +12.0% |   +11 |   5.9% → 6.6% |  92 → 103 | `collectClusters(int[])`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| +100.0% |    +3 |   0.2% → 0.4% |     3 → 6 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater`                                                              |
| +100.0% |    +2 |   0.1% → 0.3% |     2 → 4 | `accept(Object)`                                              | `java.util.stream.ReduceOps$3ReducingSink`                                            |
| +100.0% |    +2 |   0.1% → 0.3% |     2 → 4 | `lambda$merge$7(Map, Object, List)`                           | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `park(boolean, long)`                                         | `jdk.internal.misc.Unsafe`                                                            |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `join()`                                                      | `java.util.concurrent.ForkJoinTask`                                                   |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `merge(Map, Map)`                                             | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
| +100.0% |    +1 |          0.1% |     1 → 2 | `<init>(HashMap)`                                             | `java.util.HashMap$HashIterator`                                                      |
| +100.0% |    +1 |          0.1% |     1 → 2 | `apply(Object)`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000a801204b38` |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `putMethodInfo(ByteVector)`                                   | `jdk.internal.org.objectweb.asm.MethodWriter`                                         |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `lambda$collectClusters$0(Double[])`                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |

##### Ours

|  Change | Delta |             % |   Samples | Function                             | Location                                                                              |
| ------: | ----: | ------------: | --------: | ------------------------------------ | ------------------------------------------------------------------------------------- |
|   +3.1% |   +19 | 38.8% → 40.1% | 607 → 626 | `accumulate(Double[], double[])`     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   +4.3% |   +17 | 25.1% → 26.2% | 392 → 409 | `distance(Double[], Double[])`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +45.8% |   +11 |   1.5% → 2.2% |   24 → 35 | `computeDirectly()`                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +12.0% |   +11 |   5.9% → 6.6% |  92 → 103 | `collectClusters(int[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| +100.0% |    +2 |   0.1% → 0.3% |     2 → 4 | `lambda$merge$7(Map, Object, List)`  | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `merge(Map, Map)`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
| +100.0% |    +1 |          0.1% |     1 → 2 | `apply(Object)`                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000a801204b38` |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                      | Location                                      |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------- | --------------------------------------------- |
| +200.0% |   +12 | 0.4% → 1.2% |  6 → 18 | `grow(int)`                                                   | `java.util.ArrayList`                         |
| +100.0% |    +3 | 0.2% → 0.4% |   3 → 6 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater`                      |
| +100.0% |    +2 | 0.1% → 0.3% |   2 → 4 | `accept(Object)`                                              | `java.util.stream.ReduceOps$3ReducingSink`    |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `park(boolean, long)`                                         | `jdk.internal.misc.Unsafe`                    |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `join()`                                                      | `java.util.concurrent.ForkJoinTask`           |
| +100.0% |    +1 |        0.1% |   1 → 2 | `<init>(HashMap)`                                             | `java.util.HashMap$HashIterator`              |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `putMethodInfo(ByteVector)`                                   | `jdk.internal.org.objectweb.asm.MethodWriter` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                                  | Location                                                   |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------- | ---------------------------------------------------------- |
|  -48.6% |   -34 | 4.5% → 2.3% | 70 → 36 | `vectorSum()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -28.2% |   -20 | 4.5% → 3.3% | 71 → 51 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                                        |
|  -32.5% |   -13 | 2.6% → 1.7% | 40 → 27 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                                         |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `createSubtask(int, int)`                                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `match(byte[], byte[], byte[], byte[])`                   | `java.util.jar.JarFile`                                    |
|  -33.3% |    -1 | 0.2% → 0.1% |   3 → 2 | `compute()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                        |
|  -50.0% |    -1 |        0.1% |   2 → 1 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|  -11.1% |    -1 | 0.6% → 0.5% |   9 → 8 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                        |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                        |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `checkIndex(int, int)`                                    | `java.util.Objects`                                        |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `putMapEntries(Map, boolean)`                             | `java.util.HashMap`                                        |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>(Map)`                                             | `java.util.HashMap`                                        |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `forEachRemaining(Consumer)`                              | `java.util.Spliterator$OfDouble`                           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `spliterator(double[], int, int, int)`                    | `java.util.Spliterators`                                   |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `unpark(Object)`                                          | `jdk.internal.misc.Unsafe`                                 |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `add(double[], double[])`                                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `resize()`                                                | `java.util.HashMap`                                        |

##### Ours

|  Change | Delta |           % | Samples | Function                  | Location                                                   |
| ------: | ----: | ----------: | ------: | ------------------------- | ---------------------------------------------------------- |
|  -48.6% |   -34 | 4.5% → 2.3% | 70 → 36 | `vectorSum()`             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `createSubtask(int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -33.3% |    -1 | 0.2% → 0.1% |   3 → 2 | `compute()`               | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `add(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                  | Location                                      |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------- | --------------------------------------------- |
|  -28.2% |   -20 | 4.5% → 3.3% | 71 → 51 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                           |
|  -32.5% |   -13 | 2.6% → 1.7% | 40 → 27 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `match(byte[], byte[], byte[], byte[])`                   | `java.util.jar.JarFile`                       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`           |
|  -50.0% |    -1 |        0.1% |   2 → 1 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -11.1% |    -1 | 0.6% → 0.5% |   9 → 8 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `checkIndex(int, int)`                                    | `java.util.Objects`                           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `putMapEntries(Map, boolean)`                             | `java.util.HashMap`                           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>(Map)`                                             | `java.util.HashMap`                           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `forEachRemaining(Consumer)`                              | `java.util.Spliterator$OfDouble`              |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `spliterator(double[], int, int, int)`                    | `java.util.Spliterators`                      |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `unpark(Object)`                                          | `jdk.internal.misc.Unsafe`                    |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `resize()`                                                | `java.util.HashMap`                           |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

| Change | Delta |             % |       Samples | Function                                                    | Location                                                   |
| -----: | ----: | ------------: | ------------: | ----------------------------------------------------------- | ---------------------------------------------------------- |
|  +5.4% |   +62 | 72.9% → 76.9% | 1,140 → 1,202 | `runWorker(ForkJoinPool$WorkQueue)`                         | `java.util.concurrent.ForkJoinPool`                        |
|  +5.1% |   +59 | 73.4% → 77.2% | 1,148 → 1,207 | `scan(ForkJoinPool$WorkQueue, int, int)`                    | `java.util.concurrent.ForkJoinPool`                        |
|  +4.9% |   +58 | 76.3% → 80.0% | 1,192 → 1,250 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`        | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|  +5.2% |   +57 | 70.4% → 74.1% | 1,101 → 1,158 | `run()`                                                     | `java.util.concurrent.ForkJoinWorkerThread`                |
|  +2.6% |   +22 | 53.5% → 54.9% |     836 → 858 | `computeDirectly()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +3.1% |   +19 | 38.8% → 40.1% |     607 → 626 | `accumulate(Double[], double[])`                            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +4.3% |   +17 | 25.1% → 26.2% |     392 → 409 | `distance(Double[], Double[])`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +2.8% |   +17 | 38.6% → 39.7% |     604 → 621 | `findNearestCentroid()`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +6.6% |   +16 | 15.5% → 16.6% |     243 → 259 | `computeDirectly()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  +4.1% |   +11 | 17.3% → 18.0% |     270 → 281 | `invoke()`                                                  | `java.util.concurrent.ForkJoinTask`                        |
|    new |   +11 |   0.0% → 0.7% |        0 → 11 | `invokeStatic(Object, Object)`                              | `java.lang.invoke.LambdaForm$DMH.0x000000a801001c00`       |
|    new |   +11 |   0.0% → 0.7% |        0 → 11 | `invoke(Object, Object, Object)`                            | `java.lang.invoke.LambdaForm$MH.0x000000a801082400`        |
|  +3.9% |   +10 | 16.3% → 16.9% |     254 → 264 | `average(List)`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  +0.6% |    +9 | 96.1% → 96.7% | 1,502 → 1,511 | `tryRemoveAndExec(ForkJoinTask, boolean)`                   | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|  +0.6% |    +9 | 96.9% → 97.4% | 1,514 → 1,523 | `awaitDone(int, long)`                                      | `java.util.concurrent.ForkJoinTask`                        |
|  +0.6% |    +9 | 96.9% → 97.4% | 1,514 → 1,523 | `join()`                                                    | `java.util.concurrent.ForkJoinTask`                        |
|  +3.1% |    +8 | 16.4% → 16.9% |     256 → 264 | `computeClusterAverages()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| +44.4% |    +4 |   0.6% → 0.8% |        9 → 13 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`                            |
| +44.4% |    +4 |   0.6% → 0.8% |        9 → 13 | `launchHarnessClass(String, String[])`                      | `org.renaissance.core.Launcher`                            |
| +44.4% |    +4 |   0.6% → 0.8% |        9 → 13 | `main(String[])`                                            | `org.renaissance.core.Launcher`                            |

##### Ours

|  Change | Delta |             % |   Samples | Function                                                                                                               | Location                                                                              |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|   +2.6% |   +22 | 53.5% → 54.9% | 836 → 858 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   +3.1% |   +19 | 38.8% → 40.1% | 607 → 626 | `accumulate(Double[], double[])`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   +4.3% |   +17 | 25.1% → 26.2% | 392 → 409 | `distance(Double[], Double[])`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   +2.8% |   +17 | 38.6% → 39.7% | 604 → 621 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   +6.6% |   +16 | 15.5% → 16.6% | 243 → 259 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|   +3.9% |   +10 | 16.3% → 16.9% | 254 → 264 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|   +3.1% |    +8 | 16.4% → 16.9% | 256 → 264 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|  +44.4% |    +4 |   0.6% → 0.8% |    9 → 13 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                                       |
|  +44.4% |    +4 |   0.6% → 0.8% |    9 → 13 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                                       |
|  +44.4% |    +4 |   0.6% → 0.8% |    9 → 13 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                                       |
|  +57.1% |    +4 |   0.4% → 0.7% |    7 → 11 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                                           |
|  +37.5% |    +3 |   0.5% → 0.7% |    8 → 11 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                                            |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000a801204b38` |
|  +50.0% |    +1 |   0.1% → 0.2% |     2 → 3 | `extractResource(String, Path)`                                                                                        | `org.renaissance.core.ResourceUtils`                                                  |
|  +50.0% |    +1 |   0.1% → 0.2% |     2 → 3 | `extractResources(Iterable, Path)`                                                                                     | `org.renaissance.core.ResourceUtils`                                                  |
|  +50.0% |    +1 |   0.1% → 0.2% |     2 → 3 | `createClassLoaderForModule(String)`                                                                                   | `org.renaissance.core.ModuleLoader`                                                   |
|  +14.3% |    +1 |   0.4% → 0.5% |     7 → 8 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                           |
|  +14.3% |    +1 |   0.4% → 0.5% |     7 → 8 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a801198798`                |
|  +14.3% |    +1 |   0.4% → 0.5% |     7 → 8 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                                           |
|  +20.0% |    +1 |   0.3% → 0.4% |     5 → 6 | `generateData(int, int, int)`                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |

##### Standard library

|  Change | Delta |             % |       Samples | Function                                                      | Location                                             |
| ------: | ----: | ------------: | ------------: | ------------------------------------------------------------- | ---------------------------------------------------- |
|   +5.4% |   +62 | 72.9% → 76.9% | 1,140 → 1,202 | `runWorker(ForkJoinPool$WorkQueue)`                           | `java.util.concurrent.ForkJoinPool`                  |
|   +5.1% |   +59 | 73.4% → 77.2% | 1,148 → 1,207 | `scan(ForkJoinPool$WorkQueue, int, int)`                      | `java.util.concurrent.ForkJoinPool`                  |
|   +4.9% |   +58 | 76.3% → 80.0% | 1,192 → 1,250 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`          | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|   +5.2% |   +57 | 70.4% → 74.1% | 1,101 → 1,158 | `run()`                                                       | `java.util.concurrent.ForkJoinWorkerThread`          |
|   +4.1% |   +11 | 17.3% → 18.0% |     270 → 281 | `invoke()`                                                    | `java.util.concurrent.ForkJoinTask`                  |
|     new |   +11 |   0.0% → 0.7% |        0 → 11 | `invokeStatic(Object, Object)`                                | `java.lang.invoke.LambdaForm$DMH.0x000000a801001c00` |
|     new |   +11 |   0.0% → 0.7% |        0 → 11 | `invoke(Object, Object, Object)`                              | `java.lang.invoke.LambdaForm$MH.0x000000a801082400`  |
|   +0.6% |    +9 | 96.1% → 96.7% | 1,502 → 1,511 | `tryRemoveAndExec(ForkJoinTask, boolean)`                     | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|   +0.6% |    +9 | 96.9% → 97.4% | 1,514 → 1,523 | `awaitDone(int, long)`                                        | `java.util.concurrent.ForkJoinTask`                  |
|   +0.6% |    +9 | 96.9% → 97.4% | 1,514 → 1,523 | `join()`                                                      | `java.util.concurrent.ForkJoinTask`                  |
| +100.0% |    +3 |   0.2% → 0.4% |         3 → 6 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater`                             |
| +100.0% |    +3 |   0.2% → 0.4% |         3 → 6 | `inflate(byte[], int, int)`                                   | `java.util.zip.Inflater`                             |
| +100.0% |    +3 |   0.2% → 0.4% |         3 → 6 | `read(byte[], int, int)`                                      | `java.util.zip.InflaterInputStream`                  |
|  +37.5% |    +3 |   0.5% → 0.7% |        8 → 11 | `invokeExact_MT(Object, Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                   |
|  +37.5% |    +3 |   0.5% → 0.7% |        8 → 11 | `invokeImpl(Object, Object[])`                                | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +37.5% |    +3 |   0.5% → 0.7% |        8 → 11 | `invoke(Object, Object[])`                                    | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +37.5% |    +3 |   0.5% → 0.7% |        8 → 11 | `invoke(Object, Object[])`                                    | `java.lang.reflect.Method`                           |
| +200.0% |    +2 |   0.1% → 0.2% |         1 → 3 | `getBytes()`                                                  | `jdk.internal.loader.Resource`                       |
| +200.0% |    +2 |   0.1% → 0.2% |         1 → 3 | `getBytes()`                                                  | `jdk.internal.loader.URLClassPath$JarLoader$2`       |
| +200.0% |    +2 |   0.1% → 0.2% |         1 → 3 | `defineClass(String, Resource)`                               | `java.net.URLClassLoader`                            |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % |       Samples | Function                                                  | Location                                                               |
| ------: | ----: | ------------: | ------------: | --------------------------------------------------------- | ---------------------------------------------------------------------- |
|  -11.2% |   -53 | 30.4% → 27.0% |     475 → 422 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                                    |
|  -26.0% |   -19 |   4.7% → 3.5% |       73 → 54 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                                                    |
|   -2.4% |   -16 | 43.4% → 42.4% |     678 → 662 | `vectorSum()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   -2.4% |   -16 | 43.4% → 42.4% |     678 → 662 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -32.5% |   -13 |   2.6% → 1.7% |       40 → 27 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                                                     |
| removed |    -8 |   0.5% → 0.0% |         8 → 0 | `invokeStatic(Object, Object)`                            | `java.lang.invoke.LambdaForm$DMH.0x0000000501001c00`                   |
| removed |    -8 |   0.5% → 0.0% |         8 → 0 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000000501082400`                    |
|   -2.9% |    -6 | 13.3% → 12.9% |     208 → 202 | `collectClusters(int[])`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed |    -3 |   0.2% → 0.0% |         3 → 0 | `createSubtask(int, int)`                                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -0.1% |    -2 | 99.3% → 99.2% | 1,552 → 1,550 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                                    |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `lambda$merge$6(List, List)`                              | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `apply(Object, Object)`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000501204fd0` |
|  -25.0% |    -2 |   0.5% → 0.4% |         8 → 6 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                                                    |
|   -7.4% |    -2 |   1.7% → 1.6% |       27 → 25 | `lambda$run$0(int, List, int)`                            | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `boxed(double[])`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `match(byte[], byte[], byte[], byte[])`                   | `java.util.jar.JarFile`                                                |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `checkForSpecialAttributes()`                             | `java.util.jar.JarFile`                                                |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `hasClassPathAttribute()`                                 | `java.util.jar.JarFile`                                                |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `jarFileHasClassPathAttribute(JarFile)`                   | `java.util.jar.JavaUtilJarAccessImpl`                                  |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `getClassPath()`                                          | `jdk.internal.loader.URLClassPath$JarLoader`                           |

##### Ours

|  Change | Delta |             % |       Samples | Function                             | Location                                                               |
| ------: | ----: | ------------: | ------------: | ------------------------------------ | ---------------------------------------------------------------------- |
|   -2.4% |   -16 | 43.4% → 42.4% |     678 → 662 | `vectorSum()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   -2.4% |   -16 | 43.4% → 42.4% |     678 → 662 | `computeDirectly()`                  | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   -2.9% |    -6 | 13.3% → 12.9% |     208 → 202 | `collectClusters(int[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed |    -3 |   0.2% → 0.0% |         3 → 0 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `lambda$merge$6(List, List)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `apply(Object, Object)`              | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000501204fd0` |
|   -7.4% |    -2 |   1.7% → 1.6% |       27 → 25 | `lambda$run$0(int, List, int)`       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `boxed(double[])`                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   -0.1% |    -1 |         99.2% | 1,551 → 1,550 | `compute()`                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `combineResults(Object, Object)`     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |

##### Standard library

|  Change | Delta |             % |       Samples | Function                                                  | Location                                                 |
| ------: | ----: | ------------: | ------------: | --------------------------------------------------------- | -------------------------------------------------------- |
|  -11.2% |   -53 | 30.4% → 27.0% |     475 → 422 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                      |
|  -26.0% |   -19 |   4.7% → 3.5% |       73 → 54 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                                      |
|  -32.5% |   -13 |   2.6% → 1.7% |       40 → 27 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                                       |
| removed |    -8 |   0.5% → 0.0% |         8 → 0 | `invokeStatic(Object, Object)`                            | `java.lang.invoke.LambdaForm$DMH.0x0000000501001c00`     |
| removed |    -8 |   0.5% → 0.0% |         8 → 0 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000000501082400`      |
|   -0.1% |    -2 | 99.3% → 99.2% | 1,552 → 1,550 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                      |
|  -25.0% |    -2 |   0.5% → 0.4% |         8 → 6 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                                      |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `match(byte[], byte[], byte[], byte[])`                   | `java.util.jar.JarFile`                                  |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `checkForSpecialAttributes()`                             | `java.util.jar.JarFile`                                  |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `hasClassPathAttribute()`                                 | `java.util.jar.JarFile`                                  |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `jarFileHasClassPathAttribute(JarFile)`                   | `java.util.jar.JavaUtilJarAccessImpl`                    |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `getClassPath()`                                          | `jdk.internal.loader.URLClassPath$JarLoader`             |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `getLoader(int)`                                          | `jdk.internal.loader.URLClassPath`                       |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `getResource(String, boolean)`                            | `jdk.internal.loader.URLClassPath`                       |
|  -33.3% |    -1 |   0.2% → 0.1% |         3 → 2 | `evaluate(Spliterator, boolean, IntFunction)`             | `java.util.stream.AbstractPipeline`                      |
|  -33.3% |    -1 |   0.2% → 0.1% |         3 → 2 | `evaluateToArrayNode(IntFunction)`                        | `java.util.stream.AbstractPipeline`                      |
|  -33.3% |    -1 |   0.2% → 0.1% |         3 → 2 | `toArray(IntFunction)`                                    | `java.util.stream.ReferencePipeline`                     |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `accept(Object, Object)`                                  | `java.util.stream.Collectors$$Lambda.0x00000005010c40c8` |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `<clinit>()`                                              | `scala.collection.immutable.List$`                       |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `<init>()`                                                | `scala.collection.immutable.Iterable$`                   |

# Allocated heap profile diff

Allocated 37.8 GiB → 37.6 GiB (-143.583 MiB, -0.4%) over 2,040 samples (19 MiB → 18.9 MiB per sample).

| Category         | Change |      Delta |             % |                Size |       Samples |
| ---------------- | -----: | ---------: | ------------: | ------------------: | ------------: |
| Standard library |  -3.3% | -1.184 GiB | 95.2% → 92.4% |   36 GiB → 34.8 GiB | 1,935 → 1,913 |
| Ours             | +58.1% | +1.044 GiB |   4.8% → 7.6% |  1.8 GiB → 2.84 GiB |     103 → 125 |
| Unknown          |  -9.4% |     -224 B |         <0.1% | 2.34 KiB → 2.12 KiB |             2 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|   Change |        Delta |            % |                Size | Samples | Function                                     | Location                                                   |
| -------: | -----------: | -----------: | ------------------: | ------: | -------------------------------------------- | ---------------------------------------------------------- |
|  +693.5% | +617.875 MiB |  0.2% → 1.8% |  89.1 MiB → 707 MiB |  8 → 18 | `collectClusters(int[])`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +436.3% | +438.216 MiB |  0.3% → 1.4% |   100 MiB → 539 MiB | 13 → 12 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                                        |
|  +116.9% | +222.788 MiB |  0.5% → 1.1% |   191 MiB → 413 MiB | 15 → 12 | `grow(int)`                                  | `java.util.ArrayList`                                      |
| +4678.6% |  +186.22 MiB | <0.1% → 0.5% |  3.98 MiB → 190 MiB |   1 → 6 | `merge(Map, Map)`                            | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  +769.1% | +145.423 MiB | <0.1% → 0.4% |  18.9 MiB → 164 MiB |   4 → 6 | `createSubtask(int, int)`                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +1503.9% |  +83.585 MiB | <0.1% → 0.2% | 5.56 MiB → 89.1 MiB |   2 → 6 | `lambda$merge$6(List, List)`                 | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|   +21.5% |  +50.266 MiB |  0.6% → 0.7% |   234 MiB → 284 MiB |       8 | `lambda$collectClusters$0(Double[])`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +1889.0% |  +20.973 MiB | <0.1% → 0.1% | 1.11 MiB → 22.1 MiB |       3 | `enlarge(int)`                               | `jdk.internal.org.objectweb.asm.ByteVector`                |
|  +261.4% |   +8.489 MiB |        <0.1% | 3.25 MiB → 11.7 MiB |  9 → 32 | `mapToObj(IntFunction, int)`                 | `java.util.stream.IntPipeline`                             |
|      new |    +6.95 MiB | 0.0% → <0.1% |      0 B → 6.95 MiB |   0 → 1 | `iterator()`                                 | `java.util.HashMap$EntrySet`                               |
|  +145.3% |   +6.323 MiB |        <0.1% | 4.35 MiB → 10.7 MiB |  8 → 16 | `copyOf(Object[], int, Class)`               | `java.util.Arrays`                                         |
|   +34.5% |   +6.033 MiB | <0.1% → 0.1% | 17.5 MiB → 23.5 MiB |   7 → 5 | `createSubtask(int, int)`                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +102.4% |   +3.743 MiB |        <0.1% |  3.66 MiB → 7.4 MiB | 11 → 19 | `intStream(Spliterator$OfInt, boolean)`      | `java.util.stream.StreamSupport`                           |
|   +42.2% |   +1.585 MiB |        <0.1% | 3.76 MiB → 5.35 MiB | 10 → 12 | `<init>(InputStream, Inflater, int)`         | `java.util.zip.InflaterInputStream`                        |
|  +102.6% |   +1.194 MiB |        <0.1% | 1.16 MiB → 2.36 MiB |   2 → 1 | `add(double[], double[])`                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|      new |     +861 KiB | 0.0% → <0.1% |       0 B → 861 KiB |   0 → 1 | `result()`                                   | `scala.collection.immutable.VectorBuilder`                 |
|      new |  +776.21 KiB | 0.0% → <0.1% |       0 B → 776 KiB |   0 → 1 | `addConstantUtf8(String)`                    | `jdk.internal.org.objectweb.asm.SymbolTable`               |
|      new | +775.734 KiB | 0.0% → <0.1% |       0 B → 776 KiB |   0 → 2 | `copyOfRangeByte(byte[], int, int)`          | `java.util.Arrays`                                         |
|      new |  +506.32 KiB | 0.0% → <0.1% |       0 B → 506 KiB |   0 → 1 | `readNBytes(int)`                            | `java.io.InputStream`                                      |
|      new | +399.898 KiB | 0.0% → <0.1% |       0 B → 400 KiB |   0 → 1 | `in(Class)`                                  | `java.lang.invoke.MethodHandles$Lookup`                    |

##### Standard library

|   Change |        Delta |            % |                Size | Samples | Function                                                                        | Location                                     |
| -------: | -----------: | -----------: | ------------------: | ------: | ------------------------------------------------------------------------------- | -------------------------------------------- |
|  +436.3% | +438.216 MiB |  0.3% → 1.4% |   100 MiB → 539 MiB | 13 → 12 | `newNode(int, Object, Object, HashMap$Node)`                                    | `java.util.HashMap`                          |
|  +116.9% | +222.788 MiB |  0.5% → 1.1% |   191 MiB → 413 MiB | 15 → 12 | `grow(int)`                                                                     | `java.util.ArrayList`                        |
| +1889.0% |  +20.973 MiB | <0.1% → 0.1% | 1.11 MiB → 22.1 MiB |       3 | `enlarge(int)`                                                                  | `jdk.internal.org.objectweb.asm.ByteVector`  |
|  +261.4% |   +8.489 MiB |        <0.1% | 3.25 MiB → 11.7 MiB |  9 → 32 | `mapToObj(IntFunction, int)`                                                    | `java.util.stream.IntPipeline`               |
|      new |    +6.95 MiB | 0.0% → <0.1% |      0 B → 6.95 MiB |   0 → 1 | `iterator()`                                                                    | `java.util.HashMap$EntrySet`                 |
|  +145.3% |   +6.323 MiB |        <0.1% | 4.35 MiB → 10.7 MiB |  8 → 16 | `copyOf(Object[], int, Class)`                                                  | `java.util.Arrays`                           |
|  +102.4% |   +3.743 MiB |        <0.1% |  3.66 MiB → 7.4 MiB | 11 → 19 | `intStream(Spliterator$OfInt, boolean)`                                         | `java.util.stream.StreamSupport`             |
|   +42.2% |   +1.585 MiB |        <0.1% | 3.76 MiB → 5.35 MiB | 10 → 12 | `<init>(InputStream, Inflater, int)`                                            | `java.util.zip.InflaterInputStream`          |
|      new |     +861 KiB | 0.0% → <0.1% |       0 B → 861 KiB |   0 → 1 | `result()`                                                                      | `scala.collection.immutable.VectorBuilder`   |
|      new |  +776.21 KiB | 0.0% → <0.1% |       0 B → 776 KiB |   0 → 1 | `addConstantUtf8(String)`                                                       | `jdk.internal.org.objectweb.asm.SymbolTable` |
|      new | +775.734 KiB | 0.0% → <0.1% |       0 B → 776 KiB |   0 → 2 | `copyOfRangeByte(byte[], int, int)`                                             | `java.util.Arrays`                           |
|      new |  +506.32 KiB | 0.0% → <0.1% |       0 B → 506 KiB |   0 → 1 | `readNBytes(int)`                                                               | `java.io.InputStream`                        |
|      new | +399.898 KiB | 0.0% → <0.1% |       0 B → 400 KiB |   0 → 1 | `in(Class)`                                                                     | `java.lang.invoke.MethodHandles$Lookup`      |
|      new |  +394.89 KiB | 0.0% → <0.1% |       0 B → 395 KiB |   0 → 1 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                      |
|      new | +394.289 KiB | 0.0% → <0.1% |       0 B → 394 KiB |   0 → 1 | `<init>(int)`                                                                   | `java.io.ByteArrayOutputStream`              |
|      new | +393.625 KiB | 0.0% → <0.1% |       0 B → 394 KiB |   0 → 1 | `<init>(int)`                                                                   | `jdk.internal.org.objectweb.asm.ByteVector`  |
|      new | +393.492 KiB | 0.0% → <0.1% |       0 B → 393 KiB |   0 → 1 | `allocateUninitializedArray0(Class, int)`                                       | `jdk.internal.misc.Unsafe`                   |
|  +103.5% | +393.031 KiB |        <0.1% |   380 KiB → 773 KiB |   1 → 2 | `opWrapSink(int, Sink)`                                                         | `java.util.stream.IntPipeline$1`             |
|      new | +391.765 KiB | 0.0% → <0.1% |       0 B → 392 KiB |   0 → 1 | `addConstantUtf8Reference(int, String)`                                         | `jdk.internal.org.objectweb.asm.SymbolTable` |
|      new | +386.304 KiB | 0.0% → <0.1% |       0 B → 386 KiB |   0 → 1 | `<init>(int)`                                                                   | `java.lang.AbstractStringBuilder`            |

##### Ours

|   Change |        Delta |            % |                Size | Samples | Function                             | Location                                                   |
| -------: | -----------: | -----------: | ------------------: | ------: | ------------------------------------ | ---------------------------------------------------------- |
|  +693.5% | +617.875 MiB |  0.2% → 1.8% |  89.1 MiB → 707 MiB |  8 → 18 | `collectClusters(int[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +4678.6% |  +186.22 MiB | <0.1% → 0.5% |  3.98 MiB → 190 MiB |   1 → 6 | `merge(Map, Map)`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  +769.1% | +145.423 MiB | <0.1% → 0.4% |  18.9 MiB → 164 MiB |   4 → 6 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +1503.9% |  +83.585 MiB | <0.1% → 0.2% | 5.56 MiB → 89.1 MiB |   2 → 6 | `lambda$merge$6(List, List)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|   +21.5% |  +50.266 MiB |  0.6% → 0.7% |   234 MiB → 284 MiB |       8 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +34.5% |   +6.033 MiB | <0.1% → 0.1% | 17.5 MiB → 23.5 MiB |   7 → 5 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +102.6% |   +1.194 MiB |        <0.1% | 1.16 MiB → 2.36 MiB |   2 → 1 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |        Delta |             % |                Size |       Samples | Function                                                                                                                 | Location                                                   |
| ------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------- |
|   -4.1% |   -1.428 GiB | 93.0% → 89.6% | 35.1 GiB → 33.7 GiB | 1,779 → 1,746 | `copyOf(Object[], int)`                                                                                                  | `java.util.Arrays`                                         |
|  -79.4% | -270.567 MiB |   0.9% → 0.2% |  341 MiB → 70.1 MiB |         8 → 4 | `resize()`                                                                                                               | `java.util.HashMap`                                        |
|  -92.2% | -158.349 MiB |  0.4% → <0.1% |  172 MiB → 13.4 MiB |       24 → 26 | `copyOf(byte[], int)`                                                                                                    | `java.util.Arrays`                                         |
| removed |  -21.265 MiB |   0.1% → 0.0% |      21.3 MiB → 0 B |         1 → 0 | `initTable()`                                                                                                            | `java.util.concurrent.ConcurrentHashMap`                   |
|  -72.7% |   -8.567 MiB |         <0.1% | 11.8 MiB → 3.21 MiB |        32 → 9 | `valueOf(double)`                                                                                                        | `java.lang.Double`                                         |
|   -0.5% |     -7.7 MiB |          3.8% | 1.42 GiB → 1.41 GiB |       58 → 71 | `findNearestCentroid()`                                                                                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -92.1% |   -6.583 MiB |         <0.1% |  7.15 MiB → 576 KiB |         3 → 1 | `vectorSum()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| removed |   -4.324 MiB |  <0.1% → 0.0% |      4.32 MiB → 0 B |         1 → 0 | `div(double[], int)`                                                                                                     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -71.5% |   -2.409 MiB |         <0.1% |  3.37 MiB → 982 KiB |         9 → 3 | `lambda$generateData$4(int)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |   -1.384 MiB |  <0.1% → 0.0% |      1.38 MiB → 0 B |         3 → 0 | `fillInStackTrace(int)`                                                                                                  | `java.lang.Throwable`                                      |
|  -80.5% | -917.015 KiB |         <0.1% |  1.11 MiB → 222 KiB |         3 → 1 | `range(int, int)`                                                                                                        | `java.util.stream.IntStream`                               |
| removed | -769.093 KiB |  <0.1% → 0.0% |       769 KiB → 0 B |         2 → 0 | `replace(byte[], char, char)`                                                                                            | `java.lang.StringLatin1`                                   |
| removed | -436.609 KiB |  <0.1% → 0.0% |       437 KiB → 0 B |         1 → 0 | `newString(byte[], int, int)`                                                                                            | `java.lang.StringLatin1`                                   |
| removed | -395.156 KiB |  <0.1% → 0.0% |       395 KiB → 0 B |         1 → 0 | `transferTo(OutputStream)`                                                                                               | `java.io.InputStream`                                      |
| removed | -393.742 KiB |  <0.1% → 0.0% |       394 KiB → 0 B |         1 → 0 | `initCEN(int, ZipCoder)`                                                                                                 | `java.util.zip.ZipFile$Source`                             |
| removed | -386.906 KiB |  <0.1% → 0.0% |       387 KiB → 0 B |         1 → 0 | `<init>(MethodHandles$Lookup, MethodType, String, MethodType, MethodHandle, MethodType, boolean, Class[], MethodType[])` | `java.lang.invoke.InnerClassLambdaMetafactory`             |
| removed | -384.562 KiB |  <0.1% → 0.0% |       385 KiB → 0 B |         1 → 0 | `getTypeInternal(String, int, int)`                                                                                      | `jdk.internal.org.objectweb.asm.Type`                      |
| removed | -380.546 KiB |  <0.1% → 0.0% |       381 KiB → 0 B |         1 → 0 | `visitField(int, String, String, String, Object)`                                                                        | `jdk.internal.org.objectweb.asm.ClassWriter`               |
| removed | -379.585 KiB |  <0.1% → 0.0% |       380 KiB → 0 B |         1 → 0 | `allocateInstance(Class)`                                                                                                | `jdk.internal.misc.Unsafe`                                 |
| removed |  -379.57 KiB |  <0.1% → 0.0% |       380 KiB → 0 B |         1 → 0 | `toUpperCase(String, byte[], Locale)`                                                                                    | `java.lang.StringLatin1`                                   |

##### Standard library

|  Change |        Delta |             % |                Size |       Samples | Function                                                                                                                 | Location                                       |
| ------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- |
|   -4.1% |   -1.428 GiB | 93.0% → 89.6% | 35.1 GiB → 33.7 GiB | 1,779 → 1,746 | `copyOf(Object[], int)`                                                                                                  | `java.util.Arrays`                             |
|  -79.4% | -270.567 MiB |   0.9% → 0.2% |  341 MiB → 70.1 MiB |         8 → 4 | `resize()`                                                                                                               | `java.util.HashMap`                            |
|  -92.2% | -158.349 MiB |  0.4% → <0.1% |  172 MiB → 13.4 MiB |       24 → 26 | `copyOf(byte[], int)`                                                                                                    | `java.util.Arrays`                             |
| removed |  -21.265 MiB |   0.1% → 0.0% |      21.3 MiB → 0 B |         1 → 0 | `initTable()`                                                                                                            | `java.util.concurrent.ConcurrentHashMap`       |
|  -72.7% |   -8.567 MiB |         <0.1% | 11.8 MiB → 3.21 MiB |        32 → 9 | `valueOf(double)`                                                                                                        | `java.lang.Double`                             |
| removed |   -1.384 MiB |  <0.1% → 0.0% |      1.38 MiB → 0 B |         3 → 0 | `fillInStackTrace(int)`                                                                                                  | `java.lang.Throwable`                          |
|  -80.5% | -917.015 KiB |         <0.1% |  1.11 MiB → 222 KiB |         3 → 1 | `range(int, int)`                                                                                                        | `java.util.stream.IntStream`                   |
| removed | -769.093 KiB |  <0.1% → 0.0% |       769 KiB → 0 B |         2 → 0 | `replace(byte[], char, char)`                                                                                            | `java.lang.StringLatin1`                       |
| removed | -436.609 KiB |  <0.1% → 0.0% |       437 KiB → 0 B |         1 → 0 | `newString(byte[], int, int)`                                                                                            | `java.lang.StringLatin1`                       |
| removed | -395.156 KiB |  <0.1% → 0.0% |       395 KiB → 0 B |         1 → 0 | `transferTo(OutputStream)`                                                                                               | `java.io.InputStream`                          |
| removed | -393.742 KiB |  <0.1% → 0.0% |       394 KiB → 0 B |         1 → 0 | `initCEN(int, ZipCoder)`                                                                                                 | `java.util.zip.ZipFile$Source`                 |
| removed | -386.906 KiB |  <0.1% → 0.0% |       387 KiB → 0 B |         1 → 0 | `<init>(MethodHandles$Lookup, MethodType, String, MethodType, MethodHandle, MethodType, boolean, Class[], MethodType[])` | `java.lang.invoke.InnerClassLambdaMetafactory` |
| removed | -384.562 KiB |  <0.1% → 0.0% |       385 KiB → 0 B |         1 → 0 | `getTypeInternal(String, int, int)`                                                                                      | `jdk.internal.org.objectweb.asm.Type`          |
| removed | -380.546 KiB |  <0.1% → 0.0% |       381 KiB → 0 B |         1 → 0 | `visitField(int, String, String, String, Object)`                                                                        | `jdk.internal.org.objectweb.asm.ClassWriter`   |
| removed | -379.585 KiB |  <0.1% → 0.0% |       380 KiB → 0 B |         1 → 0 | `allocateInstance(Class)`                                                                                                | `jdk.internal.misc.Unsafe`                     |
| removed |  -379.57 KiB |  <0.1% → 0.0% |       380 KiB → 0 B |         1 → 0 | `toUpperCase(String, byte[], Locale)`                                                                                    | `java.lang.StringLatin1`                       |
| removed | -379.554 KiB |  <0.1% → 0.0% |       380 KiB → 0 B |         1 → 0 | `makeImpl(Class, Class[], boolean)`                                                                                      | `java.lang.invoke.MethodType`                  |
|  -19.9% | -151.179 KiB |         <0.1% |   759 KiB → 608 KiB |             2 | `builder(long, IntFunction)`                                                                                             | `java.util.stream.Nodes`                       |
| removed |  -31.187 KiB |  <0.1% → 0.0% |      31.2 KiB → 0 B |         1 → 0 | `doPeriodic()`                                                                                                           | `jdk.jfr.internal.periodic.PeriodicEvents`     |

##### Ours

|  Change |      Delta |            % |                Size | Samples | Function                     | Location                                                   |
| ------: | ---------: | -----------: | ------------------: | ------: | ---------------------------- | ---------------------------------------------------------- |
|   -0.5% |   -7.7 MiB |         3.8% | 1.42 GiB → 1.41 GiB | 58 → 71 | `findNearestCentroid()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -92.1% | -6.583 MiB |        <0.1% |  7.15 MiB → 576 KiB |   3 → 1 | `vectorSum()`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| removed | -4.324 MiB | <0.1% → 0.0% |      4.32 MiB → 0 B |   1 → 0 | `div(double[], int)`         | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -71.5% | -2.409 MiB |        <0.1% |  3.37 MiB → 982 KiB |   9 → 3 | `lambda$generateData$4(int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|    Change |        Delta |             % |                Size |       Samples | Function                                     | Location                                                   |
| --------: | -----------: | ------------: | ------------------: | ------------: | -------------------------------------------- | ---------------------------------------------------------- |
|    +59.1% |   +2.354 GiB | 10.6% → 16.9% | 3.99 GiB → 6.34 GiB |     265 → 293 | `collectClusters(int[])`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    +43.4% |   +2.346 GiB | 14.3% → 20.6% | 5.41 GiB → 7.75 GiB |     323 → 364 | `computeDirectly()`                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    +43.2% |   +1.508 GiB |  9.2% → 13.3% |    3.49 GiB → 5 GiB |     238 → 256 | `grow()`                                     | `java.util.ArrayList`                                      |
|    +43.2% |   +1.508 GiB |  9.2% → 13.3% |    3.49 GiB → 5 GiB |     238 → 256 | `add(Object, Object[], int)`                 | `java.util.ArrayList`                                      |
|    +43.2% |   +1.508 GiB |  9.2% → 13.3% |    3.49 GiB → 5 GiB |     238 → 256 | `add(Object)`                                | `java.util.ArrayList`                                      |
|     +2.3% | +616.775 MiB | 70.2% → 72.0% | 26.5 GiB → 27.1 GiB | 1,324 → 1,333 | `awaitDone(int, long)`                       | `java.util.concurrent.ForkJoinTask`                        |
|     +2.3% | +616.775 MiB | 70.2% → 72.0% | 26.5 GiB → 27.1 GiB | 1,324 → 1,333 | `join()`                                     | `java.util.concurrent.ForkJoinTask`                        |
|     +2.1% | +557.749 MiB | 69.4% → 71.1% | 26.2 GiB → 26.8 GiB | 1,299 → 1,316 | `tryRemoveAndExec(ForkJoinTask, boolean)`    | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|   +436.3% | +438.216 MiB |   0.3% → 1.4% |   100 MiB → 539 MiB |       13 → 12 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                                        |
|     +1.4% | +267.568 MiB | 48.3% → 49.2% | 18.2 GiB → 18.5 GiB |     902 → 924 | `grow(int)`                                  | `java.util.ArrayList`                                      |
|    +59.4% | +247.227 MiB |   1.1% → 1.7% |   416 MiB → 664 MiB |       20 → 19 | `computeIfAbsent(Object, Function)`          | `java.util.HashMap`                                        |
|       new | +207.509 MiB |   0.0% → 0.5% |       0 B → 208 MiB |       0 → 120 | `invokeStatic(Object, Object)`               | `java.lang.invoke.LambdaForm$DMH.0x000000a801001c00`       |
|       new | +207.509 MiB |   0.0% → 0.5% |       0 B → 208 MiB |       0 → 120 | `invoke(Object, Object, Object)`             | `java.lang.invoke.LambdaForm$MH.0x000000a801082400`        |
| +10848.4% |  +158.06 MiB |  <0.1% → 0.4% |  1.46 MiB → 160 MiB |         3 → 4 | `getManifestFromReference()`                 | `java.util.jar.JarFile`                                    |
| +10848.4% |  +158.06 MiB |  <0.1% → 0.4% |  1.46 MiB → 160 MiB |         3 → 4 | `getManifest()`                              | `java.util.jar.JarFile`                                    |
| +10848.4% |  +158.06 MiB |  <0.1% → 0.4% |  1.46 MiB → 160 MiB |         3 → 4 | `getManifest()`                              | `jdk.internal.loader.URLClassPath$JarLoader$2`             |
| +10822.9% | +157.687 MiB |  <0.1% → 0.4% |  1.46 MiB → 159 MiB |             3 | `read(InputStream, String)`                  | `java.util.jar.Manifest`                                   |
| +10822.9% | +157.687 MiB |  <0.1% → 0.4% |  1.46 MiB → 159 MiB |             3 | `<init>(JarVerifier, InputStream, String)`   | `java.util.jar.Manifest`                                   |
| +10822.9% | +157.687 MiB |  <0.1% → 0.4% |  1.46 MiB → 159 MiB |             3 | `<init>(InputStream, String)`                | `java.util.jar.Manifest`                                   |
| +14514.5% | +157.673 MiB |  <0.1% → 0.4% |  1.09 MiB → 159 MiB |             2 | `put(Object, Object)`                        | `java.util.HashMap`                                        |

##### Standard library

|    Change |        Delta |             % |                Size |       Samples | Function                                                     | Location                                             |
| --------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------------------ | ---------------------------------------------------- |
|    +43.2% |   +1.508 GiB |  9.2% → 13.3% |    3.49 GiB → 5 GiB |     238 → 256 | `grow()`                                                     | `java.util.ArrayList`                                |
|    +43.2% |   +1.508 GiB |  9.2% → 13.3% |    3.49 GiB → 5 GiB |     238 → 256 | `add(Object, Object[], int)`                                 | `java.util.ArrayList`                                |
|    +43.2% |   +1.508 GiB |  9.2% → 13.3% |    3.49 GiB → 5 GiB |     238 → 256 | `add(Object)`                                                | `java.util.ArrayList`                                |
|     +2.3% | +616.775 MiB | 70.2% → 72.0% | 26.5 GiB → 27.1 GiB | 1,324 → 1,333 | `awaitDone(int, long)`                                       | `java.util.concurrent.ForkJoinTask`                  |
|     +2.3% | +616.775 MiB | 70.2% → 72.0% | 26.5 GiB → 27.1 GiB | 1,324 → 1,333 | `join()`                                                     | `java.util.concurrent.ForkJoinTask`                  |
|     +2.1% | +557.749 MiB | 69.4% → 71.1% | 26.2 GiB → 26.8 GiB | 1,299 → 1,316 | `tryRemoveAndExec(ForkJoinTask, boolean)`                    | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|   +436.3% | +438.216 MiB |   0.3% → 1.4% |   100 MiB → 539 MiB |       13 → 12 | `newNode(int, Object, Object, HashMap$Node)`                 | `java.util.HashMap`                                  |
|     +1.4% | +267.568 MiB | 48.3% → 49.2% | 18.2 GiB → 18.5 GiB |     902 → 924 | `grow(int)`                                                  | `java.util.ArrayList`                                |
|    +59.4% | +247.227 MiB |   1.1% → 1.7% |   416 MiB → 664 MiB |       20 → 19 | `computeIfAbsent(Object, Function)`                          | `java.util.HashMap`                                  |
|       new | +207.509 MiB |   0.0% → 0.5% |       0 B → 208 MiB |       0 → 120 | `invokeStatic(Object, Object)`                               | `java.lang.invoke.LambdaForm$DMH.0x000000a801001c00` |
|       new | +207.509 MiB |   0.0% → 0.5% |       0 B → 208 MiB |       0 → 120 | `invoke(Object, Object, Object)`                             | `java.lang.invoke.LambdaForm$MH.0x000000a801082400`  |
| +10848.4% |  +158.06 MiB |  <0.1% → 0.4% |  1.46 MiB → 160 MiB |         3 → 4 | `getManifestFromReference()`                                 | `java.util.jar.JarFile`                              |
| +10848.4% |  +158.06 MiB |  <0.1% → 0.4% |  1.46 MiB → 160 MiB |         3 → 4 | `getManifest()`                                              | `java.util.jar.JarFile`                              |
| +10848.4% |  +158.06 MiB |  <0.1% → 0.4% |  1.46 MiB → 160 MiB |         3 → 4 | `getManifest()`                                              | `jdk.internal.loader.URLClassPath$JarLoader$2`       |
| +10822.9% | +157.687 MiB |  <0.1% → 0.4% |  1.46 MiB → 159 MiB |             3 | `read(InputStream, String)`                                  | `java.util.jar.Manifest`                             |
| +10822.9% | +157.687 MiB |  <0.1% → 0.4% |  1.46 MiB → 159 MiB |             3 | `<init>(JarVerifier, InputStream, String)`                   | `java.util.jar.Manifest`                             |
| +10822.9% | +157.687 MiB |  <0.1% → 0.4% |  1.46 MiB → 159 MiB |             3 | `<init>(InputStream, String)`                                | `java.util.jar.Manifest`                             |
| +14514.5% | +157.673 MiB |  <0.1% → 0.4% |  1.09 MiB → 159 MiB |             2 | `put(Object, Object)`                                        | `java.util.HashMap`                                  |
|  +1199.3% |  +22.458 MiB |  <0.1% → 0.1% | 1.87 MiB → 24.3 MiB |         5 → 8 | `invoke(Class, MethodHandle, String, Object, Object, Class)` | `java.lang.invoke.BootstrapMethodInvoker`            |
|  +1199.3% |  +22.458 MiB |  <0.1% → 0.1% | 1.87 MiB → 24.3 MiB |         5 → 8 | `makeSite(MethodHandle, String, MethodType, Object, Class)`  | `java.lang.invoke.CallSite`                          |

##### Ours

|  Change |        Delta |             % |                Size |   Samples | Function                                                                                                               | Location                                                                              |
| ------: | -----------: | ------------: | ------------------: | --------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|  +59.1% |   +2.354 GiB | 10.6% → 16.9% | 3.99 GiB → 6.34 GiB | 265 → 293 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +43.4% |   +2.346 GiB | 14.3% → 20.6% | 5.41 GiB → 7.75 GiB | 323 → 364 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| +769.1% | +145.423 MiB |  <0.1% → 0.4% |  18.9 MiB → 164 MiB |     4 → 6 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +21.5% |  +50.266 MiB |   0.6% → 0.7% |   234 MiB → 284 MiB |         8 | `lambda$collectClusters$0(Double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +21.5% |  +50.266 MiB |   0.6% → 0.7% |   234 MiB → 284 MiB |         8 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000a801204b38` |
| +111.1% |  +13.092 MiB |  <0.1% → 0.1% | 11.8 MiB → 24.9 MiB |   32 → 68 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a18d8`                |
|  +34.5% |   +6.033 MiB |  <0.1% → 0.1% | 17.5 MiB → 23.5 MiB |     7 → 5 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| +102.6% |   +1.194 MiB |         <0.1% | 1.16 MiB → 2.36 MiB |     2 → 1 | `add(double[], double[])`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| +102.6% |   +1.194 MiB |         <0.1% | 1.16 MiB → 2.36 MiB |     2 → 1 | `combineResults(double[], double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| +102.6% |   +1.194 MiB |         <0.1% | 1.16 MiB → 2.36 MiB |     2 → 1 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   +0.5% |   +1.115 MiB |          0.5% |   204 MiB → 205 MiB | 111 → 114 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                                           |
|   +0.5% | +959.867 KiB |          0.5% |   189 MiB → 190 MiB |   73 → 76 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                                             |
|   +0.4% | +869.867 KiB |          0.5% |   190 MiB → 191 MiB |   75 → 77 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                           |
|   +0.4% | +869.867 KiB |          0.5% |   190 MiB → 191 MiB |   75 → 77 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a801198798`                |
|   +0.4% | +869.867 KiB |          0.5% |   190 MiB → 191 MiB |   75 → 77 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                                           |
|     new |  +776.21 KiB |  0.0% → <0.1% |       0 B → 776 KiB |     0 → 1 | `getMatchingBenchmarks(Predicate)`                                                                                     | `org.renaissance.core.BenchmarkSuite`                                                 |
|   +0.4% | +756.851 KiB |          0.5% |   208 MiB → 209 MiB | 120 → 123 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                                       |
|   +0.4% | +756.851 KiB |          0.5% |   208 MiB → 209 MiB | 120 → 123 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                                       |
|   +0.4% | +751.656 KiB |          0.5% |   207 MiB → 208 MiB | 117 → 120 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                                            |
|   +0.4% | +742.742 KiB |          0.5% |   207 MiB → 208 MiB | 118 → 121 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                                       |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

| Change |        Delta |             % |                Size |       Samples | Function                                                  | Location                                                               |
| -----: | -----------: | ------------: | ------------------: | ------------: | --------------------------------------------------------- | ---------------------------------------------------------------------- |
|  -8.3% |   -2.632 GiB | 84.3% → 77.6% | 31.8 GiB → 29.2 GiB | 1,566 → 1,524 | `lambda$merge$6(List, List)`                              | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -8.3% |   -2.632 GiB | 84.3% → 77.6% | 31.8 GiB → 29.2 GiB | 1,566 → 1,524 | `apply(Object, Object)`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a801204fd0` |
|  -8.3% |   -2.632 GiB | 84.3% → 77.6% | 31.8 GiB → 29.2 GiB | 1,566 → 1,524 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                                                    |
|  -8.3% |   -2.632 GiB | 84.3% → 77.6% | 31.8 GiB → 29.2 GiB | 1,566 → 1,524 | `lambda$merge$7(Map, Object, List)`                       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -8.3% |   -2.632 GiB | 84.3% → 77.6% | 31.8 GiB → 29.2 GiB | 1,566 → 1,524 | `accept(Object, Object)`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a801204d88` |
|  -8.3% |   -2.632 GiB | 84.3% → 77.6% | 31.8 GiB → 29.2 GiB | 1,566 → 1,524 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                                                    |
|  -8.2% |   -2.626 GiB | 85.0% → 78.3% | 32.1 GiB → 29.5 GiB | 1,574 → 1,534 | `merge(Map, Map)`                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -8.2% |   -2.626 GiB | 85.0% → 78.3% | 32.1 GiB → 29.5 GiB | 1,574 → 1,534 | `combineResults(Map, Map)`                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -8.2% |   -2.626 GiB | 85.0% → 78.3% | 32.1 GiB → 29.5 GiB | 1,574 → 1,534 | `combineResults(Object, Object)`                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -7.8% |    -1.88 GiB | 63.9% → 59.1% | 24.1 GiB → 22.2 GiB | 1,154 → 1,137 | `addAll(Collection)`                                      | `java.util.ArrayList`                                                  |
|  -8.6% |   -1.466 GiB | 45.2% → 41.5% | 17.1 GiB → 15.6 GiB |     900 → 850 | `toArray()`                                               | `java.util.ArrayList`                                                  |
|  -4.1% |   -1.422 GiB | 93.0% → 89.6% | 35.1 GiB → 33.7 GiB | 1,787 → 1,762 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                                                     |
|  -2.9% |    -1.04 GiB | 95.1% → 92.7% | 35.9 GiB → 34.9 GiB | 1,825 → 1,814 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
| -12.0% | -902.867 MiB | 19.5% → 17.2% | 7.36 GiB → 6.48 GiB |     245 → 195 | `lambda$run$0(int, List, int)`                            | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| -12.0% | -902.867 MiB | 19.5% → 17.2% | 7.36 GiB → 6.48 GiB |     245 → 195 | `call()`                                                  | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011ffbc0` |
| -12.0% | -902.867 MiB | 19.5% → 17.2% | 7.36 GiB → 6.48 GiB |     245 → 195 | `exec()`                                                  | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                    |
|  -2.5% | -902.462 MiB | 93.9% → 91.9% | 35.5 GiB → 34.6 GiB | 1,794 → 1,793 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                                    |
|  -2.5% | -902.462 MiB | 93.9% → 91.9% | 35.5 GiB → 34.6 GiB | 1,794 → 1,793 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`                            |
| -20.5% | -853.874 MiB |  10.8% → 8.6% | 4.07 GiB → 3.23 GiB |     251 → 217 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                                    |
|  -2.3% | -853.669 MiB | 94.0% → 92.1% | 35.5 GiB → 34.7 GiB | 1,802 → 1,795 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                                    |

##### Standard library

|  Change |        Delta |             % |                Size |       Samples | Function                                                  | Location                                             |
| ------: | -----------: | ------------: | ------------------: | ------------: | --------------------------------------------------------- | ---------------------------------------------------- |
|   -8.3% |   -2.632 GiB | 84.3% → 77.6% | 31.8 GiB → 29.2 GiB | 1,566 → 1,524 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                                  |
|   -8.3% |   -2.632 GiB | 84.3% → 77.6% | 31.8 GiB → 29.2 GiB | 1,566 → 1,524 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                                  |
|   -7.8% |    -1.88 GiB | 63.9% → 59.1% | 24.1 GiB → 22.2 GiB | 1,154 → 1,137 | `addAll(Collection)`                                      | `java.util.ArrayList`                                |
|   -8.6% |   -1.466 GiB | 45.2% → 41.5% | 17.1 GiB → 15.6 GiB |     900 → 850 | `toArray()`                                               | `java.util.ArrayList`                                |
|   -4.1% |   -1.422 GiB | 93.0% → 89.6% | 35.1 GiB → 33.7 GiB | 1,787 → 1,762 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                                   |
|   -2.9% |    -1.04 GiB | 95.1% → 92.7% | 35.9 GiB → 34.9 GiB | 1,825 → 1,814 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|  -12.0% | -902.867 MiB | 19.5% → 17.2% | 7.36 GiB → 6.48 GiB |     245 → 195 | `exec()`                                                  | `java.util.concurrent.ForkJoinTask$AdaptedCallable`  |
|   -2.5% | -902.462 MiB | 93.9% → 91.9% | 35.5 GiB → 34.6 GiB | 1,794 → 1,793 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                  |
|   -2.5% | -902.462 MiB | 93.9% → 91.9% | 35.5 GiB → 34.6 GiB | 1,794 → 1,793 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`          |
|  -20.5% | -853.874 MiB |  10.8% → 8.6% | 4.07 GiB → 3.23 GiB |     251 → 217 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                  |
|   -2.3% | -853.669 MiB | 94.0% → 92.1% | 35.5 GiB → 34.7 GiB | 1,802 → 1,795 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                  |
|  -10.8% | -853.251 MiB | 20.4% → 18.3% |  7.7 GiB → 6.87 GiB |     410 → 381 | `<init>(Collection)`                                      | `java.util.ArrayList`                                |
|   -6.3% | -480.271 MiB | 19.6% → 18.5% | 7.42 GiB → 6.95 GiB |     257 → 207 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                  |
|  -79.4% | -270.567 MiB |   0.9% → 0.2% |  341 MiB → 70.1 MiB |         8 → 4 | `resize()`                                                | `java.util.HashMap`                                  |
| removed | -206.775 MiB |   0.5% → 0.0% |       207 MiB → 0 B |       117 → 0 | `invokeStatic(Object, Object)`                            | `java.lang.invoke.LambdaForm$DMH.0x0000000501001c00` |
| removed | -206.775 MiB |   0.5% → 0.0% |       207 MiB → 0 B |       117 → 0 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000000501082400`  |
|  -70.0% | -180.034 MiB |   0.7% → 0.2% |  257 MiB → 77.3 MiB |         7 → 4 | `putMapEntries(Map, boolean)`                             | `java.util.HashMap`                                  |
|  -70.0% | -180.034 MiB |   0.7% → 0.2% |  257 MiB → 77.3 MiB |         7 → 4 | `<init>(Map)`                                             | `java.util.HashMap`                                  |
|  -92.9% |  -159.53 MiB |  0.4% → <0.1% |  172 MiB → 12.2 MiB |       24 → 23 | `getBytes()`                                              | `jdk.internal.loader.Resource`                       |
|  -92.9% | -159.467 MiB |  0.4% → <0.1% |  172 MiB → 12.3 MiB |            24 | `getBytes()`                                              | `jdk.internal.loader.URLClassPath$JarLoader$2`       |

##### Ours

|  Change |        Delta |             % |                Size |       Samples | Function                                         | Location                                                               |
| ------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------ | ---------------------------------------------------------------------- |
|   -8.3% |   -2.632 GiB | 84.3% → 77.6% | 31.8 GiB → 29.2 GiB | 1,566 → 1,524 | `lambda$merge$6(List, List)`                     | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -8.3% |   -2.632 GiB | 84.3% → 77.6% | 31.8 GiB → 29.2 GiB | 1,566 → 1,524 | `apply(Object, Object)`                          | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a801204fd0` |
|   -8.3% |   -2.632 GiB | 84.3% → 77.6% | 31.8 GiB → 29.2 GiB | 1,566 → 1,524 | `lambda$merge$7(Map, Object, List)`              | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -8.3% |   -2.632 GiB | 84.3% → 77.6% | 31.8 GiB → 29.2 GiB | 1,566 → 1,524 | `accept(Object, Object)`                         | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a801204d88` |
|   -8.2% |   -2.626 GiB | 85.0% → 78.3% | 32.1 GiB → 29.5 GiB | 1,574 → 1,534 | `merge(Map, Map)`                                | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -8.2% |   -2.626 GiB | 85.0% → 78.3% | 32.1 GiB → 29.5 GiB | 1,574 → 1,534 | `combineResults(Map, Map)`                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -8.2% |   -2.626 GiB | 85.0% → 78.3% | 32.1 GiB → 29.5 GiB | 1,574 → 1,534 | `combineResults(Object, Object)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -12.0% | -902.867 MiB | 19.5% → 17.2% | 7.36 GiB → 6.48 GiB |     245 → 195 | `lambda$run$0(int, List, int)`                   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -12.0% | -902.867 MiB | 19.5% → 17.2% | 7.36 GiB → 6.48 GiB |     245 → 195 | `call()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011ffbc0` |
|   -0.4% | -144.477 MiB |         99.4% | 37.5 GiB → 37.4 GiB | 1,914 → 1,911 | `compute()`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  -96.1% |  -23.688 MiB |  0.1% → <0.1% |  24.6 MiB → 982 KiB |        68 → 3 | `apply(int)`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a1d48` |
|  -85.9% |  -14.596 MiB |         <0.1% |   17 MiB → 2.39 MiB |         6 → 3 | `average(List)`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -85.9% |  -14.596 MiB |         <0.1% |   17 MiB → 2.39 MiB |         6 → 3 | `computeClusterAverages()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -85.9% |  -14.596 MiB |         <0.1% |   17 MiB → 2.39 MiB |         6 → 3 | `computeDirectly()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -72.7% |   -8.567 MiB |         <0.1% | 11.8 MiB → 3.21 MiB |        32 → 9 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -0.5% |     -7.7 MiB |          3.8% | 1.42 GiB → 1.41 GiB |       58 → 71 | `findNearestCentroid()`                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -92.1% |   -6.583 MiB |         <0.1% |  7.15 MiB → 576 KiB |         3 → 1 | `vectorSum()`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -92.1% |   -6.583 MiB |         <0.1% |  7.15 MiB → 576 KiB |         3 → 1 | `computeDirectly()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| removed |   -4.324 MiB |  <0.1% → 0.0% |      4.32 MiB → 0 B |         1 → 0 | `div(double[], int)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -71.5% |   -2.409 MiB |         <0.1% |  3.37 MiB → 982 KiB |         9 → 3 | `lambda$generateData$4(int)`                     | `org.renaissance.jdk.concurrent.JavaKMeans`                            |

# Retained heap profile diff

Retained 2.56 MiB → 2.5 MiB (-61.304 KiB, -2.3%) over 10 objects (262 KiB → 256 KiB per object).

| Category         | Change |       Delta |      % |               Size | Objects |
| ---------------- | -----: | ----------: | -----: | -----------------: | ------: |
| Standard library |  -2.3% | -61.304 KiB | 100.0% | 2.56 MiB → 2.5 MiB |       9 |
| Ours             |   0.0% |         0 B |  <0.1% |               40 B |       1 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

##### Standard library

| Change |       Delta |             % |                Size | Objects | Function                     | Location                 |
| -----: | ----------: | ------------: | ------------------: | ------: | ---------------------------- | ------------------------ |
|  +9.2% | +194.71 KiB | 80.5% → 90.0% | 2.06 MiB → 2.25 MiB |   1 → 2 | `copyOf(Object[], int)`      | `java.util.Arrays`       |
|    new |       +24 B |  0.0% → <0.1% |          0 B → 24 B |   0 → 1 | `parseName(byte[], int)`     | `java.util.jar.Manifest` |
| +14.3% |        +8 B |         <0.1% |         56 B → 64 B |       1 | `compress(char[], int, int)` | `java.lang.StringUTF16`  |

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

##### Standard library

|  Change |        Delta |            % |          Size | Objects | Function                                     | Location                                 |
| ------: | -----------: | -----------: | ------------: | ------: | -------------------------------------------- | ---------------------------------------- |
| removed | -256.015 KiB |  9.8% → 0.0% | 256 KiB → 0 B |   1 → 0 | `initTable()`                                | `java.util.concurrent.ConcurrentHashMap` |
| removed |        -32 B | <0.1% → 0.0% |    32 B → 0 B |   1 → 0 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                      |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

| Change |       Delta |             % |                Size | Objects | Function                                  | Location                                                               |
| -----: | ----------: | ------------: | ------------------: | ------: | ----------------------------------------- | ---------------------------------------------------------------------- |
|    new |   +2.31 MiB |  0.0% → 92.4% |      0 B → 2.31 MiB |   0 → 9 | `invokeStatic(Object, Object)`            | `java.lang.invoke.LambdaForm$DMH.0x000000a801001c00`                   |
|    new |   +2.31 MiB |  0.0% → 92.4% |      0 B → 2.31 MiB |   0 → 9 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000a801082400`                    |
|  +9.2% | +194.71 KiB | 80.5% → 90.0% | 2.06 MiB → 2.25 MiB |   1 → 2 | `copyOf(Object[], int)`                   | `java.util.Arrays`                                                     |
|  +9.2% | +194.71 KiB | 80.5% → 90.0% | 2.06 MiB → 2.25 MiB |   1 → 2 | `grow(int)`                               | `java.util.ArrayList`                                                  |
|    new | +194.71 KiB |   0.0% → 7.6% |       0 B → 195 KiB |   0 → 1 | `addAll(Collection)`                      | `java.util.ArrayList`                                                  |
|    new | +194.71 KiB |   0.0% → 7.6% |       0 B → 195 KiB |   0 → 1 | `lambda$merge$6(List, List)`              | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|    new | +194.71 KiB |   0.0% → 7.6% |       0 B → 195 KiB |   0 → 1 | `apply(Object, Object)`                   | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a801204fd0` |
|    new | +194.71 KiB |   0.0% → 7.6% |       0 B → 195 KiB |   0 → 1 | `merge(Object, Object, BiFunction)`       | `java.util.HashMap`                                                    |
|    new | +194.71 KiB |   0.0% → 7.6% |       0 B → 195 KiB |   0 → 1 | `lambda$merge$7(Map, Object, List)`       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|    new | +194.71 KiB |   0.0% → 7.6% |       0 B → 195 KiB |   0 → 1 | `accept(Object, Object)`                  | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a801204d88` |
|    new | +194.71 KiB |   0.0% → 7.6% |       0 B → 195 KiB |   0 → 1 | `forEach(BiConsumer)`                     | `java.util.HashMap`                                                    |
|    new | +194.71 KiB |   0.0% → 7.6% |       0 B → 195 KiB |   0 → 1 | `merge(Map, Map)`                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|    new | +194.71 KiB |   0.0% → 7.6% |       0 B → 195 KiB |   0 → 1 | `combineResults(Map, Map)`                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|    new | +194.71 KiB |   0.0% → 7.6% |       0 B → 195 KiB |   0 → 1 | `combineResults(Object, Object)`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|    new | +194.71 KiB |   0.0% → 7.6% |       0 B → 195 KiB |   0 → 1 | `compute()`                               | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|    new | +194.71 KiB |   0.0% → 7.6% |       0 B → 195 KiB |   0 → 1 | `exec()`                                  | `java.util.concurrent.RecursiveTask`                                   |
|    new | +194.71 KiB |   0.0% → 7.6% |       0 B → 195 KiB |   0 → 1 | `doExec()`                                | `java.util.concurrent.ForkJoinTask`                                    |
|    new | +194.71 KiB |   0.0% → 7.6% |       0 B → 195 KiB |   0 → 1 | `tryRemoveAndExec(ForkJoinTask, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|    new | +194.71 KiB |   0.0% → 7.6% |       0 B → 195 KiB |   0 → 1 | `awaitDone(int, long)`                    | `java.util.concurrent.ForkJoinTask`                                    |
|    new | +194.71 KiB |   0.0% → 7.6% |       0 B → 195 KiB |   0 → 1 | `join()`                                  | `java.util.concurrent.ForkJoinTask`                                    |

##### Standard library

| Change |       Delta |             % |                Size | Objects | Function                                             | Location                                             |
| -----: | ----------: | ------------: | ------------------: | ------: | ---------------------------------------------------- | ---------------------------------------------------- |
|    new |   +2.31 MiB |  0.0% → 92.4% |      0 B → 2.31 MiB |   0 → 9 | `invokeStatic(Object, Object)`                       | `java.lang.invoke.LambdaForm$DMH.0x000000a801001c00` |
|    new |   +2.31 MiB |  0.0% → 92.4% |      0 B → 2.31 MiB |   0 → 9 | `invoke(Object, Object, Object)`                     | `java.lang.invoke.LambdaForm$MH.0x000000a801082400`  |
|  +9.2% | +194.71 KiB | 80.5% → 90.0% | 2.06 MiB → 2.25 MiB |   1 → 2 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                   |
|  +9.2% | +194.71 KiB | 80.5% → 90.0% | 2.06 MiB → 2.25 MiB |   1 → 2 | `grow(int)`                                          | `java.util.ArrayList`                                |
|    new | +194.71 KiB |   0.0% → 7.6% |       0 B → 195 KiB |   0 → 1 | `addAll(Collection)`                                 | `java.util.ArrayList`                                |
|    new | +194.71 KiB |   0.0% → 7.6% |       0 B → 195 KiB |   0 → 1 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                                  |
|    new | +194.71 KiB |   0.0% → 7.6% |       0 B → 195 KiB |   0 → 1 | `forEach(BiConsumer)`                                | `java.util.HashMap`                                  |
|    new | +194.71 KiB |   0.0% → 7.6% |       0 B → 195 KiB |   0 → 1 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                 |
|    new | +194.71 KiB |   0.0% → 7.6% |       0 B → 195 KiB |   0 → 1 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                  |
|    new | +194.71 KiB |   0.0% → 7.6% |       0 B → 195 KiB |   0 → 1 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|    new | +194.71 KiB |   0.0% → 7.6% |       0 B → 195 KiB |   0 → 1 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                  |
|    new | +194.71 KiB |   0.0% → 7.6% |       0 B → 195 KiB |   0 → 1 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                  |
|    new | +194.71 KiB |   0.0% → 7.6% |       0 B → 195 KiB |   0 → 1 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|    new | +194.71 KiB |   0.0% → 7.6% |       0 B → 195 KiB |   0 → 1 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                  |
|    new | +194.71 KiB |   0.0% → 7.6% |       0 B → 195 KiB |   0 → 1 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                  |
|    new | +194.71 KiB |   0.0% → 7.6% |       0 B → 195 KiB |   0 → 1 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`          |
|    new |       +24 B |  0.0% → <0.1% |          0 B → 24 B |   0 → 1 | `parseName(byte[], int)`                             | `java.util.jar.Manifest`                             |
| +14.3% |        +8 B |         <0.1% |         56 B → 64 B |       1 | `compress(char[], int, int)`                         | `java.lang.StringUTF16`                              |
| +14.3% |        +8 B |         <0.1% |         56 B → 64 B |       1 | `<init>(char[], int, int, Void)`                     | `java.lang.String`                                   |
| +14.3% |        +8 B |         <0.1% |         56 B → 64 B |       1 | `<init>(char[], int, int)`                           | `java.lang.String`                                   |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

|  Change |        Delta |            % |           Size | Objects | Function                                                                          | Location                                                               |
| ------: | -----------: | -----------: | -------------: | ------: | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| removed |    -2.31 MiB | 90.2% → 0.0% | 2.31 MiB → 0 B |   9 → 0 | `invokeStatic(Object, Object)`                                                    | `java.lang.invoke.LambdaForm$DMH.0x0000000501001c00`                   |
| removed |    -2.31 MiB | 90.2% → 0.0% | 2.31 MiB → 0 B |   9 → 0 | `invoke(Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x0000000501082400`                    |
| removed | -256.015 KiB |  9.8% → 0.0% |  256 KiB → 0 B |   1 → 0 | `initTable()`                                                                     | `java.util.concurrent.ConcurrentHashMap`                               |
| removed | -256.015 KiB |  9.8% → 0.0% |  256 KiB → 0 B |   1 → 0 | `putVal(Object, Object, boolean)`                                                 | `java.util.concurrent.ConcurrentHashMap`                               |
| removed | -256.015 KiB |  9.8% → 0.0% |  256 KiB → 0 B |   1 → 0 | `put(Object, Object)`                                                             | `java.util.concurrent.ConcurrentHashMap`                               |
| removed | -256.015 KiB |  9.8% → 0.0% |  256 KiB → 0 B |   1 → 0 | `storeString(String)`                                                             | `jdk.jfr.internal.StringPool`                                          |
| removed | -256.015 KiB |  9.8% → 0.0% |  256 KiB → 0 B |   1 → 0 | `addString(String)`                                                               | `jdk.jfr.internal.StringPool`                                          |
| removed | -256.015 KiB |  9.8% → 0.0% |  256 KiB → 0 B |   1 → 0 | `putString(String)`                                                               | `jdk.jfr.internal.event.EventWriter`                                   |
| removed | -256.015 KiB |  9.8% → 0.0% |  256 KiB → 0 B |   1 → 0 | `commit(long, long, long, String, String, boolean, long, long, long, long, long)` | `jdk.jfr.events.ActiveRecordingEvent`                                  |
| removed | -256.015 KiB |  9.8% → 0.0% |  256 KiB → 0 B |   1 → 0 | `writeMetaEvents()`                                                               | `jdk.jfr.internal.PlatformRecorder`                                    |
| removed | -256.015 KiB |  9.8% → 0.0% |  256 KiB → 0 B |   1 → 0 | `start(PlatformRecording)`                                                        | `jdk.jfr.internal.PlatformRecorder`                                    |
| removed | -256.015 KiB |  9.8% → 0.0% |  256 KiB → 0 B |   1 → 0 | `start()`                                                                         | `jdk.jfr.internal.PlatformRecording`                                   |
| removed | -256.015 KiB |  9.8% → 0.0% |  256 KiB → 0 B |   1 → 0 | `start()`                                                                         | `jdk.jfr.Recording`                                                    |
| removed | -256.015 KiB |  9.8% → 0.0% |  256 KiB → 0 B |   1 → 0 | `execute(ArgumentParser)`                                                         | `jdk.jfr.internal.dcmd.DCmdStart`                                      |
| removed | -256.015 KiB |  9.8% → 0.0% |  256 KiB → 0 B |   1 → 0 | `execute(String, String, char)`                                                   | `jdk.jfr.internal.dcmd.AbstractDCmd`                                   |
|  -58.3% |        -56 B |        <0.1% |    96 B → 40 B |   4 → 1 | `apply(int)`                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a1d48` |
| removed |        -32 B | <0.1% → 0.0% |     32 B → 0 B |   1 → 0 | `newNode(int, Object, Object, HashMap$Node)`                                      | `java.util.HashMap`                                                    |
| removed |        -32 B | <0.1% → 0.0% |     32 B → 0 B |   1 → 0 | `putVal(int, Object, Object, boolean, boolean)`                                   | `java.util.HashMap`                                                    |
| removed |        -32 B | <0.1% → 0.0% |     32 B → 0 B |   1 → 0 | `put(Object, Object)`                                                             | `java.util.HashMap`                                                    |
|     ~0% |         -8 B | 9.7% → 10.0% |        255 KiB |       2 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)`       | `java.security.AccessController`                                       |

##### Standard library

|  Change |        Delta |            % |           Size | Objects | Function                                                                          | Location                                             |
| ------: | -----------: | -----------: | -------------: | ------: | --------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |    -2.31 MiB | 90.2% → 0.0% | 2.31 MiB → 0 B |   9 → 0 | `invokeStatic(Object, Object)`                                                    | `java.lang.invoke.LambdaForm$DMH.0x0000000501001c00` |
| removed |    -2.31 MiB | 90.2% → 0.0% | 2.31 MiB → 0 B |   9 → 0 | `invoke(Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x0000000501082400`  |
| removed | -256.015 KiB |  9.8% → 0.0% |  256 KiB → 0 B |   1 → 0 | `initTable()`                                                                     | `java.util.concurrent.ConcurrentHashMap`             |
| removed | -256.015 KiB |  9.8% → 0.0% |  256 KiB → 0 B |   1 → 0 | `putVal(Object, Object, boolean)`                                                 | `java.util.concurrent.ConcurrentHashMap`             |
| removed | -256.015 KiB |  9.8% → 0.0% |  256 KiB → 0 B |   1 → 0 | `put(Object, Object)`                                                             | `java.util.concurrent.ConcurrentHashMap`             |
| removed | -256.015 KiB |  9.8% → 0.0% |  256 KiB → 0 B |   1 → 0 | `storeString(String)`                                                             | `jdk.jfr.internal.StringPool`                        |
| removed | -256.015 KiB |  9.8% → 0.0% |  256 KiB → 0 B |   1 → 0 | `addString(String)`                                                               | `jdk.jfr.internal.StringPool`                        |
| removed | -256.015 KiB |  9.8% → 0.0% |  256 KiB → 0 B |   1 → 0 | `putString(String)`                                                               | `jdk.jfr.internal.event.EventWriter`                 |
| removed | -256.015 KiB |  9.8% → 0.0% |  256 KiB → 0 B |   1 → 0 | `commit(long, long, long, String, String, boolean, long, long, long, long, long)` | `jdk.jfr.events.ActiveRecordingEvent`                |
| removed | -256.015 KiB |  9.8% → 0.0% |  256 KiB → 0 B |   1 → 0 | `writeMetaEvents()`                                                               | `jdk.jfr.internal.PlatformRecorder`                  |
| removed | -256.015 KiB |  9.8% → 0.0% |  256 KiB → 0 B |   1 → 0 | `start(PlatformRecording)`                                                        | `jdk.jfr.internal.PlatformRecorder`                  |
| removed | -256.015 KiB |  9.8% → 0.0% |  256 KiB → 0 B |   1 → 0 | `start()`                                                                         | `jdk.jfr.internal.PlatformRecording`                 |
| removed | -256.015 KiB |  9.8% → 0.0% |  256 KiB → 0 B |   1 → 0 | `start()`                                                                         | `jdk.jfr.Recording`                                  |
| removed | -256.015 KiB |  9.8% → 0.0% |  256 KiB → 0 B |   1 → 0 | `execute(ArgumentParser)`                                                         | `jdk.jfr.internal.dcmd.DCmdStart`                    |
| removed | -256.015 KiB |  9.8% → 0.0% |  256 KiB → 0 B |   1 → 0 | `execute(String, String, char)`                                                   | `jdk.jfr.internal.dcmd.AbstractDCmd`                 |
| removed |        -32 B | <0.1% → 0.0% |     32 B → 0 B |   1 → 0 | `newNode(int, Object, Object, HashMap$Node)`                                      | `java.util.HashMap`                                  |
| removed |        -32 B | <0.1% → 0.0% |     32 B → 0 B |   1 → 0 | `putVal(int, Object, Object, boolean, boolean)`                                   | `java.util.HashMap`                                  |
| removed |        -32 B | <0.1% → 0.0% |     32 B → 0 B |   1 → 0 | `put(Object, Object)`                                                             | `java.util.HashMap`                                  |
|     ~0% |         -8 B | 9.7% → 10.0% |        255 KiB |       2 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)`       | `java.security.AccessController`                     |
|     ~0% |         -8 B | 9.7% → 10.0% |        255 KiB |       2 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)`                   | `java.security.AccessController`                     |

# Lock contention profile diff

Blocked 7.57s → 7.50s (-69.88ms, -0.9%) over 69 contentions → 62 contentions (109.8ms → 121.0ms per contention).

| Category         | Change |    Delta |      % |          Time | Contentions |
| ---------------- | -----: | -------: | -----: | ------------: | ----------: |
| Standard library |  -0.9% | -69.88ms | 100.0% | 7.57s → 7.50s |     69 → 62 |

## Hottest functions

### Self time

#### Improvements

Functions with the largest decrease in time blocked directly in the function body, excluding callees.

##### Standard library

| Change |    Delta |      % |          Time | Contentions | Function              | Location                   |
| -----: | -------: | -----: | ------------: | ----------: | --------------------- | -------------------------- |
|  -0.9% | -69.88ms | 100.0% | 7.57s → 7.50s |     69 → 62 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

| Change |     Delta |             % |              Time | Contentions | Function                                                                                                               | Location                                                             |
| -----: | --------: | ------------: | ----------------: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
|    new |   +6.188s |  0.0% → 82.5% |       0ms → 6.18s |      0 → 16 | `invokeStatic(Object, Object)`                                                                                         | `java.lang.invoke.LambdaForm$DMH.0x000000a801001c00`                 |
|    new |   +6.188s |  0.0% → 82.5% |       0ms → 6.18s |      0 → 16 | `invoke(Object, Object, Object)`                                                                                       | `java.lang.invoke.LambdaForm$MH.0x000000a801082400`                  |
| +69.1% | +112.83ms |   2.2% → 3.7% | 163.2ms → 276.0ms |       5 → 9 | `parkUntil(long)`                                                                                                      | `java.util.concurrent.locks.LockSupport`                             |
|  +1.1% |  +69.37ms | 81.3% → 83.0% |     6.15s → 6.22s |     16 → 17 | `awaitDone(int, long)`                                                                                                 | `java.util.concurrent.ForkJoinTask`                                  |
|    new |  +39.48ms |   0.0% → 0.5% |      0ms → 39.5ms |       0 → 1 | `join()`                                                                                                               | `java.util.concurrent.ForkJoinTask`                                  |
|    new |  +39.48ms |   0.0% → 0.5% |      0ms → 39.5ms |       0 → 1 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`               |
|    new |  +39.48ms |   0.0% → 0.5% |      0ms → 39.5ms |       0 → 1 | `exec()`                                                                                                               | `java.util.concurrent.RecursiveTask`                                 |
|    new |  +39.48ms |   0.0% → 0.5% |      0ms → 39.5ms |       0 → 1 | `doExec()`                                                                                                             | `java.util.concurrent.ForkJoinTask`                                  |
|    new |  +39.48ms |   0.0% → 0.5% |      0ms → 39.5ms |       0 → 1 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`                                                                   | `java.util.concurrent.ForkJoinPool$WorkQueue`                        |
|    new |  +39.48ms |   0.0% → 0.5% |      0ms → 39.5ms |       0 → 1 | `scan(ForkJoinPool$WorkQueue, int, int)`                                                                               | `java.util.concurrent.ForkJoinPool`                                  |
|  +0.5% |  +29.89ms | 81.3% → 82.5% |     6.15s → 6.18s |          16 | `get()`                                                                                                                | `java.util.concurrent.ForkJoinTask`                                  |
|  +0.5% |  +29.89ms | 81.3% → 82.5% |     6.15s → 6.18s |          16 | `run(int, List, int)`                                                                                                  | `org.renaissance.jdk.concurrent.JavaKMeans`                          |
|  +0.5% |  +29.89ms | 81.3% → 82.5% |     6.15s → 6.18s |          16 | `$anonfun$1(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`                            |
|  +0.5% |  +29.89ms | 81.3% → 82.5% |     6.15s → 6.18s |          16 | `$anonfun$adapted$1(Object)`                                                                                           | `org.renaissance.jdk.concurrent.FjKmeans`                            |
|  +0.5% |  +29.89ms | 81.3% → 82.5% |     6.15s → 6.18s |          16 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000a8011f6c70` |
|  +0.5% |  +29.89ms | 81.3% → 82.5% |     6.15s → 6.18s |          16 | `map(Function1)`                                                                                                       | `scala.collection.immutable.Range`                                   |
|  +0.5% |  +29.89ms | 81.3% → 82.5% |     6.15s → 6.18s |          16 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                            |
|  +0.5% |  +29.89ms | 81.3% → 82.5% |     6.15s → 6.18s |          16 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                            |
|  +0.5% |  +29.89ms | 81.3% → 82.5% |     6.15s → 6.18s |          16 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                            |
|  +0.5% |  +29.89ms | 81.3% → 82.5% |     6.15s → 6.18s |          16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                          |

##### Standard library

| Change |     Delta |             % |              Time | Contentions | Function                                             | Location                                             |
| -----: | --------: | ------------: | ----------------: | ----------: | ---------------------------------------------------- | ---------------------------------------------------- |
|    new |   +6.188s |  0.0% → 82.5% |       0ms → 6.18s |      0 → 16 | `invokeStatic(Object, Object)`                       | `java.lang.invoke.LambdaForm$DMH.0x000000a801001c00` |
|    new |   +6.188s |  0.0% → 82.5% |       0ms → 6.18s |      0 → 16 | `invoke(Object, Object, Object)`                     | `java.lang.invoke.LambdaForm$MH.0x000000a801082400`  |
| +69.1% | +112.83ms |   2.2% → 3.7% | 163.2ms → 276.0ms |       5 → 9 | `parkUntil(long)`                                    | `java.util.concurrent.locks.LockSupport`             |
|  +1.1% |  +69.37ms | 81.3% → 83.0% |     6.15s → 6.22s |     16 → 17 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                  |
|    new |  +39.48ms |   0.0% → 0.5% |      0ms → 39.5ms |       0 → 1 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                  |
|    new |  +39.48ms |   0.0% → 0.5% |      0ms → 39.5ms |       0 → 1 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                 |
|    new |  +39.48ms |   0.0% → 0.5% |      0ms → 39.5ms |       0 → 1 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                  |
|    new |  +39.48ms |   0.0% → 0.5% |      0ms → 39.5ms |       0 → 1 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|    new |  +39.48ms |   0.0% → 0.5% |      0ms → 39.5ms |       0 → 1 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                  |
|  +0.5% |  +29.89ms | 81.3% → 82.5% |     6.15s → 6.18s |          16 | `get()`                                              | `java.util.concurrent.ForkJoinTask`                  |
|  +0.5% |  +29.89ms | 81.3% → 82.5% |     6.15s → 6.18s |          16 | `map(Function1)`                                     | `scala.collection.immutable.Range`                   |
|  +0.5% |  +29.89ms | 81.3% → 82.5% |     6.15s → 6.18s |          16 | `apply(Object)`                                      | `scala.runtime.function.JProcedure1`                 |
|  +0.5% |  +29.89ms | 81.3% → 82.5% |     6.15s → 6.18s |          16 | `foreach(Function1)`                                 | `scala.collection.immutable.List`                    |
|  +0.5% |  +29.89ms | 81.3% → 82.5% |     6.15s → 6.18s |          16 | `invokeExact_MT(Object, Object, Object, Object)`     | `java.lang.invoke.Invokers$Holder`                   |
|  +0.5% |  +29.89ms | 81.3% → 82.5% |     6.15s → 6.18s |          16 | `invokeImpl(Object, Object[])`                       | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +0.5% |  +29.89ms | 81.3% → 82.5% |     6.15s → 6.18s |          16 | `invoke(Object, Object[])`                           | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +0.5% |  +29.89ms | 81.3% → 82.5% |     6.15s → 6.18s |          16 | `invoke(Object, Object[])`                           | `java.lang.reflect.Method`                           |

#### Improvements

Functions with the largest decrease in total time blocked in the function and all its callees.

##### Standard library

|  Change |     Delta |             % |          Time | Contentions | Function                            | Location                                             |
| ------: | --------: | ------------: | ------------: | ----------: | ----------------------------------- | ---------------------------------------------------- |
| removed |   -6.158s |  81.3% → 0.0% |   6.15s → 0ms |      16 → 0 | `invokeStatic(Object, Object)`      | `java.lang.invoke.LambdaForm$DMH.0x0000000501001c00` |
| removed |   -6.158s |  81.3% → 0.0% |   6.15s → 0ms |      16 → 0 | `invoke(Object, Object, Object)`    | `java.lang.invoke.LambdaForm$MH.0x0000000501082400`  |
|   -2.5% | -182.71ms | 97.8% → 96.3% | 7.41s → 7.22s |     64 → 53 | `park()`                            | `java.util.concurrent.locks.LockSupport`             |
|   -9.8% | -139.25ms | 18.7% → 17.0% | 1.41s → 1.27s |     53 → 45 | `awaitWork(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool`                  |
|   -7.0% |  -99.77ms | 18.7% → 17.5% | 1.41s → 1.31s |     53 → 46 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool`                  |
|   -7.0% |  -99.77ms | 18.7% → 17.5% | 1.41s → 1.31s |     53 → 46 | `run()`                             | `java.util.concurrent.ForkJoinWorkerThread`          |
|   -0.9% |  -69.88ms |        100.0% | 7.57s → 7.50s |     69 → 62 | `park(boolean, long)`               | `jdk.internal.misc.Unsafe`                           |

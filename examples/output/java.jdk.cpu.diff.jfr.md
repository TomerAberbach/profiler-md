# Sampling profile diff

Collected 1,684 samples → 1,605 samples (-79 samples, -4.7%).

| Category         | Change | Delta |             % |       Samples |
| ---------------- | -----: | ----: | ------------: | ------------: |
| Ours             |  -7.3% |  -114 | 92.5% → 90.0% | 1,558 → 1,444 |
| Standard library | +27.8% |   +35 |  7.5% → 10.0% |     126 → 161 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                                                  | Location                                                   |
| ------: | ----: | ------------: | --------: | --------------------------------------------------------- | ---------------------------------------------------------- |
|   +3.0% |   +20 | 40.1% → 43.4% | 676 → 696 | `accumulate(Double[], double[])`                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +28.6% |   +12 |   2.5% → 3.4% |   42 → 54 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                                        |
|     new |   +11 |   0.0% → 0.7% |    0 → 11 | `grow(int)`                                               | `java.util.ArrayList`                                      |
|  +87.5% |    +7 |   0.5% → 0.9% |    8 → 15 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                                        |
|  +18.5% |    +5 |   1.6% → 2.0% |   27 → 32 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +37.5% |    +3 |   0.5% → 0.7% |    8 → 11 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                        |
|     new |    +3 |   0.0% → 0.2% |     0 → 3 | `lambda$merge$7(Map, Object, List)`                       | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  +66.7% |    +2 |   0.2% → 0.3% |     3 → 5 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                        |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `nextNode()`                                              | `java.util.HashMap$HashIterator`                           |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `createSubtask(int, int)`                                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +100.0% |    +1 |          0.1% |     1 → 2 | `compute()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                       |
| +100.0% |    +1 |          0.1% |     1 → 2 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                        |
| +100.0% |    +1 |          0.1% |     1 → 2 | `putMapEntries(Map, boolean)`                             | `java.util.HashMap`                                        |
|  +50.0% |    +1 |   0.1% → 0.2% |     2 → 3 | `park(boolean, long)`                                     | `jdk.internal.misc.Unsafe`                                 |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `unpark(Thread)`                                          | `java.util.concurrent.locks.LockSupport`                   |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `match(byte[], byte[], byte[], byte[])`                   | `java.util.jar.JarFile`                                    |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `readBytes0(byte[], int, int)`                            | `java.io.RandomAccessFile`                                 |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `write0(FileDescriptor, long, int)`                       | `sun.nio.ch.UnixFileDispatcherImpl`                        |

##### Ours

|  Change | Delta |             % |   Samples | Function                            | Location                                                   |
| ------: | ----: | ------------: | --------: | ----------------------------------- | ---------------------------------------------------------- |
|   +3.0% |   +20 | 40.1% → 43.4% | 676 → 696 | `accumulate(Double[], double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +18.5% |    +5 |   1.6% → 2.0% |   27 → 32 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     new |    +3 |   0.0% → 0.2% |     0 → 3 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `createSubtask(int, int)`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +100.0% |    +1 |          0.1% |     1 → 2 | `compute()`                         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `forkThreshold()`                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                  | Location                                      |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------- | --------------------------------------------- |
|  +28.6% |   +12 | 2.5% → 3.4% | 42 → 54 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                           |
|     new |   +11 | 0.0% → 0.7% |  0 → 11 | `grow(int)`                                               | `java.util.ArrayList`                         |
|  +87.5% |    +7 | 0.5% → 0.9% |  8 → 15 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                           |
|  +37.5% |    +3 | 0.5% → 0.7% |  8 → 11 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  +66.7% |    +2 | 0.2% → 0.3% |   3 → 5 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`           |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `nextNode()`                                              | `java.util.HashMap$HashIterator`              |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`          |
| +100.0% |    +1 |        0.1% |   1 → 2 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`           |
| +100.0% |    +1 |        0.1% |   1 → 2 | `putMapEntries(Map, boolean)`                             | `java.util.HashMap`                           |
|  +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `park(boolean, long)`                                     | `jdk.internal.misc.Unsafe`                    |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `unpark(Thread)`                                          | `java.util.concurrent.locks.LockSupport`      |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `match(byte[], byte[], byte[], byte[])`                   | `java.util.jar.JarFile`                       |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `readBytes0(byte[], int, int)`                            | `java.io.RandomAccessFile`                    |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `write0(FileDescriptor, long, int)`                       | `sun.nio.ch.UnixFileDispatcherImpl`           |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `toUri(UnixPath)`                                         | `sun.nio.fs.UnixUriUtils`                     |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `wrapSink(Sink)`                                          | `java.util.stream.AbstractPipeline`           |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `signalWork()`                                            | `java.util.concurrent.ForkJoinPool`           |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `spliterator(double[], int, int, int)`                    | `java.util.Spliterators`                      |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                                                      | Location                                                                              |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|  -16.3% |   -70 | 25.5% → 22.4% | 429 → 359 | `distance(Double[], Double[])`                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -18.7% |   -39 | 12.4% → 10.6% | 209 → 170 | `findNearestCentroid()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -15.5% |   -18 |   6.9% → 6.1% |  116 → 98 | `collectClusters(int[])`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -93.3% |   -14 |   0.9% → 0.1% |    15 → 1 | `apply(Object)`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001204b38` |
|  -15.8% |    -6 |   2.3% → 2.0% |   38 → 32 | `copyOf(Object[], int)`                                       | `java.util.Arrays`                                                                    |
| removed |    -3 |   0.2% → 0.0% |     3 → 0 | `join()`                                                      | `java.util.concurrent.ForkJoinTask`                                                   |
| removed |    -3 |   0.2% → 0.0% |     3 → 0 | `lambda$collectClusters$0(Double[])`                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `putVal(int, Object, Object, boolean, boolean)`               | `java.util.HashMap`                                                                   |
|  -20.0% |    -1 |   0.3% → 0.2% |     5 → 4 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater`                                                              |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `replaceNode(Object, Object, Object)`                         | `java.util.concurrent.ConcurrentHashMap`                                              |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `doExec()`                                                    | `java.util.concurrent.ForkJoinTask`                                                   |
|  -50.0% |    -1 |          0.1% |     2 → 1 | `checkIndex(int, int)`                                        | `java.util.Objects`                                                                   |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `push(ForkJoinTask, ForkJoinPool, boolean)`                   | `java.util.concurrent.ForkJoinPool$WorkQueue`                                         |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `createSubtask(int, int)`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `add(double[], double[])`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |

##### Ours

|  Change | Delta |             % |   Samples | Function                             | Location                                                                              |
| ------: | ----: | ------------: | --------: | ------------------------------------ | ------------------------------------------------------------------------------------- |
|  -16.3% |   -70 | 25.5% → 22.4% | 429 → 359 | `distance(Double[], Double[])`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -18.7% |   -39 | 12.4% → 10.6% | 209 → 170 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -15.5% |   -18 |   6.9% → 6.1% |  116 → 98 | `collectClusters(int[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -93.3% |   -14 |   0.9% → 0.1% |    15 → 1 | `apply(Object)`                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001204b38` |
| removed |    -3 |   0.2% → 0.0% |     3 → 0 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                      | Location                                      |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------- | --------------------------------------------- |
|  -15.8% |    -6 | 2.3% → 2.0% | 38 → 32 | `copyOf(Object[], int)`                                       | `java.util.Arrays`                            |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `join()`                                                      | `java.util.concurrent.ForkJoinTask`           |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `putVal(int, Object, Object, boolean, boolean)`               | `java.util.HashMap`                           |
|  -20.0% |    -1 | 0.3% → 0.2% |   5 → 4 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater`                      |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `replaceNode(Object, Object, Object)`                         | `java.util.concurrent.ConcurrentHashMap`      |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `doExec()`                                                    | `java.util.concurrent.ForkJoinTask`           |
|  -50.0% |    -1 |        0.1% |   2 → 1 | `checkIndex(int, int)`                                        | `java.util.Objects`                           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `push(ForkJoinTask, ForkJoinPool, boolean)`                   | `java.util.concurrent.ForkJoinPool$WorkQueue` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % |   Samples | Function                                                    | Location                                                               |
| ------: | ----: | ------------: | --------: | ----------------------------------------------------------- | ---------------------------------------------------------------------- |
|   +8.8% |   +24 | 16.3% → 18.6% | 274 → 298 | `computeDirectly()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   +7.0% |   +21 | 17.7% → 19.9% | 298 → 319 | `invoke()`                                                  | `java.util.concurrent.ForkJoinTask`                                    |
|   +3.0% |   +20 | 40.1% → 43.4% | 676 → 696 | `accumulate(Double[], double[])`                            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   +7.1% |   +20 | 16.7% → 18.8% | 281 → 301 | `computeClusterAverages()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   +2.5% |   +19 | 45.0% → 48.4% | 758 → 777 | `vectorSum()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   +2.5% |   +19 | 45.0% → 48.4% | 758 → 777 | `computeDirectly()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   +6.8% |   +19 | 16.7% → 18.7% | 281 → 300 | `average(List)`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  +84.6% |   +11 |   0.8% → 1.5% |   13 → 24 | `merge(Map, Map)`                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +84.6% |   +11 |   0.8% → 1.5% |   13 → 24 | `combineResults(Map, Map)`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  +84.6% |   +11 |   0.8% → 1.5% |   13 → 24 | `combineResults(Object, Object)`                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| +125.0% |   +10 |   0.5% → 1.1% |    8 → 18 | `lambda$merge$7(Map, Object, List)`                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| +125.0% |   +10 |   0.5% → 1.1% |    8 → 18 | `accept(Object, Object)`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88` |
| +125.0% |   +10 |   0.5% → 1.1% |    8 → 18 | `forEach(BiConsumer)`                                       | `java.util.HashMap`                                                    |
|  +87.5% |    +7 |   0.5% → 0.9% |    8 → 15 | `merge(Object, Object, BiFunction)`                         | `java.util.HashMap`                                                    |
|  +13.2% |    +5 |   2.3% → 2.7% |   38 → 43 | `grow(int)`                                                 | `java.util.ArrayList`                                                  |
|  +13.2% |    +5 |   2.3% → 2.7% |   38 → 43 | `grow()`                                                    | `java.util.ArrayList`                                                  |
|  +13.2% |    +5 |   2.3% → 2.7% |   38 → 43 | `add(Object, Object[], int)`                                | `java.util.ArrayList`                                                  |
|  +13.2% |    +5 |   2.3% → 2.7% |   38 → 43 | `add(Object)`                                               | `java.util.ArrayList`                                                  |
|  +18.2% |    +4 |   1.3% → 1.6% |   22 → 26 | `call()`                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0` |
|  +30.0% |    +3 |   0.6% → 0.8% |   10 → 13 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`                                        |

##### Ours

|  Change | Delta |             % |   Samples | Function                                                                                                               | Location                                                               |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|   +8.8% |   +24 | 16.3% → 18.6% | 274 → 298 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   +3.0% |   +20 | 40.1% → 43.4% | 676 → 696 | `accumulate(Double[], double[])`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   +7.1% |   +20 | 16.7% → 18.8% | 281 → 301 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   +2.5% |   +19 | 45.0% → 48.4% | 758 → 777 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   +2.5% |   +19 | 45.0% → 48.4% | 758 → 777 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   +6.8% |   +19 | 16.7% → 18.7% | 281 → 300 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  +84.6% |   +11 |   0.8% → 1.5% |   13 → 24 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +84.6% |   +11 |   0.8% → 1.5% |   13 → 24 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  +84.6% |   +11 |   0.8% → 1.5% |   13 → 24 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| +125.0% |   +10 |   0.5% → 1.1% |    8 → 18 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| +125.0% |   +10 |   0.5% → 1.1% |    8 → 18 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88` |
|  +18.2% |    +4 |   1.3% → 1.6% |   22 → 26 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0` |
|  +30.0% |    +3 |   0.6% → 0.8% |   10 → 13 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
|  +30.0% |    +3 |   0.6% → 0.8% |   10 → 13 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
|  +30.0% |    +3 |   0.6% → 0.8% |   10 → 13 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
|  +37.5% |    +3 |   0.5% → 0.7% |    8 → 11 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|  +25.0% |    +2 |   0.5% → 0.6% |    8 → 10 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|   +7.4% |    +2 |   1.6% → 1.8% |   27 → 29 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  +14.3% |    +1 |   0.4% → 0.5% |     7 → 8 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |

##### Standard library

|  Change | Delta |             % |   Samples | Function                                                                    | Location                                             |
| ------: | ----: | ------------: | --------: | --------------------------------------------------------------------------- | ---------------------------------------------------- |
|   +7.0% |   +21 | 17.7% → 19.9% | 298 → 319 | `invoke()`                                                                  | `java.util.concurrent.ForkJoinTask`                  |
| +125.0% |   +10 |   0.5% → 1.1% |    8 → 18 | `forEach(BiConsumer)`                                                       | `java.util.HashMap`                                  |
|  +87.5% |    +7 |   0.5% → 0.9% |    8 → 15 | `merge(Object, Object, BiFunction)`                                         | `java.util.HashMap`                                  |
|  +13.2% |    +5 |   2.3% → 2.7% |   38 → 43 | `grow(int)`                                                                 | `java.util.ArrayList`                                |
|  +13.2% |    +5 |   2.3% → 2.7% |   38 → 43 | `grow()`                                                                    | `java.util.ArrayList`                                |
|  +13.2% |    +5 |   2.3% → 2.7% |   38 → 43 | `add(Object, Object[], int)`                                                | `java.util.ArrayList`                                |
|  +13.2% |    +5 |   2.3% → 2.7% |   38 → 43 | `add(Object)`                                                               | `java.util.ArrayList`                                |
| +300.0% |    +3 |   0.1% → 0.2% |     1 → 4 | `run()`                                                                     | `java.net.URLClassLoader$1`                          |
| +300.0% |    +3 |   0.1% → 0.2% |     1 → 4 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` | `java.security.AccessController`                     |
| +300.0% |    +3 |   0.1% → 0.2% |     1 → 4 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)`             | `java.security.AccessController`                     |
| +300.0% |    +3 |   0.1% → 0.2% |     1 → 4 | `findClass(String)`                                                         | `java.net.URLClassLoader`                            |
| +300.0% |    +3 |   0.1% → 0.2% |     1 → 4 | `loadClass(String, boolean)`                                                | `java.lang.ClassLoader`                              |
| +300.0% |    +3 |   0.1% → 0.2% |     1 → 4 | `loadClass(String)`                                                         | `java.lang.ClassLoader`                              |
|  +37.5% |    +3 |   0.5% → 0.7% |    8 → 11 | `invokeStatic(Object, Object)`                                              | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00` |
|  +37.5% |    +3 |   0.5% → 0.7% |    8 → 11 | `invoke(Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x0000007001082400`  |
|  +37.5% |    +3 |   0.5% → 0.7% |    8 → 11 | `invokeExact_MT(Object, Object, Object, Object)`                            | `java.lang.invoke.Invokers$Holder`                   |
|  +37.5% |    +3 |   0.5% → 0.7% |    8 → 11 | `invokeImpl(Object, Object[])`                                              | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +37.5% |    +3 |   0.5% → 0.7% |    8 → 11 | `invoke(Object, Object[])`                                                  | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +37.5% |    +3 |   0.5% → 0.7% |    8 → 11 | `invoke(Object, Object[])`                                                  | `java.lang.reflect.Method`                           |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `getBytes()`                                                                | `jdk.internal.loader.Resource`                       |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % |       Samples | Function                                                  | Location                                                                              |
| ------: | ----: | ------------: | ------------: | --------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|   -8.9% |  -123 | 81.8% → 78.2% | 1,378 → 1,255 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`                                         |
|  -13.9% |  -122 | 52.2% → 47.2% |     879 → 757 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   -8.4% |  -111 | 78.2% → 75.1% | 1,317 → 1,206 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                                                   |
|   -8.3% |  -110 | 78.5% → 75.5% | 1,322 → 1,212 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                                                   |
|  -17.1% |  -109 | 37.9% → 33.0% |     638 → 529 | `findNearestCentroid()`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   -8.2% |  -105 | 75.8% → 73.0% | 1,277 → 1,172 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`                                           |
|   -5.5% |   -91 | 97.4% → 96.5% | 1,640 → 1,549 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`                                         |
|   -5.5% |   -90 | 98.0% → 97.2% | 1,650 → 1,560 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                                                   |
|   -5.5% |   -90 | 98.0% → 97.2% | 1,650 → 1,560 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                                                   |
|   -5.1% |   -85 | 99.3% → 98.9% | 1,673 → 1,588 | `compute()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
|   -5.1% |   -85 | 99.3% → 98.9% | 1,673 → 1,588 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                                                  |
|   -5.0% |   -84 | 99.3% → 99.0% | 1,673 → 1,589 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                                                   |
|  -16.3% |   -70 | 25.5% → 22.4% |     429 → 359 | `distance(Double[], Double[])`                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   -8.4% |   -18 | 12.7% → 12.2% |     214 → 196 | `collectClusters(int[])`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -94.4% |   -17 |   1.1% → 0.1% |        18 → 1 | `apply(Object)`                                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001204b38` |
|   -2.2% |    -9 | 24.5% → 25.2% |     413 → 404 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                                                   |
|  -15.8% |    -6 |   2.3% → 2.0% |       38 → 32 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                                                                    |
|   -8.3% |    -5 |   3.6% → 3.4% |       60 → 55 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                                                                   |
| removed |    -3 |   0.2% → 0.0% |         3 → 0 | `lambda$collectClusters$0(Double[])`                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -50.0% |    -2 |   0.2% → 0.1% |         4 → 2 | `read(byte[], int, int)`                                  | `java.io.FilterInputStream`                                                           |

##### Ours

|  Change | Delta |             % |       Samples | Function                             | Location                                                                              |
| ------: | ----: | ------------: | ------------: | ------------------------------------ | ------------------------------------------------------------------------------------- |
|  -13.9% |  -122 | 52.2% → 47.2% |     879 → 757 | `computeDirectly()`                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -17.1% |  -109 | 37.9% → 33.0% |     638 → 529 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   -5.1% |   -85 | 99.3% → 98.9% | 1,673 → 1,588 | `compute()`                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
|  -16.3% |   -70 | 25.5% → 22.4% |     429 → 359 | `distance(Double[], Double[])`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   -8.4% |   -18 | 12.7% → 12.2% |     214 → 196 | `collectClusters(int[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -94.4% |   -17 |   1.1% → 0.1% |        18 → 1 | `apply(Object)`                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001204b38` |
| removed |    -3 |   0.2% → 0.0% |         3 → 0 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -25.0% |    -1 |          0.2% |         4 → 3 | `extractResource(String, Path)`      | `org.renaissance.core.ResourceUtils`                                                  |
|  -25.0% |    -1 |          0.2% |         4 → 3 | `extractResources(Iterable, Path)`   | `org.renaissance.core.ResourceUtils`                                                  |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `<clinit>()`                         | `scopt.OptionParser`                                                                  |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `createParser(Map)`                  | `org.renaissance.harness.ConfigParser`                                                |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `<init>(Map)`                        | `org.renaissance.harness.ConfigParser`                                                |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `combineResults(Object, Object)`     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |

##### Standard library

|  Change | Delta |             % |       Samples | Function                                                      | Location                                      |
| ------: | ----: | ------------: | ------------: | ------------------------------------------------------------- | --------------------------------------------- |
|   -8.9% |  -123 | 81.8% → 78.2% | 1,378 → 1,255 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`          | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|   -8.4% |  -111 | 78.2% → 75.1% | 1,317 → 1,206 | `runWorker(ForkJoinPool$WorkQueue)`                           | `java.util.concurrent.ForkJoinPool`           |
|   -8.3% |  -110 | 78.5% → 75.5% | 1,322 → 1,212 | `scan(ForkJoinPool$WorkQueue, int, int)`                      | `java.util.concurrent.ForkJoinPool`           |
|   -8.2% |  -105 | 75.8% → 73.0% | 1,277 → 1,172 | `run()`                                                       | `java.util.concurrent.ForkJoinWorkerThread`   |
|   -5.5% |   -91 | 97.4% → 96.5% | 1,640 → 1,549 | `tryRemoveAndExec(ForkJoinTask, boolean)`                     | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|   -5.5% |   -90 | 98.0% → 97.2% | 1,650 → 1,560 | `awaitDone(int, long)`                                        | `java.util.concurrent.ForkJoinTask`           |
|   -5.5% |   -90 | 98.0% → 97.2% | 1,650 → 1,560 | `join()`                                                      | `java.util.concurrent.ForkJoinTask`           |
|   -5.1% |   -85 | 99.3% → 98.9% | 1,673 → 1,588 | `exec()`                                                      | `java.util.concurrent.RecursiveTask`          |
|   -5.0% |   -84 | 99.3% → 99.0% | 1,673 → 1,589 | `doExec()`                                                    | `java.util.concurrent.ForkJoinTask`           |
|   -2.2% |    -9 | 24.5% → 25.2% |     413 → 404 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`     | `java.util.concurrent.ForkJoinPool`           |
|  -15.8% |    -6 |   2.3% → 2.0% |       38 → 32 | `copyOf(Object[], int)`                                       | `java.util.Arrays`                            |
|   -8.3% |    -5 |   3.6% → 3.4% |       60 → 55 | `computeIfAbsent(Object, Function)`                           | `java.util.HashMap`                           |
|  -50.0% |    -2 |   0.2% → 0.1% |         4 → 2 | `read(byte[], int, int)`                                      | `java.io.FilterInputStream`                   |
|  -20.0% |    -1 |   0.3% → 0.2% |         5 → 4 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater`                      |
|  -20.0% |    -1 |   0.3% → 0.2% |         5 → 4 | `inflate(byte[], int, int)`                                   | `java.util.zip.Inflater`                      |
|  -25.0% |    -1 |          0.2% |         4 → 3 | `transferTo(OutputStream)`                                    | `java.io.InputStream`                         |
|  -25.0% |    -1 |          0.2% |         4 → 3 | `copy(InputStream, Path, CopyOption[])`                       | `java.nio.file.Files`                         |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `<clinit>()`                                                  | `scala.runtime.LazyVals$`                     |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `replaceNode(Object, Object, Object)`                         | `java.util.concurrent.ConcurrentHashMap`      |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `remove(Object)`                                              | `java.util.concurrent.ConcurrentHashMap`      |

# Allocated heap profile diff

Allocated 37.8 GiB → 37.4 GiB (-424.074 MiB, -1.1%) over 1,988 samples → 1,980 samples (19.5 MiB → 19.4 MiB per sample).

| Category         | Change |        Delta |             % |                Size |       Samples |
| ---------------- | -----: | -----------: | ------------: | ------------------: | ------------: |
| Standard library |  -1.2% | -440.446 MiB | 95.5% → 95.4% | 36.1 GiB → 35.7 GiB | 1,893 → 1,868 |
| Ours             |  +0.9% |  +16.372 MiB |   4.5% → 4.6% | 1.72 GiB → 1.74 GiB |      94 → 110 |
| Unknown          |  +6.3% |       +120 B |         <0.1% | 1.86 KiB → 1.98 KiB |         1 → 2 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|  Change |        Delta |            % |                Size | Samples | Function                                     | Location                                                   |
| ------: | -----------: | -----------: | ------------------: | ------: | -------------------------------------------- | ---------------------------------------------------------- |
| +916.7% | +396.841 MiB |  0.1% → 1.1% |  43.3 MiB → 440 MiB |  9 → 16 | `grow(int)`                                  | `java.util.ArrayList`                                      |
| +473.8% | +203.524 MiB |  0.1% → 0.6% |    43 MiB → 246 MiB |   5 → 6 | `collectClusters(int[])`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +71.3% | +135.434 MiB |  0.5% → 0.8% |   190 MiB → 325 MiB |  8 → 12 | `createSubtask(int, int)`                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +57.8% |  +35.562 MiB |  0.2% → 0.3% | 61.5 MiB → 97.1 MiB |   1 → 2 | `iterator()`                                 | `java.util.HashMap$EntrySet`                               |
| +498.9% |  +26.527 MiB | <0.1% → 0.1% | 5.32 MiB → 31.8 MiB |   1 → 6 | `resize()`                                   | `java.util.HashMap`                                        |
|  +28.5% |  +23.342 MiB |  0.2% → 0.3% |  81.8 MiB → 105 MiB |   3 → 4 | `lambda$collectClusters$0(Double[])`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +429.9% |   +3.254 MiB |        <0.1% |  775 KiB → 4.01 MiB |  2 → 12 | `lambda$generateData$4(int)`                 | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| +481.8% |   +2.588 MiB |        <0.1% |  550 KiB → 3.13 MiB |       1 | `add(double[], double[])`                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +22.9% |   +1.959 MiB |        <0.1% | 8.54 MiB → 10.5 MiB | 22 → 27 | `valueOf(double)`                            | `java.lang.Double`                                         |
|     new |   +1.901 MiB | 0.0% → <0.1% |       0 B → 1.9 MiB |   0 → 3 | `allocateInstance(Class)`                    | `jdk.internal.misc.Unsafe`                                 |
| +209.5% | +829.593 KiB |        <0.1% |   396 KiB → 1.2 MiB |   1 → 3 | `fillInStackTrace(int)`                      | `java.lang.Throwable`                                      |
|     new | +784.945 KiB | 0.0% → <0.1% |       0 B → 785 KiB |   0 → 2 | `clone()`                                    | `java.lang.Object`                                         |
|     new | +784.367 KiB | 0.0% → <0.1% |       0 B → 784 KiB |   0 → 1 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.LinkedHashMap`                                  |
|     new | +783.226 KiB | 0.0% → <0.1% |       0 B → 783 KiB |   0 → 2 | `<init>(int)`                                | `java.io.ByteArrayOutputStream`                            |
|     new | +778.164 KiB | 0.0% → <0.1% |       0 B → 778 KiB |   0 → 2 | `toString()`                                 | `java.lang.StringBuilder`                                  |
|  +16.7% | +774.609 KiB |        <0.1% |  4.54 MiB → 5.3 MiB | 12 → 14 | `mapToObj(IntFunction, int)`                 | `java.util.stream.IntPipeline`                             |
|   +1.0% | +736.195 KiB |         0.2% | 70.5 MiB → 71.2 MiB |   4 → 1 | `createSubtask(int, int)`                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     new | +641.562 KiB | 0.0% → <0.1% |       0 B → 642 KiB |   0 → 2 | `<init>(int)`                                | `jdk.internal.org.objectweb.asm.ByteVector`                |
|     new | +456.453 KiB | 0.0% → <0.1% |       0 B → 456 KiB |   0 → 2 | `computeClusterAverages()`                   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|     new | +417.218 KiB | 0.0% → <0.1% |       0 B → 417 KiB |   0 → 1 | `newString(byte[], long)`                    | `java.lang.StringConcatHelper`                             |

##### Standard library

|  Change |        Delta |            % |                Size | Samples | Function                                                                        | Location                                      |
| ------: | -----------: | -----------: | ------------------: | ------: | ------------------------------------------------------------------------------- | --------------------------------------------- |
| +916.7% | +396.841 MiB |  0.1% → 1.1% |  43.3 MiB → 440 MiB |  9 → 16 | `grow(int)`                                                                     | `java.util.ArrayList`                         |
|  +57.8% |  +35.562 MiB |  0.2% → 0.3% | 61.5 MiB → 97.1 MiB |   1 → 2 | `iterator()`                                                                    | `java.util.HashMap$EntrySet`                  |
| +498.9% |  +26.527 MiB | <0.1% → 0.1% | 5.32 MiB → 31.8 MiB |   1 → 6 | `resize()`                                                                      | `java.util.HashMap`                           |
|  +22.9% |   +1.959 MiB |        <0.1% | 8.54 MiB → 10.5 MiB | 22 → 27 | `valueOf(double)`                                                               | `java.lang.Double`                            |
|     new |   +1.901 MiB | 0.0% → <0.1% |       0 B → 1.9 MiB |   0 → 3 | `allocateInstance(Class)`                                                       | `jdk.internal.misc.Unsafe`                    |
| +209.5% | +829.593 KiB |        <0.1% |   396 KiB → 1.2 MiB |   1 → 3 | `fillInStackTrace(int)`                                                         | `java.lang.Throwable`                         |
|     new | +784.945 KiB | 0.0% → <0.1% |       0 B → 785 KiB |   0 → 2 | `clone()`                                                                       | `java.lang.Object`                            |
|     new | +784.367 KiB | 0.0% → <0.1% |       0 B → 784 KiB |   0 → 1 | `newNode(int, Object, Object, HashMap$Node)`                                    | `java.util.LinkedHashMap`                     |
|     new | +783.226 KiB | 0.0% → <0.1% |       0 B → 783 KiB |   0 → 2 | `<init>(int)`                                                                   | `java.io.ByteArrayOutputStream`               |
|     new | +778.164 KiB | 0.0% → <0.1% |       0 B → 778 KiB |   0 → 2 | `toString()`                                                                    | `java.lang.StringBuilder`                     |
|  +16.7% | +774.609 KiB |        <0.1% |  4.54 MiB → 5.3 MiB | 12 → 14 | `mapToObj(IntFunction, int)`                                                    | `java.util.stream.IntPipeline`                |
|     new | +641.562 KiB | 0.0% → <0.1% |       0 B → 642 KiB |   0 → 2 | `<init>(int)`                                                                   | `jdk.internal.org.objectweb.asm.ByteVector`   |
|     new | +417.218 KiB | 0.0% → <0.1% |       0 B → 417 KiB |   0 → 1 | `newString(byte[], long)`                                                       | `java.lang.StringConcatHelper`                |
| +105.8% | +413.382 KiB |        <0.1% |   391 KiB → 804 KiB |   1 → 2 | `<init>(ClassWriter)`                                                           | `jdk.internal.org.objectweb.asm.SymbolTable`  |
|     new | +409.164 KiB | 0.0% → <0.1% |       0 B → 409 KiB |   0 → 1 | `copyOfRange(byte[], int, int)`                                                 | `java.util.Arrays`                            |
|     new | +403.242 KiB | 0.0% → <0.1% |       0 B → 403 KiB |   0 → 1 | `transferTo(OutputStream)`                                                      | `java.io.InputStream`                         |
|     new | +394.609 KiB | 0.0% → <0.1% |       0 B → 395 KiB |   0 → 1 | `<init>(SymbolTable, int, String, String, String, String[], int)`               | `jdk.internal.org.objectweb.asm.MethodWriter` |
| +100.4% | +394.585 KiB |        <0.1% |   393 KiB → 788 KiB |   1 → 2 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                       |
|     new | +387.609 KiB | 0.0% → <0.1% |       0 B → 388 KiB |   0 → 1 | `getInputStream(File)`                                                          | `sun.security.provider.FileInputStreamPool`   |
|     new | +387.601 KiB | 0.0% → <0.1% |       0 B → 388 KiB |   0 → 1 | `range(int, int)`                                                               | `java.util.stream.IntStream`                  |

##### Ours

|  Change |        Delta |            % |                Size | Samples | Function                             | Location                                                   |
| ------: | -----------: | -----------: | ------------------: | ------: | ------------------------------------ | ---------------------------------------------------------- |
| +473.8% | +203.524 MiB |  0.1% → 0.6% |    43 MiB → 246 MiB |   5 → 6 | `collectClusters(int[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +71.3% | +135.434 MiB |  0.5% → 0.8% |   190 MiB → 325 MiB |  8 → 12 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +28.5% |  +23.342 MiB |  0.2% → 0.3% |  81.8 MiB → 105 MiB |   3 → 4 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +429.9% |   +3.254 MiB |        <0.1% |  775 KiB → 4.01 MiB |  2 → 12 | `lambda$generateData$4(int)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| +481.8% |   +2.588 MiB |        <0.1% |  550 KiB → 3.13 MiB |       1 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   +1.0% | +736.195 KiB |         0.2% | 70.5 MiB → 71.2 MiB |   4 → 1 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     new | +456.453 KiB | 0.0% → <0.1% |       0 B → 456 KiB |   0 → 2 | `computeClusterAverages()`           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |        Delta |             % |                Size |       Samples | Function                                     | Location                                                   |
| ------: | -----------: | ------------: | ------------------: | ------------: | -------------------------------------------- | ---------------------------------------------------------- |
|   -2.1% | -767.448 MiB | 93.8% → 92.9% | 35.5 GiB → 34.8 GiB | 1,733 → 1,703 | `copyOf(Object[], int)`                      | `java.util.Arrays`                                         |
|  -12.6% | -143.913 MiB |   2.9% → 2.6% |  1.11 GiB → 998 MiB |            60 | `findNearestCentroid()`                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -46.5% | -126.558 MiB |   0.7% → 0.4% |   272 MiB → 146 MiB |        9 → 13 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                                        |
|  -94.5% |  -84.065 MiB |  0.2% → <0.1% | 88.9 MiB → 4.87 MiB |         2 → 5 | `merge(Map, Map)`                            | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -87.0% |  -70.401 MiB |  0.2% → <0.1% | 80.9 MiB → 10.5 MiB |         4 → 2 | `vectorSum()`                                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -85.1% |  -52.672 MiB |  0.2% → <0.1% | 61.9 MiB → 9.23 MiB |         4 → 5 | `lambda$merge$6(List, List)`                 | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -98.2% |    -4.27 MiB |         <0.1% | 4.35 MiB → 78.5 KiB |        12 → 1 | `opWrapSink(int, Sink)`                      | `java.util.stream.IntPipeline$1`                           |
|  -19.8% |   -2.406 MiB |         <0.1% | 12.2 MiB → 9.77 MiB |       18 → 15 | `copyOf(Object[], int, Class)`               | `java.util.Arrays`                                         |
| removed |   -1.884 MiB |  <0.1% → 0.0% |      1.88 MiB → 0 B |         1 → 0 | `createSubtask(int, int)`                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -30.2% |   -1.804 MiB |         <0.1% | 5.98 MiB → 4.17 MiB |       18 → 12 | `intStream(Spliterator$OfInt, boolean)`      | `java.util.stream.StreamSupport`                           |
| removed |   -1.277 MiB |  <0.1% → 0.0% |      1.28 MiB → 0 B |         2 → 0 | `allocateInstance(Object)`                   | `java.lang.invoke.DirectMethodHandle`                      |
|   -0.6% |    -1.03 MiB |          0.4% |   170 MiB → 169 MiB |            18 | `copyOf(byte[], int)`                        | `java.util.Arrays`                                         |
|  -76.6% | -792.132 KiB |         <0.1% |  1.01 MiB → 242 KiB |         3 → 1 | `newString(byte[], int, int)`                | `java.lang.StringLatin1`                                   |
| removed | -775.312 KiB |  <0.1% → 0.0% |       775 KiB → 0 B |         2 → 0 | `newLinkedHashMap(int)`                      | `java.util.LinkedHashMap`                                  |
| removed | -636.898 KiB |  <0.1% → 0.0% |       637 KiB → 0 B |         2 → 0 | `enlarge(int)`                               | `jdk.internal.org.objectweb.asm.ByteVector`                |
| removed | -490.539 KiB |  <0.1% → 0.0% |       491 KiB → 0 B |         1 → 0 | `classFilePrologue()`                        | `java.lang.invoke.InvokerBytecodeGenerator`                |
| removed | -417.242 KiB |  <0.1% → 0.0% |       417 KiB → 0 B |         1 → 0 | `getInputStream(ZipEntry)`                   | `java.util.zip.ZipFile`                                    |
| removed | -408.664 KiB |  <0.1% → 0.0% |       409 KiB → 0 B |         1 → 0 | `newOutputStream(Path, OpenOption[])`        | `java.nio.file.spi.FileSystemProvider`                     |
| removed |  -403.64 KiB |  <0.1% → 0.0% |       404 KiB → 0 B |         1 → 0 | `getPath(String, String[])`                  | `sun.nio.fs.UnixFileSystem`                                |
| removed | -395.656 KiB |  <0.1% → 0.0% |       396 KiB → 0 B |         1 → 0 | `copyOfRangeByte(byte[], int, int)`          | `java.util.Arrays`                                         |

##### Standard library

|  Change |        Delta |             % |                Size |       Samples | Function                                     | Location                                    |
| ------: | -----------: | ------------: | ------------------: | ------------: | -------------------------------------------- | ------------------------------------------- |
|   -2.1% | -767.448 MiB | 93.8% → 92.9% | 35.5 GiB → 34.8 GiB | 1,733 → 1,703 | `copyOf(Object[], int)`                      | `java.util.Arrays`                          |
|  -46.5% | -126.558 MiB |   0.7% → 0.4% |   272 MiB → 146 MiB |        9 → 13 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                         |
|  -98.2% |    -4.27 MiB |         <0.1% | 4.35 MiB → 78.5 KiB |        12 → 1 | `opWrapSink(int, Sink)`                      | `java.util.stream.IntPipeline$1`            |
|  -19.8% |   -2.406 MiB |         <0.1% | 12.2 MiB → 9.77 MiB |       18 → 15 | `copyOf(Object[], int, Class)`               | `java.util.Arrays`                          |
|  -30.2% |   -1.804 MiB |         <0.1% | 5.98 MiB → 4.17 MiB |       18 → 12 | `intStream(Spliterator$OfInt, boolean)`      | `java.util.stream.StreamSupport`            |
| removed |   -1.277 MiB |  <0.1% → 0.0% |      1.28 MiB → 0 B |         2 → 0 | `allocateInstance(Object)`                   | `java.lang.invoke.DirectMethodHandle`       |
|   -0.6% |    -1.03 MiB |          0.4% |   170 MiB → 169 MiB |            18 | `copyOf(byte[], int)`                        | `java.util.Arrays`                          |
|  -76.6% | -792.132 KiB |         <0.1% |  1.01 MiB → 242 KiB |         3 → 1 | `newString(byte[], int, int)`                | `java.lang.StringLatin1`                    |
| removed | -775.312 KiB |  <0.1% → 0.0% |       775 KiB → 0 B |         2 → 0 | `newLinkedHashMap(int)`                      | `java.util.LinkedHashMap`                   |
| removed | -636.898 KiB |  <0.1% → 0.0% |       637 KiB → 0 B |         2 → 0 | `enlarge(int)`                               | `jdk.internal.org.objectweb.asm.ByteVector` |
| removed | -490.539 KiB |  <0.1% → 0.0% |       491 KiB → 0 B |         1 → 0 | `classFilePrologue()`                        | `java.lang.invoke.InvokerBytecodeGenerator` |
| removed | -417.242 KiB |  <0.1% → 0.0% |       417 KiB → 0 B |         1 → 0 | `getInputStream(ZipEntry)`                   | `java.util.zip.ZipFile`                     |
| removed | -408.664 KiB |  <0.1% → 0.0% |       409 KiB → 0 B |         1 → 0 | `newOutputStream(Path, OpenOption[])`        | `java.nio.file.spi.FileSystemProvider`      |
| removed |  -403.64 KiB |  <0.1% → 0.0% |       404 KiB → 0 B |         1 → 0 | `getPath(String, String[])`                  | `sun.nio.fs.UnixFileSystem`                 |
| removed | -395.656 KiB |  <0.1% → 0.0% |       396 KiB → 0 B |         1 → 0 | `copyOfRangeByte(byte[], int, int)`          | `java.util.Arrays`                          |
| removed | -393.312 KiB |  <0.1% → 0.0% |       393 KiB → 0 B |         1 → 0 | `replace(byte[], char, char)`                | `java.lang.StringLatin1`                    |
| removed |  -392.64 KiB |  <0.1% → 0.0% |       393 KiB → 0 B |         1 → 0 | `getTypeInternal(String, int, int)`          | `jdk.internal.org.objectweb.asm.Type`       |
| removed | -389.828 KiB |  <0.1% → 0.0% |       390 KiB → 0 B |         1 → 0 | `opWrapSink(int, Sink)`                      | `java.util.stream.ReferencePipeline$4`      |
| removed |  -389.71 KiB |  <0.1% → 0.0% |       390 KiB → 0 B |         1 → 0 | `<clinit>()`                                 | `scala.collection.immutable.List$`          |
| removed | -387.648 KiB |  <0.1% → 0.0% |       388 KiB → 0 B |         1 → 0 | `<clinit>()`                                 | `sun.security.util.KnownOIDs`               |

##### Ours

|  Change |        Delta |            % |                Size | Samples | Function                     | Location                                                   |
| ------: | -----------: | -----------: | ------------------: | ------: | ---------------------------- | ---------------------------------------------------------- |
|  -12.6% | -143.913 MiB |  2.9% → 2.6% |  1.11 GiB → 998 MiB |      60 | `findNearestCentroid()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -94.5% |  -84.065 MiB | 0.2% → <0.1% | 88.9 MiB → 4.87 MiB |   2 → 5 | `merge(Map, Map)`            | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -87.0% |  -70.401 MiB | 0.2% → <0.1% | 80.9 MiB → 10.5 MiB |   4 → 2 | `vectorSum()`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -85.1% |  -52.672 MiB | 0.2% → <0.1% | 61.9 MiB → 9.23 MiB |   4 → 5 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |   -1.884 MiB | <0.1% → 0.0% |      1.88 MiB → 0 B |   1 → 0 | `createSubtask(int, int)`    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|   Change |        Delta |             % |                Size |       Samples | Function                                                                        | Location                                                                              |
| -------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|    +7.6% |   +1.691 GiB | 58.9% → 64.0% |   22.3 GiB → 24 GiB | 1,155 → 1,135 | `addAll(Collection)`                                                            | `java.util.ArrayList`                                                                 |
|    +8.6% |   +1.338 GiB | 41.0% → 45.1% | 15.5 GiB → 16.9 GiB |           877 | `grow(int)`                                                                     | `java.util.ArrayList`                                                                 |
|   +31.5% |   +1.156 GiB |  9.7% → 12.9% | 3.67 GiB → 4.83 GiB |     224 → 244 | `collectClusters(int[])`                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   +21.2% |   +1.016 GiB | 12.7% → 15.5% | 4.79 GiB → 5.81 GiB |     284 → 304 | `computeDirectly()`                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   +25.3% | +918.848 MiB |  9.4% → 11.9% | 3.55 GiB → 4.45 GiB |     215 → 226 | `grow()`                                                                        | `java.util.ArrayList`                                                                 |
|   +25.3% | +918.848 MiB |  9.4% → 11.9% | 3.55 GiB → 4.45 GiB |     215 → 226 | `add(Object, Object[], int)`                                                    | `java.util.ArrayList`                                                                 |
|   +25.3% | +918.848 MiB |  9.4% → 11.9% | 3.55 GiB → 4.45 GiB |     215 → 226 | `add(Object)`                                                                   | `java.util.ArrayList`                                                                 |
|   +23.4% | +740.757 MiB |  8.2% → 10.2% | 3.09 GiB → 3.81 GiB |     207 → 233 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`                       | `java.util.concurrent.ForkJoinPool`                                                   |
| +4946.5% | +161.414 MiB |  <0.1% → 0.4% |  3.26 MiB → 165 MiB |        8 → 12 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                                                               |
| +3979.4% | +160.641 MiB |  <0.1% → 0.4% |  4.04 MiB → 165 MiB |       10 → 12 | `defineClass(String, byte[], int, int, ProtectionDomain)`                       | `java.lang.ClassLoader`                                                               |
| +3979.4% | +160.641 MiB |  <0.1% → 0.4% |  4.04 MiB → 165 MiB |       10 → 12 | `defineClass(String, byte[], int, int, CodeSource)`                             | `java.security.SecureClassLoader`                                                     |
|   +71.3% | +135.434 MiB |   0.5% → 0.8% |   190 MiB → 325 MiB |        8 → 12 | `createSubtask(int, int)`                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   +72.3% |  +62.184 MiB |   0.2% → 0.4% |  86.1 MiB → 148 MiB |        4 → 12 | `computeIfAbsent(Object, Function)`                                             | `java.util.HashMap`                                                                   |
|   +57.8% |  +35.562 MiB |   0.2% → 0.3% | 61.5 MiB → 97.1 MiB |         1 → 2 | `iterator()`                                                                    | `java.util.HashMap$EntrySet`                                                          |
|  +498.9% |  +26.527 MiB |  <0.1% → 0.1% | 5.32 MiB → 31.8 MiB |         1 → 6 | `resize()`                                                                      | `java.util.HashMap`                                                                   |
|   +29.9% |  +24.617 MiB |   0.2% → 0.3% |  82.5 MiB → 107 MiB |             7 | `computeClusterAverages()`                                                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|   +29.9% |  +24.617 MiB |   0.2% → 0.3% |  82.5 MiB → 107 MiB |             7 | `computeDirectly()`                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|   +29.3% |  +24.171 MiB |   0.2% → 0.3% |  82.5 MiB → 107 MiB |         7 → 5 | `average(List)`                                                                 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|   +28.5% |  +23.342 MiB |   0.2% → 0.3% |  81.8 MiB → 105 MiB |         3 → 4 | `lambda$collectClusters$0(Double[])`                                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   +28.5% |  +23.342 MiB |   0.2% → 0.3% |  81.8 MiB → 105 MiB |         3 → 4 | `apply(Object)`                                                                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001204b38` |

##### Standard library

|   Change |        Delta |             % |                Size |       Samples | Function                                                                        | Location                                  |
| -------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------------------------------------- | ----------------------------------------- |
|    +7.6% |   +1.691 GiB | 58.9% → 64.0% |   22.3 GiB → 24 GiB | 1,155 → 1,135 | `addAll(Collection)`                                                            | `java.util.ArrayList`                     |
|    +8.6% |   +1.338 GiB | 41.0% → 45.1% | 15.5 GiB → 16.9 GiB |           877 | `grow(int)`                                                                     | `java.util.ArrayList`                     |
|   +25.3% | +918.848 MiB |  9.4% → 11.9% | 3.55 GiB → 4.45 GiB |     215 → 226 | `grow()`                                                                        | `java.util.ArrayList`                     |
|   +25.3% | +918.848 MiB |  9.4% → 11.9% | 3.55 GiB → 4.45 GiB |     215 → 226 | `add(Object, Object[], int)`                                                    | `java.util.ArrayList`                     |
|   +25.3% | +918.848 MiB |  9.4% → 11.9% | 3.55 GiB → 4.45 GiB |     215 → 226 | `add(Object)`                                                                   | `java.util.ArrayList`                     |
|   +23.4% | +740.757 MiB |  8.2% → 10.2% | 3.09 GiB → 3.81 GiB |     207 → 233 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`                       | `java.util.concurrent.ForkJoinPool`       |
| +4946.5% | +161.414 MiB |  <0.1% → 0.4% |  3.26 MiB → 165 MiB |        8 → 12 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                   |
| +3979.4% | +160.641 MiB |  <0.1% → 0.4% |  4.04 MiB → 165 MiB |       10 → 12 | `defineClass(String, byte[], int, int, ProtectionDomain)`                       | `java.lang.ClassLoader`                   |
| +3979.4% | +160.641 MiB |  <0.1% → 0.4% |  4.04 MiB → 165 MiB |       10 → 12 | `defineClass(String, byte[], int, int, CodeSource)`                             | `java.security.SecureClassLoader`         |
|   +72.3% |  +62.184 MiB |   0.2% → 0.4% |  86.1 MiB → 148 MiB |        4 → 12 | `computeIfAbsent(Object, Function)`                                             | `java.util.HashMap`                       |
|   +57.8% |  +35.562 MiB |   0.2% → 0.3% | 61.5 MiB → 97.1 MiB |         1 → 2 | `iterator()`                                                                    | `java.util.HashMap$EntrySet`              |
|  +498.9% |  +26.527 MiB |  <0.1% → 0.1% | 5.32 MiB → 31.8 MiB |         1 → 6 | `resize()`                                                                      | `java.util.HashMap`                       |
|  +429.9% |   +3.254 MiB |         <0.1% |  775 KiB → 4.01 MiB |        2 → 12 | `<init>(long, IntFunction)`                                                     | `java.util.stream.Nodes$ArrayNode`        |
|  +429.9% |   +3.254 MiB |         <0.1% |  775 KiB → 4.01 MiB |        2 → 12 | `<init>(long, IntFunction)`                                                     | `java.util.stream.Nodes$FixedNodeBuilder` |
|  +227.9% |   +3.051 MiB |         <0.1% | 1.34 MiB → 4.39 MiB |        4 → 13 | `builder(long, IntFunction)`                                                    | `java.util.stream.Nodes`                  |
|  +227.9% |   +3.051 MiB |         <0.1% | 1.34 MiB → 4.39 MiB |        4 → 13 | `makeNodeBuilder(long, IntFunction)`                                            | `java.util.stream.ReferencePipeline`      |
|   +22.9% |   +1.959 MiB |         <0.1% | 8.54 MiB → 10.5 MiB |       22 → 27 | `valueOf(double)`                                                               | `java.lang.Double`                        |
|      new |   +1.901 MiB |  0.0% → <0.1% |       0 B → 1.9 MiB |         0 → 3 | `allocateInstance(Class)`                                                       | `jdk.internal.misc.Unsafe`                |
|      new |   +1.547 MiB |  0.0% → <0.1% |      0 B → 1.55 MiB |         0 → 4 | `toString()`                                                                    | `java.lang.StringBuilder`                 |
|      new |   +1.406 MiB |  0.0% → <0.1% |      0 B → 1.41 MiB |         0 → 1 | `<clinit>()`                                                                    | `scala.collection.immutable.Vector$`      |

##### Ours

|  Change |        Delta |             % |                Size |   Samples | Function                                         | Location                                                                              |
| ------: | -----------: | ------------: | ------------------: | --------: | ------------------------------------------------ | ------------------------------------------------------------------------------------- |
|  +31.5% |   +1.156 GiB |  9.7% → 12.9% | 3.67 GiB → 4.83 GiB | 224 → 244 | `collectClusters(int[])`                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +21.2% |   +1.016 GiB | 12.7% → 15.5% | 4.79 GiB → 5.81 GiB | 284 → 304 | `computeDirectly()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +71.3% | +135.434 MiB |   0.5% → 0.8% |   190 MiB → 325 MiB |    8 → 12 | `createSubtask(int, int)`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  +29.9% |  +24.617 MiB |   0.2% → 0.3% |  82.5 MiB → 107 MiB |         7 | `computeClusterAverages()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|  +29.9% |  +24.617 MiB |   0.2% → 0.3% |  82.5 MiB → 107 MiB |         7 | `computeDirectly()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|  +29.3% |  +24.171 MiB |   0.2% → 0.3% |  82.5 MiB → 107 MiB |     7 → 5 | `average(List)`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|  +28.5% |  +23.342 MiB |   0.2% → 0.3% |  81.8 MiB → 105 MiB |     3 → 4 | `lambda$collectClusters$0(Double[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +28.5% |  +23.342 MiB |   0.2% → 0.3% |  81.8 MiB → 105 MiB |     3 → 4 | `apply(Object)`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001204b38` |
| +429.9% |   +3.254 MiB |         <0.1% |  775 KiB → 4.01 MiB |    2 → 12 | `apply(int)`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a1d48`                |
| +429.9% |   +3.254 MiB |         <0.1% |  775 KiB → 4.01 MiB |    2 → 12 | `lambda$generateData$4(int)`                     | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
| +481.8% |   +2.588 MiB |         <0.1% |  550 KiB → 3.13 MiB |         1 | `add(double[], double[])`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| +481.8% |   +2.588 MiB |         <0.1% |  550 KiB → 3.13 MiB |         1 | `combineResults(double[], double[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| +481.8% |   +2.588 MiB |         <0.1% |  550 KiB → 3.13 MiB |         1 | `combineResults(Object, Object)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  +22.9% |   +1.959 MiB |         <0.1% | 8.54 MiB → 10.5 MiB |   22 → 27 | `apply(int)`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a1b10`                |
|  +22.9% |   +1.959 MiB |         <0.1% | 8.54 MiB → 10.5 MiB |   22 → 27 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|     new |    +1.21 MiB |  0.0% → <0.1% |      0 B → 1.21 MiB |     0 → 1 | `combineResults(Map, Map)`                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|     new |    +1.21 MiB |  0.0% → <0.1% |      0 B → 1.21 MiB |     0 → 1 | `combineResults(Object, Object)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
| +206.2% | +789.343 KiB |         <0.1% |  383 KiB → 1.14 MiB |     1 → 2 | `create(Path, URI)`                              | `org.renaissance.core.ModuleLoader`                                                   |
|     new | +784.367 KiB |  0.0% → <0.1% |       0 B → 784 KiB |     0 → 1 | `pathsToSet(String)`                             | `org.renaissance.core.ModuleLoader`                                                   |
|     new | +784.367 KiB |  0.0% → <0.1% |       0 B → 784 KiB |     0 → 1 | `lambda$collectModuleJars$1(Map$Entry)`          | `org.renaissance.core.ModuleLoader`                                                   |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

| Change |        Delta |             % |                Size |       Samples | Function                                             | Location                                                               |
| -----: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------------------- | ---------------------------------------------------------------------- |
| -30.3% |   -2.953 GiB | 25.7% → 18.1% | 9.74 GiB → 6.79 GiB |     390 → 373 | `<init>(Collection)`                                 | `java.util.ArrayList`                                                  |
|  -8.5% |   -1.702 GiB | 52.9% → 49.0% |   20 GiB → 18.3 GiB |     883 → 857 | `toArray()`                                          | `java.util.ArrayList`                                                  |
|  -4.6% |   -1.496 GiB | 85.9% → 82.8% |   32.5 GiB → 31 GiB | 1,561 → 1,531 | `combineResults(Map, Map)`                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -4.6% |   -1.496 GiB | 85.9% → 82.8% |   32.5 GiB → 31 GiB | 1,561 → 1,531 | `combineResults(Object, Object)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -4.6% |   -1.494 GiB | 85.9% → 82.8% |   32.5 GiB → 31 GiB | 1,561 → 1,532 | `merge(Map, Map)`                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -3.7% |   -1.329 GiB | 96.2% → 93.7% | 36.4 GiB → 35.1 GiB | 1,770 → 1,736 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                                    |
|  -3.7% |   -1.329 GiB | 96.2% → 93.7% | 36.4 GiB → 35.1 GiB | 1,770 → 1,736 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                            |
|  -3.6% |    -1.32 GiB | 96.3% → 93.8% | 36.4 GiB → 35.1 GiB | 1,774 → 1,741 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                                    |
|  -4.1% |   -1.313 GiB | 84.8% → 82.2% | 32.1 GiB → 30.8 GiB | 1,549 → 1,513 | `lambda$merge$6(List, List)`                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -4.1% |   -1.313 GiB | 84.8% → 82.2% | 32.1 GiB → 30.8 GiB | 1,549 → 1,513 | `apply(Object, Object)`                              | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0` |
|  -4.1% |   -1.313 GiB | 84.8% → 82.2% | 32.1 GiB → 30.8 GiB | 1,549 → 1,513 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                                                    |
|  -4.1% |   -1.313 GiB | 84.8% → 82.2% | 32.1 GiB → 30.8 GiB | 1,549 → 1,513 | `lambda$merge$7(Map, Object, List)`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -4.1% |   -1.313 GiB | 84.8% → 82.2% | 32.1 GiB → 30.8 GiB | 1,549 → 1,513 | `accept(Object, Object)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88` |
|  -4.1% |   -1.313 GiB | 84.8% → 82.2% | 32.1 GiB → 30.8 GiB | 1,549 → 1,513 | `forEach(BiConsumer)`                                | `java.util.HashMap`                                                    |
|  -4.7% |   -1.161 GiB | 66.0% → 63.6% |   25 GiB → 23.8 GiB | 1,231 → 1,206 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|  -3.1% |    -1.13 GiB | 96.8% → 94.8% | 36.6 GiB → 35.5 GiB | 1,788 → 1,764 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|  -3.6% | -923.069 MiB | 66.9% → 65.2% | 25.3 GiB → 24.4 GiB | 1,246 → 1,229 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                                    |
|  -3.6% | -923.069 MiB | 66.9% → 65.2% | 25.3 GiB → 24.4 GiB | 1,246 → 1,229 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                                    |
|  -2.1% | -769.854 MiB | 93.9% → 92.9% | 35.5 GiB → 34.8 GiB | 1,751 → 1,718 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                                     |
|  -7.3% | -604.982 MiB | 21.4% → 20.1% |  8.1 GiB → 7.51 GiB |     232 → 221 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                                    |

##### Standard library

| Change |        Delta |             % |                Size |       Samples | Function                                             | Location                                            |
| -----: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------------------- | --------------------------------------------------- |
| -30.3% |   -2.953 GiB | 25.7% → 18.1% | 9.74 GiB → 6.79 GiB |     390 → 373 | `<init>(Collection)`                                 | `java.util.ArrayList`                               |
|  -8.5% |   -1.702 GiB | 52.9% → 49.0% |   20 GiB → 18.3 GiB |     883 → 857 | `toArray()`                                          | `java.util.ArrayList`                               |
|  -3.7% |   -1.329 GiB | 96.2% → 93.7% | 36.4 GiB → 35.1 GiB | 1,770 → 1,736 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                 |
|  -3.7% |   -1.329 GiB | 96.2% → 93.7% | 36.4 GiB → 35.1 GiB | 1,770 → 1,736 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`         |
|  -3.6% |    -1.32 GiB | 96.3% → 93.8% | 36.4 GiB → 35.1 GiB | 1,774 → 1,741 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                 |
|  -4.1% |   -1.313 GiB | 84.8% → 82.2% | 32.1 GiB → 30.8 GiB | 1,549 → 1,513 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                                 |
|  -4.1% |   -1.313 GiB | 84.8% → 82.2% | 32.1 GiB → 30.8 GiB | 1,549 → 1,513 | `forEach(BiConsumer)`                                | `java.util.HashMap`                                 |
|  -4.7% |   -1.161 GiB | 66.0% → 63.6% |   25 GiB → 23.8 GiB | 1,231 → 1,206 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
|  -3.1% |    -1.13 GiB | 96.8% → 94.8% | 36.6 GiB → 35.5 GiB | 1,788 → 1,764 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
|  -3.6% | -923.069 MiB | 66.9% → 65.2% | 25.3 GiB → 24.4 GiB | 1,246 → 1,229 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                 |
|  -3.6% | -923.069 MiB | 66.9% → 65.2% | 25.3 GiB → 24.4 GiB | 1,246 → 1,229 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                 |
|  -2.1% | -769.854 MiB | 93.9% → 92.9% | 35.5 GiB → 34.8 GiB | 1,751 → 1,718 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                  |
|  -7.3% | -604.982 MiB | 21.4% → 20.1% |  8.1 GiB → 7.51 GiB |     232 → 221 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                 |
|  -7.4% |   -600.3 MiB | 21.1% → 19.7% | 7.97 GiB → 7.39 GiB |     218 → 211 | `exec()`                                             | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  -1.1% | -423.153 MiB |         99.4% | 37.6 GiB → 37.2 GiB | 1,863 → 1,854 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                |
|  -1.1% | -423.153 MiB |         99.4% | 37.6 GiB → 37.2 GiB | 1,863 → 1,854 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                 |
| -96.8% | -159.652 MiB |  0.4% → <0.1% |  165 MiB → 5.26 MiB |             9 | `<clinit>()`                                         | `scala.package$`                                    |
| -98.5% | -159.641 MiB |  0.4% → <0.1% |  162 MiB → 2.37 MiB |             4 | `<init>()`                                           | `scala.collection.immutable.Iterable$`              |
| -98.5% | -159.641 MiB |  0.4% → <0.1% |  162 MiB → 2.37 MiB |             4 | `<clinit>()`                                         | `scala.collection.immutable.Iterable$`              |
| -98.5% | -159.641 MiB |  0.4% → <0.1% |  162 MiB → 2.37 MiB |             4 | `<init>()`                                           | `scala.collection.Iterable$`                        |

##### Ours

|  Change |        Delta |             % |                Size |       Samples | Function                                                                                                               | Location                                                               |
| ------: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|   -4.6% |   -1.496 GiB | 85.9% → 82.8% |   32.5 GiB → 31 GiB | 1,561 → 1,531 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -4.6% |   -1.496 GiB | 85.9% → 82.8% |   32.5 GiB → 31 GiB | 1,561 → 1,531 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -4.6% |   -1.494 GiB | 85.9% → 82.8% |   32.5 GiB → 31 GiB | 1,561 → 1,532 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -4.1% |   -1.313 GiB | 84.8% → 82.2% | 32.1 GiB → 30.8 GiB | 1,549 → 1,513 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -4.1% |   -1.313 GiB | 84.8% → 82.2% | 32.1 GiB → 30.8 GiB | 1,549 → 1,513 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0` |
|   -4.1% |   -1.313 GiB | 84.8% → 82.2% | 32.1 GiB → 30.8 GiB | 1,549 → 1,513 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -4.1% |   -1.313 GiB | 84.8% → 82.2% | 32.1 GiB → 30.8 GiB | 1,549 → 1,513 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88` |
|   -7.4% |   -600.3 MiB | 21.1% → 19.7% | 7.97 GiB → 7.39 GiB |     218 → 211 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -7.4% |   -600.3 MiB | 21.1% → 19.7% | 7.97 GiB → 7.39 GiB |     218 → 211 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0` |
|   -1.1% | -423.153 MiB |         99.4% | 37.6 GiB → 37.2 GiB | 1,863 → 1,854 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  -12.6% | -143.913 MiB |   2.9% → 2.6% |  1.11 GiB → 998 MiB |            60 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -87.0% |  -70.401 MiB |  0.2% → <0.1% | 80.9 MiB → 10.5 MiB |         4 → 2 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -87.0% |  -70.401 MiB |  0.2% → <0.1% | 80.9 MiB → 10.5 MiB |         4 → 2 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| removed |   -1.884 MiB |  <0.1% → 0.0% |      1.88 MiB → 0 B |         1 → 0 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   -0.8% |    -1.31 MiB |          0.4% |   165 MiB → 164 MiB |             5 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|   -0.8% |    -1.31 MiB |          0.4% |   165 MiB → 164 MiB |             5 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |
|   -0.5% | -959.414 KiB |          0.5% |   205 MiB → 204 MiB |           112 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|   -0.5% | -950.562 KiB |          0.5% |   190 MiB → 189 MiB |       74 → 75 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|   -0.5% | -950.062 KiB |          0.5% |   191 MiB → 190 MiB |       75 → 76 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|   -0.5% | -950.062 KiB |          0.5% |   191 MiB → 190 MiB |       75 → 76 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001198798` |

# Retained heap profile diff

Retained 2.56 MiB → 2.85 MiB (+292.835 KiB, +11.2%) over 9 objects → 11 objects (291 KiB → 265 KiB per object).

| Category         | Change |        Delta |      % |                Size | Objects |
| ---------------- | -----: | -----------: | -----: | ------------------: | ------: |
| Standard library | +11.2% | +292.835 KiB | 100.0% | 2.56 MiB → 2.85 MiB |  9 → 11 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

##### Standard library

| Change |        Delta |             % |                Size | Objects | Function                                                                        | Location                |
| -----: | -----------: | ------------: | ------------------: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| +13.9% | +292.765 KiB | 80.5% → 82.5% | 2.06 MiB → 2.35 MiB |   1 → 3 | `copyOf(Object[], int)`                                                         | `java.util.Arrays`      |
|    new |       +112 B |  0.0% → <0.1% |         0 B → 112 B |   0 → 1 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

##### Standard library

|  Change | Delta |            % |       Size | Objects | Function     | Location                           |
| ------: | ----: | -----------: | ---------: | ------: | ------------ | ---------------------------------- |
| removed | -40 B | <0.1% → 0.0% | 40 B → 0 B |   1 → 0 | `<clinit>()` | `scala.collection.immutable.List$` |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

| Change |        Delta |             % |                Size | Objects | Function                                                                    | Location                                                               |
| -----: | -----------: | ------------: | ------------------: | ------: | --------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| +13.9% | +292.765 KiB | 80.5% → 82.5% | 2.06 MiB → 2.35 MiB |   1 → 3 | `copyOf(Object[], int)`                                                     | `java.util.Arrays`                                                     |
| +13.9% | +292.765 KiB | 80.5% → 82.5% | 2.06 MiB → 2.35 MiB |   1 → 3 | `grow(int)`                                                                 | `java.util.ArrayList`                                                  |
|    new | +292.765 KiB |  0.0% → 10.0% |       0 B → 293 KiB |   0 → 2 | `addAll(Collection)`                                                        | `java.util.ArrayList`                                                  |
|    new | +292.765 KiB |  0.0% → 10.0% |       0 B → 293 KiB |   0 → 2 | `lambda$merge$6(List, List)`                                                | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|    new | +292.765 KiB |  0.0% → 10.0% |       0 B → 293 KiB |   0 → 2 | `apply(Object, Object)`                                                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0` |
|    new | +292.765 KiB |  0.0% → 10.0% |       0 B → 293 KiB |   0 → 2 | `merge(Object, Object, BiFunction)`                                         | `java.util.HashMap`                                                    |
|    new | +292.765 KiB |  0.0% → 10.0% |       0 B → 293 KiB |   0 → 2 | `lambda$merge$7(Map, Object, List)`                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|    new | +292.765 KiB |  0.0% → 10.0% |       0 B → 293 KiB |   0 → 2 | `accept(Object, Object)`                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88` |
|    new | +292.765 KiB |  0.0% → 10.0% |       0 B → 293 KiB |   0 → 2 | `forEach(BiConsumer)`                                                       | `java.util.HashMap`                                                    |
|    new | +292.765 KiB |  0.0% → 10.0% |       0 B → 293 KiB |   0 → 2 | `merge(Map, Map)`                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|    new | +292.765 KiB |  0.0% → 10.0% |       0 B → 293 KiB |   0 → 2 | `combineResults(Map, Map)`                                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|    new | +292.765 KiB |  0.0% → 10.0% |       0 B → 293 KiB |   0 → 2 | `combineResults(Object, Object)`                                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|    new | +292.765 KiB |  0.0% → 10.0% |       0 B → 293 KiB |   0 → 2 | `compute()`                                                                 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|    new | +292.765 KiB |  0.0% → 10.0% |       0 B → 293 KiB |   0 → 2 | `exec()`                                                                    | `java.util.concurrent.RecursiveTask`                                   |
|    new | +292.765 KiB |  0.0% → 10.0% |       0 B → 293 KiB |   0 → 2 | `doExec()`                                                                  | `java.util.concurrent.ForkJoinTask`                                    |
|    new | +292.765 KiB |  0.0% → 10.0% |       0 B → 293 KiB |   0 → 2 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`                        | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|    new | +292.765 KiB |  0.0% → 10.0% |       0 B → 293 KiB |   0 → 2 | `scan(ForkJoinPool$WorkQueue, int, int)`                                    | `java.util.concurrent.ForkJoinPool`                                    |
|    new | +292.765 KiB |  0.0% → 10.0% |       0 B → 293 KiB |   0 → 2 | `runWorker(ForkJoinPool$WorkQueue)`                                         | `java.util.concurrent.ForkJoinPool`                                    |
|    new | +292.765 KiB |  0.0% → 10.0% |       0 B → 293 KiB |   0 → 2 | `run()`                                                                     | `java.util.concurrent.ForkJoinWorkerThread`                            |
|    ~0% |       +112 B |   9.7% → 8.8% |             255 KiB |   1 → 2 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` | `java.security.AccessController`                                       |

##### Standard library

| Change |        Delta |             % |                Size | Objects | Function                                                                        | Location                                      |
| -----: | -----------: | ------------: | ------------------: | ------: | ------------------------------------------------------------------------------- | --------------------------------------------- |
| +13.9% | +292.765 KiB | 80.5% → 82.5% | 2.06 MiB → 2.35 MiB |   1 → 3 | `copyOf(Object[], int)`                                                         | `java.util.Arrays`                            |
| +13.9% | +292.765 KiB | 80.5% → 82.5% | 2.06 MiB → 2.35 MiB |   1 → 3 | `grow(int)`                                                                     | `java.util.ArrayList`                         |
|    new | +292.765 KiB |  0.0% → 10.0% |       0 B → 293 KiB |   0 → 2 | `addAll(Collection)`                                                            | `java.util.ArrayList`                         |
|    new | +292.765 KiB |  0.0% → 10.0% |       0 B → 293 KiB |   0 → 2 | `merge(Object, Object, BiFunction)`                                             | `java.util.HashMap`                           |
|    new | +292.765 KiB |  0.0% → 10.0% |       0 B → 293 KiB |   0 → 2 | `forEach(BiConsumer)`                                                           | `java.util.HashMap`                           |
|    new | +292.765 KiB |  0.0% → 10.0% |       0 B → 293 KiB |   0 → 2 | `exec()`                                                                        | `java.util.concurrent.RecursiveTask`          |
|    new | +292.765 KiB |  0.0% → 10.0% |       0 B → 293 KiB |   0 → 2 | `doExec()`                                                                      | `java.util.concurrent.ForkJoinTask`           |
|    new | +292.765 KiB |  0.0% → 10.0% |       0 B → 293 KiB |   0 → 2 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`                            | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|    new | +292.765 KiB |  0.0% → 10.0% |       0 B → 293 KiB |   0 → 2 | `scan(ForkJoinPool$WorkQueue, int, int)`                                        | `java.util.concurrent.ForkJoinPool`           |
|    new | +292.765 KiB |  0.0% → 10.0% |       0 B → 293 KiB |   0 → 2 | `runWorker(ForkJoinPool$WorkQueue)`                                             | `java.util.concurrent.ForkJoinPool`           |
|    new | +292.765 KiB |  0.0% → 10.0% |       0 B → 293 KiB |   0 → 2 | `run()`                                                                         | `java.util.concurrent.ForkJoinWorkerThread`   |
|    ~0% |       +112 B |   9.7% → 8.8% |             255 KiB |   1 → 2 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)`     | `java.security.AccessController`              |
|    ~0% |       +112 B |   9.7% → 8.8% |             255 KiB |   1 → 2 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)`                 | `java.security.AccessController`              |
|    ~0% |       +112 B |   9.7% → 8.8% |             255 KiB |   1 → 2 | `run()`                                                                         | `java.net.URLClassLoader$1`                   |
|    ~0% |       +112 B |   9.7% → 8.8% |             255 KiB |   1 → 2 | `findClass(String)`                                                             | `java.net.URLClassLoader`                     |
|    ~0% |       +112 B |   9.7% → 8.8% |             255 KiB |   1 → 2 | `loadClass(String, boolean)`                                                    | `java.lang.ClassLoader`                       |
|    ~0% |       +112 B |   9.7% → 8.8% |             255 KiB |   1 → 2 | `loadClass(String)`                                                             | `java.lang.ClassLoader`                       |
|    new |       +112 B |  0.0% → <0.1% |         0 B → 112 B |   0 → 1 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                       |
|    new |       +112 B |  0.0% → <0.1% |         0 B → 112 B |   0 → 1 | `defineClass(String, byte[], int, int, ProtectionDomain)`                       | `java.lang.ClassLoader`                       |
|    new |       +112 B |  0.0% → <0.1% |         0 B → 112 B |   0 → 1 | `defineClass(String, byte[], int, int, CodeSource)`                             | `java.security.SecureClassLoader`             |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

##### Standard library

|  Change | Delta |            % |       Size | Objects | Function     | Location                               |
| ------: | ----: | -----------: | ---------: | ------: | ------------ | -------------------------------------- |
| removed | -40 B | <0.1% → 0.0% | 40 B → 0 B |   1 → 0 | `<clinit>()` | `scala.collection.immutable.List$`     |
| removed | -40 B | <0.1% → 0.0% | 40 B → 0 B |   1 → 0 | `<init>()`   | `scala.collection.immutable.Iterable$` |
| removed | -40 B | <0.1% → 0.0% | 40 B → 0 B |   1 → 0 | `<clinit>()` | `scala.collection.immutable.Iterable$` |
| removed | -40 B | <0.1% → 0.0% | 40 B → 0 B |   1 → 0 | `<init>()`   | `scala.collection.Iterable$`           |
| removed | -40 B | <0.1% → 0.0% | 40 B → 0 B |   1 → 0 | `<clinit>()` | `scala.collection.Iterable$`           |
| removed | -40 B | <0.1% → 0.0% | 40 B → 0 B |   1 → 0 | `<clinit>()` | `scala.package$`                       |

# Lock contention profile diff

Blocked 7.30s → 7.18s (-112.86ms, -1.5%) over 61 contentions → 59 contentions (119.7ms → 121.8ms per contention).

| Category         | Change |     Delta |      % |          Time | Contentions |
| ---------------- | -----: | --------: | -----: | ------------: | ----------: |
| Standard library |  -1.5% | -112.86ms | 100.0% | 7.30s → 7.18s |     61 → 59 |

## Hottest functions

### Self time

#### Improvements

Functions with the largest decrease in time blocked directly in the function body, excluding callees.

##### Standard library

| Change |     Delta |      % |          Time | Contentions | Function              | Location                   |
| -----: | --------: | -----: | ------------: | ----------: | --------------------- | -------------------------- |
|  -1.5% | -112.86ms | 100.0% | 7.30s → 7.18s |     61 → 59 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

| Change |    Delta |             % |          Time | Contentions | Function                                             | Location                                               |
| -----: | -------: | ------------: | ------------: | ----------: | ---------------------------------------------------- | ------------------------------------------------------ |
|  +1.2% | +85.50ms | 93.7% → 96.4% | 6.84s → 6.92s |     44 → 49 | `park()`                                             | `java.util.concurrent.locks.LockSupport`               |
|    new | +36.75ms |   0.0% → 0.5% |  0ms → 36.8ms |       0 → 1 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                    |
|    new | +36.75ms |   0.0% → 0.5% |  0ms → 36.8ms |       0 → 1 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |
|    new | +36.75ms |   0.0% → 0.5% |  0ms → 36.8ms |       0 → 1 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                   |
|    new | +36.75ms |   0.0% → 0.5% |  0ms → 36.8ms |       0 → 1 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                    |
|    new | +36.75ms |   0.0% → 0.5% |  0ms → 36.8ms |       0 → 1 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`          |
|    new | +36.75ms |   0.0% → 0.5% |  0ms → 36.8ms |       0 → 1 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                    |

##### Standard library

| Change |    Delta |             % |          Time | Contentions | Function                                             | Location                                      |
| -----: | -------: | ------------: | ------------: | ----------: | ---------------------------------------------------- | --------------------------------------------- |
|  +1.2% | +85.50ms | 93.7% → 96.4% | 6.84s → 6.92s |     44 → 49 | `park()`                                             | `java.util.concurrent.locks.LockSupport`      |
|    new | +36.75ms |   0.0% → 0.5% |  0ms → 36.8ms |       0 → 1 | `join()`                                             | `java.util.concurrent.ForkJoinTask`           |
|    new | +36.75ms |   0.0% → 0.5% |  0ms → 36.8ms |       0 → 1 | `exec()`                                             | `java.util.concurrent.RecursiveTask`          |
|    new | +36.75ms |   0.0% → 0.5% |  0ms → 36.8ms |       0 → 1 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`           |
|    new | +36.75ms |   0.0% → 0.5% |  0ms → 36.8ms |       0 → 1 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|    new | +36.75ms |   0.0% → 0.5% |  0ms → 36.8ms |       0 → 1 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`           |

#### Improvements

Functions with the largest decrease in total time blocked in the function and all its callees.

| Change |     Delta |             % |              Time | Contentions | Function                                                                                                               | Location                                                               |
| -----: | --------: | ------------: | ----------------: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| -43.1% | -198.36ms |   6.3% → 3.6% | 460.2ms → 261.8ms |     17 → 10 | `parkUntil(long)`                                                                                                      | `java.util.concurrent.locks.LockSupport`                               |
|  -1.5% | -112.86ms |        100.0% |     7.30s → 7.18s |     61 → 59 | `park(boolean, long)`                                                                                                  | `jdk.internal.misc.Unsafe`                                             |
|  -1.5% |  -91.42ms | 83.9% → 84.0% |     6.12s → 6.03s |          16 | `get()`                                                                                                                | `java.util.concurrent.ForkJoinTask`                                    |
|  -1.5% |  -91.42ms | 83.9% → 84.0% |     6.12s → 6.03s |          16 | `run(int, List, int)`                                                                                                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -1.5% |  -91.42ms | 83.9% → 84.0% |     6.12s → 6.03s |          16 | `$anonfun$1(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  -1.5% |  -91.42ms | 83.9% → 84.0% |     6.12s → 6.03s |          16 | `$anonfun$adapted$1(Object)`                                                                                           | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  -1.5% |  -91.42ms | 83.9% → 84.0% |     6.12s → 6.03s |          16 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011f6c70`   |
|  -1.5% |  -91.42ms | 83.9% → 84.0% |     6.12s → 6.03s |          16 | `map(Function1)`                                                                                                       | `scala.collection.immutable.Range`                                     |
|  -1.5% |  -91.42ms | 83.9% → 84.0% |     6.12s → 6.03s |          16 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  -1.5% |  -91.42ms | 83.9% → 84.0% |     6.12s → 6.03s |          16 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |
|  -1.5% |  -91.42ms | 83.9% → 84.0% |     6.12s → 6.03s |          16 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|  -1.5% |  -91.42ms | 83.9% → 84.0% |     6.12s → 6.03s |          16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -1.5% |  -91.42ms | 83.9% → 84.0% |     6.12s → 6.03s |          16 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001198798` |
|  -1.5% |  -91.42ms | 83.9% → 84.0% |     6.12s → 6.03s |          16 | `apply(Object)`                                                                                                        | `scala.runtime.function.JProcedure1`                                   |
|  -1.5% |  -91.42ms | 83.9% → 84.0% |     6.12s → 6.03s |          16 | `foreach(Function1)`                                                                                                   | `scala.collection.immutable.List`                                      |
|  -1.5% |  -91.42ms | 83.9% → 84.0% |     6.12s → 6.03s |          16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -1.5% |  -91.42ms | 83.9% → 84.0% |     6.12s → 6.03s |          16 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -1.5% |  -91.42ms | 83.9% → 84.0% |     6.12s → 6.03s |          16 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|  -1.5% |  -91.42ms | 83.9% → 84.0% |     6.12s → 6.03s |          16 | `invokeStatic(Object, Object)`                                                                                         | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`                   |
|  -1.5% |  -91.42ms | 83.9% → 84.0% |     6.12s → 6.03s |          16 | `invoke(Object, Object, Object)`                                                                                       | `java.lang.invoke.LambdaForm$MH.0x0000007001082400`                    |

##### Standard library

| Change |     Delta |             % |              Time | Contentions | Function                                         | Location                                             |
| -----: | --------: | ------------: | ----------------: | ----------: | ------------------------------------------------ | ---------------------------------------------------- |
| -43.1% | -198.36ms |   6.3% → 3.6% | 460.2ms → 261.8ms |     17 → 10 | `parkUntil(long)`                                | `java.util.concurrent.locks.LockSupport`             |
|  -1.5% | -112.86ms |        100.0% |     7.30s → 7.18s |     61 → 59 | `park(boolean, long)`                            | `jdk.internal.misc.Unsafe`                           |
|  -1.5% |  -91.42ms | 83.9% → 84.0% |     6.12s → 6.03s |          16 | `get()`                                          | `java.util.concurrent.ForkJoinTask`                  |
|  -1.5% |  -91.42ms | 83.9% → 84.0% |     6.12s → 6.03s |          16 | `map(Function1)`                                 | `scala.collection.immutable.Range`                   |
|  -1.5% |  -91.42ms | 83.9% → 84.0% |     6.12s → 6.03s |          16 | `apply(Object)`                                  | `scala.runtime.function.JProcedure1`                 |
|  -1.5% |  -91.42ms | 83.9% → 84.0% |     6.12s → 6.03s |          16 | `foreach(Function1)`                             | `scala.collection.immutable.List`                    |
|  -1.5% |  -91.42ms | 83.9% → 84.0% |     6.12s → 6.03s |          16 | `invokeStatic(Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00` |
|  -1.5% |  -91.42ms | 83.9% → 84.0% |     6.12s → 6.03s |          16 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001082400`  |
|  -1.5% |  -91.42ms | 83.9% → 84.0% |     6.12s → 6.03s |          16 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                   |
|  -1.5% |  -91.42ms | 83.9% → 84.0% |     6.12s → 6.03s |          16 | `invokeImpl(Object, Object[])`                   | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  -1.5% |  -91.42ms | 83.9% → 84.0% |     6.12s → 6.03s |          16 | `invoke(Object, Object[])`                       | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  -1.5% |  -91.42ms | 83.9% → 84.0% |     6.12s → 6.03s |          16 | `invoke(Object, Object[])`                       | `java.lang.reflect.Method`                           |
|  -5.0% |  -58.19ms | 16.1% → 15.5% |     1.17s → 1.11s |     45 → 42 | `awaitWork(ForkJoinPool$WorkQueue)`              | `java.util.concurrent.ForkJoinPool`                  |
|  -0.9% |  -54.67ms | 83.9% → 84.5% |     6.12s → 6.07s |     16 → 17 | `awaitDone(int, long)`                           | `java.util.concurrent.ForkJoinTask`                  |
|  -1.8% |  -21.44ms | 16.1% → 16.0% |     1.17s → 1.15s |     45 → 43 | `runWorker(ForkJoinPool$WorkQueue)`              | `java.util.concurrent.ForkJoinPool`                  |
|  -1.8% |  -21.44ms | 16.1% → 16.0% |     1.17s → 1.15s |     45 → 43 | `run()`                                          | `java.util.concurrent.ForkJoinWorkerThread`          |

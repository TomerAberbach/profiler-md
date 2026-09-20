# Sampling profile diff

Collected 1,637 samples → 1,206 samples (-431 samples, -26.3%).

| Category         | Change | Delta |             % |       Samples |
| ---------------- | -----: | ----: | ------------: | ------------: |
| Ours             | -27.6% |  -406 | 90.0% → 88.5% | 1,473 → 1,067 |
| Standard library | -15.2% |   -25 | 10.0% → 11.5% |     164 → 139 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                                      | Location                                                                              |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|  +14.3% |    +6 | 2.6% → 4.0% | 42 → 48 | `copyOf(Object[], int)`                                       | `java.util.Arrays`                                                                    |
| +150.0% |    +3 | 0.1% → 0.4% |   2 → 5 | `accept(Object)`                                              | `java.util.stream.ReduceOps$3ReducingSink`                                            |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `doExec()`                                                    | `java.util.concurrent.ForkJoinTask`                                                   |
|  +66.7% |    +2 | 0.2% → 0.4% |   3 → 5 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater`                                                              |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `awaitDone(int, long)`                                        | `java.util.concurrent.ForkJoinTask`                                                   |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `unpark(Object)`                                              | `jdk.internal.misc.Unsafe`                                                            |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `nextNode()`                                                  | `java.util.HashMap$HashIterator`                                                      |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `add(double[], double[])`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `compute()`                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `join()`                                                      | `java.util.concurrent.ForkJoinTask`                                                   |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`          | `java.util.concurrent.ForkJoinPool$WorkQueue`                                         |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `scan(ForkJoinPool$WorkQueue, int, int)`                      | `java.util.concurrent.ForkJoinPool`                                                   |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `lambda$merge$7(Map, Object, List)`                           | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `forEach(BiConsumer)`                                         | `java.util.HashMap`                                                                   |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `tryCompensate(long, boolean)`                                | `java.util.concurrent.ForkJoinPool`                                                   |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `readBytes0(byte[], int, int)`                                | `java.io.RandomAccessFile`                                                            |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `apply(Object)`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000d801204b38` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `checkIndex(int, int)`                                        | `java.util.Objects`                                                                   |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `estimateSize()`                                              | `java.util.Spliterators$DoubleArraySpliterator`                                       |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `tick()`                                                      | `jdk.jfr.internal.periodic.PeriodicTask`                                              |

##### Ours

|  Change | Delta |           % | Samples | Function                            | Location                                                                              |
| ------: | ----: | ----------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------- |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `add(double[], double[])`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `compute()`                         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `apply(Object)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000d801204b38` |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                      | Location                                        |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------- | ----------------------------------------------- |
|  +14.3% |    +6 | 2.6% → 4.0% | 42 → 48 | `copyOf(Object[], int)`                                       | `java.util.Arrays`                              |
| +150.0% |    +3 | 0.1% → 0.4% |   2 → 5 | `accept(Object)`                                              | `java.util.stream.ReduceOps$3ReducingSink`      |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `doExec()`                                                    | `java.util.concurrent.ForkJoinTask`             |
|  +66.7% |    +2 | 0.2% → 0.4% |   3 → 5 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater`                        |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `awaitDone(int, long)`                                        | `java.util.concurrent.ForkJoinTask`             |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `unpark(Object)`                                              | `jdk.internal.misc.Unsafe`                      |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `nextNode()`                                                  | `java.util.HashMap$HashIterator`                |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `join()`                                                      | `java.util.concurrent.ForkJoinTask`             |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`          | `java.util.concurrent.ForkJoinPool$WorkQueue`   |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `scan(ForkJoinPool$WorkQueue, int, int)`                      | `java.util.concurrent.ForkJoinPool`             |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `forEach(BiConsumer)`                                         | `java.util.HashMap`                             |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `tryCompensate(long, boolean)`                                | `java.util.concurrent.ForkJoinPool`             |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `readBytes0(byte[], int, int)`                                | `java.io.RandomAccessFile`                      |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `checkIndex(int, int)`                                        | `java.util.Objects`                             |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `estimateSize()`                                              | `java.util.Spliterators$DoubleArraySpliterator` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `tick()`                                                      | `jdk.jfr.internal.periodic.PeriodicTask`        |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `resize()`                                                    | `java.util.HashMap`                             |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                                                  | Location                                                   |
| ------: | ----: | ------------: | --------: | --------------------------------------------------------- | ---------------------------------------------------------- |
|  -29.3% |  -183 | 38.1% → 36.6% | 624 → 441 | `accumulate(Double[], double[])`                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -41.4% |  -101 | 14.9% → 11.9% | 244 → 143 | `findNearestCentroid()`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -23.5% |   -95 | 24.7% → 25.6% | 404 → 309 | `distance(Double[], Double[])`                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -27.4% |   -20 |   4.5% → 4.4% |   73 → 53 | `vectorSum()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| removed |   -14 |   0.9% → 0.0% |    14 → 0 | `grow(int)`                                               | `java.util.ArrayList`                                      |
|  -23.2% |   -13 |   3.4% → 3.6% |   56 → 43 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                                        |
|  -31.3% |   -10 |   2.0% → 1.8% |   32 → 22 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -40.0% |    -6 |   0.9% → 0.7% |    15 → 9 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                        |
|  -66.7% |    -6 |   0.5% → 0.2% |     9 → 3 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                                        |
|  -50.0% |    -3 |   0.4% → 0.2% |     6 → 3 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `wrapSink(Sink)`                                          | `java.util.stream.AbstractPipeline`                        |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `readLine()`                                              | `java.util.Properties$LineReader`                          |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `addConstantUtf8Reference(int, String)`                   | `jdk.internal.org.objectweb.asm.SymbolTable`               |
|  -50.0% |    -1 |          0.1% |     2 → 1 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                        |
|   -1.1% |    -1 |   5.7% → 7.6% |   93 → 92 | `collectClusters(int[])`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `<init>(Collection)`                                      | `java.util.ArrayList`                                      |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `putMapEntries(Map, boolean)`                             | `java.util.HashMap`                                        |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `<init>(Map)`                                             | `java.util.HashMap`                                        |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `push(ForkJoinTask, ForkJoinPool, boolean)`               | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `<init>(HashMap)`                                         | `java.util.HashMap$HashIterator`                           |

##### Ours

|  Change | Delta |             % |   Samples | Function                         | Location                                                   |
| ------: | ----: | ------------: | --------: | -------------------------------- | ---------------------------------------------------------- |
|  -29.3% |  -183 | 38.1% → 36.6% | 624 → 441 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -41.4% |  -101 | 14.9% → 11.9% | 244 → 143 | `findNearestCentroid()`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -23.5% |   -95 | 24.7% → 25.6% | 404 → 309 | `distance(Double[], Double[])`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -27.4% |   -20 |   4.5% → 4.4% |   73 → 53 | `vectorSum()`                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -31.3% |   -10 |   2.0% → 1.8% |   32 → 22 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -1.1% |    -1 |   5.7% → 7.6% |   93 → 92 | `collectClusters(int[])`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `createSubtask(int, int)`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                  | Location                                      |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------- | --------------------------------------------- |
| removed |   -14 | 0.9% → 0.0% |  14 → 0 | `grow(int)`                                               | `java.util.ArrayList`                         |
|  -23.2% |   -13 | 3.4% → 3.6% | 56 → 43 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                           |
|  -40.0% |    -6 | 0.9% → 0.7% |  15 → 9 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  -66.7% |    -6 | 0.5% → 0.2% |   9 → 3 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                           |
|  -50.0% |    -3 | 0.4% → 0.2% |   6 → 3 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `wrapSink(Sink)`                                          | `java.util.stream.AbstractPipeline`           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `readLine()`                                              | `java.util.Properties$LineReader`             |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `addConstantUtf8Reference(int, String)`                   | `jdk.internal.org.objectweb.asm.SymbolTable`  |
|  -50.0% |    -1 |        0.1% |   2 → 1 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>(Collection)`                                      | `java.util.ArrayList`                         |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `putMapEntries(Map, boolean)`                             | `java.util.HashMap`                           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>(Map)`                                             | `java.util.HashMap`                           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `push(ForkJoinTask, ForkJoinPool, boolean)`               | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>(HashMap)`                                         | `java.util.HashMap$HashIterator`              |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `getAndClearInterrupt()`                                  | `java.lang.Thread`                            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `awaitWork(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `signalWork()`                                            | `java.util.concurrent.ForkJoinPool`           |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |           % | Samples | Function                                                      | Location                                                               |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------- | ---------------------------------------------------------------------- |
|     new |    +9 | 0.0% → 0.7% |   0 → 9 | `invokeStatic(Object, Object)`                                | `java.lang.invoke.LambdaForm$DMH.0x000000d801001c00`                   |
|     new |    +9 | 0.0% → 0.7% |   0 → 9 | `invoke(Object, Object, Object)`                              | `java.lang.invoke.LambdaForm$MH.0x000000d801082400`                    |
|     new |    +9 | 0.0% → 0.7% |   0 → 9 | `toArray()`                                                   | `java.util.ArrayList`                                                  |
| +800.0% |    +8 | 0.1% → 0.7% |   1 → 9 | `<init>(Collection)`                                          | `java.util.ArrayList`                                                  |
| +800.0% |    +8 | 0.1% → 0.7% |   1 → 9 | `lambda$merge$6(List, List)`                                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| +800.0% |    +8 | 0.1% → 0.7% |   1 → 9 | `apply(Object, Object)`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d801204fd0` |
|  +14.3% |    +6 | 2.6% → 4.0% | 42 → 48 | `copyOf(Object[], int)`                                       | `java.util.Arrays`                                                     |
|  +28.6% |    +6 | 1.3% → 2.2% | 21 → 27 | `call()`                                                      | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d8011ffbc0` |
|  +17.4% |    +4 | 1.4% → 2.2% | 23 → 27 | `lambda$run$0(int, List, int)`                                | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +36.4% |    +4 | 0.7% → 1.2% | 11 → 15 | `forEach(BiConsumer)`                                         | `java.util.HashMap`                                                    |
| +100.0% |    +3 | 0.2% → 0.5% |   3 → 6 | `read(byte[], int, int)`                                      | `java.util.zip.InflaterInputStream`                                    |
| +150.0% |    +3 | 0.1% → 0.4% |   2 → 5 | `accept(Object)`                                              | `java.util.stream.ReduceOps$3ReducingSink`                             |
|  +27.3% |    +3 | 0.7% → 1.2% | 11 → 14 | `lambda$merge$7(Map, Object, List)`                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +27.3% |    +3 | 0.7% → 1.2% | 11 → 14 | `accept(Object, Object)`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d801204d88` |
|  +18.8% |    +3 | 1.0% → 1.6% | 16 → 19 | `merge(Map, Map)`                                             | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +18.8% |    +3 | 1.0% → 1.6% | 16 → 19 | `combineResults(Map, Map)`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  +18.8% |    +3 | 1.0% → 1.6% | 16 → 19 | `combineResults(Object, Object)`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  +66.7% |    +2 | 0.2% → 0.4% |   3 → 5 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater`                                               |
|  +66.7% |    +2 | 0.2% → 0.4% |   3 → 5 | `inflate(byte[], int, int)`                                   | `java.util.zip.Inflater`                                               |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `getBytes()`                                                  | `jdk.internal.loader.Resource`                                         |

##### Ours

|  Change | Delta |           % | Samples | Function                                                                                                               | Location                                                               |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| +800.0% |    +8 | 0.1% → 0.7% |   1 → 9 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| +800.0% |    +8 | 0.1% → 0.7% |   1 → 9 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d801204fd0` |
|  +28.6% |    +6 | 1.3% → 2.2% | 21 → 27 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d8011ffbc0` |
|  +17.4% |    +4 | 1.4% → 2.2% | 23 → 27 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +27.3% |    +3 | 0.7% → 1.2% | 11 → 14 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +27.3% |    +3 | 0.7% → 1.2% | 11 → 14 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d801204d88` |
|  +18.8% |    +3 | 1.0% → 1.6% | 16 → 19 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +18.8% |    +3 | 1.0% → 1.6% | 16 → 19 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  +18.8% |    +3 | 1.0% → 1.6% | 16 → 19 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  +22.2% |    +2 | 0.5% → 0.9% |  9 → 11 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
|  +22.2% |    +2 | 0.5% → 0.9% |  9 → 11 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
|  +22.2% |    +2 | 0.5% → 0.9% |  9 → 11 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
|  +50.0% |    +2 | 0.2% → 0.5% |   4 → 6 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `add(double[], double[])`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `combineResults(double[], double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `extractResource(String, Path)`                                                                                        | `org.renaissance.core.ResourceUtils`                                   |
|  +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `extractResources(Iterable, Path)`                                                                                     | `org.renaissance.core.ResourceUtils`                                   |
|  +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `createClassLoaderForModule(String)`                                                                                   | `org.renaissance.core.ModuleLoader`                                    |
|  +16.7% |    +1 | 0.4% → 0.6% |   6 → 7 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                                    | Location                                             |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new |    +9 | 0.0% → 0.7% |   0 → 9 | `invokeStatic(Object, Object)`                                              | `java.lang.invoke.LambdaForm$DMH.0x000000d801001c00` |
|     new |    +9 | 0.0% → 0.7% |   0 → 9 | `invoke(Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x000000d801082400`  |
|     new |    +9 | 0.0% → 0.7% |   0 → 9 | `toArray()`                                                                 | `java.util.ArrayList`                                |
| +800.0% |    +8 | 0.1% → 0.7% |   1 → 9 | `<init>(Collection)`                                                        | `java.util.ArrayList`                                |
|  +14.3% |    +6 | 2.6% → 4.0% | 42 → 48 | `copyOf(Object[], int)`                                                     | `java.util.Arrays`                                   |
|  +36.4% |    +4 | 0.7% → 1.2% | 11 → 15 | `forEach(BiConsumer)`                                                       | `java.util.HashMap`                                  |
| +100.0% |    +3 | 0.2% → 0.5% |   3 → 6 | `read(byte[], int, int)`                                                    | `java.util.zip.InflaterInputStream`                  |
| +150.0% |    +3 | 0.1% → 0.4% |   2 → 5 | `accept(Object)`                                                            | `java.util.stream.ReduceOps$3ReducingSink`           |
|  +66.7% |    +2 | 0.2% → 0.4% |   3 → 5 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`               | `java.util.zip.Inflater`                             |
|  +66.7% |    +2 | 0.2% → 0.4% |   3 → 5 | `inflate(byte[], int, int)`                                                 | `java.util.zip.Inflater`                             |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `getBytes()`                                                                | `jdk.internal.loader.Resource`                       |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `getBytes()`                                                                | `jdk.internal.loader.URLClassPath$JarLoader$2`       |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `defineClass(String, Resource)`                                             | `java.net.URLClassLoader`                            |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `run()`                                                                     | `java.net.URLClassLoader$1`                          |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` | `java.security.AccessController`                     |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)`             | `java.security.AccessController`                     |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `findClass(String)`                                                         | `java.net.URLClassLoader`                            |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `loadClass(String, boolean)`                                                | `java.lang.ClassLoader`                              |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `loadClass(String)`                                                         | `java.lang.ClassLoader`                              |
|  +50.0% |    +2 | 0.2% → 0.5% |   4 → 6 | `copyInto(Sink, Spliterator)`                                               | `java.util.stream.AbstractPipeline`                  |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |             % |       Samples | Function                                                  | Location                                                   |
| -----: | ----: | ------------: | ------------: | --------------------------------------------------------- | ---------------------------------------------------------- |
| -34.5% |  -470 | 83.1% → 73.9% |   1,361 → 891 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| -33.9% |  -446 | 80.3% → 72.1% |   1,315 → 869 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                        |
| -34.0% |  -445 | 80.0% → 71.7% |   1,310 → 865 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                        |
| -27.0% |  -438 | 99.2% → 98.3% | 1,624 → 1,186 | `compute()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
| -27.0% |  -438 | 99.2% → 98.3% | 1,624 → 1,186 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                       |
| -26.7% |  -434 | 99.2% → 98.7% | 1,624 → 1,190 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                        |
| -27.3% |  -430 | 96.2% → 94.9% | 1,574 → 1,144 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| -34.0% |  -429 | 77.2% → 69.2% |   1,263 → 834 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`                |
| -26.8% |  -426 | 96.9% → 96.3% | 1,587 → 1,161 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                        |
| -26.8% |  -426 | 96.9% → 96.3% | 1,587 → 1,161 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                        |
| -26.7% |  -236 | 54.1% → 53.8% |     885 → 649 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -29.0% |  -202 | 42.6% → 41.0% |     697 → 495 | `vectorSum()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| -29.0% |  -202 | 42.6% → 41.0% |     697 → 495 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| -30.2% |  -196 | 39.6% → 37.5% |     648 → 452 | `findNearestCentroid()`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -29.3% |  -183 | 38.1% → 36.6% |     624 → 441 | `accumulate(Double[], double[])`                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| -22.6% |  -100 | 27.0% → 28.4% |     442 → 342 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                        |
| -23.5% |   -95 | 24.7% → 25.6% |     404 → 309 | `distance(Double[], Double[])`                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -19.5% |   -48 | 15.0% → 16.4% |     246 → 198 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| -18.4% |   -47 | 15.6% → 17.2% |     255 → 208 | `average(List)`                                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| -18.4% |   -47 | 15.6% → 17.2% |     255 → 208 | `computeClusterAverages()`                                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

##### Ours

|  Change | Delta |             % |       Samples | Function                                         | Location                                                               |
| ------: | ----: | ------------: | ------------: | ------------------------------------------------ | ---------------------------------------------------------------------- |
|  -27.0% |  -438 | 99.2% → 98.3% | 1,624 → 1,186 | `compute()`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  -26.7% |  -236 | 54.1% → 53.8% |     885 → 649 | `computeDirectly()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -29.0% |  -202 | 42.6% → 41.0% |     697 → 495 | `vectorSum()`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -29.0% |  -202 | 42.6% → 41.0% |     697 → 495 | `computeDirectly()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -30.2% |  -196 | 39.6% → 37.5% |     648 → 452 | `findNearestCentroid()`                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -29.3% |  -183 | 38.1% → 36.6% |     624 → 441 | `accumulate(Double[], double[])`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -23.5% |   -95 | 24.7% → 25.6% |     404 → 309 | `distance(Double[], Double[])`                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -19.5% |   -48 | 15.0% → 16.4% |     246 → 198 | `computeDirectly()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -18.4% |   -47 | 15.6% → 17.2% |     255 → 208 | `average(List)`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -18.4% |   -47 | 15.6% → 17.2% |     255 → 208 | `computeClusterAverages()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -14.6% |   -30 | 12.5% → 14.5% |     205 → 175 | `collectClusters(int[])`                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `apply(int)`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a18d8` |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `loadProperties(URL)`                            | `org.renaissance.core.ResourceUtils`                                   |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `loadPropertiesAsMap(URL)`                       | `org.renaissance.core.ResourceUtils`                                   |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `create(Path, String, Optional, Map, boolean)`   | `org.renaissance.core.BenchmarkSuite`                                  |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `$anonfun$1(Config, Path)`                       | `org.renaissance.harness.RenaissanceSuite$`                            |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `apply()`                                        | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000f80117e000` |
|  -50.0% |    -1 |          0.1% |         2 → 1 | `getBenchmarkClassLoader(BenchmarkDescriptor)`   | `org.renaissance.core.BenchmarkSuite`                                  |
|  -50.0% |    -1 |          0.1% |         2 → 1 | `createBenchmark(BenchmarkDescriptor)`           | `org.renaissance.core.BenchmarkSuite`                                  |

##### Standard library

|  Change | Delta |             % |       Samples | Function                                                  | Location                                             |
| ------: | ----: | ------------: | ------------: | --------------------------------------------------------- | ---------------------------------------------------- |
|  -34.5% |  -470 | 83.1% → 73.9% |   1,361 → 891 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|  -33.9% |  -446 | 80.3% → 72.1% |   1,315 → 869 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                  |
|  -34.0% |  -445 | 80.0% → 71.7% |   1,310 → 865 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                  |
|  -27.0% |  -438 | 99.2% → 98.3% | 1,624 → 1,186 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                 |
|  -26.7% |  -434 | 99.2% → 98.7% | 1,624 → 1,190 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                  |
|  -27.3% |  -430 | 96.2% → 94.9% | 1,574 → 1,144 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|  -34.0% |  -429 | 77.2% → 69.2% |   1,263 → 834 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`          |
|  -26.8% |  -426 | 96.9% → 96.3% | 1,587 → 1,161 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                  |
|  -26.8% |  -426 | 96.9% → 96.3% | 1,587 → 1,161 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                  |
|  -22.6% |  -100 | 27.0% → 28.4% |     442 → 342 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                  |
|  -14.9% |   -40 | 16.4% → 18.9% |     268 → 228 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                  |
|  -30.4% |   -17 |   3.4% → 3.2% |       56 → 39 | `grow(int)`                                               | `java.util.ArrayList`                                |
|  -30.4% |   -17 |   3.4% → 3.2% |       56 → 39 | `grow()`                                                  | `java.util.ArrayList`                                |
|  -30.4% |   -17 |   3.4% → 3.2% |       56 → 39 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                                |
|  -30.4% |   -17 |   3.4% → 3.2% |       56 → 39 | `add(Object)`                                             | `java.util.ArrayList`                                |
|  -19.6% |   -11 |   3.4% → 3.7% |       56 → 45 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                                  |
| removed |    -9 |   0.5% → 0.0% |         9 → 0 | `invokeStatic(Object, Object)`                            | `java.lang.invoke.LambdaForm$DMH.0x000000f801001c00` |
| removed |    -9 |   0.5% → 0.0% |         9 → 0 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x000000f801082400`  |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `wrapSink(Sink)`                                          | `java.util.stream.AbstractPipeline`                  |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `from(IterableOnce)`                                      | `scala.collection.immutable.Map$`                    |

# Allocated heap profile diff

Allocated 37.7 GiB → 37.3 GiB (-402.068 MiB, -1.0%) over 2,021 samples → 2,160 samples (19.1 MiB → 17.7 MiB per sample).

| Category         | Change |        Delta |             % |                Size |       Samples |
| ---------------- | -----: | -----------: | ------------: | ------------------: | ------------: |
| Standard library |  -2.3% | -855.806 MiB | 95.7% → 94.4% | 36.1 GiB → 35.2 GiB | 1,906 → 2,046 |
| Ours             | +27.1% | +453.737 MiB |   4.3% → 5.6% | 1.64 GiB → 2.08 GiB |     113 → 112 |
| Unknown          |  -1.4% |        -32 B |         <0.1% | 2.26 KiB → 2.23 KiB |             2 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|   Change |        Delta |            % |                Size | Samples | Function                                                          | Location                                                   |
| -------: | -----------: | -----------: | ------------------: | ------: | ----------------------------------------------------------------- | ---------------------------------------------------------- |
|   +24.5% | +262.761 MiB |  2.8% → 3.5% |  1.05 GiB → 1.3 GiB | 59 → 67 | `findNearestCentroid()`                                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +593.8% | +261.958 MiB |  0.1% → 0.8% |  44.1 MiB → 306 MiB |  2 → 12 | `createSubtask(int, int)`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +429.2% | +123.302 MiB |  0.1% → 0.4% |  28.7 MiB → 152 MiB |   6 → 9 | `grow(int)`                                                       | `java.util.ArrayList`                                      |
|  +158.9% |  +109.85 MiB |  0.2% → 0.5% |  69.1 MiB → 179 MiB |   4 → 5 | `add(double[], double[])`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +1034.2% |  +90.949 MiB | <0.1% → 0.3% | 8.79 MiB → 99.7 MiB |   4 → 3 | `lambda$collectClusters$0(Double[])`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +62.9% |     +5.1 MiB |        <0.1% | 8.11 MiB → 13.2 MiB | 13 → 20 | `copyOf(Object[], int, Class)`                                    | `java.util.Arrays`                                         |
|   +19.8% |   +1.324 MiB |        <0.1% |    6.68 MiB → 8 MiB | 19 → 22 | `valueOf(double)`                                                 | `java.lang.Double`                                         |
|   +12.7% |   +1.279 MiB |        <0.1% | 10.1 MiB → 11.4 MiB | 20 → 23 | `copyOf(byte[], int)`                                             | `java.util.Arrays`                                         |
|   +13.7% |   +1.208 MiB |        <0.1% |   8.84 MiB → 10 MiB |   9 → 4 | `merge(Map, Map)`                                                 | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|   +80.0% |   +1.166 MiB |        <0.1% | 1.46 MiB → 2.62 MiB |   2 → 1 | `createSubtask(int, int)`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  +229.3% | +967.484 KiB |        <0.1% |  422 KiB → 1.36 MiB |       1 | `fillInStackTrace(int)`                                           | `java.lang.Throwable`                                      |
|   +89.1% |  +834.75 KiB |        <0.1% |  937 KiB → 1.73 MiB |       2 | `copyOfRangeByte(byte[], int, int)`                               | `java.util.Arrays`                                         |
|      new | +790.343 KiB | 0.0% → <0.1% |       0 B → 790 KiB |   0 → 2 | `lookupKey(Object)`                                               | `jdk.internal.util.ReferencedKeyMap`                       |
|      new | +666.656 KiB | 0.0% → <0.1% |       0 B → 667 KiB |   0 → 1 | `<init>(InputStream, int)`                                        | `java.util.jar.Manifest$FastInputStream`                   |
|  +148.3% | +574.781 KiB |        <0.1% |   388 KiB → 962 KiB |   1 → 3 | `builder(long, IntFunction)`                                      | `java.util.stream.Nodes`                                   |
|   +54.1% | +544.421 KiB |        <0.1% | 1006 KiB → 1.51 MiB |       4 | `lambda$generateData$4(int)`                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|   +14.9% | +534.218 KiB |        <0.1% | 3.49 MiB → 4.01 MiB |       9 | `<init>(InputStream, Inflater, int)`                              | `java.util.zip.InflaterInputStream`                        |
|      new |   +490.5 KiB | 0.0% → <0.1% |       0 B → 491 KiB |   0 → 1 | `<init>(SymbolTable, int, String, String, String, String[], int)` | `jdk.internal.org.objectweb.asm.MethodWriter`              |
|  +111.2% | +431.046 KiB |        <0.1% |   388 KiB → 819 KiB |   1 → 2 | `putVal(Object, Object, boolean)`                                 | `java.util.concurrent.ConcurrentHashMap`                   |
|    +7.6% | +397.179 KiB |        <0.1% | 5.13 MiB → 5.51 MiB | 14 → 16 | `intStream(Spliterator$OfInt, boolean)`                           | `java.util.stream.StreamSupport`                           |

##### Standard library

|  Change |        Delta |            % |                Size | Samples | Function                                                          | Location                                      |
| ------: | -----------: | -----------: | ------------------: | ------: | ----------------------------------------------------------------- | --------------------------------------------- |
| +429.2% | +123.302 MiB |  0.1% → 0.4% |  28.7 MiB → 152 MiB |   6 → 9 | `grow(int)`                                                       | `java.util.ArrayList`                         |
|  +62.9% |     +5.1 MiB |        <0.1% | 8.11 MiB → 13.2 MiB | 13 → 20 | `copyOf(Object[], int, Class)`                                    | `java.util.Arrays`                            |
|  +19.8% |   +1.324 MiB |        <0.1% |    6.68 MiB → 8 MiB | 19 → 22 | `valueOf(double)`                                                 | `java.lang.Double`                            |
|  +12.7% |   +1.279 MiB |        <0.1% | 10.1 MiB → 11.4 MiB | 20 → 23 | `copyOf(byte[], int)`                                             | `java.util.Arrays`                            |
| +229.3% | +967.484 KiB |        <0.1% |  422 KiB → 1.36 MiB |       1 | `fillInStackTrace(int)`                                           | `java.lang.Throwable`                         |
|  +89.1% |  +834.75 KiB |        <0.1% |  937 KiB → 1.73 MiB |       2 | `copyOfRangeByte(byte[], int, int)`                               | `java.util.Arrays`                            |
|     new | +790.343 KiB | 0.0% → <0.1% |       0 B → 790 KiB |   0 → 2 | `lookupKey(Object)`                                               | `jdk.internal.util.ReferencedKeyMap`          |
|     new | +666.656 KiB | 0.0% → <0.1% |       0 B → 667 KiB |   0 → 1 | `<init>(InputStream, int)`                                        | `java.util.jar.Manifest$FastInputStream`      |
| +148.3% | +574.781 KiB |        <0.1% |   388 KiB → 962 KiB |   1 → 3 | `builder(long, IntFunction)`                                      | `java.util.stream.Nodes`                      |
|  +14.9% | +534.218 KiB |        <0.1% | 3.49 MiB → 4.01 MiB |       9 | `<init>(InputStream, Inflater, int)`                              | `java.util.zip.InflaterInputStream`           |
|     new |   +490.5 KiB | 0.0% → <0.1% |       0 B → 491 KiB |   0 → 1 | `<init>(SymbolTable, int, String, String, String, String[], int)` | `jdk.internal.org.objectweb.asm.MethodWriter` |
| +111.2% | +431.046 KiB |        <0.1% |   388 KiB → 819 KiB |   1 → 2 | `putVal(Object, Object, boolean)`                                 | `java.util.concurrent.ConcurrentHashMap`      |
|   +7.6% | +397.179 KiB |        <0.1% | 5.13 MiB → 5.51 MiB | 14 → 16 | `intStream(Spliterator$OfInt, boolean)`                           | `java.util.stream.StreamSupport`              |
|     new | +392.414 KiB | 0.0% → <0.1% |       0 B → 392 KiB |   0 → 1 | `readLine()`                                                      | `java.util.Properties$LineReader`             |
|     new | +391.671 KiB | 0.0% → <0.1% |       0 B → 392 KiB |   0 → 1 | `createFileURLConnection(URL, File)`                              | `sun.net.www.protocol.file.Handler`           |
|     new | +387.679 KiB | 0.0% → <0.1% |       0 B → 388 KiB |   0 → 1 | `<clinit>()`                                                      | `sun.security.provider.SunEntries`            |
|     new | +280.429 KiB | 0.0% → <0.1% |       0 B → 280 KiB |   0 → 1 | `descriptorString()`                                              | `java.lang.Class`                             |
|  +36.3% | +208.437 KiB |        <0.1% |   575 KiB → 783 KiB |       2 | `range(int, int)`                                                 | `java.util.stream.IntStream`                  |
|   +1.8% |   +6.828 KiB |        <0.1% |   388 KiB → 395 KiB |       1 | `allocateUninitializedArray0(Class, int)`                         | `jdk.internal.misc.Unsafe`                    |
|   +1.7% |   +6.546 KiB |        <0.1% |   387 KiB → 394 KiB |       1 | `<init>(ClassWriter)`                                             | `jdk.internal.org.objectweb.asm.SymbolTable`  |

##### Ours

|   Change |        Delta |            % |                Size | Samples | Function                             | Location                                                   |
| -------: | -----------: | -----------: | ------------------: | ------: | ------------------------------------ | ---------------------------------------------------------- |
|   +24.5% | +262.761 MiB |  2.8% → 3.5% |  1.05 GiB → 1.3 GiB | 59 → 67 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +593.8% | +261.958 MiB |  0.1% → 0.8% |  44.1 MiB → 306 MiB |  2 → 12 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +158.9% |  +109.85 MiB |  0.2% → 0.5% |  69.1 MiB → 179 MiB |   4 → 5 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +1034.2% |  +90.949 MiB | <0.1% → 0.3% | 8.79 MiB → 99.7 MiB |   4 → 3 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +13.7% |   +1.208 MiB |        <0.1% |   8.84 MiB → 10 MiB |   9 → 4 | `merge(Map, Map)`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|   +80.0% |   +1.166 MiB |        <0.1% | 1.46 MiB → 2.62 MiB |   2 → 1 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|   +54.1% | +544.421 KiB |        <0.1% | 1006 KiB → 1.51 MiB |       4 | `lambda$generateData$4(int)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|      new | +388.656 KiB | 0.0% → <0.1% |       0 B → 389 KiB |   0 → 1 | `parse(String)`                      | `org.renaissance.core.Version`                             |
|      new | +276.367 KiB | 0.0% → <0.1% |       0 B → 276 KiB |   0 → 1 | `main(String[])`                     | `org.renaissance.harness.RenaissanceSuite`                 |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |        Delta |             % |                Size |       Samples | Function                                                                        | Location                                                   |
| ------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|   -2.4% | -871.915 MiB | 94.3% → 93.0% | 35.6 GiB → 34.7 GiB | 1,752 → 1,893 | `copyOf(Object[], int)`                                                         | `java.util.Arrays`                                         |
|  -89.1% | -127.712 MiB |  0.4% → <0.1% |  143 MiB → 15.6 MiB |        10 → 3 | `lambda$merge$6(List, List)`                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -39.5% |  -93.637 MiB |   0.6% → 0.4% |   237 MiB → 143 MiB |        10 → 5 | `newNode(int, Object, Object, HashMap$Node)`                                    | `java.util.HashMap`                                        |
|  -46.1% |  -89.487 MiB |   0.5% → 0.3% |   194 MiB → 105 MiB |             5 | `createSubtask(int, int)`                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -67.6% |  -28.623 MiB |  0.1% → <0.1% | 42.3 MiB → 13.7 MiB |         1 → 3 | `vectorSum()`                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -31.5% |  -27.669 MiB |          0.2% | 87.9 MiB → 60.2 MiB |        12 → 3 | `collectClusters(int[])`                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -61.9% |  -17.616 MiB |  0.1% → <0.1% | 28.4 MiB → 10.8 MiB |         5 → 1 | `resize()`                                                                      | `java.util.HashMap`                                        |
|  -32.1% |   -1.966 MiB |         <0.1% | 6.13 MiB → 4.16 MiB |       15 → 11 | `mapToObj(IntFunction, int)`                                                    | `java.util.stream.IntPipeline`                             |
| removed |   -1.844 MiB |  <0.1% → 0.0% |      1.84 MiB → 0 B |         1 → 0 | `computeClusterAverages()`                                                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| removed |   -1.343 MiB |  <0.1% → 0.0% |      1.34 MiB → 0 B |         1 → 0 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                                    |
| removed | -787.539 KiB |  <0.1% → 0.0% |       788 KiB → 0 B |         1 → 0 | `loadConvert(char[], int, int, StringBuilder)`                                  | `java.util.Properties`                                     |
|   -0.5% |  -753.89 KiB |          0.4% |   159 MiB → 158 MiB |             1 | `read(InputStream, String)`                                                     | `java.util.jar.Manifest`                                   |
|  -58.4% | -545.179 KiB |         <0.1% |   933 KiB → 388 KiB |         2 → 1 | `newLinkedHashMap(int)`                                                         | `java.util.LinkedHashMap`                                  |
|  -70.6% | -498.492 KiB |         <0.1% |   707 KiB → 208 KiB |         2 → 1 | `allocateInstance(Class)`                                                       | `jdk.internal.misc.Unsafe`                                 |
| removed | -490.539 KiB |  <0.1% → 0.0% |       491 KiB → 0 B |         1 → 0 | `classData(Object)`                                                             | `java.lang.invoke.InvokerBytecodeGenerator`                |
| removed |   -484.5 KiB |  <0.1% → 0.0% |       485 KiB → 0 B |         1 → 0 | `readNBytes(int)`                                                               | `java.io.InputStream`                                      |
| removed | -444.703 KiB |  <0.1% → 0.0% |       445 KiB → 0 B |         1 → 0 | `allocateUninitializedArray(Class, int)`                                        | `jdk.internal.misc.Unsafe`                                 |
| removed | -436.179 KiB |  <0.1% → 0.0% |       436 KiB → 0 B |         1 → 0 | `loadClass(String, boolean)`                                                    | `jdk.internal.loader.BuiltinClassLoader`                   |
| removed | -417.281 KiB |  <0.1% → 0.0% |       417 KiB → 0 B |         1 → 0 | `toString()`                                                                    | `java.lang.StringBuilder`                                  |
| removed | -401.507 KiB |  <0.1% → 0.0% |       402 KiB → 0 B |         1 → 0 | `addConstantMemberReference(int, String, String, String)`                       | `jdk.internal.org.objectweb.asm.SymbolTable`               |

##### Standard library

|  Change |        Delta |             % |                Size |       Samples | Function                                                                        | Location                                     |
| ------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------------------------------------- | -------------------------------------------- |
|   -2.4% | -871.915 MiB | 94.3% → 93.0% | 35.6 GiB → 34.7 GiB | 1,752 → 1,893 | `copyOf(Object[], int)`                                                         | `java.util.Arrays`                           |
|  -39.5% |  -93.637 MiB |   0.6% → 0.4% |   237 MiB → 143 MiB |        10 → 5 | `newNode(int, Object, Object, HashMap$Node)`                                    | `java.util.HashMap`                          |
|  -61.9% |  -17.616 MiB |  0.1% → <0.1% | 28.4 MiB → 10.8 MiB |         5 → 1 | `resize()`                                                                      | `java.util.HashMap`                          |
|  -32.1% |   -1.966 MiB |         <0.1% | 6.13 MiB → 4.16 MiB |       15 → 11 | `mapToObj(IntFunction, int)`                                                    | `java.util.stream.IntPipeline`               |
| removed |   -1.343 MiB |  <0.1% → 0.0% |      1.34 MiB → 0 B |         1 → 0 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                      |
| removed | -787.539 KiB |  <0.1% → 0.0% |       788 KiB → 0 B |         1 → 0 | `loadConvert(char[], int, int, StringBuilder)`                                  | `java.util.Properties`                       |
|   -0.5% |  -753.89 KiB |          0.4% |   159 MiB → 158 MiB |             1 | `read(InputStream, String)`                                                     | `java.util.jar.Manifest`                     |
|  -58.4% | -545.179 KiB |         <0.1% |   933 KiB → 388 KiB |         2 → 1 | `newLinkedHashMap(int)`                                                         | `java.util.LinkedHashMap`                    |
|  -70.6% | -498.492 KiB |         <0.1% |   707 KiB → 208 KiB |         2 → 1 | `allocateInstance(Class)`                                                       | `jdk.internal.misc.Unsafe`                   |
| removed | -490.539 KiB |  <0.1% → 0.0% |       491 KiB → 0 B |         1 → 0 | `classData(Object)`                                                             | `java.lang.invoke.InvokerBytecodeGenerator`  |
| removed |   -484.5 KiB |  <0.1% → 0.0% |       485 KiB → 0 B |         1 → 0 | `readNBytes(int)`                                                               | `java.io.InputStream`                        |
| removed | -444.703 KiB |  <0.1% → 0.0% |       445 KiB → 0 B |         1 → 0 | `allocateUninitializedArray(Class, int)`                                        | `jdk.internal.misc.Unsafe`                   |
| removed | -436.179 KiB |  <0.1% → 0.0% |       436 KiB → 0 B |         1 → 0 | `loadClass(String, boolean)`                                                    | `jdk.internal.loader.BuiltinClassLoader`     |
| removed | -417.281 KiB |  <0.1% → 0.0% |       417 KiB → 0 B |         1 → 0 | `toString()`                                                                    | `java.lang.StringBuilder`                    |
| removed | -401.507 KiB |  <0.1% → 0.0% |       402 KiB → 0 B |         1 → 0 | `addConstantMemberReference(int, String, String, String)`                       | `jdk.internal.org.objectweb.asm.SymbolTable` |
| removed | -394.906 KiB |  <0.1% → 0.0% |       395 KiB → 0 B |         1 → 0 | `entryFor(String)`                                                              | `java.util.jar.JarFile`                      |
| removed |  -394.14 KiB |  <0.1% → 0.0% |       394 KiB → 0 B |         1 → 0 | `enlarge(int)`                                                                  | `jdk.internal.org.objectweb.asm.ByteVector`  |
| removed |  -388.07 KiB |  <0.1% → 0.0% |       388 KiB → 0 B |         1 → 0 | `addConstantUtf8(String)`                                                       | `jdk.internal.org.objectweb.asm.SymbolTable` |
| removed | -387.671 KiB |  <0.1% → 0.0% |       388 KiB → 0 B |         1 → 0 | `addConstantNameAndType(String, String)`                                        | `jdk.internal.org.objectweb.asm.SymbolTable` |
| removed | -387.656 KiB |  <0.1% → 0.0% |       388 KiB → 0 B |         1 → 0 | `register(FileDescriptor)`                                                      | `java.io.FileCleanable`                      |

##### Ours

|  Change |        Delta |            % |                Size | Samples | Function                     | Location                                                   |
| ------: | -----------: | -----------: | ------------------: | ------: | ---------------------------- | ---------------------------------------------------------- |
|  -89.1% | -127.712 MiB | 0.4% → <0.1% |  143 MiB → 15.6 MiB |  10 → 3 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -46.1% |  -89.487 MiB |  0.5% → 0.3% |   194 MiB → 105 MiB |       5 | `createSubtask(int, int)`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -67.6% |  -28.623 MiB | 0.1% → <0.1% | 42.3 MiB → 13.7 MiB |   1 → 3 | `vectorSum()`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -31.5% |  -27.669 MiB |         0.2% | 87.9 MiB → 60.2 MiB |  12 → 3 | `collectClusters(int[])`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |   -1.844 MiB | <0.1% → 0.0% |      1.84 MiB → 0 B |   1 → 0 | `computeClusterAverages()`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|   Change |        Delta |             % |                Size |       Samples | Function                                             | Location                                                                              |
| -------: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------------------- | ------------------------------------------------------------------------------------- |
|   +11.3% | +788.583 MiB | 18.0% → 20.3% |  6.8 GiB → 7.57 GiB |     387 → 389 | `<init>(Collection)`                                 | `java.util.ArrayList`                                                                 |
|    +2.0% |  +710.86 MiB | 90.9% → 93.7% |   34.3 GiB → 35 GiB | 1,767 → 1,923 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                                                   |
|    +2.0% |  +710.86 MiB | 90.9% → 93.7% |   34.3 GiB → 35 GiB | 1,767 → 1,923 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                                           |
|   +24.5% | +262.761 MiB |   2.8% → 3.5% |  1.05 GiB → 1.3 GiB |       59 → 67 | `findNearestCentroid()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +593.8% | +261.958 MiB |   0.1% → 0.8% |  44.1 MiB → 306 MiB |        2 → 12 | `createSubtask(int, int)`                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|    +1.4% | +244.219 MiB | 45.6% → 46.8% | 17.2 GiB → 17.4 GiB |     859 → 909 | `toArray()`                                          | `java.util.ArrayList`                                                                 |
|    +0.6% | +230.906 MiB | 92.2% → 93.8% |   34.8 GiB → 35 GiB | 1,775 → 1,926 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                                                   |
|      new | +207.239 MiB |   0.0% → 0.5% |       0 B → 207 MiB |       0 → 119 | `invokeStatic(Object, Object)`                       | `java.lang.invoke.LambdaForm$DMH.0x000000d801001c00`                                  |
|      new | +207.239 MiB |   0.0% → 0.5% |       0 B → 207 MiB |       0 → 119 | `invoke(Object, Object, Object)`                     | `java.lang.invoke.LambdaForm$MH.0x000000d801082400`                                   |
|    +0.4% | +154.711 MiB | 93.3% → 94.7% | 35.2 GiB → 35.3 GiB | 1,794 → 1,938 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`                                         |
|  +158.9% |  +109.85 MiB |   0.2% → 0.5% |  69.1 MiB → 179 MiB |         4 → 5 | `add(double[], double[])`                            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  +158.9% |  +109.85 MiB |   0.2% → 0.5% |  69.1 MiB → 179 MiB |         4 → 5 | `combineResults(double[], double[])`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  +158.9% |  +109.85 MiB |   0.2% → 0.5% |  69.1 MiB → 179 MiB |         4 → 5 | `combineResults(Object, Object)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| +1034.2% |  +90.949 MiB |  <0.1% → 0.3% | 8.79 MiB → 99.7 MiB |         4 → 3 | `lambda$collectClusters$0(Double[])`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| +1034.2% |  +90.949 MiB |  <0.1% → 0.3% | 8.79 MiB → 99.7 MiB |         4 → 3 | `apply(Object)`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000d801204b38` |
|  +185.9% |  +73.494 MiB |   0.1% → 0.3% |  39.5 MiB → 113 MiB |        12 → 5 | `computeIfAbsent(Object, Function)`                  | `java.util.HashMap`                                                                   |
|    +0.5% |   +39.64 MiB | 19.0% → 19.3% | 7.18 GiB → 7.22 GiB |     239 → 238 | `lambda$run$0(int, List, int)`                       | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|    +0.5% |   +39.64 MiB | 19.0% → 19.3% | 7.18 GiB → 7.22 GiB |     239 → 238 | `call()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d8011ffbc0`                |
|    +0.5% |   +39.64 MiB | 19.0% → 19.3% | 7.18 GiB → 7.22 GiB |     239 → 238 | `exec()`                                             | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                                   |
|  +269.8% |  +18.012 MiB |  <0.1% → 0.1% | 6.68 MiB → 24.7 MiB |       19 → 68 | `apply(int)`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d8011a18d8`                |

##### Standard library

|  Change |        Delta |             % |                Size |       Samples | Function                                                         | Location                                             |
| ------: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------------------------------- | ---------------------------------------------------- |
|  +11.3% | +788.583 MiB | 18.0% → 20.3% |  6.8 GiB → 7.57 GiB |     387 → 389 | `<init>(Collection)`                                             | `java.util.ArrayList`                                |
|   +2.0% |  +710.86 MiB | 90.9% → 93.7% |   34.3 GiB → 35 GiB | 1,767 → 1,923 | `runWorker(ForkJoinPool$WorkQueue)`                              | `java.util.concurrent.ForkJoinPool`                  |
|   +2.0% |  +710.86 MiB | 90.9% → 93.7% |   34.3 GiB → 35 GiB | 1,767 → 1,923 | `run()`                                                          | `java.util.concurrent.ForkJoinWorkerThread`          |
|   +1.4% | +244.219 MiB | 45.6% → 46.8% | 17.2 GiB → 17.4 GiB |     859 → 909 | `toArray()`                                                      | `java.util.ArrayList`                                |
|   +0.6% | +230.906 MiB | 92.2% → 93.8% |   34.8 GiB → 35 GiB | 1,775 → 1,926 | `scan(ForkJoinPool$WorkQueue, int, int)`                         | `java.util.concurrent.ForkJoinPool`                  |
|     new | +207.239 MiB |   0.0% → 0.5% |       0 B → 207 MiB |       0 → 119 | `invokeStatic(Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x000000d801001c00` |
|     new | +207.239 MiB |   0.0% → 0.5% |       0 B → 207 MiB |       0 → 119 | `invoke(Object, Object, Object)`                                 | `java.lang.invoke.LambdaForm$MH.0x000000d801082400`  |
|   +0.4% | +154.711 MiB | 93.3% → 94.7% | 35.2 GiB → 35.3 GiB | 1,794 → 1,938 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`             | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
| +185.9% |  +73.494 MiB |   0.1% → 0.3% |  39.5 MiB → 113 MiB |        12 → 5 | `computeIfAbsent(Object, Function)`                              | `java.util.HashMap`                                  |
|   +0.5% |   +39.64 MiB | 19.0% → 19.3% | 7.18 GiB → 7.22 GiB |     239 → 238 | `exec()`                                                         | `java.util.concurrent.ForkJoinTask$AdaptedCallable`  |
|  +62.9% |     +5.1 MiB |         <0.1% | 8.11 MiB → 13.2 MiB |       13 → 20 | `copyOf(Object[], int, Class)`                                   | `java.util.Arrays`                                   |
|  +18.8% |    +2.22 MiB |         <0.1% |   11.8 MiB → 14 MiB |       34 → 38 | `evaluate(Spliterator, boolean, IntFunction)`                    | `java.util.stream.AbstractPipeline`                  |
|  +18.8% |    +2.22 MiB |         <0.1% |   11.8 MiB → 14 MiB |       34 → 38 | `evaluateToArrayNode(IntFunction)`                               | `java.util.stream.AbstractPipeline`                  |
|  +18.8% |    +2.22 MiB |         <0.1% |   11.8 MiB → 14 MiB |       34 → 38 | `toArray(IntFunction)`                                           | `java.util.stream.ReferencePipeline`                 |
| +347.1% |   +1.476 MiB |         <0.1% |   436 KiB → 1.9 MiB |         1 → 5 | `ensureCapacityInternal(int)`                                    | `java.lang.AbstractStringBuilder`                    |
| +347.1% |   +1.476 MiB |         <0.1% |   436 KiB → 1.9 MiB |         1 → 5 | `append(String)`                                                 | `java.lang.AbstractStringBuilder`                    |
| +347.1% |   +1.476 MiB |         <0.1% |   436 KiB → 1.9 MiB |         1 → 5 | `append(String)`                                                 | `java.lang.StringBuilder`                            |
|     new |   +1.436 MiB |  0.0% → <0.1% |      0 B → 1.44 MiB |         0 → 4 | `invokeExact_MT(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000d801004000`  |
|   +0.8% |   +1.355 MiB |          0.5% |   175 MiB → 177 MiB |       34 → 35 | `defineClass(String, Resource)`                                  | `java.net.URLClassLoader`                            |
|     new |   +1.343 MiB |  0.0% → <0.1% |      0 B → 1.34 MiB |         0 → 1 | `getPackageName()`                                               | `java.lang.Class`                                    |

##### Ours

|   Change |        Delta |             % |                Size |   Samples | Function                                         | Location                                                                              |
| -------: | -----------: | ------------: | ------------------: | --------: | ------------------------------------------------ | ------------------------------------------------------------------------------------- |
|   +24.5% | +262.761 MiB |   2.8% → 3.5% |  1.05 GiB → 1.3 GiB |   59 → 67 | `findNearestCentroid()`                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +593.8% | +261.958 MiB |   0.1% → 0.8% |  44.1 MiB → 306 MiB |    2 → 12 | `createSubtask(int, int)`                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +158.9% |  +109.85 MiB |   0.2% → 0.5% |  69.1 MiB → 179 MiB |     4 → 5 | `add(double[], double[])`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  +158.9% |  +109.85 MiB |   0.2% → 0.5% |  69.1 MiB → 179 MiB |     4 → 5 | `combineResults(double[], double[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  +158.9% |  +109.85 MiB |   0.2% → 0.5% |  69.1 MiB → 179 MiB |     4 → 5 | `combineResults(Object, Object)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| +1034.2% |  +90.949 MiB |  <0.1% → 0.3% | 8.79 MiB → 99.7 MiB |     4 → 3 | `lambda$collectClusters$0(Double[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| +1034.2% |  +90.949 MiB |  <0.1% → 0.3% | 8.79 MiB → 99.7 MiB |     4 → 3 | `apply(Object)`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000d801204b38` |
|    +0.5% |   +39.64 MiB | 19.0% → 19.3% | 7.18 GiB → 7.22 GiB | 239 → 238 | `lambda$run$0(int, List, int)`                   | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|    +0.5% |   +39.64 MiB | 19.0% → 19.3% | 7.18 GiB → 7.22 GiB | 239 → 238 | `call()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d8011ffbc0`                |
|  +269.8% |  +18.012 MiB |  <0.1% → 0.1% | 6.68 MiB → 24.7 MiB |   19 → 68 | `apply(int)`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d8011a18d8`                |
|   +19.8% |   +1.324 MiB |         <0.1% |    6.68 MiB → 8 MiB |   19 → 22 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|   +80.0% |   +1.166 MiB |         <0.1% | 1.46 MiB → 2.62 MiB |     2 → 1 | `createSubtask(int, int)`                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|    +3.0% | +753.859 KiB |          0.1% | 24.3 MiB → 25.1 MiB |   67 → 69 | `generateData(int, int, int)`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|    +3.0% | +753.859 KiB |          0.1% | 24.3 MiB → 25.1 MiB |   67 → 69 | `setUpBeforeAll(BenchmarkContext)`               | `org.renaissance.jdk.concurrent.FjKmeans`                                             |
|   +54.1% | +544.421 KiB |         <0.1% | 1006 KiB → 1.51 MiB |         4 | `apply(int)`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d8011a1d48`                |
|   +54.1% | +544.421 KiB |         <0.1% | 1006 KiB → 1.51 MiB |         4 | `lambda$generateData$4(int)`                     | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|    +0.2% |  +410.89 KiB |          0.5% |             207 MiB | 118 → 119 | `main(String[])`                                 | `org.renaissance.harness.RenaissanceSuite`                                            |
|    +0.2% | +403.609 KiB |          0.5% |             208 MiB | 121 → 122 | `launchHarnessClass(String, String[])`           | `org.renaissance.core.Launcher`                                                       |
|    +0.2% | +403.609 KiB |          0.5% |             208 MiB | 121 → 122 | `main(String[])`                                 | `org.renaissance.core.Launcher`                                                       |
|      new | +402.671 KiB |  0.0% → <0.1% |       0 B → 403 KiB |     0 → 1 | `nonArgs$1(List)`                                | `scopt.ORunner$`                                                                      |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

| Change |          Delta |             % |                Size |       Samples | Function                                                  | Location                                                               |
| -----: | -------------: | ------------: | ------------------: | ------------: | --------------------------------------------------------- | ---------------------------------------------------------------------- |
|  -7.4% |     -1.918 GiB | 68.9% → 64.4% |   26 GiB → 24.1 GiB | 1,271 → 1,349 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                                    |
|  -7.4% |     -1.918 GiB | 68.9% → 64.4% |   26 GiB → 24.1 GiB | 1,271 → 1,349 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                                    |
|  -7.3% |      -1.86 GiB | 68.0% → 63.7% | 25.6 GiB → 23.8 GiB | 1,257 → 1,328 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|  -4.1% | -1,014.907 MiB | 63.5% → 61.5% | 23.9 GiB → 22.9 GiB | 1,145 → 1,279 | `addAll(Collection)`                                      | `java.util.ArrayList`                                                  |
|  -5.2% |   -987.731 MiB | 48.8% → 46.7% | 18.4 GiB → 17.4 GiB |   912 → 1,013 | `grow(int)`                                               | `java.util.ArrayList`                                                  |
|  -2.4% |   -866.815 MiB | 94.3% → 93.0% | 35.6 GiB → 34.7 GiB | 1,765 → 1,913 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                                                     |
| -17.0% |   -736.171 MiB |  11.2% → 9.4% | 4.22 GiB → 3.51 GiB |     228 → 229 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                                    |
| -10.4% |   -517.187 MiB | 12.9% → 11.7% | 4.86 GiB → 4.35 GiB |     239 → 254 | `grow()`                                                  | `java.util.ArrayList`                                                  |
| -10.4% |   -517.187 MiB | 12.9% → 11.7% | 4.86 GiB → 4.35 GiB |     239 → 254 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                                                  |
| -10.4% |   -517.187 MiB | 12.9% → 11.7% | 4.86 GiB → 4.35 GiB |     239 → 254 | `add(Object)`                                             | `java.util.ArrayList`                                                  |
|  -9.2% |   -471.362 MiB | 13.2% → 12.1% | 4.98 GiB → 4.52 GiB |     262 → 261 | `collectClusters(int[])`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -1.4% |   -446.505 MiB | 82.5% → 82.2% | 31.1 GiB → 30.7 GiB | 1,558 → 1,679 | `merge(Map, Map)`                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -1.4% |   -446.505 MiB | 82.5% → 82.2% | 31.1 GiB → 30.7 GiB | 1,558 → 1,679 | `combineResults(Map, Map)`                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -1.4% |   -446.505 MiB | 82.5% → 82.2% | 31.1 GiB → 30.7 GiB | 1,558 → 1,679 | `combineResults(Object, Object)`                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -1.0% |   -402.086 MiB |         99.4% | 37.5 GiB → 37.1 GiB | 1,894 → 2,033 | `compute()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  -1.0% |   -402.086 MiB |         99.4% | 37.5 GiB → 37.1 GiB | 1,894 → 2,033 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                                   |
|  -1.0% |   -402.086 MiB |         99.4% | 37.5 GiB → 37.1 GiB | 1,894 → 2,033 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                                    |
|  -1.1% |   -354.037 MiB | 81.9% → 81.8% | 30.9 GiB → 30.5 GiB | 1,542 → 1,671 | `lambda$merge$6(List, List)`                              | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -1.1% |   -354.037 MiB | 81.9% → 81.8% | 30.9 GiB → 30.5 GiB | 1,542 → 1,671 | `apply(Object, Object)`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d801204fd0` |
|  -1.1% |   -354.037 MiB | 81.9% → 81.8% | 30.9 GiB → 30.5 GiB | 1,542 → 1,671 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                                                    |

##### Standard library

|  Change |          Delta |             % |                Size |       Samples | Function                                                  | Location                                             |
| ------: | -------------: | ------------: | ------------------: | ------------: | --------------------------------------------------------- | ---------------------------------------------------- |
|   -7.4% |     -1.918 GiB | 68.9% → 64.4% |   26 GiB → 24.1 GiB | 1,271 → 1,349 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                  |
|   -7.4% |     -1.918 GiB | 68.9% → 64.4% |   26 GiB → 24.1 GiB | 1,271 → 1,349 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                  |
|   -7.3% |      -1.86 GiB | 68.0% → 63.7% | 25.6 GiB → 23.8 GiB | 1,257 → 1,328 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|   -4.1% | -1,014.907 MiB | 63.5% → 61.5% | 23.9 GiB → 22.9 GiB | 1,145 → 1,279 | `addAll(Collection)`                                      | `java.util.ArrayList`                                |
|   -5.2% |   -987.731 MiB | 48.8% → 46.7% | 18.4 GiB → 17.4 GiB |   912 → 1,013 | `grow(int)`                                               | `java.util.ArrayList`                                |
|   -2.4% |   -866.815 MiB | 94.3% → 93.0% | 35.6 GiB → 34.7 GiB | 1,765 → 1,913 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                                   |
|  -17.0% |   -736.171 MiB |  11.2% → 9.4% | 4.22 GiB → 3.51 GiB |     228 → 229 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                  |
|  -10.4% |   -517.187 MiB | 12.9% → 11.7% | 4.86 GiB → 4.35 GiB |     239 → 254 | `grow()`                                                  | `java.util.ArrayList`                                |
|  -10.4% |   -517.187 MiB | 12.9% → 11.7% | 4.86 GiB → 4.35 GiB |     239 → 254 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                                |
|  -10.4% |   -517.187 MiB | 12.9% → 11.7% | 4.86 GiB → 4.35 GiB |     239 → 254 | `add(Object)`                                             | `java.util.ArrayList`                                |
|   -1.0% |   -402.086 MiB |         99.4% | 37.5 GiB → 37.1 GiB | 1,894 → 2,033 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                 |
|   -1.0% |   -402.086 MiB |         99.4% | 37.5 GiB → 37.1 GiB | 1,894 → 2,033 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                  |
|   -1.1% |   -354.037 MiB | 81.9% → 81.8% | 30.9 GiB → 30.5 GiB | 1,542 → 1,671 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                                  |
|   -1.1% |   -354.037 MiB | 81.9% → 81.8% | 30.9 GiB → 30.5 GiB | 1,542 → 1,671 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                                  |
|   -2.8% |   -215.069 MiB | 20.0% → 19.6% | 7.53 GiB → 7.32 GiB |     249 → 254 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                  |
| removed |   -206.838 MiB |   0.5% → 0.0% |       207 MiB → 0 B |       118 → 0 | `invokeStatic(Object, Object)`                            | `java.lang.invoke.LambdaForm$DMH.0x000000f801001c00` |
| removed |   -206.838 MiB |   0.5% → 0.0% |       207 MiB → 0 B |       118 → 0 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x000000f801082400`  |
|  -40.0% |    -93.799 MiB |   0.6% → 0.4% |   235 MiB → 141 MiB |         7 → 4 | `putVal(int, Object, Object, boolean, boolean)`           | `java.util.HashMap`                                  |
|  -39.9% |    -93.676 MiB |   0.6% → 0.4% |   235 MiB → 141 MiB |         7 → 4 | `putMapEntries(Map, boolean)`                             | `java.util.HashMap`                                  |
|  -39.9% |    -93.676 MiB |   0.6% → 0.4% |   235 MiB → 141 MiB |         7 → 4 | `<init>(Map)`                                             | `java.util.HashMap`                                  |

##### Ours

|  Change |        Delta |             % |                Size |       Samples | Function                            | Location                                                               |
| ------: | -----------: | ------------: | ------------------: | ------------: | ----------------------------------- | ---------------------------------------------------------------------- |
|   -9.2% | -471.362 MiB | 13.2% → 12.1% | 4.98 GiB → 4.52 GiB |     262 → 261 | `collectClusters(int[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -1.4% | -446.505 MiB | 82.5% → 82.2% | 31.1 GiB → 30.7 GiB | 1,558 → 1,679 | `merge(Map, Map)`                   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -1.4% | -446.505 MiB | 82.5% → 82.2% | 31.1 GiB → 30.7 GiB | 1,558 → 1,679 | `combineResults(Map, Map)`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -1.4% | -446.505 MiB | 82.5% → 82.2% | 31.1 GiB → 30.7 GiB | 1,558 → 1,679 | `combineResults(Object, Object)`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -1.0% | -402.086 MiB |         99.4% | 37.5 GiB → 37.1 GiB | 1,894 → 2,033 | `compute()`                         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|   -1.1% | -354.037 MiB | 81.9% → 81.8% | 30.9 GiB → 30.5 GiB | 1,542 → 1,671 | `lambda$merge$6(List, List)`        | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -1.1% | -354.037 MiB | 81.9% → 81.8% | 30.9 GiB → 30.5 GiB | 1,542 → 1,671 | `apply(Object, Object)`             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d801204fd0` |
|   -1.1% | -354.037 MiB | 81.9% → 81.8% | 30.9 GiB → 30.5 GiB | 1,542 → 1,671 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -1.1% | -354.037 MiB | 81.9% → 81.8% | 30.9 GiB → 30.5 GiB | 1,542 → 1,671 | `accept(Object, Object)`            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d801204d88` |
|   -3.4% | -208.601 MiB | 16.0% → 15.6% | 6.03 GiB → 5.82 GiB |     321 → 328 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -46.1% |  -89.487 MiB |   0.5% → 0.3% |   194 MiB → 105 MiB |             5 | `createSubtask(int, int)`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -67.6% |  -28.623 MiB |  0.1% → <0.1% | 42.3 MiB → 13.7 MiB |         1 → 3 | `vectorSum()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -67.6% |  -28.623 MiB |  0.1% → <0.1% | 42.3 MiB → 13.7 MiB |         1 → 3 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -28.2% |  -28.046 MiB |   0.3% → 0.2% | 99.3 MiB → 71.3 MiB |         5 → 7 | `computeClusterAverages()`          | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -28.2% |  -28.046 MiB |   0.3% → 0.2% | 99.3 MiB → 71.3 MiB |         5 → 7 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -26.9% |  -26.201 MiB |   0.3% → 0.2% | 97.5 MiB → 71.3 MiB |         4 → 7 | `average(List)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -67.1% |  -16.329 MiB |  0.1% → <0.1% |    24.3 MiB → 8 MiB |       67 → 22 | `apply(int)`                        | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d8011a1b10` |
|   -0.4% | -751.851 KiB |          0.4% |   165 MiB → 164 MiB |             6 | `run(BenchmarkContext)`             | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|   -0.4% | -751.851 KiB |          0.4% |   165 MiB → 164 MiB |             6 | `executeOperation(int)`             | `org.renaissance.harness.ExecutionDriver`                              |
| removed | -401.804 KiB |  <0.1% → 0.0% |       402 KiB → 0 B |         1 → 0 | `reads(Function1)`                  | `scopt.Read$`                                                          |

# Retained heap profile diff

Retained 2.31 MiB (+32 B, ~0%) over 8 objects → 9 objects (296 KiB → 263 KiB per object).

| Category         | Change | Delta |      % |     Size | Objects |
| ---------------- | -----: | ----: | -----: | -------: | ------: |
| Standard library |    ~0% | +32 B | 100.0% | 2.31 MiB |   7 → 8 |
| Ours             |   0.0% |   0 B |  <0.1% |     40 B |       1 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

##### Standard library

| Change | Delta |            % |       Size | Objects | Function                            | Location                                 |
| -----: | ----: | -----------: | ---------: | ------: | ----------------------------------- | ---------------------------------------- |
|    new | +64 B | 0.0% → <0.1% | 0 B → 64 B |   0 → 1 | `copyOfRangeByte(byte[], int, int)` | `java.util.Arrays`                       |
|    new | +32 B | 0.0% → <0.1% | 0 B → 32 B |   0 → 1 | `putVal(Object, Object, boolean)`   | `java.util.concurrent.ConcurrentHashMap` |
|    new | +24 B | 0.0% → <0.1% | 0 B → 24 B |   0 → 1 | `newString(byte[], int, int)`       | `java.lang.StringLatin1`                 |

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

##### Standard library

|  Change | Delta |            % |       Size | Objects | Function                                       | Location                  |
| ------: | ----: | -----------: | ---------: | ------: | ---------------------------------------------- | ------------------------- |
| removed | -64 B | <0.1% → 0.0% | 64 B → 0 B |   1 → 0 | `newLinkedHashMap(int)`                        | `java.util.LinkedHashMap` |
| removed | -24 B | <0.1% → 0.0% | 24 B → 0 B |   1 → 0 | `loadConvert(char[], int, int, StringBuilder)` | `java.util.Properties`    |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

| Change |      Delta |            % |           Size | Objects | Function                                                    | Location                                                 |
| -----: | ---------: | -----------: | -------------: | ------: | ----------------------------------------------------------- | -------------------------------------------------------- |
|    new | +2.061 MiB | 0.0% → 89.2% | 0 B → 2.06 MiB |   0 → 8 | `invokeStatic(Object, Object)`                              | `java.lang.invoke.LambdaForm$DMH.0x000000d801001c00`     |
|    new | +2.061 MiB | 0.0% → 89.2% | 0 B → 2.06 MiB |   0 → 8 | `invoke(Object, Object, Object)`                            | `java.lang.invoke.LambdaForm$MH.0x000000d801082400`      |
|    new |  +2.06 MiB | 0.0% → 89.2% | 0 B → 2.06 MiB |   0 → 1 | `accept(Object, Object)`                                    | `java.util.stream.Collectors$$Lambda.0x000000d8010c40c8` |
|    new |      +64 B | 0.0% → <0.1% |     0 B → 64 B |   0 → 1 | `copyOfRangeByte(byte[], int, int)`                         | `java.util.Arrays`                                       |
|    new |      +64 B | 0.0% → <0.1% |     0 B → 64 B |   0 → 1 | `copyOfRange(byte[], int, int)`                             | `java.util.Arrays`                                       |
|    new |      +64 B | 0.0% → <0.1% |     0 B → 64 B |   0 → 1 | `<init>(Charset, byte[], int, int)`                         | `java.lang.String`                                       |
|    new |      +64 B | 0.0% → <0.1% |     0 B → 64 B |   0 → 1 | `<init>(byte[], int, int, Charset)`                         | `java.lang.String`                                       |
|    new |      +64 B | 0.0% → <0.1% |     0 B → 64 B |   0 → 1 | `parseName(byte[], int)`                                    | `java.util.jar.Manifest`                                 |
|    ~0% |      +32 B |        10.8% |        256 KiB |   1 → 2 | `putVal(Object, Object, boolean)`                           | `java.util.concurrent.ConcurrentHashMap`                 |
| +50.0% |      +32 B |        <0.1% |    64 B → 96 B |   1 → 2 | `loadClass(String, boolean)`                                | `java.lang.ClassLoader`                                  |
| +50.0% |      +32 B |        <0.1% |    64 B → 96 B |   1 → 2 | `loadClass(String)`                                         | `java.lang.ClassLoader`                                  |
|    ~0% |      +32 B |        89.2% |       2.06 MiB |   7 → 8 | `main(String[])`                                            | `org.renaissance.harness.RenaissanceSuite`               |
|    ~0% |      +32 B |        89.2% |       2.06 MiB |   7 → 8 | `invokeExact_MT(Object, Object, Object, Object)`            | `java.lang.invoke.Invokers$Holder`                       |
|    ~0% |      +32 B |        89.2% |       2.06 MiB |   7 → 8 | `invokeImpl(Object, Object[])`                              | `jdk.internal.reflect.DirectMethodHandleAccessor`        |
|    ~0% |      +32 B |        89.2% |       2.06 MiB |   7 → 8 | `invoke(Object, Object[])`                                  | `jdk.internal.reflect.DirectMethodHandleAccessor`        |
|    ~0% |      +32 B |        89.2% |       2.06 MiB |   7 → 8 | `invoke(Object, Object[])`                                  | `java.lang.reflect.Method`                               |
|    ~0% |      +32 B |        89.2% |       2.06 MiB |   7 → 8 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`                          |
|    ~0% |      +32 B |        89.2% |       2.06 MiB |   7 → 8 | `launchHarnessClass(String, String[])`                      | `org.renaissance.core.Launcher`                          |
|    ~0% |      +32 B |        89.2% |       2.06 MiB |   7 → 8 | `main(String[])`                                            | `org.renaissance.core.Launcher`                          |
|    ~0% |      +32 B |        89.2% |       2.06 MiB |   6 → 7 | `main(String[])`                                            | `org.renaissance.harness.RenaissanceSuite$`              |

##### Standard library

| Change |      Delta |            % |           Size | Objects | Function                                         | Location                                                 |
| -----: | ---------: | -----------: | -------------: | ------: | ------------------------------------------------ | -------------------------------------------------------- |
|    new | +2.061 MiB | 0.0% → 89.2% | 0 B → 2.06 MiB |   0 → 8 | `invokeStatic(Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x000000d801001c00`     |
|    new | +2.061 MiB | 0.0% → 89.2% | 0 B → 2.06 MiB |   0 → 8 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000d801082400`      |
|    new |  +2.06 MiB | 0.0% → 89.2% | 0 B → 2.06 MiB |   0 → 1 | `accept(Object, Object)`                         | `java.util.stream.Collectors$$Lambda.0x000000d8010c40c8` |
|    new |      +64 B | 0.0% → <0.1% |     0 B → 64 B |   0 → 1 | `copyOfRangeByte(byte[], int, int)`              | `java.util.Arrays`                                       |
|    new |      +64 B | 0.0% → <0.1% |     0 B → 64 B |   0 → 1 | `copyOfRange(byte[], int, int)`                  | `java.util.Arrays`                                       |
|    new |      +64 B | 0.0% → <0.1% |     0 B → 64 B |   0 → 1 | `<init>(Charset, byte[], int, int)`              | `java.lang.String`                                       |
|    new |      +64 B | 0.0% → <0.1% |     0 B → 64 B |   0 → 1 | `<init>(byte[], int, int, Charset)`              | `java.lang.String`                                       |
|    new |      +64 B | 0.0% → <0.1% |     0 B → 64 B |   0 → 1 | `parseName(byte[], int)`                         | `java.util.jar.Manifest`                                 |
|    ~0% |      +32 B |        10.8% |        256 KiB |   1 → 2 | `putVal(Object, Object, boolean)`                | `java.util.concurrent.ConcurrentHashMap`                 |
| +50.0% |      +32 B |        <0.1% |    64 B → 96 B |   1 → 2 | `loadClass(String, boolean)`                     | `java.lang.ClassLoader`                                  |
| +50.0% |      +32 B |        <0.1% |    64 B → 96 B |   1 → 2 | `loadClass(String)`                              | `java.lang.ClassLoader`                                  |
|    ~0% |      +32 B |        89.2% |       2.06 MiB |   7 → 8 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                       |
|    ~0% |      +32 B |        89.2% |       2.06 MiB |   7 → 8 | `invokeImpl(Object, Object[])`                   | `jdk.internal.reflect.DirectMethodHandleAccessor`        |
|    ~0% |      +32 B |        89.2% |       2.06 MiB |   7 → 8 | `invoke(Object, Object[])`                       | `jdk.internal.reflect.DirectMethodHandleAccessor`        |
|    ~0% |      +32 B |        89.2% |       2.06 MiB |   7 → 8 | `invoke(Object, Object[])`                       | `java.lang.reflect.Method`                               |
|    new |      +32 B | 0.0% → <0.1% |     0 B → 32 B |   0 → 1 | `putIfAbsent(Object, Object)`                    | `java.util.concurrent.ConcurrentHashMap`                 |
|    new |      +32 B | 0.0% → <0.1% |     0 B → 32 B |   0 → 1 | `getClassLoadingLock(String)`                    | `java.lang.ClassLoader`                                  |
|    new |      +32 B | 0.0% → <0.1% |     0 B → 32 B |   0 → 1 | `loadClassOrNull(String, boolean)`               | `jdk.internal.loader.BuiltinClassLoader`                 |
|    new |      +32 B | 0.0% → <0.1% |     0 B → 32 B |   0 → 1 | `loadClass(String, boolean)`                     | `jdk.internal.loader.BuiltinClassLoader`                 |
|    new |      +32 B | 0.0% → <0.1% |     0 B → 32 B |   0 → 1 | `loadClass(String, boolean)`                     | `jdk.internal.loader.ClassLoaders$AppClassLoader`        |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

|  Change |     Delta |             % |            Size | Objects | Function                                       | Location                                                 |
| ------: | --------: | ------------: | --------------: | ------: | ---------------------------------------------- | -------------------------------------------------------- |
| removed | -2.06 MiB |  89.2% → 0.0% |  2.06 MiB → 0 B |   7 → 0 | `invokeStatic(Object, Object)`                 | `java.lang.invoke.LambdaForm$DMH.0x000000f801001c00`     |
| removed | -2.06 MiB |  89.2% → 0.0% |  2.06 MiB → 0 B |   7 → 0 | `invoke(Object, Object, Object)`               | `java.lang.invoke.LambdaForm$MH.0x000000f801082400`      |
| -100.0% | -2.06 MiB | 89.2% → <0.1% | 2.06 MiB → 24 B |       1 | `accept(Object, Object)`                       | `java.util.stream.Collectors$$Lambda.0x000000d80100c230` |
| removed |     -64 B |  <0.1% → 0.0% |      64 B → 0 B |   1 → 0 | `newLinkedHashMap(int)`                        | `java.util.LinkedHashMap`                                |
| removed |     -64 B |  <0.1% → 0.0% |      64 B → 0 B |   1 → 0 | `<init>(int)`                                  | `java.util.jar.Attributes`                               |
| removed |     -24 B |  <0.1% → 0.0% |      24 B → 0 B |   1 → 0 | `loadConvert(char[], int, int, StringBuilder)` | `java.util.Properties`                                   |
| removed |     -24 B |  <0.1% → 0.0% |      24 B → 0 B |   1 → 0 | `load0(Properties$LineReader)`                 | `java.util.Properties`                                   |
| removed |     -24 B |  <0.1% → 0.0% |      24 B → 0 B |   1 → 0 | `load(InputStream)`                            | `java.util.Properties`                                   |
| removed |     -24 B |  <0.1% → 0.0% |      24 B → 0 B |   1 → 0 | `loadProperties(URL)`                          | `org.renaissance.core.ResourceUtils`                     |
| removed |     -24 B |  <0.1% → 0.0% |      24 B → 0 B |   1 → 0 | `loadPropertiesAsMap(URL)`                     | `org.renaissance.core.ResourceUtils`                     |

##### Standard library

|  Change |     Delta |             % |            Size | Objects | Function                                       | Location                                                 |
| ------: | --------: | ------------: | --------------: | ------: | ---------------------------------------------- | -------------------------------------------------------- |
| removed | -2.06 MiB |  89.2% → 0.0% |  2.06 MiB → 0 B |   7 → 0 | `invokeStatic(Object, Object)`                 | `java.lang.invoke.LambdaForm$DMH.0x000000f801001c00`     |
| removed | -2.06 MiB |  89.2% → 0.0% |  2.06 MiB → 0 B |   7 → 0 | `invoke(Object, Object, Object)`               | `java.lang.invoke.LambdaForm$MH.0x000000f801082400`      |
| -100.0% | -2.06 MiB | 89.2% → <0.1% | 2.06 MiB → 24 B |       1 | `accept(Object, Object)`                       | `java.util.stream.Collectors$$Lambda.0x000000d80100c230` |
| removed |     -64 B |  <0.1% → 0.0% |      64 B → 0 B |   1 → 0 | `newLinkedHashMap(int)`                        | `java.util.LinkedHashMap`                                |
| removed |     -64 B |  <0.1% → 0.0% |      64 B → 0 B |   1 → 0 | `<init>(int)`                                  | `java.util.jar.Attributes`                               |
| removed |     -24 B |  <0.1% → 0.0% |      24 B → 0 B |   1 → 0 | `loadConvert(char[], int, int, StringBuilder)` | `java.util.Properties`                                   |
| removed |     -24 B |  <0.1% → 0.0% |      24 B → 0 B |   1 → 0 | `load0(Properties$LineReader)`                 | `java.util.Properties`                                   |
| removed |     -24 B |  <0.1% → 0.0% |      24 B → 0 B |   1 → 0 | `load(InputStream)`                            | `java.util.Properties`                                   |

# Lock contention profile diff

Blocked 7.87s → 7.88s (+3.69ms, ~0%) over 77 contentions → 63 contentions (102.3ms → 125.1ms per contention).

| Category         | Change |   Delta |      % |          Time | Contentions |
| ---------------- | -----: | ------: | -----: | ------------: | ----------: |
| Standard library |    ~0% | +3.69ms | 100.0% | 7.87s → 7.88s |     77 → 63 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time blocked directly in the function body, excluding callees.

##### Standard library

| Change |   Delta |      % |          Time | Contentions | Function              | Location                   |
| -----: | ------: | -----: | ------------: | ----------: | --------------------- | -------------------------- |
|    ~0% | +3.69ms | 100.0% | 7.87s → 7.88s |     77 → 63 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

| Change |     Delta |             % |          Time | Contentions | Function                                                                                                               | Location                                                               |
| -----: | --------: | ------------: | ------------: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|    new |   +6.604s |  0.0% → 83.8% |   0ms → 6.60s |      0 → 16 | `invokeStatic(Object, Object)`                                                                                         | `java.lang.invoke.LambdaForm$DMH.0x000000d801001c00`                   |
|    new |   +6.604s |  0.0% → 83.8% |   0ms → 6.60s |      0 → 16 | `invoke(Object, Object, Object)`                                                                                       | `java.lang.invoke.LambdaForm$MH.0x000000d801082400`                    |
|  +5.5% | +344.25ms | 79.5% → 83.8% | 6.26s → 6.60s |          16 | `get()`                                                                                                                | `java.util.concurrent.ForkJoinTask`                                    |
|  +5.5% | +344.25ms | 79.5% → 83.8% | 6.26s → 6.60s |          16 | `run(int, List, int)`                                                                                                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +5.5% | +344.25ms | 79.5% → 83.8% | 6.26s → 6.60s |          16 | `$anonfun$1(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  +5.5% | +344.25ms | 79.5% → 83.8% | 6.26s → 6.60s |          16 | `$anonfun$adapted$1(Object)`                                                                                           | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  +5.5% | +344.25ms | 79.5% → 83.8% | 6.26s → 6.60s |          16 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000d8011f6c70`   |
|  +5.5% | +344.25ms | 79.5% → 83.8% | 6.26s → 6.60s |          16 | `map(Function1)`                                                                                                       | `scala.collection.immutable.Range`                                     |
|  +5.5% | +344.25ms | 79.5% → 83.8% | 6.26s → 6.60s |          16 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  +5.5% | +344.25ms | 79.5% → 83.8% | 6.26s → 6.60s |          16 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |
|  +5.5% | +344.25ms | 79.5% → 83.8% | 6.26s → 6.60s |          16 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|  +5.5% | +344.25ms | 79.5% → 83.8% | 6.26s → 6.60s |          16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +5.5% | +344.25ms | 79.5% → 83.8% | 6.26s → 6.60s |          16 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000d801198798` |
|  +5.5% | +344.25ms | 79.5% → 83.8% | 6.26s → 6.60s |          16 | `apply(Object)`                                                                                                        | `scala.runtime.function.JProcedure1`                                   |
|  +5.5% | +344.25ms | 79.5% → 83.8% | 6.26s → 6.60s |          16 | `foreach(Function1)`                                                                                                   | `scala.collection.immutable.List`                                      |
|  +5.5% | +344.25ms | 79.5% → 83.8% | 6.26s → 6.60s |          16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +5.5% | +344.25ms | 79.5% → 83.8% | 6.26s → 6.60s |          16 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +5.5% | +344.25ms | 79.5% → 83.8% | 6.26s → 6.60s |          16 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|  +5.5% | +344.25ms | 79.5% → 83.8% | 6.26s → 6.60s |          16 | `invokeExact_MT(Object, Object, Object, Object)`                                                                       | `java.lang.invoke.Invokers$Holder`                                     |
|  +5.5% | +344.25ms | 79.5% → 83.8% | 6.26s → 6.60s |          16 | `invokeImpl(Object, Object[])`                                                                                         | `jdk.internal.reflect.DirectMethodHandleAccessor`                      |

##### Standard library

| Change |     Delta |             % |          Time | Contentions | Function                                         | Location                                             |
| -----: | --------: | ------------: | ------------: | ----------: | ------------------------------------------------ | ---------------------------------------------------- |
|    new |   +6.604s |  0.0% → 83.8% |   0ms → 6.60s |      0 → 16 | `invokeStatic(Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x000000d801001c00` |
|    new |   +6.604s |  0.0% → 83.8% |   0ms → 6.60s |      0 → 16 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000d801082400`  |
|  +5.5% | +344.25ms | 79.5% → 83.8% | 6.26s → 6.60s |          16 | `get()`                                          | `java.util.concurrent.ForkJoinTask`                  |
|  +5.5% | +344.25ms | 79.5% → 83.8% | 6.26s → 6.60s |          16 | `map(Function1)`                                 | `scala.collection.immutable.Range`                   |
|  +5.5% | +344.25ms | 79.5% → 83.8% | 6.26s → 6.60s |          16 | `apply(Object)`                                  | `scala.runtime.function.JProcedure1`                 |
|  +5.5% | +344.25ms | 79.5% → 83.8% | 6.26s → 6.60s |          16 | `foreach(Function1)`                             | `scala.collection.immutable.List`                    |
|  +5.5% | +344.25ms | 79.5% → 83.8% | 6.26s → 6.60s |          16 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                   |
|  +5.5% | +344.25ms | 79.5% → 83.8% | 6.26s → 6.60s |          16 | `invokeImpl(Object, Object[])`                   | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +5.5% | +344.25ms | 79.5% → 83.8% | 6.26s → 6.60s |          16 | `invoke(Object, Object[])`                       | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +5.5% | +344.25ms | 79.5% → 83.8% | 6.26s → 6.60s |          16 | `invoke(Object, Object[])`                       | `java.lang.reflect.Method`                           |
|  +4.9% | +307.08ms | 80.2% → 84.1% | 6.31s → 6.62s |     19 → 17 | `awaitDone(int, long)`                           | `java.util.concurrent.ForkJoinTask`                  |
|  +1.6% | +116.27ms | 95.0% → 96.4% | 7.47s → 7.59s |     64 → 53 | `park()`                                         | `java.util.concurrent.locks.LockSupport`             |
|    ~0% |   +3.69ms |        100.0% | 7.87s → 7.88s |     77 → 63 | `park(boolean, long)`                            | `jdk.internal.misc.Unsafe`                           |

#### Improvements

Functions with the largest decrease in total time blocked in the function and all its callees.

|  Change |     Delta |             % |              Time | Contentions | Function                                             | Location                                                               |
| ------: | --------: | ------------: | ----------------: | ----------: | ---------------------------------------------------- | ---------------------------------------------------------------------- |
| removed |   -6.260s |  79.5% → 0.0% |       6.26s → 0ms |      16 → 0 | `invokeStatic(Object, Object)`                       | `java.lang.invoke.LambdaForm$DMH.0x000000f801001c00`                   |
| removed |   -6.260s |  79.5% → 0.0% |       6.26s → 0ms |      16 → 0 | `invoke(Object, Object, Object)`                     | `java.lang.invoke.LambdaForm$MH.0x000000f801082400`                    |
|  -21.1% | -340.56ms | 20.5% → 16.2% |     1.61s → 1.27s |     61 → 47 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                                    |
|  -21.1% | -340.56ms | 20.5% → 16.2% |     1.61s → 1.27s |     61 → 47 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                            |
|  -19.5% | -303.39ms | 19.8% → 15.9% |     1.55s → 1.25s |     58 → 46 | `awaitWork(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                                    |
|  -28.3% | -112.59ms |   5.0% → 3.6% | 397.5ms → 284.9ms |     13 → 10 | `parkUntil(long)`                                    | `java.util.concurrent.locks.LockSupport`                               |
| removed |  -38.50ms |   0.5% → 0.0% |      38.5ms → 0ms |       2 → 0 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|  -64.4% |  -37.17ms |   0.7% → 0.3% |   57.7ms → 20.6ms |       3 → 1 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                                    |
|  -64.4% |  -37.17ms |   0.7% → 0.3% |   57.7ms → 20.6ms |       3 → 1 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  -64.4% |  -37.17ms |   0.7% → 0.3% |   57.7ms → 20.6ms |       3 → 1 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                                   |
|  -64.4% |  -37.17ms |   0.7% → 0.3% |   57.7ms → 20.6ms |       3 → 1 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                                    |
|  -64.4% |  -37.17ms |   0.7% → 0.3% |   57.7ms → 20.6ms |       3 → 1 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|  -64.4% |  -37.17ms |   0.7% → 0.3% |   57.7ms → 20.6ms |       3 → 1 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                                    |
| removed |  -19.20ms |   0.2% → 0.0% |      19.2ms → 0ms |       1 → 0 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                                    |
| removed |  -19.20ms |   0.2% → 0.0% |      19.2ms → 0ms |       1 → 0 | `lambda$run$0(int, List, int)`                       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed |  -19.20ms |   0.2% → 0.0% |      19.2ms → 0ms |       1 → 0 | `call()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011ffbc0` |
| removed |  -19.20ms |   0.2% → 0.0% |      19.2ms → 0ms |       1 → 0 | `exec()`                                             | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                    |

##### Standard library

|  Change |     Delta |             % |              Time | Contentions | Function                                             | Location                                             |
| ------: | --------: | ------------: | ----------------: | ----------: | ---------------------------------------------------- | ---------------------------------------------------- |
| removed |   -6.260s |  79.5% → 0.0% |       6.26s → 0ms |      16 → 0 | `invokeStatic(Object, Object)`                       | `java.lang.invoke.LambdaForm$DMH.0x000000f801001c00` |
| removed |   -6.260s |  79.5% → 0.0% |       6.26s → 0ms |      16 → 0 | `invoke(Object, Object, Object)`                     | `java.lang.invoke.LambdaForm$MH.0x000000f801082400`  |
|  -21.1% | -340.56ms | 20.5% → 16.2% |     1.61s → 1.27s |     61 → 47 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                  |
|  -21.1% | -340.56ms | 20.5% → 16.2% |     1.61s → 1.27s |     61 → 47 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`          |
|  -19.5% | -303.39ms | 19.8% → 15.9% |     1.55s → 1.25s |     58 → 46 | `awaitWork(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                  |
|  -28.3% | -112.59ms |   5.0% → 3.6% | 397.5ms → 284.9ms |     13 → 10 | `parkUntil(long)`                                    | `java.util.concurrent.locks.LockSupport`             |
| removed |  -38.50ms |   0.5% → 0.0% |      38.5ms → 0ms |       2 → 0 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|  -64.4% |  -37.17ms |   0.7% → 0.3% |   57.7ms → 20.6ms |       3 → 1 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                  |
|  -64.4% |  -37.17ms |   0.7% → 0.3% |   57.7ms → 20.6ms |       3 → 1 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                 |
|  -64.4% |  -37.17ms |   0.7% → 0.3% |   57.7ms → 20.6ms |       3 → 1 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                  |
|  -64.4% |  -37.17ms |   0.7% → 0.3% |   57.7ms → 20.6ms |       3 → 1 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|  -64.4% |  -37.17ms |   0.7% → 0.3% |   57.7ms → 20.6ms |       3 → 1 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                  |
| removed |  -19.20ms |   0.2% → 0.0% |      19.2ms → 0ms |       1 → 0 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                  |
| removed |  -19.20ms |   0.2% → 0.0% |      19.2ms → 0ms |       1 → 0 | `exec()`                                             | `java.util.concurrent.ForkJoinTask$AdaptedCallable`  |

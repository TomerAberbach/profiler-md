# Sampling profile diff

Collected 1,529 samples → 1,153 samples (-376 samples, -24.6%).

| Category         | Change | Delta |             % |       Samples |
| ---------------- | -----: | ----: | ------------: | ------------: |
| Ours             | -28.9% |  -409 | 92.4% → 87.1% | 1,413 → 1,004 |
| Standard library | +28.4% |   +33 |  7.6% → 12.9% |     116 → 149 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                                      | Location                                                   |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------- | ---------------------------------------------------------- |
|  +51.2% |   +21 | 2.7% → 5.4% | 41 → 62 | `computeIfAbsent(Object, Function)`                           | `java.util.HashMap`                                        |
| +190.0% |   +19 | 0.7% → 2.5% | 10 → 29 | `vectorSum()`                                                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +85.7% |    +6 | 0.5% → 1.1% |  7 → 13 | `grow(int)`                                                   | `java.util.ArrayList`                                      |
|  +66.7% |    +6 | 0.6% → 1.3% |  9 → 15 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`     | `java.util.concurrent.ForkJoinPool`                        |
| +300.0% |    +6 | 0.1% → 0.7% |   2 → 8 | `merge(Object, Object, BiFunction)`                           | `java.util.HashMap`                                        |
|     new |    +3 | 0.0% → 0.3% |   0 → 3 | `compute()`                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `doExec()`                                                    | `java.util.concurrent.ForkJoinTask`                        |
| +200.0% |    +2 | 0.1% → 0.3% |   1 → 3 | `runWorker(ForkJoinPool$WorkQueue)`                           | `java.util.concurrent.ForkJoinPool`                        |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `park(boolean, long)`                                         | `jdk.internal.misc.Unsafe`                                 |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `<init>(HashMap)`                                             | `java.util.HashMap$HashIterator`                           |
|  +33.3% |    +1 | 0.2% → 0.3% |   3 → 4 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater`                                   |
|  +50.0% |    +1 | 0.1% → 0.3% |   2 → 3 | `accept(Object)`                                              | `java.util.stream.ReduceOps$3ReducingSink`                 |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `copyInto(Sink, Spliterator)`                                 | `java.util.stream.AbstractPipeline`                        |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `wrapSink(Sink)`                                              | `java.util.stream.AbstractPipeline`                        |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `add(Object)`                                                 | `java.util.Collections$SetFromMap`                         |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `setLength(int)`                                              | `java.lang.StringBuilder`                                  |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `indexOf(byte[], int, int, int)`                              | `java.lang.StringLatin1`                                   |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `<init>(long, IntFunction)`                                   | `java.util.stream.Nodes$ArrayNode`                         |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `createSubtask(int, int)`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `unpark(Object)`                                              | `jdk.internal.misc.Unsafe`                                 |

##### Ours

|  Change | Delta |           % | Samples | Function                  | Location                                                   |
| ------: | ----: | ----------: | ------: | ------------------------- | ---------------------------------------------------------- |
| +190.0% |   +19 | 0.7% → 2.5% | 10 → 29 | `vectorSum()`             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|     new |    +3 | 0.0% → 0.3% |   0 → 3 | `compute()`               | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `createSubtask(int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                      | Location                                   |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------- | ------------------------------------------ |
|  +51.2% |   +21 | 2.7% → 5.4% | 41 → 62 | `computeIfAbsent(Object, Function)`                           | `java.util.HashMap`                        |
|  +85.7% |    +6 | 0.5% → 1.1% |  7 → 13 | `grow(int)`                                                   | `java.util.ArrayList`                      |
|  +66.7% |    +6 | 0.6% → 1.3% |  9 → 15 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`     | `java.util.concurrent.ForkJoinPool`        |
| +300.0% |    +6 | 0.1% → 0.7% |   2 → 8 | `merge(Object, Object, BiFunction)`                           | `java.util.HashMap`                        |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `doExec()`                                                    | `java.util.concurrent.ForkJoinTask`        |
| +200.0% |    +2 | 0.1% → 0.3% |   1 → 3 | `runWorker(ForkJoinPool$WorkQueue)`                           | `java.util.concurrent.ForkJoinPool`        |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `park(boolean, long)`                                         | `jdk.internal.misc.Unsafe`                 |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `<init>(HashMap)`                                             | `java.util.HashMap$HashIterator`           |
|  +33.3% |    +1 | 0.2% → 0.3% |   3 → 4 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater`                   |
|  +50.0% |    +1 | 0.1% → 0.3% |   2 → 3 | `accept(Object)`                                              | `java.util.stream.ReduceOps$3ReducingSink` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `copyInto(Sink, Spliterator)`                                 | `java.util.stream.AbstractPipeline`        |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `wrapSink(Sink)`                                              | `java.util.stream.AbstractPipeline`        |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `add(Object)`                                                 | `java.util.Collections$SetFromMap`         |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `setLength(int)`                                              | `java.lang.StringBuilder`                  |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `indexOf(byte[], int, int, int)`                              | `java.lang.StringLatin1`                   |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `<init>(long, IntFunction)`                                   | `java.util.stream.Nodes$ArrayNode`         |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `unpark(Object)`                                              | `jdk.internal.misc.Unsafe`                 |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                                             | Location                                                                              |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------- | ------------------------------------------------------------------------------------- |
|  -35.2% |  -235 | 43.7% → 37.6% | 668 → 433 | `accumulate(Double[], double[])`                     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  -30.7% |  -123 | 26.2% → 24.1% | 401 → 278 | `distance(Double[], Double[])`                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -23.1% |   -21 |   6.0% → 6.1% |   91 → 70 | `collectClusters(int[])`                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   -9.9% |   -19 | 12.6% → 15.0% | 192 → 173 | `findNearestCentroid()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| removed |   -18 |   1.2% → 0.0% |    18 → 0 | `apply(Object)`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000000501204b38` |
|  -38.5% |   -10 |   1.7% → 1.4% |   26 → 16 | `computeDirectly()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -24.1% |    -7 |          1.9% |   29 → 22 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                                                    |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`                                         |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `nextNode()`                                         | `java.util.HashMap$HashIterator`                                                      |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `merge(Map, Map)`                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `add(double[], double[])`                            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `push(ForkJoinTask, ForkJoinPool, boolean)`          | `java.util.concurrent.ForkJoinPool$WorkQueue`                                         |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `readLine()`                                         | `java.util.Properties$LineReader`                                                     |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `getZipEntry(String, int)`                           | `java.util.zip.ZipFile`                                                               |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                                                   |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `checkIndex(int, int)`                               | `java.util.Objects`                                                                   |
|  -50.0% |    -1 |          0.1% |     2 → 1 | `awaitWork(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                                                   |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `spliterator(double[], int, int, int)`               | `java.util.Spliterators`                                                              |
|  -50.0% |    -1 |          0.1% |     2 → 1 | `putVal(int, Object, Object, boolean, boolean)`      | `java.util.HashMap`                                                                   |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `createSubtask(int, int)`                            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |

##### Ours

|  Change | Delta |             % |   Samples | Function                            | Location                                                                              |
| ------: | ----: | ------------: | --------: | ----------------------------------- | ------------------------------------------------------------------------------------- |
|  -35.2% |  -235 | 43.7% → 37.6% | 668 → 433 | `accumulate(Double[], double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  -30.7% |  -123 | 26.2% → 24.1% | 401 → 278 | `distance(Double[], Double[])`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -23.1% |   -21 |   6.0% → 6.1% |   91 → 70 | `collectClusters(int[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   -9.9% |   -19 | 12.6% → 15.0% | 192 → 173 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| removed |   -18 |   1.2% → 0.0% |    18 → 0 | `apply(Object)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000000501204b38` |
|  -38.5% |   -10 |   1.7% → 1.4% |   26 → 16 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `merge(Map, Map)`                   | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `add(double[], double[])`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `createSubtask(int, int)`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  -50.0% |    -1 |          0.1% |     2 → 1 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |

##### Standard library

|  Change | Delta |           % | Samples | Function                                             | Location                                      |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------- | --------------------------------------------- |
|  -24.1% |    -7 |        1.9% | 29 → 22 | `copyOf(Object[], int)`                              | `java.util.Arrays`                            |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `nextNode()`                                         | `java.util.HashMap$HashIterator`              |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `push(ForkJoinTask, ForkJoinPool, boolean)`          | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `readLine()`                                         | `java.util.Properties$LineReader`             |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `getZipEntry(String, int)`                           | `java.util.zip.ZipFile`                       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `join()`                                             | `java.util.concurrent.ForkJoinTask`           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `checkIndex(int, int)`                               | `java.util.Objects`                           |
|  -50.0% |    -1 |        0.1% |   2 → 1 | `awaitWork(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `spliterator(double[], int, int, int)`               | `java.util.Spliterators`                      |
|  -50.0% |    -1 |        0.1% |   2 → 1 | `putVal(int, Object, Object, boolean, boolean)`      | `java.util.HashMap`                           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `signalWaiters()`                                    | `java.util.concurrent.ForkJoinTask`           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `unpark(Thread)`                                     | `java.util.concurrent.locks.LockSupport`      |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `values()`                                           | `java.util.HashMap`                           |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |           % | Samples | Function                                                                                                               | Location                                                               |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|     new |    +8 | 0.0% → 0.7% |   0 → 8 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +31.8% |    +7 | 1.4% → 2.5% | 22 → 29 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +31.8% |    +7 | 1.4% → 2.5% | 22 → 29 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c80121df70` |
|  +25.0% |    +5 | 1.3% → 2.2% | 20 → 25 | `exec()`                                                                                                               | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                    |
| +125.0% |    +5 | 0.3% → 0.8% |   4 → 9 | `merge(Object, Object, BiFunction)`                                                                                    | `java.util.HashMap`                                                    |
|  +44.4% |    +4 | 0.6% → 1.1% |  9 → 13 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
|  +50.0% |    +4 | 0.5% → 1.0% |  8 → 12 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|  +50.0% |    +4 | 0.5% → 1.0% |  8 → 12 | `invokeStatic(Object, Object)`                                                                                         | `java.lang.invoke.LambdaForm$DMH.0x000000c801001c00`                   |
|  +50.0% |    +4 | 0.5% → 1.0% |  8 → 12 | `invoke(Object, Object, Object)`                                                                                       | `java.lang.invoke.LambdaForm$MH.0x000000c801082400`                    |
|  +50.0% |    +4 | 0.5% → 1.0% |  8 → 12 | `invokeExact_MT(Object, Object, Object, Object)`                                                                       | `java.lang.invoke.Invokers$Holder`                                     |
|  +50.0% |    +4 | 0.5% → 1.0% |  8 → 12 | `invokeImpl(Object, Object[])`                                                                                         | `jdk.internal.reflect.DirectMethodHandleAccessor`                      |
|  +50.0% |    +4 | 0.5% → 1.0% |  8 → 12 | `invoke(Object, Object[])`                                                                                             | `jdk.internal.reflect.DirectMethodHandleAccessor`                      |
|  +50.0% |    +4 | 0.5% → 1.0% |  8 → 12 | `invoke(Object, Object[])`                                                                                             | `java.lang.reflect.Method`                                             |
| +100.0% |    +4 | 0.3% → 0.7% |   4 → 8 | `copyInto(Sink, Spliterator)`                                                                                          | `java.util.stream.AbstractPipeline`                                    |
| +100.0% |    +4 | 0.3% → 0.7% |   4 → 8 | `wrapAndCopyInto(Sink, Spliterator)`                                                                                   | `java.util.stream.AbstractPipeline`                                    |
| +400.0% |    +4 | 0.1% → 0.4% |   1 → 5 | `evaluate(Spliterator, boolean, IntFunction)`                                                                          | `java.util.stream.AbstractPipeline`                                    |
| +400.0% |    +4 | 0.1% → 0.4% |   1 → 5 | `evaluateToArrayNode(IntFunction)`                                                                                     | `java.util.stream.AbstractPipeline`                                    |
| +400.0% |    +4 | 0.1% → 0.4% |   1 → 5 | `toArray(IntFunction)`                                                                                                 | `java.util.stream.ReferencePipeline`                                   |
|  +66.7% |    +4 | 0.4% → 0.9% |  6 → 10 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +66.7% |    +4 | 0.4% → 0.9% |  6 → 10 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c80121ef30` |

##### Ours

|  Change | Delta |           % | Samples | Function                                                                                                               | Location                                                               |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|     new |    +8 | 0.0% → 0.7% |   0 → 8 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +31.8% |    +7 | 1.4% → 2.5% | 22 → 29 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +31.8% |    +7 | 1.4% → 2.5% | 22 → 29 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c80121df70` |
|  +44.4% |    +4 | 0.6% → 1.1% |  9 → 13 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
|  +50.0% |    +4 | 0.5% → 1.0% |  8 → 12 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|  +66.7% |    +4 | 0.4% → 0.9% |  6 → 10 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +66.7% |    +4 | 0.4% → 0.9% |  6 → 10 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c80121ef30` |
|  +30.0% |    +3 | 0.7% → 1.1% | 10 → 13 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
|  +30.0% |    +3 | 0.7% → 1.1% | 10 → 13 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
|  +37.5% |    +3 | 0.5% → 1.0% |  8 → 11 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +33.3% |    +2 | 0.4% → 0.7% |   6 → 8 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000c80119c3b8` |
|  +33.3% |    +2 | 0.4% → 0.7% |   6 → 8 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +50.0% |    +2 | 0.3% → 0.5% |   4 → 6 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  +50.0% |    +2 | 0.3% → 0.5% |   4 → 6 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|  +25.0% |    +1 | 0.3% → 0.4% |   4 → 5 | `generateData(int, int, int)`                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `lambda$generateData$5(int, int, Random[], int)`                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c80121d4f0` |
|   +8.3% |    +1 | 0.8% → 1.1% | 12 → 13 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   +8.3% |    +1 | 0.8% → 1.1% | 12 → 13 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   +8.3% |    +1 | 0.8% → 1.1% | 12 → 13 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                                    | Location                                             |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------------------------- | ---------------------------------------------------- |
|  +25.0% |    +5 | 1.3% → 2.2% | 20 → 25 | `exec()`                                                                    | `java.util.concurrent.ForkJoinTask$AdaptedCallable`  |
| +125.0% |    +5 | 0.3% → 0.8% |   4 → 9 | `merge(Object, Object, BiFunction)`                                         | `java.util.HashMap`                                  |
|  +50.0% |    +4 | 0.5% → 1.0% |  8 → 12 | `invokeStatic(Object, Object)`                                              | `java.lang.invoke.LambdaForm$DMH.0x000000c801001c00` |
|  +50.0% |    +4 | 0.5% → 1.0% |  8 → 12 | `invoke(Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x000000c801082400`  |
|  +50.0% |    +4 | 0.5% → 1.0% |  8 → 12 | `invokeExact_MT(Object, Object, Object, Object)`                            | `java.lang.invoke.Invokers$Holder`                   |
|  +50.0% |    +4 | 0.5% → 1.0% |  8 → 12 | `invokeImpl(Object, Object[])`                                              | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +50.0% |    +4 | 0.5% → 1.0% |  8 → 12 | `invoke(Object, Object[])`                                                  | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +50.0% |    +4 | 0.5% → 1.0% |  8 → 12 | `invoke(Object, Object[])`                                                  | `java.lang.reflect.Method`                           |
| +100.0% |    +4 | 0.3% → 0.7% |   4 → 8 | `copyInto(Sink, Spliterator)`                                               | `java.util.stream.AbstractPipeline`                  |
| +100.0% |    +4 | 0.3% → 0.7% |   4 → 8 | `wrapAndCopyInto(Sink, Spliterator)`                                        | `java.util.stream.AbstractPipeline`                  |
| +400.0% |    +4 | 0.1% → 0.4% |   1 → 5 | `evaluate(Spliterator, boolean, IntFunction)`                               | `java.util.stream.AbstractPipeline`                  |
| +400.0% |    +4 | 0.1% → 0.4% |   1 → 5 | `evaluateToArrayNode(IntFunction)`                                          | `java.util.stream.AbstractPipeline`                  |
| +400.0% |    +4 | 0.1% → 0.4% |   1 → 5 | `toArray(IntFunction)`                                                      | `java.util.stream.ReferencePipeline`                 |
|  +66.7% |    +4 | 0.4% → 0.9% |  6 → 10 | `forEach(BiConsumer)`                                                       | `java.util.HashMap`                                  |
|   +5.1% |    +3 | 3.9% → 5.4% | 59 → 62 | `computeIfAbsent(Object, Function)`                                         | `java.util.HashMap`                                  |
| +100.0% |    +2 | 0.1% → 0.3% |   2 → 4 | `run()`                                                                     | `java.net.URLClassLoader$1`                          |
| +100.0% |    +2 | 0.1% → 0.3% |   2 → 4 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` | `java.security.AccessController`                     |
| +100.0% |    +2 | 0.1% → 0.3% |   2 → 4 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)`             | `java.security.AccessController`                     |
| +100.0% |    +2 | 0.1% → 0.3% |   2 → 4 | `findClass(String)`                                                         | `java.net.URLClassLoader`                            |
| +100.0% |    +2 | 0.1% → 0.3% |   2 → 4 | `loadClass(String, boolean)`                                                | `java.lang.ClassLoader`                              |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |             % |       Samples | Function                                             | Location                                                   |
| -----: | ----: | ------------: | ------------: | ---------------------------------------------------- | ---------------------------------------------------------- |
| -26.2% |  -390 | 97.3% → 95.2% | 1,488 → 1,098 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                        |
| -26.2% |  -390 | 97.3% → 95.2% | 1,488 → 1,098 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                        |
| -26.2% |  -386 | 96.4% → 94.4% | 1,474 → 1,088 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| -25.0% |  -378 | 98.8% → 98.3% | 1,511 → 1,133 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
| -25.0% |  -378 | 98.8% → 98.3% | 1,511 → 1,133 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                       |
| -25.0% |  -378 | 99.0% → 98.5% | 1,514 → 1,136 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                        |
| -30.1% |  -355 | 77.2% → 71.6% |   1,180 → 825 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| -28.2% |  -317 | 73.6% → 70.2% |   1,126 → 809 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                        |
| -28.2% |  -317 | 73.5% → 70.0% |   1,124 → 807 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                        |
| -27.2% |  -293 | 70.6% → 68.2% |   1,079 → 786 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                |
| -35.2% |  -235 | 43.7% → 37.6% |     668 → 433 | `accumulate(Double[], double[])`                     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| -32.0% |  -217 | 44.4% → 40.1% |     679 → 462 | `vectorSum()`                                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| -32.0% |  -217 | 44.4% → 40.1% |     679 → 462 | `computeDirectly()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| -21.1% |  -169 | 52.5% → 54.9% |     802 → 633 | `computeDirectly()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -23.9% |  -142 | 38.8% → 39.1% |     593 → 451 | `findNearestCentroid()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -30.7% |  -123 | 26.2% → 24.1% |     401 → 278 | `distance(Double[], Double[])`                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -35.3% |  -101 | 18.7% → 16.0% |     286 → 185 | `average(List)`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| -34.8% |  -100 | 18.8% → 16.2% |     287 → 187 | `computeClusterAverages()`                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| -31.9% |   -95 | 19.5% → 17.6% |     298 → 203 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                        |
| -33.3% |   -91 | 17.9% → 15.8% |     273 → 182 | `computeDirectly()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

##### Ours

|  Change | Delta |             % |       Samples | Function                                                                                                               | Location                                                                              |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|  -25.0% |  -378 | 98.8% → 98.3% | 1,511 → 1,133 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
|  -35.2% |  -235 | 43.7% → 37.6% |     668 → 433 | `accumulate(Double[], double[])`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  -32.0% |  -217 | 44.4% → 40.1% |     679 → 462 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  -32.0% |  -217 | 44.4% → 40.1% |     679 → 462 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  -21.1% |  -169 | 52.5% → 54.9% |     802 → 633 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -23.9% |  -142 | 38.8% → 39.1% |     593 → 451 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -30.7% |  -123 | 26.2% → 24.1% |     401 → 278 | `distance(Double[], Double[])`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -35.3% |  -101 | 18.7% → 16.0% |     286 → 185 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|  -34.8% |  -100 | 18.8% → 16.2% |     287 → 187 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|  -33.3% |   -91 | 17.9% → 15.8% |     273 → 182 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
| removed |   -18 |   1.2% → 0.0% |        18 → 0 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000000501204b38` |
|   -9.3% |   -17 | 12.0% → 14.4% |     183 → 166 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| removed |    -6 |   0.4% → 0.0% |         6 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                           |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `add(double[], double[])`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `combineResults(double[], double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  -33.3% |    -1 |          0.2% |         3 → 2 | `extractResource(String, Path)`                                                                                        | `org.renaissance.core.ResourceUtils`                                                  |
|  -33.3% |    -1 |          0.2% |         3 → 2 | `extractResources(Iterable, Path)`                                                                                     | `org.renaissance.core.ResourceUtils`                                                  |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  -50.0% |    -1 |          0.1% |         2 → 1 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |

##### Standard library

|  Change | Delta |             % |       Samples | Function                                                  | Location                                      |
| ------: | ----: | ------------: | ------------: | --------------------------------------------------------- | --------------------------------------------- |
|  -26.2% |  -390 | 97.3% → 95.2% | 1,488 → 1,098 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`           |
|  -26.2% |  -390 | 97.3% → 95.2% | 1,488 → 1,098 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`           |
|  -26.2% |  -386 | 96.4% → 94.4% | 1,474 → 1,088 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -25.0% |  -378 | 98.8% → 98.3% | 1,511 → 1,133 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`          |
|  -25.0% |  -378 | 99.0% → 98.5% | 1,514 → 1,136 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`           |
|  -30.1% |  -355 | 77.2% → 71.6% |   1,180 → 825 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -28.2% |  -317 | 73.6% → 70.2% |   1,126 → 809 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`           |
|  -28.2% |  -317 | 73.5% → 70.0% |   1,124 → 807 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`           |
|  -27.2% |  -293 | 70.6% → 68.2% |   1,079 → 786 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`   |
|  -31.9% |   -95 | 19.5% → 17.6% |     298 → 203 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |
|  -15.8% |   -63 | 26.2% → 29.2% |     400 → 337 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  -24.1% |    -7 |          1.9% |       29 → 22 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                            |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `<clinit>()`                                              | `scala.Predef$`                               |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `nextNode()`                                              | `java.util.HashMap$HashIterator`              |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `next()`                                                  | `java.util.HashMap$EntryIterator`             |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `push(ForkJoinTask, ForkJoinPool, boolean)`               | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `fork()`                                                  | `java.util.concurrent.ForkJoinTask`           |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `readLine()`                                              | `java.util.Properties$LineReader`             |
|  -50.0% |    -1 |          0.1% |         2 → 1 | `read(byte[], int, int)`                                  | `java.io.FilterInputStream`                   |
|  -33.3% |    -1 |          0.2% |         3 → 2 | `transferTo(OutputStream)`                                | `java.io.InputStream`                         |

# Allocated heap profile diff

Allocated 37.7 GiB → 37.8 GiB (+89.098 MiB, +0.2%) over 1,957 samples → 2,221 samples (19.7 MiB → 17.4 MiB per sample).

| Category         | Change |        Delta |             % |                Size |       Samples |
| ---------------- | -----: | -----------: | ------------: | ------------------: | ------------: |
| Standard library |  +0.4% | +139.096 MiB | 94.7% → 94.9% | 35.7 GiB → 35.9 GiB | 1,844 → 2,110 |
| Ours             |  -2.5% |  -49.998 MiB |   5.3% → 5.1% | 1.99 GiB → 1.94 GiB |     110 → 109 |
| Unknown          |  -1.5% |        -32 B |         <0.1% | 2.04 KiB → 2.01 KiB |         3 → 2 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|    Change |        Delta |             % |                Size |       Samples | Function                                      | Location                                                   |
| --------: | -----------: | ------------: | ------------------: | ------------: | --------------------------------------------- | ---------------------------------------------------------- |
|   +403.3% |  +173.54 MiB |   0.1% → 0.6% |    43 MiB → 217 MiB |        7 → 13 | `grow(int)`                                   | `java.util.ArrayList`                                      |
| +12232.1% | +109.055 MiB |  <0.1% → 0.3% |   913 KiB → 110 MiB |         1 → 6 | `vectorSum()`                                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|     +8.2% |  +97.283 MiB |   3.1% → 3.3% | 1.15 GiB → 1.25 GiB |       65 → 61 | `findNearestCentroid()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    +78.1% |  +73.265 MiB |   0.2% → 0.4% |  93.8 MiB → 167 MiB |        10 → 7 | `resize()`                                    | `java.util.HashMap`                                        |
|    +75.2% |  +71.117 MiB |   0.2% → 0.4% |  94.6 MiB → 166 MiB |         6 → 5 | `add(double[], double[])`                     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|       new |  +67.597 MiB |   0.0% → 0.2% |      0 B → 67.6 MiB |         0 → 1 | `iterator()`                                  | `java.util.HashMap$EntrySet`                               |
|       new |  +59.182 MiB |   0.0% → 0.2% |      0 B → 59.2 MiB |         0 → 1 | `computeClusterAverages()`                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  +1317.6% |  +49.409 MiB |  <0.1% → 0.1% | 3.75 MiB → 53.2 MiB |         2 → 5 | `lambda$collectClusters$0(Double[])`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    +19.5% |  +27.891 MiB |          0.4% |   143 MiB → 171 MiB |         6 → 7 | `createSubtask(int, int)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|       new |  +21.241 MiB |   0.0% → 0.1% |      0 B → 21.2 MiB |         0 → 1 | `initTable()`                                 | `java.util.concurrent.ConcurrentHashMap`                   |
|  +1282.8% |  +19.358 MiB |  <0.1% → 0.1% | 1.51 MiB → 20.9 MiB |        4 → 10 | `builder(long, IntFunction)`                  | `java.util.stream.Nodes`                                   |
|       ~0% |   +11.14 MiB | 93.1% → 93.0% |            35.1 GiB | 1,691 → 1,907 | `copyOf(Object[], int)`                       | `java.util.Arrays`                                         |
|   +207.2% |    +8.86 MiB |         <0.1% | 4.28 MiB → 13.1 MiB |       12 → 21 | `valueOf(double)`                             | `java.lang.Double`                                         |
|   +209.1% |   +8.678 MiB |         <0.1% | 4.15 MiB → 12.8 MiB |       11 → 20 | `mapToObj(IntFunction, int)`                  | `java.util.stream.IntPipeline`                             |
|    +73.4% |   +8.046 MiB |         <0.1% |     11 MiB → 19 MiB |       29 → 26 | `intStream(Spliterator$OfInt, boolean)`       | `java.util.stream.StreamSupport`                           |
|       new |   +6.435 MiB |  0.0% → <0.1% |      0 B → 6.44 MiB |         0 → 1 | `doubleStream(Spliterator$OfDouble, boolean)` | `java.util.stream.StreamSupport`                           |
|   +236.4% |   +3.754 MiB |         <0.1% | 1.59 MiB → 5.34 MiB |        4 → 14 | `<init>(InputStream, Inflater, int)`          | `java.util.zip.InflaterInputStream`                        |
|       new |   +2.857 MiB |  0.0% → <0.1% |      0 B → 2.86 MiB |         0 → 6 | `range(int, int)`                             | `java.util.stream.IntStream`                               |
|   +150.1% |   +2.499 MiB |         <0.1% | 1.66 MiB → 4.16 MiB |         5 → 7 | `lambda$generateData$4(int)`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|       new |   +1.309 MiB |  0.0% → <0.1% |      0 B → 1.31 MiB |         0 → 4 | `copyOfRangeByte(byte[], int, int)`           | `java.util.Arrays`                                         |

##### Standard library

|   Change |        Delta |             % |                Size |       Samples | Function                                      | Location                                 |
| -------: | -----------: | ------------: | ------------------: | ------------: | --------------------------------------------- | ---------------------------------------- |
|  +403.3% |  +173.54 MiB |   0.1% → 0.6% |    43 MiB → 217 MiB |        7 → 13 | `grow(int)`                                   | `java.util.ArrayList`                    |
|   +78.1% |  +73.265 MiB |   0.2% → 0.4% |  93.8 MiB → 167 MiB |        10 → 7 | `resize()`                                    | `java.util.HashMap`                      |
|      new |  +67.597 MiB |   0.0% → 0.2% |      0 B → 67.6 MiB |         0 → 1 | `iterator()`                                  | `java.util.HashMap$EntrySet`             |
|      new |  +21.241 MiB |   0.0% → 0.1% |      0 B → 21.2 MiB |         0 → 1 | `initTable()`                                 | `java.util.concurrent.ConcurrentHashMap` |
| +1282.8% |  +19.358 MiB |  <0.1% → 0.1% | 1.51 MiB → 20.9 MiB |        4 → 10 | `builder(long, IntFunction)`                  | `java.util.stream.Nodes`                 |
|      ~0% |   +11.14 MiB | 93.1% → 93.0% |            35.1 GiB | 1,691 → 1,907 | `copyOf(Object[], int)`                       | `java.util.Arrays`                       |
|  +207.2% |    +8.86 MiB |         <0.1% | 4.28 MiB → 13.1 MiB |       12 → 21 | `valueOf(double)`                             | `java.lang.Double`                       |
|  +209.1% |   +8.678 MiB |         <0.1% | 4.15 MiB → 12.8 MiB |       11 → 20 | `mapToObj(IntFunction, int)`                  | `java.util.stream.IntPipeline`           |
|   +73.4% |   +8.046 MiB |         <0.1% |     11 MiB → 19 MiB |       29 → 26 | `intStream(Spliterator$OfInt, boolean)`       | `java.util.stream.StreamSupport`         |
|      new |   +6.435 MiB |  0.0% → <0.1% |      0 B → 6.44 MiB |         0 → 1 | `doubleStream(Spliterator$OfDouble, boolean)` | `java.util.stream.StreamSupport`         |
|  +236.4% |   +3.754 MiB |         <0.1% | 1.59 MiB → 5.34 MiB |        4 → 14 | `<init>(InputStream, Inflater, int)`          | `java.util.zip.InflaterInputStream`      |
|      new |   +2.857 MiB |  0.0% → <0.1% |      0 B → 2.86 MiB |         0 → 6 | `range(int, int)`                             | `java.util.stream.IntStream`             |
|      new |   +1.309 MiB |  0.0% → <0.1% |      0 B → 1.31 MiB |         0 → 4 | `copyOfRangeByte(byte[], int, int)`           | `java.util.Arrays`                       |
|      new |   +1.004 MiB |  0.0% → <0.1% |         0 B → 1 MiB |         0 → 1 | `allocateInstance(Object)`                    | `java.lang.invoke.DirectMethodHandle`    |
|   +84.9% | +984.085 KiB |         <0.1% | 1.13 MiB → 2.09 MiB |         3 → 4 | `opWrapSink(int, Sink)`                       | `java.util.stream.IntPipeline$1`         |
|      new | +759.148 KiB |  0.0% → <0.1% |       0 B → 759 KiB |         0 → 2 | `readLine()`                                  | `java.util.Properties$LineReader`        |
|      new |  +668.96 KiB |  0.0% → <0.1% |       0 B → 669 KiB |         0 → 2 | `newString(byte[], int, int)`                 | `java.lang.StringLatin1`                 |
|   +82.0% | +529.187 KiB |         <0.1% |  645 KiB → 1.15 MiB |         1 → 2 | `readNBytes(int)`                             | `java.io.InputStream`                    |
|   +47.1% | +457.671 KiB |         <0.1% |   971 KiB → 1.4 MiB |         2 → 4 | `allocateInstance(Class)`                     | `jdk.internal.misc.Unsafe`               |
|      new | +394.906 KiB |  0.0% → <0.1% |       0 B → 395 KiB |         0 → 2 | `allocateUninitializedArray0(Class, int)`     | `jdk.internal.misc.Unsafe`               |

##### Ours

|    Change |        Delta |            % |                Size | Samples | Function                             | Location                                                   |
| --------: | -----------: | -----------: | ------------------: | ------: | ------------------------------------ | ---------------------------------------------------------- |
| +12232.1% | +109.055 MiB | <0.1% → 0.3% |   913 KiB → 110 MiB |   1 → 6 | `vectorSum()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|     +8.2% |  +97.283 MiB |  3.1% → 3.3% | 1.15 GiB → 1.25 GiB | 65 → 61 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    +75.2% |  +71.117 MiB |  0.2% → 0.4% |  94.6 MiB → 166 MiB |   6 → 5 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|       new |  +59.182 MiB |  0.0% → 0.2% |      0 B → 59.2 MiB |   0 → 1 | `computeClusterAverages()`           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  +1317.6% |  +49.409 MiB | <0.1% → 0.1% | 3.75 MiB → 53.2 MiB |   2 → 5 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    +19.5% |  +27.891 MiB |         0.4% |   143 MiB → 171 MiB |   6 → 7 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +150.1% |   +2.499 MiB |        <0.1% | 1.66 MiB → 4.16 MiB |   5 → 7 | `lambda$generateData$4(int)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |        Delta |            % |                Size | Samples | Function                                                                        | Location                                                   |
| ------: | -----------: | -----------: | ------------------: | ------: | ------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|  -80.5% | -279.301 MiB |  0.9% → 0.2% |  347 MiB → 67.7 MiB |  11 → 3 | `collectClusters(int[])`                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed | -159.185 MiB |  0.4% → 0.0% |       159 MiB → 0 B |   1 → 0 | `read(Manifest$FastInputStream, byte[], String, int)`                           | `java.util.jar.Attributes`                                 |
| removed | -110.745 MiB |  0.3% → 0.0% |       111 MiB → 0 B |   5 → 0 | `merge(Map, Map)`                                                               | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -74.8% |  -76.035 MiB |  0.3% → 0.1% |  102 MiB → 25.7 MiB |   3 → 5 | `lambda$merge$6(List, List)`                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -99.2% |  -64.774 MiB | 0.2% → <0.1% |  65.3 MiB → 508 KiB |       1 | `entrySet()`                                                                    | `java.util.HashMap`                                        |
|  -97.9% |  -20.869 MiB | 0.1% → <0.1% |  21.3 MiB → 468 KiB |       1 | `initCEN(int, ZipCoder)`                                                        | `java.util.zip.ZipFile$Source`                             |
|  -11.6% |  -20.727 MiB |  0.5% → 0.4% |   179 MiB → 158 MiB | 13 → 11 | `newNode(int, Object, Object, HashMap$Node)`                                    | `java.util.HashMap`                                        |
| removed |   -2.923 MiB | <0.1% → 0.0% |      2.92 MiB → 0 B |   5 → 0 | `copyOf(Object[], int, Class)`                                                  | `java.util.Arrays`                                         |
| removed |   -1.729 MiB | <0.1% → 0.0% |      1.73 MiB → 0 B |   2 → 0 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                                    |
|  -71.6% | -994.781 KiB |        <0.1% |  1.36 MiB → 394 KiB |       1 | `fillInStackTrace(int)`                                                         | `java.lang.Throwable`                                      |
| removed | -772.554 KiB | <0.1% → 0.0% |       773 KiB → 0 B |   2 → 0 | `newNode(int, Object, Object, HashMap$Node)`                                    | `java.util.LinkedHashMap`                                  |
| removed | -447.835 KiB | <0.1% → 0.0% |       448 KiB → 0 B |   2 → 0 | `<init>(ClassWriter)`                                                           | `jdk.internal.org.objectweb.asm.SymbolTable`               |
|  -53.3% | -433.546 KiB |        <0.1% |   813 KiB → 379 KiB |   2 → 1 | `addConstantUtf8Reference(int, String)`                                         | `jdk.internal.org.objectweb.asm.SymbolTable`               |
| removed | -393.296 KiB | <0.1% → 0.0% |       393 KiB → 0 B |   1 → 0 | `entryFor(String)`                                                              | `java.util.jar.JarFile`                                    |
| removed |   -391.5 KiB | <0.1% → 0.0% |       392 KiB → 0 B |   1 → 0 | `<init>(int)`                                                                   | `jdk.internal.org.objectweb.asm.ByteVector`                |
| removed | -389.203 KiB | <0.1% → 0.0% |       389 KiB → 0 B |   1 → 0 | `resolve(byte[], byte[])`                                                       | `sun.nio.fs.UnixPath`                                      |
| removed | -386.304 KiB | <0.1% → 0.0% |       386 KiB → 0 B |   1 → 0 | `putPropertyStrings(Provider$Service)`                                          | `java.security.Provider`                                   |
| removed | -386.304 KiB | <0.1% → 0.0% |       386 KiB → 0 B |   1 → 0 | `putVal(Object, Object, boolean)`                                               | `java.util.concurrent.ConcurrentHashMap`                   |
| removed |  -382.14 KiB | <0.1% → 0.0% |       382 KiB → 0 B |   1 → 0 | `<init>(InputStream, int)`                                                      | `java.util.jar.Manifest$FastInputStream`                   |
|   -0.7% | -362.257 KiB |         0.1% | 49.6 MiB → 49.3 MiB |   6 → 9 | `createSubtask(int, int)`                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### Standard library

|  Change |        Delta |            % |               Size | Samples | Function                                                                        | Location                                     |
| ------: | -----------: | -----------: | -----------------: | ------: | ------------------------------------------------------------------------------- | -------------------------------------------- |
| removed | -159.185 MiB |  0.4% → 0.0% |      159 MiB → 0 B |   1 → 0 | `read(Manifest$FastInputStream, byte[], String, int)`                           | `java.util.jar.Attributes`                   |
|  -99.2% |  -64.774 MiB | 0.2% → <0.1% | 65.3 MiB → 508 KiB |       1 | `entrySet()`                                                                    | `java.util.HashMap`                          |
|  -97.9% |  -20.869 MiB | 0.1% → <0.1% | 21.3 MiB → 468 KiB |       1 | `initCEN(int, ZipCoder)`                                                        | `java.util.zip.ZipFile$Source`               |
|  -11.6% |  -20.727 MiB |  0.5% → 0.4% |  179 MiB → 158 MiB | 13 → 11 | `newNode(int, Object, Object, HashMap$Node)`                                    | `java.util.HashMap`                          |
| removed |   -2.923 MiB | <0.1% → 0.0% |     2.92 MiB → 0 B |   5 → 0 | `copyOf(Object[], int, Class)`                                                  | `java.util.Arrays`                           |
| removed |   -1.729 MiB | <0.1% → 0.0% |     1.73 MiB → 0 B |   2 → 0 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                      |
|  -71.6% | -994.781 KiB |        <0.1% | 1.36 MiB → 394 KiB |       1 | `fillInStackTrace(int)`                                                         | `java.lang.Throwable`                        |
| removed | -772.554 KiB | <0.1% → 0.0% |      773 KiB → 0 B |   2 → 0 | `newNode(int, Object, Object, HashMap$Node)`                                    | `java.util.LinkedHashMap`                    |
| removed | -447.835 KiB | <0.1% → 0.0% |      448 KiB → 0 B |   2 → 0 | `<init>(ClassWriter)`                                                           | `jdk.internal.org.objectweb.asm.SymbolTable` |
|  -53.3% | -433.546 KiB |        <0.1% |  813 KiB → 379 KiB |   2 → 1 | `addConstantUtf8Reference(int, String)`                                         | `jdk.internal.org.objectweb.asm.SymbolTable` |
| removed | -393.296 KiB | <0.1% → 0.0% |      393 KiB → 0 B |   1 → 0 | `entryFor(String)`                                                              | `java.util.jar.JarFile`                      |
| removed |   -391.5 KiB | <0.1% → 0.0% |      392 KiB → 0 B |   1 → 0 | `<init>(int)`                                                                   | `jdk.internal.org.objectweb.asm.ByteVector`  |
| removed | -389.203 KiB | <0.1% → 0.0% |      389 KiB → 0 B |   1 → 0 | `resolve(byte[], byte[])`                                                       | `sun.nio.fs.UnixPath`                        |
| removed | -386.304 KiB | <0.1% → 0.0% |      386 KiB → 0 B |   1 → 0 | `putPropertyStrings(Provider$Service)`                                          | `java.security.Provider`                     |
| removed | -386.304 KiB | <0.1% → 0.0% |      386 KiB → 0 B |   1 → 0 | `putVal(Object, Object, boolean)`                                               | `java.util.concurrent.ConcurrentHashMap`     |
| removed |  -382.14 KiB | <0.1% → 0.0% |      382 KiB → 0 B |   1 → 0 | `<init>(InputStream, int)`                                                      | `java.util.jar.Manifest$FastInputStream`     |
|   -1.1% | -149.117 KiB |        <0.1% |  13 MiB → 12.9 MiB | 27 → 32 | `copyOf(byte[], int)`                                                           | `java.util.Arrays`                           |
| removed | -106.898 KiB | <0.1% → 0.0% |      107 KiB → 0 B |   1 → 0 | `initClassName()`                                                               | `java.lang.Class`                            |
|   -2.1% |    -8.25 KiB |        <0.1% |  393 KiB → 385 KiB |       1 | `addConstantUtf8(String)`                                                       | `jdk.internal.org.objectweb.asm.SymbolTable` |
|   -0.9% |     -3.5 KiB |        <0.1% |  386 KiB → 383 KiB |       1 | `toString()`                                                                    | `java.lang.StringBuilder`                    |

##### Ours

|  Change |        Delta |           % |                Size | Samples | Function                     | Location                                                   |
| ------: | -----------: | ----------: | ------------------: | ------: | ---------------------------- | ---------------------------------------------------------- |
|  -80.5% | -279.301 MiB | 0.9% → 0.2% |  347 MiB → 67.7 MiB |  11 → 3 | `collectClusters(int[])`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed | -110.745 MiB | 0.3% → 0.0% |       111 MiB → 0 B |   5 → 0 | `merge(Map, Map)`            | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -74.8% |  -76.035 MiB | 0.3% → 0.1% |  102 MiB → 25.7 MiB |   3 → 5 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|   -0.7% | -362.257 KiB |        0.1% | 49.6 MiB → 49.3 MiB |   6 → 9 | `createSubtask(int, int)`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|    Change |        Delta |             % |                Size |       Samples | Function                                                  | Location                                                               |
| --------: | -----------: | ------------: | ------------------: | ------------: | --------------------------------------------------------- | ---------------------------------------------------------------------- |
|    +12.6% |   +1.961 GiB | 41.1% → 46.2% | 15.5 GiB → 17.5 GiB |     814 → 926 | `toArray()`                                               | `java.util.ArrayList`                                                  |
|    +15.9% |   +1.191 GiB | 19.9% → 23.0% |  7.51 GiB → 8.7 GiB |     372 → 423 | `<init>(Collection)`                                      | `java.util.ArrayList`                                                  |
|    +15.7% | +941.217 MiB | 15.5% → 17.9% | 5.86 GiB → 6.78 GiB |     320 → 322 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|    +21.9% |  +939.41 MiB | 11.1% → 13.5% | 4.19 GiB → 5.11 GiB |     230 → 242 | `grow()`                                                  | `java.util.ArrayList`                                                  |
|    +21.9% |  +939.41 MiB | 11.1% → 13.5% | 4.19 GiB → 5.11 GiB |     230 → 242 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                                                  |
|    +21.9% |  +939.41 MiB | 11.1% → 13.5% | 4.19 GiB → 5.11 GiB |     230 → 242 | `add(Object)`                                             | `java.util.ArrayList`                                                  |
|    +17.5% | +843.934 MiB | 12.5% → 14.6% | 4.71 GiB → 5.53 GiB |     255 → 261 | `collectClusters(int[])`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|    +16.9% | +567.088 MiB |  8.7% → 10.1% | 3.27 GiB → 3.82 GiB |     211 → 248 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                                    |
|     +3.0% | +221.483 MiB | 19.0% → 19.6% | 7.18 GiB → 7.39 GiB |     204 → 232 | `lambda$run$0(int, List, int)`                            | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|     +3.0% | +221.483 MiB | 19.0% → 19.6% | 7.18 GiB → 7.39 GiB |     204 → 232 | `call()`                                                  | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c80121df70` |
|     +3.0% | +221.483 MiB | 19.0% → 19.6% | 7.18 GiB → 7.39 GiB |     204 → 232 | `exec()`                                                  | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                    |
|     +0.5% | +190.898 MiB | 99.4% → 99.7% | 37.5 GiB → 37.7 GiB | 1,829 → 2,041 | `compute()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|     +0.5% | +190.898 MiB | 99.4% → 99.7% | 37.5 GiB → 37.7 GiB | 1,829 → 2,041 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                                   |
|     +0.5% | +190.898 MiB | 99.4% → 99.7% | 37.5 GiB → 37.7 GiB | 1,829 → 2,041 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                                    |
|   +102.1% |  +184.37 MiB |   0.5% → 0.9% |   181 MiB → 365 MiB |       15 → 17 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                                                    |
|   +106.6% | +127.791 MiB |   0.3% → 0.6% |   120 MiB → 248 MiB |        9 → 12 | `computeClusterAverages()`                                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   +106.6% | +127.791 MiB |   0.3% → 0.6% |   120 MiB → 248 MiB |        9 → 12 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| +12232.1% | +109.055 MiB |  <0.1% → 0.3% |   913 KiB → 110 MiB |         1 → 6 | `vectorSum()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| +12232.1% | +109.055 MiB |  <0.1% → 0.3% |   913 KiB → 110 MiB |         1 → 6 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|     +8.2% |  +97.283 MiB |   3.1% → 3.3% | 1.15 GiB → 1.25 GiB |       65 → 61 | `findNearestCentroid()`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |

##### Standard library

|  Change |        Delta |             % |                Size |       Samples | Function                                                  | Location                                            |
| ------: | -----------: | ------------: | ------------------: | ------------: | --------------------------------------------------------- | --------------------------------------------------- |
|  +12.6% |   +1.961 GiB | 41.1% → 46.2% | 15.5 GiB → 17.5 GiB |     814 → 926 | `toArray()`                                               | `java.util.ArrayList`                               |
|  +15.9% |   +1.191 GiB | 19.9% → 23.0% |  7.51 GiB → 8.7 GiB |     372 → 423 | `<init>(Collection)`                                      | `java.util.ArrayList`                               |
|  +21.9% |  +939.41 MiB | 11.1% → 13.5% | 4.19 GiB → 5.11 GiB |     230 → 242 | `grow()`                                                  | `java.util.ArrayList`                               |
|  +21.9% |  +939.41 MiB | 11.1% → 13.5% | 4.19 GiB → 5.11 GiB |     230 → 242 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                               |
|  +21.9% |  +939.41 MiB | 11.1% → 13.5% | 4.19 GiB → 5.11 GiB |     230 → 242 | `add(Object)`                                             | `java.util.ArrayList`                               |
|  +16.9% | +567.088 MiB |  8.7% → 10.1% | 3.27 GiB → 3.82 GiB |     211 → 248 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                 |
|   +3.0% | +221.483 MiB | 19.0% → 19.6% | 7.18 GiB → 7.39 GiB |     204 → 232 | `exec()`                                                  | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|   +0.5% | +190.898 MiB | 99.4% → 99.7% | 37.5 GiB → 37.7 GiB | 1,829 → 2,041 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                |
|   +0.5% | +190.898 MiB | 99.4% → 99.7% | 37.5 GiB → 37.7 GiB | 1,829 → 2,041 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                 |
| +102.1% |  +184.37 MiB |   0.5% → 0.9% |   181 MiB → 365 MiB |       15 → 17 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                                 |
|   +1.2% |   +90.14 MiB | 20.1% → 20.2% | 7.57 GiB → 7.66 GiB |     222 → 250 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                 |
|   +0.2% |  +83.325 MiB |         94.9% | 35.8 GiB → 35.9 GiB | 1,752 → 1,931 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
|  +78.1% |  +73.265 MiB |   0.2% → 0.4% |  93.8 MiB → 167 MiB |        10 → 7 | `resize()`                                                | `java.util.HashMap`                                 |
|     new |  +67.597 MiB |   0.0% → 0.2% |      0 B → 67.6 MiB |         0 → 1 | `iterator()`                                              | `java.util.HashMap$EntrySet`                        |
| +246.1% |  +61.179 MiB |   0.1% → 0.2% |   24.9 MiB → 86 MiB |      68 → 121 | `copyInto(Sink, Spliterator)`                             | `java.util.stream.AbstractPipeline`                 |
| +246.1% |  +61.179 MiB |   0.1% → 0.2% |   24.9 MiB → 86 MiB |      68 → 121 | `wrapAndCopyInto(Sink, Spliterator)`                      | `java.util.stream.AbstractPipeline`                 |
| +246.1% |  +61.179 MiB |   0.1% → 0.2% |   24.9 MiB → 86 MiB |      68 → 121 | `evaluateSequential(PipelineHelper, Spliterator)`         | `java.util.stream.ReduceOps$ReduceOp`               |
| +246.1% |  +61.179 MiB |   0.1% → 0.2% |   24.9 MiB → 86 MiB |      68 → 121 | `evaluate(TerminalOp)`                                    | `java.util.stream.AbstractPipeline`                 |
| +246.1% |  +61.179 MiB |   0.1% → 0.2% |   24.9 MiB → 86 MiB |      68 → 121 | `collect(Collector)`                                      | `java.util.stream.ReferencePipeline`                |
| +224.8% |  +54.171 MiB |   0.1% → 0.2% | 24.1 MiB → 78.3 MiB |      66 → 100 | `accept(int)`                                             | `java.util.stream.IntPipeline$1$1`                  |

##### Ours

|    Change |        Delta |             % |                Size |       Samples | Function                                                                                                               | Location                                                               |
| --------: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|    +15.7% | +941.217 MiB | 15.5% → 17.9% | 5.86 GiB → 6.78 GiB |     320 → 322 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|    +17.5% | +843.934 MiB | 12.5% → 14.6% | 4.71 GiB → 5.53 GiB |     255 → 261 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|     +3.0% | +221.483 MiB | 19.0% → 19.6% | 7.18 GiB → 7.39 GiB |     204 → 232 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|     +3.0% | +221.483 MiB | 19.0% → 19.6% | 7.18 GiB → 7.39 GiB |     204 → 232 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c80121df70` |
|     +0.5% | +190.898 MiB | 99.4% → 99.7% | 37.5 GiB → 37.7 GiB | 1,829 → 2,041 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|   +106.6% | +127.791 MiB |   0.3% → 0.6% |   120 MiB → 248 MiB |        9 → 12 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   +106.6% | +127.791 MiB |   0.3% → 0.6% |   120 MiB → 248 MiB |        9 → 12 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| +12232.1% | +109.055 MiB |  <0.1% → 0.3% |   913 KiB → 110 MiB |         1 → 6 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| +12232.1% | +109.055 MiB |  <0.1% → 0.3% |   913 KiB → 110 MiB |         1 → 6 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|     +8.2% |  +97.283 MiB |   3.1% → 3.3% | 1.15 GiB → 1.25 GiB |       65 → 61 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|       new |  +88.928 MiB |   0.0% → 0.2% |      0 B → 88.9 MiB |       0 → 128 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +4546.0% |   +75.69 MiB |  <0.1% → 0.2% | 1.66 MiB → 77.4 MiB |        5 → 99 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c80121d4f0` |
|    +75.2% |  +71.117 MiB |   0.2% → 0.4% |  94.6 MiB → 166 MiB |         6 → 5 | `add(double[], double[])`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|    +75.2% |  +71.117 MiB |   0.2% → 0.4% |  94.6 MiB → 166 MiB |         6 → 5 | `combineResults(double[], double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|    +75.2% |  +71.117 MiB |   0.2% → 0.4% |  94.6 MiB → 166 MiB |         6 → 5 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   +258.7% |  +62.344 MiB |   0.1% → 0.2% | 24.1 MiB → 86.4 MiB |      66 → 122 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|    +51.9% |  +62.173 MiB |   0.3% → 0.5% |   120 MiB → 182 MiB |        9 → 10 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   +224.8% |  +54.171 MiB |   0.1% → 0.2% | 24.1 MiB → 78.3 MiB |      66 → 100 | `generateData(int, int, int)`                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   +226.0% |  +53.626 MiB |   0.1% → 0.2% | 23.7 MiB → 77.4 MiB |       65 → 99 | `lambda$generateData$5(int, int, Random[], int)`                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +1317.6% |  +49.409 MiB |  <0.1% → 0.1% | 3.75 MiB → 53.2 MiB |         2 → 5 | `lambda$collectClusters$0(Double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |          Delta |             % |                Size |       Samples | Function                                                                                                               | Location                                                               |
| ------: | -------------: | ------------: | ------------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|   -8.2% |     -1.931 GiB | 62.2% → 57.0% | 23.5 GiB → 21.5 GiB | 1,101 → 1,255 | `addAll(Collection)`                                                                                                   | `java.util.ArrayList`                                                  |
|   -9.1% |     -1.784 GiB | 52.2% → 47.3% | 19.7 GiB → 17.9 GiB |     889 → 994 | `grow(int)`                                                                                                            | `java.util.ArrayList`                                                  |
|   -3.8% |     -1.007 GiB | 70.3% → 67.4% | 26.5 GiB → 25.5 GiB | 1,245 → 1,384 | `tryRemoveAndExec(ForkJoinTask, boolean)`                                                                              | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|   -3.2% | -1,023.646 MiB | 83.1% → 80.3% | 31.4 GiB → 30.4 GiB | 1,490 → 1,690 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -3.2% | -1,023.646 MiB | 83.1% → 80.3% | 31.4 GiB → 30.4 GiB | 1,490 → 1,690 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -3.2% | -1,023.646 MiB | 83.1% → 80.3% | 31.4 GiB → 30.4 GiB | 1,490 → 1,690 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -3.6% |   -996.968 MiB | 71.1% → 68.4% | 26.8 GiB → 25.9 GiB | 1,263 → 1,401 | `awaitDone(int, long)`                                                                                                 | `java.util.concurrent.ForkJoinTask`                                    |
|   -3.6% |   -996.968 MiB | 71.1% → 68.4% | 26.8 GiB → 25.9 GiB | 1,263 → 1,401 | `join()`                                                                                                               | `java.util.concurrent.ForkJoinTask`                                    |
|   -2.6% |   -833.688 MiB | 82.4% → 80.1% | 31.1 GiB → 30.3 GiB | 1,476 → 1,683 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -2.6% |   -833.688 MiB | 82.4% → 80.1% | 31.1 GiB → 30.3 GiB | 1,476 → 1,683 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c80121f178` |
|   -2.6% |   -833.688 MiB | 82.4% → 80.1% | 31.1 GiB → 30.3 GiB | 1,476 → 1,683 | `merge(Object, Object, BiFunction)`                                                                                    | `java.util.HashMap`                                                    |
|   -2.6% |   -833.688 MiB | 82.4% → 80.1% | 31.1 GiB → 30.3 GiB | 1,476 → 1,683 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -2.6% |   -833.688 MiB | 82.4% → 80.1% | 31.1 GiB → 30.3 GiB | 1,476 → 1,683 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c80121ef30` |
|   -2.6% |   -833.688 MiB | 82.4% → 80.1% | 31.1 GiB → 30.3 GiB | 1,476 → 1,683 | `forEach(BiConsumer)`                                                                                                  | `java.util.HashMap`                                                    |
| removed |   -190.781 MiB |   0.5% → 0.0% |       191 MiB → 0 B |        74 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
| removed |     -166.3 MiB |   0.4% → 0.0% |       166 MiB → 0 B |         7 → 0 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                              |
| removed |     -166.3 MiB |   0.4% → 0.0% |       166 MiB → 0 B |         7 → 0 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |
| removed |   -159.185 MiB |   0.4% → 0.0% |       159 MiB → 0 B |         1 → 0 | `read(Manifest$FastInputStream, byte[], String, int)`                                                                  | `java.util.jar.Attributes`                                             |
|  -98.7% |   -158.309 MiB |  0.4% → <0.1% |  160 MiB → 2.02 MiB |         4 → 5 | `read(InputStream, String)`                                                                                            | `java.util.jar.Manifest`                                               |
|  -98.7% |   -158.309 MiB |  0.4% → <0.1% |  160 MiB → 2.02 MiB |         4 → 5 | `<init>(JarVerifier, InputStream, String)`                                                                             | `java.util.jar.Manifest`                                               |

##### Standard library

|  Change |        Delta |             % |                Size |       Samples | Function                                                                    | Location                                       |
| ------: | -----------: | ------------: | ------------------: | ------------: | --------------------------------------------------------------------------- | ---------------------------------------------- |
|   -8.2% |   -1.931 GiB | 62.2% → 57.0% | 23.5 GiB → 21.5 GiB | 1,101 → 1,255 | `addAll(Collection)`                                                        | `java.util.ArrayList`                          |
|   -9.1% |   -1.784 GiB | 52.2% → 47.3% | 19.7 GiB → 17.9 GiB |     889 → 994 | `grow(int)`                                                                 | `java.util.ArrayList`                          |
|   -3.8% |   -1.007 GiB | 70.3% → 67.4% | 26.5 GiB → 25.5 GiB | 1,245 → 1,384 | `tryRemoveAndExec(ForkJoinTask, boolean)`                                   | `java.util.concurrent.ForkJoinPool$WorkQueue`  |
|   -3.6% | -996.968 MiB | 71.1% → 68.4% | 26.8 GiB → 25.9 GiB | 1,263 → 1,401 | `awaitDone(int, long)`                                                      | `java.util.concurrent.ForkJoinTask`            |
|   -3.6% | -996.968 MiB | 71.1% → 68.4% | 26.8 GiB → 25.9 GiB | 1,263 → 1,401 | `join()`                                                                    | `java.util.concurrent.ForkJoinTask`            |
|   -2.6% | -833.688 MiB | 82.4% → 80.1% | 31.1 GiB → 30.3 GiB | 1,476 → 1,683 | `merge(Object, Object, BiFunction)`                                         | `java.util.HashMap`                            |
|   -2.6% | -833.688 MiB | 82.4% → 80.1% | 31.1 GiB → 30.3 GiB | 1,476 → 1,683 | `forEach(BiConsumer)`                                                       | `java.util.HashMap`                            |
| removed | -159.185 MiB |   0.4% → 0.0% |       159 MiB → 0 B |         1 → 0 | `read(Manifest$FastInputStream, byte[], String, int)`                       | `java.util.jar.Attributes`                     |
|  -98.7% | -158.309 MiB |  0.4% → <0.1% |  160 MiB → 2.02 MiB |         4 → 5 | `read(InputStream, String)`                                                 | `java.util.jar.Manifest`                       |
|  -98.7% | -158.309 MiB |  0.4% → <0.1% |  160 MiB → 2.02 MiB |         4 → 5 | `<init>(JarVerifier, InputStream, String)`                                  | `java.util.jar.Manifest`                       |
|  -98.7% | -158.309 MiB |  0.4% → <0.1% |  160 MiB → 2.02 MiB |         4 → 5 | `<init>(InputStream, String)`                                               | `java.util.jar.Manifest`                       |
|  -98.7% | -158.309 MiB |  0.4% → <0.1% |  160 MiB → 2.02 MiB |         4 → 5 | `getManifestFromReference()`                                                | `java.util.jar.JarFile`                        |
|  -98.7% | -158.309 MiB |  0.4% → <0.1% |  160 MiB → 2.02 MiB |         4 → 5 | `getManifest()`                                                             | `java.util.jar.JarFile`                        |
|  -98.7% | -158.309 MiB |  0.4% → <0.1% |  160 MiB → 2.02 MiB |         4 → 5 | `getManifest()`                                                             | `jdk.internal.loader.URLClassPath$JarLoader$2` |
|  -87.5% | -156.462 MiB |   0.5% → 0.1% |  179 MiB → 22.4 MiB |       42 → 57 | `defineClass(String, Resource)`                                             | `java.net.URLClassLoader`                      |
|  -86.4% | -155.477 MiB |   0.5% → 0.1% |  180 MiB → 24.4 MiB |       44 → 62 | `run()`                                                                     | `java.net.URLClassLoader$1`                    |
|  -86.4% | -155.477 MiB |   0.5% → 0.1% |  180 MiB → 24.4 MiB |       44 → 62 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` | `java.security.AccessController`               |
|  -86.4% | -155.477 MiB |   0.5% → 0.1% |  180 MiB → 24.4 MiB |       44 → 62 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)`             | `java.security.AccessController`               |
|  -86.4% | -155.477 MiB |   0.5% → 0.1% |  180 MiB → 24.4 MiB |       44 → 62 | `findClass(String)`                                                         | `java.net.URLClassLoader`                      |
|  -86.3% | -155.195 MiB |   0.5% → 0.1% |  180 MiB → 24.7 MiB |       44 → 63 | `loadClass(String, boolean)`                                                | `java.lang.ClassLoader`                        |

##### Ours

|  Change |          Delta |             % |                Size |       Samples | Function                                                                                                               | Location                                                               |
| ------: | -------------: | ------------: | ------------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|   -3.2% | -1,023.646 MiB | 83.1% → 80.3% | 31.4 GiB → 30.4 GiB | 1,490 → 1,690 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -3.2% | -1,023.646 MiB | 83.1% → 80.3% | 31.4 GiB → 30.4 GiB | 1,490 → 1,690 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -3.2% | -1,023.646 MiB | 83.1% → 80.3% | 31.4 GiB → 30.4 GiB | 1,490 → 1,690 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -2.6% |   -833.688 MiB | 82.4% → 80.1% | 31.1 GiB → 30.3 GiB | 1,476 → 1,683 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -2.6% |   -833.688 MiB | 82.4% → 80.1% | 31.1 GiB → 30.3 GiB | 1,476 → 1,683 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c80121f178` |
|   -2.6% |   -833.688 MiB | 82.4% → 80.1% | 31.1 GiB → 30.3 GiB | 1,476 → 1,683 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -2.6% |   -833.688 MiB | 82.4% → 80.1% | 31.1 GiB → 30.3 GiB | 1,476 → 1,683 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c80121ef30` |
| removed |   -190.781 MiB |   0.5% → 0.0% |       191 MiB → 0 B |        74 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
| removed |     -166.3 MiB |   0.4% → 0.0% |       166 MiB → 0 B |         7 → 0 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                              |
| removed |     -166.3 MiB |   0.4% → 0.0% |       166 MiB → 0 B |         7 → 0 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |
|  -54.6% |   -103.955 MiB |   0.5% → 0.2% |  190 MiB → 86.4 MiB |      73 → 122 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|  -49.7% |   -103.896 MiB |   0.5% → 0.3% |   209 MiB → 105 MiB |     122 → 169 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
|  -49.5% |   -103.465 MiB |   0.5% → 0.3% |   209 MiB → 106 MiB |     122 → 170 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
|  -49.5% |   -103.076 MiB |   0.5% → 0.3% |   208 MiB → 105 MiB |     120 → 169 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
|  -50.2% |   -102.987 MiB |   0.5% → 0.3% |   205 MiB → 102 MiB |     112 → 162 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -49.4% |   -102.716 MiB |   0.5% → 0.3% |   208 MiB → 105 MiB |     119 → 169 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|  -53.7% |   -102.445 MiB |   0.5% → 0.2% |  191 MiB → 88.3 MiB |      74 → 126 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -53.4% |   -101.852 MiB |   0.5% → 0.2% |  191 MiB → 88.9 MiB |      74 → 128 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000c80119c3b8` |
|  -82.4% |    -19.564 MiB |  0.1% → <0.1% | 23.7 MiB → 4.16 MiB |        65 → 7 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c80121d960` |
| removed |     -1.131 MiB |  <0.1% → 0.0% |      1.13 MiB → 0 B |         3 → 0 | `$anonfun$1(Config, Path)`                                                                                             | `org.renaissance.harness.RenaissanceSuite$`                            |

# Retained heap profile diff

Retained 2.31 MiB → 2.56 MiB (+255.882 KiB, +10.8%) over 10 objects → 9 objects (237 KiB → 291 KiB per object).

| Category         | Change |        Delta |            % |                Size | Objects |
| ---------------- | -----: | -----------: | -----------: | ------------------: | ------: |
| Standard library | +10.8% | +255.843 KiB |       100.0% | 2.31 MiB → 2.56 MiB |  10 → 8 |
| Ours             |    new |        +40 B | 0.0% → <0.1% |          0 B → 40 B |   0 → 1 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

| Change |        Delta |            % |          Size | Objects | Function                               | Location                                       |
| -----: | -----------: | -----------: | ------------: | ------: | -------------------------------------- | ---------------------------------------------- |
|    new | +256.015 KiB |  0.0% → 9.8% | 0 B → 256 KiB |   0 → 1 | `initTable()`                          | `java.util.concurrent.ConcurrentHashMap`       |
|    new |        +40 B | 0.0% → <0.1% |    0 B → 40 B |   0 → 1 | `make(MethodType, LambdaForm, Object)` | `java.lang.invoke.BoundMethodHandle$Species_L` |
|    new |        +40 B | 0.0% → <0.1% |    0 B → 40 B |   0 → 1 | `lambda$generateData$4(int)`           | `org.renaissance.jdk.concurrent.JavaKMeans`    |
|    new |        +32 B | 0.0% → <0.1% |    0 B → 32 B |   0 → 1 | `entryKey(Object)`                     | `jdk.internal.util.ReferencedKeyMap`           |
|    new |        +24 B | 0.0% → <0.1% |    0 B → 24 B |   0 → 1 | `parseName(byte[], int)`               | `java.util.jar.Manifest`                       |

##### Standard library

| Change |        Delta |            % |          Size | Objects | Function                               | Location                                       |
| -----: | -----------: | -----------: | ------------: | ------: | -------------------------------------- | ---------------------------------------------- |
|    new | +256.015 KiB |  0.0% → 9.8% | 0 B → 256 KiB |   0 → 1 | `initTable()`                          | `java.util.concurrent.ConcurrentHashMap`       |
|    new |        +40 B | 0.0% → <0.1% |    0 B → 40 B |   0 → 1 | `make(MethodType, LambdaForm, Object)` | `java.lang.invoke.BoundMethodHandle$Species_L` |
|    new |        +32 B | 0.0% → <0.1% |    0 B → 32 B |   0 → 1 | `entryKey(Object)`                     | `jdk.internal.util.ReferencedKeyMap`           |
|    new |        +24 B | 0.0% → <0.1% |    0 B → 24 B |   0 → 1 | `parseName(byte[], int)`               | `java.util.jar.Manifest`                       |

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

##### Standard library

|  Change |  Delta |            % |         Size | Objects | Function                                                                        | Location                  |
| ------: | -----: | -----------: | -----------: | ------: | ------------------------------------------------------------------------------- | ------------------------- |
| removed | -112 B | <0.1% → 0.0% |  112 B → 0 B |   1 → 0 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`   |
|  -60.0% |  -72 B |        <0.1% | 120 B → 48 B |   5 → 2 | `valueOf(double)`                                                               | `java.lang.Double`        |
| removed |  -48 B | <0.1% → 0.0% |   48 B → 0 B |   1 → 0 | `initClassName()`                                                               | `java.lang.Class`         |
| removed |  -40 B | <0.1% → 0.0% |   40 B → 0 B |   1 → 0 | `newNode(int, Object, Object, HashMap$Node)`                                    | `java.util.LinkedHashMap` |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

|      Change |        Delta |             % |                Size | Objects | Function                                                                                                               | Location                                                               |
| ----------: | -----------: | ------------: | ------------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|         new |    +2.31 MiB |  0.0% → 90.2% |      0 B → 2.31 MiB |   0 → 7 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
| +5402120.0% |    +2.06 MiB | <0.1% → 80.5% |     40 B → 2.06 MiB |       1 | `accept(Object, Object)`                                                                                               | `java.util.stream.Collectors$$Lambda.0x000000c8010c40c8`               |
|         new | +256.015 KiB |   0.0% → 9.8% |       0 B → 256 KiB |   0 → 1 | `initTable()`                                                                                                          | `java.util.concurrent.ConcurrentHashMap`                               |
|         new | +256.015 KiB |   0.0% → 9.8% |       0 B → 256 KiB |   0 → 1 | `putVal(Object, Object, boolean)`                                                                                      | `java.util.concurrent.ConcurrentHashMap`                               |
|         new | +256.015 KiB |   0.0% → 9.8% |       0 B → 256 KiB |   0 → 1 | `put(Object, Object)`                                                                                                  | `java.util.concurrent.ConcurrentHashMap`                               |
|         new | +256.015 KiB |   0.0% → 9.8% |       0 B → 256 KiB |   0 → 1 | `storeString(String)`                                                                                                  | `jdk.jfr.internal.StringPool`                                          |
|         new | +256.015 KiB |   0.0% → 9.8% |       0 B → 256 KiB |   0 → 1 | `addString(String)`                                                                                                    | `jdk.jfr.internal.StringPool`                                          |
|         new | +256.015 KiB |   0.0% → 9.8% |       0 B → 256 KiB |   0 → 1 | `putString(String)`                                                                                                    | `jdk.jfr.internal.event.EventWriter`                                   |
|         new | +256.015 KiB |   0.0% → 9.8% |       0 B → 256 KiB |   0 → 1 | `commit(long, long, long, String, String, boolean, long, long, long, long, long)`                                      | `jdk.jfr.events.ActiveRecordingEvent`                                  |
|         new | +256.015 KiB |   0.0% → 9.8% |       0 B → 256 KiB |   0 → 1 | `writeMetaEvents()`                                                                                                    | `jdk.jfr.internal.PlatformRecorder`                                    |
|         new | +256.015 KiB |   0.0% → 9.8% |       0 B → 256 KiB |   0 → 1 | `start(PlatformRecording)`                                                                                             | `jdk.jfr.internal.PlatformRecorder`                                    |
|         new | +256.015 KiB |   0.0% → 9.8% |       0 B → 256 KiB |   0 → 1 | `start()`                                                                                                              | `jdk.jfr.internal.PlatformRecording`                                   |
|         new | +256.015 KiB |   0.0% → 9.8% |       0 B → 256 KiB |   0 → 1 | `start()`                                                                                                              | `jdk.jfr.Recording`                                                    |
|         new | +256.015 KiB |   0.0% → 9.8% |       0 B → 256 KiB |   0 → 1 | `execute(ArgumentParser)`                                                                                              | `jdk.jfr.internal.dcmd.DCmdStart`                                      |
|         new | +256.015 KiB |   0.0% → 9.8% |       0 B → 256 KiB |   0 → 1 | `execute(String, String, char)`                                                                                        | `jdk.jfr.internal.dcmd.AbstractDCmd`                                   |
|      +12.1% | +255.125 KiB | 89.2% → 90.2% | 2.06 MiB → 2.31 MiB |   6 → 7 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000c80119c3b8` |
|      +12.1% | +255.125 KiB | 89.2% → 90.2% | 2.06 MiB → 2.31 MiB |   6 → 7 | `apply(Object)`                                                                                                        | `scala.runtime.function.JProcedure1`                                   |
|      +12.1% | +255.125 KiB | 89.2% → 90.2% | 2.06 MiB → 2.31 MiB |   6 → 7 | `foreach(Function1)`                                                                                                   | `scala.collection.immutable.List`                                      |
|      +12.1% | +255.125 KiB | 89.2% → 90.2% | 2.06 MiB → 2.31 MiB |   6 → 7 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
|         new | +255.117 KiB |   0.0% → 9.7% |       0 B → 255 KiB |   0 → 2 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)`                           | `org.renaissance.harness.ExecutionDriver`                              |

##### Standard library

|      Change |        Delta |             % |                Size | Objects | Function                                                                          | Location                                                 |
| ----------: | -----------: | ------------: | ------------------: | ------: | --------------------------------------------------------------------------------- | -------------------------------------------------------- |
| +5402120.0% |    +2.06 MiB | <0.1% → 80.5% |     40 B → 2.06 MiB |       1 | `accept(Object, Object)`                                                          | `java.util.stream.Collectors$$Lambda.0x000000c8010c40c8` |
|         new | +256.015 KiB |   0.0% → 9.8% |       0 B → 256 KiB |   0 → 1 | `initTable()`                                                                     | `java.util.concurrent.ConcurrentHashMap`                 |
|         new | +256.015 KiB |   0.0% → 9.8% |       0 B → 256 KiB |   0 → 1 | `putVal(Object, Object, boolean)`                                                 | `java.util.concurrent.ConcurrentHashMap`                 |
|         new | +256.015 KiB |   0.0% → 9.8% |       0 B → 256 KiB |   0 → 1 | `put(Object, Object)`                                                             | `java.util.concurrent.ConcurrentHashMap`                 |
|         new | +256.015 KiB |   0.0% → 9.8% |       0 B → 256 KiB |   0 → 1 | `storeString(String)`                                                             | `jdk.jfr.internal.StringPool`                            |
|         new | +256.015 KiB |   0.0% → 9.8% |       0 B → 256 KiB |   0 → 1 | `addString(String)`                                                               | `jdk.jfr.internal.StringPool`                            |
|         new | +256.015 KiB |   0.0% → 9.8% |       0 B → 256 KiB |   0 → 1 | `putString(String)`                                                               | `jdk.jfr.internal.event.EventWriter`                     |
|         new | +256.015 KiB |   0.0% → 9.8% |       0 B → 256 KiB |   0 → 1 | `commit(long, long, long, String, String, boolean, long, long, long, long, long)` | `jdk.jfr.events.ActiveRecordingEvent`                    |
|         new | +256.015 KiB |   0.0% → 9.8% |       0 B → 256 KiB |   0 → 1 | `writeMetaEvents()`                                                               | `jdk.jfr.internal.PlatformRecorder`                      |
|         new | +256.015 KiB |   0.0% → 9.8% |       0 B → 256 KiB |   0 → 1 | `start(PlatformRecording)`                                                        | `jdk.jfr.internal.PlatformRecorder`                      |
|         new | +256.015 KiB |   0.0% → 9.8% |       0 B → 256 KiB |   0 → 1 | `start()`                                                                         | `jdk.jfr.internal.PlatformRecording`                     |
|         new | +256.015 KiB |   0.0% → 9.8% |       0 B → 256 KiB |   0 → 1 | `start()`                                                                         | `jdk.jfr.Recording`                                      |
|         new | +256.015 KiB |   0.0% → 9.8% |       0 B → 256 KiB |   0 → 1 | `execute(ArgumentParser)`                                                         | `jdk.jfr.internal.dcmd.DCmdStart`                        |
|         new | +256.015 KiB |   0.0% → 9.8% |       0 B → 256 KiB |   0 → 1 | `execute(String, String, char)`                                                   | `jdk.jfr.internal.dcmd.AbstractDCmd`                     |
|      +12.1% | +255.125 KiB | 89.2% → 90.2% | 2.06 MiB → 2.31 MiB |   6 → 7 | `apply(Object)`                                                                   | `scala.runtime.function.JProcedure1`                     |
|      +12.1% | +255.125 KiB | 89.2% → 90.2% | 2.06 MiB → 2.31 MiB |   6 → 7 | `foreach(Function1)`                                                              | `scala.collection.immutable.List`                        |
|         new | +255.085 KiB |   0.0% → 9.7% |       0 B → 255 KiB |   0 → 1 | `getDeclaredConstructors0(boolean)`                                               | `java.lang.Class`                                        |
|         new | +255.085 KiB |   0.0% → 9.7% |       0 B → 255 KiB |   0 → 1 | `privateGetDeclaredConstructors(boolean)`                                         | `java.lang.Class`                                        |
|         new | +255.085 KiB |   0.0% → 9.7% |       0 B → 255 KiB |   0 → 1 | `getConstructor0(Class[], int)`                                                   | `java.lang.Class`                                        |
|         new | +255.085 KiB |   0.0% → 9.7% |       0 B → 255 KiB |   0 → 1 | `getDeclaredConstructor(Class[])`                                                 | `java.lang.Class`                                        |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

|  Change |     Delta |              % |           Size | Objects | Function                                                                                                               | Location                                                 |
| ------: | --------: | -------------: | -------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| removed | -2.06 MiB |   89.2% → 0.0% | 2.06 MiB → 0 B |   6 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`              |
| removed | -2.06 MiB |   89.2% → 0.0% | 2.06 MiB → 0 B |   1 → 0 | `accept(Object, Object)`                                                                                               | `java.util.stream.Collectors$$Lambda.0x00000005010c40c8` |
| removed |    -160 B |   <0.1% → 0.0% |    160 B → 0 B |   2 → 0 | `defineClass(String, byte[], int, int, ProtectionDomain)`                                                              | `java.lang.ClassLoader`                                  |
| removed |    -160 B |   <0.1% → 0.0% |    160 B → 0 B |   2 → 0 | `defineClass(String, byte[], int, int, CodeSource)`                                                                    | `java.security.SecureClassLoader`                        |
|   -0.1% |    -136 B |   10.8% → 9.7% |        255 KiB |   3 → 2 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)`                                            | `java.security.AccessController`                         |
|   -0.1% |    -136 B |   10.8% → 9.7% |        255 KiB |   3 → 2 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)`                                                        | `java.security.AccessController`                         |
|   -0.1% |    -136 B |   10.8% → 9.7% |        255 KiB |   3 → 2 | `run()`                                                                                                                | `java.net.URLClassLoader$1`                              |
|   -0.1% |    -136 B |   10.8% → 9.7% |        255 KiB |   3 → 2 | `findClass(String)`                                                                                                    | `java.net.URLClassLoader`                                |
|   -0.1% |    -136 B |   10.8% → 9.7% |        255 KiB |   3 → 2 | `loadClass(String, boolean)`                                                                                           | `java.lang.ClassLoader`                                  |
|   -0.1% |    -136 B |   10.8% → 9.7% |        255 KiB |   3 → 2 | `loadClass(String)`                                                                                                    | `java.lang.ClassLoader`                                  |
|     ~0% |    -136 B | 100.0% → 90.2% |       2.31 MiB |  10 → 8 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`               |
|     ~0% |    -136 B | 100.0% → 90.2% |       2.31 MiB |  10 → 8 | `invokeStatic(Object, Object)`                                                                                         | `java.lang.invoke.LambdaForm$DMH.0x000000c801001c00`     |
|     ~0% |    -136 B | 100.0% → 90.2% |       2.31 MiB |  10 → 8 | `invoke(Object, Object, Object)`                                                                                       | `java.lang.invoke.LambdaForm$MH.0x000000c801082400`      |
|     ~0% |    -136 B | 100.0% → 90.2% |       2.31 MiB |  10 → 8 | `invokeExact_MT(Object, Object, Object, Object)`                                                                       | `java.lang.invoke.Invokers$Holder`                       |
|     ~0% |    -136 B | 100.0% → 90.2% |       2.31 MiB |  10 → 8 | `invokeImpl(Object, Object[])`                                                                                         | `jdk.internal.reflect.DirectMethodHandleAccessor`        |
|     ~0% |    -136 B | 100.0% → 90.2% |       2.31 MiB |  10 → 8 | `invoke(Object, Object[])`                                                                                             | `jdk.internal.reflect.DirectMethodHandleAccessor`        |
|     ~0% |    -136 B | 100.0% → 90.2% |       2.31 MiB |  10 → 8 | `invoke(Object, Object[])`                                                                                             | `java.lang.reflect.Method`                               |
|     ~0% |    -136 B | 100.0% → 90.2% |       2.31 MiB |  10 → 8 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                          |
|     ~0% |    -136 B | 100.0% → 90.2% |       2.31 MiB |  10 → 8 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                          |
|     ~0% |    -136 B | 100.0% → 90.2% |       2.31 MiB |  10 → 8 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                          |

##### Standard library

|  Change |     Delta |              % |           Size | Objects | Function                                                                        | Location                                                 |
| ------: | --------: | -------------: | -------------: | ------: | ------------------------------------------------------------------------------- | -------------------------------------------------------- |
| removed | -2.06 MiB |   89.2% → 0.0% | 2.06 MiB → 0 B |   1 → 0 | `accept(Object, Object)`                                                        | `java.util.stream.Collectors$$Lambda.0x00000005010c40c8` |
| removed |    -160 B |   <0.1% → 0.0% |    160 B → 0 B |   2 → 0 | `defineClass(String, byte[], int, int, ProtectionDomain)`                       | `java.lang.ClassLoader`                                  |
| removed |    -160 B |   <0.1% → 0.0% |    160 B → 0 B |   2 → 0 | `defineClass(String, byte[], int, int, CodeSource)`                             | `java.security.SecureClassLoader`                        |
|   -0.1% |    -136 B |   10.8% → 9.7% |        255 KiB |   3 → 2 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)`     | `java.security.AccessController`                         |
|   -0.1% |    -136 B |   10.8% → 9.7% |        255 KiB |   3 → 2 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)`                 | `java.security.AccessController`                         |
|   -0.1% |    -136 B |   10.8% → 9.7% |        255 KiB |   3 → 2 | `run()`                                                                         | `java.net.URLClassLoader$1`                              |
|   -0.1% |    -136 B |   10.8% → 9.7% |        255 KiB |   3 → 2 | `findClass(String)`                                                             | `java.net.URLClassLoader`                                |
|   -0.1% |    -136 B |   10.8% → 9.7% |        255 KiB |   3 → 2 | `loadClass(String, boolean)`                                                    | `java.lang.ClassLoader`                                  |
|   -0.1% |    -136 B |   10.8% → 9.7% |        255 KiB |   3 → 2 | `loadClass(String)`                                                             | `java.lang.ClassLoader`                                  |
|     ~0% |    -136 B | 100.0% → 90.2% |       2.31 MiB |  10 → 8 | `invokeStatic(Object, Object)`                                                  | `java.lang.invoke.LambdaForm$DMH.0x000000c801001c00`     |
|     ~0% |    -136 B | 100.0% → 90.2% |       2.31 MiB |  10 → 8 | `invoke(Object, Object, Object)`                                                | `java.lang.invoke.LambdaForm$MH.0x000000c801082400`      |
|     ~0% |    -136 B | 100.0% → 90.2% |       2.31 MiB |  10 → 8 | `invokeExact_MT(Object, Object, Object, Object)`                                | `java.lang.invoke.Invokers$Holder`                       |
|     ~0% |    -136 B | 100.0% → 90.2% |       2.31 MiB |  10 → 8 | `invokeImpl(Object, Object[])`                                                  | `jdk.internal.reflect.DirectMethodHandleAccessor`        |
|     ~0% |    -136 B | 100.0% → 90.2% |       2.31 MiB |  10 → 8 | `invoke(Object, Object[])`                                                      | `jdk.internal.reflect.DirectMethodHandleAccessor`        |
|     ~0% |    -136 B | 100.0% → 90.2% |       2.31 MiB |  10 → 8 | `invoke(Object, Object[])`                                                      | `java.lang.reflect.Method`                               |
|  -85.0% |    -136 B |          <0.1% |   160 B → 24 B |   2 → 1 | `defineClass(String, Resource)`                                                 | `java.net.URLClassLoader`                                |
| removed |    -112 B |   <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                                  |
|  -60.0% |     -72 B |          <0.1% |   120 B → 48 B |   5 → 2 | `valueOf(double)`                                                               | `java.lang.Double`                                       |
| removed |     -48 B |   <0.1% → 0.0% |     48 B → 0 B |   1 → 0 | `initClassName()`                                                               | `java.lang.Class`                                        |
| removed |     -48 B |   <0.1% → 0.0% |     48 B → 0 B |   1 → 0 | `getName()`                                                                     | `java.lang.Class`                                        |

# Lock contention profile diff

Blocked 7.46s → 8.98s (+1.521s, +20.4%) over 68 contentions → 87 contentions (109.8ms → 103.3ms per contention).

| Category         | Change |   Delta |      % |          Time | Contentions |
| ---------------- | -----: | ------: | -----: | ------------: | ----------: |
| Standard library | +20.4% | +1.521s | 100.0% | 7.46s → 8.98s |     68 → 87 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time blocked directly in the function body, excluding callees.

##### Standard library

| Change |   Delta |      % |          Time | Contentions | Function              | Location                   |
| -----: | ------: | -----: | ------------: | ----------: | --------------------- | -------------------------- |
| +20.4% | +1.521s | 100.0% | 7.46s → 8.98s |     68 → 87 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

| Change |     Delta |             % |          Time | Contentions | Function                                                                                                               | Location                                                               |
| -----: | --------: | ------------: | ------------: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|    new |   +6.947s |  0.0% → 77.3% |   0ms → 6.94s |      0 → 16 | `$anonfun$2(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|    new |   +6.947s |  0.0% → 77.3% |   0ms → 6.94s |      0 → 16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
| +21.6% |   +1.534s | 95.1% → 96.1% | 7.10s → 8.63s |     56 → 77 | `park()`                                                                                                               | `java.util.concurrent.locks.LockSupport`                               |
| +20.4% |   +1.521s |        100.0% | 7.46s → 8.98s |     68 → 87 | `park(boolean, long)`                                                                                                  | `jdk.internal.misc.Unsafe`                                             |
| +15.6% | +947.13ms | 81.0% → 77.9% | 6.05s → 6.99s |     18 → 17 | `awaitDone(int, long)`                                                                                                 | `java.util.concurrent.ForkJoinTask`                                    |
| +15.4% | +926.44ms | 80.6% → 77.3% | 6.02s → 6.94s |          16 | `get()`                                                                                                                | `java.util.concurrent.ForkJoinTask`                                    |
| +15.4% | +926.44ms | 80.6% → 77.3% | 6.02s → 6.94s |          16 | `run(int, List, int)`                                                                                                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| +15.4% | +926.44ms | 80.6% → 77.3% | 6.02s → 6.94s |          16 | `$anonfun$adapted$1(Object)`                                                                                           | `org.renaissance.jdk.concurrent.FjKmeans`                              |
| +15.4% | +926.44ms | 80.6% → 77.3% | 6.02s → 6.94s |          16 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000c80121db90`   |
| +15.4% | +926.44ms | 80.6% → 77.3% | 6.02s → 6.94s |          16 | `map(Function1)`                                                                                                       | `scala.collection.immutable.Range`                                     |
| +15.4% | +926.44ms | 80.6% → 77.3% | 6.02s → 6.94s |          16 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                              |
| +15.4% | +926.44ms | 80.6% → 77.3% | 6.02s → 6.94s |          16 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |
| +15.4% | +926.44ms | 80.6% → 77.3% | 6.02s → 6.94s |          16 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
| +15.4% | +926.44ms | 80.6% → 77.3% | 6.02s → 6.94s |          16 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000c80119c3b8` |
| +15.4% | +926.44ms | 80.6% → 77.3% | 6.02s → 6.94s |          16 | `apply(Object)`                                                                                                        | `scala.runtime.function.JProcedure1`                                   |
| +15.4% | +926.44ms | 80.6% → 77.3% | 6.02s → 6.94s |          16 | `foreach(Function1)`                                                                                                   | `scala.collection.immutable.List`                                      |
| +15.4% | +926.44ms | 80.6% → 77.3% | 6.02s → 6.94s |          16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
| +15.4% | +926.44ms | 80.6% → 77.3% | 6.02s → 6.94s |          16 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
| +15.4% | +926.44ms | 80.6% → 77.3% | 6.02s → 6.94s |          16 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
| +15.4% | +926.44ms | 80.6% → 77.3% | 6.02s → 6.94s |          16 | `invokeStatic(Object, Object)`                                                                                         | `java.lang.invoke.LambdaForm$DMH.0x000000c801001c00`                   |

##### Standard library

| Change |     Delta |             % |            Time | Contentions | Function                                             | Location                                             |
| -----: | --------: | ------------: | --------------: | ----------: | ---------------------------------------------------- | ---------------------------------------------------- |
| +21.6% |   +1.534s | 95.1% → 96.1% |   7.10s → 8.63s |     56 → 77 | `park()`                                             | `java.util.concurrent.locks.LockSupport`             |
| +20.4% |   +1.521s |        100.0% |   7.46s → 8.98s |     68 → 87 | `park(boolean, long)`                                | `jdk.internal.misc.Unsafe`                           |
| +15.6% | +947.13ms | 81.0% → 77.9% |   6.05s → 6.99s |     18 → 17 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                  |
| +15.4% | +926.44ms | 80.6% → 77.3% |   6.02s → 6.94s |          16 | `get()`                                              | `java.util.concurrent.ForkJoinTask`                  |
| +15.4% | +926.44ms | 80.6% → 77.3% |   6.02s → 6.94s |          16 | `map(Function1)`                                     | `scala.collection.immutable.Range`                   |
| +15.4% | +926.44ms | 80.6% → 77.3% |   6.02s → 6.94s |          16 | `apply(Object)`                                      | `scala.runtime.function.JProcedure1`                 |
| +15.4% | +926.44ms | 80.6% → 77.3% |   6.02s → 6.94s |          16 | `foreach(Function1)`                                 | `scala.collection.immutable.List`                    |
| +15.4% | +926.44ms | 80.6% → 77.3% |   6.02s → 6.94s |          16 | `invokeStatic(Object, Object)`                       | `java.lang.invoke.LambdaForm$DMH.0x000000c801001c00` |
| +15.4% | +926.44ms | 80.6% → 77.3% |   6.02s → 6.94s |          16 | `invoke(Object, Object, Object)`                     | `java.lang.invoke.LambdaForm$MH.0x000000c801082400`  |
| +15.4% | +926.44ms | 80.6% → 77.3% |   6.02s → 6.94s |          16 | `invokeExact_MT(Object, Object, Object, Object)`     | `java.lang.invoke.Invokers$Holder`                   |
| +15.4% | +926.44ms | 80.6% → 77.3% |   6.02s → 6.94s |          16 | `invokeImpl(Object, Object[])`                       | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
| +15.4% | +926.44ms | 80.6% → 77.3% |   6.02s → 6.94s |          16 | `invoke(Object, Object[])`                           | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
| +15.4% | +926.44ms | 80.6% → 77.3% |   6.02s → 6.94s |          16 | `invoke(Object, Object[])`                           | `java.lang.reflect.Method`                           |
| +41.1% | +594.58ms | 19.4% → 22.7% |   1.44s → 2.04s |     52 → 71 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                  |
| +41.1% | +594.58ms | 19.4% → 22.7% |   1.44s → 2.04s |     52 → 71 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`          |
| +40.5% | +573.89ms | 19.0% → 22.1% |   1.41s → 1.98s |     50 → 70 | `awaitWork(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                  |
| +66.9% |  +20.69ms |   0.4% → 0.6% | 30.9ms → 51.6ms |       2 → 1 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                  |
| +66.9% |  +20.69ms |   0.4% → 0.6% | 30.9ms → 51.6ms |       2 → 1 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                 |
| +66.9% |  +20.69ms |   0.4% → 0.6% | 30.9ms → 51.6ms |       2 → 1 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                  |
| +66.9% |  +20.69ms |   0.4% → 0.6% | 30.9ms → 51.6ms |       2 → 1 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`        |

#### Improvements

Functions with the largest decrease in total time blocked in the function and all its callees.

|  Change |    Delta |            % |              Time | Contentions | Function                                                                                                               | Location                                                               |
| ------: | -------: | -----------: | ----------------: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| removed |  -6.021s | 80.6% → 0.0% |       6.02s → 0ms |      16 → 0 | `$anonfun$1(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`                              |
| removed |  -6.021s | 80.6% → 0.0% |       6.02s → 0ms |      16 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
| removed | -14.09ms |  0.2% → 0.0% |      14.1ms → 0ms |       1 → 0 | `invoke()`                                                                                                             | `java.util.concurrent.ForkJoinTask`                                    |
| removed | -14.09ms |  0.2% → 0.0% |      14.1ms → 0ms |       1 → 0 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed | -14.09ms |  0.2% → 0.0% |      14.1ms → 0ms |       1 → 0 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000005011ffbc0` |
| removed | -14.09ms |  0.2% → 0.0% |      14.1ms → 0ms |       1 → 0 | `exec()`                                                                                                               | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                    |
|   -3.7% | -13.48ms |  4.9% → 3.9% | 365.2ms → 351.7ms |     12 → 10 | `parkUntil(long)`                                                                                                      | `java.util.concurrent.locks.LockSupport`                               |

##### Standard library

|  Change |    Delta |           % |              Time | Contentions | Function          | Location                                            |
| ------: | -------: | ----------: | ----------------: | ----------: | ----------------- | --------------------------------------------------- |
| removed | -14.09ms | 0.2% → 0.0% |      14.1ms → 0ms |       1 → 0 | `invoke()`        | `java.util.concurrent.ForkJoinTask`                 |
| removed | -14.09ms | 0.2% → 0.0% |      14.1ms → 0ms |       1 → 0 | `exec()`          | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|   -3.7% | -13.48ms | 4.9% → 3.9% | 365.2ms → 351.7ms |     12 → 10 | `parkUntil(long)` | `java.util.concurrent.locks.LockSupport`            |

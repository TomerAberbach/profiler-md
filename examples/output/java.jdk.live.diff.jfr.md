# Sampling profile diff

Collected 1,593 samples → 1,202 samples (-391 samples, -24.5%).

| Category         | Change | Delta |             % |       Samples |
| ---------------- | -----: | ----: | ------------: | ------------: |
| Ours             | -25.6% |  -369 | 90.6% → 89.4% | 1,444 → 1,075 |
| Standard library | -14.8% |   -22 |  9.4% → 10.6% |     149 → 127 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                                  | Location                                                                              |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|     new |    +9 | 0.0% → 0.7% |   0 → 9 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                                                                   |
|   +6.5% |    +6 | 5.8% → 8.2% | 92 → 98 | `collectClusters(int[])`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +41.7% |    +5 | 0.8% → 1.4% | 12 → 17 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                                                   |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                                                   |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `unpark(Object)`                                          | `jdk.internal.misc.Unsafe`                                                            |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `<init>(HashMap)`                                         | `java.util.HashMap$HashIterator`                                                      |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `apply(Object)`                                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011fece0` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `forEachRemaining(Consumer)`                              | `java.util.Spliterator$OfDouble`                                                      |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `write0(FileDescriptor, long, int)`                       | `sun.nio.ch.UnixFileDispatcherImpl`                                                   |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `load0(Properties$LineReader)`                            | `java.util.Properties`                                                                |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `nanoTime()`                                              | `java.lang.System`                                                                    |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `forkThreshold()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `apply(int)`                                              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask$$Lambda.0x00000070011ffd70`     |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `accept(Object)`                                          | `java.util.stream.Nodes$FixedNodeBuilder`                                             |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `currentTimeMillis()`                                     | `java.lang.System`                                                                    |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `invokeStatic(Object, Object, Object)`                    | `java.lang.invoke.DirectMethodHandle$Holder`                                          |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `createSubtask(int, int)`                                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `resize()`                                                | `java.util.HashMap`                                                                   |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `uncompensate()`                                          | `java.util.concurrent.ForkJoinPool`                                                   |

##### Ours

|  Change | Delta |           % | Samples | Function                  | Location                                                                              |
| ------: | ----: | ----------: | ------: | ------------------------- | ------------------------------------------------------------------------------------- |
|   +6.5% |    +6 | 5.8% → 8.2% | 92 → 98 | `collectClusters(int[])`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `apply(Object)`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011fece0` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `forkThreshold()`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `apply(int)`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask$$Lambda.0x00000070011ffd70`     |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `createSubtask(int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                  | Location                                     |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------- | -------------------------------------------- |
|     new |    +9 | 0.0% → 0.7% |   0 → 9 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                          |
|  +41.7% |    +5 | 0.8% → 1.4% | 12 → 17 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`          |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`          |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `unpark(Object)`                                          | `jdk.internal.misc.Unsafe`                   |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `<init>(HashMap)`                                         | `java.util.HashMap$HashIterator`             |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `forEachRemaining(Consumer)`                              | `java.util.Spliterator$OfDouble`             |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `write0(FileDescriptor, long, int)`                       | `sun.nio.ch.UnixFileDispatcherImpl`          |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `load0(Properties$LineReader)`                            | `java.util.Properties`                       |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `nanoTime()`                                              | `java.lang.System`                           |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `accept(Object)`                                          | `java.util.stream.Nodes$FixedNodeBuilder`    |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `currentTimeMillis()`                                     | `java.lang.System`                           |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `invokeStatic(Object, Object, Object)`                    | `java.lang.invoke.DirectMethodHandle$Holder` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `resize()`                                                | `java.util.HashMap`                          |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `uncompensate()`                                          | `java.util.concurrent.ForkJoinPool`          |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                                    | Location                                                   |
| ------: | ----: | ------------: | --------: | ------------------------------------------- | ---------------------------------------------------------- |
|  -35.3% |  -224 | 39.9% → 34.2% | 635 → 411 | `accumulate(Double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -13.4% |   -53 | 24.8% → 28.5% | 395 → 342 | `distance(Double[], Double[])`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -19.5% |   -43 | 13.8% → 14.7% | 220 → 177 | `findNearestCentroid()`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -52.9% |   -27 |   3.2% → 2.0% |   51 → 24 | `vectorSum()`                               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -61.0% |   -25 |   2.6% → 1.3% |   41 → 16 | `computeDirectly()`                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -36.4% |   -12 |   2.1% → 1.7% |   33 → 21 | `copyOf(Object[], int)`                     | `java.util.Arrays`                                         |
|  -14.0% |    -8 |   3.6% → 4.1% |   57 → 49 | `computeIfAbsent(Object, Function)`         | `java.util.HashMap`                                        |
|  -66.7% |    -6 |   0.6% → 0.2% |     9 → 3 | `grow(int)`                                 | `java.util.ArrayList`                                      |
| removed |    -3 |   0.2% → 0.0% |     3 → 0 | `merge(Map, Map)`                           | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `doExec()`                                  | `java.util.concurrent.ForkJoinTask`                        |
|  -66.7% |    -2 |   0.2% → 0.1% |     3 → 1 | `tryRemoveAndExec(ForkJoinTask, boolean)`   | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `join()`                                    | `java.util.concurrent.ForkJoinTask`                        |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `checkIndex(int, int)`                      | `java.util.Objects`                                        |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `tryCompensate(long, boolean)`              | `java.util.concurrent.ForkJoinPool`                        |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `afterNodeInsertion(boolean)`               | `java.util.LinkedHashMap`                                  |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `push(ForkJoinTask, ForkJoinPool, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `nextNode()`                                | `java.util.HashMap$HashIterator`                           |
|  -66.7% |    -2 |   0.2% → 0.1% |     3 → 1 | `lambda$merge$7(Map, Object, List)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `maybeInstantiateVerifier()`                | `java.util.jar.JarFile`                                    |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `hashCode()`                                | `java.lang.Object`                                         |

##### Ours

|  Change | Delta |             % |   Samples | Function                            | Location                                                   |
| ------: | ----: | ------------: | --------: | ----------------------------------- | ---------------------------------------------------------- |
|  -35.3% |  -224 | 39.9% → 34.2% | 635 → 411 | `accumulate(Double[], double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -13.4% |   -53 | 24.8% → 28.5% | 395 → 342 | `distance(Double[], Double[])`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -19.5% |   -43 | 13.8% → 14.7% | 220 → 177 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -52.9% |   -27 |   3.2% → 2.0% |   51 → 24 | `vectorSum()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -61.0% |   -25 |   2.6% → 1.3% |   41 → 16 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |    -3 |   0.2% → 0.0% |     3 → 0 | `merge(Map, Map)`                   | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -66.7% |    -2 |   0.2% → 0.1% |     3 → 1 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `lambda$merge$6(List, List)`        | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `createSubtask(int, int)`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### Standard library

|  Change | Delta |           % | Samples | Function                                    | Location                                        |
| ------: | ----: | ----------: | ------: | ------------------------------------------- | ----------------------------------------------- |
|  -36.4% |   -12 | 2.1% → 1.7% | 33 → 21 | `copyOf(Object[], int)`                     | `java.util.Arrays`                              |
|  -14.0% |    -8 | 3.6% → 4.1% | 57 → 49 | `computeIfAbsent(Object, Function)`         | `java.util.HashMap`                             |
|  -66.7% |    -6 | 0.6% → 0.2% |   9 → 3 | `grow(int)`                                 | `java.util.ArrayList`                           |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `doExec()`                                  | `java.util.concurrent.ForkJoinTask`             |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `tryRemoveAndExec(ForkJoinTask, boolean)`   | `java.util.concurrent.ForkJoinPool$WorkQueue`   |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `join()`                                    | `java.util.concurrent.ForkJoinTask`             |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `checkIndex(int, int)`                      | `java.util.Objects`                             |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `tryCompensate(long, boolean)`              | `java.util.concurrent.ForkJoinPool`             |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `afterNodeInsertion(boolean)`               | `java.util.LinkedHashMap`                       |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `push(ForkJoinTask, ForkJoinPool, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue`   |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `nextNode()`                                | `java.util.HashMap$HashIterator`                |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `maybeInstantiateVerifier()`                | `java.util.jar.JarFile`                         |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `hashCode()`                                | `java.lang.Object`                              |
|  -33.3% |    -1 |        0.2% |   3 → 2 | `accept(Object)`                            | `java.util.stream.ReduceOps$3ReducingSink`      |
|  -50.0% |    -1 |        0.1% |   2 → 1 | `wrapSink(Sink)`                            | `java.util.stream.AbstractPipeline`             |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `runWorker(ForkJoinPool$WorkQueue)`         | `java.util.concurrent.ForkJoinPool`             |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `awaitWork(ForkJoinPool$WorkQueue)`         | `java.util.concurrent.ForkJoinPool`             |
|  -33.3% |    -1 |        0.2% |   3 → 2 | `park(boolean, long)`                       | `jdk.internal.misc.Unsafe`                      |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `contains(Object)`                          | `java.util.Collections$UnmodifiableCollection`  |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `forEachRemaining(DoubleConsumer)`          | `java.util.Spliterators$DoubleArraySpliterator` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |           % | Samples | Function                                                                                                               | Location                                                               |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|  +50.0% |   +11 | 1.4% → 2.7% | 22 → 33 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fdf70` |
|  +50.0% |    +9 | 1.1% → 2.2% | 18 → 27 | `exec()`                                                                                                               | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                    |
|  +26.9% |    +7 | 1.6% → 2.7% | 26 → 33 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| +200.0% |    +6 | 0.2% → 0.7% |   3 → 9 | `merge(Object, Object, BiFunction)`                                                                                    | `java.util.HashMap`                                                    |
|     new |    +6 | 0.0% → 0.5% |   0 → 6 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +66.7% |    +4 | 0.4% → 0.8% |  6 → 10 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +66.7% |    +4 | 0.4% → 0.8% |  6 → 10 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ff178` |
|  +66.7% |    +4 | 0.4% → 0.8% |  6 → 10 | `forEach(BiConsumer)`                                                                                                  | `java.util.HashMap`                                                    |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `unpark(Object)`                                                                                                       | `jdk.internal.misc.Unsafe`                                             |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `unpark(Thread)`                                                                                                       | `java.util.concurrent.locks.LockSupport`                               |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `boxed(double[])`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `<init>(HashMap)`                                                                                                      | `java.util.HashMap$HashIterator`                                       |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `<init>(HashMap)`                                                                                                      | `java.util.HashMap$EntryIterator`                                      |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `iterator()`                                                                                                           | `java.util.HashMap$EntrySet`                                           |
|  +33.3% |    +1 | 0.2% → 0.3% |   3 → 4 | `transferTo(OutputStream)`                                                                                             | `java.io.InputStream`                                                  |
|  +33.3% |    +1 | 0.2% → 0.3% |   3 → 4 | `copy(InputStream, Path, CopyOption[])`                                                                                | `java.nio.file.Files`                                                  |
|  +33.3% |    +1 | 0.2% → 0.3% |   3 → 4 | `extractResource(String, Path)`                                                                                        | `org.renaissance.core.ResourceUtils`                                   |
|  +33.3% |    +1 | 0.2% → 0.3% |   3 → 4 | `extractResources(Iterable, Path)`                                                                                     | `org.renaissance.core.ResourceUtils`                                   |
|  +33.3% |    +1 | 0.2% → 0.3% |   3 → 4 | `createClassLoaderForModule(String)`                                                                                   | `org.renaissance.core.ModuleLoader`                                    |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `getBenchmarkClassLoader(BenchmarkDescriptor)`                                                                         | `org.renaissance.core.BenchmarkSuite`                                  |

##### Ours

|  Change | Delta |           % | Samples | Function                                                                                                               | Location                                                                              |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|  +50.0% |   +11 | 1.4% → 2.7% | 22 → 33 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fdf70`                |
|  +26.9% |    +7 | 1.6% → 2.7% | 26 → 33 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|     new |    +6 | 0.0% → 0.5% |   0 → 6 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                           |
|  +66.7% |    +4 | 0.4% → 0.8% |  6 → 10 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  +66.7% |    +4 | 0.4% → 0.8% |  6 → 10 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ff178`                |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `boxed(double[])`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|  +33.3% |    +1 | 0.2% → 0.3% |   3 → 4 | `extractResource(String, Path)`                                                                                        | `org.renaissance.core.ResourceUtils`                                                  |
|  +33.3% |    +1 | 0.2% → 0.3% |   3 → 4 | `extractResources(Iterable, Path)`                                                                                     | `org.renaissance.core.ResourceUtils`                                                  |
|  +33.3% |    +1 | 0.2% → 0.3% |   3 → 4 | `createClassLoaderForModule(String)`                                                                                   | `org.renaissance.core.ModuleLoader`                                                   |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `getBenchmarkClassLoader(BenchmarkDescriptor)`                                                                         | `org.renaissance.core.BenchmarkSuite`                                                 |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `createBenchmark(BenchmarkDescriptor)`                                                                                 | `org.renaissance.core.BenchmarkSuite`                                                 |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)`                           | `org.renaissance.harness.ExecutionDriver`                                             |
|  +16.7% |    +1 | 0.4% → 0.6% |   6 → 7 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                                           |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011fece0` |
|   +7.1% |    +1 | 0.9% → 1.2% | 14 → 15 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   +7.1% |    +1 | 0.9% → 1.2% | 14 → 15 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `loadProperties(URL)`                                                                                                  | `org.renaissance.core.ResourceUtils`                                                  |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `loadPropertiesAsMap(URL)`                                                                                             | `org.renaissance.core.ResourceUtils`                                                  |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `create(Path, String, Optional, Map, boolean)`                                                                         | `org.renaissance.core.BenchmarkSuite`                                                 |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `$anonfun$1(Path, Config)`                                                                                             | `org.renaissance.harness.RenaissanceSuite$`                                           |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                                                           | Location                                            |
| ------: | ----: | ----------: | ------: | -------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
|  +50.0% |    +9 | 1.1% → 2.2% | 18 → 27 | `exec()`                                                                                           | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
| +200.0% |    +6 | 0.2% → 0.7% |   3 → 9 | `merge(Object, Object, BiFunction)`                                                                | `java.util.HashMap`                                 |
|  +66.7% |    +4 | 0.4% → 0.8% |  6 → 10 | `forEach(BiConsumer)`                                                                              | `java.util.HashMap`                                 |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `unpark(Object)`                                                                                   | `jdk.internal.misc.Unsafe`                          |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `unpark(Thread)`                                                                                   | `java.util.concurrent.locks.LockSupport`            |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `<init>(HashMap)`                                                                                  | `java.util.HashMap$HashIterator`                    |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `<init>(HashMap)`                                                                                  | `java.util.HashMap$EntryIterator`                   |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `iterator()`                                                                                       | `java.util.HashMap$EntrySet`                        |
|  +33.3% |    +1 | 0.2% → 0.3% |   3 → 4 | `transferTo(OutputStream)`                                                                         | `java.io.InputStream`                               |
|  +33.3% |    +1 | 0.2% → 0.3% |   3 → 4 | `copy(InputStream, Path, CopyOption[])`                                                            | `java.nio.file.Files`                               |
|  +33.3% |    +1 | 0.2% → 0.3% |   3 → 4 | `evaluate(Spliterator, boolean, IntFunction)`                                                      | `java.util.stream.AbstractPipeline`                 |
|  +33.3% |    +1 | 0.2% → 0.3% |   3 → 4 | `evaluateToArrayNode(IntFunction)`                                                                 | `java.util.stream.AbstractPipeline`                 |
|  +33.3% |    +1 | 0.2% → 0.3% |   3 → 4 | `toArray(IntFunction)`                                                                             | `java.util.stream.ReferencePipeline`                |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `signalWaiters()`                                                                                  | `java.util.concurrent.ForkJoinTask`                 |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `setDone()`                                                                                        | `java.util.concurrent.ForkJoinTask`                 |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `forEachRemaining(Consumer)`                                                                       | `java.util.Spliterator$OfDouble`                    |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `write0(FileDescriptor, long, int)`                                                                | `sun.nio.ch.UnixFileDispatcherImpl`                 |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `write(FileDescriptor, long, int)`                                                                 | `sun.nio.ch.UnixFileDispatcherImpl`                 |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `writeFromNativeBuffer(FileDescriptor, ByteBuffer, long, boolean, boolean, int, NativeDispatcher)` | `sun.nio.ch.IOUtil`                                 |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `write(FileDescriptor, ByteBuffer, long, boolean, boolean, int, NativeDispatcher)`                 | `sun.nio.ch.IOUtil`                                 |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |             % |       Samples | Function                                                  | Location                                                   |
| -----: | ----: | ------------: | ------------: | --------------------------------------------------------- | ---------------------------------------------------------- |
| -25.9% |  -400 | 97.0% → 95.3% | 1,545 → 1,145 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                        |
| -25.8% |  -399 | 96.9% → 95.3% | 1,544 → 1,145 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                        |
| -25.8% |  -394 | 96.0% → 94.5% | 1,530 → 1,136 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| -24.7% |  -390 | 99.1% → 98.9% | 1,579 → 1,189 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                        |
| -24.7% |  -389 | 98.9% → 98.8% | 1,576 → 1,187 | `compute()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
| -24.7% |  -389 | 98.9% → 98.8% | 1,576 → 1,187 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                       |
| -31.0% |  -386 | 78.2% → 71.5% |   1,245 → 859 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| -30.7% |  -372 | 76.0% → 69.7% |   1,210 → 838 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                        |
| -31.2% |  -367 | 73.8% → 67.2% |   1,175 → 808 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`                |
| -30.2% |  -365 | 75.9% → 70.2% |   1,209 → 844 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                        |
| -36.7% |  -252 | 43.1% → 36.2% |     687 → 435 | `vectorSum()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| -36.7% |  -252 | 43.1% → 36.2% |     687 → 435 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| -35.3% |  -224 | 39.9% → 34.2% |     635 → 411 | `accumulate(Double[], double[])`                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| -16.4% |  -139 | 53.2% → 58.9% |     847 → 708 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -23.2% |   -98 | 26.6% → 27.0% |     423 → 325 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                        |
| -15.7% |   -97 | 38.7% → 43.2% |     616 → 519 | `findNearestCentroid()`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -30.0% |   -77 | 16.1% → 15.0% |     257 → 180 | `average(List)`                                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| -28.8% |   -74 | 16.1% → 15.2% |     257 → 183 | `computeClusterAverages()`                                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| -25.5% |   -70 | 17.2% → 17.0% |     274 → 204 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                        |
| -28.0% |   -69 | 15.4% → 14.7% |     246 → 177 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

##### Ours

|  Change | Delta |             % |       Samples | Function                                                                                                               | Location                                                               |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|  -24.7% |  -389 | 98.9% → 98.8% | 1,576 → 1,187 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  -36.7% |  -252 | 43.1% → 36.2% |     687 → 435 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -36.7% |  -252 | 43.1% → 36.2% |     687 → 435 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -35.3% |  -224 | 39.9% → 34.2% |     635 → 411 | `accumulate(Double[], double[])`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -16.4% |  -139 | 53.2% → 58.9% |     847 → 708 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -15.7% |   -97 | 38.7% → 43.2% |     616 → 519 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -30.0% |   -77 | 16.1% → 15.0% |     257 → 180 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -28.8% |   -74 | 16.1% → 15.2% |     257 → 183 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -28.0% |   -69 | 15.4% → 14.7% |     246 → 177 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -13.4% |   -53 | 24.8% → 28.5% |     395 → 342 | `distance(Double[], Double[])`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -8.9% |   -17 | 11.9% → 14.4% |     190 → 173 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed |    -6 |   0.4% → 0.0% |         6 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
| removed |    -3 |   0.2% → 0.0% |         3 → 0 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed |    -3 |   0.2% → 0.0% |         3 → 0 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0` |
|  -40.0% |    -2 |   0.3% → 0.2% |         5 → 3 | `generateData(int, int, int)`                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -40.0% |    -2 |   0.3% → 0.2% |         5 → 3 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | `org.renaissance.jdk.concurrent.FjKmeans`                              |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `apply(int, Seq)`                                                                                                      | `scopt.OptionDef`                                                      |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `runParser(Seq, Object, List, OParserSetup)`                                                                           | `scopt.ORunner$`                                                       |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `parse(Seq, Object)`                                                                                                   | `scopt.OptionParser`                                                   |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `parse(String[])`                                                                                                      | `org.renaissance.harness.ConfigParser`                                 |

##### Standard library

| Change | Delta |             % |       Samples | Function                                                  | Location                                      |
| -----: | ----: | ------------: | ------------: | --------------------------------------------------------- | --------------------------------------------- |
| -25.9% |  -400 | 97.0% → 95.3% | 1,545 → 1,145 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`           |
| -25.8% |  -399 | 96.9% → 95.3% | 1,544 → 1,145 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`           |
| -25.8% |  -394 | 96.0% → 94.5% | 1,530 → 1,136 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| -24.7% |  -390 | 99.1% → 98.9% | 1,579 → 1,189 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`           |
| -24.7% |  -389 | 98.9% → 98.8% | 1,576 → 1,187 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`          |
| -31.0% |  -386 | 78.2% → 71.5% |   1,245 → 859 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| -30.7% |  -372 | 76.0% → 69.7% |   1,210 → 838 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`           |
| -31.2% |  -367 | 73.8% → 67.2% |   1,175 → 808 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`   |
| -30.2% |  -365 | 75.9% → 70.2% |   1,209 → 844 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`           |
| -23.2% |   -98 | 26.6% → 27.0% |     423 → 325 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
| -25.5% |   -70 | 17.2% → 17.0% |     274 → 204 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |
| -42.9% |   -18 |   2.6% → 2.0% |       42 → 24 | `grow(int)`                                               | `java.util.ArrayList`                         |
| -40.0% |   -16 |   2.5% → 2.0% |       40 → 24 | `grow()`                                                  | `java.util.ArrayList`                         |
| -40.0% |   -16 |   2.5% → 2.0% |       40 → 24 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                         |
| -40.0% |   -16 |   2.5% → 2.0% |       40 → 24 | `add(Object)`                                             | `java.util.ArrayList`                         |
| -36.4% |   -12 |   2.1% → 1.7% |       33 → 21 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                            |
| -12.1% |    -7 |   3.6% → 4.2% |       58 → 51 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                           |
| -50.0% |    -3 |   0.4% → 0.2% |         6 → 3 | `evaluate(TerminalOp)`                                    | `java.util.stream.AbstractPipeline`           |
| -50.0% |    -3 |   0.4% → 0.2% |         6 → 3 | `collect(Collector)`                                      | `java.util.stream.ReferencePipeline`          |
| -40.0% |    -2 |   0.3% → 0.2% |         5 → 3 | `accept(int)`                                             | `java.util.stream.IntPipeline$1$1`            |

# Allocated heap profile diff

Allocated 37.6 GiB → 37.7 GiB (+75.514 MiB, +0.2%) over 1,946 samples → 2,262 samples (19.8 MiB → 17.1 MiB per sample).

| Category         | Change |        Delta |             % |                Size |       Samples |
| ---------------- | -----: | -----------: | ------------: | ------------------: | ------------: |
| Standard library |  -1.0% | -353.767 MiB | 94.3% → 93.2% | 35.5 GiB → 35.1 GiB | 1,844 → 2,098 |
| Ours             | +19.7% | +429.281 MiB |   5.7% → 6.8% | 2.13 GiB → 2.55 GiB |     100 → 163 |
| Unknown          | -20.3% |       -496 B |         <0.1% |  2.38 KiB → 1.9 KiB |         2 → 1 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|   Change |        Delta |            % |                Size |       Samples | Function                                | Location                                                   |
| -------: | -----------: | -----------: | ------------------: | ------------: | --------------------------------------- | ---------------------------------------------------------- |
|      new | +233.126 MiB |  0.0% → 0.6% |       0 B → 233 MiB |        0 → 11 | `createSubtask(int, int)`               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +1563.6% |  +114.88 MiB | <0.1% → 0.3% |  7.35 MiB → 122 MiB |         2 → 8 | `add(double[], double[])`               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|    +8.9% | +112.029 MiB |  3.3% → 3.5% | 1.23 GiB → 1.34 GiB |       67 → 74 | `findNearestCentroid()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|      new |  +93.104 MiB |  0.0% → 0.2% |      0 B → 93.1 MiB |         0 → 1 | `<init>(JavaKMeans, Map)`               | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|   +48.5% |  +80.023 MiB |  0.4% → 0.6% |   165 MiB → 245 MiB |        5 → 11 | `createSubtask(int, int)`               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|    +0.2% |  +76.631 MiB |        92.3% | 34.7 GiB → 34.8 GiB | 1,688 → 1,909 | `copyOf(Object[], int)`                 | `java.util.Arrays`                                         |
|  +853.4% |  +67.523 MiB | <0.1% → 0.2% | 7.91 MiB → 75.4 MiB |         3 → 7 | `lambda$collectClusters$0(Double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|      new |  +41.812 MiB |  0.0% → 0.1% |      0 B → 41.8 MiB |         0 → 3 | `entrySet()`                            | `java.util.HashMap`                                        |
|      new |  +39.165 MiB |  0.0% → 0.1% |      0 B → 39.2 MiB |         0 → 2 | `computeClusterAverages()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|      new |  +23.279 MiB |  0.0% → 0.1% |      0 B → 23.3 MiB |         0 → 1 | `createSubtask(int, int)`               | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  +183.8% |  +18.772 MiB | <0.1% → 0.1% |   10.2 MiB → 29 MiB |       28 → 20 | `intStream(Spliterator$OfInt, boolean)` | `java.util.stream.StreamSupport`                           |
|      new |  +15.111 MiB | 0.0% → <0.1% |      0 B → 15.1 MiB |         0 → 5 | `vectorSum()`                           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +1512.6% |   +9.889 MiB |        <0.1% |  670 KiB → 10.5 MiB |        2 → 13 | `lambda$generateData$4(int)`            | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|   +97.0% |   +6.548 MiB |        <0.1% | 6.75 MiB → 13.3 MiB |       18 → 21 | `mapToObj(IntFunction, int)`            | `java.util.stream.IntPipeline`                             |
|  +305.5% |   +2.264 MiB |        <0.1% |  759 KiB → 3.01 MiB |         2 → 7 | `opWrapSink(int, Sink)`                 | `java.util.stream.IntPipeline$1`                           |
|   +12.9% |   +1.676 MiB |        <0.1% |   13 MiB → 14.7 MiB |       24 → 37 | `copyOf(byte[], int)`                   | `java.util.Arrays`                                         |
|      new |    +1.01 MiB | 0.0% → <0.1% |      0 B → 1.01 MiB |         0 → 2 | `allocateInstance(Object)`              | `java.lang.invoke.DirectMethodHandle`                      |
|      new | +932.859 KiB | 0.0% → <0.1% |       0 B → 933 KiB |         0 → 2 | `newLinkedHashMap(int)`                 | `java.util.LinkedHashMap`                                  |
|      new | +925.296 KiB | 0.0% → <0.1% |       0 B → 925 KiB |         0 → 2 | `addConstantUtf8(String)`               | `jdk.internal.org.objectweb.asm.SymbolTable`               |
|   +17.2% | +674.226 KiB |        <0.1% | 3.82 MiB → 4.48 MiB |            11 | `<init>(InputStream, Inflater, int)`    | `java.util.zip.InflaterInputStream`                        |

##### Standard library

|  Change |        Delta |            % |                Size |       Samples | Function                                                                        | Location                                     |
| ------: | -----------: | -----------: | ------------------: | ------------: | ------------------------------------------------------------------------------- | -------------------------------------------- |
|   +0.2% |  +76.631 MiB |        92.3% | 34.7 GiB → 34.8 GiB | 1,688 → 1,909 | `copyOf(Object[], int)`                                                         | `java.util.Arrays`                           |
|     new |  +41.812 MiB |  0.0% → 0.1% |      0 B → 41.8 MiB |         0 → 3 | `entrySet()`                                                                    | `java.util.HashMap`                          |
| +183.8% |  +18.772 MiB | <0.1% → 0.1% |   10.2 MiB → 29 MiB |       28 → 20 | `intStream(Spliterator$OfInt, boolean)`                                         | `java.util.stream.StreamSupport`             |
|  +97.0% |   +6.548 MiB |        <0.1% | 6.75 MiB → 13.3 MiB |       18 → 21 | `mapToObj(IntFunction, int)`                                                    | `java.util.stream.IntPipeline`               |
| +305.5% |   +2.264 MiB |        <0.1% |  759 KiB → 3.01 MiB |         2 → 7 | `opWrapSink(int, Sink)`                                                         | `java.util.stream.IntPipeline$1`             |
|  +12.9% |   +1.676 MiB |        <0.1% |   13 MiB → 14.7 MiB |       24 → 37 | `copyOf(byte[], int)`                                                           | `java.util.Arrays`                           |
|     new |    +1.01 MiB | 0.0% → <0.1% |      0 B → 1.01 MiB |         0 → 2 | `allocateInstance(Object)`                                                      | `java.lang.invoke.DirectMethodHandle`        |
|     new | +932.859 KiB | 0.0% → <0.1% |       0 B → 933 KiB |         0 → 2 | `newLinkedHashMap(int)`                                                         | `java.util.LinkedHashMap`                    |
|     new | +925.296 KiB | 0.0% → <0.1% |       0 B → 925 KiB |         0 → 2 | `addConstantUtf8(String)`                                                       | `jdk.internal.org.objectweb.asm.SymbolTable` |
|  +17.2% | +674.226 KiB |        <0.1% | 3.82 MiB → 4.48 MiB |            11 | `<init>(InputStream, Inflater, int)`                                            | `java.util.zip.InflaterInputStream`          |
|     new | +600.468 KiB | 0.0% → <0.1% |       0 B → 600 KiB |         0 → 2 | `<init>(InputStream, int)`                                                      | `java.util.jar.Manifest$FastInputStream`     |
| +141.8% | +543.046 KiB |        <0.1% |   383 KiB → 926 KiB |         1 → 2 | `readNBytes(int)`                                                               | `java.io.InputStream`                        |
|     new | +511.921 KiB | 0.0% → <0.1% |       0 B → 512 KiB |         0 → 1 | `run()`                                                                         | `jdk.internal.loader.URLClassPath$3`         |
|     new | +466.937 KiB | 0.0% → <0.1% |       0 B → 467 KiB |         0 → 1 | `awaitDone(int, long)`                                                          | `java.util.concurrent.ForkJoinTask`          |
|     new | +442.242 KiB | 0.0% → <0.1% |       0 B → 442 KiB |         0 → 1 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                      |
|     new | +410.679 KiB | 0.0% → <0.1% |       0 B → 411 KiB |         0 → 1 | `toString()`                                                                    | `java.lang.StringBuilder`                    |
|     new | +402.648 KiB | 0.0% → <0.1% |       0 B → 403 KiB |         0 → 1 | `releaseFence()`                                                                | `scala.runtime.Statics`                      |
|     new | +390.664 KiB | 0.0% → <0.1% |       0 B → 391 KiB |         0 → 1 | `newString(byte[], long)`                                                       | `java.lang.StringConcatHelper`               |
|     new | +390.648 KiB | 0.0% → <0.1% |       0 B → 391 KiB |         0 → 1 | `addConstantMemberReference(int, String, String, String)`                       | `jdk.internal.org.objectweb.asm.SymbolTable` |
|     new | +387.945 KiB | 0.0% → <0.1% |       0 B → 388 KiB |         0 → 1 | `replace(byte[], char, char)`                                                   | `java.lang.StringLatin1`                     |

##### Ours

|   Change |        Delta |            % |                Size | Samples | Function                             | Location                                                   |
| -------: | -----------: | -----------: | ------------------: | ------: | ------------------------------------ | ---------------------------------------------------------- |
|      new | +233.126 MiB |  0.0% → 0.6% |       0 B → 233 MiB |  0 → 11 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +1563.6% |  +114.88 MiB | <0.1% → 0.3% |  7.35 MiB → 122 MiB |   2 → 8 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|    +8.9% | +112.029 MiB |  3.3% → 3.5% | 1.23 GiB → 1.34 GiB | 67 → 74 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|      new |  +93.104 MiB |  0.0% → 0.2% |      0 B → 93.1 MiB |   0 → 1 | `<init>(JavaKMeans, Map)`            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|   +48.5% |  +80.023 MiB |  0.4% → 0.6% |   165 MiB → 245 MiB |  5 → 11 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +853.4% |  +67.523 MiB | <0.1% → 0.2% | 7.91 MiB → 75.4 MiB |   3 → 7 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|      new |  +39.165 MiB |  0.0% → 0.1% |      0 B → 39.2 MiB |   0 → 2 | `computeClusterAverages()`           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|      new |  +23.279 MiB |  0.0% → 0.1% |      0 B → 23.3 MiB |   0 → 1 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|      new |  +15.111 MiB | 0.0% → <0.1% |      0 B → 15.1 MiB |   0 → 5 | `vectorSum()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +1512.6% |   +9.889 MiB |        <0.1% |  670 KiB → 10.5 MiB |  2 → 13 | `lambda$generateData$4(int)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|      new | +388.648 KiB | 0.0% → <0.1% |       0 B → 389 KiB |   0 → 1 | `main(String[])`                     | `org.renaissance.harness.RenaissanceSuite$`                |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |        Delta |            % |                Size | Samples | Function                                                                                                                 | Location                                                   |
| ------: | -----------: | -----------: | ------------------: | ------: | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------- |
|  -70.7% | -213.921 MiB |  0.8% → 0.2% |  303 MiB → 88.6 MiB |  10 → 6 | `lambda$merge$6(List, List)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed | -160.198 MiB |  0.4% → 0.0% |       160 MiB → 0 B |   2 → 0 | `read(InputStream, String)`                                                                                              | `java.util.jar.Manifest`                                   |
|  -96.3% | -131.912 MiB | 0.4% → <0.1% |  137 MiB → 5.11 MiB |       2 | `resize()`                                                                                                               | `java.util.HashMap`                                        |
|  -45.0% | -122.434 MiB |  0.7% → 0.4% |   272 MiB → 150 MiB |  7 → 11 | `collectClusters(int[])`                                                                                                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -44.8% | -121.967 MiB |  0.7% → 0.4% |   272 MiB → 150 MiB |  13 → 7 | `grow(int)`                                                                                                              | `java.util.ArrayList`                                      |
|  -65.5% |   -44.14 MiB |  0.2% → 0.1% | 67.4 MiB → 23.2 MiB | 11 → 33 | `valueOf(double)`                                                                                                        | `java.lang.Double`                                         |
|  -48.0% |  -43.352 MiB |  0.2% → 0.1% |   90.4 MiB → 47 MiB | 10 → 12 | `newNode(int, Object, Object, HashMap$Node)`                                                                             | `java.util.HashMap`                                        |
|  -13.5% |  -22.878 MiB |         0.4% |   170 MiB → 147 MiB |  4 → 12 | `merge(Map, Map)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |   -2.654 MiB | <0.1% → 0.0% |      2.65 MiB → 0 B |   5 → 0 | `copyOf(Object[], int, Class)`                                                                                           | `java.util.Arrays`                                         |
|  -31.4% |  -777.14 KiB |        <0.1% | 2.42 MiB → 1.66 MiB |   2 → 1 | `iterator()`                                                                                                             | `java.util.HashMap$EntrySet`                               |
| removed | -764.164 KiB | <0.1% → 0.0% |       764 KiB → 0 B |   1 → 0 | `compress(char[], int, int)`                                                                                             | `java.lang.StringUTF16`                                    |
|   -2.0% | -428.445 KiB |         0.1% | 21.3 MiB → 20.8 MiB |       1 | `initTable()`                                                                                                            | `java.util.concurrent.ConcurrentHashMap`                   |
| removed | -388.984 KiB | <0.1% → 0.0% |       389 KiB → 0 B |   1 → 0 | `addConstantUtf8Reference(int, String)`                                                                                  | `jdk.internal.org.objectweb.asm.SymbolTable`               |
| removed | -387.585 KiB | <0.1% → 0.0% |       388 KiB → 0 B |   1 → 0 | `allocateUninitializedArray(Class, int)`                                                                                 | `jdk.internal.misc.Unsafe`                                 |
| removed | -385.921 KiB | <0.1% → 0.0% |       386 KiB → 0 B |   1 → 0 | `allocateUninitializedArray0(Class, int)`                                                                                | `jdk.internal.misc.Unsafe`                                 |
| removed | -384.328 KiB | <0.1% → 0.0% |       384 KiB → 0 B |   1 → 0 | `initCEN(int, ZipCoder)`                                                                                                 | `java.util.zip.ZipFile$Source`                             |
| removed | -382.382 KiB | <0.1% → 0.0% |       382 KiB → 0 B |   1 → 0 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)`                     | `java.lang.ClassLoader`                                    |
| removed | -379.609 KiB | <0.1% → 0.0% |       380 KiB → 0 B |   1 → 0 | `<init>(ClassReader, int)`                                                                                               | `jdk.internal.org.objectweb.asm.ClassWriter`               |
| removed | -379.453 KiB | <0.1% → 0.0% |       379 KiB → 0 B |   1 → 0 | `<clinit>()`                                                                                                             | `sun.security.util.KnownOIDs`                              |
| removed | -379.414 KiB | <0.1% → 0.0% |       379 KiB → 0 B |   1 → 0 | `<init>(MethodHandles$Lookup, MethodType, String, MethodType, MethodHandle, MethodType, boolean, Class[], MethodType[])` | `java.lang.invoke.InnerClassLambdaMetafactory`             |

##### Standard library

|  Change |        Delta |            % |                Size | Samples | Function                                                                                                                 | Location                                       |
| ------: | -----------: | -----------: | ------------------: | ------: | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- |
| removed | -160.198 MiB |  0.4% → 0.0% |       160 MiB → 0 B |   2 → 0 | `read(InputStream, String)`                                                                                              | `java.util.jar.Manifest`                       |
|  -96.3% | -131.912 MiB | 0.4% → <0.1% |  137 MiB → 5.11 MiB |       2 | `resize()`                                                                                                               | `java.util.HashMap`                            |
|  -44.8% | -121.967 MiB |  0.7% → 0.4% |   272 MiB → 150 MiB |  13 → 7 | `grow(int)`                                                                                                              | `java.util.ArrayList`                          |
|  -65.5% |   -44.14 MiB |  0.2% → 0.1% | 67.4 MiB → 23.2 MiB | 11 → 33 | `valueOf(double)`                                                                                                        | `java.lang.Double`                             |
|  -48.0% |  -43.352 MiB |  0.2% → 0.1% |   90.4 MiB → 47 MiB | 10 → 12 | `newNode(int, Object, Object, HashMap$Node)`                                                                             | `java.util.HashMap`                            |
| removed |   -2.654 MiB | <0.1% → 0.0% |      2.65 MiB → 0 B |   5 → 0 | `copyOf(Object[], int, Class)`                                                                                           | `java.util.Arrays`                             |
|  -31.4% |  -777.14 KiB |        <0.1% | 2.42 MiB → 1.66 MiB |   2 → 1 | `iterator()`                                                                                                             | `java.util.HashMap$EntrySet`                   |
| removed | -764.164 KiB | <0.1% → 0.0% |       764 KiB → 0 B |   1 → 0 | `compress(char[], int, int)`                                                                                             | `java.lang.StringUTF16`                        |
|   -2.0% | -428.445 KiB |         0.1% | 21.3 MiB → 20.8 MiB |       1 | `initTable()`                                                                                                            | `java.util.concurrent.ConcurrentHashMap`       |
| removed | -388.984 KiB | <0.1% → 0.0% |       389 KiB → 0 B |   1 → 0 | `addConstantUtf8Reference(int, String)`                                                                                  | `jdk.internal.org.objectweb.asm.SymbolTable`   |
| removed | -387.585 KiB | <0.1% → 0.0% |       388 KiB → 0 B |   1 → 0 | `allocateUninitializedArray(Class, int)`                                                                                 | `jdk.internal.misc.Unsafe`                     |
| removed | -385.921 KiB | <0.1% → 0.0% |       386 KiB → 0 B |   1 → 0 | `allocateUninitializedArray0(Class, int)`                                                                                | `jdk.internal.misc.Unsafe`                     |
| removed | -384.328 KiB | <0.1% → 0.0% |       384 KiB → 0 B |   1 → 0 | `initCEN(int, ZipCoder)`                                                                                                 | `java.util.zip.ZipFile$Source`                 |
| removed | -382.382 KiB | <0.1% → 0.0% |       382 KiB → 0 B |   1 → 0 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)`                     | `java.lang.ClassLoader`                        |
| removed | -379.609 KiB | <0.1% → 0.0% |       380 KiB → 0 B |   1 → 0 | `<init>(ClassReader, int)`                                                                                               | `jdk.internal.org.objectweb.asm.ClassWriter`   |
| removed | -379.453 KiB | <0.1% → 0.0% |       379 KiB → 0 B |   1 → 0 | `<clinit>()`                                                                                                             | `sun.security.util.KnownOIDs`                  |
| removed | -379.414 KiB | <0.1% → 0.0% |       379 KiB → 0 B |   1 → 0 | `<init>(MethodHandles$Lookup, MethodType, String, MethodType, MethodHandle, MethodType, boolean, Class[], MethodType[])` | `java.lang.invoke.InnerClassLambdaMetafactory` |
| removed | -377.648 KiB | <0.1% → 0.0% |       378 KiB → 0 B |   1 → 0 | `readLine()`                                                                                                             | `java.util.Properties$LineReader`              |
|  -40.6% | -264.679 KiB |        <0.1% |   652 KiB → 388 KiB |       1 | `fillInStackTrace(int)`                                                                                                  | `java.lang.Throwable`                          |
|  -20.5% | -226.195 KiB |        <0.1% |  1.08 MiB → 876 KiB |       3 | `copyOfRangeByte(byte[], int, int)`                                                                                      | `java.util.Arrays`                             |

##### Ours

| Change |        Delta |           % |               Size | Samples | Function                     | Location                                                   |
| -----: | -----------: | ----------: | -----------------: | ------: | ---------------------------- | ---------------------------------------------------------- |
| -70.7% | -213.921 MiB | 0.8% → 0.2% | 303 MiB → 88.6 MiB |  10 → 6 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| -45.0% | -122.434 MiB | 0.7% → 0.4% |  272 MiB → 150 MiB |  7 → 11 | `collectClusters(int[])`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -13.5% |  -22.878 MiB |        0.4% |  170 MiB → 147 MiB |  4 → 12 | `merge(Map, Map)`            | `org.renaissance.jdk.concurrent.JavaKMeans`                |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|   Change |        Delta |             % |                Size |       Samples | Function                                                                                                               | Location                                                   |
| -------: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|    +4.2% |   +1.029 GiB | 64.8% → 67.4% | 24.4 GiB → 25.4 GiB | 1,206 → 1,428 | `awaitDone(int, long)`                                                                                                 | `java.util.concurrent.ForkJoinTask`                        |
|    +4.2% |   +1.029 GiB | 64.8% → 67.4% | 24.4 GiB → 25.4 GiB | 1,206 → 1,428 | `join()`                                                                                                               | `java.util.concurrent.ForkJoinTask`                        |
|    +3.8% | +932.948 MiB | 63.8% → 66.1% |   24 GiB → 24.9 GiB | 1,188 → 1,408 | `tryRemoveAndExec(ForkJoinTask, boolean)`                                                                              | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|    +7.9% | +435.315 MiB | 14.3% → 15.4% | 5.38 GiB → 5.81 GiB |     285 → 347 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    +8.8% | +350.995 MiB | 10.3% → 11.2% | 3.88 GiB → 4.22 GiB |     205 → 250 | `grow()`                                                                                                               | `java.util.ArrayList`                                      |
|    +8.8% | +350.995 MiB | 10.3% → 11.2% | 3.88 GiB → 4.22 GiB |     205 → 250 | `add(Object, Object[], int)`                                                                                           | `java.util.ArrayList`                                      |
|    +8.8% | +350.995 MiB | 10.3% → 11.2% | 3.88 GiB → 4.22 GiB |     205 → 250 | `add(Object)`                                                                                                          | `java.util.ArrayList`                                      |
|    +2.0% | +347.293 MiB | 45.7% → 46.5% | 17.2 GiB → 17.5 GiB |     841 → 932 | `toArray()`                                                                                                            | `java.util.ArrayList`                                      |
|    +7.6% | +323.285 MiB | 11.0% → 11.9% | 4.16 GiB → 4.47 GiB |     218 → 273 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    +3.3% | +272.201 MiB | 21.4% → 22.1% | 8.05 GiB → 8.32 GiB |     372 → 446 | `<init>(Collection)`                                                                                                   | `java.util.ArrayList`                                      |
|      new | +233.126 MiB |   0.0% → 0.6% |       0 B → 233 MiB |        0 → 11 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    +0.4% | +172.167 MiB | 99.4% → 99.7% | 37.4 GiB → 37.6 GiB | 1,819 → 2,082 | `doExec()`                                                                                                             | `java.util.concurrent.ForkJoinTask`                        |
| +1563.6% |  +114.88 MiB |  <0.1% → 0.3% |  7.35 MiB → 122 MiB |         2 → 8 | `add(double[], double[])`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +1563.6% |  +114.88 MiB |  <0.1% → 0.3% |  7.35 MiB → 122 MiB |         2 → 8 | `combineResults(double[], double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +1563.6% |  +114.88 MiB |  <0.1% → 0.3% |  7.35 MiB → 122 MiB |         2 → 8 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|    +8.9% | +112.029 MiB |   3.3% → 3.5% | 1.23 GiB → 1.34 GiB |       67 → 74 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +737.7% |   +95.64 MiB |  <0.1% → 0.3% |    13 MiB → 109 MiB |        6 → 13 | `computeIfAbsent(Object, Function)`                                                                                    | `java.util.HashMap`                                        |
|      new |  +93.104 MiB |   0.0% → 0.2% |      0 B → 93.1 MiB |         0 → 1 | `<init>(JavaKMeans, Map)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|      new |  +92.658 MiB |   0.0% → 0.2% |      0 B → 92.7 MiB |       0 → 128 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                |
|   +48.5% |  +80.023 MiB |   0.4% → 0.6% |   165 MiB → 245 MiB |        5 → 11 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### Standard library

|  Change |        Delta |             % |                Size |       Samples | Function                                          | Location                                       |
| ------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------- | ---------------------------------------------- |
|   +4.2% |   +1.029 GiB | 64.8% → 67.4% | 24.4 GiB → 25.4 GiB | 1,206 → 1,428 | `awaitDone(int, long)`                            | `java.util.concurrent.ForkJoinTask`            |
|   +4.2% |   +1.029 GiB | 64.8% → 67.4% | 24.4 GiB → 25.4 GiB | 1,206 → 1,428 | `join()`                                          | `java.util.concurrent.ForkJoinTask`            |
|   +3.8% | +932.948 MiB | 63.8% → 66.1% |   24 GiB → 24.9 GiB | 1,188 → 1,408 | `tryRemoveAndExec(ForkJoinTask, boolean)`         | `java.util.concurrent.ForkJoinPool$WorkQueue`  |
|   +8.8% | +350.995 MiB | 10.3% → 11.2% | 3.88 GiB → 4.22 GiB |     205 → 250 | `grow()`                                          | `java.util.ArrayList`                          |
|   +8.8% | +350.995 MiB | 10.3% → 11.2% | 3.88 GiB → 4.22 GiB |     205 → 250 | `add(Object, Object[], int)`                      | `java.util.ArrayList`                          |
|   +8.8% | +350.995 MiB | 10.3% → 11.2% | 3.88 GiB → 4.22 GiB |     205 → 250 | `add(Object)`                                     | `java.util.ArrayList`                          |
|   +2.0% | +347.293 MiB | 45.7% → 46.5% | 17.2 GiB → 17.5 GiB |     841 → 932 | `toArray()`                                       | `java.util.ArrayList`                          |
|   +3.3% | +272.201 MiB | 21.4% → 22.1% | 8.05 GiB → 8.32 GiB |     372 → 446 | `<init>(Collection)`                              | `java.util.ArrayList`                          |
|   +0.4% | +172.167 MiB | 99.4% → 99.7% | 37.4 GiB → 37.6 GiB | 1,819 → 2,082 | `doExec()`                                        | `java.util.concurrent.ForkJoinTask`            |
| +737.7% |   +95.64 MiB |  <0.1% → 0.3% |    13 MiB → 109 MiB |        6 → 13 | `computeIfAbsent(Object, Function)`               | `java.util.HashMap`                            |
|   +0.2% |  +79.062 MiB |         99.4% | 37.4 GiB → 37.5 GiB | 1,819 → 2,081 | `exec()`                                          | `java.util.concurrent.RecursiveTask`           |
|   +0.2% |  +73.976 MiB |         92.3% | 34.7 GiB → 34.8 GiB | 1,693 → 1,909 | `copyOf(Object[], int)`                           | `java.util.Arrays`                             |
| +280.7% |  +67.052 MiB |   0.1% → 0.2% | 23.9 MiB → 90.9 MiB |      66 → 124 | `evaluateSequential(PipelineHelper, Spliterator)` | `java.util.stream.ReduceOps$ReduceOp`          |
| +280.7% |  +67.052 MiB |   0.1% → 0.2% | 23.9 MiB → 90.9 MiB |      66 → 124 | `evaluate(TerminalOp)`                            | `java.util.stream.AbstractPipeline`            |
| +280.7% |  +67.052 MiB |   0.1% → 0.2% | 23.9 MiB → 90.9 MiB |      66 → 124 | `collect(Collector)`                              | `java.util.stream.ReferencePipeline`           |
| +251.0% |  +59.018 MiB |   0.1% → 0.2% | 23.5 MiB → 82.5 MiB |      65 → 102 | `accept(int)`                                     | `java.util.stream.IntPipeline$1$1`             |
| +251.0% |  +59.018 MiB |   0.1% → 0.2% | 23.5 MiB → 82.5 MiB |      65 → 102 | `forEachRemaining(IntConsumer)`                   | `java.util.stream.Streams$RangeIntSpliterator` |
| +251.0% |  +59.018 MiB |   0.1% → 0.2% | 23.5 MiB → 82.5 MiB |      65 → 102 | `forEachRemaining(Consumer)`                      | `java.util.Spliterator$OfInt`                  |
|     new |  +41.812 MiB |   0.0% → 0.1% |      0 B → 41.8 MiB |         0 → 3 | `entrySet()`                                      | `java.util.HashMap`                            |
| +173.3% |   +18.99 MiB |  <0.1% → 0.1% |   11 MiB → 29.9 MiB |       30 → 23 | `range(int, int)`                                 | `java.util.stream.IntStream`                   |

##### Ours

|   Change |        Delta |             % |                Size |       Samples | Function                                                                                                               | Location                                                                              |
| -------: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|    +7.9% | +435.315 MiB | 14.3% → 15.4% | 5.38 GiB → 5.81 GiB |     285 → 347 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|    +7.6% | +323.285 MiB | 11.0% → 11.9% | 4.16 GiB → 4.47 GiB |     218 → 273 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|      new | +233.126 MiB |   0.0% → 0.6% |       0 B → 233 MiB |        0 → 11 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| +1563.6% |  +114.88 MiB |  <0.1% → 0.3% |  7.35 MiB → 122 MiB |         2 → 8 | `add(double[], double[])`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| +1563.6% |  +114.88 MiB |  <0.1% → 0.3% |  7.35 MiB → 122 MiB |         2 → 8 | `combineResults(double[], double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| +1563.6% |  +114.88 MiB |  <0.1% → 0.3% |  7.35 MiB → 122 MiB |         2 → 8 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|    +8.9% | +112.029 MiB |   3.3% → 3.5% | 1.23 GiB → 1.34 GiB |       67 → 74 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|      new |  +93.104 MiB |   0.0% → 0.2% |      0 B → 93.1 MiB |         0 → 1 | `<init>(JavaKMeans, Map)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|      new |  +92.658 MiB |   0.0% → 0.2% |      0 B → 92.7 MiB |       0 → 128 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                           |
|   +48.5% |  +80.023 MiB |   0.4% → 0.6% |   165 MiB → 245 MiB |        5 → 11 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|    +0.2% |  +79.062 MiB |         99.4% | 37.4 GiB → 37.5 GiB | 1,819 → 2,081 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
|  +287.4% |  +67.577 MiB |   0.1% → 0.2% | 23.5 MiB → 91.1 MiB |      65 → 124 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | `org.renaissance.jdk.concurrent.FjKmeans`                                             |
|  +853.4% |  +67.523 MiB |  <0.1% → 0.2% | 7.91 MiB → 75.4 MiB |         3 → 7 | `lambda$collectClusters$0(Double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +853.4% |  +67.523 MiB |  <0.1% → 0.2% | 7.91 MiB → 75.4 MiB |         3 → 7 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011fece0` |
|  +251.0% |  +59.018 MiB |   0.1% → 0.2% | 23.5 MiB → 82.5 MiB |      65 → 102 | `generateData(int, int, int)`                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  +247.1% |  +58.103 MiB |   0.1% → 0.2% | 23.5 MiB → 81.6 MiB |      65 → 101 | `lambda$generateData$5(int, int, Random[], int)`                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  +247.1% |  +58.103 MiB |   0.1% → 0.2% | 23.5 MiB → 81.6 MiB |      65 → 101 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fd4f0`                |
|      new |  +23.279 MiB |   0.0% → 0.1% |      0 B → 23.3 MiB |         0 → 1 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|  +550.9% |   +19.66 MiB |  <0.1% → 0.1% | 3.57 MiB → 23.2 MiB |       10 → 33 | `lambda$generateData$3(int, int, Random[], int)`                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  +550.9% |   +19.66 MiB |  <0.1% → 0.1% | 3.57 MiB → 23.2 MiB |       10 → 33 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fd728`                |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

| Change |        Delta |             % |                Size |       Samples | Function                                                  | Location                                                               |
| -----: | -----------: | ------------: | ------------------: | ------------: | --------------------------------------------------------- | ---------------------------------------------------------------------- |
| -12.9% | -995.579 MiB | 20.0% → 17.4% | 7.53 GiB → 6.56 GiB |     217 → 218 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                                    |
|  -2.5% | -798.494 MiB | 84.5% → 82.2% |   31.8 GiB → 31 GiB | 1,526 → 1,695 | `merge(Map, Map)`                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -2.5% | -798.494 MiB | 84.5% → 82.2% |   31.8 GiB → 31 GiB | 1,526 → 1,695 | `combineResults(Map, Map)`                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -2.5% | -798.494 MiB | 84.5% → 82.2% |   31.8 GiB → 31 GiB | 1,526 → 1,695 | `combineResults(Object, Object)`                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -2.8% | -671.187 MiB | 61.3% → 59.4% | 23.1 GiB → 22.4 GiB | 1,129 → 1,220 | `addAll(Collection)`                                      | `java.util.ArrayList`                                                  |
|  -1.8% |  -662.06 MiB | 93.2% → 91.3% | 35.1 GiB → 34.4 GiB | 1,723 → 1,950 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                                    |
|  -1.8% |  -662.06 MiB | 93.2% → 91.3% | 35.1 GiB → 34.4 GiB | 1,723 → 1,950 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`                            |
|  -1.9% | -612.907 MiB | 83.5% → 81.7% | 31.4 GiB → 30.8 GiB | 1,511 → 1,672 | `lambda$merge$6(List, List)`                              | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -1.9% | -612.907 MiB | 83.5% → 81.7% | 31.4 GiB → 30.8 GiB | 1,511 → 1,672 | `apply(Object, Object)`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ff3c0` |
|  -1.9% | -612.907 MiB | 83.5% → 81.7% | 31.4 GiB → 30.8 GiB | 1,511 → 1,672 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                                                    |
|  -1.9% | -612.907 MiB | 83.5% → 81.7% | 31.4 GiB → 30.8 GiB | 1,511 → 1,672 | `lambda$merge$7(Map, Object, List)`                       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -1.9% | -612.907 MiB | 83.5% → 81.7% | 31.4 GiB → 30.8 GiB | 1,511 → 1,672 | `accept(Object, Object)`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ff178` |
|  -1.9% | -612.907 MiB | 83.5% → 81.7% | 31.4 GiB → 30.8 GiB | 1,511 → 1,672 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                                                    |
|  -6.2% | -444.166 MiB | 18.7% → 17.5% | 7.04 GiB → 6.61 GiB |     204 → 209 | `lambda$run$0(int, List, int)`                            | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -6.2% | -444.166 MiB | 18.7% → 17.5% | 7.04 GiB → 6.61 GiB |     204 → 209 | `call()`                                                  | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fdf70` |
|  -6.2% | -444.166 MiB | 18.7% → 17.5% | 7.04 GiB → 6.61 GiB |     204 → 209 | `exec()`                                                  | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                    |
|  -1.2% | -443.639 MiB | 93.8% → 92.4% | 35.3 GiB → 34.8 GiB | 1,726 → 1,956 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                                    |
|  -2.2% | -395.284 MiB | 47.3% → 46.2% | 17.8 GiB → 17.4 GiB |     865 → 984 | `grow(int)`                                               | `java.util.ArrayList`                                                  |
|  -5.4% | -246.434 MiB | 11.9% → 11.2% | 4.46 GiB → 4.22 GiB |     216 → 252 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                                    |
| -91.5% | -203.381 MiB |  0.6% → <0.1% |  222 MiB → 18.9 MiB |         9 → 8 | `putVal(int, Object, Object, boolean, boolean)`           | `java.util.HashMap`                                                    |

##### Standard library

| Change |        Delta |             % |                Size |       Samples | Function                                                  | Location                                            |
| -----: | -----------: | ------------: | ------------------: | ------------: | --------------------------------------------------------- | --------------------------------------------------- |
| -12.9% | -995.579 MiB | 20.0% → 17.4% | 7.53 GiB → 6.56 GiB |     217 → 218 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                 |
|  -2.8% | -671.187 MiB | 61.3% → 59.4% | 23.1 GiB → 22.4 GiB | 1,129 → 1,220 | `addAll(Collection)`                                      | `java.util.ArrayList`                               |
|  -1.8% |  -662.06 MiB | 93.2% → 91.3% | 35.1 GiB → 34.4 GiB | 1,723 → 1,950 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                 |
|  -1.8% |  -662.06 MiB | 93.2% → 91.3% | 35.1 GiB → 34.4 GiB | 1,723 → 1,950 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`         |
|  -1.9% | -612.907 MiB | 83.5% → 81.7% | 31.4 GiB → 30.8 GiB | 1,511 → 1,672 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                                 |
|  -1.9% | -612.907 MiB | 83.5% → 81.7% | 31.4 GiB → 30.8 GiB | 1,511 → 1,672 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                                 |
|  -6.2% | -444.166 MiB | 18.7% → 17.5% | 7.04 GiB → 6.61 GiB |     204 → 209 | `exec()`                                                  | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  -1.2% | -443.639 MiB | 93.8% → 92.4% | 35.3 GiB → 34.8 GiB | 1,726 → 1,956 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                 |
|  -2.2% | -395.284 MiB | 47.3% → 46.2% | 17.8 GiB → 17.4 GiB |     865 → 984 | `grow(int)`                                               | `java.util.ArrayList`                               |
|  -5.4% | -246.434 MiB | 11.9% → 11.2% | 4.46 GiB → 4.22 GiB |     216 → 252 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                 |
| -91.5% | -203.381 MiB |  0.6% → <0.1% |  222 MiB → 18.9 MiB |         9 → 8 | `putVal(int, Object, Object, boolean, boolean)`           | `java.util.HashMap`                                 |
|  -0.5% | -196.227 MiB | 93.9% → 93.2% | 35.3 GiB → 35.1 GiB | 1,741 → 1,976 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| -72.4% | -162.709 MiB |   0.6% → 0.2% |    225 MiB → 62 MiB |            11 | `putMapEntries(Map, boolean)`                             | `java.util.HashMap`                                 |
| -72.4% | -162.709 MiB |   0.6% → 0.2% |    225 MiB → 62 MiB |            11 | `<init>(Map)`                                             | `java.util.HashMap`                                 |
| -98.6% | -158.636 MiB |  0.4% → <0.1% |  161 MiB → 2.26 MiB |         4 → 6 | `read(InputStream, String)`                               | `java.util.jar.Manifest`                            |
| -98.6% | -158.636 MiB |  0.4% → <0.1% |  161 MiB → 2.26 MiB |         4 → 6 | `<init>(JarVerifier, InputStream, String)`                | `java.util.jar.Manifest`                            |
| -98.6% | -158.636 MiB |  0.4% → <0.1% |  161 MiB → 2.26 MiB |         4 → 6 | `<init>(InputStream, String)`                             | `java.util.jar.Manifest`                            |
| -98.6% | -158.636 MiB |  0.4% → <0.1% |  161 MiB → 2.26 MiB |         4 → 6 | `getManifestFromReference()`                              | `java.util.jar.JarFile`                             |
| -98.6% | -158.636 MiB |  0.4% → <0.1% |  161 MiB → 2.26 MiB |         4 → 6 | `getManifest()`                                           | `java.util.jar.JarFile`                             |
| -98.6% | -158.636 MiB |  0.4% → <0.1% |  161 MiB → 2.26 MiB |         4 → 6 | `getManifest()`                                           | `jdk.internal.loader.URLClassPath$JarLoader$2`      |

##### Ours

|  Change |        Delta |             % |                Size |       Samples | Function                                                                                                               | Location                                                               |
| ------: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|   -2.5% | -798.494 MiB | 84.5% → 82.2% |   31.8 GiB → 31 GiB | 1,526 → 1,695 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -2.5% | -798.494 MiB | 84.5% → 82.2% |   31.8 GiB → 31 GiB | 1,526 → 1,695 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -2.5% | -798.494 MiB | 84.5% → 82.2% |   31.8 GiB → 31 GiB | 1,526 → 1,695 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -1.9% | -612.907 MiB | 83.5% → 81.7% | 31.4 GiB → 30.8 GiB | 1,511 → 1,672 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -1.9% | -612.907 MiB | 83.5% → 81.7% | 31.4 GiB → 30.8 GiB | 1,511 → 1,672 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ff3c0` |
|   -1.9% | -612.907 MiB | 83.5% → 81.7% | 31.4 GiB → 30.8 GiB | 1,511 → 1,672 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -1.9% | -612.907 MiB | 83.5% → 81.7% | 31.4 GiB → 30.8 GiB | 1,511 → 1,672 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ff178` |
|   -6.2% | -444.166 MiB | 18.7% → 17.5% | 7.04 GiB → 6.61 GiB |     204 → 209 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -6.2% | -444.166 MiB | 18.7% → 17.5% | 7.04 GiB → 6.61 GiB |     204 → 209 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fdf70` |
| removed |  -189.85 MiB |   0.5% → 0.0% |       190 MiB → 0 B |        73 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
| removed | -165.942 MiB |   0.4% → 0.0% |       166 MiB → 0 B |         6 → 0 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                              |
| removed | -165.942 MiB |   0.4% → 0.0% |       166 MiB → 0 B |         6 → 0 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |
|  -52.1% |  -98.741 MiB |   0.5% → 0.2% |  189 MiB → 90.7 MiB |      71 → 123 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|  -47.4% |  -98.461 MiB |   0.5% → 0.3% |   208 MiB → 109 MiB |     121 → 170 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
|  -47.4% |  -98.461 MiB |   0.5% → 0.3% |   208 MiB → 109 MiB |     121 → 170 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
|  -47.2% |  -97.715 MiB |   0.5% → 0.3% |   207 MiB → 109 MiB |     119 → 170 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
|  -47.7% |  -97.378 MiB |   0.5% → 0.3% |   204 MiB → 107 MiB |     111 → 164 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -51.2% |  -97.191 MiB |   0.5% → 0.2% |  190 MiB → 92.7 MiB |      73 → 128 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700117c3b8` |
|  -46.9% |  -96.898 MiB |   0.5% → 0.3% |   207 MiB → 110 MiB |     118 → 171 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|  -51.0% |  -96.813 MiB |   0.5% → 0.2% |    190 MiB → 93 MiB |      73 → 129 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |

# Retained heap profile diff

Retained 2.32 MiB → 2.62 MiB (+307.906 KiB, +13.0%) over 10 objects → 16 objects (237 KiB → 168 KiB per object).

| Category         | Change |       Delta |            % |                Size | Objects |
| ---------------- | -----: | ----------: | -----------: | ------------------: | ------: |
| Standard library | +13.0% | +307.82 KiB |       100.0% | 2.32 MiB → 2.62 MiB | 10 → 14 |
| Ours             |    new |       +88 B | 0.0% → <0.1% |          0 B → 88 B |   0 → 2 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

| Change |        Delta |            % |          Size | Objects | Function                                     | Location                                    |
| -----: | -----------: | -----------: | ------------: | ------: | -------------------------------------------- | ------------------------------------------- |
|    new | +313.921 KiB | 0.0% → 11.7% | 0 B → 314 KiB |   0 → 2 | `initCEN(int, ZipCoder)`                     | `java.util.zip.ZipFile$Source`              |
|    new |        +64 B | 0.0% → <0.1% |    0 B → 64 B |   0 → 1 | `newLinkedHashMap(int)`                      | `java.util.LinkedHashMap`                   |
|    new |        +48 B | 0.0% → <0.1% |    0 B → 48 B |   0 → 1 | `main(String[])`                             | `org.renaissance.harness.RenaissanceSuite$` |
|    new |        +40 B | 0.0% → <0.1% |    0 B → 40 B |   0 → 1 | `releaseFence()`                             | `scala.runtime.Statics`                     |
|    new |        +40 B | 0.0% → <0.1% |    0 B → 40 B |   0 → 1 | `lambda$generateData$4(int)`                 | `org.renaissance.jdk.concurrent.JavaKMeans` |
|    new |        +32 B | 0.0% → <0.1% |    0 B → 32 B |   0 → 1 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                         |
| +20.0% |        +24 B |        <0.1% | 120 B → 144 B |   5 → 6 | `valueOf(double)`                            | `java.lang.Double`                          |
|    new |        +24 B | 0.0% → <0.1% |    0 B → 24 B |   0 → 1 | `parseName(byte[], int)`                     | `java.util.jar.Manifest`                    |

##### Standard library

| Change |        Delta |            % |          Size | Objects | Function                                     | Location                       |
| -----: | -----------: | -----------: | ------------: | ------: | -------------------------------------------- | ------------------------------ |
|    new | +313.921 KiB | 0.0% → 11.7% | 0 B → 314 KiB |   0 → 2 | `initCEN(int, ZipCoder)`                     | `java.util.zip.ZipFile$Source` |
|    new |        +64 B | 0.0% → <0.1% |    0 B → 64 B |   0 → 1 | `newLinkedHashMap(int)`                      | `java.util.LinkedHashMap`      |
|    new |        +40 B | 0.0% → <0.1% |    0 B → 40 B |   0 → 1 | `releaseFence()`                             | `scala.runtime.Statics`        |
|    new |        +32 B | 0.0% → <0.1% |    0 B → 32 B |   0 → 1 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`            |
| +20.0% |        +24 B |        <0.1% | 120 B → 144 B |   5 → 6 | `valueOf(double)`                            | `java.lang.Double`             |
|    new |        +24 B | 0.0% → <0.1% |    0 B → 24 B |   0 → 1 | `parseName(byte[], int)`                     | `java.util.jar.Manifest`       |

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

##### Standard library

|  Change |      Delta |             % |                Size | Objects | Function                                                                                             | Location                                 |
| ------: | ---------: | ------------: | ------------------: | ------: | ---------------------------------------------------------------------------------------------------- | ---------------------------------------- |
|   -0.3% | -6.132 KiB | 89.2% → 78.7% | 2.07 MiB → 2.06 MiB |   2 → 1 | `copyOf(Object[], int)`                                                                              | `java.util.Arrays`                       |
| removed |     -120 B |  <0.1% → 0.0% |         120 B → 0 B |   1 → 0 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` | `java.lang.ClassLoader`                  |
| removed |      -32 B |  <0.1% → 0.0% |          32 B → 0 B |   1 → 0 | `putVal(Object, Object, boolean)`                                                                    | `java.util.concurrent.ConcurrentHashMap` |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

|      Change |        Delta |             % |                Size | Objects | Function                                                                                                               | Location                                                 |
| ----------: | -----------: | ------------: | ------------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
|         new |    +2.31 MiB |  0.0% → 88.2% |      0 B → 2.31 MiB |  0 → 10 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`              |
|         new |    +2.06 MiB |  0.0% → 78.7% |      0 B → 2.06 MiB |   0 → 1 | `accept(Object, Object)`                                                                                               | `java.util.stream.Collectors$$Lambda.0x00000070010e3e58` |
|      +14.9% | +314.039 KiB | 89.0% → 90.4% | 2.06 MiB → 2.37 MiB |  8 → 15 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`               |
|      +14.9% | +314.039 KiB | 89.0% → 90.4% | 2.06 MiB → 2.37 MiB |  8 → 15 | `invokeStatic(Object, Object)`                                                                                         | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`     |
|      +14.9% | +314.039 KiB | 89.0% → 90.4% | 2.06 MiB → 2.37 MiB |  8 → 15 | `invoke(Object, Object, Object)`                                                                                       | `java.lang.invoke.LambdaForm$MH.0x0000007001082400`      |
|      +14.9% | +314.039 KiB | 89.0% → 90.4% | 2.06 MiB → 2.37 MiB |  8 → 15 | `invokeExact_MT(Object, Object, Object, Object)`                                                                       | `java.lang.invoke.Invokers$Holder`                       |
|      +14.9% | +314.039 KiB | 89.0% → 90.4% | 2.06 MiB → 2.37 MiB |  8 → 15 | `invokeImpl(Object, Object[])`                                                                                         | `jdk.internal.reflect.DirectMethodHandleAccessor`        |
|      +14.9% | +314.039 KiB | 89.0% → 90.4% | 2.06 MiB → 2.37 MiB |  8 → 15 | `invoke(Object, Object[])`                                                                                             | `jdk.internal.reflect.DirectMethodHandleAccessor`        |
|      +14.9% | +314.039 KiB | 89.0% → 90.4% | 2.06 MiB → 2.37 MiB |  8 → 15 | `invoke(Object, Object[])`                                                                                             | `java.lang.reflect.Method`                               |
|      +14.9% | +314.039 KiB | 89.0% → 90.4% | 2.06 MiB → 2.37 MiB |  8 → 15 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                          |
|      +14.9% | +314.039 KiB | 89.0% → 90.4% | 2.06 MiB → 2.37 MiB |  8 → 15 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                          |
|      +14.9% | +314.039 KiB | 89.0% → 90.4% | 2.06 MiB → 2.37 MiB |  8 → 15 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                          |
|         new | +314.007 KiB |  0.0% → 11.7% |       0 B → 314 KiB |   0 → 4 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)`                                            | `java.security.AccessController`                         |
|         new | +314.007 KiB |  0.0% → 11.7% |       0 B → 314 KiB |   0 → 4 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)`                                                        | `java.security.AccessController`                         |
|         new | +314.007 KiB |  0.0% → 11.7% |       0 B → 314 KiB |   0 → 4 | `run()`                                                                                                                | `java.net.URLClassLoader$1`                              |
|         new | +314.007 KiB |  0.0% → 11.7% |       0 B → 314 KiB |   0 → 4 | `findClass(String)`                                                                                                    | `java.net.URLClassLoader`                                |
|         new | +314.007 KiB |  0.0% → 11.7% |       0 B → 314 KiB |   0 → 4 | `loadClass(String, boolean)`                                                                                           | `java.lang.ClassLoader`                                  |
| +1004725.0% | +313.976 KiB | <0.1% → 11.7% |      32 B → 314 KiB |   1 → 4 | `loadClass(String)`                                                                                                    | `java.lang.ClassLoader`                                  |
|         new | +313.921 KiB |  0.0% → 11.7% |       0 B → 314 KiB |   0 → 2 | `initCEN(int, ZipCoder)`                                                                                               | `java.util.zip.ZipFile$Source`                           |
|         new | +313.921 KiB |  0.0% → 11.7% |       0 B → 314 KiB |   0 → 2 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)`                                                                        | `java.util.zip.ZipFile$Source`                           |

##### Standard library

|      Change |        Delta |             % |                Size | Objects | Function                                                                    | Location                                                 |
| ----------: | -----------: | ------------: | ------------------: | ------: | --------------------------------------------------------------------------- | -------------------------------------------------------- |
|         new |    +2.06 MiB |  0.0% → 78.7% |      0 B → 2.06 MiB |   0 → 1 | `accept(Object, Object)`                                                    | `java.util.stream.Collectors$$Lambda.0x00000070010e3e58` |
|      +14.9% | +314.039 KiB | 89.0% → 90.4% | 2.06 MiB → 2.37 MiB |  8 → 15 | `invokeStatic(Object, Object)`                                              | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`     |
|      +14.9% | +314.039 KiB | 89.0% → 90.4% | 2.06 MiB → 2.37 MiB |  8 → 15 | `invoke(Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x0000007001082400`      |
|      +14.9% | +314.039 KiB | 89.0% → 90.4% | 2.06 MiB → 2.37 MiB |  8 → 15 | `invokeExact_MT(Object, Object, Object, Object)`                            | `java.lang.invoke.Invokers$Holder`                       |
|      +14.9% | +314.039 KiB | 89.0% → 90.4% | 2.06 MiB → 2.37 MiB |  8 → 15 | `invokeImpl(Object, Object[])`                                              | `jdk.internal.reflect.DirectMethodHandleAccessor`        |
|      +14.9% | +314.039 KiB | 89.0% → 90.4% | 2.06 MiB → 2.37 MiB |  8 → 15 | `invoke(Object, Object[])`                                                  | `jdk.internal.reflect.DirectMethodHandleAccessor`        |
|      +14.9% | +314.039 KiB | 89.0% → 90.4% | 2.06 MiB → 2.37 MiB |  8 → 15 | `invoke(Object, Object[])`                                                  | `java.lang.reflect.Method`                               |
|         new | +314.007 KiB |  0.0% → 11.7% |       0 B → 314 KiB |   0 → 4 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` | `java.security.AccessController`                         |
|         new | +314.007 KiB |  0.0% → 11.7% |       0 B → 314 KiB |   0 → 4 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)`             | `java.security.AccessController`                         |
|         new | +314.007 KiB |  0.0% → 11.7% |       0 B → 314 KiB |   0 → 4 | `run()`                                                                     | `java.net.URLClassLoader$1`                              |
|         new | +314.007 KiB |  0.0% → 11.7% |       0 B → 314 KiB |   0 → 4 | `findClass(String)`                                                         | `java.net.URLClassLoader`                                |
|         new | +314.007 KiB |  0.0% → 11.7% |       0 B → 314 KiB |   0 → 4 | `loadClass(String, boolean)`                                                | `java.lang.ClassLoader`                                  |
| +1004725.0% | +313.976 KiB | <0.1% → 11.7% |      32 B → 314 KiB |   1 → 4 | `loadClass(String)`                                                         | `java.lang.ClassLoader`                                  |
|         new | +313.921 KiB |  0.0% → 11.7% |       0 B → 314 KiB |   0 → 2 | `initCEN(int, ZipCoder)`                                                    | `java.util.zip.ZipFile$Source`                           |
|         new | +313.921 KiB |  0.0% → 11.7% |       0 B → 314 KiB |   0 → 2 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)`                             | `java.util.zip.ZipFile$Source`                           |
|         new | +313.921 KiB |  0.0% → 11.7% |       0 B → 314 KiB |   0 → 2 | `get(File, boolean, ZipCoder)`                                              | `java.util.zip.ZipFile$Source`                           |
|         new | +313.921 KiB |  0.0% → 11.7% |       0 B → 314 KiB |   0 → 2 | `<init>(ZipFile, ZipCoder, File, int)`                                      | `java.util.zip.ZipFile$CleanableResource`                |
|         new | +313.921 KiB |  0.0% → 11.7% |       0 B → 314 KiB |   0 → 2 | `<init>(File, int, Charset)`                                                | `java.util.zip.ZipFile`                                  |
|         new | +313.921 KiB |  0.0% → 11.7% |       0 B → 314 KiB |   0 → 2 | `<init>(File, int)`                                                         | `java.util.zip.ZipFile`                                  |
|         new | +313.921 KiB |  0.0% → 11.7% |       0 B → 314 KiB |   0 → 2 | `<init>(File, boolean, int, Runtime$Version)`                               | `java.util.jar.JarFile`                                  |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

|  Change |      Delta |             % |                Size | Objects | Function                                                                                                               | Location                                                               |
| ------: | ---------: | ------------: | ------------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| removed |  -2.06 MiB |  88.9% → 0.0% |      2.06 MiB → 0 B |   7 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
| -100.0% |  -2.06 MiB | 88.9% → <0.1% |     2.06 MiB → 32 B |       1 | `accept(Object, Object)`                                                                                               | `java.util.stream.Collectors$$Lambda.0x000000700100c000`               |
|   -0.3% | -6.132 KiB | 89.2% → 78.7% | 2.07 MiB → 2.06 MiB |   2 → 1 | `copyOf(Object[], int)`                                                                                                | `java.util.Arrays`                                                     |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `toArray()`                                                                                                            | `java.util.ArrayList`                                                  |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `<init>(Collection)`                                                                                                   | `java.util.ArrayList`                                                  |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0` |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `merge(Object, Object, BiFunction)`                                                                                    | `java.util.HashMap`                                                    |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88` |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `forEach(BiConsumer)`                                                                                                  | `java.util.HashMap`                                                    |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `exec()`                                                                                                               | `java.util.concurrent.RecursiveTask`                                   |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `doExec()`                                                                                                             | `java.util.concurrent.ForkJoinTask`                                    |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `tryRemoveAndExec(ForkJoinTask, boolean)`                                                                              | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `awaitDone(int, long)`                                                                                                 | `java.util.concurrent.ForkJoinTask`                                    |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `join()`                                                                                                               | `java.util.concurrent.ForkJoinTask`                                    |

##### Standard library

|  Change |      Delta |             % |                Size | Objects | Function                                                                                             | Location                                                 |
| ------: | ---------: | ------------: | ------------------: | ------: | ---------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| -100.0% |  -2.06 MiB | 88.9% → <0.1% |     2.06 MiB → 32 B |       1 | `accept(Object, Object)`                                                                             | `java.util.stream.Collectors$$Lambda.0x000000700100c000` |
|   -0.3% | -6.132 KiB | 89.2% → 78.7% | 2.07 MiB → 2.06 MiB |   2 → 1 | `copyOf(Object[], int)`                                                                              | `java.util.Arrays`                                       |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `toArray()`                                                                                          | `java.util.ArrayList`                                    |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `<init>(Collection)`                                                                                 | `java.util.ArrayList`                                    |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `merge(Object, Object, BiFunction)`                                                                  | `java.util.HashMap`                                      |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `forEach(BiConsumer)`                                                                                | `java.util.HashMap`                                      |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `exec()`                                                                                             | `java.util.concurrent.RecursiveTask`                     |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `doExec()`                                                                                           | `java.util.concurrent.ForkJoinTask`                      |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `tryRemoveAndExec(ForkJoinTask, boolean)`                                                            | `java.util.concurrent.ForkJoinPool$WorkQueue`            |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `awaitDone(int, long)`                                                                               | `java.util.concurrent.ForkJoinTask`                      |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `join()`                                                                                             | `java.util.concurrent.ForkJoinTask`                      |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`                                                 | `java.util.concurrent.ForkJoinPool$WorkQueue`            |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `scan(ForkJoinPool$WorkQueue, int, int)`                                                             | `java.util.concurrent.ForkJoinPool`                      |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `runWorker(ForkJoinPool$WorkQueue)`                                                                  | `java.util.concurrent.ForkJoinPool`                      |
| removed | -6.132 KiB |   0.3% → 0.0% |      6.13 KiB → 0 B |   1 → 0 | `run()`                                                                                              | `java.util.concurrent.ForkJoinWorkerThread`              |
| removed |     -120 B |  <0.1% → 0.0% |         120 B → 0 B |   1 → 0 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` | `java.lang.ClassLoader`                                  |
| removed |     -120 B |  <0.1% → 0.0% |         120 B → 0 B |   1 → 0 | `defineClass(ClassLoader, Class, String, byte[], ProtectionDomain, boolean, int, Object)`            | `java.lang.System$2`                                     |
| removed |     -120 B |  <0.1% → 0.0% |         120 B → 0 B |   1 → 0 | `defineClass(boolean, Object)`                                                                       | `java.lang.invoke.MethodHandles$Lookup$ClassDefiner`     |
| removed |     -120 B |  <0.1% → 0.0% |         120 B → 0 B |   1 → 0 | `loadMethod(byte[])`                                                                                 | `java.lang.invoke.InvokerBytecodeGenerator`              |
| removed |     -120 B |  <0.1% → 0.0% |         120 B → 0 B |   1 → 0 | `generateCustomizedCode(LambdaForm, MethodType)`                                                     | `java.lang.invoke.InvokerBytecodeGenerator`              |

# Lock contention profile diff

Blocked 7.47s → 9.66s (+2.188s, +29.3%) over 72 contentions → 131 contentions (103.9ms → 73.8ms per contention).

| Category         | Change |   Delta |      % |          Time | Contentions |
| ---------------- | -----: | ------: | -----: | ------------: | ----------: |
| Standard library | +29.3% | +2.188s | 100.0% | 7.47s → 9.66s |    72 → 131 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time blocked directly in the function body, excluding callees.

##### Standard library

| Change |   Delta |      % |          Time | Contentions | Function              | Location                   |
| -----: | ------: | -----: | ------------: | ----------: | --------------------- | -------------------------- |
| +29.3% | +2.188s | 100.0% | 7.47s → 9.66s |    72 → 131 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

| Change |     Delta |             % |          Time | Contentions | Function                                                                                                               | Location                                                               |
| -----: | --------: | ------------: | ------------: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|    new |   +6.901s |  0.0% → 71.4% |   0ms → 6.90s |      0 → 16 | `$anonfun$2(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|    new |   +6.901s |  0.0% → 71.4% |   0ms → 6.90s |      0 → 16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
| +29.3% |   +2.188s |        100.0% | 7.47s → 9.66s |    72 → 131 | `park(boolean, long)`                                                                                                  | `jdk.internal.misc.Unsafe`                                             |
| +27.4% |   +1.980s | 96.8% → 95.4% | 7.23s → 9.22s |    62 → 117 | `park()`                                                                                                               | `java.util.concurrent.locks.LockSupport`                               |
| +96.6% |   +1.359s | 18.8% → 28.6% | 1.40s → 2.76s |    56 → 115 | `runWorker(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`                                    |
| +96.6% |   +1.359s | 18.8% → 28.6% | 1.40s → 2.76s |    56 → 115 | `run()`                                                                                                                | `java.util.concurrent.ForkJoinWorkerThread`                            |
| +92.5% |   +1.291s | 18.7% → 27.8% | 1.39s → 2.68s |    55 → 111 | `awaitWork(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`                                    |
| +14.7% | +896.54ms | 81.3% → 72.2% | 6.08s → 6.97s |     17 → 20 | `awaitDone(int, long)`                                                                                                 | `java.util.concurrent.ForkJoinTask`                                    |
| +13.7% | +828.99ms | 81.2% → 71.4% | 6.07s → 6.90s |          16 | `get()`                                                                                                                | `java.util.concurrent.ForkJoinTask`                                    |
| +13.7% | +828.99ms | 81.2% → 71.4% | 6.07s → 6.90s |          16 | `run(int, List, int)`                                                                                                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| +13.7% | +828.99ms | 81.2% → 71.4% | 6.07s → 6.90s |          16 | `$anonfun$adapted$1(Object)`                                                                                           | `org.renaissance.jdk.concurrent.FjKmeans`                              |
| +13.7% | +828.99ms | 81.2% → 71.4% | 6.07s → 6.90s |          16 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011fdb90`   |
| +13.7% | +828.99ms | 81.2% → 71.4% | 6.07s → 6.90s |          16 | `map(Function1)`                                                                                                       | `scala.collection.immutable.Range`                                     |
| +13.7% | +828.99ms | 81.2% → 71.4% | 6.07s → 6.90s |          16 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                              |
| +13.7% | +828.99ms | 81.2% → 71.4% | 6.07s → 6.90s |          16 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |
| +13.7% | +828.99ms | 81.2% → 71.4% | 6.07s → 6.90s |          16 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
| +13.7% | +828.99ms | 81.2% → 71.4% | 6.07s → 6.90s |          16 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700117c3b8` |
| +13.7% | +828.99ms | 81.2% → 71.4% | 6.07s → 6.90s |          16 | `apply(Object)`                                                                                                        | `scala.runtime.function.JProcedure1`                                   |
| +13.7% | +828.99ms | 81.2% → 71.4% | 6.07s → 6.90s |          16 | `foreach(Function1)`                                                                                                   | `scala.collection.immutable.List`                                      |
| +13.7% | +828.99ms | 81.2% → 71.4% | 6.07s → 6.90s |          16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |

##### Standard library

|  Change |     Delta |             % |              Time | Contentions | Function                                         | Location                                             |
| ------: | --------: | ------------: | ----------------: | ----------: | ------------------------------------------------ | ---------------------------------------------------- |
|  +29.3% |   +2.188s |        100.0% |     7.47s → 9.66s |    72 → 131 | `park(boolean, long)`                            | `jdk.internal.misc.Unsafe`                           |
|  +27.4% |   +1.980s | 96.8% → 95.4% |     7.23s → 9.22s |    62 → 117 | `park()`                                         | `java.util.concurrent.locks.LockSupport`             |
|  +96.6% |   +1.359s | 18.8% → 28.6% |     1.40s → 2.76s |    56 → 115 | `runWorker(ForkJoinPool$WorkQueue)`              | `java.util.concurrent.ForkJoinPool`                  |
|  +96.6% |   +1.359s | 18.8% → 28.6% |     1.40s → 2.76s |    56 → 115 | `run()`                                          | `java.util.concurrent.ForkJoinWorkerThread`          |
|  +92.5% |   +1.291s | 18.7% → 27.8% |     1.39s → 2.68s |    55 → 111 | `awaitWork(ForkJoinPool$WorkQueue)`              | `java.util.concurrent.ForkJoinPool`                  |
|  +14.7% | +896.54ms | 81.3% → 72.2% |     6.08s → 6.97s |     17 → 20 | `awaitDone(int, long)`                           | `java.util.concurrent.ForkJoinTask`                  |
|  +13.7% | +828.99ms | 81.2% → 71.4% |     6.07s → 6.90s |          16 | `get()`                                          | `java.util.concurrent.ForkJoinTask`                  |
|  +13.7% | +828.99ms | 81.2% → 71.4% |     6.07s → 6.90s |          16 | `map(Function1)`                                 | `scala.collection.immutable.Range`                   |
|  +13.7% | +828.99ms | 81.2% → 71.4% |     6.07s → 6.90s |          16 | `apply(Object)`                                  | `scala.runtime.function.JProcedure1`                 |
|  +13.7% | +828.99ms | 81.2% → 71.4% |     6.07s → 6.90s |          16 | `foreach(Function1)`                             | `scala.collection.immutable.List`                    |
|  +13.7% | +828.99ms | 81.2% → 71.4% |     6.07s → 6.90s |          16 | `invokeStatic(Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00` |
|  +13.7% | +828.99ms | 81.2% → 71.4% |     6.07s → 6.90s |          16 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001082400`  |
|  +13.7% | +828.99ms | 81.2% → 71.4% |     6.07s → 6.90s |          16 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                   |
|  +13.7% | +828.99ms | 81.2% → 71.4% |     6.07s → 6.90s |          16 | `invokeImpl(Object, Object[])`                   | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +13.7% | +828.99ms | 81.2% → 71.4% |     6.07s → 6.90s |          16 | `invoke(Object, Object[])`                       | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +13.7% | +828.99ms | 81.2% → 71.4% |     6.07s → 6.90s |          16 | `invoke(Object, Object[])`                       | `java.lang.reflect.Method`                           |
|  +86.7% | +207.53ms |   3.2% → 4.6% | 239.4ms → 446.9ms |     10 → 14 | `parkUntil(long)`                                | `java.util.concurrent.locks.LockSupport`             |
| +667.1% |  +67.56ms |   0.1% → 0.8% |   10.1ms → 77.7ms |       1 → 4 | `join()`                                         | `java.util.concurrent.ForkJoinTask`                  |
| +667.1% |  +67.56ms |   0.1% → 0.8% |   10.1ms → 77.7ms |       1 → 4 | `exec()`                                         | `java.util.concurrent.RecursiveTask`                 |
| +667.1% |  +67.56ms |   0.1% → 0.8% |   10.1ms → 77.7ms |       1 → 4 | `doExec()`                                       | `java.util.concurrent.ForkJoinTask`                  |

#### Improvements

Functions with the largest decrease in total time blocked in the function and all its callees.

|  Change |   Delta |            % |        Time | Contentions | Function                                                                                                               | Location                                    |
| ------: | ------: | -----------: | ----------: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| removed | -6.072s | 81.2% → 0.0% | 6.07s → 0ms |      16 → 0 | `$anonfun$1(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`   |
| removed | -6.072s | 81.2% → 0.0% | 6.07s → 0ms |      16 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

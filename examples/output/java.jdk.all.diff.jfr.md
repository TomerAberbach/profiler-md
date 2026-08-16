# Sampling profile diff

Collected 1,637 samples → 1,634 samples (-3 samples, -0.2%).

| Category         | Change | Delta |             % |       Samples |
| ---------------- | -----: | ----: | ------------: | ------------: |
| Ours             |  +0.5% |    +7 | 90.7% → 91.2% | 1,484 → 1,491 |
| Standard library |  -6.5% |   -10 |   9.3% → 8.8% |     153 → 143 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                                                      | Location                                                                              |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|   +3.8% |   +27 | 43.6% → 45.3% | 714 → 741 | `accumulate(Double[], double[])`                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| +900.0% |    +9 |   0.1% → 0.6% |    1 → 10 | `apply(Object)`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011dec00` |
|  +31.3% |    +5 |   1.0% → 1.3% |   16 → 21 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`     | `java.util.concurrent.ForkJoinPool`                                                   |
|   +0.8% |    +3 | 23.3% → 23.5% | 381 → 384 | `distance(Double[], Double[])`                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +66.7% |    +2 |   0.2% → 0.3% |     3 → 5 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater`                                                              |
|  +66.7% |    +2 |   0.2% → 0.3% |     3 → 5 | `accept(Object)`                                              | `java.util.stream.ReduceOps$3ReducingSink`                                            |
|  +66.7% |    +2 |   0.2% → 0.3% |     3 → 5 | `tryRemoveAndExec(ForkJoinTask, boolean)`                     | `java.util.concurrent.ForkJoinPool$WorkQueue`                                         |
|   +2.2% |    +2 |   5.7% → 5.8% |   93 → 95 | `collectClusters(int[])`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `merge(Object, Object, BiFunction)`                           | `java.util.HashMap`                                                                   |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `<init>(HashMap)`                                             | `java.util.HashMap$HashIterator`                                                      |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `awaitDone(int, long)`                                        | `java.util.concurrent.ForkJoinTask`                                                   |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `hashCode()`                                                  | `java.lang.Object`                                                                    |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `hashCode()`                                                  | `java.lang.String`                                                                    |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `allocateInstance(Class)`                                     | `jdk.internal.misc.Unsafe`                                                            |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `putReferenceOpaque(Object, long, Object)`                    | `jdk.internal.misc.Unsafe`                                                            |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `resize()`                                                    | `java.util.HashMap`                                                                   |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `putVal(int, Object, Object, boolean, boolean)`               | `java.util.HashMap`                                                                   |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `createSubtask(int, int)`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |

##### Ours

|  Change | Delta |             % |   Samples | Function                         | Location                                                                              |
| ------: | ----: | ------------: | --------: | -------------------------------- | ------------------------------------------------------------------------------------- |
|   +3.8% |   +27 | 43.6% → 45.3% | 714 → 741 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| +900.0% |    +9 |   0.1% → 0.6% |    1 → 10 | `apply(Object)`                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011dec00` |
|   +0.8% |    +3 | 23.3% → 23.5% | 381 → 384 | `distance(Double[], Double[])`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   +2.2% |    +2 |   5.7% → 5.8% |   93 → 95 | `collectClusters(int[])`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `createSubtask(int, int)`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |

##### Standard library

| Change | Delta |           % | Samples | Function                                                      | Location                                      |
| -----: | ----: | ----------: | ------: | ------------------------------------------------------------- | --------------------------------------------- |
| +31.3% |    +5 | 1.0% → 1.3% | 16 → 21 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`     | `java.util.concurrent.ForkJoinPool`           |
| +66.7% |    +2 | 0.2% → 0.3% |   3 → 5 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater`                      |
| +66.7% |    +2 | 0.2% → 0.3% |   3 → 5 | `accept(Object)`                                              | `java.util.stream.ReduceOps$3ReducingSink`    |
| +66.7% |    +2 | 0.2% → 0.3% |   3 → 5 | `tryRemoveAndExec(ForkJoinTask, boolean)`                     | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|    new |    +2 | 0.0% → 0.1% |   0 → 2 | `merge(Object, Object, BiFunction)`                           | `java.util.HashMap`                           |
|    new |    +2 | 0.0% → 0.1% |   0 → 2 | `<init>(HashMap)`                                             | `java.util.HashMap$HashIterator`              |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `awaitDone(int, long)`                                        | `java.util.concurrent.ForkJoinTask`           |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `hashCode()`                                                  | `java.lang.Object`                            |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `hashCode()`                                                  | `java.lang.String`                            |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `allocateInstance(Class)`                                     | `jdk.internal.misc.Unsafe`                    |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `putReferenceOpaque(Object, long, Object)`                    | `jdk.internal.misc.Unsafe`                    |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `resize()`                                                    | `java.util.HashMap`                           |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `putVal(int, Object, Object, boolean, boolean)`               | `java.util.HashMap`                           |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                                                            | Location                                                   |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------------- | ---------------------------------------------------------- |
|  -20.5% |   -16 |   4.8% → 3.8% |   78 → 62 | `vectorSum()`                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -7.4% |   -14 | 11.5% → 10.6% | 188 → 174 | `findNearestCentroid()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -27.1% |   -13 |   2.9% → 2.1% |   48 → 35 | `copyOf(Object[], int)`                                             | `java.util.Arrays`                                         |
|  -17.5% |   -11 |   3.8% → 3.2% |   63 → 52 | `computeIfAbsent(Object, Function)`                                 | `java.util.HashMap`                                        |
|  -75.0% |    -3 |   0.2% → 0.1% |     4 → 1 | `lambda$merge$7(Map, Object, List)`                                 | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `push(ForkJoinTask, ForkJoinPool, boolean)`                         | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `load(NativeLibraries$NativeLibraryImpl, String, boolean, boolean)` | `jdk.internal.loader.NativeLibraries`                      |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `wrapSink(Sink)`                                                    | `java.util.stream.AbstractPipeline`                        |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `average(List)`                                                     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `checkIndex(int, int)`                                              | `java.util.Objects`                                        |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `merge(Map, Map)`                                                   | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -50.0% |    -1 |          0.1% |     2 → 1 | `unpark(Object)`                                                    | `jdk.internal.misc.Unsafe`                                 |
|  -50.0% |    -1 |          0.1% |     2 → 1 | `nextNode()`                                                        | `java.util.HashMap$HashIterator`                           |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `unlink0(long)`                                                     | `sun.nio.fs.UnixNativeDispatcher`                          |

##### Ours

|  Change | Delta |             % |   Samples | Function                            | Location                                                   |
| ------: | ----: | ------------: | --------: | ----------------------------------- | ---------------------------------------------------------- |
|  -20.5% |   -16 |   4.8% → 3.8% |   78 → 62 | `vectorSum()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -7.4% |   -14 | 11.5% → 10.6% | 188 → 174 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -75.0% |    -3 |   0.2% → 0.1% |     4 → 1 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `average(List)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `merge(Map, Map)`                   | `org.renaissance.jdk.concurrent.JavaKMeans`                |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                            | Location                                      |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------- | --------------------------------------------- |
|  -27.1% |   -13 | 2.9% → 2.1% | 48 → 35 | `copyOf(Object[], int)`                                             | `java.util.Arrays`                            |
|  -17.5% |   -11 | 3.8% → 3.2% | 63 → 52 | `computeIfAbsent(Object, Function)`                                 | `java.util.HashMap`                           |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `push(ForkJoinTask, ForkJoinPool, boolean)`                         | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `load(NativeLibraries$NativeLibraryImpl, String, boolean, boolean)` | `jdk.internal.loader.NativeLibraries`         |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `wrapSink(Sink)`                                                    | `java.util.stream.AbstractPipeline`           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `checkIndex(int, int)`                                              | `java.util.Objects`                           |
|  -50.0% |    -1 |        0.1% |   2 → 1 | `unpark(Object)`                                                    | `jdk.internal.misc.Unsafe`                    |
|  -50.0% |    -1 |        0.1% |   2 → 1 | `nextNode()`                                                        | `java.util.HashMap$HashIterator`              |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `unlink0(long)`                                                     | `sun.nio.fs.UnixNativeDispatcher`             |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % |   Samples | Function                                                    | Location                                                                              |
| ------: | ----: | ------------: | --------: | ----------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|   +3.8% |   +27 | 43.6% → 45.3% | 714 → 741 | `accumulate(Double[], double[])`                            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|     new |   +12 |   0.0% → 0.7% |    0 → 12 | `invokeStatic(Object, Object)`                              | `java.lang.invoke.LambdaForm$DMH.0x0000007001001400`                                  |
|     new |   +12 |   0.0% → 0.7% |    0 → 12 | `invoke(Object, Object, Object)`                            | `java.lang.invoke.LambdaForm$MH.0x0000007001080800`                                   |
|   +3.5% |   +11 | 19.3% → 20.0% | 316 → 327 | `average(List)`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|   +3.5% |   +11 | 19.3% → 20.0% | 316 → 327 | `computeClusterAverages()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|   +3.6% |   +11 | 18.8% → 19.5% | 308 → 319 | `computeDirectly()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|   +1.3% |   +10 | 48.4% → 49.1% | 793 → 803 | `vectorSum()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   +1.3% |   +10 | 48.4% → 49.1% | 793 → 803 | `computeDirectly()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| +900.0% |    +9 |   0.1% → 0.6% |    1 → 10 | `apply(Object)`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011dec00` |
|   +1.7% |    +7 | 24.6% → 25.0% | 402 → 409 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`   | `java.util.concurrent.ForkJoinPool`                                                   |
|  +62.5% |    +5 |   0.5% → 0.8% |    8 → 13 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`                                                       |
|  +62.5% |    +5 |   0.5% → 0.8% |    8 → 13 | `launchHarnessClass(String, String[])`                      | `org.renaissance.core.Launcher`                                                       |
|  +62.5% |    +5 |   0.5% → 0.8% |    8 → 13 | `main(String[])`                                            | `org.renaissance.core.Launcher`                                                       |
|  +71.4% |    +5 |   0.4% → 0.7% |    7 → 12 | `main(String[])`                                            | `org.renaissance.harness.RenaissanceSuite`                                            |
|  +71.4% |    +5 |   0.4% → 0.7% |    7 → 12 | `invokeExact_MT(Object, Object, Object, Object)`            | `java.lang.invoke.Invokers$Holder`                                                    |
|  +71.4% |    +5 |   0.4% → 0.7% |    7 → 12 | `invokeImpl(Object, Object[])`                              | `jdk.internal.reflect.DirectMethodHandleAccessor`                                     |
|  +71.4% |    +5 |   0.4% → 0.7% |    7 → 12 | `invoke(Object, Object[])`                                  | `jdk.internal.reflect.DirectMethodHandleAccessor`                                     |
|  +71.4% |    +5 |   0.4% → 0.7% |    7 → 12 | `invoke(Object, Object[])`                                  | `java.lang.reflect.Method`                                                            |
|  +57.1% |    +4 |   0.4% → 0.7% |    7 → 11 | `main(String[])`                                            | `org.renaissance.harness.RenaissanceSuite$`                                           |
|   +1.2% |    +4 | 20.6% → 20.9% | 337 → 341 | `invoke()`                                                  | `java.util.concurrent.ForkJoinTask`                                                   |

##### Ours

|  Change | Delta |             % |   Samples | Function                                                                                                               | Location                                                                              |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|   +3.8% |   +27 | 43.6% → 45.3% | 714 → 741 | `accumulate(Double[], double[])`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   +3.5% |   +11 | 19.3% → 20.0% | 316 → 327 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|   +3.5% |   +11 | 19.3% → 20.0% | 316 → 327 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|   +3.6% |   +11 | 18.8% → 19.5% | 308 → 319 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|   +1.3% |   +10 | 48.4% → 49.1% | 793 → 803 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   +1.3% |   +10 | 48.4% → 49.1% | 793 → 803 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| +900.0% |    +9 |   0.1% → 0.6% |    1 → 10 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011dec00` |
|  +62.5% |    +5 |   0.5% → 0.8% |    8 → 13 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                                       |
|  +62.5% |    +5 |   0.5% → 0.8% |    8 → 13 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                                       |
|  +62.5% |    +5 |   0.5% → 0.8% |    8 → 13 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                                       |
|  +71.4% |    +5 |   0.4% → 0.7% |    7 → 12 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                                            |
|  +57.1% |    +4 |   0.4% → 0.7% |    7 → 11 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                                           |
|  +60.0% |    +3 |   0.3% → 0.5% |     5 → 8 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                           |
|  +60.0% |    +3 |   0.3% → 0.5% |     5 → 8 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000070011715d8`                |
|  +60.0% |    +3 |   0.3% → 0.5% |     5 → 8 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                                           |
|  +75.0% |    +3 |   0.2% → 0.4% |     4 → 7 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                                             |
|   +0.8% |    +3 | 23.3% → 23.5% | 381 → 384 | `distance(Double[], Double[])`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +50.0% |    +2 |   0.2% → 0.4% |     4 → 6 | `generateData(int, int, int)`                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  +50.0% |    +2 |   0.2% → 0.4% |     4 → 6 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | `org.renaissance.jdk.concurrent.FjKmeans`                                             |
|   +7.1% |    +1 |          0.9% |   14 → 15 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |

##### Standard library

|  Change | Delta |             % |   Samples | Function                                                                    | Location                                             |
| ------: | ----: | ------------: | --------: | --------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new |   +12 |   0.0% → 0.7% |    0 → 12 | `invokeStatic(Object, Object)`                                              | `java.lang.invoke.LambdaForm$DMH.0x0000007001001400` |
|     new |   +12 |   0.0% → 0.7% |    0 → 12 | `invoke(Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x0000007001080800`  |
|   +1.7% |    +7 | 24.6% → 25.0% | 402 → 409 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`                   | `java.util.concurrent.ForkJoinPool`                  |
|  +71.4% |    +5 |   0.4% → 0.7% |    7 → 12 | `invokeExact_MT(Object, Object, Object, Object)`                            | `java.lang.invoke.Invokers$Holder`                   |
|  +71.4% |    +5 |   0.4% → 0.7% |    7 → 12 | `invokeImpl(Object, Object[])`                                              | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +71.4% |    +5 |   0.4% → 0.7% |    7 → 12 | `invoke(Object, Object[])`                                                  | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +71.4% |    +5 |   0.4% → 0.7% |    7 → 12 | `invoke(Object, Object[])`                                                  | `java.lang.reflect.Method`                           |
|   +1.2% |    +4 | 20.6% → 20.9% | 337 → 341 | `invoke()`                                                                  | `java.util.concurrent.ForkJoinTask`                  |
|  +60.0% |    +3 |   0.3% → 0.5% |     5 → 8 | `apply(Object)`                                                             | `scala.runtime.function.JProcedure1`                 |
|  +60.0% |    +3 |   0.3% → 0.5% |     5 → 8 | `foreach(Function1)`                                                        | `scala.collection.immutable.List`                    |
| +100.0% |    +3 |   0.2% → 0.4% |     3 → 6 | `putMapEntries(Map, boolean)`                                               | `java.util.HashMap`                                  |
| +100.0% |    +3 |   0.2% → 0.4% |     3 → 6 | `<init>(Map)`                                                               | `java.util.HashMap`                                  |
|  +66.7% |    +2 |   0.2% → 0.3% |     3 → 5 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`               | `java.util.zip.Inflater`                             |
|  +66.7% |    +2 |   0.2% → 0.3% |     3 → 5 | `inflate(byte[], int, int)`                                                 | `java.util.zip.Inflater`                             |
|  +66.7% |    +2 |   0.2% → 0.3% |     3 → 5 | `read(byte[], int, int)`                                                    | `java.util.zip.InflaterInputStream`                  |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `getBytes()`                                                                | `jdk.internal.loader.Resource`                       |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `getBytes()`                                                                | `jdk.internal.loader.URLClassPath$JarLoader$2`       |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `defineClass(String, Resource)`                                             | `java.net.URLClassLoader`                            |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `run()`                                                                     | `java.net.URLClassLoader$1`                          |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` | `java.security.AccessController`                     |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % |       Samples | Function                                             | Location                                                   |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------- | ---------------------------------------------------------- |
|   -3.0% |   -24 | 48.2% → 46.8% |     789 → 765 | `computeDirectly()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -1.2% |   -16 | 79.6% → 78.8% | 1,303 → 1,287 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|   -1.3% |   -16 | 73.7% → 72.8% | 1,206 → 1,190 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                |
|   -1.2% |   -15 | 75.9% → 75.1% | 1,242 → 1,227 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                        |
|   -6.5% |   -13 | 12.2% → 11.4% |     199 → 186 | `collectClusters(int[])`                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -27.1% |   -13 |   2.9% → 2.1% |       48 → 35 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                         |
|  -31.0% |   -13 |   2.6% → 1.8% |       42 → 29 | `grow(int)`                                          | `java.util.ArrayList`                                      |
|  -31.0% |   -13 |   2.6% → 1.8% |       42 → 29 | `grow()`                                             | `java.util.ArrayList`                                      |
|  -31.0% |   -13 |   2.6% → 1.8% |       42 → 29 | `add(Object, Object[], int)`                         | `java.util.ArrayList`                                      |
|  -31.0% |   -13 |   2.6% → 1.8% |       42 → 29 | `add(Object)`                                        | `java.util.ArrayList`                                      |
|   -1.0% |   -12 | 75.6% → 75.0% | 1,237 → 1,225 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                        |
|   -1.9% |   -11 | 34.8% → 34.1% |     569 → 558 | `findNearestCentroid()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -0.6% |   -10 | 96.6% → 96.1% | 1,581 → 1,571 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|   -0.5% |    -8 | 99.3% → 99.0% | 1,625 → 1,617 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                        |
| removed |    -7 |   0.4% → 0.0% |         7 → 0 | `invokeStatic(Object, Object)`                       | `java.lang.invoke.LambdaForm$DMH.0x000000c001001400`       |
| removed |    -7 |   0.4% → 0.0% |         7 → 0 | `invoke(Object, Object, Object)`                     | `java.lang.invoke.LambdaForm$MH.0x000000c001080800`        |
|   -0.4% |    -7 | 99.1% → 98.9% | 1,623 → 1,616 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|   -0.4% |    -7 | 99.1% → 98.9% | 1,623 → 1,616 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                       |
|   -0.3% |    -4 | 97.3% → 97.2% | 1,592 → 1,588 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                        |
|   -0.3% |    -4 | 97.3% → 97.2% | 1,592 → 1,588 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                        |

##### Ours

|  Change | Delta |             % |       Samples | Function                                                              | Location                                                               |
| ------: | ----: | ------------: | ------------: | --------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|   -3.0% |   -24 | 48.2% → 46.8% |     789 → 765 | `computeDirectly()`                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -6.5% |   -13 | 12.2% → 11.4% |     199 → 186 | `collectClusters(int[])`                                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -1.9% |   -11 | 34.8% → 34.1% |     569 → 558 | `findNearestCentroid()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -0.4% |    -7 | 99.1% → 98.9% | 1,623 → 1,616 | `compute()`                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  -12.0% |    -3 |   1.5% → 1.3% |       25 → 22 | `call()`                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011d79d8` |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `jvmSpecVersion()`                                                    | `org.renaissance.core.BenchmarkSuite`                                  |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `isBenchmarkCompatible(BenchmarkDescriptor)`                          | `org.renaissance.core.BenchmarkSuite`                                  |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `excludeIncompatible$$anonfun$1(BenchmarkSuite, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `apply(Object)`                                                       | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000c00116d920` |
|  -10.0% |    -1 |          0.6% |        10 → 9 | `lambda$merge$7(Map, Object, List)`                                   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -10.0% |    -1 |          0.6% |        10 → 9 | `accept(Object, Object)`                                              | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dee50` |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `visitFile(Path, BasicFileAttributes)`                                | `org.renaissance.core.DirUtils$1`                                      |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `visitFile(Object, BasicFileAttributes)`                              | `org.renaissance.core.DirUtils$1`                                      |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `deleteRecursively(Path, boolean)`                                    | `org.renaissance.core.DirUtils`                                        |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `deleteRecursively(Path)`                                             | `org.renaissance.core.DirUtils`                                        |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `lambda$createScratchDirectory$1(Path)`                               | `org.renaissance.core.DirUtils`                                        |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `run()`                                                               | `org.renaissance.core.DirUtils$$Lambda.0x000000c001009000`             |

##### Standard library

|  Change | Delta |             % |       Samples | Function                                             | Location                                             |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------- | ---------------------------------------------------- |
|   -1.2% |   -16 | 79.6% → 78.8% | 1,303 → 1,287 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|   -1.3% |   -16 | 73.7% → 72.8% | 1,206 → 1,190 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`          |
|   -1.2% |   -15 | 75.9% → 75.1% | 1,242 → 1,227 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                  |
|  -27.1% |   -13 |   2.9% → 2.1% |       48 → 35 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                   |
|  -31.0% |   -13 |   2.6% → 1.8% |       42 → 29 | `grow(int)`                                          | `java.util.ArrayList`                                |
|  -31.0% |   -13 |   2.6% → 1.8% |       42 → 29 | `grow()`                                             | `java.util.ArrayList`                                |
|  -31.0% |   -13 |   2.6% → 1.8% |       42 → 29 | `add(Object, Object[], int)`                         | `java.util.ArrayList`                                |
|  -31.0% |   -13 |   2.6% → 1.8% |       42 → 29 | `add(Object)`                                        | `java.util.ArrayList`                                |
|   -1.0% |   -12 | 75.6% → 75.0% | 1,237 → 1,225 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                  |
|   -0.6% |   -10 | 96.6% → 96.1% | 1,581 → 1,571 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|   -0.5% |    -8 | 99.3% → 99.0% | 1,625 → 1,617 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                  |
| removed |    -7 |   0.4% → 0.0% |         7 → 0 | `invokeStatic(Object, Object)`                       | `java.lang.invoke.LambdaForm$DMH.0x000000c001001400` |
| removed |    -7 |   0.4% → 0.0% |         7 → 0 | `invoke(Object, Object, Object)`                     | `java.lang.invoke.LambdaForm$MH.0x000000c001080800`  |
|   -0.4% |    -7 | 99.1% → 98.9% | 1,623 → 1,616 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                 |
|   -0.3% |    -4 | 97.3% → 97.2% | 1,592 → 1,588 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                  |
|   -0.3% |    -4 | 97.3% → 97.2% | 1,592 → 1,588 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                  |
|  -21.1% |    -4 |   1.2% → 0.9% |       19 → 15 | `exec()`                                             | `java.util.concurrent.ForkJoinTask$AdaptedCallable`  |
|   -3.1% |    -2 |   3.9% → 3.8% |       64 → 62 | `computeIfAbsent(Object, Function)`                  | `java.util.HashMap`                                  |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `push(ForkJoinTask, ForkJoinPool, boolean)`          | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `fork()`                                             | `java.util.concurrent.ForkJoinTask`                  |

# Allocated heap profile diff

Allocated 37.3 GiB → 37.6 GiB (+346.337 MiB, +0.9%) over 1,980 samples → 2,040 samples (19.3 MiB → 18.9 MiB per sample).

| Category         | Change |        Delta |             % |                Size |       Samples |
| ---------------- | -----: | -----------: | ------------: | ------------------: | ------------: |
| Standard library |  +3.6% |   +1.246 GiB | 93.7% → 96.2% | 34.9 GiB → 36.2 GiB | 1,865 → 1,915 |
| Ours             | -38.9% | -930.155 MiB |   6.3% → 3.8% | 2.34 GiB → 1.43 GiB |     113 → 123 |
| Unknown          | +15.2% |       +272 B |         <0.1% | 1.74 KiB → 2.01 KiB |             2 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|   Change |        Delta |             % |                Size |       Samples | Function                                     | Location                                                   |
| -------: | -----------: | ------------: | ------------------: | ------------: | -------------------------------------------- | ---------------------------------------------------------- |
|    +3.6% |   +1.253 GiB | 92.5% → 95.0% | 34.5 GiB → 35.7 GiB | 1,718 → 1,779 | `copyOf(Object[], int)`                      | `java.util.Arrays`                                         |
| +1476.3% | +156.276 MiB |  <0.1% → 0.4% |  10.6 MiB → 167 MiB |       23 → 26 | `copyOf(byte[], int)`                        | `java.util.Arrays`                                         |
| +5303.9% |  +75.198 MiB |  <0.1% → 0.2% | 1.42 MiB → 76.6 MiB |         1 → 7 | `merge(Map, Map)`                            | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  +382.3% |  +52.159 MiB |  <0.1% → 0.2% | 13.6 MiB → 65.8 MiB |        11 → 8 | `collectClusters(int[])`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +246.2% |  +47.256 MiB |   0.1% → 0.2% | 19.2 MiB → 66.5 MiB |         5 → 3 | `resize()`                                   | `java.util.HashMap`                                        |
|   +33.9% |  +30.839 MiB |   0.2% → 0.3% |  90.9 MiB → 122 MiB |        10 → 5 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                                        |
| +2330.1% |  +10.473 MiB |         <0.1% |  460 KiB → 10.9 MiB |         1 → 5 | `vectorSum()`                                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   +15.7% |   +8.962 MiB |          0.2% | 57.3 MiB → 66.2 MiB |         2 → 1 | `computeClusterAverages()`                   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|      new |   +4.135 MiB |  0.0% → <0.1% |      0 B → 4.14 MiB |         0 → 2 | `iterator()`                                 | `java.util.HashMap$EntrySet`                               |
|  +208.5% |   +2.364 MiB |         <0.1% |  1.13 MiB → 3.5 MiB |         3 → 9 | `opWrapSink(int, Sink)`                      | `java.util.stream.IntPipeline$1`                           |
|      new | +803.671 KiB |  0.0% → <0.1% |       0 B → 804 KiB |         0 → 1 | `entrySet()`                                 | `java.util.HashMap`                                        |
|      new | +785.937 KiB |  0.0% → <0.1% |       0 B → 786 KiB |         0 → 2 | `getClassLoadingLock(String)`                | `java.lang.ClassLoader`                                    |
|   +12.6% | +481.015 KiB |         <0.1% |  3.73 MiB → 4.2 MiB |             8 | `intStream(Spliterator$OfInt, boolean)`      | `java.util.stream.StreamSupport`                           |
|   +30.4% | +470.468 KiB |         <0.1% | 1.51 MiB → 1.97 MiB |         4 → 5 | `allocateInstance(Class)`                    | `jdk.internal.misc.Unsafe`                                 |
|  +112.8% | +452.578 KiB |         <0.1% |   401 KiB → 854 KiB |         1 → 2 | `transferTo(OutputStream)`                   | `java.io.InputStream`                                      |
|      new | +434.101 KiB |  0.0% → <0.1% |       0 B → 434 KiB |         0 → 1 | `compress(char[], int, int)`                 | `java.lang.StringUTF16`                                    |
|      new | +432.679 KiB |  0.0% → <0.1% |       0 B → 433 KiB |         0 → 1 | `newString(byte[], long)`                    | `java.lang.StringConcatHelper`                             |
|      new | +402.046 KiB |  0.0% → <0.1% |       0 B → 402 KiB |         0 → 1 | `findBootstrapClass(String)`                 | `java.lang.ClassLoader`                                    |
|      new | +390.039 KiB |  0.0% → <0.1% |       0 B → 390 KiB |         0 → 1 | `<init>(ClassReader, int)`                   | `jdk.internal.org.objectweb.asm.ClassWriter`               |
|   +16.4% | +273.343 KiB |         <0.1% | 1.62 MiB → 1.89 MiB |             5 | `builder(long, IntFunction)`                 | `java.util.stream.Nodes`                                   |

##### Standard library

|   Change |        Delta |             % |                Size |       Samples | Function                                     | Location                                     |
| -------: | -----------: | ------------: | ------------------: | ------------: | -------------------------------------------- | -------------------------------------------- |
|    +3.6% |   +1.253 GiB | 92.5% → 95.0% | 34.5 GiB → 35.7 GiB | 1,718 → 1,779 | `copyOf(Object[], int)`                      | `java.util.Arrays`                           |
| +1476.3% | +156.276 MiB |  <0.1% → 0.4% |  10.6 MiB → 167 MiB |       23 → 26 | `copyOf(byte[], int)`                        | `java.util.Arrays`                           |
|  +246.2% |  +47.256 MiB |   0.1% → 0.2% | 19.2 MiB → 66.5 MiB |         5 → 3 | `resize()`                                   | `java.util.HashMap`                          |
|   +33.9% |  +30.839 MiB |   0.2% → 0.3% |  90.9 MiB → 122 MiB |        10 → 5 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                          |
|      new |   +4.135 MiB |  0.0% → <0.1% |      0 B → 4.14 MiB |         0 → 2 | `iterator()`                                 | `java.util.HashMap$EntrySet`                 |
|  +208.5% |   +2.364 MiB |         <0.1% |  1.13 MiB → 3.5 MiB |         3 → 9 | `opWrapSink(int, Sink)`                      | `java.util.stream.IntPipeline$1`             |
|      new | +803.671 KiB |  0.0% → <0.1% |       0 B → 804 KiB |         0 → 1 | `entrySet()`                                 | `java.util.HashMap`                          |
|      new | +785.937 KiB |  0.0% → <0.1% |       0 B → 786 KiB |         0 → 2 | `getClassLoadingLock(String)`                | `java.lang.ClassLoader`                      |
|   +12.6% | +481.015 KiB |         <0.1% |  3.73 MiB → 4.2 MiB |             8 | `intStream(Spliterator$OfInt, boolean)`      | `java.util.stream.StreamSupport`             |
|   +30.4% | +470.468 KiB |         <0.1% | 1.51 MiB → 1.97 MiB |         4 → 5 | `allocateInstance(Class)`                    | `jdk.internal.misc.Unsafe`                   |
|  +112.8% | +452.578 KiB |         <0.1% |   401 KiB → 854 KiB |         1 → 2 | `transferTo(OutputStream)`                   | `java.io.InputStream`                        |
|      new | +434.101 KiB |  0.0% → <0.1% |       0 B → 434 KiB |         0 → 1 | `compress(char[], int, int)`                 | `java.lang.StringUTF16`                      |
|      new | +432.679 KiB |  0.0% → <0.1% |       0 B → 433 KiB |         0 → 1 | `newString(byte[], long)`                    | `java.lang.StringConcatHelper`               |
|      new | +402.046 KiB |  0.0% → <0.1% |       0 B → 402 KiB |         0 → 1 | `findBootstrapClass(String)`                 | `java.lang.ClassLoader`                      |
|      new | +390.039 KiB |  0.0% → <0.1% |       0 B → 390 KiB |         0 → 1 | `<init>(ClassReader, int)`                   | `jdk.internal.org.objectweb.asm.ClassWriter` |
|   +16.4% | +273.343 KiB |         <0.1% | 1.62 MiB → 1.89 MiB |             5 | `builder(long, IntFunction)`                 | `java.util.stream.Nodes`                     |
|      new | +268.062 KiB |  0.0% → <0.1% |       0 B → 268 KiB |         0 → 1 | `<init>()`                                   | `jdk.internal.org.objectweb.asm.ByteVector`  |
|   +17.3% |  +68.367 KiB |         <0.1% |   396 KiB → 464 KiB |             1 | `allocateUninitializedArray0(Class, int)`    | `jdk.internal.misc.Unsafe`                   |
|      ~0% |       +240 B |          0.1% |            20.5 MiB |             1 | `<init>(int)`                                | `jdk.internal.org.objectweb.asm.ByteVector`  |

##### Ours

|   Change |        Delta |            % |                Size | Samples | Function                     | Location                                                   |
| -------: | -----------: | -----------: | ------------------: | ------: | ---------------------------- | ---------------------------------------------------------- |
| +5303.9% |  +75.198 MiB | <0.1% → 0.2% | 1.42 MiB → 76.6 MiB |   1 → 7 | `merge(Map, Map)`            | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  +382.3% |  +52.159 MiB | <0.1% → 0.2% | 13.6 MiB → 65.8 MiB |  11 → 8 | `collectClusters(int[])`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +2330.1% |  +10.473 MiB |        <0.1% |  460 KiB → 10.9 MiB |   1 → 5 | `vectorSum()`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   +15.7% |   +8.962 MiB |         0.2% | 57.3 MiB → 66.2 MiB |   2 → 1 | `computeClusterAverages()`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|      new | +201.312 KiB | 0.0% → <0.1% |       0 B → 201 KiB |   0 → 1 | `add(double[], double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|      ~0% |       +200 B |        <0.1% |            3.96 MiB |       8 | `lambda$generateData$4(int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |        Delta |            % |                Size | Samples | Function                                          | Location                                                   |
| ------: | -----------: | -----------: | ------------------: | ------: | ------------------------------------------------- | ---------------------------------------------------------- |
|  -40.8% | -583.606 MiB |  3.8% → 2.2% |   1.4 GiB → 847 MiB | 61 → 70 | `findNearestCentroid()`                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -72.5% | -222.115 MiB |  0.8% → 0.2% |  306 MiB → 84.1 MiB |  11 → 4 | `createSubtask(int, int)`                         | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -54.8% | -172.191 MiB |  0.8% → 0.4% |   314 MiB → 142 MiB |   9 → 7 | `createSubtask(int, int)`                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -97.0% | -156.435 MiB | 0.4% → <0.1% |  161 MiB → 4.76 MiB |  12 → 9 | `<init>(InputStream, Inflater, int)`              | `java.util.zip.InflaterInputStream`                        |
|  -64.0% |   -86.61 MiB |  0.4% → 0.1% |  135 MiB → 48.7 MiB |   9 → 7 | `grow(int)`                                       | `java.util.ArrayList`                                      |
|  -36.4% |  -61.048 MiB |  0.4% → 0.3% |   168 MiB → 107 MiB |   3 → 5 | `lambda$collectClusters$0(Double[])`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -38.2% |  -37.151 MiB |  0.3% → 0.2% |   97.2 MiB → 60 MiB |   5 → 7 | `lambda$merge$6(List, List)`                      | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -46.5% |   -4.781 MiB |        <0.1% | 10.3 MiB → 5.51 MiB |   9 → 4 | `copyOf(Object[], int, Class)`                    | `java.util.Arrays`                                         |
|  -44.8% |   -2.014 MiB |        <0.1% | 4.49 MiB → 2.48 MiB |  12 → 7 | `mapToObj(IntFunction, int)`                      | `java.util.stream.IntPipeline`                             |
| removed |   -1.032 MiB | <0.1% → 0.0% |      1.03 MiB → 0 B |   1 → 0 | `collectGarbage(String)`                          | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`   |
|  -46.0% | -988.343 KiB |        <0.1% |  2.1 MiB → 1.13 MiB |   6 → 3 | `range(int, int)`                                 | `java.util.stream.IntStream`                               |
| removed | -805.578 KiB | <0.1% → 0.0% |       806 KiB → 0 B |   3 → 0 | `initClassName()`                                 | `java.lang.Class`                                          |
| removed | -781.718 KiB | <0.1% → 0.0% |       782 KiB → 0 B |   2 → 0 | `clone()`                                         | `java.lang.Object`                                         |
| removed | -402.054 KiB | <0.1% → 0.0% |       402 KiB → 0 B |   1 → 0 | `toExternalForm(URL)`                             | `java.net.URLStreamHandler`                                |
| removed | -396.578 KiB | <0.1% → 0.0% |       397 KiB → 0 B |   1 → 0 | `visitField(int, String, String, String, Object)` | `jdk.internal.org.objectweb.asm.ClassWriter`               |
| removed | -387.054 KiB | <0.1% → 0.0% |       387 KiB → 0 B |   1 → 0 | `putVal(Object, Object, boolean)`                 | `java.util.concurrent.ConcurrentHashMap`                   |
| removed |  -73.929 KiB | <0.1% → 0.0% |      73.9 KiB → 0 B |   1 → 0 | `getInputStream(ZipEntry)`                        | `java.util.zip.ZipFile`                                    |
|   -0.1% |  -14.359 KiB |        <0.1% |            10.6 MiB | 22 → 24 | `valueOf(double)`                                 | `java.lang.Double`                                         |
|   -0.1% |       -256 B |        <0.1% |             395 KiB |       1 | `enlarge(int)`                                    | `jdk.internal.org.objectweb.asm.ByteVector`                |
|     ~0% |        -88 B |        <0.1% |             400 KiB |       1 | `initCEN(int, ZipCoder)`                          | `java.util.zip.ZipFile$Source`                             |

##### Standard library

|  Change |        Delta |            % |                Size | Samples | Function                                          | Location                                     |
| ------: | -----------: | -----------: | ------------------: | ------: | ------------------------------------------------- | -------------------------------------------- |
|  -97.0% | -156.435 MiB | 0.4% → <0.1% |  161 MiB → 4.76 MiB |  12 → 9 | `<init>(InputStream, Inflater, int)`              | `java.util.zip.InflaterInputStream`          |
|  -64.0% |   -86.61 MiB |  0.4% → 0.1% |  135 MiB → 48.7 MiB |   9 → 7 | `grow(int)`                                       | `java.util.ArrayList`                        |
|  -46.5% |   -4.781 MiB |        <0.1% | 10.3 MiB → 5.51 MiB |   9 → 4 | `copyOf(Object[], int, Class)`                    | `java.util.Arrays`                           |
|  -44.8% |   -2.014 MiB |        <0.1% | 4.49 MiB → 2.48 MiB |  12 → 7 | `mapToObj(IntFunction, int)`                      | `java.util.stream.IntPipeline`               |
|  -46.0% | -988.343 KiB |        <0.1% |  2.1 MiB → 1.13 MiB |   6 → 3 | `range(int, int)`                                 | `java.util.stream.IntStream`                 |
| removed | -805.578 KiB | <0.1% → 0.0% |       806 KiB → 0 B |   3 → 0 | `initClassName()`                                 | `java.lang.Class`                            |
| removed | -781.718 KiB | <0.1% → 0.0% |       782 KiB → 0 B |   2 → 0 | `clone()`                                         | `java.lang.Object`                           |
| removed | -402.054 KiB | <0.1% → 0.0% |       402 KiB → 0 B |   1 → 0 | `toExternalForm(URL)`                             | `java.net.URLStreamHandler`                  |
| removed | -396.578 KiB | <0.1% → 0.0% |       397 KiB → 0 B |   1 → 0 | `visitField(int, String, String, String, Object)` | `jdk.internal.org.objectweb.asm.ClassWriter` |
| removed | -387.054 KiB | <0.1% → 0.0% |       387 KiB → 0 B |   1 → 0 | `putVal(Object, Object, boolean)`                 | `java.util.concurrent.ConcurrentHashMap`     |
| removed |  -73.929 KiB | <0.1% → 0.0% |      73.9 KiB → 0 B |   1 → 0 | `getInputStream(ZipEntry)`                        | `java.util.zip.ZipFile`                      |
|   -0.1% |  -14.359 KiB |        <0.1% |            10.6 MiB | 22 → 24 | `valueOf(double)`                                 | `java.lang.Double`                           |
|   -0.1% |       -256 B |        <0.1% |             395 KiB |       1 | `enlarge(int)`                                    | `jdk.internal.org.objectweb.asm.ByteVector`  |
|     ~0% |        -88 B |        <0.1% |             400 KiB |       1 | `initCEN(int, ZipCoder)`                          | `java.util.zip.ZipFile$Source`               |
|     ~0% |        -32 B |        <0.1% |             667 KiB |       1 | `<init>(InputStream, int)`                        | `java.util.jar.Manifest$FastInputStream`     |
|     ~0% |        -32 B |        <0.1% |             387 KiB |       1 | `newString(byte[], int, int)`                     | `java.lang.StringLatin1`                     |

##### Ours

|  Change |        Delta |            % |               Size | Samples | Function                             | Location                                                   |
| ------: | -----------: | -----------: | -----------------: | ------: | ------------------------------------ | ---------------------------------------------------------- |
|  -40.8% | -583.606 MiB |  3.8% → 2.2% |  1.4 GiB → 847 MiB | 61 → 70 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -72.5% | -222.115 MiB |  0.8% → 0.2% | 306 MiB → 84.1 MiB |  11 → 4 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -54.8% | -172.191 MiB |  0.8% → 0.4% |  314 MiB → 142 MiB |   9 → 7 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -36.4% |  -61.048 MiB |  0.4% → 0.3% |  168 MiB → 107 MiB |   3 → 5 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -38.2% |  -37.151 MiB |  0.3% → 0.2% |  97.2 MiB → 60 MiB |   5 → 7 | `lambda$merge$6(List, List)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |   -1.032 MiB | <0.1% → 0.0% |     1.03 MiB → 0 B |   1 → 0 | `collectGarbage(String)`             | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`   |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|   Change |        Delta |             % |                Size |       Samples | Function                                             | Location                                                   |
| -------: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------------------- | ---------------------------------------------------------- |
|   +13.5% |   +2.295 GiB | 45.6% → 51.3% |   17 GiB → 19.3 GiB |     855 → 928 | `grow(int)`                                          | `java.util.ArrayList`                                      |
|   +65.6% |   +2.276 GiB |  9.3% → 15.3% | 3.47 GiB → 5.75 GiB |     225 → 237 | `collectClusters(int[])`                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +69.2% |   +2.205 GiB |  8.6% → 14.3% | 3.19 GiB → 5.39 GiB |     203 → 218 | `grow()`                                             | `java.util.ArrayList`                                      |
|   +69.2% |   +2.205 GiB |  8.6% → 14.3% | 3.19 GiB → 5.39 GiB |     203 → 218 | `add(Object, Object[], int)`                         | `java.util.ArrayList`                                      |
|   +69.2% |   +2.205 GiB |  8.6% → 14.3% | 3.19 GiB → 5.39 GiB |     203 → 218 | `add(Object)`                                        | `java.util.ArrayList`                                      |
|    +8.5% |   +1.959 GiB | 61.9% → 66.6% |   23.1 GiB → 25 GiB | 1,197 → 1,267 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|    +7.5% |   +1.776 GiB | 63.2% → 67.3% | 23.5 GiB → 25.3 GiB | 1,216 → 1,284 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                        |
|    +7.5% |   +1.776 GiB | 63.2% → 67.3% | 23.5 GiB → 25.3 GiB | 1,216 → 1,284 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                        |
|   +35.1% |   +1.706 GiB | 13.1% → 17.5% | 4.87 GiB → 6.57 GiB |     286 → 307 | `computeDirectly()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    +3.6% |   +1.249 GiB | 92.5% → 95.0% | 34.5 GiB → 35.7 GiB | 1,727 → 1,783 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                         |
|    +1.9% | +664.407 MiB | 92.9% → 93.8% | 34.6 GiB → 35.3 GiB | 1,738 → 1,811 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                        |
|    +1.2% | +441.666 MiB | 93.6% → 93.9% | 34.9 GiB → 35.3 GiB | 1,754 → 1,827 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|    +0.9% | +347.381 MiB |         99.4% |   37 GiB → 37.4 GiB | 1,853 → 1,915 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|    +0.9% | +347.381 MiB |         99.4% |   37 GiB → 37.4 GiB | 1,853 → 1,915 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                       |
|    +0.9% | +347.381 MiB |         99.4% |   37 GiB → 37.4 GiB | 1,853 → 1,915 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                        |
|    +0.9% | +327.543 MiB |         92.8% | 34.6 GiB → 34.9 GiB | 1,732 → 1,801 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                        |
|    +0.9% | +327.543 MiB |         92.8% | 34.6 GiB → 34.9 GiB | 1,732 → 1,801 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                |
|      new | +207.014 MiB |   0.0% → 0.5% |       0 B → 207 MiB |       0 → 118 | `invokeStatic(Object, Object)`                       | `java.lang.invoke.LambdaForm$DMH.0x0000007001001400`       |
|      new | +207.014 MiB |   0.0% → 0.5% |       0 B → 207 MiB |       0 → 118 | `invoke(Object, Object, Object)`                     | `java.lang.invoke.LambdaForm$MH.0x0000007001080800`        |
| +1677.8% | +156.761 MiB |  <0.1% → 0.4% |  9.34 MiB → 166 MiB |       20 → 24 | `getBytes()`                                         | `jdk.internal.loader.Resource`                             |

##### Standard library

|   Change |        Delta |             % |                Size |       Samples | Function                                             | Location                                             |
| -------: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------------------- | ---------------------------------------------------- |
|   +13.5% |   +2.295 GiB | 45.6% → 51.3% |   17 GiB → 19.3 GiB |     855 → 928 | `grow(int)`                                          | `java.util.ArrayList`                                |
|   +69.2% |   +2.205 GiB |  8.6% → 14.3% | 3.19 GiB → 5.39 GiB |     203 → 218 | `grow()`                                             | `java.util.ArrayList`                                |
|   +69.2% |   +2.205 GiB |  8.6% → 14.3% | 3.19 GiB → 5.39 GiB |     203 → 218 | `add(Object, Object[], int)`                         | `java.util.ArrayList`                                |
|   +69.2% |   +2.205 GiB |  8.6% → 14.3% | 3.19 GiB → 5.39 GiB |     203 → 218 | `add(Object)`                                        | `java.util.ArrayList`                                |
|    +8.5% |   +1.959 GiB | 61.9% → 66.6% |   23.1 GiB → 25 GiB | 1,197 → 1,267 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|    +7.5% |   +1.776 GiB | 63.2% → 67.3% | 23.5 GiB → 25.3 GiB | 1,216 → 1,284 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                  |
|    +7.5% |   +1.776 GiB | 63.2% → 67.3% | 23.5 GiB → 25.3 GiB | 1,216 → 1,284 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                  |
|    +3.6% |   +1.249 GiB | 92.5% → 95.0% | 34.5 GiB → 35.7 GiB | 1,727 → 1,783 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                   |
|    +1.9% | +664.407 MiB | 92.9% → 93.8% | 34.6 GiB → 35.3 GiB | 1,738 → 1,811 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                  |
|    +1.2% | +441.666 MiB | 93.6% → 93.9% | 34.9 GiB → 35.3 GiB | 1,754 → 1,827 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|    +0.9% | +347.381 MiB |         99.4% |   37 GiB → 37.4 GiB | 1,853 → 1,915 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                 |
|    +0.9% | +347.381 MiB |         99.4% |   37 GiB → 37.4 GiB | 1,853 → 1,915 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                  |
|    +0.9% | +327.543 MiB |         92.8% | 34.6 GiB → 34.9 GiB | 1,732 → 1,801 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                  |
|    +0.9% | +327.543 MiB |         92.8% | 34.6 GiB → 34.9 GiB | 1,732 → 1,801 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`          |
|      new | +207.014 MiB |   0.0% → 0.5% |       0 B → 207 MiB |       0 → 118 | `invokeStatic(Object, Object)`                       | `java.lang.invoke.LambdaForm$DMH.0x0000007001001400` |
|      new | +207.014 MiB |   0.0% → 0.5% |       0 B → 207 MiB |       0 → 118 | `invoke(Object, Object, Object)`                     | `java.lang.invoke.LambdaForm$MH.0x0000007001080800`  |
| +1677.8% | +156.761 MiB |  <0.1% → 0.4% |  9.34 MiB → 166 MiB |       20 → 24 | `getBytes()`                                         | `jdk.internal.loader.Resource`                       |
| +1677.8% | +156.761 MiB |  <0.1% → 0.4% |  9.34 MiB → 166 MiB |       20 → 24 | `getBytes()`                                         | `jdk.internal.loader.URLClassPath$JarLoader$2`       |
| +1476.3% | +156.276 MiB |  <0.1% → 0.4% |  10.6 MiB → 167 MiB |       23 → 26 | `copyOf(byte[], int)`                                | `java.util.Arrays`                                   |
| +8684.1% | +155.651 MiB |  <0.1% → 0.4% |  1.79 MiB → 157 MiB |             4 | `<init>()`                                           | `scala.collection.immutable.Iterable$`               |

##### Ours

|   Change |        Delta |             % |                Size |       Samples | Function                                                    | Location                                                               |
| -------: | -----------: | ------------: | ------------------: | ------------: | ----------------------------------------------------------- | ---------------------------------------------------------------------- |
|   +65.6% |   +2.276 GiB |  9.3% → 15.3% | 3.47 GiB → 5.75 GiB |     225 → 237 | `collectClusters(int[])`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   +35.1% |   +1.706 GiB | 13.1% → 17.5% | 4.87 GiB → 6.57 GiB |     286 → 307 | `computeDirectly()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|    +0.9% | +347.381 MiB |         99.4% |   37 GiB → 37.4 GiB | 1,853 → 1,915 | `compute()`                                                 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  +296.4% | +155.085 MiB |   0.1% → 0.5% |  52.3 MiB → 207 MiB |     120 → 119 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`                                        |
|  +293.4% | +155.085 MiB |   0.1% → 0.5% |  52.9 MiB → 208 MiB |     122 → 121 | `launchHarnessClass(String, String[])`                      | `org.renaissance.core.Launcher`                                        |
|  +293.4% | +155.085 MiB |   0.1% → 0.5% |  52.9 MiB → 208 MiB |     122 → 121 | `main(String[])`                                            | `org.renaissance.core.Launcher`                                        |
|  +650.7% |  +25.786 MiB |  <0.1% → 0.1% | 3.96 MiB → 29.7 MiB |        8 → 69 | `apply(int)`                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011798d8` |
|   +33.5% |    +19.8 MiB |          0.2% |   59 MiB → 78.8 MiB |         4 → 7 | `computeClusterAverages()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   +33.5% |    +19.8 MiB |          0.2% |   59 MiB → 78.8 MiB |         4 → 7 | `computeDirectly()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  +607.8% |  +10.838 MiB |         <0.1% | 1.78 MiB → 12.6 MiB |         2 → 6 | `average(List)`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| +2330.1% |  +10.473 MiB |         <0.1% |  460 KiB → 10.9 MiB |         1 → 5 | `vectorSum()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| +2330.1% |  +10.473 MiB |         <0.1% |  460 KiB → 10.9 MiB |         1 → 5 | `computeDirectly()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|    +1.9% | +580.648 KiB |          0.1% | 29.2 MiB → 29.7 MiB |       68 → 69 | `lambda$generateData$5(int, int, Random[], int)`            | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|    +1.9% | +580.648 KiB |          0.1% | 29.2 MiB → 29.7 MiB |       68 → 69 | `generateData(int, int, int)`                               | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|    +1.9% | +580.648 KiB |          0.1% | 29.2 MiB → 29.7 MiB |       68 → 69 | `setUpBeforeAll(BenchmarkContext)`                          | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|      new | +452.593 KiB |  0.0% → <0.1% |       0 B → 453 KiB |         0 → 1 | `getBenchmarkClassLoader(BenchmarkDescriptor)`              | `org.renaissance.core.BenchmarkSuite`                                  |
|      new | +452.593 KiB |  0.0% → <0.1% |       0 B → 453 KiB |         0 → 1 | `createBenchmark(BenchmarkDescriptor)`                      | `org.renaissance.core.BenchmarkSuite`                                  |
|  +112.8% | +452.578 KiB |         <0.1% |   401 KiB → 854 KiB |         1 → 2 | `extractResource(String, Path)`                             | `org.renaissance.core.ResourceUtils`                                   |
|  +112.8% | +452.578 KiB |         <0.1% |   401 KiB → 854 KiB |         1 → 2 | `extractResources(Iterable, Path)`                          | `org.renaissance.core.ResourceUtils`                                   |
|  +112.8% | +452.578 KiB |         <0.1% |   401 KiB → 854 KiB |         1 → 2 | `createClassLoaderForModule(String)`                        | `org.renaissance.core.ModuleLoader`                                    |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                Size |       Samples | Function                            | Location                                                               |
| ------: | -----------: | ------------: | ------------------: | ------------: | ----------------------------------- | ---------------------------------------------------------------------- |
|   -6.4% |    -1.13 GiB | 47.3% → 43.9% | 17.6 GiB → 16.5 GiB |     881 → 862 | `toArray()`                         | `java.util.ArrayList`                                                  |
|   -3.4% |   -1.077 GiB | 84.5% → 80.9% | 31.5 GiB → 30.4 GiB | 1,538 → 1,579 | `lambda$merge$6(List, List)`        | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -3.4% |   -1.077 GiB | 84.5% → 80.9% | 31.5 GiB → 30.4 GiB | 1,538 → 1,579 | `apply(Object, Object)`             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011df098` |
|   -3.4% |   -1.077 GiB | 84.5% → 80.9% | 31.5 GiB → 30.4 GiB | 1,538 → 1,579 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`                                                    |
|   -3.4% |   -1.077 GiB | 84.5% → 80.9% | 31.5 GiB → 30.4 GiB | 1,538 → 1,579 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -3.4% |   -1.077 GiB | 84.5% → 80.9% | 31.5 GiB → 30.4 GiB | 1,538 → 1,579 | `accept(Object, Object)`            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dee50` |
|   -3.4% |   -1.077 GiB | 84.5% → 80.9% | 31.5 GiB → 30.4 GiB | 1,538 → 1,579 | `forEach(BiConsumer)`               | `java.util.HashMap`                                                    |
|   -3.2% |   -1.001 GiB | 84.6% → 81.1% | 31.5 GiB → 30.5 GiB | 1,544 → 1,590 | `merge(Map, Map)`                   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -3.2% |   -1.001 GiB | 84.6% → 81.1% | 31.5 GiB → 30.5 GiB | 1,544 → 1,590 | `combineResults(Map, Map)`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -3.2% |   -1.001 GiB | 84.6% → 81.1% | 31.5 GiB → 30.5 GiB | 1,544 → 1,590 | `combineResults(Object, Object)`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -40.8% | -583.606 MiB |   3.8% → 2.2% |   1.4 GiB → 847 MiB |       61 → 70 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -2.3% |  -561.13 MiB | 64.6% → 62.5% | 24.1 GiB → 23.5 GiB | 1,140 → 1,172 | `addAll(Collection)`                | `java.util.ArrayList`                                                  |
|   -6.8% | -526.158 MiB | 20.4% → 18.9% | 7.61 GiB → 7.09 GiB |     221 → 242 | `invoke()`                          | `java.util.concurrent.ForkJoinTask`                                    |
|   -6.7% | -504.719 MiB | 19.7% → 18.2% | 7.35 GiB → 6.86 GiB |     393 → 400 | `<init>(Collection)`                | `java.util.ArrayList`                                                  |
|   -4.2% |   -300.9 MiB | 18.9% → 18.0% | 7.06 GiB → 6.76 GiB |     209 → 228 | `lambda$run$0(int, List, int)`      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -4.2% |   -300.9 MiB | 18.9% → 18.0% | 7.06 GiB → 6.76 GiB |     209 → 228 | `call()`                            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011d79d8` |
|   -4.2% |   -300.9 MiB | 18.9% → 18.0% | 7.06 GiB → 6.76 GiB |     209 → 228 | `exec()`                            | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                    |
|  -72.5% | -222.115 MiB |   0.8% → 0.2% |  306 MiB → 84.1 MiB |        11 → 4 | `createSubtask(int, int)`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| removed | -208.059 MiB |   0.5% → 0.0% |       208 MiB → 0 B |       120 → 0 | `invokeStatic(Object, Object)`      | `java.lang.invoke.LambdaForm$DMH.0x000000c001001400`                   |
| removed | -208.059 MiB |   0.5% → 0.0% |       208 MiB → 0 B |       120 → 0 | `invoke(Object, Object, Object)`    | `java.lang.invoke.LambdaForm$MH.0x000000c001080800`                    |

##### Standard library

|  Change |        Delta |             % |                Size |       Samples | Function                                                                                | Location                                             |
| ------: | -----------: | ------------: | ------------------: | ------------: | --------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|   -6.4% |    -1.13 GiB | 47.3% → 43.9% | 17.6 GiB → 16.5 GiB |     881 → 862 | `toArray()`                                                                             | `java.util.ArrayList`                                |
|   -3.4% |   -1.077 GiB | 84.5% → 80.9% | 31.5 GiB → 30.4 GiB | 1,538 → 1,579 | `merge(Object, Object, BiFunction)`                                                     | `java.util.HashMap`                                  |
|   -3.4% |   -1.077 GiB | 84.5% → 80.9% | 31.5 GiB → 30.4 GiB | 1,538 → 1,579 | `forEach(BiConsumer)`                                                                   | `java.util.HashMap`                                  |
|   -2.3% |  -561.13 MiB | 64.6% → 62.5% | 24.1 GiB → 23.5 GiB | 1,140 → 1,172 | `addAll(Collection)`                                                                    | `java.util.ArrayList`                                |
|   -6.8% | -526.158 MiB | 20.4% → 18.9% | 7.61 GiB → 7.09 GiB |     221 → 242 | `invoke()`                                                                              | `java.util.concurrent.ForkJoinTask`                  |
|   -6.7% | -504.719 MiB | 19.7% → 18.2% | 7.35 GiB → 6.86 GiB |     393 → 400 | `<init>(Collection)`                                                                    | `java.util.ArrayList`                                |
|   -4.2% |   -300.9 MiB | 18.9% → 18.0% | 7.06 GiB → 6.76 GiB |     209 → 228 | `exec()`                                                                                | `java.util.concurrent.ForkJoinTask$AdaptedCallable`  |
| removed | -208.059 MiB |   0.5% → 0.0% |       208 MiB → 0 B |       120 → 0 | `invokeStatic(Object, Object)`                                                          | `java.lang.invoke.LambdaForm$DMH.0x000000c001001400` |
| removed | -208.059 MiB |   0.5% → 0.0% |       208 MiB → 0 B |       120 → 0 | `invoke(Object, Object, Object)`                                                        | `java.lang.invoke.LambdaForm$MH.0x000000c001080800`  |
|  -97.0% | -156.507 MiB |  0.4% → <0.1% |  161 MiB → 4.76 MiB |        13 → 9 | `getInputStream(ZipEntry)`                                                              | `java.util.zip.ZipFile`                              |
|  -97.0% | -156.507 MiB |  0.4% → <0.1% |  161 MiB → 4.76 MiB |        13 → 9 | `getInputStream(ZipEntry)`                                                              | `java.util.jar.JarFile`                              |
|  -97.3% | -156.507 MiB |  0.4% → <0.1% |  161 MiB → 4.29 MiB |        12 → 8 | `getInputStream()`                                                                      | `jdk.internal.loader.URLClassPath$JarLoader$2`       |
|  -97.3% | -156.507 MiB |  0.4% → <0.1% |  161 MiB → 4.29 MiB |        12 → 8 | `cachedInputStream()`                                                                   | `jdk.internal.loader.Resource`                       |
|  -97.3% | -156.507 MiB |  0.4% → <0.1% |  161 MiB → 4.29 MiB |        12 → 8 | `getByteBuffer()`                                                                       | `jdk.internal.loader.Resource`                       |
|  -97.0% | -156.435 MiB |  0.4% → <0.1% |  161 MiB → 4.76 MiB |        12 → 9 | `<init>(InputStream, Inflater, int)`                                                    | `java.util.zip.InflaterInputStream`                  |
|  -97.0% | -156.435 MiB |  0.4% → <0.1% |  161 MiB → 4.76 MiB |        12 → 9 | `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, Inflater, int)` | `java.util.zip.ZipFile$ZipFileInflaterInputStream`   |
|  -97.0% | -156.435 MiB |  0.4% → <0.1% |  161 MiB → 4.76 MiB |        12 → 9 | `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, int)`           | `java.util.zip.ZipFile$ZipFileInflaterInputStream`   |
|  -96.9% | -155.661 MiB |  0.4% → <0.1% |     161 MiB → 5 MiB |       15 → 12 | `defineClass(String, byte[], int, int, ProtectionDomain)`                               | `java.lang.ClassLoader`                              |
|  -96.9% | -155.661 MiB |  0.4% → <0.1% |     161 MiB → 5 MiB |       15 → 12 | `defineClass(String, byte[], int, int, CodeSource)`                                     | `java.security.SecureClassLoader`                    |
|  -96.9% |  -154.51 MiB |  0.4% → <0.1% |     160 MiB → 5 MiB |            12 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)`         | `java.lang.ClassLoader`                              |

##### Ours

| Change |        Delta |             % |                Size |       Samples | Function                                                                                                               | Location                                                                              |
| -----: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|  -3.4% |   -1.077 GiB | 84.5% → 80.9% | 31.5 GiB → 30.4 GiB | 1,538 → 1,579 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  -3.4% |   -1.077 GiB | 84.5% → 80.9% | 31.5 GiB → 30.4 GiB | 1,538 → 1,579 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011df098`                |
|  -3.4% |   -1.077 GiB | 84.5% → 80.9% | 31.5 GiB → 30.4 GiB | 1,538 → 1,579 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  -3.4% |   -1.077 GiB | 84.5% → 80.9% | 31.5 GiB → 30.4 GiB | 1,538 → 1,579 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dee50`                |
|  -3.2% |   -1.001 GiB | 84.6% → 81.1% | 31.5 GiB → 30.5 GiB | 1,544 → 1,590 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  -3.2% |   -1.001 GiB | 84.6% → 81.1% | 31.5 GiB → 30.5 GiB | 1,544 → 1,590 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -3.2% |   -1.001 GiB | 84.6% → 81.1% | 31.5 GiB → 30.5 GiB | 1,544 → 1,590 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| -40.8% | -583.606 MiB |   3.8% → 2.2% |   1.4 GiB → 847 MiB |       61 → 70 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -4.2% |   -300.9 MiB | 18.9% → 18.0% | 7.06 GiB → 6.76 GiB |     209 → 228 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  -4.2% |   -300.9 MiB | 18.9% → 18.0% | 7.06 GiB → 6.76 GiB |     209 → 228 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011d79d8`                |
| -72.5% | -222.115 MiB |   0.8% → 0.2% |  306 MiB → 84.1 MiB |        11 → 4 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| -54.8% | -172.191 MiB |   0.8% → 0.4% |   314 MiB → 142 MiB |         9 → 7 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| -36.4% |  -61.048 MiB |   0.4% → 0.3% |   168 MiB → 107 MiB |         3 → 5 | `lambda$collectClusters$0(Double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| -36.4% |  -61.048 MiB |   0.4% → 0.3% |   168 MiB → 107 MiB |         3 → 5 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011dec00` |
| -63.6% |  -18.564 MiB |  0.1% → <0.1% | 29.2 MiB → 10.6 MiB |       68 → 24 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001179b10`                |
| -62.7% |   -6.668 MiB |         <0.1% | 10.6 MiB → 3.96 MiB |        22 → 8 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001179d48`                |
|  -1.0% |   -1.664 MiB |          0.4% |   161 MiB → 160 MiB |         6 → 4 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                                             |
|  -0.6% |   -1.097 MiB |          0.5% |   190 MiB → 189 MiB |       74 → 73 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                                             |
|  -0.5% |   -1.048 MiB |          0.5% |   191 MiB → 190 MiB |       75 → 74 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                           |
|  -0.5% |   -1.048 MiB |          0.5% |   191 MiB → 190 MiB |       75 → 74 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000070011715d8`                |

# Retained heap profile diff

Retained 2.25 MiB → 2.06 MiB (-194.546 KiB, -8.4%) over 10 objects (231 KiB → 211 KiB per object).

| Category         |  Change |        Delta |      % |                Size | Objects |
| ---------------- | ------: | -----------: | -----: | ------------------: | ------: |
| Standard library |   -8.4% | -194.585 KiB | 100.0% | 2.25 MiB → 2.06 MiB |   9 → 8 |
| Ours             | +100.0% |        +40 B |  <0.1% |         40 B → 80 B |   1 → 2 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

|  Change |  Delta |            % |        Size | Objects | Function                      | Location                                    |
| ------: | -----: | -----------: | ----------: | ------: | ----------------------------- | ------------------------------------------- |
|     new | +120 B | 0.0% → <0.1% | 0 B → 120 B |   0 → 1 | `findBootstrapClass(String)`  | `java.lang.ClassLoader`                     |
| +100.0% |  +40 B |        <0.1% | 40 B → 80 B |   1 → 2 | `lambda$generateData$4(int)`  | `org.renaissance.jdk.concurrent.JavaKMeans` |
|     new |  +16 B | 0.0% → <0.1% |  0 B → 16 B |   0 → 1 | `getClassLoadingLock(String)` | `java.lang.ClassLoader`                     |

##### Standard library

| Change |  Delta |            % |        Size | Objects | Function                      | Location                |
| -----: | -----: | -----------: | ----------: | ------: | ----------------------------- | ----------------------- |
|    new | +120 B | 0.0% → <0.1% | 0 B → 120 B |   0 → 1 | `findBootstrapClass(String)`  | `java.lang.ClassLoader` |
|    new |  +16 B | 0.0% → <0.1% |  0 B → 16 B |   0 → 1 | `getClassLoadingLock(String)` | `java.lang.ClassLoader` |

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

##### Standard library

|  Change |       Delta |            % |                Size | Objects | Function                | Location           |
| ------: | ----------: | -----------: | ------------------: | ------: | ----------------------- | ------------------ |
|   -8.4% | -194.64 KiB |       100.0% | 2.25 MiB → 2.06 MiB |   2 → 1 | `copyOf(Object[], int)` | `java.util.Arrays` |
| removed |       -56 B | <0.1% → 0.0% |          56 B → 0 B |   1 → 0 | `initClassName()`       | `java.lang.Class`  |
|  -25.0% |       -24 B |        <0.1% |         96 B → 72 B |   4 → 3 | `valueOf(double)`       | `java.lang.Double` |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

##### Standard library

| Change |      Delta |             % |           Size | Objects | Function                           | Location                                             |
| -----: | ---------: | ------------: | -------------: | ------: | ---------------------------------- | ---------------------------------------------------- |
|    new | +2.061 MiB | 0.0% → 100.0% | 0 B → 2.06 MiB |  0 → 10 | `invokeStatic(Object, Object)`     | `java.lang.invoke.LambdaForm$DMH.0x0000007001001400` |
|    new | +2.061 MiB | 0.0% → 100.0% | 0 B → 2.06 MiB |  0 → 10 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x0000007001080800`  |
|    new |     +120 B |  0.0% → <0.1% |    0 B → 120 B |   0 → 1 | `findBootstrapClass(String)`       | `java.lang.ClassLoader`                              |
|    new |     +120 B |  0.0% → <0.1% |    0 B → 120 B |   0 → 1 | `findBootstrapClassOrNull(String)` | `java.lang.ClassLoader`                              |
|    new |     +120 B |  0.0% → <0.1% |    0 B → 120 B |   0 → 1 | `findBootstrapClassOrNull(String)` | `java.lang.System$2`                                 |
|    new |     +120 B |  0.0% → <0.1% |    0 B → 120 B |   0 → 1 | `loadClassOrNull(String, boolean)` | `jdk.internal.loader.ClassLoaders$BootClassLoader`   |
|    new |     +120 B |  0.0% → <0.1% |    0 B → 120 B |   0 → 1 | `loadClassOrNull(String)`          | `jdk.internal.loader.BuiltinClassLoader`             |
|    new |     +120 B |  0.0% → <0.1% |    0 B → 120 B |   0 → 1 | `loadClassOrNull(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader`             |
|    new |     +120 B |  0.0% → <0.1% |    0 B → 120 B |   0 → 1 | `loadClass(String, boolean)`       | `jdk.internal.loader.BuiltinClassLoader`             |
|    new |     +120 B |  0.0% → <0.1% |    0 B → 120 B |   0 → 1 | `loadClass(String, boolean)`       | `jdk.internal.loader.ClassLoaders$AppClassLoader`    |
|    new |     +120 B |  0.0% → <0.1% |    0 B → 120 B |   0 → 1 | `releaseFence()`                   | `scala.runtime.Statics`                              |
|    new |     +120 B |  0.0% → <0.1% |    0 B → 120 B |   0 → 1 | `<init>(Object)`                   | `scala.collection.ArrayOps$ArrayIterator`            |
|    new |     +120 B |  0.0% → <0.1% |    0 B → 120 B |   0 → 1 | `iterator()`                       | `scala.collection.immutable.ArraySeq$ofRef`          |
|    new |     +120 B |  0.0% → <0.1% |    0 B → 120 B |   0 → 1 | `addAll(IterableOnce)`             | `scala.collection.mutable.Growable`                  |
|    new |     +120 B |  0.0% → <0.1% |    0 B → 120 B |   0 → 1 | `addAll$(Growable, IterableOnce)`  | `scala.collection.mutable.Growable`                  |
|    new |     +120 B |  0.0% → <0.1% |    0 B → 120 B |   0 → 1 | `addAll(IterableOnce)`             | `scala.collection.immutable.MapBuilderImpl`          |
|    new |     +120 B |  0.0% → <0.1% |    0 B → 120 B |   0 → 1 | `from(IterableOnce)`               | `scala.collection.immutable.Map$`                    |
|    new |     +120 B |  0.0% → <0.1% |    0 B → 120 B |   0 → 1 | `apply(Seq)`                       | `scala.collection.MapFactory`                        |
|    new |     +120 B |  0.0% → <0.1% |    0 B → 120 B |   0 → 1 | `apply$(MapFactory, Seq)`          | `scala.collection.MapFactory`                        |
|    new |     +120 B |  0.0% → <0.1% |    0 B → 120 B |   0 → 1 | `apply(Seq)`                       | `scala.collection.immutable.Map$`                    |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

|  Change |       Delta |            % |                Size | Objects | Function                                             | Location                                                               |
| ------: | ----------: | -----------: | ------------------: | ------: | ---------------------------------------------------- | ---------------------------------------------------------------------- |
| removed |  -2.061 MiB | 91.6% → 0.0% |      2.06 MiB → 0 B |   9 → 0 | `invokeStatic(Object, Object)`                       | `java.lang.invoke.LambdaForm$DMH.0x000000c001001400`                   |
| removed |  -2.061 MiB | 91.6% → 0.0% |      2.06 MiB → 0 B |   9 → 0 | `invoke(Object, Object, Object)`                     | `java.lang.invoke.LambdaForm$MH.0x000000c001080800`                    |
|   -8.4% | -194.64 KiB |       100.0% | 2.25 MiB → 2.06 MiB |   2 → 1 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                                     |
|   -8.4% | -194.64 KiB |       100.0% | 2.25 MiB → 2.06 MiB |   2 → 1 | `grow(int)`                                          | `java.util.ArrayList`                                                  |
| removed | -194.64 KiB |  8.4% → 0.0% |       195 KiB → 0 B |   1 → 0 | `addAll(Collection)`                                 | `java.util.ArrayList`                                                  |
| removed | -194.64 KiB |  8.4% → 0.0% |       195 KiB → 0 B |   1 → 0 | `lambda$merge$6(List, List)`                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed | -194.64 KiB |  8.4% → 0.0% |       195 KiB → 0 B |   1 → 0 | `apply(Object, Object)`                              | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011df098` |
| removed | -194.64 KiB |  8.4% → 0.0% |       195 KiB → 0 B |   1 → 0 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                                                    |
| removed | -194.64 KiB |  8.4% → 0.0% |       195 KiB → 0 B |   1 → 0 | `lambda$merge$7(Map, Object, List)`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed | -194.64 KiB |  8.4% → 0.0% |       195 KiB → 0 B |   1 → 0 | `accept(Object, Object)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011dee50` |
| removed | -194.64 KiB |  8.4% → 0.0% |       195 KiB → 0 B |   1 → 0 | `forEach(BiConsumer)`                                | `java.util.HashMap`                                                    |
| removed | -194.64 KiB |  8.4% → 0.0% |       195 KiB → 0 B |   1 → 0 | `merge(Map, Map)`                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed | -194.64 KiB |  8.4% → 0.0% |       195 KiB → 0 B |   1 → 0 | `combineResults(Map, Map)`                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed | -194.64 KiB |  8.4% → 0.0% |       195 KiB → 0 B |   1 → 0 | `combineResults(Object, Object)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed | -194.64 KiB |  8.4% → 0.0% |       195 KiB → 0 B |   1 → 0 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| removed | -194.64 KiB |  8.4% → 0.0% |       195 KiB → 0 B |   1 → 0 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                                   |
| removed | -194.64 KiB |  8.4% → 0.0% |       195 KiB → 0 B |   1 → 0 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                                    |
| removed | -194.64 KiB |  8.4% → 0.0% |       195 KiB → 0 B |   1 → 0 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
| removed | -194.64 KiB |  8.4% → 0.0% |       195 KiB → 0 B |   1 → 0 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                                    |
| removed | -194.64 KiB |  8.4% → 0.0% |       195 KiB → 0 B |   1 → 0 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                                    |

##### Standard library

|  Change |       Delta |            % |                Size | Objects | Function                                                                    | Location                                             |
| ------: | ----------: | -----------: | ------------------: | ------: | --------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |  -2.061 MiB | 91.6% → 0.0% |      2.06 MiB → 0 B |   9 → 0 | `invokeStatic(Object, Object)`                                              | `java.lang.invoke.LambdaForm$DMH.0x000000c001001400` |
| removed |  -2.061 MiB | 91.6% → 0.0% |      2.06 MiB → 0 B |   9 → 0 | `invoke(Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x000000c001080800`  |
|   -8.4% | -194.64 KiB |       100.0% | 2.25 MiB → 2.06 MiB |   2 → 1 | `copyOf(Object[], int)`                                                     | `java.util.Arrays`                                   |
|   -8.4% | -194.64 KiB |       100.0% | 2.25 MiB → 2.06 MiB |   2 → 1 | `grow(int)`                                                                 | `java.util.ArrayList`                                |
| removed | -194.64 KiB |  8.4% → 0.0% |       195 KiB → 0 B |   1 → 0 | `addAll(Collection)`                                                        | `java.util.ArrayList`                                |
| removed | -194.64 KiB |  8.4% → 0.0% |       195 KiB → 0 B |   1 → 0 | `merge(Object, Object, BiFunction)`                                         | `java.util.HashMap`                                  |
| removed | -194.64 KiB |  8.4% → 0.0% |       195 KiB → 0 B |   1 → 0 | `forEach(BiConsumer)`                                                       | `java.util.HashMap`                                  |
| removed | -194.64 KiB |  8.4% → 0.0% |       195 KiB → 0 B |   1 → 0 | `exec()`                                                                    | `java.util.concurrent.RecursiveTask`                 |
| removed | -194.64 KiB |  8.4% → 0.0% |       195 KiB → 0 B |   1 → 0 | `doExec()`                                                                  | `java.util.concurrent.ForkJoinTask`                  |
| removed | -194.64 KiB |  8.4% → 0.0% |       195 KiB → 0 B |   1 → 0 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`                        | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
| removed | -194.64 KiB |  8.4% → 0.0% |       195 KiB → 0 B |   1 → 0 | `scan(ForkJoinPool$WorkQueue, int, int)`                                    | `java.util.concurrent.ForkJoinPool`                  |
| removed | -194.64 KiB |  8.4% → 0.0% |       195 KiB → 0 B |   1 → 0 | `runWorker(ForkJoinPool$WorkQueue)`                                         | `java.util.concurrent.ForkJoinPool`                  |
| removed | -194.64 KiB |  8.4% → 0.0% |       195 KiB → 0 B |   1 → 0 | `run()`                                                                     | `java.util.concurrent.ForkJoinWorkerThread`          |
| removed |       -56 B | <0.1% → 0.0% |          56 B → 0 B |   1 → 0 | `initClassName()`                                                           | `java.lang.Class`                                    |
| removed |       -56 B | <0.1% → 0.0% |          56 B → 0 B |   1 → 0 | `getName()`                                                                 | `java.lang.Class`                                    |
| removed |       -56 B | <0.1% → 0.0% |          56 B → 0 B |   1 → 0 | `getPackageName()`                                                          | `java.lang.Class`                                    |
| removed |       -56 B | <0.1% → 0.0% |          56 B → 0 B |   1 → 0 | `postDefineClass(Class, ProtectionDomain)`                                  | `java.lang.ClassLoader`                              |
|  -45.5% |       -40 B |        <0.1% |         88 B → 48 B |       2 | `defineClass(String, Resource)`                                             | `java.net.URLClassLoader`                            |
|  -45.5% |       -40 B |        <0.1% |         88 B → 48 B |       2 | `run()`                                                                     | `java.net.URLClassLoader$1`                          |
|  -45.5% |       -40 B |        <0.1% |         88 B → 48 B |       2 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` | `java.security.AccessController`                     |

# Lock contention profile diff

Blocked 6.95s → 7.95s (+998.65ms, +14.4%) over 56 contentions → 88 contentions (124.2ms → 90.4ms per contention).

| Category         | Change |     Delta |      % |          Time | Contentions |
| ---------------- | -----: | --------: | -----: | ------------: | ----------: |
| Standard library | +14.4% | +998.65ms | 100.0% | 6.95s → 7.95s |     56 → 88 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time blocked directly in the function body, excluding callees.

##### Standard library

| Change |     Delta |      % |          Time | Contentions | Function              | Location                   |
| -----: | --------: | -----: | ------------: | ----------: | --------------------- | -------------------------- |
| +14.4% | +998.65ms | 100.0% | 6.95s → 7.95s |     56 → 88 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

| Change |     Delta |             % |            Time | Contentions | Function                                                                                                               | Location                                                               |
| -----: | --------: | ------------: | --------------: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|    new |   +6.259s |  0.0% → 78.7% |     0ms → 6.25s |      0 → 16 | `invokeStatic(Object, Object)`                                                                                         | `java.lang.invoke.LambdaForm$DMH.0x0000007001001400`                   |
|    new |   +6.259s |  0.0% → 78.7% |     0ms → 6.25s |      0 → 16 | `invoke(Object, Object, Object)`                                                                                       | `java.lang.invoke.LambdaForm$MH.0x0000007001080800`                    |
| +14.4% | +998.65ms |        100.0% |   6.95s → 7.95s |     56 → 88 | `park(boolean, long)`                                                                                                  | `jdk.internal.misc.Unsafe`                                             |
| +15.0% | +993.73ms | 95.4% → 96.0% |   6.63s → 7.63s |     42 → 74 | `park()`                                                                                                               | `java.util.concurrent.locks.LockSupport`                               |
| +90.8% | +807.33ms | 12.8% → 21.3% | 889.1ms → 1.69s |     40 → 72 | `runWorker(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`                                    |
| +90.8% | +807.33ms | 12.8% → 21.3% | 889.1ms → 1.69s |     40 → 72 | `run()`                                                                                                                | `java.util.concurrent.ForkJoinWorkerThread`                            |
| +73.8% | +656.10ms | 12.8% → 19.4% | 889.1ms → 1.54s |     40 → 62 | `awaitWork(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`                                    |
|  +5.6% | +342.55ms | 87.2% → 80.6% |   6.06s → 6.41s |     16 → 26 | `awaitDone(int, long)`                                                                                                 | `java.util.concurrent.ForkJoinTask`                                    |
|  +3.2% | +191.33ms | 87.2% → 78.7% |   6.06s → 6.25s |          16 | `get()`                                                                                                                | `java.util.concurrent.ForkJoinTask`                                    |
|  +3.2% | +191.33ms | 87.2% → 78.7% |   6.06s → 6.25s |          16 | `run(int, List, int)`                                                                                                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +3.2% | +191.33ms | 87.2% → 78.7% |   6.06s → 6.25s |          16 | `$anonfun$1(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  +3.2% | +191.33ms | 87.2% → 78.7% |   6.06s → 6.25s |          16 | `$anonfun$adapted$1(Object)`                                                                                           | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  +3.2% | +191.33ms | 87.2% → 78.7% |   6.06s → 6.25s |          16 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011d4e58`   |
|  +3.2% | +191.33ms | 87.2% → 78.7% |   6.06s → 6.25s |          16 | `map(Function1)`                                                                                                       | `scala.collection.immutable.Range`                                     |
|  +3.2% | +191.33ms | 87.2% → 78.7% |   6.06s → 6.25s |          16 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  +3.2% | +191.33ms | 87.2% → 78.7% |   6.06s → 6.25s |          16 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |
|  +3.2% | +191.33ms | 87.2% → 78.7% |   6.06s → 6.25s |          16 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|  +3.2% | +191.33ms | 87.2% → 78.7% |   6.06s → 6.25s |          16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +3.2% | +191.33ms | 87.2% → 78.7% |   6.06s → 6.25s |          16 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000070011715d8` |
|  +3.2% | +191.33ms | 87.2% → 78.7% |   6.06s → 6.25s |          16 | `apply(Object)`                                                                                                        | `scala.runtime.function.JProcedure1`                                   |

##### Standard library

| Change |     Delta |             % |            Time | Contentions | Function                                             | Location                                             |
| -----: | --------: | ------------: | --------------: | ----------: | ---------------------------------------------------- | ---------------------------------------------------- |
|    new |   +6.259s |  0.0% → 78.7% |     0ms → 6.25s |      0 → 16 | `invokeStatic(Object, Object)`                       | `java.lang.invoke.LambdaForm$DMH.0x0000007001001400` |
|    new |   +6.259s |  0.0% → 78.7% |     0ms → 6.25s |      0 → 16 | `invoke(Object, Object, Object)`                     | `java.lang.invoke.LambdaForm$MH.0x0000007001080800`  |
| +14.4% | +998.65ms |        100.0% |   6.95s → 7.95s |     56 → 88 | `park(boolean, long)`                                | `jdk.internal.misc.Unsafe`                           |
| +15.0% | +993.73ms | 95.4% → 96.0% |   6.63s → 7.63s |     42 → 74 | `park()`                                             | `java.util.concurrent.locks.LockSupport`             |
| +90.8% | +807.33ms | 12.8% → 21.3% | 889.1ms → 1.69s |     40 → 72 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                  |
| +90.8% | +807.33ms | 12.8% → 21.3% | 889.1ms → 1.69s |     40 → 72 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`          |
| +73.8% | +656.10ms | 12.8% → 19.4% | 889.1ms → 1.54s |     40 → 62 | `awaitWork(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                  |
|  +5.6% | +342.55ms | 87.2% → 80.6% |   6.06s → 6.41s |     16 → 26 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                  |
|  +3.2% | +191.33ms | 87.2% → 78.7% |   6.06s → 6.25s |          16 | `get()`                                              | `java.util.concurrent.ForkJoinTask`                  |
|  +3.2% | +191.33ms | 87.2% → 78.7% |   6.06s → 6.25s |          16 | `map(Function1)`                                     | `scala.collection.immutable.Range`                   |
|  +3.2% | +191.33ms | 87.2% → 78.7% |   6.06s → 6.25s |          16 | `apply(Object)`                                      | `scala.runtime.function.JProcedure1`                 |
|  +3.2% | +191.33ms | 87.2% → 78.7% |   6.06s → 6.25s |          16 | `foreach(Function1)`                                 | `scala.collection.immutable.List`                    |
|  +3.2% | +191.33ms | 87.2% → 78.7% |   6.06s → 6.25s |          16 | `invokeExact_MT(Object, Object, Object, Object)`     | `java.lang.invoke.Invokers$Holder`                   |
|  +3.2% | +191.33ms | 87.2% → 78.7% |   6.06s → 6.25s |          16 | `invokeImpl(Object, Object[])`                       | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +3.2% | +191.33ms | 87.2% → 78.7% |   6.06s → 6.25s |          16 | `invoke(Object, Object[])`                           | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +3.2% | +191.33ms | 87.2% → 78.7% |   6.06s → 6.25s |          16 | `invoke(Object, Object[])`                           | `java.lang.reflect.Method`                           |
|    new | +151.23ms |   0.0% → 1.9% |   0ms → 151.2ms |      0 → 10 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                  |
|    new | +151.23ms |   0.0% → 1.9% |   0ms → 151.2ms |      0 → 10 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                 |
|    new | +151.23ms |   0.0% → 1.9% |   0ms → 151.2ms |      0 → 10 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                  |
|    new | +151.23ms |   0.0% → 1.9% |   0ms → 151.2ms |      0 → 10 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`        |

#### Improvements

Functions with the largest decrease in total time blocked in the function and all its callees.

##### Standard library

|  Change |   Delta |            % |        Time | Contentions | Function                         | Location                                             |
| ------: | ------: | -----------: | ----------: | ----------: | -------------------------------- | ---------------------------------------------------- |
| removed | -6.067s | 87.2% → 0.0% | 6.06s → 0ms |      16 → 0 | `invokeStatic(Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x000000c001001400` |
| removed | -6.067s | 87.2% → 0.0% | 6.06s → 0ms |      16 → 0 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000c001080800`  |

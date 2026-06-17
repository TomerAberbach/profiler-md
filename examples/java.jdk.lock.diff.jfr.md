# Sampling profile diff

1,810 samples → 1,629 samples (-181 samples, -10.0%).

| Category | Change | Delta |      % |       Samples |
| -------- | -----: | ----: | -----: | ------------: |
| ours     | -10.0% |  -181 | 100.0% | 1,810 → 1,629 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                                  | Location                                                                            |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------- | ----------------------------------------------------------------------------------- |
|  +23.1% |    +9 | 2.2% → 2.9% | 39 → 48 | `computeIfAbsent(Object, Function)`                       | java.util.HashMap                                                                   |
|     new |    +9 | 0.0% → 0.6% |   0 → 9 | `merge(Object, Object, BiFunction)`                       | java.util.HashMap                                                                   |
|  +24.2% |    +8 | 1.8% → 2.5% | 33 → 41 | `copyOf(Object[], int)`                                   | java.util.Arrays                                                                    |
|  +45.5% |    +5 | 0.6% → 1.0% | 11 → 16 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | java.util.concurrent.ForkJoinPool                                                   |
| +100.0% |    +2 | 0.1% → 0.2% |   2 → 4 | `nextNode()`                                              | java.util.HashMap$HashIterator                                                      |
|  +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `accept(Object)`                                          | java.util.stream.ReduceOps$3ReducingSink                                            |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `compute()`                                               | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask                                |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `awaitDone(int, long)`                                    | java.util.concurrent.ForkJoinTask                                                   |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | java.util.concurrent.ForkJoinPool$WorkQueue                                         |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | java.util.concurrent.ForkJoinPool                                                   |
|  +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `lambda$merge$7(Map, Object, List)`                       | org.renaissance.jdk.concurrent.JavaKMeans                                           |
|   +6.7% |    +1 | 0.8% → 1.0% | 15 → 16 | `apply(Object)`                                           | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001204b38 |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `unpark(Thread)`                                          | java.util.concurrent.locks.LockSupport                                              |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `refersTo0(Object)`                                       | java.lang.ref.Reference                                                             |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `checkIndex(int, int)`                                    | java.util.Objects                                                                   |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `createSubtask(int, int)`                                 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask                             |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `add(double[], double[])`                                 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask                             |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `resize()`                                                | java.util.HashMap                                                                   |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `<init>(ThreadGroup, Runnable, long, int, boolean)`       | java.lang.Thread$FieldHolder                                                        |

#### Progressions

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                                                      | Location                                                 |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------- | -------------------------------------------------------- |
|  -15.3% |  -124 | 44.6% → 42.0% | 808 → 684 | `accumulate(Double[], double[])`                              | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  -14.7% |   -17 |   6.4% → 6.1% |  116 → 99 | `collectClusters(int[])`                                      | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|   -4.0% |   -16 | 22.3% → 23.8% | 403 → 387 | `distance(Double[], Double[])`                                | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|   -7.2% |   -16 | 12.2% → 12.6% | 221 → 205 | `findNearestCentroid()`                                       | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  -16.5% |   -13 |   4.4% → 4.1% |   79 → 66 | `vectorSum()`                                                 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| removed |   -10 |   0.6% → 0.0% |    10 → 0 | `grow(int)`                                                   | java.util.ArrayList                                      |
|  -77.8% |    -7 |   0.5% → 0.1% |     9 → 2 | `tryRemoveAndExec(ForkJoinTask, boolean)`                     | java.util.concurrent.ForkJoinPool$WorkQueue              |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `doExec()`                                                    | java.util.concurrent.ForkJoinTask                        |
|  -25.0% |    -1 |          0.2% |     4 → 3 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | java.util.zip.Inflater                                   |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `normalizeAndCheck(String)`                                   | sun.nio.fs.UnixPath                                      |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `indexOf(byte[], byte, int, String, int)`                     | java.lang.String                                         |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `seek0(long)`                                                 | java.io.RandomAccessFile                                 |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `forEachRemaining(IntConsumer)`                               | java.util.stream.Streams$RangeIntSpliterator             |
|  -33.3% |    -1 |   0.2% → 0.1% |     3 → 2 | `wrapSink(Sink)`                                              | java.util.stream.AbstractPipeline                        |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `putMethodInfo(ByteVector)`                                   | jdk.internal.org.objectweb.asm.MethodWriter              |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `createSubtask(int, int)`                                     | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  -33.3% |    -1 |   0.2% → 0.1% |     3 → 2 | `unpark(Object)`                                              | jdk.internal.misc.Unsafe                                 |
|  -50.0% |    -1 |          0.1% |     2 → 1 | `push(ForkJoinTask, ForkJoinPool, boolean)`                   | java.util.concurrent.ForkJoinPool$WorkQueue              |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `forkThreshold()`                                             | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `<init>(AbstractPipeline, int)`                               | java.util.stream.ReferencePipeline                       |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |           % | Samples | Function                                | Location                                                             |
| ------: | ----: | ----------: | ------: | --------------------------------------- | -------------------------------------------------------------------- |
|  +18.5% |   +10 | 3.0% → 3.9% | 54 → 64 | `computeIfAbsent(Object, Function)`     | java.util.HashMap                                                    |
|  +24.2% |    +8 | 1.8% → 2.5% | 33 → 41 | `copyOf(Object[], int)`                 | java.util.Arrays                                                     |
|  +53.8% |    +7 | 0.7% → 1.2% | 13 → 20 | `merge(Map, Map)`                       | org.renaissance.jdk.concurrent.JavaKMeans                            |
|  +53.8% |    +7 | 0.7% → 1.2% | 13 → 20 | `combineResults(Map, Map)`              | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|  +53.8% |    +7 | 0.7% → 1.2% | 13 → 20 | `combineResults(Object, Object)`        | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
| +100.0% |    +6 | 0.3% → 0.7% |  6 → 12 | `lambda$merge$7(Map, Object, List)`     | org.renaissance.jdk.concurrent.JavaKMeans                            |
| +100.0% |    +6 | 0.3% → 0.7% |  6 → 12 | `accept(Object, Object)`                | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88 |
| +100.0% |    +6 | 0.3% → 0.7% |  6 → 12 | `forEach(BiConsumer)`                   | java.util.HashMap                                                    |
| +125.0% |    +5 | 0.2% → 0.6% |   4 → 9 | `merge(Object, Object, BiFunction)`     | java.util.HashMap                                                    |
|   +5.1% |    +2 | 2.2% → 2.5% | 39 → 41 | `grow()`                                | java.util.ArrayList                                                  |
|   +5.1% |    +2 | 2.2% → 2.5% | 39 → 41 | `add(Object, Object[], int)`            | java.util.ArrayList                                                  |
|   +5.1% |    +2 | 2.2% → 2.5% | 39 → 41 | `add(Object)`                           | java.util.ArrayList                                                  |
| +100.0% |    +2 | 0.1% → 0.2% |   2 → 4 | `nextNode()`                            | java.util.HashMap$HashIterator                                       |
| +100.0% |    +2 | 0.1% → 0.2% |   2 → 4 | `next()`                                | java.util.HashMap$EntryIterator                                      |
|  +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `read(byte[], int, int)`                | java.io.FilterInputStream                                            |
|  +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `transferTo(OutputStream)`              | java.io.InputStream                                                  |
|  +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `copy(InputStream, Path, CopyOption[])` | java.nio.file.Files                                                  |
|  +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `extractResource(String, Path)`         | org.renaissance.core.ResourceUtils                                   |
|  +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `extractResources(Iterable, Path)`      | org.renaissance.core.ResourceUtils                                   |
|  +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `createClassLoaderForModule(String)`    | org.renaissance.core.ModuleLoader                                    |

#### Progressions

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |             % |       Samples | Function                                             | Location                                                 |
| -----: | ----: | ------------: | ------------: | ---------------------------------------------------- | -------------------------------------------------------- |
| -14.4% |  -210 | 80.4% → 76.5% | 1,456 → 1,246 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool$WorkQueue              |
| -14.3% |  -199 | 76.6% → 72.9% | 1,387 → 1,188 | `scan(ForkJoinPool$WorkQueue, int, int)`             | java.util.concurrent.ForkJoinPool                        |
| -13.8% |  -189 | 75.8% → 72.6% | 1,372 → 1,183 | `runWorker(ForkJoinPool$WorkQueue)`                  | java.util.concurrent.ForkJoinPool                        |
| -13.9% |  -185 | 73.5% → 70.3% | 1,331 → 1,146 | `run()`                                              | java.util.concurrent.ForkJoinWorkerThread                |
| -10.2% |  -179 | 96.6% → 96.3% | 1,748 → 1,569 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | java.util.concurrent.ForkJoinPool$WorkQueue              |
|  -9.8% |  -176 | 99.0% → 99.1% | 1,791 → 1,615 | `compute()`                                          | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask     |
|  -9.8% |  -176 | 99.0% → 99.1% | 1,791 → 1,615 | `exec()`                                             | java.util.concurrent.RecursiveTask                       |
|  -9.8% |  -176 | 99.0% → 99.2% | 1,792 → 1,616 | `doExec()`                                           | java.util.concurrent.ForkJoinTask                        |
|  -9.6% |  -168 | 97.1% → 97.6% | 1,758 → 1,590 | `awaitDone(int, long)`                               | java.util.concurrent.ForkJoinTask                        |
|  -9.5% |  -167 | 97.1% → 97.6% | 1,757 → 1,590 | `join()`                                             | java.util.concurrent.ForkJoinTask                        |
| -15.3% |  -136 | 49.0% → 46.1% |     887 → 751 | `vectorSum()`                                        | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| -15.3% |  -136 | 49.0% → 46.1% |     887 → 751 | `computeDirectly()`                                  | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| -15.3% |  -124 | 44.6% → 42.0% |     808 → 684 | `accumulate(Double[], double[])`                     | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| -14.5% |   -53 | 20.2% → 19.2% |     365 → 312 | `invoke()`                                           | java.util.concurrent.ForkJoinTask                        |
| -14.1% |   -50 | 19.6% → 18.7% |     355 → 305 | `computeClusterAverages()`                           | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
| -13.8% |   -49 | 19.6% → 18.7% |     354 → 305 | `average(List)`                                      | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
| -14.4% |   -49 | 18.8% → 17.9% |     341 → 292 | `computeDirectly()`                                  | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
|  -5.1% |   -44 | 47.6% → 50.2% |     862 → 818 | `computeDirectly()`                                  | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  -5.1% |   -32 | 34.5% → 36.3% |     624 → 592 | `findNearestCentroid()`                              | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  -4.0% |   -16 | 22.3% → 23.8% |     403 → 387 | `distance(Double[], Double[])`                       | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |


# Allocated heap profile diff

Allocated 40.5 GB → 40.6 GB (+136 MB, +0.3%) over 1,972 samples → 2,040 samples (20.5 MB → 19.9 MB per sample).

| Category | Change |   Delta |      % |              Size |       Samples |
| -------- | -----: | ------: | -----: | ----------------: | ------------: |
| ours     |  +0.3% | +136 MB | 100.0% | 40.5 GB → 40.6 GB | 1,970 → 2,038 |
| stdlib   | -16.6% |  -440 B |   0.0% | 2.66 kB → 2.22 kB |             2 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|   Change |    Delta |             % |              Size |       Samples | Function                                                                        | Location                                                 |
| -------: | -------: | ------------: | ----------------: | ------------: | ------------------------------------------------------------------------------- | -------------------------------------------------------- |
|  +344.2% |  +217 MB |   0.2% → 0.7% |    63 MB → 280 MB |        9 → 12 | `grow(int)`                                                                     | java.util.ArrayList                                      |
| +5295.3% |  +184 MB |   0.0% → 0.5% |  3.47 MB → 187 MB |         2 → 6 | `lambda$merge$6(List, List)`                                                    | org.renaissance.jdk.concurrent.JavaKMeans                |
|    +0.5% |  +174 MB | 92.6% → 92.7% | 37.5 GB → 37.6 GB | 1,714 → 1,756 | `copyOf(Object[], int)`                                                         | java.util.Arrays                                         |
|      new |  +167 MB |   0.0% → 0.4% |      0 B → 167 MB |         0 → 1 | `entryFor(String)`                                                              | java.util.jar.JarFile                                    |
| +1297.5% |  +126 MB |   0.0% → 0.3% |  9.69 MB → 135 MB |        3 → 10 | `createSubtask(int, int)`                                                       | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  +656.5% |   +85 MB |   0.0% → 0.2% | 12.9 MB → 97.9 MB |         2 → 5 | `add(double[], double[])`                                                       | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  +159.9% |   +67 MB |   0.1% → 0.3% |  41.9 MB → 109 MB |         2 → 8 | `lambda$collectClusters$0(Double[])`                                            | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|      new | +35.5 MB |   0.0% → 0.1% |     0 B → 35.5 MB |         0 → 2 | `merge(Map, Map)`                                                               | org.renaissance.jdk.concurrent.JavaKMeans                |
|   +17.5% | +25.5 MB |          0.4% |   145 MB → 171 MB |        12 → 3 | `createSubtask(int, int)`                                                       | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  +327.9% | +11.4 MB |          0.0% | 3.47 MB → 14.9 MB |        6 → 21 | `copyOf(Object[], int, Class)`                                                  | java.util.Arrays                                         |
|  +560.3% |  +6.6 MB |          0.0% | 1.18 MB → 7.78 MB |        4 → 21 | `valueOf(double)`                                                               | java.lang.Double                                         |
|   +56.5% | +2.38 MB |          0.0% |  4.2 MB → 6.58 MB |       11 → 17 | `intStream(Spliterator$OfInt, boolean)`                                         | java.util.stream.StreamSupport                           |
|  +142.1% | +2.21 MB |          0.0% | 1.55 MB → 3.76 MB |         4 → 9 | `opWrapSink(int, Sink)`                                                         | java.util.stream.IntPipeline$1                           |
|      new | +1.08 MB |          0.0% |     0 B → 1.08 MB |         0 → 1 | `createSubtask(int, int)`                                                       | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
|  +187.8% |  +835 kB |          0.0% |  444 kB → 1.28 MB |         1 → 3 | `fillInStackTrace(int)`                                                         | java.lang.Throwable                                      |
|      new |  +830 kB |          0.0% |      0 B → 830 kB |         0 → 2 | `newString(byte[], int, int)`                                                   | java.lang.StringLatin1                                   |
|      new |  +807 kB |          0.0% |      0 B → 807 kB |         0 → 2 | `transferTo(OutputStream)`                                                      | java.io.InputStream                                      |
|      new |  +807 kB |          0.0% |      0 B → 807 kB |         0 → 2 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | java.lang.ClassLoader                                    |
|      new |  +796 kB |          0.0% |      0 B → 796 kB |         0 → 1 | `selectBenchmarks(BenchmarkSuite, Seq)`                                         | org.renaissance.harness.RenaissanceSuite$                |
|  +204.1% |  +707 kB |          0.0% |  346 kB → 1.05 MB |         1 → 3 | `copyOfRangeByte(byte[], int, int)`                                             | java.util.Arrays                                         |

#### Progressions

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |    Delta |           % |              Size | Samples | Function                                             | Location                                                 |
| ------: | -------: | ----------: | ----------------: | ------: | ---------------------------------------------------- | -------------------------------------------------------- |
|  -95.9% |  -306 MB | 0.8% → 0.0% |  319 MB → 13.1 MB |       5 | `collectClusters(int[])`                             | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  -14.7% |  -251 MB | 4.2% → 3.6% | 1.71 GB → 1.46 GB | 68 → 70 | `findNearestCentroid()`                              | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| removed |  -166 MB | 0.4% → 0.0% |      166 MB → 0 B |   1 → 0 | `newLinkedHashMap(int)`                              | java.util.LinkedHashMap                                  |
|  -96.1% | -78.4 MB | 0.2% → 0.0% | 81.5 MB → 3.15 MB |   4 → 2 | `vectorSum()`                                        | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  -46.7% | -68.9 MB | 0.4% → 0.2% |  147 MB → 78.6 MB | 11 → 10 | `newNode(int, Object, Object, HashMap$Node)`         | java.util.HashMap                                        |
|  -27.6% | -56.9 MB | 0.5% → 0.4% |   206 MB → 149 MB |   6 → 4 | `resize()`                                           | java.util.HashMap                                        |
| removed | -17.8 MB |        0.0% |     17.8 MB → 0 B |   1 → 0 | `lambda$boxed$0(int)`                                | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
|  -61.5% | -9.32 MB |        0.0% | 15.2 MB → 5.84 MB | 39 → 14 | `mapToObj(IntFunction, int)`                         | java.util.stream.IntPipeline                             |
| removed | -8.15 MB |        0.0% |     8.15 MB → 0 B |   1 → 0 | `computeClusterAverages()`                           | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
|  -42.3% | -2.27 MB |        0.0% | 5.36 MB → 3.09 MB |       1 | `iterator()`                                         | java.util.HashMap$EntrySet                               |
|  -84.6% | -2.18 MB |        0.0% |  2.58 MB → 397 kB |   7 → 1 | `builder(long, IntFunction)`                         | java.util.stream.Nodes                                   |
|  -10.5% | -1.26 MB |        0.0% |   12 MB → 10.7 MB | 21 → 17 | `copyOf(byte[], int)`                                | java.util.Arrays                                         |
| removed | -1.17 MB |        0.0% |     1.17 MB → 0 B |   2 → 0 | `<init>(int)`                                        | java.lang.AbstractStringBuilder                          |
|  -20.2% | -1.03 MB |        0.0% | 5.09 MB → 4.06 MB |  10 → 9 | `<init>(InputStream, Inflater, int)`                 | java.util.zip.InflaterInputStream                        |
| removed |  -974 kB |        0.0% |      974 kB → 0 B |   1 → 0 | `collectGarbage(String)`                             | org.renaissance.harness.ExecutionPlugins$ForceGcPlugin   |
| removed |  -496 kB |        0.0% |      496 kB → 0 B |   2 → 0 | `addConstantNameAndType(String, String)`             | jdk.internal.org.objectweb.asm.SymbolTable               |
|   -2.0% |  -444 kB |        0.1% | 22.3 MB → 21.8 MB |       1 | `initTable()`                                        | java.util.concurrent.ConcurrentHashMap                   |
| removed |  -419 kB |        0.0% |      419 kB → 0 B |   1 → 0 | `visitMethod(int, String, String, String, String[])` | jdk.internal.org.objectweb.asm.ClassWriter               |
| removed |  -403 kB |        0.0% |      403 kB → 0 B |   1 → 0 | `initCEN(int, ZipCoder)`                             | java.util.zip.ZipFile$Source                             |
| removed |  -396 kB |        0.0% |      396 kB → 0 B |   1 → 0 | `opt(String, Read)`                                  | scopt.OptionParser                                       |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|    Change |    Delta |             % |              Size |       Samples | Function                                                  | Location                                                 |
| --------: | -------: | ------------: | ----------------: | ------------: | --------------------------------------------------------- | -------------------------------------------------------- |
|    +73.4% | +2.62 GB |  8.8% → 15.2% | 3.56 GB → 6.18 GB |     208 → 259 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | java.util.concurrent.ForkJoinPool                        |
|     +5.5% | +1.51 GB | 67.8% → 71.3% | 27.4 GB → 28.9 GB | 1,234 → 1,329 | `awaitDone(int, long)`                                    | java.util.concurrent.ForkJoinTask                        |
|     +5.5% | +1.51 GB | 67.8% → 71.3% | 27.4 GB → 28.9 GB | 1,234 → 1,329 | `join()`                                                  | java.util.concurrent.ForkJoinTask                        |
|     +4.5% | +1.23 GB | 67.0% → 69.8% | 27.1 GB → 28.3 GB | 1,220 → 1,304 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | java.util.concurrent.ForkJoinPool$WorkQueue              |
|    +25.8% | +1.06 GB | 10.2% → 12.8% | 4.12 GB → 5.18 GB |     206 → 238 | `grow()`                                                  | java.util.ArrayList                                      |
|    +25.8% | +1.06 GB | 10.2% → 12.8% | 4.12 GB → 5.18 GB |     206 → 238 | `add(Object, Object[], int)`                              | java.util.ArrayList                                      |
|    +25.8% | +1.06 GB | 10.2% → 12.8% | 4.12 GB → 5.18 GB |     206 → 238 | `add(Object)`                                             | java.util.ArrayList                                      |
|    +15.9% |  +750 MB | 11.7% → 13.5% | 4.72 GB → 5.47 GB |     222 → 258 | `collectClusters(int[])`                                  | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|     +3.9% |  +661 MB | 41.9% → 43.4% |   17 GB → 17.6 GB |     870 → 885 | `grow(int)`                                               | java.util.ArrayList                                      |
|     +7.8% |  +499 MB | 15.9% → 17.1% | 6.43 GB → 6.93 GB |     290 → 328 | `computeDirectly()`                                       | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|     +0.5% |  +185 MB | 92.6% → 92.7% | 37.5 GB → 37.6 GB | 1,720 → 1,777 | `copyOf(Object[], int)`                                   | java.util.Arrays                                         |
|       new |  +167 MB |   0.0% → 0.4% |      0 B → 167 MB |         0 → 1 | `entryFor(String)`                                        | java.util.jar.JarFile                                    |
|       new |  +167 MB |   0.0% → 0.4% |      0 B → 167 MB |         0 → 1 | `entryFor(JarFile, String)`                               | java.util.jar.JavaUtilJarAccessImpl                      |
|       new |  +167 MB |   0.0% → 0.4% |      0 B → 167 MB |         0 → 1 | `getZipEntry(String, int)`                                | java.util.zip.ZipFile                                    |
|       new |  +167 MB |   0.0% → 0.4% |      0 B → 167 MB |         0 → 1 | `getEntry(String)`                                        | java.util.zip.ZipFile                                    |
|       new |  +167 MB |   0.0% → 0.4% |      0 B → 167 MB |         0 → 1 | `getEntry(String)`                                        | java.util.jar.JarFile                                    |
|       new |  +167 MB |   0.0% → 0.4% |      0 B → 167 MB |         0 → 1 | `getJarEntry(String)`                                     | java.util.jar.JarFile                                    |
| +10578.6% |  +166 MB |   0.0% → 0.4% |  1.57 MB → 168 MB |             3 | `getResource(String, boolean)`                            | jdk.internal.loader.URLClassPath                         |
| +14184.8% |  +166 MB |   0.0% → 0.4% |  1.17 MB → 167 MB |             2 | `getResource(String, boolean)`                            | jdk.internal.loader.URLClassPath$JarLoader               |
|  +2338.1% |  +164 MB |   0.0% → 0.4% |  7.03 MB → 171 MB |       11 → 12 | `defineClass(String, byte[], int, int, ProtectionDomain)` | java.lang.ClassLoader                                    |

#### Progressions

Functions with the largest decrease in total bytes allocated in the function and all its callees.

| Change |   Delta |             % |              Size |       Samples | Function                                             | Location                                                             |
| -----: | ------: | ------------: | ----------------: | ------------: | ---------------------------------------------------- | -------------------------------------------------------------------- |
| -11.1% | -911 MB | 20.3% → 18.0% |  8.22 GB → 7.3 GB |     208 → 197 | `lambda$run$0(int, List, int)`                       | org.renaissance.jdk.concurrent.JavaKMeans                            |
| -11.1% | -911 MB | 20.3% → 18.0% |  8.22 GB → 7.3 GB |     208 → 197 | `call()`                                             | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0 |
| -11.1% | -911 MB | 20.3% → 18.0% |  8.22 GB → 7.3 GB |     208 → 197 | `exec()`                                             | java.util.concurrent.ForkJoinTask$AdaptedCallable                    |
|  -1.7% | -666 MB | 95.6% → 93.6% |   38.7 GB → 38 GB | 1,753 → 1,828 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool$WorkQueue                          |
|  -1.3% | -512 MB | 93.9% → 92.3% |   38 GB → 37.5 GB | 1,726 → 1,800 | `runWorker(ForkJoinPool$WorkQueue)`                  | java.util.concurrent.ForkJoinPool                                    |
|  -1.3% | -512 MB | 93.9% → 92.3% |   38 GB → 37.5 GB | 1,726 → 1,800 | `run()`                                              | java.util.concurrent.ForkJoinWorkerThread                            |
|  -1.5% | -501 MB | 82.8% → 81.3% |   33.5 GB → 33 GB | 1,531 → 1,563 | `combineResults(Map, Map)`                           | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|  -1.5% | -501 MB | 82.8% → 81.3% |   33.5 GB → 33 GB | 1,531 → 1,563 | `combineResults(Object, Object)`                     | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|  -1.5% | -495 MB | 82.8% → 81.3% |   33.5 GB → 33 GB | 1,531 → 1,565 | `merge(Map, Map)`                                    | org.renaissance.jdk.concurrent.JavaKMeans                            |
|  -1.4% | -477 MB | 82.5% → 81.1% | 33.4 GB → 32.9 GB | 1,525 → 1,557 | `lambda$merge$6(List, List)`                         | org.renaissance.jdk.concurrent.JavaKMeans                            |
|  -1.4% | -477 MB | 82.5% → 81.1% | 33.4 GB → 32.9 GB | 1,525 → 1,557 | `apply(Object, Object)`                              | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0 |
|  -1.4% | -475 MB | 82.5% → 81.1% | 33.4 GB → 32.9 GB | 1,525 → 1,558 | `merge(Object, Object, BiFunction)`                  | java.util.HashMap                                                    |
|  -1.4% | -475 MB | 82.5% → 81.1% | 33.4 GB → 32.9 GB | 1,525 → 1,558 | `lambda$merge$7(Map, Object, List)`                  | org.renaissance.jdk.concurrent.JavaKMeans                            |
|  -1.4% | -475 MB | 82.5% → 81.1% | 33.4 GB → 32.9 GB | 1,525 → 1,558 | `accept(Object, Object)`                             | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88 |
|  -1.4% | -475 MB | 82.5% → 81.1% | 33.4 GB → 32.9 GB | 1,525 → 1,558 | `forEach(BiConsumer)`                                | java.util.HashMap                                                    |
|  -4.9% | -459 MB | 23.2% → 22.0% | 9.38 GB → 8.92 GB |     390 → 418 | `<init>(Collection)`                                 | java.util.ArrayList                                                  |
|  -1.0% | -395 MB | 94.3% → 93.0% | 38.2 GB → 37.8 GB | 1,732 → 1,805 | `scan(ForkJoinPool$WorkQueue, int, int)`             | java.util.concurrent.ForkJoinPool                                    |
|  -4.2% | -348 MB | 20.5% → 19.6% |  8.3 GB → 7.96 GB |     216 → 209 | `invoke()`                                           | java.util.concurrent.ForkJoinTask                                    |
|  -1.3% | -260 MB | 50.8% → 50.0% | 20.5 GB → 20.3 GB |     859 → 904 | `toArray()`                                          | java.util.ArrayList                                                  |
| -14.7% | -251 MB |   4.2% → 3.6% | 1.71 GB → 1.46 GB |       68 → 70 | `findNearestCentroid()`                              | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |


# Lock contention profile diff

Blocked 7.03s → 7.44s (+416.7ms, +5.9%) over 54 samples → 58 samples (130.2ms → 128.4ms per sample).

| Category | Change |    Delta |      % |          Time | Samples |
| -------- | -----: | -------: | -----: | ------------: | ------: |
| ours     |  +5.9% | +416.7ms | 100.0% | 7.03s → 7.44s | 54 → 58 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time blocked directly in the function body, excluding callees.

| Change |    Delta |      % |          Time | Samples | Function              | Location                 |
| -----: | -------: | -----: | ------------: | ------: | --------------------- | ------------------------ |
|  +5.9% | +416.7ms | 100.0% | 7.03s → 7.44s | 54 → 58 | `park(boolean, long)` | jdk.internal.misc.Unsafe |

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

| Change |    Delta |             % |              Time | Samples | Function                                                                                                               | Location                                                             |
| -----: | -------: | ------------: | ----------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
|  +5.9% | +416.7ms |        100.0% |     7.03s → 7.44s | 54 → 58 | `park(boolean, long)`                                                                                                  | jdk.internal.misc.Unsafe                                             |
| +48.4% | +408.3ms | 12.0% → 16.8% |   842.8ms → 1.25s | 37 → 42 | `awaitWork(ForkJoinPool$WorkQueue)`                                                                                    | java.util.concurrent.ForkJoinPool                                    |
| +46.6% | +397.4ms | 12.1% → 16.8% |   853.6ms → 1.25s | 38 → 42 | `runWorker(ForkJoinPool$WorkQueue)`                                                                                    | java.util.concurrent.ForkJoinPool                                    |
| +46.6% | +397.4ms | 12.1% → 16.8% |   853.6ms → 1.25s | 38 → 42 | `run()`                                                                                                                | java.util.concurrent.ForkJoinWorkerThread                            |
| +92.9% | +226.1ms |   3.5% → 6.3% | 243.3ms → 469.4ms | 11 → 16 | `parkUntil(long)`                                                                                                      | java.util.concurrent.locks.LockSupport                               |
|  +2.8% | +190.6ms | 96.5% → 93.7% |     6.78s → 6.97s | 43 → 42 | `park()`                                                                                                               | java.util.concurrent.locks.LockSupport                               |
|  +0.3% |  +19.3ms | 87.9% → 83.2% |     6.17s → 6.19s |      16 | `get()`                                                                                                                | java.util.concurrent.ForkJoinTask                                    |
|  +0.3% |  +19.3ms | 87.9% → 83.2% |     6.17s → 6.19s |      16 | `run(int, List, int)`                                                                                                  | org.renaissance.jdk.concurrent.JavaKMeans                            |
|  +0.3% |  +19.3ms | 87.9% → 83.2% |     6.17s → 6.19s |      16 | `$anonfun$1(int)`                                                                                                      | org.renaissance.jdk.concurrent.FjKmeans                              |
|  +0.3% |  +19.3ms | 87.9% → 83.2% |     6.17s → 6.19s |      16 | `$anonfun$adapted$1(Object)`                                                                                           | org.renaissance.jdk.concurrent.FjKmeans                              |
|  +0.3% |  +19.3ms | 87.9% → 83.2% |     6.17s → 6.19s |      16 | `apply(Object)`                                                                                                        | org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011f6c70   |
|  +0.3% |  +19.3ms | 87.9% → 83.2% |     6.17s → 6.19s |      16 | `map(Function1)`                                                                                                       | scala.collection.immutable.Range                                     |
|  +0.3% |  +19.3ms | 87.9% → 83.2% |     6.17s → 6.19s |      16 | `run(BenchmarkContext)`                                                                                                | org.renaissance.jdk.concurrent.FjKmeans                              |
|  +0.3% |  +19.3ms | 87.9% → 83.2% |     6.17s → 6.19s |      16 | `executeOperation(int)`                                                                                                | org.renaissance.harness.ExecutionDriver                              |
|  +0.3% |  +19.3ms | 87.9% → 83.2% |     6.17s → 6.19s |      16 | `executeBenchmark()`                                                                                                   | org.renaissance.harness.ExecutionDriver                              |
|  +0.3% |  +19.3ms | 87.9% → 83.2% |     6.17s → 6.19s |      16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | org.renaissance.harness.RenaissanceSuite$                            |
|  +0.3% |  +19.3ms | 87.9% → 83.2% |     6.17s → 6.19s |      16 | `applyVoid(Object)`                                                                                                    | org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001198798 |
|  +0.3% |  +19.3ms | 87.9% → 83.2% |     6.17s → 6.19s |      16 | `apply(Object)`                                                                                                        | scala.runtime.function.JProcedure1                                   |
|  +0.3% |  +19.3ms | 87.9% → 83.2% |     6.17s → 6.19s |      16 | `foreach(Function1)`                                                                                                   | scala.collection.immutable.List                                      |
|  +0.3% |  +19.3ms | 87.9% → 83.2% |     6.17s → 6.19s |      16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | org.renaissance.harness.RenaissanceSuite$                            |

#### Progressions

Functions with the largest decrease in total time blocked in the function and all its callees.

|  Change |   Delta |           % |         Time | Samples | Function                                             | Location                                                             |
| ------: | ------: | ----------: | -----------: | ------: | ---------------------------------------------------- | -------------------------------------------------------------------- |
| removed | -10.9ms | 0.2% → 0.0% | 10.9ms → 0ms |   1 → 0 | `join()`                                             | java.util.concurrent.ForkJoinTask                                    |
| removed | -10.9ms | 0.2% → 0.0% | 10.9ms → 0ms |   1 → 0 | `compute()`                                          | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask                 |
| removed | -10.9ms | 0.2% → 0.0% | 10.9ms → 0ms |   1 → 0 | `exec()`                                             | java.util.concurrent.RecursiveTask                                   |
| removed | -10.9ms | 0.2% → 0.0% | 10.9ms → 0ms |   1 → 0 | `doExec()`                                           | java.util.concurrent.ForkJoinTask                                    |
| removed | -10.9ms | 0.2% → 0.0% | 10.9ms → 0ms |   1 → 0 | `invoke()`                                           | java.util.concurrent.ForkJoinTask                                    |
| removed | -10.9ms | 0.2% → 0.0% | 10.9ms → 0ms |   1 → 0 | `average(List)`                                      | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                 |
| removed | -10.9ms | 0.2% → 0.0% | 10.9ms → 0ms |   1 → 0 | `computeClusterAverages()`                           | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                 |
| removed | -10.9ms | 0.2% → 0.0% | 10.9ms → 0ms |   1 → 0 | `computeDirectly()`                                  | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                 |
| removed | -10.9ms | 0.2% → 0.0% | 10.9ms → 0ms |   1 → 0 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | java.util.concurrent.ForkJoinPool$WorkQueue                          |
| removed | -10.9ms | 0.2% → 0.0% | 10.9ms → 0ms |   1 → 0 | `lambda$run$0(int, List, int)`                       | org.renaissance.jdk.concurrent.JavaKMeans                            |
| removed | -10.9ms | 0.2% → 0.0% | 10.9ms → 0ms |   1 → 0 | `call()`                                             | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0 |
| removed | -10.9ms | 0.2% → 0.0% | 10.9ms → 0ms |   1 → 0 | `exec()`                                             | java.util.concurrent.ForkJoinTask$AdaptedCallable                    |
| removed | -10.9ms | 0.2% → 0.0% | 10.9ms → 0ms |   1 → 0 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool$WorkQueue                          |
| removed | -10.9ms | 0.2% → 0.0% | 10.9ms → 0ms |   1 → 0 | `scan(ForkJoinPool$WorkQueue, int, int)`             | java.util.concurrent.ForkJoinPool                                    |

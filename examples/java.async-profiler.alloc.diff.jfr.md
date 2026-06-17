# Allocated heap profile diff

Allocated 3.3 GB (+8.14 MB, +0.2%) over 75,363 samples → 75,256 samples (43.7 kB → 43.9 kB per sample).

| Category | Change |    Delta |      % |   Size |         Samples |
| -------- | -----: | -------: | -----: | -----: | --------------: |
| ours     |  +0.2% | +8.14 MB | 100.0% | 3.3 GB | 75,363 → 75,256 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|  Change |    Delta |     % |              Size |         Samples | Function                                  | Location                                                 |
| ------: | -------: | ----: | ----------------: | --------------: | ----------------------------------------- | -------------------------------------------------------- |
|   +0.2% |  +7.9 MB | 99.6% | 3.28 GB → 3.29 GB | 68,226 → 68,315 | `copyOf(Object[], int)`                   | java.util.Arrays                                         |
|     new |  +261 kB |  0.0% |      0 B → 261 kB |           0 → 1 | `initCEN(int, ZipCoder)`                  | java.util.zip.ZipFile$Source                             |
| +264.3% |  +222 kB |  0.0% |  84.2 kB → 307 kB |          8 → 14 | `<init>(InputStream, Inflater, int)`      | java.util.zip.InflaterInputStream                        |
|  +50.5% |  +139 kB |  0.0% |   276 kB → 415 kB |         21 → 27 | `copyOf(byte[], int)`                     | java.util.Arrays                                         |
|     new | +9.89 kB |  0.0% |     0 B → 9.89 kB |           0 → 1 | `<clinit>()`                              | jdk.internal.math.MathUtils                              |
|  +20.4% | +3.14 kB |  0.0% | 15.3 kB → 18.5 kB |       274 → 330 | `createSubtask(int, int)`                 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|     new | +2.74 kB |  0.0% |     0 B → 2.74 kB |           0 → 1 | `getDeclaredConstructors0(boolean)`       | java.lang.Class                                          |
|   +5.1% | +1.34 kB |  0.0% | 26.2 kB → 27.5 kB |       467 → 491 | `grow(int)`                               | java.util.ArrayList                                      |
|     new |   +632 B |  0.0% |       0 B → 632 B |           0 → 1 | `<init>(int)`                             | jdk.internal.org.objectweb.asm.ByteVector                |
| +260.0% |   +624 B |  0.0% |     240 B → 864 B |          5 → 18 | `computeClusterAverages()`                | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
| +152.9% |   +416 B |  0.0% |     272 B → 688 B |           1 → 3 | `fillInStackTrace(int)`                   | java.lang.Throwable                                      |
|  +63.6% |   +336 B |  0.0% |     528 B → 864 B |         11 → 18 | `createSubtask(int, int)`                 | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
|     new |   +328 B |  0.0% |       0 B → 328 B |           0 → 1 | `load(DataInputStream)`                   | java.time.zone.TzdbZoneRulesProvider                     |
|   +8.9% |   +264 B |  0.0% | 2.95 kB → 3.22 kB |       123 → 134 | `valueOf(double)`                         | java.lang.Double                                         |
| +150.0% |   +168 B |  0.0% |     112 B → 280 B |           2 → 5 | `mapToObj(DoubleFunction, int)`           | java.util.stream.DoublePipeline                          |
|   +6.1% |   +168 B |  0.0% | 2.74 kB → 2.91 kB |         49 → 52 | `mapToObj(IntFunction, int)`              | java.util.stream.IntPipeline                             |
|   +5.8% |   +168 B |  0.0% | 2.91 kB → 3.08 kB |         52 → 55 | `intStream(Spliterator$OfInt, boolean)`   | java.util.stream.StreamSupport                           |
|   +9.4% |   +120 B |  0.0% |  1.28 kB → 1.4 kB |         32 → 35 | `lambda$generateData$4(int)`              | org.renaissance.jdk.concurrent.JavaKMeans                |
|     new |    +96 B |  0.0% |        0 B → 96 B |           0 → 2 | `allocateUninitializedArray0(Class, int)` | jdk.internal.misc.Unsafe                                 |
|     new |    +80 B |  0.0% |        0 B → 80 B |           0 → 2 | `<init>(Collection)`                      | java.util.ArrayList                                      |

#### Progressions

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |    Delta |    % |              Size |       Samples | Function                                      | Location                                                 |
| ------: | -------: | ---: | ----------------: | ------------: | --------------------------------------------- | -------------------------------------------------------- |
|   -4.9% |  -349 kB | 0.2% | 7.08 MB → 6.73 MB | 3,593 → 3,416 | `findNearestCentroid()`                       | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|   -0.6% | -30.6 kB | 0.2% | 5.42 MB → 5.39 MB |       19 → 26 | `copyOf(Object[], int, Class)`                | java.util.Arrays                                         |
|  -38.4% | -8.75 kB | 0.0% | 22.8 kB → 14.1 kB |     218 → 206 | `resize()`                                    | java.util.HashMap                                        |
|  -17.7% | -1.74 kB | 0.0% |  9.8 kB → 8.06 kB |     175 → 144 | `vectorSum()`                                 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  -15.3% | -1.68 kB | 0.0% |   11 kB → 9.31 kB |     229 → 194 | `collectClusters(int[])`                      | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| removed | -1.22 kB | 0.0% |     1.22 kB → 0 B |         1 → 0 | `<clinit>()`                                  | sun.security.util.SecurityProviderConstants              |
|   -6.3% | -1.15 kB | 0.0% | 18.4 kB → 17.3 kB |     576 → 540 | `newNode(int, Object, Object, HashMap$Node)`  | java.util.HashMap                                        |
|  -10.1% | -1.01 kB | 0.0% | 9.97 kB → 8.96 kB |     178 → 160 | `add(double[], double[])`                     | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  -39.8% |   -968 B | 0.0% | 2.43 kB → 1.46 kB |             1 | `load(DataInputStream)`                       | sun.util.calendar.ZoneInfoFile                           |
|   -5.3% |   -384 B | 0.0% | 7.25 kB → 6.86 kB |     151 → 143 | `merge(Map, Map)`                             | org.renaissance.jdk.concurrent.JavaKMeans                |
|  -59.0% |   -288 B | 0.0% |     488 B → 200 B |         4 → 1 | `copyOfRangeByte(byte[], int, int)`           | java.util.Arrays                                         |
|  -50.0% |   -264 B | 0.0% |     528 B → 264 B |       22 → 11 | `allocateInstance(Object)`                    | java.lang.invoke.DirectMethodHandle                      |
|  -28.6% |   -192 B | 0.0% |     672 B → 480 B |       28 → 20 | `builder(long, IntFunction)`                  | java.util.stream.Nodes                                   |
|   -2.8% |   -144 B | 0.0% | 5.16 kB → 5.02 kB |     215 → 209 | `lambda$merge$6(List, List)`                  | org.renaissance.jdk.concurrent.JavaKMeans                |
| removed |    -64 B | 0.0% |        64 B → 0 B |         2 → 0 | `<init>(int)`                                 | java.lang.AbstractStringBuilder                          |
|  -50.0% |    -56 B | 0.0% |      112 B → 56 B |         2 → 1 | `doubleStream(Spliterator$OfDouble, boolean)` | java.util.stream.StreamSupport                           |
| removed |    -56 B | 0.0% |        56 B → 0 B |         1 → 0 | `div(double[], int)`                          | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
| removed |    -56 B | 0.0% |        56 B → 0 B |         1 → 0 | `addConstantUtf8(String)`                     | jdk.internal.org.objectweb.asm.SymbolTable               |
|  -20.0% |    -48 B | 0.0% |     240 B → 192 B |        10 → 8 | `awaitDone(int, long)`                        | java.util.concurrent.ForkJoinTask                        |
|  -66.7% |    -48 B | 0.0% |       72 B → 24 B |         3 → 1 | `opWrapSink(int, Sink)`                       | java.util.stream.DoublePipeline$1                        |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

| Change |    Delta |             % |              Size |         Samples | Function                                             | Location                                                             |
| -----: | -------: | ------------: | ----------------: | --------------: | ---------------------------------------------------- | -------------------------------------------------------------------- |
|    new | +3.29 GB |  0.0% → 99.5% |     0 B → 3.29 GB |      0 → 56,705 | `accept(Object, Object)`                             | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000501186d88 |
|    new | +3.29 GB |  0.0% → 99.5% |     0 B → 3.29 GB |      0 → 56,702 | `apply(Object, Object)`                              | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000501187218 |
|    new | +2.06 GB |  0.0% → 62.3% |     0 B → 2.06 GB |      0 → 15,001 | `call()`                                             | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000501183d68 |
|  +1.3% | +16.1 MB | 37.0% → 37.4% | 1.22 GB → 1.24 GB | 29,286 → 29,316 | `toArray()`                                          | java.util.ArrayList                                                  |
|  +1.4% | +8.22 MB | 18.5% → 18.7% |   608 MB → 616 MB | 14,270 → 14,389 | `<init>(Collection)`                                 | java.util.ArrayList                                                  |
|  +0.2% | +7.87 MB |         99.8% |  3.29 GB → 3.3 GB | 68,245 → 68,341 | `copyOf(Object[], int)`                              | java.util.Arrays                                                     |
|  +0.2% | +7.81 MB |         99.5% | 3.28 GB → 3.29 GB | 56,699 → 56,702 | `lambda$merge$6(List, List)`                         | org.renaissance.jdk.concurrent.JavaKMeans                            |
|  +0.2% | +7.81 MB |         99.5% | 3.28 GB → 3.29 GB | 56,703 → 56,705 | `merge(Object, Object, BiFunction)`                  | java.util.HashMap                                                    |
|  +0.2% | +7.81 MB |         99.5% | 3.28 GB → 3.29 GB | 56,703 → 56,705 | `lambda$merge$7(Map, Object, List)`                  | org.renaissance.jdk.concurrent.JavaKMeans                            |
|  +0.2% | +7.81 MB |         99.5% | 3.28 GB → 3.29 GB | 56,703 → 56,705 | `forEach(BiConsumer)`                                | java.util.HashMap                                                    |
|  +0.2% | +7.81 MB |         99.5% | 3.28 GB → 3.29 GB | 57,245 → 57,232 | `merge(Map, Map)`                                    | org.renaissance.jdk.concurrent.JavaKMeans                            |
|  +0.2% | +7.81 MB |         99.5% | 3.28 GB → 3.29 GB | 57,236 → 57,224 | `combineResults(Map, Map)`                           | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|  +0.2% | +7.81 MB |         99.5% | 3.28 GB → 3.29 GB | 57,236 → 57,224 | `combineResults(Object, Object)`                     | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|  +0.2% | +7.52 MB |         99.8% |  3.29 GB → 3.3 GB | 74,960 → 74,836 | `doExec()`                                           | java.util.concurrent.ForkJoinTask                                    |
|  +0.2% | +7.52 MB |         99.8% |  3.29 GB → 3.3 GB | 74,960 → 74,836 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool$WorkQueue                          |
|  +0.2% | +7.52 MB |         99.8% |  3.29 GB → 3.3 GB | 74,960 → 74,836 | `scan(ForkJoinPool$WorkQueue, int, int)`             | java.util.concurrent.ForkJoinPool                                    |
|  +0.2% | +7.52 MB |         99.8% |  3.29 GB → 3.3 GB | 74,960 → 74,836 | `runWorker(ForkJoinPool$WorkQueue)`                  | java.util.concurrent.ForkJoinPool                                    |
|  +0.2% | +7.52 MB |         99.8% |  3.29 GB → 3.3 GB | 74,960 → 74,836 | `run()`                                              | java.util.concurrent.ForkJoinWorkerThread                            |
|  +0.2% | +7.52 MB |         99.8% |  3.29 GB → 3.3 GB | 74,957 → 74,830 | `compute()`                                          | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask                 |
|  +0.2% | +7.52 MB |         99.8% |  3.29 GB → 3.3 GB | 74,957 → 74,830 | `exec()`                                             | java.util.concurrent.RecursiveTask                                   |

#### Progressions

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |    Delta |             % |              Size |         Samples | Function                                                  | Location                                                             |
| ------: | -------: | ------------: | ----------------: | --------------: | --------------------------------------------------------- | -------------------------------------------------------------------- |
| removed | -3.28 GB |  99.5% → 0.0% |     3.28 GB → 0 B |      56,703 → 0 | `accept(Object, Object)`                                  | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88 |
| removed | -3.28 GB |  99.5% → 0.0% |     3.28 GB → 0 B |      56,699 → 0 | `apply(Object, Object)`                                   | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0 |
| removed | -2.06 GB |  62.4% → 0.0% |     2.06 GB → 0 B |      14,949 → 0 | `call()`                                                  | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68 |
|   -0.4% |  -8.2 MB | 62.8% → 62.4% | 2.07 GB → 2.06 GB | 39,426 → 39,516 | `grow(int)`                                               | java.util.ArrayList                                                  |
| removed | -5.68 MB |   0.2% → 0.0% |     5.68 MB → 0 B |         399 → 0 | `invokeStatic(Object, Object)`                            | java.lang.invoke.LambdaForm$DMH.0x0000007001004800                   |
| removed | -5.68 MB |   0.2% → 0.0% |     5.68 MB → 0 B |         399 → 0 | `invoke(Object, Object, Object)`                          | java.lang.invoke.LambdaForm$MH.0x0000007001009800                    |
| removed | -5.48 MB |   0.2% → 0.0% |     5.48 MB → 0 B |         370 → 0 | `applyVoid(Object)`                                       | org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111efe0 |
| removed | -5.27 MB |   0.2% → 0.0% |     5.27 MB → 0 B |           5 → 0 | `accept(Object, Object)`                                  | java.util.stream.Collectors$$Lambda.0x0000007001070ab8               |
|   -0.5% | -4.87 MB | 30.3% → 30.1% |  1000 MB → 995 MB | 60,059 → 59,701 | `awaitDone(int, long)`                                    | java.util.concurrent.ForkJoinTask                                    |
|   -0.5% | -4.87 MB | 30.3% → 30.1% |  1000 MB → 995 MB | 60,059 → 59,701 | `join()`                                                  | java.util.concurrent.ForkJoinTask                                    |
|   -0.3% |  -2.7 MB | 30.0% → 29.8% |   988 MB → 986 MB | 59,435 → 59,103 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | java.util.concurrent.ForkJoinPool$WorkQueue                          |
|   -4.0% | -2.59 MB |   2.0% → 1.9% | 64.7 MB → 62.2 MB | 10,832 → 10,731 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | java.util.concurrent.ForkJoinPool                                    |
|   -0.0% |  -418 kB | 81.0% → 80.8% |           2.67 GB | 42,214 → 42,106 | `addAll(Collection)`                                      | java.util.ArrayList                                                  |
|   -4.9% |  -349 kB |          0.2% | 7.08 MB → 6.73 MB |   3,593 → 3,416 | `findNearestCentroid()`                                   | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|   -2.4% |  -288 kB |          0.4% | 11.9 MB → 11.7 MB | 16,684 → 16,548 | `computeDirectly()`                                       | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
| removed | -37.1 kB |          0.0% |     37.1 kB → 0 B |           2 → 0 | `loadProperties(URL)`                                     | org.renaissance.core.ResourceUtils                                   |
| removed | -37.1 kB |          0.0% |     37.1 kB → 0 B |           2 → 0 | `loadPropertiesAsMap(URL)`                                | org.renaissance.core.ResourceUtils                                   |
| removed | -37.1 kB |          0.0% |     37.1 kB → 0 B |           2 → 0 | `create(Path, String, Optional, Map, boolean)`            | org.renaissance.core.BenchmarkSuite                                  |
| removed | -37.1 kB |          0.0% |     37.1 kB → 0 B |           2 → 0 | `apply()`                                                 | org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001103058 |
| removed | -37.1 kB |          0.0% |     37.1 kB → 0 B |           1 → 0 | `getInputStream()`                                        | sun.net.www.protocol.jar.JarURLConnection                            |

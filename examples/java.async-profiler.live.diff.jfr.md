# Allocated heap profile diff

Allocated 3.35 GB → 3.31 GB (-37.2 MB, -1.1%) over 76,154 samples → 76,122 samples (44 kB → 43.5 kB per sample).

| Category | Change |    Delta |      % |              Size |         Samples |
| -------- | -----: | -------: | -----: | ----------------: | --------------: |
| ours     |  -1.1% | -37.2 MB | 100.0% | 3.35 GB → 3.31 GB | 76,154 → 76,122 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|  Change |    Delta |           % |              Size |       Samples | Function                                                                                                                 | Location                                                 |
| ------: | -------: | ----------: | ----------------: | ------------: | ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- |
|  +17.3% |  +814 kB | 0.1% → 0.2% |  4.7 MB → 5.51 MB |       28 → 27 | `copyOf(Object[], int, Class)`                                                                                           | java.util.Arrays                                         |
|   +3.7% |  +246 kB |        0.2% |  6.65 MB → 6.9 MB | 3,375 → 3,500 | `findNearestCentroid()`                                                                                                  | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  +92.4% |  +178 kB |        0.0% |   193 kB → 371 kB |        9 → 15 | `<init>(InputStream, Inflater, int)`                                                                                     | java.util.zip.InflaterInputStream                        |
|     new | +32.8 kB |        0.0% |     0 B → 32.8 kB |         0 → 2 | `transferTo(OutputStream)`                                                                                               | java.io.InputStream                                      |
|     new | +16.4 kB |        0.0% |     0 B → 16.4 kB |         0 → 1 | `readNBytes(int)`                                                                                                        | java.io.InputStream                                      |
|  +41.6% | +3.19 kB |        0.0% | 7.67 kB → 10.9 kB |     137 → 194 | `vectorSum()`                                                                                                            | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|   +8.1% | +1.96 kB |        0.0% | 24.2 kB → 26.2 kB |     432 → 467 | `grow(int)`                                                                                                              | java.util.ArrayList                                      |
|  +14.0% |  +1.4 kB |        0.0% |   10 kB → 11.4 kB |     179 → 204 | `add(double[], double[])`                                                                                                | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  +16.1% |   +840 B |        0.0% | 5.21 kB → 6.05 kB |     217 → 252 | `lambda$merge$6(List, List)`                                                                                             | org.renaissance.jdk.concurrent.JavaKMeans                |
|  +17.8% |   +840 B |        0.0% | 4.73 kB → 5.57 kB |     197 → 232 | `lambda$collectClusters$0(Double[])`                                                                                     | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|   +4.0% |   +720 B |        0.0% | 17.8 kB → 18.5 kB |     371 → 386 | `createSubtask(int, int)`                                                                                                | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|   +9.7% |   +672 B |        0.0% | 6.96 kB → 7.63 kB |     145 → 159 | `merge(Map, Map)`                                                                                                        | org.renaissance.jdk.concurrent.JavaKMeans                |
|   +9.1% |   +280 B |        0.0% | 3.08 kB → 3.36 kB |       55 → 60 | `intStream(Spliterator$OfInt, boolean)`                                                                                  | java.util.stream.StreamSupport                           |
|     new |   +240 B |        0.0% |       0 B → 240 B |         0 → 3 | `fillInStackTrace(int)`                                                                                                  | java.lang.Throwable                                      |
|  +57.9% |   +176 B |        0.0% |     304 B → 480 B |       19 → 30 | `entrySet()`                                                                                                             | java.util.HashMap                                        |
| +150.0% |   +168 B |        0.0% |     112 B → 280 B |         2 → 5 | `mapToObj(DoubleFunction, int)`                                                                                          | java.util.stream.DoublePipeline                          |
|     new |   +152 B |        0.0% |       0 B → 152 B |         0 → 1 | `<init>(MethodHandles$Lookup, MethodType, String, MethodType, MethodHandle, MethodType, boolean, Class[], MethodType[])` | java.lang.invoke.InnerClassLambdaMetafactory             |
|   +7.5% |   +120 B |        0.0% |  1.6 kB → 1.72 kB |       40 → 43 | `lambda$generateData$4(int)`                                                                                             | org.renaissance.jdk.concurrent.JavaKMeans                |
|  +66.7% |   +112 B |        0.0% |     168 B → 280 B |         3 → 5 | `doubleStream(Spliterator$OfDouble, boolean)`                                                                            | java.util.stream.StreamSupport                           |
|     new |    +96 B |        0.0% |        0 B → 96 B |         0 → 3 | `putVal(Object, Object, boolean)`                                                                                        | java.util.concurrent.ConcurrentHashMap                   |

#### Progressions

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |    Delta |     % |              Size |         Samples | Function                     | Location                                                 |
| ------: | -------: | ----: | ----------------: | --------------: | ---------------------------- | -------------------------------------------------------- |
|   -1.1% |   -38 MB | 99.6% |  3.34 GB → 3.3 GB | 69,267 → 69,036 | `copyOf(Object[], int)`      | java.util.Arrays                                         |
| removed |  -267 kB |  0.0% |      267 kB → 0 B |           2 → 0 | `initCEN(int, ZipCoder)`     | java.util.zip.ZipFile$Source                             |
|  -28.8% |  -168 kB |  0.0% |   584 kB → 416 kB |         29 → 30 | `copyOf(byte[], int)`        | java.util.Arrays                                         |
|  -22.1% | -2.21 kB |  0.0% | 9.98 kB → 7.78 kB |       208 → 162 | `collectClusters(int[])`     | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  -12.0% | -2.13 kB |  0.0% | 17.7 kB → 15.6 kB |       316 → 278 | `createSubtask(int, int)`    | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  -24.3% |   -840 B |  0.0% | 3.46 kB → 2.62 kB |       144 → 109 | `valueOf(double)`            | java.lang.Double                                         |
|  -24.0% |   -672 B |  0.0% |  2.8 kB → 2.13 kB |         50 → 38 | `mapToObj(IntFunction, int)` | java.util.stream.IntPipeline                             |
|  -66.0% |   -528 B |  0.0% |     800 B → 272 B |           2 → 1 | `enlarge(int)`               | jdk.internal.org.objectweb.asm.ByteVector                |
|  -50.0% |   -432 B |  0.0% |     864 B → 432 B |          18 → 9 | `createSubtask(int, int)`    | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
|  -40.7% |   -264 B |  0.0% |     648 B → 384 B |         27 → 16 | `builder(long, IntFunction)` | java.util.stream.Nodes                                   |
| removed |   -240 B |  0.0% |       240 B → 0 B |           1 → 0 | `load(DataInputStream)`      | sun.util.calendar.ZoneInfoFile                           |
|   -1.4% |   -216 B |  0.0% | 15.2 kB → 14.9 kB |       224 → 215 | `resize()`                   | java.util.HashMap                                        |
|  -25.0% |   -192 B |  0.0% |     768 B → 576 B |         16 → 12 | `computeClusterAverages()`   | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
| removed |   -168 B |  0.0% |       168 B → 0 B |           3 → 0 | `div(double[], int)`         | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
|  -26.9% |   -168 B |  0.0% |     624 B → 456 B |         26 → 19 | `range(int, int)`            | java.util.stream.IntStream                               |
|  -25.0% |   -144 B |  0.0% |     576 B → 432 B |         24 → 18 | `opWrapSink(int, Sink)`      | java.util.stream.IntPipeline$1                           |
| removed |    -96 B |  0.0% |        96 B → 0 B |           2 → 0 | `average(List)`              | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
|  -27.3% |    -72 B |  0.0% |     264 B → 192 B |          10 → 7 | `allocateInstance(Class)`    | jdk.internal.misc.Unsafe                                 |
|  -50.0% |    -56 B |  0.0% |      112 B → 56 B |           2 → 1 | `addConstantUtf8(String)`    | jdk.internal.org.objectweb.asm.SymbolTable               |
| removed |    -48 B |  0.0% |        48 B → 0 B |           1 → 0 | `clone()`                    | java.lang.Object                                         |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

| Change |    Delta |             % |              Size |         Samples | Function                                          | Location                                                             |
| -----: | -------: | ------------: | ----------------: | --------------: | ------------------------------------------------- | -------------------------------------------------------------------- |
|    new | +3.29 GB |  0.0% → 99.4% |     0 B → 3.29 GB |      0 → 57,035 | `accept(Object, Object)`                          | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88 |
|    new | +3.29 GB |  0.0% → 99.4% |     0 B → 3.29 GB |      0 → 57,033 | `apply(Object, Object)`                           | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0 |
|    new | +2.06 GB |  0.0% → 62.4% |     0 B → 2.06 GB |      0 → 15,062 | `call()`                                          | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68 |
|  +1.0% | +12.3 MB | 37.3% → 38.1% | 1.25 GB → 1.26 GB | 29,894 → 29,867 | `toArray()`                                       | java.util.ArrayList                                                  |
|    new | +6.22 MB |   0.0% → 0.2% |     0 B → 6.22 MB |         0 → 393 | `invokeStatic(Object, Object)`                    | java.lang.invoke.LambdaForm$DMH.0x0000000801004800                   |
|    new | +6.22 MB |   0.0% → 0.2% |     0 B → 6.22 MB |         0 → 393 | `invoke(Object, Object, Object)`                  | java.lang.invoke.LambdaForm$MH.0x0000000801009800                    |
|    new | +5.72 MB |   0.0% → 0.2% |     0 B → 5.72 MB |         0 → 353 | `applyVoid(Object)`                               | org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000080111efe0 |
|    new | +5.39 MB |   0.0% → 0.2% |     0 B → 5.39 MB |           0 → 5 | `accept(Object, Object)`                          | java.util.stream.Collectors$$Lambda.0x0000000801070ab8               |
| +10.2% |  +969 kB |          0.3% | 9.48 MB → 10.4 MB | 12,439 → 12,749 | `grow()`                                          | java.util.ArrayList                                                  |
| +10.2% |  +969 kB |          0.3% | 9.48 MB → 10.4 MB | 12,439 → 12,749 | `add(Object, Object[], int)`                      | java.util.ArrayList                                                  |
| +10.2% |  +969 kB |          0.3% | 9.48 MB → 10.4 MB | 12,439 → 12,749 | `add(Object)`                                     | java.util.ArrayList                                                  |
| +18.2% |  +830 kB |   0.1% → 0.2% | 4.56 MB → 5.39 MB |           4 → 5 | `accept(Object)`                                  | java.util.stream.ReduceOps$3ReducingSink                             |
| +18.1% |  +828 kB |   0.1% → 0.2% |  4.57 MB → 5.4 MB |       382 → 325 | `accept(int)`                                     | java.util.stream.IntPipeline$1$1                                     |
| +18.1% |  +828 kB |   0.1% → 0.2% |  4.57 MB → 5.4 MB |       382 → 325 | `forEachRemaining(IntConsumer)`                   | java.util.stream.Streams$RangeIntSpliterator                         |
| +18.1% |  +828 kB |   0.1% → 0.2% |  4.57 MB → 5.4 MB |       382 → 325 | `forEachRemaining(Consumer)`                      | java.util.Spliterator$OfInt                                          |
| +18.1% |  +828 kB |   0.1% → 0.2% |  4.57 MB → 5.4 MB |       382 → 325 | `generateData(int, int, int)`                     | org.renaissance.jdk.concurrent.JavaKMeans                            |
| +18.1% |  +828 kB |   0.1% → 0.2% |  4.58 MB → 5.4 MB |       383 → 325 | `setUpBeforeAll(BenchmarkContext)`                | org.renaissance.jdk.concurrent.FjKmeans                              |
| +18.1% |  +828 kB |   0.1% → 0.2% |  4.58 MB → 5.4 MB |       394 → 336 | `wrapAndCopyInto(Sink, Spliterator)`              | java.util.stream.AbstractPipeline                                    |
| +18.1% |  +828 kB |   0.1% → 0.2% |  4.58 MB → 5.4 MB |       383 → 325 | `evaluateSequential(PipelineHelper, Spliterator)` | java.util.stream.ReduceOps$ReduceOp                                  |
| +18.1% |  +828 kB |   0.1% → 0.2% |  4.58 MB → 5.4 MB |       383 → 325 | `evaluate(TerminalOp)`                            | java.util.stream.AbstractPipeline                                    |

#### Progressions

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |    Delta |             % |              Size |         Samples | Function                                             | Location                                                             |
| ------: | -------: | ------------: | ----------------: | --------------: | ---------------------------------------------------- | -------------------------------------------------------------------- |
| removed | -3.33 GB |  99.5% → 0.0% |     3.33 GB → 0 B |      57,507 → 0 | `accept(Object, Object)`                             | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0 |
| removed | -3.33 GB |  99.5% → 0.0% |     3.33 GB → 0 B |      57,505 → 0 | `apply(Object, Object)`                              | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460 |
| removed |  -2.1 GB |  62.7% → 0.0% |      2.1 GB → 0 B |      15,275 → 0 | `call()`                                             | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68 |
|   -2.4% | -49.5 MB | 62.5% → 61.7% | 2.09 GB → 2.04 GB | 39,833 → 39,663 | `grow(int)`                                          | java.util.ArrayList                                                  |
|   -1.1% | -38.2 MB | 99.5% → 99.4% | 3.33 GB → 3.29 GB | 57,507 → 57,035 | `merge(Object, Object, BiFunction)`                  | java.util.HashMap                                                    |
|   -1.1% | -38.2 MB | 99.5% → 99.4% | 3.33 GB → 3.29 GB | 57,507 → 57,035 | `lambda$merge$7(Map, Object, List)`                  | org.renaissance.jdk.concurrent.JavaKMeans                            |
|   -1.1% | -38.2 MB | 99.5% → 99.4% | 3.33 GB → 3.29 GB | 57,507 → 57,035 | `forEach(BiConsumer)`                                | java.util.HashMap                                                    |
|   -1.1% | -38.2 MB | 99.5% → 99.4% | 3.33 GB → 3.29 GB | 57,505 → 57,033 | `lambda$merge$6(List, List)`                         | org.renaissance.jdk.concurrent.JavaKMeans                            |
|   -1.1% | -38.2 MB | 99.5% → 99.4% | 3.33 GB → 3.29 GB | 57,983 → 57,537 | `merge(Map, Map)`                                    | org.renaissance.jdk.concurrent.JavaKMeans                            |
|   -1.1% | -38.2 MB | 99.5% → 99.4% | 3.33 GB → 3.29 GB | 57,973 → 57,531 | `combineResults(Map, Map)`                           | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|   -1.1% | -38.2 MB | 99.5% → 99.4% | 3.33 GB → 3.29 GB | 57,973 → 57,531 | `combineResults(Object, Object)`                     | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|   -1.1% | -37.8 MB |         99.8% | 3.34 GB → 3.31 GB | 75,706 → 75,720 | `compute()`                                          | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask                 |
|   -1.1% | -37.8 MB |         99.8% | 3.34 GB → 3.31 GB | 75,706 → 75,720 | `exec()`                                             | java.util.concurrent.RecursiveTask                                   |
|   -1.1% | -37.8 MB |         99.8% | 3.34 GB → 3.31 GB | 75,708 → 75,723 | `doExec()`                                           | java.util.concurrent.ForkJoinTask                                    |
|   -1.1% | -37.8 MB |         99.8% | 3.34 GB → 3.31 GB | 75,708 → 75,723 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool$WorkQueue                          |
|   -1.1% | -37.8 MB |         99.8% | 3.34 GB → 3.31 GB | 75,708 → 75,723 | `scan(ForkJoinPool$WorkQueue, int, int)`             | java.util.concurrent.ForkJoinPool                                    |
|   -1.1% | -37.8 MB |         99.8% | 3.34 GB → 3.31 GB | 75,708 → 75,723 | `runWorker(ForkJoinPool$WorkQueue)`                  | java.util.concurrent.ForkJoinPool                                    |
|   -1.1% | -37.8 MB |         99.8% | 3.34 GB → 3.31 GB | 75,708 → 75,723 | `run()`                                              | java.util.concurrent.ForkJoinWorkerThread                            |
|   -1.1% | -37.2 MB |         99.8% |  3.34 GB → 3.3 GB | 69,295 → 69,063 | `copyOf(Object[], int)`                              | java.util.Arrays                                                     |
|   -1.4% | -36.9 MB | 81.0% → 80.8% | 2.71 GB → 2.67 GB | 42,853 → 42,397 | `addAll(Collection)`                                 | java.util.ArrayList                                                  |

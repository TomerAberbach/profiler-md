# Sampling profile diff

1,677 samples → 1,725 samples (+48 samples, +2.9%).

| Category | Change | Delta |      % |       Samples |
| -------- | -----: | ----: | -----: | ------------: |
| ours     |  +2.9% |   +48 | 100.0% | 1,677 → 1,725 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                                        | Location                                                                            |
| ------: | ----: | ------------: | --------: | ----------------------------------------------- | ----------------------------------------------------------------------------------- |
|  +17.8% |   +68 | 22.8% → 26.1% | 383 → 451 | `distance(Double[], Double[])`                  | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |
|  +51.9% |   +27 |   3.1% → 4.6% |   52 → 79 | `vectorSum()`                                   | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask                             |
|     new |   +24 |   0.0% → 1.4% |    0 → 24 | `apply(Object)`                                 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001204b38 |
|  +19.6% |   +21 |   6.4% → 7.4% | 107 → 128 | `collectClusters(int[])`                        | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |
| +300.0% |    +6 |   0.1% → 0.5% |     2 → 8 | `tryRemoveAndExec(ForkJoinTask, boolean)`       | java.util.concurrent.ForkJoinPool$WorkQueue                                         |
|  +66.7% |    +4 |   0.4% → 0.6% |    6 → 10 | `grow(int)`                                     | java.util.ArrayList                                                                 |
| +300.0% |    +3 |   0.1% → 0.2% |     1 → 4 | `accept(Object)`                                | java.util.stream.ReduceOps$3ReducingSink                                            |
|     new |    +3 |   0.0% → 0.2% |     0 → 3 | `checkIndex(int, int)`                          | java.util.Objects                                                                   |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `putVal(int, Object, Object, boolean, boolean)` | java.util.HashMap                                                                   |
|   +0.5% |    +1 | 12.6% → 12.3% | 211 → 212 | `findNearestCentroid()`                         | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `compute()`                                     | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask                                |
| +100.0% |    +1 |          0.1% |     1 → 2 | `join()`                                        | java.util.concurrent.ForkJoinTask                                                   |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `runWorker(ForkJoinPool$WorkQueue)`             | java.util.concurrent.ForkJoinPool                                                   |
|   +3.0% |    +1 |          2.0% |   33 → 34 | `copyOf(Object[], int)`                         | java.util.Arrays                                                                    |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `signalWaiters()`                               | java.util.concurrent.ForkJoinTask                                                   |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `signalWork()`                                  | java.util.concurrent.ForkJoinPool                                                   |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `seek0(long)`                                   | java.io.RandomAccessFile                                                            |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `<init>()`                                      | scala.collection.immutable.List                                                     |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `add(double[], double[])`                       | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask                             |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `end()`                                         | java.util.stream.Sink$ChainedDouble                                                 |

#### Progressions

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                                                  | Location                                                                            |
| ------: | ----: | ------------: | --------: | --------------------------------------------------------- | ----------------------------------------------------------------------------------- |
|  -13.6% |  -101 | 44.3% → 37.2% | 743 → 642 | `accumulate(Double[], double[])`                          | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask                             |
|  -80.0% |   -12 |   0.9% → 0.2% |    15 → 3 | `merge(Object, Object, BiFunction)`                       | java.util.HashMap                                                                   |
|  -62.5% |   -10 |   1.0% → 0.3% |    16 → 6 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | java.util.concurrent.ForkJoinPool                                                   |
|   -6.1% |    -4 |   3.9% → 3.6% |   66 → 62 | `computeIfAbsent(Object, Function)`                       | java.util.HashMap                                                                   |
| removed |    -3 |   0.2% → 0.0% |     3 → 0 | `resize()`                                                | java.util.HashMap                                                                   |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `exec()`                                                  | java.util.concurrent.RecursiveTask                                                  |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `doExec()`                                                | java.util.concurrent.ForkJoinTask                                                   |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `awaitDone(int, long)`                                    | java.util.concurrent.ForkJoinTask                                                   |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `valueOf(double)`                                         | java.lang.Double                                                                    |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `hashCode()`                                              | java.lang.Object                                                                    |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `<init>(HashMap)`                                         | java.util.HashMap$HashIterator                                                      |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `putMapEntries(Map, boolean)`                             | java.util.HashMap                                                                   |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `merge(Map, Map)`                                         | org.renaissance.jdk.concurrent.JavaKMeans                                           |
|  -50.0% |    -1 |          0.1% |     2 → 1 | `lambda$merge$7(Map, Object, List)`                       | org.renaissance.jdk.concurrent.JavaKMeans                                           |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `lambda$run$0(int, List, int)`                            | org.renaissance.jdk.concurrent.JavaKMeans                                           |
|  -50.0% |    -1 |          0.1% |     2 → 1 | `unpark(Object)`                                          | jdk.internal.misc.Unsafe                                                            |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `awaitWork(ForkJoinPool$WorkQueue)`                       | java.util.concurrent.ForkJoinPool                                                   |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `apply(Object)`                                           | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007801204b38 |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `nextNode()`                                              | java.util.HashMap$HashIterator                                                      |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % |       Samples | Function                                                  | Location                                                                            |
| ------: | ----: | ------------: | ------------: | --------------------------------------------------------- | ----------------------------------------------------------------------------------- |
|  +15.9% |  +130 | 48.8% → 55.0% |     818 → 948 | `computeDirectly()`                                       | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |
|  +11.8% |   +70 | 35.4% → 38.5% |     594 → 664 | `findNearestCentroid()`                                   | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |
|  +17.8% |   +68 | 22.8% → 26.1% |     383 → 451 | `distance(Double[], Double[])`                            | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |
|   +3.3% |   +53 | 96.9% → 97.3% | 1,625 → 1,678 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | java.util.concurrent.ForkJoinPool$WorkQueue                                         |
|   +2.6% |   +44 | 99.4% → 99.2% | 1,667 → 1,711 | `compute()`                                               | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask                                |
|   +2.6% |   +44 | 99.4% → 99.2% | 1,667 → 1,711 | `exec()`                                                  | java.util.concurrent.RecursiveTask                                                  |
|   +2.6% |   +43 | 99.5% → 99.2% | 1,669 → 1,712 | `doExec()`                                                | java.util.concurrent.ForkJoinTask                                                   |
|   +2.6% |   +43 | 98.1% → 97.9% | 1,645 → 1,688 | `awaitDone(int, long)`                                    | java.util.concurrent.ForkJoinTask                                                   |
|   +2.6% |   +43 | 98.1% → 97.9% | 1,645 → 1,688 | `join()`                                                  | java.util.concurrent.ForkJoinTask                                                   |
|  +10.2% |   +41 | 24.0% → 25.7% |     402 → 443 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | java.util.concurrent.ForkJoinPool                                                   |
|  +17.4% |   +37 | 12.7% → 14.5% |     213 → 250 | `collectClusters(int[])`                                  | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |
|     new |   +25 |   0.0% → 1.4% |        0 → 25 | `apply(Object)`                                           | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001204b38 |
|  +24.3% |   +17 |   4.2% → 5.0% |       70 → 87 | `computeIfAbsent(Object, Function)`                       | java.util.HashMap                                                                   |
|     new |   +16 |   0.0% → 0.9% |        0 → 16 | `call()`                                                  | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0                |
|     new |   +13 |   0.0% → 0.8% |        0 → 13 | `accept(Object, Object)`                                  | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88                |
|     new |    +9 |   0.0% → 0.5% |         0 → 9 | `invokeStatic(Object, Object)`                            | java.lang.invoke.LambdaForm$DMH.0x0000007001001c00                                  |
|     new |    +9 |   0.0% → 0.5% |         0 → 9 | `invoke(Object, Object, Object)`                          | java.lang.invoke.LambdaForm$MH.0x0000007001082400                                   |
|     new |    +9 |   0.0% → 0.5% |         0 → 9 | `apply(Object, Object)`                                   | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0                |
| +800.0% |    +8 |   0.1% → 0.5% |         1 → 9 | `lambda$merge$6(List, List)`                              | org.renaissance.jdk.concurrent.JavaKMeans                                           |
|     new |    +8 |   0.0% → 0.5% |         0 → 8 | `toArray()`                                               | java.util.ArrayList                                                                 |

#### Progressions

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % |       Samples | Function                                 | Location                                                             |
| ------: | ----: | ------------: | ------------: | ---------------------------------------- | -------------------------------------------------------------------- |
|  -13.6% |  -101 | 44.3% → 37.2% |     743 → 642 | `accumulate(Double[], double[])`         | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask              |
|   -9.1% |   -72 | 47.4% → 41.9% |     795 → 723 | `vectorSum()`                            | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask              |
|   -9.1% |   -72 | 47.4% → 41.9% |     795 → 723 | `computeDirectly()`                      | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask              |
|  -14.3% |   -39 | 16.2% → 13.5% |     272 → 233 | `computeDirectly()`                      | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                 |
|  -13.0% |   -36 | 16.5% → 13.9% |     276 → 240 | `average(List)`                          | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                 |
|  -13.0% |   -36 | 16.5% → 14.0% |     277 → 241 | `computeClusterAverages()`               | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                 |
|  -11.5% |   -33 | 17.1% → 14.7% |     286 → 253 | `invoke()`                               | java.util.concurrent.ForkJoinTask                                    |
|   -1.3% |   -18 | 80.7% → 77.4% | 1,354 → 1,336 | `run()`                                  | java.util.concurrent.ForkJoinWorkerThread                            |
| removed |   -17 |   1.0% → 0.0% |        17 → 0 | `accept(Object, Object)`                 | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007801204d88 |
|   -1.1% |   -15 | 83.2% → 80.1% | 1,396 → 1,381 | `runWorker(ForkJoinPool$WorkQueue)`      | java.util.concurrent.ForkJoinPool                                    |
| removed |   -13 |   0.8% → 0.0% |        13 → 0 | `call()`                                 | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011ffbc0 |
|   -0.6% |    -9 | 83.4% → 80.5% | 1,398 → 1,389 | `scan(ForkJoinPool$WorkQueue, int, int)` | java.util.concurrent.ForkJoinPool                                    |
|  -30.4% |    -7 |   1.4% → 0.9% |       23 → 16 | `merge(Map, Map)`                        | org.renaissance.jdk.concurrent.JavaKMeans                            |
|  -30.4% |    -7 |   1.4% → 0.9% |       23 → 16 | `combineResults(Map, Map)`               | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|  -30.4% |    -7 |   1.4% → 0.9% |       23 → 16 | `combineResults(Object, Object)`         | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
| removed |    -5 |   0.3% → 0.0% |         5 → 0 | `applyVoid(Object)`                      | org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007801198798 |
| removed |    -5 |   0.3% → 0.0% |         5 → 0 | `invokeStatic(Object, Object)`           | java.lang.invoke.LambdaForm$DMH.0x0000007801001c00                   |
| removed |    -5 |   0.3% → 0.0% |         5 → 0 | `invoke(Object, Object, Object)`         | java.lang.invoke.LambdaForm$MH.0x0000007801082400                    |
|  -10.0% |    -4 |   2.4% → 2.1% |       40 → 36 | `grow(int)`                              | java.util.ArrayList                                                  |
|  -10.3% |    -4 |   2.3% → 2.0% |       39 → 35 | `grow()`                                 | java.util.ArrayList                                                  |


# Allocated heap profile diff

Allocated 40.3 GB (-54.7 MB, -0.1%) over 1,984 samples → 2,040 samples (20.3 MB → 19.7 MB per sample).

| Category | Change |    Delta |      % |             Size |       Samples |
| -------- | -----: | -------: | -----: | ---------------: | ------------: |
| ours     |  -0.1% | -54.7 MB | 100.0% |          40.3 GB | 1,982 → 2,039 |
| stdlib   | -12.2% |   -280 B |   0.0% | 2.3 kB → 2.02 kB |         2 → 1 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|  Change |    Delta |           % |              Size | Samples | Function                                                          | Location                                                 |
| ------: | -------: | ----------: | ----------------: | ------: | ----------------------------------------------------------------- | -------------------------------------------------------- |
| +415.4% |  +380 MB | 0.2% → 1.2% |  91.5 MB → 472 MB |  8 → 14 | `newNode(int, Object, Object, HashMap$Node)`                      | java.util.HashMap                                        |
| +332.3% |  +139 MB | 0.1% → 0.4% |  41.7 MB → 180 MB | 10 → 11 | `grow(int)`                                                       | java.util.ArrayList                                      |
|  +11.3% |  +121 MB | 2.7% → 3.0% | 1.07 GB → 1.19 GB | 65 → 62 | `findNearestCentroid()`                                           | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| +184.9% |  +115 MB | 0.2% → 0.4% |  62.3 MB → 178 MB |  4 → 10 | `createSubtask(int, int)`                                         | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|     new |  +106 MB | 0.0% → 0.3% |      0 B → 106 MB |   0 → 1 | `computeClusterAverages()`                                        | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
| +198.5% | +48.4 MB | 0.1% → 0.2% | 24.4 MB → 72.8 MB |   6 → 4 | `merge(Map, Map)`                                                 | org.renaissance.jdk.concurrent.JavaKMeans                |
|  +15.8% | +10.6 MB |        0.2% | 67.1 MB → 77.7 MB |   5 → 2 | `lambda$collectClusters$0(Double[])`                              | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  +11.7% | +10.5 MB |        0.2% | 89.2 MB → 99.7 MB |   4 → 7 | `lambda$merge$6(List, List)`                                      | org.renaissance.jdk.concurrent.JavaKMeans                |
|  +55.6% | +2.48 MB |        0.0% | 4.47 MB → 6.95 MB | 10 → 14 | `<init>(InputStream, Inflater, int)`                              | java.util.zip.InflaterInputStream                        |
|  +11.7% | +1.87 MB |        0.0% | 15.9 MB → 17.8 MB | 22 → 26 | `copyOf(Object[], int, Class)`                                    | java.util.Arrays                                         |
|  +14.5% | +1.47 MB |        0.0% | 10.1 MB → 11.6 MB | 26 → 29 | `valueOf(double)`                                                 | java.lang.Double                                         |
|     new |  +770 kB |        0.0% |      0 B → 770 kB |   0 → 1 | `lambda$boxed$0(int)`                                             | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
| +124.1% |  +500 kB |        0.0% |   403 kB → 902 kB |   1 → 2 | `addConstantUtf8(String)`                                         | jdk.internal.org.objectweb.asm.SymbolTable               |
|     new |  +478 kB |        0.0% |      0 B → 478 kB |   0 → 1 | `getInputStream(ZipEntry)`                                        | java.util.zip.ZipFile                                    |
| +102.4% |  +406 kB |        0.0% |   397 kB → 803 kB |   1 → 2 | `compress(char[], int, int)`                                      | java.lang.StringUTF16                                    |
| +102.0% |  +405 kB |        0.0% |   397 kB → 802 kB |   1 → 2 | `<init>(int)`                                                     | java.io.ByteArrayOutputStream                            |
|     new |  +404 kB |        0.0% |      0 B → 404 kB |   0 → 1 | `<init>(SymbolTable, int, String, String, String, String[], int)` | jdk.internal.org.objectweb.asm.MethodWriter              |
|     new |  +399 kB |        0.0% |      0 B → 399 kB |   0 → 1 | `replace(byte[], char, char)`                                     | java.lang.StringLatin1                                   |
|   +8.7% |  +397 kB |        0.0% | 4.58 MB → 4.98 MB | 12 → 13 | `intStream(Spliterator$OfInt, boolean)`                           | java.util.stream.StreamSupport                           |
|     new |  +397 kB |        0.0% |      0 B → 397 kB |   0 → 1 | `addConstantNameAndType(String, String)`                          | jdk.internal.org.objectweb.asm.SymbolTable               |

#### Progressions

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |    Delta |             % |              Size |       Samples | Function                                                  | Location                                                 |
| ------: | -------: | ------------: | ----------------: | ------------: | --------------------------------------------------------- | -------------------------------------------------------- |
|  -85.7% |  -351 MB |   1.0% → 0.1% |  409 MB → 58.4 MB |         8 → 4 | `collectClusters(int[])`                                  | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|   -0.8% |  -320 MB | 93.5% → 92.8% | 37.7 GB → 37.4 GB | 1,708 → 1,756 | `copyOf(Object[], int)`                                   | java.util.Arrays                                         |
|  -99.0% |  -102 MB |   0.3% → 0.0% |  103 MB → 1.07 MB |             2 | `vectorSum()`                                             | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  -35.2% | -96.4 MB |   0.7% → 0.4% |   274 MB → 178 MB |        8 → 12 | `createSubtask(int, int)`                                 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| removed | -90.3 MB |   0.2% → 0.0% |     90.3 MB → 0 B |         5 → 0 | `add(double[], double[])`                                 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  -88.9% |   -30 MB |   0.1% → 0.0% | 33.7 MB → 3.73 MB |         4 → 3 | `resize()`                                                | java.util.HashMap                                        |
| removed |  -818 kB |          0.0% |      818 kB → 0 B |         3 → 0 | `range(int, int)`                                         | java.util.stream.IntStream                               |
| removed |  -795 kB |          0.0% |      795 kB → 0 B |         1 → 0 | `newNode(int, Object, Object, HashMap$Node)`              | java.util.LinkedHashMap                                  |
| removed |  -724 kB |          0.0% |      724 kB → 0 B |         2 → 0 | `opWrapSink(int, Sink)`                                   | java.util.stream.IntPipeline$1                           |
|   -9.9% |  -567 kB |          0.0% | 5.73 MB → 5.16 MB |       14 → 13 | `mapToObj(IntFunction, int)`                              | java.util.stream.IntPipeline                             |
|   -0.3% |  -528 kB |          0.4% |            179 MB |       21 → 20 | `copyOf(byte[], int)`                                     | java.util.Arrays                                         |
| removed |  -502 kB |          0.0% |      502 kB → 0 B |         1 → 0 | `addConstantMemberReference(int, String, String, String)` | jdk.internal.org.objectweb.asm.SymbolTable               |
|  -58.8% |  -467 kB |          0.0% |   794 kB → 327 kB |         2 → 1 | `allocateInstance(Class)`                                 | jdk.internal.misc.Unsafe                                 |
| removed |  -407 kB |          0.0% |      407 kB → 0 B |         1 → 0 | `clone()`                                                 | java.lang.Object                                         |
| removed |  -405 kB |          0.0% |      405 kB → 0 B |         1 → 0 | `parseName(byte[], int)`                                  | java.util.jar.Manifest                                   |
| removed |  -404 kB |          0.0% |      404 kB → 0 B |         1 → 0 | `<clinit>()`                                              | scala.collection.mutable.MutationTracker$                |
| removed |  -403 kB |          0.0% |      403 kB → 0 B |         1 → 0 | `loadClass(String, boolean)`                              | jdk.internal.loader.BuiltinClassLoader                   |
| removed |  -400 kB |          0.0% |      400 kB → 0 B |         1 → 0 | `descriptorString()`                                      | java.lang.Class                                          |
| removed |  -399 kB |          0.0% |      399 kB → 0 B |         1 → 0 | `fillInStackTrace(int)`                                   | java.lang.Throwable                                      |
| removed |  -397 kB |          0.0% |      397 kB → 0 B |         1 → 0 | `enlarge(int)`                                            | jdk.internal.org.objectweb.asm.ByteVector                |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|  Change |    Delta |             % |              Size |       Samples | Function                                                  | Location                                                             |
| ------: | -------: | ------------: | ----------------: | ------------: | --------------------------------------------------------- | -------------------------------------------------------------------- |
|     new | +32.6 GB |  0.0% → 80.9% |     0 B → 32.6 GB |     0 → 1,542 | `apply(Object, Object)`                                   | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0 |
|     new | +32.6 GB |  0.0% → 80.9% |     0 B → 32.6 GB |     0 → 1,542 | `accept(Object, Object)`                                  | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88 |
|     new | +7.37 GB |  0.0% → 18.3% |     0 B → 7.37 GB |       0 → 222 | `call()`                                                  | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0 |
|   +6.5% | +1.17 GB | 44.7% → 47.7% |   18 GB → 19.2 GB |     904 → 944 | `grow(int)`                                               | java.util.ArrayList                                                  |
|   +3.3% |  +889 MB | 66.1% → 68.4% | 26.7 GB → 27.6 GB | 1,259 → 1,309 | `awaitDone(int, long)`                                    | java.util.concurrent.ForkJoinTask                                    |
|   +3.3% |  +889 MB | 66.1% → 68.4% | 26.7 GB → 27.6 GB | 1,259 → 1,309 | `join()`                                                  | java.util.concurrent.ForkJoinTask                                    |
|  +22.2% |  +857 MB |  9.6% → 11.7% | 3.87 GB → 4.73 GB |     216 → 225 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | java.util.concurrent.ForkJoinPool                                    |
|   +2.2% |  +593 MB | 65.4% → 67.0% |   26.4 GB → 27 GB | 1,244 → 1,292 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | java.util.concurrent.ForkJoinPool$WorkQueue                          |
|   +7.5% |  +475 MB | 15.8% → 17.0% | 6.37 GB → 6.84 GB |     308 → 337 | `computeDirectly()`                                       | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
| +415.4% |  +380 MB |   0.2% → 1.2% |  91.5 MB → 472 MB |        8 → 14 | `newNode(int, Object, Object, HashMap$Node)`              | java.util.HashMap                                                    |
|   +7.9% |  +376 MB | 11.8% → 12.7% | 4.75 GB → 5.13 GB |     226 → 258 | `grow()`                                                  | java.util.ArrayList                                                  |
|   +7.9% |  +376 MB | 11.8% → 12.7% | 4.75 GB → 5.13 GB |     226 → 258 | `add(Object, Object[], int)`                              | java.util.ArrayList                                                  |
|   +7.9% |  +376 MB | 11.8% → 12.7% | 4.75 GB → 5.13 GB |     226 → 258 | `add(Object)`                                             | java.util.ArrayList                                                  |
|   +6.7% |  +354 MB | 13.1% → 14.0% | 5.29 GB → 5.65 GB |     243 → 275 | `collectClusters(int[])`                                  | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
| +253.2% |  +329 MB |   0.3% → 1.1% |   130 MB → 458 MB |        9 → 13 | `computeIfAbsent(Object, Function)`                       | java.util.HashMap                                                    |
|   +1.1% |  +277 MB | 60.0% → 60.7% | 24.2 GB → 24.5 GB | 1,129 → 1,156 | `addAll(Collection)`                                      | java.util.ArrayList                                                  |
|     new |  +218 MB |   0.0% → 0.5% |      0 B → 218 MB |       0 → 117 | `invokeStatic(Object, Object)`                            | java.lang.invoke.LambdaForm$DMH.0x0000007001001c00                   |
|     new |  +218 MB |   0.0% → 0.5% |      0 B → 218 MB |       0 → 117 | `invoke(Object, Object, Object)`                          | java.lang.invoke.LambdaForm$MH.0x0000007001082400                    |
|     new |  +200 MB |   0.0% → 0.5% |      0 B → 200 MB |        0 → 74 | `applyVoid(Object)`                                       | org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001198798 |
|  +11.3% |  +121 MB |   2.7% → 3.0% | 1.07 GB → 1.19 GB |       65 → 62 | `findNearestCentroid()`                                   | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |

#### Progressions

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |    Delta |             % |              Size |       Samples | Function                                             | Location                                                             |
| ------: | -------: | ------------: | ----------------: | ------------: | ---------------------------------------------------- | -------------------------------------------------------------------- |
| removed | -33.1 GB |  82.1% → 0.0% |     33.1 GB → 0 B |     1,518 → 0 | `apply(Object, Object)`                              | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007801204fd0 |
| removed | -33.1 GB |  82.1% → 0.0% |     33.1 GB → 0 B |     1,518 → 0 | `accept(Object, Object)`                             | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007801204d88 |
| removed | -8.23 GB |  20.4% → 0.0% |     8.23 GB → 0 B |       195 → 0 | `call()`                                             | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011ffbc0 |
|   -6.9% | -1.35 GB | 49.0% → 45.7% | 19.8 GB → 18.4 GB |     836 → 849 | `toArray()`                                          | java.util.ArrayList                                                  |
|  -13.1% | -1.15 GB | 21.8% → 19.0% |  8.8 GB → 7.65 GB |     215 → 230 | `invoke()`                                           | java.util.concurrent.ForkJoinTask                                    |
|  -10.4% |  -855 MB | 20.4% → 18.3% | 8.23 GB → 7.37 GB |     195 → 222 | `lambda$run$0(int, List, int)`                       | org.renaissance.jdk.concurrent.JavaKMeans                            |
|  -10.4% |  -855 MB | 20.4% → 18.3% | 8.23 GB → 7.37 GB |     195 → 222 | `exec()`                                             | java.util.concurrent.ForkJoinTask$AdaptedCallable                    |
|   -9.4% |  -833 MB | 21.9% → 19.9% |    8.83 GB → 8 GB |     385 → 379 | `<init>(Collection)`                                 | java.util.ArrayList                                                  |
|   -1.6% |  -545 MB | 82.1% → 80.9% | 33.1 GB → 32.6 GB | 1,518 → 1,542 | `lambda$merge$6(List, List)`                         | org.renaissance.jdk.concurrent.JavaKMeans                            |
|   -1.6% |  -545 MB | 82.1% → 80.9% | 33.1 GB → 32.6 GB | 1,518 → 1,542 | `merge(Object, Object, BiFunction)`                  | java.util.HashMap                                                    |
|   -1.6% |  -545 MB | 82.1% → 80.9% | 33.1 GB → 32.6 GB | 1,518 → 1,542 | `lambda$merge$7(Map, Object, List)`                  | org.renaissance.jdk.concurrent.JavaKMeans                            |
|   -1.6% |  -545 MB | 82.1% → 80.9% | 33.1 GB → 32.6 GB | 1,518 → 1,542 | `forEach(BiConsumer)`                                | java.util.HashMap                                                    |
|   -1.3% |  -496 MB | 93.6% → 92.5% | 37.7 GB → 37.3 GB | 1,745 → 1,804 | `scan(ForkJoinPool$WorkQueue, int, int)`             | java.util.concurrent.ForkJoinPool                                    |
|   -1.3% |  -482 MB | 94.2% → 93.1% |   38 GB → 37.5 GB | 1,760 → 1,819 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool$WorkQueue                          |
|   -1.4% |  -465 MB | 82.3% → 81.3% | 33.2 GB → 32.7 GB | 1,532 → 1,552 | `merge(Map, Map)`                                    | org.renaissance.jdk.concurrent.JavaKMeans                            |
|   -1.4% |  -465 MB | 82.3% → 81.3% | 33.2 GB → 32.7 GB | 1,532 → 1,552 | `combineResults(Map, Map)`                           | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|   -1.4% |  -465 MB | 82.3% → 81.3% | 33.2 GB → 32.7 GB | 1,532 → 1,552 | `combineResults(Object, Object)`                     | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|   -0.8% |  -318 MB | 93.6% → 92.9% | 37.7 GB → 37.4 GB | 1,730 → 1,782 | `copyOf(Object[], int)`                              | java.util.Arrays                                                     |
|   -0.8% |  -295 MB | 93.0% → 92.4% | 37.5 GB → 37.2 GB | 1,740 → 1,801 | `runWorker(ForkJoinPool$WorkQueue)`                  | java.util.concurrent.ForkJoinPool                                    |
|   -0.8% |  -295 MB | 93.0% → 92.4% | 37.5 GB → 37.2 GB | 1,740 → 1,801 | `run()`                                              | java.util.concurrent.ForkJoinWorkerThread                            |


# Lock contention profile diff

Blocked 7.15s → 7.14s (-8.4ms, -0.1%) over 59 samples → 54 samples (121.3ms → 132.4ms per sample).

| Category | Change |  Delta |      % |          Time | Samples |
| -------- | -----: | -----: | -----: | ------------: | ------: |
| ours     |  -0.1% | -8.4ms | 100.0% | 7.15s → 7.14s | 59 → 54 |

## Hottest functions

### Self time

#### Progressions

Functions with the largest decrease in time blocked directly in the function body, excluding callees.

| Change |  Delta |      % |          Time | Samples | Function              | Location                 |
| -----: | -----: | -----: | ------------: | ------: | --------------------- | ------------------------ |
|  -0.1% | -8.4ms | 100.0% | 7.15s → 7.14s | 59 → 54 | `park(boolean, long)` | jdk.internal.misc.Unsafe |

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

| Change |   Delta |             % |          Time | Samples | Function                                                                                                               | Location                                                             |
| -----: | ------: | ------------: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
|    new |  +6.21s |  0.0% → 86.9% |   0ms → 6.21s |  0 → 16 | `apply(Object)`                                                                                                        | org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011f6c70   |
|    new |  +6.21s |  0.0% → 86.9% |   0ms → 6.21s |  0 → 16 | `applyVoid(Object)`                                                                                                    | org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001198798 |
|    new |  +6.21s |  0.0% → 86.9% |   0ms → 6.21s |  0 → 16 | `invokeStatic(Object, Object)`                                                                                         | java.lang.invoke.LambdaForm$DMH.0x0000007001001c00                   |
|    new |  +6.21s |  0.0% → 86.9% |   0ms → 6.21s |  0 → 16 | `invoke(Object, Object, Object)`                                                                                       | java.lang.invoke.LambdaForm$MH.0x0000007001082400                    |
|  +0.8% | +49.2ms | 86.1% → 86.9% | 6.16s → 6.21s |      16 | `awaitDone(int, long)`                                                                                                 | java.util.concurrent.ForkJoinTask                                    |
|  +0.8% | +49.2ms | 86.1% → 86.9% | 6.16s → 6.21s |      16 | `get()`                                                                                                                | java.util.concurrent.ForkJoinTask                                    |
|  +0.8% | +49.2ms | 86.1% → 86.9% | 6.16s → 6.21s |      16 | `run(int, List, int)`                                                                                                  | org.renaissance.jdk.concurrent.JavaKMeans                            |
|  +0.8% | +49.2ms | 86.1% → 86.9% | 6.16s → 6.21s |      16 | `$anonfun$1(int)`                                                                                                      | org.renaissance.jdk.concurrent.FjKmeans                              |
|  +0.8% | +49.2ms | 86.1% → 86.9% | 6.16s → 6.21s |      16 | `$anonfun$adapted$1(Object)`                                                                                           | org.renaissance.jdk.concurrent.FjKmeans                              |
|  +0.8% | +49.2ms | 86.1% → 86.9% | 6.16s → 6.21s |      16 | `map(Function1)`                                                                                                       | scala.collection.immutable.Range                                     |
|  +0.8% | +49.2ms | 86.1% → 86.9% | 6.16s → 6.21s |      16 | `run(BenchmarkContext)`                                                                                                | org.renaissance.jdk.concurrent.FjKmeans                              |
|  +0.8% | +49.2ms | 86.1% → 86.9% | 6.16s → 6.21s |      16 | `executeOperation(int)`                                                                                                | org.renaissance.harness.ExecutionDriver                              |
|  +0.8% | +49.2ms | 86.1% → 86.9% | 6.16s → 6.21s |      16 | `executeBenchmark()`                                                                                                   | org.renaissance.harness.ExecutionDriver                              |
|  +0.8% | +49.2ms | 86.1% → 86.9% | 6.16s → 6.21s |      16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | org.renaissance.harness.RenaissanceSuite$                            |
|  +0.8% | +49.2ms | 86.1% → 86.9% | 6.16s → 6.21s |      16 | `apply(Object)`                                                                                                        | scala.runtime.function.JProcedure1                                   |
|  +0.8% | +49.2ms | 86.1% → 86.9% | 6.16s → 6.21s |      16 | `foreach(Function1)`                                                                                                   | scala.collection.immutable.List                                      |
|  +0.8% | +49.2ms | 86.1% → 86.9% | 6.16s → 6.21s |      16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | org.renaissance.harness.RenaissanceSuite$                            |
|  +0.8% | +49.2ms | 86.1% → 86.9% | 6.16s → 6.21s |      16 | `main(String[])`                                                                                                       | org.renaissance.harness.RenaissanceSuite$                            |
|  +0.8% | +49.2ms | 86.1% → 86.9% | 6.16s → 6.21s |      16 | `main(String[])`                                                                                                       | org.renaissance.harness.RenaissanceSuite                             |
|  +0.8% | +49.2ms | 86.1% → 86.9% | 6.16s → 6.21s |      16 | `invokeExact_MT(Object, Object, Object, Object)`                                                                       | java.lang.invoke.Invokers$Holder                                     |

#### Progressions

Functions with the largest decrease in total time blocked in the function and all its callees.

|  Change |   Delta |             % |              Time | Samples | Function                            | Location                                                             |
| ------: | ------: | ------------: | ----------------: | ------: | ----------------------------------- | -------------------------------------------------------------------- |
| removed |  -6.16s |  86.1% → 0.0% |       6.16s → 0ms |  16 → 0 | `apply(Object)`                     | org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000078011f6c70   |
| removed |  -6.16s |  86.1% → 0.0% |       6.16s → 0ms |  16 → 0 | `applyVoid(Object)`                 | org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007801198798 |
| removed |  -6.16s |  86.1% → 0.0% |       6.16s → 0ms |  16 → 0 | `invokeStatic(Object, Object)`      | java.lang.invoke.LambdaForm$DMH.0x0000007801001c00                   |
| removed |  -6.16s |  86.1% → 0.0% |       6.16s → 0ms |  16 → 0 | `invoke(Object, Object, Object)`    | java.lang.invoke.LambdaForm$MH.0x0000007801082400                    |
|   -5.8% | -57.7ms | 13.9% → 13.1% | 995.0ms → 937.3ms | 43 → 38 | `awaitWork(ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool                                    |
|   -5.8% | -57.7ms | 13.9% → 13.1% | 995.0ms → 937.3ms | 43 → 38 | `runWorker(ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool                                    |
|   -5.8% | -57.7ms | 13.9% → 13.1% | 995.0ms → 937.3ms | 43 → 38 | `run()`                             | java.util.concurrent.ForkJoinWorkerThread                            |
|   -9.5% | -29.4ms |   4.3% → 3.9% | 309.7ms → 280.3ms | 14 → 12 | `parkUntil(long)`                   | java.util.concurrent.locks.LockSupport                               |
|   -0.1% |  -8.4ms |        100.0% |     7.15s → 7.14s | 59 → 54 | `park(boolean, long)`               | jdk.internal.misc.Unsafe                                             |

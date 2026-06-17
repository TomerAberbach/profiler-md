# Sampling profile diff

1,637 samples → 1,634 samples (-3 samples, -0.2%).

| Category | Change | Delta |      % |       Samples |
| -------- | -----: | ----: | -----: | ------------: |
| ours     |  -0.2% |    -3 | 100.0% | 1,637 → 1,634 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

| Change | Delta |             % |   Samples | Function                                                      | Location                                                                            |
| -----: | ----: | ------------: | --------: | ------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
|  +3.8% |   +27 | 43.6% → 45.3% | 714 → 741 | `accumulate(Double[], double[])`                              | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask                             |
|    new |   +10 |   0.0% → 0.6% |    0 → 10 | `apply(Object)`                                               | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011dec00 |
| +31.3% |    +5 |   1.0% → 1.3% |   16 → 21 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`     | java.util.concurrent.ForkJoinPool                                                   |
|  +0.8% |    +3 | 23.3% → 23.5% | 381 → 384 | `distance(Double[], Double[])`                                | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |
| +66.7% |    +2 |   0.2% → 0.3% |     3 → 5 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | java.util.zip.Inflater                                                              |
| +66.7% |    +2 |   0.2% → 0.3% |     3 → 5 | `accept(Object)`                                              | java.util.stream.ReduceOps$3ReducingSink                                            |
| +66.7% |    +2 |   0.2% → 0.3% |     3 → 5 | `tryRemoveAndExec(ForkJoinTask, boolean)`                     | java.util.concurrent.ForkJoinPool$WorkQueue                                         |
|  +2.2% |    +2 |   5.7% → 5.8% |   93 → 95 | `collectClusters(int[])`                                      | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |
|    new |    +2 |   0.0% → 0.1% |     0 → 2 | `merge(Object, Object, BiFunction)`                           | java.util.HashMap                                                                   |
|    new |    +2 |   0.0% → 0.1% |     0 → 2 | `<init>(HashMap)`                                             | java.util.HashMap$HashIterator                                                      |
|    new |    +1 |   0.0% → 0.1% |     0 → 1 | `awaitDone(int, long)`                                        | java.util.concurrent.ForkJoinTask                                                   |
|    new |    +1 |   0.0% → 0.1% |     0 → 1 | `hashCode()`                                                  | java.lang.Object                                                                    |
|    new |    +1 |   0.0% → 0.1% |     0 → 1 | `hashCode()`                                                  | java.lang.String                                                                    |
|    new |    +1 |   0.0% → 0.1% |     0 → 1 | `allocateInstance(Class)`                                     | jdk.internal.misc.Unsafe                                                            |
|    new |    +1 |   0.0% → 0.1% |     0 → 1 | `putReferenceOpaque(Object, long, Object)`                    | jdk.internal.misc.Unsafe                                                            |
|    new |    +1 |   0.0% → 0.1% |     0 → 1 | `resize()`                                                    | java.util.HashMap                                                                   |
|    new |    +1 |   0.0% → 0.1% |     0 → 1 | `putVal(int, Object, Object, boolean, boolean)`               | java.util.HashMap                                                                   |
|    new |    +1 |   0.0% → 0.1% |     0 → 1 | `createSubtask(int, int)`                                     | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |

#### Progressions

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                                                            | Location                                                                            |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
|  -20.5% |   -16 |   4.8% → 3.8% |   78 → 62 | `vectorSum()`                                                       | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask                             |
|   -7.4% |   -14 | 11.5% → 10.6% | 188 → 174 | `findNearestCentroid()`                                             | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |
|  -27.1% |   -13 |   2.9% → 2.1% |   48 → 35 | `copyOf(Object[], int)`                                             | java.util.Arrays                                                                    |
|  -17.5% |   -11 |   3.8% → 3.2% |   63 → 52 | `computeIfAbsent(Object, Function)`                                 | java.util.HashMap                                                                   |
|  -75.0% |    -3 |   0.2% → 0.1% |     4 → 1 | `lambda$merge$7(Map, Object, List)`                                 | org.renaissance.jdk.concurrent.JavaKMeans                                           |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `push(ForkJoinTask, ForkJoinPool, boolean)`                         | java.util.concurrent.ForkJoinPool$WorkQueue                                         |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `load(NativeLibraries$NativeLibraryImpl, String, boolean, boolean)` | jdk.internal.loader.NativeLibraries                                                 |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `wrapSink(Sink)`                                                    | java.util.stream.AbstractPipeline                                                   |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `apply(Object)`                                                     | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000c0011dec00 |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `average(List)`                                                     | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                                |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `checkIndex(int, int)`                                              | java.util.Objects                                                                   |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `merge(Map, Map)`                                                   | org.renaissance.jdk.concurrent.JavaKMeans                                           |
|  -50.0% |    -1 |          0.1% |     2 → 1 | `unpark(Object)`                                                    | jdk.internal.misc.Unsafe                                                            |
|  -50.0% |    -1 |          0.1% |     2 → 1 | `nextNode()`                                                        | java.util.HashMap$HashIterator                                                      |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `unlink0(long)`                                                     | sun.nio.fs.UnixNativeDispatcher                                                     |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

| Change | Delta |             % |   Samples | Function                                                    | Location                                                                            |
| -----: | ----: | ------------: | --------: | ----------------------------------------------------------- | ----------------------------------------------------------------------------------- |
|  +3.8% |   +27 | 43.6% → 45.3% | 714 → 741 | `accumulate(Double[], double[])`                            | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask                             |
|    new |   +22 |   0.0% → 1.3% |    0 → 22 | `call()`                                                    | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011d79d8                |
|  +4.2% |   +13 | 18.7% → 19.5% | 306 → 319 | `computeDirectly()`                                         | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                                |
|    new |   +12 |   0.0% → 0.7% |    0 → 12 | `invokeStatic(Object, Object)`                              | java.lang.invoke.LambdaForm$DMH.0x0000007001001400                                  |
|    new |   +12 |   0.0% → 0.7% |    0 → 12 | `invoke(Object, Object, Object)`                            | java.lang.invoke.LambdaForm$MH.0x0000007001080800                                   |
|  +3.5% |   +11 | 19.3% → 20.0% | 316 → 327 | `average(List)`                                             | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                                |
|  +3.5% |   +11 | 19.3% → 20.0% | 316 → 327 | `computeClusterAverages()`                                  | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                                |
|  +1.3% |   +10 | 48.4% → 49.1% | 793 → 803 | `vectorSum()`                                               | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask                             |
|  +1.3% |   +10 | 48.4% → 49.1% | 793 → 803 | `computeDirectly()`                                         | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask                             |
|    new |   +10 |   0.0% → 0.6% |    0 → 10 | `apply(Object)`                                             | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011dec00 |
|    new |    +9 |   0.0% → 0.6% |     0 → 9 | `accept(Object, Object)`                                    | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dee50                |
|    new |    +8 |   0.0% → 0.5% |     0 → 8 | `applyVoid(Object)`                                         | org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000070011715d8                |
|  +1.7% |    +7 | 24.6% → 25.0% | 402 → 409 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`   | java.util.concurrent.ForkJoinPool                                                   |
|    new |    +6 |   0.0% → 0.4% |     0 → 6 | `apply(Object, Object)`                                     | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011df098                |
| +62.5% |    +5 |   0.5% → 0.8% |    8 → 13 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | org.renaissance.core.Launcher                                                       |
| +62.5% |    +5 |   0.5% → 0.8% |    8 → 13 | `launchHarnessClass(String, String[])`                      | org.renaissance.core.Launcher                                                       |
| +62.5% |    +5 |   0.5% → 0.8% |    8 → 13 | `main(String[])`                                            | org.renaissance.core.Launcher                                                       |
| +71.4% |    +5 |   0.4% → 0.7% |    7 → 12 | `main(String[])`                                            | org.renaissance.harness.RenaissanceSuite                                            |
| +71.4% |    +5 |   0.4% → 0.7% |    7 → 12 | `invokeExact_MT(Object, Object, Object, Object)`            | java.lang.invoke.Invokers$Holder                                                    |
| +71.4% |    +5 |   0.4% → 0.7% |    7 → 12 | `invokeImpl(Object, Object[])`                              | jdk.internal.reflect.DirectMethodHandleAccessor                                     |

#### Progressions

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % |       Samples | Function                                             | Location                                                             |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------- | -------------------------------------------------------------------- |
| removed |   -25 |   1.5% → 0.0% |        25 → 0 | `call()`                                             | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011d79d8 |
|   -3.0% |   -24 | 48.2% → 46.8% |     789 → 765 | `computeDirectly()`                                  | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|   -1.2% |   -16 | 79.6% → 78.8% | 1,303 → 1,287 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool$WorkQueue                          |
|   -1.3% |   -16 | 73.7% → 72.8% | 1,206 → 1,190 | `run()`                                              | java.util.concurrent.ForkJoinWorkerThread                            |
|   -1.2% |   -15 | 75.9% → 75.1% | 1,242 → 1,227 | `scan(ForkJoinPool$WorkQueue, int, int)`             | java.util.concurrent.ForkJoinPool                                    |
|   -6.5% |   -13 | 12.2% → 11.4% |     199 → 186 | `collectClusters(int[])`                             | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|  -27.1% |   -13 |   2.9% → 2.1% |       48 → 35 | `copyOf(Object[], int)`                              | java.util.Arrays                                                     |
|  -31.0% |   -13 |   2.6% → 1.8% |       42 → 29 | `grow(int)`                                          | java.util.ArrayList                                                  |
|  -31.0% |   -13 |   2.6% → 1.8% |       42 → 29 | `grow()`                                             | java.util.ArrayList                                                  |
|  -31.0% |   -13 |   2.6% → 1.8% |       42 → 29 | `add(Object, Object[], int)`                         | java.util.ArrayList                                                  |
|  -31.0% |   -13 |   2.6% → 1.8% |       42 → 29 | `add(Object)`                                        | java.util.ArrayList                                                  |
|   -1.0% |   -12 | 75.6% → 75.0% | 1,237 → 1,225 | `runWorker(ForkJoinPool$WorkQueue)`                  | java.util.concurrent.ForkJoinPool                                    |
|   -1.9% |   -11 | 34.8% → 34.1% |     569 → 558 | `findNearestCentroid()`                              | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|   -0.6% |   -10 | 96.6% → 96.1% | 1,581 → 1,571 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | java.util.concurrent.ForkJoinPool$WorkQueue                          |
| removed |   -10 |   0.6% → 0.0% |        10 → 0 | `accept(Object, Object)`                             | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011dee50 |
|   -0.5% |    -8 | 99.3% → 99.0% | 1,625 → 1,617 | `doExec()`                                           | java.util.concurrent.ForkJoinTask                                    |
| removed |    -7 |   0.4% → 0.0% |         7 → 0 | `invokeStatic(Object, Object)`                       | java.lang.invoke.LambdaForm$DMH.0x000000c001001400                   |
| removed |    -7 |   0.4% → 0.0% |         7 → 0 | `invoke(Object, Object, Object)`                     | java.lang.invoke.LambdaForm$MH.0x000000c001080800                    |
|   -0.4% |    -7 | 99.1% → 98.9% | 1,623 → 1,616 | `compute()`                                          | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask                 |
|   -0.4% |    -7 | 99.1% → 98.9% | 1,623 → 1,616 | `exec()`                                             | java.util.concurrent.RecursiveTask                                   |


# Allocated heap profile diff

Allocated 40 GB → 40.4 GB (+363 MB, +0.9%) over 1,980 samples → 2,040 samples (20.2 MB → 19.8 MB per sample).

| Category | Change |   Delta |      % |              Size |       Samples |
| -------- | -----: | ------: | -----: | ----------------: | ------------: |
| ours     |  +0.9% | +363 MB | 100.0% |   40 GB → 40.4 GB | 1,978 → 2,038 |
| stdlib   | +15.2% |  +272 B |   0.0% | 1.78 kB → 2.06 kB |             2 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|   Change |    Delta |             % |              Size |       Samples | Function                                     | Location                                                 |
| -------: | -------: | ------------: | ----------------: | ------------: | -------------------------------------------- | -------------------------------------------------------- |
|    +3.6% | +1.35 GB | 92.5% → 95.0% |   37 GB → 38.3 GB | 1,718 → 1,779 | `copyOf(Object[], int)`                      | java.util.Arrays                                         |
| +1476.3% |  +164 MB |   0.0% → 0.4% |  11.1 MB → 175 MB |       23 → 26 | `copyOf(byte[], int)`                        | java.util.Arrays                                         |
| +5303.9% | +78.9 MB |   0.0% → 0.2% | 1.49 MB → 80.3 MB |         1 → 7 | `merge(Map, Map)`                            | org.renaissance.jdk.concurrent.JavaKMeans                |
|  +382.3% | +54.7 MB |   0.0% → 0.2% |   14.3 MB → 69 MB |        11 → 8 | `collectClusters(int[])`                     | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  +246.2% | +49.6 MB |   0.1% → 0.2% | 20.1 MB → 69.7 MB |         5 → 3 | `resize()`                                   | java.util.HashMap                                        |
|   +33.9% | +32.3 MB |   0.2% → 0.3% |  95.3 MB → 128 MB |        10 → 5 | `newNode(int, Object, Object, HashMap$Node)` | java.util.HashMap                                        |
| +2330.1% |   +11 MB |          0.0% |  471 kB → 11.5 MB |         1 → 5 | `vectorSum()`                                | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|   +15.7% |  +9.4 MB |          0.2% |   60 MB → 69.4 MB |         2 → 1 | `computeClusterAverages()`                   | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
|      new | +4.34 MB |          0.0% |     0 B → 4.34 MB |         0 → 2 | `iterator()`                                 | java.util.HashMap$EntrySet                               |
|  +208.5% | +2.48 MB |          0.0% | 1.19 MB → 3.67 MB |         3 → 9 | `opWrapSink(int, Sink)`                      | java.util.stream.IntPipeline$1                           |
|      new |  +823 kB |          0.0% |      0 B → 823 kB |         0 → 1 | `entrySet()`                                 | java.util.HashMap                                        |
|      new |  +805 kB |          0.0% |      0 B → 805 kB |         0 → 2 | `getClassLoadingLock(String)`                | java.lang.ClassLoader                                    |
|   +12.6% |  +493 kB |          0.0% |  3.91 MB → 4.4 MB |             8 | `intStream(Spliterator$OfInt, boolean)`      | java.util.stream.StreamSupport                           |
|   +30.4% |  +482 kB |          0.0% | 1.59 MB → 2.07 MB |         4 → 5 | `allocateInstance(Class)`                    | jdk.internal.misc.Unsafe                                 |
|  +112.8% |  +463 kB |          0.0% |   411 kB → 874 kB |         1 → 2 | `transferTo(OutputStream)`                   | java.io.InputStream                                      |
|      new |  +445 kB |          0.0% |      0 B → 445 kB |         0 → 1 | `compress(char[], int, int)`                 | java.lang.StringUTF16                                    |
|      new |  +443 kB |          0.0% |      0 B → 443 kB |         0 → 1 | `newString(byte[], long)`                    | java.lang.StringConcatHelper                             |
|      new |  +412 kB |          0.0% |      0 B → 412 kB |         0 → 1 | `findBootstrapClass(String)`                 | java.lang.ClassLoader                                    |
|      new |  +399 kB |          0.0% |      0 B → 399 kB |         0 → 1 | `<init>(ClassReader, int)`                   | jdk.internal.org.objectweb.asm.ClassWriter               |
|   +16.4% |  +280 kB |          0.0% |  1.7 MB → 1.98 MB |             5 | `builder(long, IntFunction)`                 | java.util.stream.Nodes                                   |

#### Progressions

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |    Delta |           % |              Size | Samples | Function                                          | Location                                                 |
| ------: | -------: | ----------: | ----------------: | ------: | ------------------------------------------------- | -------------------------------------------------------- |
|  -40.8% |  -612 MB | 3.8% → 2.2% |   1.5 GB → 889 MB | 61 → 70 | `findNearestCentroid()`                           | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  -72.5% |  -233 MB | 0.8% → 0.2% |  321 MB → 88.2 MB |  11 → 4 | `createSubtask(int, int)`                         | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  -54.8% |  -181 MB | 0.8% → 0.4% |   329 MB → 149 MB |   9 → 7 | `createSubtask(int, int)`                         | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  -97.0% |  -164 MB | 0.4% → 0.0% |     169 MB → 5 MB |  12 → 9 | `<init>(InputStream, Inflater, int)`              | java.util.zip.InflaterInputStream                        |
|  -64.0% | -90.8 MB | 0.4% → 0.1% |  142 MB → 51.1 MB |   9 → 7 | `grow(int)`                                       | java.util.ArrayList                                      |
|  -36.4% |   -64 MB | 0.4% → 0.3% |   176 MB → 112 MB |   3 → 5 | `lambda$collectClusters$0(Double[])`              | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  -38.2% |   -39 MB | 0.3% → 0.2% |  102 MB → 62.9 MB |   5 → 7 | `lambda$merge$6(List, List)`                      | org.renaissance.jdk.concurrent.JavaKMeans                |
|  -46.5% | -5.01 MB |        0.0% | 10.8 MB → 5.78 MB |   9 → 4 | `copyOf(Object[], int, Class)`                    | java.util.Arrays                                         |
|  -44.8% | -2.11 MB |        0.0% |  4.71 MB → 2.6 MB |  12 → 7 | `mapToObj(IntFunction, int)`                      | java.util.stream.IntPipeline                             |
| removed | -1.08 MB |        0.0% |     1.08 MB → 0 B |   1 → 0 | `collectGarbage(String)`                          | org.renaissance.harness.ExecutionPlugins$ForceGcPlugin   |
|  -46.0% | -1.01 MB |        0.0% |  2.2 MB → 1.19 MB |   6 → 3 | `range(int, int)`                                 | java.util.stream.IntStream                               |
| removed |  -825 kB |        0.0% |      825 kB → 0 B |   3 → 0 | `initClassName()`                                 | java.lang.Class                                          |
| removed |  -800 kB |        0.0% |      800 kB → 0 B |   2 → 0 | `clone()`                                         | java.lang.Object                                         |
| removed |  -412 kB |        0.0% |      412 kB → 0 B |   1 → 0 | `toExternalForm(URL)`                             | java.net.URLStreamHandler                                |
| removed |  -406 kB |        0.0% |      406 kB → 0 B |   1 → 0 | `visitField(int, String, String, String, Object)` | jdk.internal.org.objectweb.asm.ClassWriter               |
| removed |  -396 kB |        0.0% |      396 kB → 0 B |   1 → 0 | `putVal(Object, Object, boolean)`                 | java.util.concurrent.ConcurrentHashMap                   |
| removed | -75.7 kB |        0.0% |     75.7 kB → 0 B |   1 → 0 | `getInputStream(ZipEntry)`                        | java.util.zip.ZipFile                                    |
|   -0.1% | -14.7 kB |        0.0% |           11.1 MB | 22 → 24 | `valueOf(double)`                                 | java.lang.Double                                         |
|   -0.1% |   -256 B |        0.0% |   405 kB → 404 kB |       1 | `enlarge(int)`                                    | jdk.internal.org.objectweb.asm.ByteVector                |
|   -0.0% |    -88 B |        0.0% |   410 kB → 409 kB |       1 | `initCEN(int, ZipCoder)`                          | java.util.zip.ZipFile$Source                             |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

| Change |    Delta |             % |              Size |       Samples | Function                                             | Location                                                             |
| -----: | -------: | ------------: | ----------------: | ------------: | ---------------------------------------------------- | -------------------------------------------------------------------- |
|    new | +32.7 GB |  0.0% → 80.9% |     0 B → 32.7 GB |     0 → 1,579 | `apply(Object, Object)`                              | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011df098 |
|    new | +32.7 GB |  0.0% → 80.9% |     0 B → 32.7 GB |     0 → 1,579 | `accept(Object, Object)`                             | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dee50 |
|    new | +7.26 GB |  0.0% → 18.0% |     0 B → 7.26 GB |       0 → 228 | `call()`                                             | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011d79d8 |
| +13.5% | +2.46 GB | 45.6% → 51.3% | 18.2 GB → 20.7 GB |     855 → 928 | `grow(int)`                                          | java.util.ArrayList                                                  |
| +65.6% | +2.44 GB |  9.3% → 15.3% | 3.72 GB → 6.17 GB |     225 → 237 | `collectClusters(int[])`                             | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
| +69.2% | +2.37 GB |  8.6% → 14.3% | 3.42 GB → 5.79 GB |     203 → 218 | `grow()`                                             | java.util.ArrayList                                                  |
| +69.2% | +2.37 GB |  8.6% → 14.3% | 3.42 GB → 5.79 GB |     203 → 218 | `add(Object, Object[], int)`                         | java.util.ArrayList                                                  |
| +69.2% | +2.37 GB |  8.6% → 14.3% | 3.42 GB → 5.79 GB |     203 → 218 | `add(Object)`                                        | java.util.ArrayList                                                  |
|  +8.5% |  +2.1 GB | 61.9% → 66.6% | 24.8 GB → 26.9 GB | 1,197 → 1,267 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | java.util.concurrent.ForkJoinPool$WorkQueue                          |
|  +7.5% | +1.91 GB | 63.2% → 67.3% | 25.3 GB → 27.2 GB | 1,216 → 1,284 | `awaitDone(int, long)`                               | java.util.concurrent.ForkJoinTask                                    |
|  +7.5% | +1.91 GB | 63.2% → 67.3% | 25.3 GB → 27.2 GB | 1,216 → 1,284 | `join()`                                             | java.util.concurrent.ForkJoinTask                                    |
| +35.1% | +1.83 GB | 13.1% → 17.5% | 5.22 GB → 7.06 GB |     286 → 307 | `computeDirectly()`                                  | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|  +3.6% | +1.34 GB | 92.5% → 95.0% |   37 GB → 38.4 GB | 1,727 → 1,783 | `copyOf(Object[], int)`                              | java.util.Arrays                                                     |
|  +1.9% |  +697 MB | 92.9% → 93.8% | 37.2 GB → 37.9 GB | 1,738 → 1,811 | `scan(ForkJoinPool$WorkQueue, int, int)`             | java.util.concurrent.ForkJoinPool                                    |
|  +1.2% |  +463 MB | 93.6% → 93.9% | 37.4 GB → 37.9 GB | 1,754 → 1,827 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool$WorkQueue                          |
|  +0.9% |  +364 MB |         99.4% | 39.8 GB → 40.1 GB | 1,853 → 1,915 | `compute()`                                          | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask                 |
|  +0.9% |  +364 MB |         99.4% | 39.8 GB → 40.1 GB | 1,853 → 1,915 | `exec()`                                             | java.util.concurrent.RecursiveTask                                   |
|  +0.9% |  +364 MB |         99.4% | 39.8 GB → 40.1 GB | 1,853 → 1,915 | `doExec()`                                           | java.util.concurrent.ForkJoinTask                                    |
|  +0.9% |  +343 MB |         92.8% | 37.1 GB → 37.5 GB | 1,732 → 1,801 | `runWorker(ForkJoinPool$WorkQueue)`                  | java.util.concurrent.ForkJoinPool                                    |
|  +0.9% |  +343 MB |         92.8% | 37.1 GB → 37.5 GB | 1,732 → 1,801 | `run()`                                              | java.util.concurrent.ForkJoinWorkerThread                            |

#### Progressions

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |    Delta |             % |              Size |       Samples | Function                            | Location                                                             |
| ------: | -------: | ------------: | ----------------: | ------------: | ----------------------------------- | -------------------------------------------------------------------- |
| removed | -33.8 GB |  84.5% → 0.0% |     33.8 GB → 0 B |     1,538 → 0 | `apply(Object, Object)`             | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011df098 |
| removed | -33.8 GB |  84.5% → 0.0% |     33.8 GB → 0 B |     1,538 → 0 | `accept(Object, Object)`            | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011dee50 |
| removed | -7.58 GB |  18.9% → 0.0% |     7.58 GB → 0 B |       209 → 0 | `call()`                            | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011d79d8 |
|   -6.4% | -1.21 GB | 47.3% → 43.9% | 18.9 GB → 17.7 GB |     881 → 862 | `toArray()`                         | java.util.ArrayList                                                  |
|   -3.4% | -1.16 GB | 84.5% → 80.9% | 33.8 GB → 32.7 GB | 1,538 → 1,579 | `lambda$merge$6(List, List)`        | org.renaissance.jdk.concurrent.JavaKMeans                            |
|   -3.4% | -1.16 GB | 84.5% → 80.9% | 33.8 GB → 32.7 GB | 1,538 → 1,579 | `merge(Object, Object, BiFunction)` | java.util.HashMap                                                    |
|   -3.4% | -1.16 GB | 84.5% → 80.9% | 33.8 GB → 32.7 GB | 1,538 → 1,579 | `lambda$merge$7(Map, Object, List)` | org.renaissance.jdk.concurrent.JavaKMeans                            |
|   -3.4% | -1.16 GB | 84.5% → 80.9% | 33.8 GB → 32.7 GB | 1,538 → 1,579 | `forEach(BiConsumer)`               | java.util.HashMap                                                    |
|   -3.2% | -1.08 GB | 84.6% → 81.1% | 33.8 GB → 32.8 GB | 1,544 → 1,590 | `merge(Map, Map)`                   | org.renaissance.jdk.concurrent.JavaKMeans                            |
|   -3.2% | -1.08 GB | 84.6% → 81.1% | 33.8 GB → 32.8 GB | 1,544 → 1,590 | `combineResults(Map, Map)`          | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|   -3.2% | -1.08 GB | 84.6% → 81.1% | 33.8 GB → 32.8 GB | 1,544 → 1,590 | `combineResults(Object, Object)`    | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|  -40.8% |  -612 MB |   3.8% → 2.2% |   1.5 GB → 889 MB |       61 → 70 | `findNearestCentroid()`             | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|   -2.3% |  -588 MB | 64.6% → 62.5% | 25.8 GB → 25.2 GB | 1,140 → 1,172 | `addAll(Collection)`                | java.util.ArrayList                                                  |
|   -6.8% |  -552 MB | 20.4% → 18.9% | 8.17 GB → 7.62 GB |     221 → 242 | `invoke()`                          | java.util.concurrent.ForkJoinTask                                    |
|   -6.7% |  -529 MB | 19.7% → 18.2% |  7.9 GB → 7.37 GB |     393 → 400 | `<init>(Collection)`                | java.util.ArrayList                                                  |
|   -4.2% |  -316 MB | 18.9% → 18.0% | 7.58 GB → 7.26 GB |     209 → 228 | `lambda$run$0(int, List, int)`      | org.renaissance.jdk.concurrent.JavaKMeans                            |
|   -4.2% |  -316 MB | 18.9% → 18.0% | 7.58 GB → 7.26 GB |     209 → 228 | `exec()`                            | java.util.concurrent.ForkJoinTask$AdaptedCallable                    |
|  -72.5% |  -233 MB |   0.8% → 0.2% |  321 MB → 88.2 MB |        11 → 4 | `createSubtask(int, int)`           | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask              |
| removed |  -218 MB |   0.5% → 0.0% |      218 MB → 0 B |       120 → 0 | `invokeStatic(Object, Object)`      | java.lang.invoke.LambdaForm$DMH.0x000000c001001400                   |
| removed |  -218 MB |   0.5% → 0.0% |      218 MB → 0 B |       120 → 0 | `invoke(Object, Object, Object)`    | java.lang.invoke.LambdaForm$MH.0x000000c001080800                    |


# Lock contention profile diff

Blocked 6.95s → 7.95s (+998.7ms, +14.4%) over 56 samples → 88 samples (124.2ms → 90.4ms per sample).

| Category | Change |    Delta |      % |          Time | Samples |
| -------- | -----: | -------: | -----: | ------------: | ------: |
| ours     | +14.4% | +998.7ms | 100.0% | 6.95s → 7.95s | 56 → 88 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time blocked directly in the function body, excluding callees.

| Change |    Delta |      % |          Time | Samples | Function              | Location                 |
| -----: | -------: | -----: | ------------: | ------: | --------------------- | ------------------------ |
| +14.4% | +998.7ms | 100.0% | 6.95s → 7.95s | 56 → 88 | `park(boolean, long)` | jdk.internal.misc.Unsafe |

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

| Change |    Delta |             % |            Time | Samples | Function                                                                                                               | Location                                                             |
| -----: | -------: | ------------: | --------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
|    new |   +6.25s |  0.0% → 78.7% |     0ms → 6.25s |  0 → 16 | `apply(Object)`                                                                                                        | org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011d4e58   |
|    new |   +6.25s |  0.0% → 78.7% |     0ms → 6.25s |  0 → 16 | `applyVoid(Object)`                                                                                                    | org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000070011715d8 |
|    new |   +6.25s |  0.0% → 78.7% |     0ms → 6.25s |  0 → 16 | `invokeStatic(Object, Object)`                                                                                         | java.lang.invoke.LambdaForm$DMH.0x0000007001001400                   |
|    new |   +6.25s |  0.0% → 78.7% |     0ms → 6.25s |  0 → 16 | `invoke(Object, Object, Object)`                                                                                       | java.lang.invoke.LambdaForm$MH.0x0000007001080800                    |
| +14.4% | +998.7ms |        100.0% |   6.95s → 7.95s | 56 → 88 | `park(boolean, long)`                                                                                                  | jdk.internal.misc.Unsafe                                             |
| +15.0% | +993.7ms | 95.4% → 96.0% |   6.63s → 7.63s | 42 → 74 | `park()`                                                                                                               | java.util.concurrent.locks.LockSupport                               |
| +90.8% | +807.3ms | 12.8% → 21.3% | 889.1ms → 1.69s | 40 → 72 | `runWorker(ForkJoinPool$WorkQueue)`                                                                                    | java.util.concurrent.ForkJoinPool                                    |
| +90.8% | +807.3ms | 12.8% → 21.3% | 889.1ms → 1.69s | 40 → 72 | `run()`                                                                                                                | java.util.concurrent.ForkJoinWorkerThread                            |
| +73.8% | +656.1ms | 12.8% → 19.4% | 889.1ms → 1.54s | 40 → 62 | `awaitWork(ForkJoinPool$WorkQueue)`                                                                                    | java.util.concurrent.ForkJoinPool                                    |
|  +5.6% | +342.6ms | 87.2% → 80.6% |   6.06s → 6.41s | 16 → 26 | `awaitDone(int, long)`                                                                                                 | java.util.concurrent.ForkJoinTask                                    |
|  +3.2% | +191.3ms | 87.2% → 78.7% |   6.06s → 6.25s |      16 | `get()`                                                                                                                | java.util.concurrent.ForkJoinTask                                    |
|  +3.2% | +191.3ms | 87.2% → 78.7% |   6.06s → 6.25s |      16 | `run(int, List, int)`                                                                                                  | org.renaissance.jdk.concurrent.JavaKMeans                            |
|  +3.2% | +191.3ms | 87.2% → 78.7% |   6.06s → 6.25s |      16 | `$anonfun$1(int)`                                                                                                      | org.renaissance.jdk.concurrent.FjKmeans                              |
|  +3.2% | +191.3ms | 87.2% → 78.7% |   6.06s → 6.25s |      16 | `$anonfun$adapted$1(Object)`                                                                                           | org.renaissance.jdk.concurrent.FjKmeans                              |
|  +3.2% | +191.3ms | 87.2% → 78.7% |   6.06s → 6.25s |      16 | `map(Function1)`                                                                                                       | scala.collection.immutable.Range                                     |
|  +3.2% | +191.3ms | 87.2% → 78.7% |   6.06s → 6.25s |      16 | `run(BenchmarkContext)`                                                                                                | org.renaissance.jdk.concurrent.FjKmeans                              |
|  +3.2% | +191.3ms | 87.2% → 78.7% |   6.06s → 6.25s |      16 | `executeOperation(int)`                                                                                                | org.renaissance.harness.ExecutionDriver                              |
|  +3.2% | +191.3ms | 87.2% → 78.7% |   6.06s → 6.25s |      16 | `executeBenchmark()`                                                                                                   | org.renaissance.harness.ExecutionDriver                              |
|  +3.2% | +191.3ms | 87.2% → 78.7% |   6.06s → 6.25s |      16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | org.renaissance.harness.RenaissanceSuite$                            |
|  +3.2% | +191.3ms | 87.2% → 78.7% |   6.06s → 6.25s |      16 | `apply(Object)`                                                                                                        | scala.runtime.function.JProcedure1                                   |

#### Progressions

Functions with the largest decrease in total time blocked in the function and all its callees.

|  Change |  Delta |            % |        Time | Samples | Function                         | Location                                                             |
| ------: | -----: | -----------: | ----------: | ------: | -------------------------------- | -------------------------------------------------------------------- |
| removed | -6.06s | 87.2% → 0.0% | 6.06s → 0ms |  16 → 0 | `apply(Object)`                  | org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000c0011d4e58   |
| removed | -6.06s | 87.2% → 0.0% | 6.06s → 0ms |  16 → 0 | `applyVoid(Object)`              | org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000c0011715d8 |
| removed | -6.06s | 87.2% → 0.0% | 6.06s → 0ms |  16 → 0 | `invokeStatic(Object, Object)`   | java.lang.invoke.LambdaForm$DMH.0x000000c001001400                   |
| removed | -6.06s | 87.2% → 0.0% | 6.06s → 0ms |  16 → 0 | `invoke(Object, Object, Object)` | java.lang.invoke.LambdaForm$MH.0x000000c001080800                    |

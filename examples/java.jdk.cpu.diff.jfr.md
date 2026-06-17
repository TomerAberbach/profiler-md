# Sampling profile diff

1,684 samples → 1,605 samples (-79 samples, -4.7%).

| Category | Change | Delta |      % |       Samples |
| -------- | -----: | ----: | -----: | ------------: |
| ours     |  -4.7% |   -79 | 100.0% | 1,684 → 1,605 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                                                  | Location                                                |
| ------: | ----: | ------------: | --------: | --------------------------------------------------------- | ------------------------------------------------------- |
|   +3.0% |   +20 | 40.1% → 43.4% | 676 → 696 | `accumulate(Double[], double[])`                          | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |
|  +28.6% |   +12 |   2.5% → 3.4% |   42 → 54 | `computeIfAbsent(Object, Function)`                       | java.util.HashMap                                       |
|     new |   +11 |   0.0% → 0.7% |    0 → 11 | `grow(int)`                                               | java.util.ArrayList                                     |
|  +87.5% |    +7 |   0.5% → 0.9% |    8 → 15 | `merge(Object, Object, BiFunction)`                       | java.util.HashMap                                       |
|  +37.5% |    +3 |   0.5% → 0.7% |    8 → 11 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | java.util.concurrent.ForkJoinPool                       |
|     new |    +3 |   0.0% → 0.2% |     0 → 3 | `lambda$merge$7(Map, Object, List)`                       | org.renaissance.jdk.concurrent.JavaKMeans               |
|  +66.7% |    +2 |   0.2% → 0.3% |     3 → 5 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | java.util.concurrent.ForkJoinPool$WorkQueue             |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `awaitDone(int, long)`                                    | java.util.concurrent.ForkJoinTask                       |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `nextNode()`                                              | java.util.HashMap$HashIterator                          |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `createSubtask(int, int)`                                 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |
| +100.0% |    +1 |          0.1% |     1 → 2 | `compute()`                                               | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask    |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `exec()`                                                  | java.util.concurrent.RecursiveTask                      |
| +100.0% |    +1 |          0.1% |     1 → 2 | `runWorker(ForkJoinPool$WorkQueue)`                       | java.util.concurrent.ForkJoinPool                       |
| +100.0% |    +1 |          0.1% |     1 → 2 | `putMapEntries(Map, boolean)`                             | java.util.HashMap                                       |
|  +50.0% |    +1 |   0.1% → 0.2% |     2 → 3 | `park(boolean, long)`                                     | jdk.internal.misc.Unsafe                                |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `unpark(Thread)`                                          | java.util.concurrent.locks.LockSupport                  |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `match(byte[], byte[], byte[], byte[])`                   | java.util.jar.JarFile                                   |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `readBytes0(byte[], int, int)`                            | java.io.RandomAccessFile                                |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `write0(FileDescriptor, long, int)`                       | sun.nio.ch.UnixFileDispatcherImpl                       |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `toUri(UnixPath)`                                         | sun.nio.fs.UnixUriUtils                                 |

#### Progressions

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                                                      | Location                                                                            |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
|  -16.3% |   -70 | 25.5% → 22.4% | 429 → 359 | `distance(Double[], Double[])`                                | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |
|  -18.7% |   -39 | 12.4% → 10.6% | 209 → 170 | `findNearestCentroid()`                                       | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |
|  -15.5% |   -18 |   6.9% → 6.1% |  116 → 98 | `collectClusters(int[])`                                      | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |
|  -93.3% |   -14 |   0.9% → 0.1% |    15 → 1 | `apply(Object)`                                               | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001204b38 |
|  -15.8% |    -6 |   2.3% → 2.0% |   38 → 32 | `copyOf(Object[], int)`                                       | java.util.Arrays                                                                    |
| removed |    -3 |   0.2% → 0.0% |     3 → 0 | `join()`                                                      | java.util.concurrent.ForkJoinTask                                                   |
| removed |    -3 |   0.2% → 0.0% |     3 → 0 | `lambda$collectClusters$0(Double[])`                          | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `putVal(int, Object, Object, boolean, boolean)`               | java.util.HashMap                                                                   |
|  -20.0% |    -1 |   0.3% → 0.2% |     5 → 4 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | java.util.zip.Inflater                                                              |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `replaceNode(Object, Object, Object)`                         | java.util.concurrent.ConcurrentHashMap                                              |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `doExec()`                                                    | java.util.concurrent.ForkJoinTask                                                   |
|  -50.0% |    -1 |          0.1% |     2 → 1 | `checkIndex(int, int)`                                        | java.util.Objects                                                                   |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `push(ForkJoinTask, ForkJoinPool, boolean)`                   | java.util.concurrent.ForkJoinPool$WorkQueue                                         |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `createSubtask(int, int)`                                     | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `add(double[], double[])`                                     | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask                             |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % |   Samples | Function                                                    | Location                                                             |
| ------: | ----: | ------------: | --------: | ----------------------------------------------------------- | -------------------------------------------------------------------- |
|   +8.4% |   +23 | 16.3% → 18.5% | 274 → 297 | `computeDirectly()`                                         | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                 |
|   +7.0% |   +21 | 17.7% → 19.9% | 298 → 319 | `invoke()`                                                  | java.util.concurrent.ForkJoinTask                                    |
|   +3.0% |   +20 | 40.1% → 43.4% | 676 → 696 | `accumulate(Double[], double[])`                            | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask              |
|   +7.1% |   +20 | 16.7% → 18.8% | 281 → 301 | `computeClusterAverages()`                                  | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                 |
|   +2.5% |   +19 | 45.0% → 48.4% | 758 → 777 | `vectorSum()`                                               | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask              |
|   +2.5% |   +19 | 45.0% → 48.4% | 758 → 777 | `computeDirectly()`                                         | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask              |
|   +6.8% |   +19 | 16.7% → 18.7% | 281 → 300 | `average(List)`                                             | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                 |
|  +84.6% |   +11 |   0.8% → 1.5% |   13 → 24 | `merge(Map, Map)`                                           | org.renaissance.jdk.concurrent.JavaKMeans                            |
|  +84.6% |   +11 |   0.8% → 1.5% |   13 → 24 | `combineResults(Map, Map)`                                  | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|  +84.6% |   +11 |   0.8% → 1.5% |   13 → 24 | `combineResults(Object, Object)`                            | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
| +125.0% |   +10 |   0.5% → 1.1% |    8 → 18 | `lambda$merge$7(Map, Object, List)`                         | org.renaissance.jdk.concurrent.JavaKMeans                            |
| +125.0% |   +10 |   0.5% → 1.1% |    8 → 18 | `accept(Object, Object)`                                    | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88 |
| +125.0% |   +10 |   0.5% → 1.1% |    8 → 18 | `forEach(BiConsumer)`                                       | java.util.HashMap                                                    |
|  +87.5% |    +7 |   0.5% → 0.9% |    8 → 15 | `merge(Object, Object, BiFunction)`                         | java.util.HashMap                                                    |
|  +13.2% |    +5 |   2.3% → 2.7% |   38 → 43 | `grow(int)`                                                 | java.util.ArrayList                                                  |
|  +13.2% |    +5 |   2.3% → 2.7% |   38 → 43 | `grow()`                                                    | java.util.ArrayList                                                  |
|  +13.2% |    +5 |   2.3% → 2.7% |   38 → 43 | `add(Object, Object[], int)`                                | java.util.ArrayList                                                  |
|  +13.2% |    +5 |   2.3% → 2.7% |   38 → 43 | `add(Object)`                                               | java.util.ArrayList                                                  |
|  +18.2% |    +4 |   1.3% → 1.6% |   22 → 26 | `call()`                                                    | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0 |
|  +30.0% |    +3 |   0.6% → 0.8% |   10 → 13 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | org.renaissance.core.Launcher                                        |

#### Progressions

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % |       Samples | Function                                                  | Location                                                                            |
| ------: | ----: | ------------: | ------------: | --------------------------------------------------------- | ----------------------------------------------------------------------------------- |
|   -8.9% |  -123 | 81.8% → 78.2% | 1,378 → 1,255 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | java.util.concurrent.ForkJoinPool$WorkQueue                                         |
|  -13.9% |  -122 | 52.2% → 47.2% |     879 → 757 | `computeDirectly()`                                       | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |
|   -8.4% |  -111 | 78.2% → 75.1% | 1,317 → 1,206 | `runWorker(ForkJoinPool$WorkQueue)`                       | java.util.concurrent.ForkJoinPool                                                   |
|   -8.3% |  -110 | 78.5% → 75.5% | 1,322 → 1,212 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | java.util.concurrent.ForkJoinPool                                                   |
|  -17.1% |  -109 | 37.9% → 33.0% |     638 → 529 | `findNearestCentroid()`                                   | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |
|   -8.2% |  -105 | 75.8% → 73.0% | 1,277 → 1,172 | `run()`                                                   | java.util.concurrent.ForkJoinWorkerThread                                           |
|   -5.5% |   -91 | 97.4% → 96.5% | 1,640 → 1,549 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | java.util.concurrent.ForkJoinPool$WorkQueue                                         |
|   -5.5% |   -90 | 98.0% → 97.2% | 1,650 → 1,560 | `awaitDone(int, long)`                                    | java.util.concurrent.ForkJoinTask                                                   |
|   -5.5% |   -90 | 98.0% → 97.2% | 1,650 → 1,560 | `join()`                                                  | java.util.concurrent.ForkJoinTask                                                   |
|   -5.1% |   -85 | 99.3% → 98.9% | 1,673 → 1,588 | `compute()`                                               | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask                                |
|   -5.1% |   -85 | 99.3% → 98.9% | 1,673 → 1,588 | `exec()`                                                  | java.util.concurrent.RecursiveTask                                                  |
|   -5.0% |   -84 | 99.3% → 99.0% | 1,673 → 1,589 | `doExec()`                                                | java.util.concurrent.ForkJoinTask                                                   |
|  -16.3% |   -70 | 25.5% → 22.4% |     429 → 359 | `distance(Double[], Double[])`                            | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |
|   -8.4% |   -18 | 12.7% → 12.2% |     214 → 196 | `collectClusters(int[])`                                  | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |
|  -94.4% |   -17 |   1.1% → 0.1% |        18 → 1 | `apply(Object)`                                           | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001204b38 |
|   -2.2% |    -9 | 24.5% → 25.2% |     413 → 404 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | java.util.concurrent.ForkJoinPool                                                   |
|  -15.8% |    -6 |   2.3% → 2.0% |       38 → 32 | `copyOf(Object[], int)`                                   | java.util.Arrays                                                                    |
|   -8.3% |    -5 |   3.6% → 3.4% |       60 → 55 | `computeIfAbsent(Object, Function)`                       | java.util.HashMap                                                                   |
| removed |    -3 |   0.2% → 0.0% |         3 → 0 | `lambda$collectClusters$0(Double[])`                      | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |
|  -50.0% |    -2 |   0.2% → 0.1% |         4 → 2 | `read(byte[], int, int)`                                  | java.io.FilterInputStream                                                           |


# Allocated heap profile diff

Allocated 40.6 GB → 40.2 GB (-445 MB, -1.1%) over 1,988 samples → 1,980 samples (20.4 MB → 20.3 MB per sample).

| Category | Change |   Delta |      % |              Size |       Samples |
| -------- | -----: | ------: | -----: | ----------------: | ------------: |
| ours     |  -1.1% | -445 MB | 100.0% | 40.6 GB → 40.2 GB | 1,987 → 1,978 |
| stdlib   |  +6.3% |  +120 B |   0.0% |  1.9 kB → 2.02 kB |         1 → 2 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|  Change |    Delta |           % |              Size | Samples | Function                                     | Location                                                 |
| ------: | -------: | ----------: | ----------------: | ------: | -------------------------------------------- | -------------------------------------------------------- |
| +916.7% |  +416 MB | 0.1% → 1.1% |  45.4 MB → 462 MB |  9 → 16 | `grow(int)`                                  | java.util.ArrayList                                      |
| +473.8% |  +213 MB | 0.1% → 0.6% |    45 MB → 258 MB |   5 → 6 | `collectClusters(int[])`                     | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  +71.3% |  +142 MB | 0.5% → 0.8% |   199 MB → 341 MB |  8 → 12 | `createSubtask(int, int)`                    | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  +57.8% | +37.3 MB | 0.2% → 0.3% |  64.5 MB → 102 MB |   1 → 2 | `iterator()`                                 | java.util.HashMap$EntrySet                               |
| +498.9% | +27.8 MB | 0.0% → 0.1% | 5.58 MB → 33.4 MB |   1 → 6 | `resize()`                                   | java.util.HashMap                                        |
|  +28.5% | +24.5 MB | 0.2% → 0.3% |  85.8 MB → 110 MB |   3 → 4 | `lambda$collectClusters$0(Double[])`         | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| +429.9% | +3.41 MB |        0.0% |  794 kB → 4.21 MB |  2 → 12 | `lambda$generateData$4(int)`                 | org.renaissance.jdk.concurrent.JavaKMeans                |
| +481.8% | +2.71 MB |        0.0% |  563 kB → 3.28 MB |       1 | `add(double[], double[])`                    | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  +22.9% | +2.05 MB |        0.0% |   8.95 MB → 11 MB | 22 → 27 | `valueOf(double)`                            | java.lang.Double                                         |
|     new | +1.99 MB |        0.0% |     0 B → 1.99 MB |   0 → 3 | `allocateInstance(Class)`                    | jdk.internal.misc.Unsafe                                 |
| +209.5% |  +850 kB |        0.0% |  406 kB → 1.26 MB |   1 → 3 | `fillInStackTrace(int)`                      | java.lang.Throwable                                      |
|     new |  +804 kB |        0.0% |      0 B → 804 kB |   0 → 2 | `clone()`                                    | java.lang.Object                                         |
|     new |  +803 kB |        0.0% |      0 B → 803 kB |   0 → 1 | `newNode(int, Object, Object, HashMap$Node)` | java.util.LinkedHashMap                                  |
|     new |  +802 kB |        0.0% |      0 B → 802 kB |   0 → 2 | `<init>(int)`                                | java.io.ByteArrayOutputStream                            |
|     new |  +797 kB |        0.0% |      0 B → 797 kB |   0 → 2 | `toString()`                                 | java.lang.StringBuilder                                  |
|  +16.7% |  +793 kB |        0.0% | 4.76 MB → 5.56 MB | 12 → 14 | `mapToObj(IntFunction, int)`                 | java.util.stream.IntPipeline                             |
|   +1.0% |  +754 kB |        0.2% | 73.9 MB → 74.6 MB |   4 → 1 | `createSubtask(int, int)`                    | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|     new |  +657 kB |        0.0% |      0 B → 657 kB |   0 → 2 | `<init>(int)`                                | jdk.internal.org.objectweb.asm.ByteVector                |
|     new |  +467 kB |        0.0% |      0 B → 467 kB |   0 → 2 | `computeClusterAverages()`                   | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
|     new |  +427 kB |        0.0% |      0 B → 427 kB |   0 → 1 | `newString(byte[], long)`                    | java.lang.StringConcatHelper                             |

#### Progressions

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |    Delta |             % |              Size |       Samples | Function                                     | Location                                                 |
| ------: | -------: | ------------: | ----------------: | ------------: | -------------------------------------------- | -------------------------------------------------------- |
|   -2.1% |  -805 MB | 93.8% → 92.9% | 38.1 GB → 37.3 GB | 1,733 → 1,703 | `copyOf(Object[], int)`                      | java.util.Arrays                                         |
|  -12.6% |  -151 MB |   2.9% → 2.6% |  1.2 GB → 1.05 GB |            60 | `findNearestCentroid()`                      | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  -46.5% |  -133 MB |   0.7% → 0.4% |   285 MB → 153 MB |        9 → 13 | `newNode(int, Object, Object, HashMap$Node)` | java.util.HashMap                                        |
|  -94.5% | -88.1 MB |   0.2% → 0.0% | 93.3 MB → 5.11 MB |         2 → 5 | `merge(Map, Map)`                            | org.renaissance.jdk.concurrent.JavaKMeans                |
|  -87.0% | -73.8 MB |   0.2% → 0.0% |   84.8 MB → 11 MB |         4 → 2 | `vectorSum()`                                | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  -85.1% | -55.2 MB |   0.2% → 0.0% | 64.9 MB → 9.67 MB |         4 → 5 | `lambda$merge$6(List, List)`                 | org.renaissance.jdk.concurrent.JavaKMeans                |
|  -98.2% | -4.48 MB |          0.0% | 4.56 MB → 80.3 kB |        12 → 1 | `opWrapSink(int, Sink)`                      | java.util.stream.IntPipeline$1                           |
|  -19.8% | -2.52 MB |          0.0% | 12.8 MB → 10.2 MB |       18 → 15 | `copyOf(Object[], int, Class)`               | java.util.Arrays                                         |
| removed | -1.98 MB |          0.0% |     1.98 MB → 0 B |         1 → 0 | `createSubtask(int, int)`                    | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
|  -30.2% | -1.89 MB |          0.0% | 6.27 MB → 4.37 MB |       18 → 12 | `intStream(Spliterator$OfInt, boolean)`      | java.util.stream.StreamSupport                           |
| removed | -1.34 MB |          0.0% |     1.34 MB → 0 B |         2 → 0 | `allocateInstance(Object)`                   | java.lang.invoke.DirectMethodHandle                      |
|   -0.6% | -1.08 MB |          0.4% |   178 MB → 177 MB |            18 | `copyOf(byte[], int)`                        | java.util.Arrays                                         |
|  -76.6% |  -811 kB |          0.0% |  1.06 MB → 248 kB |         3 → 1 | `newString(byte[], int, int)`                | java.lang.StringLatin1                                   |
| removed |  -794 kB |          0.0% |      794 kB → 0 B |         2 → 0 | `newLinkedHashMap(int)`                      | java.util.LinkedHashMap                                  |
| removed |  -652 kB |          0.0% |      652 kB → 0 B |         2 → 0 | `enlarge(int)`                               | jdk.internal.org.objectweb.asm.ByteVector                |
| removed |  -502 kB |          0.0% |      502 kB → 0 B |         1 → 0 | `classFilePrologue()`                        | java.lang.invoke.InvokerBytecodeGenerator                |
| removed |  -427 kB |          0.0% |      427 kB → 0 B |         1 → 0 | `getInputStream(ZipEntry)`                   | java.util.zip.ZipFile                                    |
| removed |  -418 kB |          0.0% |      418 kB → 0 B |         1 → 0 | `newOutputStream(Path, OpenOption[])`        | java.nio.file.spi.FileSystemProvider                     |
| removed |  -413 kB |          0.0% |      413 kB → 0 B |         1 → 0 | `getPath(String, String[])`                  | sun.nio.fs.UnixFileSystem                                |
| removed |  -405 kB |          0.0% |      405 kB → 0 B |         1 → 0 | `copyOfRangeByte(byte[], int, int)`          | java.util.Arrays                                         |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|   Change |    Delta |             % |              Size |       Samples | Function                                                                        | Location                                                                            |
| -------: | -------: | ------------: | ----------------: | ------------: | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
|    +7.6% | +1.82 GB | 58.9% → 64.0% | 23.9 GB → 25.7 GB | 1,155 → 1,135 | `addAll(Collection)`                                                            | java.util.ArrayList                                                                 |
|    +8.6% | +1.44 GB | 41.0% → 45.1% | 16.7 GB → 18.1 GB |           877 | `grow(int)`                                                                     | java.util.ArrayList                                                                 |
|   +31.5% | +1.24 GB |  9.7% → 12.9% | 3.95 GB → 5.19 GB |     224 → 244 | `collectClusters(int[])`                                                        | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |
|   +21.2% | +1.09 GB | 12.7% → 15.5% | 5.14 GB → 6.23 GB |     284 → 304 | `computeDirectly()`                                                             | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |
|   +25.3% |  +963 MB |  9.4% → 11.9% | 3.81 GB → 4.77 GB |     215 → 226 | `grow()`                                                                        | java.util.ArrayList                                                                 |
|   +25.3% |  +963 MB |  9.4% → 11.9% | 3.81 GB → 4.77 GB |     215 → 226 | `add(Object, Object[], int)`                                                    | java.util.ArrayList                                                                 |
|   +25.3% |  +963 MB |  9.4% → 11.9% | 3.81 GB → 4.77 GB |     215 → 226 | `add(Object)`                                                                   | java.util.ArrayList                                                                 |
|   +23.4% |  +777 MB |  8.2% → 10.2% | 3.31 GB → 4.09 GB |     207 → 233 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`                       | java.util.concurrent.ForkJoinPool                                                   |
| +4946.5% |  +169 MB |   0.0% → 0.4% |  3.42 MB → 173 MB |        8 → 12 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | java.lang.ClassLoader                                                               |
| +3979.4% |  +168 MB |   0.0% → 0.4% |  4.23 MB → 173 MB |       10 → 12 | `defineClass(String, byte[], int, int, ProtectionDomain)`                       | java.lang.ClassLoader                                                               |
| +3979.4% |  +168 MB |   0.0% → 0.4% |  4.23 MB → 173 MB |       10 → 12 | `defineClass(String, byte[], int, int, CodeSource)`                             | java.security.SecureClassLoader                                                     |
|   +71.3% |  +142 MB |   0.5% → 0.8% |   199 MB → 341 MB |        8 → 12 | `createSubtask(int, int)`                                                       | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask                             |
|   +72.3% | +65.2 MB |   0.2% → 0.4% |  90.2 MB → 155 MB |        4 → 12 | `computeIfAbsent(Object, Function)`                                             | java.util.HashMap                                                                   |
|   +57.8% | +37.3 MB |   0.2% → 0.3% |  64.5 MB → 102 MB |         1 → 2 | `iterator()`                                                                    | java.util.HashMap$EntrySet                                                          |
|  +498.9% | +27.8 MB |   0.0% → 0.1% | 5.58 MB → 33.4 MB |         1 → 6 | `resize()`                                                                      | java.util.HashMap                                                                   |
|   +29.9% | +25.8 MB |   0.2% → 0.3% |  86.5 MB → 112 MB |             7 | `computeClusterAverages()`                                                      | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                                |
|   +29.9% | +25.8 MB |   0.2% → 0.3% |  86.5 MB → 112 MB |             7 | `computeDirectly()`                                                             | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                                |
|   +29.3% | +25.3 MB |   0.2% → 0.3% |  86.5 MB → 112 MB |         7 → 5 | `average(List)`                                                                 | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                                |
|   +28.5% | +24.5 MB |   0.2% → 0.3% |  85.8 MB → 110 MB |         3 → 4 | `lambda$collectClusters$0(Double[])`                                            | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |
|   +28.5% | +24.5 MB |   0.2% → 0.3% |  85.8 MB → 110 MB |         3 → 4 | `apply(Object)`                                                                 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001204b38 |

#### Progressions

Functions with the largest decrease in total bytes allocated in the function and all its callees.

| Change |    Delta |             % |              Size |       Samples | Function                                             | Location                                                             |
| -----: | -------: | ------------: | ----------------: | ------------: | ---------------------------------------------------- | -------------------------------------------------------------------- |
| -30.3% | -3.17 GB | 25.7% → 18.1% | 10.5 GB → 7.29 GB |     390 → 373 | `<init>(Collection)`                                 | java.util.ArrayList                                                  |
|  -8.5% | -1.83 GB | 52.9% → 49.0% | 21.5 GB → 19.7 GB |     883 → 857 | `toArray()`                                          | java.util.ArrayList                                                  |
|  -4.6% | -1.61 GB | 85.9% → 82.8% | 34.9 GB → 33.3 GB | 1,561 → 1,531 | `combineResults(Map, Map)`                           | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|  -4.6% | -1.61 GB | 85.9% → 82.8% | 34.9 GB → 33.3 GB | 1,561 → 1,531 | `combineResults(Object, Object)`                     | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|  -4.6% | -1.61 GB | 85.9% → 82.8% | 34.9 GB → 33.3 GB | 1,561 → 1,532 | `merge(Map, Map)`                                    | org.renaissance.jdk.concurrent.JavaKMeans                            |
|  -3.7% | -1.43 GB | 96.2% → 93.7% | 39.1 GB → 37.7 GB | 1,770 → 1,736 | `runWorker(ForkJoinPool$WorkQueue)`                  | java.util.concurrent.ForkJoinPool                                    |
|  -3.7% | -1.43 GB | 96.2% → 93.7% | 39.1 GB → 37.7 GB | 1,770 → 1,736 | `run()`                                              | java.util.concurrent.ForkJoinWorkerThread                            |
|  -3.6% | -1.42 GB | 96.3% → 93.8% | 39.1 GB → 37.7 GB | 1,774 → 1,741 | `scan(ForkJoinPool$WorkQueue, int, int)`             | java.util.concurrent.ForkJoinPool                                    |
|  -4.1% | -1.41 GB | 84.8% → 82.2% |   34.4 GB → 33 GB | 1,549 → 1,513 | `lambda$merge$6(List, List)`                         | org.renaissance.jdk.concurrent.JavaKMeans                            |
|  -4.1% | -1.41 GB | 84.8% → 82.2% |   34.4 GB → 33 GB | 1,549 → 1,513 | `apply(Object, Object)`                              | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0 |
|  -4.1% | -1.41 GB | 84.8% → 82.2% |   34.4 GB → 33 GB | 1,549 → 1,513 | `merge(Object, Object, BiFunction)`                  | java.util.HashMap                                                    |
|  -4.1% | -1.41 GB | 84.8% → 82.2% |   34.4 GB → 33 GB | 1,549 → 1,513 | `lambda$merge$7(Map, Object, List)`                  | org.renaissance.jdk.concurrent.JavaKMeans                            |
|  -4.1% | -1.41 GB | 84.8% → 82.2% |   34.4 GB → 33 GB | 1,549 → 1,513 | `accept(Object, Object)`                             | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88 |
|  -4.1% | -1.41 GB | 84.8% → 82.2% |   34.4 GB → 33 GB | 1,549 → 1,513 | `forEach(BiConsumer)`                                | java.util.HashMap                                                    |
|  -4.7% | -1.25 GB | 66.0% → 63.6% | 26.8 GB → 25.6 GB | 1,231 → 1,206 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | java.util.concurrent.ForkJoinPool$WorkQueue                          |
|  -3.1% | -1.21 GB | 96.8% → 94.8% | 39.3 GB → 38.1 GB | 1,788 → 1,764 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool$WorkQueue                          |
|  -3.6% |  -968 MB | 66.9% → 65.2% | 27.2 GB → 26.2 GB | 1,246 → 1,229 | `awaitDone(int, long)`                               | java.util.concurrent.ForkJoinTask                                    |
|  -3.6% |  -968 MB | 66.9% → 65.2% | 27.2 GB → 26.2 GB | 1,246 → 1,229 | `join()`                                             | java.util.concurrent.ForkJoinTask                                    |
|  -2.1% |  -807 MB | 93.9% → 92.9% | 38.1 GB → 37.3 GB | 1,751 → 1,718 | `copyOf(Object[], int)`                              | java.util.Arrays                                                     |
|  -7.3% |  -634 MB | 21.4% → 20.1% |  8.7 GB → 8.07 GB |     232 → 221 | `invoke()`                                           | java.util.concurrent.ForkJoinTask                                    |


# Lock contention profile diff

Blocked 7.30s → 7.18s (-112.9ms, -1.5%) over 61 samples → 59 samples (119.7ms → 121.8ms per sample).

| Category | Change |    Delta |      % |          Time | Samples |
| -------- | -----: | -------: | -----: | ------------: | ------: |
| ours     |  -1.5% | -112.9ms | 100.0% | 7.30s → 7.18s | 61 → 59 |

## Hottest functions

### Self time

#### Progressions

Functions with the largest decrease in time blocked directly in the function body, excluding callees.

| Change |    Delta |      % |          Time | Samples | Function              | Location                 |
| -----: | -------: | -----: | ------------: | ------: | --------------------- | ------------------------ |
|  -1.5% | -112.9ms | 100.0% | 7.30s → 7.18s | 61 → 59 | `park(boolean, long)` | jdk.internal.misc.Unsafe |

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

| Change |   Delta |             % |          Time | Samples | Function                                             | Location                                             |
| -----: | ------: | ------------: | ------------: | ------: | ---------------------------------------------------- | ---------------------------------------------------- |
|  +1.2% | +85.5ms | 93.7% → 96.4% | 6.84s → 6.92s | 44 → 49 | `park()`                                             | java.util.concurrent.locks.LockSupport               |
|    new | +36.8ms |   0.0% → 0.5% |  0ms → 36.8ms |   0 → 1 | `join()`                                             | java.util.concurrent.ForkJoinTask                    |
|    new | +36.8ms |   0.0% → 0.5% |  0ms → 36.8ms |   0 → 1 | `compute()`                                          | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |
|    new | +36.8ms |   0.0% → 0.5% |  0ms → 36.8ms |   0 → 1 | `exec()`                                             | java.util.concurrent.RecursiveTask                   |
|    new | +36.8ms |   0.0% → 0.5% |  0ms → 36.8ms |   0 → 1 | `doExec()`                                           | java.util.concurrent.ForkJoinTask                    |
|    new | +36.8ms |   0.0% → 0.5% |  0ms → 36.8ms |   0 → 1 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool$WorkQueue          |
|    new | +36.8ms |   0.0% → 0.5% |  0ms → 36.8ms |   0 → 1 | `scan(ForkJoinPool$WorkQueue, int, int)`             | java.util.concurrent.ForkJoinPool                    |

#### Progressions

Functions with the largest decrease in total time blocked in the function and all its callees.

| Change |    Delta |             % |              Time | Samples | Function                                                                                                               | Location                                                             |
| -----: | -------: | ------------: | ----------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| -43.1% | -198.4ms |   6.3% → 3.6% | 460.2ms → 261.8ms | 17 → 10 | `parkUntil(long)`                                                                                                      | java.util.concurrent.locks.LockSupport                               |
|  -1.5% | -112.9ms |        100.0% |     7.30s → 7.18s | 61 → 59 | `park(boolean, long)`                                                                                                  | jdk.internal.misc.Unsafe                                             |
|  -1.5% |  -91.4ms | 83.9% → 84.0% |     6.12s → 6.03s |      16 | `get()`                                                                                                                | java.util.concurrent.ForkJoinTask                                    |
|  -1.5% |  -91.4ms | 83.9% → 84.0% |     6.12s → 6.03s |      16 | `run(int, List, int)`                                                                                                  | org.renaissance.jdk.concurrent.JavaKMeans                            |
|  -1.5% |  -91.4ms | 83.9% → 84.0% |     6.12s → 6.03s |      16 | `$anonfun$1(int)`                                                                                                      | org.renaissance.jdk.concurrent.FjKmeans                              |
|  -1.5% |  -91.4ms | 83.9% → 84.0% |     6.12s → 6.03s |      16 | `$anonfun$adapted$1(Object)`                                                                                           | org.renaissance.jdk.concurrent.FjKmeans                              |
|  -1.5% |  -91.4ms | 83.9% → 84.0% |     6.12s → 6.03s |      16 | `apply(Object)`                                                                                                        | org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011f6c70   |
|  -1.5% |  -91.4ms | 83.9% → 84.0% |     6.12s → 6.03s |      16 | `map(Function1)`                                                                                                       | scala.collection.immutable.Range                                     |
|  -1.5% |  -91.4ms | 83.9% → 84.0% |     6.12s → 6.03s |      16 | `run(BenchmarkContext)`                                                                                                | org.renaissance.jdk.concurrent.FjKmeans                              |
|  -1.5% |  -91.4ms | 83.9% → 84.0% |     6.12s → 6.03s |      16 | `executeOperation(int)`                                                                                                | org.renaissance.harness.ExecutionDriver                              |
|  -1.5% |  -91.4ms | 83.9% → 84.0% |     6.12s → 6.03s |      16 | `executeBenchmark()`                                                                                                   | org.renaissance.harness.ExecutionDriver                              |
|  -1.5% |  -91.4ms | 83.9% → 84.0% |     6.12s → 6.03s |      16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | org.renaissance.harness.RenaissanceSuite$                            |
|  -1.5% |  -91.4ms | 83.9% → 84.0% |     6.12s → 6.03s |      16 | `applyVoid(Object)`                                                                                                    | org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001198798 |
|  -1.5% |  -91.4ms | 83.9% → 84.0% |     6.12s → 6.03s |      16 | `apply(Object)`                                                                                                        | scala.runtime.function.JProcedure1                                   |
|  -1.5% |  -91.4ms | 83.9% → 84.0% |     6.12s → 6.03s |      16 | `foreach(Function1)`                                                                                                   | scala.collection.immutable.List                                      |
|  -1.5% |  -91.4ms | 83.9% → 84.0% |     6.12s → 6.03s |      16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | org.renaissance.harness.RenaissanceSuite$                            |
|  -1.5% |  -91.4ms | 83.9% → 84.0% |     6.12s → 6.03s |      16 | `main(String[])`                                                                                                       | org.renaissance.harness.RenaissanceSuite$                            |
|  -1.5% |  -91.4ms | 83.9% → 84.0% |     6.12s → 6.03s |      16 | `main(String[])`                                                                                                       | org.renaissance.harness.RenaissanceSuite                             |
|  -1.5% |  -91.4ms | 83.9% → 84.0% |     6.12s → 6.03s |      16 | `invokeStatic(Object, Object)`                                                                                         | java.lang.invoke.LambdaForm$DMH.0x0000007001001c00                   |
|  -1.5% |  -91.4ms | 83.9% → 84.0% |     6.12s → 6.03s |      16 | `invoke(Object, Object, Object)`                                                                                       | java.lang.invoke.LambdaForm$MH.0x0000007001082400                    |

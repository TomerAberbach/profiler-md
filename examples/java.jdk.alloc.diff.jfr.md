# Sampling profile diff

1,682 samples → 1,629 samples (-53 samples, -3.2%).

| Category | Change | Delta |      % |       Samples |
| -------- | -----: | ----: | -----: | ------------: |
| ours     |  -3.2% |   -53 | 100.0% | 1,682 → 1,629 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                                                                                                                 | Location                                                |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------- |
|   +5.4% |   +38 | 41.6% → 45.3% | 700 → 738 | `accumulate(Double[], double[])`                                                                                         | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |
| +133.3% |    +4 |   0.2% → 0.4% |     3 → 7 | `merge(Object, Object, BiFunction)`                                                                                      | java.util.HashMap                                       |
| +150.0% |    +3 |   0.1% → 0.3% |     2 → 5 | `tryRemoveAndExec(ForkJoinTask, boolean)`                                                                                | java.util.concurrent.ForkJoinPool$WorkQueue             |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `nextNode()`                                                                                                             | java.util.HashMap$HashIterator                          |
| +100.0% |    +1 |          0.1% |     1 → 2 | `write0(FileDescriptor, long, int)`                                                                                      | sun.nio.ch.UnixFileDispatcherImpl                       |
| +100.0% |    +1 |          0.1% |     1 → 2 | `wrapSink(Sink)`                                                                                                         | java.util.stream.AbstractPipeline                       |
| +100.0% |    +1 |          0.1% |     1 → 2 | `compute()`                                                                                                              | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask    |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `join()`                                                                                                                 | java.util.concurrent.ForkJoinTask                       |
|   +9.1% |    +1 |          0.7% |   11 → 12 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`                                                                | java.util.concurrent.ForkJoinPool                       |
|  +16.7% |    +1 |          0.4% |     6 → 7 | `grow(int)`                                                                                                              | java.util.ArrayList                                     |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `<init>(MethodHandles$Lookup, MethodType, String, MethodType, MethodHandle, MethodType, boolean, Class[], MethodType[])` | java.lang.invoke.AbstractValidatingLambdaMetafactory    |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `putVal(int, Object, Object, boolean, boolean)`                                                                          | java.util.HashMap                                       |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `park(boolean, long)`                                                                                                    | jdk.internal.misc.Unsafe                                |

#### Progressions

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                                | Location                                                                            |
| ------: | ----: | ------------: | --------: | --------------------------------------- | ----------------------------------------------------------------------------------- |
|   -7.9% |   -32 | 24.2% → 23.0% | 407 → 375 | `distance(Double[], Double[])`          | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |
|  -34.8% |   -24 |   4.1% → 2.8% |   69 → 45 | `vectorSum()`                           | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask                             |
|  -29.5% |   -13 |   2.6% → 1.9% |   44 → 31 | `copyOf(Object[], int)`                 | java.util.Arrays                                                                    |
|  -13.6% |    -9 |   3.9% → 3.5% |   66 → 57 | `computeIfAbsent(Object, Function)`     | java.util.HashMap                                                                   |
|  -80.0% |    -4 |   0.3% → 0.1% |     5 → 1 | `awaitDone(int, long)`                  | java.util.concurrent.ForkJoinTask                                                   |
|  -75.0% |    -3 |   0.2% → 0.1% |     4 → 1 | `add(double[], double[])`               | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask                             |
|   -2.0% |    -2 |          6.1% | 102 → 100 | `collectClusters(int[])`                | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `unboxToInt(Object)`                    | scala.runtime.BoxesRunTime                                                          |
|  -25.0% |    -1 |          0.2% |     4 → 3 | `accept(Object)`                        | java.util.stream.ReduceOps$3ReducingSink                                            |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `doExec()`                              | java.util.concurrent.ForkJoinTask                                                   |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `runWorker(ForkJoinPool$WorkQueue)`     | java.util.concurrent.ForkJoinPool                                                   |
|   -0.5% |    -1 | 12.6% → 13.0% | 212 → 211 | `findNearestCentroid()`                 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `checkIndex(int, int)`                  | java.util.Objects                                                                   |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `equals(LambdaFormEditor$TransformKey)` | java.lang.invoke.LambdaFormEditor$Transform                                         |
|  -50.0% |    -1 |          0.1% |     2 → 1 | `awaitWork(ForkJoinPool$WorkQueue)`     | java.util.concurrent.ForkJoinPool                                                   |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `createSubtask(int, int)`               | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `merge(Map, Map)`                       | org.renaissance.jdk.concurrent.JavaKMeans                                           |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `signalWaiters()`                       | java.util.concurrent.ForkJoinTask                                                   |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `apply(Object)`                         | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000c001204b38 |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `unpark(Object)`                        | jdk.internal.misc.Unsafe                                                            |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % |   Samples | Function                            | Location                                                             |
| ------: | ----: | ------------: | --------: | ----------------------------------- | -------------------------------------------------------------------- |
|   +5.4% |   +38 | 41.6% → 45.3% | 700 → 738 | `accumulate(Double[], double[])`    | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask              |
|     new |   +27 |   0.0% → 1.7% |    0 → 27 | `call()`                            | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b8011ffbc0 |
|   +6.8% |   +21 | 18.4% → 20.3% | 309 → 330 | `invoke()`                          | java.util.concurrent.ForkJoinTask                                    |
| +166.7% |   +15 |   0.5% → 1.5% |    9 → 24 | `exec()`                            | java.util.concurrent.ForkJoinTask$AdaptedCallable                    |
|   +1.8% |   +14 | 45.7% → 48.1% | 769 → 783 | `vectorSum()`                       | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask              |
|   +1.8% |   +14 | 45.7% → 48.1% | 769 → 783 | `computeDirectly()`                 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask              |
|  +70.6% |   +12 |   1.0% → 1.8% |   17 → 29 | `lambda$run$0(int, List, int)`      | org.renaissance.jdk.concurrent.JavaKMeans                            |
|   +3.4% |   +10 | 17.7% → 18.9% | 298 → 308 | `average(List)`                     | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                 |
|     new |   +10 |   0.0% → 0.6% |    0 → 10 | `accept(Object, Object)`            | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801204d88 |
|   +3.0% |    +9 | 17.8% → 18.9% | 299 → 308 | `computeClusterAverages()`          | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                 |
|     new |    +9 |   0.0% → 0.6% |     0 → 9 | `invokeStatic(Object, Object)`      | java.lang.invoke.LambdaForm$DMH.0x000000b801001c00                   |
|     new |    +9 |   0.0% → 0.6% |     0 → 9 | `invoke(Object, Object, Object)`    | java.lang.invoke.LambdaForm$MH.0x000000b801082400                    |
|     new |    +7 |   0.0% → 0.4% |     0 → 7 | `applyVoid(Object)`                 | org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000b801198798 |
| +300.0% |    +3 |   0.1% → 0.2% |     1 → 4 | `putMapEntries(Map, boolean)`       | java.util.HashMap                                                    |
| +300.0% |    +3 |   0.1% → 0.2% |     1 → 4 | `<init>(Map)`                       | java.util.HashMap                                                    |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `nextNode()`                        | java.util.HashMap$HashIterator                                       |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `next()`                            | java.util.HashMap$EntryIterator                                      |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `apply(int)`                        | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b8011a18d8 |
| +100.0% |    +1 |          0.1% |     1 → 2 | `write0(FileDescriptor, long, int)` | sun.nio.ch.UnixFileDispatcherImpl                                    |
| +100.0% |    +1 |          0.1% |     1 → 2 | `write(FileDescriptor, long, int)`  | sun.nio.ch.UnixFileDispatcherImpl                                    |

#### Progressions

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % |       Samples | Function                                                  | Location                                                             |
| ------: | ----: | ------------: | ------------: | --------------------------------------------------------- | -------------------------------------------------------------------- |
|   -6.9% |   -59 | 50.9% → 48.9% |     856 → 797 | `computeDirectly()`                                       | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|   -3.0% |   -50 | 99.1% → 99.3% | 1,667 → 1,617 | `compute()`                                               | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask                 |
|   -3.0% |   -50 | 99.1% → 99.3% | 1,667 → 1,617 | `exec()`                                                  | java.util.concurrent.RecursiveTask                                   |
|   -3.0% |   -50 | 99.1% → 99.3% | 1,667 → 1,617 | `doExec()`                                                | java.util.concurrent.ForkJoinTask                                    |
|   -3.0% |   -49 | 97.1% → 97.2% | 1,633 → 1,584 | `awaitDone(int, long)`                                    | java.util.concurrent.ForkJoinTask                                    |
|   -3.0% |   -49 | 97.1% → 97.2% | 1,633 → 1,584 | `join()`                                                  | java.util.concurrent.ForkJoinTask                                    |
|   -2.9% |   -47 | 96.1% → 96.4% | 1,617 → 1,570 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | java.util.concurrent.ForkJoinPool$WorkQueue                          |
|   -8.7% |   -39 | 26.6% → 25.1% |     448 → 409 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | java.util.concurrent.ForkJoinPool                                    |
|   -5.3% |   -33 | 36.8% → 36.0% |     619 → 586 | `findNearestCentroid()`                                   | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|   -2.5% |   -32 | 76.8% → 77.3% | 1,292 → 1,260 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | java.util.concurrent.ForkJoinPool                                    |
|   -2.5% |   -32 | 76.5% → 77.0% | 1,286 → 1,254 | `runWorker(ForkJoinPool$WorkQueue)`                       | java.util.concurrent.ForkJoinPool                                    |
|   -7.9% |   -32 | 24.2% → 23.0% |     407 → 375 | `distance(Double[], Double[])`                            | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|   -2.5% |   -31 | 73.7% → 74.2% | 1,240 → 1,209 | `run()`                                                   | java.util.concurrent.ForkJoinWorkerThread                            |
|   -1.9% |   -26 | 79.4% → 80.4% | 1,335 → 1,309 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | java.util.concurrent.ForkJoinPool$WorkQueue                          |
|   -8.1% |   -17 | 12.5% → 11.9% |     211 → 194 | `collectClusters(int[])`                                  | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
| removed |   -16 |   1.0% → 0.0% |        16 → 0 | `call()`                                                  | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011ffbc0 |
|  -29.5% |   -13 |   2.6% → 1.9% |       44 → 31 | `copyOf(Object[], int)`                                   | java.util.Arrays                                                     |
| removed |   -12 |   0.7% → 0.0% |        12 → 0 | `accept(Object, Object)`                                  | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c001204d88 |
|  -14.9% |   -10 |   4.0% → 3.5% |       67 → 57 | `computeIfAbsent(Object, Function)`                       | java.util.HashMap                                                    |
| removed |    -9 |   0.5% → 0.0% |         9 → 0 | `invokeStatic(Object, Object)`                            | java.lang.invoke.LambdaForm$DMH.0x000000c001001c00                   |


# Allocated heap profile diff

Allocated 39.9 GB → 40 GB (+121 MB, +0.3%) over 1,980 samples → 1,998 samples (20.2 MB → 20 MB per sample).

| Category | Change |   Delta |      % |             Size |       Samples |
| -------- | -----: | ------: | -----: | ---------------: | ------------: |
| ours     |  +0.3% | +121 MB | 100.0% |  39.9 GB → 40 GB | 1,979 → 1,996 |
| stdlib   | +20.9% |  +432 B |   0.0% | 2.06 kB → 2.5 kB |         1 → 2 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|    Change |    Delta |             % |              Size |       Samples | Function                                                                                             | Location                                                |
| --------: | -------: | ------------: | ----------------: | ------------: | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|     +2.3% |  +839 MB | 92.6% → 94.4% |   37 GB → 37.8 GB | 1,706 → 1,730 | `copyOf(Object[], int)`                                                                              | java.util.Arrays                                        |
| +20193.0% |  +166 MB |   0.0% → 0.4% |   824 kB → 167 MB |         2 → 1 | `newString(byte[], long)`                                                                            | java.lang.StringConcatHelper                            |
|       new | +72.1 MB |   0.0% → 0.2% |     0 B → 72.1 MB |         0 → 2 | `computeClusterAverages()`                                                                           | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask    |
|   +244.6% | +63.4 MB |   0.1% → 0.2% | 25.9 MB → 89.4 MB |         5 → 4 | `resize()`                                                                                           | java.util.HashMap                                       |
|    +63.9% |   +46 MB |   0.2% → 0.3% |    72 MB → 118 MB |         3 → 9 | `createSubtask(int, int)`                                                                            | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |
|  +1120.0% |   +30 MB |   0.0% → 0.1% | 2.68 MB → 32.7 MB |         3 → 5 | `vectorSum()`                                                                                        | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |
|    +35.6% | +4.57 MB |          0.0% | 12.9 MB → 17.4 MB |       18 → 25 | `copyOf(Object[], int, Class)`                                                                       | java.util.Arrays                                        |
|     +2.9% | +2.75 MB |          0.2% | 93.7 MB → 96.5 MB |         5 → 6 | `merge(Map, Map)`                                                                                    | org.renaissance.jdk.concurrent.JavaKMeans               |
|    +33.4% | +1.41 MB |          0.0% | 4.23 MB → 5.64 MB |        9 → 13 | `<init>(InputStream, Inflater, int)`                                                                 | java.util.zip.InflaterInputStream                       |
|    +11.9% | +1.16 MB |          0.0% | 9.78 MB → 10.9 MB |       26 → 29 | `valueOf(double)`                                                                                    | java.lang.Double                                        |
|    +27.3% |  +998 kB |          0.0% | 3.66 MB → 4.65 MB |       10 → 13 | `mapToObj(IntFunction, int)`                                                                         | java.util.stream.IntPipeline                            |
|       new |  +803 kB |          0.0% |      0 B → 803 kB |         0 → 2 | `compress(char[], int, int)`                                                                         | java.lang.StringUTF16                                   |
|       new |  +802 kB |          0.0% |      0 B → 802 kB |         0 → 1 | `createSubtask(int, int)`                                                                            | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask    |
|       new |  +658 kB |          0.0% |      0 B → 658 kB |         0 → 2 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` | java.lang.ClassLoader                                   |
|    +12.0% |  +604 kB |          0.0% | 5.05 MB → 5.66 MB |       12 → 14 | `intStream(Spliterator$OfInt, boolean)`                                                              | java.util.stream.StreamSupport                          |
|       new |  +502 kB |          0.0% |      0 B → 502 kB |         0 → 1 | `push(int)`                                                                                          | jdk.internal.org.objectweb.asm.Frame                    |
|       new |  +478 kB |          0.0% |      0 B → 478 kB |         0 → 1 | `allocateUninitializedArray(Class, int)`                                                             | jdk.internal.misc.Unsafe                                |
|   +105.7% |  +423 kB |          0.0% |   400 kB → 823 kB |         1 → 2 | `<init>(ClassWriter)`                                                                                | jdk.internal.org.objectweb.asm.SymbolTable              |
|       new |  +404 kB |          0.0% |      0 B → 404 kB |         0 → 1 | `<init>(SymbolTable, int, String, String, String, String[], int)`                                    | jdk.internal.org.objectweb.asm.MethodWriter             |
|   +162.5% |  +403 kB |          0.0% |   248 kB → 650 kB |         1 → 2 | `newString(byte[], int, int)`                                                                        | java.lang.StringLatin1                                  |

#### Progressions

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |    Delta |           % |              Size | Samples | Function                                                                        | Location                                                 |
| ------: | -------: | ----------: | ----------------: | ------: | ------------------------------------------------------------------------------- | -------------------------------------------------------- |
|  -95.0% |  -166 MB | 0.4% → 0.0% |  175 MB → 8.75 MB |   9 → 4 | `lambda$merge$6(List, List)`                                                    | org.renaissance.jdk.concurrent.JavaKMeans                |
|  -93.0% |  -165 MB | 0.4% → 0.0% |  178 MB → 12.4 MB | 17 → 21 | `copyOf(byte[], int)`                                                           | java.util.Arrays                                         |
|  -70.4% |  -158 MB | 0.6% → 0.2% |  224 MB → 66.2 MB |  13 → 6 | `grow(int)`                                                                     | java.util.ArrayList                                      |
|  -48.0% |  -126 MB | 0.7% → 0.3% |   263 MB → 137 MB |  10 → 7 | `newNode(int, Object, Object, HashMap$Node)`                                    | java.util.HashMap                                        |
|  -91.0% |  -116 MB | 0.3% → 0.0% |  127 MB → 11.5 MB |   6 → 3 | `collectClusters(int[])`                                                        | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  -32.0% |  -110 MB | 0.9% → 0.6% |   343 MB → 233 MB |   7 → 8 | `createSubtask(int, int)`                                                       | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|   -8.9% |  -104 MB | 2.9% → 2.7% | 1.17 GB → 1.07 GB | 56 → 58 | `findNearestCentroid()`                                                         | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  -93.0% | -92.2 MB | 0.2% → 0.0% | 99.1 MB → 6.89 MB |   4 → 1 | `add(double[], double[])`                                                       | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  -38.3% | -28.9 MB | 0.2% → 0.1% | 75.6 MB → 46.6 MB |   7 → 2 | `lambda$collectClusters$0(Double[])`                                            | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| removed | -18.9 MB |        0.0% |     18.9 MB → 0 B |   3 → 0 | `iterator()`                                                                    | java.util.HashMap$EntrySet                               |
| removed | -18.6 MB |        0.0% |     18.6 MB → 0 B |   1 → 0 | `entrySet()`                                                                    | java.util.HashMap                                        |
| removed |  -1.4 MB |        0.0% |      1.4 MB → 0 B |   4 → 0 | `builder(long, IntFunction)`                                                    | java.util.stream.Nodes                                   |
|  -75.0% | -1.19 MB |        0.0% |  1.59 MB → 397 kB |   4 → 1 | `range(int, int)`                                                               | java.util.stream.IntStream                               |
| removed |  -796 kB |        0.0% |      796 kB → 0 B |   1 → 0 | `copyOfRangeByte(byte[], int, int)`                                             | java.util.Arrays                                         |
| removed |  -784 kB |        0.0% |      784 kB → 0 B |   2 → 0 | `fillInStackTrace(int)`                                                         | java.lang.Throwable                                      |
| removed |  -652 kB |        0.0% |      652 kB → 0 B |   2 → 0 | `enlarge(int)`                                                                  | jdk.internal.org.objectweb.asm.ByteVector                |
| removed |  -404 kB |        0.0% |      404 kB → 0 B |   1 → 0 | `initClassName()`                                                               | java.lang.Class                                          |
| removed |  -403 kB |        0.0% |      403 kB → 0 B |   1 → 0 | `newNode(int, Object, Object, HashMap$Node)`                                    | java.util.LinkedHashMap                                  |
| removed |  -403 kB |        0.0% |      403 kB → 0 B |   1 → 0 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | java.lang.ClassLoader                                    |
| removed |  -399 kB |        0.0% |      399 kB → 0 B |   1 → 0 | `<clinit>()`                                                                    | scala.collection.immutable.List$                         |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|    Change |    Delta |             % |              Size |       Samples | Function                            | Location                                                             |
| --------: | -------: | ------------: | ----------------: | ------------: | ----------------------------------- | -------------------------------------------------------------------- |
|       new | +33.8 GB |  0.0% → 84.4% |     0 B → 33.8 GB |     0 → 1,557 | `apply(Object, Object)`             | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801205218 |
|       new | +33.8 GB |  0.0% → 84.4% |     0 B → 33.8 GB |     0 → 1,557 | `accept(Object, Object)`            | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801204d88 |
|       new | +8.08 GB |  0.0% → 20.2% |     0 B → 8.08 GB |       0 → 222 | `call()`                            | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b8011ffbc0 |
|     +4.2% | +1.03 GB | 62.3% → 64.7% | 24.9 GB → 25.9 GB | 1,101 → 1,137 | `addAll(Collection)`                | java.util.ArrayList                                                  |
|     +2.3% |  +844 MB | 92.6% → 94.4% |   37 GB → 37.8 GB | 1,724 → 1,755 | `copyOf(Object[], int)`             | java.util.Arrays                                                     |
|     +3.7% |  +686 MB | 46.1% → 47.7% | 18.4 GB → 19.1 GB |     867 → 866 | `grow(int)`                         | java.util.ArrayList                                                  |
|     +7.0% |  +266 MB |  9.6% → 10.2% | 3.82 GB → 4.08 GB |     220 → 208 | `grow()`                            | java.util.ArrayList                                                  |
|     +7.0% |  +266 MB |  9.6% → 10.2% | 3.82 GB → 4.08 GB |     220 → 208 | `add(Object, Object[], int)`        | java.util.ArrayList                                                  |
|     +7.0% |  +266 MB |  9.6% → 10.2% | 3.82 GB → 4.08 GB |     220 → 208 | `add(Object)`                       | java.util.ArrayList                                                  |
|     +0.8% |  +254 MB | 84.1% → 84.4% | 33.6 GB → 33.8 GB | 1,526 → 1,557 | `lambda$merge$6(List, List)`        | org.renaissance.jdk.concurrent.JavaKMeans                            |
|     +0.8% |  +254 MB | 84.1% → 84.4% | 33.6 GB → 33.8 GB | 1,526 → 1,557 | `merge(Object, Object, BiFunction)` | java.util.HashMap                                                    |
|     +0.8% |  +254 MB | 84.1% → 84.4% | 33.6 GB → 33.8 GB | 1,526 → 1,557 | `lambda$merge$7(Map, Object, List)` | org.renaissance.jdk.concurrent.JavaKMeans                            |
|     +0.8% |  +254 MB | 84.1% → 84.4% | 33.6 GB → 33.8 GB | 1,526 → 1,557 | `forEach(BiConsumer)`               | java.util.HashMap                                                    |
|       new |  +217 MB |   0.0% → 0.5% |      0 B → 217 MB |       0 → 118 | `invokeStatic(Object, Object)`      | java.lang.invoke.LambdaForm$DMH.0x000000b801001c00                   |
|       new |  +217 MB |   0.0% → 0.5% |      0 B → 217 MB |       0 → 118 | `invoke(Object, Object, Object)`    | java.lang.invoke.LambdaForm$MH.0x000000b801082400                    |
|     +0.6% |  +212 MB | 84.6% → 84.9% |   33.8 GB → 34 GB | 1,541 → 1,570 | `merge(Map, Map)`                   | org.renaissance.jdk.concurrent.JavaKMeans                            |
|     +0.6% |  +212 MB | 84.6% → 84.9% |   33.8 GB → 34 GB | 1,541 → 1,570 | `combineResults(Map, Map)`          | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|     +0.6% |  +212 MB | 84.6% → 84.9% |   33.8 GB → 34 GB | 1,541 → 1,570 | `combineResults(Object, Object)`    | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|       new |  +199 MB |   0.0% → 0.5% |      0 B → 199 MB |        0 → 75 | `applyVoid(Object)`                 | org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000b801198798 |
| +20193.0% |  +166 MB |   0.0% → 0.4% |   824 kB → 167 MB |         2 → 1 | `newString(byte[], long)`           | java.lang.StringConcatHelper                                         |

#### Progressions

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |    Delta |             % |              Size |       Samples | Function                                                  | Location                                                             |
| ------: | -------: | ------------: | ----------------: | ------------: | --------------------------------------------------------- | -------------------------------------------------------------------- |
| removed | -33.6 GB |  84.1% → 0.0% |     33.6 GB → 0 B |     1,526 → 0 | `apply(Object, Object)`                                   | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c001204fd0 |
| removed | -33.6 GB |  84.1% → 0.0% |     33.6 GB → 0 B |     1,526 → 0 | `accept(Object, Object)`                                  | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c001204d88 |
| removed | -8.23 GB |  20.6% → 0.0% |     8.23 GB → 0 B |       186 → 0 | `call()`                                                  | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011ffbc0 |
|   -4.4% | -1.15 GB | 65.4% → 62.3% |   26.1 GB → 25 GB | 1,260 → 1,239 | `awaitDone(int, long)`                                    | java.util.concurrent.ForkJoinTask                                    |
|   -4.4% | -1.15 GB | 65.4% → 62.3% |   26.1 GB → 25 GB | 1,260 → 1,239 | `join()`                                                  | java.util.concurrent.ForkJoinTask                                    |
|   -3.6% |  -911 MB | 64.0% → 61.5% | 25.5 GB → 24.6 GB | 1,242 → 1,222 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | java.util.concurrent.ForkJoinPool$WorkQueue                          |
|   -7.2% |  -613 MB | 21.3% → 19.7% |  8.51 GB → 7.9 GB |           416 | `<init>(Collection)`                                      | java.util.ArrayList                                                  |
|  -13.8% |  -526 MB |   9.5% → 8.2% | 3.81 GB → 3.28 GB |     214 → 198 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | java.util.concurrent.ForkJoinPool                                    |
|   -5.7% |  -492 MB | 21.6% → 20.3% | 8.62 GB → 8.12 GB |     195 → 231 | `invoke()`                                                | java.util.concurrent.ForkJoinTask                                    |
| removed |  -217 MB |   0.5% → 0.0% |      217 MB → 0 B |       117 → 0 | `invokeStatic(Object, Object)`                            | java.lang.invoke.LambdaForm$DMH.0x000000c001001c00                   |
| removed |  -217 MB |   0.5% → 0.0% |      217 MB → 0 B |       117 → 0 | `invoke(Object, Object, Object)`                          | java.lang.invoke.LambdaForm$MH.0x000000c001082400                    |
| removed |  -199 MB |   0.5% → 0.0% |      199 MB → 0 B |        75 → 0 | `applyVoid(Object)`                                       | org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000c001198798 |
|  -94.8% |  -167 MB |   0.4% → 0.0% |  176 MB → 9.14 MB |            14 | `<clinit>()`                                              | scala.Predef$                                                        |
|  -96.7% |  -167 MB |   0.4% → 0.0% |  173 MB → 5.67 MB |             9 | `<clinit>()`                                              | scala.package$                                                       |
|  -98.4% |  -167 MB |   0.4% → 0.0% |  169 MB → 2.64 MB |             4 | `<init>()`                                                | scala.collection.immutable.Iterable$                                 |
|  -98.4% |  -167 MB |   0.4% → 0.0% |  169 MB → 2.64 MB |             4 | `<clinit>()`                                              | scala.collection.immutable.Iterable$                                 |
|  -98.4% |  -167 MB |   0.4% → 0.0% |  169 MB → 2.64 MB |             4 | `<init>()`                                                | scala.collection.Iterable$                                           |
|  -98.4% |  -167 MB |   0.4% → 0.0% |  169 MB → 2.64 MB |             4 | `<clinit>()`                                              | scala.collection.Iterable$                                           |
|  -98.7% |  -167 MB |   0.4% → 0.0% |  169 MB → 2.17 MB |             3 | `<clinit>()`                                              | scala.collection.immutable.List$                                     |
|  -93.5% |  -166 MB |   0.4% → 0.0% |  178 MB → 11.6 MB |       17 → 19 | `getBytes()`                                              | jdk.internal.loader.Resource                                         |


# Lock contention profile diff

Blocked 7.01s → 7.40s (+396.0ms, +5.6%) over 54 samples → 58 samples (129.8ms → 127.7ms per sample).

| Category | Change |    Delta |      % |          Time | Samples |
| -------- | -----: | -------: | -----: | ------------: | ------: |
| ours     |  +5.6% | +396.0ms | 100.0% | 7.01s → 7.40s | 54 → 58 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time blocked directly in the function body, excluding callees.

| Change |    Delta |      % |          Time | Samples | Function              | Location                 |
| -----: | -------: | -----: | ------------: | ------: | --------------------- | ------------------------ |
|  +5.6% | +396.0ms | 100.0% | 7.01s → 7.40s | 54 → 58 | `park(boolean, long)` | jdk.internal.misc.Unsafe |

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

| Change |    Delta |             % |          Time | Samples | Function                                                                                                               | Location                                                             |
| -----: | -------: | ------------: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
|    new |   +6.26s |  0.0% → 84.5% |   0ms → 6.26s |  0 → 16 | `apply(Object)`                                                                                                        | org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000b8011f6c70   |
|    new |   +6.26s |  0.0% → 84.5% |   0ms → 6.26s |  0 → 16 | `applyVoid(Object)`                                                                                                    | org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000b801198798 |
|    new |   +6.26s |  0.0% → 84.5% |   0ms → 6.26s |  0 → 16 | `invokeStatic(Object, Object)`                                                                                         | java.lang.invoke.LambdaForm$DMH.0x000000b801001c00                   |
|    new |   +6.26s |  0.0% → 84.5% |   0ms → 6.26s |  0 → 16 | `invoke(Object, Object, Object)`                                                                                       | java.lang.invoke.LambdaForm$MH.0x000000b801082400                    |
|  +5.6% | +396.0ms |        100.0% | 7.01s → 7.40s | 54 → 58 | `park(boolean, long)`                                                                                                  | jdk.internal.misc.Unsafe                                             |
|  +3.8% | +259.2ms | 97.2% → 95.5% | 6.81s → 7.07s |      46 | `park()`                                                                                                               | java.util.concurrent.locks.LockSupport                               |
|  +3.4% | +205.3ms | 86.4% → 84.5% | 6.05s → 6.26s |      16 | `awaitDone(int, long)`                                                                                                 | java.util.concurrent.ForkJoinTask                                    |
|  +3.4% | +205.3ms | 86.4% → 84.5% | 6.05s → 6.26s |      16 | `get()`                                                                                                                | java.util.concurrent.ForkJoinTask                                    |
|  +3.4% | +205.3ms | 86.4% → 84.5% | 6.05s → 6.26s |      16 | `run(int, List, int)`                                                                                                  | org.renaissance.jdk.concurrent.JavaKMeans                            |
|  +3.4% | +205.3ms | 86.4% → 84.5% | 6.05s → 6.26s |      16 | `$anonfun$1(int)`                                                                                                      | org.renaissance.jdk.concurrent.FjKmeans                              |
|  +3.4% | +205.3ms | 86.4% → 84.5% | 6.05s → 6.26s |      16 | `$anonfun$adapted$1(Object)`                                                                                           | org.renaissance.jdk.concurrent.FjKmeans                              |
|  +3.4% | +205.3ms | 86.4% → 84.5% | 6.05s → 6.26s |      16 | `map(Function1)`                                                                                                       | scala.collection.immutable.Range                                     |
|  +3.4% | +205.3ms | 86.4% → 84.5% | 6.05s → 6.26s |      16 | `run(BenchmarkContext)`                                                                                                | org.renaissance.jdk.concurrent.FjKmeans                              |
|  +3.4% | +205.3ms | 86.4% → 84.5% | 6.05s → 6.26s |      16 | `executeOperation(int)`                                                                                                | org.renaissance.harness.ExecutionDriver                              |
|  +3.4% | +205.3ms | 86.4% → 84.5% | 6.05s → 6.26s |      16 | `executeBenchmark()`                                                                                                   | org.renaissance.harness.ExecutionDriver                              |
|  +3.4% | +205.3ms | 86.4% → 84.5% | 6.05s → 6.26s |      16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | org.renaissance.harness.RenaissanceSuite$                            |
|  +3.4% | +205.3ms | 86.4% → 84.5% | 6.05s → 6.26s |      16 | `apply(Object)`                                                                                                        | scala.runtime.function.JProcedure1                                   |
|  +3.4% | +205.3ms | 86.4% → 84.5% | 6.05s → 6.26s |      16 | `foreach(Function1)`                                                                                                   | scala.collection.immutable.List                                      |
|  +3.4% | +205.3ms | 86.4% → 84.5% | 6.05s → 6.26s |      16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | org.renaissance.harness.RenaissanceSuite$                            |
|  +3.4% | +205.3ms | 86.4% → 84.5% | 6.05s → 6.26s |      16 | `main(String[])`                                                                                                       | org.renaissance.harness.RenaissanceSuite$                            |

#### Progressions

Functions with the largest decrease in total time blocked in the function and all its callees.

|  Change |  Delta |            % |        Time | Samples | Function                         | Location                                                             |
| ------: | -----: | -----------: | ----------: | ------: | -------------------------------- | -------------------------------------------------------------------- |
| removed | -6.05s | 86.4% → 0.0% | 6.05s → 0ms |  16 → 0 | `apply(Object)`                  | org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000c0011f6c70   |
| removed | -6.05s | 86.4% → 0.0% | 6.05s → 0ms |  16 → 0 | `applyVoid(Object)`              | org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000c001198798 |
| removed | -6.05s | 86.4% → 0.0% | 6.05s → 0ms |  16 → 0 | `invokeStatic(Object, Object)`   | java.lang.invoke.LambdaForm$DMH.0x000000c001001c00                   |
| removed | -6.05s | 86.4% → 0.0% | 6.05s → 0ms |  16 → 0 | `invoke(Object, Object, Object)` | java.lang.invoke.LambdaForm$MH.0x000000c001082400                    |

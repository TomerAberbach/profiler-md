# Allocated heap profile diff

Allocated 36.9 GiB → 37 GiB (+119.668 MiB, +0.3%) over 75,164 samples → 75,411 samples (514 KiB per sample).

| Category         | Change |        Delta |             % |                Size |         Samples |
| ---------------- | -----: | -----------: | ------------: | ------------------: | --------------: |
| Standard library |  -0.1% |   -29.83 MiB | 93.3% → 92.9% |            34.4 GiB | 70,115 → 70,063 |
| Ours             |  +5.9% | +149.499 MiB |   6.7% → 7.1% | 2.47 GiB → 2.61 GiB |   5,049 → 5,348 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|  Change |          Delta |            % |                Size |       Samples | Function                                             | Location                                                   |
| ------: | -------------: | -----------: | ------------------: | ------------: | ---------------------------------------------------- | ---------------------------------------------------------- |
|   +4.9% |    +82.499 MiB |  4.4% → 4.6% | 1.63 GiB → 1.71 GiB | 3,346 → 3,511 | `findNearestCentroid()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +24.6% |    +36.499 MiB |  0.4% → 0.5% |   148 MiB → 185 MiB |     297 → 370 | `createSubtask(int, int)`                            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +34.6% |    +22.999 MiB |         0.2% | 66.5 MiB → 89.5 MiB |     133 → 179 | `vectorSum()`                                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +30.8% |    +21.999 MiB |         0.2% | 71.5 MiB → 93.5 MiB |     143 → 187 | `add(double[], double[])`                            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   +9.9% |    +12.999 MiB |  0.3% → 0.4% |   131 MiB → 144 MiB |     262 → 288 | `createSubtask(int, int)`                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +7.7% |     +7.999 MiB |         0.3% |   104 MiB → 112 MiB |     209 → 225 | `resize()`                                           | `java.util.HashMap`                                        |
|  +59.3% |     +7.999 MiB | <0.1% → 0.1% | 13.5 MiB → 21.5 MiB |       27 → 43 | `lambda$generateData$4(int)`                         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  +17.6% |     +4.499 MiB |         0.1% |   25.5 MiB → 30 MiB |       51 → 60 | `mapToObj(IntFunction, int)`                         | `java.util.stream.IntPipeline`                             |
|  +32.0% |     +3.999 MiB |        <0.1% | 12.5 MiB → 16.5 MiB |       25 → 33 | `builder(long, IntFunction)`                         | `java.util.stream.Nodes`                                   |
|  +85.7% |     +2.999 MiB |        <0.1% |   3.5 MiB → 6.5 MiB |        7 → 13 | `computeClusterAverages()`                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  +19.2% |     +2.499 MiB |        <0.1% |   13 MiB → 15.5 MiB |       26 → 31 | `entrySet()`                                         | `java.util.HashMap`                                        |
|   +9.5% |     +1.999 MiB |         0.1% |     21 MiB → 23 MiB |       42 → 46 | `intStream(Spliterator$OfInt, boolean)`              | `java.util.stream.StreamSupport`                           |
|  +20.0% |     +1.999 MiB |        <0.1% |     10 MiB → 12 MiB |       20 → 24 | `opWrapSink(int, Sink)`                              | `java.util.stream.IntPipeline$1`                           |
|  +40.0% | +1,023.998 KiB |        <0.1% |   2.5 MiB → 3.5 MiB |         5 → 7 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                        |
|  +18.2% | +1,023.998 KiB |        <0.1% |   5.5 MiB → 6.5 MiB |       11 → 13 | `createSubtask(int, int)`                            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|     new | +1,023.998 KiB | 0.0% → <0.1% |         0 B → 1 MiB |         0 → 2 | `newString(byte[], int, int)`                        | `java.lang.StringLatin1`                                   |
|  +11.1% |   +511.999 KiB |        <0.1% |     4.5 MiB → 5 MiB |        9 → 10 | `<init>(InputStream, Inflater, int)`                 | `java.util.zip.InflaterInputStream`                        |
|     new |   +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |         0 → 1 | `visitMethod(int, String, String, String, String[])` | `jdk.internal.org.objectweb.asm.ClassWriter`               |
| +100.0% |   +511.999 KiB |        <0.1% |     512 KiB → 1 MiB |         1 → 2 | `fillInStackTrace(int)`                              | `java.lang.Throwable`                                      |
|  +20.0% |   +511.999 KiB |        <0.1% |     2.5 MiB → 3 MiB |         5 → 6 | `allocateInstance(Class)`                            | `jdk.internal.misc.Unsafe`                                 |

##### Standard library

|  Change |          Delta |            % |                Size |   Samples | Function                                             | Location                                     |
| ------: | -------------: | -----------: | ------------------: | --------: | ---------------------------------------------------- | -------------------------------------------- |
|   +7.7% |     +7.999 MiB |         0.3% |   104 MiB → 112 MiB | 209 → 225 | `resize()`                                           | `java.util.HashMap`                          |
|  +17.6% |     +4.499 MiB |         0.1% |   25.5 MiB → 30 MiB |   51 → 60 | `mapToObj(IntFunction, int)`                         | `java.util.stream.IntPipeline`               |
|  +32.0% |     +3.999 MiB |        <0.1% | 12.5 MiB → 16.5 MiB |   25 → 33 | `builder(long, IntFunction)`                         | `java.util.stream.Nodes`                     |
|  +19.2% |     +2.499 MiB |        <0.1% |   13 MiB → 15.5 MiB |   26 → 31 | `entrySet()`                                         | `java.util.HashMap`                          |
|   +9.5% |     +1.999 MiB |         0.1% |     21 MiB → 23 MiB |   42 → 46 | `intStream(Spliterator$OfInt, boolean)`              | `java.util.stream.StreamSupport`             |
|  +20.0% |     +1.999 MiB |        <0.1% |     10 MiB → 12 MiB |   20 → 24 | `opWrapSink(int, Sink)`                              | `java.util.stream.IntPipeline$1`             |
|  +40.0% | +1,023.998 KiB |        <0.1% |   2.5 MiB → 3.5 MiB |     5 → 7 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`          |
|     new | +1,023.998 KiB | 0.0% → <0.1% |         0 B → 1 MiB |     0 → 2 | `newString(byte[], int, int)`                        | `java.lang.StringLatin1`                     |
|  +11.1% |   +511.999 KiB |        <0.1% |     4.5 MiB → 5 MiB |    9 → 10 | `<init>(InputStream, Inflater, int)`                 | `java.util.zip.InflaterInputStream`          |
|     new |   +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |     0 → 1 | `visitMethod(int, String, String, String, String[])` | `jdk.internal.org.objectweb.asm.ClassWriter` |
| +100.0% |   +511.999 KiB |        <0.1% |     512 KiB → 1 MiB |     1 → 2 | `fillInStackTrace(int)`                              | `java.lang.Throwable`                        |
|  +20.0% |   +511.999 KiB |        <0.1% |     2.5 MiB → 3 MiB |     5 → 6 | `allocateInstance(Class)`                            | `jdk.internal.misc.Unsafe`                   |
|  +50.0% |   +511.999 KiB |        <0.1% |     1 MiB → 1.5 MiB |     2 → 3 | `spliterator(double[], int, int, int)`               | `java.util.Spliterators`                     |
|     new |   +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |     0 → 1 | `update(long)`                                       | `sun.util.calendar.ZoneInfoFile$Checksum`    |
|     new |   +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |     0 → 1 | `resolveOrFail(byte, Class, String, MethodType)`     | `java.lang.invoke.MethodHandles$Lookup`      |
|     new |   +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |     0 → 1 | `<clinit>()`                                         | `sun.security.util.KnownOIDs`                |
|     new |   +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |     0 → 1 | `<init>(InputStream, int)`                           | `java.util.jar.Manifest$FastInputStream`     |
|     new |   +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |     0 → 1 | `<init>(int)`                                        | `java.io.ByteArrayOutputStream`              |
|     new |   +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |     0 → 1 | `<init>(int)`                                        | `java.lang.AbstractStringBuilder`            |
|     new |   +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |     0 → 1 | `readLine()`                                         | `java.util.Properties$LineReader`            |

##### Ours

|  Change |          Delta |            % |                Size |       Samples | Function                     | Location                                                   |
| ------: | -------------: | -----------: | ------------------: | ------------: | ---------------------------- | ---------------------------------------------------------- |
|   +4.9% |    +82.499 MiB |  4.4% → 4.6% | 1.63 GiB → 1.71 GiB | 3,346 → 3,511 | `findNearestCentroid()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +24.6% |    +36.499 MiB |  0.4% → 0.5% |   148 MiB → 185 MiB |     297 → 370 | `createSubtask(int, int)`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +34.6% |    +22.999 MiB |         0.2% | 66.5 MiB → 89.5 MiB |     133 → 179 | `vectorSum()`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +30.8% |    +21.999 MiB |         0.2% | 71.5 MiB → 93.5 MiB |     143 → 187 | `add(double[], double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   +9.9% |    +12.999 MiB |  0.3% → 0.4% |   131 MiB → 144 MiB |     262 → 288 | `createSubtask(int, int)`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +59.3% |     +7.999 MiB | <0.1% → 0.1% | 13.5 MiB → 21.5 MiB |       27 → 43 | `lambda$generateData$4(int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  +85.7% |     +2.999 MiB |        <0.1% |   3.5 MiB → 6.5 MiB |        7 → 13 | `computeClusterAverages()`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  +18.2% | +1,023.998 KiB |        <0.1% |   5.5 MiB → 6.5 MiB |       11 → 13 | `createSubtask(int, int)`    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| +100.0% |   +511.999 KiB |        <0.1% |     512 KiB → 1 MiB |         1 → 2 | `lambda$boxed$0(int)`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|     new |   +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |         0 → 1 | `<init>(JavaKMeans, Map)`    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |          Delta |             % |                Size |         Samples | Function                                     | Location                                                   |
| ------: | -------------: | ------------: | ------------------: | --------------: | -------------------------------------------- | ---------------------------------------------------------- |
|   -6.2% |    -16.999 MiB |          0.7% |   274 MiB → 257 MiB |       549 → 515 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                                        |
|  -17.9% |    -13.999 MiB |          0.2% |     78 MiB → 64 MiB |       156 → 128 | `merge(Map, Map)`                            | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -11.9% |    -13.499 MiB |          0.3% |  113 MiB → 99.5 MiB |       226 → 199 | `collectClusters(int[])`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     ~0% |     -12.22 MiB | 91.0% → 90.7% | 33.6 GiB → 33.5 GiB | 68,399 → 68,382 | `copyOf(Object[], int)`                      | `java.util.Arrays`                                         |
|   -8.2% |     -8.499 MiB |          0.3% |  104 MiB → 95.5 MiB |       208 → 191 | `lambda$collectClusters$0(Double[])`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -36.9% |      -8.11 MiB |  0.1% → <0.1% |   22 MiB → 13.9 MiB |         38 → 22 | `copyOf(Object[], int, Class)`               | `java.util.Arrays`                                         |
|  -34.4% |     -5.499 MiB |         <0.1% |   16 MiB → 10.5 MiB |         32 → 21 | `allocateInstance(Object)`                   | `java.lang.invoke.DirectMethodHandle`                      |
|  -31.0% |     -4.499 MiB |         <0.1% |   14.5 MiB → 10 MiB |         29 → 20 | `range(int, int)`                            | `java.util.stream.IntStream`                               |
|   -3.1% |     -3.499 MiB |          0.3% |   112 MiB → 108 MiB |       224 → 217 | `lambda$merge$6(List, List)`                 | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|   -5.4% |     -3.499 MiB |          0.2% |   64.5 MiB → 61 MiB |       129 → 122 | `valueOf(double)`                            | `java.lang.Double`                                         |
|  -12.9% |     -1.999 MiB |         <0.1% | 15.5 MiB → 13.5 MiB |         31 → 27 | `copyOf(byte[], int)`                        | `java.util.Arrays`                                         |
|   -0.6% |     -1.499 MiB |          0.6% |   244 MiB → 243 MiB |       489 → 486 | `grow(int)`                                  | `java.util.ArrayList`                                      |
| removed |     -1.499 MiB |  <0.1% → 0.0% |       1.5 MiB → 0 B |           3 → 0 | `copyOfRangeByte(byte[], int, int)`          | `java.util.Arrays`                                         |
|  -66.7% | -1,023.998 KiB |         <0.1% |   1.5 MiB → 512 KiB |           3 → 1 | `readNBytes(int)`                            | `java.io.InputStream`                                      |
|  -50.0% | -1,023.998 KiB |         <0.1% |       2 MiB → 1 MiB |           4 → 2 | `div(double[], int)`                         | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| removed |   -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `opWrapSink(int, Sink)`                      | `java.util.stream.DoublePipeline$1`                        |
| removed |   -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `iterator()`                                 | `java.util.HashMap$EntrySet`                               |
|  -50.0% |   -511.999 KiB |         <0.1% |     1 MiB → 512 KiB |           2 → 1 | `mapToObj(DoubleFunction, int)`              | `java.util.stream.DoublePipeline`                          |
| removed |   -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `clone()`                                    | `java.lang.Object`                                         |
|  -50.0% |   -511.999 KiB |         <0.1% |     1 MiB → 512 KiB |           2 → 1 | `putVal(Object, Object, boolean)`            | `java.util.concurrent.ConcurrentHashMap`                   |

##### Standard library

|  Change |          Delta |             % |                Size |         Samples | Function                                                                        | Location                                 |
| ------: | -------------: | ------------: | ------------------: | --------------: | ------------------------------------------------------------------------------- | ---------------------------------------- |
|   -6.2% |    -16.999 MiB |          0.7% |   274 MiB → 257 MiB |       549 → 515 | `newNode(int, Object, Object, HashMap$Node)`                                    | `java.util.HashMap`                      |
|     ~0% |     -12.22 MiB | 91.0% → 90.7% | 33.6 GiB → 33.5 GiB | 68,399 → 68,382 | `copyOf(Object[], int)`                                                         | `java.util.Arrays`                       |
|  -36.9% |      -8.11 MiB |  0.1% → <0.1% |   22 MiB → 13.9 MiB |         38 → 22 | `copyOf(Object[], int, Class)`                                                  | `java.util.Arrays`                       |
|  -34.4% |     -5.499 MiB |         <0.1% |   16 MiB → 10.5 MiB |         32 → 21 | `allocateInstance(Object)`                                                      | `java.lang.invoke.DirectMethodHandle`    |
|  -31.0% |     -4.499 MiB |         <0.1% |   14.5 MiB → 10 MiB |         29 → 20 | `range(int, int)`                                                               | `java.util.stream.IntStream`             |
|   -5.4% |     -3.499 MiB |          0.2% |   64.5 MiB → 61 MiB |       129 → 122 | `valueOf(double)`                                                               | `java.lang.Double`                       |
|  -12.9% |     -1.999 MiB |         <0.1% | 15.5 MiB → 13.5 MiB |         31 → 27 | `copyOf(byte[], int)`                                                           | `java.util.Arrays`                       |
|   -0.6% |     -1.499 MiB |          0.6% |   244 MiB → 243 MiB |       489 → 486 | `grow(int)`                                                                     | `java.util.ArrayList`                    |
| removed |     -1.499 MiB |  <0.1% → 0.0% |       1.5 MiB → 0 B |           3 → 0 | `copyOfRangeByte(byte[], int, int)`                                             | `java.util.Arrays`                       |
|  -66.7% | -1,023.998 KiB |         <0.1% |   1.5 MiB → 512 KiB |           3 → 1 | `readNBytes(int)`                                                               | `java.io.InputStream`                    |
| removed |   -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `opWrapSink(int, Sink)`                                                         | `java.util.stream.DoublePipeline$1`      |
| removed |   -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `iterator()`                                                                    | `java.util.HashMap$EntrySet`             |
|  -50.0% |   -511.999 KiB |         <0.1% |     1 MiB → 512 KiB |           2 → 1 | `mapToObj(DoubleFunction, int)`                                                 | `java.util.stream.DoublePipeline`        |
| removed |   -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `clone()`                                                                       | `java.lang.Object`                       |
|  -50.0% |   -511.999 KiB |         <0.1% |     1 MiB → 512 KiB |           2 → 1 | `putVal(Object, Object, boolean)`                                               | `java.util.concurrent.ConcurrentHashMap` |
| removed |   -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `<init>(MethodType)`                                                            | `java.lang.invoke.MethodTypeForm`        |
|  -50.0% |   -511.999 KiB |         <0.1% |     1 MiB → 512 KiB |           2 → 1 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                  |
| removed |   -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `urlNoFragString(URL)`                                                          | `sun.net.util.URLUtil`                   |
| removed |   -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])`                  | `java.util.concurrent.ConcurrentHashMap` |
| removed |   -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `replace(byte[], char, char)`                                                   | `java.lang.StringLatin1`                 |

##### Ours

| Change |          Delta |     % |               Size |   Samples | Function                             | Location                                                   |
| -----: | -------------: | ----: | -----------------: | --------: | ------------------------------------ | ---------------------------------------------------------- |
| -17.9% |    -13.999 MiB |  0.2% |    78 MiB → 64 MiB | 156 → 128 | `merge(Map, Map)`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| -11.9% |    -13.499 MiB |  0.3% | 113 MiB → 99.5 MiB | 226 → 199 | `collectClusters(int[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -8.2% |     -8.499 MiB |  0.3% | 104 MiB → 95.5 MiB | 208 → 191 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -3.1% |     -3.499 MiB |  0.3% |  112 MiB → 108 MiB | 224 → 217 | `lambda$merge$6(List, List)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| -50.0% | -1,023.998 KiB | <0.1% |      2 MiB → 1 MiB |     4 → 2 | `div(double[], int)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                Size |         Samples | Function                                                                                                               | Location                                                               |
| ------: | -----------: | ------------: | ------------------: | --------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|   +1.1% | +319.499 MiB | 78.5% → 79.1% | 28.9 GiB → 29.2 GiB | 59,255 → 59,894 | `tryRemoveAndExec(ForkJoinTask, boolean)`                                                                              | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|   +0.9% | +263.499 MiB | 79.4% → 79.9% | 29.3 GiB → 29.5 GiB | 59,961 → 60,488 | `awaitDone(int, long)`                                                                                                 | `java.util.concurrent.ForkJoinTask`                                    |
|   +0.9% | +263.499 MiB | 79.4% → 79.9% | 29.3 GiB → 29.5 GiB | 59,961 → 60,488 | `join()`                                                                                                               | `java.util.concurrent.ForkJoinTask`                                    |
|   +3.1% | +250.999 MiB | 21.8% → 22.4% | 8.03 GiB → 8.28 GiB | 16,451 → 16,953 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|     new |  +201.35 MiB |   0.0% → 0.5% |       0 B → 201 MiB |         0 → 397 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|   +3.2% | +193.389 MiB | 16.3% → 16.7% | 5.99 GiB → 6.18 GiB | 12,266 → 12,653 | `grow()`                                                                                                               | `java.util.ArrayList`                                                  |
|   +3.2% | +193.389 MiB | 16.3% → 16.7% | 5.99 GiB → 6.18 GiB | 12,266 → 12,653 | `add(Object, Object[], int)`                                                                                           | `java.util.ArrayList`                                                  |
|   +3.2% | +193.389 MiB | 16.3% → 16.7% | 5.99 GiB → 6.18 GiB | 12,266 → 12,653 | `add(Object)`                                                                                                          | `java.util.ArrayList`                                                  |
|   +2.6% | +168.499 MiB | 17.4% → 17.8% |  6.4 GiB → 6.56 GiB | 13,105 → 13,442 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| +191.3% | +120.499 MiB |   0.2% → 0.5% |    63 MiB → 183 MiB |       126 → 367 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000005011a2150` |
|   +0.3% | +115.779 MiB |         99.4% | 36.6 GiB → 36.8 GiB | 74,738 → 74,977 | `doExec()`                                                                                                             | `java.util.concurrent.ForkJoinTask`                                    |
|   +0.3% | +115.779 MiB |         99.4% | 36.6 GiB → 36.8 GiB | 74,738 → 74,977 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`                                                                   | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|   +0.3% | +115.779 MiB |         99.4% | 36.6 GiB → 36.8 GiB | 74,738 → 74,977 | `scan(ForkJoinPool$WorkQueue, int, int)`                                                                               | `java.util.concurrent.ForkJoinPool`                                    |
|   +0.3% | +115.779 MiB |         99.4% | 36.6 GiB → 36.8 GiB | 74,738 → 74,977 | `runWorker(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`                                    |
|   +0.3% | +115.779 MiB |         99.4% | 36.6 GiB → 36.8 GiB | 74,738 → 74,977 | `run()`                                                                                                                | `java.util.concurrent.ForkJoinWorkerThread`                            |
|   +0.3% | +115.279 MiB |         99.4% | 36.6 GiB → 36.8 GiB | 74,735 → 74,973 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|   +0.3% | +115.279 MiB |         99.4% | 36.6 GiB → 36.8 GiB | 74,735 → 74,973 | `exec()`                                                                                                               | `java.util.concurrent.RecursiveTask`                                   |
|   +0.5% |  +92.668 MiB | 52.7% → 52.8% | 19.4 GiB → 19.5 GiB | 39,457 → 39,650 | `grow(int)`                                                                                                            | `java.util.ArrayList`                                                  |
|   +4.9% |  +82.499 MiB |   4.4% → 4.6% | 1.63 GiB → 1.71 GiB |   3,346 → 3,511 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  +38.2% |  +67.499 MiB |   0.5% → 0.6% |   176 MiB → 244 MiB |       353 → 488 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |

##### Standard library

| Change |        Delta |             % |                Size |         Samples | Function                                                  | Location                                      |
| -----: | -----------: | ------------: | ------------------: | --------------: | --------------------------------------------------------- | --------------------------------------------- |
|  +1.1% | +319.499 MiB | 78.5% → 79.1% | 28.9 GiB → 29.2 GiB | 59,255 → 59,894 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  +0.9% | +263.499 MiB | 79.4% → 79.9% | 29.3 GiB → 29.5 GiB | 59,961 → 60,488 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`           |
|  +0.9% | +263.499 MiB | 79.4% → 79.9% | 29.3 GiB → 29.5 GiB | 59,961 → 60,488 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`           |
|  +3.2% | +193.389 MiB | 16.3% → 16.7% | 5.99 GiB → 6.18 GiB | 12,266 → 12,653 | `grow()`                                                  | `java.util.ArrayList`                         |
|  +3.2% | +193.389 MiB | 16.3% → 16.7% | 5.99 GiB → 6.18 GiB | 12,266 → 12,653 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                         |
|  +3.2% | +193.389 MiB | 16.3% → 16.7% | 5.99 GiB → 6.18 GiB | 12,266 → 12,653 | `add(Object)`                                             | `java.util.ArrayList`                         |
|  +0.3% | +115.779 MiB |         99.4% | 36.6 GiB → 36.8 GiB | 74,738 → 74,977 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`           |
|  +0.3% | +115.779 MiB |         99.4% | 36.6 GiB → 36.8 GiB | 74,738 → 74,977 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  +0.3% | +115.779 MiB |         99.4% | 36.6 GiB → 36.8 GiB | 74,738 → 74,977 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`           |
|  +0.3% | +115.779 MiB |         99.4% | 36.6 GiB → 36.8 GiB | 74,738 → 74,977 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`           |
|  +0.3% | +115.779 MiB |         99.4% | 36.6 GiB → 36.8 GiB | 74,738 → 74,977 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`   |
|  +0.3% | +115.279 MiB |         99.4% | 36.6 GiB → 36.8 GiB | 74,735 → 74,973 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`          |
|  +0.5% |  +92.668 MiB | 52.7% → 52.8% | 19.4 GiB → 19.5 GiB | 39,457 → 39,650 | `grow(int)`                                               | `java.util.ArrayList`                         |
|  +0.5% |  +27.499 MiB | 14.3% → 14.4% | 5.28 GiB → 5.31 GiB | 10,815 → 10,870 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
| +47.2% |  +12.499 MiB |          0.1% |   26.5 MiB → 39 MiB |         53 → 78 | `builder(long, IntFunction)`                              | `java.util.stream.Nodes`                      |
| +47.2% |  +12.499 MiB |          0.1% |   26.5 MiB → 39 MiB |         53 → 78 | `makeNodeBuilder(long, IntFunction)`                      | `java.util.stream.ReferencePipeline`          |
|  +6.4% |  +11.889 MiB |          0.5% |   184 MiB → 196 MiB |       363 → 387 | `copyInto(Sink, Spliterator)`                             | `java.util.stream.AbstractPipeline`           |
|  +6.2% |  +11.389 MiB |          0.5% |   185 MiB → 196 MiB |       364 → 387 | `wrapAndCopyInto(Sink, Spliterator)`                      | `java.util.stream.AbstractPipeline`           |
|  +6.2% |  +11.389 MiB |          0.5% |   183 MiB → 194 MiB |       360 → 383 | `evaluateSequential(PipelineHelper, Spliterator)`         | `java.util.stream.ReduceOps$ReduceOp`         |
|  +6.2% |  +11.389 MiB |          0.5% |   183 MiB → 194 MiB |       360 → 383 | `evaluate(TerminalOp)`                                    | `java.util.stream.AbstractPipeline`           |

##### Ours

|  Change |        Delta |             % |                Size |         Samples | Function                                                                                                               | Location                                                               |
| ------: | -----------: | ------------: | ------------------: | --------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|   +3.1% | +250.999 MiB | 21.8% → 22.4% | 8.03 GiB → 8.28 GiB | 16,451 → 16,953 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|     new |  +201.35 MiB |   0.0% → 0.5% |       0 B → 201 MiB |         0 → 397 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|   +2.6% | +168.499 MiB | 17.4% → 17.8% |  6.4 GiB → 6.56 GiB | 13,105 → 13,442 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| +191.3% | +120.499 MiB |   0.2% → 0.5% |    63 MiB → 183 MiB |       126 → 367 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000005011a2150` |
|   +0.3% | +115.279 MiB |         99.4% | 36.6 GiB → 36.8 GiB | 74,735 → 74,973 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|   +4.9% |  +82.499 MiB |   4.4% → 4.6% | 1.63 GiB → 1.71 GiB |   3,346 → 3,511 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  +38.2% |  +67.499 MiB |   0.5% → 0.6% |   176 MiB → 244 MiB |       353 → 488 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  +38.2% |  +67.499 MiB |   0.5% → 0.6% |   176 MiB → 244 MiB |       353 → 488 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  +39.2% |  +64.999 MiB |   0.4% → 0.6% |   166 MiB → 231 MiB |       332 → 462 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  +24.6% |  +36.499 MiB |   0.4% → 0.5% |   148 MiB → 185 MiB |       297 → 370 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  +34.6% |  +22.999 MiB |          0.2% | 66.5 MiB → 89.5 MiB |       133 → 179 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  +34.6% |  +22.999 MiB |          0.2% | 66.5 MiB → 89.5 MiB |       133 → 179 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  +30.8% |  +21.999 MiB |          0.2% | 71.5 MiB → 93.5 MiB |       143 → 187 | `add(double[], double[])`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  +30.8% |  +21.999 MiB |          0.2% | 71.5 MiB → 93.5 MiB |       143 → 187 | `combineResults(double[], double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  +30.8% |  +21.999 MiB |          0.2% | 71.5 MiB → 93.5 MiB |       143 → 187 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   +9.9% |  +12.999 MiB |   0.3% → 0.4% |   131 MiB → 144 MiB |       262 → 288 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   +6.8% |  +12.389 MiB |          0.5% |   183 MiB → 195 MiB |       360 → 385 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  +59.3% |   +7.999 MiB |  <0.1% → 0.1% | 13.5 MiB → 21.5 MiB |         27 → 43 | `lambda$generateData$4(int)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +59.3% |   +7.999 MiB |  <0.1% → 0.1% | 13.5 MiB → 21.5 MiB |         27 → 43 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000005011a25c0` |
|   +4.3% |   +7.499 MiB |          0.5% |   176 MiB → 183 MiB |       352 → 367 | `lambda$generateData$5(int, int, Random[], int)`                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                Size |         Samples | Function                                                                                                               | Location                                                               |
| ------: | -----------: | ------------: | ------------------: | --------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|   -0.8% | -232.719 MiB | 76.5% → 75.6% |   28.2 GiB → 28 GiB | 57,406 → 56,948 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -0.8% | -232.719 MiB | 76.5% → 75.6% |   28.2 GiB → 28 GiB | 57,398 → 56,940 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -0.8% | -232.719 MiB | 76.5% → 75.6% |   28.2 GiB → 28 GiB | 57,398 → 56,940 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -0.8% | -219.719 MiB | 75.8% → 75.0% | 27.9 GiB → 27.7 GiB | 56,889 → 56,457 | `merge(Object, Object, BiFunction)`                                                                                    | `java.util.HashMap`                                                    |
|   -0.8% | -219.719 MiB | 75.8% → 75.0% | 27.9 GiB → 27.7 GiB | 56,889 → 56,457 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -0.8% | -219.719 MiB | 75.8% → 75.0% | 27.9 GiB → 27.7 GiB | 56,889 → 56,457 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000005011a7000` |
|   -0.8% | -219.719 MiB | 75.8% → 75.0% | 27.9 GiB → 27.7 GiB | 56,889 → 56,457 | `forEach(BiConsumer)`                                                                                                  | `java.util.HashMap`                                                    |
|   -0.8% | -218.719 MiB | 75.8% → 75.0% | 27.9 GiB → 27.7 GiB | 56,884 → 56,454 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -0.8% | -218.719 MiB | 75.8% → 75.0% | 27.9 GiB → 27.7 GiB | 56,884 → 56,454 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000005011a7248` |
|   -1.0% | -208.719 MiB | 56.5% → 55.8% | 20.8 GiB → 20.6 GiB | 42,363 → 41,953 | `addAll(Collection)`                                                                                                   | `java.util.ArrayList`                                                  |
| removed |  -195.46 MiB |   0.5% → 0.0% |       195 MiB → 0 B |         385 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|   -1.7% |  -129.72 MiB | 20.6% → 20.2% | 7.61 GiB → 7.48 GiB | 15,262 → 15,010 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -1.7% |  -129.72 MiB | 20.6% → 20.2% | 7.61 GiB → 7.48 GiB | 15,262 → 15,010 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000005011a2bd0` |
|   -1.7% |  -129.72 MiB | 20.6% → 20.2% | 7.61 GiB → 7.48 GiB | 15,262 → 15,010 | `exec()`                                                                                                               | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                    |
|  -66.5% | -116.999 MiB |   0.5% → 0.2% |    176 MiB → 59 MiB |       352 → 118 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000005011a2388` |
|   -0.8% | -114.499 MiB | 39.0% → 38.6% | 14.4 GiB → 14.3 GiB | 29,469 → 29,240 | `toArray()`                                                                                                            | `java.util.ArrayList`                                                  |
|   -0.9% |   -69.72 MiB | 21.0% → 20.8% | 7.75 GiB → 7.68 GiB | 15,561 → 15,429 | `invoke()`                                                                                                             | `java.util.concurrent.ForkJoinTask`                                    |
|   -0.1% |   -20.33 MiB | 91.1% → 90.7% |            33.6 GiB | 68,437 → 68,404 | `copyOf(Object[], int)`                                                                                                | `java.util.Arrays`                                                     |
|   -6.2% |  -16.999 MiB |          0.7% |   274 MiB → 257 MiB |       549 → 515 | `newNode(int, Object, Object, HashMap$Node)`                                                                           | `java.util.HashMap`                                                    |
|   -4.2% |  -12.999 MiB |          0.8% |   310 MiB → 297 MiB |       621 → 595 | `computeIfAbsent(Object, Function)`                                                                                    | `java.util.HashMap`                                                    |

##### Standard library

| Change |        Delta |             % |                Size |         Samples | Function                                                                        | Location                                             |
| -----: | -----------: | ------------: | ------------------: | --------------: | ------------------------------------------------------------------------------- | ---------------------------------------------------- |
|  -0.8% | -219.719 MiB | 75.8% → 75.0% | 27.9 GiB → 27.7 GiB | 56,889 → 56,457 | `merge(Object, Object, BiFunction)`                                             | `java.util.HashMap`                                  |
|  -0.8% | -219.719 MiB | 75.8% → 75.0% | 27.9 GiB → 27.7 GiB | 56,889 → 56,457 | `forEach(BiConsumer)`                                                           | `java.util.HashMap`                                  |
|  -1.0% | -208.719 MiB | 56.5% → 55.8% | 20.8 GiB → 20.6 GiB | 42,363 → 41,953 | `addAll(Collection)`                                                            | `java.util.ArrayList`                                |
|  -1.7% |  -129.72 MiB | 20.6% → 20.2% | 7.61 GiB → 7.48 GiB | 15,262 → 15,010 | `exec()`                                                                        | `java.util.concurrent.ForkJoinTask$AdaptedCallable`  |
|  -0.8% | -114.499 MiB | 39.0% → 38.6% | 14.4 GiB → 14.3 GiB | 29,469 → 29,240 | `toArray()`                                                                     | `java.util.ArrayList`                                |
|  -0.9% |   -69.72 MiB | 21.0% → 20.8% | 7.75 GiB → 7.68 GiB | 15,561 → 15,429 | `invoke()`                                                                      | `java.util.concurrent.ForkJoinTask`                  |
|  -0.1% |   -20.33 MiB | 91.1% → 90.7% |            33.6 GiB | 68,437 → 68,404 | `copyOf(Object[], int)`                                                         | `java.util.Arrays`                                   |
|  -6.2% |  -16.999 MiB |          0.7% |   274 MiB → 257 MiB |       549 → 515 | `newNode(int, Object, Object, HashMap$Node)`                                    | `java.util.HashMap`                                  |
|  -4.2% |  -12.999 MiB |          0.8% |   310 MiB → 297 MiB |       621 → 595 | `computeIfAbsent(Object, Function)`                                             | `java.util.HashMap`                                  |
| -36.9% |    -8.11 MiB |  0.1% → <0.1% |   22 MiB → 13.9 MiB |         38 → 22 | `copyOf(Object[], int, Class)`                                                  | `java.util.Arrays`                                   |
|  -0.1% |   -6.499 MiB |         18.9% | 6.98 GiB → 6.97 GiB | 14,297 → 14,284 | `<init>(Collection)`                                                            | `java.util.ArrayList`                                |
| -27.0% |   -4.999 MiB |         <0.1% | 18.5 MiB → 13.5 MiB |         37 → 27 | `allocateInstance(Object)`                                                      | `java.lang.invoke.DirectMethodHandle`                |
| -30.3% |   -4.999 MiB |         <0.1% | 16.5 MiB → 11.5 MiB |         33 → 23 | `newInvokeSpecial(Object, int, int, Object)`                                    | `java.lang.invoke.LambdaForm$DMH.0x00000005011a4400` |
| -30.3% |   -4.999 MiB |         <0.1% | 16.5 MiB → 11.5 MiB |         33 → 23 | `linkToTargetMethod(int, int, Object, Object)`                                  | `java.lang.invoke.LambdaForm$MH.0x00000005011a4c00`  |
| -39.1% |   -4.499 MiB |         <0.1% |    11.5 MiB → 7 MiB |         23 → 14 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                              |
| -37.5% |   -4.499 MiB |         <0.1% |    12 MiB → 7.5 MiB |         24 → 15 | `defineClass(String, byte[], int, int, ProtectionDomain)`                       | `java.lang.ClassLoader`                              |
| -37.5% |   -4.499 MiB |         <0.1% |    12 MiB → 7.5 MiB |         24 → 15 | `defineClass(String, byte[], int, int, CodeSource)`                             | `java.security.SecureClassLoader`                    |
|  -2.1% |   -3.499 MiB |   0.5% → 0.4% |   170 MiB → 166 MiB |       340 → 333 | `putVal(int, Object, Object, boolean, boolean)`                                 | `java.util.HashMap`                                  |
|  -5.4% |   -3.499 MiB |          0.2% |   64.5 MiB → 61 MiB |       129 → 122 | `valueOf(double)`                                                               | `java.lang.Double`                                   |
| -31.8% |   -3.499 MiB |         <0.1% |    11 MiB → 7.5 MiB |         22 → 15 | `<clinit>()`                                                                    | `scala.Predef$`                                      |

##### Ours

|  Change |          Delta |             % |                Size |         Samples | Function                                                                                                               | Location                                                                              |
| ------: | -------------: | ------------: | ------------------: | --------------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|   -0.8% |   -232.719 MiB | 76.5% → 75.6% |   28.2 GiB → 28 GiB | 57,406 → 56,948 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|   -0.8% |   -232.719 MiB | 76.5% → 75.6% |   28.2 GiB → 28 GiB | 57,398 → 56,940 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   -0.8% |   -232.719 MiB | 76.5% → 75.6% |   28.2 GiB → 28 GiB | 57,398 → 56,940 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   -0.8% |   -219.719 MiB | 75.8% → 75.0% | 27.9 GiB → 27.7 GiB | 56,889 → 56,457 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|   -0.8% |   -219.719 MiB | 75.8% → 75.0% | 27.9 GiB → 27.7 GiB | 56,889 → 56,457 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000005011a7000`                |
|   -0.8% |   -218.719 MiB | 75.8% → 75.0% | 27.9 GiB → 27.7 GiB | 56,884 → 56,454 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|   -0.8% |   -218.719 MiB | 75.8% → 75.0% | 27.9 GiB → 27.7 GiB | 56,884 → 56,454 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000005011a7248`                |
| removed |    -195.46 MiB |   0.5% → 0.0% |       195 MiB → 0 B |         385 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                           |
|   -1.7% |    -129.72 MiB | 20.6% → 20.2% | 7.61 GiB → 7.48 GiB | 15,262 → 15,010 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|   -1.7% |    -129.72 MiB | 20.6% → 20.2% | 7.61 GiB → 7.48 GiB | 15,262 → 15,010 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000005011a2bd0`                |
|  -66.5% |   -116.999 MiB |   0.5% → 0.2% |    176 MiB → 59 MiB |       352 → 118 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000005011a2388`                |
|  -81.8% |     -8.999 MiB |         <0.1% |      11 MiB → 2 MiB |          22 → 4 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                                             |
|   -8.2% |     -8.499 MiB |          0.3% |  104 MiB → 95.5 MiB |       208 → 191 | `lambda$collectClusters$0(Double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   -8.2% |     -8.499 MiB |          0.3% |  104 MiB → 95.5 MiB |       208 → 191 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000005011a3940` |
|  -62.5% |     -7.499 MiB |         <0.1% |    12 MiB → 4.5 MiB |          24 → 9 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                                             |
|   -6.3% |     -3.999 MiB |          0.2% |     63 MiB → 59 MiB |       126 → 118 | `lambda$generateData$3(int, int, Random[], int)`                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
| removed |     -1.999 MiB |  <0.1% → 0.0% |         2 MiB → 0 B |           4 → 0 | `$anonfun$1(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`                                             |
|  -50.0% | -1,023.998 KiB |         <0.1% |       2 MiB → 1 MiB |           4 → 2 | `div(double[], int)`                                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|  -33.3% |   -511.999 KiB |         <0.1% |     1.5 MiB → 1 MiB |           3 → 2 | `createHandler()`                                                                                                      | `org.renaissance.core.Logging`                                                        |
|  -33.3% |   -511.999 KiB |         <0.1% |     1.5 MiB → 1 MiB |           3 → 2 | `createRootLogger()`                                                                                                   | `org.renaissance.core.Logging`                                                        |

# Retained heap profile diff

Retained 15.8 MiB → 30.5 MiB (+14.748 MiB, +93.4%) over 393 objects → 825 objects (41.2 KiB → 37.9 KiB per object).

| Category         |  Change |       Delta |     % |                Size |   Objects |
| ---------------- | ------: | ----------: | ----: | ------------------: | --------: |
| Standard library |  +93.2% | +14.711 MiB | 99.9% | 15.8 MiB → 30.5 MiB | 354 → 743 |
| Ours             | +409.5% |  +37.46 KiB |  0.1% | 9.15 KiB → 46.6 KiB |   39 → 82 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

|  Change |       Delta |             % |                Size |   Objects | Function                                                                        | Location                                                   |
| ------: | ----------: | ------------: | ------------------: | --------: | ------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| +107.2% | +14.711 MiB | 86.9% → 93.1% | 13.7 MiB → 28.4 MiB | 216 → 604 | `copyOf(Object[], int)`                                                         | `java.util.Arrays`                                         |
| +474.4% | +36.546 KiB |  <0.1% → 0.1% |  7.7 KiB → 44.3 KiB |    4 → 23 | `findNearestCentroid()`                                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +59.3% |      +640 B |         <0.1% | 1.05 KiB → 1.68 KiB |   27 → 43 | `lambda$generateData$4(int)`                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|     new |      +272 B |  0.0% → <0.1% |         0 B → 272 B |     0 → 5 | `resize()`                                                                      | `java.util.HashMap`                                        |
| +500.0% |      +160 B |         <0.1% |        32 B → 192 B |     1 → 6 | `newNode(int, Object, Object, HashMap$Node)`                                    | `java.util.HashMap`                                        |
| +300.0% |      +144 B |         <0.1% |        48 B → 192 B |     1 → 4 | `createSubtask(int, int)`                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +66.7% |      +112 B |         <0.1% |       168 B → 280 B |     3 → 5 | `grow(int)`                                                                     | `java.util.ArrayList`                                      |
| +114.3% |       +64 B |         <0.1% |        56 B → 120 B |         1 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                                    |
|     new |       +64 B |  0.0% → <0.1% |          0 B → 64 B |     0 → 1 | `newLinkedHashMap(int)`                                                         | `java.util.LinkedHashMap`                                  |
| +100.0% |       +56 B |         <0.1% |        56 B → 112 B |     1 → 2 | `createSubtask(int, int)`                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     new |       +56 B |  0.0% → <0.1% |          0 B → 56 B |     0 → 1 | `vectorSum()`                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|     new |       +48 B |  0.0% → <0.1% |          0 B → 48 B |     0 → 2 | `lambda$merge$6(List, List)`                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|     new |       +48 B |  0.0% → <0.1% |          0 B → 48 B |     0 → 2 | `lambda$collectClusters$0(Double[])`                                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     new |       +24 B |  0.0% → <0.1% |          0 B → 24 B |     0 → 1 | `<clinit>()`                                                                    | `sun.security.util.KnownOIDs`                              |

##### Standard library

|  Change |       Delta |             % |                Size |   Objects | Function                                                                        | Location                      |
| ------: | ----------: | ------------: | ------------------: | --------: | ------------------------------------------------------------------------------- | ----------------------------- |
| +107.2% | +14.711 MiB | 86.9% → 93.1% | 13.7 MiB → 28.4 MiB | 216 → 604 | `copyOf(Object[], int)`                                                         | `java.util.Arrays`            |
|     new |      +272 B |  0.0% → <0.1% |         0 B → 272 B |     0 → 5 | `resize()`                                                                      | `java.util.HashMap`           |
| +500.0% |      +160 B |         <0.1% |        32 B → 192 B |     1 → 6 | `newNode(int, Object, Object, HashMap$Node)`                                    | `java.util.HashMap`           |
|  +66.7% |      +112 B |         <0.1% |       168 B → 280 B |     3 → 5 | `grow(int)`                                                                     | `java.util.ArrayList`         |
| +114.3% |       +64 B |         <0.1% |        56 B → 120 B |         1 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`       |
|     new |       +64 B |  0.0% → <0.1% |          0 B → 64 B |     0 → 1 | `newLinkedHashMap(int)`                                                         | `java.util.LinkedHashMap`     |
|     new |       +24 B |  0.0% → <0.1% |          0 B → 24 B |     0 → 1 | `<clinit>()`                                                                    | `sun.security.util.KnownOIDs` |

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

|  Change |  Delta |            % |                Size |   Objects | Function                            | Location                                                  |
| ------: | -----: | -----------: | ------------------: | --------: | ----------------------------------- | --------------------------------------------------------- |
|   -6.3% | -192 B |        <0.1% | 2.95 KiB → 2.77 KiB | 126 → 118 | `valueOf(double)`                   | `java.lang.Double`                                        |
| removed | -136 B | <0.1% → 0.0% |         136 B → 0 B |     2 → 0 | `copyOfRangeByte(byte[], int, int)` | `java.util.Arrays`                                        |
| removed | -120 B | <0.1% → 0.0% |         120 B → 0 B |     1 → 0 | `<init>(MethodType)`                | `java.lang.invoke.MethodTypeForm`                         |
| removed |  -56 B | <0.1% → 0.0% |          56 B → 0 B |     1 → 0 | `add(double[], double[])`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| removed |  -40 B | <0.1% → 0.0% |          40 B → 0 B |     1 → 0 | `compress(char[], int, int)`        | `java.lang.StringUTF16`                                   |
|  -50.0% |  -32 B |        <0.1% |         64 B → 32 B |     2 → 1 | `putVal(Object, Object, boolean)`   | `java.util.concurrent.ConcurrentHashMap`                  |

##### Standard library

|  Change |  Delta |            % |                Size |   Objects | Function                            | Location                                 |
| ------: | -----: | -----------: | ------------------: | --------: | ----------------------------------- | ---------------------------------------- |
|   -6.3% | -192 B |        <0.1% | 2.95 KiB → 2.77 KiB | 126 → 118 | `valueOf(double)`                   | `java.lang.Double`                       |
| removed | -136 B | <0.1% → 0.0% |         136 B → 0 B |     2 → 0 | `copyOfRangeByte(byte[], int, int)` | `java.util.Arrays`                       |
| removed | -120 B | <0.1% → 0.0% |         120 B → 0 B |     1 → 0 | `<init>(MethodType)`                | `java.lang.invoke.MethodTypeForm`        |
| removed |  -40 B | <0.1% → 0.0% |          40 B → 0 B |     1 → 0 | `compress(char[], int, int)`        | `java.lang.StringUTF16`                  |
|  -50.0% |  -32 B |        <0.1% |         64 B → 32 B |     2 → 1 | `putVal(Object, Object, boolean)`   | `java.util.concurrent.ConcurrentHashMap` |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

|  Change |       Delta |             % |                Size |   Objects | Function                                             | Location                                                               |
| ------: | ----------: | ------------: | ------------------: | --------: | ---------------------------------------------------- | ---------------------------------------------------------------------- |
| +107.4% | +14.747 MiB | 86.9% → 93.2% | 13.7 MiB → 28.5 MiB | 231 → 659 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| +107.4% | +14.747 MiB | 86.9% → 93.2% | 13.7 MiB → 28.5 MiB | 231 → 659 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                                   |
| +107.4% | +14.747 MiB | 86.9% → 93.2% | 13.7 MiB → 28.5 MiB | 231 → 659 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                                    |
| +107.4% | +14.747 MiB | 86.9% → 93.2% | 13.7 MiB → 28.5 MiB | 231 → 659 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
| +107.4% | +14.747 MiB | 86.9% → 93.2% | 13.7 MiB → 28.5 MiB | 231 → 659 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                                    |
| +107.4% | +14.747 MiB | 86.9% → 93.2% | 13.7 MiB → 28.5 MiB | 231 → 659 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                                    |
| +107.4% | +14.747 MiB | 86.9% → 93.2% | 13.7 MiB → 28.5 MiB | 231 → 659 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                            |
|  +93.2% | +14.711 MiB | 99.9% → 99.8% | 15.8 MiB → 30.5 MiB | 217 → 605 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                                     |
| +107.1% | +14.688 MiB | 86.8% → 93.0% | 13.7 MiB → 28.4 MiB | 189 → 519 | `merge(Map, Map)`                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| +107.1% | +14.688 MiB | 86.8% → 93.0% | 13.7 MiB → 28.4 MiB | 189 → 518 | `combineResults(Map, Map)`                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| +107.1% | +14.688 MiB | 86.8% → 93.0% | 13.7 MiB → 28.4 MiB | 189 → 518 | `combineResults(Object, Object)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| +107.1% | +14.688 MiB | 86.8% → 93.0% | 13.7 MiB → 28.4 MiB | 188 → 511 | `lambda$merge$6(List, List)`                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| +107.1% | +14.688 MiB | 86.8% → 93.0% | 13.7 MiB → 28.4 MiB | 188 → 511 | `apply(Object, Object)`                              | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000005011a7248` |
| +107.1% | +14.688 MiB | 86.8% → 93.0% | 13.7 MiB → 28.4 MiB | 188 → 511 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                                                    |
| +107.1% | +14.688 MiB | 86.8% → 93.0% | 13.7 MiB → 28.4 MiB | 188 → 511 | `lambda$merge$7(Map, Object, List)`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| +107.1% | +14.688 MiB | 86.8% → 93.0% | 13.7 MiB → 28.4 MiB | 188 → 511 | `accept(Object, Object)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000005011a7000` |
| +107.1% | +14.688 MiB | 86.8% → 93.0% | 13.7 MiB → 28.4 MiB | 188 → 511 | `forEach(BiConsumer)`                                | `java.util.HashMap`                                                    |
| +102.8% | +11.891 MiB | 73.3% → 76.8% | 11.6 MiB → 23.5 MiB | 144 → 387 | `addAll(Collection)`                                 | `java.util.ArrayList`                                                  |
| +100.6% | +10.709 MiB | 67.4% → 69.9% | 10.6 MiB → 21.4 MiB | 124 → 365 | `grow(int)`                                          | `java.util.ArrayList`                                                  |
| +109.3% |  +9.732 MiB | 56.4% → 61.0% |  8.9 MiB → 18.6 MiB |  65 → 153 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                                    |

##### Standard library

|  Change |        Delta |             % |                Size |   Objects | Function                                                  | Location                                            |
| ------: | -----------: | ------------: | ------------------: | --------: | --------------------------------------------------------- | --------------------------------------------------- |
| +107.4% |  +14.747 MiB | 86.9% → 93.2% | 13.7 MiB → 28.5 MiB | 231 → 659 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                |
| +107.4% |  +14.747 MiB | 86.9% → 93.2% | 13.7 MiB → 28.5 MiB | 231 → 659 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                 |
| +107.4% |  +14.747 MiB | 86.9% → 93.2% | 13.7 MiB → 28.5 MiB | 231 → 659 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| +107.4% |  +14.747 MiB | 86.9% → 93.2% | 13.7 MiB → 28.5 MiB | 231 → 659 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                 |
| +107.4% |  +14.747 MiB | 86.9% → 93.2% | 13.7 MiB → 28.5 MiB | 231 → 659 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                 |
| +107.4% |  +14.747 MiB | 86.9% → 93.2% | 13.7 MiB → 28.5 MiB | 231 → 659 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`         |
|  +93.2% |  +14.711 MiB | 99.9% → 99.8% | 15.8 MiB → 30.5 MiB | 217 → 605 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                                  |
| +107.1% |  +14.688 MiB | 86.8% → 93.0% | 13.7 MiB → 28.4 MiB | 188 → 511 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                                 |
| +107.1% |  +14.688 MiB | 86.8% → 93.0% | 13.7 MiB → 28.4 MiB | 188 → 511 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                                 |
| +102.8% |  +11.891 MiB | 73.3% → 76.8% | 11.6 MiB → 23.5 MiB | 144 → 387 | `addAll(Collection)`                                      | `java.util.ArrayList`                               |
| +100.6% |  +10.709 MiB | 67.4% → 69.9% | 10.6 MiB → 21.4 MiB | 124 → 365 | `grow(int)`                                               | `java.util.ArrayList`                               |
| +109.3% |   +9.732 MiB | 56.4% → 61.0% |  8.9 MiB → 18.6 MiB |  65 → 153 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                 |
| +109.3% |   +9.732 MiB | 56.4% → 61.0% |  8.9 MiB → 18.6 MiB |  64 → 150 | `exec()`                                                  | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
| +143.8% |    +5.76 MiB | 25.4% → 32.0% | 4.01 MiB → 9.77 MiB | 176 → 530 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                 |
| +143.8% |    +5.76 MiB | 25.4% → 32.0% | 4.01 MiB → 9.77 MiB | 176 → 530 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                 |
| +143.2% |   +5.727 MiB | 25.3% → 31.9% |    4 MiB → 9.73 MiB | 175 → 527 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
|  +78.0% |   +4.002 MiB | 32.5% → 29.9% | 5.13 MiB → 9.14 MiB |  96 → 245 | `toArray()`                                               | `java.util.ArrayList`                               |
| +130.8% |   +2.796 MiB | 13.5% → 16.2% | 2.14 MiB → 4.94 MiB |  44 → 122 | `<init>(Collection)`                                      | `java.util.ArrayList`                               |
|  +95.0% | +536.593 KiB |          3.5% |  565 KiB → 1.08 MiB |  38 → 124 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                 |
|   +1.1% |  +23.695 KiB |  13.1% → 6.9% |  2.07 MiB → 2.1 MiB |  32 → 101 | `grow()`                                                  | `java.util.ArrayList`                               |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

|  Change |      Delta |            % |                Size |   Objects | Function                                                                                                               | Location                                                               |
| ------: | ---------: | -----------: | ------------------: | --------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| removed | -2.064 MiB | 13.1% → 0.0% |      2.06 MiB → 0 B |   155 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -43.1% | -1.273 KiB |        <0.1% | 2.95 KiB → 1.68 KiB |  126 → 43 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000005011a25c0` |
| removed |     -200 B | <0.1% → 0.0% |         200 B → 0 B |     2 → 0 | `makePreparedLambdaForm(MethodType, int)`                                                                              | `java.lang.invoke.DirectMethodHandle`                                  |
| removed |     -200 B | <0.1% → 0.0% |         200 B → 0 B |     2 → 0 | `preparedLambdaForm(MethodType, int)`                                                                                  | `java.lang.invoke.DirectMethodHandle`                                  |
| removed |     -200 B | <0.1% → 0.0% |         200 B → 0 B |     2 → 0 | `preparedLambdaForm(MemberName, boolean)`                                                                              | `java.lang.invoke.DirectMethodHandle`                                  |
| removed |     -200 B | <0.1% → 0.0% |         200 B → 0 B |     2 → 0 | `preparedLambdaForm(MemberName)`                                                                                       | `java.lang.invoke.DirectMethodHandle`                                  |
| removed |     -200 B | <0.1% → 0.0% |         200 B → 0 B |     2 → 0 | `make(byte, Class, MemberName, Class)`                                                                                 | `java.lang.invoke.DirectMethodHandle`                                  |
|   -6.3% |     -192 B |        <0.1% | 2.95 KiB → 2.77 KiB | 126 → 118 | `valueOf(double)`                                                                                                      | `java.lang.Double`                                                     |
|   -6.3% |     -192 B |        <0.1% | 2.95 KiB → 2.77 KiB | 126 → 118 | `lambda$generateData$3(int, int, Random[], int)`                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed |     -136 B | <0.1% → 0.0% |         136 B → 0 B |     2 → 0 | `copyOfRangeByte(byte[], int, int)`                                                                                    | `java.util.Arrays`                                                     |
| removed |     -136 B | <0.1% → 0.0% |         136 B → 0 B |     2 → 0 | `copyOfRange(byte[], int, int)`                                                                                        | `java.util.Arrays`                                                     |
| removed |     -120 B | <0.1% → 0.0% |         120 B → 0 B |     1 → 0 | `<init>(MethodType)`                                                                                                   | `java.lang.invoke.MethodTypeForm`                                      |
| removed |     -120 B | <0.1% → 0.0% |         120 B → 0 B |     1 → 0 | `findForm(MethodType)`                                                                                                 | `java.lang.invoke.MethodTypeForm`                                      |
| removed |     -120 B | <0.1% → 0.0% |         120 B → 0 B |     1 → 0 | `makeImpl(Class, Class[], boolean)`                                                                                    | `java.lang.invoke.MethodType`                                          |
| removed |     -120 B | <0.1% → 0.0% |         120 B → 0 B |     1 → 0 | `methodType(Class, Class[], boolean)`                                                                                  | `java.lang.invoke.MethodType`                                          |
| removed |     -120 B | <0.1% → 0.0% |         120 B → 0 B |     1 → 0 | `canonicalize(MethodType, int)`                                                                                        | `java.lang.invoke.MethodTypeForm`                                      |
| removed |     -120 B | <0.1% → 0.0% |         120 B → 0 B |     1 → 0 | `insertParameterTypes(int, Class[])`                                                                                   | `java.lang.invoke.MethodType`                                          |
| removed |     -120 B | <0.1% → 0.0% |         120 B → 0 B |     1 → 0 | `invokerType()`                                                                                                        | `java.lang.invoke.MethodType`                                          |
| removed |     -120 B | <0.1% → 0.0% |         120 B → 0 B |     1 → 0 | `getDirectMethodCommon(byte, Class, MemberName, boolean, boolean, MethodHandles$Lookup)`                               | `java.lang.invoke.MethodHandles$Lookup`                                |
| removed |     -120 B | <0.1% → 0.0% |         120 B → 0 B |     1 → 0 | `getDirectMethodNoSecurityManager(byte, Class, MemberName, MethodHandles$Lookup)`                                      | `java.lang.invoke.MethodHandles$Lookup`                                |

##### Standard library

|  Change |  Delta |            % |                Size |   Objects | Function                                                                                 | Location                                |
| ------: | -----: | -----------: | ------------------: | --------: | ---------------------------------------------------------------------------------------- | --------------------------------------- |
| removed | -200 B | <0.1% → 0.0% |         200 B → 0 B |     2 → 0 | `makePreparedLambdaForm(MethodType, int)`                                                | `java.lang.invoke.DirectMethodHandle`   |
| removed | -200 B | <0.1% → 0.0% |         200 B → 0 B |     2 → 0 | `preparedLambdaForm(MethodType, int)`                                                    | `java.lang.invoke.DirectMethodHandle`   |
| removed | -200 B | <0.1% → 0.0% |         200 B → 0 B |     2 → 0 | `preparedLambdaForm(MemberName, boolean)`                                                | `java.lang.invoke.DirectMethodHandle`   |
| removed | -200 B | <0.1% → 0.0% |         200 B → 0 B |     2 → 0 | `preparedLambdaForm(MemberName)`                                                         | `java.lang.invoke.DirectMethodHandle`   |
| removed | -200 B | <0.1% → 0.0% |         200 B → 0 B |     2 → 0 | `make(byte, Class, MemberName, Class)`                                                   | `java.lang.invoke.DirectMethodHandle`   |
|   -6.3% | -192 B |        <0.1% | 2.95 KiB → 2.77 KiB | 126 → 118 | `valueOf(double)`                                                                        | `java.lang.Double`                      |
| removed | -136 B | <0.1% → 0.0% |         136 B → 0 B |     2 → 0 | `copyOfRangeByte(byte[], int, int)`                                                      | `java.util.Arrays`                      |
| removed | -136 B | <0.1% → 0.0% |         136 B → 0 B |     2 → 0 | `copyOfRange(byte[], int, int)`                                                          | `java.util.Arrays`                      |
| removed | -120 B | <0.1% → 0.0% |         120 B → 0 B |     1 → 0 | `<init>(MethodType)`                                                                     | `java.lang.invoke.MethodTypeForm`       |
| removed | -120 B | <0.1% → 0.0% |         120 B → 0 B |     1 → 0 | `findForm(MethodType)`                                                                   | `java.lang.invoke.MethodTypeForm`       |
| removed | -120 B | <0.1% → 0.0% |         120 B → 0 B |     1 → 0 | `makeImpl(Class, Class[], boolean)`                                                      | `java.lang.invoke.MethodType`           |
| removed | -120 B | <0.1% → 0.0% |         120 B → 0 B |     1 → 0 | `methodType(Class, Class[], boolean)`                                                    | `java.lang.invoke.MethodType`           |
| removed | -120 B | <0.1% → 0.0% |         120 B → 0 B |     1 → 0 | `canonicalize(MethodType, int)`                                                          | `java.lang.invoke.MethodTypeForm`       |
| removed | -120 B | <0.1% → 0.0% |         120 B → 0 B |     1 → 0 | `insertParameterTypes(int, Class[])`                                                     | `java.lang.invoke.MethodType`           |
| removed | -120 B | <0.1% → 0.0% |         120 B → 0 B |     1 → 0 | `invokerType()`                                                                          | `java.lang.invoke.MethodType`           |
| removed | -120 B | <0.1% → 0.0% |         120 B → 0 B |     1 → 0 | `getDirectMethodCommon(byte, Class, MemberName, boolean, boolean, MethodHandles$Lookup)` | `java.lang.invoke.MethodHandles$Lookup` |
| removed | -120 B | <0.1% → 0.0% |         120 B → 0 B |     1 → 0 | `getDirectMethodNoSecurityManager(byte, Class, MemberName, MethodHandles$Lookup)`        | `java.lang.invoke.MethodHandles$Lookup` |
| removed | -120 B | <0.1% → 0.0% |         120 B → 0 B |     1 → 0 | `getDirectMethodForConstant(byte, Class, MemberName)`                                    | `java.lang.invoke.MethodHandles$Lookup` |
| removed | -120 B | <0.1% → 0.0% |         120 B → 0 B |     1 → 0 | `linkMethodHandleConstant(byte, Class, String, Object)`                                  | `java.lang.invoke.MethodHandles$Lookup` |
| removed | -120 B | <0.1% → 0.0% |         120 B → 0 B |     1 → 0 | `linkMethodHandleConstant(Class, int, Class, String, Object)`                            | `java.lang.invoke.MethodHandleNatives`  |

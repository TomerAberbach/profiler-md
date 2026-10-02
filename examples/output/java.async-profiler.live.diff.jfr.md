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

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |                Size |       Samples | Location                                                       |
| -----: | ----------: | -----: | ------------------: | ------------: | -------------------------------------------------------------- |
|  +4.9% | +82.499 MiB | 100.0% | 1.63 GiB → 1.71 GiB | 3,346 → 3,511 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:223` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |              Size |   Samples | Location                                                      |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------------------------------------------- |
| +24.6% | +36.499 MiB | 100.0% | 148 MiB → 185 MiB | 297 → 370 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |                Size |   Samples | Location                                                      |
| -----: | ----------: | -----: | ------------------: | --------: | ------------------------------------------------------------- |
| +34.6% | +22.999 MiB | 100.0% | 66.5 MiB → 89.5 MiB | 133 → 179 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |                Size |   Samples | Location                                                      |
| -----: | ----------: | -----: | ------------------: | --------: | ------------------------------------------------------------- |
| +30.8% | +21.999 MiB | 100.0% | 71.5 MiB → 93.5 MiB | 143 → 187 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:430` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |              Size |   Samples | Location                                                       |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------------------------------------------------- |
|  +9.9% | +12.999 MiB | 100.0% | 131 MiB → 144 MiB | 262 → 288 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261` |

##### `resize()` (`java.util.HashMap`)

| Change |      Delta |      % |              Size |   Samples | Location                |
| -----: | ---------: | -----: | ----------------: | --------: | ----------------------- |
|  +7.7% | +7.999 MiB | 100.0% | 104 MiB → 112 MiB | 209 → 225 | `java.util.HashMap:710` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |      Delta |      % |                Size | Samples | Location                                       |
| -----: | ---------: | -----: | ------------------: | ------: | ---------------------------------------------- |
| +59.3% | +7.999 MiB | 100.0% | 13.5 MiB → 21.5 MiB | 27 → 43 | `org.renaissance.jdk.concurrent.JavaKMeans:87` |

##### `mapToObj(IntFunction, int)` (`java.util.stream.IntPipeline`)

| Change |      Delta |      % |              Size | Samples | Location                           |
| -----: | ---------: | -----: | ----------------: | ------: | ---------------------------------- |
| +17.6% | +4.499 MiB | 100.0% | 25.5 MiB → 30 MiB | 51 → 60 | `java.util.stream.IntPipeline:174` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

| Change |      Delta |      % |                Size | Samples | Location                     |
| -----: | ---------: | -----: | ------------------: | ------: | ---------------------------- |
| +32.0% | +3.999 MiB | 100.0% | 12.5 MiB → 16.5 MiB | 25 → 33 | `java.util.stream.Nodes:168` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |      Delta |      % |              Size | Samples | Location                                                   |
| -----: | ---------: | -----: | ----------------: | ------: | ---------------------------------------------------------- |
| +85.7% | +2.999 MiB | 100.0% | 3.5 MiB → 6.5 MiB |  7 → 13 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:314` |

##### `entrySet()` (`java.util.HashMap`)

| Change |      Delta |      % |              Size | Samples | Location                 |
| -----: | ---------: | -----: | ----------------: | ------: | ------------------------ |
| +19.2% | +2.499 MiB | 100.0% | 13 MiB → 15.5 MiB | 26 → 31 | `java.util.HashMap:1099` |

##### `intStream(Spliterator$OfInt, boolean)` (`java.util.stream.StreamSupport`)

| Change |      Delta |      % |            Size | Samples | Location                             |
| -----: | ---------: | -----: | --------------: | ------: | ------------------------------------ |
|  +9.5% | +1.999 MiB | 100.0% | 21 MiB → 23 MiB | 42 → 46 | `java.util.stream.StreamSupport:138` |

##### `opWrapSink(int, Sink)` (`java.util.stream.IntPipeline$1`)

| Change |      Delta |      % |            Size | Samples | Location                             |
| -----: | ---------: | -----: | --------------: | ------: | ------------------------------------ |
| +20.0% | +1.999 MiB | 100.0% | 10 MiB → 12 MiB | 20 → 24 | `java.util.stream.IntPipeline$1:177` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change |          Delta |      % |              Size | Samples | Location                                |
| -----: | -------------: | -----: | ----------------: | ------: | --------------------------------------- |
| +40.0% | +1,023.998 KiB | 100.0% | 2.5 MiB → 3.5 MiB |   5 → 7 | `java.util.concurrent.ForkJoinTask:437` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |          Delta |      % |              Size | Samples | Location                                                   |
| -----: | -------------: | -----: | ----------------: | ------: | ---------------------------------------------------------- |
| +18.2% | +1,023.998 KiB | 100.0% | 5.5 MiB → 6.5 MiB | 11 → 13 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:352` |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

| Change |          Delta |             % |        Size | Samples | Location                     |
| -----: | -------------: | ------------: | ----------: | ------: | ---------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `java.lang.StringLatin1:750` |

##### `<init>(InputStream, Inflater, int)` (`java.util.zip.InflaterInputStream`)

| Change |        Delta |      % |            Size | Samples | Location                               |
| -----: | -----------: | -----: | --------------: | ------: | -------------------------------------- |
| +11.1% | +511.999 KiB | 100.0% | 4.5 MiB → 5 MiB |  9 → 10 | `java.util.zip.InflaterInputStream:89` |

##### `visitMethod(int, String, String, String, String[])` (`jdk.internal.org.objectweb.asm.ClassWriter`)

| Change |        Delta |             % |          Size | Samples | Location                                         |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------ |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `jdk.internal.org.objectweb.asm.ClassWriter:500` |

##### `spliterator(double[], int, int, int)` (`java.util.Spliterators`)

| Change |        Delta |      % |            Size | Samples | Location                     |
| -----: | -----------: | -----: | --------------: | ------: | ---------------------------- |
| +50.0% | +511.999 KiB | 100.0% | 1 MiB → 1.5 MiB |   2 → 3 | `java.util.Spliterators:372` |

##### `update(long)` (`sun.util.calendar.ZoneInfoFile$Checksum`)

| Change |        Delta |             % |          Size | Samples | Location                                      |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `sun.util.calendar.ZoneInfoFile$Checksum:862` |

##### `resolveOrFail(byte, Class, String, MethodType)` (`java.lang.invoke.MethodHandles$Lookup`)

| Change |        Delta |             % |          Size | Samples | Location                                     |
| -----: | -----------: | ------------: | ------------: | ------: | -------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `java.lang.invoke.MethodHandles$Lookup:3750` |

##### `<clinit>()` (`sun.security.util.KnownOIDs`)

| Change |        Delta |             % |          Size | Samples | Location                          |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `sun.security.util.KnownOIDs:300` |

##### `<init>(InputStream, int)` (`java.util.jar.Manifest$FastInputStream`)

| Change |        Delta |             % |          Size | Samples | Location                                     |
| -----: | -----------: | ------------: | ------------: | ------: | -------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `java.util.jar.Manifest$FastInputStream:421` |

##### `<init>(int)` (`java.io.ByteArrayOutputStream`)

| Change |        Delta |             % |          Size | Samples | Location                           |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `java.io.ByteArrayOutputStream:81` |

##### `<init>(int)` (`java.lang.AbstractStringBuilder`)

| Change |        Delta |             % |          Size | Samples | Location                              |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `java.lang.AbstractStringBuilder:101` |

##### `readLine()` (`java.util.Properties$LineReader`)

| Change |        Delta |             % |          Size | Samples | Location                              |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `java.util.Properties$LineReader:574` |

##### `lambda$boxed$0(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |        Delta |      % |            Size | Samples | Location                                                   |
| ------: | -----------: | -----: | --------------: | ------: | ---------------------------------------------------------- |
| +100.0% | +511.999 KiB | 100.0% | 512 KiB → 1 MiB |   1 → 2 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:327` |

##### `<init>(JavaKMeans, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |        Delta |             % |          Size | Samples | Location                                                   |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:282` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

| Change |       Delta |      % |              Size |   Samples | Location                 |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------ |
|  -6.2% | -16.999 MiB | 100.0% | 274 MiB → 257 MiB | 549 → 515 | `java.util.HashMap:1909` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |       Delta |      % |            Size |   Samples | Location                                        |
| -----: | ----------: | -----: | --------------: | --------: | ----------------------------------------------- |
| -17.9% | -13.999 MiB | 100.0% | 78 MiB → 64 MiB | 156 → 128 | `org.renaissance.jdk.concurrent.JavaKMeans:110` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |               Size |   Samples | Location                                                       |
| -----: | ----------: | -----: | -----------------: | --------: | -------------------------------------------------------------- |
| -11.9% | -13.499 MiB | 100.0% | 113 MiB → 99.5 MiB | 226 → 199 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:209` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |      Delta |      % |                Size |         Samples | Location                |
| -----: | ---------: | -----: | ------------------: | --------------: | ----------------------- |
|    ~0% | -12.22 MiB | 100.0% | 33.6 GiB → 33.5 GiB | 68,399 → 68,382 | `java.util.Arrays:3482` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |      Delta |      % |               Size |   Samples | Location                                                       |
| -----: | ---------: | -----: | -----------------: | --------: | -------------------------------------------------------------- |
|  -8.2% | -8.499 MiB | 100.0% | 104 MiB → 95.5 MiB | 208 → 191 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

| Change |     Delta |      % |              Size | Samples | Location                |
| -----: | --------: | -----: | ----------------: | ------: | ----------------------- |
| -36.9% | -8.11 MiB | 100.0% | 22 MiB → 13.9 MiB | 38 → 22 | `java.util.Arrays:3513` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

| Change |      Delta |      % |              Size | Samples | Location                                  |
| -----: | ---------: | -----: | ----------------: | ------: | ----------------------------------------- |
| -34.4% | -5.499 MiB | 100.0% | 16 MiB → 10.5 MiB | 32 → 21 | `java.lang.invoke.DirectMethodHandle:501` |

##### `range(int, int)` (`java.util.stream.IntStream`)

| Change |      Delta |      % |              Size | Samples | Location                          |
| -----: | ---------: | -----: | ----------------: | ------: | --------------------------------- |
| -31.0% | -4.499 MiB | 100.0% | 14.5 MiB → 10 MiB | 29 → 20 | `java.util.stream.IntStream:1083` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |      Delta |      % |              Size |   Samples | Location                                        |
| -----: | ---------: | -----: | ----------------: | --------: | ----------------------------------------------- |
|  -3.1% | -3.499 MiB | 100.0% | 112 MiB → 108 MiB | 224 → 217 | `org.renaissance.jdk.concurrent.JavaKMeans:114` |

##### `valueOf(double)` (`java.lang.Double`)

| Change |      Delta |      % |              Size |   Samples | Location               |
| -----: | ---------: | -----: | ----------------: | --------: | ---------------------- |
|  -5.4% | -3.499 MiB | 100.0% | 64.5 MiB → 61 MiB | 129 → 122 | `java.lang.Double:773` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

| Change |      Delta |      % |                Size | Samples | Location                |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------- |
| -12.9% | -1.999 MiB | 100.0% | 15.5 MiB → 13.5 MiB | 31 → 27 | `java.util.Arrays:3541` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |      Delta |      % |              Size |   Samples | Location                  |
| -----: | ---------: | -----: | ----------------: | --------: | ------------------------- |
|  -0.6% | -1.499 MiB | 100.0% | 244 MiB → 243 MiB | 489 → 486 | `java.util.ArrayList:239` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

|  Change |      Delta |             % |          Size | Samples | Location                |
| ------: | ---------: | ------------: | ------------: | ------: | ----------------------- |
| removed | -1.499 MiB | 100.0% → 0.0% | 1.5 MiB → 0 B |   3 → 0 | `java.util.Arrays:3863` |

##### `readNBytes(int)` (`java.io.InputStream`)

|  Change |          Delta |            % |        Size | Samples | Location                  |
| ------: | -------------: | -----------: | ----------: | ------: | ------------------------- |
| removed | -1,023.998 KiB | 66.7% → 0.0% | 1 MiB → 0 B |   2 → 0 | `java.io.InputStream:408` |

##### `div(double[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |          Delta |      % |          Size | Samples | Location                                                   |
| -----: | -------------: | -----: | ------------: | ------: | ---------------------------------------------------------- |
| -50.0% | -1,023.998 KiB | 100.0% | 2 MiB → 1 MiB |   4 → 2 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:339` |

##### `opWrapSink(int, Sink)` (`java.util.stream.DoublePipeline$1`)

|  Change |        Delta |             % |          Size | Samples | Location                                |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `java.util.stream.DoublePipeline$1:173` |

##### `iterator()` (`java.util.HashMap$EntrySet`)

|  Change |        Delta |             % |          Size | Samples | Location                          |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `java.util.HashMap$EntrySet:1106` |

##### `mapToObj(DoubleFunction, int)` (`java.util.stream.DoublePipeline`)

| Change |        Delta |      % |            Size | Samples | Location                              |
| -----: | -----------: | -----: | --------------: | ------: | ------------------------------------- |
| -50.0% | -511.999 KiB | 100.0% | 1 MiB → 512 KiB |   2 → 1 | `java.util.stream.DoublePipeline:170` |

##### `putVal(Object, Object, boolean)` (`java.util.concurrent.ConcurrentHashMap`)

|  Change |        Delta |            % |          Size | Samples | Location                                      |
| ------: | -----------: | -----------: | ------------: | ------: | --------------------------------------------- |
| removed | -511.999 KiB | 50.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `java.util.concurrent.ConcurrentHashMap:1047` |

##### `<init>(MethodType)` (`java.lang.invoke.MethodTypeForm`)

|  Change |        Delta |             % |          Size | Samples | Location                              |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `java.lang.invoke.MethodTypeForm:194` |

##### `urlNoFragString(URL)` (`sun.net.util.URLUtil`)

|  Change |        Delta |             % |          Size | Samples | Location                  |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `sun.net.util.URLUtil:49` |

##### `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])` (`java.util.concurrent.ConcurrentHashMap`)

|  Change |        Delta |             % |          Size | Samples | Location                                      |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `java.util.concurrent.ConcurrentHashMap:2431` |

##### `replace(byte[], char, char)` (`java.lang.StringLatin1`)

|  Change |        Delta |             % |          Size | Samples | Location                     |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `java.lang.StringLatin1:317` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |                Size |       Samples | Caller              | Location                                                   |
| -----: | ----------: | -----: | ------------------: | ------------: | ------------------- | ---------------------------------------------------------- |
|  +4.9% | +82.499 MiB | 100.0% | 1.63 GiB → 1.71 GiB | 3,346 → 3,511 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |              Size |   Samples | Caller      | Location                                               |
| -----: | ----------: | -----: | ----------------: | --------: | ----------- | ------------------------------------------------------ |
| +24.6% | +36.499 MiB | 100.0% | 148 MiB → 185 MiB | 297 → 370 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |                Size |   Samples | Caller              | Location                                                  |
| -----: | ----------: | -----: | ------------------: | --------: | ------------------- | --------------------------------------------------------- |
| +34.6% | +22.999 MiB | 100.0% | 66.5 MiB → 89.5 MiB | 133 → 179 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |                Size |   Samples | Caller                               | Location                                                  |
| -----: | ----------: | -----: | ------------------: | --------: | ------------------------------------ | --------------------------------------------------------- |
| +30.8% | +21.999 MiB | 100.0% | 71.5 MiB → 93.5 MiB | 143 → 187 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |              Size |   Samples | Caller      | Location                                               |
| -----: | ----------: | -----: | ----------------: | --------: | ----------- | ------------------------------------------------------ |
|  +9.9% | +12.999 MiB | 100.0% | 131 MiB → 144 MiB | 262 → 288 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `resize()` (`java.util.HashMap`)

| Change |        Delta |             % |                Size |   Samples | Caller                                          | Location            |
| -----: | -----------: | ------------: | ------------------: | --------: | ----------------------------------------------- | ------------------- |
| +32.3% |  +10.499 MiB | 31.1% → 38.2% |   32.5 MiB → 43 MiB |   65 → 86 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |
|  -2.8% |   -1.999 MiB | 67.5% → 60.9% | 70.5 MiB → 68.5 MiB | 141 → 137 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |
| -33.3% | -511.999 KiB |   1.4% → 0.9% |     1.5 MiB → 1 MiB |     3 → 2 | `merge(Object, Object, BiFunction)`             | `java.util.HashMap` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |      Delta |      % |                Size | Samples | Caller       | Location                                                                                                                                      |
| -----: | ---------: | -----: | ------------------: | ------: | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| +59.3% | +7.999 MiB | 100.0% | 13.5 MiB → 21.5 MiB | 27 → 43 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001125d48 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000005011a25c0` |

##### `mapToObj(IntFunction, int)` (`java.util.stream.IntPipeline`)

| Change |      Delta |      % |              Size | Samples | Caller                  | Location                       |
| -----: | ---------: | -----: | ----------------: | ------: | ----------------------- | ------------------------------ |
| +17.6% | +4.499 MiB | 100.0% | 25.5 MiB → 30 MiB | 51 → 60 | `mapToObj(IntFunction)` | `java.util.stream.IntPipeline` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

| Change |      Delta |      % |                Size | Samples | Caller                               | Location                             |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------------------ | ------------------------------------ |
| +32.0% | +3.999 MiB | 100.0% | 12.5 MiB → 16.5 MiB | 25 → 33 | `makeNodeBuilder(long, IntFunction)` | `java.util.stream.ReferencePipeline` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |      Delta |      % |              Size | Samples | Caller              | Location                                               |
| -----: | ---------: | -----: | ----------------: | ------: | ------------------- | ------------------------------------------------------ |
| +85.7% | +2.999 MiB | 100.0% | 3.5 MiB → 6.5 MiB |  7 → 13 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `entrySet()` (`java.util.HashMap`)

| Change |      Delta |      % |              Size | Samples | Caller                        | Location            |
| -----: | ---------: | -----: | ----------------: | ------: | ----------------------------- | ------------------- |
| +19.2% | +2.499 MiB | 100.0% | 13 MiB → 15.5 MiB | 26 → 31 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `intStream(Spliterator$OfInt, boolean)` (`java.util.stream.StreamSupport`)

| Change |      Delta |      % |            Size | Samples | Caller            | Location                     |
| -----: | ---------: | -----: | --------------: | ------: | ----------------- | ---------------------------- |
|  +9.5% | +1.999 MiB | 100.0% | 21 MiB → 23 MiB | 42 → 46 | `range(int, int)` | `java.util.stream.IntStream` |

##### `opWrapSink(int, Sink)` (`java.util.stream.IntPipeline$1`)

| Change |      Delta |      % |            Size | Samples | Caller           | Location                            |
| -----: | ---------: | -----: | --------------: | ------: | ---------------- | ----------------------------------- |
| +20.0% | +1.999 MiB | 100.0% | 10 MiB → 12 MiB | 20 → 24 | `wrapSink(Sink)` | `java.util.stream.AbstractPipeline` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change |          Delta |      % |              Size | Samples | Caller   | Location                            |
| -----: | -------------: | -----: | ----------------: | ------: | -------- | ----------------------------------- |
| +40.0% | +1,023.998 KiB | 100.0% | 2.5 MiB → 3.5 MiB |   5 → 7 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |          Delta |      % |              Size | Samples | Caller      | Location                                               |
| -----: | -------------: | -----: | ----------------: | ------: | ----------- | ------------------------------------------------------ |
| +18.2% | +1,023.998 KiB | 100.0% | 5.5 MiB → 6.5 MiB | 11 → 13 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

| Change |          Delta |             % |        Size | Samples | Caller                | Location           |
| -----: | -------------: | ------------: | ----------: | ------: | --------------------- | ------------------ |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `substring(int, int)` | `java.lang.String` |

##### `<init>(InputStream, Inflater, int)` (`java.util.zip.InflaterInputStream`)

| Change |        Delta |      % |            Size | Samples | Caller                                                                                  | Location                                           |
| -----: | -----------: | -----: | --------------: | ------: | --------------------------------------------------------------------------------------- | -------------------------------------------------- |
| +11.1% | +511.999 KiB | 100.0% | 4.5 MiB → 5 MiB |  9 → 10 | `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, Inflater, int)` | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |

##### `visitMethod(int, String, String, String, String[])` (`jdk.internal.org.objectweb.asm.ClassWriter`)

| Change |        Delta |             % |          Size | Samples | Caller                                   | Location                                       |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------------------------- | ---------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `generateSerializationFriendlyMethods()` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `fillInStackTrace(int)` (`java.lang.Throwable`)

|  Change |        Delta |      % |            Size | Samples | Caller               | Location              |
| ------: | -----------: | -----: | --------------: | ------: | -------------------- | --------------------- |
| +100.0% | +511.999 KiB | 100.0% | 512 KiB → 1 MiB |   1 → 2 | `fillInStackTrace()` | `java.lang.Throwable` |

##### `allocateInstance(Class)` (`jdk.internal.misc.Unsafe`)

| Change |        Delta |      % |            Size | Samples | Caller                     | Location                              |
| -----: | -----------: | -----: | --------------: | ------: | -------------------------- | ------------------------------------- |
| +20.0% | +511.999 KiB | 100.0% | 2.5 MiB → 3 MiB |   5 → 6 | `allocateInstance(Object)` | `java.lang.invoke.DirectMethodHandle` |

##### `spliterator(double[], int, int, int)` (`java.util.Spliterators`)

| Change |        Delta |      % |            Size | Samples | Caller                            | Location           |
| -----: | -----------: | -----: | --------------: | ------: | --------------------------------- | ------------------ |
| +50.0% | +511.999 KiB | 100.0% | 1 MiB → 1.5 MiB |   2 → 3 | `spliterator(double[], int, int)` | `java.util.Arrays` |

##### `update(long)` (`sun.util.calendar.ZoneInfoFile$Checksum`)

| Change |        Delta |             % |          Size | Samples | Caller                                                                                       | Location                         |
| -----: | -----------: | ------------: | ------------: | ------: | -------------------------------------------------------------------------------------------- | -------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `getZoneInfo(String, long[], int[], long[], int[], ZoneInfoFile$ZoneOffsetTransitionRule[])` | `sun.util.calendar.ZoneInfoFile` |

##### `resolveOrFail(byte, Class, String, MethodType)` (`java.lang.invoke.MethodHandles$Lookup`)

| Change |        Delta |             % |          Size | Samples | Caller                               | Location                                |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------------ | --------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `findConstructor(Class, MethodType)` | `java.lang.invoke.MethodHandles$Lookup` |

##### `<clinit>()` (`sun.security.util.KnownOIDs`)

| Change |        Delta |             % |          Size | Samples | Caller       | Location                                      |
| -----: | -----------: | ------------: | ------------: | ------: | ------------ | --------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `<clinit>()` | `sun.security.util.SecurityProviderConstants` |

##### `<init>(InputStream, int)` (`java.util.jar.Manifest$FastInputStream`)

| Change |        Delta |             % |          Size | Samples | Caller                | Location                                 |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------- | ---------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `<init>(InputStream)` | `java.util.jar.Manifest$FastInputStream` |

##### `<init>(int)` (`java.io.ByteArrayOutputStream`)

| Change |        Delta |             % |          Size | Samples | Caller     | Location                        |
| -----: | -----------: | ------------: | ------------: | ------: | ---------- | ------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `<init>()` | `java.io.ByteArrayOutputStream` |

##### `<init>(int)` (`java.lang.AbstractStringBuilder`)

| Change |        Delta |             % |          Size | Samples | Caller     | Location                  |
| -----: | -----------: | ------------: | ------------: | ------: | ---------- | ------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `<init>()` | `java.lang.StringBuilder` |

##### `readLine()` (`java.util.Properties$LineReader`)

| Change |        Delta |             % |          Size | Samples | Caller                         | Location               |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------ | ---------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `load0(Properties$LineReader)` | `java.util.Properties` |

##### `lambda$boxed$0(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |        Delta |      % |            Size | Samples | Caller       | Location                                                                                                                                                            |
| ------: | -----------: | -----: | --------------: | ------: | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +100.0% | +511.999 KiB | 100.0% | 512 KiB → 1 MiB |   1 → 2 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask$$Lambda.0x0000007001187510 → org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask$$Lambda.0x00000005011a79d0` |

##### `<init>(JavaKMeans, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |        Delta |             % |          Size | Samples | Caller                         | Location                                    |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------ | ------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

| Change |        Delta |             % |              Size |   Samples | Caller                                          | Location            |
| -----: | -----------: | ------------: | ----------------: | --------: | ----------------------------------------------- | ------------------- |
| -10.2% |  -13.999 MiB | 50.1% → 48.0% | 137 MiB → 123 MiB | 275 → 247 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |
|  -1.8% |   -2.499 MiB | 49.5% → 51.8% | 136 MiB → 133 MiB | 272 → 267 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |
| -50.0% | -511.999 KiB |   0.4% → 0.2% |   1 MiB → 512 KiB |     2 → 1 | `merge(Object, Object, BiFunction)`             | `java.util.HashMap` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |       Delta |             % |                Size |   Samples | Caller                     | Location                                                   |
| -----: | ----------: | ------------: | ------------------: | --------: | -------------------------- | ---------------------------------------------------------- |
| -18.1% | -13.999 MiB | 99.4% → 99.2% | 77.5 MiB → 63.5 MiB | 155 → 127 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |               Size |   Samples | Caller              | Location                                                   |
| -----: | ----------: | -----: | -----------------: | --------: | ------------------- | ---------------------------------------------------------- |
| -11.9% | -13.499 MiB | 100.0% | 113 MiB → 99.5 MiB | 226 → 199 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |        Delta |             % |                Size |         Samples | Caller      | Location              |
| -----: | -----------: | ------------: | ------------------: | --------------: | ----------- | --------------------- |
|  -0.7% | -108.999 MiB | 42.8% → 42.5% | 14.4 GiB → 14.3 GiB | 29,444 → 29,226 | `toArray()` | `java.util.ArrayList` |
|  +0.5% |  +96.779 MiB | 57.2% → 57.5% | 19.2 GiB → 19.3 GiB | 38,955 → 39,156 | `grow(int)` | `java.util.ArrayList` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |      Delta |      % |               Size |   Samples | Caller          | Location                                                                                                                                                                    |
| -----: | ---------: | -----: | -----------------: | --------: | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -8.2% | -8.499 MiB | 100.0% | 104 MiB → 95.5 MiB | 208 → 191 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001186b38 → org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000005011a3940` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

| Change |     Delta |      % |              Size | Samples | Caller                  | Location           |
| -----: | --------: | -----: | ----------------: | ------: | ----------------------- | ------------------ |
| -36.9% | -8.11 MiB | 100.0% | 22 MiB → 13.9 MiB | 38 → 22 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

| Change |      Delta |      % |              Size | Samples | Caller                                       | Location                                                                                                  |
| -----: | ---------: | -----: | ----------------: | ------: | -------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| -34.4% | -5.499 MiB | 100.0% | 16 MiB → 10.5 MiB | 32 → 21 | `newInvokeSpecial(Object, int, int, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001126400 → java.lang.invoke.LambdaForm$DMH.0x00000005011a4400` |

##### `range(int, int)` (`java.util.stream.IntStream`)

| Change |      Delta |      % |              Size | Samples | Caller                                           | Location                                    |
| -----: | ---------: | -----: | ----------------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| -31.0% | -4.499 MiB | 100.0% | 14.5 MiB → 10 MiB | 29 → 20 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |      Delta |      % |              Size |   Samples | Caller                  | Location                                                                                                                                      |
| -----: | ---------: | -----: | ----------------: | --------: | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
|  -3.1% | -3.499 MiB | 100.0% | 112 MiB → 108 MiB | 224 → 217 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000005011a7248` |

##### `valueOf(double)` (`java.lang.Double`)

| Change |        Delta |             % |            Size |   Samples | Caller                                           | Location                                                                                                                  |
| -----: | -----------: | ------------: | --------------: | --------: | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
|  -6.3% |   -3.999 MiB | 97.7% → 96.7% | 63 MiB → 59 MiB | 126 → 118 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                               |
| +33.3% | +511.999 KiB |   2.3% → 3.3% | 1.5 MiB → 2 MiB |     3 → 4 | `apply(double)`                                  | `java.util.stream.DoublePipeline$$Lambda.0x00000070011c19e8 → java.util.stream.DoublePipeline$$Lambda.0x00000005011c2320` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|  Change |          Delta |             % |              Size | Samples | Caller                        | Location                          |
| ------: | -------------: | ------------: | ----------------: | ------: | ----------------------------- | --------------------------------- |
|  -20.0% |     -2.999 MiB | 96.8% → 88.9% |   15 MiB → 12 MiB | 30 → 24 | `getBytes()`                  | `jdk.internal.loader.Resource`    |
| +200.0% | +1,023.998 KiB |  3.2% → 11.1% | 512 KiB → 1.5 MiB |   1 → 3 | `ensureCapacityInternal(int)` | `java.lang.AbstractStringBuilder` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |      Delta |      % |              Size |   Samples | Caller   | Location              |
| -----: | ---------: | -----: | ----------------: | --------: | -------- | --------------------- |
|  -0.6% | -1.499 MiB | 100.0% | 244 MiB → 243 MiB | 489 → 486 | `grow()` | `java.util.ArrayList` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

|  Change |      Delta |             % |          Size | Samples | Caller                          | Location           |
| ------: | ---------: | ------------: | ------------: | ------: | ------------------------------- | ------------------ |
| removed | -1.499 MiB | 100.0% → 0.0% | 1.5 MiB → 0 B |   3 → 0 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `readNBytes(int)` (`java.io.InputStream`)

| Change |          Delta |      % |              Size | Samples | Caller           | Location              |
| -----: | -------------: | -----: | ----------------: | ------: | ---------------- | --------------------- |
| -66.7% | -1,023.998 KiB | 100.0% | 1.5 MiB → 512 KiB |   3 → 1 | `readAllBytes()` | `java.io.InputStream` |

##### `div(double[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |          Delta |      % |          Size | Samples | Caller          | Location                                               |
| -----: | -------------: | -----: | ------------: | ------: | --------------- | ------------------------------------------------------ |
| -50.0% | -1,023.998 KiB | 100.0% | 2 MiB → 1 MiB |   4 → 2 | `average(List)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `opWrapSink(int, Sink)` (`java.util.stream.DoublePipeline$1`)

|  Change |        Delta |             % |          Size | Samples | Caller           | Location                            |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------- | ----------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `wrapSink(Sink)` | `java.util.stream.AbstractPipeline` |

##### `iterator()` (`java.util.HashMap$EntrySet`)

|  Change |        Delta |             % |          Size | Samples | Caller                        | Location            |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------------- | ------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `mapToObj(DoubleFunction, int)` (`java.util.stream.DoublePipeline`)

| Change |        Delta |      % |            Size | Samples | Caller    | Location                          |
| -----: | -----------: | -----: | --------------: | ------: | --------- | --------------------------------- |
| -50.0% | -511.999 KiB | 100.0% | 1 MiB → 512 KiB |   2 → 1 | `boxed()` | `java.util.stream.DoublePipeline` |

##### `clone()` (`java.lang.Object`)

|  Change |        Delta |             % |          Size | Samples | Caller                          | Location           |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------- | ------------------ |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `putVal(Object, Object, boolean)` (`java.util.concurrent.ConcurrentHashMap`)

| Change |        Delta |      % |            Size | Samples | Caller                | Location                                 |
| -----: | -----------: | -----: | --------------: | ------: | --------------------- | ---------------------------------------- |
| -50.0% | -511.999 KiB | 100.0% | 1 MiB → 512 KiB |   2 → 1 | `put(Object, Object)` | `java.util.concurrent.ConcurrentHashMap` |

##### `<init>(MethodType)` (`java.lang.invoke.MethodTypeForm`)

|  Change |        Delta |             % |          Size | Samples | Caller                 | Location                          |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------- | --------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `findForm(MethodType)` | `java.lang.invoke.MethodTypeForm` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

| Change |        Delta |      % |            Size | Samples | Caller                                                    | Location                |
| -----: | -----------: | -----: | --------------: | ------: | --------------------------------------------------------- | ----------------------- |
| -50.0% | -511.999 KiB | 100.0% | 1 MiB → 512 KiB |   2 → 1 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `urlNoFragString(URL)` (`sun.net.util.URLUtil`)

|  Change |        Delta |             % |          Size | Samples | Caller                      | Location                   |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------- | -------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `<init>(URL, CodeSigner[])` | `java.security.CodeSource` |

##### `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])` (`java.util.concurrent.ConcurrentHashMap`)

|  Change |        Delta |             % |          Size | Samples | Caller                | Location                                 |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------- | ---------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `addCount(long, int)` | `java.util.concurrent.ConcurrentHashMap` |

##### `replace(byte[], char, char)` (`java.lang.StringLatin1`)

|  Change |        Delta |             % |          Size | Samples | Caller                | Location           |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------- | ------------------ |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `replace(char, char)` | `java.lang.String` |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                Size |         Samples | Function                                                                                                               | Location                                                                                                                                      |
| ------: | -----------: | ------------: | ------------------: | --------------: | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
|   +1.1% | +319.499 MiB | 78.5% → 79.1% | 28.9 GiB → 29.2 GiB | 59,255 → 59,894 | `tryRemoveAndExec(ForkJoinTask, boolean)`                                                                              | `java.util.concurrent.ForkJoinPool$WorkQueue`                                                                                                 |
|   +0.9% | +263.499 MiB | 79.4% → 79.9% | 29.3 GiB → 29.5 GiB | 59,961 → 60,488 | `awaitDone(int, long)`                                                                                                 | `java.util.concurrent.ForkJoinTask`                                                                                                           |
|   +0.9% | +263.499 MiB | 79.4% → 79.9% | 29.3 GiB → 29.5 GiB | 59,961 → 60,488 | `join()`                                                                                                               | `java.util.concurrent.ForkJoinTask`                                                                                                           |
|   +3.1% | +250.999 MiB | 21.8% → 22.4% | 8.03 GiB → 8.28 GiB | 16,451 → 16,953 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
|     new |  +201.35 MiB |   0.0% → 0.5% |       0 B → 201 MiB |         0 → 397 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                                                                                   |
|   +3.2% | +193.389 MiB | 16.3% → 16.7% | 5.99 GiB → 6.18 GiB | 12,266 → 12,653 | `grow()`                                                                                                               | `java.util.ArrayList`                                                                                                                         |
|   +3.2% | +193.389 MiB | 16.3% → 16.7% | 5.99 GiB → 6.18 GiB | 12,266 → 12,653 | `add(Object, Object[], int)`                                                                                           | `java.util.ArrayList`                                                                                                                         |
|   +3.2% | +193.389 MiB | 16.3% → 16.7% | 5.99 GiB → 6.18 GiB | 12,266 → 12,653 | `add(Object)`                                                                                                          | `java.util.ArrayList`                                                                                                                         |
|   +2.6% | +168.499 MiB | 17.4% → 17.8% |  6.4 GiB → 6.56 GiB | 13,105 → 13,442 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
| +191.3% | +120.499 MiB |   0.2% → 0.5% |    63 MiB → 183 MiB |       126 → 367 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001125b10 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000005011a2150` |
|   +0.3% | +115.779 MiB |         99.4% | 36.6 GiB → 36.8 GiB | 74,738 → 74,977 | `doExec()`                                                                                                             | `java.util.concurrent.ForkJoinTask`                                                                                                           |
|   +0.3% | +115.779 MiB |         99.4% | 36.6 GiB → 36.8 GiB | 74,738 → 74,977 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`                                                                   | `java.util.concurrent.ForkJoinPool$WorkQueue`                                                                                                 |
|   +0.3% | +115.779 MiB |         99.4% | 36.6 GiB → 36.8 GiB | 74,738 → 74,977 | `scan(ForkJoinPool$WorkQueue, int, int)`                                                                               | `java.util.concurrent.ForkJoinPool`                                                                                                           |
|   +0.3% | +115.779 MiB |         99.4% | 36.6 GiB → 36.8 GiB | 74,738 → 74,977 | `runWorker(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`                                                                                                           |
|   +0.3% | +115.779 MiB |         99.4% | 36.6 GiB → 36.8 GiB | 74,738 → 74,977 | `run()`                                                                                                                | `java.util.concurrent.ForkJoinWorkerThread`                                                                                                   |
|   +0.3% | +115.279 MiB |         99.4% | 36.6 GiB → 36.8 GiB | 74,735 → 74,973 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                                                                        |
|   +0.3% | +115.279 MiB |         99.4% | 36.6 GiB → 36.8 GiB | 74,735 → 74,973 | `exec()`                                                                                                               | `java.util.concurrent.RecursiveTask`                                                                                                          |
|   +0.5% |  +92.668 MiB | 52.7% → 52.8% | 19.4 GiB → 19.5 GiB | 39,457 → 39,650 | `grow(int)`                                                                                                            | `java.util.ArrayList`                                                                                                                         |
|   +4.9% |  +82.499 MiB |   4.4% → 4.6% | 1.63 GiB → 1.71 GiB |   3,346 → 3,511 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
|  +38.2% |  +67.499 MiB |   0.5% → 0.6% |   176 MiB → 244 MiB |       353 → 488 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                                                                        |

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

|  Change |        Delta |             % |                Size |         Samples | Function                                                                                                               | Location                                                                                                                                      |
| ------: | -----------: | ------------: | ------------------: | --------------: | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
|   +3.1% | +250.999 MiB | 21.8% → 22.4% | 8.03 GiB → 8.28 GiB | 16,451 → 16,953 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
|     new |  +201.35 MiB |   0.0% → 0.5% |       0 B → 201 MiB |         0 → 397 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                                                                                   |
|   +2.6% | +168.499 MiB | 17.4% → 17.8% |  6.4 GiB → 6.56 GiB | 13,105 → 13,442 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
| +191.3% | +120.499 MiB |   0.2% → 0.5% |    63 MiB → 183 MiB |       126 → 367 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001125b10 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000005011a2150` |
|   +0.3% | +115.279 MiB |         99.4% | 36.6 GiB → 36.8 GiB | 74,735 → 74,973 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                                                                        |
|   +4.9% |  +82.499 MiB |   4.4% → 4.6% | 1.63 GiB → 1.71 GiB |   3,346 → 3,511 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
|  +38.2% |  +67.499 MiB |   0.5% → 0.6% |   176 MiB → 244 MiB |       353 → 488 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                                                                        |
|  +38.2% |  +67.499 MiB |   0.5% → 0.6% |   176 MiB → 244 MiB |       353 → 488 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                                                                        |
|  +39.2% |  +64.999 MiB |   0.4% → 0.6% |   166 MiB → 231 MiB |       332 → 462 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                                                                        |
|  +24.6% |  +36.499 MiB |   0.4% → 0.5% |   148 MiB → 185 MiB |       297 → 370 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                     |
|  +34.6% |  +22.999 MiB |          0.2% | 66.5 MiB → 89.5 MiB |       133 → 179 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                     |
|  +34.6% |  +22.999 MiB |          0.2% | 66.5 MiB → 89.5 MiB |       133 → 179 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                     |
|  +30.8% |  +21.999 MiB |          0.2% | 71.5 MiB → 93.5 MiB |       143 → 187 | `add(double[], double[])`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                     |
|  +30.8% |  +21.999 MiB |          0.2% | 71.5 MiB → 93.5 MiB |       143 → 187 | `combineResults(double[], double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                     |
|  +30.8% |  +21.999 MiB |          0.2% | 71.5 MiB → 93.5 MiB |       143 → 187 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                     |
|   +9.9% |  +12.999 MiB |   0.3% → 0.4% |   131 MiB → 144 MiB |       262 → 288 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
|   +6.8% |  +12.389 MiB |          0.5% |   183 MiB → 195 MiB |       360 → 385 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | `org.renaissance.jdk.concurrent.FjKmeans`                                                                                                     |
|  +59.3% |   +7.999 MiB |  <0.1% → 0.1% | 13.5 MiB → 21.5 MiB |         27 → 43 | `lambda$generateData$4(int)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|  +59.3% |   +7.999 MiB |  <0.1% → 0.1% | 13.5 MiB → 21.5 MiB |         27 → 43 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001125d48 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000005011a25c0` |
|   +4.3% |   +7.499 MiB |          0.5% |   176 MiB → 183 MiB |       352 → 367 | `lambda$generateData$5(int, int, Random[], int)`                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                Size |         Samples | Function                                                                                                               | Location                                                                                                                                      |
| ------: | -----------: | ------------: | ------------------: | --------------: | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
|   -0.8% | -232.719 MiB | 76.5% → 75.6% |   28.2 GiB → 28 GiB | 57,406 → 56,948 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|   -0.8% | -232.719 MiB | 76.5% → 75.6% |   28.2 GiB → 28 GiB | 57,398 → 56,940 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
|   -0.8% | -232.719 MiB | 76.5% → 75.6% |   28.2 GiB → 28 GiB | 57,398 → 56,940 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
|   -0.8% | -219.719 MiB | 75.8% → 75.0% | 27.9 GiB → 27.7 GiB | 56,889 → 56,457 | `merge(Object, Object, BiFunction)`                                                                                    | `java.util.HashMap`                                                                                                                           |
|   -0.8% | -219.719 MiB | 75.8% → 75.0% | 27.9 GiB → 27.7 GiB | 56,889 → 56,457 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|   -0.8% | -219.719 MiB | 75.8% → 75.0% | 27.9 GiB → 27.7 GiB | 56,889 → 56,457 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000005011a7000` |
|   -0.8% | -219.719 MiB | 75.8% → 75.0% | 27.9 GiB → 27.7 GiB | 56,889 → 56,457 | `forEach(BiConsumer)`                                                                                                  | `java.util.HashMap`                                                                                                                           |
|   -0.8% | -218.719 MiB | 75.8% → 75.0% | 27.9 GiB → 27.7 GiB | 56,884 → 56,454 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|   -0.8% | -218.719 MiB | 75.8% → 75.0% | 27.9 GiB → 27.7 GiB | 56,884 → 56,454 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000005011a7248` |
|   -1.0% | -208.719 MiB | 56.5% → 55.8% | 20.8 GiB → 20.6 GiB | 42,363 → 41,953 | `addAll(Collection)`                                                                                                   | `java.util.ArrayList`                                                                                                                         |
| removed |  -195.46 MiB |   0.5% → 0.0% |       195 MiB → 0 B |         385 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                                                                                   |
|   -1.7% |  -129.72 MiB | 20.6% → 20.2% | 7.61 GiB → 7.48 GiB | 15,262 → 15,010 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|   -1.7% |  -129.72 MiB | 20.6% → 20.2% | 7.61 GiB → 7.48 GiB | 15,262 → 15,010 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000005011a2bd0` |
|   -1.7% |  -129.72 MiB | 20.6% → 20.2% | 7.61 GiB → 7.48 GiB | 15,262 → 15,010 | `exec()`                                                                                                               | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                                                                                           |
|  -66.5% | -116.999 MiB |   0.5% → 0.2% |    176 MiB → 59 MiB |       352 → 118 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011258d8 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000005011a2388` |
|   -0.8% | -114.499 MiB | 39.0% → 38.6% | 14.4 GiB → 14.3 GiB | 29,469 → 29,240 | `toArray()`                                                                                                            | `java.util.ArrayList`                                                                                                                         |
|   -0.9% |   -69.72 MiB | 21.0% → 20.8% | 7.75 GiB → 7.68 GiB | 15,561 → 15,429 | `invoke()`                                                                                                             | `java.util.concurrent.ForkJoinTask`                                                                                                           |
|   -0.1% |   -20.33 MiB | 91.1% → 90.7% |            33.6 GiB | 68,437 → 68,404 | `copyOf(Object[], int)`                                                                                                | `java.util.Arrays`                                                                                                                            |
|   -6.2% |  -16.999 MiB |          0.7% |   274 MiB → 257 MiB |       549 → 515 | `newNode(int, Object, Object, HashMap$Node)`                                                                           | `java.util.HashMap`                                                                                                                           |
|   -4.2% |  -12.999 MiB |          0.8% |   310 MiB → 297 MiB |       621 → 595 | `computeIfAbsent(Object, Function)`                                                                                    | `java.util.HashMap`                                                                                                                           |

##### Standard library

| Change |        Delta |             % |                Size |         Samples | Function                                                                        | Location                                                                                                  |
| -----: | -----------: | ------------: | ------------------: | --------------: | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
|  -0.8% | -219.719 MiB | 75.8% → 75.0% | 27.9 GiB → 27.7 GiB | 56,889 → 56,457 | `merge(Object, Object, BiFunction)`                                             | `java.util.HashMap`                                                                                       |
|  -0.8% | -219.719 MiB | 75.8% → 75.0% | 27.9 GiB → 27.7 GiB | 56,889 → 56,457 | `forEach(BiConsumer)`                                                           | `java.util.HashMap`                                                                                       |
|  -1.0% | -208.719 MiB | 56.5% → 55.8% | 20.8 GiB → 20.6 GiB | 42,363 → 41,953 | `addAll(Collection)`                                                            | `java.util.ArrayList`                                                                                     |
|  -1.7% |  -129.72 MiB | 20.6% → 20.2% | 7.61 GiB → 7.48 GiB | 15,262 → 15,010 | `exec()`                                                                        | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                                                       |
|  -0.8% | -114.499 MiB | 39.0% → 38.6% | 14.4 GiB → 14.3 GiB | 29,469 → 29,240 | `toArray()`                                                                     | `java.util.ArrayList`                                                                                     |
|  -0.9% |   -69.72 MiB | 21.0% → 20.8% | 7.75 GiB → 7.68 GiB | 15,561 → 15,429 | `invoke()`                                                                      | `java.util.concurrent.ForkJoinTask`                                                                       |
|  -0.1% |   -20.33 MiB | 91.1% → 90.7% |            33.6 GiB | 68,437 → 68,404 | `copyOf(Object[], int)`                                                         | `java.util.Arrays`                                                                                        |
|  -6.2% |  -16.999 MiB |          0.7% |   274 MiB → 257 MiB |       549 → 515 | `newNode(int, Object, Object, HashMap$Node)`                                    | `java.util.HashMap`                                                                                       |
|  -4.2% |  -12.999 MiB |          0.8% |   310 MiB → 297 MiB |       621 → 595 | `computeIfAbsent(Object, Function)`                                             | `java.util.HashMap`                                                                                       |
| -36.9% |    -8.11 MiB |  0.1% → <0.1% |   22 MiB → 13.9 MiB |         38 → 22 | `copyOf(Object[], int, Class)`                                                  | `java.util.Arrays`                                                                                        |
|  -0.1% |   -6.499 MiB |         18.9% | 6.98 GiB → 6.97 GiB | 14,297 → 14,284 | `<init>(Collection)`                                                            | `java.util.ArrayList`                                                                                     |
| -27.0% |   -4.999 MiB |         <0.1% | 18.5 MiB → 13.5 MiB |         37 → 27 | `allocateInstance(Object)`                                                      | `java.lang.invoke.DirectMethodHandle`                                                                     |
| -30.3% |   -4.999 MiB |         <0.1% | 16.5 MiB → 11.5 MiB |         33 → 23 | `newInvokeSpecial(Object, int, int, Object)`                                    | `java.lang.invoke.LambdaForm$DMH.0x0000007001126400 → java.lang.invoke.LambdaForm$DMH.0x00000005011a4400` |
| -30.3% |   -4.999 MiB |         <0.1% | 16.5 MiB → 11.5 MiB |         33 → 23 | `linkToTargetMethod(int, int, Object, Object)`                                  | `java.lang.invoke.LambdaForm$MH.0x0000007001126c00 → java.lang.invoke.LambdaForm$MH.0x00000005011a4c00`   |
| -39.1% |   -4.499 MiB |         <0.1% |    11.5 MiB → 7 MiB |         23 → 14 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                                                                                   |
| -37.5% |   -4.499 MiB |         <0.1% |    12 MiB → 7.5 MiB |         24 → 15 | `defineClass(String, byte[], int, int, ProtectionDomain)`                       | `java.lang.ClassLoader`                                                                                   |
| -37.5% |   -4.499 MiB |         <0.1% |    12 MiB → 7.5 MiB |         24 → 15 | `defineClass(String, byte[], int, int, CodeSource)`                             | `java.security.SecureClassLoader`                                                                         |
|  -2.1% |   -3.499 MiB |   0.5% → 0.4% |   170 MiB → 166 MiB |       340 → 333 | `putVal(int, Object, Object, boolean, boolean)`                                 | `java.util.HashMap`                                                                                       |
|  -5.4% |   -3.499 MiB |          0.2% |   64.5 MiB → 61 MiB |       129 → 122 | `valueOf(double)`                                                               | `java.lang.Double`                                                                                        |
| -31.8% |   -3.499 MiB |         <0.1% |    11 MiB → 7.5 MiB |         22 → 15 | `<clinit>()`                                                                    | `scala.Predef$`                                                                                           |

##### Ours

|  Change |          Delta |             % |                Size |         Samples | Function                                                                                                               | Location                                                                                                                                                                    |
| ------: | -------------: | ------------: | ------------------: | --------------: | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   -0.8% |   -232.719 MiB | 76.5% → 75.6% |   28.2 GiB → 28 GiB | 57,406 → 56,948 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                                                 |
|   -0.8% |   -232.719 MiB | 76.5% → 75.6% |   28.2 GiB → 28 GiB | 57,398 → 56,940 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                                                  |
|   -0.8% |   -232.719 MiB | 76.5% → 75.6% |   28.2 GiB → 28 GiB | 57,398 → 56,940 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                                                  |
|   -0.8% |   -219.719 MiB | 75.8% → 75.0% | 27.9 GiB → 27.7 GiB | 56,889 → 56,457 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                                                 |
|   -0.8% |   -219.719 MiB | 75.8% → 75.0% | 27.9 GiB → 27.7 GiB | 56,889 → 56,457 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000005011a7000`                               |
|   -0.8% |   -218.719 MiB | 75.8% → 75.0% | 27.9 GiB → 27.7 GiB | 56,884 → 56,454 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                                                 |
|   -0.8% |   -218.719 MiB | 75.8% → 75.0% | 27.9 GiB → 27.7 GiB | 56,884 → 56,454 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000005011a7248`                               |
| removed |    -195.46 MiB |   0.5% → 0.0% |       195 MiB → 0 B |         385 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                                                                                                                 |
|   -1.7% |    -129.72 MiB | 20.6% → 20.2% | 7.61 GiB → 7.48 GiB | 15,262 → 15,010 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                                                 |
|   -1.7% |    -129.72 MiB | 20.6% → 20.2% | 7.61 GiB → 7.48 GiB | 15,262 → 15,010 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000005011a2bd0`                               |
|  -66.5% |   -116.999 MiB |   0.5% → 0.2% |    176 MiB → 59 MiB |       352 → 118 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011258d8 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000005011a2388`                               |
|  -81.8% |     -8.999 MiB |         <0.1% |      11 MiB → 2 MiB |          22 → 4 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                                                                                                                                   |
|   -8.2% |     -8.499 MiB |          0.3% |  104 MiB → 95.5 MiB |       208 → 191 | `lambda$collectClusters$0(Double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                                                  |
|   -8.2% |     -8.499 MiB |          0.3% |  104 MiB → 95.5 MiB |       208 → 191 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001186b38 → org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000005011a3940` |
|  -62.5% |     -7.499 MiB |         <0.1% |    12 MiB → 4.5 MiB |          24 → 9 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                                                                                                                                   |
|   -6.3% |     -3.999 MiB |          0.2% |     63 MiB → 59 MiB |       126 → 118 | `lambda$generateData$3(int, int, Random[], int)`                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                                                 |
| removed |     -1.999 MiB |  <0.1% → 0.0% |         2 MiB → 0 B |           4 → 0 | `$anonfun$1(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`                                                                                                                                   |
|  -50.0% | -1,023.998 KiB |         <0.1% |       2 MiB → 1 MiB |           4 → 2 | `div(double[], int)`                                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                                                                                                      |
|  -33.3% |   -511.999 KiB |         <0.1% |     1.5 MiB → 1 MiB |           3 → 2 | `createHandler()`                                                                                                      | `org.renaissance.core.Logging`                                                                                                                                              |
|  -33.3% |   -511.999 KiB |         <0.1% |     1.5 MiB → 1 MiB |           3 → 2 | `createRootLogger()`                                                                                                   | `org.renaissance.core.Logging`                                                                                                                                              |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |        Delta |      % |                Size |         Samples | Callee     | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------- | ----------------------------------- |
|  +1.1% | +319.499 MiB | 100.0% | 28.9 GiB → 29.2 GiB | 59,255 → 59,894 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |             % |                Size |         Samples | Callee                                                    | Location                                      |
| -----: | -----------: | ------------: | ------------------: | --------------: | --------------------------------------------------------- | --------------------------------------------- |
|  +1.1% | +319.499 MiB | 98.8% → 99.0% | 28.9 GiB → 29.2 GiB | 59,255 → 59,894 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  +0.5% |  +27.499 MiB |         18.0% | 5.28 GiB → 5.31 GiB | 10,815 → 10,870 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |      % |                Size |         Samples | Callee                 | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------------------- | ----------------------------------- |
|  +0.9% | +263.499 MiB | 100.0% | 29.3 GiB → 29.5 GiB | 59,961 → 60,488 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |             % |                Size |         Samples | Callee                   | Location                                                   |
| -----: | -----------: | ------------: | ------------------: | --------------: | ------------------------ | ---------------------------------------------------------- |
|  +3.1% | +250.999 MiB |        100.0% | 8.03 GiB → 8.28 GiB | 16,451 → 16,953 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +2.6% | +168.499 MiB | 79.7% → 79.3% |  6.4 GiB → 6.56 GiB | 13,105 → 13,442 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +4.9% |  +82.499 MiB | 20.3% → 20.7% | 1.63 GiB → 1.71 GiB |   3,346 → 3,511 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |          Delta |            % |          Size | Samples | Callee                                                                                       | Location                                  |
| -----: | -------------: | -----------: | ------------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
|    new |    +199.85 MiB | 0.0% → 99.3% | 0 B → 200 MiB | 0 → 394 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
|    new | +1,023.998 KiB |  0.0% → 0.5% |   0 B → 1 MiB |   0 → 2 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |
|    new |   +511.999 KiB |  0.0% → 0.2% | 0 B → 512 KiB |   0 → 1 | `loadClass(String)`                                                                          | `java.lang.ClassLoader`                   |

##### `grow()` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |         Samples | Callee      | Location              |
| -----: | -----------: | -----: | ------------------: | --------------: | ----------- | --------------------- |
|  +3.2% | +193.389 MiB | 100.0% | 5.99 GiB → 6.18 GiB | 12,266 → 12,653 | `grow(int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |         Samples | Callee   | Location              |
| -----: | -----------: | -----: | ------------------: | --------------: | -------- | --------------------- |
|  +3.2% | +193.389 MiB | 100.0% | 5.99 GiB → 6.18 GiB | 12,266 → 12,653 | `grow()` | `java.util.ArrayList` |

##### `add(Object)` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |         Samples | Callee                       | Location              |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------------------------- | --------------------- |
|  +3.2% | +193.389 MiB | 100.0% | 5.99 GiB → 6.18 GiB | 12,266 → 12,653 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |             % |                Size |         Samples | Callee                              | Location              |
| -----: | -----------: | ------------: | ------------------: | --------------: | ----------------------------------- | --------------------- |
|  +3.2% | +194.999 MiB | 93.5% → 94.1% | 5.99 GiB → 6.18 GiB | 12,258 → 12,648 | `add(Object)`                       | `java.util.ArrayList` |
|  -4.2% |  -12.999 MiB |   4.7% → 4.4% |   310 MiB → 297 MiB |       621 → 595 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`   |

##### `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000005011a2150`)

|  Change |        Delta |             % |          Size | Samples | Callee                                           | Location                                    |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------ | ------------------------------------------- |
|     new | +183.499 MiB | 0.0% → 100.0% | 0 B → 183 MiB | 0 → 367 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |
| removed |  -62.999 MiB | 100.0% → 0.0% |  63 MiB → 0 B | 126 → 0 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |             % |                Size |         Samples | Callee   | Location                                            |
| -----: | -----------: | ------------: | ------------------: | --------------: | -------- | --------------------------------------------------- |
|  -1.7% |  -129.72 MiB | 20.8% → 20.3% | 7.61 GiB → 7.48 GiB | 15,262 → 15,010 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  +0.3% | +115.279 MiB |        100.0% | 36.6 GiB → 36.8 GiB | 74,735 → 74,973 | `exec()` | `java.util.concurrent.RecursiveTask`                |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |        Delta |      % |                Size |         Samples | Callee     | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------- | ----------------------------------- |
|  +0.3% | +115.779 MiB | 100.0% | 36.6 GiB → 36.8 GiB | 74,738 → 74,977 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change |        Delta |      % |                Size |         Samples | Callee                                               | Location                                      |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------------------------------------------------- | --------------------------------------------- |
|  +0.3% | +115.779 MiB | 100.0% | 36.6 GiB → 36.8 GiB | 74,738 → 74,977 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |        Delta |      % |                Size |         Samples | Callee                                   | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------------------------------------- | ----------------------------------- |
|  +0.3% | +115.779 MiB | 100.0% | 36.6 GiB → 36.8 GiB | 74,738 → 74,977 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

| Change |        Delta |      % |                Size |         Samples | Callee                              | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | ----------------------------------- | ----------------------------------- |
|  +0.3% | +115.779 MiB | 100.0% | 36.6 GiB → 36.8 GiB | 74,738 → 74,977 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change |        Delta |             % |                Size |         Samples | Callee                           | Location                                                   |
| -----: | -----------: | ------------: | ------------------: | --------------: | -------------------------------- | ---------------------------------------------------------- |
|  +0.9% | +263.499 MiB | 79.9% → 80.3% | 29.3 GiB → 29.5 GiB | 59,961 → 60,488 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
|  +3.1% | +250.999 MiB | 21.9% → 22.5% | 8.03 GiB → 8.28 GiB | 16,451 → 16,953 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -0.8% | -232.719 MiB | 76.9% → 76.0% |   28.2 GiB → 28 GiB | 57,398 → 56,940 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +38.2% |  +67.499 MiB |   0.5% → 0.6% |   176 MiB → 244 MiB |       353 → 488 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| +24.6% |  +36.499 MiB |   0.4% → 0.5% |   148 MiB → 185 MiB |       297 → 370 | `createSubtask(int, int)`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change |        Delta |      % |                Size |         Samples | Callee      | Location                                               |
| -----: | -----------: | -----: | ------------------: | --------------: | ----------- | ------------------------------------------------------ |
|  +0.3% | +115.279 MiB | 100.0% | 36.6 GiB → 36.8 GiB | 74,735 → 74,973 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |       Delta |     % |                Size |         Samples | Callee                  | Location           |
| -----: | ----------: | ----: | ------------------: | --------------: | ----------------------- | ------------------ |
|  +0.5% | +94.168 MiB | 98.8% | 19.2 GiB → 19.3 GiB | 38,968 → 39,164 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |       Delta |             % |              Size |   Samples | Callee                | Location                                               |
| -----: | ----------: | ------------: | ----------------: | --------: | --------------------- | ------------------------------------------------------ |
| +39.2% | +64.999 MiB | 94.1% → 94.7% | 166 MiB → 231 MiB | 332 → 462 | `average(List)`       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| -60.0% |  -1.499 MiB |   1.4% → 0.4% |   2.5 MiB → 1 MiB |     5 → 2 | `put(Object, Object)` | `java.util.HashMap`                                    |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change |       Delta |      % |                Size |         Samples | Callee     | Location                            |
| -----: | ----------: | -----: | ------------------: | --------------: | ---------- | ----------------------------------- |
|  +0.5% | +27.499 MiB | 100.0% | 5.28 GiB → 5.31 GiB | 10,815 → 10,870 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

| Change |      Delta |             % |              Size | Samples | Callee                      | Location                                  |
| -----: | ---------: | ------------: | ----------------: | ------: | --------------------------- | ----------------------------------------- |
| +60.7% | +8.499 MiB | 52.8% → 57.7% | 14 MiB → 22.5 MiB | 28 → 45 | `<init>(long, IntFunction)` | `java.util.stream.Nodes$FixedNodeBuilder` |

##### `makeNodeBuilder(long, IntFunction)` (`java.util.stream.ReferencePipeline`)

| Change |       Delta |      % |              Size | Samples | Callee                       | Location                 |
| -----: | ----------: | -----: | ----------------: | ------: | ---------------------------- | ------------------------ |
| +47.2% | +12.499 MiB | 100.0% | 26.5 MiB → 39 MiB | 53 → 78 | `builder(long, IntFunction)` | `java.util.stream.Nodes` |

##### `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

| Change |        Delta |             % |              Size |   Samples | Callee                       | Location                                  |
| -----: | -----------: | ------------: | ----------------: | --------: | ---------------------------- | ----------------------------------------- |
|  +3.2% |   +5.889 MiB | 99.2% → 96.2% | 183 MiB → 189 MiB | 360 → 372 | `forEachRemaining(Consumer)` | `java.util.Spliterator$OfInt`             |
|    new |   +5.499 MiB |   0.0% → 2.8% |     0 B → 5.5 MiB |    0 → 11 | `forEachRemaining(Consumer)` | `java.util.Spliterators$ArraySpliterator` |
| +33.3% | +511.999 KiB |   0.8% → 1.0% |   1.5 MiB → 2 MiB |     3 → 4 | `forEachRemaining(Consumer)` | `java.util.Spliterator$OfDouble`          |

##### `wrapAndCopyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

| Change |       Delta |              % |              Size |   Samples | Callee                        | Location                            |
| -----: | ----------: | -------------: | ----------------: | --------: | ----------------------------- | ----------------------------------- |
|  +6.4% | +11.889 MiB | 99.7% → 100.0% | 184 MiB → 196 MiB | 363 → 387 | `copyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |
| +14.3% |  +1.499 MiB |    5.7% → 6.1% | 10.5 MiB → 12 MiB |   21 → 24 | `wrapSink(Sink)`              | `java.util.stream.AbstractPipeline` |

##### `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`)

| Change |       Delta |      % |              Size |   Samples | Callee                               | Location                            |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------------------ | ----------------------------------- |
|  +6.2% | +11.389 MiB | 100.0% | 183 MiB → 194 MiB | 360 → 383 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`)

| Change |       Delta |      % |              Size |   Samples | Callee                                            | Location                              |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------------------------------- | ------------------------------------- |
|  +6.2% | +11.389 MiB | 100.0% | 183 MiB → 194 MiB | 360 → 383 | `evaluateSequential(PipelineHelper, Spliterator)` | `java.util.stream.ReduceOps$ReduceOp` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |       Delta |      % |              Size |   Samples | Callee                     | Location                                               |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------------- | ------------------------------------------------------ |
| +38.2% | +67.499 MiB | 100.0% | 176 MiB → 244 MiB | 353 → 488 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| +38.2% | +67.499 MiB | 100.0% | 176 MiB → 244 MiB | 353 → 488 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |          Delta |             % |              Size |   Samples | Callee               | Location                                               |
| -----: | -------------: | ------------: | ----------------: | --------: | -------------------- | ------------------------------------------------------ |
| +40.2% |    +65.999 MiB | 98.8% → 99.6% | 164 MiB → 230 MiB | 328 → 460 | `invoke()`           | `java.util.concurrent.ForkJoinTask`                    |
| -50.0% | -1,023.998 KiB |   1.2% → 0.4% |     2 MiB → 1 MiB |     4 → 2 | `div(double[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |                Size |   Samples | Callee              | Location                                                  |
| -----: | ----------: | -----: | ------------------: | --------: | ------------------- | --------------------------------------------------------- |
| +34.6% | +22.999 MiB | 100.0% | 66.5 MiB → 89.5 MiB | 133 → 179 | `vectorSum()`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| +34.6% | +22.999 MiB | 100.0% | 66.5 MiB → 89.5 MiB | 133 → 179 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `combineResults(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |                Size |   Samples | Callee                    | Location                                                  |
| -----: | ----------: | -----: | ------------------: | --------: | ------------------------- | --------------------------------------------------------- |
| +30.8% | +21.999 MiB | 100.0% | 71.5 MiB → 93.5 MiB | 143 → 187 | `add(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |                Size |   Samples | Callee                               | Location                                                  |
| -----: | ----------: | -----: | ------------------: | --------: | ------------------------------------ | --------------------------------------------------------- |
| +30.8% | +21.999 MiB | 100.0% | 71.5 MiB → 93.5 MiB | 143 → 187 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |        Delta |              % |              Size |   Samples | Callee                        | Location                                                           |
| -----: | -----------: | -------------: | ----------------: | --------: | ----------------------------- | ------------------------------------------------------------------ |
|  +3.2% |   +5.889 MiB | 100.0% → 96.7% | 183 MiB → 189 MiB | 360 → 372 | `generateData(int, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                        |
|    new |   +5.499 MiB |    0.0% → 2.8% |     0 B → 5.5 MiB |    0 → 11 | `toCsvRows(Function)`         | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |
|    new | +511.999 KiB |    0.0% → 0.3% |     0 B → 512 KiB |     0 → 1 | `loadClass(String)`           | `java.lang.ClassLoader`                                            |
|    new | +511.999 KiB |    0.0% → 0.3% |     0 B → 512 KiB |     0 → 1 | `asScala()`                   | `scala.collection.convert.AsScalaExtensions$ListHasAsScala`        |

##### `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000005011a25c0`)

| Change |      Delta |      % |                Size | Samples | Callee                       | Location                                    |
| -----: | ---------: | -----: | ------------------: | ------: | ---------------------------- | ------------------------------------------- |
| +59.3% | +7.999 MiB | 100.0% | 13.5 MiB → 21.5 MiB | 27 → 43 | `lambda$generateData$4(int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |       Delta |             % |                Size |   Samples | Callee                                         | Location                                                                                                |
| -----: | ----------: | ------------: | ------------------: | --------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| +10.7% | +10.499 MiB | 56.0% → 59.4% |  98.5 MiB → 109 MiB | 197 → 218 | `toArray(IntFunction)`                         | `java.util.stream.ReferencePipeline`                                                                    |
| -30.3% |  -4.999 MiB |   9.4% → 6.3% | 16.5 MiB → 11.5 MiB |   33 → 23 | `linkToTargetMethod(int, int, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001126c00 → java.lang.invoke.LambdaForm$MH.0x00000005011a4c00` |
| +17.6% |  +4.499 MiB | 14.5% → 16.3% |   25.5 MiB → 30 MiB |   51 → 60 | `mapToObj(IntFunction)`                        | `java.util.stream.IntPipeline`                                                                          |
|  -7.0% |  -2.499 MiB | 20.2% → 18.0% |   35.5 MiB → 33 MiB |   71 → 66 | `range(int, int)`                              | `java.util.stream.IntStream`                                                                            |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |            % |                Size |         Samples | Callee                               | Location                           |
| -----: | -----------: | -----------: | ------------------: | --------------: | ------------------------------------ | ---------------------------------- |
|  -0.8% | -219.719 MiB |        99.1% | 27.9 GiB → 27.7 GiB | 56,889 → 56,457 | `forEach(BiConsumer)`                | `java.util.HashMap`                |
|  +0.3% | +511.999 KiB |         0.6% |   180 MiB → 181 MiB |       361 → 362 | `<init>(Map)`                        | `java.util.HashMap`                |
|    new | +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |           0 → 1 | `linkToTargetMethod(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |              Size |         Samples | Callee            | Location                                    |
| -----: | -----------: | -----: | ----------------: | --------------: | ----------------- | ------------------------------------------- |
|  -0.8% | -232.719 MiB | 100.0% | 28.2 GiB → 28 GiB | 57,398 → 56,940 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |              Size |         Samples | Callee                     | Location                                                   |
| -----: | -----------: | -----: | ----------------: | --------------: | -------------------------- | ---------------------------------------------------------- |
|  -0.8% | -232.719 MiB | 100.0% | 28.2 GiB → 28 GiB | 57,398 → 56,940 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

| Change |        Delta |      % |                Size |         Samples | Callee                                       | Location                                                                                                                                      |
| -----: | -----------: | -----: | ------------------: | --------------: | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
|  -0.8% | -218.719 MiB | 100.0% | 27.9 GiB → 27.7 GiB | 56,884 → 56,454 | `apply(Object, Object)`                      | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000005011a7248` |
| -50.0% | -511.999 KiB |  <0.1% |     1 MiB → 512 KiB |           2 → 1 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                                                                                                                           |
| -33.3% | -511.999 KiB |  <0.1% |     1.5 MiB → 1 MiB |           3 → 2 | `resize()`                                   | `java.util.HashMap`                                                                                                                           |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |      % |                Size |         Samples | Callee                              | Location            |
| -----: | -----------: | -----: | ------------------: | --------------: | ----------------------------------- | ------------------- |
|  -0.8% | -219.719 MiB | 100.0% | 27.9 GiB → 27.7 GiB | 56,889 → 56,457 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000005011a7000`)

| Change |        Delta |      % |                Size |         Samples | Callee                              | Location                                    |
| -----: | -----------: | -----: | ------------------: | --------------: | ----------------------------------- | ------------------------------------------- |
|  -0.8% | -219.719 MiB | 100.0% | 27.9 GiB → 27.7 GiB | 56,889 → 56,457 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

| Change |        Delta |      % |                Size |         Samples | Callee                   | Location                                                                                                                                      |
| -----: | -----------: | -----: | ------------------: | --------------: | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
|  -0.8% | -219.719 MiB | 100.0% | 27.9 GiB → 27.7 GiB | 56,889 → 56,457 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000005011a7000` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |             % |                Size |         Samples | Callee               | Location              |
| -----: | -----------: | ------------: | ------------------: | --------------: | -------------------- | --------------------- |
|  -1.0% | -208.719 MiB | 74.6% → 74.5% | 20.8 GiB → 20.6 GiB | 42,363 → 41,953 | `addAll(Collection)` | `java.util.ArrayList` |
|  -0.1% |   -6.499 MiB | 25.0% → 25.2% | 6.98 GiB → 6.97 GiB | 14,297 → 14,284 | `<init>(Collection)` | `java.util.ArrayList` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000005011a7248`)

| Change |        Delta |      % |                Size |         Samples | Callee                       | Location                                    |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------------------------- | ------------------------------------------- |
|  -0.8% | -218.719 MiB | 100.0% | 27.9 GiB → 27.7 GiB | 56,884 → 56,454 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `addAll(Collection)` (`java.util.ArrayList`)

| Change |        Delta |             % |                Size |         Samples | Callee      | Location              |
| -----: | -----------: | ------------: | ------------------: | --------------: | ----------- | --------------------- |
|  -1.4% | -107.999 MiB | 35.5% → 35.4% |  7.41 GiB → 7.3 GiB | 15,172 → 14,956 | `toArray()` | `java.util.ArrayList` |
|  -0.7% |  -100.72 MiB | 64.5% → 64.6% | 13.4 GiB → 13.3 GiB | 27,191 → 26,997 | `grow(int)` | `java.util.ArrayList` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |        Delta |            % |          Size | Samples | Callee                                                                                       | Location                                  |
| ------: | -----------: | -----------: | ------------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
| removed |  -194.96 MiB | 99.7% → 0.0% | 195 MiB → 0 B | 384 → 0 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
| removed | -511.999 KiB |  0.3% → 0.0% | 512 KiB → 0 B |   1 → 0 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |            % |                Size |         Samples | Callee                    | Location                                               |
| -----: | -----------: | -----------: | ------------------: | --------------: | ------------------------- | ------------------------------------------------------ |
|  -1.7% |  -130.22 MiB |       100.0% | 7.61 GiB → 7.48 GiB | 15,259 → 15,006 | `invoke()`                | `java.util.concurrent.ForkJoinTask`                    |
|    new | +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |           0 → 1 | `<init>(JavaKMeans, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000005011a2bd0`)

| Change |       Delta |      % |                Size |         Samples | Callee                         | Location                                    |
| -----: | ----------: | -----: | ------------------: | --------------: | ------------------------------ | ------------------------------------------- |
|  -1.7% | -129.72 MiB | 100.0% | 7.61 GiB → 7.48 GiB | 15,262 → 15,010 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

| Change |       Delta |      % |                Size |         Samples | Callee   | Location                                                                                                                                      |
| -----: | ----------: | -----: | ------------------: | --------------: | -------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
|  -1.7% | -129.72 MiB | 100.0% | 7.61 GiB → 7.48 GiB | 15,262 → 15,010 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000005011a2bd0` |

##### `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000005011a2388`)

|  Change |        Delta |             % |          Size | Samples | Callee                                           | Location                                    |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| removed | -175.999 MiB | 100.0% → 0.0% | 176 MiB → 0 B | 352 → 0 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |
|     new |  +58.999 MiB | 0.0% → 100.0% |  0 B → 59 MiB | 0 → 118 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `toArray()` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |         Samples | Callee                  | Location           |
| -----: | -----------: | -----: | ------------------: | --------------: | ----------------------- | ------------------ |
|  -0.8% | -114.499 MiB | 100.0% | 14.4 GiB → 14.3 GiB | 29,469 → 29,240 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

| Change |      Delta |      % |                Size |         Samples | Callee     | Location                            |
| -----: | ---------: | -----: | ------------------: | --------------: | ---------- | ----------------------------------- |
|  -0.9% | -69.72 MiB | 100.0% | 7.75 GiB → 7.68 GiB | 15,561 → 15,429 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |     Delta |            % |              Size | Samples | Callee                         | Location           |
| -----: | --------: | -----------: | ----------------: | ------: | ------------------------------ | ------------------ |
| -36.9% | -8.11 MiB | 0.1% → <0.1% | 22 MiB → 13.9 MiB | 38 → 22 | `copyOf(Object[], int, Class)` | `java.util.Arrays` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

| Change |      Delta |             % |                Size |   Samples | Callee                                       | Location                                                                                                                                                                    |
| -----: | ---------: | ------------: | ------------------: | --------: | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -8.2% | -8.499 MiB | 33.5% → 32.1% |  104 MiB → 95.5 MiB | 208 → 191 | `apply(Object)`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001186b38 → org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000005011a3940` |
|  -1.8% | -2.499 MiB | 43.8% → 44.9% |   136 MiB → 133 MiB | 272 → 267 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                                                                                                                                                         |
|  -2.8% | -1.999 MiB | 22.7% → 23.0% | 70.5 MiB → 68.5 MiB | 141 → 137 | `resize()`                                   | `java.util.HashMap`                                                                                                                                                         |

##### `<init>(Collection)` (`java.util.ArrayList`)

| Change |      Delta |      % |                Size |         Samples | Callee      | Location              |
| -----: | ---------: | -----: | ------------------: | --------------: | ----------- | --------------------- |
|  -0.1% | -6.499 MiB | 100.0% | 6.98 GiB → 6.97 GiB | 14,297 → 14,284 | `toArray()` | `java.util.ArrayList` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

| Change |        Delta |             % |            Size | Samples | Callee                    | Location                   |
| -----: | -----------: | ------------: | --------------: | ------: | ------------------------- | -------------------------- |
| +20.0% | +511.999 KiB | 13.5% → 22.2% | 2.5 MiB → 3 MiB |   5 → 6 | `allocateInstance(Class)` | `jdk.internal.misc.Unsafe` |

##### `newInvokeSpecial(Object, int, int, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000005011a4400`)

| Change |      Delta |      % |                Size | Samples | Callee                     | Location                              |
| -----: | ---------: | -----: | ------------------: | ------: | -------------------------- | ------------------------------------- |
| -30.3% | -4.999 MiB | 100.0% | 16.5 MiB → 11.5 MiB | 33 → 23 | `allocateInstance(Object)` | `java.lang.invoke.DirectMethodHandle` |

##### `linkToTargetMethod(int, int, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000005011a4c00`)

| Change |      Delta |      % |                Size | Samples | Callee                                       | Location                                                                                                  |
| -----: | ---------: | -----: | ------------------: | ------: | -------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| -30.3% | -4.999 MiB | 100.0% | 16.5 MiB → 11.5 MiB | 33 → 23 | `newInvokeSpecial(Object, int, int, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001126400 → java.lang.invoke.LambdaForm$DMH.0x00000005011a4400` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

| Change |      Delta |              % |             Size | Samples | Callee              | Location                |
| -----: | ---------: | -------------: | ---------------: | ------: | ------------------- | ----------------------- |
| -33.3% | -3.499 MiB | 91.3% → 100.0% | 10.5 MiB → 7 MiB | 21 → 14 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

|  Change |        Delta |             % |             Size | Samples | Callee                                                                          | Location                |
| ------: | -----------: | ------------: | ---------------: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
|  -39.1% |   -4.499 MiB | 95.8% → 93.3% | 11.5 MiB → 7 MiB | 23 → 14 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |
| removed | -511.999 KiB |   4.2% → 0.0% |    512 KiB → 0 B |   1 → 0 | `defineClassSourceLocation(ProtectionDomain)`                                   | `java.lang.ClassLoader` |
|     new | +511.999 KiB |   0.0% → 6.7% |    0 B → 512 KiB |   0 → 1 | `preDefineClass(String, ProtectionDomain)`                                      | `java.lang.ClassLoader` |

##### `defineClass(String, byte[], int, int, CodeSource)` (`java.security.SecureClassLoader`)

| Change |      Delta |      % |             Size | Samples | Callee                                                    | Location                |
| -----: | ---------: | -----: | ---------------: | ------: | --------------------------------------------------------- | ----------------------- |
| -37.5% | -4.499 MiB | 100.0% | 12 MiB → 7.5 MiB | 24 → 15 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

| Change |       Delta |             % |              Size |   Samples | Callee                                       | Location            |
| -----: | ----------: | ------------: | ----------------: | --------: | -------------------------------------------- | ------------------- |
| -10.2% | -13.999 MiB | 80.9% → 74.2% | 137 MiB → 123 MiB | 275 → 247 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap` |
| +32.3% | +10.499 MiB | 19.1% → 25.8% | 32.5 MiB → 43 MiB |   65 → 86 | `resize()`                                   | `java.util.HashMap` |

##### `<clinit>()` (`scala.Predef$`)

| Change |          Delta |             % |              Size | Samples | Callee              | Location                  |
| -----: | -------------: | ------------: | ----------------: | ------: | ------------------- | ------------------------- |
| -60.0% |     -1.499 MiB | 22.7% → 13.3% |   2.5 MiB → 1 MiB |   5 → 2 | `<clinit>()`        | `scala.reflect.Manifest$` |
| -15.4% | -1,023.998 KiB | 59.1% → 73.3% | 6.5 MiB → 5.5 MiB | 13 → 11 | `<clinit>()`        | `scala.package$`          |
| -50.0% | -1,023.998 KiB | 18.2% → 13.3% |     2 MiB → 1 MiB |   4 → 2 | `loadClass(String)` | `java.lang.ClassLoader`   |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change |      Delta |            % |          Size | Samples | Callee              | Location                |
| ------: | ---------: | -----------: | ------------: | ------: | ------------------- | ----------------------- |
| removed | -5.499 MiB | 50.0% → 0.0% | 5.5 MiB → 0 B |  11 → 0 | `<clinit>()`        | `scala.Predef$`         |
| removed | -3.499 MiB | 31.8% → 0.0% | 3.5 MiB → 0 B |   7 → 0 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000005011a3940`)

| Change |      Delta |      % |               Size |   Samples | Callee                               | Location                                                   |
| -----: | ---------: | -----: | -----------------: | --------: | ------------------------------------ | ---------------------------------------------------------- |
|  -8.2% | -8.499 MiB | 100.0% | 104 MiB → 95.5 MiB | 208 → 191 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

|  Change |        Delta |             % |           Size | Samples | Callee                                                        | Location                                                             |
| ------: | -----------: | ------------: | -------------: | ------: | ------------------------------------------------------------- | -------------------------------------------------------------------- |
|  -81.8% |   -8.999 MiB | 91.7% → 44.4% | 11 MiB → 2 MiB |  22 → 4 | `run(BenchmarkContext)`                                       | `org.renaissance.jdk.concurrent.FjKmeans`                            |
|     new |   +1.999 MiB |  0.0% → 44.4% |    0 B → 2 MiB |   0 → 4 | `validate()`                                                  | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000005011a7c00` |
| removed | -511.999 KiB |   4.2% → 0.0% |  512 KiB → 0 B |   1 → 0 | `linkMethodHandleConstant(Class, int, Class, String, Object)` | `java.lang.invoke.MethodHandleNatives`                               |

##### `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |      Delta |      % |            Size |   Samples | Callee            | Location           |
| -----: | ---------: | -----: | --------------: | --------: | ----------------- | ------------------ |
|  -6.3% | -3.999 MiB | 100.0% | 63 MiB → 59 MiB | 126 → 118 | `valueOf(double)` | `java.lang.Double` |

##### `$anonfun$1(int)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change |      Delta |             % |        Size | Samples | Callee                | Location                                    |
| ------: | ---------: | ------------: | ----------: | ------: | --------------------- | ------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   4 → 0 | `run(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `createHandler()` (`org.renaissance.core.Logging`)

| Change |          Delta |              % |              Size | Samples | Callee                            | Location                            |
| -----: | -------------: | -------------: | ----------------: | ------: | --------------------------------- | ----------------------------------- |
| -66.7% | -1,023.998 KiB | 100.0% → 50.0% | 1.5 MiB → 512 KiB |   3 → 1 | `<init>()`                        | `java.util.logging.SimpleFormatter` |
|    new |   +511.999 KiB |   0.0% → 50.0% |     0 B → 512 KiB |   0 → 1 | `<init>(OutputStream, Formatter)` | `java.util.logging.StreamHandler`   |

##### `createRootLogger()` (`org.renaissance.core.Logging`)

| Change |        Delta |      % |            Size | Samples | Callee            | Location                       |
| -----: | -----------: | -----: | --------------: | ------: | ----------------- | ------------------------------ |
| -33.3% | -511.999 KiB | 100.0% | 1.5 MiB → 1 MiB |   3 → 2 | `createHandler()` | `org.renaissance.core.Logging` |

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

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|  Change |       Delta |      % |                Size |   Objects | Location                |
| ------: | ----------: | -----: | ------------------: | --------: | ----------------------- |
| +107.2% | +14.711 MiB | 100.0% | 13.7 MiB → 28.4 MiB | 216 → 604 | `java.util.Arrays:3482` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change |       Delta |      % |               Size | Objects | Location                                                       |
| ------: | ----------: | -----: | -----------------: | ------: | -------------------------------------------------------------- |
| +474.4% | +36.546 KiB | 100.0% | 7.7 KiB → 44.3 KiB |  4 → 23 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:223` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |  Delta |      % |                Size | Objects | Location                                       |
| -----: | -----: | -----: | ------------------: | ------: | ---------------------------------------------- |
| +59.3% | +640 B | 100.0% | 1.05 KiB → 1.68 KiB | 27 → 43 | `org.renaissance.jdk.concurrent.JavaKMeans:87` |

##### `resize()` (`java.util.HashMap`)

| Change |  Delta |             % |        Size | Objects | Location                |
| -----: | -----: | ------------: | ----------: | ------: | ----------------------- |
|    new | +272 B | 0.0% → 100.0% | 0 B → 272 B |   0 → 5 | `java.util.HashMap:710` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

|  Change |  Delta |      % |         Size | Objects | Location                 |
| ------: | -----: | -----: | -----------: | ------: | ------------------------ |
| +500.0% | +160 B | 100.0% | 32 B → 192 B |   1 → 6 | `java.util.HashMap:1909` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change |  Delta |      % |         Size | Objects | Location                                                      |
| ------: | -----: | -----: | -----------: | ------: | ------------------------------------------------------------- |
| +300.0% | +144 B | 100.0% | 48 B → 192 B |   1 → 4 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |  Delta |      % |          Size | Objects | Location                  |
| -----: | -----: | -----: | ------------: | ------: | ------------------------- |
| +66.7% | +112 B | 100.0% | 168 B → 280 B |   3 → 5 | `java.util.ArrayList:239` |

##### `newLinkedHashMap(int)` (`java.util.LinkedHashMap`)

| Change | Delta |             % |       Size | Objects | Location                       |
| -----: | ----: | ------------: | ---------: | ------: | ------------------------------ |
|    new | +64 B | 0.0% → 100.0% | 0 B → 64 B |   0 → 1 | `java.util.LinkedHashMap:1078` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |      % |         Size | Objects | Location                                                       |
| ------: | ----: | -----: | -----------: | ------: | -------------------------------------------------------------- |
| +100.0% | +56 B | 100.0% | 56 B → 112 B |   1 → 2 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % |       Size | Objects | Location                                                      |
| -----: | ----: | ------------: | ---------: | ------: | ------------------------------------------------------------- |
|    new | +56 B | 0.0% → 100.0% | 0 B → 56 B |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |             % |       Size | Objects | Location                                        |
| -----: | ----: | ------------: | ---------: | ------: | ----------------------------------------------- |
|    new | +48 B | 0.0% → 100.0% | 0 B → 48 B |   0 → 2 | `org.renaissance.jdk.concurrent.JavaKMeans:114` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % |       Size | Objects | Location                                                       |
| -----: | ----: | ------------: | ---------: | ------: | -------------------------------------------------------------- |
|    new | +48 B | 0.0% → 100.0% | 0 B → 48 B |   0 → 2 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |

##### `<clinit>()` (`sun.security.util.KnownOIDs`)

| Change | Delta |             % |       Size | Objects | Location                          |
| -----: | ----: | ------------: | ---------: | ------: | --------------------------------- |
|    new | +24 B | 0.0% → 100.0% | 0 B → 24 B |   0 → 1 | `sun.security.util.KnownOIDs:300` |

##### `valueOf(double)` (`java.lang.Double`)

| Change |  Delta |      % |                Size |   Objects | Location               |
| -----: | -----: | -----: | ------------------: | --------: | ---------------------- |
|  -6.3% | -192 B | 100.0% | 2.95 KiB → 2.77 KiB | 126 → 118 | `java.lang.Double:773` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

|  Change |  Delta |             % |        Size | Objects | Location                |
| ------: | -----: | ------------: | ----------: | ------: | ----------------------- |
| removed | -136 B | 100.0% → 0.0% | 136 B → 0 B |   2 → 0 | `java.util.Arrays:3863` |

##### `<init>(MethodType)` (`java.lang.invoke.MethodTypeForm`)

|  Change |  Delta |             % |        Size | Objects | Location                              |
| ------: | -----: | ------------: | ----------: | ------: | ------------------------------------- |
| removed | -120 B | 100.0% → 0.0% | 120 B → 0 B |   1 → 0 | `java.lang.invoke.MethodTypeForm:194` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |             % |       Size | Objects | Location                                                      |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------------------------------------- |
| removed | -56 B | 100.0% → 0.0% | 56 B → 0 B |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:430` |

##### `compress(char[], int, int)` (`java.lang.StringUTF16`)

|  Change | Delta |             % |       Size | Objects | Location                    |
| ------: | ----: | ------------: | ---------: | ------: | --------------------------- |
| removed | -40 B | 100.0% → 0.0% | 40 B → 0 B |   1 → 0 | `java.lang.StringUTF16:211` |

##### `putVal(Object, Object, boolean)` (`java.util.concurrent.ConcurrentHashMap`)

|  Change | Delta |            % |       Size | Objects | Location                                      |
| ------: | ----: | -----------: | ---------: | ------: | --------------------------------------------- |
| removed | -32 B | 50.0% → 0.0% | 32 B → 0 B |   1 → 0 | `java.util.concurrent.ConcurrentHashMap:1047` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|  Change |       Delta |             % |                Size |   Objects | Caller      | Location              |
| ------: | ----------: | ------------: | ------------------: | --------: | ----------- | --------------------- |
| +124.7% | +10.709 MiB | 62.6% → 67.9% | 8.59 MiB → 19.3 MiB | 120 → 359 | `grow(int)` | `java.util.ArrayList` |
|  +78.0% |  +4.002 MiB | 37.4% → 32.1% | 5.13 MiB → 9.14 MiB |  96 → 245 | `toArray()` | `java.util.ArrayList` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change |       Delta |      % |               Size | Objects | Caller              | Location                                                   |
| ------: | ----------: | -----: | -----------------: | ------: | ------------------- | ---------------------------------------------------------- |
| +474.4% | +36.546 KiB | 100.0% | 7.7 KiB → 44.3 KiB |  4 → 23 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |      Delta |             % |           Size | Objects | Caller       | Location                                                               |
| ------: | ---------: | ------------: | -------------: | ------: | ------------ | ---------------------------------------------------------------------- |
|     new | +1.679 KiB | 0.0% → 100.0% | 0 B → 1.68 KiB |  0 → 43 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000005011a25c0` |
| removed | -1.054 KiB | 100.0% → 0.0% | 1.05 KiB → 0 B |  27 → 0 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001125d48` |

##### `resize()` (`java.util.HashMap`)

| Change |  Delta |            % |        Size | Objects | Caller                                          | Location            |
| -----: | -----: | -----------: | ----------: | ------: | ----------------------------------------------- | ------------------- |
|    new | +192 B | 0.0% → 70.6% | 0 B → 192 B |   0 → 4 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |
|    new |  +80 B | 0.0% → 29.4% |  0 B → 80 B |   0 → 1 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

|  Change | Delta |              % |        Size | Objects | Caller                                          | Location            |
| ------: | ----: | -------------: | ----------: | ------: | ----------------------------------------------- | ------------------- |
|     new | +96 B |   0.0% → 50.0% |  0 B → 96 B |   0 → 3 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |
| +200.0% | +64 B | 100.0% → 50.0% | 32 B → 96 B |   1 → 3 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change |  Delta |      % |         Size | Objects | Caller      | Location                                               |
| ------: | -----: | -----: | -----------: | ------: | ----------- | ------------------------------------------------------ |
| +300.0% | +144 B | 100.0% | 48 B → 192 B |   1 → 4 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |  Delta |      % |          Size | Objects | Caller   | Location              |
| -----: | -----: | -----: | ------------: | ------: | -------- | --------------------- |
| +66.7% | +112 B | 100.0% | 168 B → 280 B |   3 → 5 | `grow()` | `java.util.ArrayList` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|  Change | Delta |      % |         Size | Objects | Caller                                                    | Location                |
| ------: | ----: | -----: | -----------: | ------: | --------------------------------------------------------- | ----------------------- |
| +114.3% | +64 B | 100.0% | 56 B → 120 B |       1 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `newLinkedHashMap(int)` (`java.util.LinkedHashMap`)

| Change | Delta |             % |       Size | Objects | Caller        | Location                   |
| -----: | ----: | ------------: | ---------: | ------: | ------------- | -------------------------- |
|    new | +64 B | 0.0% → 100.0% | 0 B → 64 B |   0 → 1 | `<init>(int)` | `java.util.jar.Attributes` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |      % |         Size | Objects | Caller      | Location                                               |
| ------: | ----: | -----: | -----------: | ------: | ----------- | ------------------------------------------------------ |
| +100.0% | +56 B | 100.0% | 56 B → 112 B |   1 → 2 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % |       Size | Objects | Caller              | Location                                                  |
| -----: | ----: | ------------: | ---------: | ------: | ------------------- | --------------------------------------------------------- |
|    new | +56 B | 0.0% → 100.0% | 0 B → 56 B |   0 → 1 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |             % |       Size | Objects | Caller                  | Location                                                                                                                                      |
| -----: | ----: | ------------: | ---------: | ------: | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
|    new | +48 B | 0.0% → 100.0% | 0 B → 48 B |   0 → 2 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000005011a7248` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % |       Size | Objects | Caller          | Location                                                                              |
| -----: | ----: | ------------: | ---------: | ------: | --------------- | ------------------------------------------------------------------------------------- |
|    new | +48 B | 0.0% → 100.0% | 0 B → 48 B |   0 → 2 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000005011a3940` |

##### `<clinit>()` (`sun.security.util.KnownOIDs`)

| Change | Delta |             % |       Size | Objects | Caller       | Location                                      |
| -----: | ----: | ------------: | ---------: | ------: | ------------ | --------------------------------------------- |
|    new | +24 B | 0.0% → 100.0% | 0 B → 24 B |   0 → 1 | `<clinit>()` | `sun.security.util.SecurityProviderConstants` |

##### `valueOf(double)` (`java.lang.Double`)

| Change |  Delta |      % |                Size |   Objects | Caller                                           | Location                                    |
| -----: | -----: | -----: | ------------------: | --------: | ------------------------------------------------ | ------------------------------------------- |
|  -6.3% | -192 B | 100.0% | 2.95 KiB → 2.77 KiB | 126 → 118 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

|  Change |  Delta |             % |        Size | Objects | Caller                          | Location           |
| ------: | -----: | ------------: | ----------: | ------: | ------------------------------- | ------------------ |
| removed | -136 B | 100.0% → 0.0% | 136 B → 0 B |   2 → 0 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `<init>(MethodType)` (`java.lang.invoke.MethodTypeForm`)

|  Change |  Delta |             % |        Size | Objects | Caller                 | Location                          |
| ------: | -----: | ------------: | ----------: | ------: | ---------------------- | --------------------------------- |
| removed | -120 B | 100.0% → 0.0% | 120 B → 0 B |   1 → 0 | `findForm(MethodType)` | `java.lang.invoke.MethodTypeForm` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |             % |       Size | Objects | Caller                               | Location                                                  |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------------ | --------------------------------------------------------- |
| removed | -56 B | 100.0% → 0.0% | 56 B → 0 B |   1 → 0 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `compress(char[], int, int)` (`java.lang.StringUTF16`)

|  Change | Delta |             % |       Size | Objects | Caller                           | Location           |
| ------: | ----: | ------------: | ---------: | ------: | -------------------------------- | ------------------ |
| removed | -40 B | 100.0% → 0.0% | 40 B → 0 B |   1 → 0 | `<init>(char[], int, int, Void)` | `java.lang.String` |

##### `putVal(Object, Object, boolean)` (`java.util.concurrent.ConcurrentHashMap`)

| Change | Delta |      % |        Size | Objects | Caller                | Location                                 |
| -----: | ----: | -----: | ----------: | ------: | --------------------- | ---------------------------------------- |
| -50.0% | -32 B | 100.0% | 64 B → 32 B |   2 → 1 | `put(Object, Object)` | `java.util.concurrent.ConcurrentHashMap` |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

|  Change |       Delta |             % |                Size |   Objects | Function                                             | Location                                                                                                                                      |
| ------: | ----------: | ------------: | ------------------: | --------: | ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| +107.4% | +14.747 MiB | 86.9% → 93.2% | 13.7 MiB → 28.5 MiB | 231 → 659 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                                                                        |
| +107.4% | +14.747 MiB | 86.9% → 93.2% | 13.7 MiB → 28.5 MiB | 231 → 659 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                                                                                                          |
| +107.4% | +14.747 MiB | 86.9% → 93.2% | 13.7 MiB → 28.5 MiB | 231 → 659 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                                                                                                           |
| +107.4% | +14.747 MiB | 86.9% → 93.2% | 13.7 MiB → 28.5 MiB | 231 → 659 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`                                                                                                 |
| +107.4% | +14.747 MiB | 86.9% → 93.2% | 13.7 MiB → 28.5 MiB | 231 → 659 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                                                                                                           |
| +107.4% | +14.747 MiB | 86.9% → 93.2% | 13.7 MiB → 28.5 MiB | 231 → 659 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                                                                                                           |
| +107.4% | +14.747 MiB | 86.9% → 93.2% | 13.7 MiB → 28.5 MiB | 231 → 659 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                                                                                                   |
|  +93.2% | +14.711 MiB | 99.9% → 99.8% | 15.8 MiB → 30.5 MiB | 217 → 605 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                                                                                                            |
| +107.1% | +14.688 MiB | 86.8% → 93.0% | 13.7 MiB → 28.4 MiB | 189 → 519 | `merge(Map, Map)`                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
| +107.1% | +14.688 MiB | 86.8% → 93.0% | 13.7 MiB → 28.4 MiB | 189 → 518 | `combineResults(Map, Map)`                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
| +107.1% | +14.688 MiB | 86.8% → 93.0% | 13.7 MiB → 28.4 MiB | 189 → 518 | `combineResults(Object, Object)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
| +107.1% | +14.688 MiB | 86.8% → 93.0% | 13.7 MiB → 28.4 MiB | 188 → 511 | `lambda$merge$6(List, List)`                         | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
| +107.1% | +14.688 MiB | 86.8% → 93.0% | 13.7 MiB → 28.4 MiB | 188 → 511 | `apply(Object, Object)`                              | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000005011a7248` |
| +107.1% | +14.688 MiB | 86.8% → 93.0% | 13.7 MiB → 28.4 MiB | 188 → 511 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                                                                                                                           |
| +107.1% | +14.688 MiB | 86.8% → 93.0% | 13.7 MiB → 28.4 MiB | 188 → 511 | `lambda$merge$7(Map, Object, List)`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
| +107.1% | +14.688 MiB | 86.8% → 93.0% | 13.7 MiB → 28.4 MiB | 188 → 511 | `accept(Object, Object)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000005011a7000` |
| +107.1% | +14.688 MiB | 86.8% → 93.0% | 13.7 MiB → 28.4 MiB | 188 → 511 | `forEach(BiConsumer)`                                | `java.util.HashMap`                                                                                                                           |
| +102.8% | +11.891 MiB | 73.3% → 76.8% | 11.6 MiB → 23.5 MiB | 144 → 387 | `addAll(Collection)`                                 | `java.util.ArrayList`                                                                                                                         |
| +100.6% | +10.709 MiB | 67.4% → 69.9% | 10.6 MiB → 21.4 MiB | 124 → 365 | `grow(int)`                                          | `java.util.ArrayList`                                                                                                                         |
| +109.3% |  +9.732 MiB | 56.4% → 61.0% |  8.9 MiB → 18.6 MiB |  65 → 153 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                                                                                                           |

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

|  Change |      Delta |            % |                Size |   Objects | Function                                                                                                               | Location                                                                                                                                      |
| ------: | ---------: | -----------: | ------------------: | --------: | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| removed | -2.064 MiB | 13.1% → 0.0% |      2.06 MiB → 0 B |   155 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                                                                                   |
|  -43.1% | -1.273 KiB |        <0.1% | 2.95 KiB → 1.68 KiB |  126 → 43 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001125b10 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000005011a25c0` |
| removed |     -200 B | <0.1% → 0.0% |         200 B → 0 B |     2 → 0 | `makePreparedLambdaForm(MethodType, int)`                                                                              | `java.lang.invoke.DirectMethodHandle`                                                                                                         |
| removed |     -200 B | <0.1% → 0.0% |         200 B → 0 B |     2 → 0 | `preparedLambdaForm(MethodType, int)`                                                                                  | `java.lang.invoke.DirectMethodHandle`                                                                                                         |
| removed |     -200 B | <0.1% → 0.0% |         200 B → 0 B |     2 → 0 | `preparedLambdaForm(MemberName, boolean)`                                                                              | `java.lang.invoke.DirectMethodHandle`                                                                                                         |
| removed |     -200 B | <0.1% → 0.0% |         200 B → 0 B |     2 → 0 | `preparedLambdaForm(MemberName)`                                                                                       | `java.lang.invoke.DirectMethodHandle`                                                                                                         |
| removed |     -200 B | <0.1% → 0.0% |         200 B → 0 B |     2 → 0 | `make(byte, Class, MemberName, Class)`                                                                                 | `java.lang.invoke.DirectMethodHandle`                                                                                                         |
|   -6.3% |     -192 B |        <0.1% | 2.95 KiB → 2.77 KiB | 126 → 118 | `valueOf(double)`                                                                                                      | `java.lang.Double`                                                                                                                            |
|   -6.3% |     -192 B |        <0.1% | 2.95 KiB → 2.77 KiB | 126 → 118 | `lambda$generateData$3(int, int, Random[], int)`                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
| removed |     -136 B | <0.1% → 0.0% |         136 B → 0 B |     2 → 0 | `copyOfRangeByte(byte[], int, int)`                                                                                    | `java.util.Arrays`                                                                                                                            |
| removed |     -136 B | <0.1% → 0.0% |         136 B → 0 B |     2 → 0 | `copyOfRange(byte[], int, int)`                                                                                        | `java.util.Arrays`                                                                                                                            |
| removed |     -120 B | <0.1% → 0.0% |         120 B → 0 B |     1 → 0 | `<init>(MethodType)`                                                                                                   | `java.lang.invoke.MethodTypeForm`                                                                                                             |
| removed |     -120 B | <0.1% → 0.0% |         120 B → 0 B |     1 → 0 | `findForm(MethodType)`                                                                                                 | `java.lang.invoke.MethodTypeForm`                                                                                                             |
| removed |     -120 B | <0.1% → 0.0% |         120 B → 0 B |     1 → 0 | `makeImpl(Class, Class[], boolean)`                                                                                    | `java.lang.invoke.MethodType`                                                                                                                 |
| removed |     -120 B | <0.1% → 0.0% |         120 B → 0 B |     1 → 0 | `methodType(Class, Class[], boolean)`                                                                                  | `java.lang.invoke.MethodType`                                                                                                                 |
| removed |     -120 B | <0.1% → 0.0% |         120 B → 0 B |     1 → 0 | `canonicalize(MethodType, int)`                                                                                        | `java.lang.invoke.MethodTypeForm`                                                                                                             |
| removed |     -120 B | <0.1% → 0.0% |         120 B → 0 B |     1 → 0 | `insertParameterTypes(int, Class[])`                                                                                   | `java.lang.invoke.MethodType`                                                                                                                 |
| removed |     -120 B | <0.1% → 0.0% |         120 B → 0 B |     1 → 0 | `invokerType()`                                                                                                        | `java.lang.invoke.MethodType`                                                                                                                 |
| removed |     -120 B | <0.1% → 0.0% |         120 B → 0 B |     1 → 0 | `getDirectMethodCommon(byte, Class, MemberName, boolean, boolean, MethodHandles$Lookup)`                               | `java.lang.invoke.MethodHandles$Lookup`                                                                                                       |
| removed |     -120 B | <0.1% → 0.0% |         120 B → 0 B |     1 → 0 | `getDirectMethodNoSecurityManager(byte, Class, MemberName, MethodHandles$Lookup)`                                      | `java.lang.invoke.MethodHandles$Lookup`                                                                                                       |

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

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|  Change |       Delta |             % |                Size |   Objects | Callee                           | Location                                                   |
| ------: | ----------: | ------------: | ------------------: | --------: | -------------------------------- | ---------------------------------------------------------- |
| +107.1% | +14.688 MiB | 99.9% → 99.7% | 13.7 MiB → 28.4 MiB | 189 → 518 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +143.8% |   +5.76 MiB | 29.2% → 34.3% | 4.01 MiB → 9.77 MiB | 176 → 530 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
| +291.2% |  +60.46 KiB |   0.1% → 0.3% | 20.8 KiB → 81.2 KiB |  39 → 133 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +300.0% |      +144 B |         <0.1% |        48 B → 192 B |     1 → 4 | `createSubtask(int, int)`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +157.1% |       +88 B |         <0.1% |        56 B → 144 B |     1 → 3 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|  Change |       Delta |      % |                Size |   Objects | Callee      | Location                                               |
| ------: | ----------: | -----: | ------------------: | --------: | ----------- | ------------------------------------------------------ |
| +107.4% | +14.747 MiB | 100.0% | 13.7 MiB → 28.5 MiB | 231 → 659 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|  Change |       Delta |             % |                Size |   Objects | Callee   | Location                                            |
| ------: | ----------: | ------------: | ------------------: | --------: | -------- | --------------------------------------------------- |
| +107.4% | +14.747 MiB |        100.0% | 13.7 MiB → 28.5 MiB | 231 → 659 | `exec()` | `java.util.concurrent.RecursiveTask`                |
| +109.3% |  +9.732 MiB | 64.8% → 65.4% |  8.9 MiB → 18.6 MiB |  64 → 150 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change |       Delta |      % |                Size |   Objects | Callee     | Location                            |
| ------: | ----------: | -----: | ------------------: | --------: | ---------- | ----------------------------------- |
| +107.4% | +14.747 MiB | 100.0% | 13.7 MiB → 28.5 MiB | 231 → 659 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|  Change |       Delta |      % |                Size |   Objects | Callee                                               | Location                                      |
| ------: | ----------: | -----: | ------------------: | --------: | ---------------------------------------------------- | --------------------------------------------- |
| +107.4% | +14.747 MiB | 100.0% | 13.7 MiB → 28.5 MiB | 231 → 659 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|  Change |       Delta |      % |                Size |   Objects | Callee                                   | Location                            |
| ------: | ----------: | -----: | ------------------: | --------: | ---------------------------------------- | ----------------------------------- |
| +107.4% | +14.747 MiB | 100.0% | 13.7 MiB → 28.5 MiB | 231 → 659 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|  Change |       Delta |      % |                Size |   Objects | Callee                              | Location                            |
| ------: | ----------: | -----: | ------------------: | --------: | ----------------------------------- | ----------------------------------- |
| +107.4% | +14.747 MiB | 100.0% | 13.7 MiB → 28.5 MiB | 231 → 659 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |       Delta |            % |                Size |   Objects | Callee                | Location            |
| ------: | ----------: | -----------: | ------------------: | --------: | --------------------- | ------------------- |
| +107.1% | +14.688 MiB |       100.0% | 13.7 MiB → 28.4 MiB | 188 → 511 | `forEach(BiConsumer)` | `java.util.HashMap` |
|     new |      +288 B | 0.0% → <0.1% |         0 B → 288 B |     0 → 7 | `<init>(Map)`         | `java.util.HashMap` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change |       Delta |      % |                Size |   Objects | Callee            | Location                                    |
| ------: | ----------: | -----: | ------------------: | --------: | ----------------- | ------------------------------------------- |
| +107.1% | +14.688 MiB | 100.0% | 13.7 MiB → 28.4 MiB | 189 → 518 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change |       Delta |      % |                Size |   Objects | Callee                     | Location                                                   |
| ------: | ----------: | -----: | ------------------: | --------: | -------------------------- | ---------------------------------------------------------- |
| +107.1% | +14.688 MiB | 100.0% | 13.7 MiB → 28.4 MiB | 189 → 518 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |       Delta |             % |                Size |   Objects | Callee               | Location              |
| ------: | ----------: | ------------: | ------------------: | --------: | -------------------- | --------------------- |
| +102.8% | +11.891 MiB | 84.4% → 82.6% | 11.6 MiB → 23.5 MiB | 144 → 387 | `addAll(Collection)` | `java.util.ArrayList` |
| +130.8% |  +2.796 MiB | 15.6% → 17.4% | 2.14 MiB → 4.94 MiB |  44 → 122 | `<init>(Collection)` | `java.util.ArrayList` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000005011a7248`)

|  Change |       Delta |      % |                Size |   Objects | Callee                       | Location                                    |
| ------: | ----------: | -----: | ------------------: | --------: | ---------------------------- | ------------------------------------------- |
| +107.1% | +14.688 MiB | 100.0% | 13.7 MiB → 28.4 MiB | 188 → 511 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|  Change |       Delta |      % |                Size |   Objects | Callee                  | Location                                                                                                                                      |
| ------: | ----------: | -----: | ------------------: | --------: | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| +107.1% | +14.688 MiB | 100.0% | 13.7 MiB → 28.4 MiB | 188 → 511 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000005011a7248` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |       Delta |      % |                Size |   Objects | Callee                              | Location            |
| ------: | ----------: | -----: | ------------------: | --------: | ----------------------------------- | ------------------- |
| +107.1% | +14.688 MiB | 100.0% | 13.7 MiB → 28.4 MiB | 188 → 511 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000005011a7000`)

|  Change |       Delta |      % |                Size |   Objects | Callee                              | Location                                    |
| ------: | ----------: | -----: | ------------------: | --------: | ----------------------------------- | ------------------------------------------- |
| +107.1% | +14.688 MiB | 100.0% | 13.7 MiB → 28.4 MiB | 188 → 511 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|  Change |       Delta |      % |                Size |   Objects | Callee                   | Location                                                                                                                                      |
| ------: | ----------: | -----: | ------------------: | --------: | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| +107.1% | +14.688 MiB | 100.0% | 13.7 MiB → 28.4 MiB | 188 → 511 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000005011a7000` |

##### `addAll(Collection)` (`java.util.ArrayList`)

|  Change |       Delta |             % |                Size |  Objects | Callee      | Location              |
| ------: | ----------: | ------------: | ------------------: | -------: | ----------- | --------------------- |
| +124.6% | +10.686 MiB | 74.1% → 82.1% | 8.58 MiB → 19.3 MiB | 92 → 264 | `grow(int)` | `java.util.ArrayList` |
|  +40.3% |  +1.205 MiB | 25.9% → 17.9% |  2.99 MiB → 4.2 MiB | 52 → 123 | `toArray()` | `java.util.ArrayList` |

##### `grow(int)` (`java.util.ArrayList`)

|  Change |       Delta |      % |                Size |   Objects | Callee                  | Location           |
| ------: | ----------: | -----: | ------------------: | --------: | ----------------------- | ------------------ |
| +100.6% | +10.709 MiB | 100.0% | 10.6 MiB → 21.4 MiB | 121 → 360 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|  Change |      Delta |      % |               Size |  Objects | Callee     | Location                            |
| ------: | ---------: | -----: | -----------------: | -------: | ---------- | ----------------------------------- |
| +109.3% | +9.732 MiB | 100.0% | 8.9 MiB → 18.6 MiB | 65 → 153 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|  Change |      Delta |      % |               Size |  Objects | Callee   | Location                                                                                                                                      |
| ------: | ---------: | -----: | -----------------: | -------: | -------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| +109.3% | +9.732 MiB | 100.0% | 8.9 MiB → 18.6 MiB | 64 → 150 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000005011a2bd0` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|  Change |        Delta |             % |               Size |   Objects | Callee                                                    | Location                                      |
| ------: | -----------: | ------------: | -----------------: | --------: | --------------------------------------------------------- | --------------------------------------------- |
| +143.2% |   +5.727 MiB | 99.9% → 99.6% |   4 MiB → 9.73 MiB | 175 → 527 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  +95.0% | +536.593 KiB | 13.8% → 11.0% | 565 KiB → 1.08 MiB |  38 → 124 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|  Change |     Delta |      % |                Size |   Objects | Callee                 | Location                            |
| ------: | --------: | -----: | ------------------: | --------: | ---------------------- | ----------------------------------- |
| +143.8% | +5.76 MiB | 100.0% | 4.01 MiB → 9.77 MiB | 176 → 530 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change |      Delta |      % |             Size |   Objects | Callee     | Location                            |
| ------: | ---------: | -----: | ---------------: | --------: | ---------- | ----------------------------------- |
| +143.2% | +5.727 MiB | 100.0% | 4 MiB → 9.73 MiB | 175 → 527 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `toArray()` (`java.util.ArrayList`)

| Change |      Delta |      % |                Size |  Objects | Callee                  | Location           |
| -----: | ---------: | -----: | ------------------: | -------: | ----------------------- | ------------------ |
| +78.0% | +4.002 MiB | 100.0% | 5.13 MiB → 9.14 MiB | 96 → 245 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `<init>(Collection)` (`java.util.ArrayList`)

|  Change |      Delta |      % |                Size |  Objects | Callee      | Location              |
| ------: | ---------: | -----: | ------------------: | -------: | ----------- | --------------------- |
| +130.8% | +2.796 MiB | 100.0% | 2.14 MiB → 4.94 MiB | 44 → 122 | `toArray()` | `java.util.ArrayList` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change |        Delta |      % |               Size |  Objects | Callee     | Location                            |
| -----: | -----------: | -----: | -----------------: | -------: | ---------- | ----------------------------------- |
| +95.0% | +536.593 KiB | 100.0% | 565 KiB → 1.08 MiB | 38 → 124 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `grow()` (`java.util.ArrayList`)

| Change |       Delta |      % |               Size |  Objects | Callee      | Location              |
| -----: | ----------: | -----: | -----------------: | -------: | ----------- | --------------------- |
|  +1.1% | +23.695 KiB | 100.0% | 2.07 MiB → 2.1 MiB | 32 → 101 | `grow(int)` | `java.util.ArrayList` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |      Delta |             % |           Size | Objects | Callee               | Location                                  |
| ------: | ---------: | ------------: | -------------: | ------: | -------------------- | ----------------------------------------- |
| removed | -2.064 MiB | 100.0% → 0.0% | 2.06 MiB → 0 B | 155 → 0 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000005011a25c0`)

|  Change |      Delta |             % |           Size | Objects | Callee                                           | Location                                    |
| ------: | ---------: | ------------: | -------------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| removed | -2.953 KiB | 100.0% → 0.0% | 2.95 KiB → 0 B | 126 → 0 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |
|     new | +1.679 KiB | 0.0% → 100.0% | 0 B → 1.68 KiB |  0 → 43 | `lambda$generateData$4(int)`                     | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `makePreparedLambdaForm(MethodType, int)` (`java.lang.invoke.DirectMethodHandle`)

|  Change |  Delta |            % |        Size | Objects | Callee                | Location                      |
| ------: | -----: | -----------: | ----------: | ------: | --------------------- | ----------------------------- |
| removed | -120 B | 60.0% → 0.0% | 120 B → 0 B |   1 → 0 | `invokerType()`       | `java.lang.invoke.MethodType` |
| removed |  -80 B | 40.0% → 0.0% |  80 B → 0 B |   1 → 0 | `compileToBytecode()` | `java.lang.invoke.LambdaForm` |

##### `preparedLambdaForm(MethodType, int)` (`java.lang.invoke.DirectMethodHandle`)

|  Change |  Delta |             % |        Size | Objects | Callee                                    | Location                              |
| ------: | -----: | ------------: | ----------: | ------: | ----------------------------------------- | ------------------------------------- |
| removed | -200 B | 100.0% → 0.0% | 200 B → 0 B |   2 → 0 | `makePreparedLambdaForm(MethodType, int)` | `java.lang.invoke.DirectMethodHandle` |

##### `preparedLambdaForm(MemberName, boolean)` (`java.lang.invoke.DirectMethodHandle`)

|  Change |  Delta |             % |        Size | Objects | Callee                                | Location                              |
| ------: | -----: | ------------: | ----------: | ------: | ------------------------------------- | ------------------------------------- |
| removed | -200 B | 100.0% → 0.0% | 200 B → 0 B |   2 → 0 | `preparedLambdaForm(MethodType, int)` | `java.lang.invoke.DirectMethodHandle` |

##### `preparedLambdaForm(MemberName)` (`java.lang.invoke.DirectMethodHandle`)

|  Change |  Delta |             % |        Size | Objects | Callee                                    | Location                              |
| ------: | -----: | ------------: | ----------: | ------: | ----------------------------------------- | ------------------------------------- |
| removed | -200 B | 100.0% → 0.0% | 200 B → 0 B |   2 → 0 | `preparedLambdaForm(MemberName, boolean)` | `java.lang.invoke.DirectMethodHandle` |

##### `make(byte, Class, MemberName, Class)` (`java.lang.invoke.DirectMethodHandle`)

|  Change |  Delta |             % |        Size | Objects | Callee                           | Location                              |
| ------: | -----: | ------------: | ----------: | ------: | -------------------------------- | ------------------------------------- |
| removed | -200 B | 100.0% → 0.0% | 200 B → 0 B |   2 → 0 | `preparedLambdaForm(MemberName)` | `java.lang.invoke.DirectMethodHandle` |

##### `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |  Delta |      % |                Size |   Objects | Callee            | Location           |
| -----: | -----: | -----: | ------------------: | --------: | ----------------- | ------------------ |
|  -6.3% | -192 B | 100.0% | 2.95 KiB → 2.77 KiB | 126 → 118 | `valueOf(double)` | `java.lang.Double` |

##### `copyOfRange(byte[], int, int)` (`java.util.Arrays`)

|  Change |  Delta |             % |        Size | Objects | Callee                              | Location           |
| ------: | -----: | ------------: | ----------: | ------: | ----------------------------------- | ------------------ |
| removed | -136 B | 100.0% → 0.0% | 136 B → 0 B |   2 → 0 | `copyOfRangeByte(byte[], int, int)` | `java.util.Arrays` |

##### `findForm(MethodType)` (`java.lang.invoke.MethodTypeForm`)

|  Change |  Delta |             % |        Size | Objects | Callee                          | Location                          |
| ------: | -----: | ------------: | ----------: | ------: | ------------------------------- | --------------------------------- |
| removed | -120 B | 100.0% → 0.0% | 120 B → 0 B |   1 → 0 | `<init>(MethodType)`            | `java.lang.invoke.MethodTypeForm` |
| removed | -120 B | 100.0% → 0.0% | 120 B → 0 B |   1 → 0 | `canonicalize(MethodType, int)` | `java.lang.invoke.MethodTypeForm` |

##### `makeImpl(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

|  Change |  Delta |             % |        Size | Objects | Callee                 | Location                          |
| ------: | -----: | ------------: | ----------: | ------: | ---------------------- | --------------------------------- |
| removed | -120 B | 100.0% → 0.0% | 120 B → 0 B |   1 → 0 | `findForm(MethodType)` | `java.lang.invoke.MethodTypeForm` |

##### `methodType(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

|  Change |  Delta |             % |        Size | Objects | Callee                              | Location                      |
| ------: | -----: | ------------: | ----------: | ------: | ----------------------------------- | ----------------------------- |
| removed | -120 B | 100.0% → 0.0% | 120 B → 0 B |   1 → 0 | `makeImpl(Class, Class[], boolean)` | `java.lang.invoke.MethodType` |

##### `canonicalize(MethodType, int)` (`java.lang.invoke.MethodTypeForm`)

|  Change |  Delta |             % |        Size | Objects | Callee                                | Location                      |
| ------: | -----: | ------------: | ----------: | ------: | ------------------------------------- | ----------------------------- |
| removed | -120 B | 100.0% → 0.0% | 120 B → 0 B |   1 → 0 | `methodType(Class, Class[], boolean)` | `java.lang.invoke.MethodType` |

##### `insertParameterTypes(int, Class[])` (`java.lang.invoke.MethodType`)

|  Change |  Delta |             % |        Size | Objects | Callee                              | Location                      |
| ------: | -----: | ------------: | ----------: | ------: | ----------------------------------- | ----------------------------- |
| removed | -120 B | 100.0% → 0.0% | 120 B → 0 B |   1 → 0 | `makeImpl(Class, Class[], boolean)` | `java.lang.invoke.MethodType` |

##### `invokerType()` (`java.lang.invoke.MethodType`)

|  Change |  Delta |             % |        Size | Objects | Callee                               | Location                      |
| ------: | -----: | ------------: | ----------: | ------: | ------------------------------------ | ----------------------------- |
| removed | -120 B | 100.0% → 0.0% | 120 B → 0 B |   1 → 0 | `insertParameterTypes(int, Class[])` | `java.lang.invoke.MethodType` |

##### `getDirectMethodCommon(byte, Class, MemberName, boolean, boolean, MethodHandles$Lookup)` (`java.lang.invoke.MethodHandles$Lookup`)

|  Change |  Delta |             % |        Size | Objects | Callee                                 | Location                              |
| ------: | -----: | ------------: | ----------: | ------: | -------------------------------------- | ------------------------------------- |
| removed | -120 B | 100.0% → 0.0% | 120 B → 0 B |   1 → 0 | `make(byte, Class, MemberName, Class)` | `java.lang.invoke.DirectMethodHandle` |

##### `getDirectMethodNoSecurityManager(byte, Class, MemberName, MethodHandles$Lookup)` (`java.lang.invoke.MethodHandles$Lookup`)

|  Change |  Delta |             % |        Size | Objects | Callee                                                                                   | Location                                |
| ------: | -----: | ------------: | ----------: | ------: | ---------------------------------------------------------------------------------------- | --------------------------------------- |
| removed | -120 B | 100.0% → 0.0% | 120 B → 0 B |   1 → 0 | `getDirectMethodCommon(byte, Class, MemberName, boolean, boolean, MethodHandles$Lookup)` | `java.lang.invoke.MethodHandles$Lookup` |

##### `getDirectMethodForConstant(byte, Class, MemberName)` (`java.lang.invoke.MethodHandles$Lookup`)

|  Change |  Delta |             % |        Size | Objects | Callee                                                                            | Location                                |
| ------: | -----: | ------------: | ----------: | ------: | --------------------------------------------------------------------------------- | --------------------------------------- |
| removed | -120 B | 100.0% → 0.0% | 120 B → 0 B |   1 → 0 | `getDirectMethodNoSecurityManager(byte, Class, MemberName, MethodHandles$Lookup)` | `java.lang.invoke.MethodHandles$Lookup` |

##### `linkMethodHandleConstant(byte, Class, String, Object)` (`java.lang.invoke.MethodHandles$Lookup`)

|  Change |  Delta |             % |        Size | Objects | Callee                                                | Location                                |
| ------: | -----: | ------------: | ----------: | ------: | ----------------------------------------------------- | --------------------------------------- |
| removed | -120 B | 100.0% → 0.0% | 120 B → 0 B |   1 → 0 | `getDirectMethodForConstant(byte, Class, MemberName)` | `java.lang.invoke.MethodHandles$Lookup` |

##### `linkMethodHandleConstant(Class, int, Class, String, Object)` (`java.lang.invoke.MethodHandleNatives`)

|  Change |  Delta |             % |        Size | Objects | Callee                                                  | Location                                |
| ------: | -----: | ------------: | ----------: | ------: | ------------------------------------------------------- | --------------------------------------- |
| removed | -120 B | 100.0% → 0.0% | 120 B → 0 B |   1 → 0 | `linkMethodHandleConstant(byte, Class, String, Object)` | `java.lang.invoke.MethodHandles$Lookup` |

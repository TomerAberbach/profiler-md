# Allocated heap profile diff

Allocated 37 GiB (+76.506 MiB, +0.2%) over 75,372 samples → 75,519 samples (514 KiB per sample).

| Category         | Change |        Delta |             % |                Size |         Samples |
| ---------------- | -----: | -----------: | ------------: | ------------------: | --------------: |
| Standard library |  +0.3% | +119.505 MiB | 93.3% → 93.4% | 34.5 GiB → 34.6 GiB | 70,292 → 70,525 |
| Ours             |  -1.7% |  -42.999 MiB |   6.7% → 6.6% | 2.48 GiB → 2.44 GiB |   5,080 → 4,994 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|  Change |          Delta |            % |                Size |         Samples | Function                                | Location                                               |
| ------: | -------------: | -----------: | ------------------: | --------------: | --------------------------------------- | ------------------------------------------------------ |
|   +0.3% |    +96.006 MiB |        91.1% |            33.7 GiB | 68,604 → 68,790 | `copyOf(Object[], int)`                 | `java.util.Arrays`                                     |
|  +11.4% |    +25.999 MiB |  0.6% → 0.7% |   227 MiB → 253 MiB |       455 → 507 | `grow(int)`                             | `java.util.ArrayList`                                  |
|  +16.7% |     +9.499 MiB |         0.2% |   57 MiB → 66.5 MiB |       114 → 133 | `valueOf(double)`                       | `java.lang.Double`                                     |
|  +22.2% |     +4.999 MiB |         0.1% | 22.5 MiB → 27.5 MiB |         45 → 55 | `intStream(Spliterator$OfInt, boolean)` | `java.util.stream.StreamSupport`                       |
|  +62.5% |     +4.999 MiB |        <0.1% |      8 MiB → 13 MiB |         16 → 26 | `allocateInstance(Object)`              | `java.lang.invoke.DirectMethodHandle`                  |
|  +26.5% |     +4.499 MiB | <0.1% → 0.1% |   17 MiB → 21.5 MiB |         34 → 43 | `lambda$generateData$4(int)`            | `org.renaissance.jdk.concurrent.JavaKMeans`            |
|  +18.8% |     +2.999 MiB |        <0.1% |     16 MiB → 19 MiB |         26 → 32 | `copyOf(Object[], int, Class)`          | `java.util.Arrays`                                     |
|   +2.6% |     +2.999 MiB |         0.3% |   113 MiB → 116 MiB |       227 → 233 | `lambda$merge$6(List, List)`            | `org.renaissance.jdk.concurrent.JavaKMeans`            |
|  +37.5% |     +2.999 MiB |        <0.1% |      8 MiB → 11 MiB |         16 → 22 | `opWrapSink(int, Sink)`                 | `java.util.stream.IntPipeline$1`                       |
|  +21.7% |     +2.499 MiB |        <0.1% |   11.5 MiB → 14 MiB |         23 → 28 | `entrySet()`                            | `java.util.HashMap`                                    |
|     new |     +2.499 MiB | 0.0% → <0.1% |       0 B → 2.5 MiB |           0 → 5 | `copyOfRangeByte(byte[], int, int)`     | `java.util.Arrays`                                     |
|  +33.3% |     +1.999 MiB |        <0.1% |       6 MiB → 8 MiB |         12 → 16 | `createSubtask(int, int)`               | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|     new |     +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |           0 → 4 | `<init>(int)`                           | `java.io.ByteArrayOutputStream`                        |
|  +42.9% |     +1.499 MiB |        <0.1% |     3.5 MiB → 5 MiB |          7 → 10 | `awaitDone(int, long)`                  | `java.util.concurrent.ForkJoinTask`                    |
| +300.0% |     +1.499 MiB |        <0.1% |     512 KiB → 2 MiB |           1 → 4 | `spliterator(double[], int, int, int)`  | `java.util.Spliterators`                               |
|     new |     +1.499 MiB | 0.0% → <0.1% |       0 B → 1.5 MiB |           0 → 3 | `fillInStackTrace(int)`                 | `java.lang.Throwable`                                  |
|   +9.1% | +1,023.998 KiB |        <0.1% |     11 MiB → 12 MiB |         22 → 24 | `copyOf(byte[], int)`                   | `java.util.Arrays`                                     |
|   +8.7% | +1,023.998 KiB |        <0.1% | 11.5 MiB → 12.5 MiB |         23 → 25 | `builder(long, IntFunction)`            | `java.util.stream.Nodes`                               |
| +100.0% | +1,023.998 KiB |        <0.1% |    1024 KiB → 2 MiB |           2 → 4 | `div(double[], int)`                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| +200.0% | +1,023.998 KiB |        <0.1% |   512 KiB → 1.5 MiB |           1 → 3 | `mapToObj(DoubleFunction, int)`         | `java.util.stream.DoublePipeline`                      |

##### Standard library

|  Change |          Delta |            % |                Size |         Samples | Function                                                             | Location                                 |
| ------: | -------------: | -----------: | ------------------: | --------------: | -------------------------------------------------------------------- | ---------------------------------------- |
|   +0.3% |    +96.006 MiB |        91.1% |            33.7 GiB | 68,604 → 68,790 | `copyOf(Object[], int)`                                              | `java.util.Arrays`                       |
|  +11.4% |    +25.999 MiB |  0.6% → 0.7% |   227 MiB → 253 MiB |       455 → 507 | `grow(int)`                                                          | `java.util.ArrayList`                    |
|  +16.7% |     +9.499 MiB |         0.2% |   57 MiB → 66.5 MiB |       114 → 133 | `valueOf(double)`                                                    | `java.lang.Double`                       |
|  +22.2% |     +4.999 MiB |         0.1% | 22.5 MiB → 27.5 MiB |         45 → 55 | `intStream(Spliterator$OfInt, boolean)`                              | `java.util.stream.StreamSupport`         |
|  +62.5% |     +4.999 MiB |        <0.1% |      8 MiB → 13 MiB |         16 → 26 | `allocateInstance(Object)`                                           | `java.lang.invoke.DirectMethodHandle`    |
|  +18.8% |     +2.999 MiB |        <0.1% |     16 MiB → 19 MiB |         26 → 32 | `copyOf(Object[], int, Class)`                                       | `java.util.Arrays`                       |
|  +37.5% |     +2.999 MiB |        <0.1% |      8 MiB → 11 MiB |         16 → 22 | `opWrapSink(int, Sink)`                                              | `java.util.stream.IntPipeline$1`         |
|  +21.7% |     +2.499 MiB |        <0.1% |   11.5 MiB → 14 MiB |         23 → 28 | `entrySet()`                                                         | `java.util.HashMap`                      |
|     new |     +2.499 MiB | 0.0% → <0.1% |       0 B → 2.5 MiB |           0 → 5 | `copyOfRangeByte(byte[], int, int)`                                  | `java.util.Arrays`                       |
|     new |     +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |           0 → 4 | `<init>(int)`                                                        | `java.io.ByteArrayOutputStream`          |
|  +42.9% |     +1.499 MiB |        <0.1% |     3.5 MiB → 5 MiB |          7 → 10 | `awaitDone(int, long)`                                               | `java.util.concurrent.ForkJoinTask`      |
| +300.0% |     +1.499 MiB |        <0.1% |     512 KiB → 2 MiB |           1 → 4 | `spliterator(double[], int, int, int)`                               | `java.util.Spliterators`                 |
|     new |     +1.499 MiB | 0.0% → <0.1% |       0 B → 1.5 MiB |           0 → 3 | `fillInStackTrace(int)`                                              | `java.lang.Throwable`                    |
|   +9.1% | +1,023.998 KiB |        <0.1% |     11 MiB → 12 MiB |         22 → 24 | `copyOf(byte[], int)`                                                | `java.util.Arrays`                       |
|   +8.7% | +1,023.998 KiB |        <0.1% | 11.5 MiB → 12.5 MiB |         23 → 25 | `builder(long, IntFunction)`                                         | `java.util.stream.Nodes`                 |
| +200.0% | +1,023.998 KiB |        <0.1% |   512 KiB → 1.5 MiB |           1 → 3 | `mapToObj(DoubleFunction, int)`                                      | `java.util.stream.DoublePipeline`        |
|     new | +1,023.998 KiB | 0.0% → <0.1% |      0 B → 1024 KiB |           0 → 2 | `readNBytes(int)`                                                    | `java.io.InputStream`                    |
|     new |   +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |           0 → 1 | `allocateUninitializedArray(Class, int)`                             | `jdk.internal.misc.Unsafe`               |
| +100.0% |   +511.999 KiB |        <0.1% |  512 KiB → 1024 KiB |           1 → 2 | `<init>(InputStream, int)`                                           | `java.util.jar.Manifest$FastInputStream` |
|     new |   +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |           0 → 1 | `altMetafactory(MethodHandles$Lookup, String, MethodType, Object[])` | `java.lang.invoke.LambdaMetafactory`     |

##### Ours

|  Change |          Delta |            % |              Size |   Samples | Function                       | Location                                               |
| ------: | -------------: | -----------: | ----------------: | --------: | ------------------------------ | ------------------------------------------------------ |
|  +26.5% |     +4.499 MiB | <0.1% → 0.1% | 17 MiB → 21.5 MiB |   34 → 43 | `lambda$generateData$4(int)`   | `org.renaissance.jdk.concurrent.JavaKMeans`            |
|   +2.6% |     +2.999 MiB |         0.3% | 113 MiB → 116 MiB | 227 → 233 | `lambda$merge$6(List, List)`   | `org.renaissance.jdk.concurrent.JavaKMeans`            |
|  +33.3% |     +1.999 MiB |        <0.1% |     6 MiB → 8 MiB |   12 → 16 | `createSubtask(int, int)`      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| +100.0% | +1,023.998 KiB |        <0.1% |  1024 KiB → 2 MiB |     2 → 4 | `div(double[], int)`           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|     new | +1,023.998 KiB | 0.0% → <0.1% |    0 B → 1024 KiB |     0 → 2 | `<init>(JavaKMeans, Map)`      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  +33.3% |   +511.999 KiB |        <0.1% |   1.5 MiB → 2 MiB |     3 → 4 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`            |
|   +6.7% |   +511.999 KiB |        <0.1% |   7.5 MiB → 8 MiB |   15 → 16 | `computeClusterAverages()`     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |          Delta |            % |                Size |       Samples | Function                                              | Location                                                   |
| ------: | -------------: | -----------: | ------------------: | ------------: | ----------------------------------------------------- | ---------------------------------------------------------- |
|   -9.5% |    -27.499 MiB |  0.8% → 0.7% |   290 MiB → 263 MiB |     581 → 526 | `newNode(int, Object, Object, HashMap$Node)`          | `java.util.HashMap`                                        |
|  -17.3% |    -19.999 MiB |         0.3% |  115 MiB → 95.5 MiB |     231 → 191 | `collectClusters(int[])`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -6.1% |     -9.499 MiB |         0.4% |   156 MiB → 147 MiB |     313 → 294 | `createSubtask(int, int)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -61.9% |     -6.499 MiB |        <0.1% |    10.5 MiB → 4 MiB |        21 → 8 | `<init>(InputStream, Inflater, int)`                  | `java.util.zip.InflaterInputStream`                        |
|   -5.2% |     -5.999 MiB |         0.3% |   115 MiB → 109 MiB |     231 → 219 | `resize()`                                            | `java.util.HashMap`                                        |
|   -5.4% |     -5.499 MiB |         0.3% |  101 MiB → 95.5 MiB |     202 → 191 | `lambda$collectClusters$0(Double[])`                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -0.3% |     -4.999 MiB |         4.4% |            1.62 GiB | 3,320 → 3,310 | `findNearestCentroid()`                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -6.5% |     -4.499 MiB |         0.2% |   69.5 MiB → 65 MiB |     139 → 130 | `vectorSum()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -5.2% |     -3.999 MiB |         0.2% | 77.5 MiB → 73.5 MiB |     155 → 147 | `add(double[], double[])`                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -2.1% |     -2.999 MiB |         0.4% |   144 MiB → 141 MiB |     289 → 283 | `createSubtask(int, int)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -3.8% |     -2.499 MiB |         0.2% |   66.5 MiB → 64 MiB |     133 → 128 | `merge(Map, Map)`                                     | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|   -8.9% |     -2.499 MiB |         0.1% |   28 MiB → 25.5 MiB |       56 → 51 | `mapToObj(IntFunction, int)`                          | `java.util.stream.IntPipeline`                             |
|  -50.0% | -1,023.998 KiB |        <0.1% |    2 MiB → 1024 KiB |         4 → 2 | `doubleStream(Spliterator$OfDouble, boolean)`         | `java.util.stream.StreamSupport`                           |
|  -66.7% | -1,023.998 KiB |        <0.1% |   1.5 MiB → 512 KiB |         3 → 1 | `<init>(ClassWriter)`                                 | `jdk.internal.org.objectweb.asm.SymbolTable`               |
| removed | -1,023.998 KiB | <0.1% → 0.0% |      1024 KiB → 0 B |         2 → 0 | `collectGarbage(String)`                              | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`   |
| removed |   -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |         1 → 0 | `average(List)`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| removed |   -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |         1 → 0 | `<clinit>()`                                          | `sun.security.util.KnownOIDs`                              |
| removed |   -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |         1 → 0 | `allocateUninitializedArray0(Class, int)`             | `jdk.internal.misc.Unsafe`                                 |
| removed |   -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |         1 → 0 | `read(Manifest$FastInputStream, byte[], String, int)` | `java.util.jar.Attributes`                                 |
| removed |   -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |         1 → 0 | `getInputStream(ZipEntry)`                            | `java.util.zip.ZipFile`                                    |

##### Standard library

|  Change |          Delta |            % |              Size |   Samples | Function                                                                        | Location                                     |
| ------: | -------------: | -----------: | ----------------: | --------: | ------------------------------------------------------------------------------- | -------------------------------------------- |
|   -9.5% |    -27.499 MiB |  0.8% → 0.7% | 290 MiB → 263 MiB | 581 → 526 | `newNode(int, Object, Object, HashMap$Node)`                                    | `java.util.HashMap`                          |
|  -61.9% |     -6.499 MiB |        <0.1% |  10.5 MiB → 4 MiB |    21 → 8 | `<init>(InputStream, Inflater, int)`                                            | `java.util.zip.InflaterInputStream`          |
|   -5.2% |     -5.999 MiB |         0.3% | 115 MiB → 109 MiB | 231 → 219 | `resize()`                                                                      | `java.util.HashMap`                          |
|   -8.9% |     -2.499 MiB |         0.1% | 28 MiB → 25.5 MiB |   56 → 51 | `mapToObj(IntFunction, int)`                                                    | `java.util.stream.IntPipeline`               |
|  -50.0% | -1,023.998 KiB |        <0.1% |  2 MiB → 1024 KiB |     4 → 2 | `doubleStream(Spliterator$OfDouble, boolean)`                                   | `java.util.stream.StreamSupport`             |
|  -66.7% | -1,023.998 KiB |        <0.1% | 1.5 MiB → 512 KiB |     3 → 1 | `<init>(ClassWriter)`                                                           | `jdk.internal.org.objectweb.asm.SymbolTable` |
| removed |   -511.999 KiB | <0.1% → 0.0% |     512 KiB → 0 B |     1 → 0 | `<clinit>()`                                                                    | `sun.security.util.KnownOIDs`                |
| removed |   -511.999 KiB | <0.1% → 0.0% |     512 KiB → 0 B |     1 → 0 | `allocateUninitializedArray0(Class, int)`                                       | `jdk.internal.misc.Unsafe`                   |
| removed |   -511.999 KiB | <0.1% → 0.0% |     512 KiB → 0 B |     1 → 0 | `read(Manifest$FastInputStream, byte[], String, int)`                           | `java.util.jar.Attributes`                   |
| removed |   -511.999 KiB | <0.1% → 0.0% |     512 KiB → 0 B |     1 → 0 | `getInputStream(ZipEntry)`                                                      | `java.util.zip.ZipFile`                      |
| removed |   -511.999 KiB | <0.1% → 0.0% |     512 KiB → 0 B |     1 → 0 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                      |
| removed |   -511.999 KiB | <0.1% → 0.0% |     512 KiB → 0 B |     1 → 0 | `<init>(int)`                                                                   | `jdk.internal.org.objectweb.asm.ByteVector`  |
| removed |   -511.999 KiB | <0.1% → 0.0% |     512 KiB → 0 B |     1 → 0 | `lookupKey(Object)`                                                             | `jdk.internal.util.ReferencedKeyMap`         |
| removed |   -511.999 KiB | <0.1% → 0.0% |     512 KiB → 0 B |     1 → 0 | `newString(byte[], int, int)`                                                   | `java.lang.StringLatin1`                     |
|   -4.5% |   -511.999 KiB |        <0.1% | 11 MiB → 10.5 MiB |   22 → 21 | `range(int, int)`                                                               | `java.util.stream.IntStream`                 |
| removed |   -511.999 KiB | <0.1% → 0.0% |     512 KiB → 0 B |     1 → 0 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])`                  | `java.util.concurrent.ConcurrentHashMap`     |
| removed |   -511.999 KiB | <0.1% → 0.0% |     512 KiB → 0 B |     1 → 0 | `iterator()`                                                                    | `java.util.HashMap$EntrySet`                 |
| removed |   -511.999 KiB | <0.1% → 0.0% |     512 KiB → 0 B |     1 → 0 | `print(Formatter, StringBuilder, double, Locale, int, char, int, boolean)`      | `java.util.Formatter$FormatSpecifier`        |

##### Ours

|  Change |          Delta |            % |                Size |       Samples | Function                             | Location                                                   |
| ------: | -------------: | -----------: | ------------------: | ------------: | ------------------------------------ | ---------------------------------------------------------- |
|  -17.3% |    -19.999 MiB |         0.3% |  115 MiB → 95.5 MiB |     231 → 191 | `collectClusters(int[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -6.1% |     -9.499 MiB |         0.4% |   156 MiB → 147 MiB |     313 → 294 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -5.4% |     -5.499 MiB |         0.3% |  101 MiB → 95.5 MiB |     202 → 191 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -0.3% |     -4.999 MiB |         4.4% |            1.62 GiB | 3,320 → 3,310 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -6.5% |     -4.499 MiB |         0.2% |   69.5 MiB → 65 MiB |     139 → 130 | `vectorSum()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -5.2% |     -3.999 MiB |         0.2% | 77.5 MiB → 73.5 MiB |     155 → 147 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -2.1% |     -2.999 MiB |         0.4% |   144 MiB → 141 MiB |     289 → 283 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -3.8% |     -2.499 MiB |         0.2% |   66.5 MiB → 64 MiB |     133 → 128 | `merge(Map, Map)`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed | -1,023.998 KiB | <0.1% → 0.0% |      1024 KiB → 0 B |         2 → 0 | `collectGarbage(String)`             | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`   |
| removed |   -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |         1 → 0 | `average(List)`                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                Size |         Samples | Function                                                  | Location                                                               |
| ------: | -----------: | ------------: | ------------------: | --------------: | --------------------------------------------------------- | ---------------------------------------------------------------------- |
|   +0.7% | +144.005 MiB | 52.7% → 53.0% | 19.5 GiB → 19.6 GiB | 39,581 → 39,863 | `grow(int)`                                               | `java.util.ArrayList`                                                  |
| +240.9% | +132.499 MiB |   0.1% → 0.5% |    55 MiB → 187 MiB |       110 → 375 | `apply(int)`                                              | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011258d8` |
|   +2.0% | +108.499 MiB | 14.6% → 14.8% | 5.38 GiB → 5.49 GiB | 11,021 → 11,238 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                                    |
|   +0.3% |  +99.006 MiB | 91.1% → 91.2% | 33.7 GiB → 33.8 GiB | 68,630 → 68,822 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                                                     |
|   +1.1% |  +69.499 MiB | 16.4% → 16.5% | 6.05 GiB → 6.12 GiB | 12,381 → 12,520 | `grow()`                                                  | `java.util.ArrayList`                                                  |
|   +1.1% |  +69.499 MiB | 16.4% → 16.5% | 6.05 GiB → 6.12 GiB | 12,381 → 12,520 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                                                  |
|   +1.1% |  +69.499 MiB | 16.4% → 16.5% | 6.05 GiB → 6.12 GiB | 12,381 → 12,520 | `add(Object)`                                             | `java.util.ArrayList`                                                  |
|   +0.2% |  +58.506 MiB |         75.6% |              28 GiB | 56,932 → 57,043 | `lambda$merge$7(Map, Object, List)`                       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   +0.2% |  +58.506 MiB |         75.6% |              28 GiB | 56,932 → 57,043 | `accept(Object, Object)`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88` |
|   +0.2% |  +58.506 MiB |         75.6% |              28 GiB | 56,932 → 57,043 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                                                    |
|   +0.2% |  +58.006 MiB |         75.6% |              28 GiB | 56,931 → 57,041 | `lambda$merge$6(List, List)`                              | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   +0.2% |  +58.006 MiB |         75.6% |              28 GiB | 56,931 → 57,041 | `apply(Object, Object)`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187218` |
|   +0.2% |  +58.006 MiB |         75.6% |              28 GiB | 56,932 → 57,042 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                                                    |
|   +0.2% |  +52.506 MiB |         56.2% |            20.8 GiB | 42,236 → 42,335 | `addAll(Collection)`                                      | `java.util.ArrayList`                                                  |
|   +0.1% |  +48.006 MiB | 99.5% → 99.4% |            36.8 GiB | 74,979 → 75,069 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                                    |
|   +0.1% |  +48.006 MiB | 99.5% → 99.4% |            36.8 GiB | 74,979 → 75,069 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|   +0.1% |  +48.006 MiB | 99.5% → 99.4% |            36.8 GiB | 74,979 → 75,069 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                                    |
|   +0.1% |  +48.006 MiB | 99.5% → 99.4% |            36.8 GiB | 74,979 → 75,069 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                                    |
|   +0.1% |  +48.006 MiB | 99.5% → 99.4% |            36.8 GiB | 74,979 → 75,069 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`                            |
|   +0.1% |  +46.506 MiB | 99.5% → 99.4% |            36.8 GiB | 74,976 → 75,063 | `compute()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |

##### Standard library

| Change |        Delta |             % |                Size |         Samples | Function                                                  | Location                                             |
| -----: | -----------: | ------------: | ------------------: | --------------: | --------------------------------------------------------- | ---------------------------------------------------- |
|  +0.7% | +144.005 MiB | 52.7% → 53.0% | 19.5 GiB → 19.6 GiB | 39,581 → 39,863 | `grow(int)`                                               | `java.util.ArrayList`                                |
|  +2.0% | +108.499 MiB | 14.6% → 14.8% | 5.38 GiB → 5.49 GiB | 11,021 → 11,238 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                  |
|  +0.3% |  +99.006 MiB | 91.1% → 91.2% | 33.7 GiB → 33.8 GiB | 68,630 → 68,822 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                                   |
|  +1.1% |  +69.499 MiB | 16.4% → 16.5% | 6.05 GiB → 6.12 GiB | 12,381 → 12,520 | `grow()`                                                  | `java.util.ArrayList`                                |
|  +1.1% |  +69.499 MiB | 16.4% → 16.5% | 6.05 GiB → 6.12 GiB | 12,381 → 12,520 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                                |
|  +1.1% |  +69.499 MiB | 16.4% → 16.5% | 6.05 GiB → 6.12 GiB | 12,381 → 12,520 | `add(Object)`                                             | `java.util.ArrayList`                                |
|  +0.2% |  +58.506 MiB |         75.6% |              28 GiB | 56,932 → 57,043 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                                  |
|  +0.2% |  +58.006 MiB |         75.6% |              28 GiB | 56,932 → 57,042 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                                  |
|  +0.2% |  +52.506 MiB |         56.2% |            20.8 GiB | 42,236 → 42,335 | `addAll(Collection)`                                      | `java.util.ArrayList`                                |
|  +0.1% |  +48.006 MiB | 99.5% → 99.4% |            36.8 GiB | 74,979 → 75,069 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                  |
|  +0.1% |  +48.006 MiB | 99.5% → 99.4% |            36.8 GiB | 74,979 → 75,069 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|  +0.1% |  +48.006 MiB | 99.5% → 99.4% |            36.8 GiB | 74,979 → 75,069 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                  |
|  +0.1% |  +48.006 MiB | 99.5% → 99.4% |            36.8 GiB | 74,979 → 75,069 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                  |
|  +0.1% |  +48.006 MiB | 99.5% → 99.4% |            36.8 GiB | 74,979 → 75,069 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`          |
|  +0.1% |  +46.506 MiB | 99.5% → 99.4% |            36.8 GiB | 74,976 → 75,063 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                 |
|  +0.1% |  +38.499 MiB |         79.3% | 29.3 GiB → 29.4 GiB | 60,038 → 60,115 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                  |
|  +0.1% |  +38.499 MiB |         79.3% | 29.3 GiB → 29.4 GiB | 60,038 → 60,115 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                  |
| +15.6% |  +26.499 MiB |   0.4% → 0.5% |   169 MiB → 196 MiB |       333 → 386 | `copyInto(Sink, Spliterator)`                             | `java.util.stream.AbstractPipeline`                  |
| +15.6% |  +26.499 MiB |   0.4% → 0.5% |   169 MiB → 196 MiB |       333 → 386 | `wrapAndCopyInto(Sink, Spliterator)`                      | `java.util.stream.AbstractPipeline`                  |
| +13.2% |  +25.999 MiB |   0.5% → 0.6% |   197 MiB → 223 MiB |       389 → 441 | `invokeStatic(Object, Object)`                            | `java.lang.invoke.LambdaForm$DMH.0x0000007001004800` |

##### Ours

|  Change |        Delta |             % |                Size |         Samples | Function                                                                                                               | Location                                                               |
| ------: | -----------: | ------------: | ------------------: | --------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| +240.9% | +132.499 MiB |   0.1% → 0.5% |    55 MiB → 187 MiB |       110 → 375 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011258d8` |
|   +0.2% |  +58.506 MiB |         75.6% |              28 GiB | 56,932 → 57,043 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   +0.2% |  +58.506 MiB |         75.6% |              28 GiB | 56,932 → 57,043 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88` |
|   +0.2% |  +58.006 MiB |         75.6% |              28 GiB | 56,931 → 57,041 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   +0.2% |  +58.006 MiB |         75.6% |              28 GiB | 56,931 → 57,041 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187218` |
|   +0.1% |  +46.506 MiB | 99.5% → 99.4% |            36.8 GiB | 74,976 → 75,063 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|   +0.6% |  +40.499 MiB | 17.5% → 17.6% | 6.47 GiB → 6.51 GiB | 13,247 → 13,328 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   +0.4% |  +35.499 MiB |         21.9% | 8.09 GiB → 8.12 GiB | 16,567 → 16,638 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   +0.1% |  +28.006 MiB | 76.3% → 76.2% |            28.2 GiB | 57,450 → 57,500 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   +0.1% |  +28.006 MiB | 76.3% → 76.2% |            28.2 GiB | 57,450 → 57,500 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  +13.7% |  +26.999 MiB |   0.5% → 0.6% |   197 MiB → 224 MiB |       389 → 443 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
|  +15.8% |  +26.499 MiB |   0.4% → 0.5% |   167 MiB → 194 MiB |       329 → 382 | `generateData(int, int, int)`                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +15.8% |  +26.499 MiB |   0.4% → 0.5% |   167 MiB → 194 MiB |       329 → 382 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|   +0.1% |  +26.006 MiB | 76.3% → 76.2% |            28.2 GiB | 57,459 → 57,505 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +13.1% |  +25.999 MiB |   0.5% → 0.6% |   199 MiB → 225 MiB |       392 → 444 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
|  +13.1% |  +25.999 MiB |   0.5% → 0.6% |   199 MiB → 225 MiB |       392 → 444 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
|  +13.2% |  +25.999 MiB |   0.5% → 0.6% |   197 MiB → 223 MiB |       389 → 441 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|  +16.1% |  +25.999 MiB |   0.4% → 0.5% |   161 MiB → 187 MiB |       323 → 375 | `lambda$generateData$5(int, int, Random[], int)`                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +14.2% |  +25.499 MiB |          0.5% |   180 MiB → 205 MiB |       354 → 405 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|  +14.2% |  +25.499 MiB |          0.5% |   180 MiB → 205 MiB |       354 → 405 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

| Change |        Delta |             % |                Size |         Samples | Function                                                                                | Location                                                               |
| -----: | -----------: | ------------: | ------------------: | --------------: | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|  -2.4% | -192.993 MiB | 21.1% → 20.5% |  7.8 GiB → 7.61 GiB | 15,652 → 15,260 | `invoke()`                                                                              | `java.util.concurrent.ForkJoinTask`                                    |
|  -2.4% | -185.993 MiB | 20.7% → 20.1% | 7.64 GiB → 7.46 GiB | 15,334 → 14,956 | `lambda$run$0(int, List, int)`                                                          | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -2.4% | -185.993 MiB | 20.7% → 20.1% | 7.64 GiB → 7.46 GiB | 15,334 → 14,956 | `call()`                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68` |
|  -2.4% | -185.993 MiB | 20.7% → 20.1% | 7.64 GiB → 7.46 GiB | 15,334 → 14,956 | `exec()`                                                                                | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                    |
| -60.4% |  -97.499 MiB |   0.4% → 0.2% |    161 MiB → 64 MiB |       323 → 128 | `apply(int)`                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001125b10` |
| -16.1% |  -29.999 MiB |   0.5% → 0.4% |   186 MiB → 156 MiB |       372 → 312 | `putVal(int, Object, Object, boolean, boolean)`                                         | `java.util.HashMap`                                                    |
| -15.0% |  -29.499 MiB |   0.5% → 0.4% |   196 MiB → 167 MiB |       393 → 334 | `putMapEntries(Map, boolean)`                                                           | `java.util.HashMap`                                                    |
| -15.0% |  -29.499 MiB |   0.5% → 0.4% |   196 MiB → 167 MiB |       393 → 334 | `<init>(Map)`                                                                           | `java.util.HashMap`                                                    |
|  -9.5% |  -27.499 MiB |   0.8% → 0.7% |   290 MiB → 263 MiB |       581 → 526 | `newNode(int, Object, Object, HashMap$Node)`                                            | `java.util.HashMap`                                                    |
|  -0.1% |  -18.999 MiB | 39.0% → 38.9% |            14.4 GiB | 29,504 → 29,466 | `toArray()`                                                                             | `java.util.ArrayList`                                                  |
|  -6.1% |   -9.499 MiB |          0.4% |   156 MiB → 147 MiB |       313 → 294 | `createSubtask(int, int)`                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -2.8% |   -8.999 MiB |          0.8% |   320 MiB → 311 MiB |       641 → 623 | `computeIfAbsent(Object, Function)`                                                     | `java.util.HashMap`                                                    |
|  -4.0% |   -6.999 MiB |   0.5% → 0.4% |   175 MiB → 168 MiB |       350 → 336 | `average(List)`                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| -63.6% |   -6.999 MiB |         <0.1% |      11 MiB → 4 MiB |          22 → 8 | `getInputStream(ZipEntry)`                                                              | `java.util.zip.ZipFile`                                                |
| -66.7% |   -6.999 MiB |         <0.1% |  10.5 MiB → 3.5 MiB |          21 → 7 | `getInputStream()`                                                                      | `jdk.internal.loader.URLClassPath$JarLoader$2`                         |
| -66.7% |   -6.999 MiB |         <0.1% |  10.5 MiB → 3.5 MiB |          21 → 7 | `cachedInputStream()`                                                                   | `jdk.internal.loader.Resource`                                         |
| -66.7% |   -6.999 MiB |         <0.1% |  10.5 MiB → 3.5 MiB |          21 → 7 | `getByteBuffer()`                                                                       | `jdk.internal.loader.Resource`                                         |
| -61.9% |   -6.499 MiB |         <0.1% |    10.5 MiB → 4 MiB |          21 → 8 | `<init>(InputStream, Inflater, int)`                                                    | `java.util.zip.InflaterInputStream`                                    |
| -61.9% |   -6.499 MiB |         <0.1% |    10.5 MiB → 4 MiB |          21 → 8 | `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, Inflater, int)` | `java.util.zip.ZipFile$ZipFileInflaterInputStream`                     |
| -61.9% |   -6.499 MiB |         <0.1% |    10.5 MiB → 4 MiB |          21 → 8 | `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, int)`           | `java.util.zip.ZipFile$ZipFileInflaterInputStream`                     |

##### Standard library

| Change |        Delta |             % |                Size |         Samples | Function                                                                                | Location                                            |
| -----: | -----------: | ------------: | ------------------: | --------------: | --------------------------------------------------------------------------------------- | --------------------------------------------------- |
|  -2.4% | -192.993 MiB | 21.1% → 20.5% |  7.8 GiB → 7.61 GiB | 15,652 → 15,260 | `invoke()`                                                                              | `java.util.concurrent.ForkJoinTask`                 |
|  -2.4% | -185.993 MiB | 20.7% → 20.1% | 7.64 GiB → 7.46 GiB | 15,334 → 14,956 | `exec()`                                                                                | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
| -16.1% |  -29.999 MiB |   0.5% → 0.4% |   186 MiB → 156 MiB |       372 → 312 | `putVal(int, Object, Object, boolean, boolean)`                                         | `java.util.HashMap`                                 |
| -15.0% |  -29.499 MiB |   0.5% → 0.4% |   196 MiB → 167 MiB |       393 → 334 | `putMapEntries(Map, boolean)`                                                           | `java.util.HashMap`                                 |
| -15.0% |  -29.499 MiB |   0.5% → 0.4% |   196 MiB → 167 MiB |       393 → 334 | `<init>(Map)`                                                                           | `java.util.HashMap`                                 |
|  -9.5% |  -27.499 MiB |   0.8% → 0.7% |   290 MiB → 263 MiB |       581 → 526 | `newNode(int, Object, Object, HashMap$Node)`                                            | `java.util.HashMap`                                 |
|  -0.1% |  -18.999 MiB | 39.0% → 38.9% |            14.4 GiB | 29,504 → 29,466 | `toArray()`                                                                             | `java.util.ArrayList`                               |
|  -2.8% |   -8.999 MiB |          0.8% |   320 MiB → 311 MiB |       641 → 623 | `computeIfAbsent(Object, Function)`                                                     | `java.util.HashMap`                                 |
| -63.6% |   -6.999 MiB |         <0.1% |      11 MiB → 4 MiB |          22 → 8 | `getInputStream(ZipEntry)`                                                              | `java.util.zip.ZipFile`                             |
| -66.7% |   -6.999 MiB |         <0.1% |  10.5 MiB → 3.5 MiB |          21 → 7 | `getInputStream()`                                                                      | `jdk.internal.loader.URLClassPath$JarLoader$2`      |
| -66.7% |   -6.999 MiB |         <0.1% |  10.5 MiB → 3.5 MiB |          21 → 7 | `cachedInputStream()`                                                                   | `jdk.internal.loader.Resource`                      |
| -66.7% |   -6.999 MiB |         <0.1% |  10.5 MiB → 3.5 MiB |          21 → 7 | `getByteBuffer()`                                                                       | `jdk.internal.loader.Resource`                      |
| -61.9% |   -6.499 MiB |         <0.1% |    10.5 MiB → 4 MiB |          21 → 8 | `<init>(InputStream, Inflater, int)`                                                    | `java.util.zip.InflaterInputStream`                 |
| -61.9% |   -6.499 MiB |         <0.1% |    10.5 MiB → 4 MiB |          21 → 8 | `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, Inflater, int)` | `java.util.zip.ZipFile$ZipFileInflaterInputStream`  |
| -61.9% |   -6.499 MiB |         <0.1% |    10.5 MiB → 4 MiB |          21 → 8 | `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, int)`           | `java.util.zip.ZipFile$ZipFileInflaterInputStream`  |
| -61.9% |   -6.499 MiB |         <0.1% |    10.5 MiB → 4 MiB |          21 → 8 | `getInputStream(ZipEntry)`                                                              | `java.util.jar.JarFile`                             |
|  -5.2% |   -5.999 MiB |          0.3% |   115 MiB → 109 MiB |       231 → 219 | `resize()`                                                                              | `java.util.HashMap`                                 |
| -55.0% |   -5.499 MiB |         <0.1% |    10 MiB → 4.5 MiB |          20 → 9 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)`         | `java.lang.ClassLoader`                             |
| -55.0% |   -5.499 MiB |         <0.1% |    10 MiB → 4.5 MiB |          20 → 9 | `defineClass(String, byte[], int, int, ProtectionDomain)`                               | `java.lang.ClassLoader`                             |
| -55.0% |   -5.499 MiB |         <0.1% |    10 MiB → 4.5 MiB |          20 → 9 | `defineClass(String, byte[], int, int, CodeSource)`                                     | `java.security.SecureClassLoader`                   |

##### Ours

|  Change |        Delta |             % |                Size |         Samples | Function                                    | Location                                                                              |
| ------: | -----------: | ------------: | ------------------: | --------------: | ------------------------------------------- | ------------------------------------------------------------------------------------- |
|   -2.4% | -185.993 MiB | 20.7% → 20.1% | 7.64 GiB → 7.46 GiB | 15,334 → 14,956 | `lambda$run$0(int, List, int)`              | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|   -2.4% | -185.993 MiB | 20.7% → 20.1% | 7.64 GiB → 7.46 GiB | 15,334 → 14,956 | `call()`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68`                |
|  -60.4% |  -97.499 MiB |   0.4% → 0.2% |    161 MiB → 64 MiB |       323 → 128 | `apply(int)`                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001125b10`                |
|   -6.1% |   -9.499 MiB |          0.4% |   156 MiB → 147 MiB |       313 → 294 | `createSubtask(int, int)`                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   -4.0% |   -6.999 MiB |   0.5% → 0.4% |   175 MiB → 168 MiB |       350 → 336 | `average(List)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|   -5.4% |   -5.499 MiB |          0.3% |  101 MiB → 95.5 MiB |       202 → 191 | `lambda$collectClusters$0(Double[])`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   -5.4% |   -5.499 MiB |          0.3% |  101 MiB → 95.5 MiB |       202 → 191 | `apply(Object)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001186b38` |
|   -2.9% |   -5.499 MiB |          0.5% |   191 MiB → 185 MiB |       382 → 371 | `computeClusterAverages()`                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|   -2.9% |   -5.499 MiB |          0.5% |   191 MiB → 185 MiB |       382 → 371 | `computeDirectly()`                         | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|   -0.3% |   -4.999 MiB |          4.4% |            1.62 GiB |   3,320 → 3,310 | `findNearestCentroid()`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   -6.5% |   -4.499 MiB |          0.2% |   69.5 MiB → 65 MiB |       139 → 130 | `vectorSum()`                               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   -6.5% |   -4.499 MiB |          0.2% |   69.5 MiB → 65 MiB |       139 → 130 | `computeDirectly()`                         | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   -5.2% |   -3.999 MiB |          0.2% | 77.5 MiB → 73.5 MiB |       155 → 147 | `add(double[], double[])`                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   -5.2% |   -3.999 MiB |          0.2% | 77.5 MiB → 73.5 MiB |       155 → 147 | `combineResults(double[], double[])`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   -5.2% |   -3.999 MiB |          0.2% | 77.5 MiB → 73.5 MiB |       155 → 147 | `combineResults(Object, Object)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   -2.1% |   -2.999 MiB |          0.4% |   144 MiB → 141 MiB |       289 → 283 | `createSubtask(int, int)`                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -44.4% |   -1.999 MiB |         <0.1% |   4.5 MiB → 2.5 MiB |           9 → 5 | `combineResults(Map, Map)`                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|  -44.4% |   -1.999 MiB |         <0.1% |   4.5 MiB → 2.5 MiB |           9 → 5 | `combineResults(Object, Object)`            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
| removed |   -1.499 MiB |  <0.1% → 0.0% |       1.5 MiB → 0 B |           3 → 0 | `collectGarbage(String)`                    | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`                              |
| removed |   -1.499 MiB |  <0.1% → 0.0% |       1.5 MiB → 0 B |           3 → 0 | `afterOperationSetUp(String, int, boolean)` | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`                              |

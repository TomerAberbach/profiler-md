# Allocated heap profile diff

Allocated 36.8 GiB → 37 GiB (+174.411 MiB, +0.5%) over 75,115 samples → 75,465 samples (514 KiB per sample).

| Category         | Change |        Delta |             % |                Size |         Samples |
| ---------------- | -----: | -----------: | ------------: | ------------------: | --------------: |
| Standard library |  +0.1% |  +37.912 MiB | 93.2% → 92.9% | 34.3 GiB → 34.4 GiB | 69,991 → 70,068 |
| Ours             |  +5.3% | +136.499 MiB |   6.8% → 7.1% |  2.5 GiB → 2.64 GiB |   5,124 → 5,397 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|  Change |          Delta |             % |                Size |         Samples | Function                                 | Location                                                   |
| ------: | -------------: | ------------: | ------------------: | --------------: | ---------------------------------------- | ---------------------------------------------------------- |
|  +23.5% |    +36.499 MiB |   0.4% → 0.5% |   155 MiB → 191 MiB |       310 → 383 | `createSubtask(int, int)`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   +0.1% |    +33.522 MiB | 90.9% → 90.6% |            33.5 GiB | 68,263 → 68,331 | `copyOf(Object[], int)`                  | `java.util.Arrays`                                         |
|  +30.2% |    +25.999 MiB |   0.2% → 0.3% |    86 MiB → 112 MiB |       172 → 224 | `collectClusters(int[])`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +33.8% |    +24.499 MiB |   0.2% → 0.3% |   72.5 MiB → 97 MiB |       145 → 194 | `vectorSum()`                            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +29.4% |    +20.999 MiB |          0.2% | 71.5 MiB → 92.5 MiB |       143 → 185 | `add(double[], double[])`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +58.0% |    +14.499 MiB |          0.1% |   25 MiB → 39.5 MiB |         50 → 79 | `intStream(Spliterator$OfInt, boolean)`  | `java.util.stream.StreamSupport`                           |
|  +13.9% |    +14.499 MiB |          0.3% |   104 MiB → 119 MiB |       209 → 238 | `lambda$collectClusters$0(Double[])`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +5.0% |    +11.999 MiB |   0.6% → 0.7% |   238 MiB → 250 MiB |       476 → 500 | `grow(int)`                              | `java.util.ArrayList`                                      |
|   +8.8% |    +10.999 MiB |   0.3% → 0.4% |   125 MiB → 136 MiB |       250 → 272 | `createSubtask(int, int)`                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +10.2% |    +10.499 MiB |          0.3% |   102 MiB → 113 MiB |       205 → 226 | `resize()`                               | `java.util.HashMap`                                        |
|   +7.2% |     +7.999 MiB |          0.3% |   110 MiB → 118 MiB |       221 → 237 | `lambda$merge$6(List, List)`             | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| +125.0% |     +7.499 MiB |         <0.1% |    6 MiB → 13.5 MiB |         12 → 27 | `copyOf(byte[], int)`                    | `java.util.Arrays`                                         |
|  +20.4% |     +4.999 MiB |          0.1% | 24.5 MiB → 29.5 MiB |         49 → 59 | `mapToObj(IntFunction, int)`             | `java.util.stream.IntPipeline`                             |
|  +41.2% |     +3.499 MiB |         <0.1% |    8.5 MiB → 12 MiB |         17 → 24 | `allocateInstance(Object)`               | `java.lang.invoke.DirectMethodHandle`                      |
| +400.0% |     +1.999 MiB |         <0.1% |   512 KiB → 2.5 MiB |           1 → 5 | `div(double[], int)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|     new | +1,023.998 KiB |  0.0% → <0.1% |         0 B → 1 MiB |           0 → 2 | `addConstantNameAndType(String, String)` | `jdk.internal.org.objectweb.asm.SymbolTable`               |
|  +25.0% | +1,023.998 KiB |         <0.1% |       4 MiB → 5 MiB |          8 → 10 | `allocateInstance(Class)`                | `jdk.internal.misc.Unsafe`                                 |
|  +66.7% | +1,023.998 KiB |         <0.1% |   1.5 MiB → 2.5 MiB |           3 → 5 | `spliterator(double[], int, int, int)`   | `java.util.Spliterators`                                   |
| +200.0% | +1,023.998 KiB |         <0.1% |   512 KiB → 1.5 MiB |           1 → 3 | `lambda$boxed$0(int)`                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| +100.0% |   +511.999 KiB |         <0.1% |     512 KiB → 1 MiB |           1 → 2 | `load(DataInputStream)`                  | `sun.util.calendar.ZoneInfoFile`                           |

##### Standard library

|  Change |          Delta |             % |                Size |         Samples | Function                                                                        | Location                                     |
| ------: | -------------: | ------------: | ------------------: | --------------: | ------------------------------------------------------------------------------- | -------------------------------------------- |
|   +0.1% |    +33.522 MiB | 90.9% → 90.6% |            33.5 GiB | 68,263 → 68,331 | `copyOf(Object[], int)`                                                         | `java.util.Arrays`                           |
|  +58.0% |    +14.499 MiB |          0.1% |   25 MiB → 39.5 MiB |         50 → 79 | `intStream(Spliterator$OfInt, boolean)`                                         | `java.util.stream.StreamSupport`             |
|   +5.0% |    +11.999 MiB |   0.6% → 0.7% |   238 MiB → 250 MiB |       476 → 500 | `grow(int)`                                                                     | `java.util.ArrayList`                        |
|  +10.2% |    +10.499 MiB |          0.3% |   102 MiB → 113 MiB |       205 → 226 | `resize()`                                                                      | `java.util.HashMap`                          |
| +125.0% |     +7.499 MiB |         <0.1% |    6 MiB → 13.5 MiB |         12 → 27 | `copyOf(byte[], int)`                                                           | `java.util.Arrays`                           |
|  +20.4% |     +4.999 MiB |          0.1% | 24.5 MiB → 29.5 MiB |         49 → 59 | `mapToObj(IntFunction, int)`                                                    | `java.util.stream.IntPipeline`               |
|  +41.2% |     +3.499 MiB |         <0.1% |    8.5 MiB → 12 MiB |         17 → 24 | `allocateInstance(Object)`                                                      | `java.lang.invoke.DirectMethodHandle`        |
|     new | +1,023.998 KiB |  0.0% → <0.1% |         0 B → 1 MiB |           0 → 2 | `addConstantNameAndType(String, String)`                                        | `jdk.internal.org.objectweb.asm.SymbolTable` |
|  +25.0% | +1,023.998 KiB |         <0.1% |       4 MiB → 5 MiB |          8 → 10 | `allocateInstance(Class)`                                                       | `jdk.internal.misc.Unsafe`                   |
|  +66.7% | +1,023.998 KiB |         <0.1% |   1.5 MiB → 2.5 MiB |           3 → 5 | `spliterator(double[], int, int, int)`                                          | `java.util.Spliterators`                     |
| +100.0% |   +511.999 KiB |         <0.1% |     512 KiB → 1 MiB |           1 → 2 | `load(DataInputStream)`                                                         | `sun.util.calendar.ZoneInfoFile`             |
|     new |   +511.999 KiB |  0.0% → <0.1% |       0 B → 512 KiB |           0 → 1 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                      |
|     new |   +511.999 KiB |  0.0% → <0.1% |       0 B → 512 KiB |           0 → 1 | `addConstantUtf8(String)`                                                       | `jdk.internal.org.objectweb.asm.SymbolTable` |
|   +5.0% |   +511.999 KiB |         <0.1% |   10 MiB → 10.5 MiB |         20 → 21 | `range(int, int)`                                                               | `java.util.stream.IntStream`                 |
|     new |   +511.999 KiB |  0.0% → <0.1% |       0 B → 512 KiB |           0 → 1 | `compress(char[], int, int)`                                                    | `java.lang.StringUTF16`                      |
|     new |   +511.999 KiB |  0.0% → <0.1% |       0 B → 512 KiB |           0 → 1 | `load(DataInputStream)`                                                         | `java.time.zone.TzdbZoneRulesProvider`       |
|     new |   +511.999 KiB |  0.0% → <0.1% |       0 B → 512 KiB |           0 → 1 | `getClassLoadingLock(String)`                                                   | `java.lang.ClassLoader`                      |
|     new |   +511.999 KiB |  0.0% → <0.1% |       0 B → 512 KiB |           0 → 1 | `<init>(int)`                                                                   | `jdk.internal.org.objectweb.asm.ByteVector`  |
|     new |   +511.999 KiB |  0.0% → <0.1% |       0 B → 512 KiB |           0 → 1 | `put(Object, Object)`                                                           | `java.util.WeakHashMap`                      |
|     new |   +511.999 KiB |  0.0% → <0.1% |       0 B → 512 KiB |           0 → 1 | `putVal(Object, Object, boolean)`                                               | `java.util.concurrent.ConcurrentHashMap`     |

##### Ours

|  Change |          Delta |            % |                Size |   Samples | Function                             | Location                                                   |
| ------: | -------------: | -----------: | ------------------: | --------: | ------------------------------------ | ---------------------------------------------------------- |
|  +23.5% |    +36.499 MiB |  0.4% → 0.5% |   155 MiB → 191 MiB | 310 → 383 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +30.2% |    +25.999 MiB |  0.2% → 0.3% |    86 MiB → 112 MiB | 172 → 224 | `collectClusters(int[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +33.8% |    +24.499 MiB |  0.2% → 0.3% |   72.5 MiB → 97 MiB | 145 → 194 | `vectorSum()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +29.4% |    +20.999 MiB |         0.2% | 71.5 MiB → 92.5 MiB | 143 → 185 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +13.9% |    +14.499 MiB |         0.3% |   104 MiB → 119 MiB | 209 → 238 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +8.8% |    +10.999 MiB |  0.3% → 0.4% |   125 MiB → 136 MiB | 250 → 272 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +7.2% |     +7.999 MiB |         0.3% |   110 MiB → 118 MiB | 221 → 237 | `lambda$merge$6(List, List)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| +400.0% |     +1.999 MiB |        <0.1% |   512 KiB → 2.5 MiB |     1 → 5 | `div(double[], int)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| +200.0% | +1,023.998 KiB |        <0.1% |   512 KiB → 1.5 MiB |     1 → 3 | `lambda$boxed$0(int)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| +100.0% |   +511.999 KiB |        <0.1% |     512 KiB → 1 MiB |     1 → 2 | `<init>(JavaKMeans, Map)`            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|     new |   +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |     0 → 1 | `collectGarbage(String)`             | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`   |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |          Delta |            % |                Size |       Samples | Function                                              | Location                                                   |
| ------: | -------------: | -----------: | ------------------: | ------------: | ----------------------------------------------------- | ---------------------------------------------------------- |
|  -22.1% |    -15.499 MiB |  0.2% → 0.1% |   70 MiB → 54.5 MiB |     140 → 109 | `valueOf(double)`                                     | `java.lang.Double`                                         |
|   -4.2% |    -11.999 MiB |  0.8% → 0.7% |   284 MiB → 272 MiB |     569 → 545 | `newNode(int, Object, Object, HashMap$Node)`          | `java.util.HashMap`                                        |
|  -48.2% |     -10.11 MiB | 0.1% → <0.1% |   21 MiB → 10.9 MiB |       36 → 16 | `copyOf(Object[], int, Class)`                        | `java.util.Arrays`                                         |
|  -77.8% |     -3.499 MiB |        <0.1% |     4.5 MiB → 1 MiB |         9 → 2 | `awaitDone(int, long)`                                | `java.util.concurrent.ForkJoinTask`                        |
|  -24.0% |     -2.999 MiB |        <0.1% |  12.5 MiB → 9.5 MiB |       25 → 19 | `opWrapSink(int, Sink)`                               | `java.util.stream.IntPipeline$1`                           |
|   -4.1% |     -2.999 MiB |         0.2% |     73 MiB → 70 MiB |     146 → 140 | `merge(Map, Map)`                                     | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|   -0.2% |     -2.999 MiB |         4.6% | 1.69 GiB → 1.68 GiB | 3,454 → 3,448 | `findNearestCentroid()`                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -17.2% |     -2.499 MiB |        <0.1% |   14.5 MiB → 12 MiB |       29 → 24 | `builder(long, IntFunction)`                          | `java.util.stream.Nodes`                                   |
| removed |     -1.499 MiB | <0.1% → 0.0% |       1.5 MiB → 0 B |         3 → 0 | `fillInStackTrace(int)`                               | `java.lang.Throwable`                                      |
|   -7.9% |     -1.499 MiB | 0.1% → <0.1% |   19 MiB → 17.5 MiB |       38 → 35 | `lambda$generateData$4(int)`                          | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed | -1,023.998 KiB | <0.1% → 0.0% |         1 MiB → 0 B |         2 → 0 | `<init>(int)`                                         | `java.lang.AbstractStringBuilder`                          |
|  -16.7% | -1,023.998 KiB |        <0.1% |       6 MiB → 5 MiB |       12 → 10 | `<init>(InputStream, Inflater, int)`                  | `java.util.zip.InflaterInputStream`                        |
|  -66.7% | -1,023.998 KiB |        <0.1% |   1.5 MiB → 512 KiB |         3 → 1 | `lambda$run$0(int, List, int)`                        | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|   -5.6% | -1,023.998 KiB |        <0.1% |     18 MiB → 17 MiB |       36 → 34 | `entrySet()`                                          | `java.util.HashMap`                                        |
|  -50.0% | -1,023.998 KiB |        <0.1% |       2 MiB → 1 MiB |         4 → 2 | `mapToObj(DoubleFunction, int)`                       | `java.util.stream.DoublePipeline`                          |
| removed |   -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |         1 → 0 | `<init>(ClassWriter)`                                 | `jdk.internal.org.objectweb.asm.SymbolTable`               |
|  -50.0% |   -511.999 KiB |        <0.1% |     1 MiB → 512 KiB |         2 → 1 | `initCEN(int, ZipCoder)`                              | `java.util.zip.ZipFile$Source`                             |
| removed |   -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |         1 → 0 | `read(InputStream, String)`                           | `java.util.jar.Manifest`                                   |
| removed |   -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |         1 → 0 | `read(Manifest$FastInputStream, byte[], String, int)` | `java.util.jar.Attributes`                                 |
|  -33.3% |   -511.999 KiB |        <0.1% |     1.5 MiB → 1 MiB |         3 → 2 | `copyOfRangeByte(byte[], int, int)`                   | `java.util.Arrays`                                         |

##### Standard library

|  Change |          Delta |            % |               Size |   Samples | Function                                              | Location                                     |
| ------: | -------------: | -----------: | -----------------: | --------: | ----------------------------------------------------- | -------------------------------------------- |
|  -22.1% |    -15.499 MiB |  0.2% → 0.1% |  70 MiB → 54.5 MiB | 140 → 109 | `valueOf(double)`                                     | `java.lang.Double`                           |
|   -4.2% |    -11.999 MiB |  0.8% → 0.7% |  284 MiB → 272 MiB | 569 → 545 | `newNode(int, Object, Object, HashMap$Node)`          | `java.util.HashMap`                          |
|  -48.2% |     -10.11 MiB | 0.1% → <0.1% |  21 MiB → 10.9 MiB |   36 → 16 | `copyOf(Object[], int, Class)`                        | `java.util.Arrays`                           |
|  -77.8% |     -3.499 MiB |        <0.1% |    4.5 MiB → 1 MiB |     9 → 2 | `awaitDone(int, long)`                                | `java.util.concurrent.ForkJoinTask`          |
|  -24.0% |     -2.999 MiB |        <0.1% | 12.5 MiB → 9.5 MiB |   25 → 19 | `opWrapSink(int, Sink)`                               | `java.util.stream.IntPipeline$1`             |
|  -17.2% |     -2.499 MiB |        <0.1% |  14.5 MiB → 12 MiB |   29 → 24 | `builder(long, IntFunction)`                          | `java.util.stream.Nodes`                     |
| removed |     -1.499 MiB | <0.1% → 0.0% |      1.5 MiB → 0 B |     3 → 0 | `fillInStackTrace(int)`                               | `java.lang.Throwable`                        |
| removed | -1,023.998 KiB | <0.1% → 0.0% |        1 MiB → 0 B |     2 → 0 | `<init>(int)`                                         | `java.lang.AbstractStringBuilder`            |
|  -16.7% | -1,023.998 KiB |        <0.1% |      6 MiB → 5 MiB |   12 → 10 | `<init>(InputStream, Inflater, int)`                  | `java.util.zip.InflaterInputStream`          |
|   -5.6% | -1,023.998 KiB |        <0.1% |    18 MiB → 17 MiB |   36 → 34 | `entrySet()`                                          | `java.util.HashMap`                          |
|  -50.0% | -1,023.998 KiB |        <0.1% |      2 MiB → 1 MiB |     4 → 2 | `mapToObj(DoubleFunction, int)`                       | `java.util.stream.DoublePipeline`            |
| removed |   -511.999 KiB | <0.1% → 0.0% |      512 KiB → 0 B |     1 → 0 | `<init>(ClassWriter)`                                 | `jdk.internal.org.objectweb.asm.SymbolTable` |
|  -50.0% |   -511.999 KiB |        <0.1% |    1 MiB → 512 KiB |     2 → 1 | `initCEN(int, ZipCoder)`                              | `java.util.zip.ZipFile$Source`               |
| removed |   -511.999 KiB | <0.1% → 0.0% |      512 KiB → 0 B |     1 → 0 | `read(InputStream, String)`                           | `java.util.jar.Manifest`                     |
| removed |   -511.999 KiB | <0.1% → 0.0% |      512 KiB → 0 B |     1 → 0 | `read(Manifest$FastInputStream, byte[], String, int)` | `java.util.jar.Attributes`                   |
|  -33.3% |   -511.999 KiB |        <0.1% |    1.5 MiB → 1 MiB |     3 → 2 | `copyOfRangeByte(byte[], int, int)`                   | `java.util.Arrays`                           |
| removed |   -511.999 KiB | <0.1% → 0.0% |      512 KiB → 0 B |     1 → 0 | `<clinit>()`                                          | `scala.reflect.ManifestFactory$`             |
| removed |   -511.999 KiB | <0.1% → 0.0% |      512 KiB → 0 B |     1 → 0 | `makeImpl(Class, Class[], boolean)`                   | `java.lang.invoke.MethodType`                |
|  -50.0% |   -511.999 KiB |        <0.1% |    1 MiB → 512 KiB |     2 → 1 | `enlarge(int)`                                        | `jdk.internal.org.objectweb.asm.ByteVector`  |
| removed |   -511.999 KiB | <0.1% → 0.0% |      512 KiB → 0 B |     1 → 0 | `<init>(InputStream)`                                 | `java.util.Properties$LineReader`            |

##### Ours

|  Change |          Delta |            % |                Size |       Samples | Function                       | Location                                                   |
| ------: | -------------: | -----------: | ------------------: | ------------: | ------------------------------ | ---------------------------------------------------------- |
|   -4.1% |     -2.999 MiB |         0.2% |     73 MiB → 70 MiB |     146 → 140 | `merge(Map, Map)`              | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|   -0.2% |     -2.999 MiB |         4.6% | 1.69 GiB → 1.68 GiB | 3,454 → 3,448 | `findNearestCentroid()`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -7.9% |     -1.499 MiB | 0.1% → <0.1% |   19 MiB → 17.5 MiB |       38 → 35 | `lambda$generateData$4(int)`   | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -66.7% | -1,023.998 KiB |        <0.1% |   1.5 MiB → 512 KiB |         3 → 1 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |   -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |         1 → 0 | `arg(String, Read)`            | `scopt.OptionParser`                                       |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |              Size |   Samples | Location                                                      |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------------------------------------------- |
| +23.5% | +36.499 MiB | 100.0% | 155 MiB → 191 MiB | 310 → 383 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |       Delta |      % |     Size |         Samples | Location                |
| -----: | ----------: | -----: | -------: | --------------: | ----------------------- |
|  +0.1% | +33.522 MiB | 100.0% | 33.5 GiB | 68,263 → 68,331 | `java.util.Arrays:3482` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |             Size |   Samples | Location                                                       |
| -----: | ----------: | -----: | ---------------: | --------: | -------------------------------------------------------------- |
| +30.2% | +25.999 MiB | 100.0% | 86 MiB → 112 MiB | 172 → 224 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:209` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |              Size |   Samples | Location                                                      |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------------------------------------------- |
| +33.8% | +24.499 MiB | 100.0% | 72.5 MiB → 97 MiB | 145 → 194 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |                Size |   Samples | Location                                                      |
| -----: | ----------: | -----: | ------------------: | --------: | ------------------------------------------------------------- |
| +29.4% | +20.999 MiB | 100.0% | 71.5 MiB → 92.5 MiB | 143 → 185 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:430` |

##### `intStream(Spliterator$OfInt, boolean)` (`java.util.stream.StreamSupport`)

| Change |       Delta |      % |              Size | Samples | Location                             |
| -----: | ----------: | -----: | ----------------: | ------: | ------------------------------------ |
| +58.0% | +14.499 MiB | 100.0% | 25 MiB → 39.5 MiB | 50 → 79 | `java.util.stream.StreamSupport:138` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |              Size |   Samples | Location                                                       |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------------------------------------------------- |
| +13.9% | +14.499 MiB | 100.0% | 104 MiB → 119 MiB | 209 → 238 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |       Delta |      % |              Size |   Samples | Location                  |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------- |
|  +5.0% | +11.999 MiB | 100.0% | 238 MiB → 250 MiB | 476 → 500 | `java.util.ArrayList:239` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |              Size |   Samples | Location                                                       |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------------------------------------------------- |
|  +8.8% | +10.999 MiB | 100.0% | 125 MiB → 136 MiB | 250 → 272 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261` |

##### `resize()` (`java.util.HashMap`)

| Change |       Delta |      % |              Size |   Samples | Location                |
| -----: | ----------: | -----: | ----------------: | --------: | ----------------------- |
| +10.2% | +10.499 MiB | 100.0% | 102 MiB → 113 MiB | 205 → 226 | `java.util.HashMap:710` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |      Delta |      % |              Size |   Samples | Location                                        |
| -----: | ---------: | -----: | ----------------: | --------: | ----------------------------------------------- |
|  +7.2% | +7.999 MiB | 100.0% | 110 MiB → 118 MiB | 221 → 237 | `org.renaissance.jdk.concurrent.JavaKMeans:114` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|  Change |      Delta |      % |             Size | Samples | Location                |
| ------: | ---------: | -----: | ---------------: | ------: | ----------------------- |
| +125.0% | +7.499 MiB | 100.0% | 6 MiB → 13.5 MiB | 12 → 27 | `java.util.Arrays:3541` |

##### `mapToObj(IntFunction, int)` (`java.util.stream.IntPipeline`)

| Change |      Delta |      % |                Size | Samples | Location                           |
| -----: | ---------: | -----: | ------------------: | ------: | ---------------------------------- |
| +20.4% | +4.999 MiB | 100.0% | 24.5 MiB → 29.5 MiB | 49 → 59 | `java.util.stream.IntPipeline:174` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

| Change |      Delta |      % |             Size | Samples | Location                                  |
| -----: | ---------: | -----: | ---------------: | ------: | ----------------------------------------- |
| +41.2% | +3.499 MiB | 100.0% | 8.5 MiB → 12 MiB | 17 → 24 | `java.lang.invoke.DirectMethodHandle:501` |

##### `div(double[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |      Delta |      % |              Size | Samples | Location                                                   |
| ------: | ---------: | -----: | ----------------: | ------: | ---------------------------------------------------------- |
| +400.0% | +1.999 MiB | 100.0% | 512 KiB → 2.5 MiB |   1 → 5 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:339` |

##### `addConstantNameAndType(String, String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change |          Delta |             % |        Size | Samples | Location                                         |
| -----: | -------------: | ------------: | ----------: | ------: | ------------------------------------------------ |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `jdk.internal.org.objectweb.asm.SymbolTable:773` |

##### `spliterator(double[], int, int, int)` (`java.util.Spliterators`)

| Change |          Delta |      % |              Size | Samples | Location                     |
| -----: | -------------: | -----: | ----------------: | ------: | ---------------------------- |
| +66.7% | +1,023.998 KiB | 100.0% | 1.5 MiB → 2.5 MiB |   3 → 5 | `java.util.Spliterators:372` |

##### `lambda$boxed$0(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |          Delta |      % |              Size | Samples | Location                                                   |
| ------: | -------------: | -----: | ----------------: | ------: | ---------------------------------------------------------- |
| +200.0% | +1,023.998 KiB | 100.0% | 512 KiB → 1.5 MiB |   1 → 3 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:327` |

##### `load(DataInputStream)` (`sun.util.calendar.ZoneInfoFile`)

|  Change |        Delta |      % |            Size | Samples | Location                             |
| ------: | -----------: | -----: | --------------: | ------: | ------------------------------------ |
| +100.0% | +511.999 KiB | 100.0% | 512 KiB → 1 MiB |   1 → 2 | `sun.util.calendar.ZoneInfoFile:327` |

##### `addConstantUtf8(String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change |        Delta |             % |          Size | Samples | Location                                         |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------ |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `jdk.internal.org.objectweb.asm.SymbolTable:807` |

##### `range(int, int)` (`java.util.stream.IntStream`)

| Change |        Delta |      % |              Size | Samples | Location                          |
| -----: | -----------: | -----: | ----------------: | ------: | --------------------------------- |
|  +5.0% | +511.999 KiB | 100.0% | 10 MiB → 10.5 MiB | 20 → 21 | `java.util.stream.IntStream:1083` |

##### `compress(char[], int, int)` (`java.lang.StringUTF16`)

| Change |        Delta |             % |          Size | Samples | Location                    |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `java.lang.StringUTF16:211` |

##### `load(DataInputStream)` (`java.time.zone.TzdbZoneRulesProvider`)

| Change |        Delta |             % |          Size | Samples | Location                                   |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------------------ |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `java.time.zone.TzdbZoneRulesProvider:185` |

##### `getClassLoadingLock(String)` (`java.lang.ClassLoader`)

| Change |        Delta |             % |          Size | Samples | Location                    |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `java.lang.ClassLoader:680` |

##### `<init>(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

| Change |        Delta |             % |          Size | Samples | Location                                       |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `jdk.internal.org.objectweb.asm.ByteVector:87` |

##### `put(Object, Object)` (`java.util.WeakHashMap`)

| Change |        Delta |             % |          Size | Samples | Location                    |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `java.util.WeakHashMap:476` |

##### `putVal(Object, Object, boolean)` (`java.util.concurrent.ConcurrentHashMap`)

| Change |        Delta |             % |          Size | Samples | Location                                      |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `java.util.concurrent.ConcurrentHashMap:1019` |

##### `<init>(JavaKMeans, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |        Delta |      % |            Size | Samples | Location                                                   |
| ------: | -----------: | -----: | --------------: | ------: | ---------------------------------------------------------- |
| +100.0% | +511.999 KiB | 100.0% | 512 KiB → 1 MiB |   1 → 2 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:282` |

##### `collectGarbage(String)` (`org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`)

| Change |        Delta |             % |          Size | Samples | Location                                                    |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin:26` |

##### `valueOf(double)` (`java.lang.Double`)

| Change |       Delta |      % |              Size |   Samples | Location               |
| -----: | ----------: | -----: | ----------------: | --------: | ---------------------- |
| -22.1% | -15.499 MiB | 100.0% | 70 MiB → 54.5 MiB | 140 → 109 | `java.lang.Double:773` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

| Change |       Delta |      % |              Size |   Samples | Location                 |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------ |
|  -4.2% | -11.999 MiB | 100.0% | 284 MiB → 272 MiB | 569 → 545 | `java.util.HashMap:1909` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

| Change |      Delta |      % |              Size | Samples | Location                |
| -----: | ---------: | -----: | ----------------: | ------: | ----------------------- |
| -48.2% | -10.11 MiB | 100.0% | 21 MiB → 10.9 MiB | 36 → 16 | `java.util.Arrays:3513` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change |      Delta |      % |            Size | Samples | Location                                |
| -----: | ---------: | -----: | --------------: | ------: | --------------------------------------- |
| -77.8% | -3.499 MiB | 100.0% | 4.5 MiB → 1 MiB |   9 → 2 | `java.util.concurrent.ForkJoinTask:437` |

##### `opWrapSink(int, Sink)` (`java.util.stream.IntPipeline$1`)

| Change |      Delta |      % |               Size | Samples | Location                             |
| -----: | ---------: | -----: | -----------------: | ------: | ------------------------------------ |
| -24.0% | -2.999 MiB | 100.0% | 12.5 MiB → 9.5 MiB | 25 → 19 | `java.util.stream.IntPipeline$1:177` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |      Delta |      % |            Size |   Samples | Location                                        |
| -----: | ---------: | -----: | --------------: | --------: | ----------------------------------------------- |
|  -4.1% | -2.999 MiB | 100.0% | 73 MiB → 70 MiB | 146 → 140 | `org.renaissance.jdk.concurrent.JavaKMeans:110` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |      Delta |      % |                Size |       Samples | Location                                                       |
| -----: | ---------: | -----: | ------------------: | ------------: | -------------------------------------------------------------- |
|  -0.2% | -2.999 MiB | 100.0% | 1.69 GiB → 1.68 GiB | 3,454 → 3,448 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:223` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

| Change |      Delta |      % |              Size | Samples | Location                     |
| -----: | ---------: | -----: | ----------------: | ------: | ---------------------------- |
| -17.2% | -2.499 MiB | 100.0% | 14.5 MiB → 12 MiB | 29 → 24 | `java.util.stream.Nodes:168` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |      Delta |      % |              Size | Samples | Location                                       |
| -----: | ---------: | -----: | ----------------: | ------: | ---------------------------------------------- |
|  -7.9% | -1.499 MiB | 100.0% | 19 MiB → 17.5 MiB | 38 → 35 | `org.renaissance.jdk.concurrent.JavaKMeans:87` |

##### `<init>(int)` (`java.lang.AbstractStringBuilder`)

|  Change |          Delta |             % |        Size | Samples | Location                              |
| ------: | -------------: | ------------: | ----------: | ------: | ------------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `java.lang.AbstractStringBuilder:101` |

##### `<init>(InputStream, Inflater, int)` (`java.util.zip.InflaterInputStream`)

| Change |          Delta |      % |          Size | Samples | Location                               |
| -----: | -------------: | -----: | ------------: | ------: | -------------------------------------- |
| -16.7% | -1,023.998 KiB | 100.0% | 6 MiB → 5 MiB | 12 → 10 | `java.util.zip.InflaterInputStream:89` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |          Delta |      % |              Size | Samples | Location                                       |
| -----: | -------------: | -----: | ----------------: | ------: | ---------------------------------------------- |
| -66.7% | -1,023.998 KiB | 100.0% | 1.5 MiB → 512 KiB |   3 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans:53` |

##### `entrySet()` (`java.util.HashMap`)

| Change |          Delta |      % |            Size | Samples | Location                 |
| -----: | -------------: | -----: | --------------: | ------: | ------------------------ |
|  -5.6% | -1,023.998 KiB | 100.0% | 18 MiB → 17 MiB | 36 → 34 | `java.util.HashMap:1099` |

##### `mapToObj(DoubleFunction, int)` (`java.util.stream.DoublePipeline`)

| Change |          Delta |      % |          Size | Samples | Location                              |
| -----: | -------------: | -----: | ------------: | ------: | ------------------------------------- |
| -50.0% | -1,023.998 KiB | 100.0% | 2 MiB → 1 MiB |   4 → 2 | `java.util.stream.DoublePipeline:170` |

##### `<init>(ClassWriter)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|  Change |        Delta |             % |          Size | Samples | Location                                         |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------ |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `jdk.internal.org.objectweb.asm.SymbolTable:156` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |        Delta |      % |            Size | Samples | Location                            |
| -----: | -----------: | -----: | --------------: | ------: | ----------------------------------- |
| -50.0% | -511.999 KiB | 100.0% | 1 MiB → 512 KiB |   2 → 1 | `java.util.zip.ZipFile$Source:1733` |

##### `read(InputStream, String)` (`java.util.jar.Manifest`)

|  Change |        Delta |             % |          Size | Samples | Location                     |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `java.util.jar.Manifest:332` |

##### `read(Manifest$FastInputStream, byte[], String, int)` (`java.util.jar.Attributes`)

|  Change |        Delta |             % |          Size | Samples | Location                       |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------ |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `java.util.jar.Attributes:371` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

| Change |        Delta |      % |            Size | Samples | Location                |
| -----: | -----------: | -----: | --------------: | ------: | ----------------------- |
| -33.3% | -511.999 KiB | 100.0% | 1.5 MiB → 1 MiB |   3 → 2 | `java.util.Arrays:3863` |

##### `<clinit>()` (`scala.reflect.ManifestFactory$`)

|  Change |        Delta |             % |          Size | Samples | Location                             |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------ |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `scala.reflect.ManifestFactory$:340` |

##### `makeImpl(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

|  Change |        Delta |             % |          Size | Samples | Location                          |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `java.lang.invoke.MethodType:400` |

##### `enlarge(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

| Change |        Delta |      % |            Size | Samples | Location                                        |
| -----: | -----------: | -----: | --------------: | ------: | ----------------------------------------------- |
| -50.0% | -511.999 KiB | 100.0% | 1 MiB → 512 KiB |   2 → 1 | `jdk.internal.org.objectweb.asm.ByteVector:401` |

##### `<init>(InputStream)` (`java.util.Properties$LineReader`)

|  Change |        Delta |             % |          Size | Samples | Location                              |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `java.util.Properties$LineReader:471` |

##### `arg(String, Read)` (`scopt.OptionParser`)

|  Change |        Delta |             % |          Size | Samples | Location                 |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------ |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `scopt.OptionParser:115` |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

| Change |        Delta |             % |                Size |         Samples | Function                                                                                                               | Location                                                   |
| -----: | -----------: | ------------: | ------------------: | --------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|  +1.4% | +431.999 MiB | 79.2% → 80.0% | 29.2 GiB → 29.6 GiB | 59,741 → 60,605 | `awaitDone(int, long)`                                                                                                 | `java.util.concurrent.ForkJoinTask`                        |
|  +1.4% | +431.999 MiB | 79.2% → 80.0% | 29.2 GiB → 29.6 GiB | 59,741 → 60,605 | `join()`                                                                                                               | `java.util.concurrent.ForkJoinTask`                        |
|  +1.4% | +422.499 MiB | 78.4% → 79.1% | 28.9 GiB → 29.3 GiB | 59,112 → 59,957 | `tryRemoveAndExec(ForkJoinTask, boolean)`                                                                              | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|  +4.8% | +257.499 MiB | 14.2% → 14.8% | 5.23 GiB → 5.49 GiB | 10,719 → 11,234 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`                                                              | `java.util.concurrent.ForkJoinPool`                        |
|  +3.9% | +249.499 MiB | 17.1% → 17.7% |  6.3 GiB → 6.54 GiB | 12,904 → 13,403 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +3.0% | +246.499 MiB | 21.7% → 22.2% | 7.99 GiB → 8.23 GiB | 16,358 → 16,851 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +3.4% | +204.388 MiB | 16.1% → 16.5% | 5.92 GiB → 6.12 GiB | 12,116 → 12,525 | `grow()`                                                                                                               | `java.util.ArrayList`                                      |
|  +3.4% | +204.388 MiB | 16.1% → 16.5% | 5.92 GiB → 6.12 GiB | 12,116 → 12,525 | `add(Object, Object[], int)`                                                                                           | `java.util.ArrayList`                                      |
|  +3.4% | +204.388 MiB | 16.1% → 16.5% | 5.92 GiB → 6.12 GiB | 12,116 → 12,525 | `add(Object)`                                                                                                          | `java.util.ArrayList`                                      |
|    new |  +201.35 MiB |   0.0% → 0.5% |       0 B → 201 MiB |         0 → 397 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                |
|  +0.5% | +169.522 MiB |         99.4% | 36.6 GiB → 36.8 GiB | 74,684 → 75,024 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|  +0.5% | +169.522 MiB |         99.4% | 36.6 GiB → 36.8 GiB | 74,684 → 75,024 | `exec()`                                                                                                               | `java.util.concurrent.RecursiveTask`                       |
|  +0.5% | +169.522 MiB |         99.4% | 36.6 GiB → 36.8 GiB | 74,688 → 75,028 | `doExec()`                                                                                                             | `java.util.concurrent.ForkJoinTask`                        |
|  +0.5% | +169.522 MiB |         99.4% | 36.6 GiB → 36.8 GiB | 74,688 → 75,028 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`                                                                   | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|  +0.5% | +169.522 MiB |         99.4% | 36.6 GiB → 36.8 GiB | 74,688 → 75,028 | `scan(ForkJoinPool$WorkQueue, int, int)`                                                                               | `java.util.concurrent.ForkJoinPool`                        |
|  +0.5% | +169.522 MiB |         99.4% | 36.6 GiB → 36.8 GiB | 74,688 → 75,028 | `runWorker(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`                        |
|  +0.5% | +169.522 MiB |         99.4% | 36.6 GiB → 36.8 GiB | 74,688 → 75,028 | `run()`                                                                                                                | `java.util.concurrent.ForkJoinWorkerThread`                |
| +36.8% |  +68.499 MiB |   0.5% → 0.7% |   186 MiB → 254 MiB |       372 → 509 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| +36.8% |  +68.499 MiB |   0.5% → 0.7% |   186 MiB → 254 MiB |       372 → 509 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| +38.3% |  +64.999 MiB |   0.4% → 0.6% |   169 MiB → 234 MiB |       339 → 469 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

##### Standard library

| Change |        Delta |             % |                Size |         Samples | Function                                                  | Location                                      |
| -----: | -----------: | ------------: | ------------------: | --------------: | --------------------------------------------------------- | --------------------------------------------- |
|  +1.4% | +431.999 MiB | 79.2% → 80.0% | 29.2 GiB → 29.6 GiB | 59,741 → 60,605 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`           |
|  +1.4% | +431.999 MiB | 79.2% → 80.0% | 29.2 GiB → 29.6 GiB | 59,741 → 60,605 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`           |
|  +1.4% | +422.499 MiB | 78.4% → 79.1% | 28.9 GiB → 29.3 GiB | 59,112 → 59,957 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  +4.8% | +257.499 MiB | 14.2% → 14.8% | 5.23 GiB → 5.49 GiB | 10,719 → 11,234 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  +3.4% | +204.388 MiB | 16.1% → 16.5% | 5.92 GiB → 6.12 GiB | 12,116 → 12,525 | `grow()`                                                  | `java.util.ArrayList`                         |
|  +3.4% | +204.388 MiB | 16.1% → 16.5% | 5.92 GiB → 6.12 GiB | 12,116 → 12,525 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                         |
|  +3.4% | +204.388 MiB | 16.1% → 16.5% | 5.92 GiB → 6.12 GiB | 12,116 → 12,525 | `add(Object)`                                             | `java.util.ArrayList`                         |
|  +0.5% | +169.522 MiB |         99.4% | 36.6 GiB → 36.8 GiB | 74,684 → 75,024 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`          |
|  +0.5% | +169.522 MiB |         99.4% | 36.6 GiB → 36.8 GiB | 74,688 → 75,028 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`           |
|  +0.5% | +169.522 MiB |         99.4% | 36.6 GiB → 36.8 GiB | 74,688 → 75,028 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  +0.5% | +169.522 MiB |         99.4% | 36.6 GiB → 36.8 GiB | 74,688 → 75,028 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`           |
|  +0.5% | +169.522 MiB |         99.4% | 36.6 GiB → 36.8 GiB | 74,688 → 75,028 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`           |
|  +0.5% | +169.522 MiB |         99.4% | 36.6 GiB → 36.8 GiB | 74,688 → 75,028 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`   |
|  +0.2% |  +46.912 MiB | 52.6% → 52.5% |            19.4 GiB | 39,338 → 39,433 | `grow(int)`                                               | `java.util.ArrayList`                         |
|  +0.4% |  +34.522 MiB |         21.0% | 7.74 GiB → 7.78 GiB | 15,548 → 15,618 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |
|  +0.1% |  +23.912 MiB | 91.0% → 90.6% |            33.5 GiB | 68,299 → 68,348 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                            |
|  +5.8% |  +17.999 MiB |   0.8% → 0.9% |   311 MiB → 329 MiB |       622 → 658 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                           |
| +42.9% |  +14.999 MiB |          0.1% |     35 MiB → 50 MiB |        70 → 100 | `range(int, int)`                                         | `java.util.stream.IntStream`                  |
| +58.0% |  +14.499 MiB |          0.1% |   25 MiB → 39.5 MiB |         50 → 79 | `intStream(Spliterator$OfInt, boolean)`                   | `java.util.stream.StreamSupport`              |
|  +0.2% |  +12.999 MiB | 18.8% → 18.7% | 6.92 GiB → 6.93 GiB | 14,173 → 14,199 | `<init>(Collection)`                                      | `java.util.ArrayList`                         |

##### Ours

| Change |        Delta |             % |                Size |         Samples | Function                                                                                                               | Location                                                                                                                                                                    |
| -----: | -----------: | ------------: | ------------------: | --------------: | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +3.9% | +249.499 MiB | 17.1% → 17.7% |  6.3 GiB → 6.54 GiB | 12,904 → 13,403 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                                                  |
|  +3.0% | +246.499 MiB | 21.7% → 22.2% | 7.99 GiB → 8.23 GiB | 16,358 → 16,851 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                                                  |
|    new |  +201.35 MiB |   0.0% → 0.5% |       0 B → 201 MiB |         0 → 397 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                                                                                                                 |
|  +0.5% | +169.522 MiB |         99.4% | 36.6 GiB → 36.8 GiB | 74,684 → 75,024 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                                                                                                      |
| +36.8% |  +68.499 MiB |   0.5% → 0.7% |   186 MiB → 254 MiB |       372 → 509 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                                                                                                      |
| +36.8% |  +68.499 MiB |   0.5% → 0.7% |   186 MiB → 254 MiB |       372 → 509 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                                                                                                      |
| +38.3% |  +64.999 MiB |   0.4% → 0.6% |   169 MiB → 234 MiB |       339 → 469 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                                                                                                      |
| +23.5% |  +36.499 MiB |   0.4% → 0.5% |   155 MiB → 191 MiB |       310 → 383 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                                                   |
| +33.8% |  +24.499 MiB |   0.2% → 0.3% |   72.5 MiB → 97 MiB |       145 → 194 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                                                   |
| +33.8% |  +24.499 MiB |   0.2% → 0.3% |   72.5 MiB → 97 MiB |       145 → 194 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                                                   |
| +29.4% |  +20.999 MiB |          0.2% | 71.5 MiB → 92.5 MiB |       143 → 185 | `add(double[], double[])`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                                                   |
| +29.4% |  +20.999 MiB |          0.2% | 71.5 MiB → 92.5 MiB |       143 → 185 | `combineResults(double[], double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                                                   |
| +29.4% |  +20.999 MiB |          0.2% | 71.5 MiB → 92.5 MiB |       143 → 185 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                                                   |
| +13.9% |  +14.499 MiB |          0.3% |   104 MiB → 119 MiB |       209 → 238 | `lambda$collectClusters$0(Double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                                                  |
| +13.9% |  +14.499 MiB |          0.3% |   104 MiB → 119 MiB |       209 → 238 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000e001186b38 → org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000008011a3940` |
|  +8.8% |  +10.999 MiB |   0.3% → 0.4% |   125 MiB → 136 MiB |       250 → 272 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                                                  |
|    new |   +6.499 MiB |  0.0% → <0.1% |       0 B → 6.5 MiB |          0 → 13 | `rowToArray$1(Map)`                                                                                                    | `org.renaissance.jdk.concurrent.FjKmeans`                                                                                                                                   |
|    new |   +6.499 MiB |  0.0% → <0.1% |       0 B → 6.5 MiB |          0 → 13 | `setUpBeforeAll$$anonfun$1(Map)`                                                                                       | `org.renaissance.jdk.concurrent.FjKmeans`                                                                                                                                   |
|    new |   +6.499 MiB |  0.0% → <0.1% |       0 B → 6.5 MiB |          0 → 13 | `lambda$toCsvRows$2(String[], Function, String)`                                                                       | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`                                                                                                          |
|    new |   +6.499 MiB |  0.0% → <0.1% |       0 B → 6.5 MiB |          0 → 13 | `apply(Object)`                                                                                                        | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x0000000801123bf8`                                                                               |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                Size |         Samples | Function                                                                                                               | Location                                                                                                                                      |
| ------: | -----------: | ------------: | ------------------: | --------------: | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| removed |  -198.46 MiB |   0.5% → 0.0% |       198 MiB → 0 B |         391 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                                                                                   |
|   -0.9% | -181.976 MiB | 56.7% → 56.0% | 20.9 GiB → 20.7 GiB | 42,486 → 42,123 | `addAll(Collection)`                                                                                                   | `java.util.ArrayList`                                                                                                                         |
|   -0.6% | -169.976 MiB | 76.5% → 75.7% |   28.2 GiB → 28 GiB | 57,417 → 57,078 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|   -0.6% | -169.476 MiB | 76.5% → 75.7% |   28.2 GiB → 28 GiB | 57,409 → 57,071 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
|   -0.6% | -169.476 MiB | 76.5% → 75.7% |   28.2 GiB → 28 GiB | 57,409 → 57,071 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
|   -0.6% | -161.476 MiB | 75.8% → 75.0% | 27.9 GiB → 27.8 GiB | 56,883 → 56,561 | `merge(Object, Object, BiFunction)`                                                                                    | `java.util.HashMap`                                                                                                                           |
|   -0.6% | -161.476 MiB | 75.8% → 75.0% | 27.9 GiB → 27.8 GiB | 56,883 → 56,561 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|   -0.6% | -161.476 MiB | 75.8% → 75.0% | 27.9 GiB → 27.8 GiB | 56,883 → 56,561 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000e001186d88 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7800` |
|   -0.6% | -161.476 MiB | 75.8% → 75.0% | 27.9 GiB → 27.8 GiB | 56,883 → 56,561 | `forEach(BiConsumer)`                                                                                                  | `java.util.HashMap`                                                                                                                           |
|   -0.6% | -160.976 MiB | 75.8% → 75.0% | 27.9 GiB → 27.8 GiB | 56,880 → 56,559 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|   -0.6% | -160.976 MiB | 75.8% → 75.0% | 27.9 GiB → 27.8 GiB | 56,880 → 56,559 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000e001187460 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7400` |
|  -18.8% |  -21.999 MiB |          0.3% |    117 MiB → 95 MiB |       234 → 190 | `evaluate(Spliterator, boolean, IntFunction)`                                                                          | `java.util.stream.AbstractPipeline`                                                                                                           |
|  -18.8% |  -21.999 MiB |          0.3% |    117 MiB → 95 MiB |       234 → 190 | `evaluateToArrayNode(IntFunction)`                                                                                     | `java.util.stream.AbstractPipeline`                                                                                                           |
|  -18.8% |  -21.999 MiB |          0.3% |    117 MiB → 95 MiB |       234 → 190 | `toArray(IntFunction)`                                                                                                 | `java.util.stream.ReferencePipeline`                                                                                                          |
|  -23.9% |  -15.999 MiB |   0.2% → 0.1% |     67 MiB → 51 MiB |       134 → 102 | `lambda$generateData$3(int, int, Random[], int)`                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|  -23.9% |  -15.999 MiB |   0.2% → 0.1% |     67 MiB → 51 MiB |       134 → 102 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000e001125b10 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a2388` |
|  -22.1% |  -15.499 MiB |   0.2% → 0.1% |   70 MiB → 54.5 MiB |       140 → 109 | `valueOf(double)`                                                                                                      | `java.lang.Double`                                                                                                                            |
|   -0.2% |  -14.977 MiB | 20.6% → 20.5% | 7.59 GiB → 7.57 GiB | 15,231 → 15,202 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|   -0.2% |  -14.977 MiB | 20.6% → 20.5% | 7.59 GiB → 7.57 GiB | 15,231 → 15,202 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000e001183d68 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a2bd0` |
|   -0.2% |  -14.977 MiB | 20.6% → 20.5% | 7.59 GiB → 7.57 GiB | 15,231 → 15,202 | `exec()`                                                                                                               | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                                                                                           |

##### Standard library

| Change |        Delta |             % |                Size |         Samples | Function                                        | Location                                            |
| -----: | -----------: | ------------: | ------------------: | --------------: | ----------------------------------------------- | --------------------------------------------------- |
|  -0.9% | -181.976 MiB | 56.7% → 56.0% | 20.9 GiB → 20.7 GiB | 42,486 → 42,123 | `addAll(Collection)`                            | `java.util.ArrayList`                               |
|  -0.6% | -161.476 MiB | 75.8% → 75.0% | 27.9 GiB → 27.8 GiB | 56,883 → 56,561 | `merge(Object, Object, BiFunction)`             | `java.util.HashMap`                                 |
|  -0.6% | -161.476 MiB | 75.8% → 75.0% | 27.9 GiB → 27.8 GiB | 56,883 → 56,561 | `forEach(BiConsumer)`                           | `java.util.HashMap`                                 |
| -18.8% |  -21.999 MiB |          0.3% |    117 MiB → 95 MiB |       234 → 190 | `evaluate(Spliterator, boolean, IntFunction)`   | `java.util.stream.AbstractPipeline`                 |
| -18.8% |  -21.999 MiB |          0.3% |    117 MiB → 95 MiB |       234 → 190 | `evaluateToArrayNode(IntFunction)`              | `java.util.stream.AbstractPipeline`                 |
| -18.8% |  -21.999 MiB |          0.3% |    117 MiB → 95 MiB |       234 → 190 | `toArray(IntFunction)`                          | `java.util.stream.ReferencePipeline`                |
| -22.1% |  -15.499 MiB |   0.2% → 0.1% |   70 MiB → 54.5 MiB |       140 → 109 | `valueOf(double)`                               | `java.lang.Double`                                  |
|  -0.2% |  -14.977 MiB | 20.6% → 20.5% | 7.59 GiB → 7.57 GiB | 15,231 → 15,202 | `exec()`                                        | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  -4.2% |  -11.999 MiB |   0.8% → 0.7% |   284 MiB → 272 MiB |       569 → 545 | `newNode(int, Object, Object, HashMap$Node)`    | `java.util.HashMap`                                 |
|  -0.1% |  -11.499 MiB | 39.0% → 38.8% |            14.4 GiB | 29,437 → 29,414 | `toArray()`                                     | `java.util.ArrayList`                               |
| -45.8% |    -9.61 MiB |  0.1% → <0.1% |   21 MiB → 11.4 MiB |         36 → 17 | `copyOf(Object[], int, Class)`                  | `java.util.Arrays`                                  |
|  -2.8% |   -5.499 MiB |          0.5% |   194 MiB → 188 MiB |       388 → 377 | `putMapEntries(Map, boolean)`                   | `java.util.HashMap`                                 |
|  -2.8% |   -5.499 MiB |          0.5% |   194 MiB → 188 MiB |       388 → 377 | `<init>(Map)`                                   | `java.util.HashMap`                                 |
|  -2.5% |   -4.499 MiB |          0.5% |   179 MiB → 174 MiB |       358 → 349 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap`                                 |
| -26.9% |   -3.499 MiB |         <0.1% |    13 MiB → 9.5 MiB |         26 → 19 | `wrapSink(Sink)`                                | `java.util.stream.AbstractPipeline`                 |
|  -8.8% |   -2.999 MiB |          0.1% |     34 MiB → 31 MiB |         68 → 62 | `builder(long, IntFunction)`                    | `java.util.stream.Nodes`                            |
|  -8.8% |   -2.999 MiB |          0.1% |     34 MiB → 31 MiB |         68 → 62 | `makeNodeBuilder(long, IntFunction)`            | `java.util.stream.ReferencePipeline`                |
| -24.0% |   -2.999 MiB |         <0.1% |  12.5 MiB → 9.5 MiB |         25 → 19 | `opWrapSink(int, Sink)`                         | `java.util.stream.IntPipeline$1`                    |
| -80.0% |   -1.999 MiB |         <0.1% |   2.5 MiB → 512 KiB |           5 → 1 | `loadClass(String, boolean)`                    | `jdk.internal.loader.BuiltinClassLoader`            |
| -80.0% |   -1.999 MiB |         <0.1% |   2.5 MiB → 512 KiB |           5 → 1 | `loadClass(String, boolean)`                    | `jdk.internal.loader.ClassLoaders$AppClassLoader`   |

##### Ours

|  Change |        Delta |             % |                Size |         Samples | Function                                                                                                               | Location                                                                                                                                      |
| ------: | -----------: | ------------: | ------------------: | --------------: | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| removed |  -198.46 MiB |   0.5% → 0.0% |       198 MiB → 0 B |         391 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                                                                                   |
|   -0.6% | -169.976 MiB | 76.5% → 75.7% |   28.2 GiB → 28 GiB | 57,417 → 57,078 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|   -0.6% | -169.476 MiB | 76.5% → 75.7% |   28.2 GiB → 28 GiB | 57,409 → 57,071 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
|   -0.6% | -169.476 MiB | 76.5% → 75.7% |   28.2 GiB → 28 GiB | 57,409 → 57,071 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
|   -0.6% | -161.476 MiB | 75.8% → 75.0% | 27.9 GiB → 27.8 GiB | 56,883 → 56,561 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|   -0.6% | -161.476 MiB | 75.8% → 75.0% | 27.9 GiB → 27.8 GiB | 56,883 → 56,561 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000e001186d88 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7800` |
|   -0.6% | -160.976 MiB | 75.8% → 75.0% | 27.9 GiB → 27.8 GiB | 56,880 → 56,559 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|   -0.6% | -160.976 MiB | 75.8% → 75.0% | 27.9 GiB → 27.8 GiB | 56,880 → 56,559 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000e001187460 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7400` |
|  -23.9% |  -15.999 MiB |   0.2% → 0.1% |     67 MiB → 51 MiB |       134 → 102 | `lambda$generateData$3(int, int, Random[], int)`                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|  -23.9% |  -15.999 MiB |   0.2% → 0.1% |     67 MiB → 51 MiB |       134 → 102 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000e001125b10 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a2388` |
|   -0.2% |  -14.977 MiB | 20.6% → 20.5% | 7.59 GiB → 7.57 GiB | 15,231 → 15,202 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|   -0.2% |  -14.977 MiB | 20.6% → 20.5% | 7.59 GiB → 7.57 GiB | 15,231 → 15,202 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000e001183d68 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a2bd0` |
|  -63.2% |   -5.999 MiB |         <0.1% |   9.5 MiB → 3.5 MiB |          19 → 7 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                                                                                                     |
|  -42.1% |   -3.999 MiB |         <0.1% |   9.5 MiB → 5.5 MiB |         19 → 11 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                                                                                                     |
|   -0.2% |   -2.999 MiB |          4.6% | 1.69 GiB → 1.68 GiB |   3,454 → 3,448 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
| removed |   -2.499 MiB |  <0.1% → 0.0% |       2.5 MiB → 0 B |           5 → 0 | `$anonfun$1(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`                                                                                                     |
| removed |   -1.999 MiB |  <0.1% → 0.0% |         2 MiB → 0 B |           4 → 0 | `$anonfun$1(Config, Path)`                                                                                             | `org.renaissance.harness.RenaissanceSuite$`                                                                                                   |
|   -0.9% |    -1.61 MiB |          0.5% |   188 MiB → 187 MiB |       371 → 368 | `generateData(int, int, int)`                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|   -7.9% |   -1.499 MiB |  0.1% → <0.1% |   19 MiB → 17.5 MiB |         38 → 35 | `lambda$generateData$4(int)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|   -7.9% |   -1.499 MiB |  0.1% → <0.1% |   19 MiB → 17.5 MiB |         38 → 35 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000e001125d48 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a25c0` |

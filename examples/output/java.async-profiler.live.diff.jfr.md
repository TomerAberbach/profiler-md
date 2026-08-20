# Allocated heap profile diff

Allocated 37.3 GiB (-15.628 MiB, ~0%) over 76,154 samples → 76,122 samples (514 KiB per sample).

| Category         | Change |        Delta |             % |                Size |         Samples |
| ---------------- | -----: | -----------: | ------------: | ------------------: | --------------: |
| Standard library |  -0.3% | -120.627 MiB | 93.2% → 92.9% | 34.8 GiB → 34.7 GiB | 70,926 → 70,684 |
| Ours             |  +4.0% | +104.999 MiB |   6.8% → 7.1% | 2.55 GiB → 2.66 GiB |   5,228 → 5,438 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|  Change |          Delta |            % |                Size |       Samples | Function                                      | Location                                                   |
| ------: | -------------: | -----------: | ------------------: | ------------: | --------------------------------------------- | ---------------------------------------------------------- |
|   +3.7% |    +62.499 MiB |  4.4% → 4.6% | 1.65 GiB → 1.71 GiB | 3,375 → 3,500 | `findNearestCentroid()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +41.6% |    +28.499 MiB |  0.2% → 0.3% |   68.5 MiB → 97 MiB |     137 → 194 | `vectorSum()`                                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   +8.1% |    +17.499 MiB |         0.6% |   216 MiB → 233 MiB |     432 → 467 | `grow(int)`                                   | `java.util.ArrayList`                                      |
|  +16.1% |    +17.499 MiB |         0.3% |   108 MiB → 126 MiB |     217 → 252 | `lambda$merge$6(List, List)`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  +17.8% |    +17.499 MiB |         0.3% |  98.5 MiB → 116 MiB |     197 → 232 | `lambda$collectClusters$0(Double[])`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +14.0% |    +12.499 MiB |  0.2% → 0.3% |  89.5 MiB → 102 MiB |     179 → 204 | `add(double[], double[])`                     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   +4.0% |     +7.499 MiB |         0.5% |   185 MiB → 193 MiB |     371 → 386 | `createSubtask(int, int)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   +9.7% |     +6.999 MiB |         0.2% | 72.5 MiB → 79.5 MiB |     145 → 159 | `merge(Map, Map)`                             | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  +57.9% |     +5.499 MiB |        <0.1% |    9.5 MiB → 15 MiB |       19 → 30 | `entrySet()`                                  | `java.util.HashMap`                                        |
|  +66.7% |     +2.999 MiB |        <0.1% |   4.5 MiB → 7.5 MiB |        9 → 15 | `<init>(InputStream, Inflater, int)`          | `java.util.zip.InflaterInputStream`                        |
|   +9.1% |     +2.499 MiB |         0.1% |   27.5 MiB → 30 MiB |       55 → 60 | `intStream(Spliterator$OfInt, boolean)`       | `java.util.stream.StreamSupport`                           |
|  +37.5% |     +1.499 MiB |        <0.1% |     4 MiB → 5.5 MiB |        8 → 11 | `awaitDone(int, long)`                        | `java.util.concurrent.ForkJoinTask`                        |
| +150.0% |     +1.499 MiB |        <0.1% |  1024 KiB → 2.5 MiB |         2 → 5 | `mapToObj(DoubleFunction, int)`               | `java.util.stream.DoublePipeline`                          |
|   +7.5% |     +1.499 MiB |         0.1% |   20 MiB → 21.5 MiB |       40 → 43 | `lambda$generateData$4(int)`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|     new |     +1.499 MiB | 0.0% → <0.1% |       0 B → 1.5 MiB |         0 → 3 | `putVal(Object, Object, boolean)`             | `java.util.concurrent.ConcurrentHashMap`                   |
|     new |     +1.499 MiB | 0.0% → <0.1% |       0 B → 1.5 MiB |         0 → 3 | `fillInStackTrace(int)`                       | `java.lang.Throwable`                                      |
|  +66.7% | +1,023.998 KiB |        <0.1% |   1.5 MiB → 2.5 MiB |         3 → 5 | `doubleStream(Spliterator$OfDouble, boolean)` | `java.util.stream.StreamSupport`                           |
|   +9.1% | +1,023.998 KiB |        <0.1% |     11 MiB → 12 MiB |       22 → 24 | `allocateInstance(Object)`                    | `java.lang.invoke.DirectMethodHandle`                      |
|     new | +1,023.998 KiB | 0.0% → <0.1% |      0 B → 1024 KiB |         0 → 2 | `transferTo(OutputStream)`                    | `java.io.InputStream`                                      |
|     new | +1,023.998 KiB | 0.0% → <0.1% |      0 B → 1024 KiB |         0 → 2 | `lambda$boxed$0(int)`                         | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

##### Standard library

|  Change |          Delta |            % |               Size |   Samples | Function                                                                                                                 | Location                                       |
| ------: | -------------: | -----------: | -----------------: | --------: | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- |
|   +8.1% |    +17.499 MiB |         0.6% |  216 MiB → 233 MiB | 432 → 467 | `grow(int)`                                                                                                              | `java.util.ArrayList`                          |
|  +57.9% |     +5.499 MiB |        <0.1% |   9.5 MiB → 15 MiB |   19 → 30 | `entrySet()`                                                                                                             | `java.util.HashMap`                            |
|  +66.7% |     +2.999 MiB |        <0.1% |  4.5 MiB → 7.5 MiB |    9 → 15 | `<init>(InputStream, Inflater, int)`                                                                                     | `java.util.zip.InflaterInputStream`            |
|   +9.1% |     +2.499 MiB |         0.1% |  27.5 MiB → 30 MiB |   55 → 60 | `intStream(Spliterator$OfInt, boolean)`                                                                                  | `java.util.stream.StreamSupport`               |
|  +37.5% |     +1.499 MiB |        <0.1% |    4 MiB → 5.5 MiB |    8 → 11 | `awaitDone(int, long)`                                                                                                   | `java.util.concurrent.ForkJoinTask`            |
| +150.0% |     +1.499 MiB |        <0.1% | 1024 KiB → 2.5 MiB |     2 → 5 | `mapToObj(DoubleFunction, int)`                                                                                          | `java.util.stream.DoublePipeline`              |
|     new |     +1.499 MiB | 0.0% → <0.1% |      0 B → 1.5 MiB |     0 → 3 | `putVal(Object, Object, boolean)`                                                                                        | `java.util.concurrent.ConcurrentHashMap`       |
|     new |     +1.499 MiB | 0.0% → <0.1% |      0 B → 1.5 MiB |     0 → 3 | `fillInStackTrace(int)`                                                                                                  | `java.lang.Throwable`                          |
|  +66.7% | +1,023.998 KiB |        <0.1% |  1.5 MiB → 2.5 MiB |     3 → 5 | `doubleStream(Spliterator$OfDouble, boolean)`                                                                            | `java.util.stream.StreamSupport`               |
|   +9.1% | +1,023.998 KiB |        <0.1% |    11 MiB → 12 MiB |   22 → 24 | `allocateInstance(Object)`                                                                                               | `java.lang.invoke.DirectMethodHandle`          |
|     new | +1,023.998 KiB | 0.0% → <0.1% |     0 B → 1024 KiB |     0 → 2 | `transferTo(OutputStream)`                                                                                               | `java.io.InputStream`                          |
|   +3.4% |   +511.999 KiB |        <0.1% |  14.5 MiB → 15 MiB |   29 → 30 | `copyOf(byte[], int)`                                                                                                    | `java.util.Arrays`                             |
|     new |   +511.999 KiB | 0.0% → <0.1% |      0 B → 512 KiB |     0 → 1 | `addConstantMemberReference(int, String, String, String)`                                                                | `jdk.internal.org.objectweb.asm.SymbolTable`   |
| +100.0% |   +511.999 KiB |        <0.1% | 512 KiB → 1024 KiB |     1 → 2 | `copyOfRangeByte(byte[], int, int)`                                                                                      | `java.util.Arrays`                             |
|     new |   +511.999 KiB | 0.0% → <0.1% |      0 B → 512 KiB |     0 → 1 | `makeAllocator(MemberName)`                                                                                              | `java.lang.invoke.DirectMethodHandle`          |
|     new |   +511.999 KiB | 0.0% → <0.1% |      0 B → 512 KiB |     0 → 1 | `<init>(MethodHandles$Lookup, MethodType, String, MethodType, MethodHandle, MethodType, boolean, Class[], MethodType[])` | `java.lang.invoke.InnerClassLambdaMetafactory` |
|     new |   +511.999 KiB | 0.0% → <0.1% |      0 B → 512 KiB |     0 → 1 | `toString()`                                                                                                             | `java.lang.StringBuilder`                      |
|     new |   +511.999 KiB | 0.0% → <0.1% |      0 B → 512 KiB |     0 → 1 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])`                                                           | `java.util.concurrent.ConcurrentHashMap`       |
|     new |   +511.999 KiB | 0.0% → <0.1% |      0 B → 512 KiB |     0 → 1 | `readNBytes(int)`                                                                                                        | `java.io.InputStream`                          |
|     new |   +511.999 KiB | 0.0% → <0.1% |      0 B → 512 KiB |     0 → 1 | `makeVarargsCollector(MethodHandle, Class)`                                                                              | `java.lang.invoke.MethodHandleImpl`            |

##### Ours

| Change |          Delta |            % |                Size |       Samples | Function                             | Location                                                   |
| -----: | -------------: | -----------: | ------------------: | ------------: | ------------------------------------ | ---------------------------------------------------------- |
|  +3.7% |    +62.499 MiB |  4.4% → 4.6% | 1.65 GiB → 1.71 GiB | 3,375 → 3,500 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +41.6% |    +28.499 MiB |  0.2% → 0.3% |   68.5 MiB → 97 MiB |     137 → 194 | `vectorSum()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +16.1% |    +17.499 MiB |         0.3% |   108 MiB → 126 MiB |     217 → 252 | `lambda$merge$6(List, List)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| +17.8% |    +17.499 MiB |         0.3% |  98.5 MiB → 116 MiB |     197 → 232 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +14.0% |    +12.499 MiB |  0.2% → 0.3% |  89.5 MiB → 102 MiB |     179 → 204 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +4.0% |     +7.499 MiB |         0.5% |   185 MiB → 193 MiB |     371 → 386 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +9.7% |     +6.999 MiB |         0.2% | 72.5 MiB → 79.5 MiB |     145 → 159 | `merge(Map, Map)`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  +7.5% |     +1.499 MiB |         0.1% |   20 MiB → 21.5 MiB |       40 → 43 | `lambda$generateData$4(int)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|    new | +1,023.998 KiB | 0.0% → <0.1% |      0 B → 1024 KiB |         0 → 2 | `lambda$boxed$0(int)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| +50.0% |   +511.999 KiB |        <0.1% |  1024 KiB → 1.5 MiB |         2 → 3 | `lambda$run$0(int, List, int)`       | `org.renaissance.jdk.concurrent.JavaKMeans`                |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |          Delta |             % |               Size |         Samples | Function                            | Location                                                   |
| ------: | -------------: | ------------: | -----------------: | --------------: | ----------------------------------- | ---------------------------------------------------------- |
|   -0.3% |   -115.238 MiB | 91.0% → 90.7% |  34 GiB → 33.9 GiB | 69,267 → 69,036 | `copyOf(Object[], int)`             | `java.util.Arrays`                                         |
|  -22.1% |    -22.999 MiB |   0.3% → 0.2% |   104 MiB → 81 MiB |       208 → 162 | `collectClusters(int[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -12.0% |    -18.999 MiB |          0.4% |  158 MiB → 139 MiB |       316 → 278 | `createSubtask(int, int)`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -24.3% |    -17.499 MiB |   0.2% → 0.1% |  72 MiB → 54.5 MiB |       144 → 109 | `valueOf(double)`                   | `java.lang.Double`                                         |
|  -24.0% |     -5.999 MiB |  0.1% → <0.1% |    25 MiB → 19 MiB |         50 → 38 | `mapToObj(IntFunction, int)`        | `java.util.stream.IntPipeline`                             |
|  -40.7% |     -5.499 MiB |         <0.1% |   13.5 MiB → 8 MiB |         27 → 16 | `builder(long, IntFunction)`        | `java.util.stream.Nodes`                                   |
|   -4.0% |     -4.499 MiB |          0.3% |  112 MiB → 107 MiB |       224 → 215 | `resize()`                          | `java.util.HashMap`                                        |
|  -50.0% |     -4.499 MiB |         <0.1% |    9 MiB → 4.5 MiB |          18 → 9 | `createSubtask(int, int)`           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -26.9% |     -3.499 MiB |         <0.1% |   13 MiB → 9.5 MiB |         26 → 19 | `range(int, int)`                   | `java.util.stream.IntStream`                               |
|  -25.0% |     -2.999 MiB |         <0.1% |     12 MiB → 9 MiB |         24 → 18 | `opWrapSink(int, Sink)`             | `java.util.stream.IntPipeline$1`                           |
|  -25.0% |     -1.999 MiB |         <0.1% |      8 MiB → 6 MiB |         16 → 12 | `computeClusterAverages()`          | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| removed |     -1.499 MiB |  <0.1% → 0.0% |      1.5 MiB → 0 B |           3 → 0 | `div(double[], int)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -30.0% |     -1.499 MiB |         <0.1% |    5 MiB → 3.5 MiB |          10 → 7 | `allocateInstance(Class)`           | `jdk.internal.misc.Unsafe`                                 |
| removed | -1,023.998 KiB |  <0.1% → 0.0% |     1024 KiB → 0 B |           2 → 0 | `average(List)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| removed | -1,023.998 KiB |  <0.1% → 0.0% |     1024 KiB → 0 B |           2 → 0 | `initCEN(int, ZipCoder)`            | `java.util.zip.ZipFile$Source`                             |
| removed | -1,023.998 KiB |  <0.1% → 0.0% |     1024 KiB → 0 B |           2 → 0 | `read(InputStream, String)`         | `java.util.jar.Manifest`                                   |
| removed |   -511.999 KiB |  <0.1% → 0.0% |      512 KiB → 0 B |           1 → 0 | `makeImpl(Class, Class[], boolean)` | `java.lang.invoke.MethodType`                              |
| removed |   -511.999 KiB |  <0.1% → 0.0% |      512 KiB → 0 B |           1 → 0 | `load(DataInputStream)`             | `sun.util.calendar.ZoneInfoFile`                           |
|  -50.0% |   -511.999 KiB |         <0.1% | 1024 KiB → 512 KiB |           2 → 1 | `enlarge(int)`                      | `jdk.internal.org.objectweb.asm.ByteVector`                |
|  -50.0% |   -511.999 KiB |         <0.1% | 1024 KiB → 512 KiB |           2 → 1 | `addConstantUtf8(String)`           | `jdk.internal.org.objectweb.asm.SymbolTable`               |

##### Standard library

|  Change |          Delta |             % |               Size |         Samples | Function                                     | Location                                     |
| ------: | -------------: | ------------: | -----------------: | --------------: | -------------------------------------------- | -------------------------------------------- |
|   -0.3% |   -115.238 MiB | 91.0% → 90.7% |  34 GiB → 33.9 GiB | 69,267 → 69,036 | `copyOf(Object[], int)`                      | `java.util.Arrays`                           |
|  -24.3% |    -17.499 MiB |   0.2% → 0.1% |  72 MiB → 54.5 MiB |       144 → 109 | `valueOf(double)`                            | `java.lang.Double`                           |
|  -24.0% |     -5.999 MiB |  0.1% → <0.1% |    25 MiB → 19 MiB |         50 → 38 | `mapToObj(IntFunction, int)`                 | `java.util.stream.IntPipeline`               |
|  -40.7% |     -5.499 MiB |         <0.1% |   13.5 MiB → 8 MiB |         27 → 16 | `builder(long, IntFunction)`                 | `java.util.stream.Nodes`                     |
|   -4.0% |     -4.499 MiB |          0.3% |  112 MiB → 107 MiB |       224 → 215 | `resize()`                                   | `java.util.HashMap`                          |
|  -26.9% |     -3.499 MiB |         <0.1% |   13 MiB → 9.5 MiB |         26 → 19 | `range(int, int)`                            | `java.util.stream.IntStream`                 |
|  -25.0% |     -2.999 MiB |         <0.1% |     12 MiB → 9 MiB |         24 → 18 | `opWrapSink(int, Sink)`                      | `java.util.stream.IntPipeline$1`             |
|  -30.0% |     -1.499 MiB |         <0.1% |    5 MiB → 3.5 MiB |          10 → 7 | `allocateInstance(Class)`                    | `jdk.internal.misc.Unsafe`                   |
| removed | -1,023.998 KiB |  <0.1% → 0.0% |     1024 KiB → 0 B |           2 → 0 | `initCEN(int, ZipCoder)`                     | `java.util.zip.ZipFile$Source`               |
| removed | -1,023.998 KiB |  <0.1% → 0.0% |     1024 KiB → 0 B |           2 → 0 | `read(InputStream, String)`                  | `java.util.jar.Manifest`                     |
| removed |   -511.999 KiB |  <0.1% → 0.0% |      512 KiB → 0 B |           1 → 0 | `makeImpl(Class, Class[], boolean)`          | `java.lang.invoke.MethodType`                |
| removed |   -511.999 KiB |  <0.1% → 0.0% |      512 KiB → 0 B |           1 → 0 | `load(DataInputStream)`                      | `sun.util.calendar.ZoneInfoFile`             |
|  -50.0% |   -511.999 KiB |         <0.1% | 1024 KiB → 512 KiB |           2 → 1 | `enlarge(int)`                               | `jdk.internal.org.objectweb.asm.ByteVector`  |
|  -50.0% |   -511.999 KiB |         <0.1% | 1024 KiB → 512 KiB |           2 → 1 | `addConstantUtf8(String)`                    | `jdk.internal.org.objectweb.asm.SymbolTable` |
| removed |   -511.999 KiB |  <0.1% → 0.0% |      512 KiB → 0 B |           1 → 0 | `put(Object, Object)`                        | `java.util.WeakHashMap`                      |
| removed |   -511.999 KiB |  <0.1% → 0.0% |      512 KiB → 0 B |           1 → 0 | `clone()`                                    | `java.lang.Object`                           |
| removed |   -511.999 KiB |  <0.1% → 0.0% |      512 KiB → 0 B |           1 → 0 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.LinkedHashMap`                    |
| removed |   -511.999 KiB |  <0.1% → 0.0% |      512 KiB → 0 B |           1 → 0 | `lookupKey(Object)`                          | `jdk.internal.util.ReferencedKeyMap`         |
| removed |   -511.999 KiB |  <0.1% → 0.0% |      512 KiB → 0 B |           1 → 0 | `<init>(int)`                                | `java.io.ByteArrayOutputStream`              |
| removed |   -511.999 KiB |  <0.1% → 0.0% |      512 KiB → 0 B |           1 → 0 | `parseName(byte[], int)`                     | `java.util.jar.Manifest`                     |

##### Ours

|  Change |          Delta |            % |              Size |   Samples | Function                   | Location                                                   |
| ------: | -------------: | -----------: | ----------------: | --------: | -------------------------- | ---------------------------------------------------------- |
|  -22.1% |    -22.999 MiB |  0.3% → 0.2% |  104 MiB → 81 MiB | 208 → 162 | `collectClusters(int[])`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -12.0% |    -18.999 MiB |         0.4% | 158 MiB → 139 MiB | 316 → 278 | `createSubtask(int, int)`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -50.0% |     -4.499 MiB |        <0.1% |   9 MiB → 4.5 MiB |    18 → 9 | `createSubtask(int, int)`  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -25.0% |     -1.999 MiB |        <0.1% |     8 MiB → 6 MiB |   16 → 12 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| removed |     -1.499 MiB | <0.1% → 0.0% |     1.5 MiB → 0 B |     3 → 0 | `div(double[], int)`       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| removed | -1,023.998 KiB | <0.1% → 0.0% |    1024 KiB → 0 B |     2 → 0 | `average(List)`            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                Size |         Samples | Function                                                  | Location                                                                              |
| ------: | -----------: | ------------: | ------------------: | --------------: | --------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|   +2.4% | +202.999 MiB | 21.8% → 22.3% | 8.13 GiB → 8.33 GiB | 16,653 → 17,059 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|     new |  +199.46 MiB |   0.0% → 0.5% |       0 B → 199 MiB |         0 → 393 | `invokeStatic(Object, Object)`                            | `java.lang.invoke.LambdaForm$DMH.0x0000000801004800`                                  |
|     new |  +199.46 MiB |   0.0% → 0.5% |       0 B → 199 MiB |         0 → 393 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000000801009800`                                   |
|   +2.5% |  +155.11 MiB | 16.3% → 16.7% | 6.08 GiB → 6.23 GiB | 12,439 → 12,749 | `grow()`                                                  | `java.util.ArrayList`                                                                 |
|   +2.5% |  +155.11 MiB | 16.3% → 16.7% | 6.08 GiB → 6.23 GiB | 12,439 → 12,749 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                                                                 |
|   +2.5% |  +155.11 MiB | 16.3% → 16.7% | 6.08 GiB → 6.23 GiB | 12,439 → 12,749 | `add(Object)`                                             | `java.util.ArrayList`                                                                 |
|   +2.1% | +140.499 MiB | 17.4% → 17.7% | 6.48 GiB → 6.62 GiB | 13,278 → 13,559 | `collectClusters(int[])`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| +140.6% |  +93.499 MiB |   0.2% → 0.4% |  66.5 MiB → 160 MiB |       133 → 320 | `apply(int)`                                              | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011258d8`                |
|   +1.3% |  +69.499 MiB | 14.0% → 14.1% | 5.21 GiB → 5.28 GiB | 10,668 → 10,807 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                                                   |
|   +3.7% |  +62.499 MiB |   4.4% → 4.6% | 1.65 GiB → 1.71 GiB |   3,375 → 3,500 | `findNearestCentroid()`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +41.6% |  +28.499 MiB |   0.2% → 0.3% |   68.5 MiB → 97 MiB |       137 → 194 | `vectorSum()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  +41.6% |  +28.499 MiB |   0.2% → 0.3% |   68.5 MiB → 97 MiB |       137 → 194 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   +0.1% |  +27.499 MiB | 78.2% → 78.3% |            29.2 GiB | 59,789 → 59,844 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`                                         |
|  +12.8% |  +26.999 MiB |          0.6% |   211 MiB → 238 MiB |       422 → 476 | `computeClusterAverages()`                                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|  +12.8% |  +26.999 MiB |          0.6% |   211 MiB → 238 MiB |       422 → 476 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|   +0.1% |  +26.499 MiB | 79.0% → 79.1% |            29.5 GiB | 60,382 → 60,435 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                                                   |
|   +0.1% |  +26.499 MiB | 79.0% → 79.1% |            29.5 GiB | 60,382 → 60,435 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                                                   |
|  +12.4% |  +23.999 MiB |   0.5% → 0.6% |   193 MiB → 217 MiB |       387 → 435 | `average(List)`                                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|  +17.8% |  +17.499 MiB |          0.3% |  98.5 MiB → 116 MiB |       197 → 232 | `lambda$collectClusters$0(Double[])`                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +17.8% |  +17.499 MiB |          0.3% |  98.5 MiB → 116 MiB |       197 → 232 | `apply(Object)`                                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000000801186b38` |

##### Standard library

| Change |       Delta |             % |                Size |         Samples | Function                                                  | Location                                             |
| -----: | ----------: | ------------: | ------------------: | --------------: | --------------------------------------------------------- | ---------------------------------------------------- |
|    new | +199.46 MiB |   0.0% → 0.5% |       0 B → 199 MiB |         0 → 393 | `invokeStatic(Object, Object)`                            | `java.lang.invoke.LambdaForm$DMH.0x0000000801004800` |
|    new | +199.46 MiB |   0.0% → 0.5% |       0 B → 199 MiB |         0 → 393 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000000801009800`  |
|  +2.5% | +155.11 MiB | 16.3% → 16.7% | 6.08 GiB → 6.23 GiB | 12,439 → 12,749 | `grow()`                                                  | `java.util.ArrayList`                                |
|  +2.5% | +155.11 MiB | 16.3% → 16.7% | 6.08 GiB → 6.23 GiB | 12,439 → 12,749 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                                |
|  +2.5% | +155.11 MiB | 16.3% → 16.7% | 6.08 GiB → 6.23 GiB | 12,439 → 12,749 | `add(Object)`                                             | `java.util.ArrayList`                                |
|  +1.3% | +69.499 MiB | 14.0% → 14.1% | 5.21 GiB → 5.28 GiB | 10,668 → 10,807 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                  |
|  +0.1% | +27.499 MiB | 78.2% → 78.3% |            29.2 GiB | 59,789 → 59,844 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|  +0.1% | +26.499 MiB | 79.0% → 79.1% |            29.5 GiB | 60,382 → 60,435 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                  |
|  +0.1% | +26.499 MiB | 79.0% → 79.1% |            29.5 GiB | 60,382 → 60,435 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                  |
|    new | +13.999 MiB |  0.0% → <0.1% |        0 B → 14 MiB |          0 → 28 | `newInvokeSpecial(Object, int, int, Object)`              | `java.lang.invoke.LambdaForm$DMH.0x0000000801126400` |
|    new | +13.999 MiB |  0.0% → <0.1% |        0 B → 14 MiB |          0 → 28 | `linkToTargetMethod(int, int, Object, Object)`            | `java.lang.invoke.LambdaForm$MH.0x0000000801126c00`  |
|  +2.8% |  +8.999 MiB |   0.8% → 0.9% |   317 MiB → 326 MiB |       634 → 652 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                                  |
|    ~0% |  +7.761 MiB | 99.4% → 99.5% |            37.1 GiB | 75,708 → 75,723 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                  |
|    ~0% |  +7.761 MiB | 99.4% → 99.5% |            37.1 GiB | 75,708 → 75,723 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|    ~0% |  +7.761 MiB | 99.4% → 99.5% |            37.1 GiB | 75,708 → 75,723 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                  |
|    ~0% |  +7.761 MiB | 99.4% → 99.5% |            37.1 GiB | 75,708 → 75,723 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                  |
|    ~0% |  +7.761 MiB | 99.4% → 99.5% |            37.1 GiB | 75,708 → 75,723 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`          |
|    ~0% |  +7.261 MiB | 99.4% → 99.5% |            37.1 GiB | 75,706 → 75,720 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                 |
|  +4.3% |  +6.999 MiB |          0.4% |   164 MiB → 171 MiB |       329 → 343 | `putMapEntries(Map, boolean)`                             | `java.util.HashMap`                                  |
|  +4.3% |  +6.999 MiB |          0.4% |   164 MiB → 171 MiB |       329 → 343 | `<init>(Map)`                                             | `java.util.HashMap`                                  |

##### Ours

|  Change |        Delta |             % |                Size |         Samples | Function                                | Location                                                                              |
| ------: | -----------: | ------------: | ------------------: | --------------: | --------------------------------------- | ------------------------------------------------------------------------------------- |
|   +2.4% | +202.999 MiB | 21.8% → 22.3% | 8.13 GiB → 8.33 GiB | 16,653 → 17,059 | `computeDirectly()`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   +2.1% | +140.499 MiB | 17.4% → 17.7% | 6.48 GiB → 6.62 GiB | 13,278 → 13,559 | `collectClusters(int[])`                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| +140.6% |  +93.499 MiB |   0.2% → 0.4% |  66.5 MiB → 160 MiB |       133 → 320 | `apply(int)`                            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011258d8`                |
|   +3.7% |  +62.499 MiB |   4.4% → 4.6% | 1.65 GiB → 1.71 GiB |   3,375 → 3,500 | `findNearestCentroid()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +41.6% |  +28.499 MiB |   0.2% → 0.3% |   68.5 MiB → 97 MiB |       137 → 194 | `vectorSum()`                           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  +41.6% |  +28.499 MiB |   0.2% → 0.3% |   68.5 MiB → 97 MiB |       137 → 194 | `computeDirectly()`                     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  +12.8% |  +26.999 MiB |          0.6% |   211 MiB → 238 MiB |       422 → 476 | `computeClusterAverages()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|  +12.8% |  +26.999 MiB |          0.6% |   211 MiB → 238 MiB |       422 → 476 | `computeDirectly()`                     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|  +12.4% |  +23.999 MiB |   0.5% → 0.6% |   193 MiB → 217 MiB |       387 → 435 | `average(List)`                         | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|  +17.8% |  +17.499 MiB |          0.3% |  98.5 MiB → 116 MiB |       197 → 232 | `lambda$collectClusters$0(Double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +17.8% |  +17.499 MiB |          0.3% |  98.5 MiB → 116 MiB |       197 → 232 | `apply(Object)`                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000000801186b38` |
|  +14.0% |  +12.499 MiB |   0.2% → 0.3% |  89.5 MiB → 102 MiB |       179 → 204 | `add(double[], double[])`               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  +14.0% |  +12.499 MiB |   0.2% → 0.3% |  89.5 MiB → 102 MiB |       179 → 204 | `combineResults(double[], double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  +14.0% |  +12.499 MiB |   0.2% → 0.3% |  89.5 MiB → 102 MiB |       179 → 204 | `combineResults(Object, Object)`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   +4.0% |   +7.499 MiB |          0.5% |   185 MiB → 193 MiB |       371 → 386 | `createSubtask(int, int)`               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|     ~0% |   +7.261 MiB | 99.4% → 99.5% |            37.1 GiB | 75,706 → 75,720 | `compute()`                             | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
|  +47.1% |   +3.999 MiB |         <0.1% |  8.5 MiB → 12.5 MiB |         17 → 25 | `boxed(double[])`                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|   +7.5% |   +1.499 MiB |          0.1% |   20 MiB → 21.5 MiB |         40 → 43 | `apply(int)`                            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801125d48`                |
|   +7.5% |   +1.499 MiB |          0.1% |   20 MiB → 21.5 MiB |         40 → 43 | `lambda$generateData$4(int)`            | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|     new |   +1.499 MiB |  0.0% → <0.1% |       0 B → 1.5 MiB |           0 → 3 | `selectBenchmarks(BenchmarkSuite, Seq)` | `org.renaissance.harness.RenaissanceSuite$`                                           |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                Size |         Samples | Function                                         | Location                                                               |
| ------: | -----------: | ------------: | ------------------: | --------------: | ------------------------------------------------ | ---------------------------------------------------------------------- |
|   -0.8% | -235.738 MiB | 75.6% → 75.0% |   28.2 GiB → 28 GiB | 57,505 → 57,033 | `lambda$merge$6(List, List)`                     | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -0.8% | -235.738 MiB | 75.6% → 75.0% |   28.2 GiB → 28 GiB | 57,505 → 57,033 | `apply(Object, Object)`                          | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0` |
|   -0.8% | -235.738 MiB | 75.6% → 75.0% |   28.2 GiB → 28 GiB | 57,507 → 57,035 | `merge(Object, Object, BiFunction)`              | `java.util.HashMap`                                                    |
|   -0.8% | -235.738 MiB | 75.6% → 75.0% |   28.2 GiB → 28 GiB | 57,507 → 57,035 | `lambda$merge$7(Map, Object, List)`              | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -0.8% | -235.738 MiB | 75.6% → 75.0% |   28.2 GiB → 28 GiB | 57,507 → 57,035 | `accept(Object, Object)`                         | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88` |
|   -0.8% | -235.738 MiB | 75.6% → 75.0% |   28.2 GiB → 28 GiB | 57,507 → 57,035 | `forEach(BiConsumer)`                            | `java.util.HashMap`                                                    |
|   -1.1% | -227.738 MiB | 56.4% → 55.9% | 21.1 GiB → 20.9 GiB | 42,853 → 42,397 | `addAll(Collection)`                             | `java.util.ArrayList`                                                  |
| removed |  -224.35 MiB |   0.6% → 0.0% |       224 MiB → 0 B |         443 → 0 | `invokeStatic(Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x0000007001004800`                   |
| removed |  -224.35 MiB |   0.6% → 0.0% |       224 MiB → 0 B |         443 → 0 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001009800`                    |
|   -0.8% | -222.738 MiB | 76.2% → 75.7% | 28.5 GiB → 28.2 GiB | 57,983 → 57,537 | `merge(Map, Map)`                                | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -0.8% | -220.738 MiB | 76.2% → 75.7% | 28.5 GiB → 28.2 GiB | 57,973 → 57,531 | `combineResults(Map, Map)`                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -0.8% | -220.738 MiB | 76.2% → 75.7% | 28.5 GiB → 28.2 GiB | 57,973 → 57,531 | `combineResults(Object, Object)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -73.9% | -139.999 MiB |   0.5% → 0.1% |  189 MiB → 49.5 MiB |        379 → 99 | `apply(int)`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801125b10` |
|   -0.3% | -115.627 MiB | 91.0% → 90.8% |   34 GiB → 33.9 GiB | 69,295 → 69,063 | `copyOf(Object[], int)`                          | `java.util.Arrays`                                                     |
|   -1.4% | -106.238 MiB | 20.4% → 20.1% |  7.61 GiB → 7.5 GiB | 15,275 → 15,062 | `lambda$run$0(int, List, int)`                   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -1.4% | -106.238 MiB | 20.4% → 20.1% |  7.61 GiB → 7.5 GiB | 15,275 → 15,062 | `call()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68` |
|   -1.4% | -106.238 MiB | 20.4% → 20.1% |  7.61 GiB → 7.5 GiB | 15,275 → 15,062 | `exec()`                                         | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                    |
|   -1.1% |  -85.738 MiB | 20.8% → 20.6% |  7.78 GiB → 7.7 GiB | 15,634 → 15,462 | `invoke()`                                       | `java.util.concurrent.ForkJoinTask`                                    |
|   -0.4% |  -84.627 MiB | 52.5% → 52.3% | 19.6 GiB → 19.5 GiB | 39,833 → 39,663 | `grow(int)`                                      | `java.util.ArrayList`                                                  |
|  -15.6% |  -29.499 MiB |   0.5% → 0.4% |   189 MiB → 160 MiB |       379 → 320 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |

##### Standard library

|  Change |        Delta |             % |                Size |         Samples | Function                                          | Location                                             |
| ------: | -----------: | ------------: | ------------------: | --------------: | ------------------------------------------------- | ---------------------------------------------------- |
|   -0.8% | -235.738 MiB | 75.6% → 75.0% |   28.2 GiB → 28 GiB | 57,507 → 57,035 | `merge(Object, Object, BiFunction)`               | `java.util.HashMap`                                  |
|   -0.8% | -235.738 MiB | 75.6% → 75.0% |   28.2 GiB → 28 GiB | 57,507 → 57,035 | `forEach(BiConsumer)`                             | `java.util.HashMap`                                  |
|   -1.1% | -227.738 MiB | 56.4% → 55.9% | 21.1 GiB → 20.9 GiB | 42,853 → 42,397 | `addAll(Collection)`                              | `java.util.ArrayList`                                |
| removed |  -224.35 MiB |   0.6% → 0.0% |       224 MiB → 0 B |         443 → 0 | `invokeStatic(Object, Object)`                    | `java.lang.invoke.LambdaForm$DMH.0x0000007001004800` |
| removed |  -224.35 MiB |   0.6% → 0.0% |       224 MiB → 0 B |         443 → 0 | `invoke(Object, Object, Object)`                  | `java.lang.invoke.LambdaForm$MH.0x0000007001009800`  |
|   -0.3% | -115.627 MiB | 91.0% → 90.8% |   34 GiB → 33.9 GiB | 69,295 → 69,063 | `copyOf(Object[], int)`                           | `java.util.Arrays`                                   |
|   -1.4% | -106.238 MiB | 20.4% → 20.1% |  7.61 GiB → 7.5 GiB | 15,275 → 15,062 | `exec()`                                          | `java.util.concurrent.ForkJoinTask$AdaptedCallable`  |
|   -1.1% |  -85.738 MiB | 20.8% → 20.6% |  7.78 GiB → 7.7 GiB | 15,634 → 15,462 | `invoke()`                                        | `java.util.concurrent.ForkJoinTask`                  |
|   -0.4% |  -84.627 MiB | 52.5% → 52.3% | 19.6 GiB → 19.5 GiB | 39,833 → 39,663 | `grow(int)`                                       | `java.util.ArrayList`                                |
|  -14.7% |  -29.389 MiB |   0.5% → 0.4% |   200 MiB → 170 MiB |       394 → 335 | `copyInto(Sink, Spliterator)`                     | `java.util.stream.AbstractPipeline`                  |
|  -14.5% |  -28.889 MiB |   0.5% → 0.4% |   200 MiB → 171 MiB |       394 → 336 | `wrapAndCopyInto(Sink, Spliterator)`              | `java.util.stream.AbstractPipeline`                  |
|  -14.9% |  -28.889 MiB |   0.5% → 0.4% |   194 MiB → 165 MiB |       383 → 325 | `evaluateSequential(PipelineHelper, Spliterator)` | `java.util.stream.ReduceOps$ReduceOp`                |
|  -14.9% |  -28.889 MiB |   0.5% → 0.4% |   194 MiB → 165 MiB |       383 → 325 | `evaluate(TerminalOp)`                            | `java.util.stream.AbstractPipeline`                  |
|  -14.9% |  -28.889 MiB |   0.5% → 0.4% |   194 MiB → 165 MiB |       383 → 325 | `collect(Collector)`                              | `java.util.stream.ReferencePipeline`                 |
|  -14.6% |  -28.389 MiB |   0.5% → 0.4% |   194 MiB → 165 MiB |       382 → 325 | `accept(int)`                                     | `java.util.stream.IntPipeline$1$1`                   |
|  -14.6% |  -28.389 MiB |   0.5% → 0.4% |   194 MiB → 165 MiB |       382 → 325 | `forEachRemaining(IntConsumer)`                   | `java.util.stream.Streams$RangeIntSpliterator`       |
|  -14.6% |  -28.389 MiB |   0.5% → 0.4% |   194 MiB → 165 MiB |       382 → 325 | `forEachRemaining(Consumer)`                      | `java.util.Spliterator$OfInt`                        |
|  -13.5% |  -27.889 MiB |          0.5% |   207 MiB → 179 MiB |       409 → 353 | `apply(Object)`                                   | `scala.runtime.function.JProcedure1`                 |
|  -13.5% |  -27.889 MiB |          0.5% |   207 MiB → 179 MiB |       409 → 353 | `foreach(Function1)`                              | `scala.collection.immutable.List`                    |
|   -0.4% |  -25.499 MiB | 18.9% → 18.8% | 7.05 GiB → 7.02 GiB | 14,435 → 14,384 | `<init>(Collection)`                              | `java.util.ArrayList`                                |

##### Ours

| Change |        Delta |             % |                Size |         Samples | Function                                                                                                               | Location                                                               |
| -----: | -----------: | ------------: | ------------------: | --------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|  -0.8% | -235.738 MiB | 75.6% → 75.0% |   28.2 GiB → 28 GiB | 57,505 → 57,033 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -0.8% | -235.738 MiB | 75.6% → 75.0% |   28.2 GiB → 28 GiB | 57,505 → 57,033 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0` |
|  -0.8% | -235.738 MiB | 75.6% → 75.0% |   28.2 GiB → 28 GiB | 57,507 → 57,035 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -0.8% | -235.738 MiB | 75.6% → 75.0% |   28.2 GiB → 28 GiB | 57,507 → 57,035 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88` |
|  -0.8% | -222.738 MiB | 76.2% → 75.7% | 28.5 GiB → 28.2 GiB | 57,983 → 57,537 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -0.8% | -220.738 MiB | 76.2% → 75.7% | 28.5 GiB → 28.2 GiB | 57,973 → 57,531 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -0.8% | -220.738 MiB | 76.2% → 75.7% | 28.5 GiB → 28.2 GiB | 57,973 → 57,531 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| -73.9% | -139.999 MiB |   0.5% → 0.1% |  189 MiB → 49.5 MiB |        379 → 99 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801125b10` |
|  -1.4% | -106.238 MiB | 20.4% → 20.1% |  7.61 GiB → 7.5 GiB | 15,275 → 15,062 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -1.4% | -106.238 MiB | 20.4% → 20.1% |  7.61 GiB → 7.5 GiB | 15,275 → 15,062 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68` |
| -15.6% |  -29.499 MiB |   0.5% → 0.4% |   189 MiB → 160 MiB |       379 → 320 | `lambda$generateData$5(int, int, Random[], int)`                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| -14.9% |  -28.889 MiB |   0.5% → 0.4% |   194 MiB → 165 MiB |       383 → 325 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | `org.renaissance.jdk.concurrent.FjKmeans`                              |
| -13.7% |  -28.389 MiB |          0.5% |   207 MiB → 179 MiB |       409 → 352 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
| -14.6% |  -28.389 MiB |   0.5% → 0.4% |   194 MiB → 165 MiB |       382 → 325 | `generateData(int, int, int)`                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| -13.5% |  -27.889 MiB |          0.5% |   207 MiB → 179 MiB |       409 → 353 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
| -13.5% |  -27.889 MiB |          0.5% |   207 MiB → 179 MiB |       409 → 353 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000080111efe0` |
| -13.5% |  -27.889 MiB |          0.5% |   207 MiB → 179 MiB |       409 → 353 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
| -11.1% |  -24.889 MiB |   0.6% → 0.5% |   225 MiB → 200 MiB |       444 → 394 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
| -11.1% |  -24.889 MiB |   0.6% → 0.5% |   224 MiB → 199 MiB |       443 → 393 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
| -10.6% |  -23.889 MiB |   0.6% → 0.5% |   225 MiB → 201 MiB |       444 → 396 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |

# Retained heap profile diff

Retained 8.47 MiB → 6.33 MiB (-2.138 MiB, -25.3%) over 320 objects → 193 objects (27.1 KiB → 33.6 KiB per object).

| Category         | Change |      Delta |              % |                Size |   Objects |
| ---------------- | -----: | ---------: | -------------: | ------------------: | --------: |
| Standard library | -25.2% | -2.131 MiB | 99.9% → 100.0% | 8.46 MiB → 6.33 MiB | 271 → 145 |
| Ours             | -79.9% |  -7.57 KiB |   0.1% → <0.1% | 9.48 KiB → 1.91 KiB |   49 → 48 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

| Change |  Delta |            % |                Size | Objects | Function                                                       | Location                                                  |
| -----: | -----: | -----------: | ------------------: | ------: | -------------------------------------------------------------- | --------------------------------------------------------- |
|  +7.5% | +120 B |        <0.1% | 1.56 KiB → 1.68 KiB | 40 → 43 | `lambda$generateData$4(int)`                                   | `org.renaissance.jdk.concurrent.JavaKMeans`               |
|    new |  +96 B | 0.0% → <0.1% |          0 B → 96 B |   0 → 3 | `putVal(Object, Object, boolean)`                              | `java.util.concurrent.ConcurrentHashMap`                  |
|    new |  +96 B | 0.0% → <0.1% |          0 B → 96 B |   0 → 3 | `newNode(int, Object, Object, HashMap$Node)`                   | `java.util.HashMap`                                       |
|    new |  +56 B | 0.0% → <0.1% |          0 B → 56 B |   0 → 1 | `vectorSum()`                                                  | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|    new |  +56 B | 0.0% → <0.1% |          0 B → 56 B |   0 → 1 | `add(double[], double[])`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|    new |  +48 B | 0.0% → <0.1% |          0 B → 48 B |   0 → 1 | `merge(Map, Map)`                                              | `org.renaissance.jdk.concurrent.JavaKMeans`               |
|    new |  +48 B | 0.0% → <0.1% |          0 B → 48 B |   0 → 1 | `makeVarargsCollector(MethodHandle, Class)`                    | `java.lang.invoke.MethodHandleImpl`                       |
|    new |  +32 B | 0.0% → <0.1% |          0 B → 32 B |   0 → 1 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])` | `java.util.concurrent.ConcurrentHashMap`                  |

##### Standard library

| Change | Delta |            % |       Size | Objects | Function                                                       | Location                                 |
| -----: | ----: | -----------: | ---------: | ------: | -------------------------------------------------------------- | ---------------------------------------- |
|    new | +96 B | 0.0% → <0.1% | 0 B → 96 B |   0 → 3 | `putVal(Object, Object, boolean)`                              | `java.util.concurrent.ConcurrentHashMap` |
|    new | +96 B | 0.0% → <0.1% | 0 B → 96 B |   0 → 3 | `newNode(int, Object, Object, HashMap$Node)`                   | `java.util.HashMap`                      |
|    new | +48 B | 0.0% → <0.1% | 0 B → 48 B |   0 → 1 | `makeVarargsCollector(MethodHandle, Class)`                    | `java.lang.invoke.MethodHandleImpl`      |
|    new | +32 B | 0.0% → <0.1% | 0 B → 32 B |   0 → 1 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])` | `java.util.concurrent.ConcurrentHashMap` |

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

|  Change |        Delta |             % |                Size |  Objects | Function                                     | Location                                                   |
| ------: | -----------: | ------------: | ------------------: | -------: | -------------------------------------------- | ---------------------------------------------------------- |
|  -30.5% |   -1.875 MiB | 72.5% → 67.4% | 6.14 MiB → 4.26 MiB | 127 → 37 | `copyOf(Object[], int)`                      | `java.util.Arrays`                                         |
| removed | -260.726 KiB |   3.0% → 0.0% |       261 KiB → 0 B |    2 → 0 | `initCEN(int, ZipCoder)`                     | `java.util.zip.ZipFile$Source`                             |
| removed |   -7.687 KiB |   0.1% → 0.0% |      7.69 KiB → 0 B |    4 → 0 | `findNearestCentroid()`                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -25.6% |       -816 B |         <0.1% | 3.12 KiB → 2.32 KiB | 133 → 99 | `valueOf(double)`                            | `java.lang.Double`                                         |
| removed |       -240 B |  <0.1% → 0.0% |         240 B → 0 B |    1 → 0 | `load(DataInputStream)`                      | `sun.util.calendar.ZoneInfoFile`                           |
| removed |       -112 B |  <0.1% → 0.0% |         112 B → 0 B |    2 → 0 | `createSubtask(int, int)`                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |        -56 B |  <0.1% → 0.0% |          56 B → 0 B |    1 → 0 | `grow(int)`                                  | `java.util.ArrayList`                                      |
| removed |        -48 B |  <0.1% → 0.0% |          48 B → 0 B |    1 → 0 | `collectClusters(int[])`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |        -40 B |  <0.1% → 0.0% |          40 B → 0 B |    2 → 0 | `read(InputStream, String)`                  | `java.util.jar.Manifest`                                   |
| removed |        -40 B |  <0.1% → 0.0% |          40 B → 0 B |    1 → 0 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.LinkedHashMap`                                  |
| removed |        -40 B |  <0.1% → 0.0% |          40 B → 0 B |    1 → 0 | `makeImpl(Class, Class[], boolean)`          | `java.lang.invoke.MethodType`                              |
| removed |        -24 B |  <0.1% → 0.0% |          24 B → 0 B |    1 → 0 | `parseName(byte[], int)`                     | `java.util.jar.Manifest`                                   |
| removed |        -16 B |  <0.1% → 0.0% |          16 B → 0 B |    1 → 0 | `entrySet()`                                 | `java.util.HashMap`                                        |

##### Standard library

|  Change |        Delta |             % |                Size |  Objects | Function                                     | Location                         |
| ------: | -----------: | ------------: | ------------------: | -------: | -------------------------------------------- | -------------------------------- |
|  -30.5% |   -1.875 MiB | 72.5% → 67.4% | 6.14 MiB → 4.26 MiB | 127 → 37 | `copyOf(Object[], int)`                      | `java.util.Arrays`               |
| removed | -260.726 KiB |   3.0% → 0.0% |       261 KiB → 0 B |    2 → 0 | `initCEN(int, ZipCoder)`                     | `java.util.zip.ZipFile$Source`   |
|  -25.6% |       -816 B |         <0.1% | 3.12 KiB → 2.32 KiB | 133 → 99 | `valueOf(double)`                            | `java.lang.Double`               |
| removed |       -240 B |  <0.1% → 0.0% |         240 B → 0 B |    1 → 0 | `load(DataInputStream)`                      | `sun.util.calendar.ZoneInfoFile` |
| removed |        -56 B |  <0.1% → 0.0% |          56 B → 0 B |    1 → 0 | `grow(int)`                                  | `java.util.ArrayList`            |
| removed |        -40 B |  <0.1% → 0.0% |          40 B → 0 B |    2 → 0 | `read(InputStream, String)`                  | `java.util.jar.Manifest`         |
| removed |        -40 B |  <0.1% → 0.0% |          40 B → 0 B |    1 → 0 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.LinkedHashMap`        |
| removed |        -40 B |  <0.1% → 0.0% |          40 B → 0 B |    1 → 0 | `makeImpl(Class, Class[], boolean)`          | `java.lang.invoke.MethodType`    |
| removed |        -24 B |  <0.1% → 0.0% |          24 B → 0 B |    1 → 0 | `parseName(byte[], int)`                     | `java.util.jar.Manifest`         |
| removed |        -16 B |  <0.1% → 0.0% |          16 B → 0 B |    1 → 0 | `entrySet()`                                 | `java.util.HashMap`              |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

|  Change |        Delta |             % |                Size | Objects | Function                                                  | Location                                                               |
| ------: | -----------: | ------------: | ------------------: | ------: | --------------------------------------------------------- | ---------------------------------------------------------------------- |
|     new |   +2.064 MiB |  0.0% → 32.6% |      0 B → 2.06 MiB | 0 → 148 | `invokeStatic(Object, Object)`                            | `java.lang.invoke.LambdaForm$DMH.0x0000000801004800`                   |
|     new |   +2.064 MiB |  0.0% → 32.6% |      0 B → 2.06 MiB | 0 → 148 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000000801009800`                    |
|  +18.3% | +504.203 KiB | 31.9% → 50.4% |  2.7 MiB → 3.19 MiB | 18 → 14 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                                    |
|  +18.3% |  +504.14 KiB | 31.9% → 50.4% |  2.7 MiB → 3.19 MiB | 17 → 12 | `lambda$run$0(int, List, int)`                            | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +18.3% |  +504.14 KiB | 31.9% → 50.4% |  2.7 MiB → 3.19 MiB | 17 → 12 | `call()`                                                  | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68` |
|  +18.3% |  +504.14 KiB | 31.9% → 50.4% |  2.7 MiB → 3.19 MiB | 17 → 12 | `exec()`                                                  | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                    |
|  +16.8% | +207.539 KiB | 14.2% → 22.2% |  1.2 MiB → 1.41 MiB | 98 → 29 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                                    |
|  +16.8% | +207.539 KiB | 14.2% → 22.2% |  1.2 MiB → 1.41 MiB | 98 → 29 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                                    |
|  +15.2% | +186.242 KiB | 14.1% → 21.8% |  1.2 MiB → 1.38 MiB | 97 → 27 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|  +16.7% | +112.359 KiB |  7.8% → 12.1% |   674 KiB → 786 KiB |  21 → 9 | `<init>(Collection)`                                      | `java.util.ArrayList`                                                  |
| +148.2% |   +56.89 KiB |   0.4% → 1.5% | 38.4 KiB → 95.3 KiB |  10 → 9 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                                    |
|     new |       +128 B |  0.0% → <0.1% |         0 B → 128 B |   0 → 4 | `putVal(Object, Object, boolean)`                         | `java.util.concurrent.ConcurrentHashMap`                               |
|   +7.5% |       +120 B |         <0.1% | 1.56 KiB → 1.68 KiB | 40 → 43 | `lambda$generateData$4(int)`                              | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   +7.5% |       +120 B |         <0.1% | 1.56 KiB → 1.68 KiB | 40 → 43 | `apply(int)`                                              | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801125d48` |
|   +7.5% |       +120 B |         <0.1% | 1.56 KiB → 1.68 KiB | 40 → 43 | `<init>(long, IntFunction)`                               | `java.util.stream.Nodes$ArrayNode`                                     |
|   +7.5% |       +120 B |         <0.1% | 1.56 KiB → 1.68 KiB | 40 → 43 | `<init>(long, IntFunction)`                               | `java.util.stream.Nodes$FixedNodeBuilder`                              |
|   +7.5% |       +120 B |         <0.1% | 1.56 KiB → 1.68 KiB | 40 → 43 | `builder(long, IntFunction)`                              | `java.util.stream.Nodes`                                               |
|   +7.5% |       +120 B |         <0.1% | 1.56 KiB → 1.68 KiB | 40 → 43 | `makeNodeBuilder(long, IntFunction)`                      | `java.util.stream.ReferencePipeline`                                   |
|     new |        +96 B |  0.0% → <0.1% |          0 B → 96 B |   0 → 3 | `putIfAbsent(Object, Object)`                             | `java.util.concurrent.ConcurrentHashMap`                               |
|     new |        +96 B |  0.0% → <0.1% |          0 B → 96 B |   0 → 3 | `getClassLoadingLock(String)`                             | `java.lang.ClassLoader`                                                |

##### Standard library

|  Change |        Delta |             % |                Size | Objects | Function                                                  | Location                                             |
| ------: | -----------: | ------------: | ------------------: | ------: | --------------------------------------------------------- | ---------------------------------------------------- |
|     new |   +2.064 MiB |  0.0% → 32.6% |      0 B → 2.06 MiB | 0 → 148 | `invokeStatic(Object, Object)`                            | `java.lang.invoke.LambdaForm$DMH.0x0000000801004800` |
|     new |   +2.064 MiB |  0.0% → 32.6% |      0 B → 2.06 MiB | 0 → 148 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000000801009800`  |
|  +18.3% | +504.203 KiB | 31.9% → 50.4% |  2.7 MiB → 3.19 MiB | 18 → 14 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                  |
|  +18.3% |  +504.14 KiB | 31.9% → 50.4% |  2.7 MiB → 3.19 MiB | 17 → 12 | `exec()`                                                  | `java.util.concurrent.ForkJoinTask$AdaptedCallable`  |
|  +16.8% | +207.539 KiB | 14.2% → 22.2% |  1.2 MiB → 1.41 MiB | 98 → 29 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                  |
|  +16.8% | +207.539 KiB | 14.2% → 22.2% |  1.2 MiB → 1.41 MiB | 98 → 29 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                  |
|  +15.2% | +186.242 KiB | 14.1% → 21.8% |  1.2 MiB → 1.38 MiB | 97 → 27 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|  +16.7% | +112.359 KiB |  7.8% → 12.1% |   674 KiB → 786 KiB |  21 → 9 | `<init>(Collection)`                                      | `java.util.ArrayList`                                |
| +148.2% |   +56.89 KiB |   0.4% → 1.5% | 38.4 KiB → 95.3 KiB |  10 → 9 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                  |
|     new |       +128 B |  0.0% → <0.1% |         0 B → 128 B |   0 → 4 | `putVal(Object, Object, boolean)`                         | `java.util.concurrent.ConcurrentHashMap`             |
|   +7.5% |       +120 B |         <0.1% | 1.56 KiB → 1.68 KiB | 40 → 43 | `<init>(long, IntFunction)`                               | `java.util.stream.Nodes$ArrayNode`                   |
|   +7.5% |       +120 B |         <0.1% | 1.56 KiB → 1.68 KiB | 40 → 43 | `<init>(long, IntFunction)`                               | `java.util.stream.Nodes$FixedNodeBuilder`            |
|   +7.5% |       +120 B |         <0.1% | 1.56 KiB → 1.68 KiB | 40 → 43 | `builder(long, IntFunction)`                              | `java.util.stream.Nodes`                             |
|   +7.5% |       +120 B |         <0.1% | 1.56 KiB → 1.68 KiB | 40 → 43 | `makeNodeBuilder(long, IntFunction)`                      | `java.util.stream.ReferencePipeline`                 |
|     new |        +96 B |  0.0% → <0.1% |          0 B → 96 B |   0 → 3 | `putIfAbsent(Object, Object)`                             | `java.util.concurrent.ConcurrentHashMap`             |
|     new |        +96 B |  0.0% → <0.1% |          0 B → 96 B |   0 → 3 | `getClassLoadingLock(String)`                             | `java.lang.ClassLoader`                              |
|     new |        +96 B |  0.0% → <0.1% |          0 B → 96 B |   0 → 3 | `newNode(int, Object, Object, HashMap$Node)`              | `java.util.HashMap`                                  |
|     new |        +64 B |  0.0% → <0.1% |          0 B → 64 B |   0 → 2 | `loadClassOrNull(String, boolean)`                        | `jdk.internal.loader.BuiltinClassLoader`             |
|     new |        +64 B |  0.0% → <0.1% |          0 B → 64 B |   0 → 2 | `loadClass(String, boolean)`                              | `jdk.internal.loader.BuiltinClassLoader`             |
|     new |        +64 B |  0.0% → <0.1% |          0 B → 64 B |   0 → 2 | `loadClass(String, boolean)`                              | `jdk.internal.loader.ClassLoaders$AppClassLoader`    |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

|  Change |      Delta |             % |                Size |  Objects | Function                                             | Location                                                               |
| ------: | ---------: | ------------: | ------------------: | -------: | ---------------------------------------------------- | ---------------------------------------------------------------------- |
| removed |  -2.32 MiB |  27.4% → 0.0% |      2.32 MiB → 0 B |  181 → 0 | `invokeStatic(Object, Object)`                       | `java.lang.invoke.LambdaForm$DMH.0x0000007001004800`                   |
| removed |  -2.32 MiB |  27.4% → 0.0% |      2.32 MiB → 0 B |  181 → 0 | `invoke(Object, Object, Object)`                     | `java.lang.invoke.LambdaForm$MH.0x0000007001009800`                    |
|  -36.1% | -1.978 MiB | 64.6% → 55.2% |  5.47 MiB → 3.5 MiB |  90 → 25 | `addAll(Collection)`                                 | `java.util.ArrayList`                                                  |
|  -30.6% | -1.883 MiB | 72.6% → 67.4% | 6.15 MiB → 4.26 MiB | 137 → 41 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  -30.6% | -1.883 MiB | 72.6% → 67.4% | 6.15 MiB → 4.26 MiB | 137 → 41 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                                   |
|  -30.6% | -1.883 MiB | 72.6% → 67.4% | 6.15 MiB → 4.26 MiB | 137 → 41 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                                    |
|  -30.6% | -1.883 MiB | 72.6% → 67.4% | 6.15 MiB → 4.26 MiB | 137 → 41 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|  -30.6% | -1.883 MiB | 72.6% → 67.4% | 6.15 MiB → 4.26 MiB | 137 → 41 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                                    |
|  -30.6% | -1.883 MiB | 72.6% → 67.4% | 6.15 MiB → 4.26 MiB | 137 → 41 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                                    |
|  -30.6% | -1.883 MiB | 72.6% → 67.4% | 6.15 MiB → 4.26 MiB | 137 → 41 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                            |
|  -22.9% | -1.875 MiB | 96.8% → 99.9% |  8.2 MiB → 6.32 MiB | 128 → 38 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                                     |
|  -30.5% | -1.868 MiB | 72.4% → 67.3% | 6.13 MiB → 4.26 MiB | 111 → 34 | `lambda$merge$6(List, List)`                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -30.5% | -1.868 MiB | 72.4% → 67.3% | 6.13 MiB → 4.26 MiB | 111 → 34 | `apply(Object, Object)`                              | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0` |
|  -30.5% | -1.868 MiB | 72.4% → 67.3% | 6.13 MiB → 4.26 MiB | 111 → 34 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                                                    |
|  -30.5% | -1.868 MiB | 72.4% → 67.3% | 6.13 MiB → 4.26 MiB | 111 → 34 | `lambda$merge$7(Map, Object, List)`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -30.5% | -1.868 MiB | 72.4% → 67.3% | 6.13 MiB → 4.26 MiB | 111 → 34 | `accept(Object, Object)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88` |
|  -30.5% | -1.868 MiB | 72.4% → 67.3% | 6.13 MiB → 4.26 MiB | 111 → 34 | `forEach(BiConsumer)`                                | `java.util.HashMap`                                                    |
|  -30.5% | -1.868 MiB | 72.4% → 67.4% | 6.13 MiB → 4.26 MiB | 112 → 35 | `merge(Map, Map)`                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -30.5% | -1.868 MiB | 72.4% → 67.4% | 6.13 MiB → 4.26 MiB | 112 → 35 | `combineResults(Map, Map)`                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -30.5% | -1.868 MiB | 72.4% → 67.4% | 6.13 MiB → 4.26 MiB | 112 → 35 | `combineResults(Object, Object)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |

##### Standard library

|  Change |        Delta |             % |                Size |   Objects | Function                                                                    | Location                                             |
| ------: | -----------: | ------------: | ------------------: | --------: | --------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |    -2.32 MiB |  27.4% → 0.0% |      2.32 MiB → 0 B |   181 → 0 | `invokeStatic(Object, Object)`                                              | `java.lang.invoke.LambdaForm$DMH.0x0000007001004800` |
| removed |    -2.32 MiB |  27.4% → 0.0% |      2.32 MiB → 0 B |   181 → 0 | `invoke(Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x0000007001009800`  |
|  -36.1% |   -1.978 MiB | 64.6% → 55.2% |  5.47 MiB → 3.5 MiB |   90 → 25 | `addAll(Collection)`                                                        | `java.util.ArrayList`                                |
|  -30.6% |   -1.883 MiB | 72.6% → 67.4% | 6.15 MiB → 4.26 MiB |  137 → 41 | `exec()`                                                                    | `java.util.concurrent.RecursiveTask`                 |
|  -30.6% |   -1.883 MiB | 72.6% → 67.4% | 6.15 MiB → 4.26 MiB |  137 → 41 | `doExec()`                                                                  | `java.util.concurrent.ForkJoinTask`                  |
|  -30.6% |   -1.883 MiB | 72.6% → 67.4% | 6.15 MiB → 4.26 MiB |  137 → 41 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`                        | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|  -30.6% |   -1.883 MiB | 72.6% → 67.4% | 6.15 MiB → 4.26 MiB |  137 → 41 | `scan(ForkJoinPool$WorkQueue, int, int)`                                    | `java.util.concurrent.ForkJoinPool`                  |
|  -30.6% |   -1.883 MiB | 72.6% → 67.4% | 6.15 MiB → 4.26 MiB |  137 → 41 | `runWorker(ForkJoinPool$WorkQueue)`                                         | `java.util.concurrent.ForkJoinPool`                  |
|  -30.6% |   -1.883 MiB | 72.6% → 67.4% | 6.15 MiB → 4.26 MiB |  137 → 41 | `run()`                                                                     | `java.util.concurrent.ForkJoinWorkerThread`          |
|  -22.9% |   -1.875 MiB | 96.8% → 99.9% |  8.2 MiB → 6.32 MiB |  128 → 38 | `copyOf(Object[], int)`                                                     | `java.util.Arrays`                                   |
|  -30.5% |   -1.868 MiB | 72.4% → 67.3% | 6.13 MiB → 4.26 MiB |  111 → 34 | `merge(Object, Object, BiFunction)`                                         | `java.util.HashMap`                                  |
|  -30.5% |   -1.868 MiB | 72.4% → 67.3% | 6.13 MiB → 4.26 MiB |  111 → 34 | `forEach(BiConsumer)`                                                       | `java.util.HashMap`                                  |
|  -28.9% |   -1.817 MiB | 74.3% → 70.7% | 6.29 MiB → 4.48 MiB |   77 → 18 | `grow(int)`                                                                 | `java.util.ArrayList`                                |
|  -11.0% | -261.367 KiB | 27.4% → 32.6% | 2.32 MiB → 2.06 MiB | 181 → 148 | `invokeExact_MT(Object, Object, Object, Object)`                            | `java.lang.invoke.Invokers$Holder`                   |
|  -11.0% | -261.367 KiB | 27.4% → 32.6% | 2.32 MiB → 2.06 MiB | 181 → 148 | `invokeImpl(Object, Object[])`                                              | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  -11.0% | -261.367 KiB | 27.4% → 32.6% | 2.32 MiB → 2.06 MiB | 181 → 148 | `invoke(Object, Object[])`                                                  | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  -11.0% | -261.367 KiB | 27.4% → 32.6% | 2.32 MiB → 2.06 MiB | 181 → 148 | `invoke(Object, Object[])`                                                  | `java.lang.reflect.Method`                           |
| removed | -260.789 KiB |   3.0% → 0.0% |       261 KiB → 0 B |     5 → 0 | `run()`                                                                     | `java.net.URLClassLoader$1`                          |
| removed | -260.789 KiB |   3.0% → 0.0% |       261 KiB → 0 B |     5 → 0 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` | `java.security.AccessController`                     |
| removed | -260.789 KiB |   3.0% → 0.0% |       261 KiB → 0 B |     5 → 0 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)`             | `java.security.AccessController`                     |

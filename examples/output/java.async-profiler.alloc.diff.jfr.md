# Allocated heap profile diff

Allocated 37 GiB → 36.9 GiB (-55.612 MiB, -0.1%) over 75,363 samples → 75,256 samples (514 KiB per sample).

| Category         | Change |       Delta |             % |                Size |         Samples |
| ---------------- | -----: | ----------: | ------------: | ------------------: | --------------: |
| Standard library |  +0.1% | +41.387 MiB | 92.8% → 93.1% |            34.3 GiB | 69,924 → 70,011 |
| Ours             |  -3.6% | -96.999 MiB |   7.2% → 6.9% | 2.66 GiB → 2.56 GiB |   5,439 → 5,245 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|  Change |          Delta |             % |                Size |         Samples | Function                                  | Location                                                   |
| ------: | -------------: | ------------: | ------------------: | --------------: | ----------------------------------------- | ---------------------------------------------------------- |
|   +0.1% |    +42.387 MiB | 90.6% → 90.8% |            33.5 GiB | 68,226 → 68,315 | `copyOf(Object[], int)`                   | `java.util.Arrays`                                         |
|  +20.4% |    +27.999 MiB |          0.4% |   137 MiB → 165 MiB |       274 → 330 | `createSubtask(int, int)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +5.1% |    +11.999 MiB |          0.6% |   233 MiB → 245 MiB |       467 → 491 | `grow(int)`                               | `java.util.ArrayList`                                      |
| +260.0% |     +6.499 MiB |         <0.1% |     2.5 MiB → 9 MiB |          5 → 18 | `computeClusterAverages()`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|   +8.9% |     +5.499 MiB |          0.2% |   61.5 MiB → 67 MiB |       123 → 134 | `valueOf(double)`                         | `java.lang.Double`                                         |
|  +28.3% |     +3.499 MiB |         <0.1% | 12.4 MiB → 15.9 MiB |         19 → 26 | `copyOf(Object[], int, Class)`            | `java.util.Arrays`                                         |
|  +63.6% |     +3.499 MiB |         <0.1% |     5.5 MiB → 9 MiB |         11 → 18 | `createSubtask(int, int)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  +28.6% |     +2.999 MiB |         <0.1% | 10.5 MiB → 13.5 MiB |         21 → 27 | `copyOf(byte[], int)`                     | `java.util.Arrays`                                         |
|  +75.0% |     +2.999 MiB |         <0.1% |       4 MiB → 7 MiB |          8 → 14 | `<init>(InputStream, Inflater, int)`      | `java.util.zip.InflaterInputStream`                        |
|  +16.0% |     +1.999 MiB |         <0.1% | 12.5 MiB → 14.5 MiB |         25 → 29 | `entrySet()`                              | `java.util.HashMap`                                        |
| +150.0% |     +1.499 MiB |         <0.1% |  1024 KiB → 2.5 MiB |           2 → 5 | `mapToObj(DoubleFunction, int)`           | `java.util.stream.DoublePipeline`                          |
|   +6.1% |     +1.499 MiB |          0.1% |   24.5 MiB → 26 MiB |         49 → 52 | `mapToObj(IntFunction, int)`              | `java.util.stream.IntPipeline`                             |
|   +5.8% |     +1.499 MiB |          0.1% |   26 MiB → 27.5 MiB |         52 → 55 | `intStream(Spliterator$OfInt, boolean)`   | `java.util.stream.StreamSupport`                           |
|   +9.4% |     +1.499 MiB |         <0.1% |   16 MiB → 17.5 MiB |         32 → 35 | `lambda$generateData$4(int)`              | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|     new | +1,023.998 KiB |  0.0% → <0.1% |      0 B → 1024 KiB |           0 → 2 | `<init>(Collection)`                      | `java.util.ArrayList`                                      |
| +200.0% | +1,023.998 KiB |         <0.1% |   512 KiB → 1.5 MiB |           1 → 3 | `lambda$boxed$0(int)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| +200.0% | +1,023.998 KiB |         <0.1% |   512 KiB → 1.5 MiB |           1 → 3 | `fillInStackTrace(int)`                   | `java.lang.Throwable`                                      |
|     new | +1,023.998 KiB |  0.0% → <0.1% |      0 B → 1024 KiB |           0 → 2 | `allocateUninitializedArray0(Class, int)` | `jdk.internal.misc.Unsafe`                                 |
|   +0.5% |   +511.999 KiB |          0.3% |             109 MiB |       218 → 219 | `lambda$collectClusters$0(Double[])`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +0.3% |   +511.999 KiB |          0.5% |   175 MiB → 176 MiB |       351 → 352 | `createSubtask(int, int)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### Standard library

|  Change |          Delta |             % |                Size |         Samples | Function                                  | Location                               |
| ------: | -------------: | ------------: | ------------------: | --------------: | ----------------------------------------- | -------------------------------------- |
|   +0.1% |    +42.387 MiB | 90.6% → 90.8% |            33.5 GiB | 68,226 → 68,315 | `copyOf(Object[], int)`                   | `java.util.Arrays`                     |
|   +5.1% |    +11.999 MiB |          0.6% |   233 MiB → 245 MiB |       467 → 491 | `grow(int)`                               | `java.util.ArrayList`                  |
|   +8.9% |     +5.499 MiB |          0.2% |   61.5 MiB → 67 MiB |       123 → 134 | `valueOf(double)`                         | `java.lang.Double`                     |
|  +28.3% |     +3.499 MiB |         <0.1% | 12.4 MiB → 15.9 MiB |         19 → 26 | `copyOf(Object[], int, Class)`            | `java.util.Arrays`                     |
|  +28.6% |     +2.999 MiB |         <0.1% | 10.5 MiB → 13.5 MiB |         21 → 27 | `copyOf(byte[], int)`                     | `java.util.Arrays`                     |
|  +75.0% |     +2.999 MiB |         <0.1% |       4 MiB → 7 MiB |          8 → 14 | `<init>(InputStream, Inflater, int)`      | `java.util.zip.InflaterInputStream`    |
|  +16.0% |     +1.999 MiB |         <0.1% | 12.5 MiB → 14.5 MiB |         25 → 29 | `entrySet()`                              | `java.util.HashMap`                    |
| +150.0% |     +1.499 MiB |         <0.1% |  1024 KiB → 2.5 MiB |           2 → 5 | `mapToObj(DoubleFunction, int)`           | `java.util.stream.DoublePipeline`      |
|   +6.1% |     +1.499 MiB |          0.1% |   24.5 MiB → 26 MiB |         49 → 52 | `mapToObj(IntFunction, int)`              | `java.util.stream.IntPipeline`         |
|   +5.8% |     +1.499 MiB |          0.1% |   26 MiB → 27.5 MiB |         52 → 55 | `intStream(Spliterator$OfInt, boolean)`   | `java.util.stream.StreamSupport`       |
|     new | +1,023.998 KiB |  0.0% → <0.1% |      0 B → 1024 KiB |           0 → 2 | `<init>(Collection)`                      | `java.util.ArrayList`                  |
| +200.0% | +1,023.998 KiB |         <0.1% |   512 KiB → 1.5 MiB |           1 → 3 | `fillInStackTrace(int)`                   | `java.lang.Throwable`                  |
|     new | +1,023.998 KiB |  0.0% → <0.1% |      0 B → 1024 KiB |           0 → 2 | `allocateUninitializedArray0(Class, int)` | `jdk.internal.misc.Unsafe`             |
|  +12.5% |   +511.999 KiB |         <0.1% |     4 MiB → 4.5 MiB |           8 → 9 | `allocateInstance(Class)`                 | `jdk.internal.misc.Unsafe`             |
|     new |   +511.999 KiB |  0.0% → <0.1% |       0 B → 512 KiB |           0 → 1 | `findClass(String)`                       | `java.net.URLClassLoader`              |
|     new |   +511.999 KiB |  0.0% → <0.1% |       0 B → 512 KiB |           0 → 1 | `parseName(byte[], int)`                  | `java.util.jar.Manifest`               |
|     new |   +511.999 KiB |  0.0% → <0.1% |       0 B → 512 KiB |           0 → 1 | `setLocal(int, int)`                      | `jdk.internal.org.objectweb.asm.Frame` |
|     new |   +511.999 KiB |  0.0% → <0.1% |       0 B → 512 KiB |           0 → 1 | `load(DataInputStream)`                   | `java.time.zone.TzdbZoneRulesProvider` |
|     new |   +511.999 KiB |  0.0% → <0.1% |       0 B → 512 KiB |           0 → 1 | `getDeclaredConstructors0(boolean)`       | `java.lang.Class`                      |
|     new |   +511.999 KiB |  0.0% → <0.1% |       0 B → 512 KiB |           0 → 1 | `clone()`                                 | `java.lang.Object`                     |

##### Ours

|  Change |          Delta |     % |              Size |   Samples | Function                             | Location                                                   |
| ------: | -------------: | ----: | ----------------: | --------: | ------------------------------------ | ---------------------------------------------------------- |
|  +20.4% |    +27.999 MiB |  0.4% | 137 MiB → 165 MiB | 274 → 330 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +260.0% |     +6.499 MiB | <0.1% |   2.5 MiB → 9 MiB |    5 → 18 | `computeClusterAverages()`           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  +63.6% |     +3.499 MiB | <0.1% |   5.5 MiB → 9 MiB |   11 → 18 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|   +9.4% |     +1.499 MiB | <0.1% | 16 MiB → 17.5 MiB |   32 → 35 | `lambda$generateData$4(int)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| +200.0% | +1,023.998 KiB | <0.1% | 512 KiB → 1.5 MiB |     1 → 3 | `lambda$boxed$0(int)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|   +0.5% |   +511.999 KiB |  0.3% |           109 MiB | 218 → 219 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +0.3% |   +511.999 KiB |  0.5% | 175 MiB → 176 MiB | 351 → 352 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |          Delta |            % |                Size |       Samples | Function                                      | Location                                                   |
| ------: | -------------: | -----------: | ------------------: | ------------: | --------------------------------------------- | ---------------------------------------------------------- |
|   -4.9% |    -88.499 MiB |  4.7% → 4.5% | 1.75 GiB → 1.67 GiB | 3,593 → 3,416 | `findNearestCentroid()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -6.3% |    -17.999 MiB |  0.8% → 0.7% |   288 MiB → 270 MiB |     576 → 540 | `newNode(int, Object, Object, HashMap$Node)`  | `java.util.HashMap`                                        |
|  -15.3% |    -17.499 MiB |         0.3% |    114 MiB → 97 MiB |     229 → 194 | `collectClusters(int[])`                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -17.7% |    -15.499 MiB |         0.2% |   87.5 MiB → 72 MiB |     175 → 144 | `vectorSum()`                                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -10.1% |     -8.999 MiB |         0.2% |     89 MiB → 80 MiB |     178 → 160 | `add(double[], double[])`                     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -5.5% |     -5.999 MiB |         0.3% |   109 MiB → 103 MiB |     218 → 206 | `resize()`                                    | `java.util.HashMap`                                        |
|  -50.0% |     -5.499 MiB |        <0.1% |    11 MiB → 5.5 MiB |       22 → 11 | `allocateInstance(Object)`                    | `java.lang.invoke.DirectMethodHandle`                      |
|   -5.3% |     -3.999 MiB |         0.2% | 75.5 MiB → 71.5 MiB |     151 → 143 | `merge(Map, Map)`                             | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -28.6% |     -3.999 MiB |        <0.1% |     14 MiB → 10 MiB |       28 → 20 | `builder(long, IntFunction)`                  | `java.util.stream.Nodes`                                   |
|   -2.8% |     -2.999 MiB |         0.3% |   107 MiB → 104 MiB |     215 → 209 | `lambda$merge$6(List, List)`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -75.0% |     -1.499 MiB |        <0.1% |     2 MiB → 512 KiB |         4 → 1 | `copyOfRangeByte(byte[], int, int)`           | `java.util.Arrays`                                         |
|  -20.0% | -1,023.998 KiB |        <0.1% |       5 MiB → 4 MiB |        10 → 8 | `awaitDone(int, long)`                        | `java.util.concurrent.ForkJoinTask`                        |
|  -66.7% | -1,023.998 KiB |        <0.1% |   1.5 MiB → 512 KiB |         3 → 1 | `opWrapSink(int, Sink)`                       | `java.util.stream.DoublePipeline$1`                        |
| removed | -1,023.998 KiB | <0.1% → 0.0% |      1024 KiB → 0 B |         2 → 0 | `<init>(int)`                                 | `java.lang.AbstractStringBuilder`                          |
|  -50.0% |   -511.999 KiB |        <0.1% |  1024 KiB → 512 KiB |         2 → 1 | `doubleStream(Spliterator$OfDouble, boolean)` | `java.util.stream.StreamSupport`                           |
|  -50.0% |   -511.999 KiB |        <0.1% |  1024 KiB → 512 KiB |         2 → 1 | `spliterator(double[], int, int, int)`        | `java.util.Spliterators`                                   |
| removed |   -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |         1 → 0 | `div(double[], int)`                          | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| removed |   -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |         1 → 0 | `<clinit>()`                                  | `sun.security.util.SecurityProviderConstants`              |
| removed |   -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |         1 → 0 | `<clinit>()`                                  | `sun.security.util.KnownOIDs`                              |
| removed |   -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |         1 → 0 | `putVal(Object, Object, boolean)`             | `java.util.concurrent.ConcurrentHashMap`                   |

##### Standard library

|  Change |          Delta |            % |               Size |   Samples | Function                                              | Location                                      |
| ------: | -------------: | -----------: | -----------------: | --------: | ----------------------------------------------------- | --------------------------------------------- |
|   -6.3% |    -17.999 MiB |  0.8% → 0.7% |  288 MiB → 270 MiB | 576 → 540 | `newNode(int, Object, Object, HashMap$Node)`          | `java.util.HashMap`                           |
|   -5.5% |     -5.999 MiB |         0.3% |  109 MiB → 103 MiB | 218 → 206 | `resize()`                                            | `java.util.HashMap`                           |
|  -50.0% |     -5.499 MiB |        <0.1% |   11 MiB → 5.5 MiB |   22 → 11 | `allocateInstance(Object)`                            | `java.lang.invoke.DirectMethodHandle`         |
|  -28.6% |     -3.999 MiB |        <0.1% |    14 MiB → 10 MiB |   28 → 20 | `builder(long, IntFunction)`                          | `java.util.stream.Nodes`                      |
|  -75.0% |     -1.499 MiB |        <0.1% |    2 MiB → 512 KiB |     4 → 1 | `copyOfRangeByte(byte[], int, int)`                   | `java.util.Arrays`                            |
|  -20.0% | -1,023.998 KiB |        <0.1% |      5 MiB → 4 MiB |    10 → 8 | `awaitDone(int, long)`                                | `java.util.concurrent.ForkJoinTask`           |
|  -66.7% | -1,023.998 KiB |        <0.1% |  1.5 MiB → 512 KiB |     3 → 1 | `opWrapSink(int, Sink)`                               | `java.util.stream.DoublePipeline$1`           |
| removed | -1,023.998 KiB | <0.1% → 0.0% |     1024 KiB → 0 B |     2 → 0 | `<init>(int)`                                         | `java.lang.AbstractStringBuilder`             |
|  -50.0% |   -511.999 KiB |        <0.1% | 1024 KiB → 512 KiB |     2 → 1 | `doubleStream(Spliterator$OfDouble, boolean)`         | `java.util.stream.StreamSupport`              |
|  -50.0% |   -511.999 KiB |        <0.1% | 1024 KiB → 512 KiB |     2 → 1 | `spliterator(double[], int, int, int)`                | `java.util.Spliterators`                      |
| removed |   -511.999 KiB | <0.1% → 0.0% |      512 KiB → 0 B |     1 → 0 | `<clinit>()`                                          | `sun.security.util.SecurityProviderConstants` |
| removed |   -511.999 KiB | <0.1% → 0.0% |      512 KiB → 0 B |     1 → 0 | `<clinit>()`                                          | `sun.security.util.KnownOIDs`                 |
| removed |   -511.999 KiB | <0.1% → 0.0% |      512 KiB → 0 B |     1 → 0 | `putVal(Object, Object, boolean)`                     | `java.util.concurrent.ConcurrentHashMap`      |
| removed |   -511.999 KiB | <0.1% → 0.0% |      512 KiB → 0 B |     1 → 0 | `read(InputStream, String)`                           | `java.util.jar.Manifest`                      |
| removed |   -511.999 KiB | <0.1% → 0.0% |      512 KiB → 0 B |     1 → 0 | `read(Manifest$FastInputStream, byte[], String, int)` | `java.util.jar.Attributes`                    |
| removed |   -511.999 KiB | <0.1% → 0.0% |      512 KiB → 0 B |     1 → 0 | `register(Object, Runnable)`                          | `java.lang.ref.Cleaner`                       |
| removed |   -511.999 KiB | <0.1% → 0.0% |      512 KiB → 0 B |     1 → 0 | `addConstantUtf8(String)`                             | `jdk.internal.org.objectweb.asm.SymbolTable`  |

##### Ours

|  Change |        Delta |            % |                Size |       Samples | Function                     | Location                                                   |
| ------: | -----------: | -----------: | ------------------: | ------------: | ---------------------------- | ---------------------------------------------------------- |
|   -4.9% |  -88.499 MiB |  4.7% → 4.5% | 1.75 GiB → 1.67 GiB | 3,593 → 3,416 | `findNearestCentroid()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -15.3% |  -17.499 MiB |         0.3% |    114 MiB → 97 MiB |     229 → 194 | `collectClusters(int[])`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -17.7% |  -15.499 MiB |         0.2% |   87.5 MiB → 72 MiB |     175 → 144 | `vectorSum()`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -10.1% |   -8.999 MiB |         0.2% |     89 MiB → 80 MiB |     178 → 160 | `add(double[], double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -5.3% |   -3.999 MiB |         0.2% | 75.5 MiB → 71.5 MiB |     151 → 143 | `merge(Map, Map)`            | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|   -2.8% |   -2.999 MiB |         0.3% |   107 MiB → 104 MiB |     215 → 209 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed | -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |         1 → 0 | `div(double[], int)`         | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| removed | -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |         1 → 0 | `collectGarbage(String)`     | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`   |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|  Change |       Delta |             % |                Size |         Samples | Function                                         | Location                                                               |
| ------: | ----------: | ------------: | ------------------: | --------------: | ------------------------------------------------ | ---------------------------------------------------------------------- |
|     new | +210.85 MiB |   0.0% → 0.6% |       0 B → 211 MiB |         0 → 416 | `invokeStatic(Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x0000000501004800`                   |
|     new | +210.85 MiB |   0.0% → 0.6% |       0 B → 211 MiB |         0 → 416 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000501009800`                    |
|   +0.8% | +59.499 MiB | 18.9% → 19.0% | 6.97 GiB → 7.03 GiB | 14,270 → 14,389 | `<init>(Collection)`                             | `java.util.ArrayList`                                                  |
|   +0.9% | +55.499 MiB | 16.2% → 16.3% | 5.97 GiB → 6.03 GiB | 12,228 → 12,339 | `grow()`                                         | `java.util.ArrayList`                                                  |
|   +0.9% | +55.499 MiB | 16.2% → 16.3% | 5.97 GiB → 6.03 GiB | 12,228 → 12,339 | `add(Object, Object[], int)`                     | `java.util.ArrayList`                                                  |
|   +0.9% | +55.499 MiB | 16.2% → 16.3% | 5.97 GiB → 6.03 GiB | 12,228 → 12,339 | `add(Object)`                                    | `java.util.ArrayList`                                                  |
| +306.3% | +48.999 MiB |  <0.1% → 0.2% |     16 MiB → 65 MiB |        32 → 130 | `apply(int)`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000501125b10` |
|   +0.1% | +45.887 MiB | 90.6% → 90.8% |            33.5 GiB | 68,245 → 68,341 | `copyOf(Object[], int)`                          | `java.util.Arrays`                                                     |
|   +0.2% | +42.887 MiB | 52.5% → 52.7% |            19.4 GiB | 39,426 → 39,516 | `grow(int)`                                      | `java.util.ArrayList`                                                  |
|  +20.4% | +27.999 MiB |          0.4% |   137 MiB → 165 MiB |       274 → 330 | `createSubtask(int, int)`                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   +0.3% | +23.887 MiB | 20.2% → 20.3% | 7.45 GiB → 7.48 GiB | 14,949 → 15,001 | `lambda$run$0(int, List, int)`                   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   +0.3% | +23.887 MiB | 20.2% → 20.3% | 7.45 GiB → 7.48 GiB | 14,949 → 15,001 | `call()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000501183d68` |
|   +0.3% | +23.887 MiB | 20.2% → 20.3% | 7.45 GiB → 7.48 GiB | 14,949 → 15,001 | `exec()`                                         | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                    |
|   +0.3% | +20.499 MiB | 17.3% → 17.4% | 6.39 GiB → 6.41 GiB | 13,091 → 13,132 | `collectClusters(int[])`                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   +0.1% | +14.999 MiB | 38.7% → 38.8% |            14.3 GiB | 29,286 → 29,316 | `toArray()`                                      | `java.util.ArrayList`                                                  |
|   +4.2% |  +8.499 MiB |   0.5% → 0.6% |   202 MiB → 211 MiB |       399 → 416 | `main(String[])`                                 | `org.renaissance.harness.RenaissanceSuite`                             |
|   +4.2% |  +8.499 MiB |   0.5% → 0.6% |   202 MiB → 211 MiB |       399 → 416 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                     |
|   +4.2% |  +8.499 MiB |   0.5% → 0.6% |   202 MiB → 211 MiB |       399 → 416 | `invokeImpl(Object, Object[])`                   | `jdk.internal.reflect.DirectMethodHandleAccessor`                      |
|   +4.2% |  +8.499 MiB |   0.5% → 0.6% |   202 MiB → 211 MiB |       399 → 416 | `invoke(Object, Object[])`                       | `jdk.internal.reflect.DirectMethodHandleAccessor`                      |
|   +4.2% |  +8.499 MiB |   0.5% → 0.6% |   202 MiB → 211 MiB |       399 → 416 | `invoke(Object, Object[])`                       | `java.lang.reflect.Method`                                             |

##### Standard library

| Change |       Delta |             % |                Size |         Samples | Function                                         | Location                                             |
| -----: | ----------: | ------------: | ------------------: | --------------: | ------------------------------------------------ | ---------------------------------------------------- |
|    new | +210.85 MiB |   0.0% → 0.6% |       0 B → 211 MiB |         0 → 416 | `invokeStatic(Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x0000000501004800` |
|    new | +210.85 MiB |   0.0% → 0.6% |       0 B → 211 MiB |         0 → 416 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000501009800`  |
|  +0.8% | +59.499 MiB | 18.9% → 19.0% | 6.97 GiB → 7.03 GiB | 14,270 → 14,389 | `<init>(Collection)`                             | `java.util.ArrayList`                                |
|  +0.9% | +55.499 MiB | 16.2% → 16.3% | 5.97 GiB → 6.03 GiB | 12,228 → 12,339 | `grow()`                                         | `java.util.ArrayList`                                |
|  +0.9% | +55.499 MiB | 16.2% → 16.3% | 5.97 GiB → 6.03 GiB | 12,228 → 12,339 | `add(Object, Object[], int)`                     | `java.util.ArrayList`                                |
|  +0.9% | +55.499 MiB | 16.2% → 16.3% | 5.97 GiB → 6.03 GiB | 12,228 → 12,339 | `add(Object)`                                    | `java.util.ArrayList`                                |
|  +0.1% | +45.887 MiB | 90.6% → 90.8% |            33.5 GiB | 68,245 → 68,341 | `copyOf(Object[], int)`                          | `java.util.Arrays`                                   |
|  +0.2% | +42.887 MiB | 52.5% → 52.7% |            19.4 GiB | 39,426 → 39,516 | `grow(int)`                                      | `java.util.ArrayList`                                |
|  +0.3% | +23.887 MiB | 20.2% → 20.3% | 7.45 GiB → 7.48 GiB | 14,949 → 15,001 | `exec()`                                         | `java.util.concurrent.ForkJoinTask$AdaptedCallable`  |
|  +0.1% | +14.999 MiB | 38.7% → 38.8% |            14.3 GiB | 29,286 → 29,316 | `toArray()`                                      | `java.util.ArrayList`                                |
|  +4.2% |  +8.499 MiB |   0.5% → 0.6% |   202 MiB → 211 MiB |       399 → 416 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                   |
|  +4.2% |  +8.499 MiB |   0.5% → 0.6% |   202 MiB → 211 MiB |       399 → 416 | `invokeImpl(Object, Object[])`                   | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +4.2% |  +8.499 MiB |   0.5% → 0.6% |   202 MiB → 211 MiB |       399 → 416 | `invoke(Object, Object[])`                       | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +4.2% |  +8.499 MiB |   0.5% → 0.6% |   202 MiB → 211 MiB |       399 → 416 | `invoke(Object, Object[])`                       | `java.lang.reflect.Method`                           |
|    new |  +8.499 MiB |  0.0% → <0.1% |       0 B → 8.5 MiB |          0 → 17 | `newInvokeSpecial(Object, int, int, Object)`     | `java.lang.invoke.LambdaForm$DMH.0x0000000501126400` |
|    new |  +8.499 MiB |  0.0% → <0.1% |       0 B → 8.5 MiB |          0 → 17 | `linkToTargetMethod(int, int, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x0000000501126c00`  |
| +32.5% |  +6.499 MiB |          0.1% |   20 MiB → 26.5 MiB |         40 → 53 | `loadClass(String, boolean)`                     | `java.lang.ClassLoader`                              |
| +32.5% |  +6.499 MiB |          0.1% |   20 MiB → 26.5 MiB |         40 → 53 | `loadClass(String)`                              | `java.lang.ClassLoader`                              |
| +34.3% |  +5.999 MiB |  <0.1% → 0.1% | 17.5 MiB → 23.5 MiB |         35 → 47 | `defineClass(String, Resource)`                  | `java.net.URLClassLoader`                            |
| +31.6% |  +5.999 MiB |          0.1% |     19 MiB → 25 MiB |         38 → 50 | `findClass(String)`                              | `java.net.URLClassLoader`                            |

##### Ours

|  Change |       Delta |             % |                Size |         Samples | Function                                                                                                               | Location                                                               |
| ------: | ----------: | ------------: | ------------------: | --------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| +306.3% | +48.999 MiB |  <0.1% → 0.2% |     16 MiB → 65 MiB |        32 → 130 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000501125b10` |
|  +20.4% | +27.999 MiB |          0.4% |   137 MiB → 165 MiB |       274 → 330 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   +0.3% | +23.887 MiB | 20.2% → 20.3% | 7.45 GiB → 7.48 GiB | 14,949 → 15,001 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   +0.3% | +23.887 MiB | 20.2% → 20.3% | 7.45 GiB → 7.48 GiB | 14,949 → 15,001 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000501183d68` |
|   +0.3% | +20.499 MiB | 17.3% → 17.4% | 6.39 GiB → 6.41 GiB | 13,091 → 13,132 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   +4.2% |  +8.499 MiB |   0.5% → 0.6% |   202 MiB → 211 MiB |       399 → 416 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|   +4.2% |  +8.499 MiB |   0.5% → 0.6% |   202 MiB → 211 MiB |       399 → 416 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
|   +4.3% |  +8.499 MiB |   0.5% → 0.6% |   199 MiB → 208 MiB |       393 → 410 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|   +3.4% |  +6.999 MiB |   0.5% → 0.6% |   204 MiB → 211 MiB |       402 → 416 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
|   +3.4% |  +6.999 MiB |   0.5% → 0.6% |   204 MiB → 211 MiB |       402 → 416 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
|  +11.1% |  +6.499 MiB |          0.2% |   58.5 MiB → 65 MiB |       117 → 130 | `lambda$generateData$3(int, int, Random[], int)`                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   +2.4% |  +4.499 MiB |          0.5% |   188 MiB → 192 MiB |       370 → 379 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|   +2.4% |  +4.499 MiB |          0.5% |   188 MiB → 192 MiB |       370 → 379 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|   +2.4% |  +4.499 MiB |          0.5% |   188 MiB → 192 MiB |       370 → 379 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000050111efe0` |
|   +2.4% |  +4.499 MiB |          0.5% |   188 MiB → 192 MiB |       370 → 379 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +63.6% |  +3.499 MiB |         <0.1% |     5.5 MiB → 9 MiB |         11 → 18 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   +2.0% |  +3.499 MiB |          0.5% |   172 MiB → 175 MiB |       344 → 351 | `lambda$generateData$5(int, int, Random[], int)`                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   +2.0% |  +3.499 MiB |          0.5% |   172 MiB → 175 MiB |       344 → 351 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000005011258d8` |
|   +2.0% |  +3.499 MiB |          0.5% |   177 MiB → 181 MiB |       349 → 356 | `generateData(int, int, int)`                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   +2.0% |  +3.499 MiB |          0.5% |   177 MiB → 181 MiB |       349 → 356 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | `org.renaissance.jdk.concurrent.FjKmeans`                              |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                Size |         Samples | Function                                                  | Location                                                               |
| ------: | -----------: | ------------: | ------------------: | --------------: | --------------------------------------------------------- | ---------------------------------------------------------------------- |
| removed |  -202.35 MiB |   0.5% → 0.0% |       202 MiB → 0 B |         399 → 0 | `invokeStatic(Object, Object)`                            | `java.lang.invoke.LambdaForm$DMH.0x0000007001004800`                   |
| removed |  -202.35 MiB |   0.5% → 0.0% |       202 MiB → 0 B |         399 → 0 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000007001009800`                    |
|   -0.6% | -178.999 MiB | 79.4% → 79.0% | 29.3 GiB → 29.2 GiB | 60,059 → 59,701 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                                    |
|   -0.6% | -178.999 MiB | 79.4% → 79.0% | 29.3 GiB → 29.2 GiB | 60,059 → 59,701 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                                    |
|   -0.6% | -165.999 MiB | 78.5% → 78.2% |   29 GiB → 28.9 GiB | 59,435 → 59,103 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|   -4.9% |  -88.499 MiB |   4.7% → 4.5% | 1.75 GiB → 1.67 GiB |   3,593 → 3,416 | `findNearestCentroid()`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -0.8% |  -67.999 MiB | 22.0% → 21.9% | 8.15 GiB → 8.08 GiB | 16,684 → 16,548 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -0.2% |  -65.612 MiB | 99.5% → 99.4% | 36.8 GiB → 36.7 GiB | 74,957 → 74,830 | `compute()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|   -0.2% |  -65.612 MiB | 99.5% → 99.4% | 36.8 GiB → 36.7 GiB | 74,957 → 74,830 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                                   |
|   -0.2% |  -64.112 MiB | 99.5% → 99.4% | 36.8 GiB → 36.7 GiB | 74,960 → 74,836 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                                    |
|   -0.2% |  -64.112 MiB | 99.5% → 99.4% | 36.8 GiB → 36.7 GiB | 74,960 → 74,836 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|   -0.2% |  -64.112 MiB | 99.5% → 99.4% | 36.8 GiB → 36.7 GiB | 74,960 → 74,836 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                                    |
|   -0.2% |  -64.112 MiB | 99.5% → 99.4% | 36.8 GiB → 36.7 GiB | 74,960 → 74,836 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                                    |
|   -0.2% |  -64.112 MiB | 99.5% → 99.4% | 36.8 GiB → 36.7 GiB | 74,960 → 74,836 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`                            |
|   -0.3% |  -56.112 MiB | 56.2% → 56.1% | 20.8 GiB → 20.7 GiB | 42,214 → 42,106 | `addAll(Collection)`                                      | `java.util.ArrayList`                                                  |
|   -0.9% |  -50.499 MiB | 14.3% → 14.2% | 5.29 GiB → 5.24 GiB | 10,832 → 10,731 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                                    |
|  -70.1% |  -40.999 MiB |  0.2% → <0.1% | 58.5 MiB → 17.5 MiB |        117 → 35 | `apply(int)`                                              | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000501125d48` |
|  -11.0% |  -22.499 MiB |          0.5% |   205 MiB → 182 MiB |       410 → 365 | `average(List)`                                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   -8.3% |  -17.999 MiB |   0.6% → 0.5% |   218 MiB → 200 MiB |       436 → 400 | `computeClusterAverages()`                                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   -8.3% |  -17.999 MiB |   0.6% → 0.5% |   218 MiB → 200 MiB |       436 → 400 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |

##### Standard library

|  Change |        Delta |             % |                Size |         Samples | Function                                                  | Location                                             |
| ------: | -----------: | ------------: | ------------------: | --------------: | --------------------------------------------------------- | ---------------------------------------------------- |
| removed |  -202.35 MiB |   0.5% → 0.0% |       202 MiB → 0 B |         399 → 0 | `invokeStatic(Object, Object)`                            | `java.lang.invoke.LambdaForm$DMH.0x0000007001004800` |
| removed |  -202.35 MiB |   0.5% → 0.0% |       202 MiB → 0 B |         399 → 0 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000007001009800`  |
|   -0.6% | -178.999 MiB | 79.4% → 79.0% | 29.3 GiB → 29.2 GiB | 60,059 → 59,701 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                  |
|   -0.6% | -178.999 MiB | 79.4% → 79.0% | 29.3 GiB → 29.2 GiB | 60,059 → 59,701 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                  |
|   -0.6% | -165.999 MiB | 78.5% → 78.2% |   29 GiB → 28.9 GiB | 59,435 → 59,103 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|   -0.2% |  -65.612 MiB | 99.5% → 99.4% | 36.8 GiB → 36.7 GiB | 74,957 → 74,830 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                 |
|   -0.2% |  -64.112 MiB | 99.5% → 99.4% | 36.8 GiB → 36.7 GiB | 74,960 → 74,836 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                  |
|   -0.2% |  -64.112 MiB | 99.5% → 99.4% | 36.8 GiB → 36.7 GiB | 74,960 → 74,836 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|   -0.2% |  -64.112 MiB | 99.5% → 99.4% | 36.8 GiB → 36.7 GiB | 74,960 → 74,836 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                  |
|   -0.2% |  -64.112 MiB | 99.5% → 99.4% | 36.8 GiB → 36.7 GiB | 74,960 → 74,836 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                  |
|   -0.2% |  -64.112 MiB | 99.5% → 99.4% | 36.8 GiB → 36.7 GiB | 74,960 → 74,836 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`          |
|   -0.3% |  -56.112 MiB | 56.2% → 56.1% | 20.8 GiB → 20.7 GiB | 42,214 → 42,106 | `addAll(Collection)`                                      | `java.util.ArrayList`                                |
|   -0.9% |  -50.499 MiB | 14.3% → 14.2% | 5.29 GiB → 5.24 GiB | 10,832 → 10,731 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                  |
|   -6.3% |  -17.999 MiB |   0.8% → 0.7% |   288 MiB → 270 MiB |       576 → 540 | `newNode(int, Object, Object, HashMap$Node)`              | `java.util.HashMap`                                  |
|   -5.5% |  -17.499 MiB |          0.8% |   319 MiB → 302 MiB |       639 → 604 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                                  |
| removed |  -12.499 MiB |  <0.1% → 0.0% |      12.5 MiB → 0 B |          25 → 0 | `newInvokeSpecial(Object, int, int, Object)`              | `java.lang.invoke.LambdaForm$DMH.0x0000007001126400` |
| removed |  -12.499 MiB |  <0.1% → 0.0% |      12.5 MiB → 0 B |          25 → 0 | `linkToTargetMethod(int, int, Object, Object)`            | `java.lang.invoke.LambdaForm$MH.0x0000007001126c00`  |
|   -5.5% |   -5.999 MiB |          0.3% |   109 MiB → 103 MiB |       218 → 206 | `resize()`                                                | `java.util.HashMap`                                  |
|   -3.0% |   -5.499 MiB |          0.5% |   184 MiB → 179 MiB |       369 → 358 | `putVal(int, Object, Object, boolean, boolean)`           | `java.util.HashMap`                                  |
|   -0.1% |   -5.112 MiB |         20.7% | 7.64 GiB → 7.63 GiB | 15,328 → 15,322 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                  |

##### Ours

|  Change |          Delta |             % |                Size |         Samples | Function                                        | Location                                                               |
| ------: | -------------: | ------------: | ------------------: | --------------: | ----------------------------------------------- | ---------------------------------------------------------------------- |
|   -4.9% |    -88.499 MiB |   4.7% → 4.5% | 1.75 GiB → 1.67 GiB |   3,593 → 3,416 | `findNearestCentroid()`                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -0.8% |    -67.999 MiB | 22.0% → 21.9% | 8.15 GiB → 8.08 GiB | 16,684 → 16,548 | `computeDirectly()`                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -0.2% |    -65.612 MiB | 99.5% → 99.4% | 36.8 GiB → 36.7 GiB | 74,957 → 74,830 | `compute()`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  -70.1% |    -40.999 MiB |  0.2% → <0.1% | 58.5 MiB → 17.5 MiB |        117 → 35 | `apply(int)`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000501125d48` |
|  -11.0% |    -22.499 MiB |          0.5% |   205 MiB → 182 MiB |       410 → 365 | `average(List)`                                 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   -8.3% |    -17.999 MiB |   0.6% → 0.5% |   218 MiB → 200 MiB |       436 → 400 | `computeClusterAverages()`                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   -8.3% |    -17.999 MiB |   0.6% → 0.5% |   218 MiB → 200 MiB |       436 → 400 | `computeDirectly()`                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -17.7% |    -15.499 MiB |          0.2% |   87.5 MiB → 72 MiB |       175 → 144 | `vectorSum()`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -17.7% |    -15.499 MiB |          0.2% |   87.5 MiB → 72 MiB |       175 → 144 | `computeDirectly()`                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -10.1% |     -8.999 MiB |          0.2% |     89 MiB → 80 MiB |       178 → 160 | `add(double[], double[])`                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -10.1% |     -8.999 MiB |          0.2% |     89 MiB → 80 MiB |       178 → 160 | `combineResults(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -10.1% |     -8.999 MiB |          0.2% |     89 MiB → 80 MiB |       178 → 160 | `combineResults(Object, Object)`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|     ~0% |     -8.612 MiB |         76.1% |            28.1 GiB | 57,245 → 57,232 | `merge(Map, Map)`                               | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|     ~0% |     -8.112 MiB | 76.0% → 76.1% |            28.1 GiB | 57,236 → 57,224 | `combineResults(Map, Map)`                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|     ~0% |     -8.112 MiB | 76.0% → 76.1% |            28.1 GiB | 57,236 → 57,224 | `combineResults(Object, Object)`                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed |     -1.499 MiB |  <0.1% → 0.0% |       1.5 MiB → 0 B |           3 → 0 | `createScratchDirectory(Path, String, boolean)` | `org.renaissance.core.DirUtils`                                        |
| removed |     -1.499 MiB |  <0.1% → 0.0% |       1.5 MiB → 0 B |           3 → 0 | `createScratchRoot(Path, boolean)`              | `org.renaissance.core.Launcher`                                        |
|     ~0% |     -1.112 MiB | 75.3% → 75.4% |            27.8 GiB | 56,703 → 56,705 | `lambda$merge$7(Map, Object, List)`             | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|     ~0% |     -1.112 MiB | 75.3% → 75.4% |            27.8 GiB | 56,703 → 56,705 | `accept(Object, Object)`                        | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000501186d88` |
|  -11.1% | -1,023.998 KiB |         <0.1% |       9 MiB → 8 MiB |         18 → 16 | `boxed(double[])`                               | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |

# Allocated heap profile diff

Allocated 37 GiB → 37.1 GiB (+90.029 MiB, +0.2%) over 75,391 samples → 75,580 samples (514 KiB per sample).

| Category         | Change |       Delta |     % |                Size |         Samples |
| ---------------- | -----: | ----------: | ----: | ------------------: | --------------: |
| Standard library |  +0.3% | +96.529 MiB | 93.1% | 34.4 GiB → 34.5 GiB | 70,144 → 70,346 |
| Ours             |  -0.2% |  -6.499 MiB |  6.9% |            2.56 GiB |   5,247 → 5,234 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|  Change |          Delta |            % |                Size |         Samples | Function                                      | Location                                                   |
| ------: | -------------: | -----------: | ------------------: | --------------: | --------------------------------------------- | ---------------------------------------------------------- |
|   +0.3% |   +101.029 MiB |        90.9% | 33.6 GiB → 33.7 GiB | 68,470 → 68,681 | `copyOf(Object[], int)`                       | `java.util.Arrays`                                         |
|   +1.6% |    +27.999 MiB |         4.6% | 1.68 GiB → 1.71 GiB |   3,446 → 3,502 | `findNearestCentroid()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +20.8% |    +19.999 MiB |         0.3% |    96 MiB → 116 MiB |       192 → 232 | `resize()`                                    | `java.util.HashMap`                                        |
|   +6.4% |     +6.999 MiB |         0.3% |   109 MiB → 116 MiB |       219 → 233 | `lambda$merge$6(List, List)`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  +30.3% |     +4.999 MiB | <0.1% → 0.1% | 16.5 MiB → 21.5 MiB |         33 → 43 | `lambda$generateData$4(int)`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  +71.4% |     +2.499 MiB |        <0.1% |     3.5 MiB → 6 MiB |          7 → 12 | `awaitDone(int, long)`                        | `java.util.concurrent.ForkJoinTask`                        |
|  +23.8% |     +2.499 MiB |        <0.1% |   10.5 MiB → 13 MiB |         21 → 26 | `createSubtask(int, int)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  +38.5% |     +2.499 MiB |        <0.1% |     6.5 MiB → 9 MiB |         13 → 18 | `<init>(InputStream, Inflater, int)`          | `java.util.zip.InflaterInputStream`                        |
|  +22.2% |     +1.999 MiB |        <0.1% |      9 MiB → 11 MiB |         18 → 22 | `allocateInstance(Object)`                    | `java.lang.invoke.DirectMethodHandle`                      |
|  +16.7% |     +1.999 MiB |        <0.1% |     12 MiB → 14 MiB |         24 → 28 | `copyOf(byte[], int)`                         | `java.util.Arrays`                                         |
|  +12.5% |     +1.499 MiB |        <0.1% |   12 MiB → 13.5 MiB |         24 → 27 | `builder(long, IntFunction)`                  | `java.util.stream.Nodes`                                   |
| +200.0% | +1,023.998 KiB |        <0.1% |   512 KiB → 1.5 MiB |           1 → 3 | `doubleStream(Spliterator$OfDouble, boolean)` | `java.util.stream.StreamSupport`                           |
|     new | +1,023.998 KiB | 0.0% → <0.1% |         0 B → 1 MiB |           0 → 2 | `div(double[], int)`                          | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|     new | +1,023.998 KiB | 0.0% → <0.1% |         0 B → 1 MiB |           0 → 2 | `mapToObj(DoubleFunction, int)`               | `java.util.stream.DoublePipeline`                          |
|     new | +1,023.998 KiB | 0.0% → <0.1% |         0 B → 1 MiB |           0 → 2 | `enlarge(int)`                                | `jdk.internal.org.objectweb.asm.ByteVector`                |
|  +50.0% |   +511.999 KiB |        <0.1% |     1 MiB → 1.5 MiB |           2 → 3 | `lambda$run$0(int, List, int)`                | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| +100.0% |   +511.999 KiB |        <0.1% |     512 KiB → 1 MiB |           1 → 2 | `<init>(InputStream)`                         | `java.util.Properties$LineReader`                          |
|     new |   +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |           0 → 1 | `read(InputStream, String)`                   | `java.util.jar.Manifest`                                   |
|     new |   +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |           0 → 1 | `getBytes()`                                  | `jdk.internal.loader.URLClassPath$JarLoader$2`             |
|   +3.8% |   +511.999 KiB |        <0.1% |   13 MiB → 13.5 MiB |         26 → 27 | `range(int, int)`                             | `java.util.stream.IntStream`                               |

##### Standard library

|  Change |          Delta |            % |                Size |         Samples | Function                                      | Location                                       |
| ------: | -------------: | -----------: | ------------------: | --------------: | --------------------------------------------- | ---------------------------------------------- |
|   +0.3% |   +101.029 MiB |        90.9% | 33.6 GiB → 33.7 GiB | 68,470 → 68,681 | `copyOf(Object[], int)`                       | `java.util.Arrays`                             |
|  +20.8% |    +19.999 MiB |         0.3% |    96 MiB → 116 MiB |       192 → 232 | `resize()`                                    | `java.util.HashMap`                            |
|  +71.4% |     +2.499 MiB |        <0.1% |     3.5 MiB → 6 MiB |          7 → 12 | `awaitDone(int, long)`                        | `java.util.concurrent.ForkJoinTask`            |
|  +38.5% |     +2.499 MiB |        <0.1% |     6.5 MiB → 9 MiB |         13 → 18 | `<init>(InputStream, Inflater, int)`          | `java.util.zip.InflaterInputStream`            |
|  +22.2% |     +1.999 MiB |        <0.1% |      9 MiB → 11 MiB |         18 → 22 | `allocateInstance(Object)`                    | `java.lang.invoke.DirectMethodHandle`          |
|  +16.7% |     +1.999 MiB |        <0.1% |     12 MiB → 14 MiB |         24 → 28 | `copyOf(byte[], int)`                         | `java.util.Arrays`                             |
|  +12.5% |     +1.499 MiB |        <0.1% |   12 MiB → 13.5 MiB |         24 → 27 | `builder(long, IntFunction)`                  | `java.util.stream.Nodes`                       |
| +200.0% | +1,023.998 KiB |        <0.1% |   512 KiB → 1.5 MiB |           1 → 3 | `doubleStream(Spliterator$OfDouble, boolean)` | `java.util.stream.StreamSupport`               |
|     new | +1,023.998 KiB | 0.0% → <0.1% |         0 B → 1 MiB |           0 → 2 | `mapToObj(DoubleFunction, int)`               | `java.util.stream.DoublePipeline`              |
|     new | +1,023.998 KiB | 0.0% → <0.1% |         0 B → 1 MiB |           0 → 2 | `enlarge(int)`                                | `jdk.internal.org.objectweb.asm.ByteVector`    |
| +100.0% |   +511.999 KiB |        <0.1% |     512 KiB → 1 MiB |           1 → 2 | `<init>(InputStream)`                         | `java.util.Properties$LineReader`              |
|     new |   +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |           0 → 1 | `read(InputStream, String)`                   | `java.util.jar.Manifest`                       |
|     new |   +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |           0 → 1 | `getBytes()`                                  | `jdk.internal.loader.URLClassPath$JarLoader$2` |
|   +3.8% |   +511.999 KiB |        <0.1% |   13 MiB → 13.5 MiB |         26 → 27 | `range(int, int)`                             | `java.util.stream.IntStream`                   |
|     new |   +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |           0 → 1 | `<clinit>()`                                  | `scala.reflect.ManifestFactory$`               |
|     new |   +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |           0 → 1 | `iterator()`                                  | `java.util.HashMap$EntrySet`                   |
|     new |   +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |           0 → 1 | `compress(char[], int, int)`                  | `java.lang.StringUTF16`                        |
|     new |   +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |           0 → 1 | `newString(byte[], int, int)`                 | `java.lang.StringLatin1`                       |
|     new |   +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |           0 → 1 | `transferTo(OutputStream)`                    | `java.io.InputStream`                          |
|     new |   +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |           0 → 1 | `fillInStackTrace(int)`                       | `java.lang.Throwable`                          |

##### Ours

| Change |          Delta |            % |                Size |       Samples | Function                       | Location                                                   |
| -----: | -------------: | -----------: | ------------------: | ------------: | ------------------------------ | ---------------------------------------------------------- |
|  +1.6% |    +27.999 MiB |         4.6% | 1.68 GiB → 1.71 GiB | 3,446 → 3,502 | `findNearestCentroid()`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +6.4% |     +6.999 MiB |         0.3% |   109 MiB → 116 MiB |     219 → 233 | `lambda$merge$6(List, List)`   | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| +30.3% |     +4.999 MiB | <0.1% → 0.1% | 16.5 MiB → 21.5 MiB |       33 → 43 | `lambda$generateData$4(int)`   | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| +23.8% |     +2.499 MiB |        <0.1% |   10.5 MiB → 13 MiB |       21 → 26 | `createSubtask(int, int)`      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|    new | +1,023.998 KiB | 0.0% → <0.1% |         0 B → 1 MiB |         0 → 2 | `div(double[], int)`           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| +50.0% |   +511.999 KiB |        <0.1% |     1 MiB → 1.5 MiB |         2 → 3 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |          Delta |            % |                Size |   Samples | Function                                     | Location                                                   |
| ------: | -------------: | -----------: | ------------------: | --------: | -------------------------------------------- | ---------------------------------------------------------- |
|  -15.5% |    -13.499 MiB |         0.2% |   87 MiB → 73.5 MiB | 174 → 147 | `vectorSum()`                                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -7.9% |    -12.999 MiB |         0.4% |   164 MiB → 151 MiB | 328 → 302 | `createSubtask(int, int)`                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -4.8% |    -11.499 MiB |         0.6% |   242 MiB → 230 MiB | 484 → 461 | `grow(int)`                                  | `java.util.ArrayList`                                      |
|   -7.6% |    -10.999 MiB |         0.4% |   145 MiB → 134 MiB | 290 → 268 | `createSubtask(int, int)`                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -3.0% |     -7.999 MiB |         0.7% |   269 MiB → 261 MiB | 538 → 522 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                                        |
|  -22.9% |     -3.999 MiB |        <0.1% | 17.5 MiB → 13.5 MiB |   29 → 21 | `copyOf(Object[], int, Class)`               | `java.util.Arrays`                                         |
|   -6.3% |     -3.999 MiB |         0.2% |     63 MiB → 59 MiB | 126 → 118 | `valueOf(double)`                            | `java.lang.Double`                                         |
|  -11.4% |     -3.999 MiB |         0.1% |     35 MiB → 31 MiB |   70 → 62 | `mapToObj(IntFunction, int)`                 | `java.util.stream.IntPipeline`                             |
|   -3.2% |     -3.499 MiB |         0.3% |   110 MiB → 107 MiB | 221 → 214 | `collectClusters(int[])`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -5.5% |     -3.499 MiB |         0.2% |   63.5 MiB → 60 MiB | 127 → 120 | `merge(Map, Map)`                            | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -36.8% |     -3.499 MiB |        <0.1% |     9.5 MiB → 6 MiB |   19 → 12 | `computeClusterAverages()`                   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -24.1% |     -3.499 MiB |        <0.1% |   14.5 MiB → 11 MiB |   29 → 22 | `entrySet()`                                 | `java.util.HashMap`                                        |
|  -50.0% |     -1.999 MiB |        <0.1% |       4 MiB → 2 MiB |     8 → 4 | `allocateInstance(Class)`                    | `jdk.internal.misc.Unsafe`                                 |
| removed | -1,023.998 KiB | <0.1% → 0.0% |         1 MiB → 0 B |     2 → 0 | `<init>(JavaKMeans, Map)`                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| removed | -1,023.998 KiB | <0.1% → 0.0% |         1 MiB → 0 B |     2 → 0 | `readNBytes(int)`                            | `java.io.InputStream`                                      |
|   -4.0% | -1,023.998 KiB |         0.1% |     25 MiB → 24 MiB |   50 → 48 | `intStream(Spliterator$OfInt, boolean)`      | `java.util.stream.StreamSupport`                           |
|  -13.3% | -1,023.998 KiB |        <0.1% |   7.5 MiB → 6.5 MiB |   15 → 13 | `opWrapSink(int, Sink)`                      | `java.util.stream.IntPipeline$1`                           |
| removed |   -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |     1 → 0 | `<init>(Collection)`                         | `java.util.ArrayList`                                      |
|   -0.7% |   -511.999 KiB |         0.2% |   76 MiB → 75.5 MiB | 152 → 151 | `add(double[], double[])`                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -0.5% |   -511.999 KiB |         0.3% |             104 MiB | 209 → 208 | `lambda$collectClusters$0(Double[])`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### Standard library

|  Change |          Delta |            % |                Size |   Samples | Function                                                                        | Location                             |
| ------: | -------------: | -----------: | ------------------: | --------: | ------------------------------------------------------------------------------- | ------------------------------------ |
|   -4.8% |    -11.499 MiB |         0.6% |   242 MiB → 230 MiB | 484 → 461 | `grow(int)`                                                                     | `java.util.ArrayList`                |
|   -3.0% |     -7.999 MiB |         0.7% |   269 MiB → 261 MiB | 538 → 522 | `newNode(int, Object, Object, HashMap$Node)`                                    | `java.util.HashMap`                  |
|  -22.9% |     -3.999 MiB |        <0.1% | 17.5 MiB → 13.5 MiB |   29 → 21 | `copyOf(Object[], int, Class)`                                                  | `java.util.Arrays`                   |
|   -6.3% |     -3.999 MiB |         0.2% |     63 MiB → 59 MiB | 126 → 118 | `valueOf(double)`                                                               | `java.lang.Double`                   |
|  -11.4% |     -3.999 MiB |         0.1% |     35 MiB → 31 MiB |   70 → 62 | `mapToObj(IntFunction, int)`                                                    | `java.util.stream.IntPipeline`       |
|  -24.1% |     -3.499 MiB |        <0.1% |   14.5 MiB → 11 MiB |   29 → 22 | `entrySet()`                                                                    | `java.util.HashMap`                  |
|  -50.0% |     -1.999 MiB |        <0.1% |       4 MiB → 2 MiB |     8 → 4 | `allocateInstance(Class)`                                                       | `jdk.internal.misc.Unsafe`           |
| removed | -1,023.998 KiB | <0.1% → 0.0% |         1 MiB → 0 B |     2 → 0 | `readNBytes(int)`                                                               | `java.io.InputStream`                |
|   -4.0% | -1,023.998 KiB |         0.1% |     25 MiB → 24 MiB |   50 → 48 | `intStream(Spliterator$OfInt, boolean)`                                         | `java.util.stream.StreamSupport`     |
|  -13.3% | -1,023.998 KiB |        <0.1% |   7.5 MiB → 6.5 MiB |   15 → 13 | `opWrapSink(int, Sink)`                                                         | `java.util.stream.IntPipeline$1`     |
| removed |   -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |     1 → 0 | `<init>(Collection)`                                                            | `java.util.ArrayList`                |
|  -50.0% |   -511.999 KiB |        <0.1% |     1 MiB → 512 KiB |     2 → 1 | `spliterator(double[], int, int, int)`                                          | `java.util.Spliterators`             |
| removed |   -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |     1 → 0 | `load(DataInputStream)`                                                         | `sun.util.calendar.ZoneInfoFile`     |
| removed |   -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |     1 → 0 | `getContents()`                                                                 | `sun.text.resources.cldr.FormatData` |
|  -50.0% |   -511.999 KiB |        <0.1% |     1 MiB → 512 KiB |     2 → 1 | `copyOfRangeByte(byte[], int, int)`                                             | `java.util.Arrays`                   |
| removed |   -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |     1 → 0 | `parseName(byte[], int)`                                                        | `java.util.jar.Manifest`             |
| removed |   -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |     1 → 0 | `<init>(int)`                                                                   | `java.io.ByteArrayOutputStream`      |
|  -50.0% |   -511.999 KiB |        <0.1% |     1 MiB → 512 KiB |     2 → 1 | `newLinkedHashMap(int)`                                                         | `java.util.LinkedHashMap`            |
| removed |   -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |     1 → 0 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`              |
| removed |   -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |     1 → 0 | `$init$$$anonfun$1(int)`                                                        | `scala.runtime.LazyVals$`            |

##### Ours

|  Change |          Delta |            % |              Size |   Samples | Function                             | Location                                                   |
| ------: | -------------: | -----------: | ----------------: | --------: | ------------------------------------ | ---------------------------------------------------------- |
|  -15.5% |    -13.499 MiB |         0.2% | 87 MiB → 73.5 MiB | 174 → 147 | `vectorSum()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -7.9% |    -12.999 MiB |         0.4% | 164 MiB → 151 MiB | 328 → 302 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -7.6% |    -10.999 MiB |         0.4% | 145 MiB → 134 MiB | 290 → 268 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -3.2% |     -3.499 MiB |         0.3% | 110 MiB → 107 MiB | 221 → 214 | `collectClusters(int[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -5.5% |     -3.499 MiB |         0.2% | 63.5 MiB → 60 MiB | 127 → 120 | `merge(Map, Map)`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -36.8% |     -3.499 MiB |        <0.1% |   9.5 MiB → 6 MiB |   19 → 12 | `computeClusterAverages()`           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| removed | -1,023.998 KiB | <0.1% → 0.0% |       1 MiB → 0 B |     2 → 0 | `<init>(JavaKMeans, Map)`            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|   -0.7% |   -511.999 KiB |         0.2% | 76 MiB → 75.5 MiB | 152 → 151 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -0.5% |   -511.999 KiB |         0.3% |           104 MiB | 209 → 208 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -50.0% |   -511.999 KiB |        <0.1% |   1 MiB → 512 KiB |     2 → 1 | `collectGarbage(String)`             | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`   |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

| Change |        Delta |             % |                Size |         Samples | Function                                             | Location                                                               |
| -----: | -----------: | ------------: | ------------------: | --------------: | ---------------------------------------------------- | ---------------------------------------------------------------------- |
|    new |  +215.96 MiB |   0.0% → 0.6% |       0 B → 216 MiB |         0 → 426 | `invokeStatic(Object, Object)`                       | `java.lang.invoke.LambdaForm$DMH.0x0000008801004800`                   |
|    new |  +215.96 MiB |   0.0% → 0.6% |       0 B → 216 MiB |         0 → 426 | `invoke(Object, Object, Object)`                     | `java.lang.invoke.LambdaForm$MH.0x0000008801009800`                    |
|  +1.5% | +102.999 MiB | 18.8% → 19.0% | 6.94 GiB → 7.04 GiB | 14,205 → 14,411 | `<init>(Collection)`                                 | `java.util.ArrayList`                                                  |
|  +0.3% |  +97.029 MiB |         90.9% | 33.6 GiB → 33.7 GiB | 68,499 → 68,702 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                                     |
|  +0.3% |  +93.029 MiB |         75.5% |   27.9 GiB → 28 GiB | 56,815 → 57,010 | `lambda$merge$6(List, List)`                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +0.3% |  +93.029 MiB |         75.5% |   27.9 GiB → 28 GiB | 56,815 → 57,010 | `apply(Object, Object)`                              | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000008801186fd0` |
|  +0.3% |  +92.029 MiB |         75.5% |   27.9 GiB → 28 GiB | 56,819 → 57,012 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                                                    |
|  +0.3% |  +92.029 MiB |         75.5% |   27.9 GiB → 28 GiB | 56,819 → 57,012 | `lambda$merge$7(Map, Object, List)`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +0.3% |  +92.029 MiB |         75.5% |   27.9 GiB → 28 GiB | 56,819 → 57,012 | `accept(Object, Object)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000008801186d88` |
|  +0.3% |  +92.029 MiB |         75.5% |   27.9 GiB → 28 GiB | 56,819 → 57,012 | `forEach(BiConsumer)`                                | `java.util.HashMap`                                                    |
|  +0.3% |  +88.529 MiB |         76.1% | 28.1 GiB → 28.2 GiB | 57,297 → 57,483 | `merge(Map, Map)`                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +0.3% |  +88.529 MiB |         76.1% | 28.1 GiB → 28.2 GiB | 57,291 → 57,477 | `combineResults(Map, Map)`                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  +0.3% |  +88.529 MiB |         76.1% | 28.1 GiB → 28.2 GiB | 57,291 → 57,477 | `combineResults(Object, Object)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  +0.2% |  +87.529 MiB |         99.4% |            36.8 GiB | 74,963 → 75,147 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  +0.2% |  +87.529 MiB |         99.4% |            36.8 GiB | 74,963 → 75,147 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                                   |
|  +0.2% |  +86.529 MiB |         99.4% |            36.8 GiB | 74,968 → 75,150 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                                    |
|  +0.2% |  +86.529 MiB |         99.4% |            36.8 GiB | 74,968 → 75,150 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|  +0.2% |  +86.529 MiB |         99.4% |            36.8 GiB | 74,968 → 75,150 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                                    |
|  +0.2% |  +86.529 MiB |         99.4% |            36.8 GiB | 74,968 → 75,150 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                                    |
|  +0.2% |  +86.529 MiB |         99.4% |            36.8 GiB | 74,968 → 75,150 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                            |

##### Standard library

| Change |        Delta |             % |                Size |         Samples | Function                                             | Location                                             |
| -----: | -----------: | ------------: | ------------------: | --------------: | ---------------------------------------------------- | ---------------------------------------------------- |
|    new |  +215.96 MiB |   0.0% → 0.6% |       0 B → 216 MiB |         0 → 426 | `invokeStatic(Object, Object)`                       | `java.lang.invoke.LambdaForm$DMH.0x0000008801004800` |
|    new |  +215.96 MiB |   0.0% → 0.6% |       0 B → 216 MiB |         0 → 426 | `invoke(Object, Object, Object)`                     | `java.lang.invoke.LambdaForm$MH.0x0000008801009800`  |
|  +1.5% | +102.999 MiB | 18.8% → 19.0% | 6.94 GiB → 7.04 GiB | 14,205 → 14,411 | `<init>(Collection)`                                 | `java.util.ArrayList`                                |
|  +0.3% |  +97.029 MiB |         90.9% | 33.6 GiB → 33.7 GiB | 68,499 → 68,702 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                   |
|  +0.3% |  +92.029 MiB |         75.5% |   27.9 GiB → 28 GiB | 56,819 → 57,012 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                                  |
|  +0.3% |  +92.029 MiB |         75.5% |   27.9 GiB → 28 GiB | 56,819 → 57,012 | `forEach(BiConsumer)`                                | `java.util.HashMap`                                  |
|  +0.2% |  +87.529 MiB |         99.4% |            36.8 GiB | 74,963 → 75,147 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                 |
|  +0.2% |  +86.529 MiB |         99.4% |            36.8 GiB | 74,968 → 75,150 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                  |
|  +0.2% |  +86.529 MiB |         99.4% |            36.8 GiB | 74,968 → 75,150 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|  +0.2% |  +86.529 MiB |         99.4% |            36.8 GiB | 74,968 → 75,150 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                  |
|  +0.2% |  +86.529 MiB |         99.4% |            36.8 GiB | 74,968 → 75,150 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                  |
|  +0.2% |  +86.529 MiB |         99.4% |            36.8 GiB | 74,968 → 75,150 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`          |
|  +0.4% |  +62.999 MiB | 38.9% → 39.0% | 14.4 GiB → 14.5 GiB | 29,480 → 29,606 | `toArray()`                                          | `java.util.ArrayList`                                |
|  +0.1% |  +22.529 MiB | 52.6% → 52.5% | 19.4 GiB → 19.5 GiB | 39,503 → 39,557 | `grow(int)`                                          | `java.util.ArrayList`                                |
| +20.8% |  +19.999 MiB |          0.3% |    96 MiB → 116 MiB |       192 → 232 | `resize()`                                           | `java.util.HashMap`                                  |
|    new |  +11.999 MiB |  0.0% → <0.1% |        0 B → 12 MiB |          0 → 24 | `newInvokeSpecial(Object, int, int, Object)`         | `java.lang.invoke.LambdaForm$DMH.0x0000008801126400` |
|    new |  +11.999 MiB |  0.0% → <0.1% |        0 B → 12 MiB |          0 → 24 | `linkToTargetMethod(int, int, Object, Object)`       | `java.lang.invoke.LambdaForm$MH.0x0000008801126c00`  |
|  +4.0% |   +6.499 MiB |          0.4% |   161 MiB → 168 MiB |       323 → 336 | `putVal(int, Object, Object, boolean, boolean)`      | `java.util.HashMap`                                  |
| +22.0% |   +6.499 MiB |          0.1% |   29.5 MiB → 36 MiB |         59 → 72 | `builder(long, IntFunction)`                         | `java.util.stream.Nodes`                             |
| +22.0% |   +6.499 MiB |          0.1% |   29.5 MiB → 36 MiB |         59 → 72 | `makeNodeBuilder(long, IntFunction)`                 | `java.util.stream.ReferencePipeline`                 |

##### Ours

|  Change |       Delta |             % |                Size |         Samples | Function                                                    | Location                                                               |
| ------: | ----------: | ------------: | ------------------: | --------------: | ----------------------------------------------------------- | ---------------------------------------------------------------------- |
|   +0.3% | +93.029 MiB |         75.5% |   27.9 GiB → 28 GiB | 56,815 → 57,010 | `lambda$merge$6(List, List)`                                | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   +0.3% | +93.029 MiB |         75.5% |   27.9 GiB → 28 GiB | 56,815 → 57,010 | `apply(Object, Object)`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000008801186fd0` |
|   +0.3% | +92.029 MiB |         75.5% |   27.9 GiB → 28 GiB | 56,819 → 57,012 | `lambda$merge$7(Map, Object, List)`                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   +0.3% | +92.029 MiB |         75.5% |   27.9 GiB → 28 GiB | 56,819 → 57,012 | `accept(Object, Object)`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000008801186d88` |
|   +0.3% | +88.529 MiB |         76.1% | 28.1 GiB → 28.2 GiB | 57,297 → 57,483 | `merge(Map, Map)`                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   +0.3% | +88.529 MiB |         76.1% | 28.1 GiB → 28.2 GiB | 57,291 → 57,477 | `combineResults(Map, Map)`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   +0.3% | +88.529 MiB |         76.1% | 28.1 GiB → 28.2 GiB | 57,291 → 57,477 | `combineResults(Object, Object)`                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   +0.2% | +87.529 MiB |         99.4% |            36.8 GiB | 74,963 → 75,147 | `compute()`                                                 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|   +0.4% | +30.499 MiB |         22.0% | 8.13 GiB → 8.16 GiB | 16,660 → 16,721 | `computeDirectly()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   +1.6% | +27.999 MiB |          4.6% | 1.68 GiB → 1.71 GiB |   3,446 → 3,502 | `findNearestCentroid()`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   +2.4% |  +4.999 MiB |          0.6% |   208 MiB → 213 MiB |       411 → 421 | `main(String[])`                                            | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +30.3% |  +4.999 MiB |  <0.1% → 0.1% | 16.5 MiB → 21.5 MiB |         33 → 43 | `apply(int)`                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000008801125d48` |
|  +30.3% |  +4.999 MiB |  <0.1% → 0.1% | 16.5 MiB → 21.5 MiB |         33 → 43 | `lambda$generateData$4(int)`                                | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   +2.1% |  +4.499 MiB |          0.6% |   212 MiB → 217 MiB |       419 → 428 | `launchHarnessClass(String, String[])`                      | `org.renaissance.core.Launcher`                                        |
|   +2.1% |  +4.499 MiB |          0.6% |   212 MiB → 217 MiB |       419 → 428 | `main(String[])`                                            | `org.renaissance.core.Launcher`                                        |
|   +2.1% |  +4.499 MiB |          0.6% |   212 MiB → 216 MiB |       418 → 427 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`                                        |
|   +1.9% |  +3.999 MiB |          0.6% |   212 MiB → 216 MiB |       418 → 426 | `main(String[])`                                            | `org.renaissance.harness.RenaissanceSuite`                             |
| +350.0% |  +3.499 MiB |         <0.1% |     1 MiB → 4.5 MiB |           2 → 9 | `parse(String[])`                                           | `org.renaissance.harness.ConfigParser`                                 |
|     ~0% |  +2.499 MiB | 17.5% → 17.4% |            6.45 GiB | 13,214 → 13,219 | `collectClusters(int[])`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  +23.8% |  +2.499 MiB |         <0.1% |   10.5 MiB → 13 MiB |         21 → 26 | `createSubtask(int, int)`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                Size |         Samples | Function                                                  | Location                                                               |
| ------: | -----------: | ------------: | ------------------: | --------------: | --------------------------------------------------------- | ---------------------------------------------------------------------- |
| removed |  -211.96 MiB |   0.6% → 0.0% |       212 MiB → 0 B |         418 → 0 | `invokeStatic(Object, Object)`                            | `java.lang.invoke.LambdaForm$DMH.0x000000e801004800`                   |
| removed |  -211.96 MiB |   0.6% → 0.0% |       212 MiB → 0 B |         418 → 0 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x000000e801009800`                    |
|   -2.6% | -143.499 MiB | 14.5% → 14.1% | 5.38 GiB → 5.24 GiB | 11,016 → 10,729 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                                    |
|   -0.9% |  -72.969 MiB | 20.9% → 20.6% | 7.72 GiB → 7.65 GiB | 15,495 → 15,358 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                                    |
|   -0.2% |  -67.999 MiB | 78.6% → 78.3% |   29.1 GiB → 29 GiB | 59,545 → 59,409 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|   -0.6% |  -44.469 MiB | 20.4% → 20.3% | 7.56 GiB → 7.51 GiB | 15,159 → 15,079 | `lambda$run$0(int, List, int)`                            | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -0.6% |  -44.469 MiB | 20.4% → 20.3% | 7.56 GiB → 7.51 GiB | 15,159 → 15,079 | `call()`                                                  | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000008801183d68` |
|   -0.6% |  -44.469 MiB | 20.4% → 20.3% | 7.56 GiB → 7.51 GiB | 15,159 → 15,079 | `exec()`                                                  | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                    |
|   -0.1% |  -41.999 MiB | 79.4% → 79.1% | 29.4 GiB → 29.3 GiB | 60,144 → 60,060 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                                    |
|   -0.1% |  -41.999 MiB | 79.4% → 79.1% | 29.4 GiB → 29.3 GiB | 60,144 → 60,060 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                                    |
|  -13.6% |  -24.499 MiB |   0.5% → 0.4% |   180 MiB → 156 MiB |       361 → 312 | `average(List)`                                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -12.4% |  -24.499 MiB |          0.5% |   197 MiB → 172 MiB |       394 → 345 | `computeClusterAverages()`                                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -12.4% |  -24.499 MiB |          0.5% |   197 MiB → 172 MiB |       394 → 345 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   -0.1% |   -17.47 MiB | 56.4% → 56.2% | 20.9 GiB → 20.8 GiB | 42,392 → 42,366 | `addAll(Collection)`                                      | `java.util.ArrayList`                                                  |
|  -15.5% |  -13.499 MiB |          0.2% |   87 MiB → 73.5 MiB |       174 → 147 | `vectorSum()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -15.5% |  -13.499 MiB |          0.2% |   87 MiB → 73.5 MiB |       174 → 147 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   -7.9% |  -12.999 MiB |          0.4% |   164 MiB → 151 MiB |       328 → 302 | `createSubtask(int, int)`                                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   -7.6% |  -10.999 MiB |          0.4% |   145 MiB → 134 MiB |       290 → 268 | `createSubtask(int, int)`                                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed |   -9.999 MiB |  <0.1% → 0.0% |        10 MiB → 0 B |          20 → 0 | `newInvokeSpecial(Object, int, int, Object)`              | `java.lang.invoke.LambdaForm$DMH.0x000000e801126400`                   |
| removed |   -9.999 MiB |  <0.1% → 0.0% |        10 MiB → 0 B |          20 → 0 | `linkToTargetMethod(int, int, Object, Object)`            | `java.lang.invoke.LambdaForm$MH.0x000000e801126c00`                    |

##### Standard library

|  Change |        Delta |             % |                Size |         Samples | Function                                                  | Location                                                 |
| ------: | -----------: | ------------: | ------------------: | --------------: | --------------------------------------------------------- | -------------------------------------------------------- |
| removed |  -211.96 MiB |   0.6% → 0.0% |       212 MiB → 0 B |         418 → 0 | `invokeStatic(Object, Object)`                            | `java.lang.invoke.LambdaForm$DMH.0x000000e801004800`     |
| removed |  -211.96 MiB |   0.6% → 0.0% |       212 MiB → 0 B |         418 → 0 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x000000e801009800`      |
|   -2.6% | -143.499 MiB | 14.5% → 14.1% | 5.38 GiB → 5.24 GiB | 11,016 → 10,729 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                      |
|   -0.9% |  -72.969 MiB | 20.9% → 20.6% | 7.72 GiB → 7.65 GiB | 15,495 → 15,358 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                      |
|   -0.2% |  -67.999 MiB | 78.6% → 78.3% |   29.1 GiB → 29 GiB | 59,545 → 59,409 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`            |
|   -0.6% |  -44.469 MiB | 20.4% → 20.3% | 7.56 GiB → 7.51 GiB | 15,159 → 15,079 | `exec()`                                                  | `java.util.concurrent.ForkJoinTask$AdaptedCallable`      |
|   -0.1% |  -41.999 MiB | 79.4% → 79.1% | 29.4 GiB → 29.3 GiB | 60,144 → 60,060 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                      |
|   -0.1% |  -41.999 MiB | 79.4% → 79.1% | 29.4 GiB → 29.3 GiB | 60,144 → 60,060 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                      |
|   -0.1% |   -17.47 MiB | 56.4% → 56.2% | 20.9 GiB → 20.8 GiB | 42,392 → 42,366 | `addAll(Collection)`                                      | `java.util.ArrayList`                                    |
| removed |   -9.999 MiB |  <0.1% → 0.0% |        10 MiB → 0 B |          20 → 0 | `newInvokeSpecial(Object, int, int, Object)`              | `java.lang.invoke.LambdaForm$DMH.0x000000e801126400`     |
| removed |   -9.999 MiB |  <0.1% → 0.0% |        10 MiB → 0 B |          20 → 0 | `linkToTargetMethod(int, int, Object, Object)`            | `java.lang.invoke.LambdaForm$MH.0x000000e801126c00`      |
|   -3.0% |   -7.999 MiB |          0.7% |   269 MiB → 261 MiB |       538 → 522 | `newNode(int, Object, Object, HashMap$Node)`              | `java.util.HashMap`                                      |
|  -83.2% |   -4.961 MiB |         <0.1% |    5.96 MiB → 1 MiB |           6 → 2 | `accept(Object, Object)`                                  | `java.util.stream.Collectors$$Lambda.0x0000008801062690` |
|  -22.9% |   -3.999 MiB |         <0.1% | 17.5 MiB → 13.5 MiB |         29 → 21 | `copyOf(Object[], int, Class)`                            | `java.util.Arrays`                                       |
|   -6.3% |   -3.999 MiB |          0.2% |     63 MiB → 59 MiB |       126 → 118 | `valueOf(double)`                                         | `java.lang.Double`                                       |
|  -11.4% |   -3.999 MiB |          0.1% |     35 MiB → 31 MiB |         70 → 62 | `mapToObj(IntFunction, int)`                              | `java.util.stream.IntPipeline`                           |
|  -11.4% |   -3.999 MiB |          0.1% |     35 MiB → 31 MiB |         70 → 62 | `mapToObj(IntFunction)`                                   | `java.util.stream.IntPipeline`                           |
|  -24.1% |   -3.499 MiB |         <0.1% |   14.5 MiB → 11 MiB |         29 → 22 | `entrySet()`                                              | `java.util.HashMap`                                      |
|  -50.0% |   -2.499 MiB |         <0.1% |     5 MiB → 2.5 MiB |          10 → 5 | `map(Function1)`                                          | `scala.collection.immutable.Range`                       |
| removed |   -2.499 MiB |  <0.1% → 0.0% |       2.5 MiB → 0 B |           5 → 0 | `newInvokeSpecial(Object, Object, int, Object, int)`      | `java.lang.invoke.LambdaForm$DMH.0x000000e801184400`     |

##### Ours

|  Change |          Delta |             % |                Size |         Samples | Function                                         | Location                                                               |
| ------: | -------------: | ------------: | ------------------: | --------------: | ------------------------------------------------ | ---------------------------------------------------------------------- |
|   -0.6% |    -44.469 MiB | 20.4% → 20.3% | 7.56 GiB → 7.51 GiB | 15,159 → 15,079 | `lambda$run$0(int, List, int)`                   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -0.6% |    -44.469 MiB | 20.4% → 20.3% | 7.56 GiB → 7.51 GiB | 15,159 → 15,079 | `call()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000008801183d68` |
|  -13.6% |    -24.499 MiB |   0.5% → 0.4% |   180 MiB → 156 MiB |       361 → 312 | `average(List)`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -12.4% |    -24.499 MiB |          0.5% |   197 MiB → 172 MiB |       394 → 345 | `computeClusterAverages()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -12.4% |    -24.499 MiB |          0.5% |   197 MiB → 172 MiB |       394 → 345 | `computeDirectly()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -15.5% |    -13.499 MiB |          0.2% |   87 MiB → 73.5 MiB |       174 → 147 | `vectorSum()`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -15.5% |    -13.499 MiB |          0.2% |   87 MiB → 73.5 MiB |       174 → 147 | `computeDirectly()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   -7.9% |    -12.999 MiB |          0.4% |   164 MiB → 151 MiB |       328 → 302 | `createSubtask(int, int)`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   -7.6% |    -10.999 MiB |          0.4% |   145 MiB → 134 MiB |       290 → 268 | `createSubtask(int, int)`                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -5.9% |     -3.499 MiB |   0.2% → 0.1% |   59 MiB → 55.5 MiB |       118 → 111 | `apply(int)`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000008801125b10` |
|   -5.9% |     -3.499 MiB |   0.2% → 0.1% |   59 MiB → 55.5 MiB |       118 → 111 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -66.7% |     -1.999 MiB |         <0.1% |       3 MiB → 1 MiB |           6 → 2 | `run(int, List, int)`                            | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -66.7% |     -1.999 MiB |         <0.1% |       3 MiB → 1 MiB |           6 → 2 | `$anonfun$1(int)`                                | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  -66.7% |     -1.999 MiB |         <0.1% |       3 MiB → 1 MiB |           6 → 2 | `$anonfun$adapted$1(Object)`                     | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  -66.7% |     -1.999 MiB |         <0.1% |       3 MiB → 1 MiB |           6 → 2 | `apply(Object)`                                  | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000880117ae68`   |
|   -0.8% |     -1.499 MiB |          0.5% |   184 MiB → 183 MiB |       363 → 360 | `setUpBeforeAll(BenchmarkContext)`               | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|   -0.8% |     -1.499 MiB |          0.5% |   178 MiB → 176 MiB |       356 → 353 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -0.8% |     -1.499 MiB |          0.5% |   178 MiB → 176 MiB |       356 → 353 | `apply(int)`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000088011258d8` |
| removed | -1,023.998 KiB |  <0.1% → 0.0% |         1 MiB → 0 B |           2 → 0 | `<init>(JavaKMeans, Map)`                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -50.0% | -1,023.998 KiB |         <0.1% |       2 MiB → 1 MiB |           4 → 2 | `createHandler()`                                | `org.renaissance.core.Logging`                                         |

# Retained heap profile diff

Retained 7.06 MiB → 18.7 MiB (+11.629 MiB, +164.8%) over 267 objects → 499 objects (27.1 KiB → 38.3 KiB per object).

| Category         |  Change |       Delta |     % |                Size |   Objects |
| ---------------- | ------: | ----------: | ----: | ------------------: | --------: |
| Standard library | +164.7% | +11.609 MiB | 99.9% | 7.05 MiB → 18.7 MiB | 220 → 431 |
| Ours             | +259.7% | +19.679 KiB |  0.1% | 7.58 KiB → 27.3 KiB |   47 → 68 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

|  Change |        Delta |             % |                Size |  Objects | Function                                                       | Location                                                   |
| ------: | -----------: | ------------: | ------------------: | -------: | -------------------------------------------------------------- | ---------------------------------------------------------- |
| +227.8% |  +11.361 MiB | 70.6% → 87.5% | 4.99 MiB → 16.3 MiB | 92 → 305 | `copyOf(Object[], int)`                                        | `java.util.Arrays`                                         |
|     new | +255.085 KiB |   0.0% → 1.3% |       0 B → 255 KiB |    0 → 1 | `initCEN(int, ZipCoder)`                                       | `java.util.zip.ZipFile$Source`                             |
| +333.0% |   +19.25 KiB |          0.1% |   5.78 KiB → 25 KiB |   3 → 13 | `findNearestCentroid()`                                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +30.3% |       +400 B |         <0.1% | 1.29 KiB → 1.68 KiB |  33 → 43 | `lambda$generateData$4(int)`                                   | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|     new |       +128 B |  0.0% → <0.1% |         0 B → 128 B |    0 → 4 | `newNode(int, Object, Object, HashMap$Node)`                   | `java.util.HashMap`                                        |
| +100.0% |        +56 B |         <0.1% |        56 B → 112 B |    1 → 2 | `grow(int)`                                                    | `java.util.ArrayList`                                      |
|  +25.0% |        +48 B |         <0.1% |       192 B → 240 B |    4 → 5 | `collectClusters(int[])`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     new |        +48 B |  0.0% → <0.1% |          0 B → 48 B |    0 → 2 | `lambda$collectClusters$0(Double[])`                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     new |        +48 B |  0.0% → <0.1% |          0 B → 48 B |    0 → 1 | `resize()`                                                     | `java.util.HashMap`                                        |
|     new |        +48 B |  0.0% → <0.1% |          0 B → 48 B |    0 → 1 | `createSubtask(int, int)`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|     new |        +32 B |  0.0% → <0.1% |          0 B → 32 B |    0 → 1 | `compress(char[], int, int)`                                   | `java.lang.StringUTF16`                                    |
|     new |        +32 B |  0.0% → <0.1% |          0 B → 32 B |    0 → 1 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])` | `java.util.concurrent.ConcurrentHashMap`                   |
|     new |        +24 B |  0.0% → <0.1% |          0 B → 24 B |    0 → 1 | `<clinit>()`                                                   | `scala.reflect.ManifestFactory$`                           |
|  +40.0% |        +16 B |         <0.1% |         40 B → 56 B |        1 | `copyOfRangeByte(byte[], int, int)`                            | `java.util.Arrays`                                         |
|     new |        +16 B |  0.0% → <0.1% |          0 B → 16 B |    0 → 1 | `read(InputStream, String)`                                    | `java.util.jar.Manifest`                                   |

##### Standard library

|  Change |        Delta |             % |                Size |  Objects | Function                                                       | Location                                 |
| ------: | -----------: | ------------: | ------------------: | -------: | -------------------------------------------------------------- | ---------------------------------------- |
| +227.8% |  +11.361 MiB | 70.6% → 87.5% | 4.99 MiB → 16.3 MiB | 92 → 305 | `copyOf(Object[], int)`                                        | `java.util.Arrays`                       |
|     new | +255.085 KiB |   0.0% → 1.3% |       0 B → 255 KiB |    0 → 1 | `initCEN(int, ZipCoder)`                                       | `java.util.zip.ZipFile$Source`           |
|     new |       +128 B |  0.0% → <0.1% |         0 B → 128 B |    0 → 4 | `newNode(int, Object, Object, HashMap$Node)`                   | `java.util.HashMap`                      |
| +100.0% |        +56 B |         <0.1% |        56 B → 112 B |    1 → 2 | `grow(int)`                                                    | `java.util.ArrayList`                    |
|     new |        +48 B |  0.0% → <0.1% |          0 B → 48 B |    0 → 1 | `resize()`                                                     | `java.util.HashMap`                      |
|     new |        +32 B |  0.0% → <0.1% |          0 B → 32 B |    0 → 1 | `compress(char[], int, int)`                                   | `java.lang.StringUTF16`                  |
|     new |        +32 B |  0.0% → <0.1% |          0 B → 32 B |    0 → 1 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])` | `java.util.concurrent.ConcurrentHashMap` |
|     new |        +24 B |  0.0% → <0.1% |          0 B → 24 B |    0 → 1 | `<clinit>()`                                                   | `scala.reflect.ManifestFactory$`         |
|  +40.0% |        +16 B |         <0.1% |         40 B → 56 B |        1 | `copyOfRangeByte(byte[], int, int)`                            | `java.util.Arrays`                       |
|     new |        +16 B |  0.0% → <0.1% |          0 B → 16 B |    0 → 1 | `read(InputStream, String)`                                    | `java.util.jar.Manifest`                 |

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

|  Change |  Delta |            % |               Size |   Objects | Function                                                                        | Location                                                   |
| ------: | -----: | -----------: | -----------------: | --------: | ------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| removed | -584 B | <0.1% → 0.0% |        584 B → 0 B |     1 → 0 | `load(DataInputStream)`                                                         | `sun.util.calendar.ZoneInfoFile`                           |
|   -5.9% | -168 B |        <0.1% | 2.77 KiB → 2.6 KiB | 118 → 111 | `valueOf(double)`                                                               | `java.lang.Double`                                         |
| removed | -120 B | <0.1% → 0.0% |        120 B → 0 B |     1 → 0 | `<init>(MethodType)`                                                            | `java.lang.invoke.MethodTypeForm`                          |
|  -50.0% |  -64 B |        <0.1% |       128 B → 64 B |     2 → 1 | `newLinkedHashMap(int)`                                                         | `java.util.LinkedHashMap`                                  |
|  -25.0% |  -56 B |        <0.1% |      224 B → 168 B |     4 → 3 | `createSubtask(int, int)`                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |  -24 B | <0.1% → 0.0% |         24 B → 0 B |     1 → 0 | `lambda$merge$6(List, List)`                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |  -24 B | <0.1% → 0.0% |         24 B → 0 B |     1 → 0 | `parseName(byte[], int)`                                                        | `java.util.jar.Manifest`                                   |
| removed |  -24 B | <0.1% → 0.0% |         24 B → 0 B |     1 → 0 | `collectGarbage(String)`                                                        | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`   |
| removed |  -16 B | <0.1% → 0.0% |         16 B → 0 B |     1 → 0 | `$init$$$anonfun$1(int)`                                                        | `scala.runtime.LazyVals$`                                  |
| removed |  -16 B | <0.1% → 0.0% |         16 B → 0 B |     1 → 0 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                                    |

##### Standard library

|  Change |  Delta |            % |               Size |   Objects | Function                                                                        | Location                          |
| ------: | -----: | -----------: | -----------------: | --------: | ------------------------------------------------------------------------------- | --------------------------------- |
| removed | -584 B | <0.1% → 0.0% |        584 B → 0 B |     1 → 0 | `load(DataInputStream)`                                                         | `sun.util.calendar.ZoneInfoFile`  |
|   -5.9% | -168 B |        <0.1% | 2.77 KiB → 2.6 KiB | 118 → 111 | `valueOf(double)`                                                               | `java.lang.Double`                |
| removed | -120 B | <0.1% → 0.0% |        120 B → 0 B |     1 → 0 | `<init>(MethodType)`                                                            | `java.lang.invoke.MethodTypeForm` |
|  -50.0% |  -64 B |        <0.1% |       128 B → 64 B |     2 → 1 | `newLinkedHashMap(int)`                                                         | `java.util.LinkedHashMap`         |
| removed |  -24 B | <0.1% → 0.0% |         24 B → 0 B |     1 → 0 | `parseName(byte[], int)`                                                        | `java.util.jar.Manifest`          |
| removed |  -16 B | <0.1% → 0.0% |         16 B → 0 B |     1 → 0 | `$init$$$anonfun$1(int)`                                                        | `scala.runtime.LazyVals$`         |
| removed |  -16 B | <0.1% → 0.0% |         16 B → 0 B |     1 → 0 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`           |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

|  Change |       Delta |             % |                Size |   Objects | Function                                             | Location                                                               |
| ------: | ----------: | ------------: | ------------------: | --------: | ---------------------------------------------------- | ---------------------------------------------------------------------- |
| +227.9% |  +11.38 MiB | 70.7% → 87.6% | 4.99 MiB → 16.4 MiB | 106 → 335 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| +227.9% |  +11.38 MiB | 70.7% → 87.6% | 4.99 MiB → 16.4 MiB | 106 → 335 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                                   |
| +227.9% |  +11.38 MiB | 70.7% → 87.6% | 4.99 MiB → 16.4 MiB | 106 → 335 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                                    |
| +227.9% |  +11.38 MiB | 70.7% → 87.6% | 4.99 MiB → 16.4 MiB | 106 → 335 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
| +227.9% |  +11.38 MiB | 70.7% → 87.6% | 4.99 MiB → 16.4 MiB | 106 → 335 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                                    |
| +227.9% |  +11.38 MiB | 70.7% → 87.6% | 4.99 MiB → 16.4 MiB | 106 → 335 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                                    |
| +227.9% |  +11.38 MiB | 70.7% → 87.6% | 4.99 MiB → 16.4 MiB | 106 → 335 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                            |
| +161.2% | +11.361 MiB | 99.8% → 98.5% | 7.05 MiB → 18.4 MiB |  93 → 306 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                                     |
| +227.7% | +11.345 MiB | 70.6% → 87.4% | 4.98 MiB → 16.3 MiB |  78 → 252 | `merge(Map, Map)`                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| +227.7% | +11.345 MiB | 70.6% → 87.4% | 4.98 MiB → 16.3 MiB |  78 → 252 | `combineResults(Map, Map)`                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| +227.7% | +11.345 MiB | 70.6% → 87.4% | 4.98 MiB → 16.3 MiB |  78 → 252 | `combineResults(Object, Object)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| +227.7% | +11.344 MiB | 70.6% → 87.4% | 4.98 MiB → 16.3 MiB |  78 → 249 | `lambda$merge$6(List, List)`                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| +227.7% | +11.344 MiB | 70.6% → 87.4% | 4.98 MiB → 16.3 MiB |  78 → 249 | `apply(Object, Object)`                              | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000008801186fd0` |
| +227.7% | +11.344 MiB | 70.6% → 87.4% | 4.98 MiB → 16.3 MiB |  78 → 249 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                                                    |
| +227.7% | +11.344 MiB | 70.6% → 87.4% | 4.98 MiB → 16.3 MiB |  78 → 249 | `lambda$merge$7(Map, Object, List)`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| +227.7% | +11.344 MiB | 70.6% → 87.4% | 4.98 MiB → 16.3 MiB |  78 → 249 | `accept(Object, Object)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000008801186d88` |
| +227.7% | +11.344 MiB | 70.6% → 87.4% | 4.98 MiB → 16.3 MiB |  78 → 249 | `forEach(BiConsumer)`                                | `java.util.HashMap`                                                    |
| +216.8% |  +9.081 MiB | 59.4% → 71.0% | 4.19 MiB → 13.3 MiB |  59 → 184 | `addAll(Collection)`                                 | `java.util.ArrayList`                                                  |
| +254.7% |  +7.709 MiB | 42.9% → 57.5% | 3.03 MiB → 10.7 MiB |   27 → 77 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                                    |
| +254.7% |  +7.709 MiB | 42.9% → 57.5% | 3.03 MiB → 10.7 MiB |   26 → 75 | `lambda$run$0(int, List, int)`                       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |

##### Standard library

|  Change |       Delta |             % |                Size |   Objects | Function                                             | Location                                             |
| ------: | ----------: | ------------: | ------------------: | --------: | ---------------------------------------------------- | ---------------------------------------------------- |
| +227.9% |  +11.38 MiB | 70.7% → 87.6% | 4.99 MiB → 16.4 MiB | 106 → 335 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                 |
| +227.9% |  +11.38 MiB | 70.7% → 87.6% | 4.99 MiB → 16.4 MiB | 106 → 335 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                  |
| +227.9% |  +11.38 MiB | 70.7% → 87.6% | 4.99 MiB → 16.4 MiB | 106 → 335 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
| +227.9% |  +11.38 MiB | 70.7% → 87.6% | 4.99 MiB → 16.4 MiB | 106 → 335 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                  |
| +227.9% |  +11.38 MiB | 70.7% → 87.6% | 4.99 MiB → 16.4 MiB | 106 → 335 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                  |
| +227.9% |  +11.38 MiB | 70.7% → 87.6% | 4.99 MiB → 16.4 MiB | 106 → 335 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`          |
| +161.2% | +11.361 MiB | 99.8% → 98.5% | 7.05 MiB → 18.4 MiB |  93 → 306 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                   |
| +227.7% | +11.344 MiB | 70.6% → 87.4% | 4.98 MiB → 16.3 MiB |  78 → 249 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                                  |
| +227.7% | +11.344 MiB | 70.6% → 87.4% | 4.98 MiB → 16.3 MiB |  78 → 249 | `forEach(BiConsumer)`                                | `java.util.HashMap`                                  |
| +216.8% |  +9.081 MiB | 59.4% → 71.0% | 4.19 MiB → 13.3 MiB |  59 → 184 | `addAll(Collection)`                                 | `java.util.ArrayList`                                |
| +254.7% |  +7.709 MiB | 42.9% → 57.5% | 3.03 MiB → 10.7 MiB |   27 → 77 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                  |
| +254.7% |  +7.709 MiB | 42.9% → 57.5% | 3.03 MiB → 10.7 MiB |   26 → 75 | `exec()`                                             | `java.util.concurrent.ForkJoinTask$AdaptedCallable`  |
| +136.6% |   +7.13 MiB | 73.9% → 66.1% | 5.22 MiB → 12.3 MiB |  54 → 180 | `grow(int)`                                          | `java.util.ArrayList`                                |
| +231.3% |  +4.231 MiB | 25.9% → 32.4% | 1.83 MiB → 6.06 MiB |  40 → 128 | `toArray()`                                          | `java.util.ArrayList`                                |
| +412.4% |  +3.607 MiB | 12.4% → 24.0% |  896 KiB → 4.48 MiB |  79 → 261 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                  |
| +412.4% |  +3.607 MiB | 12.4% → 24.0% |  896 KiB → 4.48 MiB |  79 → 261 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                  |
| +411.0% |  +3.595 MiB | 12.4% → 23.9% |  896 KiB → 4.47 MiB |  79 → 260 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|     new |  +2.314 MiB |  0.0% → 12.4% |      0 B → 2.31 MiB |   0 → 162 | `invokeStatic(Object, Object)`                       | `java.lang.invoke.LambdaForm$DMH.0x0000008801004800` |
|     new |  +2.314 MiB |  0.0% → 12.4% |      0 B → 2.31 MiB |   0 → 162 | `invoke(Object, Object, Object)`                     | `java.lang.invoke.LambdaForm$MH.0x0000008801009800`  |
| +285.8% |  +2.263 MiB | 11.2% → 16.3% |  811 KiB → 3.06 MiB |   18 → 65 | `<init>(Collection)`                                 | `java.util.ArrayList`                                |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

|  Change |      Delta |            % |                Size |  Objects | Function                                                           | Location                                                               |
| ------: | ---------: | -----------: | ------------------: | -------: | ------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| removed | -2.065 MiB | 29.3% → 0.0% |      2.07 MiB → 0 B |  160 → 0 | `invokeStatic(Object, Object)`                                     | `java.lang.invoke.LambdaForm$DMH.0x000000e801004800`                   |
| removed | -2.065 MiB | 29.3% → 0.0% |      2.07 MiB → 0 B |  160 → 0 | `invoke(Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$MH.0x000000e801009800`                    |
|  -39.3% | -1.085 KiB |        <0.1% | 2.77 KiB → 1.68 KiB | 118 → 43 | `apply(int)`                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000008801125d48` |
|  -94.5% |     -552 B |        <0.1% |        584 B → 32 B |        1 | `load(DataInputStream)`                                            | `sun.util.calendar.ZoneInfoFile`                                       |
|  -94.5% |     -552 B |        <0.1% |        584 B → 32 B |        1 | `run()`                                                            | `sun.util.calendar.ZoneInfoFile$1`                                     |
|  -94.5% |     -552 B |        <0.1% |        584 B → 32 B |        1 | `executePrivileged(PrivilegedAction, AccessControlContext, Class)` | `java.security.AccessController`                                       |
|  -94.5% |     -552 B |        <0.1% |        584 B → 32 B |        1 | `doPrivileged(PrivilegedAction)`                                   | `java.security.AccessController`                                       |
|  -94.5% |     -552 B |        <0.1% |        584 B → 32 B |        1 | `loadTZDB()`                                                       | `sun.util.calendar.ZoneInfoFile`                                       |
|  -94.5% |     -552 B |        <0.1% |        584 B → 32 B |        1 | `<clinit>()`                                                       | `sun.util.calendar.ZoneInfoFile`                                       |
|  -94.5% |     -552 B |        <0.1% |        584 B → 32 B |        1 | `getTimeZone(String)`                                              | `sun.util.calendar.ZoneInfo`                                           |
|  -94.5% |     -552 B |        <0.1% |        584 B → 32 B |        1 | `getTimeZone(String, boolean)`                                     | `java.util.TimeZone`                                                   |
|  -94.5% |     -552 B |        <0.1% |        584 B → 32 B |        1 | `setDefaultZone()`                                                 | `java.util.TimeZone`                                                   |
|  -94.5% |     -552 B |        <0.1% |        584 B → 32 B |        1 | `getDefaultRef()`                                                  | `java.util.TimeZone`                                                   |
|  -94.5% |     -552 B |        <0.1% |        584 B → 32 B |        1 | `getDefault()`                                                     | `java.util.TimeZone`                                                   |
|  -94.5% |     -552 B |        <0.1% |        584 B → 32 B |        1 | `systemDefault()`                                                  | `java.time.ZoneId`                                                     |
|  -94.5% |     -552 B |        <0.1% |        584 B → 32 B |        1 | `systemDefaultZone()`                                              | `java.time.Clock`                                                      |
|  -94.5% |     -552 B |        <0.1% |        584 B → 32 B |        1 | `now()`                                                            | `java.time.ZonedDateTime`                                              |
|  -94.5% |     -552 B |        <0.1% |        584 B → 32 B |        1 | `getSimpleFormat(String, Function)`                                | `jdk.internal.logger.SimpleConsoleLogger$Formatting`                   |
|  -94.5% |     -552 B |        <0.1% |        584 B → 32 B |        1 | `getSimpleFormat(Function)`                                        | `jdk.internal.logger.SurrogateLogger`                                  |
|  -94.5% |     -552 B |        <0.1% |        584 B → 32 B |        1 | `<init>()`                                                         | `java.util.logging.SimpleFormatter`                                    |

##### Standard library

|  Change |      Delta |            % |               Size |   Objects | Function                                                           | Location                                             |
| ------: | ---------: | -----------: | -----------------: | --------: | ------------------------------------------------------------------ | ---------------------------------------------------- |
| removed | -2.065 MiB | 29.3% → 0.0% |     2.07 MiB → 0 B |   160 → 0 | `invokeStatic(Object, Object)`                                     | `java.lang.invoke.LambdaForm$DMH.0x000000e801004800` |
| removed | -2.065 MiB | 29.3% → 0.0% |     2.07 MiB → 0 B |   160 → 0 | `invoke(Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$MH.0x000000e801009800`  |
|  -94.5% |     -552 B |        <0.1% |       584 B → 32 B |         1 | `load(DataInputStream)`                                            | `sun.util.calendar.ZoneInfoFile`                     |
|  -94.5% |     -552 B |        <0.1% |       584 B → 32 B |         1 | `run()`                                                            | `sun.util.calendar.ZoneInfoFile$1`                   |
|  -94.5% |     -552 B |        <0.1% |       584 B → 32 B |         1 | `executePrivileged(PrivilegedAction, AccessControlContext, Class)` | `java.security.AccessController`                     |
|  -94.5% |     -552 B |        <0.1% |       584 B → 32 B |         1 | `doPrivileged(PrivilegedAction)`                                   | `java.security.AccessController`                     |
|  -94.5% |     -552 B |        <0.1% |       584 B → 32 B |         1 | `loadTZDB()`                                                       | `sun.util.calendar.ZoneInfoFile`                     |
|  -94.5% |     -552 B |        <0.1% |       584 B → 32 B |         1 | `<clinit>()`                                                       | `sun.util.calendar.ZoneInfoFile`                     |
|  -94.5% |     -552 B |        <0.1% |       584 B → 32 B |         1 | `getTimeZone(String)`                                              | `sun.util.calendar.ZoneInfo`                         |
|  -94.5% |     -552 B |        <0.1% |       584 B → 32 B |         1 | `getTimeZone(String, boolean)`                                     | `java.util.TimeZone`                                 |
|  -94.5% |     -552 B |        <0.1% |       584 B → 32 B |         1 | `setDefaultZone()`                                                 | `java.util.TimeZone`                                 |
|  -94.5% |     -552 B |        <0.1% |       584 B → 32 B |         1 | `getDefaultRef()`                                                  | `java.util.TimeZone`                                 |
|  -94.5% |     -552 B |        <0.1% |       584 B → 32 B |         1 | `getDefault()`                                                     | `java.util.TimeZone`                                 |
|  -94.5% |     -552 B |        <0.1% |       584 B → 32 B |         1 | `systemDefault()`                                                  | `java.time.ZoneId`                                   |
|  -94.5% |     -552 B |        <0.1% |       584 B → 32 B |         1 | `systemDefaultZone()`                                              | `java.time.Clock`                                    |
|  -94.5% |     -552 B |        <0.1% |       584 B → 32 B |         1 | `now()`                                                            | `java.time.ZonedDateTime`                            |
|  -94.5% |     -552 B |        <0.1% |       584 B → 32 B |         1 | `getSimpleFormat(String, Function)`                                | `jdk.internal.logger.SimpleConsoleLogger$Formatting` |
|  -94.5% |     -552 B |        <0.1% |       584 B → 32 B |         1 | `getSimpleFormat(Function)`                                        | `jdk.internal.logger.SurrogateLogger`                |
|  -94.5% |     -552 B |        <0.1% |       584 B → 32 B |         1 | `<init>()`                                                         | `java.util.logging.SimpleFormatter`                  |
|   -5.9% |     -168 B |        <0.1% | 2.77 KiB → 2.6 KiB | 118 → 111 | `valueOf(double)`                                                  | `java.lang.Double`                                   |

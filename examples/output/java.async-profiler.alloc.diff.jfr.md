# Allocated heap profile diff

Allocated 3.07 GiB → 3.08 GiB (+7.767 MiB, +0.2%) over 75,363 samples → 75,256 samples (42.7 KiB → 42.9 KiB per sample).

| Category         | Change |        Delta |     % |                Size |         Samples |
| ---------------- | -----: | -----------: | ----: | ------------------: | --------------: |
| Standard library |  +0.3% |     +8.1 MiB | 99.8% | 3.06 GiB → 3.07 GiB | 69,924 → 70,011 |
| Ours             |  -4.9% | -341.539 KiB |  0.2% |  6.83 MiB → 6.5 MiB |   5,439 → 5,245 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|  Change |        Delta |            % |                Size |         Samples | Function                                  | Location                                                   |
| ------: | -----------: | -----------: | ------------------: | --------------: | ----------------------------------------- | ---------------------------------------------------------- |
|   +0.2% |   +7.532 MiB |        99.6% |            3.06 GiB | 68,226 → 68,315 | `copyOf(Object[], int)`                   | `java.util.Arrays`                                         |
|     new | +255.085 KiB | 0.0% → <0.1% |       0 B → 255 KiB |           0 → 1 | `initCEN(int, ZipCoder)`                  | `java.util.zip.ZipFile$Source`                             |
| +264.3% | +217.234 KiB |        <0.1% |  82.2 KiB → 299 KiB |          8 → 14 | `<init>(InputStream, Inflater, int)`      | `java.util.zip.InflaterInputStream`                        |
|  +50.5% |  +136.14 KiB |        <0.1% |   269 KiB → 406 KiB |         21 → 27 | `copyOf(byte[], int)`                     | `java.util.Arrays`                                         |
|     new |   +9.656 KiB | 0.0% → <0.1% |      0 B → 9.66 KiB |           0 → 1 | `<clinit>()`                              | `jdk.internal.math.MathUtils`                              |
|  +20.4% |   +3.062 KiB |        <0.1% |     15 KiB → 18 KiB |       274 → 330 | `createSubtask(int, int)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     new |   +2.671 KiB | 0.0% → <0.1% |      0 B → 2.67 KiB |           0 → 1 | `getDeclaredConstructors0(boolean)`       | `java.lang.Class`                                          |
|   +5.1% |   +1.312 KiB |        <0.1% | 25.5 KiB → 26.9 KiB |       467 → 491 | `grow(int)`                               | `java.util.ArrayList`                                      |
|     new |       +632 B | 0.0% → <0.1% |         0 B → 632 B |           0 → 1 | `<init>(int)`                             | `jdk.internal.org.objectweb.asm.ByteVector`                |
| +260.0% |       +624 B |        <0.1% |       240 B → 864 B |          5 → 18 | `computeClusterAverages()`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| +152.9% |       +416 B |        <0.1% |       272 B → 688 B |           1 → 3 | `fillInStackTrace(int)`                   | `java.lang.Throwable`                                      |
|  +63.6% |       +336 B |        <0.1% |       528 B → 864 B |         11 → 18 | `createSubtask(int, int)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|     new |       +328 B | 0.0% → <0.1% |         0 B → 328 B |           0 → 1 | `load(DataInputStream)`                   | `java.time.zone.TzdbZoneRulesProvider`                     |
|   +8.9% |       +264 B |        <0.1% | 2.88 KiB → 3.14 KiB |       123 → 134 | `valueOf(double)`                         | `java.lang.Double`                                         |
| +150.0% |       +168 B |        <0.1% |       112 B → 280 B |           2 → 5 | `mapToObj(DoubleFunction, int)`           | `java.util.stream.DoublePipeline`                          |
|   +6.1% |       +168 B |        <0.1% | 2.68 KiB → 2.84 KiB |         49 → 52 | `mapToObj(IntFunction, int)`              | `java.util.stream.IntPipeline`                             |
|   +5.8% |       +168 B |        <0.1% | 2.84 KiB → 3.01 KiB |         52 → 55 | `intStream(Spliterator$OfInt, boolean)`   | `java.util.stream.StreamSupport`                           |
|   +9.4% |       +120 B |        <0.1% | 1.25 KiB → 1.37 KiB |         32 → 35 | `lambda$generateData$4(int)`              | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|     new |        +96 B | 0.0% → <0.1% |          0 B → 96 B |           0 → 2 | `allocateUninitializedArray0(Class, int)` | `jdk.internal.misc.Unsafe`                                 |
|     new |        +80 B | 0.0% → <0.1% |          0 B → 80 B |           0 → 2 | `<init>(Collection)`                      | `java.util.ArrayList`                                      |

##### Standard library

|  Change |        Delta |            % |                Size |         Samples | Function                                  | Location                                    |
| ------: | -----------: | -----------: | ------------------: | --------------: | ----------------------------------------- | ------------------------------------------- |
|   +0.2% |   +7.532 MiB |        99.6% |            3.06 GiB | 68,226 → 68,315 | `copyOf(Object[], int)`                   | `java.util.Arrays`                          |
|     new | +255.085 KiB | 0.0% → <0.1% |       0 B → 255 KiB |           0 → 1 | `initCEN(int, ZipCoder)`                  | `java.util.zip.ZipFile$Source`              |
| +264.3% | +217.234 KiB |        <0.1% |  82.2 KiB → 299 KiB |          8 → 14 | `<init>(InputStream, Inflater, int)`      | `java.util.zip.InflaterInputStream`         |
|  +50.5% |  +136.14 KiB |        <0.1% |   269 KiB → 406 KiB |         21 → 27 | `copyOf(byte[], int)`                     | `java.util.Arrays`                          |
|     new |   +9.656 KiB | 0.0% → <0.1% |      0 B → 9.66 KiB |           0 → 1 | `<clinit>()`                              | `jdk.internal.math.MathUtils`               |
|     new |   +2.671 KiB | 0.0% → <0.1% |      0 B → 2.67 KiB |           0 → 1 | `getDeclaredConstructors0(boolean)`       | `java.lang.Class`                           |
|   +5.1% |   +1.312 KiB |        <0.1% | 25.5 KiB → 26.9 KiB |       467 → 491 | `grow(int)`                               | `java.util.ArrayList`                       |
|     new |       +632 B | 0.0% → <0.1% |         0 B → 632 B |           0 → 1 | `<init>(int)`                             | `jdk.internal.org.objectweb.asm.ByteVector` |
| +152.9% |       +416 B |        <0.1% |       272 B → 688 B |           1 → 3 | `fillInStackTrace(int)`                   | `java.lang.Throwable`                       |
|     new |       +328 B | 0.0% → <0.1% |         0 B → 328 B |           0 → 1 | `load(DataInputStream)`                   | `java.time.zone.TzdbZoneRulesProvider`      |
|   +8.9% |       +264 B |        <0.1% | 2.88 KiB → 3.14 KiB |       123 → 134 | `valueOf(double)`                         | `java.lang.Double`                          |
| +150.0% |       +168 B |        <0.1% |       112 B → 280 B |           2 → 5 | `mapToObj(DoubleFunction, int)`           | `java.util.stream.DoublePipeline`           |
|   +6.1% |       +168 B |        <0.1% | 2.68 KiB → 2.84 KiB |         49 → 52 | `mapToObj(IntFunction, int)`              | `java.util.stream.IntPipeline`              |
|   +5.8% |       +168 B |        <0.1% | 2.84 KiB → 3.01 KiB |         52 → 55 | `intStream(Spliterator$OfInt, boolean)`   | `java.util.stream.StreamSupport`            |
|     new |        +96 B | 0.0% → <0.1% |          0 B → 96 B |           0 → 2 | `allocateUninitializedArray0(Class, int)` | `jdk.internal.misc.Unsafe`                  |
|     new |        +80 B | 0.0% → <0.1% |          0 B → 80 B |           0 → 2 | `<init>(Collection)`                      | `java.util.ArrayList`                       |
|  +16.0% |        +64 B |        <0.1% |       400 B → 464 B |         25 → 29 | `entrySet()`                              | `java.util.HashMap`                         |
|     new |        +56 B | 0.0% → <0.1% |          0 B → 56 B |           0 → 1 | `setLocal(int, int)`                      | `jdk.internal.org.objectweb.asm.Frame`      |
|     new |        +48 B | 0.0% → <0.1% |          0 B → 48 B |           0 → 1 | `clone()`                                 | `java.lang.Object`                          |
|  +20.0% |        +40 B |        <0.1% |       200 B → 240 B |           8 → 9 | `allocateInstance(Class)`                 | `jdk.internal.misc.Unsafe`                  |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |        Delta |            % |                Size |       Samples | Function                                      | Location                                                   |
| ------: | -----------: | -----------: | ------------------: | ------------: | --------------------------------------------- | ---------------------------------------------------------- |
|   -4.9% | -340.882 KiB |         0.2% | 6.75 MiB → 6.42 MiB | 3,593 → 3,416 | `findNearestCentroid()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -0.6% |  -29.914 KiB |         0.2% | 5.17 MiB → 5.14 MiB |       19 → 26 | `copyOf(Object[], int, Class)`                | `java.util.Arrays`                                         |
|  -38.4% |   -8.546 KiB |        <0.1% | 22.3 KiB → 13.7 KiB |     218 → 206 | `resize()`                                    | `java.util.HashMap`                                        |
|  -17.7% |   -1.695 KiB |        <0.1% | 9.57 KiB → 7.88 KiB |     175 → 144 | `vectorSum()`                                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -15.3% |    -1.64 KiB |        <0.1% | 10.7 KiB → 9.09 KiB |     229 → 194 | `collectClusters(int[])`                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |   -1.195 KiB | <0.1% → 0.0% |       1.2 KiB → 0 B |         1 → 0 | `<clinit>()`                                  | `sun.security.util.SecurityProviderConstants`              |
|   -6.3% |   -1.125 KiB |        <0.1% |   18 KiB → 16.9 KiB |     576 → 540 | `newNode(int, Object, Object, HashMap$Node)`  | `java.util.HashMap`                                        |
|  -10.1% |     -1,008 B |        <0.1% | 9.73 KiB → 8.75 KiB |     178 → 160 | `add(double[], double[])`                     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -39.8% |       -968 B |        <0.1% | 2.38 KiB → 1.43 KiB |             1 | `load(DataInputStream)`                       | `sun.util.calendar.ZoneInfoFile`                           |
|   -5.3% |       -384 B |        <0.1% |  7.08 KiB → 6.7 KiB |     151 → 143 | `merge(Map, Map)`                             | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -59.0% |       -288 B |        <0.1% |       488 B → 200 B |         4 → 1 | `copyOfRangeByte(byte[], int, int)`           | `java.util.Arrays`                                         |
|  -50.0% |       -264 B |        <0.1% |       528 B → 264 B |       22 → 11 | `allocateInstance(Object)`                    | `java.lang.invoke.DirectMethodHandle`                      |
|  -28.6% |       -192 B |        <0.1% |       672 B → 480 B |       28 → 20 | `builder(long, IntFunction)`                  | `java.util.stream.Nodes`                                   |
|   -2.8% |       -144 B |        <0.1% |  5.04 KiB → 4.9 KiB |     215 → 209 | `lambda$merge$6(List, List)`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |        -64 B | <0.1% → 0.0% |          64 B → 0 B |         2 → 0 | `<init>(int)`                                 | `java.lang.AbstractStringBuilder`                          |
|  -50.0% |        -56 B |        <0.1% |        112 B → 56 B |         2 → 1 | `doubleStream(Spliterator$OfDouble, boolean)` | `java.util.stream.StreamSupport`                           |
| removed |        -56 B | <0.1% → 0.0% |          56 B → 0 B |         1 → 0 | `div(double[], int)`                          | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| removed |        -56 B | <0.1% → 0.0% |          56 B → 0 B |         1 → 0 | `addConstantUtf8(String)`                     | `jdk.internal.org.objectweb.asm.SymbolTable`               |
|  -20.0% |        -48 B |        <0.1% |       240 B → 192 B |        10 → 8 | `awaitDone(int, long)`                        | `java.util.concurrent.ForkJoinTask`                        |
|  -66.7% |        -48 B |        <0.1% |         72 B → 24 B |         3 → 1 | `opWrapSink(int, Sink)`                       | `java.util.stream.DoublePipeline$1`                        |

##### Standard library

|  Change |       Delta |            % |                Size |   Samples | Function                                              | Location                                      |
| ------: | ----------: | -----------: | ------------------: | --------: | ----------------------------------------------------- | --------------------------------------------- |
|   -0.6% | -29.914 KiB |         0.2% | 5.17 MiB → 5.14 MiB |   19 → 26 | `copyOf(Object[], int, Class)`                        | `java.util.Arrays`                            |
|  -38.4% |  -8.546 KiB |        <0.1% | 22.3 KiB → 13.7 KiB | 218 → 206 | `resize()`                                            | `java.util.HashMap`                           |
| removed |  -1.195 KiB | <0.1% → 0.0% |       1.2 KiB → 0 B |     1 → 0 | `<clinit>()`                                          | `sun.security.util.SecurityProviderConstants` |
|   -6.3% |  -1.125 KiB |        <0.1% |   18 KiB → 16.9 KiB | 576 → 540 | `newNode(int, Object, Object, HashMap$Node)`          | `java.util.HashMap`                           |
|  -39.8% |      -968 B |        <0.1% | 2.38 KiB → 1.43 KiB |         1 | `load(DataInputStream)`                               | `sun.util.calendar.ZoneInfoFile`              |
|  -59.0% |      -288 B |        <0.1% |       488 B → 200 B |     4 → 1 | `copyOfRangeByte(byte[], int, int)`                   | `java.util.Arrays`                            |
|  -50.0% |      -264 B |        <0.1% |       528 B → 264 B |   22 → 11 | `allocateInstance(Object)`                            | `java.lang.invoke.DirectMethodHandle`         |
|  -28.6% |      -192 B |        <0.1% |       672 B → 480 B |   28 → 20 | `builder(long, IntFunction)`                          | `java.util.stream.Nodes`                      |
| removed |       -64 B | <0.1% → 0.0% |          64 B → 0 B |     2 → 0 | `<init>(int)`                                         | `java.lang.AbstractStringBuilder`             |
|  -50.0% |       -56 B |        <0.1% |        112 B → 56 B |     2 → 1 | `doubleStream(Spliterator$OfDouble, boolean)`         | `java.util.stream.StreamSupport`              |
| removed |       -56 B | <0.1% → 0.0% |          56 B → 0 B |     1 → 0 | `addConstantUtf8(String)`                             | `jdk.internal.org.objectweb.asm.SymbolTable`  |
|  -20.0% |       -48 B |        <0.1% |       240 B → 192 B |    10 → 8 | `awaitDone(int, long)`                                | `java.util.concurrent.ForkJoinTask`           |
|  -66.7% |       -48 B |        <0.1% |         72 B → 24 B |     3 → 1 | `opWrapSink(int, Sink)`                               | `java.util.stream.DoublePipeline$1`           |
| removed |       -48 B | <0.1% → 0.0% |          48 B → 0 B |     1 → 0 | `register(Object, Runnable)`                          | `java.lang.ref.Cleaner`                       |
|  -50.0% |       -40 B |        <0.1% |         80 B → 40 B |     2 → 1 | `spliterator(double[], int, int, int)`                | `java.util.Spliterators`                      |
| removed |       -32 B | <0.1% → 0.0% |          32 B → 0 B |     1 → 0 | `putVal(Object, Object, boolean)`                     | `java.util.concurrent.ConcurrentHashMap`      |
|  -44.4% |       -32 B |        <0.1% |         72 B → 40 B |         1 | `compress(char[], int, int)`                          | `java.lang.StringUTF16`                       |
| removed |       -24 B | <0.1% → 0.0% |          24 B → 0 B |     1 → 0 | `<clinit>()`                                          | `sun.security.util.KnownOIDs`                 |
| removed |       -24 B | <0.1% → 0.0% |          24 B → 0 B |     1 → 0 | `read(Manifest$FastInputStream, byte[], String, int)` | `java.util.jar.Attributes`                    |
| removed |       -16 B | <0.1% → 0.0% |          16 B → 0 B |     1 → 0 | `read(InputStream, String)`                           | `java.util.jar.Manifest`                      |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

| Change |       Delta |             % |                Size |         Samples | Function                                             | Location                                                               |
| -----: | ----------: | ------------: | ------------------: | --------------: | ---------------------------------------------------- | ---------------------------------------------------------------------- |
|  +1.3% | +15.329 MiB | 37.0% → 37.4% | 1.14 GiB → 1.15 GiB | 29,286 → 29,316 | `toArray()`                                          | `java.util.ArrayList`                                                  |
|  +1.4% |  +7.843 MiB | 18.5% → 18.7% |   580 MiB → 588 MiB | 14,270 → 14,389 | `<init>(Collection)`                                 | `java.util.ArrayList`                                                  |
|  +0.2% |  +7.503 MiB |         99.8% | 3.06 GiB → 3.07 GiB | 68,245 → 68,341 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                                     |
|  +0.2% |  +7.444 MiB |         99.5% | 3.05 GiB → 3.06 GiB | 56,699 → 56,702 | `lambda$merge$6(List, List)`                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +0.2% |  +7.444 MiB |         99.5% | 3.05 GiB → 3.06 GiB | 56,699 → 56,702 | `apply(Object, Object)`                              | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000501187218` |
|  +0.2% |  +7.444 MiB |         99.5% | 3.05 GiB → 3.06 GiB | 56,703 → 56,705 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                                                    |
|  +0.2% |  +7.444 MiB |         99.5% | 3.05 GiB → 3.06 GiB | 56,703 → 56,705 | `lambda$merge$7(Map, Object, List)`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +0.2% |  +7.444 MiB |         99.5% | 3.05 GiB → 3.06 GiB | 56,703 → 56,705 | `accept(Object, Object)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000501186d88` |
|  +0.2% |  +7.444 MiB |         99.5% | 3.05 GiB → 3.06 GiB | 56,703 → 56,705 | `forEach(BiConsumer)`                                | `java.util.HashMap`                                                    |
|  +0.2% |  +7.443 MiB |         99.5% | 3.05 GiB → 3.06 GiB | 57,245 → 57,232 | `merge(Map, Map)`                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +0.2% |  +7.443 MiB |         99.5% | 3.05 GiB → 3.06 GiB | 57,236 → 57,224 | `combineResults(Map, Map)`                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  +0.2% |  +7.443 MiB |         99.5% | 3.05 GiB → 3.06 GiB | 57,236 → 57,224 | `combineResults(Object, Object)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  +0.2% |  +7.169 MiB |         99.8% | 3.06 GiB → 3.07 GiB | 74,960 → 74,836 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                                    |
|  +0.2% |  +7.169 MiB |         99.8% | 3.06 GiB → 3.07 GiB | 74,960 → 74,836 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|  +0.2% |  +7.169 MiB |         99.8% | 3.06 GiB → 3.07 GiB | 74,960 → 74,836 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                                    |
|  +0.2% |  +7.169 MiB |         99.8% | 3.06 GiB → 3.07 GiB | 74,960 → 74,836 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                                    |
|  +0.2% |  +7.169 MiB |         99.8% | 3.06 GiB → 3.07 GiB | 74,960 → 74,836 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                            |
|  +0.2% |  +7.169 MiB |         99.8% | 3.06 GiB → 3.07 GiB | 74,957 → 74,830 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  +0.2% |  +7.169 MiB |         99.8% | 3.06 GiB → 3.07 GiB | 74,957 → 74,830 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                                   |
|    new |  +6.013 MiB |   0.0% → 0.2% |      0 B → 6.01 MiB |         0 → 416 | `invokeStatic(Object, Object)`                       | `java.lang.invoke.LambdaForm$DMH.0x0000000501004800`                   |

##### Standard library

|  Change |        Delta |             % |                Size |         Samples | Function                                                                    | Location                                             |
| ------: | -----------: | ------------: | ------------------: | --------------: | --------------------------------------------------------------------------- | ---------------------------------------------------- |
|   +1.3% |  +15.329 MiB | 37.0% → 37.4% | 1.14 GiB → 1.15 GiB | 29,286 → 29,316 | `toArray()`                                                                 | `java.util.ArrayList`                                |
|   +1.4% |   +7.843 MiB | 18.5% → 18.7% |   580 MiB → 588 MiB | 14,270 → 14,389 | `<init>(Collection)`                                                        | `java.util.ArrayList`                                |
|   +0.2% |   +7.503 MiB |         99.8% | 3.06 GiB → 3.07 GiB | 68,245 → 68,341 | `copyOf(Object[], int)`                                                     | `java.util.Arrays`                                   |
|   +0.2% |   +7.444 MiB |         99.5% | 3.05 GiB → 3.06 GiB | 56,703 → 56,705 | `merge(Object, Object, BiFunction)`                                         | `java.util.HashMap`                                  |
|   +0.2% |   +7.444 MiB |         99.5% | 3.05 GiB → 3.06 GiB | 56,703 → 56,705 | `forEach(BiConsumer)`                                                       | `java.util.HashMap`                                  |
|   +0.2% |   +7.169 MiB |         99.8% | 3.06 GiB → 3.07 GiB | 74,960 → 74,836 | `doExec()`                                                                  | `java.util.concurrent.ForkJoinTask`                  |
|   +0.2% |   +7.169 MiB |         99.8% | 3.06 GiB → 3.07 GiB | 74,960 → 74,836 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`                        | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|   +0.2% |   +7.169 MiB |         99.8% | 3.06 GiB → 3.07 GiB | 74,960 → 74,836 | `scan(ForkJoinPool$WorkQueue, int, int)`                                    | `java.util.concurrent.ForkJoinPool`                  |
|   +0.2% |   +7.169 MiB |         99.8% | 3.06 GiB → 3.07 GiB | 74,960 → 74,836 | `runWorker(ForkJoinPool$WorkQueue)`                                         | `java.util.concurrent.ForkJoinPool`                  |
|   +0.2% |   +7.169 MiB |         99.8% | 3.06 GiB → 3.07 GiB | 74,960 → 74,836 | `run()`                                                                     | `java.util.concurrent.ForkJoinWorkerThread`          |
|   +0.2% |   +7.169 MiB |         99.8% | 3.06 GiB → 3.07 GiB | 74,957 → 74,830 | `exec()`                                                                    | `java.util.concurrent.RecursiveTask`                 |
|     new |   +6.013 MiB |   0.0% → 0.2% |      0 B → 6.01 MiB |         0 → 416 | `invokeStatic(Object, Object)`                                              | `java.lang.invoke.LambdaForm$DMH.0x0000000501004800` |
|     new |   +6.013 MiB |   0.0% → 0.2% |      0 B → 6.01 MiB |         0 → 416 | `invoke(Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x0000000501009800`  |
| +195.7% | +651.609 KiB |         <0.1% |   333 KiB → 985 KiB |         38 → 50 | `findClass(String)`                                                         | `java.net.URLClassLoader`                            |
| +195.7% | +651.585 KiB |         <0.1% |   333 KiB → 985 KiB |         38 → 49 | `run()`                                                                     | `java.net.URLClassLoader$1`                          |
| +195.7% | +651.585 KiB |         <0.1% |   333 KiB → 985 KiB |         38 → 49 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` | `java.security.AccessController`                     |
| +195.7% | +651.585 KiB |         <0.1% |   333 KiB → 985 KiB |         38 → 49 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)`             | `java.security.AccessController`                     |
| +182.8% | +636.812 KiB |         <0.1% |   348 KiB → 985 KiB |         40 → 53 | `loadClass(String, boolean)`                                                | `java.lang.ClassLoader`                              |
| +182.8% | +636.812 KiB |         <0.1% |   348 KiB → 985 KiB |         40 → 53 | `loadClass(String)`                                                         | `java.lang.ClassLoader`                              |
|  +11.0% | +611.125 KiB |          0.2% | 5.42 MiB → 6.01 MiB |       399 → 416 | `invokeExact_MT(Object, Object, Object, Object)`                            | `java.lang.invoke.Invokers$Holder`                   |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                Size |         Samples | Function                                                  | Location                                                   |
| ------: | -----------: | ------------: | ------------------: | --------------: | --------------------------------------------------------- | ---------------------------------------------------------- |
|   -0.4% |   -7.824 MiB | 62.8% → 62.4% | 1.93 GiB → 1.92 GiB | 39,426 → 39,516 | `grow(int)`                                               | `java.util.ArrayList`                                      |
| removed |   -5.416 MiB |   0.2% → 0.0% |      5.42 MiB → 0 B |         399 → 0 | `invokeStatic(Object, Object)`                            | `java.lang.invoke.LambdaForm$DMH.0x0000007001004800`       |
| removed |   -5.416 MiB |   0.2% → 0.0% |      5.42 MiB → 0 B |         399 → 0 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000007001009800`        |
|   -0.5% |   -4.644 MiB | 30.3% → 30.1% |   953 MiB → 949 MiB | 60,059 → 59,701 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                        |
|   -0.5% |   -4.644 MiB | 30.3% → 30.1% |   953 MiB → 949 MiB | 60,059 → 59,701 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                        |
|   -0.3% |   -2.577 MiB | 30.0% → 29.8% |   943 MiB → 940 MiB | 59,435 → 59,103 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|   -4.0% |   -2.467 MiB |   2.0% → 1.9% | 61.7 MiB → 59.3 MiB | 10,832 → 10,731 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                        |
|     ~0% | -408.101 KiB | 81.0% → 80.8% |            2.49 GiB | 42,214 → 42,106 | `addAll(Collection)`                                      | `java.util.ArrayList`                                      |
|   -4.9% | -340.882 KiB |          0.2% | 6.75 MiB → 6.42 MiB |   3,593 → 3,416 | `findNearestCentroid()`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -2.4% | -281.609 KiB |          0.4% | 11.4 MiB → 11.1 MiB | 16,684 → 16,548 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |  -36.265 KiB |  <0.1% → 0.0% |      36.3 KiB → 0 B |           2 → 0 | `loadProperties(URL)`                                     | `org.renaissance.core.ResourceUtils`                       |
| removed |  -36.265 KiB |  <0.1% → 0.0% |      36.3 KiB → 0 B |           2 → 0 | `loadPropertiesAsMap(URL)`                                | `org.renaissance.core.ResourceUtils`                       |
| removed |  -36.265 KiB |  <0.1% → 0.0% |      36.3 KiB → 0 B |           2 → 0 | `create(Path, String, Optional, Map, boolean)`            | `org.renaissance.core.BenchmarkSuite`                      |
| removed |  -36.195 KiB |  <0.1% → 0.0% |      36.2 KiB → 0 B |           1 → 0 | `getInputStream()`                                        | `sun.net.www.protocol.jar.JarURLConnection`                |
| removed |  -36.195 KiB |  <0.1% → 0.0% |      36.2 KiB → 0 B |           1 → 0 | `openStream()`                                            | `java.net.URL`                                             |
|   -0.6% |  -29.914 KiB |          0.2% | 5.17 MiB → 5.14 MiB |         19 → 26 | `copyOf(Object[], int, Class)`                            | `java.util.Arrays`                                         |
|  -66.6% |  -16.109 KiB |         <0.1% | 24.2 KiB → 8.09 KiB |           7 → 3 | `read(InputStream, String)`                               | `java.util.jar.Manifest`                                   |
|  -66.6% |  -16.109 KiB |         <0.1% | 24.2 KiB → 8.09 KiB |           7 → 3 | `<init>(JarVerifier, InputStream, String)`                | `java.util.jar.Manifest`                                   |
|  -66.6% |  -16.109 KiB |         <0.1% | 24.2 KiB → 8.09 KiB |           7 → 3 | `<init>(InputStream, String)`                             | `java.util.jar.Manifest`                                   |
|  -66.6% |  -16.109 KiB |         <0.1% | 24.2 KiB → 8.09 KiB |           7 → 3 | `getManifestFromReference()`                              | `java.util.jar.JarFile`                                    |

##### Standard library

|  Change |        Delta |             % |                Size |         Samples | Function                                                  | Location                                             |
| ------: | -----------: | ------------: | ------------------: | --------------: | --------------------------------------------------------- | ---------------------------------------------------- |
|   -0.4% |   -7.824 MiB | 62.8% → 62.4% | 1.93 GiB → 1.92 GiB | 39,426 → 39,516 | `grow(int)`                                               | `java.util.ArrayList`                                |
| removed |   -5.416 MiB |   0.2% → 0.0% |      5.42 MiB → 0 B |         399 → 0 | `invokeStatic(Object, Object)`                            | `java.lang.invoke.LambdaForm$DMH.0x0000007001004800` |
| removed |   -5.416 MiB |   0.2% → 0.0% |      5.42 MiB → 0 B |         399 → 0 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000007001009800`  |
|   -0.5% |   -4.644 MiB | 30.3% → 30.1% |   953 MiB → 949 MiB | 60,059 → 59,701 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                  |
|   -0.5% |   -4.644 MiB | 30.3% → 30.1% |   953 MiB → 949 MiB | 60,059 → 59,701 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                  |
|   -0.3% |   -2.577 MiB | 30.0% → 29.8% |   943 MiB → 940 MiB | 59,435 → 59,103 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|   -4.0% |   -2.467 MiB |   2.0% → 1.9% | 61.7 MiB → 59.3 MiB | 10,832 → 10,731 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                  |
|     ~0% | -408.101 KiB | 81.0% → 80.8% |            2.49 GiB | 42,214 → 42,106 | `addAll(Collection)`                                      | `java.util.ArrayList`                                |
| removed |  -36.195 KiB |  <0.1% → 0.0% |      36.2 KiB → 0 B |           1 → 0 | `getInputStream()`                                        | `sun.net.www.protocol.jar.JarURLConnection`          |
| removed |  -36.195 KiB |  <0.1% → 0.0% |      36.2 KiB → 0 B |           1 → 0 | `openStream()`                                            | `java.net.URL`                                       |
|   -0.6% |  -29.914 KiB |          0.2% | 5.17 MiB → 5.14 MiB |         19 → 26 | `copyOf(Object[], int, Class)`                            | `java.util.Arrays`                                   |
|  -66.6% |  -16.109 KiB |         <0.1% | 24.2 KiB → 8.09 KiB |           7 → 3 | `read(InputStream, String)`                               | `java.util.jar.Manifest`                             |
|  -66.6% |  -16.109 KiB |         <0.1% | 24.2 KiB → 8.09 KiB |           7 → 3 | `<init>(JarVerifier, InputStream, String)`                | `java.util.jar.Manifest`                             |
|  -66.6% |  -16.109 KiB |         <0.1% | 24.2 KiB → 8.09 KiB |           7 → 3 | `<init>(InputStream, String)`                             | `java.util.jar.Manifest`                             |
|  -66.6% |  -16.109 KiB |         <0.1% | 24.2 KiB → 8.09 KiB |           7 → 3 | `getManifestFromReference()`                              | `java.util.jar.JarFile`                              |
|  -66.6% |  -16.109 KiB |         <0.1% | 24.2 KiB → 8.09 KiB |           7 → 3 | `getManifest()`                                           | `java.util.jar.JarFile`                              |
|  -66.6% |  -16.109 KiB |         <0.1% | 24.2 KiB → 8.09 KiB |           7 → 3 | `getManifest()`                                           | `jdk.internal.loader.URLClassPath$JarLoader$2`       |
| removed |  -15.101 KiB |  <0.1% → 0.0% |      15.1 KiB → 0 B |           1 → 0 | `defineClass(String, Resource)`                           | `jdk.internal.loader.BuiltinClassLoader`             |
|  -99.7% |  -15.062 KiB |         <0.1% |     15.1 KiB → 40 B |               1 | `findClassOnClassPathOrNull(String)`                      | `jdk.internal.loader.BuiltinClassLoader`             |
|  -99.7% |  -15.062 KiB |         <0.1% |     15.1 KiB → 40 B |               1 | `loadClassOrNull(String, boolean)`                        | `jdk.internal.loader.BuiltinClassLoader`             |

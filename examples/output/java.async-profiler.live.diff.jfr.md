# Allocated heap profile diff

Allocated 3.12 GiB → 3.08 GiB (-35.451 MiB, -1.1%) over 76,154 samples → 76,122 samples (42.9 KiB → 42.5 KiB per sample).

| Category         | Change |        Delta |     % |                Size |         Samples |
| ---------------- | -----: | -----------: | ----: | ------------------: | --------------: |
| Standard library |  -1.1% |  -35.688 MiB | 99.8% | 3.11 GiB → 3.08 GiB | 70,926 → 70,684 |
| Ours             |  +3.7% | +243.148 KiB |  0.2% | 6.42 MiB → 6.66 MiB |   5,228 → 5,438 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|  Change |        Delta |            % |                Size |       Samples | Function                                                                                                                 | Location                                                   |
| ------: | -----------: | -----------: | ------------------: | ------------: | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------- |
|  +17.3% | +794.578 KiB |  0.1% → 0.2% | 4.48 MiB → 5.26 MiB |       28 → 27 | `copyOf(Object[], int, Class)`                                                                                           | `java.util.Arrays`                                         |
|   +3.7% | +240.515 KiB |         0.2% | 6.34 MiB → 6.58 MiB | 3,375 → 3,500 | `findNearestCentroid()`                                                                                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +92.4% | +174.148 KiB |        <0.1% |   188 KiB → 363 KiB |        9 → 15 | `<init>(InputStream, Inflater, int)`                                                                                     | `java.util.zip.InflaterInputStream`                        |
|     new |  +32.031 KiB | 0.0% → <0.1% |        0 B → 32 KiB |         0 → 2 | `transferTo(OutputStream)`                                                                                               | `java.io.InputStream`                                      |
|     new |  +16.015 KiB | 0.0% → <0.1% |        0 B → 16 KiB |         0 → 1 | `readNBytes(int)`                                                                                                        | `java.io.InputStream`                                      |
|  +41.6% |   +3.117 KiB |        <0.1% | 7.49 KiB → 10.6 KiB |     137 → 194 | `vectorSum()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   +8.1% |   +1.914 KiB |        <0.1% | 23.6 KiB → 25.5 KiB |     432 → 467 | `grow(int)`                                                                                                              | `java.util.ArrayList`                                      |
|  +14.0% |   +1.367 KiB |        <0.1% | 9.79 KiB → 11.2 KiB |     179 → 204 | `add(double[], double[])`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +16.1% |       +840 B |        <0.1% | 5.09 KiB → 5.91 KiB |     217 → 252 | `lambda$merge$6(List, List)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  +17.8% |       +840 B |        <0.1% | 4.62 KiB → 5.44 KiB |     197 → 232 | `lambda$collectClusters$0(Double[])`                                                                                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +4.0% |       +720 B |        <0.1% | 17.4 KiB → 18.1 KiB |     371 → 386 | `createSubtask(int, int)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   +9.7% |       +672 B |        <0.1% |  6.8 KiB → 7.45 KiB |     145 → 159 | `merge(Map, Map)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|   +9.1% |       +280 B |        <0.1% | 3.01 KiB → 3.28 KiB |       55 → 60 | `intStream(Spliterator$OfInt, boolean)`                                                                                  | `java.util.stream.StreamSupport`                           |
|     new |       +240 B | 0.0% → <0.1% |         0 B → 240 B |         0 → 3 | `fillInStackTrace(int)`                                                                                                  | `java.lang.Throwable`                                      |
|  +57.9% |       +176 B |        <0.1% |       304 B → 480 B |       19 → 30 | `entrySet()`                                                                                                             | `java.util.HashMap`                                        |
| +150.0% |       +168 B |        <0.1% |       112 B → 280 B |         2 → 5 | `mapToObj(DoubleFunction, int)`                                                                                          | `java.util.stream.DoublePipeline`                          |
|     new |       +152 B | 0.0% → <0.1% |         0 B → 152 B |         0 → 1 | `<init>(MethodHandles$Lookup, MethodType, String, MethodType, MethodHandle, MethodType, boolean, Class[], MethodType[])` | `java.lang.invoke.InnerClassLambdaMetafactory`             |
|   +7.5% |       +120 B |        <0.1% | 1.56 KiB → 1.68 KiB |       40 → 43 | `lambda$generateData$4(int)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  +66.7% |       +112 B |        <0.1% |       168 B → 280 B |         3 → 5 | `doubleStream(Spliterator$OfDouble, boolean)`                                                                            | `java.util.stream.StreamSupport`                           |
|     new |        +96 B | 0.0% → <0.1% |          0 B → 96 B |         0 → 3 | `putVal(Object, Object, boolean)`                                                                                        | `java.util.concurrent.ConcurrentHashMap`                   |

##### Standard library

|  Change |        Delta |            % |                Size |   Samples | Function                                                                                                                 | Location                                       |
| ------: | -----------: | -----------: | ------------------: | --------: | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- |
|  +17.3% | +794.578 KiB |  0.1% → 0.2% | 4.48 MiB → 5.26 MiB |   28 → 27 | `copyOf(Object[], int, Class)`                                                                                           | `java.util.Arrays`                             |
|  +92.4% | +174.148 KiB |        <0.1% |   188 KiB → 363 KiB |    9 → 15 | `<init>(InputStream, Inflater, int)`                                                                                     | `java.util.zip.InflaterInputStream`            |
|     new |  +32.031 KiB | 0.0% → <0.1% |        0 B → 32 KiB |     0 → 2 | `transferTo(OutputStream)`                                                                                               | `java.io.InputStream`                          |
|     new |  +16.015 KiB | 0.0% → <0.1% |        0 B → 16 KiB |     0 → 1 | `readNBytes(int)`                                                                                                        | `java.io.InputStream`                          |
|   +8.1% |   +1.914 KiB |        <0.1% | 23.6 KiB → 25.5 KiB | 432 → 467 | `grow(int)`                                                                                                              | `java.util.ArrayList`                          |
|   +9.1% |       +280 B |        <0.1% | 3.01 KiB → 3.28 KiB |   55 → 60 | `intStream(Spliterator$OfInt, boolean)`                                                                                  | `java.util.stream.StreamSupport`               |
|     new |       +240 B | 0.0% → <0.1% |         0 B → 240 B |     0 → 3 | `fillInStackTrace(int)`                                                                                                  | `java.lang.Throwable`                          |
|  +57.9% |       +176 B |        <0.1% |       304 B → 480 B |   19 → 30 | `entrySet()`                                                                                                             | `java.util.HashMap`                            |
| +150.0% |       +168 B |        <0.1% |       112 B → 280 B |     2 → 5 | `mapToObj(DoubleFunction, int)`                                                                                          | `java.util.stream.DoublePipeline`              |
|     new |       +152 B | 0.0% → <0.1% |         0 B → 152 B |     0 → 1 | `<init>(MethodHandles$Lookup, MethodType, String, MethodType, MethodHandle, MethodType, boolean, Class[], MethodType[])` | `java.lang.invoke.InnerClassLambdaMetafactory` |
|  +66.7% |       +112 B |        <0.1% |       168 B → 280 B |     3 → 5 | `doubleStream(Spliterator$OfDouble, boolean)`                                                                            | `java.util.stream.StreamSupport`               |
|     new |        +96 B | 0.0% → <0.1% |          0 B → 96 B |     0 → 3 | `putVal(Object, Object, boolean)`                                                                                        | `java.util.concurrent.ConcurrentHashMap`       |
|  +37.5% |        +72 B |        <0.1% |       192 B → 264 B |    8 → 11 | `awaitDone(int, long)`                                                                                                   | `java.util.concurrent.ForkJoinTask`            |
|     new |        +56 B | 0.0% → <0.1% |          0 B → 56 B |     0 → 1 | `addConstantMemberReference(int, String, String, String)`                                                                | `jdk.internal.org.objectweb.asm.SymbolTable`   |
|     new |        +48 B | 0.0% → <0.1% |          0 B → 48 B |     0 → 1 | `makeAllocator(MemberName)`                                                                                              | `java.lang.invoke.DirectMethodHandle`          |
|   +9.1% |        +48 B |        <0.1% |       528 B → 576 B |   22 → 24 | `allocateInstance(Object)`                                                                                               | `java.lang.invoke.DirectMethodHandle`          |
|     new |        +48 B | 0.0% → <0.1% |          0 B → 48 B |     0 → 1 | `makeVarargsCollector(MethodHandle, Class)`                                                                              | `java.lang.invoke.MethodHandleImpl`            |
|     new |        +40 B | 0.0% → <0.1% |          0 B → 40 B |     0 → 1 | `spliterator(double[], int, int, int)`                                                                                   | `java.util.Spliterators`                       |
| +100.0% |        +32 B |        <0.1% |         32 B → 64 B |     1 → 2 | `copyOfRangeByte(byte[], int, int)`                                                                                      | `java.util.Arrays`                             |
|     new |        +32 B | 0.0% → <0.1% |          0 B → 32 B |     0 → 1 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])`                                                           | `java.util.concurrent.ConcurrentHashMap`       |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |        Delta |            % |                Size |         Samples | Function                     | Location                                                   |
| ------: | -----------: | -----------: | ------------------: | --------------: | ---------------------------- | ---------------------------------------------------------- |
|   -1.1% |  -36.266 MiB |        99.6% | 3.11 GiB → 3.07 GiB | 69,267 → 69,036 | `copyOf(Object[], int)`      | `java.util.Arrays`                                         |
| removed | -260.726 KiB | <0.1% → 0.0% |       261 KiB → 0 B |           2 → 0 | `initCEN(int, ZipCoder)`     | `java.util.zip.ZipFile$Source`                             |
|  -28.8% | -163.937 KiB |        <0.1% |   570 KiB → 406 KiB |         29 → 30 | `copyOf(byte[], int)`        | `java.util.Arrays`                                         |
|  -22.1% |   -2.156 KiB |        <0.1% | 9.75 KiB → 7.59 KiB |       208 → 162 | `collectClusters(int[])`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -12.0% |   -2.078 KiB |        <0.1% | 17.3 KiB → 15.2 KiB |       316 → 278 | `createSubtask(int, int)`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -24.3% |       -840 B |        <0.1% | 3.38 KiB → 2.55 KiB |       144 → 109 | `valueOf(double)`            | `java.lang.Double`                                         |
|  -24.0% |       -672 B |        <0.1% | 2.73 KiB → 2.08 KiB |         50 → 38 | `mapToObj(IntFunction, int)` | `java.util.stream.IntPipeline`                             |
|  -66.0% |       -528 B |        <0.1% |       800 B → 272 B |           2 → 1 | `enlarge(int)`               | `jdk.internal.org.objectweb.asm.ByteVector`                |
|  -50.0% |       -432 B |        <0.1% |       864 B → 432 B |          18 → 9 | `createSubtask(int, int)`    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -40.7% |       -264 B |        <0.1% |       648 B → 384 B |         27 → 16 | `builder(long, IntFunction)` | `java.util.stream.Nodes`                                   |
| removed |       -240 B | <0.1% → 0.0% |         240 B → 0 B |           1 → 0 | `load(DataInputStream)`      | `sun.util.calendar.ZoneInfoFile`                           |
|   -1.4% |       -216 B |        <0.1% | 14.8 KiB → 14.6 KiB |       224 → 215 | `resize()`                   | `java.util.HashMap`                                        |
|  -25.0% |       -192 B |        <0.1% |       768 B → 576 B |         16 → 12 | `computeClusterAverages()`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| removed |       -168 B | <0.1% → 0.0% |         168 B → 0 B |           3 → 0 | `div(double[], int)`         | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -26.9% |       -168 B |        <0.1% |       624 B → 456 B |         26 → 19 | `range(int, int)`            | `java.util.stream.IntStream`                               |
|  -25.0% |       -144 B |        <0.1% |       576 B → 432 B |         24 → 18 | `opWrapSink(int, Sink)`      | `java.util.stream.IntPipeline$1`                           |
| removed |        -96 B | <0.1% → 0.0% |          96 B → 0 B |           2 → 0 | `average(List)`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -27.3% |        -72 B |        <0.1% |       264 B → 192 B |          10 → 7 | `allocateInstance(Class)`    | `jdk.internal.misc.Unsafe`                                 |
|  -50.0% |        -56 B |        <0.1% |        112 B → 56 B |           2 → 1 | `addConstantUtf8(String)`    | `jdk.internal.org.objectweb.asm.SymbolTable`               |
| removed |        -48 B | <0.1% → 0.0% |          48 B → 0 B |           1 → 0 | `clone()`                    | `java.lang.Object`                                         |

##### Standard library

|  Change |        Delta |            % |                Size |         Samples | Function                                     | Location                                     |
| ------: | -----------: | -----------: | ------------------: | --------------: | -------------------------------------------- | -------------------------------------------- |
|   -1.1% |  -36.266 MiB |        99.6% | 3.11 GiB → 3.07 GiB | 69,267 → 69,036 | `copyOf(Object[], int)`                      | `java.util.Arrays`                           |
| removed | -260.726 KiB | <0.1% → 0.0% |       261 KiB → 0 B |           2 → 0 | `initCEN(int, ZipCoder)`                     | `java.util.zip.ZipFile$Source`               |
|  -28.8% | -163.937 KiB |        <0.1% |   570 KiB → 406 KiB |         29 → 30 | `copyOf(byte[], int)`                        | `java.util.Arrays`                           |
|  -24.3% |       -840 B |        <0.1% | 3.38 KiB → 2.55 KiB |       144 → 109 | `valueOf(double)`                            | `java.lang.Double`                           |
|  -24.0% |       -672 B |        <0.1% | 2.73 KiB → 2.08 KiB |         50 → 38 | `mapToObj(IntFunction, int)`                 | `java.util.stream.IntPipeline`               |
|  -66.0% |       -528 B |        <0.1% |       800 B → 272 B |           2 → 1 | `enlarge(int)`                               | `jdk.internal.org.objectweb.asm.ByteVector`  |
|  -40.7% |       -264 B |        <0.1% |       648 B → 384 B |         27 → 16 | `builder(long, IntFunction)`                 | `java.util.stream.Nodes`                     |
| removed |       -240 B | <0.1% → 0.0% |         240 B → 0 B |           1 → 0 | `load(DataInputStream)`                      | `sun.util.calendar.ZoneInfoFile`             |
|   -1.4% |       -216 B |        <0.1% | 14.8 KiB → 14.6 KiB |       224 → 215 | `resize()`                                   | `java.util.HashMap`                          |
|  -26.9% |       -168 B |        <0.1% |       624 B → 456 B |         26 → 19 | `range(int, int)`                            | `java.util.stream.IntStream`                 |
|  -25.0% |       -144 B |        <0.1% |       576 B → 432 B |         24 → 18 | `opWrapSink(int, Sink)`                      | `java.util.stream.IntPipeline$1`             |
|  -27.3% |        -72 B |        <0.1% |       264 B → 192 B |          10 → 7 | `allocateInstance(Class)`                    | `jdk.internal.misc.Unsafe`                   |
|  -50.0% |        -56 B |        <0.1% |        112 B → 56 B |           2 → 1 | `addConstantUtf8(String)`                    | `jdk.internal.org.objectweb.asm.SymbolTable` |
| removed |        -48 B | <0.1% → 0.0% |          48 B → 0 B |           1 → 0 | `clone()`                                    | `java.lang.Object`                           |
| removed |        -48 B | <0.1% → 0.0% |          48 B → 0 B |           1 → 0 | `<init>(int)`                                | `java.io.ByteArrayOutputStream`              |
| removed |        -40 B | <0.1% → 0.0% |          40 B → 0 B |           1 → 0 | `makeImpl(Class, Class[], boolean)`          | `java.lang.invoke.MethodType`                |
| removed |        -40 B | <0.1% → 0.0% |          40 B → 0 B |           1 → 0 | `put(Object, Object)`                        | `java.util.WeakHashMap`                      |
| removed |        -40 B | <0.1% → 0.0% |          40 B → 0 B |           1 → 0 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.LinkedHashMap`                    |
| removed |        -40 B | <0.1% → 0.0% |          40 B → 0 B |           2 → 0 | `read(InputStream, String)`                  | `java.util.jar.Manifest`                     |
| removed |        -24 B | <0.1% → 0.0% |          24 B → 0 B |           1 → 0 | `parseName(byte[], int)`                     | `java.util.jar.Manifest`                     |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|       Change |        Delta |             % |                Size |         Samples | Function                                          | Location                                                 |
| -----------: | -----------: | ------------: | ------------------: | --------------: | ------------------------------------------------- | -------------------------------------------------------- |
|        +1.0% |  +11.759 MiB | 37.3% → 38.1% | 1.16 GiB → 1.18 GiB | 29,894 → 29,867 | `toArray()`                                       | `java.util.ArrayList`                                    |
|          new |   +5.936 MiB |   0.0% → 0.2% |      0 B → 5.94 MiB |         0 → 393 | `invokeStatic(Object, Object)`                    | `java.lang.invoke.LambdaForm$DMH.0x0000000801004800`     |
|          new |   +5.936 MiB |   0.0% → 0.2% |      0 B → 5.94 MiB |         0 → 393 | `invoke(Object, Object, Object)`                  | `java.lang.invoke.LambdaForm$MH.0x0000000801009800`      |
| +13479660.0% |   +5.142 MiB |  <0.1% → 0.2% |     40 B → 5.14 MiB |           1 → 5 | `accept(Object, Object)`                          | `java.util.stream.Collectors$$Lambda.0x0000000801070ab8` |
|       +10.2% | +946.476 KiB |          0.3% | 9.04 MiB → 9.96 MiB | 12,439 → 12,749 | `grow()`                                          | `java.util.ArrayList`                                    |
|       +10.2% | +946.476 KiB |          0.3% | 9.04 MiB → 9.96 MiB | 12,439 → 12,749 | `add(Object, Object[], int)`                      | `java.util.ArrayList`                                    |
|       +10.2% | +946.476 KiB |          0.3% | 9.04 MiB → 9.96 MiB | 12,439 → 12,749 | `add(Object)`                                     | `java.util.ArrayList`                                    |
|       +18.2% | +810.515 KiB |   0.1% → 0.2% | 4.35 MiB → 5.14 MiB |           4 → 5 | `accept(Object)`                                  | `java.util.stream.ReduceOps$3ReducingSink`               |
|       +18.1% |     +809 KiB |   0.1% → 0.2% | 4.36 MiB → 5.15 MiB |       382 → 325 | `accept(int)`                                     | `java.util.stream.IntPipeline$1$1`                       |
|       +18.1% |     +809 KiB |   0.1% → 0.2% | 4.36 MiB → 5.15 MiB |       382 → 325 | `forEachRemaining(IntConsumer)`                   | `java.util.stream.Streams$RangeIntSpliterator`           |
|       +18.1% |     +809 KiB |   0.1% → 0.2% | 4.36 MiB → 5.15 MiB |       382 → 325 | `forEachRemaining(Consumer)`                      | `java.util.Spliterator$OfInt`                            |
|       +18.1% |     +809 KiB |   0.1% → 0.2% | 4.36 MiB → 5.15 MiB |       382 → 325 | `generateData(int, int, int)`                     | `org.renaissance.jdk.concurrent.JavaKMeans`              |
|       +18.1% | +808.984 KiB |   0.1% → 0.2% | 4.36 MiB → 5.15 MiB |       383 → 325 | `setUpBeforeAll(BenchmarkContext)`                | `org.renaissance.jdk.concurrent.FjKmeans`                |
|       +18.1% |  +808.96 KiB |   0.1% → 0.2% | 4.36 MiB → 5.15 MiB |       394 → 336 | `wrapAndCopyInto(Sink, Spliterator)`              | `java.util.stream.AbstractPipeline`                      |
|       +18.1% |  +808.96 KiB |   0.1% → 0.2% | 4.36 MiB → 5.15 MiB |       383 → 325 | `evaluateSequential(PipelineHelper, Spliterator)` | `java.util.stream.ReduceOps$ReduceOp`                    |
|       +18.1% |  +808.96 KiB |   0.1% → 0.2% | 4.36 MiB → 5.15 MiB |       383 → 325 | `evaluate(TerminalOp)`                            | `java.util.stream.AbstractPipeline`                      |
|       +18.1% |  +808.96 KiB |   0.1% → 0.2% | 4.36 MiB → 5.15 MiB |       383 → 325 | `collect(Collector)`                              | `java.util.stream.ReferencePipeline`                     |
|       +18.1% | +808.937 KiB |   0.1% → 0.2% | 4.36 MiB → 5.15 MiB |       394 → 335 | `copyInto(Sink, Spliterator)`                     | `java.util.stream.AbstractPipeline`                      |
|       +17.3% | +794.578 KiB |   0.1% → 0.2% | 4.48 MiB → 5.26 MiB |         28 → 27 | `copyOf(Object[], int, Class)`                    | `java.util.Arrays`                                       |
|       +12.8% | +683.757 KiB |          0.2% | 5.21 MiB → 5.87 MiB |       435 → 390 | `main(String[])`                                  | `org.renaissance.harness.RenaissanceSuite$`              |

##### Standard library

|       Change |        Delta |             % |                Size |         Samples | Function                                          | Location                                                 |
| -----------: | -----------: | ------------: | ------------------: | --------------: | ------------------------------------------------- | -------------------------------------------------------- |
|        +1.0% |  +11.759 MiB | 37.3% → 38.1% | 1.16 GiB → 1.18 GiB | 29,894 → 29,867 | `toArray()`                                       | `java.util.ArrayList`                                    |
|          new |   +5.936 MiB |   0.0% → 0.2% |      0 B → 5.94 MiB |         0 → 393 | `invokeStatic(Object, Object)`                    | `java.lang.invoke.LambdaForm$DMH.0x0000000801004800`     |
|          new |   +5.936 MiB |   0.0% → 0.2% |      0 B → 5.94 MiB |         0 → 393 | `invoke(Object, Object, Object)`                  | `java.lang.invoke.LambdaForm$MH.0x0000000801009800`      |
| +13479660.0% |   +5.142 MiB |  <0.1% → 0.2% |     40 B → 5.14 MiB |           1 → 5 | `accept(Object, Object)`                          | `java.util.stream.Collectors$$Lambda.0x0000000801070ab8` |
|       +10.2% | +946.476 KiB |          0.3% | 9.04 MiB → 9.96 MiB | 12,439 → 12,749 | `grow()`                                          | `java.util.ArrayList`                                    |
|       +10.2% | +946.476 KiB |          0.3% | 9.04 MiB → 9.96 MiB | 12,439 → 12,749 | `add(Object, Object[], int)`                      | `java.util.ArrayList`                                    |
|       +10.2% | +946.476 KiB |          0.3% | 9.04 MiB → 9.96 MiB | 12,439 → 12,749 | `add(Object)`                                     | `java.util.ArrayList`                                    |
|       +18.2% | +810.515 KiB |   0.1% → 0.2% | 4.35 MiB → 5.14 MiB |           4 → 5 | `accept(Object)`                                  | `java.util.stream.ReduceOps$3ReducingSink`               |
|       +18.1% |     +809 KiB |   0.1% → 0.2% | 4.36 MiB → 5.15 MiB |       382 → 325 | `accept(int)`                                     | `java.util.stream.IntPipeline$1$1`                       |
|       +18.1% |     +809 KiB |   0.1% → 0.2% | 4.36 MiB → 5.15 MiB |       382 → 325 | `forEachRemaining(IntConsumer)`                   | `java.util.stream.Streams$RangeIntSpliterator`           |
|       +18.1% |     +809 KiB |   0.1% → 0.2% | 4.36 MiB → 5.15 MiB |       382 → 325 | `forEachRemaining(Consumer)`                      | `java.util.Spliterator$OfInt`                            |
|       +18.1% |  +808.96 KiB |   0.1% → 0.2% | 4.36 MiB → 5.15 MiB |       394 → 336 | `wrapAndCopyInto(Sink, Spliterator)`              | `java.util.stream.AbstractPipeline`                      |
|       +18.1% |  +808.96 KiB |   0.1% → 0.2% | 4.36 MiB → 5.15 MiB |       383 → 325 | `evaluateSequential(PipelineHelper, Spliterator)` | `java.util.stream.ReduceOps$ReduceOp`                    |
|       +18.1% |  +808.96 KiB |   0.1% → 0.2% | 4.36 MiB → 5.15 MiB |       383 → 325 | `evaluate(TerminalOp)`                            | `java.util.stream.AbstractPipeline`                      |
|       +18.1% |  +808.96 KiB |   0.1% → 0.2% | 4.36 MiB → 5.15 MiB |       383 → 325 | `collect(Collector)`                              | `java.util.stream.ReferencePipeline`                     |
|       +18.1% | +808.937 KiB |   0.1% → 0.2% | 4.36 MiB → 5.15 MiB |       394 → 335 | `copyInto(Sink, Spliterator)`                     | `java.util.stream.AbstractPipeline`                      |
|       +17.3% | +794.578 KiB |   0.1% → 0.2% | 4.48 MiB → 5.26 MiB |         28 → 27 | `copyOf(Object[], int, Class)`                    | `java.util.Arrays`                                       |
|       +12.2% | +608.789 KiB |          0.2% | 4.86 MiB → 5.45 MiB |       409 → 353 | `apply(Object)`                                   | `scala.runtime.function.JProcedure1`                     |
|       +12.2% | +608.789 KiB |          0.2% | 4.86 MiB → 5.45 MiB |       409 → 353 | `foreach(Function1)`                              | `scala.collection.immutable.List`                        |
|       +10.8% | +590.226 KiB |          0.2% | 5.36 MiB → 5.94 MiB |       443 → 393 | `invokeExact_MT(Object, Object, Object, Object)`  | `java.lang.invoke.Invokers$Holder`                       |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

| Change |       Delta |             % |                Size |         Samples | Function                                             | Location                                                               |
| -----: | ----------: | ------------: | ------------------: | --------------: | ---------------------------------------------------- | ---------------------------------------------------------------------- |
|  -2.4% | -47.248 MiB | 62.5% → 61.7% |  1.95 GiB → 1.9 GiB | 39,833 → 39,663 | `grow(int)`                                          | `java.util.ArrayList`                                                  |
|  -1.1% | -36.412 MiB | 99.5% → 99.4% |  3.1 GiB → 3.07 GiB | 57,507 → 57,035 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                                                    |
|  -1.1% | -36.412 MiB | 99.5% → 99.4% |  3.1 GiB → 3.07 GiB | 57,507 → 57,035 | `lambda$merge$7(Map, Object, List)`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -1.1% | -36.412 MiB | 99.5% → 99.4% |  3.1 GiB → 3.07 GiB | 57,507 → 57,035 | `accept(Object, Object)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88` |
|  -1.1% | -36.412 MiB | 99.5% → 99.4% |  3.1 GiB → 3.07 GiB | 57,507 → 57,035 | `forEach(BiConsumer)`                                | `java.util.HashMap`                                                    |
|  -1.1% | -36.412 MiB | 99.5% → 99.4% |  3.1 GiB → 3.07 GiB | 57,505 → 57,033 | `lambda$merge$6(List, List)`                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -1.1% | -36.412 MiB | 99.5% → 99.4% |  3.1 GiB → 3.07 GiB | 57,505 → 57,033 | `apply(Object, Object)`                              | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0` |
|  -1.1% | -36.412 MiB | 99.5% → 99.4% |  3.1 GiB → 3.07 GiB | 57,983 → 57,537 | `merge(Map, Map)`                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -1.1% | -36.411 MiB | 99.5% → 99.4% |  3.1 GiB → 3.07 GiB | 57,973 → 57,531 | `combineResults(Map, Map)`                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -1.1% | -36.411 MiB | 99.5% → 99.4% |  3.1 GiB → 3.07 GiB | 57,973 → 57,531 | `combineResults(Object, Object)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -1.1% | -36.042 MiB |         99.8% | 3.11 GiB → 3.08 GiB | 75,706 → 75,720 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  -1.1% | -36.042 MiB |         99.8% | 3.11 GiB → 3.08 GiB | 75,706 → 75,720 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                                   |
|  -1.1% | -36.042 MiB |         99.8% | 3.11 GiB → 3.08 GiB | 75,708 → 75,723 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                                    |
|  -1.1% | -36.042 MiB |         99.8% | 3.11 GiB → 3.08 GiB | 75,708 → 75,723 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|  -1.1% | -36.042 MiB |         99.8% | 3.11 GiB → 3.08 GiB | 75,708 → 75,723 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                                    |
|  -1.1% | -36.042 MiB |         99.8% | 3.11 GiB → 3.08 GiB | 75,708 → 75,723 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                                    |
|  -1.1% | -36.042 MiB |         99.8% | 3.11 GiB → 3.08 GiB | 75,708 → 75,723 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                            |
|  -1.1% | -35.491 MiB |         99.8% | 3.11 GiB → 3.08 GiB | 69,295 → 69,063 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                                     |
|  -1.4% | -35.204 MiB | 81.0% → 80.8% | 2.52 GiB → 2.49 GiB | 42,853 → 42,397 | `addAll(Collection)`                                 | `java.util.ArrayList`                                                  |
|  -1.6% | -31.317 MiB | 62.7% → 62.4% | 1.95 GiB → 1.92 GiB | 15,275 → 15,062 | `lambda$run$0(int, List, int)`                       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |

##### Standard library

|  Change |       Delta |             % |                Size |         Samples | Function                                                  | Location                                                 |
| ------: | ----------: | ------------: | ------------------: | --------------: | --------------------------------------------------------- | -------------------------------------------------------- |
|   -2.4% | -47.248 MiB | 62.5% → 61.7% |  1.95 GiB → 1.9 GiB | 39,833 → 39,663 | `grow(int)`                                               | `java.util.ArrayList`                                    |
|   -1.1% | -36.412 MiB | 99.5% → 99.4% |  3.1 GiB → 3.07 GiB | 57,507 → 57,035 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                                      |
|   -1.1% | -36.412 MiB | 99.5% → 99.4% |  3.1 GiB → 3.07 GiB | 57,507 → 57,035 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                                      |
|   -1.1% | -36.042 MiB |         99.8% | 3.11 GiB → 3.08 GiB | 75,706 → 75,720 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                     |
|   -1.1% | -36.042 MiB |         99.8% | 3.11 GiB → 3.08 GiB | 75,708 → 75,723 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                      |
|   -1.1% | -36.042 MiB |         99.8% | 3.11 GiB → 3.08 GiB | 75,708 → 75,723 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`            |
|   -1.1% | -36.042 MiB |         99.8% | 3.11 GiB → 3.08 GiB | 75,708 → 75,723 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                      |
|   -1.1% | -36.042 MiB |         99.8% | 3.11 GiB → 3.08 GiB | 75,708 → 75,723 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                      |
|   -1.1% | -36.042 MiB |         99.8% | 3.11 GiB → 3.08 GiB | 75,708 → 75,723 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`              |
|   -1.1% | -35.491 MiB |         99.8% | 3.11 GiB → 3.08 GiB | 69,295 → 69,063 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                                       |
|   -1.4% | -35.204 MiB | 81.0% → 80.8% | 2.52 GiB → 2.49 GiB | 42,853 → 42,397 | `addAll(Collection)`                                      | `java.util.ArrayList`                                    |
|   -1.6% | -31.317 MiB | 62.7% → 62.4% | 1.95 GiB → 1.92 GiB | 15,275 → 15,062 | `exec()`                                                  | `java.util.concurrent.ForkJoinTask$AdaptedCallable`      |
|   -1.6% | -31.315 MiB | 62.7% → 62.4% | 1.95 GiB → 1.92 GiB | 15,634 → 15,462 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                      |
|   -1.5% | -14.153 MiB | 30.2% → 30.1% |   963 MiB → 949 MiB | 59,789 → 59,844 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`            |
|   -1.5% | -14.143 MiB | 30.4% → 30.3% |   971 MiB → 957 MiB | 60,382 → 60,435 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                      |
|   -1.5% | -14.143 MiB | 30.4% → 30.3% |   971 MiB → 957 MiB | 60,382 → 60,435 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                      |
| removed |  -5.359 MiB |   0.2% → 0.0% |      5.36 MiB → 0 B |         443 → 0 | `invokeStatic(Object, Object)`                            | `java.lang.invoke.LambdaForm$DMH.0x0000007001004800`     |
| removed |  -5.359 MiB |   0.2% → 0.0% |      5.36 MiB → 0 B |         443 → 0 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000007001009800`      |
| removed |   -4.35 MiB |   0.1% → 0.0% |      4.35 MiB → 0 B |           3 → 0 | `accept(Object, Object)`                                  | `java.util.stream.Collectors$$Lambda.0x0000007001070ab8` |
|   -3.4% |  -2.046 MiB |   1.9% → 1.8% | 59.6 MiB → 57.5 MiB | 10,668 → 10,807 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                      |

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

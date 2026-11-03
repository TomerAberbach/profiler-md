# Allocated heap profile diff

Allocated 37 GiB → 36.8 GiB (-220.463 MiB, -0.6%) over 75,545 → 75,121 samples (514 KiB per sample).

| Category         | Change |        Delta |     % |                Size |         Samples |
| ---------------- | -----: | -----------: | ----: | ------------------: | --------------: |
| Standard library |  -0.6% | -224.963 MiB | 93.2% | 34.5 GiB → 34.3 GiB | 70,408 → 69,975 |
| Ours             |  +0.2% |   +4.499 MiB |  6.8% |            2.51 GiB |   5,137 → 5,146 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── 36.8 GiB → 36.6 GiB (99.4%) run() at java.util.concurrent.ForkJoinWorkerThread
│   └── 36.8 GiB → 36.6 GiB (99.4%) runWorker(ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool
│       └── 36.8 GiB → 36.6 GiB (99.4%) scan(ForkJoinPool$WorkQueue, int, int)
│           └── 36.8 GiB → 36.6 GiB (99.4%) topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool$WorkQueue
│               └── 36.8 GiB → 36.6 GiB (99.4%) doExec() at java.util.concurrent.ForkJoinTask
│                   └── … 36.8 GiB → 36.6 GiB (99.4%) exec() at java.util.concurrent.RecursiveTask
│                       └── 36.8 GiB → 36.6 GiB (99.4%) compute() at org.renaissance.jdk.concurrent.JavaKMeans$RangedTask
│                           ├── 28.3 GiB → 28 GiB (76.4% → 76.1%) combineResults(Object, Object) at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│                           │   └── 28.3 GiB → 28 GiB (76.4% → 76.1%) combineResults(Map, Map)
│                           │       └── 28.3 GiB → 28 GiB (76.4% → 76.1%) merge(Map, Map) at org.renaissance.jdk.concurrent.JavaKMeans
│                           │           ├── … 28 GiB → 27.8 GiB (75.7% → 75.5%) lambda$merge$6(List, List) at org.renaissance.jdk.concurrent.JavaKMeans
│                           │           │   ├── 20.8 GiB (56.2% → 56.5%) addAll(Collection) at java.util.ArrayList
│                           │           │   │   ├── 13.6 GiB → 13.4 GiB (36.6% → 36.4%) grow(int)
│                           │           │   │   │   └── 13.6 GiB → 13.4 GiB (36.6% → 36.4%, self 36.6% → 36.4%, self 91.0% → 90.9% globally) copyOf(Object[], int) at java.util.Arrays
│                           │           │   │   └── 7.26 GiB → 7.39 GiB (19.6% → 20.1%) toArray()
│                           │           │   │       └── 7.26 GiB → 7.39 GiB (19.6% → 20.1%, self 19.6% → 20.0%) copyOf(Object[], int) at java.util.Arrays
│                           │           │   └── … 7.11 GiB → 6.92 GiB (19.2% → 18.8%, self 19.2% → 18.8%) copyOf(Object[], int) at java.util.Arrays
│                           │           └── … 175 MiB → 182 MiB (0.5%) putVal(int, Object, Object, boolean, boolean) at java.util.HashMap
│                           ├── 8.07 GiB (21.8% → 21.9%) computeDirectly() at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│                           │   ├── … 6.42 GiB → 6.37 GiB (17.3%) collectClusters(int[]) at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│                           │   │   ├── … 6.02 GiB → 6.01 GiB (16.3%, self 0.6%) grow(int) at java.util.ArrayList
│                           │   │   │   └── 5.78 GiB → 5.79 GiB (15.6% → 15.7%, self 15.6% → 15.7%) copyOf(Object[], int) at java.util.Arrays
│                           │   │   └── 301 MiB → 308 MiB (0.8%) computeIfAbsent(Object, Function) at java.util.HashMap
│                           │   │       ├── 114 MiB → 147 MiB (0.3% → 0.4%) newNode(int, Object, Object, HashMap$Node)
│                           │   │       ├── 110 MiB → 96.5 MiB (0.3%) apply(Object) at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011a3940
│                           │   │       │   └── 110 MiB → 96.5 MiB (0.3%) lambda$collectClusters$0(Double[]) at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│                           │   │       └── 76.5 MiB → 65 MiB (0.2%) resize()
│                           │   └── … 1.65 GiB → 1.69 GiB (4.4% → 4.6%) findNearestCentroid() at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│                           ├── 151 MiB → 177 MiB (0.4% → 0.5%) createSubtask(int, int) at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│                           ├── 140 MiB → 147 MiB (0.4%) createSubtask(int, int) at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│                           ├── 75.5 MiB → 85.5 MiB (0.2%) computeDirectly() at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│                           │   └── … 75.5 MiB → 85.5 MiB (0.2%) vectorSum() at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│                           └── … 70.5 MiB → 84.5 MiB (0.2%) add(double[], double[]) at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
└── … 207 MiB → 199 MiB (0.5%) applyVoid(Object) at org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111ede0
    ├── … 0 B → 166 MiB (0.0% → 0.4%) apply(int) at org.renaissance.jdk.concurrent.JavaKMeans$$Lambda
    │   ├── 0 B → 84.5 MiB (0.0% → 0.2%) lambda$generateData$5(int, int, Random[], int) at org.renaissance.jdk.concurrent.JavaKMeans
    │   │   └── 0 B → 43 MiB (0.0% → 0.1%) range(int, int) at java.util.stream.IntStream
    │   └── 0 B → 63 MiB (0.0% → 0.2%) lambda$generateData$3(int, int, Random[], int) at org.renaissance.jdk.concurrent.JavaKMeans
    │       └── 0 B → 63 MiB (0.0% → 0.2%) valueOf(double) at java.lang.Double
    └── … 27 MiB → 0 B (0.1% → 0.0%) mapToObj(IntFunction, int) at java.util.stream.IntPipeline
```

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |          Delta |            % |                Size |       Samples | Function                                                                        | Location                                                   |
| ------: | -------------: | -----------: | ------------------: | ------------: | ------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|   +2.8% |    +46.499 MiB |  4.4% → 4.6% | 1.65 GiB → 1.69 GiB | 3,371 → 3,464 | `findNearestCentroid()`                                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +14.9% |    +37.999 MiB |  0.7% → 0.8% |   254 MiB → 292 MiB |     509 → 585 | `newNode(int, Object, Object, HashMap$Node)`                                    | `java.util.HashMap`                                        |
|  +16.8% |    +25.499 MiB |  0.4% → 0.5% |   151 MiB → 177 MiB |     303 → 354 | `createSubtask(int, int)`                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +19.9% |    +13.999 MiB |         0.2% | 70.5 MiB → 84.5 MiB |     141 → 169 | `add(double[], double[])`                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +80.2% |     +9.999 MiB | <0.1% → 0.1% | 12.5 MiB → 22.5 MiB |       19 → 39 | `copyOf(Object[], int, Class)`                                                  | `java.util.Arrays`                                         |
|  +13.2% |     +9.999 MiB |         0.2% | 75.5 MiB → 85.5 MiB |     151 → 171 | `vectorSum()`                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   +5.0% |     +6.999 MiB |         0.4% |   140 MiB → 147 MiB |     280 → 294 | `createSubtask(int, int)`                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +31.6% |     +2.999 MiB |        <0.1% |  9.5 MiB → 12.5 MiB |       19 → 25 | `builder(long, IntFunction)`                                                    | `java.util.stream.Nodes`                                   |
|   +3.3% |     +1.999 MiB |         0.2% | 61.5 MiB → 63.5 MiB |     123 → 127 | `valueOf(double)`                                                               | `java.lang.Double`                                         |
|  +10.3% |     +1.499 MiB |        <0.1% |   14.5 MiB → 16 MiB |       29 → 32 | `copyOf(byte[], int)`                                                           | `java.util.Arrays`                                         |
|  +10.7% |     +1.499 MiB |        <0.1% |   14 MiB → 15.5 MiB |       28 → 31 | `range(int, int)`                                                               | `java.util.stream.IntStream`                               |
| +300.0% |     +1.499 MiB |        <0.1% |     512 KiB → 2 MiB |         1 → 4 | `div(double[], int)`                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|     new |     +1.499 MiB | 0.0% → <0.1% |       0 B → 1.5 MiB |         0 → 3 | `result()`                                                                      | `scala.collection.immutable.VectorBuilder`                 |
|     new | +1,023.998 KiB | 0.0% → <0.1% |         0 B → 1 MiB |         0 → 2 | `newString(byte[], int, int)`                                                   | `java.lang.StringLatin1`                                   |
|     new | +1,023.998 KiB | 0.0% → <0.1% |         0 B → 1 MiB |         0 → 2 | `transferTo(OutputStream)`                                                      | `java.io.InputStream`                                      |
|     new | +1,023.998 KiB | 0.0% → <0.1% |         0 B → 1 MiB |         0 → 2 | `<init>(InputStream, int)`                                                      | `java.util.jar.Manifest$FastInputStream`                   |
|  +50.0% |   +511.999 KiB |        <0.1% |     1 MiB → 1.5 MiB |         2 → 3 | `awaitDone(int, long)`                                                          | `java.util.concurrent.ForkJoinTask`                        |
|     new |   +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |         0 → 1 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                                    |
|     new |   +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |         0 → 1 | `checkResource(String, boolean, JarEntry)`                                      | `jdk.internal.loader.URLClassPath$JarLoader`               |
|   +1.9% |   +511.999 KiB |         0.1% |   27 MiB → 27.5 MiB |       54 → 55 | `intStream(Spliterator$OfInt, boolean)`                                         | `java.util.stream.StreamSupport`                           |

##### Standard library

| Change |          Delta |            % |                Size |   Samples | Function                                                                                                                 | Location                                       |
| -----: | -------------: | -----------: | ------------------: | --------: | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- |
| +14.9% |    +37.999 MiB |  0.7% → 0.8% |   254 MiB → 292 MiB | 509 → 585 | `newNode(int, Object, Object, HashMap$Node)`                                                                             | `java.util.HashMap`                            |
| +80.2% |     +9.999 MiB | <0.1% → 0.1% | 12.5 MiB → 22.5 MiB |   19 → 39 | `copyOf(Object[], int, Class)`                                                                                           | `java.util.Arrays`                             |
| +31.6% |     +2.999 MiB |        <0.1% |  9.5 MiB → 12.5 MiB |   19 → 25 | `builder(long, IntFunction)`                                                                                             | `java.util.stream.Nodes`                       |
|  +3.3% |     +1.999 MiB |         0.2% | 61.5 MiB → 63.5 MiB | 123 → 127 | `valueOf(double)`                                                                                                        | `java.lang.Double`                             |
| +10.3% |     +1.499 MiB |        <0.1% |   14.5 MiB → 16 MiB |   29 → 32 | `copyOf(byte[], int)`                                                                                                    | `java.util.Arrays`                             |
| +10.7% |     +1.499 MiB |        <0.1% |   14 MiB → 15.5 MiB |   28 → 31 | `range(int, int)`                                                                                                        | `java.util.stream.IntStream`                   |
|    new |     +1.499 MiB | 0.0% → <0.1% |       0 B → 1.5 MiB |     0 → 3 | `result()`                                                                                                               | `scala.collection.immutable.VectorBuilder`     |
|    new | +1,023.998 KiB | 0.0% → <0.1% |         0 B → 1 MiB |     0 → 2 | `newString(byte[], int, int)`                                                                                            | `java.lang.StringLatin1`                       |
|    new | +1,023.998 KiB | 0.0% → <0.1% |         0 B → 1 MiB |     0 → 2 | `transferTo(OutputStream)`                                                                                               | `java.io.InputStream`                          |
|    new | +1,023.998 KiB | 0.0% → <0.1% |         0 B → 1 MiB |     0 → 2 | `<init>(InputStream, int)`                                                                                               | `java.util.jar.Manifest$FastInputStream`       |
| +50.0% |   +511.999 KiB |        <0.1% |     1 MiB → 1.5 MiB |     2 → 3 | `awaitDone(int, long)`                                                                                                   | `java.util.concurrent.ForkJoinTask`            |
|    new |   +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |     0 → 1 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)`                                          | `java.lang.ClassLoader`                        |
|    new |   +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |     0 → 1 | `checkResource(String, boolean, JarEntry)`                                                                               | `jdk.internal.loader.URLClassPath$JarLoader`   |
|  +1.9% |   +511.999 KiB |         0.1% |   27 MiB → 27.5 MiB |   54 → 55 | `intStream(Spliterator$OfInt, boolean)`                                                                                  | `java.util.stream.StreamSupport`               |
|    new |   +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |     0 → 1 | `<init>(MethodHandles$Lookup, MethodType, String, MethodType, MethodHandle, MethodType, boolean, Class[], MethodType[])` | `java.lang.invoke.InnerClassLambdaMetafactory` |
|    new |   +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |     0 → 1 | `load(DataInputStream)`                                                                                                  | `sun.util.calendar.ZoneInfoFile`               |
|    new |   +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |     0 → 1 | `clone()`                                                                                                                | `java.lang.Object`                             |
|    new |   +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |     0 → 1 | `compress(char[], int, int)`                                                                                             | `java.lang.StringUTF16`                        |
|    new |   +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |     0 → 1 | `newLinkedHashMap(int)`                                                                                                  | `java.util.LinkedHashMap`                      |
|    new |   +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |     0 → 1 | `<init>(ClassWriter)`                                                                                                    | `jdk.internal.org.objectweb.asm.SymbolTable`   |

##### Ours

|  Change |       Delta |           % |                Size |       Samples | Function                  | Location                                                   |
| ------: | ----------: | ----------: | ------------------: | ------------: | ------------------------- | ---------------------------------------------------------- |
|   +2.8% | +46.499 MiB | 4.4% → 4.6% | 1.65 GiB → 1.69 GiB | 3,371 → 3,464 | `findNearestCentroid()`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +16.8% | +25.499 MiB | 0.4% → 0.5% |   151 MiB → 177 MiB |     303 → 354 | `createSubtask(int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +19.9% | +13.999 MiB |        0.2% | 70.5 MiB → 84.5 MiB |     141 → 169 | `add(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +13.2% |  +9.999 MiB |        0.2% | 75.5 MiB → 85.5 MiB |     151 → 171 | `vectorSum()`             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   +5.0% |  +6.999 MiB |        0.4% |   140 MiB → 147 MiB |     280 → 294 | `createSubtask(int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +300.0% |  +1.499 MiB |       <0.1% |     512 KiB → 2 MiB |         1 → 4 | `div(double[], int)`      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

#### Improvements

Functions with the largest decrease in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |          Delta |             % |                Size |         Samples | Function                                          | Location                                                   |
| ------: | -------------: | ------------: | ------------------: | --------------: | ------------------------------------------------- | ---------------------------------------------------------- |
|   -0.7% |   -231.963 MiB | 91.0% → 90.9% | 33.7 GiB → 33.5 GiB | 68,709 → 68,262 | `copyOf(Object[], int)`                           | `java.util.Arrays`                                         |
|  -38.0% |    -41.999 MiB |   0.3% → 0.2% |  110 MiB → 68.5 MiB |       221 → 137 | `collectClusters(int[])`                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -18.6% |    -20.499 MiB |   0.3% → 0.2% |  110 MiB → 89.5 MiB |       220 → 179 | `lambda$merge$6(List, List)`                      | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|   -7.9% |    -19.499 MiB |          0.6% |   246 MiB → 226 MiB |       492 → 453 | `grow(int)`                                       | `java.util.ArrayList`                                      |
|  -23.4% |    -17.999 MiB |          0.2% |     77 MiB → 59 MiB |       154 → 118 | `merge(Map, Map)`                                 | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -12.7% |    -13.999 MiB |          0.3% |  110 MiB → 96.5 MiB |       221 → 193 | `lambda$collectClusters$0(Double[])`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -9.8% |    -11.499 MiB |          0.3% |   117 MiB → 106 MiB |       235 → 212 | `resize()`                                        | `java.util.HashMap`                                        |
|  -24.1% |     -6.499 MiB |          0.1% |   27 MiB → 20.5 MiB |         54 → 41 | `mapToObj(IntFunction, int)`                      | `java.util.stream.IntPipeline`                             |
|  -26.9% |     -3.499 MiB |         <0.1% |    13 MiB → 9.5 MiB |         26 → 19 | `entrySet()`                                      | `java.util.HashMap`                                        |
|  -29.2% |     -3.499 MiB |         <0.1% |    12 MiB → 8.5 MiB |         24 → 17 | `allocateInstance(Object)`                        | `java.lang.invoke.DirectMethodHandle`                      |
|  -50.0% |     -2.999 MiB |         <0.1% |       6 MiB → 3 MiB |          12 → 6 | `allocateInstance(Class)`                         | `jdk.internal.misc.Unsafe`                                 |
|  -35.7% |     -2.499 MiB |         <0.1% |     7 MiB → 4.5 MiB |          14 → 9 | `computeClusterAverages()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -66.7% | -1,023.998 KiB |         <0.1% |   1.5 MiB → 512 KiB |           3 → 1 | `lambda$run$0(int, List, int)`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -12.5% | -1,023.998 KiB |         <0.1% |       8 MiB → 7 MiB |         16 → 14 | `<init>(InputStream, Inflater, int)`              | `java.util.zip.InflaterInputStream`                        |
|   -7.7% | -1,023.998 KiB |         <0.1% |     13 MiB → 12 MiB |         26 → 24 | `opWrapSink(int, Sink)`                           | `java.util.stream.IntPipeline$1`                           |
|  -66.7% | -1,023.998 KiB |         <0.1% |   1.5 MiB → 512 KiB |           3 → 1 | `opWrapSink(int, Sink)`                           | `java.util.stream.DoublePipeline$1`                        |
|  -50.0% |   -511.999 KiB |         <0.1% |     1 MiB → 512 KiB |           2 → 1 | `average(List)`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| removed |   -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `ASCII_DIGIT()`                                   | `java.util.regex.CharPredicates`                           |
| removed |   -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `getContents()`                                   | `sun.text.resources.cldr.FormatData`                       |
| removed |   -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `newFileChannel(int, UnixPath, String, Set, int)` | `sun.nio.fs.UnixChannelFactory`                            |

##### Standard library

|  Change |          Delta |             % |                Size |         Samples | Function                                          | Location                                    |
| ------: | -------------: | ------------: | ------------------: | --------------: | ------------------------------------------------- | ------------------------------------------- |
|   -0.7% |   -231.963 MiB | 91.0% → 90.9% | 33.7 GiB → 33.5 GiB | 68,709 → 68,262 | `copyOf(Object[], int)`                           | `java.util.Arrays`                          |
|   -7.9% |    -19.499 MiB |          0.6% |   246 MiB → 226 MiB |       492 → 453 | `grow(int)`                                       | `java.util.ArrayList`                       |
|   -9.8% |    -11.499 MiB |          0.3% |   117 MiB → 106 MiB |       235 → 212 | `resize()`                                        | `java.util.HashMap`                         |
|  -24.1% |     -6.499 MiB |          0.1% |   27 MiB → 20.5 MiB |         54 → 41 | `mapToObj(IntFunction, int)`                      | `java.util.stream.IntPipeline`              |
|  -26.9% |     -3.499 MiB |         <0.1% |    13 MiB → 9.5 MiB |         26 → 19 | `entrySet()`                                      | `java.util.HashMap`                         |
|  -29.2% |     -3.499 MiB |         <0.1% |    12 MiB → 8.5 MiB |         24 → 17 | `allocateInstance(Object)`                        | `java.lang.invoke.DirectMethodHandle`       |
|  -50.0% |     -2.999 MiB |         <0.1% |       6 MiB → 3 MiB |          12 → 6 | `allocateInstance(Class)`                         | `jdk.internal.misc.Unsafe`                  |
|  -12.5% | -1,023.998 KiB |         <0.1% |       8 MiB → 7 MiB |         16 → 14 | `<init>(InputStream, Inflater, int)`              | `java.util.zip.InflaterInputStream`         |
|   -7.7% | -1,023.998 KiB |         <0.1% |     13 MiB → 12 MiB |         26 → 24 | `opWrapSink(int, Sink)`                           | `java.util.stream.IntPipeline$1`            |
|  -66.7% | -1,023.998 KiB |         <0.1% |   1.5 MiB → 512 KiB |           3 → 1 | `opWrapSink(int, Sink)`                           | `java.util.stream.DoublePipeline$1`         |
| removed |   -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `ASCII_DIGIT()`                                   | `java.util.regex.CharPredicates`            |
| removed |   -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `getContents()`                                   | `sun.text.resources.cldr.FormatData`        |
| removed |   -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `newFileChannel(int, UnixPath, String, Set, int)` | `sun.nio.fs.UnixChannelFactory`             |
| removed |   -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `<init>(int)`                                     | `jdk.internal.org.objectweb.asm.ByteVector` |
| removed |   -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `<init>()`                                        | `jdk.internal.org.objectweb.asm.ByteVector` |
|  -50.0% |   -511.999 KiB |         <0.1% |     1 MiB → 512 KiB |           2 → 1 | `readNBytes(int)`                                 | `java.io.InputStream`                       |
|  -33.3% |   -511.999 KiB |         <0.1% |     1.5 MiB → 1 MiB |           3 → 2 | `copyOfRangeByte(byte[], int, int)`               | `java.util.Arrays`                          |
| removed |   -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `allocateUninitializedArray0(Class, int)`         | `jdk.internal.misc.Unsafe`                  |
| removed |   -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `allocateUninitializedArray(Class, int)`          | `jdk.internal.misc.Unsafe`                  |
| removed |   -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `initClassName()`                                 | `java.lang.Class`                           |

##### Ours

|  Change |          Delta |            % |               Size |   Samples | Function                             | Location                                                   |
| ------: | -------------: | -----------: | -----------------: | --------: | ------------------------------------ | ---------------------------------------------------------- |
|  -38.0% |    -41.999 MiB |  0.3% → 0.2% | 110 MiB → 68.5 MiB | 221 → 137 | `collectClusters(int[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -18.6% |    -20.499 MiB |  0.3% → 0.2% | 110 MiB → 89.5 MiB | 220 → 179 | `lambda$merge$6(List, List)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -23.4% |    -17.999 MiB |         0.2% |    77 MiB → 59 MiB | 154 → 118 | `merge(Map, Map)`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -12.7% |    -13.999 MiB |         0.3% | 110 MiB → 96.5 MiB | 221 → 193 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -35.7% |     -2.499 MiB |        <0.1% |    7 MiB → 4.5 MiB |    14 → 9 | `computeClusterAverages()`           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -66.7% | -1,023.998 KiB |        <0.1% |  1.5 MiB → 512 KiB |     3 → 1 | `lambda$run$0(int, List, int)`       | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -50.0% |   -511.999 KiB |        <0.1% |    1 MiB → 512 KiB |     2 → 1 | `average(List)`                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -50.0% |   -511.999 KiB |        <0.1% |    1 MiB → 512 KiB |     2 → 1 | `collectGarbage(String)`             | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`   |
| removed |   -511.999 KiB | <0.1% → 0.0% |      512 KiB → 0 B |     1 → 0 | `<init>(JavaKMeans, Map)`            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| removed |   -511.999 KiB | <0.1% → 0.0% |      512 KiB → 0 B |     1 → 0 | `lambda$boxed$0(int)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |                Size |       Samples | Location                                                       |
| -----: | ----------: | -----: | ------------------: | ------------: | -------------------------------------------------------------- |
|  +2.8% | +46.499 MiB | 100.0% | 1.65 GiB → 1.69 GiB | 3,371 → 3,464 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:223` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

| Change |       Delta |      % |              Size |   Samples | Location                 |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------ |
| +14.9% | +37.999 MiB | 100.0% | 254 MiB → 292 MiB | 509 → 585 | `java.util.HashMap:1909` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |              Size |   Samples | Location                                                      |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------------------------------------------- |
| +16.8% | +25.499 MiB | 100.0% | 151 MiB → 177 MiB | 303 → 354 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |                Size |   Samples | Location                                                      |
| -----: | ----------: | -----: | ------------------: | --------: | ------------------------------------------------------------- |
| +19.9% | +13.999 MiB | 100.0% | 70.5 MiB → 84.5 MiB | 141 → 169 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:430` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

| Change |      Delta |      % |                Size | Samples | Location                |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------- |
| +80.2% | +9.999 MiB | 100.0% | 12.5 MiB → 22.5 MiB | 19 → 39 | `java.util.Arrays:3513` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |      Delta |      % |                Size |   Samples | Location                                                      |
| -----: | ---------: | -----: | ------------------: | --------: | ------------------------------------------------------------- |
| +13.2% | +9.999 MiB | 100.0% | 75.5 MiB → 85.5 MiB | 151 → 171 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |      Delta |      % |              Size |   Samples | Location                                                       |
| -----: | ---------: | -----: | ----------------: | --------: | -------------------------------------------------------------- |
|  +5.0% | +6.999 MiB | 100.0% | 140 MiB → 147 MiB | 280 → 294 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

| Change |      Delta |      % |               Size | Samples | Location                     |
| -----: | ---------: | -----: | -----------------: | ------: | ---------------------------- |
| +31.6% | +2.999 MiB | 100.0% | 9.5 MiB → 12.5 MiB | 19 → 25 | `java.util.stream.Nodes:168` |

##### `valueOf(double)` (`java.lang.Double`)

| Change |      Delta |      % |                Size |   Samples | Location               |
| -----: | ---------: | -----: | ------------------: | --------: | ---------------------- |
|  +3.3% | +1.999 MiB | 100.0% | 61.5 MiB → 63.5 MiB | 123 → 127 | `java.lang.Double:773` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

| Change |      Delta |      % |              Size | Samples | Location                |
| -----: | ---------: | -----: | ----------------: | ------: | ----------------------- |
| +10.3% | +1.499 MiB | 100.0% | 14.5 MiB → 16 MiB | 29 → 32 | `java.util.Arrays:3541` |

##### `range(int, int)` (`java.util.stream.IntStream`)

| Change |      Delta |      % |              Size | Samples | Location                          |
| -----: | ---------: | -----: | ----------------: | ------: | --------------------------------- |
| +10.7% | +1.499 MiB | 100.0% | 14 MiB → 15.5 MiB | 28 → 31 | `java.util.stream.IntStream:1083` |

##### `div(double[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |      Delta |      % |            Size | Samples | Location                                                   |
| ------: | ---------: | -----: | --------------: | ------: | ---------------------------------------------------------- |
| +300.0% | +1.499 MiB | 100.0% | 512 KiB → 2 MiB |   1 → 4 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:339` |

##### `result()` (`scala.collection.immutable.VectorBuilder`)

| Change |      Delta |             % |          Size | Samples | Location                                        |
| -----: | ---------: | ------------: | ------------: | ------: | ----------------------------------------------- |
|    new | +1.499 MiB | 0.0% → 100.0% | 0 B → 1.5 MiB |   0 → 3 | `scala.collection.immutable.VectorBuilder:1898` |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

| Change |          Delta |             % |        Size | Samples | Location                     |
| -----: | -------------: | ------------: | ----------: | ------: | ---------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `java.lang.StringLatin1:750` |

##### `transferTo(OutputStream)` (`java.io.InputStream`)

| Change |          Delta |             % |        Size | Samples | Location                  |
| -----: | -------------: | ------------: | ----------: | ------: | ------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `java.io.InputStream:794` |

##### `<init>(InputStream, int)` (`java.util.jar.Manifest$FastInputStream`)

| Change |          Delta |             % |        Size | Samples | Location                                     |
| -----: | -------------: | ------------: | ----------: | ------: | -------------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `java.util.jar.Manifest$FastInputStream:421` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |      % |            Size | Samples | Location                                |
| -----: | -----------: | -----: | --------------: | ------: | --------------------------------------- |
| +50.0% | +511.999 KiB | 100.0% | 1 MiB → 1.5 MiB |   2 → 3 | `java.util.concurrent.ForkJoinTask:437` |

##### `checkResource(String, boolean, JarEntry)` (`jdk.internal.loader.URLClassPath$JarLoader`)

| Change |        Delta |             % |          Size | Samples | Location                                         |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------ |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `jdk.internal.loader.URLClassPath$JarLoader:857` |

##### `intStream(Spliterator$OfInt, boolean)` (`java.util.stream.StreamSupport`)

| Change |        Delta |      % |              Size | Samples | Location                             |
| -----: | -----------: | -----: | ----------------: | ------: | ------------------------------------ |
|  +1.9% | +511.999 KiB | 100.0% | 27 MiB → 27.5 MiB | 54 → 55 | `java.util.stream.StreamSupport:138` |

##### `<init>(MethodHandles$Lookup, MethodType, String, MethodType, MethodHandle, MethodType, boolean, Class[], MethodType[])` (`java.lang.invoke.InnerClassLambdaMetafactory`)

| Change |        Delta |             % |          Size | Samples | Location                                           |
| -----: | -----------: | ------------: | ------------: | ------: | -------------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `java.lang.invoke.InnerClassLambdaMetafactory:185` |

##### `load(DataInputStream)` (`sun.util.calendar.ZoneInfoFile`)

| Change |        Delta |             % |          Size | Samples | Location                             |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------------ |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `sun.util.calendar.ZoneInfoFile:327` |

##### `compress(char[], int, int)` (`java.lang.StringUTF16`)

| Change |        Delta |             % |          Size | Samples | Location                    |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `java.lang.StringUTF16:211` |

##### `newLinkedHashMap(int)` (`java.util.LinkedHashMap`)

| Change |        Delta |             % |          Size | Samples | Location                       |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------ |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `java.util.LinkedHashMap:1078` |

##### `<init>(ClassWriter)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change |        Delta |             % |          Size | Samples | Location                                         |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------ |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `jdk.internal.org.objectweb.asm.SymbolTable:156` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |        Delta |      % |                Size |         Samples | Location                |
| -----: | -----------: | -----: | ------------------: | --------------: | ----------------------- |
|  -0.7% | -231.963 MiB | 100.0% | 33.7 GiB → 33.5 GiB | 68,709 → 68,262 | `java.util.Arrays:3482` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |               Size |   Samples | Location                                                       |
| -----: | ----------: | -----: | -----------------: | --------: | -------------------------------------------------------------- |
| -38.0% | -41.999 MiB | 100.0% | 110 MiB → 68.5 MiB | 221 → 137 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:209` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |       Delta |      % |               Size |   Samples | Location                                        |
| -----: | ----------: | -----: | -----------------: | --------: | ----------------------------------------------- |
| -18.6% | -20.499 MiB | 100.0% | 110 MiB → 89.5 MiB | 220 → 179 | `org.renaissance.jdk.concurrent.JavaKMeans:114` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |       Delta |      % |              Size |   Samples | Location                  |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------- |
|  -7.9% | -19.499 MiB | 100.0% | 246 MiB → 226 MiB | 492 → 453 | `java.util.ArrayList:239` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |       Delta |      % |            Size |   Samples | Location                                        |
| -----: | ----------: | -----: | --------------: | --------: | ----------------------------------------------- |
| -23.4% | -17.999 MiB | 100.0% | 77 MiB → 59 MiB | 154 → 118 | `org.renaissance.jdk.concurrent.JavaKMeans:110` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |               Size |   Samples | Location                                                       |
| -----: | ----------: | -----: | -----------------: | --------: | -------------------------------------------------------------- |
| -12.7% | -13.999 MiB | 100.0% | 110 MiB → 96.5 MiB | 221 → 193 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |

##### `resize()` (`java.util.HashMap`)

| Change |       Delta |      % |              Size |   Samples | Location                |
| -----: | ----------: | -----: | ----------------: | --------: | ----------------------- |
|  -9.8% | -11.499 MiB | 100.0% | 117 MiB → 106 MiB | 235 → 212 | `java.util.HashMap:710` |

##### `mapToObj(IntFunction, int)` (`java.util.stream.IntPipeline`)

| Change |      Delta |      % |              Size | Samples | Location                           |
| -----: | ---------: | -----: | ----------------: | ------: | ---------------------------------- |
| -24.1% | -6.499 MiB | 100.0% | 27 MiB → 20.5 MiB | 54 → 41 | `java.util.stream.IntPipeline:174` |

##### `entrySet()` (`java.util.HashMap`)

| Change |      Delta |      % |             Size | Samples | Location                 |
| -----: | ---------: | -----: | ---------------: | ------: | ------------------------ |
| -26.9% | -3.499 MiB | 100.0% | 13 MiB → 9.5 MiB | 26 → 19 | `java.util.HashMap:1099` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

| Change |      Delta |      % |             Size | Samples | Location                                  |
| -----: | ---------: | -----: | ---------------: | ------: | ----------------------------------------- |
| -29.2% | -3.499 MiB | 100.0% | 12 MiB → 8.5 MiB | 24 → 17 | `java.lang.invoke.DirectMethodHandle:501` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |      Delta |      % |            Size | Samples | Location                                                   |
| -----: | ---------: | -----: | --------------: | ------: | ---------------------------------------------------------- |
| -35.7% | -2.499 MiB | 100.0% | 7 MiB → 4.5 MiB |  14 → 9 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:314` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |          Delta |      % |              Size | Samples | Location                                       |
| -----: | -------------: | -----: | ----------------: | ------: | ---------------------------------------------- |
| -66.7% | -1,023.998 KiB | 100.0% | 1.5 MiB → 512 KiB |   3 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans:53` |

##### `<init>(InputStream, Inflater, int)` (`java.util.zip.InflaterInputStream`)

|  Change |        Delta |              % |            Size | Samples | Location                                |
| ------: | -----------: | -------------: | --------------: | ------: | --------------------------------------- |
|   -6.7% | -511.999 KiB | 93.8% → 100.0% | 7.5 MiB → 7 MiB | 15 → 14 | `java.util.zip.InflaterInputStream:89`  |
| removed | -511.999 KiB |    6.3% → 0.0% |   512 KiB → 0 B |   1 → 0 | `java.util.zip.InflaterInputStream:113` |

##### `opWrapSink(int, Sink)` (`java.util.stream.IntPipeline$1`)

| Change |          Delta |      % |            Size | Samples | Location                             |
| -----: | -------------: | -----: | --------------: | ------: | ------------------------------------ |
|  -7.7% | -1,023.998 KiB | 100.0% | 13 MiB → 12 MiB | 26 → 24 | `java.util.stream.IntPipeline$1:177` |

##### `opWrapSink(int, Sink)` (`java.util.stream.DoublePipeline$1`)

| Change |          Delta |      % |              Size | Samples | Location                                |
| -----: | -------------: | -----: | ----------------: | ------: | --------------------------------------- |
| -66.7% | -1,023.998 KiB | 100.0% | 1.5 MiB → 512 KiB |   3 → 1 | `java.util.stream.DoublePipeline$1:173` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |        Delta |      % |            Size | Samples | Location                                                   |
| -----: | -----------: | -----: | --------------: | ------: | ---------------------------------------------------------- |
| -50.0% | -511.999 KiB | 100.0% | 1 MiB → 512 KiB |   2 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:332` |

##### `ASCII_DIGIT()` (`java.util.regex.CharPredicates`)

|  Change |        Delta |             % |          Size | Samples | Location                             |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------ |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `java.util.regex.CharPredicates:421` |

##### `getContents()` (`sun.text.resources.cldr.FormatData`)

|  Change |        Delta |             % |          Size | Samples | Location                                 |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `sun.text.resources.cldr.FormatData:318` |

##### `newFileChannel(int, UnixPath, String, Set, int)` (`sun.nio.fs.UnixChannelFactory`)

|  Change |        Delta |             % |          Size | Samples | Location                            |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `sun.nio.fs.UnixChannelFactory:134` |

##### `<init>(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

|  Change |        Delta |             % |          Size | Samples | Location                                       |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `jdk.internal.org.objectweb.asm.ByteVector:87` |

##### `<init>()` (`jdk.internal.org.objectweb.asm.ByteVector`)

|  Change |        Delta |             % |          Size | Samples | Location                                       |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `jdk.internal.org.objectweb.asm.ByteVector:78` |

##### `readNBytes(int)` (`java.io.InputStream`)

|  Change |          Delta |             % |          Size | Samples | Location                  |
| ------: | -------------: | ------------: | ------------: | ------: | ------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% |   1 MiB → 0 B |   2 → 0 | `java.io.InputStream:408` |
|     new |   +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `java.io.InputStream:448` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

| Change |        Delta |      % |            Size | Samples | Location                |
| -----: | -----------: | -----: | --------------: | ------: | ----------------------- |
| -33.3% | -511.999 KiB | 100.0% | 1.5 MiB → 1 MiB |   3 → 2 | `java.util.Arrays:3863` |

##### `allocateUninitializedArray0(Class, int)` (`jdk.internal.misc.Unsafe`)

|  Change |        Delta |             % |          Size | Samples | Location                        |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `jdk.internal.misc.Unsafe:1387` |

##### `allocateUninitializedArray(Class, int)` (`jdk.internal.misc.Unsafe`)

|  Change |        Delta |             % |          Size | Samples | Location                        |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `jdk.internal.misc.Unsafe:1380` |

##### `collectGarbage(String)` (`org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`)

| Change |        Delta |      % |            Size | Samples | Location                                                    |
| -----: | -----------: | -----: | --------------: | ------: | ----------------------------------------------------------- |
| -50.0% | -511.999 KiB | 100.0% | 1 MiB → 512 KiB |   2 → 1 | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin:26` |

##### `<init>(JavaKMeans, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |        Delta |             % |          Size | Samples | Location                                                   |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:282` |

##### `lambda$boxed$0(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |        Delta |             % |          Size | Samples | Location                                                   |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:327` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |                Size |       Samples | Caller              | Location                                                   |
| -----: | ----------: | -----: | ------------------: | ------------: | ------------------- | ---------------------------------------------------------- |
|  +2.8% | +46.499 MiB | 100.0% | 1.65 GiB → 1.69 GiB | 3,371 → 3,464 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

| Change |       Delta |             % |              Size |   Samples | Caller                                          | Location            |
| -----: | ----------: | ------------: | ----------------: | --------: | ----------------------------------------------- | ------------------- |
| +28.4% | +32.499 MiB | 45.0% → 50.3% | 114 MiB → 147 MiB | 229 → 294 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |
|  +3.9% |  +5.499 MiB | 54.8% → 49.6% | 139 MiB → 145 MiB | 279 → 290 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |              Size |   Samples | Caller      | Location                                               |
| -----: | ----------: | -----: | ----------------: | --------: | ----------- | ------------------------------------------------------ |
| +16.8% | +25.499 MiB | 100.0% | 151 MiB → 177 MiB | 303 → 354 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |                Size |   Samples | Caller                               | Location                                                  |
| -----: | ----------: | -----: | ------------------: | --------: | ------------------------------------ | --------------------------------------------------------- |
| +19.9% | +13.999 MiB | 100.0% | 70.5 MiB → 84.5 MiB | 141 → 169 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

| Change |      Delta |      % |                Size | Samples | Caller                  | Location           |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------- | ------------------ |
| +80.2% | +9.999 MiB | 100.0% | 12.5 MiB → 22.5 MiB | 19 → 39 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |      Delta |      % |                Size |   Samples | Caller              | Location                                                  |
| -----: | ---------: | -----: | ------------------: | --------: | ------------------- | --------------------------------------------------------- |
| +13.2% | +9.999 MiB | 100.0% | 75.5 MiB → 85.5 MiB | 151 → 171 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |      Delta |      % |              Size |   Samples | Caller      | Location                                               |
| -----: | ---------: | -----: | ----------------: | --------: | ----------- | ------------------------------------------------------ |
|  +5.0% | +6.999 MiB | 100.0% | 140 MiB → 147 MiB | 280 → 294 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

| Change |      Delta |      % |               Size | Samples | Caller                               | Location                             |
| -----: | ---------: | -----: | -----------------: | ------: | ------------------------------------ | ------------------------------------ |
| +31.6% | +2.999 MiB | 100.0% | 9.5 MiB → 12.5 MiB | 19 → 25 | `makeNodeBuilder(long, IntFunction)` | `java.util.stream.ReferencePipeline` |

##### `valueOf(double)` (`java.lang.Double`)

| Change |      Delta |             % |              Size |   Samples | Caller                                           | Location                                                     |
| -----: | ---------: | ------------: | ----------------: | --------: | ------------------------------------------------ | ------------------------------------------------------------ |
|  +6.8% | +3.999 MiB | 95.9% → 99.2% |   59 MiB → 63 MiB | 118 → 126 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                  |
| -80.0% | -1.999 MiB |   4.1% → 0.8% | 2.5 MiB → 512 KiB |     5 → 1 | `apply(double)`                                  | `java.util.stream.DoublePipeline$$Lambda.0x00000070011c2320` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

| Change |          Delta |             % |                Size | Samples | Caller                        | Location                          |
| -----: | -------------: | ------------: | ------------------: | ------: | ----------------------------- | --------------------------------- |
|  +7.4% | +1,023.998 KiB | 93.1% → 90.6% | 13.5 MiB → 14.5 MiB | 27 → 29 | `getBytes()`                  | `jdk.internal.loader.Resource`    |
| +50.0% |   +511.999 KiB |   6.9% → 9.4% |     1 MiB → 1.5 MiB |   2 → 3 | `ensureCapacityInternal(int)` | `java.lang.AbstractStringBuilder` |

##### `range(int, int)` (`java.util.stream.IntStream`)

| Change |      Delta |      % |              Size | Samples | Caller                                           | Location                                    |
| -----: | ---------: | -----: | ----------------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| +10.7% | +1.499 MiB | 100.0% | 14 MiB → 15.5 MiB | 28 → 31 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `div(double[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |      Delta |      % |            Size | Samples | Caller          | Location                                               |
| ------: | ---------: | -----: | --------------: | ------: | --------------- | ------------------------------------------------------ |
| +300.0% | +1.499 MiB | 100.0% | 512 KiB → 2 MiB |   1 → 4 | `average(List)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `result()` (`scala.collection.immutable.VectorBuilder`)

| Change |      Delta |             % |          Size | Samples | Caller     | Location                                   |
| -----: | ---------: | ------------: | ------------: | ------: | ---------- | ------------------------------------------ |
|    new | +1.499 MiB | 0.0% → 100.0% | 0 B → 1.5 MiB |   0 → 3 | `result()` | `scala.collection.immutable.VectorBuilder` |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

| Change |          Delta |             % |        Size | Samples | Caller                | Location           |
| -----: | -------------: | ------------: | ----------: | ------: | --------------------- | ------------------ |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `substring(int, int)` | `java.lang.String` |

##### `transferTo(OutputStream)` (`java.io.InputStream`)

| Change |          Delta |             % |        Size | Samples | Caller                                  | Location              |
| -----: | -------------: | ------------: | ----------: | ------: | --------------------------------------- | --------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `copy(InputStream, Path, CopyOption[])` | `java.nio.file.Files` |

##### `<init>(InputStream, int)` (`java.util.jar.Manifest$FastInputStream`)

| Change |          Delta |             % |        Size | Samples | Caller                | Location                                 |
| -----: | -------------: | ------------: | ----------: | ------: | --------------------- | ---------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `<init>(InputStream)` | `java.util.jar.Manifest$FastInputStream` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |      % |            Size | Samples | Caller   | Location                            |
| -----: | -----------: | -----: | --------------: | ------: | -------- | ----------------------------------- |
| +50.0% | +511.999 KiB | 100.0% | 1 MiB → 1.5 MiB |   2 → 3 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

| Change |        Delta |             % |          Size | Samples | Caller                                                    | Location                |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------------------------------- | ----------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `checkResource(String, boolean, JarEntry)` (`jdk.internal.loader.URLClassPath$JarLoader`)

| Change |        Delta |             % |          Size | Samples | Caller                         | Location                                     |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------ | -------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `getResource(String, boolean)` | `jdk.internal.loader.URLClassPath$JarLoader` |

##### `intStream(Spliterator$OfInt, boolean)` (`java.util.stream.StreamSupport`)

| Change |        Delta |      % |              Size | Samples | Caller            | Location                     |
| -----: | -----------: | -----: | ----------------: | ------: | ----------------- | ---------------------------- |
|  +1.9% | +511.999 KiB | 100.0% | 27 MiB → 27.5 MiB | 54 → 55 | `range(int, int)` | `java.util.stream.IntStream` |

##### `<init>(MethodHandles$Lookup, MethodType, String, MethodType, MethodHandle, MethodType, boolean, Class[], MethodType[])` (`java.lang.invoke.InnerClassLambdaMetafactory`)

| Change |        Delta |             % |          Size | Samples | Caller                                                               | Location                             |
| -----: | -----------: | ------------: | ------------: | ------: | -------------------------------------------------------------------- | ------------------------------------ |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `altMetafactory(MethodHandles$Lookup, String, MethodType, Object[])` | `java.lang.invoke.LambdaMetafactory` |

##### `load(DataInputStream)` (`sun.util.calendar.ZoneInfoFile`)

| Change |        Delta |             % |          Size | Samples | Caller  | Location                           |
| -----: | -----------: | ------------: | ------------: | ------: | ------- | ---------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `run()` | `sun.util.calendar.ZoneInfoFile$1` |

##### `clone()` (`java.lang.Object`)

| Change |        Delta |             % |          Size | Samples | Caller                          | Location           |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------- | ------------------ |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `compress(char[], int, int)` (`java.lang.StringUTF16`)

| Change |        Delta |             % |          Size | Samples | Caller                           | Location           |
| -----: | -----------: | ------------: | ------------: | ------: | -------------------------------- | ------------------ |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `<init>(char[], int, int, Void)` | `java.lang.String` |

##### `newLinkedHashMap(int)` (`java.util.LinkedHashMap`)

| Change |        Delta |             % |          Size | Samples | Caller        | Location                   |
| -----: | -----------: | ------------: | ------------: | ------: | ------------- | -------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `<init>(int)` | `java.util.jar.Attributes` |

##### `<init>(ClassWriter)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change |        Delta |             % |          Size | Samples | Caller                     | Location                                     |
| -----: | -----------: | ------------: | ------------: | ------: | -------------------------- | -------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `<init>(ClassReader, int)` | `jdk.internal.org.objectweb.asm.ClassWriter` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |        Delta |             % |                Size |         Samples | Caller      | Location              |
| -----: | -----------: | ------------: | ------------------: | --------------: | ----------- | --------------------- |
|  -0.8% | -157.464 MiB | 57.4% → 57.3% | 19.3 GiB → 19.2 GiB | 39,291 → 38,993 | `grow(int)` | `java.util.ArrayList` |
|  -0.5% |  -74.499 MiB | 42.6% → 42.7% | 14.4 GiB → 14.3 GiB | 29,418 → 29,269 | `toArray()` | `java.util.ArrayList` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |               Size |   Samples | Caller              | Location                                                   |
| -----: | ----------: | -----: | -----------------: | --------: | ------------------- | ---------------------------------------------------------- |
| -38.0% | -41.999 MiB | 100.0% | 110 MiB → 68.5 MiB | 221 → 137 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |       Delta |      % |               Size |   Samples | Caller                  | Location                                                               |
| -----: | ----------: | -----: | -----------------: | --------: | ----------------------- | ---------------------------------------------------------------------- |
| -18.6% | -20.499 MiB | 100.0% | 110 MiB → 89.5 MiB | 220 → 179 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |       Delta |      % |              Size |   Samples | Caller   | Location              |
| -----: | ----------: | -----: | ----------------: | --------: | -------- | --------------------- |
|  -7.9% | -19.499 MiB | 100.0% | 246 MiB → 226 MiB | 492 → 453 | `grow()` | `java.util.ArrayList` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |             % |              Size |   Samples | Caller                     | Location                                                   |
| -----: | -----------: | ------------: | ----------------: | --------: | -------------------------- | ---------------------------------------------------------- |
| -23.0% |  -17.499 MiB | 98.7% → 99.2% | 76 MiB → 58.5 MiB | 152 → 117 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -50.0% | -511.999 KiB |   1.3% → 0.8% |   1 MiB → 512 KiB |     2 → 1 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |               Size |   Samples | Caller          | Location                                                                              |
| -----: | ----------: | -----: | -----------------: | --------: | --------------- | ------------------------------------------------------------------------------------- |
| -12.7% | -13.999 MiB | 100.0% | 110 MiB → 96.5 MiB | 221 → 193 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011a3940` |

##### `resize()` (`java.util.HashMap`)

| Change |       Delta |             % |              Size |   Samples | Caller                              | Location            |
| -----: | ----------: | ------------: | ----------------: | --------: | ----------------------------------- | ------------------- |
| -15.0% | -11.499 MiB | 65.1% → 61.3% | 76.5 MiB → 65 MiB | 153 → 130 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |

##### `mapToObj(IntFunction, int)` (`java.util.stream.IntPipeline`)

| Change |      Delta |      % |              Size | Samples | Caller                  | Location                       |
| -----: | ---------: | -----: | ----------------: | ------: | ----------------------- | ------------------------------ |
| -24.1% | -6.499 MiB | 100.0% | 27 MiB → 20.5 MiB | 54 → 41 | `mapToObj(IntFunction)` | `java.util.stream.IntPipeline` |

##### `entrySet()` (`java.util.HashMap`)

| Change |      Delta |      % |             Size | Samples | Caller                        | Location            |
| -----: | ---------: | -----: | ---------------: | ------: | ----------------------------- | ------------------- |
| -26.9% | -3.499 MiB | 100.0% | 13 MiB → 9.5 MiB | 26 → 19 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

| Change |      Delta |      % |             Size | Samples | Caller                                       | Location                                             |
| -----: | ---------: | -----: | ---------------: | ------: | -------------------------------------------- | ---------------------------------------------------- |
| -29.2% | -3.499 MiB | 100.0% | 12 MiB → 8.5 MiB | 24 → 17 | `newInvokeSpecial(Object, int, int, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070011a4400` |

##### `allocateInstance(Class)` (`jdk.internal.misc.Unsafe`)

| Change |      Delta |      % |          Size | Samples | Caller                     | Location                              |
| -----: | ---------: | -----: | ------------: | ------: | -------------------------- | ------------------------------------- |
| -50.0% | -2.999 MiB | 100.0% | 6 MiB → 3 MiB |  12 → 6 | `allocateInstance(Object)` | `java.lang.invoke.DirectMethodHandle` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |      Delta |      % |            Size | Samples | Caller              | Location                                               |
| -----: | ---------: | -----: | --------------: | ------: | ------------------- | ------------------------------------------------------ |
| -35.7% | -2.499 MiB | 100.0% | 7 MiB → 4.5 MiB |  14 → 9 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |          Delta |      % |              Size | Samples | Caller   | Location                                                               |
| -----: | -------------: | -----: | ----------------: | ------: | -------- | ---------------------------------------------------------------------- |
| -66.7% | -1,023.998 KiB | 100.0% | 1.5 MiB → 512 KiB |   3 → 1 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0` |

##### `<init>(InputStream, Inflater, int)` (`java.util.zip.InflaterInputStream`)

| Change |          Delta |      % |          Size | Samples | Caller                                                                                  | Location                                           |
| -----: | -------------: | -----: | ------------: | ------: | --------------------------------------------------------------------------------------- | -------------------------------------------------- |
| -12.5% | -1,023.998 KiB | 100.0% | 8 MiB → 7 MiB | 16 → 14 | `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, Inflater, int)` | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |

##### `opWrapSink(int, Sink)` (`java.util.stream.IntPipeline$1`)

| Change |          Delta |      % |            Size | Samples | Caller           | Location                            |
| -----: | -------------: | -----: | --------------: | ------: | ---------------- | ----------------------------------- |
|  -7.7% | -1,023.998 KiB | 100.0% | 13 MiB → 12 MiB | 26 → 24 | `wrapSink(Sink)` | `java.util.stream.AbstractPipeline` |

##### `opWrapSink(int, Sink)` (`java.util.stream.DoublePipeline$1`)

| Change |          Delta |      % |              Size | Samples | Caller           | Location                            |
| -----: | -------------: | -----: | ----------------: | ------: | ---------------- | ----------------------------------- |
| -66.7% | -1,023.998 KiB | 100.0% | 1.5 MiB → 512 KiB |   3 → 1 | `wrapSink(Sink)` | `java.util.stream.AbstractPipeline` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |        Delta |      % |            Size | Samples | Caller                     | Location                                               |
| -----: | -----------: | -----: | --------------: | ------: | -------------------------- | ------------------------------------------------------ |
| -50.0% | -511.999 KiB | 100.0% | 1 MiB → 512 KiB |   2 → 1 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `ASCII_DIGIT()` (`java.util.regex.CharPredicates`)

|  Change |        Delta |             % |          Size | Samples | Caller                              | Location                  |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------------------- | ------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `escape(boolean, boolean, boolean)` | `java.util.regex.Pattern` |

##### `getContents()` (`sun.text.resources.cldr.FormatData`)

|  Change |        Delta |             % |          Size | Samples | Caller         | Location                       |
| ------: | -----------: | ------------: | ------------: | ------: | -------------- | ------------------------------ |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `loadLookup()` | `java.util.ListResourceBundle` |

##### `newFileChannel(int, UnixPath, String, Set, int)` (`sun.nio.fs.UnixChannelFactory`)

|  Change |        Delta |             % |          Size | Samples | Caller                               | Location                        |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------ | ------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `newFileChannel(UnixPath, Set, int)` | `sun.nio.fs.UnixChannelFactory` |

##### `<init>(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

|  Change |        Delta |             % |          Size | Samples | Caller          | Location                                     |
| ------: | -----------: | ------------: | ------------: | ------: | --------------- | -------------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `toByteArray()` | `jdk.internal.org.objectweb.asm.ClassWriter` |

##### `<init>()` (`jdk.internal.org.objectweb.asm.ByteVector`)

|  Change |        Delta |             % |          Size | Samples | Caller                                          | Location                                          |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------------------------------- | ------------------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `create(SymbolTable, String, AnnotationWriter)` | `jdk.internal.org.objectweb.asm.AnnotationWriter` |

##### `readNBytes(int)` (`java.io.InputStream`)

| Change |        Delta |      % |            Size | Samples | Caller           | Location              |
| -----: | -----------: | -----: | --------------: | ------: | ---------------- | --------------------- |
| -50.0% | -511.999 KiB | 100.0% | 1 MiB → 512 KiB |   2 → 1 | `readAllBytes()` | `java.io.InputStream` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

| Change |        Delta |      % |            Size | Samples | Caller                          | Location           |
| -----: | -----------: | -----: | --------------: | ------: | ------------------------------- | ------------------ |
| -33.3% | -511.999 KiB | 100.0% | 1.5 MiB → 1 MiB |   3 → 2 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `allocateUninitializedArray0(Class, int)` (`jdk.internal.misc.Unsafe`)

|  Change |        Delta |             % |          Size | Samples | Caller                                   | Location                   |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------------------- | -------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `allocateUninitializedArray(Class, int)` | `jdk.internal.misc.Unsafe` |

##### `allocateUninitializedArray(Class, int)` (`jdk.internal.misc.Unsafe`)

|  Change |        Delta |             % |          Size | Samples | Caller           | Location                       |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------- | ------------------------------ |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `newArray(long)` | `java.lang.StringConcatHelper` |

##### `initClassName()` (`java.lang.Class`)

|  Change |        Delta |             % |          Size | Samples | Caller      | Location          |
| ------: | -----------: | ------------: | ------------: | ------: | ----------- | ----------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `getName()` | `java.lang.Class` |

##### `collectGarbage(String)` (`org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`)

| Change |        Delta |      % |            Size | Samples | Caller                                      | Location                                                 |
| -----: | -----------: | -----: | --------------: | ------: | ------------------------------------------- | -------------------------------------------------------- |
| -50.0% | -511.999 KiB | 100.0% | 1 MiB → 512 KiB |   2 → 1 | `afterOperationSetUp(String, int, boolean)` | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin` |

##### `<init>(JavaKMeans, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |        Delta |             % |          Size | Samples | Caller                         | Location                                    |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------ | ------------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$boxed$0(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |        Delta |             % |          Size | Samples | Caller       | Location                                                                          |
| ------: | -----------: | ------------: | ------------: | ------: | ------------ | --------------------------------------------------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask$$Lambda.0x0000007001187510` |

### Total size

#### Regressions

Functions with the largest increase in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

| Change |        Delta |             % |                Size |         Samples | Function                                                                                                               | Location                                                               |
| -----: | -----------: | ------------: | ------------------: | --------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|  +7.8% | +630.534 MiB | 21.2% → 23.0% | 7.87 GiB → 8.49 GiB | 15,796 → 17,074 | `invoke()`                                                                                                             | `java.util.concurrent.ForkJoinTask`                                    |
|  +7.8% | +616.534 MiB | 20.8% → 22.6% | 7.71 GiB → 8.31 GiB | 15,467 → 16,717 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +7.8% | +616.534 MiB | 20.8% → 22.6% | 7.71 GiB → 8.31 GiB | 15,467 → 16,717 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0` |
|  +7.8% | +616.534 MiB | 20.8% → 22.6% | 7.71 GiB → 8.31 GiB | 15,467 → 16,717 | `exec()`                                                                                                               | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                    |
|  +0.9% | +283.499 MiB | 79.0% → 80.2% | 29.3 GiB → 29.5 GiB | 59,920 → 60,487 | `tryRemoveAndExec(ForkJoinTask, boolean)`                                                                              | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|  +0.7% | +221.999 MiB | 79.9% → 80.9% | 29.6 GiB → 29.8 GiB | 60,611 → 61,055 | `awaitDone(int, long)`                                                                                                 | `java.util.concurrent.ForkJoinTask`                                    |
|  +0.7% | +221.999 MiB | 79.9% → 80.9% | 29.6 GiB → 29.8 GiB | 60,611 → 61,055 | `join()`                                                                                                               | `java.util.concurrent.ForkJoinTask`                                    |
|    new |  +201.46 MiB |   0.0% → 0.5% |       0 B → 201 MiB |         0 → 397 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +2.8% |  +46.499 MiB |   4.4% → 4.6% | 1.65 GiB → 1.69 GiB |   3,371 → 3,464 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| +23.6% |  +42.999 MiB |   0.5% → 0.6% |   182 MiB → 225 MiB |       364 → 450 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| +14.9% |  +37.999 MiB |   0.7% → 0.8% |   254 MiB → 292 MiB |       509 → 585 | `newNode(int, Object, Object, HashMap$Node)`                                                                           | `java.util.HashMap`                                                    |
| +17.8% |  +35.499 MiB |   0.5% → 0.6% |   199 MiB → 234 MiB |       398 → 469 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| +17.8% |  +35.499 MiB |   0.5% → 0.6% |   199 MiB → 234 MiB |       398 → 469 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| +16.8% |  +25.499 MiB |   0.4% → 0.5% |   151 MiB → 177 MiB |       303 → 354 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| +19.9% |  +13.999 MiB |          0.2% | 70.5 MiB → 84.5 MiB |       141 → 169 | `add(double[], double[])`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| +19.9% |  +13.999 MiB |          0.2% | 70.5 MiB → 84.5 MiB |       141 → 169 | `combineResults(double[], double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| +19.9% |  +13.999 MiB |          0.2% | 70.5 MiB → 84.5 MiB |       141 → 169 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| +80.2% |   +9.999 MiB |  <0.1% → 0.1% | 12.5 MiB → 22.5 MiB |         19 → 39 | `copyOf(Object[], int, Class)`                                                                                         | `java.util.Arrays`                                                     |
| +13.2% |   +9.999 MiB |          0.2% | 75.5 MiB → 85.5 MiB |       151 → 171 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| +13.2% |   +9.999 MiB |          0.2% | 75.5 MiB → 85.5 MiB |       151 → 171 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |

##### Standard library

| Change |        Delta |             % |                Size |         Samples | Function                                          | Location                                            |
| -----: | -----------: | ------------: | ------------------: | --------------: | ------------------------------------------------- | --------------------------------------------------- |
|  +7.8% | +630.534 MiB | 21.2% → 23.0% | 7.87 GiB → 8.49 GiB | 15,796 → 17,074 | `invoke()`                                        | `java.util.concurrent.ForkJoinTask`                 |
|  +7.8% | +616.534 MiB | 20.8% → 22.6% | 7.71 GiB → 8.31 GiB | 15,467 → 16,717 | `exec()`                                          | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  +0.9% | +283.499 MiB | 79.0% → 80.2% | 29.3 GiB → 29.5 GiB | 59,920 → 60,487 | `tryRemoveAndExec(ForkJoinTask, boolean)`         | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
|  +0.7% | +221.999 MiB | 79.9% → 80.9% | 29.6 GiB → 29.8 GiB | 60,611 → 61,055 | `awaitDone(int, long)`                            | `java.util.concurrent.ForkJoinTask`                 |
|  +0.7% | +221.999 MiB | 79.9% → 80.9% | 29.6 GiB → 29.8 GiB | 60,611 → 61,055 | `join()`                                          | `java.util.concurrent.ForkJoinTask`                 |
| +14.9% |  +37.999 MiB |   0.7% → 0.8% |   254 MiB → 292 MiB |       509 → 585 | `newNode(int, Object, Object, HashMap$Node)`      | `java.util.HashMap`                                 |
| +80.2% |   +9.999 MiB |  <0.1% → 0.1% | 12.5 MiB → 22.5 MiB |         19 → 39 | `copyOf(Object[], int, Class)`                    | `java.util.Arrays`                                  |
|  +2.3% |   +6.999 MiB |          0.8% |   301 MiB → 308 MiB |       603 → 617 | `computeIfAbsent(Object, Function)`               | `java.util.HashMap`                                 |
|    new |   +6.499 MiB |  0.0% → <0.1% |       0 B → 6.5 MiB |          0 → 13 | `accept(Object)`                                  | `java.util.stream.ReferencePipeline$3$1`            |
|    new |   +6.499 MiB |  0.0% → <0.1% |       0 B → 6.5 MiB |          0 → 13 | `forEachRemaining(Consumer)`                      | `java.util.Spliterators$ArraySpliterator`           |
|  +3.1% |   +5.499 MiB |          0.5% |   179 MiB → 185 MiB |       359 → 370 | `putVal(int, Object, Object, boolean, boolean)`   | `java.util.HashMap`                                 |
|  +1.8% |   +3.499 MiB |          0.5% |   189 MiB → 193 MiB |       379 → 386 | `putMapEntries(Map, boolean)`                     | `java.util.HashMap`                                 |
|  +1.8% |   +3.499 MiB |          0.5% |   189 MiB → 193 MiB |       379 → 386 | `<init>(Map)`                                     | `java.util.HashMap`                                 |
|  +2.4% |   +2.499 MiB |          0.3% |   105 MiB → 107 MiB |       210 → 215 | `evaluate(Spliterator, boolean, IntFunction)`     | `java.util.stream.AbstractPipeline`                 |
|  +2.4% |   +2.499 MiB |          0.3% |   105 MiB → 107 MiB |       210 → 215 | `evaluateToArrayNode(IntFunction)`                | `java.util.stream.AbstractPipeline`                 |
|  +2.4% |   +2.499 MiB |          0.3% |   105 MiB → 107 MiB |       210 → 215 | `toArray(IntFunction)`                            | `java.util.stream.ReferencePipeline`                |
|  +8.6% |   +2.499 MiB |          0.1% |   29 MiB → 31.5 MiB |         58 → 63 | `builder(long, IntFunction)`                      | `java.util.stream.Nodes`                            |
|  +8.6% |   +2.499 MiB |          0.1% |   29 MiB → 31.5 MiB |         58 → 63 | `makeNodeBuilder(long, IntFunction)`              | `java.util.stream.ReferencePipeline`                |
|  +1.1% |   +1.999 MiB |          0.5% |   189 MiB → 191 MiB |       372 → 376 | `evaluateSequential(PipelineHelper, Spliterator)` | `java.util.stream.ReduceOps$ReduceOp`               |
|  +1.1% |   +1.999 MiB |          0.5% |   189 MiB → 191 MiB |       372 → 376 | `evaluate(TerminalOp)`                            | `java.util.stream.AbstractPipeline`                 |

##### Ours

|  Change |        Delta |             % |                Size |         Samples | Function                                                                                                               | Location                                                                                      |
| ------: | -----------: | ------------: | ------------------: | --------------: | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
|   +7.8% | +616.534 MiB | 20.8% → 22.6% | 7.71 GiB → 8.31 GiB | 15,467 → 16,717 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                                                   |
|   +7.8% | +616.534 MiB | 20.8% → 22.6% | 7.71 GiB → 8.31 GiB | 15,467 → 16,717 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`                        |
|     new |  +201.46 MiB |   0.0% → 0.5% |       0 B → 201 MiB |         0 → 397 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                                   |
|   +2.8% |  +46.499 MiB |   4.4% → 4.6% | 1.65 GiB → 1.69 GiB |   3,371 → 3,464 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                    |
|  +23.6% |  +42.999 MiB |   0.5% → 0.6% |   182 MiB → 225 MiB |       364 → 450 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                        |
|  +17.8% |  +35.499 MiB |   0.5% → 0.6% |   199 MiB → 234 MiB |       398 → 469 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                        |
|  +17.8% |  +35.499 MiB |   0.5% → 0.6% |   199 MiB → 234 MiB |       398 → 469 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                        |
|  +16.8% |  +25.499 MiB |   0.4% → 0.5% |   151 MiB → 177 MiB |       303 → 354 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                     |
|  +19.9% |  +13.999 MiB |          0.2% | 70.5 MiB → 84.5 MiB |       141 → 169 | `add(double[], double[])`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                     |
|  +19.9% |  +13.999 MiB |          0.2% | 70.5 MiB → 84.5 MiB |       141 → 169 | `combineResults(double[], double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                     |
|  +19.9% |  +13.999 MiB |          0.2% | 70.5 MiB → 84.5 MiB |       141 → 169 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                     |
|  +13.2% |   +9.999 MiB |          0.2% | 75.5 MiB → 85.5 MiB |       151 → 171 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                     |
|  +13.2% |   +9.999 MiB |          0.2% | 75.5 MiB → 85.5 MiB |       151 → 171 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                     |
|   +5.0% |   +6.999 MiB |          0.4% |   140 MiB → 147 MiB |       280 → 294 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                    |
|     new |   +6.499 MiB |  0.0% → <0.1% |       0 B → 6.5 MiB |          0 → 13 | `rowToArray$1(Map)`                                                                                                    | `org.renaissance.jdk.concurrent.FjKmeans`                                                     |
|     new |   +6.499 MiB |  0.0% → <0.1% |       0 B → 6.5 MiB |          0 → 13 | `setUpBeforeAll$$anonfun$1(Map)`                                                                                       | `org.renaissance.jdk.concurrent.FjKmeans`                                                     |
|     new |   +6.499 MiB |  0.0% → <0.1% |       0 B → 6.5 MiB |          0 → 13 | `lambda$toCsvRows$2(String[], Function, String)`                                                                       | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`                            |
|     new |   +6.499 MiB |  0.0% → <0.1% |       0 B → 6.5 MiB |          0 → 13 | `apply(Object)`                                                                                                        | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x0000007001123bf8` |
|     new |   +6.499 MiB |  0.0% → <0.1% |       0 B → 6.5 MiB |          0 → 13 | `toCsvRows(Function)`                                                                                                  | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`                            |
| +157.1% |   +5.499 MiB |         <0.1% |     3.5 MiB → 9 MiB |          7 → 18 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda`                                             |

#### Improvements

Functions with the largest decrease in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |        Delta |             % |                Size |         Samples | Function                                                                                                               | Location                                                               |
| ------: | -----------: | ------------: | ------------------: | --------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|   -0.9% | -260.463 MiB | 76.4% → 76.1% |   28.3 GiB → 28 GiB | 57,636 → 57,132 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -0.9% | -260.463 MiB | 76.4% → 76.1% |   28.3 GiB → 28 GiB | 57,629 → 57,125 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -0.9% | -260.463 MiB | 76.4% → 76.1% |   28.3 GiB → 28 GiB | 57,629 → 57,125 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -0.9% | -245.963 MiB | 75.7% → 75.5% |   28 GiB → 27.8 GiB | 57,100 → 56,625 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -0.9% | -245.963 MiB | 75.7% → 75.5% |   28 GiB → 27.8 GiB | 57,100 → 56,625 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000` |
|   -0.9% | -245.963 MiB | 75.7% → 75.5% |   28 GiB → 27.8 GiB | 57,103 → 56,628 | `merge(Object, Object, BiFunction)`                                                                                    | `java.util.HashMap`                                                    |
|   -0.9% | -245.963 MiB | 75.7% → 75.5% |   28 GiB → 27.8 GiB | 57,103 → 56,628 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -0.9% | -245.963 MiB | 75.7% → 75.5% |   28 GiB → 27.8 GiB | 57,103 → 56,628 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90` |
|   -0.9% | -245.963 MiB | 75.7% → 75.5% |   28 GiB → 27.8 GiB | 57,103 → 56,628 | `forEach(BiConsumer)`                                                                                                  | `java.util.HashMap`                                                    |
|   -0.6% | -221.963 MiB |         91.0% | 33.7 GiB → 33.5 GiB | 68,728 → 68,301 | `copyOf(Object[], int)`                                                                                                | `java.util.Arrays`                                                     |
|   -0.6% | -215.463 MiB |         99.4% | 36.8 GiB → 36.6 GiB | 75,096 → 74,682 | `doExec()`                                                                                                             | `java.util.concurrent.ForkJoinTask`                                    |
|   -0.6% | -215.463 MiB |         99.4% | 36.8 GiB → 36.6 GiB | 75,096 → 74,682 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`                                                                   | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|   -0.6% | -215.463 MiB |         99.4% | 36.8 GiB → 36.6 GiB | 75,096 → 74,682 | `scan(ForkJoinPool$WorkQueue, int, int)`                                                                               | `java.util.concurrent.ForkJoinPool`                                    |
|   -0.6% | -215.463 MiB |         99.4% | 36.8 GiB → 36.6 GiB | 75,096 → 74,682 | `runWorker(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`                                    |
|   -0.6% | -215.463 MiB |         99.4% | 36.8 GiB → 36.6 GiB | 75,096 → 74,682 | `run()`                                                                                                                | `java.util.concurrent.ForkJoinWorkerThread`                            |
|   -0.6% | -213.963 MiB |         99.4% | 36.8 GiB → 36.6 GiB | 75,092 → 74,681 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|   -0.6% | -213.963 MiB |         99.4% | 36.8 GiB → 36.6 GiB | 75,092 → 74,681 | `exec()`                                                                                                               | `java.util.concurrent.RecursiveTask`                                   |
| removed |  -206.96 MiB |   0.5% → 0.0% |       207 MiB → 0 B |         408 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|   -2.7% | -198.499 MiB | 19.2% → 18.8% | 7.11 GiB → 6.92 GiB | 14,560 → 14,163 | `<init>(Collection)`                                                                                                   | `java.util.ArrayList`                                                  |
|   -0.9% | -173.464 MiB | 52.9% → 52.7% | 19.6 GiB → 19.4 GiB | 39,793 → 39,463 | `grow(int)`                                                                                                            | `java.util.ArrayList`                                                  |

##### Standard library

| Change |        Delta |             % |                Size |         Samples | Function                                                  | Location                                      |
| -----: | -----------: | ------------: | ------------------: | --------------: | --------------------------------------------------------- | --------------------------------------------- |
|  -0.9% | -245.963 MiB | 75.7% → 75.5% |   28 GiB → 27.8 GiB | 57,103 → 56,628 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                           |
|  -0.9% | -245.963 MiB | 75.7% → 75.5% |   28 GiB → 27.8 GiB | 57,103 → 56,628 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                           |
|  -0.6% | -221.963 MiB |         91.0% | 33.7 GiB → 33.5 GiB | 68,728 → 68,301 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                            |
|  -0.6% | -215.463 MiB |         99.4% | 36.8 GiB → 36.6 GiB | 75,096 → 74,682 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`           |
|  -0.6% | -215.463 MiB |         99.4% | 36.8 GiB → 36.6 GiB | 75,096 → 74,682 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -0.6% | -215.463 MiB |         99.4% | 36.8 GiB → 36.6 GiB | 75,096 → 74,682 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`           |
|  -0.6% | -215.463 MiB |         99.4% | 36.8 GiB → 36.6 GiB | 75,096 → 74,682 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`           |
|  -0.6% | -215.463 MiB |         99.4% | 36.8 GiB → 36.6 GiB | 75,096 → 74,682 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`   |
|  -0.6% | -213.963 MiB |         99.4% | 36.8 GiB → 36.6 GiB | 75,092 → 74,681 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`          |
|  -2.7% | -198.499 MiB | 19.2% → 18.8% | 7.11 GiB → 6.92 GiB | 14,560 → 14,163 | `<init>(Collection)`                                      | `java.util.ArrayList`                         |
|  -0.9% | -173.464 MiB | 52.9% → 52.7% | 19.6 GiB → 19.4 GiB | 39,793 → 39,463 | `grow(int)`                                               | `java.util.ArrayList`                         |
|  -0.5% |  -67.999 MiB |         38.8% | 14.4 GiB → 14.3 GiB | 29,427 → 29,291 | `toArray()`                                               | `java.util.ArrayList`                         |
|  -1.1% |  -62.499 MiB | 15.2% → 15.1% | 5.63 GiB → 5.57 GiB | 11,532 → 11,407 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  -0.1% |  -26.964 MiB | 56.2% → 56.5% |            20.8 GiB | 42,320 → 42,283 | `addAll(Collection)`                                      | `java.util.ArrayList`                         |
|  -0.3% |  -15.999 MiB |         16.3% | 6.03 GiB → 6.01 GiB | 12,340 → 12,308 | `grow()`                                                  | `java.util.ArrayList`                         |
|  -0.3% |  -15.999 MiB |         16.3% | 6.03 GiB → 6.01 GiB | 12,340 → 12,308 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                         |
|  -0.3% |  -15.999 MiB |         16.3% | 6.03 GiB → 6.01 GiB | 12,340 → 12,308 | `add(Object)`                                             | `java.util.ArrayList`                         |
|  -9.8% |  -11.499 MiB |          0.3% |   117 MiB → 106 MiB |       235 → 212 | `resize()`                                                | `java.util.HashMap`                           |
| -36.1% |   -6.499 MiB |         <0.1% |   18 MiB → 11.5 MiB |         36 → 23 | `allocateInstance(Object)`                                | `java.lang.invoke.DirectMethodHandle`         |
| -24.1% |   -6.499 MiB |          0.1% |   27 MiB → 20.5 MiB |         54 → 41 | `mapToObj(IntFunction, int)`                              | `java.util.stream.IntPipeline`                |

##### Ours

|  Change |        Delta |             % |                Size |         Samples | Function                                                                                                               | Location                                                                              |
| ------: | -----------: | ------------: | ------------------: | --------------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|   -0.9% | -260.463 MiB | 76.4% → 76.1% |   28.3 GiB → 28 GiB | 57,636 → 57,132 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|   -0.9% | -260.463 MiB | 76.4% → 76.1% |   28.3 GiB → 28 GiB | 57,629 → 57,125 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   -0.9% | -260.463 MiB | 76.4% → 76.1% |   28.3 GiB → 28 GiB | 57,629 → 57,125 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   -0.9% | -245.963 MiB | 75.7% → 75.5% |   28 GiB → 27.8 GiB | 57,100 → 56,625 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|   -0.9% | -245.963 MiB | 75.7% → 75.5% |   28 GiB → 27.8 GiB | 57,100 → 56,625 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`                |
|   -0.9% | -245.963 MiB | 75.7% → 75.5% |   28 GiB → 27.8 GiB | 57,103 → 56,628 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|   -0.9% | -245.963 MiB | 75.7% → 75.5% |   28 GiB → 27.8 GiB | 57,103 → 56,628 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`                |
|   -0.6% | -213.963 MiB |         99.4% | 36.8 GiB → 36.6 GiB | 75,092 → 74,681 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
| removed |  -206.96 MiB |   0.5% → 0.0% |       207 MiB → 0 B |         408 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                           |
|   -0.8% |  -50.999 MiB |         17.3% | 6.42 GiB → 6.37 GiB | 13,158 → 13,056 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -12.7% |  -13.999 MiB |          0.3% |  110 MiB → 96.5 MiB |       221 → 193 | `lambda$collectClusters$0(Double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -12.7% |  -13.999 MiB |          0.3% |  110 MiB → 96.5 MiB |       221 → 193 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011a3940` |
|  -74.2% |  -11.499 MiB |         <0.1% |    15.5 MiB → 4 MiB |          31 → 8 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                                             |
|  -62.9% |  -10.999 MiB |         <0.1% |  17.5 MiB → 6.5 MiB |         35 → 13 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                                             |
|   -3.6% |   -7.499 MiB |          0.5% |   206 MiB → 199 MiB |       407 → 392 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                                             |
|   -3.2% |   -6.999 MiB |          0.6% |   221 MiB → 214 MiB |       437 → 423 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                                           |
|   -2.7% |   -5.999 MiB |          0.6% |   225 MiB → 219 MiB |       444 → 432 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                                            |
|   -2.4% |   -5.499 MiB |          0.6% |   226 MiB → 221 MiB |       447 → 436 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                                       |
|   -2.7% |   -5.499 MiB |          0.5% |   207 MiB → 201 MiB |       408 → 397 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111ede0`                |
|   -2.7% |   -5.499 MiB |          0.5% |   207 MiB → 201 MiB |       408 → 397 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                                           |

#### Callers

Callers with the largest change in contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |           % |                Size |         Samples | Caller                         | Location                                               |
| -----: | -----------: | ----------: | ------------------: | --------------: | ------------------------------ | ------------------------------------------------------ |
|  +7.8% | +618.034 MiB |       97.9% | 7.71 GiB → 8.31 GiB | 15,463 → 16,716 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`            |
| +23.3% |  +41.999 MiB | 2.2% → 2.6% |   180 MiB → 222 MiB |       361 → 445 | `average(List)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |      % |                Size |         Samples | Caller   | Location                                                               |
| -----: | -----------: | -----: | ------------------: | --------------: | -------- | ---------------------------------------------------------------------- |
|  +7.8% | +616.534 MiB | 100.0% | 7.71 GiB → 8.31 GiB | 15,467 → 16,717 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`)

| Change |        Delta |      % |                Size |         Samples | Caller   | Location                                            |
| -----: | -----------: | -----: | ------------------: | --------------: | -------- | --------------------------------------------------- |
|  +7.8% | +616.534 MiB | 100.0% | 7.71 GiB → 8.31 GiB | 15,467 → 16,717 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

| Change |        Delta |      % |                Size |         Samples | Caller     | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------- | ----------------------------------- |
|  +7.8% | +616.534 MiB | 100.0% | 7.71 GiB → 8.31 GiB | 15,467 → 16,717 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |        Delta |      % |                Size |         Samples | Caller                 | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------------------- | ----------------------------------- |
|  +0.9% | +283.499 MiB | 100.0% | 29.3 GiB → 29.5 GiB | 59,920 → 60,487 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |      % |                Size |         Samples | Caller   | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | -------- | ----------------------------------- |
|  +0.7% | +221.999 MiB | 100.0% | 29.6 GiB → 29.8 GiB | 60,611 → 61,055 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |      % |                Size |         Samples | Caller      | Location                                               |
| -----: | -----------: | -----: | ------------------: | --------------: | ----------- | ------------------------------------------------------ |
|  +0.7% | +221.999 MiB | 100.0% | 29.6 GiB → 29.8 GiB | 60,611 → 61,055 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |       Delta |             % |          Size | Samples | Caller              | Location                                                               |
| -----: | ----------: | ------------: | ------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
|    new | +201.46 MiB | 0.0% → 100.0% | 0 B → 201 MiB | 0 → 397 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111ede0` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |                Size |       Samples | Caller              | Location                                                   |
| -----: | ----------: | -----: | ------------------: | ------------: | ------------------- | ---------------------------------------------------------- |
|  +2.8% | +46.499 MiB | 100.0% | 1.65 GiB → 1.69 GiB | 3,371 → 3,464 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |       Delta |      % |              Size |   Samples | Caller                     | Location                                               |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------------- | ------------------------------------------------------ |
| +23.6% | +42.999 MiB | 100.0% | 182 MiB → 225 MiB | 364 → 450 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

| Change |       Delta |             % |              Size |   Samples | Caller                                          | Location            |
| -----: | ----------: | ------------: | ----------------: | --------: | ----------------------------------------------- | ------------------- |
| +28.4% | +32.499 MiB | 45.0% → 50.3% | 114 MiB → 147 MiB | 229 → 294 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |
|  +3.9% |  +5.499 MiB | 54.8% → 49.6% | 139 MiB → 145 MiB | 279 → 290 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |       Delta |      % |              Size |   Samples | Caller              | Location                                               |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------- | ------------------------------------------------------ |
| +17.8% | +35.499 MiB | 100.0% | 199 MiB → 234 MiB | 398 → 469 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |       Delta |      % |              Size |   Samples | Caller              | Location                                               |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------- | ------------------------------------------------------ |
| +17.8% | +35.499 MiB | 100.0% | 199 MiB → 234 MiB | 398 → 469 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| +17.8% | +35.499 MiB | 100.0% | 199 MiB → 234 MiB | 398 → 469 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |              Size |   Samples | Caller      | Location                                               |
| -----: | ----------: | -----: | ----------------: | --------: | ----------- | ------------------------------------------------------ |
| +16.8% | +25.499 MiB | 100.0% | 151 MiB → 177 MiB | 303 → 354 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |                Size |   Samples | Caller                               | Location                                                  |
| -----: | ----------: | -----: | ------------------: | --------: | ------------------------------------ | --------------------------------------------------------- |
| +19.9% | +13.999 MiB | 100.0% | 70.5 MiB → 84.5 MiB | 141 → 169 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `combineResults(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |                Size |   Samples | Caller                           | Location                                                  |
| -----: | ----------: | -----: | ------------------: | --------: | -------------------------------- | --------------------------------------------------------- |
| +19.9% | +13.999 MiB | 100.0% | 70.5 MiB → 84.5 MiB | 141 → 169 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |                Size |   Samples | Caller      | Location                                               |
| -----: | ----------: | -----: | ------------------: | --------: | ----------- | ------------------------------------------------------ |
| +19.9% | +13.999 MiB | 100.0% | 70.5 MiB → 84.5 MiB | 141 → 169 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

| Change |      Delta |      % |                Size | Samples | Caller                  | Location           |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------- | ------------------ |
| +80.2% | +9.999 MiB | 100.0% | 12.5 MiB → 22.5 MiB | 19 → 39 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |      Delta |      % |                Size |   Samples | Caller              | Location                                                  |
| -----: | ---------: | -----: | ------------------: | --------: | ------------------- | --------------------------------------------------------- |
| +13.2% | +9.999 MiB | 100.0% | 75.5 MiB → 85.5 MiB | 151 → 171 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |      Delta |      % |                Size |   Samples | Caller              | Location                                                  |
| -----: | ---------: | -----: | ------------------: | --------: | ------------------- | --------------------------------------------------------- |
| +13.2% | +9.999 MiB | 100.0% | 75.5 MiB → 85.5 MiB | 151 → 171 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| +13.2% | +9.999 MiB | 100.0% | 75.5 MiB → 85.5 MiB | 151 → 171 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`    |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

| Change |      Delta |      % |              Size |   Samples | Caller                   | Location                                                   |
| -----: | ---------: | -----: | ----------------: | --------: | ------------------------ | ---------------------------------------------------------- |
|  +2.3% | +6.999 MiB | 100.0% | 301 MiB → 308 MiB | 603 → 617 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `accept(Object)` (`java.util.stream.ReferencePipeline$3$1`)

| Change |      Delta |             % |          Size | Samples | Caller                       | Location                                  |
| -----: | ---------: | ------------: | ------------: | ------: | ---------------------------- | ----------------------------------------- |
|    new | +6.499 MiB | 0.0% → 100.0% | 0 B → 6.5 MiB |  0 → 13 | `forEachRemaining(Consumer)` | `java.util.Spliterators$ArraySpliterator` |

##### `forEachRemaining(Consumer)` (`java.util.Spliterators$ArraySpliterator`)

| Change |      Delta |             % |          Size | Samples | Caller                        | Location                            |
| -----: | ---------: | ------------: | ------------: | ------: | ----------------------------- | ----------------------------------- |
|    new | +6.499 MiB | 0.0% → 100.0% | 0 B → 6.5 MiB |  0 → 13 | `copyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

| Change |      Delta |             % |              Size |   Samples | Caller                        | Location            |
| -----: | ---------: | ------------: | ----------------: | --------: | ----------------------------- | ------------------- |
|  +4.0% | +6.999 MiB | 98.3% → 99.2% | 176 MiB → 183 MiB | 353 → 367 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |
| -50.0% | -1.499 MiB |   1.7% → 0.8% |   3 MiB → 1.5 MiB |     6 → 3 | `put(Object, Object)`         | `java.util.HashMap` |

##### `putMapEntries(Map, boolean)` (`java.util.HashMap`)

| Change |      Delta |      % |              Size |   Samples | Caller        | Location            |
| -----: | ---------: | -----: | ----------------: | --------: | ------------- | ------------------- |
|  +1.8% | +3.499 MiB | 100.0% | 189 MiB → 193 MiB | 379 → 386 | `<init>(Map)` | `java.util.HashMap` |

##### `<init>(Map)` (`java.util.HashMap`)

| Change |      Delta |      % |              Size |   Samples | Caller            | Location                                    |
| -----: | ---------: | -----: | ----------------: | --------: | ----------------- | ------------------------------------------- |
|  +1.8% | +3.499 MiB | 100.0% | 189 MiB → 193 MiB | 379 → 386 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `evaluate(Spliterator, boolean, IntFunction)` (`java.util.stream.AbstractPipeline`)

| Change |      Delta |      % |              Size |   Samples | Caller                             | Location                            |
| -----: | ---------: | -----: | ----------------: | --------: | ---------------------------------- | ----------------------------------- |
|  +2.4% | +2.499 MiB | 100.0% | 105 MiB → 107 MiB | 210 → 215 | `evaluateToArrayNode(IntFunction)` | `java.util.stream.AbstractPipeline` |

##### `evaluateToArrayNode(IntFunction)` (`java.util.stream.AbstractPipeline`)

| Change |      Delta |      % |              Size |   Samples | Caller                 | Location                             |
| -----: | ---------: | -----: | ----------------: | --------: | ---------------------- | ------------------------------------ |
|  +2.4% | +2.499 MiB | 100.0% | 105 MiB → 107 MiB | 210 → 215 | `toArray(IntFunction)` | `java.util.stream.ReferencePipeline` |

##### `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`)

| Change |      Delta |             % |              Size |   Samples | Caller                                           | Location                                               |
| -----: | ---------: | ------------: | ----------------: | --------: | ------------------------------------------------ | ------------------------------------------------------ |
|  +5.5% | +5.499 MiB | 95.7% → 98.6% | 100 MiB → 106 MiB | 201 → 212 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`            |
| -66.7% | -2.999 MiB |   4.3% → 1.4% | 4.5 MiB → 1.5 MiB |     9 → 3 | `boxed(double[])`                                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

| Change |      Delta |      % |              Size | Samples | Caller                               | Location                             |
| -----: | ---------: | -----: | ----------------: | ------: | ------------------------------------ | ------------------------------------ |
|  +8.6% | +2.499 MiB | 100.0% | 29 MiB → 31.5 MiB | 58 → 63 | `makeNodeBuilder(long, IntFunction)` | `java.util.stream.ReferencePipeline` |

##### `makeNodeBuilder(long, IntFunction)` (`java.util.stream.ReferencePipeline`)

| Change |      Delta |      % |              Size | Samples | Caller                                        | Location                            |
| -----: | ---------: | -----: | ----------------: | ------: | --------------------------------------------- | ----------------------------------- |
|  +8.6% | +2.499 MiB | 100.0% | 29 MiB → 31.5 MiB | 58 → 63 | `evaluate(Spliterator, boolean, IntFunction)` | `java.util.stream.AbstractPipeline` |

##### `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`)

| Change |      Delta |      % |              Size |   Samples | Caller                 | Location                            |
| -----: | ---------: | -----: | ----------------: | --------: | ---------------------- | ----------------------------------- |
|  +1.1% | +1.999 MiB | 100.0% | 189 MiB → 191 MiB | 372 → 376 | `evaluate(TerminalOp)` | `java.util.stream.AbstractPipeline` |

##### `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`)

| Change |      Delta |      % |              Size |   Samples | Caller               | Location                             |
| -----: | ---------: | -----: | ----------------: | --------: | -------------------- | ------------------------------------ |
|  +1.1% | +1.999 MiB | 100.0% | 189 MiB → 191 MiB | 372 → 376 | `collect(Collector)` | `java.util.stream.ReferencePipeline` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |      Delta |      % |              Size |   Samples | Caller      | Location                                               |
| -----: | ---------: | -----: | ----------------: | --------: | ----------- | ------------------------------------------------------ |
|  +5.0% | +6.999 MiB | 100.0% | 140 MiB → 147 MiB | 280 → 294 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `rowToArray$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |      Delta |             % |          Size | Samples | Caller                           | Location                                  |
| -----: | ---------: | ------------: | ------------: | ------: | -------------------------------- | ----------------------------------------- |
|    new | +6.499 MiB | 0.0% → 100.0% | 0 B → 6.5 MiB |  0 → 13 | `setUpBeforeAll$$anonfun$1(Map)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `setUpBeforeAll$$anonfun$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |      Delta |             % |          Size | Samples | Caller          | Location                                          |
| -----: | ---------: | ------------: | ------------: | ------: | --------------- | ------------------------------------------------- |
|    new | +6.499 MiB | 0.0% → 100.0% | 0 B → 6.5 MiB |  0 → 13 | `apply(Object)` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda` |

##### `lambda$toCsvRows$2(String[], Function, String)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`)

| Change |      Delta |             % |          Size | Samples | Caller          | Location                                                                                      |
| -----: | ---------: | ------------: | ------------: | ------: | --------------- | --------------------------------------------------------------------------------------------- |
|    new | +6.499 MiB | 0.0% → 100.0% | 0 B → 6.5 MiB |  0 → 13 | `apply(Object)` | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x0000007001123bf8` |

##### `apply(Object)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x0000007001123bf8`)

| Change |      Delta |             % |          Size | Samples | Caller           | Location                                 |
| -----: | ---------: | ------------: | ------------: | ------: | ---------------- | ---------------------------------------- |
|    new | +6.499 MiB | 0.0% → 100.0% | 0 B → 6.5 MiB |  0 → 13 | `accept(Object)` | `java.util.stream.ReferencePipeline$3$1` |

##### `toCsvRows(Function)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`)

| Change |      Delta |             % |          Size | Samples | Caller                             | Location                                  |
| -----: | ---------: | ------------: | ------------: | ------: | ---------------------------------- | ----------------------------------------- |
|    new | +6.499 MiB | 0.0% → 100.0% | 0 B → 6.5 MiB |  0 → 13 | `setUpBeforeAll(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda`)

| Change |          Delta |              % |              Size | Samples | Caller                                           | Location                                                           |
| -----: | -------------: | -------------: | ----------------: | ------: | ------------------------------------------------ | ------------------------------------------------------------------ |
|    new |     +6.499 MiB |   0.0% → 72.2% |     0 B → 6.5 MiB |  0 → 13 | `lambda$toCsvRows$2(String[], Function, String)` | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |
| -28.6% | -1,023.998 KiB | 100.0% → 27.8% | 3.5 MiB → 2.5 MiB |   7 → 5 | `map(Function1)`                                 | `scala.collection.immutable.Range`                                 |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |      % |              Size |         Samples | Caller                     | Location                                                   |
| -----: | -----------: | -----: | ----------------: | --------------: | -------------------------- | ---------------------------------------------------------- |
|  -0.9% | -260.463 MiB | 100.0% | 28.3 GiB → 28 GiB | 57,629 → 57,125 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |              Size |         Samples | Caller                           | Location                                                   |
| -----: | -----------: | -----: | ----------------: | --------------: | -------------------------------- | ---------------------------------------------------------- |
|  -0.9% | -260.463 MiB | 100.0% | 28.3 GiB → 28 GiB | 57,629 → 57,125 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |              Size |         Samples | Caller      | Location                                               |
| -----: | -----------: | -----: | ----------------: | --------------: | ----------- | ------------------------------------------------------ |
|  -0.9% | -260.463 MiB | 100.0% | 28.3 GiB → 28 GiB | 57,629 → 57,125 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |      % |              Size |         Samples | Caller                  | Location                                                               |
| -----: | -----------: | -----: | ----------------: | --------------: | ----------------------- | ---------------------------------------------------------------------- |
|  -0.9% | -245.963 MiB | 100.0% | 28 GiB → 27.8 GiB | 57,100 → 56,625 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`)

| Change |        Delta |      % |              Size |         Samples | Caller                              | Location            |
| -----: | -----------: | -----: | ----------------: | --------------: | ----------------------------------- | ------------------- |
|  -0.9% | -245.963 MiB | 100.0% | 28 GiB → 27.8 GiB | 57,100 → 56,625 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

| Change |        Delta |      % |              Size |         Samples | Caller                              | Location                                    |
| -----: | -----------: | -----: | ----------------: | --------------: | ----------------------------------- | ------------------------------------------- |
|  -0.9% | -245.963 MiB | 100.0% | 28 GiB → 27.8 GiB | 57,103 → 56,628 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |      % |              Size |         Samples | Caller                   | Location                                                               |
| -----: | -----------: | -----: | ----------------: | --------------: | ------------------------ | ---------------------------------------------------------------------- |
|  -0.9% | -245.963 MiB | 100.0% | 28 GiB → 27.8 GiB | 57,103 → 56,628 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`)

| Change |        Delta |      % |              Size |         Samples | Caller                | Location            |
| -----: | -----------: | -----: | ----------------: | --------------: | --------------------- | ------------------- |
|  -0.9% | -245.963 MiB | 100.0% | 28 GiB → 27.8 GiB | 57,103 → 56,628 | `forEach(BiConsumer)` | `java.util.HashMap` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

| Change |        Delta |      % |              Size |         Samples | Caller            | Location                                    |
| -----: | -----------: | -----: | ----------------: | --------------: | ----------------- | ------------------------------------------- |
|  -0.9% | -245.963 MiB | 100.0% | 28 GiB → 27.8 GiB | 57,103 → 56,628 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |        Delta |             % |                Size |         Samples | Caller      | Location              |
| -----: | -----------: | ------------: | ------------------: | --------------: | ----------- | --------------------- |
|  -0.8% | -153.964 MiB | 57.4% → 57.3% | 19.4 GiB → 19.2 GiB | 39,301 → 39,010 | `grow(int)` | `java.util.ArrayList` |
|  -0.5% |  -67.999 MiB | 42.6% → 42.7% | 14.4 GiB → 14.3 GiB | 29,427 → 29,291 | `toArray()` | `java.util.ArrayList` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |             % |                Size |         Samples | Caller                                                    | Location                                      |
| -----: | -----------: | ------------: | ------------------: | --------------: | --------------------------------------------------------- | --------------------------------------------- |
|  +7.8% | +630.534 MiB | 21.4% → 23.2% | 7.87 GiB → 8.49 GiB | 15,796 → 17,074 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |
|  +0.9% | +283.499 MiB | 79.4% → 80.7% | 29.3 GiB → 29.5 GiB | 59,920 → 60,487 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -0.6% | -215.463 MiB |        100.0% | 36.8 GiB → 36.6 GiB | 75,096 → 74,682 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -1.1% |  -62.499 MiB | 15.3% → 15.2% | 5.63 GiB → 5.57 GiB | 11,532 → 11,407 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |        Delta |      % |                Size |         Samples | Caller                                   | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------------------------------------- | ----------------------------------- |
|  -0.6% | -215.463 MiB | 100.0% | 36.8 GiB → 36.6 GiB | 75,096 → 74,682 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change |        Delta |      % |                Size |         Samples | Caller                              | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | ----------------------------------- | ----------------------------------- |
|  -0.6% | -215.463 MiB | 100.0% | 36.8 GiB → 36.6 GiB | 75,096 → 74,682 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |        Delta |      % |                Size |         Samples | Caller  | Location                                    |
| -----: | -----------: | -----: | ------------------: | --------------: | ------- | ------------------------------------------- |
|  -0.6% | -215.463 MiB | 100.0% | 36.8 GiB → 36.6 GiB | 75,096 → 74,682 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change |        Delta |      % |                Size |         Samples | Caller   | Location                             |
| -----: | -----------: | -----: | ------------------: | --------------: | -------- | ------------------------------------ |
|  -0.6% | -213.963 MiB | 100.0% | 36.8 GiB → 36.6 GiB | 75,092 → 74,681 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change |        Delta |      % |                Size |         Samples | Caller     | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------- | ----------------------------------- |
|  -0.6% | -213.963 MiB | 100.0% | 36.8 GiB → 36.6 GiB | 75,092 → 74,681 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |       Delta |             % |          Size | Samples | Caller              | Location                                                               |
| ------: | ----------: | ------------: | ------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
| removed | -206.96 MiB | 100.0% → 0.0% | 207 MiB → 0 B | 408 → 0 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111f208` |

##### `<init>(Collection)` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |         Samples | Caller                       | Location                                    |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------------------------- | ------------------------------------------- |
|  -2.7% | -198.499 MiB | 100.0% | 7.11 GiB → 6.92 GiB | 14,560 → 14,163 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |        Delta |             % |                Size |         Samples | Caller               | Location              |
| -----: | -----------: | ------------: | ------------------: | --------------: | -------------------- | --------------------- |
|  -1.1% | -157.464 MiB | 69.2% → 69.0% | 13.6 GiB → 13.4 GiB | 27,453 → 27,155 | `addAll(Collection)` | `java.util.ArrayList` |
|  -0.3% |  -15.999 MiB | 30.8% → 31.0% | 6.03 GiB → 6.01 GiB | 12,340 → 12,308 | `grow()`             | `java.util.ArrayList` |

##### `toArray()` (`java.util.ArrayList`)

| Change |        Delta |             % |                Size |         Samples | Caller               | Location              |
| -----: | -----------: | ------------: | ------------------: | --------------: | -------------------- | --------------------- |
|  -2.7% | -198.499 MiB | 49.5% → 48.4% | 7.11 GiB → 6.92 GiB | 14,560 → 14,163 | `<init>(Collection)` | `java.util.ArrayList` |
|  +1.8% | +130.499 MiB | 50.5% → 51.6% | 7.26 GiB → 7.39 GiB | 14,867 → 15,128 | `addAll(Collection)` | `java.util.ArrayList` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change |       Delta |      % |                Size |         Samples | Caller                 | Location                            |
| -----: | ----------: | -----: | ------------------: | --------------: | ---------------------- | ----------------------------------- |
|  -1.1% | -62.499 MiB | 100.0% | 5.63 GiB → 5.57 GiB | 11,532 → 11,407 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `addAll(Collection)` (`java.util.ArrayList`)

| Change |       Delta |      % |     Size |         Samples | Caller                       | Location                                    |
| -----: | ----------: | -----: | -------: | --------------: | ---------------------------- | ------------------------------------------- |
|  -0.1% | -26.964 MiB | 100.0% | 20.8 GiB | 42,320 → 42,283 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `grow()` (`java.util.ArrayList`)

| Change |       Delta |      % |                Size |         Samples | Caller                       | Location              |
| -----: | ----------: | -----: | ------------------: | --------------: | ---------------------------- | --------------------- |
|  -0.3% | -15.999 MiB | 100.0% | 6.03 GiB → 6.01 GiB | 12,340 → 12,308 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

| Change |       Delta |      % |                Size |         Samples | Caller        | Location              |
| -----: | ----------: | -----: | ------------------: | --------------: | ------------- | --------------------- |
|  -0.3% | -15.999 MiB | 100.0% | 6.03 GiB → 6.01 GiB | 12,340 → 12,308 | `add(Object)` | `java.util.ArrayList` |

##### `add(Object)` (`java.util.ArrayList`)

| Change |       Delta |     % |                Size |         Samples | Caller                   | Location                                                   |
| -----: | ----------: | ----: | ------------------: | --------------: | ------------------------ | ---------------------------------------------------------- |
|  -0.3% | -15.999 MiB | 99.9% | 6.02 GiB → 6.01 GiB | 12,334 → 12,302 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `resize()` (`java.util.HashMap`)

| Change |       Delta |             % |              Size |   Samples | Caller                              | Location            |
| -----: | ----------: | ------------: | ----------------: | --------: | ----------------------------------- | ------------------- |
| -15.0% | -11.499 MiB | 65.1% → 61.3% | 76.5 MiB → 65 MiB | 153 → 130 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

| Change |          Delta |             % |              Size | Samples | Caller                                               | Location                                             |
| -----: | -------------: | ------------: | ----------------: | ------: | ---------------------------------------------------- | ---------------------------------------------------- |
| -37.9% |     -5.499 MiB | 80.6% → 78.3% |  14.5 MiB → 9 MiB | 29 → 18 | `newInvokeSpecial(Object, int, int, Object)`         | `java.lang.invoke.LambdaForm$DMH.0x00000070011a4400` |
| -28.6% | -1,023.998 KiB | 19.4% → 21.7% | 3.5 MiB → 2.5 MiB |   7 → 5 | `newInvokeSpecial(Object, Object, int, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x00000070011a5400` |

##### `mapToObj(IntFunction, int)` (`java.util.stream.IntPipeline`)

| Change |      Delta |      % |              Size | Samples | Caller                  | Location                       |
| -----: | ---------: | -----: | ----------------: | ------: | ----------------------- | ------------------------------ |
| -24.1% | -6.499 MiB | 100.0% | 27 MiB → 20.5 MiB | 54 → 41 | `mapToObj(IntFunction)` | `java.util.stream.IntPipeline` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |                Size |         Samples | Caller              | Location                                                   |
| -----: | ----------: | -----: | ------------------: | --------------: | ------------------- | ---------------------------------------------------------- |
|  -0.8% | -50.999 MiB | 100.0% | 6.42 GiB → 6.37 GiB | 13,158 → 13,056 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |               Size |   Samples | Caller          | Location                                                                              |
| -----: | ----------: | -----: | -----------------: | --------: | --------------- | ------------------------------------------------------------------------------------- |
| -12.7% | -13.999 MiB | 100.0% | 110 MiB → 96.5 MiB | 221 → 193 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011a3940` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011a3940`)

| Change |       Delta |      % |               Size |   Samples | Caller                              | Location            |
| -----: | ----------: | -----: | -----------------: | --------: | ----------------------------------- | ------------------- |
| -12.7% | -13.999 MiB | 100.0% | 110 MiB → 96.5 MiB | 221 → 193 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |       Delta |      % |             Size | Samples | Caller                  | Location                                  |
| -----: | ----------: | -----: | ---------------: | ------: | ----------------------- | ----------------------------------------- |
| -74.2% | -11.499 MiB | 100.0% | 15.5 MiB → 4 MiB |  31 → 8 | `executeOperation(int)` | `org.renaissance.harness.ExecutionDriver` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

| Change |       Delta |      % |               Size | Samples | Caller               | Location                                  |
| -----: | ----------: | -----: | -----------------: | ------: | -------------------- | ----------------------------------------- |
| -62.9% | -10.999 MiB | 100.0% | 17.5 MiB → 6.5 MiB | 35 → 13 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

|  Change |       Delta |             % |          Size | Samples | Caller                                                                                                                 | Location                                    |
| ------: | ----------: | ------------: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| removed | -206.46 MiB | 100.0% → 0.0% | 206 MiB → 0 B | 407 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
|     new | +198.96 MiB | 0.0% → 100.0% | 0 B → 199 MiB | 0 → 392 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |      Delta |      % |              Size |   Samples | Caller           | Location                                   |
| -----: | ---------: | -----: | ----------------: | --------: | ---------------- | ------------------------------------------ |
|  -3.2% | -6.999 MiB | 100.0% | 221 MiB → 214 MiB | 437 → 423 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

| Change |      Delta |      % |              Size |   Samples | Caller                         | Location                                             |
| -----: | ---------: | -----: | ----------------: | --------: | ------------------------------ | ---------------------------------------------------- |
|  -2.7% | -5.999 MiB | 100.0% | 225 MiB → 219 MiB | 444 → 432 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001004800` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

| Change |      Delta |      % |              Size |   Samples | Caller                                 | Location                        |
| -----: | ---------: | -----: | ----------------: | --------: | -------------------------------------- | ------------------------------- |
|  -2.4% | -5.499 MiB | 100.0% | 226 MiB → 221 MiB | 447 → 436 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111ede0`)

| Change |      Delta |      % |              Size |   Samples | Caller          | Location                             |
| -----: | ---------: | -----: | ----------------: | --------: | --------------- | ------------------------------------ |
|  -2.7% | -5.499 MiB | 100.0% | 207 MiB → 201 MiB | 408 → 397 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |      Delta |      % |              Size |   Samples | Caller           | Location                                    |
| -----: | ---------: | -----: | ----------------: | --------: | ---------------- | ------------------------------------------- |
|  -2.7% | -5.499 MiB | 100.0% | 207 MiB → 201 MiB | 408 → 397 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |      % |                Size |         Samples | Callee     | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------- | ----------------------------------- |
|  +7.8% | +630.534 MiB | 100.0% | 7.87 GiB → 8.49 GiB | 15,796 → 17,074 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |        Delta |            % |                Size |         Samples | Callee                    | Location                                               |
| ------: | -----------: | -----------: | ------------------: | --------------: | ------------------------- | ------------------------------------------------------ |
|   +7.8% | +618.034 MiB |       100.0% | 7.71 GiB → 8.31 GiB | 15,463 → 16,716 | `invoke()`                | `java.util.concurrent.ForkJoinTask`                    |
| removed | -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `<init>(JavaKMeans, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`)

| Change |        Delta |      % |                Size |         Samples | Callee                         | Location                                    |
| -----: | -----------: | -----: | ------------------: | --------------: | ------------------------------ | ------------------------------------------- |
|  +7.8% | +616.534 MiB | 100.0% | 7.71 GiB → 8.31 GiB | 15,467 → 16,717 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

| Change |        Delta |      % |                Size |         Samples | Callee   | Location                                                               |
| -----: | -----------: | -----: | ------------------: | --------------: | -------- | ---------------------------------------------------------------------- |
|  +7.8% | +616.534 MiB | 100.0% | 7.71 GiB → 8.31 GiB | 15,467 → 16,717 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |        Delta |      % |                Size |         Samples | Callee     | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------- | ----------------------------------- |
|  +0.9% | +283.499 MiB | 100.0% | 29.3 GiB → 29.5 GiB | 59,920 → 60,487 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |             % |                Size |         Samples | Callee                                                    | Location                                      |
| -----: | -----------: | ------------: | ------------------: | --------------: | --------------------------------------------------------- | --------------------------------------------- |
|  +0.9% | +283.499 MiB | 98.9% → 99.1% | 29.3 GiB → 29.5 GiB | 59,920 → 60,487 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -1.1% |  -62.499 MiB | 19.0% → 18.7% | 5.63 GiB → 5.57 GiB | 11,532 → 11,407 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |      % |                Size |         Samples | Callee                 | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------------------- | ----------------------------------- |
|  +0.7% | +221.999 MiB | 100.0% | 29.6 GiB → 29.8 GiB | 60,611 → 61,055 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |        Delta |            % |          Size | Samples | Callee                                                                                       | Location                                  |
| -----: | -----------: | -----------: | ------------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
|    new |  +198.96 MiB | 0.0% → 98.8% | 0 B → 199 MiB | 0 → 392 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
|    new |   +1.999 MiB |  0.0% → 1.0% |   0 B → 2 MiB |   0 → 4 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |
|    new | +511.999 KiB |  0.0% → 0.2% | 0 B → 512 KiB |   0 → 1 | `loadClass(String)`                                                                          | `java.lang.ClassLoader`                   |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |       Delta |             % |              Size |   Samples | Callee               | Location                                               |
| ------: | ----------: | ------------: | ----------------: | --------: | -------------------- | ------------------------------------------------------ |
|  +23.3% | +41.999 MiB | 99.2% → 98.9% | 180 MiB → 222 MiB | 361 → 445 | `invoke()`           | `java.util.concurrent.ForkJoinTask`                    |
| +300.0% |  +1.499 MiB |   0.3% → 0.9% |   512 KiB → 2 MiB |     1 → 4 | `div(double[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |        Delta |             % |              Size |   Samples | Callee                | Location                                               |
| -----: | -----------: | ------------: | ----------------: | --------: | --------------------- | ------------------------------------------------------ |
| +23.6% |  +42.999 MiB | 91.5% → 95.9% | 182 MiB → 225 MiB | 364 → 450 | `average(List)`       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| -50.0% |   -3.999 MiB |   4.0% → 1.7% |     8 MiB → 4 MiB |    16 → 8 | `boxed(double[])`     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| -25.0% | -511.999 KiB |   1.0% → 0.6% |   2 MiB → 1.5 MiB |     4 → 3 | `put(Object, Object)` | `java.util.HashMap`                                    |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |       Delta |      % |              Size |   Samples | Callee                     | Location                                               |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------------- | ------------------------------------------------------ |
| +17.8% | +35.499 MiB | 100.0% | 199 MiB → 234 MiB | 398 → 469 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| +17.8% | +35.499 MiB | 100.0% | 199 MiB → 234 MiB | 398 → 469 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `combineResults(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |                Size |   Samples | Callee                    | Location                                                  |
| -----: | ----------: | -----: | ------------------: | --------: | ------------------------- | --------------------------------------------------------- |
| +19.9% | +13.999 MiB | 100.0% | 70.5 MiB → 84.5 MiB | 141 → 169 | `add(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |                Size |   Samples | Callee                               | Location                                                  |
| -----: | ----------: | -----: | ------------------: | --------: | ------------------------------------ | --------------------------------------------------------- |
| +19.9% | +13.999 MiB | 100.0% | 70.5 MiB → 84.5 MiB | 141 → 169 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |      Delta |      % |                Size |   Samples | Callee              | Location                                                  |
| -----: | ---------: | -----: | ------------------: | --------: | ------------------- | --------------------------------------------------------- |
| +13.2% | +9.999 MiB | 100.0% | 75.5 MiB → 85.5 MiB | 151 → 171 | `vectorSum()`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| +13.2% | +9.999 MiB | 100.0% | 75.5 MiB → 85.5 MiB | 151 → 171 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

| Change |       Delta |             % |               Size |   Samples | Callee                                       | Location                                                                              |
| -----: | ----------: | ------------: | -----------------: | --------: | -------------------------------------------- | ------------------------------------------------------------------------------------- |
| +28.4% | +32.499 MiB | 38.0% → 47.6% |  114 MiB → 147 MiB | 229 → 294 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                                                                   |
| -12.7% | -13.999 MiB | 36.7% → 31.3% | 110 MiB → 96.5 MiB | 221 → 193 | `apply(Object)`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011a3940` |
| -15.0% | -11.499 MiB | 25.4% → 21.1% |  76.5 MiB → 65 MiB | 153 → 130 | `resize()`                                   | `java.util.HashMap`                                                                   |

##### `accept(Object)` (`java.util.stream.ReferencePipeline$3$1`)

| Change |      Delta |             % |          Size | Samples | Callee          | Location                                                                                      |
| -----: | ---------: | ------------: | ------------: | ------: | --------------- | --------------------------------------------------------------------------------------------- |
|    new | +6.499 MiB | 0.0% → 100.0% | 0 B → 6.5 MiB |  0 → 13 | `apply(Object)` | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x0000007001123bf8` |

##### `forEachRemaining(Consumer)` (`java.util.Spliterators$ArraySpliterator`)

| Change |      Delta |             % |          Size | Samples | Callee           | Location                                 |
| -----: | ---------: | ------------: | ------------: | ------: | ---------------- | ---------------------------------------- |
|    new | +6.499 MiB | 0.0% → 100.0% | 0 B → 6.5 MiB |  0 → 13 | `accept(Object)` | `java.util.stream.ReferencePipeline$3$1` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

| Change |      Delta |             % |              Size |   Samples | Callee                                       | Location            |
| -----: | ---------: | ------------: | ----------------: | --------: | -------------------------------------------- | ------------------- |
|  +3.9% | +5.499 MiB | 77.7% → 78.4% | 139 MiB → 145 MiB | 279 → 290 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap` |

##### `putMapEntries(Map, boolean)` (`java.util.HashMap`)

| Change |      Delta |             % |              Size |   Samples | Callee                                          | Location            |
| -----: | ---------: | ------------: | ----------------: | --------: | ----------------------------------------------- | ------------------- |
|  +4.0% | +6.999 MiB | 93.1% → 95.1% | 176 MiB → 183 MiB | 353 → 367 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |
| -26.9% | -3.499 MiB |   6.9% → 4.9% |  13 MiB → 9.5 MiB |   26 → 19 | `entrySet()`                                    | `java.util.HashMap` |

##### `<init>(Map)` (`java.util.HashMap`)

| Change |      Delta |      % |              Size |   Samples | Callee                        | Location            |
| -----: | ---------: | -----: | ----------------: | --------: | ----------------------------- | ------------------- |
|  +1.8% | +3.499 MiB | 100.0% | 189 MiB → 193 MiB | 379 → 386 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `evaluate(Spliterator, boolean, IntFunction)` (`java.util.stream.AbstractPipeline`)

| Change |      Delta |             % |              Size | Samples | Callee                               | Location                             |
| -----: | ---------: | ------------: | ----------------: | ------: | ------------------------------------ | ------------------------------------ |
|  +8.6% | +2.499 MiB | 27.6% → 29.3% | 29 MiB → 31.5 MiB | 58 → 63 | `makeNodeBuilder(long, IntFunction)` | `java.util.stream.ReferencePipeline` |

##### `evaluateToArrayNode(IntFunction)` (`java.util.stream.AbstractPipeline`)

| Change |      Delta |      % |              Size |   Samples | Callee                                        | Location                            |
| -----: | ---------: | -----: | ----------------: | --------: | --------------------------------------------- | ----------------------------------- |
|  +2.4% | +2.499 MiB | 100.0% | 105 MiB → 107 MiB | 210 → 215 | `evaluate(Spliterator, boolean, IntFunction)` | `java.util.stream.AbstractPipeline` |

##### `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`)

| Change |      Delta |      % |              Size |   Samples | Callee                             | Location                            |
| -----: | ---------: | -----: | ----------------: | --------: | ---------------------------------- | ----------------------------------- |
|  +2.4% | +2.499 MiB | 100.0% | 105 MiB → 107 MiB | 210 → 215 | `evaluateToArrayNode(IntFunction)` | `java.util.stream.AbstractPipeline` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

| Change |        Delta |             % |              Size | Samples | Callee                      | Location                                  |
| -----: | -----------: | ------------: | ----------------: | ------: | --------------------------- | ----------------------------------------- |
|  -2.6% | -511.999 KiB | 67.2% → 60.3% | 19.5 MiB → 19 MiB | 39 → 38 | `<init>(long, IntFunction)` | `java.util.stream.Nodes$FixedNodeBuilder` |

##### `makeNodeBuilder(long, IntFunction)` (`java.util.stream.ReferencePipeline`)

| Change |      Delta |      % |              Size | Samples | Callee                       | Location                 |
| -----: | ---------: | -----: | ----------------: | ------: | ---------------------------- | ------------------------ |
|  +8.6% | +2.499 MiB | 100.0% | 29 MiB → 31.5 MiB | 58 → 63 | `builder(long, IntFunction)` | `java.util.stream.Nodes` |

##### `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`)

| Change |      Delta |      % |              Size |   Samples | Callee                               | Location                            |
| -----: | ---------: | -----: | ----------------: | --------: | ------------------------------------ | ----------------------------------- |
|  +1.1% | +1.999 MiB | 100.0% | 189 MiB → 191 MiB | 372 → 376 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`)

| Change |      Delta |      % |              Size |   Samples | Callee                                            | Location                              |
| -----: | ---------: | -----: | ----------------: | --------: | ------------------------------------------------- | ------------------------------------- |
|  +1.1% | +1.999 MiB | 100.0% | 189 MiB → 191 MiB | 372 → 376 | `evaluateSequential(PipelineHelper, Spliterator)` | `java.util.stream.ReduceOps$ReduceOp` |

##### `rowToArray$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |          Delta |            % |          Size | Samples | Callee              | Location                            |
| -----: | -------------: | -----------: | ------------: | ------: | ------------------- | ----------------------------------- |
|    new |     +4.999 MiB | 0.0% → 76.9% |   0 B → 5 MiB |  0 → 10 | `<clinit>()`        | `scala.Predef$`                     |
|    new | +1,023.998 KiB | 0.0% → 15.4% |   0 B → 1 MiB |   0 → 2 | `map(Function1)`    | `scala.collection.immutable.Range`  |
|    new |   +511.999 KiB |  0.0% → 7.7% | 0 B → 512 KiB |   0 → 1 | `toArray(ClassTag)` | `scala.collection.AbstractIterable` |

##### `setUpBeforeAll$$anonfun$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |      Delta |             % |          Size | Samples | Callee              | Location                                  |
| -----: | ---------: | ------------: | ------------: | ------: | ------------------- | ----------------------------------------- |
|    new | +6.499 MiB | 0.0% → 100.0% | 0 B → 6.5 MiB |  0 → 13 | `rowToArray$1(Map)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `lambda$toCsvRows$2(String[], Function, String)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`)

| Change |      Delta |             % |          Size | Samples | Callee          | Location                                          |
| -----: | ---------: | ------------: | ------------: | ------: | --------------- | ------------------------------------------------- |
|    new | +6.499 MiB | 0.0% → 100.0% | 0 B → 6.5 MiB |  0 → 13 | `apply(Object)` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda` |

##### `apply(Object)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x0000007001123bf8`)

| Change |      Delta |             % |          Size | Samples | Callee                                           | Location                                                           |
| -----: | ---------: | ------------: | ------------: | ------: | ------------------------------------------------ | ------------------------------------------------------------------ |
|    new | +6.499 MiB | 0.0% → 100.0% | 0 B → 6.5 MiB |  0 → 13 | `lambda$toCsvRows$2(String[], Function, String)` | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |

##### `toCsvRows(Function)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`)

| Change |      Delta |             % |          Size | Samples | Callee               | Location                             |
| -----: | ---------: | ------------: | ------------: | ------: | -------------------- | ------------------------------------ |
|    new | +6.499 MiB | 0.0% → 100.0% | 0 B → 6.5 MiB |  0 → 13 | `collect(Collector)` | `java.util.stream.ReferencePipeline` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda`)

| Change |          Delta |              % |              Size | Samples | Callee                           | Location                                  |
| -----: | -------------: | -------------: | ----------------: | ------: | -------------------------------- | ----------------------------------------- |
|    new |     +6.499 MiB |   0.0% → 72.2% |     0 B → 6.5 MiB |  0 → 13 | `setUpBeforeAll$$anonfun$1(Map)` | `org.renaissance.jdk.concurrent.FjKmeans` |
| -28.6% | -1,023.998 KiB | 100.0% → 27.8% | 3.5 MiB → 2.5 MiB |   7 → 5 | `$anonfun$adapted$1(Object)`     | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |     % |              Size |         Samples | Callee                | Location            |
| -----: | -----------: | ----: | ----------------: | --------------: | --------------------- | ------------------- |
|  -0.9% | -245.963 MiB | 99.1% | 28 GiB → 27.8 GiB | 57,103 → 56,628 | `forEach(BiConsumer)` | `java.util.HashMap` |
|  +1.8% |   +3.499 MiB |  0.7% | 189 MiB → 193 MiB |       379 → 386 | `<init>(Map)`         | `java.util.HashMap` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |              Size |         Samples | Callee            | Location                                    |
| -----: | -----------: | -----: | ----------------: | --------------: | ----------------- | ------------------------------------------- |
|  -0.9% | -260.463 MiB | 100.0% | 28.3 GiB → 28 GiB | 57,629 → 57,125 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |              Size |         Samples | Callee                     | Location                                                   |
| -----: | -----------: | -----: | ----------------: | --------------: | -------------------------- | ---------------------------------------------------------- |
|  -0.9% | -260.463 MiB | 100.0% | 28.3 GiB → 28 GiB | 57,629 → 57,125 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |             % |                Size |         Samples | Callee               | Location              |
| -----: | -----------: | ------------: | ------------------: | --------------: | -------------------- | --------------------- |
|  -2.7% | -198.499 MiB | 25.4% → 24.9% | 7.11 GiB → 6.92 GiB | 14,560 → 14,163 | `<init>(Collection)` | `java.util.ArrayList` |
|  -0.1% |  -26.964 MiB | 74.3% → 74.8% |            20.8 GiB | 42,320 → 42,283 | `addAll(Collection)` | `java.util.ArrayList` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`)

| Change |        Delta |      % |              Size |         Samples | Callee                       | Location                                    |
| -----: | -----------: | -----: | ----------------: | --------------: | ---------------------------- | ------------------------------------------- |
|  -0.9% | -245.963 MiB | 100.0% | 28 GiB → 27.8 GiB | 57,100 → 56,625 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

| Change |        Delta |      % |              Size |         Samples | Callee                  | Location                                                               |
| -----: | -----------: | -----: | ----------------: | --------------: | ----------------------- | ---------------------------------------------------------------------- |
|  -0.9% | -245.963 MiB | 100.0% | 28 GiB → 27.8 GiB | 57,100 → 56,625 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |      % |              Size |         Samples | Callee                              | Location            |
| -----: | -----------: | -----: | ----------------: | --------------: | ----------------------------------- | ------------------- |
|  -0.9% | -245.963 MiB | 100.0% | 28 GiB → 27.8 GiB | 57,103 → 56,628 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`)

| Change |        Delta |      % |              Size |         Samples | Callee                              | Location                                    |
| -----: | -----------: | -----: | ----------------: | --------------: | ----------------------------------- | ------------------------------------------- |
|  -0.9% | -245.963 MiB | 100.0% | 28 GiB → 27.8 GiB | 57,103 → 56,628 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

| Change |        Delta |      % |              Size |         Samples | Callee                   | Location                                                               |
| -----: | -----------: | -----: | ----------------: | --------------: | ------------------------ | ---------------------------------------------------------------------- |
|  -0.9% | -245.963 MiB | 100.0% | 28 GiB → 27.8 GiB | 57,103 → 56,628 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |      Delta |            % |                Size | Samples | Callee                         | Location           |
| -----: | ---------: | -----------: | ------------------: | ------: | ------------------------------ | ------------------ |
| +80.2% | +9.999 MiB | <0.1% → 0.1% | 12.5 MiB → 22.5 MiB | 19 → 39 | `copyOf(Object[], int, Class)` | `java.util.Arrays` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |             % |                Size |         Samples | Callee   | Location                                            |
| -----: | -----------: | ------------: | ------------------: | --------------: | -------- | --------------------------------------------------- |
|  +7.8% | +616.534 MiB | 20.9% → 22.7% | 7.71 GiB → 8.31 GiB | 15,467 → 16,717 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  -0.6% | -213.963 MiB |        100.0% | 36.8 GiB → 36.6 GiB | 75,092 → 74,681 | `exec()` | `java.util.concurrent.RecursiveTask`                |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |        Delta |      % |                Size |         Samples | Callee     | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------- | ----------------------------------- |
|  -0.6% | -215.463 MiB | 100.0% | 36.8 GiB → 36.6 GiB | 75,096 → 74,682 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change |        Delta |      % |                Size |         Samples | Callee                                               | Location                                      |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------------------------------------------------- | --------------------------------------------- |
|  -0.6% | -215.463 MiB | 100.0% | 36.8 GiB → 36.6 GiB | 75,096 → 74,682 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |        Delta |      % |                Size |         Samples | Callee                                   | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------------------------------------- | ----------------------------------- |
|  -0.6% | -215.463 MiB | 100.0% | 36.8 GiB → 36.6 GiB | 75,096 → 74,682 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

| Change |        Delta |      % |                Size |         Samples | Callee                              | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | ----------------------------------- | ----------------------------------- |
|  -0.6% | -215.463 MiB | 100.0% | 36.8 GiB → 36.6 GiB | 75,096 → 74,682 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change |        Delta |             % |                Size |         Samples | Callee                           | Location                                                   |
| -----: | -----------: | ------------: | ------------------: | --------------: | -------------------------------- | ---------------------------------------------------------- |
|  -0.9% | -260.463 MiB | 76.8% → 76.6% |   28.3 GiB → 28 GiB | 57,629 → 57,125 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +0.7% | +221.999 MiB | 80.4% → 81.4% | 29.6 GiB → 29.8 GiB | 60,611 → 61,055 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
| +17.8% |  +35.499 MiB |   0.5% → 0.6% |   199 MiB → 234 MiB |       398 → 469 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| +16.8% |  +25.499 MiB |   0.4% → 0.5% |   151 MiB → 177 MiB |       303 → 354 | `createSubtask(int, int)`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +19.9% |  +13.999 MiB |          0.2% | 70.5 MiB → 84.5 MiB |       141 → 169 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change |        Delta |      % |                Size |         Samples | Callee      | Location                                               |
| -----: | -----------: | -----: | ------------------: | --------------: | ----------- | ------------------------------------------------------ |
|  -0.6% | -213.963 MiB | 100.0% | 36.8 GiB → 36.6 GiB | 75,092 → 74,681 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |        Delta |            % |          Size | Samples | Callee                                                                                       | Location                                  |
| ------: | -----------: | -----------: | ------------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
| removed |  -206.46 MiB | 99.8% → 0.0% | 206 MiB → 0 B | 407 → 0 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
| removed | -511.999 KiB |  0.2% → 0.0% | 512 KiB → 0 B |   1 → 0 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `<init>(Collection)` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |         Samples | Callee      | Location              |
| -----: | -----------: | -----: | ------------------: | --------------: | ----------- | --------------------- |
|  -2.7% | -198.499 MiB | 100.0% | 7.11 GiB → 6.92 GiB | 14,560 → 14,163 | `toArray()` | `java.util.ArrayList` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |        Delta |             % |                Size |         Samples | Callee                  | Location           |
| -----: | -----------: | ------------: | ------------------: | --------------: | ----------------------- | ------------------ |
|  -0.8% | -153.964 MiB | 98.8% → 98.9% | 19.4 GiB → 19.2 GiB | 39,301 → 39,010 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `toArray()` (`java.util.ArrayList`)

| Change |       Delta |      % |                Size |         Samples | Callee                  | Location           |
| -----: | ----------: | -----: | ------------------: | --------------: | ----------------------- | ------------------ |
|  -0.5% | -67.999 MiB | 100.0% | 14.4 GiB → 14.3 GiB | 29,427 → 29,291 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change |       Delta |      % |                Size |         Samples | Callee     | Location                            |
| -----: | ----------: | -----: | ------------------: | --------------: | ---------- | ----------------------------------- |
|  -1.1% | -62.499 MiB | 100.0% | 5.63 GiB → 5.57 GiB | 11,532 → 11,407 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `addAll(Collection)` (`java.util.ArrayList`)

| Change |        Delta |             % |                Size |         Samples | Callee      | Location              |
| -----: | -----------: | ------------: | ------------------: | --------------: | ----------- | --------------------- |
|  -1.1% | -157.464 MiB | 65.1% → 64.5% | 13.6 GiB → 13.4 GiB | 27,453 → 27,155 | `grow(int)` | `java.util.ArrayList` |
|  +1.8% | +130.499 MiB | 34.9% → 35.5% | 7.26 GiB → 7.39 GiB | 14,867 → 15,128 | `toArray()` | `java.util.ArrayList` |

##### `grow()` (`java.util.ArrayList`)

| Change |       Delta |      % |                Size |         Samples | Callee      | Location              |
| -----: | ----------: | -----: | ------------------: | --------------: | ----------- | --------------------- |
|  -0.3% | -15.999 MiB | 100.0% | 6.03 GiB → 6.01 GiB | 12,340 → 12,308 | `grow(int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

| Change |       Delta |      % |                Size |         Samples | Callee   | Location              |
| -----: | ----------: | -----: | ------------------: | --------------: | -------- | --------------------- |
|  -0.3% | -15.999 MiB | 100.0% | 6.03 GiB → 6.01 GiB | 12,340 → 12,308 | `grow()` | `java.util.ArrayList` |

##### `add(Object)` (`java.util.ArrayList`)

| Change |       Delta |      % |                Size |         Samples | Callee                       | Location              |
| -----: | ----------: | -----: | ------------------: | --------------: | ---------------------------- | --------------------- |
|  -0.3% | -15.999 MiB | 100.0% | 6.03 GiB → 6.01 GiB | 12,340 → 12,308 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

| Change |      Delta |             % |          Size | Samples | Callee                    | Location                   |
| -----: | ---------: | ------------: | ------------: | ------: | ------------------------- | -------------------------- |
| -50.0% | -2.999 MiB | 33.3% → 26.1% | 6 MiB → 3 MiB |  12 → 6 | `allocateInstance(Class)` | `jdk.internal.misc.Unsafe` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |             % |                Size |         Samples | Callee                              | Location              |
| -----: | ----------: | ------------: | ------------------: | --------------: | ----------------------------------- | --------------------- |
|  -0.3% | -15.999 MiB | 93.7% → 94.2% | 6.02 GiB → 6.01 GiB | 12,334 → 12,302 | `add(Object)`                       | `java.util.ArrayList` |
|  +2.3% |  +6.999 MiB |   4.6% → 4.7% |   301 MiB → 308 MiB |       603 → 617 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`   |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011a3940`)

| Change |       Delta |      % |               Size |   Samples | Callee                               | Location                                                   |
| -----: | ----------: | -----: | -----------------: | --------: | ------------------------------------ | ---------------------------------------------------------- |
| -12.7% | -13.999 MiB | 100.0% | 110 MiB → 96.5 MiB | 221 → 193 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change |        Delta |            % |          Size | Samples | Callee                                                           | Location                               |
| ------: | -----------: | -----------: | ------------: | ------: | ---------------------------------------------------------------- | -------------------------------------- |
| removed |   -6.999 MiB | 45.2% → 0.0% |   7 MiB → 0 B |  14 → 0 | `<clinit>()`                                                     | `scala.Predef$`                        |
| removed |   -3.499 MiB | 22.6% → 0.0% | 3.5 MiB → 0 B |   7 → 0 | `loadClass(String)`                                              | `java.lang.ClassLoader`                |
| removed | -511.999 KiB |  3.2% → 0.0% | 512 KiB → 0 B |   1 → 0 | `until$extension(int, int)`                                      | `scala.runtime.RichInt$`               |
| removed | -511.999 KiB |  3.2% → 0.0% | 512 KiB → 0 B |   1 → 0 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

|  Change |        Delta |             % |             Size | Samples | Callee                                                           | Location                                                             |
| ------: | -----------: | ------------: | ---------------: | ------: | ---------------------------------------------------------------- | -------------------------------------------------------------------- |
|  -74.2% |  -11.499 MiB | 88.6% → 61.5% | 15.5 MiB → 4 MiB |  31 → 8 | `run(BenchmarkContext)`                                          | `org.renaissance.jdk.concurrent.FjKmeans`                            |
|     new |   +1.999 MiB |  0.0% → 30.8% |      0 B → 2 MiB |   0 → 4 | `validate()`                                                     | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011a7770` |
| removed | -511.999 KiB |   2.9% → 0.0% |    512 KiB → 0 B |   1 → 0 | `linkMethodHandleConstant(Class, int, Class, String, Object)`    | `java.lang.invoke.MethodHandleNatives`                               |
| removed | -511.999 KiB |   2.9% → 0.0% |    512 KiB → 0 B |   1 → 0 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives`                               |
|  -50.0% | -511.999 KiB |   5.7% → 7.7% |  1 MiB → 512 KiB |   2 → 1 | `notifyAfterOperationSetUp(String, int, boolean)`                | `org.renaissance.harness.EventDispatcher`                            |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

| Change |       Delta |             % |               Size |   Samples | Callee                             | Location                                  |
| -----: | ----------: | ------------: | -----------------: | --------: | ---------------------------------- | ----------------------------------------- |
| -62.9% | -10.999 MiB |   8.5% → 3.3% | 17.5 MiB → 6.5 MiB |   35 → 13 | `executeOperation(int)`            | `org.renaissance.harness.ExecutionDriver` |
|  +1.9% |  +3.499 MiB | 91.5% → 96.7% |  189 MiB → 192 MiB | 372 → 379 | `setUpBeforeAll(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |          Delta |             % |              Size |   Samples | Callee                                                                        | Location                                    |
| ------: | -------------: | ------------: | ----------------: | --------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
|   -2.7% |     -5.499 MiB | 93.5% → 93.9% | 207 MiB → 201 MiB | 408 → 397 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |
| +200.0% | +1,023.998 KiB |   0.2% → 0.7% | 512 KiB → 1.5 MiB |     1 → 3 | `loadClass(String)`                                                           | `java.lang.ClassLoader`                     |
|  -18.2% | -1,023.998 KiB |   2.5% → 2.1% | 5.5 MiB → 4.5 MiB |    11 → 9 | `<clinit>()`                                                                  | `scala.Predef$`                             |
|  -66.7% | -1,023.998 KiB |   0.7% → 0.2% | 1.5 MiB → 512 KiB |     3 → 1 | `apply(Seq)`                                                                  | `scala.collection.immutable.Map$`           |
| +100.0% | +1,023.998 KiB |   0.5% → 0.9% |     1 MiB → 2 MiB |     2 → 4 | `apply(Function0)`                                                            | `scala.util.Try$`                           |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

| Change |          Delta |             % |              Size |   Samples | Callee              | Location                                    |
| -----: | -------------: | ------------: | ----------------: | --------: | ------------------- | ------------------------------------------- |
|  -3.2% |     -6.999 MiB | 98.4% → 97.9% | 221 MiB → 214 MiB | 437 → 423 | `main(String[])`    | `org.renaissance.harness.RenaissanceSuite$` |
| +28.6% | +1,023.998 KiB |   1.6% → 2.1% | 3.5 MiB → 4.5 MiB |     7 → 9 | `loadClass(String)` | `java.lang.ClassLoader`                     |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

| Change |        Delta |             % |              Size |   Samples | Callee                     | Location                   |
| -----: | -----------: | ------------: | ----------------: | --------: | -------------------------- | -------------------------- |
|  -2.7% |   -5.999 MiB | 99.3% → 99.1% | 225 MiB → 219 MiB | 444 → 432 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |
|    new | +511.999 KiB |   0.0% → 0.2% |     0 B → 512 KiB |     0 → 1 | `loadClass(String)`        | `java.lang.ClassLoader`    |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111ede0`)

|  Change |       Delta |             % |          Size | Samples | Callee                                                                                                                 | Location                                    |
| ------: | ----------: | ------------: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| removed | -206.96 MiB | 100.0% → 0.0% | 207 MiB → 0 B | 408 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
|     new | +201.46 MiB | 0.0% → 100.0% | 0 B → 201 MiB | 0 → 397 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |      Delta |      % |              Size |   Samples | Callee               | Location                          |
| -----: | ---------: | -----: | ----------------: | --------: | -------------------- | --------------------------------- |
|  -2.7% | -5.499 MiB | 100.0% | 207 MiB → 201 MiB | 408 → 397 | `foreach(Function1)` | `scala.collection.immutable.List` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in bytes allocated in their leaf frame.

| Change |        Delta |           % |                Size |       Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -----: | -----------: | ----------: | ------------------: | ------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +18.1% | +101.499 MiB | 1.5% → 1.8% |   559 MiB → 661 MiB | 1,119 → 1,322 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| +15.1% |  +84.499 MiB | 1.5% → 1.7% |   559 MiB → 644 MiB | 1,119 → 1,288 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`) |
|    new |  +62.999 MiB | 0.0% → 0.2% |        0 B → 63 MiB |       0 → 126 | `valueOf(double)` (`java.lang.Double`) ← `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluate(Spliterator, boolean, IntFunction)` ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111ede0`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001004800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| +37.8% |  +43.999 MiB | 0.3% → 0.4% |   116 MiB → 160 MiB |     233 → 321 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| +24.8% |  +40.999 MiB | 0.4% → 0.5% |   165 MiB → 206 MiB |     331 → 413 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| +30.3% |  +40.499 MiB | 0.4% → 0.5% |   133 MiB → 174 MiB |     267 → 348 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| +23.8% |  +38.499 MiB | 0.4% → 0.5% |   162 MiB → 200 MiB |     324 → 401 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| +14.3% |  +35.499 MiB | 0.7% → 0.8% |   248 MiB → 283 MiB |     496 → 567 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| +15.6% |  +31.499 MiB | 0.5% → 0.6% |   202 MiB → 234 MiB |     405 → 468 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| +22.5% |  +30.999 MiB |        0.4% |   137 MiB → 168 MiB |     275 → 337 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| +21.9% |  +29.999 MiB |        0.4% |   137 MiB → 167 MiB |     274 → 334 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                           |
|  +7.6% |  +29.999 MiB | 1.0% → 1.1% |   397 MiB → 427 MiB |     794 → 854 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|    new |  +27.499 MiB | 0.0% → 0.1% |      0 B → 27.5 MiB |        0 → 55 | `intStream(Spliterator$OfInt, boolean)` (`java.util.stream.StreamSupport`) ← `range(int, int)` (`java.util.stream.IntStream`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111ede0`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001004800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  +4.1% |  +26.499 MiB | 1.7% → 1.8% |   644 MiB → 671 MiB | 1,289 → 1,342 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| +21.3% |  +25.499 MiB | 0.3% → 0.4% |   119 MiB → 145 MiB |     239 → 290 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| +49.5% |  +25.499 MiB | 0.1% → 0.2% |   51.5 MiB → 77 MiB |     103 → 154 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  +5.1% |  +24.999 MiB | 1.3% → 1.4% |   492 MiB → 517 MiB |   984 → 1,034 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  +4.8% |  +23.999 MiB | 1.3% → 1.4% |   503 MiB → 527 MiB | 1,006 → 1,054 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  +5.6% |  +22.999 MiB | 1.1% → 1.2% |   413 MiB → 436 MiB |     826 → 872 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| +33.1% |  +22.999 MiB |        0.2% | 69.5 MiB → 92.5 MiB |     139 → 185 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

### Improvements

Call stacks with the largest decrease in bytes allocated in their leaf frame.

|  Change |        Delta |           % |                Size |       Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------: | -----------: | ----------: | ------------------: | ------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|   -9.8% | -232.999 MiB | 6.3% → 5.7% | 2.32 GiB → 2.09 GiB | 4,751 → 4,285 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|   -9.4% |  -97.499 MiB | 2.7% → 2.5% |  1.01 GiB → 940 MiB | 2,076 → 1,881 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                   |
|   -6.0% |  -75.999 MiB | 3.3% → 3.1% | 1.23 GiB → 1.16 GiB | 2,522 → 2,370 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|   -5.4% |  -73.499 MiB | 3.6% → 3.4% | 1.34 GiB → 1.27 GiB | 2,738 → 2,591 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| removed |  -58.999 MiB | 0.2% → 0.0% |        59 MiB → 0 B |       118 → 0 | `valueOf(double)` (`java.lang.Double`) ← `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluate(Spliterator, boolean, IntFunction)` ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111f208`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001004800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|   -5.1% |  -51.499 MiB | 2.7% → 2.5% | 1,008 MiB → 956 MiB | 2,016 → 1,913 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|   -7.6% |  -43.999 MiB | 1.5% → 1.4% |   582 MiB → 538 MiB | 1,164 → 1,076 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  -13.4% |  -41.999 MiB | 0.8% → 0.7% |   313 MiB → 271 MiB |     626 → 542 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|   -4.5% |  -38.499 MiB | 2.3% → 2.2% |   856 MiB → 818 MiB | 1,713 → 1,636 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|   -5.6% |  -33.499 MiB | 1.6% → 1.5% |   597 MiB → 564 MiB | 1,195 → 1,128 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  -21.7% |  -30.499 MiB | 0.4% → 0.3% |   140 MiB → 110 MiB |     281 → 220 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|   -3.1% |  -29.999 MiB |        2.5% |   963 MiB → 933 MiB | 1,927 → 1,867 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`) |
|   -2.7% |  -28.499 MiB | 2.8% → 2.7% |    1.03 GiB → 1 GiB | 2,114 → 2,057 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  -18.2% |  -26.999 MiB | 0.4% → 0.3% |   148 MiB → 121 MiB |     297 → 243 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| removed |  -26.999 MiB | 0.1% → 0.0% |        27 MiB → 0 B |        54 → 0 | `mapToObj(IntFunction, int)` (`java.util.stream.IntPipeline`) ← `mapToObj(IntFunction)` ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111f208`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001004800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| removed |  -26.999 MiB | 0.1% → 0.0% |        27 MiB → 0 B |        54 → 0 | `intStream(Spliterator$OfInt, boolean)` (`java.util.stream.StreamSupport`) ← `range(int, int)` (`java.util.stream.IntStream`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111f208`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001004800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|   -1.6% |  -22.999 MiB |        3.7% | 1.38 GiB → 1.36 GiB | 2,834 → 2,788 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|   -2.8% |  -22.499 MiB |        2.1% |   814 MiB → 792 MiB | 1,629 → 1,584 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  -26.3% |  -20.999 MiB |        0.2% |     80 MiB → 59 MiB |     160 → 118 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|   -3.8% |  -20.499 MiB |        1.4% |   545 MiB → 525 MiB | 1,091 → 1,050 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

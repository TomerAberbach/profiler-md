# Allocated heap profile diff

Allocated 36.8 GiB → 37 GiB (+174.411 MiB, +0.5%) over 75,115 → 75,465 samples (514 KiB per sample).

| Category         | Change |        Delta |             % |                Size |         Samples |
| ---------------- | -----: | -----------: | ------------: | ------------------: | --------------: |
| Standard library |  +0.1% |  +37.912 MiB | 93.2% → 92.9% | 34.3 GiB → 34.4 GiB | 69,991 → 70,068 |
| Ours             |  +5.3% | +136.499 MiB |   6.8% → 7.1% |  2.5 GiB → 2.64 GiB |   5,124 → 5,397 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── … 36.6 GiB → 36.8 GiB (99.4%) exec() at java.util.concurrent.RecursiveTask
│   └── 36.6 GiB → 36.8 GiB (99.4%) compute() at org.renaissance.jdk.concurrent.JavaKMeans$RangedTask
│       ├── 28.2 GiB → 28 GiB (76.5% → 75.7%) combineResults(Object, Object) at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│       │   └── 28.2 GiB → 28 GiB (76.5% → 75.7%) combineResults(Map, Map)
│       │       └── 28.2 GiB → 28 GiB (76.5% → 75.7%) merge(Map, Map) at org.renaissance.jdk.concurrent.JavaKMeans
│       │           ├── … 27.9 GiB → 27.8 GiB (75.8% → 75.0%) lambda$merge$6(List, List) at org.renaissance.jdk.concurrent.JavaKMeans
│       │           │   ├── 20.9 GiB → 20.7 GiB (56.7% → 56.0%) addAll(Collection) at java.util.ArrayList
│       │           │   │   ├── 13.4 GiB → 13.3 GiB (36.5% → 35.9%) grow(int)
│       │           │   │   │   └── 13.4 GiB → 13.3 GiB (36.5% → 35.9%, self 36.5% → 35.9%, self 90.9% → 90.6% globally) copyOf(Object[], int) at java.util.Arrays
│       │           │   │   └── 7.45 GiB → 7.43 GiB (20.2% → 20.1%) toArray()
│       │           │   │       └── 7.45 GiB → 7.43 GiB (20.2% → 20.1%, self 20.2% → 20.1%) copyOf(Object[], int) at java.util.Arrays
│       │           │   └── 6.92 GiB → 6.93 GiB (18.8% → 18.7%) <init>(Collection) at java.util.ArrayList
│       │           │       └── 6.92 GiB → 6.93 GiB (18.8% → 18.7%) toArray()
│       │           │           └── 6.92 GiB → 6.93 GiB (18.8% → 18.7%, self 18.8% → 18.7%) copyOf(Object[], int) at java.util.Arrays
│       │           └── … 174 MiB → 169 MiB (0.5% → 0.4%) putVal(int, Object, Object, boolean, boolean) at java.util.HashMap
│       ├── 7.99 GiB → 8.23 GiB (21.7% → 22.2%) computeDirectly() at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│       │   ├── … 6.3 GiB → 6.54 GiB (17.1% → 17.7%) collectClusters(int[]) at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│       │   │   ├── … 5.91 GiB → 6.11 GiB (16.1% → 16.5%, self 0.6% → 0.7%) grow(int) at java.util.ArrayList
│       │   │   │   └── 5.68 GiB → 5.87 GiB (15.4% → 15.9%, self 15.4% → 15.9%) copyOf(Object[], int) at java.util.Arrays
│       │   │   └── 311 MiB → 329 MiB (0.8% → 0.9%) computeIfAbsent(Object, Function) at java.util.HashMap
│       │   │       ├── 145 MiB → 138 MiB (0.4%) newNode(int, Object, Object, HashMap$Node)
│       │   │       ├── 104 MiB → 119 MiB (0.3%) apply(Object) at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000008011a3940
│       │   │       │   └── 104 MiB → 119 MiB (0.3%) lambda$collectClusters$0(Double[]) at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│       │   │       └── 61.5 MiB → 72 MiB (0.2%) resize()
│       │   └── … 1.69 GiB → 1.68 GiB (4.6%) findNearestCentroid() at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│       ├── 155 MiB → 191 MiB (0.4% → 0.5%) createSubtask(int, int) at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│       ├── 125 MiB → 136 MiB (0.3% → 0.4%) createSubtask(int, int) at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│       ├── 72.5 MiB → 97 MiB (0.2% → 0.3%) computeDirectly() at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│       │   └── … 72.5 MiB → 97 MiB (0.2% → 0.3%) vectorSum() at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│       └── … 71.5 MiB → 92.5 MiB (0.2%) add(double[], double[]) at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
└── … 198 MiB → 200 MiB (0.5%) applyVoid(Object) at org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000080111ede0
    ├── … 170 MiB → 0 B (0.5% → 0.0%) apply(int) at org.renaissance.jdk.concurrent.JavaKMeans$$Lambda
    │   ├── 67 MiB → 0 B (0.2% → 0.0%) lambda$generateData$3(int, int, Random[], int) at org.renaissance.jdk.concurrent.JavaKMeans
    │   │   └── 67 MiB → 0 B (0.2% → 0.0%) valueOf(double) at java.lang.Double
    │   └── … 19 MiB → 0 B (0.1% → 0.0%) lambda$generateData$4(int) at org.renaissance.jdk.concurrent.JavaKMeans
    └── … 0 B → 104 MiB (0.0% → 0.3%) lambda$generateData$5(int, int, Random[], int) at org.renaissance.jdk.concurrent.JavaKMeans
        ├── 0 B → 50 MiB (0.0% → 0.1%) range(int, int) at java.util.stream.IntStream
        │   └── 0 B → 39.5 MiB (0.0% → 0.1%) intStream(Spliterator$OfInt, boolean) at java.util.stream.StreamSupport
        └── 0 B → 29 MiB (0.0% → 0.1%) mapToObj(IntFunction) at java.util.stream.IntPipeline
            └── 0 B → 29 MiB (0.0% → 0.1%) mapToObj(IntFunction, int)
```

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

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

Functions with the largest decrease in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

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

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |              Size |   Samples | Caller      | Location                                               |
| -----: | ----------: | -----: | ----------------: | --------: | ----------- | ------------------------------------------------------ |
| +23.5% | +36.499 MiB | 100.0% | 155 MiB → 191 MiB | 310 → 383 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |       Delta |             % |                Size |         Samples | Caller      | Location              |
| -----: | ----------: | ------------: | ------------------: | --------------: | ----------- | --------------------- |
|  +0.2% | +40.022 MiB | 57.1% → 57.2% | 19.1 GiB → 19.2 GiB | 38,845 → 38,926 | `grow(int)` | `java.util.ArrayList` |
|    ~0% |  -6.499 MiB | 42.9% → 42.8% |            14.4 GiB | 29,418 → 29,405 | `toArray()` | `java.util.ArrayList` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |             Size |   Samples | Caller              | Location                                                   |
| -----: | ----------: | -----: | ---------------: | --------: | ------------------- | ---------------------------------------------------------- |
| +30.2% | +25.999 MiB | 100.0% | 86 MiB → 112 MiB | 172 → 224 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |              Size |   Samples | Caller              | Location                                                  |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------- | --------------------------------------------------------- |
| +33.8% | +24.499 MiB | 100.0% | 72.5 MiB → 97 MiB | 145 → 194 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |                Size |   Samples | Caller                               | Location                                                  |
| -----: | ----------: | -----: | ------------------: | --------: | ------------------------------------ | --------------------------------------------------------- |
| +29.4% | +20.999 MiB | 100.0% | 71.5 MiB → 92.5 MiB | 143 → 185 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `intStream(Spliterator$OfInt, boolean)` (`java.util.stream.StreamSupport`)

| Change |       Delta |      % |              Size | Samples | Caller            | Location                     |
| -----: | ----------: | -----: | ----------------: | ------: | ----------------- | ---------------------------- |
| +58.0% | +14.499 MiB | 100.0% | 25 MiB → 39.5 MiB | 50 → 79 | `range(int, int)` | `java.util.stream.IntStream` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |              Size |   Samples | Caller          | Location                                                                              |
| -----: | ----------: | -----: | ----------------: | --------: | --------------- | ------------------------------------------------------------------------------------- |
| +13.9% | +14.499 MiB | 100.0% | 104 MiB → 119 MiB | 209 → 238 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000008011a3940` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |       Delta |      % |              Size |   Samples | Caller   | Location              |
| -----: | ----------: | -----: | ----------------: | --------: | -------- | --------------------- |
|  +5.0% | +11.999 MiB | 100.0% | 238 MiB → 250 MiB | 476 → 500 | `grow()` | `java.util.ArrayList` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |              Size |   Samples | Caller      | Location                                               |
| -----: | ----------: | -----: | ----------------: | --------: | ----------- | ------------------------------------------------------ |
|  +8.8% | +10.999 MiB | 100.0% | 125 MiB → 136 MiB | 250 → 272 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `resize()` (`java.util.HashMap`)

|  Change |        Delta |             % |              Size |   Samples | Caller                                          | Location            |
| ------: | -----------: | ------------: | ----------------: | --------: | ----------------------------------------------- | ------------------- |
|  +17.1% |  +10.499 MiB | 60.0% → 63.7% | 61.5 MiB → 72 MiB | 123 → 144 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |
|   +1.2% | +511.999 KiB | 39.5% → 36.3% | 40.5 MiB → 41 MiB |   81 → 82 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |
| removed | -511.999 KiB |   0.5% → 0.0% |     512 KiB → 0 B |     1 → 0 | `merge(Object, Object, BiFunction)`             | `java.util.HashMap` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |      Delta |      % |              Size |   Samples | Caller                  | Location                                                               |
| -----: | ---------: | -----: | ----------------: | --------: | ----------------------- | ---------------------------------------------------------------------- |
|  +7.2% | +7.999 MiB | 100.0% | 110 MiB → 118 MiB | 221 → 237 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7400` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|  Change |      Delta |             % |             Size | Samples | Caller       | Location                       |
| ------: | ---------: | ------------: | ---------------: | ------: | ------------ | ------------------------------ |
| +136.4% | +7.499 MiB | 91.7% → 96.3% | 5.5 MiB → 13 MiB | 11 → 26 | `getBytes()` | `jdk.internal.loader.Resource` |

##### `mapToObj(IntFunction, int)` (`java.util.stream.IntPipeline`)

| Change |      Delta |      % |                Size | Samples | Caller                  | Location                       |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------- | ------------------------------ |
| +20.4% | +4.999 MiB | 100.0% | 24.5 MiB → 29.5 MiB | 49 → 59 | `mapToObj(IntFunction)` | `java.util.stream.IntPipeline` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

| Change |      Delta |      % |             Size | Samples | Caller                                       | Location                                             |
| -----: | ---------: | -----: | ---------------: | ------: | -------------------------------------------- | ---------------------------------------------------- |
| +41.2% | +3.499 MiB | 100.0% | 8.5 MiB → 12 MiB | 17 → 24 | `newInvokeSpecial(Object, int, int, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000008011a4400` |

##### `div(double[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |      Delta |      % |              Size | Samples | Caller          | Location                                               |
| ------: | ---------: | -----: | ----------------: | ------: | --------------- | ------------------------------------------------------ |
| +400.0% | +1.999 MiB | 100.0% | 512 KiB → 2.5 MiB |   1 → 5 | `average(List)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `addConstantNameAndType(String, String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change |          Delta |             % |        Size | Samples | Caller                                                    | Location                                     |
| -----: | -------------: | ------------: | ----------: | ------: | --------------------------------------------------------- | -------------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `addConstantMemberReference(int, String, String, String)` | `jdk.internal.org.objectweb.asm.SymbolTable` |

##### `allocateInstance(Class)` (`jdk.internal.misc.Unsafe`)

| Change |          Delta |      % |          Size | Samples | Caller                     | Location                              |
| -----: | -------------: | -----: | ------------: | ------: | -------------------------- | ------------------------------------- |
| +25.0% | +1,023.998 KiB | 100.0% | 4 MiB → 5 MiB |  8 → 10 | `allocateInstance(Object)` | `java.lang.invoke.DirectMethodHandle` |

##### `spliterator(double[], int, int, int)` (`java.util.Spliterators`)

| Change |          Delta |      % |              Size | Samples | Caller                            | Location           |
| -----: | -------------: | -----: | ----------------: | ------: | --------------------------------- | ------------------ |
| +66.7% | +1,023.998 KiB | 100.0% | 1.5 MiB → 2.5 MiB |   3 → 5 | `spliterator(double[], int, int)` | `java.util.Arrays` |

##### `lambda$boxed$0(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |          Delta |      % |              Size | Samples | Caller       | Location                                                                          |
| ------: | -------------: | -----: | ----------------: | ------: | ------------ | --------------------------------------------------------------------------------- |
| +200.0% | +1,023.998 KiB | 100.0% | 512 KiB → 1.5 MiB |   1 → 3 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask$$Lambda.0x00000008011a8788` |

##### `load(DataInputStream)` (`sun.util.calendar.ZoneInfoFile`)

|  Change |        Delta |      % |            Size | Samples | Caller  | Location                           |
| ------: | -----------: | -----: | --------------: | ------: | ------- | ---------------------------------- |
| +100.0% | +511.999 KiB | 100.0% | 512 KiB → 1 MiB |   1 → 2 | `run()` | `sun.util.calendar.ZoneInfoFile$1` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

| Change |        Delta |             % |          Size | Samples | Caller                                                    | Location                |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------------------------------- | ----------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `addConstantUtf8(String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change |        Delta |             % |          Size | Samples | Caller                                  | Location                                     |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------------- | -------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `addConstantUtf8Reference(int, String)` | `jdk.internal.org.objectweb.asm.SymbolTable` |

##### `range(int, int)` (`java.util.stream.IntStream`)

| Change |        Delta |      % |              Size | Samples | Caller                                           | Location                                    |
| -----: | -----------: | -----: | ----------------: | ------: | ------------------------------------------------ | ------------------------------------------- |
|  +5.0% | +511.999 KiB | 100.0% | 10 MiB → 10.5 MiB | 20 → 21 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `compress(char[], int, int)` (`java.lang.StringUTF16`)

| Change |        Delta |             % |          Size | Samples | Caller                           | Location           |
| -----: | -----------: | ------------: | ------------: | ------: | -------------------------------- | ------------------ |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `<init>(char[], int, int, Void)` | `java.lang.String` |

##### `load(DataInputStream)` (`java.time.zone.TzdbZoneRulesProvider`)

| Change |        Delta |             % |          Size | Samples | Caller     | Location                               |
| -----: | -----------: | ------------: | ------------: | ------: | ---------- | -------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `<init>()` | `java.time.zone.TzdbZoneRulesProvider` |

##### `getClassLoadingLock(String)` (`java.lang.ClassLoader`)

| Change |        Delta |             % |          Size | Samples | Caller                             | Location                                 |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------------------- | ---------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `loadClassOrNull(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `<init>(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

| Change |        Delta |             % |          Size | Samples | Caller          | Location                                     |
| -----: | -----------: | ------------: | ------------: | ------: | --------------- | -------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `toByteArray()` | `jdk.internal.org.objectweb.asm.ClassWriter` |

##### `put(Object, Object)` (`java.util.WeakHashMap`)

| Change |        Delta |             % |          Size | Samples | Caller        | Location                           |
| -----: | -----------: | ------------: | ------------: | ------: | ------------- | ---------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `add(Object)` | `java.util.Collections$SetFromMap` |

##### `putVal(Object, Object, boolean)` (`java.util.concurrent.ConcurrentHashMap`)

| Change |        Delta |             % |          Size | Samples | Caller                | Location                                 |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------- | ---------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `put(Object, Object)` | `java.util.concurrent.ConcurrentHashMap` |

##### `<init>(JavaKMeans, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |        Delta |      % |            Size | Samples | Caller                         | Location                                    |
| ------: | -----------: | -----: | --------------: | ------: | ------------------------------ | ------------------------------------------- |
| +100.0% | +511.999 KiB | 100.0% | 512 KiB → 1 MiB |   1 → 2 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `collectGarbage(String)` (`org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`)

| Change |        Delta |             % |          Size | Samples | Caller                                      | Location                                                 |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------------------- | -------------------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `afterOperationSetUp(String, int, boolean)` | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin` |

##### `valueOf(double)` (`java.lang.Double`)

| Change |        Delta |             % |            Size |   Samples | Caller                                           | Location                                                     |
| -----: | -----------: | ------------: | --------------: | --------: | ------------------------------------------------ | ------------------------------------------------------------ |
| -23.9% |  -15.999 MiB | 95.7% → 93.6% | 67 MiB → 51 MiB | 134 → 102 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                  |
| +16.7% | +511.999 KiB |   4.3% → 6.4% | 3 MiB → 3.5 MiB |     6 → 7 | `apply(double)`                                  | `java.util.stream.DoublePipeline$$Lambda.0x00000008011c2320` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

| Change |      Delta |             % |              Size |   Samples | Caller                                          | Location            |
| -----: | ---------: | ------------: | ----------------: | --------: | ----------------------------------------------- | ------------------- |
|  -4.8% | -6.999 MiB | 51.0% → 50.6% | 145 MiB → 138 MiB | 290 → 276 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |
|  -3.6% | -4.999 MiB | 48.7% → 49.0% | 138 MiB → 133 MiB | 277 → 267 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

| Change |      Delta |      % |              Size | Samples | Caller                  | Location           |
| -----: | ---------: | -----: | ----------------: | ------: | ----------------------- | ------------------ |
| -48.2% | -10.11 MiB | 100.0% | 21 MiB → 10.9 MiB | 36 → 16 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change |      Delta |      % |            Size | Samples | Caller   | Location                            |
| -----: | ---------: | -----: | --------------: | ------: | -------- | ----------------------------------- |
| -77.8% | -3.499 MiB | 100.0% | 4.5 MiB → 1 MiB |   9 → 2 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `opWrapSink(int, Sink)` (`java.util.stream.IntPipeline$1`)

| Change |      Delta |      % |               Size | Samples | Caller           | Location                            |
| -----: | ---------: | -----: | -----------------: | ------: | ---------------- | ----------------------------------- |
| -24.0% | -2.999 MiB | 100.0% | 12.5 MiB → 9.5 MiB | 25 → 19 | `wrapSink(Sink)` | `java.util.stream.AbstractPipeline` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |        Delta |              % |              Size |   Samples | Caller                     | Location                                                   |
| ------: | -----------: | -------------: | ----------------: | --------: | -------------------------- | ---------------------------------------------------------- |
|   -3.4% |   -2.499 MiB | 99.3% → 100.0% | 72.5 MiB → 70 MiB | 145 → 140 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed | -511.999 KiB |    0.7% → 0.0% |     512 KiB → 0 B |     1 → 0 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |      Delta |      % |                Size |       Samples | Caller              | Location                                                   |
| -----: | ---------: | -----: | ------------------: | ------------: | ------------------- | ---------------------------------------------------------- |
|  -0.2% | -2.999 MiB | 100.0% | 1.69 GiB → 1.68 GiB | 3,454 → 3,448 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

| Change |      Delta |      % |              Size | Samples | Caller                               | Location                             |
| -----: | ---------: | -----: | ----------------: | ------: | ------------------------------------ | ------------------------------------ |
| -17.2% | -2.499 MiB | 100.0% | 14.5 MiB → 12 MiB | 29 → 24 | `makeNodeBuilder(long, IntFunction)` | `java.util.stream.ReferencePipeline` |

##### `fillInStackTrace(int)` (`java.lang.Throwable`)

|  Change |      Delta |             % |          Size | Samples | Caller               | Location              |
| ------: | ---------: | ------------: | ------------: | ------: | -------------------- | --------------------- |
| removed | -1.499 MiB | 100.0% → 0.0% | 1.5 MiB → 0 B |   3 → 0 | `fillInStackTrace()` | `java.lang.Throwable` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |      Delta |      % |              Size | Samples | Caller       | Location                                            |
| -----: | ---------: | -----: | ----------------: | ------: | ------------ | --------------------------------------------------- |
|  -7.9% | -1.499 MiB | 100.0% | 19 MiB → 17.5 MiB | 38 → 35 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda` |

##### `<init>(int)` (`java.lang.AbstractStringBuilder`)

|  Change |          Delta |             % |        Size | Samples | Caller     | Location                  |
| ------: | -------------: | ------------: | ----------: | ------: | ---------- | ------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `<init>()` | `java.lang.StringBuilder` |

##### `<init>(InputStream, Inflater, int)` (`java.util.zip.InflaterInputStream`)

| Change |          Delta |      % |          Size | Samples | Caller                                                                                  | Location                                           |
| -----: | -------------: | -----: | ------------: | ------: | --------------------------------------------------------------------------------------- | -------------------------------------------------- |
| -16.7% | -1,023.998 KiB | 100.0% | 6 MiB → 5 MiB | 12 → 10 | `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, Inflater, int)` | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |          Delta |      % |              Size | Samples | Caller   | Location                                                               |
| -----: | -------------: | -----: | ----------------: | ------: | -------- | ---------------------------------------------------------------------- |
| -66.7% | -1,023.998 KiB | 100.0% | 1.5 MiB → 512 KiB |   3 → 1 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a2bd0` |

##### `entrySet()` (`java.util.HashMap`)

| Change |          Delta |      % |            Size | Samples | Caller                        | Location            |
| -----: | -------------: | -----: | --------------: | ------: | ----------------------------- | ------------------- |
|  -5.6% | -1,023.998 KiB | 100.0% | 18 MiB → 17 MiB | 36 → 34 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `mapToObj(DoubleFunction, int)` (`java.util.stream.DoublePipeline`)

| Change |          Delta |      % |          Size | Samples | Caller    | Location                          |
| -----: | -------------: | -----: | ------------: | ------: | --------- | --------------------------------- |
| -50.0% | -1,023.998 KiB | 100.0% | 2 MiB → 1 MiB |   4 → 2 | `boxed()` | `java.util.stream.DoublePipeline` |

##### `<init>(ClassWriter)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|  Change |        Delta |             % |          Size | Samples | Caller                     | Location                                     |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------------- | -------------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `<init>(ClassReader, int)` | `jdk.internal.org.objectweb.asm.ClassWriter` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |        Delta |      % |            Size | Samples | Caller                                          | Location                       |
| -----: | -----------: | -----: | --------------: | ------: | ----------------------------------------------- | ------------------------------ |
| -50.0% | -511.999 KiB | 100.0% | 1 MiB → 512 KiB |   2 → 1 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `read(InputStream, String)` (`java.util.jar.Manifest`)

|  Change |        Delta |             % |          Size | Samples | Caller                                     | Location                 |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------------ | ------------------------ |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `<init>(JarVerifier, InputStream, String)` | `java.util.jar.Manifest` |

##### `read(Manifest$FastInputStream, byte[], String, int)` (`java.util.jar.Attributes`)

|  Change |        Delta |             % |          Size | Samples | Caller                      | Location                 |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------- | ------------------------ |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `read(InputStream, String)` | `java.util.jar.Manifest` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

| Change |        Delta |      % |            Size | Samples | Caller                          | Location           |
| -----: | -----------: | -----: | --------------: | ------: | ------------------------------- | ------------------ |
| -33.3% | -511.999 KiB | 100.0% | 1.5 MiB → 1 MiB |   3 → 2 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `<clinit>()` (`scala.reflect.ManifestFactory$`)

|  Change |        Delta |             % |          Size | Samples | Caller       | Location                  |
| ------: | -----------: | ------------: | ------------: | ------: | ------------ | ------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `<clinit>()` | `scala.reflect.Manifest$` |

##### `makeImpl(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

|  Change |        Delta |             % |          Size | Samples | Caller                               | Location                      |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------ | ----------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `insertParameterTypes(int, Class[])` | `java.lang.invoke.MethodType` |

##### `enlarge(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

| Change |        Delta |      % |            Size | Samples | Caller            | Location                                    |
| -----: | -----------: | -----: | --------------: | ------: | ----------------- | ------------------------------------------- |
| -50.0% | -511.999 KiB | 100.0% | 1 MiB → 512 KiB |   2 → 1 | `putUTF8(String)` | `jdk.internal.org.objectweb.asm.ByteVector` |

##### `<init>(InputStream)` (`java.util.Properties$LineReader`)

|  Change |        Delta |             % |          Size | Samples | Caller              | Location               |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------- | ---------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `load(InputStream)` | `java.util.Properties` |

##### `arg(String, Read)` (`scopt.OptionParser`)

|  Change |        Delta |             % |          Size | Samples | Caller        | Location                                       |
| ------: | -----------: | ------------: | ------------: | ------: | ------------- | ---------------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `<init>(Map)` | `org.renaissance.harness.ConfigParser$$anon$1` |

### Total size

#### Regressions

Functions with the largest increase in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

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

|  Change |        Delta |             % |                Size |         Samples | Function                                                                                                               | Location                                                                              |
| ------: | -----------: | ------------: | ------------------: | --------------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|   +3.9% | +249.499 MiB | 17.1% → 17.7% |  6.3 GiB → 6.54 GiB | 12,904 → 13,403 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   +3.0% | +246.499 MiB | 21.7% → 22.2% | 7.99 GiB → 8.23 GiB | 16,358 → 16,851 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|     new |  +201.35 MiB |   0.0% → 0.5% |       0 B → 201 MiB |         0 → 397 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                           |
|   +0.5% | +169.522 MiB |         99.4% | 36.6 GiB → 36.8 GiB | 74,684 → 75,024 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
|  +36.8% |  +68.499 MiB |   0.5% → 0.7% |   186 MiB → 254 MiB |       372 → 509 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|  +36.8% |  +68.499 MiB |   0.5% → 0.7% |   186 MiB → 254 MiB |       372 → 509 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|  +38.3% |  +64.999 MiB |   0.4% → 0.6% |   169 MiB → 234 MiB |       339 → 469 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|  +23.5% |  +36.499 MiB |   0.4% → 0.5% |   155 MiB → 191 MiB |       310 → 383 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  +33.8% |  +24.499 MiB |   0.2% → 0.3% |   72.5 MiB → 97 MiB |       145 → 194 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  +33.8% |  +24.499 MiB |   0.2% → 0.3% |   72.5 MiB → 97 MiB |       145 → 194 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  +29.4% |  +20.999 MiB |          0.2% | 71.5 MiB → 92.5 MiB |       143 → 185 | `add(double[], double[])`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  +29.4% |  +20.999 MiB |          0.2% | 71.5 MiB → 92.5 MiB |       143 → 185 | `combineResults(double[], double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  +29.4% |  +20.999 MiB |          0.2% | 71.5 MiB → 92.5 MiB |       143 → 185 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  +13.9% |  +14.499 MiB |          0.3% |   104 MiB → 119 MiB |       209 → 238 | `lambda$collectClusters$0(Double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +13.9% |  +14.499 MiB |          0.3% |   104 MiB → 119 MiB |       209 → 238 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000008011a3940` |
|   +8.8% |  +10.999 MiB |   0.3% → 0.4% |   125 MiB → 136 MiB |       250 → 272 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| +280.0% |   +6.999 MiB |         <0.1% |   2.5 MiB → 9.5 MiB |          5 → 19 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda`                                     |
|     new |   +6.499 MiB |  0.0% → <0.1% |       0 B → 6.5 MiB |          0 → 13 | `rowToArray$1(Map)`                                                                                                    | `org.renaissance.jdk.concurrent.FjKmeans`                                             |
|     new |   +6.499 MiB |  0.0% → <0.1% |       0 B → 6.5 MiB |          0 → 13 | `setUpBeforeAll$$anonfun$1(Map)`                                                                                       | `org.renaissance.jdk.concurrent.FjKmeans`                                             |
|     new |   +6.499 MiB |  0.0% → <0.1% |       0 B → 6.5 MiB |          0 → 13 | `lambda$toCsvRows$2(String[], Function, String)`                                                                       | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`                    |

#### Improvements

Functions with the largest decrease in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |        Delta |             % |                Size |         Samples | Function                                                                                                               | Location                                                               |
| ------: | -----------: | ------------: | ------------------: | --------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| removed |  -198.46 MiB |   0.5% → 0.0% |       198 MiB → 0 B |         391 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|   -0.9% | -181.976 MiB | 56.7% → 56.0% | 20.9 GiB → 20.7 GiB | 42,486 → 42,123 | `addAll(Collection)`                                                                                                   | `java.util.ArrayList`                                                  |
|   -0.6% | -169.976 MiB | 76.5% → 75.7% |   28.2 GiB → 28 GiB | 57,417 → 57,078 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -0.6% | -169.476 MiB | 76.5% → 75.7% |   28.2 GiB → 28 GiB | 57,409 → 57,071 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -0.6% | -169.476 MiB | 76.5% → 75.7% |   28.2 GiB → 28 GiB | 57,409 → 57,071 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -0.6% | -161.476 MiB | 75.8% → 75.0% | 27.9 GiB → 27.8 GiB | 56,883 → 56,561 | `merge(Object, Object, BiFunction)`                                                                                    | `java.util.HashMap`                                                    |
|   -0.6% | -161.476 MiB | 75.8% → 75.0% | 27.9 GiB → 27.8 GiB | 56,883 → 56,561 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -0.6% | -161.476 MiB | 75.8% → 75.0% | 27.9 GiB → 27.8 GiB | 56,883 → 56,561 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7800` |
|   -0.6% | -161.476 MiB | 75.8% → 75.0% | 27.9 GiB → 27.8 GiB | 56,883 → 56,561 | `forEach(BiConsumer)`                                                                                                  | `java.util.HashMap`                                                    |
|   -0.6% | -160.976 MiB | 75.8% → 75.0% | 27.9 GiB → 27.8 GiB | 56,880 → 56,559 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -0.6% | -160.976 MiB | 75.8% → 75.0% | 27.9 GiB → 27.8 GiB | 56,880 → 56,559 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7400` |
|  -18.8% |  -21.999 MiB |          0.3% |    117 MiB → 95 MiB |       234 → 190 | `evaluate(Spliterator, boolean, IntFunction)`                                                                          | `java.util.stream.AbstractPipeline`                                    |
|  -18.8% |  -21.999 MiB |          0.3% |    117 MiB → 95 MiB |       234 → 190 | `evaluateToArrayNode(IntFunction)`                                                                                     | `java.util.stream.AbstractPipeline`                                    |
|  -18.8% |  -21.999 MiB |          0.3% |    117 MiB → 95 MiB |       234 → 190 | `toArray(IntFunction)`                                                                                                 | `java.util.stream.ReferencePipeline`                                   |
|  -23.9% |  -15.999 MiB |   0.2% → 0.1% |     67 MiB → 51 MiB |       134 → 102 | `lambda$generateData$3(int, int, Random[], int)`                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -22.1% |  -15.499 MiB |   0.2% → 0.1% |   70 MiB → 54.5 MiB |       140 → 109 | `valueOf(double)`                                                                                                      | `java.lang.Double`                                                     |
|   -0.2% |  -14.977 MiB | 20.6% → 20.5% | 7.59 GiB → 7.57 GiB | 15,231 → 15,202 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -0.2% |  -14.977 MiB | 20.6% → 20.5% | 7.59 GiB → 7.57 GiB | 15,231 → 15,202 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a2bd0` |
|   -0.2% |  -14.977 MiB | 20.6% → 20.5% | 7.59 GiB → 7.57 GiB | 15,231 → 15,202 | `exec()`                                                                                                               | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                    |
|   -4.2% |  -11.999 MiB |   0.8% → 0.7% |   284 MiB → 272 MiB |       569 → 545 | `newNode(int, Object, Object, HashMap$Node)`                                                                           | `java.util.HashMap`                                                    |

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

|  Change |          Delta |             % |                Size |         Samples | Function                                                                                                               | Location                                                               |
| ------: | -------------: | ------------: | ------------------: | --------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| removed |    -198.46 MiB |   0.5% → 0.0% |       198 MiB → 0 B |         391 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|   -0.6% |   -169.976 MiB | 76.5% → 75.7% |   28.2 GiB → 28 GiB | 57,417 → 57,078 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -0.6% |   -169.476 MiB | 76.5% → 75.7% |   28.2 GiB → 28 GiB | 57,409 → 57,071 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -0.6% |   -169.476 MiB | 76.5% → 75.7% |   28.2 GiB → 28 GiB | 57,409 → 57,071 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -0.6% |   -161.476 MiB | 75.8% → 75.0% | 27.9 GiB → 27.8 GiB | 56,883 → 56,561 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -0.6% |   -161.476 MiB | 75.8% → 75.0% | 27.9 GiB → 27.8 GiB | 56,883 → 56,561 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7800` |
|   -0.6% |   -160.976 MiB | 75.8% → 75.0% | 27.9 GiB → 27.8 GiB | 56,880 → 56,559 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -0.6% |   -160.976 MiB | 75.8% → 75.0% | 27.9 GiB → 27.8 GiB | 56,880 → 56,559 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7400` |
|  -23.9% |    -15.999 MiB |   0.2% → 0.1% |     67 MiB → 51 MiB |       134 → 102 | `lambda$generateData$3(int, int, Random[], int)`                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -0.2% |    -14.977 MiB | 20.6% → 20.5% | 7.59 GiB → 7.57 GiB | 15,231 → 15,202 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -0.2% |    -14.977 MiB | 20.6% → 20.5% | 7.59 GiB → 7.57 GiB | 15,231 → 15,202 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a2bd0` |
|  -63.2% |     -5.999 MiB |         <0.1% |   9.5 MiB → 3.5 MiB |          19 → 7 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  -42.1% |     -3.999 MiB |         <0.1% |   9.5 MiB → 5.5 MiB |         19 → 11 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |
|   -0.2% |     -2.999 MiB |          4.6% | 1.69 GiB → 1.68 GiB |   3,454 → 3,448 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed |     -2.499 MiB |  <0.1% → 0.0% |       2.5 MiB → 0 B |           5 → 0 | `$anonfun$1(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`                              |
| removed |     -1.999 MiB |  <0.1% → 0.0% |         2 MiB → 0 B |           4 → 0 | `$anonfun$1(Config, Path)`                                                                                             | `org.renaissance.harness.RenaissanceSuite$`                            |
|   -0.9% |      -1.61 MiB |          0.5% |   188 MiB → 187 MiB |       371 → 368 | `generateData(int, int, int)`                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -7.9% |     -1.499 MiB |  0.1% → <0.1% |   19 MiB → 17.5 MiB |         38 → 35 | `lambda$generateData$4(int)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed | -1,023.998 KiB |  <0.1% → 0.0% |         1 MiB → 0 B |           2 → 0 | `createScratchDirectory(Path, String, boolean)`                                                                        | `org.renaissance.core.DirUtils`                                        |
| removed | -1,023.998 KiB |  <0.1% → 0.0% |         1 MiB → 0 B |           2 → 0 | `createScratchRoot(Path, boolean)`                                                                                     | `org.renaissance.core.Launcher`                                        |

#### Callers

Callers with the largest change in contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |      % |                Size |         Samples | Caller   | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | -------- | ----------------------------------- |
|  +1.4% | +431.999 MiB | 100.0% | 29.2 GiB → 29.6 GiB | 59,741 → 60,605 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |      % |                Size |         Samples | Caller      | Location                                               |
| -----: | -----------: | -----: | ------------------: | --------------: | ----------- | ------------------------------------------------------ |
|  +1.4% | +431.999 MiB | 100.0% | 29.2 GiB → 29.6 GiB | 59,741 → 60,605 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |        Delta |      % |                Size |         Samples | Caller                 | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------------------- | ----------------------------------- |
|  +1.4% | +422.499 MiB | 100.0% | 28.9 GiB → 29.3 GiB | 59,112 → 59,957 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change |        Delta |      % |                Size |         Samples | Caller                 | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------------------- | ----------------------------------- |
|  +4.8% | +257.499 MiB | 100.0% | 5.23 GiB → 5.49 GiB | 10,719 → 11,234 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |               Size |         Samples | Caller              | Location                                                   |
| -----: | -----------: | -----: | -----------------: | --------------: | ------------------- | ---------------------------------------------------------- |
|  +3.9% | +249.499 MiB | 100.0% | 6.3 GiB → 6.54 GiB | 12,904 → 13,403 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |                Size |         Samples | Caller              | Location                                                   |
| -----: | -----------: | -----: | ------------------: | --------------: | ------------------- | ---------------------------------------------------------- |
|  +3.0% | +246.499 MiB | 100.0% | 7.99 GiB → 8.23 GiB | 16,358 → 16,851 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +3.0% | +246.499 MiB | 100.0% | 7.99 GiB → 8.23 GiB | 16,358 → 16,851 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |

##### `grow()` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |         Samples | Caller                       | Location              |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------------------------- | --------------------- |
|  +3.4% | +204.388 MiB | 100.0% | 5.92 GiB → 6.12 GiB | 12,116 → 12,525 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |         Samples | Caller        | Location              |
| -----: | -----------: | -----: | ------------------: | --------------: | ------------- | --------------------- |
|  +3.4% | +204.388 MiB | 100.0% | 5.92 GiB → 6.12 GiB | 12,116 → 12,525 | `add(Object)` | `java.util.ArrayList` |

##### `add(Object)` (`java.util.ArrayList`)

| Change |        Delta |     % |                Size |         Samples | Caller                   | Location                                                   |
| -----: | -----------: | ----: | ------------------: | --------------: | ------------------------ | ---------------------------------------------------------- |
|  +3.4% | +205.499 MiB | 99.9% | 5.91 GiB → 6.11 GiB | 12,110 → 12,521 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -18.6% |    -1.11 MiB |  0.1% | 5.96 MiB → 4.85 MiB |           6 → 4 | `accept(Object, Object)` | `java.util.stream.Collectors$$Lambda.0x0000000801070ab8`   |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |       Delta |             % |          Size | Samples | Caller              | Location                                                               |
| -----: | ----------: | ------------: | ------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
|    new | +201.35 MiB | 0.0% → 100.0% | 0 B → 201 MiB | 0 → 397 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000080111ede0` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change |        Delta |      % |                Size |         Samples | Caller   | Location                             |
| -----: | -----------: | -----: | ------------------: | --------------: | -------- | ------------------------------------ |
|  +0.5% | +169.522 MiB | 100.0% | 36.6 GiB → 36.8 GiB | 74,684 → 75,024 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change |        Delta |      % |                Size |         Samples | Caller     | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------- | ----------------------------------- |
|  +0.5% | +169.522 MiB | 100.0% | 36.6 GiB → 36.8 GiB | 74,684 → 75,024 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |             % |                Size |         Samples | Caller                                                    | Location                                      |
| -----: | -----------: | ------------: | ------------------: | --------------: | --------------------------------------------------------- | --------------------------------------------- |
|  +1.4% | +422.499 MiB | 78.8% → 79.6% | 28.9 GiB → 29.3 GiB | 59,112 → 59,957 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  +4.8% | +257.499 MiB | 14.3% → 14.9% | 5.23 GiB → 5.49 GiB | 10,719 → 11,234 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  +0.5% | +169.522 MiB |        100.0% | 36.6 GiB → 36.8 GiB | 74,688 → 75,028 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  +0.4% |  +34.522 MiB |         21.1% | 7.74 GiB → 7.78 GiB | 15,548 → 15,618 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |        Delta |      % |                Size |         Samples | Caller                                   | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------------------------------------- | ----------------------------------- |
|  +0.5% | +169.522 MiB | 100.0% | 36.6 GiB → 36.8 GiB | 74,688 → 75,028 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change |        Delta |      % |                Size |         Samples | Caller                              | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | ----------------------------------- | ----------------------------------- |
|  +0.5% | +169.522 MiB | 100.0% | 36.6 GiB → 36.8 GiB | 74,688 → 75,028 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |        Delta |      % |                Size |         Samples | Caller  | Location                                    |
| -----: | -----------: | -----: | ------------------: | --------------: | ------- | ------------------------------------------- |
|  +0.5% | +169.522 MiB | 100.0% | 36.6 GiB → 36.8 GiB | 74,688 → 75,028 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |       Delta |      % |              Size |   Samples | Caller              | Location                                               |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------- | ------------------------------------------------------ |
| +36.8% | +68.499 MiB | 100.0% | 186 MiB → 254 MiB | 372 → 509 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |       Delta |      % |              Size |   Samples | Caller              | Location                                               |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------- | ------------------------------------------------------ |
| +36.8% | +68.499 MiB | 100.0% | 186 MiB → 254 MiB | 372 → 509 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| +36.8% | +68.499 MiB | 100.0% | 186 MiB → 254 MiB | 372 → 509 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |       Delta |      % |              Size |   Samples | Caller                     | Location                                               |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------------- | ------------------------------------------------------ |
| +38.3% | +64.999 MiB | 100.0% | 169 MiB → 234 MiB | 339 → 469 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |        Delta |             % |                Size |         Samples | Caller               | Location              |
| -----: | -----------: | ------------: | ------------------: | --------------: | -------------------- | --------------------- |
|  +3.4% | +204.388 MiB | 30.6% → 31.5% | 5.92 GiB → 6.12 GiB | 12,116 → 12,525 | `grow()`             | `java.util.ArrayList` |
|  -1.1% | -157.476 MiB | 69.4% → 68.5% | 13.4 GiB → 13.3 GiB | 27,222 → 26,908 | `addAll(Collection)` | `java.util.ArrayList` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

| Change |       Delta |             % |                Size |         Samples | Caller                         | Location                                               |
| -----: | ----------: | ------------: | ------------------: | --------------: | ------------------------------ | ------------------------------------------------------ |
| +37.4% | +62.999 MiB |   2.1% → 2.9% |   168 MiB → 231 MiB |       337 → 463 | `average(List)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  -0.2% | -14.977 MiB | 98.0% → 97.4% | 7.59 GiB → 7.57 GiB | 15,227 → 15,198 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`            |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |        Delta |             % |                Size |         Samples | Caller                | Location                            |
| -----: | -----------: | ------------: | ------------------: | --------------: | --------------------- | ----------------------------------- |
|  +0.2% |  +34.912 MiB | 57.1% → 57.2% | 19.1 GiB → 19.2 GiB | 38,862 → 38,933 | `grow(int)`           | `java.util.ArrayList`               |
|  -0.1% |  -11.499 MiB | 42.9% → 42.8% |            14.4 GiB | 29,437 → 29,414 | `toArray()`           | `java.util.ArrayList`               |
|    new | +511.999 KiB |  0.0% → <0.1% |       0 B → 512 KiB |           0 → 1 | `growNames(int, int)` | `java.lang.invoke.LambdaFormBuffer` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

| Change |       Delta |      % |              Size |   Samples | Caller                   | Location                                                   |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------ | ---------------------------------------------------------- |
|  +5.8% | +17.999 MiB | 100.0% | 311 MiB → 329 MiB | 622 → 658 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `range(int, int)` (`java.util.stream.IntStream`)

| Change |       Delta |      % |            Size |  Samples | Caller                                           | Location                                    |
| -----: | ----------: | -----: | --------------: | -------: | ------------------------------------------------ | ------------------------------------------- |
| +42.9% | +14.999 MiB | 100.0% | 35 MiB → 50 MiB | 70 → 100 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `intStream(Spliterator$OfInt, boolean)` (`java.util.stream.StreamSupport`)

| Change |       Delta |      % |              Size | Samples | Caller            | Location                     |
| -----: | ----------: | -----: | ----------------: | ------: | ----------------- | ---------------------------- |
| +58.0% | +14.499 MiB | 100.0% | 25 MiB → 39.5 MiB | 50 → 79 | `range(int, int)` | `java.util.stream.IntStream` |

##### `<init>(Collection)` (`java.util.ArrayList`)

| Change |       Delta |      % |                Size |         Samples | Caller                       | Location                                    |
| -----: | ----------: | -----: | ------------------: | --------------: | ---------------------------- | ------------------------------------------- |
|  +0.2% | +12.999 MiB | 100.0% | 6.92 GiB → 6.93 GiB | 14,173 → 14,199 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |              Size |   Samples | Caller      | Location                                               |
| -----: | ----------: | -----: | ----------------: | --------: | ----------- | ------------------------------------------------------ |
| +23.5% | +36.499 MiB | 100.0% | 155 MiB → 191 MiB | 310 → 383 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |              Size |   Samples | Caller              | Location                                                  |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------- | --------------------------------------------------------- |
| +33.8% | +24.499 MiB | 100.0% | 72.5 MiB → 97 MiB | 145 → 194 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |              Size |   Samples | Caller              | Location                                                  |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------- | --------------------------------------------------------- |
| +33.8% | +24.499 MiB | 100.0% | 72.5 MiB → 97 MiB | 145 → 194 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| +33.8% | +24.499 MiB | 100.0% | 72.5 MiB → 97 MiB | 145 → 194 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`    |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |                Size |   Samples | Caller                               | Location                                                  |
| -----: | ----------: | -----: | ------------------: | --------: | ------------------------------------ | --------------------------------------------------------- |
| +29.4% | +20.999 MiB | 100.0% | 71.5 MiB → 92.5 MiB | 143 → 185 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `combineResults(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |                Size |   Samples | Caller                           | Location                                                  |
| -----: | ----------: | -----: | ------------------: | --------: | -------------------------------- | --------------------------------------------------------- |
| +29.4% | +20.999 MiB | 100.0% | 71.5 MiB → 92.5 MiB | 143 → 185 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |                Size |   Samples | Caller      | Location                                               |
| -----: | ----------: | -----: | ------------------: | --------: | ----------- | ------------------------------------------------------ |
| +29.4% | +20.999 MiB | 100.0% | 71.5 MiB → 92.5 MiB | 143 → 185 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |              Size |   Samples | Caller          | Location                                                                              |
| -----: | ----------: | -----: | ----------------: | --------: | --------------- | ------------------------------------------------------------------------------------- |
| +13.9% | +14.499 MiB | 100.0% | 104 MiB → 119 MiB | 209 → 238 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000008011a3940` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000008011a3940`)

| Change |       Delta |      % |              Size |   Samples | Caller                              | Location            |
| -----: | ----------: | -----: | ----------------: | --------: | ----------------------------------- | ------------------- |
| +13.9% | +14.499 MiB | 100.0% | 104 MiB → 119 MiB | 209 → 238 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |              Size |   Samples | Caller      | Location                                               |
| -----: | ----------: | -----: | ----------------: | --------: | ----------- | ------------------------------------------------------ |
|  +8.8% | +10.999 MiB | 100.0% | 125 MiB → 136 MiB | 250 → 272 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda`)

| Change |        Delta |              % |            Size | Samples | Caller                                           | Location                                                           |
| -----: | -----------: | -------------: | --------------: | ------: | ------------------------------------------------ | ------------------------------------------------------------------ |
|    new |   +6.499 MiB |   0.0% → 68.4% |   0 B → 6.5 MiB |  0 → 13 | `lambda$toCsvRows$2(String[], Function, String)` | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |
| +20.0% | +511.999 KiB | 100.0% → 31.6% | 2.5 MiB → 3 MiB |   5 → 6 | `map(Function1)`                                 | `scala.collection.immutable.Range`                                 |

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
|    new | +6.499 MiB | 0.0% → 100.0% | 0 B → 6.5 MiB |  0 → 13 | `apply(Object)` | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x0000000801123bf8` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |       Delta |             % |          Size | Samples | Caller              | Location                                                               |
| ------: | ----------: | ------------: | ------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
| removed | -198.46 MiB | 100.0% → 0.0% | 198 MiB → 0 B | 391 → 0 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000e00111f208` |

##### `addAll(Collection)` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |         Samples | Caller                       | Location                                    |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------------------------- | ------------------------------------------- |
|  -0.9% | -181.976 MiB | 100.0% | 20.9 GiB → 20.7 GiB | 42,486 → 42,123 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |      % |              Size |         Samples | Caller                     | Location                                                   |
| -----: | -----------: | -----: | ----------------: | --------------: | -------------------------- | ---------------------------------------------------------- |
|  -0.6% | -169.476 MiB | 100.0% | 28.2 GiB → 28 GiB | 57,409 → 57,071 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -12.5% | -511.999 KiB |  <0.1% |   4 MiB → 3.5 MiB |           8 → 7 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |              Size |         Samples | Caller                           | Location                                                   |
| -----: | -----------: | -----: | ----------------: | --------------: | -------------------------------- | ---------------------------------------------------------- |
|  -0.6% | -169.476 MiB | 100.0% | 28.2 GiB → 28 GiB | 57,409 → 57,071 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |              Size |         Samples | Caller      | Location                                               |
| -----: | -----------: | -----: | ----------------: | --------------: | ----------- | ------------------------------------------------------ |
|  -0.6% | -169.476 MiB | 100.0% | 28.2 GiB → 28 GiB | 57,409 → 57,071 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

| Change |        Delta |      % |                Size |         Samples | Caller                              | Location                                    |
| -----: | -----------: | -----: | ------------------: | --------------: | ----------------------------------- | ------------------------------------------- |
|  -0.6% | -161.476 MiB | 100.0% | 27.9 GiB → 27.8 GiB | 56,883 → 56,561 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |      % |                Size |         Samples | Caller                   | Location                                                               |
| -----: | -----------: | -----: | ------------------: | --------------: | ------------------------ | ---------------------------------------------------------------------- |
|  -0.6% | -161.476 MiB | 100.0% | 27.9 GiB → 27.8 GiB | 56,883 → 56,561 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7800` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7800`)

| Change |        Delta |      % |                Size |         Samples | Caller                | Location            |
| -----: | -----------: | -----: | ------------------: | --------------: | --------------------- | ------------------- |
|  -0.6% | -161.476 MiB | 100.0% | 27.9 GiB → 27.8 GiB | 56,883 → 56,561 | `forEach(BiConsumer)` | `java.util.HashMap` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

| Change |        Delta |      % |                Size |         Samples | Caller            | Location                                    |
| -----: | -----------: | -----: | ------------------: | --------------: | ----------------- | ------------------------------------------- |
|  -0.6% | -161.476 MiB | 100.0% | 27.9 GiB → 27.8 GiB | 56,883 → 56,561 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |      % |                Size |         Samples | Caller                  | Location                                                               |
| -----: | -----------: | -----: | ------------------: | --------------: | ----------------------- | ---------------------------------------------------------------------- |
|  -0.6% | -160.976 MiB | 100.0% | 27.9 GiB → 27.8 GiB | 56,880 → 56,559 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7400` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7400`)

| Change |        Delta |      % |                Size |         Samples | Caller                              | Location            |
| -----: | -----------: | -----: | ------------------: | --------------: | ----------------------------------- | ------------------- |
|  -0.6% | -160.976 MiB | 100.0% | 27.9 GiB → 27.8 GiB | 56,880 → 56,559 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `evaluate(Spliterator, boolean, IntFunction)` (`java.util.stream.AbstractPipeline`)

| Change |       Delta |      % |             Size |   Samples | Caller                             | Location                            |
| -----: | ----------: | -----: | ---------------: | --------: | ---------------------------------- | ----------------------------------- |
| -18.8% | -21.999 MiB | 100.0% | 117 MiB → 95 MiB | 234 → 190 | `evaluateToArrayNode(IntFunction)` | `java.util.stream.AbstractPipeline` |

##### `evaluateToArrayNode(IntFunction)` (`java.util.stream.AbstractPipeline`)

| Change |       Delta |      % |             Size |   Samples | Caller                 | Location                             |
| -----: | ----------: | -----: | ---------------: | --------: | ---------------------- | ------------------------------------ |
| -18.8% | -21.999 MiB | 100.0% | 117 MiB → 95 MiB | 234 → 190 | `toArray(IntFunction)` | `java.util.stream.ReferencePipeline` |

##### `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`)

| Change |       Delta |             % |             Size |   Samples | Caller                                           | Location                                               |
| -----: | ----------: | ------------: | ---------------: | --------: | ------------------------------------------------ | ------------------------------------------------------ |
| -20.9% | -23.499 MiB | 96.2% → 93.7% | 112 MiB → 89 MiB | 225 → 178 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`            |
| +33.3% |  +1.499 MiB |   3.8% → 6.3% |  4.5 MiB → 6 MiB |    9 → 12 | `boxed(double[])`                                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |       Delta |      % |            Size |   Samples | Caller       | Location                                            |
| -----: | ----------: | -----: | --------------: | --------: | ------------ | --------------------------------------------------- |
| -23.9% | -15.999 MiB | 100.0% | 67 MiB → 51 MiB | 134 → 102 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda` |

##### `valueOf(double)` (`java.lang.Double`)

| Change |        Delta |             % |            Size |   Samples | Caller                                           | Location                                                     |
| -----: | -----------: | ------------: | --------------: | --------: | ------------------------------------------------ | ------------------------------------------------------------ |
| -23.9% |  -15.999 MiB | 95.7% → 93.6% | 67 MiB → 51 MiB | 134 → 102 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                  |
| +16.7% | +511.999 KiB |   4.3% → 6.4% | 3 MiB → 3.5 MiB |     6 → 7 | `apply(double)`                                  | `java.util.stream.DoublePipeline$$Lambda.0x00000008011c2320` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |       Delta |      % |                Size |         Samples | Caller   | Location                                                               |
| -----: | ----------: | -----: | ------------------: | --------------: | -------- | ---------------------------------------------------------------------- |
|  -0.2% | -14.977 MiB | 100.0% | 7.59 GiB → 7.57 GiB | 15,231 → 15,202 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a2bd0` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a2bd0`)

| Change |       Delta |      % |                Size |         Samples | Caller   | Location                                            |
| -----: | ----------: | -----: | ------------------: | --------------: | -------- | --------------------------------------------------- |
|  -0.2% | -14.977 MiB | 100.0% | 7.59 GiB → 7.57 GiB | 15,231 → 15,202 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

| Change |       Delta |      % |                Size |         Samples | Caller     | Location                            |
| -----: | ----------: | -----: | ------------------: | --------------: | ---------- | ----------------------------------- |
|  -0.2% | -14.977 MiB | 100.0% | 7.59 GiB → 7.57 GiB | 15,231 → 15,202 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

| Change |      Delta |             % |              Size |   Samples | Caller                                          | Location            |
| -----: | ---------: | ------------: | ----------------: | --------: | ----------------------------------------------- | ------------------- |
|  -4.8% | -6.999 MiB | 51.0% → 50.6% | 145 MiB → 138 MiB | 290 → 276 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |
|  -3.6% | -4.999 MiB | 48.7% → 49.0% | 138 MiB → 133 MiB | 277 → 267 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `toArray()` (`java.util.ArrayList`)

| Change |       Delta |             % |                Size |         Samples | Caller               | Location              |
| -----: | ----------: | ------------: | ------------------: | --------------: | -------------------- | --------------------- |
|  -0.3% | -24.499 MiB | 51.9% → 51.7% | 7.45 GiB → 7.43 GiB | 15,264 → 15,215 | `addAll(Collection)` | `java.util.ArrayList` |
|  +0.2% | +12.999 MiB | 48.1% → 48.3% | 6.92 GiB → 6.93 GiB | 14,173 → 14,199 | `<init>(Collection)` | `java.util.ArrayList` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

| Change |     Delta |      % |              Size | Samples | Caller                  | Location           |
| -----: | --------: | -----: | ----------------: | ------: | ----------------------- | ------------------ |
| -45.8% | -9.61 MiB | 100.0% | 21 MiB → 11.4 MiB | 36 → 17 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `putMapEntries(Map, boolean)` (`java.util.HashMap`)

| Change |      Delta |      % |              Size |   Samples | Caller        | Location            |
| -----: | ---------: | -----: | ----------------: | --------: | ------------- | ------------------- |
|  -2.8% | -5.499 MiB | 100.0% | 194 MiB → 188 MiB | 388 → 377 | `<init>(Map)` | `java.util.HashMap` |

##### `<init>(Map)` (`java.util.HashMap`)

| Change |      Delta |      % |              Size |   Samples | Caller            | Location                                    |
| -----: | ---------: | -----: | ----------------: | --------: | ----------------- | ------------------------------------------- |
|  -2.8% | -5.499 MiB | 100.0% | 194 MiB → 188 MiB | 388 → 377 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

| Change |      Delta |     % |              Size |   Samples | Caller                        | Location            |
| -----: | ---------: | ----: | ----------------: | --------: | ----------------------------- | ------------------- |
|  -2.6% | -4.499 MiB | 98.3% | 176 MiB → 171 MiB | 352 → 343 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`)

| Change |      Delta |      % |             Size | Samples | Caller                               | Location                            |
| -----: | ---------: | -----: | ---------------: | ------: | ------------------------------------ | ----------------------------------- |
| -26.9% | -3.499 MiB | 100.0% | 13 MiB → 9.5 MiB | 26 → 19 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

| Change |      Delta |      % |            Size | Samples | Caller                               | Location                             |
| -----: | ---------: | -----: | --------------: | ------: | ------------------------------------ | ------------------------------------ |
|  -8.8% | -2.999 MiB | 100.0% | 34 MiB → 31 MiB | 68 → 62 | `makeNodeBuilder(long, IntFunction)` | `java.util.stream.ReferencePipeline` |

##### `makeNodeBuilder(long, IntFunction)` (`java.util.stream.ReferencePipeline`)

| Change |      Delta |      % |            Size | Samples | Caller                                        | Location                            |
| -----: | ---------: | -----: | --------------: | ------: | --------------------------------------------- | ----------------------------------- |
|  -8.8% | -2.999 MiB | 100.0% | 34 MiB → 31 MiB | 68 → 62 | `evaluate(Spliterator, boolean, IntFunction)` | `java.util.stream.AbstractPipeline` |

##### `opWrapSink(int, Sink)` (`java.util.stream.IntPipeline$1`)

| Change |      Delta |      % |               Size | Samples | Caller           | Location                            |
| -----: | ---------: | -----: | -----------------: | ------: | ---------------- | ----------------------------------- |
| -24.0% | -2.999 MiB | 100.0% | 12.5 MiB → 9.5 MiB | 25 → 19 | `wrapSink(Sink)` | `java.util.stream.AbstractPipeline` |

##### `loadClass(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

| Change |      Delta |      % |              Size | Samples | Caller                       | Location                                          |
| -----: | ---------: | -----: | ----------------: | ------: | ---------------------------- | ------------------------------------------------- |
| -80.0% | -1.999 MiB | 100.0% | 2.5 MiB → 512 KiB |   5 → 1 | `loadClass(String, boolean)` | `jdk.internal.loader.ClassLoaders$AppClassLoader` |

##### `loadClass(String, boolean)` (`jdk.internal.loader.ClassLoaders$AppClassLoader`)

|  Change |        Delta |              % |            Size | Samples | Caller                       | Location                |
| ------: | -----------: | -------------: | --------------: | ------: | ---------------------------- | ----------------------- |
|  -75.0% |   -1.499 MiB | 80.0% → 100.0% | 2 MiB → 512 KiB |   4 → 1 | `loadClass(String, boolean)` | `java.lang.ClassLoader` |
| removed | -511.999 KiB |   20.0% → 0.0% |   512 KiB → 0 B |   1 → 0 | `loadClass(String)`          | `java.lang.ClassLoader` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |      Delta |      % |              Size | Samples | Caller                  | Location                                  |
| -----: | ---------: | -----: | ----------------: | ------: | ----------------------- | ----------------------------------------- |
| -63.2% | -5.999 MiB | 100.0% | 9.5 MiB → 3.5 MiB |  19 → 7 | `executeOperation(int)` | `org.renaissance.harness.ExecutionDriver` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

| Change |      Delta |      % |              Size | Samples | Caller               | Location                                  |
| -----: | ---------: | -----: | ----------------: | ------: | -------------------- | ----------------------------------------- |
| -42.1% | -3.999 MiB | 100.0% | 9.5 MiB → 5.5 MiB | 19 → 11 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |      Delta |      % |                Size |       Samples | Caller              | Location                                                   |
| -----: | ---------: | -----: | ------------------: | ------------: | ------------------- | ---------------------------------------------------------- |
|  -0.2% | -2.999 MiB | 100.0% | 1.69 GiB → 1.68 GiB | 3,454 → 3,448 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `$anonfun$1(int)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change |      Delta |             % |          Size | Samples | Caller                       | Location                                  |
| ------: | ---------: | ------------: | ------------: | ------: | ---------------------------- | ----------------------------------------- |
| removed | -2.499 MiB | 100.0% → 0.0% | 2.5 MiB → 0 B |   5 → 0 | `$anonfun$adapted$1(Object)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `$anonfun$1(Config, Path)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |      Delta |             % |        Size | Samples | Caller    | Location                                                               |
| ------: | ---------: | ------------: | ----------: | ------: | --------- | ---------------------------------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   4 → 0 | `apply()` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000e0011038c0` |

##### `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |     Delta |      % |              Size |   Samples | Caller                             | Location                                  |
| -----: | --------: | -----: | ----------------: | --------: | ---------------------------------- | ----------------------------------------- |
|  -0.9% | -1.61 MiB | 100.0% | 188 MiB → 187 MiB | 371 → 368 | `setUpBeforeAll(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |      Delta |      % |              Size | Samples | Caller       | Location                                            |
| -----: | ---------: | -----: | ----------------: | ------: | ------------ | --------------------------------------------------- |
|  -7.9% | -1.499 MiB | 100.0% | 19 MiB → 17.5 MiB | 38 → 35 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda` |

##### `createScratchDirectory(Path, String, boolean)` (`org.renaissance.core.DirUtils`)

|  Change |          Delta |             % |        Size | Samples | Caller                             | Location                        |
| ------: | -------------: | ------------: | ----------: | ------: | ---------------------------------- | ------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `createScratchRoot(Path, boolean)` | `org.renaissance.core.Launcher` |

##### `createScratchRoot(Path, boolean)` (`org.renaissance.core.Launcher`)

|  Change |          Delta |             % |        Size | Samples | Caller                                 | Location                        |
| ------: | -------------: | ------------: | ----------: | ------: | -------------------------------------- | ------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |             % |                Size |         Samples | Callee                                                    | Location                                      |
| -----: | -----------: | ------------: | ------------------: | --------------: | --------------------------------------------------------- | --------------------------------------------- |
|  +1.4% | +422.499 MiB |         98.9% | 28.9 GiB → 29.3 GiB | 59,112 → 59,957 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  +4.8% | +257.499 MiB | 17.9% → 18.5% | 5.23 GiB → 5.49 GiB | 10,719 → 11,234 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |      % |                Size |         Samples | Callee                 | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------------------- | ----------------------------------- |
|  +1.4% | +431.999 MiB | 100.0% | 29.2 GiB → 29.6 GiB | 59,741 → 60,605 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |        Delta |      % |                Size |         Samples | Callee     | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------- | ----------------------------------- |
|  +1.4% | +422.499 MiB | 100.0% | 28.9 GiB → 29.3 GiB | 59,112 → 59,957 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change |        Delta |      % |                Size |         Samples | Callee     | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------- | ----------------------------------- |
|  +4.8% | +257.499 MiB | 100.0% | 5.23 GiB → 5.49 GiB | 10,719 → 11,234 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |             % |                Size |         Samples | Callee                              | Location              |
| -----: | -----------: | ------------: | ------------------: | --------------: | ----------------------------------- | --------------------- |
|  +3.4% | +205.499 MiB | 93.8% → 93.4% | 5.91 GiB → 6.11 GiB | 12,110 → 12,521 | `add(Object)`                       | `java.util.ArrayList` |
|  +5.8% |  +17.999 MiB |   4.8% → 4.9% |   311 MiB → 329 MiB |       622 → 658 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`   |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |             % |                Size |         Samples | Callee                   | Location                                                   |
| -----: | -----------: | ------------: | ------------------: | --------------: | ------------------------ | ---------------------------------------------------------- |
|  +3.9% | +249.499 MiB | 78.9% → 79.5% |  6.3 GiB → 6.54 GiB | 12,904 → 13,403 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +3.0% | +246.499 MiB |        100.0% | 7.99 GiB → 8.23 GiB | 16,358 → 16,851 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -0.2% |   -2.999 MiB | 21.1% → 20.5% | 1.69 GiB → 1.68 GiB |   3,454 → 3,448 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `grow()` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |         Samples | Callee      | Location              |
| -----: | -----------: | -----: | ------------------: | --------------: | ----------- | --------------------- |
|  +3.4% | +204.388 MiB | 100.0% | 5.92 GiB → 6.12 GiB | 12,116 → 12,525 | `grow(int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |         Samples | Callee   | Location              |
| -----: | -----------: | -----: | ------------------: | --------------: | -------- | --------------------- |
|  +3.4% | +204.388 MiB | 100.0% | 5.92 GiB → 6.12 GiB | 12,116 → 12,525 | `grow()` | `java.util.ArrayList` |

##### `add(Object)` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |         Samples | Callee                       | Location              |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------------------------- | --------------------- |
|  +3.4% | +204.388 MiB | 100.0% | 5.92 GiB → 6.12 GiB | 12,116 → 12,525 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |       Delta |            % |          Size | Samples | Callee                                                                                       | Location                                  |
| -----: | ----------: | -----------: | ------------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
|    new | +198.85 MiB | 0.0% → 98.8% | 0 B → 199 MiB | 0 → 392 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
|    new |  +2.499 MiB |  0.0% → 1.2% | 0 B → 2.5 MiB |   0 → 5 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change |        Delta |             % |                Size |         Samples | Callee                           | Location                                                   |
| -----: | -----------: | ------------: | ------------------: | --------------: | -------------------------------- | ---------------------------------------------------------- |
|  +1.4% | +431.999 MiB | 79.7% → 80.4% | 29.2 GiB → 29.6 GiB | 59,741 → 60,605 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
|  +3.0% | +246.499 MiB | 21.8% → 22.4% | 7.99 GiB → 8.23 GiB | 16,358 → 16,851 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -0.6% | -169.476 MiB | 77.0% → 76.2% |   28.2 GiB → 28 GiB | 57,409 → 57,071 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +36.8% |  +68.499 MiB |   0.5% → 0.7% |   186 MiB → 254 MiB |       372 → 509 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| +23.5% |  +36.499 MiB |   0.4% → 0.5% |   155 MiB → 191 MiB |       310 → 383 | `createSubtask(int, int)`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change |        Delta |      % |                Size |         Samples | Callee      | Location                                               |
| -----: | -----------: | -----: | ------------------: | --------------: | ----------- | ------------------------------------------------------ |
|  +0.5% | +169.522 MiB | 100.0% | 36.6 GiB → 36.8 GiB | 74,684 → 75,024 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |             % |                Size |         Samples | Callee   | Location                                            |
| -----: | -----------: | ------------: | ------------------: | --------------: | -------- | --------------------------------------------------- |
|  +0.5% | +169.522 MiB |        100.0% | 36.6 GiB → 36.8 GiB | 74,684 → 75,024 | `exec()` | `java.util.concurrent.RecursiveTask`                |
|  -0.2% |  -14.977 MiB | 20.7% → 20.6% | 7.59 GiB → 7.57 GiB | 15,231 → 15,202 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |        Delta |      % |                Size |         Samples | Callee     | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------- | ----------------------------------- |
|  +0.5% | +169.522 MiB | 100.0% | 36.6 GiB → 36.8 GiB | 74,688 → 75,028 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change |        Delta |      % |                Size |         Samples | Callee                                               | Location                                      |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------------------------------------------------- | --------------------------------------------- |
|  +0.5% | +169.522 MiB | 100.0% | 36.6 GiB → 36.8 GiB | 74,688 → 75,028 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |        Delta |      % |                Size |         Samples | Callee                                   | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------------------------------------- | ----------------------------------- |
|  +0.5% | +169.522 MiB | 100.0% | 36.6 GiB → 36.8 GiB | 74,688 → 75,028 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

| Change |        Delta |      % |                Size |         Samples | Callee                              | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | ----------------------------------- | ----------------------------------- |
|  +0.5% | +169.522 MiB | 100.0% | 36.6 GiB → 36.8 GiB | 74,688 → 75,028 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |          Delta |             % |              Size |   Samples | Callee                | Location                                               |
| -----: | -------------: | ------------: | ----------------: | --------: | --------------------- | ------------------------------------------------------ |
| +38.3% |    +64.999 MiB | 91.1% → 92.1% | 169 MiB → 234 MiB | 339 → 469 | `average(List)`       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| +11.1% | +1,023.998 KiB |   4.8% → 3.9% |    9 MiB → 10 MiB |   18 → 20 | `boxed(double[])`     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| +25.0% |   +511.999 KiB |   1.1% → 1.0% |   2 MiB → 2.5 MiB |     4 → 5 | `put(Object, Object)` | `java.util.HashMap`                                    |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |       Delta |      % |              Size |   Samples | Callee                     | Location                                               |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------------- | ------------------------------------------------------ |
| +36.8% | +68.499 MiB | 100.0% | 186 MiB → 254 MiB | 372 → 509 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| +36.8% | +68.499 MiB | 100.0% | 186 MiB → 254 MiB | 372 → 509 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |       Delta |             % |              Size |   Samples | Callee               | Location                                               |
| ------: | ----------: | ------------: | ----------------: | --------: | -------------------- | ------------------------------------------------------ |
|  +37.4% | +62.999 MiB | 99.4% → 98.7% | 168 MiB → 231 MiB | 337 → 463 | `invoke()`           | `java.util.concurrent.ForkJoinTask`                    |
| +400.0% |  +1.999 MiB |   0.3% → 1.1% | 512 KiB → 2.5 MiB |     1 → 5 | `div(double[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |       Delta |             % |                Size |         Samples | Callee                  | Location           |
| -----: | ----------: | ------------: | ------------------: | --------------: | ----------------------- | ------------------ |
|  +0.2% | +34.912 MiB | 98.8% → 98.7% | 19.1 GiB → 19.2 GiB | 38,862 → 38,933 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

| Change |       Delta |      % |                Size |         Samples | Callee     | Location                            |
| -----: | ----------: | -----: | ------------------: | --------------: | ---------- | ----------------------------------- |
|  +0.4% | +34.522 MiB | 100.0% | 7.74 GiB → 7.78 GiB | 15,548 → 15,618 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |     Delta |            % |              Size | Samples | Callee                         | Location           |
| -----: | --------: | -----------: | ----------------: | ------: | ------------------------------ | ------------------ |
| -45.8% | -9.61 MiB | 0.1% → <0.1% | 21 MiB → 11.4 MiB | 36 → 17 | `copyOf(Object[], int, Class)` | `java.util.Arrays` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

| Change |       Delta |             % |              Size |   Samples | Callee                                       | Location                                                                              |
| -----: | ----------: | ------------: | ----------------: | --------: | -------------------------------------------- | ------------------------------------------------------------------------------------- |
| +13.9% | +14.499 MiB | 33.6% → 36.2% | 104 MiB → 119 MiB | 209 → 238 | `apply(Object)`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000008011a3940` |
| +17.1% | +10.499 MiB | 19.8% → 21.9% | 61.5 MiB → 72 MiB | 123 → 144 | `resize()`                                   | `java.util.HashMap`                                                                   |
|  -4.8% |  -6.999 MiB | 46.6% → 41.9% | 145 MiB → 138 MiB | 290 → 276 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                                                                   |

##### `range(int, int)` (`java.util.stream.IntStream`)

| Change |       Delta |             % |              Size | Samples | Callee                                  | Location                         |
| -----: | ----------: | ------------: | ----------------: | ------: | --------------------------------------- | -------------------------------- |
| +58.0% | +14.499 MiB | 71.4% → 79.0% | 25 MiB → 39.5 MiB | 50 → 79 | `intStream(Spliterator$OfInt, boolean)` | `java.util.stream.StreamSupport` |

##### `<init>(Collection)` (`java.util.ArrayList`)

| Change |       Delta |      % |                Size |         Samples | Callee      | Location              |
| -----: | ----------: | -----: | ------------------: | --------------: | ----------- | --------------------- |
|  +0.2% | +12.999 MiB | 100.0% | 6.92 GiB → 6.93 GiB | 14,173 → 14,199 | `toArray()` | `java.util.ArrayList` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |              Size |   Samples | Callee              | Location                                                  |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------- | --------------------------------------------------------- |
| +33.8% | +24.499 MiB | 100.0% | 72.5 MiB → 97 MiB | 145 → 194 | `vectorSum()`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| +33.8% | +24.499 MiB | 100.0% | 72.5 MiB → 97 MiB | 145 → 194 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `combineResults(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |                Size |   Samples | Callee                    | Location                                                  |
| -----: | ----------: | -----: | ------------------: | --------: | ------------------------- | --------------------------------------------------------- |
| +29.4% | +20.999 MiB | 100.0% | 71.5 MiB → 92.5 MiB | 143 → 185 | `add(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |                Size |   Samples | Callee                               | Location                                                  |
| -----: | ----------: | -----: | ------------------: | --------: | ------------------------------------ | --------------------------------------------------------- |
| +29.4% | +20.999 MiB | 100.0% | 71.5 MiB → 92.5 MiB | 143 → 185 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000008011a3940`)

| Change |       Delta |      % |              Size |   Samples | Callee                               | Location                                                   |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------------------ | ---------------------------------------------------------- |
| +13.9% | +14.499 MiB | 100.0% | 104 MiB → 119 MiB | 209 → 238 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda`)

| Change |        Delta |              % |            Size | Samples | Callee                           | Location                                  |
| -----: | -----------: | -------------: | --------------: | ------: | -------------------------------- | ----------------------------------------- |
|    new |   +6.499 MiB |   0.0% → 68.4% |   0 B → 6.5 MiB |  0 → 13 | `setUpBeforeAll$$anonfun$1(Map)` | `org.renaissance.jdk.concurrent.FjKmeans` |
| +20.0% | +511.999 KiB | 100.0% → 31.6% | 2.5 MiB → 3 MiB |   5 → 6 | `$anonfun$adapted$1(Object)`     | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `rowToArray$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |          Delta |            % |          Size | Samples | Callee              | Location                            |
| -----: | -------------: | -----------: | ------------: | ------: | ------------------- | ----------------------------------- |
|    new |     +2.999 MiB | 0.0% → 46.2% |   0 B → 3 MiB |   0 → 6 | `<clinit>()`        | `scala.Predef$`                     |
|    new |     +1.999 MiB | 0.0% → 30.8% |   0 B → 2 MiB |   0 → 4 | `map(Function1)`    | `scala.collection.immutable.Range`  |
|    new | +1,023.998 KiB | 0.0% → 15.4% |   0 B → 1 MiB |   0 → 2 | `loadClass(String)` | `java.lang.ClassLoader`             |
|    new |   +511.999 KiB |  0.0% → 7.7% | 0 B → 512 KiB |   0 → 1 | `toArray(ClassTag)` | `scala.collection.AbstractIterable` |

##### `setUpBeforeAll$$anonfun$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |      Delta |             % |          Size | Samples | Callee              | Location                                  |
| -----: | ---------: | ------------: | ------------: | ------: | ------------------- | ----------------------------------------- |
|    new | +6.499 MiB | 0.0% → 100.0% | 0 B → 6.5 MiB |  0 → 13 | `rowToArray$1(Map)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `lambda$toCsvRows$2(String[], Function, String)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`)

| Change |      Delta |             % |          Size | Samples | Callee          | Location                                          |
| -----: | ---------: | ------------: | ------------: | ------: | --------------- | ------------------------------------------------- |
|    new | +6.499 MiB | 0.0% → 100.0% | 0 B → 6.5 MiB |  0 → 13 | `apply(Object)` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |        Delta |            % |          Size | Samples | Callee                                                                                       | Location                                  |
| ------: | -----------: | -----------: | ------------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
| removed |  -197.96 MiB | 99.7% → 0.0% | 198 MiB → 0 B | 390 → 0 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
| removed | -511.999 KiB |  0.3% → 0.0% | 512 KiB → 0 B |   1 → 0 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `addAll(Collection)` (`java.util.ArrayList`)

| Change |        Delta |             % |                Size |         Samples | Callee      | Location              |
| -----: | -----------: | ------------: | ------------------: | --------------: | ----------- | --------------------- |
|  -1.1% | -157.476 MiB | 64.3% → 64.1% | 13.4 GiB → 13.3 GiB | 27,222 → 26,908 | `grow(int)` | `java.util.ArrayList` |
|  -0.3% |  -24.499 MiB | 35.7% → 35.9% | 7.45 GiB → 7.43 GiB | 15,264 → 15,215 | `toArray()` | `java.util.ArrayList` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |     % |                Size |         Samples | Callee                | Location            |
| -----: | -----------: | ----: | ------------------: | --------------: | --------------------- | ------------------- |
|  -0.6% | -161.476 MiB | 99.1% | 27.9 GiB → 27.8 GiB | 56,883 → 56,561 | `forEach(BiConsumer)` | `java.util.HashMap` |
|  -2.8% |   -5.499 MiB |  0.7% |   194 MiB → 188 MiB |       388 → 377 | `<init>(Map)`         | `java.util.HashMap` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |              Size |         Samples | Callee            | Location                                    |
| -----: | -----------: | -----: | ----------------: | --------------: | ----------------- | ------------------------------------------- |
|  -0.6% | -169.476 MiB | 100.0% | 28.2 GiB → 28 GiB | 57,409 → 57,071 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |              Size |         Samples | Callee                     | Location                                                   |
| -----: | -----------: | -----: | ----------------: | --------------: | -------------------------- | ---------------------------------------------------------- |
|  -0.6% | -169.476 MiB | 100.0% | 28.2 GiB → 28 GiB | 57,409 → 57,071 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|  Change |        Delta |            % |                Size |         Samples | Callee                  | Location                                                               |
| ------: | -----------: | -----------: | ------------------: | --------------: | ----------------------- | ---------------------------------------------------------------------- |
|   -0.6% | -160.976 MiB |       100.0% | 27.9 GiB → 27.8 GiB | 56,880 → 56,559 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7400` |
| removed | -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `resize()`              | `java.util.HashMap`                                                    |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |      % |                Size |         Samples | Callee                              | Location            |
| -----: | -----------: | -----: | ------------------: | --------------: | ----------------------------------- | ------------------- |
|  -0.6% | -161.476 MiB | 100.0% | 27.9 GiB → 27.8 GiB | 56,883 → 56,561 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7800`)

| Change |        Delta |      % |                Size |         Samples | Callee                              | Location                                    |
| -----: | -----------: | -----: | ------------------: | --------------: | ----------------------------------- | ------------------------------------------- |
|  -0.6% | -161.476 MiB | 100.0% | 27.9 GiB → 27.8 GiB | 56,883 → 56,561 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

| Change |        Delta |      % |                Size |         Samples | Callee                   | Location                                                               |
| -----: | -----------: | -----: | ------------------: | --------------: | ------------------------ | ---------------------------------------------------------------------- |
|  -0.6% | -161.476 MiB | 100.0% | 27.9 GiB → 27.8 GiB | 56,883 → 56,561 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7800` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |             % |                Size |         Samples | Callee               | Location              |
| -----: | -----------: | ------------: | ------------------: | --------------: | -------------------- | --------------------- |
|  -0.9% | -181.976 MiB | 74.8% → 74.6% | 20.9 GiB → 20.7 GiB | 42,486 → 42,123 | `addAll(Collection)` | `java.util.ArrayList` |
|  +0.2% |  +12.999 MiB | 24.8% → 25.0% | 6.92 GiB → 6.93 GiB | 14,173 → 14,199 | `<init>(Collection)` | `java.util.ArrayList` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7400`)

| Change |        Delta |      % |                Size |         Samples | Callee                       | Location                                    |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------------------------- | ------------------------------------------- |
|  -0.6% | -160.976 MiB | 100.0% | 27.9 GiB → 27.8 GiB | 56,880 → 56,559 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `evaluate(Spliterator, boolean, IntFunction)` (`java.util.stream.AbstractPipeline`)

| Change |       Delta |             % |            Size |   Samples | Callee                               | Location                             |
| -----: | ----------: | ------------: | --------------: | --------: | ------------------------------------ | ------------------------------------ |
| -22.9% | -18.999 MiB | 70.9% → 67.4% | 83 MiB → 64 MiB | 166 → 128 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline`  |
|  -8.8% |  -2.999 MiB | 29.1% → 32.6% | 34 MiB → 31 MiB |   68 → 62 | `makeNodeBuilder(long, IntFunction)` | `java.util.stream.ReferencePipeline` |

##### `evaluateToArrayNode(IntFunction)` (`java.util.stream.AbstractPipeline`)

| Change |       Delta |      % |             Size |   Samples | Callee                                        | Location                            |
| -----: | ----------: | -----: | ---------------: | --------: | --------------------------------------------- | ----------------------------------- |
| -18.8% | -21.999 MiB | 100.0% | 117 MiB → 95 MiB | 234 → 190 | `evaluate(Spliterator, boolean, IntFunction)` | `java.util.stream.AbstractPipeline` |

##### `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`)

| Change |       Delta |      % |             Size |   Samples | Callee                             | Location                            |
| -----: | ----------: | -----: | ---------------: | --------: | ---------------------------------- | ----------------------------------- |
| -18.8% | -21.999 MiB | 100.0% | 117 MiB → 95 MiB | 234 → 190 | `evaluateToArrayNode(IntFunction)` | `java.util.stream.AbstractPipeline` |

##### `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |       Delta |      % |            Size |   Samples | Callee            | Location           |
| -----: | ----------: | -----: | --------------: | --------: | ----------------- | ------------------ |
| -23.9% | -15.999 MiB | 100.0% | 67 MiB → 51 MiB | 134 → 102 | `valueOf(double)` | `java.lang.Double` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |        Delta |            % |                Size |         Samples | Callee                            | Location                                               |
| ------: | -----------: | -----------: | ------------------: | --------------: | --------------------------------- | ------------------------------------------------------ |
|   -0.2% |  -14.977 MiB |       100.0% | 7.59 GiB → 7.57 GiB | 15,227 → 15,198 | `invoke()`                        | `java.util.concurrent.ForkJoinTask`                    |
| +100.0% | +511.999 KiB |        <0.1% |     512 KiB → 1 MiB |           1 → 2 | `<init>(JavaKMeans, Map)`         | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|     new | +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |           0 → 1 | `randomSample(int, List, Random)` | `org.renaissance.jdk.concurrent.JavaKMeans`            |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a2bd0`)

| Change |       Delta |      % |                Size |         Samples | Callee                         | Location                                    |
| -----: | ----------: | -----: | ------------------: | --------------: | ------------------------------ | ------------------------------------------- |
|  -0.2% | -14.977 MiB | 100.0% | 7.59 GiB → 7.57 GiB | 15,231 → 15,202 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

| Change |       Delta |      % |                Size |         Samples | Callee   | Location                                                               |
| -----: | ----------: | -----: | ------------------: | --------------: | -------- | ---------------------------------------------------------------------- |
|  -0.2% | -14.977 MiB | 100.0% | 7.59 GiB → 7.57 GiB | 15,231 → 15,202 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a2bd0` |

##### `toArray()` (`java.util.ArrayList`)

| Change |       Delta |      % |     Size |         Samples | Callee                  | Location           |
| -----: | ----------: | -----: | -------: | --------------: | ----------------------- | ------------------ |
|  -0.1% | -11.499 MiB | 100.0% | 14.4 GiB | 29,437 → 29,414 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

| Change |        Delta |           % |          Size | Samples | Callee                    | Location                  |
| -----: | -----------: | ----------: | ------------: | ------: | ------------------------- | ------------------------- |
|    new | +511.999 KiB | 0.0% → 4.4% | 0 B → 512 KiB |   0 → 1 | `newInstance(Class, int)` | `java.lang.reflect.Array` |

##### `putMapEntries(Map, boolean)` (`java.util.HashMap`)

| Change |          Delta |             % |              Size |   Samples | Callee                                          | Location            |
| -----: | -------------: | ------------: | ----------------: | --------: | ----------------------------------------------- | ------------------- |
|  -2.6% |     -4.499 MiB | 90.7% → 91.0% | 176 MiB → 171 MiB | 352 → 343 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |
|  -5.6% | -1,023.998 KiB |   9.3% → 9.0% |   18 MiB → 17 MiB |   36 → 34 | `entrySet()`                                    | `java.util.HashMap` |

##### `<init>(Map)` (`java.util.HashMap`)

| Change |      Delta |      % |              Size |   Samples | Callee                        | Location            |
| -----: | ---------: | -----: | ----------------: | --------: | ----------------------------- | ------------------- |
|  -2.8% | -5.499 MiB | 100.0% | 194 MiB → 188 MiB | 388 → 377 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

| Change |        Delta |             % |              Size |   Samples | Callee                                       | Location            |
| -----: | -----------: | ------------: | ----------------: | --------: | -------------------------------------------- | ------------------- |
|  -3.6% |   -4.999 MiB | 77.4% → 76.5% | 138 MiB → 133 MiB | 277 → 267 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap` |
|  +1.2% | +511.999 KiB | 22.6% → 23.5% | 40.5 MiB → 41 MiB |   81 → 82 | `resize()`                                   | `java.util.HashMap` |

##### `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`)

|  Change |        Delta |              % |               Size | Samples | Callee                  | Location                            |
| ------: | -----------: | -------------: | -----------------: | ------: | ----------------------- | ----------------------------------- |
|  -24.0% |   -2.999 MiB | 96.2% → 100.0% | 12.5 MiB → 9.5 MiB | 25 → 19 | `opWrapSink(int, Sink)` | `java.util.stream.IntPipeline$1`    |
| removed | -511.999 KiB |    3.8% → 0.0% |      512 KiB → 0 B |   1 → 0 | `opWrapSink(int, Sink)` | `java.util.stream.DoublePipeline$1` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

| Change |        Delta |             % |              Size | Samples | Callee                      | Location                                  |
| -----: | -----------: | ------------: | ----------------: | ------: | --------------------------- | ----------------------------------------- |
|  -2.6% | -511.999 KiB | 57.4% → 61.3% | 19.5 MiB → 19 MiB | 39 → 38 | `<init>(long, IntFunction)` | `java.util.stream.Nodes$FixedNodeBuilder` |

##### `makeNodeBuilder(long, IntFunction)` (`java.util.stream.ReferencePipeline`)

| Change |      Delta |      % |            Size | Samples | Callee                       | Location                 |
| -----: | ---------: | -----: | --------------: | ------: | ---------------------------- | ------------------------ |
|  -8.8% | -2.999 MiB | 100.0% | 34 MiB → 31 MiB | 68 → 62 | `builder(long, IntFunction)` | `java.util.stream.Nodes` |

##### `loadClass(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

|  Change |        Delta |              % |            Size | Samples | Callee                             | Location                                 |
| ------: | -----------: | -------------: | --------------: | ------: | ---------------------------------- | ---------------------------------------- |
| removed |   -1.499 MiB |   60.0% → 0.0% |   1.5 MiB → 0 B |   3 → 0 | `<init>(String)`                   | `java.lang.ClassNotFoundException`       |
|  -50.0% | -511.999 KiB | 40.0% → 100.0% | 1 MiB → 512 KiB |   2 → 1 | `loadClassOrNull(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `loadClass(String, boolean)` (`jdk.internal.loader.ClassLoaders$AppClassLoader`)

| Change |      Delta |      % |              Size | Samples | Callee                       | Location                                 |
| -----: | ---------: | -----: | ----------------: | ------: | ---------------------------- | ---------------------------------------- |
| -80.0% | -1.999 MiB | 100.0% | 2.5 MiB → 512 KiB |   5 → 1 | `loadClass(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change |          Delta |              % |              Size | Samples | Callee              | Location                           |
| ------: | -------------: | -------------: | ----------------: | ------: | ------------------- | ---------------------------------- |
| removed |     -3.999 MiB |   42.1% → 0.0% |       4 MiB → 0 B |   8 → 0 | `<clinit>()`        | `scala.Predef$`                    |
| removed |     -2.999 MiB |   31.6% → 0.0% |       3 MiB → 0 B |   6 → 0 | `loadClass(String)` | `java.lang.ClassLoader`            |
|  +40.0% | +1,023.998 KiB | 26.3% → 100.0% | 2.5 MiB → 3.5 MiB |   5 → 7 | `map(Function1)`    | `scala.collection.immutable.Range` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

| Change |        Delta |              % |              Size | Samples | Callee                                            | Location                                                             |
| -----: | -----------: | -------------: | ----------------: | ------: | ------------------------------------------------- | -------------------------------------------------------------------- |
| -63.2% |   -5.999 MiB | 100.0% → 63.6% | 9.5 MiB → 3.5 MiB |  19 → 7 | `run(BenchmarkContext)`                           | `org.renaissance.jdk.concurrent.FjKmeans`                            |
|    new |   +1.499 MiB |   0.0% → 27.3% |     0 B → 1.5 MiB |   0 → 3 | `validate()`                                      | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000008011a89b8` |
|    new | +511.999 KiB |    0.0% → 9.1% |     0 B → 512 KiB |   0 → 1 | `notifyAfterOperationSetUp(String, int, boolean)` | `org.renaissance.harness.EventDispatcher`                            |

##### `$anonfun$1(int)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change |      Delta |             % |          Size | Samples | Callee                | Location                                    |
| ------: | ---------: | ------------: | ------------: | ------: | --------------------- | ------------------------------------------- |
| removed | -2.499 MiB | 100.0% → 0.0% | 2.5 MiB → 0 B |   5 → 0 | `run(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `$anonfun$1(Config, Path)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |        Delta |            % |          Size | Samples | Callee                                         | Location                                                        |
| ------: | -----------: | -----------: | ------------: | ------: | ---------------------------------------------- | --------------------------------------------------------------- |
| removed |   -1.499 MiB | 75.0% → 0.0% | 1.5 MiB → 0 B |   3 → 0 | `asJava()`                                     | `scala.collection.convert.AsJavaExtensions$MutableMapHasAsJava` |
| removed | -511.999 KiB | 25.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `create(Path, String, Optional, Map, boolean)` | `org.renaissance.core.BenchmarkSuite`                           |

##### `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |     Delta |      % |              Size |   Samples | Callee               | Location                             |
| -----: | --------: | -----: | ----------------: | --------: | -------------------- | ------------------------------------ |
|  -0.9% | -1.61 MiB | 100.0% | 188 MiB → 187 MiB | 371 → 368 | `collect(Collector)` | `java.util.stream.ReferencePipeline` |

##### `createScratchDirectory(Path, String, boolean)` (`org.renaissance.core.DirUtils`)

|  Change |          Delta |             % |        Size | Samples | Callee                                               | Location              |
| ------: | -------------: | ------------: | ----------: | ------: | ---------------------------------------------------- | --------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `createTempDirectory(Path, String, FileAttribute[])` | `java.nio.file.Files` |

##### `createScratchRoot(Path, boolean)` (`org.renaissance.core.Launcher`)

|  Change |          Delta |             % |        Size | Samples | Callee                                          | Location                        |
| ------: | -------------: | ------------: | ----------: | ------: | ----------------------------------------------- | ------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `createScratchDirectory(Path, String, boolean)` | `org.renaissance.core.DirUtils` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in bytes allocated in their leaf frame.

| Change |        Delta |            % |              Size |       Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| -----: | -----------: | -----------: | ----------------: | ------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +15.5% | +125.999 MiB |  2.2% → 2.5% | 812 MiB → 938 MiB | 1,625 → 1,877 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                   |
| +16.7% |  +57.499 MiB |  0.9% → 1.1% | 345 MiB → 402 MiB |     690 → 805 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7400`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7800`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                           |
|    new |  +50.999 MiB |  0.0% → 0.1% |      0 B → 51 MiB |       0 → 102 | `valueOf(double)` (`java.lang.Double`) ← `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluate(Spliterator, boolean, IntFunction)` ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000080111ede0`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000801004800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  +9.5% |  +39.499 MiB |  1.1% → 1.2% | 415 MiB → 455 MiB |     831 → 910 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7400`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7800`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|    new |  +39.499 MiB |  0.0% → 0.1% |    0 B → 39.5 MiB |        0 → 79 | `intStream(Spliterator$OfInt, boolean)` (`java.util.stream.StreamSupport`) ← `range(int, int)` (`java.util.stream.IntStream`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000080111ede0`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000801004800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| +25.6% |  +35.499 MiB |  0.4% → 0.5% | 138 MiB → 174 MiB |     277 → 348 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  +7.1% |  +33.999 MiB |  1.3% → 1.4% | 480 MiB → 514 MiB |   960 → 1,028 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`) |
| +10.0% |  +32.999 MiB |  0.9% → 1.0% | 330 MiB → 363 MiB |     661 → 727 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7400`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7800`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  +5.8% |  +31.499 MiB |  1.4% → 1.5% | 544 MiB → 576 MiB | 1,089 → 1,152 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7400`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7800`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  +9.6% |  +30.499 MiB |  0.8% → 0.9% | 318 MiB → 349 MiB |     637 → 698 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7400`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7800`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|    new |  +28.999 MiB |  0.0% → 0.1% |      0 B → 29 MiB |        0 → 58 | `mapToObj(IntFunction, int)` (`java.util.stream.IntPipeline`) ← `mapToObj(IntFunction)` ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000080111ede0`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000801004800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  +3.7% |  +24.999 MiB |         1.8% | 670 MiB → 695 MiB | 1,341 → 1,391 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7400`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7800`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| +35.2% |  +24.999 MiB |  0.2% → 0.3% |   71 MiB → 96 MiB |     142 → 192 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| +18.9% |  +19.999 MiB |         0.3% | 106 MiB → 126 MiB |     212 → 252 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7400`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7800`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| +12.7% |  +19.499 MiB |  0.4% → 0.5% | 153 MiB → 173 MiB |     307 → 346 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7400`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7800`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  +6.4% |  +17.999 MiB |  0.7% → 0.8% | 279 MiB → 297 MiB |     559 → 595 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7400`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7800`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  +7.2% |  +17.499 MiB |  0.6% → 0.7% | 242 MiB → 259 MiB |     484 → 519 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|    new |  +17.499 MiB | 0.0% → <0.1% |    0 B → 17.5 MiB |        0 → 35 | `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `<init>(long, IntFunction)` (`java.util.stream.Nodes$ArrayNode`) ← `<init>(long, IntFunction)` (`java.util.stream.Nodes$FixedNodeBuilder`) ← `builder(long, IntFunction)` (`java.util.stream.Nodes`) ← `makeNodeBuilder(long, IntFunction)` (`java.util.stream.ReferencePipeline`) ← `evaluate(Spliterator, boolean, IntFunction)` (`java.util.stream.AbstractPipeline`) ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000080111ede0`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000801004800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  +8.9% |  +15.499 MiB |         0.5% | 173 MiB → 189 MiB |     347 → 378 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7400`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7800`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                           |
| +36.5% |  +15.499 MiB |  0.1% → 0.2% | 42.5 MiB → 58 MiB |      85 → 116 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7400`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7800`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

### Improvements

Call stacks with the largest decrease in bytes allocated in their leaf frame.

|  Change |        Delta |           % |                Size |       Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------: | -----------: | ----------: | ------------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   -5.5% | -132.999 MiB | 6.4% → 6.0% | 2.36 GiB → 2.23 GiB | 4,824 → 4,558 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7400`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7800`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|   -7.8% |  -94.999 MiB | 3.2% → 3.0% |  1.19 GiB → 1.1 GiB | 2,437 → 2,247 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7400`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7800`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|   -6.0% |  -88.499 MiB | 3.9% → 3.6% | 1.43 GiB → 1.35 GiB | 2,932 → 2,755 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7400`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7800`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| removed |  -66.999 MiB | 0.2% → 0.0% |        67 MiB → 0 B |       134 → 0 | `valueOf(double)` (`java.lang.Double`) ← `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluate(Spliterator, boolean, IntFunction)` ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000e00111f208`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e001004800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000e001009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                         |
|   -4.1% |  -58.499 MiB | 3.8% → 3.6% | 1.41 GiB → 1.35 GiB | 2,878 → 2,761 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7400`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7800`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|   -6.2% |  -45.499 MiB | 2.0% → 1.8% |   738 MiB → 693 MiB | 1,477 → 1,386 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                   |
|   -7.1% |  -35.999 MiB | 1.4% → 1.2% |   509 MiB → 473 MiB |   1,019 → 947 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7400`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7800`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|   -4.6% |  -27.999 MiB | 1.6% → 1.5% |   610 MiB → 582 MiB | 1,221 → 1,165 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7400`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7800`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| removed |  -24.999 MiB | 0.1% → 0.0% |        25 MiB → 0 B |        50 → 0 | `intStream(Spliterator$OfInt, boolean)` (`java.util.stream.StreamSupport`) ← `range(int, int)` (`java.util.stream.IntStream`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000e00111f208`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e001004800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000e001009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|   -3.4% |  -24.999 MiB | 2.0% → 1.9% |   737 MiB → 712 MiB | 1,474 → 1,424 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7400`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7800`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  -11.3% |  -24.999 MiB | 0.6% → 0.5% |   221 MiB → 196 MiB |     443 → 393 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| removed |  -24.499 MiB | 0.1% → 0.0% |      24.5 MiB → 0 B |        49 → 0 | `mapToObj(IntFunction, int)` (`java.util.stream.IntPipeline`) ← `mapToObj(IntFunction)` ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000e00111f208`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e001004800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000e001009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|   -2.2% |  -23.499 MiB | 2.9% → 2.8% | 1.05 GiB → 1.03 GiB | 2,158 → 2,111 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7400`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7800`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|   -5.0% |  -22.499 MiB | 1.2% → 1.1% |   449 MiB → 426 MiB |     898 → 853 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7400`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7800`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                           |
|   -2.0% |  -22.477 MiB | 3.0% → 2.9% |  1.1 GiB → 1.08 GiB | 1,939 → 1,895 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7400`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7800`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  -11.6% |  -21.499 MiB | 0.5% → 0.4% |   186 MiB → 164 MiB |     372 → 329 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7400`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7800`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|   -3.0% |  -20.499 MiB | 1.8% → 1.7% |   674 MiB → 654 MiB | 1,349 → 1,308 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7400`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7800`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|   -1.8% |  -20.499 MiB | 3.0% → 2.9% | 1.09 GiB → 1.07 GiB | 2,236 → 2,195 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`) |
|   -3.3% |  -19.499 MiB |        1.5% |   583 MiB → 564 MiB | 1,167 → 1,128 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7400`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a7800`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| removed |  -18.999 MiB | 0.1% → 0.0% |        19 MiB → 0 B |        38 → 0 | `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `<init>(long, IntFunction)` (`java.util.stream.Nodes$ArrayNode`) ← `<init>(long, IntFunction)` (`java.util.stream.Nodes$FixedNodeBuilder`) ← `builder(long, IntFunction)` (`java.util.stream.Nodes`) ← `makeNodeBuilder(long, IntFunction)` (`java.util.stream.ReferencePipeline`) ← `evaluate(Spliterator, boolean, IntFunction)` (`java.util.stream.AbstractPipeline`) ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000e00111f208`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e001004800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000e001009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                               |

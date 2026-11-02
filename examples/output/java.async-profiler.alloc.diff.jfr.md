# Allocated heap profile diff

Allocated 36.9 GiB (+24.841 MiB, +0.1%) over 75,162 → 75,209 samples (514 KiB per sample).

| Category         | Change |       Delta |     % |                Size |         Samples |
| ---------------- | -----: | ----------: | ----: | ------------------: | --------------: |
| Standard library |    ~0% | +13.841 MiB | 93.1% |            34.3 GiB | 69,984 → 70,009 |
| Ours             |  +0.4% | +10.999 MiB |  6.9% | 2.53 GiB → 2.54 GiB |   5,178 → 5,200 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── … 36.6 GiB → 36.7 GiB (99.4%) exec() at java.util.concurrent.RecursiveTask
│   └── 36.6 GiB → 36.7 GiB (99.4%) compute() at org.renaissance.jdk.concurrent.JavaKMeans$RangedTask
│       ├── 28.1 GiB (76.3%) combineResults(Object, Object) at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│       │   └── 28.1 GiB (76.3%) combineResults(Map, Map)
│       │       └── 28.1 GiB (76.3%) merge(Map, Map) at org.renaissance.jdk.concurrent.JavaKMeans
│       │           └── … 27.9 GiB (75.7%) lambda$merge$6(List, List) at org.renaissance.jdk.concurrent.JavaKMeans
│       │               ├── 20.8 GiB (56.5%) addAll(Collection) at java.util.ArrayList
│       │               │   ├── 13.4 GiB (36.4% → 36.3%) grow(int)
│       │               │   │   └── 13.4 GiB (36.4% → 36.3%, self 36.3%, self 91.1% → 90.9% globally) copyOf(Object[], int) at java.util.Arrays
│       │               │   └── 7.43 GiB → 7.45 GiB (20.2%) toArray()
│       │               │       └── 7.43 GiB → 7.45 GiB (20.2%, self 20.2%) copyOf(Object[], int) at java.util.Arrays
│       │               └── 6.95 GiB → 6.94 GiB (18.9% → 18.8%) <init>(Collection) at java.util.ArrayList
│       │                   └── 6.95 GiB → 6.94 GiB (18.9% → 18.8%) toArray()
│       │                       └── 6.95 GiB → 6.94 GiB (18.9% → 18.8%, self 18.9% → 18.8%) copyOf(Object[], int) at java.util.Arrays
│       ├── 8.06 GiB → 8 GiB (21.9% → 21.7%) computeDirectly() at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│       │   ├── … 6.38 GiB → 6.36 GiB (17.3% → 17.2%) collectClusters(int[]) at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│       │   │   ├── … 6.01 GiB → 5.96 GiB (16.3% → 16.2%, self 0.6%) grow(int) at java.util.ArrayList
│       │   │   │   └── 5.79 GiB → 5.73 GiB (15.7% → 15.5%, self 15.7% → 15.5%) copyOf(Object[], int) at java.util.Arrays
│       │   │   └── 297 MiB → 305 MiB (0.8%) computeIfAbsent(Object, Function) at java.util.HashMap
│       │   │       ├── 116 MiB → 135 MiB (0.3% → 0.4%) newNode(int, Object, Object, HashMap$Node)
│       │   │       ├── 117 MiB → 100 MiB (0.3%) apply(Object) at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011a3940
│       │   │       │   └── 117 MiB → 100 MiB (0.3%) lambda$collectClusters$0(Double[]) at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│       │   │       └── 64 MiB → 70 MiB (0.2%) resize()
│       │   └── … 1.68 GiB → 1.65 GiB (4.6% → 4.5%) findNearestCentroid() at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│       ├── 165 MiB → 164 MiB (0.4%) createSubtask(int, int) at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│       ├── 125 MiB → 147 MiB (0.3% → 0.4%) createSubtask(int, int) at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│       ├── 85 MiB → 95 MiB (0.2% → 0.3%) computeDirectly() at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│       │   └── … 85 MiB → 95 MiB (0.2% → 0.3%) vectorSum() at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│       ├── … 81 MiB → 93 MiB (0.2%) add(double[], double[]) at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│       └── 12 MiB → 19 MiB (<0.1% → 0.1%) computeDirectly() at org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask
│           └── … 12 MiB → 19 MiB (<0.1% → 0.1%) computeClusterAverages() at org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask
└── … 192 MiB → 203 MiB (0.5%) applyVoid(Object) at org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111f1b8
    ├── … 0 B → 172 MiB (0.0% → 0.5%) apply(int) at org.renaissance.jdk.concurrent.JavaKMeans$$Lambda
    │   ├── 0 B → 66.5 MiB (0.0% → 0.2%) lambda$generateData$3(int, int, Random[], int) at org.renaissance.jdk.concurrent.JavaKMeans
    │   │   └── 0 B → 66.5 MiB (0.0% → 0.2%) valueOf(double) at java.lang.Double
    │   └── … 0 B → 30 MiB (0.0% → 0.1%) mapToObj(IntFunction, int) at java.util.stream.IntPipeline
    └── … 168 MiB → 0 B (0.4% → 0.0%) apply(int) at org.renaissance.jdk.concurrent.JavaKMeans$$Lambda
        ├── 91 MiB → 0 B (0.2% → 0.0%) lambda$generateData$5(int, int, Random[], int) at org.renaissance.jdk.concurrent.JavaKMeans
        │   └── 37.5 MiB → 0 B (0.1% → 0.0%) range(int, int) at java.util.stream.IntStream
        └── … 23 MiB → 0 B (0.1% → 0.0%) lambda$generateData$4(int) at org.renaissance.jdk.concurrent.JavaKMeans
```

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |          Delta |            % |               Size |   Samples | Function                                      | Location                                                   |
| ------: | -------------: | -----------: | -----------------: | --------: | --------------------------------------------- | ---------------------------------------------------------- |
|  +35.3% |    +26.999 MiB |  0.2% → 0.3% | 76.5 MiB → 103 MiB | 153 → 207 | `collectClusters(int[])`                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +10.9% |    +25.999 MiB |  0.6% → 0.7% |  239 MiB → 265 MiB | 479 → 531 | `newNode(int, Object, Object, HashMap$Node)`  | `java.util.HashMap`                                        |
|  +17.5% |    +21.999 MiB |  0.3% → 0.4% |  125 MiB → 147 MiB | 251 → 295 | `createSubtask(int, int)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +24.8% |    +13.499 MiB |  0.1% → 0.2% |  54.5 MiB → 68 MiB | 109 → 136 | `valueOf(double)`                             | `java.lang.Double`                                         |
|  +14.8% |    +11.999 MiB |         0.2% |    81 MiB → 93 MiB | 162 → 186 | `add(double[], double[])`                     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +11.8% |     +9.999 MiB |  0.2% → 0.3% |    85 MiB → 95 MiB | 170 → 190 | `vectorSum()`                                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   +4.0% |     +8.999 MiB |         0.6% |  225 MiB → 234 MiB | 451 → 469 | `grow(int)`                                   | `java.util.ArrayList`                                      |
|   +5.3% |     +5.499 MiB |         0.3% |  104 MiB → 110 MiB | 209 → 220 | `resize()`                                    | `java.util.HashMap`                                        |
|   +7.0% |     +4.499 MiB |         0.2% |  64 MiB → 68.5 MiB | 128 → 137 | `merge(Map, Map)`                             | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| +700.0% |     +3.499 MiB |        <0.1% |    512 KiB → 4 MiB |     1 → 8 | `awaitDone(int, long)`                        | `java.util.concurrent.ForkJoinTask`                        |
|  +31.8% |     +3.499 MiB |        <0.1% |  11 MiB → 14.5 MiB |   22 → 29 | `copyOf(byte[], int)`                         | `java.util.Arrays`                                         |
|  +71.4% |     +2.499 MiB |        <0.1% |    3.5 MiB → 6 MiB |    7 → 12 | `<init>(InputStream, Inflater, int)`          | `java.util.zip.InflaterInputStream`                        |
| +125.0% |     +2.499 MiB |        <0.1% |    2 MiB → 4.5 MiB |     4 → 9 | `allocateInstance(Class)`                     | `jdk.internal.misc.Unsafe`                                 |
|   +9.1% |     +2.499 MiB |         0.1% |  27.5 MiB → 30 MiB |   55 → 60 | `mapToObj(IntFunction, int)`                  | `java.util.stream.IntPipeline`                             |
|  +11.1% |     +1.499 MiB |        <0.1% |  13.5 MiB → 15 MiB |   27 → 30 | `entrySet()`                                  | `java.util.HashMap`                                        |
|     new |     +1.499 MiB | 0.0% → <0.1% |      0 B → 1.5 MiB |     0 → 3 | `opWrapSink(int, Sink)`                       | `java.util.stream.DoublePipeline$1`                        |
|     new |     +1.499 MiB | 0.0% → <0.1% |      0 B → 1.5 MiB |     0 → 3 | `spliterator(double[], int, int, int)`        | `java.util.Spliterators`                                   |
|  +11.1% | +1,023.998 KiB |        <0.1% |     9 MiB → 10 MiB |   18 → 20 | `opWrapSink(int, Sink)`                       | `java.util.stream.IntPipeline$1`                           |
|     new | +1,023.998 KiB | 0.0% → <0.1% |        0 B → 1 MiB |     0 → 2 | `enlarge(int)`                                | `jdk.internal.org.objectweb.asm.ByteVector`                |
|     new | +1,023.998 KiB | 0.0% → <0.1% |        0 B → 1 MiB |     0 → 2 | `doubleStream(Spliterator$OfDouble, boolean)` | `java.util.stream.StreamSupport`                           |

##### Standard library

|  Change |          Delta |            % |                Size |   Samples | Function                                      | Location                                     |
| ------: | -------------: | -----------: | ------------------: | --------: | --------------------------------------------- | -------------------------------------------- |
|  +10.9% |    +25.999 MiB |  0.6% → 0.7% |   239 MiB → 265 MiB | 479 → 531 | `newNode(int, Object, Object, HashMap$Node)`  | `java.util.HashMap`                          |
|  +24.8% |    +13.499 MiB |  0.1% → 0.2% |   54.5 MiB → 68 MiB | 109 → 136 | `valueOf(double)`                             | `java.lang.Double`                           |
|   +4.0% |     +8.999 MiB |         0.6% |   225 MiB → 234 MiB | 451 → 469 | `grow(int)`                                   | `java.util.ArrayList`                        |
|   +5.3% |     +5.499 MiB |         0.3% |   104 MiB → 110 MiB | 209 → 220 | `resize()`                                    | `java.util.HashMap`                          |
| +700.0% |     +3.499 MiB |        <0.1% |     512 KiB → 4 MiB |     1 → 8 | `awaitDone(int, long)`                        | `java.util.concurrent.ForkJoinTask`          |
|  +31.8% |     +3.499 MiB |        <0.1% |   11 MiB → 14.5 MiB |   22 → 29 | `copyOf(byte[], int)`                         | `java.util.Arrays`                           |
|  +71.4% |     +2.499 MiB |        <0.1% |     3.5 MiB → 6 MiB |    7 → 12 | `<init>(InputStream, Inflater, int)`          | `java.util.zip.InflaterInputStream`          |
| +125.0% |     +2.499 MiB |        <0.1% |     2 MiB → 4.5 MiB |     4 → 9 | `allocateInstance(Class)`                     | `jdk.internal.misc.Unsafe`                   |
|   +9.1% |     +2.499 MiB |         0.1% |   27.5 MiB → 30 MiB |   55 → 60 | `mapToObj(IntFunction, int)`                  | `java.util.stream.IntPipeline`               |
|  +11.1% |     +1.499 MiB |        <0.1% |   13.5 MiB → 15 MiB |   27 → 30 | `entrySet()`                                  | `java.util.HashMap`                          |
|     new |     +1.499 MiB | 0.0% → <0.1% |       0 B → 1.5 MiB |     0 → 3 | `opWrapSink(int, Sink)`                       | `java.util.stream.DoublePipeline$1`          |
|     new |     +1.499 MiB | 0.0% → <0.1% |       0 B → 1.5 MiB |     0 → 3 | `spliterator(double[], int, int, int)`        | `java.util.Spliterators`                     |
|  +11.1% | +1,023.998 KiB |        <0.1% |      9 MiB → 10 MiB |   18 → 20 | `opWrapSink(int, Sink)`                       | `java.util.stream.IntPipeline$1`             |
|     new | +1,023.998 KiB | 0.0% → <0.1% |         0 B → 1 MiB |     0 → 2 | `enlarge(int)`                                | `jdk.internal.org.objectweb.asm.ByteVector`  |
|     new | +1,023.998 KiB | 0.0% → <0.1% |         0 B → 1 MiB |     0 → 2 | `doubleStream(Spliterator$OfDouble, boolean)` | `java.util.stream.StreamSupport`             |
|   +5.1% |   +754.434 KiB |        <0.1% | 14.4 MiB → 15.1 MiB |   23 → 26 | `copyOf(Object[], int, Class)`                | `java.util.Arrays`                           |
|     new |   +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |     0 → 1 | `getBytes()`                                  | `jdk.internal.loader.Resource`               |
|     new |   +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |     0 → 1 | `findClass(String)`                           | `java.net.URLClassLoader`                    |
|     new |   +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |     0 → 1 | `loadClass(String, boolean)`                  | `jdk.internal.loader.BuiltinClassLoader`     |
|     new |   +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |     0 → 1 | `checkResource(String, boolean, JarEntry)`    | `jdk.internal.loader.URLClassPath$JarLoader` |

##### Ours

| Change |        Delta |           % |               Size |   Samples | Function                   | Location                                                   |
| -----: | -----------: | ----------: | -----------------: | --------: | -------------------------- | ---------------------------------------------------------- |
| +35.3% |  +26.999 MiB | 0.2% → 0.3% | 76.5 MiB → 103 MiB | 153 → 207 | `collectClusters(int[])`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +17.5% |  +21.999 MiB | 0.3% → 0.4% |  125 MiB → 147 MiB | 251 → 295 | `createSubtask(int, int)`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +14.8% |  +11.999 MiB |        0.2% |    81 MiB → 93 MiB | 162 → 186 | `add(double[], double[])`  | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +11.8% |   +9.999 MiB | 0.2% → 0.3% |    85 MiB → 95 MiB | 170 → 190 | `vectorSum()`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +7.0% |   +4.499 MiB |        0.2% |  64 MiB → 68.5 MiB | 128 → 137 | `merge(Map, Map)`          | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  +9.1% | +511.999 KiB |       <0.1% |    5.5 MiB → 6 MiB |   11 → 12 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| +50.0% | +511.999 KiB |       <0.1% |    1 MiB → 1.5 MiB |     2 → 3 | `lambda$boxed$0(int)`      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

#### Improvements

Functions with the largest decrease in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |          Delta |             % |                Size |         Samples | Function                                  | Location                                                   |
| ------: | -------------: | ------------: | ------------------: | --------------: | ----------------------------------------- | ---------------------------------------------------------- |
|   -0.2% |    -58.895 MiB | 91.1% → 90.9% | 33.6 GiB → 33.5 GiB | 68,436 → 68,314 | `copyOf(Object[], int)`                   | `java.util.Arrays`                                         |
|   -2.3% |    -38.999 MiB |   4.6% → 4.5% | 1.68 GiB → 1.65 GiB |   3,447 → 3,369 | `findNearestCentroid()`                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -14.5% |    -16.999 MiB |          0.3% |   117 MiB → 100 MiB |       234 → 200 | `lambda$collectClusters$0(Double[])`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -33.3% |     -3.499 MiB |         <0.1% |    10.5 MiB → 7 MiB |         21 → 14 | `range(int, int)`                         | `java.util.stream.IntStream`                               |
|  -13.0% |     -2.999 MiB |          0.1% |     23 MiB → 20 MiB |         46 → 40 | `lambda$generateData$4(int)`              | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -42.9% |     -2.999 MiB |         <0.1% |       7 MiB → 4 MiB |          14 → 8 | `createSubtask(int, int)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -22.7% |     -2.499 MiB |         <0.1% |    11 MiB → 8.5 MiB |         22 → 17 | `allocateInstance(Object)`                | `java.lang.invoke.DirectMethodHandle`                      |
|  -14.3% |     -1.999 MiB |         <0.1% |     14 MiB → 12 MiB |         28 → 24 | `builder(long, IntFunction)`              | `java.util.stream.Nodes`                                   |
|   -0.6% | -1,023.998 KiB |          0.4% |   165 MiB → 164 MiB |       330 → 328 | `createSubtask(int, int)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -0.5% |   -511.999 KiB |          0.3% |   110 MiB → 109 MiB |       220 → 219 | `lambda$merge$6(List, List)`              | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |   -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `average(List)`                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| removed |   -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `read(InputStream, String)`               | `java.util.jar.Manifest`                                   |
| removed |   -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `newLinkedHashMap(int)`                   | `java.util.LinkedHashMap`                                  |
| removed |   -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `<init>(int)`                             | `java.lang.AbstractStringBuilder`                          |
| removed |   -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `makePreparedLambdaForm(MethodType, int)` | `java.lang.invoke.DirectMethodHandle`                      |
| removed |   -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `addConstantUtf8Reference(int, String)`   | `jdk.internal.org.objectweb.asm.SymbolTable`               |
| removed |   -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `hashCode()`                              | `java.lang.invoke.MemberName`                              |
| removed |   -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `transferTo(OutputStream)`                | `java.io.InputStream`                                      |
| removed |   -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `<init>(int)`                             | `jdk.internal.org.objectweb.asm.ByteVector`                |
|  -50.0% |   -511.999 KiB |         <0.1% |     1 MiB → 512 KiB |           2 → 1 | `collectGarbage(String)`                  | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`   |

##### Standard library

|  Change |        Delta |             % |                Size |         Samples | Function                                  | Location                                     |
| ------: | -----------: | ------------: | ------------------: | --------------: | ----------------------------------------- | -------------------------------------------- |
|   -0.2% |  -58.895 MiB | 91.1% → 90.9% | 33.6 GiB → 33.5 GiB | 68,436 → 68,314 | `copyOf(Object[], int)`                   | `java.util.Arrays`                           |
|  -33.3% |   -3.499 MiB |         <0.1% |    10.5 MiB → 7 MiB |         21 → 14 | `range(int, int)`                         | `java.util.stream.IntStream`                 |
|  -22.7% |   -2.499 MiB |         <0.1% |    11 MiB → 8.5 MiB |         22 → 17 | `allocateInstance(Object)`                | `java.lang.invoke.DirectMethodHandle`        |
|  -14.3% |   -1.999 MiB |         <0.1% |     14 MiB → 12 MiB |         28 → 24 | `builder(long, IntFunction)`              | `java.util.stream.Nodes`                     |
| removed | -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `read(InputStream, String)`               | `java.util.jar.Manifest`                     |
| removed | -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `newLinkedHashMap(int)`                   | `java.util.LinkedHashMap`                    |
| removed | -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `<init>(int)`                             | `java.lang.AbstractStringBuilder`            |
| removed | -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `makePreparedLambdaForm(MethodType, int)` | `java.lang.invoke.DirectMethodHandle`        |
| removed | -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `addConstantUtf8Reference(int, String)`   | `jdk.internal.org.objectweb.asm.SymbolTable` |
| removed | -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `hashCode()`                              | `java.lang.invoke.MemberName`                |
| removed | -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `transferTo(OutputStream)`                | `java.io.InputStream`                        |
| removed | -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `<init>(int)`                             | `jdk.internal.org.objectweb.asm.ByteVector`  |
| removed | -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `initCEN(int, ZipCoder)`                  | `java.util.zip.ZipFile$Source`               |

##### Ours

|  Change |          Delta |            % |                Size |       Samples | Function                             | Location                                                   |
| ------: | -------------: | -----------: | ------------------: | ------------: | ------------------------------------ | ---------------------------------------------------------- |
|   -2.3% |    -38.999 MiB |  4.6% → 4.5% | 1.68 GiB → 1.65 GiB | 3,447 → 3,369 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -14.5% |    -16.999 MiB |         0.3% |   117 MiB → 100 MiB |     234 → 200 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -13.0% |     -2.999 MiB |         0.1% |     23 MiB → 20 MiB |       46 → 40 | `lambda$generateData$4(int)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -42.9% |     -2.999 MiB |        <0.1% |       7 MiB → 4 MiB |        14 → 8 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|   -0.6% | -1,023.998 KiB |         0.4% |   165 MiB → 164 MiB |     330 → 328 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -0.5% |   -511.999 KiB |         0.3% |   110 MiB → 109 MiB |     220 → 219 | `lambda$merge$6(List, List)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |   -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |         1 → 0 | `average(List)`                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -50.0% |   -511.999 KiB |        <0.1% |     1 MiB → 512 KiB |         2 → 1 | `collectGarbage(String)`             | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`   |
|  -50.0% |   -511.999 KiB |        <0.1% |     1 MiB → 512 KiB |         2 → 1 | `div(double[], int)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| removed |   -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |         1 → 0 | `<init>(JavaKMeans, Map)`            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |               Size |   Samples | Location                                                       |
| -----: | ----------: | -----: | -----------------: | --------: | -------------------------------------------------------------- |
| +35.3% | +26.999 MiB | 100.0% | 76.5 MiB → 103 MiB | 153 → 207 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:209` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

| Change |       Delta |      % |              Size |   Samples | Location                 |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------ |
| +10.9% | +25.999 MiB | 100.0% | 239 MiB → 265 MiB | 479 → 531 | `java.util.HashMap:1909` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |              Size |   Samples | Location                                                       |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------------------------------------------------- |
| +17.5% | +21.999 MiB | 100.0% | 125 MiB → 147 MiB | 251 → 295 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261` |

##### `valueOf(double)` (`java.lang.Double`)

| Change |       Delta |      % |              Size |   Samples | Location               |
| -----: | ----------: | -----: | ----------------: | --------: | ---------------------- |
| +24.8% | +13.499 MiB | 100.0% | 54.5 MiB → 68 MiB | 109 → 136 | `java.lang.Double:773` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |            Size |   Samples | Location                                                      |
| -----: | ----------: | -----: | --------------: | --------: | ------------------------------------------------------------- |
| +14.8% | +11.999 MiB | 100.0% | 81 MiB → 93 MiB | 162 → 186 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:430` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |      Delta |      % |            Size |   Samples | Location                                                      |
| -----: | ---------: | -----: | --------------: | --------: | ------------------------------------------------------------- |
| +11.8% | +9.999 MiB | 100.0% | 85 MiB → 95 MiB | 170 → 190 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |      Delta |      % |              Size |   Samples | Location                  |
| -----: | ---------: | -----: | ----------------: | --------: | ------------------------- |
|  +4.0% | +8.999 MiB | 100.0% | 225 MiB → 234 MiB | 451 → 469 | `java.util.ArrayList:239` |

##### `resize()` (`java.util.HashMap`)

| Change |      Delta |      % |              Size |   Samples | Location                |
| -----: | ---------: | -----: | ----------------: | --------: | ----------------------- |
|  +5.3% | +5.499 MiB | 100.0% | 104 MiB → 110 MiB | 209 → 220 | `java.util.HashMap:710` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |      Delta |      % |              Size |   Samples | Location                                        |
| -----: | ---------: | -----: | ----------------: | --------: | ----------------------------------------------- |
|  +7.0% | +4.499 MiB | 100.0% | 64 MiB → 68.5 MiB | 128 → 137 | `org.renaissance.jdk.concurrent.JavaKMeans:110` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|  Change |      Delta |      % |            Size | Samples | Location                                |
| ------: | ---------: | -----: | --------------: | ------: | --------------------------------------- |
| +700.0% | +3.499 MiB | 100.0% | 512 KiB → 4 MiB |   1 → 8 | `java.util.concurrent.ForkJoinTask:437` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

| Change |      Delta |      % |              Size | Samples | Location                |
| -----: | ---------: | -----: | ----------------: | ------: | ----------------------- |
| +31.8% | +3.499 MiB | 100.0% | 11 MiB → 14.5 MiB | 22 → 29 | `java.util.Arrays:3541` |

##### `<init>(InputStream, Inflater, int)` (`java.util.zip.InflaterInputStream`)

| Change |      Delta |      % |            Size | Samples | Location                               |
| -----: | ---------: | -----: | --------------: | ------: | -------------------------------------- |
| +71.4% | +2.499 MiB | 100.0% | 3.5 MiB → 6 MiB |  7 → 12 | `java.util.zip.InflaterInputStream:89` |

##### `mapToObj(IntFunction, int)` (`java.util.stream.IntPipeline`)

| Change |      Delta |      % |              Size | Samples | Location                           |
| -----: | ---------: | -----: | ----------------: | ------: | ---------------------------------- |
|  +9.1% | +2.499 MiB | 100.0% | 27.5 MiB → 30 MiB | 55 → 60 | `java.util.stream.IntPipeline:174` |

##### `entrySet()` (`java.util.HashMap`)

| Change |      Delta |      % |              Size | Samples | Location                 |
| -----: | ---------: | -----: | ----------------: | ------: | ------------------------ |
| +11.1% | +1.499 MiB | 100.0% | 13.5 MiB → 15 MiB | 27 → 30 | `java.util.HashMap:1099` |

##### `opWrapSink(int, Sink)` (`java.util.stream.DoublePipeline$1`)

| Change |      Delta |             % |          Size | Samples | Location                                |
| -----: | ---------: | ------------: | ------------: | ------: | --------------------------------------- |
|    new | +1.499 MiB | 0.0% → 100.0% | 0 B → 1.5 MiB |   0 → 3 | `java.util.stream.DoublePipeline$1:173` |

##### `spliterator(double[], int, int, int)` (`java.util.Spliterators`)

| Change |      Delta |             % |          Size | Samples | Location                     |
| -----: | ---------: | ------------: | ------------: | ------: | ---------------------------- |
|    new | +1.499 MiB | 0.0% → 100.0% | 0 B → 1.5 MiB |   0 → 3 | `java.util.Spliterators:372` |

##### `opWrapSink(int, Sink)` (`java.util.stream.IntPipeline$1`)

| Change |          Delta |      % |           Size | Samples | Location                             |
| -----: | -------------: | -----: | -------------: | ------: | ------------------------------------ |
| +11.1% | +1,023.998 KiB | 100.0% | 9 MiB → 10 MiB | 18 → 20 | `java.util.stream.IntPipeline$1:177` |

##### `enlarge(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

| Change |          Delta |             % |        Size | Samples | Location                                        |
| -----: | -------------: | ------------: | ----------: | ------: | ----------------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `jdk.internal.org.objectweb.asm.ByteVector:401` |

##### `doubleStream(Spliterator$OfDouble, boolean)` (`java.util.stream.StreamSupport`)

| Change |          Delta |             % |        Size | Samples | Location                             |
| -----: | -------------: | ------------: | ----------: | ------: | ------------------------------------ |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `java.util.stream.StreamSupport:274` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

| Change |        Delta |      % |                Size | Samples | Location                |
| -----: | -----------: | -----: | ------------------: | ------: | ----------------------- |
|  +5.1% | +754.434 KiB | 100.0% | 14.4 MiB → 15.1 MiB | 23 → 26 | `java.util.Arrays:3513` |

##### `getBytes()` (`jdk.internal.loader.Resource`)

| Change |        Delta |             % |          Size | Samples | Location                           |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `jdk.internal.loader.Resource:109` |

##### `findClass(String)` (`java.net.URLClassLoader`)

| Change |        Delta |             % |          Size | Samples | Location                      |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `java.net.URLClassLoader:420` |

##### `loadClass(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

| Change |        Delta |             % |          Size | Samples | Location                                     |
| -----: | -----------: | ------------: | ------------: | ------: | -------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `jdk.internal.loader.BuiltinClassLoader:641` |

##### `checkResource(String, boolean, JarEntry)` (`jdk.internal.loader.URLClassPath$JarLoader`)

| Change |        Delta |             % |          Size | Samples | Location                                         |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------ |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `jdk.internal.loader.URLClassPath$JarLoader:857` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |        Delta |      % |            Size | Samples | Location                                                   |
| -----: | -----------: | -----: | --------------: | ------: | ---------------------------------------------------------- |
|  +9.1% | +511.999 KiB | 100.0% | 5.5 MiB → 6 MiB | 11 → 12 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:314` |

##### `lambda$boxed$0(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |        Delta |      % |            Size | Samples | Location                                                   |
| -----: | -----------: | -----: | --------------: | ------: | ---------------------------------------------------------- |
| +50.0% | +511.999 KiB | 100.0% | 1 MiB → 1.5 MiB |   2 → 3 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:327` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |       Delta |      % |                Size |         Samples | Location                |
| -----: | ----------: | -----: | ------------------: | --------------: | ----------------------- |
|  -0.2% | -58.895 MiB | 100.0% | 33.6 GiB → 33.5 GiB | 68,436 → 68,314 | `java.util.Arrays:3482` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |                Size |       Samples | Location                                                       |
| -----: | ----------: | -----: | ------------------: | ------------: | -------------------------------------------------------------- |
|  -2.3% | -38.999 MiB | 100.0% | 1.68 GiB → 1.65 GiB | 3,447 → 3,369 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:223` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |              Size |   Samples | Location                                                       |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------------------------------------------------- |
| -14.5% | -16.999 MiB | 100.0% | 117 MiB → 100 MiB | 234 → 200 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |

##### `range(int, int)` (`java.util.stream.IntStream`)

| Change |      Delta |      % |             Size | Samples | Location                          |
| -----: | ---------: | -----: | ---------------: | ------: | --------------------------------- |
| -33.3% | -3.499 MiB | 100.0% | 10.5 MiB → 7 MiB | 21 → 14 | `java.util.stream.IntStream:1083` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |      Delta |      % |            Size | Samples | Location                                       |
| -----: | ---------: | -----: | --------------: | ------: | ---------------------------------------------- |
| -13.0% | -2.999 MiB | 100.0% | 23 MiB → 20 MiB | 46 → 40 | `org.renaissance.jdk.concurrent.JavaKMeans:87` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |      Delta |      % |          Size | Samples | Location                                                   |
| -----: | ---------: | -----: | ------------: | ------: | ---------------------------------------------------------- |
| -42.9% | -2.999 MiB | 100.0% | 7 MiB → 4 MiB |  14 → 8 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:352` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

| Change |      Delta |      % |             Size | Samples | Location                                  |
| -----: | ---------: | -----: | ---------------: | ------: | ----------------------------------------- |
| -22.7% | -2.499 MiB | 100.0% | 11 MiB → 8.5 MiB | 22 → 17 | `java.lang.invoke.DirectMethodHandle:501` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

| Change |      Delta |      % |            Size | Samples | Location                     |
| -----: | ---------: | -----: | --------------: | ------: | ---------------------------- |
| -14.3% | -1.999 MiB | 100.0% | 14 MiB → 12 MiB | 28 → 24 | `java.util.stream.Nodes:168` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |          Delta |      % |              Size |   Samples | Location                                                      |
| -----: | -------------: | -----: | ----------------: | --------: | ------------------------------------------------------------- |
|  -0.6% | -1,023.998 KiB | 100.0% | 165 MiB → 164 MiB | 330 → 328 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |      % |              Size |   Samples | Location                                        |
| -----: | -----------: | -----: | ----------------: | --------: | ----------------------------------------------- |
|  -0.5% | -511.999 KiB | 100.0% | 110 MiB → 109 MiB | 220 → 219 | `org.renaissance.jdk.concurrent.JavaKMeans:114` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |        Delta |             % |          Size | Samples | Location                                                   |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:332` |

##### `read(InputStream, String)` (`java.util.jar.Manifest`)

|  Change |        Delta |             % |          Size | Samples | Location                     |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `java.util.jar.Manifest:345` |

##### `newLinkedHashMap(int)` (`java.util.LinkedHashMap`)

|  Change |        Delta |             % |          Size | Samples | Location                       |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------ |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `java.util.LinkedHashMap:1078` |

##### `<init>(int)` (`java.lang.AbstractStringBuilder`)

|  Change |        Delta |             % |          Size | Samples | Location                              |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `java.lang.AbstractStringBuilder:101` |

##### `makePreparedLambdaForm(MethodType, int)` (`java.lang.invoke.DirectMethodHandle`)

|  Change |        Delta |             % |          Size | Samples | Location                                  |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `java.lang.invoke.DirectMethodHandle:259` |

##### `addConstantUtf8Reference(int, String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|  Change |        Delta |             % |          Size | Samples | Location                                          |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `jdk.internal.org.objectweb.asm.SymbolTable:1040` |

##### `hashCode()` (`java.lang.invoke.MemberName`)

|  Change |        Delta |             % |          Size | Samples | Location                          |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `java.lang.invoke.MemberName:723` |

##### `transferTo(OutputStream)` (`java.io.InputStream`)

|  Change |        Delta |             % |          Size | Samples | Location                  |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `java.io.InputStream:794` |

##### `<init>(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

|  Change |        Delta |             % |          Size | Samples | Location                                       |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `jdk.internal.org.objectweb.asm.ByteVector:87` |

##### `collectGarbage(String)` (`org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`)

| Change |        Delta |      % |            Size | Samples | Location                                                    |
| -----: | -----------: | -----: | --------------: | ------: | ----------------------------------------------------------- |
| -50.0% | -511.999 KiB | 100.0% | 1 MiB → 512 KiB |   2 → 1 | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin:26` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|  Change |        Delta |             % |          Size | Samples | Location                            |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `java.util.zip.ZipFile$Source:1733` |

##### `div(double[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |        Delta |      % |            Size | Samples | Location                                                   |
| -----: | -----------: | -----: | --------------: | ------: | ---------------------------------------------------------- |
| -50.0% | -511.999 KiB | 100.0% | 1 MiB → 512 KiB |   2 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:339` |

##### `<init>(JavaKMeans, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |        Delta |             % |          Size | Samples | Location                                                   |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:282` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |               Size |   Samples | Caller              | Location                                                   |
| -----: | ----------: | -----: | -----------------: | --------: | ------------------- | ---------------------------------------------------------- |
| +35.3% | +26.999 MiB | 100.0% | 76.5 MiB → 103 MiB | 153 → 207 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

| Change |        Delta |             % |              Size |   Samples | Caller                                          | Location            |
| -----: | -----------: | ------------: | ----------------: | --------: | ----------------------------------------------- | ------------------- |
| +16.8% |  +19.499 MiB | 48.4% → 51.0% | 116 MiB → 135 MiB | 232 → 271 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |
|  +5.7% |   +6.999 MiB | 51.1% → 48.8% | 122 MiB → 129 MiB | 245 → 259 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |
| -50.0% | -511.999 KiB |   0.4% → 0.2% |   1 MiB → 512 KiB |     2 → 1 | `merge(Object, Object, BiFunction)`             | `java.util.HashMap` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |              Size |   Samples | Caller      | Location                                               |
| -----: | ----------: | -----: | ----------------: | --------: | ----------- | ------------------------------------------------------ |
| +17.5% | +21.999 MiB | 100.0% | 125 MiB → 147 MiB | 251 → 295 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `valueOf(double)` (`java.lang.Double`)

|  Change |          Delta |             % |              Size |   Samples | Caller                                           | Location                                                     |
| ------: | -------------: | ------------: | ----------------: | --------: | ------------------------------------------------ | ------------------------------------------------------------ |
|  +23.1% |    +12.499 MiB | 99.1% → 97.8% | 54 MiB → 66.5 MiB | 108 → 133 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                  |
| +200.0% | +1,023.998 KiB |   0.9% → 2.2% | 512 KiB → 1.5 MiB |     1 → 3 | `apply(double)`                                  | `java.util.stream.DoublePipeline$$Lambda.0x00000070011c2320` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |            Size |   Samples | Caller                               | Location                                                  |
| -----: | ----------: | -----: | --------------: | --------: | ------------------------------------ | --------------------------------------------------------- |
| +14.8% | +11.999 MiB | 100.0% | 81 MiB → 93 MiB | 162 → 186 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |      Delta |      % |            Size |   Samples | Caller              | Location                                                  |
| -----: | ---------: | -----: | --------------: | --------: | ------------------- | --------------------------------------------------------- |
| +11.8% | +9.999 MiB | 100.0% | 85 MiB → 95 MiB | 170 → 190 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |      Delta |      % |              Size |   Samples | Caller   | Location              |
| -----: | ---------: | -----: | ----------------: | --------: | -------- | --------------------- |
|  +4.0% | +8.999 MiB | 100.0% | 225 MiB → 234 MiB | 451 → 469 | `grow()` | `java.util.ArrayList` |

##### `resize()` (`java.util.HashMap`)

| Change |        Delta |             % |              Size |   Samples | Caller                                          | Location            |
| -----: | -----------: | ------------: | ----------------: | --------: | ----------------------------------------------- | ------------------- |
|  +9.4% |   +5.999 MiB | 61.2% → 63.6% |   64 MiB → 70 MiB | 128 → 140 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |
|  -1.2% | -511.999 KiB | 38.8% → 36.4% | 40.5 MiB → 40 MiB |   81 → 80 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |          Delta |             % |              Size |   Samples | Caller                     | Location                                                   |
| -----: | -------------: | ------------: | ----------------: | --------: | -------------------------- | ---------------------------------------------------------- |
|  +8.8% |     +5.499 MiB | 97.7% → 99.3% | 62.5 MiB → 68 MiB | 125 → 136 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -66.7% | -1,023.998 KiB |   2.3% → 0.7% | 1.5 MiB → 512 KiB |     3 → 1 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|  Change |      Delta |      % |            Size | Samples | Caller   | Location                            |
| ------: | ---------: | -----: | --------------: | ------: | -------- | ----------------------------------- |
| +700.0% | +3.499 MiB | 100.0% | 512 KiB → 4 MiB |   1 → 8 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|  Change |          Delta |             % |              Size | Samples | Caller                        | Location                          |
| ------: | -------------: | ------------: | ----------------: | ------: | ----------------------------- | --------------------------------- |
|  +14.3% |     +1.499 MiB | 95.5% → 82.8% | 10.5 MiB → 12 MiB | 21 → 24 | `getBytes()`                  | `jdk.internal.loader.Resource`    |
| +200.0% | +1,023.998 KiB |  4.5% → 10.3% | 512 KiB → 1.5 MiB |   1 → 3 | `ensureCapacityInternal(int)` | `java.lang.AbstractStringBuilder` |
|     new | +1,023.998 KiB |   0.0% → 6.9% |       0 B → 1 MiB |   0 → 2 | `ensureCapacity(int)`         | `java.io.ByteArrayOutputStream`   |

##### `<init>(InputStream, Inflater, int)` (`java.util.zip.InflaterInputStream`)

| Change |      Delta |      % |            Size | Samples | Caller                                                                                  | Location                                           |
| -----: | ---------: | -----: | --------------: | ------: | --------------------------------------------------------------------------------------- | -------------------------------------------------- |
| +71.4% | +2.499 MiB | 100.0% | 3.5 MiB → 6 MiB |  7 → 12 | `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, Inflater, int)` | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |

##### `allocateInstance(Class)` (`jdk.internal.misc.Unsafe`)

|  Change |      Delta |      % |            Size | Samples | Caller                     | Location                              |
| ------: | ---------: | -----: | --------------: | ------: | -------------------------- | ------------------------------------- |
| +125.0% | +2.499 MiB | 100.0% | 2 MiB → 4.5 MiB |   4 → 9 | `allocateInstance(Object)` | `java.lang.invoke.DirectMethodHandle` |

##### `mapToObj(IntFunction, int)` (`java.util.stream.IntPipeline`)

| Change |      Delta |      % |              Size | Samples | Caller                  | Location                       |
| -----: | ---------: | -----: | ----------------: | ------: | ----------------------- | ------------------------------ |
|  +9.1% | +2.499 MiB | 100.0% | 27.5 MiB → 30 MiB | 55 → 60 | `mapToObj(IntFunction)` | `java.util.stream.IntPipeline` |

##### `entrySet()` (`java.util.HashMap`)

| Change |      Delta |      % |              Size | Samples | Caller                        | Location            |
| -----: | ---------: | -----: | ----------------: | ------: | ----------------------------- | ------------------- |
| +11.1% | +1.499 MiB | 100.0% | 13.5 MiB → 15 MiB | 27 → 30 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `opWrapSink(int, Sink)` (`java.util.stream.DoublePipeline$1`)

| Change |      Delta |             % |          Size | Samples | Caller           | Location                            |
| -----: | ---------: | ------------: | ------------: | ------: | ---------------- | ----------------------------------- |
|    new | +1.499 MiB | 0.0% → 100.0% | 0 B → 1.5 MiB |   0 → 3 | `wrapSink(Sink)` | `java.util.stream.AbstractPipeline` |

##### `spliterator(double[], int, int, int)` (`java.util.Spliterators`)

| Change |      Delta |             % |          Size | Samples | Caller                            | Location           |
| -----: | ---------: | ------------: | ------------: | ------: | --------------------------------- | ------------------ |
|    new | +1.499 MiB | 0.0% → 100.0% | 0 B → 1.5 MiB |   0 → 3 | `spliterator(double[], int, int)` | `java.util.Arrays` |

##### `opWrapSink(int, Sink)` (`java.util.stream.IntPipeline$1`)

| Change |          Delta |      % |           Size | Samples | Caller           | Location                            |
| -----: | -------------: | -----: | -------------: | ------: | ---------------- | ----------------------------------- |
| +11.1% | +1,023.998 KiB | 100.0% | 9 MiB → 10 MiB | 18 → 20 | `wrapSink(Sink)` | `java.util.stream.AbstractPipeline` |

##### `enlarge(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

| Change |          Delta |             % |        Size | Samples | Caller            | Location                                    |
| -----: | -------------: | ------------: | ----------: | ------: | ----------------- | ------------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `putUTF8(String)` | `jdk.internal.org.objectweb.asm.ByteVector` |

##### `doubleStream(Spliterator$OfDouble, boolean)` (`java.util.stream.StreamSupport`)

| Change |          Delta |             % |        Size | Samples | Caller                       | Location           |
| -----: | -------------: | ------------: | ----------: | ------: | ---------------------------- | ------------------ |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `stream(double[], int, int)` | `java.util.Arrays` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

| Change |        Delta |      % |                Size | Samples | Caller                  | Location           |
| -----: | -----------: | -----: | ------------------: | ------: | ----------------------- | ------------------ |
|  +5.1% | +754.434 KiB | 100.0% | 14.4 MiB → 15.1 MiB | 23 → 26 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `getBytes()` (`jdk.internal.loader.Resource`)

| Change |        Delta |             % |          Size | Samples | Caller       | Location                                       |
| -----: | -----------: | ------------: | ------------: | ------: | ------------ | ---------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `getBytes()` | `jdk.internal.loader.URLClassPath$JarLoader$2` |

##### `findClass(String)` (`java.net.URLClassLoader`)

| Change |        Delta |             % |          Size | Samples | Caller                       | Location                |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------------- | ----------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `loadClass(String, boolean)` | `java.lang.ClassLoader` |

##### `loadClass(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

| Change |        Delta |             % |          Size | Samples | Caller                       | Location                                          |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------------- | ------------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `loadClass(String, boolean)` | `jdk.internal.loader.ClassLoaders$AppClassLoader` |

##### `checkResource(String, boolean, JarEntry)` (`jdk.internal.loader.URLClassPath$JarLoader`)

| Change |        Delta |             % |          Size | Samples | Caller                         | Location                                     |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------ | -------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `getResource(String, boolean)` | `jdk.internal.loader.URLClassPath$JarLoader` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |        Delta |      % |            Size | Samples | Caller              | Location                                               |
| -----: | -----------: | -----: | --------------: | ------: | ------------------- | ------------------------------------------------------ |
|  +9.1% | +511.999 KiB | 100.0% | 5.5 MiB → 6 MiB | 11 → 12 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `lambda$boxed$0(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |        Delta |      % |            Size | Samples | Caller       | Location                                                                          |
| -----: | -----------: | -----: | --------------: | ------: | ------------ | --------------------------------------------------------------------------------- |
| +50.0% | +511.999 KiB | 100.0% | 1 MiB → 1.5 MiB |   2 → 3 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask$$Lambda.0x00000070011a7c10` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |       Delta |             % |                Size |         Samples | Caller      | Location              |
| -----: | ----------: | ------------: | ------------------: | --------------: | ----------- | --------------------- |
|  -0.3% | -66.395 MiB | 57.2% → 57.1% | 19.2 GiB → 19.1 GiB | 38,989 → 38,852 | `grow(int)` | `java.util.ArrayList` |
|  +0.1% |  +7.499 MiB | 42.8% → 42.9% |            14.4 GiB | 29,447 → 29,462 | `toArray()` | `java.util.ArrayList` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |                Size |       Samples | Caller              | Location                                                   |
| -----: | ----------: | -----: | ------------------: | ------------: | ------------------- | ---------------------------------------------------------- |
|  -2.3% | -38.999 MiB | 100.0% | 1.68 GiB → 1.65 GiB | 3,447 → 3,369 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |              Size |   Samples | Caller          | Location                                                                              |
| -----: | ----------: | -----: | ----------------: | --------: | --------------- | ------------------------------------------------------------------------------------- |
| -14.5% | -16.999 MiB | 100.0% | 117 MiB → 100 MiB | 234 → 200 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011a3940` |

##### `range(int, int)` (`java.util.stream.IntStream`)

| Change |      Delta |      % |             Size | Samples | Caller                                           | Location                                    |
| -----: | ---------: | -----: | ---------------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| -33.3% | -3.499 MiB | 100.0% | 10.5 MiB → 7 MiB | 21 → 14 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |      Delta |      % |            Size | Samples | Caller       | Location                                            |
| -----: | ---------: | -----: | --------------: | ------: | ------------ | --------------------------------------------------- |
| -13.0% | -2.999 MiB | 100.0% | 23 MiB → 20 MiB | 46 → 40 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |      Delta |      % |          Size | Samples | Caller      | Location                                               |
| -----: | ---------: | -----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
| -42.9% | -2.999 MiB | 100.0% | 7 MiB → 4 MiB |  14 → 8 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

| Change |      Delta |      % |             Size | Samples | Caller                                       | Location                                             |
| -----: | ---------: | -----: | ---------------: | ------: | -------------------------------------------- | ---------------------------------------------------- |
| -22.7% | -2.499 MiB | 100.0% | 11 MiB → 8.5 MiB | 22 → 17 | `newInvokeSpecial(Object, int, int, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070011a4400` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

| Change |      Delta |      % |            Size | Samples | Caller                               | Location                             |
| -----: | ---------: | -----: | --------------: | ------: | ------------------------------------ | ------------------------------------ |
| -14.3% | -1.999 MiB | 100.0% | 14 MiB → 12 MiB | 28 → 24 | `makeNodeBuilder(long, IntFunction)` | `java.util.stream.ReferencePipeline` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |          Delta |      % |              Size |   Samples | Caller      | Location                                               |
| -----: | -------------: | -----: | ----------------: | --------: | ----------- | ------------------------------------------------------ |
|  -0.6% | -1,023.998 KiB | 100.0% | 165 MiB → 164 MiB | 330 → 328 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |      % |              Size |   Samples | Caller                  | Location                                                               |
| -----: | -----------: | -----: | ----------------: | --------: | ----------------------- | ---------------------------------------------------------------------- |
|  -0.5% | -511.999 KiB | 100.0% | 110 MiB → 109 MiB | 220 → 219 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7490` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |        Delta |             % |          Size | Samples | Caller                     | Location                                               |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------------- | ------------------------------------------------------ |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `read(InputStream, String)` (`java.util.jar.Manifest`)

|  Change |        Delta |             % |          Size | Samples | Caller                                     | Location                 |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------------ | ------------------------ |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `<init>(JarVerifier, InputStream, String)` | `java.util.jar.Manifest` |

##### `newLinkedHashMap(int)` (`java.util.LinkedHashMap`)

|  Change |        Delta |             % |          Size | Samples | Caller        | Location                   |
| ------: | -----------: | ------------: | ------------: | ------: | ------------- | -------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `<init>(int)` | `java.util.jar.Attributes` |

##### `<init>(int)` (`java.lang.AbstractStringBuilder`)

|  Change |        Delta |             % |          Size | Samples | Caller     | Location                  |
| ------: | -----------: | ------------: | ------------: | ------: | ---------- | ------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `<init>()` | `java.lang.StringBuilder` |

##### `makePreparedLambdaForm(MethodType, int)` (`java.lang.invoke.DirectMethodHandle`)

|  Change |        Delta |             % |          Size | Samples | Caller                                | Location                              |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------- | ------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `preparedLambdaForm(MethodType, int)` | `java.lang.invoke.DirectMethodHandle` |

##### `addConstantUtf8Reference(int, String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|  Change |        Delta |             % |          Size | Samples | Caller                      | Location                                     |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------- | -------------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `addConstantString(String)` | `jdk.internal.org.objectweb.asm.SymbolTable` |

##### `hashCode()` (`java.lang.invoke.MemberName`)

|  Change |        Delta |             % |          Size | Samples | Caller        | Location                                 |
| ------: | -----------: | ------------: | ------------: | ------: | ------------- | ---------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `get(Object)` | `java.util.concurrent.ConcurrentHashMap` |

##### `transferTo(OutputStream)` (`java.io.InputStream`)

|  Change |        Delta |             % |          Size | Samples | Caller                                  | Location              |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------------------- | --------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `copy(InputStream, Path, CopyOption[])` | `java.nio.file.Files` |

##### `<init>(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

|  Change |        Delta |             % |          Size | Samples | Caller          | Location                                     |
| ------: | -----------: | ------------: | ------------: | ------: | --------------- | -------------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `toByteArray()` | `jdk.internal.org.objectweb.asm.ClassWriter` |

##### `collectGarbage(String)` (`org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`)

| Change |        Delta |      % |            Size | Samples | Caller                                      | Location                                                 |
| -----: | -----------: | -----: | --------------: | ------: | ------------------------------------------- | -------------------------------------------------------- |
| -50.0% | -511.999 KiB | 100.0% | 1 MiB → 512 KiB |   2 → 1 | `afterOperationSetUp(String, int, boolean)` | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|  Change |        Delta |             % |          Size | Samples | Caller                                          | Location                       |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------------------------------- | ------------------------------ |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `div(double[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |        Delta |      % |            Size | Samples | Caller          | Location                                               |
| -----: | -----------: | -----: | --------------: | ------: | --------------- | ------------------------------------------------------ |
| -50.0% | -511.999 KiB | 100.0% | 1 MiB → 512 KiB |   2 → 1 | `average(List)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `<init>(JavaKMeans, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |        Delta |             % |          Size | Samples | Caller                         | Location                                    |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------ | ------------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

### Total size

#### Regressions

Functions with the largest increase in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

| Change |        Delta |             % |                Size |         Samples | Function                                                                                                               | Location                                                   |
| -----: | -----------: | ------------: | ------------------: | --------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|  +9.8% | +530.498 MiB | 14.3% → 15.7% | 5.26 GiB → 5.78 GiB | 10,781 → 11,842 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`                                                              | `java.util.concurrent.ForkJoinPool`                        |
|    new | +203.586 MiB |   0.0% → 0.5% |       0 B → 204 MiB |         0 → 403 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                |
| +10.9% |  +25.999 MiB |   0.6% → 0.7% |   239 MiB → 265 MiB |       479 → 531 | `newNode(int, Object, Object, HashMap$Node)`                                                                           | `java.util.HashMap`                                        |
|  +0.1% |  +23.604 MiB |         76.3% |            28.1 GiB | 57,279 → 57,322 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +0.1% |  +23.604 MiB |         76.3% |            28.1 GiB | 57,279 → 57,322 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +17.5% |  +21.999 MiB |   0.3% → 0.4% |   125 MiB → 147 MiB |       251 → 295 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +0.1% |  +21.104 MiB |         76.3% |            28.1 GiB | 57,286 → 57,324 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  +9.1% |  +19.999 MiB |          0.6% |   220 MiB → 240 MiB |       441 → 481 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  +9.1% |  +19.999 MiB |          0.6% |   220 MiB → 240 MiB |       441 → 481 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  +0.1% |  +17.104 MiB |         56.5% |            20.8 GiB | 42,353 → 42,383 | `addAll(Collection)`                                                                                                   | `java.util.ArrayList`                                      |
|  +8.6% |  +15.736 MiB |          0.5% |   183 MiB → 199 MiB |       360 → 393 | `wrapAndCopyInto(Sink, Spliterator)`                                                                                   | `java.util.stream.AbstractPipeline`                        |
|  +7.3% |  +15.236 MiB |   0.5% → 0.6% |   207 MiB → 223 MiB |       409 → 441 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                            |
|  +7.3% |  +15.236 MiB |   0.5% → 0.6% |   207 MiB → 223 MiB |       409 → 441 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                            |
|  +7.4% |  +15.236 MiB |   0.5% → 0.6% |   207 MiB → 222 MiB |       408 → 440 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                 |
|  +7.4% |  +15.236 MiB |   0.5% → 0.6% |   207 MiB → 222 MiB |       408 → 440 | `invokeStatic(Object, Object)`                                                                                         | `java.lang.invoke.LambdaForm$DMH.0x0000007001004800`       |
|  +7.4% |  +15.236 MiB |   0.5% → 0.6% |   207 MiB → 222 MiB |       408 → 440 | `invoke(Object, Object, Object)`                                                                                       | `java.lang.invoke.LambdaForm$MH.0x0000007001009800`        |
|  +7.4% |  +15.236 MiB |   0.5% → 0.6% |   207 MiB → 222 MiB |       408 → 440 | `invokeExact_MT(Object, Object, Object, Object)`                                                                       | `java.lang.invoke.Invokers$Holder`                         |
|  +7.4% |  +15.236 MiB |   0.5% → 0.6% |   207 MiB → 222 MiB |       408 → 440 | `invokeImpl(Object, Object[])`                                                                                         | `jdk.internal.reflect.DirectMethodHandleAccessor`          |
|  +7.4% |  +15.236 MiB |   0.5% → 0.6% |   207 MiB → 222 MiB |       408 → 440 | `invoke(Object, Object[])`                                                                                             | `jdk.internal.reflect.DirectMethodHandleAccessor`          |
|  +7.4% |  +15.236 MiB |   0.5% → 0.6% |   207 MiB → 222 MiB |       408 → 440 | `invoke(Object, Object[])`                                                                                             | `java.lang.reflect.Method`                                 |

##### Standard library

| Change |        Delta |             % |                Size |         Samples | Function                                                  | Location                                             |
| -----: | -----------: | ------------: | ------------------: | --------------: | --------------------------------------------------------- | ---------------------------------------------------- |
|  +9.8% | +530.498 MiB | 14.3% → 15.7% | 5.26 GiB → 5.78 GiB | 10,781 → 11,842 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                  |
| +10.9% |  +25.999 MiB |   0.6% → 0.7% |   239 MiB → 265 MiB |       479 → 531 | `newNode(int, Object, Object, HashMap$Node)`              | `java.util.HashMap`                                  |
|  +0.1% |  +17.104 MiB |         56.5% |            20.8 GiB | 42,353 → 42,383 | `addAll(Collection)`                                      | `java.util.ArrayList`                                |
|  +8.6% |  +15.736 MiB |          0.5% |   183 MiB → 199 MiB |       360 → 393 | `wrapAndCopyInto(Sink, Spliterator)`                      | `java.util.stream.AbstractPipeline`                  |
|  +7.4% |  +15.236 MiB |   0.5% → 0.6% |   207 MiB → 222 MiB |       408 → 440 | `invokeStatic(Object, Object)`                            | `java.lang.invoke.LambdaForm$DMH.0x0000007001004800` |
|  +7.4% |  +15.236 MiB |   0.5% → 0.6% |   207 MiB → 222 MiB |       408 → 440 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000007001009800`  |
|  +7.4% |  +15.236 MiB |   0.5% → 0.6% |   207 MiB → 222 MiB |       408 → 440 | `invokeExact_MT(Object, Object, Object, Object)`          | `java.lang.invoke.Invokers$Holder`                   |
|  +7.4% |  +15.236 MiB |   0.5% → 0.6% |   207 MiB → 222 MiB |       408 → 440 | `invokeImpl(Object, Object[])`                            | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +7.4% |  +15.236 MiB |   0.5% → 0.6% |   207 MiB → 222 MiB |       408 → 440 | `invoke(Object, Object[])`                                | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +7.4% |  +15.236 MiB |   0.5% → 0.6% |   207 MiB → 222 MiB |       408 → 440 | `invoke(Object, Object[])`                                | `java.lang.reflect.Method`                           |
|  +7.8% |  +14.236 MiB |          0.5% |   183 MiB → 197 MiB |       360 → 390 | `copyInto(Sink, Spliterator)`                             | `java.util.stream.AbstractPipeline`                  |
| +24.8% |  +13.499 MiB |   0.1% → 0.2% |   54.5 MiB → 68 MiB |       109 → 136 | `valueOf(double)`                                         | `java.lang.Double`                                   |
|  +7.3% |  +13.236 MiB |          0.5% |   182 MiB → 196 MiB |       359 → 387 | `evaluateSequential(PipelineHelper, Spliterator)`         | `java.util.stream.ReduceOps$ReduceOp`                |
|  +7.3% |  +13.236 MiB |          0.5% |   182 MiB → 196 MiB |       359 → 387 | `evaluate(TerminalOp)`                                    | `java.util.stream.AbstractPipeline`                  |
|  +7.3% |  +13.236 MiB |          0.5% |   182 MiB → 196 MiB |       359 → 387 | `collect(Collector)`                                      | `java.util.stream.ReferencePipeline`                 |
|  +6.1% |  +11.736 MiB |          0.5% |   192 MiB → 204 MiB |       378 → 403 | `apply(Object)`                                           | `scala.runtime.function.JProcedure1`                 |
|  +6.1% |  +11.736 MiB |          0.5% |   192 MiB → 204 MiB |       378 → 403 | `foreach(Function1)`                                      | `scala.collection.immutable.List`                    |
| +11.3% |  +11.499 MiB |          0.3% |   101 MiB → 113 MiB |       203 → 226 | `evaluate(Spliterator, boolean, IntFunction)`             | `java.util.stream.AbstractPipeline`                  |
| +11.3% |  +11.499 MiB |          0.3% |   101 MiB → 113 MiB |       203 → 226 | `evaluateToArrayNode(IntFunction)`                        | `java.util.stream.AbstractPipeline`                  |
| +11.3% |  +11.499 MiB |          0.3% |   101 MiB → 113 MiB |       203 → 226 | `toArray(IntFunction)`                                    | `java.util.stream.ReferencePipeline`                 |

##### Ours

| Change |        Delta |           % |              Size |         Samples | Function                                                                                                               | Location                                                               |
| -----: | -----------: | ----------: | ----------------: | --------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|    new | +203.586 MiB | 0.0% → 0.5% |     0 B → 204 MiB |         0 → 403 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +0.1% |  +23.604 MiB |       76.3% |          28.1 GiB | 57,279 → 57,322 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  +0.1% |  +23.604 MiB |       76.3% |          28.1 GiB | 57,279 → 57,322 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| +17.5% |  +21.999 MiB | 0.3% → 0.4% | 125 MiB → 147 MiB |       251 → 295 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  +0.1% |  +21.104 MiB |       76.3% |          28.1 GiB | 57,286 → 57,324 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +9.1% |  +19.999 MiB |        0.6% | 220 MiB → 240 MiB |       441 → 481 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  +9.1% |  +19.999 MiB |        0.6% | 220 MiB → 240 MiB |       441 → 481 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  +7.3% |  +15.236 MiB | 0.5% → 0.6% | 207 MiB → 223 MiB |       409 → 441 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
|  +7.3% |  +15.236 MiB | 0.5% → 0.6% | 207 MiB → 223 MiB |       409 → 441 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
|  +7.4% |  +15.236 MiB | 0.5% → 0.6% | 207 MiB → 222 MiB |       408 → 440 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|  +7.4% |  +15.236 MiB | 0.5% → 0.6% | 207 MiB → 222 MiB |       408 → 440 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
|  +7.0% |  +14.236 MiB | 0.5% → 0.6% | 203 MiB → 218 MiB |       401 → 431 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +7.5% |  +13.736 MiB |        0.5% | 183 MiB → 197 MiB |       360 → 389 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  +6.0% |  +12.499 MiB |        0.6% | 210 MiB → 222 MiB |       420 → 445 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| +23.1% |  +12.499 MiB | 0.1% → 0.2% | 54 MiB → 66.5 MiB |       108 → 133 | `lambda$generateData$3(int, int, Random[], int)`                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +6.4% |  +12.236 MiB |        0.5% | 192 MiB → 204 MiB |       378 → 404 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
| +14.8% |  +11.999 MiB |        0.2% |   81 MiB → 93 MiB |       162 → 186 | `add(double[], double[])`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| +14.8% |  +11.999 MiB |        0.2% |   81 MiB → 93 MiB |       162 → 186 | `combineResults(double[], double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| +14.8% |  +11.999 MiB |        0.2% |   81 MiB → 93 MiB |       162 → 186 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  +6.1% |  +11.736 MiB |        0.5% | 192 MiB → 204 MiB |       378 → 403 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111f1b8` |

#### Improvements

Functions with the largest decrease in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |        Delta |             % |                Size |         Samples | Function                                                                                                               | Location                                                                              |
| ------: | -----------: | ------------: | ------------------: | --------------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|   -9.8% | -843.393 MiB | 22.8% → 20.6% | 8.42 GiB → 7.59 GiB | 16,932 → 15,241 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|   -9.8% | -843.393 MiB | 22.8% → 20.6% | 8.42 GiB → 7.59 GiB | 16,932 → 15,241 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`                |
|   -9.8% | -843.393 MiB | 22.8% → 20.6% | 8.42 GiB → 7.59 GiB | 16,932 → 15,241 | `exec()`                                                                                                               | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                                   |
|   -9.2% | -806.393 MiB | 23.3% → 21.1% | 8.58 GiB → 7.79 GiB | 17,254 → 15,637 | `invoke()`                                                                                                             | `java.util.concurrent.ForkJoinTask`                                                   |
|   -1.1% | -317.499 MiB | 80.1% → 79.2% | 29.5 GiB → 29.2 GiB | 60,456 → 59,821 | `tryRemoveAndExec(ForkJoinTask, boolean)`                                                                              | `java.util.concurrent.ForkJoinPool$WorkQueue`                                         |
|   -0.7% | -221.499 MiB | 80.8% → 80.2% | 29.8 GiB → 29.6 GiB | 61,003 → 60,560 | `awaitDone(int, long)`                                                                                                 | `java.util.concurrent.ForkJoinTask`                                                   |
|   -0.7% | -221.499 MiB | 80.8% → 80.2% | 29.8 GiB → 29.6 GiB | 61,003 → 60,560 | `join()`                                                                                                               | `java.util.concurrent.ForkJoinTask`                                                   |
| removed |  -191.85 MiB |   0.5% → 0.0% |       192 MiB → 0 B |         378 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                           |
|   -0.7% |  -61.499 MiB | 21.9% → 21.7% |    8.06 GiB → 8 GiB | 16,510 → 16,387 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   -1.0% |  -59.763 MiB | 16.3% → 16.2% | 6.02 GiB → 5.96 GiB | 12,322 → 12,204 | `grow()`                                                                                                               | `java.util.ArrayList`                                                                 |
|   -1.0% |  -59.763 MiB | 16.3% → 16.2% | 6.02 GiB → 5.96 GiB | 12,322 → 12,204 | `add(Object, Object[], int)`                                                                                           | `java.util.ArrayList`                                                                 |
|   -1.0% |  -59.763 MiB | 16.3% → 16.2% | 6.02 GiB → 5.96 GiB | 12,322 → 12,204 | `add(Object)`                                                                                                          | `java.util.ArrayList`                                                                 |
|   -0.2% |  -58.158 MiB | 91.1% → 90.9% | 33.6 GiB → 33.5 GiB | 68,459 → 68,340 | `copyOf(Object[], int)`                                                                                                | `java.util.Arrays`                                                                    |
|   -0.3% |  -57.658 MiB | 52.7% → 52.5% |            19.4 GiB | 39,452 → 39,334 | `grow(int)`                                                                                                            | `java.util.ArrayList`                                                                 |
|   -2.3% |  -38.999 MiB |   4.6% → 4.5% | 1.68 GiB → 1.65 GiB |   3,447 → 3,369 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   -0.3% |  -22.499 MiB | 17.3% → 17.2% | 6.38 GiB → 6.36 GiB | 13,063 → 13,018 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -14.5% |  -16.999 MiB |          0.3% |   117 MiB → 100 MiB |       234 → 200 | `lambda$collectClusters$0(Double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -14.5% |  -16.999 MiB |          0.3% |   117 MiB → 100 MiB |       234 → 200 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011a3940` |
|   -0.1% |   -6.499 MiB | 18.9% → 18.8% | 6.95 GiB → 6.94 GiB | 14,235 → 14,222 | `<init>(Collection)`                                                                                                   | `java.util.ArrayList`                                                                 |
|  -11.8% |   -4.499 MiB |          0.1% |   38 MiB → 33.5 MiB |         76 → 67 | `builder(long, IntFunction)`                                                                                           | `java.util.stream.Nodes`                                                              |

##### Standard library

| Change |        Delta |             % |                Size |         Samples | Function                                       | Location                                                 |
| -----: | -----------: | ------------: | ------------------: | --------------: | ---------------------------------------------- | -------------------------------------------------------- |
|  -9.8% | -843.393 MiB | 22.8% → 20.6% | 8.42 GiB → 7.59 GiB | 16,932 → 15,241 | `exec()`                                       | `java.util.concurrent.ForkJoinTask$AdaptedCallable`      |
|  -9.2% | -806.393 MiB | 23.3% → 21.1% | 8.58 GiB → 7.79 GiB | 17,254 → 15,637 | `invoke()`                                     | `java.util.concurrent.ForkJoinTask`                      |
|  -1.1% | -317.499 MiB | 80.1% → 79.2% | 29.5 GiB → 29.2 GiB | 60,456 → 59,821 | `tryRemoveAndExec(ForkJoinTask, boolean)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`            |
|  -0.7% | -221.499 MiB | 80.8% → 80.2% | 29.8 GiB → 29.6 GiB | 61,003 → 60,560 | `awaitDone(int, long)`                         | `java.util.concurrent.ForkJoinTask`                      |
|  -0.7% | -221.499 MiB | 80.8% → 80.2% | 29.8 GiB → 29.6 GiB | 61,003 → 60,560 | `join()`                                       | `java.util.concurrent.ForkJoinTask`                      |
|  -1.0% |  -59.763 MiB | 16.3% → 16.2% | 6.02 GiB → 5.96 GiB | 12,322 → 12,204 | `grow()`                                       | `java.util.ArrayList`                                    |
|  -1.0% |  -59.763 MiB | 16.3% → 16.2% | 6.02 GiB → 5.96 GiB | 12,322 → 12,204 | `add(Object, Object[], int)`                   | `java.util.ArrayList`                                    |
|  -1.0% |  -59.763 MiB | 16.3% → 16.2% | 6.02 GiB → 5.96 GiB | 12,322 → 12,204 | `add(Object)`                                  | `java.util.ArrayList`                                    |
|  -0.2% |  -58.158 MiB | 91.1% → 90.9% | 33.6 GiB → 33.5 GiB | 68,459 → 68,340 | `copyOf(Object[], int)`                        | `java.util.Arrays`                                       |
|  -0.3% |  -57.658 MiB | 52.7% → 52.5% |            19.4 GiB | 39,452 → 39,334 | `grow(int)`                                    | `java.util.ArrayList`                                    |
|  -0.1% |   -6.499 MiB | 18.9% → 18.8% | 6.95 GiB → 6.94 GiB | 14,235 → 14,222 | `<init>(Collection)`                           | `java.util.ArrayList`                                    |
| -11.8% |   -4.499 MiB |          0.1% |   38 MiB → 33.5 MiB |         76 → 67 | `builder(long, IntFunction)`                   | `java.util.stream.Nodes`                                 |
| -11.8% |   -4.499 MiB |          0.1% |   38 MiB → 33.5 MiB |         76 → 67 | `makeNodeBuilder(long, IntFunction)`           | `java.util.stream.ReferencePipeline`                     |
|  -8.0% |   -2.999 MiB |          0.1% | 37.5 MiB → 34.5 MiB |         75 → 69 | `range(int, int)`                              | `java.util.stream.IntStream`                             |
| -10.4% |   -2.499 MiB |          0.1% |   24 MiB → 21.5 MiB |         48 → 43 | `<init>(long, IntFunction)`                    | `java.util.stream.Nodes$ArrayNode`                       |
| -10.4% |   -2.499 MiB |          0.1% |   24 MiB → 21.5 MiB |         48 → 43 | `<init>(long, IntFunction)`                    | `java.util.stream.Nodes$FixedNodeBuilder`                |
| -20.0% |   -2.499 MiB |         <0.1% |   12.5 MiB → 10 MiB |         25 → 20 | `newInvokeSpecial(Object, int, int, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x00000070011a4400`     |
| -20.0% |   -2.499 MiB |         <0.1% |   12.5 MiB → 10 MiB |         25 → 20 | `linkToTargetMethod(int, int, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070011a4c00`      |
| -23.6% |   -1.263 MiB |         <0.1% | 5.35 MiB → 4.09 MiB |           5 → 4 | `accept(Object, Object)`                       | `java.util.stream.Collectors$$Lambda.0x0000007001070ab8` |
| -23.6% |   -1.263 MiB |         <0.1% | 5.35 MiB → 4.09 MiB |           5 → 4 | `accept(Object)`                               | `java.util.stream.ReduceOps$3ReducingSink`               |

##### Ours

|  Change |          Delta |             % |                Size |         Samples | Function                                                                                                               | Location                                                                              |
| ------: | -------------: | ------------: | ------------------: | --------------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|   -9.8% |   -843.393 MiB | 22.8% → 20.6% | 8.42 GiB → 7.59 GiB | 16,932 → 15,241 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|   -9.8% |   -843.393 MiB | 22.8% → 20.6% | 8.42 GiB → 7.59 GiB | 16,932 → 15,241 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`                |
| removed |    -191.85 MiB |   0.5% → 0.0% |       192 MiB → 0 B |         378 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                           |
|   -0.7% |    -61.499 MiB | 21.9% → 21.7% |    8.06 GiB → 8 GiB | 16,510 → 16,387 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   -2.3% |    -38.999 MiB |   4.6% → 4.5% | 1.68 GiB → 1.65 GiB |   3,447 → 3,369 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   -0.3% |    -22.499 MiB | 17.3% → 17.2% | 6.38 GiB → 6.36 GiB | 13,063 → 13,018 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -14.5% |    -16.999 MiB |          0.3% |   117 MiB → 100 MiB |       234 → 200 | `lambda$collectClusters$0(Double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -14.5% |    -16.999 MiB |          0.3% |   117 MiB → 100 MiB |       234 → 200 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011a3940` |
|  -53.3% |     -3.999 MiB |         <0.1% |   7.5 MiB → 3.5 MiB |          15 → 7 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                                             |
|  -13.0% |     -2.999 MiB |          0.1% |     23 MiB → 20 MiB |         46 → 40 | `lambda$generateData$4(int)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  -42.9% |     -2.999 MiB |         <0.1% |       7 MiB → 4 MiB |          14 → 8 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|  -29.4% |     -2.499 MiB |         <0.1% |     8.5 MiB → 6 MiB |         17 → 12 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                                             |
|  -71.4% |     -2.499 MiB |         <0.1% |     3.5 MiB → 1 MiB |           7 → 2 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|  -71.4% |     -2.499 MiB |         <0.1% |     3.5 MiB → 1 MiB |           7 → 2 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|   -0.6% | -1,023.998 KiB |          0.4% |   165 MiB → 164 MiB |       330 → 328 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  -28.6% | -1,023.998 KiB |         <0.1% |   3.5 MiB → 2.5 MiB |           7 → 5 | `parse(String[])`                                                                                                      | `org.renaissance.harness.ConfigParser`                                                |
|  -33.3% | -1,023.998 KiB |         <0.1% |       3 MiB → 2 MiB |           6 → 4 | `parse(Seq, Object)`                                                                                                   | `scopt.OptionParser`                                                                  |
| removed |   -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `createScratchDirectory(Path, String, boolean)`                                                                        | `org.renaissance.core.DirUtils`                                                       |
| removed |   -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `createScratchRoot(Path, boolean)`                                                                                     | `org.renaissance.core.Launcher`                                                       |
| removed |   -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `<init>()`                                                                                                             | `scopt.Read$$anon$2`                                                                  |

#### Callers

Callers with the largest change in contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change |        Delta |      % |                Size |         Samples | Caller                 | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------------------- | ----------------------------------- |
|  +9.8% | +530.498 MiB | 100.0% | 5.26 GiB → 5.78 GiB | 10,781 → 11,842 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |        Delta |             % |          Size | Samples | Caller              | Location                                                               |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
|    new | +203.586 MiB | 0.0% → 100.0% | 0 B → 204 MiB | 0 → 403 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111f1b8` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

| Change |        Delta |             % |              Size |   Samples | Caller                                          | Location            |
| -----: | -----------: | ------------: | ----------------: | --------: | ----------------------------------------------- | ------------------- |
| +16.8% |  +19.499 MiB | 48.4% → 51.0% | 116 MiB → 135 MiB | 232 → 271 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |
|  +5.7% |   +6.999 MiB | 51.1% → 48.8% | 122 MiB → 129 MiB | 245 → 259 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |
| -50.0% | -511.999 KiB |   0.4% → 0.2% |   1 MiB → 512 KiB |     2 → 1 | `merge(Object, Object, BiFunction)`             | `java.util.HashMap` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |     Size |         Samples | Caller                           | Location                                                   |
| -----: | ----------: | -----: | -------: | --------------: | -------------------------------- | ---------------------------------------------------------- |
|  +0.1% | +23.604 MiB | 100.0% | 28.1 GiB | 57,279 → 57,322 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |     Size |         Samples | Caller      | Location                                               |
| -----: | ----------: | -----: | -------: | --------------: | ----------- | ------------------------------------------------------ |
|  +0.1% | +23.604 MiB | 100.0% | 28.1 GiB | 57,279 → 57,322 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |              Size |   Samples | Caller      | Location                                               |
| -----: | ----------: | -----: | ----------------: | --------: | ----------- | ------------------------------------------------------ |
| +17.5% | +21.999 MiB | 100.0% | 125 MiB → 147 MiB | 251 → 295 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |       Delta |      % |            Size |         Samples | Caller                     | Location                                                   |
| -----: | ----------: | -----: | --------------: | --------------: | -------------------------- | ---------------------------------------------------------- |
|  +0.1% | +23.604 MiB | 100.0% |        28.1 GiB | 57,279 → 57,322 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -71.4% |  -2.499 MiB |  <0.1% | 3.5 MiB → 1 MiB |           7 → 2 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |       Delta |      % |              Size |   Samples | Caller              | Location                                               |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------- | ------------------------------------------------------ |
|  +9.1% | +19.999 MiB | 100.0% | 220 MiB → 240 MiB | 441 → 481 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |       Delta |      % |              Size |   Samples | Caller              | Location                                               |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------- | ------------------------------------------------------ |
|  +9.1% | +19.999 MiB | 100.0% | 220 MiB → 240 MiB | 441 → 481 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  +9.1% | +19.999 MiB | 100.0% | 220 MiB → 240 MiB | 441 → 481 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `addAll(Collection)` (`java.util.ArrayList`)

| Change |       Delta |      % |     Size |         Samples | Caller                       | Location                                    |
| -----: | ----------: | -----: | -------: | --------------: | ---------------------------- | ------------------------------------------- |
|  +0.1% | +17.104 MiB | 100.0% | 20.8 GiB | 42,353 → 42,383 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `wrapAndCopyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

| Change |       Delta |             % |                Size |   Samples | Caller                                            | Location                              |
| -----: | ----------: | ------------: | ------------------: | --------: | ------------------------------------------------- | ------------------------------------- |
| +25.2% | +15.999 MiB | 34.7% → 40.0% | 63.5 MiB → 79.5 MiB | 127 → 159 | `evaluate(Spliterator, boolean, IntFunction)`     | `java.util.stream.AbstractPipeline`   |
|  +7.3% | +13.236 MiB | 99.7% → 98.5% |   182 MiB → 196 MiB | 359 → 387 | `evaluateSequential(PipelineHelper, Spliterator)` | `java.util.stream.ReduceOps$ReduceOp` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

| Change |       Delta |      % |              Size |   Samples | Caller           | Location                        |
| -----: | ----------: | -----: | ----------------: | --------: | ---------------- | ------------------------------- |
|  +7.3% | +15.236 MiB | 100.0% | 207 MiB → 223 MiB | 409 → 441 | `main(String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

| Change |       Delta |      % |              Size |   Samples | Caller                         | Location                                             |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------------ | ---------------------------------------------------- |
|  +7.4% | +15.236 MiB | 100.0% | 207 MiB → 222 MiB | 408 → 440 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001004800` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001004800`)

| Change |       Delta |      % |              Size |   Samples | Caller                           | Location                                            |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------------------- | --------------------------------------------------- |
|  +7.4% | +15.236 MiB | 100.0% | 207 MiB → 222 MiB | 408 → 440 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001009800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001009800`)

| Change |       Delta |      % |              Size |   Samples | Caller                                           | Location                           |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------------------------------ | ---------------------------------- |
|  +7.4% | +15.236 MiB | 100.0% | 207 MiB → 222 MiB | 408 → 440 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change |       Delta |      % |              Size |   Samples | Caller                         | Location                                          |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------------ | ------------------------------------------------- |
|  +7.4% | +15.236 MiB | 100.0% | 207 MiB → 222 MiB | 408 → 440 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |       Delta |      % |              Size |   Samples | Caller                     | Location                                          |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------------- | ------------------------------------------------- |
|  +7.4% | +15.236 MiB | 100.0% | 207 MiB → 222 MiB | 408 → 440 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |       Delta |      % |              Size |   Samples | Caller                     | Location                   |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------------- | -------------------------- |
|  +7.4% | +15.236 MiB | 100.0% | 207 MiB → 222 MiB | 408 → 440 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

| Change |       Delta |      % |              Size |   Samples | Caller                                                      | Location                        |
| -----: | ----------: | -----: | ----------------: | --------: | ----------------------------------------------------------- | ------------------------------- |
|  +7.4% | +15.236 MiB | 100.0% | 207 MiB → 222 MiB | 408 → 440 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

| Change |       Delta |      % |              Size |   Samples | Caller                               | Location                            |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------------------ | ----------------------------------- |
|  +7.8% | +14.236 MiB | 100.0% | 183 MiB → 197 MiB | 360 → 390 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `valueOf(double)` (`java.lang.Double`)

|  Change |          Delta |             % |              Size |   Samples | Caller                                           | Location                                                     |
| ------: | -------------: | ------------: | ----------------: | --------: | ------------------------------------------------ | ------------------------------------------------------------ |
|  +23.1% |    +12.499 MiB | 99.1% → 97.8% | 54 MiB → 66.5 MiB | 108 → 133 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                  |
| +200.0% | +1,023.998 KiB |   0.9% → 2.2% | 512 KiB → 1.5 MiB |     1 → 3 | `apply(double)`                                  | `java.util.stream.DoublePipeline$$Lambda.0x00000070011c2320` |

##### `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`)

| Change |       Delta |      % |              Size |   Samples | Caller                 | Location                            |
| -----: | ----------: | -----: | ----------------: | --------: | ---------------------- | ----------------------------------- |
|  +7.3% | +13.236 MiB | 100.0% | 182 MiB → 196 MiB | 359 → 387 | `evaluate(TerminalOp)` | `java.util.stream.AbstractPipeline` |

##### `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`)

| Change |       Delta |      % |              Size |   Samples | Caller               | Location                             |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------- | ------------------------------------ |
|  +7.3% | +13.236 MiB | 100.0% | 182 MiB → 196 MiB | 359 → 387 | `collect(Collector)` | `java.util.stream.ReferencePipeline` |

##### `collect(Collector)` (`java.util.stream.ReferencePipeline`)

| Change |        Delta |              % |              Size |   Samples | Caller                             | Location                                                           |
| -----: | -----------: | -------------: | ----------------: | --------: | ---------------------------------- | ------------------------------------------------------------------ |
|    new |   +8.499 MiB |    0.0% → 4.3% |     0 B → 8.5 MiB |    0 → 17 | `toCsvRows(Function)`              | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |
|  +2.3% |   +4.236 MiB | 100.0% → 95.4% | 182 MiB → 187 MiB | 359 → 369 | `generateData(int, int, int)`      | `org.renaissance.jdk.concurrent.JavaKMeans`                        |
|    new | +511.999 KiB |    0.0% → 0.3% |     0 B → 512 KiB |     0 → 1 | `getMatchingBenchmarks(Predicate)` | `org.renaissance.core.BenchmarkSuite`                              |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

| Change |          Delta |           % |              Size |   Samples | Caller               | Location                             |
| -----: | -------------: | ----------: | ----------------: | --------: | -------------------- | ------------------------------------ |
|  +6.1% |    +11.736 MiB |      100.0% | 192 MiB → 204 MiB | 378 → 403 | `apply(Object)`      | `scala.runtime.function.JProcedure1` |
|  +6.1% |    +11.736 MiB |      100.0% | 192 MiB → 204 MiB | 378 → 403 | `foreach(Function1)` | `scala.collection.immutable.List`    |
|    new | +1,023.998 KiB | 0.0% → 0.5% |       0 B → 1 MiB |     0 → 2 | `foreach(Function1)` | `scala.collection.IterableOnceOps`   |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

| Change |       Delta |      % |              Size |   Samples | Caller                                                                        | Location                                    |
| -----: | ----------: | -----: | ----------------: | --------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
|  +6.1% | +11.736 MiB | 100.0% | 192 MiB → 204 MiB | 378 → 403 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `evaluate(Spliterator, boolean, IntFunction)` (`java.util.stream.AbstractPipeline`)

| Change |       Delta |      % |              Size |   Samples | Caller                             | Location                            |
| -----: | ----------: | -----: | ----------------: | --------: | ---------------------------------- | ----------------------------------- |
| +11.3% | +11.499 MiB | 100.0% | 101 MiB → 113 MiB | 203 → 226 | `evaluateToArrayNode(IntFunction)` | `java.util.stream.AbstractPipeline` |

##### `evaluateToArrayNode(IntFunction)` (`java.util.stream.AbstractPipeline`)

| Change |       Delta |      % |              Size |   Samples | Caller                 | Location                             |
| -----: | ----------: | -----: | ----------------: | --------: | ---------------------- | ------------------------------------ |
| +11.3% | +11.499 MiB | 100.0% | 101 MiB → 113 MiB | 203 → 226 | `toArray(IntFunction)` | `java.util.stream.ReferencePipeline` |

##### `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`)

|  Change |      Delta |             % |               Size |   Samples | Caller                                           | Location                                               |
| ------: | ---------: | ------------: | -----------------: | --------: | ------------------------------------------------ | ------------------------------------------------------ |
|   +8.5% | +8.499 MiB | 98.0% → 95.6% | 99.5 MiB → 108 MiB | 199 → 216 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`            |
| +150.0% | +2.999 MiB |   2.0% → 4.4% |      2 MiB → 5 MiB |    4 → 10 | `boxed(double[])`                                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

| Change |       Delta |      % |              Size |   Samples | Caller                                 | Location                        |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------------------------- | ------------------------------- |
|  +7.4% | +15.236 MiB | 100.0% | 207 MiB → 222 MiB | 408 → 440 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |       Delta |      % |              Size |   Samples | Caller           | Location                                   |
| -----: | ----------: | -----: | ----------------: | --------: | ---------------- | ------------------------------------------ |
|  +7.0% | +14.236 MiB | 100.0% | 203 MiB → 218 MiB | 401 → 431 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |       Delta |      % |              Size |   Samples | Caller               | Location                                  |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------- | ----------------------------------------- |
|  +7.5% | +13.736 MiB | 100.0% | 183 MiB → 197 MiB | 360 → 389 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |       Delta |      % |              Size |   Samples | Caller                     | Location                                               |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------------- | ------------------------------------------------------ |
|  +6.0% | +12.499 MiB | 100.0% | 210 MiB → 222 MiB | 420 → 445 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |       Delta |      % |              Size |   Samples | Caller       | Location                                            |
| -----: | ----------: | -----: | ----------------: | --------: | ------------ | --------------------------------------------------- |
| +23.1% | +12.499 MiB | 100.0% | 54 MiB → 66.5 MiB | 108 → 133 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |       Delta |      % |              Size |   Samples | Caller           | Location                                    |
| -----: | ----------: | -----: | ----------------: | --------: | ---------------- | ------------------------------------------- |
|  +6.4% | +12.236 MiB | 100.0% | 192 MiB → 204 MiB | 378 → 404 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |            Size |   Samples | Caller                               | Location                                                  |
| -----: | ----------: | -----: | --------------: | --------: | ------------------------------------ | --------------------------------------------------------- |
| +14.8% | +11.999 MiB | 100.0% | 81 MiB → 93 MiB | 162 → 186 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `combineResults(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |            Size |   Samples | Caller                           | Location                                                  |
| -----: | ----------: | -----: | --------------: | --------: | -------------------------------- | --------------------------------------------------------- |
| +14.8% | +11.999 MiB | 100.0% | 81 MiB → 93 MiB | 162 → 186 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |            Size |   Samples | Caller      | Location                                               |
| -----: | ----------: | -----: | --------------: | --------: | ----------- | ------------------------------------------------------ |
| +14.8% | +11.999 MiB | 100.0% | 81 MiB → 93 MiB | 162 → 186 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111f1b8`)

| Change |       Delta |      % |              Size |   Samples | Caller          | Location                             |
| -----: | ----------: | -----: | ----------------: | --------: | --------------- | ------------------------------------ |
|  +6.1% | +11.736 MiB | 100.0% | 192 MiB → 204 MiB | 378 → 403 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |      % |                Size |         Samples | Caller   | Location                                                               |
| -----: | -----------: | -----: | ------------------: | --------------: | -------- | ---------------------------------------------------------------------- |
|  -9.8% | -843.393 MiB | 100.0% | 8.42 GiB → 7.59 GiB | 16,932 → 15,241 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`)

| Change |        Delta |      % |                Size |         Samples | Caller   | Location                                            |
| -----: | -----------: | -----: | ------------------: | --------------: | -------- | --------------------------------------------------- |
|  -9.8% | -843.393 MiB | 100.0% | 8.42 GiB → 7.59 GiB | 16,932 → 15,241 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

| Change |        Delta |      % |                Size |         Samples | Caller     | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------- | ----------------------------------- |
|  -9.8% | -843.393 MiB | 100.0% | 8.42 GiB → 7.59 GiB | 16,932 → 15,241 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |             % |                Size |         Samples | Caller                         | Location                                               |
| -----: | -----------: | ------------: | ------------------: | --------------: | ------------------------------ | ------------------------------------------------------ |
|  -9.8% | -842.893 MiB | 98.1% → 97.5% | 8.42 GiB → 7.59 GiB | 16,927 → 15,237 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`            |
|  +6.5% |  +13.499 MiB |   2.4% → 2.8% |   208 MiB → 222 MiB |       417 → 444 | `average(List)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |        Delta |      % |                Size |         Samples | Caller                 | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------------------- | ----------------------------------- |
|  -1.1% | -317.499 MiB | 100.0% | 29.5 GiB → 29.2 GiB | 60,456 → 59,821 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |      % |                Size |         Samples | Caller   | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | -------- | ----------------------------------- |
|  -0.7% | -221.499 MiB | 100.0% | 29.8 GiB → 29.6 GiB | 61,003 → 60,560 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |      % |                Size |         Samples | Caller      | Location                                               |
| -----: | -----------: | -----: | ------------------: | --------------: | ----------- | ------------------------------------------------------ |
|  -0.7% | -221.499 MiB | 100.0% | 29.8 GiB → 29.6 GiB | 61,003 → 60,560 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |       Delta |             % |          Size | Samples | Caller              | Location                                                               |
| ------: | ----------: | ------------: | ------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
| removed | -191.85 MiB | 100.0% → 0.0% | 192 MiB → 0 B | 378 → 0 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111f208` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |             Size |         Samples | Caller              | Location                                                   |
| -----: | ----------: | -----: | ---------------: | --------------: | ------------------- | ---------------------------------------------------------- |
|  -0.7% | -61.499 MiB | 100.0% | 8.06 GiB → 8 GiB | 16,510 → 16,387 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -0.7% | -61.499 MiB | 100.0% | 8.06 GiB → 8 GiB | 16,510 → 16,387 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |

##### `grow()` (`java.util.ArrayList`)

| Change |       Delta |      % |                Size |         Samples | Caller                       | Location              |
| -----: | ----------: | -----: | ------------------: | --------------: | ---------------------------- | --------------------- |
|  -1.0% | -59.763 MiB | 100.0% | 6.02 GiB → 5.96 GiB | 12,322 → 12,204 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

| Change |       Delta |      % |                Size |         Samples | Caller        | Location              |
| -----: | ----------: | -----: | ------------------: | --------------: | ------------- | --------------------- |
|  -1.0% | -59.763 MiB | 100.0% | 6.02 GiB → 5.96 GiB | 12,322 → 12,204 | `add(Object)` | `java.util.ArrayList` |

##### `add(Object)` (`java.util.ArrayList`)

|  Change |        Delta |            % |                Size |         Samples | Caller                   | Location                                                   |
| ------: | -----------: | -----------: | ------------------: | --------------: | ------------------------ | ---------------------------------------------------------- |
|   -0.9% |  -57.999 MiB |        99.9% | 6.01 GiB → 5.96 GiB | 12,316 → 12,200 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -23.6% |   -1.263 MiB |         0.1% | 5.35 MiB → 4.09 MiB |           5 → 4 | `accept(Object, Object)` | `java.util.stream.Collectors$$Lambda.0x0000007001070ab8`   |
| removed | -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `addClass(Class)`        | `java.lang.ClassLoader`                                    |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |       Delta |             % |                Size |         Samples | Caller      | Location              |
| -----: | ----------: | ------------: | ------------------: | --------------: | ----------- | --------------------- |
|  -0.3% | -66.658 MiB | 57.2% → 57.1% | 19.2 GiB → 19.1 GiB | 39,001 → 38,865 | `grow(int)` | `java.util.ArrayList` |
|  +0.1% |  +8.499 MiB | 42.8% → 42.9% |            14.4 GiB | 29,458 → 29,475 | `toArray()` | `java.util.ArrayList` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |       Delta |             % |                Size |         Samples | Caller               | Location              |
| -----: | ----------: | ------------: | ------------------: | --------------: | -------------------- | --------------------- |
|  -1.0% | -59.763 MiB | 31.0% → 30.8% | 6.02 GiB → 5.96 GiB | 12,322 → 12,204 | `grow()`             | `java.util.ArrayList` |
|    ~0% |  +2.104 MiB | 69.0% → 69.2% |            13.4 GiB |          27,130 | `addAll(Collection)` | `java.util.ArrayList` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |                Size |       Samples | Caller              | Location                                                   |
| -----: | ----------: | -----: | ------------------: | ------------: | ------------------- | ---------------------------------------------------------- |
|  -2.3% | -38.999 MiB | 100.0% | 1.68 GiB → 1.65 GiB | 3,447 → 3,369 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |                Size |         Samples | Caller              | Location                                                   |
| -----: | ----------: | -----: | ------------------: | --------------: | ------------------- | ---------------------------------------------------------- |
|  -0.3% | -22.499 MiB | 100.0% | 6.38 GiB → 6.36 GiB | 13,063 → 13,018 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |              Size |   Samples | Caller          | Location                                                                              |
| -----: | ----------: | -----: | ----------------: | --------: | --------------- | ------------------------------------------------------------------------------------- |
| -14.5% | -16.999 MiB | 100.0% | 117 MiB → 100 MiB | 234 → 200 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011a3940` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011a3940`)

| Change |       Delta |      % |              Size |   Samples | Caller                              | Location            |
| -----: | ----------: | -----: | ----------------: | --------: | ----------------------------------- | ------------------- |
| -14.5% | -16.999 MiB | 100.0% | 117 MiB → 100 MiB | 234 → 200 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |

##### `<init>(Collection)` (`java.util.ArrayList`)

| Change |      Delta |      % |                Size |         Samples | Caller                       | Location                                    |
| -----: | ---------: | -----: | ------------------: | --------------: | ---------------------------- | ------------------------------------------- |
|  -0.1% | -6.499 MiB | 100.0% | 6.95 GiB → 6.94 GiB | 14,235 → 14,222 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

| Change |      Delta |      % |              Size | Samples | Caller                               | Location                             |
| -----: | ---------: | -----: | ----------------: | ------: | ------------------------------------ | ------------------------------------ |
| -11.8% | -4.499 MiB | 100.0% | 38 MiB → 33.5 MiB | 76 → 67 | `makeNodeBuilder(long, IntFunction)` | `java.util.stream.ReferencePipeline` |

##### `makeNodeBuilder(long, IntFunction)` (`java.util.stream.ReferencePipeline`)

| Change |      Delta |      % |              Size | Samples | Caller                                        | Location                            |
| -----: | ---------: | -----: | ----------------: | ------: | --------------------------------------------- | ----------------------------------- |
| -11.8% | -4.499 MiB | 100.0% | 38 MiB → 33.5 MiB | 76 → 67 | `evaluate(Spliterator, boolean, IntFunction)` | `java.util.stream.AbstractPipeline` |

##### `range(int, int)` (`java.util.stream.IntStream`)

| Change |      Delta |      % |                Size | Samples | Caller                                           | Location                                    |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------------------------------ | ------------------------------------------- |
|  -8.0% | -2.999 MiB | 100.0% | 37.5 MiB → 34.5 MiB | 75 → 69 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `<init>(long, IntFunction)` (`java.util.stream.Nodes$ArrayNode`)

| Change |      Delta |      % |              Size | Samples | Caller                      | Location                                  |
| -----: | ---------: | -----: | ----------------: | ------: | --------------------------- | ----------------------------------------- |
| -10.4% | -2.499 MiB | 100.0% | 24 MiB → 21.5 MiB | 48 → 43 | `<init>(long, IntFunction)` | `java.util.stream.Nodes$FixedNodeBuilder` |

##### `<init>(long, IntFunction)` (`java.util.stream.Nodes$FixedNodeBuilder`)

| Change |      Delta |      % |              Size | Samples | Caller                       | Location                 |
| -----: | ---------: | -----: | ----------------: | ------: | ---------------------------- | ------------------------ |
| -10.4% | -2.499 MiB | 100.0% | 24 MiB → 21.5 MiB | 48 → 43 | `builder(long, IntFunction)` | `java.util.stream.Nodes` |

##### `newInvokeSpecial(Object, int, int, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000070011a4400`)

| Change |      Delta |      % |              Size | Samples | Caller                                         | Location                                            |
| -----: | ---------: | -----: | ----------------: | ------: | ---------------------------------------------- | --------------------------------------------------- |
| -20.0% | -2.499 MiB | 100.0% | 12.5 MiB → 10 MiB | 25 → 20 | `linkToTargetMethod(int, int, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070011a4c00` |

##### `linkToTargetMethod(int, int, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070011a4c00`)

| Change |      Delta |      % |              Size | Samples | Caller                                           | Location                                    |
| -----: | ---------: | -----: | ----------------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| -20.0% | -2.499 MiB | 100.0% | 12.5 MiB → 10 MiB | 25 → 20 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `accept(Object, Object)` (`java.util.stream.Collectors$$Lambda.0x0000007001070ab8`)

| Change |      Delta |      % |                Size | Samples | Caller           | Location                                   |
| -----: | ---------: | -----: | ------------------: | ------: | ---------------- | ------------------------------------------ |
| -23.6% | -1.263 MiB | 100.0% | 5.35 MiB → 4.09 MiB |   5 → 4 | `accept(Object)` | `java.util.stream.ReduceOps$3ReducingSink` |

##### `accept(Object)` (`java.util.stream.ReduceOps$3ReducingSink`)

| Change |      Delta |      % |                Size | Samples | Caller        | Location                           |
| -----: | ---------: | -----: | ------------------: | ------: | ------------- | ---------------------------------- |
| -23.6% | -1.263 MiB | 100.0% | 5.35 MiB → 4.09 MiB |   5 → 4 | `accept(int)` | `java.util.stream.IntPipeline$1$1` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |      Delta |      % |              Size | Samples | Caller                  | Location                                  |
| -----: | ---------: | -----: | ----------------: | ------: | ----------------------- | ----------------------------------------- |
| -53.3% | -3.999 MiB | 100.0% | 7.5 MiB → 3.5 MiB |  15 → 7 | `executeOperation(int)` | `org.renaissance.harness.ExecutionDriver` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |      Delta |      % |            Size | Samples | Caller       | Location                                            |
| -----: | ---------: | -----: | --------------: | ------: | ------------ | --------------------------------------------------- |
| -13.0% | -2.999 MiB | 100.0% | 23 MiB → 20 MiB | 46 → 40 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |      Delta |      % |          Size | Samples | Caller      | Location                                               |
| -----: | ---------: | -----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
| -42.9% | -2.999 MiB | 100.0% | 7 MiB → 4 MiB |  14 → 8 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

| Change |      Delta |      % |            Size | Samples | Caller               | Location                                  |
| -----: | ---------: | -----: | --------------: | ------: | -------------------- | ----------------------------------------- |
| -29.4% | -2.499 MiB | 100.0% | 8.5 MiB → 6 MiB | 17 → 12 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |      Delta |      % |            Size | Samples | Caller                           | Location                                               |
| -----: | ---------: | -----: | --------------: | ------: | -------------------------------- | ------------------------------------------------------ |
| -71.4% | -2.499 MiB | 100.0% | 3.5 MiB → 1 MiB |   7 → 2 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |      Delta |      % |            Size | Samples | Caller      | Location                                               |
| -----: | ---------: | -----: | --------------: | ------: | ----------- | ------------------------------------------------------ |
| -71.4% | -2.499 MiB | 100.0% | 3.5 MiB → 1 MiB |   7 → 2 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |          Delta |      % |              Size |   Samples | Caller      | Location                                               |
| -----: | -------------: | -----: | ----------------: | --------: | ----------- | ------------------------------------------------------ |
|  -0.6% | -1,023.998 KiB | 100.0% | 165 MiB → 164 MiB | 330 → 328 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `parse(String[])` (`org.renaissance.harness.ConfigParser`)

| Change |          Delta |      % |              Size | Samples | Caller           | Location                                    |
| -----: | -------------: | -----: | ----------------: | ------: | ---------------- | ------------------------------------------- |
| -28.6% | -1,023.998 KiB | 100.0% | 3.5 MiB → 2.5 MiB |   7 → 5 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `parse(Seq, Object)` (`scopt.OptionParser`)

| Change |          Delta |      % |          Size | Samples | Caller            | Location                               |
| -----: | -------------: | -----: | ------------: | ------: | ----------------- | -------------------------------------- |
| -33.3% | -1,023.998 KiB | 100.0% | 3 MiB → 2 MiB |   6 → 4 | `parse(String[])` | `org.renaissance.harness.ConfigParser` |

##### `createScratchDirectory(Path, String, boolean)` (`org.renaissance.core.DirUtils`)

|  Change |        Delta |             % |          Size | Samples | Caller                             | Location                        |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------------- | ------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `createScratchRoot(Path, boolean)` | `org.renaissance.core.Launcher` |

##### `createScratchRoot(Path, boolean)` (`org.renaissance.core.Launcher`)

|  Change |        Delta |             % |          Size | Samples | Caller                                 | Location                        |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------------------------- | ------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `<init>()` (`scopt.Read$$anon$2`)

|  Change |        Delta |             % |          Size | Samples | Caller       | Location      |
| ------: | -----------: | ------------: | ------------: | ------: | ------------ | ------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `<clinit>()` | `scopt.Read$` |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change |        Delta |      % |                Size |         Samples | Callee     | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------- | ----------------------------------- |
|  +9.8% | +530.498 MiB | 100.0% | 5.26 GiB → 5.78 GiB | 10,781 → 11,842 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |          Delta |            % |          Size | Samples | Callee                                                                                       | Location                                  |
| -----: | -------------: | -----------: | ------------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
|    new |   +202.586 MiB | 0.0% → 99.5% | 0 B → 203 MiB | 0 → 401 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
|    new | +1,023.998 KiB |  0.0% → 0.5% |   0 B → 1 MiB |   0 → 2 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |     Size |         Samples | Callee            | Location                                    |
| -----: | ----------: | -----: | -------: | --------------: | ----------------- | ------------------------------------------- |
|  +0.1% | +23.604 MiB | 100.0% | 28.1 GiB | 57,279 → 57,322 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |     Size |         Samples | Callee                     | Location                                                   |
| -----: | ----------: | -----: | -------: | --------------: | -------------------------- | ---------------------------------------------------------- |
|  +0.1% | +23.604 MiB | 100.0% | 28.1 GiB | 57,279 → 57,322 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |      Delta |             % |              Size |         Samples | Callee                | Location            |
| -----: | ---------: | ------------: | ----------------: | --------------: | --------------------- | ------------------- |
|    ~0% | +9.604 MiB | 99.2% → 99.1% |          27.9 GiB | 56,810 → 56,825 | `forEach(BiConsumer)` | `java.util.HashMap` |
|  +4.0% | +6.999 MiB |          0.6% | 174 MiB → 181 MiB |       348 → 362 | `<init>(Map)`         | `java.util.HashMap` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |       Delta |             % |              Size |   Samples | Callee                | Location                                               |
| ------: | ----------: | ------------: | ----------------: | --------: | --------------------- | ------------------------------------------------------ |
|   +6.0% | +12.499 MiB | 95.2% → 92.5% | 210 MiB → 222 MiB | 420 → 445 | `average(List)`       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| +200.0% |  +5.999 MiB |   1.4% → 3.7% |     3 MiB → 9 MiB |    6 → 18 | `boxed(double[])`     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  +75.0% |  +1.499 MiB |   0.9% → 1.5% |   2 MiB → 3.5 MiB |     4 → 7 | `put(Object, Object)` | `java.util.HashMap`                                    |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |       Delta |      % |              Size |   Samples | Callee                     | Location                                               |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------------- | ------------------------------------------------------ |
|  +9.1% | +19.999 MiB | 100.0% | 220 MiB → 240 MiB | 441 → 481 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  +9.1% | +19.999 MiB | 100.0% | 220 MiB → 240 MiB | 441 → 481 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `addAll(Collection)` (`java.util.ArrayList`)

| Change |       Delta |     % |                Size |         Samples | Callee      | Location              |
| -----: | ----------: | ----: | ------------------: | --------------: | ----------- | --------------------- |
|  +0.2% | +14.999 MiB | 35.7% | 7.43 GiB → 7.45 GiB | 15,223 → 15,253 | `toArray()` | `java.util.ArrayList` |
|    ~0% |  +2.104 MiB | 64.3% |            13.4 GiB |          27,130 | `grow(int)` | `java.util.ArrayList` |

##### `wrapAndCopyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

| Change |       Delta |              % |              Size |   Samples | Callee                        | Location                            |
| -----: | ----------: | -------------: | ----------------: | --------: | ----------------------------- | ----------------------------------- |
|  +7.8% | +14.236 MiB | 100.0% → 99.2% | 183 MiB → 197 MiB | 360 → 390 | `copyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |
| +27.8% |  +2.499 MiB |    4.9% → 5.8% |  9 MiB → 11.5 MiB |   18 → 23 | `wrapSink(Sink)`              | `java.util.stream.AbstractPipeline` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|  Change |        Delta |           % |              Size |   Samples | Callee                                                      | Location                            |
| ------: | -----------: | ----------: | ----------------: | --------: | ----------------------------------------------------------- | ----------------------------------- |
|   +7.4% |  +15.236 MiB |       99.8% | 207 MiB → 222 MiB | 408 → 440 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`     |
| removed | -511.999 KiB | 0.2% → 0.0% |     512 KiB → 0 B |     1 → 0 | `createScratchRoot(Path, boolean)`                          | `org.renaissance.core.Launcher`     |
|     new | +511.999 KiB | 0.0% → 0.2% |     0 B → 512 KiB |     0 → 1 | `create(Path, URI)`                                         | `org.renaissance.core.ModuleLoader` |

##### `main(String[])` (`org.renaissance.core.Launcher`)

| Change |       Delta |      % |              Size |   Samples | Callee                                 | Location                        |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------------------------- | ------------------------------- |
|  +7.3% | +15.236 MiB | 100.0% | 207 MiB → 223 MiB | 409 → 441 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

| Change |          Delta |             % |              Size |   Samples | Callee              | Location                                    |
| -----: | -------------: | ------------: | ----------------: | --------: | ------------------- | ------------------------------------------- |
|  +7.0% |    +14.236 MiB | 98.3% → 98.0% | 203 MiB → 218 MiB | 401 → 431 | `main(String[])`    | `org.renaissance.harness.RenaissanceSuite$` |
| +28.6% | +1,023.998 KiB |   1.7% → 2.0% | 3.5 MiB → 4.5 MiB |     7 → 9 | `loadClass(String)` | `java.lang.ClassLoader`                     |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001004800`)

| Change |       Delta |      % |              Size |   Samples | Callee           | Location                                   |
| -----: | ----------: | -----: | ----------------: | --------: | ---------------- | ------------------------------------------ |
|  +7.4% | +15.236 MiB | 100.0% | 207 MiB → 222 MiB | 408 → 440 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001009800`)

| Change |       Delta |      % |              Size |   Samples | Callee                         | Location                                             |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------------ | ---------------------------------------------------- |
|  +7.4% | +15.236 MiB | 100.0% | 207 MiB → 222 MiB | 408 → 440 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001004800` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change |       Delta |      % |              Size |   Samples | Callee                           | Location                                            |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------------------- | --------------------------------------------------- |
|  +7.4% | +15.236 MiB | 100.0% | 207 MiB → 222 MiB | 408 → 440 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001009800` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |       Delta |      % |              Size |   Samples | Callee                                           | Location                           |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------------------------------ | ---------------------------------- |
|  +7.4% | +15.236 MiB | 100.0% | 207 MiB → 222 MiB | 408 → 440 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |       Delta |      % |              Size |   Samples | Callee                         | Location                                          |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------------ | ------------------------------------------------- |
|  +7.4% | +15.236 MiB | 100.0% | 207 MiB → 222 MiB | 408 → 440 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

| Change |       Delta |      % |              Size |   Samples | Callee                     | Location                                          |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------------- | ------------------------------------------------- |
|  +7.4% | +15.236 MiB | 100.0% | 207 MiB → 222 MiB | 408 → 440 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

|  Change |          Delta |             % |              Size |   Samples | Callee                       | Location                                  |
| ------: | -------------: | ------------: | ----------------: | --------: | ---------------------------- | ----------------------------------------- |
|     new |     +8.499 MiB |   0.0% → 4.3% |     0 B → 8.5 MiB |    0 → 17 | `forEachRemaining(Consumer)` | `java.util.Spliterators$ArraySpliterator` |
|   +2.3% |     +4.236 MiB | 99.7% → 94.7% | 182 MiB → 187 MiB | 359 → 369 | `forEachRemaining(Consumer)` | `java.util.Spliterator$OfInt`             |
| +200.0% | +1,023.998 KiB |   0.3% → 0.8% | 512 KiB → 1.5 MiB |     1 → 3 | `forEachRemaining(Consumer)` | `java.util.Spliterator$OfDouble`          |
|     new |   +511.999 KiB |   0.0% → 0.3% |     0 B → 512 KiB |     0 → 1 | `forEachRemaining(Consumer)` | `java.util.HashMap$ValueSpliterator`      |

##### `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`)

| Change |       Delta |      % |              Size |   Samples | Callee                               | Location                            |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------------------ | ----------------------------------- |
|  +7.3% | +13.236 MiB | 100.0% | 182 MiB → 196 MiB | 359 → 387 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`)

| Change |       Delta |      % |              Size |   Samples | Callee                                            | Location                              |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------------------------------- | ------------------------------------- |
|  +7.3% | +13.236 MiB | 100.0% | 182 MiB → 196 MiB | 359 → 387 | `evaluateSequential(PipelineHelper, Spliterator)` | `java.util.stream.ReduceOps$ReduceOp` |

##### `collect(Collector)` (`java.util.stream.ReferencePipeline`)

| Change |       Delta |      % |              Size |   Samples | Callee                 | Location                            |
| -----: | ----------: | -----: | ----------------: | --------: | ---------------------- | ----------------------------------- |
|  +7.3% | +13.236 MiB | 100.0% | 182 MiB → 196 MiB | 359 → 387 | `evaluate(TerminalOp)` | `java.util.stream.AbstractPipeline` |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

| Change |          Delta |           % |              Size |   Samples | Callee              | Location                                                               |
| -----: | -------------: | ----------: | ----------------: | --------: | ------------------- | ---------------------------------------------------------------------- |
|  +6.1% |    +11.736 MiB |      100.0% | 192 MiB → 204 MiB | 378 → 403 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111f1b8` |
|  +6.1% |    +11.736 MiB |      100.0% | 192 MiB → 204 MiB | 378 → 403 | `apply(Object)`     | `scala.runtime.function.JProcedure1`                                   |
|    new | +1,023.998 KiB | 0.0% → 0.5% |       0 B → 1 MiB |     0 → 2 | `applyVoid(Object)` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda`                      |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

| Change |       Delta |      % |              Size |   Samples | Callee          | Location                             |
| -----: | ----------: | -----: | ----------------: | --------: | --------------- | ------------------------------------ |
|  +6.1% | +11.736 MiB | 100.0% | 192 MiB → 204 MiB | 378 → 403 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `evaluate(Spliterator, boolean, IntFunction)` (`java.util.stream.AbstractPipeline`)

| Change |       Delta |             % |                Size |   Samples | Callee                               | Location                             |
| -----: | ----------: | ------------: | ------------------: | --------: | ------------------------------------ | ------------------------------------ |
| +25.2% | +15.999 MiB | 62.6% → 70.4% | 63.5 MiB → 79.5 MiB | 127 → 159 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline`  |
| -11.8% |  -4.499 MiB | 37.4% → 29.6% |   38 MiB → 33.5 MiB |   76 → 67 | `makeNodeBuilder(long, IntFunction)` | `java.util.stream.ReferencePipeline` |

##### `evaluateToArrayNode(IntFunction)` (`java.util.stream.AbstractPipeline`)

| Change |       Delta |      % |              Size |   Samples | Callee                                        | Location                            |
| -----: | ----------: | -----: | ----------------: | --------: | --------------------------------------------- | ----------------------------------- |
| +11.3% | +11.499 MiB | 100.0% | 101 MiB → 113 MiB | 203 → 226 | `evaluate(Spliterator, boolean, IntFunction)` | `java.util.stream.AbstractPipeline` |

##### `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`)

| Change |       Delta |      % |              Size |   Samples | Callee                             | Location                            |
| -----: | ----------: | -----: | ----------------: | --------: | ---------------------------------- | ----------------------------------- |
| +11.3% | +11.499 MiB | 100.0% | 101 MiB → 113 MiB | 203 → 226 | `evaluateToArrayNode(IntFunction)` | `java.util.stream.AbstractPipeline` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

| Change |       Delta |      % |              Size |   Samples | Callee                     | Location                   |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------------- | -------------------------- |
|  +7.4% | +15.236 MiB | 100.0% | 207 MiB → 222 MiB | 408 → 440 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |          Delta |             % |              Size |   Samples | Callee                                                                        | Location                                    |
| ------: | -------------: | ------------: | ----------------: | --------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
|   +6.4% |    +12.236 MiB | 94.3% → 93.8% | 192 MiB → 204 MiB | 378 → 404 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |
| removed |     -1.999 MiB |   1.0% → 0.0% |       2 MiB → 0 B |     4 → 0 | `loadClass(String)`                                                           | `java.lang.ClassLoader`                     |
| +200.0% |     +1.999 MiB |   0.5% → 1.4% |     1 MiB → 3 MiB |     2 → 6 | `apply(Seq)`                                                                  | `scala.collection.immutable.Map$`           |
|  +40.0% | +1,023.998 KiB |   1.2% → 1.6% | 2.5 MiB → 3.5 MiB |     5 → 7 | `<clinit>()`                                                                  | `scala.Predef$`                             |
|  +50.0% | +1,023.998 KiB |   1.0% → 1.4% |     2 MiB → 3 MiB |     4 → 6 | `<init>(Map)`                                                                 | `org.renaissance.harness.ConfigParser`      |

##### `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |          Delta |              % |              Size |   Samples | Callee                        | Location                                                           |
| -----: | -------------: | -------------: | ----------------: | --------: | ----------------------------- | ------------------------------------------------------------------ |
|    new |     +8.499 MiB |    0.0% → 4.3% |     0 B → 8.5 MiB |    0 → 17 | `toCsvRows(Function)`         | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |
|  +2.3% |     +4.236 MiB | 100.0% → 95.2% | 183 MiB → 187 MiB | 360 → 370 | `generateData(int, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                        |
|    new | +1,023.998 KiB |    0.0% → 0.5% |       0 B → 1 MiB |     0 → 2 | `asScala()`                   | `scala.collection.convert.AsScalaExtensions$ListHasAsScala`        |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |        Delta |             % |              Size |   Samples | Callee               | Location                                               |
| -----: | -----------: | ------------: | ----------------: | --------: | -------------------- | ------------------------------------------------------ |
|  +6.5% |  +13.499 MiB | 99.3% → 99.8% | 208 MiB → 222 MiB | 417 → 444 | `invoke()`           | `java.util.concurrent.ForkJoinTask`                    |
| -50.0% | -511.999 KiB |   0.5% → 0.2% |   1 MiB → 512 KiB |     2 → 1 | `div(double[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |       Delta |      % |              Size |   Samples | Callee            | Location           |
| -----: | ----------: | -----: | ----------------: | --------: | ----------------- | ------------------ |
| +23.1% | +12.499 MiB | 100.0% | 54 MiB → 66.5 MiB | 108 → 133 | `valueOf(double)` | `java.lang.Double` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |        Delta |              % |              Size |   Samples | Callee                                                           | Location                               |
| -----: | -----------: | -------------: | ----------------: | --------: | ---------------------------------------------------------------- | -------------------------------------- |
|  +6.1% |  +11.736 MiB | 100.0% → 99.8% | 192 MiB → 204 MiB | 378 → 403 | `foreach(Function1)`                                             | `scala.collection.immutable.List`      |
|    new | +511.999 KiB |    0.0% → 0.2% |     0 B → 512 KiB |     0 → 1 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `combineResults(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |            Size |   Samples | Callee                    | Location                                                  |
| -----: | ----------: | -----: | --------------: | --------: | ------------------------- | --------------------------------------------------------- |
| +14.8% | +11.999 MiB | 100.0% | 81 MiB → 93 MiB | 162 → 186 | `add(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |            Size |   Samples | Callee                               | Location                                                  |
| -----: | ----------: | -----: | --------------: | --------: | ------------------------------------ | --------------------------------------------------------- |
| +14.8% | +11.999 MiB | 100.0% | 81 MiB → 93 MiB | 162 → 186 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111f1b8`)

|  Change |        Delta |             % |          Size | Samples | Callee                                                                                                                 | Location                                    |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
|     new | +203.586 MiB | 0.0% → 100.0% | 0 B → 204 MiB | 0 → 403 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
| removed |  -191.85 MiB | 100.0% → 0.0% | 192 MiB → 0 B | 378 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |        Delta |            % |                Size |         Samples | Callee                    | Location                                               |
| ------: | -----------: | -----------: | ------------------: | --------------: | ------------------------- | ------------------------------------------------------ |
|   -9.8% | -842.893 MiB |       100.0% | 8.42 GiB → 7.59 GiB | 16,927 → 15,237 | `invoke()`                | `java.util.concurrent.ForkJoinTask`                    |
| removed | -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `<init>(JavaKMeans, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`)

| Change |        Delta |      % |                Size |         Samples | Callee                         | Location                                    |
| -----: | -----------: | -----: | ------------------: | --------------: | ------------------------------ | ------------------------------------------- |
|  -9.8% | -843.393 MiB | 100.0% | 8.42 GiB → 7.59 GiB | 16,932 → 15,241 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

| Change |        Delta |      % |                Size |         Samples | Callee   | Location                                                               |
| -----: | -----------: | -----: | ------------------: | --------------: | -------- | ---------------------------------------------------------------------- |
|  -9.8% | -843.393 MiB | 100.0% | 8.42 GiB → 7.59 GiB | 16,932 → 15,241 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |      % |                Size |         Samples | Callee     | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------- | ----------------------------------- |
|  -9.2% | -806.393 MiB | 100.0% | 8.58 GiB → 7.79 GiB | 17,254 → 15,637 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |        Delta |      % |                Size |         Samples | Callee     | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------- | ----------------------------------- |
|  -1.1% | -317.499 MiB | 100.0% | 29.5 GiB → 29.2 GiB | 60,456 → 59,821 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |             % |                Size |         Samples | Callee                                                    | Location                                      |
| -----: | -----------: | ------------: | ------------------: | --------------: | --------------------------------------------------------- | --------------------------------------------- |
|  +9.8% | +530.498 MiB | 17.7% → 19.6% | 5.26 GiB → 5.78 GiB | 10,781 → 11,842 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  -1.1% | -317.499 MiB | 99.1% → 98.8% | 29.5 GiB → 29.2 GiB | 60,456 → 59,821 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |      % |                Size |         Samples | Callee                 | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------------------- | ----------------------------------- |
|  -0.7% | -221.499 MiB | 100.0% | 29.8 GiB → 29.6 GiB | 61,003 → 60,560 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |        Delta |            % |          Size | Samples | Callee                                                                                       | Location                                  |
| ------: | -----------: | -----------: | ------------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
| removed |  -191.35 MiB | 99.7% → 0.0% | 191 MiB → 0 B | 377 → 0 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
| removed | -511.999 KiB |  0.3% → 0.0% | 512 KiB → 0 B |   1 → 0 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |             % |                Size |         Samples | Callee                   | Location                                                   |
| -----: | ----------: | ------------: | ------------------: | --------------: | ------------------------ | ---------------------------------------------------------- |
|  -0.7% | -61.499 MiB |        100.0% |    8.06 GiB → 8 GiB | 16,510 → 16,387 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -2.3% | -38.999 MiB | 20.9% → 20.6% | 1.68 GiB → 1.65 GiB |   3,447 → 3,369 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -0.3% | -22.499 MiB | 79.1% → 79.4% | 6.38 GiB → 6.36 GiB | 13,063 → 13,018 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `grow()` (`java.util.ArrayList`)

| Change |       Delta |      % |                Size |         Samples | Callee      | Location              |
| -----: | ----------: | -----: | ------------------: | --------------: | ----------- | --------------------- |
|  -1.0% | -59.763 MiB | 100.0% | 6.02 GiB → 5.96 GiB | 12,322 → 12,204 | `grow(int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

| Change |       Delta |      % |                Size |         Samples | Callee   | Location              |
| -----: | ----------: | -----: | ------------------: | --------------: | -------- | --------------------- |
|  -1.0% | -59.763 MiB | 100.0% | 6.02 GiB → 5.96 GiB | 12,322 → 12,204 | `grow()` | `java.util.ArrayList` |

##### `add(Object)` (`java.util.ArrayList`)

| Change |       Delta |      % |                Size |         Samples | Callee                       | Location              |
| -----: | ----------: | -----: | ------------------: | --------------: | ---------------------------- | --------------------- |
|  -1.0% | -59.763 MiB | 100.0% | 6.02 GiB → 5.96 GiB | 12,322 → 12,204 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |        Delta |     % |                Size | Samples | Callee                         | Location           |
| -----: | -----------: | ----: | ------------------: | ------: | ------------------------------ | ------------------ |
|  +5.1% | +754.434 KiB | <0.1% | 14.4 MiB → 15.1 MiB | 23 → 26 | `copyOf(Object[], int, Class)` | `java.util.Arrays` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |       Delta |             % |                Size |         Samples | Callee                  | Location           |
| -----: | ----------: | ------------: | ------------------: | --------------: | ----------------------- | ------------------ |
|  -0.3% | -66.658 MiB | 98.9% → 98.8% | 19.2 GiB → 19.1 GiB | 39,001 → 38,865 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |             % |                Size |         Samples | Callee                              | Location              |
| -----: | ----------: | ------------: | ------------------: | --------------: | ----------------------------------- | --------------------- |
|  -0.9% | -57.999 MiB | 94.3% → 93.7% | 6.01 GiB → 5.96 GiB | 12,316 → 12,200 | `add(Object)`                       | `java.util.ArrayList` |
|  +2.9% |  +8.499 MiB |   4.5% → 4.7% |   297 MiB → 305 MiB |       594 → 611 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`   |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011a3940`)

| Change |       Delta |      % |              Size |   Samples | Callee                               | Location                                                   |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------------------ | ---------------------------------------------------------- |
| -14.5% | -16.999 MiB | 100.0% | 117 MiB → 100 MiB | 234 → 200 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `<init>(Collection)` (`java.util.ArrayList`)

| Change |      Delta |      % |                Size |         Samples | Callee      | Location              |
| -----: | ---------: | -----: | ------------------: | --------------: | ----------- | --------------------- |
|  -0.1% | -6.499 MiB | 100.0% | 6.95 GiB → 6.94 GiB | 14,235 → 14,222 | `toArray()` | `java.util.ArrayList` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

| Change |      Delta |             % |              Size | Samples | Callee                      | Location                                  |
| -----: | ---------: | ------------: | ----------------: | ------: | --------------------------- | ----------------------------------------- |
| -10.4% | -2.499 MiB | 63.2% → 64.2% | 24 MiB → 21.5 MiB | 48 → 43 | `<init>(long, IntFunction)` | `java.util.stream.Nodes$FixedNodeBuilder` |

##### `makeNodeBuilder(long, IntFunction)` (`java.util.stream.ReferencePipeline`)

| Change |      Delta |      % |              Size | Samples | Callee                       | Location                 |
| -----: | ---------: | -----: | ----------------: | ------: | ---------------------------- | ------------------------ |
| -11.8% | -4.499 MiB | 100.0% | 38 MiB → 33.5 MiB | 76 → 67 | `builder(long, IntFunction)` | `java.util.stream.Nodes` |

##### `range(int, int)` (`java.util.stream.IntStream`)

| Change |        Delta |             % |              Size | Samples | Callee                                  | Location                         |
| -----: | -----------: | ------------: | ----------------: | ------: | --------------------------------------- | -------------------------------- |
|  +1.9% | +511.999 KiB | 72.0% → 79.7% | 27 MiB → 27.5 MiB | 54 → 55 | `intStream(Spliterator$OfInt, boolean)` | `java.util.stream.StreamSupport` |

##### `<init>(long, IntFunction)` (`java.util.stream.Nodes$ArrayNode`)

| Change |        Delta |             % |            Size | Samples | Callee       | Location                                                                          |
| -----: | -----------: | ------------: | --------------: | ------: | ------------ | --------------------------------------------------------------------------------- |
| -13.0% |   -2.999 MiB | 95.8% → 93.0% | 23 MiB → 20 MiB | 46 → 40 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`                               |
| +50.0% | +511.999 KiB |   4.2% → 7.0% | 1 MiB → 1.5 MiB |   2 → 3 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask$$Lambda.0x00000070011a7c10` |

##### `<init>(long, IntFunction)` (`java.util.stream.Nodes$FixedNodeBuilder`)

| Change |      Delta |      % |              Size | Samples | Callee                      | Location                           |
| -----: | ---------: | -----: | ----------------: | ------: | --------------------------- | ---------------------------------- |
| -10.4% | -2.499 MiB | 100.0% | 24 MiB → 21.5 MiB | 48 → 43 | `<init>(long, IntFunction)` | `java.util.stream.Nodes$ArrayNode` |

##### `newInvokeSpecial(Object, int, int, Object)` (`java.lang.invoke.LambdaForm$DMH.0x00000070011a4400`)

| Change |      Delta |      % |              Size | Samples | Callee                     | Location                              |
| -----: | ---------: | -----: | ----------------: | ------: | -------------------------- | ------------------------------------- |
| -20.0% | -2.499 MiB | 100.0% | 12.5 MiB → 10 MiB | 25 → 20 | `allocateInstance(Object)` | `java.lang.invoke.DirectMethodHandle` |

##### `linkToTargetMethod(int, int, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070011a4c00`)

| Change |      Delta |      % |              Size | Samples | Callee                                       | Location                                             |
| -----: | ---------: | -----: | ----------------: | ------: | -------------------------------------------- | ---------------------------------------------------- |
| -20.0% | -2.499 MiB | 100.0% | 12.5 MiB → 10 MiB | 25 → 20 | `newInvokeSpecial(Object, int, int, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070011a4400` |

##### `accept(Object, Object)` (`java.util.stream.Collectors$$Lambda.0x0000007001070ab8`)

| Change |      Delta |      % |                Size | Samples | Callee        | Location              |
| -----: | ---------: | -----: | ------------------: | ------: | ------------- | --------------------- |
| -23.6% | -1.263 MiB | 100.0% | 5.35 MiB → 4.09 MiB |   5 → 4 | `add(Object)` | `java.util.ArrayList` |

##### `accept(Object)` (`java.util.stream.ReduceOps$3ReducingSink`)

| Change |      Delta |      % |                Size | Samples | Callee                   | Location                                                 |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------ | -------------------------------------------------------- |
| -23.6% | -1.263 MiB | 100.0% | 5.35 MiB → 4.09 MiB |   5 → 4 | `accept(Object, Object)` | `java.util.stream.Collectors$$Lambda.0x0000007001070ab8` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change |      Delta |              % |            Size | Samples | Callee              | Location                           |
| ------: | ---------: | -------------: | --------------: | ------: | ------------------- | ---------------------------------- |
| removed | -3.999 MiB |   53.3% → 0.0% |     4 MiB → 0 B |   8 → 0 | `<clinit>()`        | `scala.Predef$`                    |
| removed | -2.499 MiB |   33.3% → 0.0% |   2.5 MiB → 0 B |   5 → 0 | `loadClass(String)` | `java.lang.ClassLoader`            |
| +250.0% | +2.499 MiB | 13.3% → 100.0% | 1 MiB → 3.5 MiB |   2 → 7 | `map(Function1)`    | `scala.collection.immutable.Range` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

| Change |        Delta |             % |              Size | Samples | Callee                                                        | Location                                                             |
| -----: | -----------: | ------------: | ----------------: | ------: | ------------------------------------------------------------- | -------------------------------------------------------------------- |
| -53.3% |   -3.999 MiB | 88.2% → 58.3% | 7.5 MiB → 3.5 MiB |  15 → 7 | `run(BenchmarkContext)`                                       | `org.renaissance.jdk.concurrent.FjKmeans`                            |
|    new |   +1.499 MiB |  0.0% → 25.0% |     0 B → 1.5 MiB |   0 → 3 | `validate()`                                                  | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011a6800` |
| -50.0% | -511.999 KiB |  11.8% → 8.3% |   1 MiB → 512 KiB |   2 → 1 | `notifyAfterOperationSetUp(String, int, boolean)`             | `org.renaissance.harness.EventDispatcher`                            |
|    new | +511.999 KiB |   0.0% → 8.3% |     0 B → 512 KiB |   0 → 1 | `linkMethodHandleConstant(Class, int, Class, String, Object)` | `java.lang.invoke.MethodHandleNatives`                               |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |      Delta |      % |            Size | Samples | Callee            | Location                                    |
| -----: | ---------: | -----: | --------------: | ------: | ----------------- | ------------------------------------------- |
| -71.4% | -2.499 MiB | 100.0% | 3.5 MiB → 1 MiB |   7 → 2 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |      Delta |      % |            Size | Samples | Callee                     | Location                                               |
| -----: | ---------: | -----: | --------------: | ------: | -------------------------- | ------------------------------------------------------ |
| -71.4% | -2.499 MiB | 100.0% | 3.5 MiB → 1 MiB |   7 → 2 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `parse(String[])` (`org.renaissance.harness.ConfigParser`)

| Change |          Delta |             % |          Size | Samples | Callee               | Location             |
| -----: | -------------: | ------------: | ------------: | ------: | -------------------- | -------------------- |
| -33.3% | -1,023.998 KiB | 85.7% → 80.0% | 3 MiB → 2 MiB |   6 → 4 | `parse(Seq, Object)` | `scopt.OptionParser` |

##### `parse(Seq, Object)` (`scopt.OptionParser`)

|  Change |        Delta |              % |            Size | Samples | Callee                                       | Location                |
| ------: | -----------: | -------------: | --------------: | ------: | -------------------------------------------- | ----------------------- |
| removed | -511.999 KiB |   16.7% → 0.0% |   512 KiB → 0 B |   1 → 0 | `loadClass(String)`                          | `java.lang.ClassLoader` |
|  -20.0% | -511.999 KiB | 83.3% → 100.0% | 2.5 MiB → 2 MiB |   5 → 4 | `runParser(Seq, Object, List, OParserSetup)` | `scopt.ORunner$`        |

##### `createScratchDirectory(Path, String, boolean)` (`org.renaissance.core.DirUtils`)

|  Change |        Delta |             % |          Size | Samples | Callee                                               | Location              |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------------------------------- | --------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `createTempDirectory(Path, String, FileAttribute[])` | `java.nio.file.Files` |

##### `createScratchRoot(Path, boolean)` (`org.renaissance.core.Launcher`)

|  Change |        Delta |             % |          Size | Samples | Callee                                          | Location                        |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------------------------------- | ------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `createScratchDirectory(Path, String, boolean)` | `org.renaissance.core.DirUtils` |

##### `<init>()` (`scopt.Read$$anon$2`)

|  Change |        Delta |             % |          Size | Samples | Callee                                                           | Location                               |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------------------------------------------- | -------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in bytes allocated in their leaf frame.

|  Change |       Delta |            % |                 Size |       Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------: | ----------: | -----------: | -------------------: | ------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|   +7.0% | +90.999 MiB |  3.5% → 3.7% |  1.27 GiB → 1.36 GiB | 2,608 → 2,790 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7490`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|   +9.0% | +80.499 MiB |  2.4% → 2.6% |    898 MiB → 979 MiB | 1,797 → 1,958 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)       |
|     new | +66.499 MiB |  0.0% → 0.2% |       0 B → 66.5 MiB |       0 → 133 | `valueOf(double)` (`java.lang.Double`) ← `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluate(Spliterator, boolean, IntFunction)` ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111f1b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001004800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|   +5.7% | +65.499 MiB |  3.1% → 3.2% |  1.13 GiB → 1.19 GiB | 2,312 → 2,443 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7490`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|   +6.2% | +59.499 MiB |  2.5% → 2.7% |  956 MiB → 1,015 MiB | 1,912 → 2,031 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                         |
|   +5.2% | +52.999 MiB |  2.7% → 2.8% | 1,017 MiB → 1.05 GiB | 2,035 → 2,141 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7490`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  +51.8% | +50.499 MiB |  0.3% → 0.4% |   97.5 MiB → 148 MiB |     195 → 296 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7490`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|     new | +29.999 MiB |  0.0% → 0.1% |         0 B → 30 MiB |        0 → 60 | `mapToObj(IntFunction, int)` (`java.util.stream.IntPipeline`) ← `mapToObj(IntFunction)` ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111f1b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001004800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|   +4.9% | +27.499 MiB |  1.5% → 1.6% |    566 MiB → 594 MiB | 1,133 → 1,188 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7490`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|     new | +27.499 MiB |  0.0% → 0.1% |       0 B → 27.5 MiB |        0 → 55 | `intStream(Spliterator$OfInt, boolean)` (`java.util.stream.StreamSupport`) ← `range(int, int)` (`java.util.stream.IntStream`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111f1b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001004800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| +154.3% | +26.999 MiB | <0.1% → 0.1% |  17.5 MiB → 44.5 MiB |       35 → 89 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`) |
|   +8.6% | +26.499 MiB |  0.8% → 0.9% |    306 MiB → 333 MiB |     613 → 666 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7490`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  +69.3% | +25.999 MiB |  0.1% → 0.2% |  37.5 MiB → 63.5 MiB |      75 → 127 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7490`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|   +4.5% | +23.499 MiB |         1.4% |    520 MiB → 544 MiB | 1,041 → 1,088 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7490`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  +41.3% | +22.499 MiB |  0.1% → 0.2% |    54.5 MiB → 77 MiB |     109 → 154 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7490`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  +35.2% | +21.499 MiB |         0.2% |    61 MiB → 82.5 MiB |     122 → 165 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7490`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|   +0.9% | +20.499 MiB |         5.9% |  2.16 GiB → 2.18 GiB | 4,420 → 4,461 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7490`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  +54.7% | +20.499 MiB |  0.1% → 0.2% |    37.5 MiB → 58 MiB |      75 → 116 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7490`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|   +5.9% | +19.999 MiB |         0.9% |    336 MiB → 356 MiB |     673 → 713 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7490`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                 |
|     new | +19.999 MiB |  0.0% → 0.1% |         0 B → 20 MiB |        0 → 40 | `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `<init>(long, IntFunction)` (`java.util.stream.Nodes$ArrayNode`) ← `<init>(long, IntFunction)` (`java.util.stream.Nodes$FixedNodeBuilder`) ← `builder(long, IntFunction)` (`java.util.stream.Nodes`) ← `makeNodeBuilder(long, IntFunction)` (`java.util.stream.ReferencePipeline`) ← `evaluate(Spliterator, boolean, IntFunction)` (`java.util.stream.AbstractPipeline`) ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111f1b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001004800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

### Improvements

Call stacks with the largest decrease in bytes allocated in their leaf frame.

|  Change |        Delta |           % |                Size |       Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------: | -----------: | ----------: | ------------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -20.2% | -144.999 MiB | 1.9% → 1.5% |   717 MiB → 572 MiB | 1,434 → 1,144 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  -19.8% | -129.999 MiB | 1.7% → 1.4% |   657 MiB → 527 MiB | 1,315 → 1,055 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                         |
|  -33.0% |  -59.499 MiB | 0.5% → 0.3% |   180 MiB → 121 MiB |     361 → 242 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7490`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  -27.3% |  -54.499 MiB | 0.5% → 0.4% |   200 MiB → 145 MiB |     400 → 291 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                         |
| removed |  -53.999 MiB | 0.1% → 0.0% |        54 MiB → 0 B |       108 → 0 | `valueOf(double)` (`java.lang.Double`) ← `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluate(Spliterator, boolean, IntFunction)` ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111f208`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001004800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -31.8% |  -52.499 MiB | 0.4% → 0.3% |   165 MiB → 112 MiB |     330 → 225 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7490`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  -21.4% |  -45.499 MiB | 0.6% → 0.4% |   213 MiB → 167 MiB |     426 → 335 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7490`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  -20.8% |  -40.999 MiB | 0.5% → 0.4% |   197 MiB → 156 MiB |     395 → 313 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  -20.7% |  -39.499 MiB | 0.5% → 0.4% |   191 MiB → 151 MiB |     382 → 303 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7490`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|   -8.0% |  -37.499 MiB | 1.2% → 1.1% |   469 MiB → 432 MiB |     939 → 864 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7490`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  -38.5% |  -35.999 MiB |        0.2% | 93.5 MiB → 57.5 MiB |     187 → 115 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7490`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  -20.9% |  -35.499 MiB |        0.4% |   169 MiB → 134 MiB |     339 → 268 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7490`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -18.8% |  -35.499 MiB | 0.5% → 0.4% |   189 MiB → 153 MiB |     378 → 307 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7490`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`) |
|  -22.0% |  -33.499 MiB | 0.4% → 0.3% |   152 MiB → 118 MiB |     304 → 237 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7490`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  -25.7% |  -31.999 MiB | 0.3% → 0.2% |  124 MiB → 92.5 MiB |     249 → 185 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7490`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  -33.7% |  -30.999 MiB |        0.2% |     92 MiB → 61 MiB |     184 → 122 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7490`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  -32.1% |  -29.499 MiB |        0.2% |   92 MiB → 62.5 MiB |     184 → 125 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7490`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|   -5.0% |  -28.999 MiB |        1.5% |   579 MiB → 550 MiB | 1,158 → 1,100 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7490`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  -33.5% |  -28.499 MiB | 0.2% → 0.1% |   85 MiB → 56.5 MiB |     170 → 113 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7490`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  -30.1% |  -27.499 MiB |        0.2% |   91.5 MiB → 64 MiB |     183 → 128 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7490`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

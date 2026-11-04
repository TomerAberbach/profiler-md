# Allocated heap profile diff

Allocated 37.8 GiB → 36.7 GiB (-1.052 GiB, -2.8%) over 1,113 → 960 samples (34.8 MiB → 39.2 MiB per sample).

| Category         | Change |        Delta |             % |                Size |     Samples |
| ---------------- | -----: | -----------: | ------------: | ------------------: | ----------: |
| Standard library |  -3.9% |    -1.42 GiB | 97.1% → 96.0% | 36.7 GiB → 35.3 GiB | 1,062 → 907 |
| Ours             | +33.3% | +376.614 MiB |   2.9% → 4.0% | 1.11 GiB → 1.47 GiB |     51 → 52 |
| Unknown          |    new |   +1.984 KiB |  0.0% → <0.1% |      0 B → 1.98 KiB |       0 → 1 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── 37.7 GiB → 36.5 GiB (99.7% → 99.4%) run() at java.util.concurrent.ForkJoinWorkerThread
│   └── 37.7 GiB → 36.5 GiB (99.7% → 99.4%) runWorker(ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool
│       └── 37.7 GiB → 36.5 GiB (99.7% → 99.4%) scan(ForkJoinPool$WorkQueue, int, int)
│           └── 37.7 GiB → 36.5 GiB (99.7% → 99.4%) topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool$WorkQueue
│               └── 37.7 GiB → 36.5 GiB (99.7% → 99.4%) doExec() at java.util.concurrent.ForkJoinTask
│                   └── … 37.7 GiB → 36.5 GiB (99.7% → 99.4%) exec() at java.util.concurrent.RecursiveTask
│                       └── 37.7 GiB → 36.5 GiB (99.7% → 99.4%) compute() at org.renaissance.jdk.concurrent.JavaKMeans$RangedTask
│                           ├── 34 GiB → 31.7 GiB (90.1% → 86.4%) combineResults(Object, Object) at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│                           │   └── 34 GiB → 31.7 GiB (90.1% → 86.4%) combineResults(Map, Map)
│                           │       └── 34 GiB → 31.7 GiB (90.1% → 86.4%) merge(Map, Map) at org.renaissance.jdk.concurrent.JavaKMeans
│                           │           ├── 33.9 GiB → 31.7 GiB (89.8% → 86.4%) forEach(BiConsumer) at java.util.HashMap
│                           │           │   └── 33.9 GiB → 31.7 GiB (89.8% → 86.4%) accept(Object, Object) at org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011facb0
│                           │           │       └── 33.9 GiB → 31.7 GiB (89.8% → 86.4%) lambda$merge$7(Map, Object, List) at org.renaissance.jdk.concurrent.JavaKMeans
│                           │           │           └── 33.9 GiB → 31.7 GiB (89.8% → 86.4%) merge(Object, Object, BiFunction) at java.util.HashMap
│                           │           │               └── 33.9 GiB → 31.7 GiB (89.8% → 86.4%) apply(Object, Object) at org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fb140
│                           │           │                   └── 33.9 GiB → 31.7 GiB (89.8% → 86.4%, self 0.1% → 0.6%) lambda$merge$6(List, List) at org.renaissance.jdk.concurrent.JavaKMeans
│                           │           │                       ├── 26.6 GiB → 23.3 GiB (70.4% → 63.4%) addAll(Collection) at java.util.ArrayList
│                           │           │                       │   ├── 15.1 GiB → 14.5 GiB (40.1% → 39.5%) grow(int)
│                           │           │                       │   │   └── 15.1 GiB → 14.5 GiB (40.1% → 39.5%, self 40.1% → 39.5%, self 95.6% → 94.7% globally) copyOf(Object[], int) at java.util.Arrays
│                           │           │                       │   └── 11.5 GiB → 8.77 GiB (30.3% → 23.9%) toArray()
│                           │           │                       │       └── 11.5 GiB → 8.77 GiB (30.3% → 23.9%) copyOf(Object[], int) at java.util.Arrays
│                           │           │                       └── 7.3 GiB → 8.22 GiB (19.3% → 22.4%) <init>(Collection) at java.util.ArrayList
│                           │           │                           └── 7.3 GiB → 8.22 GiB (19.3% → 22.4%) toArray()
│                           │           │                               └── 7.3 GiB → 8.22 GiB (19.3% → 22.4%) copyOf(Object[], int) at java.util.Arrays
│                           │           └── … 70.4 MiB → 0 B (0.2% → 0.0%) iterator() at java.util.HashMap$EntrySet
│                           ├── 3.58 GiB → 4.56 GiB (9.5% → 12.4%) computeDirectly() at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│                           │   ├── … 2.74 GiB → 3.79 GiB (7.3% → 10.3%) collectClusters(int[]) at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│                           │   │   ├── … 2.41 GiB → 3.38 GiB (6.4% → 9.2%) grow(int) at java.util.ArrayList
│                           │   │   │   └── 2.24 GiB → 3.29 GiB (5.9% → 8.9%) copyOf(Object[], int) at java.util.Arrays
│                           │   │   └── 339 MiB → 386 MiB (0.9% → 1.0%) computeIfAbsent(Object, Function) at java.util.HashMap
│                           │   │       ├── 182 MiB → 280 MiB (0.5% → 0.7%) newNode(int, Object, Object, HashMap$Node)
│                           │   │       └── 157 MiB → 102 MiB (0.4% → 0.3%) apply(Object) at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011faa60
│                           │   │           └── 157 MiB → 102 MiB (0.4% → 0.3%) lambda$collectClusters$0(Double[]) at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│                           │   └── … 854 MiB → 787 MiB (2.2% → 2.1%) findNearestCentroid() at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│                           ├── 7.25 MiB → 144 MiB (<0.1% → 0.4%) createSubtask(int, int) at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│                           ├── 56.8 MiB → 18 MiB (0.1% → <0.1%) createSubtask(int, int) at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│                           └── … 0 B → 28.8 MiB (0.0% → 0.1%) add(double[], double[]) at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
└── … 68.4 MiB → 194 MiB (0.2% → 0.5%) applyVoid(Object) at org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000070011583b8
    ├── … 0 B → 169 MiB (0.0% → 0.5%) collectGarbage(String) at org.renaissance.harness.ExecutionPlugins$ForceGcPlugin
    └── … 50 MiB → 0 B (0.1% → 0.0%) mapToObj(IntFunction, int) at java.util.stream.IntPipeline
```

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|   Change |        Delta |            % |                Size | Samples | Function                                                                        | Location                                                   |
| -------: | -----------: | -----------: | ------------------: | ------: | ------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|  +533.7% | +184.999 MiB |  0.1% → 0.6% |  34.7 MiB → 220 MiB |   3 → 1 | `lambda$merge$6(List, List)`                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|      new |  +169.28 MiB |  0.0% → 0.5% |       0 B → 169 MiB |   0 → 1 | `collectGarbage(String)`                                                        | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`   |
| +1891.2% | +137.106 MiB | <0.1% → 0.4% |  7.25 MiB → 144 MiB |   3 → 5 | `createSubtask(int, int)`                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   +56.4% | +111.435 MiB |  0.5% → 0.8% |   197 MiB → 309 MiB |       7 | `newNode(int, Object, Object, HashMap$Node)`                                    | `java.util.HashMap`                                        |
|  +854.7% |  +32.487 MiB | <0.1% → 0.1% |  3.8 MiB → 36.3 MiB |   2 → 4 | `collectClusters(int[])`                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|      new |    +28.8 MiB |  0.0% → 0.1% |      0 B → 28.8 MiB |   0 → 1 | `add(double[], double[])`                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|      new |  +16.953 MiB | 0.0% → <0.1% |        0 B → 17 MiB |   0 → 1 | `initCEN(int, ZipCoder)`                                                        | `java.util.zip.ZipFile$Source`                             |
|  +175.5% |  +11.014 MiB |        <0.1% | 6.27 MiB → 17.3 MiB | 15 → 23 | `copyOf(byte[], int)`                                                           | `java.util.Arrays`                                         |
|      new |   +8.628 MiB | 0.0% → <0.1% |      0 B → 8.63 MiB |   0 → 3 | `opWrapSink(int, Sink)`                                                         | `java.util.stream.IntPipeline$1`                           |
| +1704.3% |    +6.42 MiB |        <0.1% |   386 KiB → 6.8 MiB |       1 | `addConstantUtf8Reference(int, String)`                                         | `jdk.internal.org.objectweb.asm.SymbolTable`               |
|      new |   +1.159 MiB | 0.0% → <0.1% |      0 B → 1.16 MiB |   0 → 3 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                                    |
|  +122.1% |   +1.091 MiB |        <0.1% |  915 KiB → 1.98 MiB |   3 → 4 | `range(int, int)`                                                               | `java.util.stream.IntStream`                               |
|      new |  +999.71 KiB | 0.0% → <0.1% |     0 B → 1,000 KiB |   0 → 3 | `copyOfRangeByte(byte[], int, int)`                                             | `java.util.Arrays`                                         |
|      new | +964.945 KiB | 0.0% → <0.1% |       0 B → 965 KiB |   0 → 1 | `register(Object, Runnable)`                                                    | `java.lang.ref.Cleaner`                                    |
|      new | +913.757 KiB | 0.0% → <0.1% |       0 B → 914 KiB |   0 → 2 | `copyOfRange(byte[], int, int)`                                                 | `java.util.Arrays`                                         |
|      new | +878.125 KiB | 0.0% → <0.1% |       0 B → 878 KiB |   0 → 2 | `newString(byte[], int, int)`                                                   | `java.lang.StringLatin1`                                   |
|      new | +775.093 KiB | 0.0% → <0.1% |       0 B → 775 KiB |   0 → 2 | `<init>(int)`                                                                   | `java.io.ByteArrayOutputStream`                            |
|  +142.6% | +550.101 KiB |        <0.1% |   386 KiB → 936 KiB |   1 → 2 | `allocateInstance(Class)`                                                       | `jdk.internal.misc.Unsafe`                                 |
|      new | +506.578 KiB | 0.0% → <0.1% |       0 B → 507 KiB |   0 → 1 | `newLinkedHashMap(int)`                                                         | `java.util.LinkedHashMap`                                  |
|      new | +492.695 KiB | 0.0% → <0.1% |       0 B → 493 KiB |   0 → 1 | `appendLiteral(String)`                                                         | `java.time.format.DateTimeFormatterBuilder`                |

##### Standard library

|   Change |        Delta |            % |                Size | Samples | Function                                                                        | Location                                      |
| -------: | -----------: | -----------: | ------------------: | ------: | ------------------------------------------------------------------------------- | --------------------------------------------- |
|   +56.4% | +111.435 MiB |  0.5% → 0.8% |   197 MiB → 309 MiB |       7 | `newNode(int, Object, Object, HashMap$Node)`                                    | `java.util.HashMap`                           |
|      new |  +16.953 MiB | 0.0% → <0.1% |        0 B → 17 MiB |   0 → 1 | `initCEN(int, ZipCoder)`                                                        | `java.util.zip.ZipFile$Source`                |
|  +175.5% |  +11.014 MiB |        <0.1% | 6.27 MiB → 17.3 MiB | 15 → 23 | `copyOf(byte[], int)`                                                           | `java.util.Arrays`                            |
|      new |   +8.628 MiB | 0.0% → <0.1% |      0 B → 8.63 MiB |   0 → 3 | `opWrapSink(int, Sink)`                                                         | `java.util.stream.IntPipeline$1`              |
| +1704.3% |    +6.42 MiB |        <0.1% |   386 KiB → 6.8 MiB |       1 | `addConstantUtf8Reference(int, String)`                                         | `jdk.internal.org.objectweb.asm.SymbolTable`  |
|      new |   +1.159 MiB | 0.0% → <0.1% |      0 B → 1.16 MiB |   0 → 3 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                       |
|  +122.1% |   +1.091 MiB |        <0.1% |  915 KiB → 1.98 MiB |   3 → 4 | `range(int, int)`                                                               | `java.util.stream.IntStream`                  |
|      new |  +999.71 KiB | 0.0% → <0.1% |     0 B → 1,000 KiB |   0 → 3 | `copyOfRangeByte(byte[], int, int)`                                             | `java.util.Arrays`                            |
|      new | +964.945 KiB | 0.0% → <0.1% |       0 B → 965 KiB |   0 → 1 | `register(Object, Runnable)`                                                    | `java.lang.ref.Cleaner`                       |
|      new | +913.757 KiB | 0.0% → <0.1% |       0 B → 914 KiB |   0 → 2 | `copyOfRange(byte[], int, int)`                                                 | `java.util.Arrays`                            |
|      new | +878.125 KiB | 0.0% → <0.1% |       0 B → 878 KiB |   0 → 2 | `newString(byte[], int, int)`                                                   | `java.lang.StringLatin1`                      |
|      new | +775.093 KiB | 0.0% → <0.1% |       0 B → 775 KiB |   0 → 2 | `<init>(int)`                                                                   | `java.io.ByteArrayOutputStream`               |
|  +142.6% | +550.101 KiB |        <0.1% |   386 KiB → 936 KiB |   1 → 2 | `allocateInstance(Class)`                                                       | `jdk.internal.misc.Unsafe`                    |
|      new | +506.578 KiB | 0.0% → <0.1% |       0 B → 507 KiB |   0 → 1 | `newLinkedHashMap(int)`                                                         | `java.util.LinkedHashMap`                     |
|      new | +492.695 KiB | 0.0% → <0.1% |       0 B → 493 KiB |   0 → 1 | `appendLiteral(String)`                                                         | `java.time.format.DateTimeFormatterBuilder`   |
|      new | +418.218 KiB | 0.0% → <0.1% |       0 B → 418 KiB |   0 → 1 | `transferTo(OutputStream)`                                                      | `java.io.InputStream`                         |
|      new | +401.406 KiB | 0.0% → <0.1% |       0 B → 401 KiB |   0 → 1 | `addConstantNameAndType(String, String)`                                        | `jdk.internal.org.objectweb.asm.SymbolTable`  |
|      new | +400.929 KiB | 0.0% → <0.1% |       0 B → 401 KiB |   0 → 1 | `<init>(InputStream, int)`                                                      | `java.util.jar.Manifest$FastInputStream`      |
|      new | +394.531 KiB | 0.0% → <0.1% |       0 B → 395 KiB |   0 → 1 | `<init>(SymbolTable, int, String, String, String, String[], int)`               | `jdk.internal.org.objectweb.asm.MethodWriter` |
|      new | +392.312 KiB | 0.0% → <0.1% |       0 B → 392 KiB |   0 → 1 | `<init>()`                                                                      | `jdk.internal.org.objectweb.asm.ByteVector`   |

##### Ours

|   Change |        Delta |            % |               Size | Samples | Function                     | Location                                                   |
| -------: | -----------: | -----------: | -----------------: | ------: | ---------------------------- | ---------------------------------------------------------- |
|  +533.7% | +184.999 MiB |  0.1% → 0.6% | 34.7 MiB → 220 MiB |   3 → 1 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|      new |  +169.28 MiB |  0.0% → 0.5% |      0 B → 169 MiB |   0 → 1 | `collectGarbage(String)`     | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`   |
| +1891.2% | +137.106 MiB | <0.1% → 0.4% | 7.25 MiB → 144 MiB |   3 → 5 | `createSubtask(int, int)`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +854.7% |  +32.487 MiB | <0.1% → 0.1% | 3.8 MiB → 36.3 MiB |   2 → 4 | `collectClusters(int[])`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|      new |    +28.8 MiB |  0.0% → 0.1% |     0 B → 28.8 MiB |   0 → 1 | `add(double[], double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

#### Improvements

Functions with the largest decrease in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |        Delta |             % |                Size |   Samples | Function                                  | Location                                                   |
| ------: | -----------: | ------------: | ------------------: | --------: | ----------------------------------------- | ---------------------------------------------------------- |
|   -3.7% |   -1.347 GiB | 95.6% → 94.7% | 36.1 GiB → 34.8 GiB | 958 → 807 | `copyOf(Object[], int)`                   | `java.util.Arrays`                                         |
|  -47.9% |  -84.917 MiB |   0.5% → 0.2% |  177 MiB → 92.3 MiB |     8 → 4 | `grow(int)`                               | `java.util.ArrayList`                                      |
| removed |  -70.363 MiB |   0.2% → 0.0% |      70.4 MiB → 0 B |     1 → 0 | `iterator()`                              | `java.util.HashMap$EntrySet`                               |
|   -7.8% |   -66.93 MiB |   2.2% → 2.1% |   854 MiB → 787 MiB |   29 → 28 | `findNearestCentroid()`                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -35.1% |  -55.063 MiB |   0.4% → 0.3% |   157 MiB → 102 MiB |         3 | `lambda$collectClusters$0(Double[])`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -94.7% |  -47.363 MiB |  0.1% → <0.1% |   50 MiB → 2.64 MiB |    10 → 5 | `mapToObj(IntFunction, int)`              | `java.util.stream.IntPipeline`                             |
|  -68.4% |  -38.867 MiB |  0.1% → <0.1% |   56.8 MiB → 18 MiB |     2 → 4 | `createSubtask(int, int)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -82.2% |  -17.637 MiB |  0.1% → <0.1% | 21.5 MiB → 3.82 MiB |     4 → 2 | `resize()`                                | `java.util.HashMap`                                        |
|  -87.8% |  -10.718 MiB |         <0.1% | 12.2 MiB → 1.49 MiB |     2 → 1 | `merge(Map, Map)`                         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |   -7.325 MiB |  <0.1% → 0.0% |      7.33 MiB → 0 B |     7 → 0 | `copyOf(Object[], int, Class)`            | `java.util.Arrays`                                         |
|  -65.7% |   -6.509 MiB |         <0.1% |  9.91 MiB → 3.4 MiB |    22 → 8 | `valueOf(double)`                         | `java.lang.Double`                                         |
|  -87.9% |   -3.693 MiB |         <0.1% |   4.2 MiB → 522 KiB |     2 → 1 | `<init>(ClassWriter)`                     | `jdk.internal.org.objectweb.asm.SymbolTable`               |
| removed |   -2.528 MiB |  <0.1% → 0.0% |      2.53 MiB → 0 B |     1 → 0 | `createSubtask(int, int)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -37.6% |   -1.005 MiB |         <0.1% | 2.68 MiB → 1.67 MiB |     5 → 4 | `lambda$generateData$4(int)`              | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed | -968.843 KiB |  <0.1% → 0.0% |       969 KiB → 0 B |     1 → 0 | `vectorSum()`                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| removed | -662.843 KiB |  <0.1% → 0.0% |       663 KiB → 0 B |     2 → 0 | `allocateInstance(Object)`                | `java.lang.invoke.DirectMethodHandle`                      |
| removed | -490.765 KiB |  <0.1% → 0.0% |       491 KiB → 0 B |     1 → 0 | `descriptorString()`                      | `java.lang.Class`                                          |
| removed | -388.773 KiB |  <0.1% → 0.0% |       389 KiB → 0 B |     1 → 0 | `addConstantUtf8(String)`                 | `jdk.internal.org.objectweb.asm.SymbolTable`               |
| removed | -386.718 KiB |  <0.1% → 0.0% |       387 KiB → 0 B |     1 → 0 | `put(Object, Object)`                     | `java.util.WeakHashMap`                                    |
| removed | -372.898 KiB |  <0.1% → 0.0% |       373 KiB → 0 B |     1 → 0 | `allocateUninitializedArray0(Class, int)` | `jdk.internal.misc.Unsafe`                                 |

##### Standard library

|  Change |        Delta |             % |                Size |   Samples | Function                                             | Location                                       |
| ------: | -----------: | ------------: | ------------------: | --------: | ---------------------------------------------------- | ---------------------------------------------- |
|   -3.7% |   -1.347 GiB | 95.6% → 94.7% | 36.1 GiB → 34.8 GiB | 958 → 807 | `copyOf(Object[], int)`                              | `java.util.Arrays`                             |
|  -47.9% |  -84.917 MiB |   0.5% → 0.2% |  177 MiB → 92.3 MiB |     8 → 4 | `grow(int)`                                          | `java.util.ArrayList`                          |
| removed |  -70.363 MiB |   0.2% → 0.0% |      70.4 MiB → 0 B |     1 → 0 | `iterator()`                                         | `java.util.HashMap$EntrySet`                   |
|  -94.7% |  -47.363 MiB |  0.1% → <0.1% |   50 MiB → 2.64 MiB |    10 → 5 | `mapToObj(IntFunction, int)`                         | `java.util.stream.IntPipeline`                 |
|  -82.2% |  -17.637 MiB |  0.1% → <0.1% | 21.5 MiB → 3.82 MiB |     4 → 2 | `resize()`                                           | `java.util.HashMap`                            |
| removed |   -7.325 MiB |  <0.1% → 0.0% |      7.33 MiB → 0 B |     7 → 0 | `copyOf(Object[], int, Class)`                       | `java.util.Arrays`                             |
|  -65.7% |   -6.509 MiB |         <0.1% |  9.91 MiB → 3.4 MiB |    22 → 8 | `valueOf(double)`                                    | `java.lang.Double`                             |
|  -87.9% |   -3.693 MiB |         <0.1% |   4.2 MiB → 522 KiB |     2 → 1 | `<init>(ClassWriter)`                                | `jdk.internal.org.objectweb.asm.SymbolTable`   |
| removed | -662.843 KiB |  <0.1% → 0.0% |       663 KiB → 0 B |     2 → 0 | `allocateInstance(Object)`                           | `java.lang.invoke.DirectMethodHandle`          |
| removed | -490.765 KiB |  <0.1% → 0.0% |       491 KiB → 0 B |     1 → 0 | `descriptorString()`                                 | `java.lang.Class`                              |
| removed | -388.773 KiB |  <0.1% → 0.0% |       389 KiB → 0 B |     1 → 0 | `addConstantUtf8(String)`                            | `jdk.internal.org.objectweb.asm.SymbolTable`   |
| removed | -386.718 KiB |  <0.1% → 0.0% |       387 KiB → 0 B |     1 → 0 | `put(Object, Object)`                                | `java.util.WeakHashMap`                        |
| removed | -372.898 KiB |  <0.1% → 0.0% |       373 KiB → 0 B |     1 → 0 | `allocateUninitializedArray0(Class, int)`            | `jdk.internal.misc.Unsafe`                     |
| removed | -285.789 KiB |  <0.1% → 0.0% |       286 KiB → 0 B |     1 → 0 | `visitMethod(int, String, String, String, String[])` | `jdk.internal.org.objectweb.asm.ClassWriter`   |
|  -16.7% | -275.367 KiB |         <0.1% | 1.61 MiB → 1.34 MiB |         3 | `intStream(Spliterator$OfInt, boolean)`              | `java.util.stream.StreamSupport`               |
|  -34.0% | -252.242 KiB |         <0.1% |   743 KiB → 490 KiB |         1 | `readNBytes(int)`                                    | `java.io.InputStream`                          |
| removed | -228.718 KiB |  <0.1% → 0.0% |       229 KiB → 0 B |     1 → 0 | `getBytes()`                                         | `jdk.internal.loader.URLClassPath$JarLoader$2` |
| removed | -162.609 KiB |  <0.1% → 0.0% |       163 KiB → 0 B |     1 → 0 | `clone()`                                            | `java.lang.Object`                             |
|   -0.5% |   -1.335 KiB |         <0.1% |   251 KiB → 250 KiB |         1 | `builder(long, IntFunction)`                         | `java.util.stream.Nodes`                       |

##### Ours

|  Change |        Delta |            % |                Size | Samples | Function                             | Location                                                   |
| ------: | -----------: | -----------: | ------------------: | ------: | ------------------------------------ | ---------------------------------------------------------- |
|   -7.8% |   -66.93 MiB |  2.2% → 2.1% |   854 MiB → 787 MiB | 29 → 28 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -35.1% |  -55.063 MiB |  0.4% → 0.3% |   157 MiB → 102 MiB |       3 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -68.4% |  -38.867 MiB | 0.1% → <0.1% |   56.8 MiB → 18 MiB |   2 → 4 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -87.8% |  -10.718 MiB |        <0.1% | 12.2 MiB → 1.49 MiB |   2 → 1 | `merge(Map, Map)`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |   -2.528 MiB | <0.1% → 0.0% |      2.53 MiB → 0 B |   1 → 0 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -37.6% |   -1.005 MiB |        <0.1% | 2.68 MiB → 1.67 MiB |   5 → 4 | `lambda$generateData$4(int)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed | -968.843 KiB | <0.1% → 0.0% |       969 KiB → 0 B |   1 → 0 | `vectorSum()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |        Delta |      % |               Size | Samples | Location                                        |
| ------: | -----------: | -----: | -----------------: | ------: | ----------------------------------------------- |
| +533.7% | +184.999 MiB | 100.0% | 34.7 MiB → 220 MiB |   3 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans:114` |

##### `collectGarbage(String)` (`org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`)

| Change |       Delta |             % |          Size | Samples | Location                                                    |
| -----: | ----------: | ------------: | ------------: | ------: | ----------------------------------------------------------- |
|    new | +169.28 MiB | 0.0% → 100.0% | 0 B → 169 MiB |   0 → 1 | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin:26` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|   Change |        Delta |      % |               Size | Samples | Location                                                      |
| -------: | -----------: | -----: | -----------------: | ------: | ------------------------------------------------------------- |
| +1891.2% | +137.106 MiB | 100.0% | 7.25 MiB → 144 MiB |   3 → 5 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

| Change |        Delta |      % |              Size | Samples | Location                 |
| -----: | -----------: | -----: | ----------------: | ------: | ------------------------ |
| +56.4% | +111.435 MiB | 100.0% | 197 MiB → 309 MiB |       7 | `java.util.HashMap:1909` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change |       Delta |      % |               Size | Samples | Location                                                       |
| ------: | ----------: | -----: | -----------------: | ------: | -------------------------------------------------------------- |
| +854.7% | +32.487 MiB | 100.0% | 3.8 MiB → 36.3 MiB |   2 → 4 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:209` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |     Delta |             % |           Size | Samples | Location                                                      |
| -----: | --------: | ------------: | -------------: | ------: | ------------------------------------------------------------- |
|    new | +28.8 MiB | 0.0% → 100.0% | 0 B → 28.8 MiB |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:430` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |       Delta |             % |         Size | Samples | Location                            |
| -----: | ----------: | ------------: | -----------: | ------: | ----------------------------------- |
|    new | +16.953 MiB | 0.0% → 100.0% | 0 B → 17 MiB |   0 → 1 | `java.util.zip.ZipFile$Source:1733` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|  Change |       Delta |      % |                Size | Samples | Location                |
| ------: | ----------: | -----: | ------------------: | ------: | ----------------------- |
| +175.5% | +11.014 MiB | 100.0% | 6.27 MiB → 17.3 MiB | 15 → 23 | `java.util.Arrays:3541` |

##### `opWrapSink(int, Sink)` (`java.util.stream.IntPipeline$1`)

| Change |      Delta |             % |           Size | Samples | Location                             |
| -----: | ---------: | ------------: | -------------: | ------: | ------------------------------------ |
|    new | +8.628 MiB | 0.0% → 100.0% | 0 B → 8.63 MiB |   0 → 3 | `java.util.stream.IntPipeline$1:177` |

##### `addConstantUtf8Reference(int, String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|   Change |     Delta |      % |              Size | Samples | Location                                          |
| -------: | --------: | -----: | ----------------: | ------: | ------------------------------------------------- |
| +1704.3% | +6.42 MiB | 100.0% | 386 KiB → 6.8 MiB |       1 | `jdk.internal.org.objectweb.asm.SymbolTable:1040` |

##### `range(int, int)` (`java.util.stream.IntStream`)

|  Change |      Delta |      % |               Size | Samples | Location                          |
| ------: | ---------: | -----: | -----------------: | ------: | --------------------------------- |
| +122.1% | +1.091 MiB | 100.0% | 915 KiB → 1.98 MiB |   3 → 4 | `java.util.stream.IntStream:1083` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

| Change |       Delta |             % |            Size | Samples | Location                |
| -----: | ----------: | ------------: | --------------: | ------: | ----------------------- |
|    new | +999.71 KiB | 0.0% → 100.0% | 0 B → 1,000 KiB |   0 → 3 | `java.util.Arrays:3863` |

##### `register(Object, Runnable)` (`java.lang.ref.Cleaner`)

| Change |        Delta |             % |          Size | Samples | Location                    |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------- |
|    new | +964.945 KiB | 0.0% → 100.0% | 0 B → 965 KiB |   0 → 1 | `java.lang.ref.Cleaner:224` |

##### `copyOfRange(byte[], int, int)` (`java.util.Arrays`)

| Change |        Delta |             % |          Size | Samples | Location                |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------- |
|    new | +913.757 KiB | 0.0% → 100.0% | 0 B → 914 KiB |   0 → 2 | `java.util.Arrays:3856` |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

| Change |        Delta |             % |          Size | Samples | Location                     |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------------- |
|    new | +878.125 KiB | 0.0% → 100.0% | 0 B → 878 KiB |   0 → 2 | `java.lang.StringLatin1:750` |

##### `<init>(int)` (`java.io.ByteArrayOutputStream`)

| Change |        Delta |             % |          Size | Samples | Location                           |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------------------- |
|    new | +775.093 KiB | 0.0% → 100.0% | 0 B → 775 KiB |   0 → 2 | `java.io.ByteArrayOutputStream:81` |

##### `newLinkedHashMap(int)` (`java.util.LinkedHashMap`)

| Change |        Delta |             % |          Size | Samples | Location                       |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------ |
|    new | +506.578 KiB | 0.0% → 100.0% | 0 B → 507 KiB |   0 → 1 | `java.util.LinkedHashMap:1078` |

##### `appendLiteral(String)` (`java.time.format.DateTimeFormatterBuilder`)

| Change |        Delta |             % |          Size | Samples | Location                                         |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------ |
|    new | +492.695 KiB | 0.0% → 100.0% | 0 B → 493 KiB |   0 → 1 | `java.time.format.DateTimeFormatterBuilder:1572` |

##### `transferTo(OutputStream)` (`java.io.InputStream`)

| Change |        Delta |             % |          Size | Samples | Location                  |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------- |
|    new | +418.218 KiB | 0.0% → 100.0% | 0 B → 418 KiB |   0 → 1 | `java.io.InputStream:794` |

##### `addConstantNameAndType(String, String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change |        Delta |             % |          Size | Samples | Location                                         |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------ |
|    new | +401.406 KiB | 0.0% → 100.0% | 0 B → 401 KiB |   0 → 1 | `jdk.internal.org.objectweb.asm.SymbolTable:773` |

##### `<init>(InputStream, int)` (`java.util.jar.Manifest$FastInputStream`)

| Change |        Delta |             % |          Size | Samples | Location                                     |
| -----: | -----------: | ------------: | ------------: | ------: | -------------------------------------------- |
|    new | +400.929 KiB | 0.0% → 100.0% | 0 B → 401 KiB |   0 → 1 | `java.util.jar.Manifest$FastInputStream:421` |

##### `<init>(SymbolTable, int, String, String, String, String[], int)` (`jdk.internal.org.objectweb.asm.MethodWriter`)

| Change |        Delta |             % |          Size | Samples | Location                                          |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------- |
|    new | +394.531 KiB | 0.0% → 100.0% | 0 B → 395 KiB |   0 → 1 | `jdk.internal.org.objectweb.asm.MethodWriter:352` |

##### `<init>()` (`jdk.internal.org.objectweb.asm.ByteVector`)

| Change |        Delta |             % |          Size | Samples | Location                                       |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------------------------------- |
|    new | +392.312 KiB | 0.0% → 100.0% | 0 B → 392 KiB |   0 → 1 | `jdk.internal.org.objectweb.asm.ByteVector:78` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |      Delta |      % |                Size |   Samples | Location                |
| -----: | ---------: | -----: | ------------------: | --------: | ----------------------- |
|  -3.7% | -1.347 GiB | 100.0% | 36.1 GiB → 34.8 GiB | 958 → 807 | `java.util.Arrays:3482` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |       Delta |      % |               Size | Samples | Location                  |
| -----: | ----------: | -----: | -----------------: | ------: | ------------------------- |
| -47.9% | -84.917 MiB | 100.0% | 177 MiB → 92.3 MiB |   8 → 4 | `java.util.ArrayList:239` |

##### `iterator()` (`java.util.HashMap$EntrySet`)

|  Change |       Delta |             % |           Size | Samples | Location                          |
| ------: | ----------: | ------------: | -------------: | ------: | --------------------------------- |
| removed | -70.363 MiB | 100.0% → 0.0% | 70.4 MiB → 0 B |   1 → 0 | `java.util.HashMap$EntrySet:1106` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |      Delta |      % |              Size | Samples | Location                                                       |
| -----: | ---------: | -----: | ----------------: | ------: | -------------------------------------------------------------- |
|  -7.8% | -66.93 MiB | 100.0% | 854 MiB → 787 MiB | 29 → 28 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:223` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |              Size | Samples | Location                                                       |
| -----: | ----------: | -----: | ----------------: | ------: | -------------------------------------------------------------- |
| -35.1% | -55.063 MiB | 100.0% | 157 MiB → 102 MiB |       3 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |

##### `mapToObj(IntFunction, int)` (`java.util.stream.IntPipeline`)

| Change |       Delta |      % |              Size | Samples | Location                           |
| -----: | ----------: | -----: | ----------------: | ------: | ---------------------------------- |
| -94.7% | -47.363 MiB | 100.0% | 50 MiB → 2.64 MiB |  10 → 5 | `java.util.stream.IntPipeline:174` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |              Size | Samples | Location                                                       |
| -----: | ----------: | -----: | ----------------: | ------: | -------------------------------------------------------------- |
| -68.4% | -38.867 MiB | 100.0% | 56.8 MiB → 18 MiB |   2 → 4 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261` |

##### `resize()` (`java.util.HashMap`)

| Change |       Delta |      % |                Size | Samples | Location                |
| -----: | ----------: | -----: | ------------------: | ------: | ----------------------- |
| -82.2% | -17.637 MiB | 100.0% | 21.5 MiB → 3.82 MiB |   4 → 2 | `java.util.HashMap:710` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |       Delta |      % |                Size | Samples | Location                                        |
| -----: | ----------: | -----: | ------------------: | ------: | ----------------------------------------------- |
| -87.8% | -10.718 MiB | 100.0% | 12.2 MiB → 1.49 MiB |   2 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans:110` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

|  Change |      Delta |             % |           Size | Samples | Location                |
| ------: | ---------: | ------------: | -------------: | ------: | ----------------------- |
| removed | -7.325 MiB | 100.0% → 0.0% | 7.33 MiB → 0 B |   7 → 0 | `java.util.Arrays:3513` |

##### `valueOf(double)` (`java.lang.Double`)

| Change |      Delta |      % |               Size | Samples | Location               |
| -----: | ---------: | -----: | -----------------: | ------: | ---------------------- |
| -65.7% | -6.509 MiB | 100.0% | 9.91 MiB → 3.4 MiB |  22 → 8 | `java.lang.Double:773` |

##### `<init>(ClassWriter)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change |      Delta |      % |              Size | Samples | Location                                         |
| -----: | ---------: | -----: | ----------------: | ------: | ------------------------------------------------ |
| -87.9% | -3.693 MiB | 100.0% | 4.2 MiB → 522 KiB |   2 → 1 | `jdk.internal.org.objectweb.asm.SymbolTable:156` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |      Delta |             % |           Size | Samples | Location                                                   |
| ------: | ---------: | ------------: | -------------: | ------: | ---------------------------------------------------------- |
| removed | -2.528 MiB | 100.0% → 0.0% | 2.53 MiB → 0 B |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:352` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |      Delta |      % |                Size | Samples | Location                                       |
| -----: | ---------: | -----: | ------------------: | ------: | ---------------------------------------------- |
| -37.6% | -1.005 MiB | 100.0% | 2.68 MiB → 1.67 MiB |   5 → 4 | `org.renaissance.jdk.concurrent.JavaKMeans:87` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change |        Delta |             % |          Size | Samples | Location                                                      |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------------------- |
| removed | -968.843 KiB | 100.0% → 0.0% | 969 KiB → 0 B |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

|  Change |        Delta |             % |          Size | Samples | Location                                  |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------------------------- |
| removed | -662.843 KiB | 100.0% → 0.0% | 663 KiB → 0 B |   2 → 0 | `java.lang.invoke.DirectMethodHandle:501` |

##### `descriptorString()` (`java.lang.Class`)

|  Change |        Delta |             % |          Size | Samples | Location               |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------- |
| removed | -490.765 KiB | 100.0% → 0.0% | 491 KiB → 0 B |   1 → 0 | `java.lang.Class:4585` |

##### `addConstantUtf8(String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|  Change |        Delta |             % |          Size | Samples | Location                                         |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------ |
| removed | -388.773 KiB | 100.0% → 0.0% | 389 KiB → 0 B |   1 → 0 | `jdk.internal.org.objectweb.asm.SymbolTable:807` |

##### `put(Object, Object)` (`java.util.WeakHashMap`)

|  Change |        Delta |             % |          Size | Samples | Location                    |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------- |
| removed | -386.718 KiB | 100.0% → 0.0% | 387 KiB → 0 B |   1 → 0 | `java.util.WeakHashMap:476` |

##### `allocateUninitializedArray0(Class, int)` (`jdk.internal.misc.Unsafe`)

|  Change |        Delta |             % |          Size | Samples | Location                        |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------- |
| removed | -372.898 KiB | 100.0% → 0.0% | 373 KiB → 0 B |   1 → 0 | `jdk.internal.misc.Unsafe:1387` |

##### `visitMethod(int, String, String, String, String[])` (`jdk.internal.org.objectweb.asm.ClassWriter`)

|  Change |        Delta |             % |          Size | Samples | Location                                         |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------ |
| removed | -285.789 KiB | 100.0% → 0.0% | 286 KiB → 0 B |   1 → 0 | `jdk.internal.org.objectweb.asm.ClassWriter:500` |

##### `intStream(Spliterator$OfInt, boolean)` (`java.util.stream.StreamSupport`)

| Change |        Delta |      % |                Size | Samples | Location                             |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------------ |
| -16.7% | -275.367 KiB | 100.0% | 1.61 MiB → 1.34 MiB |       3 | `java.util.stream.StreamSupport:138` |

##### `readNBytes(int)` (`java.io.InputStream`)

| Change |        Delta |      % |              Size | Samples | Location                  |
| -----: | -----------: | -----: | ----------------: | ------: | ------------------------- |
| -34.0% | -252.242 KiB | 100.0% | 743 KiB → 490 KiB |       1 | `java.io.InputStream:448` |

##### `getBytes()` (`jdk.internal.loader.URLClassPath$JarLoader$2`)

|  Change |        Delta |             % |          Size | Samples | Location                                           |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------------------------------------- |
| removed | -228.718 KiB | 100.0% → 0.0% | 229 KiB → 0 B |   1 → 0 | `jdk.internal.loader.URLClassPath$JarLoader$2:878` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

| Change |      Delta |      % |              Size | Samples | Location                     |
| -----: | ---------: | -----: | ----------------: | ------: | ---------------------------- |
|  -0.5% | -1.335 KiB | 100.0% | 251 KiB → 250 KiB |       1 | `java.util.stream.Nodes:168` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |        Delta |      % |               Size | Samples | Caller                  | Location                                                               |
| ------: | -----------: | -----: | -----------------: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| +533.7% | +184.999 MiB | 100.0% | 34.7 MiB → 220 MiB |   3 → 1 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fb140` |

##### `collectGarbage(String)` (`org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`)

| Change |       Delta |             % |          Size | Samples | Caller                                      | Location                                                 |
| -----: | ----------: | ------------: | ------------: | ------: | ------------------------------------------- | -------------------------------------------------------- |
|    new | +169.28 MiB | 0.0% → 100.0% | 0 B → 169 MiB |   0 → 1 | `afterOperationSetUp(String, int, boolean)` | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|   Change |        Delta |      % |               Size | Samples | Caller      | Location                                               |
| -------: | -----------: | -----: | -----------------: | ------: | ----------- | ------------------------------------------------------ |
| +1891.2% | +137.106 MiB | 100.0% | 7.25 MiB → 144 MiB |   3 → 5 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

| Change |       Delta |             % |                Size | Samples | Caller                                          | Location            |
| -----: | ----------: | ------------: | ------------------: | ------: | ----------------------------------------------- | ------------------- |
| +54.5% | +98.891 MiB | 92.0% → 90.8% |   182 MiB → 280 MiB |   3 → 4 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |
| +79.1% | +12.544 MiB |   8.0% → 9.2% | 15.9 MiB → 28.4 MiB |   4 → 3 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change |       Delta |      % |               Size | Samples | Caller              | Location                                                   |
| ------: | ----------: | -----: | -----------------: | ------: | ------------------- | ---------------------------------------------------------- |
| +854.7% | +32.487 MiB | 100.0% | 3.8 MiB → 36.3 MiB |   2 → 4 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |     Delta |             % |           Size | Samples | Caller                               | Location                                                  |
| -----: | --------: | ------------: | -------------: | ------: | ------------------------------------ | --------------------------------------------------------- |
|    new | +28.8 MiB | 0.0% → 100.0% | 0 B → 28.8 MiB |   0 → 1 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |       Delta |             % |         Size | Samples | Caller                                          | Location                       |
| -----: | ----------: | ------------: | -----------: | ------: | ----------------------------------------------- | ------------------------------ |
|    new | +16.953 MiB | 0.0% → 100.0% | 0 B → 17 MiB |   0 → 1 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|   Change |      Delta |             % |                Size | Samples | Caller                        | Location                          |
| -------: | ---------: | ------------: | ------------------: | ------: | ----------------------------- | --------------------------------- |
| +1037.6% | +7.911 MiB | 12.2% → 50.2% |  781 KiB → 8.67 MiB |       2 | `ensureCapacityInternal(int)` | `java.lang.AbstractStringBuilder` |
|   +56.3% | +3.103 MiB | 87.8% → 49.8% | 5.51 MiB → 8.61 MiB | 13 → 21 | `getBytes()`                  | `jdk.internal.loader.Resource`    |

##### `opWrapSink(int, Sink)` (`java.util.stream.IntPipeline$1`)

| Change |      Delta |             % |           Size | Samples | Caller           | Location                            |
| -----: | ---------: | ------------: | -------------: | ------: | ---------------- | ----------------------------------- |
|    new | +8.628 MiB | 0.0% → 100.0% | 0 B → 8.63 MiB |   0 → 3 | `wrapSink(Sink)` | `java.util.stream.AbstractPipeline` |

##### `addConstantUtf8Reference(int, String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|   Change |     Delta |      % |              Size | Samples | Caller                     | Location                                     |
| -------: | --------: | -----: | ----------------: | ------: | -------------------------- | -------------------------------------------- |
| +1704.3% | +6.42 MiB | 100.0% | 386 KiB → 6.8 MiB |       1 | `addConstantClass(String)` | `jdk.internal.org.objectweb.asm.SymbolTable` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

| Change |      Delta |             % |           Size | Samples | Caller                                                    | Location                |
| -----: | ---------: | ------------: | -------------: | ------: | --------------------------------------------------------- | ----------------------- |
|    new | +1.159 MiB | 0.0% → 100.0% | 0 B → 1.16 MiB |   0 → 3 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `range(int, int)` (`java.util.stream.IntStream`)

|  Change |      Delta |      % |               Size | Samples | Caller                                           | Location                                    |
| ------: | ---------: | -----: | -----------------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| +122.1% | +1.091 MiB | 100.0% | 915 KiB → 1.98 MiB |   3 → 4 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

| Change |       Delta |             % |            Size | Samples | Caller                          | Location           |
| -----: | ----------: | ------------: | --------------: | ------: | ------------------------------- | ------------------ |
|    new | +999.71 KiB | 0.0% → 100.0% | 0 B → 1,000 KiB |   0 → 3 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `register(Object, Runnable)` (`java.lang.ref.Cleaner`)

| Change |        Delta |             % |          Size | Samples | Caller                                                                                  | Location                                           |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------------------------------------------------------------- | -------------------------------------------------- |
|    new | +964.945 KiB | 0.0% → 100.0% | 0 B → 965 KiB |   0 → 1 | `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, Inflater, int)` | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |

##### `copyOfRange(byte[], int, int)` (`java.util.Arrays`)

| Change |        Delta |             % |          Size | Samples | Caller                                | Location           |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------------- | ------------------ |
|    new | +913.757 KiB | 0.0% → 100.0% | 0 B → 914 KiB |   0 → 2 | `<init>(AbstractStringBuilder, Void)` | `java.lang.String` |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

| Change |        Delta |             % |          Size | Samples | Caller                | Location           |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------- | ------------------ |
|    new | +878.125 KiB | 0.0% → 100.0% | 0 B → 878 KiB |   0 → 2 | `substring(int, int)` | `java.lang.String` |

##### `<init>(int)` (`java.io.ByteArrayOutputStream`)

| Change |        Delta |             % |          Size | Samples | Caller     | Location                        |
| -----: | -----------: | ------------: | ------------: | ------: | ---------- | ------------------------------- |
|    new | +775.093 KiB | 0.0% → 100.0% | 0 B → 775 KiB |   0 → 2 | `<init>()` | `java.io.ByteArrayOutputStream` |

##### `allocateInstance(Class)` (`jdk.internal.misc.Unsafe`)

|  Change |        Delta |      % |              Size | Samples | Caller                     | Location                              |
| ------: | -----------: | -----: | ----------------: | ------: | -------------------------- | ------------------------------------- |
| +142.6% | +550.101 KiB | 100.0% | 386 KiB → 936 KiB |   1 → 2 | `allocateInstance(Object)` | `java.lang.invoke.DirectMethodHandle` |

##### `newLinkedHashMap(int)` (`java.util.LinkedHashMap`)

| Change |        Delta |             % |          Size | Samples | Caller        | Location                   |
| -----: | -----------: | ------------: | ------------: | ------: | ------------- | -------------------------- |
|    new | +506.578 KiB | 0.0% → 100.0% | 0 B → 507 KiB |   0 → 1 | `<init>(int)` | `java.util.jar.Attributes` |

##### `appendLiteral(String)` (`java.time.format.DateTimeFormatterBuilder`)

| Change |        Delta |             % |          Size | Samples | Caller       | Location                             |
| -----: | -----------: | ------------: | ------------: | ------: | ------------ | ------------------------------------ |
|    new | +492.695 KiB | 0.0% → 100.0% | 0 B → 493 KiB |   0 → 1 | `<clinit>()` | `java.time.format.DateTimeFormatter` |

##### `transferTo(OutputStream)` (`java.io.InputStream`)

| Change |        Delta |             % |          Size | Samples | Caller                                  | Location              |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------------- | --------------------- |
|    new | +418.218 KiB | 0.0% → 100.0% | 0 B → 418 KiB |   0 → 1 | `copy(InputStream, Path, CopyOption[])` | `java.nio.file.Files` |

##### `addConstantNameAndType(String, String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change |        Delta |             % |          Size | Samples | Caller                                                    | Location                                     |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------------------------------- | -------------------------------------------- |
|    new | +401.406 KiB | 0.0% → 100.0% | 0 B → 401 KiB |   0 → 1 | `addConstantMemberReference(int, String, String, String)` | `jdk.internal.org.objectweb.asm.SymbolTable` |

##### `<init>(InputStream, int)` (`java.util.jar.Manifest$FastInputStream`)

| Change |        Delta |             % |          Size | Samples | Caller                | Location                                 |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------- | ---------------------------------------- |
|    new | +400.929 KiB | 0.0% → 100.0% | 0 B → 401 KiB |   0 → 1 | `<init>(InputStream)` | `java.util.jar.Manifest$FastInputStream` |

##### `<init>(SymbolTable, int, String, String, String, String[], int)` (`jdk.internal.org.objectweb.asm.MethodWriter`)

| Change |        Delta |             % |          Size | Samples | Caller                                               | Location                                     |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------------------------------------- | -------------------------------------------- |
|    new | +394.531 KiB | 0.0% → 100.0% | 0 B → 395 KiB |   0 → 1 | `visitMethod(int, String, String, String, String[])` | `jdk.internal.org.objectweb.asm.ClassWriter` |

##### `<init>()` (`jdk.internal.org.objectweb.asm.ByteVector`)

| Change |        Delta |             % |          Size | Samples | Caller                                                            | Location                                      |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------------------------------------------------- | --------------------------------------------- |
|    new | +392.312 KiB | 0.0% → 100.0% | 0 B → 392 KiB |   0 → 1 | `<init>(SymbolTable, int, String, String, String, String[], int)` | `jdk.internal.org.objectweb.asm.MethodWriter` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |        Delta |             % |                Size |   Samples | Caller      | Location              |
| -----: | -----------: | ------------: | ------------------: | --------: | ----------- | --------------------- |
|  -9.4% |   -1.771 GiB | 51.9% → 48.8% |   18.8 GiB → 17 GiB | 493 → 419 | `toArray()` | `java.util.ArrayList` |
|  +2.4% | +434.105 MiB | 48.1% → 51.2% | 17.4 GiB → 17.8 GiB | 465 → 388 | `grow(int)` | `java.util.ArrayList` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |       Delta |      % |               Size | Samples | Caller   | Location              |
| -----: | ----------: | -----: | -----------------: | ------: | -------- | --------------------- |
| -47.9% | -84.917 MiB | 100.0% | 177 MiB → 92.3 MiB |   8 → 4 | `grow()` | `java.util.ArrayList` |

##### `iterator()` (`java.util.HashMap$EntrySet`)

|  Change |       Delta |             % |           Size | Samples | Caller                        | Location            |
| ------: | ----------: | ------------: | -------------: | ------: | ----------------------------- | ------------------- |
| removed | -70.363 MiB | 100.0% → 0.0% | 70.4 MiB → 0 B |   1 → 0 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |      Delta |      % |              Size | Samples | Caller              | Location                                                   |
| -----: | ---------: | -----: | ----------------: | ------: | ------------------- | ---------------------------------------------------------- |
|  -7.8% | -66.93 MiB | 100.0% | 854 MiB → 787 MiB | 29 → 28 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |              Size | Samples | Caller          | Location                                                                              |
| -----: | ----------: | -----: | ----------------: | ------: | --------------- | ------------------------------------------------------------------------------------- |
| -35.1% | -55.063 MiB | 100.0% | 157 MiB → 102 MiB |       3 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011faa60` |

##### `mapToObj(IntFunction, int)` (`java.util.stream.IntPipeline`)

| Change |       Delta |      % |              Size | Samples | Caller                  | Location                       |
| -----: | ----------: | -----: | ----------------: | ------: | ----------------------- | ------------------------------ |
| -94.7% | -47.363 MiB | 100.0% | 50 MiB → 2.64 MiB |  10 → 5 | `mapToObj(IntFunction)` | `java.util.stream.IntPipeline` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |              Size | Samples | Caller      | Location                                               |
| -----: | ----------: | -----: | ----------------: | ------: | ----------- | ------------------------------------------------------ |
| -68.4% | -38.867 MiB | 100.0% | 56.8 MiB → 18 MiB |   2 → 4 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `resize()` (`java.util.HashMap`)

|  Change |       Delta |             % |           Size | Samples | Caller                                          | Location            |
| ------: | ----------: | ------------: | -------------: | ------: | ----------------------------------------------- | ------------------- |
| removed | -21.456 MiB | 100.0% → 0.0% | 21.5 MiB → 0 B |   4 → 0 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |
|     new |  +3.818 MiB | 0.0% → 100.0% | 0 B → 3.82 MiB |   0 → 2 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |       Delta |      % |                Size | Samples | Caller                     | Location                                                   |
| -----: | ----------: | -----: | ------------------: | ------: | -------------------------- | ---------------------------------------------------------- |
| -87.8% | -10.718 MiB | 100.0% | 12.2 MiB → 1.49 MiB |   2 → 1 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

|  Change |      Delta |             % |           Size | Samples | Caller                  | Location           |
| ------: | ---------: | ------------: | -------------: | ------: | ----------------------- | ------------------ |
| removed | -7.325 MiB | 100.0% → 0.0% | 7.33 MiB → 0 B |   7 → 0 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `valueOf(double)` (`java.lang.Double`)

| Change |      Delta |      % |               Size | Samples | Caller                                           | Location                                    |
| -----: | ---------: | -----: | -----------------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| -65.7% | -6.509 MiB | 100.0% | 9.91 MiB → 3.4 MiB |  22 → 8 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `<init>(ClassWriter)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change |      Delta |      % |              Size | Samples | Caller                     | Location                                     |
| -----: | ---------: | -----: | ----------------: | ------: | -------------------------- | -------------------------------------------- |
| -87.9% | -3.693 MiB | 100.0% | 4.2 MiB → 522 KiB |   2 → 1 | `<init>(ClassReader, int)` | `jdk.internal.org.objectweb.asm.ClassWriter` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |      Delta |             % |           Size | Samples | Caller      | Location                                               |
| ------: | ---------: | ------------: | -------------: | ------: | ----------- | ------------------------------------------------------ |
| removed | -2.528 MiB | 100.0% → 0.0% | 2.53 MiB → 0 B |   1 → 0 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |      Delta |      % |                Size | Samples | Caller       | Location                                            |
| -----: | ---------: | -----: | ------------------: | ------: | ------------ | --------------------------------------------------- |
| -37.6% | -1.005 MiB | 100.0% | 2.68 MiB → 1.67 MiB |   5 → 4 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change |        Delta |             % |          Size | Samples | Caller              | Location                                                  |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------- | --------------------------------------------------------- |
| removed | -968.843 KiB | 100.0% → 0.0% | 969 KiB → 0 B |   1 → 0 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

|  Change |        Delta |             % |          Size | Samples | Caller                                       | Location                                             |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------------------------------- | ---------------------------------------------------- |
| removed | -662.843 KiB | 100.0% → 0.0% | 663 KiB → 0 B |   2 → 0 | `newInvokeSpecial(Object, int, int, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070011fc400` |

##### `descriptorString()` (`java.lang.Class`)

|  Change |        Delta |             % |          Size | Samples | Caller                             | Location                             |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------------- | ------------------------------------ |
| removed | -490.765 KiB | 100.0% → 0.0% | 491 KiB → 0 B |   1 → 0 | `unparseSig(Class, StringBuilder)` | `sun.invoke.util.BytecodeDescriptor` |

##### `addConstantUtf8(String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|  Change |        Delta |             % |          Size | Samples | Caller                                                     | Location                                     |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------------------------------------- | -------------------------------------------- |
| removed | -388.773 KiB | 100.0% → 0.0% | 389 KiB → 0 B |   1 → 0 | `<init>(SymbolTable, int, String, String, String, Object)` | `jdk.internal.org.objectweb.asm.FieldWriter` |

##### `put(Object, Object)` (`java.util.WeakHashMap`)

|  Change |        Delta |             % |          Size | Samples | Caller        | Location                           |
| ------: | -----------: | ------------: | ------------: | ------: | ------------- | ---------------------------------- |
| removed | -386.718 KiB | 100.0% → 0.0% | 387 KiB → 0 B |   1 → 0 | `add(Object)` | `java.util.Collections$SetFromMap` |

##### `allocateUninitializedArray0(Class, int)` (`jdk.internal.misc.Unsafe`)

|  Change |        Delta |             % |          Size | Samples | Caller                                   | Location                   |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------------------- | -------------------------- |
| removed | -372.898 KiB | 100.0% → 0.0% | 373 KiB → 0 B |   1 → 0 | `allocateUninitializedArray(Class, int)` | `jdk.internal.misc.Unsafe` |

##### `visitMethod(int, String, String, String, String[])` (`jdk.internal.org.objectweb.asm.ClassWriter`)

|  Change |        Delta |             % |          Size | Samples | Caller                                   | Location                                       |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------------------- | ---------------------------------------------- |
| removed | -285.789 KiB | 100.0% → 0.0% | 286 KiB → 0 B |   1 → 0 | `generateSerializationFriendlyMethods()` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `intStream(Spliterator$OfInt, boolean)` (`java.util.stream.StreamSupport`)

| Change |        Delta |      % |                Size | Samples | Caller            | Location                     |
| -----: | -----------: | -----: | ------------------: | ------: | ----------------- | ---------------------------- |
| -16.7% | -275.367 KiB | 100.0% | 1.61 MiB → 1.34 MiB |       3 | `range(int, int)` | `java.util.stream.IntStream` |

##### `readNBytes(int)` (`java.io.InputStream`)

| Change |        Delta |      % |              Size | Samples | Caller           | Location              |
| -----: | -----------: | -----: | ----------------: | ------: | ---------------- | --------------------- |
| -34.0% | -252.242 KiB | 100.0% | 743 KiB → 490 KiB |       1 | `readAllBytes()` | `java.io.InputStream` |

##### `getBytes()` (`jdk.internal.loader.URLClassPath$JarLoader$2`)

|  Change |        Delta |             % |          Size | Samples | Caller                          | Location                  |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------- | ------------------------- |
| removed | -228.718 KiB | 100.0% → 0.0% | 229 KiB → 0 B |   1 → 0 | `defineClass(String, Resource)` | `java.net.URLClassLoader` |

##### `clone()` (`java.lang.Object`)

|  Change |        Delta |             % |          Size | Samples | Caller                          | Location                          |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------- | --------------------------------- |
| removed | -162.609 KiB | 100.0% → 0.0% | 163 KiB → 0 B |   1 → 0 | `canonicalizeAll(Class[], int)` | `java.lang.invoke.MethodTypeForm` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

| Change |      Delta |      % |              Size | Samples | Caller                               | Location                             |
| -----: | ---------: | -----: | ----------------: | ------: | ------------------------------------ | ------------------------------------ |
|  -0.5% | -1.335 KiB | 100.0% | 251 KiB → 250 KiB |       1 | `makeNodeBuilder(long, IntFunction)` | `java.util.stream.ReferencePipeline` |

### Total size

#### Regressions

Functions with the largest increase in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|   Change |          Delta |             % |                Size |   Samples | Function                                                                                                               | Location                                                               |
| -------: | -------------: | ------------: | ------------------: | --------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|    +5.6% |     +1.327 GiB | 62.7% → 68.1% |   23.7 GiB → 25 GiB | 662 → 582 | `awaitDone(int, long)`                                                                                                 | `java.util.concurrent.ForkJoinTask`                                    |
|    +5.6% |     +1.327 GiB | 62.7% → 68.1% |   23.7 GiB → 25 GiB | 662 → 582 | `join()`                                                                                                               | `java.util.concurrent.ForkJoinTask`                                    |
|    +4.7% |     +1.089 GiB | 61.6% → 66.4% | 23.3 GiB → 24.4 GiB | 649 → 574 | `tryRemoveAndExec(ForkJoinTask, boolean)`                                                                              | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|   +38.2% |     +1.046 GiB |  7.3% → 10.3% | 2.74 GiB → 3.79 GiB | 117 → 103 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   +27.4% | +1,004.876 MiB |  9.5% → 12.4% | 3.58 GiB → 4.56 GiB | 146 → 131 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   +40.1% |   +989.635 MiB |   6.4% → 9.2% | 2.41 GiB → 3.38 GiB |  113 → 90 | `grow()`                                                                                                               | `java.util.ArrayList`                                                  |
|   +40.1% |   +989.635 MiB |   6.4% → 9.2% | 2.41 GiB → 3.38 GiB |  113 → 90 | `add(Object, Object[], int)`                                                                                           | `java.util.ArrayList`                                                  |
|   +40.1% |   +989.635 MiB |   6.4% → 9.2% | 2.41 GiB → 3.38 GiB |  113 → 90 | `add(Object)`                                                                                                          | `java.util.ArrayList`                                                  |
|   +12.5% |   +936.978 MiB | 19.3% → 22.4% |  7.3 GiB → 8.22 GiB | 211 → 203 | `<init>(Collection)`                                                                                                   | `java.util.ArrayList`                                                  |
|    +1.9% |   +341.862 MiB | 46.5% → 48.7% | 17.6 GiB → 17.9 GiB | 480 → 392 | `grow(int)`                                                                                                            | `java.util.ArrayList`                                                  |
|      new |   +194.266 MiB |   0.0% → 0.5% |       0 B → 194 MiB |    0 → 42 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|      new |    +169.28 MiB |   0.0% → 0.5% |       0 B → 169 MiB |     0 → 1 | `collectGarbage(String)`                                                                                               | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`               |
|      new |    +169.28 MiB |   0.0% → 0.5% |       0 B → 169 MiB |     0 → 1 | `afterOperationSetUp(String, int, boolean)`                                                                            | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`               |
|      new |    +169.28 MiB |   0.0% → 0.5% |       0 B → 169 MiB |     0 → 1 | `notifyAfterOperationSetUp(String, int, boolean)`                                                                      | `org.renaissance.harness.EventDispatcher`                              |
|      new |    +169.28 MiB |   0.0% → 0.5% |       0 B → 169 MiB |     0 → 1 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |
| +1891.2% |   +137.106 MiB |  <0.1% → 0.4% |  7.25 MiB → 144 MiB |     3 → 5 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  +144.5% |    +125.89 MiB |   0.2% → 0.6% |  87.1 MiB → 213 MiB |   88 → 87 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
|  +144.5% |    +125.89 MiB |   0.2% → 0.6% |  87.1 MiB → 213 MiB |   88 → 87 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
|  +184.0% |   +125.872 MiB |   0.2% → 0.5% |  68.4 MiB → 194 MiB |   51 → 42 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000070011583b8` |
|  +184.0% |   +125.872 MiB |   0.2% → 0.5% |  68.4 MiB → 194 MiB |   51 → 42 | `apply(Object)`                                                                                                        | `scala.runtime.function.JProcedure1`                                   |

##### Standard library

|  Change |        Delta |             % |                Size |   Samples | Function                                                  | Location                                             |
| ------: | -----------: | ------------: | ------------------: | --------: | --------------------------------------------------------- | ---------------------------------------------------- |
|   +5.6% |   +1.327 GiB | 62.7% → 68.1% |   23.7 GiB → 25 GiB | 662 → 582 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                  |
|   +5.6% |   +1.327 GiB | 62.7% → 68.1% |   23.7 GiB → 25 GiB | 662 → 582 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                  |
|   +4.7% |   +1.089 GiB | 61.6% → 66.4% | 23.3 GiB → 24.4 GiB | 649 → 574 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|  +40.1% | +989.635 MiB |   6.4% → 9.2% | 2.41 GiB → 3.38 GiB |  113 → 90 | `grow()`                                                  | `java.util.ArrayList`                                |
|  +40.1% | +989.635 MiB |   6.4% → 9.2% | 2.41 GiB → 3.38 GiB |  113 → 90 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                                |
|  +40.1% | +989.635 MiB |   6.4% → 9.2% | 2.41 GiB → 3.38 GiB |  113 → 90 | `add(Object)`                                             | `java.util.ArrayList`                                |
|  +12.5% | +936.978 MiB | 19.3% → 22.4% |  7.3 GiB → 8.22 GiB | 211 → 203 | `<init>(Collection)`                                      | `java.util.ArrayList`                                |
|   +1.9% | +341.862 MiB | 46.5% → 48.7% | 17.6 GiB → 17.9 GiB | 480 → 392 | `grow(int)`                                               | `java.util.ArrayList`                                |
| +184.0% | +125.872 MiB |   0.2% → 0.5% |  68.4 MiB → 194 MiB |   51 → 42 | `apply(Object)`                                           | `scala.runtime.function.JProcedure1`                 |
| +184.0% | +125.872 MiB |   0.2% → 0.5% |  68.4 MiB → 194 MiB |   51 → 42 | `foreach(Function1)`                                      | `scala.collection.immutable.List`                    |
| +146.9% | +125.855 MiB |   0.2% → 0.6% |  85.7 MiB → 212 MiB |   85 → 84 | `invokeStatic(Object, Object)`                            | `java.lang.invoke.LambdaForm$DMH.0x0000007001001800` |
| +146.9% | +125.855 MiB |   0.2% → 0.6% |  85.7 MiB → 212 MiB |   85 → 84 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x000000700100d800`  |
| +146.9% | +125.855 MiB |   0.2% → 0.6% |  85.7 MiB → 212 MiB |   85 → 84 | `invokeExact_MT(Object, Object, Object, Object)`          | `java.lang.invoke.Invokers$Holder`                   |
| +146.9% | +125.855 MiB |   0.2% → 0.6% |  85.7 MiB → 212 MiB |   85 → 84 | `invokeImpl(Object, Object[])`                            | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
| +146.9% | +125.855 MiB |   0.2% → 0.6% |  85.7 MiB → 212 MiB |   85 → 84 | `invoke(Object, Object[])`                                | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
| +145.5% | +125.377 MiB |   0.2% → 0.6% |  86.1 MiB → 212 MiB |   86 → 84 | `invoke(Object, Object[])`                                | `java.lang.reflect.Method`                           |
|   +3.0% | +124.739 MiB | 10.7% → 11.4% | 4.06 GiB → 4.18 GiB | 111 → 124 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                  |
|  +56.4% | +111.435 MiB |   0.5% → 0.8% |   197 MiB → 309 MiB |         7 | `newNode(int, Object, Object, HashMap$Node)`              | `java.util.HashMap`                                  |
|  +14.1% |  +47.647 MiB |   0.9% → 1.0% |   339 MiB → 386 MiB |     6 → 9 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                                  |
|     new |  +16.953 MiB |  0.0% → <0.1% |        0 B → 17 MiB |     0 → 1 | `initCEN(int, ZipCoder)`                                  | `java.util.zip.ZipFile$Source`                       |

##### Ours

|   Change |          Delta |            % |                Size |   Samples | Function                                                                                                               | Location                                                               |
| -------: | -------------: | -----------: | ------------------: | --------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|   +38.2% |     +1.046 GiB | 7.3% → 10.3% | 2.74 GiB → 3.79 GiB | 117 → 103 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   +27.4% | +1,004.876 MiB | 9.5% → 12.4% | 3.58 GiB → 4.56 GiB | 146 → 131 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|      new |   +194.266 MiB |  0.0% → 0.5% |       0 B → 194 MiB |    0 → 42 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|      new |    +169.28 MiB |  0.0% → 0.5% |       0 B → 169 MiB |     0 → 1 | `collectGarbage(String)`                                                                                               | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`               |
|      new |    +169.28 MiB |  0.0% → 0.5% |       0 B → 169 MiB |     0 → 1 | `afterOperationSetUp(String, int, boolean)`                                                                            | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`               |
|      new |    +169.28 MiB |  0.0% → 0.5% |       0 B → 169 MiB |     0 → 1 | `notifyAfterOperationSetUp(String, int, boolean)`                                                                      | `org.renaissance.harness.EventDispatcher`                              |
|      new |    +169.28 MiB |  0.0% → 0.5% |       0 B → 169 MiB |     0 → 1 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |
| +1891.2% |   +137.106 MiB | <0.1% → 0.4% |  7.25 MiB → 144 MiB |     3 → 5 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  +144.5% |    +125.89 MiB |  0.2% → 0.6% |  87.1 MiB → 213 MiB |   88 → 87 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
|  +144.5% |    +125.89 MiB |  0.2% → 0.6% |  87.1 MiB → 213 MiB |   88 → 87 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
|  +184.0% |   +125.872 MiB |  0.2% → 0.5% |  68.4 MiB → 194 MiB |   51 → 42 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000070011583b8` |
|  +146.1% |   +125.857 MiB |  0.2% → 0.6% |  86.1 MiB → 212 MiB |   86 → 85 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
|  +146.9% |   +125.855 MiB |  0.2% → 0.6% |  85.7 MiB → 212 MiB |   85 → 84 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|  +182.5% |   +125.494 MiB |  0.2% → 0.5% |  68.8 MiB → 194 MiB |   52 → 42 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +150.5% |   +125.127 MiB |  0.2% → 0.6% |  83.1 MiB → 208 MiB |   80 → 77 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +182.5% |   +124.138 MiB |  0.2% → 0.5% |    68 MiB → 192 MiB |   50 → 36 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|      new |      +28.8 MiB |  0.0% → 0.1% |      0 B → 28.8 MiB |     0 → 1 | `add(double[], double[])`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|      new |      +28.8 MiB |  0.0% → 0.1% |      0 B → 28.8 MiB |     0 → 1 | `combineResults(double[], double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|      new |      +28.8 MiB |  0.0% → 0.1% |      0 B → 28.8 MiB |     0 → 1 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  +285.2% |    +16.615 MiB | <0.1% → 0.1% | 5.83 MiB → 22.4 MiB |     4 → 3 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |

#### Improvements

Functions with the largest decrease in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |       Delta |             % |                Size |     Samples | Function                                             | Location                                                               |
| ------: | ----------: | ------------: | ------------------: | ----------: | ---------------------------------------------------- | ---------------------------------------------------------------------- |
|  -12.5% |  -3.318 GiB | 70.4% → 63.4% | 26.6 GiB → 23.3 GiB |   649 → 518 | `addAll(Collection)`                                 | `java.util.ArrayList`                                                  |
|   -6.7% |  -2.289 GiB | 90.1% → 86.4% |   34 GiB → 31.7 GiB |   869 → 726 | `merge(Map, Map)`                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -6.7% |  -2.289 GiB | 90.1% → 86.4% |   34 GiB → 31.7 GiB |   869 → 726 | `combineResults(Map, Map)`                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -6.7% |  -2.289 GiB | 90.1% → 86.4% |   34 GiB → 31.7 GiB |   869 → 726 | `combineResults(Object, Object)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -6.5% |  -2.223 GiB | 89.8% → 86.4% | 33.9 GiB → 31.7 GiB |   863 → 722 | `lambda$merge$6(List, List)`                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -6.5% |  -2.223 GiB | 89.8% → 86.4% | 33.9 GiB → 31.7 GiB |   863 → 722 | `apply(Object, Object)`                              | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fb140` |
|   -6.5% |  -2.223 GiB | 89.8% → 86.4% | 33.9 GiB → 31.7 GiB |   863 → 722 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                                                    |
|   -6.5% |  -2.223 GiB | 89.8% → 86.4% | 33.9 GiB → 31.7 GiB |   863 → 722 | `lambda$merge$7(Map, Object, List)`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -6.5% |  -2.223 GiB | 89.8% → 86.4% | 33.9 GiB → 31.7 GiB |   863 → 722 | `accept(Object, Object)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011facb0` |
|   -6.5% |  -2.223 GiB | 89.8% → 86.4% | 33.9 GiB → 31.7 GiB |   863 → 722 | `forEach(BiConsumer)`                                | `java.util.HashMap`                                                    |
|   -9.4% |  -1.771 GiB | 49.7% → 46.3% |   18.8 GiB → 17 GiB |   493 → 419 | `toArray()`                                          | `java.util.ArrayList`                                                  |
|   -3.7% |  -1.354 GiB | 95.7% → 94.7% | 36.1 GiB → 34.8 GiB |   965 → 807 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                                     |
|   -3.1% |  -1.175 GiB | 99.7% → 99.4% | 37.7 GiB → 36.5 GiB | 1,023 → 869 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|   -3.1% |  -1.175 GiB | 99.7% → 99.4% | 37.7 GiB → 36.5 GiB | 1,023 → 869 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                                   |
|   -3.1% |  -1.175 GiB | 99.7% → 99.4% | 37.7 GiB → 36.5 GiB | 1,023 → 869 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                                    |
|   -3.1% |  -1.175 GiB | 99.7% → 99.4% | 37.7 GiB → 36.5 GiB | 1,023 → 869 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|   -3.1% |  -1.175 GiB | 99.7% → 99.4% | 37.7 GiB → 36.5 GiB | 1,023 → 869 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                                    |
|   -3.1% |  -1.175 GiB | 99.7% → 99.4% | 37.7 GiB → 36.5 GiB | 1,023 → 869 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                                    |
|   -3.1% |  -1.175 GiB | 99.7% → 99.4% | 37.7 GiB → 36.5 GiB | 1,023 → 869 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                            |
| removed | -70.363 MiB |   0.2% → 0.0% |      70.4 MiB → 0 B |       1 → 0 | `iterator()`                                         | `java.util.HashMap$EntrySet`                                           |

##### Standard library

|  Change |       Delta |             % |                Size |     Samples | Function                                             | Location                                       |
| ------: | ----------: | ------------: | ------------------: | ----------: | ---------------------------------------------------- | ---------------------------------------------- |
|  -12.5% |  -3.318 GiB | 70.4% → 63.4% | 26.6 GiB → 23.3 GiB |   649 → 518 | `addAll(Collection)`                                 | `java.util.ArrayList`                          |
|   -6.5% |  -2.223 GiB | 89.8% → 86.4% | 33.9 GiB → 31.7 GiB |   863 → 722 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                            |
|   -6.5% |  -2.223 GiB | 89.8% → 86.4% | 33.9 GiB → 31.7 GiB |   863 → 722 | `forEach(BiConsumer)`                                | `java.util.HashMap`                            |
|   -9.4% |  -1.771 GiB | 49.7% → 46.3% |   18.8 GiB → 17 GiB |   493 → 419 | `toArray()`                                          | `java.util.ArrayList`                          |
|   -3.7% |  -1.354 GiB | 95.7% → 94.7% | 36.1 GiB → 34.8 GiB |   965 → 807 | `copyOf(Object[], int)`                              | `java.util.Arrays`                             |
|   -3.1% |  -1.175 GiB | 99.7% → 99.4% | 37.7 GiB → 36.5 GiB | 1,023 → 869 | `exec()`                                             | `java.util.concurrent.RecursiveTask`           |
|   -3.1% |  -1.175 GiB | 99.7% → 99.4% | 37.7 GiB → 36.5 GiB | 1,023 → 869 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`            |
|   -3.1% |  -1.175 GiB | 99.7% → 99.4% | 37.7 GiB → 36.5 GiB | 1,023 → 869 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`  |
|   -3.1% |  -1.175 GiB | 99.7% → 99.4% | 37.7 GiB → 36.5 GiB | 1,023 → 869 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`            |
|   -3.1% |  -1.175 GiB | 99.7% → 99.4% | 37.7 GiB → 36.5 GiB | 1,023 → 869 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`            |
|   -3.1% |  -1.175 GiB | 99.7% → 99.4% | 37.7 GiB → 36.5 GiB | 1,023 → 869 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`    |
| removed | -70.363 MiB |   0.2% → 0.0% |      70.4 MiB → 0 B |       1 → 0 | `iterator()`                                         | `java.util.HashMap$EntrySet`                   |
|  -66.9% | -57.434 MiB |   0.2% → 0.1% | 85.8 MiB → 28.4 MiB |       4 → 3 | `putMapEntries(Map, boolean)`                        | `java.util.HashMap`                            |
|  -66.9% | -57.434 MiB |   0.2% → 0.1% | 85.8 MiB → 28.4 MiB |       4 → 3 | `<init>(Map)`                                        | `java.util.HashMap`                            |
|  -94.7% | -47.363 MiB |  0.1% → <0.1% |   50 MiB → 2.64 MiB |      10 → 5 | `mapToObj(IntFunction, int)`                         | `java.util.stream.IntPipeline`                 |
|  -94.7% | -47.363 MiB |  0.1% → <0.1% |   50 MiB → 2.64 MiB |      10 → 5 | `mapToObj(IntFunction)`                              | `java.util.stream.IntPipeline`                 |
|  -69.4% | -47.199 MiB |   0.2% → 0.1% |   68 MiB → 20.8 MiB |     50 → 30 | `accept(int)`                                        | `java.util.stream.IntPipeline$1$1`             |
|  -69.4% | -47.199 MiB |   0.2% → 0.1% |   68 MiB → 20.8 MiB |     50 → 30 | `forEachRemaining(IntConsumer)`                      | `java.util.stream.Streams$RangeIntSpliterator` |
|  -69.4% | -47.199 MiB |   0.2% → 0.1% |   68 MiB → 20.8 MiB |     50 → 30 | `forEachRemaining(Consumer)`                         | `java.util.Spliterator$OfInt`                  |
|  -66.8% | -45.975 MiB |   0.2% → 0.1% | 68.8 MiB → 22.8 MiB |     52 → 35 | `copyInto(Sink, Spliterator)`                        | `java.util.stream.AbstractPipeline`            |

##### Ours

|  Change |       Delta |             % |                Size |     Samples | Function                                                                                                               | Location                                                                              |
| ------: | ----------: | ------------: | ------------------: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|   -6.7% |  -2.289 GiB | 90.1% → 86.4% |   34 GiB → 31.7 GiB |   869 → 726 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|   -6.7% |  -2.289 GiB | 90.1% → 86.4% |   34 GiB → 31.7 GiB |   869 → 726 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   -6.7% |  -2.289 GiB | 90.1% → 86.4% |   34 GiB → 31.7 GiB |   869 → 726 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   -6.5% |  -2.223 GiB | 89.8% → 86.4% | 33.9 GiB → 31.7 GiB |   863 → 722 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|   -6.5% |  -2.223 GiB | 89.8% → 86.4% | 33.9 GiB → 31.7 GiB |   863 → 722 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fb140`                |
|   -6.5% |  -2.223 GiB | 89.8% → 86.4% | 33.9 GiB → 31.7 GiB |   863 → 722 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|   -6.5% |  -2.223 GiB | 89.8% → 86.4% | 33.9 GiB → 31.7 GiB |   863 → 722 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011facb0`                |
|   -3.1% |  -1.175 GiB | 99.7% → 99.4% | 37.7 GiB → 36.5 GiB | 1,023 → 869 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
| removed | -68.394 MiB |   0.2% → 0.0% |      68.4 MiB → 0 B |      51 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                           |
|   -7.8% |  -66.93 MiB |   2.2% → 2.1% |   854 MiB → 787 MiB |     29 → 28 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -35.1% | -55.063 MiB |   0.4% → 0.3% |   157 MiB → 102 MiB |           3 | `lambda$collectClusters$0(Double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -35.1% | -55.063 MiB |   0.4% → 0.3% |   157 MiB → 102 MiB |           3 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011faa60` |
|  -69.4% | -47.199 MiB |   0.2% → 0.1% |   68 MiB → 20.8 MiB |     50 → 30 | `generateData(int, int, int)`                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  -68.6% | -45.539 MiB |   0.2% → 0.1% | 66.4 MiB → 20.8 MiB |     47 → 30 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`                                   |
|  -68.6% | -45.539 MiB |   0.2% → 0.1% | 66.4 MiB → 20.8 MiB |     47 → 30 | `lambda$generateData$5(int, int, Random[], int)`                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  -66.4% | -45.141 MiB |   0.2% → 0.1% |   68 MiB → 22.9 MiB |     50 → 35 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | `org.renaissance.jdk.concurrent.FjKmeans`                                             |
|  -68.4% | -38.867 MiB |  0.1% → <0.1% |   56.8 MiB → 18 MiB |       2 → 4 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -65.7% |  -6.509 MiB |         <0.1% |  9.91 MiB → 3.4 MiB |      22 → 8 | `lambda$generateData$3(int, int, Random[], int)`                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
| removed |  -3.725 MiB |  <0.1% → 0.0% |      3.73 MiB → 0 B |       1 → 0 | `findCommand$1(ListBuffer, String)`                                                                                    | `scopt.ORunner$`                                                                      |
|  -59.2% |  -2.653 MiB |         <0.1% | 4.48 MiB → 1.83 MiB |       3 → 5 | `parse(Seq, Object)`                                                                                                   | `scopt.OptionParser`                                                                  |

#### Callers

Callers with the largest change in contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change |      Delta |      % |              Size |   Samples | Caller   | Location                            |
| -----: | ---------: | -----: | ----------------: | --------: | -------- | ----------------------------------- |
|  +5.6% | +1.327 GiB | 100.0% | 23.7 GiB → 25 GiB | 662 → 582 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change |      Delta |      % |              Size |   Samples | Caller      | Location                                               |
| -----: | ---------: | -----: | ----------------: | --------: | ----------- | ------------------------------------------------------ |
|  +5.6% | +1.327 GiB | 100.0% | 23.7 GiB → 25 GiB | 662 → 582 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |      Delta |      % |                Size |   Samples | Caller                 | Location                            |
| -----: | ---------: | -----: | ------------------: | --------: | ---------------------- | ----------------------------------- |
|  +4.7% | +1.089 GiB | 100.0% | 23.3 GiB → 24.4 GiB | 649 → 574 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |      Delta |      % |                Size |   Samples | Caller              | Location                                                   |
| -----: | ---------: | -----: | ------------------: | --------: | ------------------- | ---------------------------------------------------------- |
| +38.2% | +1.046 GiB | 100.0% | 2.74 GiB → 3.79 GiB | 117 → 103 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |          Delta |      % |                Size |   Samples | Caller              | Location                                                   |
| -----: | -------------: | -----: | ------------------: | --------: | ------------------- | ---------------------------------------------------------- |
| +27.4% | +1,004.876 MiB | 100.0% | 3.58 GiB → 4.56 GiB | 146 → 131 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +27.4% | +1,004.876 MiB | 100.0% | 3.58 GiB → 4.56 GiB | 146 → 131 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |

##### `grow()` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |  Samples | Caller                       | Location              |
| -----: | -----------: | -----: | ------------------: | -------: | ---------------------------- | --------------------- |
| +40.1% | +989.635 MiB | 100.0% | 2.41 GiB → 3.38 GiB | 113 → 90 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |  Samples | Caller        | Location              |
| -----: | -----------: | -----: | ------------------: | -------: | ------------- | --------------------- |
| +40.1% | +989.635 MiB | 100.0% | 2.41 GiB → 3.38 GiB | 113 → 90 | `add(Object)` | `java.util.ArrayList` |

##### `add(Object)` (`java.util.ArrayList`)

|  Change |        Delta |              % |                Size |  Samples | Caller                   | Location                                                   |
| ------: | -----------: | -------------: | ------------------: | -------: | ------------------------ | ---------------------------------------------------------- |
|  +40.2% | +991.672 MiB | 99.9% → 100.0% | 2.41 GiB → 3.38 GiB | 109 → 90 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |   -2.036 MiB |    0.1% → 0.0% |      2.04 MiB → 0 B |    4 → 0 | `accept(Object, Object)` | `java.util.stream.Collectors$$Lambda.0x000000700101bfb8`   |

##### `<init>(Collection)` (`java.util.ArrayList`)

| Change |        Delta |      % |               Size |   Samples | Caller                       | Location                                    |
| -----: | -----------: | -----: | -----------------: | --------: | ---------------------------- | ------------------------------------------- |
| +12.5% | +936.978 MiB | 100.0% | 7.3 GiB → 8.22 GiB | 211 → 203 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |        Delta |             % |                Size |   Samples | Caller               | Location              |
| -----: | -----------: | ------------: | ------------------: | --------: | -------------------- | --------------------- |
| +40.1% | +989.635 MiB | 13.7% → 18.9% | 2.41 GiB → 3.38 GiB |  113 → 90 | `grow()`             | `java.util.ArrayList` |
|  -4.2% | -647.773 MiB | 86.3% → 81.1% | 15.1 GiB → 14.5 GiB | 367 → 302 | `addAll(Collection)` | `java.util.ArrayList` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |        Delta |             % |          Size | Samples | Caller              | Location                                                               |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
|    new | +194.266 MiB | 0.0% → 100.0% | 0 B → 194 MiB |  0 → 42 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000070011583b8` |

##### `collectGarbage(String)` (`org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`)

| Change |       Delta |             % |          Size | Samples | Caller                                      | Location                                                 |
| -----: | ----------: | ------------: | ------------: | ------: | ------------------------------------------- | -------------------------------------------------------- |
|    new | +169.28 MiB | 0.0% → 100.0% | 0 B → 169 MiB |   0 → 1 | `afterOperationSetUp(String, int, boolean)` | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin` |

##### `afterOperationSetUp(String, int, boolean)` (`org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`)

| Change |       Delta |             % |          Size | Samples | Caller                                            | Location                                  |
| -----: | ----------: | ------------: | ------------: | ------: | ------------------------------------------------- | ----------------------------------------- |
|    new | +169.28 MiB | 0.0% → 100.0% | 0 B → 169 MiB |   0 → 1 | `notifyAfterOperationSetUp(String, int, boolean)` | `org.renaissance.harness.EventDispatcher` |

##### `notifyAfterOperationSetUp(String, int, boolean)` (`org.renaissance.harness.EventDispatcher`)

| Change |       Delta |             % |          Size | Samples | Caller                  | Location                                  |
| -----: | ----------: | ------------: | ------------: | ------: | ----------------------- | ----------------------------------------- |
|    new | +169.28 MiB | 0.0% → 100.0% | 0 B → 169 MiB |   0 → 1 | `executeOperation(int)` | `org.renaissance.harness.ExecutionDriver` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

| Change |       Delta |             % |          Size | Samples | Caller               | Location                                  |
| -----: | ----------: | ------------: | ------------: | ------: | -------------------- | ----------------------------------------- |
|    new | +169.28 MiB | 0.0% → 100.0% | 0 B → 169 MiB |   0 → 1 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|   Change |        Delta |      % |               Size | Samples | Caller      | Location                                               |
| -------: | -----------: | -----: | -----------------: | ------: | ----------- | ------------------------------------------------------ |
| +1891.2% | +137.106 MiB | 100.0% | 7.25 MiB → 144 MiB |   3 → 5 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|  Change |       Delta |      % |               Size | Samples | Caller           | Location                        |
| ------: | ----------: | -----: | -----------------: | ------: | ---------------- | ------------------------------- |
| +144.5% | +125.89 MiB | 100.0% | 87.1 MiB → 213 MiB | 88 → 87 | `main(String[])` | `org.renaissance.core.Launcher` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000070011583b8`)

|  Change |        Delta |      % |               Size | Samples | Caller          | Location                             |
| ------: | -----------: | -----: | -----------------: | ------: | --------------- | ------------------------------------ |
| +184.0% | +125.872 MiB | 100.0% | 68.4 MiB → 194 MiB | 51 → 42 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

|  Change |        Delta |      % |               Size | Samples | Caller               | Location                             |
| ------: | -----------: | -----: | -----------------: | ------: | -------------------- | ------------------------------------ |
| +184.0% | +125.872 MiB | 100.0% | 68.4 MiB → 194 MiB | 51 → 42 | `apply(Object)`      | `scala.runtime.function.JProcedure1` |
| +184.0% | +125.872 MiB | 100.0% | 68.4 MiB → 194 MiB | 51 → 42 | `foreach(Function1)` | `scala.collection.immutable.List`    |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

|  Change |        Delta |      % |               Size | Samples | Caller                                                                        | Location                                    |
| ------: | -----------: | -----: | -----------------: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| +184.0% | +125.872 MiB | 100.0% | 68.4 MiB → 194 MiB | 51 → 42 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001800`)

|  Change |        Delta |      % |               Size | Samples | Caller                           | Location                                            |
| ------: | -----------: | -----: | -----------------: | ------: | -------------------------------- | --------------------------------------------------- |
| +146.9% | +125.855 MiB | 100.0% | 85.7 MiB → 212 MiB | 85 → 84 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700100d800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700100d800`)

|  Change |        Delta |      % |               Size | Samples | Caller                                           | Location                           |
| ------: | -----------: | -----: | -----------------: | ------: | ------------------------------------------------ | ---------------------------------- |
| +146.9% | +125.855 MiB | 100.0% | 85.7 MiB → 212 MiB | 85 → 84 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|  Change |        Delta |      % |               Size | Samples | Caller                         | Location                                          |
| ------: | -----------: | -----: | -----------------: | ------: | ------------------------------ | ------------------------------------------------- |
| +146.9% | +125.855 MiB | 100.0% | 85.7 MiB → 212 MiB | 85 → 84 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|  Change |        Delta |      % |               Size | Samples | Caller                     | Location                                          |
| ------: | -----------: | -----: | -----------------: | ------: | -------------------------- | ------------------------------------------------- |
| +146.9% | +125.855 MiB | 100.0% | 85.7 MiB → 212 MiB | 85 → 84 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|  Change |        Delta |      % |               Size | Samples | Caller                     | Location                   |
| ------: | -----------: | -----: | -----------------: | ------: | -------------------------- | -------------------------- |
| +146.9% | +125.855 MiB | 100.0% | 85.7 MiB → 212 MiB | 85 → 84 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|  Change |        Delta |      % |               Size | Samples | Caller                                                      | Location                        |
| ------: | -----------: | -----: | -----------------: | ------: | ----------------------------------------------------------- | ------------------------------- |
| +145.5% | +125.377 MiB | 100.0% | 86.1 MiB → 212 MiB | 86 → 84 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change |        Delta |      % |                Size |   Samples | Caller                 | Location                            |
| -----: | -----------: | -----: | ------------------: | --------: | ---------------------- | ----------------------------------- |
|  +3.0% | +124.739 MiB | 100.0% | 4.06 GiB → 4.18 GiB | 111 → 124 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

| Change |       Delta |             % |                Size | Samples | Caller                                          | Location            |
| -----: | ----------: | ------------: | ------------------: | ------: | ----------------------------------------------- | ------------------- |
| +54.5% | +98.891 MiB | 92.0% → 90.8% |   182 MiB → 280 MiB |   3 → 4 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |
| +79.1% | +12.544 MiB |   8.0% → 9.2% | 15.9 MiB → 28.4 MiB |   4 → 3 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

| Change |       Delta |      % |              Size | Samples | Caller                   | Location                                                   |
| -----: | ----------: | -----: | ----------------: | ------: | ------------------------ | ---------------------------------------------------------- |
| +14.1% | +47.647 MiB | 100.0% | 339 MiB → 386 MiB |   6 → 9 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |       Delta |             % |         Size | Samples | Caller                                          | Location                       |
| -----: | ----------: | ------------: | -----------: | ------: | ----------------------------------------------- | ------------------------------ |
|    new | +16.953 MiB | 0.0% → 100.0% | 0 B → 17 MiB |   0 → 1 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|  Change |        Delta |      % |               Size | Samples | Caller                                 | Location                        |
| ------: | -----------: | -----: | -----------------: | ------: | -------------------------------------- | ------------------------------- |
| +146.1% | +125.857 MiB | 100.0% | 86.1 MiB → 212 MiB | 86 → 85 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|  Change |        Delta |      % |               Size | Samples | Caller                         | Location                                             |
| ------: | -----------: | -----: | -----------------: | ------: | ------------------------------ | ---------------------------------------------------- |
| +146.9% | +125.855 MiB | 100.0% | 85.7 MiB → 212 MiB | 85 → 84 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001001800` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |        Delta |      % |               Size | Samples | Caller           | Location                                    |
| ------: | -----------: | -----: | -----------------: | ------: | ---------------- | ------------------------------------------- |
| +182.5% | +125.494 MiB | 100.0% | 68.8 MiB → 194 MiB | 52 → 42 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |        Delta |      % |               Size | Samples | Caller           | Location                                   |
| ------: | -----------: | -----: | -----------------: | ------: | ---------------- | ------------------------------------------ |
| +150.5% | +125.127 MiB | 100.0% | 83.1 MiB → 208 MiB | 80 → 77 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

|  Change |        Delta |             % |          Size | Samples | Caller                                                                                                                 | Location                                    |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
|     new | +192.158 MiB | 0.0% → 100.0% | 0 B → 192 MiB |  0 → 36 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
| removed |  -68.019 MiB | 100.0% → 0.0% |  68 MiB → 0 B |  50 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |     Delta |             % |           Size | Samples | Caller                               | Location                                                  |
| -----: | --------: | ------------: | -------------: | ------: | ------------------------------------ | --------------------------------------------------------- |
|    new | +28.8 MiB | 0.0% → 100.0% | 0 B → 28.8 MiB |   0 → 1 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `combineResults(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |     Delta |             % |           Size | Samples | Caller                           | Location                                                  |
| -----: | --------: | ------------: | -------------: | ------: | -------------------------------- | --------------------------------------------------------- |
|    new | +28.8 MiB | 0.0% → 100.0% | 0 B → 28.8 MiB |   0 → 1 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |     Delta |             % |           Size | Samples | Caller      | Location                                               |
| -----: | --------: | ------------: | -------------: | ------: | ----------- | ------------------------------------------------------ |
|    new | +28.8 MiB | 0.0% → 100.0% | 0 B → 28.8 MiB |   0 → 1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |       Delta |      % |                Size | Samples | Caller              | Location                                               |
| ------: | ----------: | -----: | ------------------: | ------: | ------------------- | ------------------------------------------------------ |
| +285.2% | +16.615 MiB | 100.0% | 5.83 MiB → 22.4 MiB |   4 → 3 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `addAll(Collection)` (`java.util.ArrayList`)

| Change |      Delta |      % |                Size |   Samples | Caller                       | Location                                    |
| -----: | ---------: | -----: | ------------------: | --------: | ---------------------------- | ------------------------------------------- |
| -12.5% | -3.318 GiB | 100.0% | 26.6 GiB → 23.3 GiB | 649 → 518 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |      Delta |      % |              Size |   Samples | Caller                     | Location                                                   |
| -----: | ---------: | -----: | ----------------: | --------: | -------------------------- | ---------------------------------------------------------- |
|  -6.7% | -2.289 GiB | 100.0% | 34 GiB → 31.7 GiB | 869 → 726 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |      Delta |      % |              Size |   Samples | Caller                           | Location                                                   |
| -----: | ---------: | -----: | ----------------: | --------: | -------------------------------- | ---------------------------------------------------------- |
|  -6.7% | -2.289 GiB | 100.0% | 34 GiB → 31.7 GiB | 869 → 726 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |      Delta |      % |              Size |   Samples | Caller      | Location                                               |
| -----: | ---------: | -----: | ----------------: | --------: | ----------- | ------------------------------------------------------ |
|  -6.7% | -2.289 GiB | 100.0% | 34 GiB → 31.7 GiB | 869 → 726 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |      Delta |      % |                Size |   Samples | Caller                  | Location                                                               |
| -----: | ---------: | -----: | ------------------: | --------: | ----------------------- | ---------------------------------------------------------------------- |
|  -6.5% | -2.223 GiB | 100.0% | 33.9 GiB → 31.7 GiB | 863 → 722 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fb140` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fb140`)

| Change |      Delta |      % |                Size |   Samples | Caller                              | Location            |
| -----: | ---------: | -----: | ------------------: | --------: | ----------------------------------- | ------------------- |
|  -6.5% | -2.223 GiB | 100.0% | 33.9 GiB → 31.7 GiB | 863 → 722 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

| Change |      Delta |      % |                Size |   Samples | Caller                              | Location                                    |
| -----: | ---------: | -----: | ------------------: | --------: | ----------------------------------- | ------------------------------------------- |
|  -6.5% | -2.223 GiB | 100.0% | 33.9 GiB → 31.7 GiB | 863 → 722 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |      Delta |      % |                Size |   Samples | Caller                   | Location                                                               |
| -----: | ---------: | -----: | ------------------: | --------: | ------------------------ | ---------------------------------------------------------------------- |
|  -6.5% | -2.223 GiB | 100.0% | 33.9 GiB → 31.7 GiB | 863 → 722 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011facb0` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011facb0`)

| Change |      Delta |      % |                Size |   Samples | Caller                | Location            |
| -----: | ---------: | -----: | ------------------: | --------: | --------------------- | ------------------- |
|  -6.5% | -2.223 GiB | 100.0% | 33.9 GiB → 31.7 GiB | 863 → 722 | `forEach(BiConsumer)` | `java.util.HashMap` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

| Change |      Delta |      % |                Size |   Samples | Caller            | Location                                    |
| -----: | ---------: | -----: | ------------------: | --------: | ----------------- | ------------------------------------------- |
|  -6.5% | -2.223 GiB | 100.0% | 33.9 GiB → 31.7 GiB | 863 → 722 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `toArray()` (`java.util.ArrayList`)

| Change |        Delta |             % |                Size |   Samples | Caller               | Location              |
| -----: | -----------: | ------------: | ------------------: | --------: | -------------------- | --------------------- |
| -23.4% |   -2.686 GiB | 61.1% → 51.6% | 11.5 GiB → 8.77 GiB | 282 → 216 | `addAll(Collection)` | `java.util.ArrayList` |
| +12.5% | +936.978 MiB | 38.9% → 48.4% |  7.3 GiB → 8.22 GiB | 211 → 203 | `<init>(Collection)` | `java.util.ArrayList` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |        Delta |             % |                Size |   Samples | Caller      | Location              |
| -----: | -----------: | ------------: | ------------------: | --------: | ----------- | --------------------- |
|  -9.4% |   -1.771 GiB | 51.9% → 48.8% |   18.8 GiB → 17 GiB | 493 → 419 | `toArray()` | `java.util.ArrayList` |
|  +2.4% | +426.779 MiB | 48.1% → 51.2% | 17.4 GiB → 17.8 GiB | 472 → 388 | `grow(int)` | `java.util.ArrayList` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change |      Delta |      % |                Size |     Samples | Caller   | Location                             |
| -----: | ---------: | -----: | ------------------: | ----------: | -------- | ------------------------------------ |
|  -3.1% | -1.175 GiB | 100.0% | 37.7 GiB → 36.5 GiB | 1,023 → 869 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change |      Delta |      % |                Size |     Samples | Caller     | Location                            |
| -----: | ---------: | -----: | ------------------: | ----------: | ---------- | ----------------------------------- |
|  -3.1% | -1.175 GiB | 100.0% | 37.7 GiB → 36.5 GiB | 1,023 → 869 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |             % |                Size |     Samples | Caller                                                    | Location                                      |
| -----: | -----------: | ------------: | ------------------: | ----------: | --------------------------------------------------------- | --------------------------------------------- |
|  -3.1% |   -1.175 GiB |        100.0% | 37.7 GiB → 36.5 GiB | 1,023 → 869 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  +4.7% |   +1.089 GiB | 61.8% → 66.8% | 23.3 GiB → 24.4 GiB |   649 → 574 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  +3.0% | +124.739 MiB | 10.8% → 11.4% | 4.06 GiB → 4.18 GiB |   111 → 124 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|    ~0% |   +3.307 MiB | 22.4% → 23.2% |            8.45 GiB |   140 → 119 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |      Delta |      % |                Size |     Samples | Caller                                   | Location                            |
| -----: | ---------: | -----: | ------------------: | ----------: | ---------------------------------------- | ----------------------------------- |
|  -3.1% | -1.175 GiB | 100.0% | 37.7 GiB → 36.5 GiB | 1,023 → 869 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change |      Delta |      % |                Size |     Samples | Caller                              | Location                            |
| -----: | ---------: | -----: | ------------------: | ----------: | ----------------------------------- | ----------------------------------- |
|  -3.1% | -1.175 GiB | 100.0% | 37.7 GiB → 36.5 GiB | 1,023 → 869 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |      Delta |      % |                Size |     Samples | Caller  | Location                                    |
| -----: | ---------: | -----: | ------------------: | ----------: | ------- | ------------------------------------------- |
|  -3.1% | -1.175 GiB | 100.0% | 37.7 GiB → 36.5 GiB | 1,023 → 869 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `iterator()` (`java.util.HashMap$EntrySet`)

|  Change |       Delta |             % |           Size | Samples | Caller                        | Location            |
| ------: | ----------: | ------------: | -------------: | ------: | ----------------------------- | ------------------- |
| removed | -70.363 MiB | 100.0% → 0.0% | 70.4 MiB → 0 B |   1 → 0 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `putMapEntries(Map, boolean)` (`java.util.HashMap`)

| Change |       Delta |      % |                Size | Samples | Caller        | Location            |
| -----: | ----------: | -----: | ------------------: | ------: | ------------- | ------------------- |
| -66.9% | -57.434 MiB | 100.0% | 85.8 MiB → 28.4 MiB |   4 → 3 | `<init>(Map)` | `java.util.HashMap` |

##### `<init>(Map)` (`java.util.HashMap`)

| Change |       Delta |      % |                Size | Samples | Caller            | Location                                    |
| -----: | ----------: | -----: | ------------------: | ------: | ----------------- | ------------------------------------------- |
| -66.9% | -57.434 MiB | 100.0% | 85.8 MiB → 28.4 MiB |   4 → 3 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `mapToObj(IntFunction, int)` (`java.util.stream.IntPipeline`)

| Change |       Delta |      % |              Size | Samples | Caller                  | Location                       |
| -----: | ----------: | -----: | ----------------: | ------: | ----------------------- | ------------------------------ |
| -94.7% | -47.363 MiB | 100.0% | 50 MiB → 2.64 MiB |  10 → 5 | `mapToObj(IntFunction)` | `java.util.stream.IntPipeline` |

##### `mapToObj(IntFunction)` (`java.util.stream.IntPipeline`)

| Change |       Delta |      % |              Size | Samples | Caller                                           | Location                                    |
| -----: | ----------: | -----: | ----------------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| -94.7% | -47.363 MiB | 100.0% | 50 MiB → 2.64 MiB |  10 → 5 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `accept(int)` (`java.util.stream.IntPipeline$1$1`)

| Change |       Delta |      % |              Size | Samples | Caller                          | Location                                       |
| -----: | ----------: | -----: | ----------------: | ------: | ------------------------------- | ---------------------------------------------- |
| -69.4% | -47.199 MiB | 100.0% | 68 MiB → 20.8 MiB | 50 → 30 | `forEachRemaining(IntConsumer)` | `java.util.stream.Streams$RangeIntSpliterator` |

##### `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`)

| Change |       Delta |      % |              Size | Samples | Caller                       | Location                      |
| -----: | ----------: | -----: | ----------------: | ------: | ---------------------------- | ----------------------------- |
| -69.4% | -47.199 MiB | 100.0% | 68 MiB → 20.8 MiB | 50 → 30 | `forEachRemaining(Consumer)` | `java.util.Spliterator$OfInt` |

##### `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`)

| Change |       Delta |      % |              Size | Samples | Caller                        | Location                            |
| -----: | ----------: | -----: | ----------------: | ------: | ----------------------------- | ----------------------------------- |
| -69.4% | -47.199 MiB | 100.0% | 68 MiB → 20.8 MiB | 50 → 30 | `copyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

| Change |       Delta |      % |                Size | Samples | Caller                               | Location                            |
| -----: | ----------: | -----: | ------------------: | ------: | ------------------------------------ | ----------------------------------- |
| -66.8% | -45.975 MiB | 100.0% | 68.8 MiB → 22.8 MiB | 52 → 35 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |       Delta |             % |           Size | Samples | Caller              | Location                                                               |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
| removed | -68.394 MiB | 100.0% → 0.0% | 68.4 MiB → 0 B |  51 → 0 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000070011545f0` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |      Delta |      % |              Size | Samples | Caller              | Location                                                   |
| -----: | ---------: | -----: | ----------------: | ------: | ------------------- | ---------------------------------------------------------- |
|  -7.8% | -66.93 MiB | 100.0% | 854 MiB → 787 MiB | 29 → 28 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |              Size | Samples | Caller          | Location                                                                              |
| -----: | ----------: | -----: | ----------------: | ------: | --------------- | ------------------------------------------------------------------------------------- |
| -35.1% | -55.063 MiB | 100.0% | 157 MiB → 102 MiB |       3 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011faa60` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011faa60`)

| Change |       Delta |      % |              Size | Samples | Caller                              | Location            |
| -----: | ----------: | -----: | ----------------: | ------: | ----------------------------------- | ------------------- |
| -35.1% | -55.063 MiB | 100.0% | 157 MiB → 102 MiB |       3 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |

##### `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |       Delta |      % |              Size | Samples | Caller                             | Location                                  |
| -----: | ----------: | -----: | ----------------: | ------: | ---------------------------------- | ----------------------------------------- |
| -69.4% | -47.199 MiB | 100.0% | 68 MiB → 20.8 MiB | 50 → 30 | `setUpBeforeAll(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`)

| Change |       Delta |           % |                Size | Samples | Caller                      | Location                           |
| -----: | ----------: | ----------: | ------------------: | ------: | --------------------------- | ---------------------------------- |
| -68.6% | -45.539 MiB |      100.0% | 66.4 MiB → 20.8 MiB | 47 → 30 | `accept(int)`               | `java.util.stream.IntPipeline$1$1` |
| -37.6% |  -1.005 MiB | 4.0% → 8.0% | 2.68 MiB → 1.67 MiB |   5 → 4 | `<init>(long, IntFunction)` | `java.util.stream.Nodes$ArrayNode` |

##### `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |       Delta |      % |                Size | Samples | Caller       | Location                                            |
| -----: | ----------: | -----: | ------------------: | ------: | ------------ | --------------------------------------------------- |
| -68.6% | -45.539 MiB | 100.0% | 66.4 MiB → 20.8 MiB | 47 → 30 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda` |

##### `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |       Delta |      % |              Size | Samples | Caller               | Location                                  |
| -----: | ----------: | -----: | ----------------: | ------: | -------------------- | ----------------------------------------- |
| -66.4% | -45.141 MiB | 100.0% | 68 MiB → 22.9 MiB | 50 → 35 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |              Size | Samples | Caller      | Location                                               |
| -----: | ----------: | -----: | ----------------: | ------: | ----------- | ------------------------------------------------------ |
| -68.4% | -38.867 MiB | 100.0% | 56.8 MiB → 18 MiB |   2 → 4 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |      Delta |      % |               Size | Samples | Caller       | Location                                            |
| -----: | ---------: | -----: | -----------------: | ------: | ------------ | --------------------------------------------------- |
| -65.7% | -6.509 MiB | 100.0% | 9.91 MiB → 3.4 MiB |  22 → 8 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda` |

##### `findCommand$1(ListBuffer, String)` (`scopt.ORunner$`)

|  Change |      Delta |             % |           Size | Samples | Caller                                       | Location         |
| ------: | ---------: | ------------: | -------------: | ------: | -------------------------------------------- | ---------------- |
| removed | -3.725 MiB | 100.0% → 0.0% | 3.73 MiB → 0 B |   1 → 0 | `runParser(Seq, Object, List, OParserSetup)` | `scopt.ORunner$` |

##### `parse(Seq, Object)` (`scopt.OptionParser`)

| Change |      Delta |      % |                Size | Samples | Caller            | Location                               |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------- | -------------------------------------- |
| -59.2% | -2.653 MiB | 100.0% | 4.48 MiB → 1.83 MiB |   3 → 5 | `parse(String[])` | `org.renaissance.harness.ConfigParser` |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |             % |                Size |   Samples | Callee                                                    | Location                                      |
| -----: | -----------: | ------------: | ------------------: | --------: | --------------------------------------------------------- | --------------------------------------------- |
|  +4.7% |   +1.089 GiB | 98.4% → 97.5% | 23.3 GiB → 24.4 GiB | 649 → 574 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  +3.0% | +124.739 MiB | 17.1% → 16.7% | 4.06 GiB → 4.18 GiB | 111 → 124 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change |      Delta |      % |              Size |   Samples | Callee                 | Location                            |
| -----: | ---------: | -----: | ----------------: | --------: | ---------------------- | ----------------------------------- |
|  +5.6% | +1.327 GiB | 100.0% | 23.7 GiB → 25 GiB | 662 → 582 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |      Delta |      % |                Size |   Samples | Callee     | Location                            |
| -----: | ---------: | -----: | ------------------: | --------: | ---------- | ----------------------------------- |
|  +4.7% | +1.089 GiB | 100.0% | 23.3 GiB → 24.4 GiB | 649 → 574 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |             % |                Size |  Samples | Callee                              | Location              |
| -----: | -----------: | ------------: | ------------------: | -------: | ----------------------------------- | --------------------- |
| +40.2% | +991.672 MiB | 87.8% → 89.1% | 2.41 GiB → 3.38 GiB | 109 → 90 | `add(Object)`                       | `java.util.ArrayList` |
| +14.1% |  +47.647 MiB | 12.1% → 10.0% |   339 MiB → 386 MiB |    6 → 9 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`   |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |          Delta |             % |                Size |   Samples | Callee                   | Location                                                   |
| -----: | -------------: | ------------: | ------------------: | --------: | ------------------------ | ---------------------------------------------------------- |
| +38.2% |     +1.046 GiB | 76.7% → 83.1% | 2.74 GiB → 3.79 GiB | 117 → 103 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +27.4% | +1,004.876 MiB |        100.0% | 3.58 GiB → 4.56 GiB | 146 → 131 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -7.8% |     -66.93 MiB | 23.3% → 16.9% |   854 MiB → 787 MiB |   29 → 28 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `grow()` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |  Samples | Callee      | Location              |
| -----: | -----------: | -----: | ------------------: | -------: | ----------- | --------------------- |
| +40.1% | +989.635 MiB | 100.0% | 2.41 GiB → 3.38 GiB | 113 → 90 | `grow(int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |  Samples | Callee   | Location              |
| -----: | -----------: | -----: | ------------------: | -------: | -------- | --------------------- |
| +40.1% | +989.635 MiB | 100.0% | 2.41 GiB → 3.38 GiB | 113 → 90 | `grow()` | `java.util.ArrayList` |

##### `add(Object)` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |  Samples | Callee                       | Location              |
| -----: | -----------: | -----: | ------------------: | -------: | ---------------------------- | --------------------- |
| +40.1% | +989.635 MiB | 100.0% | 2.41 GiB → 3.38 GiB | 113 → 90 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `<init>(Collection)` (`java.util.ArrayList`)

| Change |        Delta |      % |               Size |   Samples | Callee      | Location              |
| -----: | -----------: | -----: | -----------------: | --------: | ----------- | --------------------- |
| +12.5% | +936.978 MiB | 100.0% | 7.3 GiB → 8.22 GiB | 211 → 203 | `toArray()` | `java.util.ArrayList` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |        Delta |             % |                Size |   Samples | Callee                  | Location           |
| -----: | -----------: | ------------: | ------------------: | --------: | ----------------------- | ------------------ |
|  +2.4% | +426.779 MiB | 99.0% → 99.5% | 17.4 GiB → 17.8 GiB | 472 → 388 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |        Delta |            % |           Size | Samples | Callee                                                                                       | Location                                  |
| -----: | -----------: | -----------: | -------------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
|    new | +192.158 MiB | 0.0% → 98.9% |  0 B → 192 MiB |  0 → 36 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
|    new |   +2.108 MiB |  0.0% → 1.1% | 0 B → 2.11 MiB |   0 → 6 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `afterOperationSetUp(String, int, boolean)` (`org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`)

| Change |       Delta |             % |          Size | Samples | Callee                   | Location                                                 |
| -----: | ----------: | ------------: | ------------: | ------: | ------------------------ | -------------------------------------------------------- |
|    new | +169.28 MiB | 0.0% → 100.0% | 0 B → 169 MiB |   0 → 1 | `collectGarbage(String)` | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin` |

##### `notifyAfterOperationSetUp(String, int, boolean)` (`org.renaissance.harness.EventDispatcher`)

| Change |       Delta |             % |          Size | Samples | Callee                                      | Location                                                 |
| -----: | ----------: | ------------: | ------------: | ------: | ------------------------------------------- | -------------------------------------------------------- |
|    new | +169.28 MiB | 0.0% → 100.0% | 0 B → 169 MiB |   0 → 1 | `afterOperationSetUp(String, int, boolean)` | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

| Change |       Delta |             % |          Size | Samples | Callee                                            | Location                                  |
| -----: | ----------: | ------------: | ------------: | ------: | ------------------------------------------------- | ----------------------------------------- |
|    new | +169.28 MiB | 0.0% → 100.0% | 0 B → 169 MiB |   0 → 1 | `notifyAfterOperationSetUp(String, int, boolean)` | `org.renaissance.harness.EventDispatcher` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|  Change |        Delta |             % |               Size | Samples | Callee                                                      | Location                            |
| ------: | -----------: | ------------: | -----------------: | ------: | ----------------------------------------------------------- | ----------------------------------- |
| +146.1% | +125.857 MiB | 98.9% → 99.5% | 86.1 MiB → 212 MiB | 86 → 85 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`     |
|   +6.5% |  +31.718 KiB |   0.6% → 0.2% |  491 KiB → 522 KiB |       1 | `create(Path, URI)`                                         | `org.renaissance.core.ModuleLoader` |
|   +0.5% |   +2.296 KiB |   0.5% → 0.2% |  490 KiB → 493 KiB |       1 | `createScratchRoot(Path, boolean)`                          | `org.renaissance.core.Launcher`     |

##### `main(String[])` (`org.renaissance.core.Launcher`)

|  Change |       Delta |      % |               Size | Samples | Callee                                 | Location                        |
| ------: | ----------: | -----: | -----------------: | ------: | -------------------------------------- | ------------------------------- |
| +144.5% | +125.89 MiB | 100.0% | 87.1 MiB → 213 MiB | 88 → 87 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000070011583b8`)

|  Change |        Delta |             % |           Size | Samples | Callee                                                                                                                 | Location                                    |
| ------: | -----------: | ------------: | -------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
|     new | +194.266 MiB | 0.0% → 100.0% |  0 B → 194 MiB |  0 → 42 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
| removed |  -68.394 MiB | 100.0% → 0.0% | 68.4 MiB → 0 B |  51 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

|  Change |        Delta |      % |               Size | Samples | Callee              | Location                                                               |
| ------: | -----------: | -----: | -----------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
| +184.0% | +125.872 MiB | 100.0% | 68.4 MiB → 194 MiB | 51 → 42 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000070011583b8` |
| +184.0% | +125.872 MiB | 100.0% | 68.4 MiB → 194 MiB | 51 → 42 | `apply(Object)`     | `scala.runtime.function.JProcedure1`                                   |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

|  Change |        Delta |      % |               Size | Samples | Callee          | Location                             |
| ------: | -----------: | -----: | -----------------: | ------: | --------------- | ------------------------------------ |
| +184.0% | +125.872 MiB | 100.0% | 68.4 MiB → 194 MiB | 51 → 42 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001800`)

|  Change |        Delta |      % |               Size | Samples | Callee           | Location                                   |
| ------: | -----------: | -----: | -----------------: | ------: | ---------------- | ------------------------------------------ |
| +146.9% | +125.855 MiB | 100.0% | 85.7 MiB → 212 MiB | 85 → 84 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700100d800`)

|  Change |        Delta |      % |               Size | Samples | Callee                         | Location                                             |
| ------: | -----------: | -----: | -----------------: | ------: | ------------------------------ | ---------------------------------------------------- |
| +146.9% | +125.855 MiB | 100.0% | 85.7 MiB → 212 MiB | 85 → 84 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001001800` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|  Change |        Delta |      % |               Size | Samples | Callee                           | Location                                            |
| ------: | -----------: | -----: | -----------------: | ------: | -------------------------------- | --------------------------------------------------- |
| +146.9% | +125.855 MiB | 100.0% | 85.7 MiB → 212 MiB | 85 → 84 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700100d800` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|  Change |        Delta |      % |               Size | Samples | Callee                                           | Location                           |
| ------: | -----------: | -----: | -----------------: | ------: | ------------------------------------------------ | ---------------------------------- |
| +146.9% | +125.855 MiB | 100.0% | 85.7 MiB → 212 MiB | 85 → 84 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|  Change |        Delta |      % |               Size | Samples | Callee                         | Location                                          |
| ------: | -----------: | -----: | -----------------: | ------: | ------------------------------ | ------------------------------------------------- |
| +146.9% | +125.855 MiB | 100.0% | 85.7 MiB → 212 MiB | 85 → 84 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|  Change |        Delta |              % |               Size | Samples | Callee                     | Location                                          |
| ------: | -----------: | -------------: | -----------------: | ------: | -------------------------- | ------------------------------------------------- |
| +146.9% | +125.855 MiB | 99.4% → 100.0% | 85.7 MiB → 212 MiB | 85 → 84 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |
| removed |  -489.75 KiB |    0.6% → 0.0% |      490 KiB → 0 B |   1 → 0 | `acquireMethodAccessor()`  | `java.lang.reflect.Method`                        |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change |        Delta |      % |                Size |   Samples | Callee     | Location                            |
| -----: | -----------: | -----: | ------------------: | --------: | ---------- | ----------------------------------- |
|  +3.0% | +124.739 MiB | 100.0% | 4.06 GiB → 4.18 GiB | 111 → 124 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

| Change |       Delta |             % |              Size | Samples | Callee                                       | Location                                                                              |
| -----: | ----------: | ------------: | ----------------: | ------: | -------------------------------------------- | ------------------------------------------------------------------------------------- |
| +54.5% | +98.891 MiB | 53.6% → 72.6% | 182 MiB → 280 MiB |   3 → 4 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                                                                   |
| -35.1% | -55.063 MiB | 46.4% → 26.4% | 157 MiB → 102 MiB |       3 | `apply(Object)`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011faa60` |
|    new |  +3.818 MiB |   0.0% → 1.0% |    0 B → 3.82 MiB |   0 → 2 | `resize()`                                   | `java.util.HashMap`                                                                   |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|  Change |        Delta |              % |               Size | Samples | Callee                     | Location                   |
| ------: | -----------: | -------------: | -----------------: | ------: | -------------------------- | -------------------------- |
| +145.5% | +125.377 MiB | 100.0% → 99.8% | 86.1 MiB → 212 MiB | 86 → 84 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |
|     new | +491.421 KiB |    0.0% → 0.2% |      0 B → 491 KiB |   0 → 1 | `loadClass(String)`        | `java.lang.ClassLoader`    |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|  Change |        Delta |             % |                Size | Samples | Callee              | Location                                    |
| ------: | -----------: | ------------: | ------------------: | ------: | ------------------- | ------------------------------------------- |
| +150.5% | +125.127 MiB | 97.0% → 98.5% |  83.1 MiB → 208 MiB | 80 → 77 | `main(String[])`    | `org.renaissance.harness.RenaissanceSuite$` |
|  +28.5% | +744.843 KiB |   3.0% → 1.5% | 2.55 MiB → 3.28 MiB |   5 → 7 | `loadClass(String)` | `java.lang.ClassLoader`                     |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |        Delta |              % |               Size | Samples | Callee                                                           | Location                               |
| ------: | -----------: | -------------: | -----------------: | ------: | ---------------------------------------------------------------- | -------------------------------------- |
| +184.0% | +125.872 MiB | 99.5% → 100.0% | 68.4 MiB → 194 MiB | 51 → 42 | `foreach(Function1)`                                             | `scala.collection.immutable.List`      |
| removed | -386.656 KiB |    0.5% → 0.0% |      387 KiB → 0 B |   1 → 0 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |        Delta |             % |                Size | Samples | Callee                                                                        | Location                                    |
| ------: | -----------: | ------------: | ------------------: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| +182.5% | +125.494 MiB | 82.7% → 93.3% |  68.8 MiB → 194 MiB | 52 → 42 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |
| +842.7% |   +2.351 MiB |   0.3% → 1.3% |  286 KiB → 2.63 MiB |   1 → 6 | `<init>(Map)`                                                                 | `org.renaissance.harness.ConfigParser`      |
|  -42.3% |   -1.896 MiB |   5.4% → 1.2% | 4.48 MiB → 2.59 MiB |   3 → 7 | `parse(String[])`                                                             | `org.renaissance.harness.ConfigParser`      |
|  -29.7% | -608.585 KiB |   2.4% → 0.7% |     2 MiB → 1.4 MiB |   5 → 3 | `loadClass(String)`                                                           | `java.lang.ClassLoader`                     |
|  -28.2% | -535.578 KiB |   2.2% → 0.6% | 1.85 MiB → 1.33 MiB |   4 → 3 | `apply(Seq)`                                                                  | `scala.collection.immutable.Map$`           |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

| Change |       Delta |              % |              Size | Samples | Callee                             | Location                                  |
| -----: | ----------: | -------------: | ----------------: | ------: | ---------------------------------- | ----------------------------------------- |
|    new | +169.28 MiB |   0.0% → 88.1% |     0 B → 169 MiB |   0 → 1 | `executeOperation(int)`            | `org.renaissance.harness.ExecutionDriver` |
| -66.4% | -45.141 MiB | 100.0% → 11.9% | 68 MiB → 22.9 MiB | 50 → 35 | `setUpBeforeAll(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `combineResults(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |     Delta |             % |           Size | Samples | Callee                    | Location                                                  |
| -----: | --------: | ------------: | -------------: | ------: | ------------------------- | --------------------------------------------------------- |
|    new | +28.8 MiB | 0.0% → 100.0% | 0 B → 28.8 MiB |   0 → 1 | `add(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |     Delta |             % |           Size | Samples | Callee                               | Location                                                  |
| -----: | --------: | ------------: | -------------: | ------: | ------------------------------------ | --------------------------------------------------------- |
|    new | +28.8 MiB | 0.0% → 100.0% | 0 B → 28.8 MiB |   0 → 1 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |       Delta |             % |                Size | Samples | Callee                | Location                                               |
| ------: | ----------: | ------------: | ------------------: | ------: | --------------------- | ------------------------------------------------------ |
|     new | +15.092 MiB |  0.0% → 67.3% |      0 B → 15.1 MiB |   0 → 2 | `boxed(double[])`     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| +155.7% |  +4.474 MiB | 49.3% → 32.7% | 2.87 MiB → 7.35 MiB |   3 → 1 | `average(List)`       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| removed |  -2.951 MiB |  50.7% → 0.0% |      2.95 MiB → 0 B |   1 → 0 | `put(Object, Object)` | `java.util.HashMap`                                    |

##### `addAll(Collection)` (`java.util.ArrayList`)

| Change |        Delta |             % |                Size |   Samples | Callee      | Location              |
| -----: | -----------: | ------------: | ------------------: | --------: | ----------- | --------------------- |
| -23.4% |   -2.686 GiB | 43.1% → 37.7% | 11.5 GiB → 8.77 GiB | 282 → 216 | `toArray()` | `java.util.ArrayList` |
|  -4.2% | -647.773 MiB | 56.9% → 62.3% | 15.1 GiB → 14.5 GiB | 367 → 302 | `grow(int)` | `java.util.ArrayList` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |       Delta |             % |                Size |   Samples | Callee                | Location            |
| -----: | ----------: | ------------: | ------------------: | --------: | --------------------- | ------------------- |
|  -6.5% |  -2.223 GiB | 99.7% → 99.9% | 33.9 GiB → 31.7 GiB | 863 → 722 | `forEach(BiConsumer)` | `java.util.HashMap` |
| -66.9% | -57.434 MiB |   0.2% → 0.1% | 85.8 MiB → 28.4 MiB |     4 → 3 | `<init>(Map)`         | `java.util.HashMap` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |      Delta |      % |              Size |   Samples | Callee            | Location                                    |
| -----: | ---------: | -----: | ----------------: | --------: | ----------------- | ------------------------------------------- |
|  -6.7% | -2.289 GiB | 100.0% | 34 GiB → 31.7 GiB | 869 → 726 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |      Delta |      % |              Size |   Samples | Callee                     | Location                                                   |
| -----: | ---------: | -----: | ----------------: | --------: | -------------------------- | ---------------------------------------------------------- |
|  -6.7% | -2.289 GiB | 100.0% | 34 GiB → 31.7 GiB | 869 → 726 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |             % |                Size |   Samples | Callee               | Location              |
| -----: | -----------: | ------------: | ------------------: | --------: | -------------------- | --------------------- |
| -12.5% |   -3.318 GiB | 78.4% → 73.4% | 26.6 GiB → 23.3 GiB | 649 → 518 | `addAll(Collection)` | `java.util.ArrayList` |
| +12.5% | +936.978 MiB | 21.5% → 25.9% |  7.3 GiB → 8.22 GiB | 211 → 203 | `<init>(Collection)` | `java.util.ArrayList` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fb140`)

| Change |      Delta |      % |                Size |   Samples | Callee                       | Location                                    |
| -----: | ---------: | -----: | ------------------: | --------: | ---------------------------- | ------------------------------------------- |
|  -6.5% | -2.223 GiB | 100.0% | 33.9 GiB → 31.7 GiB | 863 → 722 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

| Change |      Delta |      % |                Size |   Samples | Callee                  | Location                                                               |
| -----: | ---------: | -----: | ------------------: | --------: | ----------------------- | ---------------------------------------------------------------------- |
|  -6.5% | -2.223 GiB | 100.0% | 33.9 GiB → 31.7 GiB | 863 → 722 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fb140` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |      Delta |      % |                Size |   Samples | Callee                              | Location            |
| -----: | ---------: | -----: | ------------------: | --------: | ----------------------------------- | ------------------- |
|  -6.5% | -2.223 GiB | 100.0% | 33.9 GiB → 31.7 GiB | 863 → 722 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011facb0`)

| Change |      Delta |      % |                Size |   Samples | Callee                              | Location                                    |
| -----: | ---------: | -----: | ------------------: | --------: | ----------------------------------- | ------------------------------------------- |
|  -6.5% | -2.223 GiB | 100.0% | 33.9 GiB → 31.7 GiB | 863 → 722 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

| Change |      Delta |      % |                Size |   Samples | Callee                   | Location                                                               |
| -----: | ---------: | -----: | ------------------: | --------: | ------------------------ | ---------------------------------------------------------------------- |
|  -6.5% | -2.223 GiB | 100.0% | 33.9 GiB → 31.7 GiB | 863 → 722 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011facb0` |

##### `toArray()` (`java.util.ArrayList`)

| Change |      Delta |      % |              Size |   Samples | Callee                  | Location           |
| -----: | ---------: | -----: | ----------------: | --------: | ----------------------- | ------------------ |
|  -9.4% | -1.771 GiB | 100.0% | 18.8 GiB → 17 GiB | 493 → 419 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|  Change |      Delta |            % |           Size | Samples | Callee                         | Location           |
| ------: | ---------: | -----------: | -------------: | ------: | ------------------------------ | ------------------ |
| removed | -7.325 MiB | <0.1% → 0.0% | 7.33 MiB → 0 B |   7 → 0 | `copyOf(Object[], int, Class)` | `java.util.Arrays` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|   Change |          Delta |             % |                Size |   Samples | Callee                           | Location                                                   |
| -------: | -------------: | ------------: | ------------------: | --------: | -------------------------------- | ---------------------------------------------------------- |
|    -6.7% |     -2.289 GiB | 90.3% → 87.0% |   34 GiB → 31.7 GiB | 869 → 726 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    +5.6% |     +1.327 GiB | 62.8% → 68.5% |   23.7 GiB → 25 GiB | 662 → 582 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
|   +27.4% | +1,004.876 MiB |  9.5% → 12.5% | 3.58 GiB → 4.56 GiB | 146 → 131 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +1891.2% |   +137.106 MiB |  <0.1% → 0.4% |  7.25 MiB → 144 MiB |     3 → 5 | `createSubtask(int, int)`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -68.4% |    -38.867 MiB |  0.1% → <0.1% |   56.8 MiB → 18 MiB |     2 → 4 | `createSubtask(int, int)`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change |      Delta |      % |                Size |     Samples | Callee      | Location                                               |
| -----: | ---------: | -----: | ------------------: | ----------: | ----------- | ------------------------------------------------------ |
|  -3.1% | -1.175 GiB | 100.0% | 37.7 GiB → 36.5 GiB | 1,023 → 869 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change |      Delta |             % |                Size |     Samples | Callee   | Location                                            |
| -----: | ---------: | ------------: | ------------------: | ----------: | -------- | --------------------------------------------------- |
|  -3.1% | -1.175 GiB |        100.0% | 37.7 GiB → 36.5 GiB | 1,023 → 869 | `exec()` | `java.util.concurrent.RecursiveTask`                |
|    ~0% | -1.167 MiB | 22.4% → 23.1% |            8.45 GiB |   137 → 118 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |      Delta |      % |                Size |     Samples | Callee     | Location                            |
| -----: | ---------: | -----: | ------------------: | ----------: | ---------- | ----------------------------------- |
|  -3.1% | -1.175 GiB | 100.0% | 37.7 GiB → 36.5 GiB | 1,023 → 869 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change |      Delta |      % |                Size |     Samples | Callee                                               | Location                                      |
| -----: | ---------: | -----: | ------------------: | ----------: | ---------------------------------------------------- | --------------------------------------------- |
|  -3.1% | -1.175 GiB | 100.0% | 37.7 GiB → 36.5 GiB | 1,023 → 869 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |      Delta |      % |                Size |     Samples | Callee                                   | Location                            |
| -----: | ---------: | -----: | ------------------: | ----------: | ---------------------------------------- | ----------------------------------- |
|  -3.1% | -1.175 GiB | 100.0% | 37.7 GiB → 36.5 GiB | 1,023 → 869 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

| Change |      Delta |      % |                Size |     Samples | Callee                              | Location                            |
| -----: | ---------: | -----: | ------------------: | ----------: | ----------------------------------- | ----------------------------------- |
|  -3.1% | -1.175 GiB | 100.0% | 37.7 GiB → 36.5 GiB | 1,023 → 869 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `putMapEntries(Map, boolean)` (`java.util.HashMap`)

|  Change |       Delta |              % |                Size | Samples | Callee                                          | Location                     |
| ------: | ----------: | -------------: | ------------------: | ------: | ----------------------------------------------- | ---------------------------- |
| removed | -70.363 MiB |   82.0% → 0.0% |      70.4 MiB → 0 B |   1 → 0 | `iterator()`                                    | `java.util.HashMap$EntrySet` |
|  +83.5% | +12.928 MiB | 18.0% → 100.0% | 15.5 MiB → 28.4 MiB |       3 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap`          |

##### `<init>(Map)` (`java.util.HashMap`)

| Change |       Delta |      % |                Size | Samples | Callee                        | Location            |
| -----: | ----------: | -----: | ------------------: | ------: | ----------------------------- | ------------------- |
| -66.9% | -57.434 MiB | 100.0% | 85.8 MiB → 28.4 MiB |   4 → 3 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `mapToObj(IntFunction)` (`java.util.stream.IntPipeline`)

| Change |       Delta |      % |              Size | Samples | Callee                       | Location                       |
| -----: | ----------: | -----: | ----------------: | ------: | ---------------------------- | ------------------------------ |
| -94.7% | -47.363 MiB | 100.0% | 50 MiB → 2.64 MiB |  10 → 5 | `mapToObj(IntFunction, int)` | `java.util.stream.IntPipeline` |

##### `accept(int)` (`java.util.stream.IntPipeline$1$1`)

|  Change |       Delta |              % |                Size | Samples | Callee           | Location                                            |
| ------: | ----------: | -------------: | ------------------: | ------: | ---------------- | --------------------------------------------------- |
|  -68.6% | -45.539 MiB | 97.6% → 100.0% | 66.4 MiB → 20.8 MiB | 47 → 30 | `apply(int)`     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda` |
| removed |   -1.66 MiB |    2.4% → 0.0% |      1.66 MiB → 0 B |   3 → 0 | `accept(Object)` | `java.util.stream.ReduceOps$3ReducingSink`          |

##### `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`)

| Change |       Delta |      % |              Size | Samples | Callee        | Location                           |
| -----: | ----------: | -----: | ----------------: | ------: | ------------- | ---------------------------------- |
| -69.4% | -47.199 MiB | 100.0% | 68 MiB → 20.8 MiB | 50 → 30 | `accept(int)` | `java.util.stream.IntPipeline$1$1` |

##### `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`)

| Change |       Delta |      % |              Size | Samples | Callee                          | Location                                       |
| -----: | ----------: | -----: | ----------------: | ------: | ------------------------------- | ---------------------------------------------- |
| -69.4% | -47.199 MiB | 100.0% | 68 MiB → 20.8 MiB | 50 → 30 | `forEachRemaining(IntConsumer)` | `java.util.stream.Streams$RangeIntSpliterator` |

##### `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

|  Change |        Delta |             % |               Size | Samples | Callee                       | Location                                  |
| ------: | -----------: | ------------: | -----------------: | ------: | ---------------------------- | ----------------------------------------- |
|  -69.4% |  -47.199 MiB | 98.9% → 91.3% |  68 MiB → 20.8 MiB | 50 → 30 | `forEachRemaining(Consumer)` | `java.util.Spliterator$OfInt`             |
| +326.7% |    +1.23 MiB |   0.5% → 7.0% | 386 KiB → 1.61 MiB |   1 → 4 | `forEachRemaining(Consumer)` | `java.util.Spliterators$ArraySpliterator` |
| removed | -393.914 KiB |   0.6% → 0.0% |      394 KiB → 0 B |   1 → 0 | `forEachRemaining(Consumer)` | `java.util.HashMap$KeySpliterator`        |
|     new | +387.585 KiB |   0.0% → 1.7% |      0 B → 388 KiB |   0 → 1 | `forEachRemaining(Consumer)` | `java.util.HashMap$EntrySpliterator`      |
| removed | -385.742 KiB |   0.5% → 0.0% |      386 KiB → 0 B |   1 → 0 | `forEachRemaining(Consumer)` | `java.util.HashMap$ValueSpliterator`      |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |        Delta |            % |          Size | Samples | Callee                                                                                       | Location                                  |
| ------: | -----------: | -----------: | ------------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
| removed |  -68.019 MiB | 99.5% → 0.0% |  68 MiB → 0 B |  50 → 0 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
| removed | -384.054 KiB |  0.5% → 0.0% | 384 KiB → 0 B |   1 → 0 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011faa60`)

| Change |       Delta |      % |              Size | Samples | Callee                               | Location                                                   |
| -----: | ----------: | -----: | ----------------: | ------: | ------------------------------------ | ---------------------------------------------------------- |
| -35.1% | -55.063 MiB | 100.0% | 157 MiB → 102 MiB |       3 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |       Delta |      % |              Size | Samples | Callee               | Location                             |
| -----: | ----------: | -----: | ----------------: | ------: | -------------------- | ------------------------------------ |
| -69.4% | -47.199 MiB | 100.0% | 68 MiB → 20.8 MiB | 50 → 30 | `collect(Collector)` | `java.util.stream.ReferencePipeline` |

##### `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`)

| Change |       Delta |             % |                Size | Samples | Callee                                           | Location                                    |
| -----: | ----------: | ------------: | ------------------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| -68.6% | -45.539 MiB |        100.0% | 66.4 MiB → 20.8 MiB | 47 → 30 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |
| -65.7% |  -6.509 MiB | 14.9% → 16.3% |  9.91 MiB → 3.4 MiB |  22 → 8 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |
| -37.6% |  -1.005 MiB |   4.0% → 8.0% | 2.68 MiB → 1.67 MiB |   5 → 4 | `lambda$generateData$4(int)`                     | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |             % |                Size | Samples | Callee                                         | Location                                            |
| -----: | -----------: | ------------: | ------------------: | ------: | ---------------------------------------------- | --------------------------------------------------- |
| -94.7% |  -47.363 MiB | 75.4% → 12.7% |   50 MiB → 2.64 MiB |  10 → 5 | `mapToObj(IntFunction)`                        | `java.util.stream.IntPipeline`                      |
|  +8.7% |   +1.111 MiB | 19.3% → 67.0% | 12.8 MiB → 13.9 MiB | 28 → 16 | `toArray(IntFunction)`                         | `java.util.stream.ReferencePipeline`                |
| +32.9% | +841.968 KiB |  3.8% → 16.0% |  2.5 MiB → 3.32 MiB |   6 → 7 | `range(int, int)`                              | `java.util.stream.IntStream`                        |
| -10.8% | -112.742 KiB |   1.5% → 4.4% |  1.02 MiB → 936 KiB |   3 → 2 | `linkToTargetMethod(int, int, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070011fcc00` |

##### `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |        Delta |              % |              Size | Samples | Callee                        | Location                                                           |
| -----: | -----------: | -------------: | ----------------: | ------: | ----------------------------- | ------------------------------------------------------------------ |
| -69.4% |  -47.199 MiB | 100.0% → 91.0% | 68 MiB → 20.8 MiB | 50 → 30 | `generateData(int, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                        |
|    new |   +1.607 MiB |    0.0% → 7.0% |    0 B → 1.61 MiB |   0 → 4 | `toCsvRows(Function)`         | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |
|    new | +461.164 KiB |    0.0% → 2.0% |     0 B → 461 KiB |   0 → 1 | `loadClass(String)`           | `java.lang.ClassLoader`                                            |

##### `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |      Delta |      % |               Size | Samples | Callee            | Location           |
| -----: | ---------: | -----: | -----------------: | ------: | ----------------- | ------------------ |
| -65.7% | -6.509 MiB | 100.0% | 9.91 MiB → 3.4 MiB |  22 → 8 | `valueOf(double)` | `java.lang.Double` |

##### `findCommand$1(ListBuffer, String)` (`scopt.ORunner$`)

|  Change |      Delta |             % |           Size | Samples | Callee                                                        | Location                               |
| ------: | ---------: | ------------: | -------------: | ------: | ------------------------------------------------------------- | -------------------------------------- |
| removed | -3.725 MiB | 100.0% → 0.0% | 3.73 MiB → 0 B |   1 → 0 | `linkMethodHandleConstant(Class, int, Class, String, Object)` | `java.lang.invoke.MethodHandleNatives` |

##### `parse(Seq, Object)` (`scopt.OptionParser`)

|  Change |        Delta |             % |               Size | Samples | Callee                                       | Location                |
| ------: | -----------: | ------------: | -----------------: | ------: | -------------------------------------------- | ----------------------- |
|  -64.6% |   -2.648 MiB | 91.5% → 79.5% | 4.1 MiB → 1.45 MiB |   2 → 4 | `runParser(Seq, Object, List, OParserSetup)` | `scopt.ORunner$`        |
| removed | -388.773 KiB |   8.5% → 0.0% |      389 KiB → 0 B |   1 → 0 | `runEffects(List, OEffectSetup)`             | `scopt.ORunner$`        |
|     new | +383.867 KiB |  0.0% → 20.5% |      0 B → 384 KiB |   0 → 1 | `loadClass(String)`                          | `java.lang.ClassLoader` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in bytes allocated in their leaf frame.

Common call stack: `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|   Change |        Delta |            % |               Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| -------: | -----------: | -----------: | -----------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +629.3% |   +1.168 GiB |  0.5% → 3.7% | 190 MiB → 1.35 GiB |  7 → 11 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fb140`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011facb0`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011f9cf0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|   +96.6% | +434.527 MiB |  1.2% → 2.4% |  450 MiB → 884 MiB | 12 → 18 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fb140`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011facb0`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|   +19.2% | +430.876 MiB |  5.8% → 7.1% | 2.2 GiB → 2.62 GiB | 81 → 70 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fb140`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011facb0`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|      new | +390.365 MiB |  0.0% → 1.0% |      0 B → 390 MiB |   0 → 3 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fb140`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011facb0`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011f9cf0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) |
|   +59.6% |  +372.09 MiB |  1.6% → 2.7% |  625 MiB → 997 MiB |      20 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|      new |  +359.29 MiB |  0.0% → 1.0% |      0 B → 359 MiB |   0 → 1 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fb140`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011facb0`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|   +39.5% | +338.954 MiB |  2.2% → 3.2% | 858 MiB → 1.17 GiB | 15 → 23 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fb140`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011facb0`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011f9cf0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|   +53.9% | +320.296 MiB |  1.5% → 2.4% |  595 MiB → 915 MiB | 16 → 19 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fb140`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011facb0`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|      new | +308.884 MiB |  0.0% → 0.8% |      0 B → 309 MiB |   0 → 1 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fb140`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011facb0`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011f9cf0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  +534.4% | +282.814 MiB |  0.1% → 0.9% | 52.9 MiB → 336 MiB |       9 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|      new | +280.073 MiB |  0.0% → 0.7% |      0 B → 280 MiB |   0 → 1 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fb140`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011facb0`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011f9cf0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|      new | +278.427 MiB |  0.0% → 0.7% |      0 B → 278 MiB |   0 → 1 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fb140`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011facb0`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011f9cf0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| +5451.2% | +255.812 MiB | <0.1% → 0.7% | 4.69 MiB → 261 MiB |       1 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fb140`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011facb0`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011f9cf0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| +2233.5% | +253.014 MiB | <0.1% → 0.7% | 11.3 MiB → 264 MiB |   1 → 3 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|      new | +235.178 MiB |  0.0% → 0.6% |      0 B → 235 MiB |   0 → 1 | `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`) ← `computeIfAbsent(Object, Function)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|      new | +232.938 MiB |  0.0% → 0.6% |      0 B → 233 MiB |   0 → 4 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fb140`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011facb0`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  +389.9% | +232.063 MiB |  0.2% → 0.8% | 59.5 MiB → 292 MiB |   4 → 1 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fb140`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011facb0`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011f9cf0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|      new | +219.661 MiB |  0.0% → 0.6% |      0 B → 220 MiB |   0 → 1 | `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fb140`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011facb0`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  +797.7% | +219.298 MiB |  0.1% → 0.7% | 27.5 MiB → 247 MiB |       2 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|      new | +200.801 MiB |  0.0% → 0.5% |      0 B → 201 MiB |   0 → 1 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fb140`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011facb0`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

### Improvements

Call stacks with the largest decrease in bytes allocated in their leaf frame.

Common call stack: `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|  Change |        Delta |            % |                Size |  Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------: | -----------: | -----------: | ------------------: | -------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -24.8% |    -1.06 GiB | 11.3% → 8.8% | 4.28 GiB → 3.22 GiB | 115 → 80 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fb140`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011facb0`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  -59.2% | -963.838 MiB |  4.2% → 1.8% |  1.59 GiB → 664 MiB |       20 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fb140`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011facb0`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011f9cf0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -25.2% |  -806.01 MiB |  8.3% → 6.3% | 3.12 GiB → 2.33 GiB |  94 → 73 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fb140`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011facb0`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  -30.4% | -609.058 MiB |  5.2% → 3.7% | 1.95 GiB → 1.36 GiB |  30 → 15 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fb140`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011facb0`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011f9cf0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -53.7% | -529.414 MiB |  2.5% → 1.2% |   987 MiB → 457 MiB |  25 → 15 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fb140`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011facb0`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -33.3% | -448.537 MiB |  3.5% → 2.4% |  1.32 GiB → 899 MiB |  12 → 10 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fb140`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011facb0`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011f9cf0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  -25.6% | -422.554 MiB |  4.3% → 3.3% |  1.61 GiB → 1.2 GiB |  54 → 41 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fb140`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011facb0`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  -70.2% | -407.345 MiB |  1.5% → 0.5% |   580 MiB → 173 MiB |    8 → 5 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fb140`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011facb0`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| removed | -284.923 MiB |  0.7% → 0.0% |       285 MiB → 0 B |    1 → 0 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dd7d8`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dd590`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011d7aa8`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -95.5% | -267.998 MiB | 0.7% → <0.1% |  281 MiB → 12.6 MiB |    1 → 3 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fb140`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011facb0`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011f9cf0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| removed | -254.881 MiB |  0.7% → 0.0% |       255 MiB → 0 B |    1 → 0 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dd7d8`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dd590`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011d7aa8`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  -45.4% | -246.013 MiB |  1.4% → 0.8% |   541 MiB → 295 MiB |    8 → 5 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fb140`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011facb0`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011f9cf0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  -47.5% | -237.137 MiB |  1.3% → 0.7% |   499 MiB → 262 MiB |   13 → 8 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fb140`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011facb0`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  -97.3% |  -228.23 MiB | 0.6% → <0.1% |  235 MiB → 6.33 MiB |    3 → 1 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fb140`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011facb0`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  -96.6% | -222.989 MiB | 0.6% → <0.1% |  231 MiB → 7.95 MiB |    4 → 1 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011f9cf0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) |
|  -16.2% |  -209.48 MiB |  3.3% → 2.9% | 1.26 GiB → 1.06 GiB |  27 → 20 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fb140`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011facb0`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  -47.7% | -208.798 MiB |  1.1% → 0.6% |   437 MiB → 229 MiB |  15 → 10 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fb140`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011facb0`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  -34.4% | -197.369 MiB |  1.5% → 1.0% |   574 MiB → 376 MiB |   13 → 8 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fb140`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011facb0`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  -18.2% | -196.989 MiB |  2.8% → 2.3% |  1.05 GiB → 883 MiB |  30 → 24 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011fb140`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011facb0`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| removed | -187.696 MiB |  0.5% → 0.0% |       188 MiB → 0 B |    2 → 0 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dd7d8`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dd590`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

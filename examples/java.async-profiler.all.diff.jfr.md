# Sampling profile diff

5,188 samples → 5,107 samples (-81 samples, -1.6%).

| Category          |  Change | Delta |             % |       Samples |
| ----------------- | ------: | ----: | ------------: | ------------: |
| ours              |   -3.0% |   -93 | 59.7% → 58.8% | 3,098 → 3,005 |
| native            |   +5.6% |   +71 | 24.5% → 26.2% | 1,269 → 1,340 |
| stdlib            |   -6.8% |   -51 | 14.5% → 13.7% |     752 → 701 |
| jit               |   -9.0% |    -6 |   1.3% → 1.2% |       67 → 61 |
| garbage collector | removed |    -2 |  <0.1% → 0.0% |         2 → 0 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |     Samples | Function                                   | Location                                                                              |
| ------: | ----: | ------------: | ----------: | ------------------------------------------ | ------------------------------------------------------------------------------------- |
|  +12.5% |  +118 | 18.2% → 20.8% | 943 → 1,061 | `accumulate(Double[], double[])`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| +100.0% |    +7 |   0.1% → 0.3% |      7 → 14 | `merge(Object, Object, BiFunction)`        | `java.util.HashMap`                                                                   |
| +500.0% |    +5 |  <0.1% → 0.1% |       1 → 6 | `createSubtask(int, int)`                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|     new |    +4 |   0.0% → 0.1% |       0 → 4 | `combineResults(Object, Object)`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   +2.8% |    +3 |   2.1% → 2.2% |   108 → 111 | `collectClusters(int[])`                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|     new |    +2 |  0.0% → <0.1% |       0 → 2 | `apply(Object, Object)`                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0`                |
|     new |    +2 |  0.0% → <0.1% |       0 → 2 | `combineResults(Object, Object)`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|     new |    +2 |  0.0% → <0.1% |       0 → 2 | `apply(Object)`                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000c801186b38` |
|  +66.7% |    +2 |          0.1% |       3 → 5 | `_sigtramp`                                | `libsystem_platform.dylib`                                                            |
|     new |    +2 |  0.0% → <0.1% |       0 → 2 | `<init>(JavaKMeans, int, int)`             | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
|     new |    +2 |  0.0% → <0.1% |       0 → 2 | `forkThreshold()`                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +20.0% |    +1 |          0.1% |       5 → 6 | `forEach(BiConsumer)`                      | `java.util.HashMap`                                                                   |
|     new |    +1 |  0.0% → <0.1% |       0 → 1 | `put(Object, Object)`                      | `java.util.HashMap`                                                                   |
|     new |    +1 |  0.0% → <0.1% |       0 → 1 | `I2C/C2I adapters(0xbbab)`                 | `<unknown>`                                                                           |
|     new |    +1 |  0.0% → <0.1% |       0 → 1 | `values()`                                 | `java.util.HashMap`                                                                   |
|     new |    +1 |  0.0% → <0.1% |       0 → 1 | `vtable stub`                              | `<unknown>`                                                                           |
|     new |    +1 |  0.0% → <0.1% |       0 → 1 | `stream(double[])`                         | `java.util.Arrays`                                                                    |
|     new |    +1 |  0.0% → <0.1% |       0 → 1 | `forkThreshold()`                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|     new |    +1 |  0.0% → <0.1% |       0 → 1 | `<init>(JavaKMeans, List, List, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                                         | Location                                                                          |
| ------: | ----: | ------------: | --------: | ------------------------------------------------ | --------------------------------------------------------------------------------- |
|  -21.0% |  -103 |   9.5% → 7.6% | 491 → 388 | `findNearestCentroid()`                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                        |
|  -13.5% |   -76 |  10.8% → 9.5% | 562 → 486 | `vectorSum()`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                         |
|   -5.2% |   -51 | 18.9% → 18.2% | 983 → 932 | `distance(Double[], Double[])`                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                        |
|   -5.4% |    -8 |   2.8% → 2.7% | 147 → 139 | `computeIfAbsent(Object, Function)`              | `java.util.HashMap`                                                               |
|  -11.9% |    -8 |   1.3% → 1.2% |   67 → 59 | `zero_blocks`                                    | `<unknown>`                                                                       |
|   -2.8% |    -4 |   2.8% → 2.7% | 143 → 139 | `doubleValue()`                                  | `java.lang.Double`                                                                |
| removed |    -3 |   0.1% → 0.0% |     3 → 0 | `get(int)`                                       | `java.util.ArrayList`                                                             |
|  -66.7% |    -2 |  0.1% → <0.1% |     3 → 1 | `join()`                                         | `java.util.concurrent.ForkJoinTask`                                               |
| removed |    -2 |  <0.1% → 0.0% |     2 → 0 | `add(Object)`                                    | `java.util.ArrayList`                                                             |
| removed |    -2 |  <0.1% → 0.0% |     2 → 0 | `g1_post_barrier_slow`                           | `<unknown>`                                                                       |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `computeDirectly()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                        |
|  -33.3% |    -1 |  0.1% → <0.1% |     3 → 2 | `compute()`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                            |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `computeDirectly()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                         |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `toArray(IntFunction)`                           | `java.util.stream.ReferencePipeline`                                              |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `apply(int)`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask$$Lambda.0x000000080118c9c0` |
|  -50.0% |    -1 |         <0.1% |     2 → 1 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                                       |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % |       Samples | Function                                                      | Location                                                                              |
| ------: | ----: | ------------: | ------------: | ------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|  +10.2% |  +110 | 20.7% → 23.2% | 1,075 → 1,185 | `accumulate(Double[], double[])`                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   +0.9% |   +16 | 33.5% → 34.4% | 1,740 → 1,756 | `vectorSum()`                                                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   +0.9% |   +15 | 33.6% → 34.4% | 1,741 → 1,756 | `computeDirectly()`                                           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| +700.0% |    +7 |  <0.1% → 0.2% |         1 → 8 | `createSubtask(int, int)`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| +600.0% |    +6 |  <0.1% → 0.1% |         1 → 7 | `fork()`                                                      | `java.util.concurrent.ForkJoinTask`                                                   |
|     new |    +5 |   0.0% → 0.1% |         0 → 5 | `combineResults(Object, Object)`                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| +133.3% |    +4 |          0.1% |         3 → 7 | `_sigtramp`                                                   | `libsystem_platform.dylib`                                                            |
|     new |    +4 |   0.0% → 0.1% |         0 → 4 | `boxed()`                                                     | `java.util.stream.DoublePipeline`                                                     |
|  +75.0% |    +3 |          0.1% |         4 → 7 | `boxed(double[])`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
| +100.0% |    +2 |  <0.1% → 0.1% |         2 → 4 | `apply(Object)`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000c801186b38` |
|  +12.5% |    +2 |   0.3% → 0.4% |       16 → 18 | `loadClass(String)`                                           | `java.lang.ClassLoader`                                                               |
|   +6.5% |    +2 |          0.6% |       31 → 33 | `invoke(Object, Object[])`                                    | `java.lang.reflect.Method`                                                            |
|   +6.9% |    +2 |          0.6% |       29 → 31 | `main(String[])`                                              | `org.renaissance.harness.RenaissanceSuite$`                                           |
| +200.0% |    +2 |  <0.1% → 0.1% |         1 → 3 | `DeoptimizationBlob`                                          | `<unknown>`                                                                           |
|     new |    +2 |  0.0% → <0.1% |         0 → 2 | `linkMethodHandleConstant(Class, int, Class, String, Object)` | `java.lang.invoke.MethodHandleNatives`                                                |
|     new |    +2 |  0.0% → <0.1% |         0 → 2 | `stream(double[])`                                            | `java.util.Arrays`                                                                    |
|     new |    +2 |  0.0% → <0.1% |         0 → 2 | `<init>(JavaKMeans, List, List, int, int)`                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|     new |    +2 |  0.0% → <0.1% |         0 → 2 | `forkThreshold()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|     new |    +2 |  0.0% → <0.1% |         0 → 2 | `createSubtask(int, int)`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   +0.1% |    +1 | 15.0% → 15.3% |     779 → 780 | `computeClusterAverages()`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |             % |       Samples | Function                            | Location                                                               |
| -----: | ----: | ------------: | ------------: | ----------------------------------- | ---------------------------------------------------------------------- |
|  -9.9% |  -208 | 40.4% → 37.0% | 2,097 → 1,889 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -4.3% |  -203 | 90.7% → 88.2% | 4,707 → 4,504 | `compute()`                         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  -4.3% |  -197 | 87.7% → 85.2% | 4,549 → 4,352 | `join()`                            | `java.util.concurrent.ForkJoinTask`                                    |
| -10.3% |  -160 | 30.1% → 27.4% | 1,559 → 1,399 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -5.0% |   -50 | 19.2% → 18.5% |     997 → 947 | `distance(Double[], Double[])`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| -11.1% |   -50 |   8.7% → 7.9% |     451 → 401 | `merge(Map, Map)`                   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| -10.9% |   -49 |   8.6% → 7.8% |     448 → 399 | `combineResults(Map, Map)`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| -11.0% |   -47 |   8.2% → 7.4% |     427 → 380 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| -11.0% |   -47 |   8.2% → 7.4% |     427 → 380 | `accept(Object, Object)`            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88` |
| -10.5% |   -47 |   8.6% → 7.9% |     448 → 401 | `combineResults(Object, Object)`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -8.6% |   -46 |  10.4% → 9.6% |     537 → 491 | `collectClusters(int[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| -10.8% |   -46 |   8.2% → 7.4% |     426 → 380 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`                                                    |
| -10.6% |   -46 |   8.3% → 7.6% |     432 → 386 | `forEach(BiConsumer)`               | `java.util.HashMap`                                                    |
| -17.7% |   -39 |   4.2% → 3.5% |     220 → 181 | `get(int)`                          | `java.util.ArrayList`                                                  |
| -10.4% |   -34 |   6.3% → 5.7% |     327 → 293 | `lambda$merge$6(List, List)`        | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -9.8% |   -32 |   6.3% → 5.8% |     327 → 295 | `apply(Object, Object)`             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0` |
|  -6.2% |   -31 |   9.7% → 9.2% |     503 → 472 | `lambda$run$0(int, List, int)`      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -6.2% |   -31 |   9.7% → 9.2% |     503 → 472 | `call()`                            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801183d68` |
| -27.3% |   -30 |   2.1% → 1.6% |      110 → 80 | `<init>(Collection)`                | `java.util.ArrayList`                                                  |
| -12.3% |   -23 |   3.6% → 3.2% |     187 → 164 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`                                                    |

# Allocated heap profile diff

Allocated 3.29 GB → 3.25 GB (-43.3 MB, -1.3%) over 75,095 samples → 74,967 samples (43.9 kB → 43.4 kB per sample).

| Category | Change |    Delta |     % |              Size |         Samples |
| -------- | -----: | -------: | ----: | ----------------: | --------------: |
| stdlib   |  -1.3% | -43.4 MB | 99.8% | 3.29 GB → 3.24 GB | 69,874 → 69,639 |
| ours     |  +2.0% |  +136 kB |  0.2% | 6.93 MB → 7.06 MB |   5,221 → 5,328 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|  Change |    Delta |     % |              Size |       Samples | Function                             | Location                                                   |
| ------: | -------: | ----: | ----------------: | ------------: | ------------------------------------ | ---------------------------------------------------------- |
|   +2.0% |  +134 kB |  0.2% | 6.85 MB → 6.98 MB | 3,477 → 3,545 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +23.4% | +3.31 kB | <0.1% | 14.2 kB → 17.5 kB |     295 → 364 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   +9.1% | +1.29 kB | <0.1% | 14.2 kB → 15.5 kB |     254 → 277 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +10.3% |   +160 B | <0.1% | 1.56 kB → 1.72 kB |       39 → 43 | `lambda$generateData$4(int)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|   +2.9% |   +144 B | <0.1% |  4.9 kB → 5.04 kB |     204 → 210 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +100.0% |    +40 B | <0.1% |       40 B → 80 B |         1 → 2 | `lambda$boxed$0(int)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  +50.0% |    +24 B | <0.1% |       48 B → 72 B |         2 → 3 | `<init>(JavaKMeans, Map)`            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |   Delta |            % |              Size |   Samples | Function                     | Location                                                   |
| ------: | ------: | -----------: | ----------------: | --------: | ---------------------------- | ---------------------------------------------------------- |
|  -10.1% | -1.1 kB |        <0.1% | 10.9 kB → 9.84 kB | 228 → 205 | `collectClusters(int[])`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -10.1% |  -896 B |        <0.1% |  8.9 kB → 8.01 kB | 159 → 143 | `add(double[], double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -10.2% |  -312 B |        <0.1% | 3.07 kB → 2.76 kB | 128 → 115 | `valueOf(double)`            | `java.lang.Double`                                         |
|   -4.5% |  -288 B |        <0.1% | 6.43 kB → 6.14 kB | 134 → 128 | `merge(Map, Map)`            | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -31.6% |  -288 B |        <0.1% |     912 B → 624 B |   19 → 13 | `computeClusterAverages()`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|   -3.8% |  -216 B |        <0.1% |  5.71 kB → 5.5 kB | 238 → 229 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -23.1% |  -144 B |        <0.1% |     624 B → 480 B |   26 → 20 | `range(int, int)`            | `java.util.stream.IntStream`                               |
|  -40.0% |  -112 B |        <0.1% |     280 B → 168 B |     5 → 3 | `div(double[], int)`         | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|   -0.7% |   -56 B |        <0.1% | 8.06 kB → 8.01 kB | 144 → 143 | `vectorSum()`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -6.3% |   -48 B |        <0.1% |     768 B → 720 B |   16 → 15 | `createSubtask(int, int)`    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| removed |   -24 B | <0.1% → 0.0% |        24 B → 0 B |     1 → 0 | `main(String[])`             | `org.renaissance.harness.RenaissanceSuite$`                |
|  -12.5% |    -8 B |        <0.1% |       64 B → 56 B |         2 | `collectGarbage(String)`     | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`   |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|  Change |    Delta |             % |              Size |         Samples | Function                                                                                                                                                    | Location                                                        |
| ------: | -------: | ------------: | ----------------: | --------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
|   +0.5% | +5.32 MB | 30.5% → 31.1% |    1 GB → 1.01 GB | 59,794 → 59,892 | `join()`                                                                                                                                                    | `java.util.concurrent.ForkJoinTask`                             |
|   +2.0% |  +134 kB |          0.2% | 6.85 MB → 6.98 MB |   3,477 → 3,545 | `findNearestCentroid()`                                                                                                                                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`      |
|   +1.1% |  +124 kB |          0.4% | 11.7 MB → 11.9 MB | 16,626 → 16,673 | `computeDirectly()`                                                                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`      |
|     new | +27.1 kB |  0.0% → <0.1% |     0 B → 27.1 kB |           0 → 2 | `asJava()`                                                                                                                                                  | `scala.collection.convert.AsJavaExtensions$MutableMapHasAsJava` |
| +106.6% | +16.4 kB |         <0.1% | 15.4 kB → 31.8 kB |               1 | `apply(Seq)`                                                                                                                                                | `scala.collection.mutable.LinkedHashMap$`                       |
|     new | +15.4 kB |  0.0% → <0.1% |     0 B → 15.4 kB |           0 → 1 | `mkString(String)`                                                                                                                                          | `scala.collection.AbstractIterable`                             |
|  +17.1% | +11.5 kB |         <0.1% | 67.4 kB → 78.9 kB |               3 | `apply(Seq)`                                                                                                                                                | `scala.collection.immutable.Map$`                               |
|     new | +9.82 kB |  0.0% → <0.1% |     0 B → 9.82 kB |           0 → 1 | `wrapRefArray(Object[])`                                                                                                                                    | `scala.runtime.ScalaRunTime$`                                   |
| +232.3% | +9.09 kB |         <0.1% |   3.91 kB → 13 kB |               3 | `runParser(Seq, Object, List, OParserSetup)`                                                                                                                | `scopt.ORunner$`                                                |
|     new | +8.21 kB |  0.0% → <0.1% |     0 B → 8.21 kB |           0 → 1 | `createBenchmark(BenchmarkDescriptor)`                                                                                                                      | `org.renaissance.core.BenchmarkSuite`                           |
|     new | +8.21 kB |  0.0% → <0.1% |     0 B → 8.21 kB |           0 → 1 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)`                                                                | `org.renaissance.harness.ExecutionDriver`                       |
|     new | +7.18 kB |  0.0% → <0.1% |     0 B → 7.18 kB |           0 → 1 | `<clinit>()`                                                                                                                                                | `scala.runtime.LazyVals$`                                       |
|     new | +7.18 kB |  0.0% → <0.1% |     0 B → 7.18 kB |           0 → 1 | `<clinit>()`                                                                                                                                                | `scopt.OptionParser`                                            |
|     new | +5.47 kB |  0.0% → <0.1% |     0 B → 5.47 kB |           0 → 1 | `$plus$plus(IterableOnce)`                                                                                                                                  | `scala.collection.AbstractIterable`                             |
|     new | +4.44 kB |  0.0% → <0.1% |     0 B → 4.44 kB |           0 → 1 | `applyArgument(String, Object, Option)`                                                                                                                     | `scopt.OptionDef`                                               |
|     new | +4.44 kB |  0.0% → <0.1% |     0 B → 4.44 kB |           0 → 1 | `handleArgument$1(List, OParserSetup, ListBuffer, ListBuffer, ListBuffer, ObjectRef, BooleanRef, ListBuffer, LazyRef, LazyRef, LazyRef, OptionDef, String)` | `scopt.ORunner$`                                                |
|  +23.4% | +3.31 kB |         <0.1% | 14.2 kB → 17.5 kB |       295 → 364 | `createSubtask(int, int)`                                                                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`       |
|     new | +3.09 kB |  0.0% → <0.1% |     0 B → 3.09 kB |           0 → 1 | `apply(Object)`                                                                                                                                             | `scala.util.Right$`                                             |
|     new | +3.09 kB |  0.0% → <0.1% |     0 B → 3.09 kB |           0 → 1 | `apply$$anonfun$1(String)`                                                                                                                                  | `scopt.OptionDef`                                               |
|     new | +3.09 kB |  0.0% → <0.1% |     0 B → 3.09 kB |           0 → 1 | `apply(Object)`                                                                                                                                             | `scopt.OptionDef$$Lambda.0x000000c8010f3b48`                    |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

| Change |    Delta |             % |              Size |         Samples | Function                                                    | Location                                                               |
| -----: | -------: | ------------: | ----------------: | --------------: | ----------------------------------------------------------- | ---------------------------------------------------------------------- |
|  -1.3% | -42.5 MB | 99.4% → 99.5% | 3.28 GB → 3.23 GB | 56,661 → 56,429 | `lambda$merge$6(List, List)`                                | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -1.3% | -42.5 MB | 99.4% → 99.5% | 3.28 GB → 3.23 GB | 56,661 → 56,429 | `apply(Object, Object)`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0` |
|  -1.3% | -42.5 MB | 99.4% → 99.5% | 3.28 GB → 3.23 GB | 56,664 → 56,432 | `merge(Object, Object, BiFunction)`                         | `java.util.HashMap`                                                    |
|  -1.3% | -42.5 MB | 99.4% → 99.5% | 3.28 GB → 3.23 GB | 56,664 → 56,432 | `lambda$merge$7(Map, Object, List)`                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -1.3% | -42.5 MB | 99.4% → 99.5% | 3.28 GB → 3.23 GB | 56,664 → 56,432 | `accept(Object, Object)`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88` |
|  -1.3% | -42.5 MB | 99.4% → 99.5% | 3.28 GB → 3.23 GB | 56,664 → 56,432 | `forEach(BiConsumer)`                                       | `java.util.HashMap`                                                    |
|  -1.3% | -42.5 MB | 99.4% → 99.5% | 3.28 GB → 3.23 GB | 57,113 → 56,898 | `combineResults(Map, Map)`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -1.3% | -42.5 MB | 99.4% → 99.5% | 3.28 GB → 3.23 GB | 57,113 → 56,898 | `combineResults(Object, Object)`                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -1.3% | -42.5 MB | 99.4% → 99.5% | 3.28 GB → 3.23 GB | 57,120 → 56,907 | `merge(Map, Map)`                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -1.3% | -42.4 MB |         99.8% | 3.29 GB → 3.25 GB | 74,657 → 74,559 | `compute()`                                                 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  -1.5% |   -39 MB | 81.3% → 81.1% | 2.68 GB → 2.64 GB | 42,207 → 41,976 | `addAll(Collection)`                                        | `java.util.ArrayList`                                                  |
|  -1.1% | -22.4 MB | 62.5% → 62.7% | 2.06 GB → 2.04 GB | 14,930 → 15,055 | `lambda$run$0(int, List, int)`                              | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -1.1% | -22.4 MB | 62.5% → 62.7% | 2.06 GB → 2.04 GB | 14,930 → 15,055 | `call()`                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801183d68` |
|  -1.1% | -22.4 MB | 62.5% → 62.7% | 2.06 GB → 2.04 GB | 15,204 → 15,374 | `invoke()`                                                  | `java.util.concurrent.ForkJoinTask`                                    |
|  -0.6% |  -3.5 MB | 18.2% → 18.3% |   599 MB → 596 MB | 14,216 → 14,224 | `<init>(Collection)`                                        | `java.util.ArrayList`                                                  |
| -14.1% |  -911 kB |          0.2% | 6.46 MB → 5.54 MB |       432 → 401 | `launchHarnessClass(String, String[])`                      | `org.renaissance.core.Launcher`                                        |
| -14.1% |  -911 kB |          0.2% | 6.46 MB → 5.54 MB |       432 → 401 | `main(String[])`                                            | `org.renaissance.core.Launcher`                                        |
| -14.1% |  -911 kB |          0.2% | 6.45 MB → 5.54 MB |       429 → 399 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`                                        |
| -13.9% |  -894 kB |          0.2% | 6.44 MB → 5.54 MB |       426 → 398 | `main(String[])`                                            | `org.renaissance.harness.RenaissanceSuite`                             |
| -13.9% |  -894 kB |          0.2% | 6.44 MB → 5.54 MB |       426 → 399 | `invoke(Object, Object[])`                                  | `java.lang.reflect.Method`                                             |

# Lock contention profile diff

Blocked 2.7ms → 1.6ms (-1.1ms, -41.1%) over 28 samples → 9 samples (96.7µs → 177.2µs per sample).

| Category | Change |  Delta |      % |          Time | Samples |
| -------- | -----: | -----: | -----: | ------------: | ------: |
| stdlib   | -41.1% | -1.1ms | 100.0% | 2.7ms → 1.6ms |  28 → 9 |

## Hottest functions

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

|  Change |  Delta |            % |          Time | Samples | Function                          | Location                                                               |
| ------: | -----: | -----------: | ------------: | ------: | --------------------------------- | ---------------------------------------------------------------------- |
| +173.3% | +0.2ms | 4.9% → 22.9% | 0.1ms → 0.4ms |   3 → 1 | `invoke()`                        | `java.util.concurrent.ForkJoinTask`                                    |
| +173.3% | +0.2ms | 4.9% → 22.9% | 0.1ms → 0.4ms |   3 → 1 | `lambda$run$0(int, List, int)`    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| +173.3% | +0.2ms | 4.9% → 22.9% | 0.1ms → 0.4ms |   3 → 1 | `call()`                          | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801183d68` |
|  +75.4% | +0.1ms |  2.7% → 8.0% |         0.1ms |   5 → 4 | `walkFileTree(Path, FileVisitor)` | `java.nio.file.Files`                                                  |

#### Improvements

Functions with the largest decrease in total time blocked in the function and all its callees.

|  Change |   Delta |             % |          Time | Samples | Function                                 | Location                                                   |
| ------: | ------: | ------------: | ------------: | ------: | ---------------------------------------- | ---------------------------------------------------------- |
|  -46.6% |  -1.1ms | 84.9% → 77.0% | 2.3ms → 1.2ms |  22 → 4 | `computeClusterAverages()`               | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -46.6% |  -1.1ms | 84.9% → 77.0% | 2.3ms → 1.2ms |  22 → 4 | `computeDirectly()`                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -46.6% |  -1.1ms | 84.9% → 77.0% | 2.3ms → 1.2ms |  22 → 4 | `compute()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|  -51.5% |  -0.7ms | 52.8% → 43.5% | 1.4ms → 0.7ms |  11 → 2 | `join()`                                 | `java.util.concurrent.ForkJoinTask`                        |
| removed |  -0.7ms |  25.7% → 0.0% |   0.7ms → 0ms |  18 → 0 | `boxed(double[])`                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -30.0% |  -0.6ms | 77.5% → 92.0% | 2.1ms → 1.5ms |   9 → 5 | `loadClass(String)`                      | `java.lang.ClassLoader`                                    |
|  -23.4% |  -0.4ms | 59.2% → 77.0% | 1.6ms → 1.2ms |       4 | `average(List)`                          | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| removed |  -0.3ms |  11.1% → 0.0% |   0.3ms → 0ms |   5 → 0 | `stream(double[])`                       | `java.util.Arrays`                                         |
| removed |  -0.2ms |   7.2% → 0.0% |   0.2ms → 0ms |   7 → 0 | `toArray(IntFunction)`                   | `java.util.stream.ReferencePipeline`                       |
| removed | -47.0µs |   1.7% → 0.0% |  47.0µs → 0ms |   3 → 0 | `boxed()`                                | `java.util.stream.DoublePipeline`                          |
|  -10.2% | -41.8µs | 15.1% → 23.0% |         0.4ms |   6 → 5 | `deleteRecursively(Path, boolean)`       | `org.renaissance.core.DirUtils`                            |
|  -10.2% | -41.8µs | 15.1% → 23.0% |         0.4ms |   6 → 5 | `deleteRecursively(Path)`                | `org.renaissance.core.DirUtils`                            |
|  -10.2% | -41.8µs | 15.1% → 23.0% |         0.4ms |   6 → 5 | `lambda$createScratchDirectory$1(Path)`  | `org.renaissance.core.DirUtils`                            |
|  -10.2% | -41.8µs | 15.1% → 23.0% |         0.4ms |   6 → 5 | `run()`                                  | `org.renaissance.core.DirUtils$$Lambda.0x000000c801003a68` |
| removed |  -6.0µs |   0.2% → 0.0% |   6.0µs → 0ms |   1 → 0 | `visitFile(Path, BasicFileAttributes)`   | `org.renaissance.core.DirUtils$1`                          |
| removed |  -6.0µs |   0.2% → 0.0% |   6.0µs → 0ms |   1 → 0 | `visitFile(Object, BasicFileAttributes)` | `org.renaissance.core.DirUtils$1`                          |

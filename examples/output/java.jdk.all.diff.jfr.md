# Profile diff

1,637 samples → 1,634 samples (-3 samples, -0.2%).

| Category         | Change | Delta |             % |       Samples |
| ---------------- | -----: | ----: | ------------: | ------------: |
| Ours             |  +0.5% |    +7 | 90.7% → 91.2% | 1,484 → 1,491 |
| Standard library |  -6.5% |   -10 |   9.3% → 8.8% |     153 → 143 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                            | Location                                                                              |
| ------: | ----: | ------------: | --------: | ----------------------------------- | ------------------------------------------------------------------------------------- |
|   +3.8% |   +27 | 43.6% → 45.3% | 714 → 741 | `accumulate(Double[], double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| +900.0% |    +9 |   0.1% → 0.6% |    1 → 10 | `apply(Object)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011dec00` |
|   +0.8% |    +3 | 23.3% → 23.5% | 381 → 384 | `distance(Double[], Double[])`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   +2.2% |    +2 |   5.7% → 5.8% |   93 → 95 | `collectClusters(int[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`                                                                   |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `createSubtask(int, int)`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                            | Location                                                   |
| ------: | ----: | ------------: | --------: | ----------------------------------- | ---------------------------------------------------------- |
|  -20.5% |   -16 |   4.8% → 3.8% |   78 → 62 | `vectorSum()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -7.4% |   -14 | 11.5% → 10.6% | 188 → 174 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -17.5% |   -11 |   3.8% → 3.2% |   63 → 52 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`                                        |
|  -75.0% |    -3 |   0.2% → 0.1% |     4 → 1 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `average(List)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `merge(Map, Map)`                   | `org.renaissance.jdk.concurrent.JavaKMeans`                |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % |   Samples | Function                                                                                                               | Location                                                                              |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|   +3.8% |   +27 | 43.6% → 45.3% | 714 → 741 | `accumulate(Double[], double[])`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   +3.5% |   +11 | 19.3% → 20.0% | 316 → 327 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|   +3.5% |   +11 | 19.3% → 20.0% | 316 → 327 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|   +3.6% |   +11 | 18.8% → 19.5% | 308 → 319 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|   +1.3% |   +10 | 48.4% → 49.1% | 793 → 803 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   +1.3% |   +10 | 48.4% → 49.1% | 793 → 803 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| +900.0% |    +9 |   0.1% → 0.6% |    1 → 10 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011dec00` |
|  +62.5% |    +5 |   0.5% → 0.8% |    8 → 13 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                                       |
|  +62.5% |    +5 |   0.5% → 0.8% |    8 → 13 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                                       |
|  +62.5% |    +5 |   0.5% → 0.8% |    8 → 13 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                                       |
|  +71.4% |    +5 |   0.4% → 0.7% |    7 → 12 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                                            |
|  +71.4% |    +5 |   0.4% → 0.7% |    7 → 12 | `invoke(Object, Object[])`                                                                                             | `java.lang.reflect.Method`                                                            |
|  +57.1% |    +4 |   0.4% → 0.7% |    7 → 11 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                                           |
|   +1.2% |    +4 | 20.6% → 20.9% | 337 → 341 | `invoke()`                                                                                                             | `java.util.concurrent.ForkJoinTask`                                                   |
|  +60.0% |    +3 |   0.3% → 0.5% |     5 → 8 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                           |
|  +60.0% |    +3 |   0.3% → 0.5% |     5 → 8 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000070011715d8`                |
|  +60.0% |    +3 |   0.3% → 0.5% |     5 → 8 | `foreach(Function1)`                                                                                                   | `scala.collection.immutable.List`                                                     |
|  +60.0% |    +3 |   0.3% → 0.5% |     5 → 8 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                                           |
|  +75.0% |    +3 |   0.2% → 0.4% |     4 → 7 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                                             |
|   +0.8% |    +3 | 23.3% → 23.5% | 381 → 384 | `distance(Double[], Double[])`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % |       Samples | Function                                                              | Location                                                               |
| ------: | ----: | ------------: | ------------: | --------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|   -3.0% |   -24 | 48.2% → 46.8% |     789 → 765 | `computeDirectly()`                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -6.5% |   -13 | 12.2% → 11.4% |     199 → 186 | `collectClusters(int[])`                                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -31.0% |   -13 |   2.6% → 1.8% |       42 → 29 | `add(Object)`                                                         | `java.util.ArrayList`                                                  |
|   -1.9% |   -11 | 34.8% → 34.1% |     569 → 558 | `findNearestCentroid()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -0.4% |    -7 | 99.1% → 98.9% | 1,623 → 1,616 | `compute()`                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|   -0.3% |    -4 | 97.3% → 97.2% | 1,592 → 1,588 | `join()`                                                              | `java.util.concurrent.ForkJoinTask`                                    |
|  -12.0% |    -3 |   1.5% → 1.3% |       25 → 22 | `call()`                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011d79d8` |
|   -3.1% |    -2 |   3.9% → 3.8% |       64 → 62 | `computeIfAbsent(Object, Function)`                                   | `java.util.HashMap`                                                    |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `fork()`                                                              | `java.util.concurrent.ForkJoinTask`                                    |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `getRuntimeMXBean()`                                                  | `java.lang.management.ManagementFactory`                               |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `jvmSpecVersion()`                                                    | `org.renaissance.core.BenchmarkSuite`                                  |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `isBenchmarkCompatible(BenchmarkDescriptor)`                          | `org.renaissance.core.BenchmarkSuite`                                  |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `excludeIncompatible$$anonfun$1(BenchmarkSuite, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `apply(Object)`                                                       | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000c00116d920` |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `filter(Function1)`                                                   | `scala.collection.immutable.List`                                      |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `toArray(IntFunction)`                                                | `java.util.stream.ReferencePipeline`                                   |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `get(int)`                                                            | `java.util.ArrayList`                                                  |
|  -10.0% |    -1 |          0.6% |        10 → 9 | `lambda$merge$7(Map, Object, List)`                                   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -10.0% |    -1 |          0.6% |        10 → 9 | `accept(Object, Object)`                                              | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dee50` |
|  -10.0% |    -1 |          0.6% |        10 → 9 | `forEach(BiConsumer)`                                                 | `java.util.HashMap`                                                    |

# Allocated heap profile diff

Allocated 37.3 GiB → 37.6 GiB (+346.337 MiB, +0.9%) over 1,980 samples → 2,040 samples (19.3 MiB → 18.9 MiB per sample).

| Category         | Change |        Delta |             % |                Size |       Samples |
| ---------------- | -----: | -----------: | ------------: | ------------------: | ------------: |
| Standard library |  +3.6% |   +1.246 GiB | 93.7% → 96.2% | 34.9 GiB → 36.2 GiB | 1,865 → 1,915 |
| Ours             | -38.9% | -930.155 MiB |   6.3% → 3.8% | 2.34 GiB → 1.43 GiB |     113 → 123 |
| Unknown          | +15.2% |       +272 B |         <0.1% | 1.74 KiB → 2.01 KiB |             2 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|   Change |        Delta |            % |                Size | Samples | Function                     | Location                                                   |
| -------: | -----------: | -----------: | ------------------: | ------: | ---------------------------- | ---------------------------------------------------------- |
| +5303.9% |  +75.198 MiB | <0.1% → 0.2% | 1.42 MiB → 76.6 MiB |   1 → 7 | `merge(Map, Map)`            | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  +382.3% |  +52.159 MiB | <0.1% → 0.2% | 13.6 MiB → 65.8 MiB |  11 → 8 | `collectClusters(int[])`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +2330.1% |  +10.473 MiB |        <0.1% |  460 KiB → 10.9 MiB |   1 → 5 | `vectorSum()`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   +15.7% |   +8.962 MiB |         0.2% | 57.3 MiB → 66.2 MiB |   2 → 1 | `computeClusterAverages()`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|      new | +201.312 KiB | 0.0% → <0.1% |       0 B → 201 KiB |   0 → 1 | `add(double[], double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|      ~0% |       +200 B |        <0.1% |            3.96 MiB |       8 | `lambda$generateData$4(int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |        Delta |            % |               Size | Samples | Function                             | Location                                                   |
| ------: | -----------: | -----------: | -----------------: | ------: | ------------------------------------ | ---------------------------------------------------------- |
|  -40.8% | -583.606 MiB |  3.8% → 2.2% |  1.4 GiB → 847 MiB | 61 → 70 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -72.5% | -222.115 MiB |  0.8% → 0.2% | 306 MiB → 84.1 MiB |  11 → 4 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -54.8% | -172.191 MiB |  0.8% → 0.4% |  314 MiB → 142 MiB |   9 → 7 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -36.4% |  -61.048 MiB |  0.4% → 0.3% |  168 MiB → 107 MiB |   3 → 5 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -38.2% |  -37.151 MiB |  0.3% → 0.2% |  97.2 MiB → 60 MiB |   5 → 7 | `lambda$merge$6(List, List)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |   -1.032 MiB | <0.1% → 0.0% |     1.03 MiB → 0 B |   1 → 0 | `collectGarbage(String)`             | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`   |
|  -46.0% | -988.343 KiB |        <0.1% | 2.1 MiB → 1.13 MiB |   6 → 3 | `range(int, int)`                    | `java.util.stream.IntStream`                               |
|   -0.1% |  -14.359 KiB |        <0.1% |           10.6 MiB | 22 → 24 | `valueOf(double)`                    | `java.lang.Double`                                         |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|   Change |        Delta |             % |                Size |       Samples | Function                                                    | Location                                                               |
| -------: | -----------: | ------------: | ------------------: | ------------: | ----------------------------------------------------------- | ---------------------------------------------------------------------- |
|   +65.6% |   +2.276 GiB |  9.3% → 15.3% | 3.47 GiB → 5.75 GiB |     225 → 237 | `collectClusters(int[])`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   +69.2% |   +2.205 GiB |  8.6% → 14.3% | 3.19 GiB → 5.39 GiB |     203 → 218 | `add(Object)`                                               | `java.util.ArrayList`                                                  |
|    +7.5% |   +1.776 GiB | 63.2% → 67.3% | 23.5 GiB → 25.3 GiB | 1,216 → 1,284 | `join()`                                                    | `java.util.concurrent.ForkJoinTask`                                    |
|   +35.1% |   +1.706 GiB | 13.1% → 17.5% | 4.87 GiB → 6.57 GiB |     286 → 307 | `computeDirectly()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|    +0.9% | +347.381 MiB |         99.4% |   37 GiB → 37.4 GiB | 1,853 → 1,915 | `compute()`                                                 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  +298.7% | +155.085 MiB |   0.1% → 0.5% |  51.9 MiB → 207 MiB |     119 → 118 | `invoke(Object, Object[])`                                  | `java.lang.reflect.Method`                                             |
|  +296.4% | +155.085 MiB |   0.1% → 0.5% |  52.3 MiB → 207 MiB |     120 → 119 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`                                        |
|  +293.4% | +155.085 MiB |   0.1% → 0.5% |  52.9 MiB → 208 MiB |     122 → 121 | `launchHarnessClass(String, String[])`                      | `org.renaissance.core.Launcher`                                        |
|  +293.4% | +155.085 MiB |   0.1% → 0.5% |  52.9 MiB → 208 MiB |     122 → 121 | `main(String[])`                                            | `org.renaissance.core.Launcher`                                        |
|  +650.7% |  +25.786 MiB |  <0.1% → 0.1% | 3.96 MiB → 29.7 MiB |        8 → 69 | `apply(int)`                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011798d8` |
|    +7.3% |  +19.892 MiB |   0.7% → 0.8% |   274 MiB → 294 MiB |       12 → 11 | `computeIfAbsent(Object, Function)`                         | `java.util.HashMap`                                                    |
|   +33.5% |    +19.8 MiB |          0.2% |   59 MiB → 78.8 MiB |         4 → 7 | `computeClusterAverages()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   +33.5% |    +19.8 MiB |          0.2% |   59 MiB → 78.8 MiB |         4 → 7 | `computeDirectly()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  +607.8% |  +10.838 MiB |         <0.1% | 1.78 MiB → 12.6 MiB |         2 → 6 | `average(List)`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| +2330.1% |  +10.473 MiB |         <0.1% |  460 KiB → 10.9 MiB |         1 → 5 | `vectorSum()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| +2330.1% |  +10.473 MiB |         <0.1% |  460 KiB → 10.9 MiB |         1 → 5 | `computeDirectly()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   +15.1% |   +2.617 MiB |  <0.1% → 0.1% |   17.4 MiB → 20 MiB |       38 → 46 | `toArray(IntFunction)`                                      | `java.util.stream.ReferencePipeline`                                   |
|   +57.1% |   +2.075 MiB |         <0.1% | 3.63 MiB → 5.71 MiB |         5 → 4 | `<init>(Map)`                                               | `java.util.HashMap`                                                    |
|      new |   +1.971 MiB |  0.0% → <0.1% |      0 B → 1.97 MiB |         0 → 5 | `linkToTargetMethod(int, int, Object, Object)`              | `java.lang.invoke.LambdaForm$MH.0x0000007001180c00`                    |
|    +1.9% | +580.648 KiB |          0.1% | 29.2 MiB → 29.7 MiB |       68 → 69 | `lambda$generateData$5(int, int, Random[], int)`            | `org.renaissance.jdk.concurrent.JavaKMeans`                            |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

| Change |        Delta |             % |                Size |       Samples | Function                             | Location                                                                              |
| -----: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------ | ------------------------------------------------------------------------------------- |
|  -3.4% |   -1.077 GiB | 84.5% → 80.9% | 31.5 GiB → 30.4 GiB | 1,538 → 1,579 | `lambda$merge$6(List, List)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  -3.4% |   -1.077 GiB | 84.5% → 80.9% | 31.5 GiB → 30.4 GiB | 1,538 → 1,579 | `apply(Object, Object)`              | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011df098`                |
|  -3.4% |   -1.077 GiB | 84.5% → 80.9% | 31.5 GiB → 30.4 GiB | 1,538 → 1,579 | `merge(Object, Object, BiFunction)`  | `java.util.HashMap`                                                                   |
|  -3.4% |   -1.077 GiB | 84.5% → 80.9% | 31.5 GiB → 30.4 GiB | 1,538 → 1,579 | `lambda$merge$7(Map, Object, List)`  | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  -3.4% |   -1.077 GiB | 84.5% → 80.9% | 31.5 GiB → 30.4 GiB | 1,538 → 1,579 | `accept(Object, Object)`             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dee50`                |
|  -3.4% |   -1.077 GiB | 84.5% → 80.9% | 31.5 GiB → 30.4 GiB | 1,538 → 1,579 | `forEach(BiConsumer)`                | `java.util.HashMap`                                                                   |
|  -3.2% |   -1.001 GiB | 84.6% → 81.1% | 31.5 GiB → 30.5 GiB | 1,544 → 1,590 | `merge(Map, Map)`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  -3.2% |   -1.001 GiB | 84.6% → 81.1% | 31.5 GiB → 30.5 GiB | 1,544 → 1,590 | `combineResults(Map, Map)`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -3.2% |   -1.001 GiB | 84.6% → 81.1% | 31.5 GiB → 30.5 GiB | 1,544 → 1,590 | `combineResults(Object, Object)`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| -40.8% | -583.606 MiB |   3.8% → 2.2% |   1.4 GiB → 847 MiB |       61 → 70 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -2.3% |  -561.13 MiB | 64.6% → 62.5% | 24.1 GiB → 23.5 GiB | 1,140 → 1,172 | `addAll(Collection)`                 | `java.util.ArrayList`                                                                 |
|  -6.8% | -526.158 MiB | 20.4% → 18.9% | 7.61 GiB → 7.09 GiB |     221 → 242 | `invoke()`                           | `java.util.concurrent.ForkJoinTask`                                                   |
|  -6.7% | -504.719 MiB | 19.7% → 18.2% | 7.35 GiB → 6.86 GiB |     393 → 400 | `<init>(Collection)`                 | `java.util.ArrayList`                                                                 |
|  -4.2% |   -300.9 MiB | 18.9% → 18.0% | 7.06 GiB → 6.76 GiB |     209 → 228 | `lambda$run$0(int, List, int)`       | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  -4.2% |   -300.9 MiB | 18.9% → 18.0% | 7.06 GiB → 6.76 GiB |     209 → 228 | `call()`                             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011d79d8`                |
| -72.5% | -222.115 MiB |   0.8% → 0.2% |  306 MiB → 84.1 MiB |        11 → 4 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| -54.8% | -172.191 MiB |   0.8% → 0.4% |   314 MiB → 142 MiB |         9 → 7 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| -36.4% |  -61.048 MiB |   0.4% → 0.3% |   168 MiB → 107 MiB |         3 → 5 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| -36.4% |  -61.048 MiB |   0.4% → 0.3% |   168 MiB → 107 MiB |         3 → 5 | `apply(Object)`                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011dec00` |
| -63.6% |  -18.564 MiB |  0.1% → <0.1% | 29.2 MiB → 10.6 MiB |       68 → 24 | `apply(int)`                         | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001179b10`                |

# Retained heap profile diff

Retained 2.25 MiB → 2.06 MiB (-194.546 KiB, -8.4%) over 10 samples (231 KiB → 211 KiB per sample).

| Category         |  Change |        Delta |      % |                Size | Samples |
| ---------------- | ------: | -----------: | -----: | ------------------: | ------: |
| Standard library |   -8.4% | -194.585 KiB | 100.0% | 2.25 MiB → 2.06 MiB |   9 → 8 |
| Ours             | +100.0% |        +40 B |  <0.1% |         40 B → 80 B |   1 → 2 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

|  Change | Delta |     % |        Size | Samples | Function                     | Location                                    |
| ------: | ----: | ----: | ----------: | ------: | ---------------------------- | ------------------------------------------- |
| +100.0% | +40 B | <0.1% | 40 B → 80 B |   1 → 2 | `lambda$generateData$4(int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

| Change | Delta |     % |        Size | Samples | Function          | Location           |
| -----: | ----: | ----: | ----------: | ------: | ----------------- | ------------------ |
| -25.0% | -24 B | <0.1% | 96 B → 72 B |   4 → 3 | `valueOf(double)` | `java.lang.Double` |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

|  Change |  Delta |              % |          Size | Samples | Function                                                                                                               | Location                                                               |
| ------: | -----: | -------------: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|     new | +120 B |   0.0% → <0.1% |   0 B → 120 B |   0 → 1 | `apply(Seq)`                                                                                                           | `scala.collection.immutable.Map$`                                      |
|     ~0% |  +96 B | 91.6% → 100.0% |      2.06 MiB |  9 → 10 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|     ~0% |  +96 B | 91.6% → 100.0% |      2.06 MiB |  9 → 10 | `invoke(Object, Object[])`                                                                                             | `java.lang.reflect.Method`                                             |
|     ~0% |  +96 B | 91.6% → 100.0% |      2.06 MiB |  9 → 10 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
|     ~0% |  +96 B | 91.6% → 100.0% |      2.06 MiB |  9 → 10 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
|     ~0% |  +96 B | 91.6% → 100.0% |      2.06 MiB |  9 → 10 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
|     ~0% |  +96 B | 91.6% → 100.0% |      2.06 MiB |   8 → 9 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +90.9% |  +80 B |          <0.1% |  88 B → 168 B |   2 → 3 | `loadClass(String)`                                                                                                    | `java.lang.ClassLoader`                                                |
| +100.0% |  +40 B |          <0.1% |   40 B → 80 B |   1 → 2 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001179d48` |
| +100.0% |  +40 B |          <0.1% |   40 B → 80 B |   1 → 2 | `lambda$generateData$4(int)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +11.8% |  +16 B |          <0.1% | 136 B → 152 B |       5 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011798d8` |
|  +11.8% |  +16 B |          <0.1% | 136 B → 152 B |       5 | `toArray(IntFunction)`                                                                                                 | `java.util.stream.ReferencePipeline`                                   |
|  +11.8% |  +16 B |          <0.1% | 136 B → 152 B |       5 | `lambda$generateData$5(int, int, Random[], int)`                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|     ~0% |  +16 B | 91.5% → 100.0% |      2.06 MiB |       6 | `collect(Collector)`                                                                                                   | `java.util.stream.ReferencePipeline`                                   |
|     ~0% |  +16 B | 91.5% → 100.0% |      2.06 MiB |       6 | `generateData(int, int, int)`                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|     ~0% |  +16 B | 91.5% → 100.0% |      2.06 MiB |       6 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|     ~0% |  +16 B | 91.5% → 100.0% |      2.06 MiB |       6 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|     ~0% |  +16 B | 91.5% → 100.0% |      2.06 MiB |       6 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|     ~0% |  +16 B | 91.5% → 100.0% |      2.06 MiB |       6 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000070011715d8` |
|     ~0% |  +16 B | 91.5% → 100.0% |      2.06 MiB |       6 | `foreach(Function1)`                                                                                                   | `scala.collection.immutable.List`                                      |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

|  Change |       Delta |           % |          Size | Samples | Function                                         | Location                                                               |
| ------: | ----------: | ----------: | ------------: | ------: | ------------------------------------------------ | ---------------------------------------------------------------------- |
| removed | -194.64 KiB | 8.4% → 0.0% | 195 KiB → 0 B |   1 → 0 | `addAll(Collection)`                             | `java.util.ArrayList`                                                  |
| removed | -194.64 KiB | 8.4% → 0.0% | 195 KiB → 0 B |   1 → 0 | `lambda$merge$6(List, List)`                     | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed | -194.64 KiB | 8.4% → 0.0% | 195 KiB → 0 B |   1 → 0 | `apply(Object, Object)`                          | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011df098` |
| removed | -194.64 KiB | 8.4% → 0.0% | 195 KiB → 0 B |   1 → 0 | `merge(Object, Object, BiFunction)`              | `java.util.HashMap`                                                    |
| removed | -194.64 KiB | 8.4% → 0.0% | 195 KiB → 0 B |   1 → 0 | `lambda$merge$7(Map, Object, List)`              | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed | -194.64 KiB | 8.4% → 0.0% | 195 KiB → 0 B |   1 → 0 | `accept(Object, Object)`                         | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011dee50` |
| removed | -194.64 KiB | 8.4% → 0.0% | 195 KiB → 0 B |   1 → 0 | `forEach(BiConsumer)`                            | `java.util.HashMap`                                                    |
| removed | -194.64 KiB | 8.4% → 0.0% | 195 KiB → 0 B |   1 → 0 | `merge(Map, Map)`                                | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed | -194.64 KiB | 8.4% → 0.0% | 195 KiB → 0 B |   1 → 0 | `combineResults(Map, Map)`                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed | -194.64 KiB | 8.4% → 0.0% | 195 KiB → 0 B |   1 → 0 | `combineResults(Object, Object)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed | -194.64 KiB | 8.4% → 0.0% | 195 KiB → 0 B |   1 → 0 | `compute()`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  -71.4% |       -40 B |       <0.1% |   56 B → 16 B |       1 | `<clinit>()`                                     | `scala.Predef$`                                                        |
|  -25.0% |       -24 B |       <0.1% |   96 B → 72 B |   4 → 3 | `valueOf(double)`                                | `java.lang.Double`                                                     |
|  -25.0% |       -24 B |       <0.1% |   96 B → 72 B |   4 → 3 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -25.0% |       -24 B |       <0.1% |   96 B → 72 B |   4 → 3 | `apply(int)`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001179b10` |

# Lock contention profile diff

Blocked 6.95s → 7.95s (+998.65ms, +14.4%) over 56 samples → 88 samples (124.2ms → 90.4ms per sample).

| Category         | Change |     Delta |      % |          Time | Samples |
| ---------------- | -----: | --------: | -----: | ------------: | ------: |
| Standard library | +14.4% | +998.65ms | 100.0% | 6.95s → 7.95s | 56 → 88 |

## Hottest functions

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

| Change |     Delta |             % |          Time | Samples | Function                                                                                                               | Location                                                               |
| -----: | --------: | ------------: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|  +3.2% | +191.33ms | 87.2% → 78.7% | 6.06s → 6.25s |      16 | `get()`                                                                                                                | `java.util.concurrent.ForkJoinTask`                                    |
|  +3.2% | +191.33ms | 87.2% → 78.7% | 6.06s → 6.25s |      16 | `run(int, List, int)`                                                                                                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +3.2% | +191.33ms | 87.2% → 78.7% | 6.06s → 6.25s |      16 | `$anonfun$1(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  +3.2% | +191.33ms | 87.2% → 78.7% | 6.06s → 6.25s |      16 | `$anonfun$adapted$1(Object)`                                                                                           | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  +3.2% | +191.33ms | 87.2% → 78.7% | 6.06s → 6.25s |      16 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011d4e58`   |
|  +3.2% | +191.33ms | 87.2% → 78.7% | 6.06s → 6.25s |      16 | `map(Function1)`                                                                                                       | `scala.collection.immutable.Range`                                     |
|  +3.2% | +191.33ms | 87.2% → 78.7% | 6.06s → 6.25s |      16 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  +3.2% | +191.33ms | 87.2% → 78.7% | 6.06s → 6.25s |      16 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |
|  +3.2% | +191.33ms | 87.2% → 78.7% | 6.06s → 6.25s |      16 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|  +3.2% | +191.33ms | 87.2% → 78.7% | 6.06s → 6.25s |      16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +3.2% | +191.33ms | 87.2% → 78.7% | 6.06s → 6.25s |      16 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000070011715d8` |
|  +3.2% | +191.33ms | 87.2% → 78.7% | 6.06s → 6.25s |      16 | `foreach(Function1)`                                                                                                   | `scala.collection.immutable.List`                                      |
|  +3.2% | +191.33ms | 87.2% → 78.7% | 6.06s → 6.25s |      16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +3.2% | +191.33ms | 87.2% → 78.7% | 6.06s → 6.25s |      16 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +3.2% | +191.33ms | 87.2% → 78.7% | 6.06s → 6.25s |      16 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|  +3.2% | +191.33ms | 87.2% → 78.7% | 6.06s → 6.25s |      16 | `invoke(Object, Object[])`                                                                                             | `java.lang.reflect.Method`                                             |
|  +3.2% | +191.33ms | 87.2% → 78.7% | 6.06s → 6.25s |      16 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
|  +3.2% | +191.33ms | 87.2% → 78.7% | 6.06s → 6.25s |      16 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
|  +3.2% | +191.33ms | 87.2% → 78.7% | 6.06s → 6.25s |      16 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
|    new | +151.23ms |   0.0% → 1.9% | 0ms → 151.2ms |  0 → 10 | `join()`                                                                                                               | `java.util.concurrent.ForkJoinTask`                                    |

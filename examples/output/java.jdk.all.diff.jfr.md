# Sampling profile diff

1,637 samples → 1,634 samples (-3 samples, -0.2%).

| Category | Change | Delta |             % |       Samples |
| -------- | -----: | ----: | ------------: | ------------: |
| ours     |  +0.5% |    +7 | 90.7% → 91.2% | 1,484 → 1,491 |
| stdlib   |  -6.5% |   -10 |   9.3% → 8.8% |     153 → 143 |

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

Allocated 40 GB → 40.4 GB (+363.161 MB, +0.9%) over 1,980 samples → 2,040 samples (20.2 MB → 19.8 MB per sample).

| Category | Change |       Delta |             % |              Size |       Samples |
| -------- | -----: | ----------: | ------------: | ----------------: | ------------: |
| stdlib   |  +3.6% |   +1.338 GB | 93.7% → 96.2% | 37.5 GB → 38.8 GB | 1,865 → 1,915 |
| ours     | -38.9% | -975.339 MB |   6.3% → 3.8% | 2.51 GB → 1.54 GB |     113 → 123 |
| native   | +15.2% |      +272 B |         <0.1% | 1.78 kB → 2.06 kB |             2 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|   Change |       Delta |            % |              Size | Samples | Function                     | Location                                                   |
| -------: | ----------: | -----------: | ----------------: | ------: | ---------------------------- | ---------------------------------------------------------- |
| +5303.9% |  +78.851 MB | <0.1% → 0.2% | 1.49 MB → 80.3 MB |   1 → 7 | `merge(Map, Map)`            | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  +382.3% |  +54.692 MB | <0.1% → 0.2% |   14.3 MB → 69 MB |  11 → 8 | `collectClusters(int[])`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +2330.1% |  +10.982 MB |        <0.1% |  471 kB → 11.5 MB |   1 → 5 | `vectorSum()`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   +15.7% |   +9.397 MB |         0.2% |   60 MB → 69.4 MB |   2 → 1 | `computeClusterAverages()`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|      new | +206.144 kB | 0.0% → <0.1% |      0 B → 206 kB |   0 → 1 | `add(double[], double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|      ~0% |      +200 B |        <0.1% |           4.16 MB |       8 | `lambda$generateData$4(int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |       Delta |            % |             Size | Samples | Function                             | Location                                                   |
| ------: | ----------: | -----------: | ---------------: | ------: | ------------------------------------ | ---------------------------------------------------------- |
|  -40.8% | -611.955 MB |  3.8% → 2.2% |  1.5 GB → 889 MB | 61 → 70 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -72.5% | -232.904 MB |  0.8% → 0.2% | 321 MB → 88.2 MB |  11 → 4 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -54.8% | -180.555 MB |  0.8% → 0.4% |  329 MB → 149 MB |   9 → 7 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -36.4% |  -64.014 MB |  0.4% → 0.3% |  176 MB → 112 MB |   3 → 5 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -38.2% |  -38.956 MB |  0.3% → 0.2% | 102 MB → 62.9 MB |   5 → 7 | `lambda$merge$6(List, List)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |   -1.083 MB | <0.1% → 0.0% |    1.08 MB → 0 B |   1 → 0 | `collectGarbage(String)`             | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`   |
|  -46.0% |   -1.012 MB |        <0.1% | 2.2 MB → 1.19 MB |   6 → 3 | `range(int, int)`                    | `java.util.stream.IntStream`                               |
|   -0.1% |  -14.704 kB |        <0.1% |          11.1 MB | 22 → 24 | `valueOf(double)`                    | `java.lang.Double`                                         |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|   Change |       Delta |             % |              Size |       Samples | Function                                                    | Location                                                               |
| -------: | ----------: | ------------: | ----------------: | ------------: | ----------------------------------------------------------- | ---------------------------------------------------------------------- |
|   +65.6% |   +2.444 GB |  9.3% → 15.3% | 3.72 GB → 6.17 GB |     225 → 237 | `collectClusters(int[])`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   +69.2% |   +2.368 GB |  8.6% → 14.3% | 3.42 GB → 5.79 GB |     203 → 218 | `add(Object)`                                               | `java.util.ArrayList`                                                  |
|    +7.5% |   +1.907 GB | 63.2% → 67.3% | 25.3 GB → 27.2 GB | 1,216 → 1,284 | `join()`                                                    | `java.util.concurrent.ForkJoinTask`                                    |
|   +35.1% |   +1.832 GB | 13.1% → 17.5% | 5.22 GB → 7.06 GB |     286 → 307 | `computeDirectly()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|    +0.9% | +364.256 MB |         99.4% | 39.8 GB → 40.1 GB | 1,853 → 1,915 | `compute()`                                                 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  +298.7% | +162.619 MB |   0.1% → 0.5% |  54.5 MB → 217 MB |     119 → 118 | `invoke(Object, Object[])`                                  | `java.lang.reflect.Method`                                             |
|  +296.4% | +162.619 MB |   0.1% → 0.5% |  54.9 MB → 217 MB |     120 → 119 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`                                        |
|  +293.4% | +162.619 MB |   0.1% → 0.5% |  55.4 MB → 218 MB |     122 → 121 | `launchHarnessClass(String, String[])`                      | `org.renaissance.core.Launcher`                                        |
|  +293.4% | +162.619 MB |   0.1% → 0.5% |  55.4 MB → 218 MB |     122 → 121 | `main(String[])`                                            | `org.renaissance.core.Launcher`                                        |
|  +650.7% |  +27.038 MB |  <0.1% → 0.1% | 4.16 MB → 31.2 MB |        8 → 69 | `apply(int)`                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011798d8` |
|    +7.3% |  +20.858 MB |   0.7% → 0.8% |   287 MB → 308 MB |       12 → 11 | `computeIfAbsent(Object, Function)`                         | `java.util.HashMap`                                                    |
|   +33.5% |  +20.762 MB |          0.2% | 61.9 MB → 82.7 MB |         4 → 7 | `computeClusterAverages()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   +33.5% |  +20.762 MB |          0.2% | 61.9 MB → 82.7 MB |         4 → 7 | `computeDirectly()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  +607.8% |  +11.364 MB |         <0.1% | 1.87 MB → 13.2 MB |         2 → 6 | `average(List)`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| +2330.1% |  +10.982 MB |         <0.1% |  471 kB → 11.5 MB |         1 → 5 | `vectorSum()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| +2330.1% |  +10.982 MB |         <0.1% |  471 kB → 11.5 MB |         1 → 5 | `computeDirectly()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   +15.1% |   +2.744 MB |  <0.1% → 0.1% | 18.2 MB → 20.9 MB |       38 → 46 | `toArray(IntFunction)`                                      | `java.util.stream.ReferencePipeline`                                   |
|   +57.1% |   +2.176 MB |         <0.1% | 3.81 MB → 5.99 MB |         5 → 4 | `<init>(Map)`                                               | `java.util.HashMap`                                                    |
|      new |   +2.067 MB |  0.0% → <0.1% |     0 B → 2.07 MB |         0 → 5 | `linkToTargetMethod(int, int, Object, Object)`              | `java.lang.invoke.LambdaForm$MH.0x0000007001180c00`                    |
|    +1.9% | +594.584 kB |          0.1% | 30.6 MB → 31.2 MB |       68 → 69 | `lambda$generateData$5(int, int, Random[], int)`            | `org.renaissance.jdk.concurrent.JavaKMeans`                            |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

| Change |       Delta |             % |              Size |       Samples | Function                             | Location                                                                              |
| -----: | ----------: | ------------: | ----------------: | ------------: | ------------------------------------ | ------------------------------------------------------------------------------------- |
|  -3.4% |   -1.156 GB | 84.5% → 80.9% | 33.8 GB → 32.7 GB | 1,538 → 1,579 | `lambda$merge$6(List, List)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  -3.4% |   -1.156 GB | 84.5% → 80.9% | 33.8 GB → 32.7 GB | 1,538 → 1,579 | `apply(Object, Object)`              | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011df098`                |
|  -3.4% |   -1.156 GB | 84.5% → 80.9% | 33.8 GB → 32.7 GB | 1,538 → 1,579 | `merge(Object, Object, BiFunction)`  | `java.util.HashMap`                                                                   |
|  -3.4% |   -1.156 GB | 84.5% → 80.9% | 33.8 GB → 32.7 GB | 1,538 → 1,579 | `lambda$merge$7(Map, Object, List)`  | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  -3.4% |   -1.156 GB | 84.5% → 80.9% | 33.8 GB → 32.7 GB | 1,538 → 1,579 | `accept(Object, Object)`             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dee50`                |
|  -3.4% |   -1.156 GB | 84.5% → 80.9% | 33.8 GB → 32.7 GB | 1,538 → 1,579 | `forEach(BiConsumer)`                | `java.util.HashMap`                                                                   |
|  -3.2% |   -1.075 GB | 84.6% → 81.1% | 33.8 GB → 32.8 GB | 1,544 → 1,590 | `merge(Map, Map)`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  -3.2% |   -1.075 GB | 84.6% → 81.1% | 33.8 GB → 32.8 GB | 1,544 → 1,590 | `combineResults(Map, Map)`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -3.2% |   -1.075 GB | 84.6% → 81.1% | 33.8 GB → 32.8 GB | 1,544 → 1,590 | `combineResults(Object, Object)`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| -40.8% | -611.955 MB |   3.8% → 2.2% |   1.5 GB → 889 MB |       61 → 70 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -2.3% | -588.388 MB | 64.6% → 62.5% | 25.8 GB → 25.2 GB | 1,140 → 1,172 | `addAll(Collection)`                 | `java.util.ArrayList`                                                                 |
|  -6.8% | -551.717 MB | 20.4% → 18.9% | 8.17 GB → 7.62 GB |     221 → 242 | `invoke()`                           | `java.util.concurrent.ForkJoinTask`                                                   |
|  -6.7% | -529.237 MB | 19.7% → 18.2% |  7.9 GB → 7.37 GB |     393 → 400 | `<init>(Collection)`                 | `java.util.ArrayList`                                                                 |
|  -4.2% | -315.516 MB | 18.9% → 18.0% | 7.58 GB → 7.26 GB |     209 → 228 | `lambda$run$0(int, List, int)`       | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  -4.2% | -315.516 MB | 18.9% → 18.0% | 7.58 GB → 7.26 GB |     209 → 228 | `call()`                             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011d79d8`                |
| -72.5% | -232.904 MB |   0.8% → 0.2% |  321 MB → 88.2 MB |        11 → 4 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| -54.8% | -180.555 MB |   0.8% → 0.4% |   329 MB → 149 MB |         9 → 7 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| -36.4% |  -64.014 MB |   0.4% → 0.3% |   176 MB → 112 MB |         3 → 5 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| -36.4% |  -64.014 MB |   0.4% → 0.3% |   176 MB → 112 MB |         3 → 5 | `apply(Object)`                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011dec00` |
| -63.6% |  -19.466 MB |  0.1% → <0.1% | 30.6 MB → 11.1 MB |       68 → 24 | `apply(int)`                         | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001179b10`                |

# Retained heap profile diff

Retained 2.36 MB → 2.16 MB (-199.216 kB, -8.4%) over 10 samples (236 kB → 216 kB per sample).

| Category |  Change |       Delta |      % |              Size | Samples |
| -------- | ------: | ----------: | -----: | ----------------: | ------: |
| stdlib   |   -8.4% | -199.256 kB | 100.0% | 2.36 MB → 2.16 MB |   9 → 8 |
| ours     | +100.0% |       +40 B |  <0.1% |       40 B → 80 B |   1 → 2 |

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
|     ~0% |  +96 B | 91.6% → 100.0% |       2.16 MB |  9 → 10 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|     ~0% |  +96 B | 91.6% → 100.0% |       2.16 MB |  9 → 10 | `invoke(Object, Object[])`                                                                                             | `java.lang.reflect.Method`                                             |
|     ~0% |  +96 B | 91.6% → 100.0% |       2.16 MB |  9 → 10 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
|     ~0% |  +96 B | 91.6% → 100.0% |       2.16 MB |  9 → 10 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
|     ~0% |  +96 B | 91.6% → 100.0% |       2.16 MB |  9 → 10 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
|     ~0% |  +96 B | 91.6% → 100.0% |       2.16 MB |   8 → 9 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +90.9% |  +80 B |          <0.1% |  88 B → 168 B |   2 → 3 | `loadClass(String)`                                                                                                    | `java.lang.ClassLoader`                                                |
| +100.0% |  +40 B |          <0.1% |   40 B → 80 B |   1 → 2 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001179d48` |
| +100.0% |  +40 B |          <0.1% |   40 B → 80 B |   1 → 2 | `lambda$generateData$4(int)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +11.8% |  +16 B |          <0.1% | 136 B → 152 B |       5 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011798d8` |
|  +11.8% |  +16 B |          <0.1% | 136 B → 152 B |       5 | `toArray(IntFunction)`                                                                                                 | `java.util.stream.ReferencePipeline`                                   |
|  +11.8% |  +16 B |          <0.1% | 136 B → 152 B |       5 | `lambda$generateData$5(int, int, Random[], int)`                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|     ~0% |  +16 B | 91.5% → 100.0% |       2.16 MB |       6 | `collect(Collector)`                                                                                                   | `java.util.stream.ReferencePipeline`                                   |
|     ~0% |  +16 B | 91.5% → 100.0% |       2.16 MB |       6 | `generateData(int, int, int)`                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|     ~0% |  +16 B | 91.5% → 100.0% |       2.16 MB |       6 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|     ~0% |  +16 B | 91.5% → 100.0% |       2.16 MB |       6 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|     ~0% |  +16 B | 91.5% → 100.0% |       2.16 MB |       6 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|     ~0% |  +16 B | 91.5% → 100.0% |       2.16 MB |       6 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000070011715d8` |
|     ~0% |  +16 B | 91.5% → 100.0% |       2.16 MB |       6 | `foreach(Function1)`                                                                                                   | `scala.collection.immutable.List`                                      |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

|  Change |       Delta |           % |         Size | Samples | Function                                         | Location                                                               |
| ------: | ----------: | ----------: | -----------: | ------: | ------------------------------------------------ | ---------------------------------------------------------------------- |
| removed | -199.312 kB | 8.4% → 0.0% | 199 kB → 0 B |   1 → 0 | `addAll(Collection)`                             | `java.util.ArrayList`                                                  |
| removed | -199.312 kB | 8.4% → 0.0% | 199 kB → 0 B |   1 → 0 | `lambda$merge$6(List, List)`                     | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed | -199.312 kB | 8.4% → 0.0% | 199 kB → 0 B |   1 → 0 | `apply(Object, Object)`                          | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011df098` |
| removed | -199.312 kB | 8.4% → 0.0% | 199 kB → 0 B |   1 → 0 | `merge(Object, Object, BiFunction)`              | `java.util.HashMap`                                                    |
| removed | -199.312 kB | 8.4% → 0.0% | 199 kB → 0 B |   1 → 0 | `lambda$merge$7(Map, Object, List)`              | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed | -199.312 kB | 8.4% → 0.0% | 199 kB → 0 B |   1 → 0 | `accept(Object, Object)`                         | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c0011dee50` |
| removed | -199.312 kB | 8.4% → 0.0% | 199 kB → 0 B |   1 → 0 | `forEach(BiConsumer)`                            | `java.util.HashMap`                                                    |
| removed | -199.312 kB | 8.4% → 0.0% | 199 kB → 0 B |   1 → 0 | `merge(Map, Map)`                                | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed | -199.312 kB | 8.4% → 0.0% | 199 kB → 0 B |   1 → 0 | `combineResults(Map, Map)`                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed | -199.312 kB | 8.4% → 0.0% | 199 kB → 0 B |   1 → 0 | `combineResults(Object, Object)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed | -199.312 kB | 8.4% → 0.0% | 199 kB → 0 B |   1 → 0 | `compute()`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  -71.4% |       -40 B |       <0.1% |  56 B → 16 B |       1 | `<clinit>()`                                     | `scala.Predef$`                                                        |
|  -25.0% |       -24 B |       <0.1% |  96 B → 72 B |   4 → 3 | `valueOf(double)`                                | `java.lang.Double`                                                     |
|  -25.0% |       -24 B |       <0.1% |  96 B → 72 B |   4 → 3 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -25.0% |       -24 B |       <0.1% |  96 B → 72 B |   4 → 3 | `apply(int)`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001179b10` |

# Lock contention profile diff

Blocked 6.95s → 7.95s (+998.65ms, +14.4%) over 56 samples → 88 samples (124.2ms → 90.4ms per sample).

| Category | Change |     Delta |      % |          Time | Samples |
| -------- | -----: | --------: | -----: | ------------: | ------: |
| stdlib   | +14.4% | +998.65ms | 100.0% | 6.95s → 7.95s | 56 → 88 |

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

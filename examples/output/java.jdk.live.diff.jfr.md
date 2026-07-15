# Sampling profile diff

1,677 samples → 1,725 samples (+48 samples, +2.9%).

| Category | Change | Delta |             % |       Samples |
| -------- | -----: | ----: | ------------: | ------------: |
| ours     |  +4.2% |   +64 | 90.2% → 91.4% | 1,512 → 1,576 |
| stdlib   |  -9.7% |   -16 |   9.8% → 8.6% |     165 → 149 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|   Change | Delta |             % |   Samples | Function                             | Location                                                                              |
| -------: | ----: | ------------: | --------: | ------------------------------------ | ------------------------------------------------------------------------------------- |
|   +17.8% |   +68 | 22.8% → 26.1% | 383 → 451 | `distance(Double[], Double[])`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   +51.9% |   +27 |   3.1% → 4.6% |   52 → 79 | `vectorSum()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  +209.1% |   +23 |   0.7% → 2.0% |   11 → 34 | `computeDirectly()`                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| +2300.0% |   +23 |   0.1% → 1.4% |    1 → 24 | `apply(Object)`                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001204b38` |
|   +19.6% |   +21 |   6.4% → 7.4% | 107 → 128 | `collectClusters(int[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|    +0.5% |    +1 | 12.6% → 12.3% | 211 → 212 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|      new |    +1 |   0.0% → 0.1% |     0 → 1 | `compute()`                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
|  +100.0% |    +1 |          0.1% |     1 → 2 | `join()`                             | `java.util.concurrent.ForkJoinTask`                                                   |
|      new |    +1 |   0.0% → 0.1% |     0 → 1 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|      new |    +1 |   0.0% → 0.1% |     0 → 1 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|      new |    +1 |   0.0% → 0.1% |     0 → 1 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|      new |    +1 |   0.0% → 0.1% |     0 → 1 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                            | Location                                                  |
| ------: | ----: | ------------: | --------: | ----------------------------------- | --------------------------------------------------------- |
|  -13.6% |  -101 | 44.3% → 37.2% | 743 → 642 | `accumulate(Double[], double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  -80.0% |   -12 |   0.9% → 0.2% |    15 → 3 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`                                       |
|   -6.1% |    -4 |   3.9% → 3.6% |   66 → 62 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`                                       |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `awaitDone(int, long)`              | `java.util.concurrent.ForkJoinTask`                       |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `valueOf(double)`                   | `java.lang.Double`                                        |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `merge(Map, Map)`                   | `org.renaissance.jdk.concurrent.JavaKMeans`               |
|  -50.0% |    -1 |          0.1% |     2 → 1 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`               |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `lambda$run$0(int, List, int)`      | `org.renaissance.jdk.concurrent.JavaKMeans`               |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|   Change | Delta |             % |       Samples | Function                                                    | Location                                                                              |
| -------: | ----: | ------------: | ------------: | ----------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|   +15.9% |  +130 | 48.8% → 55.0% |     818 → 948 | `computeDirectly()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   +11.8% |   +70 | 35.4% → 38.5% |     594 → 664 | `findNearestCentroid()`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   +17.8% |   +68 | 22.8% → 26.1% |     383 → 451 | `distance(Double[], Double[])`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|    +2.6% |   +44 | 99.4% → 99.2% | 1,667 → 1,711 | `compute()`                                                 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
|    +2.6% |   +43 | 98.1% → 97.9% | 1,645 → 1,688 | `awaitDone(int, long)`                                      | `java.util.concurrent.ForkJoinTask`                                                   |
|    +2.6% |   +43 | 98.1% → 97.9% | 1,645 → 1,688 | `join()`                                                    | `java.util.concurrent.ForkJoinTask`                                                   |
|   +17.4% |   +37 | 12.7% → 14.5% |     213 → 250 | `collectClusters(int[])`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| +2400.0% |   +24 |   0.1% → 1.4% |        1 → 25 | `apply(Object)`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001204b38` |
|   +24.3% |   +17 |   4.2% → 5.0% |       70 → 87 | `computeIfAbsent(Object, Function)`                         | `java.util.HashMap`                                                                   |
|  +800.0% |    +8 |   0.1% → 0.5% |         1 → 9 | `lambda$merge$6(List, List)`                                | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  +800.0% |    +8 |   0.1% → 0.5% |         1 → 9 | `apply(Object, Object)`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0`                |
|      new |    +8 |   0.0% → 0.5% |         0 → 8 | `<init>(Collection)`                                        | `java.util.ArrayList`                                                                 |
|   +83.3% |    +5 |   0.4% → 0.6% |        6 → 11 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`                                                       |
|   +83.3% |    +5 |   0.4% → 0.6% |        6 → 11 | `launchHarnessClass(String, String[])`                      | `org.renaissance.core.Launcher`                                                       |
|   +83.3% |    +5 |   0.4% → 0.6% |        6 → 11 | `main(String[])`                                            | `org.renaissance.core.Launcher`                                                       |
|   +80.0% |    +4 |   0.3% → 0.5% |         5 → 9 | `main(String[])`                                            | `org.renaissance.harness.RenaissanceSuite$`                                           |
|   +80.0% |    +4 |   0.3% → 0.5% |         5 → 9 | `main(String[])`                                            | `org.renaissance.harness.RenaissanceSuite`                                            |
|   +80.0% |    +4 |   0.3% → 0.5% |         5 → 9 | `invoke(Object, Object[])`                                  | `java.lang.reflect.Method`                                                            |
|  +100.0% |    +3 |   0.2% → 0.3% |         3 → 6 | `collect(Collector)`                                        | `java.util.stream.ReferencePipeline`                                                  |
|  +100.0% |    +3 |   0.2% → 0.3% |         3 → 6 | `generateData(int, int, int)`                               | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % |   Samples | Function                                                                                     | Location                                                               |
| ------: | ----: | ------------: | --------: | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|  -13.6% |  -101 | 44.3% → 37.2% | 743 → 642 | `accumulate(Double[], double[])`                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   -9.1% |   -72 | 47.4% → 41.9% | 795 → 723 | `vectorSum()`                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   -9.1% |   -72 | 47.4% → 41.9% | 795 → 723 | `computeDirectly()`                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -14.3% |   -39 | 16.2% → 13.5% | 272 → 233 | `computeDirectly()`                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -13.0% |   -36 | 16.5% → 13.9% | 276 → 240 | `average(List)`                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -13.0% |   -36 | 16.5% → 14.0% | 277 → 241 | `computeClusterAverages()`                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -11.5% |   -33 | 17.1% → 14.7% | 286 → 253 | `invoke()`                                                                                   | `java.util.concurrent.ForkJoinTask`                                    |
|  -30.4% |    -7 |   1.4% → 0.9% |   23 → 16 | `merge(Map, Map)`                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -30.4% |    -7 |   1.4% → 0.9% |   23 → 16 | `combineResults(Map, Map)`                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -30.4% |    -7 |   1.4% → 0.9% |   23 → 16 | `combineResults(Object, Object)`                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -10.3% |    -4 |   2.3% → 2.0% |   39 → 35 | `add(Object)`                                                                                | `java.util.ArrayList`                                                  |
|  -25.0% |    -4 |   1.0% → 0.7% |   16 → 12 | `merge(Object, Object, BiFunction)`                                                          | `java.util.HashMap`                                                    |
|  -23.5% |    -4 |   1.0% → 0.8% |   17 → 13 | `lambda$merge$7(Map, Object, List)`                                                          | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -23.5% |    -4 |   1.0% → 0.8% |   17 → 13 | `accept(Object, Object)`                                                                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88` |
|  -23.5% |    -4 |   1.0% → 0.8% |   17 → 13 | `forEach(BiConsumer)`                                                                        | `java.util.HashMap`                                                    |
|  -40.0% |    -2 |   0.3% → 0.2% |     5 → 3 | `<init>(Map)`                                                                                | `java.util.HashMap`                                                    |
|  -50.0% |    -1 |          0.1% |     2 → 1 | `getBenchmarkClassLoader(BenchmarkDescriptor)`                                               | `org.renaissance.core.BenchmarkSuite`                                  |
|  -50.0% |    -1 |          0.1% |     2 → 1 | `createBenchmark(BenchmarkDescriptor)`                                                       | `org.renaissance.core.BenchmarkSuite`                                  |
|  -50.0% |    -1 |          0.1% |     2 → 1 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver`                              |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `apply(int)`                                                                                 | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a1b10` |

# Allocated heap profile diff

Allocated 37.6 GiB → 37.5 GiB (-52.124 MiB, -0.1%) over 1,984 samples → 2,040 samples (19.4 MiB → 18.8 MiB per sample).

| Category | Change |        Delta |             % |                Size |       Samples |
| -------- | -----: | -----------: | ------------: | ------------------: | ------------: |
| stdlib   |  +0.4% | +163.204 MiB | 94.6% → 95.1% | 35.5 GiB → 35.7 GiB | 1,865 → 1,922 |
| ours     | -10.3% | -215.329 MiB |   5.4% → 4.9% | 2.04 GiB → 1.83 GiB |           117 |
| native   | -12.2% |       -280 B |         <0.1% | 2.24 KiB → 1.97 KiB |         2 → 1 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|  Change |        Delta |            % |                Size | Samples | Function                             | Location                                                   |
| ------: | -----------: | -----------: | ------------------: | ------: | ------------------------------------ | ---------------------------------------------------------- |
|  +11.3% | +115.621 MiB |  2.7% → 3.0% | 1023 MiB → 1.11 GiB | 65 → 62 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +184.9% | +109.884 MiB |  0.2% → 0.4% |  59.4 MiB → 169 MiB |  4 → 10 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     new | +101.295 MiB |  0.0% → 0.3% |       0 B → 101 MiB |   0 → 1 | `computeClusterAverages()`           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| +198.5% |  +46.155 MiB |  0.1% → 0.2% | 23.3 MiB → 69.4 MiB |   6 → 4 | `merge(Map, Map)`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  +15.8% |  +10.093 MiB |         0.2% |   64 MiB → 74.1 MiB |   5 → 2 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +11.7% |    +9.98 MiB |         0.2% | 85.1 MiB → 95.1 MiB |   4 → 7 | `lambda$merge$6(List, List)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  +14.5% |     +1.4 MiB |        <0.1% | 9.67 MiB → 11.1 MiB | 26 → 29 | `valueOf(double)`                    | `java.lang.Double`                                         |
|     new | +751.843 KiB | 0.0% → <0.1% |       0 B → 752 KiB |   0 → 1 | `lambda$boxed$0(int)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|   +8.4% | +295.179 KiB |        <0.1% |  3.42 MiB → 3.7 MiB | 10 → 12 | `lambda$generateData$4(int)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |        Delta |            % |                Size | Samples | Function                  | Location                                                   |
| ------: | -----------: | -----------: | ------------------: | ------: | ------------------------- | ---------------------------------------------------------- |
|  -85.7% | -334.309 MiB |  1.0% → 0.1% |  390 MiB → 55.7 MiB |   8 → 4 | `collectClusters(int[])`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -99.0% |  -97.071 MiB | 0.3% → <0.1% | 98.1 MiB → 1.02 MiB |       2 | `vectorSum()`             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -35.2% |   -91.91 MiB |  0.7% → 0.4% |   261 MiB → 169 MiB |  8 → 12 | `createSubtask(int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| removed |  -86.092 MiB |  0.2% → 0.0% |      86.1 MiB → 0 B |   5 → 0 | `add(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| removed | -798.601 KiB | <0.1% → 0.0% |       799 KiB → 0 B |   3 → 0 | `range(int, int)`         | `java.util.stream.IntStream`                               |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                Size |       Samples | Function                                         | Location                                                                              |
| ------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------ | ------------------------------------------------------------------------------------- |
|   +3.3% | +847.482 MiB | 66.1% → 68.4% | 24.8 GiB → 25.7 GiB | 1,259 → 1,309 | `join()`                                         | `java.util.concurrent.ForkJoinTask`                                                   |
|   +7.5% |  +453.19 MiB | 15.8% → 17.0% | 5.93 GiB → 6.37 GiB |     308 → 337 | `computeDirectly()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   +7.9% |  +358.52 MiB | 11.8% → 12.7% | 4.43 GiB → 4.78 GiB |     226 → 258 | `add(Object)`                                    | `java.util.ArrayList`                                                                 |
|   +6.7% | +337.568 MiB | 13.1% → 14.0% | 4.93 GiB → 5.26 GiB |     243 → 275 | `collectClusters(int[])`                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| +253.2% | +313.357 MiB |   0.3% → 1.1% |   124 MiB → 437 MiB |        9 → 13 | `computeIfAbsent(Object, Function)`              | `java.util.HashMap`                                                                   |
|   +1.1% | +264.326 MiB | 60.0% → 60.7% | 22.5 GiB → 22.8 GiB | 1,129 → 1,156 | `addAll(Collection)`                             | `java.util.ArrayList`                                                                 |
|  +11.3% | +115.621 MiB |   2.7% → 3.0% | 1023 MiB → 1.11 GiB |       65 → 62 | `findNearestCentroid()`                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| +184.9% | +109.884 MiB |   0.2% → 0.4% |  59.4 MiB → 169 MiB |        4 → 10 | `createSubtask(int, int)`                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +50.5% |  +30.143 MiB |          0.2% | 59.7 MiB → 89.8 MiB |         8 → 6 | `<init>(Map)`                                    | `java.util.HashMap`                                                                   |
|  +21.8% |  +28.452 MiB |   0.3% → 0.4% |   130 MiB → 159 MiB |         9 → 8 | `computeClusterAverages()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|  +21.8% |  +28.452 MiB |   0.3% → 0.4% |   130 MiB → 159 MiB |         9 → 8 | `computeDirectly()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
| +159.9% |  +15.461 MiB |  <0.1% → 0.1% | 9.67 MiB → 25.1 MiB |       26 → 69 | `apply(int)`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a18d8`                |
|  +15.8% |  +10.093 MiB |          0.2% |   64 MiB → 74.1 MiB |         5 → 2 | `lambda$collectClusters$0(Double[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +15.8% |  +10.093 MiB |          0.2% |   64 MiB → 74.1 MiB |         5 → 2 | `apply(Object)`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001204b38` |
|  +12.2% |   +1.732 MiB |         <0.1% | 14.2 MiB → 15.9 MiB |       39 → 43 | `toArray(IntFunction)`                           | `java.util.stream.ReferencePipeline`                                                  |
|   +0.9% |   +1.532 MiB |          0.5% |   178 MiB → 179 MiB |       37 → 39 | `loadClass(String)`                              | `java.lang.ClassLoader`                                                               |
|  +14.5% |     +1.4 MiB |         <0.1% | 9.67 MiB → 11.1 MiB |       26 → 29 | `valueOf(double)`                                | `java.lang.Double`                                                                    |
|  +14.5% |     +1.4 MiB |         <0.1% | 9.67 MiB → 11.1 MiB |       26 → 29 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|     new |   +1.252 MiB |  0.0% → <0.1% |      0 B → 1.25 MiB |         0 → 1 | `map(Function1)`                                 | `scala.collection.immutable.Range`                                                    |
|   +0.5% |  +832.07 KiB |          0.4% |   164 MiB → 165 MiB |             4 | `run(BenchmarkContext)`                          | `org.renaissance.jdk.concurrent.FjKmeans`                                             |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                Size |       Samples | Function                             | Location                                                               |
| ------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------ | ---------------------------------------------------------------------- |
|  -13.1% |    -1.07 GiB | 21.8% → 19.0% | 8.19 GiB → 7.12 GiB |     215 → 230 | `invoke()`                           | `java.util.concurrent.ForkJoinTask`                                    |
|  -10.4% | -815.779 MiB | 20.4% → 18.3% | 7.66 GiB → 6.87 GiB |     195 → 222 | `lambda$run$0(int, List, int)`       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -10.4% | -815.779 MiB | 20.4% → 18.3% | 7.66 GiB → 6.87 GiB |     195 → 222 | `call()`                             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0` |
|   -9.4% | -793.951 MiB | 21.9% → 19.9% | 8.23 GiB → 7.45 GiB |     385 → 379 | `<init>(Collection)`                 | `java.util.ArrayList`                                                  |
|   -1.6% | -519.644 MiB | 82.1% → 80.9% | 30.8 GiB → 30.3 GiB | 1,518 → 1,542 | `lambda$merge$6(List, List)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -1.6% | -519.644 MiB | 82.1% → 80.9% | 30.8 GiB → 30.3 GiB | 1,518 → 1,542 | `apply(Object, Object)`              | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0` |
|   -1.6% | -519.644 MiB | 82.1% → 80.9% | 30.8 GiB → 30.3 GiB | 1,518 → 1,542 | `merge(Object, Object, BiFunction)`  | `java.util.HashMap`                                                    |
|   -1.6% | -519.644 MiB | 82.1% → 80.9% | 30.8 GiB → 30.3 GiB | 1,518 → 1,542 | `lambda$merge$7(Map, Object, List)`  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -1.6% | -519.644 MiB | 82.1% → 80.9% | 30.8 GiB → 30.3 GiB | 1,518 → 1,542 | `accept(Object, Object)`             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88` |
|   -1.6% | -519.644 MiB | 82.1% → 80.9% | 30.8 GiB → 30.3 GiB | 1,518 → 1,542 | `forEach(BiConsumer)`                | `java.util.HashMap`                                                    |
|   -1.4% | -443.346 MiB | 82.3% → 81.3% | 30.9 GiB → 30.5 GiB | 1,532 → 1,552 | `merge(Map, Map)`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -1.4% | -443.346 MiB | 82.3% → 81.3% | 30.9 GiB → 30.5 GiB | 1,532 → 1,552 | `combineResults(Map, Map)`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -1.4% | -443.346 MiB | 82.3% → 81.3% | 30.9 GiB → 30.5 GiB | 1,532 → 1,552 | `combineResults(Object, Object)`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -99.0% |  -97.071 MiB |  0.3% → <0.1% | 98.1 MiB → 1.02 MiB |             2 | `vectorSum()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -99.0% |  -97.071 MiB |  0.3% → <0.1% | 98.1 MiB → 1.02 MiB |             2 | `computeDirectly()`                  | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -35.2% |   -91.91 MiB |   0.7% → 0.4% |   261 MiB → 169 MiB |        8 → 12 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| removed |  -86.092 MiB |   0.2% → 0.0% |      86.1 MiB → 0 B |         5 → 0 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| removed |  -86.092 MiB |   0.2% → 0.0% |      86.1 MiB → 0 B |         5 → 0 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| removed |  -86.092 MiB |   0.2% → 0.0% |      86.1 MiB → 0 B |         5 → 0 | `combineResults(Object, Object)`     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -57.0% |  -74.336 MiB |   0.3% → 0.1% |    130 MiB → 56 MiB |         9 → 5 | `average(List)`                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |

# Retained heap profile diff

Retained 2.56 MiB (-160 B, ~0%) over 9 samples → 8 samples (291 KiB → 328 KiB per sample).

| Category | Change |  Delta |      % |     Size | Samples |
| -------- | -----: | -----: | -----: | -------: | ------: |
| stdlib   |    ~0% | -160 B | 100.0% | 2.56 MiB |   9 → 8 |

## Hottest functions

### Self size

No function differed in bytes retained directly in the function body, excluding callees.

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

| Change | Delta |            % |       Size | Samples | Function                                     | Location                               |
| -----: | ----: | -----------: | ---------: | ------: | -------------------------------------------- | -------------------------------------- |
|    new | +24 B | 0.0% → <0.1% | 0 B → 24 B |   0 → 1 | `runParser(Seq, Object, List, OParserSetup)` | `scopt.ORunner$`                       |
|    new | +24 B | 0.0% → <0.1% | 0 B → 24 B |   0 → 1 | `parse(Seq, Object)`                         | `scopt.OptionParser`                   |
|    new | +24 B | 0.0% → <0.1% | 0 B → 24 B |   0 → 1 | `parse(String[])`                            | `org.renaissance.harness.ConfigParser` |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

|  Change |  Delta |            % |         Size | Samples | Function                                                         | Location                                                               |
| ------: | -----: | -----------: | -----------: | ------: | ---------------------------------------------------------------- | ---------------------------------------------------------------------- |
|     ~0% | -160 B |        90.2% |     2.31 MiB |   8 → 7 | `main(String[])`                                                 | `org.renaissance.harness.RenaissanceSuite`                             |
|     ~0% | -160 B |        90.2% |     2.31 MiB |   8 → 7 | `invoke(Object, Object[])`                                       | `java.lang.reflect.Method`                                             |
|     ~0% | -160 B |        90.2% |     2.31 MiB |   8 → 7 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`      | `org.renaissance.core.Launcher`                                        |
|     ~0% | -160 B |        90.2% |     2.31 MiB |   8 → 7 | `launchHarnessClass(String, String[])`                           | `org.renaissance.core.Launcher`                                        |
|     ~0% | -160 B |        90.2% |     2.31 MiB |   8 → 7 | `main(String[])`                                                 | `org.renaissance.core.Launcher`                                        |
|     ~0% | -160 B |        80.5% |     2.06 MiB |   7 → 6 | `main(String[])`                                                 | `org.renaissance.harness.RenaissanceSuite$`                            |
| removed | -112 B | <0.1% → 0.0% |  112 B → 0 B |   1 → 0 | `<clinit>()`                                                     | `scala.runtime.LazyVals$`                                              |
| removed | -112 B | <0.1% → 0.0% |  112 B → 0 B |   1 → 0 | `<clinit>()`                                                     | `scopt.OptionParser`                                                   |
| removed | -112 B | <0.1% → 0.0% |  112 B → 0 B |   1 → 0 | `createParser(Map)`                                              | `org.renaissance.harness.ConfigParser`                                 |
| removed | -112 B | <0.1% → 0.0% |  112 B → 0 B |   1 → 0 | `<init>(Map)`                                                    | `org.renaissance.harness.ConfigParser`                                 |
|  -78.6% |  -88 B |        <0.1% | 112 B → 24 B |       1 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives`                                 |
| removed |  -72 B | <0.1% → 0.0% |   72 B → 0 B |   1 → 0 | `load(InputStream)`                                              | `java.util.Properties`                                                 |
| removed |  -72 B | <0.1% → 0.0% |   72 B → 0 B |   1 → 0 | `loadProperties(URL)`                                            | `org.renaissance.core.ResourceUtils`                                   |
| removed |  -72 B | <0.1% → 0.0% |   72 B → 0 B |   1 → 0 | `loadPropertiesAsMap(URL)`                                       | `org.renaissance.core.ResourceUtils`                                   |
| removed |  -72 B | <0.1% → 0.0% |   72 B → 0 B |   1 → 0 | `create(Path, String, Optional, Map, boolean)`                   | `org.renaissance.core.BenchmarkSuite`                                  |
| removed |  -72 B | <0.1% → 0.0% |   72 B → 0 B |   1 → 0 | `$anonfun$1(Config, Path)`                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
| removed |  -72 B | <0.1% → 0.0% |   72 B → 0 B |   1 → 0 | `apply()`                                                        | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000780117e000` |
| removed |  -72 B | <0.1% → 0.0% |   72 B → 0 B |   1 → 0 | `apply(Function0)`                                               | `scala.util.Try$`                                                      |

# Lock contention profile diff

Blocked 7.15s → 7.14s (-8.45ms, -0.1%) over 59 samples → 54 samples (121.3ms → 132.4ms per sample).

| Category | Change |   Delta |      % |          Time | Samples |
| -------- | -----: | ------: | -----: | ------------: | ------: |
| stdlib   |  -0.1% | -8.45ms | 100.0% | 7.15s → 7.14s | 59 → 54 |

## Hottest functions

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

| Change |    Delta |             % |          Time | Samples | Function                                                                                                               | Location                                                               |
| -----: | -------: | ------------: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|  +0.8% | +49.23ms | 86.1% → 86.9% | 6.16s → 6.21s |      16 | `get()`                                                                                                                | `java.util.concurrent.ForkJoinTask`                                    |
|  +0.8% | +49.23ms | 86.1% → 86.9% | 6.16s → 6.21s |      16 | `run(int, List, int)`                                                                                                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +0.8% | +49.23ms | 86.1% → 86.9% | 6.16s → 6.21s |      16 | `$anonfun$1(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  +0.8% | +49.23ms | 86.1% → 86.9% | 6.16s → 6.21s |      16 | `$anonfun$adapted$1(Object)`                                                                                           | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  +0.8% | +49.23ms | 86.1% → 86.9% | 6.16s → 6.21s |      16 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011f6c70`   |
|  +0.8% | +49.23ms | 86.1% → 86.9% | 6.16s → 6.21s |      16 | `map(Function1)`                                                                                                       | `scala.collection.immutable.Range`                                     |
|  +0.8% | +49.23ms | 86.1% → 86.9% | 6.16s → 6.21s |      16 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  +0.8% | +49.23ms | 86.1% → 86.9% | 6.16s → 6.21s |      16 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |
|  +0.8% | +49.23ms | 86.1% → 86.9% | 6.16s → 6.21s |      16 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|  +0.8% | +49.23ms | 86.1% → 86.9% | 6.16s → 6.21s |      16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +0.8% | +49.23ms | 86.1% → 86.9% | 6.16s → 6.21s |      16 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001198798` |
|  +0.8% | +49.23ms | 86.1% → 86.9% | 6.16s → 6.21s |      16 | `foreach(Function1)`                                                                                                   | `scala.collection.immutable.List`                                      |
|  +0.8% | +49.23ms | 86.1% → 86.9% | 6.16s → 6.21s |      16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +0.8% | +49.23ms | 86.1% → 86.9% | 6.16s → 6.21s |      16 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +0.8% | +49.23ms | 86.1% → 86.9% | 6.16s → 6.21s |      16 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|  +0.8% | +49.23ms | 86.1% → 86.9% | 6.16s → 6.21s |      16 | `invoke(Object, Object[])`                                                                                             | `java.lang.reflect.Method`                                             |
|  +0.8% | +49.23ms | 86.1% → 86.9% | 6.16s → 6.21s |      16 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
|  +0.8% | +49.23ms | 86.1% → 86.9% | 6.16s → 6.21s |      16 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
|  +0.8% | +49.23ms | 86.1% → 86.9% | 6.16s → 6.21s |      16 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |

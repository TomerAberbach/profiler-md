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

##### Ours

| Change |        Delta |            % |                Size |       Samples | Function                             | Location                                                   |
| -----: | -----------: | -----------: | ------------------: | ------------: | ------------------------------------ | ---------------------------------------------------------- |
|  +3.7% | +240.515 KiB |         0.2% | 6.34 MiB → 6.58 MiB | 3,375 → 3,500 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +41.6% |   +3.117 KiB |        <0.1% | 7.49 KiB → 10.6 KiB |     137 → 194 | `vectorSum()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +14.0% |   +1.367 KiB |        <0.1% | 9.79 KiB → 11.2 KiB |     179 → 204 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +16.1% |       +840 B |        <0.1% | 5.09 KiB → 5.91 KiB |     217 → 252 | `lambda$merge$6(List, List)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| +17.8% |       +840 B |        <0.1% | 4.62 KiB → 5.44 KiB |     197 → 232 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +4.0% |       +720 B |        <0.1% | 17.4 KiB → 18.1 KiB |     371 → 386 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +9.7% |       +672 B |        <0.1% |  6.8 KiB → 7.45 KiB |     145 → 159 | `merge(Map, Map)`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  +7.5% |       +120 B |        <0.1% | 1.56 KiB → 1.68 KiB |       40 → 43 | `lambda$generateData$4(int)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|    new |        +80 B | 0.0% → <0.1% |          0 B → 80 B |         0 → 2 | `lambda$boxed$0(int)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| +87.5% |        +56 B |        <0.1% |        64 B → 120 B |         2 → 3 | `lambda$run$0(int, List, int)`       | `org.renaissance.jdk.concurrent.JavaKMeans`                |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |      Delta |            % |                Size |   Samples | Function                   | Location                                                   |
| ------: | ---------: | -----------: | ------------------: | --------: | -------------------------- | ---------------------------------------------------------- |
|  -22.1% | -2.156 KiB |        <0.1% | 9.75 KiB → 7.59 KiB | 208 → 162 | `collectClusters(int[])`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -12.0% | -2.078 KiB |        <0.1% | 17.3 KiB → 15.2 KiB | 316 → 278 | `createSubtask(int, int)`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -24.3% |     -840 B |        <0.1% | 3.38 KiB → 2.55 KiB | 144 → 109 | `valueOf(double)`          | `java.lang.Double`                                         |
|  -50.0% |     -432 B |        <0.1% |       864 B → 432 B |    18 → 9 | `createSubtask(int, int)`  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -25.0% |     -192 B |        <0.1% |       768 B → 576 B |   16 → 12 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| removed |     -168 B | <0.1% → 0.0% |         168 B → 0 B |     3 → 0 | `div(double[], int)`       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -26.9% |     -168 B |        <0.1% |       624 B → 456 B |   26 → 19 | `range(int, int)`          | `java.util.stream.IntStream`                               |
| removed |      -96 B | <0.1% → 0.0% |          96 B → 0 B |     2 → 0 | `average(List)`            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

##### Ours

|  Change |      Delta |            % |                Size |   Samples | Function                   | Location                                                   |
| ------: | ---------: | -----------: | ------------------: | --------: | -------------------------- | ---------------------------------------------------------- |
|  -22.1% | -2.156 KiB |        <0.1% | 9.75 KiB → 7.59 KiB | 208 → 162 | `collectClusters(int[])`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -12.0% | -2.078 KiB |        <0.1% | 17.3 KiB → 15.2 KiB | 316 → 278 | `createSubtask(int, int)`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -50.0% |     -432 B |        <0.1% |       864 B → 432 B |    18 → 9 | `createSubtask(int, int)`  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -25.0% |     -192 B |        <0.1% |       768 B → 576 B |   16 → 12 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| removed |     -168 B | <0.1% → 0.0% |         168 B → 0 B |     3 → 0 | `div(double[], int)`       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| removed |      -96 B | <0.1% → 0.0% |          96 B → 0 B |     2 → 0 | `average(List)`            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|  Change |        Delta |           % |                Size |         Samples | Function                                                                                                               | Location                                                               |
| ------: | -----------: | ----------: | ------------------: | --------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|  +10.2% | +946.476 KiB |        0.3% | 9.04 MiB → 9.96 MiB | 12,439 → 12,749 | `add(Object)`                                                                                                          | `java.util.ArrayList`                                                  |
|  +18.1% |     +809 KiB | 0.1% → 0.2% | 4.36 MiB → 5.15 MiB |       382 → 325 | `generateData(int, int, int)`                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +18.1% | +808.984 KiB | 0.1% → 0.2% | 4.36 MiB → 5.15 MiB |       383 → 325 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  +18.1% |  +808.96 KiB | 0.1% → 0.2% | 4.36 MiB → 5.15 MiB |       383 → 325 | `collect(Collector)`                                                                                                   | `java.util.stream.ReferencePipeline`                                   |
|  +12.8% | +683.757 KiB |        0.2% | 5.21 MiB → 5.87 MiB |       435 → 390 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +12.2% | +608.789 KiB |        0.2% | 4.86 MiB → 5.45 MiB |       409 → 353 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +12.2% | +608.789 KiB |        0.2% | 4.86 MiB → 5.45 MiB |       409 → 353 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000080111efe0` |
|  +12.2% | +608.789 KiB |        0.2% | 4.86 MiB → 5.45 MiB |       409 → 353 | `foreach(Function1)`                                                                                                   | `scala.collection.immutable.List`                                      |
|  +12.2% | +608.789 KiB |        0.2% | 4.86 MiB → 5.45 MiB |       409 → 353 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +11.0% | +606.156 KiB |        0.2% | 5.36 MiB → 5.95 MiB |       444 → 396 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
|  +11.0% | +606.156 KiB |        0.2% | 5.36 MiB → 5.95 MiB |       444 → 396 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
|  +11.0% | +605.976 KiB |        0.2% | 5.36 MiB → 5.95 MiB |       444 → 394 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
|  +11.9% | +592.773 KiB |        0.2% | 4.86 MiB → 5.44 MiB |       409 → 352 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|  +10.8% | +590.226 KiB |        0.2% | 5.36 MiB → 5.94 MiB |       443 → 393 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|  +10.8% | +590.226 KiB |        0.2% | 5.36 MiB → 5.94 MiB |       443 → 393 | `invoke(Object, Object[])`                                                                                             | `java.lang.reflect.Method`                                             |
|   +3.3% | +375.164 KiB | 0.3% → 0.4% | 11.1 MiB → 11.4 MiB | 16,653 → 17,059 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   +3.7% | +240.515 KiB |        0.2% | 6.34 MiB → 6.58 MiB |   3,375 → 3,500 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| +213.7% | +142.273 KiB |       <0.1% |  66.6 KiB → 209 KiB |         11 → 21 | `<clinit>()`                                                                                                           | `scala.Predef$`                                                        |
|   +2.8% | +134.648 KiB | 0.1% → 0.2% | 4.72 MiB → 4.85 MiB | 13,278 → 13,559 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| +117.3% |  +74.679 KiB |       <0.1% |  63.6 KiB → 138 KiB |           3 → 5 | `apply(Seq)`                                                                                                           | `scala.collection.immutable.Map$`                                      |

##### Ours

|    Change |        Delta |            % |                Size |         Samples | Function                                                                                                               | Location                                                               |
| --------: | -----------: | -----------: | ------------------: | --------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|    +18.1% |     +809 KiB |  0.1% → 0.2% | 4.36 MiB → 5.15 MiB |       382 → 325 | `generateData(int, int, int)`                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|    +18.1% | +808.984 KiB |  0.1% → 0.2% | 4.36 MiB → 5.15 MiB |       383 → 325 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|    +12.8% | +683.757 KiB |         0.2% | 5.21 MiB → 5.87 MiB |       435 → 390 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|    +12.2% | +608.789 KiB |         0.2% | 4.86 MiB → 5.45 MiB |       409 → 353 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|    +12.2% | +608.789 KiB |         0.2% | 4.86 MiB → 5.45 MiB |       409 → 353 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000080111efe0` |
|    +12.2% | +608.789 KiB |         0.2% | 4.86 MiB → 5.45 MiB |       409 → 353 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
|    +11.0% | +606.156 KiB |         0.2% | 5.36 MiB → 5.95 MiB |       444 → 396 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
|    +11.0% | +606.156 KiB |         0.2% | 5.36 MiB → 5.95 MiB |       444 → 396 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
|    +11.0% | +605.976 KiB |         0.2% | 5.36 MiB → 5.95 MiB |       444 → 394 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
|    +11.9% | +592.773 KiB |         0.2% | 4.86 MiB → 5.44 MiB |       409 → 352 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|    +10.8% | +590.226 KiB |         0.2% | 5.36 MiB → 5.94 MiB |       443 → 393 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|     +3.3% | +375.164 KiB |  0.3% → 0.4% | 11.1 MiB → 11.4 MiB | 16,653 → 17,059 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|     +3.7% | +240.515 KiB |         0.2% | 6.34 MiB → 6.58 MiB |   3,375 → 3,500 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|     +2.8% | +134.648 KiB |  0.1% → 0.2% | 4.72 MiB → 4.85 MiB | 13,278 → 13,559 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|       new |  +32.031 KiB | 0.0% → <0.1% |        0 B → 32 KiB |           0 → 2 | `extractResource(String, Path)`                                                                                        | `org.renaissance.core.ResourceUtils`                                   |
|       new |  +32.031 KiB | 0.0% → <0.1% |        0 B → 32 KiB |           0 → 2 | `extractResources(Iterable, Path)`                                                                                     | `org.renaissance.core.ResourceUtils`                                   |
| +11958.8% |  +31.765 KiB |        <0.1% |      272 B → 32 KiB |           1 → 2 | `createClassLoaderForModule(String)`                                                                                   | `org.renaissance.core.ModuleLoader`                                    |
|       new |  +31.484 KiB | 0.0% → <0.1% |      0 B → 31.5 KiB |           0 → 3 | `selectBenchmarks(BenchmarkSuite, Seq)`                                                                                | `org.renaissance.harness.RenaissanceSuite$`                            |
|       new |  +16.015 KiB | 0.0% → <0.1% |        0 B → 16 KiB |           0 → 1 | `getBenchmarkClassLoader(BenchmarkDescriptor)`                                                                         | `org.renaissance.core.BenchmarkSuite`                                  |
|       new |  +16.015 KiB | 0.0% → <0.1% |        0 B → 16 KiB |           0 → 1 | `createBenchmark(BenchmarkDescriptor)`                                                                                 | `org.renaissance.core.BenchmarkSuite`                                  |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

| Change |        Delta |             % |                Size |         Samples | Function                            | Location                                                               |
| -----: | -----------: | ------------: | ------------------: | --------------: | ----------------------------------- | ---------------------------------------------------------------------- |
|  -1.1% |  -36.412 MiB | 99.5% → 99.4% |  3.1 GiB → 3.07 GiB | 57,507 → 57,035 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`                                                    |
|  -1.1% |  -36.412 MiB | 99.5% → 99.4% |  3.1 GiB → 3.07 GiB | 57,507 → 57,035 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -1.1% |  -36.412 MiB | 99.5% → 99.4% |  3.1 GiB → 3.07 GiB | 57,507 → 57,035 | `accept(Object, Object)`            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88` |
|  -1.1% |  -36.412 MiB | 99.5% → 99.4% |  3.1 GiB → 3.07 GiB | 57,507 → 57,035 | `forEach(BiConsumer)`               | `java.util.HashMap`                                                    |
|  -1.1% |  -36.412 MiB | 99.5% → 99.4% |  3.1 GiB → 3.07 GiB | 57,505 → 57,033 | `lambda$merge$6(List, List)`        | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -1.1% |  -36.412 MiB | 99.5% → 99.4% |  3.1 GiB → 3.07 GiB | 57,505 → 57,033 | `apply(Object, Object)`             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0` |
|  -1.1% |  -36.412 MiB | 99.5% → 99.4% |  3.1 GiB → 3.07 GiB | 57,983 → 57,537 | `merge(Map, Map)`                   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -1.1% |  -36.411 MiB | 99.5% → 99.4% |  3.1 GiB → 3.07 GiB | 57,973 → 57,531 | `combineResults(Map, Map)`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -1.1% |  -36.411 MiB | 99.5% → 99.4% |  3.1 GiB → 3.07 GiB | 57,973 → 57,531 | `combineResults(Object, Object)`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -1.1% |  -36.042 MiB |         99.8% | 3.11 GiB → 3.08 GiB | 75,706 → 75,720 | `compute()`                         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  -1.4% |  -35.204 MiB | 81.0% → 80.8% | 2.52 GiB → 2.49 GiB | 42,853 → 42,397 | `addAll(Collection)`                | `java.util.ArrayList`                                                  |
|  -1.6% |  -31.317 MiB | 62.7% → 62.4% | 1.95 GiB → 1.92 GiB | 15,275 → 15,062 | `lambda$run$0(int, List, int)`      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -1.6% |  -31.317 MiB | 62.7% → 62.4% | 1.95 GiB → 1.92 GiB | 15,275 → 15,062 | `call()`                            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68` |
|  -1.6% |  -31.315 MiB | 62.7% → 62.4% | 1.95 GiB → 1.92 GiB | 15,634 → 15,462 | `invoke()`                          | `java.util.concurrent.ForkJoinTask`                                    |
|  -1.5% |  -14.143 MiB | 30.4% → 30.3% |   971 MiB → 957 MiB | 60,382 → 60,435 | `join()`                            | `java.util.concurrent.ForkJoinTask`                                    |
|  -0.2% |   -1.208 MiB | 18.5% → 18.7% |   591 MiB → 590 MiB | 14,435 → 14,384 | `<init>(Collection)`                | `java.util.ArrayList`                                                  |
| -23.8% | -234.265 KiB |         <0.1% |   983 KiB → 749 KiB |         45 → 54 | `loadClass(String)`                 | `java.lang.ClassLoader`                                                |
| -42.6% |  -216.21 KiB |         <0.1% |   508 KiB → 292 KiB |         26 → 27 | `executeOperation(int)`             | `org.renaissance.harness.ExecutionDriver`                              |
| -42.6% |  -216.21 KiB |         <0.1% |   508 KiB → 291 KiB |         24 → 25 | `run(BenchmarkContext)`             | `org.renaissance.jdk.concurrent.FjKmeans`                              |
| -86.9% | -100.085 KiB |         <0.1% |  115 KiB → 15.1 KiB |           9 → 5 | `map(Function1)`                    | `scala.collection.immutable.Range`                                     |

##### Ours

| Change |       Delta |             % |                Size |         Samples | Function                            | Location                                                               |
| -----: | ----------: | ------------: | ------------------: | --------------: | ----------------------------------- | ---------------------------------------------------------------------- |
|  -1.1% | -36.412 MiB | 99.5% → 99.4% |  3.1 GiB → 3.07 GiB | 57,507 → 57,035 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -1.1% | -36.412 MiB | 99.5% → 99.4% |  3.1 GiB → 3.07 GiB | 57,507 → 57,035 | `accept(Object, Object)`            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88` |
|  -1.1% | -36.412 MiB | 99.5% → 99.4% |  3.1 GiB → 3.07 GiB | 57,505 → 57,033 | `lambda$merge$6(List, List)`        | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -1.1% | -36.412 MiB | 99.5% → 99.4% |  3.1 GiB → 3.07 GiB | 57,505 → 57,033 | `apply(Object, Object)`             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0` |
|  -1.1% | -36.412 MiB | 99.5% → 99.4% |  3.1 GiB → 3.07 GiB | 57,983 → 57,537 | `merge(Map, Map)`                   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -1.1% | -36.411 MiB | 99.5% → 99.4% |  3.1 GiB → 3.07 GiB | 57,973 → 57,531 | `combineResults(Map, Map)`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -1.1% | -36.411 MiB | 99.5% → 99.4% |  3.1 GiB → 3.07 GiB | 57,973 → 57,531 | `combineResults(Object, Object)`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -1.1% | -36.042 MiB |         99.8% | 3.11 GiB → 3.08 GiB | 75,706 → 75,720 | `compute()`                         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  -1.6% | -31.317 MiB | 62.7% → 62.4% | 1.95 GiB → 1.92 GiB | 15,275 → 15,062 | `lambda$run$0(int, List, int)`      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -1.6% | -31.317 MiB | 62.7% → 62.4% | 1.95 GiB → 1.92 GiB | 15,275 → 15,062 | `call()`                            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68` |
| -42.6% | -216.21 KiB |         <0.1% |   508 KiB → 292 KiB |         26 → 27 | `executeOperation(int)`             | `org.renaissance.harness.ExecutionDriver`                              |
| -42.6% | -216.21 KiB |         <0.1% |   508 KiB → 291 KiB |         24 → 25 | `run(BenchmarkContext)`             | `org.renaissance.jdk.concurrent.FjKmeans`                              |
| -91.7% | -57.046 KiB |         <0.1% | 62.2 KiB → 5.13 KiB |               4 | `parse(Seq, Object)`                | `scopt.OptionParser`                                                   |
| -91.7% | -57.046 KiB |         <0.1% | 62.2 KiB → 5.13 KiB |               4 | `parse(String[])`                   | `org.renaissance.harness.ConfigParser`                                 |
| -99.8% | -25.609 KiB |         <0.1% |     25.7 KiB → 56 B |           2 → 1 | `<clinit>()`                        | `scopt.Read$`                                                          |
| -81.9% | -10.468 KiB |         <0.1% | 12.8 KiB → 2.32 KiB |        379 → 99 | `apply(int)`                        | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801125b10` |
| -11.4% |  -8.726 KiB |         <0.1% |   76.7 KiB → 68 KiB |               6 | `createParser(Map)`                 | `org.renaissance.harness.ConfigParser`                                 |
| -11.4% |  -8.726 KiB |         <0.1% |   76.7 KiB → 68 KiB |               6 | `<init>(Map)`                       | `org.renaissance.harness.ConfigParser`                                 |
|  -9.7% |  -4.875 KiB |         <0.1% | 50.4 KiB → 45.5 KiB |           2 → 1 | `<clinit>()`                        | `scopt.OptionParser`                                                   |
| -14.6% |  -3.851 KiB |         <0.1% | 26.3 KiB → 22.5 KiB |           4 → 5 | `<init>(Map)`                       | `org.renaissance.harness.ConfigParser$$anon$1`                         |

# Retained heap profile diff

Retained 8.47 MiB → 6.33 MiB (-2.138 MiB, -25.3%) over 320 samples → 193 samples (27.1 KiB → 33.6 KiB per sample).

| Category         | Change |      Delta |              % |                Size |   Samples |
| ---------------- | -----: | ---------: | -------------: | ------------------: | --------: |
| Standard library | -25.2% | -2.131 MiB | 99.9% → 100.0% | 8.46 MiB → 6.33 MiB | 271 → 145 |
| Ours             | -79.9% |  -7.57 KiB |   0.1% → <0.1% | 9.48 KiB → 1.91 KiB |   49 → 48 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

##### Ours

| Change |  Delta |            % |                Size | Samples | Function                     | Location                                                  |
| -----: | -----: | -----------: | ------------------: | ------: | ---------------------------- | --------------------------------------------------------- |
|  +7.5% | +120 B |        <0.1% | 1.56 KiB → 1.68 KiB | 40 → 43 | `lambda$generateData$4(int)` | `org.renaissance.jdk.concurrent.JavaKMeans`               |
|    new |  +56 B | 0.0% → <0.1% |          0 B → 56 B |   0 → 1 | `vectorSum()`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|    new |  +56 B | 0.0% → <0.1% |          0 B → 56 B |   0 → 1 | `add(double[], double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|    new |  +48 B | 0.0% → <0.1% |          0 B → 48 B |   0 → 1 | `merge(Map, Map)`            | `org.renaissance.jdk.concurrent.JavaKMeans`               |

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

|  Change |      Delta |            % |                Size |  Samples | Function                  | Location                                                   |
| ------: | ---------: | -----------: | ------------------: | -------: | ------------------------- | ---------------------------------------------------------- |
| removed | -7.687 KiB |  0.1% → 0.0% |      7.69 KiB → 0 B |    4 → 0 | `findNearestCentroid()`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -25.6% |     -816 B |        <0.1% | 3.12 KiB → 2.32 KiB | 133 → 99 | `valueOf(double)`         | `java.lang.Double`                                         |
| removed |     -112 B | <0.1% → 0.0% |         112 B → 0 B |    2 → 0 | `createSubtask(int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |      -48 B | <0.1% → 0.0% |          48 B → 0 B |    1 → 0 | `collectClusters(int[])`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### Ours

|  Change |      Delta |            % |           Size | Samples | Function                  | Location                                                   |
| ------: | ---------: | -----------: | -------------: | ------: | ------------------------- | ---------------------------------------------------------- |
| removed | -7.687 KiB |  0.1% → 0.0% | 7.69 KiB → 0 B |   4 → 0 | `findNearestCentroid()`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |     -112 B | <0.1% → 0.0% |    112 B → 0 B |   2 → 0 | `createSubtask(int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |      -48 B | <0.1% → 0.0% |     48 B → 0 B |   1 → 0 | `collectClusters(int[])`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### Standard library

| Change |  Delta |     % |                Size |  Samples | Function          | Location           |
| -----: | -----: | ----: | ------------------: | -------: | ----------------- | ------------------ |
| -25.6% | -816 B | <0.1% | 3.12 KiB → 2.32 KiB | 133 → 99 | `valueOf(double)` | `java.lang.Double` |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

|  Change |        Delta |             % |                Size | Samples | Function                                                      | Location                                                               |
| ------: | -----------: | ------------: | ------------------: | ------: | ------------------------------------------------------------- | ---------------------------------------------------------------------- |
|  +18.3% | +504.203 KiB | 31.9% → 50.4% |  2.7 MiB → 3.19 MiB | 18 → 14 | `invoke()`                                                    | `java.util.concurrent.ForkJoinTask`                                    |
|  +18.3% |  +504.14 KiB | 31.9% → 50.4% |  2.7 MiB → 3.19 MiB | 17 → 12 | `lambda$run$0(int, List, int)`                                | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +18.3% |  +504.14 KiB | 31.9% → 50.4% |  2.7 MiB → 3.19 MiB | 17 → 12 | `call()`                                                      | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68` |
|  +16.8% | +207.539 KiB | 14.2% → 22.2% |  1.2 MiB → 1.41 MiB | 98 → 29 | `join()`                                                      | `java.util.concurrent.ForkJoinTask`                                    |
|  +16.7% | +112.359 KiB |  7.8% → 12.1% |   674 KiB → 786 KiB |  21 → 9 | `<init>(Collection)`                                          | `java.util.ArrayList`                                                  |
|   +7.5% |       +120 B |         <0.1% | 1.56 KiB → 1.68 KiB | 40 → 43 | `lambda$generateData$4(int)`                                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   +7.5% |       +120 B |         <0.1% | 1.56 KiB → 1.68 KiB | 40 → 43 | `apply(int)`                                                  | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801125d48` |
| +133.3% |        +64 B |         <0.1% |        48 B → 112 B |   1 → 2 | `average(List)`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| +133.3% |        +64 B |         <0.1% |        48 B → 112 B |   1 → 2 | `computeClusterAverages()`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| +133.3% |        +64 B |         <0.1% |        48 B → 112 B |   1 → 2 | `computeDirectly()`                                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|     new |        +64 B |  0.0% → <0.1% |          0 B → 64 B |   0 → 2 | `<clinit>()`                                                  | `scala.Predef$`                                                        |
|     new |        +56 B |  0.0% → <0.1% |          0 B → 56 B |   0 → 1 | `vectorSum()`                                                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|     new |        +56 B |  0.0% → <0.1% |          0 B → 56 B |   0 → 1 | `computeDirectly()`                                           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|     new |        +56 B |  0.0% → <0.1% |          0 B → 56 B |   0 → 1 | `add(double[], double[])`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|     new |        +56 B |  0.0% → <0.1% |          0 B → 56 B |   0 → 1 | `combineResults(double[], double[])`                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|     new |        +56 B |  0.0% → <0.1% |          0 B → 56 B |   0 → 1 | `combineResults(Object, Object)`                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|     new |        +48 B |  0.0% → <0.1% |          0 B → 48 B |   0 → 1 | `linkMethodHandleConstant(Class, int, Class, String, Object)` | `java.lang.invoke.MethodHandleNatives`                                 |
|     new |        +32 B |  0.0% → <0.1% |          0 B → 32 B |   0 → 1 | `parse(Seq, Object)`                                          | `scopt.OptionParser`                                                   |
|     new |        +32 B |  0.0% → <0.1% |          0 B → 32 B |   0 → 1 | `parse(String[])`                                             | `org.renaissance.harness.ConfigParser`                                 |
|     new |        +32 B |  0.0% → <0.1% |          0 B → 32 B |   0 → 1 | `createTempDirectory(Path, String, FileAttribute[])`          | `java.nio.file.Files`                                                  |

##### Ours

|  Change |       Delta |             % |                Size | Samples | Function                                        | Location                                                               |
| ------: | ----------: | ------------: | ------------------: | ------: | ----------------------------------------------- | ---------------------------------------------------------------------- |
|  +18.3% | +504.14 KiB | 31.9% → 50.4% |  2.7 MiB → 3.19 MiB | 17 → 12 | `lambda$run$0(int, List, int)`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +18.3% | +504.14 KiB | 31.9% → 50.4% |  2.7 MiB → 3.19 MiB | 17 → 12 | `call()`                                        | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68` |
|   +7.5% |      +120 B |         <0.1% | 1.56 KiB → 1.68 KiB | 40 → 43 | `lambda$generateData$4(int)`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   +7.5% |      +120 B |         <0.1% | 1.56 KiB → 1.68 KiB | 40 → 43 | `apply(int)`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801125d48` |
| +133.3% |       +64 B |         <0.1% |        48 B → 112 B |   1 → 2 | `average(List)`                                 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| +133.3% |       +64 B |         <0.1% |        48 B → 112 B |   1 → 2 | `computeClusterAverages()`                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| +133.3% |       +64 B |         <0.1% |        48 B → 112 B |   1 → 2 | `computeDirectly()`                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|     new |       +56 B |  0.0% → <0.1% |          0 B → 56 B |   0 → 1 | `vectorSum()`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|     new |       +56 B |  0.0% → <0.1% |          0 B → 56 B |   0 → 1 | `computeDirectly()`                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|     new |       +56 B |  0.0% → <0.1% |          0 B → 56 B |   0 → 1 | `add(double[], double[])`                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|     new |       +56 B |  0.0% → <0.1% |          0 B → 56 B |   0 → 1 | `combineResults(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|     new |       +56 B |  0.0% → <0.1% |          0 B → 56 B |   0 → 1 | `combineResults(Object, Object)`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|     new |       +32 B |  0.0% → <0.1% |          0 B → 32 B |   0 → 1 | `parse(Seq, Object)`                            | `scopt.OptionParser`                                                   |
|     new |       +32 B |  0.0% → <0.1% |          0 B → 32 B |   0 → 1 | `parse(String[])`                               | `org.renaissance.harness.ConfigParser`                                 |
|     new |       +32 B |  0.0% → <0.1% |          0 B → 32 B |   0 → 1 | `createScratchDirectory(Path, String, boolean)` | `org.renaissance.core.DirUtils`                                        |
|     new |       +32 B |  0.0% → <0.1% |          0 B → 32 B |   0 → 1 | `createScratchRoot(Path, boolean)`              | `org.renaissance.core.Launcher`                                        |

##### Standard library

| Change |        Delta |             % |               Size | Samples | Function                                                      | Location                               |
| -----: | -----------: | ------------: | -----------------: | ------: | ------------------------------------------------------------- | -------------------------------------- |
| +18.3% | +504.203 KiB | 31.9% → 50.4% | 2.7 MiB → 3.19 MiB | 18 → 14 | `invoke()`                                                    | `java.util.concurrent.ForkJoinTask`    |
| +16.8% | +207.539 KiB | 14.2% → 22.2% | 1.2 MiB → 1.41 MiB | 98 → 29 | `join()`                                                      | `java.util.concurrent.ForkJoinTask`    |
| +16.7% | +112.359 KiB |  7.8% → 12.1% |  674 KiB → 786 KiB |  21 → 9 | `<init>(Collection)`                                          | `java.util.ArrayList`                  |
|    new |        +64 B |  0.0% → <0.1% |         0 B → 64 B |   0 → 2 | `<clinit>()`                                                  | `scala.Predef$`                        |
|    new |        +48 B |  0.0% → <0.1% |         0 B → 48 B |   0 → 1 | `linkMethodHandleConstant(Class, int, Class, String, Object)` | `java.lang.invoke.MethodHandleNatives` |
|    new |        +32 B |  0.0% → <0.1% |         0 B → 32 B |   0 → 1 | `createTempDirectory(Path, String, FileAttribute[])`          | `java.nio.file.Files`                  |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

|  Change |        Delta |             % |                Size |   Samples | Function                                                                                                               | Location                                                               |
| ------: | -----------: | ------------: | ------------------: | --------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|  -36.1% |   -1.978 MiB | 64.6% → 55.2% |  5.47 MiB → 3.5 MiB |   90 → 25 | `addAll(Collection)`                                                                                                   | `java.util.ArrayList`                                                  |
|  -30.6% |   -1.883 MiB | 72.6% → 67.4% | 6.15 MiB → 4.26 MiB |  137 → 41 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  -30.5% |   -1.868 MiB | 72.4% → 67.3% | 6.13 MiB → 4.26 MiB |  111 → 34 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -30.5% |   -1.868 MiB | 72.4% → 67.3% | 6.13 MiB → 4.26 MiB |  111 → 34 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0` |
|  -30.5% |   -1.868 MiB | 72.4% → 67.3% | 6.13 MiB → 4.26 MiB |  111 → 34 | `merge(Object, Object, BiFunction)`                                                                                    | `java.util.HashMap`                                                    |
|  -30.5% |   -1.868 MiB | 72.4% → 67.3% | 6.13 MiB → 4.26 MiB |  111 → 34 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -30.5% |   -1.868 MiB | 72.4% → 67.3% | 6.13 MiB → 4.26 MiB |  111 → 34 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88` |
|  -30.5% |   -1.868 MiB | 72.4% → 67.3% | 6.13 MiB → 4.26 MiB |  111 → 34 | `forEach(BiConsumer)`                                                                                                  | `java.util.HashMap`                                                    |
|  -30.5% |   -1.868 MiB | 72.4% → 67.4% | 6.13 MiB → 4.26 MiB |  112 → 35 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -30.5% |   -1.868 MiB | 72.4% → 67.4% | 6.13 MiB → 4.26 MiB |  112 → 35 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -30.5% |   -1.868 MiB | 72.4% → 67.4% | 6.13 MiB → 4.26 MiB |  112 → 35 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -11.0% | -261.367 KiB | 27.4% → 32.6% | 2.32 MiB → 2.06 MiB | 181 → 148 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|  -11.0% | -261.367 KiB | 27.4% → 32.6% | 2.32 MiB → 2.06 MiB | 181 → 148 | `invoke(Object, Object[])`                                                                                             | `java.lang.reflect.Method`                                             |
|  -11.0% | -261.367 KiB | 27.4% → 32.6% | 2.32 MiB → 2.06 MiB | 181 → 148 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
|  -11.0% | -261.335 KiB | 27.4% → 32.6% | 2.32 MiB → 2.06 MiB | 181 → 149 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
|  -11.0% | -261.335 KiB | 27.4% → 32.6% | 2.32 MiB → 2.06 MiB | 181 → 149 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
| -100.0% | -260.695 KiB |  3.0% → <0.1% |      261 KiB → 96 B |     5 → 3 | `loadClass(String)`                                                                                                    | `java.lang.ClassLoader`                                                |
|  -10.8% | -255.781 KiB | 27.3% → 32.6% | 2.31 MiB → 2.06 MiB | 179 → 145 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|  -10.8% | -255.781 KiB | 27.3% → 32.6% | 2.31 MiB → 2.06 MiB | 179 → 145 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -10.8% | -255.781 KiB | 27.3% → 32.6% | 2.31 MiB → 2.06 MiB | 179 → 145 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000080111efe0` |

##### Ours

|  Change |        Delta |             % |                Size |   Samples | Function                                                                                                               | Location                                                               |
| ------: | -----------: | ------------: | ------------------: | --------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|  -30.6% |   -1.883 MiB | 72.6% → 67.4% | 6.15 MiB → 4.26 MiB |  137 → 41 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  -30.5% |   -1.868 MiB | 72.4% → 67.3% | 6.13 MiB → 4.26 MiB |  111 → 34 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -30.5% |   -1.868 MiB | 72.4% → 67.3% | 6.13 MiB → 4.26 MiB |  111 → 34 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0` |
|  -30.5% |   -1.868 MiB | 72.4% → 67.3% | 6.13 MiB → 4.26 MiB |  111 → 34 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -30.5% |   -1.868 MiB | 72.4% → 67.3% | 6.13 MiB → 4.26 MiB |  111 → 34 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88` |
|  -30.5% |   -1.868 MiB | 72.4% → 67.4% | 6.13 MiB → 4.26 MiB |  112 → 35 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -30.5% |   -1.868 MiB | 72.4% → 67.4% | 6.13 MiB → 4.26 MiB |  112 → 35 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -30.5% |   -1.868 MiB | 72.4% → 67.4% | 6.13 MiB → 4.26 MiB |  112 → 35 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -11.0% | -261.367 KiB | 27.4% → 32.6% | 2.32 MiB → 2.06 MiB | 181 → 148 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|  -11.0% | -261.367 KiB | 27.4% → 32.6% | 2.32 MiB → 2.06 MiB | 181 → 148 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
|  -11.0% | -261.335 KiB | 27.4% → 32.6% | 2.32 MiB → 2.06 MiB | 181 → 149 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
|  -11.0% | -261.335 KiB | 27.4% → 32.6% | 2.32 MiB → 2.06 MiB | 181 → 149 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
|  -10.8% | -255.781 KiB | 27.3% → 32.6% | 2.31 MiB → 2.06 MiB | 179 → 145 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|  -10.8% | -255.781 KiB | 27.3% → 32.6% | 2.31 MiB → 2.06 MiB | 179 → 145 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -10.8% | -255.781 KiB | 27.3% → 32.6% | 2.31 MiB → 2.06 MiB | 179 → 145 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000080111efe0` |
|  -10.8% | -255.781 KiB | 27.3% → 32.6% | 2.31 MiB → 2.06 MiB | 179 → 145 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -10.8% | -255.726 KiB | 27.3% → 32.6% | 2.31 MiB → 2.06 MiB | 180 → 148 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
| -100.0% | -255.101 KiB |  2.9% → <0.1% |      255 KiB → 48 B |     4 → 1 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                              |
| -100.0% | -255.101 KiB |  2.9% → <0.1% |      255 KiB → 72 B |     5 → 2 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |
|  -91.3% |  -14.835 KiB |  0.2% → <0.1% | 16.2 KiB → 1.41 KiB |    22 → 3 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |

##### Standard library

|  Change |        Delta |             % |                Size |   Samples | Function                            | Location                             |
| ------: | -----------: | ------------: | ------------------: | --------: | ----------------------------------- | ------------------------------------ |
|  -36.1% |   -1.978 MiB | 64.6% → 55.2% |  5.47 MiB → 3.5 MiB |   90 → 25 | `addAll(Collection)`                | `java.util.ArrayList`                |
|  -30.5% |   -1.868 MiB | 72.4% → 67.3% | 6.13 MiB → 4.26 MiB |  111 → 34 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`                  |
|  -30.5% |   -1.868 MiB | 72.4% → 67.3% | 6.13 MiB → 4.26 MiB |  111 → 34 | `forEach(BiConsumer)`               | `java.util.HashMap`                  |
|  -11.0% | -261.367 KiB | 27.4% → 32.6% | 2.32 MiB → 2.06 MiB | 181 → 148 | `invoke(Object, Object[])`          | `java.lang.reflect.Method`           |
| -100.0% | -260.695 KiB |  3.0% → <0.1% |      261 KiB → 96 B |     5 → 3 | `loadClass(String)`                 | `java.lang.ClassLoader`              |
|  -10.8% | -255.781 KiB | 27.3% → 32.6% | 2.31 MiB → 2.06 MiB | 179 → 145 | `foreach(Function1)`                | `scala.collection.immutable.List`    |
|   -0.3% |   -7.101 KiB | 24.4% → 32.6% | 2.07 MiB → 2.06 MiB |    18 → 4 | `add(Object)`                       | `java.util.ArrayList`                |
|  -25.6% |       -816 B |         <0.1% | 3.12 KiB → 2.32 KiB |  133 → 99 | `valueOf(double)`                   | `java.lang.Double`                   |
|     ~0% |       -736 B | 24.4% → 32.6% | 2.07 MiB → 2.06 MiB | 175 → 143 | `collect(Collector)`                | `java.util.stream.ReferencePipeline` |
|  -14.5% |       -696 B |          0.1% |    4.68 KiB → 4 KiB | 173 → 142 | `toArray(IntFunction)`              | `java.util.stream.ReferencePipeline` |
|  -65.7% |       -184 B |         <0.1% |        280 B → 96 B |     2 → 3 | `<init>()`                          | `java.util.logging.SimpleFormatter`  |
| removed |        -40 B |  <0.1% → 0.0% |          40 B → 0 B |     1 → 0 | `<init>(Collection)`                | `java.util.LinkedHashSet`            |
| removed |        -40 B |  <0.1% → 0.0% |          40 B → 0 B |     1 → 0 | `apply(Function0)`                  | `scala.util.Try$`                    |
| removed |        -16 B |  <0.1% → 0.0% |          16 B → 0 B |     1 → 0 | `<init>(Map)`                       | `java.util.HashMap`                  |

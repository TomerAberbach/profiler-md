# Allocated heap profile diff

Allocated 3.35 GB → 3.31 GB (-37.2 MB, -1.1%) over 76,154 samples → 76,122 samples (44 kB → 43.5 kB per sample).

| Category | Change |    Delta |     % |              Size |         Samples |
| -------- | -----: | -------: | ----: | ----------------: | --------------: |
| stdlib   |  -1.1% | -37.4 MB | 99.8% |  3.34 GB → 3.3 GB | 70,926 → 70,684 |
| ours     |  +3.7% |  +249 kB |  0.2% | 6.73 MB → 6.98 MB |   5,228 → 5,438 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

| Change |    Delta |            % |              Size |       Samples | Function                             | Location                                                   |
| -----: | -------: | -----------: | ----------------: | ------------: | ------------------------------------ | ---------------------------------------------------------- |
|  +3.7% |  +246 kB |         0.2% |  6.65 MB → 6.9 MB | 3,375 → 3,500 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +41.6% | +3.19 kB |        <0.1% | 7.67 kB → 10.9 kB |     137 → 194 | `vectorSum()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +14.0% |  +1.4 kB |        <0.1% |   10 kB → 11.4 kB |     179 → 204 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +16.1% |   +840 B |        <0.1% | 5.21 kB → 6.05 kB |     217 → 252 | `lambda$merge$6(List, List)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| +17.8% |   +840 B |        <0.1% | 4.73 kB → 5.57 kB |     197 → 232 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +4.0% |   +720 B |        <0.1% | 17.8 kB → 18.5 kB |     371 → 386 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +9.7% |   +672 B |        <0.1% | 6.96 kB → 7.63 kB |     145 → 159 | `merge(Map, Map)`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  +7.5% |   +120 B |        <0.1% |  1.6 kB → 1.72 kB |       40 → 43 | `lambda$generateData$4(int)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|    new |    +80 B | 0.0% → <0.1% |        0 B → 80 B |         0 → 2 | `lambda$boxed$0(int)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| +87.5% |    +56 B |        <0.1% |      64 B → 120 B |         2 → 3 | `lambda$run$0(int, List, int)`       | `org.renaissance.jdk.concurrent.JavaKMeans`                |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |    Delta |            % |              Size |   Samples | Function                   | Location                                                   |
| ------: | -------: | -----------: | ----------------: | --------: | -------------------------- | ---------------------------------------------------------- |
|  -22.1% | -2.21 kB |        <0.1% | 9.98 kB → 7.78 kB | 208 → 162 | `collectClusters(int[])`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -12.0% | -2.13 kB |        <0.1% | 17.7 kB → 15.6 kB | 316 → 278 | `createSubtask(int, int)`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -24.3% |   -840 B |        <0.1% | 3.46 kB → 2.62 kB | 144 → 109 | `valueOf(double)`          | `java.lang.Double`                                         |
|  -50.0% |   -432 B |        <0.1% |     864 B → 432 B |    18 → 9 | `createSubtask(int, int)`  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -25.0% |   -192 B |        <0.1% |     768 B → 576 B |   16 → 12 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| removed |   -168 B | <0.1% → 0.0% |       168 B → 0 B |     3 → 0 | `div(double[], int)`       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -26.9% |   -168 B |        <0.1% |     624 B → 456 B |   26 → 19 | `range(int, int)`          | `java.util.stream.IntStream`                               |
| removed |    -96 B | <0.1% → 0.0% |        96 B → 0 B |     2 → 0 | `average(List)`            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|  Change |    Delta |           % |              Size |         Samples | Function                                                                                                               | Location                                                               |
| ------: | -------: | ----------: | ----------------: | --------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|  +10.2% |  +969 kB |        0.3% | 9.48 MB → 10.4 MB | 12,439 → 12,749 | `add(Object)`                                                                                                          | `java.util.ArrayList`                                                  |
|  +18.1% |  +828 kB | 0.1% → 0.2% |  4.57 MB → 5.4 MB |       382 → 325 | `generateData(int, int, int)`                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +18.1% |  +828 kB | 0.1% → 0.2% |  4.58 MB → 5.4 MB |       383 → 325 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  +18.1% |  +828 kB | 0.1% → 0.2% |  4.58 MB → 5.4 MB |       383 → 325 | `collect(Collector)`                                                                                                   | `java.util.stream.ReferencePipeline`                                   |
|  +12.8% |  +700 kB |        0.2% | 5.46 MB → 6.16 MB |       435 → 390 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +12.2% |  +623 kB |        0.2% | 5.09 MB → 5.72 MB |       409 → 353 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +12.2% |  +623 kB |        0.2% | 5.09 MB → 5.72 MB |       409 → 353 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000080111efe0` |
|  +12.2% |  +623 kB |        0.2% | 5.09 MB → 5.72 MB |       409 → 353 | `foreach(Function1)`                                                                                                   | `scala.collection.immutable.List`                                      |
|  +12.2% |  +623 kB |        0.2% | 5.09 MB → 5.72 MB |       409 → 353 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +11.0% |  +621 kB |        0.2% | 5.62 MB → 6.24 MB |       444 → 396 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
|  +11.0% |  +621 kB |        0.2% | 5.62 MB → 6.24 MB |       444 → 396 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
|  +11.0% |  +621 kB |        0.2% | 5.62 MB → 6.24 MB |       444 → 394 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
|  +11.9% |  +607 kB |        0.2% |  5.09 MB → 5.7 MB |       409 → 352 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|  +10.8% |  +604 kB |        0.2% | 5.62 MB → 6.22 MB |       443 → 393 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|  +10.8% |  +604 kB |        0.2% | 5.62 MB → 6.22 MB |       443 → 393 | `invoke(Object, Object[])`                                                                                             | `java.lang.reflect.Method`                                             |
|   +3.3% |  +384 kB | 0.3% → 0.4% |   11.6 MB → 12 MB | 16,653 → 17,059 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   +3.7% |  +246 kB |        0.2% |  6.65 MB → 6.9 MB |   3,375 → 3,500 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| +213.7% |  +146 kB |       <0.1% |  68.2 kB → 214 kB |         11 → 21 | `<clinit>()`                                                                                                           | `scala.Predef$`                                                        |
|   +2.8% |  +138 kB | 0.1% → 0.2% | 4.95 MB → 5.09 MB | 13,278 → 13,559 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| +117.3% | +76.5 kB |       <0.1% |  65.2 kB → 142 kB |           3 → 5 | `apply(Seq)`                                                                                                           | `scala.collection.immutable.Map$`                                      |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

| Change |    Delta |             % |              Size |         Samples | Function                            | Location                                                               |
| -----: | -------: | ------------: | ----------------: | --------------: | ----------------------------------- | ---------------------------------------------------------------------- |
|  -1.1% | -38.2 MB | 99.5% → 99.4% | 3.33 GB → 3.29 GB | 57,507 → 57,035 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`                                                    |
|  -1.1% | -38.2 MB | 99.5% → 99.4% | 3.33 GB → 3.29 GB | 57,507 → 57,035 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -1.1% | -38.2 MB | 99.5% → 99.4% | 3.33 GB → 3.29 GB | 57,507 → 57,035 | `accept(Object, Object)`            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88` |
|  -1.1% | -38.2 MB | 99.5% → 99.4% | 3.33 GB → 3.29 GB | 57,507 → 57,035 | `forEach(BiConsumer)`               | `java.util.HashMap`                                                    |
|  -1.1% | -38.2 MB | 99.5% → 99.4% | 3.33 GB → 3.29 GB | 57,505 → 57,033 | `lambda$merge$6(List, List)`        | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -1.1% | -38.2 MB | 99.5% → 99.4% | 3.33 GB → 3.29 GB | 57,505 → 57,033 | `apply(Object, Object)`             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0` |
|  -1.1% | -38.2 MB | 99.5% → 99.4% | 3.33 GB → 3.29 GB | 57,983 → 57,537 | `merge(Map, Map)`                   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -1.1% | -38.2 MB | 99.5% → 99.4% | 3.33 GB → 3.29 GB | 57,973 → 57,531 | `combineResults(Map, Map)`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -1.1% | -38.2 MB | 99.5% → 99.4% | 3.33 GB → 3.29 GB | 57,973 → 57,531 | `combineResults(Object, Object)`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -1.1% | -37.8 MB |         99.8% | 3.34 GB → 3.31 GB | 75,706 → 75,720 | `compute()`                         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  -1.4% | -36.9 MB | 81.0% → 80.8% | 2.71 GB → 2.67 GB | 42,853 → 42,397 | `addAll(Collection)`                | `java.util.ArrayList`                                                  |
|  -1.6% | -32.8 MB | 62.7% → 62.4% |  2.1 GB → 2.06 GB | 15,275 → 15,062 | `lambda$run$0(int, List, int)`      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -1.6% | -32.8 MB | 62.7% → 62.4% |  2.1 GB → 2.06 GB | 15,275 → 15,062 | `call()`                            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68` |
|  -1.6% | -32.8 MB | 62.7% → 62.4% |  2.1 GB → 2.07 GB | 15,634 → 15,462 | `invoke()`                          | `java.util.concurrent.ForkJoinTask`                                    |
|  -1.5% | -14.8 MB | 30.4% → 30.3% |    1.02 GB → 1 GB | 60,382 → 60,435 | `join()`                            | `java.util.concurrent.ForkJoinTask`                                    |
|  -0.2% | -1.27 MB | 18.5% → 18.7% |   620 MB → 619 MB | 14,435 → 14,384 | `<init>(Collection)`                | `java.util.ArrayList`                                                  |
| -23.8% |  -240 kB |         <0.1% |  1.01 MB → 767 kB |         45 → 54 | `loadClass(String)`                 | `java.lang.ClassLoader`                                                |
| -42.6% |  -221 kB |         <0.1% |   520 kB → 299 kB |         26 → 27 | `executeOperation(int)`             | `org.renaissance.harness.ExecutionDriver`                              |
| -42.6% |  -221 kB |         <0.1% |   520 kB → 298 kB |         24 → 25 | `run(BenchmarkContext)`             | `org.renaissance.jdk.concurrent.FjKmeans`                              |
| -86.9% |  -102 kB |         <0.1% |  118 kB → 15.5 kB |           9 → 5 | `map(Function1)`                    | `scala.collection.immutable.Range`                                     |

# Retained heap profile diff

Retained 8.88 MB → 6.64 MB (-2.24 MB, -25.3%) over 320 samples → 193 samples (27.7 kB → 34.4 kB per sample).

| Category | Change |    Delta |              % |              Size |   Samples |
| -------- | -----: | -------: | -------------: | ----------------: | --------: |
| stdlib   | -25.2% | -2.23 MB | 99.9% → 100.0% | 8.87 MB → 6.63 MB | 271 → 145 |
| ours     | -79.9% | -7.75 kB |   0.1% → <0.1% |  9.7 kB → 1.95 kB |   49 → 48 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

| Change |  Delta |            % |             Size | Samples | Function                     | Location                                                  |
| -----: | -----: | -----------: | ---------------: | ------: | ---------------------------- | --------------------------------------------------------- |
|  +7.5% | +120 B |        <0.1% | 1.6 kB → 1.72 kB | 40 → 43 | `lambda$generateData$4(int)` | `org.renaissance.jdk.concurrent.JavaKMeans`               |
|    new |  +56 B | 0.0% → <0.1% |       0 B → 56 B |   0 → 1 | `vectorSum()`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|    new |  +56 B | 0.0% → <0.1% |       0 B → 56 B |   0 → 1 | `add(double[], double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|    new |  +48 B | 0.0% → <0.1% |       0 B → 48 B |   0 → 1 | `merge(Map, Map)`            | `org.renaissance.jdk.concurrent.JavaKMeans`               |

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

|  Change |    Delta |            % |              Size |  Samples | Function                  | Location                                                   |
| ------: | -------: | -----------: | ----------------: | -------: | ------------------------- | ---------------------------------------------------------- |
| removed | -7.87 kB |  0.1% → 0.0% |     7.87 kB → 0 B |    4 → 0 | `findNearestCentroid()`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -25.6% |   -816 B |        <0.1% | 3.19 kB → 2.38 kB | 133 → 99 | `valueOf(double)`         | `java.lang.Double`                                         |
| removed |   -112 B | <0.1% → 0.0% |       112 B → 0 B |    2 → 0 | `createSubtask(int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |    -48 B | <0.1% → 0.0% |        48 B → 0 B |    1 → 0 | `collectClusters(int[])`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

|  Change |   Delta |             % |              Size | Samples | Function                                                      | Location                                                               |
| ------: | ------: | ------------: | ----------------: | ------: | ------------------------------------------------------------- | ---------------------------------------------------------------------- |
|  +18.3% | +516 kB | 31.9% → 50.4% | 2.83 MB → 3.34 MB | 18 → 14 | `invoke()`                                                    | `java.util.concurrent.ForkJoinTask`                                    |
|  +18.3% | +516 kB | 31.9% → 50.4% | 2.83 MB → 3.34 MB | 17 → 12 | `lambda$run$0(int, List, int)`                                | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +18.3% | +516 kB | 31.9% → 50.4% | 2.83 MB → 3.34 MB | 17 → 12 | `call()`                                                      | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68` |
|  +16.8% | +213 kB | 14.2% → 22.2% | 1.26 MB → 1.47 MB | 98 → 29 | `join()`                                                      | `java.util.concurrent.ForkJoinTask`                                    |
|  +16.7% | +115 kB |  7.8% → 12.1% |   690 kB → 805 kB |  21 → 9 | `<init>(Collection)`                                          | `java.util.ArrayList`                                                  |
|   +7.5% |  +120 B |         <0.1% |  1.6 kB → 1.72 kB | 40 → 43 | `lambda$generateData$4(int)`                                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   +7.5% |  +120 B |         <0.1% |  1.6 kB → 1.72 kB | 40 → 43 | `apply(int)`                                                  | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801125d48` |
| +133.3% |   +64 B |         <0.1% |      48 B → 112 B |   1 → 2 | `average(List)`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| +133.3% |   +64 B |         <0.1% |      48 B → 112 B |   1 → 2 | `computeClusterAverages()`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| +133.3% |   +64 B |         <0.1% |      48 B → 112 B |   1 → 2 | `computeDirectly()`                                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|     new |   +64 B |  0.0% → <0.1% |        0 B → 64 B |   0 → 2 | `<clinit>()`                                                  | `scala.Predef$`                                                        |
|     new |   +56 B |  0.0% → <0.1% |        0 B → 56 B |   0 → 1 | `vectorSum()`                                                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|     new |   +56 B |  0.0% → <0.1% |        0 B → 56 B |   0 → 1 | `computeDirectly()`                                           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|     new |   +56 B |  0.0% → <0.1% |        0 B → 56 B |   0 → 1 | `add(double[], double[])`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|     new |   +56 B |  0.0% → <0.1% |        0 B → 56 B |   0 → 1 | `combineResults(double[], double[])`                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|     new |   +56 B |  0.0% → <0.1% |        0 B → 56 B |   0 → 1 | `combineResults(Object, Object)`                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|     new |   +48 B |  0.0% → <0.1% |        0 B → 48 B |   0 → 1 | `linkMethodHandleConstant(Class, int, Class, String, Object)` | `java.lang.invoke.MethodHandleNatives`                                 |
|     new |   +32 B |  0.0% → <0.1% |        0 B → 32 B |   0 → 1 | `parse(Seq, Object)`                                          | `scopt.OptionParser`                                                   |
|     new |   +32 B |  0.0% → <0.1% |        0 B → 32 B |   0 → 1 | `parse(String[])`                                             | `org.renaissance.harness.ConfigParser`                                 |
|     new |   +32 B |  0.0% → <0.1% |        0 B → 32 B |   0 → 1 | `createTempDirectory(Path, String, FileAttribute[])`          | `java.nio.file.Files`                                                  |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

|  Change |    Delta |             % |              Size |   Samples | Function                                                                                                               | Location                                                               |
| ------: | -------: | ------------: | ----------------: | --------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|  -36.1% | -2.07 MB | 64.6% → 55.2% | 5.74 MB → 3.67 MB |   90 → 25 | `addAll(Collection)`                                                                                                   | `java.util.ArrayList`                                                  |
|  -30.6% | -1.97 MB | 72.6% → 67.4% | 6.45 MB → 4.47 MB |  137 → 41 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  -30.5% | -1.96 MB | 72.4% → 67.3% | 6.43 MB → 4.47 MB |  111 → 34 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -30.5% | -1.96 MB | 72.4% → 67.3% | 6.43 MB → 4.47 MB |  111 → 34 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0` |
|  -30.5% | -1.96 MB | 72.4% → 67.3% | 6.43 MB → 4.47 MB |  111 → 34 | `merge(Object, Object, BiFunction)`                                                                                    | `java.util.HashMap`                                                    |
|  -30.5% | -1.96 MB | 72.4% → 67.3% | 6.43 MB → 4.47 MB |  111 → 34 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -30.5% | -1.96 MB | 72.4% → 67.3% | 6.43 MB → 4.47 MB |  111 → 34 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88` |
|  -30.5% | -1.96 MB | 72.4% → 67.3% | 6.43 MB → 4.47 MB |  111 → 34 | `forEach(BiConsumer)`                                                                                                  | `java.util.HashMap`                                                    |
|  -30.5% | -1.96 MB | 72.4% → 67.4% | 6.43 MB → 4.47 MB |  112 → 35 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -30.5% | -1.96 MB | 72.4% → 67.4% | 6.43 MB → 4.47 MB |  112 → 35 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -30.5% | -1.96 MB | 72.4% → 67.4% | 6.43 MB → 4.47 MB |  112 → 35 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -11.0% |  -268 kB | 27.4% → 32.6% | 2.43 MB → 2.17 MB | 181 → 148 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|  -11.0% |  -268 kB | 27.4% → 32.6% | 2.43 MB → 2.17 MB | 181 → 148 | `invoke(Object, Object[])`                                                                                             | `java.lang.reflect.Method`                                             |
|  -11.0% |  -268 kB | 27.4% → 32.6% | 2.43 MB → 2.17 MB | 181 → 148 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
|  -11.0% |  -268 kB | 27.4% → 32.6% | 2.43 MB → 2.17 MB | 181 → 149 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
|  -11.0% |  -268 kB | 27.4% → 32.6% | 2.43 MB → 2.17 MB | 181 → 149 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
| -100.0% |  -267 kB |  3.0% → <0.1% |     267 kB → 96 B |     5 → 3 | `loadClass(String)`                                                                                                    | `java.lang.ClassLoader`                                                |
|  -10.8% |  -262 kB | 27.3% → 32.6% | 2.43 MB → 2.17 MB | 179 → 145 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|  -10.8% |  -262 kB | 27.3% → 32.6% | 2.43 MB → 2.17 MB | 179 → 145 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -10.8% |  -262 kB | 27.3% → 32.6% | 2.43 MB → 2.17 MB | 179 → 145 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000080111efe0` |

# Sampling profile diff

1,684 samples → 1,605 samples (-79 samples, -4.7%).

| Category | Change | Delta |             % |       Samples |
| -------- | -----: | ----: | ------------: | ------------: |
| ours     |  -7.3% |  -114 | 92.5% → 90.0% | 1,558 → 1,444 |
| stdlib   | +27.8% |   +35 |  7.5% → 10.0% |     126 → 161 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                            | Location                                                   |
| ------: | ----: | ------------: | --------: | ----------------------------------- | ---------------------------------------------------------- |
|   +3.0% |   +20 | 40.1% → 43.4% | 676 → 696 | `accumulate(Double[], double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +28.6% |   +12 |   2.5% → 3.4% |   42 → 54 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`                                        |
|  +87.5% |    +7 |   0.5% → 0.9% |    8 → 15 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`                                        |
|  +18.5% |    +5 |   1.6% → 2.0% |   27 → 32 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     new |    +3 |   0.0% → 0.2% |     0 → 3 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `createSubtask(int, int)`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +100.0% |    +1 |          0.1% |     1 → 2 | `compute()`                         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `forkThreshold()`                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                             | Location                                                                              |
| ------: | ----: | ------------: | --------: | ------------------------------------ | ------------------------------------------------------------------------------------- |
|  -16.3% |   -70 | 25.5% → 22.4% | 429 → 359 | `distance(Double[], Double[])`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -18.7% |   -39 | 12.4% → 10.6% | 209 → 170 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -15.5% |   -18 |   6.9% → 6.1% |  116 → 98 | `collectClusters(int[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -93.3% |   -14 |   0.9% → 0.1% |    15 → 1 | `apply(Object)`                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001204b38` |
| removed |    -3 |   0.2% → 0.0% |     3 → 0 | `join()`                             | `java.util.concurrent.ForkJoinTask`                                                   |
| removed |    -3 |   0.2% → 0.0% |     3 → 0 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % |   Samples | Function                                                    | Location                                                               |
| ------: | ----: | ------------: | --------: | ----------------------------------------------------------- | ---------------------------------------------------------------------- |
|   +8.8% |   +24 | 16.3% → 18.6% | 274 → 298 | `computeDirectly()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   +7.0% |   +21 | 17.7% → 19.9% | 298 → 319 | `invoke()`                                                  | `java.util.concurrent.ForkJoinTask`                                    |
|   +3.0% |   +20 | 40.1% → 43.4% | 676 → 696 | `accumulate(Double[], double[])`                            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   +7.1% |   +20 | 16.7% → 18.8% | 281 → 301 | `computeClusterAverages()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   +2.5% |   +19 | 45.0% → 48.4% | 758 → 777 | `vectorSum()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   +2.5% |   +19 | 45.0% → 48.4% | 758 → 777 | `computeDirectly()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   +6.8% |   +19 | 16.7% → 18.7% | 281 → 300 | `average(List)`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  +84.6% |   +11 |   0.8% → 1.5% |   13 → 24 | `merge(Map, Map)`                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +84.6% |   +11 |   0.8% → 1.5% |   13 → 24 | `combineResults(Map, Map)`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  +84.6% |   +11 |   0.8% → 1.5% |   13 → 24 | `combineResults(Object, Object)`                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| +125.0% |   +10 |   0.5% → 1.1% |    8 → 18 | `lambda$merge$7(Map, Object, List)`                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| +125.0% |   +10 |   0.5% → 1.1% |    8 → 18 | `accept(Object, Object)`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88` |
| +125.0% |   +10 |   0.5% → 1.1% |    8 → 18 | `forEach(BiConsumer)`                                       | `java.util.HashMap`                                                    |
|  +87.5% |    +7 |   0.5% → 0.9% |    8 → 15 | `merge(Object, Object, BiFunction)`                         | `java.util.HashMap`                                                    |
|  +13.2% |    +5 |   2.3% → 2.7% |   38 → 43 | `add(Object)`                                               | `java.util.ArrayList`                                                  |
|  +18.2% |    +4 |   1.3% → 1.6% |   22 → 26 | `call()`                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0` |
|  +30.0% |    +3 |   0.6% → 0.8% |   10 → 13 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`                                        |
|  +30.0% |    +3 |   0.6% → 0.8% |   10 → 13 | `launchHarnessClass(String, String[])`                      | `org.renaissance.core.Launcher`                                        |
|  +30.0% |    +3 |   0.6% → 0.8% |   10 → 13 | `main(String[])`                                            | `org.renaissance.core.Launcher`                                        |
| +300.0% |    +3 |   0.1% → 0.2% |     1 → 4 | `loadClass(String)`                                         | `java.lang.ClassLoader`                                                |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % |       Samples | Function                                | Location                                                                              |
| ------: | ----: | ------------: | ------------: | --------------------------------------- | ------------------------------------------------------------------------------------- |
|  -13.9% |  -122 | 52.2% → 47.2% |     879 → 757 | `computeDirectly()`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -17.1% |  -109 | 37.9% → 33.0% |     638 → 529 | `findNearestCentroid()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   -5.5% |   -90 | 98.0% → 97.2% | 1,650 → 1,560 | `join()`                                | `java.util.concurrent.ForkJoinTask`                                                   |
|   -5.1% |   -85 | 99.3% → 98.9% | 1,673 → 1,588 | `compute()`                             | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
|  -16.3% |   -70 | 25.5% → 22.4% |     429 → 359 | `distance(Double[], Double[])`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   -8.4% |   -18 | 12.7% → 12.2% |     214 → 196 | `collectClusters(int[])`                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -94.4% |   -17 |   1.1% → 0.1% |        18 → 1 | `apply(Object)`                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001204b38` |
|   -8.3% |    -5 |   3.6% → 3.4% |       60 → 55 | `computeIfAbsent(Object, Function)`     | `java.util.HashMap`                                                                   |
| removed |    -3 |   0.2% → 0.0% |         3 → 0 | `lambda$collectClusters$0(Double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -25.0% |    -1 |          0.2% |         4 → 3 | `copy(InputStream, Path, CopyOption[])` | `java.nio.file.Files`                                                                 |
|  -25.0% |    -1 |          0.2% |         4 → 3 | `extractResource(String, Path)`         | `org.renaissance.core.ResourceUtils`                                                  |
|  -25.0% |    -1 |          0.2% |         4 → 3 | `extractResources(Iterable, Path)`      | `org.renaissance.core.ResourceUtils`                                                  |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `<clinit>()`                            | `scala.runtime.LazyVals$`                                                             |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `<clinit>()`                            | `scopt.OptionParser`                                                                  |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `createParser(Map)`                     | `org.renaissance.harness.ConfigParser`                                                |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `<init>(Map)`                           | `org.renaissance.harness.ConfigParser`                                                |
|  -50.0% |    -1 |          0.1% |         2 → 1 | `get(int)`                              | `java.util.ArrayList`                                                                 |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `createSubtask(int, int)`               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `add(double[], double[])`               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `combineResults(double[], double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |

# Allocated heap profile diff

Allocated 40.6 GB → 40.2 GB (-445 MB, -1.1%) over 1,988 samples → 1,980 samples (20.4 MB → 20.3 MB per sample).

| Category | Change |    Delta |             % |              Size |       Samples |
| -------- | -----: | -------: | ------------: | ----------------: | ------------: |
| stdlib   |  -1.2% |  -462 MB | 95.5% → 95.4% | 38.8 GB → 38.3 GB | 1,893 → 1,868 |
| ours     |  +0.9% | +17.2 MB |   4.5% → 4.6% | 1.85 GB → 1.86 GB |      94 → 110 |
| native   |  +6.3% |   +120 B |         <0.1% |  1.9 kB → 2.02 kB |         1 → 2 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|  Change |    Delta |            % |              Size | Samples | Function                             | Location                                                   |
| ------: | -------: | -----------: | ----------------: | ------: | ------------------------------------ | ---------------------------------------------------------- |
| +473.8% |  +213 MB |  0.1% → 0.6% |    45 MB → 258 MB |   5 → 6 | `collectClusters(int[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +71.3% |  +142 MB |  0.5% → 0.8% |   199 MB → 341 MB |  8 → 12 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +28.5% | +24.5 MB |  0.2% → 0.3% |  85.8 MB → 110 MB |   3 → 4 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +429.9% | +3.41 MB |        <0.1% |  794 kB → 4.21 MB |  2 → 12 | `lambda$generateData$4(int)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| +481.8% | +2.71 MB |        <0.1% |  563 kB → 3.28 MB |       1 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +22.9% | +2.05 MB |        <0.1% |   8.95 MB → 11 MB | 22 → 27 | `valueOf(double)`                    | `java.lang.Double`                                         |
|   +1.0% |  +754 kB |         0.2% | 73.9 MB → 74.6 MB |   4 → 1 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     new |  +467 kB | 0.0% → <0.1% |      0 B → 467 kB |   0 → 2 | `computeClusterAverages()`           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|     new |  +397 kB | 0.0% → <0.1% |      0 B → 397 kB |   0 → 1 | `range(int, int)`                    | `java.util.stream.IntStream`                               |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |    Delta |            % |              Size | Samples | Function                     | Location                                                   |
| ------: | -------: | -----------: | ----------------: | ------: | ---------------------------- | ---------------------------------------------------------- |
|  -12.6% |  -151 MB |  2.9% → 2.6% |  1.2 GB → 1.05 GB |      60 | `findNearestCentroid()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -94.5% | -88.1 MB | 0.2% → <0.1% | 93.3 MB → 5.11 MB |   2 → 5 | `merge(Map, Map)`            | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -87.0% | -73.8 MB | 0.2% → <0.1% |   84.8 MB → 11 MB |   4 → 2 | `vectorSum()`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -85.1% | -55.2 MB | 0.2% → <0.1% | 64.9 MB → 9.67 MB |   4 → 5 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed | -1.98 MB | <0.1% → 0.0% |     1.98 MB → 0 B |   1 → 0 | `createSubtask(int, int)`    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|  Change |    Delta |             % |              Size |       Samples | Function                                         | Location                                                                              |
| ------: | -------: | ------------: | ----------------: | ------------: | ------------------------------------------------ | ------------------------------------------------------------------------------------- |
|   +7.6% | +1.82 GB | 58.9% → 64.0% | 23.9 GB → 25.7 GB | 1,155 → 1,135 | `addAll(Collection)`                             | `java.util.ArrayList`                                                                 |
|  +31.5% | +1.24 GB |  9.7% → 12.9% | 3.95 GB → 5.19 GB |     224 → 244 | `collectClusters(int[])`                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +21.2% | +1.09 GB | 12.7% → 15.5% | 5.14 GB → 6.23 GB |     284 → 304 | `computeDirectly()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +25.3% |  +963 MB |  9.4% → 11.9% | 3.81 GB → 4.77 GB |     215 → 226 | `add(Object)`                                    | `java.util.ArrayList`                                                                 |
|  +71.3% |  +142 MB |   0.5% → 0.8% |   199 MB → 341 MB |        8 → 12 | `createSubtask(int, int)`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  +72.3% | +65.2 MB |   0.2% → 0.4% |  90.2 MB → 155 MB |        4 → 12 | `computeIfAbsent(Object, Function)`              | `java.util.HashMap`                                                                   |
|  +29.9% | +25.8 MB |   0.2% → 0.3% |  86.5 MB → 112 MB |             7 | `computeClusterAverages()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|  +29.9% | +25.8 MB |   0.2% → 0.3% |  86.5 MB → 112 MB |             7 | `computeDirectly()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|  +29.3% | +25.3 MB |   0.2% → 0.3% |  86.5 MB → 112 MB |         7 → 5 | `average(List)`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|  +28.5% | +24.5 MB |   0.2% → 0.3% |  85.8 MB → 110 MB |         3 → 4 | `lambda$collectClusters$0(Double[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +28.5% | +24.5 MB |   0.2% → 0.3% |  85.8 MB → 110 MB |         3 → 4 | `apply(Object)`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001204b38` |
| +429.9% | +3.41 MB |         <0.1% |  794 kB → 4.21 MB |        2 → 12 | `apply(int)`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a1d48`                |
| +429.9% | +3.41 MB |         <0.1% |  794 kB → 4.21 MB |        2 → 12 | `lambda$generateData$4(int)`                     | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
| +481.8% | +2.71 MB |         <0.1% |  563 kB → 3.28 MB |             1 | `add(double[], double[])`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| +481.8% | +2.71 MB |         <0.1% |  563 kB → 3.28 MB |             1 | `combineResults(double[], double[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| +481.8% | +2.71 MB |         <0.1% |  563 kB → 3.28 MB |             1 | `combineResults(Object, Object)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  +22.9% | +2.05 MB |         <0.1% |   8.95 MB → 11 MB |       22 → 27 | `apply(int)`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a1b10`                |
|  +22.9% | +2.05 MB |         <0.1% |   8.95 MB → 11 MB |       22 → 27 | `valueOf(double)`                                | `java.lang.Double`                                                                    |
|  +22.9% | +2.05 MB |         <0.1% |   8.95 MB → 11 MB |       22 → 27 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|     new | +1.27 MB |  0.0% → <0.1% |     0 B → 1.27 MB |         0 → 1 | `linkToTargetMethod(Object, Object)`             | `java.lang.invoke.Invokers$Holder`                                                    |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

| Change |    Delta |             % |              Size |       Samples | Function                            | Location                                                               |
| -----: | -------: | ------------: | ----------------: | ------------: | ----------------------------------- | ---------------------------------------------------------------------- |
| -30.3% | -3.17 GB | 25.7% → 18.1% | 10.5 GB → 7.29 GB |     390 → 373 | `<init>(Collection)`                | `java.util.ArrayList`                                                  |
|  -4.6% | -1.61 GB | 85.9% → 82.8% | 34.9 GB → 33.3 GB | 1,561 → 1,531 | `combineResults(Map, Map)`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -4.6% | -1.61 GB | 85.9% → 82.8% | 34.9 GB → 33.3 GB | 1,561 → 1,531 | `combineResults(Object, Object)`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -4.6% | -1.61 GB | 85.9% → 82.8% | 34.9 GB → 33.3 GB | 1,561 → 1,532 | `merge(Map, Map)`                   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -4.1% | -1.41 GB | 84.8% → 82.2% |   34.4 GB → 33 GB | 1,549 → 1,513 | `lambda$merge$6(List, List)`        | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -4.1% | -1.41 GB | 84.8% → 82.2% |   34.4 GB → 33 GB | 1,549 → 1,513 | `apply(Object, Object)`             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0` |
|  -4.1% | -1.41 GB | 84.8% → 82.2% |   34.4 GB → 33 GB | 1,549 → 1,513 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`                                                    |
|  -4.1% | -1.41 GB | 84.8% → 82.2% |   34.4 GB → 33 GB | 1,549 → 1,513 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -4.1% | -1.41 GB | 84.8% → 82.2% |   34.4 GB → 33 GB | 1,549 → 1,513 | `accept(Object, Object)`            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88` |
|  -4.1% | -1.41 GB | 84.8% → 82.2% |   34.4 GB → 33 GB | 1,549 → 1,513 | `forEach(BiConsumer)`               | `java.util.HashMap`                                                    |
|  -3.6% |  -968 MB | 66.9% → 65.2% | 27.2 GB → 26.2 GB | 1,246 → 1,229 | `join()`                            | `java.util.concurrent.ForkJoinTask`                                    |
|  -7.3% |  -634 MB | 21.4% → 20.1% |  8.7 GB → 8.07 GB |     232 → 221 | `invoke()`                          | `java.util.concurrent.ForkJoinTask`                                    |
|  -7.4% |  -629 MB | 21.1% → 19.7% | 8.56 GB → 7.93 GB |     218 → 211 | `lambda$run$0(int, List, int)`      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -7.4% |  -629 MB | 21.1% → 19.7% | 8.56 GB → 7.93 GB |     218 → 211 | `call()`                            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0` |
|  -1.1% |  -444 MB |         99.4% | 40.4 GB → 39.9 GB | 1,863 → 1,854 | `compute()`                         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| -94.8% |  -167 MB |  0.4% → <0.1% |  176 MB → 9.25 MB |       14 → 15 | `<clinit>()`                        | `scala.Predef$`                                                        |
| -12.6% |  -151 MB |   2.9% → 2.6% |  1.2 GB → 1.05 GB |            60 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| -30.9% |  -108 MB |   0.9% → 0.6% |   351 MB → 243 MB |       10 → 13 | `<init>(Map)`                       | `java.util.HashMap`                                                    |
| -87.0% | -73.8 MB |  0.2% → <0.1% |   84.8 MB → 11 MB |         4 → 2 | `vectorSum()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| -87.0% | -73.8 MB |  0.2% → <0.1% |   84.8 MB → 11 MB |         4 → 2 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |

# Retained heap profile diff

Retained 2.68 MB → 2.98 MB (+300 kB, +11.2%) over 9 samples → 11 samples (298 kB → 271 kB per sample).

| Category | Change |   Delta |      % |              Size | Samples |
| -------- | -----: | ------: | -----: | ----------------: | ------: |
| stdlib   | +11.2% | +300 kB | 100.0% | 2.68 MB → 2.98 MB |  9 → 11 |

## Hottest functions

### Self size

No function differed in bytes retained directly in the function body, excluding callees.

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

|  Change |   Delta |             % |         Size | Samples | Function                                                    | Location                                                               |
| ------: | ------: | ------------: | -----------: | ------: | ----------------------------------------------------------- | ---------------------------------------------------------------------- |
|     new | +300 kB |  0.0% → 10.0% | 0 B → 300 kB |   0 → 2 | `addAll(Collection)`                                        | `java.util.ArrayList`                                                  |
|     new | +300 kB |  0.0% → 10.0% | 0 B → 300 kB |   0 → 2 | `lambda$merge$6(List, List)`                                | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|     new | +300 kB |  0.0% → 10.0% | 0 B → 300 kB |   0 → 2 | `apply(Object, Object)`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0` |
|     new | +300 kB |  0.0% → 10.0% | 0 B → 300 kB |   0 → 2 | `merge(Object, Object, BiFunction)`                         | `java.util.HashMap`                                                    |
|     new | +300 kB |  0.0% → 10.0% | 0 B → 300 kB |   0 → 2 | `lambda$merge$7(Map, Object, List)`                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|     new | +300 kB |  0.0% → 10.0% | 0 B → 300 kB |   0 → 2 | `accept(Object, Object)`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88` |
|     new | +300 kB |  0.0% → 10.0% | 0 B → 300 kB |   0 → 2 | `forEach(BiConsumer)`                                       | `java.util.HashMap`                                                    |
|     new | +300 kB |  0.0% → 10.0% | 0 B → 300 kB |   0 → 2 | `merge(Map, Map)`                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|     new | +300 kB |  0.0% → 10.0% | 0 B → 300 kB |   0 → 2 | `combineResults(Map, Map)`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|     new | +300 kB |  0.0% → 10.0% | 0 B → 300 kB |   0 → 2 | `combineResults(Object, Object)`                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|     new | +300 kB |  0.0% → 10.0% | 0 B → 300 kB |   0 → 2 | `compute()`                                                 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|     ~0% |  +112 B |   9.7% → 8.8% |       261 kB |   1 → 2 | `loadClass(String)`                                         | `java.lang.ClassLoader`                                                |
|     ~0% |   +72 B | 90.2% → 81.2% |      2.42 MB |       8 | `main(String[])`                                            | `org.renaissance.harness.RenaissanceSuite`                             |
|     ~0% |   +72 B | 90.2% → 81.2% |      2.42 MB |       8 | `invoke(Object, Object[])`                                  | `java.lang.reflect.Method`                                             |
|     ~0% |   +72 B | 90.2% → 81.2% |      2.42 MB |       8 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`                                        |
|     ~0% |   +72 B | 90.2% → 81.2% |      2.42 MB |       8 | `launchHarnessClass(String, String[])`                      | `org.renaissance.core.Launcher`                                        |
|     ~0% |   +72 B | 90.2% → 81.2% |      2.42 MB |       8 | `main(String[])`                                            | `org.renaissance.core.Launcher`                                        |
| +180.0% |   +72 B |         <0.1% | 40 B → 112 B |       1 | `<clinit>()`                                                | `scala.Predef$`                                                        |
|     ~0% |   +72 B | 80.5% → 72.4% |      2.16 MB |       7 | `main(String[])`                                            | `org.renaissance.harness.RenaissanceSuite$`                            |

# Lock contention profile diff

Blocked 7.30s → 7.18s (-112.9ms, -1.5%) over 61 samples → 59 samples (119.7ms → 121.8ms per sample).

| Category | Change |    Delta |      % |          Time | Samples |
| -------- | -----: | -------: | -----: | ------------: | ------: |
| stdlib   |  -1.5% | -112.9ms | 100.0% | 7.30s → 7.18s | 61 → 59 |

## Hottest functions

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

| Change |   Delta |           % |         Time | Samples | Function    | Location                                               |
| -----: | ------: | ----------: | -----------: | ------: | ----------- | ------------------------------------------------------ |
|    new | +36.8ms | 0.0% → 0.5% | 0ms → 36.8ms |   0 → 1 | `join()`    | `java.util.concurrent.ForkJoinTask`                    |
|    new | +36.8ms | 0.0% → 0.5% | 0ms → 36.8ms |   0 → 1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

#### Improvements

Functions with the largest decrease in total time blocked in the function and all its callees.

| Change |   Delta |             % |          Time | Samples | Function                                                                                                               | Location                                                               |
| -----: | ------: | ------------: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|  -1.5% | -91.4ms | 83.9% → 84.0% | 6.12s → 6.03s |      16 | `get()`                                                                                                                | `java.util.concurrent.ForkJoinTask`                                    |
|  -1.5% | -91.4ms | 83.9% → 84.0% | 6.12s → 6.03s |      16 | `run(int, List, int)`                                                                                                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -1.5% | -91.4ms | 83.9% → 84.0% | 6.12s → 6.03s |      16 | `$anonfun$1(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  -1.5% | -91.4ms | 83.9% → 84.0% | 6.12s → 6.03s |      16 | `$anonfun$adapted$1(Object)`                                                                                           | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  -1.5% | -91.4ms | 83.9% → 84.0% | 6.12s → 6.03s |      16 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011f6c70`   |
|  -1.5% | -91.4ms | 83.9% → 84.0% | 6.12s → 6.03s |      16 | `map(Function1)`                                                                                                       | `scala.collection.immutable.Range`                                     |
|  -1.5% | -91.4ms | 83.9% → 84.0% | 6.12s → 6.03s |      16 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  -1.5% | -91.4ms | 83.9% → 84.0% | 6.12s → 6.03s |      16 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |
|  -1.5% | -91.4ms | 83.9% → 84.0% | 6.12s → 6.03s |      16 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|  -1.5% | -91.4ms | 83.9% → 84.0% | 6.12s → 6.03s |      16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -1.5% | -91.4ms | 83.9% → 84.0% | 6.12s → 6.03s |      16 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001198798` |
|  -1.5% | -91.4ms | 83.9% → 84.0% | 6.12s → 6.03s |      16 | `foreach(Function1)`                                                                                                   | `scala.collection.immutable.List`                                      |
|  -1.5% | -91.4ms | 83.9% → 84.0% | 6.12s → 6.03s |      16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -1.5% | -91.4ms | 83.9% → 84.0% | 6.12s → 6.03s |      16 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -1.5% | -91.4ms | 83.9% → 84.0% | 6.12s → 6.03s |      16 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|  -1.5% | -91.4ms | 83.9% → 84.0% | 6.12s → 6.03s |      16 | `invoke(Object, Object[])`                                                                                             | `java.lang.reflect.Method`                                             |
|  -1.5% | -91.4ms | 83.9% → 84.0% | 6.12s → 6.03s |      16 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
|  -1.5% | -91.4ms | 83.9% → 84.0% | 6.12s → 6.03s |      16 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
|  -1.5% | -91.4ms | 83.9% → 84.0% | 6.12s → 6.03s |      16 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |

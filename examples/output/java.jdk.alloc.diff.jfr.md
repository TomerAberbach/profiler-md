# Sampling profile diff

1,682 samples → 1,629 samples (-53 samples, -3.2%).

| Category | Change | Delta |             % |       Samples |
| -------- | -----: | ----: | ------------: | ------------: |
| ours     |  -2.3% |   -35 | 90.7% → 91.5% | 1,526 → 1,491 |
| stdlib   | -11.5% |   -18 |   9.3% → 8.5% |     156 → 138 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                            | Location                                                  |
| ------: | ----: | ------------: | --------: | ----------------------------------- | --------------------------------------------------------- |
|   +5.4% |   +38 | 41.6% → 45.3% | 700 → 738 | `accumulate(Double[], double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| +133.3% |    +4 |   0.2% → 0.4% |     3 → 7 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`                                       |
| +100.0% |    +1 |          0.1% |     1 → 2 | `compute()`                         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`    |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `join()`                            | `java.util.concurrent.ForkJoinTask`                       |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                            | Location                                                                              |
| ------: | ----: | ------------: | --------: | ----------------------------------- | ------------------------------------------------------------------------------------- |
|   -7.9% |   -32 | 24.2% → 23.0% | 407 → 375 | `distance(Double[], Double[])`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -34.8% |   -24 |   4.1% → 2.8% |   69 → 45 | `vectorSum()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  -13.6% |    -9 |   3.9% → 3.5% |   66 → 57 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`                                                                   |
|  -34.6% |    -9 |   1.5% → 1.0% |   26 → 17 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -75.0% |    -3 |   0.2% → 0.1% |     4 → 1 | `add(double[], double[])`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   -2.0% |    -2 |          6.1% | 102 → 100 | `collectClusters(int[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   -0.5% |    -1 | 12.6% → 13.0% | 212 → 211 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `createSubtask(int, int)`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `merge(Map, Map)`                   | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `apply(Object)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000c001204b38` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % |   Samples | Function                                                    | Location                                                               |
| ------: | ----: | ------------: | --------: | ----------------------------------------------------------- | ---------------------------------------------------------------------- |
|   +5.4% |   +38 | 41.6% → 45.3% | 700 → 738 | `accumulate(Double[], double[])`                            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   +6.8% |   +21 | 18.4% → 20.3% | 309 → 330 | `invoke()`                                                  | `java.util.concurrent.ForkJoinTask`                                    |
|   +1.8% |   +14 | 45.7% → 48.1% | 769 → 783 | `vectorSum()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   +1.8% |   +14 | 45.7% → 48.1% | 769 → 783 | `computeDirectly()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  +70.6% |   +12 |   1.0% → 1.8% |   17 → 29 | `lambda$run$0(int, List, int)`                              | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +68.8% |   +11 |   1.0% → 1.7% |   16 → 27 | `call()`                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b8011ffbc0` |
|   +3.4% |   +10 | 17.7% → 18.9% | 298 → 308 | `average(List)`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   +3.0% |    +9 | 17.8% → 18.9% | 299 → 308 | `computeClusterAverages()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| +300.0% |    +3 |   0.1% → 0.2% |     1 → 4 | `<init>(Map)`                                               | `java.util.HashMap`                                                    |
|  +10.0% |    +1 |   0.6% → 0.7% |   10 → 11 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`                                        |
|  +10.0% |    +1 |   0.6% → 0.7% |   10 → 11 | `launchHarnessClass(String, String[])`                      | `org.renaissance.core.Launcher`                                        |
|  +10.0% |    +1 |   0.6% → 0.7% |   10 → 11 | `main(String[])`                                            | `org.renaissance.core.Launcher`                                        |
| +100.0% |    +1 |          0.1% |     1 → 2 | `toArray(IntFunction)`                                      | `java.util.stream.ReferencePipeline`                                   |
| +100.0% |    +1 |          0.1% |     1 → 2 | `lambda$generateData$5(int, int, Random[], int)`            | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| +100.0% |    +1 |          0.1% |     1 → 2 | `apply(int)`                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b8011a18d8` |
| +100.0% |    +1 |          0.1% |     1 → 2 | `<clinit>()`                                                | `scala.Predef$`                                                        |
|   +0.3% |    +1 | 17.4% → 18.0% | 292 → 293 | `computeDirectly()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `apply(Seq)`                                                | `scala.collection.immutable.Map$`                                      |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `addAll(Collection)`                                        | `java.util.ArrayList`                                                  |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % |       Samples | Function                             | Location                                                               |
| ------: | ----: | ------------: | ------------: | ------------------------------------ | ---------------------------------------------------------------------- |
|   -6.9% |   -59 | 50.9% → 48.9% |     856 → 797 | `computeDirectly()`                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -3.0% |   -50 | 99.1% → 99.3% | 1,667 → 1,617 | `compute()`                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|   -3.0% |   -49 | 97.1% → 97.2% | 1,633 → 1,584 | `join()`                             | `java.util.concurrent.ForkJoinTask`                                    |
|   -5.3% |   -33 | 36.8% → 36.0% |     619 → 586 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -7.9% |   -32 | 24.2% → 23.0% |     407 → 375 | `distance(Double[], Double[])`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -8.1% |   -17 | 12.5% → 11.9% |     211 → 194 | `collectClusters(int[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -14.9% |   -10 |   4.0% → 3.5% |       67 → 57 | `computeIfAbsent(Object, Function)`  | `java.util.HashMap`                                                    |
| removed |    -7 |   0.4% → 0.0% |         7 → 0 | `<init>(Collection)`                 | `java.util.ArrayList`                                                  |
|  -14.0% |    -6 |   2.6% → 2.3% |       43 → 37 | `add(Object)`                        | `java.util.ArrayList`                                                  |
|  -85.7% |    -6 |   0.4% → 0.1% |         7 → 1 | `lambda$merge$6(List, List)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -85.7% |    -6 |   0.4% → 0.1% |         7 → 1 | `apply(Object, Object)`              | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801205218` |
|  -33.3% |    -4 |   0.7% → 0.5% |        12 → 8 | `merge(Object, Object, BiFunction)`  | `java.util.HashMap`                                                    |
|  -75.0% |    -3 |   0.2% → 0.1% |         4 → 1 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -75.0% |    -3 |   0.2% → 0.1% |         4 → 1 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -75.0% |    -3 |   0.2% → 0.1% |         4 → 1 | `combineResults(Object, Object)`     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -16.7% |    -2 |   0.7% → 0.6% |       12 → 10 | `lambda$merge$7(Map, Object, List)`  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -16.7% |    -2 |   0.7% → 0.6% |       12 → 10 | `accept(Object, Object)`             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801204d88` |
|  -16.7% |    -2 |   0.7% → 0.6% |       12 → 10 | `forEach(BiConsumer)`                | `java.util.HashMap`                                                    |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `<clinit>()`                         | `scala.runtime.LazyVals$`                                              |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `<clinit>()`                         | `scopt.OptionParser`                                                   |

# Allocated heap profile diff

Allocated 39.9 GB → 40 GB (+120.937 MB, +0.3%) over 1,980 samples → 1,998 samples (20.2 MB → 20 MB per sample).

| Category | Change |       Delta |             % |              Size |       Samples |
| -------- | -----: | ----------: | ------------: | ----------------: | ------------: |
| stdlib   |  +1.6% | +586.618 MB | 94.6% → 95.8% | 37.8 GB → 38.3 GB | 1,868 → 1,887 |
| ours     | -21.5% |  -465.68 MB |   5.4% → 4.2% |  2.16 GB → 1.7 GB |     111 → 109 |
| native   | +20.9% |      +432 B |         <0.1% |  2.06 kB → 2.5 kB |         1 → 2 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|   Change |       Delta |            % |              Size | Samples | Function                   | Location                                                  |
| -------: | ----------: | -----------: | ----------------: | ------: | -------------------------- | --------------------------------------------------------- |
|      new |  +72.147 MB |  0.0% → 0.2% |     0 B → 72.1 MB |   0 → 2 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`    |
|   +63.9% |  +45.995 MB |  0.2% → 0.3% |    72 MB → 118 MB |   3 → 9 | `createSubtask(int, int)`  | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| +1120.0% |  +30.001 MB | <0.1% → 0.1% | 2.68 MB → 32.7 MB |   3 → 5 | `vectorSum()`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|    +2.9% |   +2.746 MB |         0.2% | 93.7 MB → 96.5 MB |   5 → 6 | `merge(Map, Map)`          | `org.renaissance.jdk.concurrent.JavaKMeans`               |
|   +11.9% |   +1.161 MB |        <0.1% | 9.78 MB → 10.9 MB | 26 → 29 | `valueOf(double)`          | `java.lang.Double`                                        |
|      new | +801.584 kB | 0.0% → <0.1% |      0 B → 802 kB |   0 → 1 | `createSubtask(int, int)`  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`    |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

| Change |       Delta |            % |              Size | Samples | Function                             | Location                                                   |
| -----: | ----------: | -----------: | ----------------: | ------: | ------------------------------------ | ---------------------------------------------------------- |
| -95.0% | -166.011 MB | 0.4% → <0.1% |  175 MB → 8.75 MB |   9 → 4 | `lambda$merge$6(List, List)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| -91.0% | -115.863 MB | 0.3% → <0.1% |  127 MB → 11.5 MB |   6 → 3 | `collectClusters(int[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -32.0% | -109.867 MB |  0.9% → 0.6% |   343 MB → 233 MB |   7 → 8 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -8.9% | -104.406 MB |  2.9% → 2.7% | 1.17 GB → 1.07 GB | 56 → 58 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -93.0% |  -92.163 MB | 0.2% → <0.1% | 99.1 MB → 6.89 MB |   4 → 1 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| -38.3% |  -28.944 MB |  0.2% → 0.1% | 75.6 MB → 46.6 MB |   7 → 2 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -75.0% |    -1.19 MB |        <0.1% |  1.59 MB → 397 kB |   4 → 1 | `range(int, int)`                    | `java.util.stream.IntStream`                               |
|  -2.8% | -115.864 kB |        <0.1% | 4.09 MB → 3.98 MB | 11 → 10 | `lambda$generateData$4(int)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|   Change |       Delta |             % |              Size |       Samples | Function                                         | Location                                                               |
| -------: | ----------: | ------------: | ----------------: | ------------: | ------------------------------------------------ | ---------------------------------------------------------------------- |
|    +4.2% |   +1.032 GB | 62.3% → 64.7% | 24.9 GB → 25.9 GB | 1,101 → 1,137 | `addAll(Collection)`                             | `java.util.ArrayList`                                                  |
|    +7.0% |  +266.25 MB |  9.6% → 10.2% | 3.82 GB → 4.08 GB |     220 → 208 | `add(Object)`                                    | `java.util.ArrayList`                                                  |
|    +0.8% | +254.161 MB | 84.1% → 84.4% | 33.6 GB → 33.8 GB | 1,526 → 1,557 | `lambda$merge$6(List, List)`                     | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|    +0.8% | +254.161 MB | 84.1% → 84.4% | 33.6 GB → 33.8 GB | 1,526 → 1,557 | `apply(Object, Object)`                          | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801205218` |
|    +0.8% | +254.161 MB | 84.1% → 84.4% | 33.6 GB → 33.8 GB | 1,526 → 1,557 | `merge(Object, Object, BiFunction)`              | `java.util.HashMap`                                                    |
|    +0.8% | +254.161 MB | 84.1% → 84.4% | 33.6 GB → 33.8 GB | 1,526 → 1,557 | `lambda$merge$7(Map, Object, List)`              | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|    +0.8% | +254.161 MB | 84.1% → 84.4% | 33.6 GB → 33.8 GB | 1,526 → 1,557 | `accept(Object, Object)`                         | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801204d88` |
|    +0.8% | +254.161 MB | 84.1% → 84.4% | 33.6 GB → 33.8 GB | 1,526 → 1,557 | `forEach(BiConsumer)`                            | `java.util.HashMap`                                                    |
|    +0.6% | +211.752 MB | 84.6% → 84.9% |   33.8 GB → 34 GB | 1,541 → 1,570 | `merge(Map, Map)`                                | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|    +0.6% | +211.752 MB | 84.6% → 84.9% |   33.8 GB → 34 GB | 1,541 → 1,570 | `combineResults(Map, Map)`                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|    +0.6% | +211.752 MB | 84.6% → 84.9% |   33.8 GB → 34 GB | 1,541 → 1,570 | `combineResults(Object, Object)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|    +0.3% | +120.954 MB |         99.4% | 39.7 GB → 39.8 GB | 1,856 → 1,872 | `compute()`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|    +1.6% |  +66.694 MB | 10.5% → 10.7% | 4.21 GB → 4.27 GB |     242 → 218 | `collectClusters(int[])`                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   +63.9% |  +45.995 MB |   0.2% → 0.3% |    72 MB → 118 MB |         3 → 9 | `createSubtask(int, int)`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   +46.6% |  +30.678 MB |          0.2% | 65.8 MB → 96.5 MB |         4 → 9 | `computeClusterAverages()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   +46.6% |  +30.678 MB |          0.2% | 65.8 MB → 96.5 MB |         4 → 9 | `computeDirectly()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| +1120.0% |  +30.001 MB |  <0.1% → 0.1% | 2.68 MB → 32.7 MB |         3 → 5 | `vectorSum()`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| +1120.0% |  +30.001 MB |  <0.1% → 0.1% | 2.68 MB → 32.7 MB |         3 → 5 | `computeDirectly()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   +11.9% |   +1.161 MB |         <0.1% | 9.78 MB → 10.9 MB |       26 → 29 | `valueOf(double)`                                | `java.lang.Double`                                                     |
|   +11.9% |   +1.161 MB |         <0.1% | 9.78 MB → 10.9 MB |       26 → 29 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |       Delta |             % |              Size |       Samples | Function                                       | Location                                                                              |
| ------: | ----------: | ------------: | ----------------: | ------------: | ---------------------------------------------- | ------------------------------------------------------------------------------------- |
|   -4.4% |   -1.151 GB | 65.4% → 62.3% |   26.1 GB → 25 GB | 1,260 → 1,239 | `join()`                                       | `java.util.concurrent.ForkJoinTask`                                                   |
|   -7.2% | -612.665 MB | 21.3% → 19.7% |  8.51 GB → 7.9 GB |           416 | `<init>(Collection)`                           | `java.util.ArrayList`                                                                 |
|   -5.7% | -492.092 MB | 21.6% → 20.3% | 8.62 GB → 8.12 GB |     195 → 231 | `invoke()`                                     | `java.util.concurrent.ForkJoinTask`                                                   |
|  -94.8% | -166.861 MB |  0.4% → <0.1% |  176 MB → 9.14 MB |            14 | `<clinit>()`                                   | `scala.Predef$`                                                                       |
|   -1.8% | -150.231 MB | 20.6% → 20.2% | 8.23 GB → 8.08 GB |     186 → 222 | `lambda$run$0(int, List, int)`                 | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|   -1.8% | -150.231 MB | 20.6% → 20.2% | 8.23 GB → 8.08 GB |     186 → 222 | `call()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b8011ffbc0`                |
|  -32.0% | -109.867 MB |   0.9% → 0.6% |   343 MB → 233 MB |         7 → 8 | `createSubtask(int, int)`                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   -8.9% | -104.406 MB |   2.9% → 2.7% | 1.17 GB → 1.07 GB |       56 → 58 | `findNearestCentroid()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -93.0% |  -92.163 MB |  0.2% → <0.1% | 99.1 MB → 6.89 MB |         4 → 1 | `add(double[], double[])`                      | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  -93.0% |  -92.163 MB |  0.2% → <0.1% | 99.1 MB → 6.89 MB |         4 → 1 | `combineResults(double[], double[])`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  -93.0% |  -92.163 MB |  0.2% → <0.1% | 99.1 MB → 6.89 MB |         4 → 1 | `combineResults(Object, Object)`               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  -31.8% |  -83.692 MB |   0.7% → 0.4% |   263 MB → 180 MB |        16 → 7 | `computeIfAbsent(Object, Function)`            | `java.util.HashMap`                                                                   |
|  -33.0% |  -45.714 MB |   0.3% → 0.2% |    139 MB → 93 MB |        10 → 6 | `<init>(Map)`                                  | `java.util.HashMap`                                                                   |
|  -63.0% |  -41.468 MB |   0.2% → 0.1% | 65.8 MB → 24.3 MB |         4 → 7 | `average(List)`                                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|   -0.7% |  -37.712 MB | 13.5% → 13.3% | 5.38 GB → 5.34 GB |     298 → 276 | `computeDirectly()`                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -38.3% |  -28.944 MB |   0.2% → 0.1% | 75.6 MB → 46.6 MB |         7 → 2 | `lambda$collectClusters$0(Double[])`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -38.3% |  -28.944 MB |   0.2% → 0.1% | 75.6 MB → 46.6 MB |         7 → 2 | `apply(Object)`                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000b801204b38` |
| removed | -793.848 kB |  <0.1% → 0.0% |      794 kB → 0 B |         2 → 0 | `linkToTargetMethod(int, int, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000c0011a2c00`                                   |
|   -8.8% | -586.576 kB |         <0.1% | 6.64 MB → 6.05 MB |       16 → 15 | `range(int, int)`                              | `java.util.stream.IntStream`                                                          |
|   -1.6% | -414.872 kB |          0.1% | 26.8 MB → 26.3 MB |       70 → 69 | `apply(int)`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b8011a18d8`                |

# Retained heap profile diff

Retained 2.68 MB → 4.19 MB (+1.501 MB, +55.9%) over 10 samples → 17 samples (268 kB → 246 kB per sample).

| Category |  Change |     Delta |      % |              Size | Samples |
| -------- | ------: | --------: | -----: | ----------------: | ------: |
| stdlib   |  +55.9% | +1.501 MB | 100.0% | 2.68 MB → 4.19 MB |  9 → 14 |
| ours     | +200.0% |     +80 B |  <0.1% |      40 B → 120 B |   1 → 3 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

|  Change | Delta |     % |         Size | Samples | Function                     | Location                                    |
| ------: | ----: | ----: | -----------: | ------: | ---------------------------- | ------------------------------------------- |
| +200.0% | +80 B | <0.1% | 40 B → 120 B |   1 → 3 | `lambda$generateData$4(int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

| Change | Delta |     % |        Size | Samples | Function          | Location           |
| -----: | ----: | ----: | ----------: | ------: | ----------------- | ------------------ |
| -75.0% | -72 B | <0.1% | 96 B → 24 B |   4 → 1 | `valueOf(double)` | `java.lang.Double` |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

|  Change |       Delta |            % |         Size | Samples | Function                            | Location                                                               |
| ------: | ----------: | -----------: | -----------: | ------: | ----------------------------------- | ---------------------------------------------------------------------- |
|     new |   +1.501 MB | 0.0% → 35.9% | 0 B → 1.5 MB |   0 → 8 | `lambda$merge$6(List, List)`        | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|     new |   +1.501 MB | 0.0% → 35.9% | 0 B → 1.5 MB |   0 → 8 | `apply(Object, Object)`             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801205218` |
|     new |   +1.501 MB | 0.0% → 35.9% | 0 B → 1.5 MB |   0 → 8 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`                                                    |
|     new |   +1.501 MB | 0.0% → 35.9% | 0 B → 1.5 MB |   0 → 8 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|     new |   +1.501 MB | 0.0% → 35.9% | 0 B → 1.5 MB |   0 → 8 | `accept(Object, Object)`            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801204d88` |
|     new |   +1.501 MB | 0.0% → 35.9% | 0 B → 1.5 MB |   0 → 8 | `forEach(BiConsumer)`               | `java.util.HashMap`                                                    |
|     new |   +1.501 MB | 0.0% → 35.9% | 0 B → 1.5 MB |   0 → 8 | `merge(Map, Map)`                   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|     new |   +1.501 MB | 0.0% → 35.9% | 0 B → 1.5 MB |   0 → 8 | `combineResults(Map, Map)`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|     new |   +1.501 MB | 0.0% → 35.9% | 0 B → 1.5 MB |   0 → 8 | `combineResults(Object, Object)`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|     new |   +1.501 MB | 0.0% → 35.9% | 0 B → 1.5 MB |   0 → 8 | `compute()`                         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|     new |   +1.401 MB | 0.0% → 33.5% | 0 B → 1.4 MB |   0 → 7 | `addAll(Collection)`                | `java.util.ArrayList`                                                  |
|     new | +300.872 kB |  0.0% → 7.2% | 0 B → 301 kB |   0 → 2 | `join()`                            | `java.util.concurrent.ForkJoinTask`                                    |
|     new | +300.872 kB |  0.0% → 7.2% | 0 B → 301 kB |   0 → 2 | `invoke()`                          | `java.util.concurrent.ForkJoinTask`                                    |
|     new | +300.872 kB |  0.0% → 7.2% | 0 B → 301 kB |   0 → 2 | `lambda$run$0(int, List, int)`      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|     new | +300.872 kB |  0.0% → 7.2% | 0 B → 301 kB |   0 → 2 | `call()`                            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b8011ffbc0` |
|     new | +100.416 kB |  0.0% → 2.4% | 0 B → 100 kB |   0 → 1 | `<init>(Collection)`                | `java.util.ArrayList`                                                  |
|     new |      +112 B | 0.0% → <0.1% |  0 B → 112 B |   0 → 1 | `<clinit>()`                        | `scala.runtime.LazyVals$`                                              |
|     new |      +112 B | 0.0% → <0.1% |  0 B → 112 B |   0 → 1 | `<clinit>()`                        | `scopt.OptionParser`                                                   |
| +200.0% |       +80 B |        <0.1% | 40 B → 120 B |   1 → 3 | `apply(int)`                        | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b8011a1d48` |
| +200.0% |       +80 B |        <0.1% | 40 B → 120 B |   1 → 3 | `lambda$generateData$4(int)`        | `org.renaissance.jdk.concurrent.JavaKMeans`                            |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

|  Change |  Delta |             % |        Size | Samples | Function                                                    | Location                                                               |
| ------: | -----: | ------------: | ----------: | ------: | ----------------------------------------------------------- | ---------------------------------------------------------------------- |
| removed | -296 B |  <0.1% → 0.0% | 296 B → 0 B |   1 → 0 | `<clinit>()`                                                | `scala.Predef$`                                                        |
|     ~0% | -192 B | 90.2% → 57.9% |     2.42 MB |   9 → 8 | `main(String[])`                                            | `org.renaissance.harness.RenaissanceSuite`                             |
|     ~0% | -192 B | 90.2% → 57.9% |     2.42 MB |   9 → 8 | `invoke(Object, Object[])`                                  | `java.lang.reflect.Method`                                             |
|     ~0% | -192 B | 90.2% → 57.9% |     2.42 MB |   9 → 8 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`                                        |
|     ~0% | -192 B | 90.2% → 57.9% |     2.42 MB |   9 → 8 | `launchHarnessClass(String, String[])`                      | `org.renaissance.core.Launcher`                                        |
|     ~0% | -192 B | 90.2% → 57.9% |     2.42 MB |   9 → 8 | `main(String[])`                                            | `org.renaissance.core.Launcher`                                        |
|     ~0% | -192 B | 80.5% → 51.6% |     2.16 MB |   8 → 7 | `main(String[])`                                            | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -75.0% |  -72 B |         <0.1% | 96 B → 24 B |   4 → 1 | `valueOf(double)`                                           | `java.lang.Double`                                                     |
|  -75.0% |  -72 B |         <0.1% | 96 B → 24 B |   4 → 1 | `lambda$generateData$3(int, int, Random[], int)`            | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -75.0% |  -72 B |         <0.1% | 96 B → 24 B |   4 → 1 | `apply(int)`                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b8011a1b10` |
|     ~0% |  -64 B |   9.7% → 6.2% |      261 kB |   2 → 1 | `loadClass(String)`                                         | `java.lang.ClassLoader`                                                |
| removed |  -64 B |  <0.1% → 0.0% |  64 B → 0 B |   1 → 0 | `indexWhere(Function1)`                                     | `scala.collection.AbstractSeq`                                         |
| removed |  -64 B |  <0.1% → 0.0% |  64 B → 0 B |   1 → 0 | `updateOption(OptionDef, Read)`                             | `scopt.OptionParser`                                                   |
| removed |  -64 B |  <0.1% → 0.0% |  64 B → 0 B |   1 → 0 | `makeDef(OptionDefKind, String, Read)`                      | `scopt.OptionParser`                                                   |
| removed |  -64 B |  <0.1% → 0.0% |  64 B → 0 B |   1 → 0 | `head(Seq)`                                                 | `scopt.OptionParser`                                                   |
| removed |  -64 B |  <0.1% → 0.0% |  64 B → 0 B |   1 → 0 | `<init>(Map)`                                               | `org.renaissance.harness.ConfigParser$$anon$1`                         |

# Lock contention profile diff

Blocked 7.01s → 7.40s (+395.97ms, +5.6%) over 54 samples → 58 samples (129.8ms → 127.7ms per sample).

| Category | Change |     Delta |      % |          Time | Samples |
| -------- | -----: | --------: | -----: | ------------: | ------: |
| stdlib   |  +5.6% | +395.97ms | 100.0% | 7.01s → 7.40s | 54 → 58 |

## Hottest functions

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

| Change |     Delta |             % |          Time | Samples | Function                                                                                                               | Location                                                               |
| -----: | --------: | ------------: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|  +3.4% | +205.33ms | 86.4% → 84.5% | 6.05s → 6.26s |      16 | `get()`                                                                                                                | `java.util.concurrent.ForkJoinTask`                                    |
|  +3.4% | +205.33ms | 86.4% → 84.5% | 6.05s → 6.26s |      16 | `run(int, List, int)`                                                                                                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +3.4% | +205.33ms | 86.4% → 84.5% | 6.05s → 6.26s |      16 | `$anonfun$1(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  +3.4% | +205.33ms | 86.4% → 84.5% | 6.05s → 6.26s |      16 | `$anonfun$adapted$1(Object)`                                                                                           | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  +3.4% | +205.33ms | 86.4% → 84.5% | 6.05s → 6.26s |      16 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000b8011f6c70`   |
|  +3.4% | +205.33ms | 86.4% → 84.5% | 6.05s → 6.26s |      16 | `map(Function1)`                                                                                                       | `scala.collection.immutable.Range`                                     |
|  +3.4% | +205.33ms | 86.4% → 84.5% | 6.05s → 6.26s |      16 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  +3.4% | +205.33ms | 86.4% → 84.5% | 6.05s → 6.26s |      16 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |
|  +3.4% | +205.33ms | 86.4% → 84.5% | 6.05s → 6.26s |      16 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|  +3.4% | +205.33ms | 86.4% → 84.5% | 6.05s → 6.26s |      16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +3.4% | +205.33ms | 86.4% → 84.5% | 6.05s → 6.26s |      16 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000b801198798` |
|  +3.4% | +205.33ms | 86.4% → 84.5% | 6.05s → 6.26s |      16 | `foreach(Function1)`                                                                                                   | `scala.collection.immutable.List`                                      |
|  +3.4% | +205.33ms | 86.4% → 84.5% | 6.05s → 6.26s |      16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +3.4% | +205.33ms | 86.4% → 84.5% | 6.05s → 6.26s |      16 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +3.4% | +205.33ms | 86.4% → 84.5% | 6.05s → 6.26s |      16 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|  +3.4% | +205.33ms | 86.4% → 84.5% | 6.05s → 6.26s |      16 | `invoke(Object, Object[])`                                                                                             | `java.lang.reflect.Method`                                             |
|  +3.4% | +205.33ms | 86.4% → 84.5% | 6.05s → 6.26s |      16 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
|  +3.4% | +205.33ms | 86.4% → 84.5% | 6.05s → 6.26s |      16 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
|  +3.4% | +205.33ms | 86.4% → 84.5% | 6.05s → 6.26s |      16 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |

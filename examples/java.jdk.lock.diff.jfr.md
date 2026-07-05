# Sampling profile diff

1,810 samples → 1,629 samples (-181 samples, -10.0%).

| Category | Change | Delta |             % |       Samples |
| -------- | -----: | ----: | ------------: | ------------: |
| ours     | -11.4% |  -191 | 92.7% → 91.2% | 1,677 → 1,486 |
| stdlib   |  +7.5% |   +10 |   7.3% → 8.8% |     133 → 143 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

| Change | Delta |           % | Samples | Function                            | Location                                                                            |
| -----: | ----: | ----------: | ------: | ----------------------------------- | ----------------------------------------------------------------------------------- |
| +23.1% |    +9 | 2.2% → 2.9% | 39 → 48 | `computeIfAbsent(Object, Function)` | java.util.HashMap                                                                   |
|    new |    +9 | 0.0% → 0.6% |   0 → 9 | `merge(Object, Object, BiFunction)` | java.util.HashMap                                                                   |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `compute()`                         | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask                                |
| +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `lambda$merge$7(Map, Object, List)` | org.renaissance.jdk.concurrent.JavaKMeans                                           |
|  +6.7% |    +1 | 0.8% → 1.0% | 15 → 16 | `apply(Object)`                     | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001204b38 |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `createSubtask(int, int)`           | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask                             |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `add(double[], double[])`           | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask                             |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                                  | Location                                                 |
| ------: | ----: | ------------: | --------: | ----------------------------------------- | -------------------------------------------------------- |
|  -15.3% |  -124 | 44.6% → 42.0% | 808 → 684 | `accumulate(Double[], double[])`          | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  -14.7% |   -17 |   6.4% → 6.1% |  116 → 99 | `collectClusters(int[])`                  | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|   -4.0% |   -16 | 22.3% → 23.8% | 403 → 387 | `distance(Double[], Double[])`            | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|   -7.2% |   -16 | 12.2% → 12.6% | 221 → 205 | `findNearestCentroid()`                   | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  -16.5% |   -13 |   4.4% → 4.1% |   79 → 66 | `vectorSum()`                             | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  -26.7% |    -8 |   1.7% → 1.4% |   30 → 22 | `computeDirectly()`                       | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  -77.8% |    -7 |   0.5% → 0.1% |     9 → 2 | `tryRemoveAndExec(ForkJoinTask, boolean)` | java.util.concurrent.ForkJoinPool$WorkQueue              |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `createSubtask(int, int)`                 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `forkThreshold()`                         | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |           % | Samples | Function                                | Location                                                                            |
| ------: | ----: | ----------: | ------: | --------------------------------------- | ----------------------------------------------------------------------------------- |
|  +18.5% |   +10 | 3.0% → 3.9% | 54 → 64 | `computeIfAbsent(Object, Function)`     | java.util.HashMap                                                                   |
|  +53.8% |    +7 | 0.7% → 1.2% | 13 → 20 | `merge(Map, Map)`                       | org.renaissance.jdk.concurrent.JavaKMeans                                           |
|  +53.8% |    +7 | 0.7% → 1.2% | 13 → 20 | `combineResults(Map, Map)`              | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |
|  +53.8% |    +7 | 0.7% → 1.2% | 13 → 20 | `combineResults(Object, Object)`        | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |
| +100.0% |    +6 | 0.3% → 0.7% |  6 → 12 | `lambda$merge$7(Map, Object, List)`     | org.renaissance.jdk.concurrent.JavaKMeans                                           |
| +100.0% |    +6 | 0.3% → 0.7% |  6 → 12 | `accept(Object, Object)`                | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88                |
| +100.0% |    +6 | 0.3% → 0.7% |  6 → 12 | `forEach(BiConsumer)`                   | java.util.HashMap                                                                   |
| +125.0% |    +5 | 0.2% → 0.6% |   4 → 9 | `merge(Object, Object, BiFunction)`     | java.util.HashMap                                                                   |
|   +5.1% |    +2 | 2.2% → 2.5% | 39 → 41 | `add(Object)`                           | java.util.ArrayList                                                                 |
|  +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `copy(InputStream, Path, CopyOption[])` | java.nio.file.Files                                                                 |
|  +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `extractResource(String, Path)`         | org.renaissance.core.ResourceUtils                                                  |
|  +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `extractResources(Iterable, Path)`      | org.renaissance.core.ResourceUtils                                                  |
|  +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `createClassLoaderForModule(String)`    | org.renaissance.core.ModuleLoader                                                   |
|  +16.7% |    +1 | 0.3% → 0.4% |   6 → 7 | `<init>(Map)`                           | java.util.HashMap                                                                   |
|   +6.7% |    +1 | 0.8% → 1.0% | 15 → 16 | `apply(Object)`                         | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001204b38 |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `get(int)`                              | java.util.ArrayList                                                                 |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `createSubtask(int, int)`               | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask                             |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `add(double[], double[])`               | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask                             |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `combineResults(double[], double[])`    | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask                             |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `combineResults(Object, Object)`        | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask                             |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |             % |       Samples | Function                                                    | Location                                                             |
| -----: | ----: | ------------: | ------------: | ----------------------------------------------------------- | -------------------------------------------------------------------- |
| -10.2% |  -179 | 96.6% → 96.3% | 1,748 → 1,569 | `tryRemoveAndExec(ForkJoinTask, boolean)`                   | java.util.concurrent.ForkJoinPool$WorkQueue                          |
|  -9.8% |  -176 | 99.0% → 99.1% | 1,791 → 1,615 | `compute()`                                                 | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask                 |
|  -9.5% |  -167 | 97.1% → 97.6% | 1,757 → 1,590 | `join()`                                                    | java.util.concurrent.ForkJoinTask                                    |
| -15.3% |  -136 | 49.0% → 46.1% |     887 → 751 | `vectorSum()`                                               | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask              |
| -15.3% |  -136 | 49.0% → 46.1% |     887 → 751 | `computeDirectly()`                                         | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask              |
| -15.3% |  -124 | 44.6% → 42.0% |     808 → 684 | `accumulate(Double[], double[])`                            | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask              |
| -14.5% |   -53 | 20.2% → 19.2% |     365 → 312 | `invoke()`                                                  | java.util.concurrent.ForkJoinTask                                    |
| -14.8% |   -51 | 19.1% → 18.0% |     345 → 294 | `computeDirectly()`                                         | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                 |
| -14.1% |   -50 | 19.6% → 18.7% |     355 → 305 | `computeClusterAverages()`                                  | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                 |
| -13.8% |   -49 | 19.6% → 18.7% |     354 → 305 | `average(List)`                                             | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                 |
|  -5.1% |   -44 | 47.6% → 50.2% |     862 → 818 | `computeDirectly()`                                         | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|  -5.1% |   -32 | 34.5% → 36.3% |     624 → 592 | `findNearestCentroid()`                                     | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|  -4.0% |   -16 | 22.3% → 23.8% |     403 → 387 | `distance(Double[], Double[])`                              | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
| -42.9% |    -6 |   0.8% → 0.5% |        14 → 8 | `main(String[])`                                            | org.renaissance.harness.RenaissanceSuite$                            |
| -42.9% |    -6 |   0.8% → 0.5% |        14 → 8 | `main(String[])`                                            | org.renaissance.harness.RenaissanceSuite                             |
| -42.9% |    -6 |   0.8% → 0.5% |        14 → 8 | `invoke(Object, Object[])`                                  | java.lang.reflect.Method                                             |
| -33.3% |    -5 |   0.8% → 0.6% |       15 → 10 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | org.renaissance.core.Launcher                                        |
| -33.3% |    -5 |   0.8% → 0.6% |       15 → 10 | `launchHarnessClass(String, String[])`                      | org.renaissance.core.Launcher                                        |
| -33.3% |    -5 |   0.8% → 0.6% |       15 → 10 | `main(String[])`                                            | org.renaissance.core.Launcher                                        |
| -31.3% |    -5 |   0.9% → 0.7% |       16 → 11 | `call()`                                                    | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0 |


# Allocated heap profile diff

Allocated 40.5 GB → 40.6 GB (+136 MB, +0.3%) over 1,972 samples → 2,040 samples (20.5 MB → 19.9 MB per sample).

| Category | Change |   Delta |             % |              Size |       Samples |
| -------- | -----: | ------: | ------------: | ----------------: | ------------: |
| stdlib   |  +0.7% | +274 MB | 94.2% → 94.5% | 38.1 GB → 38.4 GB | 1,864 → 1,920 |
| ours     |  -5.9% | -138 MB |   5.8% → 5.5% | 2.35 GB → 2.21 GB |     106 → 118 |
| native   | -16.6% |  -440 B |         <0.1% | 2.66 kB → 2.22 kB |             2 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|   Change |    Delta |            % |              Size | Samples | Function                                | Location                                                 |
| -------: | -------: | -----------: | ----------------: | ------: | --------------------------------------- | -------------------------------------------------------- |
| +5295.3% |  +184 MB | <0.1% → 0.5% |  3.47 MB → 187 MB |   2 → 6 | `lambda$merge$6(List, List)`            | org.renaissance.jdk.concurrent.JavaKMeans                |
| +1297.5% |  +126 MB | <0.1% → 0.3% |  9.69 MB → 135 MB |  3 → 10 | `createSubtask(int, int)`               | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  +656.5% |   +85 MB | <0.1% → 0.2% | 12.9 MB → 97.9 MB |   2 → 5 | `add(double[], double[])`               | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  +159.9% |   +67 MB |  0.1% → 0.3% |  41.9 MB → 109 MB |   2 → 8 | `lambda$collectClusters$0(Double[])`    | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|      new | +35.5 MB |  0.0% → 0.1% |     0 B → 35.5 MB |   0 → 2 | `merge(Map, Map)`                       | org.renaissance.jdk.concurrent.JavaKMeans                |
|   +17.5% | +25.5 MB |         0.4% |   145 MB → 171 MB |  12 → 3 | `createSubtask(int, int)`               | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  +560.3% |  +6.6 MB |        <0.1% | 1.18 MB → 7.78 MB |  4 → 21 | `valueOf(double)`                       | java.lang.Double                                         |
|      new | +1.08 MB | 0.0% → <0.1% |     0 B → 1.08 MB |   0 → 1 | `createSubtask(int, int)`               | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
|      new |  +796 kB | 0.0% → <0.1% |      0 B → 796 kB |   0 → 1 | `selectBenchmarks(BenchmarkSuite, Seq)` | org.renaissance.harness.RenaissanceSuite$                |
|      new |  +326 kB | 0.0% → <0.1% |      0 B → 326 kB |   0 → 1 | `range(int, int)`                       | java.util.stream.IntStream                               |
|    +2.7% | +41.3 kB |        <0.1% |  1.55 MB → 1.6 MB |   4 → 5 | `lambda$generateData$4(int)`            | org.renaissance.jdk.concurrent.JavaKMeans                |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |    Delta |            % |              Size | Samples | Function                   | Location                                                 |
| ------: | -------: | -----------: | ----------------: | ------: | -------------------------- | -------------------------------------------------------- |
|  -95.9% |  -306 MB | 0.8% → <0.1% |  319 MB → 13.1 MB |       5 | `collectClusters(int[])`   | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  -14.7% |  -251 MB |  4.2% → 3.6% | 1.71 GB → 1.46 GB | 68 → 70 | `findNearestCentroid()`    | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  -96.1% | -78.4 MB | 0.2% → <0.1% | 81.5 MB → 3.15 MB |   4 → 2 | `vectorSum()`              | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| removed | -17.8 MB | <0.1% → 0.0% |     17.8 MB → 0 B |   1 → 0 | `lambda$boxed$0(int)`      | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
| removed | -8.15 MB | <0.1% → 0.0% |     8.15 MB → 0 B |   1 → 0 | `computeClusterAverages()` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
| removed |  -974 kB | <0.1% → 0.0% |      974 kB → 0 B |   1 → 0 | `collectGarbage(String)`   | org.renaissance.harness.ExecutionPlugins$ForceGcPlugin   |
| removed |  -396 kB | <0.1% → 0.0% |      396 kB → 0 B |   1 → 0 | `opt(String, Read)`        | scopt.OptionParser                                       |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|   Change |    Delta |             % |              Size |       Samples | Function                                         | Location                                                                            |
| -------: | -------: | ------------: | ----------------: | ------------: | ------------------------------------------------ | ----------------------------------------------------------------------------------- |
|    +5.5% | +1.51 GB | 67.8% → 71.3% | 27.4 GB → 28.9 GB | 1,234 → 1,329 | `join()`                                         | java.util.concurrent.ForkJoinTask                                                   |
|   +25.8% | +1.06 GB | 10.2% → 12.8% | 4.12 GB → 5.18 GB |     206 → 238 | `add(Object)`                                    | java.util.ArrayList                                                                 |
|   +15.9% |  +750 MB | 11.7% → 13.5% | 4.72 GB → 5.47 GB |     222 → 258 | `collectClusters(int[])`                         | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |
|    +7.8% |  +499 MB | 15.9% → 17.1% | 6.43 GB → 6.93 GB |     290 → 328 | `computeDirectly()`                              | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |
|    +0.3% |  +137 MB |         99.4% | 40.2 GB → 40.4 GB | 1,844 → 1,914 | `compute()`                                      | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask                                |
| +1297.5% |  +126 MB |  <0.1% → 0.3% |  9.69 MB → 135 MB |        3 → 10 | `createSubtask(int, int)`                        | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask                             |
|  +656.5% |   +85 MB |  <0.1% → 0.2% | 12.9 MB → 97.9 MB |         2 → 5 | `add(double[], double[])`                        | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask                             |
|  +656.5% |   +85 MB |  <0.1% → 0.2% | 12.9 MB → 97.9 MB |         2 → 5 | `combineResults(double[], double[])`             | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask                             |
|  +656.5% |   +85 MB |  <0.1% → 0.2% | 12.9 MB → 97.9 MB |         2 → 5 | `combineResults(Object, Object)`                 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask                             |
|  +623.2% | +83.4 MB |  <0.1% → 0.2% | 13.4 MB → 96.8 MB |         3 → 5 | `average(List)`                                  | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                                |
|  +159.9% |   +67 MB |   0.1% → 0.3% |  41.9 MB → 109 MB |         2 → 8 | `lambda$collectClusters$0(Double[])`             | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |
|  +159.9% |   +67 MB |   0.1% → 0.3% |  41.9 MB → 109 MB |         2 → 8 | `apply(Object)`                                  | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001204b38 |
|  +146.4% | +57.5 MB |   0.1% → 0.2% | 39.3 MB → 96.8 MB |             5 | `computeClusterAverages()`                       | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                                |
|  +146.4% | +57.5 MB |   0.1% → 0.2% | 39.3 MB → 96.8 MB |             5 | `computeDirectly()`                              | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                                |
|   +17.5% | +25.5 MB |          0.4% |   145 MB → 171 MB |        12 → 3 | `createSubtask(int, int)`                        | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |
|  +560.3% |  +6.6 MB |         <0.1% | 1.18 MB → 7.78 MB |        4 → 21 | `apply(int)`                                     | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a1b10                |
|  +560.3% |  +6.6 MB |         <0.1% | 1.18 MB → 7.78 MB |        4 → 21 | `valueOf(double)`                                | java.lang.Double                                                                    |
|  +560.3% |  +6.6 MB |         <0.1% | 1.18 MB → 7.78 MB |        4 → 21 | `lambda$generateData$3(int, int, Random[], int)` | org.renaissance.jdk.concurrent.JavaKMeans                                           |
|      new | +5.81 MB |  0.0% → <0.1% |     0 B → 5.81 MB |         0 → 2 | `combineResults(Map, Map)`                       | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                                |
|      new | +5.81 MB |  0.0% → <0.1% |     0 B → 5.81 MB |         0 → 2 | `combineResults(Object, Object)`                 | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                                |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |    Delta |             % |              Size |       Samples | Function                            | Location                                                                        |
| ------: | -------: | ------------: | ----------------: | ------------: | ----------------------------------- | ------------------------------------------------------------------------------- |
|  -11.1% |  -911 MB | 20.3% → 18.0% |  8.22 GB → 7.3 GB |     208 → 197 | `lambda$run$0(int, List, int)`      | org.renaissance.jdk.concurrent.JavaKMeans                                       |
|  -11.1% |  -911 MB | 20.3% → 18.0% |  8.22 GB → 7.3 GB |     208 → 197 | `call()`                            | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0            |
|   -1.5% |  -501 MB | 82.8% → 81.3% |   33.5 GB → 33 GB | 1,531 → 1,563 | `combineResults(Map, Map)`          | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                        |
|   -1.5% |  -501 MB | 82.8% → 81.3% |   33.5 GB → 33 GB | 1,531 → 1,563 | `combineResults(Object, Object)`    | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                        |
|   -1.5% |  -495 MB | 82.8% → 81.3% |   33.5 GB → 33 GB | 1,531 → 1,565 | `merge(Map, Map)`                   | org.renaissance.jdk.concurrent.JavaKMeans                                       |
|   -1.4% |  -477 MB | 82.5% → 81.1% | 33.4 GB → 32.9 GB | 1,525 → 1,557 | `lambda$merge$6(List, List)`        | org.renaissance.jdk.concurrent.JavaKMeans                                       |
|   -1.4% |  -477 MB | 82.5% → 81.1% | 33.4 GB → 32.9 GB | 1,525 → 1,557 | `apply(Object, Object)`             | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0            |
|   -1.4% |  -475 MB | 82.5% → 81.1% | 33.4 GB → 32.9 GB | 1,525 → 1,558 | `merge(Object, Object, BiFunction)` | java.util.HashMap                                                               |
|   -1.4% |  -475 MB | 82.5% → 81.1% | 33.4 GB → 32.9 GB | 1,525 → 1,558 | `lambda$merge$7(Map, Object, List)` | org.renaissance.jdk.concurrent.JavaKMeans                                       |
|   -1.4% |  -475 MB | 82.5% → 81.1% | 33.4 GB → 32.9 GB | 1,525 → 1,558 | `accept(Object, Object)`            | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88            |
|   -1.4% |  -475 MB | 82.5% → 81.1% | 33.4 GB → 32.9 GB | 1,525 → 1,558 | `forEach(BiConsumer)`               | java.util.HashMap                                                               |
|   -4.9% |  -459 MB | 23.2% → 22.0% | 9.38 GB → 8.92 GB |     390 → 418 | `<init>(Collection)`                | java.util.ArrayList                                                             |
|   -4.2% |  -348 MB | 20.5% → 19.6% |  8.3 GB → 7.96 GB |     216 → 209 | `invoke()`                          | java.util.concurrent.ForkJoinTask                                               |
|  -14.7% |  -251 MB |   4.2% → 3.6% | 1.71 GB → 1.46 GB |       68 → 70 | `findNearestCentroid()`             | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                        |
|   -0.8% |  -203 MB | 59.4% → 58.7% |   24 GB → 23.8 GB |         1,133 | `addAll(Collection)`                | java.util.ArrayList                                                             |
|  -96.1% | -78.4 MB |  0.2% → <0.1% | 81.5 MB → 3.15 MB |         4 → 2 | `vectorSum()`                       | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask                         |
|  -96.1% | -78.4 MB |  0.2% → <0.1% | 81.5 MB → 3.15 MB |         4 → 2 | `computeDirectly()`                 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask                         |
|  -46.4% | -55.5 MB |   0.3% → 0.2% |  120 MB → 64.1 MB |         6 → 5 | `<init>(Map)`                       | java.util.HashMap                                                               |
| removed | -17.8 MB |  <0.1% → 0.0% |     17.8 MB → 0 B |         1 → 0 | `lambda$boxed$0(int)`               | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                            |
| removed | -17.8 MB |  <0.1% → 0.0% |     17.8 MB → 0 B |         1 → 0 | `apply(int)`                        | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask$$Lambda.0x0000007001205510 |


# Retained heap profile diff

Retained 2.7 MB → 2.88 MB (+188 kB, +7.0%) over 13 samples → 10 samples (207 kB → 288 kB per sample).

| Category | Change |   Delta |      % |             Size | Samples |
| -------- | -----: | ------: | -----: | ---------------: | ------: |
| stdlib   |  +7.0% | +188 kB | 100.0% | 2.7 MB → 2.88 MB |  12 → 9 |
| ours     | +66.7% |   +16 B |  <0.1% |      24 B → 40 B |       1 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

| Change | Delta |            % |       Size | Samples | Function                     | Location                                  |
| -----: | ----: | -----------: | ---------: | ------: | ---------------------------- | ----------------------------------------- |
|    new | +40 B | 0.0% → <0.1% | 0 B → 40 B |   0 → 1 | `lambda$generateData$4(int)` | org.renaissance.jdk.concurrent.JavaKMeans |

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

|  Change | Delta |            % |        Size | Samples | Function            | Location           |
| ------: | ----: | -----------: | ----------: | ------: | ------------------- | ------------------ |
| removed | -24 B | <0.1% → 0.0% |  24 B → 0 B |   1 → 0 | `opt(String, Read)` | scopt.OptionParser |
|  -25.0% | -24 B |        <0.1% | 96 B → 72 B |   4 → 3 | `valueOf(double)`   | java.lang.Double   |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

| Change |   Delta |             % |         Size | Samples | Function                                | Location                                                             |
| -----: | ------: | ------------: | -----------: | ------: | --------------------------------------- | -------------------------------------------------------------------- |
|    new | +199 kB |   0.0% → 6.9% | 0 B → 199 kB |   0 → 1 | `addAll(Collection)`                    | java.util.ArrayList                                                  |
|    new | +199 kB |   0.0% → 6.9% | 0 B → 199 kB |   0 → 1 | `lambda$merge$6(List, List)`            | org.renaissance.jdk.concurrent.JavaKMeans                            |
|    new | +199 kB |   0.0% → 6.9% | 0 B → 199 kB |   0 → 1 | `apply(Object, Object)`                 | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0 |
|    new | +199 kB |   0.0% → 6.9% | 0 B → 199 kB |   0 → 1 | `merge(Object, Object, BiFunction)`     | java.util.HashMap                                                    |
|    new | +199 kB |   0.0% → 6.9% | 0 B → 199 kB |   0 → 1 | `lambda$merge$7(Map, Object, List)`     | org.renaissance.jdk.concurrent.JavaKMeans                            |
|    new | +199 kB |   0.0% → 6.9% | 0 B → 199 kB |   0 → 1 | `accept(Object, Object)`                | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88 |
|    new | +199 kB |   0.0% → 6.9% | 0 B → 199 kB |   0 → 1 | `forEach(BiConsumer)`                   | java.util.HashMap                                                    |
|    new | +199 kB |   0.0% → 6.9% | 0 B → 199 kB |   0 → 1 | `merge(Map, Map)`                       | org.renaissance.jdk.concurrent.JavaKMeans                            |
|    new | +199 kB |   0.0% → 6.9% | 0 B → 199 kB |   0 → 1 | `combineResults(Map, Map)`              | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|    new | +199 kB |   0.0% → 6.9% | 0 B → 199 kB |   0 → 1 | `combineResults(Object, Object)`        | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|    new | +199 kB |   0.0% → 6.9% | 0 B → 199 kB |   0 → 1 | `compute()`                             | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask                 |
|    new |  +112 B |  0.0% → <0.1% |  0 B → 112 B |   0 → 1 | `<clinit>()`                            | scala.Predef$                                                        |
|    new |   +40 B |  0.0% → <0.1% |   0 B → 40 B |   0 → 1 | `apply(int)`                            | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a1d48 |
|    ~0% |   +40 B | 80.2% → 74.9% |      2.16 MB |   5 → 6 | `collect(Collector)`                    | java.util.stream.ReferencePipeline                                   |
|    new |   +40 B |  0.0% → <0.1% |   0 B → 40 B |   0 → 1 | `lambda$generateData$4(int)`            | org.renaissance.jdk.concurrent.JavaKMeans                            |
|    new |   +24 B |  0.0% → <0.1% |   0 B → 24 B |   0 → 1 | `split(String)`                         | java.lang.String                                                     |
|    new |   +24 B |  0.0% → <0.1% |   0 B → 24 B |   0 → 1 | `pathsToSet(String)`                    | org.renaissance.core.ModuleLoader                                    |
|    new |   +24 B |  0.0% → <0.1% |   0 B → 24 B |   0 → 1 | `lambda$collectModuleJars$1(Map$Entry)` | org.renaissance.core.ModuleLoader                                    |
|    new |   +24 B |  0.0% → <0.1% |   0 B → 24 B |   0 → 1 | `apply(Object)`                         | org.renaissance.core.ModuleLoader$$Lambda.0x000000700100ad50         |
|    new |   +24 B |  0.0% → <0.1% |   0 B → 24 B |   0 → 1 | `collectModuleJars(Map)`                | org.renaissance.core.ModuleLoader                                    |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

|  Change |    Delta |             % |              Size | Samples | Function                                                         | Location                                                             |
| ------: | -------: | ------------: | ----------------: | ------: | ---------------------------------------------------------------- | -------------------------------------------------------------------- |
| removed | -10.4 kB |   0.4% → 0.0% |     10.4 kB → 0 B |   2 → 0 | `parse(Seq, Object)`                                             | scopt.OptionParser                                                   |
| removed | -10.4 kB |   0.4% → 0.0% |     10.4 kB → 0 B |   2 → 0 | `parse(String[])`                                                | org.renaissance.harness.ConfigParser                                 |
|   -0.4% | -10.3 kB | 90.3% → 84.0% | 2.43 MB → 2.42 MB |  10 → 8 | `main(String[])`                                                 | org.renaissance.harness.RenaissanceSuite                             |
|   -0.4% | -10.3 kB | 90.3% → 84.0% | 2.43 MB → 2.42 MB |  10 → 8 | `invoke(Object, Object[])`                                       | java.lang.reflect.Method                                             |
|   -0.4% | -10.3 kB | 90.3% → 84.0% | 2.43 MB → 2.42 MB |  10 → 8 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`      | org.renaissance.core.Launcher                                        |
|   -0.4% | -10.3 kB | 90.3% → 84.0% | 2.43 MB → 2.42 MB |  10 → 8 | `launchHarnessClass(String, String[])`                           | org.renaissance.core.Launcher                                        |
|   -0.4% | -10.3 kB | 90.3% → 84.0% | 2.43 MB → 2.42 MB |  10 → 8 | `main(String[])`                                                 | org.renaissance.core.Launcher                                        |
|   -0.5% | -10.3 kB | 80.6% → 74.9% | 2.17 MB → 2.16 MB |   8 → 7 | `main(String[])`                                                 | org.renaissance.harness.RenaissanceSuite$                            |
| removed | -8.21 kB |   0.3% → 0.0% |     8.21 kB → 0 B |   1 → 0 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | java.lang.invoke.MethodHandleNatives                                 |
| removed | -8.21 kB |   0.3% → 0.0% |     8.21 kB → 0 B |   1 → 0 | `runParser(Seq, Object, List, OParserSetup)`                     | scopt.ORunner$                                                       |
| removed | -2.22 kB |   0.1% → 0.0% |     2.22 kB → 0 B |   1 → 0 | `optionsWithProgramName()`                                       | scopt.OptionParser                                                   |
|   -0.8% | -2.14 kB |   9.8% → 9.1% |   263 kB → 261 kB |   3 → 2 | `loadClass(String)`                                              | java.lang.ClassLoader                                                |
| removed |    -24 B |  <0.1% → 0.0% |        24 B → 0 B |   1 → 0 | `opt(String, Read)`                                              | scopt.OptionParser                                                   |
| removed |    -24 B |  <0.1% → 0.0% |        24 B → 0 B |   1 → 0 | `opt(char, String, Read)`                                        | scopt.OptionParser                                                   |
| removed |    -24 B |  <0.1% → 0.0% |        24 B → 0 B |   1 → 0 | `<init>(Map)`                                                    | org.renaissance.harness.ConfigParser$$anon$1                         |
| removed |    -24 B |  <0.1% → 0.0% |        24 B → 0 B |   1 → 0 | `createParser(Map)`                                              | org.renaissance.harness.ConfigParser                                 |
| removed |    -24 B |  <0.1% → 0.0% |        24 B → 0 B |   1 → 0 | `<init>(Map)`                                                    | org.renaissance.harness.ConfigParser                                 |
|  -25.0% |    -24 B |         <0.1% |       96 B → 72 B |   4 → 3 | `valueOf(double)`                                                | java.lang.Double                                                     |
|  -25.0% |    -24 B |         <0.1% |       96 B → 72 B |   4 → 3 | `lambda$generateData$3(int, int, Random[], int)`                 | org.renaissance.jdk.concurrent.JavaKMeans                            |
|  -25.0% |    -24 B |         <0.1% |       96 B → 72 B |   4 → 3 | `apply(int)`                                                     | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a1b10 |


# Lock contention profile diff

Blocked 7.03s → 7.44s (+416.7ms, +5.9%) over 54 samples → 58 samples (130.2ms → 128.4ms per sample).

| Category | Change |    Delta |      % |          Time | Samples |
| -------- | -----: | -------: | -----: | ------------: | ------: |
| stdlib   |  +5.9% | +416.7ms | 100.0% | 7.03s → 7.44s | 54 → 58 |

## Hottest functions

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

| Change |   Delta |             % |          Time | Samples | Function                                                                                                               | Location                                                             |
| -----: | ------: | ------------: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
|  +0.3% | +19.3ms | 87.9% → 83.2% | 6.17s → 6.19s |      16 | `get()`                                                                                                                | java.util.concurrent.ForkJoinTask                                    |
|  +0.3% | +19.3ms | 87.9% → 83.2% | 6.17s → 6.19s |      16 | `run(int, List, int)`                                                                                                  | org.renaissance.jdk.concurrent.JavaKMeans                            |
|  +0.3% | +19.3ms | 87.9% → 83.2% | 6.17s → 6.19s |      16 | `$anonfun$1(int)`                                                                                                      | org.renaissance.jdk.concurrent.FjKmeans                              |
|  +0.3% | +19.3ms | 87.9% → 83.2% | 6.17s → 6.19s |      16 | `$anonfun$adapted$1(Object)`                                                                                           | org.renaissance.jdk.concurrent.FjKmeans                              |
|  +0.3% | +19.3ms | 87.9% → 83.2% | 6.17s → 6.19s |      16 | `apply(Object)`                                                                                                        | org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011f6c70   |
|  +0.3% | +19.3ms | 87.9% → 83.2% | 6.17s → 6.19s |      16 | `map(Function1)`                                                                                                       | scala.collection.immutable.Range                                     |
|  +0.3% | +19.3ms | 87.9% → 83.2% | 6.17s → 6.19s |      16 | `run(BenchmarkContext)`                                                                                                | org.renaissance.jdk.concurrent.FjKmeans                              |
|  +0.3% | +19.3ms | 87.9% → 83.2% | 6.17s → 6.19s |      16 | `executeOperation(int)`                                                                                                | org.renaissance.harness.ExecutionDriver                              |
|  +0.3% | +19.3ms | 87.9% → 83.2% | 6.17s → 6.19s |      16 | `executeBenchmark()`                                                                                                   | org.renaissance.harness.ExecutionDriver                              |
|  +0.3% | +19.3ms | 87.9% → 83.2% | 6.17s → 6.19s |      16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | org.renaissance.harness.RenaissanceSuite$                            |
|  +0.3% | +19.3ms | 87.9% → 83.2% | 6.17s → 6.19s |      16 | `applyVoid(Object)`                                                                                                    | org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001198798 |
|  +0.3% | +19.3ms | 87.9% → 83.2% | 6.17s → 6.19s |      16 | `foreach(Function1)`                                                                                                   | scala.collection.immutable.List                                      |
|  +0.3% | +19.3ms | 87.9% → 83.2% | 6.17s → 6.19s |      16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | org.renaissance.harness.RenaissanceSuite$                            |
|  +0.3% | +19.3ms | 87.9% → 83.2% | 6.17s → 6.19s |      16 | `main(String[])`                                                                                                       | org.renaissance.harness.RenaissanceSuite$                            |
|  +0.3% | +19.3ms | 87.9% → 83.2% | 6.17s → 6.19s |      16 | `main(String[])`                                                                                                       | org.renaissance.harness.RenaissanceSuite                             |
|  +0.3% | +19.3ms | 87.9% → 83.2% | 6.17s → 6.19s |      16 | `invoke(Object, Object[])`                                                                                             | java.lang.reflect.Method                                             |
|  +0.3% | +19.3ms | 87.9% → 83.2% | 6.17s → 6.19s |      16 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | org.renaissance.core.Launcher                                        |
|  +0.3% | +19.3ms | 87.9% → 83.2% | 6.17s → 6.19s |      16 | `launchHarnessClass(String, String[])`                                                                                 | org.renaissance.core.Launcher                                        |
|  +0.3% | +19.3ms | 87.9% → 83.2% | 6.17s → 6.19s |      16 | `main(String[])`                                                                                                       | org.renaissance.core.Launcher                                        |

#### Improvements

Functions with the largest decrease in total time blocked in the function and all its callees.

|  Change |   Delta |           % |         Time | Samples | Function                       | Location                                                             |
| ------: | ------: | ----------: | -----------: | ------: | ------------------------------ | -------------------------------------------------------------------- |
| removed | -10.9ms | 0.2% → 0.0% | 10.9ms → 0ms |   1 → 0 | `join()`                       | java.util.concurrent.ForkJoinTask                                    |
| removed | -10.9ms | 0.2% → 0.0% | 10.9ms → 0ms |   1 → 0 | `compute()`                    | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask                 |
| removed | -10.9ms | 0.2% → 0.0% | 10.9ms → 0ms |   1 → 0 | `invoke()`                     | java.util.concurrent.ForkJoinTask                                    |
| removed | -10.9ms | 0.2% → 0.0% | 10.9ms → 0ms |   1 → 0 | `average(List)`                | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                 |
| removed | -10.9ms | 0.2% → 0.0% | 10.9ms → 0ms |   1 → 0 | `computeClusterAverages()`     | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                 |
| removed | -10.9ms | 0.2% → 0.0% | 10.9ms → 0ms |   1 → 0 | `computeDirectly()`            | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                 |
| removed | -10.9ms | 0.2% → 0.0% | 10.9ms → 0ms |   1 → 0 | `lambda$run$0(int, List, int)` | org.renaissance.jdk.concurrent.JavaKMeans                            |
| removed | -10.9ms | 0.2% → 0.0% | 10.9ms → 0ms |   1 → 0 | `call()`                       | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0 |

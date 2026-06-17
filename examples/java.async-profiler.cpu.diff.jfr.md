# Sampling profile diff

4,802 samples → 4,822 samples (+20 samples, +0.4%).

| Category | Change | Delta |             % |       Samples |
| -------- | -----: | ----: | ------------: | ------------: |
| ours     |  +4.2% |  +117 | 57.8% → 60.0% | 2,777 → 2,894 |
| native   | -11.0% |  -144 | 27.4% → 24.3% | 1,314 → 1,170 |
| stdlib   |  +7.9% |   +52 | 13.7% → 14.7% |     657 → 709 |
| jit      |  -9.3% |    -5 |   1.1% → 1.0% |       54 → 49 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                             | Location                                                 |
| ------: | ----: | ------------: | --------: | ------------------------------------ | -------------------------------------------------------- |
|  +10.8% |   +97 | 18.8% → 20.7% | 901 → 998 | `accumulate(Double[], double[])`     | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  +10.9% |   +45 |   8.6% → 9.5% | 411 → 456 | `vectorSum()`                        | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  +16.5% |   +22 |   2.8% → 3.2% | 133 → 155 | `computeIfAbsent(Object, Function)`  | java.util.HashMap                                        |
|  +14.1% |   +14 |   2.1% → 2.3% |  99 → 113 | `doubleValue()`                      | java.lang.Double                                         |
|     new |    +4 |   0.0% → 0.1% |     0 → 4 | `compute()`                          | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask     |
|  +37.5% |    +3 |          0.2% |    8 → 11 | `merge(Object, Object, BiFunction)`  | java.util.HashMap                                        |
| +100.0% |    +2 |  <0.1% → 0.1% |     2 → 4 | `mach_absolute_time`                 | libsystem_kernel.dylib                                   |
|     new |    +2 |  0.0% → <0.1% |     0 → 2 | `combineResults(Object, Object)`     | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|     new |    +2 |  0.0% → <0.1% |     0 → 2 | `I2C/C2I adapters(0xba)`             | `<unknown>`                                              |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `computeDirectly()`                  | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `merge(Map, Map)`                    | org.renaissance.jdk.concurrent.JavaKMeans                |
|   +0.9% |    +1 |          2.4% | 114 → 115 | `collectClusters(int[])`             | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `lambda$run$0(int, List, int)`       | org.renaissance.jdk.concurrent.JavaKMeans                |
|  +50.0% |    +1 |  <0.1% → 0.1% |     2 → 3 | `add(double[], double[])`            | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `<init>(JavaKMeans, List, int, int)` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `size()`                             | java.util.ArrayList                                      |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `mapToObj(IntFunction)`              | java.util.stream.IntPipeline                             |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `lambda$collectClusters$0(Double[])` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `vtable stub`                        | `<unknown>`                                              |

#### Progressions

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                                   | Location                                                             |
| ------: | ----: | ------------: | --------: | ------------------------------------------ | -------------------------------------------------------------------- |
|   -5.9% |   -24 |   8.5% → 8.0% | 410 → 386 | `findNearestCentroid()`                    | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|  -15.1% |    -8 |   1.1% → 0.9% |   53 → 45 | `zero_blocks`                              | `<unknown>`                                                          |
|   -0.5% |    -5 | 19.3% → 19.1% | 926 → 921 | `distance(Double[], Double[])`             | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|  -80.0% |    -4 |  0.1% → <0.1% |     5 → 1 | `forEach(BiConsumer)`                      | java.util.HashMap                                                    |
| removed |    -2 |  <0.1% → 0.0% |     2 → 0 | `accept(Object, Object)`                   | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000e801187478 |
| removed |    -2 |  <0.1% → 0.0% |     2 → 0 | `addAll(Collection)`                       | java.util.ArrayList                                                  |
| removed |    -2 |  <0.1% → 0.0% |     2 → 0 | `<init>(JavaKMeans, int, int)`             | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask                 |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `computeDirectly()`                        | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask              |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `div(double[], int)`                       | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                 |
|  -25.0% |    -1 |          0.1% |     4 → 3 | `add(Object)`                              | java.util.ArrayList                                                  |
|  -50.0% |    -1 |         <0.1% |     2 → 1 | `fork()`                                   | java.util.concurrent.ForkJoinTask                                    |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `valueOf(double)`                          | java.lang.Double                                                     |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `createSubtask(int, int)`                  | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `<init>(JavaKMeans, List, List, int, int)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `combineResults(Object, Object)`           | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                 |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

| Change | Delta |             % |       Samples | Function                                                    | Location                                                 |
| -----: | ----: | ------------: | ------------: | ----------------------------------------------------------- | -------------------------------------------------------- |
|  +9.7% |  +144 | 31.0% → 33.8% | 1,488 → 1,632 | `vectorSum()`                                               | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  +9.7% |  +144 | 31.0% → 33.9% | 1,489 → 1,633 | `computeDirectly()`                                         | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  +2.6% |  +107 | 84.3% → 86.2% | 4,049 → 4,156 | `join()`                                                    | java.util.concurrent.ForkJoinTask                        |
| +10.1% |  +100 | 20.6% → 22.6% |   990 → 1,090 | `accumulate(Double[], double[])`                            | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  +1.8% |   +74 | 88.0% → 89.2% | 4,226 → 4,300 | `compute()`                                                 | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask     |
|  +2.0% |   +37 | 38.8% → 39.4% | 1,861 → 1,898 | `computeDirectly()`                                         | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  +5.4% |   +36 | 14.0% → 14.7% |     672 → 708 | `computeClusterAverages()`                                  | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
|  +5.4% |   +36 | 14.0% → 14.7% |     672 → 708 | `computeDirectly()`                                         | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
|  +7.5% |   +34 |  9.4% → 10.1% |     453 → 487 | `collectClusters(int[])`                                    | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  +4.9% |   +33 | 13.9% → 14.6% |     669 → 702 | `average(List)`                                             | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
| +14.2% |   +23 |   3.4% → 3.8% |     162 → 185 | `computeIfAbsent(Object, Function)`                         | java.util.HashMap                                        |
| +11.0% |   +22 |   4.2% → 4.6% |     200 → 222 | `get(int)`                                                  | java.util.ArrayList                                      |
|  +1.8% |   +17 | 20.1% → 20.3% |     964 → 981 | `invoke()`                                                  | java.util.concurrent.ForkJoinTask                        |
| +14.1% |   +14 |   2.1% → 2.3% |      99 → 113 | `doubleValue()`                                             | java.lang.Double                                         |
|  +4.2% |    +5 |   2.5% → 2.6% |     119 → 124 | `add(Object)`                                               | java.util.ArrayList                                      |
|  +0.4% |    +4 |         19.6% |     939 → 943 | `distance(Double[], Double[])`                              | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| +11.1% |    +4 |   0.7% → 0.8% |       36 → 40 | `launchHarnessClass(String, String[])`                      | org.renaissance.core.Launcher                            |
| +11.1% |    +4 |   0.7% → 0.8% |       36 → 40 | `main(String[])`                                            | org.renaissance.core.Launcher                            |
| +11.4% |    +4 |   0.7% → 0.8% |       35 → 39 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | org.renaissance.core.Launcher                            |
| +28.6% |    +4 |   0.3% → 0.4% |       14 → 18 | `loadClass(String)`                                         | java.lang.ClassLoader                                    |

#### Progressions

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |            % |   Samples | Function                                         | Location                                                             |
| ------: | ----: | -----------: | --------: | ------------------------------------------------ | -------------------------------------------------------------------- |
|  -24.1% |   -95 |  8.2% → 6.2% | 394 → 299 | `merge(Map, Map)`                                | org.renaissance.jdk.concurrent.JavaKMeans                            |
|  -24.1% |   -95 |  8.2% → 6.2% | 394 → 299 | `combineResults(Map, Map)`                       | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|  -24.5% |   -94 |  8.0% → 6.0% | 383 → 289 | `forEach(BiConsumer)`                            | java.util.HashMap                                                    |
|  -23.6% |   -93 |  8.2% → 6.2% | 394 → 301 | `combineResults(Object, Object)`                 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|  -23.8% |   -90 |  7.9% → 6.0% | 378 → 288 | `accept(Object, Object)`                         | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000e801187478 |
|  -23.4% |   -88 |  7.8% → 6.0% | 376 → 288 | `lambda$merge$7(Map, Object, List)`              | org.renaissance.jdk.concurrent.JavaKMeans                            |
|  -23.2% |   -87 |  7.8% → 6.0% | 375 → 288 | `merge(Object, Object, BiFunction)`              | java.util.HashMap                                                    |
|  -18.9% |   -50 |  5.5% → 4.5% | 265 → 215 | `lambda$merge$6(List, List)`                     | org.renaissance.jdk.concurrent.JavaKMeans                            |
|  -18.9% |   -50 |  5.5% → 4.5% | 265 → 215 | `apply(Object, Object)`                          | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000e8011876c0 |
|  -24.5% |   -46 |  3.9% → 2.9% | 188 → 142 | `addAll(Collection)`                             | java.util.ArrayList                                                  |
|  -19.0% |   -11 |  1.2% → 1.0% |   58 → 47 | `_new_array_Java`                                | `<unknown>`                                                          |
|  -15.1% |    -8 |  1.1% → 0.9% |   53 → 45 | `zero_blocks`                                    | `<unknown>`                                                          |
| removed |    -8 |  0.2% → 0.0% |     8 → 0 | `SafepointBlob`                                  | `<unknown>`                                                          |
|   -3.9% |    -3 |  1.6% → 1.5% |   77 → 74 | `<init>(Collection)`                             | java.util.ArrayList                                                  |
|  -75.0% |    -3 | 0.1% → <0.1% |     4 → 1 | `InterpreterRuntime::frequency_counter_overflow` | libjvm.dylib                                                         |
| removed |    -3 |  0.1% → 0.0% |     3 → 0 | `createSubtask(int, int)`                        | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|  -18.2% |    -2 |         0.2% |    11 → 9 | `<init>(Map)`                                    | java.util.HashMap                                                    |
|  -25.0% |    -2 |  0.2% → 0.1% |     8 → 6 | `copy(InputStream, Path, CopyOption[])`          | java.nio.file.Files                                                  |
|  -66.7% |    -2 | 0.1% → <0.1% |     3 → 1 | `apply(int)`                                     | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000e801125b10 |
|  -66.7% |    -2 | 0.1% → <0.1% |     3 → 1 | `lambda$generateData$3(int, int, Random[], int)` | org.renaissance.jdk.concurrent.JavaKMeans                            |

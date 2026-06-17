# Allocated heap profile diff

Allocated 3.3 GB (+8.14 MB, +0.2%) over 75,363 samples → 75,256 samples (43.7 kB → 43.9 kB per sample).

| Category | Change |    Delta |     % |              Size |         Samples |
| -------- | -----: | -------: | ----: | ----------------: | --------------: |
| stdlib   |  +0.3% | +8.49 MB | 99.8% |  3.29 GB → 3.3 GB | 69,924 → 70,011 |
| ours     |  -4.9% |  -350 kB |  0.2% | 7.16 MB → 6.81 MB |   5,439 → 5,245 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|  Change |    Delta |            % |              Size |   Samples | Function                             | Location                                                 |
| ------: | -------: | -----------: | ----------------: | --------: | ------------------------------------ | -------------------------------------------------------- |
|  +20.4% | +3.14 kB |        <0.1% | 15.3 kB → 18.5 kB | 274 → 330 | `createSubtask(int, int)`            | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| +260.0% |   +624 B |        <0.1% |     240 B → 864 B |    5 → 18 | `computeClusterAverages()`           | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
|  +63.6% |   +336 B |        <0.1% |     528 B → 864 B |   11 → 18 | `createSubtask(int, int)`            | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
|   +8.9% |   +264 B |        <0.1% | 2.95 kB → 3.22 kB | 123 → 134 | `valueOf(double)`                    | java.lang.Double                                         |
|   +9.4% |   +120 B |        <0.1% |  1.28 kB → 1.4 kB |   32 → 35 | `lambda$generateData$4(int)`         | org.renaissance.jdk.concurrent.JavaKMeans                |
|     new |    +80 B | 0.0% → <0.1% |        0 B → 80 B |     0 → 2 | `<init>(Collection)`                 | java.util.ArrayList                                      |
| +200.0% |    +80 B |        <0.1% |      40 B → 120 B |     1 → 3 | `lambda$boxed$0(int)`                | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
|   +0.3% |    +48 B |        <0.1% | 16.8 kB → 16.9 kB | 351 → 352 | `createSubtask(int, int)`            | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|   +0.5% |    +24 B |        <0.1% | 5.23 kB → 5.26 kB | 218 → 219 | `lambda$collectClusters$0(Double[])` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

#### Progressions

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |    Delta |            % |              Size |       Samples | Function                     | Location                                                 |
| ------: | -------: | -----------: | ----------------: | ------------: | ---------------------------- | -------------------------------------------------------- |
|   -4.9% |  -349 kB |         0.2% | 7.08 MB → 6.73 MB | 3,593 → 3,416 | `findNearestCentroid()`      | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  -17.7% | -1.74 kB |        <0.1% |  9.8 kB → 8.06 kB |     175 → 144 | `vectorSum()`                | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  -15.3% | -1.68 kB |        <0.1% |   11 kB → 9.31 kB |     229 → 194 | `collectClusters(int[])`     | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  -10.1% | -1.01 kB |        <0.1% | 9.97 kB → 8.96 kB |     178 → 160 | `add(double[], double[])`    | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|   -5.3% |   -384 B |        <0.1% | 7.25 kB → 6.86 kB |     151 → 143 | `merge(Map, Map)`            | org.renaissance.jdk.concurrent.JavaKMeans                |
|   -2.8% |   -144 B |        <0.1% | 5.16 kB → 5.02 kB |     215 → 209 | `lambda$merge$6(List, List)` | org.renaissance.jdk.concurrent.JavaKMeans                |
| removed |    -56 B | <0.1% → 0.0% |        56 B → 0 B |         1 → 0 | `div(double[], int)`         | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
| removed |    -32 B | <0.1% → 0.0% |        32 B → 0 B |         1 → 0 | `collectGarbage(String)`     | org.renaissance.harness.ExecutionPlugins$ForceGcPlugin   |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|  Change |    Delta |             % |              Size |         Samples | Function                                                    | Location                                                             |
| ------: | -------: | ------------: | ----------------: | --------------: | ----------------------------------------------------------- | -------------------------------------------------------------------- |
|   +1.4% | +8.22 MB | 18.5% → 18.7% |   608 MB → 616 MB | 14,270 → 14,389 | `<init>(Collection)`                                        | java.util.ArrayList                                                  |
|   +0.2% | +7.81 MB |         99.5% | 3.28 GB → 3.29 GB | 56,699 → 56,702 | `lambda$merge$6(List, List)`                                | org.renaissance.jdk.concurrent.JavaKMeans                            |
|   +0.2% | +7.81 MB |         99.5% | 3.28 GB → 3.29 GB | 56,699 → 56,702 | `apply(Object, Object)`                                     | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000501187218 |
|   +0.2% | +7.81 MB |         99.5% | 3.28 GB → 3.29 GB | 56,703 → 56,705 | `merge(Object, Object, BiFunction)`                         | java.util.HashMap                                                    |
|   +0.2% | +7.81 MB |         99.5% | 3.28 GB → 3.29 GB | 56,703 → 56,705 | `lambda$merge$7(Map, Object, List)`                         | org.renaissance.jdk.concurrent.JavaKMeans                            |
|   +0.2% | +7.81 MB |         99.5% | 3.28 GB → 3.29 GB | 56,703 → 56,705 | `accept(Object, Object)`                                    | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000501186d88 |
|   +0.2% | +7.81 MB |         99.5% | 3.28 GB → 3.29 GB | 56,703 → 56,705 | `forEach(BiConsumer)`                                       | java.util.HashMap                                                    |
|   +0.2% | +7.81 MB |         99.5% | 3.28 GB → 3.29 GB | 57,245 → 57,232 | `merge(Map, Map)`                                           | org.renaissance.jdk.concurrent.JavaKMeans                            |
|   +0.2% | +7.81 MB |         99.5% | 3.28 GB → 3.29 GB | 57,236 → 57,224 | `combineResults(Map, Map)`                                  | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|   +0.2% | +7.81 MB |         99.5% | 3.28 GB → 3.29 GB | 57,236 → 57,224 | `combineResults(Object, Object)`                            | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|   +0.2% | +7.52 MB |         99.8% |  3.29 GB → 3.3 GB | 74,957 → 74,830 | `compute()`                                                 | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask                 |
| +182.8% |  +652 kB |         <0.1% |  357 kB → 1.01 MB |         40 → 53 | `loadClass(String)`                                         | java.lang.ClassLoader                                                |
|  +11.1% |  +629 kB |          0.2% | 5.66 MB → 6.29 MB |       393 → 410 | `main(String[])`                                            | org.renaissance.harness.RenaissanceSuite$                            |
|  +11.0% |  +626 kB |          0.2% | 5.68 MB → 6.31 MB |       399 → 416 | `main(String[])`                                            | org.renaissance.harness.RenaissanceSuite                             |
|  +11.0% |  +626 kB |          0.2% | 5.68 MB → 6.31 MB |       399 → 416 | `invoke(Object, Object[])`                                  | java.lang.reflect.Method                                             |
|  +11.0% |  +626 kB |          0.2% | 5.68 MB → 6.31 MB |       399 → 416 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | org.renaissance.core.Launcher                                        |
|  +11.0% |  +625 kB |          0.2% | 5.68 MB → 6.31 MB |       402 → 416 | `launchHarnessClass(String, String[])`                      | org.renaissance.core.Launcher                                        |
|  +11.0% |  +625 kB |          0.2% | 5.68 MB → 6.31 MB |       402 → 416 | `main(String[])`                                            | org.renaissance.core.Launcher                                        |
|     ~0% |  +460 kB | 62.4% → 62.3% |           2.06 GB | 14,949 → 15,001 | `lambda$run$0(int, List, int)`                              | org.renaissance.jdk.concurrent.JavaKMeans                            |
|     ~0% |  +460 kB | 62.4% → 62.3% |           2.06 GB | 14,949 → 15,001 | `call()`                                                    | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000501183d68 |

#### Progressions

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |    Delta |             % |              Size |         Samples | Function                                             | Location                                                             |
| ------: | -------: | ------------: | ----------------: | --------------: | ---------------------------------------------------- | -------------------------------------------------------------------- |
|   -0.5% | -4.87 MB | 30.3% → 30.1% |  1000 MB → 995 MB | 60,059 → 59,701 | `join()`                                             | java.util.concurrent.ForkJoinTask                                    |
|     ~0% |  -418 kB | 81.0% → 80.8% |           2.67 GB | 42,214 → 42,106 | `addAll(Collection)`                                 | java.util.ArrayList                                                  |
|   -4.9% |  -349 kB |          0.2% | 7.08 MB → 6.73 MB |   3,593 → 3,416 | `findNearestCentroid()`                              | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|   -2.4% |  -288 kB |          0.4% | 11.9 MB → 11.7 MB | 16,684 → 16,548 | `computeDirectly()`                                  | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
| removed | -37.1 kB |  <0.1% → 0.0% |     37.1 kB → 0 B |           2 → 0 | `loadProperties(URL)`                                | org.renaissance.core.ResourceUtils                                   |
| removed | -37.1 kB |  <0.1% → 0.0% |     37.1 kB → 0 B |           2 → 0 | `loadPropertiesAsMap(URL)`                           | org.renaissance.core.ResourceUtils                                   |
| removed | -37.1 kB |  <0.1% → 0.0% |     37.1 kB → 0 B |           2 → 0 | `create(Path, String, Optional, Map, boolean)`       | org.renaissance.core.BenchmarkSuite                                  |
| removed | -37.1 kB |  <0.1% → 0.0% |     37.1 kB → 0 B |           1 → 0 | `openStream()`                                       | java.net.URL                                                         |
|  -32.7% | -12.1 kB |         <0.1% |   37.1 kB → 25 kB |               2 | `$anonfun$1(Config, Path)`                           | org.renaissance.harness.RenaissanceSuite$                            |
|  -32.7% | -12.1 kB |         <0.1% |   37.1 kB → 25 kB |               2 | `apply()`                                            | org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000000501103058 |
|  -32.7% | -12.1 kB |         <0.1% |   37.1 kB → 25 kB |               2 | `apply(Function0)`                                   | scala.util.Try$                                                      |
|  -98.9% | -8.34 kB |         <0.1% |    8.43 kB → 96 B |           5 → 3 | `put(Object, Object)`                                | java.util.HashMap                                                    |
|   -4.5% | -2.98 kB |         <0.1% | 66.4 kB → 63.4 kB |           8 → 7 | `map(Function1)`                                     | scala.collection.immutable.Range                                     |
|  -11.8% | -2.53 kB |         <0.1% | 21.4 kB → 18.9 kB |       410 → 365 | `average(List)`                                      | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                 |
|   -8.9% | -1.99 kB |         <0.1% | 22.4 kB → 20.4 kB |       436 → 400 | `computeClusterAverages()`                           | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                 |
|   -8.9% | -1.99 kB |         <0.1% | 22.4 kB → 20.4 kB |       436 → 400 | `computeDirectly()`                                  | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                 |
|  -17.7% | -1.74 kB |         <0.1% |  9.8 kB → 8.06 kB |       175 → 144 | `vectorSum()`                                        | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask              |
|  -17.7% | -1.74 kB |         <0.1% |  9.8 kB → 8.06 kB |       175 → 144 | `computeDirectly()`                                  | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask              |
|  -50.1% | -1.41 kB |         <0.1% |  2.81 kB → 1.4 kB |        117 → 35 | `apply(int)`                                         | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000501125d48 |
| removed | -1.28 kB |  <0.1% → 0.0% |     1.28 kB → 0 B |           3 → 0 | `createTempDirectory(Path, String, FileAttribute[])` | java.nio.file.Files                                                  |

# Allocated heap profile diff

Allocated 3.07 GiB → 3.08 GiB (+7.767 MiB, +0.2%) over 75,363 samples → 75,256 samples (42.7 KiB → 42.9 KiB per sample).

| Category         | Change |        Delta |     % |                Size |         Samples |
| ---------------- | -----: | -----------: | ----: | ------------------: | --------------: |
| Standard library |  +0.3% |     +8.1 MiB | 99.8% | 3.06 GiB → 3.07 GiB | 69,924 → 70,011 |
| Ours             |  -4.9% | -341.539 KiB |  0.2% |  6.83 MiB → 6.5 MiB |   5,439 → 5,245 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|  Change |      Delta |            % |                Size |   Samples | Function                             | Location                                                   |
| ------: | ---------: | -----------: | ------------------: | --------: | ------------------------------------ | ---------------------------------------------------------- |
|  +20.4% | +3.062 KiB |        <0.1% |     15 KiB → 18 KiB | 274 → 330 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +260.0% |     +624 B |        <0.1% |       240 B → 864 B |    5 → 18 | `computeClusterAverages()`           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  +63.6% |     +336 B |        <0.1% |       528 B → 864 B |   11 → 18 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|   +8.9% |     +264 B |        <0.1% | 2.88 KiB → 3.14 KiB | 123 → 134 | `valueOf(double)`                    | `java.lang.Double`                                         |
|   +9.4% |     +120 B |        <0.1% | 1.25 KiB → 1.37 KiB |   32 → 35 | `lambda$generateData$4(int)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|     new |      +80 B | 0.0% → <0.1% |          0 B → 80 B |     0 → 2 | `<init>(Collection)`                 | `java.util.ArrayList`                                      |
| +200.0% |      +80 B |        <0.1% |        40 B → 120 B |     1 → 3 | `lambda$boxed$0(int)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|   +0.3% |      +48 B |        <0.1% |            16.5 KiB | 351 → 352 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   +0.5% |      +24 B |        <0.1% | 5.11 KiB → 5.13 KiB | 218 → 219 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |        Delta |            % |                Size |       Samples | Function                     | Location                                                   |
| ------: | -----------: | -----------: | ------------------: | ------------: | ---------------------------- | ---------------------------------------------------------- |
|   -4.9% | -340.882 KiB |         0.2% | 6.75 MiB → 6.42 MiB | 3,593 → 3,416 | `findNearestCentroid()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -17.7% |   -1.695 KiB |        <0.1% | 9.57 KiB → 7.88 KiB |     175 → 144 | `vectorSum()`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -15.3% |    -1.64 KiB |        <0.1% | 10.7 KiB → 9.09 KiB |     229 → 194 | `collectClusters(int[])`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -10.1% |     -1,008 B |        <0.1% | 9.73 KiB → 8.75 KiB |     178 → 160 | `add(double[], double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -5.3% |       -384 B |        <0.1% |  7.08 KiB → 6.7 KiB |     151 → 143 | `merge(Map, Map)`            | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|   -2.8% |       -144 B |        <0.1% |  5.04 KiB → 4.9 KiB |     215 → 209 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |        -56 B | <0.1% → 0.0% |          56 B → 0 B |         1 → 0 | `div(double[], int)`         | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| removed |        -32 B | <0.1% → 0.0% |          32 B → 0 B |         1 → 0 | `collectGarbage(String)`     | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`   |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                Size |         Samples | Function                                                    | Location                                                               |
| ------: | -----------: | ------------: | ------------------: | --------------: | ----------------------------------------------------------- | ---------------------------------------------------------------------- |
|   +1.4% |   +7.843 MiB | 18.5% → 18.7% |   580 MiB → 588 MiB | 14,270 → 14,389 | `<init>(Collection)`                                        | `java.util.ArrayList`                                                  |
|   +0.2% |   +7.444 MiB |         99.5% | 3.05 GiB → 3.06 GiB | 56,699 → 56,702 | `lambda$merge$6(List, List)`                                | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   +0.2% |   +7.444 MiB |         99.5% | 3.05 GiB → 3.06 GiB | 56,699 → 56,702 | `apply(Object, Object)`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000501187218` |
|   +0.2% |   +7.444 MiB |         99.5% | 3.05 GiB → 3.06 GiB | 56,703 → 56,705 | `merge(Object, Object, BiFunction)`                         | `java.util.HashMap`                                                    |
|   +0.2% |   +7.444 MiB |         99.5% | 3.05 GiB → 3.06 GiB | 56,703 → 56,705 | `lambda$merge$7(Map, Object, List)`                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   +0.2% |   +7.444 MiB |         99.5% | 3.05 GiB → 3.06 GiB | 56,703 → 56,705 | `accept(Object, Object)`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000501186d88` |
|   +0.2% |   +7.444 MiB |         99.5% | 3.05 GiB → 3.06 GiB | 56,703 → 56,705 | `forEach(BiConsumer)`                                       | `java.util.HashMap`                                                    |
|   +0.2% |   +7.443 MiB |         99.5% | 3.05 GiB → 3.06 GiB | 57,245 → 57,232 | `merge(Map, Map)`                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   +0.2% |   +7.443 MiB |         99.5% | 3.05 GiB → 3.06 GiB | 57,236 → 57,224 | `combineResults(Map, Map)`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   +0.2% |   +7.443 MiB |         99.5% | 3.05 GiB → 3.06 GiB | 57,236 → 57,224 | `combineResults(Object, Object)`                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   +0.2% |   +7.169 MiB |         99.8% | 3.06 GiB → 3.07 GiB | 74,957 → 74,830 | `compute()`                                                 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| +182.8% | +636.812 KiB |         <0.1% |   348 KiB → 985 KiB |         40 → 53 | `loadClass(String)`                                         | `java.lang.ClassLoader`                                                |
|  +11.1% |  +613.89 KiB |          0.2% |     5.4 MiB → 6 MiB |       393 → 410 | `main(String[])`                                            | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +11.0% | +611.125 KiB |          0.2% | 5.42 MiB → 6.01 MiB |       399 → 416 | `main(String[])`                                            | `org.renaissance.harness.RenaissanceSuite`                             |
|  +11.0% | +611.125 KiB |          0.2% | 5.42 MiB → 6.01 MiB |       399 → 416 | `invoke(Object, Object[])`                                  | `java.lang.reflect.Method`                                             |
|  +11.0% | +611.125 KiB |          0.2% | 5.42 MiB → 6.01 MiB |       399 → 416 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`                                        |
|  +11.0% | +609.875 KiB |          0.2% | 5.42 MiB → 6.01 MiB |       402 → 416 | `launchHarnessClass(String, String[])`                      | `org.renaissance.core.Launcher`                                        |
|  +11.0% | +609.875 KiB |          0.2% | 5.42 MiB → 6.01 MiB |       402 → 416 | `main(String[])`                                            | `org.renaissance.core.Launcher`                                        |
|     ~0% | +449.234 KiB | 62.4% → 62.3% |            1.92 GiB | 14,949 → 15,001 | `lambda$run$0(int, List, int)`                              | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|     ~0% | +449.234 KiB | 62.4% → 62.3% |            1.92 GiB | 14,949 → 15,001 | `call()`                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000501183d68` |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                Size |         Samples | Function                                             | Location                                                               |
| ------: | -----------: | ------------: | ------------------: | --------------: | ---------------------------------------------------- | ---------------------------------------------------------------------- |
|   -0.5% |   -4.644 MiB | 30.3% → 30.1% |   953 MiB → 949 MiB | 60,059 → 59,701 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                                    |
|     ~0% | -408.101 KiB | 81.0% → 80.8% |            2.49 GiB | 42,214 → 42,106 | `addAll(Collection)`                                 | `java.util.ArrayList`                                                  |
|   -4.9% | -340.882 KiB |          0.2% | 6.75 MiB → 6.42 MiB |   3,593 → 3,416 | `findNearestCentroid()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -2.4% | -281.609 KiB |          0.4% | 11.4 MiB → 11.1 MiB | 16,684 → 16,548 | `computeDirectly()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed |  -36.265 KiB |  <0.1% → 0.0% |      36.3 KiB → 0 B |           2 → 0 | `loadProperties(URL)`                                | `org.renaissance.core.ResourceUtils`                                   |
| removed |  -36.265 KiB |  <0.1% → 0.0% |      36.3 KiB → 0 B |           2 → 0 | `loadPropertiesAsMap(URL)`                           | `org.renaissance.core.ResourceUtils`                                   |
| removed |  -36.265 KiB |  <0.1% → 0.0% |      36.3 KiB → 0 B |           2 → 0 | `create(Path, String, Optional, Map, boolean)`       | `org.renaissance.core.BenchmarkSuite`                                  |
| removed |  -36.195 KiB |  <0.1% → 0.0% |      36.2 KiB → 0 B |           1 → 0 | `openStream()`                                       | `java.net.URL`                                                         |
|  -32.7% |  -11.843 KiB |         <0.1% | 36.3 KiB → 24.4 KiB |               2 | `$anonfun$1(Config, Path)`                           | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -32.7% |  -11.843 KiB |         <0.1% | 36.3 KiB → 24.4 KiB |               2 | `apply()`                                            | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000000501103058` |
|  -32.7% |  -11.843 KiB |         <0.1% | 36.3 KiB → 24.4 KiB |               2 | `apply(Function0)`                                   | `scala.util.Try$`                                                      |
|  -98.9% |    -8.14 KiB |         <0.1% |     8.23 KiB → 96 B |           5 → 3 | `put(Object, Object)`                                | `java.util.HashMap`                                                    |
|   -4.5% |   -2.906 KiB |         <0.1% | 64.9 KiB → 61.9 KiB |           8 → 7 | `map(Function1)`                                     | `scala.collection.immutable.Range`                                     |
|  -11.8% |   -2.468 KiB |         <0.1% | 20.9 KiB → 18.4 KiB |       410 → 365 | `average(List)`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   -8.9% |   -1.945 KiB |         <0.1% | 21.9 KiB → 19.9 KiB |       436 → 400 | `computeClusterAverages()`                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   -8.9% |   -1.945 KiB |         <0.1% | 21.9 KiB → 19.9 KiB |       436 → 400 | `computeDirectly()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -17.7% |   -1.695 KiB |         <0.1% | 9.57 KiB → 7.88 KiB |       175 → 144 | `vectorSum()`                                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -17.7% |   -1.695 KiB |         <0.1% | 9.57 KiB → 7.88 KiB |       175 → 144 | `computeDirectly()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -50.1% |   -1.375 KiB |         <0.1% | 2.74 KiB → 1.37 KiB |        117 → 35 | `apply(int)`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000501125d48` |
| removed |    -1.25 KiB |  <0.1% → 0.0% |      1.25 KiB → 0 B |           3 → 0 | `createTempDirectory(Path, String, FileAttribute[])` | `java.nio.file.Files`                                                  |

# Allocated native memory profile diff

Allocated 255 MB → 258 MB (+2.48 MB, +1.0%) over 84,474 samples → 82,688 samples (3.02 kB → 3.12 kB per sample).

| Category | Change |    Delta |      % |            Size |         Samples |
| -------- | -----: | -------: | -----: | --------------: | --------------: |
| native   |  +1.0% | +2.48 MB | 100.0% | 255 MB → 258 MB | 84,474 → 82,688 |

## Hottest functions

### Total size

#### Regressions

Functions with the largest increase in total native bytes allocated in the function and all its callees.

| Change |    Delta |            % |              Size |         Samples | Function                                                                                                               | Location                                                             |
| -----: | -------: | -----------: | ----------------: | --------------: | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| +53.6% | +48.8 kB | <0.1% → 0.1% |  91.2 kB → 140 kB |       130 → 185 | `findNearestCentroid()`                                                                                                | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|  +1.6% | +46.2 kB |         1.2% | 2.98 MB → 3.02 MB |   5,978 → 5,981 | `executeBenchmark()`                                                                                                   | org.renaissance.harness.ExecutionDriver                              |
|  +1.5% |   +46 kB |         1.2% | 3.13 MB → 3.18 MB |   6,645 → 6,644 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | org.renaissance.harness.RenaissanceSuite$                            |
|  +1.5% |   +46 kB |         1.2% |  3.1 MB → 3.15 MB |   6,434 → 6,433 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | org.renaissance.harness.RenaissanceSuite$                            |
|  +1.5% |   +46 kB |         1.2% |  3.1 MB → 3.15 MB |   6,434 → 6,433 | `applyVoid(Object)`                                                                                                    | org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111efe0 |
|  +1.5% | +45.9 kB |         1.2% | 3.11 MB → 3.15 MB |   6,528 → 6,524 | `foreach(Function1)`                                                                                                   | scala.collection.immutable.List                                      |
|  +0.5% | +45.1 kB |  3.9% → 3.8% |  9.85 MB → 9.9 MB |          29,499 | `main(String[])`                                                                                                       | org.renaissance.harness.RenaissanceSuite$                            |
|  +0.4% |   +44 kB |         4.5% |           11.5 MB | 37,403 → 37,426 | `launchHarnessClass(String, String[])`                                                                                 | org.renaissance.core.Launcher                                        |
|  +0.4% |   +44 kB |         4.5% |           11.5 MB | 37,403 → 37,426 | `main(String[])`                                                                                                       | org.renaissance.core.Launcher                                        |
|  +0.4% |   +44 kB |         4.4% |           11.3 MB | 34,080 → 34,102 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | org.renaissance.core.Launcher                                        |
|  +8.7% | +43.8 kB |         0.2% |   504 kB → 548 kB |       552 → 599 | `DeoptimizationBlob`                                                                                                   | `<unknown>`                                                          |
|  +0.4% | +42.9 kB |         4.3% |             11 MB | 32,792 → 32,791 | `main(String[])`                                                                                                       | org.renaissance.harness.RenaissanceSuite                             |
|  +0.4% | +42.8 kB |         4.3% |             11 MB | 32,957 → 32,954 | `invoke(Object, Object[])`                                                                                             | java.lang.reflect.Method                                             |
|  +1.4% | +39.7 kB |         1.1% | 2.88 MB → 2.92 MB |   5,057 → 5,062 | `executeOperation(int)`                                                                                                | org.renaissance.harness.ExecutionDriver                              |
|  +5.3% | +37.9 kB |         0.3% |   715 kB → 753 kB |   1,449 → 1,512 | `compute()`                                                                                                            | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask                 |
|  +6.4% | +37.8 kB |         0.2% |   588 kB → 626 kB |   1,156 → 1,178 | `join()`                                                                                                               | java.util.concurrent.ForkJoinTask                                    |
| +14.5% | +36.3 kB |         0.1% |   251 kB → 287 kB |   1,920 → 1,939 | `doPrivileged(PrivilegedAction)`                                                                                       | java.security.AccessController                                       |
| +67.1% | +35.9 kB |        <0.1% | 53.5 kB → 89.4 kB |       155 → 164 | `afterOperationSetUp(String, int, boolean)`                                                                            | org.renaissance.harness.ExecutionPlugins$ForceGcPlugin               |
| +67.1% | +35.9 kB |        <0.1% | 53.5 kB → 89.4 kB |       155 → 164 | `notifyAfterOperationSetUp(String, int, boolean)`                                                                      | org.renaissance.harness.EventDispatcher                              |
| +73.1% | +35.9 kB |        <0.1% |   49.1 kB → 85 kB |       108 → 117 | `runFinalization()`                                                                                                    | java.lang.Runtime                                                    |

#### Improvements

Functions with the largest decrease in total native bytes allocated in the function and all its callees.

|  Change |    Delta |            % |              Size |         Samples | Function                                                         | Location                                                                            |
| ------: | -------: | -----------: | ----------------: | --------------: | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
|   -6.2% | -31.7 kB |         0.2% |   510 kB → 478 kB |   6,805 → 6,802 | `InterpreterRuntime::_new`                                       | libjvm.dylib                                                                        |
|  -25.9% | -13.1 kB |        <0.1% | 50.5 kB → 37.4 kB |        104 → 88 | `collectClusters(int[])`                                         | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |
|  -15.0% | -10.8 kB |        <0.1% | 72.4 kB → 61.6 kB |       124 → 104 | `average(List)`                                                  | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                                |
|  -10.2% | -9.74 kB |        <0.1% | 95.3 kB → 85.5 kB |       157 → 161 | `fork()`                                                         | java.util.concurrent.ForkJoinTask                                                   |
|   -2.4% | -6.91 kB |         0.1% |   288 kB → 281 kB |       358 → 331 | `vectorSum()`                                                    | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask                             |
|   -2.4% | -6.91 kB |         0.1% |   288 kB → 281 kB |       358 → 331 | `computeDirectly()`                                              | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask                             |
|   -0.1% |  -6.6 kB |  4.0% → 3.9% | 10.2 MB → 10.1 MB | 25,523 → 25,503 | `loadClass(String)`                                              | java.lang.ClassLoader                                                               |
|   -6.5% | -5.64 kB |        <0.1% | 86.5 kB → 80.9 kB |       170 → 161 | `computeDirectly()`                                              | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |
|  -64.2% | -4.13 kB |        <0.1% |  6.42 kB → 2.3 kB |         73 → 28 | `accept(Object, Object)`                                         | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd8                |
|  -62.8% | -4.13 kB |        <0.1% | 6.57 kB → 2.44 kB |         76 → 31 | `forEach(BiConsumer)`                                            | java.util.HashMap                                                                   |
|  -63.4% | -3.98 kB |        <0.1% |  6.28 kB → 2.3 kB |         70 → 28 | `lambda$merge$7(Map, Object, List)`                              | org.renaissance.jdk.concurrent.JavaKMeans                                           |
|   -0.6% |  -2.6 kB |         0.2% |   440 kB → 438 kB |   4,236 → 4,238 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | java.lang.invoke.MethodHandleNatives                                                |
|   -8.3% | -2.09 kB |        <0.1% |   25.1 kB → 23 kB |       274 → 263 | `lambda$generateData$5(int, int, Random[], int)`                 | org.renaissance.jdk.concurrent.JavaKMeans                                           |
|  -79.6% | -2.08 kB |        <0.1% |   2.62 kB → 534 B |         18 → 13 | `computeIfAbsent(Object, Function)`                              | java.util.HashMap                                                                   |
| removed | -2.06 kB | <0.1% → 0.0% |     2.06 kB → 0 B |           1 → 0 | `g1_post_barrier_slow`                                           | `<unknown>`                                                                         |
|  -98.4% | -2.03 kB |        <0.1% |    2.06 kB → 32 B |           4 → 2 | `lambda$collectClusters$0(Double[])`                             | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |
|  -98.4% | -2.03 kB |        <0.1% |    2.06 kB → 32 B |           4 → 2 | `apply(Object)`                                                  | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001186d88 |
|  -88.3% | -1.97 kB |        <0.1% |   2.23 kB → 260 B |           6 → 8 | `printf(Locale, String, Object[])`                               | java.io.PrintStream                                                                 |
|  -88.3% | -1.97 kB |        <0.1% |   2.23 kB → 260 B |           6 → 8 | `printAfterSuccessMessage(int, long)`                            | org.renaissance.harness.ExecutionDriver                                             |
|   -6.8% | -1.75 kB |        <0.1% | 25.6 kB → 23.9 kB |       282 → 276 | `apply(int)`                                                     | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011258d8                |

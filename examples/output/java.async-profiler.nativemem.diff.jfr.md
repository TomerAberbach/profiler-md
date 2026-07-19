# Allocated native memory profile diff

Allocated 243 MiB → 246 MiB (+2.365 MiB, +1.0%) over 84,474 samples → 82,688 samples (2.95 KiB → 3.04 KiB per sample).

| Category | Change |      Delta |      % |              Size |         Samples |
| -------- | -----: | ---------: | -----: | ----------------: | --------------: |
| native   |  +1.0% | +2.365 MiB | 100.0% | 243 MiB → 246 MiB | 84,474 → 82,688 |

Hidden functions account for 100.0% of native bytes allocated, so the hottest are also shown.

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in native bytes allocated directly in the function body, excluding callees.

| Change |      Delta |     % |              Size |         Samples | Function      | Location                 |
| -----: | ---------: | ----: | ----------------: | --------------: | ------------- | ------------------------ |
|  +1.0% | +2.368 MiB | 99.9% | 243 MiB → 246 MiB | 83,768 → 81,982 | `malloc_hook` | `libasyncProfiler.dylib` |

### Total size

#### Regressions

Functions with the largest increase in total native bytes allocated in the function and all its callees.

| Change |       Delta |            % |                Size |         Samples | Function                                                                                                               | Location                                                               |
| -----: | ----------: | -----------: | ------------------: | --------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|  +1.0% |  +2.368 MiB |        99.9% |   243 MiB → 246 MiB | 83,768 → 81,982 | `malloc_hook`                                                                                                          | `libasyncProfiler.dylib`                                               |
| +53.6% | +47.687 KiB | <0.1% → 0.1% |    89 KiB → 137 KiB |       130 → 185 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  +1.6% | +45.149 KiB |         1.2% | 2.84 MiB → 2.88 MiB |   5,978 → 5,981 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|  +1.5% | +44.928 KiB |         1.2% | 2.99 MiB → 3.03 MiB |   6,645 → 6,644 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +1.5% | +44.928 KiB |         1.2% |    2.96 MiB → 3 MiB |   6,434 → 6,433 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +1.5% | +44.928 KiB |         1.2% |    2.96 MiB → 3 MiB |   6,434 → 6,433 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111efe0` |
|  +1.5% | +44.786 KiB |         1.2% | 2.96 MiB → 3.01 MiB |   6,528 → 6,524 | `foreach(Function1)`                                                                                                   | `scala.collection.immutable.List`                                      |
|  +0.5% |     +44 KiB |  3.9% → 3.8% |  9.4 MiB → 9.44 MiB |          29,499 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +0.4% | +42.941 KiB |         4.5% |              11 MiB | 37,403 → 37,426 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
|  +0.4% | +42.941 KiB |         4.5% |              11 MiB | 37,403 → 37,426 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
|  +0.4% | +42.923 KiB |         4.4% | 10.7 MiB → 10.8 MiB | 34,080 → 34,102 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
|  +8.7% | +42.773 KiB |         0.2% |   493 KiB → 535 KiB |       552 → 599 | `DeoptimizationBlob`                                                                                                   | `<unknown>`                                                            |
|  +0.4% | +41.863 KiB |         4.3% |            10.5 MiB | 32,792 → 32,791 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|  +0.4% | +41.832 KiB |         4.3% |            10.5 MiB | 32,957 → 32,954 | `invoke(Object, Object[])`                                                                                             | `java.lang.reflect.Method`                                             |
|  +1.4% | +38.791 KiB |         1.1% | 2.75 MiB → 2.79 MiB |   5,057 → 5,062 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |
|  +5.3% | +37.014 KiB |         0.3% |   699 KiB → 736 KiB |   1,449 → 1,512 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  +6.4% | +36.958 KiB |         0.2% |   574 KiB → 611 KiB |   1,156 → 1,178 | `join()`                                                                                                               | `java.util.concurrent.ForkJoinTask`                                    |
| +14.5% | +35.458 KiB |         0.1% |   245 KiB → 280 KiB |   1,920 → 1,939 | `doPrivileged(PrivilegedAction)`                                                                                       | `java.security.AccessController`                                       |
| +67.1% | +35.054 KiB |        <0.1% | 52.2 KiB → 87.3 KiB |       155 → 164 | `afterOperationSetUp(String, int, boolean)`                                                                            | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`               |
| +67.1% | +35.054 KiB |        <0.1% | 52.2 KiB → 87.3 KiB |       155 → 164 | `notifyAfterOperationSetUp(String, int, boolean)`                                                                      | `org.renaissance.harness.EventDispatcher`                              |

#### Improvements

Functions with the largest decrease in total native bytes allocated in the function and all its callees.

|  Change |       Delta |            % |                Size |         Samples | Function                                                         | Location                                                                              |
| ------: | ----------: | -----------: | ------------------: | --------------: | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|   -6.2% | -30.992 KiB |         0.2% |   498 KiB → 467 KiB |   6,805 → 6,802 | `InterpreterRuntime::_new`                                       | `libjvm.dylib`                                                                        |
|  -25.9% | -12.792 KiB |        <0.1% | 49.3 KiB → 36.5 KiB |        104 → 88 | `collectClusters(int[])`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -15.0% | -10.595 KiB |        <0.1% | 70.7 KiB → 60.1 KiB |       124 → 104 | `average(List)`                                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|  -10.2% |  -9.511 KiB |        <0.1% |   93 KiB → 83.5 KiB |       157 → 161 | `fork()`                                                         | `java.util.concurrent.ForkJoinTask`                                                   |
|   -2.4% |  -6.748 KiB |         0.1% |   281 KiB → 274 KiB |       358 → 331 | `vectorSum()`                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   -2.4% |  -6.748 KiB |         0.1% |   281 KiB → 274 KiB |       358 → 331 | `computeDirectly()`                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   -0.1% |  -6.444 KiB |  4.0% → 3.9% |            9.68 MiB | 25,523 → 25,503 | `loadClass(String)`                                              | `java.lang.ClassLoader`                                                               |
|   -6.5% |  -5.511 KiB |        <0.1% |   84.5 KiB → 79 KiB |       170 → 161 | `computeDirectly()`                                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -64.2% |  -4.029 KiB |        <0.1% | 6.27 KiB → 2.24 KiB |         73 → 28 | `accept(Object, Object)`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd8`                |
|  -62.8% |  -4.029 KiB |        <0.1% | 6.42 KiB → 2.39 KiB |         76 → 31 | `forEach(BiConsumer)`                                            | `java.util.HashMap`                                                                   |
|  -63.4% |  -3.886 KiB |        <0.1% | 6.13 KiB → 2.24 KiB |         70 → 28 | `lambda$merge$7(Map, Object, List)`                              | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|   -0.6% |  -2.541 KiB |         0.2% |   430 KiB → 427 KiB |   4,236 → 4,238 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives`                                                |
|   -8.3% |  -2.041 KiB |        <0.1% | 24.5 KiB → 22.5 KiB |       274 → 263 | `lambda$generateData$5(int, int, Random[], int)`                 | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  -79.6% |  -2.033 KiB |        <0.1% |    2.55 KiB → 534 B |         18 → 13 | `computeIfAbsent(Object, Function)`                              | `java.util.HashMap`                                                                   |
| removed |  -2.015 KiB | <0.1% → 0.0% |      2.02 KiB → 0 B |           1 → 0 | `g1_post_barrier_slow`                                           | `<unknown>`                                                                           |
|  -98.4% |  -1.984 KiB |        <0.1% |     2.02 KiB → 32 B |           4 → 2 | `lambda$collectClusters$0(Double[])`                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -98.4% |  -1.984 KiB |        <0.1% |     2.02 KiB → 32 B |           4 → 2 | `apply(Object)`                                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001186d88` |
|  -88.3% |  -1.921 KiB |        <0.1% |    2.18 KiB → 260 B |           6 → 8 | `printf(Locale, String, Object[])`                               | `java.io.PrintStream`                                                                 |
|  -88.3% |  -1.921 KiB |        <0.1% |    2.18 KiB → 260 B |           6 → 8 | `printAfterSuccessMessage(int, long)`                            | `org.renaissance.harness.ExecutionDriver`                                             |
|   -6.8% |  -1.704 KiB |        <0.1% |   25 KiB → 23.3 KiB |       282 → 276 | `apply(int)`                                                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011258d8`                |

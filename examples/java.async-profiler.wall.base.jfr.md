# Sampling profile

Collected 5,140 samples.

| Category |     % | Samples |
| -------- | ----: | ------: |
| native   | 84.1% |   4,323 |
| ours     | 12.1% |     620 |
| stdlib   |  3.5% |     182 |
| jit      |  0.3% |      15 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                            | Location                                                 |
| ----: | ------: | ----------------------------------- | -------------------------------------------------------- |
|  4.4% |     225 | `accumulate(Double[], double[])`    | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  2.6% |     134 | `distance(Double[], Double[])`      | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  2.6% |     133 | `findNearestCentroid()`             | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  2.0% |     104 | `vectorSum()`                       | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  0.8% |      41 | `doubleValue()`                     | java.lang.Double                                         |
|  0.6% |      33 | `computeIfAbsent(Object, Function)` | java.util.HashMap                                        |
|  0.4% |      19 | `collectClusters(int[])`            | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  0.3% |      15 | `zero_blocks`                       | `<unknown>`                                              |
| <0.1% |       2 | `forEach(BiConsumer)`               | java.util.HashMap                                        |
| <0.1% |       2 | `createSubtask(int, int)`           | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| <0.1% |       1 | `lambda$merge$6(List, List)`        | org.renaissance.jdk.concurrent.JavaKMeans                |
| <0.1% |       1 | `addAll(Collection)`                | java.util.ArrayList                                      |
| <0.1% |       1 | `combineResults(Object, Object)`    | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| <0.1% |       1 | `add(double[], double[])`           | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|     % | Samples | Location                                                    |
| ----: | ------: | ----------------------------------------------------------- |
| 84.4% |     190 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:412 |
| 15.6% |      35 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:411 |

##### `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|     % | Samples | Location                                                     |
| ----: | ------: | ------------------------------------------------------------ |
| 50.0% |      67 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:249 |
| 41.0% |      55 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:248 |
|  9.0% |      12 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:250 |

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|     % | Samples | Location                                                     |
| ----: | ------: | ------------------------------------------------------------ |
| 43.6% |      58 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:229 |
| 36.1% |      48 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:231 |
| 16.5% |      22 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:230 |
|  2.3% |       3 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:226 |
|  1.5% |       2 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:225 |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|     % | Samples | Location                                                    |
| ----: | ------: | ----------------------------------------------------------- |
| 84.6% |      88 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:403 |
| 15.4% |      16 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:402 |

##### `doubleValue()` (java.lang.Double)

|      % | Samples | Location              |
| -----: | ------: | --------------------- |
| 100.0% |      41 | java.lang.Double:1001 |

##### `computeIfAbsent(Object, Function)` (java.util.HashMap)

|     % | Samples | Location               |
| ----: | ------: | ---------------------- |
| 27.3% |       9 | java.util.HashMap:1213 |
| 24.2% |       8 | java.util.HashMap:1204 |
| 15.2% |       5 | java.util.HashMap:1197 |
|  9.1% |       3 | java.util.HashMap:1208 |
|  9.1% |       3 | java.util.HashMap:1228 |

##### `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|     % | Samples | Location                                                     |
| ----: | ------: | ------------------------------------------------------------ |
| 36.8% |       7 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:213 |
| 21.1% |       4 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:212 |
| 15.8% |       3 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:211 |
| 15.8% |       3 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:214 |
|  5.3% |       1 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215 |

##### `forEach(BiConsumer)` (java.util.HashMap)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |       2 | java.util.HashMap:1428 |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Location                                                    |
| -----: | ------: | ----------------------------------------------------------- |
| 100.0% |       2 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419 |

##### `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % | Samples | Location                                      |
| -----: | ------: | --------------------------------------------- |
| 100.0% |       1 | org.renaissance.jdk.concurrent.JavaKMeans:114 |

##### `addAll(Collection)` (java.util.ArrayList)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | java.util.ArrayList:761 |

##### `combineResults(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Location                                                    |
| -----: | ------: | ----------------------------------------------------------- |
| 100.0% |       1 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:367 |

##### `add(double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Location                                                    |
| -----: | ------: | ----------------------------------------------------------- |
| 100.0% |       1 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:430 |

#### Callers

Callers ranked by contribution to each function's self samples. Caller attribution may be imprecise due to inlining.

##### `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Caller        | Location                                                |
| -----: | ------: | ------------- | ------------------------------------------------------- |
| 100.0% |     225 | `vectorSum()` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Caller                  | Location                                                 |
| -----: | ------: | ----------------------- | -------------------------------------------------------- |
| 100.0% |     134 | `findNearestCentroid()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Caller              | Location                                                 |
| -----: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% |     133 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Caller              | Location                                                |
| -----: | ------: | ------------------- | ------------------------------------------------------- |
| 100.0% |     104 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `doubleValue()` (java.lang.Double)

|     % | Samples | Caller                           | Location                                                 |
| ----: | ------: | -------------------------------- | -------------------------------------------------------- |
| 61.0% |      25 | `accumulate(Double[], double[])` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| 39.0% |      16 | `distance(Double[], Double[])`   | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `computeIfAbsent(Object, Function)` (java.util.HashMap)

|      % | Samples | Caller                   | Location                                                 |
| -----: | ------: | ------------------------ | -------------------------------------------------------- |
| 100.0% |      33 | `collectClusters(int[])` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Caller              | Location                                                 |
| -----: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% |      19 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `zero_blocks` (`<unknown>`)

|     % | Samples | Caller                              | Location          |
| ----: | ------: | ----------------------------------- | ----------------- |
| 80.0% |      12 | `merge(Object, Object, BiFunction)` | java.util.HashMap |

##### `forEach(BiConsumer)` (java.util.HashMap)

|      % | Samples | Caller            | Location                                  |
| -----: | ------: | ----------------- | ----------------------------------------- |
| 100.0% |       2 | `merge(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Caller      | Location                                             |
| -----: | ------: | ----------- | ---------------------------------------------------- |
| 100.0% |       2 | `compute()` | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |

##### `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % | Samples | Caller                  | Location                                                             |
| -----: | ------: | ----------------------- | -------------------------------------------------------------------- |
| 100.0% |       1 | `apply(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0 |

##### `addAll(Collection)` (java.util.ArrayList)

|      % | Samples | Caller                       | Location                                  |
| -----: | ------: | ---------------------------- | ----------------------------------------- |
| 100.0% |       1 | `lambda$merge$6(List, List)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `combineResults(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Caller      | Location                                             |
| -----: | ------: | ----------- | ---------------------------------------------------- |
| 100.0% |       1 | `compute()` | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |

##### `add(double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Caller                               | Location                                                |
| -----: | ------: | ------------------------------------ | ------------------------------------------------------- |
| 100.0% |       1 | `combineResults(double[], double[])` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                                                                                               | Location                                                             |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 22.0% |   1,130 | `compute()`                                                                                                            | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask                 |
| 21.1% |   1,087 | `join()`                                                                                                               | java.util.concurrent.ForkJoinTask                                    |
|  8.1% |     414 | `computeDirectly()`                                                                                                    | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|  7.5% |     385 | `vectorSum()`                                                                                                          | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask              |
|  7.5% |     385 | `computeDirectly()`                                                                                                    | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask              |
|  6.0% |     307 | `findNearestCentroid()`                                                                                                | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|  5.2% |     268 | `invoke()`                                                                                                             | java.util.concurrent.ForkJoinTask                                    |
|  4.9% |     250 | `accumulate(Double[], double[])`                                                                                       | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask              |
|  3.7% |     191 | `computeClusterAverages()`                                                                                             | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                 |
|  3.7% |     191 | `computeDirectly()`                                                                                                    | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                 |
|  3.7% |     188 | `average(List)`                                                                                                        | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                 |
|  3.1% |     157 | `distance(Double[], Double[])`                                                                                         | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|  2.5% |     128 | `launchHarnessClass(String, String[])`                                                                                 | org.renaissance.core.Launcher                                        |
|  2.5% |     128 | `main(String[])`                                                                                                       | org.renaissance.core.Launcher                                        |
|  2.5% |     127 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | org.renaissance.core.Launcher                                        |
|  2.5% |     126 | `main(String[])`                                                                                                       | org.renaissance.harness.RenaissanceSuite$                            |
|  2.5% |     126 | `main(String[])`                                                                                                       | org.renaissance.harness.RenaissanceSuite                             |
|  2.5% |     126 | `invoke(Object, Object[])`                                                                                             | java.lang.reflect.Method                                             |
|  2.4% |     123 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | org.renaissance.harness.RenaissanceSuite$                            |
|  2.4% |     123 | `applyVoid(Object)`                                                                                                    | org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111efe0 |

#### Callees

Callees ranked by contribution to each function's total samples. Callee attribution may be imprecise due to inlining.

##### `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)

|     % | Samples | Callee                           | Location                                                 |
| ----: | ------: | -------------------------------- | -------------------------------------------------------- |
| 96.2% |   1,087 | `join()`                         | java.util.concurrent.ForkJoinTask                        |
| 36.6% |     414 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| 34.1% |     385 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| 16.9% |     191 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
|  7.1% |      80 | `combineResults(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Callee                   | Location                                                 |
| -----: | ------: | ------------------------ | -------------------------------------------------------- |
| 100.0% |     414 | `computeDirectly()`      | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  74.2% |     307 | `findNearestCentroid()`  | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  25.8% |     107 | `collectClusters(int[])` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|     % | Samples | Callee                           | Location                                                |
| ----: | ------: | -------------------------------- | ------------------------------------------------------- |
| 64.9% |     250 | `accumulate(Double[], double[])` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |
|  8.1% |      31 | `get(int)`                       | java.util.ArrayList                                     |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Callee              | Location                                                |
| -----: | ------: | ------------------- | ------------------------------------------------------- |
| 100.0% |     385 | `vectorSum()`       | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |
| 100.0% |     385 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|     % | Samples | Callee                         | Location                                                 |
| ----: | ------: | ------------------------------ | -------------------------------------------------------- |
| 51.1% |     157 | `distance(Double[], Double[])` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  3.6% |      11 | `get(int)`                     | java.util.ArrayList                                      |
|  1.6% |       5 | `SafepointBlob`                | `<unknown>`                                              |
|  0.3% |       1 | `DeoptimizationBlob`           | `<unknown>`                                              |

##### `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|     % | Samples | Callee          | Location         |
| ----: | ------: | --------------- | ---------------- |
| 10.0% |      25 | `doubleValue()` | java.lang.Double |

##### `computeClusterAverages()` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|     % | Samples | Callee            | Location                                             |
| ----: | ------: | ----------------- | ---------------------------------------------------- |
| 98.4% |     188 | `average(List)`   | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |
|  1.6% |       3 | `boxed(double[])` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % | Samples | Callee                     | Location                                             |
| -----: | ------: | -------------------------- | ---------------------------------------------------- |
| 100.0% |     191 | `computeClusterAverages()` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |
| 100.0% |     191 | `computeDirectly()`        | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |

##### `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % | Samples | Callee     | Location                          |
| -----: | ------: | ---------- | --------------------------------- |
| 100.0% |     188 | `invoke()` | java.util.concurrent.ForkJoinTask |

##### `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|     % | Samples | Callee          | Location         |
| ----: | ------: | --------------- | ---------------- |
| 10.2% |      16 | `doubleValue()` | java.lang.Double |
|  4.5% |       7 | `SafepointBlob` | `<unknown>`      |

##### `launchHarnessClass(String, String[])` (org.renaissance.core.Launcher)

|     % | Samples | Callee                                                      | Location                      |
| ----: | ------: | ----------------------------------------------------------- | ----------------------------- |
| 99.2% |     127 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | org.renaissance.core.Launcher |
|  0.8% |       1 | `createScratchRoot(Path, boolean)`                          | org.renaissance.core.Launcher |

##### `main(String[])` (org.renaissance.core.Launcher)

|      % | Samples | Callee                                 | Location                      |
| -----: | ------: | -------------------------------------- | ----------------------------- |
| 100.0% |     128 | `launchHarnessClass(String, String[])` | org.renaissance.core.Launcher |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (org.renaissance.core.Launcher)

|     % | Samples | Callee                               | Location                          |
| ----: | ------: | ------------------------------------ | --------------------------------- |
| 99.2% |     126 | `invoke(Object, Object[])`           | java.lang.reflect.Method          |
|  0.8% |       1 | `createClassLoaderForModule(String)` | org.renaissance.core.ModuleLoader |

##### `main(String[])` (org.renaissance.harness.RenaissanceSuite$)

|     % | Samples | Callee                                                                        | Location                                  |
| ----: | ------: | ----------------------------------------------------------------------------- | ----------------------------------------- |
| 97.6% |     123 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | org.renaissance.harness.RenaissanceSuite$ |
|  0.8% |       1 | `<clinit>()`                                                                  | scala.Predef$                             |
|  0.8% |       1 | `<init>(Map)`                                                                 | org.renaissance.harness.ConfigParser      |
|  0.8% |       1 | `loadClass(String)`                                                           | java.lang.ClassLoader                     |

##### `main(String[])` (org.renaissance.harness.RenaissanceSuite)

|      % | Samples | Callee           | Location                                  |
| -----: | ------: | ---------------- | ----------------------------------------- |
| 100.0% |     126 | `main(String[])` | org.renaissance.harness.RenaissanceSuite$ |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (org.renaissance.harness.RenaissanceSuite$)

|     % | Samples | Callee                                                                                       | Location                                |
| ----: | ------: | -------------------------------------------------------------------------------------------- | --------------------------------------- |
| 99.2% |     122 | `executeBenchmark()`                                                                         | org.renaissance.harness.ExecutionDriver |
|  0.8% |       1 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | org.renaissance.harness.ExecutionDriver |

##### `applyVoid(Object)` (org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111efe0)

|      % | Samples | Callee                                                                                                                 | Location                                  |
| -----: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| 100.0% |     123 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | org.renaissance.harness.RenaissanceSuite$ |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.3% |     116 | `get()` (java.util.concurrent.ForkJoinTask) ← `run(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `$anonfun$1(int)` (org.renaissance.jdk.concurrent.FjKmeans) ← `$anonfun$adapted$1(Object)` ← `apply(Object)` (org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000700117ae68) ← `map(Function1)` (scala.collection.immutable.Range) ← `run(BenchmarkContext)` (org.renaissance.jdk.concurrent.FjKmeans) ← `executeOperation(int)` (org.renaissance.harness.ExecutionDriver) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (org.renaissance.harness.RenaissanceSuite$) ← `applyVoid(Object)` (org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111efe0) ← `foreach(Function1)` (scala.collection.immutable.List) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (org.renaissance.harness.RenaissanceSuite$) ← `main(String[])` ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (org.renaissance.core.Launcher) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                  |
| 1.8% |      90 | `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.8% |      39 | `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.6% |      31 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.6% |      30 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.6% |      30 | `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.6% |      30 | `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.5% |      25 | `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.4% |      23 | `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.4% |      20 | `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.4% |      19 | `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                |
| 0.4% |      19 | `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.4% |      19 | `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.4% |      18 | `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                 |
| 0.4% |      18 | `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.4% |      18 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.4% |      18 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.4% |      18 | `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.3% |      16 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                     |
| 0.3% |      15 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) |

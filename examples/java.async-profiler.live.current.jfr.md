# Allocated heap profile

Allocated 3.31 GB over 76,122 samples (43.5 kB per sample).

| Category |     % |    Size | Samples |
| -------- | ----: | ------: | ------: |
| stdlib   | 99.8% |  3.3 GB |  70,684 |
| ours     |  0.2% | 6.98 MB |   5,438 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |    Size | Samples | Function                             | Location                                                 |
| ----: | ------: | ------: | ------------------------------------ | -------------------------------------------------------- |
|  0.2% |  6.9 MB |   3,500 | `findNearestCentroid()`              | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| <0.1% | 18.5 kB |     386 | `createSubtask(int, int)`            | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| <0.1% | 15.6 kB |     278 | `createSubtask(int, int)`            | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| <0.1% | 11.4 kB |     204 | `add(double[], double[])`            | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| <0.1% | 10.9 kB |     194 | `vectorSum()`                        | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| <0.1% | 7.78 kB |     162 | `collectClusters(int[])`             | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| <0.1% | 7.63 kB |     159 | `merge(Map, Map)`                    | org.renaissance.jdk.concurrent.JavaKMeans                |
| <0.1% | 6.05 kB |     252 | `lambda$merge$6(List, List)`         | org.renaissance.jdk.concurrent.JavaKMeans                |
| <0.1% | 5.57 kB |     232 | `lambda$collectClusters$0(Double[])` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| <0.1% | 2.62 kB |     109 | `valueOf(double)`                    | java.lang.Double                                         |
| <0.1% | 1.72 kB |      43 | `lambda$generateData$4(int)`         | org.renaissance.jdk.concurrent.JavaKMeans                |
| <0.1% |   576 B |      12 | `computeClusterAverages()`           | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
| <0.1% |   456 B |      19 | `range(int, int)`                    | java.util.stream.IntStream                               |
| <0.1% |   432 B |       9 | `createSubtask(int, int)`            | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
| <0.1% |   120 B |       3 | `lambda$run$0(int, List, int)`       | org.renaissance.jdk.concurrent.JavaKMeans                |
| <0.1% |    80 B |       2 | `lambda$boxed$0(int)`                | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
| <0.1% |    56 B |       2 | `collectGarbage(String)`             | org.renaissance.harness.ExecutionPlugins$ForceGcPlugin   |

#### Lines

Lines ranked by contribution to each function's self size.

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |   Size | Samples | Location                                                     |
| -----: | -----: | ------: | ------------------------------------------------------------ |
| 100.0% | 6.9 MB |   3,500 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:223 |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |    Size | Samples | Location                                                    |
| -----: | ------: | ------: | ----------------------------------------------------------- |
| 100.0% | 18.5 kB |     386 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419 |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Location                                                     |
| -----: | ------: | ------: | ------------------------------------------------------------ |
| 100.0% | 15.6 kB |     278 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261 |

##### `add(double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |    Size | Samples | Location                                                    |
| -----: | ------: | ------: | ----------------------------------------------------------- |
| 100.0% | 11.4 kB |     204 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:430 |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |    Size | Samples | Location                                                    |
| -----: | ------: | ------: | ----------------------------------------------------------- |
| 100.0% | 10.9 kB |     194 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400 |

##### `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Location                                                     |
| -----: | ------: | ------: | ------------------------------------------------------------ |
| 100.0% | 7.78 kB |     162 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:209 |

##### `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Location                                      |
| -----: | ------: | ------: | --------------------------------------------- |
| 100.0% | 7.63 kB |     159 | org.renaissance.jdk.concurrent.JavaKMeans:110 |

##### `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Location                                      |
| -----: | ------: | ------: | --------------------------------------------- |
| 100.0% | 6.05 kB |     252 | org.renaissance.jdk.concurrent.JavaKMeans:114 |

##### `lambda$collectClusters$0(Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Location                                                     |
| -----: | ------: | ------: | ------------------------------------------------------------ |
| 100.0% | 5.57 kB |     232 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215 |

##### `valueOf(double)` (java.lang.Double)

|      % |    Size | Samples | Location             |
| -----: | ------: | ------: | -------------------- |
| 100.0% | 2.62 kB |     109 | java.lang.Double:773 |

##### `lambda$generateData$4(int)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Location                                     |
| -----: | ------: | ------: | -------------------------------------------- |
| 100.0% | 1.72 kB |      43 | org.renaissance.jdk.concurrent.JavaKMeans:87 |

##### `computeClusterAverages()` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % |  Size | Samples | Location                                                 |
| -----: | ----: | ------: | -------------------------------------------------------- |
| 100.0% | 576 B |      12 | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:314 |

##### `range(int, int)` (java.util.stream.IntStream)

|      % |  Size | Samples | Location                        |
| -----: | ----: | ------: | ------------------------------- |
| 100.0% | 456 B |      19 | java.util.stream.IntStream:1083 |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % |  Size | Samples | Location                                                 |
| -----: | ----: | ------: | -------------------------------------------------------- |
| 100.0% | 432 B |       9 | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:352 |

##### `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans)

|     % | Size | Samples | Location                                     |
| ----: | ---: | ------: | -------------------------------------------- |
| 53.3% | 64 B |       2 | org.renaissance.jdk.concurrent.JavaKMeans:53 |
| 46.7% | 56 B |       1 | org.renaissance.jdk.concurrent.JavaKMeans:55 |

##### `lambda$boxed$0(int)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % | Size | Samples | Location                                                 |
| -----: | ---: | ------: | -------------------------------------------------------- |
| 100.0% | 80 B |       2 | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:327 |

##### `collectGarbage(String)` (org.renaissance.harness.ExecutionPlugins$ForceGcPlugin)

|      % | Size | Samples | Location                                                  |
| -----: | ---: | ------: | --------------------------------------------------------- |
| 100.0% | 56 B |       2 | org.renaissance.harness.ExecutionPlugins$ForceGcPlugin:26 |

#### Callers

Callers ranked by contribution to each function's self size. Caller attribution may be imprecise due to inlining.

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |   Size | Samples | Caller              | Location                                                 |
| -----: | -----: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% | 6.9 MB |   3,500 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |    Size | Samples | Caller      | Location                                             |
| -----: | ------: | ------: | ----------- | ---------------------------------------------------- |
| 100.0% | 18.5 kB |     386 | `compute()` | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Caller      | Location                                             |
| -----: | ------: | ------: | ----------- | ---------------------------------------------------- |
| 100.0% | 15.6 kB |     278 | `compute()` | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |

##### `add(double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |    Size | Samples | Caller                               | Location                                                |
| -----: | ------: | ------: | ------------------------------------ | ------------------------------------------------------- |
| 100.0% | 11.4 kB |     204 | `combineResults(double[], double[])` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |    Size | Samples | Caller              | Location                                                |
| -----: | ------: | ------: | ------------------- | ------------------------------------------------------- |
| 100.0% | 10.9 kB |     194 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Caller              | Location                                                 |
| -----: | ------: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% | 7.78 kB |     162 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans)

|     % |    Size | Samples | Caller                     | Location                                                 |
| ----: | ------: | ------: | -------------------------- | -------------------------------------------------------- |
| 98.7% | 7.54 kB |     157 | `combineResults(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  1.3% |    96 B |       2 | `combineResults(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |

##### `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Caller                  | Location                                                             |
| -----: | ------: | ------: | ----------------------- | -------------------------------------------------------------------- |
| 100.0% | 6.05 kB |     252 | `apply(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0 |

##### `lambda$collectClusters$0(Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Caller          | Location                                                                            |
| -----: | ------: | ------: | --------------- | ----------------------------------------------------------------------------------- |
| 100.0% | 5.57 kB |     232 | `apply(Object)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000000801186b38 |

##### `valueOf(double)` (java.lang.Double)

|     % |    Size | Samples | Caller                                           | Location                                  |
| ----: | ------: | ------: | ------------------------------------------------ | ----------------------------------------- |
| 90.8% | 2.38 kB |      99 | `lambda$generateData$3(int, int, Random[], int)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `lambda$generateData$4(int)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Caller       | Location                                                             |
| -----: | ------: | ------: | ------------ | -------------------------------------------------------------------- |
| 100.0% | 1.72 kB |      43 | `apply(int)` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801125d48 |

##### `computeClusterAverages()` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % |  Size | Samples | Caller              | Location                                             |
| -----: | ----: | ------: | ------------------- | ---------------------------------------------------- |
| 100.0% | 576 B |      12 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |

##### `range(int, int)` (java.util.stream.IntStream)

|      % |  Size | Samples | Caller                                           | Location                                  |
| -----: | ----: | ------: | ------------------------------------------------ | ----------------------------------------- |
| 100.0% | 456 B |      19 | `lambda$generateData$5(int, int, Random[], int)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % |  Size | Samples | Caller      | Location                                             |
| -----: | ----: | ------: | ----------- | ---------------------------------------------------- |
| 100.0% | 432 B |       9 | `compute()` | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |

##### `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |  Size | Samples | Caller   | Location                                                             |
| -----: | ----: | ------: | -------- | -------------------------------------------------------------------- |
| 100.0% | 120 B |       3 | `call()` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68 |

##### `lambda$boxed$0(int)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % | Size | Samples | Caller       | Location                                                                        |
| -----: | ---: | ------: | ------------ | ------------------------------------------------------------------------------- |
| 100.0% | 80 B |       2 | `apply(int)` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask$$Lambda.0x0000000801187510 |

##### `collectGarbage(String)` (org.renaissance.harness.ExecutionPlugins$ForceGcPlugin)

|      % | Size | Samples | Caller                                      | Location                                               |
| -----: | ---: | ------: | ------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 56 B |       2 | `afterOperationSetUp(String, int, boolean)` | org.renaissance.harness.ExecutionPlugins$ForceGcPlugin |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |    Size | Samples | Function                               | Location                                                             |
| ----: | ------: | ------: | -------------------------------------- | -------------------------------------------------------------------- |
| 99.8% | 3.31 GB |  75,720 | `compute()`                            | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask                 |
| 99.4% | 3.29 GB |  57,537 | `merge(Map, Map)`                      | org.renaissance.jdk.concurrent.JavaKMeans                            |
| 99.4% | 3.29 GB |  57,531 | `combineResults(Map, Map)`             | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
| 99.4% | 3.29 GB |  57,531 | `combineResults(Object, Object)`       | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
| 99.4% | 3.29 GB |  57,035 | `merge(Object, Object, BiFunction)`    | java.util.HashMap                                                    |
| 99.4% | 3.29 GB |  57,035 | `lambda$merge$7(Map, Object, List)`    | org.renaissance.jdk.concurrent.JavaKMeans                            |
| 99.4% | 3.29 GB |  57,035 | `accept(Object, Object)`               | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88 |
| 99.4% | 3.29 GB |  57,035 | `forEach(BiConsumer)`                  | java.util.HashMap                                                    |
| 99.4% | 3.29 GB |  57,033 | `lambda$merge$6(List, List)`           | org.renaissance.jdk.concurrent.JavaKMeans                            |
| 99.4% | 3.29 GB |  57,033 | `apply(Object, Object)`                | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0 |
| 80.8% | 2.67 GB |  42,397 | `addAll(Collection)`                   | java.util.ArrayList                                                  |
| 62.4% | 2.07 GB |  15,462 | `invoke()`                             | java.util.concurrent.ForkJoinTask                                    |
| 62.4% | 2.06 GB |  15,062 | `lambda$run$0(int, List, int)`         | org.renaissance.jdk.concurrent.JavaKMeans                            |
| 62.4% | 2.06 GB |  15,062 | `call()`                               | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68 |
| 30.3% |    1 GB |  60,435 | `join()`                               | java.util.concurrent.ForkJoinTask                                    |
| 18.7% |  619 MB |  14,384 | `<init>(Collection)`                   | java.util.ArrayList                                                  |
|  0.4% |   12 MB |  17,059 | `computeDirectly()`                    | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|  0.3% | 10.4 MB |  12,749 | `add(Object)`                          | java.util.ArrayList                                                  |
|  0.2% |  6.9 MB |   3,500 | `findNearestCentroid()`                | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|  0.2% | 6.24 MB |     396 | `launchHarnessClass(String, String[])` | org.renaissance.core.Launcher                                        |

#### Callees

Callees ranked by contribution to each function's total size. Callee attribution may be imprecise due to inlining.

##### `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)

|     % |    Size | Samples | Callee                           | Location                                                 |
| ----: | ------: | ------: | -------------------------------- | -------------------------------------------------------- |
| 99.6% | 3.29 GB |  57,531 | `combineResults(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| 30.4% |    1 GB |  60,435 | `join()`                         | java.util.concurrent.ForkJoinTask                        |
|  0.4% |   12 MB |  17,059 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| <0.1% | 24.6 kB |     476 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
| <0.1% | 18.5 kB |     386 | `createSubtask(int, int)`        | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |

##### `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Callee                | Location          |
| -----: | ------: | ------: | --------------------- | ----------------- |
| 100.0% | 3.29 GB |  57,035 | `forEach(BiConsumer)` | java.util.HashMap |
|  <0.1% | 11.6 kB |     343 | `<init>(Map)`         | java.util.HashMap |

##### `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Callee            | Location                                  |
| -----: | ------: | ------: | ----------------- | ----------------------------------------- |
| 100.0% | 3.29 GB |  57,531 | `merge(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `combineResults(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Callee                     | Location                                                 |
| -----: | ------: | ------: | -------------------------- | -------------------------------------------------------- |
| 100.0% | 3.29 GB |  57,531 | `combineResults(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `merge(Object, Object, BiFunction)` (java.util.HashMap)

|      % |    Size | Samples | Callee                  | Location                                                             |
| -----: | ------: | ------: | ----------------------- | -------------------------------------------------------------------- |
| 100.0% | 3.29 GB |  57,033 | `apply(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0 |

##### `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Callee                              | Location          |
| -----: | ------: | ------: | ----------------------------------- | ----------------- |
| 100.0% | 3.29 GB |  57,035 | `merge(Object, Object, BiFunction)` | java.util.HashMap |

##### `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88)

|      % |    Size | Samples | Callee                              | Location                                  |
| -----: | ------: | ------: | ----------------------------------- | ----------------------------------------- |
| 100.0% | 3.29 GB |  57,035 | `lambda$merge$7(Map, Object, List)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `forEach(BiConsumer)` (java.util.HashMap)

|      % |    Size | Samples | Callee                   | Location                                                             |
| -----: | ------: | ------: | ------------------------ | -------------------------------------------------------------------- |
| 100.0% | 3.29 GB |  57,035 | `accept(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88 |

##### `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|     % |    Size | Samples | Callee               | Location            |
| ----: | ------: | ------: | -------------------- | ------------------- |
| 81.2% | 2.67 GB |  42,397 | `addAll(Collection)` | java.util.ArrayList |
| 18.8% |  619 MB |  14,384 | `<init>(Collection)` | java.util.ArrayList |

##### `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0)

|      % |    Size | Samples | Callee                       | Location                                  |
| -----: | ------: | ------: | ---------------------------- | ----------------------------------------- |
| 100.0% | 3.29 GB |  57,033 | `lambda$merge$6(List, List)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Callee     | Location                          |
| -----: | ------: | ------: | ---------- | --------------------------------- |
| 100.0% | 2.06 GB |  15,059 | `invoke()` | java.util.concurrent.ForkJoinTask |

##### `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68)

|      % |    Size | Samples | Callee                         | Location                                  |
| -----: | ------: | ------: | ------------------------------ | ----------------------------------------- |
| 100.0% | 2.06 GB |  15,062 | `lambda$run$0(int, List, int)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Callee                   | Location                                                 |
| -----: | ------: | ------: | ------------------------ | -------------------------------------------------------- |
| 100.0% |   12 MB |  17,059 | `computeDirectly()`      | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  57.6% |  6.9 MB |   3,500 | `findNearestCentroid()`  | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  42.4% | 5.09 MB |  13,559 | `collectClusters(int[])` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `launchHarnessClass(String, String[])` (org.renaissance.core.Launcher)

|      % |    Size | Samples | Callee                                                      | Location                      |
| -----: | ------: | ------: | ----------------------------------------------------------- | ----------------------------- |
| 100.0% | 6.24 MB |     394 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | org.renaissance.core.Launcher |
|  <0.1% |   184 B |       2 | `createScratchRoot(Path, boolean)`                          | org.renaissance.core.Launcher |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

|     % |    Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 35.8% | 1.19 GB |   3,068 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 20.4% |  677 MB |   7,883 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  9.8% |  324 MB |   1,691 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  8.7% |  287 MB |   1,164 | `<init>(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  5.7% |  188 MB |   5,037 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  4.6% |  153 MB |   2,779 | `<init>(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  3.0% | 97.9 MB |   1,006 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68)                                                                                                                                                                                                                                                                                                                                                             |
|  2.2% | 74.1 MB |     583 | `<init>(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  2.0% |   66 MB |   4,246 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.2% | 39.5 MB |   1,681 | `<init>(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.0% |   34 MB |   3,886 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.8% | 28.1 MB |     537 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68)                                                                                                                                                                                                                                         |
|  0.7% | 22.3 MB |     350 | `<init>(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68)                                                                                                                                                                                                                                                                                                                                                             |
|  0.6% | 19.7 MB |   3,723 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                     |
|  0.4% | 14.2 MB |   1,374 | `<init>(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.4% | 13.7 MB |     488 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68)                                                                                                                     |
|  0.3% | 10.2 MB |   3,269 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                 |
|  0.2% | 7.23 MB |     490 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68) |
|  0.2% | 6.98 MB |   1,265 | `<init>(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.2% | 6.55 MB |     205 | `<init>(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68)                                                                                                                                                                                                                                         |


# Retained heap profile

Retained 6.64 MB over 193 samples (34.4 kB per sample).

| Category |      % |    Size | Samples |
| -------- | -----: | ------: | ------: |
| stdlib   | 100.0% | 6.63 MB |     145 |
| ours     |  <0.1% | 1.95 kB |      48 |

## Hottest functions

### Self size

Functions ranked by bytes retained directly in the function body, excluding callees.

|     % |    Size | Samples | Function                     | Location                                                |
| ----: | ------: | ------: | ---------------------------- | ------------------------------------------------------- |
| <0.1% | 2.38 kB |      99 | `valueOf(double)`            | java.lang.Double                                        |
| <0.1% | 1.72 kB |      43 | `lambda$generateData$4(int)` | org.renaissance.jdk.concurrent.JavaKMeans               |
| <0.1% |    56 B |       1 | `vectorSum()`                | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |
| <0.1% |    56 B |       1 | `add(double[], double[])`    | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |
| <0.1% |    48 B |       1 | `merge(Map, Map)`            | org.renaissance.jdk.concurrent.JavaKMeans               |
| <0.1% |    48 B |       1 | `createSubtask(int, int)`    | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |
| <0.1% |    24 B |       1 | `collectGarbage(String)`     | org.renaissance.harness.ExecutionPlugins$ForceGcPlugin  |

#### Lines

Lines ranked by contribution to each function's self size.

##### `valueOf(double)` (java.lang.Double)

|      % |    Size | Samples | Location             |
| -----: | ------: | ------: | -------------------- |
| 100.0% | 2.38 kB |      99 | java.lang.Double:773 |

##### `lambda$generateData$4(int)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Location                                     |
| -----: | ------: | ------: | -------------------------------------------- |
| 100.0% | 1.72 kB |      43 | org.renaissance.jdk.concurrent.JavaKMeans:87 |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Size | Samples | Location                                                    |
| -----: | ---: | ------: | ----------------------------------------------------------- |
| 100.0% | 56 B |       1 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400 |

##### `add(double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Size | Samples | Location                                                    |
| -----: | ---: | ------: | ----------------------------------------------------------- |
| 100.0% | 56 B |       1 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:430 |

##### `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % | Size | Samples | Location                                      |
| -----: | ---: | ------: | --------------------------------------------- |
| 100.0% | 48 B |       1 | org.renaissance.jdk.concurrent.JavaKMeans:110 |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Size | Samples | Location                                                    |
| -----: | ---: | ------: | ----------------------------------------------------------- |
| 100.0% | 48 B |       1 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419 |

##### `collectGarbage(String)` (org.renaissance.harness.ExecutionPlugins$ForceGcPlugin)

|      % | Size | Samples | Location                                                  |
| -----: | ---: | ------: | --------------------------------------------------------- |
| 100.0% | 24 B |       1 | org.renaissance.harness.ExecutionPlugins$ForceGcPlugin:26 |

#### Callers

Callers ranked by contribution to each function's self size. Caller attribution may be imprecise due to inlining.

##### `valueOf(double)` (java.lang.Double)

|      % |    Size | Samples | Caller                                           | Location                                  |
| -----: | ------: | ------: | ------------------------------------------------ | ----------------------------------------- |
| 100.0% | 2.38 kB |      99 | `lambda$generateData$3(int, int, Random[], int)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `lambda$generateData$4(int)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Caller       | Location                                                             |
| -----: | ------: | ------: | ------------ | -------------------------------------------------------------------- |
| 100.0% | 1.72 kB |      43 | `apply(int)` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801125d48 |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Size | Samples | Caller              | Location                                                |
| -----: | ---: | ------: | ------------------- | ------------------------------------------------------- |
| 100.0% | 56 B |       1 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `add(double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Size | Samples | Caller                               | Location                                                |
| -----: | ---: | ------: | ------------------------------------ | ------------------------------------------------------- |
| 100.0% | 56 B |       1 | `combineResults(double[], double[])` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % | Size | Samples | Caller                     | Location                                                 |
| -----: | ---: | ------: | -------------------------- | -------------------------------------------------------- |
| 100.0% | 48 B |       1 | `combineResults(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Size | Samples | Caller      | Location                                             |
| -----: | ---: | ------: | ----------- | ---------------------------------------------------- |
| 100.0% | 48 B |       1 | `compute()` | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |

##### `collectGarbage(String)` (org.renaissance.harness.ExecutionPlugins$ForceGcPlugin)

|      % | Size | Samples | Caller                                      | Location                                               |
| -----: | ---: | ------: | ------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 24 B |       1 | `afterOperationSetUp(String, int, boolean)` | org.renaissance.harness.ExecutionPlugins$ForceGcPlugin |

### Total size

Functions ranked by total bytes retained in the function and all its callees.

|     % |    Size | Samples | Function                                                    | Location                                                             |
| ----: | ------: | ------: | ----------------------------------------------------------- | -------------------------------------------------------------------- |
| 67.4% | 4.47 MB |      41 | `compute()`                                                 | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask                 |
| 67.4% | 4.47 MB |      35 | `merge(Map, Map)`                                           | org.renaissance.jdk.concurrent.JavaKMeans                            |
| 67.4% | 4.47 MB |      35 | `combineResults(Map, Map)`                                  | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
| 67.4% | 4.47 MB |      35 | `combineResults(Object, Object)`                            | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
| 67.3% | 4.47 MB |      34 | `lambda$merge$6(List, List)`                                | org.renaissance.jdk.concurrent.JavaKMeans                            |
| 67.3% | 4.47 MB |      34 | `apply(Object, Object)`                                     | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0 |
| 67.3% | 4.47 MB |      34 | `merge(Object, Object, BiFunction)`                         | java.util.HashMap                                                    |
| 67.3% | 4.47 MB |      34 | `lambda$merge$7(Map, Object, List)`                         | org.renaissance.jdk.concurrent.JavaKMeans                            |
| 67.3% | 4.47 MB |      34 | `accept(Object, Object)`                                    | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88 |
| 67.3% | 4.47 MB |      34 | `forEach(BiConsumer)`                                       | java.util.HashMap                                                    |
| 55.2% | 3.67 MB |      25 | `addAll(Collection)`                                        | java.util.ArrayList                                                  |
| 50.4% | 3.34 MB |      14 | `invoke()`                                                  | java.util.concurrent.ForkJoinTask                                    |
| 50.4% | 3.34 MB |      12 | `lambda$run$0(int, List, int)`                              | org.renaissance.jdk.concurrent.JavaKMeans                            |
| 50.4% | 3.34 MB |      12 | `call()`                                                    | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68 |
| 32.6% | 2.17 MB |     149 | `launchHarnessClass(String, String[])`                      | org.renaissance.core.Launcher                                        |
| 32.6% | 2.17 MB |     149 | `main(String[])`                                            | org.renaissance.core.Launcher                                        |
| 32.6% | 2.17 MB |     148 | `main(String[])`                                            | org.renaissance.harness.RenaissanceSuite$                            |
| 32.6% | 2.17 MB |     148 | `main(String[])`                                            | org.renaissance.harness.RenaissanceSuite                             |
| 32.6% | 2.17 MB |     148 | `invoke(Object, Object[])`                                  | java.lang.reflect.Method                                             |
| 32.6% | 2.17 MB |     148 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | org.renaissance.core.Launcher                                        |

#### Callees

Callees ranked by contribution to each function's total size. Callee attribution may be imprecise due to inlining.

##### `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)

|      % |    Size | Samples | Callee                           | Location                                                 |
| -----: | ------: | ------: | -------------------------------- | -------------------------------------------------------- |
| 100.0% | 4.47 MB |      35 | `combineResults(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  33.0% | 1.47 MB |      29 | `join()`                         | java.util.concurrent.ForkJoinTask                        |
|  <0.1% | 1.44 kB |       3 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  <0.1% |   112 B |       2 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
|  <0.1% |    56 B |       1 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |

##### `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Callee                | Location          |
| -----: | ------: | ------: | --------------------- | ----------------- |
| 100.0% | 4.47 MB |      34 | `forEach(BiConsumer)` | java.util.HashMap |

##### `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Callee            | Location                                  |
| -----: | ------: | ------: | ----------------- | ----------------------------------------- |
| 100.0% | 4.47 MB |      35 | `merge(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `combineResults(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Callee                     | Location                                                 |
| -----: | ------: | ------: | -------------------------- | -------------------------------------------------------- |
| 100.0% | 4.47 MB |      35 | `combineResults(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|     % |    Size | Samples | Callee               | Location            |
| ----: | ------: | ------: | -------------------- | ------------------- |
| 82.0% | 3.67 MB |      25 | `addAll(Collection)` | java.util.ArrayList |
| 18.0% |  805 kB |       9 | `<init>(Collection)` | java.util.ArrayList |

##### `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0)

|      % |    Size | Samples | Callee                       | Location                                  |
| -----: | ------: | ------: | ---------------------------- | ----------------------------------------- |
| 100.0% | 4.47 MB |      34 | `lambda$merge$6(List, List)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `merge(Object, Object, BiFunction)` (java.util.HashMap)

|      % |    Size | Samples | Callee                  | Location                                                             |
| -----: | ------: | ------: | ----------------------- | -------------------------------------------------------------------- |
| 100.0% | 4.47 MB |      34 | `apply(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0 |

##### `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Callee                              | Location          |
| -----: | ------: | ------: | ----------------------------------- | ----------------- |
| 100.0% | 4.47 MB |      34 | `merge(Object, Object, BiFunction)` | java.util.HashMap |

##### `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88)

|      % |    Size | Samples | Callee                              | Location                                  |
| -----: | ------: | ------: | ----------------------------------- | ----------------------------------------- |
| 100.0% | 4.47 MB |      34 | `lambda$merge$7(Map, Object, List)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `forEach(BiConsumer)` (java.util.HashMap)

|      % |    Size | Samples | Callee                   | Location                                                             |
| -----: | ------: | ------: | ------------------------ | -------------------------------------------------------------------- |
| 100.0% | 4.47 MB |      34 | `accept(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88 |

##### `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Callee     | Location                          |
| -----: | ------: | ------: | ---------- | --------------------------------- |
| 100.0% | 3.34 MB |      12 | `invoke()` | java.util.concurrent.ForkJoinTask |

##### `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68)

|      % |    Size | Samples | Callee                         | Location                                  |
| -----: | ------: | ------: | ------------------------------ | ----------------------------------------- |
| 100.0% | 3.34 MB |      12 | `lambda$run$0(int, List, int)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `launchHarnessClass(String, String[])` (org.renaissance.core.Launcher)

|      % |    Size | Samples | Callee                                                      | Location                      |
| -----: | ------: | ------: | ----------------------------------------------------------- | ----------------------------- |
| 100.0% | 2.17 MB |     148 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | org.renaissance.core.Launcher |
|  <0.1% |    32 B |       1 | `createScratchRoot(Path, boolean)`                          | org.renaissance.core.Launcher |

##### `main(String[])` (org.renaissance.core.Launcher)

|      % |    Size | Samples | Callee                                 | Location                      |
| -----: | ------: | ------: | -------------------------------------- | ----------------------------- |
| 100.0% | 2.17 MB |     149 | `launchHarnessClass(String, String[])` | org.renaissance.core.Launcher |

##### `main(String[])` (org.renaissance.harness.RenaissanceSuite$)

|      % |    Size | Samples | Callee                                                                        | Location                                  |
| -----: | ------: | ------: | ----------------------------------------------------------------------------- | ----------------------------------------- |
| 100.0% | 2.17 MB |     145 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | org.renaissance.harness.RenaissanceSuite$ |
|  <0.1% |    64 B |       2 | `<clinit>()`                                                                  | scala.Predef$                             |
|  <0.1% |    32 B |       1 | `parse(String[])`                                                             | org.renaissance.harness.ConfigParser      |

##### `main(String[])` (org.renaissance.harness.RenaissanceSuite)

|      % |    Size | Samples | Callee           | Location                                  |
| -----: | ------: | ------: | ---------------- | ----------------------------------------- |
| 100.0% | 2.17 MB |     148 | `main(String[])` | org.renaissance.harness.RenaissanceSuite$ |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (org.renaissance.core.Launcher)

|      % |    Size | Samples | Callee                     | Location                 |
| -----: | ------: | ------: | -------------------------- | ------------------------ |
| 100.0% | 2.17 MB |     148 | `invoke(Object, Object[])` | java.lang.reflect.Method |

## Hottest call stacks

Call stacks ranked by bytes retained in their leaf frame.

|     % |    Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 32.6% | 2.16 MB |       1 | `add(Object)` (java.util.ArrayList) ← `collect(Collector)` (java.util.stream.ReferencePipeline) ← `generateData(int, int, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `setUpBeforeAll(BenchmarkContext)` (org.renaissance.jdk.concurrent.FjKmeans) ← `executeBenchmark()` (org.renaissance.harness.ExecutionDriver) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (org.renaissance.harness.RenaissanceSuite$) ← `applyVoid(Object)` (org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000080111efe0) ← `foreach(Function1)` (scala.collection.immutable.List) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (org.renaissance.harness.RenaissanceSuite$) ← `main(String[])` ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (org.renaissance.core.Launcher) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 27.1% |  1.8 MB |       4 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 12.0% |  799 kB |       3 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 11.7% |  775 kB |       6 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  6.0% |  399 kB |       1 | `<init>(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  3.0% |  199 kB |       1 | `<init>(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.9% |  128 kB |       4 | `<init>(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.9% |  125 kB |       2 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.8% | 50.1 kB |       1 | `<init>(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.8% | 49.9 kB |       1 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68)                                                                                                                                                                                                                                                                                                                                                             |
|  0.8% | 49.8 kB |       1 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68) |
|  0.5% | 31.4 kB |       3 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.4% | 25.3 kB |       1 | `<init>(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.3% | 18.8 kB |       3 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.3% | 18.6 kB |       2 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| <0.1% | 3.24 kB |       1 | `<init>(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| <0.1% | 2.38 kB |      99 | `valueOf(double)` (java.lang.Double) ← `lambda$generateData$3(int, int, Random[], int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(int)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801125b10) ← `toArray(IntFunction)` (java.util.stream.ReferencePipeline) ← `lambda$generateData$5(int, int, Random[], int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(int)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011258d8) ← `collect(Collector)` (java.util.stream.ReferencePipeline) ← `generateData(int, int, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `setUpBeforeAll(BenchmarkContext)` (org.renaissance.jdk.concurrent.FjKmeans) ← `executeBenchmark()` (org.renaissance.harness.ExecutionDriver) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (org.renaissance.harness.RenaissanceSuite$) ← `applyVoid(Object)` (org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000080111efe0) ← `foreach(Function1)` (scala.collection.immutable.List) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (org.renaissance.harness.RenaissanceSuite$) ← `main(String[])` ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (org.renaissance.core.Launcher) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                           |
| <0.1% | 1.72 kB |      43 | `lambda$generateData$4(int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(int)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801125d48) ← `toArray(IntFunction)` (java.util.stream.ReferencePipeline) ← `lambda$generateData$5(int, int, Random[], int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(int)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011258d8) ← `collect(Collector)` (java.util.stream.ReferencePipeline) ← `generateData(int, int, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `setUpBeforeAll(BenchmarkContext)` (org.renaissance.jdk.concurrent.FjKmeans) ← `executeBenchmark()` (org.renaissance.harness.ExecutionDriver) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (org.renaissance.harness.RenaissanceSuite$) ← `applyVoid(Object)` (org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000080111efe0) ← `foreach(Function1)` (scala.collection.immutable.List) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (org.renaissance.harness.RenaissanceSuite$) ← `main(String[])` ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (org.renaissance.core.Launcher) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                      |
| <0.1% |   768 B |       2 | `add(Object)` (java.util.ArrayList) ← `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| <0.1% |   672 B |       1 | `add(Object)` (java.util.ArrayList) ← `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

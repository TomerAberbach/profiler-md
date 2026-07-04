# Allocated heap profile

Allocated 3.35 GB over 76,154 samples (44 kB per sample).

| Category |     % |    Size | Samples |
| -------- | ----: | ------: | ------: |
| stdlib   | 99.8% | 3.34 GB |  70,926 |
| ours     |  0.2% | 6.73 MB |   5,228 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |    Size | Samples | Function                             | Location                                                 |
| ----: | ------: | ------: | ------------------------------------ | -------------------------------------------------------- |
|  0.2% | 6.65 MB |   3,375 | `findNearestCentroid()`              | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| <0.1% | 17.8 kB |     371 | `createSubtask(int, int)`            | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| <0.1% | 17.7 kB |     316 | `createSubtask(int, int)`            | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| <0.1% |   10 kB |     179 | `add(double[], double[])`            | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| <0.1% | 9.98 kB |     208 | `collectClusters(int[])`             | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| <0.1% | 7.67 kB |     137 | `vectorSum()`                        | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| <0.1% | 6.96 kB |     145 | `merge(Map, Map)`                    | org.renaissance.jdk.concurrent.JavaKMeans                |
| <0.1% | 5.21 kB |     217 | `lambda$merge$6(List, List)`         | org.renaissance.jdk.concurrent.JavaKMeans                |
| <0.1% | 4.73 kB |     197 | `lambda$collectClusters$0(Double[])` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| <0.1% | 3.46 kB |     144 | `valueOf(double)`                    | java.lang.Double                                         |
| <0.1% |  1.6 kB |      40 | `lambda$generateData$4(int)`         | org.renaissance.jdk.concurrent.JavaKMeans                |
| <0.1% |   864 B |      18 | `createSubtask(int, int)`            | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
| <0.1% |   768 B |      16 | `computeClusterAverages()`           | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
| <0.1% |   624 B |      26 | `range(int, int)`                    | java.util.stream.IntStream                               |
| <0.1% |   168 B |       3 | `div(double[], int)`                 | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
| <0.1% |    96 B |       2 | `average(List)`                      | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
| <0.1% |    64 B |       2 | `lambda$run$0(int, List, int)`       | org.renaissance.jdk.concurrent.JavaKMeans                |
| <0.1% |    56 B |       2 | `collectGarbage(String)`             | org.renaissance.harness.ExecutionPlugins$ForceGcPlugin   |

#### Lines

Lines ranked by contribution to each function's self size.

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Location                                                     |
| -----: | ------: | ------: | ------------------------------------------------------------ |
| 100.0% | 6.65 MB |   3,375 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:223 |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |    Size | Samples | Location                                                    |
| -----: | ------: | ------: | ----------------------------------------------------------- |
| 100.0% | 17.8 kB |     371 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419 |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Location                                                     |
| -----: | ------: | ------: | ------------------------------------------------------------ |
| 100.0% | 17.7 kB |     316 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261 |

##### `add(double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |  Size | Samples | Location                                                    |
| -----: | ----: | ------: | ----------------------------------------------------------- |
| 100.0% | 10 kB |     179 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:430 |

##### `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Location                                                     |
| -----: | ------: | ------: | ------------------------------------------------------------ |
| 100.0% | 9.98 kB |     208 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:209 |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |    Size | Samples | Location                                                    |
| -----: | ------: | ------: | ----------------------------------------------------------- |
| 100.0% | 7.67 kB |     137 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400 |

##### `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Location                                      |
| -----: | ------: | ------: | --------------------------------------------- |
| 100.0% | 6.96 kB |     145 | org.renaissance.jdk.concurrent.JavaKMeans:110 |

##### `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Location                                      |
| -----: | ------: | ------: | --------------------------------------------- |
| 100.0% | 5.21 kB |     217 | org.renaissance.jdk.concurrent.JavaKMeans:114 |

##### `lambda$collectClusters$0(Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Location                                                     |
| -----: | ------: | ------: | ------------------------------------------------------------ |
| 100.0% | 4.73 kB |     197 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215 |

##### `valueOf(double)` (java.lang.Double)

|      % |    Size | Samples | Location             |
| -----: | ------: | ------: | -------------------- |
| 100.0% | 3.46 kB |     144 | java.lang.Double:773 |

##### `lambda$generateData$4(int)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |   Size | Samples | Location                                     |
| -----: | -----: | ------: | -------------------------------------------- |
| 100.0% | 1.6 kB |      40 | org.renaissance.jdk.concurrent.JavaKMeans:87 |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % |  Size | Samples | Location                                                 |
| -----: | ----: | ------: | -------------------------------------------------------- |
| 100.0% | 864 B |      18 | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:352 |

##### `computeClusterAverages()` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % |  Size | Samples | Location                                                 |
| -----: | ----: | ------: | -------------------------------------------------------- |
| 100.0% | 768 B |      16 | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:314 |

##### `range(int, int)` (java.util.stream.IntStream)

|      % |  Size | Samples | Location                        |
| -----: | ----: | ------: | ------------------------------- |
| 100.0% | 624 B |      26 | java.util.stream.IntStream:1083 |

##### `div(double[], int)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % |  Size | Samples | Location                                                 |
| -----: | ----: | ------: | -------------------------------------------------------- |
| 100.0% | 168 B |       3 | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:339 |

##### `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % | Size | Samples | Location                                                 |
| -----: | ---: | ------: | -------------------------------------------------------- |
| 100.0% | 96 B |       2 | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:332 |

##### `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % | Size | Samples | Location                                     |
| -----: | ---: | ------: | -------------------------------------------- |
| 100.0% | 64 B |       2 | org.renaissance.jdk.concurrent.JavaKMeans:53 |

##### `collectGarbage(String)` (org.renaissance.harness.ExecutionPlugins$ForceGcPlugin)

|      % | Size | Samples | Location                                                  |
| -----: | ---: | ------: | --------------------------------------------------------- |
| 100.0% | 56 B |       2 | org.renaissance.harness.ExecutionPlugins$ForceGcPlugin:26 |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Caller              | Location                                                 |
| -----: | ------: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% | 6.65 MB |   3,375 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |    Size | Samples | Caller      | Location                                             |
| -----: | ------: | ------: | ----------- | ---------------------------------------------------- |
| 100.0% | 17.8 kB |     371 | `compute()` | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Caller      | Location                                             |
| -----: | ------: | ------: | ----------- | ---------------------------------------------------- |
| 100.0% | 17.7 kB |     316 | `compute()` | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |

##### `add(double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |  Size | Samples | Caller                               | Location                                                |
| -----: | ----: | ------: | ------------------------------------ | ------------------------------------------------------- |
| 100.0% | 10 kB |     179 | `combineResults(double[], double[])` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Caller              | Location                                                 |
| -----: | ------: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% | 9.98 kB |     208 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |    Size | Samples | Caller              | Location                                                |
| -----: | ------: | ------: | ------------------- | ------------------------------------------------------- |
| 100.0% | 7.67 kB |     137 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans)

|     % |    Size | Samples | Caller                     | Location                                                 |
| ----: | ------: | ------: | -------------------------- | -------------------------------------------------------- |
| 96.6% | 6.72 kB |     140 | `combineResults(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  3.4% |   240 B |       5 | `combineResults(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |

##### `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Caller                  | Location                                                             |
| -----: | ------: | ------: | ----------------------- | -------------------------------------------------------------------- |
| 100.0% | 5.21 kB |     217 | `apply(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460 |

##### `lambda$collectClusters$0(Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Caller          | Location                                                                            |
| -----: | ------: | ------: | --------------- | ----------------------------------------------------------------------------------- |
| 100.0% | 4.73 kB |     197 | `apply(Object)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001186b38 |

##### `valueOf(double)` (java.lang.Double)

|     % |    Size | Samples | Caller                                           | Location                                  |
| ----: | ------: | ------: | ------------------------------------------------ | ----------------------------------------- |
| 92.4% | 3.19 kB |     133 | `lambda$generateData$3(int, int, Random[], int)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `lambda$generateData$4(int)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |   Size | Samples | Caller       | Location                                                             |
| -----: | -----: | ------: | ------------ | -------------------------------------------------------------------- |
| 100.0% | 1.6 kB |      40 | `apply(int)` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001125d48 |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % |  Size | Samples | Caller      | Location                                             |
| -----: | ----: | ------: | ----------- | ---------------------------------------------------- |
| 100.0% | 864 B |      18 | `compute()` | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |

##### `computeClusterAverages()` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % |  Size | Samples | Caller              | Location                                             |
| -----: | ----: | ------: | ------------------- | ---------------------------------------------------- |
| 100.0% | 768 B |      16 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |

##### `range(int, int)` (java.util.stream.IntStream)

|      % |  Size | Samples | Caller                                           | Location                                  |
| -----: | ----: | ------: | ------------------------------------------------ | ----------------------------------------- |
| 100.0% | 624 B |      26 | `lambda$generateData$5(int, int, Random[], int)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `div(double[], int)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % |  Size | Samples | Caller          | Location                                             |
| -----: | ----: | ------: | --------------- | ---------------------------------------------------- |
| 100.0% | 168 B |       3 | `average(List)` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |

##### `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % | Size | Samples | Caller                     | Location                                             |
| -----: | ---: | ------: | -------------------------- | ---------------------------------------------------- |
| 100.0% | 96 B |       2 | `computeClusterAverages()` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |

##### `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % | Size | Samples | Caller   | Location                                                             |
| -----: | ---: | ------: | -------- | -------------------------------------------------------------------- |
| 100.0% | 64 B |       2 | `call()` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68 |

##### `collectGarbage(String)` (org.renaissance.harness.ExecutionPlugins$ForceGcPlugin)

|      % | Size | Samples | Caller                                      | Location                                               |
| -----: | ---: | ------: | ------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 56 B |       2 | `afterOperationSetUp(String, int, boolean)` | org.renaissance.harness.ExecutionPlugins$ForceGcPlugin |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |    Size | Samples | Function                                                    | Location                                                             |
| ----: | ------: | ------: | ----------------------------------------------------------- | -------------------------------------------------------------------- |
| 99.8% | 3.34 GB |  75,706 | `compute()`                                                 | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask                 |
| 99.5% | 3.33 GB |  57,983 | `merge(Map, Map)`                                           | org.renaissance.jdk.concurrent.JavaKMeans                            |
| 99.5% | 3.33 GB |  57,973 | `combineResults(Map, Map)`                                  | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
| 99.5% | 3.33 GB |  57,973 | `combineResults(Object, Object)`                            | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
| 99.5% | 3.33 GB |  57,507 | `merge(Object, Object, BiFunction)`                         | java.util.HashMap                                                    |
| 99.5% | 3.33 GB |  57,507 | `lambda$merge$7(Map, Object, List)`                         | org.renaissance.jdk.concurrent.JavaKMeans                            |
| 99.5% | 3.33 GB |  57,507 | `accept(Object, Object)`                                    | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0 |
| 99.5% | 3.33 GB |  57,507 | `forEach(BiConsumer)`                                       | java.util.HashMap                                                    |
| 99.5% | 3.33 GB |  57,505 | `lambda$merge$6(List, List)`                                | org.renaissance.jdk.concurrent.JavaKMeans                            |
| 99.5% | 3.33 GB |  57,505 | `apply(Object, Object)`                                     | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460 |
| 81.0% | 2.71 GB |  42,853 | `addAll(Collection)`                                        | java.util.ArrayList                                                  |
| 62.7% |  2.1 GB |  15,634 | `invoke()`                                                  | java.util.concurrent.ForkJoinTask                                    |
| 62.7% |  2.1 GB |  15,275 | `lambda$run$0(int, List, int)`                              | org.renaissance.jdk.concurrent.JavaKMeans                            |
| 62.7% |  2.1 GB |  15,275 | `call()`                                                    | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68 |
| 30.4% | 1.02 GB |  60,382 | `join()`                                                    | java.util.concurrent.ForkJoinTask                                    |
| 18.5% |  620 MB |  14,435 | `<init>(Collection)`                                        | java.util.ArrayList                                                  |
|  0.3% | 11.6 MB |  16,653 | `computeDirectly()`                                         | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|  0.3% | 9.48 MB |  12,439 | `add(Object)`                                               | java.util.ArrayList                                                  |
|  0.2% | 6.65 MB |   3,375 | `findNearestCentroid()`                                     | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|  0.2% | 5.62 MB |     444 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | org.renaissance.core.Launcher                                        |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)

|     % |    Size | Samples | Callee                           | Location                                                 |
| ----: | ------: | ------: | -------------------------------- | -------------------------------------------------------- |
| 99.7% | 3.33 GB |  57,973 | `combineResults(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| 30.5% | 1.02 GB |  60,382 | `join()`                         | java.util.concurrent.ForkJoinTask                        |
|  0.3% | 11.6 MB |  16,653 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| <0.1% | 21.7 kB |     422 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
| <0.1% | 17.8 kB |     371 | `createSubtask(int, int)`        | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |

##### `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Callee                               | Location                         |
| -----: | ------: | ------: | ------------------------------------ | -------------------------------- |
| 100.0% | 3.33 GB |  57,507 | `forEach(BiConsumer)`                | java.util.HashMap                |
|  <0.1% | 11.6 kB |     329 | `<init>(Map)`                        | java.util.HashMap                |
|  <0.1% |    32 B |       2 | `linkToTargetMethod(Object, Object)` | java.lang.invoke.Invokers$Holder |

##### `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Callee            | Location                                  |
| -----: | ------: | ------: | ----------------- | ----------------------------------------- |
| 100.0% | 3.33 GB |  57,973 | `merge(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `combineResults(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Callee                     | Location                                                 |
| -----: | ------: | ------: | -------------------------- | -------------------------------------------------------- |
| 100.0% | 3.33 GB |  57,973 | `combineResults(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `merge(Object, Object, BiFunction)` (java.util.HashMap)

|      % |    Size | Samples | Callee                  | Location                                                             |
| -----: | ------: | ------: | ----------------------- | -------------------------------------------------------------------- |
| 100.0% | 3.33 GB |  57,505 | `apply(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460 |

##### `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Callee                              | Location          |
| -----: | ------: | ------: | ----------------------------------- | ----------------- |
| 100.0% | 3.33 GB |  57,507 | `merge(Object, Object, BiFunction)` | java.util.HashMap |

##### `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0)

|      % |    Size | Samples | Callee                              | Location                                  |
| -----: | ------: | ------: | ----------------------------------- | ----------------------------------------- |
| 100.0% | 3.33 GB |  57,507 | `lambda$merge$7(Map, Object, List)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `forEach(BiConsumer)` (java.util.HashMap)

|      % |    Size | Samples | Callee                   | Location                                                             |
| -----: | ------: | ------: | ------------------------ | -------------------------------------------------------------------- |
| 100.0% | 3.33 GB |  57,507 | `accept(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0 |

##### `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|     % |    Size | Samples | Callee               | Location            |
| ----: | ------: | ------: | -------------------- | ------------------- |
| 81.4% | 2.71 GB |  42,853 | `addAll(Collection)` | java.util.ArrayList |
| 18.6% |  620 MB |  14,435 | `<init>(Collection)` | java.util.ArrayList |

##### `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460)

|      % |    Size | Samples | Callee                       | Location                                  |
| -----: | ------: | ------: | ---------------------------- | ----------------------------------------- |
| 100.0% | 3.33 GB |  57,505 | `lambda$merge$6(List, List)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |   Size | Samples | Callee     | Location                          |
| -----: | -----: | ------: | ---------- | --------------------------------- |
| 100.0% | 2.1 GB |  15,273 | `invoke()` | java.util.concurrent.ForkJoinTask |

##### `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68)

|      % |   Size | Samples | Callee                         | Location                                  |
| -----: | -----: | ------: | ------------------------------ | ----------------------------------------- |
| 100.0% | 2.1 GB |  15,275 | `lambda$run$0(int, List, int)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Callee                   | Location                                                 |
| -----: | ------: | ------: | ------------------------ | -------------------------------------------------------- |
| 100.0% | 11.6 MB |  16,653 | `computeDirectly()`      | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  57.3% | 6.65 MB |   3,375 | `findNearestCentroid()`  | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  42.7% | 4.95 MB |  13,278 | `collectClusters(int[])` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (org.renaissance.core.Launcher)

|      % |    Size | Samples | Callee                               | Location                          |
| -----: | ------: | ------: | ------------------------------------ | --------------------------------- |
| 100.0% | 5.62 MB |     443 | `invoke(Object, Object[])`           | java.lang.reflect.Method          |
|  <0.1% |   272 B |       1 | `createClassLoaderForModule(String)` | org.renaissance.core.ModuleLoader |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

|     % |    Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 35.7% |  1.2 GB |   3,091 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 20.5% |  685 MB |   7,908 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 10.0% |  336 MB |   1,717 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  8.7% |  291 MB |   1,196 | `<init>(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  5.4% |  182 MB |   5,065 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  4.5% |  151 MB |   2,721 | `<init>(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  2.9% | 98.4 MB |   1,001 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68)                                                                                                                                                                                                                                                                                                                                                             |
|  2.2% | 75.1 MB |     589 | `<init>(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  2.1% | 69.2 MB |   4,348 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.1% | 36.8 MB |   1,599 | `<init>(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.1% | 36.2 MB |   4,023 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.9% | 31.4 MB |     587 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68)                                                                                                                                                                                                                                         |
|  0.7% | 23.7 MB |     375 | `<init>(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68)                                                                                                                                                                                                                                                                                                                                                             |
|  0.6% | 19.7 MB |   3,750 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                     |
|  0.4% | 14.1 MB |   1,368 | `<init>(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.4% | 13.2 MB |     491 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68)                                                                                                                     |
|  0.3% |   11 MB |   3,192 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                 |
|  0.2% | 7.23 MB |   1,294 | `<init>(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.2% | 7.05 MB |   2,504 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                             |
|  0.2% |  6.6 MB |     461 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68) |


# Retained heap profile

Retained 8.88 MB over 320 samples (27.7 kB per sample).

| Category |     % |    Size | Samples |
| -------- | ----: | ------: | ------: |
| stdlib   | 99.9% | 8.87 MB |     271 |
| ours     |  0.1% |  9.7 kB |      49 |

## Hottest functions

### Self size

Functions ranked by bytes retained directly in the function body, excluding callees.

|     % |    Size | Samples | Function                     | Location                                                 |
| ----: | ------: | ------: | ---------------------------- | -------------------------------------------------------- |
|  0.1% | 7.87 kB |       4 | `findNearestCentroid()`      | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| <0.1% | 3.19 kB |     133 | `valueOf(double)`            | java.lang.Double                                         |
| <0.1% |  1.6 kB |      40 | `lambda$generateData$4(int)` | org.renaissance.jdk.concurrent.JavaKMeans                |
| <0.1% |   112 B |       2 | `createSubtask(int, int)`    | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| <0.1% |    48 B |       1 | `collectClusters(int[])`     | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| <0.1% |    48 B |       1 | `createSubtask(int, int)`    | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| <0.1% |    24 B |       1 | `collectGarbage(String)`     | org.renaissance.harness.ExecutionPlugins$ForceGcPlugin   |

#### Lines

Lines ranked by contribution to each function's self size.

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Location                                                     |
| -----: | ------: | ------: | ------------------------------------------------------------ |
| 100.0% | 7.87 kB |       4 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:223 |

##### `valueOf(double)` (java.lang.Double)

|      % |    Size | Samples | Location             |
| -----: | ------: | ------: | -------------------- |
| 100.0% | 3.19 kB |     133 | java.lang.Double:773 |

##### `lambda$generateData$4(int)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |   Size | Samples | Location                                     |
| -----: | -----: | ------: | -------------------------------------------- |
| 100.0% | 1.6 kB |      40 | org.renaissance.jdk.concurrent.JavaKMeans:87 |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |  Size | Samples | Location                                                     |
| -----: | ----: | ------: | ------------------------------------------------------------ |
| 100.0% | 112 B |       2 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261 |

##### `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Size | Samples | Location                                                     |
| -----: | ---: | ------: | ------------------------------------------------------------ |
| 100.0% | 48 B |       1 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:209 |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Size | Samples | Location                                                    |
| -----: | ---: | ------: | ----------------------------------------------------------- |
| 100.0% | 48 B |       1 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419 |

##### `collectGarbage(String)` (org.renaissance.harness.ExecutionPlugins$ForceGcPlugin)

|      % | Size | Samples | Location                                                  |
| -----: | ---: | ------: | --------------------------------------------------------- |
| 100.0% | 24 B |       1 | org.renaissance.harness.ExecutionPlugins$ForceGcPlugin:26 |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Caller              | Location                                                 |
| -----: | ------: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% | 7.87 kB |       4 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `valueOf(double)` (java.lang.Double)

|      % |    Size | Samples | Caller                                           | Location                                  |
| -----: | ------: | ------: | ------------------------------------------------ | ----------------------------------------- |
| 100.0% | 3.19 kB |     133 | `lambda$generateData$3(int, int, Random[], int)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `lambda$generateData$4(int)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |   Size | Samples | Caller       | Location                                                             |
| -----: | -----: | ------: | ------------ | -------------------------------------------------------------------- |
| 100.0% | 1.6 kB |      40 | `apply(int)` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001125d48 |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |  Size | Samples | Caller      | Location                                             |
| -----: | ----: | ------: | ----------- | ---------------------------------------------------- |
| 100.0% | 112 B |       2 | `compute()` | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |

##### `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Size | Samples | Caller              | Location                                                 |
| -----: | ---: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% | 48 B |       1 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

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
| 72.6% | 6.45 MB |     137 | `compute()`                                                 | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask                 |
| 72.4% | 6.43 MB |     112 | `merge(Map, Map)`                                           | org.renaissance.jdk.concurrent.JavaKMeans                            |
| 72.4% | 6.43 MB |     112 | `combineResults(Map, Map)`                                  | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
| 72.4% | 6.43 MB |     112 | `combineResults(Object, Object)`                            | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
| 72.4% | 6.43 MB |     111 | `lambda$merge$6(List, List)`                                | org.renaissance.jdk.concurrent.JavaKMeans                            |
| 72.4% | 6.43 MB |     111 | `apply(Object, Object)`                                     | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460 |
| 72.4% | 6.43 MB |     111 | `merge(Object, Object, BiFunction)`                         | java.util.HashMap                                                    |
| 72.4% | 6.43 MB |     111 | `lambda$merge$7(Map, Object, List)`                         | org.renaissance.jdk.concurrent.JavaKMeans                            |
| 72.4% | 6.43 MB |     111 | `accept(Object, Object)`                                    | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0 |
| 72.4% | 6.43 MB |     111 | `forEach(BiConsumer)`                                       | java.util.HashMap                                                    |
| 64.6% | 5.74 MB |      90 | `addAll(Collection)`                                        | java.util.ArrayList                                                  |
| 31.9% | 2.83 MB |      18 | `invoke()`                                                  | java.util.concurrent.ForkJoinTask                                    |
| 31.9% | 2.83 MB |      17 | `lambda$run$0(int, List, int)`                              | org.renaissance.jdk.concurrent.JavaKMeans                            |
| 31.9% | 2.83 MB |      17 | `call()`                                                    | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68 |
| 27.4% | 2.43 MB |     181 | `main(String[])`                                            | org.renaissance.harness.RenaissanceSuite                             |
| 27.4% | 2.43 MB |     181 | `invoke(Object, Object[])`                                  | java.lang.reflect.Method                                             |
| 27.4% | 2.43 MB |     181 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | org.renaissance.core.Launcher                                        |
| 27.4% | 2.43 MB |     181 | `launchHarnessClass(String, String[])`                      | org.renaissance.core.Launcher                                        |
| 27.4% | 2.43 MB |     181 | `main(String[])`                                            | org.renaissance.core.Launcher                                        |
| 27.3% | 2.43 MB |     180 | `main(String[])`                                            | org.renaissance.harness.RenaissanceSuite$                            |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)

|     % |    Size | Samples | Callee                           | Location                                                 |
| ----: | ------: | ------: | -------------------------------- | -------------------------------------------------------- |
| 99.7% | 6.43 MB |     112 | `combineResults(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| 19.6% | 1.26 MB |      98 | `join()`                         | java.util.concurrent.ForkJoinTask                        |
|  0.3% | 16.6 kB |      22 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| <0.1% |   112 B |       2 | `createSubtask(int, int)`        | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| <0.1% |    48 B |       1 | `createSubtask(int, int)`        | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |

##### `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Callee                | Location          |
| -----: | ------: | ------: | --------------------- | ----------------- |
| 100.0% | 6.43 MB |     111 | `forEach(BiConsumer)` | java.util.HashMap |
|  <0.1% |    16 B |       1 | `<init>(Map)`         | java.util.HashMap |

##### `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Callee            | Location                                  |
| -----: | ------: | ------: | ----------------- | ----------------------------------------- |
| 100.0% | 6.43 MB |     112 | `merge(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `combineResults(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Callee                     | Location                                                 |
| -----: | ------: | ------: | -------------------------- | -------------------------------------------------------- |
| 100.0% | 6.43 MB |     112 | `combineResults(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|     % |    Size | Samples | Callee               | Location            |
| ----: | ------: | ------: | -------------------- | ------------------- |
| 89.3% | 5.74 MB |      90 | `addAll(Collection)` | java.util.ArrayList |
| 10.7% |  690 kB |      21 | `<init>(Collection)` | java.util.ArrayList |

##### `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460)

|      % |    Size | Samples | Callee                       | Location                                  |
| -----: | ------: | ------: | ---------------------------- | ----------------------------------------- |
| 100.0% | 6.43 MB |     111 | `lambda$merge$6(List, List)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `merge(Object, Object, BiFunction)` (java.util.HashMap)

|      % |    Size | Samples | Callee                  | Location                                                             |
| -----: | ------: | ------: | ----------------------- | -------------------------------------------------------------------- |
| 100.0% | 6.43 MB |     111 | `apply(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460 |

##### `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Callee                              | Location          |
| -----: | ------: | ------: | ----------------------------------- | ----------------- |
| 100.0% | 6.43 MB |     111 | `merge(Object, Object, BiFunction)` | java.util.HashMap |

##### `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0)

|      % |    Size | Samples | Callee                              | Location                                  |
| -----: | ------: | ------: | ----------------------------------- | ----------------------------------------- |
| 100.0% | 6.43 MB |     111 | `lambda$merge$7(Map, Object, List)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `forEach(BiConsumer)` (java.util.HashMap)

|      % |    Size | Samples | Callee                   | Location                                                             |
| -----: | ------: | ------: | ------------------------ | -------------------------------------------------------------------- |
| 100.0% | 6.43 MB |     111 | `accept(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0 |

##### `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Callee     | Location                          |
| -----: | ------: | ------: | ---------- | --------------------------------- |
| 100.0% | 2.83 MB |      17 | `invoke()` | java.util.concurrent.ForkJoinTask |

##### `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68)

|      % |    Size | Samples | Callee                         | Location                                  |
| -----: | ------: | ------: | ------------------------------ | ----------------------------------------- |
| 100.0% | 2.83 MB |      17 | `lambda$run$0(int, List, int)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `main(String[])` (org.renaissance.harness.RenaissanceSuite)

|     % |    Size | Samples | Callee              | Location                                  |
| ----: | ------: | ------: | ------------------- | ----------------------------------------- |
| 99.8% | 2.43 MB |     180 | `main(String[])`    | org.renaissance.harness.RenaissanceSuite$ |
|  0.2% | 5.78 kB |       1 | `loadClass(String)` | java.lang.ClassLoader                     |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (org.renaissance.core.Launcher)

|      % |    Size | Samples | Callee                     | Location                 |
| -----: | ------: | ------: | -------------------------- | ------------------------ |
| 100.0% | 2.43 MB |     181 | `invoke(Object, Object[])` | java.lang.reflect.Method |

##### `launchHarnessClass(String, String[])` (org.renaissance.core.Launcher)

|      % |    Size | Samples | Callee                                                      | Location                      |
| -----: | ------: | ------: | ----------------------------------------------------------- | ----------------------------- |
| 100.0% | 2.43 MB |     181 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | org.renaissance.core.Launcher |

##### `main(String[])` (org.renaissance.core.Launcher)

|      % |    Size | Samples | Callee                                 | Location                      |
| -----: | ------: | ------: | -------------------------------------- | ----------------------------- |
| 100.0% | 2.43 MB |     181 | `launchHarnessClass(String, String[])` | org.renaissance.core.Launcher |

##### `main(String[])` (org.renaissance.harness.RenaissanceSuite$)

|      % |    Size | Samples | Callee                                                                        | Location                                  |
| -----: | ------: | ------: | ----------------------------------------------------------------------------- | ----------------------------------------- |
| 100.0% | 2.43 MB |     179 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | org.renaissance.harness.RenaissanceSuite$ |
|  <0.1% |    40 B |       1 | `apply(Function0)`                                                            | scala.util.Try$                           |

## Hottest call stacks

Call stacks ranked by bytes retained in their leaf frame.

|     % |    Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----: | ------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 30.8% | 2.74 MB |      29 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 24.3% | 2.16 MB |       1 | `add(Object)` (java.util.ArrayList) ← `collect(Collector)` (java.util.stream.ReferencePipeline) ← `generateData(int, int, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `setUpBeforeAll(BenchmarkContext)` (org.renaissance.jdk.concurrent.FjKmeans) ← `executeBenchmark()` (org.renaissance.harness.ExecutionDriver) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (org.renaissance.harness.RenaissanceSuite$) ← `applyVoid(Object)` (org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111efe0) ← `foreach(Function1)` (scala.collection.immutable.List) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (org.renaissance.harness.RenaissanceSuite$) ← `main(String[])` ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (org.renaissance.core.Launcher) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 22.5% |    2 MB |       5 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  4.5% |  399 kB |       1 | `<init>(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  4.0% |  351 kB |       3 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  3.7% |  330 kB |      15 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  2.9% |  261 kB |       4 | `loadClass(String)` (java.lang.ClassLoader) ← `run(BenchmarkContext)` (org.renaissance.jdk.concurrent.FjKmeans) ← `executeOperation(int)` (org.renaissance.harness.ExecutionDriver) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (org.renaissance.harness.RenaissanceSuite$) ← `applyVoid(Object)` (org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111efe0) ← `foreach(Function1)` (scala.collection.immutable.List) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (org.renaissance.harness.RenaissanceSuite$) ← `main(String[])` ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (org.renaissance.core.Launcher) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.7% |  148 kB |      11 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.2% |  106 kB |       2 | `<init>(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.0% | 87.8 kB |       7 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.8% | 72.9 kB |       6 | `<init>(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.6% | 50.6 kB |       1 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.6% | 50.1 kB |       2 | `<init>(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.3% | 26.5 kB |       2 | `<init>(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.3% | 25.5 kB |       1 | `<init>(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.2% | 16.9 kB |       8 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.1% | 13.3 kB |       2 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.1% | 5.78 kB |       1 | `loadClass(String)` (java.lang.ClassLoader) ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (org.renaissance.core.Launcher) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.1% | 4.71 kB |       2 | `<init>(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) |
| <0.1% | 4.36 kB |       3 | `<init>(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

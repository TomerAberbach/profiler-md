# Allocated heap profile

Allocated 3.3 GB over 75,363 samples (43.7 kB per sample).

| Category |     % |    Size | Samples |
| -------- | ----: | ------: | ------: |
| stdlib   | 99.8% | 3.29 GB |  69,924 |
| ours     |  0.2% | 7.16 MB |   5,439 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |    Size | Samples | Function                             | Location                                                 |
| ----: | ------: | ------: | ------------------------------------ | -------------------------------------------------------- |
|  0.2% | 7.08 MB |   3,593 | `findNearestCentroid()`              | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| <0.1% | 16.8 kB |     351 | `createSubtask(int, int)`            | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| <0.1% | 15.3 kB |     274 | `createSubtask(int, int)`            | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| <0.1% |   11 kB |     229 | `collectClusters(int[])`             | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| <0.1% | 9.97 kB |     178 | `add(double[], double[])`            | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| <0.1% |  9.8 kB |     175 | `vectorSum()`                        | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| <0.1% | 7.25 kB |     151 | `merge(Map, Map)`                    | org.renaissance.jdk.concurrent.JavaKMeans                |
| <0.1% | 5.23 kB |     218 | `lambda$collectClusters$0(Double[])` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| <0.1% | 5.16 kB |     215 | `lambda$merge$6(List, List)`         | org.renaissance.jdk.concurrent.JavaKMeans                |
| <0.1% | 2.95 kB |     123 | `valueOf(double)`                    | java.lang.Double                                         |
| <0.1% | 1.28 kB |      32 | `lambda$generateData$4(int)`         | org.renaissance.jdk.concurrent.JavaKMeans                |
| <0.1% |   648 B |      27 | `range(int, int)`                    | java.util.stream.IntStream                               |
| <0.1% |   528 B |      11 | `createSubtask(int, int)`            | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
| <0.1% |   240 B |       5 | `computeClusterAverages()`           | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
| <0.1% |    96 B |       3 | `lambda$run$0(int, List, int)`       | org.renaissance.jdk.concurrent.JavaKMeans                |
| <0.1% |    56 B |       1 | `div(double[], int)`                 | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
| <0.1% |    48 B |       1 | `average(List)`                      | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
| <0.1% |    40 B |       1 | `lambda$boxed$0(int)`                | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
| <0.1% |    32 B |       1 | `collectGarbage(String)`             | org.renaissance.harness.ExecutionPlugins$ForceGcPlugin   |

#### Lines

Lines ranked by contribution to each function's self size.

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Location                                                     |
| -----: | ------: | ------: | ------------------------------------------------------------ |
| 100.0% | 7.08 MB |   3,593 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:223 |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |    Size | Samples | Location                                                    |
| -----: | ------: | ------: | ----------------------------------------------------------- |
| 100.0% | 16.8 kB |     351 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419 |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Location                                                     |
| -----: | ------: | ------: | ------------------------------------------------------------ |
| 100.0% | 15.3 kB |     274 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261 |

##### `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |  Size | Samples | Location                                                     |
| -----: | ----: | ------: | ------------------------------------------------------------ |
| 100.0% | 11 kB |     229 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:209 |

##### `add(double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |    Size | Samples | Location                                                    |
| -----: | ------: | ------: | ----------------------------------------------------------- |
| 100.0% | 9.97 kB |     178 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:430 |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |   Size | Samples | Location                                                    |
| -----: | -----: | ------: | ----------------------------------------------------------- |
| 100.0% | 9.8 kB |     175 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400 |

##### `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Location                                      |
| -----: | ------: | ------: | --------------------------------------------- |
| 100.0% | 7.25 kB |     151 | org.renaissance.jdk.concurrent.JavaKMeans:110 |

##### `lambda$collectClusters$0(Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Location                                                     |
| -----: | ------: | ------: | ------------------------------------------------------------ |
| 100.0% | 5.23 kB |     218 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215 |

##### `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Location                                      |
| -----: | ------: | ------: | --------------------------------------------- |
| 100.0% | 5.16 kB |     215 | org.renaissance.jdk.concurrent.JavaKMeans:114 |

##### `valueOf(double)` (java.lang.Double)

|      % |    Size | Samples | Location             |
| -----: | ------: | ------: | -------------------- |
| 100.0% | 2.95 kB |     123 | java.lang.Double:773 |

##### `lambda$generateData$4(int)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Location                                     |
| -----: | ------: | ------: | -------------------------------------------- |
| 100.0% | 1.28 kB |      32 | org.renaissance.jdk.concurrent.JavaKMeans:87 |

##### `range(int, int)` (java.util.stream.IntStream)

|      % |  Size | Samples | Location                        |
| -----: | ----: | ------: | ------------------------------- |
| 100.0% | 648 B |      27 | java.util.stream.IntStream:1083 |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % |  Size | Samples | Location                                                 |
| -----: | ----: | ------: | -------------------------------------------------------- |
| 100.0% | 528 B |      11 | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:352 |

##### `computeClusterAverages()` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % |  Size | Samples | Location                                                 |
| -----: | ----: | ------: | -------------------------------------------------------- |
| 100.0% | 240 B |       5 | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:314 |

##### `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % | Size | Samples | Location                                     |
| -----: | ---: | ------: | -------------------------------------------- |
| 100.0% | 96 B |       3 | org.renaissance.jdk.concurrent.JavaKMeans:53 |

##### `div(double[], int)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % | Size | Samples | Location                                                 |
| -----: | ---: | ------: | -------------------------------------------------------- |
| 100.0% | 56 B |       1 | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:339 |

##### `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % | Size | Samples | Location                                                 |
| -----: | ---: | ------: | -------------------------------------------------------- |
| 100.0% | 48 B |       1 | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:332 |

##### `lambda$boxed$0(int)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % | Size | Samples | Location                                                 |
| -----: | ---: | ------: | -------------------------------------------------------- |
| 100.0% | 40 B |       1 | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:327 |

##### `collectGarbage(String)` (org.renaissance.harness.ExecutionPlugins$ForceGcPlugin)

|      % | Size | Samples | Location                                                  |
| -----: | ---: | ------: | --------------------------------------------------------- |
| 100.0% | 32 B |       1 | org.renaissance.harness.ExecutionPlugins$ForceGcPlugin:26 |

#### Callers

Callers ranked by contribution to each function's self size. Caller attribution may be imprecise due to inlining.

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Caller              | Location                                                 |
| -----: | ------: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% | 7.08 MB |   3,593 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |    Size | Samples | Caller      | Location                                             |
| -----: | ------: | ------: | ----------- | ---------------------------------------------------- |
| 100.0% | 16.8 kB |     351 | `compute()` | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Caller      | Location                                             |
| -----: | ------: | ------: | ----------- | ---------------------------------------------------- |
| 100.0% | 15.3 kB |     274 | `compute()` | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |

##### `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |  Size | Samples | Caller              | Location                                                 |
| -----: | ----: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% | 11 kB |     229 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `add(double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |    Size | Samples | Caller                               | Location                                                |
| -----: | ------: | ------: | ------------------------------------ | ------------------------------------------------------- |
| 100.0% | 9.97 kB |     178 | `combineResults(double[], double[])` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |   Size | Samples | Caller              | Location                                                |
| -----: | -----: | ------: | ------------------- | ------------------------------------------------------- |
| 100.0% | 9.8 kB |     175 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans)

|     % |   Size | Samples | Caller                     | Location                                                 |
| ----: | -----: | ------: | -------------------------- | -------------------------------------------------------- |
| 99.3% | 7.2 kB |     150 | `combineResults(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  0.7% |   48 B |       1 | `combineResults(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |

##### `lambda$collectClusters$0(Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Caller          | Location                                                                            |
| -----: | ------: | ------: | --------------- | ----------------------------------------------------------------------------------- |
| 100.0% | 5.23 kB |     218 | `apply(Object)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001186b38 |

##### `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Caller                  | Location                                                             |
| -----: | ------: | ------: | ----------------------- | -------------------------------------------------------------------- |
| 100.0% | 5.16 kB |     215 | `apply(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0 |

##### `valueOf(double)` (java.lang.Double)

|     % |    Size | Samples | Caller                                           | Location                                  |
| ----: | ------: | ------: | ------------------------------------------------ | ----------------------------------------- |
| 95.1% | 2.81 kB |     117 | `lambda$generateData$3(int, int, Random[], int)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `lambda$generateData$4(int)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Caller       | Location                                                             |
| -----: | ------: | ------: | ------------ | -------------------------------------------------------------------- |
| 100.0% | 1.28 kB |      32 | `apply(int)` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001125d48 |

##### `range(int, int)` (java.util.stream.IntStream)

|      % |  Size | Samples | Caller                                           | Location                                  |
| -----: | ----: | ------: | ------------------------------------------------ | ----------------------------------------- |
| 100.0% | 648 B |      27 | `lambda$generateData$5(int, int, Random[], int)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % |  Size | Samples | Caller      | Location                                             |
| -----: | ----: | ------: | ----------- | ---------------------------------------------------- |
| 100.0% | 528 B |      11 | `compute()` | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |

##### `computeClusterAverages()` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % |  Size | Samples | Caller              | Location                                             |
| -----: | ----: | ------: | ------------------- | ---------------------------------------------------- |
| 100.0% | 240 B |       5 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |

##### `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % | Size | Samples | Caller   | Location                                                             |
| -----: | ---: | ------: | -------- | -------------------------------------------------------------------- |
| 100.0% | 96 B |       3 | `call()` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68 |

##### `div(double[], int)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % | Size | Samples | Caller          | Location                                             |
| -----: | ---: | ------: | --------------- | ---------------------------------------------------- |
| 100.0% | 56 B |       1 | `average(List)` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |

##### `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % | Size | Samples | Caller                     | Location                                             |
| -----: | ---: | ------: | -------------------------- | ---------------------------------------------------- |
| 100.0% | 48 B |       1 | `computeClusterAverages()` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |

##### `lambda$boxed$0(int)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % | Size | Samples | Caller       | Location                                                                        |
| -----: | ---: | ------: | ------------ | ------------------------------------------------------------------------------- |
| 100.0% | 40 B |       1 | `apply(int)` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask$$Lambda.0x0000007001187750 |

##### `collectGarbage(String)` (org.renaissance.harness.ExecutionPlugins$ForceGcPlugin)

|      % | Size | Samples | Caller                                      | Location                                               |
| -----: | ---: | ------: | ------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 32 B |       1 | `afterOperationSetUp(String, int, boolean)` | org.renaissance.harness.ExecutionPlugins$ForceGcPlugin |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |    Size | Samples | Function                               | Location                                                             |
| ----: | ------: | ------: | -------------------------------------- | -------------------------------------------------------------------- |
| 99.8% | 3.29 GB |  74,957 | `compute()`                            | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask                 |
| 99.5% | 3.28 GB |  57,245 | `merge(Map, Map)`                      | org.renaissance.jdk.concurrent.JavaKMeans                            |
| 99.5% | 3.28 GB |  57,236 | `combineResults(Map, Map)`             | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
| 99.5% | 3.28 GB |  57,236 | `combineResults(Object, Object)`       | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
| 99.5% | 3.28 GB |  56,703 | `merge(Object, Object, BiFunction)`    | java.util.HashMap                                                    |
| 99.5% | 3.28 GB |  56,703 | `lambda$merge$7(Map, Object, List)`    | org.renaissance.jdk.concurrent.JavaKMeans                            |
| 99.5% | 3.28 GB |  56,703 | `accept(Object, Object)`               | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88 |
| 99.5% | 3.28 GB |  56,703 | `forEach(BiConsumer)`                  | java.util.HashMap                                                    |
| 99.5% | 3.28 GB |  56,699 | `lambda$merge$6(List, List)`           | org.renaissance.jdk.concurrent.JavaKMeans                            |
| 99.5% | 3.28 GB |  56,699 | `apply(Object, Object)`                | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0 |
| 81.0% | 2.67 GB |  42,214 | `addAll(Collection)`                   | java.util.ArrayList                                                  |
| 62.4% | 2.06 GB |  15,328 | `invoke()`                             | java.util.concurrent.ForkJoinTask                                    |
| 62.4% | 2.06 GB |  14,949 | `lambda$run$0(int, List, int)`         | org.renaissance.jdk.concurrent.JavaKMeans                            |
| 62.4% | 2.06 GB |  14,949 | `call()`                               | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68 |
| 30.3% | 1000 MB |  60,059 | `join()`                               | java.util.concurrent.ForkJoinTask                                    |
| 18.5% |  608 MB |  14,270 | `<init>(Collection)`                   | java.util.ArrayList                                                  |
|  0.4% | 11.9 MB |  16,684 | `computeDirectly()`                    | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|  0.3% | 10.1 MB |  12,228 | `add(Object)`                          | java.util.ArrayList                                                  |
|  0.2% | 7.08 MB |   3,593 | `findNearestCentroid()`                | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|  0.2% | 5.68 MB |     402 | `launchHarnessClass(String, String[])` | org.renaissance.core.Launcher                                        |

#### Callees

Callees ranked by contribution to each function's total size. Callee attribution may be imprecise due to inlining.

##### `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)

|     % |    Size | Samples | Callee                           | Location                                                 |
| ----: | ------: | ------: | -------------------------------- | -------------------------------------------------------- |
| 99.6% | 3.28 GB |  57,236 | `combineResults(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| 30.4% | 1000 MB |  60,059 | `join()`                         | java.util.concurrent.ForkJoinTask                        |
|  0.4% | 11.9 MB |  16,684 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| <0.1% | 22.4 kB |     436 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
| <0.1% | 16.8 kB |     351 | `createSubtask(int, int)`        | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |

##### `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Callee                               | Location                         |
| -----: | ------: | ------: | ------------------------------------ | -------------------------------- |
| 100.0% | 3.28 GB |  56,703 | `forEach(BiConsumer)`                | java.util.HashMap                |
|  <0.1% | 13.4 kB |     389 | `<init>(Map)`                        | java.util.HashMap                |
|  <0.1% |    32 B |       2 | `linkToTargetMethod(Object, Object)` | java.lang.invoke.Invokers$Holder |

##### `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Callee            | Location                                  |
| -----: | ------: | ------: | ----------------- | ----------------------------------------- |
| 100.0% | 3.28 GB |  57,236 | `merge(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `combineResults(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Callee                     | Location                                                 |
| -----: | ------: | ------: | -------------------------- | -------------------------------------------------------- |
| 100.0% | 3.28 GB |  57,236 | `combineResults(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `merge(Object, Object, BiFunction)` (java.util.HashMap)

|      % |    Size | Samples | Callee                  | Location                                                             |
| -----: | ------: | ------: | ----------------------- | -------------------------------------------------------------------- |
| 100.0% | 3.28 GB |  56,699 | `apply(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0 |

##### `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Callee                              | Location          |
| -----: | ------: | ------: | ----------------------------------- | ----------------- |
| 100.0% | 3.28 GB |  56,703 | `merge(Object, Object, BiFunction)` | java.util.HashMap |

##### `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88)

|      % |    Size | Samples | Callee                              | Location                                  |
| -----: | ------: | ------: | ----------------------------------- | ----------------------------------------- |
| 100.0% | 3.28 GB |  56,703 | `lambda$merge$7(Map, Object, List)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `forEach(BiConsumer)` (java.util.HashMap)

|      % |    Size | Samples | Callee                   | Location                                                             |
| -----: | ------: | ------: | ------------------------ | -------------------------------------------------------------------- |
| 100.0% | 3.28 GB |  56,703 | `accept(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88 |

##### `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|     % |    Size | Samples | Callee               | Location            |
| ----: | ------: | ------: | -------------------- | ------------------- |
| 81.4% | 2.67 GB |  42,214 | `addAll(Collection)` | java.util.ArrayList |
| 18.6% |  608 MB |  14,270 | `<init>(Collection)` | java.util.ArrayList |

##### `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0)

|      % |    Size | Samples | Callee                       | Location                                  |
| -----: | ------: | ------: | ---------------------------- | ----------------------------------------- |
| 100.0% | 3.28 GB |  56,699 | `lambda$merge$6(List, List)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Callee     | Location                          |
| -----: | ------: | ------: | ---------- | --------------------------------- |
| 100.0% | 2.06 GB |  14,946 | `invoke()` | java.util.concurrent.ForkJoinTask |

##### `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68)

|      % |    Size | Samples | Callee                         | Location                                  |
| -----: | ------: | ------: | ------------------------------ | ----------------------------------------- |
| 100.0% | 2.06 GB |  14,949 | `lambda$run$0(int, List, int)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Callee                   | Location                                                 |
| -----: | ------: | ------: | ------------------------ | -------------------------------------------------------- |
| 100.0% | 11.9 MB |  16,684 | `computeDirectly()`      | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  59.3% | 7.08 MB |   3,593 | `findNearestCentroid()`  | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  40.7% | 4.87 MB |  13,091 | `collectClusters(int[])` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `launchHarnessClass(String, String[])` (org.renaissance.core.Launcher)

|      % |    Size | Samples | Callee                                                      | Location                      |
| -----: | ------: | ------: | ----------------------------------------------------------- | ----------------------------- |
| 100.0% | 5.68 MB |     399 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | org.renaissance.core.Launcher |
|  <0.1% | 1.28 kB |       3 | `createScratchRoot(Path, boolean)`                          | org.renaissance.core.Launcher |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

|     % |    Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 35.9% | 1.18 GB |   3,031 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 20.5% |  674 MB |   7,757 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  9.9% |  326 MB |   1,683 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  8.6% |  283 MB |   1,156 | `<init>(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  5.5% |  180 MB |   4,968 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  4.5% |  149 MB |   2,589 | `<init>(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  2.9% | 96.4 MB |   1,009 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68)                                                                                                                                                                                                                                                                                                                                                             |
|  2.2% | 72.6 MB |     606 | `<init>(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  2.1% | 70.1 MB |   4,220 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.2% | 40.3 MB |   1,704 | `<init>(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.1% | 35.4 MB |   3,992 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.9% | 29.3 MB |     586 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68)                                                                                                                                                                                                                                         |
|  0.6% | 20.6 MB |     321 | `<init>(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68)                                                                                                                                                                                                                                                                                                                                                             |
|  0.6% | 19.4 MB |   3,622 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                     |
|  0.4% | 14.7 MB |   1,367 | `<init>(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.4% | 12.9 MB |     461 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68)                                                                                                                     |
|  0.3% |   11 MB |   3,251 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                 |
|  0.2% | 7.37 MB |   1,328 | `<init>(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.2% |    7 MB |     471 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68) |
|  0.2% | 5.71 MB |     180 | `<init>(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68)                                                                                                                                                                                                                                         |

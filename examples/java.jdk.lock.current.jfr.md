# Sampling profile

Collected 1,629 samples.

| Category |     % | Samples |
| -------- | ----: | ------: |
| ours     | 91.2% |   1,486 |
| stdlib   |  8.8% |     143 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                            | Location                                                                            |
| ----: | ------: | ----------------------------------- | ----------------------------------------------------------------------------------- |
| 42.0% |     684 | `accumulate(Double[], double[])`    | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask                             |
| 23.8% |     387 | `distance(Double[], Double[])`      | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |
| 12.6% |     205 | `findNearestCentroid()`             | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |
|  6.1% |      99 | `collectClusters(int[])`            | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |
|  4.1% |      66 | `vectorSum()`                       | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask                             |
|  2.9% |      48 | `computeIfAbsent(Object, Function)` | java.util.HashMap                                                                   |
|  1.4% |      22 | `computeDirectly()`                 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |
|  1.0% |      16 | `apply(Object)`                     | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001204b38 |
|  0.6% |       9 | `merge(Object, Object, BiFunction)` | java.util.HashMap                                                                   |
|  0.2% |       3 | `lambda$merge$7(Map, Object, List)` | org.renaissance.jdk.concurrent.JavaKMeans                                           |
|  0.1% |       1 | `compute()`                         | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask                                |
|  0.1% |       1 | `merge(Map, Map)`                   | org.renaissance.jdk.concurrent.JavaKMeans                                           |
|  0.1% |       1 | `createSubtask(int, int)`           | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask                             |
|  0.1% |       1 | `add(double[], double[])`           | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask                             |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Location                                                    |
| -----: | ------: | ----------------------------------------------------------- |
| 100.0% |     684 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:411 |

##### `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Location                                                     |
| -----: | ------: | ------------------------------------------------------------ |
| 100.0% |     387 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:248 |

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|     % | Samples | Location                                                     |
| ----: | ------: | ------------------------------------------------------------ |
| 89.3% |     183 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:229 |
|  7.8% |      16 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:225 |
|  2.4% |       5 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:230 |
|  0.5% |       1 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:226 |

##### `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|     % | Samples | Location                                                     |
| ----: | ------: | ------------------------------------------------------------ |
| 68.7% |      68 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215 |
| 30.3% |      30 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:211 |
|  1.0% |       1 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:213 |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|     % | Samples | Location                                                    |
| ----: | ------: | ----------------------------------------------------------- |
| 56.1% |      37 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400 |
| 33.3% |      22 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:402 |
| 10.6% |       7 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:403 |

##### `computeIfAbsent(Object, Function)` (java.util.HashMap)

|     % | Samples | Location               |
| ----: | ------: | ---------------------- |
| 97.9% |      47 | java.util.HashMap:1219 |
|  2.1% |       1 | java.util.HashMap:1206 |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Location                                                     |
| -----: | ------: | ------------------------------------------------------------ |
| 100.0% |      22 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:204 |

##### `merge(Object, Object, BiFunction)` (java.util.HashMap)

|     % | Samples | Location               |
| ----: | ------: | ---------------------- |
| 88.9% |       8 | java.util.HashMap:1384 |
| 11.1% |       1 | java.util.HashMap:1371 |

##### `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % | Samples | Location                                      |
| -----: | ------: | --------------------------------------------- |
| 100.0% |       3 | org.renaissance.jdk.concurrent.JavaKMeans:112 |

##### `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)

|      % | Samples | Location                                                 |
| -----: | ------: | -------------------------------------------------------- |
| 100.0% |       1 | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask:150 |

##### `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % | Samples | Location                                      |
| -----: | ------: | --------------------------------------------- |
| 100.0% |       1 | org.renaissance.jdk.concurrent.JavaKMeans:110 |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Location                                                    |
| -----: | ------: | ----------------------------------------------------------- |
| 100.0% |       1 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419 |

##### `add(double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Location                                                    |
| -----: | ------: | ----------------------------------------------------------- |
| 100.0% |       1 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:432 |

#### Callers

Callers ranked by contribution to each function's self samples. Caller attribution may be imprecise due to inlining.

##### `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Caller        | Location                                                |
| -----: | ------: | ------------- | ------------------------------------------------------- |
| 100.0% |     684 | `vectorSum()` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Caller                  | Location                                                 |
| -----: | ------: | ----------------------- | -------------------------------------------------------- |
| 100.0% |     387 | `findNearestCentroid()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Caller              | Location                                                 |
| -----: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% |     205 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Caller              | Location                                                 |
| -----: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% |      99 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Caller              | Location                                                |
| -----: | ------: | ------------------- | ------------------------------------------------------- |
| 100.0% |      66 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `computeIfAbsent(Object, Function)` (java.util.HashMap)

|      % | Samples | Caller                   | Location                                                 |
| -----: | ------: | ------------------------ | -------------------------------------------------------- |
| 100.0% |      48 | `collectClusters(int[])` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Caller              | Location                                                 |
| -----: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% |      22 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `apply(Object)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001204b38)

|      % | Samples | Caller                              | Location          |
| -----: | ------: | ----------------------------------- | ----------------- |
| 100.0% |      16 | `computeIfAbsent(Object, Function)` | java.util.HashMap |

##### `merge(Object, Object, BiFunction)` (java.util.HashMap)

|      % | Samples | Caller                              | Location                                  |
| -----: | ------: | ----------------------------------- | ----------------------------------------- |
| 100.0% |       9 | `lambda$merge$7(Map, Object, List)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % | Samples | Caller                   | Location                                                             |
| -----: | ------: | ------------------------ | -------------------------------------------------------------------- |
| 100.0% |       3 | `accept(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88 |

##### `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % | Samples | Caller                     | Location                                                 |
| -----: | ------: | -------------------------- | -------------------------------------------------------- |
| 100.0% |       1 | `combineResults(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Caller      | Location                                             |
| -----: | ------: | ----------- | ---------------------------------------------------- |
| 100.0% |       1 | `compute()` | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |

##### `add(double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Caller                               | Location                                                |
| -----: | ------: | ------------------------------------ | ------------------------------------------------------- |
| 100.0% |       1 | `combineResults(double[], double[])` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                            | Location                                                                            |
| ----: | ------: | ----------------------------------- | ----------------------------------------------------------------------------------- |
| 99.1% |   1,615 | `compute()`                         | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask                                |
| 97.6% |   1,590 | `join()`                            | java.util.concurrent.ForkJoinTask                                                   |
| 50.2% |     818 | `computeDirectly()`                 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |
| 46.1% |     751 | `vectorSum()`                       | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask                             |
| 46.1% |     751 | `computeDirectly()`                 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask                             |
| 42.0% |     684 | `accumulate(Double[], double[])`    | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask                             |
| 36.3% |     592 | `findNearestCentroid()`             | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |
| 23.8% |     387 | `distance(Double[], Double[])`      | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |
| 19.2% |     312 | `invoke()`                          | java.util.concurrent.ForkJoinTask                                                   |
| 18.7% |     305 | `average(List)`                     | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                                |
| 18.7% |     305 | `computeClusterAverages()`          | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                                |
| 18.0% |     294 | `computeDirectly()`                 | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                                |
| 12.5% |     204 | `collectClusters(int[])`            | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |
|  3.9% |      64 | `computeIfAbsent(Object, Function)` | java.util.HashMap                                                                   |
|  2.5% |      41 | `add(Object)`                       | java.util.ArrayList                                                                 |
|  1.2% |      20 | `merge(Map, Map)`                   | org.renaissance.jdk.concurrent.JavaKMeans                                           |
|  1.2% |      20 | `combineResults(Map, Map)`          | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |
|  1.2% |      20 | `combineResults(Object, Object)`    | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |
|  1.0% |      17 | `lambda$run$0(int, List, int)`      | org.renaissance.jdk.concurrent.JavaKMeans                                           |
|  1.0% |      16 | `apply(Object)`                     | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001204b38 |

#### Callees

Callees ranked by contribution to each function's total samples. Callee attribution may be imprecise due to inlining.

##### `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)

|     % | Samples | Callee                           | Location                                                 |
| ----: | ------: | -------------------------------- | -------------------------------------------------------- |
| 98.5% |   1,590 | `join()`                         | java.util.concurrent.ForkJoinTask                        |
| 50.7% |     818 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| 46.5% |     751 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| 18.1% |     292 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
|  1.2% |      20 | `combineResults(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Callee                   | Location                                                 |
| -----: | ------: | ------------------------ | -------------------------------------------------------- |
| 100.0% |     818 | `computeDirectly()`      | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  72.4% |     592 | `findNearestCentroid()`  | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  24.9% |     204 | `collectClusters(int[])` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|     % | Samples | Callee                           | Location                                                |
| ----: | ------: | -------------------------------- | ------------------------------------------------------- |
| 91.1% |     684 | `accumulate(Double[], double[])` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |
|  0.1% |       1 | `get(int)`                       | java.util.ArrayList                                     |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Callee              | Location                                                |
| -----: | ------: | ------------------- | ------------------------------------------------------- |
| 100.0% |     751 | `vectorSum()`       | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |
| 100.0% |     751 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|     % | Samples | Callee                         | Location                                                 |
| ----: | ------: | ------------------------------ | -------------------------------------------------------- |
| 65.4% |     387 | `distance(Double[], Double[])` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % | Samples | Callee     | Location                          |
| -----: | ------: | ---------- | --------------------------------- |
| 100.0% |     305 | `invoke()` | java.util.concurrent.ForkJoinTask |

##### `computeClusterAverages()` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % | Samples | Callee          | Location                                             |
| -----: | ------: | --------------- | ---------------------------------------------------- |
| 100.0% |     305 | `average(List)` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % | Samples | Callee                     | Location                                             |
| -----: | ------: | -------------------------- | ---------------------------------------------------- |
| 100.0% |     294 | `computeClusterAverages()` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |
|  99.3% |     292 | `computeDirectly()`        | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |

##### `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|     % | Samples | Callee                              | Location            |
| ----: | ------: | ----------------------------------- | ------------------- |
| 31.4% |      64 | `computeIfAbsent(Object, Function)` | java.util.HashMap   |
| 20.1% |      41 | `add(Object)`                       | java.util.ArrayList |

##### `computeIfAbsent(Object, Function)` (java.util.HashMap)

|     % | Samples | Callee          | Location                                                                            |
| ----: | ------: | --------------- | ----------------------------------------------------------------------------------- |
| 25.0% |      16 | `apply(Object)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001204b38 |

##### `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans)

|     % | Samples | Callee                | Location          |
| ----: | ------: | --------------------- | ----------------- |
| 60.0% |      12 | `forEach(BiConsumer)` | java.util.HashMap |
| 35.0% |       7 | `<init>(Map)`         | java.util.HashMap |

##### `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Callee            | Location                                  |
| -----: | ------: | ----------------- | ----------------------------------------- |
| 100.0% |      20 | `merge(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `combineResults(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Callee                     | Location                                                 |
| -----: | ------: | -------------------------- | -------------------------------------------------------- |
| 100.0% |      20 | `combineResults(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % | Samples | Callee     | Location                          |
| -----: | ------: | ---------- | --------------------------------- |
| 100.0% |      17 | `invoke()` | java.util.concurrent.ForkJoinTask |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5.6% |      91 | `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask)                                                                                                                                              |
| 5.1% |      83 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 4.7% |      76 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 4.6% |      75 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                  |
| 4.2% |      69 | `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 4.2% |      69 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                  |
| 3.6% |      58 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 3.3% |      54 | `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 3.1% |      51 | `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                 |
| 2.9% |      48 | `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                          |
| 2.8% |      46 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 2.1% |      35 | `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 2.1% |      35 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 2.1% |      35 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask)                                                                                                                                                       |
| 2.0% |      33 | `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.9% |      31 | `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.9% |      31 | `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                             |
| 1.8% |      29 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                      |
| 1.7% |      28 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) |
| 1.7% |      28 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |


# Allocated heap profile

Allocated 40.6 GB over 2,040 samples (19.9 MB per sample).

| Category |     % |    Size | Samples |
| -------- | ----: | ------: | ------: |
| stdlib   | 94.5% | 38.4 GB |   1,920 |
| ours     |  5.5% | 2.21 GB |     118 |
| native   | <0.1% | 2.22 kB |       2 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |    Size | Samples | Function                                | Location                                                 |
| ----: | ------: | ------: | --------------------------------------- | -------------------------------------------------------- |
|  3.6% | 1.46 GB |      70 | `findNearestCentroid()`                 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  0.5% |  187 MB |       6 | `lambda$merge$6(List, List)`            | org.renaissance.jdk.concurrent.JavaKMeans                |
|  0.4% |  171 MB |       3 | `createSubtask(int, int)`               | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  0.3% |  135 MB |      10 | `createSubtask(int, int)`               | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  0.3% |  109 MB |       8 | `lambda$collectClusters$0(Double[])`    | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  0.2% | 97.9 MB |       5 | `add(double[], double[])`               | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  0.1% | 35.5 MB |       2 | `merge(Map, Map)`                       | org.renaissance.jdk.concurrent.JavaKMeans                |
| <0.1% | 13.1 MB |       5 | `collectClusters(int[])`                | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| <0.1% | 7.78 MB |      21 | `valueOf(double)`                       | java.lang.Double                                         |
| <0.1% | 3.15 MB |       2 | `vectorSum()`                           | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| <0.1% |  1.6 MB |       5 | `lambda$generateData$4(int)`            | org.renaissance.jdk.concurrent.JavaKMeans                |
| <0.1% | 1.08 MB |       1 | `createSubtask(int, int)`               | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
| <0.1% |  796 kB |       1 | `selectBenchmarks(BenchmarkSuite, Seq)` | org.renaissance.harness.RenaissanceSuite$                |
| <0.1% |  326 kB |       1 | `range(int, int)`                       | java.util.stream.IntStream                               |

#### Lines

Lines ranked by contribution to each function's self size.

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Location                                                     |
| -----: | ------: | ------: | ------------------------------------------------------------ |
| 100.0% | 1.46 GB |      70 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:223 |

##### `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |   Size | Samples | Location                                      |
| -----: | -----: | ------: | --------------------------------------------- |
| 100.0% | 187 MB |       6 | org.renaissance.jdk.concurrent.JavaKMeans:114 |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |   Size | Samples | Location                                                     |
| -----: | -----: | ------: | ------------------------------------------------------------ |
| 100.0% | 171 MB |       3 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261 |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |   Size | Samples | Location                                                    |
| -----: | -----: | ------: | ----------------------------------------------------------- |
| 100.0% | 135 MB |      10 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419 |

##### `lambda$collectClusters$0(Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |   Size | Samples | Location                                                     |
| -----: | -----: | ------: | ------------------------------------------------------------ |
| 100.0% | 109 MB |       8 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215 |

##### `add(double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |    Size | Samples | Location                                                    |
| -----: | ------: | ------: | ----------------------------------------------------------- |
| 100.0% | 97.9 MB |       5 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:430 |

##### `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Location                                      |
| -----: | ------: | ------: | --------------------------------------------- |
| 100.0% | 35.5 MB |       2 | org.renaissance.jdk.concurrent.JavaKMeans:110 |

##### `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Location                                                     |
| -----: | ------: | ------: | ------------------------------------------------------------ |
| 100.0% | 13.1 MB |       5 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:209 |

##### `valueOf(double)` (java.lang.Double)

|      % |    Size | Samples | Location             |
| -----: | ------: | ------: | -------------------- |
| 100.0% | 7.78 MB |      21 | java.lang.Double:773 |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |    Size | Samples | Location                                                    |
| -----: | ------: | ------: | ----------------------------------------------------------- |
| 100.0% | 3.15 MB |       2 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400 |

##### `lambda$generateData$4(int)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |   Size | Samples | Location                                     |
| -----: | -----: | ------: | -------------------------------------------- |
| 100.0% | 1.6 MB |       5 | org.renaissance.jdk.concurrent.JavaKMeans:87 |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % |    Size | Samples | Location                                                 |
| -----: | ------: | ------: | -------------------------------------------------------- |
| 100.0% | 1.08 MB |       1 | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:352 |

##### `selectBenchmarks(BenchmarkSuite, Seq)` (org.renaissance.harness.RenaissanceSuite$)

|      % |   Size | Samples | Location                                      |
| -----: | -----: | ------: | --------------------------------------------- |
| 100.0% | 796 kB |       1 | org.renaissance.harness.RenaissanceSuite$:276 |

##### `range(int, int)` (java.util.stream.IntStream)

|      % |   Size | Samples | Location                        |
| -----: | -----: | ------: | ------------------------------- |
| 100.0% | 326 kB |       1 | java.util.stream.IntStream:1083 |

#### Callers

Callers ranked by contribution to each function's self size. Caller attribution may be imprecise due to inlining.

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Caller              | Location                                                 |
| -----: | ------: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% | 1.46 GB |      70 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |   Size | Samples | Caller                  | Location                                                             |
| -----: | -----: | ------: | ----------------------- | -------------------------------------------------------------------- |
| 100.0% | 187 MB |       6 | `apply(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0 |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |   Size | Samples | Caller      | Location                                             |
| -----: | -----: | ------: | ----------- | ---------------------------------------------------- |
| 100.0% | 171 MB |       3 | `compute()` | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |   Size | Samples | Caller      | Location                                             |
| -----: | -----: | ------: | ----------- | ---------------------------------------------------- |
| 100.0% | 135 MB |      10 | `compute()` | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |

##### `lambda$collectClusters$0(Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |   Size | Samples | Caller          | Location                                                                            |
| -----: | -----: | ------: | --------------- | ----------------------------------------------------------------------------------- |
| 100.0% | 109 MB |       8 | `apply(Object)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001204b38 |

##### `add(double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |    Size | Samples | Caller                               | Location                                                |
| -----: | ------: | ------: | ------------------------------------ | ------------------------------------------------------- |
| 100.0% | 97.9 MB |       5 | `combineResults(double[], double[])` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Caller                     | Location                                                 |
| -----: | ------: | ------: | -------------------------- | -------------------------------------------------------- |
| 100.0% | 35.5 MB |       2 | `combineResults(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Caller              | Location                                                 |
| -----: | ------: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% | 13.1 MB |       5 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `valueOf(double)` (java.lang.Double)

|      % |    Size | Samples | Caller                                           | Location                                  |
| -----: | ------: | ------: | ------------------------------------------------ | ----------------------------------------- |
| 100.0% | 7.78 MB |      21 | `lambda$generateData$3(int, int, Random[], int)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |    Size | Samples | Caller              | Location                                                |
| -----: | ------: | ------: | ------------------- | ------------------------------------------------------- |
| 100.0% | 3.15 MB |       2 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `lambda$generateData$4(int)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |   Size | Samples | Caller       | Location                                                             |
| -----: | -----: | ------: | ------------ | -------------------------------------------------------------------- |
| 100.0% | 1.6 MB |       5 | `apply(int)` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a1d48 |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % |    Size | Samples | Caller      | Location                                             |
| -----: | ------: | ------: | ----------- | ---------------------------------------------------- |
| 100.0% | 1.08 MB |       1 | `compute()` | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |

##### `selectBenchmarks(BenchmarkSuite, Seq)` (org.renaissance.harness.RenaissanceSuite$)

|      % |   Size | Samples | Caller           | Location                                  |
| -----: | -----: | ------: | ---------------- | ----------------------------------------- |
| 100.0% | 796 kB |       1 | `main(String[])` | org.renaissance.harness.RenaissanceSuite$ |

##### `range(int, int)` (java.util.stream.IntStream)

|      % |   Size | Samples | Caller                                           | Location                                  |
| -----: | -----: | ------: | ------------------------------------------------ | ----------------------------------------- |
| 100.0% | 326 kB |       1 | `lambda$generateData$5(int, int, Random[], int)` | org.renaissance.jdk.concurrent.JavaKMeans |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |    Size | Samples | Function                            | Location                                                             |
| ----: | ------: | ------: | ----------------------------------- | -------------------------------------------------------------------- |
| 99.4% | 40.4 GB |   1,914 | `compute()`                         | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask                 |
| 81.3% |   33 GB |   1,565 | `merge(Map, Map)`                   | org.renaissance.jdk.concurrent.JavaKMeans                            |
| 81.3% |   33 GB |   1,563 | `combineResults(Map, Map)`          | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
| 81.3% |   33 GB |   1,563 | `combineResults(Object, Object)`    | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
| 81.1% | 32.9 GB |   1,558 | `merge(Object, Object, BiFunction)` | java.util.HashMap                                                    |
| 81.1% | 32.9 GB |   1,558 | `lambda$merge$7(Map, Object, List)` | org.renaissance.jdk.concurrent.JavaKMeans                            |
| 81.1% | 32.9 GB |   1,558 | `accept(Object, Object)`            | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88 |
| 81.1% | 32.9 GB |   1,558 | `forEach(BiConsumer)`               | java.util.HashMap                                                    |
| 81.1% | 32.9 GB |   1,557 | `lambda$merge$6(List, List)`        | org.renaissance.jdk.concurrent.JavaKMeans                            |
| 81.1% | 32.9 GB |   1,557 | `apply(Object, Object)`             | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0 |
| 71.3% | 28.9 GB |   1,329 | `join()`                            | java.util.concurrent.ForkJoinTask                                    |
| 58.7% | 23.8 GB |   1,133 | `addAll(Collection)`                | java.util.ArrayList                                                  |
| 22.0% | 8.92 GB |     418 | `<init>(Collection)`                | java.util.ArrayList                                                  |
| 19.6% | 7.96 GB |     209 | `invoke()`                          | java.util.concurrent.ForkJoinTask                                    |
| 18.0% |  7.3 GB |     197 | `lambda$run$0(int, List, int)`      | org.renaissance.jdk.concurrent.JavaKMeans                            |
| 18.0% |  7.3 GB |     197 | `call()`                            | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0 |
| 17.1% | 6.93 GB |     328 | `computeDirectly()`                 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
| 13.5% | 5.47 GB |     258 | `collectClusters(int[])`            | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
| 12.8% | 5.18 GB |     238 | `add(Object)`                       | java.util.ArrayList                                                  |
|  3.6% | 1.46 GB |      70 | `findNearestCentroid()`             | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |

#### Callees

Callees ranked by contribution to each function's total size. Callee attribution may be imprecise due to inlining.

##### `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)

|     % |    Size | Samples | Callee                           | Location                                                 |
| ----: | ------: | ------: | -------------------------------- | -------------------------------------------------------- |
| 81.8% |   33 GB |   1,563 | `combineResults(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| 71.7% | 28.9 GB |   1,329 | `join()`                         | java.util.concurrent.ForkJoinTask                        |
| 17.2% | 6.93 GB |     328 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  0.4% |  171 MB |       3 | `createSubtask(int, int)`        | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  0.3% |  135 MB |      10 | `createSubtask(int, int)`        | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |

##### `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans)

|     % |    Size | Samples | Callee                | Location          |
| ----: | ------: | ------: | --------------------- | ----------------- |
| 99.7% | 32.9 GB |   1,558 | `forEach(BiConsumer)` | java.util.HashMap |
|  0.2% | 64.1 MB |       5 | `<init>(Map)`         | java.util.HashMap |

##### `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |  Size | Samples | Callee            | Location                                  |
| -----: | ----: | ------: | ----------------- | ----------------------------------------- |
| 100.0% | 33 GB |   1,563 | `merge(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `combineResults(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |  Size | Samples | Callee                     | Location                                                 |
| -----: | ----: | ------: | -------------------------- | -------------------------------------------------------- |
| 100.0% | 33 GB |   1,563 | `combineResults(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `merge(Object, Object, BiFunction)` (java.util.HashMap)

|      % |    Size | Samples | Callee                  | Location                                                             |
| -----: | ------: | ------: | ----------------------- | -------------------------------------------------------------------- |
| 100.0% | 32.9 GB |   1,557 | `apply(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0 |

##### `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Callee                              | Location          |
| -----: | ------: | ------: | ----------------------------------- | ----------------- |
| 100.0% | 32.9 GB |   1,558 | `merge(Object, Object, BiFunction)` | java.util.HashMap |

##### `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88)

|      % |    Size | Samples | Callee                              | Location                                  |
| -----: | ------: | ------: | ----------------------------------- | ----------------------------------------- |
| 100.0% | 32.9 GB |   1,558 | `lambda$merge$7(Map, Object, List)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `forEach(BiConsumer)` (java.util.HashMap)

|      % |    Size | Samples | Callee                   | Location                                                             |
| -----: | ------: | ------: | ------------------------ | -------------------------------------------------------------------- |
| 100.0% | 32.9 GB |   1,558 | `accept(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88 |

##### `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|     % |    Size | Samples | Callee               | Location            |
| ----: | ------: | ------: | -------------------- | ------------------- |
| 72.3% | 23.8 GB |   1,133 | `addAll(Collection)` | java.util.ArrayList |
| 27.1% | 8.92 GB |     418 | `<init>(Collection)` | java.util.ArrayList |

##### `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0)

|      % |    Size | Samples | Callee                       | Location                                  |
| -----: | ------: | ------: | ---------------------------- | ----------------------------------------- |
| 100.0% | 32.9 GB |   1,557 | `lambda$merge$6(List, List)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |   Size | Samples | Callee     | Location                          |
| -----: | -----: | ------: | ---------- | --------------------------------- |
| 100.0% | 7.3 GB |     197 | `invoke()` | java.util.concurrent.ForkJoinTask |

##### `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0)

|      % |   Size | Samples | Callee                         | Location                                  |
| -----: | -----: | ------: | ------------------------------ | ----------------------------------------- |
| 100.0% | 7.3 GB |     197 | `lambda$run$0(int, List, int)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Callee                   | Location                                                 |
| -----: | ------: | ------: | ------------------------ | -------------------------------------------------------- |
| 100.0% | 6.93 GB |     328 | `computeDirectly()`      | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  79.0% | 5.47 GB |     258 | `collectClusters(int[])` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  21.0% | 1.46 GB |      70 | `findNearestCentroid()`  | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|     % |    Size | Samples | Callee                              | Location            |
| ----: | ------: | ------: | ----------------------------------- | ------------------- |
| 94.8% | 5.18 GB |     238 | `add(Object)`                       | java.util.ArrayList |
|  5.0% |  272 MB |      15 | `computeIfAbsent(Object, Function)` | java.util.HashMap   |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

|     % |    Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 15.2% | 6.18 GB |     359 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  7.0% | 2.86 GB |     125 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  7.0% | 2.84 GB |      56 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  6.8% | 2.76 GB |     193 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  5.0% | 2.02 GB |     125 | `<init>(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  4.9% |    2 GB |      94 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  4.3% | 1.73 GB |      38 | `<init>(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  3.4% | 1.39 GB |      69 | `<init>(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  3.3% | 1.35 GB |      49 | `add(Object)` (java.util.ArrayList) ← `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  3.2% | 1.29 GB |      52 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  2.7% |  1.1 GB |      67 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  2.6% | 1.06 GB |      50 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                             |
|  2.6% | 1.05 GB |      46 | `add(Object)` (java.util.ArrayList) ← `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  2.6% | 1.04 GB |      42 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                         |
|  2.5% | 1.03 GB |      48 | `add(Object)` (java.util.ArrayList) ← `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  2.1% |  833 MB |      46 | `<init>(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.9% |  756 MB |      30 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) |
|  1.7% |  704 MB |      38 | `add(Object)` (java.util.ArrayList) ← `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  1.6% |  666 MB |      28 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                     |
|  1.4% |  584 MB |      22 | `add(Object)` (java.util.ArrayList) ← `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |


# Retained heap profile

Retained 2.88 MB over 10 samples (288 kB per sample).

| Category |      % |    Size | Samples |
| -------- | -----: | ------: | ------: |
| stdlib   | 100.0% | 2.88 MB |       9 |
| ours     |  <0.1% |    40 B |       1 |

## Hottest functions

### Self size

Functions ranked by bytes retained directly in the function body, excluding callees.

|     % | Size | Samples | Function                     | Location                                  |
| ----: | ---: | ------: | ---------------------------- | ----------------------------------------- |
| <0.1% | 72 B |       3 | `valueOf(double)`            | java.lang.Double                          |
| <0.1% | 40 B |       1 | `lambda$generateData$4(int)` | org.renaissance.jdk.concurrent.JavaKMeans |

#### Lines

Lines ranked by contribution to each function's self size.

##### `valueOf(double)` (java.lang.Double)

|      % | Size | Samples | Location             |
| -----: | ---: | ------: | -------------------- |
| 100.0% | 72 B |       3 | java.lang.Double:773 |

##### `lambda$generateData$4(int)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % | Size | Samples | Location                                     |
| -----: | ---: | ------: | -------------------------------------------- |
| 100.0% | 40 B |       1 | org.renaissance.jdk.concurrent.JavaKMeans:87 |

#### Callers

Callers ranked by contribution to each function's self size. Caller attribution may be imprecise due to inlining.

##### `valueOf(double)` (java.lang.Double)

|      % | Size | Samples | Caller                                           | Location                                  |
| -----: | ---: | ------: | ------------------------------------------------ | ----------------------------------------- |
| 100.0% | 72 B |       3 | `lambda$generateData$3(int, int, Random[], int)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `lambda$generateData$4(int)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % | Size | Samples | Caller       | Location                                                             |
| -----: | ---: | ------: | ------------ | -------------------------------------------------------------------- |
| 100.0% | 40 B |       1 | `apply(int)` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a1d48 |

### Total size

Functions ranked by total bytes retained in the function and all its callees.

|     % |    Size | Samples | Function                                                                                                               | Location                                                             |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 84.0% | 2.42 MB |       8 | `main(String[])`                                                                                                       | org.renaissance.harness.RenaissanceSuite                             |
| 84.0% | 2.42 MB |       8 | `invoke(Object, Object[])`                                                                                             | java.lang.reflect.Method                                             |
| 84.0% | 2.42 MB |       8 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | org.renaissance.core.Launcher                                        |
| 84.0% | 2.42 MB |       8 | `launchHarnessClass(String, String[])`                                                                                 | org.renaissance.core.Launcher                                        |
| 84.0% | 2.42 MB |       8 | `main(String[])`                                                                                                       | org.renaissance.core.Launcher                                        |
| 74.9% | 2.16 MB |       7 | `main(String[])`                                                                                                       | org.renaissance.harness.RenaissanceSuite$                            |
| 74.9% | 2.16 MB |       6 | `collect(Collector)`                                                                                                   | java.util.stream.ReferencePipeline                                   |
| 74.9% | 2.16 MB |       5 | `generateData(int, int, int)`                                                                                          | org.renaissance.jdk.concurrent.JavaKMeans                            |
| 74.9% | 2.16 MB |       5 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | org.renaissance.jdk.concurrent.FjKmeans                              |
| 74.9% | 2.16 MB |       5 | `executeBenchmark()`                                                                                                   | org.renaissance.harness.ExecutionDriver                              |
| 74.9% | 2.16 MB |       5 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | org.renaissance.harness.RenaissanceSuite$                            |
| 74.9% | 2.16 MB |       5 | `applyVoid(Object)`                                                                                                    | org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001198798 |
| 74.9% | 2.16 MB |       5 | `foreach(Function1)`                                                                                                   | scala.collection.immutable.List                                      |
| 74.9% | 2.16 MB |       5 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | org.renaissance.harness.RenaissanceSuite$                            |
|  9.1% |  261 kB |       2 | `loadClass(String)`                                                                                                    | java.lang.ClassLoader                                                |
|  6.9% |  199 kB |       1 | `addAll(Collection)`                                                                                                   | java.util.ArrayList                                                  |
|  6.9% |  199 kB |       1 | `lambda$merge$6(List, List)`                                                                                           | org.renaissance.jdk.concurrent.JavaKMeans                            |
|  6.9% |  199 kB |       1 | `apply(Object, Object)`                                                                                                | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0 |
|  6.9% |  199 kB |       1 | `merge(Object, Object, BiFunction)`                                                                                    | java.util.HashMap                                                    |
|  6.9% |  199 kB |       1 | `lambda$merge$7(Map, Object, List)`                                                                                    | org.renaissance.jdk.concurrent.JavaKMeans                            |

#### Callees

Callees ranked by contribution to each function's total size. Callee attribution may be imprecise due to inlining.

##### `main(String[])` (org.renaissance.harness.RenaissanceSuite)

|     % |    Size | Samples | Callee              | Location                                  |
| ----: | ------: | ------: | ------------------- | ----------------------------------------- |
| 89.2% | 2.16 MB |       7 | `main(String[])`    | org.renaissance.harness.RenaissanceSuite$ |
| 10.8% |  261 kB |       1 | `loadClass(String)` | java.lang.ClassLoader                     |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (org.renaissance.core.Launcher)

|      % |    Size | Samples | Callee                     | Location                 |
| -----: | ------: | ------: | -------------------------- | ------------------------ |
| 100.0% | 2.42 MB |       8 | `invoke(Object, Object[])` | java.lang.reflect.Method |

##### `launchHarnessClass(String, String[])` (org.renaissance.core.Launcher)

|      % |    Size | Samples | Callee                                                      | Location                      |
| -----: | ------: | ------: | ----------------------------------------------------------- | ----------------------------- |
| 100.0% | 2.42 MB |       8 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | org.renaissance.core.Launcher |

##### `main(String[])` (org.renaissance.core.Launcher)

|      % |    Size | Samples | Callee                                 | Location                      |
| -----: | ------: | ------: | -------------------------------------- | ----------------------------- |
| 100.0% | 2.42 MB |       8 | `launchHarnessClass(String, String[])` | org.renaissance.core.Launcher |

##### `main(String[])` (org.renaissance.harness.RenaissanceSuite$)

|      % |    Size | Samples | Callee                                                                        | Location                                  |
| -----: | ------: | ------: | ----------------------------------------------------------------------------- | ----------------------------------------- |
| 100.0% | 2.16 MB |       5 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | org.renaissance.harness.RenaissanceSuite$ |
|  <0.1% |   112 B |       1 | `<clinit>()`                                                                  | scala.Predef$                             |
|  <0.1% |    24 B |       1 | `apply(Function0)`                                                            | scala.util.Try$                           |

##### `generateData(int, int, int)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Callee               | Location                           |
| -----: | ------: | ------: | -------------------- | ---------------------------------- |
| 100.0% | 2.16 MB |       5 | `collect(Collector)` | java.util.stream.ReferencePipeline |

##### `setUpBeforeAll(BenchmarkContext)` (org.renaissance.jdk.concurrent.FjKmeans)

|      % |    Size | Samples | Callee                        | Location                                  |
| -----: | ------: | ------: | ----------------------------- | ----------------------------------------- |
| 100.0% | 2.16 MB |       5 | `generateData(int, int, int)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `executeBenchmark()` (org.renaissance.harness.ExecutionDriver)

|      % |    Size | Samples | Callee                             | Location                                |
| -----: | ------: | ------: | ---------------------------------- | --------------------------------------- |
| 100.0% | 2.16 MB |       5 | `setUpBeforeAll(BenchmarkContext)` | org.renaissance.jdk.concurrent.FjKmeans |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (org.renaissance.harness.RenaissanceSuite$)

|      % |    Size | Samples | Callee               | Location                                |
| -----: | ------: | ------: | -------------------- | --------------------------------------- |
| 100.0% | 2.16 MB |       5 | `executeBenchmark()` | org.renaissance.harness.ExecutionDriver |

##### `applyVoid(Object)` (org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001198798)

|      % |    Size | Samples | Callee                                                                                                                 | Location                                  |
| -----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| 100.0% | 2.16 MB |       5 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | org.renaissance.harness.RenaissanceSuite$ |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (org.renaissance.harness.RenaissanceSuite$)

|      % |    Size | Samples | Callee               | Location                        |
| -----: | ------: | ------: | -------------------- | ------------------------------- |
| 100.0% | 2.16 MB |       5 | `foreach(Function1)` | scala.collection.immutable.List |

##### `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |   Size | Samples | Callee               | Location            |
| -----: | -----: | ------: | -------------------- | ------------------- |
| 100.0% | 199 kB |       1 | `addAll(Collection)` | java.util.ArrayList |

##### `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0)

|      % |   Size | Samples | Callee                       | Location                                  |
| -----: | -----: | ------: | ---------------------------- | ----------------------------------------- |
| 100.0% | 199 kB |       1 | `lambda$merge$6(List, List)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `merge(Object, Object, BiFunction)` (java.util.HashMap)

|      % |   Size | Samples | Callee                  | Location                                                             |
| -----: | -----: | ------: | ----------------------- | -------------------------------------------------------------------- |
| 100.0% | 199 kB |       1 | `apply(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0 |

##### `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |   Size | Samples | Callee                              | Location          |
| -----: | -----: | ------: | ----------------------------------- | ----------------- |
| 100.0% | 199 kB |       1 | `merge(Object, Object, BiFunction)` | java.util.HashMap |

## Hottest call stacks

Call stacks ranked by bytes retained in their leaf frame.

|     % |    Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 74.9% | 2.16 MB |       1 | `collect(Collector)` (java.util.stream.ReferencePipeline) ← `generateData(int, int, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `setUpBeforeAll(BenchmarkContext)` (org.renaissance.jdk.concurrent.FjKmeans) ← `executeBenchmark()` (org.renaissance.harness.ExecutionDriver) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (org.renaissance.harness.RenaissanceSuite$) ← `applyVoid(Object)` (org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001198798) ← `foreach(Function1)` (scala.collection.immutable.List) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (org.renaissance.harness.RenaissanceSuite$) ← `main(String[])` ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (org.renaissance.core.Launcher) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  9.1% |  261 kB |       1 | `loadClass(String)` (java.lang.ClassLoader) ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (org.renaissance.core.Launcher) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  6.9% |  199 kB |       1 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| <0.1% |   112 B |       1 | `loadClass(String)` (java.lang.ClassLoader) ← `<clinit>()` (scala.Predef$) ← `main(String[])` (org.renaissance.harness.RenaissanceSuite$) ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (org.renaissance.core.Launcher) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| <0.1% |    72 B |       3 | `valueOf(double)` (java.lang.Double) ← `lambda$generateData$3(int, int, Random[], int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(int)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a1b10) ← `toArray(IntFunction)` (java.util.stream.ReferencePipeline) ← `lambda$generateData$5(int, int, Random[], int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(int)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a18d8) ← `collect(Collector)` (java.util.stream.ReferencePipeline) ← `generateData(int, int, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `setUpBeforeAll(BenchmarkContext)` (org.renaissance.jdk.concurrent.FjKmeans) ← `executeBenchmark()` (org.renaissance.harness.ExecutionDriver) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (org.renaissance.harness.RenaissanceSuite$) ← `applyVoid(Object)` (org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001198798) ← `foreach(Function1)` (scala.collection.immutable.List) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (org.renaissance.harness.RenaissanceSuite$) ← `main(String[])` ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (org.renaissance.core.Launcher) ← `launchHarnessClass(String, String[])` ← `main(String[])` |
| <0.1% |    40 B |       1 | `lambda$generateData$4(int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(int)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a1d48) ← `toArray(IntFunction)` (java.util.stream.ReferencePipeline) ← `lambda$generateData$5(int, int, Random[], int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(int)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a18d8) ← `collect(Collector)` (java.util.stream.ReferencePipeline) ← `generateData(int, int, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `setUpBeforeAll(BenchmarkContext)` (org.renaissance.jdk.concurrent.FjKmeans) ← `executeBenchmark()` (org.renaissance.harness.ExecutionDriver) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (org.renaissance.harness.RenaissanceSuite$) ← `applyVoid(Object)` (org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001198798) ← `foreach(Function1)` (scala.collection.immutable.List) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (org.renaissance.harness.RenaissanceSuite$) ← `main(String[])` ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (org.renaissance.core.Launcher) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                            |
| <0.1% |    24 B |       1 | `split(String)` (java.lang.String) ← `pathsToSet(String)` (org.renaissance.core.ModuleLoader) ← `lambda$collectModuleJars$1(Map$Entry)` ← `apply(Object)` (org.renaissance.core.ModuleLoader$$Lambda.0x000000700100ad50) ← `collect(Collector)` (java.util.stream.ReferencePipeline) ← `collectModuleJars(Map)` (org.renaissance.core.ModuleLoader) ← `create(Path, URI)` ← `optionallyCreateModuleLoader(Path, boolean)` (org.renaissance.core.BenchmarkSuite) ← `create(Path, String, Optional, Map, boolean)` ← `$anonfun$1(Config, Path)` (org.renaissance.harness.RenaissanceSuite$) ← `apply()` (org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700117e000) ← `apply(Function0)` (scala.util.Try$) ← `main(String[])` (org.renaissance.harness.RenaissanceSuite$) ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (org.renaissance.core.Launcher) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                             |


# Lock contention profile

Blocked 7.44s over 58 samples (128.4ms per sample).

| Category |      % |  Time | Samples |
| -------- | -----: | ----: | ------: |
| stdlib   | 100.0% | 7.44s |      58 |

## Hottest functions

### Total time

Functions ranked by total time blocked in the function and all its callees.

|     % |  Time | Samples | Function                                                                                                               | Location                                                             |
| ----: | ----: | ------: | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 83.2% | 6.19s |      16 | `get()`                                                                                                                | java.util.concurrent.ForkJoinTask                                    |
| 83.2% | 6.19s |      16 | `run(int, List, int)`                                                                                                  | org.renaissance.jdk.concurrent.JavaKMeans                            |
| 83.2% | 6.19s |      16 | `$anonfun$1(int)`                                                                                                      | org.renaissance.jdk.concurrent.FjKmeans                              |
| 83.2% | 6.19s |      16 | `$anonfun$adapted$1(Object)`                                                                                           | org.renaissance.jdk.concurrent.FjKmeans                              |
| 83.2% | 6.19s |      16 | `apply(Object)`                                                                                                        | org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011f6c70   |
| 83.2% | 6.19s |      16 | `map(Function1)`                                                                                                       | scala.collection.immutable.Range                                     |
| 83.2% | 6.19s |      16 | `run(BenchmarkContext)`                                                                                                | org.renaissance.jdk.concurrent.FjKmeans                              |
| 83.2% | 6.19s |      16 | `executeOperation(int)`                                                                                                | org.renaissance.harness.ExecutionDriver                              |
| 83.2% | 6.19s |      16 | `executeBenchmark()`                                                                                                   | org.renaissance.harness.ExecutionDriver                              |
| 83.2% | 6.19s |      16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | org.renaissance.harness.RenaissanceSuite$                            |
| 83.2% | 6.19s |      16 | `applyVoid(Object)`                                                                                                    | org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001198798 |
| 83.2% | 6.19s |      16 | `foreach(Function1)`                                                                                                   | scala.collection.immutable.List                                      |
| 83.2% | 6.19s |      16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | org.renaissance.harness.RenaissanceSuite$                            |
| 83.2% | 6.19s |      16 | `main(String[])`                                                                                                       | org.renaissance.harness.RenaissanceSuite$                            |
| 83.2% | 6.19s |      16 | `main(String[])`                                                                                                       | org.renaissance.harness.RenaissanceSuite                             |
| 83.2% | 6.19s |      16 | `invoke(Object, Object[])`                                                                                             | java.lang.reflect.Method                                             |
| 83.2% | 6.19s |      16 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | org.renaissance.core.Launcher                                        |
| 83.2% | 6.19s |      16 | `launchHarnessClass(String, String[])`                                                                                 | org.renaissance.core.Launcher                                        |
| 83.2% | 6.19s |      16 | `main(String[])`                                                                                                       | org.renaissance.core.Launcher                                        |

#### Callees

Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

##### `run(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |  Time | Samples | Callee  | Location                          |
| -----: | ----: | ------: | ------- | --------------------------------- |
| 100.0% | 6.19s |      16 | `get()` | java.util.concurrent.ForkJoinTask |

##### `$anonfun$1(int)` (org.renaissance.jdk.concurrent.FjKmeans)

|      % |  Time | Samples | Callee                | Location                                  |
| -----: | ----: | ------: | --------------------- | ----------------------------------------- |
| 100.0% | 6.19s |      16 | `run(int, List, int)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `$anonfun$adapted$1(Object)` (org.renaissance.jdk.concurrent.FjKmeans)

|      % |  Time | Samples | Callee            | Location                                |
| -----: | ----: | ------: | ----------------- | --------------------------------------- |
| 100.0% | 6.19s |      16 | `$anonfun$1(int)` | org.renaissance.jdk.concurrent.FjKmeans |

##### `apply(Object)` (org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011f6c70)

|      % |  Time | Samples | Callee                       | Location                                |
| -----: | ----: | ------: | ---------------------------- | --------------------------------------- |
| 100.0% | 6.19s |      16 | `$anonfun$adapted$1(Object)` | org.renaissance.jdk.concurrent.FjKmeans |

##### `map(Function1)` (scala.collection.immutable.Range)

|      % |  Time | Samples | Callee          | Location                                                           |
| -----: | ----: | ------: | --------------- | ------------------------------------------------------------------ |
| 100.0% | 6.19s |      16 | `apply(Object)` | org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011f6c70 |

##### `run(BenchmarkContext)` (org.renaissance.jdk.concurrent.FjKmeans)

|      % |  Time | Samples | Callee           | Location                         |
| -----: | ----: | ------: | ---------------- | -------------------------------- |
| 100.0% | 6.19s |      16 | `map(Function1)` | scala.collection.immutable.Range |

##### `executeOperation(int)` (org.renaissance.harness.ExecutionDriver)

|      % |  Time | Samples | Callee                  | Location                                |
| -----: | ----: | ------: | ----------------------- | --------------------------------------- |
| 100.0% | 6.19s |      16 | `run(BenchmarkContext)` | org.renaissance.jdk.concurrent.FjKmeans |

##### `executeBenchmark()` (org.renaissance.harness.ExecutionDriver)

|      % |  Time | Samples | Callee                  | Location                                |
| -----: | ----: | ------: | ----------------------- | --------------------------------------- |
| 100.0% | 6.19s |      16 | `executeOperation(int)` | org.renaissance.harness.ExecutionDriver |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (org.renaissance.harness.RenaissanceSuite$)

|      % |  Time | Samples | Callee               | Location                                |
| -----: | ----: | ------: | -------------------- | --------------------------------------- |
| 100.0% | 6.19s |      16 | `executeBenchmark()` | org.renaissance.harness.ExecutionDriver |

##### `applyVoid(Object)` (org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001198798)

|      % |  Time | Samples | Callee                                                                                                                 | Location                                  |
| -----: | ----: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| 100.0% | 6.19s |      16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | org.renaissance.harness.RenaissanceSuite$ |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (org.renaissance.harness.RenaissanceSuite$)

|      % |  Time | Samples | Callee               | Location                        |
| -----: | ----: | ------: | -------------------- | ------------------------------- |
| 100.0% | 6.19s |      16 | `foreach(Function1)` | scala.collection.immutable.List |

##### `main(String[])` (org.renaissance.harness.RenaissanceSuite$)

|      % |  Time | Samples | Callee                                                                        | Location                                  |
| -----: | ----: | ------: | ----------------------------------------------------------------------------- | ----------------------------------------- |
| 100.0% | 6.19s |      16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | org.renaissance.harness.RenaissanceSuite$ |

##### `main(String[])` (org.renaissance.harness.RenaissanceSuite)

|      % |  Time | Samples | Callee           | Location                                  |
| -----: | ----: | ------: | ---------------- | ----------------------------------------- |
| 100.0% | 6.19s |      16 | `main(String[])` | org.renaissance.harness.RenaissanceSuite$ |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (org.renaissance.core.Launcher)

|      % |  Time | Samples | Callee                     | Location                 |
| -----: | ----: | ------: | -------------------------- | ------------------------ |
| 100.0% | 6.19s |      16 | `invoke(Object, Object[])` | java.lang.reflect.Method |

##### `launchHarnessClass(String, String[])` (org.renaissance.core.Launcher)

|      % |  Time | Samples | Callee                                                      | Location                      |
| -----: | ----: | ------: | ----------------------------------------------------------- | ----------------------------- |
| 100.0% | 6.19s |      16 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | org.renaissance.core.Launcher |

##### `main(String[])` (org.renaissance.core.Launcher)

|      % |  Time | Samples | Callee                                 | Location                      |
| -----: | ----: | ------: | -------------------------------------- | ----------------------------- |
| 100.0% | 6.19s |      16 | `launchHarnessClass(String, String[])` | org.renaissance.core.Launcher |

## Hottest call stacks

Call stacks ranked by time blocked in their leaf frame.

|     % |  Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----: | ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 83.2% | 6.19s |      16 | `get()` (java.util.concurrent.ForkJoinTask) ← `run(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `$anonfun$1(int)` (org.renaissance.jdk.concurrent.FjKmeans) ← `$anonfun$adapted$1(Object)` ← `apply(Object)` (org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011f6c70) ← `map(Function1)` (scala.collection.immutable.Range) ← `run(BenchmarkContext)` (org.renaissance.jdk.concurrent.FjKmeans) ← `executeOperation(int)` (org.renaissance.harness.ExecutionDriver) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (org.renaissance.harness.RenaissanceSuite$) ← `applyVoid(Object)` (org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001198798) ← `foreach(Function1)` (scala.collection.immutable.List) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (org.renaissance.harness.RenaissanceSuite$) ← `main(String[])` ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (org.renaissance.core.Launcher) ← `launchHarnessClass(String, String[])` ← `main(String[])` |

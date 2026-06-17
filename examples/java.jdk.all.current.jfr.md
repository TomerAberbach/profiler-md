# Sampling profile

Collected 1,634 samples.

| Category |     % | Samples |
| -------- | ----: | ------: |
| ours     | 91.2% |   1,491 |
| stdlib   |  8.8% |     143 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                            | Location                                                                            |
| ----: | ------: | ----------------------------------- | ----------------------------------------------------------------------------------- |
| 45.3% |     741 | `accumulate(Double[], double[])`    | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask                             |
| 23.5% |     384 | `distance(Double[], Double[])`      | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |
| 10.6% |     174 | `findNearestCentroid()`             | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |
|  5.8% |      95 | `collectClusters(int[])`            | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |
|  3.8% |      62 | `vectorSum()`                       | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask                             |
|  3.2% |      52 | `computeIfAbsent(Object, Function)` | java.util.HashMap                                                                   |
|  1.3% |      21 | `computeDirectly()`                 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |
|  0.6% |      10 | `apply(Object)`                     | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011dec00 |
|  0.1% |       2 | `compute()`                         | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask                                |
|  0.1% |       2 | `merge(Object, Object, BiFunction)` | java.util.HashMap                                                                   |
|  0.1% |       1 | `lambda$merge$7(Map, Object, List)` | org.renaissance.jdk.concurrent.JavaKMeans                                           |
|  0.1% |       1 | `createSubtask(int, int)`           | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask                            |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Location                                                    |
| -----: | ------: | ----------------------------------------------------------- |
| 100.0% |     741 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:411 |

##### `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Location                                                     |
| -----: | ------: | ------------------------------------------------------------ |
| 100.0% |     384 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:248 |

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|     % | Samples | Location                                                     |
| ----: | ------: | ------------------------------------------------------------ |
| 92.0% |     160 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:229 |
|  6.3% |      11 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:225 |
|  1.7% |       3 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:230 |

##### `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|     % | Samples | Location                                                     |
| ----: | ------: | ------------------------------------------------------------ |
| 77.9% |      74 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215 |
| 22.1% |      21 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:211 |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|     % | Samples | Location                                                    |
| ----: | ------: | ----------------------------------------------------------- |
| 98.4% |      61 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400 |
|  1.6% |       1 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:403 |

##### `computeIfAbsent(Object, Function)` (java.util.HashMap)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |      52 | java.util.HashMap:1219 |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Location                                                     |
| -----: | ------: | ------------------------------------------------------------ |
| 100.0% |      21 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:204 |

##### `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)

|      % | Samples | Location                                                 |
| -----: | ------: | -------------------------------------------------------- |
| 100.0% |       2 | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask:151 |

##### `merge(Object, Object, BiFunction)` (java.util.HashMap)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |       2 | java.util.HashMap:1371 |

##### `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % | Samples | Location                                      |
| -----: | ------: | --------------------------------------------- |
| 100.0% |       1 | org.renaissance.jdk.concurrent.JavaKMeans:112 |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Location                                                     |
| -----: | ------: | ------------------------------------------------------------ |
| 100.0% |       1 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261 |

#### Callers

Callers ranked by contribution to each function's self samples. Caller attribution may be imprecise due to inlining.

##### `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Caller        | Location                                                |
| -----: | ------: | ------------- | ------------------------------------------------------- |
| 100.0% |     741 | `vectorSum()` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Caller                  | Location                                                 |
| -----: | ------: | ----------------------- | -------------------------------------------------------- |
| 100.0% |     384 | `findNearestCentroid()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Caller              | Location                                                 |
| -----: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% |     174 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Caller              | Location                                                 |
| -----: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% |      95 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Caller              | Location                                                |
| -----: | ------: | ------------------- | ------------------------------------------------------- |
| 100.0% |      62 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `computeIfAbsent(Object, Function)` (java.util.HashMap)

|      % | Samples | Caller                   | Location                                                 |
| -----: | ------: | ------------------------ | -------------------------------------------------------- |
| 100.0% |      52 | `collectClusters(int[])` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Caller              | Location                                                 |
| -----: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% |      21 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `apply(Object)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011dec00)

|      % | Samples | Caller                              | Location          |
| -----: | ------: | ----------------------------------- | ----------------- |
| 100.0% |      10 | `computeIfAbsent(Object, Function)` | java.util.HashMap |

##### `merge(Object, Object, BiFunction)` (java.util.HashMap)

|      % | Samples | Caller                              | Location                                  |
| -----: | ------: | ----------------------------------- | ----------------------------------------- |
| 100.0% |       2 | `lambda$merge$7(Map, Object, List)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % | Samples | Caller                   | Location                                                             |
| -----: | ------: | ------------------------ | -------------------------------------------------------------------- |
| 100.0% |       1 | `accept(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dee50 |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Caller      | Location                                             |
| -----: | ------: | ----------- | ---------------------------------------------------- |
| 100.0% |       1 | `compute()` | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                            | Location                                                             |
| ----: | ------: | ----------------------------------- | -------------------------------------------------------------------- |
| 98.9% |   1,616 | `compute()`                         | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask                 |
| 97.2% |   1,588 | `join()`                            | java.util.concurrent.ForkJoinTask                                    |
| 49.1% |     803 | `vectorSum()`                       | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask              |
| 49.1% |     803 | `computeDirectly()`                 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask              |
| 46.8% |     765 | `computeDirectly()`                 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
| 45.3% |     741 | `accumulate(Double[], double[])`    | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask              |
| 34.1% |     558 | `findNearestCentroid()`             | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
| 23.5% |     384 | `distance(Double[], Double[])`      | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
| 20.9% |     341 | `invoke()`                          | java.util.concurrent.ForkJoinTask                                    |
| 20.0% |     327 | `average(List)`                     | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                 |
| 20.0% |     327 | `computeClusterAverages()`          | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                 |
| 19.5% |     319 | `computeDirectly()`                 | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                 |
| 11.4% |     186 | `collectClusters(int[])`            | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|  3.8% |      62 | `computeIfAbsent(Object, Function)` | java.util.HashMap                                                    |
|  1.8% |      29 | `add(Object)`                       | java.util.ArrayList                                                  |
|  1.7% |      27 | `lambda$run$0(int, List, int)`      | org.renaissance.jdk.concurrent.JavaKMeans                            |
|  1.3% |      22 | `call()`                            | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011d79d8 |
|  0.9% |      15 | `merge(Map, Map)`                   | org.renaissance.jdk.concurrent.JavaKMeans                            |
|  0.9% |      14 | `combineResults(Map, Map)`          | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|  0.9% |      14 | `combineResults(Object, Object)`    | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |

#### Callees

Callees ranked by contribution to each function's total samples. Callee attribution may be imprecise due to inlining.

##### `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)

|     % | Samples | Callee                           | Location                                                 |
| ----: | ------: | -------------------------------- | -------------------------------------------------------- |
| 98.3% |   1,588 | `join()`                         | java.util.concurrent.ForkJoinTask                        |
| 49.7% |     803 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| 47.3% |     765 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| 19.7% |     319 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
|  0.9% |      14 | `combineResults(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|     % | Samples | Callee                           | Location                                                |
| ----: | ------: | -------------------------------- | ------------------------------------------------------- |
| 92.3% |     741 | `accumulate(Double[], double[])` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Callee              | Location                                                |
| -----: | ------: | ------------------- | ------------------------------------------------------- |
| 100.0% |     803 | `vectorSum()`       | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |
| 100.0% |     803 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Callee                   | Location                                                 |
| -----: | ------: | ------------------------ | -------------------------------------------------------- |
| 100.0% |     765 | `computeDirectly()`      | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  72.9% |     558 | `findNearestCentroid()`  | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  24.3% |     186 | `collectClusters(int[])` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|     % | Samples | Callee                         | Location                                                 |
| ----: | ------: | ------------------------------ | -------------------------------------------------------- |
| 68.8% |     384 | `distance(Double[], Double[])` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % | Samples | Callee     | Location                          |
| -----: | ------: | ---------- | --------------------------------- |
| 100.0% |     327 | `invoke()` | java.util.concurrent.ForkJoinTask |

##### `computeClusterAverages()` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % | Samples | Callee          | Location                                             |
| -----: | ------: | --------------- | ---------------------------------------------------- |
| 100.0% |     327 | `average(List)` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % | Samples | Callee                     | Location                                             |
| -----: | ------: | -------------------------- | ---------------------------------------------------- |
| 100.0% |     319 | `computeClusterAverages()` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |
| 100.0% |     319 | `computeDirectly()`        | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |

##### `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|     % | Samples | Callee                              | Location            |
| ----: | ------: | ----------------------------------- | ------------------- |
| 33.3% |      62 | `computeIfAbsent(Object, Function)` | java.util.HashMap   |
| 15.6% |      29 | `add(Object)`                       | java.util.ArrayList |

##### `computeIfAbsent(Object, Function)` (java.util.HashMap)

|     % | Samples | Callee          | Location                                                                            |
| ----: | ------: | --------------- | ----------------------------------------------------------------------------------- |
| 16.1% |      10 | `apply(Object)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011dec00 |

##### `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % | Samples | Callee     | Location                          |
| -----: | ------: | ---------- | --------------------------------- |
| 100.0% |      27 | `invoke()` | java.util.concurrent.ForkJoinTask |

##### `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011d79d8)

|      % | Samples | Callee                         | Location                                  |
| -----: | ------: | ------------------------------ | ----------------------------------------- |
| 100.0% |      22 | `lambda$run$0(int, List, int)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans)

|     % | Samples | Callee                | Location          |
| ----: | ------: | --------------------- | ----------------- |
| 60.0% |       9 | `forEach(BiConsumer)` | java.util.HashMap |
| 40.0% |       6 | `<init>(Map)`         | java.util.HashMap |

##### `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Callee            | Location                                  |
| -----: | ------: | ----------------- | ----------------------------------------- |
| 100.0% |      14 | `merge(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `combineResults(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Callee                     | Location                                                 |
| -----: | ------: | -------------------------- | -------------------------------------------------------- |
| 100.0% |      14 | `combineResults(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5.9% |      97 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 5.3% |      86 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                  |
| 5.1% |      84 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 4.6% |      75 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 4.6% |      75 | `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 4.3% |      71 | `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask)                                                                                                                                              |
| 3.8% |      62 | `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 3.6% |      59 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                  |
| 2.9% |      47 | `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 2.8% |      45 | `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                 |
| 2.5% |      41 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 2.4% |      40 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 2.2% |      36 | `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2.1% |      34 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 2.0% |      33 | `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                          |
| 2.0% |      32 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) |
| 1.8% |      30 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                      |
| 1.7% |      28 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                      |
| 1.7% |      27 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.6% |      26 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                          |


# Allocated heap profile

Allocated 40.4 GB over 2,040 samples (19.8 MB per sample).

| Category |     % |    Size | Samples |
| -------- | ----: | ------: | ------: |
| stdlib   | 96.2% | 38.8 GB |   1,915 |
| ours     |  3.8% | 1.54 GB |     123 |
| native   | <0.1% | 2.06 kB |       2 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |    Size | Samples | Function                             | Location                                                 |
| ----: | ------: | ------: | ------------------------------------ | -------------------------------------------------------- |
|  2.2% |  889 MB |      70 | `findNearestCentroid()`              | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  0.4% |  149 MB |       7 | `createSubtask(int, int)`            | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  0.3% |  112 MB |       5 | `lambda$collectClusters$0(Double[])` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  0.2% | 88.2 MB |       4 | `createSubtask(int, int)`            | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  0.2% | 80.3 MB |       7 | `merge(Map, Map)`                    | org.renaissance.jdk.concurrent.JavaKMeans                |
|  0.2% | 69.4 MB |       1 | `computeClusterAverages()`           | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
|  0.2% |   69 MB |       8 | `collectClusters(int[])`             | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  0.2% | 62.9 MB |       7 | `lambda$merge$6(List, List)`         | org.renaissance.jdk.concurrent.JavaKMeans                |
| <0.1% | 11.5 MB |       5 | `vectorSum()`                        | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| <0.1% | 11.1 MB |      24 | `valueOf(double)`                    | java.lang.Double                                         |
| <0.1% | 4.16 MB |       8 | `lambda$generateData$4(int)`         | org.renaissance.jdk.concurrent.JavaKMeans                |
| <0.1% | 1.19 MB |       3 | `range(int, int)`                    | java.util.stream.IntStream                               |
| <0.1% |  206 kB |       1 | `add(double[], double[])`            | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |

#### Lines

Lines ranked by contribution to each function's self size.

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |   Size | Samples | Location                                                     |
| -----: | -----: | ------: | ------------------------------------------------------------ |
| 100.0% | 889 MB |      70 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:223 |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |   Size | Samples | Location                                                     |
| -----: | -----: | ------: | ------------------------------------------------------------ |
| 100.0% | 149 MB |       7 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261 |

##### `lambda$collectClusters$0(Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |   Size | Samples | Location                                                     |
| -----: | -----: | ------: | ------------------------------------------------------------ |
| 100.0% | 112 MB |       5 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215 |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |    Size | Samples | Location                                                    |
| -----: | ------: | ------: | ----------------------------------------------------------- |
| 100.0% | 88.2 MB |       4 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419 |

##### `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Location                                      |
| -----: | ------: | ------: | --------------------------------------------- |
| 100.0% | 80.3 MB |       7 | org.renaissance.jdk.concurrent.JavaKMeans:110 |

##### `computeClusterAverages()` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % |    Size | Samples | Location                                                 |
| -----: | ------: | ------: | -------------------------------------------------------- |
| 100.0% | 69.4 MB |       1 | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:314 |

##### `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |  Size | Samples | Location                                                     |
| -----: | ----: | ------: | ------------------------------------------------------------ |
| 100.0% | 69 MB |       8 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:209 |

##### `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Location                                      |
| -----: | ------: | ------: | --------------------------------------------- |
| 100.0% | 62.9 MB |       7 | org.renaissance.jdk.concurrent.JavaKMeans:114 |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |    Size | Samples | Location                                                    |
| -----: | ------: | ------: | ----------------------------------------------------------- |
| 100.0% | 11.5 MB |       5 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400 |

##### `valueOf(double)` (java.lang.Double)

|      % |    Size | Samples | Location             |
| -----: | ------: | ------: | -------------------- |
| 100.0% | 11.1 MB |      24 | java.lang.Double:773 |

##### `lambda$generateData$4(int)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Location                                     |
| -----: | ------: | ------: | -------------------------------------------- |
| 100.0% | 4.16 MB |       8 | org.renaissance.jdk.concurrent.JavaKMeans:87 |

##### `range(int, int)` (java.util.stream.IntStream)

|      % |    Size | Samples | Location                        |
| -----: | ------: | ------: | ------------------------------- |
| 100.0% | 1.19 MB |       3 | java.util.stream.IntStream:1083 |

##### `add(double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |   Size | Samples | Location                                                    |
| -----: | -----: | ------: | ----------------------------------------------------------- |
| 100.0% | 206 kB |       1 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:430 |

#### Callers

Callers ranked by contribution to each function's self size. Caller attribution may be imprecise due to inlining.

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |   Size | Samples | Caller              | Location                                                 |
| -----: | -----: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% | 889 MB |      70 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |   Size | Samples | Caller      | Location                                             |
| -----: | -----: | ------: | ----------- | ---------------------------------------------------- |
| 100.0% | 149 MB |       7 | `compute()` | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |

##### `lambda$collectClusters$0(Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |   Size | Samples | Caller          | Location                                                                            |
| -----: | -----: | ------: | --------------- | ----------------------------------------------------------------------------------- |
| 100.0% | 112 MB |       5 | `apply(Object)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011dec00 |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |    Size | Samples | Caller      | Location                                             |
| -----: | ------: | ------: | ----------- | ---------------------------------------------------- |
| 100.0% | 88.2 MB |       4 | `compute()` | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |

##### `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Caller                     | Location                                                 |
| -----: | ------: | ------: | -------------------------- | -------------------------------------------------------- |
| 100.0% | 80.3 MB |       7 | `combineResults(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `computeClusterAverages()` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % |    Size | Samples | Caller              | Location                                             |
| -----: | ------: | ------: | ------------------- | ---------------------------------------------------- |
| 100.0% | 69.4 MB |       1 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |

##### `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |  Size | Samples | Caller              | Location                                                 |
| -----: | ----: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% | 69 MB |       8 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Caller                  | Location                                                             |
| -----: | ------: | ------: | ----------------------- | -------------------------------------------------------------------- |
| 100.0% | 62.9 MB |       7 | `apply(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011df098 |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |    Size | Samples | Caller              | Location                                                |
| -----: | ------: | ------: | ------------------- | ------------------------------------------------------- |
| 100.0% | 11.5 MB |       5 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `valueOf(double)` (java.lang.Double)

|      % |    Size | Samples | Caller                                           | Location                                  |
| -----: | ------: | ------: | ------------------------------------------------ | ----------------------------------------- |
| 100.0% | 11.1 MB |      24 | `lambda$generateData$3(int, int, Random[], int)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `lambda$generateData$4(int)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Caller       | Location                                                             |
| -----: | ------: | ------: | ------------ | -------------------------------------------------------------------- |
| 100.0% | 4.16 MB |       8 | `apply(int)` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001179d48 |

##### `range(int, int)` (java.util.stream.IntStream)

|      % |    Size | Samples | Caller                                           | Location                                  |
| -----: | ------: | ------: | ------------------------------------------------ | ----------------------------------------- |
| 100.0% | 1.19 MB |       3 | `lambda$generateData$5(int, int, Random[], int)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `add(double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |   Size | Samples | Caller                               | Location                                                |
| -----: | -----: | ------: | ------------------------------------ | ------------------------------------------------------- |
| 100.0% | 206 kB |       1 | `combineResults(double[], double[])` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |    Size | Samples | Function                            | Location                                                             |
| ----: | ------: | ------: | ----------------------------------- | -------------------------------------------------------------------- |
| 99.4% | 40.1 GB |   1,915 | `compute()`                         | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask                 |
| 81.1% | 32.8 GB |   1,590 | `merge(Map, Map)`                   | org.renaissance.jdk.concurrent.JavaKMeans                            |
| 81.1% | 32.8 GB |   1,590 | `combineResults(Map, Map)`          | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
| 81.1% | 32.8 GB |   1,590 | `combineResults(Object, Object)`    | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
| 80.9% | 32.7 GB |   1,579 | `lambda$merge$6(List, List)`        | org.renaissance.jdk.concurrent.JavaKMeans                            |
| 80.9% | 32.7 GB |   1,579 | `apply(Object, Object)`             | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011df098 |
| 80.9% | 32.7 GB |   1,579 | `merge(Object, Object, BiFunction)` | java.util.HashMap                                                    |
| 80.9% | 32.7 GB |   1,579 | `lambda$merge$7(Map, Object, List)` | org.renaissance.jdk.concurrent.JavaKMeans                            |
| 80.9% | 32.7 GB |   1,579 | `accept(Object, Object)`            | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dee50 |
| 80.9% | 32.7 GB |   1,579 | `forEach(BiConsumer)`               | java.util.HashMap                                                    |
| 67.3% | 27.2 GB |   1,284 | `join()`                            | java.util.concurrent.ForkJoinTask                                    |
| 62.5% | 25.2 GB |   1,172 | `addAll(Collection)`                | java.util.ArrayList                                                  |
| 18.9% | 7.62 GB |     242 | `invoke()`                          | java.util.concurrent.ForkJoinTask                                    |
| 18.2% | 7.37 GB |     400 | `<init>(Collection)`                | java.util.ArrayList                                                  |
| 18.0% | 7.26 GB |     228 | `lambda$run$0(int, List, int)`      | org.renaissance.jdk.concurrent.JavaKMeans                            |
| 18.0% | 7.26 GB |     228 | `call()`                            | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011d79d8 |
| 17.5% | 7.06 GB |     307 | `computeDirectly()`                 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
| 15.3% | 6.17 GB |     237 | `collectClusters(int[])`            | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
| 14.3% | 5.79 GB |     218 | `add(Object)`                       | java.util.ArrayList                                                  |
|  2.2% |  889 MB |      70 | `findNearestCentroid()`             | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |

#### Callees

Callees ranked by contribution to each function's total size. Callee attribution may be imprecise due to inlining.

##### `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)

|     % |    Size | Samples | Callee                           | Location                                                 |
| ----: | ------: | ------: | -------------------------------- | -------------------------------------------------------- |
| 81.6% | 32.8 GB |   1,590 | `combineResults(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| 67.7% | 27.2 GB |   1,284 | `join()`                         | java.util.concurrent.ForkJoinTask                        |
| 17.6% | 7.06 GB |     307 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  0.4% |  149 MB |       7 | `createSubtask(int, int)`        | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  0.2% | 88.2 MB |       4 | `createSubtask(int, int)`        | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |

##### `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans)

|     % |    Size | Samples | Callee                | Location          |
| ----: | ------: | ------: | --------------------- | ----------------- |
| 99.7% | 32.7 GB |   1,579 | `forEach(BiConsumer)` | java.util.HashMap |
| <0.1% | 5.99 MB |       4 | `<init>(Map)`         | java.util.HashMap |

##### `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Callee            | Location                                  |
| -----: | ------: | ------: | ----------------- | ----------------------------------------- |
| 100.0% | 32.8 GB |   1,590 | `merge(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `combineResults(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Callee                     | Location                                                 |
| -----: | ------: | ------: | -------------------------- | -------------------------------------------------------- |
| 100.0% | 32.8 GB |   1,590 | `combineResults(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|     % |    Size | Samples | Callee               | Location            |
| ----: | ------: | ------: | -------------------- | ------------------- |
| 77.3% | 25.2 GB |   1,172 | `addAll(Collection)` | java.util.ArrayList |
| 22.5% | 7.37 GB |     400 | `<init>(Collection)` | java.util.ArrayList |

##### `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011df098)

|      % |    Size | Samples | Callee                       | Location                                  |
| -----: | ------: | ------: | ---------------------------- | ----------------------------------------- |
| 100.0% | 32.7 GB |   1,579 | `lambda$merge$6(List, List)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `merge(Object, Object, BiFunction)` (java.util.HashMap)

|      % |    Size | Samples | Callee                  | Location                                                             |
| -----: | ------: | ------: | ----------------------- | -------------------------------------------------------------------- |
| 100.0% | 32.7 GB |   1,579 | `apply(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011df098 |

##### `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Callee                              | Location          |
| -----: | ------: | ------: | ----------------------------------- | ----------------- |
| 100.0% | 32.7 GB |   1,579 | `merge(Object, Object, BiFunction)` | java.util.HashMap |

##### `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dee50)

|      % |    Size | Samples | Callee                              | Location                                  |
| -----: | ------: | ------: | ----------------------------------- | ----------------------------------------- |
| 100.0% | 32.7 GB |   1,579 | `lambda$merge$7(Map, Object, List)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `forEach(BiConsumer)` (java.util.HashMap)

|      % |    Size | Samples | Callee                   | Location                                                             |
| -----: | ------: | ------: | ------------------------ | -------------------------------------------------------------------- |
| 100.0% | 32.7 GB |   1,579 | `accept(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dee50 |

##### `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Callee     | Location                          |
| -----: | ------: | ------: | ---------- | --------------------------------- |
| 100.0% | 7.26 GB |     228 | `invoke()` | java.util.concurrent.ForkJoinTask |

##### `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011d79d8)

|      % |    Size | Samples | Callee                         | Location                                  |
| -----: | ------: | ------: | ------------------------------ | ----------------------------------------- |
| 100.0% | 7.26 GB |     228 | `lambda$run$0(int, List, int)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Callee                   | Location                                                 |
| -----: | ------: | ------: | ------------------------ | -------------------------------------------------------- |
| 100.0% | 7.06 GB |     307 | `computeDirectly()`      | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  87.4% | 6.17 GB |     237 | `collectClusters(int[])` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  12.6% |  889 MB |      70 | `findNearestCentroid()`  | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|     % |    Size | Samples | Callee                              | Location            |
| ----: | ------: | ------: | ----------------------------------- | ------------------- |
| 93.9% | 5.79 GB |     218 | `add(Object)`                       | java.util.ArrayList |
|  5.0% |  308 MB |      11 | `computeIfAbsent(Object, Function)` | java.util.HashMap   |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

|     % |    Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 19.3% | 7.78 GB |     389 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011df098) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dee50) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  8.7% |  3.5 GB |     192 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011df098) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dee50) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  5.8% | 2.33 GB |      76 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011df098) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dee50) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011d79d8)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  5.8% | 2.33 GB |      89 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011df098) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dee50) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  5.5% | 2.23 GB |     125 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011df098) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dee50) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  4.4% | 1.78 GB |     119 | `<init>(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011df098) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dee50) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  4.1% | 1.66 GB |      67 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011df098) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dee50) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                         |
|  4.0% |  1.6 GB |      53 | `add(Object)` (java.util.ArrayList) ← `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  3.0% |  1.2 GB |      48 | `add(Object)` (java.util.ArrayList) ← `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                               |
|  2.6% | 1.07 GB |      33 | `add(Object)` (java.util.ArrayList) ← `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  2.3% |  913 MB |      38 | `<init>(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011df098) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dee50) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  2.1% |  830 MB |      40 | `add(Object)` (java.util.ArrayList) ← `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  2.0% |  818 MB |      34 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011df098) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dee50) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011d79d8)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.7% |  705 MB |      35 | `<init>(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011df098) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dee50) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011d79d8)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.7% |  699 MB |      64 | `<init>(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011df098) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dee50) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.7% |  698 MB |      20 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011df098) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dee50) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011d79d8)                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.6% |  658 MB |      59 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011df098) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dee50) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                             |
|  1.5% |  612 MB |      30 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011df098) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dee50) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) |
|  1.5% |  605 MB |      13 | `add(Object)` (java.util.ArrayList) ← `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  1.5% |  603 MB |       7 | `addAll(Collection)` (java.util.ArrayList) ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011df098) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dee50) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011d79d8)                                                                                                                                                                                                                                                                 |


# Retained heap profile

Retained 2.16 MB over 10 samples (216 kB per sample).

| Category |      % |    Size | Samples |
| -------- | -----: | ------: | ------: |
| stdlib   | 100.0% | 2.16 MB |       8 |
| ours     |  <0.1% |    80 B |       2 |

## Hottest functions

### Self size

Functions ranked by bytes retained directly in the function body, excluding callees.

|     % | Size | Samples | Function                     | Location                                  |
| ----: | ---: | ------: | ---------------------------- | ----------------------------------------- |
| <0.1% | 80 B |       2 | `lambda$generateData$4(int)` | org.renaissance.jdk.concurrent.JavaKMeans |
| <0.1% | 72 B |       3 | `valueOf(double)`            | java.lang.Double                          |

#### Lines

Lines ranked by contribution to each function's self size.

##### `lambda$generateData$4(int)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % | Size | Samples | Location                                     |
| -----: | ---: | ------: | -------------------------------------------- |
| 100.0% | 80 B |       2 | org.renaissance.jdk.concurrent.JavaKMeans:87 |

##### `valueOf(double)` (java.lang.Double)

|      % | Size | Samples | Location             |
| -----: | ---: | ------: | -------------------- |
| 100.0% | 72 B |       3 | java.lang.Double:773 |

#### Callers

Callers ranked by contribution to each function's self size. Caller attribution may be imprecise due to inlining.

##### `lambda$generateData$4(int)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % | Size | Samples | Caller       | Location                                                             |
| -----: | ---: | ------: | ------------ | -------------------------------------------------------------------- |
| 100.0% | 80 B |       2 | `apply(int)` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001179d48 |

##### `valueOf(double)` (java.lang.Double)

|      % | Size | Samples | Caller                                           | Location                                  |
| -----: | ---: | ------: | ------------------------------------------------ | ----------------------------------------- |
| 100.0% | 72 B |       3 | `lambda$generateData$3(int, int, Random[], int)` | org.renaissance.jdk.concurrent.JavaKMeans |

### Total size

Functions ranked by total bytes retained in the function and all its callees.

|      % |    Size | Samples | Function                                                                                                               | Location                                                             |
| -----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 100.0% | 2.16 MB |      10 | `main(String[])`                                                                                                       | org.renaissance.harness.RenaissanceSuite                             |
| 100.0% | 2.16 MB |      10 | `invoke(Object, Object[])`                                                                                             | java.lang.reflect.Method                                             |
| 100.0% | 2.16 MB |      10 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | org.renaissance.core.Launcher                                        |
| 100.0% | 2.16 MB |      10 | `launchHarnessClass(String, String[])`                                                                                 | org.renaissance.core.Launcher                                        |
| 100.0% | 2.16 MB |      10 | `main(String[])`                                                                                                       | org.renaissance.core.Launcher                                        |
| 100.0% | 2.16 MB |       9 | `main(String[])`                                                                                                       | org.renaissance.harness.RenaissanceSuite$                            |
| 100.0% | 2.16 MB |       6 | `collect(Collector)`                                                                                                   | java.util.stream.ReferencePipeline                                   |
| 100.0% | 2.16 MB |       6 | `generateData(int, int, int)`                                                                                          | org.renaissance.jdk.concurrent.JavaKMeans                            |
| 100.0% | 2.16 MB |       6 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | org.renaissance.jdk.concurrent.FjKmeans                              |
| 100.0% | 2.16 MB |       6 | `executeBenchmark()`                                                                                                   | org.renaissance.harness.ExecutionDriver                              |
| 100.0% | 2.16 MB |       6 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | org.renaissance.harness.RenaissanceSuite$                            |
| 100.0% | 2.16 MB |       6 | `applyVoid(Object)`                                                                                                    | org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000070011715d8 |
| 100.0% | 2.16 MB |       6 | `foreach(Function1)`                                                                                                   | scala.collection.immutable.List                                      |
| 100.0% | 2.16 MB |       6 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | org.renaissance.harness.RenaissanceSuite$                            |
|  <0.1% |   168 B |       3 | `loadClass(String)`                                                                                                    | java.lang.ClassLoader                                                |
|  <0.1% |   152 B |       5 | `toArray(IntFunction)`                                                                                                 | java.util.stream.ReferencePipeline                                   |
|  <0.1% |   152 B |       5 | `lambda$generateData$5(int, int, Random[], int)`                                                                       | org.renaissance.jdk.concurrent.JavaKMeans                            |
|  <0.1% |   152 B |       5 | `apply(int)`                                                                                                           | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011798d8 |
|  <0.1% |   120 B |       1 | `apply(Seq)`                                                                                                           | scala.collection.immutable.Map$                                      |
|  <0.1% |    80 B |       2 | `lambda$generateData$4(int)`                                                                                           | org.renaissance.jdk.concurrent.JavaKMeans                            |

#### Callees

Callees ranked by contribution to each function's total size. Callee attribution may be imprecise due to inlining.

##### `main(String[])` (org.renaissance.harness.RenaissanceSuite)

|      % |    Size | Samples | Callee              | Location                                  |
| -----: | ------: | ------: | ------------------- | ----------------------------------------- |
| 100.0% | 2.16 MB |       9 | `main(String[])`    | org.renaissance.harness.RenaissanceSuite$ |
|  <0.1% |    32 B |       1 | `loadClass(String)` | java.lang.ClassLoader                     |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (org.renaissance.core.Launcher)

|      % |    Size | Samples | Callee                     | Location                 |
| -----: | ------: | ------: | -------------------------- | ------------------------ |
| 100.0% | 2.16 MB |      10 | `invoke(Object, Object[])` | java.lang.reflect.Method |

##### `launchHarnessClass(String, String[])` (org.renaissance.core.Launcher)

|      % |    Size | Samples | Callee                                                      | Location                      |
| -----: | ------: | ------: | ----------------------------------------------------------- | ----------------------------- |
| 100.0% | 2.16 MB |      10 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | org.renaissance.core.Launcher |

##### `main(String[])` (org.renaissance.core.Launcher)

|      % |    Size | Samples | Callee                                 | Location                      |
| -----: | ------: | ------: | -------------------------------------- | ----------------------------- |
| 100.0% | 2.16 MB |      10 | `launchHarnessClass(String, String[])` | org.renaissance.core.Launcher |

##### `main(String[])` (org.renaissance.harness.RenaissanceSuite$)

|      % |    Size | Samples | Callee                                                                        | Location                                  |
| -----: | ------: | ------: | ----------------------------------------------------------------------------- | ----------------------------------------- |
| 100.0% | 2.16 MB |       6 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | org.renaissance.harness.RenaissanceSuite$ |
|  <0.1% |   120 B |       1 | `apply(Seq)`                                                                  | scala.collection.immutable.Map$           |
|  <0.1% |    72 B |       1 | `apply(Function0)`                                                            | scala.util.Try$                           |
|  <0.1% |    16 B |       1 | `<clinit>()`                                                                  | scala.Predef$                             |

##### `generateData(int, int, int)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Callee               | Location                           |
| -----: | ------: | ------: | -------------------- | ---------------------------------- |
| 100.0% | 2.16 MB |       6 | `collect(Collector)` | java.util.stream.ReferencePipeline |

##### `setUpBeforeAll(BenchmarkContext)` (org.renaissance.jdk.concurrent.FjKmeans)

|      % |    Size | Samples | Callee                        | Location                                  |
| -----: | ------: | ------: | ----------------------------- | ----------------------------------------- |
| 100.0% | 2.16 MB |       6 | `generateData(int, int, int)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `executeBenchmark()` (org.renaissance.harness.ExecutionDriver)

|      % |    Size | Samples | Callee                             | Location                                |
| -----: | ------: | ------: | ---------------------------------- | --------------------------------------- |
| 100.0% | 2.16 MB |       6 | `setUpBeforeAll(BenchmarkContext)` | org.renaissance.jdk.concurrent.FjKmeans |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (org.renaissance.harness.RenaissanceSuite$)

|      % |    Size | Samples | Callee               | Location                                |
| -----: | ------: | ------: | -------------------- | --------------------------------------- |
| 100.0% | 2.16 MB |       6 | `executeBenchmark()` | org.renaissance.harness.ExecutionDriver |

##### `applyVoid(Object)` (org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000070011715d8)

|      % |    Size | Samples | Callee                                                                                                                 | Location                                  |
| -----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| 100.0% | 2.16 MB |       6 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | org.renaissance.harness.RenaissanceSuite$ |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (org.renaissance.harness.RenaissanceSuite$)

|      % |    Size | Samples | Callee               | Location                        |
| -----: | ------: | ------: | -------------------- | ------------------------------- |
| 100.0% | 2.16 MB |       6 | `foreach(Function1)` | scala.collection.immutable.List |

##### `lambda$generateData$5(int, int, Random[], int)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |  Size | Samples | Callee                 | Location                           |
| -----: | ----: | ------: | ---------------------- | ---------------------------------- |
| 100.0% | 152 B |       5 | `toArray(IntFunction)` | java.util.stream.ReferencePipeline |

##### `apply(int)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011798d8)

|      % |  Size | Samples | Callee                                           | Location                                  |
| -----: | ----: | ------: | ------------------------------------------------ | ----------------------------------------- |
| 100.0% | 152 B |       5 | `lambda$generateData$5(int, int, Random[], int)` | org.renaissance.jdk.concurrent.JavaKMeans |

## Hottest call stacks

Call stacks ranked by bytes retained in their leaf frame.

Common call stack: `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (org.renaissance.core.Launcher) ← `launchHarnessClass(String, String[])` ← `main(String[])`

|      % |    Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 2.16 MB |       1 | `collect(Collector)` (java.util.stream.ReferencePipeline) ← `generateData(int, int, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `setUpBeforeAll(BenchmarkContext)` (org.renaissance.jdk.concurrent.FjKmeans) ← `executeBenchmark()` (org.renaissance.harness.ExecutionDriver) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (org.renaissance.harness.RenaissanceSuite$) ← `applyVoid(Object)` (org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000070011715d8) ← `foreach(Function1)` (scala.collection.immutable.List) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (org.renaissance.harness.RenaissanceSuite$) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  <0.1% |   120 B |       1 | `loadClass(String)` (java.lang.ClassLoader) ← `apply(Seq)` (scala.collection.immutable.Map$) ← `main(String[])` (org.renaissance.harness.RenaissanceSuite$)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  <0.1% |    80 B |       2 | `lambda$generateData$4(int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(int)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001179d48) ← `toArray(IntFunction)` (java.util.stream.ReferencePipeline) ← `lambda$generateData$5(int, int, Random[], int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(int)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011798d8) ← `collect(Collector)` (java.util.stream.ReferencePipeline) ← `generateData(int, int, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `setUpBeforeAll(BenchmarkContext)` (org.renaissance.jdk.concurrent.FjKmeans) ← `executeBenchmark()` (org.renaissance.harness.ExecutionDriver) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (org.renaissance.harness.RenaissanceSuite$) ← `applyVoid(Object)` (org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000070011715d8) ← `foreach(Function1)` (scala.collection.immutable.List) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (org.renaissance.harness.RenaissanceSuite$) ← `main(String[])`                                                            |
|  <0.1% |    72 B |       1 | `load(InputStream)` (java.util.Properties) ← `loadProperties(URL)` (org.renaissance.core.ResourceUtils) ← `loadPropertiesAsMap(URL)` ← `create(Path, String, Optional, Map, boolean)` (org.renaissance.core.BenchmarkSuite) ← `$anonfun$1(Config, Path)` (org.renaissance.harness.RenaissanceSuite$) ← `apply()` (org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001156890) ← `apply(Function0)` (scala.util.Try$) ← `main(String[])` (org.renaissance.harness.RenaissanceSuite$)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  <0.1% |    72 B |       3 | `valueOf(double)` (java.lang.Double) ← `lambda$generateData$3(int, int, Random[], int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(int)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001179b10) ← `toArray(IntFunction)` (java.util.stream.ReferencePipeline) ← `lambda$generateData$5(int, int, Random[], int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(int)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011798d8) ← `collect(Collector)` (java.util.stream.ReferencePipeline) ← `generateData(int, int, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `setUpBeforeAll(BenchmarkContext)` (org.renaissance.jdk.concurrent.FjKmeans) ← `executeBenchmark()` (org.renaissance.harness.ExecutionDriver) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (org.renaissance.harness.RenaissanceSuite$) ← `applyVoid(Object)` (org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000070011715d8) ← `foreach(Function1)` (scala.collection.immutable.List) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (org.renaissance.harness.RenaissanceSuite$) ← `main(String[])` |
|  <0.1% |    32 B |       1 | `loadClass(String)` (java.lang.ClassLoader)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  <0.1% |    16 B |       1 | `loadClass(String)` (java.lang.ClassLoader) ← `loadClass(String)` ← `<clinit>()` (scala.Predef$) ← `main(String[])` (org.renaissance.harness.RenaissanceSuite$)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |


# Lock contention profile

Blocked 7.95s over 88 samples (90.4ms per sample).

| Category |      % |  Time | Samples |
| -------- | -----: | ----: | ------: |
| stdlib   | 100.0% | 7.95s |      88 |

## Hottest functions

### Total time

Functions ranked by total time blocked in the function and all its callees.

|     % |    Time | Samples | Function                                                                                                               | Location                                                             |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 78.7% |   6.25s |      16 | `get()`                                                                                                                | java.util.concurrent.ForkJoinTask                                    |
| 78.7% |   6.25s |      16 | `run(int, List, int)`                                                                                                  | org.renaissance.jdk.concurrent.JavaKMeans                            |
| 78.7% |   6.25s |      16 | `$anonfun$1(int)`                                                                                                      | org.renaissance.jdk.concurrent.FjKmeans                              |
| 78.7% |   6.25s |      16 | `$anonfun$adapted$1(Object)`                                                                                           | org.renaissance.jdk.concurrent.FjKmeans                              |
| 78.7% |   6.25s |      16 | `apply(Object)`                                                                                                        | org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011d4e58   |
| 78.7% |   6.25s |      16 | `map(Function1)`                                                                                                       | scala.collection.immutable.Range                                     |
| 78.7% |   6.25s |      16 | `run(BenchmarkContext)`                                                                                                | org.renaissance.jdk.concurrent.FjKmeans                              |
| 78.7% |   6.25s |      16 | `executeOperation(int)`                                                                                                | org.renaissance.harness.ExecutionDriver                              |
| 78.7% |   6.25s |      16 | `executeBenchmark()`                                                                                                   | org.renaissance.harness.ExecutionDriver                              |
| 78.7% |   6.25s |      16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | org.renaissance.harness.RenaissanceSuite$                            |
| 78.7% |   6.25s |      16 | `applyVoid(Object)`                                                                                                    | org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000070011715d8 |
| 78.7% |   6.25s |      16 | `foreach(Function1)`                                                                                                   | scala.collection.immutable.List                                      |
| 78.7% |   6.25s |      16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | org.renaissance.harness.RenaissanceSuite$                            |
| 78.7% |   6.25s |      16 | `main(String[])`                                                                                                       | org.renaissance.harness.RenaissanceSuite$                            |
| 78.7% |   6.25s |      16 | `main(String[])`                                                                                                       | org.renaissance.harness.RenaissanceSuite                             |
| 78.7% |   6.25s |      16 | `invoke(Object, Object[])`                                                                                             | java.lang.reflect.Method                                             |
| 78.7% |   6.25s |      16 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | org.renaissance.core.Launcher                                        |
| 78.7% |   6.25s |      16 | `launchHarnessClass(String, String[])`                                                                                 | org.renaissance.core.Launcher                                        |
| 78.7% |   6.25s |      16 | `main(String[])`                                                                                                       | org.renaissance.core.Launcher                                        |
|  1.9% | 151.2ms |      10 | `join()`                                                                                                               | java.util.concurrent.ForkJoinTask                                    |

#### Callees

Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

##### `run(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |  Time | Samples | Callee  | Location                          |
| -----: | ----: | ------: | ------- | --------------------------------- |
| 100.0% | 6.25s |      16 | `get()` | java.util.concurrent.ForkJoinTask |

##### `$anonfun$1(int)` (org.renaissance.jdk.concurrent.FjKmeans)

|      % |  Time | Samples | Callee                | Location                                  |
| -----: | ----: | ------: | --------------------- | ----------------------------------------- |
| 100.0% | 6.25s |      16 | `run(int, List, int)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `$anonfun$adapted$1(Object)` (org.renaissance.jdk.concurrent.FjKmeans)

|      % |  Time | Samples | Callee            | Location                                |
| -----: | ----: | ------: | ----------------- | --------------------------------------- |
| 100.0% | 6.25s |      16 | `$anonfun$1(int)` | org.renaissance.jdk.concurrent.FjKmeans |

##### `apply(Object)` (org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011d4e58)

|      % |  Time | Samples | Callee                       | Location                                |
| -----: | ----: | ------: | ---------------------------- | --------------------------------------- |
| 100.0% | 6.25s |      16 | `$anonfun$adapted$1(Object)` | org.renaissance.jdk.concurrent.FjKmeans |

##### `map(Function1)` (scala.collection.immutable.Range)

|      % |  Time | Samples | Callee          | Location                                                           |
| -----: | ----: | ------: | --------------- | ------------------------------------------------------------------ |
| 100.0% | 6.25s |      16 | `apply(Object)` | org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011d4e58 |

##### `run(BenchmarkContext)` (org.renaissance.jdk.concurrent.FjKmeans)

|      % |  Time | Samples | Callee           | Location                         |
| -----: | ----: | ------: | ---------------- | -------------------------------- |
| 100.0% | 6.25s |      16 | `map(Function1)` | scala.collection.immutable.Range |

##### `executeOperation(int)` (org.renaissance.harness.ExecutionDriver)

|      % |  Time | Samples | Callee                  | Location                                |
| -----: | ----: | ------: | ----------------------- | --------------------------------------- |
| 100.0% | 6.25s |      16 | `run(BenchmarkContext)` | org.renaissance.jdk.concurrent.FjKmeans |

##### `executeBenchmark()` (org.renaissance.harness.ExecutionDriver)

|      % |  Time | Samples | Callee                  | Location                                |
| -----: | ----: | ------: | ----------------------- | --------------------------------------- |
| 100.0% | 6.25s |      16 | `executeOperation(int)` | org.renaissance.harness.ExecutionDriver |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (org.renaissance.harness.RenaissanceSuite$)

|      % |  Time | Samples | Callee               | Location                                |
| -----: | ----: | ------: | -------------------- | --------------------------------------- |
| 100.0% | 6.25s |      16 | `executeBenchmark()` | org.renaissance.harness.ExecutionDriver |

##### `applyVoid(Object)` (org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000070011715d8)

|      % |  Time | Samples | Callee                                                                                                                 | Location                                  |
| -----: | ----: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| 100.0% | 6.25s |      16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | org.renaissance.harness.RenaissanceSuite$ |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (org.renaissance.harness.RenaissanceSuite$)

|      % |  Time | Samples | Callee               | Location                        |
| -----: | ----: | ------: | -------------------- | ------------------------------- |
| 100.0% | 6.25s |      16 | `foreach(Function1)` | scala.collection.immutable.List |

##### `main(String[])` (org.renaissance.harness.RenaissanceSuite$)

|      % |  Time | Samples | Callee                                                                        | Location                                  |
| -----: | ----: | ------: | ----------------------------------------------------------------------------- | ----------------------------------------- |
| 100.0% | 6.25s |      16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | org.renaissance.harness.RenaissanceSuite$ |

##### `main(String[])` (org.renaissance.harness.RenaissanceSuite)

|      % |  Time | Samples | Callee           | Location                                  |
| -----: | ----: | ------: | ---------------- | ----------------------------------------- |
| 100.0% | 6.25s |      16 | `main(String[])` | org.renaissance.harness.RenaissanceSuite$ |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (org.renaissance.core.Launcher)

|      % |  Time | Samples | Callee                     | Location                 |
| -----: | ----: | ------: | -------------------------- | ------------------------ |
| 100.0% | 6.25s |      16 | `invoke(Object, Object[])` | java.lang.reflect.Method |

##### `launchHarnessClass(String, String[])` (org.renaissance.core.Launcher)

|      % |  Time | Samples | Callee                                                      | Location                      |
| -----: | ----: | ------: | ----------------------------------------------------------- | ----------------------------- |
| 100.0% | 6.25s |      16 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | org.renaissance.core.Launcher |

##### `main(String[])` (org.renaissance.core.Launcher)

|      % |  Time | Samples | Callee                                 | Location                      |
| -----: | ----: | ------: | -------------------------------------- | ----------------------------- |
| 100.0% | 6.25s |      16 | `launchHarnessClass(String, String[])` | org.renaissance.core.Launcher |

## Hottest call stacks

Call stacks ranked by time blocked in their leaf frame.

|     % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----: | -----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 78.7% |  6.25s |      16 | `get()` (java.util.concurrent.ForkJoinTask) ← `run(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `$anonfun$1(int)` (org.renaissance.jdk.concurrent.FjKmeans) ← `$anonfun$adapted$1(Object)` ← `apply(Object)` (org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011d4e58) ← `map(Function1)` (scala.collection.immutable.Range) ← `run(BenchmarkContext)` (org.renaissance.jdk.concurrent.FjKmeans) ← `executeOperation(int)` (org.renaissance.harness.ExecutionDriver) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (org.renaissance.harness.RenaissanceSuite$) ← `applyVoid(Object)` (org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000070011715d8) ← `foreach(Function1)` (scala.collection.immutable.List) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (org.renaissance.harness.RenaissanceSuite$) ← `main(String[])` ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invoke(Object, Object[])` (java.lang.reflect.Method) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (org.renaissance.core.Launcher) ← `launchHarnessClass(String, String[])` ← `main(String[])` |
|  0.9% | 71.9ms |       5 | `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.2% | 17.9ms |       1 | `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011d79d8)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.2% | 16.8ms |       1 | `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.2% | 15.3ms |       1 | `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.2% | 15.1ms |       1 | `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011d79d8)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.2% | 14.2ms |       1 | `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke()` (java.util.concurrent.ForkJoinTask) ← `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

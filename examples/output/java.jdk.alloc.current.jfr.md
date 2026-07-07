# Sampling profile

Collected 1,629 samples.

| Category |     % | Samples |
| -------- | ----: | ------: |
| ours     | 91.5% |   1,491 |
| stdlib   |  8.5% |     138 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                            | Location                                                   |
| ----: | ------: | ----------------------------------- | ---------------------------------------------------------- |
| 45.3% |     738 | `accumulate(Double[], double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 23.0% |     375 | `distance(Double[], Double[])`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 13.0% |     211 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  6.1% |     100 | `collectClusters(int[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  3.5% |      57 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`                                        |
|  2.8% |      45 | `vectorSum()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  1.0% |      17 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.4% |       7 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`                                        |
|  0.1% |       2 | `compute()`                         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|  0.1% |       2 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  0.1% |       1 | `join()`                            | `java.util.concurrent.ForkJoinTask`                        |
|  0.1% |       1 | `add(double[], double[])`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Location                                                      |
| ----: | ------: | ------------------------------------------------------------- |
| 99.9% |     737 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:411` |
|  0.1% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:412` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |     375 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:248` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Location                                                       |
| ----: | ------: | -------------------------------------------------------------- |
| 93.8% |     198 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:229` |
|  5.7% |      12 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:225` |
|  0.5% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:230` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Location                                                       |
| ----: | ------: | -------------------------------------------------------------- |
| 72.0% |      72 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |
| 27.0% |      27 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:211` |
|  1.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:209` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 98.2% |      56 | `java.util.HashMap:1219` |
|  1.8% |       1 | `java.util.HashMap:1206` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Location                                                      |
| ----: | ------: | ------------------------------------------------------------- |
| 77.8% |      35 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400` |
| 13.3% |       6 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:403` |
|  8.9% |       4 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:402` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |      17 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:204` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 57.1% |       4 | `java.util.HashMap:1384` |
| 42.9% |       3 | `java.util.HashMap:1371` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % | Samples | Location                                                   |
| -----: | ------: | ---------------------------------------------------------- |
| 100.0% |       2 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask:145` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Location                                        |
| -----: | ------: | ----------------------------------------------- |
| 100.0% |       2 | `org.renaissance.jdk.concurrent.JavaKMeans:112` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Location                                |
| -----: | ------: | --------------------------------------- |
| 100.0% |       1 | `java.util.concurrent.ForkJoinTask:651` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Location                                                      |
| -----: | ------: | ------------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:430` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller        | Location                                                  |
| -----: | ------: | ------------- | --------------------------------------------------------- |
| 100.0% |     738 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                  | Location                                                   |
| -----: | ------: | ----------------------- | ---------------------------------------------------------- |
| 100.0% |     375 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |     211 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |     100 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|      % | Samples | Caller                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |      57 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |      45 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |      17 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|      % | Samples | Caller                              | Location                                    |
| -----: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% |       7 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller                   | Location                                                               |
| -----: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| 100.0% |       2 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801204d88` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller                               | Location                                                  |
| -----: | ------: | ------------------------------------ | --------------------------------------------------------- |
| 100.0% |       1 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                            | Location                                                               |
| ----: | ------: | ----------------------------------- | ---------------------------------------------------------------------- |
| 99.3% |   1,617 | `compute()`                         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 97.2% |   1,584 | `join()`                            | `java.util.concurrent.ForkJoinTask`                                    |
| 48.9% |     797 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 48.1% |     783 | `vectorSum()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 48.1% |     783 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 45.3% |     738 | `accumulate(Double[], double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 36.0% |     586 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 23.0% |     375 | `distance(Double[], Double[])`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 20.3% |     330 | `invoke()`                          | `java.util.concurrent.ForkJoinTask`                                    |
| 18.9% |     308 | `average(List)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 18.9% |     308 | `computeClusterAverages()`          | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 18.0% |     293 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 11.9% |     194 | `collectClusters(int[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  3.5% |      57 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`                                                    |
|  2.3% |      37 | `add(Object)`                       | `java.util.ArrayList`                                                  |
|  1.8% |      29 | `lambda$run$0(int, List, int)`      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  1.7% |      27 | `call()`                            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b8011ffbc0` |
|  0.9% |      14 | `merge(Map, Map)`                   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  0.9% |      14 | `combineResults(Map, Map)`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  0.9% |      14 | `combineResults(Object, Object)`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % | Samples | Callee                           | Location                                                   |
| ----: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 98.0% |   1,584 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
| 49.3% |     797 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 48.4% |     783 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 18.0% |     291 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  0.9% |      14 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |     797 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  73.5% |     586 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  24.3% |     194 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Callee                           | Location                                                  |
| ----: | ------: | -------------------------------- | --------------------------------------------------------- |
| 94.3% |     738 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Callee              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |     783 | `vectorSum()`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| 100.0% |     783 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                         | Location                                                   |
| ----: | ------: | ------------------------------ | ---------------------------------------------------------- |
| 64.0% |     375 | `distance(Double[], Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |     308 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee          | Location                                               |
| -----: | ------: | --------------- | ------------------------------------------------------ |
| 100.0% |     308 | `average(List)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee                     | Location                                               |
| -----: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% |     293 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  99.3% |     291 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                              | Location              |
| ----: | ------: | ----------------------------------- | --------------------- |
| 29.4% |      57 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`   |
| 19.1% |      37 | `add(Object)`                       | `java.util.ArrayList` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |      29 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b8011ffbc0`)

|      % | Samples | Callee                         | Location                                    |
| -----: | ------: | ------------------------------ | ------------------------------------------- |
| 100.0% |      27 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee                | Location            |
| ----: | ------: | --------------------- | ------------------- |
| 71.4% |      10 | `forEach(BiConsumer)` | `java.util.HashMap` |
| 28.6% |       4 | `<init>(Map)`         | `java.util.HashMap` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee            | Location                                    |
| -----: | ------: | ----------------- | ------------------------------------------- |
| 100.0% |      14 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee                     | Location                                                   |
| -----: | ------: | -------------------------- | ---------------------------------------------------------- |
| 100.0% |      14 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5.8% |      94 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 5.5% |      89 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 5.3% |      87 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `invoke()` (`java.util.concurrent.ForkJoinTask`) ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                    |
| 5.1% |      83 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 4.9% |      80 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 3.6% |      58 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`)                                                                                                                                                |
| 3.3% |      54 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `invoke()` (`java.util.concurrent.ForkJoinTask`) ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                    |
| 3.3% |      53 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                         |
| 3.2% |      52 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 2.8% |      46 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 2.4% |      39 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                 |
| 2.1% |      35 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 2.1% |      34 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 2.1% |      34 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 2.0% |      33 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.9% |      31 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                          |
| 1.9% |      31 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `invoke()` (`java.util.concurrent.ForkJoinTask`) ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `invoke()` (`java.util.concurrent.ForkJoinTask`) |
| 1.8% |      30 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.8% |      29 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `invoke()` (`java.util.concurrent.ForkJoinTask`) ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                            |
| 1.7% |      27 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                          |

# Allocated heap profile

Allocated 40 GB over 1,998 samples (20 MB per sample).

| Category |     % |    Size | Samples |
| -------- | ----: | ------: | ------: |
| stdlib   | 95.8% | 38.3 GB |   1,887 |
| ours     |  4.2% |  1.7 GB |     109 |
| native   | <0.1% |  2.5 kB |       2 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |    Size | Samples | Function                             | Location                                                   |
| ----: | ------: | ------: | ------------------------------------ | ---------------------------------------------------------- |
|  2.7% | 1.07 GB |      58 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.6% |  233 MB |       8 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.3% |  118 MB |       9 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.2% | 96.5 MB |       6 | `merge(Map, Map)`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  0.2% | 72.1 MB |       2 | `computeClusterAverages()`           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  0.1% | 46.6 MB |       2 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.1% | 32.7 MB |       5 | `vectorSum()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| <0.1% | 11.5 MB |       3 | `collectClusters(int[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| <0.1% | 10.9 MB |      29 | `valueOf(double)`                    | `java.lang.Double`                                         |
| <0.1% | 8.75 MB |       4 | `lambda$merge$6(List, List)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| <0.1% | 6.89 MB |       1 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| <0.1% | 3.98 MB |      10 | `lambda$generateData$4(int)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| <0.1% |  802 kB |       1 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| <0.1% |  397 kB |       1 | `range(int, int)`                    | `java.util.stream.IntStream`                               |

#### Lines

Lines ranked by contribution to each function's self size.

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Location                                                       |
| -----: | ------: | ------: | -------------------------------------------------------------- |
| 100.0% | 1.07 GB |      58 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:223` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |   Size | Samples | Location                                                       |
| -----: | -----: | ------: | -------------------------------------------------------------- |
| 100.0% | 233 MB |       8 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |   Size | Samples | Location                                                      |
| -----: | -----: | ------: | ------------------------------------------------------------- |
| 100.0% | 118 MB |       9 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |    Size | Samples | Location                                        |
| -----: | ------: | ------: | ----------------------------------------------- |
| 100.0% | 96.5 MB |       6 | `org.renaissance.jdk.concurrent.JavaKMeans:110` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |    Size | Samples | Location                                                   |
| -----: | ------: | ------: | ---------------------------------------------------------- |
| 100.0% | 72.1 MB |       2 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:314` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Location                                                       |
| -----: | ------: | ------: | -------------------------------------------------------------- |
| 100.0% | 46.6 MB |       2 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |    Size | Samples | Location                                                      |
| -----: | ------: | ------: | ------------------------------------------------------------- |
| 100.0% | 32.7 MB |       5 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Location                                                       |
| -----: | ------: | ------: | -------------------------------------------------------------- |
| 100.0% | 11.5 MB |       3 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:209` |

##### `valueOf(double)` (`java.lang.Double`)

|      % |    Size | Samples | Location               |
| -----: | ------: | ------: | ---------------------- |
| 100.0% | 10.9 MB |      29 | `java.lang.Double:773` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |    Size | Samples | Location                                        |
| -----: | ------: | ------: | ----------------------------------------------- |
| 100.0% | 8.75 MB |       4 | `org.renaissance.jdk.concurrent.JavaKMeans:114` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |    Size | Samples | Location                                                      |
| -----: | ------: | ------: | ------------------------------------------------------------- |
| 100.0% | 6.89 MB |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:430` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |    Size | Samples | Location                                       |
| -----: | ------: | ------: | ---------------------------------------------- |
| 100.0% | 3.98 MB |      10 | `org.renaissance.jdk.concurrent.JavaKMeans:87` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |   Size | Samples | Location                                                   |
| -----: | -----: | ------: | ---------------------------------------------------------- |
| 100.0% | 802 kB |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:352` |

##### `range(int, int)` (`java.util.stream.IntStream`)

|      % |   Size | Samples | Location                          |
| -----: | -----: | ------: | --------------------------------- |
| 100.0% | 397 kB |       1 | `java.util.stream.IntStream:1083` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Caller              | Location                                                   |
| -----: | ------: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% | 1.07 GB |      58 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |   Size | Samples | Caller      | Location                                               |
| -----: | -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% | 233 MB |       8 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |   Size | Samples | Caller      | Location                                               |
| -----: | -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% | 118 MB |       9 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |    Size | Samples | Caller                     | Location                                                   |
| -----: | ------: | ------: | -------------------------- | ---------------------------------------------------------- |
| 100.0% | 96.5 MB |       6 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |    Size | Samples | Caller              | Location                                               |
| -----: | ------: | ------: | ------------------- | ------------------------------------------------------ |
| 100.0% | 72.1 MB |       2 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Caller          | Location                                                                              |
| -----: | ------: | ------: | --------------- | ------------------------------------------------------------------------------------- |
| 100.0% | 46.6 MB |       2 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000b801204b38` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |    Size | Samples | Caller              | Location                                                  |
| -----: | ------: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% | 32.7 MB |       5 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Caller              | Location                                                   |
| -----: | ------: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% | 11.5 MB |       3 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `valueOf(double)` (`java.lang.Double`)

|      % |    Size | Samples | Caller                                           | Location                                    |
| -----: | ------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| 100.0% | 10.9 MB |      29 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |    Size | Samples | Caller                  | Location                                                               |
| -----: | ------: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| 100.0% | 8.75 MB |       4 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801205218` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |    Size | Samples | Caller                               | Location                                                  |
| -----: | ------: | ------: | ------------------------------------ | --------------------------------------------------------- |
| 100.0% | 6.89 MB |       1 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |    Size | Samples | Caller       | Location                                                               |
| -----: | ------: | ------: | ------------ | ---------------------------------------------------------------------- |
| 100.0% | 3.98 MB |      10 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b8011a1d48` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |   Size | Samples | Caller      | Location                                               |
| -----: | -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% | 802 kB |       1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `range(int, int)` (`java.util.stream.IntStream`)

|      % |   Size | Samples | Caller                                           | Location                                    |
| -----: | -----: | ------: | ------------------------------------------------ | ------------------------------------------- |
| 100.0% | 397 kB |       1 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |    Size | Samples | Function                            | Location                                                               |
| ----: | ------: | ------: | ----------------------------------- | ---------------------------------------------------------------------- |
| 99.4% | 39.8 GB |   1,872 | `compute()`                         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 84.9% |   34 GB |   1,570 | `merge(Map, Map)`                   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 84.9% |   34 GB |   1,570 | `combineResults(Map, Map)`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 84.9% |   34 GB |   1,570 | `combineResults(Object, Object)`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 84.4% | 33.8 GB |   1,557 | `lambda$merge$6(List, List)`        | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 84.4% | 33.8 GB |   1,557 | `apply(Object, Object)`             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801205218` |
| 84.4% | 33.8 GB |   1,557 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`                                                    |
| 84.4% | 33.8 GB |   1,557 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 84.4% | 33.8 GB |   1,557 | `accept(Object, Object)`            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801204d88` |
| 84.4% | 33.8 GB |   1,557 | `forEach(BiConsumer)`               | `java.util.HashMap`                                                    |
| 64.7% | 25.9 GB |   1,137 | `addAll(Collection)`                | `java.util.ArrayList`                                                  |
| 62.3% |   25 GB |   1,239 | `join()`                            | `java.util.concurrent.ForkJoinTask`                                    |
| 20.3% | 8.12 GB |     231 | `invoke()`                          | `java.util.concurrent.ForkJoinTask`                                    |
| 20.2% | 8.08 GB |     222 | `lambda$run$0(int, List, int)`      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 20.2% | 8.08 GB |     222 | `call()`                            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b8011ffbc0` |
| 19.7% |  7.9 GB |     416 | `<init>(Collection)`                | `java.util.ArrayList`                                                  |
| 13.3% | 5.34 GB |     276 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 10.7% | 4.27 GB |     218 | `collectClusters(int[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 10.2% | 4.08 GB |     208 | `add(Object)`                       | `java.util.ArrayList`                                                  |
|  2.7% | 1.07 GB |      58 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % |    Size | Samples | Callee                           | Location                                                   |
| ----: | ------: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 85.4% |   34 GB |   1,570 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 62.7% |   25 GB |   1,239 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
| 13.4% | 5.34 GB |     276 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.6% |  233 MB |       8 | `createSubtask(int, int)`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.3% |  118 MB |       9 | `createSubtask(int, int)`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % |    Size | Samples | Callee                               | Location                           |
| ----: | ------: | ------: | ------------------------------------ | ---------------------------------- |
| 99.4% | 33.8 GB |   1,557 | `forEach(BiConsumer)`                | `java.util.HashMap`                |
|  0.3% |   93 MB |       6 | `<init>(Map)`                        | `java.util.HashMap`                |
| <0.1% |  559 kB |       1 | `linkToTargetMethod(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |  Size | Samples | Callee            | Location                                    |
| -----: | ----: | ------: | ----------------- | ------------------------------------------- |
| 100.0% | 34 GB |   1,570 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |  Size | Samples | Callee                     | Location                                                   |
| -----: | ----: | ------: | -------------------------- | ---------------------------------------------------------- |
| 100.0% | 34 GB |   1,570 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % |    Size | Samples | Callee               | Location              |
| ----: | ------: | ------: | -------------------- | --------------------- |
| 76.6% | 25.9 GB |   1,137 | `addAll(Collection)` | `java.util.ArrayList` |
| 23.4% |  7.9 GB |     416 | `<init>(Collection)` | `java.util.ArrayList` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801205218`)

|      % |    Size | Samples | Callee                       | Location                                    |
| -----: | ------: | ------: | ---------------------------- | ------------------------------------------- |
| 100.0% | 33.8 GB |   1,557 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|      % |    Size | Samples | Callee                  | Location                                                               |
| -----: | ------: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| 100.0% | 33.8 GB |   1,557 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801205218` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |    Size | Samples | Callee                              | Location            |
| -----: | ------: | ------: | ----------------------------------- | ------------------- |
| 100.0% | 33.8 GB |   1,557 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801204d88`)

|      % |    Size | Samples | Callee                              | Location                                    |
| -----: | ------: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% | 33.8 GB |   1,557 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|      % |    Size | Samples | Callee                   | Location                                                               |
| -----: | ------: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| 100.0% | 33.8 GB |   1,557 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801204d88` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |    Size | Samples | Callee     | Location                            |
| -----: | ------: | ------: | ---------- | ----------------------------------- |
| 100.0% | 8.08 GB |     222 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b8011ffbc0`)

|      % |    Size | Samples | Callee                         | Location                                    |
| -----: | ------: | ------: | ------------------------------ | ------------------------------------------- |
| 100.0% | 8.08 GB |     222 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Callee                   | Location                                                   |
| -----: | ------: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% | 5.34 GB |     276 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  80.0% | 4.27 GB |     218 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  20.0% | 1.07 GB |      58 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % |    Size | Samples | Callee                              | Location              |
| ----: | ------: | ------: | ----------------------------------- | --------------------- |
| 95.5% | 4.08 GB |     208 | `add(Object)`                       | `java.util.ArrayList` |
|  4.2% |  180 MB |       7 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`   |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

|     % |    Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 18.4% | 7.37 GB |     356 | `addAll(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801205218`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 11.5% |  4.6 GB |     212 | `addAll(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801205218`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  8.6% | 3.43 GB |      86 | `addAll(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801205218`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `invoke()` (`java.util.concurrent.ForkJoinTask`) ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b8011ffbc0`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  7.0% |  2.8 GB |     143 | `<init>(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801205218`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  5.9% | 2.36 GB |      50 | `addAll(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801205218`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `invoke()` (`java.util.concurrent.ForkJoinTask`) ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b8011ffbc0`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  4.9% | 1.95 GB |     120 | `addAll(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801205218`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  4.1% | 1.63 GB |      72 | `addAll(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801205218`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  3.1% | 1.26 GB |      72 | `addAll(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801205218`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  2.9% | 1.16 GB |      74 | `<init>(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801205218`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  2.7% | 1.07 GB |      52 | `addAll(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801205218`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                         |
|  2.5% |  989 MB |      45 | `add(Object)` (`java.util.ArrayList`) ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  2.4% |  975 MB |      49 | `add(Object)` (`java.util.ArrayList`) ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  2.3% |  922 MB |      44 | `add(Object)` (`java.util.ArrayList`) ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  2.3% |  903 MB |      34 | `<init>(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801205218`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `invoke()` (`java.util.concurrent.ForkJoinTask`) ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b8011ffbc0`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  1.9% |  749 MB |      30 | `addAll(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801205218`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) |
|  1.7% |  696 MB |      35 | `add(Object)` (`java.util.ArrayList`) ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.7% |  680 MB |      36 | `addAll(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801205218`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                 |
|  1.7% |  667 MB |      49 | `<init>(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801205218`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.3% |  508 MB |      28 | `<init>(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801205218`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.0% |  407 MB |       9 | `<init>(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801205218`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `invoke()` (`java.util.concurrent.ForkJoinTask`) ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b8011ffbc0`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

# Retained heap profile

Retained 4.19 MB over 17 samples (246 kB per sample).

| Category |      % |    Size | Samples |
| -------- | -----: | ------: | ------: |
| stdlib   | 100.0% | 4.19 MB |      14 |
| ours     |  <0.1% |   120 B |       3 |

## Hottest functions

### Self size

Functions ranked by bytes retained directly in the function body, excluding callees.

|     % |  Size | Samples | Function                     | Location                                    |
| ----: | ----: | ------: | ---------------------------- | ------------------------------------------- |
| <0.1% | 120 B |       3 | `lambda$generateData$4(int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |
| <0.1% |  24 B |       1 | `valueOf(double)`            | `java.lang.Double`                          |

#### Lines

Lines ranked by contribution to each function's self size.

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |  Size | Samples | Location                                       |
| -----: | ----: | ------: | ---------------------------------------------- |
| 100.0% | 120 B |       3 | `org.renaissance.jdk.concurrent.JavaKMeans:87` |

##### `valueOf(double)` (`java.lang.Double`)

|      % | Size | Samples | Location               |
| -----: | ---: | ------: | ---------------------- |
| 100.0% | 24 B |       1 | `java.lang.Double:773` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |  Size | Samples | Caller       | Location                                                               |
| -----: | ----: | ------: | ------------ | ---------------------------------------------------------------------- |
| 100.0% | 120 B |       3 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b8011a1d48` |

##### `valueOf(double)` (`java.lang.Double`)

|      % | Size | Samples | Caller                                           | Location                                    |
| -----: | ---: | ------: | ------------------------------------------------ | ------------------------------------------- |
| 100.0% | 24 B |       1 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

### Total size

Functions ranked by total bytes retained in the function and all its callees.

|     % |    Size | Samples | Function                                                                                                               | Location                                                               |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 57.9% | 2.42 MB |       8 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
| 57.9% | 2.42 MB |       8 | `invoke(Object, Object[])`                                                                                             | `java.lang.reflect.Method`                                             |
| 57.9% | 2.42 MB |       8 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
| 57.9% | 2.42 MB |       8 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
| 57.9% | 2.42 MB |       8 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
| 51.6% | 2.16 MB |       7 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
| 51.6% | 2.16 MB |       5 | `collect(Collector)`                                                                                                   | `java.util.stream.ReferencePipeline`                                   |
| 51.6% | 2.16 MB |       5 | `generateData(int, int, int)`                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 51.6% | 2.16 MB |       5 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | `org.renaissance.jdk.concurrent.FjKmeans`                              |
| 51.6% | 2.16 MB |       5 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
| 51.6% | 2.16 MB |       5 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
| 51.6% | 2.16 MB |       5 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000b801198798` |
| 51.6% | 2.16 MB |       5 | `foreach(Function1)`                                                                                                   | `scala.collection.immutable.List`                                      |
| 51.6% | 2.16 MB |       5 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
| 35.9% |  1.5 MB |       8 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 35.9% |  1.5 MB |       8 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801205218` |
| 35.9% |  1.5 MB |       8 | `merge(Object, Object, BiFunction)`                                                                                    | `java.util.HashMap`                                                    |
| 35.9% |  1.5 MB |       8 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 35.9% |  1.5 MB |       8 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801204d88` |
| 35.9% |  1.5 MB |       8 | `forEach(BiConsumer)`                                                                                                  | `java.util.HashMap`                                                    |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|     % |    Size | Samples | Callee              | Location                                    |
| ----: | ------: | ------: | ------------------- | ------------------------------------------- |
| 89.2% | 2.16 MB |       7 | `main(String[])`    | `org.renaissance.harness.RenaissanceSuite$` |
| 10.8% |  261 kB |       1 | `loadClass(String)` | `java.lang.ClassLoader`                     |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|      % |    Size | Samples | Callee                     | Location                   |
| -----: | ------: | ------: | -------------------------- | -------------------------- |
| 100.0% | 2.42 MB |       8 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|      % |    Size | Samples | Callee                                                      | Location                        |
| -----: | ------: | ------: | ----------------------------------------------------------- | ------------------------------- |
| 100.0% | 2.42 MB |       8 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.core.Launcher`)

|      % |    Size | Samples | Callee                                 | Location                        |
| -----: | ------: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 2.42 MB |       8 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |    Size | Samples | Callee                                                                        | Location                                    |
| -----: | ------: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 2.16 MB |       5 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |
|  <0.1% |   112 B |       1 | `<init>(Map)`                                                                 | `org.renaissance.harness.ConfigParser`      |
|  <0.1% |    48 B |       1 | `apply(Function0)`                                                            | `scala.util.Try$`                           |

##### `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |    Size | Samples | Callee               | Location                             |
| -----: | ------: | ------: | -------------------- | ------------------------------------ |
| 100.0% | 2.16 MB |       5 | `collect(Collector)` | `java.util.stream.ReferencePipeline` |

##### `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|      % |    Size | Samples | Callee                        | Location                                    |
| -----: | ------: | ------: | ----------------------------- | ------------------------------------------- |
| 100.0% | 2.16 MB |       5 | `generateData(int, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

|      % |    Size | Samples | Callee                             | Location                                  |
| -----: | ------: | ------: | ---------------------------------- | ----------------------------------------- |
| 100.0% | 2.16 MB |       5 | `setUpBeforeAll(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |    Size | Samples | Callee               | Location                                  |
| -----: | ------: | ------: | -------------------- | ----------------------------------------- |
| 100.0% | 2.16 MB |       5 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000b801198798`)

|      % |    Size | Samples | Callee                                                                                                                 | Location                                    |
| -----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 2.16 MB |       5 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |    Size | Samples | Callee               | Location                          |
| -----: | ------: | ------: | -------------------- | --------------------------------- |
| 100.0% | 2.16 MB |       5 | `foreach(Function1)` | `scala.collection.immutable.List` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % |   Size | Samples | Callee               | Location              |
| ----: | -----: | ------: | -------------------- | --------------------- |
| 93.3% | 1.4 MB |       7 | `addAll(Collection)` | `java.util.ArrayList` |
|  6.7% | 100 kB |       1 | `<init>(Collection)` | `java.util.ArrayList` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801205218`)

|      % |   Size | Samples | Callee                       | Location                                    |
| -----: | -----: | ------: | ---------------------------- | ------------------------------------------- |
| 100.0% | 1.5 MB |       8 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|      % |   Size | Samples | Callee                  | Location                                                               |
| -----: | -----: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| 100.0% | 1.5 MB |       8 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801205218` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |   Size | Samples | Callee                              | Location            |
| -----: | -----: | ------: | ----------------------------------- | ------------------- |
| 100.0% | 1.5 MB |       8 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801204d88`)

|      % |   Size | Samples | Callee                              | Location                                    |
| -----: | -----: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% | 1.5 MB |       8 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|      % |   Size | Samples | Callee                   | Location                                                               |
| -----: | -----: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| 100.0% | 1.5 MB |       8 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801204d88` |

## Hottest call stacks

Call stacks ranked by bytes retained in their leaf frame.

|     % |    Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 51.6% | 2.16 MB |       1 | `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000b801198798`) ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 28.7% |  1.2 MB |       6 | `addAll(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801205218`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  6.2% |  261 kB |       1 | `loadClass(String)` (`java.lang.ClassLoader`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  4.8% |  200 kB |       1 | `addAll(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801205218`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `invoke()` (`java.util.concurrent.ForkJoinTask`) ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b8011ffbc0`)                                                                                                                                                                                                                                                                                                                                                                                                               |
|  2.4% |  100 kB |       1 | `<init>(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801205218`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b801204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `invoke()` (`java.util.concurrent.ForkJoinTask`) ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b8011ffbc0`)                                                                                                                                                                                                                                                                                                                                                                                                               |
| <0.1% |   120 B |       3 | `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b8011a1d48`) ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b8011a18d8`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000b801198798`) ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                              |
| <0.1% |   112 B |       1 | `<clinit>()` (`scala.runtime.LazyVals$`) ← `<clinit>()` (`scopt.OptionParser`) ← `createParser(Map)` (`org.renaissance.harness.ConfigParser`) ← `<init>(Map)` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| <0.1% |    48 B |       1 | `load(InputStream)` (`java.util.Properties`) ← `loadProperties(URL)` (`org.renaissance.core.ResourceUtils`) ← `loadPropertiesAsMap(URL)` ← `create(Path, String, Optional, Map, boolean)` (`org.renaissance.core.BenchmarkSuite`) ← `$anonfun$1(Config, Path)` (`org.renaissance.harness.RenaissanceSuite$`) ← `apply()` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000b80117e000`) ← `apply(Function0)` (`scala.util.Try$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| <0.1% |    24 B |       1 | `valueOf(double)` (`java.lang.Double`) ← `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b8011a1b10`) ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b8011a18d8`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000b801198798`) ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])` |

# Lock contention profile

Blocked 7.40s over 58 samples (127.7ms per sample).

| Category |      % |  Time | Samples |
| -------- | -----: | ----: | ------: |
| stdlib   | 100.0% | 7.40s |      58 |

## Hottest functions

### Total time

Functions ranked by total time blocked in the function and all its callees.

|     % |  Time | Samples | Function                                                                                                               | Location                                                               |
| ----: | ----: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 84.5% | 6.26s |      16 | `get()`                                                                                                                | `java.util.concurrent.ForkJoinTask`                                    |
| 84.5% | 6.26s |      16 | `run(int, List, int)`                                                                                                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 84.5% | 6.26s |      16 | `$anonfun$1(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`                              |
| 84.5% | 6.26s |      16 | `$anonfun$adapted$1(Object)`                                                                                           | `org.renaissance.jdk.concurrent.FjKmeans`                              |
| 84.5% | 6.26s |      16 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000b8011f6c70`   |
| 84.5% | 6.26s |      16 | `map(Function1)`                                                                                                       | `scala.collection.immutable.Range`                                     |
| 84.5% | 6.26s |      16 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                              |
| 84.5% | 6.26s |      16 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |
| 84.5% | 6.26s |      16 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
| 84.5% | 6.26s |      16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
| 84.5% | 6.26s |      16 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000b801198798` |
| 84.5% | 6.26s |      16 | `foreach(Function1)`                                                                                                   | `scala.collection.immutable.List`                                      |
| 84.5% | 6.26s |      16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
| 84.5% | 6.26s |      16 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
| 84.5% | 6.26s |      16 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
| 84.5% | 6.26s |      16 | `invoke(Object, Object[])`                                                                                             | `java.lang.reflect.Method`                                             |
| 84.5% | 6.26s |      16 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
| 84.5% | 6.26s |      16 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
| 84.5% | 6.26s |      16 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |  Time | Samples | Callee  | Location                            |
| -----: | ----: | ------: | ------- | ----------------------------------- |
| 100.0% | 6.26s |      16 | `get()` | `java.util.concurrent.ForkJoinTask` |

##### `$anonfun$1(int)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|      % |  Time | Samples | Callee                | Location                                    |
| -----: | ----: | ------: | --------------------- | ------------------------------------------- |
| 100.0% | 6.26s |      16 | `run(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `$anonfun$adapted$1(Object)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|      % |  Time | Samples | Callee            | Location                                  |
| -----: | ----: | ------: | ----------------- | ----------------------------------------- |
| 100.0% | 6.26s |      16 | `$anonfun$1(int)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000b8011f6c70`)

|      % |  Time | Samples | Callee                       | Location                                  |
| -----: | ----: | ------: | ---------------------------- | ----------------------------------------- |
| 100.0% | 6.26s |      16 | `$anonfun$adapted$1(Object)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `map(Function1)` (`scala.collection.immutable.Range`)

|      % |  Time | Samples | Callee          | Location                                                             |
| -----: | ----: | ------: | --------------- | -------------------------------------------------------------------- |
| 100.0% | 6.26s |      16 | `apply(Object)` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000b8011f6c70` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|      % |  Time | Samples | Callee           | Location                           |
| -----: | ----: | ------: | ---------------- | ---------------------------------- |
| 100.0% | 6.26s |      16 | `map(Function1)` | `scala.collection.immutable.Range` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

|      % |  Time | Samples | Callee                  | Location                                  |
| -----: | ----: | ------: | ----------------------- | ----------------------------------------- |
| 100.0% | 6.26s |      16 | `run(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

|      % |  Time | Samples | Callee                  | Location                                  |
| -----: | ----: | ------: | ----------------------- | ----------------------------------------- |
| 100.0% | 6.26s |      16 | `executeOperation(int)` | `org.renaissance.harness.ExecutionDriver` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |  Time | Samples | Callee               | Location                                  |
| -----: | ----: | ------: | -------------------- | ----------------------------------------- |
| 100.0% | 6.26s |      16 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000b801198798`)

|      % |  Time | Samples | Callee                                                                                                                 | Location                                    |
| -----: | ----: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 6.26s |      16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |  Time | Samples | Callee               | Location                          |
| -----: | ----: | ------: | -------------------- | --------------------------------- |
| 100.0% | 6.26s |      16 | `foreach(Function1)` | `scala.collection.immutable.List` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |  Time | Samples | Callee                                                                        | Location                                    |
| -----: | ----: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 6.26s |      16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|      % |  Time | Samples | Callee           | Location                                    |
| -----: | ----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% | 6.26s |      16 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|      % |  Time | Samples | Callee                     | Location                   |
| -----: | ----: | ------: | -------------------------- | -------------------------- |
| 100.0% | 6.26s |      16 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|      % |  Time | Samples | Callee                                                      | Location                        |
| -----: | ----: | ------: | ----------------------------------------------------------- | ------------------------------- |
| 100.0% | 6.26s |      16 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.core.Launcher`)

|      % |  Time | Samples | Callee                                 | Location                        |
| -----: | ----: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 6.26s |      16 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

## Hottest call stacks

Call stacks ranked by time blocked in their leaf frame.

|     % |  Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----: | ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 84.5% | 6.26s |      16 | `get()` (`java.util.concurrent.ForkJoinTask`) ← `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `$anonfun$1(int)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `$anonfun$adapted$1(Object)` ← `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000b8011f6c70`) ← `map(Function1)` (`scala.collection.immutable.Range`) ← `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000b801198798`) ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])` |

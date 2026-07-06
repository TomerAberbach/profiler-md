# Sampling profile

Collected 1,605 samples.

| Category |     % | Samples |
| -------- | ----: | ------: |
| ours     | 90.0% |   1,444 |
| stdlib   | 10.0% |     161 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                            | Location                                                                              |
| ----: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------- |
| 43.4% |     696 | `accumulate(Double[], double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| 22.4% |     359 | `distance(Double[], Double[])`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| 10.6% |     170 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  6.1% |      98 | `collectClusters(int[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  5.0% |      80 | `vectorSum()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  3.4% |      54 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`                                                                   |
|  2.0% |      32 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  0.9% |      15 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`                                                                   |
|  0.2% |       3 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  0.1% |       2 | `compute()`                         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
|  0.1% |       2 | `createSubtask(int, int)`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  0.1% |       1 | `<init>(Map)`                       | `java.util.HashMap`                                                                   |
|  0.1% |       1 | `forkThreshold()`                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  0.1% |       1 | `apply(Object)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001204b38` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Location                                                      |
| -----: | ------: | ------------------------------------------------------------- |
| 100.0% |     696 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:411` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |     359 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:248` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Location                                                       |
| ----: | ------: | -------------------------------------------------------------- |
| 88.2% |     150 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:229` |
|  8.8% |      15 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:225` |
|  2.9% |       5 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:230` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Location                                                       |
| ----: | ------: | -------------------------------------------------------------- |
| 65.3% |      64 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |
| 33.7% |      33 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:211` |
|  1.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:213` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Location                                                      |
| ----: | ------: | ------------------------------------------------------------- |
| 57.5% |      46 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400` |
| 35.0% |      28 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:402` |
|  7.5% |       6 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:403` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 96.3% |      52 | `java.util.HashMap:1219` |
|  3.7% |       2 | `java.util.HashMap:1206` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |      32 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:204` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 80.0% |      12 | `java.util.HashMap:1384` |
| 20.0% |       3 | `java.util.HashMap:1371` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Location                                        |
| -----: | ------: | ----------------------------------------------- |
| 100.0% |       3 | `org.renaissance.jdk.concurrent.JavaKMeans:112` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % | Samples | Location                                                   |
| ----: | ------: | ---------------------------------------------------------- |
| 50.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask:146` |
| 50.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask:151` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Location                                                      |
| -----: | ------: | ------------------------------------------------------------- |
| 100.0% |       2 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419` |

##### `<init>(Map)` (`java.util.HashMap`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.util.HashMap:492` |

##### `forkThreshold()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Location                                                      |
| -----: | ------: | ------------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:389` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller        | Location                                                  |
| -----: | ------: | ------------- | --------------------------------------------------------- |
| 100.0% |     696 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                  | Location                                                   |
| -----: | ------: | ----------------------- | ---------------------------------------------------------- |
| 100.0% |     359 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |     170 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |      98 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |      80 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|      % | Samples | Caller                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |      54 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |      32 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|      % | Samples | Caller                              | Location                                    |
| -----: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% |      15 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller                   | Location                                                               |
| -----: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| 100.0% |       3 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       2 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `<init>(Map)` (`java.util.HashMap`)

|      % | Samples | Caller            | Location                                    |
| -----: | ------: | ----------------- | ------------------------------------------- |
| 100.0% |       1 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forkThreshold()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001204b38`)

|      % | Samples | Caller                              | Location            |
| -----: | ------: | ----------------------------------- | ------------------- |
| 100.0% |       1 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                            | Location                                                               |
| ----: | ------: | ----------------------------------- | ---------------------------------------------------------------------- |
| 98.9% |   1,588 | `compute()`                         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 97.2% |   1,560 | `join()`                            | `java.util.concurrent.ForkJoinTask`                                    |
| 48.4% |     777 | `vectorSum()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 48.4% |     777 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 47.2% |     757 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 43.4% |     696 | `accumulate(Double[], double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 33.0% |     529 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 22.4% |     359 | `distance(Double[], Double[])`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 19.9% |     319 | `invoke()`                          | `java.util.concurrent.ForkJoinTask`                                    |
| 18.8% |     301 | `computeClusterAverages()`          | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 18.7% |     300 | `average(List)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 18.6% |     298 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 12.2% |     196 | `collectClusters(int[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  3.4% |      55 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`                                                    |
|  2.7% |      43 | `add(Object)`                       | `java.util.ArrayList`                                                  |
|  1.8% |      29 | `lambda$run$0(int, List, int)`      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  1.6% |      26 | `call()`                            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0` |
|  1.5% |      24 | `merge(Map, Map)`                   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  1.5% |      24 | `combineResults(Map, Map)`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  1.5% |      24 | `combineResults(Object, Object)`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % | Samples | Callee                           | Location                                                   |
| ----: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 98.2% |   1,560 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
| 48.9% |     777 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 47.7% |     757 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 18.7% |     297 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  1.5% |      24 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Callee                           | Location                                                  |
| ----: | ------: | -------------------------------- | --------------------------------------------------------- |
| 89.6% |     696 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  0.1% |       1 | `get(int)`                       | `java.util.ArrayList`                                     |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Callee              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |     777 | `vectorSum()`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| 100.0% |     777 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |     757 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  69.9% |     529 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  25.9% |     196 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                         | Location                                                   |
| ----: | ------: | ------------------------------ | ---------------------------------------------------------- |
| 67.9% |     359 | `distance(Double[], Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % | Samples | Callee            | Location                                               |
| ----: | ------: | ----------------- | ------------------------------------------------------ |
| 99.7% |     300 | `average(List)`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  0.3% |       1 | `boxed(double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |     300 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee                     | Location                                               |
| -----: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% |     298 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  99.7% |     297 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                              | Location              |
| ----: | ------: | ----------------------------------- | --------------------- |
| 28.1% |      55 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`   |
| 21.9% |      43 | `add(Object)`                       | `java.util.ArrayList` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|    % | Samples | Callee          | Location                                                                              |
| ---: | ------: | --------------- | ------------------------------------------------------------------------------------- |
| 1.8% |       1 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001204b38` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |      29 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0`)

|      % | Samples | Callee                         | Location                                    |
| -----: | ------: | ------------------------------ | ------------------------------------------- |
| 100.0% |      26 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee                | Location            |
| ----: | ------: | --------------------- | ------------------- |
| 75.0% |      18 | `forEach(BiConsumer)` | `java.util.HashMap` |
| 25.0% |       6 | `<init>(Map)`         | `java.util.HashMap` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee            | Location                                    |
| -----: | ------: | ----------------- | ------------------------------------------- |
| 100.0% |      24 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee                     | Location                                                   |
| -----: | ------: | -------------------------- | ---------------------------------------------------------- |
| 100.0% |      24 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5.4% |      86 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 5.1% |      82 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 4.8% |      77 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`)                                                                                                                                                |
| 4.7% |      76 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `invoke()` (`java.util.concurrent.ForkJoinTask`) ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                    |
| 4.7% |      76 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 3.7% |      59 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `invoke()` (`java.util.concurrent.ForkJoinTask`) ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                    |
| 3.2% |      52 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 3.1% |      49 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                         |
| 2.7% |      44 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 2.7% |      44 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 2.3% |      37 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 2.3% |      37 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 2.2% |      35 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 2.1% |      34 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `invoke()` (`java.util.concurrent.ForkJoinTask`) ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                            |
| 2.1% |      33 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`)                                                                                                                                                         |
| 2.0% |      32 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 2.0% |      32 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `invoke()` (`java.util.concurrent.ForkJoinTask`) ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `invoke()` (`java.util.concurrent.ForkJoinTask`) |
| 1.9% |      31 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.9% |      30 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                          |
| 1.8% |      29 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `invoke()` (`java.util.concurrent.ForkJoinTask`) ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                            |

# Allocated heap profile

Allocated 40.2 GB over 1,980 samples (20.3 MB per sample).

| Category |     % |    Size | Samples |
| -------- | ----: | ------: | ------: |
| stdlib   | 95.4% | 38.3 GB |   1,868 |
| ours     |  4.6% | 1.86 GB |     110 |
| native   | <0.1% | 2.02 kB |       2 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |    Size | Samples | Function                             | Location                                                   |
| ----: | ------: | ------: | ------------------------------------ | ---------------------------------------------------------- |
|  2.6% | 1.05 GB |      60 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.8% |  341 MB |      12 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.6% |  258 MB |       6 | `collectClusters(int[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.3% |  110 MB |       4 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.2% | 74.6 MB |       1 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| <0.1% |   11 MB |      27 | `valueOf(double)`                    | `java.lang.Double`                                         |
| <0.1% |   11 MB |       2 | `vectorSum()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| <0.1% | 9.67 MB |       5 | `lambda$merge$6(List, List)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| <0.1% | 5.11 MB |       5 | `merge(Map, Map)`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| <0.1% | 4.21 MB |      12 | `lambda$generateData$4(int)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| <0.1% | 3.28 MB |       1 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| <0.1% |  467 kB |       2 | `computeClusterAverages()`           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| <0.1% |  397 kB |       1 | `range(int, int)`                    | `java.util.stream.IntStream`                               |

#### Lines

Lines ranked by contribution to each function's self size.

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Location                                                       |
| -----: | ------: | ------: | -------------------------------------------------------------- |
| 100.0% | 1.05 GB |      60 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:223` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |   Size | Samples | Location                                                      |
| -----: | -----: | ------: | ------------------------------------------------------------- |
| 100.0% | 341 MB |      12 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |   Size | Samples | Location                                                       |
| -----: | -----: | ------: | -------------------------------------------------------------- |
| 100.0% | 258 MB |       6 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:209` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |   Size | Samples | Location                                                       |
| -----: | -----: | ------: | -------------------------------------------------------------- |
| 100.0% | 110 MB |       4 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Location                                                       |
| -----: | ------: | ------: | -------------------------------------------------------------- |
| 100.0% | 74.6 MB |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261` |

##### `valueOf(double)` (`java.lang.Double`)

|      % |  Size | Samples | Location               |
| -----: | ----: | ------: | ---------------------- |
| 100.0% | 11 MB |      27 | `java.lang.Double:773` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |  Size | Samples | Location                                                      |
| -----: | ----: | ------: | ------------------------------------------------------------- |
| 100.0% | 11 MB |       2 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |    Size | Samples | Location                                        |
| -----: | ------: | ------: | ----------------------------------------------- |
| 100.0% | 9.67 MB |       5 | `org.renaissance.jdk.concurrent.JavaKMeans:114` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |    Size | Samples | Location                                        |
| -----: | ------: | ------: | ----------------------------------------------- |
| 100.0% | 5.11 MB |       5 | `org.renaissance.jdk.concurrent.JavaKMeans:110` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |    Size | Samples | Location                                       |
| -----: | ------: | ------: | ---------------------------------------------- |
| 100.0% | 4.21 MB |      12 | `org.renaissance.jdk.concurrent.JavaKMeans:87` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |    Size | Samples | Location                                                      |
| -----: | ------: | ------: | ------------------------------------------------------------- |
| 100.0% | 3.28 MB |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:430` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |   Size | Samples | Location                                                   |
| -----: | -----: | ------: | ---------------------------------------------------------- |
| 100.0% | 467 kB |       2 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:314` |

##### `range(int, int)` (`java.util.stream.IntStream`)

|      % |   Size | Samples | Location                          |
| -----: | -----: | ------: | --------------------------------- |
| 100.0% | 397 kB |       1 | `java.util.stream.IntStream:1083` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Caller              | Location                                                   |
| -----: | ------: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% | 1.05 GB |      60 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |   Size | Samples | Caller      | Location                                               |
| -----: | -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% | 341 MB |      12 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |   Size | Samples | Caller              | Location                                                   |
| -----: | -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% | 258 MB |       6 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |   Size | Samples | Caller          | Location                                                                              |
| -----: | -----: | ------: | --------------- | ------------------------------------------------------------------------------------- |
| 100.0% | 110 MB |       4 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001204b38` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Caller      | Location                                               |
| -----: | ------: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% | 74.6 MB |       1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `valueOf(double)` (`java.lang.Double`)

|      % |  Size | Samples | Caller                                           | Location                                    |
| -----: | ----: | ------: | ------------------------------------------------ | ------------------------------------------- |
| 100.0% | 11 MB |      27 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |  Size | Samples | Caller              | Location                                                  |
| -----: | ----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% | 11 MB |       2 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |    Size | Samples | Caller                  | Location                                                               |
| -----: | ------: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| 100.0% | 9.67 MB |       5 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |    Size | Samples | Caller                     | Location                                                   |
| -----: | ------: | ------: | -------------------------- | ---------------------------------------------------------- |
| 100.0% | 5.11 MB |       5 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |    Size | Samples | Caller       | Location                                                               |
| -----: | ------: | ------: | ------------ | ---------------------------------------------------------------------- |
| 100.0% | 4.21 MB |      12 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a1d48` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |    Size | Samples | Caller                               | Location                                                  |
| -----: | ------: | ------: | ------------------------------------ | --------------------------------------------------------- |
| 100.0% | 3.28 MB |       1 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |   Size | Samples | Caller              | Location                                               |
| -----: | -----: | ------: | ------------------- | ------------------------------------------------------ |
| 100.0% | 467 kB |       2 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `range(int, int)` (`java.util.stream.IntStream`)

|      % |   Size | Samples | Caller                                           | Location                                    |
| -----: | -----: | ------: | ------------------------------------------------ | ------------------------------------------- |
| 100.0% | 397 kB |       1 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |    Size | Samples | Function                            | Location                                                               |
| ----: | ------: | ------: | ----------------------------------- | ---------------------------------------------------------------------- |
| 99.4% | 39.9 GB |   1,854 | `compute()`                         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 82.8% | 33.3 GB |   1,532 | `merge(Map, Map)`                   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 82.8% | 33.3 GB |   1,531 | `combineResults(Map, Map)`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 82.8% | 33.3 GB |   1,531 | `combineResults(Object, Object)`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 82.2% |   33 GB |   1,513 | `lambda$merge$6(List, List)`        | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 82.2% |   33 GB |   1,513 | `apply(Object, Object)`             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0` |
| 82.2% |   33 GB |   1,513 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`                                                    |
| 82.2% |   33 GB |   1,513 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 82.2% |   33 GB |   1,513 | `accept(Object, Object)`            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88` |
| 82.2% |   33 GB |   1,513 | `forEach(BiConsumer)`               | `java.util.HashMap`                                                    |
| 65.2% | 26.2 GB |   1,229 | `join()`                            | `java.util.concurrent.ForkJoinTask`                                    |
| 64.0% | 25.7 GB |   1,135 | `addAll(Collection)`                | `java.util.ArrayList`                                                  |
| 20.1% | 8.07 GB |     221 | `invoke()`                          | `java.util.concurrent.ForkJoinTask`                                    |
| 19.7% | 7.93 GB |     211 | `lambda$run$0(int, List, int)`      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 19.7% | 7.93 GB |     211 | `call()`                            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0` |
| 18.1% | 7.29 GB |     373 | `<init>(Collection)`                | `java.util.ArrayList`                                                  |
| 15.5% | 6.23 GB |     304 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 12.9% | 5.19 GB |     244 | `collectClusters(int[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 11.9% | 4.77 GB |     226 | `add(Object)`                       | `java.util.ArrayList`                                                  |
|  2.6% | 1.05 GB |      60 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % |    Size | Samples | Callee                           | Location                                                   |
| ----: | ------: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 83.3% | 33.3 GB |   1,531 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 65.6% | 26.2 GB |   1,229 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
| 15.6% | 6.23 GB |     304 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.9% |  341 MB |      12 | `createSubtask(int, int)`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.3% |  112 MB |       7 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % |    Size | Samples | Callee                               | Location                           |
| ----: | ------: | ------: | ------------------------------------ | ---------------------------------- |
| 99.3% |   33 GB |   1,513 | `forEach(BiConsumer)`                | `java.util.HashMap`                |
|  0.7% |  243 MB |      13 | `<init>(Map)`                        | `java.util.HashMap`                |
| <0.1% | 1.27 MB |       1 | `linkToTargetMethod(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Callee            | Location                                    |
| -----: | ------: | ------: | ----------------- | ------------------------------------------- |
| 100.0% | 33.3 GB |   1,531 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Callee                     | Location                                                   |
| -----: | ------: | ------: | -------------------------- | ---------------------------------------------------------- |
| 100.0% | 33.3 GB |   1,531 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % |    Size | Samples | Callee               | Location              |
| ----: | ------: | ------: | -------------------- | --------------------- |
| 77.9% | 25.7 GB |   1,135 | `addAll(Collection)` | `java.util.ArrayList` |
| 22.1% | 7.29 GB |     373 | `<init>(Collection)` | `java.util.ArrayList` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0`)

|      % |  Size | Samples | Callee                       | Location                                    |
| -----: | ----: | ------: | ---------------------------- | ------------------------------------------- |
| 100.0% | 33 GB |   1,513 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|      % |  Size | Samples | Callee                  | Location                                                               |
| -----: | ----: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| 100.0% | 33 GB |   1,513 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |  Size | Samples | Callee                              | Location            |
| -----: | ----: | ------: | ----------------------------------- | ------------------- |
| 100.0% | 33 GB |   1,513 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88`)

|      % |  Size | Samples | Callee                              | Location                                    |
| -----: | ----: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% | 33 GB |   1,513 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|      % |  Size | Samples | Callee                   | Location                                                               |
| -----: | ----: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| 100.0% | 33 GB |   1,513 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |    Size | Samples | Callee     | Location                            |
| -----: | ------: | ------: | ---------- | ----------------------------------- |
| 100.0% | 7.93 GB |     211 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0`)

|      % |    Size | Samples | Callee                         | Location                                    |
| -----: | ------: | ------: | ------------------------------ | ------------------------------------------- |
| 100.0% | 7.93 GB |     211 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Callee                   | Location                                                   |
| -----: | ------: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% | 6.23 GB |     304 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  83.2% | 5.19 GB |     244 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  16.8% | 1.05 GB |      60 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % |    Size | Samples | Callee                              | Location              |
| ----: | ------: | ------: | ----------------------------------- | --------------------- |
| 92.0% | 4.77 GB |     226 | `add(Object)`                       | `java.util.ArrayList` |
|  3.0% |  155 MB |      12 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`   |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

|     % |    Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----: | ------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 20.2% |  8.1 GB |     378 | `addAll(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  8.7% | 3.48 GB |     191 | `addAll(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  5.7% | 2.29 GB |     133 | `<init>(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  5.6% | 2.25 GB |      67 | `addAll(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `invoke()` (`java.util.concurrent.ForkJoinTask`) ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  4.7% | 1.88 GB |      82 | `addAll(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  4.3% | 1.74 GB |      93 | `addAll(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  3.7% | 1.49 GB |      71 | `addAll(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  3.7% | 1.47 GB |      44 | `addAll(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `invoke()` (`java.util.concurrent.ForkJoinTask`) ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  3.6% | 1.45 GB |      68 | `<init>(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  3.5% | 1.41 GB |      49 | `add(Object)` (`java.util.ArrayList`) ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                   |
|  2.9% | 1.17 GB |      52 | `add(Object)` (`java.util.ArrayList`) ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  2.9% | 1.15 GB |      41 | `addAll(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                       |
|  2.2% |  884 MB |      34 | `<init>(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `invoke()` (`java.util.concurrent.ForkJoinTask`) ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  2.2% |  872 MB |      40 | `add(Object)` (`java.util.ArrayList`) ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  1.9% |  780 MB |      59 | `addAll(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                               |
|  1.8% |  735 MB |      16 | `addAll(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `invoke()` (`java.util.concurrent.ForkJoinTask`) ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.5% |  590 MB |       3 | `addAll(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `invoke()` (`java.util.concurrent.ForkJoinTask`) ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0`) |
|  1.5% |  585 MB |       6 | `addAll(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `invoke()` (`java.util.concurrent.ForkJoinTask`) ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0`)                                                                                                                                                                                                                                                                                                                                                                         |
|  1.3% |  533 MB |      31 | `addAll(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                               |
|  1.3% |  523 MB |      13 | `<init>(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `invoke()` (`java.util.concurrent.ForkJoinTask`) ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

# Retained heap profile

Retained 2.98 MB over 11 samples (271 kB per sample).

| Category |      % |    Size | Samples |
| -------- | -----: | ------: | ------: |
| stdlib   | 100.0% | 2.98 MB |      11 |

## Hottest functions

### Self size

Functions ranked by bytes retained directly in the function body, excluding callees.

|     % | Size | Samples | Function          | Location           |
| ----: | ---: | ------: | ----------------- | ------------------ |
| <0.1% | 96 B |       4 | `valueOf(double)` | `java.lang.Double` |

#### Lines

Lines ranked by contribution to each function's self size.

##### `valueOf(double)` (`java.lang.Double`)

|      % | Size | Samples | Location               |
| -----: | ---: | ------: | ---------------------- |
| 100.0% | 96 B |       4 | `java.lang.Double:773` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `valueOf(double)` (`java.lang.Double`)

|      % | Size | Samples | Caller                                           | Location                                    |
| -----: | ---: | ------: | ------------------------------------------------ | ------------------------------------------- |
| 100.0% | 96 B |       4 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

### Total size

Functions ranked by total bytes retained in the function and all its callees.

|     % |    Size | Samples | Function                                                                                                               | Location                                                               |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 81.2% | 2.42 MB |       8 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
| 81.2% | 2.42 MB |       8 | `invoke(Object, Object[])`                                                                                             | `java.lang.reflect.Method`                                             |
| 81.2% | 2.42 MB |       8 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
| 81.2% | 2.42 MB |       8 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
| 81.2% | 2.42 MB |       8 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
| 72.4% | 2.16 MB |       7 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
| 72.4% | 2.16 MB |       5 | `collect(Collector)`                                                                                                   | `java.util.stream.ReferencePipeline`                                   |
| 72.4% | 2.16 MB |       5 | `generateData(int, int, int)`                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 72.4% | 2.16 MB |       5 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | `org.renaissance.jdk.concurrent.FjKmeans`                              |
| 72.4% | 2.16 MB |       5 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
| 72.4% | 2.16 MB |       5 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
| 72.4% | 2.16 MB |       5 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001198798` |
| 72.4% | 2.16 MB |       5 | `foreach(Function1)`                                                                                                   | `scala.collection.immutable.List`                                      |
| 72.4% | 2.16 MB |       5 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
| 10.0% |  300 kB |       2 | `addAll(Collection)`                                                                                                   | `java.util.ArrayList`                                                  |
| 10.0% |  300 kB |       2 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 10.0% |  300 kB |       2 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0` |
| 10.0% |  300 kB |       2 | `merge(Object, Object, BiFunction)`                                                                                    | `java.util.HashMap`                                                    |
| 10.0% |  300 kB |       2 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 10.0% |  300 kB |       2 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88` |

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
|  <0.1% |   112 B |       1 | `<clinit>()`                                                                  | `scala.Predef$`                             |
|  <0.1% |    24 B |       1 | `apply(Function0)`                                                            | `scala.util.Try$`                           |

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

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001198798`)

|      % |    Size | Samples | Callee                                                                                                                 | Location                                    |
| -----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 2.16 MB |       5 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |    Size | Samples | Callee               | Location                          |
| -----: | ------: | ------: | -------------------- | --------------------------------- |
| 100.0% | 2.16 MB |       5 | `foreach(Function1)` | `scala.collection.immutable.List` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |   Size | Samples | Callee               | Location              |
| -----: | -----: | ------: | -------------------- | --------------------- |
| 100.0% | 300 kB |       2 | `addAll(Collection)` | `java.util.ArrayList` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0`)

|      % |   Size | Samples | Callee                       | Location                                    |
| -----: | -----: | ------: | ---------------------------- | ------------------------------------------- |
| 100.0% | 300 kB |       2 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|      % |   Size | Samples | Callee                  | Location                                                               |
| -----: | -----: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| 100.0% | 300 kB |       2 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |   Size | Samples | Callee                              | Location            |
| -----: | -----: | ------: | ----------------------------------- | ------------------- |
| 100.0% | 300 kB |       2 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88`)

|      % |   Size | Samples | Callee                              | Location                                    |
| -----: | -----: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% | 300 kB |       2 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

## Hottest call stacks

Call stacks ranked by bytes retained in their leaf frame.

|     % |    Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 72.4% | 2.16 MB |       1 | `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001198798`) ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 10.0% |  300 kB |       2 | `addAll(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  8.8% |  261 kB |       1 | `loadClass(String)` (`java.lang.ClassLoader`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| <0.1% |   112 B |       1 | `loadClass(String)` (`java.lang.ClassLoader`) ← `<clinit>()` (`scala.Predef$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| <0.1% |    96 B |       4 | `valueOf(double)` (`java.lang.Double`) ← `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a1b10`) ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a18d8`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001198798`) ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])` |
| <0.1% |    24 B |       1 | `load(InputStream)` (`java.util.Properties`) ← `loadProperties(URL)` (`org.renaissance.core.ResourceUtils`) ← `loadPropertiesAsMap(URL)` ← `create(Path, String, Optional, Map, boolean)` (`org.renaissance.core.BenchmarkSuite`) ← `$anonfun$1(Config, Path)` (`org.renaissance.harness.RenaissanceSuite$`) ← `apply()` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700117e000`) ← `apply(Function0)` (`scala.util.Try$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

# Lock contention profile

Blocked 7.18s over 59 samples (121.8ms per sample).

| Category |      % |  Time | Samples |
| -------- | -----: | ----: | ------: |
| stdlib   | 100.0% | 7.18s |      59 |

## Hottest functions

### Total time

Functions ranked by total time blocked in the function and all its callees.

|     % |   Time | Samples | Function                                                                                                               | Location                                                               |
| ----: | -----: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 84.0% |  6.03s |      16 | `get()`                                                                                                                | `java.util.concurrent.ForkJoinTask`                                    |
| 84.0% |  6.03s |      16 | `run(int, List, int)`                                                                                                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 84.0% |  6.03s |      16 | `$anonfun$1(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`                              |
| 84.0% |  6.03s |      16 | `$anonfun$adapted$1(Object)`                                                                                           | `org.renaissance.jdk.concurrent.FjKmeans`                              |
| 84.0% |  6.03s |      16 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011f6c70`   |
| 84.0% |  6.03s |      16 | `map(Function1)`                                                                                                       | `scala.collection.immutable.Range`                                     |
| 84.0% |  6.03s |      16 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                              |
| 84.0% |  6.03s |      16 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |
| 84.0% |  6.03s |      16 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
| 84.0% |  6.03s |      16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
| 84.0% |  6.03s |      16 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001198798` |
| 84.0% |  6.03s |      16 | `foreach(Function1)`                                                                                                   | `scala.collection.immutable.List`                                      |
| 84.0% |  6.03s |      16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
| 84.0% |  6.03s |      16 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
| 84.0% |  6.03s |      16 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
| 84.0% |  6.03s |      16 | `invoke(Object, Object[])`                                                                                             | `java.lang.reflect.Method`                                             |
| 84.0% |  6.03s |      16 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
| 84.0% |  6.03s |      16 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
| 84.0% |  6.03s |      16 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
|  0.5% | 36.8ms |       1 | `join()`                                                                                                               | `java.util.concurrent.ForkJoinTask`                                    |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |  Time | Samples | Callee  | Location                            |
| -----: | ----: | ------: | ------- | ----------------------------------- |
| 100.0% | 6.03s |      16 | `get()` | `java.util.concurrent.ForkJoinTask` |

##### `$anonfun$1(int)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|      % |  Time | Samples | Callee                | Location                                    |
| -----: | ----: | ------: | --------------------- | ------------------------------------------- |
| 100.0% | 6.03s |      16 | `run(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `$anonfun$adapted$1(Object)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|      % |  Time | Samples | Callee            | Location                                  |
| -----: | ----: | ------: | ----------------- | ----------------------------------------- |
| 100.0% | 6.03s |      16 | `$anonfun$1(int)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011f6c70`)

|      % |  Time | Samples | Callee                       | Location                                  |
| -----: | ----: | ------: | ---------------------------- | ----------------------------------------- |
| 100.0% | 6.03s |      16 | `$anonfun$adapted$1(Object)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `map(Function1)` (`scala.collection.immutable.Range`)

|      % |  Time | Samples | Callee          | Location                                                             |
| -----: | ----: | ------: | --------------- | -------------------------------------------------------------------- |
| 100.0% | 6.03s |      16 | `apply(Object)` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011f6c70` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|      % |  Time | Samples | Callee           | Location                           |
| -----: | ----: | ------: | ---------------- | ---------------------------------- |
| 100.0% | 6.03s |      16 | `map(Function1)` | `scala.collection.immutable.Range` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

|      % |  Time | Samples | Callee                  | Location                                  |
| -----: | ----: | ------: | ----------------------- | ----------------------------------------- |
| 100.0% | 6.03s |      16 | `run(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

|      % |  Time | Samples | Callee                  | Location                                  |
| -----: | ----: | ------: | ----------------------- | ----------------------------------------- |
| 100.0% | 6.03s |      16 | `executeOperation(int)` | `org.renaissance.harness.ExecutionDriver` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |  Time | Samples | Callee               | Location                                  |
| -----: | ----: | ------: | -------------------- | ----------------------------------------- |
| 100.0% | 6.03s |      16 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001198798`)

|      % |  Time | Samples | Callee                                                                                                                 | Location                                    |
| -----: | ----: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 6.03s |      16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |  Time | Samples | Callee               | Location                          |
| -----: | ----: | ------: | -------------------- | --------------------------------- |
| 100.0% | 6.03s |      16 | `foreach(Function1)` | `scala.collection.immutable.List` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |  Time | Samples | Callee                                                                        | Location                                    |
| -----: | ----: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 6.03s |      16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|      % |  Time | Samples | Callee           | Location                                    |
| -----: | ----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% | 6.03s |      16 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|      % |  Time | Samples | Callee                     | Location                   |
| -----: | ----: | ------: | -------------------------- | -------------------------- |
| 100.0% | 6.03s |      16 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|      % |  Time | Samples | Callee                                                      | Location                        |
| -----: | ----: | ------: | ----------------------------------------------------------- | ------------------------------- |
| 100.0% | 6.03s |      16 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.core.Launcher`)

|      % |  Time | Samples | Callee                                 | Location                        |
| -----: | ----: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 6.03s |      16 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

## Hottest call stacks

Call stacks ranked by time blocked in their leaf frame.

|     % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----: | -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 84.0% |  6.03s |      16 | `get()` (`java.util.concurrent.ForkJoinTask`) ← `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `$anonfun$1(int)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `$anonfun$adapted$1(Object)` ← `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011f6c70`) ← `map(Function1)` (`scala.collection.immutable.Range`) ← `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001198798`) ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])` |
|  0.5% | 36.8ms |       1 | `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

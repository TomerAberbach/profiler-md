# Sampling profile

Collected 1,810 samples.

| Category |     % | Samples |
| -------- | ----: | ------: |
| ours     | 92.7% |   1,677 |
| stdlib   |  7.3% |     133 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                                  | Location                                                                              |
| ----: | ------: | ----------------------------------------- | ------------------------------------------------------------------------------------- |
| 44.6% |     808 | `accumulate(Double[], double[])`          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| 22.3% |     403 | `distance(Double[], Double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| 12.2% |     221 | `findNearestCentroid()`                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  6.4% |     116 | `collectClusters(int[])`                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  4.4% |      79 | `vectorSum()`                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  2.2% |      39 | `computeIfAbsent(Object, Function)`       | `java.util.HashMap`                                                                   |
|  1.7% |      30 | `computeDirectly()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  0.8% |      15 | `apply(Object)`                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001204b38` |
|  0.5% |       9 | `tryRemoveAndExec(ForkJoinTask, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue`                                         |
|  0.1% |       2 | `lambda$merge$7(Map, Object, List)`       | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  0.1% |       1 | `merge(Map, Map)`                         | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  0.1% |       1 | `createSubtask(int, int)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  0.1% |       1 | `forkThreshold()`                         | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Location                                                      |
| -----: | ------: | ------------------------------------------------------------- |
| 100.0% |     808 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:411` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |     403 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:248` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Location                                                       |
| ----: | ------: | -------------------------------------------------------------- |
| 86.9% |     192 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:229` |
|  9.0% |      20 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:225` |
|  4.1% |       9 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:230` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Location                                                       |
| ----: | ------: | -------------------------------------------------------------- |
| 65.5% |      76 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |
| 34.5% |      40 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:211` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Location                                                      |
| ----: | ------: | ------------------------------------------------------------- |
| 83.5% |      66 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400` |
| 11.4% |       9 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:403` |
|  5.1% |       4 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:402` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 97.4% |      38 | `java.util.HashMap:1219` |
|  2.6% |       1 | `java.util.HashMap:1206` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |      30 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:204` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|     % | Samples | Location                                           |
| ----: | ------: | -------------------------------------------------- |
| 66.7% |       6 | `java.util.concurrent.ForkJoinPool$WorkQueue:1347` |
| 33.3% |       3 | `java.util.concurrent.ForkJoinPool$WorkQueue:1332` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Location                                        |
| -----: | ------: | ----------------------------------------------- |
| 100.0% |       2 | `org.renaissance.jdk.concurrent.JavaKMeans:112` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Location                                        |
| -----: | ------: | ----------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans:110` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261` |

##### `forkThreshold()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Location                                                      |
| -----: | ------: | ------------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:389` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller        | Location                                                  |
| -----: | ------: | ------------- | --------------------------------------------------------- |
| 100.0% |     808 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                  | Location                                                   |
| -----: | ------: | ----------------------- | ---------------------------------------------------------- |
| 100.0% |     403 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |     221 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |     116 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |      79 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|      % | Samples | Caller                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |      39 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |      30 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001204b38`)

|      % | Samples | Caller                              | Location            |
| -----: | ------: | ----------------------------------- | ------------------- |
| 100.0% |      15 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller                   | Location                                                               |
| -----: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| 100.0% |       2 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller                     | Location                                                   |
| -----: | ------: | -------------------------- | ---------------------------------------------------------- |
| 100.0% |       1 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                                    | Location                                                               |
| ----: | ------: | ----------------------------------------------------------- | ---------------------------------------------------------------------- |
| 99.0% |   1,791 | `compute()`                                                 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 97.1% |   1,757 | `join()`                                                    | `java.util.concurrent.ForkJoinTask`                                    |
| 96.6% |   1,748 | `tryRemoveAndExec(ForkJoinTask, boolean)`                   | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
| 49.0% |     887 | `vectorSum()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 49.0% |     887 | `computeDirectly()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 47.6% |     862 | `computeDirectly()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 44.6% |     808 | `accumulate(Double[], double[])`                            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 34.5% |     624 | `findNearestCentroid()`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 22.3% |     403 | `distance(Double[], Double[])`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 20.2% |     365 | `invoke()`                                                  | `java.util.concurrent.ForkJoinTask`                                    |
| 19.6% |     355 | `computeClusterAverages()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 19.6% |     354 | `average(List)`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 19.1% |     345 | `computeDirectly()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 11.5% |     208 | `collectClusters(int[])`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  3.0% |      54 | `computeIfAbsent(Object, Function)`                         | `java.util.HashMap`                                                    |
|  2.2% |      39 | `add(Object)`                                               | `java.util.ArrayList`                                                  |
|  0.9% |      17 | `lambda$run$0(int, List, int)`                              | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  0.9% |      16 | `call()`                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0` |
|  0.8% |      15 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`                                        |
|  0.8% |      15 | `launchHarnessClass(String, String[])`                      | `org.renaissance.core.Launcher`                                        |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % | Samples | Callee                           | Location                                                   |
| ----: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 98.1% |   1,757 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
| 49.5% |     887 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 48.1% |     862 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 19.0% |     341 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  0.7% |      13 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|    % | Samples | Callee                              | Location            |
| ---: | ------: | ----------------------------------- | ------------------- |
| 0.1% |       1 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Callee                           | Location                                                  |
| ----: | ------: | -------------------------------- | --------------------------------------------------------- |
| 91.1% |     808 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Callee              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |     887 | `vectorSum()`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| 100.0% |     887 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |     862 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  72.4% |     624 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  24.1% |     208 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                         | Location                                                   |
| ----: | ------: | ------------------------------ | ---------------------------------------------------------- |
| 64.6% |     403 | `distance(Double[], Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % | Samples | Callee            | Location                                               |
| ----: | ------: | ----------------- | ------------------------------------------------------ |
| 99.7% |     354 | `average(List)`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  0.3% |       1 | `boxed(double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |     354 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee                     | Location                                               |
| -----: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% |     345 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  98.8% |     341 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                              | Location              |
| ----: | ------: | ----------------------------------- | --------------------- |
| 25.5% |      53 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`   |
| 18.8% |      39 | `add(Object)`                       | `java.util.ArrayList` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|     % | Samples | Callee          | Location                                                                              |
| ----: | ------: | --------------- | ------------------------------------------------------------------------------------- |
| 27.8% |      15 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001204b38` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |      17 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0`)

|      % | Samples | Callee                         | Location                                    |
| -----: | ------: | ------------------------------ | ------------------------------------------- |
| 100.0% |      16 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|     % | Samples | Callee                               | Location                            |
| ----: | ------: | ------------------------------------ | ----------------------------------- |
| 93.3% |      14 | `invoke(Object, Object[])`           | `java.lang.reflect.Method`          |
|  6.7% |       1 | `createClassLoaderForModule(String)` | `org.renaissance.core.ModuleLoader` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|      % | Samples | Callee                                                      | Location                        |
| -----: | ------: | ----------------------------------------------------------- | ------------------------------- |
| 100.0% |      15 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame. `…` stands for frames the entry filter hides.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5.3% |      96 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 5.2% |      95 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 4.6% |      83 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 3.9% |      71 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 2.8% |      51 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                  |
| 2.3% |      41 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) |
| 2.2% |      39 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `invoke()` (`java.util.concurrent.ForkJoinTask`) ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                         |
| 2.1% |      38 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.9% |      35 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.8% |      32 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.8% |      32 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.8% |      32 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.7% |      31 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `invoke()` (`java.util.concurrent.ForkJoinTask`) ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.7% |      30 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `invoke()` (`java.util.concurrent.ForkJoinTask`) ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `invoke()` (`java.util.concurrent.ForkJoinTask`)                                                  |
| 1.6% |      29 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `invoke()` (`java.util.concurrent.ForkJoinTask`) ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                     |
| 1.5% |      28 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                      |
| 1.5% |      28 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `invoke()` (`java.util.concurrent.ForkJoinTask`) ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)         |
| 1.3% |      24 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.2% |      22 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.2% |      22 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

# Allocated heap profile

Allocated 37.7 GiB over 1,972 samples (19.6 MiB per sample).

| Category |     % |     Size | Samples |
| -------- | ----: | -------: | ------: |
| stdlib   | 94.2% | 35.5 GiB |   1,864 |
| ours     |  5.8% | 2.19 GiB |     106 |
| native   | <0.1% | 2.59 KiB |       2 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |     Size | Samples | Function                             | Location                                                   |
| ----: | -------: | ------: | ------------------------------------ | ---------------------------------------------------------- |
|  4.2% | 1.59 GiB |      68 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.8% |  305 MiB |       5 | `collectClusters(int[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.4% |  139 MiB |      12 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.2% | 77.8 MiB |       4 | `vectorSum()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.1% |   40 MiB |       2 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| <0.1% | 16.9 MiB |       1 | `lambda$boxed$0(int)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| <0.1% | 12.3 MiB |       2 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| <0.1% | 9.24 MiB |       3 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| <0.1% | 7.77 MiB |       1 | `computeClusterAverages()`           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| <0.1% | 3.31 MiB |       2 | `lambda$merge$6(List, List)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| <0.1% | 1.48 MiB |       4 | `lambda$generateData$4(int)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| <0.1% | 1.12 MiB |       4 | `valueOf(double)`                    | `java.lang.Double`                                         |
| <0.1% |  951 KiB |       1 | `collectGarbage(String)`             | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`   |
| <0.1% |  386 KiB |       1 | `opt(String, Read)`                  | `scopt.OptionParser`                                       |

#### Lines

Lines ranked by contribution to each function's self size.

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Location                                                       |
| -----: | -------: | ------: | -------------------------------------------------------------- |
| 100.0% | 1.59 GiB |      68 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:223` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Location                                                       |
| -----: | ------: | ------: | -------------------------------------------------------------- |
| 100.0% | 305 MiB |       5 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:209` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Location                                                       |
| -----: | ------: | ------: | -------------------------------------------------------------- |
| 100.0% | 139 MiB |      12 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |     Size | Samples | Location                                                      |
| -----: | -------: | ------: | ------------------------------------------------------------- |
| 100.0% | 77.8 MiB |       4 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |   Size | Samples | Location                                                       |
| -----: | -----: | ------: | -------------------------------------------------------------- |
| 100.0% | 40 MiB |       2 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |

##### `lambda$boxed$0(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |     Size | Samples | Location                                                   |
| -----: | -------: | ------: | ---------------------------------------------------------- |
| 100.0% | 16.9 MiB |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:327` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |     Size | Samples | Location                                                      |
| -----: | -------: | ------: | ------------------------------------------------------------- |
| 100.0% | 12.3 MiB |       2 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:430` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |     Size | Samples | Location                                                      |
| -----: | -------: | ------: | ------------------------------------------------------------- |
| 100.0% | 9.24 MiB |       3 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |     Size | Samples | Location                                                   |
| -----: | -------: | ------: | ---------------------------------------------------------- |
| 100.0% | 7.77 MiB |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:314` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Location                                        |
| -----: | -------: | ------: | ----------------------------------------------- |
| 100.0% | 3.31 MiB |       2 | `org.renaissance.jdk.concurrent.JavaKMeans:114` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Location                                       |
| -----: | -------: | ------: | ---------------------------------------------- |
| 100.0% | 1.48 MiB |       4 | `org.renaissance.jdk.concurrent.JavaKMeans:87` |

##### `valueOf(double)` (`java.lang.Double`)

|      % |     Size | Samples | Location               |
| -----: | -------: | ------: | ---------------------- |
| 100.0% | 1.12 MiB |       4 | `java.lang.Double:773` |

##### `collectGarbage(String)` (`org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`)

|      % |    Size | Samples | Location                                                    |
| -----: | ------: | ------: | ----------------------------------------------------------- |
| 100.0% | 951 KiB |       1 | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin:26` |

##### `opt(String, Read)` (`scopt.OptionParser`)

|      % |    Size | Samples | Location                 |
| -----: | ------: | ------: | ------------------------ |
| 100.0% | 386 KiB |       1 | `scopt.OptionParser:100` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Caller              | Location                                                   |
| -----: | -------: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% | 1.59 GiB |      68 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Caller              | Location                                                   |
| -----: | ------: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% | 305 MiB |       5 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Caller      | Location                                               |
| -----: | ------: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% | 139 MiB |      12 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |     Size | Samples | Caller              | Location                                                  |
| -----: | -------: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% | 77.8 MiB |       4 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |   Size | Samples | Caller          | Location                                                                              |
| -----: | -----: | ------: | --------------- | ------------------------------------------------------------------------------------- |
| 100.0% | 40 MiB |       2 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001204b38` |

##### `lambda$boxed$0(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |     Size | Samples | Caller       | Location                                                                          |
| -----: | -------: | ------: | ------------ | --------------------------------------------------------------------------------- |
| 100.0% | 16.9 MiB |       1 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask$$Lambda.0x0000007001205510` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |     Size | Samples | Caller                               | Location                                                  |
| -----: | -------: | ------: | ------------------------------------ | --------------------------------------------------------- |
| 100.0% | 12.3 MiB |       2 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |     Size | Samples | Caller      | Location                                               |
| -----: | -------: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% | 9.24 MiB |       3 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |     Size | Samples | Caller              | Location                                               |
| -----: | -------: | ------: | ------------------- | ------------------------------------------------------ |
| 100.0% | 7.77 MiB |       1 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Caller                  | Location                                                               |
| -----: | -------: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| 100.0% | 3.31 MiB |       2 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Caller       | Location                                                               |
| -----: | -------: | ------: | ------------ | ---------------------------------------------------------------------- |
| 100.0% | 1.48 MiB |       4 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a1d48` |

##### `valueOf(double)` (`java.lang.Double`)

|      % |     Size | Samples | Caller                                           | Location                                    |
| -----: | -------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| 100.0% | 1.12 MiB |       4 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `collectGarbage(String)` (`org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`)

|      % |    Size | Samples | Caller                                      | Location                                                 |
| -----: | ------: | ------: | ------------------------------------------- | -------------------------------------------------------- |
| 100.0% | 951 KiB |       1 | `afterOperationSetUp(String, int, boolean)` | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin` |

##### `opt(String, Read)` (`scopt.OptionParser`)

|      % |    Size | Samples | Caller                    | Location             |
| -----: | ------: | ------: | ------------------------- | -------------------- |
| 100.0% | 386 KiB |       1 | `opt(char, String, Read)` | `scopt.OptionParser` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |     Size | Samples | Function                            | Location                                                               |
| ----: | -------: | ------: | ----------------------------------- | ---------------------------------------------------------------------- |
| 99.4% | 37.5 GiB |   1,844 | `compute()`                         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 82.8% | 31.2 GiB |   1,531 | `merge(Map, Map)`                   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 82.8% | 31.2 GiB |   1,531 | `combineResults(Map, Map)`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 82.8% | 31.2 GiB |   1,531 | `combineResults(Object, Object)`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 82.5% | 31.1 GiB |   1,525 | `lambda$merge$6(List, List)`        | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 82.5% | 31.1 GiB |   1,525 | `apply(Object, Object)`             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0` |
| 82.5% | 31.1 GiB |   1,525 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`                                                    |
| 82.5% | 31.1 GiB |   1,525 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 82.5% | 31.1 GiB |   1,525 | `accept(Object, Object)`            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88` |
| 82.5% | 31.1 GiB |   1,525 | `forEach(BiConsumer)`               | `java.util.HashMap`                                                    |
| 67.8% | 25.6 GiB |   1,234 | `join()`                            | `java.util.concurrent.ForkJoinTask`                                    |
| 59.4% | 22.4 GiB |   1,133 | `addAll(Collection)`                | `java.util.ArrayList`                                                  |
| 23.2% | 8.74 GiB |     390 | `<init>(Collection)`                | `java.util.ArrayList`                                                  |
| 20.5% | 7.73 GiB |     216 | `invoke()`                          | `java.util.concurrent.ForkJoinTask`                                    |
| 20.3% | 7.65 GiB |     208 | `lambda$run$0(int, List, int)`      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 20.3% | 7.65 GiB |     208 | `call()`                            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0` |
| 15.9% | 5.99 GiB |     290 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 11.7% |  4.4 GiB |     222 | `collectClusters(int[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 10.2% | 3.84 GiB |     206 | `add(Object)`                       | `java.util.ArrayList`                                                  |
|  4.2% | 1.59 GiB |      68 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % |     Size | Samples | Callee                           | Location                                                   |
| ----: | -------: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 83.3% | 31.2 GiB |   1,531 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 68.2% | 25.6 GiB |   1,234 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
| 16.0% | 5.99 GiB |     290 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.4% |  139 MiB |      12 | `createSubtask(int, int)`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.2% | 77.8 MiB |       4 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % |     Size | Samples | Callee                | Location            |
| ----: | -------: | ------: | --------------------- | ------------------- |
| 99.6% | 31.1 GiB |   1,525 | `forEach(BiConsumer)` | `java.util.HashMap` |
|  0.4% |  114 MiB |       6 | `<init>(Map)`         | `java.util.HashMap` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Callee            | Location                                    |
| -----: | -------: | ------: | ----------------- | ------------------------------------------- |
| 100.0% | 31.2 GiB |   1,531 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Callee                     | Location                                                   |
| -----: | -------: | ------: | -------------------------- | ---------------------------------------------------------- |
| 100.0% | 31.2 GiB |   1,531 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % |     Size | Samples | Callee               | Location              |
| ----: | -------: | ------: | -------------------- | --------------------- |
| 71.9% | 22.4 GiB |   1,133 | `addAll(Collection)` | `java.util.ArrayList` |
| 28.1% | 8.74 GiB |     390 | `<init>(Collection)` | `java.util.ArrayList` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0`)

|      % |     Size | Samples | Callee                       | Location                                    |
| -----: | -------: | ------: | ---------------------------- | ------------------------------------------- |
| 100.0% | 31.1 GiB |   1,525 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|      % |     Size | Samples | Callee                  | Location                                                               |
| -----: | -------: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| 100.0% | 31.1 GiB |   1,525 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Callee                              | Location            |
| -----: | -------: | ------: | ----------------------------------- | ------------------- |
| 100.0% | 31.1 GiB |   1,525 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88`)

|      % |     Size | Samples | Callee                              | Location                                    |
| -----: | -------: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% | 31.1 GiB |   1,525 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|      % |     Size | Samples | Callee                   | Location                                                               |
| -----: | -------: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| 100.0% | 31.1 GiB |   1,525 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Callee     | Location                            |
| -----: | -------: | ------: | ---------- | ----------------------------------- |
| 100.0% | 7.65 GiB |     208 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0`)

|      % |     Size | Samples | Callee                         | Location                                    |
| -----: | -------: | ------: | ------------------------------ | ------------------------------------------- |
| 100.0% | 7.65 GiB |     208 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Callee                   | Location                                                   |
| -----: | -------: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% | 5.99 GiB |     290 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  73.4% |  4.4 GiB |     222 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  26.6% | 1.59 GiB |      68 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % |     Size | Samples | Callee                              | Location              |
| ----: | -------: | ------: | ----------------------------------- | --------------------- |
| 87.3% | 3.84 GiB |     205 | `add(Object)`                       | `java.util.ArrayList` |
|  5.9% |  267 MiB |      12 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`   |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame. `…` stands for frames the entry filter hides.

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----: | -------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 16.5% | 6.21 GiB |     351 | `addAll(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  8.5% | 3.19 GiB |     191 | `addAll(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  6.5% | 2.45 GiB |     127 | `<init>(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  6.2% | 2.33 GiB |      84 | `addAll(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `invoke()` (`java.util.concurrent.ForkJoinTask`) ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  5.7% | 2.16 GiB |      34 | `addAll(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `invoke()` (`java.util.concurrent.ForkJoinTask`) ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0`)                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  5.1% | 1.91 GiB |     108 | `addAll(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  3.9% | 1.47 GiB |      71 | `addAll(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                         |
|  3.8% | 1.42 GiB |      66 | `addAll(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                             |
|  3.4% | 1.26 GiB |      47 | `<init>(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  2.9% | 1.09 GiB |      78 | `addAll(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                     |
|  2.6% |  995 MiB |      41 | `add(Object)` (`java.util.ArrayList`) ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  2.3% |  901 MiB |      37 | `<init>(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `invoke()` (`java.util.concurrent.ForkJoinTask`) ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  2.3% |  882 MiB |      48 | `add(Object)` (`java.util.ArrayList`) ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                 |
|  2.2% |  862 MiB |      11 | `<init>(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `invoke()` (`java.util.concurrent.ForkJoinTask`) ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0`)                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  2.1% |  799 MiB |      39 | `add(Object)` (`java.util.ArrayList`) ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                             |
|  2.1% |  794 MiB |      46 | `addAll(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) |
|  1.9% |  723 MiB |      28 | `<init>(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                             |
|  1.7% |  637 MiB |      32 | `add(Object)` (`java.util.ArrayList`) ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.6% |  616 MiB |      45 | `<init>(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.6% |  607 MiB |      33 | `<init>(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                     |

# Retained heap profile

Retained 2.57 MiB over 13 samples (202 KiB per sample).

| Category |      % |     Size | Samples |
| -------- | -----: | -------: | ------: |
| stdlib   | 100.0% | 2.57 MiB |      12 |
| ours     |  <0.1% |     24 B |       1 |

## Hottest functions

### Self size

Functions ranked by bytes retained directly in the function body, excluding callees.

|     % | Size | Samples | Function            | Location             |
| ----: | ---: | ------: | ------------------- | -------------------- |
| <0.1% | 96 B |       4 | `valueOf(double)`   | `java.lang.Double`   |
| <0.1% | 24 B |       1 | `opt(String, Read)` | `scopt.OptionParser` |

#### Lines

Lines ranked by contribution to each function's self size.

##### `valueOf(double)` (`java.lang.Double`)

|      % | Size | Samples | Location               |
| -----: | ---: | ------: | ---------------------- |
| 100.0% | 96 B |       4 | `java.lang.Double:773` |

##### `opt(String, Read)` (`scopt.OptionParser`)

|      % | Size | Samples | Location                 |
| -----: | ---: | ------: | ------------------------ |
| 100.0% | 24 B |       1 | `scopt.OptionParser:100` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `valueOf(double)` (`java.lang.Double`)

|      % | Size | Samples | Caller                                           | Location                                    |
| -----: | ---: | ------: | ------------------------------------------------ | ------------------------------------------- |
| 100.0% | 96 B |       4 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `opt(String, Read)` (`scopt.OptionParser`)

|      % | Size | Samples | Caller                    | Location             |
| -----: | ---: | ------: | ------------------------- | -------------------- |
| 100.0% | 24 B |       1 | `opt(char, String, Read)` | `scopt.OptionParser` |

### Total size

Functions ranked by total bytes retained in the function and all its callees.

|     % |     Size | Samples | Function                                                                                                               | Location                                                               |
| ----: | -------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 90.3% | 2.32 MiB |      10 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
| 90.3% | 2.32 MiB |      10 | `invoke(Object, Object[])`                                                                                             | `java.lang.reflect.Method`                                             |
| 90.3% | 2.32 MiB |      10 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
| 90.3% | 2.32 MiB |      10 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
| 90.3% | 2.32 MiB |      10 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
| 80.6% | 2.07 MiB |       8 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
| 80.2% | 2.06 MiB |       5 | `collect(Collector)`                                                                                                   | `java.util.stream.ReferencePipeline`                                   |
| 80.2% | 2.06 MiB |       5 | `generateData(int, int, int)`                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 80.2% | 2.06 MiB |       5 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | `org.renaissance.jdk.concurrent.FjKmeans`                              |
| 80.2% | 2.06 MiB |       5 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
| 80.2% | 2.06 MiB |       5 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
| 80.2% | 2.06 MiB |       5 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001198798` |
| 80.2% | 2.06 MiB |       5 | `foreach(Function1)`                                                                                                   | `scala.collection.immutable.List`                                      |
| 80.2% | 2.06 MiB |       5 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
|  9.8% |  257 KiB |       3 | `loadClass(String)`                                                                                                    | `java.lang.ClassLoader`                                                |
|  0.4% | 10.2 KiB |       2 | `parse(Seq, Object)`                                                                                                   | `scopt.OptionParser`                                                   |
|  0.4% | 10.2 KiB |       2 | `parse(String[])`                                                                                                      | `org.renaissance.harness.ConfigParser`                                 |
|  0.3% | 8.02 KiB |       1 | `linkCallSite(Object, Object, Object, Object, Object, Object[])`                                                       | `java.lang.invoke.MethodHandleNatives`                                 |
|  0.3% | 8.02 KiB |       1 | `runParser(Seq, Object, List, OParserSetup)`                                                                           | `scopt.ORunner$`                                                       |
|  0.1% | 2.16 KiB |       1 | `optionsWithProgramName()`                                                                                             | `scopt.OptionParser`                                                   |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|     % |     Size | Samples | Callee              | Location                                    |
| ----: | -------: | ------: | ------------------- | ------------------------------------------- |
| 89.3% | 2.07 MiB |       8 | `main(String[])`    | `org.renaissance.harness.RenaissanceSuite$` |
| 10.7% |  255 KiB |       2 | `loadClass(String)` | `java.lang.ClassLoader`                     |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|      % |     Size | Samples | Callee                     | Location                   |
| -----: | -------: | ------: | -------------------------- | -------------------------- |
| 100.0% | 2.32 MiB |      10 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|      % |     Size | Samples | Callee                                                      | Location                        |
| -----: | -------: | ------: | ----------------------------------------------------------- | ------------------------------- |
| 100.0% | 2.32 MiB |      10 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.core.Launcher`)

|      % |     Size | Samples | Callee                                 | Location                        |
| -----: | -------: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 2.32 MiB |      10 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|     % |     Size | Samples | Callee                                                                        | Location                                    |
| ----: | -------: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| 99.5% | 2.06 MiB |       5 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |
|  0.5% | 10.2 KiB |       2 | `parse(String[])`                                                             | `org.renaissance.harness.ConfigParser`      |
| <0.1% |     24 B |       1 | `<init>(Map)`                                                                 | `org.renaissance.harness.ConfigParser`      |

##### `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Callee               | Location                             |
| -----: | -------: | ------: | -------------------- | ------------------------------------ |
| 100.0% | 2.06 MiB |       5 | `collect(Collector)` | `java.util.stream.ReferencePipeline` |

##### `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|      % |     Size | Samples | Callee                        | Location                                    |
| -----: | -------: | ------: | ----------------------------- | ------------------------------------------- |
| 100.0% | 2.06 MiB |       5 | `generateData(int, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

|      % |     Size | Samples | Callee                             | Location                                  |
| -----: | -------: | ------: | ---------------------------------- | ----------------------------------------- |
| 100.0% | 2.06 MiB |       5 | `setUpBeforeAll(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |     Size | Samples | Callee               | Location                                  |
| -----: | -------: | ------: | -------------------- | ----------------------------------------- |
| 100.0% | 2.06 MiB |       5 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001198798`)

|      % |     Size | Samples | Callee                                                                                                                 | Location                                    |
| -----: | -------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 2.06 MiB |       5 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |     Size | Samples | Callee               | Location                          |
| -----: | -------: | ------: | -------------------- | --------------------------------- |
| 100.0% | 2.06 MiB |       5 | `foreach(Function1)` | `scala.collection.immutable.List` |

##### `parse(Seq, Object)` (`scopt.OptionParser`)

|     % |     Size | Samples | Callee                                       | Location             |
| ----: | -------: | ------: | -------------------------------------------- | -------------------- |
| 78.7% | 8.02 KiB |       1 | `runParser(Seq, Object, List, OParserSetup)` | `scopt.ORunner$`     |
| 21.3% | 2.16 KiB |       1 | `optionsWithProgramName()`                   | `scopt.OptionParser` |

##### `parse(String[])` (`org.renaissance.harness.ConfigParser`)

|      % |     Size | Samples | Callee               | Location             |
| -----: | -------: | ------: | -------------------- | -------------------- |
| 100.0% | 10.2 KiB |       2 | `parse(Seq, Object)` | `scopt.OptionParser` |

##### `runParser(Seq, Object, List, OParserSetup)` (`scopt.ORunner$`)

|      % |     Size | Samples | Callee                                                           | Location                               |
| -----: | -------: | ------: | ---------------------------------------------------------------- | -------------------------------------- |
| 100.0% | 8.02 KiB |       1 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `optionsWithProgramName()` (`scopt.OptionParser`)

|      % |     Size | Samples | Callee              | Location                |
| -----: | -------: | ------: | ------------------- | ----------------------- |
| 100.0% | 2.16 KiB |       1 | `loadClass(String)` | `java.lang.ClassLoader` |

## Hottest call stacks

Call stacks ranked by bytes retained in their leaf frame. `…` stands for frames the entry filter hides.

Common call stack: `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← … ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----: | -------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 80.2% | 2.06 MiB |       1 | `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001198798`) ← … ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  9.7% |  255 KiB |       2 | `loadClass(String)` (`java.lang.ClassLoader`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.3% | 8.02 KiB |       1 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`) ← `runParser(Seq, Object, List, OParserSetup)` (`scopt.ORunner$`) ← `parse(Seq, Object)` (`scopt.OptionParser`) ← `parse(String[])` (`org.renaissance.harness.ConfigParser`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.1% | 2.16 KiB |       1 | `loadClass(String)` (`java.lang.ClassLoader`) ← `optionsWithProgramName()` (`scopt.OptionParser`) ← `parse(Seq, Object)` ← `parse(String[])` (`org.renaissance.harness.ConfigParser`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| <0.1% |     96 B |       4 | `valueOf(double)` (`java.lang.Double`) ← `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a1b10`) ← … ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a18d8`) ← … ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001198798`) ← … ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` |
| <0.1% |     24 B |       1 | `opt(String, Read)` (`scopt.OptionParser`) ← `opt(char, String, Read)` ← `<init>(Map)` (`org.renaissance.harness.ConfigParser$$anon$1`) ← `createParser(Map)` (`org.renaissance.harness.ConfigParser`) ← `<init>(Map)` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

# Lock contention profile

Blocked 7.03s over 54 samples (130.2ms per sample).

| Category |      % |  Time | Samples |
| -------- | -----: | ----: | ------: |
| stdlib   | 100.0% | 7.03s |      54 |

## Hottest functions

### Total time

Functions ranked by total time blocked in the function and all its callees.

|     % |   Time | Samples | Function                                                                                                               | Location                                                               |
| ----: | -----: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 87.9% |  6.17s |      16 | `get()`                                                                                                                | `java.util.concurrent.ForkJoinTask`                                    |
| 87.9% |  6.17s |      16 | `run(int, List, int)`                                                                                                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 87.9% |  6.17s |      16 | `$anonfun$1(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`                              |
| 87.9% |  6.17s |      16 | `$anonfun$adapted$1(Object)`                                                                                           | `org.renaissance.jdk.concurrent.FjKmeans`                              |
| 87.9% |  6.17s |      16 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011f6c70`   |
| 87.9% |  6.17s |      16 | `map(Function1)`                                                                                                       | `scala.collection.immutable.Range`                                     |
| 87.9% |  6.17s |      16 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                              |
| 87.9% |  6.17s |      16 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |
| 87.9% |  6.17s |      16 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
| 87.9% |  6.17s |      16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
| 87.9% |  6.17s |      16 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001198798` |
| 87.9% |  6.17s |      16 | `foreach(Function1)`                                                                                                   | `scala.collection.immutable.List`                                      |
| 87.9% |  6.17s |      16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
| 87.9% |  6.17s |      16 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
| 87.9% |  6.17s |      16 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
| 87.9% |  6.17s |      16 | `invoke(Object, Object[])`                                                                                             | `java.lang.reflect.Method`                                             |
| 87.9% |  6.17s |      16 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
| 87.9% |  6.17s |      16 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
| 87.9% |  6.17s |      16 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
|  0.2% | 10.9ms |       1 | `join()`                                                                                                               | `java.util.concurrent.ForkJoinTask`                                    |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |  Time | Samples | Callee  | Location                            |
| -----: | ----: | ------: | ------- | ----------------------------------- |
| 100.0% | 6.17s |      16 | `get()` | `java.util.concurrent.ForkJoinTask` |

##### `$anonfun$1(int)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|      % |  Time | Samples | Callee                | Location                                    |
| -----: | ----: | ------: | --------------------- | ------------------------------------------- |
| 100.0% | 6.17s |      16 | `run(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `$anonfun$adapted$1(Object)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|      % |  Time | Samples | Callee            | Location                                  |
| -----: | ----: | ------: | ----------------- | ----------------------------------------- |
| 100.0% | 6.17s |      16 | `$anonfun$1(int)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011f6c70`)

|      % |  Time | Samples | Callee                       | Location                                  |
| -----: | ----: | ------: | ---------------------------- | ----------------------------------------- |
| 100.0% | 6.17s |      16 | `$anonfun$adapted$1(Object)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `map(Function1)` (`scala.collection.immutable.Range`)

|      % |  Time | Samples | Callee          | Location                                                             |
| -----: | ----: | ------: | --------------- | -------------------------------------------------------------------- |
| 100.0% | 6.17s |      16 | `apply(Object)` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011f6c70` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|      % |  Time | Samples | Callee           | Location                           |
| -----: | ----: | ------: | ---------------- | ---------------------------------- |
| 100.0% | 6.17s |      16 | `map(Function1)` | `scala.collection.immutable.Range` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

|      % |  Time | Samples | Callee                  | Location                                  |
| -----: | ----: | ------: | ----------------------- | ----------------------------------------- |
| 100.0% | 6.17s |      16 | `run(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

|      % |  Time | Samples | Callee                  | Location                                  |
| -----: | ----: | ------: | ----------------------- | ----------------------------------------- |
| 100.0% | 6.17s |      16 | `executeOperation(int)` | `org.renaissance.harness.ExecutionDriver` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |  Time | Samples | Callee               | Location                                  |
| -----: | ----: | ------: | -------------------- | ----------------------------------------- |
| 100.0% | 6.17s |      16 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001198798`)

|      % |  Time | Samples | Callee                                                                                                                 | Location                                    |
| -----: | ----: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 6.17s |      16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |  Time | Samples | Callee               | Location                          |
| -----: | ----: | ------: | -------------------- | --------------------------------- |
| 100.0% | 6.17s |      16 | `foreach(Function1)` | `scala.collection.immutable.List` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |  Time | Samples | Callee                                                                        | Location                                    |
| -----: | ----: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 6.17s |      16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|      % |  Time | Samples | Callee           | Location                                    |
| -----: | ----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% | 6.17s |      16 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|      % |  Time | Samples | Callee                     | Location                   |
| -----: | ----: | ------: | -------------------------- | -------------------------- |
| 100.0% | 6.17s |      16 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|      % |  Time | Samples | Callee                                                      | Location                        |
| -----: | ----: | ------: | ----------------------------------------------------------- | ------------------------------- |
| 100.0% | 6.17s |      16 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.core.Launcher`)

|      % |  Time | Samples | Callee                                 | Location                        |
| -----: | ----: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 6.17s |      16 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

## Hottest call stacks

Call stacks ranked by time blocked in their leaf frame. `…` stands for frames the entry filter hides.

|     % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----: | -----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 87.9% |  6.17s |      16 | `get()` (`java.util.concurrent.ForkJoinTask`) ← `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `$anonfun$1(int)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `$anonfun$adapted$1(Object)` ← `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011f6c70`) ← `map(Function1)` (`scala.collection.immutable.Range`) ← `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001198798`) ← … ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← … ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])` |
|  0.2% | 10.9ms |       1 | `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `invoke()` (`java.util.concurrent.ForkJoinTask`) ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← … ← `invoke()` (`java.util.concurrent.ForkJoinTask`) ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0`)                                                                                                                                                                                                                                                                                                                                                                                                                              |

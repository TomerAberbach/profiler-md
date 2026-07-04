# Sampling profile

Collected 4,711 samples.

| Category |     % | Samples |
| -------- | ----: | ------: |
| ours     | 60.1% |   2,829 |
| native   | 24.4% |   1,151 |
| stdlib   | 14.5% |     685 |
| jit      |  1.0% |      46 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                   | Location                                                 |
| ----: | ------: | -------------------------- | -------------------------------------------------------- |
| 20.7% |     974 | `accumulate`               | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| 18.8% |     887 | `distance`                 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| 10.6% |     499 | `vectorSum`                | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  7.5% |     354 | `findNearestCentroid`      | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  2.8% |     133 | `computeIfAbsent`          | java.util.HashMap                                        |
|  2.3% |     106 | `doubleValue`              | java.lang.Double                                         |
|  2.1% |     101 | `collectClusters`          | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  1.3% |      61 | `add`                      | java.util.ArrayList                                      |
|  1.0% |      46 | `zero_blocks`              | `<unknown>`                                              |
|  0.2% |      10 | `merge`                    | java.util.HashMap                                        |
|  0.1% |       5 | `addAll`                   | java.util.ArrayList                                      |
|  0.1% |       3 | `compute`                  | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask     |
|  0.1% |       3 | `get`                      | java.util.ArrayList                                      |
| <0.1% |       2 | `forEach`                  | java.util.HashMap                                        |
| <0.1% |       2 | `lambda$generateData$3`    | org.renaissance.jdk.concurrent.JavaKMeans                |
| <0.1% |       2 | `createSubtask`            | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| <0.1% |       2 | `lambda$collectClusters$0` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| <0.1% |       1 | `join`                     | java.util.concurrent.ForkJoinTask                        |
| <0.1% |       1 | `combineResults`           | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| <0.1% |       1 | `lambda$merge$6`           | org.renaissance.jdk.concurrent.JavaKMeans                |

#### Callers

Callers ranked by contribution to each function's self samples. Caller attribution may be imprecise due to inlining.

##### `accumulate` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Caller      | Location                                                |
| -----: | ------: | ----------- | ------------------------------------------------------- |
| 100.0% |     974 | `vectorSum` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `distance` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Caller                | Location                                                 |
| -----: | ------: | --------------------- | -------------------------------------------------------- |
| 100.0% |     887 | `findNearestCentroid` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `vectorSum` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Caller            | Location                                                |
| -----: | ------: | ----------------- | ------------------------------------------------------- |
| 100.0% |     499 | `computeDirectly` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `findNearestCentroid` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Caller            | Location                                                 |
| -----: | ------: | ----------------- | -------------------------------------------------------- |
| 100.0% |     354 | `computeDirectly` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `computeIfAbsent` (java.util.HashMap)

|      % | Samples | Caller            | Location                                                 |
| -----: | ------: | ----------------- | -------------------------------------------------------- |
| 100.0% |     133 | `collectClusters` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `doubleValue` (java.lang.Double)

|     % | Samples | Caller       | Location                                                 |
| ----: | ------: | ------------ | -------------------------------------------------------- |
| 84.0% |      89 | `accumulate` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| 16.0% |      17 | `distance`   | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `collectClusters` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Caller            | Location                                                 |
| -----: | ------: | ----------------- | -------------------------------------------------------- |
| 100.0% |     101 | `computeDirectly` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `add` (java.util.ArrayList)

|     % | Samples | Caller            | Location                                                 |
| ----: | ------: | ----------------- | -------------------------------------------------------- |
| 93.4% |      57 | `add`             | java.util.ArrayList                                      |
|  6.6% |       4 | `collectClusters` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `zero_blocks` (`<unknown>`)

|     % | Samples | Caller                | Location                                                 |
| ----: | ------: | --------------------- | -------------------------------------------------------- |
| 63.0% |      29 | `merge`               | java.util.HashMap                                        |
| 10.9% |       5 | `findNearestCentroid` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  2.2% |       1 | `<init>`              | java.util.ArrayList                                      |

##### `merge` (java.util.HashMap)

|      % | Samples | Caller           | Location                                  |
| -----: | ------: | ---------------- | ----------------------------------------- |
| 100.0% |      10 | `lambda$merge$7` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `addAll` (java.util.ArrayList)

|      % | Samples | Caller           | Location                                  |
| -----: | ------: | ---------------- | ----------------------------------------- |
| 100.0% |       5 | `lambda$merge$6` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `get` (java.util.ArrayList)

|     % | Samples | Caller            | Location                                                 |
| ----: | ------: | ----------------- | -------------------------------------------------------- |
| 66.7% |       2 | `vectorSum`       | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| 33.3% |       1 | `collectClusters` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `forEach` (java.util.HashMap)

|      % | Samples | Caller  | Location                                  |
| -----: | ------: | ------- | ----------------------------------------- |
| 100.0% |       2 | `merge` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `lambda$generateData$3` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % | Samples | Caller  | Location                                                             |
| -----: | ------: | ------- | -------------------------------------------------------------------- |
| 100.0% |       2 | `apply` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401125b10 |

##### `createSubtask` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Caller    | Location                                             |
| -----: | ------: | --------- | ---------------------------------------------------- |
| 100.0% |       2 | `compute` | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |

##### `lambda$collectClusters$0` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Caller  | Location                                                                            |
| -----: | ------: | ------- | ----------------------------------------------------------------------------------- |
| 100.0% |       2 | `apply` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000000401186b38 |

##### `join` (java.util.concurrent.ForkJoinTask)

|      % | Samples | Caller    | Location                                             |
| -----: | ------: | --------- | ---------------------------------------------------- |
| 100.0% |       1 | `compute` | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |

##### `combineResults` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Caller    | Location                                             |
| -----: | ------: | --------- | ---------------------------------------------------- |
| 100.0% |       1 | `compute` | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |

##### `lambda$merge$6` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % | Samples | Caller  | Location                                                             |
| -----: | ------: | ------- | -------------------------------------------------------------------- |
| 100.0% |       1 | `apply` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187218 |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                 | Location                                                             |
| ----: | ------: | ------------------------ | -------------------------------------------------------------------- |
| 89.2% |   4,204 | `compute`                | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask                 |
| 86.1% |   4,054 | `join`                   | java.util.concurrent.ForkJoinTask                                    |
| 37.5% |   1,768 | `computeDirectly`        | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
| 35.0% |   1,650 | `vectorSum`              | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask              |
| 35.0% |   1,650 | `computeDirectly`        | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask              |
| 28.2% |   1,327 | `findNearestCentroid`    | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
| 22.6% |   1,063 | `accumulate`             | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask              |
| 21.7% |   1,024 | `invoke`                 | java.util.concurrent.ForkJoinTask                                    |
| 19.2% |     906 | `distance`               | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
| 15.9% |     748 | `computeClusterAverages` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                 |
| 15.9% |     748 | `computeDirectly`        | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                 |
| 15.7% |     739 | `average`                | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                 |
|  9.7% |     458 | `lambda$run$0`           | org.renaissance.jdk.concurrent.JavaKMeans                            |
|  9.7% |     458 | `call`                   | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401183d68 |
|  9.4% |     441 | `collectClusters`        | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|  6.8% |     318 | `merge`                  | org.renaissance.jdk.concurrent.JavaKMeans                            |
|  6.7% |     317 | `combineResults`         | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|  6.4% |     302 | `forEach`                | java.util.HashMap                                                    |
|  6.4% |     300 | `merge`                  | java.util.HashMap                                                    |
|  6.4% |     300 | `lambda$merge$7`         | org.renaissance.jdk.concurrent.JavaKMeans                            |

#### Callees

Callees ranked by contribution to each function's total samples. Callee attribution may be imprecise due to inlining.

##### `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)

|     % | Samples | Callee            | Location                                                 |
| ----: | ------: | ----------------- | -------------------------------------------------------- |
| 96.4% |   4,054 | `join`            | java.util.concurrent.ForkJoinTask                        |
| 42.1% |   1,768 | `computeDirectly` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| 39.2% |   1,650 | `computeDirectly` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| 17.8% |     748 | `computeDirectly` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
|  7.5% |     317 | `combineResults`  | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `computeDirectly` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Callee                | Location                                                 |
| -----: | ------: | --------------------- | -------------------------------------------------------- |
| 100.0% |   1,768 | `computeDirectly`     | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  75.1% |   1,327 | `findNearestCentroid` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  24.9% |     441 | `collectClusters`     | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `vectorSum` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|     % | Samples | Callee                                           | Location                                                |
| ----: | ------: | ------------------------------------------------ | ------------------------------------------------------- |
| 64.4% |   1,063 | `accumulate`                                     | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |
|  5.3% |      87 | `get`                                            | java.util.ArrayList                                     |
|  0.1% |       1 | `InterpreterRuntime::frequency_counter_overflow` | `<unknown>`                                             |

##### `computeDirectly` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Callee            | Location                                                |
| -----: | ------: | ----------------- | ------------------------------------------------------- |
| 100.0% |   1,650 | `vectorSum`       | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |
| 100.0% |   1,650 | `computeDirectly` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `findNearestCentroid` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|     % | Samples | Callee                           | Location                                                 |
| ----: | ------: | -------------------------------- | -------------------------------------------------------- |
| 68.3% |     906 | `distance`                       | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  4.3% |      57 | `get`                            | java.util.ArrayList                                      |
|  0.4% |       5 | `zero_blocks`                    | `<unknown>`                                              |
|  0.2% |       3 | `counter_overflow Runtime1 stub` | `<unknown>`                                              |
|  0.2% |       2 | `_new_array_Java`                | `<unknown>`                                              |

##### `accumulate` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|    % | Samples | Callee        | Location         |
| ---: | ------: | ------------- | ---------------- |
| 8.4% |      89 | `doubleValue` | java.lang.Double |

##### `distance` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|    % | Samples | Callee                                           | Location         |
| ---: | ------: | ------------------------------------------------ | ---------------- |
| 1.9% |      17 | `doubleValue`                                    | java.lang.Double |
| 0.1% |       1 | `InterpreterRuntime::frequency_counter_overflow` | `<unknown>`      |
| 0.1% |       1 | `SafepointBlob`                                  | `<unknown>`      |

##### `computeClusterAverages` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|     % | Samples | Callee    | Location                                             |
| ----: | ------: | --------- | ---------------------------------------------------- |
| 98.8% |     739 | `average` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |
|  1.1% |       8 | `boxed`   | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |
|  0.1% |       1 | `put`     | java.util.HashMap                                    |

##### `computeDirectly` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % | Samples | Callee                   | Location                                             |
| -----: | ------: | ------------------------ | ---------------------------------------------------- |
| 100.0% |     748 | `computeClusterAverages` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |
| 100.0% |     748 | `computeDirectly`        | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |

##### `average` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % | Samples | Callee   | Location                          |
| -----: | ------: | -------- | --------------------------------- |
| 100.0% |     739 | `invoke` | java.util.concurrent.ForkJoinTask |

##### `lambda$run$0` (org.renaissance.jdk.concurrent.JavaKMeans)

|     % | Samples | Callee   | Location                                                 |
| ----: | ------: | -------- | -------------------------------------------------------- |
| 99.6% |     456 | `invoke` | java.util.concurrent.ForkJoinTask                        |
|  0.2% |       1 | `<init>` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
|  0.2% |       1 | `<init>` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `call` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401183d68)

|      % | Samples | Callee         | Location                                  |
| -----: | ------: | -------------- | ----------------------------------------- |
| 100.0% |     458 | `lambda$run$0` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `collectClusters` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|     % | Samples | Callee                     | Location            |
| ----: | ------: | -------------------------- | ------------------- |
| 38.5% |     170 | `computeIfAbsent`          | java.util.HashMap   |
| 25.2% |     111 | `add`                      | java.util.ArrayList |
| 13.2% |      58 | `get`                      | java.util.ArrayList |
|  0.2% |       1 | `resolve_opt_virtual_call` | `<unknown>`         |

##### `merge` (org.renaissance.jdk.concurrent.JavaKMeans)

|     % | Samples | Callee               | Location                         |
| ----: | ------: | -------------------- | -------------------------------- |
| 95.0% |     302 | `forEach`            | java.util.HashMap                |
|  4.4% |      14 | `<init>`             | java.util.HashMap                |
|  0.6% |       2 | `linkToTargetMethod` | java.lang.invoke.Invokers$Holder |

##### `combineResults` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|     % | Samples | Callee           | Location                                                 |
| ----: | ------: | ---------------- | -------------------------------------------------------- |
| 99.7% |     316 | `merge`          | org.renaissance.jdk.concurrent.JavaKMeans                |
| 99.7% |     316 | `combineResults` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `forEach` (java.util.HashMap)

|     % | Samples | Callee   | Location                                                             |
| ----: | ------: | -------- | -------------------------------------------------------------------- |
| 99.3% |     300 | `accept` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401186d88 |

##### `merge` (java.util.HashMap)

|     % | Samples | Callee        | Location                                                             |
| ----: | ------: | ------------- | -------------------------------------------------------------------- |
| 73.7% |     221 | `apply`       | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187218 |
|  9.7% |      29 | `zero_blocks` | `<unknown>`                                                          |

##### `lambda$merge$7` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % | Samples | Callee  | Location          |
| -----: | ------: | ------- | ----------------- |
| 100.0% |     300 | `merge` | java.util.HashMap |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.5% |     165 | `distance` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 3.1% |     147 | `distance` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2.9% |     135 | `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 2.8% |     130 | `distance` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2.5% |     118 | `accumulate` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 2.3% |     110 | `accumulate` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 2.3% |     107 | `distance` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2.0% |      94 | `vectorSum` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `computeDirectly` ← `computeDirectly` ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.8% |      86 | `distance` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke` (java.util.concurrent.ForkJoinTask) ← `lambda$run$0` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401183d68) |
| 1.7% |      78 | `accumulate` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.6% |      77 | `findNearestCentroid` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `computeDirectly` ← `computeDirectly` ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.6% |      74 | `vectorSum` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `computeDirectly` ← `computeDirectly` ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.5% |      69 | `vectorSum` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `computeDirectly` ← `computeDirectly` ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.4% |      68 | `distance` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                             |
| 1.4% |      67 | `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 1.4% |      66 | `accumulate` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke` (java.util.concurrent.ForkJoinTask) ← `average` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages` ← `computeDirectly` ← `computeDirectly` ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                              |
| 1.3% |      61 | `findNearestCentroid` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `computeDirectly` ← `computeDirectly` ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.1% |      54 | `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 1.1% |      54 | `accumulate` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `invoke` (java.util.concurrent.ForkJoinTask) ← `average` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages` ← `computeDirectly` ← `computeDirectly` ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                              |
| 1.1% |      53 | `accumulate` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join` (java.util.concurrent.ForkJoinTask) ← `compute` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

# Sampling profile

Collected 4,869 samples.

| Category |     % | Samples |
| -------- | ----: | ------: |
| ours     | 60.3% |   2,937 |
| native   | 23.1% |   1,124 |
| stdlib   | 15.1% |     733 |
| jit      |  1.5% |      75 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                   | Location                                                   |
| ----: | ------: | -------------------------- | ---------------------------------------------------------- |
| 19.8% |     965 | `distance`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 19.8% |     962 | `accumulate`               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  9.1% |     444 | `findNearestCentroid`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  8.6% |     420 | `vectorSum`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  3.0% |     148 | `computeIfAbsent`          | `java.util.HashMap`                                        |
|  2.9% |     141 | `doubleValue`              | `java.lang.Double`                                         |
|  2.6% |     129 | `collectClusters`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  1.5% |      73 | `zero_blocks`              | `<unknown>`                                                |
|  1.2% |      58 | `add`                      | `java.util.ArrayList`                                      |
|  0.2% |      12 | `merge`                    | `java.util.HashMap`                                        |
|  0.1% |       4 | `forEach`                  | `java.util.HashMap`                                        |
|  0.1% |       4 | `lambda$collectClusters$0` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.1% |       3 | `get`                      | `java.util.ArrayList`                                      |
|  0.1% |       3 | `join`                     | `java.util.concurrent.ForkJoinTask`                        |
| <0.1% |       2 | `computeDirectly`          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| <0.1% |       2 | `vtable stub`              | `<unknown>`                                                |
| <0.1% |       2 | `size`                     | `java.util.ArrayList`                                      |
| <0.1% |       2 | `<init>`                   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| <0.1% |       2 | `mach_absolute_time`       | `<unknown>`                                                |
| <0.1% |       1 | `merge`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                | Location                                                   |
| -----: | ------: | --------------------- | ---------------------------------------------------------- |
| 100.0% |     965 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller      | Location                                                  |
| -----: | ------: | ----------- | --------------------------------------------------------- |
| 100.0% |     962 | `vectorSum` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller            | Location                                                   |
| -----: | ------: | ----------------- | ---------------------------------------------------------- |
| 100.0% |     444 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller            | Location                                                  |
| -----: | ------: | ----------------- | --------------------------------------------------------- |
| 100.0% |     420 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeIfAbsent` (`java.util.HashMap`)

|      % | Samples | Caller            | Location                                                   |
| -----: | ------: | ----------------- | ---------------------------------------------------------- |
| 100.0% |     148 | `collectClusters` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `doubleValue` (`java.lang.Double`)

|     % | Samples | Caller       | Location                                                   |
| ----: | ------: | ------------ | ---------------------------------------------------------- |
| 87.9% |     124 | `accumulate` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 12.1% |      17 | `distance`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller            | Location                                                   |
| -----: | ------: | ----------------- | ---------------------------------------------------------- |
| 100.0% |     129 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `zero_blocks` (`<unknown>`)

|     % | Samples | Caller                | Location                                                   |
| ----: | ------: | --------------------- | ---------------------------------------------------------- |
| 63.0% |      46 | `merge`               | `java.util.HashMap`                                        |
|  9.6% |       7 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  2.7% |       2 | `<init>`              | `java.util.ArrayList`                                      |

##### `add` (`java.util.ArrayList`)

|     % | Samples | Caller            | Location                                                   |
| ----: | ------: | ----------------- | ---------------------------------------------------------- |
| 87.9% |      51 | `add`             | `java.util.ArrayList`                                      |
| 12.1% |       7 | `collectClusters` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `merge` (`java.util.HashMap`)

|      % | Samples | Caller           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |      12 | `lambda$merge$7` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach` (`java.util.HashMap`)

|      % | Samples | Caller  | Location                                    |
| -----: | ------: | ------- | ------------------------------------------- |
| 100.0% |       4 | `merge` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$collectClusters$0` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller  | Location                                                                              |
| -----: | ------: | ------- | ------------------------------------------------------------------------------------- |
| 100.0% |       4 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000d001186b38` |

##### `get` (`java.util.ArrayList`)

|     % | Samples | Caller            | Location                                                   |
| ----: | ------: | ----------------- | ---------------------------------------------------------- |
| 66.7% |       2 | `vectorSum`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 33.3% |       1 | `collectClusters` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `join` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       3 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       2 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `vtable stub` (`<unknown>`)

|     % | Samples | Caller    | Location                                               |
| ----: | ------: | --------- | ------------------------------------------------------ |
| 50.0% |       1 | `join`    | `java.util.concurrent.ForkJoinTask`                    |
| 50.0% |       1 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `size` (`java.util.ArrayList`)

|      % | Samples | Caller                | Location                                                   |
| -----: | ------: | --------------------- | ---------------------------------------------------------- |
| 100.0% |       2 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `<init>` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller   | Location                                               |
| -----: | ------: | -------- | ------------------------------------------------------ |
| 100.0% |       2 | `<init>` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `mach_absolute_time` (`<unknown>`)

|     % | Samples | Caller            | Location                                    |
| ----: | ------: | ----------------- | ------------------------------------------- |
| 50.0% |       1 | `getVmStartNanos` | `org.renaissance.harness.RenaissanceSuite$` |

##### `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller           | Location                                                   |
| -----: | ------: | ---------------- | ---------------------------------------------------------- |
| 100.0% |       1 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                 | Location                                                               |
| ----: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| 90.0% |   4,381 | `compute`                | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 86.6% |   4,218 | `join`                   | `java.util.concurrent.ForkJoinTask`                                    |
| 41.0% |   1,997 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 32.9% |   1,601 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 32.8% |   1,599 | `vectorSum`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 30.9% |   1,504 | `findNearestCentroid`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 22.3% |   1,086 | `accumulate`             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 20.2% |     984 | `distance`               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 20.1% |     981 | `invoke`                 | `java.util.concurrent.ForkJoinTask`                                    |
| 14.0% |     682 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 14.0% |     682 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 14.0% |     680 | `average`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 10.1% |     493 | `collectClusters`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  9.5% |     462 | `lambda$run$0`           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  9.5% |     462 | `call`                   | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001183d68` |
|  7.1% |     347 | `merge`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  7.1% |     347 | `combineResults`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  6.8% |     332 | `forEach`                | `java.util.HashMap`                                                    |
|  6.7% |     328 | `accept`                 | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001186d88` |
|  6.7% |     327 | `merge`                  | `java.util.HashMap`                                                    |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % | Samples | Callee            | Location                                                   |
| ----: | ------: | ----------------- | ---------------------------------------------------------- |
| 96.3% |   4,218 | `join`            | `java.util.concurrent.ForkJoinTask`                        |
| 45.6% |   1,997 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 36.5% |   1,601 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 15.6% |     682 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  7.9% |     347 | `combineResults`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `join` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee        | Location    |
| ----: | ------: | ------------- | ----------- |
| <0.1% |       1 | `vtable stub` | `<unknown>` |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee                | Location                                                   |
| -----: | ------: | --------------------- | ---------------------------------------------------------- |
| 100.0% |   1,997 | `computeDirectly`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  75.3% |   1,504 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  24.7% |     493 | `collectClusters`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Callee            | Location                                                  |
| ----: | ------: | ----------------- | --------------------------------------------------------- |
| 99.9% |   1,599 | `vectorSum`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| 99.9% |   1,599 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Callee               | Location                                                  |
| ----: | ------: | -------------------- | --------------------------------------------------------- |
| 67.9% |   1,086 | `accumulate`         | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  5.8% |      92 | `get`                | `java.util.ArrayList`                                     |
|  0.1% |       1 | `DeoptimizationBlob` | `<unknown>`                                               |

##### `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee            | Location                                                   |
| ----: | ------: | ----------------- | ---------------------------------------------------------- |
| 65.4% |     984 | `distance`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  4.3% |      64 | `get`             | `java.util.ArrayList`                                      |
|  0.5% |       7 | `zero_blocks`     | `<unknown>`                                                |
|  0.2% |       3 | `_new_array_Java` | `<unknown>`                                                |
|  0.1% |       2 | `size`            | `java.util.ArrayList`                                      |

##### `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Callee        | Location           |
| ----: | ------: | ------------- | ------------------ |
| 11.4% |     124 | `doubleValue` | `java.lang.Double` |

##### `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|    % | Samples | Callee          | Location           |
| ---: | ------: | --------------- | ------------------ |
| 1.7% |      17 | `doubleValue`   | `java.lang.Double` |
| 0.2% |       2 | `SafepointBlob` | `<unknown>`        |

##### `computeClusterAverages` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % | Samples | Callee    | Location                                               |
| ----: | ------: | --------- | ------------------------------------------------------ |
| 99.7% |     680 | `average` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  0.1% |       1 | `boxed`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  0.1% |       1 | `put`     | `java.util.HashMap`                                    |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee                   | Location                                               |
| -----: | ------: | ------------------------ | ------------------------------------------------------ |
| 100.0% |     682 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% |     682 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `average` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % | Samples | Callee   | Location                            |
| ----: | ------: | -------- | ----------------------------------- |
| 99.9% |     679 | `invoke` | `java.util.concurrent.ForkJoinTask` |

##### `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                           | Location              |
| ----: | ------: | -------------------------------- | --------------------- |
| 37.9% |     187 | `computeIfAbsent`                | `java.util.HashMap`   |
| 25.6% |     126 | `add`                            | `java.util.ArrayList` |
|  9.7% |      48 | `get`                            | `java.util.ArrayList` |
|  0.4% |       2 | `counter_overflow Runtime1 stub` | `<unknown>`           |
|  0.2% |       1 | `_new_instance_Java`             | `<unknown>`           |

##### `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee      | Location                                               |
| ----: | ------: | ----------- | ------------------------------------------------------ |
| 99.4% |     459 | `invoke`    | `java.util.concurrent.ForkJoinTask`                    |
|  0.4% |       2 | `<init>`    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  0.2% |       1 | `loadClass` | `java.lang.ClassLoader`                                |

##### `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001183d68`)

|      % | Samples | Callee         | Location                                    |
| -----: | ------: | -------------- | ------------------------------------------- |
| 100.0% |     462 | `lambda$run$0` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee    | Location            |
| ----: | ------: | --------- | ------------------- |
| 95.7% |     332 | `forEach` | `java.util.HashMap` |
|  4.0% |      14 | `<init>`  | `java.util.HashMap` |

##### `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee           | Location                                                   |
| -----: | ------: | ---------------- | ---------------------------------------------------------- |
| 100.0% |     347 | `merge`          | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| 100.0% |     347 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `forEach` (`java.util.HashMap`)

|     % | Samples | Callee   | Location                                                               |
| ----: | ------: | -------- | ---------------------------------------------------------------------- |
| 98.8% |     328 | `accept` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001186d88` |

##### `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001186d88`)

|     % | Samples | Callee           | Location                                    |
| ----: | ------: | ---------------- | ------------------------------------------- |
| 99.7% |     327 | `lambda$merge$7` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge` (`java.util.HashMap`)

|     % | Samples | Callee        | Location                                                               |
| ----: | ------: | ------------- | ---------------------------------------------------------------------- |
| 67.0% |     219 | `apply`       | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d0011876a0` |
| 14.1% |      46 | `zero_blocks` | `<unknown>`                                                            |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4.1% |     200 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 3.5% |     172 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 2.7% |     133 | `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 2.6% |     129 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 2.5% |     121 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 2.2% |     108 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1.9% |      91 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.8% |      87 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                       |
| 1.7% |      85 | `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1.7% |      85 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `invoke` (`java.util.concurrent.ForkJoinTask`) ← `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001183d68`) |
| 1.7% |      84 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.6% |      76 | `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.5% |      75 | `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 1.5% |      71 | `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.4% |      68 | `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.3% |      65 | `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.3% |      62 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `invoke` (`java.util.concurrent.ForkJoinTask`) ← `average` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                      |
| 1.3% |      61 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `invoke` (`java.util.concurrent.ForkJoinTask`) ← `average` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                          |
| 1.2% |      59 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.1% |      52 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join` (`java.util.concurrent.ForkJoinTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

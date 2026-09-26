# Sampling profile

Collected 75,391 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Standard library | 93.3% |  70,362 |
| Ours             |  6.7% |   5,029 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                   | Location                                                   |
| ----: | ------: | -------------------------- | ---------------------------------------------------------- |
| 91.1% |  68,652 | `copyOf`                   | `java.util.Arrays`                                         |
|  4.5% |   3,402 | `findNearestCentroid`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.7% |     547 | `newNode`                  | `java.util.HashMap`                                        |
|  0.7% |     516 | `grow`                     | `java.util.ArrayList`                                      |
|  0.4% |     279 | `createSubtask`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.3% |     251 | `createSubtask`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.3% |     223 | `lambda$merge$6`           | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  0.3% |     223 | `resize`                   | `java.util.HashMap`                                        |
|  0.3% |     210 | `collectClusters`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.3% |     196 | `lambda$collectClusters$0` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.2% |     138 | `merge`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  0.2% |     132 | `vectorSum`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.2% |     127 | `add`                      | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.2% |     125 | `valueOf`                  | `java.lang.Double`                                         |
|  0.1% |      64 | `intStream`                | `java.util.stream.StreamSupport`                           |
|  0.1% |      52 | `mapToObj`                 | `java.util.stream.IntPipeline`                             |
|  0.1% |      41 | `lambda$generateData$4`    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| <0.1% |      34 | `range`                    | `java.util.stream.IntStream`                               |
| <0.1% |      28 | `entrySet`                 | `java.util.HashMap`                                        |
| <0.1% |      25 | `builder`                  | `java.util.stream.Nodes`                                   |

#### Categories

##### Standard library

|     % | Samples | Function           | Location                                   |
| ----: | ------: | ------------------ | ------------------------------------------ |
| 91.1% |  68,652 | `copyOf`           | `java.util.Arrays`                         |
|  0.7% |     547 | `newNode`          | `java.util.HashMap`                        |
|  0.7% |     516 | `grow`             | `java.util.ArrayList`                      |
|  0.3% |     223 | `resize`           | `java.util.HashMap`                        |
|  0.2% |     125 | `valueOf`          | `java.lang.Double`                         |
|  0.1% |      64 | `intStream`        | `java.util.stream.StreamSupport`           |
|  0.1% |      52 | `mapToObj`         | `java.util.stream.IntPipeline`             |
| <0.1% |      34 | `range`            | `java.util.stream.IntStream`               |
| <0.1% |      28 | `entrySet`         | `java.util.HashMap`                        |
| <0.1% |      25 | `builder`          | `java.util.stream.Nodes`                   |
| <0.1% |      24 | `opWrapSink`       | `java.util.stream.IntPipeline$1`           |
| <0.1% |      21 | `allocateInstance` | `java.lang.invoke.DirectMethodHandle`      |
| <0.1% |       9 | `allocateInstance` | `jdk.internal.misc.Unsafe`                 |
| <0.1% |       8 | `<init>`           | `java.util.zip.InflaterInputStream`        |
| <0.1% |       6 | `awaitDone`        | `java.util.concurrent.ForkJoinTask`        |
| <0.1% |       4 | `readNBytes`       | `java.io.InputStream`                      |
| <0.1% |       3 | `fillInStackTrace` | `java.lang.Throwable`                      |
| <0.1% |       3 | `copyOfRangeByte`  | `java.util.Arrays`                         |
| <0.1% |       2 | `initDataOffset`   | `java.util.zip.ZipFile$ZipFileInputStream` |
| <0.1% |       2 | `mapToObj`         | `java.util.stream.DoublePipeline`          |

##### Ours

|     % | Samples | Function                   | Location                                                   |
| ----: | ------: | -------------------------- | ---------------------------------------------------------- |
|  4.5% |   3,402 | `findNearestCentroid`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.4% |     279 | `createSubtask`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.3% |     251 | `createSubtask`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.3% |     223 | `lambda$merge$6`           | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  0.3% |     210 | `collectClusters`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.3% |     196 | `lambda$collectClusters$0` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.2% |     138 | `merge`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  0.2% |     132 | `vectorSum`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.2% |     127 | `add`                      | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.1% |      41 | `lambda$generateData$4`    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| <0.1% |      15 | `createSubtask`            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| <0.1% |      10 | `computeClusterAverages`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| <0.1% |       4 | `lambda$run$0`             | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| <0.1% |       1 | `div`                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `copyOf` (`java.util.Arrays`)

|     % | Samples | Caller     | Location                       |
| ----: | ------: | ---------- | ------------------------------ |
| 56.9% |  39,077 | `grow`     | `java.util.ArrayList`          |
| 43.0% |  29,524 | `toArray`  | `java.util.ArrayList`          |
| <0.1% |      31 | `copyOf`   | `java.util.Arrays`             |
| <0.1% |      20 | `getBytes` | `jdk.internal.loader.Resource` |

##### `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller            | Location                                                   |
| -----: | ------: | ----------------- | ---------------------------------------------------------- |
| 100.0% |   3,402 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `newNode` (`java.util.HashMap`)

|     % | Samples | Caller            | Location            |
| ----: | ------: | ----------------- | ------------------- |
| 50.3% |     275 | `putVal`          | `java.util.HashMap` |
| 49.4% |     270 | `computeIfAbsent` | `java.util.HashMap` |
|  0.4% |       2 | `merge`           | `java.util.HashMap` |

##### `grow` (`java.util.ArrayList`)

|      % | Samples | Caller | Location              |
| -----: | ------: | ------ | --------------------- |
| 100.0% |     516 | `grow` | `java.util.ArrayList` |

##### `createSubtask` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |     279 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `createSubtask` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |     251 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller  | Location                                                               |
| -----: | ------: | ------- | ---------------------------------------------------------------------- |
| 100.0% |     223 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001187470` |

##### `resize` (`java.util.HashMap`)

|     % | Samples | Caller            | Location            |
| ----: | ------: | ----------------- | ------------------- |
| 67.3% |     150 | `computeIfAbsent` | `java.util.HashMap` |
| 32.3% |      72 | `putVal`          | `java.util.HashMap` |
|  0.4% |       1 | `merge`           | `java.util.HashMap` |

##### `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller            | Location                                                   |
| -----: | ------: | ----------------- | ---------------------------------------------------------- |
| 100.0% |     210 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `lambda$collectClusters$0` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller  | Location                                                                              |
| -----: | ------: | ------- | ------------------------------------------------------------------------------------- |
| 100.0% |     196 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000d001186b38` |

##### `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Caller           | Location                                                   |
| ----: | ------: | ---------------- | ---------------------------------------------------------- |
| 98.6% |     136 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  1.4% |       2 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

##### `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller            | Location                                                  |
| -----: | ------: | ----------------- | --------------------------------------------------------- |
| 100.0% |     132 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `add` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller           | Location                                                  |
| -----: | ------: | ---------------- | --------------------------------------------------------- |
| 100.0% |     127 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `valueOf` (`java.lang.Double`)

|     % | Samples | Caller                  | Location                                                     |
| ----: | ------: | ----------------------- | ------------------------------------------------------------ |
| 96.0% |     120 | `lambda$generateData$3` | `org.renaissance.jdk.concurrent.JavaKMeans`                  |
|  4.0% |       5 | `apply`                 | `java.util.stream.DoublePipeline$$Lambda.0x000000d0011c0c08` |

##### `intStream` (`java.util.stream.StreamSupport`)

|      % | Samples | Caller  | Location                     |
| -----: | ------: | ------- | ---------------------------- |
| 100.0% |      64 | `range` | `java.util.stream.IntStream` |

##### `mapToObj` (`java.util.stream.IntPipeline`)

|      % | Samples | Caller     | Location                       |
| -----: | ------: | ---------- | ------------------------------ |
| 100.0% |      52 | `mapToObj` | `java.util.stream.IntPipeline` |

##### `lambda$generateData$4` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller  | Location                                                               |
| -----: | ------: | ------- | ---------------------------------------------------------------------- |
| 100.0% |      41 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001125d48` |

##### `range` (`java.util.stream.IntStream`)

|      % | Samples | Caller                  | Location                                    |
| -----: | ------: | ----------------------- | ------------------------------------------- |
| 100.0% |      34 | `lambda$generateData$5` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `entrySet` (`java.util.HashMap`)

|      % | Samples | Caller          | Location            |
| -----: | ------: | --------------- | ------------------- |
| 100.0% |      28 | `putMapEntries` | `java.util.HashMap` |

##### `builder` (`java.util.stream.Nodes`)

|      % | Samples | Caller            | Location                             |
| -----: | ------: | ----------------- | ------------------------------------ |
| 100.0% |      25 | `makeNodeBuilder` | `java.util.stream.ReferencePipeline` |

##### `opWrapSink` (`java.util.stream.IntPipeline$1`)

|      % | Samples | Caller     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |      24 | `wrapSink` | `java.util.stream.AbstractPipeline` |

##### `allocateInstance` (`java.lang.invoke.DirectMethodHandle`)

|      % | Samples | Caller             | Location                                             |
| -----: | ------: | ------------------ | ---------------------------------------------------- |
| 100.0% |      21 | `newInvokeSpecial` | `java.lang.invoke.LambdaForm$DMH.0x000000d001126400` |

##### `createSubtask` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |      15 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `computeClusterAverages` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller            | Location                                               |
| -----: | ------: | ----------------- | ------------------------------------------------------ |
| 100.0% |      10 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `allocateInstance` (`jdk.internal.misc.Unsafe`)

|      % | Samples | Caller             | Location                              |
| -----: | ------: | ------------------ | ------------------------------------- |
| 100.0% |       9 | `allocateInstance` | `java.lang.invoke.DirectMethodHandle` |

##### `<init>` (`java.util.zip.InflaterInputStream`)

|      % | Samples | Caller   | Location                                           |
| -----: | ------: | -------- | -------------------------------------------------- |
| 100.0% |       8 | `<init>` | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |

##### `awaitDone` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller | Location                            |
| -----: | ------: | ------ | ----------------------------------- |
| 100.0% |       6 | `join` | `java.util.concurrent.ForkJoinTask` |

##### `readNBytes` (`java.io.InputStream`)

|      % | Samples | Caller         | Location              |
| -----: | ------: | -------------- | --------------------- |
| 100.0% |       4 | `readAllBytes` | `java.io.InputStream` |

##### `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller | Location                                                               |
| -----: | ------: | ------ | ---------------------------------------------------------------------- |
| 100.0% |       4 | `call` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001183d68` |

##### `fillInStackTrace` (`java.lang.Throwable`)

|      % | Samples | Caller             | Location              |
| -----: | ------: | ------------------ | --------------------- |
| 100.0% |       3 | `fillInStackTrace` | `java.lang.Throwable` |

##### `copyOfRangeByte` (`java.util.Arrays`)

|      % | Samples | Caller        | Location           |
| -----: | ------: | ------------- | ------------------ |
| 100.0% |       3 | `copyOfRange` | `java.util.Arrays` |

##### `initDataOffset` (`java.util.zip.ZipFile$ZipFileInputStream`)

|      % | Samples | Caller | Location                                   |
| -----: | ------: | ------ | ------------------------------------------ |
| 100.0% |       2 | `read` | `java.util.zip.ZipFile$ZipFileInputStream` |

##### `mapToObj` (`java.util.stream.DoublePipeline`)

|      % | Samples | Caller  | Location                          |
| -----: | ------: | ------- | --------------------------------- |
| 100.0% |       2 | `boxed` | `java.util.stream.DoublePipeline` |

##### `div` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       1 | `average` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function           | Location                                                               |
| ----: | ------: | ------------------ | ---------------------------------------------------------------------- |
| 99.4% |  74,947 | `doExec`           | `java.util.concurrent.ForkJoinTask`                                    |
| 99.4% |  74,947 | `topLevelExec`     | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
| 99.4% |  74,947 | `scan`             | `java.util.concurrent.ForkJoinPool`                                    |
| 99.4% |  74,947 | `runWorker`        | `java.util.concurrent.ForkJoinPool`                                    |
| 99.4% |  74,947 | `run`              | `java.util.concurrent.ForkJoinWorkerThread`                            |
| 99.4% |  74,943 | `compute`          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 99.4% |  74,943 | `exec`             | `java.util.concurrent.RecursiveTask`                                   |
| 91.1% |  68,652 | `copyOf`           | `java.util.Arrays`                                                     |
| 80.0% |  60,350 | `awaitDone`        | `java.util.concurrent.ForkJoinTask`                                    |
| 80.0% |  60,350 | `join`             | `java.util.concurrent.ForkJoinTask`                                    |
| 79.2% |  59,697 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
| 76.4% |  57,610 | `merge`            | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 76.4% |  57,602 | `combineResults`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 75.7% |  57,104 | `merge`            | `java.util.HashMap`                                                    |
| 75.7% |  57,104 | `lambda$merge$7`   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 75.7% |  57,104 | `accept`           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001187228` |
| 75.7% |  57,104 | `forEach`          | `java.util.HashMap`                                                    |
| 75.7% |  57,101 | `lambda$merge$6`   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 75.7% |  57,101 | `apply`            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001187470` |
| 56.2% |  42,381 | `addAll`           | `java.util.ArrayList`                                                  |

#### Categories

##### Standard library

|     % | Samples | Function           | Location                                            |
| ----: | ------: | ------------------ | --------------------------------------------------- |
| 99.4% |  74,947 | `doExec`           | `java.util.concurrent.ForkJoinTask`                 |
| 99.4% |  74,947 | `topLevelExec`     | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 99.4% |  74,947 | `scan`             | `java.util.concurrent.ForkJoinPool`                 |
| 99.4% |  74,947 | `runWorker`        | `java.util.concurrent.ForkJoinPool`                 |
| 99.4% |  74,947 | `run`              | `java.util.concurrent.ForkJoinWorkerThread`         |
| 99.4% |  74,943 | `exec`             | `java.util.concurrent.RecursiveTask`                |
| 91.1% |  68,652 | `copyOf`           | `java.util.Arrays`                                  |
| 80.0% |  60,350 | `awaitDone`        | `java.util.concurrent.ForkJoinTask`                 |
| 80.0% |  60,350 | `join`             | `java.util.concurrent.ForkJoinTask`                 |
| 79.2% |  59,697 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 75.7% |  57,104 | `merge`            | `java.util.HashMap`                                 |
| 75.7% |  57,104 | `forEach`          | `java.util.HashMap`                                 |
| 56.2% |  42,381 | `addAll`           | `java.util.ArrayList`                               |
| 52.5% |  39,605 | `grow`             | `java.util.ArrayList`                               |
| 39.2% |  29,543 | `toArray`          | `java.util.ArrayList`                               |
| 20.6% |  15,523 | `invoke`           | `java.util.concurrent.ForkJoinTask`                 |
| 20.2% |  15,259 | `exec`             | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
| 19.2% |  14,497 | `<init>`           | `java.util.ArrayList`                               |
| 16.3% |  12,270 | `add`              | `java.util.ArrayList`                               |
| 14.9% |  11,204 | `helpJoin`         | `java.util.concurrent.ForkJoinPool`                 |

##### Ours

|     % | Samples | Function                    | Location                                                               |
| ----: | ------: | --------------------------- | ---------------------------------------------------------------------- |
| 99.4% |  74,943 | `compute`                   | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 76.4% |  57,610 | `merge`                     | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 76.4% |  57,602 | `combineResults`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 75.7% |  57,104 | `lambda$merge$7`            | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 75.7% |  57,104 | `accept`                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001187228` |
| 75.7% |  57,101 | `lambda$merge$6`            | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 75.7% |  57,101 | `apply`                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001187470` |
| 21.9% |  16,493 | `computeDirectly`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 20.2% |  15,259 | `lambda$run$0`              | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 20.2% |  15,259 | `call`                      | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001183d68` |
| 17.4% |  13,091 | `collectClusters`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  4.5% |   3,402 | `findNearestCentroid`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  0.6% |     444 | `launchHarnessClass`        | `org.renaissance.core.Launcher`                                        |
|  0.6% |     444 | `main`                      | `org.renaissance.core.Launcher`                                        |
|  0.6% |     443 | `main`                      | `org.renaissance.harness.RenaissanceSuite`                             |
|  0.6% |     443 | `loadAndInvokeHarnessClass` | `org.renaissance.core.Launcher`                                        |
|  0.6% |     439 | `main`                      | `org.renaissance.harness.RenaissanceSuite$`                            |
|  0.6% |     420 | `executeBenchmark`          | `org.renaissance.harness.ExecutionDriver`                              |
|  0.6% |     420 | `runBenchmarks$$anonfun$1`  | `org.renaissance.harness.RenaissanceSuite$`                            |
|  0.6% |     420 | `applyVoid`                 | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000d00111f208` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `doExec` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Callee | Location                                            |
| -----: | ------: | ------ | --------------------------------------------------- |
| 100.0% |  74,943 | `exec` | `java.util.concurrent.RecursiveTask`                |
|  20.4% |  15,259 | `exec` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Callee   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |  74,947 | `doExec` | `java.util.concurrent.ForkJoinTask` |

##### `scan` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Callee         | Location                                      |
| -----: | ------: | -------------- | --------------------------------------------- |
| 100.0% |  74,947 | `topLevelExec` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `runWorker` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Callee | Location                            |
| -----: | ------: | ------ | ----------------------------------- |
| 100.0% |  74,947 | `scan` | `java.util.concurrent.ForkJoinPool` |

##### `run` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % | Samples | Callee      | Location                            |
| -----: | ------: | ----------- | ----------------------------------- |
| 100.0% |  74,947 | `runWorker` | `java.util.concurrent.ForkJoinPool` |

##### `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % | Samples | Callee            | Location                                                   |
| ----: | ------: | ----------------- | ---------------------------------------------------------- |
| 80.5% |  60,350 | `join`            | `java.util.concurrent.ForkJoinTask`                        |
| 76.9% |  57,602 | `combineResults`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 22.0% |  16,493 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.4% |     327 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  0.4% |     279 | `createSubtask`   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### `exec` (`java.util.concurrent.RecursiveTask`)

|      % | Samples | Callee    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |  74,943 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `copyOf` (`java.util.Arrays`)

|     % | Samples | Callee   | Location           |
| ----: | ------: | -------- | ------------------ |
| <0.1% |      31 | `copyOf` | `java.util.Arrays` |

##### `awaitDone` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee             | Location                                      |
| ----: | ------: | ------------------ | --------------------------------------------- |
| 98.9% |  59,697 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 18.6% |  11,204 | `helpJoin`         | `java.util.concurrent.ForkJoinPool`           |

##### `join` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Callee      | Location                            |
| -----: | ------: | ----------- | ----------------------------------- |
| 100.0% |  60,350 | `awaitDone` | `java.util.concurrent.ForkJoinTask` |

##### `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Callee   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |  59,697 | `doExec` | `java.util.concurrent.ForkJoinTask` |

##### `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee    | Location            |
| ----: | ------: | --------- | ------------------- |
| 99.1% |  57,104 | `forEach` | `java.util.HashMap` |
|  0.6% |     368 | `<init>`  | `java.util.HashMap` |

##### `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee           | Location                                                   |
| -----: | ------: | ---------------- | ---------------------------------------------------------- |
| 100.0% |  57,602 | `merge`          | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| 100.0% |  57,602 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `merge` (`java.util.HashMap`)

|      % | Samples | Callee    | Location                                                               |
| -----: | ------: | --------- | ---------------------------------------------------------------------- |
| 100.0% |  57,101 | `apply`   | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001187470` |
|  <0.1% |       2 | `newNode` | `java.util.HashMap`                                                    |
|  <0.1% |       1 | `resize`  | `java.util.HashMap`                                                    |

##### `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Callee  | Location            |
| -----: | ------: | ------- | ------------------- |
| 100.0% |  57,104 | `merge` | `java.util.HashMap` |

##### `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001187228`)

|      % | Samples | Callee           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |  57,104 | `lambda$merge$7` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach` (`java.util.HashMap`)

|      % | Samples | Callee   | Location                                                               |
| -----: | ------: | -------- | ---------------------------------------------------------------------- |
| 100.0% |  57,104 | `accept` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001187228` |

##### `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee   | Location              |
| ----: | ------: | -------- | --------------------- |
| 74.2% |  42,381 | `addAll` | `java.util.ArrayList` |
| 25.4% |  14,497 | `<init>` | `java.util.ArrayList` |

##### `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001187470`)

|      % | Samples | Callee           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |  57,101 | `lambda$merge$6` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `addAll` (`java.util.ArrayList`)

|     % | Samples | Callee    | Location              |
| ----: | ------: | --------- | --------------------- |
| 64.5% |  27,335 | `grow`    | `java.util.ArrayList` |
| 35.5% |  15,046 | `toArray` | `java.util.ArrayList` |

##### `grow` (`java.util.ArrayList`)

|     % | Samples | Callee   | Location              |
| ----: | ------: | -------- | --------------------- |
| 98.7% |  39,089 | `copyOf` | `java.util.Arrays`    |
| 31.0% |  12,270 | `grow`   | `java.util.ArrayList` |

##### `toArray` (`java.util.ArrayList`)

|      % | Samples | Callee   | Location           |
| -----: | ------: | -------- | ------------------ |
| 100.0% |  29,543 | `copyOf` | `java.util.Arrays` |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee                | Location                                                   |
| -----: | ------: | --------------------- | ---------------------------------------------------------- |
| 100.0% |  16,493 | `computeDirectly`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  79.4% |  13,091 | `collectClusters`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  20.6% |   3,402 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `invoke` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Callee   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |  15,523 | `doExec` | `java.util.concurrent.ForkJoinTask` |

##### `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|      % | Samples | Callee | Location                                                               |
| -----: | ------: | ------ | ---------------------------------------------------------------------- |
| 100.0% |  15,259 | `call` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001183d68` |

##### `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Callee   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |  15,255 | `invoke` | `java.util.concurrent.ForkJoinTask` |

##### `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001183d68`)

|      % | Samples | Callee         | Location                                    |
| -----: | ------: | -------------- | ------------------------------------------- |
| 100.0% |  15,259 | `lambda$run$0` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `<init>` (`java.util.ArrayList`)

|      % | Samples | Callee    | Location              |
| -----: | ------: | --------- | --------------------- |
| 100.0% |  14,497 | `toArray` | `java.util.ArrayList` |

##### `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee            | Location              |
| ----: | ------: | ----------------- | --------------------- |
| 93.7% |  12,265 | `add`             | `java.util.ArrayList` |
|  4.7% |     616 | `computeIfAbsent` | `java.util.HashMap`   |

##### `add` (`java.util.ArrayList`)

|      % | Samples | Callee | Location              |
| -----: | ------: | ------ | --------------------- |
| 100.0% |  12,270 | `grow` | `java.util.ArrayList` |
| 100.0% |  12,270 | `add`  | `java.util.ArrayList` |

##### `helpJoin` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Callee   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |  11,204 | `doExec` | `java.util.concurrent.ForkJoinTask` |

##### `launchHarnessClass` (`org.renaissance.core.Launcher`)

|     % | Samples | Callee                      | Location                            |
| ----: | ------: | --------------------------- | ----------------------------------- |
| 99.8% |     443 | `loadAndInvokeHarnessClass` | `org.renaissance.core.Launcher`     |
|  0.2% |       1 | `create`                    | `org.renaissance.core.ModuleLoader` |

##### `main` (`org.renaissance.core.Launcher`)

|      % | Samples | Callee               | Location                        |
| -----: | ------: | -------------------- | ------------------------------- |
| 100.0% |     444 | `launchHarnessClass` | `org.renaissance.core.Launcher` |

##### `main` (`org.renaissance.harness.RenaissanceSuite`)

|     % | Samples | Callee      | Location                                    |
| ----: | ------: | ----------- | ------------------------------------------- |
| 99.1% |     439 | `main`      | `org.renaissance.harness.RenaissanceSuite$` |
|  0.9% |       4 | `loadClass` | `java.lang.ClassLoader`                     |

##### `loadAndInvokeHarnessClass` (`org.renaissance.core.Launcher`)

|      % | Samples | Callee   | Location                   |
| -----: | ------: | -------- | -------------------------- |
| 100.0% |     443 | `invoke` | `java.lang.reflect.Method` |

##### `main` (`org.renaissance.harness.RenaissanceSuite$`)

|     % | Samples | Callee          | Location                                    |
| ----: | ------: | --------------- | ------------------------------------------- |
| 95.7% |     420 | `runBenchmarks` | `org.renaissance.harness.RenaissanceSuite$` |
|  1.4% |       6 | `<init>`        | `org.renaissance.harness.ConfigParser`      |
|  1.1% |       5 | `parse`         | `org.renaissance.harness.ConfigParser`      |
|  0.7% |       3 | `<clinit>`      | `scala.Predef$`                             |
|  0.7% |       3 | `loadClass`     | `java.lang.ClassLoader`                     |

##### `executeBenchmark` (`org.renaissance.harness.ExecutionDriver`)

|     % | Samples | Callee             | Location                                  |
| ----: | ------: | ------------------ | ----------------------------------------- |
| 92.6% |     389 | `setUpBeforeAll`   | `org.renaissance.jdk.concurrent.FjKmeans` |
|  7.4% |      31 | `executeOperation` | `org.renaissance.harness.ExecutionDriver` |

##### `runBenchmarks$$anonfun$1` (`org.renaissance.harness.RenaissanceSuite$`)

|      % | Samples | Callee             | Location                                  |
| -----: | ------: | ------------------ | ----------------------------------------- |
| 100.0% |     420 | `executeBenchmark` | `org.renaissance.harness.ExecutionDriver` |

##### `applyVoid` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000d00111f208`)

|      % | Samples | Callee                     | Location                                    |
| -----: | ------: | -------------------------- | ------------------------------------------- |
| 100.0% |     420 | `runBenchmarks$$anonfun$1` | `org.renaissance.harness.RenaissanceSuite$` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`) ← `runWorker` ← `run` (`java.util.concurrent.ForkJoinWorkerThread`)

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 6.2% |   4,672 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001187470`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001187228`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 3.8% |   2,867 | `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001187470`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001187228`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 3.7% |   2,815 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001187470`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001187228`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 3.5% |   2,601 | `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `<init>` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001187470`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001187228`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 3.1% |   2,316 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001187470`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001187228`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 3.0% |   2,251 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `grow` ← `add` ← `add` ← `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                         |
| 2.9% |   2,188 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001187470`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001187228`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 2.6% |   1,980 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001187470`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001187228`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 2.5% |   1,884 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001187470`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001187228`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001183d68`) ← `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 2.3% |   1,761 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001187470`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001187228`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 2.3% |   1,720 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `grow` ← `add` ← `add` ← `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) |
| 2.2% |   1,680 | `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001187470`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001187228`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 2.0% |   1,507 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `grow` ← `add` ← `add` ← `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 2.0% |   1,476 | `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `<init>` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001187470`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001187228`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.8% |   1,365 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001187470`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001187228`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                  |
| 1.7% |   1,292 | `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001187470`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001187228`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.6% |   1,207 | `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `<init>` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001187470`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001187228`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.5% |   1,138 | `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001187470`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001187228`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.5% |   1,124 | `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `<init>` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001187470`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001187228`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001183d68`) ← `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.5% |   1,108 | `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001187470`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001187228`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001183d68`) ← `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

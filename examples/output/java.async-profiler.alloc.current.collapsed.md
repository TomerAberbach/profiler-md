# Sampling profile

Collected 75,061 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Standard library | 93.2% |  69,975 |
| Ours             |  6.8% |   5,086 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                   | Location                                                   |
| ----: | ------: | -------------------------- | ---------------------------------------------------------- |
| 91.1% |  68,365 | `copyOf`                   | `java.util.Arrays`                                         |
|  4.5% |   3,363 | `findNearestCentroid`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.7% |     518 | `newNode`                  | `java.util.HashMap`                                        |
|  0.7% |     494 | `grow`                     | `java.util.ArrayList`                                      |
|  0.4% |     292 | `createSubtask`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.4% |     270 | `createSubtask`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.3% |     222 | `resize`                   | `java.util.HashMap`                                        |
|  0.3% |     213 | `collectClusters`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.3% |     199 | `lambda$collectClusters$0` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.3% |     198 | `lambda$merge$6`           | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  0.2% |     165 | `merge`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  0.2% |     156 | `vectorSum`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.2% |     154 | `add`                      | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.2% |     120 | `valueOf`                  | `java.lang.Double`                                         |
|  0.1% |      51 | `mapToObj`                 | `java.util.stream.IntPipeline`                             |
|  0.1% |      48 | `intStream`                | `java.util.stream.StreamSupport`                           |
|  0.1% |      47 | `lambda$generateData$4`    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| <0.1% |      27 | `entrySet`                 | `java.util.HashMap`                                        |
| <0.1% |      23 | `range`                    | `java.util.stream.IntStream`                               |
| <0.1% |      19 | `builder`                  | `java.util.stream.Nodes`                                   |

#### Categories

##### Standard library

|     % | Samples | Function           | Location                                     |
| ----: | ------: | ------------------ | -------------------------------------------- |
| 91.1% |  68,365 | `copyOf`           | `java.util.Arrays`                           |
|  0.7% |     518 | `newNode`          | `java.util.HashMap`                          |
|  0.7% |     494 | `grow`             | `java.util.ArrayList`                        |
|  0.3% |     222 | `resize`           | `java.util.HashMap`                          |
|  0.2% |     120 | `valueOf`          | `java.lang.Double`                           |
|  0.1% |      51 | `mapToObj`         | `java.util.stream.IntPipeline`               |
|  0.1% |      48 | `intStream`        | `java.util.stream.StreamSupport`             |
| <0.1% |      27 | `entrySet`         | `java.util.HashMap`                          |
| <0.1% |      23 | `range`            | `java.util.stream.IntStream`                 |
| <0.1% |      19 | `builder`          | `java.util.stream.Nodes`                     |
| <0.1% |      17 | `allocateInstance` | `java.lang.invoke.DirectMethodHandle`        |
| <0.1% |      17 | `opWrapSink`       | `java.util.stream.IntPipeline$1`             |
| <0.1% |       9 | `<init>`           | `java.util.zip.InflaterInputStream`          |
| <0.1% |       8 | `awaitDone`        | `java.util.concurrent.ForkJoinTask`          |
| <0.1% |       4 | `allocateInstance` | `jdk.internal.misc.Unsafe`                   |
| <0.1% |       4 | `doubleStream`     | `java.util.stream.StreamSupport`             |
| <0.1% |       3 | `readNBytes`       | `java.io.InputStream`                        |
| <0.1% |       3 | `copyOfRangeByte`  | `java.util.Arrays`                           |
| <0.1% |       2 | `addConstantUtf8`  | `jdk.internal.org.objectweb.asm.SymbolTable` |
| <0.1% |       2 | `fillInStackTrace` | `java.lang.Throwable`                        |

##### Ours

|     % | Samples | Function                   | Location                                                   |
| ----: | ------: | -------------------------- | ---------------------------------------------------------- |
|  4.5% |   3,363 | `findNearestCentroid`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.4% |     292 | `createSubtask`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.4% |     270 | `createSubtask`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.3% |     213 | `collectClusters`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.3% |     199 | `lambda$collectClusters$0` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.3% |     198 | `lambda$merge$6`           | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  0.2% |     165 | `merge`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  0.2% |     156 | `vectorSum`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.2% |     154 | `add`                      | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.1% |      47 | `lambda$generateData$4`    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| <0.1% |      10 | `createSubtask`            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| <0.1% |       7 | `computeClusterAverages`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| <0.1% |       3 | `lambda$run$0`             | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| <0.1% |       3 | `lambda$boxed$0`           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| <0.1% |       3 | `div`                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| <0.1% |       2 | `collectGarbage`           | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`   |
| <0.1% |       1 | `average`                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `copyOf` (`java.util.Arrays`)

|     % | Samples | Caller                   | Location                          |
| ----: | ------: | ------------------------ | --------------------------------- |
| 56.9% |  38,911 | `grow`                   | `java.util.ArrayList`             |
| 43.0% |  29,398 | `toArray`                | `java.util.ArrayList`             |
| <0.1% |      29 | `copyOf`                 | `java.util.Arrays`                |
| <0.1% |      26 | `getBytes`               | `jdk.internal.loader.Resource`    |
| <0.1% |       1 | `ensureCapacityInternal` | `java.lang.AbstractStringBuilder` |

##### `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller            | Location                                                   |
| -----: | ------: | ----------------- | ---------------------------------------------------------- |
| 100.0% |   3,363 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `newNode` (`java.util.HashMap`)

|     % | Samples | Caller            | Location            |
| ----: | ------: | ----------------- | ------------------- |
| 51.7% |     268 | `computeIfAbsent` | `java.util.HashMap` |
| 47.9% |     248 | `putVal`          | `java.util.HashMap` |
|  0.4% |       2 | `merge`           | `java.util.HashMap` |

##### `grow` (`java.util.ArrayList`)

|      % | Samples | Caller | Location              |
| -----: | ------: | ------ | --------------------- |
| 100.0% |     494 | `grow` | `java.util.ArrayList` |

##### `createSubtask` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |     292 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `createSubtask` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |     270 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `resize` (`java.util.HashMap`)

|     % | Samples | Caller            | Location            |
| ----: | ------: | ----------------- | ------------------- |
| 59.9% |     133 | `computeIfAbsent` | `java.util.HashMap` |
| 39.6% |      88 | `putVal`          | `java.util.HashMap` |
|  0.5% |       1 | `merge`           | `java.util.HashMap` |

##### `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller            | Location                                                   |
| -----: | ------: | ----------------- | ---------------------------------------------------------- |
| 100.0% |     213 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `lambda$collectClusters$0` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller  | Location                                                                              |
| -----: | ------: | ------- | ------------------------------------------------------------------------------------- |
| 100.0% |     199 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000000401186b38` |

##### `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller  | Location                                                               |
| -----: | ------: | ------- | ---------------------------------------------------------------------- |
| 100.0% |     198 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187b48` |

##### `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller           | Location                                                   |
| -----: | ------: | ---------------- | ---------------------------------------------------------- |
| 100.0% |     165 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller            | Location                                                  |
| -----: | ------: | ----------------- | --------------------------------------------------------- |
| 100.0% |     156 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `add` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller           | Location                                                  |
| -----: | ------: | ---------------- | --------------------------------------------------------- |
| 100.0% |     154 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `valueOf` (`java.lang.Double`)

|     % | Samples | Caller                  | Location                                                     |
| ----: | ------: | ----------------------- | ------------------------------------------------------------ |
| 98.3% |     118 | `lambda$generateData$3` | `org.renaissance.jdk.concurrent.JavaKMeans`                  |
|  1.7% |       2 | `apply`                 | `java.util.stream.DoublePipeline$$Lambda.0x00000004011c0c08` |

##### `mapToObj` (`java.util.stream.IntPipeline`)

|      % | Samples | Caller     | Location                       |
| -----: | ------: | ---------- | ------------------------------ |
| 100.0% |      51 | `mapToObj` | `java.util.stream.IntPipeline` |

##### `intStream` (`java.util.stream.StreamSupport`)

|      % | Samples | Caller  | Location                     |
| -----: | ------: | ------- | ---------------------------- |
| 100.0% |      48 | `range` | `java.util.stream.IntStream` |

##### `lambda$generateData$4` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller  | Location                                                               |
| -----: | ------: | ------- | ---------------------------------------------------------------------- |
| 100.0% |      47 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401125d48` |

##### `entrySet` (`java.util.HashMap`)

|      % | Samples | Caller          | Location            |
| -----: | ------: | --------------- | ------------------- |
| 100.0% |      27 | `putMapEntries` | `java.util.HashMap` |

##### `range` (`java.util.stream.IntStream`)

|      % | Samples | Caller                  | Location                                    |
| -----: | ------: | ----------------------- | ------------------------------------------- |
| 100.0% |      23 | `lambda$generateData$5` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `builder` (`java.util.stream.Nodes`)

|      % | Samples | Caller            | Location                             |
| -----: | ------: | ----------------- | ------------------------------------ |
| 100.0% |      19 | `makeNodeBuilder` | `java.util.stream.ReferencePipeline` |

##### `allocateInstance` (`java.lang.invoke.DirectMethodHandle`)

|      % | Samples | Caller             | Location                                             |
| -----: | ------: | ------------------ | ---------------------------------------------------- |
| 100.0% |      17 | `newInvokeSpecial` | `java.lang.invoke.LambdaForm$DMH.0x0000000401126400` |

##### `opWrapSink` (`java.util.stream.IntPipeline$1`)

|      % | Samples | Caller     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |      17 | `wrapSink` | `java.util.stream.AbstractPipeline` |

##### `createSubtask` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |      10 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `<init>` (`java.util.zip.InflaterInputStream`)

|      % | Samples | Caller   | Location                                           |
| -----: | ------: | -------- | -------------------------------------------------- |
| 100.0% |       9 | `<init>` | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |

##### `awaitDone` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller | Location                            |
| -----: | ------: | ------ | ----------------------------------- |
| 100.0% |       8 | `join` | `java.util.concurrent.ForkJoinTask` |

##### `computeClusterAverages` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller            | Location                                               |
| -----: | ------: | ----------------- | ------------------------------------------------------ |
| 100.0% |       7 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `allocateInstance` (`jdk.internal.misc.Unsafe`)

|      % | Samples | Caller             | Location                              |
| -----: | ------: | ------------------ | ------------------------------------- |
| 100.0% |       4 | `allocateInstance` | `java.lang.invoke.DirectMethodHandle` |

##### `doubleStream` (`java.util.stream.StreamSupport`)

|      % | Samples | Caller   | Location           |
| -----: | ------: | -------- | ------------------ |
| 100.0% |       4 | `stream` | `java.util.Arrays` |

##### `readNBytes` (`java.io.InputStream`)

|      % | Samples | Caller         | Location              |
| -----: | ------: | -------------- | --------------------- |
| 100.0% |       3 | `readAllBytes` | `java.io.InputStream` |

##### `copyOfRangeByte` (`java.util.Arrays`)

|      % | Samples | Caller        | Location           |
| -----: | ------: | ------------- | ------------------ |
| 100.0% |       3 | `copyOfRange` | `java.util.Arrays` |

##### `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller | Location                                                               |
| -----: | ------: | ------ | ---------------------------------------------------------------------- |
| 100.0% |       3 | `call` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401183d68` |

##### `lambda$boxed$0` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller  | Location                                                                          |
| -----: | ------: | ------- | --------------------------------------------------------------------------------- |
| 100.0% |       3 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask$$Lambda.0x000000040118c9c8` |

##### `div` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       3 | `average` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `addConstantUtf8` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|     % | Samples | Caller                     | Location                                     |
| ----: | ------: | -------------------------- | -------------------------------------------- |
| 50.0% |       1 | `addConstantUtf8Reference` | `jdk.internal.org.objectweb.asm.SymbolTable` |
| 50.0% |       1 | `addConstantNameAndType`   | `jdk.internal.org.objectweb.asm.SymbolTable` |

##### `fillInStackTrace` (`java.lang.Throwable`)

|      % | Samples | Caller             | Location              |
| -----: | ------: | ------------------ | --------------------- |
| 100.0% |       2 | `fillInStackTrace` | `java.lang.Throwable` |

##### `collectGarbage` (`org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`)

|      % | Samples | Caller                | Location                                                 |
| -----: | ------: | --------------------- | -------------------------------------------------------- |
| 100.0% |       2 | `afterOperationSetUp` | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin` |

##### `average` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller                   | Location                                               |
| -----: | ------: | ------------------------ | ------------------------------------------------------ |
| 100.0% |       1 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function           | Location                                                               |
| ----: | ------: | ------------------ | ---------------------------------------------------------------------- |
| 99.5% |  74,651 | `doExec`           | `java.util.concurrent.ForkJoinTask`                                    |
| 99.5% |  74,651 | `topLevelExec`     | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
| 99.5% |  74,651 | `scan`             | `java.util.concurrent.ForkJoinPool`                                    |
| 99.5% |  74,651 | `runWorker`        | `java.util.concurrent.ForkJoinPool`                                    |
| 99.5% |  74,651 | `run`              | `java.util.concurrent.ForkJoinWorkerThread`                            |
| 99.4% |  74,648 | `compute`          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 99.4% |  74,648 | `exec`             | `java.util.concurrent.RecursiveTask`                                   |
| 91.1% |  68,365 | `copyOf`           | `java.util.Arrays`                                                     |
| 79.8% |  59,894 | `awaitDone`        | `java.util.concurrent.ForkJoinTask`                                    |
| 79.8% |  59,894 | `join`             | `java.util.concurrent.ForkJoinTask`                                    |
| 79.0% |  59,310 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
| 76.2% |  57,185 | `merge`            | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 76.2% |  57,179 | `combineResults`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 75.5% |  56,658 | `merge`            | `java.util.HashMap`                                                    |
| 75.5% |  56,658 | `lambda$merge$7`   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 75.5% |  56,658 | `accept`           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187228` |
| 75.5% |  56,658 | `forEach`          | `java.util.HashMap`                                                    |
| 75.5% |  56,655 | `lambda$merge$6`   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 75.5% |  56,655 | `apply`            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187b48` |
| 56.2% |  42,155 | `addAll`           | `java.util.ArrayList`                                                  |

#### Categories

##### Standard library

|     % | Samples | Function           | Location                                            |
| ----: | ------: | ------------------ | --------------------------------------------------- |
| 99.5% |  74,651 | `doExec`           | `java.util.concurrent.ForkJoinTask`                 |
| 99.5% |  74,651 | `topLevelExec`     | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 99.5% |  74,651 | `scan`             | `java.util.concurrent.ForkJoinPool`                 |
| 99.5% |  74,651 | `runWorker`        | `java.util.concurrent.ForkJoinPool`                 |
| 99.5% |  74,651 | `run`              | `java.util.concurrent.ForkJoinWorkerThread`         |
| 99.4% |  74,648 | `exec`             | `java.util.concurrent.RecursiveTask`                |
| 91.1% |  68,365 | `copyOf`           | `java.util.Arrays`                                  |
| 79.8% |  59,894 | `awaitDone`        | `java.util.concurrent.ForkJoinTask`                 |
| 79.8% |  59,894 | `join`             | `java.util.concurrent.ForkJoinTask`                 |
| 79.0% |  59,310 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 75.5% |  56,658 | `merge`            | `java.util.HashMap`                                 |
| 75.5% |  56,658 | `forEach`          | `java.util.HashMap`                                 |
| 56.2% |  42,155 | `addAll`           | `java.util.ArrayList`                               |
| 52.5% |  39,414 | `grow`             | `java.util.ArrayList`                               |
| 39.2% |  29,418 | `toArray`          | `java.util.ArrayList`                               |
| 20.5% |  15,418 | `invoke`           | `java.util.concurrent.ForkJoinTask`                 |
| 20.1% |  15,080 | `exec`             | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
| 19.1% |  14,302 | `<init>`           | `java.util.ArrayList`                               |
| 16.5% |  12,375 | `add`              | `java.util.ArrayList`                               |
| 14.1% |  10,594 | `helpJoin`         | `java.util.concurrent.ForkJoinPool`                 |

##### Ours

|     % | Samples | Function                    | Location                                                               |
| ----: | ------: | --------------------------- | ---------------------------------------------------------------------- |
| 99.4% |  74,648 | `compute`                   | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 76.2% |  57,185 | `merge`                     | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 76.2% |  57,179 | `combineResults`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 75.5% |  56,658 | `lambda$merge$7`            | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 75.5% |  56,658 | `accept`                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187228` |
| 75.5% |  56,655 | `lambda$merge$6`            | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 75.5% |  56,655 | `apply`                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187b48` |
| 22.0% |  16,548 | `computeDirectly`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 20.1% |  15,080 | `lambda$run$0`              | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 20.1% |  15,080 | `call`                      | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401183d68` |
| 17.6% |  13,185 | `collectClusters`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  4.5% |   3,363 | `findNearestCentroid`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  0.5% |     407 | `launchHarnessClass`        | `org.renaissance.core.Launcher`                                        |
|  0.5% |     407 | `main`                      | `org.renaissance.core.Launcher`                                        |
|  0.5% |     404 | `loadAndInvokeHarnessClass` | `org.renaissance.core.Launcher`                                        |
|  0.5% |     403 | `main`                      | `org.renaissance.harness.RenaissanceSuite`                             |
|  0.5% |     397 | `main`                      | `org.renaissance.harness.RenaissanceSuite$`                            |
|  0.5% |     391 | `computeClusterAverages`    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  0.5% |     391 | `computeDirectly`           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  0.5% |     371 | `average`                   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `doExec` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Callee | Location                                            |
| -----: | ------: | ------ | --------------------------------------------------- |
| 100.0% |  74,648 | `exec` | `java.util.concurrent.RecursiveTask`                |
|  20.2% |  15,080 | `exec` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Callee   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |  74,651 | `doExec` | `java.util.concurrent.ForkJoinTask` |

##### `scan` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Callee         | Location                                      |
| -----: | ------: | -------------- | --------------------------------------------- |
| 100.0% |  74,651 | `topLevelExec` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `runWorker` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Callee | Location                            |
| -----: | ------: | ------ | ----------------------------------- |
| 100.0% |  74,651 | `scan` | `java.util.concurrent.ForkJoinPool` |

##### `run` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % | Samples | Callee      | Location                            |
| -----: | ------: | ----------- | ----------------------------------- |
| 100.0% |  74,651 | `runWorker` | `java.util.concurrent.ForkJoinPool` |

##### `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % | Samples | Callee            | Location                                                   |
| ----: | ------: | ----------------- | ---------------------------------------------------------- |
| 80.2% |  59,894 | `join`            | `java.util.concurrent.ForkJoinTask`                        |
| 76.6% |  57,179 | `combineResults`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 22.2% |  16,548 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.5% |     391 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  0.4% |     292 | `createSubtask`   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### `exec` (`java.util.concurrent.RecursiveTask`)

|      % | Samples | Callee    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |  74,648 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `copyOf` (`java.util.Arrays`)

|     % | Samples | Callee   | Location           |
| ----: | ------: | -------- | ------------------ |
| <0.1% |      29 | `copyOf` | `java.util.Arrays` |

##### `awaitDone` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee             | Location                                      |
| ----: | ------: | ------------------ | --------------------------------------------- |
| 99.0% |  59,310 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 17.7% |  10,594 | `helpJoin`         | `java.util.concurrent.ForkJoinPool`           |

##### `join` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Callee      | Location                            |
| -----: | ------: | ----------- | ----------------------------------- |
| 100.0% |  59,894 | `awaitDone` | `java.util.concurrent.ForkJoinTask` |

##### `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Callee   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |  59,310 | `doExec` | `java.util.concurrent.ForkJoinTask` |

##### `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee               | Location                           |
| ----: | ------: | -------------------- | ---------------------------------- |
| 99.1% |  56,658 | `forEach`            | `java.util.HashMap`                |
|  0.6% |     361 | `<init>`             | `java.util.HashMap`                |
| <0.1% |       1 | `linkToTargetMethod` | `java.lang.invoke.Invokers$Holder` |

##### `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee           | Location                                                   |
| -----: | ------: | ---------------- | ---------------------------------------------------------- |
| 100.0% |  57,179 | `merge`          | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| 100.0% |  57,179 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `merge` (`java.util.HashMap`)

|      % | Samples | Callee    | Location                                                               |
| -----: | ------: | --------- | ---------------------------------------------------------------------- |
| 100.0% |  56,655 | `apply`   | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187b48` |
|  <0.1% |       2 | `newNode` | `java.util.HashMap`                                                    |
|  <0.1% |       1 | `resize`  | `java.util.HashMap`                                                    |

##### `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Callee  | Location            |
| -----: | ------: | ------- | ------------------- |
| 100.0% |  56,658 | `merge` | `java.util.HashMap` |

##### `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187228`)

|      % | Samples | Callee           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |  56,658 | `lambda$merge$7` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach` (`java.util.HashMap`)

|      % | Samples | Callee   | Location                                                               |
| -----: | ------: | -------- | ---------------------------------------------------------------------- |
| 100.0% |  56,658 | `accept` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187228` |

##### `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee   | Location              |
| ----: | ------: | -------- | --------------------- |
| 74.4% |  42,155 | `addAll` | `java.util.ArrayList` |
| 25.2% |  14,302 | `<init>` | `java.util.ArrayList` |

##### `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187b48`)

|      % | Samples | Callee           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |  56,655 | `lambda$merge$6` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `addAll` (`java.util.ArrayList`)

|     % | Samples | Callee    | Location              |
| ----: | ------: | --------- | --------------------- |
| 64.1% |  27,039 | `grow`    | `java.util.ArrayList` |
| 35.9% |  15,116 | `toArray` | `java.util.ArrayList` |

##### `grow` (`java.util.ArrayList`)

|     % | Samples | Callee   | Location              |
| ----: | ------: | -------- | --------------------- |
| 98.7% |  38,920 | `copyOf` | `java.util.Arrays`    |
| 31.4% |  12,375 | `grow`   | `java.util.ArrayList` |

##### `toArray` (`java.util.ArrayList`)

|      % | Samples | Callee   | Location           |
| -----: | ------: | -------- | ------------------ |
| 100.0% |  29,418 | `copyOf` | `java.util.Arrays` |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee                | Location                                                   |
| -----: | ------: | --------------------- | ---------------------------------------------------------- |
| 100.0% |  16,548 | `computeDirectly`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  79.7% |  13,185 | `collectClusters`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  20.3% |   3,363 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `invoke` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Callee   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |  15,418 | `doExec` | `java.util.concurrent.ForkJoinTask` |

##### `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|      % | Samples | Callee | Location                                                               |
| -----: | ------: | ------ | ---------------------------------------------------------------------- |
| 100.0% |  15,080 | `call` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401183d68` |

##### `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Callee   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |  15,077 | `invoke` | `java.util.concurrent.ForkJoinTask` |

##### `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401183d68`)

|      % | Samples | Callee         | Location                                    |
| -----: | ------: | -------------- | ------------------------------------------- |
| 100.0% |  15,080 | `lambda$run$0` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `<init>` (`java.util.ArrayList`)

|      % | Samples | Callee    | Location              |
| -----: | ------: | --------- | --------------------- |
| 100.0% |  14,302 | `toArray` | `java.util.ArrayList` |

##### `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee            | Location                               |
| ----: | ------: | ----------------- | -------------------------------------- |
| 93.8% |  12,371 | `add`             | `java.util.ArrayList`                  |
|  4.6% |     600 | `computeIfAbsent` | `java.util.HashMap`                    |
| <0.1% |       1 | `linkCallSite`    | `java.lang.invoke.MethodHandleNatives` |

##### `add` (`java.util.ArrayList`)

|      % | Samples | Callee | Location              |
| -----: | ------: | ------ | --------------------- |
| 100.0% |  12,375 | `grow` | `java.util.ArrayList` |
| 100.0% |  12,375 | `add`  | `java.util.ArrayList` |

##### `helpJoin` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Callee   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |  10,594 | `doExec` | `java.util.concurrent.ForkJoinTask` |

##### `launchHarnessClass` (`org.renaissance.core.Launcher`)

|     % | Samples | Callee                      | Location                            |
| ----: | ------: | --------------------------- | ----------------------------------- |
| 99.3% |     404 | `loadAndInvokeHarnessClass` | `org.renaissance.core.Launcher`     |
|  0.5% |       2 | `create`                    | `org.renaissance.core.ModuleLoader` |
|  0.2% |       1 | `createScratchRoot`         | `org.renaissance.core.Launcher`     |

##### `main` (`org.renaissance.core.Launcher`)

|      % | Samples | Callee               | Location                        |
| -----: | ------: | -------------------- | ------------------------------- |
| 100.0% |     407 | `launchHarnessClass` | `org.renaissance.core.Launcher` |

##### `loadAndInvokeHarnessClass` (`org.renaissance.core.Launcher`)

|     % | Samples | Callee      | Location                   |
| ----: | ------: | ----------- | -------------------------- |
| 99.8% |     403 | `invoke`    | `java.lang.reflect.Method` |
|  0.2% |       1 | `loadClass` | `java.lang.ClassLoader`    |

##### `main` (`org.renaissance.harness.RenaissanceSuite`)

|     % | Samples | Callee      | Location                                    |
| ----: | ------: | ----------- | ------------------------------------------- |
| 98.5% |     397 | `main`      | `org.renaissance.harness.RenaissanceSuite$` |
|  1.5% |       6 | `loadClass` | `java.lang.ClassLoader`                     |

##### `main` (`org.renaissance.harness.RenaissanceSuite$`)

|     % | Samples | Callee          | Location                                    |
| ----: | ------: | --------------- | ------------------------------------------- |
| 91.2% |     362 | `runBenchmarks` | `org.renaissance.harness.RenaissanceSuite$` |
|  2.8% |      11 | `parse`         | `org.renaissance.harness.ConfigParser`      |
|  2.3% |       9 | `<clinit>`      | `scala.Predef$`                             |
|  2.0% |       8 | `<init>`        | `org.renaissance.harness.ConfigParser`      |
|  1.0% |       4 | `loadClass`     | `java.lang.ClassLoader`                     |

##### `computeClusterAverages` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % | Samples | Callee    | Location                                               |
| ----: | ------: | --------- | ------------------------------------------------------ |
| 94.9% |     371 | `average` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  3.3% |      13 | `boxed`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  0.3% |       1 | `put`     | `java.util.HashMap`                                    |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee                   | Location                                               |
| -----: | ------: | ------------------------ | ------------------------------------------------------ |
| 100.0% |     391 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% |     391 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `average` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % | Samples | Callee   | Location                                               |
| ----: | ------: | -------- | ------------------------------------------------------ |
| 99.2% |     368 | `invoke` | `java.util.concurrent.ForkJoinTask`                    |
|  0.8% |       3 | `div`    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`) ← `runWorker` ← `run` (`java.util.concurrent.ForkJoinWorkerThread`)

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 6.4% |   4,798 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187b48`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187228`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 3.9% |   2,960 | `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187b48`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187228`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 3.9% |   2,951 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187b48`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187228`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 3.4% |   2,560 | `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `<init>` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187b48`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187228`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 3.0% |   2,283 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187b48`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187228`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 2.9% |   2,210 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `grow` ← `add` ← `add` ← `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                         |
| 2.8% |   2,114 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187b48`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187228`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 2.8% |   2,084 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187b48`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187228`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 2.5% |   1,859 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187b48`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187228`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401183d68`) ← `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 2.4% |   1,774 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187b48`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187228`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 2.3% |   1,730 | `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187b48`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187228`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 2.2% |   1,617 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `grow` ← `add` ← `add` ← `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) |
| 2.1% |   1,612 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `grow` ← `add` ← `add` ← `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 2.1% |   1,598 | `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `<init>` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187b48`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187228`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.8% |   1,333 | `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187b48`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187228`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.8% |   1,315 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187b48`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187228`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                  |
| 1.5% |   1,151 | `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187b48`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187228`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.5% |   1,144 | `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187b48`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187228`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401183d68`) ← `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.5% |   1,140 | `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `<init>` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187b48`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187228`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.5% |   1,119 | `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `<init>` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187b48`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187228`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401183d68`) ← `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
